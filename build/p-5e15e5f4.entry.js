import{r as e,h as t}from"./p-a7bcab11.js";import{a as i}from"./p-b7cd5e4e.js";import"./p-18586bed.js";let n=class{constructor(t){e(this,t),this.currentView="gallery"}handleSwitchChange(){const{currentView:e}=this;this.currentView="gallery"===e?"developer":"gallery"}handleContextChange(){this.getItemData()}componentDidLoad(){this.getItemData()}async getItemData(){const{context:e,itemId:t}=this;if(!e||!t)return;const{context:{session:n}}=this,s={authentication:n},l=await i(t,s);this.data=l}renderGalleryView(){const{data:e,itemId:i}=this;return t("calcite-card",null,t("img",{slot:"thumbnail",src:"https://images.unsplash.com/photo-1560354892-75d8f5d0b5e9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=220&q=80"}),t("span",{slot:"title"},e.title),t("span",{slot:"subtitle"},e.body),t("div",{slot:"footer-start"},t("stencil-route-link",{url:`/discussion/${i}`},t("calcite-button",null,"View Discussion"))))}renderDeveloperView(){const{data:e,itemId:i}=this;return t("div",null,t("code",null,t("pre",null,JSON.stringify([e],null,3))),t("stencil-route-link",{url:`/discussion/${i}`},t("calcite-button",null,"View Discussion")))}render(){const{data:e,context:i,currentView:n}=this;return i&&e?t("div",{class:"app-item-viewer"},t("calcite-label",{layout:"inline"},t("span",{class:"gallery"===n&&"active"},"Gallery View"),t("calcite-switch",{checked:"developer"===n}),t("span",{class:"developer"===n&&"active"},"Developer View")),t("h1",null,"Endurance Running 2023 Course Planning"),"gallery"===n?this.renderGalleryView():this.renderDeveloperView()):t("p",null,"Please sign in to continue. (juliana_pa)")}static get watchers(){return{context:["handleContextChange"]}}};n.style="calcite-card.sc-app-item-viewer{width:220px}";export{n as app_item_viewer}