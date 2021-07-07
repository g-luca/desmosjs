/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { Params } from '../../../desmos/profiles/v1beta1/params'
import {
  DTagTransferRequest,
  Relationship,
  UserBlock,
} from '../../../desmos/profiles/v1beta1/models'

export const protobufPackage = 'desmos.profiles.v1beta1'

/** GenesisState defines the profiles module's genesis state. */
export interface GenesisState {
  dtagTransferRequests: DTagTransferRequest[]
  relationships: Relationship[]
  blocks: UserBlock[]
  params?: Params
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.dtagTransferRequests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(34).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.dtagTransferRequests = []
    message.relationships = []
    message.blocks = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.dtagTransferRequests.push(
            DTagTransferRequest.decode(reader, reader.uint32())
          )
          break
        case 2:
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
          )
          break
        case 3:
          message.blocks.push(UserBlock.decode(reader, reader.uint32()))
          break
        case 4:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.dtagTransferRequests = []
    message.relationships = []
    message.blocks = []
    if (
      object.dtagTransferRequests !== undefined &&
      object.dtagTransferRequests !== null
    ) {
      for (const e of object.dtagTransferRequests) {
        message.dtagTransferRequests.push(DTagTransferRequest.fromJSON(e))
      }
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromJSON(e))
      }
    }
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromJSON(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {}
    if (message.dtagTransferRequests) {
      obj.dtagTransferRequests = message.dtagTransferRequests.map((e) =>
        e ? DTagTransferRequest.toJSON(e) : undefined
      )
    } else {
      obj.dtagTransferRequests = []
    }
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      )
    } else {
      obj.relationships = []
    }
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toJSON(e) : undefined
      )
    } else {
      obj.blocks = []
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.dtagTransferRequests = []
    message.relationships = []
    message.blocks = []
    if (
      object.dtagTransferRequests !== undefined &&
      object.dtagTransferRequests !== null
    ) {
      for (const e of object.dtagTransferRequests) {
        message.dtagTransferRequests.push(DTagTransferRequest.fromPartial(e))
      }
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromPartial(e))
      }
    }
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromPartial(e))
      }
    }
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  },
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
