import { crypto } from "bitcoinjs-lib";
import { sign } from "tiny-secp256k1";
import { AuthInfo, SignDoc, TxBody, TxRaw } from "../lib/proto/cosmos/tx/v1beta1/tx";
import { DesmosJS } from "../DesmosJS";


export class Transaction {


    static sign(txBody: TxBody, authInfo: AuthInfo, accountNumber: number, privKey: Buffer) {
        const bodyBytes = TxBody.encode(txBody).finish();
        const authInfoBytes = AuthInfo.encode(authInfo).finish();
        const signDoc: SignDoc = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            chainId: DesmosJS.chainId,
            accountNumber: accountNumber
        };
        let signMessage = SignDoc.encode(signDoc).finish();
        const hash: Buffer = crypto.sha256(Buffer.from(signMessage));
        const signature: Buffer = sign(hash, privKey);

        const txRaw: TxRaw = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            signatures: [signature],
        };
        const txBytes = TxRaw.encode(txRaw).finish();
        return txBytes;
    }

}