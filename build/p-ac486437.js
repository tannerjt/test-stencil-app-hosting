/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */
const n=new WeakMap,a=new WeakMap;function e(e){a.set(e,new Promise((a=>n.set(e,a))))}function o(a){n.get(a)()}function s(n){return a.get(n)}export{o as a,s as c,e as s}