import { crypto } from "bitcoinjs-lib";
import { sign } from "tiny-secp256k1";
import { AuthInfo, SignDoc, TxBody, TxRaw } from "../lib/proto/cosmos/tx/v1beta1/tx";
import { DesmosJS } from "../DesmosJS";
import { Wallet } from "./Wallet";


export class Transaction {


    /**
     * Sign a transaction
     * @param txBody 
     * @param authInfo 
     * @param accountNumber 
     * @param privKey 
     * @returns 
     */
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


    /**
     * Sign the VerificationData for an ApplicationLink request
     * @param username username
     * @param wallet wallet
     * @returns VerificaationData object
     */
    static signApplicationLinkData(username: string, wallet: Wallet) {
        const address = crypto.ripemd160(crypto.sha256(Buffer.from(wallet.publicKey.value))).toString('hex').toLowerCase();
        const pub_key = Buffer.from(wallet.publicKey.value).toString('hex').toLowerCase(); // hex of the public key
        const signature = Buffer.from(sign(crypto.sha256(Buffer.from(username)), wallet.privateKey)).toString('hex').toLowerCase(); // create the hex signaturer from the username

        // wrap the object
        const verificationData = {
            address,
            pub_key,
            signature,
            value: username
        }
        return verificationData;
    }

}