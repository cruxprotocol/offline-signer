import React from "react";
import styles from "./Metadata.module.scss";
function Metadata() {
    return (
        <div className={styles.metadata}>
            <div className={styles.question}>Lorem ipsum dolor sit amet</div>
            <div className={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.question}>Lorem ipsum dolor sit amet</div>
            <div className={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
            <div className={styles.question}>Lorem ipsum dolor sit amet</div>
            <div className={styles.answer}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
        </div>
    );
}
export default Metadata;
