import { Coin } from "../Cosmos/types/Coin";
import { Fee } from "../Cosmos/types/Fee";
import { DesmosCoins } from "./types/DesmosCoins";




export class Desmos {
    public static addressPath: string = `m/44'/852'/0'/0/0`;
    public static addressPrefix: string = 'desmos';
    public static chainId: string = 'morpheus-apollo-1';

    public static defaultFee: Fee = new Fee([new Coin("200", DesmosCoins.udaric)], '200000');

    public static usernameRegex: RegExp = /[A-Za-z0-9_]{3,30}$/;
    public static addressRegex: RegExp = /^(desmos)[0-9A-Za-z]{39}$/;
}