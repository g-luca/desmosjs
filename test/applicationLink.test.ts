import { Transaction, Wallet } from "../src/DesmosJS";
import { crypto } from "bitcoinjs-lib";

/**
 * Application Link tests
 */
describe("Wallet test", () => {
    const wallet: Wallet = new Wallet('state name bag two engage tell hamster brand idea casual master shop spoon patient seed napkin height violin buzz exhibit address favorite tomato convince');

    it("ApplicationLink sign", () => {
        const verificationData = Transaction.signApplicationLinkData("username", wallet);
        const hash = crypto.sha256(Buffer.from(JSON.stringify(verificationData))).toString('hex');
        expect(hash).toBe("e3a58678a7312126fa69127c0381b3a953f770781a3065ed1f91a66fa3fd789c");
    });
});
