import{r as t,c as e,h as i,H as a,g as s}from"./p-a7bcab11.js";import{b as c}from"./p-fd260f2d.js";let n=class{constructor(i){t(this,i),this.arcgisHubWidgetSelected=e(this,"arcgisHubWidgetSelected",7),this.scale="m",c(this,"emitSelected","updateExpanded")}get parentContainer(){const{el:t}=this;return t&&t.closest("arcgis-hub-map-widget-container")}connectedCallback(){const{parentContainer:t}=this;t&&(this.updateExpanded(),t.addEventListener("calciteActionPadToggle",this.updateExpanded))}disconnectedCallback(){const{parentContainer:t}=this;t&&t.removeEventListener("calciteActionPadToggle",this.updateExpanded)}emitSelected(){this.arcgisHubWidgetSelected.emit()}updateExpanded(){var t;this.expanded=null===(t=this.parentContainer)||void 0===t?void 0:t.expanded}render(){const{active:t,disabled:e,icon:s,scale:c,text:n,expanded:d,textEnabled:l}=this;return i(a,null,this.parentContainer&&i("calcite-action",{active:t,disabled:e,icon:s,onClick:this.emitSelected,scale:c,text:n,textEnabled:l||d}))}get el(){return s(this)}};n.style=":host{display:block}";export{n as arcgis_hub_map_widget_generic}