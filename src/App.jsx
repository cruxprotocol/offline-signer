import React from "react";
import styles from "./App.module.scss";
import Signer from "./components/Signer/Signer";
import Metadata from "./components/Metadata/Metadata";
import GithubCorner from "react-github-corner";

function App() {
    return (
        <div className={styles.App}>
            <GithubCorner
                href="https://github.com/cruxprotocol/offline-signer"
                direction="right"
                bannerColor="#5433ff"
                ariaLabel="Crux Protocol Offline Signer"
                target="_blank"
            />
            <div className={styles.AppContainer}>
                <div className={styles.Heading}>Message Signer</div>
                <div className={styles.SubHeading}>
                    Safely sign JSON Web Tokens with your Private Key
                </div>
                <Signer />
                <Metadata />
            </div>
        </div>
    );
}

export default App;
