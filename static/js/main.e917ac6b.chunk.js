(this["webpackJsonppokebox-viewer"]=this["webpackJsonppokebox-viewer"]||[]).push([[0],{37:function(e,t,n){},50:function(e,t,n){e.exports=n(65)},55:function(e,t,n){},56:function(e,t,n){},57:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},60:function(e,t,n){},65:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(10),i=n.n(o),r=(n(55),n(19)),l=(n(56),n(57),n(37),function(e){var t=e.onClick,n=e.img,a=void 0===n?"":n,o=e.selected,i=void 0!==o&&o,r=e.obtained,l=void 0!==r&&r;return c.a.createElement("div",{className:"pokecell ".concat(i?"selected":"notselected"," ").concat(l?"obtained":"unobtained"),onClick:t},c.a.createElement("img",{src:a,alt:"",className:"pokeimage"}))}),u=function(){return c.a.createElement("div",{className:"pokecell inactive"})},s=function(e){var t=e.pokeNum,n=e.setPokenum,a=e.maxDexNum,o=e.pokedex,i=e.pokeboxRef,r=Math.ceil(t/30),s=t%30===0?30:t%30,m=Math.ceil(s/6),d=s%6===0?6:s%6,f=function(e,t,n){return 30*(r-1)+6*(t-1)+n},p=function(){r>1&&n(t-30)},b=function(){r<Math.ceil(a/30)&&n(t>a-30?a:t+30)};return c.a.createElement("div",null,c.a.createElement("div",{className:"box-header"},c.a.createElement("button",{className:"button",onClick:p,disabled:1===r},"Box ",r-1),c.a.createElement("div",{className:"box-label"},"Box ",r," (",30*r-29,"-",30*r,")"),c.a.createElement("button",{className:"button",onClick:b,disabled:r>=Math.ceil(a/30)},"Box ",r+1)),c.a.createElement("div",{ref:i,className:"box no-outline",tabIndex:0,onKeyDown:function(e){e.ctrlKey?function(e){"ArrowLeft"===e.key?p():"ArrowRight"===e.key&&b()}(e):function(e){"ArrowLeft"===e.key?t>1&&n(t-1):"ArrowRight"===e.key?t<a&&n(t+1):"ArrowUp"===e.key?t-6>=1&&n(t-6):"ArrowDown"===e.key&&t+6<=a&&n(t+6)}(e)}},[[1,2,3,4,5,6].map((function(e){return c.a.createElement("div",{key:e},[[1,2,3,4,5].map((function(t){return(s=f(0,t,e))>=1&&s<=a?c.a.createElement(l,{key:t,selected:m===t&&d===e,obtained:!0,onClick:function(){return n(f(0,t,e))},img:"".concat("/pokebox-viewer","/pokemon-icons/").concat((r=f(0,t,e),i=r.toString().padStart(3,"0"),void 0===o[i]?"000":o[i].nationalId),".png")}):c.a.createElement(u,{key:t});var i,r,s}))])}))]))},m=(n(58),n(41)),d=(n(59),function(e){var t=e.possibleValues,n=e.selectedValue,o=e.setSelectedValue,i=Object(a.useState)(!1),l=Object(r.a)(i,2),u=l[0],s=l[1],d=function(e){e.preventDefault(),s(!0),document.addEventListener("click",f)},f=function e(){s(!1),document.removeEventListener("click",e)};return c.a.createElement("div",null,c.a.createElement("button",{className:"big-button",onClick:function(e){u?f():d(e)}},n),u?c.a.createElement("div",{className:"dropdown-menu"},Object(m.a)(t).map((function(e){return c.a.createElement("button",{className:"big-button",key:e,onClick:function(){return o(e)}},e)}))):null)}),f=function(e){var t=e.pokedexName,n=e.changeToPokedex,o=Object(a.useState)([]),i=Object(r.a)(o,2),l=i[0],u=i[1],s=function(){m().then((function(e){u(e)}))};Object(a.useEffect)((function(){s()}),[]),Object(a.useEffect)((function(){s()}),[n]);var m=Object(a.useCallback)((function(){return fetch("dex/pokedexes.json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))}),[]);return c.a.createElement("div",{className:"pokedex-info"},c.a.createElement("div",{className:"pokedex-select"},c.a.createElement("div",{className:"pokedex-select-label"},"Pokedex: "),c.a.createElement("div",{className:"pokedex-dropdown"},c.a.createElement(d,{possibleValues:l,selectedValue:t,setSelectedValue:n}))))},p=(n(60),n(103)),b=n(104),k=function(e){var t=e.pokenum,n=e.pokedex,a=e.validateThenSetPokenum,o=Object.keys(n).map((function(e){return{name:n[e].name,id:e}})).sort((function(e,t){return e.id<t.id?-1:1})),i=n[t.toString().padStart(3,"0")].name,r=o.find((function(e){return e.name===i}));return c.a.createElement("div",{className:"pokemon-info"},c.a.createElement(b.a,{className:"autocomplete",disableClearable:!0,blurOnSelect:!0,value:r,options:o,getOptionLabel:function(e){return"#".concat(e.id," - ").concat(e.name)},onChange:function(e,t){return a(t.id)},renderInput:function(e){return c.a.createElement(p.a,Object.assign({},e,{label:"Pok\xe9mon",variant:"outlined"}))}}),c.a.createElement("div",null,"National: #",n[t.toString().padStart(3,"0")].nationalId))},v=function(){var e=Object(a.useRef)(null),t=Object(a.useState)({}),n=Object(r.a)(t,2),o=n[0],i=n[1],l=Object(a.useState)(""),u=Object(r.a)(l,2),m=u[0],d=u[1],p=Object(a.useState)(1),b=Object(r.a)(p,2),v=b[0],E=b[1];Object(a.useEffect)((function(){h("National")}),[]);var x=function(e){return Object.keys(e).length},N=Object(a.useCallback)((function(e,t){i(t),d(e);var n=x(t);v>n&&E(n)}),[v]),j=Object(a.useCallback)((function(e){return fetch("dex/"+e+".json",{headers:{"Content-Type":"application/json",Accept:"application/json"}}).then((function(e){return e.json()}))}),[]),h=function(t){j(t).then((function(n){var a;N(t,n),null===(a=e.current)||void 0===a||a.focus()}))};return c.a.createElement("div",{className:"app"},c.a.createElement("h2",null,"Pok\xe9mon Box Viewer"),c.a.createElement("div",null,c.a.createElement(s,{pokeboxRef:e,pokeNum:v,setPokenum:E,maxDexNum:x(o),pokedex:o}),""!==m?c.a.createElement(k,{pokedex:o,pokenum:v,validateThenSetPokenum:function(e){if(!Number.isNaN(e)){var t=Number.parseInt(e);if(t>=1&&t<=x(o))return void E(t)}}}):null,c.a.createElement(f,{pokedexName:m,changeToPokedex:h})))};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(v,null)),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.e917ac6b.chunk.js.map