import{r as t,h as i,g as a,f as n}from"./p-a7bcab11.js";import{g as e}from"./p-3b3bc7ac.js";import{c as r}from"./p-ccbfda19.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */function c(t,i,a){const n=i[0]-t[0];return n?(3*(i[1]-t[1])/n-a)/2:a}function o(t,i,a,n,e){const[r,c]=t,[o,l]=i,s=(o-r)/3;return`C ${e([r+s,c+s*a]).join(",")} ${e([o-s,l-s*n]).join(",")} ${e([o,l]).join(",")}`}let l=class{constructor(i){t(this,i),this.graphId=`calcite-graph-${e()}`,this.resizeObserver=r("resize",(()=>n(this))),this.data=[],this.colorStops=void 0,this.highlightMin=void 0,this.highlightMax=void 0,this.min=void 0,this.max=void 0}connectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.observe(this.el)}disconnectedCallback(){var t;null===(t=this.resizeObserver)||void 0===t||t.disconnect()}render(){const{data:t,colorStops:a,el:n,highlightMax:e,highlightMin:r,min:l,max:s}=this,h=this.graphId,{clientHeight:m,clientWidth:d}=n;if(!t||0===t.length)return i("svg",{"aria-hidden":"true",class:"svg",height:m,preserveAspectRatio:"none",viewBox:`0 0 ${d} ${m}`,width:d});const{min:p,max:f}=function(t){const[i,a]=t[0];return t.reduce((({min:t,max:i},[a,n])=>({min:[Math.min(t[0],a),Math.min(t[1],n)],max:[Math.max(i[0],a),Math.max(i[1],n)]})),{min:[i,a],max:[i,a]})}(t);let u=p,g=f;(l<p[0]||l>p[0])&&(u=[l,0]),(s>f[0]||s<f[0])&&(g=[s,f[1]]);const $=function({width:t,height:i,min:a,max:n}){const e=n[0]-a[0],r=n[1]-a[1];return n=>[(n[0]-a[0])/e*t,i-n[1]/r*i]}({min:u,max:g,width:d,height:m}),[v]=$([r,g[1]]),[y]=$([e,g[1]]),x=function({data:t,min:i,max:a,t:n}){if(0===t.length)return"";const[e,r]=n(t[0]),[l,s]=n(i),[h]=n(a);let m,d,p;const f=t.reduce(((i,a,e)=>{if(d=t[e-2],p=t[e-1],e>1){const t=function(t,i,a){const n=i[0]-t[0],e=a[0]-i[0],r=(i[1]-t[1])/(n||e<0&&0),c=(a[1]-i[1])/(e||n<0&&0),o=(r*e+c*n)/(n+e);return(Math.sign(r)+Math.sign(c))*Math.min(Math.abs(r),Math.abs(c),.5*Math.abs(o))||0}(d,p,a),e=void 0===m?c(d,p,t):m,r=o(d,p,e,t,n);return m=t,`${i} ${r}`}return i}),`M ${l},${s} L ${l},${r} L ${e},${r}`),u=t[t.length-1];return`${f} ${o(p,u,m,c(p,u,m),n)} L ${h},${s} Z`}({data:t,min:p,max:f,t:$}),k=a?`url(#linear-gradient-${h})`:void 0;return i("svg",{"aria-hidden":"true",class:"svg",height:m,preserveAspectRatio:"none",viewBox:`0 0 ${d} ${m}`,width:d},a?i("defs",null,i("linearGradient",{id:`linear-gradient-${h}`,x1:"0",x2:"1",y1:"0",y2:"0"},a.map((({offset:t,color:a,opacity:n})=>i("stop",{offset:100*t+"%","stop-color":a,"stop-opacity":n}))))):null,void 0!==r?[i("mask",{height:"100%",id:`${h}1`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n            M 0,0\n            L ${v-1},0\n            L ${v-1},${m}\n            L 0,${m}\n            Z\n          `,fill:"white"})),i("mask",{height:"100%",id:`${h}2`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n            M ${v+1},0\n            L ${y-1},0\n            L ${y-1},${m}\n            L ${v+1}, ${m}\n            Z\n          `,fill:"white"})),i("mask",{height:"100%",id:`${h}3`,width:"100%",x:"0%",y:"0%"},i("path",{d:`\n                M ${y+1},0\n                L ${d},0\n                L ${d},${m}\n                L ${y+1}, ${m}\n                Z\n              `,fill:"white"})),i("path",{class:"graph-path",d:x,fill:k,mask:`url(#${h}1)`}),i("path",{class:"graph-path--highlight",d:x,fill:k,mask:`url(#${h}2)`}),i("path",{class:"graph-path",d:x,fill:k,mask:`url(#${h}3)`})]:i("path",{class:"graph-path",d:x,fill:k}))}get el(){return a(this)}};l.style="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host{display:block;block-size:100%}.svg{fill:currentColor;stroke:transparent;margin:0px;display:block;block-size:100%;inline-size:100%;padding:0px}.svg .graph-path--highlight{fill:var(--calcite-ui-brand);opacity:0.5}";export{l as calcite_graph}