export default class PubKey {
    private type: string;
    private value: string;


    constructor($value: string, $type = "tendermint/PubKeySecp256k1") {
        this.type = $type;
        this.value = $value;
    }

    /**
     * Getter $type
     * @return {string}
     */
    public get $type(): string {
        return this.type;
    }

    /**
     * Getter $value
     * @return {string}
     */
    public get $value(): string {
        return this.value;
    }

}