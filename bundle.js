var app=function(){"use strict";function t(){}const n=t=>t;function e(t,n){for(const e in n)t[e]=n[e];return t}function s(t){return t()}function r(){return Object.create(null)}function o(t){t.forEach(s)}function i(t){return"function"==typeof t}function l(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}function a(n,...e){if(null==n)return t;const s=n.subscribe(...e);return s.unsubscribe?()=>s.unsubscribe():s}function c(t,n,e){t.$$.on_destroy.push(a(n,e))}function u(t,n,e,s){if(t){const r=d(t,n,e,s);return t[0](r)}}function d(t,n,s,r){return t[1]&&r?e(s.ctx.slice(),t[1](r(n))):s.ctx}function f(t,n,e,s,r,o,i){const l=function(t,n,e,s){if(t[2]&&s){const r=t[2](s(e));if(void 0===n.dirty)return r;if("object"==typeof r){const t=[],e=Math.max(n.dirty.length,r.length);for(let s=0;s<e;s+=1)t[s]=n.dirty[s]|r[s];return t}return n.dirty|r}return n.dirty}(n,s,r,o);if(l){const r=d(n,e,s,i);t.p(r,l)}}function p(t,n,e=n){return t.set(e),n}function m(n){return n&&i(n.destroy)?n.destroy:t}const h="undefined"!=typeof window;let g=h?()=>window.performance.now():()=>Date.now(),$=h?t=>requestAnimationFrame(t):t;const b=new Set;function y(t){b.forEach(n=>{n.c(t)||(b.delete(n),n.f())}),0!==b.size&&$(y)}function w(t){let n;return 0===b.size&&$(y),{promise:new Promise(e=>{b.add(n={c:t,f:e})}),abort(){b.delete(n)}}}function v(t,n){t.appendChild(n)}function x(t,n,e){t.insertBefore(n,e||null)}function _(t){t.parentNode.removeChild(t)}function E(t){return document.createElement(t)}function j(t){return document.createTextNode(t)}function k(){return j(" ")}function L(){return j("")}function T(t,n,e,s){return t.addEventListener(n,e,s),()=>t.removeEventListener(n,e,s)}function C(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function A(t,n,e,s){t.style.setProperty(n,e,s?"important":"")}function M(t,n,e){t.classList[e?"add":"remove"](n)}class O{constructor(t=null){this.a=t,this.e=this.n=null}m(t,n,e=null){this.e||(this.e=E(n.nodeName),this.t=n,this.h(t)),this.i(e)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let n=0;n<this.n.length;n+=1)x(this.t,this.n[n],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach(_)}}const P=new Set;let S,H=0;function N(t,n,e,s,r,o,i,l=0){const a=16.666/s;let c="{\n";for(let t=0;t<=1;t+=a){const s=n+(e-n)*o(t);c+=100*t+`%{${i(s,1-s)}}\n`}const u=c+`100% {${i(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(u)}_${l}`,f=t.ownerDocument;P.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild(E("style")).sheet),m=f.__svelte_rules||(f.__svelte_rules={});m[d]||(m[d]=!0,p.insertRule(`@keyframes ${d} ${u}`,p.cssRules.length));const h=t.style.animation||"";return t.style.animation=`${h?h+", ":""}${d} ${s}ms linear ${r}ms 1 both`,H+=1,d}function D(t,n){const e=(t.style.animation||"").split(", "),s=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-s.length;r&&(t.style.animation=s.join(", "),H-=r,H||$(()=>{H||(P.forEach(t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}}),P.clear())}))}function G(t){S=t}function R(t){(function(){if(!S)throw new Error("Function called outside component initialization");return S})().$$.on_mount.push(t)}const B=[],I=[],W=[],q=[],z=Promise.resolve();let F=!1;function U(t){W.push(t)}let J=!1;const K=new Set;function Q(){if(!J){J=!0;do{for(let t=0;t<B.length;t+=1){const n=B[t];G(n),V(n.$$)}for(B.length=0;I.length;)I.pop()();for(let t=0;t<W.length;t+=1){const n=W[t];K.has(n)||(K.add(n),n())}W.length=0}while(B.length);for(;q.length;)q.pop()();F=!1,J=!1,K.clear()}}function V(t){if(null!==t.fragment){t.update(),o(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(U)}}let X;function Y(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const Z=new Set;let tt;function nt(){tt={r:0,c:[],p:tt}}function et(){tt.r||o(tt.c),tt=tt.p}function st(t,n){t&&t.i&&(Z.delete(t),t.i(n))}function rt(t,n,e,s){if(t&&t.o){if(Z.has(t))return;Z.add(t),tt.c.push(()=>{Z.delete(t),s&&(e&&t.d(1),s())}),t.o(n)}}const ot={duration:0};function it(e,s,r,l){let a=s(e,r),c=l?0:1,u=null,d=null,f=null;function p(){f&&D(e,f)}function m(t,n){const e=t.b-c;return n*=Math.abs(e),{a:c,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function h(s){const{delay:r=0,duration:i=300,easing:l=n,tick:h=t,css:$}=a||ot,b={start:g()+r,b:s};s||(b.group=tt,tt.r+=1),u?d=b:($&&(p(),f=N(e,c,s,i,r,l,$)),s&&h(0,1),u=m(b,i),U(()=>Y(e,s,"start")),w(t=>{if(d&&t>d.start&&(u=m(d,i),d=null,Y(e,u.b,"start"),$&&(p(),f=N(e,c,u.b,u.duration,0,l,a.css))),u)if(t>=u.end)h(c=u.b,1-c),Y(e,u.b,"end"),d||(u.b?p():--u.group.r||o(u.group.c)),u=null;else if(t>=u.start){const n=t-u.start;c=u.a+u.d*l(n/u.duration),h(c,1-c)}return!(!u&&!d)}))}return{run(t){i(a)?(X||(X=Promise.resolve(),X.then(()=>{X=null})),X).then(()=>{a=a(),h(t)}):h(t)},end(){p(),u=d=null}}}const lt="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function at(t){t&&t.c()}function ct(t,n,e){const{fragment:r,on_mount:l,on_destroy:a,after_update:c}=t.$$;r&&r.m(n,e),U(()=>{const n=l.map(s).filter(i);a?a.push(...n):o(n),t.$$.on_mount=[]}),c.forEach(U)}function ut(t,n){const e=t.$$;null!==e.fragment&&(o(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function dt(t,n){-1===t.$$.dirty[0]&&(B.push(t),F||(F=!0,z.then(Q)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function ft(n,e,s,i,l,a,c=[-1]){const u=S;G(n);const d=e.props||{},f=n.$$={fragment:null,ctx:null,props:a,update:t,not_equal:l,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:c,skip_bound:!1};let p=!1;if(f.ctx=s?s(n,d,(t,e,...s)=>{const r=s.length?s[0]:e;return f.ctx&&l(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),p&&dt(n,t)),e}):[],f.update(),p=!0,o(f.before_update),f.fragment=!!i&&i(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(_)}else f.fragment&&f.fragment.c();e.intro&&st(n.$$.fragment),ct(n,e.target,e.anchor),Q()}G(u)}class pt{$destroy(){ut(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const mt=[];function ht(n,e=t){let s;const r=[];function o(t){if(l(n,t)&&(n=t,s)){const t=!mt.length;for(let t=0;t<r.length;t+=1){const e=r[t];e[1](),mt.push(e,n)}if(t){for(let t=0;t<mt.length;t+=2)mt[t][0](mt[t+1]);mt.length=0}}}return{set:o,update:function(t){o(t(n))},subscribe:function(i,l=t){const a=[i,l];return r.push(a),1===r.length&&(s=e(o)||t),i(n),()=>{const t=r.indexOf(a);-1!==t&&r.splice(t,1),0===r.length&&(s(),s=null)}}}}function gt(t){const n=t-1;return n*n*n+1}function $t(t){return"[object Date]"===Object.prototype.toString.call(t)}function bt(t,n){if(t===n||t!=t)return()=>t;const e=typeof t;if(e!==typeof n||Array.isArray(t)!==Array.isArray(n))throw new Error("Cannot interpolate values of different type");if(Array.isArray(t)){const e=n.map((n,e)=>bt(t[e],n));return t=>e.map(n=>n(t))}if("object"===e){if(!t||!n)throw new Error("Object cannot be null");if($t(t)&&$t(n)){t=t.getTime();const e=(n=n.getTime())-t;return n=>new Date(t+n*e)}const e=Object.keys(n),s={};return e.forEach(e=>{s[e]=bt(t[e],n[e])}),t=>{const n={};return e.forEach(e=>{n[e]=s[e](t)}),n}}if("number"===e){const e=n-t;return n=>t+n*e}throw new Error(`Cannot interpolate ${e} values`)}function yt(n){let e,s,r,o,i;return{c(){e=E("h1"),e.textContent="Start documentation!!!",s=k(),r=E("p"),r.innerHTML='<img src="static/ava.png" alt="Levon Gambaryan" title="Levon Gambaryan">',o=k(),i=E("p"),i.innerHTML='<a href="getting-started">Start</a>',C(e,"id","start-documentation")},m(t,n){x(t,e,n),x(t,s,n),x(t,r,n),x(t,o,n),x(t,i,n)},p:t,i:t,o:t,d(t){t&&_(e),t&&_(s),t&&_(r),t&&_(o),t&&_(i)}}}const wt={layout:"no_sidebar",title:!1};class vt extends pt{constructor(t){super(),ft(this,t,null,yt,l,{})}}function xt(n){let e,s,r;return{c(){e=E("h1"),e.textContent="Page not found!",s=k(),r=E("p"),r.innerHTML='<a href="/">Go to start page</a>',C(e,"id","page-not-found"),C(e,"class","svelte-aiue6m"),C(r,"class","svelte-aiue6m")},m(t,n){x(t,e,n),x(t,s,n),x(t,r,n)},p:t,i:t,o:t,d(t){t&&_(e),t&&_(s),t&&_(r)}}}const _t={layout:"no_sidebar"};const Et=t=>({}),jt=t=>({}),kt=t=>({}),Lt=t=>({});function Tt(t){let n,e,s,r,o;const i=t[1].result,l=u(i,t,t[0],Lt),a=t[1].code,c=u(a,t,t[0],jt);return{c(){n=E("div"),e=E("div"),l&&l.c(),s=k(),r=E("div"),c&&c.c(),C(e,"class","result"),C(r,"class","code"),C(n,"class","example")},m(t,i){x(t,n,i),v(n,e),l&&l.m(e,null),v(n,s),v(n,r),c&&c.m(r,null),o=!0},p(t,[n]){l&&l.p&&1&n&&f(l,i,t,t[0],n,kt,Lt),c&&c.p&&1&n&&f(c,a,t,t[0],n,Et,jt)},i(t){o||(st(l,t),st(c,t),o=!0)},o(t){rt(l,t),rt(c,t),o=!1},d(t){t&&_(n),l&&l.d(t),c&&c.d(t)}}}function Ct(t,n,e){let{$$slots:s={},$$scope:r}=n;return t.$$set=t=>{"$$scope"in t&&e(0,r=t.$$scope)},[r,s]}class At extends pt{constructor(t){super(),ft(this,t,Ct,Tt,l,{})}}function Mt(t){let n,e,s;return{c(){n=E("iframe"),C(n,"slot","result"),A(n,"height",t[2]+"px"),C(n,"title","Result"),C(n,"scrolling","no"),C(n,"sandbox","allow-same-origin allow-popups-to-escape-sandbox allow-scripts allow-popups allow-forms allow-pointer-lock allow-top-navigation allow-modals allow-scripts"),C(n,"srcdoc",t[3]),C(n,"class","svelte-y9biys")},m(r,o){x(r,n,o),t[7](n),e||(s=T(n,"load",t[4]),e=!0)},p(t,e){4&e&&A(n,"height",t[2]+"px")},d(r){r&&_(n),t[7](null),e=!1,s()}}}function Ot(t){let n,e,s=t[0].trim()+"";return{c(){n=E("pre"),e=E("code"),C(n,"slot","code"),C(n,"class","hljs svelte-y9biys")},m(t,r){x(t,n,r),v(n,e),e.innerHTML=s},p(t,n){1&n&&s!==(s=t[0].trim()+"")&&(e.innerHTML=s)},d(t){t&&_(n)}}}function Pt(n){let e;return{c(){e=k()},m(t,n){x(t,e,n)},p:t,d(t){t&&_(e)}}}function St(t){let n,e;return n=new At({props:{$$slots:{default:[Pt],code:[Ot],result:[Mt]},$$scope:{ctx:t}}}),{c(){at(n.$$.fragment)},m(t,s){ct(n,t,s),e=!0},p(t,[e]){const s={};1031&e&&(s.$$scope={dirty:e,ctx:t}),n.$set(s)},i(t){e||(st(n.$$.fragment,t),e=!0)},o(t){rt(n.$$.fragment,t),e=!1},d(t){ut(n,t)}}}let Ht=1;function Nt(t,n,e){let{name:s}=n,{code:r}=n,{height:o=!1}=n;const i=Number.isInteger(o);let l,a=Ht++,c=i?o:70;return window.addEventListener("message",(function(t){t.data.iframe_id&&t.data.iframe_id===a&&!i&&t.data.hasOwnProperty("HEIGHT")&&e(2,c=t.data.HEIGHT)})),t.$$set=t=>{"name"in t&&e(5,s=t.name),"code"in t&&e(0,r=t.code),"height"in t&&e(6,o=t.height)},[r,l,c,"<!doctype html>\n<html style=\"height: auto !important\">\n    <head>\n        <meta charset='utf-8'>\n        <base href='/svelte-scss-router-i18n/' />\n        <link rel='stylesheet' href='examples.css'>\n        <script defer src='examples.js'><\/script>\n    </head>\n    <body style=\"height: auto !important\"></body>\n</html>",function(){l.contentWindow.postMessage({COMPONENT:s,iframe_id:a},"*")},s,o,function(t){I[t?"unshift":"push"](()=>{l=t,e(1,l)})}]}class Dt extends pt{constructor(t){super(),ft(this,t,Nt,St,l,{name:5,code:0,height:6})}}function Gt(n){let e,s,r,o,i,l,a,c,u,d,f,p;return a=new Dt({props:{name:"Ex_0_a44d0a0a09d702068c35e6a89db39ec3",code:'<span class="xml"><span class="hljs-tag">&lt;<span class="hljs-name">button</span>&gt;</span>default<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span>\n<span class="hljs-tag">&lt;<span class="hljs-name">button</span> <span class="hljs-attr">disabled</span>&gt;</span>disabled<span class="hljs-tag">&lt;/<span class="hljs-name">button</span>&gt;</span> </span>',height:!1}}),{c(){e=E("h1"),e.textContent="Button",s=k(),r=E("p"),r.textContent="My button component",o=k(),i=E("h2"),i.textContent="Usage",l=k(),at(a.$$.fragment),c=k(),u=E("h2"),u.textContent="Properties",d=k(),f=E("dl"),f.innerHTML="<dt>type</dt><dd><dfn><i>&#39;default&#39;</i>,<i>&#39;error&#39;</i>,<i>&#39;success&#39;</i></dfn></dd><dd>&#39;default&#39;</dd><dd>Type of the button</dd><dt>disabled</dt><dd><dfn>bool</dfn></dd><dd>false</dd><dd>Make button disabled</dd>",C(e,"id","button"),C(i,"id","usage"),C(u,"id","properties"),C(f,"class","properties")},m(t,n){x(t,e,n),x(t,s,n),x(t,r,n),x(t,o,n),x(t,i,n),x(t,l,n),ct(a,t,n),x(t,c,n),x(t,u,n),x(t,d,n),x(t,f,n),p=!0},p:t,i(t){p||(st(a.$$.fragment,t),p=!0)},o(t){rt(a.$$.fragment,t),p=!1},d(t){t&&_(e),t&&_(s),t&&_(r),t&&_(o),t&&_(i),t&&_(l),ut(a,t),t&&_(c),t&&_(u),t&&_(d),t&&_(f)}}}const Rt={};function Bt(n){let e,s,r,o,i,l,a,c,u,d,f,p,m,h;return{c(){e=E("h1"),e.textContent="About my component",s=k(),r=E("p"),r.textContent="It is very cool button.",o=k(),i=E("h2"),i.textContent="Installation",l=k(),a=E("p"),a.textContent="Run this command:",c=k(),d=k(),f=E("p"),f.textContent="Then you can import it in your projects:",p=k(),h=L(),C(e,"id","about-my-component"),C(i,"id","installation"),u=new O(d),m=new O(h)},m(t,n){x(t,e,n),x(t,s,n),x(t,r,n),x(t,o,n),x(t,i,n),x(t,l,n),x(t,a,n),x(t,c,n),u.m(Wt,t,n),x(t,d,n),x(t,f,n),x(t,p,n),m.m(qt,t,n),x(t,h,n)},p:t,i:t,o:t,d(t){t&&_(e),t&&_(s),t&&_(r),t&&_(o),t&&_(i),t&&_(l),t&&_(a),t&&_(c),t&&u.d(),t&&_(d),t&&_(f),t&&_(p),t&&_(h),t&&m.d()}}}const It={},Wt='<pre><code class="language-shell"><span class="hljs-meta">$</span><span class="bash"> npm install -D my-svelte-button</span></code></pre>\n',qt='<pre><code class="language-html"><span class="hljs-tag">&lt;<span class="hljs-name">script</span>&gt;</span><span class="javascript"> \n    <span class="hljs-keyword">import</span> Button <span class="hljs-keyword">from</span> <span class="hljs-string">\'my-svelte-button\'</span>;\n</span><span class="hljs-tag">&lt;/<span class="hljs-name">script</span>&gt;</span></code></pre>\n';const zt=ht(Jt());function Ft(t){history.pushState({},"",""===t?Qt():t),zt.set(t.split("#")[0])}function Ut(){zt.set(Jt())}function Jt(){let t=location.pathname;return t=function(t){const n=Qt();t.startsWith(n)&&(t=t.slice(n.length));t.startsWith("/")&&(t=t.slice(1));t.endsWith("/")&&(t=t.slice(0,-1));return t}(t),t}function Kt(t){const n=t.target.closest("a");if(!n)return;const e=n.getAttribute("href");if(e){if(!/^\w+:\/\//.test(e))return t.preventDefault(),/^\/$/.test(e)?Ft(""):Ft(e);n.setAttribute("target","_blank")}}function Qt(){let t=(document.querySelector("base")||{}).href.replace(window.location.origin,"").slice(0,-1);return""===t?"/":t}const Vt=[{url:"",component:vt,title:wt.hasOwnProperty("title")?wt.title:"Start documentation!!!",meta:wt},{url:"sd:error",component:class extends pt{constructor(t){super(),ft(this,t,null,xt,l,{})}},title:_t.hasOwnProperty("title")?_t.title:"Page not found!",meta:_t},{url:"components/button",component:class extends pt{constructor(t){super(),ft(this,t,null,Gt,l,{})}},title:Rt.hasOwnProperty("title")?Rt.title:"Button",meta:Rt},{url:"getting-started",component:class extends pt{constructor(t){super(),ft(this,t,null,Bt,l,{})}},title:It.hasOwnProperty("title")?It.title:"About my component",meta:It},{url:"index",component:vt,title:wt.hasOwnProperty("title")?wt.title:"Start documentation!!!",meta:wt}],Xt=Vt.filter(t=>"sd:error"===t.url)[0],Yt=function(n,e,s){const r=!Array.isArray(n),l=r?[n]:n,c=e.length<2;return{subscribe:ht(s,n=>{let s=!1;const u=[];let d=0,f=t;const p=()=>{if(d)return;f();const s=e(r?u[0]:u,n);c?n(s):f=i(s)?s:t},m=l.map((t,n)=>a(t,t=>{u[n]=t,d&=~(1<<n),s&&p()},()=>{d|=1<<n}));return s=!0,p(),function(){o(m),f()}}).subscribe}}(zt,t=>{const n=Vt.filter(n=>n.url===t);return n.length>0?n[0]:Xt});function Zt(n){let e;return{c(){e=E("h1"),e.innerHTML='<a href="/">Svelte<span class="svelte-19hlx4g">Docs</span></a>',C(e,"id","sveltesvelte-md-block-tag-1")},m(t,n){x(t,e,n)},p:t,i:t,o:t,d(t){t&&_(e)}}}class tn extends pt{constructor(t){super(),ft(this,t,null,Zt,l,{})}}function nn(n){let e;return{c(){e=E("ul"),e.innerHTML='<li><a href="getting-started">Docs</a></li> \n<li><a href="https://github.com/ushliypakostnik/svelte-scss-router-i18n">Github</a></li>'},m(t,n){x(t,e,n)},p:t,i:t,o:t,d(t){t&&_(e)}}}class en extends pt{constructor(t){super(),ft(this,t,null,nn,l,{})}}function sn(n){let e,s,r,o,i,l;return s=new tn({}),i=new en({}),{c(){e=E("section"),at(s.$$.fragment),r=k(),o=E("section"),at(i.$$.fragment)},m(t,n){x(t,e,n),ct(s,e,null),x(t,r,n),x(t,o,n),ct(i,o,null),l=!0},p:t,i(t){l||(st(s.$$.fragment,t),st(i.$$.fragment,t),l=!0)},o(t){rt(s.$$.fragment,t),rt(i.$$.fragment,t),l=!1},d(t){t&&_(e),ut(s),t&&_(r),t&&_(o),ut(i)}}}class rn extends pt{constructor(t){super(),ft(this,t,null,sn,l,{})}}function on(n){let e;return{c(){e=E("ul"),e.innerHTML='<li><a href="getting-started">Getting Started</a></li> \n<li>Components<ul><li><a href="components/button">Button</a></li></ul></li> \n<li><a href="https://github.com/ushliypakostnik/svelte-scss-router-i18n">Github</a></li>'},m(t,n){x(t,e,n)},p:t,i:t,o:t,d(t){t&&_(e)}}}class ln extends pt{constructor(t){super(),ft(this,t,null,on,l,{})}}function an(n){let e,s;return e=new ln({}),{c(){at(e.$$.fragment)},m(t,n){ct(e,t,n),s=!0},p:t,i(t){s||(st(e.$$.fragment,t),s=!0)},o(t){rt(e.$$.fragment,t),s=!1},d(t){ut(e,t)}}}class cn extends pt{constructor(t){super(),ft(this,t,null,an,l,{})}}function un(t){let n,e,s;var r=t[0].component;return r&&(e=new r({})),{c(){n=E("article"),e&&at(e.$$.fragment)},m(t,r){x(t,n,r),e&&ct(e,n,null),s=!0},p(t,[s]){if(r!==(r=t[0].component)){if(e){nt();const t=e;rt(t.$$.fragment,1,0,()=>{ut(t,1)}),et()}r?(e=new r({}),at(e.$$.fragment),st(e.$$.fragment,1),ct(e,n,null)):e=null}},i(t){s||(e&&st(e.$$.fragment,t),s=!0)},o(t){e&&rt(e.$$.fragment,t),s=!1},d(t){t&&_(n),e&&ut(e)}}}function dn(t,n,e){let s;return c(t,Yt,t=>e(0,s=t)),Yt.subscribe(()=>{window.scrollTo(0,0)}),[s]}class fn extends pt{constructor(t){super(),ft(this,t,dn,un,l,{})}}const{document:pn}=lt;function mn(t){let n,e,s;return e=new fn({}),{c(){n=E("main"),at(e.$$.fragment),C(n,"class","fullscreen"),M(n,"mobile",t[2])},m(t,r){x(t,n,r),ct(e,n,null),s=!0},p(t,e){4&e&&M(n,"mobile",t[2])},i(t){s||(st(e.$$.fragment,t),s=!0)},o(t){rt(e.$$.fragment,t),s=!1},d(t){t&&_(n),ut(e)}}}function hn(t){let n,e,s,r,o,i=t[2]&&gn(t),l=(!t[2]||t[1])&&$n(t);return r=new fn({}),{c(){i&&i.c(),n=k(),l&&l.c(),e=k(),s=E("main"),at(r.$$.fragment),M(s,"mobile",t[2])},m(t,a){i&&i.m(t,a),x(t,n,a),l&&l.m(t,a),x(t,e,a),x(t,s,a),ct(r,s,null),o=!0},p(t,r){t[2]?i?i.p(t,r):(i=gn(t),i.c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null),!t[2]||t[1]?l?6&r&&st(l,1):(l=$n(t),l.c(),st(l,1),l.m(e.parentNode,e)):l&&(nt(),rt(l,1,1,()=>{l=null}),et()),4&r&&M(s,"mobile",t[2])},i(t){o||(st(l),st(r.$$.fragment,t),o=!0)},o(t){rt(l),rt(r.$$.fragment,t),o=!1},d(t){i&&i.d(t),t&&_(n),l&&l.d(t),t&&_(e),t&&_(s),ut(r)}}}function gn(t){let n,e,s,r,o;return{c(){n=E("button"),e=E("img"),e.src!==(s="assets/burger.svg")&&C(e,"src","assets/burger.svg"),C(e,"alt","Open Menu"),A(e,"transform","rotate("+t[3]+"deg)"),C(n,"class","showNav")},m(s,i){var l;x(s,n,i),v(n,e),r||(o=T(n,"click",(l=t[12],function(t){return t.stopPropagation(),l.call(this,t)})),r=!0)},p(t,n){8&n&&A(e,"transform","rotate("+t[3]+"deg)")},d(t){t&&_(n),r=!1,o()}}}function $n(t){let n,e,s,r,i,l,a,c;return e=new cn({}),{c(){n=E("nav"),at(e.$$.fragment)},m(o,i){x(o,n,i),ct(e,n,null),l=!0,a||(c=[m(s=t[7].call(null,n)),m(r=t[8].call(null,n))],a=!0)},i(s){l||(st(e.$$.fragment,s),U(()=>{i||(i=it(n,t[6],{},!0)),i.run(1)}),l=!0)},o(s){rt(e.$$.fragment,s),i||(i=it(n,t[6],{},!1)),i.run(0),l=!1},d(t){t&&_(n),ut(e),t&&i&&i.end(),a=!1,o(c)}}}function bn(t){let n,e,s,r,o,i,l,a,c,u;U(t[11]),pn.title=n=t[4],r=new rn({});let d="no_sidebar"===t[5]&&mn(t),f="default"===t[5]&&hn(t);return{c(){e=k(),s=E("header"),at(r.$$.fragment),o=k(),d&&d.c(),i=k(),f&&f.c(),l=L()},m(n,p){x(n,e,p),x(n,s,p),ct(r,s,null),x(n,o,p),d&&d.m(n,p),x(n,i,p),f&&f.m(n,p),x(n,l,p),a=!0,c||(u=T(window,"resize",t[11]),c=!0)},p(t,[e]){(!a||16&e)&&n!==(n=t[4])&&(pn.title=n),"no_sidebar"===t[5]?d?(d.p(t,e),32&e&&st(d,1)):(d=mn(t),d.c(),st(d,1),d.m(i.parentNode,i)):d&&(nt(),rt(d,1,1,()=>{d=null}),et()),"default"===t[5]?f?(f.p(t,e),32&e&&st(f,1)):(f=hn(t),f.c(),st(f,1),f.m(l.parentNode,l)):f&&(nt(),rt(f,1,1,()=>{f=null}),et())},i(t){a||(st(r.$$.fragment,t),st(d),st(f),a=!0)},o(t){rt(r.$$.fragment,t),rt(d),rt(f),a=!1},d(t){t&&_(e),t&&_(s),ut(r),t&&_(o),d&&d.d(t),t&&_(i),f&&f.d(t),t&&_(l),c=!1,u()}}}function yn(t,s,r){let o,i,l;c(t,Yt,t=>r(13,l=t));let a=0,u=!1;const d=ht(!0);c(t,d,t=>r(2,o=t));const f=function(t,s={}){const r=ht(t);let o,i=t;function l(l,a){if(null==t)return r.set(t=l),Promise.resolve();i=l;let c=o,u=!1,{delay:d=0,duration:f=400,easing:p=n,interpolate:m=bt}=e(e({},s),a);if(0===f)return c&&(c.abort(),c=null),r.set(t=i),Promise.resolve();const h=g()+d;let $;return o=w(n=>{if(n<h)return!0;u||($=m(t,l),"function"==typeof f&&(f=f(t,l)),u=!0),c&&(c.abort(),c=null);const e=n-h;return e>f?(r.set(t=l),!1):(r.set(t=$(p(e/f))),!0)}),o.promise}return{set:l,update:(n,e)=>l(n(i,t),e),subscribe:r.subscribe}}(0,{duration:200,easing:gt});c(t,f,t=>r(3,i=t));let m,h;return t.$$.update=()=>{1&t.$$.dirty&&p(d,o=a<800),6&t.$$.dirty&&r(1,u=!!o&&u),2&t.$$.dirty&&p(f,i=u?180:0),8192&t.$$.dirty&&r(4,m=l.title?l.title+" — Svelte Thing Documentation":"Svelte Thing Documentation"),8192&t.$$.dirty&&r(5,h=l.meta.layout?l.meta.layout:"default")},[a,u,o,i,m,h,function(t){const n=gt,e=getComputedStyle(t),s=parseFloat(e.width);return{delay:10,duration:200,easing:n,css:t=>`overflow: hidden;width: ${t*s}px;`}},function(t){return{destroy:Yt.subscribe(n=>{const e=n.url||"/";t.querySelectorAll("a").forEach(t=>{t.getAttribute("href")===e?t.classList.add("active"):t.classList.remove("active")})})}},function(t){const n=()=>r(1,u=!1);return document.body.addEventListener("click",n),{destroy(){document.body.removeEventListener("click",n)}}},d,f,function(){r(0,a=window.innerWidth)},()=>r(1,u=!u)]}class wn extends pt{constructor(t){super(),ft(this,t,yn,bn,l,{})}}function vn(n){let e,s;return e=new wn({}),{c(){at(e.$$.fragment)},m(t,n){ct(e,t,n),s=!0},p:t,i(t){s||(st(e.$$.fragment,t),s=!0)},o(t){rt(e.$$.fragment,t),s=!1},d(t){ut(e,t)}}}function xn(t){return R(()=>(addEventListener("click",Kt),addEventListener("popstate",Ut),function(){removeEventListener("click",Kt),removeEventListener("popstate",Ut)})),[]}return new class extends pt{constructor(t){super(),ft(this,t,xn,vn,l,{})}}({target:document.body,props:{}})}();
