import{d as s,P as t,S as e,s as o}from"./p-e49ecfaf.js";const n={type:"Polygon",coordinates:[[[180,-90],[180,90],[-180,90],[-180,-90],[180,-90]]]},a=s=>new Promise((t=>setTimeout(t,s))),r=async(r,c,i=10,l=!0)=>{const u=async({discussion:s=null,geometry:n=null,start:r=1})=>{const d=Object.assign(Object.assign(Object.assign({discussion:s},n&&{geometry:n}),{parents:[],sortBy:t.UPDATED_AT,sortOrder:e.DESC,start:r,num:i}),c),m=o(d);if(1===r){const{total:t}=await m;let e=r+i;const o=[m],c=l?((s,t)=>{const e=Math.ceil(s/t);return e>10?(console.warn("Discussions requests exceeds desired threshold, throttling to 250ms per batch."),250):2500/e})(t,i):0;for(;e<=t;)await a(c),o.push(...await u({discussion:s,geometry:n,start:e})),e+=i;return o}return[m]};try{const t=await Promise.all([...await u({discussion:`${r}%?id=%`}),...await u({discussion:`${r}%`,geometry:JSON.stringify(n)})]),e=s=>{const{postDetails:t,replyDetails:e,channelDetails:o}=s,n=e?t.postId:null,a=o.channelId;return Object.assign(Object.assign({},e?e.post:t.post),{channelId:a,parentId:n})},o=[],a=t.map((({items:s})=>s.map((s=>e(s))))).flat().filter((s=>!o.includes(s.id)&&(o.push(s.id),!0)));return s(a)}catch(s){const{message:t}=s;console.error("Could not fetch on-map discussions:",t)}};export{r as g}