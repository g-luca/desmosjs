/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'desmos.profiles.v1beta1'

/** Params contains the parameters for the profiles module */
export interface Params {
  nicknameParams?: NicknameParams
  dtagParams?: DTagParams
  maxBioLength: Uint8Array
}

/** NicknameParams defines the parameters related to the profiles nicknames */
export interface NicknameParams {
  minNicknameLength: Uint8Array
  maxNicknameLength: Uint8Array
}

/** DTagParams defines the parameters related to profile DTags */
export interface DTagParams {
  regEx: string
  minDtagLength: Uint8Array
  maxDtagLength: Uint8Array
}

const baseParams: object = {}

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.nicknameParams !== undefined) {
      NicknameParams.encode(
        message.nicknameParams,
        writer.uint32(10).fork()
      ).ldelim()
    }
    if (message.dtagParams !== undefined) {
      DTagParams.encode(message.dtagParams, writer.uint32(18).fork()).ldelim()
    }
    if (message.maxBioLength.length !== 0) {
      writer.uint32(26).bytes(message.maxBioLength)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseParams } as Params
    message.maxBioLength = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.nicknameParams = NicknameParams.decode(
            reader,
            reader.uint32()
          )
          break
        case 2:
          message.dtagParams = DTagParams.decode(reader, reader.uint32())
          break
        case 3:
          message.maxBioLength = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params
    message.maxBioLength = new Uint8Array()
    if (object.nicknameParams !== undefined && object.nicknameParams !== null) {
      message.nicknameParams = NicknameParams.fromJSON(object.nicknameParams)
    } else {
      message.nicknameParams = undefined
    }
    if (object.dtagParams !== undefined && object.dtagParams !== null) {
      message.dtagParams = DTagParams.fromJSON(object.dtagParams)
    } else {
      message.dtagParams = undefined
    }
    if (object.maxBioLength !== undefined && object.maxBioLength !== null) {
      message.maxBioLength = bytesFromBase64(object.maxBioLength)
    }
    return message
  },

  toJSON(message: Params): unknown {
    const obj: any = {}
    message.nicknameParams !== undefined &&
      (obj.nicknameParams = message.nicknameParams
        ? NicknameParams.toJSON(message.nicknameParams)
        : undefined)
    message.dtagParams !== undefined &&
      (obj.dtagParams = message.dtagParams
        ? DTagParams.toJSON(message.dtagParams)
        : undefined)
    message.maxBioLength !== undefined &&
      (obj.maxBioLength = base64FromBytes(
        message.maxBioLength !== undefined
          ? message.maxBioLength
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params
    if (object.nicknameParams !== undefined && object.nicknameParams !== null) {
      message.nicknameParams = NicknameParams.fromPartial(object.nicknameParams)
    } else {
      message.nicknameParams = undefined
    }
    if (object.dtagParams !== undefined && object.dtagParams !== null) {
      message.dtagParams = DTagParams.fromPartial(object.dtagParams)
    } else {
      message.dtagParams = undefined
    }
    if (object.maxBioLength !== undefined && object.maxBioLength !== null) {
      message.maxBioLength = object.maxBioLength
    } else {
      message.maxBioLength = new Uint8Array()
    }
    return message
  },
}

const baseNicknameParams: object = {}

export const NicknameParams = {
  encode(message: NicknameParams, writer: Writer = Writer.create()): Writer {
    if (message.minNicknameLength.length !== 0) {
      writer.uint32(10).bytes(message.minNicknameLength)
    }
    if (message.maxNicknameLength.length !== 0) {
      writer.uint32(18).bytes(message.maxNicknameLength)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): NicknameParams {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseNicknameParams } as NicknameParams
    message.minNicknameLength = new Uint8Array()
    message.maxNicknameLength = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.minNicknameLength = reader.bytes()
          break
        case 2:
          message.maxNicknameLength = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): NicknameParams {
    const message = { ...baseNicknameParams } as NicknameParams
    message.minNicknameLength = new Uint8Array()
    message.maxNicknameLength = new Uint8Array()
    if (
      object.minNicknameLength !== undefined &&
      object.minNicknameLength !== null
    ) {
      message.minNicknameLength = bytesFromBase64(object.minNicknameLength)
    }
    if (
      object.maxNicknameLength !== undefined &&
      object.maxNicknameLength !== null
    ) {
      message.maxNicknameLength = bytesFromBase64(object.maxNicknameLength)
    }
    return message
  },

  toJSON(message: NicknameParams): unknown {
    const obj: any = {}
    message.minNicknameLength !== undefined &&
      (obj.minNicknameLength = base64FromBytes(
        message.minNicknameLength !== undefined
          ? message.minNicknameLength
          : new Uint8Array()
      ))
    message.maxNicknameLength !== undefined &&
      (obj.maxNicknameLength = base64FromBytes(
        message.maxNicknameLength !== undefined
          ? message.maxNicknameLength
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<NicknameParams>): NicknameParams {
    const message = { ...baseNicknameParams } as NicknameParams
    if (
      object.minNicknameLength !== undefined &&
      object.minNicknameLength !== null
    ) {
      message.minNicknameLength = object.minNicknameLength
    } else {
      message.minNicknameLength = new Uint8Array()
    }
    if (
      object.maxNicknameLength !== undefined &&
      object.maxNicknameLength !== null
    ) {
      message.maxNicknameLength = object.maxNicknameLength
    } else {
      message.maxNicknameLength = new Uint8Array()
    }
    return message
  },
}

const baseDTagParams: object = { regEx: '' }

export const DTagParams = {
  encode(message: DTagParams, writer: Writer = Writer.create()): Writer {
    if (message.regEx !== '') {
      writer.uint32(10).string(message.regEx)
    }
    if (message.minDtagLength.length !== 0) {
      writer.uint32(18).bytes(message.minDtagLength)
    }
    if (message.maxDtagLength.length !== 0) {
      writer.uint32(26).bytes(message.maxDtagLength)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): DTagParams {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDTagParams } as DTagParams
    message.minDtagLength = new Uint8Array()
    message.maxDtagLength = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.regEx = reader.string()
          break
        case 2:
          message.minDtagLength = reader.bytes()
          break
        case 3:
          message.maxDtagLength = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DTagParams {
    const message = { ...baseDTagParams } as DTagParams
    message.minDtagLength = new Uint8Array()
    message.maxDtagLength = new Uint8Array()
    if (object.regEx !== undefined && object.regEx !== null) {
      message.regEx = String(object.regEx)
    } else {
      message.regEx = ''
    }
    if (object.minDtagLength !== undefined && object.minDtagLength !== null) {
      message.minDtagLength = bytesFromBase64(object.minDtagLength)
    }
    if (object.maxDtagLength !== undefined && object.maxDtagLength !== null) {
      message.maxDtagLength = bytesFromBase64(object.maxDtagLength)
    }
    return message
  },

  toJSON(message: DTagParams): unknown {
    const obj: any = {}
    message.regEx !== undefined && (obj.regEx = message.regEx)
    message.minDtagLength !== undefined &&
      (obj.minDtagLength = base64FromBytes(
        message.minDtagLength !== undefined
          ? message.minDtagLength
          : new Uint8Array()
      ))
    message.maxDtagLength !== undefined &&
      (obj.maxDtagLength = base64FromBytes(
        message.maxDtagLength !== undefined
          ? message.maxDtagLength
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial(object: DeepPartial<DTagParams>): DTagParams {
    const message = { ...baseDTagParams } as DTagParams
    if (object.regEx !== undefined && object.regEx !== null) {
      message.regEx = object.regEx
    } else {
      message.regEx = ''
    }
    if (object.minDtagLength !== undefined && object.minDtagLength !== null) {
      message.minDtagLength = object.minDtagLength
    } else {
      message.minDtagLength = new Uint8Array()
    }
    if (object.maxDtagLength !== undefined && object.maxDtagLength !== null) {
      message.maxDtagLength = object.maxDtagLength
    } else {
      message.maxDtagLength = new Uint8Array()
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
