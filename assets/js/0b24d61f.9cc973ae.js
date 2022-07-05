"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[503],{3905:(e,t,o)=>{o.d(t,{Zo:()=>h,kt:()=>u});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var s=n.createContext({}),d=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},h=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),c=d(o),u=r,m=c["".concat(s,".").concat(u)]||c[u]||p[u]||a;return o?n.createElement(m,i(i({ref:t},h),{},{components:o})):n.createElement(m,i({ref:t},h))}));function u(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=o[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}c.displayName="MDXCreateElement"},4735:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=o(7462),r=(o(7294),o(3905));const a={sidebar_position:1},i="Create a node on your Thread Network",l={unversionedId:"create-thread-node/create-thread-node",id:"create-thread-node/create-thread-node",title:"Create a node on your Thread Network",description:"Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork.",source:"@site/docs/create-thread-node/create-thread-node.md",sourceDirName:"create-thread-node",slug:"/create-thread-node/",permalink:"/golioth-openthread-demo-docs/docs/create-thread-node/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create an OpenThread Border Router",permalink:"/golioth-openthread-demo-docs/docs/create-otbr/"},next:{title:"Thread Node Code review",permalink:"/golioth-openthread-demo-docs/docs/create-thread-node/thread-node-code-overview"}},s={},d=[{value:"Step 1: Obtain supplies",id:"step-1-obtain-supplies",level:2},{value:"Comparing options",id:"comparing-options",level:3},{value:"Step 2: Get device credentials",id:"step-2-get-device-credentials",level:2},{value:"Step 3: Install dependencies (first time Zephyr users)",id:"step-3-install-dependencies-first-time-zephyr-users",level:2},{value:"Linux System Dependencies",id:"linux-system-dependencies",level:3},{value:"Zephyr Compilers",id:"zephyr-compilers",level:3},{value:"Step 4: Download the repo",id:"step-4-download-the-repo",level:2},{value:"Step 5: Compile and flash the code",id:"step-5-compile-and-flash-the-code",level:2},{value:"Step 6: Add device to Thread network",id:"step-6-add-device-to-thread-network",level:2},{value:"Step 7: Add Golioth credentials",id:"step-7-add-golioth-credentials",level:2}],h={toc:d};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-a-node-on-your-thread-network"},"Create a node on your Thread Network"),(0,r.kt)("p",null,"Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork. "),(0,r.kt)("h2",{id:"step-1-obtain-supplies"},"Step 1: Obtain supplies"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Option 1")," (Preferred)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.lairdconnect.com/iot-devices/iot-sensors/bt510-bluetooth-5-long-range-ip67-multi-sensor"},"BT510 from Laird")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.lairdconnect.com/wireless-modules/programming-kits/usb-swd-programming-kit"},"Laird SWD USB programming kit")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Option 2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"nRF52840-DK")))),(0,r.kt)("h3",{id:"comparing-options"},"Comparing options"),(0,r.kt)("p",null,"For ",(0,r.kt)("strong",{parentName:"p"},"Option 1"),", we chose a board that is already in a case and could easily be deployed in the field. It is IP67, which means it will stand up to the elements. It also has sensors onboard:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temperature"),(0,r.kt)("li",{parentName:"ul"},"Accelerometer"),(0,r.kt)("li",{parentName:"ul"},"Magnetic detection")),(0,r.kt)("p",null,"There are also interactive elements on this board, including:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A push button that can be accessed from outside the package"),(0,r.kt)("li",{parentName:"ul"},"A bi-color user LED")),(0,r.kt)("p",null,"The downside to the BT510 is that the board only has the chip on-board, so it requires an additional programmer in order to interact with the chip. There is a serial port interface built into this programmer as well. "),(0,r.kt)("p",null,"In ",(0,r.kt)("strong",{parentName:"p"},"Option 2"),", the programmer and debugger are built into the nRF52840-DK, so no external one is required (lower cost, lower complexity). However, the nRF52840-DK does not have any sensors onboard, so we will only be able to send data like the core temperature of the silicon chip. Adding external sensors is outside the scope of this tutorial, but is definitely possible later. "),(0,r.kt)("h2",{id:"step-2-get-device-credentials"},"Step 2: Get device credentials"),(0,r.kt)("p",null,"If you have not yet done so, go through the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.golioth.io/getting-started"},"Golioth Getting Started Guide"),", in order to get credentials on the Golioth Cloud. "),(0,r.kt)("p",null,"Grab credentials from ",(0,r.kt)("a",{parentName:"p",href:"https://console.golioth.io/devices"},'the "devices" tab on the Golioth Console'),". The Pre-Shared Key Identification (PSK ID) and Pre-Shared Key (PSK) are similar to a username/password combination. Your node device will need these credentials to validate onto the Golioth network. We will program them in via the serial terminal once the device is programmed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"openthread-golioth-credentials",src:o(1714).Z,width:"1702",height:"895"})),(0,r.kt)("h2",{id:"step-3-install-dependencies-first-time-zephyr-users"},"Step 3: Install dependencies (first time Zephyr users)"),(0,r.kt)("p",null,"If this is your first time working with Zephyr, you will need to install the Zephyr support tools in order to build the firmware for the node device. If you have used Zephyr before, you almost certainly have all of these dependencies statisfied on your system and you can skip to Step 4. "),(0,r.kt)("h3",{id:"linux-system-dependencies"},"Linux System Dependencies"),(0,r.kt)("p",null,"We are showing how to build in Linux, which is the preferred method. The tools below will ensure you have Python set up properly and are able to access other tools like ",(0,r.kt)("inlineCode",{parentName:"p"},"wget"),". "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo apt update\nsudo apt install --no-install-recommends git cmake ninja-build gperf \\\n  ccache dfu-util device-tree-compiler wget \\\n  python3-dev python3-pip python3-setuptools python3-tk python3-wheel xz-utils file \\\n  make gcc gcc-multilib g++-multilib libsdl2-dev\n")),(0,r.kt)("h3",{id:"zephyr-compilers"},"Zephyr Compilers"),(0,r.kt)("p",null,"If this is the first time you are using Zephyr, you will also need the compiler for building the code (",(0,r.kt)("inlineCode",{parentName:"p"},"gcc"),", for example). This is known as the Zephyr SDK Toolchain, which is a bit confusing, but is ultimately a bunch of compilers bundled together. Once you have these in your system, you will be able to build firmware for any of the supported Zephyr boards, not just nRF52840."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd ~\nwget https://github.com/zephyrproject-rtos/sdk-ng/releases/download/v0.14.2/zephyr-sdk-0.14.2_linux-x86_64.tar.gz\n")),(0,r.kt)("p",null,"Unpack the archive and run the installer. The SDK will be placed in the ~/zephyr-sdk-0.14.2 directory:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"tar -xvf zephyr-sdk-0.14.2_linux-x86_64.tar.gz\ncd zephyr-sdk-0.14.2\n./setup.sh\n")),(0,r.kt)("p",null,"Answer y to both of the questions asked during the setup process."),(0,r.kt)("p",null,"Install udev rules, which allow you to flash most Zephyr boards as a regular user:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"sudo cp ~/zephyr-sdk-0.14.2/sysroots/x86_64-pokysdk-linux/usr/share/openocd/contrib/60-openocd.rules /etc/udev/rules.d/\nsudo udevadm control --reload\n")),(0,r.kt)("h2",{id:"step-4-download-the-repo"},"Step 4: Download the repo"),(0,r.kt)("p",null,"Now that dependencies are installed, we are ready to compile the node firmware using Zephyr, Golioth, and OpenThread."),(0,r.kt)("p",null,"The repository we're using is called a \"standalone repository\" from the Golioth OpenThread Demo. This not only has the source code that you will be able to change, but it also calls out the dependencies in order to build all of the underlying tooling, such as the OpenThread stack. We will be using Nordic Semiconductor's Nordic Connect SDK (NCS) as part of the setup. This will allow us to build the firmware for the nRF52840, the chip inside the BT510. "),(0,r.kt)("p",null,"First, we'll create a virtual environment for our system"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"python3 -m venv ~/golioth-openthread/.venv\nsource ~/golioth-openthread/.venv/bin/activate\npip install west\n")),(0,r.kt)("p",null,"Then we clone the Golioth OpenThread repository (including ",(0,r.kt)("inlineCode",{parentName:"p"},"app/west.yml")," which lists all the dependencies and which versions to go fetch)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"west init -m https://github.com/golioth/golioth-openthread-demo.git ~/golioth-openthread\ncd golioth-openthread\n")),(0,r.kt)("p",null,"Finally, we tell ",(0,r.kt)("inlineCode",{parentName:"p"},"west")," (the meta tool build system) to go and fetch all of the dependencies, including specific versions of NCS. After the update, we'll tell the system where to find everything."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"west update\nwest zephyr-export\npip install -r ~/golioth-ncs-workspace/zephyr/scripts/requirements.txt\n")),(0,r.kt)("h2",{id:"step-5-compile-and-flash-the-code"},"Step 5: Compile and flash the code"),(0,r.kt)("p",null,"OK, phew, we made it! (didn't make it? ",(0,r.kt)("a",{parentName:"p",href:"https://forum.golioth.io"},"Let us know on our forum")," for more help)"),(0,r.kt)("p",null,"Now we're finally ready to build the firmware. The nice thing is that the BT510 device that we're targeting already is a supported board in Zephyr. The command to build for that board is simply:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"west build -b bt510 app\nwest flash\n")),(0,r.kt)("p",null,"The flash step requires that you have the SWD USB Programmer pluged into your computer and the board."),(0,r.kt)("h2",{id:"step-6-add-device-to-thread-network"},"Step 6: Add device to Thread network"),(0,r.kt)("p",null,"The OpenThread shell gives you the ability to configure and query the state of the Thread network you are connecting to. Many of the commands available on the command line (shell) are also available as settings in ",(0,r.kt)("inlineCode",{parentName:"p"},"menuconfig")," and can be set via project settings (",(0,r.kt)("inlineCode",{parentName:"p"},"prj.conf"),") or in board settings (",(0,r.kt)("inlineCode",{parentName:"p"},"<boardname>.conf"),") inside the boards folder. We are going to set these manually because learning is important. You will set the credentials of your device using the same credentials you set on the OTBR. There are default OTBR credentials that we will be using below, but be sure to check the credentials on your particular OTBR."),(0,r.kt)("p",null,"Connect to your device over UART. The Laird USB SWD programmer has a UART built in. On linux machines this may look like ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/ttyUSB0"),". Once you have connected, use the ",(0,r.kt)("inlineCode",{parentName:"p"},"ot")," command to query and set configurations in the OpenThread stack."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uart:~$ ot ifconfig down\nuart:~$ ot dataset networkkey 00112233445566778899aabbccddeeff\nuart:~$ ot dataset networkname OpenThreadDemo\nuart:~$ ot dataset commit active\nuart:~$ ot ifconfig up\nuart:~$ ot thread start\n")),(0,r.kt)("p",null,"This should give us the credentials to get the BT510 onto the local Thread network created by the OTBR. Run the following command to check status."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uart:~$ ot state\n")),(0,r.kt)("p",null,"You should see it report as ",(0,r.kt)("inlineCode",{parentName:"p"},"child")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"router"),'. You can also check the "Topology" tab on the OTBR to see if a device has joined the network (should be two dots connected by a line instead of one dot by itself)'),(0,r.kt)("p",null,"After the node has successfully connected to the Thread network, it has access to the internet! You should be able to ping Google DNS servers from the node, just like you did from the OTBR:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uart:~$ ot ping 64:ff9b::808:808    \n")),(0,r.kt)("h2",{id:"step-7-add-golioth-credentials"},"Step 7: Add Golioth credentials"),(0,r.kt)("p",null,"Now that we can talk to the internet, let's get this thing hooked to Golioth. Doing so will give us a convenient way to collect data, send commands back to devices, and update firmware. We will be using the ",(0,r.kt)("a",{parentName:"p",href:"https://blog.golioth.io/new-feature-updating-zephyr-settings-from-the-device-shell-and-more/"},"Settings Shell"),", which is already compiled into the code. "),(0,r.kt)("p",null,"Once again we will connect to the UART on the device (you may still be connected) and assign your credentials gained in Step 2:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"uart:~$ settings set golioth/psk-id <my-psk-id@my-project>\nuart:~$ settings set golioth/psk <my-psk>\nuart:~$ kernel reboot cold\n")),(0,r.kt)("p",null,"The final command is the kernel shell, where we can send a reset command over the UART. Once a reboot happens, we should see that the device once again connects to the Thread network, and can now reach out to Golioth servers and start sending data. The settings are saved into a special area of flash that will persist between reboots."))}p.isMDXComponent=!0},1714:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/openthread-golioth-credentials-8932f6eb16a82d6d5fab48c865356d74.png"}}]);