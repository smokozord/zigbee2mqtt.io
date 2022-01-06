"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[7837],{25094:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-5cd70116",path:"/devices/SLR1.html",title:"Hive SLR1 control via MQTT",lang:"en-US",frontmatter:{title:"Hive SLR1 control via MQTT",description:"Integrate your Hive SLR1 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendors bridge or gateway.",addedAt:"2021-09-01T18:11:17.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"How to start/edit native boost",slug:"how-to-start-edit-native-boost",children:[]},{level:3,title:"Set heating mode to ON",slug:"set-heating-mode-to-on",children:[]},{level:3,title:"Set heating mode to OFF",slug:"set-heating-mode-to-off",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Temperature_setpoint_hold (binary)",slug:"temperature-setpoint-hold-binary",children:[]},{level:3,title:"Temperature_setpoint_hold_duration (numeric)",slug:"temperature-setpoint-hold-duration-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SLR1.md",git:{updatedTime:1641483203e3}}},68540:(e,t,o)=>{o.r(t),o.d(t,{default:()=>b});var a=o(66252);const n=(0,a.uE)('<h1 id="hive-slr1" tabindex="-1"><a class="header-anchor" href="#hive-slr1" aria-hidden="true">#</a> Hive SLR1</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SLR1</td></tr><tr><td>Vendor</td><td>Hive</td></tr><tr><td>Description</td><td>Heating thermostat</td></tr><tr><td>Exposes</td><td>climate (occupied_heating_setpoint, local_temperature, system_mode, running_state), temperature_setpoint_hold, temperature_setpoint_hold_duration, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SLR1.jpg" alt="Hive SLR1"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>To pair the thermostat with Zigbee2MQTT, follow these steps:</p>',5),s=(0,a._)("li",null,"Temporarily disconnect any thermostat controllers connected to the thermostat by remove a battery from them.",-1),i=(0,a._)("li",null,"Turn the thermostat and boiler off, then on again to ensure it is not trying to connect to any thermostat controllers.",-1),r=(0,a._)("li",null,"Once the thermostat and boiler are on, hold down the Central heating button on the device until the Central heating'light turns white/ pink, then release the button. This will enable stand-alone mode on the thermostat.",-1),d=(0,a._)("li",null,"Hold down the central heating button again until the Central heating light begins to flash amber. The device is now in pairing mode and should be found by Zigbee2MQTT.",-1),l=(0,a.Uk)("You can now re-insert the battery back into any thermostat controllers disconnected in step 1 and pair them to the boiler (and optionally Zigbee2MQTT). For information on pairing the thermostat controllers see the pairing instructions for the "),c=(0,a.Uk)("Hive SLT3B"),p=(0,a.Uk)(". Note that the thermostat's Central heating light will remain amber until a controller is paired with the thermostat, however the thermostat will still function correctly."),u=(0,a.uE)('<h3 id="how-to-start-edit-native-boost" tabindex="-1"><a class="header-anchor" href="#how-to-start-edit-native-boost" aria-hidden="true">#</a> How to start/edit native boost</h3><p>The receiver has support for native Boost, which will allow to display the remaining time on a compatible remote.</p><p>To start one, or modify an already active one, send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;emergency_heating&quot;</span><span class="token punctuation">,</span>\n   <span class="token string">&quot;temperature_setpoint_hold_duration&quot;</span><span class="token operator">:</span><span class="token string">&quot;30&quot;</span><span class="token punctuation">,</span>  <span class="token comment">// Replace with desired duration in minutes. Max 360. 0 to stop</span>\n   <span class="token string">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n   <span class="token string">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;18&quot;</span>  <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><p>Note: For device timing reasons, the payload needs to be sent as one single command. Sending individual commands or settings attributes manually using the Frontend will not work.</p><p>Also, the native boost can be used as a method to pause the heating too. To do so, set the temperature to a low value.</p><h3 id="set-heating-mode-to-on" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-on" aria-hidden="true">#</a> Set heating mode to ON</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;heat&quot;</span><span class="token punctuation">,</span>\n   <span class="token string">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>\n   <span class="token string">&quot;occupied_heating_setpoint&quot;</span><span class="token operator">:</span><span class="token string">&quot;20&quot;</span> <span class="token comment">// Replace with desired temperature. Between 5 and 32 C</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>65535</code> which means <code>undefined</code> (indefinite).</p><p>This will also stop any native boosts that are currently active.</p><h3 id="set-heating-mode-to-off" tabindex="-1"><a class="header-anchor" href="#set-heating-mode-to-off" aria-hidden="true">#</a> Set heating mode to OFF</h3><p>Send the following payload to the topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code>:</p><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token punctuation">{</span>\n   <span class="token string">&quot;system_mode&quot;</span><span class="token operator">:</span><span class="token string">&quot;off&quot;</span><span class="token punctuation">,</span>\n   <span class="token string">&quot;temperature_setpoint_hold&quot;</span><span class="token operator">:</span><span class="token string">&quot;0&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><p>Note: You will also notice that <code>temperature_setpoint_hold_duration</code> automatically changes to <code>0</code> which means <code>not set</code>. <code>occupied_heating_setpoint</code> automatically changes to <code>1</code> degree C.</p><p>This will also stop any native boosts that are currently active.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',17),h=(0,a.Uk)("How to use device type specific configuration"),m=(0,a.uE)('<ul><li><code>thermostat_unit</code>: Controls the temperature unit of the themrostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>5</code> and <code>32</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="temperature-setpoint-hold-binary" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-binary" aria-hidden="true">#</a> Temperature_setpoint_hold (binary)</h3><p>Prevent changes. <code>false</code> = run normally. <code>true</code> = prevent from making changes. Must be set to <code>false</code> when system_mode = off or <code>true</code> for heat. Value can be found in the published state on the <code>temperature_setpoint_hold</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold&quot;: NEW_VALUE}</code>. If value equals <code>true</code> temperature_setpoint_hold is ON, if <code>false</code> OFF.</p><h3 id="temperature-setpoint-hold-duration-numeric" tabindex="-1"><a class="header-anchor" href="#temperature-setpoint-hold-duration-numeric" aria-hidden="true">#</a> Temperature_setpoint_hold_duration (numeric)</h3><p>Period in minutes for which the setpoint hold will be active. 65535 = attribute not used. 0 to 360 to match the remote display. Value can be found in the published state on the <code>temperature_setpoint_hold_duration</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;temperature_setpoint_hold_duration&quot;: NEW_VALUE}</code>. The minimal value is <code>0</code> and the maximum value is <code>65535</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',11),g={},b=(0,o(83744).Z)(g,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("ol",null,[s,i,r,d,(0,a._)("li",null,[l,(0,a.Wm)(o,{to:"/devices/SLT3.html"},{default:(0,a.w5)((()=>[c])),_:1}),p])]),u,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[h])),_:1})])]),m],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);