/* eslint-disable */
import { util, configure, Reader, Writer } from 'protobufjs/minimal'
import * as Long from 'long'
import { Any } from '../../../google/protobuf/any'
import { Result } from '../../../cosmos/base/abci/v1beta1/abci'
import { Timestamp } from '../../../google/protobuf/timestamp'

export const protobufPackage = 'cosmos.authz.v1beta1'

/**
 * MsgGrant grants the provided authorization to the grantee on the granter's
 * account with the provided expiration time.
 */
export interface MsgGrant {
  granter: string
  grantee: string
  authorization?: Any
  expiration?: Date
}

/** MsgExecResponse defines the Msg/MsgExecResponse response type. */
export interface MsgExecResponse {
  result?: Result
}

/**
 * MsgExec attempts to execute the provided messages using
 * authorizations granted to the grantee. Each message should have only
 * one signer corresponding to the granter of the authorization.
 */
export interface MsgExec {
  grantee: string
  /**
   * Authorization Msg requests to execute. Each msg must implement Authorization interface
   * The x/authz will try to find a grant matching (msg.signers[0], grantee, MsgTypeURL(msg))
   * triple and validate it.
   */
  msgs: Any[]
}

/** MsgGrantResponse defines the Msg/MsgGrant response type. */
export interface MsgGrantResponse {}

/**
 * MsgRevoke revokes any authorization with the provided sdk.Msg type on the
 * granter's account with that has been granted to the grantee.
 */
export interface MsgRevoke {
  granter: string
  grantee: string
  msgTypeUrl: string
}

/** MsgRevokeResponse defines the Msg/MsgRevokeResponse response type. */
export interface MsgRevokeResponse {}

const baseMsgGrant: object = { granter: '', grantee: '' }

export const MsgGrant = {
  encode(message: MsgGrant, writer: Writer = Writer.create()): Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter)
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee)
    }
    if (message.authorization !== undefined) {
      Any.encode(message.authorization, writer.uint32(26).fork()).ldelim()
    }
    if (message.expiration !== undefined) {
      Timestamp.encode(
        toTimestamp(message.expiration),
        writer.uint32(34).fork()
      ).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGrant {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgGrant } as MsgGrant
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string()
          break
        case 2:
          message.grantee = reader.string()
          break
        case 3:
          message.authorization = Any.decode(reader, reader.uint32())
          break
        case 4:
          message.expiration = fromTimestamp(
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

  fromJSON(object: any): MsgGrant {
    const message = { ...baseMsgGrant } as MsgGrant
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = String(object.granter)
    } else {
      message.granter = ''
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee)
    } else {
      message.grantee = ''
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Any.fromJSON(object.authorization)
    } else {
      message.authorization = undefined
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = fromJsonTimestamp(object.expiration)
    } else {
      message.expiration = undefined
    }
    return message
  },

  toJSON(message: MsgGrant): unknown {
    const obj: any = {}
    message.granter !== undefined && (obj.granter = message.granter)
    message.grantee !== undefined && (obj.grantee = message.grantee)
    message.authorization !== undefined &&
      (obj.authorization = message.authorization
        ? Any.toJSON(message.authorization)
        : undefined)
    message.expiration !== undefined &&
      (obj.expiration = message.expiration.toISOString())
    return obj
  },

  fromPartial(object: DeepPartial<MsgGrant>): MsgGrant {
    const message = { ...baseMsgGrant } as MsgGrant
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter
    } else {
      message.granter = ''
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee
    } else {
      message.grantee = ''
    }
    if (object.authorization !== undefined && object.authorization !== null) {
      message.authorization = Any.fromPartial(object.authorization)
    } else {
      message.authorization = undefined
    }
    if (object.expiration !== undefined && object.expiration !== null) {
      message.expiration = object.expiration
    } else {
      message.expiration = undefined
    }
    return message
  },
}

const baseMsgExecResponse: object = {}

export const MsgExecResponse = {
  encode(message: MsgExecResponse, writer: Writer = Writer.create()): Writer {
    if (message.result !== undefined) {
      Result.encode(message.result, writer.uint32(10).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExecResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgExecResponse } as MsgExecResponse
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.result = Result.decode(reader, reader.uint32())
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromJSON(object.result)
    } else {
      message.result = undefined
    }
    return message
  },

  toJSON(message: MsgExecResponse): unknown {
    const obj: any = {}
    message.result !== undefined &&
      (obj.result = message.result ? Result.toJSON(message.result) : undefined)
    return obj
  },

  fromPartial(object: DeepPartial<MsgExecResponse>): MsgExecResponse {
    const message = { ...baseMsgExecResponse } as MsgExecResponse
    if (object.result !== undefined && object.result !== null) {
      message.result = Result.fromPartial(object.result)
    } else {
      message.result = undefined
    }
    return message
  },
}

const baseMsgExec: object = { grantee: '' }

export const MsgExec = {
  encode(message: MsgExec, writer: Writer = Writer.create()): Writer {
    if (message.grantee !== '') {
      writer.uint32(10).string(message.grantee)
    }
    for (const v of message.msgs) {
      Any.encode(v!, writer.uint32(18).fork()).ldelim()
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExec {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgExec } as MsgExec
    message.msgs = []
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.grantee = reader.string()
          break
        case 2:
          message.msgs.push(Any.decode(reader, reader.uint32()))
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgExec {
    const message = { ...baseMsgExec } as MsgExec
    message.msgs = []
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee)
    } else {
      message.grantee = ''
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(Any.fromJSON(e))
      }
    }
    return message
  },

  toJSON(message: MsgExec): unknown {
    const obj: any = {}
    message.grantee !== undefined && (obj.grantee = message.grantee)
    if (message.msgs) {
      obj.msgs = message.msgs.map((e) => (e ? Any.toJSON(e) : undefined))
    } else {
      obj.msgs = []
    }
    return obj
  },

  fromPartial(object: DeepPartial<MsgExec>): MsgExec {
    const message = { ...baseMsgExec } as MsgExec
    message.msgs = []
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee
    } else {
      message.grantee = ''
    }
    if (object.msgs !== undefined && object.msgs !== null) {
      for (const e of object.msgs) {
        message.msgs.push(Any.fromPartial(e))
      }
    }
    return message
  },
}

const baseMsgGrantResponse: object = {}

export const MsgGrantResponse = {
  encode(_: MsgGrantResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgGrantResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgGrantResponse } as MsgGrantResponse
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

  fromJSON(_: any): MsgGrantResponse {
    const message = { ...baseMsgGrantResponse } as MsgGrantResponse
    return message
  },

  toJSON(_: MsgGrantResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgGrantResponse>): MsgGrantResponse {
    const message = { ...baseMsgGrantResponse } as MsgGrantResponse
    return message
  },
}

const baseMsgRevoke: object = { granter: '', grantee: '', msgTypeUrl: '' }

export const MsgRevoke = {
  encode(message: MsgRevoke, writer: Writer = Writer.create()): Writer {
    if (message.granter !== '') {
      writer.uint32(10).string(message.granter)
    }
    if (message.grantee !== '') {
      writer.uint32(18).string(message.grantee)
    }
    if (message.msgTypeUrl !== '') {
      writer.uint32(26).string(message.msgTypeUrl)
    }
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevoke {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRevoke } as MsgRevoke
    while (reader.pos < end) {
      const tag = reader.uint32()
      switch (tag >>> 3) {
        case 1:
          message.granter = reader.string()
          break
        case 2:
          message.grantee = reader.string()
          break
        case 3:
          message.msgTypeUrl = reader.string()
          break
        default:
          reader.skipType(tag & 7)
          break
      }
    }
    return message
  },

  fromJSON(object: any): MsgRevoke {
    const message = { ...baseMsgRevoke } as MsgRevoke
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = String(object.granter)
    } else {
      message.granter = ''
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = String(object.grantee)
    } else {
      message.grantee = ''
    }
    if (object.msgTypeUrl !== undefined && object.msgTypeUrl !== null) {
      message.msgTypeUrl = String(object.msgTypeUrl)
    } else {
      message.msgTypeUrl = ''
    }
    return message
  },

  toJSON(message: MsgRevoke): unknown {
    const obj: any = {}
    message.granter !== undefined && (obj.granter = message.granter)
    message.grantee !== undefined && (obj.grantee = message.grantee)
    message.msgTypeUrl !== undefined && (obj.msgTypeUrl = message.msgTypeUrl)
    return obj
  },

  fromPartial(object: DeepPartial<MsgRevoke>): MsgRevoke {
    const message = { ...baseMsgRevoke } as MsgRevoke
    if (object.granter !== undefined && object.granter !== null) {
      message.granter = object.granter
    } else {
      message.granter = ''
    }
    if (object.grantee !== undefined && object.grantee !== null) {
      message.grantee = object.grantee
    } else {
      message.grantee = ''
    }
    if (object.msgTypeUrl !== undefined && object.msgTypeUrl !== null) {
      message.msgTypeUrl = object.msgTypeUrl
    } else {
      message.msgTypeUrl = ''
    }
    return message
  },
}

const baseMsgRevokeResponse: object = {}

export const MsgRevokeResponse = {
  encode(_: MsgRevokeResponse, writer: Writer = Writer.create()): Writer {
    return writer
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRevokeResponse {
    const reader = input instanceof Reader ? input : new Reader(input)
    let end = length === undefined ? reader.len : reader.pos + length
    const message = { ...baseMsgRevokeResponse } as MsgRevokeResponse
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

  fromJSON(_: any): MsgRevokeResponse {
    const message = { ...baseMsgRevokeResponse } as MsgRevokeResponse
    return message
  },

  toJSON(_: MsgRevokeResponse): unknown {
    const obj: any = {}
    return obj
  },

  fromPartial(_: DeepPartial<MsgRevokeResponse>): MsgRevokeResponse {
    const message = { ...baseMsgRevokeResponse } as MsgRevokeResponse
    return message
  },
}

/** Msg defines the authz Msg service. */
export interface Msg {
  /**
   * Grant grants the provided authorization to the grantee on the granter's
   * account with the provided expiration time.
   */
  Grant(request: MsgGrant): Promise<MsgGrantResponse>
  /**
   * Exec attempts to execute the provided messages using
   * authorizations granted to the grantee. Each message should have only
   * one signer corresponding to the granter of the authorization.
   */
  Exec(request: MsgExec): Promise<MsgExecResponse>
  /**
   * Revoke revokes any authorization corresponding to the provided method name on the
   * granter's account that has been granted to the grantee.
   */
  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse>
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc
  constructor(rpc: Rpc) {
    this.rpc = rpc
    this.Grant = this.Grant.bind(this)
    this.Exec = this.Exec.bind(this)
    this.Revoke = this.Revoke.bind(this)
  }
  Grant(request: MsgGrant): Promise<MsgGrantResponse> {
    const data = MsgGrant.encode(request).finish()
    const promise = this.rpc.request('cosmos.authz.v1beta1.Msg', 'Grant', data)
    return promise.then((data) => MsgGrantResponse.decode(new Reader(data)))
  }

  Exec(request: MsgExec): Promise<MsgExecResponse> {
    const data = MsgExec.encode(request).finish()
    const promise = this.rpc.request('cosmos.authz.v1beta1.Msg', 'Exec', data)
    return promise.then((data) => MsgExecResponse.decode(new Reader(data)))
  }

  Revoke(request: MsgRevoke): Promise<MsgRevokeResponse> {
    const data = MsgRevoke.encode(request).finish()
    const promise = this.rpc.request('cosmos.authz.v1beta1.Msg', 'Revoke', data)
    return promise.then((data) => MsgRevokeResponse.decode(new Reader(data)))
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
