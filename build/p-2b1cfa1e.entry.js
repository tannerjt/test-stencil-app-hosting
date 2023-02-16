import{r as t,c as e,h as i,g as a}from"./p-a7bcab11.js";import{c as n,d as o}from"./p-41299eba.js";import{t as r,d as c}from"./p-b71772f1.js";import{c as s,d as l}from"./p-5a1554f1.js";import{c as d,d as m,s as h,u as f}from"./p-d1f47aa9.js";import"./p-ccbfda19.js";import"./p-3b3bc7ac.js";import"./p-267d48f6.js";import"./p-86912c0a.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */let p=class{constructor(i){t(this,i),this.calciteCardSelect=e(this,"calciteCardSelect",6),this.cardSelectClick=()=>{this.selectCard()},this.cardSelectKeyDown=t=>{switch(t.key){case" ":case"Enter":this.selectCard(),t.preventDefault()}},this.loading=!1,this.selected=!1,this.selectable=!1,this.thumbnailPosition="block-start",this.messages=void 0,this.messageOverrides=void 0,this.effectiveLocale=void 0,this.defaultMessages=void 0}onMessagesChange(){}connectedCallback(){n(this),s(this),d(this)}disonnectedCallback(){o(this),l(this),m(this)}async componentWillLoad(){await h(this)}render(){const t=this.thumbnailPosition.startsWith("inline"),e=this.thumbnailPosition.endsWith("start");return i("div",{class:{"calcite-card-container":!0,inline:t}},this.loading?i("div",{class:"calcite-card-loader-container"},i("calcite-loader",{label:this.messages.loading})):null,e&&this.renderThumbnail(),i("section",{"aria-busy":r(this.loading),class:{container:!0}},this.selectable?this.renderCheckbox():null,this.renderHeader(),i("div",{class:"card-content"},i("slot",null)),this.renderFooter()),!e&&this.renderThumbnail())}effectiveLocaleChange(){f(this,this.effectiveLocale)}selectCard(){this.selected=!this.selected,this.calciteCardSelect.emit()}renderThumbnail(){return c(this.el,"thumbnail")?i("section",{class:"thumbnail-wrapper"},i("slot",{name:"thumbnail"})):null}renderCheckbox(){return i("calcite-label",{class:"checkbox-wrapper",onClick:this.cardSelectClick,onKeyDown:this.cardSelectKeyDown},i("calcite-checkbox",{checked:this.selected,label:this.selected?this.messages.deselect:this.messages.select}))}renderHeader(){const{el:t}=this,e=c(t,"title"),a=c(t,"subtitle");return e||a?i("header",{class:"header"},i("slot",{name:"title"}),i("slot",{name:"subtitle"})):null}renderFooter(){const{el:t}=this,e=c(t,"footer-start"),a=c(t,"footer-end");return e||a?i("footer",{class:"footer"},i("slot",{name:"footer-start"}),i("slot",{name:"footer-end"})):null}static get assetsDirs(){return["assets"]}get el(){return a(this)}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}};p.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;max-inline-size:100%}:host .calcite-card-container{position:relative;display:flex;block-size:100%;flex-direction:column;justify-content:space-between;overflow:hidden;border-width:1px;border-style:solid;border-color:var(--calcite-ui-border-2);background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-3);--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);border-radius:var(--calcite-border-radius-base)}.container{position:relative;display:flex;flex:1 1 auto;flex-direction:column}:host([loading]) .calcite-card-container *:not(calcite-loader):not(.calcite-card-loader-container){pointer-events:none;opacity:0}:host([loading]) .calcite-card-loader-container{position:absolute;inset:0px;display:flex;align-items:center}.header,.footer{display:flex;padding-inline:0.75rem;padding-block:0.75rem 0.25rem}.header{flex-direction:column}.footer{-webkit-margin-before:auto;margin-block-start:auto;flex-direction:row;align-content:space-between;justify-content:space-between;padding-inline:0.75rem;padding-block:0.25rem 0.75rem}.card-content{padding:0.75rem;font-size:var(--calcite-font-size--2);line-height:1.375;color:var(--calcite-ui-text-3)}:host([selected]) .calcite-card-container{border-color:var(--calcite-ui-brand)}slot[name=title]::slotted(*),*::slotted([slot=title]){margin:0px;font-size:var(--calcite-font-size--1);line-height:1.375;font-weight:var(--calcite-font-weight-medium);color:var(--calcite-ui-text-1)}:host([selectable]) .header{-webkit-padding-end:2rem;padding-inline-end:2rem}slot[name=subtitle]::slotted(*),*::slotted([slot=subtitle]){margin:0px;-webkit-margin-before:0.5rem;margin-block-start:0.5rem;font-size:var(--calcite-font-size--2);line-height:1.375;font-weight:var(--calcite-font-weight-normal);color:var(--calcite-ui-text-2)}slot[name=thumbnail]::slotted(img),img::slotted([slot=thumbnail]){min-inline-size:100%;max-inline-size:100%}slot[name=footer-start]::slotted(*),*::slotted([slot=footer-start]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375;-webkit-margin-end:auto;margin-inline-end:auto}slot[name=footer-end]::slotted(*),*::slotted([slot=footer-end]){align-self:center;font-size:var(--calcite-font-size--2);line-height:1.375}.checkbox-wrapper{position:absolute;margin:0px;padding:0px;inset-block-start:0.5rem;inset-inline-end:0.5rem}.thumbnail-wrapper{display:flex}.calcite-card-container.inline{flex-direction:row}.calcite-card-container.inline>.container{inline-size:60%}.calcite-card-container.inline>.thumbnail-wrapper{inline-size:40%;align-items:flex-start}.calcite-card-container.inline slot[name=thumbnail]::slotted(img),.calcite-card-container.inline img::slotted([slot=thumbnail]){inline-size:100%}slot[name=footer-start]::slotted(*),slot[name=footer-end]::slotted(*){display:flex;gap:0.25rem}";export{p as calcite_card}