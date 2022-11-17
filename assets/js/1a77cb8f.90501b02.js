"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[964],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,y=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return n?r.createElement(y,a(a({ref:t},l),{},{components:n})):r.createElement(y,a({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3170:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={},a=void 0,c={unversionedId:"Guides/Deep Dive/Network Speed",id:"Guides/Deep Dive/Network Speed",title:"Network Speed",description:"Newcoin Network Speed",source:"@site/docs/Guides/Deep Dive/Network Speed.md",sourceDirName:"Guides/Deep Dive",slug:"/Guides/Deep Dive/Network Speed",permalink:"/Guides/Deep Dive/Network Speed",draft:!1,editUrl:"https://github.com/newfound8ion/docs/tree/main/docs/Guides/Deep Dive/Network Speed.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UNS Name Extensions",permalink:"/Guides/Deep Dive/UNS Name Extensions"},next:{title:"Contracts",permalink:"/category/contracts"}},p={},s=[{value:"Newcoin Network Speed",id:"newcoin-network-speed",level:2},{value:"TPS",id:"tps",level:3},{value:"Transaction Finality",id:"transaction-finality",level:3}],l={toc:s};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"newcoin-network-speed"},"Newcoin Network Speed"),(0,o.kt)("h3",{id:"tps"},"TPS"),(0,o.kt)("p",null,"The expected TPS on the Mainnet is around 6.000 TPS.",(0,o.kt)("br",{parentName:"p"}),"\n","On the testnet you can expect speeds up to 1.000 TPS."),(0,o.kt)("h3",{id:"transaction-finality"},"Transaction Finality"),(0,o.kt)("p",null,"Mainet transactions should be final in around 1-3 seconds.\nOn the testnet its artificially reduced to 180 seconds."))}u.isMDXComponent=!0}}]);