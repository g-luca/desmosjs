import Coin from '../Coin';
import IMsg from './IMsg';

export default class MsgSend extends IMsg {
    public static type = "cosmos-sdk/MsgSend";
    private amount: Coin[];
    private from_address: string;
    private to_address: string;


    constructor($fromAddress: string, $toAddress: string, $amount: Coin[]) {
        super();
        if ($amount.length > 0) {
            this.amount = $amount;
            this.from_address = $fromAddress;
            this.to_address = $toAddress;
        } else {
            throw new Error("MsgSend amount cannot be empty")
        }
    }

    /**
     * Getter $from_address
     * @return {string}
     */
    public get $from_address(): string {
        return this.from_address;
    }

    /**
     * Getter $to_address
     * @return {string}
     */
    public get $to_address(): string {
        return this.to_address;
    }

    /**
     * Getter $amount
     * @return {Coin[]}
     */
    public get $amount(): Coin[] {
        return this.amount;
    }
}