/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'cosmos.base.snapshots.v1beta1'

/** Snapshot contains Tendermint state sync snapshot info. */
export interface Snapshot {
  height: number
  format: number
  chunks: number
  hash: Uint8Array
  metadata?: Metadata
}

/** Metadata contains SDK-specific snapshot metadata. */
export interface Metadata {
  /** SHA-256 chunk hashes */
  chunkHashes: Uint8Array[]
}

const baseSnapshot: object = { height: 0, format: 0, chunks: 0 }

export const Snapshot = {
  encode(message: Snapshot, writer: Writer = Writer.create()): Writer {
    if (message.height !== 0) {
      writer.uint32(8).uint64(message.height)
    }
    if (message.format !== 0) {
      writer.uint32(16).uint32(message.format)
    }
    if (message.chunks !== 0) {
      writer.uint32(24).uint32(message.chunks)
    }
    if (message.hash.length !== 0) {
      writer.uint32(34).bytes(message.hash)
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(42).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Snapshot {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseSnapshot } as Snapshot
    message.hash = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.format = reader.uint32()
          break
        case 3:
          message.chunks = reader.uint32()
          break
        case 4:
          message.hash = reader.bytes()
          break
        case 5:
          message.metadata = Metadata.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Snapshot {
    const message = { ...baseSnapshot } as Snapshot
    message.hash = new Uint8Array()
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height)
    } else {
      message.height = 0
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = Number(object.format)
    } else {
      message.format = 0
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = Number(object.chunks)
    } else {
      message.chunks = 0
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash)
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata)
    } else {
      message.metadata = undefined
    }
    return message
  },

  toJSON(message: Snapshot): unknown {
    const obj: any = {}
    message.height !== undefined && (obj.height = message.height)
    message.format !== undefined && (obj.format = message.format)
    message.chunks !== undefined && (obj.chunks = message.chunks)
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ))
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Snapshot>): Snapshot {
    const message = { ...baseSnapshot } as Snapshot
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height
    } else {
      message.height = 0
    }
    if (object.format !== undefined && object.format !== null) {
      message.format = object.format
    } else {
      message.format = 0
    }
    if (object.chunks !== undefined && object.chunks !== null) {
      message.chunks = object.chunks
    } else {
      message.chunks = 0
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash
    } else {
      message.hash = new Uint8Array()
    }
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata)
    } else {
      message.metadata = undefined
    }
    return message
  },
}

const baseMetadata: object = {}

export const Metadata = {
  encode(message: Metadata, writer: Writer = Writer.create()): Writer {
    for (const v of message.chunkHashes) {
      writer.uint32(10).bytes(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMetadata } as Metadata
    message.chunkHashes = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.chunkHashes.push(reader.bytes())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Metadata {
    const message = { ...baseMetadata } as Metadata
    message.chunkHashes = []
    if (object.chunkHashes !== undefined && object.chunkHashes !== null) {
      for (const e of object.chunkHashes) {
        message.chunkHashes.push(bytesFromBase64(e))
      }
    }
    return message
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {}
    if (message.chunkHashes) {
      obj.chunkHashes = message.chunkHashes.map((e) =>
        base64FromBytes(e !== undefined ? e : new Uint8Array())
      )
    } else {
      obj.chunkHashes = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<Metadata>): Metadata {
    const message = { ...baseMetadata } as Metadata
    message.chunkHashes = []
    if (object.chunkHashes !== undefined && object.chunkHashes !== null) {
      for (const e of object.chunkHashes) {
        message.chunkHashes.push(e)
      }
    }
    return message
  },
}

declare var self: any | undefined
declare var window: any | undefined
var globalThis: any = (() => {
  if (typeof globalThis !== 'undefined') return globalThis
  if (typeof self !== 'undefined') return self
  if (typeof window !== 'undefined') return window
  if (typeof global !== 'undefined') return global
  throw 'Unable to locate global object'
})()

const atob: (b64: string) => string =
  globalThis.atob ||
  ((b64) => globalThis.Buffer.from(b64, 'base64').toString('binary'))
function bytesFromBase64(b64: string): Uint8Array {
  const bin = atob(b64)
  const arr = new Uint8Array(bin.length)
  for (let i = 0; i < bin.length; ++i) {
    arr[i] = bin.charCodeAt(i)
  }
  return arr
}

const btoa: (bin: string) => string =
  globalThis.btoa ||
  ((bin) => globalThis.Buffer.from(bin, 'binary').toString('base64'))
function base64FromBytes(arr: Uint8Array): string {
  const bin: string[] = []
  for (const byte of arr) {
    bin.push(String.fromCharCode(byte))
  }
  return btoa(bin.join(''))
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error('Value is larger than Number.MAX_SAFE_INTEGER')
  }
  return long.toNumber()
}

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
