/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'cosmos.base.store.v1beta1'

/**
 * CommitInfo defines commit information used by the multi-store when committing
 * a version/height.
 */
export interface CommitInfo {
  version: number
  storeInfos: StoreInfo[]
}

/**
 * StoreInfo defines store-specific commit information. It contains a reference
 * between a store name and the commit ID.
 */
export interface StoreInfo {
  name: string
  commitId?: CommitID
}

/**
 * CommitID defines the committment information when a specific store is
 * committed.
 */
export interface CommitID {
  version: number
  hash: Uint8Array
}

const baseCommitInfo: object = { version: 0 }

export const CommitInfo = {
  encode(message: CommitInfo, writer: Writer = Writer.create()): Writer {
    if (message.version !== 0) {
      writer.uint32(8).int64(message.version)
    }
    for (const v of message.storeInfos) {
      StoreInfo.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CommitInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCommitInfo } as CommitInfo
    message.storeInfos = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.storeInfos.push(StoreInfo.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo
    message.storeInfos = []
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version)
    } else {
      message.version = 0
    }
    if (object.storeInfos !== undefined && object.storeInfos !== null) {
      for (const e of object.storeInfos) {
        message.storeInfos.push(StoreInfo.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: CommitInfo): unknown {
    const obj: any = {}
    message.version !== undefined && (obj.version = message.version)
    if (message.storeInfos) {
      obj.storeInfos = message.storeInfos.map((e) =>
        e ? StoreInfo.toJSON(e) : undefined
      )
    } else {
      obj.storeInfos = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<CommitInfo>): CommitInfo {
    const message = { ...baseCommitInfo } as CommitInfo
    message.storeInfos = []
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version
    } else {
      message.version = 0
    }
    if (object.storeInfos !== undefined && object.storeInfos !== null) {
      for (const e of object.storeInfos) {
        message.storeInfos.push(StoreInfo.fromPartial(e))
      }
    }
    return message
  },
}

const baseStoreInfo: object = { name: '' }

export const StoreInfo = {
  encode(message: StoreInfo, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.commitId !== undefined) {
      CommitID.encode(message.commitId, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): StoreInfo {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseStoreInfo } as StoreInfo
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 2:
          message.commitId = CommitID.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromJSON(object.commitId)
    } else {
      message.commitId = undefined
    }
    return message
  },

  toJSON(message: StoreInfo): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.commitId !== undefined &&
      (obj.commitId = message.commitId
        ? CommitID.toJSON(message.commitId)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<StoreInfo>): StoreInfo {
    const message = { ...baseStoreInfo } as StoreInfo
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.commitId !== undefined && object.commitId !== null) {
      message.commitId = CommitID.fromPartial(object.commitId)
    } else {
      message.commitId = undefined
    }
    return message
  },
}

const baseCommitID: object = { version: 0 }

export const CommitID = {
  encode(message: CommitID, writer: Writer = Writer.create()): Writer {
    if (message.version !== 0) {
      writer.uint32(8).int64(message.version)
    }
    if (message.hash.length !== 0) {
      writer.uint32(18).bytes(message.hash)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CommitID {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCommitID } as CommitID
    message.hash = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.version = longToNumber(reader.int64() as Long)
          break
        case 2:
          message.hash = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommitID {
    const message = { ...baseCommitID } as CommitID
    message.hash = new Uint8Array()
    if (object.version !== undefined && object.version !== null) {
      message.version = Number(object.version)
    } else {
      message.version = 0
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = bytesFromBase64(object.hash)
    }
    return message
  },

  toJSON(message: CommitID): unknown {
    const obj: any = {}
    message.version !== undefined && (obj.version = message.version)
    message.hash !== undefined &&
      (obj.hash = base64FromBytes(
        message.hash !== undefined ? message.hash : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<CommitID>): CommitID {
    const message = { ...baseCommitID } as CommitID
    if (object.version !== undefined && object.version !== null) {
      message.version = object.version
    } else {
      message.version = 0
    }
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash
    } else {
      message.hash = new Uint8Array()
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
