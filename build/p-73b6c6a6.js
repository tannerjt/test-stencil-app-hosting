import{n as t}from"./p-b71772f1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const n="CALCITE-COMBOBOX-ITEM",o="CALCITE-COMBOBOX-ITEM-GROUP",c="CALCITE-COMBOBOX-ITEM, CALCITE-COMBOBOX-ITEM-GROUP";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */
function O(t){const n=t.parentElement?.closest(c),o=n?.parentElement?.closest(c);return[n,o].filter((t=>t))}function e(t){return t.ancestors?.filter((t=>"CALCITE-COMBOBOX-ITEM"===t.nodeName))||[]}function C(n){return t(n.querySelectorAll("calcite-combobox-item"))}function a(n){return t(n.querySelectorAll("calcite-combobox-item")).filter((t=>t.selected)).length>0}function r(t){return document.evaluate("ancestor::calcite-combobox-item",t,null,XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE,null).snapshotLength}export{c as C,r as a,e as b,C as c,n as d,o as e,O as g,a as h}