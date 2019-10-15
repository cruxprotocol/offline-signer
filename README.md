# CRUX Offline Signer

A simple UI to safely sign JSON Web Tokens (JWTs) with the ES256K signature scheme (which uses the secp256k elliptic curve).
Its a simple UI on top of [TokenSigner](https://github.com/blockstack/jsontokens-js).

Standard ECDSA Private Keys are supported in Hex or WIF format:
eg.

-   Hex: 4CC58F37FF8CC1D872D43F3AD04F6F149F9C8313DEADE2267F2F40F3143BBE91
-   WIF: 5JQ6cSvZgGyEFKXW1Fy6jsdRAiW5QAhzTvg8CXAAtYj85ZrugHw

The code will auto-detect the format of the private key pasted.

## How To Use

There are two ways to use this package -

##### 1. Hosted Web App

This repository is hosted at https://cruxprotocol.github.io/offline-signer which can be readily used for signing purposes

##### 2. Local/Self Hosted

You can run a local instance of this package in a few short steps:

1. Run `git clone https://github.com/cruxprotocol/offline-signer.git`, then `cd offline-signer`
2. `yarn`
3. `yarn start`

## Security

The application does nothing with the pasted private key except the signing operation. Feel free to audit the code and provide any feedback in the [Issues section](https://github.com/cruxprotocol/offline-signer/issues).

The signing application is intended to run offline once loaded. You can disconnect from the internet after loading the page, and terminate the Browser process before switching the internet back on.
