import{f as t}from"./p-a7bcab11.js";import{c as o}from"./p-ccbfda19.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const c=new Set;let n;const s={childList:!0};function a(t){n||(n=o("mutation",i)),n.observe(t.el,s)}function f(t){c.delete(t.el),i(n.takeRecords()),n.disconnect();for(const[t]of c.entries())n.observe(t,s)}function i(o){o.forEach((({target:o})=>{t(o)}))}export{a as c,f as d}