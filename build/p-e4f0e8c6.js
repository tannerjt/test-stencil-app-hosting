import{d as e,a as t}from"./p-267d48f6.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */function o(){const{classList:o}=document.body,n=window.matchMedia("(prefers-color-scheme: dark)").matches,d=()=>o.contains(e)||o.contains(t)&&n?"dark":"light",c=e=>document.body.dispatchEvent(new CustomEvent("calciteModeChange",{bubbles:!0,detail:{mode:e}})),i=e=>{a!==e&&c(e),a=e};let a=d();c(a),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",(e=>i(e.matches?"dark":"light"))),new MutationObserver((()=>i(d()))).observe(document.body,{attributes:!0,attributeFilter:["class"]})}
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const n=()=>{"undefined"!=typeof window&&"undefined"!=typeof location&&"undefined"!=typeof document&&window.location===location&&window.document===document&&("interactive"===document.readyState?o():document.addEventListener("DOMContentLoaded",(()=>o()),{once:!0}))};export{n as g}