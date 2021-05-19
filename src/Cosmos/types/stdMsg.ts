import { IMsg } from "./msgs/IMsg";

export class StdMsg {
    private type = "cosmos-sdk/MsgSend";
    private value: IMsg;


    constructor($type: string, $value: IMsg) {
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
     * @return {IMsg}
     */
    public get $value(): IMsg {
        return this.value;
    }

}