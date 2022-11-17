"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[912],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},7697:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:5},a="Environment variables",l={unversionedId:"Guides/Cloneables/EnvironmentVariables",id:"Guides/Cloneables/EnvironmentVariables",title:"Environment variables",description:"In the wider context of configuration, environment variables provide a simplified way to configure the out-of-the box developer and user experience with just a handful of values.",source:"@site/docs/Guides/Cloneables/EnvironmentVariables.md",sourceDirName:"Guides/Cloneables",slug:"/Guides/Cloneables/EnvironmentVariables",permalink:"/Guides/Cloneables/EnvironmentVariables",draft:!1,editUrl:"https://github.com/newfound8ion/docs/tree/main/docs/Guides/Cloneables/EnvironmentVariables.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"Dao Template",permalink:"/Guides/Cloneables/Dao"},next:{title:"Template configuration",permalink:"/Guides/Cloneables/Configuration"}},s={},c=[],u={toc:c};function p(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"environment-variables"},"Environment variables"),(0,o.kt)("p",null,"In the wider context of ",(0,o.kt)("a",{href:"./Configuration"},"configuration"),", environment variables provide a simplified way to configure the out-of-the box developer and user experience with just a handful of values."),(0,o.kt)("p",null,"The variables are provided in .env file in the root of an iosdk project."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"REACT_APP_IOSDK_APP_NAME - The application name, has no semantic meaning"),(0,o.kt)("li",{parentName:"ul"},"REACT_APP_IOSDK_APP_DOMAIN - The Newcoin username of the app owner. Will be provided by Newsafe when asking for a user data access consent"),(0,o.kt)("li",{parentName:"ul"},"REACT_APP_IOSDK_APP_HOST - List of hosts iosdk will consider as correct"),(0,o.kt)("li",{parentName:"ul"},"REACT_APP_IOSDK_APP_CANONICAL_HOSTS=example.com - Optional. List of canonical hosts. If the list is provided application lands on a host that is not on this list it will redirect to the first one in the list. Note that if the current domain is not in the REACT_APP_IOSDK_APP_HOST list the application will error when interacting with Newsafe components.")),(0,o.kt)("p",null,"More info:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{href:"./Configuration"},"Configuration")," section.")))}p.isMDXComponent=!0}}]);