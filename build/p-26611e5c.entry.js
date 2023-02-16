import{r as i,c as t,h as e,g as s}from"./p-a7bcab11.js";import{c as o}from"./p-a2d4954b.js";import{i as a,g as n}from"./p-b71772f1.js";import{n as l,C as r,p as c,c as h}from"./p-765f4e65.js";import{u as d}from"./p-f7a69c8c.js";import{i as p}from"./p-86912c0a.js";import{c as u,s as m,a as f}from"./p-ac486437.js";import{c as g,d as b}from"./p-5a1554f1.js";import{c as v}from"./p-c93f97db.js";import{u as x,s as w,c as y,d as k}from"./p-d1f47aa9.js";import{d as C,i as S}from"./p-58421494.js";import"./p-dfe5a97d.js";import"./p-3b3bc7ac.js";import"./p-267d48f6.js";import"./p-ccbfda19.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */
const F=o("#007AC2"),D={r:255,g:255,b:255},A={h:360,s:100,v:100},j={s:{slider:{height:10,width:160},colorField:{height:80,width:160},thumb:{radius:8}},m:{slider:{height:14,width:272},colorField:{height:150,width:272},thumb:{radius:10}},l:{slider:{height:16,width:464},colorField:{height:200,width:464},thumb:{radius:12}}},z=l(F.hex());let M=class{constructor(s){var c,h,d,u;i(this,s),this.calciteColorPickerChange=t(this,"calciteColorPickerChange",6),this.calciteColorPickerInput=t(this,"calciteColorPickerInput",6),this.colorFieldAndSliderHovered=!1,this.hueThumbState="idle",this.internalColorUpdateContext=null,this.mode=r.HEX,this.shiftKeyChannelAdjustment=0,this.sliderThumbState="idle",this.handleTabActivate=i=>{this.channelMode=i.currentTarget.getAttribute("data-color-mode"),this.updateChannelsFromColor(this.color)},this.handleColorFieldScopeKeyDown=i=>{const{key:t}=i,e={ArrowUp:{x:0,y:-10},ArrowRight:{x:10,y:0},ArrowDown:{x:0,y:10},ArrowLeft:{x:-10,y:0}};e[t]&&(i.preventDefault(),this.scopeOrientation="ArrowDown"===t||"ArrowUp"===t?"vertical":"horizontal",this.captureColorFieldColor(this.colorFieldScopeLeft+e[t].x||0,this.colorFieldScopeTop+e[t].y||0,!1))},this.handleHueScopeKeyDown=i=>{const t=i.shiftKey?10:1,{key:e}=i,s={ArrowUp:1,ArrowRight:1,ArrowDown:-1,ArrowLeft:-1};if(s[e]){i.preventDefault();const o=s[e]*t,a=this.baseColorFieldColor.hue(),n=this.baseColorFieldColor.hue(a+o);this.internalColorSet(n,!1)}},this.handleHexInputChange=i=>{i.stopPropagation();const{allowEmpty:t,color:e}=this,s=i.target.value;!t||s?s!==(e&&l(e.hex()))&&this.internalColorSet(o(s)):this.internalColorSet(null)},this.handleSavedColorSelect=i=>{this.internalColorSet(o(i.currentTarget.color))},this.handleChannelInput=i=>{const t=i.currentTarget,e=Number(t.getAttribute("data-channel-index")),s="rgb"===this.channelMode?D[Object.keys(D)[e]]:A[Object.keys(A)[e]];let o;if(this.allowEmpty&&!t.value)o="";else{const i=Number(t.value)+this.shiftKeyChannelAdjustment;o=v(i,0,s).toString()}t.value=o,t.internalSyncChildElValue()},this.handleChannelChange=i=>{const t=i.currentTarget,e=Number(t.getAttribute("data-channel-index")),s=[...this.channels];if(this.allowEmpty&&!t.value)return this.channels=[null,null,null],void this.internalColorSet(null);s[e]=Number(t.value),this.updateColorFromChannels(s)},this.handleSavedColorKeyDown=i=>{p(i.key)&&(i.preventDefault(),this.handleSavedColorSelect(i))},this.handleColorFieldAndSliderPointerLeave=()=>{this.colorFieldAndSliderInteractive=!1,this.colorFieldAndSliderHovered=!1,"drag"!==this.sliderThumbState&&"drag"!==this.hueThumbState&&(this.hueThumbState="idle",this.sliderThumbState="idle",this.drawColorFieldAndSlider())},this.handleColorFieldAndSliderPointerDown=i=>{var t,e;if(!a(i))return;const{offsetX:s,offsetY:o}=i,n=this.getCanvasRegion(o);"color-field"===n?(this.hueThumbState="drag",this.captureColorFieldColor(s,o),null===(t=this.colorFieldScopeNode)||void 0===t||t.focus()):"slider"===n&&(this.sliderThumbState="drag",this.captureHueSliderColor(s),null===(e=this.hueScopeNode)||void 0===e||e.focus()),i.preventDefault(),document.addEventListener("pointermove",this.globalPointerMoveHandler),document.addEventListener("pointerup",this.globalPointerUpHandler,{once:!0}),this.activeColorFieldAndSliderRect=this.fieldAndSliderRenderingContext.canvas.getBoundingClientRect()},this.globalPointerUpHandler=i=>{if(!a(i))return;const t="drag"===this.sliderThumbState||"drag"===this.hueThumbState;this.hueThumbState="idle",this.sliderThumbState="idle",this.activeColorFieldAndSliderRect=null,this.drawColorFieldAndSlider(),t&&this.calciteColorPickerChange.emit()},this.globalPointerMoveHandler=i=>{const{el:t,dimensions:e}=this,s="drag"===this.hueThumbState;if(!t.isConnected||"drag"!==this.sliderThumbState&&!s)return;let o,a;const n=this.activeColorFieldAndSliderRect,{clientX:l,clientY:r}=i;if(this.colorFieldAndSliderHovered)o=l-n.x,a=r-n.y;else{const i=e.colorField.width,t=e.colorField.height,s=e.slider.height;o=l<n.x+i&&l>n.x?l-n.x:l<n.x?0:i-1,a=r<n.y+t+s&&r>n.y?r-n.y:r<n.y?0:t+s}s?this.captureColorFieldColor(o,a,!1):this.captureHueSliderColor(o)},this.handleColorFieldAndSliderPointerEnterOrMove=({offsetX:i,offsetY:t})=>{const{dimensions:{colorField:e,slider:s,thumb:o}}=this;this.colorFieldAndSliderInteractive=t<=e.height+s.height,this.colorFieldAndSliderHovered=!0;const a=this.getCanvasRegion(t);if("color-field"===a){const s=this.hueThumbState,a=this.baseColorFieldColor.hsv(),n=Math.round(a.saturationv()/(A.s/e.width)),l=Math.round(e.height-a.value()/(A.v/e.height)),r=this.containsPoint(i,t,n,l,o.radius);let c=!1;"idle"===s&&r?(this.hueThumbState="hover",c=!0):"hover"!==s||r||(this.hueThumbState="idle",c=!0),"drag"!==this.hueThumbState&&c&&this.drawColorFieldAndSlider()}else if("slider"===a){const a=this.baseColorFieldColor.hsv().saturationv(100).value(100),n=this.sliderThumbState,l=Math.round(a.hue()/(360/s.width)),r=Math.round((s.height+this.getSliderCapSpacing())/2)+e.height,c=this.containsPoint(i,t,l,r,o.radius);let h=!1;"idle"===n&&c?(this.sliderThumbState="hover",h=!0):"hover"!==n||c||(this.sliderThumbState="idle",h=!0),"drag"!==this.sliderThumbState&&h&&this.drawColorFieldAndSlider()}},this.storeColorFieldScope=i=>{this.colorFieldScopeNode=i},this.storeHueScope=i=>{this.hueScopeNode=i},this.renderChannelsTabTitle=i=>{const{channelMode:t,messages:s}=this;return e("calcite-tab-title",{class:"color-mode","data-color-mode":i,key:i,onCalciteTabsActivate:this.handleTabActivate,selected:i===t},"rgb"===i?s.rgb:s.hsv)},this.renderChannelsTab=i=>{const{channelMode:t,channels:s,messages:o}=this,a=i===t,l="rgb"===i,r=l?[o.r,o.g,o.b]:[o.h,o.s,o.v],c=l?[o.red,o.green,o.blue]:[o.hue,o.saturation,o.value],h=n(this.el);return e("calcite-tab",{class:"control",key:i,selected:a},e("div",{class:"channels",dir:"ltr"},s.map(((i,t)=>this.renderChannel(i,t,r[t],c[t],h)))))},this.renderChannel=(i,t,s,o,a)=>e("calcite-input",{class:"channel","data-channel-index":t,dir:a,label:o,lang:this.effectiveLocale,numberButtonType:"none",numberingSystem:this.numberingSystem,onCalciteInputChange:this.handleChannelChange,onCalciteInputInput:this.handleChannelInput,onKeyDown:this.handleKeyDown,prefixText:s,scale:"l"===this.scale?"m":"s",type:"number",value:null==i?void 0:i.toString()}),this.deleteColor=()=>{const i=this.color.hex();if(!(this.savedColors.indexOf(i)>-1))return;const t=this.savedColors.filter((t=>t!==i));this.savedColors=t,this.storageId&&localStorage.setItem(`calcite-color-${this.storageId}`,JSON.stringify(t))},this.saveColor=()=>{const i=this.color.hex();if(this.savedColors.indexOf(i)>-1)return;const t=[...this.savedColors,i];this.savedColors=t,this.storageId&&localStorage.setItem(`calcite-color-${this.storageId}`,JSON.stringify(t))},this.drawColorFieldAndSlider=(c=()=>{this.fieldAndSliderRenderingContext&&(this.drawColorField(),this.drawHueSlider())},d=!0,u=!0,S(h)&&(d="leading"in h?!!h.leading:d,u="trailing"in h?!!h.trailing:u),C(c,16,{leading:d,maxWait:16,trailing:u})),this.captureColorFieldColor=(i,t,e=!0)=>{const{dimensions:{colorField:{height:s,width:o}}}=this,a=Math.round(A.s/o*i),n=Math.round(A.v/s*(s-t));this.internalColorSet(this.baseColorFieldColor.hsv().saturationv(a).value(n),e)},this.initColorFieldAndSlider=i=>{this.fieldAndSliderRenderingContext=i.getContext("2d"),this.updateCanvasSize(i)},this.allowEmpty=!1,this.color=F,this.disabled=!1,this.format="auto",this.hideHex=!1,this.hideChannels=!1,this.hideSaved=!1,this.scale="m",this.storageId=void 0,this.messageOverrides=void 0,this.numberingSystem=void 0,this.value=z,this.defaultMessages=void 0,this.colorFieldAndSliderInteractive=!1,this.channelMode="rgb",this.channels=this.toChannels(F),this.dimensions=j.m,this.effectiveLocale="",this.messages=void 0,this.savedColors=[],this.colorFieldScopeTop=void 0,this.colorFieldScopeLeft=void 0,this.scopeOrientation=void 0,this.hueScopeLeft=void 0,this.hueScopeTop=void 0}handleColorChange(i,t){this.drawColorFieldAndSlider(),this.updateChannelsFromColor(i),this.previousColor=t}handleFormatChange(i){this.setMode(i),this.internalColorSet(this.color,!1,"internal")}handleScaleChange(i="m"){var t;this.updateDimensions(i),this.updateCanvasSize(null===(t=this.fieldAndSliderRenderingContext)||void 0===t?void 0:t.canvas)}onMessagesChange(){}handleValueChange(i,t){const{allowEmpty:e,format:s}=this;let a=!1;if(!e||i){const e=c(i);if(!e||"auto"!==s&&e!==s)return this.showIncompatibleColorWarning(i,s),void(this.value=t);a=this.mode!==e,this.setMode(e)}const n="drag"===this.sliderThumbState||"drag"===this.hueThumbState;if("initial"===this.internalColorUpdateContext)return;if("user-interaction"===this.internalColorUpdateContext)return this.calciteColorPickerInput.emit(),void(n||this.calciteColorPickerChange.emit());const l=e&&!i?null:o(i),r=!h(l,this.color);(a||r)&&this.internalColorSet(l,!0,"internal")}get baseColorFieldColor(){return this.color||this.previousColor||F}effectiveLocaleChange(){x(this,this.effectiveLocale)}handleChannelKeyUpOrDown(i){this.shiftKeyChannelAdjustment=0;const{key:t}=i;if("ArrowUp"!==t&&"ArrowDown"!==t||!i.composedPath().some((i=>{var t;return null===(t=i.classList)||void 0===t?void 0:t.contains("channel")})))return;const{shiftKey:e}=i;if(i.preventDefault(),!this.color)return this.internalColorSet(this.previousColor),void i.stopPropagation();this.shiftKeyChannelAdjustment="ArrowUp"===t&&e?9:"ArrowDown"===t&&e?-9:0}async setFocus(){await u(this),this.el.focus()}async componentWillLoad(){m(this);const{allowEmpty:i,color:t,format:e,value:s}=this,a=i&&!s,n=c(s),l=a||"auto"===e&&n||e===n,r=a?null:l?o(s):t;l||this.showIncompatibleColorWarning(s,e),this.setMode(e),this.internalColorSet(r,!1,"initial"),this.updateDimensions(this.scale);const h=`calcite-color-${this.storageId}`;this.storageId&&localStorage.getItem(h)&&(this.savedColors=JSON.parse(localStorage.getItem(h))),await w(this)}connectedCallback(){g(this),y(this)}componentDidLoad(){f(this)}disconnectedCallback(){document.removeEventListener("pointermove",this.globalPointerMoveHandler),document.removeEventListener("pointerup",this.globalPointerUpHandler),b(this),k(this)}componentDidRender(){d(this)}render(){const{allowEmpty:i,color:t,messages:s,hideHex:o,hideChannels:a,hideSaved:n,savedColors:l,scale:r}=this,c=t?t.hex():null,h="l"===r?"m":"s",{colorFieldAndSliderInteractive:d,colorFieldScopeTop:p,colorFieldScopeLeft:u,hueScopeLeft:m,hueScopeTop:f,scopeOrientation:g,dimensions:{colorField:{height:b,width:v},slider:{height:x}}}=this,w=null!=f?f:x/2+b,y=null!=m?m:v*F.hue()/A.h,k=null===t,C="vertical"===g;return e("div",{class:"container"},e("div",{class:"color-field-and-slider-wrap"},e("canvas",{class:{"color-field-and-slider":!0,"color-field-and-slider--interactive":d},onPointerDown:this.handleColorFieldAndSliderPointerDown,onPointerEnter:this.handleColorFieldAndSliderPointerEnterOrMove,onPointerLeave:this.handleColorFieldAndSliderPointerLeave,onPointerMove:this.handleColorFieldAndSliderPointerEnterOrMove,ref:this.initColorFieldAndSlider}),e("div",{"aria-label":C?s.value:s.saturation,"aria-valuemax":C?A.v:A.s,"aria-valuemin":"0","aria-valuenow":(C?null==t?void 0:t.saturationv():null==t?void 0:t.value())||"0",class:{scope:!0,"scope--color-field":!0},onKeyDown:this.handleColorFieldScopeKeyDown,ref:this.storeColorFieldScope,role:"slider",style:{top:`${p||0}px`,left:`${u||0}px`},tabindex:"0"}),e("div",{"aria-label":s.hue,"aria-valuemax":A.h,"aria-valuemin":"0","aria-valuenow":(null==t?void 0:t.round().hue())||F.round().hue(),class:{scope:!0,"scope--hue":!0},onKeyDown:this.handleHueScopeKeyDown,ref:this.storeHueScope,role:"slider",style:{top:`${w}px`,left:`${y}px`},tabindex:"0"})),o&&a?null:e("div",{class:{"control-section":!0,section:!0}},o?null:e("div",{class:"color-hex-options"},e("span",{class:{header:!0,"header--hex":!0}},s.hex),e("calcite-color-picker-hex-input",{allowEmpty:i,class:"control",hexLabel:s.hex,numberingSystem:this.numberingSystem,onCalciteColorPickerHexInputChange:this.handleHexInputChange,scale:h,value:c})),a?null:e("calcite-tabs",{class:{"color-mode-container":!0,"section--split":!0},scale:h},e("calcite-tab-nav",{slot:"title-group"},this.renderChannelsTabTitle("rgb"),this.renderChannelsTabTitle("hsv")),this.renderChannelsTab("rgb"),this.renderChannelsTab("hsv"))),n?null:e("div",{class:{"saved-colors-section":!0,section:!0}},e("div",{class:"header"},e("label",null,s.saved),e("div",{class:"saved-colors-buttons"},e("calcite-button",{appearance:"transparent",class:"delete-color",disabled:k,iconStart:"minus",kind:"neutral",label:s.deleteColor,onClick:this.deleteColor,scale:h,type:"button"}),e("calcite-button",{appearance:"transparent",class:"save-color",disabled:k,iconStart:"plus",kind:"neutral",label:s.saveColor,onClick:this.saveColor,scale:h,type:"button"}))),l.length>0?e("div",{class:"saved-colors"},[...l.map((i=>e("calcite-color-picker-swatch",{active:c===i,class:"saved-color",color:i,key:i,onClick:this.handleSavedColorSelect,onKeyDown:this.handleSavedColorKeyDown,scale:r,tabIndex:0})))]):null))}handleKeyDown(i){"Enter"===i.key&&i.preventDefault()}showIncompatibleColorWarning(i,t){console.warn(`ignoring color value (${i}) as it is not compatible with the current format (${t})`)}setMode(i){this.mode="auto"===i?this.mode:i}captureHueSliderColor(i){const{dimensions:{slider:{width:t}}}=this;this.internalColorSet(this.baseColorFieldColor.hue(360/t*i),!1)}getCanvasRegion(i){const{dimensions:{colorField:{height:t},slider:{height:e}}}=this;return i<=t?"color-field":i<=t+e?"slider":"none"}internalColorSet(i,t=!0,e="user-interaction"){t&&h(i,this.color)||(this.internalColorUpdateContext=e,this.color=i,this.value=this.toValue(i),this.internalColorUpdateContext=null)}toValue(i,t=this.mode){if(!i)return null;if(t.includes("hex"))return l(i.round().hex());if(t.includes("-css"))return i[t.replace("-css","").replace("a","")]().round().string();const e=i[t]().round().object();return t.endsWith("a")&&(e.a=e.alpha,delete e.alpha),e}getSliderCapSpacing(){const{dimensions:{slider:{height:i},thumb:{radius:t}}}=this;return 2*t-i}updateDimensions(i="m"){this.dimensions=j[i]}drawColorField(){const i=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:t,width:e}}}=this;i.fillStyle=this.baseColorFieldColor.hsv().saturationv(100).value(100).string(),i.fillRect(0,0,e,t);const s=i.createLinearGradient(0,0,e,0);s.addColorStop(0,"rgba(255,255,255,1)"),s.addColorStop(1,"rgba(255,255,255,0)"),i.fillStyle=s,i.fillRect(0,0,e,t);const o=i.createLinearGradient(0,0,0,t);o.addColorStop(0,"rgba(0,0,0,0)"),o.addColorStop(1,"rgba(0,0,0,1)"),i.fillStyle=o,i.fillRect(0,0,e,t),this.drawActiveColorFieldColor()}setCanvasContextSize(i,{height:t,width:e}){const s=window.devicePixelRatio||1;i.width=e*s,i.height=t*s,i.style.height=`${t}px`,i.style.width=`${e}px`,i.getContext("2d").scale(s,s)}updateCanvasSize(i){i&&(this.setCanvasContextSize(i,{width:this.dimensions.colorField.width,height:this.dimensions.colorField.height+this.dimensions.slider.height+2*this.getSliderCapSpacing()}),this.drawColorFieldAndSlider())}containsPoint(i,t,e,s,o){return Math.pow(i-e,2)+Math.pow(t-s,2)<=Math.pow(o,2)}drawActiveColorFieldColor(){const{color:i}=this;if(!i)return;const t=i.hsv(),{dimensions:{colorField:{height:e,width:s},thumb:{radius:o}}}=this,a=t.saturationv()/(A.s/s),n=e-t.value()/(A.v/e);requestAnimationFrame((()=>{this.colorFieldScopeLeft=a,this.colorFieldScopeTop=n})),this.drawThumb(this.fieldAndSliderRenderingContext,o,a,n,t,this.hueThumbState)}drawThumb(i,t,e,s,o,a){const n=2*Math.PI;i.beginPath(),i.arc(e,s,t,0,n),i.shadowBlur="hover"===a?32:16,i.shadowColor=`rgba(0, 0, 0, ${"drag"===a?.32:.16})`,i.fillStyle="#fff",i.fill(),i.beginPath(),i.arc(e,s,t-3,0,n),i.shadowBlur=0,i.shadowColor="transparent",i.fillStyle=o.rgb().string(),i.fill()}drawActiveHueSliderColor(){const{color:i}=this;if(!i)return;const t=i.hsv().saturationv(100).value(100),{dimensions:{colorField:{height:e},slider:{height:s,width:o},thumb:{radius:a}}}=this,n=t.hue()/(360/o),l=s/2+e;requestAnimationFrame((()=>{this.hueScopeLeft=n,this.hueScopeTop=l})),this.drawThumb(this.fieldAndSliderRenderingContext,a,n,l,t,this.sliderThumbState)}drawHueSlider(){const i=this.fieldAndSliderRenderingContext,{dimensions:{colorField:{height:t},slider:{height:e,width:s}}}=this,a=i.createLinearGradient(0,0,s,0),n=["red","yellow","lime","cyan","blue","magenta","red"],l=1/(n.length-1);let r=0;n.forEach((i=>{a.addColorStop(r,o(i).string()),r+=l})),i.fillStyle=a,i.clearRect(0,t,s,e+2*this.getSliderCapSpacing()),i.fillRect(0,t,s,e),this.drawActiveHueSliderColor()}updateColorFromChannels(i){this.internalColorSet(o(i,this.channelMode))}updateChannelsFromColor(i){this.channels=i?this.toChannels(i):[null,null,null]}toChannels(i){const{channelMode:t}=this;return i[t]().array().map((i=>Math.floor(i)))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return s(this)}static get watchers(){return{color:["handleColorChange"],format:["handleFormatChange"],scale:["handleScaleChange"],messageOverrides:["onMessagesChange"],value:["handleValueChange"],effectiveLocale:["effectiveLocaleChange"]}}};M.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;font-size:var(--calcite-font-size--2);line-height:1rem;font-weight:var(--calcite-font-weight-normal)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}:host([scale=s]) .container{inline-size:160px}:host([scale=s]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(20px, 1fr))}:host([scale=s]) .channels{flex-direction:column}:host([scale=s]) .channel{inline-size:100%;-webkit-margin-after:4px;margin-block-end:4px}:host([scale=s]) .channel:last-child{-webkit-margin-after:0;margin-block-end:0}:host([scale=m]) .container{inline-size:272px}:host([scale=l]) .header{-webkit-padding-after:0px;padding-block-end:0px}:host([scale=l]){font-size:var(--calcite-font-size--1);line-height:1rem}:host([scale=l]) .container{inline-size:464px}:host([scale=l]) .color-field-and-slider{-webkit-margin-after:-20px;margin-block-end:-20px}:host([scale=l]) .section{padding-block:0 16px;padding-inline:16px}:host([scale=l]) .section:first-of-type{-webkit-padding-before:16px;padding-block-start:16px}:host([scale=l]) .saved-colors{grid-template-columns:repeat(auto-fill, minmax(28px, 1fr));grid-gap:12px;-webkit-padding-before:16px;padding-block-start:16px}:host([scale=l]) .control-section{flex-wrap:nowrap;align-items:baseline}:host([scale=l]) .control-section>:nth-child(2){-webkit-margin-start:12px;margin-inline-start:12px}:host([scale=l]) .color-hex-options{display:flex;flex-shrink:1;flex-direction:column;justify-content:space-around;min-block-size:98px;inline-size:160px}:host([scale=l]) .color-mode-container{flex-shrink:3}.container{background-color:var(--calcite-ui-foreground-1);display:inline-block;border:1px solid var(--calcite-ui-border-1)}.color-field-and-slider-wrap{position:relative}.scope{pointer-events:none;position:absolute;font-size:var(--calcite-font-size--1);outline-color:transparent;outline-offset:14px}.scope:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:16px}.color-field-and-slider{-webkit-margin-after:-16px;margin-block-end:-16px;touch-action:none}.color-field-and-slider--interactive{cursor:pointer}.control-section{display:flex;flex-direction:row;flex-wrap:wrap}.section{padding-block:0 12px;padding-inline:12px}.section:first-of-type{-webkit-padding-before:12px;padding-block-start:12px}.color-hex-options,.section--split{flex-grow:1}.header{display:flex;align-items:center;justify-content:space-between;-webkit-padding-after:0.25rem;padding-block-end:0.25rem;color:var(--calcite-ui-text-1)}.header--hex,.color-mode-container{-webkit-padding-before:12px;padding-block-start:12px}.channels{display:flex;justify-content:space-between}.channel{inline-size:31%}.saved-colors{-webkit-padding-before:12px;padding-block-start:12px;display:grid;grid-template-columns:repeat(auto-fill, minmax(24px, 1fr));grid-gap:8px;inline-size:100%}.saved-colors-buttons{display:flex}.saved-color{outline-offset:0;outline-color:transparent;cursor:pointer}.saved-color:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.saved-color:hover{transition:outline-color var(--calcite-internal-animation-timing-fast) ease-in-out;outline:2px solid var(--calcite-ui-border-2);outline-offset:2px}";export{M as calcite_color_picker}