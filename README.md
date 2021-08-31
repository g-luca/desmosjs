# DesmosJS
[![CI](https://github.com/g-luca/desmosjs/actions/workflows/tests.yml/badge.svg?branch=master)](https://github.com/g-luca/desmosjs/actions/workflows/tests.yml)

# 👷 Work in progress

### A JavaScript / Typescript client for Desmos blockchain.

The library aims to provide a full light client for Demsmos applications with the lowest requirements possible.
Is made to work for both Browser and Node.JS/V8 environments.

**Features**

* Wallet and address generation
* Transaction signature and broadcast
* Desmos/Cosmos Protobuf types definition
* Tree shaking
# ✅ Version compatibility

Since the Desmos Blockchain is continuously evolving with mainnet and testnets, choose the right DesmosJS version to match proto definitions!

<br>

| Network           | Desmos  | DesmosJS |
| ----------------- | ------- | -------- |
| mainnet-1         | v1.0.1  | v0.1.16  |
| morpheus-apollo-2 | v0.17.6 | v0.1.14  |

# 🛬 Install
<br>

```
npm install --save desmosjs
```

or for a specific version

```
npm install --save desmosjs@x.y.z
```

# 📚 Examples
<br>

#### Wallet & address generation

``` typescript
import { Wallet } from "desmosjs";

const wallet: Wallet = new Wallet("state name bag two engage ...");
// wallet.address: desmos1t0fpnzl8swhr8c4mqw330y49k6had8an90l9m3
```
<br>

#### Send a MsgSaveProfile

The example is valid for any kind of Msg\*

``` typescript
import {DesmosMsgSaveProfile, CosmosTxBody, CosmosAuthInfo, CosmosSignerInfo, CosmosSignMode, CosmosFee, CosmosBroadcastMode, Network} from "desmosjs";

// create your msg to send
const msgSaveProfile: DesmosMsgSaveProfile = {
    dtag: "yourDtag",
    nickname: "yourNickname",
    bio: "your incredible bio",
    profilePicture: "https://image.com/profile.png",
    coverPicture: "https://image.com/cover.png",
    creator: wallet.address,
};

// wrap the message inside the TxBody
const txBody: CosmosTxBody = {
    memo: "Profile update",
    messages: [
        {
            typeUrl: "/desmos.profiles.v1beta1.MsgSaveProfile",
            value: DesmosMsgSaveProfile.encode(msgSaveProfile).finish(),
        }
    ],
    extensionOptions: [],
    nonCriticalExtensionOptions: [],
    timeoutHeight: 0,
};

// setup the lcd server
const desmosNet = new Network("https://lcd.server/");

// get the account info 
const account = await desmosNet.getAccount(address);

if (account) {

    const signerInfo: CosmosSignerInfo = {
        modeInfo: { single: { mode: CosmosSignMode.SIGN_MODE_DIRECT } },
        sequence: account.sequence
    };

    // set the fees
    const feeValue: CosmosFee = {
        amount: [{ denom: "udaric", amount: "5000" }],
        gasLimit: 200000,
        payer: "",
        granter: ""
    };

    // wrap togheter
    const authInfo: CosmosAuthInfo = { signerInfos: [signerInfo], fee: feeValue };

    // sign the transaction
    const signedTx = Transaction.signTxBody(tx, authInfo, account.accountNumber, Buffer.from(privKey, 'hex'));

    // broadcast!
    await desmosNet.broadcast(signedTx, CosmosBroadcastMode.BROADCAST_MODE_SYNC);
}


```
<br>
<br>
<br>
<br>
More practical examples can be found here:

* [Go-find.me Client](https://github.com/g-luca/go-find)
* [Go-find.me Backend](https://github.com/g-luca/api-go-find)

# 🧑‍💻 Development

👷 Work in progress
