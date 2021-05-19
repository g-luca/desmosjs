export class CosmosBaseAccount {
    private _height = 0;
    private _address = '';
    private _accountNumber = 0;
    private _sequence = 0;

    constructor(height: number, address: string, accountNumber = 0, sequence = 0) {
        this._height = height;
        this._address = address;
        this._accountNumber = accountNumber;
        this._sequence = sequence;
    }

    public static deserialize(raw: any): CosmosBaseAccount | false {
        const sequence = raw.result.value.sequence | 0;
        return new CosmosBaseAccount(raw.height, raw.result.value.address, raw.result.value.account_number, sequence);
    }


    /**
     * Getter height
     * @return {number}
     */
    public get height(): number {
        return this._height;
    }

    /**
     * Getter $address
     * @return {string}
     */
    public get address(): string {
        return this._address;
    }

    /**
     * Getter $accountNumber
     * @return {number}
     */
    public get accountNumber(): number {
        return this._accountNumber;
    }


    /**
     * Getter $sequence
     * @return {number}
     */
    public get sequence(): number {
        return this._sequence;
    }


}