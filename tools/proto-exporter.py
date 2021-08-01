import os
import re


def findFileDeclarations(file):
    lines = file.readlines()
    fileDeclarations = []
    for line in lines:
        if 'export const' in line:
            try:
                patternExportConst = "export const (.*?) = {"
                exportConst = re.search(patternExportConst, line).group(1)
                fileDeclarations.append(exportConst)
            except:
                pass
    return fileDeclarations


def generate_proto_export(namespace, path, blockedExports):
    PROTO_PATH = path
    tsHeader = "/* tslint:disable:variable-name */\n"
    tsImports = ""
    tsExports = f"\n\nnamespace {namespace} {{\n"
    fileDeclarations = []
    for root, dirs, files in os.walk(PROTO_PATH):
        for fileName in files:
            if(fileName.endswith(".ts") and fileName != "genesis.ts" and fileName != "params.ts"):
                filePath = os.path.join(root, fileName)
                isLegacy = filePath.find("legacy")  # exclude legacy modules
                if isLegacy == -1:
                    file = open(filePath, "r")
                    fileDeclarations = findFileDeclarations(file)

                    for blockedExport in blockedExports:
                        try:
                            fileDeclarations.remove(blockedExport)
                        except:
                            pass
                    if(len(fileDeclarations) > 0):
                        exportPath = filePath.replace(
                            "src", "..").replace(".ts", "")

                        tsImports += "\nimport {\n"
                        for decl in fileDeclarations:
                            tsImports += f"\t{decl} as _{decl},\n "
                            tsExports += f"\texport const {decl} = _{decl};\n"
                            tsExports += f"\texport type {decl} = _{decl};\n\n"
                        tsImports += f"}} from '{exportPath}';\n"

    tsExports += f"}}\n\nexport default {namespace};"
    f = open(f"./src/types/{namespace}.ts", "a")
    f.truncate(0)
    f.writelines(tsHeader)
    f.writelines(tsImports)
    f.writelines(tsExports)
    f.close()


generate_proto_export("DesmosTypes", "src/lib/proto/desmos",
                      ["QueryParamsRequest", "QueryParamsResponse"])
""" generate_proto_export("CosmosTypes", "src/lib/proto/cosmos",
                      ["QueryParamsRequest", "QueryParamsResponse", "Params"]) """
