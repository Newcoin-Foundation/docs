"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[10],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=r,v=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?o.createElement(v,i(i({ref:t},d),{},{components:n})):o.createElement(v,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6154:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={sidebar_position:20},i=void 0,c={unversionedId:"Overview/Tokenomics/Basics",id:"Overview/Tokenomics/Basics",title:"Basics",description:"Tokenomics",source:"@site/docs/Overview/Tokenomics/Basics.md",sourceDirName:"Overview/Tokenomics",slug:"/Overview/Tokenomics/Basics",permalink:"/Overview/Tokenomics/Basics",draft:!1,editUrl:"https://github.com/newfound8ion/docs/tree/main/docs/Overview/Tokenomics/Basics.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20},sidebar:"tutorialSidebar",previous:{title:"Tokenomics",permalink:"/category/tokenomics"},next:{title:"Newcoin Guides",permalink:"/category/newcoin-guides"}},s={},l=[{value:"Economic layer",id:"economic-layer",level:2},{value:"Accounts",id:"accounts",level:3},{value:"Collectives creation",id:"collectives-creation",level:3},{value:"Participation: staking pools",id:"participation-staking-pools",level:3},{value:"NFT tokens",id:"nft-tokens",level:3},{value:"Transaction fees",id:"transaction-fees",level:3},{value:"DAOs",id:"daos",level:3},{value:"Newmoon Grants",id:"newmoon-grants",level:3}],d={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Tokenomics",src:n(7369).Z,width:"1920",height:"1080"})),(0,r.kt)("h2",{id:"economic-layer"},"Economic layer"),(0,r.kt)("h3",{id:"accounts"},"Accounts"),(0,r.kt)("p",null,"In order to create an account, the account issuer will have to pay $NCO for the RAM that will be made available to store the data related to the account. The amount will depend on the supply and demand for RAM and is calculated via the Bancor algorithm. The price per account created should average around 5$ and the cost can be supported by the App developer, the account issuer or the account holder."),(0,r.kt)("h3",{id:"collectives-creation"},"Collectives creation"),(0,r.kt)("p",null,'Accounts can decide to create a "collective" account where all the income will be split according to a predetermined percentage, which can be very convenient for collaborative projects involving multiple creators. For example a fashion shooting involving a model, a designer, a stylist, and a photographer.'),(0,r.kt)("h3",{id:"participation-staking-pools"},"Participation: staking pools"),(0,r.kt)("p",null,"The investments are happening via pools. Pools can belong to the creator in the simpler case and be managed by the creator. The best equivalent in the regular economy is private proprietorship. "),(0,r.kt)("h3",{id:"nft-tokens"},"NFT tokens"),(0,r.kt)("p",null,"The minting of NFTs will depend on the amount of RAM required based on the amount of metadata stored on-chain for each NFT and will range between $0.01 and up to $5 for the RAM intensive assets."),(0,r.kt)("h3",{id:"transaction-fees"},"Transaction fees"),(0,r.kt)("p",null,'Each account has a quote of 8 free transactions per day which means absolutely no "gas fees" for transactions. Beyond the free per account quota, packages are provided upon staking.'),(0,r.kt)("h3",{id:"daos"},"DAOs"),(0,r.kt)("p",null,"One of the main advantages of the design-aware blockchain architecture is its ability to leverage its knowledge of app-level activity into the protocol governance.\nEach SubDAO is moderated by its founder and members which provides a more secure, yet highly coordinated micro-entity (DAO) which can operate at human-scale with proper vetting and produce decentralized KYC mechanics.\nMeanwhile the sum of all DAOs gets involved in broader, infrastructure-level, decisions such as voting for DAO workers, block producers, allocating system-wide grants or deploying new contracts.\nThis governance architecture can be therefore viewed as a DAO of DAOs where a cascade of governance decisions lead to a more scalable and decentralized network."),(0,r.kt)("h3",{id:"newmoon-grants"},"Newmoon Grants"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://www.newmoon.ac"},"Newmoon Accelerator")," provides grants for dApps on the Newprotocol, to support new dApps and developers with reduced fees. Apply Today or join their Discord!"))}p.isMDXComponent=!0},7369:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/Newcoin+ecosystem-11-39813f79d6fc3e4d57c2bce8d80332fb.jpg"}}]);