import{r as t,c as i,h as a,H as e,g as n}from"./p-a7bcab11.js";import{g as c,t as o}from"./p-b71772f1.js";import{g as s}from"./p-3b3bc7ac.js";import{i as r}from"./p-86912c0a.js";import{c as l,d}from"./p-5a1554f1.js";import{u as m,c as h,d as g,s as u}from"./p-d1f47aa9.js";import"./p-267d48f6.js";import"./p-ccbfda19.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const f={menuOpen:"chevron-down",menuClosedLeft:"chevron-left",menuClosedRight:"chevron-right",valid:"check-circle",invalid:"exclamation-mark-triangle"};let p=class{constructor(a){t(this,a),this.calciteBlockSectionToggle=i(this,"calciteBlockSectionToggle",6),this.guid=s(),this.handleHeaderKeyDown=t=>{r(t.key)&&(this.toggleSection(),t.preventDefault(),t.stopPropagation())},this.toggleSection=()=>{this.open=!this.open,this.calciteBlockSectionToggle.emit()},this.open=!1,this.status=void 0,this.text=void 0,this.toggleDisplay="button",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}effectiveLocaleChange(){m(this,this.effectiveLocale)}connectedCallback(){l(this),h(this)}disconnectedCallback(){d(this),g(this)}async componentWillLoad(){await u(this)}renderStatusIcon(){var t;const{status:i}=this,e=null!==(t=f[i])&&void 0!==t&&t;return e?a("calcite-icon",{class:{"status-icon":!0,valid:"valid"==i,invalid:"invalid"==i},icon:e,scale:"s"}):null}render(){const{el:t,messages:i,open:n,text:s,toggleDisplay:r}=this,l=c(t),d=n?f.menuOpen:"rtl"===l?f.menuClosedLeft:f.menuClosedRight,m=n?i.collapse:i.expand,{guid:h}=this,g=`${h}-region`,u=`${h}-button`,p="switch"===r?a("div",{"aria-controls":g,"aria-label":m,class:{toggle:!0,"toggle--switch":!0},id:u,onClick:this.toggleSection,onKeyDown:this.handleHeaderKeyDown,tabIndex:0,title:m},a("div",{class:"toggle--switch__content"},a("span",{class:"toggle--switch__text"},s)),a("calcite-switch",{checked:n,label:m,scale:"s",tabIndex:-1}),this.renderStatusIcon()):a("button",{"aria-controls":g,"aria-label":m,class:{"section-header":!0,toggle:!0},id:u,name:m,onClick:this.toggleSection},a("calcite-icon",{icon:d,scale:"s"}),a("span",{class:"section-header__text"},s),this.renderStatusIcon());return a(e,null,p,a("section",{"aria-expanded":o(n),"aria-labelledby":u,class:"content",hidden:!n,id:g},a("slot",null)))}static get assetsDirs(){return["assets"]}get el(){return n(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};p.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{box-sizing:border-box;display:block;background-color:var(--calcite-ui-foreground-1);font-size:var(--calcite-font-size--1);color:var(--calcite-ui-text-2)}:host([open]){border-width:0px;border-block-end-width:1px;border-style:solid;border-block-end-color:var(--calcite-ui-border-3)}:host(:last-child){border-block-end-width:0px}.toggle{inline-size:100%;border-width:0px;background-color:transparent;font-family:var(--calcite-sans-family);font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-2)}.toggle--switch,.section-header{margin-inline:0px;margin-block:0.25rem;display:flex;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;user-select:none;align-items:center;padding-inline:0px;padding-block:0.5rem;font-size:var(--calcite-font-size--1);outline-color:transparent}.toggle--switch:focus,.section-header:focus{outline:2px solid var(--calcite-ui-brand);outline-offset:2px}.toggle--switch:hover,.section-header:hover{color:var(--calcite-ui-text-1)}.section-header .status-icon{align-self:flex-end}.section-header__text{margin-inline:0.75rem;margin-block:0px;flex:1 1 auto;text-align:initial;word-wrap:anywhere}.toggle--switch calcite-switch{pointer-events:none;-webkit-margin-start:0.25rem;margin-inline-start:0.25rem}.toggle--switch .status-icon{-webkit-margin-start:0.5rem;margin-inline-start:0.5rem}.toggle--switch__content{display:flex;flex:1 1 auto;align-items:center}.status-icon.valid{color:var(--calcite-ui-success)}.status-icon.invalid{color:var(--calcite-ui-danger)}";export{p as calcite_block_section}