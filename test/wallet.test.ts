import { CosmosBaseAccount } from "../src/Cosmos/types/CosmosBaseAccount";
import { StdMsg } from "../src/Cosmos/types/stdMsg";
import { Coin, DesmosCoins, DesmosJS, MsgSend, Transaction, Wallet } from "../src/DesmosJS";


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
     * Test the correct transaction signature generation
     */
    it("Correct transaction sign MsgSend", async () => {
        const wallet: Wallet = new Wallet(mnemonic);
        const memo = "test msgSend";
        const amount = new Coin("1000000", DesmosCoins.udaric);
        const msgSend = new MsgSend(wallet.address, "desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08", [amount]);
        const transaction: Transaction = new Transaction(new StdMsg(MsgSend.type, msgSend), memo, DesmosJS.defaultFee);
        const signedTx = await transaction.sign(wallet, new CosmosBaseAccount(0, wallet.address, 100, 0));
        const hashedSignature = signedTx.$tx.$signatures?.[0].$signature;
        expect(signedTx.$tx.$memo).toBe(memo);
        expect(hashedSignature).toBe("WT14Gt9gAO2AyBcl2ggbqnkTqTB090vg7Zl7OU4F/FgJcAVW8gVTEcKE0AXOU5NXwYV7urHlPabcHjVp7s+U5A==");

    });


});
