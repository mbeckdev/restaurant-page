(()=>{"use strict";var e={28:(e,n,t)=>{t.d(n,{Z:()=>a});var r=t(645),o=t.n(r)()((function(e){return e[1]}));o.push([e.id,':root {\r\n  --tab-color-selected: #e7e5d7;\r\n  --tab-bkcolor-selected: #010105;\r\n  --top-color: #b61d0e;\r\n  --tab-hover-color: hsl(5, 86%, 24%); /*hsl(5, 86%, 38%)*/\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  background-size: cover;\r\n  background-attachment: fixed;\r\n  font-family: "EB Garamond", serif;\r\n  color: var(--tab-color-selected);\r\n  background-color: var(--tab-bkcolor-selected);\r\n  text-shadow: 1px 1px 3px black, -1px -1px 3px black;\r\n}\r\n\r\nheader {\r\n  background-color: var(--top-color);\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: flex-end;\r\n  /* justify-content: space-between; */\r\n  justify-content: space-around;\r\n  width: 100%;\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  padding: 10px;\r\n  font-family: "Cabin Sketch", cursive;\r\n  color: var(--tab-color-selected);\r\n}\r\n\r\nnav ul {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nli {\r\n  padding: 10px 20px;\r\n  list-style-type: none;\r\n  border-top-left-radius: 10px;\r\n  border-top-right-radius: 10px;\r\n  cursor: pointer;\r\n  font-size: large;\r\n}\r\n\r\nli:hover {\r\n  text-decoration: underline;\r\n  background-color: var(--tab-hover-color);\r\n}\r\n\r\n#copy-container {\r\n  margin-top: 2em;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  align-items: center;\r\n  font-size: 20px;\r\n}\r\n\r\n#headline {\r\n  font-size: 60px;\r\n  font-family: "Cabin Sketch", cursive;\r\n  text-align: center;\r\n}\r\n\r\n#hype-container {\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n#hype-container p {\r\n  margin: 20px;\r\n  width: 300px;\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1px;\r\n}\r\n\r\n.about-p {\r\n  margin: 1em 2em;\r\n}\r\n\r\n.menu-container {\r\n  margin: 1em;\r\n  padding: 0 1em;\r\n}\r\n\r\n.menu-item {\r\n  word-break: normal;\r\n  margin-left: 2em;\r\n  text-indent: -2em;\r\n}\r\n\r\n.menu-row {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  line-height: 1.7em;\r\n}\r\n\r\n.price {\r\n  margin-left: 2em;\r\n}\r\n\r\n.tab-selected {\r\n  color: var(--tab-color-selected);\r\n  background-color: var(--tab-bkcolor-selected);\r\n}\r\n',""]);const a=o},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t=e(n);return n[2]?"@media ".concat(n[2]," {").concat(t,"}"):t})).join("")},n.i=function(e,t,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var a=0;a<this.length;a++){var i=this[a][0];null!=i&&(o[i]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);r&&o[d[0]]||(t&&(d[2]?d[2]="".concat(t," and ").concat(d[2]):d[2]=t),n.push(d))}},n}},379:(e,n,t)=>{var r,o=function(){var e={};return function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}e[n]=t}return e[n]}}(),a=[];function i(e){for(var n=-1,t=0;t<a.length;t++)if(a[t].identifier===e){n=t;break}return n}function c(e,n){for(var t={},r=[],o=0;o<e.length;o++){var c=e[o],d=n.base?c[0]+n.base:c[0],l=t[d]||0,s="".concat(d," ").concat(l);t[d]=l+1;var u=i(s),p={css:c[1],media:c[2],sourceMap:c[3]};-1!==u?(a[u].references++,a[u].updater(p)):a.push({identifier:s,updater:h(p,n),references:1}),r.push(s)}return r}function d(e){var n=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var a=t.nc;a&&(r.nonce=a)}if(Object.keys(r).forEach((function(e){n.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(n);else{var i=o(e.insert||"head");if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");i.appendChild(n)}return n}var l,s=(l=[],function(e,n){return l[e]=n,l.filter(Boolean).join("\n")});function u(e,n,t,r){var o=t?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=s(n,o);else{var a=document.createTextNode(o),i=e.childNodes;i[n]&&e.removeChild(i[n]),i.length?e.insertBefore(a,i[n]):e.appendChild(a)}}function p(e,n,t){var r=t.css,o=t.media,a=t.sourceMap;if(o?e.setAttribute("media",o):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var m=null,f=0;function h(e,n){var t,r,o;if(n.singleton){var a=f++;t=m||(m=d(n)),r=u.bind(null,t,a,!1),o=u.bind(null,t,a,!0)}else t=d(n),r=p.bind(null,t,n),o=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)};return r(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;r(e=n)}else o()}}e.exports=function(e,n){(n=n||{}).singleton||"boolean"==typeof n.singleton||(n.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var t=c(e=e||[],n);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<t.length;r++){var o=i(t[r]);a[o].references--}for(var d=c(e,n),l=0;l<t.length;l++){var s=i(t[l]);0===a[s].references&&(a[s].updater(),a.splice(s,1))}t=d}}}},782:(e,n,t)=>{e.exports=t.p+"50325238b30bac538b08.jpg"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");r.length&&(e=r[r.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),(()=>{var e=t(379),n=t.n(e),r=t(28);n()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;var o=t(782);function a(){const e=document.getElementById("copy-container");document.getElementById("content").appendChild(e);const n=document.createElement("p");n.setAttribute("id","headline"),e.appendChild(n);const t=document.createTextNode("IT'S KRAZY DELICIOUS.");n.appendChild(t);const r=document.createElement("div");r.setAttribute("id","hype-container"),e.appendChild(r);const a=document.createElement("p"),i=document.createElement("p"),c=document.createTextNode("The best kabobs in the city."),d=document.createTextNode("Voted 'The Tastiest' four years in a row.");a.appendChild(c),i.appendChild(d),r.appendChild(a),r.appendChild(i);const l=document.createElement("img");l.src=o,l.setAttribute("alt","Three tasty looking kebabs on a grill"),l.setAttribute("width",640),l.setAttribute("height",428),e.appendChild(l)}!function(){const e=document.getElementById("content");!function(){const n=document.createElement("header");e.appendChild(n);const t=document.createElement("h1");n.appendChild(t);const r=document.createTextNode("KRAZY KABOBS");t.appendChild(r);const o=document.createElement("nav"),a=document.createElement("ul"),i=document.createElement("li"),c=document.createElement("li"),d=document.createElement("li");i.setAttribute("id","main-tab"),c.setAttribute("id","menu-tab"),d.setAttribute("id","about-tab");const l=document.createTextNode("Main"),s=document.createTextNode("Menu"),u=document.createTextNode("About");i.appendChild(l),c.appendChild(s),d.appendChild(u),a.appendChild(i),a.appendChild(c),a.appendChild(d),o.appendChild(a),n.appendChild(o),i.classList.add("tab-selected")}();const n=document.createElement("div");n.setAttribute("id","copy-container"),e.appendChild(n)}(),a();const i=document.getElementById("main-tab"),c=document.getElementById("menu-tab"),d=document.getElementById("about-tab");i.addEventListener("click",(function(){s(i)})),c.addEventListener("click",(function(){s(c)})),d.addEventListener("click",(function(){s(d)}));const l=document.getElementById("copy-container");function s(e){for(;l.firstChild;)l.removeChild(l.firstChild);switch(i.classList.remove("tab-selected"),c.classList.remove("tab-selected"),d.classList.remove("tab-selected"),e.id){case"main-tab":i.classList.add("tab-selected"),a();break;case"menu-tab":c.classList.add("tab-selected"),function(){const e=document.getElementById("copy-container"),n=["EGG AND KABOB","EGG, BACON AND KABOB","EGG, BACON, SAUSAGE AND KABOB","KABOB, BACON, SAUSAGE AND KABOB","KABOB, EGG, KABOB, KABOB, BACON AND KABOB","KABOB, KABOB, KABOB, EGG AND KABOB","KABOB, KABOB, KABOB, KABOB, KABOB, KABOB,  BAKED BEANS, KABOB, KABOB, KABOB AND KABOB","LOBSTER THERMIDOR AUX CREVETTES WITH A MORNAY SAUCE GARNISHED WITH TRUFFLE PATE BRANDY AND A FRIED EGG ON TOP AND KABOB"],t=["5.49","7.95","10.12","12.90","15.45","18.99","35.49","55.95"],r=document.createElement("div");r.classList.add("menu-container"),e.appendChild(r),n.forEach((e=>{const o=document.createElement("div");o.classList.add("menu-row"),r.appendChild(o);const a=document.createElement("div"),i=document.createElement("div");a.classList.add("menu-item"),i.classList.add("price");const c=document.createTextNode(e),d=document.createTextNode(t[n.indexOf(e)]);a.appendChild(c),i.appendChild(d),o.appendChild(a),o.appendChild(i)}))}();break;case"about-tab":d.classList.add("tab-selected"),function(){const e=document.getElementById("copy-container"),n=document.createElement("p"),t=document.createElement("p"),r=document.createElement("p"),o=document.createTextNode("Forged from the fires of flavor, we've been making kabobs since 1924."),a=document.createTextNode("It all started when Klaus Kabob was sitting at his forge and became hungry. He wondered, 'Instead of using this fire to forge metal, what if I use it to forge food?'"),i=document.createTextNode("The rest is history.");n.classList.add("about-p"),t.classList.add("about-p"),r.classList.add("about-p"),n.appendChild(o),t.appendChild(a),r.appendChild(i);const c=document.createElement("div");c.classList.add("about-p-container"),c.appendChild(n),c.appendChild(t),c.appendChild(r),e.appendChild(c)}()}}})()})();