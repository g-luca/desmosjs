import { Network } from "./Cosmos/Network";
import { Transaction } from "./Cosmos/Transaction";
import { Wallet } from "./Cosmos/Wallet";
import { bip32 } from 'bitcoinjs-lib';
import bip39 from "bip39";
import * as Secp256k1 from "tiny-secp256k1";
import CosmosTypes from "./Cosmos/CosmosTypes";
import DesmosTypes from "./Cosmos/DesmosTypes";

// Expose Classes
export {
    Network, Transaction, Wallet, bip39, bip32, Secp256k1, DesmosTypes, CosmosTypes
}

export class DesmosJS {
    public static addressPath: string = `m/44'/852'/0'/0/0`;
    public static addressPrefix: string = 'desmos';
    public static chainId: string = 'morpheus-apollo-1';


    public static usernameRegex: RegExp = /[A-Za-z0-9_]{3,30}$/;
    public static addressRegex: RegExp = /^(desmos)[0-9A-Za-z]{39}$/;


    /**
     * Ovverride the default Desmos chain configurations with custom ones.
     * @param addressPath path of the Desmos chain. Default: `m/44'/852'/0'/0/0`.
     * @param addressPrefix prefix of the Desmos chain. Default: `desmos`.
     * @param chainId id of the Desmoschain. Default: `morpheus-apollo-1`.
     */
    setDesmosChainConfiguration(addressPath: string = `m/44'/852'/0'/0/0`, addressPrefix: string = 'desmos', chainId: string = 'morpheus-apollo-1') {
        DesmosJS.addressPath = addressPath;
        DesmosJS.addressPrefix = addressPrefix;
        DesmosJS.chainId = chainId;
    }
}

