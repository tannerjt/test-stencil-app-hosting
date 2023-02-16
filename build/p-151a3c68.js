import{c as t}from"./p-dfe5a97d.js";var e=t((function(t,e){const n="[:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*",r=new RegExp("^"+n+"$");e.isExist=function(t){return void 0!==t},e.isEmptyObject=function(t){return 0===Object.keys(t).length},e.merge=function(t,e,n){if(e){const r=Object.keys(e),i=r.length;for(let o=0;o<i;o++)t[r[o]]="strict"===n?[e[r[o]]]:e[r[o]]}},e.getValue=function(t){return e.isExist(t)?t:""},e.buildOptions=function(t,e,n){let r={};if(!t)return e;for(let i=0;i<n.length;i++)r[n[i]]=void 0!==t[n[i]]?t[n[i]]:e[n[i]];return r},e.isTagNameInArrayMode=function(t,e,n){return!1!==e&&(e instanceof RegExp?e.test(t):"function"==typeof e?!!e(t,n):"strict"===e)},e.isName=function(t){return!(null==r.exec(t))},e.getAllMatches=function(t,e){const n=[];let r=e.exec(t);for(;r;){const i=[];i.startIndex=e.lastIndex-r[0].length;const o=r.length;for(let t=0;t<o;t++)i.push(r[t]);n.push(i),r=e.exec(t)}return n},e.nameRegexp=n}));const n=function(t,r,i){const o={};if(!r.alwaysCreateTextNode&&(!t.child||e.isEmptyObject(t.child))&&(!t.attrsMap||e.isEmptyObject(t.attrsMap)))return e.isExist(t.val)?t.val:"";if(e.isExist(t.val)&&("string"!=typeof t.val||""!==t.val&&t.val!==r.cdataPositionChar)){const n=e.isTagNameInArrayMode(t.tagname,r.arrayMode,i);o[r.textNodeName]=n?[t.val]:t.val}e.merge(o,t.attrsMap,r.arrayMode);const s=Object.keys(t.child);for(let u=0;u<s.length;u++){const a=s[u];if(t.child[a]&&t.child[a].length>1){o[a]=[];for(let e in t.child[a])t.child[a].hasOwnProperty(e)&&o[a].push(n(t.child[a][e],r,a))}else{const s=n(t.child[a][0],r,a),u=!0===r.arrayMode&&"object"==typeof s||e.isTagNameInArrayMode(a,r.arrayMode,i);o[a]=u?[s]:s}}return o};var r={convertToJson:n},i=function(t,e,n){this.tagname=t,this.parent=e,this.child={},this.attrsMap={},this.val=n,this.addChild=function(t){Array.isArray(this.child[t.tagname])?this.child[t.tagname].push(t):this.child[t.tagname]=[t]}};const o=/^[-+]?0x[a-fA-F0-9]+$/,s=/^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const u={hex:!0,leadingZeros:!0,decimalPoint:".",eNotation:!0};const a=e.buildOptions;"<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)".replace(/NAME/g,e.nameRegexp),!Number.parseInt&&window.parseInt&&(Number.parseInt=window.parseInt),!Number.parseFloat&&window.parseFloat&&(Number.parseFloat=window.parseFloat);const f={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,ignoreNameSpace:!1,allowBooleanAttributes:!1,parseNodeValue:!0,parseAttributeValue:!1,arrayMode:!1,trimValues:!0,cdataTagName:!1,cdataPositionChar:"\\c",numParseOptions:{hex:!0,leadingZeros:!0},tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t},stopNodes:[],alwaysCreateTextNode:!1};var c=f;const l=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","ignoreNameSpace","allowBooleanAttributes","parseNodeValue","parseAttributeValue","arrayMode","trimValues","cdataTagName","cdataPositionChar","tagValueProcessor","attrValueProcessor","parseTrueNumberOnly","numParseOptions","stopNodes","alwaysCreateTextNode"];var h=l;function d(t,e,n){return e&&(n.trimValues&&(e=e.trim()),e=m(e=n.tagValueProcessor(e,t),n.parseNodeValue,n.numParseOptions)),e}function g(t,e){if(e.ignoreNameSpace){const e=t.split(":"),n="/"===t.charAt(0)?"/":"";if("xmlns"===e[0])return"";2===e.length&&(t=n+e[1])}return t}function m(t,n,r){if(n&&"string"==typeof t){const e=t.trim();return"true"===e||"false"!==e&&function(t,e={}){if(e=Object.assign({},u,e),!t||"string"!=typeof t)return t;let n=t.trim();if(void 0!==e.skipLike&&e.skipLike.test(n))return t;if(e.hex&&o.test(n))return Number.parseInt(n,16);{const i=s.exec(n);if(i){const o=i[1],s=i[2];let u=(r=i[3])&&-1!==r.indexOf(".")?("."===(r=r.replace(/0+$/,""))?r="0":"."===r[0]?r="0"+r:"."===r[r.length-1]&&(r=r.substr(0,r.length-1)),r):r;const a=i[4]||i[6];if(!e.leadingZeros&&s.length>0&&o&&"."!==n[2])return t;if(!e.leadingZeros&&s.length>0&&!o&&"."!==n[1])return t;{const r=Number(n),i=""+r;return-1!==i.search(/[eE]/)||a?e.eNotation?r:t:-1!==n.indexOf(".")?"0"===i&&""===u||i===u||o&&i==="-"+u?r:t:s?u===i||o+u===i?r:t:n===i||n===o+i?r:t}}return t}var r}(t,r)}return e.isExist(t)?t:""}const b=new RegExp("([^\\s=]+)\\s*(=\\s*(['\"])(.*?)\\3)?","g");function N(t,n){if(!n.ignoreAttributes&&"string"==typeof t){t=t.replace(/\r?\n/g," ");const r=e.getAllMatches(t,b),i=r.length,o={};for(let t=0;t<i;t++){const e=g(r[t][1],n);e.length&&(void 0!==r[t][4]?(n.trimValues&&(r[t][4]=r[t][4].trim()),r[t][4]=n.attrValueProcessor(r[t][4],e),o[n.attributeNamePrefix+e]=m(r[t][4],n.parseAttributeValue,n.numParseOptions)):n.allowBooleanAttributes&&(o[n.attributeNamePrefix+e]=!0))}if(!Object.keys(o).length)return;if(n.attrNodeName){const t={};return t[n.attrNodeName]=o,t}return o}}function v(t,e){let n,r="";for(let i=e;i<t.length;i++){let e=t[i];if(n)e===n&&(n="");else if('"'===e||"'"===e)n=e;else{if(">"===e)return{data:r,index:i};"\t"===e&&(e=" ")}r+=e}}function p(t,e,n,r){const i=t.indexOf(e,n);if(-1===i)throw new Error(r);return i+e.length-1}var A={defaultOptions:c,props:h,getTraversalObj:function(t,n){t=t.replace(/\r\n?/g,"\n"),n=a(n,f,l);const r=new i("!xml");let o=r,s="";for(let r=0;r<t.length;r++)if("<"===t[r])if("/"===t[r+1]){const i=p(t,">",r,"Closing Tag is not closed.");let u=t.substring(r+2,i).trim();if(n.ignoreNameSpace){const t=u.indexOf(":");-1!==t&&(u=u.substr(t+1))}o&&(o.val=o.val?e.getValue(o.val)+""+d(u,s,n):d(u,s,n)),n.stopNodes.length&&n.stopNodes.includes(o.tagname)&&(o.child=[],null==o.attrsMap&&(o.attrsMap={}),o.val=t.substr(o.startIndex+1,r-o.startIndex-1)),o=o.parent,s="",r=i}else if("?"===t[r+1])r=p(t,"?>",r,"Pi Tag is not closed.");else if("!--"===t.substr(r+1,3))r=p(t,"--\x3e",r,"Comment is not closed.");else if("!D"===t.substr(r+1,2)){const e=p(t,">",r,"DOCTYPE is not closed.");r=t.substring(r,e).indexOf("[")>=0?t.indexOf("]>",r)+1:e}else if("!["===t.substr(r+1,2)){const u=p(t,"]]>",r,"CDATA is not closed.")-2,a=t.substring(r+9,u);if(s&&(o.val=e.getValue(o.val)+""+d(o.tagname,s,n),s=""),n.cdataTagName){const t=new i(n.cdataTagName,o,a);o.addChild(t),o.val=e.getValue(o.val)+n.cdataPositionChar,a&&(t.val=a)}else o.val=(o.val||"")+(a||"");r=u+2}else{const u=v(t,r+1);let a=u.data;const f=u.index,c=a.indexOf(" ");let l=a,h=!0;if(-1!==c&&(l=a.substr(0,c).replace(/\s\s*$/,""),a=a.substr(c+1)),n.ignoreNameSpace){const t=l.indexOf(":");-1!==t&&(l=l.substr(t+1),h=l!==u.data.substr(t+1))}if(o&&s&&"!xml"!==o.tagname&&(o.val=e.getValue(o.val)+""+d(o.tagname,s,n)),a.length>0&&a.lastIndexOf("/")===a.length-1){"/"===l[l.length-1]?(l=l.substr(0,l.length-1),a=l):a=a.substr(0,a.length-1);const t=new i(l,o,"");l!==a&&(t.attrsMap=N(a,n)),o.addChild(t)}else{const t=new i(l,o);n.stopNodes.length&&n.stopNodes.includes(t.tagname)&&(t.startIndex=f),l!==a&&h&&(t.attrsMap=N(a,n)),o.addChild(t),o=t}s="",r=f}else s+=t[r];return r}};const F={allowBooleanAttributes:!1},w=["allowBooleanAttributes"];function C(t,e){const n=e;for(;e<t.length;e++)if("?"!=t[e]&&" "!=t[e]);else{const r=t.substr(n,e-n);if(e>5&&"xml"===r)return O("InvalidXml","XML declaration allowed only at the start of the document.",j(t,e));if("?"==t[e]&&">"==t[e+1]){e++;break}}return e}function x(t,e){if(t.length>e+5&&"-"===t[e+1]&&"-"===t[e+2]){for(e+=3;e<t.length;e++)if("-"===t[e]&&"-"===t[e+1]&&">"===t[e+2]){e+=2;break}}else if(t.length>e+8&&"D"===t[e+1]&&"O"===t[e+2]&&"C"===t[e+3]&&"T"===t[e+4]&&"Y"===t[e+5]&&"P"===t[e+6]&&"E"===t[e+7]){let n=1;for(e+=8;e<t.length;e++)if("<"===t[e])n++;else if(">"===t[e]&&(n--,0===n))break}else if(t.length>e+9&&"["===t[e+1]&&"C"===t[e+2]&&"D"===t[e+3]&&"A"===t[e+4]&&"T"===t[e+5]&&"A"===t[e+6]&&"["===t[e+7])for(e+=8;e<t.length;e++)if("]"===t[e]&&"]"===t[e+1]&&">"===t[e+2]){e+=2;break}return e}function y(t,e){let n="",r="",i=!1;for(;e<t.length;e++){if('"'===t[e]||"'"===t[e])""===r?r=t[e]:r!==t[e]||(r="");else if(">"===t[e]&&""===r){i=!0;break}n+=t[e]}return""===r&&{value:n,index:e,tagClosed:i}}const D=new RegExp("(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['\"])(([\\s\\S])*?)\\5)?","g");function T(t,n){const r=e.getAllMatches(t,D),i={};for(let t=0;t<r.length;t++){if(0===r[t][1].length)return O("InvalidAttr","Attribute '"+r[t][2]+"' has no space in starting.",I(r[t]));if(void 0===r[t][3]&&!n.allowBooleanAttributes)return O("InvalidAttr","boolean attribute '"+r[t][2]+"' is not allowed.",I(r[t]));const e=r[t][2];if(!E(e))return O("InvalidAttr","Attribute '"+e+"' is an invalid name.",I(r[t]));if(i.hasOwnProperty(e))return O("InvalidAttr","Attribute '"+e+"' is repeated.",I(r[t]));i[e]=1}return!0}function P(t,e){if(";"===t[++e])return-1;if("#"===t[e])return function(t,e){let n=/\d/;for("x"===t[e]&&(e++,n=/[\da-fA-F]/);e<t.length;e++){if(";"===t[e])return e;if(!t[e].match(n))break}return-1}(t,++e);let n=0;for(;e<t.length;e++,n++)if(!(t[e].match(/\w/)&&n<20)){if(";"===t[e])break;return-1}return e}function O(t,e,n){return{err:{code:t,msg:e,line:n.line||n,col:n.col}}}function E(t){return e.isName(t)}function j(t,e){const n=t.substring(0,e).split(/\r?\n/);return{line:n.length,col:n[n.length-1].length+1}}function I(t){return t.startIndex+t[1].length}var V=function(t,n){n=e.buildOptions(n,F,w);const r=[];let i=!1,o=!1;"\ufeff"===t[0]&&(t=t.substr(1));for(let s=0;s<t.length;s++)if("<"===t[s]&&"?"===t[s+1]){if(s+=2,s=C(t,s),s.err)return s}else{if("<"!==t[s]){if(" "===t[s]||"\t"===t[s]||"\n"===t[s]||"\r"===t[s])continue;return O("InvalidChar","char '"+t[s]+"' is not expected.",j(t,s))}{let u=s;if(s++,"!"===t[s]){s=x(t,s);continue}{let a=!1;"/"===t[s]&&(a=!0,s++);let f="";for(;s<t.length&&">"!==t[s]&&" "!==t[s]&&"\t"!==t[s]&&"\n"!==t[s]&&"\r"!==t[s];s++)f+=t[s];if(f=f.trim(),"/"===f[f.length-1]&&(f=f.substring(0,f.length-1),s--),!e.isName(f)){let e;return e=0===f.trim().length?"Invalid space after '<'.":"Tag '"+f+"' is an invalid name.",O("InvalidTag",e,j(t,s))}const c=y(t,s);if(!1===c)return O("InvalidAttr","Attributes for '"+f+"' have open quote.",j(t,s));let l=c.value;if(s=c.index,"/"===l[l.length-1]){const e=s-l.length;l=l.substring(0,l.length-1);const r=T(l,n);if(!0!==r)return O(r.err.code,r.err.msg,j(t,e+r.err.line));i=!0}else if(a){if(!c.tagClosed)return O("InvalidTag","Closing tag '"+f+"' doesn't have proper closing.",j(t,s));if(l.trim().length>0)return O("InvalidTag","Closing tag '"+f+"' can't have attributes or invalid starting.",j(t,u));{const e=r.pop();if(f!==e.tagName){let n=j(t,e.tagStartPos);return O("InvalidTag","Expected closing tag '"+e.tagName+"' (opened in line "+n.line+", col "+n.col+") instead of closing tag '"+f+"'.",j(t,u))}0==r.length&&(o=!0)}}else{const e=T(l,n);if(!0!==e)return O(e.err.code,e.err.msg,j(t,s-l.length+e.err.line));if(!0===o)return O("InvalidXml","Multiple possible root nodes found.",j(t,s));r.push({tagName:f,tagStartPos:u}),i=!0}for(s++;s<t.length;s++)if("<"===t[s]){if("!"===t[s+1]){s++,s=x(t,s);continue}if("?"!==t[s+1])break;if(s=C(t,++s),s.err)return s}else if("&"===t[s]){const e=P(t,s);if(-1==e)return O("InvalidChar","char '&' is not expected.",j(t,s));s=e}"<"===t[s]&&s--}}}return i?1==r.length?O("InvalidTag","Unclosed tag '"+r[0].tagName+"'.",j(t,r[0].tagStartPos)):!(r.length>0)||O("InvalidXml","Invalid '"+JSON.stringify(r.map((t=>t.tagName)),null,4).replace(/\r?\n/g,"")+"' found.",{line:1,col:1}):O("InvalidXml","Start tag expected.",1)};const S=function(t){return String.fromCharCode(t)},k={nilChar:S(176),missingChar:S(201),nilPremitive:S(175),missingPremitive:S(200),emptyChar:S(178),emptyValue:S(177),boundryChar:S(179),objStart:S(198),arrStart:S(204),arrayEnd:S(185)},M=[k.nilChar,k.nilPremitive,k.missingChar,k.missingPremitive,k.boundryChar,k.emptyChar,k.emptyValue,k.arrayEnd,k.objStart,k.arrStart],B=function(t,e,n){if("string"==typeof e)return X(t&&t[0]&&void 0!==t[0].val?t[0].val:t);{const i=void 0===(r=t)?k.missingChar:null===r?k.nilChar:!(r.child&&0===Object.keys(r.child).length&&(!r.attrsMap||0===Object.keys(r.attrsMap).length))||k.emptyChar;if(!0===i){let r="";if(Array.isArray(e)){r+=k.arrStart;const i=e[0],o=t.length;if("string"==typeof i)for(let e=0;e<o;e++){const n=X(t[e].val);r=Z(r,n)}else for(let e=0;e<o;e++){const o=B(t[e],i,n);r=Z(r,o)}r+=k.arrayEnd}else{r+=k.objStart;const i=Object.keys(e);Array.isArray(t)&&(t=t[0]);for(let o in i){const s=i[o];let u;u=B(!n.ignoreAttributes&&t.attrsMap&&t.attrsMap[s]?t.attrsMap[s]:s===n.textNodeName?t.val:t.child[s],e[s],n),r=Z(r,u)}}return r}return i}var r},X=function(t){switch(t){case void 0:return k.missingPremitive;case null:return k.nilPremitive;case"":return k.emptyValue;default:return t}},Z=function(t,e){return $(e[0])||$(t[t.length-1])||(t+=k.boundryChar),t+e},$=function(t){return-1!==M.indexOf(t)},R=e.buildOptions;var _=function(t,e,n){return n=R(n,A.defaultOptions,A.props),B(t,e,n)};const z=e.buildOptions,J=function(t,n){let r="{";const i=Object.keys(t.child);for(let e=0;e<i.length;e++){const o=i[e];if(t.child[o]&&t.child[o].length>1){r+='"'+o+'" : [ ';for(let e in t.child[o])r+=J(t.child[o][e],n)+" , ";r=r.substr(0,r.length-1)+" ] "}else r+='"'+o+'" : '+J(t.child[o][0],n)+" ,"}return e.merge(r,t.attrsMap),e.isEmptyObject(r)?e.isExist(t.val)?t.val:"":(e.isExist(t.val)&&("string"!=typeof t.val||""!==t.val&&t.val!==n.cdataPositionChar)&&(r+='"'+n.textNodeName+'" : '+(!0!==(o=t.val)&&!1!==o&&isNaN(o)?'"'+o+'"':o)),","===r[r.length-1]&&(r=r.substr(0,r.length-2)),r+"}");var o};var Y=function(t,e){return(e=z(e,A.defaultOptions,A.props)).indentBy=e.indentBy||"",J(t,e)};const q=e.buildOptions,L={attributeNamePrefix:"@_",attrNodeName:!1,textNodeName:"#text",ignoreAttributes:!0,cdataTagName:!1,cdataPositionChar:"\\c",format:!1,indentBy:"  ",supressEmptyNode:!1,tagValueProcessor:function(t){return t},attrValueProcessor:function(t){return t}},U=["attributeNamePrefix","attrNodeName","textNodeName","ignoreAttributes","cdataTagName","cdataPositionChar","format","indentBy","supressEmptyNode","tagValueProcessor","attrValueProcessor","rootNodeName"];function G(t){this.options=q(t,L,U),this.options.ignoreAttributes||this.options.attrNodeName?this.isAttribute=function(){return!1}:(this.attrPrefixLen=this.options.attributeNamePrefix.length,this.isAttribute=it),this.isCDATA=this.options.cdataTagName?ot:function(){return!1},this.replaceCDATAstr=K,this.replaceCDATAarr=Q,this.processTextOrObjNode=H,this.options.format?(this.indentate=rt,this.tagEndChar=">\n",this.newLine="\n"):(this.indentate=function(){return""},this.tagEndChar=">",this.newLine=""),this.options.supressEmptyNode?(this.buildTextNode=nt,this.buildObjNode=tt):(this.buildTextNode=et,this.buildObjNode=W),this.buildTextValNode=et,this.buildObjectNode=W}function H(t,e,n){const r=this.j2x(t,n+1);return void 0!==t[this.options.textNodeName]&&1===Object.keys(t).length?this.buildTextNode(r.val,e,r.attrStr,n):this.buildObjNode(r.val,e,r.attrStr,n)}function K(t,e){return t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t?t+"<![CDATA["+e+"]]"+this.tagEndChar:t.replace(this.options.cdataPositionChar,"<![CDATA["+e+"]]"+this.tagEndChar)}function Q(t,e){if(t=this.options.tagValueProcessor(""+t),""===this.options.cdataPositionChar||""===t)return t+"<![CDATA["+e.join("]]><![CDATA[")+"]]"+this.tagEndChar;for(let n in e)t=t.replace(this.options.cdataPositionChar,"<![CDATA["+e[n]+"]]>");return t+this.newLine}function W(t,e,n,r){return n&&-1===t.indexOf("<")?this.indentate(r)+"<"+e+n+">"+t+"</"+e+this.tagEndChar:this.indentate(r)+"<"+e+n+this.tagEndChar+t+this.indentate(r)+"</"+e+this.tagEndChar}function tt(t,e,n,r){return""!==t?this.buildObjectNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function et(t,e,n,r){return this.indentate(r)+"<"+e+n+">"+this.options.tagValueProcessor(t)+"</"+e+this.tagEndChar}function nt(t,e,n,r){return""!==t?this.buildTextValNode(t,e,n,r):this.indentate(r)+"<"+e+n+"/"+this.tagEndChar}function rt(t){return this.options.indentBy.repeat(t)}function it(t){return!!t.startsWith(this.options.attributeNamePrefix)&&t.substr(this.attrPrefixLen)}function ot(t){return t===this.options.cdataTagName}G.prototype.parse=function(t){return Array.isArray(t)&&this.options.rootNodeName&&this.options.rootNodeName.length>1&&(t={[this.options.rootNodeName]:t}),this.j2x(t,0).val},G.prototype.j2x=function(t,e){let n="",r="";for(let i in t)if(void 0===t[i]);else if(null===t[i])r+=this.indentate(e)+"<"+i+"/"+this.tagEndChar;else if(t[i]instanceof Date)r+=this.buildTextNode(t[i],i,"",e);else if("object"!=typeof t[i]){const o=this.isAttribute(i);o?n+=" "+o+'="'+this.options.attrValueProcessor(""+t[i])+'"':this.isCDATA(i)?r+=this.replaceCDATAstr(t[this.options.textNodeName]?t[this.options.textNodeName]:"",t[i]):i===this.options.textNodeName?t[this.options.cdataTagName]||(r+=this.options.tagValueProcessor(""+t[i])):r+=this.buildTextNode(t[i],i,"",e)}else if(Array.isArray(t[i]))if(this.isCDATA(i))r+=this.indentate(e),r+=this.replaceCDATAarr(t[this.options.textNodeName]?t[this.options.textNodeName]:"",t[i]);else{const n=t[i].length;for(let o=0;o<n;o++){const n=t[i][o];void 0===n||(r+=null===n?this.indentate(e)+"<"+i+"/"+this.tagEndChar:"object"==typeof n?this.processTextOrObjNode(n,i,e):this.buildTextNode(n,i,"",e))}}else if(this.options.attrNodeName&&i===this.options.attrNodeName){const e=Object.keys(t[i]),r=e.length;for(let o=0;o<r;o++)n+=" "+e[o]+'="'+this.options.attrValueProcessor(""+t[i][e[o]])+'"'}else r+=this.processTextOrObjNode(t[i],i,e);return{attrStr:n,val:r}};var st=G,ut=t((function(t,n){const i=A,o=e.buildOptions;n.parse=function(t,e={},n){if(n){!0===n&&(n={});const e=V(t,n);if(!0!==e)throw Error(e.err.msg)}e.parseTrueNumberOnly&&!1!==e.parseNodeValue&&!e.numParseOptions&&(e.numParseOptions={leadingZeros:!1});let s=o(e,i.defaultOptions,i.props);const u=A.getTraversalObj(t,s);return r.convertToJson(u,s)},n.convertTonimn=_,n.getTraversalObj=A.getTraversalObj,n.convertToJson=r.convertToJson,n.convertToJsonString=Y,n.validate=V,n.j2xParser=st,n.parseToNimn=function(t,e,r){return n.convertTonimn(n.getTraversalObj(t,r),e,r)}}));const at=Object.freeze(Object.assign(Object.create(null),ut,{default:ut}));export{at as p}