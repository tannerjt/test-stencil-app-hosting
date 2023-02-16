import{r as i,c as t,h as e,H as a,g as s}from"./p-a7bcab11.js";import{s as n,c as o,d as c,H as r}from"./p-5d32b837.js";import{g as l}from"./p-3b3bc7ac.js";import{u as h}from"./p-f7a69c8c.js";import{n as m}from"./p-86912c0a.js";import{c as d,d as p,g as u}from"./p-aafb07bb.js";import{c as f,s as b,a as g}from"./p-ac486437.js";import{n as v,c as y,d as k}from"./p-5a1554f1.js";import{l as D,f as S,i as j}from"./p-247c6945.js";import"./p-b71772f1.js";import"./p-267d48f6.js";import"./p-ccbfda19.js";let C=class{constructor(e){i(this,e),this.calciteInputTimePickerChange=t(this,"calciteInputTimePickerChange",7),this.internalValueChange=!1,this.previousValidValue=null,this.referenceElementId=`input-time-picker-${l()}`,this.calciteInternalInputBlurHandler=()=>{this.open=!1;const i=this.shouldIncludeSeconds(),{effectiveLocale:t,numberingSystem:e,value:a,calciteInputEl:s}=this;v.numberFormatOptions={locale:t,numberingSystem:e,useGrouping:!1};const n=v.delocalize(s.value),o=D({value:n,includeSeconds:i,locale:t,numberingSystem:e});this.setInputValue(o||D({value:a,locale:t,numberingSystem:e,includeSeconds:i}))},this.calciteInternalInputFocusHandler=i=>{this.readOnly||(this.open=!0,i.stopPropagation())},this.calciteInputInputHandler=i=>{const t=i.target;v.numberFormatOptions={locale:this.effectiveLocale,numberingSystem:this.numberingSystem,useGrouping:!1};const e=v.delocalize(t.value);this.setValue({value:e});const a=e.split("").map((i=>m.includes(i)?v.numberFormatter.format(Number(i)):i)).join("");this.setInputValue(a)},this.timePickerChangeHandler=i=>{i.stopPropagation(),this.setValue({value:i.target.value,origin:"time-picker"})},this.keyDownHandler=i=>{const{defaultPrevented:t,key:e}=i;t||("Enter"===e&&n(this)&&i.preventDefault(),"Escape"===e&&this.open&&(this.open=!1,i.preventDefault()))},this.setCalcitePopoverEl=i=>{this.popoverEl=i},this.setCalciteInputEl=i=>{this.calciteInputEl=i},this.setCalciteTimePickerEl=i=>{this.calciteTimePickerEl=i},this.setInputValue=i=>{this.calciteInputEl&&(this.calciteInputEl.value=i)},this.setValue=({value:i,origin:t="input"})=>{const e=this.value,a=S(i),s=D({value:a,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()});this.internalValueChange="external"!==t&&"loading"!==t;const n="loading"!==t&&"external"!==t&&(i!==this.previousValidValue&&!i||!(this.previousValidValue||!a)||a!==this.previousValidValue&&a);i?(n&&(this.previousValidValue=a),a&&a!==this.value&&(this.value=a),this.localizedValue=s):(this.value=i,this.localizedValue=null),"time-picker"!==t&&"external"!==t||this.setInputValue(s),n&&(this.calciteInputTimePickerChange.emit().defaultPrevented?(this.internalValueChange=!1,this.value=e,this.setInputValue(e),this.previousValidValue=e):this.previousValidValue=a)},this.open=!1,this.disabled=!1,this.readOnly=!1,this.messagesOverrides=void 0,this.name=void 0,this.numberingSystem=void 0,this.required=!1,this.scale="m",this.overlayPositioning="absolute",this.placement="auto",this.step=60,this.value=null,this.effectiveLocale="",this.localizedValue=void 0}openHandler(i){this.disabled||this.readOnly?this.open=!1:i&&this.reposition(!0)}handleDisabledAndReadOnlyChange(i){i||(this.open=!1)}valueWatcher(i){this.internalValueChange||this.setValue({value:i,origin:"external"}),this.internalValueChange=!1}effectiveLocaleWatcher(){this.setInputValue(D({value:this.value,locale:this.effectiveLocale,numberingSystem:this.numberingSystem,includeSeconds:this.shouldIncludeSeconds()}))}clickHandler(i){i.composedPath().includes(this.calciteTimePickerEl)||this.setFocus()}timePickerBlurHandler(i){i.preventDefault(),i.stopPropagation(),this.open=!1}timePickerFocusHandler(i){i.preventDefault(),i.stopPropagation(),this.readOnly||(this.open=!0)}async setFocus(){await f(this),this.el.focus()}async reposition(i=!1){var t;null===(t=this.popoverEl)||void 0===t||t.reposition(i)}onLabelClick(){this.setFocus()}shouldIncludeSeconds(){return this.step<60}connectedCallback(){y(this),this.value&&this.setValue({value:j(this.value)?this.value:void 0,origin:"loading"}),d(this),o(this)}componentWillLoad(){b(this)}componentDidLoad(){g(this),this.setInputValue(this.localizedValue)}disconnectedCallback(){p(this),c(this),k(this)}componentDidRender(){h(this)}render(){const i=`${this.referenceElementId}-popover`;return e(a,{onKeyDown:this.keyDownHandler},e("div",{"aria-controls":i,"aria-haspopup":"dialog","aria-label":this.name,"aria-owns":i,id:this.referenceElementId,role:"combobox"},e("calcite-input",{disabled:this.disabled,icon:"clock",label:u(this),onCalciteInputInput:this.calciteInputInputHandler,onCalciteInternalInputBlur:this.calciteInternalInputBlurHandler,onCalciteInternalInputFocus:this.calciteInternalInputFocusHandler,readOnly:this.readOnly,ref:this.setCalciteInputEl,scale:this.scale,step:this.step})),e("calcite-popover",{focusTrapDisabled:!0,id:i,label:"Time Picker",open:this.open,overlayPositioning:this.overlayPositioning,placement:this.placement,ref:this.setCalcitePopoverEl,referenceElement:this.referenceElementId,triggerDisabled:!0},e("calcite-time-picker",{lang:this.effectiveLocale,messageOverrides:this.messagesOverrides,numberingSystem:this.numberingSystem,onCalciteInternalTimePickerChange:this.timePickerChangeHandler,ref:this.setCalciteTimePickerEl,scale:this.scale,step:this.step,value:this.value})),e(r,{component:this}))}static get delegatesFocus(){return!0}get el(){return s(this)}static get watchers(){return{open:["openHandler"],disabled:["handleDisabledAndReadOnlyChange"],readOnly:["handleDisabledAndReadOnlyChange"],value:["valueWatcher"],effectiveLocale:["effectiveLocaleWatcher"]}}};C.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;-moz-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{display:inline-block;-webkit-user-select:none;-moz-user-select:none;user-select:none}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}::slotted(input[slot=hidden-form-input]){margin:0 !important;opacity:0 !important;outline:none !important;padding:0 !important;position:absolute !important;inset:0 !important;transform:none !important;-webkit-appearance:none !important;z-index:-1 !important}";export{C as calcite_input_time_picker}