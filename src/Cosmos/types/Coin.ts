export class Coin {
    private amount: string;
    private denom: string;


    constructor($amount: string, $denom: string) {
        this.amount = $amount;
        this.denom = $denom;
    }

    /**
     * Getter $amount
     * @return {string}
     */
    public get $amount(): string {
        return this.amount;
    }

    /**
     * Getter $denom
     * @return {string}
     */
    public get $denom(): string {
        return this.denom;
    }

}