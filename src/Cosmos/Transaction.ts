import { BroadcastMode } from "./types/BroadcastMode";
import { Fee } from "./types/Fee";
import { Wallet } from "./Wallet";
import { CosmosBaseAccount } from "./types/CosmosBaseAccount";
import { PubKey } from "./types/PubKey";
import { Signature } from "./types/Signature";
import { StdMsg } from "./types/stdMsg";
import { StdSignDoc } from "./types/stdSignDoc";
import { StdTx } from "./types/stdTx";

import { crypto } from "bitcoinjs-lib";
import { sign, pointFromScalar } from "tiny-secp256k1";


export class Transaction {
    private tx: StdTx;
    private mode: BroadcastMode;

    constructor($msg: StdMsg, $memo: string, $fee: Fee, $mode = BroadcastMode.sync) {
        this.mode = $mode;
        this.tx = new StdTx([$msg], $memo, $fee);
    }


    /**
     * Sign a Transaction from a Wallet
     * @param wallet Wallet
     * @param account Cosmos account related info
     * @returns the signed transaction
     */
    public async sign(wallet: Wallet, account: CosmosBaseAccount): Promise<Transaction> {
        const accountNumber: string = account.accountNumber.toString();
        const chainId: string = wallet.chainId;
        const sequence: string = account.sequence.toString();

        // the json doc needs a specific organization and order, so has to be rebuilded
        const signDoc: StdSignDoc = new StdSignDoc(accountNumber, sequence, chainId, this.$tx.$memo, this.$tx.$fee, this.$tx.$msg);

        const hash: Buffer = crypto.sha256(Buffer.from(JSON.stringify(signDoc))); // hash the doc
        const signedHash: Buffer = sign(hash, wallet.privateKey); // sign the hash with the private key
        const signedHashB64: string = signedHash.toString('base64'); // convert the signed hash to Base64

        const signature = new Signature(signedHashB64, new PubKey(wallet.publicKeyB64), accountNumber, chainId, sequence);
        this.tx.$signatures = [signature];
        return this;
    }


    /**
     * Sign a Transaction from a give private key
     * @param privKey Private Key Buffer 
     * @param account Cosmos account related info
     * @param chainId chain string id
     * @returns the signed transaction
     */
    public async signWithPrivKey(privKey: Buffer, account: CosmosBaseAccount, chainId: string): Promise<Transaction> {
        const accountNumber: string = account.accountNumber.toString();
        const sequence: string = account.sequence.toString();
        const signDoc: StdSignDoc = new StdSignDoc(accountNumber, sequence, chainId, this.$tx.$memo, this.$tx.$fee, this.$tx.$msg);
        const hash: Buffer = crypto.sha256(Buffer.from(JSON.stringify(signDoc))); // hash the doc
        const signedHash: Buffer = sign(hash, privKey); // sign the hash with the private key

        const signedHashB64: string = signedHash.toString('base64'); // convert the signed hash to Base64        
        const signature = new Signature(signedHashB64, new PubKey(Buffer.from(pointFromScalar(privKey) as Buffer).toString()), accountNumber, chainId, sequence);
        this.tx.$signatures = [signature];
        return this;

    }

    /**
     * Getter $mode
     * @return {BroadcastMode}
     */
    public get $mode(): BroadcastMode {
        return this.mode;
    }


    /**
     * Getter $tx
     * @return {StdTx}
     */
    public get $tx(): StdTx {
        return this.tx;
    }
}