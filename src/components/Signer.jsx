import React, { Component } from "react";
import "./Signer.scss";
import { MDCTextField } from "@material/textfield";
import { MDCSelectHelperText } from "@material/select/helper-text";

class Signer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        const inputs = document.querySelectorAll(".mdc-text-field");

        inputs.forEach(input => {
            new MDCTextField(input);
        });

        const helperText = document.querySelectorAll(".mdc-select-helper-text");
        console.log(helperText);
        helperText.forEach(text => {
            new MDCSelectHelperText(text);
        });
    }

    render() {
        return (
            <form className="signer" autoComplete="off">
                <div className="signer__input">
                    <div className="mdc-text-field mdc-text-field--outlined">
                        <input
                            className="mdc-text-field__input"
                            id="text-field-hero-input"
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
            </form>
        );
    }
}

export default Signer;
