import{r,h as a}from"./p-a7bcab11.js";let p=class{constructor(a){r(this,a)}normalize(r){return r?r.substr(0,1).toUpperCase()+r.substr(1).toLowerCase():""}render(){if(this.match&&this.match.params.name)return a("div",{class:"app-profile"},a("p",null,"Hello! My name is ",this.normalize(this.match.params.name),". My name was passed in through a route param!"))}};p.style=".app-profile{padding:10px}";export{p as app_profile}