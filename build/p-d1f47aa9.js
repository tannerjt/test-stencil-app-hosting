import{a as n}from"./p-a7bcab11.js";import{g as t}from"./p-5a1554f1.js";
/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.5
 */const s={};function o(){throw new Error("could not fetch component message bundle")}function c(n){n.messages={...n.defaultMessages,...n.messageOverrides}}async function a(n){n.defaultMessages=await i(n,n.effectiveLocale),c(n)}async function i(c,a){const{el:i}=c,e=i.tagName.toLowerCase().replace("calcite-","");return async function(t,c){const a=`${c}_${t}`;return s[a]||(s[a]=fetch(n(`./assets/${c}/t9n/messages_${t}.json`)).then((n=>(n.ok||o(),n.json()))).catch((()=>o()))),s[a]}(t(a,"t9n"),e)}async function e(n,t){n.defaultMessages=await i(n,t),c(n)}function f(n){n.onMessagesChange=r}function u(n){n.onMessagesChange=void 0}function r(){c(this)}export{f as c,u as d,a as s,e as u}