import os
import re


def findFileDeclarations(file, allDeclared):
    lines = file.readlines()
    fileDeclarations = []
    for line in lines:
        if 'export const' in line:
            try:
                patternExportConst = "export const (.*?) = {"
                exportConst = re.search(patternExportConst, line).group(1)
                if exportConst not in allDeclared:
                    fileDeclarations.append(exportConst)
            except:
                pass
    # Enums export
    for line in lines:
        if 'export enum' in line:
            try:
                patternExportConst = "export enum (.*?) {"
                exportConst = re.search(patternExportConst, line).group(1)
                if exportConst not in allDeclared:
                    fileDeclarations.append(exportConst)
            except:
                pass
    return fileDeclarations


def generate_proto_export(namespace, path, blockedExports):
    PROTO_PATH = path
    allDeclared = []  # contains all the declarations made
    fileDeclarations = []
    tsImports = """/* tslint:disable:variable-name */"""
    tsExports = """"""
    for root, dirs, files in os.walk(PROTO_PATH):
        for fileName in files:
            if(fileName.endswith(".ts") and fileName != "genesis.ts" and fileName != "params.ts"):
                filePath = os.path.join(root, fileName)
                isLegacy = filePath.find("legacy")  # exclude legacy modules
                if isLegacy == -1:
                    file = open(filePath, "r")
                    fileDeclarations = findFileDeclarations(file, allDeclared)

                    for blockedExport in blockedExports:
                        try:
                            fileDeclarations.remove(blockedExport)
                        except:
                            pass
                    if(len(fileDeclarations) > 0):
                        exportPath = filePath.replace(
                            "src", ".").replace(".ts", "")

                        tsImports += "\nimport {\n"
                        for decl in fileDeclarations:
                            allDeclared.append(decl)
                            tsImports += f"\t{decl} as _{decl},\n "
                            tsExports += f"export const {namespace}{decl} = _{decl};\n"
                            tsExports += f"export type {namespace}{decl} = _{decl};\n\n"
                        tsImports += f"}} from '{exportPath}';\n"
    return tsImports + tsExports


cosmosExports = generate_proto_export(
    "Cosmos", "src/lib/proto/cosmos", ["Attribute", "Params", "QueryParamsRequest", "QueryParamsResponse", "Result"])
desmosExports = generate_proto_export("Desmos", "src/lib/proto/desmos", [])


f = open("./src/DesmosJS.ts", "r")
previous = f.read()
previous = previous.split("/* tslint:disable:variable-name */")[0]
f.close()

f = open("./src/DesmosJS.ts", "w")
f.truncate(0)
final = previous + cosmosExports + desmosExports
f.writelines(final)
f.close()
