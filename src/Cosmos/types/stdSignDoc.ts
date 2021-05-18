export default class StdSignDoc {
    private account_number: string;
    private chain_id: string;
    private fee: any;
    private memo: string;
    private msgs: any;
    private sequence: string;

    constructor($accountNumber: string, $sequence: string, $chainId: string, $memo: string, $fee: any, $msgs: any) {
        this.account_number = $accountNumber;
        this.chain_id = $chainId;
        this.fee = $fee;
        this.memo = $memo;
        this.msgs = $msgs;
        this.sequence = $sequence;
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
     * @return {string}
     */
    public get $sequence(): string {
        return this.sequence;
    }

    /**
     * Getter $chain_id
     * @return {string}
     */
    public get $chain_id(): string {
        return this.chain_id;
    }

    /**
     * Getter $memo
     * @return {string}
     */
    public get $memo(): string {
        return this.memo;
    }

    /**
     * Getter $fee
     * @return {any}
     */
    public get $fee(): any {
        return this.fee;
    }

    /**
     * Getter $msgs
     * @return {any}
     */
    public get $msgs(): any {
        return this.msgs;
    }

}