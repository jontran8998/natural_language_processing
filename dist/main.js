var Client=function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=11)}([function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},o=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),a=[];function u(e){for(var t=-1,n=0;n<a.length;n++)if(a[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var o=e[i],c=t.base?o[0]+t.base:o[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var f=u(l),d={css:o[1],media:o[2],sourceMap:o[3]};-1!==f?(a[f].references++,a[f].updater(d)):a.push({identifier:l,updater:m(d,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var a=o(e.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(t)}return t}var l,f=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function d(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=f(t,i);else{var o=document.createTextNode(i),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(o,a[t]):e.appendChild(o)}}function p(e,t,n){var r=n.css,i=n.media,o=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),o&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,v=0;function m(e,t){var n,r,i;if(t.singleton){var o=v++;n=h||(h=s(t)),r=d.bind(null,n,o,!1),i=d.bind(null,n,o,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=u(n[r]);a[i].references--}for(var o=c(e,t),s=0;s<n.length;s++){var l=u(n[s]);0===a[l].references&&(a[l].updater(),a.splice(l,1))}n=o}}}},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=e(t);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var o=0;o<this.length;o++){var a=this[o][0];null!=a&&(i[a]=!0)}for(var u=0;u<e.length;u++){var c=[].concat(e[u]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){"use strict";var r=n(1),i=n.n(r)()((function(e){return e[1]}));i.push([e.i,"",""]),t.a=i},function(e,t,n){(function(e){!function(e){"use strict";e.exports.is_uri=n,e.exports.is_http_uri=r,e.exports.is_https_uri=i,e.exports.is_web_uri=o,e.exports.isUri=n,e.exports.isHttpUri=r,e.exports.isHttpsUri=i,e.exports.isWebUri=o;var t=function(e){return e.match(/(?:([^:\/?#]+):)?(?:\/\/([^\/?#]*))?([^?#]*)(?:\?([^#]*))?(?:#(.*))?/)};function n(e){if(e&&!/[^a-z0-9\:\/\?\#\[\]\@\!\$\&\'\(\)\*\+\,\;\=\.\-\_\~\%]/i.test(e)&&!/%[^0-9a-f]/i.test(e)&&!/%[0-9a-f](:?[^0-9a-f]|$)/i.test(e)){var n,r,i,o,a,u="",c="";if(u=(n=t(e))[1],r=n[2],i=n[3],o=n[4],a=n[5],u&&u.length&&i.length>=0){if(r&&r.length){if(0!==i.length&&!/^\//.test(i))return}else if(/^\/\//.test(i))return;if(/^[a-z][a-z0-9\+\-\.]*$/.test(u.toLowerCase()))return c+=u+":",r&&r.length&&(c+="//"+r),c+=i,o&&o.length&&(c+="?"+o),a&&a.length&&(c+="#"+a),c}}}function r(e,r){if(n(e)){var i,o,a,u,c="",s="",l="",f="";if(c=(i=t(e))[1],s=i[2],o=i[3],a=i[4],u=i[5],c){if(r){if("https"!=c.toLowerCase())return}else if("http"!=c.toLowerCase())return;if(s)return/:(\d+)$/.test(s)&&(l=s.match(/:(\d+)$/)[0],s=s.replace(/:\d+$/,"")),f+=c+":",f+="//"+s,l&&(f+=l),f+=o,a&&a.length&&(f+="?"+a),u&&u.length&&(f+="#"+u),f}}}function i(e){return r(e,!0)}function o(e){return r(e)||i(e)}}(e)}).call(this,n(10)(e))},function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},function(e,t,n){"use strict";n.r(t),n.d(t,"checkUrl",(function(){return i})),n.d(t,"handleSubmit",(function(){return o})),n.d(t,"dataRender",(function(){return l}));var r=n(9);const i=e=>{if(!r.isUri(e))return!0};function o(e){e.preventDefault();let t=document.getElementById("name").value;if(""==t||Client.checkUrl(t))return alert("Please enter a valid url");console.log("::: Form Submitted :::"),fetch("http://.../meaningCloud",{method:"POST",credentials:"same-origin",headers:{"Content-type":"application/json"},body:JSON.stringify({url:t})}).then((e=>e.json())).then((function(e){Client.dataRender(e)})).catch((e=>{console.log("Error of fetching data",e)}))}const a=document.getElementById("model"),u=document.getElementById("score_tag"),c=document.getElementById("confidence"),s=document.getElementById("irony"),l=e=>{a.innerHTML=e.model,u.innerHTML=e.score_tag,c.innerHTML=e.confidence,s.innerHTML=e.irony};var f=n(0),d=n.n(f),p=n(2),h={insert:"head",singleton:!1},v=(d()(p.a,h),p.a.locals,n(3)),m={insert:"head",singleton:!1},g=(d()(v.a,m),v.a.locals,n(4)),b={insert:"head",singleton:!1},y=(d()(g.a,b),g.a.locals,n(5)),x={insert:"head",singleton:!1},C=(d()(y.a,x),y.a.locals,n(6)),j={insert:"head",singleton:!1},w=(d()(C.a,j),C.a.locals,n(7)),S={insert:"head",singleton:!1},_=(d()(w.a,S),w.a.locals,n(8)),M={insert:"head",singleton:!1};d()(_.a,M),_.a.locals}]);