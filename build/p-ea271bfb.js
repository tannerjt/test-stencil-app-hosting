import{a as n}from"./p-a7bcab11.js";import{c as a}from"./p-b88fa26f.js";import{g as o}from"./p-5a1554f1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const s={},t={};async function r(a){const f=o(a);if(s[f])return s[f];t[f]||(t[f]=fetch(n(`./assets/date-picker/nls/${f}.json`)).then((n=>n.json())).catch((()=>(console.error(`Translations for "${f}" not found or invalid, falling back to english`),r("en")))));const i=await t[f];return s[f]=i,i}function f(n){return n.map(((n,o)=>a(n,1===o)))}export{r as a,f as g}