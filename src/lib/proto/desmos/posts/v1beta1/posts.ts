/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { PollData } from '../../../desmos/posts/v1beta1/polls'
import { Timestamp } from '../../../google/protobuf/timestamp'

export const protobufPackage = 'desmos.posts.v1beta1'

/** PostIndex represents a post index */
export interface PostIndex {
  value: number
}

/** Post contains all the data of a Desmos post */
export interface Post {
  postId: string
  parentId: string
  message: string
  created?: Date
  lastEdited?: Date
  disableComments: boolean
  subspace: string
  additionalAttributes: Attribute[]
  creator: string
  attachments: Attachment[]
  pollData?: PollData
}

/** CommentIDs wraps the list of comments of a post */
export interface CommentIDs {
  ids: string[]
}

/**
 * Attachment contains the information representing any type of file provided
 * with a post. This file can be an image or a multimedia file (vocals, video,
 * documents, etc.).
 */
export interface Attachment {
  uri: string
  mimeType: string
  tags: string[]
}

/**
 * Attribute represents a Posts' optional data entry and allows for
 * custom Amino and JSON serialization and deserialization.
 */
export interface Attribute {
  key: string
  value: string
}

const basePostIndex: object = { value: 0 }

export const PostIndex = {
  encode(message: PostIndex, writer: Writer = Writer.create()): Writer {
    if (message.value !== 0) {
      writer.uint32(8).uint64(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PostIndex {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePostIndex } as PostIndex
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.value = longToNumber(reader.uint64() as Long)
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PostIndex {
    const message = { ...basePostIndex } as PostIndex
    if (object.value !== undefined && object.value !== null) {
      message.value = Number(object.value)
    } else {
      message.value = 0
    }
    return message
  },

  toJSON(message: PostIndex): unknown {
    const obj: any = {}
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<PostIndex>): PostIndex {
    const message = { ...basePostIndex } as PostIndex
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = 0
    }
    return message
  },
}

const basePost: object = {
  postId: '',
  parentId: '',
  message: '',
  disableComments: false,
  subspace: '',
  creator: '',
}

export const Post = {
  encode(message: Post, writer: Writer = Writer.create()): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    if (message.parentId !== '') {
      writer.uint32(18).string(message.parentId)
    }
    if (message.message !== '') {
      writer.uint32(26).string(message.message)
    }
    if (message.created !== undefined) {
      Timestamp.encode(
        toTimestamp(message.created),
        writer.uint32(34).fork()
      ).ldelim()
    }
    if (message.lastEdited !== undefined) {
      Timestamp.encode(
        toTimestamp(message.lastEdited),
        writer.uint32(42).fork()
      ).ldelim()
    }
    if (message.disableComments === true) {
      writer.uint32(48).bool(message.disableComments)
    }
    if (message.subspace !== '') {
      writer.uint32(58).string(message.subspace)
    }
    for (const v of message.additionalAttributes) {
      Attribute.encode(v!, writer.uint32(66).fork()).ldelim()
    }
    if (message.creator !== '') {
      writer.uint32(74).string(message.creator)
    }
    for (const v of message.attachments) {
      Attachment.encode(v!, writer.uint32(82).fork()).ldelim()
    }
    if (message.pollData !== undefined) {
      PollData.encode(message.pollData, writer.uint32(90).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Post {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePost } as Post
    message.additionalAttributes = []
    message.attachments = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        case 2:
          message.parentId = reader.string()
          break
        case 3:
          message.message = reader.string()
          break
        case 4:
          message.created = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.lastEdited = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        case 6:
          message.disableComments = reader.bool()
          break
        case 7:
          message.subspace = reader.string()
          break
        case 8:
          message.additionalAttributes.push(
            Attribute.decode(reader, reader.uint32())
          )
          break
        case 9:
          message.creator = reader.string()
          break
        case 10:
          message.attachments.push(Attachment.decode(reader, reader.uint32()))
          break
        case 11:
          message.pollData = PollData.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Post {
    const message = { ...basePost } as Post
    message.additionalAttributes = []
    message.attachments = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = String(object.parentId)
    } else {
      message.parentId = ''
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = String(object.message)
    } else {
      message.message = ''
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = fromJsonTimestamp(object.created)
    } else {
      message.created = undefined
    }
    if (object.lastEdited !== undefined && object.lastEdited !== null) {
      message.lastEdited = fromJsonTimestamp(object.lastEdited)
    } else {
      message.lastEdited = undefined
    }
    if (
      object.disableComments !== undefined &&
      object.disableComments !== null
    ) {
      message.disableComments = Boolean(object.disableComments)
    } else {
      message.disableComments = false
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    if (
      object.additionalAttributes !== undefined &&
      object.additionalAttributes !== null
    ) {
      for (const e of object.additionalAttributes) {
        message.additionalAttributes.push(Attribute.fromJSON(e))
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(Attachment.fromJSON(e))
      }
    }
    if (object.pollData !== undefined && object.pollData !== null) {
      message.pollData = PollData.fromJSON(object.pollData)
    } else {
      message.pollData = undefined
    }
    return message
  },

  toJSON(message: Post): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    message.parentId !== undefined && (obj.parentId = message.parentId)
    message.message !== undefined && (obj.message = message.message)
    message.created !== undefined &&
      (obj.created = message.created.toISOString())
    message.lastEdited !== undefined &&
      (obj.lastEdited = message.lastEdited.toISOString())
    message.disableComments !== undefined &&
      (obj.disableComments = message.disableComments)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    if (message.additionalAttributes) {
      obj.additionalAttributes = message.additionalAttributes.map((e) =>
        e ? Attribute.toJSON(e) : undefined
      )
    } else {
      obj.additionalAttributes = []
    }
    message.creator !== undefined && (obj.creator = message.creator)
    if (message.attachments) {
      obj.attachments = message.attachments.map((e) =>
        e ? Attachment.toJSON(e) : undefined
      )
    } else {
      obj.attachments = []
    }
    message.pollData !== undefined &&
      (obj.pollData = message.pollData
        ? PollData.toJSON(message.pollData)
        : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<Post>): Post {
    const message = { ...basePost } as Post
    message.additionalAttributes = []
    message.attachments = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    if (object.parentId !== undefined && object.parentId !== null) {
      message.parentId = object.parentId
    } else {
      message.parentId = ''
    }
    if (object.message !== undefined && object.message !== null) {
      message.message = object.message
    } else {
      message.message = ''
    }
    if (object.created !== undefined && object.created !== null) {
      message.created = object.created
    } else {
      message.created = undefined
    }
    if (object.lastEdited !== undefined && object.lastEdited !== null) {
      message.lastEdited = object.lastEdited
    } else {
      message.lastEdited = undefined
    }
    if (
      object.disableComments !== undefined &&
      object.disableComments !== null
    ) {
      message.disableComments = object.disableComments
    } else {
      message.disableComments = false
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    if (
      object.additionalAttributes !== undefined &&
      object.additionalAttributes !== null
    ) {
      for (const e of object.additionalAttributes) {
        message.additionalAttributes.push(Attribute.fromPartial(e))
      }
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.attachments !== undefined && object.attachments !== null) {
      for (const e of object.attachments) {
        message.attachments.push(Attachment.fromPartial(e))
      }
    }
    if (object.pollData !== undefined && object.pollData !== null) {
      message.pollData = PollData.fromPartial(object.pollData)
    } else {
      message.pollData = undefined
    }
    return message
  },
}

const baseCommentIDs: object = { ids: '' }

export const CommentIDs = {
  encode(message: CommentIDs, writer: Writer = Writer.create()): Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): CommentIDs {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseCommentIDs } as CommentIDs
    message.ids = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): CommentIDs {
    const message = { ...baseCommentIDs } as CommentIDs
    message.ids = []
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e))
      }
    }
    return message
  },

  toJSON(message: CommentIDs): unknown {
    const obj: any = {}
    if (message.ids) {
      obj.ids = message.ids.map((e) => e)
    } else {
      obj.ids = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<CommentIDs>): CommentIDs {
    const message = { ...baseCommentIDs } as CommentIDs
    message.ids = []
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e)
      }
    }
    return message
  },
}

const baseAttachment: object = { uri: '', mimeType: '', tags: '' }

export const Attachment = {
  encode(message: Attachment, writer: Writer = Writer.create()): Writer {
    if (message.uri !== '') {
      writer.uint32(10).string(message.uri)
    }
    if (message.mimeType !== '') {
      writer.uint32(18).string(message.mimeType)
    }
    for (const v of message.tags) {
      writer.uint32(26).string(v!)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Attachment {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAttachment } as Attachment
    message.tags = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.uri = reader.string()
          break
        case 2:
          message.mimeType = reader.string()
          break
        case 3:
          message.tags.push(reader.string())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Attachment {
    const message = { ...baseAttachment } as Attachment
    message.tags = []
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = String(object.uri)
    } else {
      message.uri = ''
    }
    if (object.mimeType !== undefined && object.mimeType !== null) {
      message.mimeType = String(object.mimeType)
    } else {
      message.mimeType = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(String(e))
      }
    }
    return message
  },

  toJSON(message: Attachment): unknown {
    const obj: any = {}
    message.uri !== undefined && (obj.uri = message.uri)
    message.mimeType !== undefined && (obj.mimeType = message.mimeType)
    if (message.tags) {
      obj.tags = message.tags.map((e) => e)
    } else {
      obj.tags = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<Attachment>): Attachment {
    const message = { ...baseAttachment } as Attachment
    message.tags = []
    if (object.uri !== undefined && object.uri !== null) {
      message.uri = object.uri
    } else {
      message.uri = ''
    }
    if (object.mimeType !== undefined && object.mimeType !== null) {
      message.mimeType = object.mimeType
    } else {
      message.mimeType = ''
    }
    if (object.tags !== undefined && object.tags !== null) {
      for (const e of object.tags) {
        message.tags.push(e)
      }
    }
    return message
  },
}

const baseAttribute: object = { key: '', value: '' }

export const Attribute = {
  encode(message: Attribute, writer: Writer = Writer.create()): Writer {
    if (message.key !== '') {
      writer.uint32(10).string(message.key)
    }
    if (message.value !== '') {
      writer.uint32(18).string(message.value)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Attribute {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseAttribute } as Attribute
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.key = reader.string()
          break
        case 2:
          message.value = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Attribute {
    const message = { ...baseAttribute } as Attribute
    if (object.key !== undefined && object.key !== null) {
      message.key = String(object.key)
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = String(object.value)
    } else {
      message.value = ''
    }
    return message
  },

  toJSON(message: Attribute): unknown {
    const obj: any = {}
    message.key !== undefined && (obj.key = message.key)
    message.value !== undefined && (obj.value = message.value)
    return obj
  },

  fromPartial(object: DeepPartial<Attribute>): Attribute {
    const message = { ...baseAttribute } as Attribute
    if (object.key !== undefined && object.key !== null) {
      message.key = object.key
    } else {
      message.key = ''
    }
    if (object.value !== undefined && object.value !== null) {
      message.value = object.value
    } else {
      message.value = ''
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
