/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'cosmos.upgrade.v1beta1'

/** Plan specifies information about a planned upgrade and when it should occur. */
export interface Plan {
  /**
   * Sets the name for the upgrade. This name will be used by the upgraded
   * version of the software to apply any special "on-upgrade" commands during
   * the first BeginBlock method after the upgrade is applied. It is also used
   * to detect whether a software version can handle a given upgrade. If no
   * upgrade handler with this name has been set in the software, it will be
   * assumed that the software is out-of-date when the upgrade Time or Height is
   * reached and the software will exit.
   */
  name: string
  /**
   * The height at which the upgrade must be performed.
   * Only used if Time is not set.
   */
  height: number
  /**
   * Any application specific upgrade info to be included on-chain
   * such as a git commit that validators could automatically upgrade to
   */
  info: string
}

/**
 * SoftwareUpgradeProposal is a gov Content type for initiating a software
 * upgrade.
 */
export interface SoftwareUpgradeProposal {
  title: string
  description: string
  plan?: Plan
}

/**
 * CancelSoftwareUpgradeProposal is a gov Content type for cancelling a software
 * upgrade.
 */
export interface CancelSoftwareUpgradeProposal {
  title: string
  description: string
}

const basePlan: object = { name: '', height: 0, info: '' }

export const Plan = {
  encode(message: Plan, writer: Writer = Writer.create()): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    if (message.height !== 0) {
      writer.uint32(24).int64(message.height)
    }
    if (message.info !== '') {
      writer.uint32(34).string(message.info)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Plan {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePlan } as Plan
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        case 3:
          message.height = longToNumber(reader.int64() as Long)
          break
        case 4:
          message.info = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Plan {
    const message = { ...basePlan } as Plan
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height)
    } else {
      message.height = 0
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = String(object.info)
    } else {
      message.info = ''
    }
    return message
  },

  toJSON(message: Plan): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    message.height !== undefined && (obj.height = message.height)
    message.info !== undefined && (obj.info = message.info)
    return obj
  },

  fromPartial(object: DeepPartial<Plan>): Plan {
    const message = { ...basePlan } as Plan
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height
    } else {
      message.height = 0
    }
    if (object.info !== undefined && object.info !== null) {
      message.info = object.info
    } else {
      message.info = ''
    }
    return message
  },
}

const baseSoftwareUpgradeProposal: object = { title: '', description: '' }

export const SoftwareUpgradeProposal = {
  encode(
    message: SoftwareUpgradeProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(26).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): SoftwareUpgradeProposal {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseSoftwareUpgradeProposal,
    } as SoftwareUpgradeProposal
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        case 3:
          message.plan = Plan.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): SoftwareUpgradeProposal {
    const message = {
      ...baseSoftwareUpgradeProposal,
    } as SoftwareUpgradeProposal
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan)
    } else {
      message.plan = undefined
    }
    return message
  },

  toJSON(message: SoftwareUpgradeProposal): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<SoftwareUpgradeProposal>
  ): SoftwareUpgradeProposal {
    const message = {
      ...baseSoftwareUpgradeProposal,
    } as SoftwareUpgradeProposal
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
    }
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan)
    } else {
      message.plan = undefined
    }
    return message
  },
}

const baseCancelSoftwareUpgradeProposal: object = { title: '', description: '' }

export const CancelSoftwareUpgradeProposal = {
  encode(
    message: CancelSoftwareUpgradeProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== '') {
      writer.uint32(10).string(message.title)
    }
    if (message.description !== '') {
      writer.uint32(18).string(message.description)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CancelSoftwareUpgradeProposal {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseCancelSoftwareUpgradeProposal,
    } as CancelSoftwareUpgradeProposal
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string()
          break
        case 2:
          message.description = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CancelSoftwareUpgradeProposal {
    const message = {
      ...baseCancelSoftwareUpgradeProposal,
    } as CancelSoftwareUpgradeProposal
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title)
    } else {
      message.title = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description)
    } else {
      message.description = ''
    }
    return message
  },

  toJSON(message: CancelSoftwareUpgradeProposal): unknown {
    const obj: any = {}
    message.title !== undefined && (obj.title = message.title)
    message.description !== undefined && (obj.description = message.description)
    return obj
  },

  fromPartial(
    object: DeepPartial<CancelSoftwareUpgradeProposal>
  ): CancelSoftwareUpgradeProposal {
    const message = {
      ...baseCancelSoftwareUpgradeProposal,
    } as CancelSoftwareUpgradeProposal
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title
    } else {
      message.title = ''
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description
    } else {
      message.description = ''
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
