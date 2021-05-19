import { PubKey } from "./PubKey";

export class Signature {
    private pub_key: PubKey;
    private signature: string;


    private chain_id: string;
    private account_number: string;
    private sequence: string;

    constructor($signature: string, $pubKey: PubKey, $accountNumber: string, $chainId: string, $sequence: string) {
        this.signature = $signature;
        this.pub_key = $pubKey;
        this.account_number = $accountNumber;
        this.chain_id = $chainId;
        this.sequence = $sequence;
    }

    /**
     * Getter $signature
     * @return {string}
     */
    public get $signature(): string {
        return this.signature;
    }

    /**
     * Getter $pub_key
     * @return {PubKey}
     */
    public get $pub_key(): PubKey {
        return this.pub_key;
    }



    /**
     * Getter $chain_id
     * @return {string}
     */
    public get $chain_id(): string {
        return this.chain_id;
    }


    /**
     * Getter $account_number
     * @return {string}
     */
    public get $account_number(): string {
        return this.account_number;
    }

    /**
     * Getter $sequence
     * @return {string }
     */
    public get $sequence(): string {
        return this.sequence;
    }

}