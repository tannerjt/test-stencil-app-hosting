import{r as t,g as e}from"./p-18586bed.js";const n=/[\x00-\x1F\x7F-\x9F\xA0]/g;function o(e,n){const o=a(e,n),c=Object.assign({httpMethod:"GET"},n);return t(o,c)}const a=(t,n)=>`${"string"==typeof n?n:e(n)}/content/items/${t}`;function c(e,n){const o=`${a(e,n)}/data`,c=Object.assign({httpMethod:"GET",params:{}},n);return c.file&&(c.params.f=null),t(o,c).catch((t=>{if(!RegExp(/The string did not match the expected pattern|(Unexpected end of (JSON input|data at line 1 column 1))/i).test(t.message))throw t}))}function r(e,n){const o=`${a(e,n)}/groups`;return t(o,n)}function s(e,o){return function(e,o){const{fileName:c="iteminfo.xml",readAs:r="text"}=o||{};return function(e,o,c,r){const s=`${a(e,r)}${o}`,i=Object.assign({params:{}},r),u=i.rawResponse;return i.rawResponse=!0,i.params.f=null,t(s,i).then((t=>u?t:"json"!==c?t[c]():t.text().then((t=>JSON.parse(t.replace(n,""))))))}(e,`/info/${c}`,r,Object.assign({httpMethod:"GET"},o))}(e,Object.assign(Object.assign({},o),{fileName:"metadata/metadata.xml"}))}export{c as a,s as b,o as c,r as g}