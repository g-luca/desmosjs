/* tslint:disable:variable-name */

import { MsgSend as _MsgSend, MsgSendResponse as _MsgSendResponse } from '../lib/proto/cosmos/bank/v1beta1/tx';
import { TxResponse as _TxResponse } from "../lib/proto/cosmos/base/abci/v1beta1/abci";
import { PageRequest as _PageRequest, PageResponse as _PageResponse } from "../lib/proto/cosmos/base/query/v1beta1/pagination";
import { Coin as _Coin } from "../lib/proto/cosmos/base/v1beta1/coin";
import { PrivKey as _PrivKey, PubKey as _PubKey } from "../lib/proto/cosmos/crypto/ed25519/keys";
import { SignMode as _SignMode } from "../lib/proto/cosmos/tx/signing/v1beta1/signing";
import { AuthInfo as _AuthInfo, Fee as _Fee, SignerInfo as _SignerInfo, TxBody as _TxBody } from "../lib/proto/cosmos/tx/v1beta1/tx";


/**
 * Cosmos Types generated from Cosmos-SDK proto files.
 * Only essential types are included
 */

namespace CosmosTypes {
    export const MsgSend = _MsgSend;
    export type MsgSend = _MsgSend;

    export const MsgSendResponse = _MsgSendResponse;
    export type MsgSendResponse = _MsgSendResponse;

    export const TxResponse = _TxResponse;
    export type TxResponse = _TxResponse;

    export const PageRequest = _PageRequest;
    export type PageRequest = _PageRequest;

    export const PageResponse = _PageResponse;
    export type PageResponse = _PageResponse;

    export const Coin = _Coin;
    export type Coin = _Coin;

    export const PrivKey = _PrivKey;
    export type PrivKey = _PrivKey;

    export const PubKey = _PubKey;
    export type PubKey = _PubKey;

    export const SignMode = _SignMode;
    export type SignMode = _SignMode;

    export const AuthInfo = _AuthInfo;
    export type AuthInfo = _AuthInfo;

    export const Fee = _Fee;
    export type Fee = _Fee;

    export const SignerInfo = _SignerInfo;
    export type SignerInfo = _SignerInfo;

    export const TxBody = _TxBody;
    export type TxBody = _TxBody;
}

export default CosmosTypes;