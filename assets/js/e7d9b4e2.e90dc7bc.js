"use strict";(self.webpackChunkdocs_2=self.webpackChunkdocs_2||[]).push([[636],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>f});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(a),f=o,w=d["".concat(s,".").concat(f)]||d[f]||u[f]||r;return a?n.createElement(w,i(i({ref:t},c),{},{components:a})):n.createElement(w,i({ref:t},c))}));function f(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},2059:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var n=a(7462),o=(a(7294),a(3905));const r={sidebar_position:3},i="Newlife Template",l={unversionedId:"Guides/Cloneables/Newlife",id:"Guides/Cloneables/Newlife",title:"Newlife Template",description:"Newlife is a cloneable project that allows you to create a social network on Newcoin. It is a fully-functional social network for networks that allow users to create profiles, post content, support and power-up other creators' content using GNCO, stake into creator projects, and join creator DAOs. It is a great starting point for building your own social or creator network on Newcoin, and comes preloaded with features that make use of all the SDK has to offer.",source:"@site/docs/Guides/Cloneables/Newlife.md",sourceDirName:"Guides/Cloneables",slug:"/Guides/Cloneables/Newlife",permalink:"/Guides/Cloneables/Newlife",draft:!1,editUrl:"https://github.com/newfound8ion/docs/tree/main/docs/Guides/Cloneables/Newlife.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Prerequisites",permalink:"/Guides/Cloneables/Prereq"},next:{title:"Dao Template",permalink:"/Guides/Cloneables/Dao"}},s={},p=[{value:"Steps to create a Newlife Cloneable",id:"steps-to-create-a-newlife-cloneable",level:2},{value:"1. Authenticate",id:"1-authenticate",level:3},{value:"2. Navigate or redirect the developer console, and create a new app",id:"2-navigate-or-redirect-the-developer-console-and-create-a-new-app",level:3},{value:"3. Select settings for your application",id:"3-select-settings-for-your-application",level:3},{value:"4. Initialize your app",id:"4-initialize-your-app",level:3},{value:"For Windows",id:"for-windows",level:5},{value:"For Mac",id:"for-mac",level:5},{value:"5. Start your app and add environment variables",id:"5-start-your-app-and-add-environment-variables",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"newlife-template"},"Newlife Template"),(0,o.kt)("p",null,"Newlife is a cloneable project that allows you to create a social network on Newcoin. It is a fully-functional social network for networks that allow users to create profiles, post content, support and power-up other creators' content using GNCO, stake into creator projects, and join creator DAOs. It is a great starting point for building your own social or creator network on Newcoin, and comes preloaded with features that make use of all the SDK has to offer."),(0,o.kt)("h2",{id:"steps-to-create-a-newlife-cloneable"},"Steps to create a Newlife Cloneable"),(0,o.kt)("h3",{id:"1-authenticate"},"1. Authenticate"),(0,o.kt)("p",null,"You can authenticate multiple ways using the SDK, including using our SDKs, NewSafe, or by signing in to your Newlife account."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Navigate to the developer console."),(0,o.kt)("li",{parentName:"ul"},"Authenticate using Newsafe.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"newsafe",src:a(9582).Z,width:"3006",height:"1624"})),(0,o.kt)("h3",{id:"2-navigate-or-redirect-the-developer-console-and-create-a-new-app"},"2. Navigate or redirect the developer console, and create a new app"),(0,o.kt)("p",null,"Usually you will be redirected to your app page automatically after authenticating. If you are not, you can navigate yourself to the developer console.\nOnce there you will have the option to create your app. "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"newsafe",src:a(5633).Z,width:"2978",height:"992"})),(0,o.kt)("h3",{id:"3-select-settings-for-your-application"},"3. Select settings for your application"),(0,o.kt)("p",null,"You will be prompted to select the settings for your application. Only a few are required for now, the rest can be left blank."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Choose a name"),(0,o.kt)("li",{parentName:"ul"},"Choose a description"),(0,o.kt)("li",{parentName:"ul"},"Choose a URL"),(0,o.kt)("li",{parentName:"ul"},"Choose a tech stack.")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"newsafe",src:a(9840).Z,width:"1600",height:"1738"})),(0,o.kt)("h3",{id:"4-initialize-your-app"},"4. Initialize your app"),(0,o.kt)("p",null,"Almost there! Next, you use the provided scripts to initialize your app."),(0,o.kt)("p",null,"\ud83d\udca1 Either step below will install the Newcoin SDK and all dependencies needed for the Newlife Clone."),(0,o.kt)("h5",{id:"for-windows"},"For Windows"),(0,o.kt)("p",null,"Wait for the app to initialize, and then copy and run the code snippet provided to initialize your project."),(0,o.kt)("h5",{id:"for-mac"},"For Mac"),(0,o.kt)("p",null,"Wait for the app to initialize, and then copy and execute the commands into your terminal."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"newsafe",src:a(9258).Z,width:"2230",height:"2016"})),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-md"},"yarn init / npm init\nyarn add @newstackdev/iosdk @types/react@17.0.44\nrsync -av ./node_modules/@newstackdev/iosdk/templates/plain/ .\nyarn start\n")),(0,o.kt)("h3",{id:"5-start-your-app-and-add-environment-variables"},"5. Start your app and add environment variables"),(0,o.kt)("p",null,"Once your app is initialized, you will need to add environment variables supplied by the developer console."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"newsafe",src:a(3439).Z,width:"1934",height:"996"})),(0,o.kt)("p",null,"You're done! You've initialized a ready-made app from the Newlife template."),(0,o.kt)("p",null,"You can spin up the app to view in the browser with the command ",(0,o.kt)("inlineCode",{parentName:"p"},"yarn start")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"npm start")," "),(0,o.kt)("p",null,"\ud83c\udf89 Happy coding"))}u.isMDXComponent=!0},9840:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/appsettings-ad141b1737ce2bbc46ee16284bc6874a.png"},9258:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/appvars-b03d8a3dcba98d05905035dc51e040b9.png"},5633:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/createapp-1e8e13444a65653d59ac39e76543f288.png"},3439:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/envars-dd4aa69f737127b7921f8e2df3f60bd9.png"},9582:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/newsafe-cd2c6eb9751341bb54686cb49b6ce8f3.png"}}]);