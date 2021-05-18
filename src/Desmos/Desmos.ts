import Coin from "../Cosmos/types/Coin";
import Fee from "../Cosmos/types/Fee";
import { DesmosCoins } from "./types/DesmosCoins";




export default class Desmos {
    public static addressPath = `m/44'/852'/0'/0/0`;
    public static addressPrefix = 'desmos';
    public static lcdClientEndpoint = 'https://lcd.go-find.me/';
    public static chainId = 'morpheus-apollo-1';

    public static defaultFee = new Fee([new Coin("200", DesmosCoins.udaric)], '200000');

    public static usernameRegex = /[A-Za-z0-9_]{3,30}$/;
    public static addressRegex = /^(desmos)[0-9A-Za-z]{39}$/;

    public static isValidAddress(address: string): boolean {
        return this.addressRegex.test(address);
    }
}