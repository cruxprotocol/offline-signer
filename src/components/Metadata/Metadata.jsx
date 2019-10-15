import React from "react";
import styles from "./Metadata.module.scss";
function Metadata() {
    return (
        <div className={styles.metadata}>
            <div className={styles.question}>What is CruxPay Signer ?</div>
            <div className={styles.answer}>
                CruxPay Signer is a simple UI to safely sign JSON Web Tokens
                (JWTs) with a Private Key
            </div>
            <div className={styles.question}>
                What algorithm the Signer uses to sign the data ?
            </div>
            <div className={styles.answer}>
                It uses ES256K signature scheme (which uses the secp256k
                elliptic curve) to sign he data.
            </div>
            <div className={styles.question}>
                How is CruxPay signer secure? Can I run CruxPay signer Offline?
            </div>
            <div className={styles.answer}>
                The signer code is open source and is run on Github itself. Feel
                free to audit the code and provide any feedback in the{" "}
                <a
                    href="https://github.com/cruxprotocol/offline-signer/issues"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Issues section
                </a>
                .
            </div>
            <div className={styles.answer}>
                The signing application is intended to run offline once loaded.
                You can disconnect from the internet after loading the page, and
                terminate the Browser process before switching the internet back
                on.
            </div>
        </div>
    );
}
export default Metadata;
