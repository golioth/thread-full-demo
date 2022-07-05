"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[773],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>p});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),d=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},h=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(o),p=n,g=c["".concat(s,".").concat(p)]||c[p]||u[p]||i;return o?r.createElement(g,a(a({ref:t},h),{},{components:o})):r.createElement(g,a({ref:t},h))}));function p(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}c.displayName="MDXCreateElement"},6825:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=o(7462),n=(o(7294),o(3905));const i={sidebar_position:3},a="Console Signup and Exploration",l={unversionedId:"golioth-intro/signup",id:"golioth-intro/signup",title:"Console Signup and Exploration",description:"This section includes references to the Golioth docs site. We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions.",source:"@site/docs/golioth-intro/signup.md",sourceDirName:"golioth-intro",slug:"/golioth-intro/signup",permalink:"/golioth-openthread-demo-docs/docs/golioth-intro/signup",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Training Requirements",permalink:"/golioth-openthread-demo-docs/docs/golioth-intro/requirements"},next:{title:"Create an RCP USB dongle",permalink:"/golioth-openthread-demo-docs/docs/create-rcp/"}},s={},d=[{value:"Overview",id:"overview",level:2},{value:"Signup and Provision your first device",id:"signup-and-provision-your-first-device",level:2},{value:"Where you should start",id:"where-you-should-start",level:3},{value:"Where you should finish",id:"where-you-should-finish",level:3},{value:"Additional exercise",id:"additional-exercise",level:3},{value:"Exploring features on the sidebar",id:"exploring-features-on-the-sidebar",level:2}],h={toc:d};function u(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,r.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"console-signup-and-exploration"},"Console Signup and Exploration"),(0,n.kt)("p",null,"This section includes references to ",(0,n.kt)("a",{parentName:"p",href:"https://docs.golioth.io/"},"the Golioth docs site"),". We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions."),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Summary:")," Sign up for the Console to get your Golioth account. Go through the wizard steps outlined on the Docs page and on the Console itself in order to provision your first device. The credentials created here allow your device (MagTag for these examples) to authenticate on the Golioth Cloud."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Desired Outcome:")," By the end of this section you should understand how to add a single device to the console and access the credentials for use on your device."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Approximate time:")," 5 minutes")),(0,n.kt)("h2",{id:"signup-and-provision-your-first-device"},"Signup and Provision your first device"),(0,n.kt)("h3",{id:"where-you-should-start"},"Where you should start"),(0,n.kt)("p",null,"Begin by following the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.golioth.io/getting-started"},"Golioth Getting Started Docs")," which will walk you through registering an account and creating a name and credentials for your first device."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://docs.golioth.io/getting-started"},(0,n.kt)("img",{alt:"Golioth Docs Platform Signup",src:o(8616).Z,width:"1902",height:"912"}))))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"A screenshot from the ",(0,n.kt)("a",{parentName:"td",href:"https://docs.golioth.io/getting-started/"},"Golioth Docs")," site.")))),(0,n.kt)("h3",{id:"where-you-should-finish"},"Where you should finish"),(0,n.kt)("p",null,"Once you have a single device provisioned on ",(0,n.kt)("a",{parentName:"p",href:"https://console.golioth.io"},"the Golioth Console")," this part of the guide is complete."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},(0,n.kt)("a",{parentName:"th",href:"https://console.golioth.io"},(0,n.kt)("img",{alt:"Golioth Console One Device Provisioned",src:o(4804).Z,width:"1918",height:"959"}))))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"A screenshot from the ",(0,n.kt)("a",{parentName:"td",href:"https://console.golioth.io"},"Golioth Console"),".")))),(0,n.kt)("h3",{id:"additional-exercise"},"Additional exercise"),(0,n.kt)("p",null,'Create a "fleet" of 5 devices with unique credentials for each.'),(0,n.kt)("h2",{id:"exploring-features-on-the-sidebar"},"Exploring features on the sidebar"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Summary:")," See how the menus are set up and what features exist on the Golioth console."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Desired Outcome:")," Understand how to navigate to the various locations of the Golioth console."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Approximate time:")," 5 minutes (includes Q&A)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Where you should start:")," Start from the ",(0,n.kt)("a",{parentName:"li",href:"https://console.golioth.io"},"Golioth Console")," and try out the various paths on the sidebar."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Additional exercise:"),' Attempt to add a "tag" and a "blueprint" to your Console.')))}u.isMDXComponent=!0},4804:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/golioth_console_one_device_provisioned-abc59c890fbf416573c69350fb8623d1.png"},8616:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/platform_signup-601ea7c42f8089376e084d564e59184c.png"}}]);