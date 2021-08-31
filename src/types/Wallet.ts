import { validateMnemonic, mnemonicToSeedSync } from "bip39";
import { ECPair, bip32 } from 'bitcoinjs-lib';
import { toWords, encode } from 'bech32';
import { pointFromScalar, verify, } from 'tiny-secp256k1';
import { Any } from "../lib/proto/google/protobuf/any";
import { DesmosJS } from "../DesmosJS";

export class Wallet {
    private _path: string;
    private _bech32Prefix: string;
    private _chainId: string;

    private _mnemonic: string;
    private _address: string = '';

    private _publicKey: Any = { typeUrl: '/cosmos.crypto.secp256k1.PubKey', value: new Uint8Array() };
    private _publicKeyB64: string = '';

    private _privateKey: Buffer = Buffer.from("");


    /**
     * 
     * @param mnemonic mnemonic phrase
     * @param path wallet string path, default is desmos: "m/44'/852'/0'/0/0"
     * @param bech32Prefix bech string prefix, default is "desmos"
     * @param chainId blockchain id, default otherwise
     */
    constructor(mnemonic: string, path: string = DesmosJS.addressPath, bech32Prefix: string = DesmosJS.addressPrefix, chainId: string = DesmosJS.chainId) {
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
        // minimum mnemonic requirements
        if (mnemonic.split(' ').length < 12) {
            return false;
        }
        try {
            const seed = mnemonicToSeedSync(mnemonic);
            const child = bip32.fromSeed(seed).derivePath(this.path);

            const words = toWords(child.identifier);
            this._address = encode(this.bech32Prefix, words);

            const ecpair = ECPair.fromPrivateKey(child.privateKey as Buffer, { compressed: false });
            this._privateKey = ecpair.privateKey as Buffer;


            this._publicKey.value = pointFromScalar(this._privateKey) as Uint8Array;
            this._publicKeyB64 = Buffer.from(this._publicKey.value).toString('base64');
        } catch (e) {
            return false;
        }
        return true;
    }

    /**
     * Calculate a public Key from a private key
     * @param privateKey private key Buffer
     * @returns returns the public key Buffer
     */
    public static calculatePubKey(privateKey: Buffer): Buffer | null {
        return pointFromScalar(privateKey);
    }

    /**
     * Verify a signature
     * @param hash buffer of the hashed message to verify
     * @param pubKey buffer of the public key
     * @param signature buffer signature to verify
     * @returns the verification result
     */
    public static verifySignature(hash: Buffer, pubKey: Buffer, signature: Buffer): boolean {
        return verify(hash, pubKey, signature);
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
     * @return {Any }
     */
    public get publicKey(): Any {
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