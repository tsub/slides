(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{179:function(t,n,e){"use strict";e.r(n);var r=e(9),o=e.n(r),c=e(3),i=e.n(c),u=e(1),a=e(0),s=e.n(a),f=e(181),l=e.n(f),p=e(188),d=e.n(p),h=e(2),y=e.n(h),v=e(55);e(187),s.a.createContext({});y.a.object,y.a.string.isRequired,y.a.func,y.a.func;var _=e(80),b=e(186),g=function(){return!1},m=function(){return!1},j={name:"17fy9xs",styles:"cursor:pointer;overflow:hidden;"},O={name:"owk8gn",styles:"text-align:center;padding:4px;"},w=function(t){return Object(u.c)("div",{role:"link",css:j,onClick:function(n){Object(v.navigate)(t.slug)}},Object(u.c)(_.a,{src:t.Component,zoom:.5}),Object(u.c)("div",{css:O},t.title))},x={name:"1e892q7",styles:"list-style:none;padding:0;display:flex;flex-wrap:wrap;"},k={name:"1qtoz8b",styles:"width:100%;padding:32px;@media screen and (min-width: 48em){width:50%;}@media screen and (min-width: 56em){width:33.333%;}"},R=function(t){return Object(u.c)(b.a,null,Object(u.c)(g,t),Object(u.c)("ul",{css:x},t.decks.map(function(n){return Object(u.c)("li",{key:n.id,css:k},Object(u.c)(w,o()({},t,n)))})),Object(u.c)(m,t))};e.d(n,"query",function(){return F});var S=function(t){var n=t.headings.filter(function(t){return 1===t.depth});return d()(n,"0.value",t.slug)},F=(n.default=function(t){var n=t.data.allMdx.edges.map(function(t){var n=t.node;return i()({},n,{slug:n.fields.deck,title:S(n),children:Object(u.c)(l.a,{children:n.code.body}),Component:function(t){return Object(u.c)(l.a,o()({},t,{children:n.code.body}))}})}).filter(function(t){return"decks"===t.parent.sourceInstanceName});return Object(u.c)(R,o()({},t,{decks:n}))},"1766232747")},181:function(t,n,e){var r=e(182);e(56),e(41),e(19),e(184);var o=e(3),c=e(36),i=e(0),u=e(39),a=u.useMDXComponents,s=u.mdx,f=e(78).useMDXScope;t.exports=function(t){var n=t.scope,e=t.components,u=t.children,l=c(t,["scope","components","children"]),p=a(e),d=f(n);if(!u)return null;var h=o({React:i,mdx:s},d),y=Object.keys(h),v=y.map(function(t){return h[t]}),_=r(Function,["_fn"].concat(y,[""+u])).apply(void 0,[{}].concat(v));return i.createElement(_,o({components:p},l))}},182:function(t,n,e){var r=e(183);function o(n,e,c){return!function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}()?t.exports=o=function(t,n,e){var o=[null];o.push.apply(o,n);var c=new(Function.bind.apply(t,o));return e&&r(c,e.prototype),c}:t.exports=o=Reflect.construct,o.apply(null,arguments)}t.exports=o},183:function(t,n){function e(n,r){return t.exports=e=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t},e(n,r)}t.exports=e},184:function(t,n,e){var r=e(43),o=e(42);e(185)("keys",function(){return function(t){return o(r(t))}})},185:function(t,n,e){var r=e(12),o=e(35),c=e(14);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],i={};i[t]=n(e),r(r.S+r.F*c(function(){e(1)}),"Object",i)}},186:function(t,n,e){"use strict";var r=e(1),o=e(0),c=e.n(o);n.a=function(t){return Object(r.c)(c.a.Fragment,null,Object(r.c)(r.a,{styles:{"*":{boxSizing:"border-box"},body:{margin:0,fontFamily:"system-ui, sans-serif"}}}),t.children)}},187:function(t,n,e){var r;t.exports=(r=e(189))&&r.default||r},188:function(t,n,e){(function(n){var e="Expected a function",r="__lodash_hash_undefined__",o=1/0,c="[object Function]",i="[object GeneratorFunction]",u="[object Symbol]",a=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,s=/^\w*$/,f=/^\./,l=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,p=/\\(\\)?/g,d=/^\[object .+?Constructor\]$/,h="object"==typeof n&&n&&n.Object===Object&&n,y="object"==typeof self&&self&&self.Object===Object&&self,v=h||y||Function("return this")();var _,b=Array.prototype,g=Function.prototype,m=Object.prototype,j=v["__core-js_shared__"],O=(_=/[^.]+$/.exec(j&&j.keys&&j.keys.IE_PROTO||""))?"Symbol(src)_1."+_:"",w=g.toString,x=m.hasOwnProperty,k=m.toString,R=RegExp("^"+w.call(x).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),S=v.Symbol,F=b.splice,$=J(v,"Map"),C=J(Object,"create"),q=S?S.prototype:void 0,E=q?q.toString:void 0;function P(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function D(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function M(t){var n=-1,e=t?t.length:0;for(this.clear();++n<e;){var r=t[n];this.set(r[0],r[1])}}function z(t,n){for(var e,r,o=t.length;o--;)if((e=t[o][0])===(r=n)||e!=e&&r!=r)return o;return-1}function A(t,n){for(var e,r=0,o=(n=function(t,n){if(B(t))return!1;var e=typeof t;if("number"==e||"symbol"==e||"boolean"==e||null==t||K(t))return!0;return s.test(t)||!a.test(t)||null!=n&&t in Object(n)}(n,t)?[n]:B(e=n)?e:X(e)).length;null!=t&&r<o;)t=t[G(n[r++])];return r&&r==o?t:void 0}function T(t){return!(!H(t)||(n=t,O&&O in n))&&(function(t){var n=H(t)?k.call(t):"";return n==c||n==i}(t)||function(t){var n=!1;if(null!=t&&"function"!=typeof t.toString)try{n=!!(t+"")}catch(e){}return n}(t)?R:d).test(function(t){if(null!=t){try{return w.call(t)}catch(n){}try{return t+""}catch(n){}}return""}(t));var n}function I(t,n){var e,r,o=t.__data__;return("string"==(r=typeof(e=n))||"number"==r||"symbol"==r||"boolean"==r?"__proto__"!==e:null===e)?o["string"==typeof n?"string":"hash"]:o.map}function J(t,n){var e=function(t,n){return null==t?void 0:t[n]}(t,n);return T(e)?e:void 0}P.prototype.clear=function(){this.__data__=C?C(null):{}},P.prototype.delete=function(t){return this.has(t)&&delete this.__data__[t]},P.prototype.get=function(t){var n=this.__data__;if(C){var e=n[t];return e===r?void 0:e}return x.call(n,t)?n[t]:void 0},P.prototype.has=function(t){var n=this.__data__;return C?void 0!==n[t]:x.call(n,t)},P.prototype.set=function(t,n){return this.__data__[t]=C&&void 0===n?r:n,this},D.prototype.clear=function(){this.__data__=[]},D.prototype.delete=function(t){var n=this.__data__,e=z(n,t);return!(e<0||(e==n.length-1?n.pop():F.call(n,e,1),0))},D.prototype.get=function(t){var n=this.__data__,e=z(n,t);return e<0?void 0:n[e][1]},D.prototype.has=function(t){return z(this.__data__,t)>-1},D.prototype.set=function(t,n){var e=this.__data__,r=z(e,t);return r<0?e.push([t,n]):e[r][1]=n,this},M.prototype.clear=function(){this.__data__={hash:new P,map:new($||D),string:new P}},M.prototype.delete=function(t){return I(this,t).delete(t)},M.prototype.get=function(t){return I(this,t).get(t)},M.prototype.has=function(t){return I(this,t).has(t)},M.prototype.set=function(t,n){return I(this,t).set(t,n),this};var X=N(function(t){var n;t=null==(n=t)?"":function(t){if("string"==typeof t)return t;if(K(t))return E?E.call(t):"";var n=t+"";return"0"==n&&1/t==-o?"-0":n}(n);var e=[];return f.test(t)&&e.push(""),t.replace(l,function(t,n,r,o){e.push(r?o.replace(p,"$1"):n||t)}),e});function G(t){if("string"==typeof t||K(t))return t;var n=t+"";return"0"==n&&1/t==-o?"-0":n}function N(t,n){if("function"!=typeof t||n&&"function"!=typeof n)throw new TypeError(e);var r=function(){var e=arguments,o=n?n.apply(this,e):e[0],c=r.cache;if(c.has(o))return c.get(o);var i=t.apply(this,e);return r.cache=c.set(o,i),i};return r.cache=new(N.Cache||M),r}N.Cache=M;var B=Array.isArray;function H(t){var n=typeof t;return!!t&&("object"==n||"function"==n)}function K(t){return"symbol"==typeof t||function(t){return!!t&&"object"==typeof t}(t)&&k.call(t)==u}t.exports=function(t,n,e){var r=null==t?void 0:A(t,n);return void 0===r?e:r}}).call(this,e(79))},189:function(t,n,e){"use strict";e.r(n);var r=e(3),o=e.n(r),c=e(0),i=e.n(c),u=e(2),a=e.n(u),s=e(99),f=e(6),l=function(t){var n=t.location,e=f.default.getResourcesForPathnameSync(n.pathname);return e?i.a.createElement(s.a,o()({location:n,pageResources:e},e.json)):null};l.propTypes={location:a.a.shape({pathname:a.a.string.isRequired}).isRequired},n.default=l}}]);
//# sourceMappingURL=component---node-modules-mdx-deck-gatsby-theme-src-templates-index-js-2e9b39501bc82d605187.js.map