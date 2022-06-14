"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[771],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||a;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},3979:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return p},assets:function(){return d},toc:function(){return u},default:function(){return h}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],s={sidebar_position:1},l="Create an OpenThread Border Router",p={unversionedId:"create-otbr/create-otbr",id:"create-otbr/create-otbr",title:"Create an OpenThread Border Router",description:"The OpenThread Border Router (OTBR) is a solution to get your packets from your Thread device out to the wider internet. It handles processing all of the incoming 802.15.4 traffic by utilizing the Radio Co-processor (RCP) as a modem and then forwarding packets along. It does the same in the other direction when an inbound packet is being directed towards an IPv6 based Thread device. The OTBR should be completely invisible to Thread Devices, much like a WiFi router is in a home or corporate network.",source:"@site/docs/create-otbr/create-otbr.md",sourceDirName:"create-otbr",slug:"/create-otbr/",permalink:"/golioth-openthread-demo-docs/docs/create-otbr/",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Create an RCP USB dongle",permalink:"/golioth-openthread-demo-docs/docs/create-rcp/"},next:{title:"Create a node on your Thread Network",permalink:"/golioth-openthread-demo-docs/docs/create-thread-node/"}},d={},u=[{value:"Step 1: Gather supplies",id:"step-1-gather-supplies",level:2},{value:"Step 2: Raspberry Pi Initial Setup",id:"step-2-raspberry-pi-initial-setup",level:2},{value:"Step 3: Installing Daemon",id:"step-3-installing-daemon",level:2},{value:"Step 4: Plug in the RCP",id:"step-4-plug-in-the-rcp",level:2},{value:"Step 5: Configure IPv6 to IPv4 translation",id:"step-5-configure-ipv6-to-ipv4-translation",level:2},{value:"Step 6: Testing OTBR",id:"step-6-testing-otbr",level:2},{value:"Step 7: Forming a Thread Network",id:"step-7-forming-a-thread-network",level:2}],c={toc:u};function h(e){var t=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},c,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"create-an-openthread-border-router"},"Create an OpenThread Border Router"),(0,a.kt)("p",null,"The OpenThread Border Router (OTBR) is a solution to get your packets from your Thread device out to the wider internet. It handles processing all of the incoming 802.15.4 traffic by utilizing the Radio Co-processor (RCP) as a modem and then forwarding packets along. It does the same in the other direction when an inbound packet is being directed towards an IPv6 based Thread device. The OTBR should be completely invisible to Thread Devices, much like a WiFi router is in a home or corporate network. "),(0,a.kt)("h2",{id:"step-1-gather-supplies"},"Step 1: Gather supplies"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Raspberry Pi",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You will need a Raspberry Pi to be able to utilize the RCP via a USB port and then process all packets. "),(0,a.kt)("li",{parentName:"ul"},"We have tested this on the Raspberry Pi 3 and 4. Additional steps are required if using the smaller RPi Zero 2W."),(0,a.kt)("li",{parentName:"ul"},"We recommend you also have a monitor, HDMI cable, and USB Mouse/Keyboard available."))),(0,a.kt)("li",{parentName:"ul"},"MicroSD Card ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"8 GB Minimum"))),(0,a.kt)("li",{parentName:"ul"},"RCP ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"create-rcp"},"See the previous page")," for creating an RCP on an nRF52840 Dongle"))),(0,a.kt)("li",{parentName:"ul"},"Network connection",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"We have tested the internet connection for the Raspberry Pi through WiFi and Ethernet, both should be a seamless connection. ")))),(0,a.kt)("h2",{id:"step-2-raspberry-pi-initial-setup"},"Step 2: Raspberry Pi Initial Setup"),(0,a.kt)("p",null,"The directions below were derived from ",(0,a.kt)("a",{parentName:"p",href:"https://openthread.io/guides/border-router/raspberry-pi"},"the Codelabs OpenThread directions for the Raspberry Pi"),". We are replicating them here to reduce the directions down to the absolutely necessary steps to replicate our setup. "),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://www.raspberrypi.com/software/operating-systems/"},'the "Raspberry Pi OS with desktop" downloaded from the official repo page'),", as it allows you to showcase the OTBR web interface directly from your Raspberry Pi. We do this on ",(0,a.kt)("a",{parentName:"p",href:"https://blog.golioth.io/golioth-showcase-at-zds/"},"the Golioth Red Demo at conferences")," with a built-in screen. It is very useful to be able to directly navigate to the web browser on a monitor and commission the network. We also recommend you have a mouse and keyboard attached during install, as this is how the Raspberry Pi was designed to be commissioned. "),(0,a.kt)("p",null,"Burn the downloaded image to an SD card on your computer: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/documentation/installation/installing-images/linux.md"},"Linux")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/documentation/installation/installing-images/mac.md"},"Mac OS")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.raspberrypi.org/documentation/installation/installing-images/windows.md"},"Windows"))),(0,a.kt)("p",null,"We recommend plugging an HDMI cable and USB Keyboard/mouse into your computer during first boot. "),(0,a.kt)("h2",{id:"step-3-installing-daemon"},"Step 3: Installing Daemon"),(0,a.kt)("p",null,"From a terminal on your Raspberry Pi, clone the OTBR repository and run the install script:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"git clone https://github.com/openthread/ot-br-posix\ncd ot-br-posix\n./script/bootstrap\n")),(0,a.kt)("p",null,"This will download dependencies in Linux."),(0,a.kt)("p",null,"Next, choose if you want to install the ",(0,a.kt)("inlineCode",{parentName:"p"},"otbr-agent")," using Ethernet or Wi-Fi (only choose one)."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"INFRA_IF_NAME=eth0 ./script/setup       # Ethernet\nINFRA_IF_NAME=wlan0 ./script/setup      # Wi-Fi\n")),(0,a.kt)("p",null,"The script will install all of the elements to the RPi."),(0,a.kt)("h2",{id:"step-4-plug-in-the-rcp"},"Step 4: Plug in the RCP"),(0,a.kt)("p",null,"Check the settings on the ",(0,a.kt)("inlineCode",{parentName:"p"},"otbr-agent")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"cat /etc/default/otbr-agent\n")),(0,a.kt)("p",null,"We expect your RCP dongle to be at ",(0,a.kt)("inlineCode",{parentName:"p"},"/dev/ttyACM0"),". If the output from the above command doesn't show that address, ",(0,a.kt)("a",{parentName:"p",href:"https://openthread.io/guides/border-router/build#attach-and-configure-rcp-device"},"follow the directions on the OpenThread page")),(0,a.kt)("h2",{id:"step-5-configure-ipv6-to-ipv4-translation"},"Step 5: Configure IPv6 to IPv4 translation"),(0,a.kt)("p",null,"A critical step for most OTBR setups is to translate between IPv6 addresses and IPv4 addresses. Unless your RPi is commissioned with an IPv6 address on your home or work network (not common), you will need to complete this step. "),(0,a.kt)("p",null,"The service that does the NAT64 translation is called ",(0,a.kt)("inlineCode",{parentName:"p"},"tayga"),". Try installing this on your machine, if you already have it installed, running this command will not be a problem:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo apt install tayga\n")),(0,a.kt)("p",null,"Once you have tayga avilable on your computer, you need to ensure it is configured to properly route packets. "),(0,a.kt)("p",null,"Change (or confirm) the following settings in the tayga config file ",(0,a.kt)("inlineCode",{parentName:"p"},"/etc/tayga.conf")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"tun-device nat64\nipv4-addr 192.168.255.1\nipv6-addr fdaa:bb:1::1\nprefix 64:ff9b::/96\ndynamic-pool 192.168.255.0/24\ndata-dir /var/spool/tayga\n")),(0,a.kt)("p",null,"Test that ",(0,a.kt)("inlineCode",{parentName:"p"},"tayga")," is running "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service tayga status\n")),(0,a.kt)("p",null,"You should see a screen that shows the service listed as ",(0,a.kt)("inlineCode",{parentName:"p"},"active"),". Type ",(0,a.kt)("inlineCode",{parentName:"p"},"q")," to escape the status screen at any time. If the service is now showing as activenotnot, start (or restart) the service using the command "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service tayga start\n")),(0,a.kt)("p",null,"Finally, we want to add a route to ",(0,a.kt)("inlineCode",{parentName:"p"},"tayga")," so that it knows how to route packets out to the internet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo ot-ctl route add 64:ff9b::/96 s med\nsudo ot-ctl netdata register\n")),(0,a.kt)("h2",{id:"step-6-testing-otbr"},"Step 6: Testing OTBR"),(0,a.kt)("p",null,"Now that you have your OTBR set up, you'll want to test it."),(0,a.kt)("p",null,"First, see if you can ping a Google DNS server (8.8.8.8) on its IPv6 address:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ping 64:ff9b::808:808\n")),(0,a.kt)("p",null,"You should see responses, even though you're not pinging from the Thread node. This shows that the IPv6 -> IPv4 routing is working."),(0,a.kt)("p",null,"Next, make sure your ",(0,a.kt)("inlineCode",{parentName:"p"},"otbr-agent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"otbr-web")," are up and running. The agent does the handling of incoming traffic on the Thread network on the RCP, as well as moving packets through to the internet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service otbr-agent status\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"otbr-web")," hosts a webpage on port 80, which makes it much simpler to set up and troubleshoot your network."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"sudo service otbr-web status\n")),(0,a.kt)("p",null,"You should see a page at https://localhost if logged in to the Raspberry Pi. If you're accessing the RPi via SSH, you can access the page at the device's IP address, like ",(0,a.kt)("a",{parentName:"p",href:"http://192.168.1.2"},"http://192.168.1.2")," (check your router to see what the address was assigned to the RPi)"),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"OTBR-Web-Status",src:n(3649).Z,width:"1918",height:"1136"})),(0,a.kt)("p",null,'On the page above, I navigated to the "Status" tab on the left side menu, which shows teh following troubleshooting information. You should also be able to access this using various commands options in the ',(0,a.kt)("inlineCode",{parentName:"p"},"ot-ctl")," command."),(0,a.kt)("h2",{id:"step-7-forming-a-thread-network"},"Step 7: Forming a Thread Network"),(0,a.kt)("p",null,'Click on the "Form" tab on the left side of the web interface (3rd option). '),(0,a.kt)("p",null,(0,a.kt)("img",{loading:"lazy",alt:"OTBR-Web-Form",src:n(8858).Z,width:"1900",height:"1008"})),(0,a.kt)("p",null,"The Network Name and Network Key operate much like a WiFi SSID and password. These will be used later, so note them down if you use something different from the default (recommended)."),(0,a.kt)("p",null,'Click the blue "FORM" button and verify that you want to form a network.'))}h.isMDXComponent=!0},8858:function(e,t,n){t.Z=n.p+"assets/images/otbr-web-form-992f4dff326d13383ec1e4bfe142d6df.png"},3649:function(e,t,n){t.Z=n.p+"assets/images/otbr-web-status-dab829c5ff19dcfa252b713f504c6d07.png"}}]);