import Coin from "./Coin";

export default class Fee {
    private amount: Coin[];
    private gas: string;


    constructor($amount: Coin[], $gas: string) {
        this.amount = $amount;
        this.gas = $gas;
    }


    /**
     * Getter $amount
     * @return {Coin[]}
     */
    public get $amount(): Coin[] {
        return this.amount;
    }

    /**
     * Getter $gas
     * @return {string}
     */
    public get $gas(): string {
        return this.gas;
    }



}