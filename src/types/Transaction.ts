import { crypto } from "bitcoinjs-lib";
import { sign } from "tiny-secp256k1";
import { DesmosJS, CosmosAuthInfo, CosmosSignDoc, CosmosTxBody, CosmosTxRaw } from "../DesmosJS";
import { Wallet } from "./Wallet";


export class Transaction {


    /**
     * Sign a TxBody
     * @param txBody TxBody to sign
     * @param authInfo signer AuthInfo
     * @param accountNumber signer account number
     * @param privKey signer private key Buffer
     * @returns sign bytes
     */
    static signTxBody(txBody: CosmosTxBody, authInfo: CosmosAuthInfo, accountNumber: number, privKey: Buffer): Uint8Array {
        const bodyBytes = CosmosTxBody.encode(txBody).finish();
        const authInfoBytes = CosmosAuthInfo.encode(authInfo).finish();
        const signDoc: CosmosSignDoc = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            chainId: DesmosJS.chainId,
            accountNumber: accountNumber
        };
        let signMessage = CosmosSignDoc.encode(signDoc).finish();
        const hash: Buffer = crypto.sha256(Buffer.from(signMessage));
        const signature: Buffer = sign(hash, privKey);

        const txRaw: CosmosTxRaw = {
            bodyBytes: bodyBytes,
            authInfoBytes: authInfoBytes,
            signatures: [signature],
        };
        const txBytes = CosmosTxRaw.encode(txRaw).finish();
        return txBytes;
    }


    /**
     * Sign the VerificationData for an ApplicationLink request
     * @param username username
     * @param pubKey public key Buffer
     * @param privKey private key Buffer
     * @returns VerificationData object
     */
    static signApplicationLinkData(username: string, pubKey: Buffer, privKey: Buffer) {
        const address = crypto.ripemd160(crypto.sha256(Buffer.from(pubKey))).toString('hex').toLowerCase();
        const pub_key = Buffer.from(pubKey).toString('hex').toLowerCase(); // hex of the public key
        const signature = Buffer.from(sign(crypto.sha256(Buffer.from(username)), privKey)).toString('hex').toLowerCase(); // create the hex signaturer from the username

        // wrap the object
        const verificationData = {
            address,
            pub_key,
            signature,
            value: username
        }
        return verificationData;
    }


    /**
     * Generic sign function
     * @param hash sha256 hash bytes to sign
     * @param privateKey private key
     * @returns signed message as Buffer
     */
    static signBytes(hash: Buffer, privateKey: Buffer): Buffer {
        return sign(hash, privateKey);
    }

}