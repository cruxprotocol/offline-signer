## Run

Clone this app and run

> `$ yarn` > `$ yarn start`

### 1. What is CruxPay Signer?

CruxPay Signer is a simple UI to safely sign JSON Web Tokens (JWTs) with a Private Key

### 2. What algorithm the Signer uses to sign the data?

It uses ES256K signature scheme (which uses the secp256k elliptic curve) to sign he data.

### 3. How is CruxPay signer secure? Can I run CruxPay signer Offline?

The signer code is open source and is run on Github itself. Feel free to audit the code and provide any feedback in the [Issues section](https://github.com/cruxprotocol/offline-signer/issues).

**_The signing application is intended to run offline once loaded. You can disconnect from the internet after loading the page, and terminate the Browser process before switching the internet back on._**
