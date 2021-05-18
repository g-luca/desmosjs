import Wallet from "../src/Cosmos/Wallet"
import Transaction from "../src/Cosmos/Transaction"
import MsgSend from "../src/Cosmos/types/msgs/MsgSend"
import Fee from "../src/Cosmos/types/Fee";
import Coin from "../src/Cosmos/types/Coin";
import { DesmosCoins } from "../src/Desmos/types/DesmosCoins";
import StdMsg from "../src/Cosmos/types/stdMsg";
import CosmosBaseAccount from "../src/Cosmos/types/CosmosBaseAccount";


/**
 * Wallet tests
 */
describe("Wallet test", () => {
    // test mnemonic
    const mnemonic = 'state name bag two engage tell hamster brand idea casual master shop spoon patient seed napkin height violin buzz exhibit address favorite tomato convince';

    it("Empty or wrong mnemonic exception", () => {
        expect(() => { new Wallet(''); }).toThrowError();
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
        const fee: Fee = new Fee([new Coin("200", DesmosCoins.udaric)], "20000");
        const msgSend = new MsgSend(wallet.address, "desmos1clqj5fd6z69gzs84rgkchk6y8ksahcfc082k08", [amount]);
        const transaction: Transaction = new Transaction(new StdMsg(MsgSend.type, msgSend), memo, fee);
        const signedTx = await transaction.sign(wallet, new CosmosBaseAccount(0, wallet.address, 100, 0));
        const hashedSignature = signedTx.$tx.$signatures?.[0].$signature;
        expect(signedTx.$tx.$memo).toBe(memo);
        expect(hashedSignature).toBe("0RT3Jy93bJjaltSM0S+mNuEM7fQKCA7Z2PHzVc/mspdC2ygxFzFpldCzDHExgO51/VkcLTV7739e5W4RffEJFQ==");

    })


})
