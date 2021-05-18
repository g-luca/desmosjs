import Fee from "./Fee";
import Signature from "./Signature";
import stdMsg from "./stdMsg";


export default class StdTx {
    private msg: stdMsg[];
    private fee: Fee;
    private signatures?: Signature[];
    private memo: string;


    constructor($msg: stdMsg[], $memo: string, $fee: Fee) {
        this.msg = $msg;
        this.fee = $fee;
        this.memo = $memo;
    }

    /**
     * Getter $msg
     * @return {stdMsg[]}
     */
    public get $msg(): stdMsg[] {
        return this.msg;
    }

    /**
     * Getter $fee
     * @return {Fee}
     */
    public get $fee(): Fee {
        return this.fee;
    }

    /**
     * Getter $memo
     * @return {string}
     */
    public get $memo(): string {
        return this.memo;
    }

    /**
     * Getter $signature
     * @return {Signature[] | undefined}
     */
    public get $signatures(): Signature[] | undefined {
        return this.signatures;
    }

    /**
     * Setter $signature
     * @param {Signature[] | undefined} value
     */
    public set $signatures(value: Signature[] | undefined) {
        this.signatures = value;
    }

}