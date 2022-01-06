"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[80749],{190:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-98143184",path:"/advanced/zigbee/02_improve_network_range_and_stability.html",title:"Improve network range and stability",lang:"en-US",frontmatter:{},excerpt:"",headers:[{level:2,title:"USB based adapter",slug:"usb-based-adapter",children:[{level:3,title:"Connect the adapter using an USB extension cable",slug:"connect-the-adapter-using-an-usb-extension-cable",children:[]},{level:3,title:"Try different orientations of the adapter",slug:"try-different-orientations-of-the-adapter",children:[]}]},{level:2,title:"Reduce Wi-Fi interference by changing the Zigbee channel",slug:"reduce-wi-fi-interference-by-changing-the-zigbee-channel",children:[]},{level:2,title:"Adding more routers to your network",slug:"adding-more-routers-to-your-network",children:[]}],filePathRelative:"advanced/zigbee/02_improve_network_range_and_stability.md",git:{updatedTime:1641483203e3}}},27800:(e,t,n)=>{n.r(t),n.d(t,{default:()=>S});var a=n(66252);const r=(0,a.uE)('<h1 id="improve-network-range-and-stability" tabindex="-1"><a class="header-anchor" href="#improve-network-range-and-stability" aria-hidden="true">#</a> Improve network range and stability</h1><p>In case you are experiencing an unstable or bad network range you can do the following things to improve your network.</p><h2 id="usb-based-adapter" tabindex="-1"><a class="header-anchor" href="#usb-based-adapter" aria-hidden="true">#</a> USB based adapter</h2><h3 id="connect-the-adapter-using-an-usb-extension-cable" tabindex="-1"><a class="header-anchor" href="#connect-the-adapter-using-an-usb-extension-cable" aria-hidden="true">#</a> Connect the adapter using an USB extension cable</h3><p>The range of these adapters can greatly be improved when connecting them with an USB extension cable instead of directly plugging it into the computer (e.g. Raspberry Pi). When plugged directly into the computer, the antenna suffers from interference of radio signals and electrical components of the computer. Also be sure not to position the adapter too close to any other radio transmitting devices (e.g. a Wi-Fi router) or an SSD. A USB extension cable of 50 cm is already enough to reduce the interference.</p>',5),i=(0,a._)("strong",null,"Do not underestimate this!",-1),o=(0,a.Uk)(" Placing your adapter close to an USB port can kill the radio signal entirely as demonstrated in "),d={href:"https://www.unit3compliance.co.uk/2-4ghz-intra-system-or-self-platform-interference-demonstration/",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("this article"),c=(0,a.Uk)("."),h=(0,a.uE)('<h3 id="try-different-orientations-of-the-adapter" tabindex="-1"><a class="header-anchor" href="#try-different-orientations-of-the-adapter" aria-hidden="true">#</a> Try different orientations of the adapter</h3><p>RF connection between the adapter and other devices also depends on the way it is oriented in space. You might be having very poor <code>linkquality</code> reports and intermittent ping failures but once the adapter is rotated a little it all can change greatly without re-locating the coordinator far away. Try to experiment with positioning and orienting the adapter in space while monitoring the <code>linkquality</code> values reported. You might find it useful to buy a small rotating USB connector like this:</p><p><img src="https://i.imgur.com/AI41Oxz.png" alt="rotating USB connector"></p><h2 id="reduce-wi-fi-interference-by-changing-the-zigbee-channel" tabindex="-1"><a class="header-anchor" href="#reduce-wi-fi-interference-by-changing-the-zigbee-channel" aria-hidden="true">#</a> Reduce Wi-Fi interference by changing the Zigbee channel</h2><p><strong>Changing the Zigbee channel requires repairing of all your devices!</strong></p>',5),s=(0,a.Uk)("As Wi-Fi and Zigbee both operate on the same frequency space (2.4 GHz), they can interfere with each other. By using the correct Zigbee channel, interference with Wi-Fi can (partly) be avoided. A good article explaining this is "),u={href:"https://www.metageek.com/training/resources/zigbee-wifi-coexistence.html",target:"_blank",rel:"noopener noreferrer"},g=(0,a.Uk)("Zigbee and Wi-Fi Coexistence"),p=(0,a.Uk)("."),b=(0,a.Uk)("To change the Zigbee channel Zigbee2MQTT uses you have to set the "),f=(0,a._)("code",null,"channel",-1),m=(0,a.Uk)(" in "),y=(0,a._)("code",null,"configuration.yaml",-1),w=(0,a.Uk)("."),k=(0,a._)("h2",{id:"adding-more-routers-to-your-network",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#adding-more-routers-to-your-network","aria-hidden":"true"},"#"),(0,a.Uk)(" Adding more routers to your network")],-1),v=(0,a.Uk)("In a Zigbee network, each router will extend the range of the network ("),_=(0,a.Uk)("read more about this"),U=(0,a.Uk)("). Almost all AC powered devices will serve as a router."),x={},S=(0,n(83744).Z)(x,[["render",function(e,t){const n=(0,a.up)("OutboundLink"),x=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[r,(0,a._)("p",null,[i,o,(0,a._)("a",d,[l,(0,a.Wm)(n)]),c]),h,(0,a._)("p",null,[s,(0,a._)("a",u,[g,(0,a.Wm)(n)]),p]),(0,a._)("p",null,[b,(0,a.Wm)(x,{to:"/guide/configuration/"},{default:(0,a.w5)((()=>[f,m,y])),_:1}),w]),k,(0,a._)("p",null,[v,(0,a.Wm)(x,{to:"/advanced/zigbee/01_zigbee_network.html"},{default:(0,a.w5)((()=>[_])),_:1}),U])],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,a]of t)e[n]=a;return e}}}]);