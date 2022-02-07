import { DesmosJS, Transaction, Wallet, CosmosTxBody, CosmosAuthInfo, CosmosCoin, CosmosFee, CosmosMsgSend, CosmosSignerInfo, CosmosSignMode, Any } from "../src/DesmosJS";
/**
 * Wallet tests
 */
describe("Wallet test", () => {
    // test mnemonic
    const mnemonicDesmos = 'state name bag two engage tell hamster brand idea casual master shop spoon patient seed napkin height violin buzz exhibit address favorite tomato convince';
    const mnemonicBitcoin = 'stuff forum host since dog pumpkin taxi finger april approve choice swim'

    it("Empty or wrong mnemonic exception", () => {
        expect(() => { new Wallet(''); }).toThrowError();
    });


    it("Address regex", () => {
        expect(DesmosJS.addressRegex.test("")).toBeFalsy();
        expect(DesmosJS.addressRegex.test("1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08")).toBeFalsy();
        expect(DesmosJS.addressRegex.test("desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08")).toBeTruthy();
    });

    it("Correct Desmos wallet generation", () => {
        const wallet: Wallet = new Wallet(mnemonicDesmos);
        expect(wallet.address).toBe('desmos1t0fpnzl8swhr8c4mqw330y49k6had8an90l9m3'); // check address
        expect(wallet.publicKeyB64).toBe('A+ISBdMtDMfX5wowibrgaM+Z72vmubmMEc2Nx+nnBuc8'); // check public key
        expect(wallet.privateKey.toString('hex')).toBe('0b83fe470c7f6e58d56b22c8dddb8328c98bbc11af7dccd7dc7273a2049c5597'); // check private key
    });

    it("Correct pubKey from privKey generation", () => {
        const wallet: Wallet = new Wallet(mnemonicDesmos);
        expect(Wallet.calculatePubKey(wallet.privateKey)).toStrictEqual(wallet.publicKey.value)
    });

    it("Correct Bitcoin wallet generation", () => {
        const wallet: Wallet = new Wallet(mnemonicBitcoin, "m/44'/0'/0'/0/0/0", "bc1");
        expect(wallet.address).toBe('bc11aeklrsshra5r3tca06llqa49n9z657ht2gtkv2'); // check address
    });

    /**
    * Test the correct transaction signature generation from a wallet
    */
    it("Correct transaction sign MsgSend", async () => {
        const wallet: Wallet = new Wallet(mnemonicDesmos);
        const amount: CosmosCoin[] = [{ denom: "daric", amount: "1" }];
        const msgSend: CosmosMsgSend = {
            fromAddress: wallet.address,
            toAddress: "desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08",
            amount: amount,
        };
        const msgSendAny: Any = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: CosmosMsgSend.encode(msgSend).finish()
        };

        const txBody: CosmosTxBody = { messages: [msgSendAny], memo: "", extensionOptions: [], nonCriticalExtensionOptions: [], timeoutHeight: 0 };

        const signerInfo: CosmosSignerInfo = {
            publicKey: wallet.publicKey,
            modeInfo: { single: { mode: CosmosSignMode.SIGN_MODE_DIRECT } },
            sequence: 100
        };

        const feeValue: CosmosFee = {
            amount: [{ denom: "udaric", amount: "200" }],
            gasLimit: 200000,
            payer: "",
            granter: ""
        };

        const authInfo: CosmosAuthInfo = { signerInfos: [signerInfo], fee: feeValue };

        // -------------------------------- sign --------------------------------
        const signedTxBytes = Transaction.signTxBody(txBody, authInfo, 0, wallet.privateKey);
        const txBytesBase64 = Buffer.from(signedTxBytes as any, 'binary').toString('base64');

        expect(txBytesBase64).toBe(`Co0BCooBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmoKLWRlc21vczF0MGZwbnpsOHN3aHI4YzRtcXczMzB5NDlrNmhhZDhhbjkwbDltMxItZGVzbW9zMWNscWo1ZmQ2ejY5Z3pzODRyZ2tjaGs2eThrc2FoY2ZjMDgyazA4GgoKBWRhcmljEgExEmUKTgpECh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiED4hIF0y0Mx9fnCjCJuuBoz5nva+a5uYwRzY3H6ecG5zwSBAoCCAEYZBITCg0KBnVkYXJpYxIDMjAwEMCaDBpAApDbzA968jTcHv0FcDlX/M3rLQz3Ib7+hu7Hi4GjQRdtoKv4MUYYakNcojwiTAKB6563Sl2AcUJOBVZL2d3i1A==`);
    });

});
