/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import {
  PageRequest,
  PageResponse,
} from '../../../cosmos/base/query/v1beta1/pagination'
import { Post } from '../../../desmos/posts/v1beta1/posts'
import { Params } from '../../../desmos/posts/v1beta1/params'
import { Timestamp } from '../../../google/protobuf/timestamp'
import { UserAnswer } from '../../../desmos/posts/v1beta1/polls'
import {
  PostReaction,
  RegisteredReaction,
} from '../../../desmos/posts/v1beta1/reactions'
import { Report } from '../../../desmos/posts/v1beta1/report'

export const protobufPackage = 'desmos.posts.v1beta1'

/** QueryPostsParams represent the parameters used to query for posts */
export interface QueryPostsParams {
  page: number
  limit: number
  sortBy: string
  sortOrder: string
  parentId: string
  creationTime?: Date
  subspace: string
  creator: string
  hashtags: string[]
}

/** QueryPostsRequest is the request type for the Query/Posts RPC method. */
export interface QueryPostsRequest {
  sortBy: string
  sortOrder: string
  parentId: string
  creationTime?: Date
  subspace: string
  creator: string
  hashtags: string[]
  /** pagination defines an optional pagination for the request. */
  pagination?: PageRequest
}

/** QueryPostsResponse is the response type for the Query/Posts RPC method */
export interface QueryPostsResponse {
  posts: QueryPostResponse[]
  pagination?: PageResponse
}

/** QueryPostRequest is the request type for the Query/Post RPC method. */
export interface QueryPostRequest {
  postId: string
}

/** QueryPostResponse is the response type for the Query/Post RPC method */
export interface QueryPostResponse {
  post?: Post
  pollAnswers: UserAnswer[]
  reactions: PostReaction[]
  children: string[]
}

/**
 * QueryPollAnswersRequest is the request type for the Query/PollAnswers RPC
 * method.
 */
export interface QueryPollAnswersRequest {
  postId: string
}

/**
 * QueryPollAnswersResponse is the response type for the Query/PollAnswers RPC
 * method
 */
export interface QueryPollAnswersResponse {
  postId: string
  answers: UserAnswer[]
}

/**
 * QueryRegisteredReactionsRequest is the request type for the
 * Query/RegisteredReactions RPC method.
 */
export interface QueryRegisteredReactionsRequest {}

/**
 * QueryRegisteredReactionsResponse is the response type for the
 * Query/RegisteredReactions RPC method
 */
export interface QueryRegisteredReactionsResponse {
  registeredReactions: RegisteredReaction[]
}

/** QueryParamsRequest is the request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is the response type for the Query/Params RPC method */
export interface QueryParamsResponse {
  params?: Params
}

/**
 * QueryReportsRequest is the request type for the Query/Reports RPC
 * method.
 */
export interface QueryReportsRequest {
  postId: string
}

/**
 * QueryReportsResponse is the response type for the Query/Reports RPC
 * method.
 */
export interface QueryReportsResponse {
  reports: Report[]
}

const baseQueryPostsParams: object = {
  page: 0,
  limit: 0,
  sortBy: '',
  sortOrder: '',
  parentId: '',
  subspace: '',
  creator: '',
  hashtags: '',
}

export const QueryPostsParams = {
  encode(message: QueryPostsParams, writer: Writer = Writer.create()): Writer {
    if (message.page !== 0) {
      writer.uint32(8).uint64(message.page)
    }
    if (message.limit !== 0) {
      writer.uint32(16).uint64(message.limit)
    }
    if (message.sortBy !== '') {
      writer.uint32(26).string(message.sortBy)
    }
    if (message.sortOrder !== '') {
      writer.uint32(34).string(message.sortOrder)
    }
    if (message.parentId !== '') {
      writer.uint32(42).string(message.parentId)
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTime),
        writer.uint32(50).fork()
      ).ldelim()
    }
    if (message.subspace !== '') {
      writer.uint32(58).string(message.subspace)
    }
    if (message.creator !== '') {
      writer.uint32(66).string(message.creator)
    }
    for (const v of message.hashtags) {
      writer.uint32(74).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsParams {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPostsParams } as QueryPostsParams
    message.hashtags = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.page = longToNumber(reader.uint64() as Long)
          break
        case 2:
          message.limit = longToNumber(reader.uint64() as Long)
          break
        case 3:
          message.sortBy = reader.string()
          break
        case 4:
          message.sortOrder = reader.string()
          break
        case 5:
          message.parentId = reader.string()
          break
        case 6:
          message.creationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 7:
          message.subspace = reader.string()
          break
        case 8:
          message.creator = reader.string()
          break
        case 9:
          message.hashtags.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPostsParams {
    const message = { ...baseQueryPostsParams } as QueryPostsParams
    message.hashtags = []
    if (object.page !== undefined && object.page !== null) {
      message.page = Number(object.page)
    } else {
      message.page = 0
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = Number(object.limit)
    } else {
      message.limit = 0
    }
    if (object.sortBy !== undefined && object.sortBy !== null) {
      message.sortBy = String(object.sortBy)
    } else {
      message.sortBy = ''
    }
    if (object.sortOrder !== undefined && object.sortOrder !== null) {
      message.sortOrder = String(object.sortOrder)
    } else {
      message.sortOrder = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId)
    } else {
      message.parentId = ''
    }
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = fromJsonTimestamp(object.creationTime)
    } else {
      message.creationTime = undefined
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.hashtags !== undefined && object.hashtags !== null) {
      for (const e of object.hashtags) {
        message.hashtags.push(String(e))
      }
    }
    return message
  },

  toJSON(message: QueryPostsParams): unknown {
    const obj: any = {}
    message.page !== undefined && (obj.page = message.page)
    message.limit !== undefined && (obj.limit = message.limit)
    message.sortBy !== undefined && (obj.sortBy = message.sortBy)
    message.sortOrder !== undefined && (obj.sortOrder = message.sortOrder)
    message.parentId !== undefined && (obj.parentId = message.parentId)
    message.creationTime !== undefined &&
      (obj.creationTime = message.creationTime.toISOString())
    message.subspace !== undefined && (obj.subspace = message.subspace)
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e)
    } else {
      obj.hashtags = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryPostsParams>): QueryPostsParams {
    const message = { ...baseQueryPostsParams } as QueryPostsParams
    message.hashtags = []
    if (object.page !== undefined && object.page !== null) {
      message.page = object.page
    } else {
      message.page = 0
    }
    if (object.limit !== undefined && object.limit !== null) {
      message.limit = object.limit
    } else {
      message.limit = 0
    }
    if (object.sortBy !== undefined && object.sortBy !== null) {
      message.sortBy = object.sortBy
    } else {
      message.sortBy = ''
    }
    if (object.sortOrder !== undefined && object.sortOrder !== null) {
      message.sortOrder = object.sortOrder
    } else {
      message.sortOrder = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId
    } else {
      message.parentId = ''
    }
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = object.creationTime
    } else {
      message.creationTime = undefined
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.hashtags !== undefined && object.hashtags !== null) {
      for (const e of object.hashtags) {
        message.hashtags.push(e)
      }
    }
    return message
  },
}

const baseQueryPostsRequest: object = {
  sortBy: '',
  sortOrder: '',
  parentId: '',
  subspace: '',
  creator: '',
  hashtags: '',
}

export const QueryPostsRequest = {
  encode(message: QueryPostsRequest, writer: Writer = Writer.create()): Writer {
    if (message.sortBy !== '') {
      writer.uint32(10).string(message.sortBy)
    }
    if (message.sortOrder !== '') {
      writer.uint32(18).string(message.sortOrder)
    }
    if (message.parentId !== '') {
      writer.uint32(26).string(message.parentId)
    }
    if (message.creationTime !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationTime),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.subspace !== '') {
      writer.uint32(42).string(message.subspace)
    }
    if (message.creator !== '') {
      writer.uint32(50).string(message.creator)
    }
    for (const v of message.hashtags) {
      writer.uint32(58).string(v!)
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(66).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest
    message.hashtags = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sortBy = reader.string()
          break
        case 2:
          message.sortOrder = reader.string()
          break
        case 3:
          message.parentId = reader.string()
          break
        case 4:
          message.creationTime = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.subspace = reader.string()
          break
        case 6:
          message.creator = reader.string()
          break
        case 7:
          message.hashtags.push(reader.string())
          break
        case 8:
          message.pagination = PageRequest.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest
    message.hashtags = []
    if (object.sortBy !== undefined && object.sortBy !== null) {
      message.sortBy = String(object.sortBy)
    } else {
      message.sortBy = ''
    }
    if (object.sortOrder !== undefined && object.sortOrder !== null) {
      message.sortOrder = String(object.sortOrder)
    } else {
      message.sortOrder = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId)
    } else {
      message.parentId = ''
    }
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = fromJsonTimestamp(object.creationTime)
    } else {
      message.creationTime = undefined
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.hashtags !== undefined && object.hashtags !== null) {
      for (const e of object.hashtags) {
        message.hashtags.push(String(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryPostsRequest): unknown {
    const obj: any = {}
    message.sortBy !== undefined && (obj.sortBy = message.sortBy)
    message.sortOrder !== undefined && (obj.sortOrder = message.sortOrder)
    message.parentId !== undefined && (obj.parentId = message.parentId)
    message.creationTime !== undefined &&
      (obj.creationTime = message.creationTime.toISOString())
    message.subspace !== undefined && (obj.subspace = message.subspace)
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.hashtags) {
      obj.hashtags = message.hashtags.map((e) => e)
    } else {
      obj.hashtags = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryPostsRequest>): QueryPostsRequest {
    const message = { ...baseQueryPostsRequest } as QueryPostsRequest
    message.hashtags = []
    if (object.sortBy !== undefined && object.sortBy !== null) {
      message.sortBy = object.sortBy
    } else {
      message.sortBy = ''
    }
    if (object.sortOrder !== undefined && object.sortOrder !== null) {
      message.sortOrder = object.sortOrder
    } else {
      message.sortOrder = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId
    } else {
      message.parentId = ''
    }
    if (object.creationTime !== undefined && object.creationTime !== null) {
      message.creationTime = object.creationTime
    } else {
      message.creationTime = undefined
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.hashtags !== undefined && object.hashtags !== null) {
      for (const e of object.hashtags) {
        message.hashtags.push(e)
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryPostsResponse: object = {}

export const QueryPostsResponse = {
  encode(
    message: QueryPostsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.posts) {
      QueryPostResponse.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostsResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse
    message.posts = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.posts.push(QueryPostResponse.decode(reader, reader.uint32()))
          break
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse
    message.posts = []
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(QueryPostResponse.fromJSON(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },

  toJSON(message: QueryPostsResponse): unknown {
    const obj: any = {}
    if (message.posts) {
      obj.posts = message.posts.map((e) =>
        e ? QueryPostResponse.toJSON(e) : undefined
      )
    } else {
      obj.posts = []
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<QueryPostsResponse>): QueryPostsResponse {
    const message = { ...baseQueryPostsResponse } as QueryPostsResponse
    message.posts = []
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(QueryPostResponse.fromPartial(e))
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination)
    } else {
      message.pagination = undefined
    }
    return message
  },
}

const baseQueryPostRequest: object = { postId: '' }

export const QueryPostRequest = {
  encode(message: QueryPostRequest, writer: Writer = Writer.create()): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPostRequest } as QueryPostRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPostRequest {
    const message = { ...baseQueryPostRequest } as QueryPostRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    return message
  },

  toJSON(message: QueryPostRequest): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryPostRequest>): QueryPostRequest {
    const message = { ...baseQueryPostRequest } as QueryPostRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    return message
  },
}

const baseQueryPostResponse: object = { children: '' }

export const QueryPostResponse = {
  encode(message: QueryPostResponse, writer: Writer = Writer.create()): Writer {
    if (message.post !== undefined) {
      Post.encode(message.post, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.pollAnswers) {
      UserAnswer.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.reactions) {
      PostReaction.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.children) {
      writer.uint32(34).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPostResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryPostResponse } as QueryPostResponse
    message.pollAnswers = []
    message.reactions = []
    message.children = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.post = Post.decode(reader, reader.uint32())
          break
        case 2:
          message.pollAnswers.push(UserAnswer.decode(reader, reader.uint32()))
          break
        case 3:
          message.reactions.push(PostReaction.decode(reader, reader.uint32()))
          break
        case 4:
          message.children.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPostResponse {
    const message = { ...baseQueryPostResponse } as QueryPostResponse
    message.pollAnswers = []
    message.reactions = []
    message.children = []
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromJSON(object.post)
    } else {
      message.post = undefined
    }
    if (object.pollAnswers !== undefined && object.pollAnswers !== null) {
      for (const e of object.pollAnswers) {
        message.pollAnswers.push(UserAnswer.fromJSON(e))
      }
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      for (const e of object.reactions) {
        message.reactions.push(PostReaction.fromJSON(e))
      }
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(String(e))
      }
    }
    return message
  },

  toJSON(message: QueryPostResponse): unknown {
    const obj: any = {}
    message.post !== undefined &&
      (obj.post = message.post ? Post.toJSON(message.post) : undefined)
    if (message.pollAnswers) {
      obj.pollAnswers = message.pollAnswers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined
      )
    } else {
      obj.pollAnswers = []
    }
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? PostReaction.toJSON(e) : undefined
      )
    } else {
      obj.reactions = []
    }
    if (message.children) {
      obj.children = message.children.map((e) => e)
    } else {
      obj.children = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryPostResponse>): QueryPostResponse {
    const message = { ...baseQueryPostResponse } as QueryPostResponse
    message.pollAnswers = []
    message.reactions = []
    message.children = []
    if (object.post !== undefined && object.post !== null) {
      message.post = Post.fromPartial(object.post)
    } else {
      message.post = undefined
    }
    if (object.pollAnswers !== undefined && object.pollAnswers !== null) {
      for (const e of object.pollAnswers) {
        message.pollAnswers.push(UserAnswer.fromPartial(e))
      }
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      for (const e of object.reactions) {
        message.reactions.push(PostReaction.fromPartial(e))
      }
    }
    if (object.children !== undefined && object.children !== null) {
      for (const e of object.children) {
        message.children.push(e)
      }
    }
    return message
  },
}

const baseQueryPollAnswersRequest: object = { postId: '' }

export const QueryPollAnswersRequest = {
  encode(
    message: QueryPollAnswersRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryPollAnswersRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryPollAnswersRequest,
    } as QueryPollAnswersRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPollAnswersRequest {
    const message = {
      ...baseQueryPollAnswersRequest,
    } as QueryPollAnswersRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    return message
  },

  toJSON(message: QueryPollAnswersRequest): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryPollAnswersRequest>
  ): QueryPollAnswersRequest {
    const message = {
      ...baseQueryPollAnswersRequest,
    } as QueryPollAnswersRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    return message
  },
}

const baseQueryPollAnswersResponse: object = { postId: '' }

export const QueryPollAnswersResponse = {
  encode(
    message: QueryPollAnswersResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    for (const v of message.answers) {
      UserAnswer.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryPollAnswersResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryPollAnswersResponse,
    } as QueryPollAnswersResponse
    message.answers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        case 2:
          message.answers.push(UserAnswer.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryPollAnswersResponse {
    const message = {
      ...baseQueryPollAnswersResponse,
    } as QueryPollAnswersResponse
    message.answers = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(UserAnswer.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryPollAnswersResponse): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    if (message.answers) {
      obj.answers = message.answers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined
      )
    } else {
      obj.answers = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryPollAnswersResponse>
  ): QueryPollAnswersResponse {
    const message = {
      ...baseQueryPollAnswersResponse,
    } as QueryPollAnswersResponse
    message.answers = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    if (object.answers !== undefined && object.answers !== null) {
      for (const e of object.answers) {
        message.answers.push(UserAnswer.fromPartial(e))
      }
    }
    return message
  },
}

const baseQueryRegisteredReactionsRequest: object = {}

export const QueryRegisteredReactionsRequest = {
  encode(
    _: QueryRegisteredReactionsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReactionsRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryRegisteredReactionsRequest,
    } as QueryRegisteredReactionsRequest
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

  fromJSON(_: any): QueryRegisteredReactionsRequest {
    const message = {
      ...baseQueryRegisteredReactionsRequest,
    } as QueryRegisteredReactionsRequest
    return message
  },

  toJSON(_: QueryRegisteredReactionsRequest): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<QueryRegisteredReactionsRequest>
  ): QueryRegisteredReactionsRequest {
    const message = {
      ...baseQueryRegisteredReactionsRequest,
    } as QueryRegisteredReactionsRequest
    return message
  },
}

const baseQueryRegisteredReactionsResponse: object = {}

export const QueryRegisteredReactionsResponse = {
  encode(
    message: QueryRegisteredReactionsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.registeredReactions) {
      RegisteredReaction.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryRegisteredReactionsResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseQueryRegisteredReactionsResponse,
    } as QueryRegisteredReactionsResponse
    message.registeredReactions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.registeredReactions.push(
            RegisteredReaction.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryRegisteredReactionsResponse {
    const message = {
      ...baseQueryRegisteredReactionsResponse,
    } as QueryRegisteredReactionsResponse
    message.registeredReactions = []
    if (
      object.registeredReactions !== undefined &&
      object.registeredReactions !== null
    ) {
      for (const e of object.registeredReactions) {
        message.registeredReactions.push(RegisteredReaction.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryRegisteredReactionsResponse): unknown {
    const obj: any = {}
    if (message.registeredReactions) {
      obj.registeredReactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      )
    } else {
      obj.registeredReactions = []
    }
    return obj
  },

  fromPartial(
    object: DeepPartial<QueryRegisteredReactionsResponse>
  ): QueryRegisteredReactionsResponse {
    const message = {
      ...baseQueryRegisteredReactionsResponse,
    } as QueryRegisteredReactionsResponse
    message.registeredReactions = []
    if (
      object.registeredReactions !== undefined &&
      object.registeredReactions !== null
    ) {
      for (const e of object.registeredReactions) {
        message.registeredReactions.push(RegisteredReaction.fromPartial(e))
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

const baseQueryReportsRequest: object = { postId: '' }

export const QueryReportsRequest = {
  encode(
    message: QueryReportsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryReportsRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryReportsRequest } as QueryReportsRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryReportsRequest {
    const message = { ...baseQueryReportsRequest } as QueryReportsRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    return message
  },

  toJSON(message: QueryReportsRequest): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    return obj
  },

  fromPartial(object: DeepPartial<QueryReportsRequest>): QueryReportsRequest {
    const message = { ...baseQueryReportsRequest } as QueryReportsRequest
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    return message
  },
}

const baseQueryReportsResponse: object = {}

export const QueryReportsResponse = {
  encode(
    message: QueryReportsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): QueryReportsResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseQueryReportsResponse } as QueryReportsResponse
    message.reports = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.reports.push(Report.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): QueryReportsResponse {
    const message = { ...baseQueryReportsResponse } as QueryReportsResponse
    message.reports = []
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: QueryReportsResponse): unknown {
    const obj: any = {}
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      )
    } else {
      obj.reports = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<QueryReportsResponse>): QueryReportsResponse {
    const message = { ...baseQueryReportsResponse } as QueryReportsResponse
    message.reports = []
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromPartial(e))
      }
    }
    return message
  },
}

/** Query defines the gRPC querier service. */
export interface Query {
  /** Posts queries all the stored posts */
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse>
  /** Post queries a specific post */
  Post(request: QueryPostRequest): Promise<QueryPostResponse>
  /** Reports queries the reports for the post having the given id */
  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse>
  /** PollAnswers queries the poll answers of the post having a specific id */
  PollAnswers(
    request: QueryPollAnswersRequest
  ): Promise<QueryPollAnswersResponse>
  /** RegisteredReactions queries all the registered reactions */
  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse>
  /** Params queries the posts module params */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Posts = this.Posts.bind(this)
    this.Post = this.Post.bind(this)
    this.Reports = this.Reports.bind(this)
    this.PollAnswers = this.PollAnswers.bind(this)
    this.RegisteredReactions = this.RegisteredReactions.bind(this)
    this.Params = this.Params.bind(this)
  }
  Posts(request: QueryPostsRequest): Promise<QueryPostsResponse> {
    const data = QueryPostsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.posts.v1beta1.Query',
      'Posts',
      data
    )
    return promise.then((data) => QueryPostsResponse.decode(new Reader(data)))
  }

  Post(request: QueryPostRequest): Promise<QueryPostResponse> {
    const data = QueryPostRequest.encode(request).finish()
    const promise = this.rpc.request('desmos.posts.v1beta1.Query', 'Post', data)
    return promise.then((data) => QueryPostResponse.decode(new Reader(data)))
  }

  Reports(request: QueryReportsRequest): Promise<QueryReportsResponse> {
    const data = QueryReportsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.posts.v1beta1.Query',
      'Reports',
      data
    )
    return promise.then((data) => QueryReportsResponse.decode(new Reader(data)))
  }

  PollAnswers(
    request: QueryPollAnswersRequest
  ): Promise<QueryPollAnswersResponse> {
    const data = QueryPollAnswersRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.posts.v1beta1.Query',
      'PollAnswers',
      data
    )
    return promise.then((data) =>
      QueryPollAnswersResponse.decode(new Reader(data))
    )
  }

  RegisteredReactions(
    request: QueryRegisteredReactionsRequest
  ): Promise<QueryRegisteredReactionsResponse> {
    const data = QueryRegisteredReactionsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.posts.v1beta1.Query',
      'RegisteredReactions',
      data
    )
    return promise.then((data) =>
      QueryRegisteredReactionsResponse.decode(new Reader(data))
    )
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.posts.v1beta1.Query',
      'Params',
      data
    )
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)))
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

function toTimestamp(date: Date): Timestamp {
  const seconds = date.getTime() / 1_000
  const nanos = (date.getTime() % 1_000) * 1_000_000
  return { seconds, nanos }
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds * 1_000
  millis += t.nanos / 1_000_000
  return new Date(millis)
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o
  } else if (typeof o === 'string') {
    return new Date(o)
  } else {
    return fromTimestamp(Timestamp.fromJSON(o))
  }
}

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
