import { BroadcastMode } from "../lib/proto/cosmos/tx/v1beta1/service";
import { Transaction } from "./Transaction";
import { CosmosBaseAccount } from "../DesmosJS";

export class Network {
    private _lcdClientEndpoint: string;


    constructor(lcdClientEndpoint: string) {
        this._lcdClientEndpoint = lcdClientEndpoint;
    }


    /**
     * Get basic account info from a given address
     * @param address a valid address
     * @returns CosmosBaseAccount object or false if fails
     */
    public async getAccount(address: string): Promise<CosmosBaseAccount | false> {
        const endpoint = `/cosmos/auth/v1beta1/accounts/${address}`;
        const response = await this.getLcd(endpoint);
        if (response && response['account']) {

            let accountWrapperRaw;

            // check if there is a Desmos profile
            if (response['account']['@type'] === '/desmos.profiles.v1beta1.Profile') {
                accountWrapperRaw = response['account']['account'];
            } else {
                accountWrapperRaw = response['account'];
            }

            let accountRaw = accountWrapperRaw;

            // check if vesting account
            if (accountRaw['@type'] === '/cosmos.vesting.v1beta1.PeriodicVestingAccount') {
                accountRaw = accountRaw['base_vesting_account']['base_account'];
            }

            // empty pubKey
            let pubKey = {
                typeUrl: '',
                value: new Uint8Array(),
            }
            if (accountRaw['pub_key']) {
                pubKey = {
                    typeUrl: accountRaw['pub_key']['@type'],
                    value: accountRaw['pub_key']['key'],
                }
            }
            return {
                address: accountRaw['address'],
                accountNumber: accountRaw['account_number'] | 0,
                sequence: accountRaw['sequence'] | 0,
                pubKey
            } as CosmosBaseAccount;
        }
        return false;
    }

    /**
     * Broadcast a valid signed Transaction to the blockchain through the LCD endpoint
     * @param signedTxBytes Signed Transaction bytes
     * @param broadCastMode BroadcastMode, default BROADCAST_MODE_SYNC
     * @returns call response, or false if it fails
     */
    public async broadcast(signedTxBytes: any, broadCastMode: BroadcastMode = BroadcastMode.BROADCAST_MODE_SYNC): Promise<any | false> {
        const txBytesBase64 = Buffer.from(signedTxBytes, 'binary').toString('base64');

        const endpoint = '/cosmos/tx/v1beta1/txs';
        const response = await this.postLcd(endpoint, { tx_bytes: txBytesBase64, mode: broadCastMode });
        return (response) ? response : false;
    }


    /**
     * HTTP POST request to a LCD endpoint
     * @param endpoint  lcd endpoint path (ex: /txs)
     * @param body body request object
     * @param headers optional http headers
     * @returns call response, or false if it fails
     */
    private async postLcd(endpoint: string, body: Transaction, headers: any = {
        'Content-Type': 'application/json'
    }): Promise<any | false> {
        const url = this.lcdClientEndpoint + endpoint;
        try {
            return await (await fetch(url, {
                method: 'POST',
                headers,
                body: JSON.stringify(body, null, 0),
            })).json();
        } catch (e) {
            console.warn("Network error");
            return false;
        }
    }

    /**
     * HTTP GET request to a LCD endpoint
     * @param endpoint lcd endpoint path (ex: cosmos/auth/v1beta1/accounts)
     * @returns call response, or false if it fails
     */
    private async getLcd(endpoint: string): Promise<any | false> {
        const url = this.lcdClientEndpoint + endpoint;
        try {
            return await (await fetch(url)).json();
        } catch (e) {
            console.warn("Network error");
            return false;
        }
    }

    public get lcdClientEndpoint(): string {
        return this._lcdClientEndpoint;
    }
}