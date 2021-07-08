import { BroadcastMode } from "../lib/proto/cosmos/tx/v1beta1/service";
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
     * @param signedTxBytes Signed Transaction bytes
     * @param broadCastMode BroadcastMode, default BROADCAST_MODE_SYNC
     * @returns call reponse
     */
    public async broadcast(signedTxBytes: any, broadCastMode: BroadcastMode = BroadcastMode.BROADCAST_MODE_SYNC) {
        const txBytesBase64 = Buffer.from(signedTxBytes, 'binary').toString('base64');

        const url = this.lcdClientEndpoint + '/cosmos/tx/v1beta1/txs';
        try {
            return await (await fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ tx_bytes: txBytesBase64, mode: broadCastMode }),
            })).json();
        } catch (e) {
            console.error("Network error");
            return false;
        }
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