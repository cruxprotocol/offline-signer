(this["webpackJsonpoffline-signer"]=this["webpackJsonpoffline-signer"]||[]).push([[0],{110:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAABmJLR0QA/wD/AP+gvaeTAAACVElEQVR4nO3cTU7VUByG8cePXCbGFTA1DJBd6Ep0PUSN6B6McQGKbkLdgHMS78fwEhyUGENCW9KT8x7b55ecEYXe/h8oSnMPSJIkSdKwE+A18APYAVczWxvgE3BUamClHADvgEvyQ6qxLoDDIpMr4AD4Rn4otdeHEsMr4T35YSTWusTwpjphObedm+t3gfn1uj/imBcjj5uj8/QLAPhJ/jsxsS6AJwXmN9mG/DBqrjXwkUrDvzfimKsCX0O3WOq9vRkGCDNAmAHCDBBmgDADhCUCzO15wu76Wl4BTwvO6a+hFzDWEp4nXAJnwOoOcxlUIsDSnid8pWCEEgGW+Dzh7cjZDJoaYKnPE/bA8dBwavwSflnpPK15QPcspVeNwTyrcI5WPR86oMafo7fAoxHnmaMt8LjvgBoBpn5+6yZd3xLvzU0xQJgBwgwQZoAwA4QZIMwAYQYIM0CYAcIMEGaAMAOEGSDMAGEGCDNAmAHCDBBmgDADhBkgzABhBggzQJgBwgwQZoAwA4QZIMwAYQYIM0CYAcLGBNj2fKyJjU3/Z2MC9O2d2cS+mnN3RLeH5s13go/dV3PqO+1bV+X6Duk2sl5z9301DdCjxnt0fZ9wD/8VFGaAMAOEGSDMAGEGCDNA2MMK59jRv2HTHP4zdpvN0AE1fgJ+VThHqwavvUaALxXO0arP6RcA3Xa+e/LbSDa5bWUtZ+QHUnu9KTK5QlZ02/mmh1JrnVN4/+gSVnTb+c75drSn+85vbvj/OgZOge90jzvTQ5u6ttfXckpD93xJkiRJ7foDm3pRQnxnrm8AAAAASUVORK5CYII="},114:function(e,t,a){e.exports=a(243)},119:function(e,t,a){},128:function(e,t){},129:function(e,t){},14:function(e,t,a){e.exports={metadata:"Metadata_metadata__1YXqX",question:"Metadata_question__183g4",answer:"Metadata_answer__x4O8q"}},147:function(e,t){},149:function(e,t){},21:function(e,t,a){e.exports={AppContainer:"App_AppContainer__1QrdK",Heading:"App_Heading__3jrfb",SubHeading:"App_SubHeading__2GndU",Footer:"App_Footer__eC581"}},240:function(e,t){},243:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(105),r=a.n(i),c=a(21),o=a.n(c),l=a(106),m=a(107),d=a(112),u=a(108),g=a(113),h=(a(119),a(247)),p=a(248),f=a(62),v=a(109),A=a(110),E=a.n(A),S=a(225),N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(d.a)(this,Object(u.a)(t).call(this,e))).handlePkInput=function(e){a.setState({privateKey:e.target.value}),console.log("handlePkInput");var t=String(e.target.value),n=void 0;if(64===t.length)n=t;else if(66===t.length)n=t.slice(0,-2);else if(52===t.length){n=S.fromWif(t).privateKey.toString("hex")}else a.setState({error:"Invalid Private Key"});n&&(a.setState({error:""}),a.setState({privateKeyHex:n}))},a.handleMessageInput=function(e){a.setState({message:e.target.value})},a.handleSign=function(){if(a.state.privateKey&&a.state.message){a.setState({error:""});var e="";try{e=JSON.parse(a.state.message)}catch(n){e=a.state.message}var t=new v.TokenSigner("ES256K",a.state.privateKeyHex).sign(e);a.setState({signature:t},(function(){window.scroll({top:100,left:0,behavior:"smooth"})}))}else a.setState({error:"Private Key and/or Message field(s) cannot be empty"}),setTimeout((function(){a.setState({error:""})}),3500)},a.handleCopy=function(e){var t=document.createElement("textarea");t.value=e,document.body.appendChild(t),t.select(),document.execCommand("copy"),document.body.removeChild(t),a.setState({isCopied:!0},(function(){setTimeout((function(){a.setState({isCopied:!1})}),2e3)}))},a.state={privateKey:"",message:"",signature:"",error:"",isCopied:!1,privateKeyHex:""},a}return Object(g.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){document.querySelectorAll(".mdc-text-field").forEach((function(e){new h.a(e)})),document.querySelectorAll(".mdc-select-helper-text").forEach((function(e){new p.a(e)})),document.querySelectorAll(".mdc-button").forEach((function(e){new f.a(e)}))}},{key:"render",value:function(){var e=this;return s.a.createElement("form",{className:"signer",autoComplete:"off"},this.state.error&&s.a.createElement("div",{className:"signer__error-block"},this.state.error),s.a.createElement("div",{className:"signer__input"},s.a.createElement("div",{className:"mdc-text-field mdc-text-field--outlined"},s.a.createElement("input",{className:"mdc-text-field__input",id:"text-field-hero-input",onChange:this.handlePkInput,value:this.state.privateKey}),s.a.createElement("div",{className:"mdc-notched-outline"},s.a.createElement("div",{className:"mdc-notched-outline__leading"}),s.a.createElement("div",{className:"mdc-notched-outline__notch"},s.a.createElement("label",{htmlFor:"text-field-hero-input",className:"mdc-floating-label"},"Your Private Key")),s.a.createElement("div",{className:"mdc-notched-outline__trailing"}))),s.a.createElement("div",{className:"mdc-select-helper-text mdc-select-helper-text--persistent"},"Both WIF or Hex format Private Keys are supported")),s.a.createElement("div",{className:"signer__input"},s.a.createElement("div",{className:"mdc-text-field mdc-text-field--textarea"},s.a.createElement("textarea",{id:"message",className:"mdc-text-field__input",rows:"8",cols:"40",onChange:this.handleMessageInput,value:this.state.message}),s.a.createElement("div",{className:"mdc-notched-outline"},s.a.createElement("div",{className:"mdc-notched-outline__leading"}),s.a.createElement("div",{className:"mdc-notched-outline__notch"},s.a.createElement("label",{htmlFor:"message",className:"mdc-floating-label"},"Message To Sign")),s.a.createElement("div",{className:"mdc-notched-outline__trailing"})))),s.a.createElement("div",{className:"signer__footer"},s.a.createElement("button",{className:"mdc-button mdc-button--raised",type:"button",disabled:this.state.error,onClick:this.handleSign},"Sign Message")),this.state.signature&&s.a.createElement("div",{className:"signature"},s.a.createElement("div",null,this.state.signature),s.a.createElement("div",null,!this.state.isCopied&&s.a.createElement("img",{src:E.a,alt:"CopyIcon",width:"20",className:"copy-icon",onClick:function(){return e.handleCopy(e.state.signature)}}),this.state.isCopied&&s.a.createElement("span",{className:"copied-message"},"Copied"," ",s.a.createElement("span",{role:"img","aria-label":"copied"},"\ud83d\udc4d\ud83c\udffe")))))}}]),t}(n.Component),b=a(14),_=a.n(b);var C=function(){return s.a.createElement("div",{className:_.a.metadata},s.a.createElement("div",{className:_.a.question},"What is Message Signer ?"),s.a.createElement("div",{className:_.a.answer},"Message Signer is a simple UI to safely sign JSON Web Tokens (JWTs) with a Private Key"),s.a.createElement("div",{className:_.a.question},"What algorithm the Signer uses to sign the data ?"),s.a.createElement("div",{className:_.a.answer},"It uses ES256K signature scheme (which uses the secp256k elliptic curve) to sign he data."),s.a.createElement("div",{className:_.a.question},"How is Message Signer secure? Can I run Message Signer Offline?"),s.a.createElement("div",{className:_.a.answer},"The signer code is open source and is run on Github itself. Feel free to audit the code and provide any feedback in the"," ",s.a.createElement("a",{href:"https://github.com/cruxprotocol/offline-signer/issues",target:"_blank",rel:"noopener noreferrer"},"Issues section"),"."),s.a.createElement("div",{className:_.a.answer},"The signing application is intended to run offline once loaded. You can disconnect from the internet after loading the page, and terminate the Browser process before switching the internet back on."))},w=a(111),x=a.n(w);var y=function(){return s.a.createElement("div",{className:o.a.App},s.a.createElement(x.a,{href:"https://github.com/cruxprotocol/offline-signer",direction:"right",bannerColor:"#5433ff",ariaLabel:"Crux Protocol Offline Signer",target:"_blank"}),s.a.createElement("div",{className:o.a.AppContainer},s.a.createElement("div",{className:o.a.Heading},"Message Signer"),s.a.createElement("div",{className:o.a.SubHeading},"Safely sign JSON Web Tokens with your Private Key"),s.a.createElement(N,null),s.a.createElement(C,null)),s.a.createElement("div",{className:o.a.Footer},"Copyright \xa9 2019 ",s.a.createElement("strong",null,"CruxPay"),"\xae"))};r.a.render(s.a.createElement(y,null),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.e7811e3f.chunk.js.map