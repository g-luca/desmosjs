import { validateMnemonic, mnemonicToSeedSync } from "bip39";
import { ECPair, bip32 } from 'bitcoinjs-lib';
import { toWords, encode } from 'bech32';
import { pointFromScalar } from 'tiny-secp256k1';

export class Wallet {
    private _path: string;
    private _bech32Prefix: string;
    private _chainId: string;

    private _mnemonic: string;
    private _address: string = '';

    private _publicKey: Uint8Array = new Uint8Array(0);
    private _publicKeyB64: string = '';

    private _privateKey: Buffer = Buffer.from("");


    /**
     * 
     * @param mnemonic mnemonic phrase
     * @param path wallet string path, default is desmos: "m/44'/852'/0'/0/0"
     * @param bech32Prefix bech string prefix, default is "desmos"
     * @param chainId blockchain id, default is "morpheus-apollo-1"
     */
    constructor(mnemonic: string, path: string = "m/44'/852'/0'/0/0", bech32Prefix: string = "desmos", chainId: string = "morpheus-apollo-1") {
        this._mnemonic = mnemonic;
        this._path = path;
        this._bech32Prefix = bech32Prefix;
        this._chainId = chainId;
        // generate the wallet from the given mnemonic, otherwise throws exception
        if (!this.walletFromMnemonic(mnemonic)) throw new Error('Error generating wallet from given mnemonic');
    }



    /**
     * Generates the address and the keys from a given mnemonic
     * @param mnemonic 
     * @returns true if generated correctly keys and address
     */
    private walletFromMnemonic(mnemonic: string): boolean {
        if (!validateMnemonic(mnemonic)) {
            return false;
        }
        try {
            const seed = mnemonicToSeedSync(mnemonic);
            const child = bip32.fromSeed(seed).derivePath(this.path);

            const words = toWords(child.identifier);
            this._address = encode(this.bech32Prefix, words);

            const ecpair = ECPair.fromPrivateKey(child.privateKey as Buffer, { compressed: false });
            this._privateKey = ecpair.privateKey as Buffer;


            this._publicKey = pointFromScalar(this._privateKey) as Uint8Array;
            this._publicKeyB64 = Buffer.from(this._publicKey).toString('base64');
        } catch (e) {
            return false;
        }
        return true;
    }


    /**
     * Getter path
     * @return {string }
     */
    public get path(): string {
        return this._path;
    }

    /**
     * Getter bech32Prefix
     * @return {string }
     */
    public get bech32Prefix(): string {
        return this._bech32Prefix;
    }

    /**
     * Getter chainId
     * @return {string }
     */
    public get chainId(): string {
        return this._chainId;
    }

    /**
     * Getter mnemonic
     * @return {string}
     */
    public get mnemonic(): string {
        return this._mnemonic;
    }

    /**
     * Getter address
     * @return {string }
     */
    public get address(): string {
        return this._address;
    }


    /**
     * Getter publicKey
     * @return {string }
     */
    public get publicKey(): Uint8Array {
        return this._publicKey;
    }


    /**
     * Getter publicKeyB64
     * @return {string }
     */
    public get publicKeyB64(): string {
        return this._publicKeyB64;
    }


    /**
     * Getter privateKey
     * @return {Buffer }
     */
    public get privateKey(): Buffer {
        return this._privateKey;
    }



}