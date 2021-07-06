#!/usr/bin/env bash

set -eo pipefail

BUILD=.build

PROTO=$1
THIRD_PARTY=$2
OUT=$3
PKG_VERSION=$4

mkdir -p $BUILD
mkdir -p "$PROTO"
mkdir -p "$THIRD_PARTY"
mkdir -p "$OUT"

# Download the $PKG_NAME Protobuf files
PKG_ZIP="$BUILD/$PKG_NAME.zip"
wget -O "$PKG_ZIP" "$PKG_GIT_URL"
unzip "$PKG_ZIP" -d "$BUILD/" && rm "$PKG_ZIP"
PKG="$BUILD/$PKG_NAME_SDK-$PKG_VERSION"

PROTO_PKG=$PROTO/$PKG_NAME
mkdir -p "$PROTO_PKG"
cp -a "$PKG/proto/$PKG_NAME"/* "$PROTO_PKG"
rm -r "$PKG/proto/$PKG_NAME"

mkdir -p "$THIRD_PARTY"
cp -a "$PKG/third_party"/* "$THIRD_PARTY"
rm -r "$PKG/third_party"

# Get the missing Protobuf types files
PROTO_PROTOBUF=$THIRD_PARTY/proto/google/protobuf
PROTOBUF_LINK=https://raw.githubusercontent.com/protocolbuffers/protobuf/master/src/google/protobuf
curl "$PROTOBUF_LINK/timestamp.proto" > "$PROTO_PROTOBUF/timestamp.proto"
curl "$PROTOBUF_LINK/duration.proto" > "$PROTO_PROTOBUF/duration.proto"

# Delete unnecessary folders
rm -rf "$PKG" "$BUILD"
