import{S as m,y as W,z as X,A as P,B as k,C as g,D as O,U as v,m as p,F,G as ee,H as re,I as ne,h as C,J as te,b as ie,E as se,K as ae,L as fe,M as ue,N as K,O as Y,a as q,P as M,c as le,Q as ce,R as _e,T as J,V as oe,g as U,W as G,X as A,Y as Q,Z as de,_ as ve,$ as H,a0 as be,l as he,a1 as pe,a2 as ye,p as Z,a3 as Pe,a4 as ge,a5 as we}from"./BwJFPAb6.js";function I(e,r=null,u){if(typeof e!="object"||e===null||m in e)return e;const a=re(e);if(a!==W&&a!==X)return e;var t=new Map,_=ne(e),b=P(0);_&&t.set("length",P(e.length));var y;return new Proxy(e,{defineProperty(l,n,i){(!("value"in i)||i.configurable===!1||i.enumerable===!1||i.writable===!1)&&k();var f=t.get(n);return f===void 0?(f=P(i.value),t.set(n,f)):g(f,I(i.value,y)),!0},deleteProperty(l,n){var i=t.get(n);if(i===void 0)n in l&&t.set(n,P(v));else{if(_&&typeof n=="string"){var f=t.get("length"),s=Number(n);Number.isInteger(s)&&s<f.v&&g(f,s)}g(i,v),$(b)}return!0},get(l,n,i){var d;if(n===m)return e;var f=t.get(n),s=n in l;if(f===void 0&&(!s||(d=O(l,n))!=null&&d.writable)&&(f=P(I(s?l[n]:v,y)),t.set(n,f)),f!==void 0){var c=p(f);return c===v?void 0:c}return Reflect.get(l,n,i)},getOwnPropertyDescriptor(l,n){var i=Reflect.getOwnPropertyDescriptor(l,n);if(i&&"value"in i){var f=t.get(n);f&&(i.value=p(f))}else if(i===void 0){var s=t.get(n),c=s==null?void 0:s.v;if(s!==void 0&&c!==v)return{enumerable:!0,configurable:!0,value:c,writable:!0}}return i},has(l,n){var c;if(n===m)return!0;var i=t.get(n),f=i!==void 0&&i.v!==v||Reflect.has(l,n);if(i!==void 0||F!==null&&(!f||(c=O(l,n))!=null&&c.writable)){i===void 0&&(i=P(f?I(l[n],y):v),t.set(n,i));var s=p(i);if(s===v)return!1}return f},set(l,n,i,f){var R;var s=t.get(n),c=n in l;if(_&&n==="length")for(var d=i;d<s.v;d+=1){var w=t.get(d+"");w!==void 0?g(w,v):d in l&&(w=P(v),t.set(d+"",w))}s===void 0?(!c||(R=O(l,n))!=null&&R.writable)&&(s=P(void 0),g(s,I(i,y)),t.set(n,s)):(c=s.v!==v,g(s,I(i,y)));var h=Reflect.getOwnPropertyDescriptor(l,n);if(h!=null&&h.set&&h.set.call(f,i),!c){if(_&&typeof n=="string"){var S=t.get("length"),x=Number(n);Number.isInteger(x)&&x>=S.v&&g(S,x+1)}$(b)}return!0},ownKeys(l){p(b);var n=Reflect.ownKeys(l).filter(s=>{var c=t.get(s);return c===void 0||c.v!==v});for(var[i,f]of t)f.v!==v&&!(i in l)&&n.push(i);return n},setPrototypeOf(){ee()}})}function $(e,r=1){g(e,e.v+r)}function z(e){return e!==null&&typeof e=="object"&&m in e?e[m]:e}function Se(e,r){return Object.is(z(e),z(r))}function xe(e,r,u=!1){C&&te();var a=e,t=null,_=null,b=v,y=u?se:0,l=!1;const n=(f,s=!0)=>{l=!0,i(s,f)},i=(f,s)=>{if(b===(b=f))return;let c=!1;if(C){const d=a.data===ae;!!b===d&&(a=fe(),ue(a),K(!1),c=!0)}b?(t?Y(t):s&&(t=q(()=>s(a))),_&&M(_,()=>{_=null})):(_?Y(_):s&&(_=q(()=>s(a))),t&&M(t,()=>{t=null})),c&&K(!0)};ie(()=>{l=!1,r(n),l||i(null,null)},y),C&&(a=le)}let N=!1;function me(e){var r=N;try{return N=!1,[e(),N]}finally{N=r}}const Re={get(e,r){if(!e.exclude.includes(r))return p(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,u){return r in e.special||(e.special[r]=Ie({get[r](){return e.props[r]}},r,J)),e.special[r](u),G(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),G(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Te(e,r){return new Proxy({props:e,exclude:r,special:{},version:P(0)},Re)}const Ee={get(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a)return a[r]}},set(e,r,u){let a=e.props.length;for(;a--;){let t=e.props[a];A(t)&&(t=t());const _=O(t,r);if(_&&_.set)return _.set(u),!0}return!1},getOwnPropertyDescriptor(e,r){let u=e.props.length;for(;u--;){let a=e.props[u];if(A(a)&&(a=a()),typeof a=="object"&&a!==null&&r in a){const t=O(a,r);return t&&!t.configurable&&(t.configurable=!0),t}}},has(e,r){if(r===m||r===Q)return!1;for(let u of e.props)if(A(u)&&(u=u()),u!=null&&r in u)return!0;return!1},ownKeys(e){const r=[];for(let u of e.props){A(u)&&(u=u());for(const a in u)r.includes(a)||r.push(a)}return r}};function Ae(...e){return new Proxy({props:e},Ee)}function V(e){for(var r=F,u=F;r!==null&&!(r.f&(de|ve));)r=r.parent;try{return H(r),e()}finally{H(u)}}function Ie(e,r,u,a){var B;var t=(u&be)!==0,_=!he||(u&pe)!==0,b=(u&ye)!==0,y=(u&ge)!==0,l=!1,n;b?[n,l]=me(()=>e[r]):n=e[r];var i=m in e||Q in e,f=b&&(((B=O(e,r))==null?void 0:B.set)??(i&&r in e&&(o=>e[r]=o)))||void 0,s=a,c=!0,d=!1,w=()=>(d=!0,c&&(c=!1,y?s=U(a):s=a),s);n===void 0&&a!==void 0&&(f&&_&&ce(),n=w(),f&&f(n));var h;if(_)h=()=>{var o=e[r];return o===void 0?w():(c=!0,d=!1,o)};else{var S=V(()=>(t?Z:Pe)(()=>e[r]));S.f|=_e,h=()=>{var o=p(S);return o!==void 0&&(s=void 0),o===void 0?s:o}}if(!(u&J))return h;if(f){var x=e.$$legacy;return function(o,E){return arguments.length>0?((!_||!E||x||l)&&f(E?h():o),o):h()}}var R=!1,j=!1,D=we(n),T=V(()=>Z(()=>{var o=h(),E=p(D);return R?(R=!1,j=!0,E):(j=!1,D.v=o)}));return t||(T.equals=oe),function(o,E){if(arguments.length>0){const L=E?p(T):_&&b?I(o):o;return T.equals(L)||(R=!0,g(D,L),d&&s!==void 0&&(s=L),U(()=>p(T))),o}return p(T)}}export{I as a,Se as b,xe as i,Te as l,Ie as p,Ae as s};
