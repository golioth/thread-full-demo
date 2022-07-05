"use strict";(self.webpackChunkgolioth_thread_demo=self.webpackChunkgolioth_thread_demo||[]).push([[53],{1109:e=>{e.exports=JSON.parse('{"pluginId":"default","version":"current","label":"Next","banner":null,"badge":false,"className":"docs-version-current","isLast":true,"docsSidebars":{"tutorialSidebar":[{"type":"link","label":"Golioth Thread Demo Overview","href":"/golioth-openthread-demo-docs/docs/intro","docId":"intro"},{"type":"category","label":"Golioth Introduction","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Training Requirements","href":"/golioth-openthread-demo-docs/docs/golioth-intro/requirements","docId":"golioth-intro/requirements"},{"type":"link","label":"Console Signup and Exploration","href":"/golioth-openthread-demo-docs/docs/golioth-intro/signup","docId":"golioth-intro/signup"}],"href":"/golioth-openthread-demo-docs/docs/golioth-intro/"},{"type":"link","label":"Create Radio Co-Processor (RCP)","href":"/golioth-openthread-demo-docs/docs/create-rcp/","docId":"create-rcp/create-rcp"},{"type":"link","label":"Create Open Thread Border Router (OTBR)","href":"/golioth-openthread-demo-docs/docs/create-otbr/","docId":"create-otbr/create-otbr"},{"type":"category","label":"Create a Thread node","collapsible":true,"collapsed":true,"items":[{"type":"link","label":"Thread Node Code review","href":"/golioth-openthread-demo-docs/docs/create-thread-node/thread-node-code-overview","docId":"create-thread-node/thread-node-code-overview"}],"href":"/golioth-openthread-demo-docs/docs/create-thread-node/"}]},"docs":{"create-otbr/create-otbr":{"id":"create-otbr/create-otbr","title":"Create an OpenThread Border Router","description":"The OpenThread Border Router (OTBR) is a solution to get your packets from your Thread device out to the wider internet. It handles processing all of the incoming 802.15.4 traffic by utilizing the Radio Co-processor (RCP) as a modem and then forwarding packets along. It does the same in the other direction when an inbound packet is being directed towards an IPv6 based Thread device. The OTBR should be completely invisible to Thread Devices, much like a WiFi router is in a home or corporate network.","sidebar":"tutorialSidebar"},"create-rcp/create-rcp":{"id":"create-rcp/create-rcp","title":"Create an RCP USB dongle","description":"The RCP dongle uses a $10 nRF52 Dongle from Nordic Semiconductor. Programming this image to the nRF52840 on board turns the mainchipset into a passthrough \\"modem\\" for Thread networks, using the 802.15.4 stack from Nordic Semiconductor and the OpenThread project.","sidebar":"tutorialSidebar"},"create-thread-node/create-thread-node":{"id":"create-thread-node/create-thread-node","title":"Create a node on your Thread Network","description":"Now that we have set up an OTBR in the previous step, we want to build a Node that will begin communicating to the wider internet using the OTBR. The node will be built using Zephyr and will have the OpenThread stack compiled into it. Golioth has a starter project on GitHub that will be used throughout this section of the tutorial. This has all of the Golioth required elements to get a Node connected to the Golioth Cloud and transmitting data back and forth. This code also includes a shell to interact directly with your device and program in credentials for both connecting to your OTBR and validating onto the Golioth netwwork.","sidebar":"tutorialSidebar"},"create-thread-node/thread-node-code-overview":{"id":"create-thread-node/thread-node-code-overview","title":"Thread Node Code review","description":"So what is actually happening on the node? You have this code that is running Zephyr, Golioth, OpenThread, but what is it actally doing?","sidebar":"tutorialSidebar"},"golioth-intro/golioth-intro":{"id":"golioth-intro/golioth-intro","title":"What is Golioth?","description":"Golioth is a straightforward commercial IoT platform, built for scale. What that means for you, the Developer, is that we want to help get your deployment prototyped quickly and then use that same tooling to be able to expand your application from 1 device to thousands or millions of devices in the field.","sidebar":"tutorialSidebar"},"golioth-intro/requirements":{"id":"golioth-intro/requirements","title":"Training Requirements","description":"Hardware requirements","sidebar":"tutorialSidebar"},"golioth-intro/signup":{"id":"golioth-intro/signup","title":"Console Signup and Exploration","description":"This section includes references to the Golioth docs site. We are linking you there so you have the most up-to-date directions on getting started with the Golioth Cloud. Once you have completed a section, you will come back to this page for further instructions.","sidebar":"tutorialSidebar"},"intro":{"id":"intro","title":"Golioth Thread Demo Overview","description":"What is this Demo all about?","sidebar":"tutorialSidebar"}}}')}}]);