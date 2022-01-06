"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[1334],{25261:(e,i,t)=>{t.r(i),t.d(i,{data:()=>a});const a={key:"v-8313a582",path:"/devices/ZSS-ZK-THL.html",title:"Moes ZSS-ZK-THL control via MQTT",lang:"en-US",frontmatter:{title:"Moes ZSS-ZK-THL control via MQTT",description:"Integrate your Moes ZSS-ZK-THL via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-05-30T19:17:03.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Compatibility issue",slug:"compatibility-issue",children:[]},{level:3,title:"Usage limitation",slug:"usage-limitation",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Illuminance (numeric)",slug:"illuminance-numeric",children:[]},{level:3,title:"Illuminance_lux (numeric)",slug:"illuminance-lux-numeric",children:[]},{level:3,title:"Humidity (numeric)",slug:"humidity-numeric",children:[]},{level:3,title:"Temperature (numeric)",slug:"temperature-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ZSS-ZK-THL.md",git:{updatedTime:1641483203e3}}},93417:(e,i,t)=>{t.r(i),t.d(i,{default:()=>f});var a=t(66252);const n=(0,a.uE)('<h1 id="moes-zss-zk-thl" tabindex="-1"><a class="header-anchor" href="#moes-zss-zk-thl" aria-hidden="true">#</a> Moes ZSS-ZK-THL</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ZSS-ZK-THL</td></tr><tr><td>Vendor</td><td>Moes</td></tr><tr><td>Description</td><td>Smart temperature and humidity meter with display</td></tr><tr><td>Exposes</td><td>battery, illuminance, illuminance_lux, humidity, temperature, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ZSS-ZK-THL.jpg" alt="Moes ZSS-ZK-THL"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the Orange button on the side until 3 dots appear on the screen.</p><h3 id="compatibility-issue" tabindex="-1"><a class="header-anchor" href="#compatibility-issue" aria-hidden="true">#</a> Compatibility issue</h3>',6),r=(0,a.Uk)("This device freeze after a while when not connected with a Tuya Hub. See "),o={href:"https://github.com/Koenkk/zigbee2mqtt/issues/7535",target:"_blank",rel:"noopener noreferrer"},l=(0,a.Uk)("#7535"),d=(0,a.Uk)(". Some users report that this device work fine when connected to any hub through a relay device."),u=(0,a._)("h3",{id:"usage-limitation",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#usage-limitation","aria-hidden":"true"},"#"),(0,a.Uk)(" Usage limitation")],-1),c=(0,a._)("p",null,"The device reports illuminance variations instantly. Therefore temperature is reported each hour making this device useless for building a thermostat.",-1),s=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),h=(0,a.Uk)("How to use device type specific configuration"),m=(0,a.uE)('<ul><li><p><code>illuminance_precision</code>: Number of digits after decimal point for illuminance, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_calibration</code>: Calibrates the illuminance value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>illuminance_lux_precision</code>: Number of digits after decimal point for illuminance_lux, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>illuminance_lux_calibration</code>: Calibrates the illuminance_lux value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>humidity_precision</code>: Number of digits after decimal point for humidity, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>humidity_calibration</code>: Calibrates the humidity value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>temperature_precision</code>: Number of digits after decimal point for temperature, takes into effect on next report of device. The value must be a number with a minimum value of <code>0</code> and with a with a maximum value of <code>3</code></p></li><li><p><code>temperature_calibration</code>: Calibrates the temperature value (absolute offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="illuminance-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-numeric" aria-hidden="true">#</a> Illuminance (numeric)</h3><p>Raw measured illuminance. Value can be found in the published state on the <code>illuminance</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value.</p><h3 id="illuminance-lux-numeric" tabindex="-1"><a class="header-anchor" href="#illuminance-lux-numeric" aria-hidden="true">#</a> Illuminance_lux (numeric)</h3><p>Measured illuminance in lux. Value can be found in the published state on the <code>illuminance_lux</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>lx</code>.</p><h3 id="humidity-numeric" tabindex="-1"><a class="header-anchor" href="#humidity-numeric" aria-hidden="true">#</a> Humidity (numeric)</h3><p>Measured relative humidity. Value can be found in the published state on the <code>humidity</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>%</code>.</p><h3 id="temperature-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-numeric" aria-hidden="true">#</a> Temperature (numeric)</h3><p>Measured temperature value. Value can be found in the published state on the <code>temperature</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',14),p={},f=(0,t(83744).Z)(p,[["render",function(e,i){const t=(0,a.up)("OutboundLink"),p=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("p",null,[r,(0,a._)("a",o,[l,(0,a.Wm)(t)]),d]),u,c,s,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(p,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[h])),_:1})])]),m],64)}]])},83744:(e,i)=>{i.Z=(e,i)=>{for(const[t,a]of i)e[t]=a;return e}}}]);