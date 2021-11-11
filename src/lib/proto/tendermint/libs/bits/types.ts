/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'tendermint.libs.bits'

export interface BitArray {
  bits: number
  elems: number[]
}

const baseBitArray: object = { bits: 0, elems: 0 }

export const BitArray = {
  encode(message: BitArray, writer: Writer = Writer.create()): Writer {
    if (message.bits !== 0) {
      writer.uint32(8).int64(message.bits)
    }
    writer.uint32(18).fork()
    for (const v of message.elems) {
      writer.uint64(v)
    }
    writer.ldelim()
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BitArray {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBitArray } as BitArray
    message.elems = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.bits = longToNumber(reader.int64() as Long)
          break
        case 2:
          if ((tag & 7) === 2) {
            const end2 = reader.uint32() + reader.pos
            while (reader.pos < end2) {
              message.elems.push(longToNumber(reader.uint64() as Long))
            }
          } else {
            message.elems.push(longToNumber(reader.uint64() as Long))
          }
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): BitArray {
    const message = { ...baseBitArray } as BitArray
    message.elems = []
    if (object.bits !== undefined && object.bits !== null) {
      message.bits = Number(object.bits)
    } else {
      message.bits = 0
    }
    if (object.elems !== undefined && object.elems !== null) {
      for (const e of object.elems) {
        message.elems.push(Number(e))
      }
    }
    return message
  },

  toJSON(message: BitArray): unknown {
    const obj: any = {}
    message.bits !== undefined && (obj.bits = message.bits)
    if (message.elems) {
      obj.elems = message.elems.map((e) => e)
    } else {
      obj.elems = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<BitArray>): BitArray {
    const message = { ...baseBitArray } as BitArray
    message.elems = []
    if (object.bits !== undefined && object.bits !== null) {
      message.bits = object.bits
    } else {
      message.bits = 0
    }
    if (object.elems !== undefined && object.elems !== null) {
      for (const e of object.elems) {
        message.elems.push(e)
      }
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
