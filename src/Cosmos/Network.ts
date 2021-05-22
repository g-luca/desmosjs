import { LcdEndpoints } from "./LcdEndpoints";
import { Transaction } from "./Transaction";
import { CosmosBaseAccount } from "./types/CosmosBaseAccount";

export class Network {
    private _lcdClientEndpoint: string;


    constructor(lcdClientEndpoint: string) {
        this._lcdClientEndpoint = lcdClientEndpoint;
    }


    /**
     * Get basic account info from a given address
     * @param address a valid address
     * @returns CosmosBaseAccount info object
     */
    public async getAccount(address: string): Promise<CosmosBaseAccount | false> {
        return CosmosBaseAccount.deserialize(await this.getLcd(`${LcdEndpoints.auth}${address}`));
    }

    /**
     * Broadcast a valid signed Transaction to the blockchain through the LCD endpoint
     * @param tx Signed Transaction
     * @returns 
     */
    public async broadcast(tx: Transaction): Promise<any> {
        return this.postLcd(`${LcdEndpoints.txs}`, tx);
    }


    private async postLcd(endpoint: LcdEndpoints, body: Transaction, headers: any = {
        'Content-Type': 'application/json'
    }): Promise<any> {
        const url = this.lcdClientEndpoint + endpoint;
        try {
            return await (await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(body, null, 0),
            })).json();
        } catch (e) {
            console.error("Network error");
            return false;
        }
    }

    private async getLcd(endpoint: LcdEndpoints): Promise<string | false> {
        const url = this.lcdClientEndpoint + endpoint;
        try {
            return await (await fetch(url)).json();
        } catch (e) {
            console.error("Network error");
            return false;
        }
    }

    public get lcdClientEndpoint(): string {
        return this._lcdClientEndpoint;
    }
}