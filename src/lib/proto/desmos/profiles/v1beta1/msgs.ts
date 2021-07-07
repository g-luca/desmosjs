/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal'
import * as Long from 'long'

export const protobufPackage = 'desmos.profiles.v1beta1'

/** MsgSaveProfile represents a message to save a profile. */
export interface MsgSaveProfile {
  dtag: string
  nickname: string
  bio: string
  profilePicture: string
  coverPicture: string
  creator: string
}

/** MsgSaveProfileResponse defines the Msg/SaveProfile response type. */
export interface MsgSaveProfileResponse {}

/** MsgDeleteProfile represents the message used to delete an existing profile. */
export interface MsgDeleteProfile {
  creator: string
}

/** MsgDeleteProfileResponse defines the Msg/DeleteProfile response type. */
export interface MsgDeleteProfileResponse {}

/**
 * MsgRequestDTagTransfer represents the message used to request the DTag
 * transfer to another user.
 */
export interface MsgRequestDTagTransfer {
  receiver: string
  sender: string
}

/**
 * MsgRequestDTagTransferResponse defines the Msg/RequestDTagTransfer response
 * type.
 */
export interface MsgRequestDTagTransferResponse {}

/**
 * MsgCancelDTagTransfer represents the message used to cancel a DTag transfer
 * request.
 */
export interface MsgCancelDTagTransfer {
  receiver: string
  sender: string
}

/**
 * MsgCancelDTagTransferResponse represents the Msg/CancelDTagTransfer response
 * type.
 */
export interface MsgCancelDTagTransferResponse {}

/**
 * MsgAcceptDTagTransfer represents the message used to accept a DTag transfer
 * request.
 */
export interface MsgAcceptDTagTransfer {
  newDtag: string
  sender: string
  receiver: string
}

/** MsgAcceptDTagTransferResponse defines the Msg/AcceptDTagTransfer response. */
export interface MsgAcceptDTagTransferResponse {}

/**
 * MsgRefuseDTagTransfer represents the message used to refuse a DTag transfer
 * request.
 */
export interface MsgRefuseDTagTransfer {
  sender: string
  receiver: string
}

/** MsgRefuseDTagTransferResponse defines the Msg/RefuseDTagTransfer response. */
export interface MsgRefuseDTagTransferResponse {}

/**
 * MsgCreateRelationship represents a message to create a relationship
 * between two users on a specific subspace.
 */
export interface MsgCreateRelationship {
  sender: string
  receiver: string
  subspace: string
}

/** CreateRelationshipResponse defines the Msg/CreateRelationship response type. */
export interface CreateRelationshipResponse {}

/**
 * MsgDeleteRelationship represents a message to delete the relationship
 * between two users.
 */
export interface MsgDeleteRelationship {
  user: string
  counterparty: string
  subspace: string
}

/** DeleteRelationshipResponse defines the Msg/DeleteRelationship response type. */
export interface DeleteRelationshipResponse {}

/**
 * MsgBlockUser represents a message to block another user specifying an
 * optional reason.
 */
export interface MsgBlockUser {
  blocker: string
  blocked: string
  reason: string
  subspace: string
}

/** BlockUserResponse defines the Msg/BlockUser response type. */
export interface BlockUserResponse {}

/** MsgUnblockUser represents a message to unblock a previously blocked user. */
export interface MsgUnblockUser {
  blocker: string
  blocked: string
  subspace: string
}

/** UnblockUserResponse defines the Msg/UnblockUser response type. */
export interface UnblockUserResponse {}

const baseMsgSaveProfile: object = {
  dtag: '',
  nickname: '',
  bio: '',
  profilePicture: '',
  coverPicture: '',
  creator: '',
}

export const MsgSaveProfile = {
  encode(message: MsgSaveProfile, writer: Writer = Writer.create()): Writer {
    if (message.dtag !== '') {
      writer.uint32(10).string(message.dtag)
    }
    if (message.nickname !== '') {
      writer.uint32(18).string(message.nickname)
    }
    if (message.bio !== '') {
      writer.uint32(26).string(message.bio)
    }
    if (message.profilePicture !== '') {
      writer.uint32(34).string(message.profilePicture)
    }
    if (message.coverPicture !== '') {
      writer.uint32(42).string(message.coverPicture)
    }
    if (message.creator !== '') {
      writer.uint32(50).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSaveProfile {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSaveProfile } as MsgSaveProfile
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.dtag = reader.string()
          break
        case 2:
          message.nickname = reader.string()
          break
        case 3:
          message.bio = reader.string()
          break
        case 4:
          message.profilePicture = reader.string()
          break
        case 5:
          message.coverPicture = reader.string()
          break
        case 6:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgSaveProfile {
    const message = { ...baseMsgSaveProfile } as MsgSaveProfile
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
    if (object.profilePicture !== undefined && object.profilePicture !== null) {
      message.profilePicture = String(object.profilePicture)
    } else {
      message.profilePicture = ''
    }
    if (object.coverPicture !== undefined && object.coverPicture !== null) {
      message.coverPicture = String(object.coverPicture)
    } else {
      message.coverPicture = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgSaveProfile): unknown {
    const obj: any = {}
    message.dtag !== undefined && (obj.dtag = message.dtag)
    message.nickname !== undefined && (obj.nickname = message.nickname)
    message.bio !== undefined && (obj.bio = message.bio)
    message.profilePicture !== undefined &&
      (obj.profilePicture = message.profilePicture)
    message.coverPicture !== undefined &&
      (obj.coverPicture = message.coverPicture)
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgSaveProfile>): MsgSaveProfile {
    const message = { ...baseMsgSaveProfile } as MsgSaveProfile
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
    if (object.profilePicture !== undefined && object.profilePicture !== null) {
      message.profilePicture = object.profilePicture
    } else {
      message.profilePicture = ''
    }
    if (object.coverPicture !== undefined && object.coverPicture !== null) {
      message.coverPicture = object.coverPicture
    } else {
      message.coverPicture = ''
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  },
}

const baseMsgSaveProfileResponse: object = {}

export const MsgSaveProfileResponse = {
  encode(_: MsgSaveProfileResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSaveProfileResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgSaveProfileResponse } as MsgSaveProfileResponse
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

  fromJSON(_: any): MsgSaveProfileResponse {
    const message = { ...baseMsgSaveProfileResponse } as MsgSaveProfileResponse
    return message
  },

  toJSON(_: MsgSaveProfileResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgSaveProfileResponse>): MsgSaveProfileResponse {
    const message = { ...baseMsgSaveProfileResponse } as MsgSaveProfileResponse
    return message
  },
}

const baseMsgDeleteProfile: object = { creator: '' }

export const MsgDeleteProfile = {
  encode(message: MsgDeleteProfile, writer: Writer = Writer.create()): Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteProfile {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgDeleteProfile {
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator)
    } else {
      message.creator = ''
    }
    return message
  },

  toJSON(message: MsgDeleteProfile): unknown {
    const obj: any = {}
    message.creator !== undefined && (obj.creator = message.creator)
    return obj
  },

  fromPartial(object: DeepPartial<MsgDeleteProfile>): MsgDeleteProfile {
    const message = { ...baseMsgDeleteProfile } as MsgDeleteProfile
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator
    } else {
      message.creator = ''
    }
    return message
  },
}

const baseMsgDeleteProfileResponse: object = {}

export const MsgDeleteProfileResponse = {
  encode(
    _: MsgDeleteProfileResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDeleteProfileResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgDeleteProfileResponse,
    } as MsgDeleteProfileResponse
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

  fromJSON(_: any): MsgDeleteProfileResponse {
    const message = {
      ...baseMsgDeleteProfileResponse,
    } as MsgDeleteProfileResponse
    return message
  },

  toJSON(_: MsgDeleteProfileResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgDeleteProfileResponse>
  ): MsgDeleteProfileResponse {
    const message = {
      ...baseMsgDeleteProfileResponse,
    } as MsgDeleteProfileResponse
    return message
  },
}

const baseMsgRequestDTagTransfer: object = { receiver: '', sender: '' }

export const MsgRequestDTagTransfer = {
  encode(
    message: MsgRequestDTagTransfer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receiver !== '') {
      writer.uint32(10).string(message.receiver)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRequestDTagTransfer {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRequestDTagTransfer {
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver)
    } else {
      message.receiver = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    return message
  },

  toJSON(message: MsgRequestDTagTransfer): unknown {
    const obj: any = {}
    message.receiver !== undefined && (obj.receiver = message.receiver)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRequestDTagTransfer>
  ): MsgRequestDTagTransfer {
    const message = { ...baseMsgRequestDTagTransfer } as MsgRequestDTagTransfer
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver
    } else {
      message.receiver = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    return message
  },
}

const baseMsgRequestDTagTransferResponse: object = {}

export const MsgRequestDTagTransferResponse = {
  encode(
    _: MsgRequestDTagTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRequestDTagTransferResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse
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

  fromJSON(_: any): MsgRequestDTagTransferResponse {
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse
    return message
  },

  toJSON(_: MsgRequestDTagTransferResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgRequestDTagTransferResponse>
  ): MsgRequestDTagTransferResponse {
    const message = {
      ...baseMsgRequestDTagTransferResponse,
    } as MsgRequestDTagTransferResponse
    return message
  },
}

const baseMsgCancelDTagTransfer: object = { receiver: '', sender: '' }

export const MsgCancelDTagTransfer = {
  encode(
    message: MsgCancelDTagTransfer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.receiver !== '') {
      writer.uint32(10).string(message.receiver)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCancelDTagTransfer {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCancelDTagTransfer } as MsgCancelDTagTransfer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.receiver = reader.string()
          break
        case 2:
          message.sender = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgCancelDTagTransfer {
    const message = { ...baseMsgCancelDTagTransfer } as MsgCancelDTagTransfer
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver)
    } else {
      message.receiver = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender)
    } else {
      message.sender = ''
    }
    return message
  },

  toJSON(message: MsgCancelDTagTransfer): unknown {
    const obj: any = {}
    message.receiver !== undefined && (obj.receiver = message.receiver)
    message.sender !== undefined && (obj.sender = message.sender)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCancelDTagTransfer>
  ): MsgCancelDTagTransfer {
    const message = { ...baseMsgCancelDTagTransfer } as MsgCancelDTagTransfer
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver
    } else {
      message.receiver = ''
    }
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender
    } else {
      message.sender = ''
    }
    return message
  },
}

const baseMsgCancelDTagTransferResponse: object = {}

export const MsgCancelDTagTransferResponse = {
  encode(
    _: MsgCancelDTagTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgCancelDTagTransferResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgCancelDTagTransferResponse,
    } as MsgCancelDTagTransferResponse
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

  fromJSON(_: any): MsgCancelDTagTransferResponse {
    const message = {
      ...baseMsgCancelDTagTransferResponse,
    } as MsgCancelDTagTransferResponse
    return message
  },

  toJSON(_: MsgCancelDTagTransferResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgCancelDTagTransferResponse>
  ): MsgCancelDTagTransferResponse {
    const message = {
      ...baseMsgCancelDTagTransferResponse,
    } as MsgCancelDTagTransferResponse
    return message
  },
}

const baseMsgAcceptDTagTransfer: object = {
  newDtag: '',
  sender: '',
  receiver: '',
}

export const MsgAcceptDTagTransfer = {
  encode(
    message: MsgAcceptDTagTransfer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.newDtag !== '') {
      writer.uint32(10).string(message.newDtag)
    }
    if (message.sender !== '') {
      writer.uint32(18).string(message.sender)
    }
    if (message.receiver !== '') {
      writer.uint32(26).string(message.receiver)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgAcceptDTagTransfer {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgAcceptDTagTransfer } as MsgAcceptDTagTransfer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.newDtag = reader.string()
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

  fromJSON(object: any): MsgAcceptDTagTransfer {
    const message = { ...baseMsgAcceptDTagTransfer } as MsgAcceptDTagTransfer
    if (object.newDtag !== undefined && object.newDtag !== null) {
      message.newDtag = String(object.newDtag)
    } else {
      message.newDtag = ''
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

  toJSON(message: MsgAcceptDTagTransfer): unknown {
    const obj: any = {}
    message.newDtag !== undefined && (obj.newDtag = message.newDtag)
    message.sender !== undefined && (obj.sender = message.sender)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgAcceptDTagTransfer>
  ): MsgAcceptDTagTransfer {
    const message = { ...baseMsgAcceptDTagTransfer } as MsgAcceptDTagTransfer
    if (object.newDtag !== undefined && object.newDtag !== null) {
      message.newDtag = object.newDtag
    } else {
      message.newDtag = ''
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

const baseMsgAcceptDTagTransferResponse: object = {}

export const MsgAcceptDTagTransferResponse = {
  encode(
    _: MsgAcceptDTagTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAcceptDTagTransferResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgAcceptDTagTransferResponse,
    } as MsgAcceptDTagTransferResponse
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

  fromJSON(_: any): MsgAcceptDTagTransferResponse {
    const message = {
      ...baseMsgAcceptDTagTransferResponse,
    } as MsgAcceptDTagTransferResponse
    return message
  },

  toJSON(_: MsgAcceptDTagTransferResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgAcceptDTagTransferResponse>
  ): MsgAcceptDTagTransferResponse {
    const message = {
      ...baseMsgAcceptDTagTransferResponse,
    } as MsgAcceptDTagTransferResponse
    return message
  },
}

const baseMsgRefuseDTagTransfer: object = { sender: '', receiver: '' }

export const MsgRefuseDTagTransfer = {
  encode(
    message: MsgRefuseDTagTransfer,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRefuseDTagTransfer {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRefuseDTagTransfer } as MsgRefuseDTagTransfer
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.receiver = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRefuseDTagTransfer {
    const message = { ...baseMsgRefuseDTagTransfer } as MsgRefuseDTagTransfer
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

  toJSON(message: MsgRefuseDTagTransfer): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgRefuseDTagTransfer>
  ): MsgRefuseDTagTransfer {
    const message = { ...baseMsgRefuseDTagTransfer } as MsgRefuseDTagTransfer
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

const baseMsgRefuseDTagTransferResponse: object = {}

export const MsgRefuseDTagTransferResponse = {
  encode(
    _: MsgRefuseDTagTransferResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRefuseDTagTransferResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseMsgRefuseDTagTransferResponse,
    } as MsgRefuseDTagTransferResponse
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

  fromJSON(_: any): MsgRefuseDTagTransferResponse {
    const message = {
      ...baseMsgRefuseDTagTransferResponse,
    } as MsgRefuseDTagTransferResponse
    return message
  },

  toJSON(_: MsgRefuseDTagTransferResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<MsgRefuseDTagTransferResponse>
  ): MsgRefuseDTagTransferResponse {
    const message = {
      ...baseMsgRefuseDTagTransferResponse,
    } as MsgRefuseDTagTransferResponse
    return message
  },
}

const baseMsgCreateRelationship: object = {
  sender: '',
  receiver: '',
  subspace: '',
}

export const MsgCreateRelationship = {
  encode(
    message: MsgCreateRelationship,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== '') {
      writer.uint32(10).string(message.sender)
    }
    if (message.receiver !== '') {
      writer.uint32(18).string(message.receiver)
    }
    if (message.subspace !== '') {
      writer.uint32(26).string(message.subspace)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateRelationship {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgCreateRelationship } as MsgCreateRelationship
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string()
          break
        case 2:
          message.receiver = reader.string()
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

  fromJSON(object: any): MsgCreateRelationship {
    const message = { ...baseMsgCreateRelationship } as MsgCreateRelationship
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
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    return message
  },

  toJSON(message: MsgCreateRelationship): unknown {
    const obj: any = {}
    message.sender !== undefined && (obj.sender = message.sender)
    message.receiver !== undefined && (obj.receiver = message.receiver)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgCreateRelationship>
  ): MsgCreateRelationship {
    const message = { ...baseMsgCreateRelationship } as MsgCreateRelationship
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
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    return message
  },
}

const baseCreateRelationshipResponse: object = {}

export const CreateRelationshipResponse = {
  encode(
    _: CreateRelationshipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): CreateRelationshipResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseCreateRelationshipResponse,
    } as CreateRelationshipResponse
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

  fromJSON(_: any): CreateRelationshipResponse {
    const message = {
      ...baseCreateRelationshipResponse,
    } as CreateRelationshipResponse
    return message
  },

  toJSON(_: CreateRelationshipResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<CreateRelationshipResponse>
  ): CreateRelationshipResponse {
    const message = {
      ...baseCreateRelationshipResponse,
    } as CreateRelationshipResponse
    return message
  },
}

const baseMsgDeleteRelationship: object = {
  user: '',
  counterparty: '',
  subspace: '',
}

export const MsgDeleteRelationship = {
  encode(
    message: MsgDeleteRelationship,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.user !== '') {
      writer.uint32(10).string(message.user)
    }
    if (message.counterparty !== '') {
      writer.uint32(18).string(message.counterparty)
    }
    if (message.subspace !== '') {
      writer.uint32(26).string(message.subspace)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDeleteRelationship {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgDeleteRelationship } as MsgDeleteRelationship
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.user = reader.string()
          break
        case 2:
          message.counterparty = reader.string()
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

  fromJSON(object: any): MsgDeleteRelationship {
    const message = { ...baseMsgDeleteRelationship } as MsgDeleteRelationship
    if (object.user !== undefined && object.user !== null) {
      message.user = String(object.user)
    } else {
      message.user = ''
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = String(object.counterparty)
    } else {
      message.counterparty = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    return message
  },

  toJSON(message: MsgDeleteRelationship): unknown {
    const obj: any = {}
    message.user !== undefined && (obj.user = message.user)
    message.counterparty !== undefined &&
      (obj.counterparty = message.counterparty)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(
    object: DeepPartial<MsgDeleteRelationship>
  ): MsgDeleteRelationship {
    const message = { ...baseMsgDeleteRelationship } as MsgDeleteRelationship
    if (object.user !== undefined && object.user !== null) {
      message.user = object.user
    } else {
      message.user = ''
    }
    if (object.counterparty !== undefined && object.counterparty !== null) {
      message.counterparty = object.counterparty
    } else {
      message.counterparty = ''
    }
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    return message
  },
}

const baseDeleteRelationshipResponse: object = {}

export const DeleteRelationshipResponse = {
  encode(
    _: DeleteRelationshipResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): DeleteRelationshipResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = {
      ...baseDeleteRelationshipResponse,
    } as DeleteRelationshipResponse
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

  fromJSON(_: any): DeleteRelationshipResponse {
    const message = {
      ...baseDeleteRelationshipResponse,
    } as DeleteRelationshipResponse
    return message
  },

  toJSON(_: DeleteRelationshipResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(
    _: DeepPartial<DeleteRelationshipResponse>
  ): DeleteRelationshipResponse {
    const message = {
      ...baseDeleteRelationshipResponse,
    } as DeleteRelationshipResponse
    return message
  },
}

const baseMsgBlockUser: object = {
  blocker: '',
  blocked: '',
  reason: '',
  subspace: '',
}

export const MsgBlockUser = {
  encode(message: MsgBlockUser, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgBlockUser {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgBlockUser } as MsgBlockUser
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

  fromJSON(object: any): MsgBlockUser {
    const message = { ...baseMsgBlockUser } as MsgBlockUser
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

  toJSON(message: MsgBlockUser): unknown {
    const obj: any = {}
    message.blocker !== undefined && (obj.blocker = message.blocker)
    message.blocked !== undefined && (obj.blocked = message.blocked)
    message.reason !== undefined && (obj.reason = message.reason)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(object: DeepPartial<MsgBlockUser>): MsgBlockUser {
    const message = { ...baseMsgBlockUser } as MsgBlockUser
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

const baseBlockUserResponse: object = {}

export const BlockUserResponse = {
  encode(_: BlockUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): BlockUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseBlockUserResponse } as BlockUserResponse
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

  fromJSON(_: any): BlockUserResponse {
    const message = { ...baseBlockUserResponse } as BlockUserResponse
    return message
  },

  toJSON(_: BlockUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<BlockUserResponse>): BlockUserResponse {
    const message = { ...baseBlockUserResponse } as BlockUserResponse
    return message
  },
}

const baseMsgUnblockUser: object = { blocker: '', blocked: '', subspace: '' }

export const MsgUnblockUser = {
  encode(message: MsgUnblockUser, writer: Writer = Writer.create()): Writer {
    if (message.blocker !== '') {
      writer.uint32(10).string(message.blocker)
    }
    if (message.blocked !== '') {
      writer.uint32(18).string(message.blocked)
    }
    if (message.subspace !== '') {
      writer.uint32(34).string(message.subspace)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgUnblockUser {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgUnblockUser } as MsgUnblockUser
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.blocker = reader.string()
          break
        case 2:
          message.blocked = reader.string()
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

  fromJSON(object: any): MsgUnblockUser {
    const message = { ...baseMsgUnblockUser } as MsgUnblockUser
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
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = String(object.subspace)
    } else {
      message.subspace = ''
    }
    return message
  },

  toJSON(message: MsgUnblockUser): unknown {
    const obj: any = {}
    message.blocker !== undefined && (obj.blocker = message.blocker)
    message.blocked !== undefined && (obj.blocked = message.blocked)
    message.subspace !== undefined && (obj.subspace = message.subspace)
    return obj
  },

  fromPartial(object: DeepPartial<MsgUnblockUser>): MsgUnblockUser {
    const message = { ...baseMsgUnblockUser } as MsgUnblockUser
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
    if (object.subspace !== undefined && object.subspace !== null) {
      message.subspace = object.subspace
    } else {
      message.subspace = ''
    }
    return message
  },
}

const baseUnblockUserResponse: object = {}

export const UnblockUserResponse = {
  encode(_: UnblockUserResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): UnblockUserResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseUnblockUserResponse } as UnblockUserResponse
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

  fromJSON(_: any): UnblockUserResponse {
    const message = { ...baseUnblockUserResponse } as UnblockUserResponse
    return message
  },

  toJSON(_: UnblockUserResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<UnblockUserResponse>): UnblockUserResponse {
    const message = { ...baseUnblockUserResponse } as UnblockUserResponse
    return message
  },
}

/** Msg defines the relationships Msg service. */
export interface Msg {
  /** SaveProfile defines the method to save a profile */
  SaveProfile(request: MsgSaveProfile): Promise<MsgSaveProfileResponse>
  /** DeleteProfile defines the method to delete an existing profile */
  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse>
  /**
   * RequestDTagTransfer defines the method to request another user to transfer
   * their DTag to you
   */
  RequestDTagTransfer(
    request: MsgRequestDTagTransfer
  ): Promise<MsgRequestDTagTransferResponse>
  /**
   * CancelDTagTransfer defines the method to cancel an outgoing DTag transfer
   * request
   */
  CancelDTagTransfer(
    request: MsgCancelDTagTransfer
  ): Promise<MsgCancelDTagTransferResponse>
  /**
   * AcceptDTagTransfer defines the method to accept an incoming DTag transfer
   * request
   */
  AcceptDTagTransfer(
    request: MsgAcceptDTagTransfer
  ): Promise<MsgAcceptDTagTransferResponse>
  /**
   * RefuseDTagTransfer defines the method to refuse an incoming DTag transfer
   * request
   */
  RefuseDTagTransfer(
    request: MsgRefuseDTagTransfer
  ): Promise<MsgRefuseDTagTransferResponse>
  /** CreateRelationship defines a method for creating a new relationship */
  CreateRelationship(
    request: MsgCreateRelationship
  ): Promise<CreateRelationshipResponse>
  /** DeleteRelationship defines a method for deleting a relationship */
  DeleteRelationship(
    request: MsgDeleteRelationship
  ): Promise<DeleteRelationshipResponse>
  /** BlockUser defines a method for blocking a user */
  BlockUser(request: MsgBlockUser): Promise<BlockUserResponse>
  /** UnblockUser defines a method for unblocking a user */
  UnblockUser(request: MsgUnblockUser): Promise<UnblockUserResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.SaveProfile = this.SaveProfile.bind(this)
    this.DeleteProfile = this.DeleteProfile.bind(this)
    this.RequestDTagTransfer = this.RequestDTagTransfer.bind(this)
    this.CancelDTagTransfer = this.CancelDTagTransfer.bind(this)
    this.AcceptDTagTransfer = this.AcceptDTagTransfer.bind(this)
    this.RefuseDTagTransfer = this.RefuseDTagTransfer.bind(this)
    this.CreateRelationship = this.CreateRelationship.bind(this)
    this.DeleteRelationship = this.DeleteRelationship.bind(this)
    this.BlockUser = this.BlockUser.bind(this)
    this.UnblockUser = this.UnblockUser.bind(this)
  }
  SaveProfile(request: MsgSaveProfile): Promise<MsgSaveProfileResponse> {
    const data = MsgSaveProfile.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'SaveProfile',
      data
    )
    return promise.then((data) =>
      MsgSaveProfileResponse.decode(new Reader(data))
    )
  }

  DeleteProfile(request: MsgDeleteProfile): Promise<MsgDeleteProfileResponse> {
    const data = MsgDeleteProfile.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'DeleteProfile',
      data
    )
    return promise.then((data) =>
      MsgDeleteProfileResponse.decode(new Reader(data))
    )
  }

  RequestDTagTransfer(
    request: MsgRequestDTagTransfer
  ): Promise<MsgRequestDTagTransferResponse> {
    const data = MsgRequestDTagTransfer.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'RequestDTagTransfer',
      data
    )
    return promise.then((data) =>
      MsgRequestDTagTransferResponse.decode(new Reader(data))
    )
  }

  CancelDTagTransfer(
    request: MsgCancelDTagTransfer
  ): Promise<MsgCancelDTagTransferResponse> {
    const data = MsgCancelDTagTransfer.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'CancelDTagTransfer',
      data
    )
    return promise.then((data) =>
      MsgCancelDTagTransferResponse.decode(new Reader(data))
    )
  }

  AcceptDTagTransfer(
    request: MsgAcceptDTagTransfer
  ): Promise<MsgAcceptDTagTransferResponse> {
    const data = MsgAcceptDTagTransfer.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'AcceptDTagTransfer',
      data
    )
    return promise.then((data) =>
      MsgAcceptDTagTransferResponse.decode(new Reader(data))
    )
  }

  RefuseDTagTransfer(
    request: MsgRefuseDTagTransfer
  ): Promise<MsgRefuseDTagTransferResponse> {
    const data = MsgRefuseDTagTransfer.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'RefuseDTagTransfer',
      data
    )
    return promise.then((data) =>
      MsgRefuseDTagTransferResponse.decode(new Reader(data))
    )
  }

  CreateRelationship(
    request: MsgCreateRelationship
  ): Promise<CreateRelationshipResponse> {
    const data = MsgCreateRelationship.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'CreateRelationship',
      data
    )
    return promise.then((data) =>
      CreateRelationshipResponse.decode(new Reader(data))
    )
  }

  DeleteRelationship(
    request: MsgDeleteRelationship
  ): Promise<DeleteRelationshipResponse> {
    const data = MsgDeleteRelationship.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'DeleteRelationship',
      data
    )
    return promise.then((data) =>
      DeleteRelationshipResponse.decode(new Reader(data))
    )
  }

  BlockUser(request: MsgBlockUser): Promise<BlockUserResponse> {
    const data = MsgBlockUser.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'BlockUser',
      data
    )
    return promise.then((data) => BlockUserResponse.decode(new Reader(data)))
  }

  UnblockUser(request: MsgUnblockUser): Promise<UnblockUserResponse> {
    const data = MsgUnblockUser.encode(request).finish()
    const promise = this.rpc.request(
      'desmos.profiles.v1beta1.Msg',
      'UnblockUser',
      data
    )
    return promise.then((data) => UnblockUserResponse.decode(new Reader(data)))
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
