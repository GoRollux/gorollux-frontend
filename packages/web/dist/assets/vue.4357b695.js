import{aE as _t,aF as At,aG as Ot,aH as xt,aI as Me,aJ as Mt,aK as Nt,aL as Ne,aM as jt,aN as ae,aO as It,ao as ce,aP as Bt,aQ as Lt,av as he,aR as Ht,r as de,aS as Tt,aT as $t,aU as at,aV as Vt,aW as ct,P as Dt,aX as it,aY as zt,aZ as J,a_ as Ut,a$ as qt,b0 as Gt,b1 as Kt,am as Ft,b2 as Wt,b3 as Qt,b4 as Yt,C as Xt,F as Jt,b5 as Zt,b6 as en,b7 as tn,aB as nn,b8 as sn,b9 as rn,ba as on,bb as an,a9 as cn,bc as ln,H,bd as un,be as fn,bf as hn,bg as dn,bh as pn,bi as mn,bj as gn,bk as vn,bl as yn,j as bn,bm as Rn,bn as En,l as je,bo as Sn,bp as Pn,bq as wn,br as Cn,o as Ie,bs as kn,bt as _n,M as Be,bu as An,bv as On,n as V,bw as xn,bx as Mn,k as Nn,by as jn,W as In,$ as Le,D as lt,A as Bn,q as Ln,aj as Hn,E as ut,bz as Tn,t as $n,bA as Vn,bB as Dn,bC as zn,ai as He,al as Un,bD as qn,bE as Gn,G as ue,bF as Kn,bG as Fn,bH as Wn,bI as Qn,as as Yn,bJ as Xn,bK as Jn,bL as Zn,bM as es,bN as ts,bO as ns,bP as ss,bQ as rs,bR as os,bS as as,bT as cs,bU as is,bV as ls,bW as us,bX as fs,bY as hs,bZ as ds,b_ as ps,w as Te,J as ms,b$ as gs,c0 as vs,c1 as ys,c2 as bs,c3 as Rs,a6 as Es,c4 as Ss,c5 as Ps,T as ws,O as Cs,c6 as ks,c7 as _s,c8 as As,c9 as Os,ca as xs,cb as Ms,cc as Ns,cd as js,ce as Is,cf as Bs,cg as Ls,ch as Hs,ci as Ts,cj as $s,ck as Vs,v as Ds,cl as zs,cm as Us,cn as qs,g as Gs}from"./bundle.0b4742f1.js";const Ks=()=>{},Fs=Object.freeze(Object.defineProperty({__proto__:null,compile:Ks,EffectScope:_t,ReactiveEffect:At,customRef:Ot,effect:xt,effectScope:Me,getCurrentScope:Mt,isProxy:Nt,isReactive:Ne,isReadonly:jt,isRef:ae,isShallow:It,markRaw:ce,onScopeDispose:Bt,proxyRefs:Lt,reactive:he,readonly:Ht,ref:de,shallowReactive:Tt,shallowReadonly:$t,shallowRef:at,stop:Vt,toRaw:ct,toRef:Dt,toRefs:it,triggerRef:zt,unref:J,camelize:Ut,capitalize:qt,normalizeClass:Gt,normalizeProps:Kt,normalizeStyle:Ft,toDisplayString:Wt,toHandlerKey:Qt,BaseTransition:Yt,Comment:Xt,Fragment:Jt,KeepAlive:Zt,Static:en,Suspense:tn,Teleport:nn,Text:sn,assertNumber:rn,callWithAsyncErrorHandling:on,callWithErrorHandling:an,cloneVNode:cn,compatUtils:ln,computed:H,createBlock:un,createCommentVNode:fn,createElementBlock:hn,createElementVNode:dn,createHydrationRenderer:pn,createPropsRestProxy:mn,createRenderer:gn,createSlots:vn,createStaticVNode:yn,createTextVNode:bn,createVNode:Rn,defineAsyncComponent:En,defineComponent:je,defineEmits:Sn,defineExpose:Pn,defineProps:wn,get devtools(){return Cn},getCurrentInstance:Ie,getTransitionRawChildren:kn,guardReactiveProps:_n,h:Be,handleError:An,initCustomFormatter:On,inject:V,isMemoSame:xn,isRuntimeOnly:Mn,isVNode:Nn,mergeDefaults:jn,mergeProps:In,nextTick:Le,onActivated:lt,onBeforeMount:Bn,onBeforeUnmount:Ln,onBeforeUpdate:Hn,onDeactivated:ut,onErrorCaptured:Tn,onMounted:$n,onRenderTracked:Vn,onRenderTriggered:Dn,onServerPrefetch:zn,onUnmounted:He,onUpdated:Un,openBlock:qn,popScopeId:Gn,provide:ue,pushScopeId:Kn,queuePostFlushCb:Fn,registerRuntimeCompiler:Wn,renderList:Qn,renderSlot:Yn,resolveComponent:Xn,resolveDirective:Jn,resolveDynamicComponent:Zn,resolveFilter:es,resolveTransitionHooks:ts,setBlockTracking:ns,setDevtoolsHook:ss,setTransitionHooks:rs,ssrContextKey:os,ssrUtils:as,toHandlers:cs,transformVNodeArgs:is,useAttrs:ls,useSSRContext:us,useSlots:fs,useTransitionState:hs,version:ds,warn:ps,watch:Te,watchEffect:ms,watchPostEffect:gs,watchSyncEffect:vs,withAsyncContext:ys,withCtx:bs,withDefaults:Rs,withDirectives:Es,withMemo:Ss,withScopeId:Ps,Transition:ws,TransitionGroup:Cs,VueElement:ks,createApp:_s,createSSRApp:As,defineCustomElement:Os,defineSSRCustomElement:xs,hydrate:Ms,initDirectivesForSSR:Ns,render:js,useCssModule:Is,useCssVars:Bs,vModelCheckbox:Ls,vModelDynamic:Hs,vModelRadio:Ts,vModelSelect:$s,vModelText:Vs,vShow:Ds,withKeys:zs,withModifiers:Us},Symbol.toStringTag,{value:"Module"}));/*!
  * pinia v2.0.22
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */let ft;const pe=e=>ft=e,ht=Symbol();function ke(e){return e&&typeof e=="object"&&Object.prototype.toString.call(e)==="[object Object]"&&typeof e.toJSON!="function"}var se;(function(e){e.direct="direct",e.patchObject="patch object",e.patchFunction="patch function"})(se||(se={}));function eo(){const e=Me(!0),t=e.run(()=>de({}));let n=[],s=[];const r=ce({install(c){pe(r),r._a=c,c.provide(ht,r),c.config.globalProperties.$pinia=r,s.forEach(h=>n.push(h)),s=[]},use(c){return!this._a&&!qs?s.push(c):n.push(c),this},_p:n,_a:null,_e:e,_s:new Map,state:t});return r}const dt=()=>{};function Ue(e,t,n,s=dt){e.push(t);const r=()=>{const c=e.indexOf(t);c>-1&&(e.splice(c,1),s())};return!n&&Ie()&&He(r),r}function Q(e,...t){e.slice().forEach(n=>{n(...t)})}function _e(e,t){e instanceof Map&&t instanceof Map&&t.forEach((n,s)=>e.set(s,n)),e instanceof Set&&t instanceof Set&&t.forEach(e.add,e);for(const n in t){if(!t.hasOwnProperty(n))continue;const s=t[n],r=e[n];ke(r)&&ke(s)&&e.hasOwnProperty(n)&&!ae(s)&&!Ne(s)?e[n]=_e(r,s):e[n]=s}return e}const Ws=Symbol();function Qs(e){return!ke(e)||!e.hasOwnProperty(Ws)}const{assign:U}=Object;function Ys(e){return!!(ae(e)&&e.effect)}function Xs(e,t,n,s){const{state:r,actions:c,getters:h}=t,d=n.state.value[e];let i;function f(){d||(n.state.value[e]=r?r():{});const o=it(n.state.value[e]);return U(o,c,Object.keys(h||{}).reduce((l,u)=>(l[u]=ce(H(()=>{pe(n);const m=n._s.get(e);return h[u].call(m,m)})),l),{}))}return i=pt(e,f,t,n,s,!0),i.$reset=function(){const l=r?r():{};this.$patch(u=>{U(u,l)})},i}function pt(e,t,n={},s,r,c){let h;const d=U({actions:{}},n),i={deep:!0};let f,o,l=ce([]),u=ce([]),m;const y=s.state.value[e];!c&&!y&&(s.state.value[e]={}),de({});let A;function C(w){let _;f=o=!1,typeof w=="function"?(w(s.state.value[e]),_={type:se.patchFunction,storeId:e,events:m}):(_e(s.state.value[e],w),_={type:se.patchObject,payload:w,storeId:e,events:m});const T=A=Symbol();Le().then(()=>{A===T&&(f=!0)}),o=!0,Q(l,_,s.state.value[e])}const S=dt;function R(){h.stop(),l=[],u=[],s._s.delete(e)}function N(w,_){return function(){pe(s);const T=Array.from(arguments),q=[],G=[];function W(I){q.push(I)}function ve(I){G.push(I)}Q(u,{args:T,name:w,store:M,after:W,onError:ve});let D;try{D=_.apply(this&&this.$id===e?this:M,T)}catch(I){throw Q(G,I),I}return D instanceof Promise?D.then(I=>(Q(q,I),I)).catch(I=>(Q(G,I),Promise.reject(I))):(Q(q,D),D)}}const L={_p:s,$id:e,$onAction:Ue.bind(null,u),$patch:C,$reset:S,$subscribe(w,_={}){const T=Ue(l,w,_.detached,()=>q()),q=h.run(()=>Te(()=>s.state.value[e],G=>{(_.flush==="sync"?o:f)&&w({storeId:e,type:se.direct,events:m},G)},U({},i,_)));return T},$dispose:R},M=he(U({},L));s._s.set(e,M);const j=s._e.run(()=>(h=Me(),h.run(()=>t())));for(const w in j){const _=j[w];if(ae(_)&&!Ys(_)||Ne(_))c||(y&&Qs(_)&&(ae(_)?_.value=y[w]:_e(_,y[w])),s.state.value[e][w]=_);else if(typeof _=="function"){const T=N(w,_);j[w]=T,d.actions[w]=_}}return U(M,j),U(ct(M),j),Object.defineProperty(M,"$state",{get:()=>s.state.value[e],set:w=>{C(_=>{U(_,w)})}}),s._p.forEach(w=>{U(M,h.run(()=>w({store:M,app:s._a,pinia:s,options:d})))}),y&&c&&n.hydrate&&n.hydrate(M.$state,y),f=!0,o=!0,M}function to(e,t,n){let s,r;const c=typeof t=="function";typeof e=="string"?(s=e,r=c?n:t):(r=e,s=e.id);function h(d,i){const f=Ie();return d=d||f&&V(ht),d&&pe(d),d=ft,d._s.has(s)||(c?pt(s,t,r,d):Xs(s,r,d)),d._s.get(s)}return h.$id=s,h}/*!
  * vue-router v4.1.5
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const X=typeof window<"u";function Js(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const P=Object.assign;function Pe(e,t){const n={};for(const s in t){const r=t[s];n[s]=$(r)?r.map(e):e(r)}return n}const re=()=>{},$=Array.isArray,Zs=/\/$/,er=e=>e.replace(Zs,"");function we(e,t,n="/"){let s,r={},c="",h="";const d=t.indexOf("#");let i=t.indexOf("?");return d<i&&d>=0&&(i=-1),i>-1&&(s=t.slice(0,i),c=t.slice(i+1,d>-1?d:t.length),r=e(c)),d>-1&&(s=s||t.slice(0,d),h=t.slice(d,t.length)),s=rr(s!=null?s:t,n),{fullPath:s+(c&&"?")+c+h,path:s,query:r,hash:h}}function tr(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function qe(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function nr(e,t,n){const s=t.matched.length-1,r=n.matched.length-1;return s>-1&&s===r&&Z(t.matched[s],n.matched[r])&&mt(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Z(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function mt(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!sr(e[n],t[n]))return!1;return!0}function sr(e,t){return $(e)?Ge(e,t):$(t)?Ge(t,e):e===t}function Ge(e,t){return $(t)?e.length===t.length&&e.every((n,s)=>n===t[s]):e.length===1&&e[0]===t}function rr(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),s=e.split("/");let r=n.length-1,c,h;for(c=0;c<s.length;c++)if(h=s[c],h!==".")if(h==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(c-(c===s.length?1:0)).join("/")}var ie;(function(e){e.pop="pop",e.push="push"})(ie||(ie={}));var oe;(function(e){e.back="back",e.forward="forward",e.unknown=""})(oe||(oe={}));function or(e){if(!e)if(X){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),er(e)}const ar=/^[^#]+#/;function cr(e,t){return e.replace(ar,"#")+t}function ir(e,t){const n=document.documentElement.getBoundingClientRect(),s=e.getBoundingClientRect();return{behavior:t.behavior,left:s.left-n.left-(t.left||0),top:s.top-n.top-(t.top||0)}}const me=()=>({left:window.pageXOffset,top:window.pageYOffset});function lr(e){let t;if("el"in e){const n=e.el,s=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;t=ir(r,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Ke(e,t){return(history.state?history.state.position-t:-1)+e}const Ae=new Map;function ur(e,t){Ae.set(e,t)}function fr(e){const t=Ae.get(e);return Ae.delete(e),t}let hr=()=>location.protocol+"//"+location.host;function gt(e,t){const{pathname:n,search:s,hash:r}=t,c=e.indexOf("#");if(c>-1){let d=r.includes(e.slice(c))?e.slice(c).length:1,i=r.slice(d);return i[0]!=="/"&&(i="/"+i),qe(i,"")}return qe(n,e)+s+r}function dr(e,t,n,s){let r=[],c=[],h=null;const d=({state:u})=>{const m=gt(e,location),y=n.value,A=t.value;let C=0;if(u){if(n.value=m,t.value=u,h&&h===y){h=null;return}C=A?u.position-A.position:0}else s(m);r.forEach(S=>{S(n.value,y,{delta:C,type:ie.pop,direction:C?C>0?oe.forward:oe.back:oe.unknown})})};function i(){h=n.value}function f(u){r.push(u);const m=()=>{const y=r.indexOf(u);y>-1&&r.splice(y,1)};return c.push(m),m}function o(){const{history:u}=window;!u.state||u.replaceState(P({},u.state,{scroll:me()}),"")}function l(){for(const u of c)u();c=[],window.removeEventListener("popstate",d),window.removeEventListener("beforeunload",o)}return window.addEventListener("popstate",d),window.addEventListener("beforeunload",o),{pauseListeners:i,listen:f,destroy:l}}function Fe(e,t,n,s=!1,r=!1){return{back:e,current:t,forward:n,replaced:s,position:window.history.length,scroll:r?me():null}}function pr(e){const{history:t,location:n}=window,s={value:gt(e,n)},r={value:t.state};r.value||c(s.value,{back:null,current:s.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function c(i,f,o){const l=e.indexOf("#"),u=l>-1?(n.host&&document.querySelector("base")?e:e.slice(l))+i:hr()+e+i;try{t[o?"replaceState":"pushState"](f,"",u),r.value=f}catch(m){console.error(m),n[o?"replace":"assign"](u)}}function h(i,f){const o=P({},t.state,Fe(r.value.back,i,r.value.forward,!0),f,{position:r.value.position});c(i,o,!0),s.value=i}function d(i,f){const o=P({},r.value,t.state,{forward:i,scroll:me()});c(o.current,o,!0);const l=P({},Fe(s.value,i,null),{position:o.position+1},f);c(i,l,!1),s.value=i}return{location:s,state:r,push:d,replace:h}}function no(e){e=or(e);const t=pr(e),n=dr(e,t.state,t.location,t.replace);function s(c,h=!0){h||n.pauseListeners(),history.go(c)}const r=P({location:"",base:e,go:s,createHref:cr.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}function mr(e){return typeof e=="string"||e&&typeof e=="object"}function vt(e){return typeof e=="string"||typeof e=="symbol"}const K={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},yt=Symbol("");var We;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(We||(We={}));function ee(e,t){return P(new Error,{type:e,[yt]:!0},t)}function z(e,t){return e instanceof Error&&yt in e&&(t==null||!!(e.type&t))}const Qe="[^/]+?",gr={sensitive:!1,strict:!1,start:!0,end:!0},vr=/[.+*?^${}()[\]/\\]/g;function yr(e,t){const n=P({},gr,t),s=[];let r=n.start?"^":"";const c=[];for(const f of e){const o=f.length?[]:[90];n.strict&&!f.length&&(r+="/");for(let l=0;l<f.length;l++){const u=f[l];let m=40+(n.sensitive?.25:0);if(u.type===0)l||(r+="/"),r+=u.value.replace(vr,"\\$&"),m+=40;else if(u.type===1){const{value:y,repeatable:A,optional:C,regexp:S}=u;c.push({name:y,repeatable:A,optional:C});const R=S||Qe;if(R!==Qe){m+=10;try{new RegExp(`(${R})`)}catch(L){throw new Error(`Invalid custom RegExp for param "${y}" (${R}): `+L.message)}}let N=A?`((?:${R})(?:/(?:${R}))*)`:`(${R})`;l||(N=C&&f.length<2?`(?:/${N})`:"/"+N),C&&(N+="?"),r+=N,m+=20,C&&(m+=-8),A&&(m+=-20),R===".*"&&(m+=-50)}o.push(m)}s.push(o)}if(n.strict&&n.end){const f=s.length-1;s[f][s[f].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const h=new RegExp(r,n.sensitive?"":"i");function d(f){const o=f.match(h),l={};if(!o)return null;for(let u=1;u<o.length;u++){const m=o[u]||"",y=c[u-1];l[y.name]=m&&y.repeatable?m.split("/"):m}return l}function i(f){let o="",l=!1;for(const u of e){(!l||!o.endsWith("/"))&&(o+="/"),l=!1;for(const m of u)if(m.type===0)o+=m.value;else if(m.type===1){const{value:y,repeatable:A,optional:C}=m,S=y in f?f[y]:"";if($(S)&&!A)throw new Error(`Provided param "${y}" is an array but it is not repeatable (* or + modifiers)`);const R=$(S)?S.join("/"):S;if(!R)if(C)u.length<2&&(o.endsWith("/")?o=o.slice(0,-1):l=!0);else throw new Error(`Missing required param "${y}"`);o+=R}}return o||"/"}return{re:h,score:s,keys:c,parse:d,stringify:i}}function br(e,t){let n=0;for(;n<e.length&&n<t.length;){const s=t[n]-e[n];if(s)return s;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Rr(e,t){let n=0;const s=e.score,r=t.score;for(;n<s.length&&n<r.length;){const c=br(s[n],r[n]);if(c)return c;n++}if(Math.abs(r.length-s.length)===1){if(Ye(s))return 1;if(Ye(r))return-1}return r.length-s.length}function Ye(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Er={type:0,value:""},Sr=/[a-zA-Z0-9_]/;function Pr(e){if(!e)return[[]];if(e==="/")return[[Er]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${f}": ${m}`)}let n=0,s=n;const r=[];let c;function h(){c&&r.push(c),c=[]}let d=0,i,f="",o="";function l(){!f||(n===0?c.push({type:0,value:f}):n===1||n===2||n===3?(c.length>1&&(i==="*"||i==="+")&&t(`A repeatable param (${f}) must be alone in its segment. eg: '/:ids+.`),c.push({type:1,value:f,regexp:o,repeatable:i==="*"||i==="+",optional:i==="*"||i==="?"})):t("Invalid state to consume buffer"),f="")}function u(){f+=i}for(;d<e.length;){if(i=e[d++],i==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:i==="/"?(f&&l(),h()):i===":"?(l(),n=1):u();break;case 4:u(),n=s;break;case 1:i==="("?n=2:Sr.test(i)?u():(l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&d--);break;case 2:i===")"?o[o.length-1]=="\\"?o=o.slice(0,-1)+i:n=3:o+=i;break;case 3:l(),n=0,i!=="*"&&i!=="?"&&i!=="+"&&d--,o="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${f}"`),l(),h(),r}function wr(e,t,n){const s=yr(Pr(e.path),n),r=P(s,{record:e,parent:t,children:[],alias:[]});return t&&!r.record.aliasOf==!t.record.aliasOf&&t.children.push(r),r}function Cr(e,t){const n=[],s=new Map;t=Ze({strict:!1,end:!0,sensitive:!1},t);function r(o){return s.get(o)}function c(o,l,u){const m=!u,y=kr(o);y.aliasOf=u&&u.record;const A=Ze(t,o),C=[y];if("alias"in o){const N=typeof o.alias=="string"?[o.alias]:o.alias;for(const L of N)C.push(P({},y,{components:u?u.record.components:y.components,path:L,aliasOf:u?u.record:y}))}let S,R;for(const N of C){const{path:L}=N;if(l&&L[0]!=="/"){const M=l.record.path,j=M[M.length-1]==="/"?"":"/";N.path=l.record.path+(L&&j+L)}if(S=wr(N,l,A),u?u.alias.push(S):(R=R||S,R!==S&&R.alias.push(S),m&&o.name&&!Je(S)&&h(o.name)),y.children){const M=y.children;for(let j=0;j<M.length;j++)c(M[j],S,u&&u.children[j])}u=u||S,i(S)}return R?()=>{h(R)}:re}function h(o){if(vt(o)){const l=s.get(o);l&&(s.delete(o),n.splice(n.indexOf(l),1),l.children.forEach(h),l.alias.forEach(h))}else{const l=n.indexOf(o);l>-1&&(n.splice(l,1),o.record.name&&s.delete(o.record.name),o.children.forEach(h),o.alias.forEach(h))}}function d(){return n}function i(o){let l=0;for(;l<n.length&&Rr(o,n[l])>=0&&(o.record.path!==n[l].record.path||!bt(o,n[l]));)l++;n.splice(l,0,o),o.record.name&&!Je(o)&&s.set(o.record.name,o)}function f(o,l){let u,m={},y,A;if("name"in o&&o.name){if(u=s.get(o.name),!u)throw ee(1,{location:o});A=u.record.name,m=P(Xe(l.params,u.keys.filter(R=>!R.optional).map(R=>R.name)),o.params&&Xe(o.params,u.keys.map(R=>R.name))),y=u.stringify(m)}else if("path"in o)y=o.path,u=n.find(R=>R.re.test(y)),u&&(m=u.parse(y),A=u.record.name);else{if(u=l.name?s.get(l.name):n.find(R=>R.re.test(l.path)),!u)throw ee(1,{location:o,currentLocation:l});A=u.record.name,m=P({},l.params,o.params),y=u.stringify(m)}const C=[];let S=u;for(;S;)C.unshift(S.record),S=S.parent;return{name:A,path:y,params:m,matched:C,meta:Ar(C)}}return e.forEach(o=>c(o)),{addRoute:c,resolve:f,removeRoute:h,getRoutes:d,getRecordMatcher:r}}function Xe(e,t){const n={};for(const s of t)s in e&&(n[s]=e[s]);return n}function kr(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:_r(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function _r(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const s in e.components)t[s]=typeof n=="boolean"?n:n[s];return t}function Je(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function Ar(e){return e.reduce((t,n)=>P(t,n.meta),{})}function Ze(e,t){const n={};for(const s in e)n[s]=s in t?t[s]:e[s];return n}function bt(e,t){return t.children.some(n=>n===e||bt(e,n))}const Rt=/#/g,Or=/&/g,xr=/\//g,Mr=/=/g,Nr=/\?/g,Et=/\+/g,jr=/%5B/g,Ir=/%5D/g,St=/%5E/g,Br=/%60/g,Pt=/%7B/g,Lr=/%7C/g,wt=/%7D/g,Hr=/%20/g;function $e(e){return encodeURI(""+e).replace(Lr,"|").replace(jr,"[").replace(Ir,"]")}function Tr(e){return $e(e).replace(Pt,"{").replace(wt,"}").replace(St,"^")}function Oe(e){return $e(e).replace(Et,"%2B").replace(Hr,"+").replace(Rt,"%23").replace(Or,"%26").replace(Br,"`").replace(Pt,"{").replace(wt,"}").replace(St,"^")}function $r(e){return Oe(e).replace(Mr,"%3D")}function Vr(e){return $e(e).replace(Rt,"%23").replace(Nr,"%3F")}function Dr(e){return e==null?"":Vr(e).replace(xr,"%2F")}function fe(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function zr(e){const t={};if(e===""||e==="?")return t;const s=(e[0]==="?"?e.slice(1):e).split("&");for(let r=0;r<s.length;++r){const c=s[r].replace(Et," "),h=c.indexOf("="),d=fe(h<0?c:c.slice(0,h)),i=h<0?null:fe(c.slice(h+1));if(d in t){let f=t[d];$(f)||(f=t[d]=[f]),f.push(i)}else t[d]=i}return t}function et(e){let t="";for(let n in e){const s=e[n];if(n=$r(n),s==null){s!==void 0&&(t+=(t.length?"&":"")+n);continue}($(s)?s.map(c=>c&&Oe(c)):[s&&Oe(s)]).forEach(c=>{c!==void 0&&(t+=(t.length?"&":"")+n,c!=null&&(t+="="+c))})}return t}function Ur(e){const t={};for(const n in e){const s=e[n];s!==void 0&&(t[n]=$(s)?s.map(r=>r==null?null:""+r):s==null?s:""+s)}return t}const Ct=Symbol(""),tt=Symbol(""),ge=Symbol(""),Ve=Symbol(""),xe=Symbol("");function ne(){let e=[];function t(s){return e.push(s),()=>{const r=e.indexOf(s);r>-1&&e.splice(r,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function qr(e,t,n){const s=()=>{e[t].delete(n)};He(s),ut(s),lt(()=>{e[t].add(n)}),e[t].add(n)}function so(e){const t=V(Ct,{}).value;!t||qr(t,"leaveGuards",e)}function F(e,t,n,s,r){const c=s&&(s.enterCallbacks[r]=s.enterCallbacks[r]||[]);return()=>new Promise((h,d)=>{const i=l=>{l===!1?d(ee(4,{from:n,to:t})):l instanceof Error?d(l):mr(l)?d(ee(2,{from:t,to:l})):(c&&s.enterCallbacks[r]===c&&typeof l=="function"&&c.push(l),h())},f=e.call(s&&s.instances[r],t,n,i);let o=Promise.resolve(f);e.length<3&&(o=o.then(i)),o.catch(l=>d(l))})}function Ce(e,t,n,s){const r=[];for(const c of e)for(const h in c.components){let d=c.components[h];if(!(t!=="beforeRouteEnter"&&!c.instances[h]))if(Gr(d)){const f=(d.__vccOpts||d)[t];f&&r.push(F(f,n,s,c,h))}else{let i=d();r.push(()=>i.then(f=>{if(!f)return Promise.reject(new Error(`Couldn't resolve component "${h}" at "${c.path}"`));const o=Js(f)?f.default:f;c.components[h]=o;const u=(o.__vccOpts||o)[t];return u&&F(u,n,s,c,h)()}))}}return r}function Gr(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function nt(e){const t=V(ge),n=V(Ve),s=H(()=>t.resolve(J(e.to))),r=H(()=>{const{matched:i}=s.value,{length:f}=i,o=i[f-1],l=n.matched;if(!o||!l.length)return-1;const u=l.findIndex(Z.bind(null,o));if(u>-1)return u;const m=st(i[f-2]);return f>1&&st(o)===m&&l[l.length-1].path!==m?l.findIndex(Z.bind(null,i[f-2])):u}),c=H(()=>r.value>-1&&Qr(n.params,s.value.params)),h=H(()=>r.value>-1&&r.value===n.matched.length-1&&mt(n.params,s.value.params));function d(i={}){return Wr(i)?t[J(e.replace)?"replace":"push"](J(e.to)).catch(re):Promise.resolve()}return{route:s,href:H(()=>s.value.href),isActive:c,isExactActive:h,navigate:d}}const Kr=je({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:nt,setup(e,{slots:t}){const n=he(nt(e)),{options:s}=V(ge),r=H(()=>({[rt(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[rt(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const c=t.default&&t.default(n);return e.custom?c:Be("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},c)}}}),Fr=Kr;function Wr(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Qr(e,t){for(const n in t){const s=t[n],r=e[n];if(typeof s=="string"){if(s!==r)return!1}else if(!$(r)||r.length!==s.length||s.some((c,h)=>c!==r[h]))return!1}return!0}function st(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const rt=(e,t,n)=>e!=null?e:t!=null?t:n,Yr=je({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=V(xe),r=H(()=>e.route||s.value),c=V(tt,0),h=H(()=>{let f=J(c);const{matched:o}=r.value;let l;for(;(l=o[f])&&!l.components;)f++;return f}),d=H(()=>r.value.matched[h.value]);ue(tt,H(()=>h.value+1)),ue(Ct,d),ue(xe,r);const i=de();return Te(()=>[i.value,d.value,e.name],([f,o,l],[u,m,y])=>{o&&(o.instances[l]=f,m&&m!==o&&f&&f===u&&(o.leaveGuards.size||(o.leaveGuards=m.leaveGuards),o.updateGuards.size||(o.updateGuards=m.updateGuards))),f&&o&&(!m||!Z(o,m)||!u)&&(o.enterCallbacks[l]||[]).forEach(A=>A(f))},{flush:"post"}),()=>{const f=r.value,o=e.name,l=d.value,u=l&&l.components[o];if(!u)return ot(n.default,{Component:u,route:f});const m=l.props[o],y=m?m===!0?f.params:typeof m=="function"?m(f):m:null,C=Be(u,P({},y,t,{onVnodeUnmounted:S=>{S.component.isUnmounted&&(l.instances[o]=null)},ref:i}));return ot(n.default,{Component:C,route:f})||C}}});function ot(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const Xr=Yr;function ro(e){const t=Cr(e.routes,e),n=e.parseQuery||zr,s=e.stringifyQuery||et,r=e.history,c=ne(),h=ne(),d=ne(),i=at(K);let f=K;X&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const o=Pe.bind(null,a=>""+a),l=Pe.bind(null,Dr),u=Pe.bind(null,fe);function m(a,g){let p,v;return vt(a)?(p=t.getRecordMatcher(a),v=g):v=a,t.addRoute(v,p)}function y(a){const g=t.getRecordMatcher(a);g&&t.removeRoute(g)}function A(){return t.getRoutes().map(a=>a.record)}function C(a){return!!t.getRecordMatcher(a)}function S(a,g){if(g=P({},g||i.value),typeof a=="string"){const b=we(n,a,g.path),x=t.resolve({path:b.path},g),te=r.createHref(b.fullPath);return P(b,x,{params:u(x.params),hash:fe(b.hash),redirectedFrom:void 0,href:te})}let p;if("path"in a)p=P({},a,{path:we(n,a.path,g.path).path});else{const b=P({},a.params);for(const x in b)b[x]==null&&delete b[x];p=P({},a,{params:l(a.params)}),g.params=l(g.params)}const v=t.resolve(p,g),k=a.hash||"";v.params=o(u(v.params));const O=tr(s,P({},a,{hash:Tr(k),path:v.path})),E=r.createHref(O);return P({fullPath:O,hash:k,query:s===et?Ur(a.query):a.query||{}},v,{redirectedFrom:void 0,href:E})}function R(a){return typeof a=="string"?we(n,a,i.value.path):P({},a)}function N(a,g){if(f!==a)return ee(8,{from:g,to:a})}function L(a){return w(a)}function M(a){return L(P(R(a),{replace:!0}))}function j(a){const g=a.matched[a.matched.length-1];if(g&&g.redirect){const{redirect:p}=g;let v=typeof p=="function"?p(a):p;return typeof v=="string"&&(v=v.includes("?")||v.includes("#")?v=R(v):{path:v},v.params={}),P({query:a.query,hash:a.hash,params:"path"in v?{}:a.params},v)}}function w(a,g){const p=f=S(a),v=i.value,k=a.state,O=a.force,E=a.replace===!0,b=j(p);if(b)return w(P(R(b),{state:typeof b=="object"?P({},k,b.state):k,force:O,replace:E}),g||p);const x=p;x.redirectedFrom=g;let te;return!O&&nr(s,v,p)&&(te=ee(16,{to:x,from:v}),De(v,v,!0,!1)),(te?Promise.resolve(te):T(x,v)).catch(B=>z(B)?z(B,2)?B:be(B):ye(B,x,v)).then(B=>{if(B){if(z(B,2))return w(P({replace:E},R(B.to),{state:typeof B.to=="object"?P({},k,B.to.state):k,force:O}),g||x)}else B=G(x,v,!0,E,k);return q(x,v,B),B})}function _(a,g){const p=N(a,g);return p?Promise.reject(p):Promise.resolve()}function T(a,g){let p;const[v,k,O]=Jr(a,g);p=Ce(v.reverse(),"beforeRouteLeave",a,g);for(const b of v)b.leaveGuards.forEach(x=>{p.push(F(x,a,g))});const E=_.bind(null,a,g);return p.push(E),Y(p).then(()=>{p=[];for(const b of c.list())p.push(F(b,a,g));return p.push(E),Y(p)}).then(()=>{p=Ce(k,"beforeRouteUpdate",a,g);for(const b of k)b.updateGuards.forEach(x=>{p.push(F(x,a,g))});return p.push(E),Y(p)}).then(()=>{p=[];for(const b of a.matched)if(b.beforeEnter&&!g.matched.includes(b))if($(b.beforeEnter))for(const x of b.beforeEnter)p.push(F(x,a,g));else p.push(F(b.beforeEnter,a,g));return p.push(E),Y(p)}).then(()=>(a.matched.forEach(b=>b.enterCallbacks={}),p=Ce(O,"beforeRouteEnter",a,g),p.push(E),Y(p))).then(()=>{p=[];for(const b of h.list())p.push(F(b,a,g));return p.push(E),Y(p)}).catch(b=>z(b,8)?b:Promise.reject(b))}function q(a,g,p){for(const v of d.list())v(a,g,p)}function G(a,g,p,v,k){const O=N(a,g);if(O)return O;const E=g===K,b=X?history.state:{};p&&(v||E?r.replace(a.fullPath,P({scroll:E&&b&&b.scroll},k)):r.push(a.fullPath,k)),i.value=a,De(a,g,p,E),be()}let W;function ve(){W||(W=r.listen((a,g,p)=>{if(!ze.listening)return;const v=S(a),k=j(v);if(k){w(P(k,{replace:!0}),v).catch(re);return}f=v;const O=i.value;X&&ur(Ke(O.fullPath,p.delta),me()),T(v,O).catch(E=>z(E,12)?E:z(E,2)?(w(E.to,v).then(b=>{z(b,20)&&!p.delta&&p.type===ie.pop&&r.go(-1,!1)}).catch(re),Promise.reject()):(p.delta&&r.go(-p.delta,!1),ye(E,v,O))).then(E=>{E=E||G(v,O,!1),E&&(p.delta&&!z(E,8)?r.go(-p.delta,!1):p.type===ie.pop&&z(E,20)&&r.go(-1,!1)),q(v,O,E)}).catch(re)}))}let D=ne(),I=ne(),le;function ye(a,g,p){be(a);const v=I.list();return v.length?v.forEach(k=>k(a,g,p)):console.error(a),Promise.reject(a)}function kt(){return le&&i.value!==K?Promise.resolve():new Promise((a,g)=>{D.add([a,g])})}function be(a){return le||(le=!a,ve(),D.list().forEach(([g,p])=>a?p(a):g()),D.reset()),a}function De(a,g,p,v){const{scrollBehavior:k}=e;if(!X||!k)return Promise.resolve();const O=!p&&fr(Ke(a.fullPath,0))||(v||!p)&&history.state&&history.state.scroll||null;return Le().then(()=>k(a,g,O)).then(E=>E&&lr(E)).catch(E=>ye(E,a,g))}const Re=a=>r.go(a);let Ee;const Se=new Set,ze={currentRoute:i,listening:!0,addRoute:m,removeRoute:y,hasRoute:C,getRoutes:A,resolve:S,options:e,push:L,replace:M,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:c.add,beforeResolve:h.add,afterEach:d.add,onError:I.add,isReady:kt,install(a){const g=this;a.component("RouterLink",Fr),a.component("RouterView",Xr),a.config.globalProperties.$router=g,Object.defineProperty(a.config.globalProperties,"$route",{enumerable:!0,get:()=>J(i)}),X&&!Ee&&i.value===K&&(Ee=!0,L(r.location).catch(k=>{}));const p={};for(const k in K)p[k]=H(()=>i.value[k]);a.provide(ge,g),a.provide(Ve,he(p)),a.provide(xe,i);const v=a.unmount;Se.add(a),a.unmount=function(){Se.delete(a),Se.size<1&&(f=K,W&&W(),W=null,i.value=K,Ee=!1,le=!1),v()}}};return ze}function Y(e){return e.reduce((t,n)=>t.then(()=>n()),Promise.resolve())}function Jr(e,t){const n=[],s=[],r=[],c=Math.max(t.matched.length,e.matched.length);for(let h=0;h<c;h++){const d=t.matched[h];d&&(e.matched.find(f=>Z(f,d))?s.push(d):n.push(d));const i=e.matched[h];i&&(t.matched.find(f=>Z(f,i))||r.push(i))}return[n,s,r]}function oo(){return V(ge)}function ao(){return V(Ve)}const co=Gs(Fs);export{Xr as R,no as a,eo as b,ro as c,to as d,oo as e,Fr as f,so as o,co as r,ao as u};
