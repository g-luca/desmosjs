/* eslint-disable */
import { util, configure, Writer, Reader } from 'protobufjs/minimal'
import * as Long from 'long'
import { Any } from '../../../../google/protobuf/any'
import { Timestamp } from '../../../../google/protobuf/timestamp'

export const protobufPackage = 'desmos.profiles.legacy.v0163'

/** Pictures contains the data of a user profile's related pictures */
export interface Pictures {
  profile: string
  cover: string
}

/**
 * Profile represents a generic first on Desmos, containing the information of a
 * single user
 */
export interface Profile {
  account?: Any
  dtag: string
  nickname: string
  bio: string
  pictures?: Pictures
  creationDate?: Date
}

/** DTagTransferRequest represent a DTag transfer request between two users */
export interface DTagTransferRequest {
  dtagToTrade: string
  sender: string
  receiver: string
}

/** DTagTransferRequests contains a list of DTagTransferRequest */
export interface DTagTransferRequests {
  requests: DTagTransferRequest[]
}

/**
 * Relationship is the struct of a relationship.
 * It represent the concept of "follow" of traditional social networks.
 */
export interface Relationship {
  creator: string
  recipient: string
  subspace: string
}

/** Relationships wraps a list of Relationship objects */
export interface Relationships {
  relationships: Relationship[]
}

/**
 * UserBlock represents the fact that the Blocker has blocked the given Blocked
 * user.
 */
export interface UserBlock {
  blocker: string
  blocked: string
  /** Reason the user has been blocked for (optional). */
  reason: string
  subspace: string
}

/** UserBlocks wraps a list of UserBlock objects */
export interface UserBlocks {
  blocks: UserBlock[]
}

const basePictures: object = { profile: '', cover: '' }

export const Pictures = {
  encode(message: Pictures, writer: Writer = Writer.create()): Writer {
    if (message.profile !== '') {
      writer.uint32(10).string(message.profile)
    }
    if (message.cover !== '') {
      writer.uint32(18).string(message.cover)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Pictures {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...basePictures } as Pictures
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.profile = reader.string()
          break
        case 2:
          message.cover = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Pictures {
    const message = { ...basePictures } as Pictures
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = String(object.profile)
    } else {
      message.profile = ''
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = String(object.cover)
    } else {
      message.cover = ''
    }
    return message
  },

  toJSON(message: Pictures): unknown {
    const obj: any = {}
    message.profile !== undefined && (obj.profile = message.profile)
    message.cover !== undefined && (obj.cover = message.cover)
    return obj
  },

  fromPartial(object: DeepPartial<Pictures>): Pictures {
    const message = { ...basePictures } as Pictures
    if (object.profile !== undefined && object.profile !== null) {
      message.profile = object.profile
    } else {
      message.profile = ''
    }
    if (object.cover !== undefined && object.cover !== null) {
      message.cover = object.cover
    } else {
      message.cover = ''
    }
    return message
  },
}

const baseProfile: object = { dtag: '', nickname: '', bio: '' }

export const Profile = {
  encode(message: Profile, writer: Writer = Writer.create()): Writer {
    if (message.account !== undefined) {
      Any.encode(message.account, writer.uint32(10).fork()).ldelim()
    }
    if (message.dtag !== '') {
      writer.uint32(18).string(message.dtag)
    }
    if (message.nickname !== '') {
      writer.uint32(26).string(message.nickname)
    }
    if (message.bio !== '') {
      writer.uint32(34).string(message.bio)
    }
    if (message.pictures !== undefined) {
      Pictures.encode(message.pictures, writer.uint32(42).fork()).ldelim()
    }
    if (message.creationDate !== undefined) {
      Timestamp.encode(
        toTimestamp(message.creationDate),
        writer.uint32(50).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Profile {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseProfile } as Profile
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.account = Any.decode(reader, reader.uint32())
          break
        case 2:
          message.dtag = reader.string()
          break
        case 3:
          message.nickname = reader.string()
          break
        case 4:
          message.bio = reader.string()
          break
        case 5:
          message.pictures = Pictures.decode(reader, reader.uint32())
          break
        case 6:
          message.creationDate = fromTimestamp(
            Timestamp.decode(reader, reader.uint32())
          )
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Profile {
    const message = { ...baseProfile } as Profile
    if (object.account !== undefined && object.account !== null) {
      message.account = Any.fromJSON(object.account)
    } else {
      message.account = undefined
    }
    if (object.dtag !== undefined && object.dtag !== null) {
      message.dtag = String(object.dtag)
    } else {
      message.dtag = ''
    }
    if (object.nickname !== undefined && object.nickname !== null) {
      message.nickname = String(object.nickname)
    } else {
      message.nickname = ''
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = String(object.bio)
    } else {
      message.bio = ''
    }
    if (object.pictures !== undefined && object.pictures !== null) {
      message.pictures = Pictures.fromJSON(object.pictures)
    } else {
      message.pictures = undefined
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = fromJsonTimestamp(object.creationDate)
    } else {
      message.creationDate = undefined
    }
    return message
  },

  toJSON(message: Profile): unknown {
    const obj: any = {}
    message.account !== undefined &&
      (obj.account = message.account ? Any.toJSON(message.account) : undefined)
    message.dtag !== undefined && (obj.dtag = message.dtag)
    message.nickname !== undefined && (obj.nickname = message.nickname)
    message.bio !== undefined && (obj.bio = message.bio)
    message.pictures !== undefined &&
      (obj.pictures = message.pictures
        ? Pictures.toJSON(message.pictures)
        : undefined)
    message.creationDate !== undefined &&
      (obj.creationDate = message.creationDate.toISOString())
    return obj
  },

  fromPartial(object: DeepPartial<Profile>): Profile {
    const message = { ...baseProfile } as Profile
    if (object.account !== undefined && object.account !== null) {
      message.account = Any.fromPartial(object.account)
    } else {
      message.account = undefined
    }
    if (object.dtag !== undefined && object.dtag !== null) {
      message.dtag = object.dtag
    } else {
      message.dtag = ''
    }
    if (object.nickname !== undefined && object.nickname !== null) {
      message.nickname = object.nickname
    } else {
      message.nickname = ''
    }
    if (object.bio !== undefined && object.bio !== null) {
      message.bio = object.bio
    } else {
      message.bio = ''
    }
    if (object.pictures !== undefined && object.pictures !== null) {
      message.pictures = Pictures.fromPartial(object.pictures)
    } else {
      message.pictures = undefined
    }
    if (object.creationDate !== undefined && object.creationDate !== null) {
      message.creationDate = object.creationDate
    } else {
      message.creationDate = undefined
    }
    return message
  },
}

const baseDTagTransferRequest: object = {
  dtagToTrade: '',
  sender: '',
  receiver: '',
}

export const DTagTransferRequest = {
  encode(
    message: DTagTransferRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.dtagToTrade !== '') {
      writer.uint32(10).string(message.dtagToTrade)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    if (message.receiver !== '') {
      writer.uint32(26).string(message.receiver)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): DTagTransferRequest {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.dtagToTrade = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        case 3:
          message.receiver = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): DTagTransferRequest {
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest
    if (object.dtagToTrade !== undefined && object.dtagToTrade !== null) {
      message.dtagToTrade = String(object.dtagToTrade)
    } else {
      message.dtagToTrade = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver)
    } else {
      message.receiver = ''
    }
    return message
  },

  toJSON(message: DTagTransferRequest): unknown {
    const obj: any = {}
    message.dtagToTrade !== undefined && (obj.dtagToTrade = message.dtagToTrade)
    message.sender !== undefined && (obj.sender = message.sender)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    return obj
  },

  fromPartial(object: DeepPartial<DTagTransferRequest>): DTagTransferRequest {
    const message = { ...baseDTagTransferRequest } as DTagTransferRequest
    if (object.dtagToTrade !== undefined && object.dtagToTrade !== null) {
      message.dtagToTrade = object.dtagToTrade
    } else {
      message.dtagToTrade = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver
    } else {
      message.receiver = ''
    }
    return message
  },
}

const baseDTagTransferRequests: object = {}

export const DTagTransferRequests = {
  encode(
    message: DTagTransferRequests,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.requests) {
      DTagTransferRequest.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): DTagTransferRequests {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseDTagTransferRequests } as DTagTransferRequests
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

  fromJSON(object: any): DTagTransferRequests {
    const message = { ...baseDTagTransferRequests } as DTagTransferRequests
    message.requests = []
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(DTagTransferRequest.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: DTagTransferRequests): unknown {
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

  fromPartial(object: DeepPartial<DTagTransferRequests>): DTagTransferRequests {
    const message = { ...baseDTagTransferRequests } as DTagTransferRequests
    message.requests = []
    if (object.requests !== undefined && object.requests !== null) {
      for (const e of object.requests) {
        message.requests.push(DTagTransferRequest.fromPartial(e))
      }
    }
    return message
  },
}

const baseRelationship: object = { creator: '', recipient: '', subspace: '' }

export const Relationship = {
  encode(message: Relationship, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    if (message.recipient !== '') {
      writer.uint32(18).string(message.recipient)
    }
    if (message.subspace !== '') {
      writer.uint32(26).string(message.subspace)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Relationship {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRelationship } as Relationship
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        case 2:
          message.recipient = reader.string()
          break
        case 3:
          message.subspace = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): Relationship {
    const message = { ...baseRelationship } as Relationship
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient)
    } else {
      message.recipient = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    return message
  },

  toJSON(message: Relationship): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    message.recipient !== undefined && (obj.recipient = message.recipient)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(object: DeepPartial<Relationship>): Relationship {
    const message = { ...baseRelationship } as Relationship
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient
    } else {
      message.recipient = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    return message
  },
}

const baseRelationships: object = {}

export const Relationships = {
  encode(message: Relationships, writer: Writer = Writer.create()): Writer {
    for (const v of message.relationships) {
      Relationship.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): Relationships {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseRelationships } as Relationships
    message.relationships = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
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

  fromJSON(object: any): Relationships {
    const message = { ...baseRelationships } as Relationships
    message.relationships = []
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: Relationships): unknown {
    const obj: any = {}
    if (message.relationships) {
      obj.relationships = message.relationships.map((e) =>
        e ? Relationship.toJSON(e) : undefined
      )
    } else {
      obj.relationships = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<Relationships>): Relationships {
    const message = { ...baseRelationships } as Relationships
    message.relationships = []
    if (object.relationships !== undefined && object.relationships !== null) {
      for (const e of object.relationships) {
        message.relationships.push(Relationship.fromPartial(e))
      }
    }
    return message
  },
}

const baseUserBlock: object = {
  blocker: '',
  blocked: '',
  reason: '',
  subspace: '',
}

export const UserBlock = {
  encode(message: UserBlock, writer: Writer = Writer.create()): Writer {
    if (message.blocker !== '') {
      writer.uint32(10).string(message.blocker)
    }
    if (message.blocked !== '') {
      writer.uint32(18).string(message.blocked)
    }
    if (message.reason !== '') {
      writer.uint32(26).string(message.reason)
    }
    if (message.subspace !== '') {
      writer.uint32(34).string(message.subspace)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UserBlock {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserBlock } as UserBlock
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string()
          break
        case 2:
          message.blocked = reader.string()
          break
        case 3:
          message.reason = reader.string()
          break
        case 4:
          message.subspace = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): UserBlock {
    const message = { ...baseUserBlock } as UserBlock
    if (object.blocker !== undefined && object.blocker !== null) {
      message.blocker = String(object.blocker)
    } else {
      message.blocker = ''
    }
    if (object.blocked !== undefined && object.blocked !== null) {
      message.blocked = String(object.blocked)
    } else {
      message.blocked = ''
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = String(object.reason)
    } else {
      message.reason = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    return message
  },

  toJSON(message: UserBlock): unknown {
    const obj: any = {}
    message.blocker !== undefined && (obj.blocker = message.blocker)
    message.blocked !== undefined && (obj.blocked = message.blocked)
    message.reason !== undefined && (obj.reason = message.reason)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(object: DeepPartial<UserBlock>): UserBlock {
    const message = { ...baseUserBlock } as UserBlock
    if (object.blocker !== undefined && object.blocker !== null) {
      message.blocker = object.blocker
    } else {
      message.blocker = ''
    }
    if (object.blocked !== undefined && object.blocked !== null) {
      message.blocked = object.blocked
    } else {
      message.blocked = ''
    }
    if (object.reason !== undefined && object.reason !== null) {
      message.reason = object.reason
    } else {
      message.reason = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    return message
  },
}

const baseUserBlocks: object = {}

export const UserBlocks = {
  encode(message: UserBlocks, writer: Writer = Writer.create()): Writer {
    for (const v of message.blocks) {
      UserBlock.encode(v!, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UserBlocks {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUserBlocks } as UserBlocks
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

  fromJSON(object: any): UserBlocks {
    const message = { ...baseUserBlocks } as UserBlocks
    message.blocks = []
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: UserBlocks): unknown {
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

  fromPartial(object: DeepPartial<UserBlocks>): UserBlocks {
    const message = { ...baseUserBlocks } as UserBlocks
    message.blocks = []
    if (object.blocks !== undefined && object.blocks !== null) {
      for (const e of object.blocks) {
        message.blocks.push(UserBlock.fromPartial(e))
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

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (util.Long !== Long) {
  util.Long = Long as any
  configure()
}
