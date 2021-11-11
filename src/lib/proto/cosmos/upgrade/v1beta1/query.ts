/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Plan } from '../../../cosmos/upgrade/v1beta1/upgrade'

export const protobufPackage = 'cosmos.upgrade.v1beta1'

/**
 * QueryCurrentPlanRequest is the request type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanRequest {}

/**
 * QueryCurrentPlanResponse is the response type for the Query/CurrentPlan RPC
 * method.
 */
export interface QueryCurrentPlanResponse {
  /** plan is the current upgrade plan. */
  plan?: Plan
}

/**
 * QueryCurrentPlanRequest is the request type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanRequest {
  /** name is the name of the applied plan to query for. */
  name: string
}

/**
 * QueryAppliedPlanResponse is the response type for the Query/AppliedPlan RPC
 * method.
 */
export interface QueryAppliedPlanResponse {
  /** height is the block height at which the plan was applied. */
  height: number
}

/**
 * QueryUpgradedConsensusStateRequest is the request type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateRequest {
  /**
   * last height of the current chain must be sent in request
   * as this is the height under which next consensus state is stored
   */
  lastHeight: number
}

/**
 * QueryUpgradedConsensusStateResponse is the response type for the Query/UpgradedConsensusState
 * RPC method.
 */
export interface QueryUpgradedConsensusStateResponse {
  upgradedConsensusState: Uint8Array
}

const baseQueryCurrentPlanRequest: object = {}

export const QueryCurrentPlanRequest = {
  encode(_: QueryCurrentPlanRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryCurrentPlanRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(_: any): QueryCurrentPlanRequest {
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest
    return message
  },

  toJSON(_: QueryCurrentPlanRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<QueryCurrentPlanRequest>
  ): QueryCurrentPlanRequest {
    const message = {
      ...baseQueryCurrentPlanRequest,
    } as QueryCurrentPlanRequest
    return message
  },
}

const baseQueryCurrentPlanResponse: object = {}

export const QueryCurrentPlanResponse = {
  encode(
    message: QueryCurrentPlanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCurrentPlanResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.plan = Plan.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryCurrentPlanResponse {
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromJSON(object.plan)
    } else {
      message.plan = undefined
    }
    return message
  },

  toJSON(message: QueryCurrentPlanResponse): unknown {
    const obj: any = {}
    message.plan !== undefined &&
      (obj.plan = message.plan ? Plan.toJSON(message.plan) : undefined)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryCurrentPlanResponse>
  ): QueryCurrentPlanResponse {
    const message = {
      ...baseQueryCurrentPlanResponse,
    } as QueryCurrentPlanResponse
    if (object.plan !== undefined && object.plan !== null) {
      message.plan = Plan.fromPartial(object.plan)
    } else {
      message.plan = undefined
    }
    return message
  },
}

const baseQueryAppliedPlanRequest: object = { name: '' }

export const QueryAppliedPlanRequest = {
  encode(
    message: QueryAppliedPlanRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.name !== '') {
      writer.uint32(10).string(message.name)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryAppliedPlanRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAppliedPlanRequest {
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name)
    } else {
      message.name = ''
    }
    return message
  },

  toJSON(message: QueryAppliedPlanRequest): unknown {
    const obj: any = {}
    message.name !== undefined && (obj.name = message.name)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAppliedPlanRequest>
  ): QueryAppliedPlanRequest {
    const message = {
      ...baseQueryAppliedPlanRequest,
    } as QueryAppliedPlanRequest
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name
    } else {
      message.name = ''
    }
    return message
  },
}

const baseQueryAppliedPlanResponse: object = { height: 0 }

export const QueryAppliedPlanResponse = {
  encode(
    message: QueryAppliedPlanResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.height !== 0) {
      writer.uint32(8).int64(message.height)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAppliedPlanResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.height = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryAppliedPlanResponse {
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse
    if (object.height !== undefined && object.height !== null) {
      message.height = Number(object.height)
    } else {
      message.height = 0
    }
    return message
  },

  toJSON(message: QueryAppliedPlanResponse): unknown {
    const obj: any = {}
    message.height !== undefined && (obj.height = message.height)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryAppliedPlanResponse>
  ): QueryAppliedPlanResponse {
    const message = {
      ...baseQueryAppliedPlanResponse,
    } as QueryAppliedPlanResponse
    if (object.height !== undefined && object.height !== null) {
      message.height = object.height
    } else {
      message.height = 0
    }
    return message
  },
}

const baseQueryUpgradedConsensusStateRequest: object = { lastHeight: 0 }

export const QueryUpgradedConsensusStateRequest = {
  encode(
    message: QueryUpgradedConsensusStateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lastHeight !== 0) {
      writer.uint32(8).int64(message.lastHeight)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryUpgradedConsensusStateRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.lastHeight = longToNumber(reader.int64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUpgradedConsensusStateRequest {
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest
    if (object.lastHeight !== undefined && object.lastHeight !== null) {
      message.lastHeight = Number(object.lastHeight)
    } else {
      message.lastHeight = 0
    }
    return message
  },

  toJSON(message: QueryUpgradedConsensusStateRequest): unknown {
    const obj: any = {}
    message.lastHeight !== undefined && (obj.lastHeight = message.lastHeight)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUpgradedConsensusStateRequest>
  ): QueryUpgradedConsensusStateRequest {
    const message = {
      ...baseQueryUpgradedConsensusStateRequest,
    } as QueryUpgradedConsensusStateRequest
    if (object.lastHeight !== undefined && object.lastHeight !== null) {
      message.lastHeight = object.lastHeight
    } else {
      message.lastHeight = 0
    }
    return message
  },
}

const baseQueryUpgradedConsensusStateResponse: object = {}

export const QueryUpgradedConsensusStateResponse = {
  encode(
    message: QueryUpgradedConsensusStateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.upgradedConsensusState.length !== 0) {
      writer.uint32(18).bytes(message.upgradedConsensusState)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryUpgradedConsensusStateResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse
    message.upgradedConsensusState = new Uint8Array()
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 2:
          message.upgradedConsensusState = reader.bytes()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUpgradedConsensusStateResponse {
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse
    message.upgradedConsensusState = new Uint8Array()
    if (
      object.upgradedConsensusState !== undefined &&
      object.upgradedConsensusState !== null
    ) {
      message.upgradedConsensusState = bytesFromBase64(
        object.upgradedConsensusState
      )
    }
    return message
  },

  toJSON(message: QueryUpgradedConsensusStateResponse): unknown {
    const obj: any = {}
    message.upgradedConsensusState !== undefined &&
      (obj.upgradedConsensusState = base64FromBytes(
        message.upgradedConsensusState !== undefined
          ? message.upgradedConsensusState
          : new Uint8Array()
      ))
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUpgradedConsensusStateResponse>
  ): QueryUpgradedConsensusStateResponse {
    const message = {
      ...baseQueryUpgradedConsensusStateResponse,
    } as QueryUpgradedConsensusStateResponse
    if (
      object.upgradedConsensusState !== undefined &&
      object.upgradedConsensusState !== null
    ) {
      message.upgradedConsensusState = object.upgradedConsensusState
    } else {
      message.upgradedConsensusState = new Uint8Array()
    }
    return message
  },
}

/** Query defines the gRPC upgrade querier service. */
export interface Query {
  /** CurrentPlan queries the current upgrade plan. */
  CurrentPlan(
    request: QueryCurrentPlanRequest
  ): Promise<QueryCurrentPlanResponse>
  /** AppliedPlan queries a previously applied upgrade plan by its name. */
  AppliedPlan(
    request: QueryAppliedPlanRequest
  ): Promise<QueryAppliedPlanResponse>
  /**
   * UpgradedConsensusState queries the consensus state that will serve
   * as a trusted kernel for the next version of this chain. It will only be
   * stored at the last height of this chain.
   * UpgradedConsensusState RPC not supported with legacy querier
   */
  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest
  ): Promise<QueryUpgradedConsensusStateResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.CurrentPlan = this.CurrentPlan.bind(this)
    this.AppliedPlan = this.AppliedPlan.bind(this)
    this.UpgradedConsensusState = this.UpgradedConsensusState.bind(this)
  }
  CurrentPlan(
    request: QueryCurrentPlanRequest
  ): Promise<QueryCurrentPlanResponse> {
    const data = QueryCurrentPlanRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.upgrade.v1beta1.Query',
      'CurrentPlan',
      data
    )
    return promise.then((data) =>
      QueryCurrentPlanResponse.decode(new Reader(data))
    )
  }

  AppliedPlan(
    request: QueryAppliedPlanRequest
  ): Promise<QueryAppliedPlanResponse> {
    const data = QueryAppliedPlanRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.upgrade.v1beta1.Query',
      'AppliedPlan',
      data
    )
    return promise.then((data) =>
      QueryAppliedPlanResponse.decode(new Reader(data))
    )
  }

  UpgradedConsensusState(
    request: QueryUpgradedConsensusStateRequest
  ): Promise<QueryUpgradedConsensusStateResponse> {
    const data = QueryUpgradedConsensusStateRequest.encode(request).finish()
    const promise = this.rpc.request(
      'cosmos.upgrade.v1beta1.Query',
      'UpgradedConsensusState',
      data
    )
    return promise.then((data) =>
      QueryUpgradedConsensusStateResponse.decode(new Reader(data))
    )
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>
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
