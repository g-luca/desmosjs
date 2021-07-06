#!/usr/bin/env bash

set -eo pipefail

# Define variables
BUILD=.build
OUT=src/lib/proto
PROTO=proto
THIRD_PARTY=third_party

rm -r -f $BUILD
rm -r -f "$PROTO"
rm -r -f "$THIRD_PARTY"
rm -r -f "$OUT"



function generate_proto(){
  PROTOC="protoc --ts_proto_opt=esModuleInterop=false,forceLong=Long,env=browser,useOptionals=true --plugin=./node_modules/.bin/protoc-gen-ts_proto --ts_proto_out=$OUT -I ./$THIRD_PARTY/proto"

  # Generate the third party Protobuf implementations
  proto_dirs=$(find "$THIRD_PARTY/proto" -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)
  for dir in $proto_dirs; do
    $PROTOC --proto_path $THIRD_PARTY/proto $(find "${dir}" -maxdepth 1 -name '*.proto')
  done


  # Generate the Desmos Protobuf implementation
  proto_dirs=$(find "$PROTO" -path -prune -o -name '*.proto' -print0 | xargs -0 -n1 dirname | sort | uniq)

  for dir in $proto_dirs; do
    $PROTOC -I $PROTO  $(find "${dir}" -maxdepth 1 -name '*.proto')
  done
}

## Download the Protobuf files of Desmos
DESMOS_VERSION=0.16.3
PKG_VERSION=$DESMOS_VERSION
PKG_NAME=desmos
PKG_NAME_SDK=desmos
PKG_GIT_URL=https://github.com/desmos-labs/desmos/archive/v$DESMOS_VERSION.zip
source tools/get_proto.sh $PROTO $THIRD_PARTY $OUT $PKG_VERSION $PKG_NAME
## Generate Desmos proto TS implementation
generate_proto


## Delete Desmos proto cosmos files as soon as they will be generated again by cosmos-sdk
rm -rf third_party/proto/cosmos/


## Download the Protobuf files of Cosmos
COSMOS_VERSION=0.42.5
PKG_VERSION=$COSMOS_VERSION
PKG_NAME=cosmos
PKG_NAME_SDK=cosmos-sdk
PKG_GIT_URL=https://github.com/cosmos/cosmos-sdk/archive/v$PKG_VERSION.zip
source tools/get_proto.sh $PROTO $THIRD_PARTY $OUT $PKG_VERSION $PKG_NAME
## Generate Cosmos-SDK proto TS implementation
generate_proto



