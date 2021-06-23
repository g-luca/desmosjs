import { Network } from "./Cosmos/Network";
import { Transaction } from "./Cosmos/Transaction";
import { Coin } from "./Cosmos/types/Coin";
import { Fee } from "./Cosmos/types/Fee";
import { MsgSend } from "./Cosmos/types/msgs/MsgSend";
import { StdMsg } from "./Cosmos/types/stdMsg";
import { Wallet } from "./Cosmos/Wallet";
import { DesmosCoins } from "./Desmos/types/DesmosCoins";
import { bip32 } from 'bitcoinjs-lib';
import bip39 from "bip39";

// Expose Classes
export {
    Network, Transaction, Coin, Fee, Wallet, DesmosCoins, MsgSend, StdMsg, bip39, bip32
}

export class DesmosJS {
    public static addressPath: string = `m/44'/852'/0'/0/0`;
    public static addressPrefix: string = 'desmos';
    public static chainId: string = 'morpheus-apollo-1';

    public static defaultFee: Fee = new Fee([new Coin("200", DesmosCoins.udaric)], '200000');

    public static usernameRegex: RegExp = /[A-Za-z0-9_]{3,30}$/;
    public static addressRegex: RegExp = /^(desmos)[0-9A-Za-z]{39}$/;
}
