(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Wg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ld={exports:{}},Za={},cd={exports:{}},At={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function R0(){if(Tm)return At;Tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),S=Symbol.iterator;function _(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function x(k,Z,we){this.props=k,this.context=Z,this.refs=T,this.updater=we||y}x.prototype.isReactComponent={},x.prototype.setState=function(k,Z){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,Z,"setState")},x.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function M(){}M.prototype=x.prototype;function L(k,Z,we){this.props=k,this.context=Z,this.refs=T,this.updater=we||y}var U=L.prototype=new M;U.constructor=L,w(U,x.prototype),U.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function D(k,Z,we){var G,le={},Me=null,Ee=null;if(Z!=null)for(G in Z.ref!==void 0&&(Ee=Z.ref),Z.key!==void 0&&(Me=""+Z.key),Z)I.call(Z,G)&&!E.hasOwnProperty(G)&&(le[G]=Z[G]);var Se=arguments.length-2;if(Se===1)le.children=we;else if(1<Se){for(var ve=Array(Se),Qe=0;Qe<Se;Qe++)ve[Qe]=arguments[Qe+2];le.children=ve}if(k&&k.defaultProps)for(G in Se=k.defaultProps,Se)le[G]===void 0&&(le[G]=Se[G]);return{$$typeof:s,type:k,key:Me,ref:Ee,props:le,_owner:P.current}}function J(k,Z){return{$$typeof:s,type:k.type,key:Z,ref:k.ref,props:k.props,_owner:k._owner}}function O(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function H(k){var Z={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(we){return Z[we]})}var ee=/\/+/g;function re(k,Z){return typeof k=="object"&&k!==null&&k.key!=null?H(""+k.key):Z.toString(36)}function z(k,Z,we,G,le){var Me=typeof k;(Me==="undefined"||Me==="boolean")&&(k=null);var Ee=!1;if(k===null)Ee=!0;else switch(Me){case"string":case"number":Ee=!0;break;case"object":switch(k.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=k,le=le(Ee),k=G===""?"."+re(Ee,0):G,A(le)?(we="",k!=null&&(we=k.replace(ee,"$&/")+"/"),z(le,Z,we,"",function(Qe){return Qe})):le!=null&&(O(le)&&(le=J(le,we+(!le.key||Ee&&Ee.key===le.key?"":(""+le.key).replace(ee,"$&/")+"/")+k)),Z.push(le)),1;if(Ee=0,G=G===""?".":G+":",A(k))for(var Se=0;Se<k.length;Se++){Me=k[Se];var ve=G+re(Me,Se);Ee+=z(Me,Z,we,ve,le)}else if(ve=_(k),typeof ve=="function")for(k=ve.call(k),Se=0;!(Me=k.next()).done;)Me=Me.value,ve=G+re(Me,Se++),Ee+=z(Me,Z,we,ve,le);else if(Me==="object")throw Z=String(k),Error("Objects are not valid as a React child (found: "+(Z==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":Z)+"). If you meant to render a collection of children, use an array instead.");return Ee}function V(k,Z,we){if(k==null)return k;var G=[],le=0;return z(k,G,"","",function(Me){return Z.call(we,Me,le++)}),G}function ne(k){if(k._status===-1){var Z=k._result;Z=Z(),Z.then(function(we){(k._status===0||k._status===-1)&&(k._status=1,k._result=we)},function(we){(k._status===0||k._status===-1)&&(k._status=2,k._result=we)}),k._status===-1&&(k._status=0,k._result=Z)}if(k._status===1)return k._result.default;throw k._result}var F={current:null},$={transition:null},W={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function Q(){throw Error("act(...) is not supported in production builds of React.")}return At.Children={map:V,forEach:function(k,Z,we){V(k,function(){Z.apply(this,arguments)},we)},count:function(k){var Z=0;return V(k,function(){Z++}),Z},toArray:function(k){return V(k,function(Z){return Z})||[]},only:function(k){if(!O(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},At.Component=x,At.Fragment=t,At.Profiler=l,At.PureComponent=L,At.StrictMode=r,At.Suspense=m,At.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,At.act=Q,At.cloneElement=function(k,Z,we){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var G=w({},k.props),le=k.key,Me=k.ref,Ee=k._owner;if(Z!=null){if(Z.ref!==void 0&&(Me=Z.ref,Ee=P.current),Z.key!==void 0&&(le=""+Z.key),k.type&&k.type.defaultProps)var Se=k.type.defaultProps;for(ve in Z)I.call(Z,ve)&&!E.hasOwnProperty(ve)&&(G[ve]=Z[ve]===void 0&&Se!==void 0?Se[ve]:Z[ve])}var ve=arguments.length-2;if(ve===1)G.children=we;else if(1<ve){Se=Array(ve);for(var Qe=0;Qe<ve;Qe++)Se[Qe]=arguments[Qe+2];G.children=Se}return{$$typeof:s,type:k.type,key:le,ref:Me,props:G,_owner:Ee}},At.createContext=function(k){return k={$$typeof:d,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:c,_context:k},k.Consumer=k},At.createElement=D,At.createFactory=function(k){var Z=D.bind(null,k);return Z.type=k,Z},At.createRef=function(){return{current:null}},At.forwardRef=function(k){return{$$typeof:f,render:k}},At.isValidElement=O,At.lazy=function(k){return{$$typeof:v,_payload:{_status:-1,_result:k},_init:ne}},At.memo=function(k,Z){return{$$typeof:p,type:k,compare:Z===void 0?null:Z}},At.startTransition=function(k){var Z=$.transition;$.transition={};try{k()}finally{$.transition=Z}},At.unstable_act=Q,At.useCallback=function(k,Z){return F.current.useCallback(k,Z)},At.useContext=function(k){return F.current.useContext(k)},At.useDebugValue=function(){},At.useDeferredValue=function(k){return F.current.useDeferredValue(k)},At.useEffect=function(k,Z){return F.current.useEffect(k,Z)},At.useId=function(){return F.current.useId()},At.useImperativeHandle=function(k,Z,we){return F.current.useImperativeHandle(k,Z,we)},At.useInsertionEffect=function(k,Z){return F.current.useInsertionEffect(k,Z)},At.useLayoutEffect=function(k,Z){return F.current.useLayoutEffect(k,Z)},At.useMemo=function(k,Z){return F.current.useMemo(k,Z)},At.useReducer=function(k,Z,we){return F.current.useReducer(k,Z,we)},At.useRef=function(k){return F.current.useRef(k)},At.useState=function(k){return F.current.useState(k)},At.useSyncExternalStore=function(k,Z,we){return F.current.useSyncExternalStore(k,Z,we)},At.useTransition=function(){return F.current.useTransition()},At.version="18.3.1",At}var bm;function zf(){return bm||(bm=1,cd.exports=R0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function P0(){if(Cm)return Za;Cm=1;var s=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,m,p){var v,S={},_=null,y=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(y=m.ref);for(v in m)r.call(m,v)&&!c.hasOwnProperty(v)&&(S[v]=m[v]);if(f&&f.defaultProps)for(v in m=f.defaultProps,m)S[v]===void 0&&(S[v]=m[v]);return{$$typeof:e,type:f,key:_,ref:y,props:S,_owner:l.current}}return Za.Fragment=t,Za.jsx=d,Za.jsxs=d,Za}var Am;function L0(){return Am||(Am=1,ld.exports=P0()),ld.exports}var a=L0(),K=zf();const D0=Wg(K);var Nl={},ud={exports:{}},Xn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function I0(){return Nm||(Nm=1,(function(s){function e($,W){var Q=$.length;$.push(W);e:for(;0<Q;){var k=Q-1>>>1,Z=$[k];if(0<l(Z,W))$[k]=W,$[Q]=Z,Q=k;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var W=$[0],Q=$.pop();if(Q!==W){$[0]=Q;e:for(var k=0,Z=$.length,we=Z>>>1;k<we;){var G=2*(k+1)-1,le=$[G],Me=G+1,Ee=$[Me];if(0>l(le,Q))Me<Z&&0>l(Ee,le)?($[k]=Ee,$[Me]=Q,k=Me):($[k]=le,$[G]=Q,k=G);else if(Me<Z&&0>l(Ee,Q))$[k]=Ee,$[Me]=Q,k=Me;else break e}}return W}function l($,W){var Q=$.sortIndex-W.sortIndex;return Q!==0?Q:$.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var m=[],p=[],v=1,S=null,_=3,y=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U($){for(var W=t(p);W!==null;){if(W.callback===null)r(p);else if(W.startTime<=$)r(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=t(p)}}function A($){if(T=!1,U($),!w)if(t(m)!==null)w=!0,ne(I);else{var W=t(p);W!==null&&F(A,W.startTime-$)}}function I($,W){w=!1,T&&(T=!1,M(D),D=-1),y=!0;var Q=_;try{for(U(W),S=t(m);S!==null&&(!(S.expirationTime>W)||$&&!H());){var k=S.callback;if(typeof k=="function"){S.callback=null,_=S.priorityLevel;var Z=k(S.expirationTime<=W);W=s.unstable_now(),typeof Z=="function"?S.callback=Z:S===t(m)&&r(m),U(W)}else r(m);S=t(m)}if(S!==null)var we=!0;else{var G=t(p);G!==null&&F(A,G.startTime-W),we=!1}return we}finally{S=null,_=Q,y=!1}}var P=!1,E=null,D=-1,J=5,O=-1;function H(){return!(s.unstable_now()-O<J)}function ee(){if(E!==null){var $=s.unstable_now();O=$;var W=!0;try{W=E(!0,$)}finally{W?re():(P=!1,E=null)}}else P=!1}var re;if(typeof L=="function")re=function(){L(ee)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,V=z.port2;z.port1.onmessage=ee,re=function(){V.postMessage(null)}}else re=function(){x(ee,0)};function ne($){E=$,P||(P=!0,re())}function F($,W){D=x(function(){$(s.unstable_now())},W)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,ne(I))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(m)},s.unstable_next=function($){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var Q=_;_=W;try{return $()}finally{_=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,W){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=_;_=$;try{return W()}finally{_=Q}},s.unstable_scheduleCallback=function($,W,Q){var k=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?k+Q:k):Q=k,$){case 1:var Z=-1;break;case 2:Z=250;break;case 5:Z=1073741823;break;case 4:Z=1e4;break;default:Z=5e3}return Z=Q+Z,$={id:v++,callback:W,priorityLevel:$,startTime:Q,expirationTime:Z,sortIndex:-1},Q>k?($.sortIndex=Q,e(p,$),t(m)===null&&$===t(p)&&(T?(M(D),D=-1):T=!0,F(A,Q-k))):($.sortIndex=Z,e(m,$),w||y||(w=!0,ne(I))),$},s.unstable_shouldYield=H,s.unstable_wrapCallback=function($){var W=_;return function(){var Q=_;_=W;try{return $.apply(this,arguments)}finally{_=Q}}}})(fd)),fd}var Rm;function U0(){return Rm||(Rm=1,dd.exports=I0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function k0(){if(Pm)return Xn;Pm=1;var s=zf(),e=U0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},S={};function _(n){return m.call(S,n)?!0:m.call(v,n)?!1:p.test(n)?S[n]=!0:(v[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,L);x[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,L);x[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,L);x[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,o,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,h,u)&&(o=null),u||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),H=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),z=Symbol.for("react.suspense_list"),V=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),F=Symbol.for("react.offscreen"),$=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,k;function Z(n){if(k===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var we=!1;function G(n,i){if(!n||we)return"";we=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var h=fe.stack.split(`
`),g=u.stack.split(`
`),C=h.length-1,j=g.length-1;1<=C&&0<=j&&h[C]!==g[j];)j--;for(;1<=C&&0<=j;C--,j--)if(h[C]!==g[j]){if(C!==1||j!==1)do if(C--,j--,0>j||h[C]!==g[j]){var Y=`
`+h[C].replace(" at new "," at ");return n.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",n.displayName)),Y}while(1<=C&&0<=j);break}}}finally{we=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?Z(n):""}function le(n){switch(n.tag){case 5:return Z(n.type);case 16:return Z("Lazy");case 13:return Z("Suspense");case 19:return Z("SuspenseList");case 0:case 2:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function Me(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case P:return"Portal";case J:return"Profiler";case D:return"StrictMode";case re:return"Suspense";case z:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case O:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case V:return i=n.displayName||null,i!==null?i:Me(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return Me(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Me(i);case 8:return i===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ve(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Qe(n){var i=ve(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){u=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Fe(n){n._valueTracker||(n._valueTracker=Qe(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=ve(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function mt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lt(n,i){var o=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function bt(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ct(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function _t(n,i){ct(n,i);var o=Se(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?He(n,i.type,o):i.hasOwnProperty("defaultValue")&&He(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ye(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function He(n,i,o){(i!=="number"||mt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function Tt(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function be(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Ye(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Se(o)}}function X(n,i){var o=Se(i.value),u=Se(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ut(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function Nt(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ht(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?Nt(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ze,qt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(ze=ze||document.createElement("div"),ze.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=ze.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function rt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var xe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(xe).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),xe[i]=xe[n]})});function b(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||xe.hasOwnProperty(n)&&xe[n]?(""+i).trim():i+"px"}function ie(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=b(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var Te=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(n,i){if(i){if(Te[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var De=null;function he(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ge=null,Le=null,B=null;function _e(n){if(n=ka(n)){if(typeof ge!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),ge(n.stateNode,n.type,i))}}function pe(n){Le?B?B.push(n):B=[n]:Le=n}function Oe(){if(Le){var n=Le,i=B;if(B=Le=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Ie(n,i){return n(i)}function ke(){}var st=!1;function St(n,i,o){if(st)return n(i,o);st=!0;try{return Ie(n,i,o)}finally{st=!1,(Le!==null||B!==null)&&(ke(),Oe())}}function Re(n,i){var o=n.stateNode;if(o===null)return null;var u=Vo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ut=!1;if(f)try{var gt={};Object.defineProperty(gt,"passive",{get:function(){ut=!0}}),window.addEventListener("test",gt,gt),window.removeEventListener("test",gt,gt)}catch{ut=!1}function We(n,i,o,u,h,g,C,j,Y){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(o,fe)}catch(Ae){this.onError(Ae)}}var Pt=!1,en=null,Zn=!1,_s=null,ga={onError:function(n){Pt=!0,en=n}};function Lc(n,i,o,u,h,g,C,j,Y){Pt=!1,en=null,We.apply(ga,arguments)}function To(n,i,o,u,h,g,C,j,Y){if(Lc.apply(this,arguments),Pt){if(Pt){var fe=en;Pt=!1,en=null}else throw Error(t(198));Zn||(Zn=!0,_s=fe)}}function Ai(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ni(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ys(n){if(Ai(n)!==n)throw Error(t(188))}function bo(n){var i=n.alternate;if(!i){if(i=Ai(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return ys(h),n;if(g===u)return ys(h),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var C=!1,j=h.child;j;){if(j===o){C=!0,o=h,u=g;break}if(j===u){C=!0,u=h,o=g;break}j=j.sibling}if(!C){for(j=g.child;j;){if(j===o){C=!0,o=g,u=h;break}if(j===u){C=!0,u=g,o=h;break}j=j.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function xa(n){return n=bo(n),n!==null?qr(n):null}function qr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qr(n);if(i!==null)return i;n=n.sibling}return null}var va=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,Dc=e.unstable_requestPaint,Zt=e.unstable_now,Co=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,Ao=e.unstable_UserBlockingPriority,Ss=e.unstable_NormalPriority,No=e.unstable_LowPriority,N=e.unstable_IdlePriority,q=null,ce=null;function ae(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(q,n,void 0,(n.current.flags&128)===128)}catch{}}var se=Math.clz32?Math.clz32:je,Be=Math.log,Ke=Math.LN2;function je(n){return n>>>=0,n===0?32:31-(Be(n)/Ke|0)|0}var Ve=64,Je=4194304;function ht(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Et(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,C=o&268435455;if(C!==0){var j=C&~h;j!==0?u=ht(j):(g&=C,g!==0&&(u=ht(g)))}else C=o&~h,C!==0?u=ht(C):g!==0&&(u=ht(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-se(i),h=1<<o,u|=n[o],i&=~h;return u}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Ct(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-se(g),j=1<<C,Y=h[C];Y===-1?((j&o)===0||(j&u)!==0)&&(h[C]=et(j,i)):Y<=i&&(n.expiredLanes|=j),g&=~j}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=Ve;return Ve<<=1,(Ve&4194240)===0&&(Ve=64),n}function Bt(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-se(i),n[i]=o}function tt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-se(o),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function hn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-se(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var at=0;function Ri(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,hr,mi,Pi,Rt,on=!1,Rn=[],Ot=null,Wt=null,_n=null,pr=new Map,Sa=new Map,mr=[],Qx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function lh(n,i){switch(n){case"focusin":case"focusout":Ot=null;break;case"dragenter":case"dragleave":Wt=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":pr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function Ma(n,i,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=ka(i),i!==null&&hr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function Jx(n,i,o,u,h){switch(i){case"focusin":return Ot=Ma(Ot,n,i,o,u,h),!0;case"dragenter":return Wt=Ma(Wt,n,i,o,u,h),!0;case"mouseover":return _n=Ma(_n,n,i,o,u,h),!0;case"pointerover":var g=h.pointerId;return pr.set(g,Ma(pr.get(g)||null,n,i,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Sa.set(g,Ma(Sa.get(g)||null,n,i,o,u,h)),!0}return!1}function ch(n){var i=Kr(n.target);if(i!==null){var o=Ai(i);if(o!==null){if(i=o.tag,i===13){if(i=Ni(o),i!==null){n.blockedOn=i,Rt(n.priority,function(){mi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Uc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);De=u,o.target.dispatchEvent(u),De=null}else return i=ka(o),i!==null&&hr(i),n.blockedOn=o,!1;i.shift()}return!0}function uh(n,i,o){Ro(n)&&o.delete(i)}function ev(){on=!1,Ot!==null&&Ro(Ot)&&(Ot=null),Wt!==null&&Ro(Wt)&&(Wt=null),_n!==null&&Ro(_n)&&(_n=null),pr.forEach(uh),Sa.forEach(uh)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,ev)))}function wa(n){function i(h){return Ea(h,n)}if(0<Rn.length){Ea(Rn[0],n);for(var o=1;o<Rn.length;o++){var u=Rn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(Ot!==null&&Ea(Ot,n),Wt!==null&&Ea(Wt,n),_n!==null&&Ea(_n,n),pr.forEach(i),Sa.forEach(i),o=0;o<mr.length;o++)u=mr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<mr.length&&(o=mr[0],o.blockedOn===null);)ch(o),o.blockedOn===null&&mr.shift()}var Ms=A.ReactCurrentBatchConfig,Po=!0;function tv(n,i,o,u){var h=at,g=Ms.transition;Ms.transition=null;try{at=1,Ic(n,i,o,u)}finally{at=h,Ms.transition=g}}function nv(n,i,o,u){var h=at,g=Ms.transition;Ms.transition=null;try{at=4,Ic(n,i,o,u)}finally{at=h,Ms.transition=g}}function Ic(n,i,o,u){if(Po){var h=Uc(n,i,o,u);if(h===null)Qc(n,i,u,Lo,o),lh(n,u);else if(Jx(h,n,i,o,u))u.stopPropagation();else if(lh(n,u),i&4&&-1<Qx.indexOf(n)){for(;h!==null;){var g=ka(h);if(g!==null&&pn(g),g=Uc(n,i,o,u),g===null&&Qc(n,i,u,Lo,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Qc(n,i,u,null,o)}}var Lo=null;function Uc(n,i,o,u){if(Lo=null,n=he(u),n=Kr(n),n!==null)if(i=Ai(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ni(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Lo=n,null}function dh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Co()){case ya:return 1;case Ao:return 4;case Ss:case No:return 16;case N:return 536870912;default:return 16}default:return 16}}var gr=null,kc=null,Do=null;function fh(){if(Do)return Do;var n,i=kc,o=i.length,u,h="value"in gr?gr.value:gr.textContent,g=h.length;for(n=0;n<o&&i[n]===h[n];n++);var C=o-n;for(u=1;u<=C&&i[o-u]===h[g-u];u++);return Do=h.slice(n,1<u?1-u:void 0)}function Io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Uo(){return!0}function hh(){return!1}function Qn(n){function i(o,u,h,g,C){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var j in n)n.hasOwnProperty(j)&&(o=n[j],this[j]=o?o(g):g[j]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Uo:hh,this.isPropagationStopped=hh,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),i}var Es={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Qn(Es),Ta=Q({},Es,{view:0,detail:0}),iv=Qn(Ta),Oc,zc,ba,ko=Q({},Ta,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==ba&&(ba&&n.type==="mousemove"?(Oc=n.screenX-ba.screenX,zc=n.screenY-ba.screenY):zc=Oc=0,ba=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),ph=Qn(ko),rv=Q({},ko,{dataTransfer:0}),sv=Qn(rv),av=Q({},Ta,{relatedTarget:0}),jc=Qn(av),ov=Q({},Es,{animationName:0,elapsedTime:0,pseudoElement:0}),lv=Qn(ov),cv=Q({},Es,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),uv=Qn(cv),dv=Q({},Es,{data:0}),mh=Qn(dv),fv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},hv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},pv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function mv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=pv[n])?!!i[n]:!1}function Bc(){return mv}var gv=Q({},Ta,{key:function(n){if(n.key){var i=fv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?hv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),xv=Qn(gv),vv=Q({},ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),gh=Qn(vv),_v=Q({},Ta,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),yv=Qn(_v),Sv=Q({},Es,{propertyName:0,elapsedTime:0,pseudoElement:0}),Mv=Qn(Sv),Ev=Q({},ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),wv=Qn(Ev),Tv=[9,13,27,32],Hc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var bv=f&&"TextEvent"in window&&!Ca,xh=f&&(!Hc||Ca&&8<Ca&&11>=Ca),vh=" ",_h=!1;function yh(n,i){switch(n){case"keyup":return Tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var ws=!1;function Cv(n,i){switch(n){case"compositionend":return Sh(i);case"keypress":return i.which!==32?null:(_h=!0,vh);case"textInput":return n=i.data,n===vh&&_h?null:n;default:return null}}function Av(n,i){if(ws)return n==="compositionend"||!Hc&&yh(n,i)?(n=fh(),Do=kc=gr=null,ws=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return xh&&i.locale!=="ko"?null:i.data;default:return null}}var Nv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Mh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Nv[n.type]:i==="textarea"}function Eh(n,i,o,u){pe(u),i=Bo(i,"onChange"),0<i.length&&(o=new Fc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Aa=null,Na=null;function Rv(n){Bh(n,0)}function Fo(n){var i=Ns(n);if(vt(i))return n}function Pv(n,i){if(n==="change")return i}var wh=!1;if(f){var Gc;if(f){var Vc="oninput"in document;if(!Vc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Vc=typeof Th.oninput=="function"}Gc=Vc}else Gc=!1;wh=Gc&&(!document.documentMode||9<document.documentMode)}function bh(){Aa&&(Aa.detachEvent("onpropertychange",Ch),Na=Aa=null)}function Ch(n){if(n.propertyName==="value"&&Fo(Na)){var i=[];Eh(i,Na,n,he(n)),St(Rv,i)}}function Lv(n,i,o){n==="focusin"?(bh(),Aa=i,Na=o,Aa.attachEvent("onpropertychange",Ch)):n==="focusout"&&bh()}function Dv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fo(Na)}function Iv(n,i){if(n==="click")return Fo(i)}function Uv(n,i){if(n==="input"||n==="change")return Fo(i)}function kv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var gi=typeof Object.is=="function"?Object.is:kv;function Ra(n,i){if(gi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!m.call(i,h)||!gi(n[h],i[h]))return!1}return!0}function Ah(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Nh(n,i){var o=Ah(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Ah(o)}}function Rh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Rh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ph(){for(var n=window,i=mt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=mt(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Fv(n){var i=Ph(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Rh(o.ownerDocument.documentElement,o)){if(u!==null&&Wc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Nh(o,g);var C=Nh(o,u);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Ov=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Xc=null,Pa=null,$c=!1;function Lh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||Ts==null||Ts!==mt(u)||(u=Ts,"selectionStart"in u&&Wc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pa&&Ra(Pa,u)||(Pa=u,u=Bo(Xc,"onSelect"),0<u.length&&(i=new Fc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ts)))}function Oo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var bs={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},qc={},Dh={};f&&(Dh=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function zo(n){if(qc[n])return qc[n];if(!bs[n])return n;var i=bs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Dh)return qc[n]=i[o];return n}var Ih=zo("animationend"),Uh=zo("animationiteration"),kh=zo("animationstart"),Fh=zo("transitionend"),Oh=new Map,zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function xr(n,i){Oh.set(n,i),c(i,[n])}for(var Yc=0;Yc<zh.length;Yc++){var Kc=zh[Yc],zv=Kc.toLowerCase(),jv=Kc[0].toUpperCase()+Kc.slice(1);xr(zv,"on"+jv)}xr(Ih,"onAnimationEnd"),xr(Uh,"onAnimationIteration"),xr(kh,"onAnimationStart"),xr("dblclick","onDoubleClick"),xr("focusin","onFocus"),xr("focusout","onBlur"),xr(Fh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Bv=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function jh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,i,void 0,n),n.currentTarget=null}function Bh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var C=u.length-1;0<=C;C--){var j=u[C],Y=j.instance,fe=j.currentTarget;if(j=j.listener,Y!==g&&h.isPropagationStopped())break e;jh(h,j,fe),g=Y}else for(C=0;C<u.length;C++){if(j=u[C],Y=j.instance,fe=j.currentTarget,j=j.listener,Y!==g&&h.isPropagationStopped())break e;jh(h,j,fe),g=Y}}}if(Zn)throw n=_s,Zn=!1,_s=null,n}function Yt(n,i){var o=i[ru];o===void 0&&(o=i[ru]=new Set);var u=n+"__bubble";o.has(u)||(Hh(i,n,2,!1),o.add(u))}function Zc(n,i,o){var u=0;i&&(u|=4),Hh(o,n,u,i)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[jo]){n[jo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Bv.has(o)||Zc(o,!1,n),Zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jo]||(i[jo]=!0,Zc("selectionchange",!1,i))}}function Hh(n,i,o,u){switch(dh(i)){case 1:var h=tv;break;case 4:h=nv;break;default:h=Ic}o=h.bind(null,i,o,n),h=void 0,!ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Qc(n,i,o,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var j=u.stateNode.containerInfo;if(j===h||j.nodeType===8&&j.parentNode===h)break;if(C===4)for(C=u.return;C!==null;){var Y=C.tag;if((Y===3||Y===4)&&(Y=C.stateNode.containerInfo,Y===h||Y.nodeType===8&&Y.parentNode===h))return;C=C.return}for(;j!==null;){if(C=Kr(j),C===null)return;if(Y=C.tag,Y===5||Y===6){u=g=C;continue e}j=j.parentNode}}u=u.return}St(function(){var fe=g,Ae=he(o),Pe=[];e:{var Ce=Oh.get(n);if(Ce!==void 0){var $e=Fc,nt=n;switch(n){case"keypress":if(Io(o)===0)break e;case"keydown":case"keyup":$e=xv;break;case"focusin":nt="focus",$e=jc;break;case"focusout":nt="blur",$e=jc;break;case"beforeblur":case"afterblur":$e=jc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=ph;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=sv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=yv;break;case Ih:case Uh:case kh:$e=lv;break;case Fh:$e=Mv;break;case"scroll":$e=iv;break;case"wheel":$e=wv;break;case"copy":case"cut":case"paste":$e=uv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=gh}var it=(i&4)!==0,ln=!it&&n==="scroll",oe=it?Ce!==null?Ce+"Capture":null:Ce;it=[];for(var te=fe,ue;te!==null;){ue=te;var Ue=ue.stateNode;if(ue.tag===5&&Ue!==null&&(ue=Ue,oe!==null&&(Ue=Re(te,oe),Ue!=null&&it.push(Ia(te,Ue,ue)))),ln)break;te=te.return}0<it.length&&(Ce=new $e(Ce,nt,null,o,Ae),Pe.push({event:Ce,listeners:it}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Ce&&o!==De&&(nt=o.relatedTarget||o.fromElement)&&(Kr(nt)||nt[qi]))break e;if(($e||Ce)&&(Ce=Ae.window===Ae?Ae:(Ce=Ae.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,$e?(nt=o.relatedTarget||o.toElement,$e=fe,nt=nt?Kr(nt):null,nt!==null&&(ln=Ai(nt),nt!==ln||nt.tag!==5&&nt.tag!==6)&&(nt=null)):($e=null,nt=fe),$e!==nt)){if(it=ph,Ue="onMouseLeave",oe="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(it=gh,Ue="onPointerLeave",oe="onPointerEnter",te="pointer"),ln=$e==null?Ce:Ns($e),ue=nt==null?Ce:Ns(nt),Ce=new it(Ue,te+"leave",$e,o,Ae),Ce.target=ln,Ce.relatedTarget=ue,Ue=null,Kr(Ae)===fe&&(it=new it(oe,te+"enter",nt,o,Ae),it.target=ue,it.relatedTarget=ln,Ue=it),ln=Ue,$e&&nt)t:{for(it=$e,oe=nt,te=0,ue=it;ue;ue=Cs(ue))te++;for(ue=0,Ue=oe;Ue;Ue=Cs(Ue))ue++;for(;0<te-ue;)it=Cs(it),te--;for(;0<ue-te;)oe=Cs(oe),ue--;for(;te--;){if(it===oe||oe!==null&&it===oe.alternate)break t;it=Cs(it),oe=Cs(oe)}it=null}else it=null;$e!==null&&Gh(Pe,Ce,$e,it,!1),nt!==null&&ln!==null&&Gh(Pe,ln,nt,it,!0)}}e:{if(Ce=fe?Ns(fe):window,$e=Ce.nodeName&&Ce.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Ce.type==="file")var ot=Pv;else if(Mh(Ce))if(wh)ot=Uv;else{ot=Dv;var dt=Lv}else($e=Ce.nodeName)&&$e.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(ot=Iv);if(ot&&(ot=ot(n,fe))){Eh(Pe,ot,o,Ae);break e}dt&&dt(n,Ce,fe),n==="focusout"&&(dt=Ce._wrapperState)&&dt.controlled&&Ce.type==="number"&&He(Ce,"number",Ce.value)}switch(dt=fe?Ns(fe):window,n){case"focusin":(Mh(dt)||dt.contentEditable==="true")&&(Ts=dt,Xc=fe,Pa=null);break;case"focusout":Pa=Xc=Ts=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Lh(Pe,o,Ae);break;case"selectionchange":if(Ov)break;case"keydown":case"keyup":Lh(Pe,o,Ae)}var ft;if(Hc)e:{switch(n){case"compositionstart":var xt="onCompositionStart";break e;case"compositionend":xt="onCompositionEnd";break e;case"compositionupdate":xt="onCompositionUpdate";break e}xt=void 0}else ws?yh(n,o)&&(xt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(xt="onCompositionStart");xt&&(xh&&o.locale!=="ko"&&(ws||xt!=="onCompositionStart"?xt==="onCompositionEnd"&&ws&&(ft=fh()):(gr=Ae,kc="value"in gr?gr.value:gr.textContent,ws=!0)),dt=Bo(fe,xt),0<dt.length&&(xt=new mh(xt,n,null,o,Ae),Pe.push({event:xt,listeners:dt}),ft?xt.data=ft:(ft=Sh(o),ft!==null&&(xt.data=ft)))),(ft=bv?Cv(n,o):Av(n,o))&&(fe=Bo(fe,"onBeforeInput"),0<fe.length&&(Ae=new mh("onBeforeInput","beforeinput",null,o,Ae),Pe.push({event:Ae,listeners:fe}),Ae.data=ft))}Bh(Pe,i)})}function Ia(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Bo(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Re(n,o),g!=null&&u.unshift(Ia(n,g,h)),g=Re(n,i),g!=null&&u.push(Ia(n,g,h))),n=n.return}return u}function Cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Gh(n,i,o,u,h){for(var g=i._reactName,C=[];o!==null&&o!==u;){var j=o,Y=j.alternate,fe=j.stateNode;if(Y!==null&&Y===u)break;j.tag===5&&fe!==null&&(j=fe,h?(Y=Re(o,g),Y!=null&&C.unshift(Ia(o,Y,j))):h||(Y=Re(o,g),Y!=null&&C.push(Ia(o,Y,j)))),o=o.return}C.length!==0&&n.push({event:i,listeners:C})}var Hv=/\r\n?/g,Gv=/\u0000|\uFFFD/g;function Vh(n){return(typeof n=="string"?n:""+n).replace(Hv,`
`).replace(Gv,"")}function Ho(n,i,o){if(i=Vh(i),Vh(n)!==i&&o)throw Error(t(425))}function Go(){}var Jc=null,eu=null;function tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Vv=typeof clearTimeout=="function"?clearTimeout:void 0,Wh=typeof Promise=="function"?Promise:void 0,Wv=typeof queueMicrotask=="function"?queueMicrotask:typeof Wh<"u"?function(n){return Wh.resolve(null).then(n).catch(Xv)}:nu;function Xv(n){setTimeout(function(){throw n})}function iu(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),wa(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);wa(i)}function vr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Xh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),Li="__reactFiber$"+As,Ua="__reactProps$"+As,qi="__reactContainer$"+As,ru="__reactEvents$"+As,$v="__reactListeners$"+As,qv="__reactHandles$"+As;function Kr(n){var i=n[Li];if(i)return i;for(var o=n.parentNode;o;){if(i=o[qi]||o[Li]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Xh(n);n!==null;){if(o=n[Li])return o;n=Xh(n)}return i}n=o,o=n.parentNode}return null}function ka(n){return n=n[Li]||n[qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Ns(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[Ua]||null}var su=[],Rs=-1;function _r(n){return{current:n}}function Kt(n){0>Rs||(n.current=su[Rs],su[Rs]=null,Rs--)}function Xt(n,i){Rs++,su[Rs]=n.current,n.current=i}var yr={},Pn=_r(yr),Bn=_r(!1),Zr=yr;function Ps(n,i){var o=n.type.contextTypes;if(!o)return yr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Hn(n){return n=n.childContextTypes,n!=null}function Wo(){Kt(Bn),Kt(Pn)}function $h(n,i,o){if(Pn.current!==yr)throw Error(t(168));Xt(Pn,i),Xt(Bn,o)}function qh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Ee(n)||"Unknown",h));return Q({},o,u)}function Xo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||yr,Zr=Pn.current,Xt(Pn,n),Xt(Bn,Bn.current),!0}function Yh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=qh(n,i,Zr),u.__reactInternalMemoizedMergedChildContext=n,Kt(Bn),Kt(Pn),Xt(Pn,n)):Kt(Bn),Xt(Bn,o)}var Yi=null,$o=!1,au=!1;function Kh(n){Yi===null?Yi=[n]:Yi.push(n)}function Yv(n){$o=!0,Kh(n)}function Sr(){if(!au&&Yi!==null){au=!0;var n=0,i=at;try{var o=Yi;for(at=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Yi=null,$o=!1}catch(h){throw Yi!==null&&(Yi=Yi.slice(n+1)),va(ya,Sr),h}finally{at=i,au=!1}}return null}var Ls=[],Ds=0,qo=null,Yo=0,ai=[],oi=0,Qr=null,Ki=1,Zi="";function Jr(n,i){Ls[Ds++]=Yo,Ls[Ds++]=qo,qo=n,Yo=i}function Zh(n,i,o){ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=Qr,Qr=n;var u=Ki;n=Zi;var h=32-se(u)-1;u&=~(1<<h),o+=1;var g=32-se(i)+h;if(30<g){var C=h-h%5;g=(u&(1<<C)-1).toString(32),u>>=C,h-=C,Ki=1<<32-se(i)+h|o<<h|u,Zi=g+n}else Ki=1<<g|o<<h|u,Zi=n}function ou(n){n.return!==null&&(Jr(n,1),Zh(n,1,0))}function lu(n){for(;n===qo;)qo=Ls[--Ds],Ls[Ds]=null,Yo=Ls[--Ds],Ls[Ds]=null;for(;n===Qr;)Qr=ai[--oi],ai[oi]=null,Zi=ai[--oi],ai[oi]=null,Ki=ai[--oi],ai[oi]=null}var Jn=null,ei=null,Jt=!1,xi=null;function Qh(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function Jh(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,ei=vr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:Ki,overflow:Zi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Jn=n,ei=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Jt){var i=ei;if(i){var o=i;if(!Jh(n,i)){if(cu(n))throw Error(t(418));i=vr(o.nextSibling);var u=Jn;i&&Jh(n,i)?Qh(u,o):(n.flags=n.flags&-4097|2,Jt=!1,Jn=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,Jn=n}}}function ep(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function Ko(n){if(n!==Jn)return!1;if(!Jt)return ep(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tu(n.type,n.memoizedProps)),i&&(i=ei)){if(cu(n))throw tp(),Error(t(418));for(;i;)Qh(n,i),i=vr(i.nextSibling)}if(ep(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ei=vr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ei=null}}else ei=Jn?vr(n.stateNode.nextSibling):null;return!0}function tp(){for(var n=ei;n;)n=vr(n.nextSibling)}function Is(){ei=Jn=null,Jt=!1}function du(n){xi===null?xi=[n]:xi.push(n)}var Kv=A.ReactCurrentBatchConfig;function Fa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var j=h.refs;C===null?delete j[g]:j[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function np(n){var i=n._init;return i(n._payload)}function ip(n){function i(oe,te){if(n){var ue=oe.deletions;ue===null?(oe.deletions=[te],oe.flags|=16):ue.push(te)}}function o(oe,te){if(!n)return null;for(;te!==null;)i(oe,te),te=te.sibling;return null}function u(oe,te){for(oe=new Map;te!==null;)te.key!==null?oe.set(te.key,te):oe.set(te.index,te),te=te.sibling;return oe}function h(oe,te){return oe=Nr(oe,te),oe.index=0,oe.sibling=null,oe}function g(oe,te,ue){return oe.index=ue,n?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<te?(oe.flags|=2,te):ue):(oe.flags|=2,te)):(oe.flags|=1048576,te)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function j(oe,te,ue,Ue){return te===null||te.tag!==6?(te=nd(ue,oe.mode,Ue),te.return=oe,te):(te=h(te,ue),te.return=oe,te)}function Y(oe,te,ue,Ue){var ot=ue.type;return ot===E?Ae(oe,te,ue.props.children,Ue,ue.key):te!==null&&(te.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ne&&np(ot)===te.type)?(Ue=h(te,ue.props),Ue.ref=Fa(oe,te,ue),Ue.return=oe,Ue):(Ue=Sl(ue.type,ue.key,ue.props,null,oe.mode,Ue),Ue.ref=Fa(oe,te,ue),Ue.return=oe,Ue)}function fe(oe,te,ue,Ue){return te===null||te.tag!==4||te.stateNode.containerInfo!==ue.containerInfo||te.stateNode.implementation!==ue.implementation?(te=id(ue,oe.mode,Ue),te.return=oe,te):(te=h(te,ue.children||[]),te.return=oe,te)}function Ae(oe,te,ue,Ue,ot){return te===null||te.tag!==7?(te=os(ue,oe.mode,Ue,ot),te.return=oe,te):(te=h(te,ue),te.return=oe,te)}function Pe(oe,te,ue){if(typeof te=="string"&&te!==""||typeof te=="number")return te=nd(""+te,oe.mode,ue),te.return=oe,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return ue=Sl(te.type,te.key,te.props,null,oe.mode,ue),ue.ref=Fa(oe,null,te),ue.return=oe,ue;case P:return te=id(te,oe.mode,ue),te.return=oe,te;case ne:var Ue=te._init;return Pe(oe,Ue(te._payload),ue)}if(Ge(te)||W(te))return te=os(te,oe.mode,ue,null),te.return=oe,te;Zo(oe,te)}return null}function Ce(oe,te,ue,Ue){var ot=te!==null?te.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ot!==null?null:j(oe,te,""+ue,Ue);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:return ue.key===ot?Y(oe,te,ue,Ue):null;case P:return ue.key===ot?fe(oe,te,ue,Ue):null;case ne:return ot=ue._init,Ce(oe,te,ot(ue._payload),Ue)}if(Ge(ue)||W(ue))return ot!==null?null:Ae(oe,te,ue,Ue,null);Zo(oe,ue)}return null}function $e(oe,te,ue,Ue,ot){if(typeof Ue=="string"&&Ue!==""||typeof Ue=="number")return oe=oe.get(ue)||null,j(te,oe,""+Ue,ot);if(typeof Ue=="object"&&Ue!==null){switch(Ue.$$typeof){case I:return oe=oe.get(Ue.key===null?ue:Ue.key)||null,Y(te,oe,Ue,ot);case P:return oe=oe.get(Ue.key===null?ue:Ue.key)||null,fe(te,oe,Ue,ot);case ne:var dt=Ue._init;return $e(oe,te,ue,dt(Ue._payload),ot)}if(Ge(Ue)||W(Ue))return oe=oe.get(ue)||null,Ae(te,oe,Ue,ot,null);Zo(te,Ue)}return null}function nt(oe,te,ue,Ue){for(var ot=null,dt=null,ft=te,xt=te=0,Mn=null;ft!==null&&xt<ue.length;xt++){ft.index>xt?(Mn=ft,ft=null):Mn=ft.sibling;var zt=Ce(oe,ft,ue[xt],Ue);if(zt===null){ft===null&&(ft=Mn);break}n&&ft&&zt.alternate===null&&i(oe,ft),te=g(zt,te,xt),dt===null?ot=zt:dt.sibling=zt,dt=zt,ft=Mn}if(xt===ue.length)return o(oe,ft),Jt&&Jr(oe,xt),ot;if(ft===null){for(;xt<ue.length;xt++)ft=Pe(oe,ue[xt],Ue),ft!==null&&(te=g(ft,te,xt),dt===null?ot=ft:dt.sibling=ft,dt=ft);return Jt&&Jr(oe,xt),ot}for(ft=u(oe,ft);xt<ue.length;xt++)Mn=$e(ft,oe,xt,ue[xt],Ue),Mn!==null&&(n&&Mn.alternate!==null&&ft.delete(Mn.key===null?xt:Mn.key),te=g(Mn,te,xt),dt===null?ot=Mn:dt.sibling=Mn,dt=Mn);return n&&ft.forEach(function(Rr){return i(oe,Rr)}),Jt&&Jr(oe,xt),ot}function it(oe,te,ue,Ue){var ot=W(ue);if(typeof ot!="function")throw Error(t(150));if(ue=ot.call(ue),ue==null)throw Error(t(151));for(var dt=ot=null,ft=te,xt=te=0,Mn=null,zt=ue.next();ft!==null&&!zt.done;xt++,zt=ue.next()){ft.index>xt?(Mn=ft,ft=null):Mn=ft.sibling;var Rr=Ce(oe,ft,zt.value,Ue);if(Rr===null){ft===null&&(ft=Mn);break}n&&ft&&Rr.alternate===null&&i(oe,ft),te=g(Rr,te,xt),dt===null?ot=Rr:dt.sibling=Rr,dt=Rr,ft=Mn}if(zt.done)return o(oe,ft),Jt&&Jr(oe,xt),ot;if(ft===null){for(;!zt.done;xt++,zt=ue.next())zt=Pe(oe,zt.value,Ue),zt!==null&&(te=g(zt,te,xt),dt===null?ot=zt:dt.sibling=zt,dt=zt);return Jt&&Jr(oe,xt),ot}for(ft=u(oe,ft);!zt.done;xt++,zt=ue.next())zt=$e(ft,oe,xt,zt.value,Ue),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?xt:zt.key),te=g(zt,te,xt),dt===null?ot=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(N0){return i(oe,N0)}),Jt&&Jr(oe,xt),ot}function ln(oe,te,ue,Ue){if(typeof ue=="object"&&ue!==null&&ue.type===E&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:e:{for(var ot=ue.key,dt=te;dt!==null;){if(dt.key===ot){if(ot=ue.type,ot===E){if(dt.tag===7){o(oe,dt.sibling),te=h(dt,ue.props.children),te.return=oe,oe=te;break e}}else if(dt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ne&&np(ot)===dt.type){o(oe,dt.sibling),te=h(dt,ue.props),te.ref=Fa(oe,dt,ue),te.return=oe,oe=te;break e}o(oe,dt);break}else i(oe,dt);dt=dt.sibling}ue.type===E?(te=os(ue.props.children,oe.mode,Ue,ue.key),te.return=oe,oe=te):(Ue=Sl(ue.type,ue.key,ue.props,null,oe.mode,Ue),Ue.ref=Fa(oe,te,ue),Ue.return=oe,oe=Ue)}return C(oe);case P:e:{for(dt=ue.key;te!==null;){if(te.key===dt)if(te.tag===4&&te.stateNode.containerInfo===ue.containerInfo&&te.stateNode.implementation===ue.implementation){o(oe,te.sibling),te=h(te,ue.children||[]),te.return=oe,oe=te;break e}else{o(oe,te);break}else i(oe,te);te=te.sibling}te=id(ue,oe.mode,Ue),te.return=oe,oe=te}return C(oe);case ne:return dt=ue._init,ln(oe,te,dt(ue._payload),Ue)}if(Ge(ue))return nt(oe,te,ue,Ue);if(W(ue))return it(oe,te,ue,Ue);Zo(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,te!==null&&te.tag===6?(o(oe,te.sibling),te=h(te,ue),te.return=oe,oe=te):(o(oe,te),te=nd(ue,oe.mode,Ue),te.return=oe,oe=te),C(oe)):o(oe,te)}return ln}var Us=ip(!0),rp=ip(!1),Qo=_r(null),Jo=null,ks=null,fu=null;function hu(){fu=ks=Jo=null}function pu(n){var i=Qo.current;Kt(Qo),n._currentValue=i}function mu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Fs(n,i){Jo=n,fu=ks=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:i,next:null},ks===null){if(Jo===null)throw Error(t(308));ks=n,Jo.dependencies={lanes:0,firstContext:n}}else ks=ks.next=n;return i}var es=null;function gu(n){es===null?es=[n]:es.push(n)}function sp(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,gu(i)):(o.next=h.next,h.next=o),i.interleaved=o,Qi(n,u)}function Qi(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Mr=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ap(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Ji(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Er(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ft&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,Qi(n,o)}return h=u.interleaved,h===null?(i.next=i,gu(u)):(i.next=h.next,h.next=i),u.interleaved=i,Qi(n,o)}function el(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,hn(n,o)}}function op(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=C:g=g.next=C,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function tl(n,i,o,u){var h=n.updateQueue;Mr=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,j=h.shared.pending;if(j!==null){h.shared.pending=null;var Y=j,fe=Y.next;Y.next=null,C===null?g=fe:C.next=fe,C=Y;var Ae=n.alternate;Ae!==null&&(Ae=Ae.updateQueue,j=Ae.lastBaseUpdate,j!==C&&(j===null?Ae.firstBaseUpdate=fe:j.next=fe,Ae.lastBaseUpdate=Y))}if(g!==null){var Pe=h.baseState;C=0,Ae=fe=Y=null,j=g;do{var Ce=j.lane,$e=j.eventTime;if((u&Ce)===Ce){Ae!==null&&(Ae=Ae.next={eventTime:$e,lane:0,tag:j.tag,payload:j.payload,callback:j.callback,next:null});e:{var nt=n,it=j;switch(Ce=i,$e=o,it.tag){case 1:if(nt=it.payload,typeof nt=="function"){Pe=nt.call($e,Pe,Ce);break e}Pe=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=it.payload,Ce=typeof nt=="function"?nt.call($e,Pe,Ce):nt,Ce==null)break e;Pe=Q({},Pe,Ce);break e;case 2:Mr=!0}}j.callback!==null&&j.lane!==0&&(n.flags|=64,Ce=h.effects,Ce===null?h.effects=[j]:Ce.push(j))}else $e={eventTime:$e,lane:Ce,tag:j.tag,payload:j.payload,callback:j.callback,next:null},Ae===null?(fe=Ae=$e,Y=Pe):Ae=Ae.next=$e,C|=Ce;if(j=j.next,j===null){if(j=h.shared.pending,j===null)break;Ce=j,j=Ce.next,Ce.next=null,h.lastBaseUpdate=Ce,h.shared.pending=null}}while(!0);if(Ae===null&&(Y=Pe),h.baseState=Y,h.firstBaseUpdate=fe,h.lastBaseUpdate=Ae,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);is|=C,n.lanes=C,n.memoizedState=Pe}}function lp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Oa={},Di=_r(Oa),za=_r(Oa),ja=_r(Oa);function ts(n){if(n===Oa)throw Error(t(174));return n}function vu(n,i){switch(Xt(ja,i),Xt(za,n),Xt(Di,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Ht(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Ht(i,n)}Kt(Di),Xt(Di,i)}function Os(){Kt(Di),Kt(za),Kt(ja)}function cp(n){ts(ja.current);var i=ts(Di.current),o=Ht(i,n.type);i!==o&&(Xt(za,n),Xt(Di,o))}function _u(n){za.current===n&&(Kt(Di),Kt(za))}var tn=_r(0);function nl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var il=A.ReactCurrentDispatcher,Mu=A.ReactCurrentBatchConfig,ns=0,nn=null,mn=null,yn=null,rl=!1,Ba=!1,Ha=0,Zv=0;function Ln(){throw Error(t(321))}function Eu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!gi(n[o],i[o]))return!1;return!0}function wu(n,i,o,u,h,g){if(ns=g,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?t0:n0,n=o(u,h),Ba){g=0;do{if(Ba=!1,Ha=0,25<=g)throw Error(t(301));g+=1,yn=mn=null,i.updateQueue=null,il.current=i0,n=o(u,h)}while(Ba)}if(il.current=ol,i=mn!==null&&mn.next!==null,ns=0,yn=mn=nn=null,rl=!1,i)throw Error(t(300));return n}function Tu(){var n=Ha!==0;return Ha=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function ci(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ga(n,i){return typeof i=="function"?i(n):i}function bu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=mn,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var j=C=null,Y=null,fe=g;do{var Ae=fe.lane;if((ns&Ae)===Ae)Y!==null&&(Y=Y.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Pe={lane:Ae,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Y===null?(j=Y=Pe,C=u):Y=Y.next=Pe,nn.lanes|=Ae,is|=Ae}fe=fe.next}while(fe!==null&&fe!==g);Y===null?C=u:Y.next=j,gi(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Y,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,nn.lanes|=g,is|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);gi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function up(){}function dp(n,i){var o=nn,u=ci(),h=i(),g=!gi(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Au(pp.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Va(9,hp.bind(null,o,u,h,i),void 0,null),Sn===null)throw Error(t(349));(ns&30)!==0||fp(o,i,h)}return h}function fp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function hp(n,i,o,u){i.value=o,i.getSnapshot=u,mp(i)&&gp(n)}function pp(n,i,o){return o(function(){mp(i)&&gp(n)})}function mp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!gi(n,o)}catch{return!0}}function gp(n){var i=Qi(n,1);i!==null&&Si(i,n,1,-1)}function xp(n){var i=Ii();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=e0.bind(null,nn,n),[i.memoizedState,n]}function Va(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function vp(){return ci().memoizedState}function sl(n,i,o,u){var h=Ii();nn.flags|=n,h.memoizedState=Va(1|i,o,void 0,u===void 0?null:u)}function al(n,i,o,u){var h=ci();u=u===void 0?null:u;var g=void 0;if(mn!==null){var C=mn.memoizedState;if(g=C.destroy,u!==null&&Eu(u,C.deps)){h.memoizedState=Va(i,o,g,u);return}}nn.flags|=n,h.memoizedState=Va(1|i,o,g,u)}function _p(n,i){return sl(8390656,8,n,i)}function Au(n,i){return al(2048,8,n,i)}function yp(n,i){return al(4,2,n,i)}function Sp(n,i){return al(4,4,n,i)}function Mp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ep(n,i,o){return o=o!=null?o.concat([n]):null,al(4,4,Mp.bind(null,i,n),o)}function Nu(){}function wp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Tp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function bp(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(gi(o,i)||(o=Gt(),nn.lanes|=o,is|=o,n.baseState=!0),i)}function Qv(n,i){var o=at;at=o!==0&&4>o?o:4,n(!0);var u=Mu.transition;Mu.transition={};try{n(!1),i()}finally{at=o,Mu.transition=u}}function Cp(){return ci().memoizedState}function Jv(n,i,o){var u=Cr(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Ap(n))Np(i,o);else if(o=sp(n,i,o,u),o!==null){var h=zn();Si(o,n,u,h),Rp(o,i,u)}}function e0(n,i,o){var u=Cr(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Ap(n))Np(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,j=g(C,o);if(h.hasEagerState=!0,h.eagerState=j,gi(j,C)){var Y=i.interleaved;Y===null?(h.next=h,gu(i)):(h.next=Y.next,Y.next=h),i.interleaved=h;return}}catch{}finally{}o=sp(n,i,h,u),o!==null&&(h=zn(),Si(o,n,u,h),Rp(o,i,u))}}function Ap(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function Np(n,i){Ba=rl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Rp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,hn(n,o)}}var ol={readContext:li,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},t0={readContext:li,useCallback:function(n,i){return Ii().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:_p,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,sl(4194308,4,Mp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return sl(4194308,4,n,i)},useInsertionEffect:function(n,i){return sl(4,2,n,i)},useMemo:function(n,i){var o=Ii();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ii();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=Jv.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var i=Ii();return n={current:n},i.memoizedState=n},useState:xp,useDebugValue:Nu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=xp(!1),i=n[0];return n=Qv.bind(null,n[1]),Ii().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=nn,h=Ii();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(ns&30)!==0||fp(u,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,_p(pp.bind(null,u,g,n),[n]),u.flags|=2048,Va(9,hp.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=Ii(),i=Sn.identifierPrefix;if(Jt){var o=Zi,u=Ki;o=(u&~(1<<32-se(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ha++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Zv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},n0={readContext:li,useCallback:wp,useContext:li,useEffect:Au,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:Tp,useReducer:bu,useRef:vp,useState:function(){return bu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return bp(i,mn.memoizedState,n)},useTransition:function(){var n=bu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1},i0={readContext:li,useCallback:wp,useContext:li,useEffect:Au,useImperativeHandle:Ep,useInsertionEffect:yp,useLayoutEffect:Sp,useMemo:Tp,useReducer:Cu,useRef:vp,useState:function(){return Cu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return mn===null?i.memoizedState=n:bp(i,mn.memoizedState,n)},useTransition:function(){var n=Cu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:up,useSyncExternalStore:dp,useId:Cp,unstable_isNewReconciler:!1};function vi(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ru(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ll={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Cr(n),g=Ji(u,h);g.payload=i,o!=null&&(g.callback=o),i=Er(n,g,h),i!==null&&(Si(i,n,h,u),el(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Cr(n),g=Ji(u,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=Er(n,g,h),i!==null&&(Si(i,n,h,u),el(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=Cr(n),h=Ji(o,u);h.tag=2,i!=null&&(h.callback=i),i=Er(n,h,u),i!==null&&(Si(i,n,u,o),el(i,n,u))}};function Pp(n,i,o,u,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,C):i.prototype&&i.prototype.isPureReactComponent?!Ra(o,u)||!Ra(h,g):!0}function Lp(n,i,o){var u=!1,h=yr,g=i.contextType;return typeof g=="object"&&g!==null?g=li(g):(h=Hn(i)?Zr:Pn.current,u=i.contextTypes,g=(u=u!=null)?Ps(n,h):yr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ll,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Dp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ll.enqueueReplaceState(i,i.state,null)}function Pu(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},xu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=li(g):(g=Hn(i)?Zr:Pn.current,h.context=Ps(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ll.enqueueReplaceState(h,h.state,null),tl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,i){try{var o="",u=i;do o+=le(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Lu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var r0=typeof WeakMap=="function"?WeakMap:Map;function Ip(n,i,o){o=Ji(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ml||(ml=!0,qu=u),Du(n,i)},o}function Up(n,i,o){o=Ji(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){Du(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Du(n,i),typeof u!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),o}function kp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new r0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=v0.bind(null,n,i,o),i.then(n,n))}function Fp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Op(n,i,o,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Ji(-1,1),i.tag=2,Er(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var s0=A.ReactCurrentOwner,Gn=!1;function On(n,i,o,u){i.child=n===null?rp(i,null,o,u):Us(i,n.child,o,u)}function zp(n,i,o,u,h){o=o.render;var g=i.ref;return Fs(i,h),u=wu(n,i,o,u,g,h),o=Tu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,er(n,i,h)):(Jt&&o&&ou(i),i.flags|=1,On(n,i,u,h),i.child)}function jp(n,i,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!td(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Bp(n,i,g,u,h)):(n=Sl(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(C,u)&&n.ref===i.ref)return er(n,i,h)}return i.flags|=1,n=Nr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Bp(n,i,o,u,h){if(n!==null){var g=n.memoizedProps;if(Ra(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,er(n,i,h)}return Iu(n,i,o,u,h)}function Hp(n,i,o){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Bs,ti),ti|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Bs,ti),ti|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,Xt(Bs,ti),ti|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,Xt(Bs,ti),ti|=u;return On(n,i,h,o),i.child}function Gp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Iu(n,i,o,u,h){var g=Hn(o)?Zr:Pn.current;return g=Ps(i,g),Fs(i,h),o=wu(n,i,o,u,g,h),u=Tu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,er(n,i,h)):(Jt&&u&&ou(i),i.flags|=1,On(n,i,o,h),i.child)}function Vp(n,i,o,u,h){if(Hn(o)){var g=!0;Xo(i)}else g=!1;if(Fs(i,h),i.stateNode===null)ul(n,i),Lp(i,o,u),Pu(i,o,u,h),u=!0;else if(n===null){var C=i.stateNode,j=i.memoizedProps;C.props=j;var Y=C.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=li(fe):(fe=Hn(o)?Zr:Pn.current,fe=Ps(i,fe));var Ae=o.getDerivedStateFromProps,Pe=typeof Ae=="function"||typeof C.getSnapshotBeforeUpdate=="function";Pe||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==u||Y!==fe)&&Dp(i,C,u,fe),Mr=!1;var Ce=i.memoizedState;C.state=Ce,tl(i,u,C,h),Y=i.memoizedState,j!==u||Ce!==Y||Bn.current||Mr?(typeof Ae=="function"&&(Ru(i,o,Ae,u),Y=i.memoizedState),(j=Mr||Pp(i,o,j,u,Ce,Y,fe))?(Pe||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Y),C.props=u,C.state=Y,C.context=fe,u=j):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,ap(n,i),j=i.memoizedProps,fe=i.type===i.elementType?j:vi(i.type,j),C.props=fe,Pe=i.pendingProps,Ce=C.context,Y=o.contextType,typeof Y=="object"&&Y!==null?Y=li(Y):(Y=Hn(o)?Zr:Pn.current,Y=Ps(i,Y));var $e=o.getDerivedStateFromProps;(Ae=typeof $e=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(j!==Pe||Ce!==Y)&&Dp(i,C,u,Y),Mr=!1,Ce=i.memoizedState,C.state=Ce,tl(i,u,C,h);var nt=i.memoizedState;j!==Pe||Ce!==nt||Bn.current||Mr?(typeof $e=="function"&&(Ru(i,o,$e,u),nt=i.memoizedState),(fe=Mr||Pp(i,o,fe,u,Ce,nt,Y)||!1)?(Ae||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,nt,Y),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,nt,Y)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||j===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=nt),C.props=u,C.state=nt,C.context=Y,u=fe):(typeof C.componentDidUpdate!="function"||j===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||j===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return Uu(n,i,o,u,g,h)}function Uu(n,i,o,u,h,g){Gp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return h&&Yh(i,o,!1),er(n,i,g);u=i.stateNode,s0.current=i;var j=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,j,g)):On(n,i,j,g),i.memoizedState=u.state,h&&Yh(i,o,!0),i.child}function Wp(n){var i=n.stateNode;i.pendingContext?$h(n,i.pendingContext,i.pendingContext!==i.context):i.context&&$h(n,i.context,!1),vu(n,i.containerInfo)}function Xp(n,i,o,u,h){return Is(),du(h),i.flags|=256,On(n,i,o,u),i.child}var ku={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function $p(n,i,o){var u=i.pendingProps,h=tn.current,g=!1,C=(i.flags&128)!==0,j;if((j=C)||(j=n!==null&&n.memoizedState===null?!1:(h&2)!==0),j?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),Xt(tn,h&1),n===null)return uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,g?(u=i.mode,g=i.child,C={mode:"hidden",children:C},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Ml(C,u,0,null),n=os(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Fu(o),i.memoizedState=ku,n):Ou(i,C));if(h=n.memoizedState,h!==null&&(j=h.dehydrated,j!==null))return a0(n,i,C,u,j,h,o);if(g){g=u.fallback,C=i.mode,h=n.child,j=h.sibling;var Y={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=Y,i.deletions=null):(u=Nr(h,Y),u.subtreeFlags=h.subtreeFlags&14680064),j!==null?g=Nr(j,g):(g=os(g,C,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,C=n.child.memoizedState,C=C===null?Fu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~o,i.memoizedState=ku,u}return g=n.child,n=g.sibling,u=Nr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ou(n,i){return i=Ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cl(n,i,o,u){return u!==null&&du(u),Us(i,n.child,null,o),n=Ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function a0(n,i,o,u,h,g,C){if(o)return i.flags&256?(i.flags&=-257,u=Lu(Error(t(422))),cl(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Ml({mode:"visible",children:u.children},h,0,null),g=os(g,h,C,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Us(i,n.child,null,C),i.child.memoizedState=Fu(C),i.memoizedState=ku,g);if((i.mode&1)===0)return cl(n,i,C,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var j=u.dgst;return u=j,g=Error(t(419)),u=Lu(g,u,void 0),cl(n,i,C,u)}if(j=(C&n.childLanes)!==0,Gn||j){if(u=Sn,u!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,Qi(n,h),Si(u,n,h,-1))}return ed(),u=Lu(Error(t(421))),cl(n,i,C,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=_0.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ei=vr(h.nextSibling),Jn=i,Jt=!0,xi=null,n!==null&&(ai[oi++]=Ki,ai[oi++]=Zi,ai[oi++]=Qr,Ki=n.id,Zi=n.overflow,Qr=i),i=Ou(i,u.children),i.flags|=4096,i)}function qp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),mu(n.return,i,o)}function zu(n,i,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Yp(n,i,o){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(On(n,i,u.children,o),u=tn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qp(n,o,i);else if(n.tag===19)qp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if(Xt(tn,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&nl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),zu(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&nl(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}zu(i,!0,o,null,g);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ul(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function er(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Nr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Nr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function o0(n,i,o){switch(i.tag){case 3:Wp(i),Is();break;case 5:cp(i);break;case 1:Hn(i.type)&&Xo(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;Xt(Qo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?(Xt(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?$p(n,i,o):(Xt(tn,tn.current&1),n=er(n,i,o),n!==null?n.sibling:null);Xt(tn,tn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Yp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),Xt(tn,tn.current),u)break;return null;case 22:case 23:return i.lanes=0,Hp(n,i,o)}return er(n,i,o)}var Kp,ju,Zp,Qp;Kp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},Zp=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,ts(Di.current);var g=null;switch(o){case"input":h=lt(n,h),u=lt(n,u),g=[];break;case"select":h=Q({},h,{value:void 0}),u=Q({},u,{value:void 0}),g=[];break;case"textarea":h=be(n,h),u=be(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Go)}me(o,u);var C;o=null;for(fe in h)if(!u.hasOwnProperty(fe)&&h.hasOwnProperty(fe)&&h[fe]!=null)if(fe==="style"){var j=h[fe];for(C in j)j.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(l.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in u){var Y=u[fe];if(j=h!=null?h[fe]:void 0,u.hasOwnProperty(fe)&&Y!==j&&(Y!=null||j!=null))if(fe==="style")if(j){for(C in j)!j.hasOwnProperty(C)||Y&&Y.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in Y)Y.hasOwnProperty(C)&&j[C]!==Y[C]&&(o||(o={}),o[C]=Y[C])}else o||(g||(g=[]),g.push(fe,o)),o=Y;else fe==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,j=j?j.__html:void 0,Y!=null&&j!==Y&&(g=g||[]).push(fe,Y)):fe==="children"?typeof Y!="string"&&typeof Y!="number"||(g=g||[]).push(fe,""+Y):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(l.hasOwnProperty(fe)?(Y!=null&&fe==="onScroll"&&Yt("scroll",n),g||j===Y||(g=[])):(g=g||[]).push(fe,Y))}o&&(g=g||[]).push("style",o);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},Qp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Wa(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function l0(n,i,o){var u=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Hn(i.type)&&Wo(),Dn(i),null;case 3:return u=i.stateNode,Os(),Kt(Bn),Kt(Pn),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,xi!==null&&(Zu(xi),xi=null))),ju(n,i),Dn(i),null;case 5:_u(i);var h=ts(ja.current);if(o=i.type,n!==null&&i.stateNode!=null)Zp(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=ts(Di.current),Ko(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Li]=i,u[Ua]=g,n=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":bt(u,g),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",u);break;case"textarea":Ye(u,g),Yt("invalid",u)}me(o,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var j=g[C];C==="children"?typeof j=="string"?u.textContent!==j&&(g.suppressHydrationWarning!==!0&&Ho(u.textContent,j,n),h=["children",j]):typeof j=="number"&&u.textContent!==""+j&&(g.suppressHydrationWarning!==!0&&Ho(u.textContent,j,n),h=["children",""+j]):l.hasOwnProperty(C)&&j!=null&&C==="onScroll"&&Yt("scroll",u)}switch(o){case"input":Fe(u),ye(u,g,!0);break;case"textarea":Fe(u),Ut(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Go)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=Nt(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[Li]=i,n[Ua]=u,Kp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ne(o,u),o){case"dialog":Yt("cancel",n),Yt("close",n),h=u;break;case"iframe":case"object":case"embed":Yt("load",n),h=u;break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],n);h=u;break;case"source":Yt("error",n),h=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),h=u;break;case"details":Yt("toggle",n),h=u;break;case"input":bt(n,u),h=lt(n,u),Yt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=Q({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":Ye(n,u),h=be(n,u),Yt("invalid",n);break;default:h=u}me(o,h),j=h;for(g in j)if(j.hasOwnProperty(g)){var Y=j[g];g==="style"?ie(n,Y):g==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&qt(n,Y)):g==="children"?typeof Y=="string"?(o!=="textarea"||Y!=="")&&rt(n,Y):typeof Y=="number"&&rt(n,""+Y):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?Y!=null&&g==="onScroll"&&Yt("scroll",n):Y!=null&&U(n,g,Y,C))}switch(o){case"input":Fe(n),ye(n,u,!1);break;case"textarea":Fe(n),Ut(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Se(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Tt(n,!!u.multiple,g,!1):u.defaultValue!=null&&Tt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Go)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Qp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(ja.current),ts(Di.current),Ko(i)){if(u=i.stateNode,o=i.memoizedProps,u[Li]=i,(g=u.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:Ho(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Li]=i,i.stateNode=u}return Dn(i),null;case 13:if(Kt(tn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)tp(),Is(),i.flags|=98560,g=!1;else if(g=Ko(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Li]=i}else Is(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),g=!1}else xi!==null&&(Zu(xi),xi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):ed())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return Os(),ju(n,i),n===null&&Da(i.stateNode.containerInfo),Dn(i),null;case 10:return pu(i.type._context),Dn(i),null;case 17:return Hn(i.type)&&Wo(),Dn(i),null;case 19:if(Kt(tn),g=i.memoizedState,g===null)return Dn(i),null;if(u=(i.flags&128)!==0,C=g.rendering,C===null)if(u)Wa(g,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=nl(n),C!==null){for(i.flags|=128,Wa(g,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Xt(tn,tn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>Hs&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304)}else{if(!u)if(n=nl(C),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Jt)return Dn(i),null}else 2*Zt()-g.renderingStartTime>Hs&&o!==1073741824&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(o=g.last,o!==null?o.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,o=tn.current,Xt(tn,u?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function c0(n,i){switch(lu(i),i.tag){case 1:return Hn(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Os(),Kt(Bn),Kt(Pn),Su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Kt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));Is()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return Os(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var dl=!1,In=!1,u0=typeof WeakSet=="function"?WeakSet:Set,Ze=null;function js(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){an(n,i,u)}else o.current=null}function Bu(n,i,o){try{o()}catch(u){an(n,i,u)}}var Jp=!1;function d0(n,i){if(Jc=Po,n=Ph(),Wc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var C=0,j=-1,Y=-1,fe=0,Ae=0,Pe=n,Ce=null;t:for(;;){for(var $e;Pe!==o||h!==0&&Pe.nodeType!==3||(j=C+h),Pe!==g||u!==0&&Pe.nodeType!==3||(Y=C+u),Pe.nodeType===3&&(C+=Pe.nodeValue.length),($e=Pe.firstChild)!==null;)Ce=Pe,Pe=$e;for(;;){if(Pe===n)break t;if(Ce===o&&++fe===h&&(j=C),Ce===g&&++Ae===u&&(Y=C),($e=Pe.nextSibling)!==null)break;Pe=Ce,Ce=Pe.parentNode}Pe=$e}o=j===-1||Y===-1?null:{start:j,end:Y}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:n,selectionRange:o},Po=!1,Ze=i;Ze!==null;)if(i=Ze,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ze=n;else for(;Ze!==null;){i=Ze;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var it=nt.memoizedProps,ln=nt.memoizedState,oe=i.stateNode,te=oe.getSnapshotBeforeUpdate(i.elementType===i.type?it:vi(i.type,it),ln);oe.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ue){an(i,i.return,Ue)}if(n=i.sibling,n!==null){n.return=i.return,Ze=n;break}Ze=i.return}return nt=Jp,Jp=!1,nt}function Xa(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Bu(i,o,g)}h=h.next}while(h!==u)}}function fl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function em(n){var i=n.alternate;i!==null&&(n.alternate=null,em(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Ua],delete i[ru],delete i[$v],delete i[qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function tm(n){return n.tag===5||n.tag===3||n.tag===4}function nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||tm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Go));else if(u!==4&&(n=n.child,n!==null))for(Gu(n,i,o),n=n.sibling;n!==null;)Gu(n,i,o),n=n.sibling}function Vu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var Tn=null,_i=!1;function wr(n,i,o){for(o=o.child;o!==null;)im(n,i,o),o=o.sibling}function im(n,i,o){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(q,o)}catch{}switch(o.tag){case 5:In||js(o,i);case 6:var u=Tn,h=_i;Tn=null,wr(n,i,o),Tn=u,_i=h,Tn!==null&&(_i?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(_i?(n=Tn,o=o.stateNode,n.nodeType===8?iu(n.parentNode,o):n.nodeType===1&&iu(n,o),wa(n)):iu(Tn,o.stateNode));break;case 4:u=Tn,h=_i,Tn=o.stateNode.containerInfo,_i=!0,wr(n,i,o),Tn=u,_i=h;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Bu(o,i,C),h=h.next}while(h!==u)}wr(n,i,o);break;case 1:if(!In&&(js(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(j){an(o,i,j)}wr(n,i,o);break;case 21:wr(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,wr(n,i,o),In=u):wr(n,i,o);break;default:wr(n,i,o)}}function rm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new u0),i.forEach(function(u){var h=y0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function yi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,C=i,j=C;e:for(;j!==null;){switch(j.tag){case 5:Tn=j.stateNode,_i=!1;break e;case 3:Tn=j.stateNode.containerInfo,_i=!0;break e;case 4:Tn=j.stateNode.containerInfo,_i=!0;break e}j=j.return}if(Tn===null)throw Error(t(160));im(g,C,h),Tn=null,_i=!1;var Y=h.alternate;Y!==null&&(Y.return=null),h.return=null}catch(fe){an(h,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)sm(i,n),i=i.sibling}function sm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(yi(i,n),Ui(n),u&4){try{Xa(3,n,n.return),fl(3,n)}catch(it){an(n,n.return,it)}try{Xa(5,n,n.return)}catch(it){an(n,n.return,it)}}break;case 1:yi(i,n),Ui(n),u&512&&o!==null&&js(o,o.return);break;case 5:if(yi(i,n),Ui(n),u&512&&o!==null&&js(o,o.return),n.flags&32){var h=n.stateNode;try{rt(h,"")}catch(it){an(n,n.return,it)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=o!==null?o.memoizedProps:g,j=n.type,Y=n.updateQueue;if(n.updateQueue=null,Y!==null)try{j==="input"&&g.type==="radio"&&g.name!=null&&ct(h,g),Ne(j,C);var fe=Ne(j,g);for(C=0;C<Y.length;C+=2){var Ae=Y[C],Pe=Y[C+1];Ae==="style"?ie(h,Pe):Ae==="dangerouslySetInnerHTML"?qt(h,Pe):Ae==="children"?rt(h,Pe):U(h,Ae,Pe,fe)}switch(j){case"input":_t(h,g);break;case"textarea":X(h,g);break;case"select":var Ce=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var $e=g.value;$e!=null?Tt(h,!!g.multiple,$e,!1):Ce!==!!g.multiple&&(g.defaultValue!=null?Tt(h,!!g.multiple,g.defaultValue,!0):Tt(h,!!g.multiple,g.multiple?[]:"",!1))}h[Ua]=g}catch(it){an(n,n.return,it)}}break;case 6:if(yi(i,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(it){an(n,n.return,it)}}break;case 3:if(yi(i,n),Ui(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(it){an(n,n.return,it)}break;case 4:yi(i,n),Ui(n);break;case 13:yi(i,n),Ui(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||($u=Zt())),u&4&&rm(n);break;case 22:if(Ae=o!==null&&o.memoizedState!==null,n.mode&1?(In=(fe=In)||Ae,yi(i,n),In=fe):yi(i,n),Ui(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ae&&(n.mode&1)!==0)for(Ze=n,Ae=n.child;Ae!==null;){for(Pe=Ze=Ae;Ze!==null;){switch(Ce=Ze,$e=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Xa(4,Ce,Ce.return);break;case 1:js(Ce,Ce.return);var nt=Ce.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Ce,o=Ce.return;try{i=u,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(it){an(u,o,it)}}break;case 5:js(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){lm(Pe);continue}}$e!==null?($e.return=Ce,Ze=$e):lm(Pe)}Ae=Ae.sibling}e:for(Ae=null,Pe=n;;){if(Pe.tag===5){if(Ae===null){Ae=Pe;try{h=Pe.stateNode,fe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(j=Pe.stateNode,Y=Pe.memoizedProps.style,C=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,j.style.display=b("display",C))}catch(it){an(n,n.return,it)}}}else if(Pe.tag===6){if(Ae===null)try{Pe.stateNode.nodeValue=fe?"":Pe.memoizedProps}catch(it){an(n,n.return,it)}}else if((Pe.tag!==22&&Pe.tag!==23||Pe.memoizedState===null||Pe===n)&&Pe.child!==null){Pe.child.return=Pe,Pe=Pe.child;continue}if(Pe===n)break e;for(;Pe.sibling===null;){if(Pe.return===null||Pe.return===n)break e;Ae===Pe&&(Ae=null),Pe=Pe.return}Ae===Pe&&(Ae=null),Pe.sibling.return=Pe.return,Pe=Pe.sibling}}break;case 19:yi(i,n),Ui(n),u&4&&rm(n);break;case 21:break;default:yi(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(tm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(rt(h,""),u.flags&=-33);var g=nm(n);Vu(n,g,h);break;case 3:case 4:var C=u.stateNode.containerInfo,j=nm(n);Gu(n,j,C);break;default:throw Error(t(161))}}catch(Y){an(n,n.return,Y)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function f0(n,i,o){Ze=n,am(n)}function am(n,i,o){for(var u=(n.mode&1)!==0;Ze!==null;){var h=Ze,g=h.child;if(h.tag===22&&u){var C=h.memoizedState!==null||dl;if(!C){var j=h.alternate,Y=j!==null&&j.memoizedState!==null||In;j=dl;var fe=In;if(dl=C,(In=Y)&&!fe)for(Ze=h;Ze!==null;)C=Ze,Y=C.child,C.tag===22&&C.memoizedState!==null?cm(h):Y!==null?(Y.return=C,Ze=Y):cm(h);for(;g!==null;)Ze=g,am(g),g=g.sibling;Ze=h,dl=j,In=fe}om(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Ze=g):om(n)}}function om(n){for(;Ze!==null;){var i=Ze;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||fl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:vi(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&lp(i,g,u);break;case 3:var C=i.updateQueue;if(C!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}lp(i,C,o)}break;case 5:var j=i.stateNode;if(o===null&&i.flags&4){o=j;var Y=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&o.focus();break;case"img":Y.src&&(o.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ae=fe.memoizedState;if(Ae!==null){var Pe=Ae.dehydrated;Pe!==null&&wa(Pe)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Hu(i)}catch(Ce){an(i,i.return,Ce)}}if(i===n){Ze=null;break}if(o=i.sibling,o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function lm(n){for(;Ze!==null;){var i=Ze;if(i===n){Ze=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Ze=o;break}Ze=i.return}}function cm(n){for(;Ze!==null;){var i=Ze;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{fl(4,i)}catch(Y){an(i,o,Y)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(Y){an(i,h,Y)}}var g=i.return;try{Hu(i)}catch(Y){an(i,g,Y)}break;case 5:var C=i.return;try{Hu(i)}catch(Y){an(i,C,Y)}}}catch(Y){an(i,i.return,Y)}if(i===n){Ze=null;break}var j=i.sibling;if(j!==null){j.return=i.return,Ze=j;break}Ze=i.return}}var h0=Math.ceil,hl=A.ReactCurrentDispatcher,Wu=A.ReactCurrentOwner,ui=A.ReactCurrentBatchConfig,Ft=0,Sn=null,cn=null,bn=0,ti=0,Bs=_r(0),gn=0,$a=null,is=0,pl=0,Xu=0,qa=null,Vn=null,$u=0,Hs=1/0,tr=null,ml=!1,qu=null,Tr=null,gl=!1,br=null,xl=0,Ya=0,Yu=null,vl=-1,_l=0;function zn(){return(Ft&6)!==0?Zt():vl!==-1?vl:vl=Zt()}function Cr(n){return(n.mode&1)===0?1:(Ft&2)!==0&&bn!==0?bn&-bn:Kv.transition!==null?(_l===0&&(_l=Gt()),_l):(n=at,n!==0||(n=window.event,n=n===void 0?16:dh(n.type)),n)}function Si(n,i,o,u){if(50<Ya)throw Ya=0,Yu=null,Error(t(185));sn(n,o,u),((Ft&2)===0||n!==Sn)&&(n===Sn&&((Ft&2)===0&&(pl|=o),gn===4&&Ar(n,bn)),Wn(n,u),o===1&&Ft===0&&(i.mode&1)===0&&(Hs=Zt()+500,$o&&Sr()))}function Wn(n,i){var o=n.callbackNode;Ct(n,i);var u=Et(n,n===Sn?bn:0);if(u===0)o!==null&&_a(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&_a(o),i===1)n.tag===0?Yv(dm.bind(null,n)):Kh(dm.bind(null,n)),Wv(function(){(Ft&6)===0&&Sr()}),o=null;else{switch(Ri(u)){case 1:o=ya;break;case 4:o=Ao;break;case 16:o=Ss;break;case 536870912:o=N;break;default:o=Ss}o=_m(o,um.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function um(n,i){if(vl=-1,_l=0,(Ft&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Gs()&&n.callbackNode!==o)return null;var u=Et(n,n===Sn?bn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=yl(n,u);else{i=u;var h=Ft;Ft|=2;var g=hm();(Sn!==n||bn!==i)&&(tr=null,Hs=Zt()+500,ss(n,i));do try{g0();break}catch(j){fm(n,j)}while(!0);hu(),hl.current=g,Ft=h,cn!==null?i=0:(Sn=null,bn=0,i=gn)}if(i!==0){if(i===2&&(h=Qt(n),h!==0&&(u=h,i=Ku(n,h))),i===1)throw o=$a,ss(n,0),Ar(n,u),Wn(n,Zt()),o;if(i===6)Ar(n,u);else{if(h=n.current.alternate,(u&30)===0&&!p0(h)&&(i=yl(n,u),i===2&&(g=Qt(n),g!==0&&(u=g,i=Ku(n,g))),i===1))throw o=$a,ss(n,0),Ar(n,u),Wn(n,Zt()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Vn,tr);break;case 3:if(Ar(n,u),(u&130023424)===u&&(i=$u+500-Zt(),10<i)){if(Et(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(as.bind(null,n,Vn,tr),i);break}as(n,Vn,tr);break;case 4:if(Ar(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var C=31-se(u);g=1<<C,C=i[C],C>h&&(h=C),u&=~g}if(u=h,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*h0(u/1960))-u,10<u){n.timeoutHandle=nu(as.bind(null,n,Vn,tr),u);break}as(n,Vn,tr);break;case 5:as(n,Vn,tr);break;default:throw Error(t(329))}}}return Wn(n,Zt()),n.callbackNode===o?um.bind(null,n):null}function Ku(n,i){var o=qa;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=yl(n,i),n!==2&&(i=Vn,Vn=o,i!==null&&Zu(i)),n}function Zu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function p0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!gi(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Ar(n,i){for(i&=~Xu,i&=~pl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-se(i),u=1<<o;n[o]=-1,i&=~u}}function dm(n){if((Ft&6)!==0)throw Error(t(327));Gs();var i=Et(n,0);if((i&1)===0)return Wn(n,Zt()),null;var o=yl(n,i);if(n.tag!==0&&o===2){var u=Qt(n);u!==0&&(i=u,o=Ku(n,u))}if(o===1)throw o=$a,ss(n,0),Ar(n,i),Wn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Vn,tr),Wn(n,Zt()),null}function Qu(n,i){var o=Ft;Ft|=1;try{return n(i)}finally{Ft=o,Ft===0&&(Hs=Zt()+500,$o&&Sr())}}function rs(n){br!==null&&br.tag===0&&(Ft&6)===0&&Gs();var i=Ft;Ft|=1;var o=ui.transition,u=at;try{if(ui.transition=null,at=1,n)return n()}finally{at=u,ui.transition=o,Ft=i,(Ft&6)===0&&Sr()}}function Ju(){ti=Bs.current,Kt(Bs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Vv(o)),cn!==null)for(o=cn.return;o!==null;){var u=o;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:Os(),Kt(Bn),Kt(Pn),Su();break;case 5:_u(u);break;case 4:Os();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:pu(u.type._context);break;case 22:case 23:Ju()}o=o.return}if(Sn=n,cn=n=Nr(n.current,null),bn=ti=i,gn=0,$a=null,Xu=pl=is=0,Vn=qa=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var C=g.next;g.next=h,u.next=C}o.pending=u}es=null}return n}function fm(n,i){do{var o=cn;try{if(hu(),il.current=ol,rl){for(var u=nn.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}rl=!1}if(ns=0,yn=mn=nn=null,Ba=!1,Ha=0,Wu.current=null,o===null||o.return===null){gn=1,$a=i,cn=null;break}e:{var g=n,C=o.return,j=o,Y=i;if(i=bn,j.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var fe=Y,Ae=j,Pe=Ae.tag;if((Ae.mode&1)===0&&(Pe===0||Pe===11||Pe===15)){var Ce=Ae.alternate;Ce?(Ae.updateQueue=Ce.updateQueue,Ae.memoizedState=Ce.memoizedState,Ae.lanes=Ce.lanes):(Ae.updateQueue=null,Ae.memoizedState=null)}var $e=Fp(C);if($e!==null){$e.flags&=-257,Op($e,C,j,g,i),$e.mode&1&&kp(g,fe,i),i=$e,Y=fe;var nt=i.updateQueue;if(nt===null){var it=new Set;it.add(Y),i.updateQueue=it}else nt.add(Y);break e}else{if((i&1)===0){kp(g,fe,i),ed();break e}Y=Error(t(426))}}else if(Jt&&j.mode&1){var ln=Fp(C);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Op(ln,C,j,g,i),du(zs(Y,j));break e}}g=Y=zs(Y,j),gn!==4&&(gn=2),qa===null?qa=[g]:qa.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var oe=Ip(g,Y,i);op(g,oe);break e;case 1:j=Y;var te=g.type,ue=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Tr===null||!Tr.has(ue)))){g.flags|=65536,i&=-i,g.lanes|=i;var Ue=Up(g,j,i);op(g,Ue);break e}}g=g.return}while(g!==null)}mm(o)}catch(ot){i=ot,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function hm(){var n=hl.current;return hl.current=ol,n===null?ol:n}function ed(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(is&268435455)===0&&(pl&268435455)===0||Ar(Sn,bn)}function yl(n,i){var o=Ft;Ft|=2;var u=hm();(Sn!==n||bn!==i)&&(tr=null,ss(n,i));do try{m0();break}catch(h){fm(n,h)}while(!0);if(hu(),Ft=o,hl.current=u,cn!==null)throw Error(t(261));return Sn=null,bn=0,gn}function m0(){for(;cn!==null;)pm(cn)}function g0(){for(;cn!==null&&!Yr();)pm(cn)}function pm(n){var i=vm(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?mm(n):cn=i,Wu.current=null}function mm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=l0(o,i,ti),o!==null){cn=o;return}}else{if(o=c0(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);gn===0&&(gn=5)}function as(n,i,o){var u=at,h=ui.transition;try{ui.transition=null,at=1,x0(n,i,o,u)}finally{ui.transition=h,at=u}return null}function x0(n,i,o,u){do Gs();while(br!==null);if((Ft&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(tt(n,g),n===Sn&&(cn=Sn=null,bn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||gl||(gl=!0,_m(Ss,function(){return Gs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var C=at;at=1;var j=Ft;Ft|=4,Wu.current=null,d0(n,o),sm(o,n),Fv(eu),Po=!!Jc,eu=Jc=null,n.current=o,f0(o),Dc(),Ft=j,at=C,ui.transition=g}else n.current=o;if(gl&&(gl=!1,br=n,xl=h),g=n.pendingLanes,g===0&&(Tr=null),ae(o.stateNode),Wn(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(ml)throw ml=!1,n=qu,qu=null,n;return(xl&1)!==0&&n.tag!==0&&Gs(),g=n.pendingLanes,(g&1)!==0?n===Yu?Ya++:(Ya=0,Yu=n):Ya=0,Sr(),null}function Gs(){if(br!==null){var n=Ri(xl),i=ui.transition,o=at;try{if(ui.transition=null,at=16>n?16:n,br===null)var u=!1;else{if(n=br,br=null,xl=0,(Ft&6)!==0)throw Error(t(331));var h=Ft;for(Ft|=4,Ze=n.current;Ze!==null;){var g=Ze,C=g.child;if((Ze.flags&16)!==0){var j=g.deletions;if(j!==null){for(var Y=0;Y<j.length;Y++){var fe=j[Y];for(Ze=fe;Ze!==null;){var Ae=Ze;switch(Ae.tag){case 0:case 11:case 15:Xa(8,Ae,g)}var Pe=Ae.child;if(Pe!==null)Pe.return=Ae,Ze=Pe;else for(;Ze!==null;){Ae=Ze;var Ce=Ae.sibling,$e=Ae.return;if(em(Ae),Ae===fe){Ze=null;break}if(Ce!==null){Ce.return=$e,Ze=Ce;break}Ze=$e}}}var nt=g.alternate;if(nt!==null){var it=nt.child;if(it!==null){nt.child=null;do{var ln=it.sibling;it.sibling=null,it=ln}while(it!==null)}}Ze=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,Ze=C;else e:for(;Ze!==null;){if(g=Ze,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var oe=g.sibling;if(oe!==null){oe.return=g.return,Ze=oe;break e}Ze=g.return}}var te=n.current;for(Ze=te;Ze!==null;){C=Ze;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,Ze=ue;else e:for(C=te;Ze!==null;){if(j=Ze,(j.flags&2048)!==0)try{switch(j.tag){case 0:case 11:case 15:fl(9,j)}}catch(ot){an(j,j.return,ot)}if(j===C){Ze=null;break e}var Ue=j.sibling;if(Ue!==null){Ue.return=j.return,Ze=Ue;break e}Ze=j.return}}if(Ft=h,Sr(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(q,n)}catch{}u=!0}return u}finally{at=o,ui.transition=i}}return!1}function gm(n,i,o){i=zs(o,i),i=Ip(n,i,1),n=Er(n,i,1),i=zn(),n!==null&&(sn(n,1,i),Wn(n,i))}function an(n,i,o){if(n.tag===3)gm(n,n,o);else for(;i!==null;){if(i.tag===3){gm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Tr===null||!Tr.has(u))){n=zs(o,n),n=Up(i,n,1),i=Er(i,n,1),n=zn(),i!==null&&(sn(i,1,n),Wn(i,n));break}}i=i.return}}function v0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(bn&o)===o&&(gn===4||gn===3&&(bn&130023424)===bn&&500>Zt()-$u?ss(n,0):Xu|=o),Wn(n,i)}function xm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var o=zn();n=Qi(n,i),n!==null&&(sn(n,i,o),Wn(n,o))}function _0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),xm(n,o)}function y0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),xm(n,o)}var vm;vm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Gn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gn=!1,o0(n,i,o);Gn=(n.flags&131072)!==0}else Gn=!1,Jt&&(i.flags&1048576)!==0&&Zh(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ul(n,i),n=i.pendingProps;var h=Ps(i,Pn.current);Fs(i,o),h=wu(null,i,u,n,h,o);var g=Tu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(g=!0,Xo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,xu(i),h.updater=ll,i.stateNode=h,h._reactInternals=i,Pu(i,u,n,o),i=Uu(null,i,u,!0,g,o)):(i.tag=0,Jt&&g&&ou(i),On(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ul(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=M0(u),n=vi(u,n),h){case 0:i=Iu(null,i,u,n,o);break e;case 1:i=Vp(null,i,u,n,o);break e;case 11:i=zp(null,i,u,n,o);break e;case 14:i=jp(null,i,u,vi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:vi(u,h),Iu(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:vi(u,h),Vp(n,i,u,h,o);case 3:e:{if(Wp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,ap(n,i),tl(i,u,null,o);var C=i.memoizedState;if(u=C.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=zs(Error(t(423)),i),i=Xp(n,i,u,o,h);break e}else if(u!==h){h=zs(Error(t(424)),i),i=Xp(n,i,u,o,h);break e}else for(ei=vr(i.stateNode.containerInfo.firstChild),Jn=i,Jt=!0,xi=null,o=rp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Is(),u===h){i=er(n,i,o);break e}On(n,i,u,o)}i=i.child}return i;case 5:return cp(i),n===null&&uu(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,tu(u,h)?C=null:g!==null&&tu(u,g)&&(i.flags|=32),Gp(n,i),On(n,i,C,o),i.child;case 6:return n===null&&uu(i),null;case 13:return $p(n,i,o);case 4:return vu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Us(i,null,u,o):On(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:vi(u,h),zp(n,i,u,h,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,Xt(Qo,u._currentValue),u._currentValue=C,g!==null)if(gi(g.value,C)){if(g.children===h.children&&!Bn.current){i=er(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var j=g.dependencies;if(j!==null){C=g.child;for(var Y=j.firstContext;Y!==null;){if(Y.context===u){if(g.tag===1){Y=Ji(-1,o&-o),Y.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Ae=fe.pending;Ae===null?Y.next=Y:(Y.next=Ae.next,Ae.next=Y),fe.pending=Y}}g.lanes|=o,Y=g.alternate,Y!==null&&(Y.lanes|=o),mu(g.return,o,i),j.lanes|=o;break}Y=Y.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=o,j=C.alternate,j!==null&&(j.lanes|=o),mu(C,o,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}On(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Fs(i,o),h=li(h),u=u(h),i.flags|=1,On(n,i,u,o),i.child;case 14:return u=i.type,h=vi(u,i.pendingProps),h=vi(u.type,h),jp(n,i,u,h,o);case 15:return Bp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:vi(u,h),ul(n,i),i.tag=1,Hn(u)?(n=!0,Xo(i)):n=!1,Fs(i,o),Lp(i,u,h),Pu(i,u,h,o),Uu(null,i,u,!0,n,o);case 19:return Yp(n,i,o);case 22:return Hp(n,i,o)}throw Error(t(156,i.tag))};function _m(n,i){return va(n,i)}function S0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,u){return new S0(n,i,o,u)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function M0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===V)return 14}return 2}function Nr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Sl(n,i,o,u,h,g){var C=2;if(u=n,typeof n=="function")td(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return os(o.children,h,g,i);case D:C=8,h|=8;break;case J:return n=di(12,o,i,h|2),n.elementType=J,n.lanes=g,n;case re:return n=di(13,o,i,h),n.elementType=re,n.lanes=g,n;case z:return n=di(19,o,i,h),n.elementType=z,n.lanes=g,n;case F:return Ml(o,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case O:C=10;break e;case H:C=9;break e;case ee:C=11;break e;case V:C=14;break e;case ne:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(C,o,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function os(n,i,o,u){return n=di(7,n,u,i),n.lanes=o,n}function Ml(n,i,o,u){return n=di(22,n,u,i),n.elementType=F,n.lanes=o,n.stateNode={isHidden:!1},n}function nd(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function id(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function E0(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Bt(0),this.expirationTimes=Bt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Bt(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rd(n,i,o,u,h,g,C,j,Y){return n=new E0(n,i,o,j,Y),i===1?(i=1,g===!0&&(i|=8)):i=0,g=di(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(g),n}function w0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function ym(n){if(!n)return yr;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return qh(n,o,i)}return i}function Sm(n,i,o,u,h,g,C,j,Y){return n=rd(o,u,!0,n,h,g,C,j,Y),n.context=ym(null),o=n.current,u=zn(),h=Cr(o),g=Ji(u,h),g.callback=i??null,Er(o,g,h),n.current.lanes=h,sn(n,h,u),Wn(n,u),n}function El(n,i,o,u){var h=i.current,g=zn(),C=Cr(h);return o=ym(o),i.context===null?i.context=o:i.pendingContext=o,i=Ji(g,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=Er(h,i,C),n!==null&&(Si(n,h,C,g),el(n,h,C)),C}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function sd(n,i){Mm(n,i),(n=n.alternate)&&Mm(n,i)}function T0(){return null}var Em=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Tl.prototype.render=ad.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));El(n,i,null,null)},Tl.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){El(null,n,null,null)}),i[qi]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Pi();n={blockedOn:null,target:n,priority:i};for(var o=0;o<mr.length&&i!==0&&i<mr[o].priority;o++);mr.splice(o,0,n),o===0&&ch(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function bl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function wm(){}function b0(n,i,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var fe=wl(C);g.call(fe)}}var C=Sm(i,u,n,0,null,!1,!1,"",wm);return n._reactRootContainer=C,n[qi]=C.current,Da(n.nodeType===8?n.parentNode:n),rs(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var j=u;u=function(){var fe=wl(Y);j.call(fe)}}var Y=rd(n,0,!1,null,null,!1,!1,"",wm);return n._reactRootContainer=Y,n[qi]=Y.current,Da(n.nodeType===8?n.parentNode:n),rs(function(){El(i,Y,o,u)}),Y}function Cl(n,i,o,u,h){var g=o._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var j=h;h=function(){var Y=wl(C);j.call(Y)}}El(i,C,n,h)}else C=b0(o,i,n,h,u);return wl(C)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=ht(i.pendingLanes);o!==0&&(hn(i,o|1),Wn(i,Zt()),(Ft&6)===0&&(Hs=Zt()+500,Sr()))}break;case 13:rs(function(){var u=Qi(n,1);if(u!==null){var h=zn();Si(u,n,1,h)}}),sd(n,1)}},hr=function(n){if(n.tag===13){var i=Qi(n,134217728);if(i!==null){var o=zn();Si(i,n,134217728,o)}sd(n,134217728)}},mi=function(n){if(n.tag===13){var i=Cr(n),o=Qi(n,i);if(o!==null){var u=zn();Si(o,n,i,u)}sd(n,i)}},Pi=function(){return at},Rt=function(n,i){var o=at;try{return at=n,i()}finally{at=o}},ge=function(n,i,o){switch(i){case"input":if(_t(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Vo(u);if(!h)throw Error(t(90));vt(u),_t(u,h)}}}break;case"textarea":X(n,o);break;case"select":i=o.value,i!=null&&Tt(n,!!o.multiple,i,!1)}},Ie=Qu,ke=rs;var C0={usingClientEntryPoint:!1,Events:[ka,Ns,Vo,pe,Oe,Qu]},Ka={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},A0={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{q=Al.inject(A0),ce=Al}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=C0,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(i))throw Error(t(200));return w0(n,i,null,o)},Xn.createRoot=function(n,i){if(!od(n))throw Error(t(299));var o=!1,u="",h=Em;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=rd(n,1,!1,null,null,o,!1,u,h),n[qi]=i.current,Da(n.nodeType===8?n.parentNode:n),new ad(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return rs(n)},Xn.hydrate=function(n,i,o){if(!bl(i))throw Error(t(200));return Cl(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!od(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",C=Em;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),i=Sm(i,null,n,1,o??null,h,!1,g,C),n[qi]=i.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new Tl(i)},Xn.render=function(n,i,o){if(!bl(i))throw Error(t(200));return Cl(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!bl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[qi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Qu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!bl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,i,o,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Lm;function F0(){if(Lm)return ud.exports;Lm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=k0(),ud.exports}var Dm;function O0(){if(Dm)return Nl;Dm=1;var s=F0();return Nl.createRoot=s.createRoot,Nl.hydrateRoot=s.hydrateRoot,Nl}var z0=O0();const j0=Wg(z0);function fs(){if(typeof window<"u"){const s=localStorage.getItem("streamlink_api_url");if(s){const e=s.trim().replace(/\/+$/,"");if(e.includes("your-temporary-url")||e.includes("your-tunnel")||e.includes("sponsored-fee-imposed-associations")||e==="https://"||e==="http://")localStorage.removeItem("streamlink_api_url");else return e}}return"".trim().replace(/\/+$/,"")}function Im(s){typeof window<"u"&&(!s||!s.trim()?localStorage.removeItem("streamlink_api_url"):localStorage.setItem("streamlink_api_url",s.trim().replace(/\/+$/,"")))}function fn(s){if(!s)return"";if(s.startsWith("http://")||s.startsWith("https://"))return s;const e=fs(),t=s.startsWith("/")?s:`/${s}`;return e?`${e}${t}`:t}const Xg=K.createContext(null);function B0({children:s}){const[e,t]=K.useState(null),[r,l]=K.useState(()=>localStorage.getItem("streamlink_token")),[c,d]=K.useState(!0);K.useEffect(()=>{r?fetch(fn("/api/auth/me"),{headers:{Authorization:`Bearer ${r}`}}).then(v=>{if(v.ok)return v.json();throw new Error("Session invalid")}).then(v=>{t(v.user)}).catch(()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)}).finally(()=>d(!1)):d(!1)},[r]);const f=async(v,S)=>{const _=await fetch(fn("/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:S})}),y=await _.json();if(!_.ok)throw new Error(y.error||"Login failed");return localStorage.setItem("streamlink_token",y.token),l(y.token),t(y.user),y.user},m=()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)},p=(v,S={})=>{const _={...S.headers,Authorization:`Bearer ${r}`};return fetch(fn(v),{...S,headers:_})};return a.jsx(Xg.Provider,{value:{user:e,token:r,login:f,logout:m,authFetch:p,loading:c},children:s})}function jf(){return K.useContext(Xg)}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),$g=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var G0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V0=K.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...f},m)=>K.createElement("svg",{ref:m,...G0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:$g("lucide",l),...f},[...d.map(([p,v])=>K.createElement(p,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(s,e)=>{const t=K.forwardRef(({className:r,...l},c)=>K.createElement(V0,{ref:c,iconNode:e,className:$g(`lucide-${H0(s)}`,r),...l}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],qg=qe("Activity",W0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fc=qe("ArrowLeft",X0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],co=qe("ArrowRight",$0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Y0=qe("ArrowUpRight",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],Yg=qe("Captions",K0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Cn=qe("Check",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],J0=qe("ChevronDown",Q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],t_=qe("ChevronRight",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const n_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],i_=qe("ChevronUp",n_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uo=qe("CircleAlert",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wd=qe("CircleCheckBig",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],o_=qe("CircleCheck",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Gr=qe("Clock",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],u_=qe("Compass",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],sa=qe("Copy",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],h_=qe("CornerDownLeft",f_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Um=qe("Download",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],km=qe("EllipsisVertical",m_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Fm=qe("ExternalLink",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Kg=qe("EyeOff",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Zg=qe("Eye",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],bi=qe("Film",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Fr=qe("FolderMinus",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hs=qe("FolderOpen",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Qg=qe("FolderPlus",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],ic=qe("FolderSync",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ao=qe("Folder",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],bc=qe("Globe",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Om=qe("Grid3x3",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],Vi=qe("HardDrive",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],ji=qe("Heart",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],zm=qe("House",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],hc=qe("Image",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fo=qe("Info",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Jg=qe("Layers",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],I_=qe("LayoutDashboard",D_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],k_=qe("LayoutGrid",U_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],O_=qe("List",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cc=qe("Lock",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const j_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],jm=qe("LogOut",j_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],H_=qe("Maximize",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],V_=qe("Minimize",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Bf=qe("Monitor",W_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X_=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],hd=qe("Pause",X_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],dn=qe("Play",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Hf=qe("Plus",q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],K_=qe("QrCode",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],Q_=qe("Radio",Z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Hr=qe("RefreshCw",J_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oo=qe("RotateCcw",ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],rc=qe("RotateCw",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],aa=qe("Search",ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ry=qe("Server",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ay=qe("Shield",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],ex=qe("SlidersVertical",oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Vr=qe("Sparkles",ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],pc=qe("SquareCheckBig",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ca=qe("Square",uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Wr=qe("Trash2",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],hy=qe("TrendingUp",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mc=qe("TriangleAlert",py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],gy=qe("Upload",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],vy=qe("UserPlus",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],tx=qe("User",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Gf=qe("Users",yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],My=qe("Volume2",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],wy=qe("VolumeX",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],by=qe("Wifi",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],lr=qe("X",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ay=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],nx=qe("Zap",Ay);function Ny({currentView:s,setCurrentView:e,onOpenSearch:t,onOpenProfiles:r,onOpenQuality:l,currentProfile:c,qualityLevel:d="high"}){var p,v,S,_,y,w,T,x;const{user:f,logout:m}=jf();return a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"app-mobile-top-bar",children:[a.jsxs("div",{className:"mobile-brand-pill",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(bi,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"mobile-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"mobile-version-tag",children:"2.0"})]}),a.jsxs("span",{className:"mobile-live-dot",title:"Server Online",children:[a.jsx(Q_,{size:11,className:"pulse-icon"}),"LIVE"]})]}),a.jsxs("div",{className:"mobile-top-right",children:[a.jsx("button",{className:"mobile-search-btn",onClick:t,title:"Search (/)",children:a.jsx(aa,{size:16})}),a.jsx("button",{className:"mobile-profile-btn",onClick:r,style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},title:"Switch Profile",children:a.jsx("span",{children:((v=(p=c==null?void 0:c.name)==null?void 0:p[0])==null?void 0:v.toUpperCase())||((_=(S=f==null?void 0:f.username)==null?void 0:S[0])==null?void 0:_.toUpperCase())||"U"})}),a.jsx("button",{className:"mobile-logout-btn",onClick:m,title:"Sign Out",children:a.jsx(jm,{size:15})})]})]}),a.jsxs("aside",{className:"app-sidebar",children:[a.jsxs("div",{className:"sidebar-brand",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(bi,{size:20,strokeWidth:2.5})}),a.jsxs("div",{className:"sidebar-brand-text",children:[a.jsxs("span",{children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})," ",a.jsx("span",{className:"version-pill",children:"2.0"})]}),a.jsx("span",{className:"sidebar-brand-sub",children:"Project CINE-3D"})]})]}),a.jsxs("div",{className:"sidebar-search-action",onClick:t,children:[a.jsx(aa,{size:15,className:"text-cyan"}),a.jsx("span",{children:"Dimensional Search"}),a.jsx("kbd",{className:"sidebar-kbd",children:"/"})]}),a.jsxs("nav",{className:"sidebar-nav",children:[a.jsx("div",{className:"sidebar-nav-section-label",children:"EXPERIENCE"}),a.jsxs("button",{className:`sidebar-nav-item cine3d-nav-item ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(Vr,{size:18,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D Lobby"}),a.jsx("span",{className:"sidebar-badge-new",children:"3D"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(zm,{size:18}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(bi,{size:18}),a.jsx("span",{children:"Movie Library"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(ji,{size:18}),a.jsx("span",{children:"My List & Favorites"})]}),(f==null?void 0:f.role)==="admin"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SERVER & CONTROL"}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder-sharing"?"active":""}`,onClick:()=>e("folder-sharing"),children:[a.jsx(ic,{size:18}),a.jsx("span",{children:"Folder Sharing"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder"?"active":""}`,onClick:()=>e("folder"),children:[a.jsx(hs,{size:18}),a.jsx("span",{children:"Movie Folder"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="sharing"?"active":""}`,onClick:()=>e("sharing"),children:[a.jsx(bc,{size:18}),a.jsx("span",{children:"Sharing Hub"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[a.jsx(I_,{size:18}),a.jsx("span",{children:"Server Dashboard"})]})]}),a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SYSTEM & QUALITY"}),a.jsxs("button",{className:"sidebar-nav-item quality-nav-pill",onClick:l,children:[a.jsx(ex,{size:17,className:"text-cyan"}),a.jsxs("div",{style:{flex:1,textAlign:"left"},children:[a.jsx("div",{children:"Quality Manager"}),a.jsx("div",{className:"sidebar-quality-badge",children:d.toUpperCase()})]})]}),a.jsxs("button",{className:"sidebar-nav-item",onClick:r,children:[a.jsx(Gf,{size:17}),a.jsx("span",{children:"Switch Profile"})]})]}),a.jsx("div",{className:"sidebar-footer",children:a.jsxs("div",{className:"sidebar-user-pill",onClick:r,title:"Manage Profiles",children:[a.jsx("div",{className:"user-avatar-dot",style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},children:a.jsx("span",{children:((w=(y=c==null?void 0:c.name)==null?void 0:y[0])==null?void 0:w.toUpperCase())||((x=(T=f==null?void 0:f.username)==null?void 0:T[0])==null?void 0:x.toUpperCase())||"U"})}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{className:"sidebar-username",children:(c==null?void 0:c.name)||(f==null?void 0:f.username)}),a.jsx("div",{className:"sidebar-role",children:(f==null?void 0:f.role)==="admin"?"Host Administrator":"Viewer"})]}),a.jsx("button",{className:"sidebar-logout-btn",onClick:M=>{M.stopPropagation(),m()},title:"Sign Out",children:a.jsx(jm,{size:15})})]})})]}),a.jsxs("nav",{className:"app-mobile-bottom-nav",children:[a.jsxs("button",{className:`mobile-nav-btn ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(zm,{size:20}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`mobile-nav-btn cine3d-btn ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(Vr,{size:20,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(bi,{size:20}),a.jsx("span",{children:"Library"})]}),a.jsxs("button",{className:"mobile-nav-btn",onClick:t,children:[a.jsx(aa,{size:20}),a.jsx("span",{children:"Search"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(ji,{size:20}),a.jsx("span",{children:"My List"})]})]})]})}function fr(s){if(!s||s<=0)return"Unknown";const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function si(s){if(!s||s<=0)return"0 MB";const e=s/(1024*1024*1024);return e>=1?`${e.toFixed(2)} GB`:`${(s/(1024*1024)).toFixed(0)} MB`}function Or({movie:s,onSelect:e,onToggleFavorite:t,onPlay:r,onChangePoster:l,onRemoveMovie:c,onDeleteFile:d,viewMode:f="grid",isSelectMode:m=!1,isSelected:p=!1,onToggleSelect:v=null}){const S=K.useRef(null),_=K.useRef(null),[y,w]=K.useState(!1),[T,x]=K.useState(!1),[M,L]=K.useState({x:0,y:0}),[U,A]=K.useState(!1);K.useEffect(()=>{if(!T)return;const O=H=>{_.current&&!_.current.contains(H.target)&&x(!1)};return document.addEventListener("mousedown",O),()=>document.removeEventListener("mousedown",O)},[T]);const I=s.duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.duration*100)):s.watched_duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.watched_duration*100)):0,P=O=>{if(!S.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches||m)return;const H=S.current.getBoundingClientRect(),ee=(O.clientX-H.left)/H.width,z=((O.clientY-H.top)/H.height-.5)*-8,V=(ee-.5)*8;L({x:z,y:V})},E=()=>{w(!0)},D=()=>{w(!1),L({x:0,y:0})},J=O=>{m?v&&v(s.id):e&&e(s)};return f==="list"?a.jsxs("div",{className:`movie-list-item ${p?"selected":""}`,onClick:J,children:[m&&a.jsx("button",{className:"select-checkbox-btn",onClick:O=>{O.stopPropagation(),v&&v(s.id)},children:p?a.jsx(pc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"})}),a.jsxs("div",{className:"movie-list-thumb",children:[a.jsx("img",{src:fn(U?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,onError:()=>A(!0),loading:"lazy"}),!m&&r&&a.jsx("button",{className:"list-play-overlay",onClick:O=>{O.stopPropagation(),r(s)},title:"Play Movie",children:a.jsx(dn,{size:16,fill:"#ffffff"})})]}),a.jsxs("div",{className:"movie-list-info",children:[a.jsxs("div",{className:"movie-list-title-row",children:[a.jsx("h4",{className:"movie-list-title",title:s.clean_title,children:s.clean_title}),s.resolution&&a.jsx("span",{className:"badge-studio",children:s.resolution})]}),a.jsxs("div",{className:"movie-list-meta",children:[s.year&&a.jsx("span",{className:"meta-tag",children:s.year}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:12})," ",fr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Vi,{size:12})," ",si(s.file_size)]}),s.codec&&a.jsx("span",{className:"meta-tag",children:s.codec})]})]}),a.jsxs("div",{className:"movie-list-actions",children:[t&&a.jsx("button",{className:`fav-btn-clean ${s.is_favorite?"active":""}`,onClick:O=>{O.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(ji,{size:16,fill:s.is_favorite?"currentColor":"none"})}),!m&&r&&a.jsxs("button",{className:"btn-primary-sm",onClick:O=>{O.stopPropagation(),r(s)},children:[a.jsx(dn,{size:13,fill:"#ffffff"}),a.jsx("span",{children:"Watch"})]}),a.jsxs("div",{className:"card-menu-container",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:O=>{O.stopPropagation(),x(!T)},title:"Movie options",children:a.jsx(km,{size:16})}),T&&a.jsxs("div",{className:"card-menu-dropdown",onClick:O=>O.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(dn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(ji,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(hc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Fr,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Wr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]})]})]}):a.jsxs("div",{ref:S,className:`movie-card-3d ${y?"hovered":""} ${p?"selected":""}`,onMouseMove:P,onMouseEnter:E,onMouseLeave:D,onClick:J,style:{transform:y&&!m?`perspective(800px) rotateX(${M.x}deg) rotateY(${M.y}deg) translateY(-5px)`:"perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:fn(U?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,className:"poster-img-3d",onError:()=>A(!0),loading:"lazy"}),a.jsx("div",{className:"poster-vignette"}),m?a.jsx("div",{className:"select-checkbox-overlay",onClick:O=>{O.stopPropagation(),v&&v(s.id)},children:p?a.jsx(pc,{size:22,className:"checkbox-icon checked"}):a.jsx(ca,{size:22,className:"checkbox-icon"})}):a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("button",{className:"play-circle-3d",onClick:O=>{r&&(O.stopPropagation(),r(s))},title:"Play Movie",children:a.jsx(dn,{size:22,fill:"#ffffff",strokeWidth:0})})}),s.resolution&&a.jsx("span",{className:"badge-studio badge-top-left",children:s.resolution}),s.year&&a.jsx("span",{className:"badge-studio badge-top-right",children:s.year}),!m&&a.jsxs("div",{className:"card-menu-container top-right-ctrl",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:O=>{O.stopPropagation(),x(!T)},title:"Movie options",children:a.jsx(km,{size:16})}),T&&a.jsxs("div",{className:"card-menu-dropdown",onClick:O=>O.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(dn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(ji,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(hc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Fr,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Wr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]}),!m&&t&&a.jsx("button",{className:`fav-btn-3d ${s.is_favorite?"active":""}`,onClick:O=>{O.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(ji,{size:14,fill:s.is_favorite?"currentColor":"none"})}),I>0&&a.jsx("div",{className:"progress-bar-container-3d",children:a.jsx("div",{className:"progress-bar-fill-3d",style:{width:`${I}%`}})})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:s.clean_title,children:s.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11}),fr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Vi,{size:11}),si(s.file_size)]})]})]})]})}function Ry({movie:s,onPlay:e,onDetails:t,onEnterCine3D:r,onToggleFavorite:l,isFavorite:c}){const d=K.useRef(null),[f,m]=K.useState({x:0,y:0});if(!s)return null;const p=S=>{if(!d.current||!window.matchMedia("(pointer: fine)").matches)return;const _=d.current.getBoundingClientRect(),y=((S.clientX-_.left)/_.width-.5)*2,w=((S.clientY-_.top)/_.height-.5)*2;m({x:y*12,y:w*8})},v=()=>{m({x:0,y:0})};return a.jsxs("div",{ref:d,className:"hero-section-3d",onMouseMove:p,onMouseLeave:v,children:[a.jsxs("div",{className:"hero-backdrop-layer",style:{transform:`translate3d(${f.x*-1}px, ${f.y*-1}px, 0) scale(1.05)`},children:[a.jsx("img",{src:fn(`/api/movies/${s.id}/backdrop`),alt:s.clean_title,className:"hero-bg-image"}),a.jsx("div",{className:"hero-gradient-overlay"})]}),a.jsx("div",{className:"hero-accent-light",style:{transform:`translate3d(${f.x*1.5}px, ${f.y*1.5}px, 0)`}}),a.jsxs("div",{className:"hero-content-layer",style:{transform:`translate3d(${f.x*.5}px, ${f.y*.5}px, 0)`},children:[a.jsxs("div",{className:"hero-badge-row",children:[a.jsxs("span",{className:"hero-badge-pill",children:[a.jsx(Vr,{size:13,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"FEATURED CINEMA STREAM"})]}),s.resolution&&a.jsxs("span",{className:"hero-badge-quality",children:[s.resolution," ULTRA HD"]}),s.genre&&a.jsx("span",{className:"hero-badge-genre",children:s.genre}),s.year&&a.jsx("span",{className:"hero-badge-year",children:s.year}),s.duration>0&&a.jsxs("span",{className:"hero-badge-duration",children:[a.jsx(Gr,{size:12}),fr(s.duration)]})]}),a.jsx("h1",{className:"hero-title",children:s.clean_title}),a.jsx("p",{className:"hero-description",children:s.description||"Direct high-bitrate streaming from your host Windows workstation. Multi-channel audio, dynamic range seeking, and zero cloud compression."}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsxs("button",{className:"hero-btn-play",onClick:()=>e(s),children:[a.jsx(dn,{size:18,fill:"#ffffff"}),a.jsx("span",{children:"Watch Now"})]}),r&&a.jsxs("button",{className:"hero-btn-cine3d",onClick:r,children:[a.jsx(Vr,{size:16,className:"text-cyan"}),a.jsx("span",{children:"Enter in CINE-3D"})]}),a.jsxs("button",{className:"hero-btn-details",onClick:()=>t(s),children:[a.jsx(fo,{size:18}),a.jsx("span",{children:"More Details"})]})]})]})]})}function Py({onSelectMovie:s,onPlayMovie:e,authFetch:t,onNavigateLibrary:r,onOpenFolderPicker:l,onNavigateCine3D:c}){const[d,f]=K.useState({featured:null,continueWatching:[],recentlyAdded:[],popular:[],favorites:[],genreCollections:[]}),[m,p]=K.useState([]),[v,S]=K.useState(!0),_=()=>{S(!0),Promise.all([t("/api/movies/sections/home").then(T=>T.json()),t("/api/user/recommendations").then(T=>T.json()).catch(()=>({recommendations:[]}))]).then(([T,x])=>{f({featured:T.featured||null,continueWatching:T.continueWatching||[],recentlyAdded:T.recentlyAdded||[],popular:T.popular||[],favorites:T.favorites||[],genreCollections:T.genreCollections||[]}),p(x.recommendations||[])}).catch(()=>{}).finally(()=>S(!1))};K.useEffect(()=>{_()},[]);const y=async T=>{try{const M=await(await t(`/api/user/favorites/${T}`,{method:"POST"})).json();f(L=>({...L,recentlyAdded:L.recentlyAdded.map(U=>U.id===T?{...U,is_favorite:M.favorited?1:0}:U),popular:L.popular.map(U=>U.id===T?{...U,is_favorite:M.favorited?1:0}:U),favorites:M.favorited?[...L.favorites,L.recentlyAdded.find(U=>U.id===T)||{id:T,is_favorite:1}]:L.favorites.filter(U=>U.id!==T)}))}catch{}};return v?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading StreamLink 2.0 Cinema..."})]}):d.featured||d.recentlyAdded.length>0?a.jsxs("div",{className:"home-page-container",children:[d.featured&&a.jsx(Ry,{movie:d.featured,onPlay:e,onDetails:s,onEnterCine3D:c}),c&&a.jsxs("div",{className:"cine3d-invitation-strip",onClick:c,children:[a.jsxs("div",{className:"strip-left",children:[a.jsxs("div",{className:"strip-sparkle-pill",children:[a.jsx(Vr,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"SPATIAL WEBGL CINEMA"})]}),a.jsx("h3",{children:"Explore in CINE-3D Spatial Lobby"}),a.jsx("p",{children:"Step inside an interactive 3D curved cinema carousel with dynamic lighting and spatial controls."})]}),a.jsxs("button",{className:"btn-primary btn-sm",children:[a.jsx("span",{children:"Enter CINE-3D"}),a.jsx(co,{size:14})]})]}),d.continueWatching.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Gr,{size:19,color:"#8B5CF6"}),a.jsx("span",{children:"Continue Watching"})]})}),a.jsx("div",{className:"continue-watching-grid",children:d.continueWatching.map(T=>{const x=T.duration>0?Math.min(100,Math.round(T.progress_seconds/T.duration*100)):50;return a.jsxs("div",{className:"continue-card-3d",onClick:()=>e(T),children:[a.jsxs("div",{className:"continue-poster-thumb",children:[a.jsx("img",{src:fn(`/api/movies/${T.id}/poster`),alt:T.clean_title}),a.jsx("div",{className:"continue-play-overlay",children:a.jsx(dn,{size:20,fill:"#ffffff"})})]}),a.jsxs("div",{className:"continue-info",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"continue-title",title:T.clean_title,children:T.clean_title}),a.jsxs("div",{className:"continue-time",children:[fr(T.progress_seconds)," of ",fr(T.duration)," (",x,"%)"]})]}),a.jsx("div",{className:"continue-bar-track",children:a.jsx("div",{className:"continue-bar-fill",style:{width:`${x}%`}})})]})]},T.id)})})]}),m.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(u_,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recommended For You"})]})}),a.jsx("div",{className:"movie-grid-3d",children:m.slice(0,6).map(T=>a.jsx(Or,{movie:T,onSelect:s,onPlay:e,onToggleFavorite:y},T.id))})]}),d.recentlyAdded.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-title",children:[a.jsx(Vr,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recently Added"})]}),r&&a.jsxs("button",{className:"section-see-all-btn",onClick:r,children:[a.jsx("span",{children:"View Full Library"}),a.jsx(co,{size:14})]})]}),a.jsx("div",{className:"movie-grid-3d",children:d.recentlyAdded.map(T=>a.jsx(Or,{movie:T,onSelect:s,onPlay:e,onToggleFavorite:y},T.id))})]}),d.genreCollections.map(({genre:T,movies:x})=>a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Jg,{size:19,color:"#A855F7"}),a.jsx("span",{children:T})]})}),a.jsx("div",{className:"movie-grid-3d",children:x.slice(0,6).map(M=>a.jsx(Or,{movie:M,onSelect:s,onPlay:e,onToggleFavorite:y},M.id))})]},T)),d.popular.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(hy,{size:19,color:"#22C55E"}),a.jsx("span",{children:"Popular & Most Watched"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.popular.map(T=>a.jsx(Or,{movie:T,onSelect:s,onPlay:e,onToggleFavorite:y},T.id))})]}),d.favorites.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(ji,{size:19,color:"#EF4444",fill:"#EF4444"}),a.jsx("span",{children:"Your Favorites"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.favorites.map(T=>a.jsx(Or,{movie:T,onSelect:s,onPlay:e,onToggleFavorite:y},T.id))})]})]}):a.jsxs("div",{className:"empty-state-3d",style:{marginTop:"60px"},children:[a.jsx(bi,{size:48,className:"text-dim",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"Your Cinema Library is Empty"}),a.jsx("p",{children:"Connect and scan a movie folder on your host Windows PC to populate your personal streaming theater."}),l&&a.jsxs("button",{className:"btn-primary",onClick:l,children:[a.jsx(Qg,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]})}function Ly({onSelectMovie:s,onPlayMovie:e,authFetch:t,onOpenFolderPicker:r,onNavigateCine3D:l}){const[c,d]=K.useState([]),[f,m]=K.useState(""),[p,v]=K.useState(""),[S,_]=K.useState(""),[y,w]=K.useState(""),[T,x]=K.useState("all"),[M,L]=K.useState("recent"),[U,A]=K.useState("grid"),[I,P]=K.useState(!0),[E,D]=K.useState(!1),[J,O]=K.useState(!1),[H,ee]=K.useState([]),[re,z]=K.useState(null),[V,ne]=K.useState(null),[F,$]=K.useState(!1),[W,Q]=K.useState(null),[k,Z]=K.useState(""),[we,G]=K.useState(!1),[le,Me]=K.useState(null),Ee=(be,Ye="success")=>{Me({text:be,type:Ye}),setTimeout(()=>{Me(null)},4500)},Se=()=>{P(!0);let be=`/api/movies?sort=${M}`;f.trim()&&(be+=`&q=${encodeURIComponent(f.trim())}`),p&&(be+=`&resolution=${encodeURIComponent(p)}`),S&&(be+=`&year=${encodeURIComponent(S)}`),y&&(be+=`&genre=${encodeURIComponent(y)}`),t(be).then(Ye=>Ye.json()).then(Ye=>{Ye.movies&&d(Ye.movies)}).catch(()=>{}).finally(()=>P(!1))};K.useEffect(()=>{Se()},[f,p,S,y,M]);const ve=async()=>{D(!0);try{const Ye=await(await t("/api/admin/scan",{method:"POST"})).json();await Se(),Ee(Ye.message||"Library rescan complete!","success")}catch{Ee("Error during library scan","error")}D(!1)},Qe=async be=>{try{const X=await(await t(`/api/user/favorites/${be}`,{method:"POST"})).json();d(Ut=>Ut.map(Nt=>Nt.id===be?{...Nt,is_favorite:X.favorited?1:0}:Nt))}catch{}},Fe=c.filter(be=>T==="watched"?be.progress_seconds&&be.duration&&be.progress_seconds/be.duration>=.9||be.completed===1:T==="unwatched"?!be.progress_seconds||be.progress_seconds<15:!0),vt=Array.from(new Set(c.map(be=>be.year).filter(Boolean))).sort().reverse(),mt=Fe.reduce((be,Ye)=>be+(Ye.file_size||0),0),lt=!!(f||p||S||T!=="all"),bt=()=>{m(""),v(""),_(""),x("all")},ct=be=>{ee(Ye=>Ye.includes(be)?Ye.filter(X=>X!==be):[...Ye,be])},_t=()=>{H.length===Fe.length?ee([]):ee(Fe.map(be=>be.id))},ye=async()=>{if(re){try{const be=await t(`/api/movies/${re.id}/remove`,{method:"POST"}),Ye=await be.json();be.ok?(d(X=>X.filter(Ut=>Ut.id!==re.id)),ee(X=>X.filter(Ut=>Ut!==re.id)),Ee(`"${re.clean_title}" removed from library (file preserved on PC)`,"success")):Ee(Ye.error||"Failed to remove movie","error")}catch{Ee("Network error removing movie","error")}z(null)}},He=async()=>{if(V){try{const be=await t(`/api/movies/${V.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:V.clean_title})}),Ye=await be.json();be.ok?(d(X=>X.filter(Ut=>Ut.id!==V.id)),ee(X=>X.filter(Ut=>Ut!==V.id)),Ee(`Permanently deleted "${V.clean_title}" from disk`,"warn")):Ee(Ye.error||"Failed to delete movie file","error")}catch{Ee("Network error during file deletion","error")}ne(null)}},Ge=async()=>{if(H.length!==0){try{const be=await t("/api/movies/bulk/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieIds:H})}),Ye=await be.json();be.ok?(d(X=>X.filter(Ut=>!H.includes(Ut.id))),Ee(`Removed ${Ye.removedCount} movies from library (files preserved)`,"success"),ee([]),O(!1)):Ee(Ye.error||"Failed to bulk remove movies","error")}catch{Ee("Network error during bulk removal","error")}$(!1)}},Tt=async be=>{if(be.preventDefault(),!(!W||!k.trim())){G(!0);try{const Ye=await t(`/api/movies/${W.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:k.trim()})}),X=await Ye.json();Ye.ok?(Ee("Poster updated successfully!","success"),Q(null),Z(""),Se()):Ee(X.error||"Failed to update poster","error")}catch{Ee("Network error saving poster","error")}finally{G(!1)}}};return a.jsxs("div",{className:"library-page-3d",children:[le&&a.jsxs("div",{className:`app-toast-banner ${le.type}`,children:[le.type==="success"&&a.jsx(o_,{size:16}),le.type==="warn"&&a.jsx(mc,{size:16}),le.type==="error"&&a.jsx(uo,{size:16}),a.jsx("span",{children:le.text})]}),a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{className:"page-header-info",children:[a.jsx("h1",{className:"page-header-title",children:"Movie Library"}),a.jsxs("p",{className:"page-header-subtitle",children:[Fe.length," movies available • Total size: ",si(mt)]})]}),a.jsxs("div",{className:"page-header-actions",children:[l&&a.jsxs("button",{className:"btn-primary",onClick:l,title:"Enter CINE-3D spatial cinema carousel",children:[a.jsx(Vr,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"Launch CINE-3D"})]}),a.jsxs("button",{className:`btn-secondary ${J?"active":""}`,onClick:()=>{O(!J),J&&ee([])},title:J?"Cancel Selection":"Manage Multiple Movies",children:[a.jsx(pc,{size:15}),a.jsx("span",{children:J?"Cancel":"Manage"})]}),a.jsxs("div",{className:"view-mode-toggle",children:[a.jsx("button",{className:`view-toggle-btn ${U==="grid"?"active":""}`,onClick:()=>A("grid"),title:"Grid View",children:a.jsx(k_,{size:16})}),a.jsx("button",{className:`view-toggle-btn ${U==="list"?"active":""}`,onClick:()=>A("list"),title:"List View",children:a.jsx(O_,{size:16})})]}),a.jsxs("button",{className:`btn-secondary ${E?"rescan-spinning":""}`,onClick:ve,disabled:E,title:"Scan movie folder for newly added or changed video files",children:[a.jsx(Hr,{size:15}),a.jsx("span",{children:E?"Scanning...":"Rescan Library"})]})]})]}),J&&a.jsxs("div",{className:"multi-select-toolbar",children:[a.jsxs("div",{className:"select-toolbar-left",children:[a.jsxs("button",{className:"select-all-btn",onClick:_t,children:[H.length===Fe.length&&Fe.length>0?a.jsx(pc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"}),a.jsxs("span",{children:["Select All Visible (",Fe.length,")"]})]}),a.jsxs("span",{className:"selected-count-badge",children:[H.length," movie",H.length!==1?"s":""," selected"]})]}),a.jsxs("div",{className:"select-toolbar-right",children:[a.jsxs("button",{className:"btn-danger-sm",disabled:H.length===0,onClick:()=>$(!0),children:[a.jsx(Fr,{size:14}),a.jsxs("span",{children:["Remove Selected (",H.length,")"]})]}),a.jsx("button",{className:"btn-secondary-sm",onClick:()=>{O(!1),ee([])},children:a.jsx("span",{children:"Done"})})]})]}),a.jsxs("div",{className:"library-toolbar",children:[a.jsxs("div",{className:"toolbar-search-box",children:[a.jsx(aa,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Search movie title...",value:f,onChange:be=>m(be.target.value)}),f&&a.jsx("button",{className:"search-clear-btn",onClick:()=>m(""),title:"Clear search",children:a.jsx(lr,{size:14})})]}),a.jsxs("div",{className:"toolbar-filters-group",children:[a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:y,onChange:be=>w(be.target.value),children:[a.jsx("option",{value:"",children:"All Genres"}),a.jsx("option",{value:"Action & Adventure",children:"Action & Adventure"}),a.jsx("option",{value:"Anime & Animation",children:"Anime & Animation"}),a.jsx("option",{value:"Horror & Suspense",children:"Horror & Suspense"}),a.jsx("option",{value:"Sci-Fi & Cyber",children:"Sci-Fi & Cyber"}),a.jsx("option",{value:"Thriller & Mystery",children:"Thriller & Mystery"}),a.jsx("option",{value:"Comedy",children:"Comedy"}),a.jsx("option",{value:"Cinema & Drama",children:"Cinema & Drama"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:p,onChange:be=>v(be.target.value),children:[a.jsx("option",{value:"",children:"All Resolutions"}),a.jsx("option",{value:"4K",children:"4K Ultra HD"}),a.jsx("option",{value:"1080P",children:"1080p Full HD"}),a.jsx("option",{value:"720P",children:"720p HD"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:S,onChange:be=>_(be.target.value),children:[a.jsx("option",{value:"",children:"All Years"}),vt.map(be=>a.jsx("option",{value:be,children:be},be))]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:T,onChange:be=>x(be.target.value),children:[a.jsx("option",{value:"all",children:"All Status"}),a.jsx("option",{value:"unwatched",children:"Unwatched"}),a.jsx("option",{value:"watched",children:"Watched"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:M,onChange:be=>L(be.target.value),children:[a.jsx("option",{value:"recent",children:"Recently Added"}),a.jsx("option",{value:"title",children:"Title (A-Z)"}),a.jsx("option",{value:"year",children:"Release Year"}),a.jsx("option",{value:"size",children:"Largest File Size"}),a.jsx("option",{value:"duration",children:"Longest Duration"})]})}),lt&&a.jsxs("button",{className:"btn-clear-filters",onClick:bt,title:"Reset all search and filters",children:[a.jsx(lr,{size:13}),a.jsx("span",{children:"Clear Filters"})]})]})]}),I?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning & loading movies..."})]}):Fe.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(bi,{size:48,color:"var(--text-dim)",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"No Movies Found"}),a.jsx("p",{children:lt?"No movies match your active search or filter criteria. Try clearing filters to see all available movies.":"You have not scanned a movie folder yet. Select a folder on your Windows PC to automatically populate your library."}),lt?a.jsxs("button",{className:"btn-secondary",onClick:bt,children:[a.jsx(lr,{size:15}),a.jsx("span",{children:"Clear Active Filters"})]}):r&&a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx(Qg,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]}):U==="list"?a.jsx("div",{className:"movie-list-container",children:Fe.map(be=>a.jsx(Or,{movie:be,onSelect:s,onPlay:e,onToggleFavorite:Qe,onChangePoster:Ye=>{Q(Ye),Z("")},onRemoveMovie:Ye=>z(Ye),onDeleteFile:Ye=>ne(Ye),viewMode:"list",isSelectMode:J,isSelected:H.includes(be.id),onToggleSelect:ct},be.id))}):a.jsx("div",{className:"movie-grid-3d",children:Fe.map(be=>a.jsx(Or,{movie:be,onSelect:s,onPlay:e,onToggleFavorite:Qe,onChangePoster:Ye=>{Q(Ye),Z("")},onRemoveMovie:Ye=>z(Ye),onDeleteFile:Ye=>ne(Ye),viewMode:"grid",isSelectMode:J,isSelected:H.includes(be.id),onToggleSelect:ct},be.id))}),re&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>z(null),children:a.jsxs("div",{className:"dialog-card",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Fr,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Remove from Library?"}),a.jsx("span",{className:"dialog-subtitle",children:re.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["This movie will be removed from your StreamLink library, but your ",a.jsx("strong",{children:"original video file will remain safe and untouched on your computer"}),"."]}),a.jsx("div",{className:"dialog-detail-box",children:a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Location:"}),a.jsx("code",{title:re.file_path,children:re.file_path})]})}),a.jsx("p",{className:"dialog-note",children:"StreamLink will remember this choice so the movie will not reappear when you rescan your library."})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>z(null),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:ye,children:[a.jsx(Fr,{size:15}),a.jsx("span",{children:"Remove from Library"})]})]})]})}),V&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>ne(null),children:a.jsxs("div",{className:"dialog-card card-danger-border",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-danger",children:a.jsx(mc,{size:24})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title text-danger",children:"Permanently Delete Video File?"}),a.jsx("span",{className:"dialog-subtitle",children:V.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("div",{className:"danger-alert-box",children:[a.jsx("strong",{children:"WARNING: This action is permanent and cannot be undone!"}),a.jsx("p",{children:"The video file will be permanently deleted from your Windows hard drive."})]}),a.jsxs("div",{className:"dialog-detail-box",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Name:"}),a.jsx("code",{children:V.file_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Path:"}),a.jsx("code",{title:V.file_path,children:V.file_path})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Size:"}),a.jsx("code",{children:si(V.file_size)})]})]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>ne(null),children:"Cancel"}),a.jsxs("button",{className:"btn-danger",onClick:He,children:[a.jsx(Wr,{size:15}),a.jsx("span",{children:"Permanently Delete File"})]})]})]})}),F&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>$(!1),children:a.jsxs("div",{className:"dialog-card",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Fr,{size:22})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"dialog-title",children:["Remove ",H.length," Movies from Library?"]}),a.jsx("span",{className:"dialog-subtitle",children:"Original files remain untouched on computer"})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["All ",a.jsxs("strong",{children:[H.length," selected movies"]})," will be removed from your active StreamLink library."]}),a.jsxs("p",{className:"dialog-note",children:["Your original video files on your hard drive will ",a.jsx("strong",{children:"not"})," be deleted. StreamLink will keep them hidden so they will not reappear upon rescan."]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>$(!1),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Ge,children:[a.jsx(Fr,{size:15}),a.jsxs("span",{children:["Remove ",H.length," Movies"]})]})]})]})}),W&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>Q(null),children:a.jsxs("div",{className:"dialog-card",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-accent",children:a.jsx(hc,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Change Movie Poster"}),a.jsx("span",{className:"dialog-subtitle",children:W.clean_title})]})]}),a.jsxs("form",{onSubmit:Tt,children:[a.jsxs("div",{className:"dialog-body",children:[a.jsx("p",{children:"Enter an image URL or a local image path on your PC (e.g. D:\\Posters\\cover.jpg):"}),a.jsx("input",{type:"text",className:"dialog-input",placeholder:"https://image.tmdb.org/... or C:\\path\\poster.jpg",value:k,onChange:be=>Z(be.target.value),autoFocus:!0,required:!0})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>Q(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:we,children:we?"Downloading & Saving...":"Update Poster"})]})]})]})})]})}function Dy({authFetch:s}){var bt,ct,_t;const[e,t]=K.useState("D:\\Movies"),[r,l]=K.useState("Movies"),[c,d]=K.useState(""),[f,m]=K.useState(""),[p,v]=K.useState(!1),[S,_]=K.useState(!1),[y,w]=K.useState(null),[T,x]=K.useState(""),[M,L]=K.useState([]),[U,A]=K.useState(!0),[I,P]=K.useState(null),[E,D]=K.useState(!1),[J,O]=K.useState(null),[H,ee]=K.useState(!1),[re,z]=K.useState(null),[V,ne]=K.useState([]),[F,$]=K.useState(null),[W,Q]=K.useState(!1),k=async()=>{try{const He=await(await s("/api/admin/drives")).json();He.drives&&ne(He.drives)}catch{}},Z=async ye=>{try{const He=await s(`/api/admin/browse-directory?path=${encodeURIComponent(ye)}`),Ge=await He.json();if(He.ok){$(Ge),t(Ge.currentPath);const Tt=Ge.currentPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Tt)}}catch{}},we=async()=>{try{A(!0);const He=await(await s("/api/share/folder/links")).json();He.links&&L(He.links)}catch{}finally{A(!1)}},G=async()=>{try{const He=await(await s("/api/share/info")).json();P(He)}catch{}};K.useEffect(()=>{we(),G(),k();const ye=setInterval(G,4e3);return()=>clearInterval(ye)},[]);const le=async()=>{_(!0),x("Opening Windows Folder Dialog on your host PC screen...");try{const He=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();if(He.selectedPath){t(He.selectedPath);const Ge=He.selectedPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Ge),x(`Selected folder: ${He.selectedPath}`),await Me(He.selectedPath)}else x("Folder selection was cancelled.")}catch(ye){x(`Error opening Windows dialog: ${ye.message}`)}finally{_(!1)}},Me=async(ye=e)=>{if(ye){v(!0),x(`Scanning "${ye}" for video files and movie metadata...`),w(null),z(null);try{const He=await s("/api/share/folder/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:ye})}),Ge=await He.json();if(!He.ok)throw new Error(Ge.error||"Scan failed");w(Ge),l(Ge.folderName),x(`Scan complete! Detected ${Ge.movieCount} movies in "${Ge.folderName}".`)}catch(He){x(`Scan error: ${He.message}`)}finally{v(!1)}}},Ee=async ye=>{if(ye&&ye.preventDefault(),!e){alert("Please select a folder first");return}ee(!0),x(`Registering folder "${r}" as a shared streaming resource...`);try{const He=await s("/api/share/folder/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:e,folderName:r,label:c.trim()||`${r} Movies`,passcode:f.trim()})}),Ge=await He.json();if(!He.ok)throw new Error(Ge.error||"Failed to create share link");z(Ge.link),x(`Success! Sharing link generated for "${r}".`),d(""),m(""),await we()}catch(He){x(`Error generating link: ${He.message}`)}finally{ee(!1)}},Se=async ye=>{try{const He=await s(`/api/share/folder/toggle/${ye}`,{method:"POST"}),Ge=await He.json();if(!He.ok)throw new Error(Ge.error);await we()}catch(He){alert(He.message)}},ve=async(ye,He)=>{if(window.confirm(`Delete sharing link for folder "${He}"? Viewers will immediately lose access.`))try{const Ge=await s(`/api/share/folder/${ye}`,{method:"DELETE"}),Tt=await Ge.json();if(!Ge.ok)throw new Error(Tt.error);await we(),(re==null?void 0:re.id)===ye&&z(null)}catch(Ge){alert(Ge.message)}},Qe=async ye=>{try{x("Rescanning shared folder on disk...");const He=await s(`/api/share/folder/rescan/${ye}`,{method:"POST"}),Ge=await He.json();if(!He.ok)throw new Error(Ge.error);x(Ge.message),await we()}catch(He){alert(He.message)}},Fe=async ye=>{D(!0),x(`${ye==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const He=await s(`/api/admin/tunnel/${ye}`,{method:"POST"}),Ge=await He.json();if(!He.ok)throw new Error(Ge.error||"Tunnel command failed");x(Ge.message),await G(),await we()}catch(He){x(`Tunnel error: ${He.message}`)}finally{D(!1)}},vt=(ye,He)=>{ye&&navigator.clipboard.writeText(ye).then(()=>{O(He),setTimeout(()=>O(null),2500)})},mt=((bt=I==null?void 0:I.remote)==null?void 0:bt.status)==="connected",lt=((ct=I==null?void 0:I.remote)==null?void 0:ct.status)==="starting";return a.jsxs("div",{style:{padding:"0 0 60px"},children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(ic,{size:28,color:"var(--accent)"}),"Folder Sharing"]})}),a.jsx("p",{className:"page-sub-title",children:"Select any local movie folder on your Windows PC and generate a unique, secure streaming link. Viewers only see and stream movies inside the exact folder you choose."})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{className:`status-pill ${mt?"status-pill-green":lt?"status-pill-yellow":"status-pill-red"}`,children:mt?"REMOTE TUNNEL ONLINE":lt?"CONNECTING...":"LOCAL WI-FI ONLY"}),mt?a.jsxs("button",{className:"btn-danger",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>Fe("stop"),disabled:E,title:"Stop Cloudflare Tunnel",children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Stop Tunnel"})]}):a.jsxs("button",{className:"btn-primary",style:{padding:"8px 14px",fontSize:"13px",background:"var(--success)"},onClick:()=>Fe("start"),disabled:E||lt,title:"Start Cloudflare Tunnel to enable streaming outside home Wi-Fi",children:[a.jsx(dn,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Go Worldwide"})]})]})]}),T&&a.jsx("div",{className:"folder-status-box",style:{margin:"0 32px 20px"},children:T}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:30,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"11px",color:"var(--text-dim)",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"SELECTED FOLDER TO SHARE"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"var(--text-primary)",marginTop:"2px"},children:r}),a.jsx("div",{className:"folder-path-display",title:e,style:{marginTop:"4px"},children:e})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 22px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:le,disabled:S||p,children:[a.jsx(Bf,{size:17}),a.jsx("span",{children:"Select Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Q(!W),children:[a.jsx(Vi,{size:16}),a.jsx("span",{children:W?"Hide Browser":"Browse Drives"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Me(e),disabled:p||S,children:[a.jsx(Hr,{size:16,className:p?"spin":""}),a.jsx("span",{children:p?"Scanning...":"Scan Folder"})]})]})]}),W&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"10px",fontWeight:600},children:"Select Windows Drive Letter or Navigate Subdirectories:"}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:V.map(ye=>a.jsxs("button",{className:`drive-pill ${e.startsWith(ye)?"active":""}`,onClick:()=>Z(ye),children:[a.jsx(Vi,{size:13}),a.jsx("span",{children:ye})]},ye))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[a.jsx("input",{type:"text",value:e,onChange:ye=>{t(ye.target.value);const He=ye.target.value.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(He)},placeholder:"Type full folder path (e.g. D:\\Movies\\Action)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>Z(e),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>Me(e),disabled:p,children:"Scan"})]}),F&&a.jsxs("div",{className:"folder-list-container",children:[F.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>Z(F.parentPath),children:[a.jsx(hs,{size:15,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(_t=F.folders)==null?void 0:_t.map(ye=>a.jsxs("div",{className:"folder-list-item",onClick:()=>Z(ye.path),children:[a.jsx(hs,{size:15,color:"#fbbf24"}),a.jsx("span",{children:ye.name})]},ye.path))]})]}),y&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Wd,{size:18,color:"var(--success)"}),a.jsxs("span",{style:{fontWeight:700,fontSize:"15px"},children:[y.movieCount,' Movies Found in "',y.folderName,'"']}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["(",si(y.totalBytes),")"]})]}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:["Location: ",y.folderPath]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxHeight:"140px",overflowY:"auto",padding:"4px 0"},children:y.movies.map(ye=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--bg-card)",padding:"6px 12px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)",fontSize:"12px"},children:[a.jsx(bi,{size:13,color:"var(--info)"}),a.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)"},children:ye.clean_title}),ye.resolution&&a.jsx("span",{style:{color:"var(--info)",fontSize:"10px",fontWeight:700},children:ye.resolution}),a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"11px"},children:si(ye.file_size)})]},ye.id))})]}),a.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"18px"},children:[a.jsx("div",{style:{fontSize:"15px",fontWeight:800,marginBottom:"6px"},children:"Generate Secure Sharing Link"}),a.jsxs("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"16px"},children:['Creates a unique web access link restricted exclusively to movies in "',r,'". Viewers cannot view any other folders, files, or settings on your PC.']}),a.jsxs("form",{onSubmit:Ee,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Link Name / Label:"}),a.jsx("input",{type:"text",value:c,onChange:ye=>d(ye.target.value),placeholder:`e.g. ${r} Movies`,style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",value:f,onChange:ye=>m(ye.target.value),placeholder:"e.g. 1234 (leave blank for open access)",style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",height:"42px",padding:"10px 20px",fontSize:"14px",gap:"8px"},disabled:H||!e,children:[a.jsx(Hf,{size:16}),a.jsx("span",{children:H?"Creating...":"Generate Sharing Link"})]})})]})]})]}),re&&a.jsxs("div",{style:{margin:"0 32px 28px",background:"linear-gradient(135deg, rgba(139,124,255,0.12) 0%, rgba(56,189,248,0.06) 100%)",border:"1px solid rgba(139,124,255,0.35)",borderRadius:"var(--radius-lg)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Wd,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800},children:"New Sharing Link Live!"}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["Sharing ",re.movie_count," movies from folder: ",a.jsx("strong",{children:re.folder_name})]})]})]}),a.jsx("span",{className:"status-pill status-pill-green",children:"ACTIVE & READY"})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"260px"},children:[a.jsx("span",{className:"link-text-mono",children:re.activeUrl}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>vt(re.activeUrl,"new_created"),children:[J==="new_created"?a.jsx(Cn,{size:14,color:"var(--success)"}):a.jsx(sa,{size:14}),a.jsx("span",{children:J==="new_created"?"Copied":"Copy Link"})]})]}),a.jsxs("a",{href:re.activeUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 16px",fontSize:"13px"},children:[a.jsx(Fm,{size:15}),a.jsx("span",{children:"Open Sharing Page"})]})]}),re.qrCode&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"16px",padding:"12px 16px",background:"var(--bg-secondary)",borderRadius:"var(--radius-sm)"},children:[a.jsx("img",{src:re.qrCode,alt:"QR Code",style:{width:"80px",height:"80px",borderRadius:"6px",background:"#fff",padding:"4px"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",fontWeight:700},children:"Scan with Phone Camera"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginTop:"2px"},children:"Anyone who scans this code can immediately stream movies from this folder on their phone."})]})]})]}),a.jsxs("div",{style:{margin:"0 32px"},children:[a.jsxs("div",{className:"section-header",style:{padding:"0 0 16px 0"},children:[a.jsxs("div",{className:"section-title",children:[a.jsx(ic,{size:20,color:"var(--primary)"}),a.jsxs("span",{children:["Active Shared Folders (",M.length,")"]})]}),a.jsxs("button",{className:"btn-secondary",onClick:we,title:"Refresh Shares",children:[a.jsx(Hr,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),U?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading shared folders..."})]}):M.length===0?a.jsxs("div",{className:"empty-state-3d",style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[a.jsx(ic,{size:44,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Folders Shared Yet"}),a.jsx("p",{children:'Select a movie folder above (e.g. D:\\Movies) and click "Generate Sharing Link" to create your first independent folder share link.'})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:M.map(ye=>{const He=ye.activeUrl,Ge=ye.is_active===1;return a.jsxs("div",{style:{background:"var(--bg-card)",border:`1px solid ${Ge?"var(--border)":"rgba(239,68,68,0.2)"}`,borderRadius:"var(--radius-lg)",padding:"20px",display:"flex",flexDirection:"column",gap:"14px",opacity:Ge?1:.75,transition:"border-color var(--transition)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",background:Ge?"rgba(139,124,255,0.15)":"rgba(255,255,255,0.05)",border:Ge?"1px solid rgba(139,124,255,0.3)":"1px solid var(--border)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:Ge?"var(--accent)":"var(--text-dim)",flexShrink:0},children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:800,color:"var(--text-primary)"},children:ye.label||ye.folder_name}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--info)",fontWeight:600},children:["(",ye.movie_count," movies)"]}),ye.hasPasscode&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"2px 8px",borderRadius:"4px"},children:[a.jsx(Cc,{size:11}),"PIN Protected"]})]}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-dim)",fontFamily:"monospace",marginTop:"2px"},title:ye.folder_path,children:["Path: ",ye.folder_path]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`status-pill ${Ge?"status-pill-green":"status-pill-red"}`,children:Ge?"SHARING ACTIVE":"DISABLED"}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:[ye.access_count," streams"]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"240px"},children:[a.jsx("span",{className:"link-text-mono",children:He}),a.jsxs("button",{className:"btn-secondary",style:{padding:"7px 12px",fontSize:"12px"},onClick:()=>vt(He,`folder_${ye.id}`),title:"Copy Sharing Link",children:[J===`folder_${ye.id}`?a.jsx(Cn,{size:14,color:"var(--success)"}):a.jsx(sa,{size:14}),a.jsx("span",{children:J===`folder_${ye.id}`?"Copied":"Copy"})]})]}),a.jsxs("a",{href:He,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"9px 14px",fontSize:"13px"},title:"Open sharing viewer in a new tab",children:[a.jsx(Fm,{size:14}),a.jsx("span",{children:"Open Sharing Page"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap",borderTop:"1px solid var(--border)",paddingTop:"10px"},children:[a.jsxs("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12px"},onClick:()=>Qe(ye.id),title:"Rescan folder for new or deleted movies",children:[a.jsx(Hr,{size:13}),a.jsx("span",{children:"Rescan Folder"})]}),a.jsxs("button",{className:Ge?"btn-secondary":"btn-success",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Se(ye.id),children:[Ge?a.jsx(Kg,{size:13}):a.jsx(Zg,{size:13}),a.jsx("span",{children:Ge?"Disable Sharing":"Enable Sharing"})]}),a.jsxs("button",{className:"btn-danger",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>ve(ye.id,ye.label||ye.folder_name),children:[a.jsx(Wr,{size:13}),a.jsx("span",{children:"Delete Share"})]})]})]},ye.id)})})]})]})}function Iy({authFetch:s,onScanSuccess:e,onViewLibrary:t}){var re,z;const[r,l]=K.useState("D:\\Movies"),[c,d]=K.useState(!1),[f,m]=K.useState(0),[p,v]=K.useState(0),[S,_]=K.useState([]),[y,w]=K.useState(null),[T,x]=K.useState(!1),[M,L]=K.useState(!1),[U,A]=K.useState(""),[I,P]=K.useState(null),E=async()=>{try{const ne=await(await s("/api/admin/dashboard-stats")).json();ne.library&&(l(ne.library.folder||"D:\\Movies"),d(ne.library.folderExists),m(ne.library.totalMovies),v(ne.library.totalDiskBytes))}catch{}},D=async()=>{try{const ne=await(await s("/api/admin/drives")).json();ne.drives&&_(ne.drives)}catch{}},J=async V=>{try{const ne=await s(`/api/admin/browse-directory?path=${encodeURIComponent(V)}`),F=await ne.json();ne.ok&&(w(F),l(F.currentPath))}catch{}};K.useEffect(()=>{E(),D()},[]);const O=async()=>{L(!0),A("Opening Windows Folder Dialog on your PC host screen...");try{const ne=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();ne.selectedPath?(l(ne.selectedPath),A(`Selected from Windows Dialog: ${ne.selectedPath}`),await H(ne.selectedPath)):A("Folder selection was cancelled.")}catch(V){A(`Error launching Windows dialog: ${V.message}`)}finally{L(!1)}},H=async(V=r)=>{if(V){x(!0),A(`Scanning "${V}" for video files and metadata...`),P(null);try{const ne=await s("/api/admin/library-folder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folder:V})}),F=await ne.json();if(!ne.ok)throw new Error(F.error||"Scan failed");P(F.scanResult),A(`Scan complete! Found ${F.scanResult.totalFiles} files (${F.scanResult.added} new, ${F.scanResult.updated} verified).`),await E(),e&&e(V)}catch(ne){A(`Scan Error: ${ne.message}`)}finally{x(!1)}}},ee=async()=>{x(!0),A("Rescanning library folder for new or removed movies...");try{const V=await s("/api/admin/rescan",{method:"POST"}),ne=await V.json();if(!V.ok)throw new Error(ne.error||"Rescan failed");P(ne.scanResult),A(`Rescan complete! ${ne.scanResult.totalFiles} movies in library.`),await E()}catch(V){A(`Rescan Error: ${V.message}`)}finally{x(!1)}};return a.jsxs("div",{className:"folder-page-container",children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Movie Folder Management"}),a.jsx("p",{className:"page-sub-title",children:"Select any local folder on your Windows PC to automatically scan, index, and stream your movies."})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"10px 20px",gap:"8px"},onClick:()=>H(),disabled:T||M,children:[a.jsx(Hr,{size:16,className:T?"spin":""}),a.jsx("span",{children:T?"Scanning...":"Scan Movies"})]}),a.jsx("button",{className:"btn-secondary",onClick:ee,disabled:T||M,children:a.jsx("span",{children:"Refresh Library"})})]})]}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:28,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)",fontWeight:600},children:"CURRENT MOVIE DIRECTORY"}),a.jsx("div",{className:"folder-path-display",title:r,children:r})]})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:a.jsxs("div",{className:`folder-status-pill ${c?"status-connected":"status-missing"}`,children:[c?a.jsx(Wd,{size:15}):a.jsx(mc,{size:15}),a.jsx("span",{children:c?"Connected & Accessible":"Path Not Found on Host PC"})]})})]}),a.jsxs("div",{className:"folder-actions-row",children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 24px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:O,disabled:M||T,children:[a.jsx(Bf,{size:18}),a.jsx("span",{children:"Select Movie Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>J(r),children:[a.jsx(ao,{size:16}),a.jsx("span",{children:"Change Folder via Browser"})]})]}),a.jsxs("div",{className:"folder-stats-bar",children:[a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Total Movies Detected:"}),a.jsx("span",{className:"folder-stat-val text-red",children:f})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Library Storage Size:"}),a.jsx("span",{className:"folder-stat-val text-blue",children:si(p)})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Host Machine Location:"}),a.jsx("span",{className:"folder-stat-val",style:{color:"#cbd5e1"},children:"Local Windows Filesystem"})]})]})]}),U&&a.jsxs("div",{className:"folder-status-box",children:[a.jsx("span",{style:{fontWeight:600},children:U}),I&&a.jsxs("div",{style:{fontSize:"12px",marginTop:"6px",color:"var(--text-muted)"},children:["Summary: ",I.totalFiles," video files found | ",I.added," added | ",I.updated," updated | ",I.deleted," dead links removed"]})]}),a.jsxs("div",{className:"folder-browser-section",children:[a.jsxs("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Vi,{size:18,color:"#38bdf8"}),a.jsx("span",{children:"Interactive Filesystem Navigator"})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"},children:S.map(V=>a.jsxs("button",{className:`drive-pill ${r.startsWith(V)?"active":""}`,onClick:()=>J(V),children:[a.jsx(Vi,{size:14}),a.jsx("span",{children:V})]},V))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"14px"},children:[a.jsx("input",{type:"text",value:r,onChange:V=>l(V.target.value),placeholder:"Type path (e.g. D:\\Movies or C:\\Users\\ASUS\\Downloads)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>J(r),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>H(r),disabled:T,children:"Set & Scan"})]}),y&&a.jsxs("div",{className:"folder-list-container",children:[y.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>J(y.parentPath),children:[a.jsx(ao,{size:16,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(re=y.folders)==null?void 0:re.map(V=>a.jsxs("div",{className:"folder-list-item",onClick:()=>J(V.path),children:[a.jsx(ao,{size:16,color:"#fbbf24"}),a.jsx("span",{children:V.name})]},V.path)),((z=y.folders)==null?void 0:z.length)===0&&a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-dim)",fontSize:"13px"},children:"No subdirectories in this path."})]})]})]})}function Uy({authFetch:s}){var V,ne,F,$,W,Q,k,Z,we;const[e,t]=K.useState(null),[r,l]=K.useState([]),[c,d]=K.useState([]),[f,m]=K.useState(null),[p,v]=K.useState(!1),[S,_]=K.useState(""),[y,w]=K.useState("library"),[T,x]=K.useState(""),[M,L]=K.useState(""),[U,A]=K.useState(""),I=async()=>{try{const le=await(await s("/api/share/info")).json();t(le)}catch{}},P=async()=>{try{const le=await(await s("/api/share/links")).json();le.links&&l(le.links)}catch{}},E=async()=>{try{const le=await(await s("/api/movies")).json();le.movies&&d(le.movies)}catch{}};K.useEffect(()=>{I(),P(),E();const G=setInterval(I,3500);return()=>clearInterval(G)},[]);const D=(G,le)=>{G&&navigator.clipboard.writeText(G).then(()=>{m(le),setTimeout(()=>m(null),2500)})},J=async G=>{v(!0),_(`${G==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const le=await s(`/api/admin/tunnel/${G}`,{method:"POST"}),Me=await le.json();if(!le.ok)throw new Error(Me.error||"Tunnel command failed");_(Me.message),await I()}catch(le){_(`Tunnel error: ${le.message}`)}finally{v(!1)}},O=async G=>{G.preventDefault();try{const le=await s("/api/share/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:y,movieId:y==="movie"?parseInt(T,10):null,passcode:M.trim(),label:U.trim()})}),Me=await le.json();if(!le.ok)throw new Error(Me.error||"Failed to generate link");_("New sharing link created successfully!"),L(""),A(""),await P()}catch(le){alert(le.message)}},H=async G=>{if(window.confirm("Revoke this share link? Viewers will no longer be able to access it."))try{const le=await s(`/api/share/revoke/${G}`,{method:"POST"}),Me=await le.json();if(!le.ok)throw new Error(Me.error);await P()}catch(le){alert(le.message)}},ee=((V=e==null?void 0:e.remote)==null?void 0:V.status)==="connected",re=((ne=e==null?void 0:e.remote)==null?void 0:ne.status)==="starting",z=(G,le=!0)=>{var Ee,Se;return`${le&&((Ee=e==null?void 0:e.remote)!=null&&Ee.publicUrl)?e.remote.publicUrl:((Se=e==null?void 0:e.local)==null?void 0:Se.url)||"http://localhost:5050"}/?share=${G}`};return a.jsxs("div",{className:"sharing-page-container",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Sharing & Network Access"}),a.jsx("p",{className:"page-sub-title",children:"Generate simple direct access links for remote friends and local Wi-Fi devices to stream movies from your PC."})]})}),S&&a.jsx("div",{className:"folder-status-box",style:{marginBottom:"20px"},children:S}),a.jsxs("div",{className:"sharing-sections-grid",children:[a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(by,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section A: Local Network Access"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Same-Wi-Fi Home Streaming"})]})]}),a.jsx("span",{className:"status-pill-green",children:"LAN ONLINE"})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.5},children:"Any phone, tablet, smart TV or laptop connected to your home Wi-Fi network can open this address to browse and stream."}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",children:((F=e==null?void 0:e.local)==null?void 0:F.url)||"Detecting local IP..."}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var G;return D((G=e==null?void 0:e.local)==null?void 0:G.url,"local")},children:[f==="local"?a.jsx(Cn,{size:15,color:"var(--success)"}):a.jsx(sa,{size:15}),a.jsx("span",{children:f==="local"?"Copied":"Copy"})]})]}),(($=e==null?void 0:e.local)==null?void 0:$.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone Camera (Same Wi-Fi)"}),a.jsx("img",{src:e.local.qrCode,alt:"Local QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]}),a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(bc,{size:22,color:"#38bdf8"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section B: Remote Access (Cloudflare Tunnel)"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Worldwide Internet Streaming"})]})]}),a.jsx("span",{className:`status-pill ${ee?"status-pill-green":re?"status-pill-yellow":"status-pill-red"}`,children:((Q=(W=e==null?void 0:e.remote)==null?void 0:W.status)==null?void 0:Q.toUpperCase())||"STOPPED"})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{flex:1,background:ee?"var(--bg-secondary)":"var(--success)"},onClick:()=>J("start"),disabled:p||ee,children:[a.jsx(dn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"START TUNNEL"})]}),a.jsxs("button",{className:"btn-danger",style:{flex:1},onClick:()=>J("stop"),disabled:p||!ee&&!re,children:[a.jsx(ca,{size:16,fill:"currentColor"}),a.jsx("span",{children:"STOP TUNNEL"})]})]}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",style:{color:"#38bdf8"},children:((k=e==null?void 0:e.remote)==null?void 0:k.publicUrl)||(re?"Connecting to Cloudflare edge...":"Tunnel stopped — Click START TUNNEL")}),((Z=e==null?void 0:e.remote)==null?void 0:Z.publicUrl)&&a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var G;return D((G=e==null?void 0:e.remote)==null?void 0:G.publicUrl,"public")},children:[f==="public"?a.jsx(Cn,{size:15,color:"var(--success)"}):a.jsx(sa,{size:15}),a.jsx("span",{children:f==="public"?"Copied":"Copy"})]})]}),((we=e==null?void 0:e.remote)==null?void 0:we.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone (Worldwide Access)"}),a.jsx("img",{src:e.remote.qrCode,alt:"Remote QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]})]}),a.jsxs("div",{className:"share-generator-card",children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800,marginBottom:"6px"},children:"Generate Custom Sharing Links"}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"18px"},children:"Create tailored streaming links. Viewers who open these links do not need an account — they can immediately stream the movies authorized by the link."}),a.jsxs("form",{onSubmit:O,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Sharing Scope:"}),a.jsxs("select",{value:y,onChange:G=>w(G.target.value),style:{width:"100%"},children:[a.jsx("option",{value:"library",children:"Entire Movie Library"}),a.jsx("option",{value:"movie",children:"Single Individual Movie"})]})]}),y==="movie"&&a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Select Movie:"}),a.jsxs("select",{value:T,onChange:G=>x(G.target.value),required:!0,style:{width:"100%"},children:[a.jsx("option",{value:"",children:"-- Choose Movie --"}),c.map(G=>a.jsx("option",{value:G.id,children:G.clean_title},G.id))]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",placeholder:"e.g. 1234 (optional)",value:M,onChange:G=>L(G.target.value),style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Note / Label:"}),a.jsx("input",{type:"text",placeholder:"e.g. Link for John",value:U,onChange:G=>A(G.target.value),style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"10px",height:"42px"},children:[a.jsx(Hf,{size:16}),a.jsx("span",{children:"Create Link"})]})})]})]}),a.jsxs("div",{className:"active-links-section",children:[a.jsxs("h3",{style:{fontSize:"17px",fontWeight:700,marginBottom:"14px"},children:["Active Sharing Links (",r.length,")"]}),a.jsx("div",{style:{overflowX:"auto",background:"var(--bg-card)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:a.jsxs("table",{className:"sessions-table-3d",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Scope"}),a.jsx("th",{children:"Label / Target"}),a.jsx("th",{children:"Security"}),a.jsx("th",{children:"Views"}),a.jsx("th",{children:"Remote Sharing Link"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:r.map(G=>{const le=z(G.token,!0);return z(G.token,!1),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:`role-pill ${G.type==="movie"?"viewer":"admin"}`,children:G.type.toUpperCase()})}),a.jsxs("td",{children:[a.jsx("strong",{children:G.label||"Standard Link"}),G.movie_title&&a.jsx("div",{style:{fontSize:"12px",color:"#38bdf8"},children:G.movie_title})]}),a.jsx("td",{children:G.passcode?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#fbbf24",fontSize:"12px"},children:[a.jsx(Cc,{size:13}),a.jsx("span",{children:"PIN Protected"})]}):a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"12px"},children:"Direct Access"})}),a.jsx("td",{children:G.access_count}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontFamily:"monospace",fontSize:"12px",color:"#38bdf8",maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:le,children:le}),a.jsx("button",{className:"btn-secondary",style:{padding:"4px 8px",fontSize:"11px"},onClick:()=>D(le,`link_${G.id}`),title:"Copy Remote Link",children:f===`link_${G.id}`?a.jsx(Cn,{size:13,color:"var(--success)"}):a.jsx(sa,{size:13})})]})}),a.jsx("td",{children:a.jsxs("button",{className:"btn-danger",style:{padding:"5px 10px",fontSize:"12px"},onClick:()=>H(G.id),title:"Revoke Link",children:[a.jsx(Wr,{size:13}),a.jsx("span",{children:"Revoke"})]})})]},G.id)})})]})})]})]})}function ky({onSelectMovie:s,onPlayMovie:e,authFetch:t}){const[r,l]=K.useState([]),[c,d]=K.useState(!0),f=()=>{d(!0),t("/api/user/favorites").then(p=>p.json()).then(p=>{p.favorites&&l(p.favorites.map(v=>({...v,is_favorite:1})))}).catch(()=>{}).finally(()=>d(!1))};K.useEffect(()=>{f()},[]);const m=async p=>{try{await t(`/api/user/favorites/${p}`,{method:"POST"}),l(v=>v.filter(S=>S.id!==p))}catch{}};return a.jsxs("div",{className:"favorites-page-shell",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(ji,{size:26,fill:"var(--accent)",color:"var(--accent)"}),"My Favorites"]})}),a.jsx("p",{className:"page-sub-title",children:"Movies you've marked as favorites for quick access."})]})}),c?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading your favorites..."})]}):r.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(ji,{size:48,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Favorites Yet"}),a.jsx("p",{children:"Browse your movie library and tap the heart icon on any poster to add it to your favorites collection."})]}):a.jsx("div",{className:"movie-grid-3d",children:r.map(p=>a.jsx(Or,{movie:p,onSelect:s,onPlay:e,onToggleFavorite:m},p.id))})]})}function Fy({authFetch:s,onOpenFolderPicker:e,onOpenShareModal:t}){var ne,F,$,W,Q,k,Z,we,G,le,Me,Ee,Se;const[r,l]=K.useState(null),[c,d]=K.useState([]),[f,m]=K.useState(!1),[p,v]=K.useState(!1),[S,_]=K.useState(""),[y,w]=K.useState(""),[T,x]=K.useState(""),[M,L]=K.useState(""),[U,A]=K.useState(""),I=()=>{s("/api/admin/dashboard-stats").then(ve=>ve.json()).then(ve=>l(ve)).catch(()=>{})},P=()=>{s("/api/auth/users").then(ve=>ve.json()).then(ve=>{ve.users&&d(ve.users)}).catch(()=>{})};K.useEffect(()=>{I(),P();const ve=setInterval(I,3e3);return()=>clearInterval(ve)},[]);const E=async ve=>{v(!0),_(`Applying server ${ve}...`);try{const Qe=await s(`/api/admin/server/${ve}`,{method:"POST"}),Fe=await Qe.json();if(!Qe.ok)throw new Error(Fe.error||`${ve} failed`);_(Fe.message||`Server ${ve} completed successfully.`),I()}catch(Qe){_(`Error: ${Qe.message}`)}finally{v(!1)}},D=async()=>{v(!0),_("Scanning movie folder for new files...");try{const ve=await s("/api/admin/rescan",{method:"POST"}),Qe=await ve.json();if(!ve.ok)throw new Error(Qe.error||"Rescan failed");_(Qe.message||"Library rescan complete."),I()}catch(ve){_(`Error: ${ve.message}`)}finally{v(!1)}},J=()=>{var Qe;const ve=(Qe=r==null?void 0:r.tunnel)==null?void 0:Qe.publicUrl;ve&&navigator.clipboard.writeText(ve).then(()=>{m(!0),setTimeout(()=>m(!1),2500)})},O=async ve=>{ve.preventDefault(),L(""),A("");try{const Qe=await s("/api/auth/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:y,password:T,role:"viewer"})}),Fe=await Qe.json();if(!Qe.ok)throw new Error(Fe.error||"Failed to create user");A(`Viewer account "${y}" created!`),w(""),x(""),P()}catch(Qe){L(Qe.message)}},H=async(ve,Qe)=>{if(window.confirm(`Delete viewer account "${Qe}"?`))try{const Fe=await s(`/api/auth/users/${ve}`,{method:"DELETE"}),vt=await Fe.json();if(!Fe.ok)throw new Error(vt.error);P()}catch(Fe){alert(Fe.message)}},ee=()=>{window.open(fn(`/api/admin/backup?token=${encodeURIComponent(localStorage.getItem("streamlink_token"))}`),"_blank")},re=ve=>{const Qe=ve.target.files[0];if(!Qe)return;const Fe=new FileReader;Fe.onload=async vt=>{try{const mt=JSON.parse(vt.target.result),lt=await s("/api/admin/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(mt)}),bt=await lt.json();if(!lt.ok)throw new Error(bt.error);alert("Backup successfully restored!"),I()}catch(mt){alert(`Restore error: ${mt.message}`)}},Fe.readAsText(Qe)},z=((ne=r==null?void 0:r.tunnel)==null?void 0:ne.status)==="connected",V=((F=r==null?void 0:r.tunnel)==null?void 0:F.status)==="starting";return a.jsxs("div",{className:"dash-container",children:[a.jsxs("div",{className:"dash-page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"dash-page-title",children:"Server Dashboard"}),a.jsx("p",{className:"dash-page-desc",children:"Manage your movie storage, remote streaming link, and viewer accounts."})]}),a.jsxs("div",{className:"dash-header-actions",children:[a.jsxs("button",{className:"btn-secondary",onClick:D,disabled:p,title:"Scan your movie folder for newly added files",children:[a.jsx(Hr,{size:14,className:p?"dash-spin":""}),a.jsx("span",{children:"Rescan Library"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>E("restart"),disabled:p,title:"Restart the local StreamLink server",children:[a.jsx(rc,{size:14}),a.jsx("span",{children:"Restart Server"})]})]})]}),S&&a.jsxs("div",{className:"dash-status-toast",children:[a.jsx("span",{children:S}),a.jsx("button",{onClick:()=>_(""),className:"dash-toast-close",title:"Dismiss",children:a.jsx(lr,{size:14})})]}),a.jsxs("div",{className:"dash-sections-stack",children:[a.jsxs("div",{className:"dash-panel dash-panel-highlight",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx("div",{className:`dash-status-indicator ${z?"indicator-online":V?"indicator-starting":"indicator-offline"}`}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Remote Access"}),a.jsx("p",{className:"dash-panel-sub",children:z?"Your movie library is securely accessible from anywhere.":V?"Connecting encrypted remote streaming tunnel...":"Stream outside your home network on phones, tablets, or remote browsers."})]})]}),a.jsx("div",{children:z?a.jsxs("button",{className:"btn-secondary dash-btn-danger",onClick:()=>E("stop"),disabled:p,children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Pause Remote Access"})]}):a.jsxs("button",{className:"btn-primary",onClick:()=>E("start"),disabled:p||V,children:[a.jsx(dn,{size:14,fill:"currentColor"}),a.jsx("span",{children:V?"Connecting...":"Enable Remote Access"})]})})]}),z&&(($=r==null?void 0:r.tunnel)!=null&&$.publicUrl)?a.jsxs("div",{className:"dash-link-bar",children:[a.jsxs("div",{className:"dash-link-content",children:[a.jsx("span",{className:"dash-link-label",children:"Your Live Streaming Link:"}),a.jsx("span",{className:"dash-link-url",title:r.tunnel.publicUrl,children:r.tunnel.publicUrl})]}),a.jsxs("div",{className:"dash-link-buttons",children:[a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:J,title:"Copy link to clipboard",children:[f?a.jsx(Cn,{size:14,color:"#10B981"}):a.jsx(sa,{size:14}),a.jsx("span",{children:f?"Copied!":"Copy"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:t,title:"Display QR Code for mobile",children:[a.jsx(K_,{size:14}),a.jsx("span",{children:"QR Code"})]}),a.jsxs("a",{href:r.tunnel.publicUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary dash-btn-compact",title:"Open live link in new tab",children:[a.jsx(Y0,{size:14}),a.jsx("span",{children:"Open"})]})]})]}):a.jsxs("div",{className:"dash-link-offline",children:[a.jsx(bc,{size:16}),a.jsxs("span",{children:["Local in-home access is available at ",a.jsx("code",{className:"dash-code",children:"http://localhost:5050"}),'. Click "Enable Remote Access" to securely share outside home.']})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Vi,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Movie Storage"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:e,title:"Select another folder on your computer",children:[a.jsx(ao,{size:14}),a.jsx("span",{children:"Change Folder"})]})]}),a.jsxs("div",{className:"dash-storage-box",children:[a.jsxs("div",{className:"dash-folder-info",children:[a.jsx(ao,{size:15,className:"dash-folder-icon"}),a.jsx("span",{className:"dash-folder-text",title:(W=r==null?void 0:r.library)==null?void 0:W.folder,children:((Q=r==null?void 0:r.library)==null?void 0:Q.folder)||"No folder selected"})]}),a.jsx("span",{className:`dash-badge ${(k=r==null?void 0:r.library)!=null&&k.folderExists?"badge-success":"badge-error"}`,children:(Z=r==null?void 0:r.library)!=null&&Z.folderExists?"Connected":"Folder Not Found"})]}),a.jsxs("div",{className:"dash-metrics-grid",children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Movies"}),a.jsx("span",{className:"dash-metric-number",children:((we=r==null?void 0:r.library)==null?void 0:we.totalMovies)||0})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Disk Storage"}),a.jsx("span",{className:"dash-metric-number",children:si((G=r==null?void 0:r.library)==null?void 0:G.totalDiskBytes)})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Server Port"}),a.jsxs("span",{className:"dash-metric-number",children:[":",((le=r==null?void 0:r.server)==null?void 0:le.port)||5050]})]})]})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(qg,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Now Playing"})]}),a.jsxs("span",{className:"dash-pill-counter",children:[((Me=r==null?void 0:r.streaming)==null?void 0:Me.activeViewersCount)||0," Active"]})]}),((Se=(Ee=r==null?void 0:r.streaming)==null?void 0:Ee.activeSessions)==null?void 0:Se.length)===0?a.jsxs("div",{className:"dash-empty-state",children:[a.jsx(Gf,{size:24,className:"dash-empty-icon"}),a.jsx("p",{className:"dash-empty-title",children:"No one is streaming right now"}),a.jsx("p",{className:"dash-empty-sub",children:"When movies are played on connected phones or browsers, real-time viewer details will appear here."})]}):a.jsx("div",{className:"dash-sessions-list",children:r.streaming.activeSessions.map(ve=>a.jsxs("div",{className:"dash-session-row",children:[a.jsx("div",{className:"dash-session-avatar",children:ve.username.charAt(0).toUpperCase()}),a.jsxs("div",{className:"dash-session-text",children:[a.jsx("span",{className:"dash-session-movie",children:ve.movieTitle}),a.jsxs("span",{className:"dash-session-user",children:[ve.username," (",ve.ip,")"]})]}),a.jsx("span",{className:"dash-session-bandwidth",children:si(ve.bytesTransmitted)})]},ve.id))})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(ay,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Viewer Accounts"}),a.jsx("p",{className:"dash-panel-sub",children:"Manage user logins for friends and family."})]})]})}),a.jsxs("form",{onSubmit:O,className:"dash-user-form",children:[a.jsxs("div",{className:"dash-user-inputs",children:[a.jsx("input",{type:"text",placeholder:"Username",value:y,onChange:ve=>w(ve.target.value),required:!0,className:"dash-input"}),a.jsx("input",{type:"password",placeholder:"Password (min 6 chars)",value:T,onChange:ve=>x(ve.target.value),required:!0,className:"dash-input"}),a.jsxs("button",{type:"submit",className:"btn-primary dash-btn-compact",children:[a.jsx(vy,{size:14}),a.jsx("span",{children:"Add"})]})]}),M&&a.jsx("span",{className:"dash-form-error",children:M}),U&&a.jsx("span",{className:"dash-form-success",children:U})]}),a.jsx("div",{className:"dash-user-list",children:c.map(ve=>a.jsxs("div",{className:"dash-user-row",children:[a.jsxs("div",{className:"dash-user-info",children:[a.jsx("span",{className:"dash-user-name",children:ve.username}),a.jsx("span",{className:`dash-role-badge ${ve.role}`,children:ve.role})]}),ve.role!=="admin"&&a.jsx("button",{className:"dash-delete-btn",onClick:()=>H(ve.id,ve.username),title:`Remove user ${ve.username}`,children:a.jsx(Wr,{size:13})})]},ve.id))})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Um,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Backup & Settings"}),a.jsx("p",{className:"dash-panel-sub",children:"Safely export or restore watch progress, favorites, and settings without touching movie files."})]})]})}),a.jsxs("div",{className:"dash-backup-actions",children:[a.jsxs("button",{className:"btn-secondary dash-backup-btn",onClick:ee,children:[a.jsx(Um,{size:15}),a.jsx("span",{children:"Export Backup (.json)"})]}),a.jsxs("label",{className:"btn-secondary dash-backup-btn dash-file-upload",children:[a.jsx(gy,{size:15}),a.jsx("span",{children:"Restore Backup"}),a.jsx("input",{type:"file",accept:".json",onChange:re,style:{display:"none"}})]})]})]})]})]})]})}function Oy(){const{login:s}=jf(),[e,t]=K.useState(""),[r,l]=K.useState(""),[c,d]=K.useState(""),[f,m]=K.useState(!1),p=typeof window<"u"&&!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("127.0.0.1"),[v,S]=K.useState(()=>p||!fs()),[_,y]=K.useState(()=>fs()||""),[w,T]=K.useState(!1),[x,M]=K.useState(null),L=async A=>{A.preventDefault(),d(""),m(!0);try{await s(e.trim(),r)}catch(I){const P=I.message||"Login failed";P.includes("fetch")||P.includes("Failed to fetch")||P.includes("NetworkError")||P.includes("Cannot connect")?(d("Cannot connect to your StreamLink server. Please enter your Cloudflare Tunnel URL below and click Save."),S(!0)):d(P)}finally{m(!1)}},U=async A=>{let I=(A!==void 0?A:_).trim();if(!I){Im(""),y(""),M({type:"success",message:"Server URL cleared (using local /api)."}),d("");return}let P=I.replace(/\/+$/,"");if(/^https?:\/\//i.test(P)||(P=`https://${P}`),P=P.replace(/\/api\/?$/i,""),P.includes("your-temporary-url")||P.includes("your-tunnel")||P.includes("sponsored-fee-imposed-associations")){M({type:"error",message:"Please replace the placeholder with your actual Cloudflare Tunnel URL generated on your PC."});return}T(!0),M(null);const E=`${P}/api/health`;try{const D=await fetch(E,{signal:AbortSignal.timeout(8e3)});if(D.ok)Im(P),y(P),M({type:"success",message:"Connected to StreamLink Server successfully!"}),d("");else throw new Error(`Server returned status ${D.status}`)}catch{M({type:"error",message:"Could not connect. Ensure start-streamlink.bat is running on your PC and Cloudflare Tunnel is started in your Dashboard."})}finally{T(!1)}};return a.jsxs("div",{className:"login-page-shell",children:[a.jsx("div",{className:"login-bg-gradient"}),a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-brand",children:[a.jsx("div",{className:"login-logo-icon",children:a.jsx(bi,{size:28})}),a.jsxs("h1",{className:"login-brand-name",children:["Stream",a.jsx("span",{style:{color:"var(--accent)"},children:"Link"})]}),a.jsx("p",{className:"login-brand-sub",children:"Personal Self-Hosted Movie Streaming"})]}),c&&a.jsxs("div",{className:"login-error",style:{marginBottom:"16px"},children:[a.jsx(uo,{size:16,style:{flexShrink:0}}),a.jsx("span",{children:c})]}),a.jsxs("form",{className:"login-form",onSubmit:L,children:[a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-username",children:"Username"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-username",type:"text",placeholder:"Enter username",value:e,onChange:A=>t(A.target.value),required:!0,autoFocus:!0}),a.jsx(tx,{size:16,className:"login-input-icon"})]})]}),a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-password",children:"Password"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-password",type:"password",placeholder:"Enter password",value:r,onChange:A=>l(A.target.value),required:!0}),a.jsx(Cc,{size:16,className:"login-input-icon"})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"13px",fontSize:"15px",marginTop:"8px"},disabled:f,children:[a.jsx("span",{children:f?"Authenticating...":"Sign In"}),!f&&a.jsx(co,{size:16})]})]}),a.jsxs("div",{className:"login-hint",children:["Default credentials: ",a.jsx("strong",{style:{color:"#fff"},children:"admin"})," / ",a.jsx("strong",{style:{color:"#fff"},children:"admin123"})]}),a.jsxs("div",{className:"login-server-config",style:{marginTop:"16px"},children:[a.jsxs("button",{type:"button",className:"login-server-toggle",onClick:()=>S(!v),style:{fontWeight:600,color:"#fff"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(ry,{size:15,style:{color:"var(--accent)"}}),"Server Connection",a.jsx("span",{style:{fontSize:"10px",padding:"2px 6px",borderRadius:"4px",background:fs()?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.08)",color:fs()?"#4ade80":"var(--text-dim)"},children:fs()?"Configured":"Local / Not Set"})]}),v?a.jsx(i_,{size:15}):a.jsx(J0,{size:15})]}),v&&a.jsxs("div",{className:"login-server-panel",style:{marginTop:"10px"},children:[a.jsx("label",{className:"login-server-label",children:"PC Tunnel URL (Cloudflare):"}),a.jsxs("div",{className:"login-server-input-row",children:[a.jsx("input",{type:"url",className:"login-server-input",placeholder:"https://your-tunnel.trycloudflare.com",value:_,onChange:A=>y(A.target.value)}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>U(),disabled:w,style:{padding:"8px 14px",fontSize:"12px",whiteSpace:"nowrap"},children:[w?a.jsx(Hr,{size:13,className:"spin"}):a.jsx(Cn,{size:13}),a.jsx("span",{children:"Save"})]})]}),a.jsxs("div",{className:"login-server-presets",children:[a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{y("http://localhost:5050"),U("http://localhost:5050")},children:[a.jsx(bc,{size:11,style:{display:"inline",marginRight:"4px"}}),"Localhost (5050)"]}),fs()&&a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{y(""),U("")},children:[a.jsx(oo,{size:11,style:{display:"inline",marginRight:"4px"}}),"Reset / Clear URL"]})]}),x&&a.jsx("div",{className:`login-server-feedback ${x.type}`,children:x.message}),a.jsxs("div",{className:"login-server-guide",children:[a.jsxs("div",{className:"login-server-guide-title",children:[a.jsx(fo,{size:13,style:{flexShrink:0}}),a.jsx("span",{children:"How to connect when hosted on Vercel:"})]}),a.jsxs("ol",{className:"login-server-steps",children:[a.jsxs("li",{children:["Run ",a.jsx("code",{children:"start-streamlink.bat"})," on your PC (where movies are stored)."]}),a.jsxs("li",{children:["In your PC browser, open ",a.jsx("code",{children:"http://localhost:5050"})," and go to ",a.jsx("strong",{children:"Dashboard"}),"."]}),a.jsxs("li",{children:["Under ",a.jsx("strong",{children:"Cloudflare Tunnel"}),", click ",a.jsx("strong",{children:"START SERVER"}),"."]}),a.jsxs("li",{children:["Copy your live ",a.jsx("code",{children:"https://....trycloudflare.com"})," link, paste it in the box above, and click ",a.jsx("strong",{children:"Save"}),"."]})]}),a.jsxs("div",{className:"login-server-tip",children:["💡 ",a.jsx("strong",{children:"Tip:"})," You don't need Vercel! Your Cloudflare Tunnel link from your PC can be shared and opened directly on any phone or device."]})]})]})]})]})]})}function Rl(s){if(isNaN(s)||s<0)return"00:00";const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=Math.floor(s%60),l=t<10?`0${t}`:t,c=r<10?`0${r}`:r;return e>0?`${e}:${l}:${c}`:`${l}:${c}`}function ix({movie:s,onBack:e,token:t,authFetch:r}){const l=K.useRef(null),c=K.useRef(null),d=K.useRef(null),[f,m]=K.useState(!1),[p,v]=K.useState(0),[S,_]=K.useState(s.duration||0),[y,w]=K.useState(0),[T,x]=K.useState(1),[M,L]=K.useState(!1),[U,A]=K.useState(1),[I,P]=K.useState(!0),[E,D]=K.useState(!1),[J,O]=K.useState(!1),[H,ee]=K.useState(-1),[re,z]=K.useState(!1),[V,ne]=K.useState(!1),[F,$]=K.useState(!1),[W,Q]=K.useState(null),[k,Z]=K.useState({visible:!1,xPercent:0,time:0}),[we,G]=K.useState(null),le=K.useRef(null),Me=K.useRef(null),Ee=()=>{P(!0),Me.current&&clearTimeout(Me.current),Me.current=setTimeout(()=>{l.current&&!l.current.paused&&(P(!1),D(!1),O(!1))},3500)},Se=xe=>{G(xe),le.current&&clearTimeout(le.current),le.current=setTimeout(()=>{G(null)},650)},ve=()=>{var ie;$(!1);const xe=(ie=l.current)==null?void 0:ie.error;let R="An error occurred during video playback.",b=(xe==null?void 0:xe.code)||0;b===1?R="Video playback was aborted.":b===2?R="A network error occurred while loading the video stream.":b===3?R="An error occurred while decoding the video stream.":b===4&&(R="This video format or codec is not supported by your browser."),Q({code:b,message:R,codec:s.codec||"Unknown",container:s.container||"Unknown",audioCodec:s.audio_codec||"Unknown"})},Qe=()=>{Q(null),$(!0),l.current&&(l.current.load(),l.current.play().then(()=>{m(!0),$(!1)}).catch(()=>{ve()}))};K.useEffect(()=>{if(s.progress_seconds&&s.progress_seconds>15){z(!0);const xe=setTimeout(()=>{z(!1)},7e3);return()=>clearTimeout(xe)}},[s]);const Fe=s.streamUrlOverride||`/api/movies/${s.id}/stream?token=${encodeURIComponent(t||"")}`,vt=fn(Fe),mt=()=>{Ee()};K.useEffect(()=>{const xe=setInterval(()=>{if(l.current&&f&&r){const R=l.current.currentTime,b=l.current.duration||S;R>5&&r("/api/user/progress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieId:s.id,progressSeconds:Math.floor(R),durationSeconds:Math.floor(b)})}).catch(()=>{})}},5e3);return()=>clearInterval(xe)},[f,S,s.id]);const lt=()=>{l.current&&(l.current.paused?l.current.play().then(()=>{m(!0),Se("play"),Ee()}).catch(()=>{}):(l.current.pause(),m(!1),Se("pause"),P(!0),Me.current&&clearTimeout(Me.current)))},bt=xe=>{z(!1),l.current&&(l.current.currentTime=Math.max(0,Math.min(l.current.duration||S,l.current.currentTime+xe)),Se(xe>0?"fwd":"rwd"),Ee())},ct=xe=>{if(z(!1),!d.current||!l.current)return;const R=d.current.getBoundingClientRect(),ie=Math.max(0,Math.min(1,(xe.clientX-R.left)/R.width))*(l.current.duration||S);l.current.currentTime=ie,v(ie),Ee()},_t=xe=>{var Ne;if(!d.current)return;const R=d.current.getBoundingClientRect(),b=Math.max(0,Math.min(xe.clientX-R.left,R.width)),ie=b/R.width*100,Te=((Ne=l.current)==null?void 0:Ne.duration)||S||0,me=b/R.width*Te;Z({visible:!0,xPercent:ie,time:me})},ye=()=>{Z(xe=>({...xe,visible:!1}))},He=xe=>{if(!l.current)return;const R=Math.max(0,Math.min(1,xe));l.current.volume=R,x(R),L(R===0)},Ge=()=>{l.current&&(M?(l.current.muted=!1,l.current.volume=T||.5,L(!1)):(l.current.muted=!0,L(!0)))},Tt=xe=>{l.current&&(l.current.playbackRate=xe,A(xe),D(!1),Ee())};K.useEffect(()=>{const xe=()=>{var me,Ne,De,he;const Te=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||(me=l.current)!=null&&me.webkitDisplayingFullscreen);if(ne(Te),Te)document.body.classList.add("streamlink-fullscreen-active");else{document.body.classList.remove("streamlink-fullscreen-active");try{(De=(Ne=window.screen)==null?void 0:Ne.orientation)!=null&&De.unlock?window.screen.orientation.unlock():(he=window.screen)!=null&&he.unlockOrientation&&window.screen.unlockOrientation()}catch{}}},R=()=>{ne(!0),document.body.classList.add("streamlink-fullscreen-active")},b=()=>{var Te,me;ne(!1),document.body.classList.remove("streamlink-fullscreen-active");try{(me=(Te=window.screen)==null?void 0:Te.orientation)!=null&&me.unlock&&window.screen.orientation.unlock()}catch{}};document.addEventListener("fullscreenchange",xe),document.addEventListener("webkitfullscreenchange",xe),document.addEventListener("mozfullscreenchange",xe),document.addEventListener("MSFullscreenChange",xe);const ie=l.current;return ie&&(ie.addEventListener("webkitbeginfullscreen",R),ie.addEventListener("webkitendfullscreen",b)),()=>{var Te,me;document.removeEventListener("fullscreenchange",xe),document.removeEventListener("webkitfullscreenchange",xe),document.removeEventListener("mozfullscreenchange",xe),document.removeEventListener("MSFullscreenChange",xe),ie&&(ie.removeEventListener("webkitbeginfullscreen",R),ie.removeEventListener("webkitendfullscreen",b)),document.body.classList.remove("streamlink-fullscreen-active");try{(me=(Te=window.screen)==null?void 0:Te.orientation)!=null&&me.unlock&&window.screen.orientation.unlock()}catch{}}},[]);const be=async()=>{var Te,me,Ne,De,he,ge,Le,B;const xe=c.current,R=l.current;if(!xe)return;const b=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||R!=null&&R.webkitDisplayingFullscreen),ie=R==null?void 0:R.currentTime;if(b){try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.msExitFullscreen?await document.msExitFullscreen():R&&R.webkitExitFullscreen&&R.webkitExitFullscreen()}catch{}try{(Le=(ge=window.screen)==null?void 0:ge.orientation)!=null&&Le.unlock?window.screen.orientation.unlock():(B=window.screen)!=null&&B.unlockOrientation&&window.screen.unlockOrientation()}catch{}R&&ie&&Math.abs(R.currentTime-ie)>2&&(R.currentTime=ie),ne(!1)}else{try{xe.requestFullscreen?await xe.requestFullscreen():xe.webkitRequestFullscreen?await xe.webkitRequestFullscreen():xe.mozRequestFullScreen?await xe.mozRequestFullScreen():xe.msRequestFullscreen?await xe.msRequestFullscreen():R&&R.webkitEnterFullscreen&&R.webkitEnterFullscreen()}catch{if(R&&R.webkitEnterFullscreen)try{R.webkitEnterFullscreen()}catch{}}try{(me=(Te=window.screen)==null?void 0:Te.orientation)!=null&&me.lock?await window.screen.orientation.lock("landscape"):(Ne=window.screen)!=null&&Ne.lockOrientation?window.screen.lockOrientation("landscape"):(De=window.screen)!=null&&De.mozLockOrientation?window.screen.mozLockOrientation("landscape"):(he=window.screen)!=null&&he.msLockOrientation&&window.screen.msLockOrientation("landscape")}catch{}R&&ie&&Math.abs(R.currentTime-ie)>2&&(R.currentTime=ie),ne(!0)}},Ye=()=>{"ontouchstart"in window||navigator.maxTouchPoints>0?P(R=>{const b=!R;return b&&Ee(),b}):lt()};K.useEffect(()=>{const xe=R=>{var b;if(!["INPUT","TEXTAREA"].includes((b=document.activeElement)==null?void 0:b.tagName))switch(R.code){case"Space":R.preventDefault(),lt();break;case"ArrowLeft":R.preventDefault(),bt(-10);break;case"ArrowRight":R.preventDefault(),bt(10);break;case"ArrowUp":R.preventDefault(),He(T+.1);break;case"ArrowDown":R.preventDefault(),He(T-.1);break;case"KeyM":Ge();break;case"KeyF":be();break;case"Escape":document.fullscreenElement||e();break}};return window.addEventListener("keydown",xe),()=>window.removeEventListener("keydown",xe)},[f,T,M,S]);const X=xe=>{if(ee(xe),O(!1),Ee(),!l.current)return;const R=l.current.textTracks;for(let b=0;b<R.length;b++)R[b].mode=b===xe?"showing":"disabled"},Ut=()=>{l.current&&s.progress_seconds&&(l.current.currentTime=s.progress_seconds,l.current.play().then(()=>m(!0)).catch(()=>{})),z(!1),Ee()},Nt=()=>{l.current&&(l.current.currentTime=0,l.current.play().then(()=>m(!0)).catch(()=>{})),z(!1),Ee()},Ht=()=>{if(l.current&&(v(l.current.currentTime),l.current.buffered.length>0)){const xe=l.current.buffered.end(l.current.buffered.length-1),R=l.current.duration||S;R>0&&w(Math.min(100,xe/R*100))}},ze=()=>{l.current&&_(l.current.duration||s.duration||0)},qt=S>0?p/S*100:0,rt=s.subtitles||[];return a.jsx("div",{ref:c,className:`player-page ${V?"player-page-fullscreen":""}`,onMouseMove:mt,style:{cursor:I?"default":"none"},children:a.jsxs("div",{className:"player-video-wrapper",onClick:Ye,children:[a.jsx("video",{ref:l,src:vt,className:"player-video",onTimeUpdate:Ht,onLoadedMetadata:ze,onPlay:()=>{m(!0),$(!1)},onPause:()=>m(!1),onWaiting:()=>$(!0),onCanPlay:()=>$(!1),onPlaying:()=>$(!1),onSeeking:()=>$(!0),onSeeked:()=>$(!1),onError:ve,playsInline:!0,"webkit-playsinline":"true","x5-video-player-type":"h5",children:rt.map((xe,R)=>a.jsx("track",{kind:"subtitles",label:xe.language,src:fn(`/api/movies/${s.id}/subtitles/${R}?token=${encodeURIComponent(t||"")}`),default:R===H},R))}),F&&!W&&a.jsxs("div",{className:"player-buffering-overlay",children:[a.jsx("div",{className:"player-buffer-spinner"}),a.jsx("span",{className:"player-buffer-text",children:"Buffering Stream..."})]}),W&&a.jsx("div",{className:"player-error-overlay",onClick:xe=>xe.stopPropagation(),children:a.jsxs("div",{className:"player-error-card",children:[a.jsx("div",{className:"player-error-icon",children:a.jsx(mc,{size:36,color:"#EF4444"})}),a.jsx("h3",{className:"player-error-title",children:W.code===4?"Codec Not Supported in Browser":"Stream Playback Error"}),a.jsx("p",{className:"player-error-desc",children:W.message}),a.jsxs("div",{className:"player-error-diagnostics",children:[a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Container:"}),a.jsx("span",{className:"diag-value",children:s.container?s.container.toUpperCase():"UNKNOWN"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Video Codec:"}),a.jsx("span",{className:"diag-value",children:s.codec||"Unknown (e.g. HEVC/H.265)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Audio Codec:"}),a.jsx("span",{className:"diag-value",children:s.audio_codec||"Unknown (e.g. AC3/DTS)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Resolution:"}),a.jsx("span",{className:"diag-value",children:s.resolution||"Standard"})]})]}),W.code===4&&a.jsxs("div",{className:"player-error-tip",children:[a.jsx("strong",{children:"Why did this happen?"})," Most web browsers (Chrome, Edge, Firefox) do not include proprietary licensing decoders for certain video containers (MKV with HEVC/H.265) or surround-sound audio (multichannel DTS/AC3). You can play this directly in VLC/MPV or re-encode using H.264/AAC."]}),a.jsxs("div",{className:"player-error-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:Qe,children:[a.jsx(Hr,{size:15}),a.jsx("span",{children:"Retry Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:e,children:[a.jsx(fc,{size:15}),a.jsx("span",{children:"Return to Library"})]})]})]})}),we&&a.jsx("div",{className:"center-action-overlay",children:a.jsxs("div",{className:"center-action-bubble",children:[we==="play"&&a.jsx(dn,{size:38,fill:"#ffffff"}),we==="pause"&&a.jsx(hd,{size:38,fill:"#ffffff"}),we==="fwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(rc,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"+10s"})]}),we==="rwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(oo,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"-10s"})]})]})}),a.jsxs("div",{className:"player-mobile-center-controls",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:xe=>xe.stopPropagation(),children:[a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>bt(-10),title:"Rewind 10s","aria-label":"Rewind 10 seconds",children:[a.jsx(oo,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]}),a.jsx("button",{className:"player-mobile-play-btn",onClick:lt,title:f?"Pause":"Play","aria-label":f?"Pause":"Play",children:f?a.jsx(hd,{size:36,fill:"#ffffff"}):a.jsx(dn,{size:36,fill:"#ffffff",style:{marginLeft:"4px"}})}),a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>bt(10),title:"Forward 10s","aria-label":"Forward 10 seconds",children:[a.jsx(rc,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]})]}),a.jsxs("div",{className:"player-top-bar",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:xe=>xe.stopPropagation(),children:[a.jsxs("button",{className:"player-back-btn",onClick:e,title:"Return to library",children:[a.jsx(fc,{size:18}),a.jsx("span",{className:"player-back-label",children:"Back"})]}),a.jsx("div",{className:"player-top-title",title:s.clean_title||s.title,children:s.clean_title||s.title}),a.jsx("div",{className:"player-top-actions",children:a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("button",{className:"player-top-speed-btn",onClick:()=>{D(!E),O(!1),Ee()},title:"Playback Speed",children:[U,"x"]}),E&&a.jsx("div",{className:"player-popup-menu player-popup-top",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(xe=>a.jsxs("button",{className:`player-popup-item ${U===xe?"active":""}`,onClick:()=>Tt(xe),children:[a.jsxs("span",{children:[xe,"x"]}),U===xe&&a.jsx(Cn,{size:13,color:"var(--accent)"})]},xe))})]})})]}),re&&a.jsxs("div",{className:"resume-prompt",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:xe=>xe.stopPropagation(),children:[a.jsxs("span",{style:{fontSize:"13.5px",fontWeight:600},children:["Resume from ",Rl(s.progress_seconds),"?"]}),a.jsx("button",{className:"btn-primary",style:{padding:"6px 14px",fontSize:"12.5px"},onClick:Ut,children:"Resume"}),a.jsx("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12.5px"},onClick:Nt,children:"Start Over"}),a.jsx("button",{className:"resume-close-btn",onClick:()=>z(!1),title:"Dismiss","aria-label":"Dismiss resume prompt",children:a.jsx(lr,{size:15})})]}),a.jsxs("div",{className:"player-controls-overlay",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:xe=>xe.stopPropagation(),children:[a.jsx("div",{ref:d,className:"player-timeline-wrapper",onClick:ct,onMouseMove:_t,onMouseLeave:ye,children:a.jsxs("div",{className:"player-timeline-track",children:[a.jsx("div",{className:"player-timeline-buffer",style:{width:`${y}%`}}),k.visible&&a.jsx("div",{className:"player-timeline-hover-bar",style:{width:`${k.xPercent}%`}}),a.jsx("div",{className:"player-timeline-progress",style:{width:`${qt}%`},children:a.jsx("div",{className:"timeline-progress-sheen"})}),a.jsxs("div",{className:"player-timeline-thumb",style:{left:`${qt}%`},children:[a.jsx("div",{className:"thumb-inner-core"}),a.jsx("div",{className:"thumb-outer-halo"})]}),k.visible&&a.jsxs("div",{className:"player-timeline-tooltip",style:{left:`${k.xPercent}%`,transform:`translateX(-50%) perspective(400px) rotateX(${(k.xPercent-50)/50*-6}deg)`},children:[a.jsx("span",{className:"tooltip-time",children:Rl(k.time)}),a.jsx("div",{className:"tooltip-arrow"})]})]})}),a.jsxs("div",{className:"player-controls-bottom",children:[a.jsxs("div",{className:"player-controls-left",children:[a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:lt,title:f?"Pause":"Play",children:f?a.jsx(hd,{size:22,fill:"#fff"}):a.jsx(dn,{size:22,fill:"#fff"})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>bt(-10),title:"Rewind 10s",children:a.jsx(oo,{size:18})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>bt(10),title:"Forward 10s",children:a.jsx(rc,{size:18})}),a.jsxs("div",{className:"player-volume-group",children:[a.jsx("button",{className:"player-ctrl-btn",onClick:Ge,title:M?"Unmute":"Mute",children:M||T===0?a.jsx(wy,{size:19}):a.jsx(My,{size:19})}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M?0:T,onChange:xe=>He(parseFloat(xe.target.value)),className:"player-volume-slider",style:{width:"74px",background:`linear-gradient(to right, var(--accent) 0%, var(--accent) ${(M?0:T)*100}%, rgba(255,255,255,0.18) ${(M?0:T)*100}%, rgba(255,255,255,0.18) 100%)`}})]}),a.jsxs("div",{className:"player-time-display",children:[a.jsx("span",{className:"player-time-current",children:Rl(p)}),a.jsx("span",{className:"player-time-sep",children:"/"}),a.jsx("span",{className:"player-time-total",children:Rl(S)})]})]}),a.jsxs("div",{className:"player-controls-right",children:[rt.length>0&&a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"player-ctrl-btn",onClick:()=>{O(!J),D(!1),Ee()},title:"Subtitles",style:{color:H>=0?"var(--primary)":"#fff"},children:a.jsx(Yg,{size:19})}),J&&a.jsxs("div",{className:"player-popup-menu",style:{minWidth:"140px"},children:[a.jsxs("button",{className:`player-popup-item ${H===-1?"active":""}`,onClick:()=>X(-1),children:[a.jsx("span",{children:"Off"}),H===-1&&a.jsx(Cn,{size:13,color:"var(--accent)"})]}),rt.map((xe,R)=>a.jsxs("button",{className:`player-popup-item ${H===R?"active":""}`,onClick:()=>X(R),children:[a.jsx("span",{children:xe.language}),H===R&&a.jsx(Cn,{size:13,color:"var(--accent)"})]},R))]})]}),a.jsxs("div",{className:"player-desktop-btn",style:{position:"relative"},children:[a.jsxs("button",{className:"player-ctrl-btn",onClick:()=>{D(!E),O(!1),Ee()},style:{fontSize:"13px",fontWeight:700,padding:"5px 9px"},title:"Playback Speed",children:[U,"x"]}),E&&a.jsx("div",{className:"player-popup-menu",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(xe=>a.jsxs("button",{className:`player-popup-item ${U===xe?"active":""}`,onClick:()=>Tt(xe),children:[a.jsxs("span",{children:[xe,"x"]}),U===xe&&a.jsx(Cn,{size:13,color:"var(--accent)"})]},xe))})]}),a.jsx("button",{className:"player-ctrl-btn player-fullscreen-btn",onClick:be,title:V?"Exit Fullscreen":"Landscape Fullscreen","aria-label":V?"Exit Fullscreen":"Enter Landscape Fullscreen",children:V?a.jsx(V_,{size:21}):a.jsx(H_,{size:21})})]})]})]})]})})}function rx({movie:s,onClose:e,onPlay:t,onToggleFavorite:r,authFetch:l,onPosterUpdated:c,onRemoveMovie:d,onDeleteFile:f}){const[m,p]=K.useState([]),[v,S]=K.useState(!1),[_,y]=K.useState(""),[w,T]=K.useState(!1),[x,M]=K.useState({type:"",text:""}),[L,U]=K.useState(Date.now());if(K.useEffect(()=>{s!=null&&s.id&&l&&l(`/api/movies/recommendations/${s.id}`).then(E=>E.json()).then(E=>{E.recommendations&&p(E.recommendations)}).catch(()=>{})},[s==null?void 0:s.id]),!s)return null;const A=s.subtitles&&s.subtitles.length>0,I=s.progress_seconds&&s.progress_seconds>15,P=async E=>{if(E.preventDefault(),!(!_.trim()||!l)){T(!0),M({type:"",text:""});try{const D=await l(`/api/movies/${s.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:_.trim()})}),J=await D.json();D.ok?(M({type:"success",text:"Poster updated successfully!"}),U(Date.now()),S(!1),y(""),c&&c(s.id)):M({type:"error",text:J.error||"Failed to update poster"})}catch{M({type:"error",text:"Network error updating poster"})}finally{T(!1)}}};return a.jsx("div",{className:"movie-modal-backdrop",onClick:e,children:a.jsxs("div",{className:"movie-modal-box",onClick:E=>E.stopPropagation(),children:[a.jsxs("div",{className:"movie-modal-top-banner",children:[a.jsx("img",{src:fn(`/api/movies/${s.id}/backdrop?k=${L}`),alt:s.clean_title,className:"movie-modal-backdrop-img"}),a.jsx("div",{className:"movie-modal-banner-gradient"}),a.jsx("button",{className:"movie-modal-close-btn",onClick:e,title:"Close Details",children:a.jsx(lr,{size:18})})]}),a.jsxs("div",{className:"movie-modal-body",children:[a.jsxs("div",{className:"movie-modal-poster-col",children:[a.jsx("div",{className:"movie-modal-poster",children:a.jsx("img",{src:fn(`/api/movies/${s.id}/poster?k=${L}`),alt:s.clean_title},L)}),l&&a.jsxs("button",{className:"btn-change-poster",onClick:()=>S(!v),title:"Change or replace movie poster",children:[a.jsx(hc,{size:13}),a.jsx("span",{children:v?"Cancel":"Change Poster"})]}),v&&a.jsxs("form",{onSubmit:P,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste image URL...",value:_,onChange:E=>y(E.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:w,children:w?"Saving...":"Apply"})]}),x.text&&a.jsxs("div",{className:`poster-msg-banner ${x.type}`,children:[x.type==="success"?a.jsx(Cn,{size:12}):a.jsx(uo,{size:12}),a.jsx("span",{children:x.text})]})]}),a.jsxs("div",{className:"movie-modal-info",children:[a.jsxs("div",{className:"movie-modal-badges",children:[s.resolution&&a.jsx("span",{className:"badge-studio",children:s.resolution}),s.genre&&a.jsx("span",{className:"badge-studio-cyan",children:s.genre}),s.year&&a.jsx("span",{className:"badge-studio-dim",children:s.year}),A&&a.jsxs("span",{className:"badge-studio-info",children:[a.jsx(Yg,{size:11}),"CC"]})]}),a.jsx("h2",{className:"movie-modal-title",children:s.clean_title}),a.jsxs("div",{className:"movie-modal-meta-row",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:13}),fr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Vi,{size:13}),si(s.file_size)]}),s.codec&&a.jsx("span",{className:"meta-tag",children:s.codec})]}),a.jsx("p",{className:"movie-modal-description",children:s.description||"High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support."}),a.jsxs("div",{className:"movie-modal-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(s),children:[a.jsx(dn,{size:17,fill:"#ffffff",strokeWidth:0}),a.jsx("span",{children:I?"Resume Playback":"Play Movie"})]}),I&&a.jsxs("button",{className:"btn-secondary",onClick:()=>t({...s,progress_seconds:0}),title:"Play from 00:00",children:[a.jsx(oo,{size:15}),a.jsx("span",{children:"Start Over"})]}),r&&a.jsxs("button",{className:s.is_favorite?"btn-danger":"btn-secondary",onClick:()=>r(s.id),children:[a.jsx(ji,{size:16,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Favorited":"Favorite"})]}),d&&a.jsxs("button",{className:"btn-warning-outline",onClick:()=>{e(),d(s)},title:"Remove from StreamLink library (keeps original file)",children:[a.jsx(Fr,{size:15}),a.jsx("span",{children:"Remove from Library"})]}),f&&a.jsxs("button",{className:"btn-danger-outline",onClick:()=>{e(),f(s)},title:"Permanently delete video file from disk",children:[a.jsx(Wr,{size:15}),a.jsx("span",{children:"Delete File"})]})]}),a.jsxs("div",{className:"movie-modal-file-info",children:[a.jsxs("div",{className:"file-info-row",style:{gridColumn:"1 / -1"},children:[a.jsx("span",{className:"file-info-label",children:"File Location"}),a.jsx("span",{className:"file-info-value",title:s.file_path,style:{wordBreak:"break-all"},children:s.file_path})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Resolution"}),a.jsx("span",{className:"file-info-value accent-cyan",children:s.resolution||"Standard"})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"File Size"}),a.jsx("span",{className:"file-info-value",children:si(s.file_size)})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Video Codec"}),a.jsx("span",{className:"file-info-value",children:s.codec||"H264"})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Duration"}),a.jsx("span",{className:"file-info-value",children:fr(s.duration)})]}),A&&a.jsxs("div",{className:"file-info-row",style:{gridColumn:"1 / -1"},children:[a.jsx("span",{className:"file-info-label",children:"Subtitles"}),a.jsx("span",{className:"file-info-value",children:s.subtitles.map(E=>E.language).join(", ")})]})]})]})]}),m.length>0&&a.jsxs("div",{className:"movie-modal-recommendations",children:[a.jsx("h4",{children:"Similar Movies"}),a.jsx("div",{className:"recommendations-grid",children:m.slice(0,5).map(E=>a.jsxs("div",{className:"rec-card",onClick:()=>t(E),children:[a.jsx("img",{src:fn(`/api/movies/${E.id}/poster`),alt:E.clean_title,className:"rec-poster",loading:"lazy"}),a.jsxs("div",{className:"rec-info",children:[a.jsx("div",{className:"rec-title",children:E.clean_title}),a.jsx("div",{className:"rec-meta",children:E.year||E.resolution})]})]},E.id))})]})]})})}function zy({token:s}){const[e,t]=K.useState(!0),[r,l]=K.useState(""),[c,d]=K.useState(!1),[f,m]=K.useState(""),[p,v]=K.useState(null),[S,_]=K.useState(""),[y,w]=K.useState(null),[T,x]=K.useState(null),M=async(I=f)=>{t(!0),l("");try{const P=await fetch(fn("/api/share/public/access"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,passcode:I})}),E=await P.json();if(!P.ok){E.requiresPasscode?d(!0):l(E.error||"Failed to access stream");return}d(!1),v(E),E.type==="movie"&&E.movie&&w(E.movie)}catch{l("Unable to connect to host streaming PC")}finally{t(!1)}};K.useEffect(()=>{M()},[s]);const L=I=>{I.preventDefault(),M(f)};if(T){const I=`/api/share/public/stream/${s}/${T.id}`;return a.jsx(ix,{movie:{...T,streamUrlOverride:I},onBack:()=>x(null),token:s})}if(c)return a.jsx("div",{className:"viewer-auth-container",children:a.jsxs("div",{className:"viewer-auth-card",children:[a.jsx("div",{className:"viewer-brand-badge",children:a.jsx(bi,{size:24})}),a.jsx("h2",{style:{fontSize:"20px",fontWeight:800},children:"StreamLink Movie Share"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"13px",marginTop:"6px"},children:"This stream is protected with a security passcode set by the host."}),r&&a.jsxs("div",{className:"viewer-error-box",children:[a.jsx(uo,{size:15}),a.jsx("span",{children:r})]}),a.jsxs("form",{onSubmit:L,style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{type:"password",placeholder:"Enter Passcode / PIN",value:f,onChange:I=>m(I.target.value),required:!0,style:{width:"100%",paddingLeft:"38px",textAlign:"center",letterSpacing:"2px",fontSize:"16px"},autoFocus:!0}),a.jsx(Cc,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-dim)"}})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"12px"},disabled:e,children:a.jsx("span",{children:e?"Verifying...":"Unlock & Watch"})})]})]})});if(e)return a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Connecting to private streaming server..."})]});if(r||!p)return a.jsxs("div",{className:"viewer-error-screen",children:[a.jsx(uo,{size:48,color:"var(--danger)"}),a.jsx("h2",{style:{fontSize:"22px",marginTop:"16px"},children:"Stream Unavailable"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px",maxWidth:"420px",marginTop:"8px"},children:r||"The sharing link is either invalid, disabled, or the host computer has stopped streaming."})]});const U=p.type==="library"||p.type==="folder",A=U?(p.movies||[]).filter(I=>!S||I.clean_title.toLowerCase().includes(S.toLowerCase())):p.movie?[p.movie]:[];return a.jsxs("div",{className:"public-viewer-layout",children:[a.jsxs("header",{className:"viewer-navbar",children:[a.jsxs("div",{className:"viewer-brand",children:[a.jsx("div",{className:"nav-logo-icon",children:a.jsx(bi,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"viewer-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})]}),a.jsx("span",{className:"viewer-live-badge",children:p.type==="folder"?"SHARED FOLDER":"DIRECT STREAM"})]}),U&&a.jsxs("div",{className:"viewer-search-box",children:[a.jsx(aa,{size:15,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:p.type==="folder"?`Search ${p.folderName||"folder"}...`:"Search movies...",value:S,onChange:I=>_(I.target.value)})]})]}),a.jsx("main",{className:"viewer-main",children:p.type==="movie"&&p.movie?a.jsxs("div",{className:"single-movie-showcase",children:[a.jsx("div",{className:"single-movie-poster-box",children:a.jsx("img",{src:fn(`/api/movies/${p.movie.id}/poster`),alt:p.movie.clean_title})}),a.jsxs("div",{className:"single-movie-info-box",children:[a.jsxs("div",{className:"single-movie-badges-row",children:[a.jsx("span",{className:"hero-badge-pill",children:"AUTHORIZED DIRECT STREAM"}),p.movie.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",style:{position:"static"},children:p.movie.resolution}),p.movie.year&&a.jsx("span",{className:"hero-badge-year",children:p.movie.year})]}),a.jsx("h1",{className:"single-movie-title",children:p.movie.clean_title}),a.jsxs("div",{className:"single-movie-meta-row",children:[a.jsxs("span",{className:"meta-pill",children:[a.jsx(Gr,{size:12})," ",fr(p.movie.duration)]}),a.jsxs("span",{className:"meta-pill",children:[a.jsx(Vi,{size:12})," ",si(p.movie.file_size)]})]}),a.jsx("p",{className:"single-movie-desc",children:p.movie.description||"Streamed in original high-bitrate quality directly from the host Windows workstation. Multi-channel audio and instant HTTP range seeking."}),a.jsxs("button",{className:"btn-primary hero-btn-play",onClick:()=>x(p.movie),children:[a.jsx(dn,{size:18,fill:"#fff"}),a.jsx("span",{children:"Play Movie Now"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"viewer-heading-row",children:p.type==="folder"?a.jsxs("div",{className:"viewer-folder-header-box",children:[a.jsx("div",{className:"viewer-folder-icon-circle",children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:[p.folderName||"Shared Folder",a.jsxs("span",{className:"viewer-count-pill",children:[A.length," ",A.length===1?"Movie":"Movies"]})]}),a.jsxs("p",{className:"viewer-page-subtitle",children:[p.label&&p.label!==p.folderName?`${p.label} • `:"","Streamed directly from host Windows PC. No app download needed."]})]})]}):a.jsx("div",{className:"viewer-folder-header-box",children:a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:["Available Movies",a.jsx("span",{className:"viewer-count-pill",children:A.length})]}),a.jsx("p",{className:"viewer-page-subtitle",children:"Tap any movie to stream directly from the host computer."})]})})}),A.length===0?a.jsx("div",{className:"viewer-empty-box",children:S?"No movies found matching your search query.":"No movies currently found in this shared folder."}):a.jsx("div",{className:"movie-grid-3d",children:A.map(I=>a.jsxs("div",{className:"movie-card-3d",onClick:()=>w(I),children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:fn(`/api/movies/${I.id}/poster`),alt:I.clean_title,className:"poster-img-3d",loading:"lazy"}),a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("div",{className:"play-circle-3d",children:a.jsx(dn,{size:22,fill:"#fff",strokeWidth:0})})}),I.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",children:I.resolution}),I.year&&a.jsx("span",{className:"badge-3d badge-top-right",children:I.year})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:I.clean_title,children:I.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11})," ",fr(I.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Vi,{size:11})," ",si(I.file_size)]})]})]})]},I.id))})]})}),y&&a.jsx(rx,{movie:y,onClose:()=>w(null),onPlay:I=>{w(null),x(I)},onToggleFavorite:()=>{}})]})}const Bm=["#8B5CF6","#38BDF8","#EC4899","#10B981","#F59E0B","#6366F1"];function jy({isOpen:s,onClose:e,authFetch:t,onProfileChange:r,currentProfile:l}){const[c,d]=K.useState([]),[f,m]=K.useState(!0),[p,v]=K.useState(!1),[S,_]=K.useState(""),[y,w]=K.useState(Bm[0]),[T,x]=K.useState(""),M=()=>{m(!0),t("/api/user/profiles").then(A=>A.json()).then(A=>{d(A.profiles||[])}).catch(()=>{}).finally(()=>m(!1))};K.useEffect(()=>{s&&(M(),v(!1),x(""))},[s]);const L=async A=>{if(A.preventDefault(),!!S.trim())try{const I=await t("/api/user/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S.trim(),avatar_color:y,avatar_icon:"film"})}),P=await I.json();if(!I.ok){x(P.error||"Failed to create profile");return}_(""),v(!1),M()}catch{x("Network error creating profile")}},U=async(A,I)=>{if(window.confirm(`Delete profile "${I}"? Watchlist and history for this profile will be removed.`))try{const P=await t(`/api/user/profiles/${A}`,{method:"DELETE"}),E=await P.json();if(!P.ok){alert(E.error||"Failed to delete profile");return}M()}catch{alert("Network error deleting profile")}};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"profiles-modal-window",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(Gf,{size:16,className:"text-cyan"}),a.jsx("span",{children:"WHO'S WATCHING STREAMLINK?"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(lr,{size:18})})]}),T&&a.jsx("div",{className:"profiles-error-banner",children:T}),f?a.jsxs("div",{className:"loading-state-3d",style:{padding:"40px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading user profiles..."})]}):a.jsxs("div",{className:"profiles-grid-wrap",children:[c.map(A=>{const I=(l==null?void 0:l.id)===A.id;return a.jsxs("div",{className:`profile-card-item ${I?"active":""}`,onClick:()=>{r(A),e()},children:[a.jsxs("div",{className:"profile-avatar-circle",style:{backgroundColor:A.avatar_color||"#8B5CF6"},children:[a.jsx(tx,{size:32,color:"#FFFFFF"}),I&&a.jsx("div",{className:"active-badge-indicator",children:a.jsx(Cn,{size:12,strokeWidth:3})})]}),a.jsx("span",{className:"profile-name-label",children:A.name}),c.length>1&&a.jsx("button",{className:"profile-delete-icon",onClick:P=>{P.stopPropagation(),U(A.id,A.name)},title:"Delete profile",children:a.jsx(Wr,{size:13})})]},A.id)}),c.length<6&&!p&&a.jsxs("div",{className:"profile-card-item add-new",onClick:()=>v(!0),children:[a.jsx("div",{className:"profile-avatar-circle dashed",children:a.jsx(Hf,{size:28})}),a.jsx("span",{className:"profile-name-label",children:"Add Profile"})]})]}),p&&a.jsxs("form",{className:"create-profile-form",onSubmit:L,children:[a.jsx("h4",{children:"Create Viewer Profile"}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Profile Name (e.g. Cinema Room, Family)",value:S,onChange:A=>_(A.target.value),autoFocus:!0,maxLength:24,required:!0}),a.jsxs("div",{className:"color-picker-row",children:[a.jsx("span",{className:"text-xs text-dim",children:"Avatar Glow Color:"}),a.jsx("div",{className:"colors-list",children:Bm.map(A=>a.jsx("button",{type:"button",className:`color-dot-btn ${y===A?"active":""}`,style:{backgroundColor:A},onClick:()=>w(A)},A))})]}),a.jsxs("div",{className:"form-actions-row",children:[a.jsx("button",{type:"submit",className:"btn-primary btn-sm",children:"Save Profile"}),a.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>v(!1),children:"Cancel"})]})]})]})}):null}const kt={HIGH:"high",MEDIUM:"medium",LOW:"low",REDUCED_MOTION:"reduced_motion"};class By{constructor(){if(this.mode="auto",this.currentLevel=kt.HIGH,this.fps=60,this.frameTimes=[],this.lastTime=performance.now(),this.listeners=new Set,this.consecutiveLowFrames=0,this.consecutiveHighFrames=0,this.isWebGLAvailable=this.checkWebGLSupport(),typeof window<"u"&&window.matchMedia&&(this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.reducedMotionQuery.matches&&(this.currentLevel=kt.REDUCED_MOTION),this.reducedMotionQuery.addEventListener("change",e=>{e.matches&&this.mode==="auto"&&this.setQualityLevel(kt.REDUCED_MOTION)})),typeof window<"u"){const e=localStorage.getItem("streamlink_cine3d_quality");e&&["auto","high","medium","low","reduced_motion"].includes(e)&&(this.mode=e,e!=="auto"&&(this.currentLevel=e))}!this.isWebGLAvailable&&this.currentLevel!==kt.REDUCED_MOTION&&(this.currentLevel=kt.LOW)}checkWebGLSupport(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}setMode(e){var t;this.mode=e,typeof window<"u"&&localStorage.setItem("streamlink_cine3d_quality",e),e==="auto"?this.currentLevel=(t=this.reducedMotionQuery)!=null&&t.matches?kt.REDUCED_MOTION:kt.HIGH:this.currentLevel=e,this.notifyListeners()}setQualityLevel(e){this.currentLevel!==e&&(this.currentLevel=e,this.notifyListeners())}onFrame(){if(this.mode!=="auto"||!this.isWebGLAvailable)return;const e=performance.now(),t=e-this.lastTime;if(this.lastTime=e,t>0){const r=1e3/t;this.frameTimes.push(r),this.frameTimes.length>45&&this.frameTimes.shift();const l=this.frameTimes.reduce((c,d)=>c+d,0)/this.frameTimes.length;this.fps=Math.round(l),l<28?(this.consecutiveLowFrames++,this.consecutiveHighFrames=0,this.consecutiveLowFrames>90&&(this.currentLevel===kt.HIGH?this.setQualityLevel(kt.MEDIUM):this.currentLevel===kt.MEDIUM&&this.setQualityLevel(kt.LOW),this.consecutiveLowFrames=0)):l>52&&(this.consecutiveHighFrames++,this.consecutiveLowFrames=0,this.consecutiveHighFrames>180&&(this.currentLevel===kt.MEDIUM&&this.setQualityLevel(kt.HIGH),this.consecutiveHighFrames=0))}}subscribe(e){return this.listeners.add(e),e(this.currentLevel,this.mode,this.fps),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLevel,this.mode,this.fps))}}const $n=new By;function Hy({isOpen:s,onClose:e,ambientEnabled:t,onToggleAmbient:r}){const[l,c]=K.useState($n.mode),[d,f]=K.useState($n.currentLevel),[m,p]=K.useState($n.fps);K.useEffect(()=>$n.subscribe((S,_,y)=>{f(S),c(_),p(y)}),[]);const v=S=>{$n.setMode(S),c(S)};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"quality-modal-window",onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(ex,{size:16,className:"text-cyan"}),a.jsx("span",{children:"CINE-3D GRAPHICS & PERFORMANCE"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(lr,{size:18})})]}),a.jsxs("div",{className:"quality-stats-banner",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"RENDER QUALITY"}),a.jsx("span",{className:"stat-val text-cyan",children:d.toUpperCase()})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"REAL-TIME FPS"}),a.jsxs("span",{className:"stat-val",children:[m>0?m:60," FPS"]})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"WEBGL 2.0"}),a.jsx("span",{className:"stat-val text-violet",children:$n.isWebGLAvailable?"ACTIVE":"FALLBACK"})]})]}),a.jsxs("div",{className:"quality-options-list",children:[a.jsxs("div",{className:`quality-option-card ${l==="auto"?"active":""}`,onClick:()=>v("auto"),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(nx,{size:16,className:"text-cyan"}),a.jsx("strong",{children:"Auto-Adaptive (Recommended)"})]}),a.jsx("p",{children:"Dynamically scales particle count and geometry resolution based on your GPU and display refresh rate."})]}),l==="auto"&&a.jsx(Cn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===kt.HIGH?"active":""}`,onClick:()=>v(kt.HIGH),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Bf,{size:16,className:"text-violet"}),a.jsx("strong",{children:"High Fidelity"})]}),a.jsx("p",{children:"Full 3D cinematic scene, high particle counts, procedural lighting, and soft shadows."})]}),l===kt.HIGH&&a.jsx(Cn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===kt.MEDIUM?"active":""}`,onClick:()=>v(kt.MEDIUM),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(qg,{size:16,className:"text-muted"}),a.jsx("strong",{children:"Balanced"})]}),a.jsx("p",{children:"Optimized for laptops and integrated graphics. Streamlined particles and lighting."})]}),l===kt.MEDIUM&&a.jsx(Cn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===kt.LOW?"active":""}`,onClick:()=>v(kt.LOW),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Zg,{size:16,className:"text-dim"}),a.jsx("strong",{children:"Low / 2D Canvas Mode"})]}),a.jsx("p",{children:"Disables heavy WebGL loops; uses lightweight CSS 3D perspective. Ideal for battery saving or older devices."})]}),l===kt.LOW&&a.jsx(Cn,{size:18,className:"text-cyan"})]})]}),a.jsxs("div",{className:"ambient-switch-row",children:[a.jsxs("div",{className:"ambient-switch-text",children:[a.jsx("strong",{children:"Ambient Cinema Glow"}),a.jsx("p",{className:"text-xs text-dim",children:"Projects subtle dynamic ambient color glows matching movie artwork."})]}),a.jsx("button",{className:`toggle-switch-pill ${t?"on":"off"}`,onClick:r,children:a.jsx("div",{className:"toggle-handle"})})]}),a.jsx("div",{className:"modal-footer-actions",children:a.jsx("button",{className:"btn-primary btn-sm",onClick:e,children:"Done"})})]})}):null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Vf="187",Gy=0,Hm=1,Vy=2,sc=1,Wy=2,ro=3,ps=0,Kn=1,zi=2,oa=0,lo=1,Xd=2,Gm=3,Vm=4,Xy=5,ia=100,$y=101,qy=102,Yy=103,Ky=104,Zy=200,Qy=201,Jy=202,eS=203,sx=204,ax=205,tS=206,nS=207,iS=208,rS=209,sS=210,aS=211,oS=212,lS=213,cS=214,$d=0,qd=1,Yd=2,ho=3,Kd=4,Zd=5,Qd=6,Jd=7,ox=0,uS=1,dS=2,cr=0,lx=1,cx=2,ux=3,dx=4,fx=5,hx=6,px=7,mx=300,ua=301,po=302,pd=303,md=304,ef=1e3,or=1001,tf=1002,An=1003,fS=1004,Pl=1005,Yn=1006,gd=1007,jr=1008,ri=1009,gx=1010,xx=1011,mo=1012,Wf=1013,Wi=1014,Bi=1015,Xi=1016,Xf=1017,$f=1018,da=1020,vx=35902,_x=35899,yx=1021,Sx=1022,Hi=1023,Xr=1026,Br=1027,Mx=1028,qf=1029,ms=1030,Yf=1031,Kf=1033,ac=33776,oc=33777,lc=33778,cc=33779,nf=35840,rf=35841,sf=35842,af=35843,of=36196,lf=37492,cf=37496,uf=37488,df=37489,gc=37490,ff=37491,hf=37808,pf=37809,mf=37810,gf=37811,xf=37812,vf=37813,_f=37814,yf=37815,Sf=37816,Mf=37817,Ef=37818,wf=37819,Tf=37820,bf=37821,Cf=36492,Af=36494,Nf=36495,Rf=36283,Pf=36284,xc=36285,Lf=36286,hS=3200,Df=0,pS=1,zr="",hi="srgb",vc="srgb-linear",_c="linear",Vt="srgb",xd=7680,mS=519,gS=512,xS=513,vS=514,Ex=515,_S=516,yS=517,wx=518,Tx=519,SS=35044,Wm="300 es",Ci=2e3,go=2001;function MS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function ES(){const s=xo("canvas");return s.style.display="block",s}const Xm={};function $m(...s){const e="THREE."+s.shift();console.log(e,...s)}function bx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=bx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function jt(...s){s=bx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function uc(...s){const e=s.join(" ");e in Xm||(Xm[e]=!0,pt(...s))}function wS(s,e,t){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const TS={[$d]:$d,[Yd]:Qd,[Kd]:Kd,[ho]:Zd,[qd]:qd,[Qd]:Yd,[Jd]:Jd,[Zd]:ho};class xs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,yc=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Un[s&255]+Un[s>>8&255]+Un[s>>16&255]+Un[s>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]).toLowerCase()}function Dt(s,e,t){return Math.max(e,Math.min(t,s))}function bS(s,e){return(s%e+e)%e}function _d(s,e,t){return(1-t)*s+t*e}function CS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function AS(s,e){if(e.constructor===Float32Array)return s;const t=Zf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function NS(s,e){if(e.constructor===Float32Array)return s;const t=Zf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const rh=class rh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6],this.y=l[1]*t+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};rh.prototype.isVector2=!0;let It=rh;class pa{constructor(e=0,t=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=l}static slerpFlat(e,t,r,l,c,d,f){let m=r[l+0],p=r[l+1],v=r[l+2],S=r[l+3],_=c[d+0],y=c[d+1],w=c[d+2],T=c[d+3];if(S!==T||m!==_||p!==y||v!==w){let x=m*_+p*y+v*w+S*T;x<0&&(_=-_,y=-y,w=-w,T=-T,x=-x);let M=1-f;if(x<.9995){const L=Math.acos(x),U=Math.sin(L);M=Math.sin(M*L)/U,f=Math.sin(f*L)/U,m=m*M+_*f,p=p*M+y*f,v=v*M+w*f,S=S*M+T*f}else{m=m*M+_*f,p=p*M+y*f,v=v*M+w*f,S=S*M+T*f;const L=1/Math.sqrt(m*m+p*p+v*v+S*S);m*=L,p*=L,v*=L,S*=L}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,l,c,d){const f=r[l],m=r[l+1],p=r[l+2],v=r[l+3],S=c[d],_=c[d+1],y=c[d+2],w=c[d+3];return e[t]=f*w+v*S+m*y-p*_,e[t+1]=m*w+v*_+p*S-f*y,e[t+2]=p*w+v*y+f*_-m*S,e[t+3]=v*w-f*S-m*_-p*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,l){return this._x=e,this._y=t,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,l=e._y,c=e._z,d=e._order,f=Math.cos,m=Math.sin,p=f(r/2),v=f(l/2),S=f(c/2),_=m(r/2),y=m(l/2),w=m(c/2);switch(d){case"XYZ":this._x=_*v*S+p*y*w,this._y=p*y*S-_*v*w,this._z=p*v*w+_*y*S,this._w=p*v*S-_*y*w;break;case"YXZ":this._x=_*v*S+p*y*w,this._y=p*y*S-_*v*w,this._z=p*v*w-_*y*S,this._w=p*v*S+_*y*w;break;case"ZXY":this._x=_*v*S-p*y*w,this._y=p*y*S+_*v*w,this._z=p*v*w+_*y*S,this._w=p*v*S-_*y*w;break;case"ZYX":this._x=_*v*S-p*y*w,this._y=p*y*S+_*v*w,this._z=p*v*w-_*y*S,this._w=p*v*S+_*y*w;break;case"YZX":this._x=_*v*S+p*y*w,this._y=p*y*S+_*v*w,this._z=p*v*w-_*y*S,this._w=p*v*S-_*y*w;break;case"XZY":this._x=_*v*S-p*y*w,this._y=p*y*S-_*v*w,this._z=p*v*w+_*y*S,this._w=p*v*S+_*y*w;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],l=t[4],c=t[8],d=t[1],f=t[5],m=t[9],p=t[2],v=t[6],S=t[10],_=r+f+S;if(_>0){const y=.5/Math.sqrt(_+1);this._w=.25/y,this._x=(v-m)*y,this._y=(c-p)*y,this._z=(d-l)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(v-m)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+p)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(c-p)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(m+v)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(d-l)/y,this._x=(c+p)/y,this._y=(m+v)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,t/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,l=e._y,c=e._z,d=e._w,f=t._x,m=t._y,p=t._z,v=t._w;return this._x=r*v+d*f+l*p-c*m,this._y=l*v+d*m+c*f-r*p,this._z=c*v+d*p+r*m-l*f,this._w=d*v-r*f-l*m-c*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,l=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,l=-l,c=-c,d=-d,f=-f);let m=1-t;if(f<.9995){const p=Math.acos(f),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+r*t,this._y=this._y*m+l*t,this._z=this._z*m+c*t,this._w=this._w*m+d*t,this._onChangeCallback()}else this._x=this._x*m+r*t,this._y=this._y*m+l*t,this._z=this._z*m+c*t,this._w=this._w*m+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const sh=class sh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(qm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(qm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*l,this.y=c[1]*t+c[4]*r+c[7]*l,this.z=c[2]*t+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,l=this.z,c=e.x,d=e.y,f=e.z,m=e.w,p=2*(d*l-f*r),v=2*(f*t-c*l),S=2*(c*r-d*t);return this.x=t+m*p+d*S-f*v,this.y=r+m*v+f*p-c*S,this.z=l+m*S+c*v-d*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*l,this.y=c[1]*t+c[5]*r+c[9]*l,this.z=c[2]*t+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,l=e.y,c=e.z,d=t.x,f=t.y,m=t.z;return this.x=l*m-c*f,this.y=c*d-r*m,this.z=r*f-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Dt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return t*t+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const l=Math.sin(t)*e;return this.x=l*Math.sin(r),this.y=Math.cos(t)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};sh.prototype.isVector3=!0;let de=sh;const yd=new de,qm=new pa,ah=class ah{constructor(e,t,r,l,c,d,f,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,m,p)}set(e,t,r,l,c,d,f,m,p){const v=this.elements;return v[0]=e,v[1]=l,v[2]=f,v[3]=t,v[4]=c,v[5]=m,v[6]=r,v[7]=d,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[3],m=r[6],p=r[1],v=r[4],S=r[7],_=r[2],y=r[5],w=r[8],T=l[0],x=l[3],M=l[6],L=l[1],U=l[4],A=l[7],I=l[2],P=l[5],E=l[8];return c[0]=d*T+f*L+m*I,c[3]=d*x+f*U+m*P,c[6]=d*M+f*A+m*E,c[1]=p*T+v*L+S*I,c[4]=p*x+v*U+S*P,c[7]=p*M+v*A+S*E,c[2]=_*T+y*L+w*I,c[5]=_*x+y*U+w*P,c[8]=_*M+y*A+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],v=e[8];return t*d*v-t*f*p-r*c*v+r*f*m+l*c*p-l*d*m}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],v=e[8],S=v*d-f*p,_=f*m-v*c,y=p*c-d*m,w=t*S+r*_+l*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=S*T,e[1]=(l*p-v*r)*T,e[2]=(f*r-l*d)*T,e[3]=_*T,e[4]=(v*t-l*m)*T,e[5]=(l*c-f*t)*T,e[6]=y*T,e[7]=(r*m-p*t)*T,e[8]=(d*t-r*c)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,l,c,d,f){const m=Math.cos(c),p=Math.sin(c);return this.set(r*m,r*p,-r*(m*d+p*f)+d+e,-l*p,l*m,-l*(-p*d+m*f)+f+t,0,0,1),this}scale(e,t){return uc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,t)),this}rotate(e){return uc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,t){return uc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<9;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};ah.prototype.isMatrix3=!0;let yt=ah;const Sd=new yt,Ym=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Km=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function RS(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=ur(l.r),l.g=ur(l.g),l.b=ur(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===zr?_c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:Ym,fromXYZ:Km,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Ym,fromXYZ:Km,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Lt=RS();function ur(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Vs;class PS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Vs===void 0&&(Vs=xo("canvas")),Vs.width=e.width,Vs.height=e.height;const l=Vs.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Vs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=ur(c[d]/255)*255;return r.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(ur(t[r]/255)*255):t[r]=ur(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let LS=0;class Qf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:LS++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?c.push(Md(l[d].image)):c.push(Md(l[d]))}else c=Md(l);r.url=c}return t||(e.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?PS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}let DS=0;const Ed=new de;class Nn extends xs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=or,l=or,c=Yn,d=jr,f=Hi,m=ri,p=Nn.DEFAULT_ANISOTROPY,v=zr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DS++}),this.uuid=_o(),this.name="",this.source=new Qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=m,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case or:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case or:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=mx;Nn.DEFAULT_ANISOTROPY=1;const oh=class oh{constructor(e=0,t=0,r=0,l=1){this.x=e,this.y=t,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,l){return this.x=e,this.y=t,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,l,c;const m=e.elements,p=m[0],v=m[4],S=m[8],_=m[1],y=m[5],w=m[9],T=m[2],x=m[6],M=m[10];if(Math.abs(v-_)<.01&&Math.abs(S-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(v+_)<.1&&Math.abs(S+T)<.1&&Math.abs(w+x)<.1&&Math.abs(p+y+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,A=(y+1)/2,I=(M+1)/2,P=(v+_)/4,E=(S+T)/4,D=(w+x)/4;return U>A&&U>I?U<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(U),l=P/r,c=E/r):A>I?A<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),r=P/l,c=D/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=E/c,l=D/c),this.set(r,l,c,t),this}let L=Math.sqrt((x-w)*(x-w)+(S-T)*(S-T)+(_-v)*(_-v));return Math.abs(L)<.001&&(L=1),this.x=(x-w)/L,this.y=(S-T)/L,this.z=(_-v)/L,this.w=Math.acos((p+y+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Dt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};oh.prototype.isVector4=!0;let rn=oh;class IS extends xs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=new Nn({width:e,height:t,depth:r.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const l=Object.assign({},e.textures[t].image);this.textures[t].source=new Qf(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends IS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Cx extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class US extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=or,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Tc=class Tc{constructor(e,t,r,l,c,d,f,m,p,v,S,_,y,w,T,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,m,p,v,S,_,y,w,T,x)}set(e,t,r,l,c,d,f,m,p,v,S,_,y,w,T,x){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=l,M[1]=c,M[5]=d,M[9]=f,M[13]=m,M[2]=p,M[6]=v,M[10]=S,M[14]=_,M[3]=y,M[7]=w,M[11]=T,M[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Tc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,l=1/Ws.setFromMatrixColumn(e,0).length(),c=1/Ws.setFromMatrixColumn(e,1).length(),d=1/Ws.setFromMatrixColumn(e,2).length();return t[0]=r[0]*l,t[1]=r[1]*l,t[2]=r[2]*l,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),m=Math.cos(l),p=Math.sin(l),v=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const _=d*v,y=d*S,w=f*v,T=f*S;t[0]=m*v,t[4]=-m*S,t[8]=p,t[1]=y+w*p,t[5]=_-T*p,t[9]=-f*m,t[2]=T-_*p,t[6]=w+y*p,t[10]=d*m}else if(e.order==="YXZ"){const _=m*v,y=m*S,w=p*v,T=p*S;t[0]=_+T*f,t[4]=w*f-y,t[8]=d*p,t[1]=d*S,t[5]=d*v,t[9]=-f,t[2]=y*f-w,t[6]=T+_*f,t[10]=d*m}else if(e.order==="ZXY"){const _=m*v,y=m*S,w=p*v,T=p*S;t[0]=_-T*f,t[4]=-d*S,t[8]=w+y*f,t[1]=y+w*f,t[5]=d*v,t[9]=T-_*f,t[2]=-d*p,t[6]=f,t[10]=d*m}else if(e.order==="ZYX"){const _=d*v,y=d*S,w=f*v,T=f*S;t[0]=m*v,t[4]=w*p-y,t[8]=_*p+T,t[1]=m*S,t[5]=T*p+_,t[9]=y*p-w,t[2]=-p,t[6]=f*m,t[10]=d*m}else if(e.order==="YZX"){const _=d*m,y=d*p,w=f*m,T=f*p;t[0]=m*v,t[4]=T-_*S,t[8]=w*S+y,t[1]=S,t[5]=d*v,t[9]=-f*v,t[2]=-p*v,t[6]=y*S+w,t[10]=_-T*S}else if(e.order==="XZY"){const _=d*m,y=d*p,w=f*m,T=f*p;t[0]=m*v,t[4]=-S,t[8]=p*v,t[1]=_*S+T,t[5]=d*v,t[9]=y*S-w,t[2]=w*S-y,t[6]=f*v,t[10]=T*S+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(kS,e,FS)}lookAt(e,t,r){const l=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Pr.crossVectors(r,ni),Pr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Pr.crossVectors(r,ni)),Pr.normalize(),Ll.crossVectors(ni,Pr),l[0]=Pr.x,l[4]=Ll.x,l[8]=ni.x,l[1]=Pr.y,l[5]=Ll.y,l[9]=ni.y,l[2]=Pr.z,l[6]=Ll.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[4],m=r[8],p=r[12],v=r[1],S=r[5],_=r[9],y=r[13],w=r[2],T=r[6],x=r[10],M=r[14],L=r[3],U=r[7],A=r[11],I=r[15],P=l[0],E=l[4],D=l[8],J=l[12],O=l[1],H=l[5],ee=l[9],re=l[13],z=l[2],V=l[6],ne=l[10],F=l[14],$=l[3],W=l[7],Q=l[11],k=l[15];return c[0]=d*P+f*O+m*z+p*$,c[4]=d*E+f*H+m*V+p*W,c[8]=d*D+f*ee+m*ne+p*Q,c[12]=d*J+f*re+m*F+p*k,c[1]=v*P+S*O+_*z+y*$,c[5]=v*E+S*H+_*V+y*W,c[9]=v*D+S*ee+_*ne+y*Q,c[13]=v*J+S*re+_*F+y*k,c[2]=w*P+T*O+x*z+M*$,c[6]=w*E+T*H+x*V+M*W,c[10]=w*D+T*ee+x*ne+M*Q,c[14]=w*J+T*re+x*F+M*k,c[3]=L*P+U*O+A*z+I*$,c[7]=L*E+U*H+A*V+I*W,c[11]=L*D+U*ee+A*ne+I*Q,c[15]=L*J+U*re+A*F+I*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[12],d=e[1],f=e[5],m=e[9],p=e[13],v=e[2],S=e[6],_=e[10],y=e[14],w=e[3],T=e[7],x=e[11],M=e[15],L=m*y-p*_,U=f*y-p*S,A=f*_-m*S,I=d*y-p*v,P=d*_-m*v,E=d*S-f*v;return t*(T*L-x*U+M*A)-r*(w*L-x*I+M*P)+l*(w*U-T*I+M*E)-c*(w*A-T*P+x*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[1],d=e[5],f=e[9],m=e[2],p=e[6],v=e[10];return t*(d*v-f*p)-r*(c*v-f*m)+l*(c*p-d*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],m=e[6],p=e[7],v=e[8],S=e[9],_=e[10],y=e[11],w=e[12],T=e[13],x=e[14],M=e[15],L=t*f-r*d,U=t*m-l*d,A=t*p-c*d,I=r*m-l*f,P=r*p-c*f,E=l*p-c*m,D=v*T-S*w,J=v*x-_*w,O=v*M-y*w,H=S*x-_*T,ee=S*M-y*T,re=_*M-y*x,z=L*re-U*ee+A*H+I*O-P*J+E*D;if(z===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const V=1/z;return e[0]=(f*re-m*ee+p*H)*V,e[1]=(l*ee-r*re-c*H)*V,e[2]=(T*E-x*P+M*I)*V,e[3]=(_*P-S*E-y*I)*V,e[4]=(m*O-d*re-p*J)*V,e[5]=(t*re-l*O+c*J)*V,e[6]=(x*A-w*E-M*U)*V,e[7]=(v*E-_*A+y*U)*V,e[8]=(d*ee-f*O+p*D)*V,e[9]=(r*O-t*ee-c*D)*V,e[10]=(w*P-T*A+M*L)*V,e[11]=(S*A-v*P-y*L)*V,e[12]=(f*J-d*H-m*D)*V,e[13]=(t*H-r*J+l*D)*V,e[14]=(T*U-w*I-x*L)*V,e[15]=(v*I-S*U+_*L)*V,this}scale(e){const t=this.elements,r=e.x,l=e.y,c=e.z;return t[0]*=r,t[4]*=l,t[8]*=c,t[1]*=r,t[5]*=l,t[9]*=c,t[2]*=r,t[6]*=l,t[10]*=c,t[3]*=r,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,l))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),l=Math.sin(t),c=1-r,d=e.x,f=e.y,m=e.z,p=c*d,v=c*f;return this.set(p*d+r,p*f-l*m,p*m+l*f,0,p*f+l*m,v*f+r,v*m-l*d,0,p*m-l*f,v*m+l*d,c*m*m+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,r){const l=this.elements,c=t._x,d=t._y,f=t._z,m=t._w,p=c+c,v=d+d,S=f+f,_=c*p,y=c*v,w=c*S,T=d*v,x=d*S,M=f*S,L=m*p,U=m*v,A=m*S,I=r.x,P=r.y,E=r.z;return l[0]=(1-(T+M))*I,l[1]=(y+A)*I,l[2]=(w-U)*I,l[3]=0,l[4]=(y-A)*P,l[5]=(1-(_+M))*P,l[6]=(x+L)*P,l[7]=0,l[8]=(w+U)*E,l[9]=(x-L)*E,l[10]=(1-(_+T))*E,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),t.identity(),this;let d=Ws.set(l[0],l[1],l[2]).length();const f=Ws.set(l[4],l[5],l[6]).length(),m=Ws.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Mi.copy(this);const p=1/d,v=1/f,S=1/m;return Mi.elements[0]*=p,Mi.elements[1]*=p,Mi.elements[2]*=p,Mi.elements[4]*=v,Mi.elements[5]*=v,Mi.elements[6]*=v,Mi.elements[8]*=S,Mi.elements[9]*=S,Mi.elements[10]*=S,t.setFromRotationMatrix(Mi),r.x=d,r.y=f,r.z=m,this}makePerspective(e,t,r,l,c,d,f=Ci,m=!1){const p=this.elements,v=2*c/(t-e),S=2*c/(r-l),_=(t+e)/(t-e),y=(r+l)/(r-l);let w,T;if(m)w=c/(d-c),T=d*c/(d-c);else if(f===Ci)w=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(f===go)w=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=S,p[9]=y,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,l,c,d,f=Ci,m=!1){const p=this.elements,v=2/(t-e),S=2/(r-l),_=-(t+e)/(t-e),y=-(r+l)/(r-l);let w,T;if(m)w=1/(d-c),T=d/(d-c);else if(f===Ci)w=-2/(d-c),T=-(d+c)/(d-c);else if(f===go)w=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=S,p[9]=0,p[13]=y,p[2]=0,p[6]=0,p[10]=w,p[14]=T,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<16;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};Tc.prototype.isMatrix4=!0;let $t=Tc;const Ws=new de,Mi=new $t,kS=new de(0,0,0),FS=new de(1,1,1),Pr=new de,Ll=new de,ni=new de,Zm=new $t,Qm=new pa;class $r{constructor(e=0,t=0,r=0,l=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,l=this._order){return this._x=e,this._y=t,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],f=l[8],m=l[1],p=l[5],v=l[9],S=l[2],_=l[6],y=l[10];switch(t){case"XYZ":this._y=Math.asin(Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-d,p)):(this._y=0,this._z=Math.atan2(m,c));break;case"ZYX":this._y=Math.asin(-Dt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(_,y),this._z=Math.atan2(m,c)):(this._x=0,this._z=Math.atan2(-d,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,y),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Zm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Qm.setFromEuler(this),this.setFromQuaternion(Qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class Jf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let OS=0;const Jm=new de,Xs=new pa,nr=new $t,Dl=new de,Qa=new de,zS=new de,jS=new pa,eg=new de(1,0,0),tg=new de(0,1,0),ng=new de(0,0,1),ig={type:"added"},BS={type:"removed"},$s={type:"childadded",child:null},wd={type:"childremoved",child:null};class wn extends xs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:OS++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new de,t=new $r,r=new pa,l=new de(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new $t},normalMatrix:{value:new yt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Jf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.multiply(Xs),this}rotateOnWorldAxis(e,t){return Xs.setFromAxisAngle(e,t),this.quaternion.premultiply(Xs),this}rotateX(e){return this.rotateOnAxis(eg,e)}rotateY(e){return this.rotateOnAxis(tg,e)}rotateZ(e){return this.rotateOnAxis(ng,e)}translateOnAxis(e,t){return Jm.copy(e).applyQuaternion(this.quaternion),this.position.add(Jm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(eg,e)}translateY(e){return this.translateOnAxis(tg,e)}translateZ(e){return this.translateOnAxis(ng,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(nr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?nr.lookAt(Qa,Dl,this.up):nr.lookAt(Dl,Qa,this.up),this.quaternion.setFromRotationMatrix(nr),l&&(nr.extractRotation(l.matrixWorld),Xs.setFromRotationMatrix(nr),this.quaternion.premultiply(Xs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(jt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ig),$s.child=e,this.dispatchEvent($s),$s.child=null):jt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(BS),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),nr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),nr.multiply(e.parent.matrixWorld)),e.applyMatrix4(nr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ig),$s.child=e,this.dispatchEvent($s),$s.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,zS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,jS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*l,c[13]+=r-c[1]*t-c[5]*r-c[9]*l,c[14]+=l-c[2]*t-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(f=>({...f})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(f,m){return f[m.uuid]===void 0&&(f[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const m=f.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const S=m[p];c(e.shapes,S)}else c(e.shapes,m)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let m=0,p=this.material.length;m<p;m++)f.push(c(e.materials,this.material[m]));l.material=f}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const m=this.animations[f];l.animations.push(c(e.animations,m))}}if(t){const f=d(e.geometries),m=d(e.materials),p=d(e.textures),v=d(e.images),S=d(e.shapes),_=d(e.skeletons),y=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),m.length>0&&(r.materials=m),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),S.length>0&&(r.shapes=S),_.length>0&&(r.skeletons=_),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(f){const m=[];for(const p in f){const v=f[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}wn.DEFAULT_UP=new de(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class ra extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const HS={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ra,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ra,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ra,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let l=null,c=null,d=null;const f=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){d=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,r),M=this._getHandJoint(p,T);x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=x.radius),M.visible=x!==null}const v=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],_=v.position.distanceTo(S.position),y=.02,w=.005;p.inputState.pinching&&_>y+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=y-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(m.matrix.fromArray(c.transform.matrix),m.matrix.decompose(m.position,m.quaternion,m.scale),m.matrixWorldNeedsUpdate=!0,c.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(c.linearVelocity)):m.hasLinearVelocity=!1,c.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(c.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(l=t.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(HS)))}return f!==null&&(f.visible=l!==null),m!==null&&(m.visible=c!==null),p!==null&&(p.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new ra;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ax={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Lr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function bd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Mt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,l=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Lt.colorSpaceToWorking(this,l),this}setHSL(e,t,r,l=Lt.workingColorSpace){if(e=bS(e,1),t=Dt(t,0,1),r=Dt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=bd(d,c,e+1/3),this.g=bd(d,c,e),this.b=bd(d,c,e-1/3)}return Lt.colorSpaceToWorking(this,l),this}setStyle(e,t=hi){function r(c){c!==void 0&&parseFloat(c)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,t);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=Ax[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ur(e.r),this.g=ur(e.g),this.b=ur(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Lt.workingToColorSpace(kn.copy(this),e),Math.round(Dt(kn.r*255,0,255))*65536+Math.round(Dt(kn.g*255,0,255))*256+Math.round(Dt(kn.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(kn.copy(this),t);const r=kn.r,l=kn.g,c=kn.b,d=Math.max(r,l,c),f=Math.min(r,l,c);let m,p;const v=(f+d)/2;if(f===d)m=0,p=0;else{const S=d-f;switch(p=v<=.5?S/(d+f):S/(2-d-f),d){case r:m=(l-c)/S+(l<c?6:0);break;case l:m=(c-r)/S+2;break;case c:m=(r-l)/S+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(kn.copy(this),t),e.r=kn.r,e.g=kn.g,e.b=kn.b,e}getStyle(e=hi){Lt.workingToColorSpace(kn.copy(this),e);const t=kn.r,r=kn.g,l=kn.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,t,r){return this.getHSL(Lr),this.setHSL(Lr.h+e,Lr.s+t,Lr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Lr),e.getHSL(Il);const r=_d(Lr.h,Il.h,t),l=_d(Lr.s,Il.s,t),c=_d(Lr.l,Il.l,t);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*l,this.g=c[1]*t+c[4]*r+c[7]*l,this.b=c[2]*t+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const kn=new Mt;Mt.NAMES=Ax;class Ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Mt(e),this.density=t}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Nx extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ei=new de,ir=new de,Cd=new de,rr=new de,qs=new de,Ys=new de,rg=new de,Ad=new de,Nd=new de,Rd=new de,Pd=new rn,Ld=new rn,Dd=new rn;class Ti{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,l){l.subVectors(r,t),Ei.subVectors(e,t),l.cross(Ei);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,r,l,c){Ei.subVectors(l,t),ir.subVectors(r,t),Cd.subVectors(e,t);const d=Ei.dot(Ei),f=Ei.dot(ir),m=Ei.dot(Cd),p=ir.dot(ir),v=ir.dot(Cd),S=d*p-f*f;if(S===0)return c.set(0,0,0),null;const _=1/S,y=(p*m-f*v)*_,w=(d*v-f*m)*_;return c.set(1-y-w,w,y)}static containsPoint(e,t,r,l){return this.getBarycoord(e,t,r,l,rr)===null?!1:rr.x>=0&&rr.y>=0&&rr.x+rr.y<=1}static getInterpolation(e,t,r,l,c,d,f,m){return this.getBarycoord(e,t,r,l,rr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(c,rr.x),m.addScaledVector(d,rr.y),m.addScaledVector(f,rr.z),m)}static getInterpolatedAttribute(e,t,r,l,c,d){return Pd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Pd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Pd,c.x),d.addScaledVector(Ld,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,t,r,l){return Ei.subVectors(r,t),ir.subVectors(e,t),Ei.cross(ir).dot(l)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,l){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,r,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ei.subVectors(this.c,this.b),ir.subVectors(this.a,this.b),Ei.cross(ir).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,l=this.b,c=this.c;let d,f;qs.subVectors(l,r),Ys.subVectors(c,r),Ad.subVectors(e,r);const m=qs.dot(Ad),p=Ys.dot(Ad);if(m<=0&&p<=0)return t.copy(r);Nd.subVectors(e,l);const v=qs.dot(Nd),S=Ys.dot(Nd);if(v>=0&&S<=v)return t.copy(l);const _=m*S-v*p;if(_<=0&&m>=0&&v<=0&&m-v>0)return d=m/(m-v),t.copy(r).addScaledVector(qs,d);Rd.subVectors(e,c);const y=qs.dot(Rd),w=Ys.dot(Rd);if(w>=0&&y<=w)return t.copy(c);const T=y*p-m*w;if(T<=0&&p>=0&&w<=0)return f=p/(p-w),t.copy(r).addScaledVector(Ys,f);const x=v*w-y*S;if(x<=0&&S-v>=0&&y-w>=0)return rg.subVectors(c,l),f=(S-v)/(S-v+(y-w)),t.copy(l).addScaledVector(rg,f);const M=1/(x+T+_);return d=T*M,f=_*M,t.copy(r).addScaledVector(qs,d).addScaledVector(Ys,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yo{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(wi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(wi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=wi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,wi):wi.fromBufferAttribute(c,d),wi.applyMatrix4(e.matrixWorld),this.expandByPoint(wi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,wi),wi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),kl.subVectors(this.max,Ja),Ks.subVectors(e.a,Ja),Zs.subVectors(e.b,Ja),Qs.subVectors(e.c,Ja),Dr.subVectors(Zs,Ks),Ir.subVectors(Qs,Zs),ls.subVectors(Ks,Qs);let t=[0,-Dr.z,Dr.y,0,-Ir.z,Ir.y,0,-ls.z,ls.y,Dr.z,0,-Dr.x,Ir.z,0,-Ir.x,ls.z,0,-ls.x,-Dr.y,Dr.x,0,-Ir.y,Ir.x,0,-ls.y,ls.x,0];return!Id(t,Ks,Zs,Qs,kl)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,Ks,Zs,Qs,kl))?!1:(Fl.crossVectors(Dr,Ir),t=[Fl.x,Fl.y,Fl.z],Id(t,Ks,Zs,Qs,kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(wi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(sr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),sr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),sr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),sr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),sr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),sr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),sr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),sr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(sr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const sr=[new de,new de,new de,new de,new de,new de,new de,new de],wi=new de,Ul=new yo,Ks=new de,Zs=new de,Qs=new de,Dr=new de,Ir=new de,ls=new de,Ja=new de,kl=new de,Fl=new de,cs=new de;function Id(s,e,t,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){cs.fromArray(s,c);const f=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),m=e.dot(cs),p=t.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>f)return!1}return!0}const un=new de,Ol=new It;let GS=0;class dr extends xs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:GS++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=SS,this.updateRanges=[],this.gpuType=Bi,this.version=0,this._normalizationScale=e!==void 0?Zf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,t,r,l,c){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l),c=this._normalize(c)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):AS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):NS(e,this.array)}}class Rx extends dr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Px extends dr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends dr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const VS=new yo,eo=new de,Ud=new de;class So{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):VS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),l=(r-this.radius)*.5;this.center.addScaledVector(eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ud)),this.expandByPoint(eo.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let WS=0;const fi=new $t,kd=new wn,Js=new de,ii=new yo,to=new yo,En=new de;class pi extends xs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:WS++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(MS(e)?Px:Rx)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new yt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return kd.lookAt(e),kd.updateMatrix(),this.applyMatrix4(kd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Js).negate(),this.translate(Js.x,Js.y,Js.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let l=0;l<r;l++){const c=e[l];t.setXYZ(l,c.x,c.y,c.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const c=t[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&jt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){jt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const f=t[c];to.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ii.min,to.min),ii.expandByPoint(En),En.addVectors(ii.max,to.max),ii.expandByPoint(En)):(ii.expandByPoint(to.min),ii.expandByPoint(to.max))}ii.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(t)for(let c=0,d=t.length;c<d;c++){const f=t[c],m=this.morphTargetsRelative;for(let p=0,v=f.count;p<v;p++)En.fromBufferAttribute(f,p),m&&(Js.fromBufferAttribute(e,p),En.add(Js)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&jt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){jt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,l=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new dr(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],m=[],p=new Uint8Array(r.count);for(let J=0;J<r.count;J++)f[J]=new de,m[J]=new de;const v=new de,S=new de,_=new de,y=new It,w=new It,T=new It,x=new de,M=new de;function L(J,O,H){p[J]=p[O]=p[H]=1,v.fromBufferAttribute(r,J),S.fromBufferAttribute(r,O),_.fromBufferAttribute(r,H),y.fromBufferAttribute(c,J),w.fromBufferAttribute(c,O),T.fromBufferAttribute(c,H),S.sub(v),_.sub(v),w.sub(y),T.sub(y);const ee=1/(w.x*T.y-T.x*w.y);isFinite(ee)&&(x.copy(S).multiplyScalar(T.y).addScaledVector(_,-w.y).multiplyScalar(ee),M.copy(_).multiplyScalar(w.x).addScaledVector(S,-T.x).multiplyScalar(ee),f[J].add(x),f[O].add(x),f[H].add(x),m[J].add(M),m[O].add(M),m[H].add(M))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let J=0,O=U.length;J<O;++J){const H=U[J],ee=H.start,re=H.count;for(let z=ee,V=ee+re;z<V;z+=3)L(e.getX(z+0),e.getX(z+1),e.getX(z+2))}const A=new de,I=new de,P=new de,E=new de;function D(J){P.fromBufferAttribute(l,J),E.copy(P);const O=f[J];A.copy(O),A.sub(P.multiplyScalar(P.dot(O))).normalize(),I.crossVectors(E,O);const ee=I.dot(m[J])<0?-1:1;d.setXYZW(J,A.x,A.y,A.z,ee)}for(let J=0,O=r.count;J<O;++J)p[J]&&D(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new dr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,y=r.count;_<y;_++)r.setXYZ(_,0,0,0);const l=new de,c=new de,d=new de,f=new de,m=new de,p=new de,v=new de,S=new de;if(e)for(let _=0,y=e.count;_<y;_+=3){const w=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,T),d.fromBufferAttribute(t,x),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),f.fromBufferAttribute(r,w),m.fromBufferAttribute(r,T),p.fromBufferAttribute(r,x),f.add(v),m.add(v),p.add(v),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(T,m.x,m.y,m.z),r.setXYZ(x,p.x,p.y,p.z)}else for(let _=0,y=t.count;_<y;_+=3)l.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),d.fromBufferAttribute(t,_+2),v.subVectors(d,c),S.subVectors(l,c),v.cross(S),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,m){const p=f.array,v=f.itemSize,S=f.normalized,_=new p.constructor(m.length*v);let y=0,w=0;for(let T=0,x=m.length;T<x;T++){f.isInterleavedBufferAttribute?y=m[T]*f.data.stride+f.offset:y=m[T]*v;for(let M=0;M<v;M++)_[w++]=p[y++]}return new dr(_,v,S)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new pi,r=this.index.array,l=this.attributes;for(const f in l){const m=l[f],p=e(m,r);t.setAttribute(f,p)}const c=this.morphAttributes;for(const f in c){const m=[],p=c[f];for(let v=0,S=p.length;v<S;v++){const _=p[v],y=e(_,r);m.push(y)}t.morphAttributes[f]=m}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,m=d.length;f<m;f++){const p=d[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const m in r){const p=r[m];e.data.attributes[m]=p.toJSON(e.data)}const l={};let c=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let S=0,_=p.length;S<_;S++){const y=p[S];v.push(y.toJSON(e.data))}v.length>0&&(l[m]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const p in l){const v=l[p];this.setAttribute(p,v.clone(t))}const c=e.morphAttributes;for(const p in c){const v=[],S=c[p];for(let _=0,y=S.length;_<y;_++)v.push(S[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let p=0,v=d.length;p<v;p++){const S=d[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new de,XS=new de,$S=new yt;class kr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,l){return this.normal.set(e,t,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const l=Fd.subVectors(r,t).cross(XS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const l=e.delta(Fd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||$S.getNormalMatrix(e),l=this.coplanarPoint(Fd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let qS=0;class vs extends xs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=lo,this.side=ps,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=sx,this.blendDst=ax,this.blendEquation=ia,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Mt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xd,this.stencilZFail=xd,this.stencilZPass=xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const f in c){const m=c[f];delete m.metadata,d.push(m)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Mt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new kr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new It().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new It().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const l=t.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const ar=new de,Od=new de,zl=new de,jl=new de;class Nc{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ar.copy(this.origin).addScaledVector(this.direction,t),ar.distanceToSquared(e))}distanceSqToSegment(e,t,r,l){Od.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),jl.copy(this.origin).sub(Od);const c=e.distanceTo(t)*.5,d=-this.direction.dot(zl),f=jl.dot(this.direction),m=-jl.dot(zl),p=jl.lengthSq(),v=Math.abs(1-d*d);let S,_,y,w;if(v>0)if(S=d*m-f,_=d*f-m,w=c*v,S>=0)if(_>=-w)if(_<=w){const T=1/v;S*=T,_*=T,y=S*(S+d*_+2*f)+_*(d*S+_+2*m)+p}else _=c,S=Math.max(0,-(d*_+f)),y=-S*S+_*(_+2*m)+p;else _=-c,S=Math.max(0,-(d*_+f)),y=-S*S+_*(_+2*m)+p;else _<=-w?(S=Math.max(0,-(-d*c+f)),_=S>0?-c:Math.min(Math.max(-c,-m),c),y=-S*S+_*(_+2*m)+p):_<=w?(S=0,_=Math.min(Math.max(-c,-m),c),y=_*(_+2*m)+p):(S=Math.max(0,-(d*c+f)),_=S>0?c:Math.min(Math.max(-c,-m),c),y=-S*S+_*(_+2*m)+p);else _=d>0?-c:c,S=Math.max(0,-(d*_+f)),y=-S*S+_*(_+2*m)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Od).addScaledVector(zl,_),y}intersectSphere(e,t){if(e.radius<0)return null;ar.subVectors(e.center,this.origin);const r=ar.dot(this.direction),l=ar.dot(ar)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),f=r-d,m=r+d;return m<0?null:f<0?this.at(m,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,l,c,d,f,m;const p=1/this.direction.x,v=1/this.direction.y,S=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,l=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,l=(e.min.x-_.x)*p),v>=0?(c=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),S>=0?(f=(e.min.z-_.z)*S,m=(e.max.z-_.z)*S):(f=(e.max.z-_.z)*S,m=(e.min.z-_.z)*S),r>m||f>l)||((f>r||r!==r)&&(r=f),(m<l||l!==l)&&(l=m),l<0)?null:this.at(r>=0?r:l,t)}intersectsBox(e){return this.intersectBox(e,ar)!==null}intersectTriangle(e,t,r,l,c){const d=this.origin,f=this.direction,m=f.x,p=f.y,v=f.z,S=e.x-d.x,_=e.y-d.y,y=e.z-d.z,w=t.x-d.x,T=t.y-d.y,x=t.z-d.z,M=r.x-d.x,L=r.y-d.y,U=r.z-d.z,A=Math.abs(m),I=Math.abs(p),P=Math.abs(v);let E,D,J,O,H,ee,re,z,V,ne,F,$;if(A>=I&&A>=P?(J=m,ee=S,V=w,$=M,m>=0?(E=p,D=v,O=_,H=y,re=T,z=x,ne=L,F=U):(E=v,D=p,O=y,H=_,re=x,z=T,ne=U,F=L)):I>=P?(J=p,ee=_,V=T,$=L,p>=0?(E=v,D=m,O=y,H=S,re=x,z=w,ne=U,F=M):(E=m,D=v,O=S,H=y,re=w,z=x,ne=M,F=U)):(J=v,ee=y,V=x,$=U,v>=0?(E=m,D=p,O=S,H=_,re=w,z=T,ne=M,F=L):(E=p,D=m,O=_,H=S,re=T,z=w,ne=L,F=M)),J===0)return null;const W=E/J,Q=D/J,k=1/J,Z=O-W*ee,we=H-Q*ee,G=re-W*V,le=z-Q*V,Me=ne-W*$,Ee=F-Q*$,Se=Me*le-Ee*G,ve=Z*Ee-we*Me,Qe=G*we-le*Z;if(l){if(Se<0||ve<0||Qe<0)return null}else if((Se<0||ve<0||Qe<0)&&(Se>0||ve>0||Qe>0))return null;const Fe=Se+ve+Qe;if(Fe===0)return null;const vt=k*(Se*ee+ve*V+Qe*$);return(Fe>0?vt<0:vt>0)?null:this.at(vt/Fe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class If extends vs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Mt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=ox,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const sg=new $t,us=new Nc,Bl=new So,ag=new de,Hl=new de,Gl=new de,Vl=new de,zd=new de,Wl=new de,og=new de,Xl=new de;class $i extends wn{constructor(e=new pi,t=new If){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,t){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(c&&f){Wl.set(0,0,0);for(let m=0,p=c.length;m<p;m++){const v=f[m],S=c[m];v!==0&&(zd.fromBufferAttribute(S,e),d?Wl.addScaledVector(zd,v):Wl.addScaledVector(zd.sub(t),v))}t.add(Wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(c),us.copy(e.ray).recast(e.near),!(Bl.containsPoint(us.origin)===!1&&(us.intersectSphere(Bl,ag)===null||us.origin.distanceToSquared(ag)>(e.far-e.near)**2))&&(sg.copy(c).invert(),us.copy(e.ray).applyMatrix4(sg),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let l;const c=this.geometry,d=this.material,f=c.index,m=c.attributes.position,p=c.attributes.uv,v=c.attributes.uv1,S=c.attributes.normal,_=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,T=_.length;w<T;w++){const x=_[w],M=d[x.materialIndex],L=Math.max(x.start,y.start),U=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let A=L,I=U;A<I;A+=3){const P=f.getX(A),E=f.getX(A+1),D=f.getX(A+2);l=$l(this,M,e,r,p,v,S,P,E,D),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,y.start),T=Math.min(f.count,y.start+y.count);for(let x=w,M=T;x<M;x+=3){const L=f.getX(x),U=f.getX(x+1),A=f.getX(x+2);l=$l(this,d,e,r,p,v,S,L,U,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(m!==void 0)if(Array.isArray(d))for(let w=0,T=_.length;w<T;w++){const x=_[w],M=d[x.materialIndex],L=Math.max(x.start,y.start),U=Math.min(m.count,Math.min(x.start+x.count,y.start+y.count));for(let A=L,I=U;A<I;A+=3){const P=A,E=A+1,D=A+2;l=$l(this,M,e,r,p,v,S,P,E,D),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,y.start),T=Math.min(m.count,y.start+y.count);for(let x=w,M=T;x<M;x+=3){const L=x,U=x+1,A=x+2;l=$l(this,d,e,r,p,v,S,L,U,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function YS(s,e,t,r,l,c,d,f){let m;if(e.side===Kn?m=r.intersectTriangle(d,c,l,!0,f):m=r.intersectTriangle(l,c,d,e.side===ps,f),m===null)return null;Xl.copy(f),Xl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Xl);return p<t.near||p>t.far?null:{distance:p,point:Xl.clone(),object:s}}function $l(s,e,t,r,l,c,d,f,m,p){s.getVertexPosition(f,Hl),s.getVertexPosition(m,Gl),s.getVertexPosition(p,Vl);const v=YS(s,e,t,r,Hl,Gl,Vl,og);if(v){const S=new de;Ti.getBarycoord(og,Hl,Gl,Vl,S),l&&(v.uv=Ti.getInterpolatedAttribute(l,f,m,p,S,new It)),c&&(v.uv1=Ti.getInterpolatedAttribute(c,f,m,p,S,new It)),d&&(v.normal=Ti.getInterpolatedAttribute(d,f,m,p,S,new de),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:m,c:p,normal:new de,materialIndex:0};Ti.getNormal(Hl,Gl,Vl,_.normal),v.face=_,v.barycoord=S}return v}class KS extends Nn{constructor(e=null,t=1,r=1,l,c,d,f,m,p=An,v=An,S,_){super(null,d,f,m,p,v,l,c,S,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new So,ZS=new It(.5,.5),ql=new de;class vo{constructor(e=new kr,t=new kr,r=new kr,l=new kr,c=new kr,d=new kr){this.planes=[e,t,r,l,c,d]}set(e,t,r,l,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ci,r=!1){const l=this.planes,c=e.elements,d=c[0],f=c[1],m=c[2],p=c[3],v=c[4],S=c[5],_=c[6],y=c[7],w=c[8],T=c[9],x=c[10],M=c[11],L=c[12],U=c[13],A=c[14],I=c[15];if(l[0].setComponents(p-d,y-v,M-w,I-L).normalize(),l[1].setComponents(p+d,y+v,M+w,I+L).normalize(),l[2].setComponents(p+f,y+S,M+T,I+U).normalize(),l[3].setComponents(p-f,y-S,M-T,I-U).normalize(),r)l[4].setComponents(m,_,x,A).normalize(),l[5].setComponents(p-m,y-_,M-x,I-A).normalize();else if(l[4].setComponents(p-m,y-_,M-x,I-A).normalize(),t===Ci)l[5].setComponents(p+m,y+_,M+x,I+A).normalize();else if(t===go)l[5].setComponents(m,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=ZS.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const l=t[r];if(ql.x=l.normal.x>0?e.max.x:e.min.x,ql.y=l.normal.y>0?e.max.y:e.min.y,ql.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const lg=new $t;class eh{constructor(){this.coordinateSystem=Ci,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let l=0;l<t.length;l++){const c=t[l];lg.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),r[l]===void 0&&(r[l]=new vo),r[l].setFromProjectionMatrix(lg,c.coordinateSystem,c.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let l=0;l<e._count;l++)t[l]===void 0&&(t[l]=new vo),t[l].copy(r[l]);return this._count=e._count,this}clone(){return new eh().copy(this)}}class Lx extends vs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Mt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new de,Mc=new de,cg=new $t,no=new Nc,Yl=new So,jd=new de,ug=new de;class QS extends wn{constructor(e=new pi,t=new Lx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let l=1,c=t.count;l<c;l++)Sc.fromBufferAttribute(t,l-1),Mc.fromBufferAttribute(t,l),r[l]=r[l-1],r[l]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Fn(r,1))}else pt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(l),Yl.radius+=c,e.ray.intersectsSphere(Yl)===!1)return;cg.copy(l).invert(),no.copy(e.ray).applyMatrix4(cg);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const y=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let T=y,x=w-1;T<x;T+=p){const M=v.getX(T),L=v.getX(T+1),U=Kl(this,e,no,m,M,L,T);U&&t.push(U)}if(this.isLineLoop){const T=v.getX(w-1),x=v.getX(y),M=Kl(this,e,no,m,T,x,w-1);M&&t.push(M)}}else{const y=Math.max(0,d.start),w=Math.min(_.count,d.start+d.count);for(let T=y,x=w-1;T<x;T+=p){const M=Kl(this,e,no,m,T,T+1,T);M&&t.push(M)}if(this.isLineLoop){const T=Kl(this,e,no,m,w-1,y,w-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Kl(s,e,t,r,l,c,d){const f=s.geometry.attributes.position;if(Sc.fromBufferAttribute(f,l),Mc.fromBufferAttribute(f,c),t.distanceSqToSegment(Sc,Mc,jd,ug)>r)return;jd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(jd);if(!(p<e.near||p>e.far))return{distance:p,point:ug.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const dg=new de,fg=new de;class JS extends QS{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let l=0,c=t.count;l<c;l+=2)dg.fromBufferAttribute(t,l),fg.fromBufferAttribute(t,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+dg.distanceTo(fg);e.setAttribute("lineDistance",new Fn(r,1))}else pt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Dx extends vs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Mt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const hg=new $t,Uf=new Nc,Zl=new So,Ql=new de;class eM extends wn{constructor(e=new pi,t=new Dx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(l),Zl.radius+=c,e.ray.intersectsSphere(Zl)===!1)return;hg.copy(l).invert(),Uf.copy(e.ray).applyMatrix4(hg);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),m=f*f,p=r.index,S=r.attributes.position;if(p!==null){const _=Math.max(0,d.start),y=Math.min(p.count,d.start+d.count);for(let w=_,T=y;w<T;w++){const x=p.getX(w);Ql.fromBufferAttribute(S,x),pg(Ql,x,m,l,e,t,this)}}else{const _=Math.max(0,d.start),y=Math.min(S.count,d.start+d.count);for(let w=_,T=y;w<T;w++)Ql.fromBufferAttribute(S,w),pg(Ql,w,m,l,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function pg(s,e,t,r,l,c,d){const f=Uf.distanceSqToPoint(s);if(f<t){const m=new de;Uf.closestPointToPoint(s,m),m.applyMatrix4(r);const p=l.ray.origin.distanceTo(m);if(p<l.near||p>l.far)return;c.push({distance:p,distanceToRay:Math.sqrt(f),point:m,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Ix extends Nn{constructor(e=[],t=ua,r,l,c,d,f,m,p,v){super(e,t,r,l,c,d,f,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class tM extends Nn{constructor(e,t,r,l,c,d,f,m,p){super(e,t,r,l,c,d,f,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends Nn{constructor(e,t,r=Wi,l,c,d,f=An,m=An,p,v=Xr,S=1){if(v!==Xr&&v!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:S};super(_,l,c,d,f,m,v,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ux extends fa{constructor(e,t=Wi,r=ua,l,c,d=An,f=An,m,p=Xr){const v={width:e,height:e,depth:1},S=[v,v,v,v,v,v];super(e,e,t,r,l,c,d,f,m,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class kx extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mo extends pi{constructor(e=1,t=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const f=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const m=[],p=[],v=[],S=[];let _=0,y=0;w("z","y","x",-1,-1,r,t,e,d,c,0),w("z","y","x",1,-1,r,t,-e,d,c,1),w("x","z","y",1,1,e,r,t,l,d,2),w("x","z","y",1,-1,e,r,-t,l,d,3),w("x","y","z",1,-1,e,t,r,l,c,4),w("x","y","z",-1,-1,e,t,-r,l,c,5),this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(S,2));function w(T,x,M,L,U,A,I,P,E,D,J){const O=A/E,H=I/D,ee=A/2,re=I/2,z=P/2,V=E+1,ne=D+1;let F=0,$=0;const W=new de;for(let Q=0;Q<ne;Q++){const k=Q*H-re;for(let Z=0;Z<V;Z++){const we=Z*O-ee;W[T]=we*L,W[x]=k*U,W[M]=z,p.push(W.x,W.y,W.z),W[T]=0,W[x]=0,W[M]=P>0?1:-1,v.push(W.x,W.y,W.z),S.push(Z/E),S.push(1-Q/D),F+=1}}for(let Q=0;Q<D;Q++)for(let k=0;k<E;k++){const Z=_+k+V*Q,we=_+k+V*(Q+1),G=_+(k+1)+V*(Q+1),le=_+(k+1)+V*Q;m.push(Z,we,le),m.push(we,G,le),$+=6}f.addGroup(y,$,J),y+=$,_+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eo extends pi{constructor(e=1,t=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:l};const c=e/2,d=t/2,f=Math.floor(r),m=Math.floor(l),p=f+1,v=m+1,S=e/f,_=t/m,y=[],w=[],T=[],x=[];for(let M=0;M<v;M++){const L=M*_-d;for(let U=0;U<p;U++){const A=U*S-c;w.push(A,-L,0),T.push(0,0,1),x.push(U/f),x.push(1-M/m)}}for(let M=0;M<m;M++)for(let L=0;L<f;L++){const U=L+p*M,A=L+p*(M+1),I=L+1+p*(M+1),P=L+1+p*M;y.push(U,A,P),y.push(A,I,P)}this.setIndex(y),this.setAttribute("position",new Fn(w,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends pi{constructor(e=1,t=.4,r=12,l=48,c=Math.PI*2,d=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:f},r=Math.floor(r),l=Math.floor(l);const m=[],p=[],v=[],S=[],_=new de,y=new de,w=new de;for(let T=0;T<=r;T++){const x=d+T/r*f;for(let M=0;M<=l;M++){const L=M/l*c;y.x=(e+t*Math.cos(x))*Math.cos(L),y.y=(e+t*Math.cos(x))*Math.sin(L),y.z=t*Math.sin(x),p.push(y.x,y.y,y.z),_.x=e*Math.cos(L),_.y=e*Math.sin(L),w.subVectors(y,_).normalize(),v.push(w.x,w.y,w.z),S.push(M/l),S.push(T/r)}}for(let T=1;T<=r;T++)for(let x=1;x<=l;x++){const M=(l+1)*T+x-1,L=(l+1)*(T-1)+x-1,U=(l+1)*(T-1)+x,A=(l+1)*T+x;m.push(M,L,A),m.push(L,U,A)}this.setIndex(m),this.setAttribute("position",new Fn(p,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ha(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const l=s[t][r];if(mg(l))l.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=l.clone();else if(Array.isArray(l))if(mg(l[0])){const c=[];for(let d=0,f=l.length;d<f;d++)c[d]=l[d].clone();e[t][r]=c}else e[t][r]=l.slice();else e[t][r]=l}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const r=ha(s[t]);for(const l in r)e[l]=r[l]}return e}function mg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function nM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Fx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const iM={clone:ha,merge:jn};var rM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class gs extends vs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=rM,this.fragmentShader=sM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=nM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=t[l.value]||null;break;case"c":this.uniforms[r].value=new Mt().setHex(l.value);break;case"v2":this.uniforms[r].value=new It().fromArray(l.value);break;case"v3":this.uniforms[r].value=new de().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new yt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class aM extends gs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class oM extends vs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Mt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Mt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class lM extends vs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=hS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class cM extends vs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(gg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!gg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function gg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class uM{constructor(e,t,r){const l=this;let c=!1,d=0,f=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,f),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,f),d===f&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,S){return p.push(v,S),this},this.removeHandler=function(v){const S=p.indexOf(v);return S!==-1&&p.splice(S,2),this},this.getHandler=function(v){for(let S=0,_=p.length;S<_;S+=2){const y=p[S],w=p[S+1];if(y.global&&(y.lastIndex=0),y.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const dM=new uM;class th{constructor(e){this.manager=e!==void 0?e:dM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(l,c){r.load(e,l,t,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}th.DEFAULT_MATERIAL_NAME="__DEFAULT";const ea=new WeakMap;class fM extends th{constructor(e){super(e)}load(e,t,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Bd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){t&&t(d),c.manager.itemEnd(e)},0);else{let S=ea.get(d);S===void 0&&(S=[],ea.set(d,S)),S.push({onLoad:t,onError:l})}return d}const f=xo("img");function m(){v(),t&&t(this);const S=ea.get(this)||[];for(let _=0;_<S.length;_++){const y=S[_];y.onLoad&&y.onLoad(this)}ea.delete(this),c.manager.itemEnd(e)}function p(S){v(),l&&l(S),Bd.remove(`image:${e}`);const _=ea.get(this)||[];for(let y=0;y<_.length;y++){const w=_[y];w.onError&&w.onError(S)}ea.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){f.removeEventListener("load",m,!1),f.removeEventListener("error",p,!1)}return f.addEventListener("load",m,!1),f.addEventListener("error",p,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Bd.add(`image:${e}`,f),c.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}}class hM extends th{constructor(e){super(e)}load(e,t,r,l){const c=new Nn,d=new fM(this.manager);return d.setPriority(this.priority),d.setCache(this.cache),d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,t!==void 0&&t(c)},r,l),c}}class nh extends wn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Mt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Hd=new $t,xg=new de,vg=new de;class Ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;xg.setFromMatrixPosition(e.matrixWorld),t.position.copy(xg),vg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(vg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,l){Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,f=l?l.w/c.y:1,m=l?l.x/c.x:0,p=l?l.y/c.y:0;e.coordinateSystem===go||e.reversedDepth?t.set(.5*d,0,0,.5*d+m,0,.5*f,0,.5*f+p,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+m,0,.5*f,0,.5*f+p,0,0,.5,.5,0,0,0,1),t.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new de,ec=new pa,ki=new de;class zx extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,ki.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Jl,ec,ki),ki.x===1&&ki.y===1&&ki.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,ki.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new de,_g=new It,yg=new It;class qn extends zx{constructor(e=50,t=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,_g,yg),t.subVectors(yg,_g)}setViewOffset(e,t,r,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,r=2*t,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const m=d.fullWidth,p=d.fullHeight;c+=d.offsetX*l/m,t-=d.offsetY*r/p,l*=d.width/m,r*=d.height/p}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class pM extends Ox{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||t.far;(r!==t.fov||l!==t.aspect||c!==t.far)&&(t.fov=r,t.aspect=l,t.far=c,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class mM extends nh{constructor(e,t,r=0,l=Math.PI/3,c=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=d,this.map=null,this.shadow=new pM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class gM extends Ox{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class xM extends nh{constructor(e,t,r=0,l=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new gM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class vM extends zx{constructor(e=-1,t=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=l+t,m=l-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=p*this.view.offsetX,d=c+p*this.view.width,f-=v*this.view.offsetY,m=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class _M extends nh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ta=-90,na=1;class kf extends wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(ta,na,e,t);l.layers=this.layers,this.add(l);const c=new qn(ta,na,e,t);c.layers=this.layers,this.add(c);const d=new qn(ta,na,e,t);d.layers=this.layers,this.add(d);const f=new qn(ta,na,e,t);f.layers=this.layers,this.add(f);const m=new qn(ta,na,e,t);m.layers=this.layers,this.add(m);const p=new qn(ta,na,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,l,c,d,f,m]=t;for(const p of t)this.remove(p);if(e===Ci)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===go)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,m,p,v]=this.children,S=e.getRenderTarget(),_=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(S,_,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class yM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Sg=new $t;class SM{constructor(e,t,r=0,l=1/0){this.ray=new Nc(e,t),this.near=r,this.far=l,this.camera=null,this.layers=new Jf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):jt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Sg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Sg),this}intersectObject(e,t=!0,r=[]){return Ff(e,this,r,t),r.sort(Mg),r}intersectObjects(e,t=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Ff(e[l],this,r,t);return r.sort(Mg),r}}function Mg(s,e){return s.distance-e.distance}function Ff(s,e,t,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Ff(c[d],e,t,!0)}}class MM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,pt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class EM extends JS{constructor(e=10,t=10,r=4473924,l=8947848){r=new Mt(r),l=new Mt(l);const c=t/2,d=e/t,f=e/2,m=[],p=[];for(let _=0,y=0,w=-f;_<=t;_++,w+=d){m.push(-f,0,w,f,0,w),m.push(w,0,-f,w,0,f);const T=_===c?r:l;T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3,T.toArray(p,y),y+=3}const v=new pi;v.setAttribute("position",new Fn(m,3)),v.setAttribute("color",new Fn(p,3));const S=new Lx({vertexColors:!0,toneMapped:!1});super(v,S),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Eg(s,e,t,r){const l=wM(r);switch(t){case yx:return s*e;case Mx:return s*e/l.components*l.byteLength;case qf:return s*e/l.components*l.byteLength;case ms:return s*e*2/l.components*l.byteLength;case Yf:return s*e*2/l.components*l.byteLength;case Sx:return s*e*3/l.components*l.byteLength;case Hi:return s*e*4/l.components*l.byteLength;case Kf:return s*e*4/l.components*l.byteLength;case ac:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case af:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case of:case lf:case uf:case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:case gc:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cf:case Af:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function wM(s){switch(s){case ri:case gx:return{byteLength:1,components:1};case mo:case xx:case Xi:return{byteLength:2,components:1};case Xf:case $f:return{byteLength:2,components:4};case Wi:case Wf:case Bi:return{byteLength:4,components:1};case vx:case _x:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Vf}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Vf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function jx(){let s=null,e=!1,t=null,r=null;function l(c,d){r=s.requestAnimationFrame(l),t(c,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function TM(s){const e=new WeakMap;function t(f,m){const p=f.array,v=f.usage,S=p.byteLength,_=s.createBuffer();s.bindBuffer(m,_),s.bufferData(m,p,v),f.onUploadCallback();let y;if(p instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)y=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)y=s.SHORT;else if(p instanceof Uint32Array)y=s.UNSIGNED_INT;else if(p instanceof Int32Array)y=s.INT;else if(p instanceof Int8Array)y=s.BYTE;else if(p instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:y,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,m,p){const v=m.array,S=m.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,v);else{S.sort((y,w)=>y.start-w.start);let _=0;for(let y=1;y<S.length;y++){const w=S[_],T=S[y];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++_,S[_]=T)}S.length=_+1;for(let y=0,w=S.length;y<w;y++){const T=S[y];s.bufferSubData(p,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}m.clearUpdateRanges()}m.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const m=e.get(f);m&&(s.deleteBuffer(m.buffer),e.delete(f))}function d(f,m){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,m));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,m),p.version=f.version}}return{get:l,remove:c,update:d}}var bM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,CM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,NM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,PM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,DM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,IM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,UM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,kM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,zM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,jM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,qM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,YM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,KM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,QM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,e1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,t1="gl_FragColor = linearToOutputTexel( gl_FragColor );",n1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,i1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,r1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,s1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,a1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,o1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,l1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,c1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,u1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,d1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,f1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,h1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,p1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,m1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,g1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,x1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,v1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,y1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,S1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,M1=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,E1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,w1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,T1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,b1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,C1=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,A1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,R1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,P1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,L1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,D1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,I1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,U1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,k1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,F1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,O1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,z1=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,j1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,B1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,H1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,G1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,V1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,W1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,X1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,q1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Y1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,K1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Z1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Q1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,J1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,eE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,tE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,sE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,oE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,lE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,cE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,uE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,dE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,hE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,mE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,gE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,xE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,SE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ME=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,EE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,wE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,bE=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,AE=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,NE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,RE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,LE=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,DE=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,IE=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,UE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FE=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,OE=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zE=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,jE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,HE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,GE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,VE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,XE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,$E=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,KE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ZE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,ew=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,iw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,wt={alphahash_fragment:bM,alphahash_pars_fragment:CM,alphamap_fragment:AM,alphamap_pars_fragment:NM,alphatest_fragment:RM,alphatest_pars_fragment:PM,aomap_fragment:LM,aomap_pars_fragment:DM,batching_pars_vertex:IM,batching_vertex:UM,begin_vertex:kM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:zM,bumpmap_pars_fragment:jM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:VM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:$M,color_vertex:qM,common:YM,defaultnormal_vertex:KM,displacementmap_pars_vertex:ZM,displacementmap_vertex:QM,emissivemap_fragment:JM,emissivemap_pars_fragment:e1,colorspace_fragment:t1,colorspace_pars_fragment:n1,envmap_fragment:i1,envmap_common_pars_fragment:r1,envmap_pars_fragment:s1,envmap_pars_vertex:a1,envmap_physical_pars_fragment:x1,envmap_vertex:o1,fog_vertex:l1,fog_pars_vertex:c1,fog_fragment:u1,fog_pars_fragment:d1,gradientmap_pars_fragment:f1,lightmap_pars_fragment:h1,lights_lambert_fragment:p1,lights_lambert_pars_fragment:m1,lights_pars_begin:g1,lights_toon_fragment:v1,lights_toon_pars_fragment:_1,lights_phong_fragment:y1,lights_phong_pars_fragment:S1,lights_physical_fragment:M1,lights_physical_pars_fragment:E1,lights_fragment_begin:w1,lights_fragment_maps:T1,lights_fragment_end:b1,lightprobes_pars_fragment:C1,logdepthbuf_fragment:A1,logdepthbuf_pars_fragment:N1,logdepthbuf_pars_vertex:R1,logdepthbuf_vertex:P1,map_fragment:L1,map_pars_fragment:D1,map_particle_fragment:I1,map_particle_pars_fragment:U1,metalnessmap_fragment:k1,metalnessmap_pars_fragment:F1,morphinstance_vertex:O1,morphcolor_vertex:z1,morphnormal_vertex:j1,morphtarget_pars_vertex:B1,morphtarget_vertex:H1,normal_fragment_begin:G1,normal_fragment_maps:V1,normal_pars_fragment:W1,normal_pars_vertex:X1,normal_vertex:$1,normalmap_pars_fragment:q1,clearcoat_normal_fragment_begin:Y1,clearcoat_normal_fragment_maps:K1,clearcoat_pars_fragment:Z1,iridescence_pars_fragment:Q1,opaque_fragment:J1,packing:eE,premultiplied_alpha_fragment:tE,project_vertex:nE,dithering_fragment:iE,dithering_pars_fragment:rE,roughnessmap_fragment:sE,roughnessmap_pars_fragment:aE,shadowmap_pars_fragment:oE,shadowmap_pars_vertex:lE,shadowmap_vertex:cE,shadowmask_pars_fragment:uE,skinbase_vertex:dE,skinning_pars_vertex:fE,skinning_vertex:hE,skinnormal_vertex:pE,specularmap_fragment:mE,specularmap_pars_fragment:gE,tonemapping_fragment:xE,tonemapping_pars_fragment:vE,transmission_fragment:_E,transmission_pars_fragment:yE,uv_pars_fragment:SE,uv_pars_vertex:ME,uv_vertex:EE,worldpos_vertex:wE,background_vert:TE,background_frag:bE,backgroundCube_vert:CE,backgroundCube_frag:AE,cube_vert:NE,cube_frag:RE,depth_vert:PE,depth_frag:LE,distance_vert:DE,distance_frag:IE,equirect_vert:UE,equirect_frag:kE,linedashed_vert:FE,linedashed_frag:OE,meshbasic_vert:zE,meshbasic_frag:jE,meshlambert_vert:BE,meshlambert_frag:HE,meshmatcap_vert:GE,meshmatcap_frag:VE,meshnormal_vert:WE,meshnormal_frag:XE,meshphong_vert:$E,meshphong_frag:qE,meshphysical_vert:YE,meshphysical_frag:KE,meshtoon_vert:ZE,meshtoon_frag:QE,points_vert:JE,points_frag:ew,shadow_vert:tw,shadow_frag:nw,sprite_vert:iw,sprite_frag:rw},Xe={common:{diffuse:{value:new Mt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Mt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Mt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Mt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Oi={basic:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Mt(0)},envMapIntensity:{value:1}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:jn([Xe.common,Xe.specularmap,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,Xe.lights,{emissive:{value:new Mt(0)},specular:{value:new Mt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:jn([Xe.common,Xe.envmap,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.roughnessmap,Xe.metalnessmap,Xe.fog,Xe.lights,{emissive:{value:new Mt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:jn([Xe.common,Xe.aomap,Xe.lightmap,Xe.emissivemap,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.gradientmap,Xe.fog,Xe.lights,{emissive:{value:new Mt(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,Xe.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:jn([Xe.points,Xe.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:jn([Xe.common,Xe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:jn([Xe.common,Xe.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:jn([Xe.common,Xe.bumpmap,Xe.normalmap,Xe.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:jn([Xe.sprite,Xe.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distance:{uniforms:jn([Xe.common,Xe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distance_vert,fragmentShader:wt.distance_frag},shadow:{uniforms:jn([Xe.lights,Xe.fog,{color:{value:new Mt(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Oi.physical={uniforms:jn([Oi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new yt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Mt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Mt(0)},specularColor:{value:new Mt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const tc={r:0,b:0,g:0},sw=new $t,Bx=new yt;Bx.set(-1,0,0,0,1,0,0,0,1);function aw(s,e,t,r,l,c){const d=new Mt(0);let f=l===!0?0:1,m,p,v=null,S=0,_=null;function y(L){let U=L.isScene===!0?L.background:null;if(U&&U.isTexture){const A=L.backgroundBlurriness>0;U=e.get(U,A)}return U}function w(L){let U=!1;const A=y(L);A===null?x(d,f):A&&A.isColor&&(x(A,1),U=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(L,U){const A=y(U);A&&A.isCubeTexture?(p===void 0&&(p=new $i(new Mo(1,1,1),new gs({name:"BackgroundCubeMaterial",uniforms:ha(Oi.backgroundCube.uniforms),vertexShader:Oi.backgroundCube.vertexShader,fragmentShader:Oi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(I,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=A,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(sw.makeRotationFromEuler(U.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Bx),p.material.toneMapped=Lt.getTransfer(A.colorSpace)!==Vt,(v!==A||S!==A.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,v=A,S=A.version,_=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null)):A&&A.isTexture&&(m===void 0&&(m=new $i(new Eo(2,2),new gs({name:"BackgroundMaterial",uniforms:ha(Oi.background.uniforms),vertexShader:Oi.background.vertexShader,fragmentShader:Oi.background.fragmentShader,side:ps,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(m)),m.material.uniforms.t2D.value=A,m.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),m.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||S!==A.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,v=A,S=A.version,_=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null))}function x(L,U){L.getRGB(tc,Fx(s)),t.buffers.color.setClear(tc.r,tc.g,tc.b,U,c)}function M(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,U=1){d.set(L),f=U,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(d,f)},render:w,addToRenderList:T,dispose:M}}function ow(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function f(H,ee,re,z,V){let ne=!1;const F=S(H,z,re,ee);c!==F&&(c=F,p(c.object)),ne=y(H,z,re,V),ne&&w(H,z,re,V),V!==null&&e.update(V,s.ELEMENT_ARRAY_BUFFER),(ne||d)&&(d=!1,A(H,ee,re,z),V!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function m(){return s.createVertexArray()}function p(H){return s.bindVertexArray(H)}function v(H){return s.deleteVertexArray(H)}function S(H,ee,re,z){const V=z.wireframe===!0;let ne=r[ee.id];ne===void 0&&(ne={},r[ee.id]=ne);const F=H.isInstancedMesh===!0?H.id:0;let $=ne[F];$===void 0&&($={},ne[F]=$);let W=$[re.id];W===void 0&&(W={},$[re.id]=W);let Q=W[V];return Q===void 0&&(Q=_(m()),W[V]=Q),Q}function _(H){const ee=[],re=[],z=[];for(let V=0;V<t;V++)ee[V]=0,re[V]=0,z[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:re,attributeDivisors:z,object:H,attributes:{},index:null}}function y(H,ee,re,z){const V=c.attributes,ne=ee.attributes;let F=0;const $=re.getAttributes();for(const W in $)if($[W].location>=0){const k=V[W];let Z=ne[W];if(Z===void 0&&(W==="instanceMatrix"&&H.instanceMatrix&&(Z=H.instanceMatrix),W==="instanceColor"&&H.instanceColor&&(Z=H.instanceColor)),k===void 0||k.attribute!==Z||Z&&k.data!==Z.data)return!0;F++}return c.attributesNum!==F||c.index!==z}function w(H,ee,re,z){const V={},ne=ee.attributes;let F=0;const $=re.getAttributes();for(const W in $)if($[W].location>=0){let k=ne[W];k===void 0&&(W==="instanceMatrix"&&H.instanceMatrix&&(k=H.instanceMatrix),W==="instanceColor"&&H.instanceColor&&(k=H.instanceColor));const Z={};Z.attribute=k,k&&k.data&&(Z.data=k.data),V[W]=Z,F++}c.attributes=V,c.attributesNum=F,c.index=z}function T(){const H=c.newAttributes;for(let ee=0,re=H.length;ee<re;ee++)H[ee]=0}function x(H){M(H,0)}function M(H,ee){const re=c.newAttributes,z=c.enabledAttributes,V=c.attributeDivisors;re[H]=1,z[H]===0&&(s.enableVertexAttribArray(H),z[H]=1),V[H]!==ee&&(s.vertexAttribDivisor(H,ee),V[H]=ee)}function L(){const H=c.newAttributes,ee=c.enabledAttributes;for(let re=0,z=ee.length;re<z;re++)ee[re]!==H[re]&&(s.disableVertexAttribArray(re),ee[re]=0)}function U(H,ee,re,z,V,ne,F){F===!0?s.vertexAttribIPointer(H,ee,re,V,ne):s.vertexAttribPointer(H,ee,re,z,V,ne)}function A(H,ee,re,z){T();const V=z.attributes,ne=re.getAttributes(),F=ee.defaultAttributeValues;for(const $ in ne){const W=ne[$];if(W.location>=0){let Q=V[$];if(Q===void 0&&($==="instanceMatrix"&&H.instanceMatrix&&(Q=H.instanceMatrix),$==="instanceColor"&&H.instanceColor&&(Q=H.instanceColor)),Q!==void 0){const k=Q.normalized,Z=Q.itemSize,we=e.get(Q);if(we===void 0)continue;const G=we.buffer,le=we.type,Me=we.bytesPerElement,Ee=le===s.INT||le===s.UNSIGNED_INT||Q.gpuType===Wf;if(Q.isInterleavedBufferAttribute){const Se=Q.data,ve=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,Qe=Q.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Fe=0;Fe<W.locationSize;Fe++)M(W.location+Fe,Se.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Fe=0;Fe<W.locationSize;Fe++)x(W.location+Fe);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Fe=0;Fe<W.locationSize;Fe++)U(W.location+Fe,Z/W.locationSize,le,k,ve*Me,(Qe+Z/W.locationSize*Fe)*Me,Ee)}else{if(Q.isInstancedBufferAttribute){for(let Se=0;Se<W.locationSize;Se++)M(W.location+Se,Q.meshPerAttribute);H.isInstancedMesh!==!0&&z._maxInstanceCount===void 0&&(z._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Se=0;Se<W.locationSize;Se++)x(W.location+Se);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Se=0;Se<W.locationSize;Se++)U(W.location+Se,Z/W.locationSize,le,k,Z*Me,Z/W.locationSize*Se*Me,Ee)}}else if(F!==void 0){const k=F[$];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(W.location,k);break;case 3:s.vertexAttrib3fv(W.location,k);break;case 4:s.vertexAttrib4fv(W.location,k);break;default:s.vertexAttrib1fv(W.location,k)}}}}L()}function I(){J();for(const H in r){const ee=r[H];for(const re in ee){const z=ee[re];for(const V in z){const ne=z[V];for(const F in ne)v(ne[F].object),delete ne[F];delete z[V]}}delete r[H]}}function P(H){if(r[H.id]===void 0)return;const ee=r[H.id];for(const re in ee){const z=ee[re];for(const V in z){const ne=z[V];for(const F in ne)v(ne[F].object),delete ne[F];delete z[V]}}delete r[H.id]}function E(H){for(const ee in r){const re=r[ee];for(const z in re){const V=re[z];if(V[H.id]===void 0)continue;const ne=V[H.id];for(const F in ne)v(ne[F].object),delete ne[F];delete V[H.id]}}}function D(H){for(const ee in r){const re=r[ee],z=H.isInstancedMesh===!0?H.id:0,V=re[z];if(V!==void 0){for(const ne in V){const F=V[ne];for(const $ in F)v(F[$].object),delete F[$];delete V[ne]}delete re[z],Object.keys(re).length===0&&delete r[ee]}}}function J(){O(),d=!0,c!==l&&(c=l,p(c.object))}function O(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:O,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:D,releaseStatesOfProgram:E,initAttributes:T,enableAttribute:x,disableUnusedAttributes:L}}function lw(s,e,t){let r;function l(m){r=m}function c(m,p){s.drawArrays(r,m,p),t.update(p,r,1)}function d(m,p,v){v!==0&&(s.drawArraysInstanced(r,m,p,v),t.update(p,r,v))}function f(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,m,0,p,0,v);let _=0;for(let y=0;y<v;y++)_+=p[y];t.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function cw(s,e,t,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(E){return!(E!==Hi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const D=E===Xi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ri&&E!==Bi&&!D&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function m(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(pt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&pt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:m,textureFormatReadable:d,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:_,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:L,maxVaryings:U,maxFragmentUniforms:A,maxSamples:I,samples:P}}function uw(s){const e=this;let t=null,r=0,l=!1,c=!1;const d=new kr,f=new yt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(S,_){const y=S.length!==0||_||r!==0||l;return l=_,r=S.length,y},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,_){t=v(S,_,0)},this.setState=function(S,_,y){const w=S.clippingPlanes,T=S.clipIntersection,x=S.clipShadows,M=s.get(S);if(!l||w===null||w.length===0||c&&!x)c?v(null):p();else{const L=c?0:r,U=L*4;let A=M.clippingState||null;m.value=A,A=v(w,_,U,y);for(let I=0;I!==U;++I)A[I]=t[I];M.clippingState=A,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(S,_,y,w){const T=S!==null?S.length:0;let x=null;if(T!==0){if(x=m.value,w!==!0||x===null){const M=y+T*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<M)&&(x=new Float32Array(M));for(let U=0,A=y;U!==T;++U,A+=4)d.copy(S[U]).applyMatrix4(L,f),d.normal.toArray(x,A),x[A+3]=d.constant}m.value=x,m.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}class ih extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ix(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},l=new Mo(5,5,5),c=new gs({name:"CubemapFromEquirect",uniforms:ha(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:oa});c.uniforms.tEquirect.value=t;const d=new $i(l,c),f=t.minFilter;return t.minFilter===jr&&(t.minFilter=Yn),new kf(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,l);e.setRenderTarget(c)}}const wg=256,dw=3,fw=20,Hx=256,Gx=16,hw=3,pw=new de,mw=new Mt;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new kf(1,10,null),this._boxMesh=new $i(new Mo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,l=100,c={}){const{size:d=256,position:f=pw}=c,m=this._renderer;this._setSize(d);const p=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const S=m.autoClear,_=m.autoClearColor,y=m.autoClearDepth,w=m.autoClearStencil,T=e.background;m.autoClear=!0,m.autoClearColor=!0,m.autoClearDepth=!0,m.autoClearStencil=!0,T===null&&(e.background=m.getClearColor(mw));const x=new kf(r,l,v);return x.position.copy(f),x.update(m,e),m.autoClear=S,m.autoClearColor=_,m.autoClearDepth=y,m.autoClearStencil=w,e.background=T,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(p,t)),this._applyPMREM(p),p}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(wg,CS(e))}_fromTexture(e,t){e.mapping===ua||e.mapping===po?this._setSize(e.image.length===0?wg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Tg(e,!1,!1),r=Math.log2(e)-dw;for(let l=0;l<=r;l++)t.texture.mipmaps.push({width:e>>l,height:e>>l});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Tg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const l=this._boxMesh,c=this._cubeCamera;l.material=r,c.renderTarget=e,c.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),c.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ua||e.mapping===po?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=bg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=gw(),this._integrationMaterial=xw());const t=this._cubeSize,r=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(t/Gx);for(let d=0;d<=r;d++){const f=wc.lodToRoughness(d,r);if(d>r-hw)c.roughness.value=f,this._renderCube(e,d,this._integrationMaterial);else{const m=f>0?Math.log2(t)+.5*Math.log2(6/(Hx*Math.pow(f,4)))+.5:0;l.roughness.value=f,l.lodBias.value=m,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=vw());const r=this._blurMaterial,l=r.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(e,0,r),l.envMap.value=e.texture,this._renderCube(c,0,r)}}function Tg(s,e,t){return new ih(s,{minFilter:jr,generateMipmaps:e,type:Xi,colorSpace:vc,depthBuffer:t})}function wo(s,e,t){return new gs({name:s,uniforms:e,vertexShader:wt.cube_vert,fragmentShader:t,side:Kn,blending:oa,depthTest:!1,depthWrite:!1})}function gw(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Hx}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function xw(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Gx}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function vw(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${fw}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function bg(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Cg(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function _w(s){let e=new WeakMap,t=new WeakMap,r=null;function l(_,y=!1){return _==null?null:y?d(_):c(_)}function c(_){if(_&&_.isTexture){const y=_.mapping;if(y===pd||y===md)if(e.has(_)){const w=e.get(_).texture;return f(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const T=new ih(w.height);return T.fromEquirectangularTexture(s,_),e.set(_,T),_.addEventListener("dispose",p),f(T.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const y=_.mapping,w=y===pd||y===md,T=y===ua||y===po;if(w||T){let x=t.get(_);const M=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==M)return r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const L=_.image;return w&&L&&L.height>0||T&&L&&m(L)?(r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",v),x.texture):null}}}return _}function f(_,y){return y===pd?_.mapping=ua:y===md&&(_.mapping=po),_}function m(_){let y=0;const w=6;for(let T=0;T<w;T++)_[T]!==void 0&&y++;return y===w}function p(_){const y=_.target;y.removeEventListener("dispose",p);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function v(_){const y=_.target;y.removeEventListener("dispose",v);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function yw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const l=t(r);return l===null&&uc("WebGLRenderer: "+r+" extension not supported."),l}}}function Sw(s,e,t,r){const l={},c=new WeakMap,d=new FinalizationRegistry(w=>delete l[w]);function f(w){m(w.target)}function m(w){w.index!==null&&e.remove(w.index);for(const x in w.attributes)e.remove(w.attributes[x]);w.removeEventListener("dispose",f),delete l[w.id],d.unregister(w);const T=c.get(w);T&&(e.remove(T),c.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function p(w,T){return l[T.id]!==void 0||(T.addEventListener("dispose",f),l[T.id]=new WeakRef(T),d.register(T,T.id,T),t.memory.geometries++),T}function v(w){const T=w.attributes;for(const x in T)e.update(T[x],s.ARRAY_BUFFER)}function S(w){const T=w.index,x=w.attributes.position;let M=0;if(x===void 0)return;const L=T!==null?T.array.length:x.array.length/3-1,U=x.count>=65535?Px:Rx,A=new U(Math.ceil(L/3)*6,1),I=A.array;if(T!==null){const E=T.array;M=T.version;for(let D=0,J=0;D<L;D+=3){const O=E[D+0],H=E[D+1],ee=E[D+2];I[J++]=O,I[J++]=H,I[J++]=H,I[J++]=ee,I[J++]=ee,I[J++]=O}}else{M=x.version;for(let E=0,D=0;E<L;E+=3){const J=E+0,O=E+1,H=E+2;I[D++]=J,I[D++]=O,I[D++]=O,I[D++]=H,I[D++]=H,I[D++]=J}}A.version=M;const P=c.get(w);P&&e.remove(P),c.set(w,A)}function _(w){const T=c.get(w);if(T){const x=w.index;x!==null&&T.version<x.version&&S(w)}else S(w);return c.get(w)}function y(){for(const w in l){const T=l[w].deref();T!==void 0&&m(T)}}return{get:p,update:v,getWireframeAttribute:_,dispose:y}}function Mw(s,e,t){let r;function l(S){r=S}let c,d;function f(S){c=S.type,d=S.bytesPerElement}function m(S,_){s.drawElements(r,_,c,S*d),t.update(_,r,1)}function p(S,_,y){y!==0&&(s.drawElementsInstanced(r,_,c,S*d,y),t.update(_,r,y))}function v(S,_,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,S,0,y);let T=0;for(let x=0;x<y;x++)T+=_[x];t.update(T,r,1)}this.setMode=l,this.setIndex=f,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function Ew(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(c/3);break;case s.LINES:t.lines+=f*(c/2);break;case s.LINE_STRIP:t.lines+=f*(c-1);break;case s.LINE_LOOP:t.lines+=f*c;break;case s.POINTS:t.points+=f*c;break;default:jt("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:r}}function ww(s,e,t){const r=new WeakMap,l=new rn;function c(d,f,m){const p=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=v!==void 0?v.length:0;let _=r.get(f);if(_===void 0||_.count!==S){let O=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",O)};var y=O;_!==void 0&&_.texture.dispose();const w=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let A=0;w===!0&&(A=1),T===!0&&(A=2),x===!0&&(A=3);let I=f.attributes.position.count*A,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*P*4*S),D=new Cx(E,I,P,S);D.type=Bi,D.needsUpdate=!0;const J=A*4;for(let H=0;H<S;H++){const ee=M[H],re=L[H],z=U[H],V=I*P*4*H;for(let ne=0;ne<ee.count;ne++){const F=ne*J;w===!0&&(l.fromBufferAttribute(ee,ne),E[V+F+0]=l.x,E[V+F+1]=l.y,E[V+F+2]=l.z,E[V+F+3]=0),T===!0&&(l.fromBufferAttribute(re,ne),E[V+F+4]=l.x,E[V+F+5]=l.y,E[V+F+6]=l.z,E[V+F+7]=0),x===!0&&(l.fromBufferAttribute(z,ne),E[V+F+8]=l.x,E[V+F+9]=l.y,E[V+F+10]=l.z,E[V+F+11]=z.itemSize===4?l.w:1)}}_={count:S,texture:D,size:new It(I,P)},r.set(f,_),f.addEventListener("dispose",O)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)m.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let w=0;for(let x=0;x<p.length;x++)w+=p[x];const T=f.morphTargetsRelative?1:1-w;m.getUniforms().setValue(s,"morphTargetBaseInfluence",T),m.getUniforms().setValue(s,"morphTargetInfluences",p)}m.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Tw(s,e,t,r,l){let c=new WeakMap;function d(p){const v=l.render.frame,S=p.geometry,_=e.get(p,S);if(c.get(_)!==v&&(e.update(_),c.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),c.get(p)!==v&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),c.set(p,v))),p.isSkinnedMesh){const y=p.skeleton;c.get(y)!==v&&(y.update(),c.set(y,v))}return _}function f(){c=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:f}}const bw={[lx]:"LINEAR_TONE_MAPPING",[cx]:"REINHARD_TONE_MAPPING",[ux]:"CINEON_TONE_MAPPING",[dx]:"ACES_FILMIC_TONE_MAPPING",[hx]:"AGX_TONE_MAPPING",[px]:"NEUTRAL_TONE_MAPPING",[fx]:"CUSTOM_TONE_MAPPING"};function Cw(s,e,t,r,l,c){const d=new Gi(e,t,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,m=null,p=null;const v=new pi;v.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const S=new aM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),_=new $i(v,S),y=new vM(-1,1,1,-1,0,1);let w=null,T=null,x=!1,M,L=null,U=[],A=!1;this.setSize=function(I,P){d.setSize(I,P),f!==null&&f.setSize(I,P),m!==null&&m.setSize(I,P);for(let E=0;E<U.length;E++){const D=U[E];D.setSize&&D.setSize(I,P)}},this.setEffects=function(I){U=I,A=U.length>0&&U[0].isRenderPass===!0;const P=d.width,E=d.height;U.length>0&&f===null&&(f=new Gi(P,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}),m=new Gi(P,E,{type:Xi,depthBuffer:!1,stencilBuffer:!1}));const D=l===!0&&U.some(J=>J.needsDepthTexture===!0);D!==(d.depthTexture!==null)&&(D===!0&&p===null&&(p=new fa(P,E),c===!0&&(p.format=Br,p.type=da)),d.dispose(),d.depthTexture=D?p:null,d.resolveDepthBuffer=D,d.storeMultisampledDepthBuffer=D);for(let J=0;J<U.length;J++){const O=U[J];O.setSize&&O.setSize(P,E),D&&O.needsDepthTexture===!0&&O.setDepthTexture&&O.setDepthTexture(p)}},this.begin=function(I,P){if(x||I.toneMapping===cr&&U.length===0)return!1;if(L=P,P!==null){const E=P.width,D=P.height;(d.width!==E||d.height!==D)&&this.setSize(E,D)}return A===!1&&I.setRenderTarget(d),M=I.toneMapping,I.toneMapping=cr,!0},this.hasRenderPass=function(){return A},this.end=function(I,P){I.toneMapping=M,x=!0;let E=d,D=f;for(let J=0;J<U.length;J++){const O=U[J];O.enabled!==!1&&(O.render(I,D,E,P),O.needsSwap!==!1&&(E=D,D=D===f?m:f))}if(w!==I.outputColorSpace||T!==I.toneMapping){w=I.outputColorSpace,T=I.toneMapping,S.defines={},Lt.getTransfer(w)===Vt&&(S.defines.SRGB_TRANSFER="");const J=bw[T];J&&(S.defines[J]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=E.texture,I.setRenderTarget(L),I.render(_,y),L=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),m!==null&&m.dispose(),v.dispose(),S.dispose()}}const Vx=new Nn,Wx=new fa(1,1),Xx=new Ux(1),$x=new Cx,qx=new US,Yx=new Ix,Ag=[],Ng=[],Rg=new Float32Array(16),Pg=new Float32Array(9),Lg=new Float32Array(4);function ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const l=e*t;let c=Ag[l];if(c===void 0&&(c=new Float32Array(l),Ag[l]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(c,f)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=Ng[e];t===void 0&&(t=new Int32Array(e),Ng[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Aw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Nw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function Rw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function Pw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function Lw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Lg.set(r),s.uniformMatrix2fv(this.addr,!1,Lg),vn(t,r)}}function Dw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Pg.set(r),s.uniformMatrix3fv(this.addr,!1,Pg),vn(t,r)}}function Iw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Rg.set(r),s.uniformMatrix4fv(this.addr,!1,Rg),vn(t,r)}}function Uw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function kw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function Fw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function Ow(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function zw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function Bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function Hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Pc(s){return s.version===0&&(s.compareFunction=Tx,s.needsUpdate=!0),s}function Gw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?c=Pc(Wx):c=Vx,t.setTexture2D(e||c,l)}function Vw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture3D(e||qx,l)}function Ww(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Pc(Xx):c=Yx,t.setTextureCube(e||c,l)}function Xw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture2DArray(e||$x,l)}function $w(s){switch(s){case 5126:return Aw;case 35664:return Nw;case 35665:return Rw;case 35666:return Pw;case 35674:return Lw;case 35675:return Dw;case 35676:return Iw;case 5124:case 35670:return Uw;case 35667:case 35671:return kw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return zw;case 36294:return jw;case 36295:return Bw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Gw;case 35679:case 36299:case 36307:return Vw;case 35680:case 36300:case 36308:case 36293:return Ww;case 36289:case 36303:case 36311:case 36292:return Xw}}function qw(s,e){s.uniform1fv(this.addr,e)}function Yw(s,e){const t=ma(e,this.size,2);s.uniform2fv(this.addr,t)}function Kw(s,e){const t=ma(e,this.size,3);s.uniform3fv(this.addr,t)}function Zw(s,e){const t=ma(e,this.size,4);s.uniform4fv(this.addr,t)}function Qw(s,e){const t=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Jw(s,e){const t=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function eT(s,e){const t=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function tT(s,e){s.uniform1iv(this.addr,e)}function nT(s,e){s.uniform2iv(this.addr,e)}function iT(s,e){s.uniform3iv(this.addr,e)}function rT(s,e){s.uniform4iv(this.addr,e)}function sT(s,e){s.uniform1uiv(this.addr,e)}function aT(s,e){s.uniform2uiv(this.addr,e)}function oT(s,e){s.uniform3uiv(this.addr,e)}function lT(s,e){s.uniform4uiv(this.addr,e)}function cT(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Pc(Wx):d=Vx;for(let f=0;f!==l;++f)t.setTexture2D(e[f]||d,c[f])}function uT(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||qx,c[d])}function dT(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=Pc(Xx):d=Yx;for(let f=0;f!==l;++f)t.setTextureCube(e[f]||d,c[f])}function fT(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||$x,c[d])}function hT(s){switch(s){case 5126:return qw;case 35664:return Yw;case 35665:return Kw;case 35666:return Zw;case 35674:return Qw;case 35675:return Jw;case 35676:return eT;case 5124:case 35670:return tT;case 35667:case 35671:return nT;case 35668:case 35672:return iT;case 35669:case 35673:return rT;case 5125:return sT;case 36294:return aT;case 36295:return oT;case 36296:return lT;case 35678:case 36198:case 36298:case 36306:case 35682:return cT;case 35679:case 36299:case 36307:return uT;case 35680:case 36300:case 36308:case 36293:return dT;case 36289:case 36303:case 36311:case 36292:return fT}}class pT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=$w(t.type)}}class mT{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=hT(t.type)}}class gT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const f=l[c];f.setValue(e,t[f.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Dg(s,e){s.seq.push(e),s.map[e.id]=e}function xT(s,e,t){const r=s.name,l=r.length;for(Gd.lastIndex=0;;){const c=Gd.exec(r),d=Gd.lastIndex;let f=c[1];const m=c[2]==="]",p=c[3];if(m&&(f=f|0),p===void 0||p==="["&&d+2===l){Dg(t,p===void 0?new pT(f,s,e):new mT(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new gT(f),Dg(t,S)),t=S}}}class dc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),m=e.getUniformLocation(t,f.name);xT(f,m,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,t,r,l){const c=this.map[t];c!==void 0&&c.setValue(e,r,l)}setOptional(e,t,r){const l=t[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,t,r,l){for(let c=0,d=t.length;c!==d;++c){const f=t[c],m=r[f.id];m.needsUpdate!==!1&&f.setValue(e,m.value,l)}}static seqWithValue(e,t){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&r.push(d)}return r}}function Ig(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const vT=37297;let _T=0;function yT(s,e){const t=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const Ug=new yt;function ST(s){Lt._getMatrix(Ug,Lt.workingColorSpace,s);const e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function kg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+yT(s.getShaderSource(e),f)}else return c}function MT(s,e){const t=ST(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const ET={[lx]:"Linear",[cx]:"Reinhard",[ux]:"Cineon",[dx]:"ACESFilmic",[hx]:"AgX",[px]:"Neutral",[fx]:"Custom"};function wT(s,e){const t=ET[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new de;function TT(){Lt.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bT(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function CT(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function AT(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function so(s){return s!==""}function Fg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Og(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const NT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(s){return s.replace(NT,RT)}function RT(s,e){const t=wt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Of(t)}const PT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zg(s){return s.replace(PT,LT)}function LT(s,e,t,r){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function jg(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const DT={[sc]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function IT(s){return DT[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UT={[po]:"ENVMAP_MODE_REFRACTION"};function kT(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":UT[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const FT={[ox]:"ENVMAP_BLENDING_MULTIPLY",[uS]:"ENVMAP_BLENDING_MIX",[dS]:"ENVMAP_BLENDING_ADD"};function OT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":FT[s.combine]||"ENVMAP_BLENDING_NONE"}function zT(s,e,t,r){const l=s.getContext(),c=t.defines;let d=t.vertexShader,f=t.fragmentShader;const m=IT(t),p=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=kT(t),S=OT(t),_=bT(t),y=CT(c),w=l.createProgram();let T,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(so).join(`
`),T.length>0&&(T+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(so).join(`
`),x.length>0&&(x+=`
`)):(T=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),x=[jg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?wt.tonemapping_pars_fragment:"",t.toneMapping!==cr?wT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,MT("linearToOutputTexel",t.outputColorSpace),TT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),d=Of(d),d=Fg(d,t),d=Og(d,t),f=Of(f),f=Fg(f,t),f=Og(f,t),d=zg(d),f=zg(f),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,T=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,x=["#define varying in",t.glslVersion===Wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=M+T+d,U=M+x+f,A=Ig(l,l.VERTEX_SHADER,L),I=Ig(l,l.FRAGMENT_SHADER,U);l.attachShader(w,A),l.attachShader(w,I),t.index0AttributeName!==void 0?l.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(O){if(s.debug.checkShaderErrors){const H=l.getProgramInfoLog(w)||"",ee=l.getShaderInfoLog(A)||"",re=l.getShaderInfoLog(I)||"",z=H.trim(),V=ee.trim(),ne=re.trim();let F=!0,$=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(F=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,A,I);else{const W=kg(l,A,"vertex"),Q=kg(l,I,"fragment");jt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+O.name+`
Material Type: `+O.type+`

Program Info Log: `+z+`
`+W+`
`+Q)}else z!==""?pt("WebGLProgram: Program Info Log:",z):(V===""||ne==="")&&($=!1);$&&(O.diagnostics={runnable:F,programLog:z,vertexShader:{log:V,prefix:T},fragmentShader:{log:ne,prefix:x}})}l.deleteShader(A),l.deleteShader(I),E=new dc(l,w),D=AT(l,w)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(w,vT)),J},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_T++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=A,this.fragmentShader=I,this}let jT=0;class BT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const l=this._getShaderCacheForMaterial(e);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new HT(e),t.set(e,r)),r}}class HT{constructor(e){this.id=jT++,this.code=e,this.usedTimes=0}}function GT(s){return s===ms||s===gc||s===xc}function VT(s,e,t,r,l,c){const d=new Jf,f=new BT,m=new Set,p=[],v=new Map,S=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return m.add(E),E===0?"uv":`uv${E}`}function w(E,D,J,O,H,ee){const re=O.fog,z=H.geometry,V=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?O.environment:null,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,F=e.get(E.envMap||V,ne),$=_[E.type];let W=r.precision;E.precision!==null&&(W=r.getMaxPrecision(E.precision),W!==E.precision&&pt("WebGLProgram.getParameters:",E.precision,"not supported, using",W,"instead."));const Q=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,k=Q!==void 0?Q.length:0;let Z=0;z.morphAttributes.position!==void 0&&(Z=1),z.morphAttributes.normal!==void 0&&(Z=2),z.morphAttributes.color!==void 0&&(Z=3);let we,G,le,Me;if($){const We=Oi[$];we=We.vertexShader,G=We.fragmentShader}else{we=E.vertexShader,G=E.fragmentShader;const We=f.getVertexShaderStage(E),Pt=f.getFragmentShaderStage(E);f.update(E,We,Pt),le=We.id,Me=Pt.id}const Ee=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),ve=H.isInstancedMesh===!0,Qe=H.isBatchedMesh===!0,Fe=!!E.map,vt=!!E.matcap,mt=!!F,lt=mt&&F.isPMREMTexture===!0,bt=!!E.aoMap,ct=!!E.lightMap,_t=!!E.bumpMap&&E.wireframe===!1,ye=!!E.normalMap,He=!!E.displacementMap,Ge=!!E.emissiveMap,Tt=!!E.metalnessMap,be=!!E.roughnessMap,Ye=E.anisotropy>0,X=E.clearcoat>0,Ut=E.diffuseRoughness>0,Nt=E.dispersion>0,Ht=E.retroreflectivity>0,ze=E.iridescence>0,qt=E.sheen>0,rt=E.transmission>0,xe=Ye&&!!E.anisotropyMap,R=X&&!!E.clearcoatMap,b=X&&!!E.clearcoatNormalMap,ie=X&&!!E.clearcoatRoughnessMap,Te=Ut&&!!E.diffuseRoughnessMap,me=ze&&!!E.iridescenceMap,Ne=ze&&!!E.iridescenceThicknessMap,De=qt&&!!E.sheenColorMap,he=qt&&!!E.sheenRoughnessMap,ge=!!E.specularMap,Le=!!E.specularColorMap,B=!!E.specularIntensityMap,_e=rt&&!!E.transmissionMap,pe=rt&&!!E.thicknessMap,Oe=!!E.gradientMap,Ie=!!E.alphaMap,ke=E.alphaTest>0,st=!!E.alphaHash,St=!!E.extensions;let Re=cr;E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Re=s.toneMapping);const ut=lt?F.isCompressedCubeTexture?F.image[0].mipmaps:F.mipmaps:null,gt={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:we,fragmentShader:G,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:Me,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:W,batching:Qe,batchingColor:Qe&&H._colorsTexture!==null,instancing:ve,instancingColor:ve&&H.instanceColor!==null,instancingMorph:ve&&H.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Fe,matcap:vt,envMap:mt,envMapMode:mt&&F.mapping,envMapPMREM:lt,envMapMaxLod:lt?ut.length-1:null,envMapSize:lt?ut[0].width:null,aoMap:bt,lightMap:ct,bumpMap:_t,normalMap:ye,displacementMap:He,emissiveMap:Ge,normalMapObjectSpace:ye&&E.normalMapType===pS,normalMapTangentSpace:ye&&E.normalMapType===Df,packedNormalMap:ye&&E.normalMapType===Df&&GT(E.normalMap.format),metalnessMap:Tt,roughnessMap:be,anisotropy:Ye,anisotropyMap:xe,clearcoat:X,clearcoatMap:R,clearcoatNormalMap:b,clearcoatRoughnessMap:ie,diffuseRoughness:Ut,diffuseRoughnessMap:Te,dispersion:Nt,retroreflection:Ht,iridescence:ze,iridescenceMap:me,iridescenceThicknessMap:Ne,sheen:qt,sheenColorMap:De,sheenRoughnessMap:he,specularMap:ge,specularColorMap:Le,specularIntensityMap:B,transmission:rt,transmissionMap:_e,thicknessMap:pe,gradientMap:Oe,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ke,alphaHash:st,combine:E.combine,mapUv:Fe&&y(E.map.channel),aoMapUv:bt&&y(E.aoMap.channel),lightMapUv:ct&&y(E.lightMap.channel),bumpMapUv:_t&&y(E.bumpMap.channel),normalMapUv:ye&&y(E.normalMap.channel),displacementMapUv:He&&y(E.displacementMap.channel),emissiveMapUv:Ge&&y(E.emissiveMap.channel),metalnessMapUv:Tt&&y(E.metalnessMap.channel),roughnessMapUv:be&&y(E.roughnessMap.channel),anisotropyMapUv:xe&&y(E.anisotropyMap.channel),clearcoatMapUv:R&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:b&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:Te&&y(E.diffuseRoughnessMap.channel),iridescenceMapUv:me&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:De&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(E.sheenRoughnessMap.channel),specularMapUv:ge&&y(E.specularMap.channel),specularColorMapUv:Le&&y(E.specularColorMap.channel),specularIntensityMapUv:B&&y(E.specularIntensityMap.channel),transmissionMapUv:_e&&y(E.transmissionMap.channel),thicknessMapUv:pe&&y(E.thicknessMap.channel),alphaMapUv:Ie&&y(E.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(ye||Ye),vertexNormals:!!z.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!z.attributes.uv&&(Fe||Ie),fog:!!re,useFog:E.fog===!0,fogExp2:!!re&&re.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||z.attributes.normal===void 0&&ye===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:Se,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:z.attributes.position!==void 0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:Z,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.filter(We=>We.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Fe&&E.map.isVideoTexture===!0&&Lt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ge&&E.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===zi,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:St&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(St&&E.extensions.multiDraw===!0||Qe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return gt.vertexUv1s=m.has(1),gt.vertexUv2s=m.has(2),gt.vertexUv3s=m.has(3),m.clear(),gt}function T(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const J in E.defines)D.push(J),D.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(x(D,E),M(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapPMREM),E.push(D.envMapMaxLod),E.push(D.envMapSize),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.diffuseRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.numLightProbeGrids),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function M(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.retroreflection&&d.enable(24),D.diffuseRoughness&&d.enable(25),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function L(E){const D=_[E.type];let J;if(D){const O=Oi[D];J=iM.clone(O.uniforms)}else J=E.uniforms;return J}function U(E,D){let J=v.get(D);return J!==void 0?++J.usedTimes:(J=new zT(s,D,E,l),p.push(J),v.set(D,J)),J}function A(E){if(--E.usedTimes===0){const D=p.indexOf(E);p[D]=p[p.length-1],p.pop(),v.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function P(){f.dispose()}return{getParameters:w,getProgramCacheKey:T,getUniforms:L,acquireProgram:U,releaseProgram:A,releaseShaderCache:I,programs:p,dispose:P}}function WT(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function l(d,f,m){s.get(d)[f]=m}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:l,dispose:c}}function XT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Bg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hg(){const s=[];let e=0;const t=[],r=[],l=[];function c(){e=0,t.length=0,r.length=0,l.length=0}function d(_){let y=0;return _.isInstancedMesh&&(y+=2),_.isSkinnedMesh&&(y+=1),y}function f(_,y,w,T,x,M){let L=s[e];return L===void 0?(L={id:_.id,object:_,geometry:y,material:w,materialVariant:d(_),groupOrder:T,renderOrder:_.renderOrder,z:x,group:M},s[e]=L):(L.id=_.id,L.object=_,L.geometry=y,L.material=w,L.materialVariant=d(_),L.groupOrder=T,L.renderOrder=_.renderOrder,L.z=x,L.group=M),e++,L}function m(_,y,w,T,x,M,L){L.reversedDepth===!0&&(x=-x);const U=f(_,y,w,T,x,M);w.transmission>0?r.push(U):w.transparent===!0?l.push(U):t.push(U)}function p(_,y,w,T,x,M){const L=f(_,y,w,T,x,M);w.transmission>0?r.unshift(L):w.transparent===!0?l.unshift(L):t.unshift(L)}function v(_,y){t.length>1&&t.sort(_||XT),r.length>1&&r.sort(y||Bg),l.length>1&&l.sort(y||Bg)}function S(){for(let _=e,y=s.length;_<y;_++){const w=s[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:l,init:c,push:m,unshift:p,finish:S,sort:v}}function $T(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Hg,s.set(r,[d])):l>=c.length?(d=new Hg,c.push(d)):d=c[l],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function qT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Mt};break;case"SpotLight":t={position:new de,direction:new de,color:new Mt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Mt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Mt,groundColor:new Mt};break;case"RectAreaLight":t={color:new Mt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function YT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let KT=0;function ZT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function QT(s){const e=new qT,t=YT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new de);const l=new de,c=new $t,d=new $t;function f(p){let v=0,S=0,_=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,w=0,T=0,x=0,M=0,L=0,U=0,A=0,I=0,P=0,E=0,D=0,J=0,O=0;p.sort(ZT);for(let ee=0,re=p.length;ee<re;ee++){const z=p[ee],V=z.color,ne=z.intensity,F=z.distance;let $=null;if(z.shadow&&z.shadow.map&&(z.shadow.map.texture.format===ms?$=z.shadow.map.texture:$=z.shadow.map.depthTexture||z.shadow.map.texture),z.isAmbientLight)v+=V.r*ne,S+=V.g*ne,_+=V.b*ne;else if(z.isLightProbe){for(let W=0;W<9;W++)r.probe[W].addScaledVector(z.sh.coefficients[W],ne);O++}else if(z.isSunLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Q=z.shadow,k=t.get(z);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[w]=k,r.sunShadowMap[w]=$;const Z=Q.getViewportCount();for(let we=0;we<Z;we++)r.sunShadowMatrix[T+we]=Q.getMatrix(we),r.sunShadowCascade[T+we]=Q._cascadeData[we];T+=Z,w++}r.sun[y]=W,y++}else if(z.isDirectionalLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),z.castShadow){const Q=z.shadow,k=t.get(z);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.directionalShadow[x]=k,r.directionalShadowMap[x]=$,r.directionalShadowMatrix[x]=z.shadow.matrix,I++}r.directional[x]=W,x++}else if(z.isSpotLight){const W=e.get(z);W.position.setFromMatrixPosition(z.matrixWorld),W.color.copy(V).multiplyScalar(ne),W.distance=F,W.coneCos=Math.cos(z.angle),W.penumbraCos=Math.cos(z.angle*(1-z.penumbra)),W.decay=z.decay,r.spot[L]=W;const Q=z.shadow;if(z.map&&(r.spotLightMap[D]=z.map,D++,Q.updateMatrices(z),z.castShadow&&J++),r.spotLightMatrix[L]=Q.matrix,z.castShadow){const k=t.get(z);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,r.spotShadow[L]=k,r.spotShadowMap[L]=$,E++}L++}else if(z.isRectAreaLight){const W=e.get(z);W.color.copy(V).multiplyScalar(ne),W.halfWidth.set(z.width*.5,0,0),W.halfHeight.set(0,z.height*.5,0),r.rectArea[U]=W,U++}else if(z.isPointLight){const W=e.get(z);if(W.color.copy(z.color).multiplyScalar(z.intensity),W.distance=z.distance,W.decay=z.decay,z.castShadow){const Q=z.shadow,k=t.get(z);k.shadowIntensity=Q.intensity,k.shadowBias=Q.bias,k.shadowNormalBias=Q.normalBias,k.shadowRadius=Q.radius,k.shadowMapSize=Q.mapSize,k.shadowCameraNear=Q.camera.near,k.shadowCameraFar=Q.camera.far,r.pointShadow[M]=k,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=z.shadow.matrix,P++}r.point[M]=W,M++}else if(z.isHemisphereLight){const W=e.get(z);W.skyColor.copy(z.color).multiplyScalar(ne),W.groundColor.copy(z.groundColor).multiplyScalar(ne),r.hemi[A]=W,A++}}U>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Xe.LTC_FLOAT_1,r.rectAreaLTC2=Xe.LTC_FLOAT_2):(r.rectAreaLTC1=Xe.LTC_HALF_1,r.rectAreaLTC2=Xe.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=S,r.ambient[2]=_;const H=r.hash;(H.sunLength!==y||H.directionalLength!==x||H.pointLength!==M||H.spotLength!==L||H.rectAreaLength!==U||H.hemiLength!==A||H.numSunShadows!==w||H.numDirectionalShadows!==I||H.numPointShadows!==P||H.numSpotShadows!==E||H.numSpotMaps!==D||H.numLightProbes!==O)&&(r.sun.length=y,r.directional.length=x,r.spot.length=L,r.rectArea.length=U,r.point.length=M,r.hemi.length=A,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+D-J,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=O,H.sunLength=y,H.directionalLength=x,H.pointLength=M,H.spotLength=L,H.rectAreaLength=U,H.hemiLength=A,H.numSunShadows=w,H.numDirectionalShadows=I,H.numPointShadows=P,H.numSpotShadows=E,H.numSpotMaps=D,H.numLightProbes=O,r.version=KT++)}function m(p,v){let S=0,_=0,y=0,w=0,T=0,x=0;const M=v.matrixWorldInverse;for(let L=0,U=p.length;L<U;L++){const A=p[L];if(A.isSunLight){const I=r.sun[S];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(M),S++}else if(A.isDirectionalLight){const I=r.directional[_];I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),_++}else if(A.isSpotLight){const I=r.spot[w];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),w++}else if(A.isRectAreaLight){const I=r.rectArea[T];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),d.identity(),c.copy(A.matrixWorld),c.premultiply(M),d.extractRotation(c),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),T++}else if(A.isPointLight){const I=r.point[y];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),y++}else if(A.isHemisphereLight){const I=r.hemi[x];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(M),x++}}}return{setup:f,setupView:m,state:r}}function Gg(s){const e=new QT(s),t=[],r=[],l=[];function c(S){v.camera=S,t.length=0,r.length=0,l.length=0}function d(S){S.isLightProbeGrid?l.push(S):t.push(S)}function f(S){r.push(S)}function m(){e.setup(t),l.sort((S,_)=>S.priority-_.priority||S.id-_.id)}function p(S){e.setupView(t,S)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:m,setupLightsView:p,pushLight:d,pushShadow:f}}function JT(s){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let f;return d===void 0?(f=new Gg(s),e.set(l,[f])):c>=d.length?(f=new Gg(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const eb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,tb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,nb=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],ib=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Vg=new $t,io=new de,Vd=new de;function rb(s,e,t){let r=new vo;const l=new It,c=new It,d=new rn,f=new lM,m=new cM,p={},v=t.maxTextureSize,S={[ps]:Kn,[Kn]:ps,[zi]:zi},_=new gs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:eb,fragmentShader:tb}),y=_.clone();y.defines.HORIZONTAL_PASS=1;const w=new pi;w.setAttribute("position",new dr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new $i(w,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let M=this.type;this.render=function(P,E,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===Wy&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sc);const J=s.getRenderTarget(),O=s.getActiveCubeFace(),H=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(oa),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const re=M!==this.type;re&&E.traverse(function(z){z.material&&(Array.isArray(z.material)?z.material.forEach(V=>V.needsUpdate=!0):z.material.needsUpdate=!0)});for(let z=0,V=P.length;z<V;z++){const ne=P[z],F=ne.shadow;if(F===void 0){pt("WebGLShadowMap:",ne,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;l.copy(F.mapSize);const $=F.getFrameExtents();l.multiply($),c.copy(F.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/$.x),l.x=c.x*$.x,F.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/$.y),l.y=c.y*$.y,F.mapSize.y=c.y));const W=s.state.buffers.depth.getReversed();if(F.camera._reversedDepth=W,F.map===null||re===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===ro){if(ne.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Gi(l.x,l.y,{format:ms,type:Xi,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),F.map.texture.name=ne.name+".shadowMap",F.map.depthTexture=new fa(l.x,l.y,Bi),F.map.depthTexture.name=ne.name+".shadowMapDepth",F.map.depthTexture.format=Xr,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=An,F.map.depthTexture.magFilter=An}else ne.isPointLight?(F.map=new ih(l.x),F.map.depthTexture=new Ux(l.x,Wi)):(F.map=new Gi(l.x,l.y),F.map.depthTexture=new fa(l.x,l.y,Wi)),F.map.depthTexture.name=ne.name+".shadowMap",F.map.depthTexture.format=Xr,this.type===sc?(F.map.depthTexture.compareFunction=W?wx:Ex,F.map.depthTexture.minFilter=Yn,F.map.depthTexture.magFilter=Yn):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=An,F.map.depthTexture.magFilter=An);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==l.x||F.map.height!==l.y)&&F.map.setSize(l.x,l.y);const Q=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();ne.isPointLight!==!0&&F.updateMatrices(ne,D);const k=(F.camera.layers.mask&4294967294)!==0?F.camera.layers:D.layers;for(let Z=0;Z<Q;Z++){const we=F.getCamera(Z);if(ne.isPointLight){const G=F.camera,le=F.matrix,Me=ne.distance||G.far;Me!==G.far&&(G.far=Me,G.updateProjectionMatrix()),io.setFromMatrixPosition(ne.matrixWorld),G.position.copy(io),Vd.copy(G.position),Vd.add(nb[Z]),G.up.copy(ib[Z]),G.lookAt(Vd),G.updateMatrixWorld(),le.makeTranslation(-io.x,-io.y,-io.z),Vg.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Vg,G.coordinateSystem,G.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)s.setRenderTarget(F.map,Z),s.clear();else{Z===0&&(s.setRenderTarget(F.map),s.clear());const G=F.getViewport(Z);d.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),ee.viewport(d)}r=F.getFrustum(Z),A(E,D,we,ne,k,this.type)}F.isPointLightShadow!==!0&&this.type===ro&&L(F,D),F.needsUpdate=!1}M=this.type,x.needsUpdate=!1,s.setRenderTarget(J,O,H)};function L(P,E){const D=e.update(T);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null?P.mapPass=new Gi(l.x,l.y,{format:ms,type:Xi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(E,null,D,_,T,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value.set(P.map.width,P.map.height),y.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(E,null,D,y,T,null)}function U(P,E,D,J){let O=null;const H=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(H!==void 0)O=H;else if(O=D.isPointLight===!0?m:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ee=O.uuid,re=E.uuid;let z=p[ee];z===void 0&&(z={},p[ee]=z);let V=z[re];V===void 0&&(V=O.clone(),z[re]=V,E.addEventListener("dispose",I)),O=V}if(O.visible=E.visible,O.wireframe=E.wireframe,J===ro?O.side=E.shadowSide!==null?E.shadowSide:E.side:O.side=E.shadowSide!==null?E.shadowSide:S[E.side],O.alphaMap=E.alphaMap,O.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,O.map=E.map,O.clipShadows=E.clipShadows,O.clippingPlanes=E.clippingPlanes,O.clipIntersection=E.clipIntersection,O.displacementMap=E.displacementMap,O.displacementScale=E.displacementScale,O.displacementBias=E.displacementBias,O.wireframeLinewidth=E.wireframeLinewidth,O.linewidth=E.linewidth,D.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const ee=s.properties.get(O);ee.light=D}return O}function A(P,E,D,J,O,H){if(P.visible===!1)return;if(P.layers.test(O)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===ro)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const z=e.update(P),V=P.material;if(Array.isArray(V)){const ne=z.groups;for(let F=0,$=ne.length;F<$;F++){const W=ne[F],Q=V[W.materialIndex];if(Q&&Q.visible){const k=U(P,Q,J,H);P.onBeforeShadow(s,P,E,D,z,k,W),s.renderBufferDirect(D,null,z,k,P,W),P.onAfterShadow(s,P,E,D,z,k,W)}}}else if(V.visible){const ne=U(P,V,J,H);P.onBeforeShadow(s,P,E,D,z,ne,null),s.renderBufferDirect(D,null,z,ne,P,null),P.onAfterShadow(s,P,E,D,z,ne,null)}}const re=P.children;for(let z=0,V=re.length;z<V;z++)A(re[z],E,D,J,O,H)}function I(P){P.target.removeEventListener("dispose",I);for(const D in p){const J=p[D],O=P.target.uuid;O in J&&(J[O].dispose(),delete J[O])}}}function sb(s,e){function t(){let B=!1;const _e=new rn;let pe=null;const Oe=new rn(0,0,0,0);return{setMask:function(Ie){pe!==Ie&&!B&&(s.colorMask(Ie,Ie,Ie,Ie),pe=Ie)},setLocked:function(Ie){B=Ie},setClear:function(Ie,ke,st,St,Re){Re===!0&&(Ie*=St,ke*=St,st*=St),_e.set(Ie,ke,st,St),Oe.equals(_e)===!1&&(s.clearColor(Ie,ke,st,St),Oe.copy(_e))},reset:function(){B=!1,pe=null,Oe.set(-1,0,0,0)}}}function r(){let B=!1,_e=!1,pe=null,Oe=null,Ie=null;return{setReversed:function(ke){if(_e!==ke){const st=e.get("EXT_clip_control");ke?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),_e=ke;const St=Ie;Ie=null,this.setClear(St)}},getReversed:function(){return _e},setTest:function(ke){ke?Se(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(ke){pe!==ke&&!B&&(s.depthMask(ke),pe=ke)},setFunc:function(ke){if(_e&&(ke=TS[ke]),Oe!==ke){switch(ke){case $d:s.depthFunc(s.NEVER);break;case qd:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Kd:s.depthFunc(s.EQUAL);break;case Zd:s.depthFunc(s.GEQUAL);break;case Qd:s.depthFunc(s.GREATER);break;case Jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Oe=ke}},setLocked:function(ke){B=ke},setClear:function(ke){Ie!==ke&&(Ie=ke,_e&&(ke=1-ke),s.clearDepth(ke))},reset:function(){B=!1,pe=null,Oe=null,Ie=null,_e=!1}}}function l(){let B=!1,_e=null,pe=null,Oe=null,Ie=null,ke=null,st=null,St=null,Re=null;return{setTest:function(ut){B||(ut?Se(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(ut){_e!==ut&&!B&&(s.stencilMask(ut),_e=ut)},setFunc:function(ut,gt,We){(pe!==ut||Oe!==gt||Ie!==We)&&(s.stencilFunc(ut,gt,We),pe=ut,Oe=gt,Ie=We)},setOp:function(ut,gt,We){(ke!==ut||st!==gt||St!==We)&&(s.stencilOp(ut,gt,We),ke=ut,st=gt,St=We)},setLocked:function(ut){B=ut},setClear:function(ut){Re!==ut&&(s.clearStencil(ut),Re=ut)},reset:function(){B=!1,_e=null,pe=null,Oe=null,Ie=null,ke=null,st=null,St=null,Re=null}}}const c=new t,d=new r,f=new l;let m={};const p=new WeakMap;let v={},S={},_={},y=new WeakMap,w=[],T=null,x=!1,M=null,L=null,U=null,A=null,I=null,P=null,E=null,D=new Mt(0,0,0),J=0,O=!1,H=null,ee=null,re=null,z=null,V=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,$=0;const W=s.getParameter(s.VERSION);W.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(W)[1]),F=$>=1):W.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),F=$>=2);let Q=null,k={};const Z=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),G=new rn().fromArray(Z),le=new rn().fromArray(we);function Me(B,_e,pe,Oe){const Ie=new Uint8Array(4),ke=s.createTexture();s.bindTexture(B,ke),s.texParameteri(B,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(B,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<pe;st++)B===s.TEXTURE_3D||B===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,Oe,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(_e+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return ke}const Ee={};Ee[s.TEXTURE_2D]=Me(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=Me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=Me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=Me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Se(s.DEPTH_TEST),d.setFunc(ho),_t(!1),ye(Hm),Se(s.CULL_FACE),bt(oa);function Se(B){v[B]!==!0&&(s.enable(B),v[B]=!0)}function ve(B){v[B]!==!1&&(s.disable(B),v[B]=!1)}function Qe(B,_e){return _[B]!==_e?(s.bindFramebuffer(B,_e),_[B]=_e,B===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),B===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Fe(B,_e){let pe=w,Oe=!1;if(B){pe=y.get(_e),pe===void 0&&(pe=[],y.set(_e,pe));const Ie=B.textures;if(pe.length!==Ie.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let ke=0,st=Ie.length;ke<st;ke++)pe[ke]=s.COLOR_ATTACHMENT0+ke;pe.length=Ie.length,Oe=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,Oe=!0);Oe&&s.drawBuffers(pe)}function vt(B){return T!==B?(s.useProgram(B),T=B,!0):!1}const mt={[ia]:s.FUNC_ADD,[$y]:s.FUNC_SUBTRACT,[qy]:s.FUNC_REVERSE_SUBTRACT};mt[Yy]=s.MIN,mt[Ky]=s.MAX;const lt={[Zy]:s.ZERO,[Qy]:s.ONE,[Jy]:s.SRC_COLOR,[sx]:s.SRC_ALPHA,[sS]:s.SRC_ALPHA_SATURATE,[iS]:s.DST_COLOR,[tS]:s.DST_ALPHA,[eS]:s.ONE_MINUS_SRC_COLOR,[ax]:s.ONE_MINUS_SRC_ALPHA,[rS]:s.ONE_MINUS_DST_COLOR,[nS]:s.ONE_MINUS_DST_ALPHA,[aS]:s.CONSTANT_COLOR,[oS]:s.ONE_MINUS_CONSTANT_COLOR,[lS]:s.CONSTANT_ALPHA,[cS]:s.ONE_MINUS_CONSTANT_ALPHA};function bt(B,_e,pe,Oe,Ie,ke,st,St,Re,ut){if(B===oa){x===!0&&(ve(s.BLEND),x=!1);return}if(x===!1&&(Se(s.BLEND),x=!0),B!==Xy){if(B!==M||ut!==O){if((L!==ia||I!==ia)&&(s.blendEquation(s.FUNC_ADD),L=ia,I=ia),ut)switch(B){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFunc(s.ONE,s.ONE);break;case Gm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Vm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:jt("WebGLState: Invalid blending: ",B);break}else switch(B){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Gm:jt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Vm:jt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:jt("WebGLState: Invalid blending: ",B);break}U=null,A=null,P=null,E=null,D.set(0,0,0),J=0,M=B,O=ut}return}Ie=Ie||_e,ke=ke||pe,st=st||Oe,(_e!==L||Ie!==I)&&(s.blendEquationSeparate(mt[_e],mt[Ie]),L=_e,I=Ie),(pe!==U||Oe!==A||ke!==P||st!==E)&&(s.blendFuncSeparate(lt[pe],lt[Oe],lt[ke],lt[st]),U=pe,A=Oe,P=ke,E=st),(St.equals(D)===!1||Re!==J)&&(s.blendColor(St.r,St.g,St.b,Re),D.copy(St),J=Re),M=B,O=!1}function ct(B,_e){B.side===zi?ve(s.CULL_FACE):Se(s.CULL_FACE);let pe=B.side===Kn;_e&&(pe=!pe),_t(pe),B.blending===lo&&B.transparent===!1?bt(oa):bt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),d.setFunc(B.depthFunc),d.setTest(B.depthTest),d.setMask(B.depthWrite),c.setMask(B.colorWrite);const Oe=B.stencilWrite;f.setTest(Oe),Oe&&(f.setMask(B.stencilWriteMask),f.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),f.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),Ge(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function _t(B){H!==B&&(B?s.frontFace(s.CW):s.frontFace(s.CCW),H=B)}function ye(B){B!==Gy?(Se(s.CULL_FACE),B!==ee&&(B===Hm?s.cullFace(s.BACK):B===Vy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),ee=B}function He(B){B!==re&&(F&&s.lineWidth(B),re=B)}function Ge(B,_e,pe){B?(Se(s.POLYGON_OFFSET_FILL),(z!==_e||V!==pe)&&(z=_e,V=pe,d.getReversed()&&(_e=-_e,pe=-pe),s.polygonOffset(_e,pe))):ve(s.POLYGON_OFFSET_FILL)}function Tt(B){B?Se(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function be(B){B===void 0&&(B=s.TEXTURE0+ne-1),Q!==B&&(s.activeTexture(B),Q=B)}function Ye(B,_e,pe){pe===void 0&&(Q===null?pe=s.TEXTURE0+ne-1:pe=Q);let Oe=k[pe];Oe===void 0&&(Oe={type:void 0,texture:void 0},k[pe]=Oe),(Oe.type!==B||Oe.texture!==_e)&&(Q!==pe&&(s.activeTexture(pe),Q=pe),s.bindTexture(B,_e||Ee[B]),Oe.type=B,Oe.texture=_e)}function X(){const B=k[Q];B!==void 0&&B.type!==void 0&&(s.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Ut(){try{s.compressedTexImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function Nt(){try{s.compressedTexImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function Ht(){try{s.texSubImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function ze(){try{s.texSubImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function qt(){try{s.compressedTexSubImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function rt(){try{s.compressedTexSubImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function xe(){try{s.texStorage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function R(){try{s.texStorage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function b(){try{s.texImage2D(...arguments)}catch(B){jt("WebGLState:",B)}}function ie(){try{s.texImage3D(...arguments)}catch(B){jt("WebGLState:",B)}}function Te(B){return S[B]!==void 0?S[B]:s.getParameter(B)}function me(B,_e){S[B]!==_e&&(s.pixelStorei(B,_e),S[B]=_e)}function Ne(B){G.equals(B)===!1&&(s.scissor(B.x,B.y,B.z,B.w),G.copy(B))}function De(B){le.equals(B)===!1&&(s.viewport(B.x,B.y,B.z,B.w),le.copy(B))}function he(B,_e){let pe=p.get(_e);pe===void 0&&(pe=new WeakMap,p.set(_e,pe));let Oe=pe.get(B);Oe===void 0&&(Oe=s.getUniformBlockIndex(_e,B.name),s.uniformBlockBinding(_e,Oe,Oe),pe.set(B,Oe))}function ge(B,_e,pe){const Ie=p.get(_e).get(B);m[Ie]!==pe&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ie,pe),m[Ie]=pe)}function Le(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},S={},Q=null,k={},_={},m={},y=new WeakMap,w=[],T=null,x=!1,M=null,L=null,U=null,A=null,I=null,P=null,E=null,D=new Mt(0,0,0),J=0,O=!1,H=null,ee=null,re=null,z=null,V=null,G.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Se,disable:ve,bindFramebuffer:Qe,drawBuffers:Fe,useProgram:vt,setBlending:bt,setMaterial:ct,setFlipSided:_t,setCullFace:ye,setLineWidth:He,setPolygonOffset:Ge,setScissorTest:Tt,activeTexture:be,bindTexture:Ye,unbindTexture:X,compressedTexImage2D:Ut,compressedTexImage3D:Nt,texImage2D:b,texImage3D:ie,pixelStorei:me,getParameter:Te,updateUBOMapping:he,uniformBlockBinding:ge,texStorage2D:xe,texStorage3D:R,texSubImage2D:Ht,texSubImage3D:ze,compressedTexSubImage2D:qt,compressedTexSubImage3D:rt,scissor:Ne,viewport:De,reset:Le}}function ab(s,e,t,r,l,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new It,v=new WeakMap,S=new Set;let _;const y=new WeakMap,w=new Set,T=new FinalizationRegistry(R=>w.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,b){return x?new OffscreenCanvas(R,b):xo("canvas")}function L(R,b,ie){let Te=1;const me=xe(R);if((me.width>ie||me.height>ie)&&(Te=ie/Math.max(me.width,me.height)),Te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ne=Math.floor(Te*me.width),De=Math.floor(Te*me.height);_===void 0&&(_=M(Ne,De));const he=b?M(Ne,De):_;return he.width=Ne,he.height=De,he.getContext("2d").drawImage(R,0,0,Ne,De),pt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ne+"x"+De+")."),he}else return"data"in R&&pt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),R;return R}function U(R){return R.generateMipmaps}function A(R){s.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,b,ie,Te,me,Ne=!1){if(R!==null){if(s[R]!==void 0)return s[R];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let De;Te&&(De=e.get("EXT_texture_norm16"),De||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=b;if(b===s.RED&&(ie===s.FLOAT&&(he=s.R32F),ie===s.HALF_FLOAT&&(he=s.R16F),ie===s.UNSIGNED_BYTE&&(he=s.R8),ie===s.UNSIGNED_SHORT&&De&&(he=De.R16_EXT),ie===s.SHORT&&De&&(he=De.R16_SNORM_EXT)),b===s.RED_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.R8UI),ie===s.UNSIGNED_SHORT&&(he=s.R16UI),ie===s.UNSIGNED_INT&&(he=s.R32UI),ie===s.BYTE&&(he=s.R8I),ie===s.SHORT&&(he=s.R16I),ie===s.INT&&(he=s.R32I)),b===s.RG&&(ie===s.FLOAT&&(he=s.RG32F),ie===s.HALF_FLOAT&&(he=s.RG16F),ie===s.UNSIGNED_BYTE&&(he=s.RG8),ie===s.UNSIGNED_SHORT&&De&&(he=De.RG16_EXT),ie===s.SHORT&&De&&(he=De.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RG8UI),ie===s.UNSIGNED_SHORT&&(he=s.RG16UI),ie===s.UNSIGNED_INT&&(he=s.RG32UI),ie===s.BYTE&&(he=s.RG8I),ie===s.SHORT&&(he=s.RG16I),ie===s.INT&&(he=s.RG32I)),b===s.RGB_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGB8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGB16UI),ie===s.UNSIGNED_INT&&(he=s.RGB32UI),ie===s.BYTE&&(he=s.RGB8I),ie===s.SHORT&&(he=s.RGB16I),ie===s.INT&&(he=s.RGB32I)),b===s.RGBA_INTEGER&&(ie===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),ie===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),ie===s.UNSIGNED_INT&&(he=s.RGBA32UI),ie===s.BYTE&&(he=s.RGBA8I),ie===s.SHORT&&(he=s.RGBA16I),ie===s.INT&&(he=s.RGBA32I)),b===s.RGB&&(ie===s.UNSIGNED_SHORT&&De&&(he=De.RGB16_EXT),ie===s.SHORT&&De&&(he=De.RGB16_SNORM_EXT),ie===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),ie===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),b===s.RGBA){const ge=Ne?_c:Lt.getTransfer(me);ie===s.FLOAT&&(he=s.RGBA32F),ie===s.HALF_FLOAT&&(he=s.RGBA16F),ie===s.UNSIGNED_BYTE&&(he=ge===Vt?s.SRGB8_ALPHA8:s.RGBA8),ie===s.UNSIGNED_SHORT&&De&&(he=De.RGBA16_EXT),ie===s.SHORT&&De&&(he=De.RGBA16_SNORM_EXT),ie===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),ie===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function E(R,b){let ie;return R?b===null||b===Wi||b===da?ie=s.DEPTH24_STENCIL8:b===Bi?ie=s.DEPTH32F_STENCIL8:b===mo&&(ie=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===Wi||b===da?ie=s.DEPTH_COMPONENT24:b===Bi?ie=s.DEPTH_COMPONENT32F:b===mo&&(ie=s.DEPTH_COMPONENT16),ie}function D(R,b){return U(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Yn?Math.log2(Math.max(b.width,b.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?b.mipmaps.length:1}function J(R){const b=new WeakRef(R);r.get(R).__ref=b,w.add(b),T.register(R,b,b)}function O(R){const b=r.get(R).__ref;b!==void 0&&(w.delete(b),T.unregister(b))}function H(R){re(R.target)}function ee(R){z(R.target)}function re(R){R.removeEventListener("dispose",H),O(R),ne(R),R.isVideoTexture&&v.delete(R),R.isHTMLTexture&&S.delete(R)}function z(R){R.removeEventListener("dispose",ee),O(R),$(R)}function V(){for(const R of w){const b=R.deref();b!==void 0&&(b.isRenderTarget===!0?z(b):re(b))}w.clear(),S.clear()}function ne(R){const b=r.get(R);if(b.__webglInit===void 0)return;const ie=R.source,Te=y.get(ie);if(Te){const me=Te[b.__cacheKey];me.usedTimes--,me.usedTimes===0&&F(R),Object.keys(Te).length===0&&y.delete(ie)}r.remove(R)}function F(R){const b=r.get(R);s.deleteTexture(b.__webglTexture);const ie=R.source,Te=y.get(ie);delete Te[b.__cacheKey],d.memory.textures--}function $(R){const b=r.get(R);b.__depthDisposeCallback&&b.__depthDisposeCallback();const ie=R.depthTexture;if(ie&&ie.renderTarget===R&&re(ie),R.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(b.__webglFramebuffer[me]))for(let Ne=0;Ne<b.__webglFramebuffer[me].length;Ne++)s.deleteFramebuffer(b.__webglFramebuffer[me][Ne]);else s.deleteFramebuffer(b.__webglFramebuffer[me]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[me])}else{if(Array.isArray(b.__webglFramebuffer))for(let me=0;me<b.__webglFramebuffer.length;me++)s.deleteFramebuffer(b.__webglFramebuffer[me]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let me=0;me<b.__webglColorRenderbuffer.length;me++)b.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[me]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const Te=R.textures;for(let me=0,Ne=Te.length;me<Ne;me++){const De=r.get(Te[me]);De.__webglTexture&&(s.deleteTexture(De.__webglTexture),d.memory.textures--),r.remove(Te[me])}r.remove(R)}let W=0;function Q(){W=0}function k(){return W}function Z(R){W=R}function we(){const R=W;return R>=l.maxTextures&&pt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+l.maxTextures),W+=1,R}function G(R){const b=[];return b.push(R.wrapS),b.push(R.wrapT),b.push(R.wrapR||0),b.push(R.magFilter),b.push(R.minFilter),b.push(R.anisotropy),b.push(R.internalFormat),b.push(R.format),b.push(R.type),b.push(R.generateMipmaps),b.push(R.mipmapsAutoUpdate),b.push(R.premultiplyAlpha),b.push(R.flipY),b.push(R.unpackAlignment),b.push(R.colorSpace),b.join()}function le(R,b){const ie=r.get(R);if(R.isVideoTexture&&qt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&ie.__version!==R.version){const Te=R.image;if(Te===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(Te.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{ct(ie,R,b);return}}else R.isExternalTexture&&(ie.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,ie.__webglTexture,s.TEXTURE0+b)}function Me(R,b){const ie=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ie.__version!==R.version){ct(ie,R,b);return}else R.isExternalTexture&&(ie.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,ie.__webglTexture,s.TEXTURE0+b)}function Ee(R,b){const ie=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&ie.__version!==R.version){ct(ie,R,b);return}t.bindTexture(s.TEXTURE_3D,ie.__webglTexture,s.TEXTURE0+b)}function Se(R,b){const ie=r.get(R);if(R.version>0&&ie.__version!==R.version){_t(ie,R,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,ie.__webglTexture,s.TEXTURE0+b)}const ve={[ef]:s.REPEAT,[or]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},Qe={[An]:s.NEAREST,[fS]:s.NEAREST_MIPMAP_NEAREST,[Pl]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[jr]:s.LINEAR_MIPMAP_LINEAR},Fe={[gS]:s.NEVER,[Tx]:s.ALWAYS,[xS]:s.LESS,[Ex]:s.LEQUAL,[vS]:s.EQUAL,[wx]:s.GEQUAL,[_S]:s.GREATER,[yS]:s.NOTEQUAL};function vt(R,b){if(b.type===Bi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Yn||b.magFilter===gd||b.magFilter===Pl||b.magFilter===jr||b.minFilter===Yn||b.minFilter===gd||b.minFilter===Pl||b.minFilter===jr)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,ve[b.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,ve[b.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,ve[b.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,Qe[b.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,Qe[b.minFilter]),b.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Fe[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===An||b.minFilter!==Pl&&b.minFilter!==jr||b.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const ie=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,ie.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function mt(R,b){let ie=!1;R.__webglInit===void 0&&(R.__webglInit=!0,b.addEventListener("dispose",H),J(b));const Te=b.source;let me=y.get(Te);me===void 0&&(me={},y.set(Te,me));const Ne=G(b);if(Ne!==R.__cacheKey){me[Ne]===void 0&&(me[Ne]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,ie=!0),me[Ne].usedTimes++;const De=me[R.__cacheKey];De!==void 0&&(me[R.__cacheKey].usedTimes--,De.usedTimes===0&&F(b)),R.__cacheKey=Ne,R.__webglTexture=me[Ne].texture}return ie}function lt(R,b,ie){return Math.floor(Math.floor(R/ie)/b)}function bt(R,b,ie,Te){const Ne=R.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,ie,Te,b.data);else{Ne.sort((B,_e)=>B.start-_e.start);let De=0;for(let B=1;B<Ne.length;B++){const _e=Ne[De],pe=Ne[B],Oe=_e.start+_e.count,Ie=lt(pe.start,b.width,4),ke=lt(_e.start,b.width,4);pe.start<=Oe+1&&Ie===ke&&lt(pe.start+pe.count-1,b.width,4)===Ie?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++De,Ne[De]=pe)}Ne.length=De+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),ge=t.getParameter(s.UNPACK_SKIP_PIXELS),Le=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let B=0,_e=Ne.length;B<_e;B++){const pe=Ne[B],Oe=Math.floor(pe.start/4),Ie=Math.ceil(pe.count/4),ke=Oe%b.width,st=Math.floor(Oe/b.width),St=Ie,Re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,st),t.texSubImage2D(s.TEXTURE_2D,0,ke,st,St,Re,ie,Te,b.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,ge),t.pixelStorei(s.UNPACK_SKIP_ROWS,Le)}}function ct(R,b,ie){let Te=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Te=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Te=s.TEXTURE_3D);const me=mt(R,b),Ne=b.source;t.bindTexture(Te,R.__webglTexture,s.TEXTURE0+ie);const De=r.get(Ne);if(Ne.version!==De.__version||me===!0){if(t.activeTexture(s.TEXTURE0+ie),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const Re=Lt.getPrimaries(Lt.workingColorSpace),ut=b.colorSpace===zr?null:Lt.getPrimaries(b.colorSpace),gt=b.colorSpace===zr||Re===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let ge=L(b.image,!1,l.maxTextureSize);ge=rt(b,ge);const Le=c.convert(b.format,b.colorSpace),B=c.convert(b.type);let _e=P(b.internalFormat,Le,B,b.normalized,b.colorSpace,b.isVideoTexture);vt(Te,b);let pe;const Oe=b.mipmaps,Ie=b.isVideoTexture!==!0,ke=De.__version===void 0||me===!0,st=Ne.dataReady,St=D(b,ge);if(b.isDepthTexture)_e=E(b.format===Br,b.type),ke&&(Ie?t.texStorage2D(s.TEXTURE_2D,1,_e,ge.width,ge.height):t.texImage2D(s.TEXTURE_2D,0,_e,ge.width,ge.height,0,Le,B,null));else if(b.isDataTexture)if(Oe.length>0){Ie&&ke&&t.texStorage2D(s.TEXTURE_2D,St,_e,Oe[0].width,Oe[0].height);for(let Re=0,ut=Oe.length;Re<ut;Re++)pe=Oe[Re],Ie?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,Le,B,pe.data):t.texImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,Le,B,pe.data);b.generateMipmaps=!1}else Ie?(ke&&t.texStorage2D(s.TEXTURE_2D,St,_e,ge.width,ge.height),st&&bt(b,ge,Le,B)):t.texImage2D(s.TEXTURE_2D,0,_e,ge.width,ge.height,0,Le,B,ge.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Ie&&ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,_e,Oe[0].width,Oe[0].height,ge.depth);for(let Re=0,ut=Oe.length;Re<ut;Re++)if(pe=Oe[Re],b.format!==Hi)if(Le!==null)if(Ie){if(st)if(b.layerUpdates.size>0){const gt=Eg(pe.width,pe.height,b.format,b.type);for(const We of b.layerUpdates){const Pt=pe.data.subarray(We*gt/pe.data.BYTES_PER_ELEMENT,(We+1)*gt/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,We,pe.width,pe.height,1,Le,Pt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,pe.width,pe.height,ge.depth,Le,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,_e,pe.width,pe.height,ge.depth,0,pe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ie?st&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,pe.width,pe.height,ge.depth,Le,B,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Re,_e,pe.width,pe.height,ge.depth,0,Le,B,pe.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Ie&&ke&&t.texStorage2D(s.TEXTURE_2D,St,_e,Oe[0].width,Oe[0].height);for(let Re=0,ut=Oe.length;Re<ut;Re++)pe=Oe[Re],b.format!==Hi?Le!==null?Ie?st&&t.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,Le,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,pe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ie?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,Le,B,pe.data):t.texImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,Le,B,pe.data)}else if(b.isDataArrayTexture)if(Ie){if(ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,St,_e,ge.width,ge.height,ge.depth),st)if(b.layerUpdates.size>0){const Re=Eg(ge.width,ge.height,b.format,b.type);for(const ut of b.layerUpdates){const gt=ge.data.subarray(ut*Re/ge.data.BYTES_PER_ELEMENT,(ut+1)*Re/ge.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,ge.width,ge.height,1,Le,B,gt)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ge.width,ge.height,ge.depth,Le,B,ge.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,ge.width,ge.height,ge.depth,0,Le,B,ge.data);else if(b.isData3DTexture)Ie?(ke&&t.texStorage3D(s.TEXTURE_3D,St,_e,ge.width,ge.height,ge.depth),st&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ge.width,ge.height,ge.depth,Le,B,ge.data)):t.texImage3D(s.TEXTURE_3D,0,_e,ge.width,ge.height,ge.depth,0,Le,B,ge.data);else if(b.isFramebufferTexture){if(ke)if(Ie)t.texStorage2D(s.TEXTURE_2D,St,_e,ge.width,ge.height);else{let Re=ge.width,ut=ge.height;for(let gt=0;gt<St;gt++)t.texImage2D(s.TEXTURE_2D,gt,_e,Re,ut,0,Le,B,null),Re>>=1,ut>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const Re=s.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),ge.parentNode!==Re){Re.appendChild(ge),S.add(b),Re.onpaint=ut=>{const gt=ut.changedElements;for(const We of S)gt.includes(We.image)&&(We.needsUpdate=!0)},Re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,ge);else{const gt=s.RGBA,We=s.RGBA,Pt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,gt,We,Pt,ge)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Oe.length>0){if(Ie&&ke){const Re=xe(Oe[0]);t.texStorage2D(s.TEXTURE_2D,St,_e,Re.width,Re.height)}for(let Re=0,ut=Oe.length;Re<ut;Re++)pe=Oe[Re],Ie?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,Le,B,pe):t.texImage2D(s.TEXTURE_2D,Re,_e,Le,B,pe);b.generateMipmaps=!1}else if(Ie){if(ke){const Re=xe(ge);t.texStorage2D(s.TEXTURE_2D,St,_e,Re.width,Re.height)}st&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Le,B,ge)}else t.texImage2D(s.TEXTURE_2D,0,_e,Le,B,ge);U(b)&&b.mipmapsAutoUpdate===!0&&A(Te),De.__version=Ne.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function _t(R,b,ie){if(b.image.length!==6)return;const Te=mt(R,b),me=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+ie);const Ne=r.get(me);if(me.version!==Ne.__version||Te===!0){t.activeTexture(s.TEXTURE0+ie);const De=Lt.getPrimaries(Lt.workingColorSpace),he=b.colorSpace===zr?null:Lt.getPrimaries(b.colorSpace),ge=b.colorSpace===zr||De===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Le=b.isCompressedTexture||b.image[0].isCompressedTexture,B=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let We=0;We<6;We++)!Le&&!B?_e[We]=L(b.image[We],!0,l.maxCubemapSize):_e[We]=B?b.image[We].image:b.image[We],_e[We]=rt(b,_e[We]);const pe=_e[0],Oe=c.convert(b.format,b.colorSpace),Ie=c.convert(b.type);let ke=P(b.internalFormat,Oe,Ie,b.normalized,b.colorSpace);const st=b.isVideoTexture!==!0,St=Ne.__version===void 0||Te===!0,Re=me.dataReady;let ut=D(b,pe);vt(s.TEXTURE_CUBE_MAP,b);let gt;if(b.isDepthTexture){if(ke=E(b.format===Br,b.type),St)if(st)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ke,pe.width,pe.height);else for(let We=0;We<6;We++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ke,pe.width,pe.height,0,Oe,Ie,null)}else if(Le){st&&St&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ke,pe.width,pe.height);for(let We=0;We<6;We++){gt=_e[We].mipmaps;for(let Pt=0;Pt<gt.length;Pt++){const en=gt[Pt];b.format!==Hi?Oe!==null?st?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt,0,0,en.width,en.height,Oe,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt,ke,en.width,en.height,0,en.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt,0,0,en.width,en.height,Oe,Ie,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt,ke,en.width,en.height,0,Oe,Ie,en.data)}}}else{if(gt=b.mipmaps,st&&St){gt.length>0&&ut++;const We=xe(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ke,We.width,We.height)}for(let We=0;We<6;We++)if(B){st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,_e[We].width,_e[We].height,Oe,Ie,_e[We].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ke,_e[We].width,_e[We].height,0,Oe,Ie,_e[We].data);for(let Pt=0;Pt<gt.length;Pt++){const Zn=gt[Pt].image[We].image;st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt+1,0,0,Zn.width,Zn.height,Oe,Ie,Zn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt+1,ke,Zn.width,Zn.height,0,Oe,Ie,Zn.data)}}else{st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,Oe,Ie,_e[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,ke,Oe,Ie,_e[We]);for(let Pt=0;Pt<gt.length;Pt++){const en=gt[Pt];st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt+1,0,0,Oe,Ie,en.image[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Pt+1,ke,Oe,Ie,en.image[We])}}}U(b)&&b.mipmapsAutoUpdate===!0&&A(s.TEXTURE_CUBE_MAP),Ne.__version=me.version,b.onUpdate&&b.onUpdate(b)}R.__version=b.version}function ye(R,b,ie,Te,me,Ne){const De=c.convert(ie.format,ie.colorSpace),he=c.convert(ie.type),ge=P(ie.internalFormat,De,he,ie.normalized,ie.colorSpace),Le=r.get(b),B=r.get(ie);if(B.__renderTarget=b,!Le.__hasExternalTextures){const _e=Math.max(1,b.width>>Ne),pe=Math.max(1,b.height>>Ne);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Ne,ge,_e,pe,b.depth,0,De,he,null):t.texImage2D(me,Ne,ge,_e,pe,0,De,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),ze(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Te,me,B.__webglTexture,0,Ht(b)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Te,me,B.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(R,b,ie){if(s.bindRenderbuffer(s.RENDERBUFFER,R),b.depthBuffer){const Te=b.depthTexture,me=Te&&Te.isDepthTexture?Te.type:null,Ne=E(b.stencilBuffer,me),De=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;ze(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),Ne,b.width,b.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),Ne,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,De,s.RENDERBUFFER,R)}else{const Te=b.textures;for(let me=0;me<Te.length;me++){const Ne=Te[me],De=c.convert(Ne.format,Ne.colorSpace),he=c.convert(Ne.type),ge=P(Ne.internalFormat,De,he,Ne.normalized,Ne.colorSpace);ze(b)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Ht(b),ge,b.width,b.height):ie?s.renderbufferStorageMultisample(s.RENDERBUFFER,Ht(b),ge,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,ge,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(R,b,ie){const Te=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(b.depthTexture);me.__renderTarget=b;const Ne=Te?b.depthTexture.image[0]:b.depthTexture.image;(!me.__webglTexture||Ne.width!==b.width||Ne.height!==b.height)&&(Ne.width=b.width,Ne.height=b.height,b.depthTexture.needsUpdate=!0),Te?Se(b.depthTexture,0):le(b.depthTexture,0);const De=me.__webglTexture,he=Ht(b),ge=Te?s.TEXTURE_CUBE_MAP_POSITIVE_X+ie:s.TEXTURE_2D,Le=b.depthTexture.format===Br?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xr)ze(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,ge,De,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Le,ge,De,0);else if(b.depthTexture.format===Br)ze(b)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Le,ge,De,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,Le,ge,De,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Tt(R){const b=r.get(R),ie=R.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==R.depthTexture){const Te=R.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Te){const me=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Te.removeEventListener("dispose",me)};Te.addEventListener("dispose",me),b.__depthDisposeCallback=me}b.__boundDepthTexture=Te}if(R.depthTexture&&!b.__autoAllocateDepthBuffer)if(ie)for(let Te=0;Te<6;Te++)Ge(b.__webglFramebuffer[Te],R,Te);else R.texture.mipmaps.length>0?Ge(b.__webglFramebuffer[0],R,0):Ge(b.__webglFramebuffer,R,0);else if(ie){b.__webglDepthbuffer=[];for(let Te=0;Te<6;Te++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[Te]),b.__webglDepthbuffer[Te]===void 0)b.__webglDepthbuffer[Te]=s.createRenderbuffer(),He(b.__webglDepthbuffer[Te],R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer[Te];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ne)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),He(b.__webglDepthbuffer,R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(R,b,ie){const Te=r.get(R);b!==void 0&&ye(Te.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),ie!==void 0&&Tt(R)}function Ye(R){const b=R.texture,ie=r.get(R),Te=r.get(b);R.addEventListener("dispose",ee),J(R);const me=R.textures,Ne=R.isWebGLCubeRenderTarget===!0,De=me.length>1;if(De||(Te.__webglTexture===void 0&&(Te.__webglTexture=s.createTexture()),Te.__version=b.version,d.memory.textures++),Ne){ie.__webglFramebuffer=[];for(let he=0;he<6;he++)if(b.mipmaps.length>0){ie.__webglFramebuffer[he]=[];for(let ge=0;ge<b.mipmaps.length;ge++)ie.__webglFramebuffer[he][ge]=s.createFramebuffer()}else ie.__webglFramebuffer[he]=s.createFramebuffer()}else{if(b.mipmaps.length>0){ie.__webglFramebuffer=[];for(let he=0;he<b.mipmaps.length;he++)ie.__webglFramebuffer[he]=s.createFramebuffer()}else ie.__webglFramebuffer=s.createFramebuffer();if(De)for(let he=0,ge=me.length;he<ge;he++){const Le=r.get(me[he]);Le.__webglTexture===void 0&&(Le.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&ze(R)===!1){ie.__webglMultisampledFramebuffer=s.createFramebuffer(),ie.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,ie.__webglMultisampledFramebuffer);for(let he=0;he<me.length;he++){const ge=me[he];ie.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,ie.__webglColorRenderbuffer[he]);const Le=c.convert(ge.format,ge.colorSpace),B=c.convert(ge.type),_e=P(ge.internalFormat,Le,B,ge.normalized,ge.colorSpace,R.isXRRenderTarget===!0),pe=Ht(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,_e,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,ie.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(ie.__webglDepthRenderbuffer=s.createRenderbuffer(),He(ie.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,Te.__webglTexture),vt(s.TEXTURE_CUBE_MAP,b);for(let he=0;he<6;he++)if(b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)ye(ie.__webglFramebuffer[he][ge],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,ge);else ye(ie.__webglFramebuffer[he],R,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);U(b)?A(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(De){for(let he=0,ge=me.length;he<ge;he++){const Le=me[he],B=r.get(Le);let _e=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,B.__webglTexture),vt(_e,Le),ye(ie.__webglFramebuffer,R,Le,s.COLOR_ATTACHMENT0+he,_e,0),U(Le)&&A(_e)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Te.__webglTexture),vt(he,b),b.mipmaps.length>0)for(let ge=0;ge<b.mipmaps.length;ge++)ye(ie.__webglFramebuffer[ge],R,b,s.COLOR_ATTACHMENT0,he,ge);else ye(ie.__webglFramebuffer,R,b,s.COLOR_ATTACHMENT0,he,0);U(b)?A(he):b.mipmaps.length>0&&s.texParameteri(he,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Tt(R)}function X(R){const b=R.textures;for(let ie=0,Te=b.length;ie<Te;ie++){const me=b[ie];if(U(me)&&me.mipmapsAutoUpdate===!0){const Ne=I(R),De=r.get(me).__webglTexture;t.bindTexture(Ne,De),A(Ne),t.unbindTexture()}}}const Ut=[];function Nt(R){if(R.samples>0){if(ze(R)===!1){const b=R.textures,ie=R.width,Te=R.height;let me=s.COLOR_BUFFER_BIT;const Ne=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,De=r.get(R),he=b.length>1;if(he)for(let Le=0;Le<b.length;Le++)t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Le=0;Le<b.length;Le++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const B=r.get(b[Le]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,B,0)}s.blitFramebuffer(0,0,ie,Te,0,0,ie,Te,me,s.NEAREST),m===!0&&(Ut.length=0,Ut.push(s.COLOR_ATTACHMENT0+Le),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ut.push(Ne),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let Le=0;Le<b.length;Le++){t.bindFramebuffer(s.FRAMEBUFFER,De.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.RENDERBUFFER,De.__webglColorRenderbuffer[Le]);const B=r.get(b[Le]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,De.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Le,s.TEXTURE_2D,B,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&m){const b=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function Ht(R){return Math.min(l.maxSamples,R.samples)}function ze(R){const b=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function qt(R){const b=d.render.frame;v.get(R)!==b&&(v.set(R,b),R.update())}function rt(R,b){const ie=R.colorSpace,Te=R.format,me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||ie!==vc&&ie!==zr&&(Lt.getTransfer(ie)===Vt?(Te!==Hi||me!==ri)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):jt("WebGLTextures: Unsupported texture color space:",ie)),b}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(p.width=R.naturalWidth||R.width,p.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(p.width=R.displayWidth,p.height=R.displayHeight):(p.width=R.width,p.height=R.height),p}this.allocateTextureUnit=we,this.resetTextureUnits=Q,this.getTextureUnits=k,this.setTextureUnits=Z,this.setTexture2D=le,this.setTexture2DArray=Me,this.setTexture3D=Ee,this.setTextureCube=Se,this.rebindTextures=be,this.setupRenderTarget=Ye,this.updateRenderTargetMipmap=X,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=Tt,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=ze,this.dispose=V}function ob(s,e){function t(r,l=zr){let c;const d=Lt.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===Xf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===$f)return s.UNSIGNED_SHORT_5_5_5_1;if(r===vx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===_x)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===gx)return s.BYTE;if(r===xx)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Wf)return s.INT;if(r===Wi)return s.UNSIGNED_INT;if(r===Bi)return s.FLOAT;if(r===Xi)return s.HALF_FLOAT;if(r===yx)return s.ALPHA;if(r===Sx)return s.RGB;if(r===Hi)return s.RGBA;if(r===Xr)return s.DEPTH_COMPONENT;if(r===Br)return s.DEPTH_STENCIL;if(r===Mx)return s.RED;if(r===qf)return s.RED_INTEGER;if(r===ms)return s.RG;if(r===Yf)return s.RG_INTEGER;if(r===Kf)return s.RGBA_INTEGER;if(r===ac||r===oc||r===lc||r===cc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===af)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===of||r===lf||r===cf||r===uf||r===df||r===gc||r===ff)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===of||r===lf)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===uf)return c.COMPRESSED_R11_EAC;if(r===df)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return c.COMPRESSED_RG11_EAC;if(r===ff)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===Ef||r===wf||r===Tf||r===bf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_f)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ef)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===bf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cf||r===Af||r===Nf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cf)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rf||r===Pf||r===xc||r===Lf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const lb=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class ub{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new kx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new gs({vertexShader:lb,fragmentShader:cb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $i(new Eo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class db extends xs{constructor(e,t){super();const r=this;let l=null,c=1,d=null,f="local-floor",m=1,p=null,v=null,S=null,_=null,y=null,w=null;const T=typeof XRWebGLBinding<"u",x=new ub,M={},L=t.getContextAttributes();let U=null,A=null;const I=[],P=[],E=new It;let D=null,J=null;const O=new qn;O.viewport=new rn;const H=new qn;H.viewport=new rn;const ee=[O,H],re=new yM;let z=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let le=I[G];return le===void 0&&(le=new Td,I[G]=le),le.getTargetRaySpace()},this.getControllerGrip=function(G){let le=I[G];return le===void 0&&(le=new Td,I[G]=le),le.getGripSpace()},this.getHand=function(G){let le=I[G];return le===void 0&&(le=new Td,I[G]=le),le.getHandSpace()};function ne(G){const le=P.indexOf(G.inputSource);if(le===-1)return;const Me=I[le];Me!==void 0&&(Me.update(G.inputSource,G.frame,p||d),Me.dispatchEvent({type:G.type,data:G.inputSource}))}function F(){l.removeEventListener("select",ne),l.removeEventListener("selectstart",ne),l.removeEventListener("selectend",ne),l.removeEventListener("squeeze",ne),l.removeEventListener("squeezestart",ne),l.removeEventListener("squeezeend",ne),l.removeEventListener("end",F),l.removeEventListener("inputsourceschange",$);for(let G=0;G<I.length;G++){const le=P[G];le!==null&&(P[G]=null,I[G].disconnect(le))}z=null,V=null,x.reset();for(const G in M)delete M[G];if(e.setRenderTarget(U),y=null,_=null,S=null,l=null,A=null,we.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),J!==null){const G=J.camera;G.fov=J.fov,G.zoom=J.zoom,G.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){f=G,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||d},this.setReferenceSpace=function(G){p=G},this.getBaseLayer=function(){return _!==null?_:y},this.getBinding=function(){return S===null&&T&&(S=new XRWebGLBinding(l,t)),S},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(U=e.getRenderTarget(),l.addEventListener("select",ne),l.addEventListener("selectstart",ne),l.addEventListener("selectend",ne),l.addEventListener("squeeze",ne),l.addEventListener("squeezestart",ne),l.addEventListener("squeezeend",ne),l.addEventListener("end",F),l.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Me=null,Ee=null,Se=null;L.depth&&(Se=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Me=L.stencil?Br:Xr,Ee=L.stencil?da:Wi);const ve={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:c};S=this.getBinding(),_=S.createProjectionLayer(ve),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Gi(_.textureWidth,_.textureHeight,{format:Hi,type:ri,depthTexture:new fa(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Me),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Me={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,t,Me),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Gi(y.framebufferWidth,y.framebufferHeight,{format:Hi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(m),p=null,d=await l.requestReferenceSpace(f),we.setContext(l),we.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(G){for(let le=0;le<G.removed.length;le++){const Me=G.removed[le],Ee=P.indexOf(Me);Ee>=0&&(P[Ee]=null,I[Ee].disconnect(Me))}for(let le=0;le<G.added.length;le++){const Me=G.added[le];let Ee=P.indexOf(Me);if(Ee===-1){for(let ve=0;ve<I.length;ve++)if(ve>=P.length){P.push(Me),Ee=ve;break}else if(P[ve]===null){P[ve]=Me,Ee=ve;break}if(Ee===-1)break}const Se=I[Ee];Se&&Se.connect(Me)}}function W(G,le){le===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(le.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let le=G.near,Me=G.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(Me=x.depthFar)),re.near=H.near=O.near=le,re.far=H.far=O.far=Me,(z!==re.near||V!==re.far)&&(l.updateRenderState({depthNear:re.near,depthFar:re.far}),z=re.near,V=re.far),re.layers.mask=G.layers.mask|6,O.layers.mask=re.layers.mask&-5,H.layers.mask=re.layers.mask&-3;const Ee=G.parent,Se=re.cameras;W(re,Ee);for(let ve=0;ve<Se.length;ve++)W(Se[ve],Ee);re.projectionMatrix.copy(O.projectionMatrix),re.projectionMatrixInverse.copy(O.projectionMatrixInverse),J===null&&G.isPerspectiveCamera&&(J={camera:G,fov:G.fov,zoom:G.zoom}),Q(G,re,Ee)};function Q(G,le,Me){Me===null?G.matrix.copy(le.matrixWorld):(G.matrix.copy(Me.matrixWorld),G.matrix.invert(),G.matrix.multiply(le.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(le.projectionMatrix),G.projectionMatrixInverse.copy(le.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=yc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return re},this.getFoveation=function(){if(!(_===null&&y===null))return m},this.setFoveation=function(G){m=G,_!==null&&(_.fixedFoveation=G),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(re)},this.getCameraTexture=function(G){return M[G]};let k=null;function Z(G,le){if(v=le.getViewerPose(p||d),w=le,v!==null){const Me=v.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Ee=!1;Me.length!==re.cameras.length&&(re.cameras.length=0,Ee=!0);for(let Fe=0;Fe<Me.length;Fe++){const vt=Me[Fe];let mt=null;if(y!==null)mt=y.getViewport(vt);else{const bt=S.getViewSubImage(_,vt);mt=bt.viewport,Fe===0&&(e.setRenderTargetTextures(A,bt.colorTexture,bt.depthStencilTexture),e.setRenderTarget(A))}let lt=ee[Fe];lt===void 0&&(lt=new qn,lt.layers.enable(Fe),lt.viewport=new rn,ee[Fe]=lt),lt.matrix.fromArray(vt.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(vt.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(mt.x,mt.y,mt.width,mt.height),Fe===0&&(re.matrix.copy(lt.matrix),re.matrix.decompose(re.position,re.quaternion,re.scale)),Ee===!0&&re.cameras.push(lt)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){S=r.getBinding();const Fe=S.getDepthInformation(Me[0]);Fe&&Fe.isValid&&Fe.texture&&x.init(Fe,l.renderState)}if(Se&&Se.includes("camera-access")&&T){e.state.unbindTexture(),S=r.getBinding();for(let Fe=0;Fe<Me.length;Fe++){const vt=Me[Fe].camera;if(vt){let mt=M[vt];mt||(mt=new kx,M[vt]=mt);const lt=S.getCameraImage(vt);mt.sourceTexture=lt}}}}for(let Me=0;Me<I.length;Me++){const Ee=P[Me],Se=I[Me];Ee!==null&&Se!==void 0&&Se.update(Ee,le,p||d)}k&&k(G,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const we=new jx;we.setAnimationLoop(Z),this.setAnimationLoop=function(G){k=G},this.dispose=function(){}}}const fb=new $t,Kx=new yt;Kx.set(-1,0,0,0,1,0,0,0,1);function hb(s,e){function t(x,M){x.matrixAutoUpdate===!0&&x.updateMatrix(),M.value.copy(x.matrix)}function r(x,M){M.color.getRGB(x.fogColor.value,Fx(s)),M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function l(x,M,L,U,A){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(x,M):M.isMeshLambertMaterial?(c(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(x,M),S(x,M)):M.isMeshPhongMaterial?(c(x,M),v(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(x,M),_(x,M),M.isMeshPhysicalMaterial&&y(x,M,A)):M.isMeshMatcapMaterial?(c(x,M),w(x,M)):M.isMeshDepthMaterial?c(x,M):M.isMeshDistanceMaterial?(c(x,M),T(x,M)):M.isMeshNormalMaterial?c(x,M):M.isLineBasicMaterial?(d(x,M),M.isLineDashedMaterial&&f(x,M)):M.isPointsMaterial?m(x,M,L,U):M.isSpriteMaterial?p(x,M):M.isShadowMaterial?(x.color.value.copy(M.color),x.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(x,M){x.opacity.value=M.opacity,M.color&&x.diffuse.value.copy(M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map,t(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.bumpMap&&(x.bumpMap.value=M.bumpMap,t(M.bumpMap,x.bumpMapTransform),x.bumpScale.value=M.bumpScale,M.side===Kn&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,t(M.normalMap,x.normalMapTransform),x.normalScale.value.copy(M.normalScale),M.side===Kn&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,t(M.displacementMap,x.displacementMapTransform),x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,x.emissiveMapTransform)),M.specularMap&&(x.specularMap.value=M.specularMap,t(M.specularMap,x.specularMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest);const L=e.get(M),U=L.envMap,A=L.envMapRotation;U&&(x.envMap.value=U,x.envMapRotation.value.setFromMatrix4(fb.makeRotationFromEuler(A)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Kx),x.reflectivity.value=M.reflectivity,x.ior.value=M.ior,x.refractionRatio.value=M.refractionRatio),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,x.lightMapTransform)),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,x.aoMapTransform))}function d(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,t(M.map,x.mapTransform))}function f(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function m(x,M,L,U){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.size.value=M.size*L,x.scale.value=U*.5,M.map&&(x.map.value=M.map,t(M.map,x.uvTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function p(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.rotation.value=M.rotation,M.map&&(x.map.value=M.map,t(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function v(x,M){x.specular.value.copy(M.specular),x.shininess.value=Math.max(M.shininess,1e-4)}function S(x,M){M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function _(x,M){x.metalness.value=M.metalness,M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,x.metalnessMapTransform)),x.roughness.value=M.roughness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,x.roughnessMapTransform)),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function y(x,M,L){x.ior.value=M.ior,M.diffuseRoughness>0&&(x.diffuseRoughness.value=M.diffuseRoughness,M.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=M.diffuseRoughnessMap,t(M.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),M.sheen>0&&(x.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),x.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(x.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,x.sheenColorMapTransform)),M.sheenRoughnessMap&&(x.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,x.sheenRoughnessMapTransform))),M.clearcoat>0&&(x.clearcoat.value=M.clearcoat,x.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(x.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,x.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(x.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Kn&&x.clearcoatNormalScale.value.negate())),M.dispersion>0&&(x.dispersion.value=M.dispersion),M.retroreflectivity>0&&(x.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(x.iridescence.value=M.iridescence,x.iridescenceIOR.value=M.iridescenceIOR,x.iridescenceThicknessMinimum.value=M.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=M.iridescenceThicknessMaximum,M.iridescenceMap&&(x.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,x.iridescenceMapTransform)),M.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),M.transmission>0&&(x.transmission.value=M.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(x.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,x.transmissionMapTransform)),x.thickness.value=M.thickness,M.thicknessMap&&(x.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=M.attenuationDistance,x.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(x.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(x.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=M.specularIntensity,x.specularColor.value.copy(M.specularColor),M.specularColorMap&&(x.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,x.specularColorMapTransform)),M.specularIntensityMap&&(x.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,M){M.matcap&&(x.matcap.value=M.matcap)}function T(x,M){const L=e.get(M).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function pb(s,e,t,r){let l={},c={};function d(L,U){const A=U.program;r.uniformBlockBinding(L,A,l[L.id])}function f(L,U){let A=l[L.id];A===void 0&&(w(L),A=m(L),l[L.id]=A,L.addEventListener("dispose",x));const I=U.program;r.updateUBOMapping(L,I);const P=e.render.frame;c[L.id]!==P&&(p(L),c[L.id]=P)}function m(L){const U=s.createBuffer(),A=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,U),s.bufferData(s.UNIFORM_BUFFER,A,I),s.bindBuffer(s.UNIFORM_BUFFER,null),U}function p(L){const U=l[L.id],A=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,U);for(let P=0,E=A.length;P<E;P++){const D=A[P];if(Array.isArray(D))for(let J=0,O=D.length;J<O;J++)v(D[J],P,J,I);else v(D,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(L,U,A,I){if(_(L,U,A,I)===!0){const P=L.__offset,E=L.value;if(Array.isArray(E)){let D=0;for(let J=0;J<E.length;J++){const O=E[J],H=T(O,!0);S(O,L.__data,D),D+=H.storage/Float32Array.BYTES_PER_ELEMENT}}else S(E,L.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,L.__data)}}function S(L,U,A){typeof L=="number"||typeof L=="boolean"?U[A]=L:L.isMatrix3?(U[A]=L.elements[0],U[A+1]=L.elements[1],U[A+2]=L.elements[2],U[A+3]=0,U[A+4]=L.elements[3],U[A+5]=L.elements[4],U[A+6]=L.elements[5],U[A+7]=0,U[A+8]=L.elements[6],U[A+9]=L.elements[7],U[A+10]=L.elements[8],U[A+11]=0):ArrayBuffer.isView(L)?U.set(L.subarray(0,U.length-A),A):L.toArray(U,A)}function _(L,U,A,I){const P=L.value,E=U+"_"+A;if(Array.isArray(P)){I[E]===void 0&&(I[E]=[]);const D=I[E];let J=!1;for(let O=0;O<P.length;O++)y(P[O],D,O)===!0&&(J=!0);return J}return y(P,I,E)}function y(L,U,A){if(U[A]===void 0)return typeof L=="number"||typeof L=="boolean"?U[A]=L:ArrayBuffer.isView(L)?U[A]=L.slice():U[A]=L.clone(),!0;{const I=U[A];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return U[A]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(I.equals(L)===!1)return I.copy(L),!0}}return!1}function w(L){const U=L.uniforms;let A=0;const I=16;for(let E=0,D=U.length;E<D;E++){const J=Array.isArray(U[E])?U[E]:[U[E]];for(let O=0,H=J.length;O<H;O++){const ee=J[O],re=Array.isArray(ee.value)?ee.value:[ee.value],z=Array.isArray(U[E])||Array.isArray(ee.value);let V=A;for(let F=0,$=re.length;F<$;F++){const W=re[F],Q=T(W,z),k=A%I,Z=k%Q.boundary,we=k+Z;A+=Z,we!==0&&I-we<Q.storage&&(A+=I-we),F===0&&(V=A),A+=Q.storage}const ne=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new ne((A-V)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=V}}const P=A%I;return P>0&&(A+=I-P),L.__size=A,L.__cache={},this}function T(L,U){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=16,A.storage=48):L.isMatrix4?(A.boundary=16,A.storage=64):L.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(A.boundary=16,A.storage=L.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",L),U===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function x(L){const U=L.target;U.removeEventListener("dispose",x),s.deleteBuffer(l[U.id]),delete l[U.id],delete c[U.id]}function M(){for(const L in l)s.deleteBuffer(l[L]);l={},c={}}return{bind:d,update:f,dispose:M}}const mb=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Fi=null;function gb(){return Fi===null&&(Fi=new KS(mb,16,16,ms,Xi),Fi.name="DFG_LUT",Fi.minFilter=Yn,Fi.magFilter=Yn,Fi.wrapS=or,Fi.wrapT=or,Fi.generateMipmaps=!1,Fi.needsUpdate=!0),Fi}class Zx{constructor(e={}){const{canvas:t=ES(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:_=!1,outputBufferType:y=ri}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const T=y,x=new Set([Kf,Yf,qf]),M=new Set([ri,Wi,mo,da,Xf,$f]),L=new Uint32Array(4),U=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const E=[],D=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let H=!1,ee=null,re=null,z=null,V=null;this._outputColorSpace=hi;let ne=0,F=0,$=null,W=-1,Q=null;const k=new rn,Z=new rn;let we=null;const G=new Mt(0);let le=0,Me=t.width,Ee=t.height,Se=1,ve=null,Qe=null;const Fe=new rn(0,0,Me,Ee),vt=new rn(0,0,Me,Ee);let mt=!1;const lt=new vo,bt=new eh;let ct=!1,_t=!1;const ye=new $t,He=new de,Ge=new rn,Tt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let be=!1;function Ye(){return $===null?Se:1}let X=r;function Ut(N,q){return t.getContext(N,q)}let Nt,Ht,ze,qt,rt,xe,R,b,ie,Te,me,Ne,De,he,ge,Le,B,_e,pe,Oe,Ie,ke,st;try{const N={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Vf}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",We,!1),X===null){const q="webgl2";if(X=Ut(q,N),X===null)throw Ut(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}St()}catch(N){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),jt("WebGLRenderer: "+N.message),N}function St(){Nt=new yw(X),Nt.init(),Ie=new ob(X,Nt),Ht=new cw(X,Nt,e,Ie),ze=new sb(X,Nt),Ht.reversedDepthBuffer&&_&&ze.buffers.depth.setReversed(!0),re=X.createFramebuffer(),z=X.createFramebuffer(),V=X.createFramebuffer(),qt=new Ew(X),rt=new WT,xe=new ab(X,Nt,ze,rt,Ht,Ie,qt),R=new _w(O),b=new TM(X),ke=new ow(X,b),ie=new Sw(X,b,qt,ke),Te=new Tw(X,ie,b,ke,qt),_e=new ww(X,Ht,xe),ge=new uw(rt),me=new VT(O,R,Nt,Ht,ke,ge),Ne=new hb(O,rt),De=new $T,he=new JT(Nt),B=new aw(O,R,ze,Te,w,m),Le=new rb(O,Te,Ht),st=new pb(X,qt,Ht,ze),pe=new lw(X,Nt,qt),Oe=new Mw(X,Nt,qt),qt.programs=me.programs,O.capabilities=Ht,O.extensions=Nt,O.properties=rt,O.renderLists=De,O.shadowMap=Le,O.state=ze,O.info=qt}T!==ri&&(J=new Cw(T,t.width,t.height,f,l,c));const Re=new db(O,X);this.xr=Re,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const N=Nt.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=Nt.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(N){N!==void 0&&(Se=N,this.setSize(Me,Ee,!1))},this.getSize=function(N){return N.set(Me,Ee)},this.setSize=function(N,q,ce=!0){if(Re.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}Me=N,Ee=q,t.width=Math.floor(N*Se),t.height=Math.floor(q*Se),ce===!0&&(t.style.width=N+"px",t.style.height=q+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,N,q)},this.getDrawingBufferSize=function(N){return N.set(Me*Se,Ee*Se).floor()},this.setDrawingBufferSize=function(N,q,ce){Me=N,Ee=q,Se=ce,t.width=Math.floor(N*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,N,q)},this.setEffects=function(N){if(T===ri){jt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let q=0;q<N.length;q++)if(N[q].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(k)},this.getViewport=function(N){return N.copy(Fe)},this.setViewport=function(N,q,ce,ae){N.isVector4?Fe.set(N.x,N.y,N.z,N.w):Fe.set(N,q,ce,ae),ze.viewport(k.copy(Fe).multiplyScalar(Ye()).round())},this.getScissor=function(N){return N.copy(vt)},this.setScissor=function(N,q,ce,ae){N.isVector4?vt.set(N.x,N.y,N.z,N.w):vt.set(N,q,ce,ae),ze.scissor(Z.copy(vt).multiplyScalar(Ye()).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(N){ze.setScissorTest(mt=N)},this.setOpaqueSort=function(N){ve=N},this.setTransparentSort=function(N){Qe=N},this.getClearColor=function(N){return N.copy(B.getClearColor())},this.setClearColor=function(){B.setClearColor(...arguments)},this.getClearAlpha=function(){return B.getClearAlpha()},this.setClearAlpha=function(){B.setClearAlpha(...arguments)},this.clear=function(N=!0,q=!0,ce=!0){let ae=0;if(N){let se=!1;if($!==null){const Be=$.texture.format;se=x.has(Be)}if(se){const Be=$.texture.type,Ke=M.has(Be),je=B.getClearColor(),Ve=B.getClearAlpha(),Je=je.r,ht=je.g,Et=je.b;Ke?(L[0]=Je,L[1]=ht,L[2]=Et,L[3]=Ve,X.clearBufferuiv(X.COLOR,0,L)):(U[0]=Je,U[1]=ht,U[2]=Et,U[3]=Ve,X.clearBufferiv(X.COLOR,0,U))}else ae|=X.COLOR_BUFFER_BIT}q&&(ae|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&X.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),ee=N},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),B.dispose(),De.dispose(),he.dispose(),xe.dispose(),rt.dispose(),R.dispose(),Te.dispose(),ie.dispose(),ke.dispose(),st.dispose(),me.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",To),Re.removeEventListener("sessionend",Ai),Ni.stop()};function ut(N){N.preventDefault(),$m("WebGLRenderer: Context Lost."),H=!0}function gt(){$m("WebGLRenderer: Context Restored."),H=!1;const N=qt.autoReset,q=Le.enabled,ce=Le.autoUpdate,ae=Le.needsUpdate,se=Le.type;St(),qt.autoReset=N,Le.enabled=q,Le.autoUpdate=ce,Le.needsUpdate=ae,Le.type=se}function We(N){jt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Pt(N){const q=N.target;q.removeEventListener("dispose",Pt),en(q)}function en(N){Zn(N),rt.remove(N)}function Zn(N){const q=rt.get(N).programs;q!==void 0&&(q.forEach(function(ce){me.releaseProgram(ce)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,q,ce,ae,se,Be){q===null&&(q=Tt);const Ke=se.isMesh&&se.matrixWorld.determinantAffine()<0,je=ya(N,q,ce,ae,se);ze.setMaterial(ae,Ke);let Ve=ce.index,Je=1;if(ae.wireframe===!0){if(Ve=ie.getWireframeAttribute(ce),Ve===void 0)return;Je=2}const ht=ce.drawRange,Et=ce.attributes.position;let et=ht.start*Je,Ct=(ht.start+ht.count)*Je;Be!==null&&(et=Math.max(et,Be.start*Je),Ct=Math.min(Ct,(Be.start+Be.count)*Je)),Ve!==null?(et=Math.max(et,0),Ct=Math.min(Ct,Ve.count)):Et!=null&&(et=Math.max(et,0),Ct=Math.min(Ct,Et.count));const Qt=Ct-et;if(Qt<0||Qt===1/0)return;ke.setup(se,ae,je,ce,Ve);let Gt,Bt=pe;if(Ve!==null&&(Gt=b.get(Ve),Bt=Oe,Bt.setIndex(Gt)),se.isMesh)ae.wireframe===!0?(ze.setLineWidth(ae.wireframeLinewidth*Ye()),Bt.setMode(X.LINES)):Bt.setMode(X.TRIANGLES);else if(se.isLine){let sn=ae.linewidth;sn===void 0&&(sn=1),ze.setLineWidth(sn*Ye()),se.isLineSegments?Bt.setMode(X.LINES):se.isLineLoop?Bt.setMode(X.LINE_LOOP):Bt.setMode(X.LINE_STRIP)}else se.isPoints?Bt.setMode(X.POINTS):se.isSprite&&Bt.setMode(X.TRIANGLES);if(se.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Bt.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const sn=se._multiDrawStarts,tt=se._multiDrawCounts,hn=se._multiDrawCount,at=Ve?b.get(Ve).bytesPerElement:1,Ri=rt.get(ae).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Ri.setValue(X,"_gl_DrawID",pn),Bt.render(sn[pn]/at,tt[pn])}else if(se.isInstancedMesh)Bt.renderInstances(et,Qt,se.count);else if(ce.isInstancedBufferGeometry){const sn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,tt=Math.min(ce.instanceCount,sn);Bt.renderInstances(et,Qt,tt)}else Bt.render(et,Qt)};function _s(N,q,ce,ae){ee!==null&&N.isNodeMaterial&&ee.setObject(ae,N),ct===!0&&ge.setState(N,ce,!1),N.transparent===!0&&N.side===zi&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,Yr(N,q,ae),N.side=ps,N.needsUpdate=!0,Yr(N,q,ae),N.side=zi):Yr(N,q,ae)}this.compile=function(N,q,ce=null){ce===null&&(ce=N),ee!==null&&ee.renderStart(N,q,ce),P=he.get(ce),P.init(q),D.push(P),ce.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),N!==ce&&N.traverseVisible(function(se){se.isLight&&se.layers.test(q.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),ee!==null&&ee.updateLights(P.state.lightsArray),_t=this.localClippingEnabled,ct=ge.init(this.clippingPlanes,_t),ct===!0&&ge.setGlobalState(this.clippingPlanes,q),ee!==null&&Le.render(P.state.shadowsArray,ce,q);const ae=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Be=se.material;if(Be)if(Array.isArray(Be))for(let Ke=0;Ke<Be.length;Ke++){const je=Be[Ke];_s(je,ce,q,se),ae.add(je)}else _s(Be,ce,q,se),ae.add(Be)}),P=D.pop(),ee!==null&&ee.renderEnd(),ae},this.compileAsync=function(N,q,ce=null){const ae=this.compile(N,q,ce);return new Promise(se=>{function Be(){if(ae.forEach(function(Ke){const Ve=rt.get(Ke).currentProgram;(Ve===void 0||Ve.isReady())&&ae.delete(Ke)}),ae.size===0){se(N);return}setTimeout(Be,10)}Nt.get("KHR_parallel_shader_compile")!==null?Be():setTimeout(Be,10)})};let ga=null;function Lc(N){ga&&ga(N)}function To(){Ni.stop()}function Ai(){Ni.start()}const Ni=new jx;Ni.setAnimationLoop(Lc),typeof self<"u"&&Ni.setContext(self),this.setAnimationLoop=function(N){ga=N,Re.setAnimationLoop(N),N===null?Ni.stop():Ni.start()},Re.addEventListener("sessionstart",To),Re.addEventListener("sessionend",Ai),this.render=function(N,q){if(q!==void 0&&q.isCamera!==!0){jt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(H===!0)return;ee!==null&&ee.renderStart(N,q);const ce=Re.enabled===!0&&Re.isPresenting===!0,ae=J!==null&&($===null||ce)&&J.begin(O,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(q),q=Re.getCamera()),N.isScene===!0&&N.onBeforeRender(O,N,q,$),P=he.get(N,D.length),P.init(q),P.state.textureUnits=xe.getTextureUnits(),D.push(P),ye.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),q.isArrayCamera?bt.setFromArrayCamera(q):lt.setFromProjectionMatrix(ye,Ci,q.reversedDepth),_t=this.localClippingEnabled,ct=ge.init(this.clippingPlanes,_t),I=De.get(N,E.length),I.init(),E.push(I),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Ke=O.xr.getDepthSensingMesh();Ke!==null&&ys(Ke,q,-1/0,O.sortObjects)}ys(N,q,0,O.sortObjects),I.finish(),ee!==null&&ee.updateLights(P.state.lightsArray),O.sortObjects===!0&&I.sort(ve,Qe),be=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,be&&B.addToRenderList(I,N),this.info.autoReset===!0&&this.info.reset(),ct===!0&&ge.beginShadows();const se=P.state.shadowsArray;if(Le.render(se,N,q),ct===!0&&ge.endShadows(),(ae&&J.hasRenderPass())===!1){const Ke=I.opaque,je=I.transmissive;if(P.setupLights(),q.isArrayCamera){const Ve=q.cameras;if(je.length>0)for(let Je=0,ht=Ve.length;Je<ht;Je++){const Et=Ve[Je];xa(Ke,je,N,Et)}be&&B.render(N);for(let Je=0,ht=Ve.length;Je<ht;Je++){const Et=Ve[Je];bo(I,N,Et,Et.viewport)}}else je.length>0&&xa(Ke,je,N,q),be&&B.render(N),bo(I,N,q)}$!==null&&F===0&&(xe.updateMultisampleRenderTarget($),xe.updateRenderTargetMipmap($)),ae&&J.end(O),N.isScene===!0&&N.onAfterRender(O,N,q),ke.resetDefaultState(),W=-1,Q=null,D.pop(),D.length>0?(P=D[D.length-1],xe.setTextureUnits(P.state.textureUnits),ct===!0&&ge.setGlobalState(O.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,ee!==null&&ee.renderEnd()};function ys(N,q,ce,ae){if(N.visible===!1)return;if(N.layers.test(q.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(q);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){const Ke=q.isArrayCamera?bt:lt;if(!N.frustumCulled||N.intersectsFrustum(Ke)){ae&&Ge.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ye);const je=Te.update(N),Ve=N.material;Ve.visible&&I.push(N,je,Ve,ce,Ge.z,null,q)}}else if(N.isMesh||N.isLine||N.isPoints){const Ke=q.isArrayCamera?bt:lt;if(!N.frustumCulled||N.intersectsFrustum(Ke)){const je=Te.update(N),Ve=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ge.copy(N.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ge.copy(je.boundingSphere.center)),Ge.applyMatrix4(N.matrixWorld).applyMatrix4(ye)),Array.isArray(Ve)){const Je=je.groups;for(let ht=0,Et=Je.length;ht<Et;ht++){const et=Je[ht],Ct=Ve[et.materialIndex];Ct&&Ct.visible&&I.push(N,je,Ct,ce,Ge.z,et,q)}}else Ve.visible&&I.push(N,je,Ve,ce,Ge.z,null,q)}}}const Be=N.children;for(let Ke=0,je=Be.length;Ke<je;Ke++)ys(Be[Ke],q,ce,ae)}function bo(N,q,ce,ae){const{opaque:se,transmissive:Be,transparent:Ke}=N;P.setupLightsView(ce),ct===!0&&ge.setGlobalState(O.clippingPlanes,ce),ae&&ze.viewport(k.copy(ae)),se.length>0&&qr(se,q,ce),Be.length>0&&qr(Be,q,ce),Ke.length>0&&qr(Ke,q,ce),ze.buffers.depth.setTest(!0),ze.buffers.depth.setMask(!0),ze.buffers.color.setMask(!0),ze.setPolygonOffset(!1)}function xa(N,q,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const et=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Gi(1,1,{generateMipmaps:!0,type:et?Xi:ri,minFilter:jr,samples:Math.max(4,Ht.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Be=P.state.transmissionRenderTarget[ae.id],Ke=ae.viewport||k;Be.setSize(Ke.z*O.transmissionResolutionScale,Ke.w*O.transmissionResolutionScale);const je=O.getRenderTarget(),Ve=O.getActiveCubeFace(),Je=O.getActiveMipmapLevel();O.setRenderTarget(Be),O.getClearColor(G),le=O.getClearAlpha(),le<1&&O.setClearColor(16777215,.5),O.clear(),be&&B.render(ce);const ht=O.toneMapping;O.toneMapping=cr;const Et=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),ct===!0&&ge.setGlobalState(O.clippingPlanes,ae),qr(N,ce,ae),xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Ct=0,Qt=q.length;Ct<Qt;Ct++){const Gt=q[Ct],{object:Bt,geometry:sn,material:tt,group:hn}=Gt;if(tt.side===zi&&Bt.layers.test(ae.layers)){const at=tt.side;tt.side=Kn,tt.needsUpdate=!0,va(Bt,ce,ae,sn,tt,hn),tt.side=at,tt.needsUpdate=!0,et=!0}}et===!0&&(xe.updateMultisampleRenderTarget(Be),xe.updateRenderTargetMipmap(Be))}O.setRenderTarget(je,Ve,Je),O.setClearColor(G,le),Et!==void 0&&(ae.viewport=Et),O.toneMapping=ht}function qr(N,q,ce){const ae=q.isScene===!0?q.overrideMaterial:null;for(let se=0,Be=N.length;se<Be;se++){const Ke=N[se],{object:je,geometry:Ve,group:Je}=Ke;let ht=Ke.material;ht.allowOverride===!0&&ae!==null&&(ht=ae),je.layers.test(ce.layers)&&va(je,q,ce,Ve,ht,Je)}}function va(N,q,ce,ae,se,Be){ee!==null&&se.isNodeMaterial&&ee.setObject(N,se),N.onBeforeRender(O,q,ce,ae,se,Be),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(O,q,ce,ae,N,Be),se.transparent===!0&&se.side===zi&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,O.renderBufferDirect(ce,q,ae,se,N,Be),se.side=ps,se.needsUpdate=!0,O.renderBufferDirect(ce,q,ae,se,N,Be),se.side=zi):O.renderBufferDirect(ce,q,ae,se,N,Be),N.onAfterRender(O,q,ce,ae,se,Be)}function _a(N){let q=0;for(const ce of N)ce.texture!==null&&q++;return q}function Yr(N,q,ce){q.isScene!==!0&&(q=Tt);const ae=rt.get(N),se=P.state.lights,Be=P.state.shadowsArray,Ke=se.state.version,je=me.getParameters(N,se.state,Be,q,ce,P.state.lightProbeGridArray),Ve=me.getProgramCacheKey(je);let Je=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?q.environment:null,ae.fog=q.fog;const ht=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=R.get(N.envMap||ae.environment,ht),ae.envMapRotation=ae.environment!==null&&N.envMap===null?q.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",Pt),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let Et=Je.get(Ve);if(Et!==void 0){if(ae.currentProgram===Et&&ae.lightsStateVersion===Ke)return Co(N,je),Et}else je.uniforms=me.getUniforms(N),ee!==null&&N.isNodeMaterial&&ee.build(N,ce,je),N.onBeforeCompile(je,O),Et=me.acquireProgram(je,Ve),Je.set(Ve,Et),ae.uniforms=je.uniforms;const et=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=ge.uniform),Co(N,je),ae.needsLights=Ss(N),ae.lightsStateVersion=Ke,ae.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.sunLights.value=se.state.sun,et.sunLightShadows.value=se.state.sunShadow,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.sunShadowMatrix.value=se.state.sunShadowMatrix,et.sunShadowCascade.value=se.state.sunShadowCascade,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.numLightProbeGrids=_a(P.state.lightProbeGridArray),ae.currentProgram=Et,ae.uniformsList=null,Et}function Dc(N,q,ce,ae,se){const Be=rt.get(N),Ke=Be.currentProgram.id+","+ae+","+se;let je=Be.programVariants.get(Ke);return je===void 0?(je=Yr(N,q,ce),Be.programVariants.set(Ke,je)):(Be.currentProgram=je,Be.uniformsList=null,Be.outputColorSpace=ae,Be.toneMapping=se),je}function Zt(N){if(N.uniformsList===null){const q=N.currentProgram.getUniforms();N.uniformsList=dc.seqWithValue(q.seq,N.uniforms)}return N.uniformsList}function Co(N,q){const ce=rt.get(N);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function ya(N,q,ce,ae,se){q.isScene!==!0&&(q=Tt),xe.resetTextureUnits();const Be=q.fog,Ke=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?q.environment:null,je=$===null?O.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Lt.workingColorSpace,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=R.get(ae.envMap||Ke,Ve),ht=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Et=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ce.morphAttributes.position,Ct=!!ce.morphAttributes.normal,Qt=!!ce.morphAttributes.color;let Gt=cr;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Gt=O.toneMapping);const Bt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,sn=Bt!==void 0?Bt.length:0,tt=rt.get(ae),hn=P.state.lights;if(ct===!0&&(_t===!0||N!==Q)){const Ot=N===Q&&ae.id===W;ge.setState(ae,N,Ot)}let at=!1,Ri=!1;ae.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==hn.state.version||se.isBatchedMesh&&tt.batching===!1||!se.isBatchedMesh&&tt.batching===!0||se.isBatchedMesh&&tt.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&tt.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||se.isInstancedMesh&&tt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&tt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&tt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&tt.instancingMorph===!1&&se.morphTexture!==null||tt.envMap!==Je||ae.fog===!0&&tt.fog!==Be||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==ge.numPlanes||tt.numIntersection!==ge.numIntersection)||tt.vertexAlphas!==ht||tt.vertexTangents!==Et||tt.morphTargets!==et||tt.morphNormals!==Ct||tt.morphColors!==Qt||tt.morphTargetsCount!==sn||tt.numLightProbeGrids!==_a(P.state.lightProbeGridArray)?at=!0:(tt.outputColorSpace!==je||tt.toneMapping!==Gt)&&(Ri=!0):(at=!0,tt.__version=ae.version);let pn=tt.currentProgram;(at===!0||Ri===!0)&&(pn=Ri===!0?Dc(ae,q,se,je,Gt):Yr(ae,q,se),ee&&ae.isNodeMaterial&&ee.onUpdateProgram(ae,pn,tt));let hr=!1,mi=!1,Pi=!1;const Rt=pn.getUniforms(),on=tt.uniforms;if(ze.useProgram(pn.program)&&(hr=!0,mi=!0,Pi=!0),ae.id!==W&&(W=ae.id,mi=!0),hr||Q!==N){ze.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Rt.setValue(X,"projectionMatrix",N.projectionMatrix),Rt.setValue(X,"viewMatrix",N.matrixWorldInverse);const Wt=Rt.map.cameraPosition;Wt!==void 0&&Wt.setValue(X,He.setFromMatrixPosition(N.matrixWorld)),Ht.logarithmicDepthBuffer&&Rt.setValue(X,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Rt.setValue(X,"isOrthographic",N.isOrthographicCamera===!0),Q!==N&&(Q=N,mi=!0,Pi=!0)}if(tt.needsLights&&(hn.state.sunShadowMap.length>0&&Rt.setValue(X,"sunShadowMap",hn.state.sunShadowMap,xe),hn.state.directionalShadowMap.length>0&&Rt.setValue(X,"directionalShadowMap",hn.state.directionalShadowMap,xe),hn.state.spotShadowMap.length>0&&Rt.setValue(X,"spotShadowMap",hn.state.spotShadowMap,xe),hn.state.pointShadowMap.length>0&&Rt.setValue(X,"pointShadowMap",hn.state.pointShadowMap,xe)),se.isSkinnedMesh){Rt.setOptional(X,se,"bindMatrix"),Rt.setOptional(X,se,"bindMatrixInverse");const Ot=se.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),Rt.setValue(X,"boneTexture",Ot.boneTexture,xe))}se.isBatchedMesh&&(Rt.setOptional(X,se,"batchingTexture"),Rt.setValue(X,"batchingTexture",se._matricesTexture,xe),Rt.setOptional(X,se,"batchingIdTexture"),Rt.setValue(X,"batchingIdTexture",se._indirectTexture,xe),Rt.setOptional(X,se,"batchingColorTexture"),se._colorsTexture!==null&&Rt.setValue(X,"batchingColorTexture",se._colorsTexture,xe));const Rn=ce.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&_e.update(se,ce,pn),(mi||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Rt.setValue(X,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&q.environment!==null&&(on.envMapIntensity.value=q.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=gb()),mi){if(Rt.setValue(X,"toneMappingExposure",O.toneMappingExposure),tt.needsLights&&Ao(on,Pi),Be&&ae.fog===!0&&Ne.refreshFogUniforms(on,Be),Ne.refreshMaterialUniforms(on,ae,Se,Ee,P.state.transmissionRenderTarget[N.id]),tt.needsLights&&tt.numLightProbeGrids>0){const Ot=A;let Wt=0;for(const _n of P.state.lightProbeGridArray)_n.texture!==null&&(Ot.textures[Wt]=_n.texture,Ot.min[Wt]=_n.boundingBox.min,Ot.max[Wt]=_n.boundingBox.max,Ot.resolution[Wt]=_n.resolution,Wt++);for(const _n in Ot)Ot[_n].length=Wt;on.probesSH.value=Ot.textures,on.probesMin.value=Ot.min,on.probesMax.value=Ot.max,on.probesResolution.value=Ot.resolution}dc.upload(X,Zt(tt),on,xe)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(dc.upload(X,Zt(tt),on,xe),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Rt.setValue(X,"center",se.center),Rt.setValue(X,"modelViewMatrix",se.modelViewMatrix),Rt.setValue(X,"normalMatrix",se.normalMatrix),Rt.setValue(X,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const Ot=ae.uniformsGroups;for(let Wt=0,_n=Ot.length;Wt<_n;Wt++){const pr=Ot[Wt];st.update(pr,pn),st.bind(pr,pn)}}return pn}function Ao(N,q){N.ambientLightColor.needsUpdate=q,N.lightProbe.needsUpdate=q,N.sunLights.needsUpdate=q,N.sunLightShadows.needsUpdate=q,N.directionalLights.needsUpdate=q,N.directionalLightShadows.needsUpdate=q,N.pointLights.needsUpdate=q,N.pointLightShadows.needsUpdate=q,N.spotLights.needsUpdate=q,N.spotLightShadows.needsUpdate=q,N.rectAreaLights.needsUpdate=q,N.hemisphereLights.needsUpdate=q}function Ss(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,q,ce){const ae=rt.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),rt.get(N.texture).__webglTexture=q,rt.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,q){const ce=rt.get(N);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(N,q=0,ce=0){$=N,ne=q,F=ce;let ae=null,se=!1,Be=!1;if(N){const je=rt.get(N);if(je.__useDefaultFramebuffer!==void 0){ze.bindFramebuffer(X.FRAMEBUFFER,je.__webglFramebuffer),k.copy(N.viewport),Z.copy(N.scissor),we=N.scissorTest,ze.viewport(k),ze.scissor(Z),ze.setScissorTest(we),W=-1;return}else if(je.__webglFramebuffer===void 0)xe.setupRenderTarget(N);else if(je.__hasExternalTextures)xe.rebindTextures(N,rt.get(N.texture).__webglTexture,rt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const ht=N.depthTexture;if(je.__boundDepthTexture!==ht){if(ht!==null&&rt.has(ht)&&(N.width!==ht.image.width||N.height!==ht.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");xe.setupDepthRenderbuffer(N)}}const Ve=N.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Be=!0);const Je=rt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Je[q])?ae=Je[q][ce]:ae=Je[q],se=!0):N.samples>0&&xe.useMultisampledRTT(N)===!1?ae=rt.get(N).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ce]:ae=Je,k.copy(N.viewport),Z.copy(N.scissor),we=N.scissorTest}else k.copy(Fe).multiplyScalar(Se).floor(),Z.copy(vt).multiplyScalar(Se).floor(),we=mt;if(ce!==0&&(ae=re),ze.bindFramebuffer(X.FRAMEBUFFER,ae)&&ze.drawBuffers(N,ae),ze.viewport(k),ze.scissor(Z),ze.setScissorTest(we),se){const je=rt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+q,je.__webglTexture,ce)}else if(Be){const je=q;for(let Ve=0;Ve<N.textures.length;Ve++){const Je=rt.get(N.textures[Ve]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+Ve,Je.__webglTexture,ce,je)}}else if(N!==null&&ce!==0){const je=rt.get(N.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,je.__webglTexture,ce)}W=-1};function No(N){const q=rt.get(N);return(q.__readFormat!==N.format||q.__readType!==N.type)&&(q.__readFormat=N.format,q.__readType=N.type,q.__formatReadable=Ht.textureFormatReadable(N.format),q.__typeReadable=Ht.textureTypeReadable(N.type)),q}this.readRenderTargetPixels=function(N,q,ce,ae,se,Be,Ke,je=0){if(!(N&&N.isWebGLRenderTarget)){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(Ve=Ve[Ke],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){ze.bindFramebuffer(X.FRAMEBUFFER,Ve);try{const Je=N.textures[je],ht=Je.format,Et=Je.type;N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+je);const et=No(Je);if(et.__formatReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){jt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=N.width-ae&&ce>=0&&ce<=N.height-se&&X.readPixels(q,ce,ae,se,Ie.convert(ht),Ie.convert(Et),Be)}finally{const Je=$!==null?rt.get($).__webglFramebuffer:null;ze.bindFramebuffer(X.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(N,q,ce,ae,se,Be,Ke,je=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ke!==void 0&&(Ve=Ve[Ke],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(q>=0&&q<=N.width-ae&&ce>=0&&ce<=N.height-se){ze.bindFramebuffer(X.FRAMEBUFFER,Ve);const Je=N.textures[je],ht=Je.format,Et=Je.type;N.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+je);const et=No(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ct),X.bufferData(X.PIXEL_PACK_BUFFER,Be.byteLength,X.STREAM_READ),X.readPixels(q,ce,ae,se,Ie.convert(ht),Ie.convert(Et),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const Qt=$!==null?rt.get($).__webglFramebuffer:null;ze.bindFramebuffer(X.FRAMEBUFFER,Qt);const Gt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await wS(X,Gt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ct),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,Be),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ct),X.deleteSync(Gt),Be}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,q=null,ce=0){const ae=Math.pow(2,-ce),se=Math.floor(N.image.width*ae),Be=Math.floor(N.image.height*ae),Ke=q!==null?q.x:0,je=q!==null?q.y:0;xe.setTexture2D(N,0),X.copyTexSubImage2D(X.TEXTURE_2D,ce,0,0,Ke,je,se,Be),ze.unbindTexture()},this.copyTextureToTexture=function(N,q,ce=null,ae=null,se=0,Be=0){let Ke,je,Ve,Je,ht,Et,et,Ct,Qt;const Gt=N.isCompressedTexture?N.mipmaps[Be]:N.image;if(ce!==null)Ke=ce.max.x-ce.min.x,je=ce.max.y-ce.min.y,Ve=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,ht=ce.min.y,Et=ce.isBox3?ce.min.z:0;else{const Rt=Math.pow(2,-se);Ke=Math.floor(Gt.width*Rt),je=Math.floor(Gt.height*Rt),N.isDataArrayTexture?Ve=Gt.depth:N.isData3DTexture?Ve=Math.floor(Gt.depth*Rt):Ve=1,Je=0,ht=0,Et=0}ae!==null?(et=ae.x,Ct=ae.y,Qt=ae.z):(et=0,Ct=0,Qt=0);const Bt=Ie.convert(q.format),sn=Ie.convert(q.type);let tt;q.isData3DTexture?(xe.setTexture3D(q,0),tt=X.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(xe.setTexture2DArray(q,0),tt=X.TEXTURE_2D_ARRAY):(xe.setTexture2D(q,0),tt=X.TEXTURE_2D),ze.activeTexture(X.TEXTURE0),ze.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,q.flipY),ze.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),ze.pixelStorei(X.UNPACK_ALIGNMENT,q.unpackAlignment);const hn=ze.getParameter(X.UNPACK_ROW_LENGTH),at=ze.getParameter(X.UNPACK_IMAGE_HEIGHT),Ri=ze.getParameter(X.UNPACK_SKIP_PIXELS),pn=ze.getParameter(X.UNPACK_SKIP_ROWS),hr=ze.getParameter(X.UNPACK_SKIP_IMAGES);ze.pixelStorei(X.UNPACK_ROW_LENGTH,Gt.width),ze.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Gt.height),ze.pixelStorei(X.UNPACK_SKIP_PIXELS,Je),ze.pixelStorei(X.UNPACK_SKIP_ROWS,ht),ze.pixelStorei(X.UNPACK_SKIP_IMAGES,Et);const mi=N.isDataArrayTexture||N.isData3DTexture,Pi=q.isDataArrayTexture||q.isData3DTexture;if(N.isDepthTexture){const Rt=rt.get(N),on=rt.get(q),Rn=rt.get(Rt.__renderTarget),Ot=rt.get(on.__renderTarget);ze.bindFramebuffer(X.READ_FRAMEBUFFER,Rn.__webglFramebuffer),ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let Wt=0;Wt<Ve;Wt++)mi&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,se,Et+Wt),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,rt.get(q).__webglTexture,Be,Qt+Wt)),X.blitFramebuffer(Je,ht,Je+Ke,ht+je,et,Ct,et+Ke,Ct+je,X.DEPTH_BUFFER_BIT,X.NEAREST);ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||rt.has(N)){const Rt=rt.get(N),on=rt.get(q);ze.bindFramebuffer(X.READ_FRAMEBUFFER,z),ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,V);for(let Rn=0;Rn<Ve;Rn++)mi?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Rt.__webglTexture,se,Et+Rn):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Rt.__webglTexture,se),Pi?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,on.__webglTexture,Be,Qt+Rn):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,on.__webglTexture,Be),se!==0?X.blitFramebuffer(Je,ht,Je+Ke,ht+je,et,Ct,et+Ke,Ct+je,X.COLOR_BUFFER_BIT,X.NEAREST):Pi?X.copyTexSubImage3D(tt,Be,et,Ct,Qt+Rn,Je,ht,Ke,je):X.copyTexSubImage2D(tt,Be,et,Ct,Je,ht,Ke,je);ze.bindFramebuffer(X.READ_FRAMEBUFFER,null),ze.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Pi?N.isDataTexture||N.isData3DTexture?X.texSubImage3D(tt,Be,et,Ct,Qt,Ke,je,Ve,Bt,sn,Gt.data):q.isCompressedArrayTexture?X.compressedTexSubImage3D(tt,Be,et,Ct,Qt,Ke,je,Ve,Bt,Gt.data):X.texSubImage3D(tt,Be,et,Ct,Qt,Ke,je,Ve,Bt,sn,Gt):N.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,Be,et,Ct,Ke,je,Bt,sn,Gt.data):N.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,Be,et,Ct,Gt.width,Gt.height,Bt,Gt.data):X.texSubImage2D(X.TEXTURE_2D,Be,et,Ct,Ke,je,Bt,sn,Gt);ze.pixelStorei(X.UNPACK_ROW_LENGTH,hn),ze.pixelStorei(X.UNPACK_IMAGE_HEIGHT,at),ze.pixelStorei(X.UNPACK_SKIP_PIXELS,Ri),ze.pixelStorei(X.UNPACK_SKIP_ROWS,pn),ze.pixelStorei(X.UNPACK_SKIP_IMAGES,hr),Be===0&&q.generateMipmaps===!0&&q.mipmapsAutoUpdate===!0&&X.generateMipmap(tt),ze.unbindTexture()},this.initRenderTarget=function(N){rt.get(N).__webglFramebuffer===void 0&&xe.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?xe.setTextureCube(N,0):N.isData3DTexture?xe.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?xe.setTexture2DArray(N,0):xe.setTexture2D(N,0),ze.unbindTexture()},this.resetState=function(){ne=0,F=0,$=null,ze.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}function xb({onEnter:s,onSkip:e}){const t=K.useRef(null),[r,l]=K.useState($n.currentLevel),[c,d]=K.useState(!1);return K.useEffect(()=>$n.subscribe(m=>{l(m)}),[]),K.useEffect(()=>{if(r===kt.LOW||r===kt.REDUCED_MOTION)return;const f=t.current;if(!f)return;let m;const p=f.clientWidth||window.innerWidth,v=f.clientHeight||window.innerHeight,S=new Nx;S.fog=new Ac(526348,.035);const _=new qn(60,p/v,.1,1e3);_.position.z=24;const y=new Zx({alpha:!0,antialias:r===kt.HIGH});y.setSize(p,v),y.setPixelRatio(Math.min(window.devicePixelRatio,r===kt.HIGH?2:1)),y.setClearColor(526348,1),f.appendChild(y.domElement);const w=r===kt.HIGH?1200:400,T=new pi,x=new Float32Array(w*3),M=new Float32Array(w*3),L=new Mt(9133302),U=new Mt(3718648),A=new Mt(11032055);for(let Z=0;Z<w;Z++){x[Z*3]=(Math.random()-.5)*50,x[Z*3+1]=(Math.random()-.5)*35,x[Z*3+2]=(Math.random()-.5)*40;const we=Math.random()<.5?L.clone().lerp(U,Math.random()):U.clone().lerp(A,Math.random());M[Z*3]=we.r,M[Z*3+1]=we.g,M[Z*3+2]=we.b}T.setAttribute("position",new dr(x,3)),T.setAttribute("color",new dr(M,3));const I=new Dx({size:r===kt.HIGH?.18:.25,vertexColors:!0,transparent:!0,opacity:.85,blending:Xd}),P=new eM(T,I);S.add(P);const E=new ra,D=new If({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),J=new If({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),O=new Ec(7.5,.08,16,64),H=new Ec(9.2,.05,16,64),ee=new $i(O,D),re=new $i(H,J);E.add(ee),E.add(re),S.add(E);let z=0,V=0,ne=0,F=0;const $=Z=>{z=(Z.clientX/window.innerWidth-.5)*2,V=(Z.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",$);const W=()=>{if(!f)return;const Z=f.clientWidth||window.innerWidth,we=f.clientHeight||window.innerHeight;_.aspect=Z/we,_.updateProjectionMatrix(),y.setSize(Z,we)};window.addEventListener("resize",W);let Q=new MM;const k=()=>{m=requestAnimationFrame(k),$n.onFrame(),Q.getDelta();const Z=Q.getElapsedTime();ne+=(z*2.5-ne)*.05,F+=(-V*1.8-F)*.05,_.position.x=ne,_.position.y=F,_.lookAt(0,0,0),P.rotation.y=Z*.03,P.rotation.x=Math.sin(Z*.02)*.05,ee.rotation.x=Z*.15,ee.rotation.y=Z*.2,re.rotation.y=-Z*.12,re.rotation.z=Z*.08,y.render(S,_)};return k(),()=>{cancelAnimationFrame(m),window.removeEventListener("mousemove",$),window.removeEventListener("resize",W),y.domElement&&f.contains(y.domElement)&&f.removeChild(y.domElement),T.dispose(),I.dispose(),O.dispose(),H.dispose(),D.dispose(),J.dispose(),y.dispose()}},[r]),a.jsxs("div",{className:"spatial-landing-root",children:[a.jsx("div",{ref:t,className:"spatial-canvas-viewport"}),a.jsx("div",{className:"spatial-vignette-overlay"}),a.jsxs("div",{className:"spatial-content-wrap",children:[a.jsxs("div",{className:"spatial-badge-pill",children:[a.jsx(nx,{size:13,className:"pulse-icon text-cyan"}),a.jsx("span",{children:"PROJECT CINE-3D • SPATIAL CINEMA"})]}),a.jsxs("h1",{className:"spatial-headline",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"spatial-version-tag",children:"2.0"})]}),a.jsx("p",{className:"spatial-tagline",children:"Beyond the Screen."}),a.jsx("p",{className:"spatial-description",children:"A high-performance personal streaming theater powered by your host workstation. Spatial library discovery, instant seeking, and zero cloud lock-in."}),a.jsxs("div",{className:"spatial-actions-row",children:[a.jsxs("button",{className:`spatial-enter-btn ${c?"hovered":""}`,onClick:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.jsx("div",{className:"btn-glow-ring"}),a.jsx(dn,{size:18,fill:"currentColor"}),a.jsx("span",{children:"Enter CINE-3D Experience"}),a.jsx(t_,{size:18})]}),a.jsxs("button",{className:"spatial-skip-btn",onClick:e,title:"Go directly to traditional media library",children:[a.jsx(Kg,{size:15}),a.jsx("span",{children:"Skip to Library"})]})]}),a.jsx("div",{className:"spatial-footer-note",children:a.jsx("span",{children:"Direct Host Stream • HTTP 206 Range Seeking • Cloudflare Tunnel Active"})})]})]})}function vb({movies:s=[],onSelectMovie:e,onPlayMovie:t,onSwitchTo2D:r}){const l=K.useRef(null),[c,d]=K.useState($n.currentLevel),[f,m]=K.useState(0),[p,v]=K.useState(!1),[S,_]=K.useState(null);K.useEffect(()=>$n.subscribe(P=>d(P)),[]);const y=K.useMemo(()=>(s||[]).filter(P=>P&&P.id),[s]),w=y[f]||y[0]||null,T=K.useRef(0),x=K.useRef(0),M=K.useRef(0),L=K.useRef(!1),U=K.useRef(0),A=K.useRef(0);K.useEffect(()=>{const P=E=>{["ArrowLeft","KeyA"].includes(E.code)?(E.preventDefault(),I(-1)):["ArrowRight","KeyD"].includes(E.code)?(E.preventDefault(),I(1)):E.code==="Enter"&&w?e(w):E.code==="Space"&&w&&(E.preventDefault(),t(w))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[w,y.length]);const I=P=>{if(!y.length)return;const E=y.length,D=Math.PI*2/E;x.current+=P*D};return K.useEffect(()=>{if(c===kt.LOW||c===kt.REDUCED_MOTION)return;const P=l.current;if(!P||y.length===0)return;let E;const D=P.clientWidth||window.innerWidth,J=P.clientHeight||window.innerHeight,O=new Nx;O.fog=new Ac(526348,.028);const H=new qn(50,D/J,.1,100);H.position.set(0,.5,14);const ee=new Zx({antialias:c===kt.HIGH,alpha:!0});ee.setSize(D,J),ee.setPixelRatio(Math.min(window.devicePixelRatio,c===kt.HIGH?2:1)),ee.setClearColor(526348,1),P.appendChild(ee.domElement);const re=new _M(16777215,.85);O.add(re);const z=new mM(9133302,2.5);z.position.set(0,8,12),z.angle=Math.PI/4,z.penumbra=.8,O.add(z);const V=new xM(3718648,1.8,30);V.position.set(-6,-2,6),O.add(V);const ne=new EM(36,36,9133302,1974840);ne.position.y=-3.2,O.add(ne);const F=new ra;O.add(F);const $=y.length,W=Math.max(7.5,$*.95),Q=3,k=4.5,Z=new Eo(Q,k),we=new hM,G=[],le=[],Me=[],Ee=ct=>{const _t=document.createElement("canvas");_t.width=300,_t.height=450;const ye=_t.getContext("2d");return ye.fillStyle="#101626",ye.fillRect(0,0,300,450),ye.fillStyle="#8B5CF6",ye.fillRect(0,440,300,10),ye.fillStyle="#F8FAFC",ye.font="bold 20px sans-serif",ye.textAlign="center",ye.fillText((ct||"Movie").substring(0,22),150,225),new tM(_t)};y.forEach((ct,_t)=>{const ye=_t/$*Math.PI*2,He=Math.sin(ye)*W,Ge=Math.cos(ye)*W;let Tt;try{const X=fn(`/api/movies/${ct.id}/poster`);Tt=we.load(X,void 0,void 0,()=>{const Ut=Ee(ct.clean_title);be.map=Ut,be.needsUpdate=!0})}catch{Tt=Ee(ct.clean_title)}Me.push(Tt);const be=new oM({map:Tt,roughness:.35,metalness:.15,side:zi});le.push(be);const Ye=new $i(Z,be);Ye.position.set(He,0,Ge),Ye.lookAt(0,0,0),Ye.rotation.y+=Math.PI,Ye.userData={movie:ct,index:_t},F.add(Ye),G.push(Ye)});const Se=new SM,ve=new It(-999,-999),Qe=ct=>{const _t=P.getBoundingClientRect();if(ve.x=(ct.clientX-_t.left)/_t.width*2-1,ve.y=-((ct.clientY-_t.top)/_t.height)*2+1,L.current){const ye=ct.clientX-A.current;A.current=ct.clientX,x.current+=ye*.005,M.current=ye*.005}},Fe=ct=>{L.current=!0,U.current=ct.clientX,A.current=ct.clientX,M.current=0,v(!0)},vt=ct=>{const _t=Math.abs(ct.clientX-U.current);if(L.current=!1,v(!1),_t<6){Se.setFromCamera(ve,H);const ye=Se.intersectObjects(G);if(ye.length>0){const He=ye[0].object,{movie:Ge,index:Tt}=He.userData;if(Tt===f)e(Ge);else{const be=Math.PI*2/$,Ye=Tt-f;x.current-=Ye*be}}}},mt=ct=>{ct.preventDefault(),x.current+=Math.sign(ct.deltaY)*.15};P.addEventListener("pointermove",Qe),P.addEventListener("pointerdown",Fe),window.addEventListener("pointerup",vt),P.addEventListener("wheel",mt,{passive:!1});const lt=()=>{if(!P)return;const ct=P.clientWidth||window.innerWidth,_t=P.clientHeight||window.innerHeight;H.aspect=ct/_t,H.updateProjectionMatrix(),ee.setSize(ct,_t)};window.addEventListener("resize",lt);const bt=()=>{var Tt;E=requestAnimationFrame(bt),$n.onFrame(),L.current||(x.current+=M.current,M.current*=.92),T.current+=(x.current-T.current)*.08,F.rotation.y=T.current;const ct=(-F.rotation.y%(Math.PI*2)+Math.PI*2)%(Math.PI*2),_t=Math.PI*2/$;let ye=Math.round(ct/_t)%$;ye<0&&(ye+=$),ye!==f&&m(ye),Se.setFromCamera(ve,H);const He=Se.intersectObjects(G),Ge=He.length>0?He[0].object:null;G.forEach((be,Ye)=>{const X=Ye===ye,Ut=Ge===be,Nt=X?1.25:Ut?1.08:.95;be.scale.lerp(new de(Nt,Nt,Nt),.1),be.material&&(be.material.emissive=new Mt(X?2233152:Ut?990771:0))}),(Tt=Ge==null?void 0:Ge.userData)!=null&&Tt.movie?_(Ge.userData.movie):_(null),ee.render(O,H)};return bt(),()=>{cancelAnimationFrame(E),P.removeEventListener("pointermove",Qe),P.removeEventListener("pointerdown",Fe),window.removeEventListener("pointerup",vt),P.removeEventListener("wheel",mt),window.removeEventListener("resize",lt),ee.domElement&&P.contains(ee.domElement)&&P.removeChild(ee.domElement),Z.dispose(),ne.dispose(),le.forEach(ct=>ct.dispose()),Me.forEach(ct=>ct.dispose()),ee.dispose()}},[y,c]),c===kt.LOW||c===kt.REDUCED_MOTION?a.jsxs("div",{className:"cinema-lobby-css3d-fallback",children:[a.jsxs("div",{className:"lobby-header-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(Jg,{size:14,className:"text-cyan"}),a.jsx("span",{children:"2D ADAPTIVE CINEMA LOBBY"})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,children:[a.jsx(Om,{size:14}),a.jsx("span",{children:"Switch to Traditional Grid"})]})]}),a.jsxs("div",{className:"css3d-carousel-container",children:[a.jsx("button",{className:"css3d-nav-arrow left",onClick:()=>I(-1),children:a.jsx(fc,{size:22})}),a.jsx("div",{className:"css3d-active-card-portal",children:w&&a.jsxs("div",{className:"css3d-featured-card",onClick:()=>e(w),children:[a.jsx("img",{src:fn(`/api/movies/${w.id}/poster`),alt:w.clean_title,className:"css3d-card-img"}),a.jsxs("div",{className:"css3d-card-overlay",children:[a.jsx("span",{className:"card-pill-res",children:w.resolution||"1080P"}),a.jsx("h4",{children:w.clean_title}),a.jsx("div",{className:"card-actions-quick",children:a.jsxs("button",{className:"btn-primary btn-sm",onClick:P=>{P.stopPropagation(),t(w)},children:[a.jsx(dn,{size:14,fill:"currentColor"})," Play Now"]})})]})]})}),a.jsx("button",{className:"css3d-nav-arrow right",onClick:()=>I(1),children:a.jsx(co,{size:22})})]}),a.jsx("div",{className:"css3d-reel-row",children:y.map((P,E)=>a.jsxs("div",{className:`css3d-thumb-pill ${E===f?"active":""}`,onClick:()=>m(E),children:[a.jsx("img",{src:fn(`/api/movies/${P.id}/poster`),alt:P.clean_title}),a.jsx("span",{children:P.clean_title})]},P.id))})]}):a.jsxs("div",{className:"cinema-lobby-3d-root",children:[a.jsx("div",{ref:l,className:"lobby-canvas-viewport"}),a.jsxs("div",{className:"lobby-top-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(Vr,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D SPATIAL CAROUSEL"}),a.jsxs("span",{className:"badge-movie-count",children:[y.length," TITLES"]})]}),a.jsx("div",{className:"lobby-top-controls",children:a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,title:"Switch to conventional 2D Library grid",children:[a.jsx(Om,{size:14}),a.jsx("span",{children:"2D Library Grid"})]})})]}),w&&a.jsx("div",{className:"lobby-floating-hud",children:a.jsxs("div",{className:"hud-content-panel",children:[a.jsxs("div",{className:"hud-metadata-tags",children:[a.jsx("span",{className:"hud-badge-res",children:w.resolution||"1080P"}),w.year&&a.jsx("span",{className:"hud-badge-year",children:w.year}),a.jsx("span",{className:"hud-badge-genre",children:w.genre||"Cinema"}),w.codec&&a.jsx("span",{className:"hud-badge-codec",children:w.codec})]}),a.jsx("h2",{className:"hud-movie-title",children:w.clean_title}),a.jsxs("p",{className:"hud-instructions",children:["Drag horizontally or use ",a.jsx("strong",{children:"← / → Arrow Keys"})," to rotate • ",a.jsx("strong",{children:"Enter"})," for details • ",a.jsx("strong",{children:"Space"})," to stream"]}),a.jsxs("div",{className:"hud-actions-row",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(w),children:[a.jsx(dn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"Play Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>e(w),children:[a.jsx(fo,{size:16}),a.jsx("span",{children:"Movie Details"})]}),a.jsxs("div",{className:"hud-nav-buttons",children:[a.jsx("button",{className:"hud-arrow-btn",onClick:()=>I(-1),title:"Previous Film (Left Arrow)",children:a.jsx(fc,{size:16})}),a.jsx("button",{className:"hud-arrow-btn",onClick:()=>I(1),title:"Next Film (Right Arrow)",children:a.jsx(co,{size:16})})]})]})]})})]})}const _b=["All","Action & Adventure","Anime & Animation","Horror & Suspense","Sci-Fi & Cyber","Thriller & Mystery","Cinema & Drama"];function yb({isOpen:s,onClose:e,onSelectMovie:t,onPlayMovie:r,authFetch:l}){const[c,d]=K.useState(""),[f,m]=K.useState("All"),[p,v]=K.useState([]),[S,_]=K.useState(!1),[y,w]=K.useState([]),[T,x]=K.useState(0),M=K.useRef(null);K.useEffect(()=>{if(typeof window<"u")try{const U=JSON.parse(localStorage.getItem("streamlink_search_history")||"[]");w(Array.isArray(U)?U.slice(0,6):[])}catch{}},[]);const L=U=>{if(!U||!U.trim())return;const A=U.trim(),I=[A,...y.filter(P=>P.toLowerCase()!==A.toLowerCase())].slice(0,6);w(I);try{localStorage.setItem("streamlink_search_history",JSON.stringify(I))}catch{}};return K.useEffect(()=>{s?setTimeout(()=>{var U;return(U=M.current)==null?void 0:U.focus()},80):(d(""),x(0))},[s]),K.useEffect(()=>{if(!s)return;let U=!0;_(!0);const A=new URLSearchParams;return c.trim()&&A.set("q",c.trim()),f!=="All"&&A.set("genre",f),l(`/api/movies?${A.toString()}`).then(I=>I.json()).then(I=>{U&&(v(I.movies||[]),x(0))}).catch(()=>{}).finally(()=>{U&&_(!1)}),()=>{U=!1}},[s,c,f]),K.useEffect(()=>{if(!s)return;const U=A=>{A.key==="Escape"?e():A.key==="ArrowDown"?(A.preventDefault(),x(I=>Math.min(I+1,p.length-1))):A.key==="ArrowUp"?(A.preventDefault(),x(I=>Math.max(I-1,0))):A.key==="Enter"&&p[T]&&(L(c||p[T].clean_title),t(p[T]),e())};return window.addEventListener("keydown",U),()=>window.removeEventListener("keydown",U)},[s,p,T,c]),s?a.jsx("div",{className:"dimensional-search-overlay",onClick:e,children:a.jsxs("div",{className:"dimensional-search-window",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"search-bar-wrap",children:[a.jsx(aa,{size:22,className:"search-input-icon text-cyan"}),a.jsx("input",{ref:M,type:"text",className:"spatial-search-input",placeholder:"Search by title, genre, year, resolution (e.g. 4K, Annabelle)...",value:c,onChange:U=>d(U.target.value)}),c&&a.jsx("button",{className:"search-clear-btn",onClick:()=>d(""),children:a.jsx(lr,{size:18})}),a.jsx("div",{className:"search-shortcut-pill",children:a.jsx("span",{children:"ESC to close"})})]}),a.jsx("div",{className:"search-genres-row",children:_b.map(U=>a.jsx("button",{className:`search-genre-chip ${f===U?"active":""}`,onClick:()=>m(U),children:U},U))}),y.length>0&&!c&&a.jsxs("div",{className:"search-history-row",children:[a.jsx(Gr,{size:13,className:"text-muted"}),a.jsx("span",{className:"text-dim text-xs",children:"Recent:"}),y.map((U,A)=>a.jsx("button",{className:"search-history-chip",onClick:()=>d(U),children:U},A))]}),a.jsx("div",{className:"search-results-viewport",children:S?a.jsxs("div",{className:"search-loading-state",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning personal cinema database..."})]}):p.length>0?a.jsx("div",{className:"search-cards-grid",children:p.map((U,A)=>a.jsxs("div",{className:`search-card-3d ${A===T?"focused":""}`,onClick:()=>{L(c||U.clean_title),t(U),e()},onMouseEnter:()=>x(A),children:[a.jsxs("div",{className:"search-card-poster",children:[a.jsx("img",{src:fn(`/api/movies/${U.id}/poster`),alt:U.clean_title,loading:"lazy"}),a.jsx("div",{className:"search-card-glow"})]}),a.jsxs("div",{className:"search-card-info",children:[a.jsxs("div",{className:"search-card-tags",children:[a.jsx("span",{className:"badge-pill res",children:U.resolution||"1080P"}),U.year&&a.jsx("span",{className:"badge-pill year",children:U.year}),a.jsx("span",{className:"badge-pill genre",children:U.genre||"Movie"})]}),a.jsx("h4",{className:"search-card-title",children:U.clean_title}),a.jsx("p",{className:"search-card-filename",children:U.file_name}),a.jsxs("div",{className:"search-card-play-pill",children:[a.jsx(dn,{size:12,fill:"currentColor"}),a.jsx("span",{children:"Stream"})]})]})]},U.id))}):a.jsxs("div",{className:"search-empty-state",children:[a.jsx(bi,{size:40,className:"text-dim",style:{marginBottom:"12px"}}),a.jsxs("h4",{children:['No matches found for "',c,'"']}),a.jsx("p",{children:'Check spelling or try searching for broad terms like "1080p", "4k", or clearing the genre filter.'})]})}),a.jsxs("div",{className:"search-footer-hint",children:[a.jsxs("span",{children:[a.jsx(h_,{size:12})," Press ",a.jsx("strong",{children:"Enter"})," to open details"]}),a.jsxs("span",{children:["Use ",a.jsx("strong",{children:"↑ / ↓ Arrow Keys"})," to navigate"]})]})]})}):null}function Sb({activeColor:s="#8B5CF6",enabled:e=!0}){return e?a.jsxs("div",{className:"ambient-cinema-backdrop","aria-hidden":"true",children:[a.jsx("div",{className:"ambient-glow-orb orb-primary",style:{background:`radial-gradient(circle, ${s}33 0%, rgba(8, 8, 12, 0) 70%)`}}),a.jsx("div",{className:"ambient-glow-orb orb-secondary",style:{background:"radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(8, 8, 12, 0) 70%)"}})]}):null}function Mb(){let e=new URLSearchParams(window.location.search).get("share");if(!e){const F=window.location.pathname.match(/\/share\/([a-zA-Z0-9_-]+)/);F&&(e=F[1])}if(e)return a.jsx(zy,{token:e});const{user:t,token:r,authFetch:l,loading:c}=jf(),[d,f]=K.useState("home"),[m,p]=K.useState(null),[v,S]=K.useState(null),[_,y]=K.useState("D:\\Movies"),[w,T]=K.useState([]),[x,M]=K.useState(!1),[L,U]=K.useState(!1),[A,I]=K.useState(!1),[P,E]=K.useState(null),[D,J]=K.useState(()=>localStorage.getItem("streamlink_ambient_lighting")!=="false"),[O,H]=K.useState($n.currentLevel),[ee,re]=K.useState(()=>localStorage.getItem("streamlink_seen_intro")!=="true");K.useEffect(()=>$n.subscribe(F=>H(F)),[]),K.useEffect(()=>{const F=$=>{var W;$.key==="/"&&!["INPUT","TEXTAREA"].includes((W=document.activeElement)==null?void 0:W.tagName)&&($.preventDefault(),M(!0))};return window.addEventListener("keydown",F),()=>window.removeEventListener("keydown",F)},[]);const z=()=>{t&&l&&l("/api/movies?sort=recent").then(F=>F.json()).then(F=>{F.movies&&T(F.movies)}).catch(()=>{})};K.useEffect(()=>{z()},[t]),K.useEffect(()=>{t&&l&&l("/api/user/profiles").then(F=>F.json()).then(F=>{if(F.profiles&&F.profiles.length>0){const $=localStorage.getItem("streamlink_active_profile_id"),W=F.profiles.find(Q=>String(Q.id)===$)||F.profiles[0];E(W)}}).catch(()=>{})},[t]),K.useEffect(()=>{(t==null?void 0:t.role)==="admin"&&l&&l("/api/admin/settings").then(F=>F.json()).then(F=>{var $;($=F.settings)!=null&&$.library_folder&&y(F.settings.library_folder)}).catch(()=>{})},[t]);const V=()=>{J(F=>{const $=!F;return localStorage.setItem("streamlink_ambient_lighting",String($)),$})},ne=F=>{E(F),localStorage.setItem("streamlink_active_profile_id",String(F.id))};return c?a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Loading StreamLink 2.0..."})]}):t?ee?a.jsx(xb,{onEnter:()=>{re(!1),localStorage.setItem("streamlink_seen_intro","true"),f("cine3d")},onSkip:()=>{re(!1),localStorage.setItem("streamlink_seen_intro","true")}}):v?a.jsx(ix,{movie:v,onBack:()=>S(null),token:r,authFetch:l}):a.jsxs("div",{className:"app-shell-sidebar-layout",children:[a.jsx(Sb,{enabled:D}),a.jsx(Ny,{currentView:d,setCurrentView:f,onOpenSearch:()=>M(!0),onOpenProfiles:()=>U(!0),onOpenQuality:()=>I(!0),currentProfile:P,qualityLevel:O}),a.jsxs("main",{className:"main-content-scrollable",children:[d==="home"&&a.jsx(Py,{onSelectMovie:F=>p(F),onPlayMovie:F=>S(F),authFetch:l,onNavigateLibrary:()=>f("library"),onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="cine3d"&&a.jsx(vb,{movies:w,onSelectMovie:F=>p(F),onPlayMovie:F=>S(F),onSwitchTo2D:()=>f("library")}),d==="library"&&a.jsx(Ly,{onSelectMovie:F=>p(F),onPlayMovie:F=>S(F),authFetch:l,onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="folder-sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Dy,{authFetch:l}),d==="folder"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Iy,{authFetch:l,onScanSuccess:F=>{y(F),z()},onViewLibrary:()=>f("library")}),d==="sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Uy,{authFetch:l}),d==="favorites"&&a.jsx(ky,{onSelectMovie:F=>p(F),onPlayMovie:F=>S(F),authFetch:l}),d==="dashboard"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Fy,{authFetch:l,onOpenFolderPicker:()=>f("folder"),onOpenShareModal:()=>f("sharing")})]}),m&&a.jsx(rx,{movie:m,onClose:()=>p(null),onPlay:F=>{p(null),S(F)},onToggleFavorite:async F=>{try{const W=await(await l(`/api/user/favorites/${F}`,{method:"POST"})).json();p(Q=>Q?{...Q,is_favorite:W.favorited?1:0}:null),z()}catch{}},onRemoveMovie:async F=>{if(window.confirm(`Remove "${F.clean_title}" from your library?

The original video file will remain untouched on your computer.`))try{await l(`/api/movies/${F.id}/remove`,{method:"POST"}),p(null),z()}catch{}},onDeleteFile:async F=>{if(window.confirm(`PERMANENT DELETION WARNING:
Are you sure you want to permanently delete "${F.file_name}" from your hard drive?

This cannot be undone.`))try{await l(`/api/movies/${F.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:F.clean_title})}),p(null),z()}catch{}},authFetch:l}),a.jsx(yb,{isOpen:x,onClose:()=>M(!1),onSelectMovie:F=>p(F),onPlayMovie:F=>S(F),authFetch:l}),a.jsx(jy,{isOpen:L,onClose:()=>U(!1),authFetch:l,currentProfile:P,onProfileChange:ne}),a.jsx(Hy,{isOpen:A,onClose:()=>I(!1),ambientEnabled:D,onToggleAmbient:V})]}):a.jsx(Oy,{})}j0.createRoot(document.getElementById("root")).render(a.jsx(D0.StrictMode,{children:a.jsx(B0,{children:a.jsx(Mb,{})})}));
