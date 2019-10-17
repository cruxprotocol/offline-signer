import React, { Component } from "react";
import "./Signer.scss";
import { MDCTextField } from "@material/textfield";
import { MDCSelectHelperText } from "@material/select/helper-text";
import { MDCRipple } from "@material/ripple";
import { TokenSigner } from "jsontokens";
import CopyIcon from "../../copy-icon.png";
var CoinKey = require('coinkey');

class Signer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            privateKey: "",
            message: "",
            signature: "",
            error: "",
            isCopied: false,
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
        console.log("handlePkInput")
        let key = String(event.target.value);
        let validKey = undefined;

        if (key.length === 64){
            validKey = key;
        }
        else if (key.length === 66){
            validKey = key.slice(0,-2);
        }
        else if (key.length === 52){
            let hexToWif = CoinKey.fromWif(key)
            validKey = hexToWif.privateKey.toString('hex')
        } else {
            this.setState({error: 'Invalid Private Key'})
        }

        if(validKey) {
            this.setState({error: ''});
            this.setState({ privateKeyHex: validKey });
        }
    };

    handleMessageInput = event => {
        this.setState({ message: event.target.value });
    };

    handleSign = () => {
        if (this.state.privateKey && this.state.message) {
            this.setState({
                error: ""
            });
            let message = "";
            try {
                message = JSON.parse(this.state.message);
            } catch (err) {
                message = this.state.message;
            }
            let signature = new TokenSigner(
                "ES256K",
                this.state.privateKeyHex
            ).sign(message);
            this.setState({ signature: signature }, () => {
                window.scroll({
                    top: 100,
                    left: 0,
                    behavior: "smooth"
                });
            });
        } else {
            this.setState({
                error: "Private Key and/or Message field(s) cannot be empty"
            });
            setTimeout(() => {
                this.setState({
                    error: ""
                });
            }, 3500);
        }
    };

    handleCopy = str => {
        const el = document.createElement("textarea");
        el.value = str;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
        this.setState({ isCopied: true }, () => {
            setTimeout(() => {
                this.setState({ isCopied: false });
            }, 2000);
        });
    };

    render() {
        return (
            <form className="signer" autoComplete="off">
                {this.state.error && (
                    <div className="signer__error-block">
                        {this.state.error}
                    </div>
                )}
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
                        Both WIF or Hex format Private Keys are supported
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
                        type="button" disabled={this.state.error}
                        onClick={this.handleSign}
                    >
                        Sign Message
                    </button>
                </div>
                {this.state.signature && (
                    <div className="signature">
                        <div>{this.state.signature}</div>
                        <div>
                            {!this.state.isCopied && (
                                <img
                                    src={CopyIcon}
                                    alt="CopyIcon"
                                    width="20"
                                    className="copy-icon"
                                    onClick={() =>
                                        this.handleCopy(this.state.signature)
                                    }
                                />
                            )}
                            {this.state.isCopied && (
                                <span className="copied-message">
                                    Copied{" "}
                                    <span role="img" aria-label="copied">
                                        👍🏾
                                    </span>
                                </span>
                            )}
                        </div>
                    </div>
                )}
            </form>
        );
    }
}

export default Signer;
