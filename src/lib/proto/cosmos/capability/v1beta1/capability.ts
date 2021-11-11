/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'cosmos.capability.v1beta1'

/**
 * Capability defines an implementation of an object capability. The index
 * provided to a Capability must be globally unique.
 */
export interface Capability {
  index: number
}

/**
 * Owner defines a single capability owner. An owner is defined by the name of
 * capability and the module name.
 */
export interface Owner {
  module: string
  name: string
}

/**
 * CapabilityOwners defines a set of owners of a single Capability. The set of
 * owners must be unique.
 */
export interface CapabilityOwners {
  owners: Owner[]
}

const baseCapability: object = { index: 0 }

export const Capability = {
  encode(message: Capability, writer: Writer = Writer.create()): Writer {
    if (message.index !== 0) {
      writer.uint32(8).uint64(message.index)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Capability {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCapability } as Capability
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.index = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Capability {
    const message = { ...baseCapability } as Capability
    if (object.index !== undefined && object.index !== null) {
      message.index = Number(object.index)
    } else {
      message.index = 0
    }
    return message
  },

  toJSON(message: Capability): unknown {
    const obj: any = {}
    message.index !== undefined && (obj.index = message.index)
    return obj
  },

  fromPartial(object: DeepPartial<Capability>): Capability {
    const message = { ...baseCapability } as Capability
    if (object.index !== undefined && object.index !== null) {
      message.index = object.index
    } else {
      message.index = 0
    }
    return message
  },
}

const baseOwner: object = { module: '', name: '' }

export const Owner = {
  encode(message: Owner, writer: Writer = Writer.create()): Writer {
    if (message.module !== '') {
      writer.uint32(10).string(message.module)
    }
    if (message.name !== '') {
      writer.uint32(18).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseOwner } as Owner
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.module = reader.string()
          break
        case 2:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Owner {
    const message = { ...baseOwner } as Owner
    if (object.module !== undefined && object.module !== null) {
      message.module = String(object.module)
    } else {
      message.module = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: Owner): unknown {
    const obj: any = {}
    message.module !== undefined && (obj.module = message.module)
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(object: DeepPartial<Owner>): Owner {
    const message = { ...baseOwner } as Owner
    if (object.module !== undefined && object.module !== null) {
      message.module = object.module
    } else {
      message.module = ''
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  },
}

const baseCapabilityOwners: object = {}

export const CapabilityOwners = {
  encode(message: CapabilityOwners, writer: Writer = Writer.create()): Writer {
    for (const v of message.owners) {
      Owner.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CapabilityOwners {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCapabilityOwners } as CapabilityOwners
    message.owners = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.owners.push(Owner.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners
    message.owners = []
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(Owner.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: CapabilityOwners): unknown {
    const obj: any = {}
    if (message.owners) {
      obj.owners = message.owners.map((e) => (e ? Owner.toJSON(e) : undefined))
    } else {
      obj.owners = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<CapabilityOwners>): CapabilityOwners {
    const message = { ...baseCapabilityOwners } as CapabilityOwners
    message.owners = []
    if (object.owners !== undefined && object.owners !== null) {
      for (const e of object.owners) {
        message.owners.push(Owner.fromPartial(e))
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
