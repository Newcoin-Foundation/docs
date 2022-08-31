---
sidebar_position: 10
---
The Universal Name System is a decentralized identity provider providing user-friendly names attached to blockchain accounts. Universal names are composed of two parts, the username and the extension. Extension owners can sell any username under their extension, therefore being able to monetise their extension. Extensions will be auctioned as NFTs

# Accounts Actions

## Create New Account
If you never created an account before, we suggest to start with the [Create an Account](../../Guides/Create%20an%20Account) and the [CPU Ram Bandwidth](../../Guides/Deep%20Dive/CPU-Network-RAM-Bandwidth) Guides.  
We recommend to have the active account to be a different one than the owner account for additional security. Learn more in our [Active Owner Accounts Guide](../../Guides/Deep%20Dive/Active%20Owner%20Accounts)  
We recommend to also create the default collection when creating an account, to make sure than NFT's can easily be minted.
```typescript
 let keypair = await nco.createKeyPair();
    console.log("Keys owner generated: \n Prv: %s \n Pub: %s\n", keypair.prv_key, keypair.pub_key);
    nco.createUser({
        newUser: "nakamoto.io", 
        newacc_pub_active_key: keypair.pub_key,
        newacc_pub_owner_key:  keypair.pub_key,
        payer: "satoshi.io", 
        payer_prv_key: "<private key>",
        ram_amt : 8196, 
        cpu_amount : "100.0000 NCO", 
        net_amount : "100.0000 NCO", 
        xfer : true, // stake or transfer CPU/NET to the account
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction ID: " + res.TxID_createAcc)
            console.log("full response: ",res)
        } else {
            console.log("NO RESULT seems error has occured")
        }
    })
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.

</details>

## Buy RAM
RAM is basically your storage space on chain. Read more in our [CPU Ram Bandwidth](../../Guides/Deep%20Dive/CPU-Network-RAM-Bandwidth) Guide.  
```typescript
nco.buyRam({
        user: "nakamoto.io", 
        payer: "satoshi.io", 
        payer_prv_key: "<private key>",
        ram_amt : 8196, 
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("transaction ID: " + res.TxID_createAcc)
            console.log("full response: ",res)
        } else {
            console.log("NO RESULT seems error has occured")
        }
    })
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.

</details>


# Accounts Data

## Get Account Balance of a specific token
TODO  
This call either requires a contract name OR a Token Name [GNCO,NCO]  
We recommend to use the higher level Calls: ```txDAOTokenBalance```, ```txGNCOBalance```, ```txNCOBalance``` described in the [NRC-20 Token](../Market/NRC-20%20Token)  
```typescript
nco.getAccountBalance({
        owner: "satoshi.io", 
        contract: undefined, // if filled out, used to request the token amount.
        token_name: "GNCO", //can be GNCO, NCO, or null
        ram_amt : 8196, 
    }).catch((reason) => {
        console.log("Blockchain Error: " + reason);
    }).then((res: any ) => {
        if(res){
            console.log("Account Balances: " + res.acc_balances )
            console.log("full response: ",res)
        } else {
            console.log("NO RESULT seems error has occured")
        }
    })
```

<details>

<summary>Requires: private key, Errors: auth</summary>

Requires: Authorization from Account 

Errors: 
- **"Error: Invalid checksum ..."**: Authentication Error - probably that payer & Payer private key do not match
- **"Error: transaction declares authority ..."**: Authentication Error - seems the payer and private key do not match.

</details>
