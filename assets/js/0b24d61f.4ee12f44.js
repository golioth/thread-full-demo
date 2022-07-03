"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[503],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return c}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(o),c=r,m=u["".concat(s,".").concat(c)]||u[c]||h[c]||i;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var d=2;d<i;d++)a[d]=o[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},4735:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return d},assets:function(){return p},toc:function(){return h},default:function(){return c}});var n=o(7462),r=o(3366),i=(o(7294),o(3905)),a=["components"],l={sidebar_position:1},s="Create a node on your Thread Network",d={unversionedId:"create-thread-node/create-thread-node",id:"create-thread-node/create-thread-node",title:"Create a node on your Thread Network",description:"Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork.",source:"@site/docs/create-thread-node/create-thread-node.md",sourceDirName:"create-thread-node",slug:"/create-thread-node/",permalink:"/golioth-openthread-demo-docs/docs/create-thread-node/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create an OpenThread Border Router",permalink:"/golioth-openthread-demo-docs/docs/create-otbr/"}},p={},h=[{value:"Step 1: Obtain supplies",id:"step-1-obtain-supplies",level:2},{value:"Comparing options",id:"comparing-options",level:3},{value:"Step 2: Get device credentials",id:"step-2-get-device-credentials",level:2},{value:"Step 3: Install dependencies (first time Zephyr users)",id:"step-3-install-dependencies-first-time-zephyr-users",level:2},{value:"Linux System Dependencies",id:"linux-system-dependencies",level:3},{value:"Zephyr Compilers",id:"zephyr-compilers",level:3},{value:"Step 4: Download the repo",id:"step-4-download-the-repo",level:2},{value:"Step 5: Compile and flash the code",id:"step-5-compile-and-flash-the-code",level:2}],u={toc:h};function c(e){var t=e.components,l=(0,r.Z)(e,a);return(0,i.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"create-a-node-on-your-thread-network"},"Create a node on your Thread Network"),(0,i.kt)("p",null,"Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork. "),(0,i.kt)("h2",{id:"step-1-obtain-supplies"},"Step 1: Obtain supplies"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Option 1")," (Preferred)",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lairdconnect.com/iot-devices/iot-sensors/bt510-bluetooth-5-long-range-ip67-multi-sensor"},"BT510 from Laird")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.lairdconnect.com/wireless-modules/programming-kits/usb-swd-programming-kit"},"Laird SWD USB programming kit")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Option 2"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"nRF52840-DK")))),(0,i.kt)("h3",{id:"comparing-options"},"Comparing options"),(0,i.kt)("p",null,"For ",(0,i.kt)("strong",{parentName:"p"},"Option 1"),", we chose a board that is already in a case and could easily be deployed in the field. It is IP67, which means it will stand up to the elements. It also has sensors onboard:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Temperature"),(0,i.kt)("li",{parentName:"ul"},"Accelerometer"),(0,i.kt)("li",{parentName:"ul"},"Magnetic detection")),(0,i.kt)("p",null,"There are also interactive elements on this board, including:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"A push button that can be accessed from outside the package"),(0,i.kt)("li",{parentName:"ul"},"A bi-color user LED")),(0,i.kt)("p",null,"The downside to the BT510 is that the board only has the chip on-board, so it requires an additional programmer in order to interact with the chip. There is a serial port interface built into this programmer as well. "),(0,i.kt)("p",null,"In ",(0,i.kt)("strong",{parentName:"p"},"Option 2"),", the programmer and debugger are built into the nRF52840-DK, so no external one is required (lower cost, lower complexity). However, the nRF52840-DK does not have any sensors onboard, so we will only be able to send data like the core temperature of the silicon chip. Adding external sensors is outside the scope of this tutorial, but is definitely possible later. "),(0,i.kt)("h2",{id:"step-2-get-device-credentials"},"Step 2: Get device credentials"),(0,i.kt)("p",null,"If you have not yet done so, go through the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.golioth.io/getting-started"},"Golioth Getting Started Guide"),", in order to get credentials on the Golioth Cloud. "),(0,i.kt)("p",null,"Grab credentials from ",(0,i.kt)("a",{parentName:"p",href:"https://console.golioth.io/devices"},'the "devices" tab on the Golioth Console'),". The Pre-Shared Key Identification (PSK ID) and Pre-Shared Key (PSK) are similar to a username/password combination. Your node device will need these credentials to validate onto the Golioth network. We will program them in via the serial terminal once the device is programmed."),(0,i.kt)("p",null,(0,i.kt)("img",{loading:"lazy",alt:"openthread-golioth-credentials",src:o(1714).Z,width:"1702",height:"895"})),(0,i.kt)("h2",{id:"step-3-install-dependencies-first-time-zephyr-users"},"Step 3: Install dependencies (first time Zephyr users)"),(0,i.kt)("p",null,"If this is your first time working with Zephyr, you will need to install the Zephyr support tools in order to build the firmware for the node device. If you have used Zephyr before, you almost certainly have all of these dependencies statisfied on your system and you can skip to Step 4. "),(0,i.kt)("h3",{id:"linux-system-dependencies"},"Linux System Dependencies"),(0,i.kt)("p",null,"We are showing how to build in Linux, which is the preferred method. The tools below will ensure you have Python set up properly and are able to access other tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"wget"),". "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install --no-install-recommends git cmake ninja-build gperf \\\n  ccache dfu-util device-tree-compiler wget \\\n  python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file \\\n  make gcc gcc-multilib g++-multilib libsdl2-dev\n")),(0,i.kt)("h3",{id:"zephyr-compilers"},"Zephyr Compilers"),(0,i.kt)("p",null,"If this is the first time you are using Zephyr, you will also need the compiler for building the code (",(0,i.kt)("inlineCode",{parentName:"p"},"gcc"),", for example). This is known as the Zephyr SDK, which is a bit confusing, but is ultimately a bunch of compilers bundled together. Once you have these in your system, you will be able to build firmware for any of the supported Zephyr boards, not just nRF52840."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"cd ~\nwget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.2/zephyr-sdk-0.14.2_linux-x86_64.tar.gz\n")),(0,i.kt)("p",null,"Unpack the archive and run the installer. The SDK will be placed in the ~/zephyr-sdk-0.14.2 directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"tar -xvf zephyr-sdk-0.14.2_linux-x86_64.tar.gz\ncd zephyr-sdk-0.14.2\n./setup.sh\n")),(0,i.kt)("p",null,"Answer y to both of the questions asked during the setup process."),(0,i.kt)("p",null,"Install udev rules, which allow you to flash most Zephyr boards as a regular user:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"sudo cp ~/zephyr-sdk-0.14.2/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d/\nsudo udevadm control --reload\n")),(0,i.kt)("h2",{id:"step-4-download-the-repo"},"Step 4: Download the repo"),(0,i.kt)("p",null,"Now that dependencies are installed, we are ready to compile the node firmware using Zephyr, Golioth, and OpenThread."),(0,i.kt)("p",null,"The repository we're using is called a \"standalone repository\" from the Golioth OpenThread Demo. This not only has the source code that you will be able to change, but it also calls out the dependencies in order to build all of the underlying tooling, such as the OpenThread stack. We will be using Nordic Semiconductor's Nordic Connect SDK (NCS) as part of the setup. This will allow us to build the firmware for the nRF52840, the chip inside the BT510. "),(0,i.kt)("p",null,"First, we'll create a virtual environment for our system"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"python3 -m venv ~/golioth-openthread/.venv\nsource ~/golioth-openthread/.venv/bin/activate\npip install west\n")),(0,i.kt)("p",null,"Then we clone the Golioth OpenThread repository (including ",(0,i.kt)("inlineCode",{parentName:"p"},"app/west.yml")," which lists all the dependencies and which versions to go fetch)"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"west init -m https://github.com/golioth/golioth-openthread-demo.git ~/golioth-openthread\ncd golioth-openthread\n")),(0,i.kt)("p",null,"Finally, we tell ",(0,i.kt)("inlineCode",{parentName:"p"},"west")," (the meta tool build system) to go and fetch all of the dependencies, including specific versions of NCS. After the update, we'll tell the system where to find everything."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"west update\nwest zephyr-export\npip install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt\n")),(0,i.kt)("h2",{id:"step-5-compile-and-flash-the-code"},"Step 5: Compile and flash the code"),(0,i.kt)("p",null,"OK, phew, we made it! (didn't make it? ",(0,i.kt)("a",{parentName:"p",href:"https://forum.golioth.io"},"Let us know on our forum")," for more help)"),(0,i.kt)("p",null,"Now we're finally ready to build the firmware. The nice thing is that the BT510 device that we're targeting already is a supported board in Zephyr. The command to build for that board is simply:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"west build -b bt510 app\nwest flash\n")),(0,i.kt)("p",null,"The flash step requires that you have the SWD USB Programmer pluged into your computer and the board."))}c.isMDXComponent=!0},1714:function(e,t,o){t.Z=o.p+"assets/images/openthread-golioth-credentials-8932f6eb16a82d6d5fab48c865356d74.png"}}]);