import { DesmosJS, Transaction, Wallet, CosmosTypes } from "../src/DesmosJS";
import { Any } from "../src/lib/proto/google/protobuf/any";
/**
 * Wallet tests
 */
describe("Wallet test", () => {
    // test mnemonic
    const mnemonic = 'state name bag two engage tell hamster brand idea casual master shop spoon patient seed napkin height violin buzz exhibit address favorite tomato convince';

    it("Empty or wrong mnemonic exception", () => {
        expect(() => { new Wallet(''); }).toThrowError();
    });


    it("Address regex", () => {
        CosmosTypes.SignerInfo
        expect(DesmosJS.addressRegex.test("")).toBeFalsy();
        expect(DesmosJS.addressRegex.test("1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08")).toBeFalsy();
        expect(DesmosJS.addressRegex.test("desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08")).toBeTruthy();
    });

    it("Correct wallet generation", () => {
        const wallet: Wallet = new Wallet(mnemonic);
        expect(wallet.address).toBe('desmos1t0fpnzl8swhr8c4mqw330y49k6had8an90l9m3'); // check address
        expect(wallet.publicKeyB64).toBe('A+ISBdMtDMfX5wowibrgaM+Z72vmubmMEc2Nx+nnBuc8'); // check public key
        expect(wallet.privateKey.toString('hex')).toBe('0b83fe470c7f6e58d56b22c8dddb8328c98bbc11af7dccd7dc7273a2049c5597'); // check private key
    });


    /**
    * Test the correct transaction signature generation from a wallet
    */
    it("Correct transaction sign MsgSend", async () => {
        const wallet: Wallet = new Wallet(mnemonic);
        const amount: CosmosTypes.Coin[] = [{ denom: "daric", amount: "1" }];
        const msgSend: CosmosTypes.MsgSend = {
            fromAddress: wallet.address,
            toAddress: "desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08",
            amount: amount,
        };
        const msgSendAny: Any = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: CosmosTypes.MsgSend.encode(msgSend).finish()
        };

        const txBody: CosmosTypes.TxBody = { messages: [msgSendAny], memo: "", extensionOptions: [], nonCriticalExtensionOptions: [], timeoutHeight: 0 };

        const signerInfo: CosmosTypes.SignerInfo = {
            publicKey: wallet.publicKey,
            modeInfo: { single: { mode: CosmosTypes.SignMode.SIGN_MODE_DIRECT } },
            sequence: 100
        };

        const feeValue: CosmosTypes.Fee = {
            amount: [{ denom: "udaric", amount: "200" }],
            gasLimit: 200000,
            payer: "",
            granter: ""
        };

        const authInfo: CosmosTypes.AuthInfo = { signerInfos: [signerInfo], fee: feeValue };

        // -------------------------------- sign --------------------------------
        const signedTxBytes = Transaction.sign(txBody, authInfo, 0, wallet.privateKey);
        const txBytesBase64 = Buffer.from(signedTxBytes as any, 'binary').toString('base64');

        expect(txBytesBase64).toBe(`Co0BCooBChwvY29zbW9zLmJhbmsudjFiZXRhMS5Nc2dTZW5kEmoKLWRlc21vczF0MGZwbnpsOHN3aHI4YzRtcXczMzB5NDlrNmhhZDhhbjkwbDltMxItZGVzbW9zMWNscWo1ZmQ2ejY5Z3pzODRyZ2tjaGs2eThrc2FoY2ZjMDgyazA4GgoKBWRhcmljEgExEmUKTgpECh8vY29zbW9zLmNyeXB0by5zZWNwMjU2azEuUHViS2V5EiED4hIF0y0Mx9fnCjCJuuBoz5nva+a5uYwRzY3H6ecG5zwSBAoCCAEYZBITCg0KBnVkYXJpYxIDMjAwEMCaDBpAWhhsS7lx1QN+Fcf6g8B5Ud1NffieZVfdcb2xF6DuQ8cPtArX2fQihW4nfivb7Omagsj+/86ydaHzoGjfCrL+xA==`);
    });


    /**
     * Test the correct transaction signature generation from a Private Key
     */
    /* it("Correct transaction sign MsgSend", async () => {
        const wallet: Wallet = new Wallet(mnemonic); // only used to generate the privKey
        const privKey = wallet.privateKey;

        const memo = "test msgSend";
        const amount = new Coin("1000000", DesmosCoins.udaric);
        const msgSend = new MsgSend(wallet.address, "desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08", [amount]);
        const transaction: Transaction = new Transaction(new StdMsg(MsgSend.type, msgSend), memo, DesmosJS.defaultFee);


        const signedTx = await transaction.signWithPrivKey(privKey, new CosmosBaseAccount(0, wallet.address, 100, 0), 'morpheus-apollo-1');
        const hashedSignature = signedTx.$tx.$signatures?.[0].$signature;
        expect(signedTx.$tx.$memo).toBe(memo);
        expect(hashedSignature).toBe("WT14Gt9gAO2AyBcl2ggbqnkTqTB090vg7Zl7OU4F/FgJcAVW8gVTEcKE0AXOU5NXwYV7urHlPabcHjVp7s+U5A==");

    }); */


});
