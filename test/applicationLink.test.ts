import { Transaction, Wallet } from "../src/DesmosJS";
import { crypto } from "bitcoinjs-lib";

/**
 * Application Link tests
 */
describe("Wallet test", () => {
    const wallet: Wallet = new Wallet('state name bag two engage tell hamster brand idea casual master shop spoon patient seed napkin height violin buzz exhibit address favorite tomato convince');

    it("ApplicationLink sign", () => {
        const verificationData = Transaction.signApplicationLinkData("username", Buffer.from(wallet.publicKey.value), wallet.privateKey);
        const hash = crypto.sha256(Buffer.from(JSON.stringify(verificationData))).toString('hex');
        expect(hash).toBe("5db51c73f8aaabf265442541aaeb789d312b5f2a0dd4bae65d8c503fe5ae82a6");
    });
});
