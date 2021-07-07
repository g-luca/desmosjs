/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { Params } from '../../../desmos/posts/v1beta1/params'
import { Post } from '../../../desmos/posts/v1beta1/posts'
import {
  RegisteredReaction,
  PostReaction,
} from '../../../desmos/posts/v1beta1/reactions'
import { Report } from '../../../desmos/posts/v1beta1/report'
import { UserAnswer } from '../../../desmos/posts/v1beta1/polls'

export const protobufPackage = 'desmos.posts.v1beta1'

/** GenesisState contains the data of the genesis state for the posts module */
export interface GenesisState {
  posts: Post[]
  usersPollAnswers: UserAnswersEntry[]
  postsReactions: PostReactionsEntry[]
  registeredReactions: RegisteredReaction[]
  reports: Report[]
  params?: Params
}

/** UserPollAnswerEntry represents an entry containing all the answers to a poll */
export interface UserAnswersEntry {
  postId: string
  userAnswers: UserAnswer[]
}

/** PostReactionEntry represents an entry containing all the reactions to a post */
export interface PostReactionsEntry {
  postId: string
  reactions: PostReaction[]
}

const baseGenesisState: object = {}

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    for (const v of message.posts) {
      Post.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    for (const v of message.usersPollAnswers) {
      UserAnswersEntry.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    for (const v of message.postsReactions) {
      PostReactionsEntry.encode(v!, writer.uint32(26).fork()).ldelim()
    }
    for (const v of message.registeredReactions) {
      RegisteredReaction.encode(v!, writer.uint32(34).fork()).ldelim()
    }
    for (const v of message.reports) {
      Report.encode(v!, writer.uint32(42).fork()).ldelim()
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(50).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseGenesisState } as GenesisState
    message.posts = []
    message.usersPollAnswers = []
    message.postsReactions = []
    message.registeredReactions = []
    message.reports = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.posts.push(Post.decode(reader, reader.uint32()))
          break
        case 2:
          message.usersPollAnswers.push(
            UserAnswersEntry.decode(reader, reader.uint32())
          )
          break
        case 3:
          message.postsReactions.push(
            PostReactionsEntry.decode(reader, reader.uint32())
          )
          break
        case 4:
          message.registeredReactions.push(
            RegisteredReaction.decode(reader, reader.uint32())
          )
          break
        case 5:
          message.reports.push(Report.decode(reader, reader.uint32()))
          break
        case 6:
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
    message.posts = []
    message.usersPollAnswers = []
    message.postsReactions = []
    message.registeredReactions = []
    message.reports = []
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Post.fromJSON(e))
      }
    }
    if (
      object.usersPollAnswers !== undefined &&
      object.usersPollAnswers !== null
    ) {
      for (const e of object.usersPollAnswers) {
        message.usersPollAnswers.push(UserAnswersEntry.fromJSON(e))
      }
    }
    if (object.postsReactions !== undefined && object.postsReactions !== null) {
      for (const e of object.postsReactions) {
        message.postsReactions.push(PostReactionsEntry.fromJSON(e))
      }
    }
    if (
      object.registeredReactions !== undefined &&
      object.registeredReactions !== null
    ) {
      for (const e of object.registeredReactions) {
        message.registeredReactions.push(RegisteredReaction.fromJSON(e))
      }
    }
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromJSON(e))
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
    if (message.posts) {
      obj.posts = message.posts.map((e) => (e ? Post.toJSON(e) : undefined))
    } else {
      obj.posts = []
    }
    if (message.usersPollAnswers) {
      obj.usersPollAnswers = message.usersPollAnswers.map((e) =>
        e ? UserAnswersEntry.toJSON(e) : undefined
      )
    } else {
      obj.usersPollAnswers = []
    }
    if (message.postsReactions) {
      obj.postsReactions = message.postsReactions.map((e) =>
        e ? PostReactionsEntry.toJSON(e) : undefined
      )
    } else {
      obj.postsReactions = []
    }
    if (message.registeredReactions) {
      obj.registeredReactions = message.registeredReactions.map((e) =>
        e ? RegisteredReaction.toJSON(e) : undefined
      )
    } else {
      obj.registeredReactions = []
    }
    if (message.reports) {
      obj.reports = message.reports.map((e) =>
        e ? Report.toJSON(e) : undefined
      )
    } else {
      obj.reports = []
    }
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState
    message.posts = []
    message.usersPollAnswers = []
    message.postsReactions = []
    message.registeredReactions = []
    message.reports = []
    if (object.posts !== undefined && object.posts !== null) {
      for (const e of object.posts) {
        message.posts.push(Post.fromPartial(e))
      }
    }
    if (
      object.usersPollAnswers !== undefined &&
      object.usersPollAnswers !== null
    ) {
      for (const e of object.usersPollAnswers) {
        message.usersPollAnswers.push(UserAnswersEntry.fromPartial(e))
      }
    }
    if (object.postsReactions !== undefined && object.postsReactions !== null) {
      for (const e of object.postsReactions) {
        message.postsReactions.push(PostReactionsEntry.fromPartial(e))
      }
    }
    if (
      object.registeredReactions !== undefined &&
      object.registeredReactions !== null
    ) {
      for (const e of object.registeredReactions) {
        message.registeredReactions.push(RegisteredReaction.fromPartial(e))
      }
    }
    if (object.reports !== undefined && object.reports !== null) {
      for (const e of object.reports) {
        message.reports.push(Report.fromPartial(e))
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

const baseUserAnswersEntry: object = { postId: '' }

export const UserAnswersEntry = {
  encode(message: UserAnswersEntry, writer: Writer = Writer.create()): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    for (const v of message.userAnswers) {
      UserAnswer.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UserAnswersEntry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserAnswersEntry } as UserAnswersEntry
    message.userAnswers = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        case 2:
          message.userAnswers.push(UserAnswer.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UserAnswersEntry {
    const message = { ...baseUserAnswersEntry } as UserAnswersEntry
    message.userAnswers = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    if (object.userAnswers !== undefined && object.userAnswers !== null) {
      for (const e of object.userAnswers) {
        message.userAnswers.push(UserAnswer.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: UserAnswersEntry): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    if (message.userAnswers) {
      obj.userAnswers = message.userAnswers.map((e) =>
        e ? UserAnswer.toJSON(e) : undefined
      )
    } else {
      obj.userAnswers = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<UserAnswersEntry>): UserAnswersEntry {
    const message = { ...baseUserAnswersEntry } as UserAnswersEntry
    message.userAnswers = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    if (object.userAnswers !== undefined && object.userAnswers !== null) {
      for (const e of object.userAnswers) {
        message.userAnswers.push(UserAnswer.fromPartial(e))
      }
    }
    return message
  },
}

const basePostReactionsEntry: object = { postId: '' }

export const PostReactionsEntry = {
  encode(
    message: PostReactionsEntry,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.postId !== '') {
      writer.uint32(10).string(message.postId)
    }
    for (const v of message.reactions) {
      PostReaction.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): PostReactionsEntry {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePostReactionsEntry } as PostReactionsEntry
    message.reactions = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.postId = reader.string()
          break
        case 2:
          message.reactions.push(PostReaction.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): PostReactionsEntry {
    const message = { ...basePostReactionsEntry } as PostReactionsEntry
    message.reactions = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = String(object.postId)
    } else {
      message.postId = ''
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      for (const e of object.reactions) {
        message.reactions.push(PostReaction.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: PostReactionsEntry): unknown {
    const obj: any = {}
    message.postId !== undefined && (obj.postId = message.postId)
    if (message.reactions) {
      obj.reactions = message.reactions.map((e) =>
        e ? PostReaction.toJSON(e) : undefined
      )
    } else {
      obj.reactions = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<PostReactionsEntry>): PostReactionsEntry {
    const message = { ...basePostReactionsEntry } as PostReactionsEntry
    message.reactions = []
    if (object.postId !== undefined && object.postId !== null) {
      message.postId = object.postId
    } else {
      message.postId = ''
    }
    if (object.reactions !== undefined && object.reactions !== null) {
      for (const e of object.reactions) {
        message.reactions.push(PostReaction.fromPartial(e))
      }
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
