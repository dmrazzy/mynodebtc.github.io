(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{410:function(e,t,r){"use strict";r.r(t);var o=r(25),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"specter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specter"}},[e._v("#")]),e._v(" Specter")]),e._v(" "),r("p",[e._v("Developed by "),r("a",{attrs:{href:"https://specter.solutions/about/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Crypto Advance GmbH"),r("OutboundLink")],1),e._v(", Specter is a desktop GUI for Bitcoin Core optimized to work with hardware wallets. Funds in hardware wallets are far more secure than using a hot wallet like Bitcoin Core or Electrum. Specter is built on top of Bitcoin Core as opposed to the conventional layer of an Electrum server between a wallet and Bitcoin Core. This removes a dependency and frees memory that would be used for storing the indexed database created by Electrum server.")]),e._v(" "),r("p",[e._v("Along with supporting single signature wallets, Specter also supports multi-signature wallets.")]),e._v(" "),r("p",[e._v("Specter is part of the "),r("em",[e._v("Beta Apps")]),e._v(" on MyNode available only for "),r("em",[e._v("premium")]),e._v(" users.")]),e._v(" "),r("p",[r("img",{attrs:{src:"/images/multisig/specter/wallets.png",alt:"Specter"}})]),e._v(" "),r("h2",{attrs:{id:"features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#features"}},[e._v("#")]),e._v(" Features")]),e._v(" "),r("p",[e._v("Find the full list of features on "),r("a",{attrs:{href:"https://github.com/cryptoadvance/specter-desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub"),r("OutboundLink")],1),e._v(". Key features are:")]),e._v(" "),r("ul",[r("li",[e._v("hardware wallet support")]),e._v(" "),r("li",[r("a",{attrs:{href:"https://en.bitcoin.it/wiki/Multisignature",target:"_blank",rel:"noopener noreferrer"}},[e._v("multisig"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://bitcoinops.org/en/topics/psbt/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Partially Signed Bitcoin Transactions"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Check total bitcoin supply (Run the numbers!)")])]),e._v(" "),r("h2",{attrs:{id:"using-specter"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#using-specter"}},[e._v("#")]),e._v(" Using Specter")]),e._v(" "),r("h3",{attrs:{id:"on-mynode"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#on-mynode"}},[e._v("#")]),e._v(" On MyNode")]),e._v(" "),r("p",[e._v("Specter is already configured with default environment variables and connected to Bitcoin Core, but it is disabled by default. To enable it, open the MyNode homepage and find the tile with the Specter logo under Beta Apps (like the left image below).\n"),r("center",[r("figure",[r("img",{staticStyle:{width:"125px"},attrs:{src:"/images/multisig/specter/disabled.png",alt:""}}),e._v(" "),r("img",{staticStyle:{width:"125px"},attrs:{src:"/images/multisig/specter/enabled.png",alt:""}})])])],1),e._v(" "),r("p",[e._v("Click on the "),r("strong",[e._v("Enable")]),e._v(" button, and wait for the page to refresh.")]),e._v(" "),r("p",[e._v("You should now see a "),r("strong",[e._v("Specter")]),e._v(" button (like shown on the right image above) and a green dot. On clicking this button, a new tab should open on your browser, containing Specter GUI.")]),e._v(" "),r("p",[e._v("Adding "),r("code",[e._v("blockfilterindex=1")]),e._v(" to your "),r("RouterLink",{attrs:{to:"/advanced/customize-config.html"}},[e._v("Bitcoin Config")]),e._v(" file  will occupy few more GB of storage but would improve the rescanning speed.")],1),e._v(" "),r("h3",{attrs:{id:"remote-use"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#remote-use"}},[e._v("#")]),e._v(" Remote Use")]),e._v(" "),r("p",[e._v('Your MyNode installation of Specter includes the additional "HWI Bridge" code to allow you to access your Specter wallet remotely.\nIf you are using the MyNode VPN, make sure that the VPN is running and then you can start MyNode in your browser by entering '),r("code",[e._v("https://mynode.local:25441")]),e._v(". If you are using Tor for remote access, find your "),r("RouterLink",{attrs:{to:"/tor/web-gui.html"}},[e._v("Tor Hidden Service Address")]),e._v(" for Specter.\nStart a Tor browser and enter "),r("code",[e._v("your-tor-hidden-service-address:25441")]),e._v(".")],1),e._v(" "),r("p",[e._v("Specific instructions on how to use Specter can be found "),r("a",{attrs:{href:"https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md#how-do-i-run-the-app",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("If you face any issues, read their "),r("a",{attrs:{href:"https://github.com/cryptoadvance/specter-desktop/blob/master/docs/faq.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("FAQ"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("h2",{attrs:{id:"specs"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#specs"}},[e._v("#")]),e._v(" Specs")]),e._v(" "),r("ul",[r("li",[e._v("Github: "),r("a",{attrs:{href:"https://github.com/cryptoadvance/specter-desktop",target:"_blank",rel:"noopener noreferrer"}},[e._v("cryptoadvance/specter-desktop"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Community: "),r("a",{attrs:{href:"https://t.me/spectersupport",target:"_blank",rel:"noopener noreferrer"}},[e._v("Specter Telegram"),r("OutboundLink")],1)]),e._v(" "),r("li",[e._v("Installed location: A Python3 module with environment settings at "),r("code",[e._v("/opt/mynode/specter")])]),e._v(" "),r("li",[e._v("Ports: "),r("a",{attrs:{href:"https://mynode.local:25441/",target:"_blank",rel:"noopener noreferrer"}},[e._v("https://mynode.local:25441"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=a.exports}}]);