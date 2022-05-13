"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[671],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),h=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=h(r),d=o,m=p["".concat(s,".").concat(d)]||p[d]||c[d]||i;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var h=2;h<i;h++)a[h]=r[h];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9881:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return h},assets:function(){return u},toc:function(){return c},default:function(){return d}});var n=r(7462),o=r(3366),i=(r(7294),r(3905)),a=["components"],l={sidebar_position:1},s="Golioth Thread Demo Overview",h={unversionedId:"intro",id:"intro",title:"Golioth Thread Demo Overview",description:"What is this Demo all about?",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/golioth-openthread-demo-docs/docs/intro",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"What is Golioth?",permalink:"/golioth-openthread-demo-docs/docs/golioth-intro/"}},u={},c=[{value:"What is this Demo all about?",id:"what-is-this-demo-all-about",level:2},{value:"System diagram",id:"system-diagram",level:3},{value:"How can you use this material after training is over?",id:"how-can-you-use-this-material-after-training-is-over",level:2},{value:"What is Zephyr RTOS? Why are we learning it?",id:"what-is-zephyr-rtos-why-are-we-learning-it",level:2}],p={toc:c};function d(e){var t=e.components,l=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"golioth-thread-demo-overview"},"Golioth Thread Demo Overview"),(0,i.kt)("h2",{id:"what-is-this-demo-all-about"},"What is this Demo all about?"),(0,i.kt)("p",null,"This is a place where you're going to learn about Golioth features and how to create Thread networks by playing with hardware. "),(0,i.kt)("h3",{id:"system-diagram"},"System diagram"),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"Thread_System_Diagram",src:r(5081).Z,width:"2157",height:"1213"})),(0,i.kt)("h2",{id:"how-can-you-use-this-material-after-training-is-over"},"How can you use this material after training is over?"),(0,i.kt)("p",null,"Developers who successfully complete this training should feel confident that they will be able to program and deploy a simple Threaad based IoT system to the field in their application."),(0,i.kt)("h2",{id:"what-is-zephyr-rtos-why-are-we-learning-it"},"What is Zephyr RTOS? Why are we learning it?"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://zephyrproject.org/"},"Zephyr")," is an open source Real Time Operating System (RTOS) with wide support among industry leading chip vendors. At Golioth, we build ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/golioth/zephyr-sdk/"},"the Golioth SDK")," on top of the Zephyr SDK in order to take advantage of the wide hardware support. What's amazing about the project is that you can switch between different hardware platforms with a command line switch and a file that tells the application which pins are assigned to which function."),(0,i.kt)("p",null,'Golioth lives at the top of the Zephyr stack, meaning that we take advantage of all of the networking capabilities built into Zephyr. When Golioth needs to talk to the internet, it simply communicates with the networking layer\'s APIs. From this perspective, we can switch between Cellular, WiFi, Thread, and Ethernet implementations easily. In the future, we hope to also tap into more "hub and spoke" model devices such as LoRa and Bluetooth as well. The main thing for you to know, as the Developer, is that you have maximum flexibility when trying out or deploying new systems.'))}d.isMDXComponent=!0},5081:function(e,t,r){t.Z=r.p+"assets/images/Thread_system_Diagram-e4313e767ebde192b320db17c80e1e1d.png"}}]);