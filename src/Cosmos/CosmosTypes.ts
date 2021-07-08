import { TxResponse } from "../lib/proto/cosmos/base/abci/v1beta1/abci";
import { PageRequest, PageResponse } from "../lib/proto/cosmos/base/query/v1beta1/pagination";
import { Coin } from "../lib/proto/cosmos/base/v1beta1/coin";
import { PrivKey, PubKey } from "../lib/proto/cosmos/crypto/ed25519/keys";
import { SignMode } from "../lib/proto/cosmos/tx/signing/v1beta1/signing";
import { AuthInfo, Fee, SignerInfo, TxBody } from "../lib/proto/cosmos/tx/v1beta1/tx";


/**
 * Cosmos Types generated from Cosmos-SDK proto files.
 * Only essential types are included
 */
declare namespace CosmosTypes {
    export {
        AuthInfo, Fee, SignerInfo,
        TxBody, TxResponse,
        PageRequest, PageResponse,
        PrivKey, PubKey,
        Coin, SignMode
    }
}

export default CosmosTypes;
