import React, { Component } from "react";
import "./Signer.scss";
import { MDCTextField } from "@material/textfield";
import { MDCSelectHelperText } from "@material/select/helper-text";
import { MDCRipple } from "@material/ripple";
import { TokenSigner } from "jsontokens";
var CoinKey = require('coinkey');

class Signer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateKey: "",
            message: "",
            signature: "",
            privateKeyHex: ""
        };
    }
    componentDidMount() {
        const inputs = document.querySelectorAll(".mdc-text-field");
        inputs.forEach(input => {
            new MDCTextField(input);
        });

        const helperText = document.querySelectorAll(".mdc-select-helper-text");
        helperText.forEach(text => {
            new MDCSelectHelperText(text);
        });

        const buttons = document.querySelectorAll(".mdc-button");
        buttons.forEach(button => {
            new MDCRipple(button);
        });
    }

    handlePkInput = event => {
        this.setState({ privateKey: event.target.value });

        let key = String(event.target.value);
        if (key.length === 64){
            this.setState({ privateKeyHex: key });
        }
        else{
            let hexToWif = CoinKey.fromWif(key)
            let wifkey = hexToWif.privateKey.toString('hex')
            this.setState({ privateKeyHex: wifkey });
        }
    };

    handleMessageInput = event => {
        this.setState({ message: event.target.value });
    };

    handleSign = () => {
        let signature = new TokenSigner("ES256K", this.state.privateKeyHex).sign(
            this.state.message
        );
        this.setState({ signature: signature }, () => {
            window.scroll({
                top: 100,
                left: 0,
                behavior: "smooth"
            });
        });
    };

    handleCopy = str => {
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };

    render() {
        return (
            <form className="signer" autoComplete="off">
                <div className="signer__input">
                    <div className="mdc-text-field mdc-text-field--outlined">
                        <input
                            className="mdc-text-field__input"
                            id="text-field-hero-input"
                            onChange={this.handlePkInput}
                            value={this.state.privateKey}
                        />
                        <div className="mdc-notched-outline">
                            <div className="mdc-notched-outline__leading"></div>
                            <div className="mdc-notched-outline__notch">
                                <label
                                    htmlFor="text-field-hero-input"
                                    className="mdc-floating-label"
                                >
                                    Your Private Key
                                </label>
                            </div>
                            <div className="mdc-notched-outline__trailing"></div>
                        </div>
                    </div>
                    <div className="mdc-select-helper-text mdc-select-helper-text--persistent">
                        Please sign the message with your private key
                    </div>
                </div>

                <div className="signer__input">
                    <div className="mdc-text-field mdc-text-field--textarea">
                        <textarea
                            id="message"
                            className="mdc-text-field__input"
                            rows="8"
                            cols="40"
                            onChange={this.handleMessageInput}
                            value={this.state.message}
                        ></textarea>
                        <div className="mdc-notched-outline">
                            <div className="mdc-notched-outline__leading"></div>
                            <div className="mdc-notched-outline__notch">
                                <label
                                    htmlFor="message"
                                    className="mdc-floating-label"
                                >
                                    Message To Sign
                                </label>
                            </div>
                            <div className="mdc-notched-outline__trailing"></div>
                        </div>
                    </div>
                </div>

                <div className="signer__footer">
                    <button
                        className="mdc-button mdc-button--raised"
                        type="button"
                        onClick={this.handleSign}
                    >
                        Sign Message
                    </button>
                </div>
                {this.state.signature && (
                    <div className="signature">
                        <div>{this.state.signature}</div>
                        <div>
                            <button
                                className="mdc-button"
                                type="button"
                                onClick={() =>
                                    this.handleCopy(this.state.signature)
                                }
                            >
                                Copy
                            </button>
                        </div>
                    </div>
                )}
            </form>
        );
    }
}

export default Signer;
