import{r as s,c as t,h as e,F as i,H as a,g as n}from"./p-a7bcab11.js";import{j as o,s as c,P as r,S as l,f as h,h as d,u,i as p,k as g,D as b,l as m}from"./p-e49ecfaf.js";import{b as v}from"./p-fd260f2d.js";import{i as y}from"./p-d8201573.js";import{d as w}from"./p-5cd57599.js";import{D as j}from"./p-3bf8d293.js";import{A as O,c as f}from"./p-88b67c2b.js";import{g as D,c as C}from"./p-78e655d3.js";import x from"@arcgis/core/Map.js";import I from"@arcgis/core/WebMap.js";import k from"@arcgis/core/views/MapView.js";import R from"@arcgis/core/Basemap.js";import{Point as G,Extent as H}from"@arcgis/core/geometry.js";import T from"@arcgis/core/Graphic.js";import{l as F}from"./p-c57d2d2f.js";import"./p-18586bed.js";import"./p-b7cd5e4e.js";import"./p-dfe5a97d.js";import"@arcgis/core/kernel.js";class E{constructor(){this.resizeObserver=new ResizeObserver(this.onResize.bind(this)),this.handlers=new WeakMap}static create(){return E.instance||(E.instance=new E),E.instance}static addHandler(s,t){this.create(),this.instance.addHandler(s,t)}static removeHandler(s,t){this.instance&&this.instance.removeHandler(s,t)}static unobserve(s){this.instance&&this.instance.unobserve(s)}addHandler(s,t){this.handlers.has(s)||(this.handlers.set(s,[]),this.resizeObserver.observe(s));const e=this.handlers.get(s);e.includes(t)||e.push(t)}removeHandler(s,t){if(this.handlers.has(s)){const e=this.handlers.get(s),i=e.indexOf(t),a=e.filter(((s,t)=>t!==i));a.length?this.handlers.set(s,a):(this.handlers.delete(s),this.resizeObserver.unobserve(s))}}unobserve(s){this.handlers.has(s)&&(this.handlers.delete(s),this.resizeObserver.unobserve(s))}onResize(s){requestAnimationFrame((()=>{s.forEach((s=>{var t;(null!==(t=this.handlers.get(s.target))&&void 0!==t?t:[]).forEach((s=>s()))}))}))}}var P=function(s,t,e,i){var a,n=arguments.length,o=n<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,e):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(s,t,e,i);else for(var c=s.length-1;c>=0;c--)(a=s[c])&&(o=(n<3?a(o):n>3?a(t,e,o):a(t,e))||o);return n>3&&o&&Object.defineProperty(t,e,o),o};let A=class{constructor(e){s(this,e),this.arcgisHubGeometryGoTo=t(this,"arcgisHubGeometryGoTo",7),this.arcgisHubDiscussionsFeature=t(this,"arcgisHubDiscussionsFeature",7),this.arcgisHubDiscussionsFeatureDeleted=t(this,"arcgisHubDiscussionsFeatureDeleted",7),this.arcgisHubGeometryFeatureSelect=t(this,"arcgisHubGeometryFeatureSelect",7),this.arcgisHubGeometryFeatureHover=t(this,"arcgisHubGeometryFeatureHover",7),this.arcgisHubGeometryDrawCreate=t(this,"arcgisHubGeometryDrawCreate",7),this.arcgisHubGeometryDrawTypeSelect=t(this,"arcgisHubGeometryDrawTypeSelect",7),this.arcgisHubGeometryDrawEdit=t(this,"arcgisHubGeometryDrawEdit",7),this.arcgisHubGeometryDrawEditCancel=t(this,"arcgisHubGeometryDrawEditCancel",7),this.arcgisHubGeometryDrawReset=t(this,"arcgisHubGeometryDrawReset",7),this.arcgisHubGeometrySelect=t(this,"arcgisHubGeometrySelect",7),this.arcgisHubGeometryDeselect=t(this,"arcgisHubGeometryDeselect",7),this.arcgisHubDiscussionsViewThread=t(this,"arcgisHubDiscussionsViewThread",7),this.arcgisHubDiscussionsDismiss=t(this,"arcgisHubDiscussionsDismiss",7),this.arcgisHubDiscussionsClose=t(this,"arcgisHubDiscussionsClose",7),this.arcgisHubFeatureRemove=t(this,"arcgisHubFeatureRemove",7),this.arcgisHubGeometryClearAll=t(this,"arcgisHubGeometryClearAll",7),this.hubTelemetry=t(this,"hubTelemetry",7),this.unsavedFeatures=[],this.unsavedRelatedFeatures=[],this.unsavedExistingFeatures=[],this.discussionDetails=null,this.error=null,this.optionsError=null,this.optionsSaving=!1,this.thread=null,this.previousThread=null,this.total=0,this.nextStart=1,this.loading=!0,this.showPostEditor=!1,this.showOptions=!1,v(this,"handleViewAllReplies","handleCheckStatus","handleResetThread","handleSelectThread","handleDOMReady","handleGeometryGoTo","handleNewPost","renderLoading","renderAddOrCreatePostButton","renderEmpty","renderPostEditor","renderThread","renderPostList","renderError","handleDiscussionOptionsClick","handleOptionsBack","checkIsMobile","handleSaveOptions","handleResetOptionsError"),this.observer=new MutationObserver(this.handleDOMReady)}handlePostIdChange(s,t){var e,i;s&&s!==t&&s!==(null===(i=null===(e=this.thread)||void 0===e?void 0:e.postDetails)||void 0===i?void 0:i.postId)&&this.reinitialize()}handleReplyIdChange(s,t){var e,i;s&&s!==t&&s!==(null===(i=null===(e=this.thread)||void 0===e?void 0:e.replyDetails)||void 0===i?void 0:i.postId)&&this.reinitialize()}handleLocationIdChange(s,t){s&&s!==t&&this.reinitialize()}async componentWillLoad(){this.intl=await y.loadIntlForComponent(this.element),this.initialize()}componentDidLoad(){this.observe()}connectedCallback(){this.observe()}disconnectedCallback(){this.disconnect()}async initialize(){const{postId:s,replyId:t,locationId:e,context:i}=this;this.loading=!0,this.error=null;try{(null==i?void 0:i.currentUser)?(this.discussionDetails=await this.fetchSubject(),s||t?this.initThread():await this.initPostList(),e&&(this.thread=null,this.enableGoTo=!0)):this.resetState()}catch(s){console.error("Failed to load discussions:",s.message),this.error=s}finally{this.loading=!1}}reinitialize(){this.initialize()}resetState(){this.thread=null,this.nextStart=-1,this.total=0,this.error=null,this.loading=!1,this.discussionDetails=null,this.postAggregates=null,this.scrollTarget=null,this.optionsError=null,this.optionsSaving=!1,this.previousThread=null,this.showPostEditor=null,this.showOptions=null}async searchPostAggregates(s,t){const{context:e,discussionDetails:{discussion:i},locationId:a,postAggregates:n=[]}=this;this.loading=!0;const o=a?`${i}%?id=%${a}%`:`${i}%`,{nextStart:h,items:d,total:u}=await c(Object.assign(Object.assign(Object.assign({discussion:o},a?{parents:[]}:{parents:[""]}),{sortBy:r.UPDATED_AT,sortOrder:l.DESC,start:s}),e.hubRequestOptions)),p=t?[...n,...d]:d;this.postAggregates=p,this.nextStart=h,this.total=u,this.loading=!1}initThread(){const{postId:s,replyId:t,channelId:e}=this,i={channelDetails:{channelId:e},postDetails:{postId:s}};t&&(i.replyDetails={postId:t}),this.thread=i,this.previousThread=i}async initPostList(){try{await this.searchPostAggregates(1),this.hubTelemetry.emit(Object.assign(Object.assign({},w.dictionary.category.interaction.action.open.label.postList),{response:w.constants.response.SUCCESS}))}catch(s){throw this.hubTelemetry.emit(Object.assign(Object.assign({},w.dictionary.category.interaction.action.open.label.postList),{response:w.constants.response.FAILURE})),s}}fetchSubject(s){const{discussion:t,context:e,locationId:i}=this;return h(Object.assign({discussion:t,locationId:i,bust:s},e.hubRequestOptions))}handleResetThread(){const{postAggregates:s,thread:{channelDetails:t,postDetails:e,replyDetails:i},arcgisHubDiscussionsViewThread:a}=this;this.hubTelemetry.emit(Object.assign(Object.assign({},w.dictionary.category.interaction.action.open.label.thread),{postId:null==i?void 0:i.postId,parentId:e.postId,channelId:t.channel.id,channelAccess:t.channel.access})),this.thread=null,s||this.searchPostAggregates(1),a.emit({postId:null,channelId:null})}observe(){const{observer:s,element:t}=this;s&&t&&s.observe(t,{subtree:!0,childList:!0,attributes:!0}),E.addHandler(window.document.body,this.checkIsMobile)}disconnect(){const{observer:s}=this;s&&s.disconnect(),E.removeHandler(window.document.body,this.checkIsMobile)}handleDOMReady(){this.scrollTarget&&(this.element.scrollTo({behavior:"smooth",left:this.scrollTarget.offsetLeft,top:this.scrollTarget.offsetTop}),this.scrollTarget=null)}handleNewPost(){this.hubTelemetry.emit(w.dictionary.category.interaction.action.open.label.editor),this.showPostEditor=!0}handlePostCancelled(s){s.stopPropagation(),this.showPostEditor=!1}handleScrollTo(s){this.scrollTarget=s.target}handleLoadMoreChange(s){s.stopPropagation();const{detail:t}=s;this.searchPostAggregates(t,!0)}handlePostUpdated(s){s.stopPropagation();const{thread:t,postAggregates:e}=this,{detail:i}=s;let a;t&&(a=Object.assign(Object.assign({},t),{postDetails:i}),this.thread=a),e&&(this.postAggregates=e.map((s=>{var t;return(null===(t=null==s?void 0:s.postDetails)||void 0===t?void 0:t.postId)===i.postId?a||Object.assign(Object.assign({},s),{postDetails:i}):s})))}handleReplyUpdated(s){s.stopPropagation();const{thread:t,postAggregates:e}=this,{detail:i}=s;let a;t&&(a=Object.assign(Object.assign({},t),{replyDetails:i}),this.thread=a),e&&(this.postAggregates=e.map((s=>{var t;return(null===(t=null==s?void 0:s.replyDetails)||void 0===t?void 0:t.postId)===i.postId?a||Object.assign(Object.assign({},s),{replyDetails:i}):s})))}handleChannelUpdated(s){s.stopPropagation();const{thread:t,postAggregates:e}=this,{detail:{postId:i,channelDetails:a}}=s;let n;if(t&&(n=Object.assign(Object.assign({},t),{channelDetails:a}),this.thread=n),e){const s=s=>Boolean(s.replyDetails)?s.replyDetails:s.postDetails;this.postAggregates=e.map((t=>s(t).postId===i?n||Object.assign(Object.assign({},t),{channelDetails:a}):t))}}async handlePostCreated(s){s.stopPropagation();const{detail:t}=s,{postAggregates:e,context:i,nextStart:a}=this,n=await d(Object.assign({channelDetails:{channelId:t.channelId}},i.hubRequestOptions)),o=await this.updateThreadOwnership({postDetails:{postId:t.id,post:t},channelDetails:n});this.postAggregates=e?[o,...e]:[o],this.total+=1,a>-1&&(this.nextStart+=1),this.arcgisHubDiscussionsFeature.emit({post:t,create:!0})}handlePostDeleted(s){s.stopPropagation();const{detail:t}=s,{postAggregates:e,thread:i,nextStart:a}=this;i&&(this.thread=Object.assign(Object.assign({},i),{postDetails:Object.assign(Object.assign({},i.postDetails),{post:null})})),e&&(this.previousThread=null,this.total-=1,this.postAggregates=e.filter((s=>s.postDetails.post.id!==t.id)),a>-1&&(this.nextStart-=1)),this.deletedDuringSession=!0,this.arcgisHubDiscussionsFeatureDeleted.emit(t)}async handlePostEdited(s){s.stopPropagation();const{thread:t,postAggregates:e,context:i}=this,{detail:a}=s,n=async s=>{const t=await p(Object.assign({postDetails:Object.assign(Object.assign({},s.postDetails),{post:a}),includeReplyCount:!0},i.hubRequestOptions));return Object.assign(Object.assign({},s),{postDetails:t})};let o;t&&(o=await n(t),this.thread=o),e&&(this.postAggregates=await Promise.all(e.map((s=>s.postDetails.postId===a.id?o||n(s):s)))),this.arcgisHubDiscussionsFeature.emit({post:a,create:!1})}async updateThreadOwnership(s){const{context:{hubRequestOptions:t,currentUser:{username:e}}}=this,{groups:[{owner:i}],channel:{id:a,creator:n}}=s.channelDetails;let o=s;if(n===e&&i!==e){o=C(s);const e=await u(Object.assign({channelId:a,params:{creator:i}},t));o.channelDetails.channel=e,o.postDetails.post.channel=e}return o}async handleThreadSelected(s){s.stopPropagation();const{detail:t}=s;t?this.selectThread(t):this.handleResetThread()}async handleDeepLinkedThreadSelected(s){s.stopPropagation();const{detail:t}=s;t?this.selectThread(t,!0):this.handleResetThread()}selectThread(s,t){const{arcgisHubDiscussionsViewThread:e,postAggregates:i,shouldComminglePostList:a}=this,n=Object.assign({},s);t||(delete n.replyDetails,(null==i?void 0:i.length)&&!a&&(this.postAggregates=i.map((s=>s.postDetails.postId===n.postDetails.postId?n:s)))),this.showPostEditor=!1,this.thread=n,this.previousThread=n,this.replyId=null,e.emit({postId:n.postDetails.postId,channelId:n.channelDetails.channelId})}handleSelectThread(){const{thread:{channelDetails:s,postDetails:t,replyDetails:e}}=this;this.hubTelemetry.emit(Object.assign(Object.assign({},w.dictionary.category.interaction.action.open.label.thread),{postId:null==e?void 0:e.postId,parentId:t.postId,channelId:s.channel.id,channelAccess:s.channel.access})),this.selectThread(this.thread)}handleReplyCreated(s){s.stopPropagation();const{detail:t}=s,{thread:e,postAggregates:i}=this,a=s=>Object.assign(Object.assign({},s),{postDetails:Object.assign(Object.assign({},s.postDetails),{post:Object.assign(Object.assign({},s.postDetails.post),{replyCount:s.postDetails.post.replyCount+1})})});e&&(this.thread=a(e)),i&&(this.postAggregates=i.map((s=>s.replyDetails||s.postDetails.postId!==(t.parentId||(null==t?void 0:t.parent.id))?s:a(s)))),this.arcgisHubDiscussionsFeature.emit({post:t,create:!0})}async handleReplyEdited(s){s.stopPropagation();const{postAggregates:t,thread:e,context:i}=this,{detail:a}=s;if(null==e?void 0:e.replyDetails){const s=await p(Object.assign({postDetails:Object.assign(Object.assign({},e.replyDetails),{post:a})},i.hubRequestOptions));this.thread=Object.assign(Object.assign({},e),{replyDetails:s})}if(t){const s=this.postAggregates.find((s=>{var t;return(null===(t=null==s?void 0:s.replyDetails)||void 0===t?void 0:t.postId)===a.id}));s&&(s.replyDetails.post=Object.assign(Object.assign({},s.replyDetails.post),a))}this.arcgisHubDiscussionsFeature.emit({post:a,create:!1})}handleReplyDeleted(s){s.stopPropagation();const{thread:t,postAggregates:e}=this,{detail:i}=s,a=s=>{const t=Object.assign(Object.assign({},s),{postDetails:Object.assign(Object.assign({},s.postDetails),{post:s.postDetails.post?Object.assign(Object.assign({},s.postDetails.post),{replyCount:s.postDetails.post.replyCount-1}):s.postDetails.post})});return t.replyDetails&&(t.replyDetails=Object.assign(Object.assign({},t.replyDetails),{post:null})),t};t&&(this.thread=a(t)),e&&(this.postAggregates=e.map((s=>s.replyDetails||s.postDetails.postId!==(i.parentId||(null==i?void 0:i.parent.id))?s:a(s))).filter((s=>{var t;return(null===(t=null==s?void 0:s.replyDetails)||void 0===t?void 0:t.postId)!==i.id}))),this.arcgisHubDiscussionsFeatureDeleted.emit(i)}handleGeometryGoTo(){const{thread:s}=this;this.arcgisHubGeometryGoTo.emit(s)}handleGeometryFeatureSelect(s){s.stopPropagation(),this.arcgisHubGeometryFeatureSelect.emit(s.detail)}handleGeometryFeatureHover(s){s.stopPropagation(),this.arcgisHubGeometryFeatureHover.emit(s.detail)}handleGeometryDrawCreate(s){s.stopPropagation(),this.arcgisHubGeometryDrawCreate.emit(s.detail)}handleGeometryDrawTypeSelect(s){s.stopPropagation(),this.arcgisHubGeometryDrawTypeSelect.emit(s.detail)}handleGeometryDrawEdit(s){s.stopPropagation(),this.arcgisHubGeometryDrawEdit.emit(s.detail)}handleGeometryDrawEditCancel(s){s.stopPropagation(),this.arcgisHubGeometryDrawEditCancel.emit()}handleGeometryDrawReset(s){s.stopPropagation(),this.arcgisHubGeometryDrawReset.emit()}handleGeometrySelect(s){s.stopPropagation(),this.arcgisHubGeometrySelect.emit(s.detail)}handleGeometryDeselect(s){s.stopPropagation(),this.arcgisHubGeometryDeselect.emit()}handleFeatureRemove(s){s.stopPropagation(),this.arcgisHubFeatureRemove.emit(s.detail)}handleGeometryClearAll(s){s.stopPropagation(),this.arcgisHubGeometryClearAll.emit()}handleCalcitePanelDismissedChange(s){s.stopPropagation(),this.arcgisHubDiscussionsDismiss.emit()}handleCalcitePanelDismissChange(s){s.stopPropagation(),this.arcgisHubDiscussionsClose.emit()}captureEmptyListImpression(){this.hubTelemetry.emit(w.dictionary.category.interaction.action.viewed.label.empty)}handleViewAllReplies(){const{thread:s,arcgisHubDiscussionsViewThread:t}=this,e=Object.assign({},s);delete e.replyDetails,this.thread=e,this.replyId=null,t.emit({postId:s.postDetails.postId,channelId:s.channelDetails.channelId})}handleCheckStatus(s){s.preventDefault();const t=s.target;this.hubTelemetry.emit(w.dictionary.category.navigation.action.external.label.hubStatus),setTimeout((()=>this.goToUrl(t.href)),250)}goToUrl(s){window.location.href=s}checkIsMobile(){const{document:{body:{clientWidth:s}}}=window;this.isMobile=s<768}handleDiscussionOptionsClick(){this.showOptions=!0,this.showPostEditor=!1,this.hubTelemetry.emit(w.dictionary.category.interaction.action.open.label.panel.details.discussionOptions)}handleOptionsBack(){this.showOptions=!1}async updateDiscussionDetails(){this.discussionDetails=await this.fetchSubject(!0)}async handleSaveOptions(){const{discussionDetails:s,context:t,optionsElement:e}=this,{value:i}=e,a=w.dictionary.category[s.type===b.CONTENT?s.type:"groups"].action.update.label.settings.details[i?"allowDiscussions":"blockDiscussions"];this.optionsSaving=!0,this.optionsError=null;try{const e=await g(Object.assign({subject:s.reference,discussable:i},t.requestOptions));this.hubTelemetry.emit(Object.assign(Object.assign({},a),{response:w.constants.response.SUCCESS})),this.discussionDetails=Object.assign(Object.assign({},s),{reference:e}),this.updateDiscussionDetails()}catch(s){this.hubTelemetry.emit(Object.assign(Object.assign({},a),{response:w.constants.response.FAILURE})),this.optionsError=s}finally{this.optionsSaving=!1}}handleResetOptionsError(){this.optionsError=null}get view(){const{error:s,thread:t,postAggregates:e,showOptions:i,context:a}=this;let n;return n=(null==a?void 0:a.currentUser)?s?this.renderError:t||e?i?this.renderOptions:t?this.renderThread:this.renderPostList:this.renderLoading:this.renderRequiresAuth,n}get shouldRenderOptions(){const{context:s,discussionDetails:t,dismissible:e}=this;let i=!1;return e||(i=(null==t?void 0:t.type)===b.CONTENT&&function(s,t){let e=!1;const{itemControl:i,owner:a,orgId:n}=s,{roleId:c,role:r,username:l,groups:h,orgId:d}=t,u=o(["admin","update"],i)||!!a&&a===l||!(!n||n!==d)&&!c&&"org_admin"===r,p=function(s){const{privileges:t=[]}=s;return o(t,"portal:user:createItem")}(t);if(p&&u)e=!0;else if(p){const t=[...D(s,"groupIds")||[],D(s,"properties.collaborationGroupId")];e=h.some((s=>function(s){return s.capabilities.includes("updateitemcontrol")}(s)&&o(t,s.id)))}return e}(t.reference.item,s.currentUser)),i}get blockedNotice(){let s;const{discussionDetails:t}=this;return t&&!m(t.reference)&&(s="group"===t.type?O.Group:O.Item),s}get shouldComminglePostList(){const{locationId:s}=this;return Boolean(s)}renderRequiresAuth(){const{intl:s}=this;return e("section",{class:"requires-auth"},e("calcite-icon",{icon:"frown",scale:"l"}),e("header",null,s.t("auth.title")),e("p",null,s.t("auth.text")))}renderEmpty(){const{intl:s,deletedDuringSession:t,blockedNotice:i}=this;return t||this.captureEmptyListImpression(),e("section",{class:"empty"},e("calcite-icon",{icon:"speech-bubble",scale:"l"}),e("header",null,s.t("emptyHeading")),e("p",null,s.t("emptyMessage")),e("calcite-button",{disabled:Boolean(i),onClick:this.handleNewPost,round:!0,scale:"l"},s.t("createPost")),i?e("arcgis-hub-discussions-blocked-notice",{variant:O.Item}):e("arcgis-hub-discussions-private-notice",null))}renderOptions(){const{discussionDetails:s,optionsSaving:t,intl:i,blockedNotice:a,optionsError:n}=this;return e("calcite-panel",{"data-element":"discussions-options-panel",description:s.reference.title,disabled:t,heading:i.t("options.heading"),onCalcitePanelBackClick:this.handleOptionsBack,showBackButton:!0},e("div",null,e("arcgis-hub-discussions-options",{layout:"vertical",ref:s=>{this.optionsElement=s},value:!a,variant:s.type}),e("div",null,e("calcite-button",{loading:t,onClick:this.handleSaveOptions,round:!0,scale:"l",type:"submit"},i.t(t?"options.saving":"options.save"))),n&&e("calcite-notice",{active:!0,closable:!0,color:"red",onCalciteNoticeClose:this.handleResetOptionsError},e("header",{slot:"title"},i.t("options.failure.title")),e("p",{slot:"message"},i.t("options.failure.message")))))}renderPostEditor(){const{unsavedFeatures:s,discussionDetails:t,hasMap:a,context:n,unsavedRelatedFeatures:o,unsavedExistingFeatures:c,isMobile:r}=this;return e(i,null,e("arcgis-hub-discussions-post-editor",{context:n,discussionDetails:t,hasMap:a,isMobile:r,slot:"list-before",unsavedExistingFeatures:c,unsavedFeatures:s,unsavedRelatedFeatures:o}),e("arcgis-hub-discussions-private-notice",{slot:"list-before"}))}renderAddOrCreatePostButton(){const{intl:s,handleNewPost:t,total:a,blockedNotice:n}=this;return a?e(i,null,e("calcite-button",{appearance:"outline",color:"blue",disabled:Boolean(n),"icon-start":"speech-bubble-plus",onClick:t,scale:"l",slot:"list-before",type:"button",width:"auto"},s.t("addPost")),n?e("arcgis-hub-discussions-blocked-notice",{slot:"list-before",variant:O.Item}):e("arcgis-hub-discussions-private-notice",{slot:"list-before"})):this.renderEmpty()}renderGoToAction(){const{enableGoTo:s,intl:t}=this;if(s)return e("calcite-action",{class:"discussions-go-to",onClick:this.handleGeometryGoTo,slot:"header-actions-end",text:t.t("showFullDiscussion")},e("calcite-icon",{class:"discussions-go-to-icon",icon:"extent",scale:"s"}))}renderPostList(){var s;const{discussionDetails:t,context:i,hasMap:a,isHub:n,unsavedFeatures:o,unsavedRelatedFeatures:c,unsavedExistingFeatures:r,postAggregates:l,showPostEditor:h,nextStart:d,loading:u,previousThread:p,locationId:g,intl:b,shouldRenderOptions:m,isMobile:v,dismissible:y}=this,w={"location-list":Boolean(g)},j=g&&(null===(s=t.displayField)||void 0===s?void 0:s.value)?t.displayField.value:b.t("list.heading"),O=g?b.t("location.summary"):null==t?void 0:t.reference.title;return e("calcite-panel",{closable:y,description:O,heading:j},this.renderGoToAction(),m&&e("calcite-action",{class:"discussions-options",onClick:this.handleDiscussionOptionsClick,slot:"header-actions-end",text:"Discussion Options"},e("calcite-icon",{class:"discussions-options-icon",icon:"gear",scale:"s"})),e("arcgis-hub-discussions-post-list",{class:w,context:i,discussionDetails:t,hasMap:a,isHub:n,isMobile:v,loading:u,nextStart:d,postAggregates:l,previousThread:p,unsavedExistingFeatures:r,unsavedFeatures:o,unsavedRelatedFeatures:c},!g&&(h?this.renderPostEditor():this.renderAddOrCreatePostButton())))}renderLoading(){return e("calcite-loader",{active:!0,label:this.intl.t("loading"),scale:"m",type:"indeterminate"})}renderError(){const{intl:s}=this;return e("section",null,e("calcite-icon",{icon:"frown",scale:"l"}),e("header",null,s.t("error.title")),e("p",null,s.t("error.text")),e("calcite-button",{appearance:"clear",color:"red",href:"https://hubstatus.arcgis.com/",onClick:this.handleCheckStatus,round:!0,scale:"l"},s.t("error.button")))}renderThread(){const{thread:s,context:t,hasMap:i,isHub:a,unsavedFeatures:n,unsavedRelatedFeatures:o,unsavedExistingFeatures:c,discussionDetails:r,dismissible:l,intl:h,handleResetThread:d,locationId:u,handleSelectThread:p,disableNavigation:g,isMobile:b}=this;let m="generic.heading",v="thread.summary",y=d;return(null==s?void 0:s.replyDetails)?(m="reply.heading",v="reply.summary",y=p):u&&(m="location.heading"),g&&(m="list.heading"),e("calcite-panel",{closable:l,description:h.t(v),heading:h.t(m),onCalcitePanelBackClick:y,showBackButton:!g},this.renderGoToAction(),e("arcgis-hub-discussions-thread",{context:t,discussionDetails:r,hasMap:i,isHub:a,isMobile:b,thread:s,unsavedExistingFeatures:c,unsavedFeatures:n,unsavedRelatedFeatures:o}))}render(){return e(a,{"data-element":"discussions"},this.view())}static get assetsDirs(){return["locales"]}get element(){return n(this)}static get watchers(){return{postId:["handlePostIdChange"],replyId:["handleReplyIdChange"],locationId:["handleLocationIdChange"],context:["initialize"]}}};P([j({timeout:50})],A.prototype,"reinitialize",null),P([j({timeout:1e3})],A.prototype,"handleDOMReady",null),P([f()],A.prototype,"captureEmptyListImpression",null),P([j({timeout:250})],A.prototype,"checkIsMobile",null),A.style='.sc-arcgis-hub-discussions-h{display:block;height:100%;overflow:auto}section.sc-arcgis-hub-discussions{margin-top:1rem;margin-bottom:1rem;margin-left:0.75rem;margin-right:0.75rem;display:grid;gap:0.75rem;border-radius:0.25rem;padding:0.75rem;--tw-shadow:0 2px 8px 0 rgba(0, 0, 0, 0.12);--tw-shadow-colored:0 2px 8px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}header.sc-arcgis-hub-discussions{margin:0px;font-size:var(--calcite-font-size-1);line-height:1.5rem;font-weight:var(--calcite-font-weight-bold)}p.sc-arcgis-hub-discussions{margin:0px;font-size:var(--calcite-font-size--0);line-height:1.375rem}section.sc-arcgis-hub-discussions calcite-button.sc-arcgis-hub-discussions{width:-moz-fit-content;width:fit-content}calcite-button[icon-start="speech-bubble-plus"].sc-arcgis-hub-discussions{margin-top:1.5rem;margin-bottom:1.5rem;margin-left:1rem;margin-right:1rem;display:block}arcgis-hub-discussions-private-notice.sc-arcgis-hub-discussions,arcgis-hub-discussions-blocked-notice.sc-arcgis-hub-discussions{margin-left:1rem;margin-right:1rem;margin-bottom:1.5rem}.empty.sc-arcgis-hub-discussions arcgis-hub-discussions-private-notice.sc-arcgis-hub-discussions,.empty.sc-arcgis-hub-discussions arcgis-hub-discussions-blocked-notice.sc-arcgis-hub-discussions{margin:0px;margin-top:0.25rem}arcgis-hub-discussions-thread.sc-arcgis-hub-discussions{padding-top:1rem;padding-bottom:1rem}arcgis-hub-discussions-post-list.location-list.sc-arcgis-hub-discussions{padding-top:0.25rem;padding-bottom:0.25rem}[data-element="discussions-options-panel"].sc-arcgis-hub-discussions>div.sc-arcgis-hub-discussions{background-color:var(--calcite-ui-foreground-1);padding:1rem}[data-element="discussions-options-panel"].sc-arcgis-hub-discussions>div.sc-arcgis-hub-discussions div.sc-arcgis-hub-discussions{display:flex;justify-content:flex-end;padding-top:0.5rem}[data-element="discussions-options-panel"].sc-arcgis-hub-discussions>div.sc-arcgis-hub-discussions div.sc-arcgis-hub-discussions+calcite-notice.sc-arcgis-hub-discussions{margin-top:1rem;width:100%}.discussions-options.sc-arcgis-hub-discussions:active .discussions-options-icon.sc-arcgis-hub-discussions{--tw-text-opacity:1;color:rgb(21 21 21 / var(--tw-text-opacity))}.discussions-go-to.sc-arcgis-hub-discussions:active .discussions-go-to-icon.sc-arcgis-hub-discussions{--tw-text-opacity:1;color:rgb(21 21 21 / var(--tw-text-opacity))}';let M=class{constructor(e){s(this,e),this.arcgisHubMapViewReady=t(this,"arcgisHubMapViewReady",7),this.center="0,0",this.zoom=2,this.basemap="topo-vector",v(this,"_setContainer")}handleBasemapChanged(s){this.map.basemap=R.fromId(s)}handleCenterChanged(s){this.center=s;const[t,e]=this.centerToCoords(s);this.view.center=G.fromJSON({longitude:t,latitude:e})}handleGraphicsChanged(s){this.isMapLoaded()&&(this.view.graphics.removeAll(),s&&this.view.graphics.addMany(this.buildGraphics()))}handleExtentChanged(){this.isMapLoaded()&&this.setExtent()}isMapLoaded(){return!!this.map}centerToCoords(s){return s.split(",").map((s=>+s))}createGraphic(s){const t=s;let e=t.clone?t.clone():new T(t);var i,a;return a=e,((i=t).symbol&&!a.symbol||i.geometry&&!a.geometry)&&(e=T.fromJSON(t)),e}buildGraphics(){try{return this.graphics.filter(Boolean).map((s=>this.createGraphic(s)))}catch(s){return[]}}setExtent(){let s=new H(this.extent);this.expand&&(s=s.expand(this.expand)),this.view.extent=s}_setContainer(s){this._container=s}async componentDidLoad(){const{mapId:s}=this;F(),this.map=s?new I({portalItem:{id:s,portal:{url:"https://qa-pre-a-hub.mapsqa.arcgis.com/"}}}):new x({basemap:R.fromId(this.basemap)}),this.view=new k({map:this.map,container:this._container,center:this.centerToCoords(this.center),zoom:this.zoom}),this.extent&&this.setExtent(),this.view.graphics.addMany(this.buildGraphics()),this.arcgisHubMapViewReady.emit({view:this.view})}render(){return e(a,null,e("div",{ref:this._setContainer}))}static get watchers(){return{basemap:["handleBasemapChanged"],center:["handleCenterChanged"],graphics:["handleGraphicsChanged"],extent:["handleExtentChanged"],expand:["handleExtentChanged"]}}};M.style=".sc-arcgis-hub-map-h{display:block}.esri-view.sc-arcgis-hub-map{height:inherit;width:inherit}";export{A as arcgis_hub_discussions,M as arcgis_hub_map}