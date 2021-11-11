/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'cosmos.crypto.secp256k1'

/**
 * PubKey defines a secp256k1 public key
 * Key is the compressed form of the pubkey. The first byte depends is a 0x02 byte
 * if the y-coordinate is the lexicographically largest of the two associated with
 * the x-coordinate. Otherwise the first byte is a 0x03.
 * This prefix is followed with the x-coordinate.
 */
export interface PubKey {
  key: Uint8Array
}

/** PrivKey defines a secp256k1 private key. */
export interface PrivKey {
  key: Uint8Array
}

const basePubKey: object = {}

export const PubKey = {
  encode(message: PubKey, writer: Writer = Writer.create()): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PubKey {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePubKey } as PubKey
    message.key = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PubKey {
    const message = { ...basePubKey } as PubKey
    message.key = new Uint8Array()
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key)
    }
    return message
  },

  toJSON(message: PubKey): unknown {
    const obj: any = {}
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<PubKey>): PubKey {
    const message = { ...basePubKey } as PubKey
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = new Uint8Array()
    }
    return message
  },
}

const basePrivKey: object = {}

export const PrivKey = {
  encode(message: PrivKey, writer: Writer = Writer.create()): Writer {
    if (message.key.length !== 0) {
      writer.uint32(10).bytes(message.key)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PrivKey {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePrivKey } as PrivKey
    message.key = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PrivKey {
    const message = { ...basePrivKey } as PrivKey
    message.key = new Uint8Array()
    if (object.key !== undefined && object.key !== null) {
      message.key = bytesFromBase64(object.key)
    }
    return message
  },

  toJSON(message: PrivKey): unknown {
    const obj: any = {}
    message.key !== undefined &&
      (obj.key = base64FromBytes(
        message.key !== undefined ? message.key : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<PrivKey>): PrivKey {
    const message = { ...basePrivKey } as PrivKey
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = new Uint8Array()
    }
    return message
  },
}

declare var self: any | undefined
declare var window: any | undefined
declare var global: any | undefined
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
