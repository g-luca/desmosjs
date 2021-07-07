/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Any } from '../../../google/protobuf/any'
import { Params } from '../../../desmos/profiles/v1beta1/params'
import {
  DTagTransferRequest,
  Relationship,
  UserBlock,
} from '../../../desmos/profiles/v1beta1/models'

export const protobufPackage = 'desmos.profiles.v1beta1'

/** QueryProfileRequest is the request type for the Query/Profile RPC method. */
export interface QueryProfileRequest {
  /** Address or DTag of the user to query the profile for */
  user: string
}

/** QueryProfileResponse is the response type for the Query/Profile RPC method. */
export interface QueryProfileResponse {
  profile?: Any
}

/**
 * QueryDTagTransfersRequest is the request type for the Query/DTagTransfers RPC
 * endpoint
 */
export interface QueryDTagTransfersRequest {
  /** Address or DTag of the user to query the transfer requests for */
  user: string
}

/**
 * QueryDTagTransfersResponse is the response type for the Query/DTagTransfers
 * RPC method.
 */
export interface QueryDTagTransfersResponse {
  /** relationships represent the list of all the blocks for the queried user */
  requests: DTagTransferRequest[]
}

/** QueryParamsRequest is the request type for the Query/Params RPC endpoint */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  params?: Params
}

/**
 * QueryUserRelationshipsRequest is the request type for the
 * Query/UserRelationships RPC method.
 */
export interface QueryUserRelationshipsRequest {
  /** address of the user to query the relationships for */
  user: string
}

/**
 * QueryUserRelationshipsResponse is the response type for the
 * Query/UserRelationships RPC method.
 */
export interface QueryUserRelationshipsResponse {
  user: string
  /**
   * relationships represent the list of all the relationships for the queried
   * user
   */
  relationships: Relationship[]
}

/**
 * QueryUserBlocksRequest is the request type for the Query/UserBlocks RPC
 * endpoint
 */
export interface QueryUserBlocksRequest {
  /** address of the user to query the blocks for */
  user: string
}

/**
 * QueryUserBlocksResponse is the response type for the Query/UserBlocks RPC
 * method.
 */
export interface QueryUserBlocksResponse {
  /** blocks represent the list of all the blocks for the queried user */
  blocks: UserBlock[]
}

const baseQueryProfileRequest: object = { user: '' }

export const QueryProfileRequest = {
  encode(
    message: QueryProfileRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProfileRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryProfileRequest {
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    return message
  },

  toJSON(message: QueryProfileRequest): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    return obj
  },

  fromPartial(object: DeepPartial<QueryProfileRequest>): QueryProfileRequest {
    const message = { ...baseQueryProfileRequest } as QueryProfileRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    return message
  },
}

const baseQueryProfileResponse: object = {}

export const QueryProfileResponse = {
  encode(
    message: QueryProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.profile !== undefined) {
      Any.encode(message.profile, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryProfileResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.profile = Any.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryProfileResponse {
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Any.fromJSON(object.profile)
    } else {
      message.profile = undefined
    }
    return message
  },

  toJSON(message: QueryProfileResponse): unknown {
    const obj: any = {}
    message.profile !== undefined &&
      (obj.profile = message.profile ? Any.toJSON(message.profile) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryProfileResponse>): QueryProfileResponse {
    const message = { ...baseQueryProfileResponse } as QueryProfileResponse
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = Any.fromPartial(object.profile)
    } else {
      message.profile = undefined
    }
    return message
  },
}

const baseQueryDTagTransfersRequest: object = { user: '' }

export const QueryDTagTransfersRequest = {
  encode(
    message: QueryDTagTransfersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDTagTransfersRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryDTagTransfersRequest,
    } as QueryDTagTransfersRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryDTagTransfersRequest {
    const message = {
      ...baseQueryDTagTransfersRequest,
    } as QueryDTagTransfersRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    return message
  },

  toJSON(message: QueryDTagTransfersRequest): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryDTagTransfersRequest>
  ): QueryDTagTransfersRequest {
    const message = {
      ...baseQueryDTagTransfersRequest,
    } as QueryDTagTransfersRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    return message
  },
}

const baseQueryDTagTransfersResponse: object = {}

export const QueryDTagTransfersResponse = {
  encode(
    message: QueryDTagTransfersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.requests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryDTagTransfersResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryDTagTransfersResponse,
    } as QueryDTagTransfersResponse
    message.requests = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.requests.push(
            DTagTransferRequest.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryDTagTransfersResponse {
    const message = {
      ...baseQueryDTagTransfersResponse,
    } as QueryDTagTransfersResponse
    message.requests = []
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(DTagTransferRequest.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryDTagTransfersResponse): unknown {
    const obj: any = {}
    if (message.requests) {
      obj.requests = message.requests.map((e) =>
        e ? DTagTransferRequest.toJSON(e) : undefined
      )
    } else {
      obj.requests = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryDTagTransfersResponse>
  ): QueryDTagTransfersResponse {
    const message = {
      ...baseQueryDTagTransfersResponse,
    } as QueryDTagTransfersResponse
    message.requests = []
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(DTagTransferRequest.fromPartial(e))
      }
    }
    return message
  },
}

const baseQueryParamsRequest: object = {}

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest
    return message
  },
}

const baseQueryParamsResponse: object = {}

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params)
    } else {
      message.params = undefined
    }
    return message
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {}
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params)
    } else {
      message.params = undefined
    }
    return message
  },
}

const baseQueryUserRelationshipsRequest: object = { user: '' }

export const QueryUserRelationshipsRequest = {
  encode(
    message: QueryUserRelationshipsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryUserRelationshipsRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserRelationshipsRequest {
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    return message
  },

  toJSON(message: QueryUserRelationshipsRequest): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUserRelationshipsRequest>
  ): QueryUserRelationshipsRequest {
    const message = {
      ...baseQueryUserRelationshipsRequest,
    } as QueryUserRelationshipsRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    return message
  },
}

const baseQueryUserRelationshipsResponse: object = { user: '' }

export const QueryUserRelationshipsResponse = {
  encode(
    message: QueryUserRelationshipsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryUserRelationshipsResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse
    message.relationships = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        case 2:
          message.relationships.push(
            Relationship.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserRelationshipsResponse {
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse
    message.relationships = []
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryUserRelationshipsResponse): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      )
    } else {
      obj.relationships = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUserRelationshipsResponse>
  ): QueryUserRelationshipsResponse {
    const message = {
      ...baseQueryUserRelationshipsResponse,
    } as QueryUserRelationshipsResponse
    message.relationships = []
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromPartial(e))
      }
    }
    return message
  },
}

const baseQueryUserBlocksRequest: object = { user: '' }

export const QueryUserBlocksRequest = {
  encode(
    message: QueryUserBlocksRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryUserBlocksRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserBlocksRequest {
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    return message
  },

  toJSON(message: QueryUserBlocksRequest): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUserBlocksRequest>
  ): QueryUserBlocksRequest {
    const message = { ...baseQueryUserBlocksRequest } as QueryUserBlocksRequest
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    return message
  },
}

const baseQueryUserBlocksResponse: object = {}

export const QueryUserBlocksResponse = {
  encode(
    message: QueryUserBlocksResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryUserBlocksResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse
    message.blocks = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blocks.push(UserBlock.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryUserBlocksResponse {
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse
    message.blocks = []
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryUserBlocksResponse): unknown {
    const obj: any = {}
    if (message.blocks) {
      obj.blocks = message.blocks.map((e) =>
        e ? UserBlock.toJSON(e) : undefined
      )
    } else {
      obj.blocks = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryUserBlocksResponse>
  ): QueryUserBlocksResponse {
    const message = {
      ...baseQueryUserBlocksResponse,
    } as QueryUserBlocksResponse
    message.blocks = []
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromPartial(e))
      }
    }
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /**
   * Profile queries the profile of a specific user given their DTag or address.
   * If the queried user does not have a profile, the returned response will
   * contain a null profile.
   */
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse>
  /**
   * DTagTransfers queries all the DTag transfers requests that have been made
   * towards the user with the given address
   */
  DTagTransfers(
    request: QueryDTagTransfersRequest
  ): Promise<QueryDTagTransfersResponse>
  /** Params queries the profiles module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
  /**
   * UserRelationships queries the relationships for the user having the given
   * address
   */
  UserRelationships(
    request: QueryUserRelationshipsRequest
  ): Promise<QueryUserRelationshipsResponse>
  /** UserBlocks queries the user blocks for the user having the given address */
  UserBlocks(request: QueryUserBlocksRequest): Promise<QueryUserBlocksResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Profile = this.Profile.bind(this)
    this.DTagTransfers = this.DTagTransfers.bind(this)
    this.Params = this.Params.bind(this)
    this.UserRelationships = this.UserRelationships.bind(this)
    this.UserBlocks = this.UserBlocks.bind(this)
  }
  Profile(request: QueryProfileRequest): Promise<QueryProfileResponse> {
    const data = QueryProfileRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Query',
      'Profile',
      data
    )
    return promise.then((data) => QueryProfileResponse.decode(new Reader(data)))
  }

  DTagTransfers(
    request: QueryDTagTransfersRequest
  ): Promise<QueryDTagTransfersResponse> {
    const data = QueryDTagTransfersRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Query',
      'DTagTransfers',
      data
    )
    return promise.then((data) =>
      QueryDTagTransfersResponse.decode(new Reader(data))
    )
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Query',
      'Params',
      data
    )
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
  }

  UserRelationships(
    request: QueryUserRelationshipsRequest
  ): Promise<QueryUserRelationshipsResponse> {
    const data = QueryUserRelationshipsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Query',
      'UserRelationships',
      data
    )
    return promise.then((data) =>
      QueryUserRelationshipsResponse.decode(new Reader(data))
    )
  }

  UserBlocks(
    request: QueryUserBlocksRequest
  ): Promise<QueryUserBlocksResponse> {
    const data = QueryUserBlocksRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Query',
      'UserBlocks',
      data
    )
    return promise.then((data) =>
      QueryUserBlocksResponse.decode(new Reader(data))
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
