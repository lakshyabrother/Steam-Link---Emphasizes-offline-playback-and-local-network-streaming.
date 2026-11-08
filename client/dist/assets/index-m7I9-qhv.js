(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Xg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ld={exports:{}},Za={},cd={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Tm;function P0(){if(Tm)return Rt;Tm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),S=Symbol.iterator;function v(F){return F===null||typeof F!="object"?null:(F=S&&F[S]||F["@@iterator"],typeof F=="function"?F:null)}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function x(F,K,Me){this.props=F,this.context=K,this.refs=b,this.updater=Me||y}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function M(){}M.prototype=x.prototype;function L(F,K,Me){this.props=F,this.context=K,this.refs=b,this.updater=Me||y}var k=L.prototype=new M;k.constructor=L,w(k,x.prototype),k.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,P={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function D(F,K,Me){var G,ue={},Se=null,Ee=null;if(K!=null)for(G in K.ref!==void 0&&(Ee=K.ref),K.key!==void 0&&(Se=""+K.key),K)I.call(K,G)&&!E.hasOwnProperty(G)&&(ue[G]=K[G]);var ye=arguments.length-2;if(ye===1)ue.children=Me;else if(1<ye){for(var Ae=Array(ye),mt=0;mt<ye;mt++)Ae[mt]=arguments[mt+2];ue.children=Ae}if(F&&F.defaultProps)for(G in ye=F.defaultProps,ye)ue[G]===void 0&&(ue[G]=ye[G]);return{$$typeof:s,type:F,key:Se,ref:Ee,props:ue,_owner:P.current}}function J(F,K){return{$$typeof:s,type:F.type,key:K,ref:F.ref,props:F.props,_owner:F._owner}}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function V(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Me){return K[Me]})}var ee=/\/+/g;function ie(F,K){return typeof F=="object"&&F!==null&&F.key!=null?V(""+F.key):K.toString(36)}function j(F,K,Me,G,ue){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var Ee=!1;if(F===null)Ee=!0;else switch(Se){case"string":case"number":Ee=!0;break;case"object":switch(F.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=F,ue=ue(Ee),F=G===""?"."+ie(Ee,0):G,A(ue)?(Me="",F!=null&&(Me=F.replace(ee,"$&/")+"/"),j(ue,K,Me,"",function(mt){return mt})):ue!=null&&(z(ue)&&(ue=J(ue,Me+(!ue.key||Ee&&Ee.key===ue.key?"":(""+ue.key).replace(ee,"$&/")+"/")+F)),K.push(ue)),1;if(Ee=0,G=G===""?".":G+":",A(F))for(var ye=0;ye<F.length;ye++){Se=F[ye];var Ae=G+ie(Se,ye);Ee+=j(Se,K,Me,Ae,ue)}else if(Ae=v(F),typeof Ae=="function")for(F=Ae.call(F),ye=0;!(Se=F.next()).done;)Se=Se.value,Ae=G+ie(Se,ye++),Ee+=j(Se,K,Me,Ae,ue);else if(Se==="object")throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ee}function X(F,K,Me){if(F==null)return F;var G=[],ue=0;return j(F,G,"","",function(Se){return K.call(Me,Se,ue++)}),G}function ne(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(Me){(F._status===0||F._status===-1)&&(F._status=1,F._result=Me)},function(Me){(F._status===0||F._status===-1)&&(F._status=2,F._result=Me)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var O={current:null},$={transition:null},q={ReactCurrentDispatcher:O,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function Q(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:X,forEach:function(F,K,Me){X(F,function(){K.apply(this,arguments)},Me)},count:function(F){var K=0;return X(F,function(){K++}),K},toArray:function(F){return X(F,function(K){return K})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Rt.Component=x,Rt.Fragment=t,Rt.Profiler=l,Rt.PureComponent=L,Rt.StrictMode=r,Rt.Suspense=p,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=q,Rt.act=Q,Rt.cloneElement=function(F,K,Me){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var G=w({},F.props),ue=F.key,Se=F.ref,Ee=F._owner;if(K!=null){if(K.ref!==void 0&&(Se=K.ref,Ee=P.current),K.key!==void 0&&(ue=""+K.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Ae in K)I.call(K,Ae)&&!E.hasOwnProperty(Ae)&&(G[Ae]=K[Ae]===void 0&&ye!==void 0?ye[Ae]:K[Ae])}var Ae=arguments.length-2;if(Ae===1)G.children=Me;else if(1<Ae){ye=Array(Ae);for(var mt=0;mt<Ae;mt++)ye[mt]=arguments[mt+2];G.children=ye}return{$$typeof:s,type:F.type,key:ue,ref:Se,props:G,_owner:Ee}},Rt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},Rt.createElement=D,Rt.createFactory=function(F){var K=D.bind(null,F);return K.type=F,K},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(F){return{$$typeof:f,render:F}},Rt.isValidElement=z,Rt.lazy=function(F){return{$$typeof:_,_payload:{_status:-1,_result:F},_init:ne}},Rt.memo=function(F,K){return{$$typeof:m,type:F,compare:K===void 0?null:K}},Rt.startTransition=function(F){var K=$.transition;$.transition={};try{F()}finally{$.transition=K}},Rt.unstable_act=Q,Rt.useCallback=function(F,K){return O.current.useCallback(F,K)},Rt.useContext=function(F){return O.current.useContext(F)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(F){return O.current.useDeferredValue(F)},Rt.useEffect=function(F,K){return O.current.useEffect(F,K)},Rt.useId=function(){return O.current.useId()},Rt.useImperativeHandle=function(F,K,Me){return O.current.useImperativeHandle(F,K,Me)},Rt.useInsertionEffect=function(F,K){return O.current.useInsertionEffect(F,K)},Rt.useLayoutEffect=function(F,K){return O.current.useLayoutEffect(F,K)},Rt.useMemo=function(F,K){return O.current.useMemo(F,K)},Rt.useReducer=function(F,K,Me){return O.current.useReducer(F,K,Me)},Rt.useRef=function(F){return O.current.useRef(F)},Rt.useState=function(F){return O.current.useState(F)},Rt.useSyncExternalStore=function(F,K,Me){return O.current.useSyncExternalStore(F,K,Me)},Rt.useTransition=function(){return O.current.useTransition()},Rt.version="18.3.1",Rt}var Cm;function zf(){return Cm||(Cm=1,cd.exports=P0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function L0(){if(Am)return Za;Am=1;var s=zf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var _,S={},v=null,y=null;m!==void 0&&(v=""+m),p.key!==void 0&&(v=""+p.key),p.ref!==void 0&&(y=p.ref);for(_ in p)r.call(p,_)&&!c.hasOwnProperty(_)&&(S[_]=p[_]);if(f&&f.defaultProps)for(_ in p=f.defaultProps,p)S[_]===void 0&&(S[_]=p[_]);return{$$typeof:e,type:f,key:v,ref:y,props:S,_owner:l.current}}return Za.Fragment=t,Za.jsx=d,Za.jsxs=d,Za}var Nm;function D0(){return Nm||(Nm=1,ld.exports=L0()),ld.exports}var a=D0(),W=zf();const I0=Xg(W);var Nl={},ud={exports:{}},Xn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rm;function k0(){return Rm||(Rm=1,(function(s){function e($,q){var Q=$.length;$.push(q);e:for(;0<Q;){var F=Q-1>>>1,K=$[F];if(0<l(K,q))$[F]=q,$[Q]=K,Q=F;else break e}}function t($){return $.length===0?null:$[0]}function r($){if($.length===0)return null;var q=$[0],Q=$.pop();if(Q!==q){$[0]=Q;e:for(var F=0,K=$.length,Me=K>>>1;F<Me;){var G=2*(F+1)-1,ue=$[G],Se=G+1,Ee=$[Se];if(0>l(ue,Q))Se<K&&0>l(Ee,ue)?($[F]=Ee,$[Se]=Q,F=Se):($[F]=ue,$[G]=Q,F=G);else if(Se<K&&0>l(Ee,Q))$[F]=Ee,$[Se]=Q,F=Se;else break e}}return q}function l($,q){var Q=$.sortIndex-q.sortIndex;return Q!==0?Q:$.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],_=1,S=null,v=3,y=!1,w=!1,b=!1,x=typeof setTimeout=="function"?setTimeout:null,M=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function k($){for(var q=t(m);q!==null;){if(q.callback===null)r(m);else if(q.startTime<=$)r(m),q.sortIndex=q.expirationTime,e(p,q);else break;q=t(m)}}function A($){if(b=!1,k($),!w)if(t(p)!==null)w=!0,ne(I);else{var q=t(m);q!==null&&O(A,q.startTime-$)}}function I($,q){w=!1,b&&(b=!1,M(D),D=-1),y=!0;var Q=v;try{for(k(q),S=t(p);S!==null&&(!(S.expirationTime>q)||$&&!V());){var F=S.callback;if(typeof F=="function"){S.callback=null,v=S.priorityLevel;var K=F(S.expirationTime<=q);q=s.unstable_now(),typeof K=="function"?S.callback=K:S===t(p)&&r(p),k(q)}else r(p);S=t(p)}if(S!==null)var Me=!0;else{var G=t(m);G!==null&&O(A,G.startTime-q),Me=!1}return Me}finally{S=null,v=Q,y=!1}}var P=!1,E=null,D=-1,J=5,z=-1;function V(){return!(s.unstable_now()-z<J)}function ee(){if(E!==null){var $=s.unstable_now();z=$;var q=!0;try{q=E(!0,$)}finally{q?ie():(P=!1,E=null)}}else P=!1}var ie;if(typeof L=="function")ie=function(){L(ee)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,X=j.port2;j.port1.onmessage=ee,ie=function(){X.postMessage(null)}}else ie=function(){x(ee,0)};function ne($){E=$,P||(P=!0,ie())}function O($,q){D=x(function(){$(s.unstable_now())},q)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function($){$.callback=null},s.unstable_continueExecution=function(){w||y||(w=!0,ne(I))},s.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<$?Math.floor(1e3/$):5},s.unstable_getCurrentPriorityLevel=function(){return v},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function($){switch(v){case 1:case 2:case 3:var q=3;break;default:q=v}var Q=v;v=q;try{return $()}finally{v=Q}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function($,q){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Q=v;v=$;try{return q()}finally{v=Q}},s.unstable_scheduleCallback=function($,q,Q){var F=s.unstable_now();switch(typeof Q=="object"&&Q!==null?(Q=Q.delay,Q=typeof Q=="number"&&0<Q?F+Q:F):Q=F,$){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Q+K,$={id:_++,callback:q,priorityLevel:$,startTime:Q,expirationTime:K,sortIndex:-1},Q>F?($.sortIndex=Q,e(m,$),t(p)===null&&$===t(m)&&(b?(M(D),D=-1):b=!0,O(A,Q-F))):($.sortIndex=K,e(p,$),w||y||(w=!0,ne(I))),$},s.unstable_shouldYield=V,s.unstable_wrapCallback=function($){var q=v;return function(){var Q=v;v=q;try{return $.apply(this,arguments)}finally{v=Q}}}})(fd)),fd}var Pm;function U0(){return Pm||(Pm=1,dd.exports=k0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lm;function F0(){if(Lm)return Xn;Lm=1;var s=zf(),e=U0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,_={},S={};function v(n){return p.call(S,n)?!0:p.call(_,n)?!1:m.test(n)?S[n]=!0:(_[n]=!0,!1)}function y(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,u){if(i===null||typeof i>"u"||y(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function b(n,i,o,u,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new b(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var M=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(M,L);x[i]=new b(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(M,L);x[i]=new b(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(M,L);x[i]=new b(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function k(n,i,o,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,h,u)&&(o=null),u||h===null?v(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),P=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),J=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),V=Symbol.for("react.context"),ee=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),ne=Symbol.for("react.lazy"),O=Symbol.for("react.offscreen"),$=Symbol.iterator;function q(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var Q=Object.assign,F;function K(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Me=!1;function G(n,i){if(!n||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var h=fe.stack.split(`
`),g=u.stack.split(`
`),C=h.length-1,B=g.length-1;1<=C&&0<=B&&h[C]!==g[B];)B--;for(;1<=C&&0<=B;C--,B--)if(h[C]!==g[B]){if(C!==1||B!==1)do if(C--,B--,0>B||h[C]!==g[B]){var Z=`
`+h[C].replace(" at new "," at ");return n.displayName&&Z.includes("<anonymous>")&&(Z=Z.replace("<anonymous>",n.displayName)),Z}while(1<=C&&0<=B);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?K(n):""}function ue(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=G(n.type,!1),n;case 11:return n=G(n.type.render,!1),n;case 1:return n=G(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case P:return"Portal";case J:return"Profiler";case D:return"StrictMode";case ie:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case V:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case ee:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case X:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case ne:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function mt(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){u=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Qe(n){n._valueTracker||(n._valueTracker=mt(n))}function vt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function be(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xe(n,i){var o=i.checked;return Q({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function _t(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function Ye(n,i){i=i.checked,i!=null&&k(n,"checked",i,!1)}function dt(n,i){Ye(n,i);var o=ye(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Be(n,i.type,o):i.hasOwnProperty("defaultValue")&&Be(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ge(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Be(n,i,o){(i!=="number"||be(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ge=Array.isArray;function bt(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Pt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Q({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pe(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ge(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ye(o)}}function U(n,i){var o=ye(i.value),u=ye(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function $e(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Mt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ie,Wt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ie=Ie||document.createElement("div"),Ie.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ie.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function at(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ve[i]=ve[n]})});function T(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ve.hasOwnProperty(n)&&ve[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=T(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var we=Q({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function me(n,i){if(i){if(we[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ke=null;function he(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,De=null,H=null;function _e(n){if(n=Ua(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Vo(i),xe(n.stateNode,n.type,i))}}function pe(n){De?H?H.push(n):H=[n]:De=n}function ze(){if(De){var n=De,i=H;if(H=De=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Ue(n,i){return n(i)}function Oe(){}var ot=!1;function wt(n,i,o){if(ot)return n(i,o);ot=!0;try{return Ue(n,i,o)}finally{ot=!1,(De!==null||H!==null)&&(Oe(),ze())}}function Re(n,i){var o=n.stateNode;if(o===null)return null;var u=Vo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ut=!1;if(f)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){ut=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{ut=!1}function We(n,i,o,u,h,g,C,B,Z){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(o,fe)}catch(Ce){this.onError(Ce)}}var Dt=!1,en=null,Zn=!1,ys=null,ga={onError:function(n){Dt=!0,en=n}};function Lc(n,i,o,u,h,g,C,B,Z){Dt=!1,en=null,We.apply(ga,arguments)}function bo(n,i,o,u,h,g,C,B,Z){if(Lc.apply(this,arguments),Dt){if(Dt){var fe=en;Dt=!1,en=null}else throw Error(t(198));Zn||(Zn=!0,ys=fe)}}function Ni(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Ri(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ss(n){if(Ni(n)!==n)throw Error(t(188))}function To(n){var i=n.alternate;if(!i){if(i=Ni(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Ss(h),n;if(g===u)return Ss(h),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var C=!1,B=h.child;B;){if(B===o){C=!0,o=h,u=g;break}if(B===u){C=!0,u=h,o=g;break}B=B.sibling}if(!C){for(B=g.child;B;){if(B===o){C=!0,o=g,u=h;break}if(B===u){C=!0,u=g,o=h;break}B=B.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function xa(n){return n=To(n),n!==null?qr(n):null}function qr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qr(n);if(i!==null)return i;n=n.sibling}return null}var va=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,Dc=e.unstable_requestPaint,Zt=e.unstable_now,Co=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,Ao=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,No=e.unstable_LowPriority,N=e.unstable_IdlePriority,Y=null,le=null;function ae(n){if(le&&typeof le.onCommitFiberRoot=="function")try{le.onCommitFiberRoot(Y,n,void 0,(n.current.flags&128)===128)}catch{}}var se=Math.clz32?Math.clz32:je,He=Math.log,Je=Math.LN2;function je(n){return n>>>=0,n===0?32:31-(He(n)/Je|0)|0}var Ve=64,tt=4194304;function gt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ct(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,C=o&268435455;if(C!==0){var B=C&~h;B!==0?u=gt(B):(g&=C,g!==0&&(u=gt(g)))}else C=o&~h,C!==0?u=gt(C):g!==0&&(u=gt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-se(i),h=1<<o,u|=n[o],i&=~h;return u}function nt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-se(g),B=1<<C,Z=h[C];Z===-1?((B&o)===0||(B&u)!==0)&&(h[C]=nt(B,i)):Z<=i&&(n.expiredLanes|=B),g&=~B}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=Ve;return Ve<<=1,(Ve&4194240)===0&&(Ve=64),n}function Ht(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-se(i),n[i]=o}function it(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-se(o),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function fn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-se(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var lt=0;function Pi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hn,pr,gi,Li,Lt,on=!1,Rn=[],zt=null,Xt=null,_n=null,mr=new Map,Sa=new Map,gr=[],Jx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ch(n,i){switch(n){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":mr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function Ma(n,i,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ua(i),i!==null&&pr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function ev(n,i,o,u,h){switch(i){case"focusin":return zt=Ma(zt,n,i,o,u,h),!0;case"dragenter":return Xt=Ma(Xt,n,i,o,u,h),!0;case"mouseover":return _n=Ma(_n,n,i,o,u,h),!0;case"pointerover":var g=h.pointerId;return mr.set(g,Ma(mr.get(g)||null,n,i,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Sa.set(g,Ma(Sa.get(g)||null,n,i,o,u,h)),!0}return!1}function uh(n){var i=Kr(n.target);if(i!==null){var o=Ni(i);if(o!==null){if(i=o.tag,i===13){if(i=Ri(o),i!==null){n.blockedOn=i,Lt(n.priority,function(){gi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ro(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=kc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);ke=u,o.target.dispatchEvent(u),ke=null}else return i=Ua(o),i!==null&&pr(i),n.blockedOn=o,!1;i.shift()}return!0}function dh(n,i,o){Ro(n)&&o.delete(i)}function tv(){on=!1,zt!==null&&Ro(zt)&&(zt=null),Xt!==null&&Ro(Xt)&&(Xt=null),_n!==null&&Ro(_n)&&(_n=null),mr.forEach(dh),Sa.forEach(dh)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,tv)))}function wa(n){function i(h){return Ea(h,n)}if(0<Rn.length){Ea(Rn[0],n);for(var o=1;o<Rn.length;o++){var u=Rn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(zt!==null&&Ea(zt,n),Xt!==null&&Ea(Xt,n),_n!==null&&Ea(_n,n),mr.forEach(i),Sa.forEach(i),o=0;o<gr.length;o++)u=gr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<gr.length&&(o=gr[0],o.blockedOn===null);)uh(o),o.blockedOn===null&&gr.shift()}var Es=A.ReactCurrentBatchConfig,Po=!0;function nv(n,i,o,u){var h=lt,g=Es.transition;Es.transition=null;try{lt=1,Ic(n,i,o,u)}finally{lt=h,Es.transition=g}}function iv(n,i,o,u){var h=lt,g=Es.transition;Es.transition=null;try{lt=4,Ic(n,i,o,u)}finally{lt=h,Es.transition=g}}function Ic(n,i,o,u){if(Po){var h=kc(n,i,o,u);if(h===null)Qc(n,i,u,Lo,o),ch(n,u);else if(ev(h,n,i,o,u))u.stopPropagation();else if(ch(n,u),i&4&&-1<Jx.indexOf(n)){for(;h!==null;){var g=Ua(h);if(g!==null&&hn(g),g=kc(n,i,o,u),g===null&&Qc(n,i,u,Lo,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Qc(n,i,u,null,o)}}var Lo=null;function kc(n,i,o,u){if(Lo=null,n=he(u),n=Kr(n),n!==null)if(i=Ni(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Ri(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Lo=n,null}function fh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Co()){case ya:return 1;case Ao:return 4;case Ms:case No:return 16;case N:return 536870912;default:return 16}default:return 16}}var xr=null,Uc=null,Do=null;function hh(){if(Do)return Do;var n,i=Uc,o=i.length,u,h="value"in xr?xr.value:xr.textContent,g=h.length;for(n=0;n<o&&i[n]===h[n];n++);var C=o-n;for(u=1;u<=C&&i[o-u]===h[g-u];u++);return Do=h.slice(n,1<u?1-u:void 0)}function Io(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ko(){return!0}function ph(){return!1}function Qn(n){function i(o,u,h,g,C){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?ko:ph,this.isPropagationStopped=ph,this}return Q(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ko)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ko)},persist:function(){},isPersistent:ko}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Qn(ws),ba=Q({},ws,{view:0,detail:0}),rv=Qn(ba),Oc,zc,Ta,Uo=Q({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Oc=n.screenX-Ta.screenX,zc=n.screenY-Ta.screenY):zc=Oc=0,Ta=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),mh=Qn(Uo),sv=Q({},Uo,{dataTransfer:0}),av=Qn(sv),ov=Q({},ba,{relatedTarget:0}),jc=Qn(ov),lv=Q({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),cv=Qn(lv),uv=Q({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),dv=Qn(uv),fv=Q({},ws,{data:0}),gh=Qn(fv),hv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},pv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function gv(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=mv[n])?!!i[n]:!1}function Bc(){return gv}var xv=Q({},ba,{key:function(n){if(n.key){var i=hv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=Io(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?pv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(n){return n.type==="keypress"?Io(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Io(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),vv=Qn(xv),_v=Q({},Uo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xh=Qn(_v),yv=Q({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),Sv=Qn(yv),Mv=Q({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ev=Qn(Mv),wv=Q({},Uo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),bv=Qn(wv),Tv=[9,13,27,32],Hc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var Cv=f&&"TextEvent"in window&&!Ca,vh=f&&(!Hc||Ca&&8<Ca&&11>=Ca),_h=" ",yh=!1;function Sh(n,i){switch(n){case"keyup":return Tv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Mh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Av(n,i){switch(n){case"compositionend":return Mh(i);case"keypress":return i.which!==32?null:(yh=!0,_h);case"textInput":return n=i.data,n===_h&&yh?null:n;default:return null}}function Nv(n,i){if(bs)return n==="compositionend"||!Hc&&Sh(n,i)?(n=hh(),Do=Uc=xr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return vh&&i.locale!=="ko"?null:i.data;default:return null}}var Rv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Eh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Rv[n.type]:i==="textarea"}function wh(n,i,o,u){pe(u),i=Bo(i,"onChange"),0<i.length&&(o=new Fc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Aa=null,Na=null;function Pv(n){Hh(n,0)}function Fo(n){var i=Rs(n);if(vt(i))return n}function Lv(n,i){if(n==="change")return i}var bh=!1;if(f){var Gc;if(f){var Vc="oninput"in document;if(!Vc){var Th=document.createElement("div");Th.setAttribute("oninput","return;"),Vc=typeof Th.oninput=="function"}Gc=Vc}else Gc=!1;bh=Gc&&(!document.documentMode||9<document.documentMode)}function Ch(){Aa&&(Aa.detachEvent("onpropertychange",Ah),Na=Aa=null)}function Ah(n){if(n.propertyName==="value"&&Fo(Na)){var i=[];wh(i,Na,n,he(n)),wt(Pv,i)}}function Dv(n,i,o){n==="focusin"?(Ch(),Aa=i,Na=o,Aa.attachEvent("onpropertychange",Ah)):n==="focusout"&&Ch()}function Iv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Fo(Na)}function kv(n,i){if(n==="click")return Fo(i)}function Uv(n,i){if(n==="input"||n==="change")return Fo(i)}function Fv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var xi=typeof Object.is=="function"?Object.is:Fv;function Ra(n,i){if(xi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(i,h)||!xi(n[h],i[h]))return!1}return!0}function Nh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Rh(n,i){var o=Nh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Nh(o)}}function Ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Lh(){for(var n=window,i=be();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=be(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Ov(n){var i=Lh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Ph(o.ownerDocument.documentElement,o)){if(u!==null&&Wc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Rh(o,g);var C=Rh(o,u);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var zv=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Xc=null,Pa=null,$c=!1;function Dh(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||Ts==null||Ts!==be(u)||(u=Ts,"selectionStart"in u&&Wc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pa&&Ra(Pa,u)||(Pa=u,u=Bo(Xc,"onSelect"),0<u.length&&(i=new Fc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ts)))}function Oo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Cs={animationend:Oo("Animation","AnimationEnd"),animationiteration:Oo("Animation","AnimationIteration"),animationstart:Oo("Animation","AnimationStart"),transitionend:Oo("Transition","TransitionEnd")},qc={},Ih={};f&&(Ih=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function zo(n){if(qc[n])return qc[n];if(!Cs[n])return n;var i=Cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ih)return qc[n]=i[o];return n}var kh=zo("animationend"),Uh=zo("animationiteration"),Fh=zo("animationstart"),Oh=zo("transitionend"),zh=new Map,jh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,i){zh.set(n,i),c(i,[n])}for(var Yc=0;Yc<jh.length;Yc++){var Kc=jh[Yc],jv=Kc.toLowerCase(),Bv=Kc[0].toUpperCase()+Kc.slice(1);vr(jv,"on"+Bv)}vr(kh,"onAnimationEnd"),vr(Uh,"onAnimationIteration"),vr(Fh,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(Oh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Hv=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Bh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,bo(u,i,void 0,n),n.currentTarget=null}function Hh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var C=u.length-1;0<=C;C--){var B=u[C],Z=B.instance,fe=B.currentTarget;if(B=B.listener,Z!==g&&h.isPropagationStopped())break e;Bh(h,B,fe),g=Z}else for(C=0;C<u.length;C++){if(B=u[C],Z=B.instance,fe=B.currentTarget,B=B.listener,Z!==g&&h.isPropagationStopped())break e;Bh(h,B,fe),g=Z}}}if(Zn)throw n=ys,Zn=!1,ys=null,n}function Yt(n,i){var o=i[ru];o===void 0&&(o=i[ru]=new Set);var u=n+"__bubble";o.has(u)||(Gh(i,n,2,!1),o.add(u))}function Zc(n,i,o){var u=0;i&&(u|=4),Gh(o,n,u,i)}var jo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[jo]){n[jo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Hv.has(o)||Zc(o,!1,n),Zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[jo]||(i[jo]=!0,Zc("selectionchange",!1,i))}}function Gh(n,i,o,u){switch(fh(i)){case 1:var h=nv;break;case 4:h=iv;break;default:h=Ic}o=h.bind(null,i,o,n),h=void 0,!ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Qc(n,i,o,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var B=u.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(C===4)for(C=u.return;C!==null;){var Z=C.tag;if((Z===3||Z===4)&&(Z=C.stateNode.containerInfo,Z===h||Z.nodeType===8&&Z.parentNode===h))return;C=C.return}for(;B!==null;){if(C=Kr(B),C===null)return;if(Z=C.tag,Z===5||Z===6){u=g=C;continue e}B=B.parentNode}}u=u.return}wt(function(){var fe=g,Ce=he(o),Le=[];e:{var Te=zh.get(n);if(Te!==void 0){var Ze=Fc,rt=n;switch(n){case"keypress":if(Io(o)===0)break e;case"keydown":case"keyup":Ze=vv;break;case"focusin":rt="focus",Ze=jc;break;case"focusout":rt="blur",Ze=jc;break;case"beforeblur":case"afterblur":Ze=jc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ze=mh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ze=av;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ze=Sv;break;case kh:case Uh:case Fh:Ze=cv;break;case Oh:Ze=Ev;break;case"scroll":Ze=rv;break;case"wheel":Ze=bv;break;case"copy":case"cut":case"paste":Ze=dv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ze=xh}var st=(i&4)!==0,ln=!st&&n==="scroll",oe=st?Te!==null?Te+"Capture":null:Te;st=[];for(var te=fe,ce;te!==null;){ce=te;var Fe=ce.stateNode;if(ce.tag===5&&Fe!==null&&(ce=Fe,oe!==null&&(Fe=Re(te,oe),Fe!=null&&st.push(Ia(te,Fe,ce)))),ln)break;te=te.return}0<st.length&&(Te=new Ze(Te,rt,null,o,Ce),Le.push({event:Te,listeners:st}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Ze=n==="mouseout"||n==="pointerout",Te&&o!==ke&&(rt=o.relatedTarget||o.fromElement)&&(Kr(rt)||rt[Zi]))break e;if((Ze||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ze?(rt=o.relatedTarget||o.toElement,Ze=fe,rt=rt?Kr(rt):null,rt!==null&&(ln=Ni(rt),rt!==ln||rt.tag!==5&&rt.tag!==6)&&(rt=null)):(Ze=null,rt=fe),Ze!==rt)){if(st=mh,Fe="onMouseLeave",oe="onMouseEnter",te="mouse",(n==="pointerout"||n==="pointerover")&&(st=xh,Fe="onPointerLeave",oe="onPointerEnter",te="pointer"),ln=Ze==null?Te:Rs(Ze),ce=rt==null?Te:Rs(rt),Te=new st(Fe,te+"leave",Ze,o,Ce),Te.target=ln,Te.relatedTarget=ce,Fe=null,Kr(Ce)===fe&&(st=new st(oe,te+"enter",rt,o,Ce),st.target=ce,st.relatedTarget=ln,Fe=st),ln=Fe,Ze&&rt)t:{for(st=Ze,oe=rt,te=0,ce=st;ce;ce=As(ce))te++;for(ce=0,Fe=oe;Fe;Fe=As(Fe))ce++;for(;0<te-ce;)st=As(st),te--;for(;0<ce-te;)oe=As(oe),ce--;for(;te--;){if(st===oe||oe!==null&&st===oe.alternate)break t;st=As(st),oe=As(oe)}st=null}else st=null;Ze!==null&&Vh(Le,Te,Ze,st,!1),rt!==null&&ln!==null&&Vh(Le,ln,rt,st,!0)}}e:{if(Te=fe?Rs(fe):window,Ze=Te.nodeName&&Te.nodeName.toLowerCase(),Ze==="select"||Ze==="input"&&Te.type==="file")var ct=Lv;else if(Eh(Te))if(bh)ct=Uv;else{ct=Iv;var ht=Dv}else(Ze=Te.nodeName)&&Ze.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(ct=kv);if(ct&&(ct=ct(n,fe))){wh(Le,ct,o,Ce);break e}ht&&ht(n,Te,fe),n==="focusout"&&(ht=Te._wrapperState)&&ht.controlled&&Te.type==="number"&&Be(Te,"number",Te.value)}switch(ht=fe?Rs(fe):window,n){case"focusin":(Eh(ht)||ht.contentEditable==="true")&&(Ts=ht,Xc=fe,Pa=null);break;case"focusout":Pa=Xc=Ts=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Dh(Le,o,Ce);break;case"selectionchange":if(zv)break;case"keydown":case"keyup":Dh(Le,o,Ce)}var pt;if(Hc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bs?Sh(n,o)&&(St="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(St="onCompositionStart");St&&(vh&&o.locale!=="ko"&&(bs||St!=="onCompositionStart"?St==="onCompositionEnd"&&bs&&(pt=hh()):(xr=Ce,Uc="value"in xr?xr.value:xr.textContent,bs=!0)),ht=Bo(fe,St),0<ht.length&&(St=new gh(St,n,null,o,Ce),Le.push({event:St,listeners:ht}),pt?St.data=pt:(pt=Mh(o),pt!==null&&(St.data=pt)))),(pt=Cv?Av(n,o):Nv(n,o))&&(fe=Bo(fe,"onBeforeInput"),0<fe.length&&(Ce=new gh("onBeforeInput","beforeinput",null,o,Ce),Le.push({event:Ce,listeners:fe}),Ce.data=pt))}Hh(Le,i)})}function Ia(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Bo(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Re(n,o),g!=null&&u.unshift(Ia(n,g,h)),g=Re(n,i),g!=null&&u.push(Ia(n,g,h))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Vh(n,i,o,u,h){for(var g=i._reactName,C=[];o!==null&&o!==u;){var B=o,Z=B.alternate,fe=B.stateNode;if(Z!==null&&Z===u)break;B.tag===5&&fe!==null&&(B=fe,h?(Z=Re(o,g),Z!=null&&C.unshift(Ia(o,Z,B))):h||(Z=Re(o,g),Z!=null&&C.push(Ia(o,Z,B)))),o=o.return}C.length!==0&&n.push({event:i,listeners:C})}var Gv=/\r\n?/g,Vv=/\u0000|\uFFFD/g;function Wh(n){return(typeof n=="string"?n:""+n).replace(Gv,`
`).replace(Vv,"")}function Ho(n,i,o){if(i=Wh(i),Wh(n)!==i&&o)throw Error(t(425))}function Go(){}var Jc=null,eu=null;function tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Wv=typeof clearTimeout=="function"?clearTimeout:void 0,Xh=typeof Promise=="function"?Promise:void 0,Xv=typeof queueMicrotask=="function"?queueMicrotask:typeof Xh<"u"?function(n){return Xh.resolve(null).then(n).catch($v)}:nu;function $v(n){setTimeout(function(){throw n})}function iu(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),wa(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);wa(i)}function _r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function $h(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Di="__reactFiber$"+Ns,ka="__reactProps$"+Ns,Zi="__reactContainer$"+Ns,ru="__reactEvents$"+Ns,qv="__reactListeners$"+Ns,Yv="__reactHandles$"+Ns;function Kr(n){var i=n[Di];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Zi]||o[Di]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=$h(n);n!==null;){if(o=n[Di])return o;n=$h(n)}return i}n=o,o=n.parentNode}return null}function Ua(n){return n=n[Di]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Vo(n){return n[ka]||null}var su=[],Ps=-1;function yr(n){return{current:n}}function Kt(n){0>Ps||(n.current=su[Ps],su[Ps]=null,Ps--)}function $t(n,i){Ps++,su[Ps]=n.current,n.current=i}var Sr={},Pn=yr(Sr),Bn=yr(!1),Zr=Sr;function Ls(n,i){var o=n.type.contextTypes;if(!o)return Sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Hn(n){return n=n.childContextTypes,n!=null}function Wo(){Kt(Bn),Kt(Pn)}function qh(n,i,o){if(Pn.current!==Sr)throw Error(t(168));$t(Pn,i),$t(Bn,o)}function Yh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Ee(n)||"Unknown",h));return Q({},o,u)}function Xo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,Zr=Pn.current,$t(Pn,n),$t(Bn,Bn.current),!0}function Kh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Yh(n,i,Zr),u.__reactInternalMemoizedMergedChildContext=n,Kt(Bn),Kt(Pn),$t(Pn,n)):Kt(Bn),$t(Bn,o)}var Qi=null,$o=!1,au=!1;function Zh(n){Qi===null?Qi=[n]:Qi.push(n)}function Kv(n){$o=!0,Zh(n)}function Mr(){if(!au&&Qi!==null){au=!0;var n=0,i=lt;try{var o=Qi;for(lt=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Qi=null,$o=!1}catch(h){throw Qi!==null&&(Qi=Qi.slice(n+1)),va(ya,Mr),h}finally{lt=i,au=!1}}return null}var Ds=[],Is=0,qo=null,Yo=0,ai=[],oi=0,Qr=null,Ji=1,er="";function Jr(n,i){Ds[Is++]=Yo,Ds[Is++]=qo,qo=n,Yo=i}function Qh(n,i,o){ai[oi++]=Ji,ai[oi++]=er,ai[oi++]=Qr,Qr=n;var u=Ji;n=er;var h=32-se(u)-1;u&=~(1<<h),o+=1;var g=32-se(i)+h;if(30<g){var C=h-h%5;g=(u&(1<<C)-1).toString(32),u>>=C,h-=C,Ji=1<<32-se(i)+h|o<<h|u,er=g+n}else Ji=1<<g|o<<h|u,er=n}function ou(n){n.return!==null&&(Jr(n,1),Qh(n,1,0))}function lu(n){for(;n===qo;)qo=Ds[--Is],Ds[Is]=null,Yo=Ds[--Is],Ds[Is]=null;for(;n===Qr;)Qr=ai[--oi],ai[oi]=null,er=ai[--oi],ai[oi]=null,Ji=ai[--oi],ai[oi]=null}var Jn=null,ei=null,Jt=!1,vi=null;function Jh(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ep(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,ei=_r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:Ji,overflow:er}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Jn=n,ei=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Jt){var i=ei;if(i){var o=i;if(!ep(n,i)){if(cu(n))throw Error(t(418));i=_r(o.nextSibling);var u=Jn;i&&ep(n,i)?Jh(u,o):(n.flags=n.flags&-4097|2,Jt=!1,Jn=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,Jn=n}}}function tp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function Ko(n){if(n!==Jn)return!1;if(!Jt)return tp(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tu(n.type,n.memoizedProps)),i&&(i=ei)){if(cu(n))throw np(),Error(t(418));for(;i;)Jh(n,i),i=_r(i.nextSibling)}if(tp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ei=_r(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ei=null}}else ei=Jn?_r(n.stateNode.nextSibling):null;return!0}function np(){for(var n=ei;n;)n=_r(n.nextSibling)}function ks(){ei=Jn=null,Jt=!1}function du(n){vi===null?vi=[n]:vi.push(n)}var Zv=A.ReactCurrentBatchConfig;function Fa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var B=h.refs;C===null?delete B[g]:B[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Zo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ip(n){var i=n._init;return i(n._payload)}function rp(n){function i(oe,te){if(n){var ce=oe.deletions;ce===null?(oe.deletions=[te],oe.flags|=16):ce.push(te)}}function o(oe,te){if(!n)return null;for(;te!==null;)i(oe,te),te=te.sibling;return null}function u(oe,te){for(oe=new Map;te!==null;)te.key!==null?oe.set(te.key,te):oe.set(te.index,te),te=te.sibling;return oe}function h(oe,te){return oe=Rr(oe,te),oe.index=0,oe.sibling=null,oe}function g(oe,te,ce){return oe.index=ce,n?(ce=oe.alternate,ce!==null?(ce=ce.index,ce<te?(oe.flags|=2,te):ce):(oe.flags|=2,te)):(oe.flags|=1048576,te)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,te,ce,Fe){return te===null||te.tag!==6?(te=nd(ce,oe.mode,Fe),te.return=oe,te):(te=h(te,ce),te.return=oe,te)}function Z(oe,te,ce,Fe){var ct=ce.type;return ct===E?Ce(oe,te,ce.props.children,Fe,ce.key):te!==null&&(te.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===ne&&ip(ct)===te.type)?(Fe=h(te,ce.props),Fe.ref=Fa(oe,te,ce),Fe.return=oe,Fe):(Fe=Sl(ce.type,ce.key,ce.props,null,oe.mode,Fe),Fe.ref=Fa(oe,te,ce),Fe.return=oe,Fe)}function fe(oe,te,ce,Fe){return te===null||te.tag!==4||te.stateNode.containerInfo!==ce.containerInfo||te.stateNode.implementation!==ce.implementation?(te=id(ce,oe.mode,Fe),te.return=oe,te):(te=h(te,ce.children||[]),te.return=oe,te)}function Ce(oe,te,ce,Fe,ct){return te===null||te.tag!==7?(te=os(ce,oe.mode,Fe,ct),te.return=oe,te):(te=h(te,ce),te.return=oe,te)}function Le(oe,te,ce){if(typeof te=="string"&&te!==""||typeof te=="number")return te=nd(""+te,oe.mode,ce),te.return=oe,te;if(typeof te=="object"&&te!==null){switch(te.$$typeof){case I:return ce=Sl(te.type,te.key,te.props,null,oe.mode,ce),ce.ref=Fa(oe,null,te),ce.return=oe,ce;case P:return te=id(te,oe.mode,ce),te.return=oe,te;case ne:var Fe=te._init;return Le(oe,Fe(te._payload),ce)}if(Ge(te)||q(te))return te=os(te,oe.mode,ce,null),te.return=oe,te;Zo(oe,te)}return null}function Te(oe,te,ce,Fe){var ct=te!==null?te.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return ct!==null?null:B(oe,te,""+ce,Fe);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case I:return ce.key===ct?Z(oe,te,ce,Fe):null;case P:return ce.key===ct?fe(oe,te,ce,Fe):null;case ne:return ct=ce._init,Te(oe,te,ct(ce._payload),Fe)}if(Ge(ce)||q(ce))return ct!==null?null:Ce(oe,te,ce,Fe,null);Zo(oe,ce)}return null}function Ze(oe,te,ce,Fe,ct){if(typeof Fe=="string"&&Fe!==""||typeof Fe=="number")return oe=oe.get(ce)||null,B(te,oe,""+Fe,ct);if(typeof Fe=="object"&&Fe!==null){switch(Fe.$$typeof){case I:return oe=oe.get(Fe.key===null?ce:Fe.key)||null,Z(te,oe,Fe,ct);case P:return oe=oe.get(Fe.key===null?ce:Fe.key)||null,fe(te,oe,Fe,ct);case ne:var ht=Fe._init;return Ze(oe,te,ce,ht(Fe._payload),ct)}if(Ge(Fe)||q(Fe))return oe=oe.get(ce)||null,Ce(te,oe,Fe,ct,null);Zo(te,Fe)}return null}function rt(oe,te,ce,Fe){for(var ct=null,ht=null,pt=te,St=te=0,Mn=null;pt!==null&&St<ce.length;St++){pt.index>St?(Mn=pt,pt=null):Mn=pt.sibling;var jt=Te(oe,pt,ce[St],Fe);if(jt===null){pt===null&&(pt=Mn);break}n&&pt&&jt.alternate===null&&i(oe,pt),te=g(jt,te,St),ht===null?ct=jt:ht.sibling=jt,ht=jt,pt=Mn}if(St===ce.length)return o(oe,pt),Jt&&Jr(oe,St),ct;if(pt===null){for(;St<ce.length;St++)pt=Le(oe,ce[St],Fe),pt!==null&&(te=g(pt,te,St),ht===null?ct=pt:ht.sibling=pt,ht=pt);return Jt&&Jr(oe,St),ct}for(pt=u(oe,pt);St<ce.length;St++)Mn=Ze(pt,oe,St,ce[St],Fe),Mn!==null&&(n&&Mn.alternate!==null&&pt.delete(Mn.key===null?St:Mn.key),te=g(Mn,te,St),ht===null?ct=Mn:ht.sibling=Mn,ht=Mn);return n&&pt.forEach(function(Pr){return i(oe,Pr)}),Jt&&Jr(oe,St),ct}function st(oe,te,ce,Fe){var ct=q(ce);if(typeof ct!="function")throw Error(t(150));if(ce=ct.call(ce),ce==null)throw Error(t(151));for(var ht=ct=null,pt=te,St=te=0,Mn=null,jt=ce.next();pt!==null&&!jt.done;St++,jt=ce.next()){pt.index>St?(Mn=pt,pt=null):Mn=pt.sibling;var Pr=Te(oe,pt,jt.value,Fe);if(Pr===null){pt===null&&(pt=Mn);break}n&&pt&&Pr.alternate===null&&i(oe,pt),te=g(Pr,te,St),ht===null?ct=Pr:ht.sibling=Pr,ht=Pr,pt=Mn}if(jt.done)return o(oe,pt),Jt&&Jr(oe,St),ct;if(pt===null){for(;!jt.done;St++,jt=ce.next())jt=Le(oe,jt.value,Fe),jt!==null&&(te=g(jt,te,St),ht===null?ct=jt:ht.sibling=jt,ht=jt);return Jt&&Jr(oe,St),ct}for(pt=u(oe,pt);!jt.done;St++,jt=ce.next())jt=Ze(pt,oe,St,jt.value,Fe),jt!==null&&(n&&jt.alternate!==null&&pt.delete(jt.key===null?St:jt.key),te=g(jt,te,St),ht===null?ct=jt:ht.sibling=jt,ht=jt);return n&&pt.forEach(function(R0){return i(oe,R0)}),Jt&&Jr(oe,St),ct}function ln(oe,te,ce,Fe){if(typeof ce=="object"&&ce!==null&&ce.type===E&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case I:e:{for(var ct=ce.key,ht=te;ht!==null;){if(ht.key===ct){if(ct=ce.type,ct===E){if(ht.tag===7){o(oe,ht.sibling),te=h(ht,ce.props.children),te.return=oe,oe=te;break e}}else if(ht.elementType===ct||typeof ct=="object"&&ct!==null&&ct.$$typeof===ne&&ip(ct)===ht.type){o(oe,ht.sibling),te=h(ht,ce.props),te.ref=Fa(oe,ht,ce),te.return=oe,oe=te;break e}o(oe,ht);break}else i(oe,ht);ht=ht.sibling}ce.type===E?(te=os(ce.props.children,oe.mode,Fe,ce.key),te.return=oe,oe=te):(Fe=Sl(ce.type,ce.key,ce.props,null,oe.mode,Fe),Fe.ref=Fa(oe,te,ce),Fe.return=oe,oe=Fe)}return C(oe);case P:e:{for(ht=ce.key;te!==null;){if(te.key===ht)if(te.tag===4&&te.stateNode.containerInfo===ce.containerInfo&&te.stateNode.implementation===ce.implementation){o(oe,te.sibling),te=h(te,ce.children||[]),te.return=oe,oe=te;break e}else{o(oe,te);break}else i(oe,te);te=te.sibling}te=id(ce,oe.mode,Fe),te.return=oe,oe=te}return C(oe);case ne:return ht=ce._init,ln(oe,te,ht(ce._payload),Fe)}if(Ge(ce))return rt(oe,te,ce,Fe);if(q(ce))return st(oe,te,ce,Fe);Zo(oe,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,te!==null&&te.tag===6?(o(oe,te.sibling),te=h(te,ce),te.return=oe,oe=te):(o(oe,te),te=nd(ce,oe.mode,Fe),te.return=oe,oe=te),C(oe)):o(oe,te)}return ln}var Us=rp(!0),sp=rp(!1),Qo=yr(null),Jo=null,Fs=null,fu=null;function hu(){fu=Fs=Jo=null}function pu(n){var i=Qo.current;Kt(Qo),n._currentValue=i}function mu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Os(n,i){Jo=n,fu=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(Jo===null)throw Error(t(308));Fs=n,Jo.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var es=null;function gu(n){es===null?es=[n]:es.push(n)}function ap(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,gu(i)):(o.next=h.next,h.next=o),i.interleaved=o,tr(n,u)}function tr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Er=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function op(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function wr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,tr(n,o)}return h=u.interleaved,h===null?(i.next=i,gu(u)):(i.next=h.next,h.next=i),u.interleaved=i,tr(n,o)}function el(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,fn(n,o)}}function lp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=C:g=g.next=C,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function tl(n,i,o,u){var h=n.updateQueue;Er=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var Z=B,fe=Z.next;Z.next=null,C===null?g=fe:C.next=fe,C=Z;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,B=Ce.lastBaseUpdate,B!==C&&(B===null?Ce.firstBaseUpdate=fe:B.next=fe,Ce.lastBaseUpdate=Z))}if(g!==null){var Le=h.baseState;C=0,Ce=fe=Z=null,B=g;do{var Te=B.lane,Ze=B.eventTime;if((u&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:Ze,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var rt=n,st=B;switch(Te=i,Ze=o,st.tag){case 1:if(rt=st.payload,typeof rt=="function"){Le=rt.call(Ze,Le,Te);break e}Le=rt;break e;case 3:rt.flags=rt.flags&-65537|128;case 0:if(rt=st.payload,Te=typeof rt=="function"?rt.call(Ze,Le,Te):rt,Te==null)break e;Le=Q({},Le,Te);break e;case 2:Er=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Te=h.effects,Te===null?h.effects=[B]:Te.push(B))}else Ze={eventTime:Ze,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ce===null?(fe=Ce=Ze,Z=Le):Ce=Ce.next=Ze,C|=Te;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,h.lastBaseUpdate=Te,h.shared.pending=null}}while(!0);if(Ce===null&&(Z=Le),h.baseState=Z,h.firstBaseUpdate=fe,h.lastBaseUpdate=Ce,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);is|=C,n.lanes=C,n.memoizedState=Le}}function cp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Oa={},Ii=yr(Oa),za=yr(Oa),ja=yr(Oa);function ts(n){if(n===Oa)throw Error(t(174));return n}function vu(n,i){switch($t(ja,i),$t(za,n),$t(Ii,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:Mt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=Mt(i,n)}Kt(Ii),$t(Ii,i)}function zs(){Kt(Ii),Kt(za),Kt(ja)}function up(n){ts(ja.current);var i=ts(Ii.current),o=Mt(i,n.type);i!==o&&($t(za,n),$t(Ii,o))}function _u(n){za.current===n&&(Kt(Ii),Kt(za))}var tn=yr(0);function nl(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var il=A.ReactCurrentDispatcher,Mu=A.ReactCurrentBatchConfig,ns=0,nn=null,pn=null,yn=null,rl=!1,Ba=!1,Ha=0,Qv=0;function Ln(){throw Error(t(321))}function Eu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!xi(n[o],i[o]))return!1;return!0}function wu(n,i,o,u,h,g){if(ns=g,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,il.current=n===null||n.memoizedState===null?n0:i0,n=o(u,h),Ba){g=0;do{if(Ba=!1,Ha=0,25<=g)throw Error(t(301));g+=1,yn=pn=null,i.updateQueue=null,il.current=r0,n=o(u,h)}while(Ba)}if(il.current=ol,i=pn!==null&&pn.next!==null,ns=0,yn=pn=nn=null,rl=!1,i)throw Error(t(300));return n}function bu(){var n=Ha!==0;return Ha=0,n}function ki(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function ci(){if(pn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=pn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,pn=n;else{if(n===null)throw Error(t(310));pn=n,n={memoizedState:pn.memoizedState,baseState:pn.baseState,baseQueue:pn.baseQueue,queue:pn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ga(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=pn,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var B=C=null,Z=null,fe=g;do{var Ce=fe.lane;if((ns&Ce)===Ce)Z!==null&&(Z=Z.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Le={lane:Ce,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Z===null?(B=Z=Le,C=u):Z=Z.next=Le,nn.lanes|=Ce,is|=Ce}fe=fe.next}while(fe!==null&&fe!==g);Z===null?C=u:Z.next=B,xi(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Z,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,nn.lanes|=g,is|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);xi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function dp(){}function fp(n,i){var o=nn,u=ci(),h=i(),g=!xi(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Au(mp.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Va(9,pp.bind(null,o,u,h,i),void 0,null),Sn===null)throw Error(t(349));(ns&30)!==0||hp(o,i,h)}return h}function hp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function pp(n,i,o,u){i.value=o,i.getSnapshot=u,gp(i)&&xp(n)}function mp(n,i,o){return o(function(){gp(i)&&xp(n)})}function gp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!xi(n,o)}catch{return!0}}function xp(n){var i=tr(n,1);i!==null&&Mi(i,n,1,-1)}function vp(n){var i=ki();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=t0.bind(null,nn,n),[i.memoizedState,n]}function Va(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function _p(){return ci().memoizedState}function sl(n,i,o,u){var h=ki();nn.flags|=n,h.memoizedState=Va(1|i,o,void 0,u===void 0?null:u)}function al(n,i,o,u){var h=ci();u=u===void 0?null:u;var g=void 0;if(pn!==null){var C=pn.memoizedState;if(g=C.destroy,u!==null&&Eu(u,C.deps)){h.memoizedState=Va(i,o,g,u);return}}nn.flags|=n,h.memoizedState=Va(1|i,o,g,u)}function yp(n,i){return sl(8390656,8,n,i)}function Au(n,i){return al(2048,8,n,i)}function Sp(n,i){return al(4,2,n,i)}function Mp(n,i){return al(4,4,n,i)}function Ep(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wp(n,i,o){return o=o!=null?o.concat([n]):null,al(4,4,Ep.bind(null,i,n),o)}function Nu(){}function bp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Tp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Cp(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(xi(o,i)||(o=Gt(),nn.lanes|=o,is|=o,n.baseState=!0),i)}function Jv(n,i){var o=lt;lt=o!==0&&4>o?o:4,n(!0);var u=Mu.transition;Mu.transition={};try{n(!1),i()}finally{lt=o,Mu.transition=u}}function Ap(){return ci().memoizedState}function e0(n,i,o){var u=Ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Np(n))Rp(i,o);else if(o=ap(n,i,o,u),o!==null){var h=zn();Mi(o,n,u,h),Pp(o,i,u)}}function t0(n,i,o){var u=Ar(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Np(n))Rp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,B=g(C,o);if(h.hasEagerState=!0,h.eagerState=B,xi(B,C)){var Z=i.interleaved;Z===null?(h.next=h,gu(i)):(h.next=Z.next,Z.next=h),i.interleaved=h;return}}catch{}finally{}o=ap(n,i,h,u),o!==null&&(h=zn(),Mi(o,n,u,h),Pp(o,i,u))}}function Np(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function Rp(n,i){Ba=rl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Pp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,fn(n,o)}}var ol={readContext:li,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},n0={readContext:li,useCallback:function(n,i){return ki().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:yp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,sl(4194308,4,Ep.bind(null,i,n),o)},useLayoutEffect:function(n,i){return sl(4194308,4,n,i)},useInsertionEffect:function(n,i){return sl(4,2,n,i)},useMemo:function(n,i){var o=ki();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=ki();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=e0.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var i=ki();return n={current:n},i.memoizedState=n},useState:vp,useDebugValue:Nu,useDeferredValue:function(n){return ki().memoizedState=n},useTransition:function(){var n=vp(!1),i=n[0];return n=Jv.bind(null,n[1]),ki().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=nn,h=ki();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(ns&30)!==0||hp(u,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,yp(mp.bind(null,u,g,n),[n]),u.flags|=2048,Va(9,pp.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=ki(),i=Sn.identifierPrefix;if(Jt){var o=er,u=Ji;o=(u&~(1<<32-se(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ha++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Qv++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},i0={readContext:li,useCallback:bp,useContext:li,useEffect:Au,useImperativeHandle:wp,useInsertionEffect:Sp,useLayoutEffect:Mp,useMemo:Tp,useReducer:Tu,useRef:_p,useState:function(){return Tu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return Cp(i,pn.memoizedState,n)},useTransition:function(){var n=Tu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Ap,unstable_isNewReconciler:!1},r0={readContext:li,useCallback:bp,useContext:li,useEffect:Au,useImperativeHandle:wp,useInsertionEffect:Sp,useLayoutEffect:Mp,useMemo:Tp,useReducer:Cu,useRef:_p,useState:function(){return Cu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return pn===null?i.memoizedState=n:Cp(i,pn.memoizedState,n)},useTransition:function(){var n=Cu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:dp,useSyncExternalStore:fp,useId:Ap,unstable_isNewReconciler:!1};function _i(n,i){if(n&&n.defaultProps){i=Q({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ru(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Q({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ll={isMounted:function(n){return(n=n._reactInternals)?Ni(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Ar(n),g=nr(u,h);g.payload=i,o!=null&&(g.callback=o),i=wr(n,g,h),i!==null&&(Mi(i,n,h,u),el(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Ar(n),g=nr(u,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=wr(n,g,h),i!==null&&(Mi(i,n,h,u),el(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=Ar(n),h=nr(o,u);h.tag=2,i!=null&&(h.callback=i),i=wr(n,h,u),i!==null&&(Mi(i,n,u,o),el(i,n,u))}};function Lp(n,i,o,u,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,C):i.prototype&&i.prototype.isPureReactComponent?!Ra(o,u)||!Ra(h,g):!0}function Dp(n,i,o){var u=!1,h=Sr,g=i.contextType;return typeof g=="object"&&g!==null?g=li(g):(h=Hn(i)?Zr:Pn.current,u=i.contextTypes,g=(u=u!=null)?Ls(n,h):Sr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ll,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function Ip(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&ll.enqueueReplaceState(i,i.state,null)}function Pu(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},xu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=li(g):(g=Hn(i)?Zr:Pn.current,h.context=Ls(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&ll.enqueueReplaceState(h,h.state,null),tl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var o="",u=i;do o+=ue(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Lu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var s0=typeof WeakMap=="function"?WeakMap:Map;function kp(n,i,o){o=nr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){ml||(ml=!0,qu=u),Du(n,i)},o}function Up(n,i,o){o=nr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){Du(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Du(n,i),typeof u!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),o}function Fp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new s0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=_0.bind(null,n,i,o),i.then(n,n))}function Op(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function zp(n,i,o,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=nr(-1,1),i.tag=2,wr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var a0=A.ReactCurrentOwner,Gn=!1;function On(n,i,o,u){i.child=n===null?sp(i,null,o,u):Us(i,n.child,o,u)}function jp(n,i,o,u,h){o=o.render;var g=i.ref;return Os(i,h),u=wu(n,i,o,u,g,h),o=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ir(n,i,h)):(Jt&&o&&ou(i),i.flags|=1,On(n,i,u,h),i.child)}function Bp(n,i,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!td(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Hp(n,i,g,u,h)):(n=Sl(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(C,u)&&n.ref===i.ref)return ir(n,i,h)}return i.flags|=1,n=Rr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Hp(n,i,o,u,h){if(n!==null){var g=n.memoizedProps;if(Ra(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ir(n,i,h)}return Iu(n,i,o,u,h)}function Gp(n,i,o){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(Hs,ti),ti|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t(Hs,ti),ti|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,$t(Hs,ti),ti|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,$t(Hs,ti),ti|=u;return On(n,i,h,o),i.child}function Vp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Iu(n,i,o,u,h){var g=Hn(o)?Zr:Pn.current;return g=Ls(i,g),Os(i,h),o=wu(n,i,o,u,g,h),u=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ir(n,i,h)):(Jt&&u&&ou(i),i.flags|=1,On(n,i,o,h),i.child)}function Wp(n,i,o,u,h){if(Hn(o)){var g=!0;Xo(i)}else g=!1;if(Os(i,h),i.stateNode===null)ul(n,i),Dp(i,o,u),Pu(i,o,u,h),u=!0;else if(n===null){var C=i.stateNode,B=i.memoizedProps;C.props=B;var Z=C.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=li(fe):(fe=Hn(o)?Zr:Pn.current,fe=Ls(i,fe));var Ce=o.getDerivedStateFromProps,Le=typeof Ce=="function"||typeof C.getSnapshotBeforeUpdate=="function";Le||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==u||Z!==fe)&&Ip(i,C,u,fe),Er=!1;var Te=i.memoizedState;C.state=Te,tl(i,u,C,h),Z=i.memoizedState,B!==u||Te!==Z||Bn.current||Er?(typeof Ce=="function"&&(Ru(i,o,Ce,u),Z=i.memoizedState),(B=Er||Lp(i,o,B,u,Te,Z,fe))?(Le||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Z),C.props=u,C.state=Z,C.context=fe,u=B):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,op(n,i),B=i.memoizedProps,fe=i.type===i.elementType?B:_i(i.type,B),C.props=fe,Le=i.pendingProps,Te=C.context,Z=o.contextType,typeof Z=="object"&&Z!==null?Z=li(Z):(Z=Hn(o)?Zr:Pn.current,Z=Ls(i,Z));var Ze=o.getDerivedStateFromProps;(Ce=typeof Ze=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==Le||Te!==Z)&&Ip(i,C,u,Z),Er=!1,Te=i.memoizedState,C.state=Te,tl(i,u,C,h);var rt=i.memoizedState;B!==Le||Te!==rt||Bn.current||Er?(typeof Ze=="function"&&(Ru(i,o,Ze,u),rt=i.memoizedState),(fe=Er||Lp(i,o,fe,u,Te,rt,Z)||!1)?(Ce||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,rt,Z),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,rt,Z)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=rt),C.props=u,C.state=rt,C.context=Z,u=fe):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),u=!1)}return ku(n,i,o,u,g,h)}function ku(n,i,o,u,h,g){Vp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return h&&Kh(i,o,!1),ir(n,i,g);u=i.stateNode,a0.current=i;var B=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,B,g)):On(n,i,B,g),i.memoizedState=u.state,h&&Kh(i,o,!0),i.child}function Xp(n){var i=n.stateNode;i.pendingContext?qh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&qh(n,i.context,!1),vu(n,i.containerInfo)}function $p(n,i,o,u,h){return ks(),du(h),i.flags|=256,On(n,i,o,u),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function qp(n,i,o){var u=i.pendingProps,h=tn.current,g=!1,C=(i.flags&128)!==0,B;if((B=C)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),$t(tn,h&1),n===null)return uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,g?(u=i.mode,g=i.child,C={mode:"hidden",children:C},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=Ml(C,u,0,null),n=os(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Fu(o),i.memoizedState=Uu,n):Ou(i,C));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return o0(n,i,C,u,B,h,o);if(g){g=u.fallback,C=i.mode,h=n.child,B=h.sibling;var Z={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=Z,i.deletions=null):(u=Rr(h,Z),u.subtreeFlags=h.subtreeFlags&14680064),B!==null?g=Rr(B,g):(g=os(g,C,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,C=n.child.memoizedState,C=C===null?Fu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~o,i.memoizedState=Uu,u}return g=n.child,n=g.sibling,u=Rr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ou(n,i){return i=Ml({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function cl(n,i,o,u){return u!==null&&du(u),Us(i,n.child,null,o),n=Ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function o0(n,i,o,u,h,g,C){if(o)return i.flags&256?(i.flags&=-257,u=Lu(Error(t(422))),cl(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=Ml({mode:"visible",children:u.children},h,0,null),g=os(g,h,C,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Us(i,n.child,null,C),i.child.memoizedState=Fu(C),i.memoizedState=Uu,g);if((i.mode&1)===0)return cl(n,i,C,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var B=u.dgst;return u=B,g=Error(t(419)),u=Lu(g,u,void 0),cl(n,i,C,u)}if(B=(C&n.childLanes)!==0,Gn||B){if(u=Sn,u!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,tr(n,h),Mi(u,n,h,-1))}return ed(),u=Lu(Error(t(421))),cl(n,i,C,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=y0.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ei=_r(h.nextSibling),Jn=i,Jt=!0,vi=null,n!==null&&(ai[oi++]=Ji,ai[oi++]=er,ai[oi++]=Qr,Ji=n.id,er=n.overflow,Qr=i),i=Ou(i,u.children),i.flags|=4096,i)}function Yp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),mu(n.return,i,o)}function zu(n,i,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Kp(n,i,o){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(On(n,i,u.children,o),u=tn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Yp(n,o,i);else if(n.tag===19)Yp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(tn,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&nl(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),zu(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&nl(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}zu(i,!0,o,null,g);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function ul(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ir(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Rr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Rr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function l0(n,i,o){switch(i.tag){case 3:Xp(i),ks();break;case 5:up(i);break;case 1:Hn(i.type)&&Xo(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;$t(Qo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?($t(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?qp(n,i,o):($t(tn,tn.current&1),n=ir(n,i,o),n!==null?n.sibling:null);$t(tn,tn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Kp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$t(tn,tn.current),u)break;return null;case 22:case 23:return i.lanes=0,Gp(n,i,o)}return ir(n,i,o)}var Zp,ju,Qp,Jp;Zp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},Qp=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,ts(Ii.current);var g=null;switch(o){case"input":h=Xe(n,h),u=Xe(n,u),g=[];break;case"select":h=Q({},h,{value:void 0}),u=Q({},u,{value:void 0}),g=[];break;case"textarea":h=Pt(n,h),u=Pt(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Go)}me(o,u);var C;o=null;for(fe in h)if(!u.hasOwnProperty(fe)&&h.hasOwnProperty(fe)&&h[fe]!=null)if(fe==="style"){var B=h[fe];for(C in B)B.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(l.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in u){var Z=u[fe];if(B=h!=null?h[fe]:void 0,u.hasOwnProperty(fe)&&Z!==B&&(Z!=null||B!=null))if(fe==="style")if(B){for(C in B)!B.hasOwnProperty(C)||Z&&Z.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in Z)Z.hasOwnProperty(C)&&B[C]!==Z[C]&&(o||(o={}),o[C]=Z[C])}else o||(g||(g=[]),g.push(fe,o)),o=Z;else fe==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,B=B?B.__html:void 0,Z!=null&&B!==Z&&(g=g||[]).push(fe,Z)):fe==="children"?typeof Z!="string"&&typeof Z!="number"||(g=g||[]).push(fe,""+Z):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(l.hasOwnProperty(fe)?(Z!=null&&fe==="onScroll"&&Yt("scroll",n),g||B===Z||(g=[])):(g=g||[]).push(fe,Z))}o&&(g=g||[]).push("style",o);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},Jp=function(n,i,o,u){o!==u&&(i.flags|=4)};function Wa(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function c0(n,i,o){var u=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Hn(i.type)&&Wo(),Dn(i),null;case 3:return u=i.stateNode,zs(),Kt(Bn),Kt(Pn),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Ko(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,vi!==null&&(Zu(vi),vi=null))),ju(n,i),Dn(i),null;case 5:_u(i);var h=ts(ja.current);if(o=i.type,n!==null&&i.stateNode!=null)Qp(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=ts(Ii.current),Ko(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Di]=i,u[ka]=g,n=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":_t(u,g),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",u);break;case"textarea":Pe(u,g),Yt("invalid",u)}me(o,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var B=g[C];C==="children"?typeof B=="string"?u.textContent!==B&&(g.suppressHydrationWarning!==!0&&Ho(u.textContent,B,n),h=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Ho(u.textContent,B,n),h=["children",""+B]):l.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&Yt("scroll",u)}switch(o){case"input":Qe(u),ge(u,g,!0);break;case"textarea":Qe(u),$e(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Go)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[Di]=i,n[ka]=u,Zp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ne(o,u),o){case"dialog":Yt("cancel",n),Yt("close",n),h=u;break;case"iframe":case"object":case"embed":Yt("load",n),h=u;break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],n);h=u;break;case"source":Yt("error",n),h=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),h=u;break;case"details":Yt("toggle",n),h=u;break;case"input":_t(n,u),h=Xe(n,u),Yt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=Q({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":Pe(n,u),h=Pt(n,u),Yt("invalid",n);break;default:h=u}me(o,h),B=h;for(g in B)if(B.hasOwnProperty(g)){var Z=B[g];g==="style"?re(n,Z):g==="dangerouslySetInnerHTML"?(Z=Z?Z.__html:void 0,Z!=null&&Wt(n,Z)):g==="children"?typeof Z=="string"?(o!=="textarea"||Z!=="")&&at(n,Z):typeof Z=="number"&&at(n,""+Z):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?Z!=null&&g==="onScroll"&&Yt("scroll",n):Z!=null&&k(n,g,Z,C))}switch(o){case"input":Qe(n),ge(n,u,!1);break;case"textarea":Qe(n),$e(n);break;case"option":u.value!=null&&n.setAttribute("value",""+ye(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?bt(n,!!u.multiple,g,!1):u.defaultValue!=null&&bt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Go)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)Jp(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(ja.current),ts(Ii.current),Ko(i)){if(u=i.stateNode,o=i.memoizedProps,u[Di]=i,(g=u.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:Ho(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Ho(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Di]=i,i.stateNode=u}return Dn(i),null;case 13:if(Kt(tn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)np(),ks(),i.flags|=98560,g=!1;else if(g=Ko(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Di]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),g=!1}else vi!==null&&(Zu(vi),vi=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?mn===0&&(mn=3):ed())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return zs(),ju(n,i),n===null&&Da(i.stateNode.containerInfo),Dn(i),null;case 10:return pu(i.type._context),Dn(i),null;case 17:return Hn(i.type)&&Wo(),Dn(i),null;case 19:if(Kt(tn),g=i.memoizedState,g===null)return Dn(i),null;if(u=(i.flags&128)!==0,C=g.rendering,C===null)if(u)Wa(g,!1);else{if(mn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=nl(n),C!==null){for(i.flags|=128,Wa(g,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $t(tn,tn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>Gs&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304)}else{if(!u)if(n=nl(C),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Jt)return Dn(i),null}else 2*Zt()-g.renderingStartTime>Gs&&o!==1073741824&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(o=g.last,o!==null?o.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,o=tn.current,$t(tn,u?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function u0(n,i){switch(lu(i),i.tag){case 1:return Hn(i.type)&&Wo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return zs(),Kt(Bn),Kt(Pn),Su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Kt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return zs(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var dl=!1,In=!1,d0=typeof WeakSet=="function"?WeakSet:Set,et=null;function Bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){an(n,i,u)}else o.current=null}function Bu(n,i,o){try{o()}catch(u){an(n,i,u)}}var em=!1;function f0(n,i){if(Jc=Po,n=Lh(),Wc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var C=0,B=-1,Z=-1,fe=0,Ce=0,Le=n,Te=null;t:for(;;){for(var Ze;Le!==o||h!==0&&Le.nodeType!==3||(B=C+h),Le!==g||u!==0&&Le.nodeType!==3||(Z=C+u),Le.nodeType===3&&(C+=Le.nodeValue.length),(Ze=Le.firstChild)!==null;)Te=Le,Le=Ze;for(;;){if(Le===n)break t;if(Te===o&&++fe===h&&(B=C),Te===g&&++Ce===u&&(Z=C),(Ze=Le.nextSibling)!==null)break;Le=Te,Te=Le.parentNode}Le=Ze}o=B===-1||Z===-1?null:{start:B,end:Z}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:n,selectionRange:o},Po=!1,et=i;et!==null;)if(i=et,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,et=n;else for(;et!==null;){i=et;try{var rt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(rt!==null){var st=rt.memoizedProps,ln=rt.memoizedState,oe=i.stateNode,te=oe.getSnapshotBeforeUpdate(i.elementType===i.type?st:_i(i.type,st),ln);oe.__reactInternalSnapshotBeforeUpdate=te}break;case 3:var ce=i.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Fe){an(i,i.return,Fe)}if(n=i.sibling,n!==null){n.return=i.return,et=n;break}et=i.return}return rt=em,em=!1,rt}function Xa(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Bu(i,o,g)}h=h.next}while(h!==u)}}function fl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function tm(n){var i=n.alternate;i!==null&&(n.alternate=null,tm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Di],delete i[ka],delete i[ru],delete i[qv],delete i[Yv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function nm(n){return n.tag===5||n.tag===3||n.tag===4}function im(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||nm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Go));else if(u!==4&&(n=n.child,n!==null))for(Gu(n,i,o),n=n.sibling;n!==null;)Gu(n,i,o),n=n.sibling}function Vu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var Tn=null,yi=!1;function br(n,i,o){for(o=o.child;o!==null;)rm(n,i,o),o=o.sibling}function rm(n,i,o){if(le&&typeof le.onCommitFiberUnmount=="function")try{le.onCommitFiberUnmount(Y,o)}catch{}switch(o.tag){case 5:In||Bs(o,i);case 6:var u=Tn,h=yi;Tn=null,br(n,i,o),Tn=u,yi=h,Tn!==null&&(yi?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(yi?(n=Tn,o=o.stateNode,n.nodeType===8?iu(n.parentNode,o):n.nodeType===1&&iu(n,o),wa(n)):iu(Tn,o.stateNode));break;case 4:u=Tn,h=yi,Tn=o.stateNode.containerInfo,yi=!0,br(n,i,o),Tn=u,yi=h;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Bu(o,i,C),h=h.next}while(h!==u)}br(n,i,o);break;case 1:if(!In&&(Bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){an(o,i,B)}br(n,i,o);break;case 21:br(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,br(n,i,o),In=u):br(n,i,o);break;default:br(n,i,o)}}function sm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new d0),i.forEach(function(u){var h=S0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Si(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,C=i,B=C;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,yi=!1;break e;case 3:Tn=B.stateNode.containerInfo,yi=!0;break e;case 4:Tn=B.stateNode.containerInfo,yi=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));rm(g,C,h),Tn=null,yi=!1;var Z=h.alternate;Z!==null&&(Z.return=null),h.return=null}catch(fe){an(h,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)am(i,n),i=i.sibling}function am(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Si(i,n),Ui(n),u&4){try{Xa(3,n,n.return),fl(3,n)}catch(st){an(n,n.return,st)}try{Xa(5,n,n.return)}catch(st){an(n,n.return,st)}}break;case 1:Si(i,n),Ui(n),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(Si(i,n),Ui(n),u&512&&o!==null&&Bs(o,o.return),n.flags&32){var h=n.stateNode;try{at(h,"")}catch(st){an(n,n.return,st)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=o!==null?o.memoizedProps:g,B=n.type,Z=n.updateQueue;if(n.updateQueue=null,Z!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&Ye(h,g),Ne(B,C);var fe=Ne(B,g);for(C=0;C<Z.length;C+=2){var Ce=Z[C],Le=Z[C+1];Ce==="style"?re(h,Le):Ce==="dangerouslySetInnerHTML"?Wt(h,Le):Ce==="children"?at(h,Le):k(h,Ce,Le,fe)}switch(B){case"input":dt(h,g);break;case"textarea":U(h,g);break;case"select":var Te=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ze=g.value;Ze!=null?bt(h,!!g.multiple,Ze,!1):Te!==!!g.multiple&&(g.defaultValue!=null?bt(h,!!g.multiple,g.defaultValue,!0):bt(h,!!g.multiple,g.multiple?[]:"",!1))}h[ka]=g}catch(st){an(n,n.return,st)}}break;case 6:if(Si(i,n),Ui(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(st){an(n,n.return,st)}}break;case 3:if(Si(i,n),Ui(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(st){an(n,n.return,st)}break;case 4:Si(i,n),Ui(n);break;case 13:Si(i,n),Ui(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||($u=Zt())),u&4&&sm(n);break;case 22:if(Ce=o!==null&&o.memoizedState!==null,n.mode&1?(In=(fe=In)||Ce,Si(i,n),In=fe):Si(i,n),Ui(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ce&&(n.mode&1)!==0)for(et=n,Ce=n.child;Ce!==null;){for(Le=et=Ce;et!==null;){switch(Te=et,Ze=Te.child,Te.tag){case 0:case 11:case 14:case 15:Xa(4,Te,Te.return);break;case 1:Bs(Te,Te.return);var rt=Te.stateNode;if(typeof rt.componentWillUnmount=="function"){u=Te,o=Te.return;try{i=u,rt.props=i.memoizedProps,rt.state=i.memoizedState,rt.componentWillUnmount()}catch(st){an(u,o,st)}}break;case 5:Bs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){cm(Le);continue}}Ze!==null?(Ze.return=Te,et=Ze):cm(Le)}Ce=Ce.sibling}e:for(Ce=null,Le=n;;){if(Le.tag===5){if(Ce===null){Ce=Le;try{h=Le.stateNode,fe?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Le.stateNode,Z=Le.memoizedProps.style,C=Z!=null&&Z.hasOwnProperty("display")?Z.display:null,B.style.display=T("display",C))}catch(st){an(n,n.return,st)}}}else if(Le.tag===6){if(Ce===null)try{Le.stateNode.nodeValue=fe?"":Le.memoizedProps}catch(st){an(n,n.return,st)}}else if((Le.tag!==22&&Le.tag!==23||Le.memoizedState===null||Le===n)&&Le.child!==null){Le.child.return=Le,Le=Le.child;continue}if(Le===n)break e;for(;Le.sibling===null;){if(Le.return===null||Le.return===n)break e;Ce===Le&&(Ce=null),Le=Le.return}Ce===Le&&(Ce=null),Le.sibling.return=Le.return,Le=Le.sibling}}break;case 19:Si(i,n),Ui(n),u&4&&sm(n);break;case 21:break;default:Si(i,n),Ui(n)}}function Ui(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(nm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(at(h,""),u.flags&=-33);var g=im(n);Vu(n,g,h);break;case 3:case 4:var C=u.stateNode.containerInfo,B=im(n);Gu(n,B,C);break;default:throw Error(t(161))}}catch(Z){an(n,n.return,Z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function h0(n,i,o){et=n,om(n)}function om(n,i,o){for(var u=(n.mode&1)!==0;et!==null;){var h=et,g=h.child;if(h.tag===22&&u){var C=h.memoizedState!==null||dl;if(!C){var B=h.alternate,Z=B!==null&&B.memoizedState!==null||In;B=dl;var fe=In;if(dl=C,(In=Z)&&!fe)for(et=h;et!==null;)C=et,Z=C.child,C.tag===22&&C.memoizedState!==null?um(h):Z!==null?(Z.return=C,et=Z):um(h);for(;g!==null;)et=g,om(g),g=g.sibling;et=h,dl=B,In=fe}lm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,et=g):lm(n)}}function lm(n){for(;et!==null;){var i=et;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||fl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:_i(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&cp(i,g,u);break;case 3:var C=i.updateQueue;if(C!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}cp(i,C,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var Z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Z.autoFocus&&o.focus();break;case"img":Z.src&&(o.src=Z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ce=fe.memoizedState;if(Ce!==null){var Le=Ce.dehydrated;Le!==null&&wa(Le)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Hu(i)}catch(Te){an(i,i.return,Te)}}if(i===n){et=null;break}if(o=i.sibling,o!==null){o.return=i.return,et=o;break}et=i.return}}function cm(n){for(;et!==null;){var i=et;if(i===n){et=null;break}var o=i.sibling;if(o!==null){o.return=i.return,et=o;break}et=i.return}}function um(n){for(;et!==null;){var i=et;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{fl(4,i)}catch(Z){an(i,o,Z)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(Z){an(i,h,Z)}}var g=i.return;try{Hu(i)}catch(Z){an(i,g,Z)}break;case 5:var C=i.return;try{Hu(i)}catch(Z){an(i,C,Z)}}}catch(Z){an(i,i.return,Z)}if(i===n){et=null;break}var B=i.sibling;if(B!==null){B.return=i.return,et=B;break}et=i.return}}var p0=Math.ceil,hl=A.ReactCurrentDispatcher,Wu=A.ReactCurrentOwner,ui=A.ReactCurrentBatchConfig,Ot=0,Sn=null,cn=null,Cn=0,ti=0,Hs=yr(0),mn=0,$a=null,is=0,pl=0,Xu=0,qa=null,Vn=null,$u=0,Gs=1/0,rr=null,ml=!1,qu=null,Tr=null,gl=!1,Cr=null,xl=0,Ya=0,Yu=null,vl=-1,_l=0;function zn(){return(Ot&6)!==0?Zt():vl!==-1?vl:vl=Zt()}function Ar(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Cn!==0?Cn&-Cn:Zv.transition!==null?(_l===0&&(_l=Gt()),_l):(n=lt,n!==0||(n=window.event,n=n===void 0?16:fh(n.type)),n)}function Mi(n,i,o,u){if(50<Ya)throw Ya=0,Yu=null,Error(t(185));sn(n,o,u),((Ot&2)===0||n!==Sn)&&(n===Sn&&((Ot&2)===0&&(pl|=o),mn===4&&Nr(n,Cn)),Wn(n,u),o===1&&Ot===0&&(i.mode&1)===0&&(Gs=Zt()+500,$o&&Mr()))}function Wn(n,i){var o=n.callbackNode;Nt(n,i);var u=Ct(n,n===Sn?Cn:0);if(u===0)o!==null&&_a(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&_a(o),i===1)n.tag===0?Kv(fm.bind(null,n)):Zh(fm.bind(null,n)),Xv(function(){(Ot&6)===0&&Mr()}),o=null;else{switch(Pi(u)){case 1:o=ya;break;case 4:o=Ao;break;case 16:o=Ms;break;case 536870912:o=N;break;default:o=Ms}o=ym(o,dm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function dm(n,i){if(vl=-1,_l=0,(Ot&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Vs()&&n.callbackNode!==o)return null;var u=Ct(n,n===Sn?Cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=yl(n,u);else{i=u;var h=Ot;Ot|=2;var g=pm();(Sn!==n||Cn!==i)&&(rr=null,Gs=Zt()+500,ss(n,i));do try{x0();break}catch(B){hm(n,B)}while(!0);hu(),hl.current=g,Ot=h,cn!==null?i=0:(Sn=null,Cn=0,i=mn)}if(i!==0){if(i===2&&(h=Qt(n),h!==0&&(u=h,i=Ku(n,h))),i===1)throw o=$a,ss(n,0),Nr(n,u),Wn(n,Zt()),o;if(i===6)Nr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!m0(h)&&(i=yl(n,u),i===2&&(g=Qt(n),g!==0&&(u=g,i=Ku(n,g))),i===1))throw o=$a,ss(n,0),Nr(n,u),Wn(n,Zt()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Vn,rr);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=$u+500-Zt(),10<i)){if(Ct(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(as.bind(null,n,Vn,rr),i);break}as(n,Vn,rr);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var C=31-se(u);g=1<<C,C=i[C],C>h&&(h=C),u&=~g}if(u=h,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*p0(u/1960))-u,10<u){n.timeoutHandle=nu(as.bind(null,n,Vn,rr),u);break}as(n,Vn,rr);break;case 5:as(n,Vn,rr);break;default:throw Error(t(329))}}}return Wn(n,Zt()),n.callbackNode===o?dm.bind(null,n):null}function Ku(n,i){var o=qa;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=yl(n,i),n!==2&&(i=Vn,Vn=o,i!==null&&Zu(i)),n}function Zu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function m0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!xi(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Xu,i&=~pl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-se(i),u=1<<o;n[o]=-1,i&=~u}}function fm(n){if((Ot&6)!==0)throw Error(t(327));Vs();var i=Ct(n,0);if((i&1)===0)return Wn(n,Zt()),null;var o=yl(n,i);if(n.tag!==0&&o===2){var u=Qt(n);u!==0&&(i=u,o=Ku(n,u))}if(o===1)throw o=$a,ss(n,0),Nr(n,i),Wn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Vn,rr),Wn(n,Zt()),null}function Qu(n,i){var o=Ot;Ot|=1;try{return n(i)}finally{Ot=o,Ot===0&&(Gs=Zt()+500,$o&&Mr())}}function rs(n){Cr!==null&&Cr.tag===0&&(Ot&6)===0&&Vs();var i=Ot;Ot|=1;var o=ui.transition,u=lt;try{if(ui.transition=null,lt=1,n)return n()}finally{lt=u,ui.transition=o,Ot=i,(Ot&6)===0&&Mr()}}function Ju(){ti=Hs.current,Kt(Hs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Wv(o)),cn!==null)for(o=cn.return;o!==null;){var u=o;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Wo();break;case 3:zs(),Kt(Bn),Kt(Pn),Su();break;case 5:_u(u);break;case 4:zs();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:pu(u.type._context);break;case 22:case 23:Ju()}o=o.return}if(Sn=n,cn=n=Rr(n.current,null),Cn=ti=i,mn=0,$a=null,Xu=pl=is=0,Vn=qa=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var C=g.next;g.next=h,u.next=C}o.pending=u}es=null}return n}function hm(n,i){do{var o=cn;try{if(hu(),il.current=ol,rl){for(var u=nn.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}rl=!1}if(ns=0,yn=pn=nn=null,Ba=!1,Ha=0,Wu.current=null,o===null||o.return===null){mn=1,$a=i,cn=null;break}e:{var g=n,C=o.return,B=o,Z=i;if(i=Cn,B.flags|=32768,Z!==null&&typeof Z=="object"&&typeof Z.then=="function"){var fe=Z,Ce=B,Le=Ce.tag;if((Ce.mode&1)===0&&(Le===0||Le===11||Le===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Ze=Op(C);if(Ze!==null){Ze.flags&=-257,zp(Ze,C,B,g,i),Ze.mode&1&&Fp(g,fe,i),i=Ze,Z=fe;var rt=i.updateQueue;if(rt===null){var st=new Set;st.add(Z),i.updateQueue=st}else rt.add(Z);break e}else{if((i&1)===0){Fp(g,fe,i),ed();break e}Z=Error(t(426))}}else if(Jt&&B.mode&1){var ln=Op(C);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),zp(ln,C,B,g,i),du(js(Z,B));break e}}g=Z=js(Z,B),mn!==4&&(mn=2),qa===null?qa=[g]:qa.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var oe=kp(g,Z,i);lp(g,oe);break e;case 1:B=Z;var te=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof te.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Tr===null||!Tr.has(ce)))){g.flags|=65536,i&=-i,g.lanes|=i;var Fe=Up(g,B,i);lp(g,Fe);break e}}g=g.return}while(g!==null)}gm(o)}catch(ct){i=ct,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function pm(){var n=hl.current;return hl.current=ol,n===null?ol:n}function ed(){(mn===0||mn===3||mn===2)&&(mn=4),Sn===null||(is&268435455)===0&&(pl&268435455)===0||Nr(Sn,Cn)}function yl(n,i){var o=Ot;Ot|=2;var u=pm();(Sn!==n||Cn!==i)&&(rr=null,ss(n,i));do try{g0();break}catch(h){hm(n,h)}while(!0);if(hu(),Ot=o,hl.current=u,cn!==null)throw Error(t(261));return Sn=null,Cn=0,mn}function g0(){for(;cn!==null;)mm(cn)}function x0(){for(;cn!==null&&!Yr();)mm(cn)}function mm(n){var i=_m(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?gm(n):cn=i,Wu.current=null}function gm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=c0(o,i,ti),o!==null){cn=o;return}}else{if(o=u0(o,i),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{mn=6,cn=null;return}}if(i=i.sibling,i!==null){cn=i;return}cn=i=n}while(i!==null);mn===0&&(mn=5)}function as(n,i,o){var u=lt,h=ui.transition;try{ui.transition=null,lt=1,v0(n,i,o,u)}finally{ui.transition=h,lt=u}return null}function v0(n,i,o,u){do Vs();while(Cr!==null);if((Ot&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(it(n,g),n===Sn&&(cn=Sn=null,Cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||gl||(gl=!0,ym(Ms,function(){return Vs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var C=lt;lt=1;var B=Ot;Ot|=4,Wu.current=null,f0(n,o),am(o,n),Ov(eu),Po=!!Jc,eu=Jc=null,n.current=o,h0(o),Dc(),Ot=B,lt=C,ui.transition=g}else n.current=o;if(gl&&(gl=!1,Cr=n,xl=h),g=n.pendingLanes,g===0&&(Tr=null),ae(o.stateNode),Wn(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(ml)throw ml=!1,n=qu,qu=null,n;return(xl&1)!==0&&n.tag!==0&&Vs(),g=n.pendingLanes,(g&1)!==0?n===Yu?Ya++:(Ya=0,Yu=n):Ya=0,Mr(),null}function Vs(){if(Cr!==null){var n=Pi(xl),i=ui.transition,o=lt;try{if(ui.transition=null,lt=16>n?16:n,Cr===null)var u=!1;else{if(n=Cr,Cr=null,xl=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,et=n.current;et!==null;){var g=et,C=g.child;if((et.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Z=0;Z<B.length;Z++){var fe=B[Z];for(et=fe;et!==null;){var Ce=et;switch(Ce.tag){case 0:case 11:case 15:Xa(8,Ce,g)}var Le=Ce.child;if(Le!==null)Le.return=Ce,et=Le;else for(;et!==null;){Ce=et;var Te=Ce.sibling,Ze=Ce.return;if(tm(Ce),Ce===fe){et=null;break}if(Te!==null){Te.return=Ze,et=Te;break}et=Ze}}}var rt=g.alternate;if(rt!==null){var st=rt.child;if(st!==null){rt.child=null;do{var ln=st.sibling;st.sibling=null,st=ln}while(st!==null)}}et=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,et=C;else e:for(;et!==null;){if(g=et,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var oe=g.sibling;if(oe!==null){oe.return=g.return,et=oe;break e}et=g.return}}var te=n.current;for(et=te;et!==null;){C=et;var ce=C.child;if((C.subtreeFlags&2064)!==0&&ce!==null)ce.return=C,et=ce;else e:for(C=te;et!==null;){if(B=et,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:fl(9,B)}}catch(ct){an(B,B.return,ct)}if(B===C){et=null;break e}var Fe=B.sibling;if(Fe!==null){Fe.return=B.return,et=Fe;break e}et=B.return}}if(Ot=h,Mr(),le&&typeof le.onPostCommitFiberRoot=="function")try{le.onPostCommitFiberRoot(Y,n)}catch{}u=!0}return u}finally{lt=o,ui.transition=i}}return!1}function xm(n,i,o){i=js(o,i),i=kp(n,i,1),n=wr(n,i,1),i=zn(),n!==null&&(sn(n,1,i),Wn(n,i))}function an(n,i,o){if(n.tag===3)xm(n,n,o);else for(;i!==null;){if(i.tag===3){xm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Tr===null||!Tr.has(u))){n=js(o,n),n=Up(i,n,1),i=wr(i,n,1),n=zn(),i!==null&&(sn(i,1,n),Wn(i,n));break}}i=i.return}}function _0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(Cn&o)===o&&(mn===4||mn===3&&(Cn&130023424)===Cn&&500>Zt()-$u?ss(n,0):Xu|=o),Wn(n,i)}function vm(n,i){i===0&&((n.mode&1)===0?i=1:(i=tt,tt<<=1,(tt&130023424)===0&&(tt=4194304)));var o=zn();n=tr(n,i),n!==null&&(sn(n,i,o),Wn(n,o))}function y0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),vm(n,o)}function S0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),vm(n,o)}var _m;_m=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Gn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gn=!1,l0(n,i,o);Gn=(n.flags&131072)!==0}else Gn=!1,Jt&&(i.flags&1048576)!==0&&Qh(i,Yo,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;ul(n,i),n=i.pendingProps;var h=Ls(i,Pn.current);Os(i,o),h=wu(null,i,u,n,h,o);var g=bu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(g=!0,Xo(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,xu(i),h.updater=ll,i.stateNode=h,h._reactInternals=i,Pu(i,u,n,o),i=ku(null,i,u,!0,g,o)):(i.tag=0,Jt&&g&&ou(i),On(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(ul(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=E0(u),n=_i(u,n),h){case 0:i=Iu(null,i,u,n,o);break e;case 1:i=Wp(null,i,u,n,o);break e;case 11:i=jp(null,i,u,n,o);break e;case 14:i=Bp(null,i,u,_i(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:_i(u,h),Iu(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:_i(u,h),Wp(n,i,u,h,o);case 3:e:{if(Xp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,op(n,i),tl(i,u,null,o);var C=i.memoizedState;if(u=C.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=js(Error(t(423)),i),i=$p(n,i,u,o,h);break e}else if(u!==h){h=js(Error(t(424)),i),i=$p(n,i,u,o,h);break e}else for(ei=_r(i.stateNode.containerInfo.firstChild),Jn=i,Jt=!0,vi=null,o=sp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ks(),u===h){i=ir(n,i,o);break e}On(n,i,u,o)}i=i.child}return i;case 5:return up(i),n===null&&uu(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,tu(u,h)?C=null:g!==null&&tu(u,g)&&(i.flags|=32),Vp(n,i),On(n,i,C,o),i.child;case 6:return n===null&&uu(i),null;case 13:return qp(n,i,o);case 4:return vu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Us(i,null,u,o):On(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:_i(u,h),jp(n,i,u,h,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,$t(Qo,u._currentValue),u._currentValue=C,g!==null)if(xi(g.value,C)){if(g.children===h.children&&!Bn.current){i=ir(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){C=g.child;for(var Z=B.firstContext;Z!==null;){if(Z.context===u){if(g.tag===1){Z=nr(-1,o&-o),Z.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Ce=fe.pending;Ce===null?Z.next=Z:(Z.next=Ce.next,Ce.next=Z),fe.pending=Z}}g.lanes|=o,Z=g.alternate,Z!==null&&(Z.lanes|=o),mu(g.return,o,i),B.lanes|=o;break}Z=Z.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=o,B=C.alternate,B!==null&&(B.lanes|=o),mu(C,o,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}On(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Os(i,o),h=li(h),u=u(h),i.flags|=1,On(n,i,u,o),i.child;case 14:return u=i.type,h=_i(u,i.pendingProps),h=_i(u.type,h),Bp(n,i,u,h,o);case 15:return Hp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:_i(u,h),ul(n,i),i.tag=1,Hn(u)?(n=!0,Xo(i)):n=!1,Os(i,o),Dp(i,u,h),Pu(i,u,h,o),ku(null,i,u,!0,n,o);case 19:return Kp(n,i,o);case 22:return Gp(n,i,o)}throw Error(t(156,i.tag))};function ym(n,i){return va(n,i)}function M0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,u){return new M0(n,i,o,u)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function E0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ee)return 11;if(n===X)return 14}return 2}function Rr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Sl(n,i,o,u,h,g){var C=2;if(u=n,typeof n=="function")td(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return os(o.children,h,g,i);case D:C=8,h|=8;break;case J:return n=di(12,o,i,h|2),n.elementType=J,n.lanes=g,n;case ie:return n=di(13,o,i,h),n.elementType=ie,n.lanes=g,n;case j:return n=di(19,o,i,h),n.elementType=j,n.lanes=g,n;case O:return Ml(o,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case V:C=9;break e;case ee:C=11;break e;case X:C=14;break e;case ne:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(C,o,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function os(n,i,o,u){return n=di(7,n,u,i),n.lanes=o,n}function Ml(n,i,o,u){return n=di(22,n,u,i),n.elementType=O,n.lanes=o,n.stateNode={isHidden:!1},n}function nd(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function id(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function w0(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rd(n,i,o,u,h,g,C,B,Z){return n=new w0(n,i,o,B,Z),i===1?(i=1,g===!0&&(i|=8)):i=0,g=di(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(g),n}function b0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Sm(n){if(!n)return Sr;n=n._reactInternals;e:{if(Ni(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return Yh(n,o,i)}return i}function Mm(n,i,o,u,h,g,C,B,Z){return n=rd(o,u,!0,n,h,g,C,B,Z),n.context=Sm(null),o=n.current,u=zn(),h=Ar(o),g=nr(u,h),g.callback=i??null,wr(o,g,h),n.current.lanes=h,sn(n,h,u),Wn(n,u),n}function El(n,i,o,u){var h=i.current,g=zn(),C=Ar(h);return o=Sm(o),i.context===null?i.context=o:i.pendingContext=o,i=nr(g,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=wr(h,i,C),n!==null&&(Mi(n,h,C,g),el(n,h,C)),C}function wl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Em(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function sd(n,i){Em(n,i),(n=n.alternate)&&Em(n,i)}function T0(){return null}var wm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}bl.prototype.render=ad.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));El(n,i,null,null)},bl.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){El(null,n,null,null)}),i[Zi]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Li();n={blockedOn:null,target:n,priority:i};for(var o=0;o<gr.length&&i!==0&&i<gr[o].priority;o++);gr.splice(o,0,n),o===0&&uh(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function bm(){}function C0(n,i,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var fe=wl(C);g.call(fe)}}var C=Mm(i,u,n,0,null,!1,!1,"",bm);return n._reactRootContainer=C,n[Zi]=C.current,Da(n.nodeType===8?n.parentNode:n),rs(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var B=u;u=function(){var fe=wl(Z);B.call(fe)}}var Z=rd(n,0,!1,null,null,!1,!1,"",bm);return n._reactRootContainer=Z,n[Zi]=Z.current,Da(n.nodeType===8?n.parentNode:n),rs(function(){El(i,Z,o,u)}),Z}function Cl(n,i,o,u,h){var g=o._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var B=h;h=function(){var Z=wl(C);B.call(Z)}}El(i,C,n,h)}else C=C0(o,i,n,h,u);return wl(C)}hn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=gt(i.pendingLanes);o!==0&&(fn(i,o|1),Wn(i,Zt()),(Ot&6)===0&&(Gs=Zt()+500,Mr()))}break;case 13:rs(function(){var u=tr(n,1);if(u!==null){var h=zn();Mi(u,n,1,h)}}),sd(n,1)}},pr=function(n){if(n.tag===13){var i=tr(n,134217728);if(i!==null){var o=zn();Mi(i,n,134217728,o)}sd(n,134217728)}},gi=function(n){if(n.tag===13){var i=Ar(n),o=tr(n,i);if(o!==null){var u=zn();Mi(o,n,i,u)}sd(n,i)}},Li=function(){return lt},Lt=function(n,i){var o=lt;try{return lt=n,i()}finally{lt=o}},xe=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Vo(u);if(!h)throw Error(t(90));vt(u),dt(u,h)}}}break;case"textarea":U(n,o);break;case"select":i=o.value,i!=null&&bt(n,!!o.multiple,i,!1)}},Ue=Qu,Oe=rs;var A0={usingClientEntryPoint:!1,Events:[Ua,Rs,Vo,pe,ze,Qu]},Ka={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},N0={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||T0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Y=Al.inject(N0),le=Al}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(i))throw Error(t(200));return b0(n,i,null,o)},Xn.createRoot=function(n,i){if(!od(n))throw Error(t(299));var o=!1,u="",h=wm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=rd(n,1,!1,null,null,o,!1,u,h),n[Zi]=i.current,Da(n.nodeType===8?n.parentNode:n),new ad(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return rs(n)},Xn.hydrate=function(n,i,o){if(!Tl(i))throw Error(t(200));return Cl(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!od(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",C=wm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),i=Mm(i,null,n,1,o??null,h,!1,g,C),n[Zi]=i.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new bl(i)},Xn.render=function(n,i,o){if(!Tl(i))throw Error(t(200));return Cl(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!Tl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Cl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Qu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Cl(n,i,o,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Dm;function O0(){if(Dm)return ud.exports;Dm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=F0(),ud.exports}var Im;function z0(){if(Im)return Nl;Im=1;var s=O0();return Nl.createRoot=s.createRoot,Nl.hydrateRoot=s.hydrateRoot,Nl}var j0=z0();const B0=Xg(j0);function fs(){if(typeof window<"u"){const s=localStorage.getItem("streamlink_api_url");if(s){const e=s.trim().replace(/\/+$/,"");if(e.includes("your-temporary-url")||e.includes("your-tunnel")||e.includes("sponsored-fee-imposed-associations")||e==="https://"||e==="http://")localStorage.removeItem("streamlink_api_url");else return e}}return"".trim().replace(/\/+$/,"")}function km(s){typeof window<"u"&&(!s||!s.trim()?localStorage.removeItem("streamlink_api_url"):localStorage.setItem("streamlink_api_url",s.trim().replace(/\/+$/,"")))}function gn(s){if(!s)return"";if(s.startsWith("http://")||s.startsWith("https://"))return s;const e=fs(),t=s.startsWith("/")?s:`/${s}`;return e?`${e}${t}`:t}const $g=W.createContext(null);function H0({children:s}){const[e,t]=W.useState(null),[r,l]=W.useState(()=>localStorage.getItem("streamlink_token")),[c,d]=W.useState(!0);W.useEffect(()=>{r?fetch(gn("/api/auth/me"),{headers:{Authorization:`Bearer ${r}`}}).then(_=>{if(_.ok)return _.json();throw new Error("Session invalid")}).then(_=>{t(_.user)}).catch(()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)}).finally(()=>d(!1)):d(!1)},[r]);const f=async(_,S)=>{const v=await fetch(gn("/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:_,password:S})}),y=await v.json();if(!v.ok)throw new Error(y.error||"Login failed");return localStorage.setItem("streamlink_token",y.token),l(y.token),t(y.user),y.user},p=()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)},m=(_,S={})=>{const v={...S.headers,Authorization:`Bearer ${r}`};return fetch(gn(_),{...S,headers:v})};return a.jsx($g.Provider,{value:{user:e,token:r,login:f,logout:p,authFetch:m,loading:c},children:s})}function jf(){return W.useContext($g)}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),qg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var V0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=W.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...f},p)=>W.createElement("svg",{ref:p,...V0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:qg("lucide",l),...f},[...d.map(([m,_])=>W.createElement(m,_)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ke=(s,e)=>{const t=W.forwardRef(({className:r,...l},c)=>W.createElement(W0,{ref:c,iconNode:e,className:qg(`lucide-${G0(s)}`,r),...l}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Yg=Ke("Activity",X0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fc=Ke("ArrowLeft",$0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],co=Ke("ArrowRight",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],K0=Ke("ArrowUpRight",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],Kg=Ke("Captions",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wn=Ke("Check",Q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],e_=Ke("ChevronDown",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],n_=Ke("ChevronRight",t_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],r_=Ke("ChevronUp",i_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uo=Ke("CircleAlert",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const a_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Wd=Ke("CircleCheckBig",a_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Zg=Ke("CircleCheck",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Gr=Ke("Clock",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],u_=Ke("Compass",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],aa=Ke("Copy",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],h_=Ke("CornerDownLeft",f_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Um=Ke("Download",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Fm=Ke("EllipsisVertical",m_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Om=Ke("ExternalLink",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Qg=Ke("EyeOff",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Jg=Ke("Eye",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],Ci=Ke("Film",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Or=Ke("FolderMinus",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hs=Ke("FolderOpen",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ex=Ke("FolderPlus",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],ic=Ke("FolderSync",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ao=Ke("Folder",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Tc=Ke("Globe",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],zm=Ke("Grid3x3",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],$i=Ke("HardDrive",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Bi=Ke("Heart",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],jm=Ke("House",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],hc=Ke("Image",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fo=Ke("Info",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],D_=Ke("Key",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bf=Ke("Layers",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],U_=Ke("LayoutDashboard",k_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],O_=Ke("LayoutGrid",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],j_=Ke("List",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cc=Ke("Lock",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const H_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Bm=Ke("LogOut",H_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],V_=Ke("Maximize",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],X_=Ke("Minimize",W_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Hf=Ke("Monitor",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],hd=Ke("Pause",q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],dn=Ke("Play",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gf=Ke("Plus",K_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],Q_=Ke("QrCode",Z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],ey=Ke("Radio",J_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Vi=Ke("RefreshCw",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oo=Ke("RotateCcw",ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],rc=Ke("RotateCw",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ps=Ke("Search",ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ay=Ke("Server",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],ly=Ke("Shield",oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],tx=Ke("SlidersVertical",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],pi=Ke("Sparkles",uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],pc=Ke("SquareCheckBig",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ca=Ke("Square",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],py=Ke("Tag",hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Vr=Ke("Trash2",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],xy=Ke("TrendingUp",gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],mc=Ke("TriangleAlert",vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],yy=Ke("Upload",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],My=Ke("UserPlus",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],nx=Ke("User",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wy=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Vf=Ke("Users",wy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ty=Ke("Volume2",by);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ay=Ke("VolumeX",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Ry=Ke("Wifi",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wi=Ke("X",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],ix=Ke("Zap",Ly);function Dy({currentView:s,setCurrentView:e,onOpenSearch:t,onOpenProfiles:r,onOpenQuality:l,currentProfile:c,qualityLevel:d="high"}){var m,_,S,v,y,w,b,x;const{user:f,logout:p}=jf();return a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"app-mobile-top-bar",children:[a.jsxs("div",{className:"mobile-brand-pill",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(Ci,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"mobile-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"mobile-version-tag",children:"2.0"})]}),a.jsxs("span",{className:"mobile-live-dot",title:"Server Online",children:[a.jsx(ey,{size:11,className:"pulse-icon"}),"LIVE"]})]}),a.jsxs("div",{className:"mobile-top-right",children:[a.jsx("button",{className:"mobile-search-btn",onClick:t,title:"Search (/)",children:a.jsx(ps,{size:16})}),a.jsx("button",{className:"mobile-profile-btn",onClick:r,style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},title:"Switch Profile",children:a.jsx("span",{children:((_=(m=c==null?void 0:c.name)==null?void 0:m[0])==null?void 0:_.toUpperCase())||((v=(S=f==null?void 0:f.username)==null?void 0:S[0])==null?void 0:v.toUpperCase())||"U"})}),a.jsx("button",{className:"mobile-logout-btn",onClick:p,title:"Sign Out",children:a.jsx(Bm,{size:15})})]})]}),a.jsxs("aside",{className:"app-sidebar",children:[a.jsxs("div",{className:"sidebar-brand",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(Ci,{size:20,strokeWidth:2.5})}),a.jsxs("div",{className:"sidebar-brand-text",children:[a.jsxs("span",{children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})," ",a.jsx("span",{className:"version-pill",children:"2.0"})]}),a.jsx("span",{className:"sidebar-brand-sub",children:"Project CINE-3D"})]})]}),a.jsxs("div",{className:"sidebar-search-action",onClick:t,children:[a.jsx(ps,{size:15,className:"text-cyan"}),a.jsx("span",{children:"Dimensional Search"}),a.jsx("kbd",{className:"sidebar-kbd",children:"/"})]}),a.jsxs("nav",{className:"sidebar-nav",children:[a.jsx("div",{className:"sidebar-nav-section-label",children:"EXPERIENCE"}),a.jsxs("button",{className:`sidebar-nav-item cine3d-nav-item ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(pi,{size:18,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D Lobby"}),a.jsx("span",{className:"sidebar-badge-new",children:"3D"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(jm,{size:18}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(Ci,{size:18}),a.jsx("span",{children:"Movie Library"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Bi,{size:18}),a.jsx("span",{children:"My List & Favorites"})]}),(f==null?void 0:f.role)==="admin"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SERVER & CONTROL"}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder-sharing"?"active":""}`,onClick:()=>e("folder-sharing"),children:[a.jsx(ic,{size:18}),a.jsx("span",{children:"Folder Sharing"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder"?"active":""}`,onClick:()=>e("folder"),children:[a.jsx(hs,{size:18}),a.jsx("span",{children:"Movie Folder"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="sharing"?"active":""}`,onClick:()=>e("sharing"),children:[a.jsx(Tc,{size:18}),a.jsx("span",{children:"Sharing Hub"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[a.jsx(U_,{size:18}),a.jsx("span",{children:"Server Dashboard"})]})]}),a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SYSTEM & QUALITY"}),a.jsxs("button",{className:"sidebar-nav-item quality-nav-pill",onClick:l,children:[a.jsx(tx,{size:17,className:"text-cyan"}),a.jsxs("div",{style:{flex:1,textAlign:"left"},children:[a.jsx("div",{children:"Quality Manager"}),a.jsx("div",{className:"sidebar-quality-badge",children:d.toUpperCase()})]})]}),a.jsxs("button",{className:"sidebar-nav-item",onClick:r,children:[a.jsx(Vf,{size:17}),a.jsx("span",{children:"Switch Profile"})]})]}),a.jsx("div",{className:"sidebar-footer",children:a.jsxs("div",{className:"sidebar-user-pill",onClick:r,title:"Manage Profiles",children:[a.jsx("div",{className:"user-avatar-dot",style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},children:a.jsx("span",{children:((w=(y=c==null?void 0:c.name)==null?void 0:y[0])==null?void 0:w.toUpperCase())||((x=(b=f==null?void 0:f.username)==null?void 0:b[0])==null?void 0:x.toUpperCase())||"U"})}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{className:"sidebar-username",children:(c==null?void 0:c.name)||(f==null?void 0:f.username)}),a.jsx("div",{className:"sidebar-role",children:(f==null?void 0:f.role)==="admin"?"Host Administrator":"Viewer"})]}),a.jsx("button",{className:"sidebar-logout-btn",onClick:M=>{M.stopPropagation(),p()},title:"Sign Out",children:a.jsx(Bm,{size:15})})]})})]}),a.jsxs("nav",{className:"app-mobile-bottom-nav",children:[a.jsxs("button",{className:`mobile-nav-btn ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(jm,{size:20}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`mobile-nav-btn cine3d-btn ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(pi,{size:20,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(Ci,{size:20}),a.jsx("span",{children:"Library"})]}),a.jsxs("button",{className:"mobile-nav-btn",onClick:t,children:[a.jsx(ps,{size:20}),a.jsx("span",{children:"Search"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Bi,{size:20}),a.jsx("span",{children:"My List"})]})]})]})}function Wr(s){if(!s||s<=0)return"Unknown";const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function si(s){if(!s||s<=0)return"0 MB";const e=s/(1024*1024*1024);return e>=1?`${e.toFixed(2)} GB`:`${(s/(1024*1024)).toFixed(0)} MB`}function zr({movie:s,onSelect:e,onToggleFavorite:t,onPlay:r,onChangePoster:l,onRemoveMovie:c,onDeleteFile:d,viewMode:f="grid",isSelectMode:p=!1,isSelected:m=!1,onToggleSelect:_=null}){const S=W.useRef(null),v=W.useRef(null),[y,w]=W.useState(!1),[b,x]=W.useState(!1),[M,L]=W.useState({x:0,y:0}),[k,A]=W.useState(!1);W.useEffect(()=>{if(!b)return;const z=V=>{v.current&&!v.current.contains(V.target)&&x(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[b]);const I=s.duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.duration*100)):s.watched_duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.watched_duration*100)):0,P=z=>{if(!S.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches||p)return;const V=S.current.getBoundingClientRect(),ee=(z.clientX-V.left)/V.width,j=((z.clientY-V.top)/V.height-.5)*-8,X=(ee-.5)*8;L({x:j,y:X})},E=()=>{w(!0)},D=()=>{w(!1),L({x:0,y:0})},J=z=>{p?_&&_(s.id):e&&e(s)};return f==="list"?a.jsxs("div",{className:`movie-list-item ${m?"selected":""}`,onClick:J,children:[p&&a.jsx("button",{className:"select-checkbox-btn",onClick:z=>{z.stopPropagation(),_&&_(s.id)},children:m?a.jsx(pc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"})}),a.jsxs("div",{className:"movie-list-thumb",children:[a.jsx("img",{src:gn(k?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,onError:()=>A(!0),loading:"lazy"}),!p&&r&&a.jsx("button",{className:"list-play-overlay",onClick:z=>{z.stopPropagation(),r(s)},title:"Play Movie",children:a.jsx(dn,{size:16,fill:"#ffffff"})})]}),a.jsxs("div",{className:"movie-list-info",children:[a.jsxs("div",{className:"movie-list-title-row",children:[a.jsx("h4",{className:"movie-list-title",title:s.clean_title,children:s.clean_title}),s.resolution&&a.jsx("span",{className:"badge-studio",children:s.resolution})]}),a.jsxs("div",{className:"movie-list-meta",children:[s.year&&a.jsx("span",{className:"meta-tag",children:s.year}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:12})," ",Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:12})," ",si(s.file_size)]}),s.codec&&a.jsx("span",{className:"meta-tag",children:s.codec})]})]}),a.jsxs("div",{className:"movie-list-actions",children:[t&&a.jsx("button",{className:`fav-btn-clean ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Bi,{size:16,fill:s.is_favorite?"currentColor":"none"})}),!p&&r&&a.jsxs("button",{className:"btn-primary-sm",onClick:z=>{z.stopPropagation(),r(s)},children:[a.jsx(dn,{size:13,fill:"#ffffff"}),a.jsx("span",{children:"Watch"})]}),a.jsxs("div",{className:"card-menu-container",ref:v,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!b)},title:"Movie options",children:a.jsx(Fm,{size:16})}),b&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(dn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Bi,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(hc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Or,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]})]})]}):a.jsxs("div",{ref:S,className:`movie-card-3d ${y?"hovered":""} ${m?"selected":""}`,onMouseMove:P,onMouseEnter:E,onMouseLeave:D,onClick:J,style:{transform:y&&!p?`perspective(800px) rotateX(${M.x}deg) rotateY(${M.y}deg) translateY(-5px)`:"perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:gn(k?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,className:"poster-img-3d",onError:()=>A(!0),loading:"lazy"}),a.jsx("div",{className:"poster-vignette"}),p?a.jsx("div",{className:"select-checkbox-overlay",onClick:z=>{z.stopPropagation(),_&&_(s.id)},children:m?a.jsx(pc,{size:22,className:"checkbox-icon checked"}):a.jsx(ca,{size:22,className:"checkbox-icon"})}):a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("button",{className:"play-circle-3d",onClick:z=>{r&&(z.stopPropagation(),r(s))},title:"Play Movie",children:a.jsx(dn,{size:22,fill:"#ffffff",strokeWidth:0})})}),s.resolution&&a.jsx("span",{className:"badge-studio badge-top-left",children:s.resolution}),s.year&&a.jsx("span",{className:"badge-studio badge-top-right",children:s.year}),!p&&a.jsxs("div",{className:"card-menu-container top-right-ctrl",ref:v,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!b)},title:"Movie options",children:a.jsx(Fm,{size:16})}),b&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(dn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Bi,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(hc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Or,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]}),!p&&t&&a.jsx("button",{className:`fav-btn-3d ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Bi,{size:14,fill:s.is_favorite?"currentColor":"none"})}),I>0&&a.jsx("div",{className:"progress-bar-container-3d",children:a.jsx("div",{className:"progress-bar-fill-3d",style:{width:`${I}%`}})})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:s.clean_title,children:s.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11}),Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11}),si(s.file_size)]})]})]})]})}function Iy({movie:s,onPlay:e,onDetails:t,onEnterCine3D:r,onToggleFavorite:l,isFavorite:c}){const d=W.useRef(null),[f,p]=W.useState({x:0,y:0});if(!s)return null;const m=S=>{if(!d.current||!window.matchMedia("(pointer: fine)").matches)return;const v=d.current.getBoundingClientRect(),y=((S.clientX-v.left)/v.width-.5)*2,w=((S.clientY-v.top)/v.height-.5)*2;p({x:y*12,y:w*8})},_=()=>{p({x:0,y:0})};return a.jsxs("div",{ref:d,className:"hero-section-3d",onMouseMove:m,onMouseLeave:_,children:[a.jsxs("div",{className:"hero-backdrop-layer",style:{transform:`translate3d(${f.x*-1}px, ${f.y*-1}px, 0) scale(1.05)`},children:[a.jsx("img",{src:gn(`/api/movies/${s.id}/backdrop`),alt:s.clean_title,className:"hero-bg-image"}),a.jsx("div",{className:"hero-gradient-overlay"})]}),a.jsx("div",{className:"hero-accent-light",style:{transform:`translate3d(${f.x*1.5}px, ${f.y*1.5}px, 0)`}}),a.jsxs("div",{className:"hero-content-layer",style:{transform:`translate3d(${f.x*.5}px, ${f.y*.5}px, 0)`},children:[a.jsxs("div",{className:"hero-badge-row",children:[a.jsxs("span",{className:"hero-badge-pill",children:[a.jsx(pi,{size:13,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"FEATURED CINEMA STREAM"})]}),s.resolution&&a.jsxs("span",{className:"hero-badge-quality",children:[s.resolution," ULTRA HD"]}),s.genre&&a.jsx("span",{className:"hero-badge-genre",children:s.genre}),s.year&&a.jsx("span",{className:"hero-badge-year",children:s.year}),s.duration>0&&a.jsxs("span",{className:"hero-badge-duration",children:[a.jsx(Gr,{size:12}),Wr(s.duration)]})]}),a.jsx("h1",{className:"hero-title",children:s.clean_title}),a.jsx("p",{className:"hero-description",children:s.description||"Direct high-bitrate streaming from your host Windows workstation. Multi-channel audio, dynamic range seeking, and zero cloud compression."}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsxs("button",{className:"hero-btn-play",onClick:()=>e(s),children:[a.jsx(dn,{size:18,fill:"#ffffff"}),a.jsx("span",{children:"Watch Now"})]}),r&&a.jsxs("button",{className:"hero-btn-cine3d",onClick:r,children:[a.jsx(pi,{size:16,className:"text-cyan"}),a.jsx("span",{children:"Enter in CINE-3D"})]}),a.jsxs("button",{className:"hero-btn-details",onClick:()=>t(s),children:[a.jsx(fo,{size:18}),a.jsx("span",{children:"More Details"})]})]})]})]})}function ky({onSelectMovie:s,onPlayMovie:e,authFetch:t,onNavigateLibrary:r,onOpenFolderPicker:l,onNavigateCine3D:c}){const[d,f]=W.useState({featured:null,continueWatching:[],recentlyAdded:[],popular:[],favorites:[],genreCollections:[]}),[p,m]=W.useState([]),[_,S]=W.useState(!0),v=()=>{S(!0),Promise.all([t("/api/movies/sections/home").then(b=>b.json()),t("/api/user/recommendations").then(b=>b.json()).catch(()=>({recommendations:[]}))]).then(([b,x])=>{f({featured:b.featured||null,continueWatching:b.continueWatching||[],recentlyAdded:b.recentlyAdded||[],popular:b.popular||[],favorites:b.favorites||[],genreCollections:b.genreCollections||[]}),m(x.recommendations||[])}).catch(()=>{}).finally(()=>S(!1))};W.useEffect(()=>{v()},[]);const y=async b=>{try{const M=await(await t(`/api/user/favorites/${b}`,{method:"POST"})).json();f(L=>({...L,recentlyAdded:L.recentlyAdded.map(k=>k.id===b?{...k,is_favorite:M.favorited?1:0}:k),popular:L.popular.map(k=>k.id===b?{...k,is_favorite:M.favorited?1:0}:k),favorites:M.favorited?[...L.favorites,L.recentlyAdded.find(k=>k.id===b)||{id:b,is_favorite:1}]:L.favorites.filter(k=>k.id!==b)}))}catch{}};return _?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading StreamLink 2.0 Cinema..."})]}):d.featured||d.recentlyAdded.length>0?a.jsxs("div",{className:"home-page-container",children:[d.featured&&a.jsx(Iy,{movie:d.featured,onPlay:e,onDetails:s,onEnterCine3D:c}),c&&a.jsxs("div",{className:"cine3d-invitation-strip",onClick:c,children:[a.jsxs("div",{className:"strip-left",children:[a.jsxs("div",{className:"strip-sparkle-pill",children:[a.jsx(pi,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"SPATIAL WEBGL CINEMA"})]}),a.jsx("h3",{children:"Explore in CINE-3D Spatial Lobby"}),a.jsx("p",{children:"Step inside an interactive 3D curved cinema carousel with dynamic lighting and spatial controls."})]}),a.jsxs("button",{className:"btn-primary btn-sm",children:[a.jsx("span",{children:"Enter CINE-3D"}),a.jsx(co,{size:14})]})]}),d.continueWatching.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Gr,{size:19,color:"#8B5CF6"}),a.jsx("span",{children:"Continue Watching"})]})}),a.jsx("div",{className:"continue-watching-grid",children:d.continueWatching.map(b=>{const x=b.duration>0?Math.min(100,Math.round(b.progress_seconds/b.duration*100)):50;return a.jsxs("div",{className:"continue-card-3d",onClick:()=>e(b),children:[a.jsxs("div",{className:"continue-poster-thumb",children:[a.jsx("img",{src:gn(`/api/movies/${b.id}/poster`),alt:b.clean_title}),a.jsx("div",{className:"continue-play-overlay",children:a.jsx(dn,{size:20,fill:"#ffffff"})})]}),a.jsxs("div",{className:"continue-info",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"continue-title",title:b.clean_title,children:b.clean_title}),a.jsxs("div",{className:"continue-time",children:[Wr(b.progress_seconds)," of ",Wr(b.duration)," (",x,"%)"]})]}),a.jsx("div",{className:"continue-bar-track",children:a.jsx("div",{className:"continue-bar-fill",style:{width:`${x}%`}})})]})]},b.id)})})]}),p.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(u_,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recommended For You"})]})}),a.jsx("div",{className:"movie-grid-3d",children:p.slice(0,6).map(b=>a.jsx(zr,{movie:b,onSelect:s,onPlay:e,onToggleFavorite:y},b.id))})]}),d.recentlyAdded.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-title",children:[a.jsx(pi,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recently Added"})]}),r&&a.jsxs("button",{className:"section-see-all-btn",onClick:r,children:[a.jsx("span",{children:"View Full Library"}),a.jsx(co,{size:14})]})]}),a.jsx("div",{className:"movie-grid-3d",children:d.recentlyAdded.map(b=>a.jsx(zr,{movie:b,onSelect:s,onPlay:e,onToggleFavorite:y},b.id))})]}),d.genreCollections.map(({genre:b,movies:x})=>a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Bf,{size:19,color:"#A855F7"}),a.jsx("span",{children:b})]})}),a.jsx("div",{className:"movie-grid-3d",children:x.slice(0,6).map(M=>a.jsx(zr,{movie:M,onSelect:s,onPlay:e,onToggleFavorite:y},M.id))})]},b)),d.popular.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(xy,{size:19,color:"#22C55E"}),a.jsx("span",{children:"Popular & Most Watched"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.popular.map(b=>a.jsx(zr,{movie:b,onSelect:s,onPlay:e,onToggleFavorite:y},b.id))})]}),d.favorites.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Bi,{size:19,color:"#EF4444",fill:"#EF4444"}),a.jsx("span",{children:"Your Favorites"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.favorites.map(b=>a.jsx(zr,{movie:b,onSelect:s,onPlay:e,onToggleFavorite:y},b.id))})]})]}):a.jsxs("div",{className:"empty-state-3d",style:{marginTop:"60px"},children:[a.jsx(Ci,{size:48,className:"text-dim",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"Your Cinema Library is Empty"}),a.jsx("p",{children:"Connect and scan a movie folder on your host Windows PC to populate your personal streaming theater."}),l&&a.jsxs("button",{className:"btn-primary",onClick:l,children:[a.jsx(ex,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]})}function Uy({onSelectMovie:s,onPlayMovie:e,authFetch:t,onOpenFolderPicker:r,onNavigateCine3D:l}){const[c,d]=W.useState([]),[f,p]=W.useState(""),[m,_]=W.useState(""),[S,v]=W.useState(""),[y,w]=W.useState(""),[b,x]=W.useState(""),[M,L]=W.useState("all"),[k,A]=W.useState("recent"),[I,P]=W.useState("grid"),[E,D]=W.useState(!0),[J,z]=W.useState(!1),[V,ee]=W.useState(!1),[ie,j]=W.useState([]),[X,ne]=W.useState(null),[O,$]=W.useState(null),[q,Q]=W.useState(!1),[F,K]=W.useState(null),[Me,G]=W.useState(""),[ue,Se]=W.useState(!1),[Ee,ye]=W.useState(null),Ae=(U,$e="success")=>{ye({text:U,type:$e}),setTimeout(()=>{ye(null)},4500)},mt=()=>{D(!0);let U=`/api/movies?sort=${k}`;f.trim()&&(U+=`&q=${encodeURIComponent(f.trim())}`),m&&(U+=`&resolution=${encodeURIComponent(m)}`),S&&(U+=`&year=${encodeURIComponent(S)}`),y&&(U+=`&genre=${encodeURIComponent(y)}`),b&&(U+=`&artworkStatus=${encodeURIComponent(b)}`),t(U).then($e=>$e.json()).then($e=>{$e.movies&&d($e.movies)}).catch(()=>{}).finally(()=>D(!1))};W.useEffect(()=>{mt()},[f,m,S,y,b,k]);const Qe=async()=>{z(!0);try{const $e=await(await t("/api/admin/scan",{method:"POST"})).json();await mt(),Ae($e.message||"Library rescan complete!","success")}catch{Ae("Error during library scan","error")}z(!1)},vt=async U=>{try{const ft=await(await t(`/api/user/favorites/${U}`,{method:"POST"})).json();d(Mt=>Mt.map(Ie=>Ie.id===U?{...Ie,is_favorite:ft.favorited?1:0}:Ie))}catch{}},be=c.filter(U=>M==="watched"?U.progress_seconds&&U.duration&&U.progress_seconds/U.duration>=.9||U.completed===1:M==="unwatched"?!U.progress_seconds||U.progress_seconds<15:!0),Xe=Array.from(new Set(c.map(U=>U.year).filter(Boolean))).sort().reverse(),_t=be.reduce((U,$e)=>U+($e.file_size||0),0),Ye=!!(f||m||S||M!=="all"),dt=()=>{p(""),_(""),v(""),w(""),x(""),L("all")},ge=U=>{j($e=>$e.includes(U)?$e.filter(ft=>ft!==U):[...$e,U])},Be=()=>{ie.length===be.length?j([]):j(be.map(U=>U.id))},Ge=async()=>{if(X){try{const U=await t(`/api/movies/${X.id}/remove`,{method:"POST"}),$e=await U.json();U.ok?(d(ft=>ft.filter(Mt=>Mt.id!==X.id)),j(ft=>ft.filter(Mt=>Mt!==X.id)),Ae(`"${X.clean_title}" removed from library (file preserved on PC)`,"success")):Ae($e.error||"Failed to remove movie","error")}catch{Ae("Network error removing movie","error")}ne(null)}},bt=async()=>{if(O){try{const U=await t(`/api/movies/${O.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:O.clean_title})}),$e=await U.json();U.ok?(d(ft=>ft.filter(Mt=>Mt.id!==O.id)),j(ft=>ft.filter(Mt=>Mt!==O.id)),Ae(`Permanently deleted "${O.clean_title}" from disk`,"warn")):Ae($e.error||"Failed to delete movie file","error")}catch{Ae("Network error during file deletion","error")}$(null)}},Pt=async()=>{if(ie.length!==0){try{const U=await t("/api/movies/bulk/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieIds:ie})}),$e=await U.json();U.ok?(d(ft=>ft.filter(Mt=>!ie.includes(Mt.id))),Ae(`Removed ${$e.removedCount} movies from library (files preserved)`,"success"),j([]),ee(!1)):Ae($e.error||"Failed to bulk remove movies","error")}catch{Ae("Network error during bulk removal","error")}Q(!1)}},Pe=async U=>{if(U.preventDefault(),!(!F||!Me.trim())){Se(!0);try{const $e=await t(`/api/movies/${F.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:Me.trim()})}),ft=await $e.json();$e.ok?(Ae("Poster updated successfully!","success"),K(null),G(""),mt()):Ae(ft.error||"Failed to update poster","error")}catch{Ae("Network error saving poster","error")}finally{Se(!1)}}};return a.jsxs("div",{className:"library-page-3d",children:[Ee&&a.jsxs("div",{className:`app-toast-banner ${Ee.type}`,children:[Ee.type==="success"&&a.jsx(Zg,{size:16}),Ee.type==="warn"&&a.jsx(mc,{size:16}),Ee.type==="error"&&a.jsx(uo,{size:16}),a.jsx("span",{children:Ee.text})]}),a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{className:"page-header-info",children:[a.jsx("h1",{className:"page-header-title",children:"Movie Library"}),a.jsxs("p",{className:"page-header-subtitle",children:[be.length," movies available • Total size: ",si(_t)]})]}),a.jsxs("div",{className:"page-header-actions",children:[l&&a.jsxs("button",{className:"btn-primary",onClick:l,title:"Enter CINE-3D spatial cinema carousel",children:[a.jsx(pi,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"Launch CINE-3D"})]}),a.jsxs("button",{className:`btn-secondary ${V?"active":""}`,onClick:()=>{ee(!V),V&&j([])},title:V?"Cancel Selection":"Manage Multiple Movies",children:[a.jsx(pc,{size:15}),a.jsx("span",{children:V?"Cancel":"Manage"})]}),a.jsxs("div",{className:"view-mode-toggle",children:[a.jsx("button",{className:`view-toggle-btn ${I==="grid"?"active":""}`,onClick:()=>P("grid"),title:"Grid View",children:a.jsx(O_,{size:16})}),a.jsx("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>P("list"),title:"List View",children:a.jsx(j_,{size:16})})]}),a.jsxs("button",{className:`btn-secondary ${J?"rescan-spinning":""}`,onClick:Qe,disabled:J,title:"Scan movie folder for newly added or changed video files",children:[a.jsx(Vi,{size:15}),a.jsx("span",{children:J?"Scanning...":"Rescan Library"})]})]})]}),V&&a.jsxs("div",{className:"multi-select-toolbar",children:[a.jsxs("div",{className:"select-toolbar-left",children:[a.jsxs("button",{className:"select-all-btn",onClick:Be,children:[ie.length===be.length&&be.length>0?a.jsx(pc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"}),a.jsxs("span",{children:["Select All Visible (",be.length,")"]})]}),a.jsxs("span",{className:"selected-count-badge",children:[ie.length," movie",ie.length!==1?"s":""," selected"]})]}),a.jsxs("div",{className:"select-toolbar-right",children:[a.jsxs("button",{className:"btn-danger-sm",disabled:ie.length===0,onClick:()=>Q(!0),children:[a.jsx(Or,{size:14}),a.jsxs("span",{children:["Remove Selected (",ie.length,")"]})]}),a.jsx("button",{className:"btn-secondary-sm",onClick:()=>{ee(!1),j([])},children:a.jsx("span",{children:"Done"})})]})]}),a.jsxs("div",{className:"library-toolbar",children:[a.jsxs("div",{className:"toolbar-search-box",children:[a.jsx(ps,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Search movie title...",value:f,onChange:U=>p(U.target.value)}),f&&a.jsx("button",{className:"search-clear-btn",onClick:()=>p(""),title:"Clear search",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"toolbar-filters-group",children:[a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:y,onChange:U=>w(U.target.value),children:[a.jsx("option",{value:"",children:"All Genres"}),a.jsx("option",{value:"Action & Adventure",children:"Action & Adventure"}),a.jsx("option",{value:"Anime & Animation",children:"Anime & Animation"}),a.jsx("option",{value:"Horror & Suspense",children:"Horror & Suspense"}),a.jsx("option",{value:"Sci-Fi & Cyber",children:"Sci-Fi & Cyber"}),a.jsx("option",{value:"Thriller & Mystery",children:"Thriller & Mystery"}),a.jsx("option",{value:"Comedy",children:"Comedy"}),a.jsx("option",{value:"Cinema & Drama",children:"Cinema & Drama"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:m,onChange:U=>_(U.target.value),children:[a.jsx("option",{value:"",children:"All Resolutions"}),a.jsx("option",{value:"4K",children:"4K Ultra HD"}),a.jsx("option",{value:"1080P",children:"1080p Full HD"}),a.jsx("option",{value:"720P",children:"720p HD"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:S,onChange:U=>v(U.target.value),children:[a.jsx("option",{value:"",children:"All Years"}),Xe.map(U=>a.jsx("option",{value:U,children:U},U))]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:M,onChange:U=>L(U.target.value),children:[a.jsx("option",{value:"all",children:"All Status"}),a.jsx("option",{value:"unwatched",children:"Unwatched"}),a.jsx("option",{value:"watched",children:"Watched"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:b,onChange:U=>x(U.target.value),children:[a.jsx("option",{value:"",children:"All Artwork"}),a.jsx("option",{value:"missing",children:"Missing Artwork"}),a.jsx("option",{value:"uncertain",children:"Uncertain Matches"}),a.jsx("option",{value:"matched",children:"Matched Artwork"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:k,onChange:U=>A(U.target.value),children:[a.jsx("option",{value:"recent",children:"Recently Added"}),a.jsx("option",{value:"title",children:"Title (A-Z)"}),a.jsx("option",{value:"year",children:"Release Year"}),a.jsx("option",{value:"size",children:"Largest File Size"}),a.jsx("option",{value:"duration",children:"Longest Duration"})]})}),Ye&&a.jsxs("button",{className:"btn-clear-filters",onClick:dt,title:"Reset all search and filters",children:[a.jsx(Wi,{size:13}),a.jsx("span",{children:"Clear Filters"})]})]})]}),E?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning & loading movies..."})]}):be.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(Ci,{size:48,color:"var(--text-dim)",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"No Movies Found"}),a.jsx("p",{children:Ye?"No movies match your active search or filter criteria. Try clearing filters to see all available movies.":"You have not scanned a movie folder yet. Select a folder on your Windows PC to automatically populate your library."}),Ye?a.jsxs("button",{className:"btn-secondary",onClick:dt,children:[a.jsx(Wi,{size:15}),a.jsx("span",{children:"Clear Active Filters"})]}):r&&a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx(ex,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]}):I==="list"?a.jsx("div",{className:"movie-list-container",children:be.map(U=>a.jsx(zr,{movie:U,onSelect:s,onPlay:e,onToggleFavorite:vt,onChangePoster:$e=>{K($e),G("")},onRemoveMovie:$e=>ne($e),onDeleteFile:$e=>$($e),viewMode:"list",isSelectMode:V,isSelected:ie.includes(U.id),onToggleSelect:ge},U.id))}):a.jsx("div",{className:"movie-grid-3d",children:be.map(U=>a.jsx(zr,{movie:U,onSelect:s,onPlay:e,onToggleFavorite:vt,onChangePoster:$e=>{K($e),G("")},onRemoveMovie:$e=>ne($e),onDeleteFile:$e=>$($e),viewMode:"grid",isSelectMode:V,isSelected:ie.includes(U.id),onToggleSelect:ge},U.id))}),X&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>ne(null),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Or,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Remove from Library?"}),a.jsx("span",{className:"dialog-subtitle",children:X.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["This movie will be removed from your StreamLink library, but your ",a.jsx("strong",{children:"original video file will remain safe and untouched on your computer"}),"."]}),a.jsx("div",{className:"dialog-detail-box",children:a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Location:"}),a.jsx("code",{title:X.file_path,children:X.file_path})]})}),a.jsx("p",{className:"dialog-note",children:"StreamLink will remember this choice so the movie will not reappear when you rescan your library."})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>ne(null),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Ge,children:[a.jsx(Or,{size:15}),a.jsx("span",{children:"Remove from Library"})]})]})]})}),O&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>$(null),children:a.jsxs("div",{className:"dialog-card card-danger-border",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-danger",children:a.jsx(mc,{size:24})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title text-danger",children:"Permanently Delete Video File?"}),a.jsx("span",{className:"dialog-subtitle",children:O.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("div",{className:"danger-alert-box",children:[a.jsx("strong",{children:"WARNING: This action is permanent and cannot be undone!"}),a.jsx("p",{children:"The video file will be permanently deleted from your Windows hard drive."})]}),a.jsxs("div",{className:"dialog-detail-box",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Name:"}),a.jsx("code",{children:O.file_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Path:"}),a.jsx("code",{title:O.file_path,children:O.file_path})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Size:"}),a.jsx("code",{children:si(O.file_size)})]})]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>$(null),children:"Cancel"}),a.jsxs("button",{className:"btn-danger",onClick:bt,children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Permanently Delete File"})]})]})]})}),q&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>Q(!1),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Or,{size:22})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"dialog-title",children:["Remove ",ie.length," Movies from Library?"]}),a.jsx("span",{className:"dialog-subtitle",children:"Original files remain untouched on computer"})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["All ",a.jsxs("strong",{children:[ie.length," selected movies"]})," will be removed from your active StreamLink library."]}),a.jsxs("p",{className:"dialog-note",children:["Your original video files on your hard drive will ",a.jsx("strong",{children:"not"})," be deleted. StreamLink will keep them hidden so they will not reappear upon rescan."]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>Q(!1),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Pt,children:[a.jsx(Or,{size:15}),a.jsxs("span",{children:["Remove ",ie.length," Movies"]})]})]})]})}),F&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>K(null),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-accent",children:a.jsx(hc,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Change Movie Poster"}),a.jsx("span",{className:"dialog-subtitle",children:F.clean_title})]})]}),a.jsxs("form",{onSubmit:Pe,children:[a.jsxs("div",{className:"dialog-body",children:[a.jsx("p",{children:"Enter an image URL or a local image path on your PC (e.g. D:\\Posters\\cover.jpg):"}),a.jsx("input",{type:"text",className:"dialog-input",placeholder:"https://image.tmdb.org/... or C:\\path\\poster.jpg",value:Me,onChange:U=>G(U.target.value),autoFocus:!0,required:!0})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>K(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:ue,children:ue?"Downloading & Saving...":"Update Poster"})]})]})]})})]})}function Fy({authFetch:s}){var _t,Ye,dt;const[e,t]=W.useState("D:\\Movies"),[r,l]=W.useState("Movies"),[c,d]=W.useState(""),[f,p]=W.useState(""),[m,_]=W.useState(!1),[S,v]=W.useState(!1),[y,w]=W.useState(null),[b,x]=W.useState(""),[M,L]=W.useState([]),[k,A]=W.useState(!0),[I,P]=W.useState(null),[E,D]=W.useState(!1),[J,z]=W.useState(null),[V,ee]=W.useState(!1),[ie,j]=W.useState(null),[X,ne]=W.useState([]),[O,$]=W.useState(null),[q,Q]=W.useState(!1),F=async()=>{try{const Be=await(await s("/api/admin/drives")).json();Be.drives&&ne(Be.drives)}catch{}},K=async ge=>{try{const Be=await s(`/api/admin/browse-directory?path=${encodeURIComponent(ge)}`),Ge=await Be.json();if(Be.ok){$(Ge),t(Ge.currentPath);const bt=Ge.currentPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(bt)}}catch{}},Me=async()=>{try{A(!0);const Be=await(await s("/api/share/folder/links")).json();Be.links&&L(Be.links)}catch{}finally{A(!1)}},G=async()=>{try{const Be=await(await s("/api/share/info")).json();P(Be)}catch{}};W.useEffect(()=>{Me(),G(),F();const ge=setInterval(G,4e3);return()=>clearInterval(ge)},[]);const ue=async()=>{v(!0),x("Opening Windows Folder Dialog on your host PC screen...");try{const Be=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();if(Be.selectedPath){t(Be.selectedPath);const Ge=Be.selectedPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Ge),x(`Selected folder: ${Be.selectedPath}`),await Se(Be.selectedPath)}else x("Folder selection was cancelled.")}catch(ge){x(`Error opening Windows dialog: ${ge.message}`)}finally{v(!1)}},Se=async(ge=e)=>{if(ge){_(!0),x(`Scanning "${ge}" for video files and movie metadata...`),w(null),j(null);try{const Be=await s("/api/share/folder/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:ge})}),Ge=await Be.json();if(!Be.ok)throw new Error(Ge.error||"Scan failed");w(Ge),l(Ge.folderName),x(`Scan complete! Detected ${Ge.movieCount} movies in "${Ge.folderName}".`)}catch(Be){x(`Scan error: ${Be.message}`)}finally{_(!1)}}},Ee=async ge=>{if(ge&&ge.preventDefault(),!e){alert("Please select a folder first");return}ee(!0),x(`Registering folder "${r}" as a shared streaming resource...`);try{const Be=await s("/api/share/folder/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:e,folderName:r,label:c.trim()||`${r} Movies`,passcode:f.trim()})}),Ge=await Be.json();if(!Be.ok)throw new Error(Ge.error||"Failed to create share link");j(Ge.link),x(`Success! Sharing link generated for "${r}".`),d(""),p(""),await Me()}catch(Be){x(`Error generating link: ${Be.message}`)}finally{ee(!1)}},ye=async ge=>{try{const Be=await s(`/api/share/folder/toggle/${ge}`,{method:"POST"}),Ge=await Be.json();if(!Be.ok)throw new Error(Ge.error);await Me()}catch(Be){alert(Be.message)}},Ae=async(ge,Be)=>{if(window.confirm(`Delete sharing link for folder "${Be}"? Viewers will immediately lose access.`))try{const Ge=await s(`/api/share/folder/${ge}`,{method:"DELETE"}),bt=await Ge.json();if(!Ge.ok)throw new Error(bt.error);await Me(),(ie==null?void 0:ie.id)===ge&&j(null)}catch(Ge){alert(Ge.message)}},mt=async ge=>{try{x("Rescanning shared folder on disk...");const Be=await s(`/api/share/folder/rescan/${ge}`,{method:"POST"}),Ge=await Be.json();if(!Be.ok)throw new Error(Ge.error);x(Ge.message),await Me()}catch(Be){alert(Be.message)}},Qe=async ge=>{D(!0),x(`${ge==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const Be=await s(`/api/admin/tunnel/${ge}`,{method:"POST"}),Ge=await Be.json();if(!Be.ok)throw new Error(Ge.error||"Tunnel command failed");x(Ge.message),await G(),await Me()}catch(Be){x(`Tunnel error: ${Be.message}`)}finally{D(!1)}},vt=(ge,Be)=>{ge&&navigator.clipboard.writeText(ge).then(()=>{z(Be),setTimeout(()=>z(null),2500)})},be=((_t=I==null?void 0:I.remote)==null?void 0:_t.status)==="connected",Xe=((Ye=I==null?void 0:I.remote)==null?void 0:Ye.status)==="starting";return a.jsxs("div",{style:{padding:"0 0 60px"},children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(ic,{size:28,color:"var(--accent)"}),"Folder Sharing"]})}),a.jsx("p",{className:"page-sub-title",children:"Select any local movie folder on your Windows PC and generate a unique, secure streaming link. Viewers only see and stream movies inside the exact folder you choose."})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{className:`status-pill ${be?"status-pill-green":Xe?"status-pill-yellow":"status-pill-red"}`,children:be?"REMOTE TUNNEL ONLINE":Xe?"CONNECTING...":"LOCAL WI-FI ONLY"}),be?a.jsxs("button",{className:"btn-danger",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>Qe("stop"),disabled:E,title:"Stop Cloudflare Tunnel",children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Stop Tunnel"})]}):a.jsxs("button",{className:"btn-primary",style:{padding:"8px 14px",fontSize:"13px",background:"var(--success)"},onClick:()=>Qe("start"),disabled:E||Xe,title:"Start Cloudflare Tunnel to enable streaming outside home Wi-Fi",children:[a.jsx(dn,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Go Worldwide"})]})]})]}),b&&a.jsx("div",{className:"folder-status-box",style:{margin:"0 32px 20px"},children:b}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:30,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"11px",color:"var(--text-dim)",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"SELECTED FOLDER TO SHARE"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"var(--text-primary)",marginTop:"2px"},children:r}),a.jsx("div",{className:"folder-path-display",title:e,style:{marginTop:"4px"},children:e})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 22px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:ue,disabled:S||m,children:[a.jsx(Hf,{size:17}),a.jsx("span",{children:"Select Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Q(!q),children:[a.jsx($i,{size:16}),a.jsx("span",{children:q?"Hide Browser":"Browse Drives"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Se(e),disabled:m||S,children:[a.jsx(Vi,{size:16,className:m?"spin":""}),a.jsx("span",{children:m?"Scanning...":"Scan Folder"})]})]})]}),q&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"10px",fontWeight:600},children:"Select Windows Drive Letter or Navigate Subdirectories:"}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:X.map(ge=>a.jsxs("button",{className:`drive-pill ${e.startsWith(ge)?"active":""}`,onClick:()=>K(ge),children:[a.jsx($i,{size:13}),a.jsx("span",{children:ge})]},ge))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[a.jsx("input",{type:"text",value:e,onChange:ge=>{t(ge.target.value);const Be=ge.target.value.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Be)},placeholder:"Type full folder path (e.g. D:\\Movies\\Action)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>K(e),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>Se(e),disabled:m,children:"Scan"})]}),O&&a.jsxs("div",{className:"folder-list-container",children:[O.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>K(O.parentPath),children:[a.jsx(hs,{size:15,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(dt=O.folders)==null?void 0:dt.map(ge=>a.jsxs("div",{className:"folder-list-item",onClick:()=>K(ge.path),children:[a.jsx(hs,{size:15,color:"#fbbf24"}),a.jsx("span",{children:ge.name})]},ge.path))]})]}),y&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Wd,{size:18,color:"var(--success)"}),a.jsxs("span",{style:{fontWeight:700,fontSize:"15px"},children:[y.movieCount,' Movies Found in "',y.folderName,'"']}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["(",si(y.totalBytes),")"]})]}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:["Location: ",y.folderPath]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxHeight:"140px",overflowY:"auto",padding:"4px 0"},children:y.movies.map(ge=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--bg-card)",padding:"6px 12px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)",fontSize:"12px"},children:[a.jsx(Ci,{size:13,color:"var(--info)"}),a.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)"},children:ge.clean_title}),ge.resolution&&a.jsx("span",{style:{color:"var(--info)",fontSize:"10px",fontWeight:700},children:ge.resolution}),a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"11px"},children:si(ge.file_size)})]},ge.id))})]}),a.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"18px"},children:[a.jsx("div",{style:{fontSize:"15px",fontWeight:800,marginBottom:"6px"},children:"Generate Secure Sharing Link"}),a.jsxs("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"16px"},children:['Creates a unique web access link restricted exclusively to movies in "',r,'". Viewers cannot view any other folders, files, or settings on your PC.']}),a.jsxs("form",{onSubmit:Ee,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Link Name / Label:"}),a.jsx("input",{type:"text",value:c,onChange:ge=>d(ge.target.value),placeholder:`e.g. ${r} Movies`,style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",value:f,onChange:ge=>p(ge.target.value),placeholder:"e.g. 1234 (leave blank for open access)",style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",height:"42px",padding:"10px 20px",fontSize:"14px",gap:"8px"},disabled:V||!e,children:[a.jsx(Gf,{size:16}),a.jsx("span",{children:V?"Creating...":"Generate Sharing Link"})]})})]})]})]}),ie&&a.jsxs("div",{style:{margin:"0 32px 28px",background:"linear-gradient(135deg, rgba(139,124,255,0.12) 0%, rgba(56,189,248,0.06) 100%)",border:"1px solid rgba(139,124,255,0.35)",borderRadius:"var(--radius-lg)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Wd,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800},children:"New Sharing Link Live!"}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["Sharing ",ie.movie_count," movies from folder: ",a.jsx("strong",{children:ie.folder_name})]})]})]}),a.jsx("span",{className:"status-pill status-pill-green",children:"ACTIVE & READY"})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"260px"},children:[a.jsx("span",{className:"link-text-mono",children:ie.activeUrl}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>vt(ie.activeUrl,"new_created"),children:[J==="new_created"?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:J==="new_created"?"Copied":"Copy Link"})]})]}),a.jsxs("a",{href:ie.activeUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 16px",fontSize:"13px"},children:[a.jsx(Om,{size:15}),a.jsx("span",{children:"Open Sharing Page"})]})]}),ie.qrCode&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"16px",padding:"12px 16px",background:"var(--bg-secondary)",borderRadius:"var(--radius-sm)"},children:[a.jsx("img",{src:ie.qrCode,alt:"QR Code",style:{width:"80px",height:"80px",borderRadius:"6px",background:"#fff",padding:"4px"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",fontWeight:700},children:"Scan with Phone Camera"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginTop:"2px"},children:"Anyone who scans this code can immediately stream movies from this folder on their phone."})]})]})]}),a.jsxs("div",{style:{margin:"0 32px"},children:[a.jsxs("div",{className:"section-header",style:{padding:"0 0 16px 0"},children:[a.jsxs("div",{className:"section-title",children:[a.jsx(ic,{size:20,color:"var(--primary)"}),a.jsxs("span",{children:["Active Shared Folders (",M.length,")"]})]}),a.jsxs("button",{className:"btn-secondary",onClick:Me,title:"Refresh Shares",children:[a.jsx(Vi,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),k?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading shared folders..."})]}):M.length===0?a.jsxs("div",{className:"empty-state-3d",style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[a.jsx(ic,{size:44,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Folders Shared Yet"}),a.jsx("p",{children:'Select a movie folder above (e.g. D:\\Movies) and click "Generate Sharing Link" to create your first independent folder share link.'})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:M.map(ge=>{const Be=ge.activeUrl,Ge=ge.is_active===1;return a.jsxs("div",{style:{background:"var(--bg-card)",border:`1px solid ${Ge?"var(--border)":"rgba(239,68,68,0.2)"}`,borderRadius:"var(--radius-lg)",padding:"20px",display:"flex",flexDirection:"column",gap:"14px",opacity:Ge?1:.75,transition:"border-color var(--transition)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",background:Ge?"rgba(139,124,255,0.15)":"rgba(255,255,255,0.05)",border:Ge?"1px solid rgba(139,124,255,0.3)":"1px solid var(--border)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:Ge?"var(--accent)":"var(--text-dim)",flexShrink:0},children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:800,color:"var(--text-primary)"},children:ge.label||ge.folder_name}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--info)",fontWeight:600},children:["(",ge.movie_count," movies)"]}),ge.hasPasscode&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"2px 8px",borderRadius:"4px"},children:[a.jsx(Cc,{size:11}),"PIN Protected"]})]}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-dim)",fontFamily:"monospace",marginTop:"2px"},title:ge.folder_path,children:["Path: ",ge.folder_path]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`status-pill ${Ge?"status-pill-green":"status-pill-red"}`,children:Ge?"SHARING ACTIVE":"DISABLED"}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:[ge.access_count," streams"]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"240px"},children:[a.jsx("span",{className:"link-text-mono",children:Be}),a.jsxs("button",{className:"btn-secondary",style:{padding:"7px 12px",fontSize:"12px"},onClick:()=>vt(Be,`folder_${ge.id}`),title:"Copy Sharing Link",children:[J===`folder_${ge.id}`?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:J===`folder_${ge.id}`?"Copied":"Copy"})]})]}),a.jsxs("a",{href:Be,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"9px 14px",fontSize:"13px"},title:"Open sharing viewer in a new tab",children:[a.jsx(Om,{size:14}),a.jsx("span",{children:"Open Sharing Page"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap",borderTop:"1px solid var(--border)",paddingTop:"10px"},children:[a.jsxs("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12px"},onClick:()=>mt(ge.id),title:"Rescan folder for new or deleted movies",children:[a.jsx(Vi,{size:13}),a.jsx("span",{children:"Rescan Folder"})]}),a.jsxs("button",{className:Ge?"btn-secondary":"btn-success",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>ye(ge.id),children:[Ge?a.jsx(Qg,{size:13}):a.jsx(Jg,{size:13}),a.jsx("span",{children:Ge?"Disable Sharing":"Enable Sharing"})]}),a.jsxs("button",{className:"btn-danger",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Ae(ge.id,ge.label||ge.folder_name),children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Delete Share"})]})]})]},ge.id)})})]})]})}function Oy({authFetch:s,onScanSuccess:e,onViewLibrary:t}){var ie,j;const[r,l]=W.useState("D:\\Movies"),[c,d]=W.useState(!1),[f,p]=W.useState(0),[m,_]=W.useState(0),[S,v]=W.useState([]),[y,w]=W.useState(null),[b,x]=W.useState(!1),[M,L]=W.useState(!1),[k,A]=W.useState(""),[I,P]=W.useState(null),E=async()=>{try{const ne=await(await s("/api/admin/dashboard-stats")).json();ne.library&&(l(ne.library.folder||"D:\\Movies"),d(ne.library.folderExists),p(ne.library.totalMovies),_(ne.library.totalDiskBytes))}catch{}},D=async()=>{try{const ne=await(await s("/api/admin/drives")).json();ne.drives&&v(ne.drives)}catch{}},J=async X=>{try{const ne=await s(`/api/admin/browse-directory?path=${encodeURIComponent(X)}`),O=await ne.json();ne.ok&&(w(O),l(O.currentPath))}catch{}};W.useEffect(()=>{E(),D()},[]);const z=async()=>{L(!0),A("Opening Windows Folder Dialog on your PC host screen...");try{const ne=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();ne.selectedPath?(l(ne.selectedPath),A(`Selected from Windows Dialog: ${ne.selectedPath}`),await V(ne.selectedPath)):A("Folder selection was cancelled.")}catch(X){A(`Error launching Windows dialog: ${X.message}`)}finally{L(!1)}},V=async(X=r)=>{if(X){x(!0),A(`Scanning "${X}" for video files and metadata...`),P(null);try{const ne=await s("/api/admin/library-folder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folder:X})}),O=await ne.json();if(!ne.ok)throw new Error(O.error||"Scan failed");P(O.scanResult),A(`Scan complete! Found ${O.scanResult.totalFiles} files (${O.scanResult.added} new, ${O.scanResult.updated} verified).`),await E(),e&&e(X)}catch(ne){A(`Scan Error: ${ne.message}`)}finally{x(!1)}}},ee=async()=>{x(!0),A("Rescanning library folder for new or removed movies...");try{const X=await s("/api/admin/rescan",{method:"POST"}),ne=await X.json();if(!X.ok)throw new Error(ne.error||"Rescan failed");P(ne.scanResult),A(`Rescan complete! ${ne.scanResult.totalFiles} movies in library.`),await E()}catch(X){A(`Rescan Error: ${X.message}`)}finally{x(!1)}};return a.jsxs("div",{className:"folder-page-container",children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Movie Folder Management"}),a.jsx("p",{className:"page-sub-title",children:"Select any local folder on your Windows PC to automatically scan, index, and stream your movies."})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"10px 20px",gap:"8px"},onClick:()=>V(),disabled:b||M,children:[a.jsx(Vi,{size:16,className:b?"spin":""}),a.jsx("span",{children:b?"Scanning...":"Scan Movies"})]}),a.jsx("button",{className:"btn-secondary",onClick:ee,disabled:b||M,children:a.jsx("span",{children:"Refresh Library"})})]})]}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:28,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)",fontWeight:600},children:"CURRENT MOVIE DIRECTORY"}),a.jsx("div",{className:"folder-path-display",title:r,children:r})]})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:a.jsxs("div",{className:`folder-status-pill ${c?"status-connected":"status-missing"}`,children:[c?a.jsx(Wd,{size:15}):a.jsx(mc,{size:15}),a.jsx("span",{children:c?"Connected & Accessible":"Path Not Found on Host PC"})]})})]}),a.jsxs("div",{className:"folder-actions-row",children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 24px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:z,disabled:M||b,children:[a.jsx(Hf,{size:18}),a.jsx("span",{children:"Select Movie Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>J(r),children:[a.jsx(ao,{size:16}),a.jsx("span",{children:"Change Folder via Browser"})]})]}),a.jsxs("div",{className:"folder-stats-bar",children:[a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Total Movies Detected:"}),a.jsx("span",{className:"folder-stat-val text-red",children:f})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Library Storage Size:"}),a.jsx("span",{className:"folder-stat-val text-blue",children:si(m)})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Host Machine Location:"}),a.jsx("span",{className:"folder-stat-val",style:{color:"#cbd5e1"},children:"Local Windows Filesystem"})]})]})]}),k&&a.jsxs("div",{className:"folder-status-box",children:[a.jsx("span",{style:{fontWeight:600},children:k}),I&&a.jsxs("div",{style:{fontSize:"12px",marginTop:"6px",color:"var(--text-muted)"},children:["Summary: ",I.totalFiles," video files found | ",I.added," added | ",I.updated," updated | ",I.deleted," dead links removed"]})]}),a.jsxs("div",{className:"folder-browser-section",children:[a.jsxs("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx($i,{size:18,color:"#38bdf8"}),a.jsx("span",{children:"Interactive Filesystem Navigator"})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"},children:S.map(X=>a.jsxs("button",{className:`drive-pill ${r.startsWith(X)?"active":""}`,onClick:()=>J(X),children:[a.jsx($i,{size:14}),a.jsx("span",{children:X})]},X))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"14px"},children:[a.jsx("input",{type:"text",value:r,onChange:X=>l(X.target.value),placeholder:"Type path (e.g. D:\\Movies or C:\\Users\\ASUS\\Downloads)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>J(r),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>V(r),disabled:b,children:"Set & Scan"})]}),y&&a.jsxs("div",{className:"folder-list-container",children:[y.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>J(y.parentPath),children:[a.jsx(ao,{size:16,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(ie=y.folders)==null?void 0:ie.map(X=>a.jsxs("div",{className:"folder-list-item",onClick:()=>J(X.path),children:[a.jsx(ao,{size:16,color:"#fbbf24"}),a.jsx("span",{children:X.name})]},X.path)),((j=y.folders)==null?void 0:j.length)===0&&a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-dim)",fontSize:"13px"},children:"No subdirectories in this path."})]})]})]})}function zy({authFetch:s}){var X,ne,O,$,q,Q,F,K,Me;const[e,t]=W.useState(null),[r,l]=W.useState([]),[c,d]=W.useState([]),[f,p]=W.useState(null),[m,_]=W.useState(!1),[S,v]=W.useState(""),[y,w]=W.useState("library"),[b,x]=W.useState(""),[M,L]=W.useState(""),[k,A]=W.useState(""),I=async()=>{try{const ue=await(await s("/api/share/info")).json();t(ue)}catch{}},P=async()=>{try{const ue=await(await s("/api/share/links")).json();ue.links&&l(ue.links)}catch{}},E=async()=>{try{const ue=await(await s("/api/movies")).json();ue.movies&&d(ue.movies)}catch{}};W.useEffect(()=>{I(),P(),E();const G=setInterval(I,3500);return()=>clearInterval(G)},[]);const D=(G,ue)=>{G&&navigator.clipboard.writeText(G).then(()=>{p(ue),setTimeout(()=>p(null),2500)})},J=async G=>{_(!0),v(`${G==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const ue=await s(`/api/admin/tunnel/${G}`,{method:"POST"}),Se=await ue.json();if(!ue.ok)throw new Error(Se.error||"Tunnel command failed");v(Se.message),await I()}catch(ue){v(`Tunnel error: ${ue.message}`)}finally{_(!1)}},z=async G=>{G.preventDefault();try{const ue=await s("/api/share/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:y,movieId:y==="movie"?parseInt(b,10):null,passcode:M.trim(),label:k.trim()})}),Se=await ue.json();if(!ue.ok)throw new Error(Se.error||"Failed to generate link");v("New sharing link created successfully!"),L(""),A(""),await P()}catch(ue){alert(ue.message)}},V=async G=>{if(window.confirm("Revoke this share link? Viewers will no longer be able to access it."))try{const ue=await s(`/api/share/revoke/${G}`,{method:"POST"}),Se=await ue.json();if(!ue.ok)throw new Error(Se.error);await P()}catch(ue){alert(ue.message)}},ee=((X=e==null?void 0:e.remote)==null?void 0:X.status)==="connected",ie=((ne=e==null?void 0:e.remote)==null?void 0:ne.status)==="starting",j=(G,ue=!0)=>{var Ee,ye;return`${ue&&((Ee=e==null?void 0:e.remote)!=null&&Ee.publicUrl)?e.remote.publicUrl:((ye=e==null?void 0:e.local)==null?void 0:ye.url)||"http://localhost:5050"}/?share=${G}`};return a.jsxs("div",{className:"sharing-page-container",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Sharing & Network Access"}),a.jsx("p",{className:"page-sub-title",children:"Generate simple direct access links for remote friends and local Wi-Fi devices to stream movies from your PC."})]})}),S&&a.jsx("div",{className:"folder-status-box",style:{marginBottom:"20px"},children:S}),a.jsxs("div",{className:"sharing-sections-grid",children:[a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Ry,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section A: Local Network Access"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Same-Wi-Fi Home Streaming"})]})]}),a.jsx("span",{className:"status-pill-green",children:"LAN ONLINE"})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.5},children:"Any phone, tablet, smart TV or laptop connected to your home Wi-Fi network can open this address to browse and stream."}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",children:((O=e==null?void 0:e.local)==null?void 0:O.url)||"Detecting local IP..."}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var G;return D((G=e==null?void 0:e.local)==null?void 0:G.url,"local")},children:[f==="local"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:f==="local"?"Copied":"Copy"})]})]}),(($=e==null?void 0:e.local)==null?void 0:$.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone Camera (Same Wi-Fi)"}),a.jsx("img",{src:e.local.qrCode,alt:"Local QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]}),a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Tc,{size:22,color:"#38bdf8"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section B: Remote Access (Cloudflare Tunnel)"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Worldwide Internet Streaming"})]})]}),a.jsx("span",{className:`status-pill ${ee?"status-pill-green":ie?"status-pill-yellow":"status-pill-red"}`,children:((Q=(q=e==null?void 0:e.remote)==null?void 0:q.status)==null?void 0:Q.toUpperCase())||"STOPPED"})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{flex:1,background:ee?"var(--bg-secondary)":"var(--success)"},onClick:()=>J("start"),disabled:m||ee,children:[a.jsx(dn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"START TUNNEL"})]}),a.jsxs("button",{className:"btn-danger",style:{flex:1},onClick:()=>J("stop"),disabled:m||!ee&&!ie,children:[a.jsx(ca,{size:16,fill:"currentColor"}),a.jsx("span",{children:"STOP TUNNEL"})]})]}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",style:{color:"#38bdf8"},children:((F=e==null?void 0:e.remote)==null?void 0:F.publicUrl)||(ie?"Connecting to Cloudflare edge...":"Tunnel stopped — Click START TUNNEL")}),((K=e==null?void 0:e.remote)==null?void 0:K.publicUrl)&&a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var G;return D((G=e==null?void 0:e.remote)==null?void 0:G.publicUrl,"public")},children:[f==="public"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:f==="public"?"Copied":"Copy"})]})]}),((Me=e==null?void 0:e.remote)==null?void 0:Me.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone (Worldwide Access)"}),a.jsx("img",{src:e.remote.qrCode,alt:"Remote QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]})]}),a.jsxs("div",{className:"share-generator-card",children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800,marginBottom:"6px"},children:"Generate Custom Sharing Links"}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"18px"},children:"Create tailored streaming links. Viewers who open these links do not need an account — they can immediately stream the movies authorized by the link."}),a.jsxs("form",{onSubmit:z,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Sharing Scope:"}),a.jsxs("select",{value:y,onChange:G=>w(G.target.value),style:{width:"100%"},children:[a.jsx("option",{value:"library",children:"Entire Movie Library"}),a.jsx("option",{value:"movie",children:"Single Individual Movie"})]})]}),y==="movie"&&a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Select Movie:"}),a.jsxs("select",{value:b,onChange:G=>x(G.target.value),required:!0,style:{width:"100%"},children:[a.jsx("option",{value:"",children:"-- Choose Movie --"}),c.map(G=>a.jsx("option",{value:G.id,children:G.clean_title},G.id))]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",placeholder:"e.g. 1234 (optional)",value:M,onChange:G=>L(G.target.value),style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Note / Label:"}),a.jsx("input",{type:"text",placeholder:"e.g. Link for John",value:k,onChange:G=>A(G.target.value),style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"10px",height:"42px"},children:[a.jsx(Gf,{size:16}),a.jsx("span",{children:"Create Link"})]})})]})]}),a.jsxs("div",{className:"active-links-section",children:[a.jsxs("h3",{style:{fontSize:"17px",fontWeight:700,marginBottom:"14px"},children:["Active Sharing Links (",r.length,")"]}),a.jsx("div",{style:{overflowX:"auto",background:"var(--bg-card)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:a.jsxs("table",{className:"sessions-table-3d",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Scope"}),a.jsx("th",{children:"Label / Target"}),a.jsx("th",{children:"Security"}),a.jsx("th",{children:"Views"}),a.jsx("th",{children:"Remote Sharing Link"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:r.map(G=>{const ue=j(G.token,!0);return j(G.token,!1),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:`role-pill ${G.type==="movie"?"viewer":"admin"}`,children:G.type.toUpperCase()})}),a.jsxs("td",{children:[a.jsx("strong",{children:G.label||"Standard Link"}),G.movie_title&&a.jsx("div",{style:{fontSize:"12px",color:"#38bdf8"},children:G.movie_title})]}),a.jsx("td",{children:G.passcode?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#fbbf24",fontSize:"12px"},children:[a.jsx(Cc,{size:13}),a.jsx("span",{children:"PIN Protected"})]}):a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"12px"},children:"Direct Access"})}),a.jsx("td",{children:G.access_count}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontFamily:"monospace",fontSize:"12px",color:"#38bdf8",maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:ue,children:ue}),a.jsx("button",{className:"btn-secondary",style:{padding:"4px 8px",fontSize:"11px"},onClick:()=>D(ue,`link_${G.id}`),title:"Copy Remote Link",children:f===`link_${G.id}`?a.jsx(wn,{size:13,color:"var(--success)"}):a.jsx(aa,{size:13})})]})}),a.jsx("td",{children:a.jsxs("button",{className:"btn-danger",style:{padding:"5px 10px",fontSize:"12px"},onClick:()=>V(G.id),title:"Revoke Link",children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Revoke"})]})})]},G.id)})})]})})]})]})}function jy({onSelectMovie:s,onPlayMovie:e,authFetch:t}){const[r,l]=W.useState([]),[c,d]=W.useState(!0),f=()=>{d(!0),t("/api/user/favorites").then(m=>m.json()).then(m=>{m.favorites&&l(m.favorites.map(_=>({..._,is_favorite:1})))}).catch(()=>{}).finally(()=>d(!1))};W.useEffect(()=>{f()},[]);const p=async m=>{try{await t(`/api/user/favorites/${m}`,{method:"POST"}),l(_=>_.filter(S=>S.id!==m))}catch{}};return a.jsxs("div",{className:"favorites-page-shell",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(Bi,{size:26,fill:"var(--accent)",color:"var(--accent)"}),"My Favorites"]})}),a.jsx("p",{className:"page-sub-title",children:"Movies you've marked as favorites for quick access."})]})}),c?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading your favorites..."})]}):r.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(Bi,{size:48,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Favorites Yet"}),a.jsx("p",{children:"Browse your movie library and tap the heart icon on any poster to add it to your favorites collection."})]}):a.jsx("div",{className:"movie-grid-3d",children:r.map(m=>a.jsx(zr,{movie:m,onSelect:s,onPlay:e,onToggleFavorite:p},m.id))})]})}function By({authFetch:s,onOpenFolderPicker:e,onOpenShareModal:t}){var mt,Qe,vt,be,Xe,_t,Ye,dt,ge,Be,Ge,bt,Pt;const[r,l]=W.useState(null),[c,d]=W.useState([]),[f,p]=W.useState(!1),[m,_]=W.useState(!1),[S,v]=W.useState(""),[y,w]=W.useState({total:0,matched:0,uncertain:0,missing:0,hasApiKey:!1}),[b,x]=W.useState(""),[M,L]=W.useState(""),[k,A]=W.useState(!1),[I,P]=W.useState(""),[E,D]=W.useState(""),[J,z]=W.useState(""),[V,ee]=W.useState(""),[ie,j]=W.useState(""),X=()=>{s("/api/admin/dashboard-stats").then(Pe=>Pe.json()).then(Pe=>l(Pe)).catch(()=>{})},ne=()=>{s("/api/auth/users").then(Pe=>Pe.json()).then(Pe=>{Pe.users&&d(Pe.users)}).catch(()=>{})},O=()=>{s("/api/movies/metadata/status").then(Pe=>Pe.json()).then(Pe=>w(Pe)).catch(()=>{})},$=()=>{s("/api/admin/settings").then(Pe=>Pe.json()).then(Pe=>{var U;(U=Pe.settings)!=null&&U.tmdb_api_key&&x(Pe.settings.tmdb_api_key)}).catch(()=>{})};W.useEffect(()=>{X(),ne(),O(),$();const Pe=setInterval(X,3e3);return()=>clearInterval(Pe)},[]);const q=async Pe=>{Pe.preventDefault(),L("");try{(await s("/api/admin/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdb_api_key:b.trim()})})).ok&&(L("TMDB API Key saved successfully!"),O(),setTimeout(()=>L(""),3e3))}catch{L("Failed to save API key")}},Q=async()=>{A(!0),P("Recognizing movies and caching high-res artwork...");try{const U=await(await s("/api/movies/batch/recognize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:40})})).json();P(U.message||"Auto-recognition finished."),O(),X()}catch(Pe){P(`Error: ${Pe.message}`)}finally{A(!1)}},F=async Pe=>{_(!0),v(`Applying server ${Pe}...`);try{const U=await s(`/api/admin/server/${Pe}`,{method:"POST"}),$e=await U.json();if(!U.ok)throw new Error($e.error||`${Pe} failed`);v($e.message||`Server ${Pe} completed successfully.`),X()}catch(U){v(`Error: ${U.message}`)}finally{_(!1)}},K=async()=>{_(!0),v("Scanning movie folder for new files...");try{const Pe=await s("/api/admin/rescan",{method:"POST"}),U=await Pe.json();if(!Pe.ok)throw new Error(U.error||"Rescan failed");v(U.message||"Library rescan complete."),X()}catch(Pe){v(`Error: ${Pe.message}`)}finally{_(!1)}},Me=()=>{var U;const Pe=(U=r==null?void 0:r.tunnel)==null?void 0:U.publicUrl;Pe&&navigator.clipboard.writeText(Pe).then(()=>{p(!0),setTimeout(()=>p(!1),2500)})},G=async Pe=>{Pe.preventDefault(),ee(""),j("");try{const U=await s("/api/auth/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:E,password:J,role:"viewer"})}),$e=await U.json();if(!U.ok)throw new Error($e.error||"Failed to create user");j(`Viewer account "${E}" created!`),D(""),z(""),ne()}catch(U){ee(U.message)}},ue=async(Pe,U)=>{if(window.confirm(`Delete viewer account "${U}"?`))try{const $e=await s(`/api/auth/users/${Pe}`,{method:"DELETE"}),ft=await $e.json();if(!$e.ok)throw new Error(ft.error);ne()}catch($e){alert($e.message)}},Se=()=>{window.open(gn(`/api/admin/backup?token=${encodeURIComponent(localStorage.getItem("streamlink_token"))}`),"_blank")},Ee=Pe=>{const U=Pe.target.files[0];if(!U)return;const $e=new FileReader;$e.onload=async ft=>{try{const Mt=JSON.parse(ft.target.result),Ie=await s("/api/admin/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(Mt)}),Wt=await Ie.json();if(!Ie.ok)throw new Error(Wt.error);alert("Backup successfully restored!"),X()}catch(Mt){alert(`Restore error: ${Mt.message}`)}},$e.readAsText(U)},ye=((mt=r==null?void 0:r.tunnel)==null?void 0:mt.status)==="connected",Ae=((Qe=r==null?void 0:r.tunnel)==null?void 0:Qe.status)==="starting";return a.jsxs("div",{className:"dash-container",children:[a.jsxs("div",{className:"dash-page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"dash-page-title",children:"Server Dashboard"}),a.jsx("p",{className:"dash-page-desc",children:"Manage your movie storage, remote streaming link, and viewer accounts."})]}),a.jsxs("div",{className:"dash-header-actions",children:[a.jsxs("button",{className:"btn-secondary",onClick:K,disabled:m,title:"Scan your movie folder for newly added files",children:[a.jsx(Vi,{size:14,className:m?"dash-spin":""}),a.jsx("span",{children:"Rescan Library"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>F("restart"),disabled:m,title:"Restart the local StreamLink server",children:[a.jsx(rc,{size:14}),a.jsx("span",{children:"Restart Server"})]})]})]}),S&&a.jsxs("div",{className:"dash-status-toast",children:[a.jsx("span",{children:S}),a.jsx("button",{onClick:()=>v(""),className:"dash-toast-close",title:"Dismiss",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"dash-sections-stack",children:[a.jsxs("div",{className:"dash-panel dash-panel-highlight",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx("div",{className:`dash-status-indicator ${ye?"indicator-online":Ae?"indicator-starting":"indicator-offline"}`}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Remote Access"}),a.jsx("p",{className:"dash-panel-sub",children:ye?"Your movie library is securely accessible from anywhere.":Ae?"Connecting encrypted remote streaming tunnel...":"Stream outside your home network on phones, tablets, or remote browsers."})]})]}),a.jsx("div",{children:ye?a.jsxs("button",{className:"btn-secondary dash-btn-danger",onClick:()=>F("stop"),disabled:m,children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Pause Remote Access"})]}):a.jsxs("button",{className:"btn-primary",onClick:()=>F("start"),disabled:m||Ae,children:[a.jsx(dn,{size:14,fill:"currentColor"}),a.jsx("span",{children:Ae?"Connecting...":"Enable Remote Access"})]})})]}),ye&&((vt=r==null?void 0:r.tunnel)!=null&&vt.publicUrl)?a.jsxs("div",{className:"dash-link-bar",children:[a.jsxs("div",{className:"dash-link-content",children:[a.jsx("span",{className:"dash-link-label",children:"Your Live Streaming Link:"}),a.jsx("span",{className:"dash-link-url",title:r.tunnel.publicUrl,children:r.tunnel.publicUrl})]}),a.jsxs("div",{className:"dash-link-buttons",children:[a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:Me,title:"Copy link to clipboard",children:[f?a.jsx(wn,{size:14,color:"#10B981"}):a.jsx(aa,{size:14}),a.jsx("span",{children:f?"Copied!":"Copy"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:t,title:"Display QR Code for mobile",children:[a.jsx(Q_,{size:14}),a.jsx("span",{children:"QR Code"})]}),a.jsxs("a",{href:r.tunnel.publicUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary dash-btn-compact",title:"Open live link in new tab",children:[a.jsx(K0,{size:14}),a.jsx("span",{children:"Open"})]})]})]}):a.jsxs("div",{className:"dash-link-offline",children:[a.jsx(Tc,{size:16}),a.jsxs("span",{children:["Local in-home access is available at ",a.jsx("code",{className:"dash-code",children:"http://localhost:5050"}),'. Click "Enable Remote Access" to securely share outside home.']})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx($i,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Movie Storage"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:e,title:"Select another folder on your computer",children:[a.jsx(ao,{size:14}),a.jsx("span",{children:"Change Folder"})]})]}),a.jsxs("div",{className:"dash-storage-box",children:[a.jsxs("div",{className:"dash-folder-info",children:[a.jsx(ao,{size:15,className:"dash-folder-icon"}),a.jsx("span",{className:"dash-folder-text",title:(be=r==null?void 0:r.library)==null?void 0:be.folder,children:((Xe=r==null?void 0:r.library)==null?void 0:Xe.folder)||"No folder selected"})]}),a.jsx("span",{className:`dash-badge ${(_t=r==null?void 0:r.library)!=null&&_t.folderExists?"badge-success":"badge-error"}`,children:(Ye=r==null?void 0:r.library)!=null&&Ye.folderExists?"Connected":"Folder Not Found"})]}),a.jsxs("div",{className:"dash-metrics-grid",children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Movies"}),a.jsx("span",{className:"dash-metric-number",children:((dt=r==null?void 0:r.library)==null?void 0:dt.totalMovies)||0})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Disk Storage"}),a.jsx("span",{className:"dash-metric-number",children:si((ge=r==null?void 0:r.library)==null?void 0:ge.totalDiskBytes)})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Server Port"}),a.jsxs("span",{className:"dash-metric-number",children:[":",((Be=r==null?void 0:r.server)==null?void 0:Be.port)||5050]})]})]})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Yg,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Now Playing"})]}),a.jsxs("span",{className:"dash-pill-counter",children:[((Ge=r==null?void 0:r.streaming)==null?void 0:Ge.activeViewersCount)||0," Active"]})]}),((Pt=(bt=r==null?void 0:r.streaming)==null?void 0:bt.activeSessions)==null?void 0:Pt.length)===0?a.jsxs("div",{className:"dash-empty-state",children:[a.jsx(Vf,{size:24,className:"dash-empty-icon"}),a.jsx("p",{className:"dash-empty-title",children:"No one is streaming right now"}),a.jsx("p",{className:"dash-empty-sub",children:"When movies are played on connected phones or browsers, real-time viewer details will appear here."})]}):a.jsx("div",{className:"dash-sessions-list",children:r.streaming.activeSessions.map(Pe=>a.jsxs("div",{className:"dash-session-row",children:[a.jsx("div",{className:"dash-session-avatar",children:Pe.username.charAt(0).toUpperCase()}),a.jsxs("div",{className:"dash-session-text",children:[a.jsx("span",{className:"dash-session-movie",children:Pe.movieTitle}),a.jsxs("span",{className:"dash-session-user",children:[Pe.username," (",Pe.ip,")"]})]}),a.jsx("span",{className:"dash-session-bandwidth",children:si(Pe.bytesTransmitted)})]},Pe.id))})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(ly,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Viewer Accounts"}),a.jsx("p",{className:"dash-panel-sub",children:"Manage user logins for friends and family."})]})]})}),a.jsxs("form",{onSubmit:G,className:"dash-user-form",children:[a.jsxs("div",{className:"dash-user-inputs",children:[a.jsx("input",{type:"text",placeholder:"Username",value:E,onChange:Pe=>D(Pe.target.value),required:!0,className:"dash-input"}),a.jsx("input",{type:"password",placeholder:"Password (min 6 chars)",value:J,onChange:Pe=>z(Pe.target.value),required:!0,className:"dash-input"}),a.jsxs("button",{type:"submit",className:"btn-primary dash-btn-compact",children:[a.jsx(My,{size:14}),a.jsx("span",{children:"Add"})]})]}),V&&a.jsx("span",{className:"dash-form-error",children:V}),ie&&a.jsx("span",{className:"dash-form-success",children:ie})]}),a.jsx("div",{className:"dash-user-list",children:c.map(Pe=>a.jsxs("div",{className:"dash-user-row",children:[a.jsxs("div",{className:"dash-user-info",children:[a.jsx("span",{className:"dash-user-name",children:Pe.username}),a.jsx("span",{className:`dash-role-badge ${Pe.role}`,children:Pe.role})]}),Pe.role!=="admin"&&a.jsx("button",{className:"dash-delete-btn",onClick:()=>ue(Pe.id,Pe.username),title:`Remove user ${Pe.username}`,children:a.jsx(Vr,{size:13})})]},Pe.id))})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Um,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Backup & Settings"}),a.jsx("p",{className:"dash-panel-sub",children:"Safely export or restore watch progress, favorites, and settings without touching movie files."})]})]})}),a.jsxs("div",{className:"dash-backup-actions",children:[a.jsxs("button",{className:"btn-secondary dash-backup-btn",onClick:Se,children:[a.jsx(Um,{size:15}),a.jsx("span",{children:"Export Backup (.json)"})]}),a.jsxs("label",{className:"btn-secondary dash-backup-btn dash-file-upload",children:[a.jsx(yy,{size:15}),a.jsx("span",{children:"Restore Backup"}),a.jsx("input",{type:"file",accept:".json",onChange:Ee,style:{display:"none"}})]})]})]})]}),a.jsxs("div",{className:"dash-panel",style:{marginTop:"24px"},children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(pi,{size:20,className:"dash-icon text-cyan"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Automatic Movie Artwork & Metadata System"}),a.jsx("p",{className:"dash-panel-sub",children:"TMDB movie recognition, vertical poster & wide backdrop caching, and metadata matching."})]})]}),a.jsx("div",{className:"dash-panel-actions",children:a.jsxs("button",{className:"btn-primary",onClick:Q,disabled:k||!y.hasApiKey,title:y.hasApiKey?"Scan entire library and auto-fetch missing posters & backdrops":"Enter TMDB API Key below first",children:[a.jsx(Vi,{size:14,className:k?"rescan-spinning":""}),a.jsx("span",{children:k?"Fetching Artwork...":"Auto-Fetch All Artwork"})]})})]}),I&&a.jsxs("div",{className:"dash-status-alert info",style:{marginBottom:"18px"},children:[a.jsx(pi,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:I})]}),a.jsxs("div",{className:"dash-metrics-grid",style:{marginBottom:"20px"},children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Titles"}),a.jsx("span",{className:"dash-metric-number",children:y.total})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Artwork Matched"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#22C55E"},children:y.matched})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Uncertain Matches"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#F59E0B"},children:y.uncertain})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Missing Artwork"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#EF4444"},children:y.missing})]})]}),a.jsxs("form",{onSubmit:q,className:"tmdb-key-config-row",children:[a.jsxs("div",{className:"tmdb-key-label-wrap",children:[a.jsx(D_,{size:16,className:"text-cyan"}),a.jsxs("div",{children:[a.jsx("strong",{children:"The Movie Database (TMDB) API Key:"}),a.jsx("p",{className:"text-xs text-dim",children:"Used by backend server to automatically query posters, backdrops, and descriptions. Your key is stored securely on the host PC and never exposed to client browsers."})]})]}),a.jsxs("div",{className:"tmdb-key-input-group",children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Paste your TMDB v3 API Key (e.g. a1b2c3d4e5...)",value:b,onChange:Pe=>x(Pe.target.value)}),a.jsx("button",{type:"submit",className:"btn-secondary",children:"Save Key"})]})]}),M&&a.jsxs("div",{className:"dash-form-success",style:{marginTop:"10px"},children:[a.jsx(Zg,{size:14}),a.jsx("span",{children:M})]}),a.jsx("div",{className:"tmdb-attribution-footer",children:a.jsx("span",{children:"This product uses the TMDB API but is not endorsed or certified by TMDB. Movie posters and cinematic artwork remain copyright of their respective production studios."})})]})]})]})}function Hy(){const{login:s}=jf(),[e,t]=W.useState(""),[r,l]=W.useState(""),[c,d]=W.useState(""),[f,p]=W.useState(!1),m=typeof window<"u"&&!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("127.0.0.1"),[_,S]=W.useState(()=>m||!fs()),[v,y]=W.useState(()=>fs()||""),[w,b]=W.useState(!1),[x,M]=W.useState(null),L=async A=>{A.preventDefault(),d(""),p(!0);try{await s(e.trim(),r)}catch(I){const P=I.message||"Login failed";P.includes("fetch")||P.includes("Failed to fetch")||P.includes("NetworkError")||P.includes("Cannot connect")?(d("Cannot connect to your StreamLink server. Please enter your Cloudflare Tunnel URL below and click Save."),S(!0)):d(P)}finally{p(!1)}},k=async A=>{let I=(A!==void 0?A:v).trim();if(!I){km(""),y(""),M({type:"success",message:"Server URL cleared (using local /api)."}),d("");return}let P=I.replace(/\/+$/,"");if(/^https?:\/\//i.test(P)||(P=`https://${P}`),P=P.replace(/\/api\/?$/i,""),P.includes("your-temporary-url")||P.includes("your-tunnel")||P.includes("sponsored-fee-imposed-associations")){M({type:"error",message:"Please replace the placeholder with your actual Cloudflare Tunnel URL generated on your PC."});return}b(!0),M(null);const E=`${P}/api/health`;try{const D=await fetch(E,{signal:AbortSignal.timeout(8e3)});if(D.ok)km(P),y(P),M({type:"success",message:"Connected to StreamLink Server successfully!"}),d("");else throw new Error(`Server returned status ${D.status}`)}catch{M({type:"error",message:"Could not connect. Ensure start-streamlink.bat is running on your PC and Cloudflare Tunnel is started in your Dashboard."})}finally{b(!1)}};return a.jsxs("div",{className:"login-page-shell",children:[a.jsx("div",{className:"login-bg-gradient"}),a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-brand",children:[a.jsx("div",{className:"login-logo-icon",children:a.jsx(Ci,{size:28})}),a.jsxs("h1",{className:"login-brand-name",children:["Stream",a.jsx("span",{style:{color:"var(--accent)"},children:"Link"})]}),a.jsx("p",{className:"login-brand-sub",children:"Personal Self-Hosted Movie Streaming"})]}),c&&a.jsxs("div",{className:"login-error",style:{marginBottom:"16px"},children:[a.jsx(uo,{size:16,style:{flexShrink:0}}),a.jsx("span",{children:c})]}),a.jsxs("form",{className:"login-form",onSubmit:L,children:[a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-username",children:"Username"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-username",type:"text",placeholder:"Enter username",value:e,onChange:A=>t(A.target.value),required:!0,autoFocus:!0}),a.jsx(nx,{size:16,className:"login-input-icon"})]})]}),a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-password",children:"Password"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-password",type:"password",placeholder:"Enter password",value:r,onChange:A=>l(A.target.value),required:!0}),a.jsx(Cc,{size:16,className:"login-input-icon"})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"13px",fontSize:"15px",marginTop:"8px"},disabled:f,children:[a.jsx("span",{children:f?"Authenticating...":"Sign In"}),!f&&a.jsx(co,{size:16})]})]}),a.jsxs("div",{className:"login-hint",children:["Default credentials: ",a.jsx("strong",{style:{color:"#fff"},children:"admin"})," / ",a.jsx("strong",{style:{color:"#fff"},children:"admin123"})]}),a.jsxs("div",{className:"login-server-config",style:{marginTop:"16px"},children:[a.jsxs("button",{type:"button",className:"login-server-toggle",onClick:()=>S(!_),style:{fontWeight:600,color:"#fff"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(ay,{size:15,style:{color:"var(--accent)"}}),"Server Connection",a.jsx("span",{style:{fontSize:"10px",padding:"2px 6px",borderRadius:"4px",background:fs()?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.08)",color:fs()?"#4ade80":"var(--text-dim)"},children:fs()?"Configured":"Local / Not Set"})]}),_?a.jsx(r_,{size:15}):a.jsx(e_,{size:15})]}),_&&a.jsxs("div",{className:"login-server-panel",style:{marginTop:"10px"},children:[a.jsx("label",{className:"login-server-label",children:"PC Tunnel URL (Cloudflare):"}),a.jsxs("div",{className:"login-server-input-row",children:[a.jsx("input",{type:"url",className:"login-server-input",placeholder:"https://your-tunnel.trycloudflare.com",value:v,onChange:A=>y(A.target.value)}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>k(),disabled:w,style:{padding:"8px 14px",fontSize:"12px",whiteSpace:"nowrap"},children:[w?a.jsx(Vi,{size:13,className:"spin"}):a.jsx(wn,{size:13}),a.jsx("span",{children:"Save"})]})]}),a.jsxs("div",{className:"login-server-presets",children:[a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{y("http://localhost:5050"),k("http://localhost:5050")},children:[a.jsx(Tc,{size:11,style:{display:"inline",marginRight:"4px"}}),"Localhost (5050)"]}),fs()&&a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{y(""),k("")},children:[a.jsx(oo,{size:11,style:{display:"inline",marginRight:"4px"}}),"Reset / Clear URL"]})]}),x&&a.jsx("div",{className:`login-server-feedback ${x.type}`,children:x.message}),a.jsxs("div",{className:"login-server-guide",children:[a.jsxs("div",{className:"login-server-guide-title",children:[a.jsx(fo,{size:13,style:{flexShrink:0}}),a.jsx("span",{children:"How to connect when hosted on Vercel:"})]}),a.jsxs("ol",{className:"login-server-steps",children:[a.jsxs("li",{children:["Run ",a.jsx("code",{children:"start-streamlink.bat"})," on your PC (where movies are stored)."]}),a.jsxs("li",{children:["In your PC browser, open ",a.jsx("code",{children:"http://localhost:5050"})," and go to ",a.jsx("strong",{children:"Dashboard"}),"."]}),a.jsxs("li",{children:["Under ",a.jsx("strong",{children:"Cloudflare Tunnel"}),", click ",a.jsx("strong",{children:"START SERVER"}),"."]}),a.jsxs("li",{children:["Copy your live ",a.jsx("code",{children:"https://....trycloudflare.com"})," link, paste it in the box above, and click ",a.jsx("strong",{children:"Save"}),"."]})]}),a.jsxs("div",{className:"login-server-tip",children:["💡 ",a.jsx("strong",{children:"Tip:"})," You don't need Vercel! Your Cloudflare Tunnel link from your PC can be shared and opened directly on any phone or device."]})]})]})]})]})]})}function Rl(s){if(isNaN(s)||s<0)return"00:00";const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=Math.floor(s%60),l=t<10?`0${t}`:t,c=r<10?`0${r}`:r;return e>0?`${e}:${l}:${c}`:`${l}:${c}`}function rx({movie:s,onBack:e,token:t,authFetch:r}){const l=W.useRef(null),c=W.useRef(null),d=W.useRef(null),[f,p]=W.useState(!1),[m,_]=W.useState(0),[S,v]=W.useState(s.duration||0),[y,w]=W.useState(0),[b,x]=W.useState(1),[M,L]=W.useState(!1),[k,A]=W.useState(1),[I,P]=W.useState(!0),[E,D]=W.useState(!1),[J,z]=W.useState(!1),[V,ee]=W.useState(-1),[ie,j]=W.useState(!1),[X,ne]=W.useState(!1),[O,$]=W.useState(!1),[q,Q]=W.useState(null),[F,K]=W.useState({visible:!1,xPercent:0,time:0}),[Me,G]=W.useState(null),ue=W.useRef(null),Se=W.useRef(null),Ee=()=>{P(!0),Se.current&&clearTimeout(Se.current),Se.current=setTimeout(()=>{l.current&&!l.current.paused&&(P(!1),D(!1),z(!1))},3500)},ye=ve=>{G(ve),ue.current&&clearTimeout(ue.current),ue.current=setTimeout(()=>{G(null)},650)},Ae=()=>{var re;$(!1);const ve=(re=l.current)==null?void 0:re.error;let R="An error occurred during video playback.",T=(ve==null?void 0:ve.code)||0;T===1?R="Video playback was aborted.":T===2?R="A network error occurred while loading the video stream.":T===3?R="An error occurred while decoding the video stream.":T===4&&(R="This video format or codec is not supported by your browser."),Q({code:T,message:R,codec:s.codec||"Unknown",container:s.container||"Unknown",audioCodec:s.audio_codec||"Unknown"})},mt=()=>{Q(null),$(!0),l.current&&(l.current.load(),l.current.play().then(()=>{p(!0),$(!1)}).catch(()=>{Ae()}))};W.useEffect(()=>{if(s.progress_seconds&&s.progress_seconds>15){j(!0);const ve=setTimeout(()=>{j(!1)},7e3);return()=>clearTimeout(ve)}},[s]);const Qe=s.streamUrlOverride||`/api/movies/${s.id}/stream?token=${encodeURIComponent(t||"")}`,vt=gn(Qe),be=()=>{Ee()};W.useEffect(()=>{const ve=setInterval(()=>{if(l.current&&f&&r){const R=l.current.currentTime,T=l.current.duration||S;R>5&&r("/api/user/progress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieId:s.id,progressSeconds:Math.floor(R),durationSeconds:Math.floor(T)})}).catch(()=>{})}},5e3);return()=>clearInterval(ve)},[f,S,s.id]);const Xe=()=>{l.current&&(l.current.paused?l.current.play().then(()=>{p(!0),ye("play"),Ee()}).catch(()=>{}):(l.current.pause(),p(!1),ye("pause"),P(!0),Se.current&&clearTimeout(Se.current)))},_t=ve=>{j(!1),l.current&&(l.current.currentTime=Math.max(0,Math.min(l.current.duration||S,l.current.currentTime+ve)),ye(ve>0?"fwd":"rwd"),Ee())},Ye=ve=>{if(j(!1),!d.current||!l.current)return;const R=d.current.getBoundingClientRect(),re=Math.max(0,Math.min(1,(ve.clientX-R.left)/R.width))*(l.current.duration||S);l.current.currentTime=re,_(re),Ee()},dt=ve=>{var Ne;if(!d.current)return;const R=d.current.getBoundingClientRect(),T=Math.max(0,Math.min(ve.clientX-R.left,R.width)),re=T/R.width*100,we=((Ne=l.current)==null?void 0:Ne.duration)||S||0,me=T/R.width*we;K({visible:!0,xPercent:re,time:me})},ge=()=>{K(ve=>({...ve,visible:!1}))},Be=ve=>{if(!l.current)return;const R=Math.max(0,Math.min(1,ve));l.current.volume=R,x(R),L(R===0)},Ge=()=>{l.current&&(M?(l.current.muted=!1,l.current.volume=b||.5,L(!1)):(l.current.muted=!0,L(!0)))},bt=ve=>{l.current&&(l.current.playbackRate=ve,A(ve),D(!1),Ee())};W.useEffect(()=>{const ve=()=>{var me,Ne,ke,he;const we=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||(me=l.current)!=null&&me.webkitDisplayingFullscreen);if(ne(we),we)document.body.classList.add("streamlink-fullscreen-active");else{document.body.classList.remove("streamlink-fullscreen-active");try{(ke=(Ne=window.screen)==null?void 0:Ne.orientation)!=null&&ke.unlock?window.screen.orientation.unlock():(he=window.screen)!=null&&he.unlockOrientation&&window.screen.unlockOrientation()}catch{}}},R=()=>{ne(!0),document.body.classList.add("streamlink-fullscreen-active")},T=()=>{var we,me;ne(!1),document.body.classList.remove("streamlink-fullscreen-active");try{(me=(we=window.screen)==null?void 0:we.orientation)!=null&&me.unlock&&window.screen.orientation.unlock()}catch{}};document.addEventListener("fullscreenchange",ve),document.addEventListener("webkitfullscreenchange",ve),document.addEventListener("mozfullscreenchange",ve),document.addEventListener("MSFullscreenChange",ve);const re=l.current;return re&&(re.addEventListener("webkitbeginfullscreen",R),re.addEventListener("webkitendfullscreen",T)),()=>{var we,me;document.removeEventListener("fullscreenchange",ve),document.removeEventListener("webkitfullscreenchange",ve),document.removeEventListener("mozfullscreenchange",ve),document.removeEventListener("MSFullscreenChange",ve),re&&(re.removeEventListener("webkitbeginfullscreen",R),re.removeEventListener("webkitendfullscreen",T)),document.body.classList.remove("streamlink-fullscreen-active");try{(me=(we=window.screen)==null?void 0:we.orientation)!=null&&me.unlock&&window.screen.orientation.unlock()}catch{}}},[]);const Pt=async()=>{var we,me,Ne,ke,he,xe,De,H;const ve=c.current,R=l.current;if(!ve)return;const T=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||R!=null&&R.webkitDisplayingFullscreen),re=R==null?void 0:R.currentTime;if(T){try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.msExitFullscreen?await document.msExitFullscreen():R&&R.webkitExitFullscreen&&R.webkitExitFullscreen()}catch{}try{(De=(xe=window.screen)==null?void 0:xe.orientation)!=null&&De.unlock?window.screen.orientation.unlock():(H=window.screen)!=null&&H.unlockOrientation&&window.screen.unlockOrientation()}catch{}R&&re&&Math.abs(R.currentTime-re)>2&&(R.currentTime=re),ne(!1)}else{try{ve.requestFullscreen?await ve.requestFullscreen():ve.webkitRequestFullscreen?await ve.webkitRequestFullscreen():ve.mozRequestFullScreen?await ve.mozRequestFullScreen():ve.msRequestFullscreen?await ve.msRequestFullscreen():R&&R.webkitEnterFullscreen&&R.webkitEnterFullscreen()}catch{if(R&&R.webkitEnterFullscreen)try{R.webkitEnterFullscreen()}catch{}}try{(me=(we=window.screen)==null?void 0:we.orientation)!=null&&me.lock?await window.screen.orientation.lock("landscape"):(Ne=window.screen)!=null&&Ne.lockOrientation?window.screen.lockOrientation("landscape"):(ke=window.screen)!=null&&ke.mozLockOrientation?window.screen.mozLockOrientation("landscape"):(he=window.screen)!=null&&he.msLockOrientation&&window.screen.msLockOrientation("landscape")}catch{}R&&re&&Math.abs(R.currentTime-re)>2&&(R.currentTime=re),ne(!0)}},Pe=()=>{"ontouchstart"in window||navigator.maxTouchPoints>0?P(R=>{const T=!R;return T&&Ee(),T}):Xe()};W.useEffect(()=>{const ve=R=>{var T;if(!["INPUT","TEXTAREA"].includes((T=document.activeElement)==null?void 0:T.tagName))switch(R.code){case"Space":R.preventDefault(),Xe();break;case"ArrowLeft":R.preventDefault(),_t(-10);break;case"ArrowRight":R.preventDefault(),_t(10);break;case"ArrowUp":R.preventDefault(),Be(b+.1);break;case"ArrowDown":R.preventDefault(),Be(b-.1);break;case"KeyM":Ge();break;case"KeyF":Pt();break;case"Escape":document.fullscreenElement||e();break}};return window.addEventListener("keydown",ve),()=>window.removeEventListener("keydown",ve)},[f,b,M,S]);const U=ve=>{if(ee(ve),z(!1),Ee(),!l.current)return;const R=l.current.textTracks;for(let T=0;T<R.length;T++)R[T].mode=T===ve?"showing":"disabled"},$e=()=>{l.current&&s.progress_seconds&&(l.current.currentTime=s.progress_seconds,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),Ee()},ft=()=>{l.current&&(l.current.currentTime=0,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),Ee()},Mt=()=>{if(l.current&&(_(l.current.currentTime),l.current.buffered.length>0)){const ve=l.current.buffered.end(l.current.buffered.length-1),R=l.current.duration||S;R>0&&w(Math.min(100,ve/R*100))}},Ie=()=>{l.current&&v(l.current.duration||s.duration||0)},Wt=S>0?m/S*100:0,at=s.subtitles||[];return a.jsx("div",{ref:c,className:`player-page ${X?"player-page-fullscreen":""}`,onMouseMove:be,style:{cursor:I?"default":"none"},children:a.jsxs("div",{className:"player-video-wrapper",onClick:Pe,children:[a.jsx("video",{ref:l,src:vt,className:"player-video",onTimeUpdate:Mt,onLoadedMetadata:Ie,onPlay:()=>{p(!0),$(!1)},onPause:()=>p(!1),onWaiting:()=>$(!0),onCanPlay:()=>$(!1),onPlaying:()=>$(!1),onSeeking:()=>$(!0),onSeeked:()=>$(!1),onError:Ae,playsInline:!0,"webkit-playsinline":"true","x5-video-player-type":"h5",children:at.map((ve,R)=>a.jsx("track",{kind:"subtitles",label:ve.language,src:gn(`/api/movies/${s.id}/subtitles/${R}?token=${encodeURIComponent(t||"")}`),default:R===V},R))}),O&&!q&&a.jsxs("div",{className:"player-buffering-overlay",children:[a.jsx("div",{className:"player-buffer-spinner"}),a.jsx("span",{className:"player-buffer-text",children:"Buffering Stream..."})]}),q&&a.jsx("div",{className:"player-error-overlay",onClick:ve=>ve.stopPropagation(),children:a.jsxs("div",{className:"player-error-card",children:[a.jsx("div",{className:"player-error-icon",children:a.jsx(mc,{size:36,color:"#EF4444"})}),a.jsx("h3",{className:"player-error-title",children:q.code===4?"Codec Not Supported in Browser":"Stream Playback Error"}),a.jsx("p",{className:"player-error-desc",children:q.message}),a.jsxs("div",{className:"player-error-diagnostics",children:[a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Container:"}),a.jsx("span",{className:"diag-value",children:s.container?s.container.toUpperCase():"UNKNOWN"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Video Codec:"}),a.jsx("span",{className:"diag-value",children:s.codec||"Unknown (e.g. HEVC/H.265)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Audio Codec:"}),a.jsx("span",{className:"diag-value",children:s.audio_codec||"Unknown (e.g. AC3/DTS)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Resolution:"}),a.jsx("span",{className:"diag-value",children:s.resolution||"Standard"})]})]}),q.code===4&&a.jsxs("div",{className:"player-error-tip",children:[a.jsx("strong",{children:"Why did this happen?"})," Most web browsers (Chrome, Edge, Firefox) do not include proprietary licensing decoders for certain video containers (MKV with HEVC/H.265) or surround-sound audio (multichannel DTS/AC3). You can play this directly in VLC/MPV or re-encode using H.264/AAC."]}),a.jsxs("div",{className:"player-error-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:mt,children:[a.jsx(Vi,{size:15}),a.jsx("span",{children:"Retry Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:e,children:[a.jsx(fc,{size:15}),a.jsx("span",{children:"Return to Library"})]})]})]})}),Me&&a.jsx("div",{className:"center-action-overlay",children:a.jsxs("div",{className:"center-action-bubble",children:[Me==="play"&&a.jsx(dn,{size:38,fill:"#ffffff"}),Me==="pause"&&a.jsx(hd,{size:38,fill:"#ffffff"}),Me==="fwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(rc,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"+10s"})]}),Me==="rwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(oo,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"-10s"})]})]})}),a.jsxs("div",{className:"player-mobile-center-controls",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>_t(-10),title:"Rewind 10s","aria-label":"Rewind 10 seconds",children:[a.jsx(oo,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]}),a.jsx("button",{className:"player-mobile-play-btn",onClick:Xe,title:f?"Pause":"Play","aria-label":f?"Pause":"Play",children:f?a.jsx(hd,{size:36,fill:"#ffffff"}):a.jsx(dn,{size:36,fill:"#ffffff",style:{marginLeft:"4px"}})}),a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>_t(10),title:"Forward 10s","aria-label":"Forward 10 seconds",children:[a.jsx(rc,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]})]}),a.jsxs("div",{className:"player-top-bar",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-back-btn",onClick:e,title:"Return to library",children:[a.jsx(fc,{size:18}),a.jsx("span",{className:"player-back-label",children:"Back"})]}),a.jsx("div",{className:"player-top-title",title:s.clean_title||s.title,children:s.clean_title||s.title}),a.jsx("div",{className:"player-top-actions",children:a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("button",{className:"player-top-speed-btn",onClick:()=>{D(!E),z(!1),Ee()},title:"Playback Speed",children:[k,"x"]}),E&&a.jsx("div",{className:"player-popup-menu player-popup-top",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${k===ve?"active":""}`,onClick:()=>bt(ve),children:[a.jsxs("span",{children:[ve,"x"]}),k===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]})})]}),ie&&a.jsxs("div",{className:"resume-prompt",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("span",{style:{fontSize:"13.5px",fontWeight:600},children:["Resume from ",Rl(s.progress_seconds),"?"]}),a.jsx("button",{className:"btn-primary",style:{padding:"6px 14px",fontSize:"12.5px"},onClick:$e,children:"Resume"}),a.jsx("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12.5px"},onClick:ft,children:"Start Over"}),a.jsx("button",{className:"resume-close-btn",onClick:()=>j(!1),title:"Dismiss","aria-label":"Dismiss resume prompt",children:a.jsx(Wi,{size:15})})]}),a.jsxs("div",{className:"player-controls-overlay",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsx("div",{ref:d,className:"player-timeline-wrapper",onClick:Ye,onMouseMove:dt,onMouseLeave:ge,children:a.jsxs("div",{className:"player-timeline-track",children:[a.jsx("div",{className:"player-timeline-buffer",style:{width:`${y}%`}}),F.visible&&a.jsx("div",{className:"player-timeline-hover-bar",style:{width:`${F.xPercent}%`}}),a.jsx("div",{className:"player-timeline-progress",style:{width:`${Wt}%`},children:a.jsx("div",{className:"timeline-progress-sheen"})}),a.jsxs("div",{className:"player-timeline-thumb",style:{left:`${Wt}%`},children:[a.jsx("div",{className:"thumb-inner-core"}),a.jsx("div",{className:"thumb-outer-halo"})]}),F.visible&&a.jsxs("div",{className:"player-timeline-tooltip",style:{left:`${F.xPercent}%`,transform:`translateX(-50%) perspective(400px) rotateX(${(F.xPercent-50)/50*-6}deg)`},children:[a.jsx("span",{className:"tooltip-time",children:Rl(F.time)}),a.jsx("div",{className:"tooltip-arrow"})]})]})}),a.jsxs("div",{className:"player-controls-bottom",children:[a.jsxs("div",{className:"player-controls-left",children:[a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:Xe,title:f?"Pause":"Play",children:f?a.jsx(hd,{size:22,fill:"#fff"}):a.jsx(dn,{size:22,fill:"#fff"})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>_t(-10),title:"Rewind 10s",children:a.jsx(oo,{size:18})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>_t(10),title:"Forward 10s",children:a.jsx(rc,{size:18})}),a.jsxs("div",{className:"player-volume-group",children:[a.jsx("button",{className:"player-ctrl-btn",onClick:Ge,title:M?"Unmute":"Mute",children:M||b===0?a.jsx(Ay,{size:19}):a.jsx(Ty,{size:19})}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:M?0:b,onChange:ve=>Be(parseFloat(ve.target.value)),className:"player-volume-slider",style:{width:"74px",background:`linear-gradient(to right, var(--accent) 0%, var(--accent) ${(M?0:b)*100}%, rgba(255,255,255,0.18) ${(M?0:b)*100}%, rgba(255,255,255,0.18) 100%)`}})]}),a.jsxs("div",{className:"player-time-display",children:[a.jsx("span",{className:"player-time-current",children:Rl(m)}),a.jsx("span",{className:"player-time-sep",children:"/"}),a.jsx("span",{className:"player-time-total",children:Rl(S)})]})]}),a.jsxs("div",{className:"player-controls-right",children:[at.length>0&&a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"player-ctrl-btn",onClick:()=>{z(!J),D(!1),Ee()},title:"Subtitles",style:{color:V>=0?"var(--primary)":"#fff"},children:a.jsx(Kg,{size:19})}),J&&a.jsxs("div",{className:"player-popup-menu",style:{minWidth:"140px"},children:[a.jsxs("button",{className:`player-popup-item ${V===-1?"active":""}`,onClick:()=>U(-1),children:[a.jsx("span",{children:"Off"}),V===-1&&a.jsx(wn,{size:13,color:"var(--accent)"})]}),at.map((ve,R)=>a.jsxs("button",{className:`player-popup-item ${V===R?"active":""}`,onClick:()=>U(R),children:[a.jsx("span",{children:ve.language}),V===R&&a.jsx(wn,{size:13,color:"var(--accent)"})]},R))]})]}),a.jsxs("div",{className:"player-desktop-btn",style:{position:"relative"},children:[a.jsxs("button",{className:"player-ctrl-btn",onClick:()=>{D(!E),z(!1),Ee()},style:{fontSize:"13px",fontWeight:700,padding:"5px 9px"},title:"Playback Speed",children:[k,"x"]}),E&&a.jsx("div",{className:"player-popup-menu",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${k===ve?"active":""}`,onClick:()=>bt(ve),children:[a.jsxs("span",{children:[ve,"x"]}),k===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]}),a.jsx("button",{className:"player-ctrl-btn player-fullscreen-btn",onClick:Pt,title:X?"Exit Fullscreen":"Landscape Fullscreen","aria-label":X?"Exit Fullscreen":"Enter Landscape Fullscreen",children:X?a.jsx(X_,{size:21}):a.jsx(V_,{size:21})})]})]})]})]})})}function sx({movie:s,onClose:e,onPlay:t,onToggleFavorite:r,authFetch:l,onPosterUpdated:c,onRemoveMovie:d,onDeleteFile:f}){const[p,m]=W.useState(s),[_,S]=W.useState([]),[v,y]=W.useState(!1),[w,b]=W.useState(""),[x,M]=W.useState(!1),[L,k]=W.useState(""),[A,I]=W.useState(!1),[P,E]=W.useState({type:"",text:""}),[D,J]=W.useState(Date.now()),[z,V]=W.useState(!1),[ee,ie]=W.useState(""),[j,X]=W.useState(""),[ne,O]=W.useState([]),[$,q]=W.useState(!1),[Q,F]=W.useState(!1),[K,Me]=W.useState(""),[G,ue]=W.useState(!1);if(W.useEffect(()=>{m(s),s&&(ie(s.clean_title||""),X(s.year||""))},[s]),W.useEffect(()=>{p!=null&&p.id&&l&&l(`/api/movies/recommendations/${p.id}`).then(be=>be.json()).then(be=>{be.recommendations&&S(be.recommendations)}).catch(()=>{})},[p==null?void 0:p.id]),!p)return null;const Se=p.subtitles&&p.subtitles.length>0,Ee=p.progress_seconds&&p.progress_seconds>15,ye=async be=>{if(be&&be.preventDefault(),!(!ee.trim()||!l)){q(!0),Me("");try{const Xe=encodeURIComponent(ee.trim()),_t=j?`&year=${encodeURIComponent(j.trim())}`:"",dt=await(await l(`/api/movies/${p.id}/tmdb-search?q=${Xe}${_t}`)).json();dt.error?(Me(dt.error),O([])):O(dt.candidates||[])}catch{Me("Network error searching TMDB")}finally{q(!1)}}},Ae=async be=>{F(!0),Me("");try{const Xe=await l(`/api/movies/${p.id}/tmdb-match`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdbId:be.id})}),_t=await Xe.json();Xe.ok?(m(Ye=>({...Ye,clean_title:be.title,year:be.year,description:be.overview||Ye.description,tmdb_id:be.id,match_status:"manual"})),J(Date.now()),V(!1),E({type:"success",text:`Matched to "${be.title}" (${be.year})!`}),c&&c(p.id)):Me(_t.error||"Failed to apply TMDB match")}catch{Me("Network error applying TMDB match")}finally{F(!1)}},mt=async()=>{var be,Xe;ue(!0),E({type:"",text:""});try{const Ye=await(await l(`/api/movies/${p.id}/refresh-metadata`,{method:"POST"})).json();(be=Ye.result)!=null&&be.success?(m(dt=>({...dt,clean_title:Ye.result.title||dt.clean_title,year:Ye.result.year||dt.year,match_status:"matched"})),J(Date.now()),E({type:"success",text:"Metadata and artwork refreshed from TMDB!"}),c&&c(p.id)):E({type:"error",text:((Xe=Ye.result)==null?void 0:Xe.reason)==="no_api_key"?"No TMDB API key configured in Dashboard":'No confident match found. Use "Match on TMDB" to pick manually.'})}catch{E({type:"error",text:"Network error refreshing metadata"})}finally{ue(!1)}},Qe=async be=>{if(be.preventDefault(),!(!w.trim()||!l)){I(!0),E({type:"",text:""});try{const Xe=await l(`/api/movies/${p.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:w.trim()})}),_t=await Xe.json();Xe.ok?(E({type:"success",text:"Poster updated successfully!"}),J(Date.now()),y(!1),b(""),c&&c(p.id)):E({type:"error",text:_t.error||"Failed to update poster"})}catch{E({type:"error",text:"Network error updating poster"})}finally{I(!1)}}},vt=async be=>{if(be.preventDefault(),!(!L.trim()||!l)){I(!0),E({type:"",text:""});try{const Xe=await l(`/api/movies/${p.id}/backdrop`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({backdropUrl:L.trim()})}),_t=await Xe.json();Xe.ok?(E({type:"success",text:"Backdrop updated successfully!"}),J(Date.now()),M(!1),k(""),c&&c(p.id)):E({type:"error",text:_t.error||"Failed to update backdrop"})}catch{E({type:"error",text:"Network error updating backdrop"})}finally{I(!1)}}};return a.jsx("div",{className:"movie-modal-backdrop",onClick:e,children:a.jsxs("div",{className:"movie-modal-box",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"movie-modal-top-banner",children:[a.jsx("img",{src:gn(`/api/movies/${p.id}/backdrop?k=${D}`),alt:p.clean_title,className:"movie-modal-backdrop-img",loading:"lazy"}),a.jsx("div",{className:"movie-modal-banner-gradient"}),a.jsx("button",{className:"movie-modal-close-btn",onClick:e,title:"Close Details",children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"movie-modal-body",children:[a.jsxs("div",{className:"movie-modal-poster-col",children:[a.jsx("div",{className:"movie-modal-poster",children:a.jsx("img",{src:gn(`/api/movies/${p.id}/poster?k=${D}`),alt:p.clean_title,loading:"lazy"},D)}),l&&a.jsxs("div",{className:"artwork-tools-bar",children:[a.jsxs("button",{className:"btn-change-poster",onClick:()=>{V(!0),ye()},title:"Search & Match TMDB Artwork & Metadata",children:[a.jsx(pi,{size:13,className:"text-cyan"}),a.jsx("span",{children:"Match on TMDB"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:mt,disabled:G,title:"Auto-refresh metadata from TMDB",children:[a.jsx(Vi,{size:13,className:G?"rescan-spinning":""}),a.jsx("span",{children:G?"Refreshing...":"Auto Refresh"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{y(!v),M(!1)},title:"Paste custom poster image URL or file path",children:[a.jsx(hc,{size:13}),a.jsx("span",{children:v?"Cancel":"Change Poster"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{M(!x),y(!1)},title:"Paste custom backdrop image URL or file path",children:[a.jsx(Bf,{size:13}),a.jsx("span",{children:x?"Cancel":"Change Backdrop"})]})]}),v&&a.jsxs("form",{onSubmit:Qe,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste poster image URL or file path...",value:w,onChange:be=>b(be.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:A,children:A?"Saving...":"Apply Poster"})]}),x&&a.jsxs("form",{onSubmit:vt,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste backdrop image URL or file path...",value:L,onChange:be=>k(be.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:A,children:A?"Saving...":"Apply Backdrop"})]}),P.text&&a.jsxs("div",{className:`poster-msg-banner ${P.type}`,children:[P.type==="success"?a.jsx(wn,{size:12}):a.jsx(uo,{size:12}),a.jsx("span",{children:P.text})]})]}),a.jsxs("div",{className:"movie-modal-info",children:[a.jsxs("div",{className:"movie-modal-badges",children:[p.resolution&&a.jsx("span",{className:"badge-studio",children:p.resolution}),p.genre&&a.jsx("span",{className:"badge-studio-cyan",children:p.genre}),p.year&&a.jsx("span",{className:"badge-studio-dim",children:p.year}),p.tmdb_id&&a.jsxs("span",{className:"badge-studio-info",title:"Official TMDB Metadata Match",children:[a.jsx(py,{size:11}),"TMDB #",p.tmdb_id]}),Se&&a.jsxs("span",{className:"badge-studio-info",children:[a.jsx(Kg,{size:11}),"CC"]})]}),a.jsx("h2",{className:"movie-modal-title",children:p.clean_title}),a.jsxs("div",{className:"movie-modal-meta-row",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:13}),Wr(p.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:13}),si(p.file_size)]}),p.codec&&a.jsx("span",{className:"meta-tag",children:p.codec})]}),a.jsx("p",{className:"movie-modal-description",children:p.description||"High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support."}),a.jsxs("div",{className:"movie-modal-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(p),children:[a.jsx(dn,{size:17,fill:"#ffffff",strokeWidth:0}),a.jsx("span",{children:Ee?"Resume Playback":"Play Movie"})]}),Ee&&a.jsxs("button",{className:"btn-secondary",onClick:()=>t({...p,progress_seconds:0}),title:"Play from 00:00",children:[a.jsx(oo,{size:15}),a.jsx("span",{children:"Start Over"})]}),r&&a.jsxs("button",{className:p.is_favorite?"btn-danger":"btn-secondary",onClick:()=>r(p.id),children:[a.jsx(Bi,{size:16,fill:p.is_favorite?"currentColor":"none"}),a.jsx("span",{children:p.is_favorite?"Favorited":"Favorite"})]}),d&&a.jsxs("button",{className:"btn-warning-outline",onClick:()=>{e(),d(p)},title:"Remove from StreamLink library (keeps original file)",children:[a.jsx(Or,{size:15}),a.jsx("span",{children:"Remove from Library"})]}),f&&a.jsxs("button",{className:"btn-danger-outline",onClick:()=>{e(),f(p)},title:"Permanently delete video file from disk",children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Delete File"})]})]}),a.jsxs("div",{className:"movie-modal-file-info",children:[a.jsxs("div",{className:"file-info-row",style:{gridColumn:"1 / -1"},children:[a.jsx("span",{className:"file-info-label",children:"File Location"}),a.jsx("span",{className:"file-info-value",title:p.file_path,style:{wordBreak:"break-all"},children:p.file_path})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Resolution"}),a.jsx("span",{className:"file-info-value accent-cyan",children:p.resolution||"Standard"})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"File Size"}),a.jsx("span",{className:"file-info-value",children:si(p.file_size)})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Codec / Container"}),a.jsxs("span",{className:"file-info-value",children:[p.codec||"H264"," / ",p.container||"MP4"]})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Subtitles"}),a.jsx("span",{className:"file-info-value",children:Se?`${p.subtitles.length} track(s) available`:"None embedded"})]})]}),a.jsx("div",{className:"tmdb-attribution-note",children:a.jsx("span",{children:"Film metadata & high-resolution artwork powered by The Movie Database (TMDB)."})})]})]}),z&&a.jsx("div",{className:"tmdb-search-popover-overlay",onClick:()=>V(!1),children:a.jsxs("div",{className:"tmdb-search-popover-window",onClick:be=>be.stopPropagation(),children:[a.jsxs("div",{className:"tmdb-popover-header",children:[a.jsxs("div",{className:"tmdb-title-pill",children:[a.jsx(pi,{size:16,className:"text-cyan"}),a.jsx("span",{children:"SEARCH & MATCH ON TMDB"})]}),a.jsx("button",{className:"modal-close-btn",onClick:()=>V(!1),children:a.jsx(Wi,{size:18})})]}),a.jsxs("form",{className:"tmdb-search-form",onSubmit:ye,children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Movie title (e.g. Annabelle Creation, Inception)...",value:ee,onChange:be=>ie(be.target.value),autoFocus:!0}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Year (optional)",style:{width:"120px"},value:j,onChange:be=>X(be.target.value),maxLength:4}),a.jsxs("button",{type:"submit",className:"btn-primary",disabled:$,children:[a.jsx(ps,{size:15}),a.jsx("span",{children:$?"Searching...":"Search"})]})]}),K&&a.jsx("div",{className:"profiles-error-banner",style:{margin:"14px 0"},children:K}),a.jsx("div",{className:"tmdb-results-list",children:$?a.jsxs("div",{className:"loading-state-3d",style:{padding:"30px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Searching official TMDB database..."})]}):ne.length>0?ne.map(be=>a.jsxs("div",{className:"tmdb-candidate-card",children:[a.jsx("div",{className:"candidate-poster-thumb",children:be.poster_url?a.jsx("img",{src:be.poster_url,alt:be.title}):a.jsx("div",{className:"thumb-placeholder",children:a.jsx(Film,{size:20})})}),a.jsxs("div",{className:"candidate-info",children:[a.jsxs("div",{className:"candidate-title-row",children:[a.jsx("h4",{children:be.title}),be.year&&a.jsxs("span",{className:"candidate-year",children:["(",be.year,")"]}),a.jsxs("span",{className:`confidence-pill ${be.confidence_score>=75?"high":"medium"}`,children:[be.confidence_score,"% Match"]})]}),a.jsx("p",{className:"candidate-overview",children:be.overview?be.overview.slice(0,160)+"...":"No overview available."})]}),a.jsxs("button",{className:"btn-primary btn-sm candidate-select-btn",onClick:()=>Ae(be),disabled:Q,children:[a.jsx(wn,{size:14}),a.jsx("span",{children:Q?"Applying...":"Select"})]})]},be.id)):a.jsx("div",{className:"tmdb-no-results",children:a.jsxs("p",{children:["Enter movie title and press ",a.jsx("strong",{children:"Search"})," to query TMDB."]})})})]})})]})})}function Gy({token:s}){const[e,t]=W.useState(!0),[r,l]=W.useState(""),[c,d]=W.useState(!1),[f,p]=W.useState(""),[m,_]=W.useState(null),[S,v]=W.useState(""),[y,w]=W.useState(null),[b,x]=W.useState(null),M=async(I=f)=>{t(!0),l("");try{const P=await fetch(gn("/api/share/public/access"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,passcode:I})}),E=await P.json();if(!P.ok){E.requiresPasscode?d(!0):l(E.error||"Failed to access stream");return}d(!1),_(E),E.type==="movie"&&E.movie&&w(E.movie)}catch{l("Unable to connect to host streaming PC")}finally{t(!1)}};W.useEffect(()=>{M()},[s]);const L=I=>{I.preventDefault(),M(f)};if(b){const I=`/api/share/public/stream/${s}/${b.id}`;return a.jsx(rx,{movie:{...b,streamUrlOverride:I},onBack:()=>x(null),token:s})}if(c)return a.jsx("div",{className:"viewer-auth-container",children:a.jsxs("div",{className:"viewer-auth-card",children:[a.jsx("div",{className:"viewer-brand-badge",children:a.jsx(Ci,{size:24})}),a.jsx("h2",{style:{fontSize:"20px",fontWeight:800},children:"StreamLink Movie Share"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"13px",marginTop:"6px"},children:"This stream is protected with a security passcode set by the host."}),r&&a.jsxs("div",{className:"viewer-error-box",children:[a.jsx(uo,{size:15}),a.jsx("span",{children:r})]}),a.jsxs("form",{onSubmit:L,style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{type:"password",placeholder:"Enter Passcode / PIN",value:f,onChange:I=>p(I.target.value),required:!0,style:{width:"100%",paddingLeft:"38px",textAlign:"center",letterSpacing:"2px",fontSize:"16px"},autoFocus:!0}),a.jsx(Cc,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-dim)"}})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"12px"},disabled:e,children:a.jsx("span",{children:e?"Verifying...":"Unlock & Watch"})})]})]})});if(e)return a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Connecting to private streaming server..."})]});if(r||!m)return a.jsxs("div",{className:"viewer-error-screen",children:[a.jsx(uo,{size:48,color:"var(--danger)"}),a.jsx("h2",{style:{fontSize:"22px",marginTop:"16px"},children:"Stream Unavailable"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px",maxWidth:"420px",marginTop:"8px"},children:r||"The sharing link is either invalid, disabled, or the host computer has stopped streaming."})]});const k=m.type==="library"||m.type==="folder",A=k?(m.movies||[]).filter(I=>!S||I.clean_title.toLowerCase().includes(S.toLowerCase())):m.movie?[m.movie]:[];return a.jsxs("div",{className:"public-viewer-layout",children:[a.jsxs("header",{className:"viewer-navbar",children:[a.jsxs("div",{className:"viewer-brand",children:[a.jsx("div",{className:"nav-logo-icon",children:a.jsx(Ci,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"viewer-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})]}),a.jsx("span",{className:"viewer-live-badge",children:m.type==="folder"?"SHARED FOLDER":"DIRECT STREAM"})]}),k&&a.jsxs("div",{className:"viewer-search-box",children:[a.jsx(ps,{size:15,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:m.type==="folder"?`Search ${m.folderName||"folder"}...`:"Search movies...",value:S,onChange:I=>v(I.target.value)})]})]}),a.jsx("main",{className:"viewer-main",children:m.type==="movie"&&m.movie?a.jsxs("div",{className:"single-movie-showcase",children:[a.jsx("div",{className:"single-movie-poster-box",children:a.jsx("img",{src:gn(`/api/movies/${m.movie.id}/poster`),alt:m.movie.clean_title})}),a.jsxs("div",{className:"single-movie-info-box",children:[a.jsxs("div",{className:"single-movie-badges-row",children:[a.jsx("span",{className:"hero-badge-pill",children:"AUTHORIZED DIRECT STREAM"}),m.movie.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",style:{position:"static"},children:m.movie.resolution}),m.movie.year&&a.jsx("span",{className:"hero-badge-year",children:m.movie.year})]}),a.jsx("h1",{className:"single-movie-title",children:m.movie.clean_title}),a.jsxs("div",{className:"single-movie-meta-row",children:[a.jsxs("span",{className:"meta-pill",children:[a.jsx(Gr,{size:12})," ",Wr(m.movie.duration)]}),a.jsxs("span",{className:"meta-pill",children:[a.jsx($i,{size:12})," ",si(m.movie.file_size)]})]}),a.jsx("p",{className:"single-movie-desc",children:m.movie.description||"Streamed in original high-bitrate quality directly from the host Windows workstation. Multi-channel audio and instant HTTP range seeking."}),a.jsxs("button",{className:"btn-primary hero-btn-play",onClick:()=>x(m.movie),children:[a.jsx(dn,{size:18,fill:"#fff"}),a.jsx("span",{children:"Play Movie Now"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"viewer-heading-row",children:m.type==="folder"?a.jsxs("div",{className:"viewer-folder-header-box",children:[a.jsx("div",{className:"viewer-folder-icon-circle",children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:[m.folderName||"Shared Folder",a.jsxs("span",{className:"viewer-count-pill",children:[A.length," ",A.length===1?"Movie":"Movies"]})]}),a.jsxs("p",{className:"viewer-page-subtitle",children:[m.label&&m.label!==m.folderName?`${m.label} • `:"","Streamed directly from host Windows PC. No app download needed."]})]})]}):a.jsx("div",{className:"viewer-folder-header-box",children:a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:["Available Movies",a.jsx("span",{className:"viewer-count-pill",children:A.length})]}),a.jsx("p",{className:"viewer-page-subtitle",children:"Tap any movie to stream directly from the host computer."})]})})}),A.length===0?a.jsx("div",{className:"viewer-empty-box",children:S?"No movies found matching your search query.":"No movies currently found in this shared folder."}):a.jsx("div",{className:"movie-grid-3d",children:A.map(I=>a.jsxs("div",{className:"movie-card-3d",onClick:()=>w(I),children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:gn(`/api/movies/${I.id}/poster`),alt:I.clean_title,className:"poster-img-3d",loading:"lazy"}),a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("div",{className:"play-circle-3d",children:a.jsx(dn,{size:22,fill:"#fff",strokeWidth:0})})}),I.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",children:I.resolution}),I.year&&a.jsx("span",{className:"badge-3d badge-top-right",children:I.year})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:I.clean_title,children:I.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11})," ",Wr(I.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11})," ",si(I.file_size)]})]})]})]},I.id))})]})}),y&&a.jsx(sx,{movie:y,onClose:()=>w(null),onPlay:I=>{w(null),x(I)},onToggleFavorite:()=>{}})]})}const Hm=["#8B5CF6","#38BDF8","#EC4899","#10B981","#F59E0B","#6366F1"];function Vy({isOpen:s,onClose:e,authFetch:t,onProfileChange:r,currentProfile:l}){const[c,d]=W.useState([]),[f,p]=W.useState(!0),[m,_]=W.useState(!1),[S,v]=W.useState(""),[y,w]=W.useState(Hm[0]),[b,x]=W.useState(""),M=()=>{p(!0),t("/api/user/profiles").then(A=>A.json()).then(A=>{d(A.profiles||[])}).catch(()=>{}).finally(()=>p(!1))};W.useEffect(()=>{s&&(M(),_(!1),x(""))},[s]);const L=async A=>{if(A.preventDefault(),!!S.trim())try{const I=await t("/api/user/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:S.trim(),avatar_color:y,avatar_icon:"film"})}),P=await I.json();if(!I.ok){x(P.error||"Failed to create profile");return}v(""),_(!1),M()}catch{x("Network error creating profile")}},k=async(A,I)=>{if(window.confirm(`Delete profile "${I}"? Watchlist and history for this profile will be removed.`))try{const P=await t(`/api/user/profiles/${A}`,{method:"DELETE"}),E=await P.json();if(!P.ok){alert(E.error||"Failed to delete profile");return}M()}catch{alert("Network error deleting profile")}};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"profiles-modal-window",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(Vf,{size:16,className:"text-cyan"}),a.jsx("span",{children:"WHO'S WATCHING STREAMLINK?"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),b&&a.jsx("div",{className:"profiles-error-banner",children:b}),f?a.jsxs("div",{className:"loading-state-3d",style:{padding:"40px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading user profiles..."})]}):a.jsxs("div",{className:"profiles-grid-wrap",children:[c.map(A=>{const I=(l==null?void 0:l.id)===A.id;return a.jsxs("div",{className:`profile-card-item ${I?"active":""}`,onClick:()=>{r(A),e()},children:[a.jsxs("div",{className:"profile-avatar-circle",style:{backgroundColor:A.avatar_color||"#8B5CF6"},children:[a.jsx(nx,{size:32,color:"#FFFFFF"}),I&&a.jsx("div",{className:"active-badge-indicator",children:a.jsx(wn,{size:12,strokeWidth:3})})]}),a.jsx("span",{className:"profile-name-label",children:A.name}),c.length>1&&a.jsx("button",{className:"profile-delete-icon",onClick:P=>{P.stopPropagation(),k(A.id,A.name)},title:"Delete profile",children:a.jsx(Vr,{size:13})})]},A.id)}),c.length<6&&!m&&a.jsxs("div",{className:"profile-card-item add-new",onClick:()=>_(!0),children:[a.jsx("div",{className:"profile-avatar-circle dashed",children:a.jsx(Gf,{size:28})}),a.jsx("span",{className:"profile-name-label",children:"Add Profile"})]})]}),m&&a.jsxs("form",{className:"create-profile-form",onSubmit:L,children:[a.jsx("h4",{children:"Create Viewer Profile"}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Profile Name (e.g. Cinema Room, Family)",value:S,onChange:A=>v(A.target.value),autoFocus:!0,maxLength:24,required:!0}),a.jsxs("div",{className:"color-picker-row",children:[a.jsx("span",{className:"text-xs text-dim",children:"Avatar Glow Color:"}),a.jsx("div",{className:"colors-list",children:Hm.map(A=>a.jsx("button",{type:"button",className:`color-dot-btn ${y===A?"active":""}`,style:{backgroundColor:A},onClick:()=>w(A)},A))})]}),a.jsxs("div",{className:"form-actions-row",children:[a.jsx("button",{type:"submit",className:"btn-primary btn-sm",children:"Save Profile"}),a.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>_(!1),children:"Cancel"})]})]})]})}):null}const Ft={HIGH:"high",MEDIUM:"medium",LOW:"low",REDUCED_MOTION:"reduced_motion"};class Wy{constructor(){if(this.mode="auto",this.currentLevel=Ft.HIGH,this.fps=60,this.frameTimes=[],this.lastTime=performance.now(),this.listeners=new Set,this.consecutiveLowFrames=0,this.consecutiveHighFrames=0,this.isWebGLAvailable=this.checkWebGLSupport(),typeof window<"u"&&window.matchMedia&&(this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.reducedMotionQuery.matches&&(this.currentLevel=Ft.REDUCED_MOTION),this.reducedMotionQuery.addEventListener("change",e=>{e.matches&&this.mode==="auto"&&this.setQualityLevel(Ft.REDUCED_MOTION)})),typeof window<"u"){const e=localStorage.getItem("streamlink_cine3d_quality");e&&["auto","high","medium","low","reduced_motion"].includes(e)&&(this.mode=e,e!=="auto"&&(this.currentLevel=e))}!this.isWebGLAvailable&&this.currentLevel!==Ft.REDUCED_MOTION&&(this.currentLevel=Ft.LOW)}checkWebGLSupport(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}setMode(e){var t;this.mode=e,typeof window<"u"&&localStorage.setItem("streamlink_cine3d_quality",e),e==="auto"?this.currentLevel=(t=this.reducedMotionQuery)!=null&&t.matches?Ft.REDUCED_MOTION:Ft.HIGH:this.currentLevel=e,this.notifyListeners()}setQualityLevel(e){this.currentLevel!==e&&(this.currentLevel=e,this.notifyListeners())}onFrame(){if(this.mode!=="auto"||!this.isWebGLAvailable)return;const e=performance.now(),t=e-this.lastTime;if(this.lastTime=e,t>0){const r=1e3/t;this.frameTimes.push(r),this.frameTimes.length>45&&this.frameTimes.shift();const l=this.frameTimes.reduce((c,d)=>c+d,0)/this.frameTimes.length;this.fps=Math.round(l),l<28?(this.consecutiveLowFrames++,this.consecutiveHighFrames=0,this.consecutiveLowFrames>90&&(this.currentLevel===Ft.HIGH?this.setQualityLevel(Ft.MEDIUM):this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.LOW),this.consecutiveLowFrames=0)):l>52&&(this.consecutiveHighFrames++,this.consecutiveLowFrames=0,this.consecutiveHighFrames>180&&(this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.HIGH),this.consecutiveHighFrames=0))}}subscribe(e){return this.listeners.add(e),e(this.currentLevel,this.mode,this.fps),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLevel,this.mode,this.fps))}}const $n=new Wy;function Xy({isOpen:s,onClose:e,ambientEnabled:t,onToggleAmbient:r}){const[l,c]=W.useState($n.mode),[d,f]=W.useState($n.currentLevel),[p,m]=W.useState($n.fps);W.useEffect(()=>$n.subscribe((S,v,y)=>{f(S),c(v),m(y)}),[]);const _=S=>{$n.setMode(S),c(S)};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"quality-modal-window",onClick:S=>S.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(tx,{size:16,className:"text-cyan"}),a.jsx("span",{children:"CINE-3D GRAPHICS & PERFORMANCE"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"quality-stats-banner",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"RENDER QUALITY"}),a.jsx("span",{className:"stat-val text-cyan",children:d.toUpperCase()})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"REAL-TIME FPS"}),a.jsxs("span",{className:"stat-val",children:[p>0?p:60," FPS"]})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"WEBGL 2.0"}),a.jsx("span",{className:"stat-val text-violet",children:$n.isWebGLAvailable?"ACTIVE":"FALLBACK"})]})]}),a.jsxs("div",{className:"quality-options-list",children:[a.jsxs("div",{className:`quality-option-card ${l==="auto"?"active":""}`,onClick:()=>_("auto"),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(ix,{size:16,className:"text-cyan"}),a.jsx("strong",{children:"Auto-Adaptive (Recommended)"})]}),a.jsx("p",{children:"Dynamically scales particle count and geometry resolution based on your GPU and display refresh rate."})]}),l==="auto"&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.HIGH?"active":""}`,onClick:()=>_(Ft.HIGH),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Hf,{size:16,className:"text-violet"}),a.jsx("strong",{children:"High Fidelity"})]}),a.jsx("p",{children:"Full 3D cinematic scene, high particle counts, procedural lighting, and soft shadows."})]}),l===Ft.HIGH&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.MEDIUM?"active":""}`,onClick:()=>_(Ft.MEDIUM),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Yg,{size:16,className:"text-muted"}),a.jsx("strong",{children:"Balanced"})]}),a.jsx("p",{children:"Optimized for laptops and integrated graphics. Streamlined particles and lighting."})]}),l===Ft.MEDIUM&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.LOW?"active":""}`,onClick:()=>_(Ft.LOW),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Jg,{size:16,className:"text-dim"}),a.jsx("strong",{children:"Low / 2D Canvas Mode"})]}),a.jsx("p",{children:"Disables heavy WebGL loops; uses lightweight CSS 3D perspective. Ideal for battery saving or older devices."})]}),l===Ft.LOW&&a.jsx(wn,{size:18,className:"text-cyan"})]})]}),a.jsxs("div",{className:"ambient-switch-row",children:[a.jsxs("div",{className:"ambient-switch-text",children:[a.jsx("strong",{children:"Ambient Cinema Glow"}),a.jsx("p",{className:"text-xs text-dim",children:"Projects subtle dynamic ambient color glows matching movie artwork."})]}),a.jsx("button",{className:`toggle-switch-pill ${t?"on":"off"}`,onClick:r,children:a.jsx("div",{className:"toggle-handle"})})]}),a.jsx("div",{className:"modal-footer-actions",children:a.jsx("button",{className:"btn-primary btn-sm",onClick:e,children:"Done"})})]})}):null}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Wf="187",$y=0,Gm=1,qy=2,sc=1,Yy=2,ro=3,ms=0,Kn=1,ji=2,oa=0,lo=1,Xd=2,Vm=3,Wm=4,Ky=5,ra=100,Zy=101,Qy=102,Jy=103,eS=104,tS=200,nS=201,iS=202,rS=203,ax=204,ox=205,sS=206,aS=207,oS=208,lS=209,cS=210,uS=211,dS=212,fS=213,hS=214,$d=0,qd=1,Yd=2,ho=3,Kd=4,Zd=5,Qd=6,Jd=7,lx=0,pS=1,mS=2,dr=0,cx=1,ux=2,dx=3,fx=4,hx=5,px=6,mx=7,gx=300,ua=301,po=302,pd=303,md=304,ef=1e3,ur=1001,tf=1002,An=1003,gS=1004,Pl=1005,Yn=1006,gd=1007,Br=1008,ri=1009,xx=1010,vx=1011,mo=1012,Xf=1013,qi=1014,Hi=1015,Yi=1016,$f=1017,qf=1018,da=1020,_x=35902,yx=35899,Sx=1021,Mx=1022,Gi=1023,Xr=1026,Hr=1027,Ex=1028,Yf=1029,gs=1030,Kf=1031,Zf=1033,ac=33776,oc=33777,lc=33778,cc=33779,nf=35840,rf=35841,sf=35842,af=35843,of=36196,lf=37492,cf=37496,uf=37488,df=37489,gc=37490,ff=37491,hf=37808,pf=37809,mf=37810,gf=37811,xf=37812,vf=37813,_f=37814,yf=37815,Sf=37816,Mf=37817,Ef=37818,wf=37819,bf=37820,Tf=37821,Cf=36492,Af=36494,Nf=36495,Rf=36283,Pf=36284,xc=36285,Lf=36286,xS=3200,Df=0,vS=1,jr="",hi="srgb",vc="srgb-linear",_c="linear",Vt="srgb",xd=7680,_S=519,yS=512,SS=513,MS=514,wx=515,ES=516,wS=517,bx=518,Tx=519,bS=35044,Xm="300 es",Ai=2e3,go=2001;function TS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function xo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function CS(){const s=xo("canvas");return s.style.display="block",s}const $m={};function qm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Cx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function xt(...s){s=Cx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=Cx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function uc(...s){const e=s.join(" ");e in $m||($m[e]=!0,xt(...s))}function AS(s,e,t){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const NS={[$d]:$d,[Yd]:Qd,[Kd]:Kd,[ho]:Zd,[qd]:qd,[Qd]:Yd,[Jd]:Jd,[Zd]:ho};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],vd=Math.PI/180,yc=180/Math.PI;function _o(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function RS(s,e){return(s%e+e)%e}function _d(s,e,t){return(1-t)*s+t*e}function PS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Qf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function LS(s,e){if(e.constructor===Float32Array)return s;const t=Qf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function DS(s,e){if(e.constructor===Float32Array)return s;const t=Qf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const sh=class sh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6],this.y=l[1]*t+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};sh.prototype.isVector2=!0;let Ut=sh;class pa{constructor(e=0,t=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=l}static slerpFlat(e,t,r,l,c,d,f){let p=r[l+0],m=r[l+1],_=r[l+2],S=r[l+3],v=c[d+0],y=c[d+1],w=c[d+2],b=c[d+3];if(S!==b||p!==v||m!==y||_!==w){let x=p*v+m*y+_*w+S*b;x<0&&(v=-v,y=-y,w=-w,b=-b,x=-x);let M=1-f;if(x<.9995){const L=Math.acos(x),k=Math.sin(L);M=Math.sin(M*L)/k,f=Math.sin(f*L)/k,p=p*M+v*f,m=m*M+y*f,_=_*M+w*f,S=S*M+b*f}else{p=p*M+v*f,m=m*M+y*f,_=_*M+w*f,S=S*M+b*f;const L=1/Math.sqrt(p*p+m*m+_*_+S*S);p*=L,m*=L,_*=L,S*=L}}e[t]=p,e[t+1]=m,e[t+2]=_,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,l,c,d){const f=r[l],p=r[l+1],m=r[l+2],_=r[l+3],S=c[d],v=c[d+1],y=c[d+2],w=c[d+3];return e[t]=f*w+_*S+p*y-m*v,e[t+1]=p*w+_*v+m*S-f*y,e[t+2]=m*w+_*y+f*v-p*S,e[t+3]=_*w-f*S-p*v-m*y,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,l){return this._x=e,this._y=t,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,l=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),_=f(l/2),S=f(c/2),v=p(r/2),y=p(l/2),w=p(c/2);switch(d){case"XYZ":this._x=v*_*S+m*y*w,this._y=m*y*S-v*_*w,this._z=m*_*w+v*y*S,this._w=m*_*S-v*y*w;break;case"YXZ":this._x=v*_*S+m*y*w,this._y=m*y*S-v*_*w,this._z=m*_*w-v*y*S,this._w=m*_*S+v*y*w;break;case"ZXY":this._x=v*_*S-m*y*w,this._y=m*y*S+v*_*w,this._z=m*_*w+v*y*S,this._w=m*_*S-v*y*w;break;case"ZYX":this._x=v*_*S-m*y*w,this._y=m*y*S+v*_*w,this._z=m*_*w-v*y*S,this._w=m*_*S+v*y*w;break;case"YZX":this._x=v*_*S+m*y*w,this._y=m*y*S+v*_*w,this._z=m*_*w-v*y*S,this._w=m*_*S-v*y*w;break;case"XZY":this._x=v*_*S-m*y*w,this._y=m*y*S-v*_*w,this._z=m*_*w+v*y*S,this._w=m*_*S+v*y*w;break;default:xt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],l=t[4],c=t[8],d=t[1],f=t[5],p=t[9],m=t[2],_=t[6],S=t[10],v=r+f+S;if(v>0){const y=.5/Math.sqrt(v+1);this._w=.25/y,this._x=(_-p)*y,this._y=(c-m)*y,this._z=(d-l)*y}else if(r>f&&r>S){const y=2*Math.sqrt(1+r-f-S);this._w=(_-p)/y,this._x=.25*y,this._y=(l+d)/y,this._z=(c+m)/y}else if(f>S){const y=2*Math.sqrt(1+f-r-S);this._w=(c-m)/y,this._x=(l+d)/y,this._y=.25*y,this._z=(p+_)/y}else{const y=2*Math.sqrt(1+S-r-f);this._w=(d-l)/y,this._x=(c+m)/y,this._y=(p+_)/y,this._z=.25*y}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,t/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,l=e._y,c=e._z,d=e._w,f=t._x,p=t._y,m=t._z,_=t._w;return this._x=r*_+d*f+l*m-c*p,this._y=l*_+d*p+c*f-r*m,this._z=c*_+d*m+r*p-l*f,this._w=d*_-r*f-l*p-c*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,l=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,l=-l,c=-c,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),_=Math.sin(m);p=Math.sin(p*m)/_,t=Math.sin(t*m)/_,this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const ah=class ah{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ym.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ym.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*l,this.y=c[1]*t+c[4]*r+c[7]*l,this.z=c[2]*t+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,l=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*l-f*r),_=2*(f*t-c*l),S=2*(c*r-d*t);return this.x=t+p*m+d*S-f*_,this.y=r+p*_+f*m-c*S,this.z=l+p*S+c*_-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*l,this.y=c[1]*t+c[5]*r+c[9]*l,this.z=c[2]*t+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,l=e.y,c=e.z,d=t.x,f=t.y,p=t.z;return this.x=l*p-c*f,this.y=c*d-r*p,this.z=r*f-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return yd.copy(this).projectOnVector(e),this.sub(yd)}reflect(e){return this.sub(yd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return t*t+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const l=Math.sin(t)*e;return this.x=l*Math.sin(r),this.y=Math.cos(t)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};ah.prototype.isVector3=!0;let de=ah;const yd=new de,Ym=new pa,oh=class oh{constructor(e,t,r,l,c,d,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,p,m)}set(e,t,r,l,c,d,f,p,m){const _=this.elements;return _[0]=e,_[1]=l,_[2]=f,_[3]=t,_[4]=c,_[5]=p,_[6]=r,_[7]=d,_[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],_=r[4],S=r[7],v=r[2],y=r[5],w=r[8],b=l[0],x=l[3],M=l[6],L=l[1],k=l[4],A=l[7],I=l[2],P=l[5],E=l[8];return c[0]=d*b+f*L+p*I,c[3]=d*x+f*k+p*P,c[6]=d*M+f*A+p*E,c[1]=m*b+_*L+S*I,c[4]=m*x+_*k+S*P,c[7]=m*M+_*A+S*E,c[2]=v*b+y*L+w*I,c[5]=v*x+y*k+w*P,c[8]=v*M+y*A+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8];return t*d*_-t*f*m-r*c*_+r*f*p+l*c*m-l*d*p}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],S=_*d-f*m,v=f*p-_*c,y=m*c-d*p,w=t*S+r*v+l*y;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(l*m-_*r)*b,e[2]=(f*r-l*d)*b,e[3]=v*b,e[4]=(_*t-l*p)*b,e[5]=(l*c-f*t)*b,e[6]=y*b,e[7]=(r*p-m*t)*b,e[8]=(d*t-r*c)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,l,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-l*m,l*p,-l*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return uc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Sd.makeScale(e,t)),this}rotate(e){return uc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Sd.makeRotation(-e)),this}translate(e,t){return uc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Sd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<9;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};oh.prototype.isMatrix3=!0;let Et=oh;const Sd=new Et,Km=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Zm=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function IS(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=fr(l.r),l.g=fr(l.g),l.b=fr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===jr?_c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Km,fromXYZ:Zm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const It=IS();function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ws;class kS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=xo("canvas")),Ws.width=e.width,Ws.height=e.height;const l=Ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=xo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fr(c[d]/255)*255;return r.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(fr(t[r]/255)*255):t[r]=fr(t[r]);return{data:t,width:e.width,height:e.height}}else return xt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let US=0;class Jf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:US++}),this.uuid=_o(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?c.push(Md(l[d].image)):c.push(Md(l[d]))}else c=Md(l);r.url=c}return t||(e.images[this.uuid]=r),r}}function Md(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?kS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(xt("Texture: Unable to serialize Texture."),{})}let FS=0;const Ed=new de;class Nn extends vs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=ur,l=ur,c=Yn,d=Br,f=Gi,p=ri,m=Nn.DEFAULT_ANISOTROPY,_=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:FS++}),this.uuid=_o(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=_,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){xt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){xt(`Texture.setValues(): property '${t}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==gx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ef:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case tf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ef:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case tf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=gx;Nn.DEFAULT_ANISOTROPY=1;const lh=class lh{constructor(e=0,t=0,r=0,l=1){this.x=e,this.y=t,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,l){return this.x=e,this.y=t,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,l,c;const p=e.elements,m=p[0],_=p[4],S=p[8],v=p[1],y=p[5],w=p[9],b=p[2],x=p[6],M=p[10];if(Math.abs(_-v)<.01&&Math.abs(S-b)<.01&&Math.abs(w-x)<.01){if(Math.abs(_+v)<.1&&Math.abs(S+b)<.1&&Math.abs(w+x)<.1&&Math.abs(m+y+M-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const k=(m+1)/2,A=(y+1)/2,I=(M+1)/2,P=(_+v)/4,E=(S+b)/4,D=(w+x)/4;return k>A&&k>I?k<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(k),l=P/r,c=E/r):A>I?A<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),r=P/l,c=D/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=E/c,l=D/c),this.set(r,l,c,t),this}let L=Math.sqrt((x-w)*(x-w)+(S-b)*(S-b)+(v-_)*(v-_));return Math.abs(L)<.001&&(L=1),this.x=(x-w)/L,this.y=(S-b)/L,this.z=(v-_)/L,this.w=Math.acos((m+y+M-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};lh.prototype.isVector4=!0;let rn=lh;class OS extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=new Nn({width:e,height:t,depth:r.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const l=Object.assign({},e.textures[t].image);this.textures[t].source=new Jf(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends OS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Ax extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zS extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bc=class bc{constructor(e,t,r,l,c,d,f,p,m,_,S,v,y,w,b,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,p,m,_,S,v,y,w,b,x)}set(e,t,r,l,c,d,f,p,m,_,S,v,y,w,b,x){const M=this.elements;return M[0]=e,M[4]=t,M[8]=r,M[12]=l,M[1]=c,M[5]=d,M[9]=f,M[13]=p,M[2]=m,M[6]=_,M[10]=S,M[14]=v,M[3]=y,M[7]=w,M[11]=b,M[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,l=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*l,t[1]=r[1]*l,t[2]=r[2]*l,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(l),m=Math.sin(l),_=Math.cos(c),S=Math.sin(c);if(e.order==="XYZ"){const v=d*_,y=d*S,w=f*_,b=f*S;t[0]=p*_,t[4]=-p*S,t[8]=m,t[1]=y+w*m,t[5]=v-b*m,t[9]=-f*p,t[2]=b-v*m,t[6]=w+y*m,t[10]=d*p}else if(e.order==="YXZ"){const v=p*_,y=p*S,w=m*_,b=m*S;t[0]=v+b*f,t[4]=w*f-y,t[8]=d*m,t[1]=d*S,t[5]=d*_,t[9]=-f,t[2]=y*f-w,t[6]=b+v*f,t[10]=d*p}else if(e.order==="ZXY"){const v=p*_,y=p*S,w=m*_,b=m*S;t[0]=v-b*f,t[4]=-d*S,t[8]=w+y*f,t[1]=y+w*f,t[5]=d*_,t[9]=b-v*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const v=d*_,y=d*S,w=f*_,b=f*S;t[0]=p*_,t[4]=w*m-y,t[8]=v*m+b,t[1]=p*S,t[5]=b*m+v,t[9]=y*m-w,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const v=d*p,y=d*m,w=f*p,b=f*m;t[0]=p*_,t[4]=b-v*S,t[8]=w*S+y,t[1]=S,t[5]=d*_,t[9]=-f*_,t[2]=-m*_,t[6]=y*S+w,t[10]=v-b*S}else if(e.order==="XZY"){const v=d*p,y=d*m,w=f*p,b=f*m;t[0]=p*_,t[4]=-S,t[8]=m*_,t[1]=v*S+b,t[5]=d*_,t[9]=y*S-w,t[2]=w*S-y,t[6]=f*_,t[10]=b*S+v}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(jS,e,BS)}lookAt(e,t,r){const l=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Lr.crossVectors(r,ni),Lr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Lr.crossVectors(r,ni)),Lr.normalize(),Ll.crossVectors(ni,Lr),l[0]=Lr.x,l[4]=Ll.x,l[8]=ni.x,l[1]=Lr.y,l[5]=Ll.y,l[9]=ni.y,l[2]=Lr.z,l[6]=Ll.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],_=r[1],S=r[5],v=r[9],y=r[13],w=r[2],b=r[6],x=r[10],M=r[14],L=r[3],k=r[7],A=r[11],I=r[15],P=l[0],E=l[4],D=l[8],J=l[12],z=l[1],V=l[5],ee=l[9],ie=l[13],j=l[2],X=l[6],ne=l[10],O=l[14],$=l[3],q=l[7],Q=l[11],F=l[15];return c[0]=d*P+f*z+p*j+m*$,c[4]=d*E+f*V+p*X+m*q,c[8]=d*D+f*ee+p*ne+m*Q,c[12]=d*J+f*ie+p*O+m*F,c[1]=_*P+S*z+v*j+y*$,c[5]=_*E+S*V+v*X+y*q,c[9]=_*D+S*ee+v*ne+y*Q,c[13]=_*J+S*ie+v*O+y*F,c[2]=w*P+b*z+x*j+M*$,c[6]=w*E+b*V+x*X+M*q,c[10]=w*D+b*ee+x*ne+M*Q,c[14]=w*J+b*ie+x*O+M*F,c[3]=L*P+k*z+A*j+I*$,c[7]=L*E+k*V+A*X+I*q,c[11]=L*D+k*ee+A*ne+I*Q,c[15]=L*J+k*ie+A*O+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],_=e[2],S=e[6],v=e[10],y=e[14],w=e[3],b=e[7],x=e[11],M=e[15],L=p*y-m*v,k=f*y-m*S,A=f*v-p*S,I=d*y-m*_,P=d*v-p*_,E=d*S-f*_;return t*(b*L-x*k+M*A)-r*(w*L-x*I+M*P)+l*(w*k-b*I+M*E)-c*(w*A-b*P+x*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[1],d=e[5],f=e[9],p=e[2],m=e[6],_=e[10];return t*(d*_-f*m)-r*(c*_-f*p)+l*(c*m-d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],_=e[8],S=e[9],v=e[10],y=e[11],w=e[12],b=e[13],x=e[14],M=e[15],L=t*f-r*d,k=t*p-l*d,A=t*m-c*d,I=r*p-l*f,P=r*m-c*f,E=l*m-c*p,D=_*b-S*w,J=_*x-v*w,z=_*M-y*w,V=S*x-v*b,ee=S*M-y*b,ie=v*M-y*x,j=L*ie-k*ee+A*V+I*z-P*J+E*D;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const X=1/j;return e[0]=(f*ie-p*ee+m*V)*X,e[1]=(l*ee-r*ie-c*V)*X,e[2]=(b*E-x*P+M*I)*X,e[3]=(v*P-S*E-y*I)*X,e[4]=(p*z-d*ie-m*J)*X,e[5]=(t*ie-l*z+c*J)*X,e[6]=(x*A-w*E-M*k)*X,e[7]=(_*E-v*A+y*k)*X,e[8]=(d*ee-f*z+m*D)*X,e[9]=(r*z-t*ee-c*D)*X,e[10]=(w*P-b*A+M*L)*X,e[11]=(S*A-_*P-y*L)*X,e[12]=(f*J-d*V-p*D)*X,e[13]=(t*V-r*J+l*D)*X,e[14]=(b*k-w*I-x*L)*X,e[15]=(_*I-S*k+v*L)*X,this}scale(e){const t=this.elements,r=e.x,l=e.y,c=e.z;return t[0]*=r,t[4]*=l,t[8]*=c,t[1]*=r,t[5]*=l,t[9]*=c,t[2]*=r,t[6]*=l,t[10]*=c,t[3]*=r,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,l))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),l=Math.sin(t),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,_=c*f;return this.set(m*d+r,m*f-l*p,m*p+l*f,0,m*f+l*p,_*f+r,_*p-l*d,0,m*p-l*f,_*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,r){const l=this.elements,c=t._x,d=t._y,f=t._z,p=t._w,m=c+c,_=d+d,S=f+f,v=c*m,y=c*_,w=c*S,b=d*_,x=d*S,M=f*S,L=p*m,k=p*_,A=p*S,I=r.x,P=r.y,E=r.z;return l[0]=(1-(b+M))*I,l[1]=(y+A)*I,l[2]=(w-k)*I,l[3]=0,l[4]=(y-A)*P,l[5]=(1-(v+M))*P,l[6]=(x+L)*P,l[7]=0,l[8]=(w+k)*E,l[9]=(x-L)*E,l[10]=(1-(v+b))*E,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),t.identity(),this;let d=Xs.set(l[0],l[1],l[2]).length();const f=Xs.set(l[4],l[5],l[6]).length(),p=Xs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),Ei.copy(this);const m=1/d,_=1/f,S=1/p;return Ei.elements[0]*=m,Ei.elements[1]*=m,Ei.elements[2]*=m,Ei.elements[4]*=_,Ei.elements[5]*=_,Ei.elements[6]*=_,Ei.elements[8]*=S,Ei.elements[9]*=S,Ei.elements[10]*=S,t.setFromRotationMatrix(Ei),r.x=d,r.y=f,r.z=p,this}makePerspective(e,t,r,l,c,d,f=Ai,p=!1){const m=this.elements,_=2*c/(t-e),S=2*c/(r-l),v=(t+e)/(t-e),y=(r+l)/(r-l);let w,b;if(p)w=c/(d-c),b=d*c/(d-c);else if(f===Ai)w=-(d+c)/(d-c),b=-2*d*c/(d-c);else if(f===go)w=-d/(d-c),b=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=v,m[12]=0,m[1]=0,m[5]=S,m[9]=y,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=b,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,l,c,d,f=Ai,p=!1){const m=this.elements,_=2/(t-e),S=2/(r-l),v=-(t+e)/(t-e),y=-(r+l)/(r-l);let w,b;if(p)w=1/(d-c),b=d/(d-c);else if(f===Ai)w=-2/(d-c),b=-(d+c)/(d-c);else if(f===go)w=-1/(d-c),b=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=_,m[4]=0,m[8]=0,m[12]=v,m[1]=0,m[5]=S,m[9]=0,m[13]=y,m[2]=0,m[6]=0,m[10]=w,m[14]=b,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<16;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};bc.prototype.isMatrix4=!0;let qt=bc;const Xs=new de,Ei=new qt,jS=new de(0,0,0),BS=new de(1,1,1),Lr=new de,Ll=new de,ni=new de,Qm=new qt,Jm=new pa;class $r{constructor(e=0,t=0,r=0,l=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,l=this._order){return this._x=e,this._y=t,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],_=l[9],S=l[2],v=l[6],y=l[10];switch(t){case"XYZ":this._y=Math.asin(kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-_,y),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(v,m),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(f,y),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-S,c),this._z=0);break;case"ZXY":this._x=Math.asin(kt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(-S,y),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-kt(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(v,y),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-_,m),this._y=Math.atan2(-S,c)):(this._x=0,this._y=Math.atan2(f,y));break;case"XZY":this._z=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(v,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-_,y),this._y=0);break;default:xt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jm.setFromEuler(this),this.setFromQuaternion(Jm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let HS=0;const eg=new de,$s=new pa,sr=new qt,Dl=new de,Qa=new de,GS=new de,VS=new pa,tg=new de(1,0,0),ng=new de(0,1,0),ig=new de(0,0,1),rg={type:"added"},WS={type:"removed"},qs={type:"childadded",child:null},wd={type:"childremoved",child:null};class bn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:HS++}),this.uuid=_o(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new de,t=new $r,r=new pa,l=new de(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new Et}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(tg,e)}rotateY(e){return this.rotateOnAxis(ng,e)}rotateZ(e){return this.rotateOnAxis(ig,e)}translateOnAxis(e,t){return eg.copy(e).applyQuaternion(this.quaternion),this.position.add(eg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tg,e)}translateY(e){return this.translateOnAxis(ng,e)}translateZ(e){return this.translateOnAxis(ig,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Dl.copy(e):Dl.set(e,t,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Qa,Dl,this.up):sr.lookAt(Dl,Qa,this.up),this.quaternion.setFromRotationMatrix(sr),l&&(sr.extractRotation(l.matrixWorld),$s.setFromRotationMatrix(sr),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rg),qs.child=e,this.dispatchEvent(qs),qs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(WS),wd.child=e,this.dispatchEvent(wd),wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,GS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,VS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*l,c[13]+=r-c[1]*t-c[5]*r-c[9]*l,c[14]+=l-c[2]*t-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(f=>({...f})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,_=p.length;m<_;m++){const S=p[m];c(e.shapes,S)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));l.material=f}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(c(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),_=d(e.images),S=d(e.shapes),v=d(e.skeletons),y=d(e.animations),w=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),_.length>0&&(r.images=_),S.length>0&&(r.shapes=S),v.length>0&&(r.skeletons=v),y.length>0&&(r.animations=y),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(f){const p=[];for(const m in f){const _=f[m];delete _.metadata,p.push(_)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new de(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sa extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const XS={type:"move"};class bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let l=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const b of e.hand.values()){const x=t.getJointPose(b,r),M=this._getHandJoint(m,b);x!==null&&(M.matrix.fromArray(x.transform.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale),M.matrixWorldNeedsUpdate=!0,M.jointRadius=x.radius),M.visible=x!==null}const _=m.joints["index-finger-tip"],S=m.joints["thumb-tip"],v=_.position.distanceTo(S.position),y=.02,w=.005;m.inputState.pinching&&v>y+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&v<=y-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(l=t.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(XS)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new sa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Nx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Td(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,l=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,l),this}setHSL(e,t,r,l=It.workingColorSpace){if(e=RS(e,1),t=kt(t,0,1),r=kt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=Td(d,c,e+1/3),this.g=Td(d,c,e),this.b=Td(d,c,e-1/3)}return It.colorSpaceToWorking(this,l),this}setStyle(e,t=hi){function r(c){c!==void 0&&parseFloat(c)<1&&xt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,t);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:xt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);xt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=Nx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):xt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return It.workingToColorSpace(Un.copy(this),e),Math.round(kt(Un.r*255,0,255))*65536+Math.round(kt(Un.g*255,0,255))*256+Math.round(kt(Un.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Un.copy(this),t);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),f=Math.min(r,l,c);let p,m;const _=(f+d)/2;if(f===d)p=0,m=0;else{const S=d-f;switch(m=_<=.5?S/(d+f):S/(2-d-f),d){case r:p=(l-c)/S+(l<c?6:0);break;case l:p=(c-r)/S+2;break;case c:p=(r-l)/S+4;break}p/=6}return e.h=p,e.s=m,e.l=_,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=hi){It.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,l=Un.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(Il);const r=_d(Dr.h,Il.h,t),l=_d(Dr.s,Il.s,t),c=_d(Dr.l,Il.l,t);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*l,this.g=c[1]*t+c[4]*r+c[7]*l,this.b=c[2]*t+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Tt;Tt.NAMES=Nx;class Ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=t}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Rx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const wi=new de,ar=new de,Cd=new de,or=new de,Ys=new de,Ks=new de,sg=new de,Ad=new de,Nd=new de,Rd=new de,Pd=new rn,Ld=new rn,Dd=new rn;class Ti{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,l){l.subVectors(r,t),wi.subVectors(e,t),l.cross(wi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,r,l,c){wi.subVectors(l,t),ar.subVectors(r,t),Cd.subVectors(e,t);const d=wi.dot(wi),f=wi.dot(ar),p=wi.dot(Cd),m=ar.dot(ar),_=ar.dot(Cd),S=d*m-f*f;if(S===0)return c.set(0,0,0),null;const v=1/S,y=(m*p-f*_)*v,w=(d*_-f*p)*v;return c.set(1-y-w,w,y)}static containsPoint(e,t,r,l){return this.getBarycoord(e,t,r,l,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,l,c,d,f,p){return this.getBarycoord(e,t,r,l,or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,or.x),p.addScaledVector(d,or.y),p.addScaledVector(f,or.z),p)}static getInterpolatedAttribute(e,t,r,l,c,d){return Pd.setScalar(0),Ld.setScalar(0),Dd.setScalar(0),Pd.fromBufferAttribute(e,t),Ld.fromBufferAttribute(e,r),Dd.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Pd,c.x),d.addScaledVector(Ld,c.y),d.addScaledVector(Dd,c.z),d}static isFrontFacing(e,t,r,l){return wi.subVectors(r,t),ar.subVectors(e,t),wi.cross(ar).dot(l)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,l){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,r,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return wi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),wi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ti.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ti.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,l,c){return Ti.getInterpolation(e,this.a,this.b,this.c,t,r,l,c)}containsPoint(e){return Ti.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ti.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,l=this.b,c=this.c;let d,f;Ys.subVectors(l,r),Ks.subVectors(c,r),Ad.subVectors(e,r);const p=Ys.dot(Ad),m=Ks.dot(Ad);if(p<=0&&m<=0)return t.copy(r);Nd.subVectors(e,l);const _=Ys.dot(Nd),S=Ks.dot(Nd);if(_>=0&&S<=_)return t.copy(l);const v=p*S-_*m;if(v<=0&&p>=0&&_<=0&&p-_>0)return d=p/(p-_),t.copy(r).addScaledVector(Ys,d);Rd.subVectors(e,c);const y=Ys.dot(Rd),w=Ks.dot(Rd);if(w>=0&&y<=w)return t.copy(c);const b=y*m-p*w;if(b<=0&&m>=0&&w<=0)return f=m/(m-w),t.copy(r).addScaledVector(Ks,f);const x=_*w-y*S;if(x<=0&&S-_>=0&&y-w>=0)return sg.subVectors(c,l),f=(S-_)/(S-_+(y-w)),t.copy(l).addScaledVector(sg,f);const M=1/(x+b+v);return d=b*M,f=v*M,t.copy(r).addScaledVector(Ys,d).addScaledVector(Ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class yo{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,bi):bi.fromBufferAttribute(c,d),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),kl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),kl.copy(r.boundingBox)),kl.applyMatrix4(e.matrixWorld),this.union(kl)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Ul.subVectors(this.max,Ja),Zs.subVectors(e.a,Ja),Qs.subVectors(e.b,Ja),Js.subVectors(e.c,Ja),Ir.subVectors(Qs,Zs),kr.subVectors(Js,Qs),ls.subVectors(Zs,Js);let t=[0,-Ir.z,Ir.y,0,-kr.z,kr.y,0,-ls.z,ls.y,Ir.z,0,-Ir.x,kr.z,0,-kr.x,ls.z,0,-ls.x,-Ir.y,Ir.x,0,-kr.y,kr.x,0,-ls.y,ls.x,0];return!Id(t,Zs,Qs,Js,Ul)||(t=[1,0,0,0,1,0,0,0,1],!Id(t,Zs,Qs,Js,Ul))?!1:(Fl.crossVectors(Ir,kr),t=[Fl.x,Fl.y,Fl.z],Id(t,Zs,Qs,Js,Ul))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new de,new de,new de,new de,new de,new de,new de,new de],bi=new de,kl=new yo,Zs=new de,Qs=new de,Js=new de,Ir=new de,kr=new de,ls=new de,Ja=new de,Ul=new de,Fl=new de,cs=new de;function Id(s,e,t,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){cs.fromArray(s,c);const f=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),p=e.dot(cs),m=t.dot(cs),_=r.dot(cs);if(Math.max(-Math.max(p,m,_),Math.min(p,m,_))>f)return!1}return!0}const un=new de,Ol=new Ut;let $S=0;class hr extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:$S++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=bS,this.updateRanges=[],this.gpuType=Hi,this.version=0,this._normalizationScale=e!==void 0?Qf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,t,r,l,c){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l),c=this._normalize(c)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):LS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):DS(e,this.array)}}class Px extends hr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class Lx extends hr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends hr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const qS=new yo,eo=new de,kd=new de;class So{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):qS.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),l=(r-this.radius)*.5;this.center.addScaledVector(eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(kd)),this.expandByPoint(eo.copy(e.center).sub(kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let YS=0;const fi=new qt,Ud=new bn,ea=new de,ii=new yo,to=new yo,En=new de;class mi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=_o(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(TS(e)?Lx:Px)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Et().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return Ud.lookAt(e),Ud.updateMatrix(),this.applyMatrix4(Ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let l=0;l<r;l++){const c=e[l];t.setXYZ(l,c.x,c.y,c.z||0)}e.length>t.count&&xt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const c=t[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const f=t[c];to.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ii.min,to.min),ii.expandByPoint(En),En.addVectors(ii.max,to.max),ii.expandByPoint(En)):(ii.expandByPoint(to.min),ii.expandByPoint(to.max))}ii.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(t)for(let c=0,d=t.length;c<d;c++){const f=t[c],p=this.morphTargetsRelative;for(let m=0,_=f.count;m<_;m++)En.fromBufferAttribute(f,m),p&&(ea.fromBufferAttribute(e,m),En.add(ea)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,l=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new hr(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],p=[],m=new Uint8Array(r.count);for(let J=0;J<r.count;J++)f[J]=new de,p[J]=new de;const _=new de,S=new de,v=new de,y=new Ut,w=new Ut,b=new Ut,x=new de,M=new de;function L(J,z,V){m[J]=m[z]=m[V]=1,_.fromBufferAttribute(r,J),S.fromBufferAttribute(r,z),v.fromBufferAttribute(r,V),y.fromBufferAttribute(c,J),w.fromBufferAttribute(c,z),b.fromBufferAttribute(c,V),S.sub(_),v.sub(_),w.sub(y),b.sub(y);const ee=1/(w.x*b.y-b.x*w.y);isFinite(ee)&&(x.copy(S).multiplyScalar(b.y).addScaledVector(v,-w.y).multiplyScalar(ee),M.copy(v).multiplyScalar(w.x).addScaledVector(S,-b.x).multiplyScalar(ee),f[J].add(x),f[z].add(x),f[V].add(x),p[J].add(M),p[z].add(M),p[V].add(M))}let k=this.groups;k.length===0&&(k=[{start:0,count:e.count}]);for(let J=0,z=k.length;J<z;++J){const V=k[J],ee=V.start,ie=V.count;for(let j=ee,X=ee+ie;j<X;j+=3)L(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const A=new de,I=new de,P=new de,E=new de;function D(J){P.fromBufferAttribute(l,J),E.copy(P);const z=f[J];A.copy(z),A.sub(P.multiplyScalar(P.dot(z))).normalize(),I.crossVectors(E,z);const ee=I.dot(p[J])<0?-1:1;d.setXYZW(J,A.x,A.y,A.z,ee)}for(let J=0,z=r.count;J<z;++J)m[J]&&D(J);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let v=0,y=r.count;v<y;v++)r.setXYZ(v,0,0,0);const l=new de,c=new de,d=new de,f=new de,p=new de,m=new de,_=new de,S=new de;if(e)for(let v=0,y=e.count;v<y;v+=3){const w=e.getX(v+0),b=e.getX(v+1),x=e.getX(v+2);l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,b),d.fromBufferAttribute(t,x),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),f.fromBufferAttribute(r,w),p.fromBufferAttribute(r,b),m.fromBufferAttribute(r,x),f.add(_),p.add(_),m.add(_),r.setXYZ(w,f.x,f.y,f.z),r.setXYZ(b,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let v=0,y=t.count;v<y;v+=3)l.fromBufferAttribute(t,v+0),c.fromBufferAttribute(t,v+1),d.fromBufferAttribute(t,v+2),_.subVectors(d,c),S.subVectors(l,c),_.cross(S),r.setXYZ(v+0,_.x,_.y,_.z),r.setXYZ(v+1,_.x,_.y,_.z),r.setXYZ(v+2,_.x,_.y,_.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,p){const m=f.array,_=f.itemSize,S=f.normalized,v=new m.constructor(p.length*_);let y=0,w=0;for(let b=0,x=p.length;b<x;b++){f.isInterleavedBufferAttribute?y=p[b]*f.data.stride+f.offset:y=p[b]*_;for(let M=0;M<_;M++)v[w++]=m[y++]}return new hr(v,_,S)}if(this.index===null)return xt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new mi,r=this.index.array,l=this.attributes;for(const f in l){const p=l[f],m=e(p,r);t.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let _=0,S=m.length;_<S;_++){const v=m[_],y=e(v,r);p.push(y)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],_=[];for(let S=0,v=m.length;S<v;S++){const y=m[S];_.push(y.toJSON(e.data))}_.length>0&&(l[p]=_,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const _=l[m];this.setAttribute(m,_.clone(t))}const c=e.morphAttributes;for(const m in c){const _=[],S=c[m];for(let v=0,y=S.length;v<y;v++)_.push(S[v].clone(t));this.morphAttributes[m]=_}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,_=d.length;m<_;m++){const S=d[m];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fd=new de,KS=new de,ZS=new Et;class Fr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,l){return this.normal.set(e,t,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const l=Fd.subVectors(r,t).cross(KS.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const l=e.delta(Fd),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||ZS.getNormalMatrix(e),l=this.coplanarPoint(Fd).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let QS=0;class _s extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:QS++}),this.uuid=_o(),this.name="",this.type="Material",this.blending=lo,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ax,this.blendDst=ox,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=ho,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_S,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=xd,this.stencilZFail=xd,this.stencilZPass=xd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){xt(`Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){xt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Fr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const l=t.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new de,Od=new de,zl=new de,jl=new de;class Nc{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,l){Od.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),jl.copy(this.origin).sub(Od);const c=e.distanceTo(t)*.5,d=-this.direction.dot(zl),f=jl.dot(this.direction),p=-jl.dot(zl),m=jl.lengthSq(),_=Math.abs(1-d*d);let S,v,y,w;if(_>0)if(S=d*p-f,v=d*f-p,w=c*_,S>=0)if(v>=-w)if(v<=w){const b=1/_;S*=b,v*=b,y=S*(S+d*v+2*f)+v*(d*S+v+2*p)+m}else v=c,S=Math.max(0,-(d*v+f)),y=-S*S+v*(v+2*p)+m;else v=-c,S=Math.max(0,-(d*v+f)),y=-S*S+v*(v+2*p)+m;else v<=-w?(S=Math.max(0,-(-d*c+f)),v=S>0?-c:Math.min(Math.max(-c,-p),c),y=-S*S+v*(v+2*p)+m):v<=w?(S=0,v=Math.min(Math.max(-c,-p),c),y=v*(v+2*p)+m):(S=Math.max(0,-(d*c+f)),v=S>0?c:Math.min(Math.max(-c,-p),c),y=-S*S+v*(v+2*p)+m);else v=d>0?-c:c,S=Math.max(0,-(d*v+f)),y=-S*S+v*(v+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,S),l&&l.copy(Od).addScaledVector(zl,v),y}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);const r=cr.dot(this.direction),l=cr.dot(cr)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,l,c,d,f,p;const m=1/this.direction.x,_=1/this.direction.y,S=1/this.direction.z,v=this.origin;return m>=0?(r=(e.min.x-v.x)*m,l=(e.max.x-v.x)*m):(r=(e.max.x-v.x)*m,l=(e.min.x-v.x)*m),_>=0?(c=(e.min.y-v.y)*_,d=(e.max.y-v.y)*_):(c=(e.max.y-v.y)*_,d=(e.min.y-v.y)*_),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),S>=0?(f=(e.min.z-v.z)*S,p=(e.max.z-v.z)*S):(f=(e.max.z-v.z)*S,p=(e.min.z-v.z)*S),r>p||f>l)||((f>r||r!==r)&&(r=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,r,l,c){const d=this.origin,f=this.direction,p=f.x,m=f.y,_=f.z,S=e.x-d.x,v=e.y-d.y,y=e.z-d.z,w=t.x-d.x,b=t.y-d.y,x=t.z-d.z,M=r.x-d.x,L=r.y-d.y,k=r.z-d.z,A=Math.abs(p),I=Math.abs(m),P=Math.abs(_);let E,D,J,z,V,ee,ie,j,X,ne,O,$;if(A>=I&&A>=P?(J=p,ee=S,X=w,$=M,p>=0?(E=m,D=_,z=v,V=y,ie=b,j=x,ne=L,O=k):(E=_,D=m,z=y,V=v,ie=x,j=b,ne=k,O=L)):I>=P?(J=m,ee=v,X=b,$=L,m>=0?(E=_,D=p,z=y,V=S,ie=x,j=w,ne=k,O=M):(E=p,D=_,z=S,V=y,ie=w,j=x,ne=M,O=k)):(J=_,ee=y,X=x,$=k,_>=0?(E=p,D=m,z=S,V=v,ie=w,j=b,ne=M,O=L):(E=m,D=p,z=v,V=S,ie=b,j=w,ne=L,O=M)),J===0)return null;const q=E/J,Q=D/J,F=1/J,K=z-q*ee,Me=V-Q*ee,G=ie-q*X,ue=j-Q*X,Se=ne-q*$,Ee=O-Q*$,ye=Se*ue-Ee*G,Ae=K*Ee-Me*Se,mt=G*Me-ue*K;if(l){if(ye<0||Ae<0||mt<0)return null}else if((ye<0||Ae<0||mt<0)&&(ye>0||Ae>0||mt>0))return null;const Qe=ye+Ae+mt;if(Qe===0)return null;const vt=F*(ye*ee+Ae*X+mt*$);return(Qe>0?vt<0:vt>0)?null:this.at(vt/Qe,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class If extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=lx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ag=new qt,us=new Nc,Bl=new So,og=new de,Hl=new de,Gl=new de,Vl=new de,zd=new de,Wl=new de,lg=new de,Xl=new de;class Ki extends bn{constructor(e=new mi,t=new If){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,t){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(c&&f){Wl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const _=f[p],S=c[p];_!==0&&(zd.fromBufferAttribute(S,e),d?Wl.addScaledVector(zd,_):Wl.addScaledVector(zd.sub(t),_))}t.add(Wl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Bl.copy(r.boundingSphere),Bl.applyMatrix4(c),us.copy(e.ray).recast(e.near),!(Bl.containsPoint(us.origin)===!1&&(us.intersectSphere(Bl,og)===null||us.origin.distanceToSquared(og)>(e.far-e.near)**2))&&(ag.copy(c).invert(),us.copy(e.ray).applyMatrix4(ag),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let l;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,_=c.attributes.uv1,S=c.attributes.normal,v=c.groups,y=c.drawRange;if(f!==null)if(Array.isArray(d))for(let w=0,b=v.length;w<b;w++){const x=v[w],M=d[x.materialIndex],L=Math.max(x.start,y.start),k=Math.min(f.count,Math.min(x.start+x.count,y.start+y.count));for(let A=L,I=k;A<I;A+=3){const P=f.getX(A),E=f.getX(A+1),D=f.getX(A+2);l=$l(this,M,e,r,m,_,S,P,E,D),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,y.start),b=Math.min(f.count,y.start+y.count);for(let x=w,M=b;x<M;x+=3){const L=f.getX(x),k=f.getX(x+1),A=f.getX(x+2);l=$l(this,d,e,r,m,_,S,L,k,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,b=v.length;w<b;w++){const x=v[w],M=d[x.materialIndex],L=Math.max(x.start,y.start),k=Math.min(p.count,Math.min(x.start+x.count,y.start+y.count));for(let A=L,I=k;A<I;A+=3){const P=A,E=A+1,D=A+2;l=$l(this,M,e,r,m,_,S,P,E,D),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,y.start),b=Math.min(p.count,y.start+y.count);for(let x=w,M=b;x<M;x+=3){const L=x,k=x+1,A=x+2;l=$l(this,d,e,r,m,_,S,L,k,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function JS(s,e,t,r,l,c,d,f){let p;if(e.side===Kn?p=r.intersectTriangle(d,c,l,!0,f):p=r.intersectTriangle(l,c,d,e.side===ms,f),p===null)return null;Xl.copy(f),Xl.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo(Xl);return m<t.near||m>t.far?null:{distance:m,point:Xl.clone(),object:s}}function $l(s,e,t,r,l,c,d,f,p,m){s.getVertexPosition(f,Hl),s.getVertexPosition(p,Gl),s.getVertexPosition(m,Vl);const _=JS(s,e,t,r,Hl,Gl,Vl,lg);if(_){const S=new de;Ti.getBarycoord(lg,Hl,Gl,Vl,S),l&&(_.uv=Ti.getInterpolatedAttribute(l,f,p,m,S,new Ut)),c&&(_.uv1=Ti.getInterpolatedAttribute(c,f,p,m,S,new Ut)),d&&(_.normal=Ti.getInterpolatedAttribute(d,f,p,m,S,new de),_.normal.dot(r.direction)>0&&_.normal.multiplyScalar(-1));const v={a:f,b:p,c:m,normal:new de,materialIndex:0};Ti.getNormal(Hl,Gl,Vl,v.normal),_.face=v,_.barycoord=S}return _}class eM extends Nn{constructor(e=null,t=1,r=1,l,c,d,f,p,m=An,_=An,S,v){super(null,d,f,p,m,_,l,c,S,v),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new So,tM=new Ut(.5,.5),ql=new de;class vo{constructor(e=new Fr,t=new Fr,r=new Fr,l=new Fr,c=new Fr,d=new Fr){this.planes=[e,t,r,l,c,d]}set(e,t,r,l,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const l=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],m=c[3],_=c[4],S=c[5],v=c[6],y=c[7],w=c[8],b=c[9],x=c[10],M=c[11],L=c[12],k=c[13],A=c[14],I=c[15];if(l[0].setComponents(m-d,y-_,M-w,I-L).normalize(),l[1].setComponents(m+d,y+_,M+w,I+L).normalize(),l[2].setComponents(m+f,y+S,M+b,I+k).normalize(),l[3].setComponents(m-f,y-S,M-b,I-k).normalize(),r)l[4].setComponents(p,v,x,A).normalize(),l[5].setComponents(m-p,y-v,M-x,I-A).normalize();else if(l[4].setComponents(m-p,y-v,M-x,I-A).normalize(),t===Ai)l[5].setComponents(m+p,y+v,M+x,I+A).normalize();else if(t===go)l[5].setComponents(p,v,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=tM.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const l=t[r];if(ql.x=l.normal.x>0?e.max.x:e.min.x,ql.y=l.normal.y>0?e.max.y:e.min.y,ql.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(ql)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const cg=new qt;class th{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let l=0;l<t.length;l++){const c=t[l];cg.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),r[l]===void 0&&(r[l]=new vo),r[l].setFromProjectionMatrix(cg,c.coordinateSystem,c.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let l=0;l<e._count;l++)t[l]===void 0&&(t[l]=new vo),t[l].copy(r[l]);return this._count=e._count,this}clone(){return new th().copy(this)}}class Dx extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new de,Mc=new de,ug=new qt,no=new Nc,Yl=new So,jd=new de,dg=new de;class nM extends bn{constructor(e=new mi,t=new Dx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let l=1,c=t.count;l<c;l++)Sc.fromBufferAttribute(t,l-1),Mc.fromBufferAttribute(t,l),r[l]=r[l-1],r[l]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Fn(r,1))}else xt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Yl.copy(r.boundingSphere),Yl.applyMatrix4(l),Yl.radius+=c,e.ray.intersectsSphere(Yl)===!1)return;ug.copy(l).invert(),no.copy(e.ray).applyMatrix4(ug);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,_=r.index,v=r.attributes.position;if(_!==null){const y=Math.max(0,d.start),w=Math.min(_.count,d.start+d.count);for(let b=y,x=w-1;b<x;b+=m){const M=_.getX(b),L=_.getX(b+1),k=Kl(this,e,no,p,M,L,b);k&&t.push(k)}if(this.isLineLoop){const b=_.getX(w-1),x=_.getX(y),M=Kl(this,e,no,p,b,x,w-1);M&&t.push(M)}}else{const y=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let b=y,x=w-1;b<x;b+=m){const M=Kl(this,e,no,p,b,b+1,b);M&&t.push(M)}if(this.isLineLoop){const b=Kl(this,e,no,p,w-1,y,w-1);b&&t.push(b)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Kl(s,e,t,r,l,c,d){const f=s.geometry.attributes.position;if(Sc.fromBufferAttribute(f,l),Mc.fromBufferAttribute(f,c),t.distanceSqToSegment(Sc,Mc,jd,dg)>r)return;jd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(jd);if(!(m<e.near||m>e.far))return{distance:m,point:dg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const fg=new de,hg=new de;class iM extends nM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let l=0,c=t.count;l<c;l+=2)fg.fromBufferAttribute(t,l),hg.fromBufferAttribute(t,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+fg.distanceTo(hg);e.setAttribute("lineDistance",new Fn(r,1))}else xt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pg=new qt,kf=new Nc,Zl=new So,Ql=new de;class rM extends bn{constructor(e=new mi,t=new Ix){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Zl.copy(r.boundingSphere),Zl.applyMatrix4(l),Zl.radius+=c,e.ray.intersectsSphere(Zl)===!1)return;pg.copy(l).invert(),kf.copy(e.ray).applyMatrix4(pg);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,S=r.attributes.position;if(m!==null){const v=Math.max(0,d.start),y=Math.min(m.count,d.start+d.count);for(let w=v,b=y;w<b;w++){const x=m.getX(w);Ql.fromBufferAttribute(S,x),mg(Ql,x,p,l,e,t,this)}}else{const v=Math.max(0,d.start),y=Math.min(S.count,d.start+d.count);for(let w=v,b=y;w<b;w++)Ql.fromBufferAttribute(S,w),mg(Ql,w,p,l,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function mg(s,e,t,r,l,c,d){const f=kf.distanceSqToPoint(s);if(f<t){const p=new de;kf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class kx extends Nn{constructor(e=[],t=ua,r,l,c,d,f,p,m,_){super(e,t,r,l,c,d,f,p,m,_),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class sM extends Nn{constructor(e,t,r,l,c,d,f,p,m){super(e,t,r,l,c,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends Nn{constructor(e,t,r=qi,l,c,d,f=An,p=An,m,_=Xr,S=1){if(_!==Xr&&_!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const v={width:e,height:t,depth:S};super(v,l,c,d,f,p,_,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Ux extends fa{constructor(e,t=qi,r=ua,l,c,d=An,f=An,p,m=Xr){const _={width:e,height:e,depth:1},S=[_,_,_,_,_,_];super(e,e,t,r,l,c,d,f,p,m),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Fx extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Mo extends mi{constructor(e=1,t=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const f=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],_=[],S=[];let v=0,y=0;w("z","y","x",-1,-1,r,t,e,d,c,0),w("z","y","x",1,-1,r,t,-e,d,c,1),w("x","z","y",1,1,e,r,t,l,d,2),w("x","z","y",1,-1,e,r,-t,l,d,3),w("x","y","z",1,-1,e,t,r,l,c,4),w("x","y","z",-1,-1,e,t,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(_,3)),this.setAttribute("uv",new Fn(S,2));function w(b,x,M,L,k,A,I,P,E,D,J){const z=A/E,V=I/D,ee=A/2,ie=I/2,j=P/2,X=E+1,ne=D+1;let O=0,$=0;const q=new de;for(let Q=0;Q<ne;Q++){const F=Q*V-ie;for(let K=0;K<X;K++){const Me=K*z-ee;q[b]=Me*L,q[x]=F*k,q[M]=j,m.push(q.x,q.y,q.z),q[b]=0,q[x]=0,q[M]=P>0?1:-1,_.push(q.x,q.y,q.z),S.push(K/E),S.push(1-Q/D),O+=1}}for(let Q=0;Q<D;Q++)for(let F=0;F<E;F++){const K=v+F+X*Q,Me=v+F+X*(Q+1),G=v+(F+1)+X*(Q+1),ue=v+(F+1)+X*Q;p.push(K,Me,ue),p.push(Me,G,ue),$+=6}f.addGroup(y,$,J),y+=$,v+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Eo extends mi{constructor(e=1,t=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:l};const c=e/2,d=t/2,f=Math.floor(r),p=Math.floor(l),m=f+1,_=p+1,S=e/f,v=t/p,y=[],w=[],b=[],x=[];for(let M=0;M<_;M++){const L=M*v-d;for(let k=0;k<m;k++){const A=k*S-c;w.push(A,-L,0),b.push(0,0,1),x.push(k/f),x.push(1-M/p)}}for(let M=0;M<p;M++)for(let L=0;L<f;L++){const k=L+m*M,A=L+m*(M+1),I=L+1+m*(M+1),P=L+1+m*M;y.push(k,A,P),y.push(A,I,P)}this.setIndex(y),this.setAttribute("position",new Fn(w,3)),this.setAttribute("normal",new Fn(b,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends mi{constructor(e=1,t=.4,r=12,l=48,c=Math.PI*2,d=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:f},r=Math.floor(r),l=Math.floor(l);const p=[],m=[],_=[],S=[],v=new de,y=new de,w=new de;for(let b=0;b<=r;b++){const x=d+b/r*f;for(let M=0;M<=l;M++){const L=M/l*c;y.x=(e+t*Math.cos(x))*Math.cos(L),y.y=(e+t*Math.cos(x))*Math.sin(L),y.z=t*Math.sin(x),m.push(y.x,y.y,y.z),v.x=e*Math.cos(L),v.y=e*Math.sin(L),w.subVectors(y,v).normalize(),_.push(w.x,w.y,w.z),S.push(M/l),S.push(b/r)}}for(let b=1;b<=r;b++)for(let x=1;x<=l;x++){const M=(l+1)*b+x-1,L=(l+1)*(b-1)+x-1,k=(l+1)*(b-1)+x,A=(l+1)*b+x;p.push(M,L,A),p.push(L,k,A)}this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(_,3)),this.setAttribute("uv",new Fn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ha(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const l=s[t][r];if(gg(l))l.isRenderTargetTexture?(xt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=l.clone();else if(Array.isArray(l))if(gg(l[0])){const c=[];for(let d=0,f=l.length;d<f;d++)c[d]=l[d].clone();e[t][r]=c}else e[t][r]=l.slice();else e[t][r]=l}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const r=ha(s[t]);for(const l in r)e[l]=r[l]}return e}function gg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function aM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ox(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const oM={clone:ha,merge:jn};var lM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,cM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=lM,this.fragmentShader=cM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=aM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=t[l.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ut().fromArray(l.value);break;case"v3":this.uniforms[r].value=new de().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(l.value);break;case"m4":this.uniforms[r].value=new qt().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class uM extends xs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class dM extends _s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Df,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class fM extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class hM extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Bd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(xg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!xg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function xg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class pM{constructor(e,t,r){const l=this;let c=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(_){f++,c===!1&&l.onStart!==void 0&&l.onStart(_,d,f),c=!0},this.itemEnd=function(_){d++,l.onProgress!==void 0&&l.onProgress(_,d,f),d===f&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(_){l.onError!==void 0&&l.onError(_)},this.resolveURL=function(_){return _=_.normalize("NFC"),p?p(_):_},this.setURLModifier=function(_){return p=_,this},this.addHandler=function(_,S){return m.push(_,S),this},this.removeHandler=function(_){const S=m.indexOf(_);return S!==-1&&m.splice(S,2),this},this.getHandler=function(_){for(let S=0,v=m.length;S<v;S+=2){const y=m[S],w=m[S+1];if(y.global&&(y.lastIndex=0),y.test(_))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const mM=new pM;class nh{constructor(e){this.manager=e!==void 0?e:mM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(l,c){r.load(e,l,t,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}nh.DEFAULT_MATERIAL_NAME="__DEFAULT";const ta=new WeakMap;class gM extends nh{constructor(e){super(e)}load(e,t,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Bd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){t&&t(d),c.manager.itemEnd(e)},0);else{let S=ta.get(d);S===void 0&&(S=[],ta.set(d,S)),S.push({onLoad:t,onError:l})}return d}const f=xo("img");function p(){_(),t&&t(this);const S=ta.get(this)||[];for(let v=0;v<S.length;v++){const y=S[v];y.onLoad&&y.onLoad(this)}ta.delete(this),c.manager.itemEnd(e)}function m(S){_(),l&&l(S),Bd.remove(`image:${e}`);const v=ta.get(this)||[];for(let y=0;y<v.length;y++){const w=v[y];w.onError&&w.onError(S)}ta.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function _(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Bd.add(`image:${e}`,f),c.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}}class xM extends nh{constructor(e){super(e)}load(e,t,r,l){const c=new Nn,d=new gM(this.manager);return d.setPriority(this.priority),d.setCache(this.cache),d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,t!==void 0&&t(c)},r,l),c}}class ih extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Hd=new qt,vg=new de,_g=new de;class zx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vo,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;vg.setFromMatrixPosition(e.matrixWorld),t.position.copy(vg),_g.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(_g),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,l){Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,f=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===go||e.reversedDepth?t.set(.5*d,0,0,.5*d+p,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+p,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Jl=new de,ec=new pa,Fi=new de;class jx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Jl,ec,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Jl,ec,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Jl,ec,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new de,yg=new Ut,Sg=new Ut;class qn extends jx{constructor(e=50,t=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(vd*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(vd*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,yg,Sg),t.subVectors(Sg,yg)}setViewOffset(e,t,r,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(vd*.5*this.fov)/this.zoom,r=2*t,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,t-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class vM extends zx{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||t.far;(r!==t.fov||l!==t.aspect||c!==t.far)&&(t.fov=r,t.aspect=l,t.far=c,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class _M extends ih{constructor(e,t,r=0,l=Math.PI/3,c=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=d,this.map=null,this.shadow=new vM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class yM extends zx{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class SM extends ih{constructor(e,t,r=0,l=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new yM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class MM extends jx{constructor(e=-1,t=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=l+t,p=l-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,_=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=_*this.view.offsetY,p=f-_*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class EM extends ih{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const na=-90,ia=1;class Uf extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(na,ia,e,t);l.layers=this.layers,this.add(l);const c=new qn(na,ia,e,t);c.layers=this.layers,this.add(c);const d=new qn(na,ia,e,t);d.layers=this.layers,this.add(d);const f=new qn(na,ia,e,t);f.layers=this.layers,this.add(f);const p=new qn(na,ia,e,t);p.layers=this.layers,this.add(p);const m=new qn(na,ia,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,l,c,d,f,p]=t;for(const m of t)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===go)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,_]=this.children,S=e.getRenderTarget(),v=e.getActiveCubeFace(),y=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=b,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,_),e.setRenderTarget(S,v,y),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class wM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Mg=new qt;class bM{constructor(e,t,r=0,l=1/0){this.ray=new Nc(e,t),this.near=r,this.far=l,this.camera=null,this.layers=new eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Mg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Mg),this}intersectObject(e,t=!0,r=[]){return Ff(e,this,r,t),r.sort(Eg),r}intersectObjects(e,t=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Ff(e[l],this,r,t);return r.sort(Eg),r}}function Eg(s,e){return s.distance-e.distance}function Ff(s,e,t,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Ff(c[d],e,t,!0)}}class TM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,xt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class CM extends iM{constructor(e=10,t=10,r=4473924,l=8947848){r=new Tt(r),l=new Tt(l);const c=t/2,d=e/t,f=e/2,p=[],m=[];for(let v=0,y=0,w=-f;v<=t;v++,w+=d){p.push(-f,0,w,f,0,w),p.push(w,0,-f,w,0,f);const b=v===c?r:l;b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3,b.toArray(m,y),y+=3}const _=new mi;_.setAttribute("position",new Fn(p,3)),_.setAttribute("color",new Fn(m,3));const S=new Dx({vertexColors:!0,toneMapped:!1});super(_,S),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function wg(s,e,t,r){const l=AM(r);switch(t){case Sx:return s*e;case Ex:return s*e/l.components*l.byteLength;case Yf:return s*e/l.components*l.byteLength;case gs:return s*e*2/l.components*l.byteLength;case Kf:return s*e*2/l.components*l.byteLength;case Mx:return s*e*3/l.components*l.byteLength;case Gi:return s*e*4/l.components*l.byteLength;case Zf:return s*e*4/l.components*l.byteLength;case ac:case oc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rf:case af:return Math.max(s,16)*Math.max(e,8)/4;case nf:case sf:return Math.max(s,8)*Math.max(e,8)/2;case of:case lf:case uf:case df:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cf:case gc:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Cf:case Af:case Nf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rf:case Pf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function AM(s){switch(s){case ri:case xx:return{byteLength:1,components:1};case mo:case vx:case Yi:return{byteLength:2,components:1};case $f:case qf:return{byteLength:2,components:4};case qi:case Xf:case Hi:return{byteLength:4,components:1};case _x:case yx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Wf}}));typeof window<"u"&&(window.__THREE__?xt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Bx(){let s=null,e=!1,t=null,r=null;function l(c,d){r=s.requestAnimationFrame(l),t(c,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function NM(s){const e=new WeakMap;function t(f,p){const m=f.array,_=f.usage,S=m.byteLength,v=s.createBuffer();s.bindBuffer(p,v),s.bufferData(p,m,_),f.onUploadCallback();let y;if(m instanceof Float32Array)y=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)y=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?y=s.HALF_FLOAT:y=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)y=s.SHORT;else if(m instanceof Uint32Array)y=s.UNSIGNED_INT;else if(m instanceof Int32Array)y=s.INT;else if(m instanceof Int8Array)y=s.BYTE;else if(m instanceof Uint8Array)y=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)y=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:v,type:y,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,p,m){const _=p.array,S=p.updateRanges;if(s.bindBuffer(m,f),S.length===0)s.bufferSubData(m,0,_);else{S.sort((y,w)=>y.start-w.start);let v=0;for(let y=1;y<S.length;y++){const w=S[v],b=S[y];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++v,S[v]=b)}S.length=v+1;for(let y=0,w=S.length;y<w;y++){const b=S[y];s.bufferSubData(m,b.start*_.BYTES_PER_ELEMENT,_,b.start,b.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const _=e.get(f);(!_||_.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:l,remove:c,update:d}}var RM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,PM=`#ifdef USE_ALPHAHASH
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
#endif`,LM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,DM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,IM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,kM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,UM=`#ifdef USE_AOMAP
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
#endif`,FM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,OM=`#ifdef USE_BATCHING
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
#endif`,zM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,BM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,GM=`#ifdef USE_IRIDESCENCE
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
#endif`,VM=`#ifdef USE_BUMPMAP
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
#endif`,WM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,XM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$M=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,qM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,KM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,ZM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,QM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,JM=`#define PI 3.141592653589793
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
} // validated`,e1=`vec3 transformedNormal = objectNormal;
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
#endif`,t1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,n1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,i1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,r1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,s1="gl_FragColor = linearToOutputTexel( gl_FragColor );",a1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,o1=`#ifdef USE_ENVMAP
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
#endif`,l1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,c1=`#ifdef USE_ENVMAP
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
#endif`,u1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,d1=`#ifdef USE_ENVMAP
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
#endif`,f1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,h1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,p1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,m1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,g1=`#ifdef USE_GRADIENTMAP
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
}`,x1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,v1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,y1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,S1=`#ifdef USE_ENVMAP
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
#endif`,M1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,E1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,w1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,b1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,T1=`PhysicalMaterial material;
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
#endif`,C1=`uniform sampler2D dfgLUT;
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
}`,A1=`
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
#endif`,N1=`#if defined( RE_IndirectDiffuse )
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
#endif`,R1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,P1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,L1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,D1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,I1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,k1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,U1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,F1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,O1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z1=`#if defined( USE_POINTS_UV )
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
#endif`,j1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,B1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,H1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,G1=`#if defined( USE_MORPHCOLORS )
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
#endif`,V1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,W1=`#ifdef USE_MORPHTARGETS
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
#endif`,X1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,q1=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Y1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,K1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Q1=`#ifdef USE_NORMALMAP
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
#endif`,J1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,sE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,aE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,pE=`float getShadowMask() {
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
}`,mE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gE=`#ifdef USE_SKINNING
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
#endif`,xE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,vE=`#ifdef USE_SKINNING
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
#endif`,_E=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ME=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,EE=`#ifdef USE_TRANSMISSION
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
#endif`,wE=`#ifdef USE_TRANSMISSION
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
#endif`,bE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const NE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,RE=`uniform sampler2D t2D;
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
}`,PE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LE=`uniform float backgroundBlurriness;
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
}`,DE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,kE=`#include <common>
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
}`,UE=`#if DEPTH_PACKING == 3200
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
}`,FE=`#define DISTANCE
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
}`,OE=`#define DISTANCE
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
}`,zE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,BE=`uniform float scale;
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
}`,HE=`uniform vec3 diffuse;
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
}`,GE=`#include <common>
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
}`,VE=`uniform vec3 diffuse;
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
}`,WE=`#define LAMBERT
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
}`,XE=`#define LAMBERT
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
}`,$E=`#define MATCAP
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
}`,qE=`#define MATCAP
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
}`,YE=`#define NORMAL
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
}`,KE=`#define NORMAL
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
}`,ZE=`#define PHONG
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
}`,QE=`#define PHONG
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
}`,JE=`#define STANDARD
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
}`,ew=`#define STANDARD
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
}`,tw=`#define TOON
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
}`,nw=`#define TOON
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
}`,iw=`uniform float size;
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
}`,rw=`uniform vec3 diffuse;
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
}`,sw=`#include <common>
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
}`,aw=`uniform vec3 color;
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
}`,ow=`uniform float rotation;
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
}`,lw=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:RM,alphahash_pars_fragment:PM,alphamap_fragment:LM,alphamap_pars_fragment:DM,alphatest_fragment:IM,alphatest_pars_fragment:kM,aomap_fragment:UM,aomap_pars_fragment:FM,batching_pars_vertex:OM,batching_vertex:zM,begin_vertex:jM,beginnormal_vertex:BM,bsdfs:HM,iridescence_fragment:GM,bumpmap_pars_fragment:VM,clipping_planes_fragment:WM,clipping_planes_pars_fragment:XM,clipping_planes_pars_vertex:$M,clipping_planes_vertex:qM,color_fragment:YM,color_pars_fragment:KM,color_pars_vertex:ZM,color_vertex:QM,common:JM,defaultnormal_vertex:e1,displacementmap_pars_vertex:t1,displacementmap_vertex:n1,emissivemap_fragment:i1,emissivemap_pars_fragment:r1,colorspace_fragment:s1,colorspace_pars_fragment:a1,envmap_fragment:o1,envmap_common_pars_fragment:l1,envmap_pars_fragment:c1,envmap_pars_vertex:u1,envmap_physical_pars_fragment:S1,envmap_vertex:d1,fog_vertex:f1,fog_pars_vertex:h1,fog_fragment:p1,fog_pars_fragment:m1,gradientmap_pars_fragment:g1,lightmap_pars_fragment:x1,lights_lambert_fragment:v1,lights_lambert_pars_fragment:_1,lights_pars_begin:y1,lights_toon_fragment:M1,lights_toon_pars_fragment:E1,lights_phong_fragment:w1,lights_phong_pars_fragment:b1,lights_physical_fragment:T1,lights_physical_pars_fragment:C1,lights_fragment_begin:A1,lights_fragment_maps:N1,lights_fragment_end:R1,lightprobes_pars_fragment:P1,logdepthbuf_fragment:L1,logdepthbuf_pars_fragment:D1,logdepthbuf_pars_vertex:I1,logdepthbuf_vertex:k1,map_fragment:U1,map_pars_fragment:F1,map_particle_fragment:O1,map_particle_pars_fragment:z1,metalnessmap_fragment:j1,metalnessmap_pars_fragment:B1,morphinstance_vertex:H1,morphcolor_vertex:G1,morphnormal_vertex:V1,morphtarget_pars_vertex:W1,morphtarget_vertex:X1,normal_fragment_begin:$1,normal_fragment_maps:q1,normal_pars_fragment:Y1,normal_pars_vertex:K1,normal_vertex:Z1,normalmap_pars_fragment:Q1,clearcoat_normal_fragment_begin:J1,clearcoat_normal_fragment_maps:eE,clearcoat_pars_fragment:tE,iridescence_pars_fragment:nE,opaque_fragment:iE,packing:rE,premultiplied_alpha_fragment:sE,project_vertex:aE,dithering_fragment:oE,dithering_pars_fragment:lE,roughnessmap_fragment:cE,roughnessmap_pars_fragment:uE,shadowmap_pars_fragment:dE,shadowmap_pars_vertex:fE,shadowmap_vertex:hE,shadowmask_pars_fragment:pE,skinbase_vertex:mE,skinning_pars_vertex:gE,skinning_vertex:xE,skinnormal_vertex:vE,specularmap_fragment:_E,specularmap_pars_fragment:yE,tonemapping_fragment:SE,tonemapping_pars_fragment:ME,transmission_fragment:EE,transmission_pars_fragment:wE,uv_pars_fragment:bE,uv_pars_vertex:TE,uv_vertex:CE,worldpos_vertex:AE,background_vert:NE,background_frag:RE,backgroundCube_vert:PE,backgroundCube_frag:LE,cube_vert:DE,cube_frag:IE,depth_vert:kE,depth_frag:UE,distance_vert:FE,distance_frag:OE,equirect_vert:zE,equirect_frag:jE,linedashed_vert:BE,linedashed_frag:HE,meshbasic_vert:GE,meshbasic_frag:VE,meshlambert_vert:WE,meshlambert_frag:XE,meshmatcap_vert:$E,meshmatcap_frag:qE,meshnormal_vert:YE,meshnormal_frag:KE,meshphong_vert:ZE,meshphong_frag:QE,meshphysical_vert:JE,meshphysical_frag:ew,meshtoon_vert:tw,meshtoon_frag:nw,points_vert:iw,points_frag:rw,shadow_vert:sw,shadow_frag:aw,sprite_vert:ow,sprite_frag:lw},qe={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},zi={basic:{uniforms:jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:jn([qe.common,qe.specularmap,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,qe.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:jn([qe.common,qe.envmap,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.roughnessmap,qe.metalnessmap,qe.fog,qe.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:jn([qe.common,qe.aomap,qe.lightmap,qe.emissivemap,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.gradientmap,qe.fog,qe.lights,{emissive:{value:new Tt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,qe.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:jn([qe.points,qe.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:jn([qe.common,qe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:jn([qe.common,qe.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:jn([qe.common,qe.bumpmap,qe.normalmap,qe.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:jn([qe.sprite,qe.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:jn([qe.common,qe.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:jn([qe.lights,qe.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};zi.physical={uniforms:jn([zi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const tc={r:0,b:0,g:0},cw=new qt,Hx=new Et;Hx.set(-1,0,0,0,1,0,0,0,1);function uw(s,e,t,r,l,c){const d=new Tt(0);let f=l===!0?0:1,p,m,_=null,S=0,v=null;function y(L){let k=L.isScene===!0?L.background:null;if(k&&k.isTexture){const A=L.backgroundBlurriness>0;k=e.get(k,A)}return k}function w(L){let k=!1;const A=y(L);A===null?x(d,f):A&&A.isColor&&(x(A,1),k=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(s.autoClear||k)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function b(L,k){const A=y(k);A&&A.isCubeTexture?(m===void 0&&(m=new Ki(new Mo(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:ha(zi.backgroundCube.uniforms),vertexShader:zi.backgroundCube.vertexShader,fragmentShader:zi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,P,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.backgroundBlurriness.value=k.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(cw.makeRotationFromEuler(k.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Hx),m.material.toneMapped=It.getTransfer(A.colorSpace)!==Vt,(_!==A||S!==A.version||v!==s.toneMapping)&&(m.material.needsUpdate=!0,_=A,S=A.version,v=s.toneMapping),m.layers.enableAll(),L.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Ki(new Eo(2,2),new xs({name:"BackgroundMaterial",uniforms:ha(zi.background.uniforms),vertexShader:zi.background.vertexShader,fragmentShader:zi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=k.backgroundIntensity,p.material.toneMapped=It.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(_!==A||S!==A.version||v!==s.toneMapping)&&(p.material.needsUpdate=!0,_=A,S=A.version,v=s.toneMapping),p.layers.enableAll(),L.unshift(p,p.geometry,p.material,0,0,null))}function x(L,k){L.getRGB(tc,Ox(s)),t.buffers.color.setClear(tc.r,tc.g,tc.b,k,c)}function M(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(L,k=1){d.set(L),f=k,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(L){f=L,x(d,f)},render:w,addToRenderList:b,dispose:M}}function dw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=v(null);let c=l,d=!1;function f(V,ee,ie,j,X){let ne=!1;const O=S(V,j,ie,ee);c!==O&&(c=O,m(c.object)),ne=y(V,j,ie,X),ne&&w(V,j,ie,X),X!==null&&e.update(X,s.ELEMENT_ARRAY_BUFFER),(ne||d)&&(d=!1,A(V,ee,ie,j),X!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function p(){return s.createVertexArray()}function m(V){return s.bindVertexArray(V)}function _(V){return s.deleteVertexArray(V)}function S(V,ee,ie,j){const X=j.wireframe===!0;let ne=r[ee.id];ne===void 0&&(ne={},r[ee.id]=ne);const O=V.isInstancedMesh===!0?V.id:0;let $=ne[O];$===void 0&&($={},ne[O]=$);let q=$[ie.id];q===void 0&&(q={},$[ie.id]=q);let Q=q[X];return Q===void 0&&(Q=v(p()),q[X]=Q),Q}function v(V){const ee=[],ie=[],j=[];for(let X=0;X<t;X++)ee[X]=0,ie[X]=0,j[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ee,enabledAttributes:ie,attributeDivisors:j,object:V,attributes:{},index:null}}function y(V,ee,ie,j){const X=c.attributes,ne=ee.attributes;let O=0;const $=ie.getAttributes();for(const q in $)if($[q].location>=0){const F=X[q];let K=ne[q];if(K===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(K=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(K=V.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;O++}return c.attributesNum!==O||c.index!==j}function w(V,ee,ie,j){const X={},ne=ee.attributes;let O=0;const $=ie.getAttributes();for(const q in $)if($[q].location>=0){let F=ne[q];F===void 0&&(q==="instanceMatrix"&&V.instanceMatrix&&(F=V.instanceMatrix),q==="instanceColor"&&V.instanceColor&&(F=V.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),X[q]=K,O++}c.attributes=X,c.attributesNum=O,c.index=j}function b(){const V=c.newAttributes;for(let ee=0,ie=V.length;ee<ie;ee++)V[ee]=0}function x(V){M(V,0)}function M(V,ee){const ie=c.newAttributes,j=c.enabledAttributes,X=c.attributeDivisors;ie[V]=1,j[V]===0&&(s.enableVertexAttribArray(V),j[V]=1),X[V]!==ee&&(s.vertexAttribDivisor(V,ee),X[V]=ee)}function L(){const V=c.newAttributes,ee=c.enabledAttributes;for(let ie=0,j=ee.length;ie<j;ie++)ee[ie]!==V[ie]&&(s.disableVertexAttribArray(ie),ee[ie]=0)}function k(V,ee,ie,j,X,ne,O){O===!0?s.vertexAttribIPointer(V,ee,ie,X,ne):s.vertexAttribPointer(V,ee,ie,j,X,ne)}function A(V,ee,ie,j){b();const X=j.attributes,ne=ie.getAttributes(),O=ee.defaultAttributeValues;for(const $ in ne){const q=ne[$];if(q.location>=0){let Q=X[$];if(Q===void 0&&($==="instanceMatrix"&&V.instanceMatrix&&(Q=V.instanceMatrix),$==="instanceColor"&&V.instanceColor&&(Q=V.instanceColor)),Q!==void 0){const F=Q.normalized,K=Q.itemSize,Me=e.get(Q);if(Me===void 0)continue;const G=Me.buffer,ue=Me.type,Se=Me.bytesPerElement,Ee=ue===s.INT||ue===s.UNSIGNED_INT||Q.gpuType===Xf;if(Q.isInterleavedBufferAttribute){const ye=Q.data,Ae=ye.isInterleavedBuffer===!0?ye.stride:ye.itemSize,mt=Q.offset;if(ye.isInstancedInterleavedBuffer||ye.isInstancedBufferAttribute){for(let Qe=0;Qe<q.locationSize;Qe++)M(q.location+Qe,ye.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=ye.meshPerAttribute*ye.count)}else for(let Qe=0;Qe<q.locationSize;Qe++)x(q.location+Qe);s.bindBuffer(s.ARRAY_BUFFER,G);for(let Qe=0;Qe<q.locationSize;Qe++)k(q.location+Qe,K/q.locationSize,ue,F,Ae*Se,(mt+K/q.locationSize*Qe)*Se,Ee)}else{if(Q.isInstancedBufferAttribute){for(let ye=0;ye<q.locationSize;ye++)M(q.location+ye,Q.meshPerAttribute);V.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ye=0;ye<q.locationSize;ye++)x(q.location+ye);s.bindBuffer(s.ARRAY_BUFFER,G);for(let ye=0;ye<q.locationSize;ye++)k(q.location+ye,K/q.locationSize,ue,F,K*Se,K/q.locationSize*ye*Se,Ee)}}else if(O!==void 0){const F=O[$];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(q.location,F);break;case 3:s.vertexAttrib3fv(q.location,F);break;case 4:s.vertexAttrib4fv(q.location,F);break;default:s.vertexAttrib1fv(q.location,F)}}}}L()}function I(){J();for(const V in r){const ee=r[V];for(const ie in ee){const j=ee[ie];for(const X in j){const ne=j[X];for(const O in ne)_(ne[O].object),delete ne[O];delete j[X]}}delete r[V]}}function P(V){if(r[V.id]===void 0)return;const ee=r[V.id];for(const ie in ee){const j=ee[ie];for(const X in j){const ne=j[X];for(const O in ne)_(ne[O].object),delete ne[O];delete j[X]}}delete r[V.id]}function E(V){for(const ee in r){const ie=r[ee];for(const j in ie){const X=ie[j];if(X[V.id]===void 0)continue;const ne=X[V.id];for(const O in ne)_(ne[O].object),delete ne[O];delete X[V.id]}}}function D(V){for(const ee in r){const ie=r[ee],j=V.isInstancedMesh===!0?V.id:0,X=ie[j];if(X!==void 0){for(const ne in X){const O=X[ne];for(const $ in O)_(O[$].object),delete O[$];delete X[ne]}delete ie[j],Object.keys(ie).length===0&&delete r[ee]}}}function J(){z(),d=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:J,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:P,releaseStatesOfObject:D,releaseStatesOfProgram:E,initAttributes:b,enableAttribute:x,disableUnusedAttributes:L}}function fw(s,e,t){let r;function l(p){r=p}function c(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function d(p,m,_){_!==0&&(s.drawArraysInstanced(r,p,m,_),t.update(m,r,_))}function f(p,m,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,_);let v=0;for(let y=0;y<_;y++)v+=m[y];t.update(v,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function hw(s,e,t,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(E){return!(E!==Gi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const D=E===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ri&&E!==Hi&&!D&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const _=p(m);_!==m&&(xt("WebGLRenderer:",m,"not supported, using",_,"instead."),m=_);const S=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),v=t.logarithmicDepthBuffer===!0&&S===!1;t.reversedDepthBuffer===!0&&S===!1&&xt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&S===!0&&xt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const y=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),M=s.getParameter(s.MAX_VERTEX_ATTRIBS),L=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),k=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),P=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reversedDepthBuffer:S,maxTextures:y,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:x,maxAttributes:M,maxVertexUniforms:L,maxVaryings:k,maxFragmentUniforms:A,maxSamples:I,samples:P}}function pw(s){const e=this;let t=null,r=0,l=!1,c=!1;const d=new Fr,f=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(S,v){const y=S.length!==0||v||r!==0||l;return l=v,r=S.length,y},this.beginShadows=function(){c=!0,_(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(S,v){t=_(S,v,0)},this.setState=function(S,v,y){const w=S.clippingPlanes,b=S.clipIntersection,x=S.clipShadows,M=s.get(S);if(!l||w===null||w.length===0||c&&!x)c?_(null):m();else{const L=c?0:r,k=L*4;let A=M.clippingState||null;p.value=A,A=_(w,v,k,y);for(let I=0;I!==k;++I)A[I]=t[I];M.clippingState=A,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=L}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function _(S,v,y,w){const b=S!==null?S.length:0;let x=null;if(b!==0){if(x=p.value,w!==!0||x===null){const M=y+b*4,L=v.matrixWorldInverse;f.getNormalMatrix(L),(x===null||x.length<M)&&(x=new Float32Array(M));for(let k=0,A=y;k!==b;++k,A+=4)d.copy(S[k]).applyMatrix4(L,f),d.normal.toArray(x,A),x[A+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,x}}class rh extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new kx(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Mo(5,5,5),c=new xs({name:"CubemapFromEquirect",uniforms:ha(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:oa});c.uniforms.tEquirect.value=t;const d=new Ki(l,c),f=t.minFilter;return t.minFilter===Br&&(t.minFilter=Yn),new Uf(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,l);e.setRenderTarget(c)}}const bg=256,mw=3,gw=20,Gx=256,Vx=16,xw=3,vw=new de,_w=new Tt;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Uf(1,10,null),this._boxMesh=new Ki(new Mo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,l=100,c={}){const{size:d=256,position:f=vw}=c,p=this._renderer;this._setSize(d);const m=this._allocateTarget(),_=this._getSourceTarget(!0);t>0&&(_.texture.mipmapsAutoUpdate=!1);const S=p.autoClear,v=p.autoClearColor,y=p.autoClearDepth,w=p.autoClearStencil,b=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,b===null&&(e.background=p.getClearColor(_w));const x=new Uf(r,l,_);return x.position.copy(f),x.update(p,e),p.autoClear=S,p.autoClearColor=v,p.autoClearDepth=y,p.autoClearStencil=w,e.background=b,t>0&&(_.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ag(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(bg,PS(e))}_fromTexture(e,t){e.mapping===ua||e.mapping===po?this._setSize(e.image.length===0?bg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Tg(e,!1,!1),r=Math.log2(e)-mw;for(let l=0;l<=r;l++)t.texture.mipmaps.push({width:e>>l,height:e>>l});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Tg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const l=this._boxMesh,c=this._cubeCamera;l.material=r,c.renderTarget=e,c.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),c.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ua||e.mapping===po?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ag()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Cg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=yw(),this._integrationMaterial=Sw());const t=this._cubeSize,r=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(t/Vx);for(let d=0;d<=r;d++){const f=wc.lodToRoughness(d,r);if(d>r-xw)c.roughness.value=f,this._renderCube(e,d,this._integrationMaterial);else{const p=f>0?Math.log2(t)+.5*Math.log2(6/(Gx*Math.pow(f,4)))+.5:0;l.roughness.value=f,l.lodBias.value=p,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Mw());const r=this._blurMaterial,l=r.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(e,0,r),l.envMap.value=e.texture,this._renderCube(c,0,r)}}function Tg(s,e,t){return new rh(s,{minFilter:Br,generateMipmaps:e,type:Yi,colorSpace:vc,depthBuffer:t})}function wo(s,e,t){return new xs({name:s,uniforms:e,vertexShader:At.cube_vert,fragmentShader:t,side:Kn,blending:oa,depthTest:!1,depthWrite:!1})}function yw(){return wo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Gx}u

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
	`)}function Sw(){return wo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Vx}},`

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
	`)}function Mw(){return wo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${gw}
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
	`)}function Cg(){return wo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ag(){return wo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Ew(s){let e=new WeakMap,t=new WeakMap,r=null;function l(v,y=!1){return v==null?null:y?d(v):c(v)}function c(v){if(v&&v.isTexture){const y=v.mapping;if(y===pd||y===md)if(e.has(v)){const w=e.get(v).texture;return f(w,v.mapping)}else{const w=v.image;if(w&&w.height>0){const b=new rh(w.height);return b.fromEquirectangularTexture(s,v),e.set(v,b),v.addEventListener("dispose",m),f(b.texture,v.mapping)}else return null}}return v}function d(v){if(v&&v.isTexture&&v.isPMREMTexture!==!0){const y=v.mapping,w=y===pd||y===md,b=y===ua||y===po;if(w||b){let x=t.get(v);const M=x!==void 0?x.texture.pmremVersion:0;if(v.isRenderTargetTexture&&v.pmremVersion!==M)return r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(v,x):r.fromCubemap(v,x),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),x.texture;if(x!==void 0)return x.texture;{const L=v.image;return w&&L&&L.height>0||b&&L&&p(L)?(r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(v):r.fromCubemap(v),x.texture.pmremVersion=v.pmremVersion,t.set(v,x),v.addEventListener("dispose",_),x.texture):null}}}return v}function f(v,y){return y===pd?v.mapping=ua:y===md&&(v.mapping=po),v}function p(v){let y=0;const w=6;for(let b=0;b<w;b++)v[b]!==void 0&&y++;return y===w}function m(v){const y=v.target;y.removeEventListener("dispose",m);const w=e.get(y);w!==void 0&&(e.delete(y),w.dispose())}function _(v){const y=v.target;y.removeEventListener("dispose",_);const w=t.get(y);w!==void 0&&(t.delete(y),w.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:S}}function ww(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const l=t(r);return l===null&&uc("WebGLRenderer: "+r+" extension not supported."),l}}}function bw(s,e,t,r){const l={},c=new WeakMap,d=new FinalizationRegistry(w=>delete l[w]);function f(w){p(w.target)}function p(w){w.index!==null&&e.remove(w.index);for(const x in w.attributes)e.remove(w.attributes[x]);w.removeEventListener("dispose",f),delete l[w.id],d.unregister(w);const b=c.get(w);b&&(e.remove(b),c.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,b){return l[b.id]!==void 0||(b.addEventListener("dispose",f),l[b.id]=new WeakRef(b),d.register(b,b.id,b),t.memory.geometries++),b}function _(w){const b=w.attributes;for(const x in b)e.update(b[x],s.ARRAY_BUFFER)}function S(w){const b=w.index,x=w.attributes.position;let M=0;if(x===void 0)return;const L=b!==null?b.array.length:x.array.length/3-1,k=x.count>=65535?Lx:Px,A=new k(Math.ceil(L/3)*6,1),I=A.array;if(b!==null){const E=b.array;M=b.version;for(let D=0,J=0;D<L;D+=3){const z=E[D+0],V=E[D+1],ee=E[D+2];I[J++]=z,I[J++]=V,I[J++]=V,I[J++]=ee,I[J++]=ee,I[J++]=z}}else{M=x.version;for(let E=0,D=0;E<L;E+=3){const J=E+0,z=E+1,V=E+2;I[D++]=J,I[D++]=z,I[D++]=z,I[D++]=V,I[D++]=V,I[D++]=J}}A.version=M;const P=c.get(w);P&&e.remove(P),c.set(w,A)}function v(w){const b=c.get(w);if(b){const x=w.index;x!==null&&b.version<x.version&&S(w)}else S(w);return c.get(w)}function y(){for(const w in l){const b=l[w].deref();b!==void 0&&p(b)}}return{get:m,update:_,getWireframeAttribute:v,dispose:y}}function Tw(s,e,t){let r;function l(S){r=S}let c,d;function f(S){c=S.type,d=S.bytesPerElement}function p(S,v){s.drawElements(r,v,c,S*d),t.update(v,r,1)}function m(S,v,y){y!==0&&(s.drawElementsInstanced(r,v,c,S*d,y),t.update(v,r,y))}function _(S,v,y){if(y===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,v,0,c,S,0,y);let b=0;for(let x=0;x<y;x++)b+=v[x];t.update(b,r,1)}this.setMode=l,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=_}function Cw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(c/3);break;case s.LINES:t.lines+=f*(c/2);break;case s.LINE_STRIP:t.lines+=f*(c-1);break;case s.LINE_LOOP:t.lines+=f*c;break;case s.POINTS:t.points+=f*c;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:r}}function Aw(s,e,t){const r=new WeakMap,l=new rn;function c(d,f,p){const m=d.morphTargetInfluences,_=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=_!==void 0?_.length:0;let v=r.get(f);if(v===void 0||v.count!==S){let z=function(){D.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var y=z;v!==void 0&&v.texture.dispose();const w=f.morphAttributes.position!==void 0,b=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,M=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],k=f.morphAttributes.color||[];let A=0;w===!0&&(A=1),b===!0&&(A=2),x===!0&&(A=3);let I=f.attributes.position.count*A,P=1;I>e.maxTextureSize&&(P=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*P*4*S),D=new Ax(E,I,P,S);D.type=Hi,D.needsUpdate=!0;const J=A*4;for(let V=0;V<S;V++){const ee=M[V],ie=L[V],j=k[V],X=I*P*4*V;for(let ne=0;ne<ee.count;ne++){const O=ne*J;w===!0&&(l.fromBufferAttribute(ee,ne),E[X+O+0]=l.x,E[X+O+1]=l.y,E[X+O+2]=l.z,E[X+O+3]=0),b===!0&&(l.fromBufferAttribute(ie,ne),E[X+O+4]=l.x,E[X+O+5]=l.y,E[X+O+6]=l.z,E[X+O+7]=0),x===!0&&(l.fromBufferAttribute(j,ne),E[X+O+8]=l.x,E[X+O+9]=l.y,E[X+O+10]=l.z,E[X+O+11]=j.itemSize===4?l.w:1)}}v={count:S,texture:D,size:new Ut(I,P)},r.set(f,v),f.addEventListener("dispose",z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let w=0;for(let x=0;x<m.length;x++)w+=m[x];const b=f.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",b),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",v.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",v.size)}return{update:c}}function Nw(s,e,t,r,l){let c=new WeakMap;function d(m){const _=l.render.frame,S=m.geometry,v=e.get(m,S);if(c.get(v)!==_&&(e.update(v),c.set(v,_)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==_&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,_))),m.isSkinnedMesh){const y=m.skeleton;c.get(y)!==_&&(y.update(),c.set(y,_))}return v}function f(){c=new WeakMap}function p(m){const _=m.target;_.removeEventListener("dispose",p),r.releaseStatesOfObject(_),t.remove(_.instanceMatrix),_.instanceColor!==null&&t.remove(_.instanceColor)}return{update:d,dispose:f}}const Rw={[cx]:"LINEAR_TONE_MAPPING",[ux]:"REINHARD_TONE_MAPPING",[dx]:"CINEON_TONE_MAPPING",[fx]:"ACES_FILMIC_TONE_MAPPING",[px]:"AGX_TONE_MAPPING",[mx]:"NEUTRAL_TONE_MAPPING",[hx]:"CUSTOM_TONE_MAPPING"};function Pw(s,e,t,r,l,c){const d=new Xi(e,t,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null,m=null;const _=new mi;_.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),_.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const S=new uM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),v=new Ki(_,S),y=new MM(-1,1,1,-1,0,1);let w=null,b=null,x=!1,M,L=null,k=[],A=!1;this.setSize=function(I,P){d.setSize(I,P),f!==null&&f.setSize(I,P),p!==null&&p.setSize(I,P);for(let E=0;E<k.length;E++){const D=k[E];D.setSize&&D.setSize(I,P)}},this.setEffects=function(I){k=I,A=k.length>0&&k[0].isRenderPass===!0;const P=d.width,E=d.height;k.length>0&&f===null&&(f=new Xi(P,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(P,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}));const D=l===!0&&k.some(J=>J.needsDepthTexture===!0);D!==(d.depthTexture!==null)&&(D===!0&&m===null&&(m=new fa(P,E),c===!0&&(m.format=Hr,m.type=da)),d.dispose(),d.depthTexture=D?m:null,d.resolveDepthBuffer=D,d.storeMultisampledDepthBuffer=D);for(let J=0;J<k.length;J++){const z=k[J];z.setSize&&z.setSize(P,E),D&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(m)}},this.begin=function(I,P){if(x||I.toneMapping===dr&&k.length===0)return!1;if(L=P,P!==null){const E=P.width,D=P.height;(d.width!==E||d.height!==D)&&this.setSize(E,D)}return A===!1&&I.setRenderTarget(d),M=I.toneMapping,I.toneMapping=dr,!0},this.hasRenderPass=function(){return A},this.end=function(I,P){I.toneMapping=M,x=!0;let E=d,D=f;for(let J=0;J<k.length;J++){const z=k[J];z.enabled!==!1&&(z.render(I,D,E,P),z.needsSwap!==!1&&(E=D,D=D===f?p:f))}if(w!==I.outputColorSpace||b!==I.toneMapping){w=I.outputColorSpace,b=I.toneMapping,S.defines={},It.getTransfer(w)===Vt&&(S.defines.SRGB_TRANSFER="");const J=Rw[b];J&&(S.defines[J]=""),S.needsUpdate=!0}S.uniforms.tDiffuse.value=E.texture,I.setRenderTarget(L),I.render(v,y),L=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),_.dispose(),S.dispose()}}const Wx=new Nn,Xx=new fa(1,1),$x=new Ux(1),qx=new Ax,Yx=new zS,Kx=new kx,Ng=[],Rg=[],Pg=new Float32Array(16),Lg=new Float32Array(9),Dg=new Float32Array(4);function ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const l=e*t;let c=Ng[l];if(c===void 0&&(c=new Float32Array(l),Ng[l]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(c,f)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=Rg[e];t===void 0&&(t=new Int32Array(e),Rg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Lw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Dw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function Iw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function kw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function Uw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Dg.set(r),s.uniformMatrix2fv(this.addr,!1,Dg),vn(t,r)}}function Fw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Lg.set(r),s.uniformMatrix3fv(this.addr,!1,Lg),vn(t,r)}}function Ow(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Pg.set(r),s.uniformMatrix4fv(this.addr,!1,Pg),vn(t,r)}}function zw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function Bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function Hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function Gw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Vw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function Ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function Xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Pc(s){return s.version===0&&(s.compareFunction=Tx,s.needsUpdate=!0),s}function $w(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?c=Pc(Xx):c=Wx,t.setTexture2D(e||c,l)}function qw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture3D(e||Yx,l)}function Yw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Pc($x):c=Kx,t.setTextureCube(e||c,l)}function Kw(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture2DArray(e||qx,l)}function Zw(s){switch(s){case 5126:return Lw;case 35664:return Dw;case 35665:return Iw;case 35666:return kw;case 35674:return Uw;case 35675:return Fw;case 35676:return Ow;case 5124:case 35670:return zw;case 35667:case 35671:return jw;case 35668:case 35672:return Bw;case 35669:case 35673:return Hw;case 5125:return Gw;case 36294:return Vw;case 36295:return Ww;case 36296:return Xw;case 35678:case 36198:case 36298:case 36306:case 35682:return $w;case 35679:case 36299:case 36307:return qw;case 35680:case 36300:case 36308:case 36293:return Yw;case 36289:case 36303:case 36311:case 36292:return Kw}}function Qw(s,e){s.uniform1fv(this.addr,e)}function Jw(s,e){const t=ma(e,this.size,2);s.uniform2fv(this.addr,t)}function eb(s,e){const t=ma(e,this.size,3);s.uniform3fv(this.addr,t)}function tb(s,e){const t=ma(e,this.size,4);s.uniform4fv(this.addr,t)}function nb(s,e){const t=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ib(s,e){const t=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function rb(s,e){const t=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function sb(s,e){s.uniform1iv(this.addr,e)}function ab(s,e){s.uniform2iv(this.addr,e)}function ob(s,e){s.uniform3iv(this.addr,e)}function lb(s,e){s.uniform4iv(this.addr,e)}function cb(s,e){s.uniform1uiv(this.addr,e)}function ub(s,e){s.uniform2uiv(this.addr,e)}function db(s,e){s.uniform3uiv(this.addr,e)}function fb(s,e){s.uniform4uiv(this.addr,e)}function hb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Pc(Xx):d=Wx;for(let f=0;f!==l;++f)t.setTexture2D(e[f]||d,c[f])}function pb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||Yx,c[d])}function mb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=Pc($x):d=Kx;for(let f=0;f!==l;++f)t.setTextureCube(e[f]||d,c[f])}function gb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||qx,c[d])}function xb(s){switch(s){case 5126:return Qw;case 35664:return Jw;case 35665:return eb;case 35666:return tb;case 35674:return nb;case 35675:return ib;case 35676:return rb;case 5124:case 35670:return sb;case 35667:case 35671:return ab;case 35668:case 35672:return ob;case 35669:case 35673:return lb;case 5125:return cb;case 36294:return ub;case 36295:return db;case 36296:return fb;case 35678:case 36198:case 36298:case 36306:case 35682:return hb;case 35679:case 36299:case 36307:return pb;case 35680:case 36300:case 36308:case 36293:return mb;case 36289:case 36303:case 36311:case 36292:return gb}}class vb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Zw(t.type)}}class _b{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=xb(t.type)}}class yb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const f=l[c];f.setValue(e,t[f.id],r)}}}const Gd=/(\w+)(\])?(\[|\.)?/g;function Ig(s,e){s.seq.push(e),s.map[e.id]=e}function Sb(s,e,t){const r=s.name,l=r.length;for(Gd.lastIndex=0;;){const c=Gd.exec(r),d=Gd.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===l){Ig(t,m===void 0?new vb(f,s,e):new _b(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new yb(f),Ig(t,S)),t=S}}}class dc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);Sb(f,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,t,r,l){const c=this.map[t];c!==void 0&&c.setValue(e,r,l)}setOptional(e,t,r){const l=t[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,t,r,l){for(let c=0,d=t.length;c!==d;++c){const f=t[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,l)}}static seqWithValue(e,t){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&r.push(d)}return r}}function kg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Mb=37297;let Eb=0;function wb(s,e){const t=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const Ug=new Et;function bb(s){It._getMatrix(Ug,It.workingColorSpace,s);const e=`mat3( ${Ug.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return xt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Fg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+wb(s.getShaderSource(e),f)}else return c}function Tb(s,e){const t=bb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Cb={[cx]:"Linear",[ux]:"Reinhard",[dx]:"Cineon",[fx]:"ACESFilmic",[px]:"AgX",[mx]:"Neutral",[hx]:"Custom"};function Ab(s,e){const t=Cb[e];return t===void 0?(xt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new de;function Nb(){It.getLuminanceCoefficients(nc);const s=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Rb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Pb(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Lb(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function so(s){return s!==""}function Og(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function zg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Db=/^[ \t]*#include +<([\w\d./]+)>/gm;function Of(s){return s.replace(Db,Ib)}function Ib(s,e){const t=At[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Of(t)}const kb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function jg(s){return s.replace(kb,Ub)}function Ub(s,e,t,r){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Bg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Fb={[sc]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function Ob(s){return Fb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const zb={[po]:"ENVMAP_MODE_REFRACTION"};function jb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":zb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Bb={[lx]:"ENVMAP_BLENDING_MULTIPLY",[pS]:"ENVMAP_BLENDING_MIX",[mS]:"ENVMAP_BLENDING_ADD"};function Hb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Bb[s.combine]||"ENVMAP_BLENDING_NONE"}function Gb(s,e,t,r){const l=s.getContext(),c=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=Ob(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",_=jb(t),S=Hb(t),v=Rb(t),y=Pb(c),w=l.createProgram();let b,x,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(b=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(so).join(`
`),b.length>0&&(b+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y].filter(so).join(`
`),x.length>0&&(x+=`
`)):(b=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+_:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),x=[Bg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,y,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+_:"",t.envMap?"#define "+S:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?At.tonemapping_pars_fragment:"",t.toneMapping!==dr?Ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,Tb("linearToOutputTexel",t.outputColorSpace),Nb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),d=Of(d),d=Og(d,t),d=zg(d,t),f=Of(f),f=Og(f,t),f=zg(f,t),d=jg(d),f=jg(f),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,b=[v,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+b,x=["#define varying in",t.glslVersion===Xm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Xm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const L=M+b+d,k=M+x+f,A=kg(l,l.VERTEX_SHADER,L),I=kg(l,l.FRAGMENT_SHADER,k);l.attachShader(w,A),l.attachShader(w,I),t.index0AttributeName!==void 0?l.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function P(z){if(s.debug.checkShaderErrors){const V=l.getProgramInfoLog(w)||"",ee=l.getShaderInfoLog(A)||"",ie=l.getShaderInfoLog(I)||"",j=V.trim(),X=ee.trim(),ne=ie.trim();let O=!0,$=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(O=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,A,I);else{const q=Fg(l,A,"vertex"),Q=Fg(l,I,"fragment");Bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+q+`
`+Q)}else j!==""?xt("WebGLProgram: Program Info Log:",j):(X===""||ne==="")&&($=!1);$&&(z.diagnostics={runnable:O,programLog:j,vertexShader:{log:X,prefix:b},fragmentShader:{log:ne,prefix:x}})}l.deleteShader(A),l.deleteShader(I),E=new dc(l,w),D=Lb(l,w)}let E;this.getUniforms=function(){return E===void 0&&P(this),E};let D;this.getAttributes=function(){return D===void 0&&P(this),D};let J=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return J===!1&&(J=l.getProgramParameter(w,Mb)),J},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Eb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=A,this.fragmentShader=I,this}let Vb=0;class Wb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const l=this._getShaderCacheForMaterial(e);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Xb(e),t.set(e,r)),r}}class Xb{constructor(e){this.id=Vb++,this.code=e,this.usedTimes=0}}function $b(s){return s===gs||s===gc||s===xc}function qb(s,e,t,r,l,c){const d=new eh,f=new Wb,p=new Set,m=[],_=new Map,S=r.logarithmicDepthBuffer,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(E){return p.add(E),E===0?"uv":`uv${E}`}function w(E,D,J,z,V,ee){const ie=z.fog,j=V.geometry,X=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,ne=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,O=e.get(E.envMap||X,ne),$=v[E.type];let q=r.precision;E.precision!==null&&(q=r.getMaxPrecision(E.precision),q!==E.precision&&xt("WebGLProgram.getParameters:",E.precision,"not supported, using",q,"instead."));const Q=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,F=Q!==void 0?Q.length:0;let K=0;j.morphAttributes.position!==void 0&&(K=1),j.morphAttributes.normal!==void 0&&(K=2),j.morphAttributes.color!==void 0&&(K=3);let Me,G,ue,Se;if($){const We=zi[$];Me=We.vertexShader,G=We.fragmentShader}else{Me=E.vertexShader,G=E.fragmentShader;const We=f.getVertexShaderStage(E),Dt=f.getFragmentShaderStage(E);f.update(E,We,Dt),ue=We.id,Se=Dt.id}const Ee=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Ae=V.isInstancedMesh===!0,mt=V.isBatchedMesh===!0,Qe=!!E.map,vt=!!E.matcap,be=!!O,Xe=be&&O.isPMREMTexture===!0,_t=!!E.aoMap,Ye=!!E.lightMap,dt=!!E.bumpMap&&E.wireframe===!1,ge=!!E.normalMap,Be=!!E.displacementMap,Ge=!!E.emissiveMap,bt=!!E.metalnessMap,Pt=!!E.roughnessMap,Pe=E.anisotropy>0,U=E.clearcoat>0,$e=E.diffuseRoughness>0,ft=E.dispersion>0,Mt=E.retroreflectivity>0,Ie=E.iridescence>0,Wt=E.sheen>0,at=E.transmission>0,ve=Pe&&!!E.anisotropyMap,R=U&&!!E.clearcoatMap,T=U&&!!E.clearcoatNormalMap,re=U&&!!E.clearcoatRoughnessMap,we=$e&&!!E.diffuseRoughnessMap,me=Ie&&!!E.iridescenceMap,Ne=Ie&&!!E.iridescenceThicknessMap,ke=Wt&&!!E.sheenColorMap,he=Wt&&!!E.sheenRoughnessMap,xe=!!E.specularMap,De=!!E.specularColorMap,H=!!E.specularIntensityMap,_e=at&&!!E.transmissionMap,pe=at&&!!E.thicknessMap,ze=!!E.gradientMap,Ue=!!E.alphaMap,Oe=E.alphaTest>0,ot=!!E.alphaHash,wt=!!E.extensions;let Re=dr;E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Re=s.toneMapping);const ut=Xe?O.isCompressedCubeTexture?O.image[0].mipmaps:O.mipmaps:null,yt={shaderID:$,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:G,defines:E.defines,customVertexShaderID:ue,customFragmentShaderID:Se,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:q,batching:mt,batchingColor:mt&&V._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&V.instanceColor!==null,instancingMorph:Ae&&V.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Qe,matcap:vt,envMap:be,envMapMode:be&&O.mapping,envMapPMREM:Xe,envMapMaxLod:Xe?ut.length-1:null,envMapSize:Xe?ut[0].width:null,aoMap:_t,lightMap:Ye,bumpMap:dt,normalMap:ge,displacementMap:Be,emissiveMap:Ge,normalMapObjectSpace:ge&&E.normalMapType===vS,normalMapTangentSpace:ge&&E.normalMapType===Df,packedNormalMap:ge&&E.normalMapType===Df&&$b(E.normalMap.format),metalnessMap:bt,roughnessMap:Pt,anisotropy:Pe,anisotropyMap:ve,clearcoat:U,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:re,diffuseRoughness:$e,diffuseRoughnessMap:we,dispersion:ft,retroreflection:Mt,iridescence:Ie,iridescenceMap:me,iridescenceThicknessMap:Ne,sheen:Wt,sheenColorMap:ke,sheenRoughnessMap:he,specularMap:xe,specularColorMap:De,specularIntensityMap:H,transmission:at,transmissionMap:_e,thicknessMap:pe,gradientMap:ze,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Ue,alphaTest:Oe,alphaHash:ot,combine:E.combine,mapUv:Qe&&y(E.map.channel),aoMapUv:_t&&y(E.aoMap.channel),lightMapUv:Ye&&y(E.lightMap.channel),bumpMapUv:dt&&y(E.bumpMap.channel),normalMapUv:ge&&y(E.normalMap.channel),displacementMapUv:Be&&y(E.displacementMap.channel),emissiveMapUv:Ge&&y(E.emissiveMap.channel),metalnessMapUv:bt&&y(E.metalnessMap.channel),roughnessMapUv:Pt&&y(E.roughnessMap.channel),anisotropyMapUv:ve&&y(E.anisotropyMap.channel),clearcoatMapUv:R&&y(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&y(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&y(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&y(E.diffuseRoughnessMap.channel),iridescenceMapUv:me&&y(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&y(E.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&y(E.sheenColorMap.channel),sheenRoughnessMapUv:he&&y(E.sheenRoughnessMap.channel),specularMapUv:xe&&y(E.specularMap.channel),specularColorMapUv:De&&y(E.specularColorMap.channel),specularIntensityMapUv:H&&y(E.specularIntensityMap.channel),transmissionMapUv:_e&&y(E.transmissionMap.channel),thicknessMapUv:pe&&y(E.thicknessMap.channel),alphaMapUv:Ue&&y(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(ge||Pe),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!j.attributes.uv&&(Qe||Ue),fog:!!ie,useFog:E.fog===!0,fogExp2:!!ie&&ie.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&ge===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:ye,skinning:V.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ee.filter(We=>We.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&J.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Qe&&E.map.isVideoTexture===!0&&It.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ge&&E.emissiveMap.isVideoTexture===!0&&It.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===ji,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:wt&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&E.extensions.multiDraw===!0||mt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=p.has(1),yt.vertexUv2s=p.has(2),yt.vertexUv3s=p.has(3),p.clear(),yt}function b(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const J in E.defines)D.push(J),D.push(E.defines[J]);return E.isRawShaderMaterial===!1&&(x(D,E),M(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapPMREM),E.push(D.envMapMaxLod),E.push(D.envMapSize),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.diffuseRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.numLightProbeGrids),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function M(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.retroreflection&&d.enable(24),D.diffuseRoughness&&d.enable(25),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function L(E){const D=v[E.type];let J;if(D){const z=zi[D];J=oM.clone(z.uniforms)}else J=E.uniforms;return J}function k(E,D){let J=_.get(D);return J!==void 0?++J.usedTimes:(J=new Gb(s,D,E,l),m.push(J),_.set(D,J)),J}function A(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),_.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function P(){f.dispose()}return{getParameters:w,getProgramCacheKey:b,getUniforms:L,acquireProgram:k,releaseProgram:A,releaseShaderCache:I,programs:m,dispose:P}}function Yb(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function l(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:l,dispose:c}}function Kb(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Hg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Gg(){const s=[];let e=0;const t=[],r=[],l=[];function c(){e=0,t.length=0,r.length=0,l.length=0}function d(v){let y=0;return v.isInstancedMesh&&(y+=2),v.isSkinnedMesh&&(y+=1),y}function f(v,y,w,b,x,M){let L=s[e];return L===void 0?(L={id:v.id,object:v,geometry:y,material:w,materialVariant:d(v),groupOrder:b,renderOrder:v.renderOrder,z:x,group:M},s[e]=L):(L.id=v.id,L.object=v,L.geometry=y,L.material=w,L.materialVariant=d(v),L.groupOrder=b,L.renderOrder=v.renderOrder,L.z=x,L.group=M),e++,L}function p(v,y,w,b,x,M,L){L.reversedDepth===!0&&(x=-x);const k=f(v,y,w,b,x,M);w.transmission>0?r.push(k):w.transparent===!0?l.push(k):t.push(k)}function m(v,y,w,b,x,M){const L=f(v,y,w,b,x,M);w.transmission>0?r.unshift(L):w.transparent===!0?l.unshift(L):t.unshift(L)}function _(v,y){t.length>1&&t.sort(v||Kb),r.length>1&&r.sort(y||Hg),l.length>1&&l.sort(y||Hg)}function S(){for(let v=e,y=s.length;v<y;v++){const w=s[v];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:S,sort:_}}function Zb(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Gg,s.set(r,[d])):l>=c.length?(d=new Gg,c.push(d)):d=c[l],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function Qb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Tt};break;case"SpotLight":t={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function Jb(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let eT=0;function tT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function nT(s){const e=new Qb,t=Jb(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new de);const l=new de,c=new qt,d=new qt;function f(m){let _=0,S=0,v=0;for(let ee=0;ee<9;ee++)r.probe[ee].set(0,0,0);let y=0,w=0,b=0,x=0,M=0,L=0,k=0,A=0,I=0,P=0,E=0,D=0,J=0,z=0;m.sort(tT);for(let ee=0,ie=m.length;ee<ie;ee++){const j=m[ee],X=j.color,ne=j.intensity,O=j.distance;let $=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===gs?$=j.shadow.map.texture:$=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)_+=X.r*ne,S+=X.g*ne,v+=X.b*ne;else if(j.isLightProbe){for(let q=0;q<9;q++)r.probe[q].addScaledVector(j.sh.coefficients[q],ne);z++}else if(j.isSunLight){const q=e.get(j);if(q.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Q=j.shadow,F=t.get(j);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),r.sunShadow[w]=F,r.sunShadowMap[w]=$;const K=Q.getViewportCount();for(let Me=0;Me<K;Me++)r.sunShadowMatrix[b+Me]=Q.getMatrix(Me),r.sunShadowCascade[b+Me]=Q._cascadeData[Me];b+=K,w++}r.sun[y]=q,y++}else if(j.isDirectionalLight){const q=e.get(j);if(q.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Q=j.shadow,F=t.get(j);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,r.directionalShadow[x]=F,r.directionalShadowMap[x]=$,r.directionalShadowMatrix[x]=j.shadow.matrix,I++}r.directional[x]=q,x++}else if(j.isSpotLight){const q=e.get(j);q.position.setFromMatrixPosition(j.matrixWorld),q.color.copy(X).multiplyScalar(ne),q.distance=O,q.coneCos=Math.cos(j.angle),q.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),q.decay=j.decay,r.spot[L]=q;const Q=j.shadow;if(j.map&&(r.spotLightMap[D]=j.map,D++,Q.updateMatrices(j),j.castShadow&&J++),r.spotLightMatrix[L]=Q.matrix,j.castShadow){const F=t.get(j);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,r.spotShadow[L]=F,r.spotShadowMap[L]=$,E++}L++}else if(j.isRectAreaLight){const q=e.get(j);q.color.copy(X).multiplyScalar(ne),q.halfWidth.set(j.width*.5,0,0),q.halfHeight.set(0,j.height*.5,0),r.rectArea[k]=q,k++}else if(j.isPointLight){const q=e.get(j);if(q.color.copy(j.color).multiplyScalar(j.intensity),q.distance=j.distance,q.decay=j.decay,j.castShadow){const Q=j.shadow,F=t.get(j);F.shadowIntensity=Q.intensity,F.shadowBias=Q.bias,F.shadowNormalBias=Q.normalBias,F.shadowRadius=Q.radius,F.shadowMapSize=Q.mapSize,F.shadowCameraNear=Q.camera.near,F.shadowCameraFar=Q.camera.far,r.pointShadow[M]=F,r.pointShadowMap[M]=$,r.pointShadowMatrix[M]=j.shadow.matrix,P++}r.point[M]=q,M++}else if(j.isHemisphereLight){const q=e.get(j);q.skyColor.copy(j.color).multiplyScalar(ne),q.groundColor.copy(j.groundColor).multiplyScalar(ne),r.hemi[A]=q,A++}}k>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=qe.LTC_FLOAT_1,r.rectAreaLTC2=qe.LTC_FLOAT_2):(r.rectAreaLTC1=qe.LTC_HALF_1,r.rectAreaLTC2=qe.LTC_HALF_2)),r.ambient[0]=_,r.ambient[1]=S,r.ambient[2]=v;const V=r.hash;(V.sunLength!==y||V.directionalLength!==x||V.pointLength!==M||V.spotLength!==L||V.rectAreaLength!==k||V.hemiLength!==A||V.numSunShadows!==w||V.numDirectionalShadows!==I||V.numPointShadows!==P||V.numSpotShadows!==E||V.numSpotMaps!==D||V.numLightProbes!==z)&&(r.sun.length=y,r.directional.length=x,r.spot.length=L,r.rectArea.length=k,r.point.length=M,r.hemi.length=A,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=b,r.sunShadowCascade.length=b,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+D-J,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=J,r.numLightProbes=z,V.sunLength=y,V.directionalLength=x,V.pointLength=M,V.spotLength=L,V.rectAreaLength=k,V.hemiLength=A,V.numSunShadows=w,V.numDirectionalShadows=I,V.numPointShadows=P,V.numSpotShadows=E,V.numSpotMaps=D,V.numLightProbes=z,r.version=eT++)}function p(m,_){let S=0,v=0,y=0,w=0,b=0,x=0;const M=_.matrixWorldInverse;for(let L=0,k=m.length;L<k;L++){const A=m[L];if(A.isSunLight){const I=r.sun[S];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(M),S++}else if(A.isDirectionalLight){const I=r.directional[v];I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),v++}else if(A.isSpotLight){const I=r.spot[w];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(M),w++}else if(A.isRectAreaLight){const I=r.rectArea[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),d.identity(),c.copy(A.matrixWorld),c.premultiply(M),d.extractRotation(c),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),b++}else if(A.isPointLight){const I=r.point[y];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(M),y++}else if(A.isHemisphereLight){const I=r.hemi[x];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(M),x++}}}return{setup:f,setupView:p,state:r}}function Vg(s){const e=new nT(s),t=[],r=[],l=[];function c(S){_.camera=S,t.length=0,r.length=0,l.length=0}function d(S){S.isLightProbeGrid?l.push(S):t.push(S)}function f(S){r.push(S)}function p(){e.setup(t),l.sort((S,v)=>S.priority-v.priority||S.id-v.id)}function m(S){e.setupView(t,S)}const _={lightsArray:t,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:_,setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function iT(s){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let f;return d===void 0?(f=new Vg(s),e.set(l,[f])):c>=d.length?(f=new Vg(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const rT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sT=`uniform sampler2D shadow_pass;
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
}`,aT=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],oT=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Wg=new qt,io=new de,Vd=new de;function lT(s,e,t){let r=new vo;const l=new Ut,c=new Ut,d=new rn,f=new fM,p=new hM,m={},_=t.maxTextureSize,S={[ms]:Kn,[Kn]:ms,[ji]:ji},v=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:rT,fragmentShader:sT}),y=v.clone();y.defines.HORIZONTAL_PASS=1;const w=new mi;w.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Ki(w,v),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=sc;let M=this.type;this.render=function(P,E,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||P.length===0)return;this.type===Yy&&(xt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=sc);const J=s.getRenderTarget(),z=s.getActiveCubeFace(),V=s.getActiveMipmapLevel(),ee=s.state;ee.setBlending(oa),ee.buffers.depth.getReversed()===!0?ee.buffers.color.setClear(0,0,0,0):ee.buffers.color.setClear(1,1,1,1),ee.buffers.depth.setTest(!0),ee.setScissorTest(!1);const ie=M!==this.type;ie&&E.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach(X=>X.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,X=P.length;j<X;j++){const ne=P[j],O=ne.shadow;if(O===void 0){xt("WebGLShadowMap:",ne,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;l.copy(O.mapSize);const $=O.getFrameExtents();l.multiply($),c.copy(O.mapSize),(l.x>_||l.y>_)&&(l.x>_&&(c.x=Math.floor(_/$.x),l.x=c.x*$.x,O.mapSize.x=c.x),l.y>_&&(c.y=Math.floor(_/$.y),l.y=c.y*$.y,O.mapSize.y=c.y));const q=s.state.buffers.depth.getReversed();if(O.camera._reversedDepth=q,O.map===null||ie===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===ro){if(ne.isPointLight){xt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Xi(l.x,l.y,{format:gs,type:Yi,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),O.map.texture.name=ne.name+".shadowMap",O.map.depthTexture=new fa(l.x,l.y,Hi),O.map.depthTexture.name=ne.name+".shadowMapDepth",O.map.depthTexture.format=Xr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An}else ne.isPointLight?(O.map=new rh(l.x),O.map.depthTexture=new Ux(l.x,qi)):(O.map=new Xi(l.x,l.y),O.map.depthTexture=new fa(l.x,l.y,qi)),O.map.depthTexture.name=ne.name+".shadowMap",O.map.depthTexture.format=Xr,this.type===sc?(O.map.depthTexture.compareFunction=q?bx:wx,O.map.depthTexture.minFilter=Yn,O.map.depthTexture.magFilter=Yn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=An,O.map.depthTexture.magFilter=An);O.camera.updateProjectionMatrix()}O.map.isWebGLCubeRenderTarget!==!0&&(O.map.width!==l.x||O.map.height!==l.y)&&O.map.setSize(l.x,l.y);const Q=O.map.isWebGLCubeRenderTarget?6:O.getViewportCount();ne.isPointLight!==!0&&O.updateMatrices(ne,D);const F=(O.camera.layers.mask&4294967294)!==0?O.camera.layers:D.layers;for(let K=0;K<Q;K++){const Me=O.getCamera(K);if(ne.isPointLight){const G=O.camera,ue=O.matrix,Se=ne.distance||G.far;Se!==G.far&&(G.far=Se,G.updateProjectionMatrix()),io.setFromMatrixPosition(ne.matrixWorld),G.position.copy(io),Vd.copy(G.position),Vd.add(aT[K]),G.up.copy(oT[K]),G.lookAt(Vd),G.updateMatrixWorld(),ue.makeTranslation(-io.x,-io.y,-io.z),Wg.multiplyMatrices(G.projectionMatrix,G.matrixWorldInverse),O._frustum.setFromProjectionMatrix(Wg,G.coordinateSystem,G.reversedDepth)}if(O.map.isWebGLCubeRenderTarget)s.setRenderTarget(O.map,K),s.clear();else{K===0&&(s.setRenderTarget(O.map),s.clear());const G=O.getViewport(K);d.set(c.x*G.x,c.y*G.y,c.x*G.z,c.y*G.w),ee.viewport(d)}r=O.getFrustum(K),A(E,D,Me,ne,F,this.type)}O.isPointLightShadow!==!0&&this.type===ro&&L(O,D),O.needsUpdate=!1}M=this.type,x.needsUpdate=!1,s.setRenderTarget(J,z,V)};function L(P,E){const D=e.update(b);v.defines.VSM_SAMPLES!==P.blurSamples&&(v.defines.VSM_SAMPLES=P.blurSamples,y.defines.VSM_SAMPLES=P.blurSamples,v.needsUpdate=!0,y.needsUpdate=!0),P.mapPass===null?P.mapPass=new Xi(l.x,l.y,{format:gs,type:Yi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),v.uniforms.shadow_pass.value=P.map.depthTexture,v.uniforms.resolution.value.set(P.map.width,P.map.height),v.uniforms.radius.value=P.radius,s.setRenderTarget(P.mapPass),s.clear(),s.renderBufferDirect(E,null,D,v,b,null),y.uniforms.shadow_pass.value=P.mapPass.texture,y.uniforms.resolution.value.set(P.map.width,P.map.height),y.uniforms.radius.value=P.radius,s.setRenderTarget(P.map),s.clear(),s.renderBufferDirect(E,null,D,y,b,null)}function k(P,E,D,J){let z=null;const V=D.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(V!==void 0)z=V;else if(z=D.isPointLight===!0?p:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ee=z.uuid,ie=E.uuid;let j=m[ee];j===void 0&&(j={},m[ee]=j);let X=j[ie];X===void 0&&(X=z.clone(),j[ie]=X,E.addEventListener("dispose",I)),z=X}if(z.visible=E.visible,z.wireframe=E.wireframe,J===ro?z.side=E.shadowSide!==null?E.shadowSide:E.side:z.side=E.shadowSide!==null?E.shadowSide:S[E.side],z.alphaMap=E.alphaMap,z.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,z.map=E.map,z.clipShadows=E.clipShadows,z.clippingPlanes=E.clippingPlanes,z.clipIntersection=E.clipIntersection,z.displacementMap=E.displacementMap,z.displacementScale=E.displacementScale,z.displacementBias=E.displacementBias,z.wireframeLinewidth=E.wireframeLinewidth,z.linewidth=E.linewidth,D.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const ee=s.properties.get(z);ee.light=D}return z}function A(P,E,D,J,z,V){if(P.visible===!1)return;if(P.layers.test(z)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===ro)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,P.matrixWorld);const j=e.update(P),X=P.material;if(Array.isArray(X)){const ne=j.groups;for(let O=0,$=ne.length;O<$;O++){const q=ne[O],Q=X[q.materialIndex];if(Q&&Q.visible){const F=k(P,Q,J,V);P.onBeforeShadow(s,P,E,D,j,F,q),s.renderBufferDirect(D,null,j,F,P,q),P.onAfterShadow(s,P,E,D,j,F,q)}}}else if(X.visible){const ne=k(P,X,J,V);P.onBeforeShadow(s,P,E,D,j,ne,null),s.renderBufferDirect(D,null,j,ne,P,null),P.onAfterShadow(s,P,E,D,j,ne,null)}}const ie=P.children;for(let j=0,X=ie.length;j<X;j++)A(ie[j],E,D,J,z,V)}function I(P){P.target.removeEventListener("dispose",I);for(const D in m){const J=m[D],z=P.target.uuid;z in J&&(J[z].dispose(),delete J[z])}}}function cT(s,e){function t(){let H=!1;const _e=new rn;let pe=null;const ze=new rn(0,0,0,0);return{setMask:function(Ue){pe!==Ue&&!H&&(s.colorMask(Ue,Ue,Ue,Ue),pe=Ue)},setLocked:function(Ue){H=Ue},setClear:function(Ue,Oe,ot,wt,Re){Re===!0&&(Ue*=wt,Oe*=wt,ot*=wt),_e.set(Ue,Oe,ot,wt),ze.equals(_e)===!1&&(s.clearColor(Ue,Oe,ot,wt),ze.copy(_e))},reset:function(){H=!1,pe=null,ze.set(-1,0,0,0)}}}function r(){let H=!1,_e=!1,pe=null,ze=null,Ue=null;return{setReversed:function(Oe){if(_e!==Oe){const ot=e.get("EXT_clip_control");Oe?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT),_e=Oe;const wt=Ue;Ue=null,this.setClear(wt)}},getReversed:function(){return _e},setTest:function(Oe){Oe?ye(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(Oe){pe!==Oe&&!H&&(s.depthMask(Oe),pe=Oe)},setFunc:function(Oe){if(_e&&(Oe=NS[Oe]),ze!==Oe){switch(Oe){case $d:s.depthFunc(s.NEVER);break;case qd:s.depthFunc(s.ALWAYS);break;case Yd:s.depthFunc(s.LESS);break;case ho:s.depthFunc(s.LEQUAL);break;case Kd:s.depthFunc(s.EQUAL);break;case Zd:s.depthFunc(s.GEQUAL);break;case Qd:s.depthFunc(s.GREATER);break;case Jd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ze=Oe}},setLocked:function(Oe){H=Oe},setClear:function(Oe){Ue!==Oe&&(Ue=Oe,_e&&(Oe=1-Oe),s.clearDepth(Oe))},reset:function(){H=!1,pe=null,ze=null,Ue=null,_e=!1}}}function l(){let H=!1,_e=null,pe=null,ze=null,Ue=null,Oe=null,ot=null,wt=null,Re=null;return{setTest:function(ut){H||(ut?ye(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(ut){_e!==ut&&!H&&(s.stencilMask(ut),_e=ut)},setFunc:function(ut,yt,We){(pe!==ut||ze!==yt||Ue!==We)&&(s.stencilFunc(ut,yt,We),pe=ut,ze=yt,Ue=We)},setOp:function(ut,yt,We){(Oe!==ut||ot!==yt||wt!==We)&&(s.stencilOp(ut,yt,We),Oe=ut,ot=yt,wt=We)},setLocked:function(ut){H=ut},setClear:function(ut){Re!==ut&&(s.clearStencil(ut),Re=ut)},reset:function(){H=!1,_e=null,pe=null,ze=null,Ue=null,Oe=null,ot=null,wt=null,Re=null}}}const c=new t,d=new r,f=new l;let p={};const m=new WeakMap;let _={},S={},v={},y=new WeakMap,w=[],b=null,x=!1,M=null,L=null,k=null,A=null,I=null,P=null,E=null,D=new Tt(0,0,0),J=0,z=!1,V=null,ee=null,ie=null,j=null,X=null;const ne=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let O=!1,$=0;const q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(q)[1]),O=$>=1):q.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),O=$>=2);let Q=null,F={};const K=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),G=new rn().fromArray(K),ue=new rn().fromArray(Me);function Se(H,_e,pe,ze){const Ue=new Uint8Array(4),Oe=s.createTexture();s.bindTexture(H,Oe),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<pe;ot++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,ze,0,s.RGBA,s.UNSIGNED_BYTE,Ue):s.texImage2D(_e+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ue);return Oe}const Ee={};Ee[s.TEXTURE_2D]=Se(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=Se(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=Se(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=Se(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),ye(s.DEPTH_TEST),d.setFunc(ho),dt(!1),ge(Gm),ye(s.CULL_FACE),_t(oa);function ye(H){_[H]!==!0&&(s.enable(H),_[H]=!0)}function Ae(H){_[H]!==!1&&(s.disable(H),_[H]=!1)}function mt(H,_e){return v[H]!==_e?(s.bindFramebuffer(H,_e),v[H]=_e,H===s.DRAW_FRAMEBUFFER&&(v[s.FRAMEBUFFER]=_e),H===s.FRAMEBUFFER&&(v[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Qe(H,_e){let pe=w,ze=!1;if(H){pe=y.get(_e),pe===void 0&&(pe=[],y.set(_e,pe));const Ue=H.textures;if(pe.length!==Ue.length||pe[0]!==s.COLOR_ATTACHMENT0){for(let Oe=0,ot=Ue.length;Oe<ot;Oe++)pe[Oe]=s.COLOR_ATTACHMENT0+Oe;pe.length=Ue.length,ze=!0}}else pe[0]!==s.BACK&&(pe[0]=s.BACK,ze=!0);ze&&s.drawBuffers(pe)}function vt(H){return b!==H?(s.useProgram(H),b=H,!0):!1}const be={[ra]:s.FUNC_ADD,[Zy]:s.FUNC_SUBTRACT,[Qy]:s.FUNC_REVERSE_SUBTRACT};be[Jy]=s.MIN,be[eS]=s.MAX;const Xe={[tS]:s.ZERO,[nS]:s.ONE,[iS]:s.SRC_COLOR,[ax]:s.SRC_ALPHA,[cS]:s.SRC_ALPHA_SATURATE,[oS]:s.DST_COLOR,[sS]:s.DST_ALPHA,[rS]:s.ONE_MINUS_SRC_COLOR,[ox]:s.ONE_MINUS_SRC_ALPHA,[lS]:s.ONE_MINUS_DST_COLOR,[aS]:s.ONE_MINUS_DST_ALPHA,[uS]:s.CONSTANT_COLOR,[dS]:s.ONE_MINUS_CONSTANT_COLOR,[fS]:s.CONSTANT_ALPHA,[hS]:s.ONE_MINUS_CONSTANT_ALPHA};function _t(H,_e,pe,ze,Ue,Oe,ot,wt,Re,ut){if(H===oa){x===!0&&(Ae(s.BLEND),x=!1);return}if(x===!1&&(ye(s.BLEND),x=!0),H!==Ky){if(H!==M||ut!==z){if((L!==ra||I!==ra)&&(s.blendEquation(s.FUNC_ADD),L=ra,I=ra),ut)switch(H){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFunc(s.ONE,s.ONE);break;case Vm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",H);break}else switch(H){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xd:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Vm:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Wm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",H);break}k=null,A=null,P=null,E=null,D.set(0,0,0),J=0,M=H,z=ut}return}Ue=Ue||_e,Oe=Oe||pe,ot=ot||ze,(_e!==L||Ue!==I)&&(s.blendEquationSeparate(be[_e],be[Ue]),L=_e,I=Ue),(pe!==k||ze!==A||Oe!==P||ot!==E)&&(s.blendFuncSeparate(Xe[pe],Xe[ze],Xe[Oe],Xe[ot]),k=pe,A=ze,P=Oe,E=ot),(wt.equals(D)===!1||Re!==J)&&(s.blendColor(wt.r,wt.g,wt.b,Re),D.copy(wt),J=Re),M=H,z=!1}function Ye(H,_e){H.side===ji?Ae(s.CULL_FACE):ye(s.CULL_FACE);let pe=H.side===Kn;_e&&(pe=!pe),dt(pe),H.blending===lo&&H.transparent===!1?_t(oa):_t(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),d.setFunc(H.depthFunc),d.setTest(H.depthTest),d.setMask(H.depthWrite),c.setMask(H.colorWrite);const ze=H.stencilWrite;f.setTest(ze),ze&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Ge(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?ye(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function dt(H){V!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),V=H)}function ge(H){H!==$y?(ye(s.CULL_FACE),H!==ee&&(H===Gm?s.cullFace(s.BACK):H===qy?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),ee=H}function Be(H){H!==ie&&(O&&s.lineWidth(H),ie=H)}function Ge(H,_e,pe){H?(ye(s.POLYGON_OFFSET_FILL),(j!==_e||X!==pe)&&(j=_e,X=pe,d.getReversed()&&(_e=-_e,pe=-pe),s.polygonOffset(_e,pe))):Ae(s.POLYGON_OFFSET_FILL)}function bt(H){H?ye(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Pt(H){H===void 0&&(H=s.TEXTURE0+ne-1),Q!==H&&(s.activeTexture(H),Q=H)}function Pe(H,_e,pe){pe===void 0&&(Q===null?pe=s.TEXTURE0+ne-1:pe=Q);let ze=F[pe];ze===void 0&&(ze={type:void 0,texture:void 0},F[pe]=ze),(ze.type!==H||ze.texture!==_e)&&(Q!==pe&&(s.activeTexture(pe),Q=pe),s.bindTexture(H,_e||Ee[H]),ze.type=H,ze.texture=_e)}function U(){const H=F[Q];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function $e(){try{s.compressedTexImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function ft(){try{s.compressedTexImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Mt(){try{s.texSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Ie(){try{s.texSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function Wt(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function at(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function ve(){try{s.texStorage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function R(){try{s.texStorage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function T(){try{s.texImage2D(...arguments)}catch(H){Bt("WebGLState:",H)}}function re(){try{s.texImage3D(...arguments)}catch(H){Bt("WebGLState:",H)}}function we(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function me(H,_e){S[H]!==_e&&(s.pixelStorei(H,_e),S[H]=_e)}function Ne(H){G.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),G.copy(H))}function ke(H){ue.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ue.copy(H))}function he(H,_e){let pe=m.get(_e);pe===void 0&&(pe=new WeakMap,m.set(_e,pe));let ze=pe.get(H);ze===void 0&&(ze=s.getUniformBlockIndex(_e,H.name),s.uniformBlockBinding(_e,ze,ze),pe.set(H,ze))}function xe(H,_e,pe){const Ue=m.get(_e).get(H);p[Ue]!==pe&&(s.bindBufferBase(s.UNIFORM_BUFFER,Ue,pe),p[Ue]=pe)}function De(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),_={},S={},Q=null,F={},v={},p={},y=new WeakMap,w=[],b=null,x=!1,M=null,L=null,k=null,A=null,I=null,P=null,E=null,D=new Tt(0,0,0),J=0,z=!1,V=null,ee=null,ie=null,j=null,X=null,G.set(0,0,s.canvas.width,s.canvas.height),ue.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:ye,disable:Ae,bindFramebuffer:mt,drawBuffers:Qe,useProgram:vt,setBlending:_t,setMaterial:Ye,setFlipSided:dt,setCullFace:ge,setLineWidth:Be,setPolygonOffset:Ge,setScissorTest:bt,activeTexture:Pt,bindTexture:Pe,unbindTexture:U,compressedTexImage2D:$e,compressedTexImage3D:ft,texImage2D:T,texImage3D:re,pixelStorei:me,getParameter:we,updateUBOMapping:he,uniformBlockBinding:xe,texStorage2D:ve,texStorage3D:R,texSubImage2D:Mt,texSubImage3D:Ie,compressedTexSubImage2D:Wt,compressedTexSubImage3D:at,scissor:Ne,viewport:ke,reset:De}}function uT(s,e,t,r,l,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ut,_=new WeakMap,S=new Set;let v;const y=new WeakMap,w=new Set,b=new FinalizationRegistry(R=>w.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(R,T){return x?new OffscreenCanvas(R,T):xo("canvas")}function L(R,T,re){let we=1;const me=ve(R);if((me.width>re||me.height>re)&&(we=re/Math.max(me.width,me.height)),we<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ne=Math.floor(we*me.width),ke=Math.floor(we*me.height);v===void 0&&(v=M(Ne,ke));const he=T?M(Ne,ke):v;return he.width=Ne,he.height=ke,he.getContext("2d").drawImage(R,0,0,Ne,ke),xt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Ne+"x"+ke+")."),he}else return"data"in R&&xt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),R;return R}function k(R){return R.generateMipmaps}function A(R){s.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function P(R,T,re,we,me,Ne=!1){if(R!==null){if(s[R]!==void 0)return s[R];xt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ke;we&&(ke=e.get("EXT_texture_norm16"),ke||xt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let he=T;if(T===s.RED&&(re===s.FLOAT&&(he=s.R32F),re===s.HALF_FLOAT&&(he=s.R16F),re===s.UNSIGNED_BYTE&&(he=s.R8),re===s.UNSIGNED_SHORT&&ke&&(he=ke.R16_EXT),re===s.SHORT&&ke&&(he=ke.R16_SNORM_EXT)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(he=s.R8UI),re===s.UNSIGNED_SHORT&&(he=s.R16UI),re===s.UNSIGNED_INT&&(he=s.R32UI),re===s.BYTE&&(he=s.R8I),re===s.SHORT&&(he=s.R16I),re===s.INT&&(he=s.R32I)),T===s.RG&&(re===s.FLOAT&&(he=s.RG32F),re===s.HALF_FLOAT&&(he=s.RG16F),re===s.UNSIGNED_BYTE&&(he=s.RG8),re===s.UNSIGNED_SHORT&&ke&&(he=ke.RG16_EXT),re===s.SHORT&&ke&&(he=ke.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(he=s.RG8UI),re===s.UNSIGNED_SHORT&&(he=s.RG16UI),re===s.UNSIGNED_INT&&(he=s.RG32UI),re===s.BYTE&&(he=s.RG8I),re===s.SHORT&&(he=s.RG16I),re===s.INT&&(he=s.RG32I)),T===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(he=s.RGB8UI),re===s.UNSIGNED_SHORT&&(he=s.RGB16UI),re===s.UNSIGNED_INT&&(he=s.RGB32UI),re===s.BYTE&&(he=s.RGB8I),re===s.SHORT&&(he=s.RGB16I),re===s.INT&&(he=s.RGB32I)),T===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(he=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(he=s.RGBA16UI),re===s.UNSIGNED_INT&&(he=s.RGBA32UI),re===s.BYTE&&(he=s.RGBA8I),re===s.SHORT&&(he=s.RGBA16I),re===s.INT&&(he=s.RGBA32I)),T===s.RGB&&(re===s.UNSIGNED_SHORT&&ke&&(he=ke.RGB16_EXT),re===s.SHORT&&ke&&(he=ke.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(he=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(he=s.R11F_G11F_B10F)),T===s.RGBA){const xe=Ne?_c:It.getTransfer(me);re===s.FLOAT&&(he=s.RGBA32F),re===s.HALF_FLOAT&&(he=s.RGBA16F),re===s.UNSIGNED_BYTE&&(he=xe===Vt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&ke&&(he=ke.RGBA16_EXT),re===s.SHORT&&ke&&(he=ke.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(he=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(he=s.RGB5_A1)}return(he===s.R16F||he===s.R32F||he===s.RG16F||he===s.RG32F||he===s.RGBA16F||he===s.RGBA32F)&&e.get("EXT_color_buffer_float"),he}function E(R,T){let re;return R?T===null||T===qi||T===da?re=s.DEPTH24_STENCIL8:T===Hi?re=s.DEPTH32F_STENCIL8:T===mo&&(re=s.DEPTH24_STENCIL8,xt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===da?re=s.DEPTH_COMPONENT24:T===Hi?re=s.DEPTH_COMPONENT32F:T===mo&&(re=s.DEPTH_COMPONENT16),re}function D(R,T){return k(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function J(R){const T=new WeakRef(R);r.get(R).__ref=T,w.add(T),b.register(R,T,T)}function z(R){const T=r.get(R).__ref;T!==void 0&&(w.delete(T),b.unregister(T))}function V(R){ie(R.target)}function ee(R){j(R.target)}function ie(R){R.removeEventListener("dispose",V),z(R),ne(R),R.isVideoTexture&&_.delete(R),R.isHTMLTexture&&S.delete(R)}function j(R){R.removeEventListener("dispose",ee),z(R),$(R)}function X(){for(const R of w){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?j(T):ie(T))}w.clear(),S.clear()}function ne(R){const T=r.get(R);if(T.__webglInit===void 0)return;const re=R.source,we=y.get(re);if(we){const me=we[T.__cacheKey];me.usedTimes--,me.usedTimes===0&&O(R),Object.keys(we).length===0&&y.delete(re)}r.remove(R)}function O(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const re=R.source,we=y.get(re);delete we[T.__cacheKey],d.memory.textures--}function $(R){const T=r.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const re=R.depthTexture;if(re&&re.renderTarget===R&&ie(re),R.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let Ne=0;Ne<T.__webglFramebuffer[me].length;Ne++)s.deleteFramebuffer(T.__webglFramebuffer[me][Ne]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const we=R.textures;for(let me=0,Ne=we.length;me<Ne;me++){const ke=r.get(we[me]);ke.__webglTexture&&(s.deleteTexture(ke.__webglTexture),d.memory.textures--),r.remove(we[me])}r.remove(R)}let q=0;function Q(){q=0}function F(){return q}function K(R){q=R}function Me(){const R=q;return R>=l.maxTextures&&xt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+l.maxTextures),q+=1,R}function G(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function ue(R,T){const re=r.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&re.__version!==R.version){const we=R.image;if(we===null)xt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)xt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(re,R,T);return}}else R.isExternalTexture&&(re.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function Se(R,T){const re=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&re.__version!==R.version){Ye(re,R,T);return}else R.isExternalTexture&&(re.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function Ee(R,T){const re=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&re.__version!==R.version){Ye(re,R,T);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function ye(R,T){const re=r.get(R);if(R.version>0&&re.__version!==R.version){dt(re,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const Ae={[ef]:s.REPEAT,[ur]:s.CLAMP_TO_EDGE,[tf]:s.MIRRORED_REPEAT},mt={[An]:s.NEAREST,[gS]:s.NEAREST_MIPMAP_NEAREST,[Pl]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[gd]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Qe={[yS]:s.NEVER,[Tx]:s.ALWAYS,[SS]:s.LESS,[wx]:s.LEQUAL,[MS]:s.EQUAL,[bx]:s.GEQUAL,[ES]:s.GREATER,[wS]:s.NOTEQUAL};function vt(R,T){if(T.type===Hi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yn||T.magFilter===gd||T.magFilter===Pl||T.magFilter===Br||T.minFilter===Yn||T.minFilter===gd||T.minFilter===Pl||T.minFilter===Br)&&xt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ae[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ae[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ae[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,mt[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,mt[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Qe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==Pl&&T.minFilter!==Br||T.type===Hi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function be(R,T){let re=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",V),J(T));const we=T.source;let me=y.get(we);me===void 0&&(me={},y.set(we,me));const Ne=G(T);if(Ne!==R.__cacheKey){me[Ne]===void 0&&(me[Ne]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,re=!0),me[Ne].usedTimes++;const ke=me[R.__cacheKey];ke!==void 0&&(me[R.__cacheKey].usedTimes--,ke.usedTimes===0&&O(T)),R.__cacheKey=Ne,R.__webglTexture=me[Ne].texture}return re}function Xe(R,T,re){return Math.floor(Math.floor(R/re)/T)}function _t(R,T,re,we){const Ne=R.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,re,we,T.data);else{Ne.sort((H,_e)=>H.start-_e.start);let ke=0;for(let H=1;H<Ne.length;H++){const _e=Ne[ke],pe=Ne[H],ze=_e.start+_e.count,Ue=Xe(pe.start,T.width,4),Oe=Xe(_e.start,T.width,4);pe.start<=ze+1&&Ue===Oe&&Xe(pe.start+pe.count-1,T.width,4)===Ue?_e.count=Math.max(_e.count,pe.start+pe.count-_e.start):(++ke,Ne[ke]=pe)}Ne.length=ke+1;const he=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),De=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let H=0,_e=Ne.length;H<_e;H++){const pe=Ne[H],ze=Math.floor(pe.start/4),Ue=Math.ceil(pe.count/4),Oe=ze%T.width,ot=Math.floor(ze/T.width),wt=Ue,Re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Oe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ot),t.texSubImage2D(s.TEXTURE_2D,0,Oe,ot,wt,Re,re,we,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,he),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,De)}}function Ye(R,T,re){let we=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(we=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(we=s.TEXTURE_3D);const me=be(R,T),Ne=T.source;t.bindTexture(we,R.__webglTexture,s.TEXTURE0+re);const ke=r.get(Ne);if(Ne.version!==ke.__version||me===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Re=It.getPrimaries(It.workingColorSpace),ut=T.colorSpace===jr?null:It.getPrimaries(T.colorSpace),yt=T.colorSpace===jr||Re===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let xe=L(T.image,!1,l.maxTextureSize);xe=at(T,xe);const De=c.convert(T.format,T.colorSpace),H=c.convert(T.type);let _e=P(T.internalFormat,De,H,T.normalized,T.colorSpace,T.isVideoTexture);vt(we,T);let pe;const ze=T.mipmaps,Ue=T.isVideoTexture!==!0,Oe=ke.__version===void 0||me===!0,ot=Ne.dataReady,wt=D(T,xe);if(T.isDepthTexture)_e=E(T.format===Hr,T.type),Oe&&(Ue?t.texStorage2D(s.TEXTURE_2D,1,_e,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,De,H,null));else if(T.isDataTexture)if(ze.length>0){Ue&&Oe&&t.texStorage2D(s.TEXTURE_2D,wt,_e,ze[0].width,ze[0].height);for(let Re=0,ut=ze.length;Re<ut;Re++)pe=ze[Re],Ue?ot&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,De,H,pe.data):t.texImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,De,H,pe.data);T.generateMipmaps=!1}else Ue?(Oe&&t.texStorage2D(s.TEXTURE_2D,wt,_e,xe.width,xe.height),ot&&_t(T,xe,De,H)):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,De,H,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Ue&&Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,_e,ze[0].width,ze[0].height,xe.depth);for(let Re=0,ut=ze.length;Re<ut;Re++)if(pe=ze[Re],T.format!==Gi)if(De!==null)if(Ue){if(ot)if(T.layerUpdates.size>0){const yt=wg(pe.width,pe.height,T.format,T.type);for(const We of T.layerUpdates){const Dt=pe.data.subarray(We*yt/pe.data.BYTES_PER_ELEMENT,(We+1)*yt/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,We,pe.width,pe.height,1,De,Dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,pe.width,pe.height,xe.depth,De,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,_e,pe.width,pe.height,xe.depth,0,pe.data,0,0);else xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?ot&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,pe.width,pe.height,xe.depth,De,H,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Re,_e,pe.width,pe.height,xe.depth,0,De,H,pe.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Ue&&Oe&&t.texStorage2D(s.TEXTURE_2D,wt,_e,ze[0].width,ze[0].height);for(let Re=0,ut=ze.length;Re<ut;Re++)pe=ze[Re],T.format!==Gi?De!==null?Ue?ot&&t.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,De,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,pe.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?ot&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,pe.width,pe.height,De,H,pe.data):t.texImage2D(s.TEXTURE_2D,Re,_e,pe.width,pe.height,0,De,H,pe.data)}else if(T.isDataArrayTexture)if(Ue){if(Oe&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,_e,xe.width,xe.height,xe.depth),ot)if(T.layerUpdates.size>0){const Re=wg(xe.width,xe.height,T.format,T.type);for(const ut of T.layerUpdates){const yt=xe.data.subarray(ut*Re/xe.data.BYTES_PER_ELEMENT,(ut+1)*Re/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,xe.width,xe.height,1,De,H,yt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,De,H,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,xe.width,xe.height,xe.depth,0,De,H,xe.data);else if(T.isData3DTexture)Ue?(Oe&&t.texStorage3D(s.TEXTURE_3D,wt,_e,xe.width,xe.height,xe.depth),ot&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,De,H,xe.data)):t.texImage3D(s.TEXTURE_3D,0,_e,xe.width,xe.height,xe.depth,0,De,H,xe.data);else if(T.isFramebufferTexture){if(Oe)if(Ue)t.texStorage2D(s.TEXTURE_2D,wt,_e,xe.width,xe.height);else{let Re=xe.width,ut=xe.height;for(let yt=0;yt<wt;yt++)t.texImage2D(s.TEXTURE_2D,yt,_e,Re,ut,0,De,H,null),Re>>=1,ut>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Re=s.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),xe.parentNode!==Re){Re.appendChild(xe),S.add(T),Re.onpaint=ut=>{const yt=ut.changedElements;for(const We of S)yt.includes(We.image)&&(We.needsUpdate=!0)},Re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const yt=s.RGBA,We=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,We,Dt,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(ze.length>0){if(Ue&&Oe){const Re=ve(ze[0]);t.texStorage2D(s.TEXTURE_2D,wt,_e,Re.width,Re.height)}for(let Re=0,ut=ze.length;Re<ut;Re++)pe=ze[Re],Ue?ot&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,De,H,pe):t.texImage2D(s.TEXTURE_2D,Re,_e,De,H,pe);T.generateMipmaps=!1}else if(Ue){if(Oe){const Re=ve(xe);t.texStorage2D(s.TEXTURE_2D,wt,_e,Re.width,Re.height)}ot&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,H,xe)}else t.texImage2D(s.TEXTURE_2D,0,_e,De,H,xe);k(T)&&T.mipmapsAutoUpdate===!0&&A(we),ke.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function dt(R,T,re){if(T.image.length!==6)return;const we=be(R,T),me=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+re);const Ne=r.get(me);if(me.version!==Ne.__version||we===!0){t.activeTexture(s.TEXTURE0+re);const ke=It.getPrimaries(It.workingColorSpace),he=T.colorSpace===jr?null:It.getPrimaries(T.colorSpace),xe=T.colorSpace===jr||ke===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const De=T.isCompressedTexture||T.image[0].isCompressedTexture,H=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let We=0;We<6;We++)!De&&!H?_e[We]=L(T.image[We],!0,l.maxCubemapSize):_e[We]=H?T.image[We].image:T.image[We],_e[We]=at(T,_e[We]);const pe=_e[0],ze=c.convert(T.format,T.colorSpace),Ue=c.convert(T.type);let Oe=P(T.internalFormat,ze,Ue,T.normalized,T.colorSpace);const ot=T.isVideoTexture!==!0,wt=Ne.__version===void 0||we===!0,Re=me.dataReady;let ut=D(T,pe);vt(s.TEXTURE_CUBE_MAP,T);let yt;if(T.isDepthTexture){if(Oe=E(T.format===Hr,T.type),wt)if(ot)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,Oe,pe.width,pe.height);else for(let We=0;We<6;We++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Oe,pe.width,pe.height,0,ze,Ue,null)}else if(De){ot&&wt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Oe,pe.width,pe.height);for(let We=0;We<6;We++){yt=_e[We].mipmaps;for(let Dt=0;Dt<yt.length;Dt++){const en=yt[Dt];T.format!==Gi?ze!==null?ot?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,0,0,en.width,en.height,ze,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,Oe,en.width,en.height,0,en.data):xt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ot?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,0,0,en.width,en.height,ze,Ue,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt,Oe,en.width,en.height,0,ze,Ue,en.data)}}}else{if(yt=T.mipmaps,ot&&wt){yt.length>0&&ut++;const We=ve(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,Oe,We.width,We.height)}for(let We=0;We<6;We++)if(H){ot?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,_e[We].width,_e[We].height,ze,Ue,_e[We].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Oe,_e[We].width,_e[We].height,0,ze,Ue,_e[We].data);for(let Dt=0;Dt<yt.length;Dt++){const Zn=yt[Dt].image[We].image;ot?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,0,0,Zn.width,Zn.height,ze,Ue,Zn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,Oe,Zn.width,Zn.height,0,ze,Ue,Zn.data)}}else{ot?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,0,0,ze,Ue,_e[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,0,Oe,ze,Ue,_e[We]);for(let Dt=0;Dt<yt.length;Dt++){const en=yt[Dt];ot?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,0,0,ze,Ue,en.image[We]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+We,Dt+1,Oe,ze,Ue,en.image[We])}}}k(T)&&T.mipmapsAutoUpdate===!0&&A(s.TEXTURE_CUBE_MAP),Ne.__version=me.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function ge(R,T,re,we,me,Ne){const ke=c.convert(re.format,re.colorSpace),he=c.convert(re.type),xe=P(re.internalFormat,ke,he,re.normalized,re.colorSpace),De=r.get(T),H=r.get(re);if(H.__renderTarget=T,!De.__hasExternalTextures){const _e=Math.max(1,T.width>>Ne),pe=Math.max(1,T.height>>Ne);me===s.TEXTURE_3D||me===s.TEXTURE_2D_ARRAY?t.texImage3D(me,Ne,xe,_e,pe,T.depth,0,ke,he,null):t.texImage2D(me,Ne,xe,_e,pe,0,ke,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,me,H.__webglTexture,0,Mt(T)):(me===s.TEXTURE_2D||me>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,we,me,H.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(R,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const we=T.depthTexture,me=we&&we.isDepthTexture?we.type:null,Ne=E(T.stencilBuffer,me),ke=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(T),Ne,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(T),Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,ke,s.RENDERBUFFER,R)}else{const we=T.textures;for(let me=0;me<we.length;me++){const Ne=we[me],ke=c.convert(Ne.format,Ne.colorSpace),he=c.convert(Ne.type),xe=P(Ne.internalFormat,ke,he,Ne.normalized,Ne.colorSpace);Ie(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,Mt(T),xe,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,Mt(T),xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ge(R,T,re){const we=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(T.depthTexture);me.__renderTarget=T;const Ne=we?T.depthTexture.image[0]:T.depthTexture.image;(!me.__webglTexture||Ne.width!==T.width||Ne.height!==T.height)&&(Ne.width=T.width,Ne.height=T.height,T.depthTexture.needsUpdate=!0),we?ye(T.depthTexture,0):ue(T.depthTexture,0);const ke=me.__webglTexture,he=Mt(T),xe=we?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,De=T.depthTexture.format===Hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Xr)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,xe,ke,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,De,xe,ke,0);else if(T.depthTexture.format===Hr)Ie(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,De,xe,ke,0,he):s.framebufferTexture2D(s.FRAMEBUFFER,De,xe,ke,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function bt(R){const T=r.get(R),re=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const we=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),we){const me=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,we.removeEventListener("dispose",me)};we.addEventListener("dispose",me),T.__depthDisposeCallback=me}T.__boundDepthTexture=we}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(re)for(let we=0;we<6;we++)Ge(T.__webglFramebuffer[we],R,we);else R.texture.mipmaps.length>0?Ge(T.__webglFramebuffer[0],R,0):Ge(T.__webglFramebuffer,R,0);else if(re){T.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[we]),T.__webglDepthbuffer[we]===void 0)T.__webglDepthbuffer[we]=s.createRenderbuffer(),Be(T.__webglDepthbuffer[we],R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[we];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ne)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),Be(T.__webglDepthbuffer,R,!1);else{const me=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,Ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Pt(R,T,re){const we=r.get(R);T!==void 0&&ge(we.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&bt(R)}function Pe(R){const T=R.texture,re=r.get(R),we=r.get(T);R.addEventListener("dispose",ee),J(R);const me=R.textures,Ne=R.isWebGLCubeRenderTarget===!0,ke=me.length>1;if(ke||(we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture()),we.__version=T.version,d.memory.textures++),Ne){re.__webglFramebuffer=[];for(let he=0;he<6;he++)if(T.mipmaps.length>0){re.__webglFramebuffer[he]=[];for(let xe=0;xe<T.mipmaps.length;xe++)re.__webglFramebuffer[he][xe]=s.createFramebuffer()}else re.__webglFramebuffer[he]=s.createFramebuffer()}else{if(T.mipmaps.length>0){re.__webglFramebuffer=[];for(let he=0;he<T.mipmaps.length;he++)re.__webglFramebuffer[he]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(ke)for(let he=0,xe=me.length;he<xe;he++){const De=r.get(me[he]);De.__webglTexture===void 0&&(De.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&Ie(R)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let he=0;he<me.length;he++){const xe=me[he];re.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[he]);const De=c.convert(xe.format,xe.colorSpace),H=c.convert(xe.type),_e=P(xe.internalFormat,De,H,xe.normalized,xe.colorSpace,R.isXRRenderTarget===!0),pe=Mt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,pe,_e,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,re.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),Be(re.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),vt(s.TEXTURE_CUBE_MAP,T);for(let he=0;he<6;he++)if(T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ge(re.__webglFramebuffer[he][xe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,xe);else ge(re.__webglFramebuffer[he],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);k(T)?A(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(ke){for(let he=0,xe=me.length;he<xe;he++){const De=me[he],H=r.get(De);let _e=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,H.__webglTexture),vt(_e,De),ge(re.__webglFramebuffer,R,De,s.COLOR_ATTACHMENT0+he,_e,0),k(De)&&A(_e)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(he=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,we.__webglTexture),vt(he,T),T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)ge(re.__webglFramebuffer[xe],R,T,s.COLOR_ATTACHMENT0,he,xe);else ge(re.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,he,0);k(T)?A(he):T.mipmaps.length>0&&s.texParameteri(he,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&bt(R)}function U(R){const T=R.textures;for(let re=0,we=T.length;re<we;re++){const me=T[re];if(k(me)&&me.mipmapsAutoUpdate===!0){const Ne=I(R),ke=r.get(me).__webglTexture;t.bindTexture(Ne,ke),A(Ne),t.unbindTexture()}}}const $e=[];function ft(R){if(R.samples>0){if(Ie(R)===!1){const T=R.textures,re=R.width,we=R.height;let me=s.COLOR_BUFFER_BIT;const Ne=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ke=r.get(R),he=T.length>1;if(he)for(let De=0;De<T.length;De++)t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,ke.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglFramebuffer);for(let De=0;De<T.length;De++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(me|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(me|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const H=r.get(T[De]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,H,0)}s.blitFramebuffer(0,0,re,we,0,0,re,we,me,s.NEAREST),p===!0&&($e.length=0,$e.push(s.COLOR_ATTACHMENT0+De),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&$e.push(Ne),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,$e))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let De=0;De<T.length;De++){t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.RENDERBUFFER,ke.__webglColorRenderbuffer[De]);const H=r.get(T[De]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,ke.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+De,s.TEXTURE_2D,H,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,ke.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&p){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function Mt(R){return Math.min(l.maxSamples,R.samples)}function Ie(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(R){const T=d.render.frame;_.get(R)!==T&&(_.set(R,T),R.update())}function at(R,T){const re=R.colorSpace,we=R.format,me=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||re!==vc&&re!==jr&&(It.getTransfer(re)===Vt?(we!==Gi||me!==ri)&&xt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",re)),T}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=Me,this.resetTextureUnits=Q,this.getTextureUnits=F,this.setTextureUnits=K,this.setTexture2D=ue,this.setTexture2DArray=Se,this.setTexture3D=Ee,this.setTextureCube=ye,this.rebindTextures=Pt,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=ge,this.useMultisampledRTT=Ie,this.dispose=X}function dT(s,e){function t(r,l=jr){let c;const d=It.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===$f)return s.UNSIGNED_SHORT_4_4_4_4;if(r===qf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===_x)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===yx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===xx)return s.BYTE;if(r===vx)return s.SHORT;if(r===mo)return s.UNSIGNED_SHORT;if(r===Xf)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Hi)return s.FLOAT;if(r===Yi)return s.HALF_FLOAT;if(r===Sx)return s.ALPHA;if(r===Mx)return s.RGB;if(r===Gi)return s.RGBA;if(r===Xr)return s.DEPTH_COMPONENT;if(r===Hr)return s.DEPTH_STENCIL;if(r===Ex)return s.RED;if(r===Yf)return s.RED_INTEGER;if(r===gs)return s.RG;if(r===Kf)return s.RG_INTEGER;if(r===Zf)return s.RGBA_INTEGER;if(r===ac||r===oc||r===lc||r===cc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===ac)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===oc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===ac)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===oc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===cc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===nf||r===rf||r===sf||r===af)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===nf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===af)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===of||r===lf||r===cf||r===uf||r===df||r===gc||r===ff)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===of||r===lf)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===cf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===uf)return c.COMPRESSED_R11_EAC;if(r===df)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return c.COMPRESSED_RG11_EAC;if(r===ff)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===hf||r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===Ef||r===wf||r===bf||r===Tf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===hf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===pf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_f)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ef)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Tf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Cf||r===Af||r===Nf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Cf)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Af)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Nf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rf||r===Pf||r===xc||r===Lf)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Pf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lf)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const fT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,hT=`
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

}`;class pT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Fx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new xs({vertexShader:fT,fragmentShader:hT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ki(new Eo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class mT extends vs{constructor(e,t){super();const r=this;let l=null,c=1,d=null,f="local-floor",p=1,m=null,_=null,S=null,v=null,y=null,w=null;const b=typeof XRWebGLBinding<"u",x=new pT,M={},L=t.getContextAttributes();let k=null,A=null;const I=[],P=[],E=new Ut;let D=null,J=null;const z=new qn;z.viewport=new rn;const V=new qn;V.viewport=new rn;const ee=[z,V],ie=new wM;let j=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let ue=I[G];return ue===void 0&&(ue=new bd,I[G]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(G){let ue=I[G];return ue===void 0&&(ue=new bd,I[G]=ue),ue.getGripSpace()},this.getHand=function(G){let ue=I[G];return ue===void 0&&(ue=new bd,I[G]=ue),ue.getHandSpace()};function ne(G){const ue=P.indexOf(G.inputSource);if(ue===-1)return;const Se=I[ue];Se!==void 0&&(Se.update(G.inputSource,G.frame,m||d),Se.dispatchEvent({type:G.type,data:G.inputSource}))}function O(){l.removeEventListener("select",ne),l.removeEventListener("selectstart",ne),l.removeEventListener("selectend",ne),l.removeEventListener("squeeze",ne),l.removeEventListener("squeezestart",ne),l.removeEventListener("squeezeend",ne),l.removeEventListener("end",O),l.removeEventListener("inputsourceschange",$);for(let G=0;G<I.length;G++){const ue=P[G];ue!==null&&(P[G]=null,I[G].disconnect(ue))}j=null,X=null,x.reset();for(const G in M)delete M[G];if(e.setRenderTarget(k),y=null,v=null,S=null,l=null,A=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),J!==null){const G=J.camera;G.fov=J.fov,G.zoom=J.zoom,G.updateProjectionMatrix(),J=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){c=G,r.isPresenting===!0&&xt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){f=G,r.isPresenting===!0&&xt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(G){m=G},this.getBaseLayer=function(){return v!==null?v:y},this.getBinding=function(){return S===null&&b&&(S=new XRWebGLBinding(l,t)),S},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(G){if(l=G,l!==null){if(k=e.getRenderTarget(),l.addEventListener("select",ne),l.addEventListener("selectstart",ne),l.addEventListener("selectend",ne),l.addEventListener("squeeze",ne),l.addEventListener("squeezestart",ne),l.addEventListener("squeezeend",ne),l.addEventListener("end",O),l.addEventListener("inputsourceschange",$),L.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,Ee=null,ye=null;L.depth&&(ye=L.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=L.stencil?Hr:Xr,Ee=L.stencil?da:qi);const Ae={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:c};S=this.getBinding(),v=S.createProjectionLayer(Ae),l.updateRenderState({layers:[v]}),e.setPixelRatio(1),e.setSize(v.textureWidth,v.textureHeight,!1),A=new Xi(v.textureWidth,v.textureHeight,{format:Gi,type:ri,depthTexture:new fa(v.textureWidth,v.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:L.stencil,colorSpace:e.outputColorSpace,samples:L.antialias?4:0,resolveDepthBuffer:v.ignoreDepthValues===!1,resolveStencilBuffer:v.ignoreDepthValues===!1,storeMultisampledDepthBuffer:v.ignoreDepthValues===!1,storeMultisampledStencilBuffer:v.ignoreDepthValues===!1})}else{const Se={antialias:L.antialias,alpha:!0,depth:L.depth,stencil:L.stencil,framebufferScaleFactor:c};y=new XRWebGLLayer(l,t,Se),l.updateRenderState({baseLayer:y}),e.setPixelRatio(1),e.setSize(y.framebufferWidth,y.framebufferHeight,!1),A=new Xi(y.framebufferWidth,y.framebufferHeight,{format:Gi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:L.stencil,resolveDepthBuffer:y.ignoreDepthValues===!1,resolveStencilBuffer:y.ignoreDepthValues===!1,storeMultisampledDepthBuffer:y.ignoreDepthValues===!1,storeMultisampledStencilBuffer:y.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(f),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(G){for(let ue=0;ue<G.removed.length;ue++){const Se=G.removed[ue],Ee=P.indexOf(Se);Ee>=0&&(P[Ee]=null,I[Ee].disconnect(Se))}for(let ue=0;ue<G.added.length;ue++){const Se=G.added[ue];let Ee=P.indexOf(Se);if(Ee===-1){for(let Ae=0;Ae<I.length;Ae++)if(Ae>=P.length){P.push(Se),Ee=Ae;break}else if(P[Ae]===null){P[Ae]=Se,Ee=Ae;break}if(Ee===-1)break}const ye=I[Ee];ye&&ye.connect(Se)}}function q(G,ue){ue===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(ue.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(l===null)return;let ue=G.near,Se=G.far;x.texture!==null&&(x.depthNear>0&&(ue=x.depthNear),x.depthFar>0&&(Se=x.depthFar)),ie.near=V.near=z.near=ue,ie.far=V.far=z.far=Se,(j!==ie.near||X!==ie.far)&&(l.updateRenderState({depthNear:ie.near,depthFar:ie.far}),j=ie.near,X=ie.far),ie.layers.mask=G.layers.mask|6,z.layers.mask=ie.layers.mask&-5,V.layers.mask=ie.layers.mask&-3;const Ee=G.parent,ye=ie.cameras;q(ie,Ee);for(let Ae=0;Ae<ye.length;Ae++)q(ye[Ae],Ee);ie.projectionMatrix.copy(z.projectionMatrix),ie.projectionMatrixInverse.copy(z.projectionMatrixInverse),J===null&&G.isPerspectiveCamera&&(J={camera:G,fov:G.fov,zoom:G.zoom}),Q(G,ie,Ee)};function Q(G,ue,Se){Se===null?G.matrix.copy(ue.matrixWorld):(G.matrix.copy(Se.matrixWorld),G.matrix.invert(),G.matrix.multiply(ue.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(ue.projectionMatrix),G.projectionMatrixInverse.copy(ue.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=yc*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(v===null&&y===null))return p},this.setFoveation=function(G){p=G,v!==null&&(v.fixedFoveation=G),y!==null&&y.fixedFoveation!==void 0&&(y.fixedFoveation=G)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(ie)},this.getCameraTexture=function(G){return M[G]};let F=null;function K(G,ue){if(_=ue.getViewerPose(m||d),w=ue,_!==null){const Se=_.views;y!==null&&(e.setRenderTargetFramebuffer(A,y.framebuffer),e.setRenderTarget(A));let Ee=!1;Se.length!==ie.cameras.length&&(ie.cameras.length=0,Ee=!0);for(let Qe=0;Qe<Se.length;Qe++){const vt=Se[Qe];let be=null;if(y!==null)be=y.getViewport(vt);else{const _t=S.getViewSubImage(v,vt);be=_t.viewport,Qe===0&&(e.setRenderTargetTextures(A,_t.colorTexture,_t.depthStencilTexture),e.setRenderTarget(A))}let Xe=ee[Qe];Xe===void 0&&(Xe=new qn,Xe.layers.enable(Qe),Xe.viewport=new rn,ee[Qe]=Xe),Xe.matrix.fromArray(vt.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(vt.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(be.x,be.y,be.width,be.height),Qe===0&&(ie.matrix.copy(Xe.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Ee===!0&&ie.cameras.push(Xe)}const ye=l.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&b){S=r.getBinding();const Qe=S.getDepthInformation(Se[0]);Qe&&Qe.isValid&&Qe.texture&&x.init(Qe,l.renderState)}if(ye&&ye.includes("camera-access")&&b){e.state.unbindTexture(),S=r.getBinding();for(let Qe=0;Qe<Se.length;Qe++){const vt=Se[Qe].camera;if(vt){let be=M[vt];be||(be=new Fx,M[vt]=be);const Xe=S.getCameraImage(vt);be.sourceTexture=Xe}}}}for(let Se=0;Se<I.length;Se++){const Ee=P[Se],ye=I[Se];Ee!==null&&ye!==void 0&&ye.update(Ee,ue,m||d)}F&&F(G,ue),ue.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:ue}),w=null}const Me=new Bx;Me.setAnimationLoop(K),this.setAnimationLoop=function(G){F=G},this.dispose=function(){}}}const gT=new qt,Zx=new Et;Zx.set(-1,0,0,0,1,0,0,0,1);function xT(s,e){function t(x,M){x.matrixAutoUpdate===!0&&x.updateMatrix(),M.value.copy(x.matrix)}function r(x,M){M.color.getRGB(x.fogColor.value,Ox(s)),M.isFog?(x.fogNear.value=M.near,x.fogFar.value=M.far):M.isFogExp2&&(x.fogDensity.value=M.density)}function l(x,M,L,k,A){M.isNodeMaterial?M.uniformsNeedUpdate=!1:M.isMeshBasicMaterial?c(x,M):M.isMeshLambertMaterial?(c(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshToonMaterial?(c(x,M),S(x,M)):M.isMeshPhongMaterial?(c(x,M),_(x,M),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)):M.isMeshStandardMaterial?(c(x,M),v(x,M),M.isMeshPhysicalMaterial&&y(x,M,A)):M.isMeshMatcapMaterial?(c(x,M),w(x,M)):M.isMeshDepthMaterial?c(x,M):M.isMeshDistanceMaterial?(c(x,M),b(x,M)):M.isMeshNormalMaterial?c(x,M):M.isLineBasicMaterial?(d(x,M),M.isLineDashedMaterial&&f(x,M)):M.isPointsMaterial?p(x,M,L,k):M.isSpriteMaterial?m(x,M):M.isShadowMaterial?(x.color.value.copy(M.color),x.opacity.value=M.opacity):M.isShaderMaterial&&(M.uniformsNeedUpdate=!1)}function c(x,M){x.opacity.value=M.opacity,M.color&&x.diffuse.value.copy(M.color),M.emissive&&x.emissive.value.copy(M.emissive).multiplyScalar(M.emissiveIntensity),M.map&&(x.map.value=M.map,t(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.bumpMap&&(x.bumpMap.value=M.bumpMap,t(M.bumpMap,x.bumpMapTransform),x.bumpScale.value=M.bumpScale,M.side===Kn&&(x.bumpScale.value*=-1)),M.normalMap&&(x.normalMap.value=M.normalMap,t(M.normalMap,x.normalMapTransform),x.normalScale.value.copy(M.normalScale),M.side===Kn&&x.normalScale.value.negate()),M.displacementMap&&(x.displacementMap.value=M.displacementMap,t(M.displacementMap,x.displacementMapTransform),x.displacementScale.value=M.displacementScale,x.displacementBias.value=M.displacementBias),M.emissiveMap&&(x.emissiveMap.value=M.emissiveMap,t(M.emissiveMap,x.emissiveMapTransform)),M.specularMap&&(x.specularMap.value=M.specularMap,t(M.specularMap,x.specularMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest);const L=e.get(M),k=L.envMap,A=L.envMapRotation;k&&(x.envMap.value=k,x.envMapRotation.value.setFromMatrix4(gT.makeRotationFromEuler(A)).transpose(),k.isCubeTexture&&k.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(Zx),x.reflectivity.value=M.reflectivity,x.ior.value=M.ior,x.refractionRatio.value=M.refractionRatio),M.lightMap&&(x.lightMap.value=M.lightMap,x.lightMapIntensity.value=M.lightMapIntensity,t(M.lightMap,x.lightMapTransform)),M.aoMap&&(x.aoMap.value=M.aoMap,x.aoMapIntensity.value=M.aoMapIntensity,t(M.aoMap,x.aoMapTransform))}function d(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,M.map&&(x.map.value=M.map,t(M.map,x.mapTransform))}function f(x,M){x.dashSize.value=M.dashSize,x.totalSize.value=M.dashSize+M.gapSize,x.scale.value=M.scale}function p(x,M,L,k){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.size.value=M.size*L,x.scale.value=k*.5,M.map&&(x.map.value=M.map,t(M.map,x.uvTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function m(x,M){x.diffuse.value.copy(M.color),x.opacity.value=M.opacity,x.rotation.value=M.rotation,M.map&&(x.map.value=M.map,t(M.map,x.mapTransform)),M.alphaMap&&(x.alphaMap.value=M.alphaMap,t(M.alphaMap,x.alphaMapTransform)),M.alphaTest>0&&(x.alphaTest.value=M.alphaTest)}function _(x,M){x.specular.value.copy(M.specular),x.shininess.value=Math.max(M.shininess,1e-4)}function S(x,M){M.gradientMap&&(x.gradientMap.value=M.gradientMap)}function v(x,M){x.metalness.value=M.metalness,M.metalnessMap&&(x.metalnessMap.value=M.metalnessMap,t(M.metalnessMap,x.metalnessMapTransform)),x.roughness.value=M.roughness,M.roughnessMap&&(x.roughnessMap.value=M.roughnessMap,t(M.roughnessMap,x.roughnessMapTransform)),M.envMap&&(x.envMapIntensity.value=M.envMapIntensity)}function y(x,M,L){x.ior.value=M.ior,M.diffuseRoughness>0&&(x.diffuseRoughness.value=M.diffuseRoughness,M.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=M.diffuseRoughnessMap,t(M.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),M.sheen>0&&(x.sheenColor.value.copy(M.sheenColor).multiplyScalar(M.sheen),x.sheenRoughness.value=M.sheenRoughness,M.sheenColorMap&&(x.sheenColorMap.value=M.sheenColorMap,t(M.sheenColorMap,x.sheenColorMapTransform)),M.sheenRoughnessMap&&(x.sheenRoughnessMap.value=M.sheenRoughnessMap,t(M.sheenRoughnessMap,x.sheenRoughnessMapTransform))),M.clearcoat>0&&(x.clearcoat.value=M.clearcoat,x.clearcoatRoughness.value=M.clearcoatRoughness,M.clearcoatMap&&(x.clearcoatMap.value=M.clearcoatMap,t(M.clearcoatMap,x.clearcoatMapTransform)),M.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=M.clearcoatRoughnessMap,t(M.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),M.clearcoatNormalMap&&(x.clearcoatNormalMap.value=M.clearcoatNormalMap,t(M.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(M.clearcoatNormalScale),M.side===Kn&&x.clearcoatNormalScale.value.negate())),M.dispersion>0&&(x.dispersion.value=M.dispersion),M.retroreflectivity>0&&(x.retroreflectivity.value=M.retroreflectivity),M.iridescence>0&&(x.iridescence.value=M.iridescence,x.iridescenceIOR.value=M.iridescenceIOR,x.iridescenceThicknessMinimum.value=M.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=M.iridescenceThicknessMaximum,M.iridescenceMap&&(x.iridescenceMap.value=M.iridescenceMap,t(M.iridescenceMap,x.iridescenceMapTransform)),M.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=M.iridescenceThicknessMap,t(M.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),M.transmission>0&&(x.transmission.value=M.transmission,x.transmissionSamplerMap.value=L.texture,x.transmissionSamplerSize.value.set(L.width,L.height),M.transmissionMap&&(x.transmissionMap.value=M.transmissionMap,t(M.transmissionMap,x.transmissionMapTransform)),x.thickness.value=M.thickness,M.thicknessMap&&(x.thicknessMap.value=M.thicknessMap,t(M.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=M.attenuationDistance,x.attenuationColor.value.copy(M.attenuationColor)),M.anisotropy>0&&(x.anisotropyVector.value.set(M.anisotropy*Math.cos(M.anisotropyRotation),M.anisotropy*Math.sin(M.anisotropyRotation)),M.anisotropyMap&&(x.anisotropyMap.value=M.anisotropyMap,t(M.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=M.specularIntensity,x.specularColor.value.copy(M.specularColor),M.specularColorMap&&(x.specularColorMap.value=M.specularColorMap,t(M.specularColorMap,x.specularColorMapTransform)),M.specularIntensityMap&&(x.specularIntensityMap.value=M.specularIntensityMap,t(M.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,M){M.matcap&&(x.matcap.value=M.matcap)}function b(x,M){const L=e.get(M).light;x.referencePosition.value.setFromMatrixPosition(L.matrixWorld),x.nearDistance.value=L.shadow.camera.near,x.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function vT(s,e,t,r){let l={},c={};function d(L,k){const A=k.program;r.uniformBlockBinding(L,A,l[L.id])}function f(L,k){let A=l[L.id];A===void 0&&(w(L),A=p(L),l[L.id]=A,L.addEventListener("dispose",x));const I=k.program;r.updateUBOMapping(L,I);const P=e.render.frame;c[L.id]!==P&&(m(L),c[L.id]=P)}function p(L){const k=s.createBuffer(),A=L.__size,I=L.usage;return s.bindBuffer(s.UNIFORM_BUFFER,k),s.bufferData(s.UNIFORM_BUFFER,A,I),s.bindBuffer(s.UNIFORM_BUFFER,null),k}function m(L){const k=l[L.id],A=L.uniforms,I=L.__cache;s.bindBuffer(s.UNIFORM_BUFFER,k);for(let P=0,E=A.length;P<E;P++){const D=A[P];if(Array.isArray(D))for(let J=0,z=D.length;J<z;J++)_(D[J],P,J,I);else _(D,P,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(L,k,A,I){if(v(L,k,A,I)===!0){const P=L.__offset,E=L.value;if(Array.isArray(E)){let D=0;for(let J=0;J<E.length;J++){const z=E[J],V=b(z,!0);S(z,L.__data,D),D+=V.storage/Float32Array.BYTES_PER_ELEMENT}}else S(E,L.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,P,L.__data)}}function S(L,k,A){typeof L=="number"||typeof L=="boolean"?k[A]=L:L.isMatrix3?(k[A]=L.elements[0],k[A+1]=L.elements[1],k[A+2]=L.elements[2],k[A+3]=0,k[A+4]=L.elements[3],k[A+5]=L.elements[4],k[A+6]=L.elements[5],k[A+7]=0,k[A+8]=L.elements[6],k[A+9]=L.elements[7],k[A+10]=L.elements[8],k[A+11]=0):ArrayBuffer.isView(L)?k.set(L.subarray(0,k.length-A),A):L.toArray(k,A)}function v(L,k,A,I){const P=L.value,E=k+"_"+A;if(Array.isArray(P)){I[E]===void 0&&(I[E]=[]);const D=I[E];let J=!1;for(let z=0;z<P.length;z++)y(P[z],D,z)===!0&&(J=!0);return J}return y(P,I,E)}function y(L,k,A){if(k[A]===void 0)return typeof L=="number"||typeof L=="boolean"?k[A]=L:ArrayBuffer.isView(L)?k[A]=L.slice():k[A]=L.clone(),!0;{const I=k[A];if(typeof L=="number"||typeof L=="boolean"){if(I!==L)return k[A]=L,!0}else{if(ArrayBuffer.isView(L))return!0;if(I.equals(L)===!1)return I.copy(L),!0}}return!1}function w(L){const k=L.uniforms;let A=0;const I=16;for(let E=0,D=k.length;E<D;E++){const J=Array.isArray(k[E])?k[E]:[k[E]];for(let z=0,V=J.length;z<V;z++){const ee=J[z],ie=Array.isArray(ee.value)?ee.value:[ee.value],j=Array.isArray(k[E])||Array.isArray(ee.value);let X=A;for(let O=0,$=ie.length;O<$;O++){const q=ie[O],Q=b(q,j),F=A%I,K=F%Q.boundary,Me=F+K;A+=K,Me!==0&&I-Me<Q.storage&&(A+=I-Me),O===0&&(X=A),A+=Q.storage}const ne=ee.type==="int"?Int32Array:ee.type==="uint"?Uint32Array:Float32Array;ee.__data=new ne((A-X)/Float32Array.BYTES_PER_ELEMENT),ee.__offset=X}}const P=A%I;return P>0&&(A+=I-P),L.__size=A,L.__cache={},this}function b(L,k){const A={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(A.boundary=4,A.storage=4):L.isVector2?(A.boundary=8,A.storage=8):L.isVector3||L.isColor?(A.boundary=16,A.storage=12):L.isVector4?(A.boundary=16,A.storage=16):L.isMatrix3?(A.boundary=16,A.storage=48):L.isMatrix4?(A.boundary=16,A.storage=64):L.isTexture?xt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(L)?(A.boundary=16,A.storage=L.byteLength):xt("WebGLRenderer: Unsupported uniform value type.",L),k===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function x(L){const k=L.target;k.removeEventListener("dispose",x),s.deleteBuffer(l[k.id]),delete l[k.id],delete c[k.id]}function M(){for(const L in l)s.deleteBuffer(l[L]);l={},c={}}return{bind:d,update:f,dispose:M}}const _T=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Oi=null;function yT(){return Oi===null&&(Oi=new eM(_T,16,16,gs,Yi),Oi.name="DFG_LUT",Oi.minFilter=Yn,Oi.magFilter=Yn,Oi.wrapS=ur,Oi.wrapT=ur,Oi.generateMipmaps=!1,Oi.needsUpdate=!0),Oi}class Qx{constructor(e={}){const{canvas:t=CS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:_="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:v=!1,outputBufferType:y=ri}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const b=y,x=new Set([Zf,Kf,Yf]),M=new Set([ri,qi,mo,da,$f,qf]),L=new Uint32Array(4),k=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let I=null,P=null;const E=[],D=[];let J=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let V=!1,ee=null,ie=null,j=null,X=null;this._outputColorSpace=hi;let ne=0,O=0,$=null,q=-1,Q=null;const F=new rn,K=new rn;let Me=null;const G=new Tt(0);let ue=0,Se=t.width,Ee=t.height,ye=1,Ae=null,mt=null;const Qe=new rn(0,0,Se,Ee),vt=new rn(0,0,Se,Ee);let be=!1;const Xe=new vo,_t=new th;let Ye=!1,dt=!1;const ge=new qt,Be=new de,Ge=new rn,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Pt=!1;function Pe(){return $===null?ye:1}let U=r;function $e(N,Y){return t.getContext(N,Y)}let ft,Mt,Ie,Wt,at,ve,R,T,re,we,me,Ne,ke,he,xe,De,H,_e,pe,ze,Ue,Oe,ot;try{const N={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:_,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Wf}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",We,!1),U===null){const Y="webgl2";if(U=$e(Y,N),U===null)throw $e(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(N){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),Bt("WebGLRenderer: "+N.message),N}function wt(){ft=new ww(U),ft.init(),Ue=new dT(U,ft),Mt=new hw(U,ft,e,Ue),Ie=new cT(U,ft),Mt.reversedDepthBuffer&&v&&Ie.buffers.depth.setReversed(!0),ie=U.createFramebuffer(),j=U.createFramebuffer(),X=U.createFramebuffer(),Wt=new Cw(U),at=new Yb,ve=new uT(U,ft,Ie,at,Mt,Ue,Wt),R=new Ew(z),T=new NM(U),Oe=new dw(U,T),re=new bw(U,T,Wt,Oe),we=new Nw(U,re,T,Oe,Wt),_e=new Aw(U,Mt,ve),xe=new pw(at),me=new qb(z,R,ft,Mt,Oe,xe),Ne=new xT(z,at),ke=new Zb,he=new iT(ft),H=new uw(z,R,Ie,we,w,p),De=new lT(z,we,Mt),ot=new vT(U,Wt,Mt,Ie),pe=new fw(U,ft,Wt),ze=new Tw(U,ft,Wt),Wt.programs=me.programs,z.capabilities=Mt,z.extensions=ft,z.properties=at,z.renderLists=ke,z.shadowMap=De,z.state=Ie,z.info=Wt}b!==ri&&(J=new Pw(b,t.width,t.height,f,l,c));const Re=new mT(z,U);this.xr=Re,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const N=ft.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ft.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return ye},this.setPixelRatio=function(N){N!==void 0&&(ye=N,this.setSize(Se,Ee,!1))},this.getSize=function(N){return N.set(Se,Ee)},this.setSize=function(N,Y,le=!0){if(Re.isPresenting){xt("WebGLRenderer: Can't change size while VR device is presenting.");return}Se=N,Ee=Y,t.width=Math.floor(N*ye),t.height=Math.floor(Y*ye),le===!0&&(t.style.width=N+"px",t.style.height=Y+"px"),J!==null&&J.setSize(t.width,t.height),this.setViewport(0,0,N,Y)},this.getDrawingBufferSize=function(N){return N.set(Se*ye,Ee*ye).floor()},this.setDrawingBufferSize=function(N,Y,le){Se=N,Ee=Y,ye=le,t.width=Math.floor(N*le),t.height=Math.floor(Y*le),this.setViewport(0,0,N,Y)},this.setEffects=function(N){if(b===ri){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Y=0;Y<N.length;Y++)if(N[Y].isOutputPass===!0){xt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}J.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(Qe)},this.setViewport=function(N,Y,le,ae){N.isVector4?Qe.set(N.x,N.y,N.z,N.w):Qe.set(N,Y,le,ae),Ie.viewport(F.copy(Qe).multiplyScalar(Pe()).round())},this.getScissor=function(N){return N.copy(vt)},this.setScissor=function(N,Y,le,ae){N.isVector4?vt.set(N.x,N.y,N.z,N.w):vt.set(N,Y,le,ae),Ie.scissor(K.copy(vt).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return be},this.setScissorTest=function(N){Ie.setScissorTest(be=N)},this.setOpaqueSort=function(N){Ae=N},this.setTransparentSort=function(N){mt=N},this.getClearColor=function(N){return N.copy(H.getClearColor())},this.setClearColor=function(){H.setClearColor(...arguments)},this.getClearAlpha=function(){return H.getClearAlpha()},this.setClearAlpha=function(){H.setClearAlpha(...arguments)},this.clear=function(N=!0,Y=!0,le=!0){let ae=0;if(N){let se=!1;if($!==null){const He=$.texture.format;se=x.has(He)}if(se){const He=$.texture.type,Je=M.has(He),je=H.getClearColor(),Ve=H.getClearAlpha(),tt=je.r,gt=je.g,Ct=je.b;Je?(L[0]=tt,L[1]=gt,L[2]=Ct,L[3]=Ve,U.clearBufferuiv(U.COLOR,0,L)):(k[0]=tt,k[1]=gt,k[2]=Ct,k[3]=Ve,U.clearBufferiv(U.COLOR,0,k))}else ae|=U.COLOR_BUFFER_BIT}Y&&(ae|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),le&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),ee=N},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",We,!1),H.dispose(),ke.dispose(),he.dispose(),ve.dispose(),at.dispose(),R.dispose(),we.dispose(),re.dispose(),Oe.dispose(),ot.dispose(),me.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",bo),Re.removeEventListener("sessionend",Ni),Ri.stop()};function ut(N){N.preventDefault(),qm("WebGLRenderer: Context Lost."),V=!0}function yt(){qm("WebGLRenderer: Context Restored."),V=!1;const N=Wt.autoReset,Y=De.enabled,le=De.autoUpdate,ae=De.needsUpdate,se=De.type;wt(),Wt.autoReset=N,De.enabled=Y,De.autoUpdate=le,De.needsUpdate=ae,De.type=se}function We(N){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Dt(N){const Y=N.target;Y.removeEventListener("dispose",Dt),en(Y)}function en(N){Zn(N),at.remove(N)}function Zn(N){const Y=at.get(N).programs;Y!==void 0&&(Y.forEach(function(le){me.releaseProgram(le)}),N.isShaderMaterial&&me.releaseShaderCache(N))}this.renderBufferDirect=function(N,Y,le,ae,se,He){Y===null&&(Y=bt);const Je=se.isMesh&&se.matrixWorld.determinantAffine()<0,je=ya(N,Y,le,ae,se);Ie.setMaterial(ae,Je);let Ve=le.index,tt=1;if(ae.wireframe===!0){if(Ve=re.getWireframeAttribute(le),Ve===void 0)return;tt=2}const gt=le.drawRange,Ct=le.attributes.position;let nt=gt.start*tt,Nt=(gt.start+gt.count)*tt;He!==null&&(nt=Math.max(nt,He.start*tt),Nt=Math.min(Nt,(He.start+He.count)*tt)),Ve!==null?(nt=Math.max(nt,0),Nt=Math.min(Nt,Ve.count)):Ct!=null&&(nt=Math.max(nt,0),Nt=Math.min(Nt,Ct.count));const Qt=Nt-nt;if(Qt<0||Qt===1/0)return;Oe.setup(se,ae,je,le,Ve);let Gt,Ht=pe;if(Ve!==null&&(Gt=T.get(Ve),Ht=ze,Ht.setIndex(Gt)),se.isMesh)ae.wireframe===!0?(Ie.setLineWidth(ae.wireframeLinewidth*Pe()),Ht.setMode(U.LINES)):Ht.setMode(U.TRIANGLES);else if(se.isLine){let sn=ae.linewidth;sn===void 0&&(sn=1),Ie.setLineWidth(sn*Pe()),se.isLineSegments?Ht.setMode(U.LINES):se.isLineLoop?Ht.setMode(U.LINE_LOOP):Ht.setMode(U.LINE_STRIP)}else se.isPoints?Ht.setMode(U.POINTS):se.isSprite&&Ht.setMode(U.TRIANGLES);if(se.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const sn=se._multiDrawStarts,it=se._multiDrawCounts,fn=se._multiDrawCount,lt=Ve?T.get(Ve).bytesPerElement:1,Pi=at.get(ae).currentProgram.getUniforms();for(let hn=0;hn<fn;hn++)Pi.setValue(U,"_gl_DrawID",hn),Ht.render(sn[hn]/lt,it[hn])}else if(se.isInstancedMesh)Ht.renderInstances(nt,Qt,se.count);else if(le.isInstancedBufferGeometry){const sn=le._maxInstanceCount!==void 0?le._maxInstanceCount:1/0,it=Math.min(le.instanceCount,sn);Ht.renderInstances(nt,Qt,it)}else Ht.render(nt,Qt)};function ys(N,Y,le,ae){ee!==null&&N.isNodeMaterial&&ee.setObject(ae,N),Ye===!0&&xe.setState(N,le,!1),N.transparent===!0&&N.side===ji&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,Yr(N,Y,ae),N.side=ms,N.needsUpdate=!0,Yr(N,Y,ae),N.side=ji):Yr(N,Y,ae)}this.compile=function(N,Y,le=null){le===null&&(le=N),ee!==null&&ee.renderStart(N,Y,le),P=he.get(le),P.init(Y),D.push(P),le.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),N!==le&&N.traverseVisible(function(se){se.isLight&&se.layers.test(Y.layers)&&(P.pushLight(se),se.castShadow&&P.pushShadow(se))}),P.setupLights(),ee!==null&&ee.updateLights(P.state.lightsArray),dt=this.localClippingEnabled,Ye=xe.init(this.clippingPlanes,dt),Ye===!0&&xe.setGlobalState(this.clippingPlanes,Y),ee!==null&&De.render(P.state.shadowsArray,le,Y);const ae=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const He=se.material;if(He)if(Array.isArray(He))for(let Je=0;Je<He.length;Je++){const je=He[Je];ys(je,le,Y,se),ae.add(je)}else ys(He,le,Y,se),ae.add(He)}),P=D.pop(),ee!==null&&ee.renderEnd(),ae},this.compileAsync=function(N,Y,le=null){const ae=this.compile(N,Y,le);return new Promise(se=>{function He(){if(ae.forEach(function(Je){const Ve=at.get(Je).currentProgram;(Ve===void 0||Ve.isReady())&&ae.delete(Je)}),ae.size===0){se(N);return}setTimeout(He,10)}ft.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let ga=null;function Lc(N){ga&&ga(N)}function bo(){Ri.stop()}function Ni(){Ri.start()}const Ri=new Bx;Ri.setAnimationLoop(Lc),typeof self<"u"&&Ri.setContext(self),this.setAnimationLoop=function(N){ga=N,Re.setAnimationLoop(N),N===null?Ri.stop():Ri.start()},Re.addEventListener("sessionstart",bo),Re.addEventListener("sessionend",Ni),this.render=function(N,Y){if(Y!==void 0&&Y.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(V===!0)return;ee!==null&&ee.renderStart(N,Y);const le=Re.enabled===!0&&Re.isPresenting===!0,ae=J!==null&&($===null||le)&&J.begin(z,$);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(J===null||J.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Y),Y=Re.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,Y,$),P=he.get(N,D.length),P.init(Y),P.state.textureUnits=ve.getTextureUnits(),D.push(P),ge.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Y.isArrayCamera?_t.setFromArrayCamera(Y):Xe.setFromProjectionMatrix(ge,Ai,Y.reversedDepth),dt=this.localClippingEnabled,Ye=xe.init(this.clippingPlanes,dt),I=ke.get(N,E.length),I.init(),E.push(I),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Je=z.xr.getDepthSensingMesh();Je!==null&&Ss(Je,Y,-1/0,z.sortObjects)}Ss(N,Y,0,z.sortObjects),I.finish(),ee!==null&&ee.updateLights(P.state.lightsArray),z.sortObjects===!0&&I.sort(Ae,mt),Pt=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Pt&&H.addToRenderList(I,N),this.info.autoReset===!0&&this.info.reset(),Ye===!0&&xe.beginShadows();const se=P.state.shadowsArray;if(De.render(se,N,Y),Ye===!0&&xe.endShadows(),(ae&&J.hasRenderPass())===!1){const Je=I.opaque,je=I.transmissive;if(P.setupLights(),Y.isArrayCamera){const Ve=Y.cameras;if(je.length>0)for(let tt=0,gt=Ve.length;tt<gt;tt++){const Ct=Ve[tt];xa(Je,je,N,Ct)}Pt&&H.render(N);for(let tt=0,gt=Ve.length;tt<gt;tt++){const Ct=Ve[tt];To(I,N,Ct,Ct.viewport)}}else je.length>0&&xa(Je,je,N,Y),Pt&&H.render(N),To(I,N,Y)}$!==null&&O===0&&(ve.updateMultisampleRenderTarget($),ve.updateRenderTargetMipmap($)),ae&&J.end(z),N.isScene===!0&&N.onAfterRender(z,N,Y),Oe.resetDefaultState(),q=-1,Q=null,D.pop(),D.length>0?(P=D[D.length-1],ve.setTextureUnits(P.state.textureUnits),Ye===!0&&xe.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,ee!==null&&ee.renderEnd()};function Ss(N,Y,le,ae){if(N.visible===!1)return;if(N.layers.test(Y.layers)){if(N.isGroup)le=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Y);else if(N.isLight)P.pushLight(N),N.castShadow&&P.pushShadow(N);else if(N.isSprite){const Je=Y.isArrayCamera?_t:Xe;if(!N.frustumCulled||N.intersectsFrustum(Je)){ae&&Ge.setFromMatrixPosition(N.matrixWorld).applyMatrix4(ge);const je=we.update(N),Ve=N.material;Ve.visible&&I.push(N,je,Ve,le,Ge.z,null,Y)}}else if(N.isMesh||N.isLine||N.isPoints){const Je=Y.isArrayCamera?_t:Xe;if(!N.frustumCulled||N.intersectsFrustum(Je)){const je=we.update(N),Ve=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ge.copy(N.boundingSphere.center)):(je.boundingSphere===null&&je.computeBoundingSphere(),Ge.copy(je.boundingSphere.center)),Ge.applyMatrix4(N.matrixWorld).applyMatrix4(ge)),Array.isArray(Ve)){const tt=je.groups;for(let gt=0,Ct=tt.length;gt<Ct;gt++){const nt=tt[gt],Nt=Ve[nt.materialIndex];Nt&&Nt.visible&&I.push(N,je,Nt,le,Ge.z,nt,Y)}}else Ve.visible&&I.push(N,je,Ve,le,Ge.z,null,Y)}}}const He=N.children;for(let Je=0,je=He.length;Je<je;Je++)Ss(He[Je],Y,le,ae)}function To(N,Y,le,ae){const{opaque:se,transmissive:He,transparent:Je}=N;P.setupLightsView(le),Ye===!0&&xe.setGlobalState(z.clippingPlanes,le),ae&&Ie.viewport(F.copy(ae)),se.length>0&&qr(se,Y,le),He.length>0&&qr(He,Y,le),Je.length>0&&qr(Je,Y,le),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function xa(N,Y,le,ae){if((le.isScene===!0?le.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const nt=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Xi(1,1,{generateMipmaps:!0,type:nt?Yi:ri,minFilter:Br,samples:Math.max(4,Mt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const He=P.state.transmissionRenderTarget[ae.id],Je=ae.viewport||F;He.setSize(Je.z*z.transmissionResolutionScale,Je.w*z.transmissionResolutionScale);const je=z.getRenderTarget(),Ve=z.getActiveCubeFace(),tt=z.getActiveMipmapLevel();z.setRenderTarget(He),z.getClearColor(G),ue=z.getClearAlpha(),ue<1&&z.setClearColor(16777215,.5),z.clear(),Pt&&H.render(le);const gt=z.toneMapping;z.toneMapping=dr;const Ct=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),Ye===!0&&xe.setGlobalState(z.clippingPlanes,ae),qr(N,le,ae),ve.updateMultisampleRenderTarget(He),ve.updateRenderTargetMipmap(He),ft.has("WEBGL_multisampled_render_to_texture")===!1){let nt=!1;for(let Nt=0,Qt=Y.length;Nt<Qt;Nt++){const Gt=Y[Nt],{object:Ht,geometry:sn,material:it,group:fn}=Gt;if(it.side===ji&&Ht.layers.test(ae.layers)){const lt=it.side;it.side=Kn,it.needsUpdate=!0,va(Ht,le,ae,sn,it,fn),it.side=lt,it.needsUpdate=!0,nt=!0}}nt===!0&&(ve.updateMultisampleRenderTarget(He),ve.updateRenderTargetMipmap(He))}z.setRenderTarget(je,Ve,tt),z.setClearColor(G,ue),Ct!==void 0&&(ae.viewport=Ct),z.toneMapping=gt}function qr(N,Y,le){const ae=Y.isScene===!0?Y.overrideMaterial:null;for(let se=0,He=N.length;se<He;se++){const Je=N[se],{object:je,geometry:Ve,group:tt}=Je;let gt=Je.material;gt.allowOverride===!0&&ae!==null&&(gt=ae),je.layers.test(le.layers)&&va(je,Y,le,Ve,gt,tt)}}function va(N,Y,le,ae,se,He){ee!==null&&se.isNodeMaterial&&ee.setObject(N,se),N.onBeforeRender(z,Y,le,ae,se,He),N.modelViewMatrix.multiplyMatrices(le.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(z,Y,le,ae,N,He),se.transparent===!0&&se.side===ji&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,z.renderBufferDirect(le,Y,ae,se,N,He),se.side=ms,se.needsUpdate=!0,z.renderBufferDirect(le,Y,ae,se,N,He),se.side=ji):z.renderBufferDirect(le,Y,ae,se,N,He),N.onAfterRender(z,Y,le,ae,se,He)}function _a(N){let Y=0;for(const le of N)le.texture!==null&&Y++;return Y}function Yr(N,Y,le){Y.isScene!==!0&&(Y=bt);const ae=at.get(N),se=P.state.lights,He=P.state.shadowsArray,Je=se.state.version,je=me.getParameters(N,se.state,He,Y,le,P.state.lightProbeGridArray),Ve=me.getProgramCacheKey(je);let tt=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Y.environment:null,ae.fog=Y.fog;const gt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=R.get(N.envMap||ae.environment,gt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?Y.environmentRotation:N.envMapRotation,tt===void 0&&(N.addEventListener("dispose",Dt),tt=new Map,ae.programs=tt,ae.programVariants=new Map);let Ct=tt.get(Ve);if(Ct!==void 0){if(ae.currentProgram===Ct&&ae.lightsStateVersion===Je)return Co(N,je),Ct}else je.uniforms=me.getUniforms(N),ee!==null&&N.isNodeMaterial&&ee.build(N,le,je),N.onBeforeCompile(je,z),Ct=me.acquireProgram(je,Ve),tt.set(Ve,Ct),ae.uniforms=je.uniforms;const nt=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(nt.clippingPlanes=xe.uniform),Co(N,je),ae.needsLights=Ms(N),ae.lightsStateVersion=Je,ae.needsLights&&(nt.ambientLightColor.value=se.state.ambient,nt.lightProbe.value=se.state.probe,nt.sunLights.value=se.state.sun,nt.sunLightShadows.value=se.state.sunShadow,nt.directionalLights.value=se.state.directional,nt.directionalLightShadows.value=se.state.directionalShadow,nt.spotLights.value=se.state.spot,nt.spotLightShadows.value=se.state.spotShadow,nt.rectAreaLights.value=se.state.rectArea,nt.ltc_1.value=se.state.rectAreaLTC1,nt.ltc_2.value=se.state.rectAreaLTC2,nt.pointLights.value=se.state.point,nt.pointLightShadows.value=se.state.pointShadow,nt.hemisphereLights.value=se.state.hemi,nt.sunShadowMatrix.value=se.state.sunShadowMatrix,nt.sunShadowCascade.value=se.state.sunShadowCascade,nt.directionalShadowMatrix.value=se.state.directionalShadowMatrix,nt.spotLightMatrix.value=se.state.spotLightMatrix,nt.spotLightMap.value=se.state.spotLightMap,nt.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.numLightProbeGrids=_a(P.state.lightProbeGridArray),ae.currentProgram=Ct,ae.uniformsList=null,Ct}function Dc(N,Y,le,ae,se){const He=at.get(N),Je=He.currentProgram.id+","+ae+","+se;let je=He.programVariants.get(Je);return je===void 0?(je=Yr(N,Y,le),He.programVariants.set(Je,je)):(He.currentProgram=je,He.uniformsList=null,He.outputColorSpace=ae,He.toneMapping=se),je}function Zt(N){if(N.uniformsList===null){const Y=N.currentProgram.getUniforms();N.uniformsList=dc.seqWithValue(Y.seq,N.uniforms)}return N.uniformsList}function Co(N,Y){const le=at.get(N);le.outputColorSpace=Y.outputColorSpace,le.batching=Y.batching,le.batchingColor=Y.batchingColor,le.instancing=Y.instancing,le.instancingColor=Y.instancingColor,le.instancingMorph=Y.instancingMorph,le.skinning=Y.skinning,le.morphTargets=Y.morphTargets,le.morphNormals=Y.morphNormals,le.morphColors=Y.morphColors,le.morphTargetsCount=Y.morphTargetsCount,le.numClippingPlanes=Y.numClippingPlanes,le.numIntersection=Y.numClipIntersection,le.vertexAlphas=Y.vertexAlphas,le.vertexTangents=Y.vertexTangents,le.toneMapping=Y.toneMapping}function ya(N,Y,le,ae,se){Y.isScene!==!0&&(Y=bt),ve.resetTextureUnits();const He=Y.fog,Je=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Y.environment:null,je=$===null?z.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:It.workingColorSpace,Ve=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,tt=R.get(ae.envMap||Je,Ve),gt=ae.vertexColors===!0&&!!le.attributes.color&&le.attributes.color.itemSize===4,Ct=!!le.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),nt=!!le.morphAttributes.position,Nt=!!le.morphAttributes.normal,Qt=!!le.morphAttributes.color;let Gt=dr;ae.toneMapped&&($===null||$.isXRRenderTarget===!0)&&(Gt=z.toneMapping);const Ht=le.morphAttributes.position||le.morphAttributes.normal||le.morphAttributes.color,sn=Ht!==void 0?Ht.length:0,it=at.get(ae),fn=P.state.lights;if(Ye===!0&&(dt===!0||N!==Q)){const zt=N===Q&&ae.id===q;xe.setState(ae,N,zt)}let lt=!1,Pi=!1;ae.version===it.__version?it.needsLights&&it.lightsStateVersion!==fn.state.version||se.isBatchedMesh&&it.batching===!1||!se.isBatchedMesh&&it.batching===!0||se.isBatchedMesh&&it.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&it.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&it.instancing===!1||!se.isInstancedMesh&&it.instancing===!0||se.isSkinnedMesh&&it.skinning===!1||!se.isSkinnedMesh&&it.skinning===!0||se.isInstancedMesh&&it.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&it.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&it.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&it.instancingMorph===!1&&se.morphTexture!==null||it.envMap!==tt||ae.fog===!0&&it.fog!==He||it.numClippingPlanes!==void 0&&(it.numClippingPlanes!==xe.numPlanes||it.numIntersection!==xe.numIntersection)||it.vertexAlphas!==gt||it.vertexTangents!==Ct||it.morphTargets!==nt||it.morphNormals!==Nt||it.morphColors!==Qt||it.morphTargetsCount!==sn||it.numLightProbeGrids!==_a(P.state.lightProbeGridArray)?lt=!0:(it.outputColorSpace!==je||it.toneMapping!==Gt)&&(Pi=!0):(lt=!0,it.__version=ae.version);let hn=it.currentProgram;(lt===!0||Pi===!0)&&(hn=Pi===!0?Dc(ae,Y,se,je,Gt):Yr(ae,Y,se),ee&&ae.isNodeMaterial&&ee.onUpdateProgram(ae,hn,it));let pr=!1,gi=!1,Li=!1;const Lt=hn.getUniforms(),on=it.uniforms;if(Ie.useProgram(hn.program)&&(pr=!0,gi=!0,Li=!0),ae.id!==q&&(q=ae.id,gi=!0),pr||Q!==N){Ie.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Lt.setValue(U,"projectionMatrix",N.projectionMatrix),Lt.setValue(U,"viewMatrix",N.matrixWorldInverse);const Xt=Lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(U,Be.setFromMatrixPosition(N.matrixWorld)),Mt.logarithmicDepthBuffer&&Lt.setValue(U,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Lt.setValue(U,"isOrthographic",N.isOrthographicCamera===!0),Q!==N&&(Q=N,gi=!0,Li=!0)}if(it.needsLights&&(fn.state.sunShadowMap.length>0&&Lt.setValue(U,"sunShadowMap",fn.state.sunShadowMap,ve),fn.state.directionalShadowMap.length>0&&Lt.setValue(U,"directionalShadowMap",fn.state.directionalShadowMap,ve),fn.state.spotShadowMap.length>0&&Lt.setValue(U,"spotShadowMap",fn.state.spotShadowMap,ve),fn.state.pointShadowMap.length>0&&Lt.setValue(U,"pointShadowMap",fn.state.pointShadowMap,ve)),se.isSkinnedMesh){Lt.setOptional(U,se,"bindMatrix"),Lt.setOptional(U,se,"bindMatrixInverse");const zt=se.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Lt.setValue(U,"boneTexture",zt.boneTexture,ve))}se.isBatchedMesh&&(Lt.setOptional(U,se,"batchingTexture"),Lt.setValue(U,"batchingTexture",se._matricesTexture,ve),Lt.setOptional(U,se,"batchingIdTexture"),Lt.setValue(U,"batchingIdTexture",se._indirectTexture,ve),Lt.setOptional(U,se,"batchingColorTexture"),se._colorsTexture!==null&&Lt.setValue(U,"batchingColorTexture",se._colorsTexture,ve));const Rn=le.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&_e.update(se,le,hn),(gi||it.receiveShadow!==se.receiveShadow)&&(it.receiveShadow=se.receiveShadow,Lt.setValue(U,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Y.environment!==null&&(on.envMapIntensity.value=Y.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=yT()),gi){if(Lt.setValue(U,"toneMappingExposure",z.toneMappingExposure),it.needsLights&&Ao(on,Li),He&&ae.fog===!0&&Ne.refreshFogUniforms(on,He),Ne.refreshMaterialUniforms(on,ae,ye,Ee,P.state.transmissionRenderTarget[N.id]),it.needsLights&&it.numLightProbeGrids>0){const zt=A;let Xt=0;for(const _n of P.state.lightProbeGridArray)_n.texture!==null&&(zt.textures[Xt]=_n.texture,zt.min[Xt]=_n.boundingBox.min,zt.max[Xt]=_n.boundingBox.max,zt.resolution[Xt]=_n.resolution,Xt++);for(const _n in zt)zt[_n].length=Xt;on.probesSH.value=zt.textures,on.probesMin.value=zt.min,on.probesMax.value=zt.max,on.probesResolution.value=zt.resolution}dc.upload(U,Zt(it),on,ve)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(dc.upload(U,Zt(it),on,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Lt.setValue(U,"center",se.center),Lt.setValue(U,"modelViewMatrix",se.modelViewMatrix),Lt.setValue(U,"normalMatrix",se.normalMatrix),Lt.setValue(U,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const zt=ae.uniformsGroups;for(let Xt=0,_n=zt.length;Xt<_n;Xt++){const mr=zt[Xt];ot.update(mr,hn),ot.bind(mr,hn)}}return hn}function Ao(N,Y){N.ambientLightColor.needsUpdate=Y,N.lightProbe.needsUpdate=Y,N.sunLights.needsUpdate=Y,N.sunLightShadows.needsUpdate=Y,N.directionalLights.needsUpdate=Y,N.directionalLightShadows.needsUpdate=Y,N.pointLights.needsUpdate=Y,N.pointLightShadows.needsUpdate=Y,N.spotLights.needsUpdate=Y,N.spotLightShadows.needsUpdate=Y,N.rectAreaLights.needsUpdate=Y,N.hemisphereLights.needsUpdate=Y}function Ms(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return ne},this.getActiveMipmapLevel=function(){return O},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(N,Y,le){const ae=at.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),at.get(N.texture).__webglTexture=Y,at.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:le,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Y){const le=at.get(N);le.__webglFramebuffer=Y,le.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(N,Y=0,le=0){$=N,ne=Y,O=le;let ae=null,se=!1,He=!1;if(N){const je=at.get(N);if(je.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(U.FRAMEBUFFER,je.__webglFramebuffer),F.copy(N.viewport),K.copy(N.scissor),Me=N.scissorTest,Ie.viewport(F),Ie.scissor(K),Ie.setScissorTest(Me),q=-1;return}else if(je.__webglFramebuffer===void 0)ve.setupRenderTarget(N);else if(je.__hasExternalTextures)ve.rebindTextures(N,at.get(N.texture).__webglTexture,at.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const gt=N.depthTexture;if(je.__boundDepthTexture!==gt){if(gt!==null&&at.has(gt)&&(N.width!==gt.image.width||N.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(N)}}const Ve=N.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(He=!0);const tt=at.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(tt[Y])?ae=tt[Y][le]:ae=tt[Y],se=!0):N.samples>0&&ve.useMultisampledRTT(N)===!1?ae=at.get(N).__webglMultisampledFramebuffer:Array.isArray(tt)?ae=tt[le]:ae=tt,F.copy(N.viewport),K.copy(N.scissor),Me=N.scissorTest}else F.copy(Qe).multiplyScalar(ye).floor(),K.copy(vt).multiplyScalar(ye).floor(),Me=be;if(le!==0&&(ae=ie),Ie.bindFramebuffer(U.FRAMEBUFFER,ae)&&Ie.drawBuffers(N,ae),Ie.viewport(F),Ie.scissor(K),Ie.setScissorTest(Me),se){const je=at.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Y,je.__webglTexture,le)}else if(He){const je=Y;for(let Ve=0;Ve<N.textures.length;Ve++){const tt=at.get(N.textures[Ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+Ve,tt.__webglTexture,le,je)}}else if(N!==null&&le!==0){const je=at.get(N.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,je.__webglTexture,le)}q=-1};function No(N){const Y=at.get(N);return(Y.__readFormat!==N.format||Y.__readType!==N.type)&&(Y.__readFormat=N.format,Y.__readType=N.type,Y.__formatReadable=Mt.textureFormatReadable(N.format),Y.__typeReadable=Mt.textureTypeReadable(N.type)),Y}this.readRenderTargetPixels=function(N,Y,le,ae,se,He,Je,je=0){if(!(N&&N.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ve=at.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Je!==void 0&&(Ve=Ve[Je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve){Ie.bindFramebuffer(U.FRAMEBUFFER,Ve);try{const tt=N.textures[je],gt=tt.format,Ct=tt.type;N.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+je);const nt=No(tt);if(nt.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(nt.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=N.width-ae&&le>=0&&le<=N.height-se&&U.readPixels(Y,le,ae,se,Ue.convert(gt),Ue.convert(Ct),He)}finally{const tt=$!==null?at.get($).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,tt)}}},this.readRenderTargetPixelsAsync=async function(N,Y,le,ae,se,He,Je,je=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ve=at.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Je!==void 0&&(Ve=Ve[Je],Array.isArray(Ve)&&(Ve=Ve[0])),Ve)if(Y>=0&&Y<=N.width-ae&&le>=0&&le<=N.height-se){Ie.bindFramebuffer(U.FRAMEBUFFER,Ve);const tt=N.textures[je],gt=tt.format,Ct=tt.type;N.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+je);const nt=No(tt);if(nt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(nt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.bufferData(U.PIXEL_PACK_BUFFER,He.byteLength,U.STREAM_READ),U.readPixels(Y,le,ae,se,Ue.convert(gt),Ue.convert(Ct),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Qt=$!==null?at.get($).__webglFramebuffer:null;Ie.bindFramebuffer(U.FRAMEBUFFER,Qt);const Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await AS(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Nt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,He),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Nt),U.deleteSync(Gt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Y=null,le=0){const ae=Math.pow(2,-le),se=Math.floor(N.image.width*ae),He=Math.floor(N.image.height*ae),Je=Y!==null?Y.x:0,je=Y!==null?Y.y:0;ve.setTexture2D(N,0),U.copyTexSubImage2D(U.TEXTURE_2D,le,0,0,Je,je,se,He),Ie.unbindTexture()},this.copyTextureToTexture=function(N,Y,le=null,ae=null,se=0,He=0){let Je,je,Ve,tt,gt,Ct,nt,Nt,Qt;const Gt=N.isCompressedTexture?N.mipmaps[He]:N.image;if(le!==null)Je=le.max.x-le.min.x,je=le.max.y-le.min.y,Ve=le.isBox3?le.max.z-le.min.z:1,tt=le.min.x,gt=le.min.y,Ct=le.isBox3?le.min.z:0;else{const Lt=Math.pow(2,-se);Je=Math.floor(Gt.width*Lt),je=Math.floor(Gt.height*Lt),N.isDataArrayTexture?Ve=Gt.depth:N.isData3DTexture?Ve=Math.floor(Gt.depth*Lt):Ve=1,tt=0,gt=0,Ct=0}ae!==null?(nt=ae.x,Nt=ae.y,Qt=ae.z):(nt=0,Nt=0,Qt=0);const Ht=Ue.convert(Y.format),sn=Ue.convert(Y.type);let it;Y.isData3DTexture?(ve.setTexture3D(Y,0),it=U.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ve.setTexture2DArray(Y,0),it=U.TEXTURE_2D_ARRAY):(ve.setTexture2D(Y,0),it=U.TEXTURE_2D),Ie.activeTexture(U.TEXTURE0),Ie.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Y.flipY),Ie.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),Ie.pixelStorei(U.UNPACK_ALIGNMENT,Y.unpackAlignment);const fn=Ie.getParameter(U.UNPACK_ROW_LENGTH),lt=Ie.getParameter(U.UNPACK_IMAGE_HEIGHT),Pi=Ie.getParameter(U.UNPACK_SKIP_PIXELS),hn=Ie.getParameter(U.UNPACK_SKIP_ROWS),pr=Ie.getParameter(U.UNPACK_SKIP_IMAGES);Ie.pixelStorei(U.UNPACK_ROW_LENGTH,Gt.width),Ie.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gt.height),Ie.pixelStorei(U.UNPACK_SKIP_PIXELS,tt),Ie.pixelStorei(U.UNPACK_SKIP_ROWS,gt),Ie.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);const gi=N.isDataArrayTexture||N.isData3DTexture,Li=Y.isDataArrayTexture||Y.isData3DTexture;if(N.isDepthTexture){const Lt=at.get(N),on=at.get(Y),Rn=at.get(Lt.__renderTarget),zt=at.get(on.__renderTarget);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Xt=0;Xt<Ve;Xt++)gi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.get(N).__webglTexture,se,Ct+Xt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,at.get(Y).__webglTexture,He,Qt+Xt)),U.blitFramebuffer(tt,gt,tt+Je,gt+je,nt,Nt,nt+Je,Nt+je,U.DEPTH_BUFFER_BIT,U.NEAREST);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||at.has(N)){const Lt=at.get(N),on=at.get(Y);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,j),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,X);for(let Rn=0;Rn<Ve;Rn++)gi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,se,Ct+Rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,se),Li?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,on.__webglTexture,He,Qt+Rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,on.__webglTexture,He),se!==0?U.blitFramebuffer(tt,gt,tt+Je,gt+je,nt,Nt,nt+Je,Nt+je,U.COLOR_BUFFER_BIT,U.NEAREST):Li?U.copyTexSubImage3D(it,He,nt,Nt,Qt+Rn,tt,gt,Je,je):U.copyTexSubImage2D(it,He,nt,Nt,tt,gt,Je,je);Ie.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Li?N.isDataTexture||N.isData3DTexture?U.texSubImage3D(it,He,nt,Nt,Qt,Je,je,Ve,Ht,sn,Gt.data):Y.isCompressedArrayTexture?U.compressedTexSubImage3D(it,He,nt,Nt,Qt,Je,je,Ve,Ht,Gt.data):U.texSubImage3D(it,He,nt,Nt,Qt,Je,je,Ve,Ht,sn,Gt):N.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,He,nt,Nt,Je,je,Ht,sn,Gt.data):N.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,He,nt,Nt,Gt.width,Gt.height,Ht,Gt.data):U.texSubImage2D(U.TEXTURE_2D,He,nt,Nt,Je,je,Ht,sn,Gt);Ie.pixelStorei(U.UNPACK_ROW_LENGTH,fn),Ie.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt),Ie.pixelStorei(U.UNPACK_SKIP_PIXELS,Pi),Ie.pixelStorei(U.UNPACK_SKIP_ROWS,hn),Ie.pixelStorei(U.UNPACK_SKIP_IMAGES,pr),He===0&&Y.generateMipmaps===!0&&Y.mipmapsAutoUpdate===!0&&U.generateMipmap(it),Ie.unbindTexture()},this.initRenderTarget=function(N){at.get(N).__webglFramebuffer===void 0&&ve.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ve.setTextureCube(N,0):N.isData3DTexture?ve.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ve.setTexture2DArray(N,0):ve.setTexture2D(N,0),Ie.unbindTexture()},this.resetState=function(){ne=0,O=0,$=null,Ie.reset(),Oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function ST({onEnter:s,onSkip:e}){const t=W.useRef(null),[r,l]=W.useState($n.currentLevel),[c,d]=W.useState(!1);return W.useEffect(()=>$n.subscribe(p=>{l(p)}),[]),W.useEffect(()=>{if(r===Ft.LOW||r===Ft.REDUCED_MOTION)return;const f=t.current;if(!f)return;let p;const m=f.clientWidth||window.innerWidth,_=f.clientHeight||window.innerHeight,S=new Rx;S.fog=new Ac(526348,.035);const v=new qn(60,m/_,.1,1e3);v.position.z=24;const y=new Qx({alpha:!0,antialias:r===Ft.HIGH});y.setSize(m,_),y.setPixelRatio(Math.min(window.devicePixelRatio,r===Ft.HIGH?2:1)),y.setClearColor(526348,1),f.appendChild(y.domElement);const w=r===Ft.HIGH?1200:400,b=new mi,x=new Float32Array(w*3),M=new Float32Array(w*3),L=new Tt(9133302),k=new Tt(3718648),A=new Tt(11032055);for(let K=0;K<w;K++){x[K*3]=(Math.random()-.5)*50,x[K*3+1]=(Math.random()-.5)*35,x[K*3+2]=(Math.random()-.5)*40;const Me=Math.random()<.5?L.clone().lerp(k,Math.random()):k.clone().lerp(A,Math.random());M[K*3]=Me.r,M[K*3+1]=Me.g,M[K*3+2]=Me.b}b.setAttribute("position",new hr(x,3)),b.setAttribute("color",new hr(M,3));const I=new Ix({size:r===Ft.HIGH?.18:.25,vertexColors:!0,transparent:!0,opacity:.85,blending:Xd}),P=new rM(b,I);S.add(P);const E=new sa,D=new If({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),J=new If({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),z=new Ec(7.5,.08,16,64),V=new Ec(9.2,.05,16,64),ee=new Ki(z,D),ie=new Ki(V,J);E.add(ee),E.add(ie),S.add(E);let j=0,X=0,ne=0,O=0;const $=K=>{j=(K.clientX/window.innerWidth-.5)*2,X=(K.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",$);const q=()=>{if(!f)return;const K=f.clientWidth||window.innerWidth,Me=f.clientHeight||window.innerHeight;v.aspect=K/Me,v.updateProjectionMatrix(),y.setSize(K,Me)};window.addEventListener("resize",q);let Q=new TM;const F=()=>{p=requestAnimationFrame(F),$n.onFrame(),Q.getDelta();const K=Q.getElapsedTime();ne+=(j*2.5-ne)*.05,O+=(-X*1.8-O)*.05,v.position.x=ne,v.position.y=O,v.lookAt(0,0,0),P.rotation.y=K*.03,P.rotation.x=Math.sin(K*.02)*.05,ee.rotation.x=K*.15,ee.rotation.y=K*.2,ie.rotation.y=-K*.12,ie.rotation.z=K*.08,y.render(S,v)};return F(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",$),window.removeEventListener("resize",q),y.domElement&&f.contains(y.domElement)&&f.removeChild(y.domElement),b.dispose(),I.dispose(),z.dispose(),V.dispose(),D.dispose(),J.dispose(),y.dispose()}},[r]),a.jsxs("div",{className:"spatial-landing-root",children:[a.jsx("div",{ref:t,className:"spatial-canvas-viewport"}),a.jsx("div",{className:"spatial-vignette-overlay"}),a.jsxs("div",{className:"spatial-content-wrap",children:[a.jsxs("div",{className:"spatial-badge-pill",children:[a.jsx(ix,{size:13,className:"pulse-icon text-cyan"}),a.jsx("span",{children:"PROJECT CINE-3D • SPATIAL CINEMA"})]}),a.jsxs("h1",{className:"spatial-headline",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"spatial-version-tag",children:"2.0"})]}),a.jsx("p",{className:"spatial-tagline",children:"Beyond the Screen."}),a.jsx("p",{className:"spatial-description",children:"A high-performance personal streaming theater powered by your host workstation. Spatial library discovery, instant seeking, and zero cloud lock-in."}),a.jsxs("div",{className:"spatial-actions-row",children:[a.jsxs("button",{className:`spatial-enter-btn ${c?"hovered":""}`,onClick:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.jsx("div",{className:"btn-glow-ring"}),a.jsx(dn,{size:18,fill:"currentColor"}),a.jsx("span",{children:"Enter CINE-3D Experience"}),a.jsx(n_,{size:18})]}),a.jsxs("button",{className:"spatial-skip-btn",onClick:e,title:"Go directly to traditional media library",children:[a.jsx(Qg,{size:15}),a.jsx("span",{children:"Skip to Library"})]})]}),a.jsx("div",{className:"spatial-footer-note",children:a.jsx("span",{children:"Direct Host Stream • HTTP 206 Range Seeking • Cloudflare Tunnel Active"})})]})]})}function MT({movies:s=[],onSelectMovie:e,onPlayMovie:t,onSwitchTo2D:r}){const l=W.useRef(null),[c,d]=W.useState($n.currentLevel),[f,p]=W.useState(0),[m,_]=W.useState(!1),[S,v]=W.useState(null);W.useEffect(()=>$n.subscribe(P=>d(P)),[]);const y=W.useMemo(()=>(s||[]).filter(P=>P&&P.id),[s]),w=y[f]||y[0]||null,b=W.useRef(0),x=W.useRef(0),M=W.useRef(0),L=W.useRef(!1),k=W.useRef(0),A=W.useRef(0);W.useEffect(()=>{const P=E=>{["ArrowLeft","KeyA"].includes(E.code)?(E.preventDefault(),I(-1)):["ArrowRight","KeyD"].includes(E.code)?(E.preventDefault(),I(1)):E.code==="Enter"&&w?e(w):E.code==="Space"&&w&&(E.preventDefault(),t(w))};return window.addEventListener("keydown",P),()=>window.removeEventListener("keydown",P)},[w,y.length]);const I=P=>{if(!y.length)return;const E=y.length,D=Math.PI*2/E;x.current+=P*D};return W.useEffect(()=>{if(c===Ft.LOW||c===Ft.REDUCED_MOTION)return;const P=l.current;if(!P||y.length===0)return;let E;const D=P.clientWidth||window.innerWidth,J=P.clientHeight||window.innerHeight,z=new Rx;z.fog=new Ac(526348,.028);const V=new qn(50,D/J,.1,100);V.position.set(0,.5,14);const ee=new Qx({antialias:c===Ft.HIGH,alpha:!0});ee.setSize(D,J),ee.setPixelRatio(Math.min(window.devicePixelRatio,c===Ft.HIGH?2:1)),ee.setClearColor(526348,1),P.appendChild(ee.domElement);const ie=new EM(16777215,.85);z.add(ie);const j=new _M(9133302,2.5);j.position.set(0,8,12),j.angle=Math.PI/4,j.penumbra=.8,z.add(j);const X=new SM(3718648,1.8,30);X.position.set(-6,-2,6),z.add(X);const ne=new CM(36,36,9133302,1974840);ne.position.y=-3.2,z.add(ne);const O=new sa;z.add(O);const $=y.length,q=Math.max(7.5,$*.95),Q=3,F=4.5,K=new Eo(Q,F),Me=new xM,G=[],ue=[],Se=[],Ee=Ye=>{const dt=document.createElement("canvas");dt.width=300,dt.height=450;const ge=dt.getContext("2d");return ge.fillStyle="#101626",ge.fillRect(0,0,300,450),ge.fillStyle="#8B5CF6",ge.fillRect(0,440,300,10),ge.fillStyle="#F8FAFC",ge.font="bold 20px sans-serif",ge.textAlign="center",ge.fillText((Ye||"Movie").substring(0,22),150,225),new sM(dt)};y.forEach((Ye,dt)=>{const ge=dt/$*Math.PI*2,Be=Math.sin(ge)*q,Ge=Math.cos(ge)*q;let bt;try{const U=gn(`/api/movies/${Ye.id}/poster`);bt=Me.load(U,void 0,void 0,()=>{const $e=Ee(Ye.clean_title);Pt.map=$e,Pt.needsUpdate=!0})}catch{bt=Ee(Ye.clean_title)}Se.push(bt);const Pt=new dM({map:bt,roughness:.35,metalness:.15,side:ji});ue.push(Pt);const Pe=new Ki(K,Pt);Pe.position.set(Be,0,Ge),Pe.lookAt(0,0,0),Pe.rotation.y+=Math.PI,Pe.userData={movie:Ye,index:dt},O.add(Pe),G.push(Pe)});const ye=new bM,Ae=new Ut(-999,-999),mt=Ye=>{const dt=P.getBoundingClientRect();if(Ae.x=(Ye.clientX-dt.left)/dt.width*2-1,Ae.y=-((Ye.clientY-dt.top)/dt.height)*2+1,L.current){const ge=Ye.clientX-A.current;A.current=Ye.clientX,x.current+=ge*.005,M.current=ge*.005}},Qe=Ye=>{L.current=!0,k.current=Ye.clientX,A.current=Ye.clientX,M.current=0,_(!0)},vt=Ye=>{const dt=Math.abs(Ye.clientX-k.current);if(L.current=!1,_(!1),dt<6){ye.setFromCamera(Ae,V);const ge=ye.intersectObjects(G);if(ge.length>0){const Be=ge[0].object,{movie:Ge,index:bt}=Be.userData;if(bt===f)e(Ge);else{const Pt=Math.PI*2/$,Pe=bt-f;x.current-=Pe*Pt}}}},be=Ye=>{Ye.preventDefault(),x.current+=Math.sign(Ye.deltaY)*.15};P.addEventListener("pointermove",mt),P.addEventListener("pointerdown",Qe),window.addEventListener("pointerup",vt),P.addEventListener("wheel",be,{passive:!1});const Xe=()=>{if(!P)return;const Ye=P.clientWidth||window.innerWidth,dt=P.clientHeight||window.innerHeight;V.aspect=Ye/dt,V.updateProjectionMatrix(),ee.setSize(Ye,dt)};window.addEventListener("resize",Xe);const _t=()=>{var bt;E=requestAnimationFrame(_t),$n.onFrame(),L.current||(x.current+=M.current,M.current*=.92),b.current+=(x.current-b.current)*.08,O.rotation.y=b.current;const Ye=(-O.rotation.y%(Math.PI*2)+Math.PI*2)%(Math.PI*2),dt=Math.PI*2/$;let ge=Math.round(Ye/dt)%$;ge<0&&(ge+=$),ge!==f&&p(ge),ye.setFromCamera(Ae,V);const Be=ye.intersectObjects(G),Ge=Be.length>0?Be[0].object:null;G.forEach((Pt,Pe)=>{const U=Pe===ge,$e=Ge===Pt,ft=U?1.25:$e?1.08:.95;Pt.scale.lerp(new de(ft,ft,ft),.1),Pt.material&&(Pt.material.emissive=new Tt(U?2233152:$e?990771:0))}),(bt=Ge==null?void 0:Ge.userData)!=null&&bt.movie?v(Ge.userData.movie):v(null),ee.render(z,V)};return _t(),()=>{cancelAnimationFrame(E),P.removeEventListener("pointermove",mt),P.removeEventListener("pointerdown",Qe),window.removeEventListener("pointerup",vt),P.removeEventListener("wheel",be),window.removeEventListener("resize",Xe),ee.domElement&&P.contains(ee.domElement)&&P.removeChild(ee.domElement),K.dispose(),ne.dispose(),ue.forEach(Ye=>Ye.dispose()),Se.forEach(Ye=>Ye.dispose()),ee.dispose()}},[y,c]),c===Ft.LOW||c===Ft.REDUCED_MOTION?a.jsxs("div",{className:"cinema-lobby-css3d-fallback",children:[a.jsxs("div",{className:"lobby-header-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(Bf,{size:14,className:"text-cyan"}),a.jsx("span",{children:"2D ADAPTIVE CINEMA LOBBY"})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,children:[a.jsx(zm,{size:14}),a.jsx("span",{children:"Switch to Traditional Grid"})]})]}),a.jsxs("div",{className:"css3d-carousel-container",children:[a.jsx("button",{className:"css3d-nav-arrow left",onClick:()=>I(-1),children:a.jsx(fc,{size:22})}),a.jsx("div",{className:"css3d-active-card-portal",children:w&&a.jsxs("div",{className:"css3d-featured-card",onClick:()=>e(w),children:[a.jsx("img",{src:gn(`/api/movies/${w.id}/poster`),alt:w.clean_title,className:"css3d-card-img"}),a.jsxs("div",{className:"css3d-card-overlay",children:[a.jsx("span",{className:"card-pill-res",children:w.resolution||"1080P"}),a.jsx("h4",{children:w.clean_title}),a.jsx("div",{className:"card-actions-quick",children:a.jsxs("button",{className:"btn-primary btn-sm",onClick:P=>{P.stopPropagation(),t(w)},children:[a.jsx(dn,{size:14,fill:"currentColor"})," Play Now"]})})]})]})}),a.jsx("button",{className:"css3d-nav-arrow right",onClick:()=>I(1),children:a.jsx(co,{size:22})})]}),a.jsx("div",{className:"css3d-reel-row",children:y.map((P,E)=>a.jsxs("div",{className:`css3d-thumb-pill ${E===f?"active":""}`,onClick:()=>p(E),children:[a.jsx("img",{src:gn(`/api/movies/${P.id}/poster`),alt:P.clean_title}),a.jsx("span",{children:P.clean_title})]},P.id))})]}):a.jsxs("div",{className:"cinema-lobby-3d-root",children:[a.jsx("div",{ref:l,className:"lobby-canvas-viewport"}),a.jsxs("div",{className:"lobby-top-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(pi,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D SPATIAL CAROUSEL"}),a.jsxs("span",{className:"badge-movie-count",children:[y.length," TITLES"]})]}),a.jsx("div",{className:"lobby-top-controls",children:a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,title:"Switch to conventional 2D Library grid",children:[a.jsx(zm,{size:14}),a.jsx("span",{children:"2D Library Grid"})]})})]}),w&&a.jsx("div",{className:"lobby-floating-hud",children:a.jsxs("div",{className:"hud-content-panel",children:[a.jsxs("div",{className:"hud-metadata-tags",children:[a.jsx("span",{className:"hud-badge-res",children:w.resolution||"1080P"}),w.year&&a.jsx("span",{className:"hud-badge-year",children:w.year}),a.jsx("span",{className:"hud-badge-genre",children:w.genre||"Cinema"}),w.codec&&a.jsx("span",{className:"hud-badge-codec",children:w.codec})]}),a.jsx("h2",{className:"hud-movie-title",children:w.clean_title}),a.jsxs("p",{className:"hud-instructions",children:["Drag horizontally or use ",a.jsx("strong",{children:"← / → Arrow Keys"})," to rotate • ",a.jsx("strong",{children:"Enter"})," for details • ",a.jsx("strong",{children:"Space"})," to stream"]}),a.jsxs("div",{className:"hud-actions-row",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(w),children:[a.jsx(dn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"Play Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>e(w),children:[a.jsx(fo,{size:16}),a.jsx("span",{children:"Movie Details"})]}),a.jsxs("div",{className:"hud-nav-buttons",children:[a.jsx("button",{className:"hud-arrow-btn",onClick:()=>I(-1),title:"Previous Film (Left Arrow)",children:a.jsx(fc,{size:16})}),a.jsx("button",{className:"hud-arrow-btn",onClick:()=>I(1),title:"Next Film (Right Arrow)",children:a.jsx(co,{size:16})})]})]})]})})]})}const ET=["All","Action & Adventure","Anime & Animation","Horror & Suspense","Sci-Fi & Cyber","Thriller & Mystery","Cinema & Drama"];function wT({isOpen:s,onClose:e,onSelectMovie:t,onPlayMovie:r,authFetch:l}){const[c,d]=W.useState(""),[f,p]=W.useState("All"),[m,_]=W.useState([]),[S,v]=W.useState(!1),[y,w]=W.useState([]),[b,x]=W.useState(0),M=W.useRef(null);W.useEffect(()=>{if(typeof window<"u")try{const k=JSON.parse(localStorage.getItem("streamlink_search_history")||"[]");w(Array.isArray(k)?k.slice(0,6):[])}catch{}},[]);const L=k=>{if(!k||!k.trim())return;const A=k.trim(),I=[A,...y.filter(P=>P.toLowerCase()!==A.toLowerCase())].slice(0,6);w(I);try{localStorage.setItem("streamlink_search_history",JSON.stringify(I))}catch{}};return W.useEffect(()=>{s?setTimeout(()=>{var k;return(k=M.current)==null?void 0:k.focus()},80):(d(""),x(0))},[s]),W.useEffect(()=>{if(!s)return;let k=!0;v(!0);const A=new URLSearchParams;return c.trim()&&A.set("q",c.trim()),f!=="All"&&A.set("genre",f),l(`/api/movies?${A.toString()}`).then(I=>I.json()).then(I=>{k&&(_(I.movies||[]),x(0))}).catch(()=>{}).finally(()=>{k&&v(!1)}),()=>{k=!1}},[s,c,f]),W.useEffect(()=>{if(!s)return;const k=A=>{A.key==="Escape"?e():A.key==="ArrowDown"?(A.preventDefault(),x(I=>Math.min(I+1,m.length-1))):A.key==="ArrowUp"?(A.preventDefault(),x(I=>Math.max(I-1,0))):A.key==="Enter"&&m[b]&&(L(c||m[b].clean_title),t(m[b]),e())};return window.addEventListener("keydown",k),()=>window.removeEventListener("keydown",k)},[s,m,b,c]),s?a.jsx("div",{className:"dimensional-search-overlay",onClick:e,children:a.jsxs("div",{className:"dimensional-search-window",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"search-bar-wrap",children:[a.jsx(ps,{size:22,className:"search-input-icon text-cyan"}),a.jsx("input",{ref:M,type:"text",className:"spatial-search-input",placeholder:"Search by title, genre, year, resolution (e.g. 4K, Annabelle)...",value:c,onChange:k=>d(k.target.value)}),c&&a.jsx("button",{className:"search-clear-btn",onClick:()=>d(""),children:a.jsx(Wi,{size:18})}),a.jsx("div",{className:"search-shortcut-pill",children:a.jsx("span",{children:"ESC to close"})})]}),a.jsx("div",{className:"search-genres-row",children:ET.map(k=>a.jsx("button",{className:`search-genre-chip ${f===k?"active":""}`,onClick:()=>p(k),children:k},k))}),y.length>0&&!c&&a.jsxs("div",{className:"search-history-row",children:[a.jsx(Gr,{size:13,className:"text-muted"}),a.jsx("span",{className:"text-dim text-xs",children:"Recent:"}),y.map((k,A)=>a.jsx("button",{className:"search-history-chip",onClick:()=>d(k),children:k},A))]}),a.jsx("div",{className:"search-results-viewport",children:S?a.jsxs("div",{className:"search-loading-state",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning personal cinema database..."})]}):m.length>0?a.jsx("div",{className:"search-cards-grid",children:m.map((k,A)=>a.jsxs("div",{className:`search-card-3d ${A===b?"focused":""}`,onClick:()=>{L(c||k.clean_title),t(k),e()},onMouseEnter:()=>x(A),children:[a.jsxs("div",{className:"search-card-poster",children:[a.jsx("img",{src:gn(`/api/movies/${k.id}/poster`),alt:k.clean_title,loading:"lazy"}),a.jsx("div",{className:"search-card-glow"})]}),a.jsxs("div",{className:"search-card-info",children:[a.jsxs("div",{className:"search-card-tags",children:[a.jsx("span",{className:"badge-pill res",children:k.resolution||"1080P"}),k.year&&a.jsx("span",{className:"badge-pill year",children:k.year}),a.jsx("span",{className:"badge-pill genre",children:k.genre||"Movie"})]}),a.jsx("h4",{className:"search-card-title",children:k.clean_title}),a.jsx("p",{className:"search-card-filename",children:k.file_name}),a.jsxs("div",{className:"search-card-play-pill",children:[a.jsx(dn,{size:12,fill:"currentColor"}),a.jsx("span",{children:"Stream"})]})]})]},k.id))}):a.jsxs("div",{className:"search-empty-state",children:[a.jsx(Ci,{size:40,className:"text-dim",style:{marginBottom:"12px"}}),a.jsxs("h4",{children:['No matches found for "',c,'"']}),a.jsx("p",{children:'Check spelling or try searching for broad terms like "1080p", "4k", or clearing the genre filter.'})]})}),a.jsxs("div",{className:"search-footer-hint",children:[a.jsxs("span",{children:[a.jsx(h_,{size:12})," Press ",a.jsx("strong",{children:"Enter"})," to open details"]}),a.jsxs("span",{children:["Use ",a.jsx("strong",{children:"↑ / ↓ Arrow Keys"})," to navigate"]})]})]})}):null}function bT({activeColor:s="#8B5CF6",enabled:e=!0}){return e?a.jsxs("div",{className:"ambient-cinema-backdrop","aria-hidden":"true",children:[a.jsx("div",{className:"ambient-glow-orb orb-primary",style:{background:`radial-gradient(circle, ${s}33 0%, rgba(8, 8, 12, 0) 70%)`}}),a.jsx("div",{className:"ambient-glow-orb orb-secondary",style:{background:"radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(8, 8, 12, 0) 70%)"}})]}):null}function TT(){let e=new URLSearchParams(window.location.search).get("share");if(!e){const O=window.location.pathname.match(/\/share\/([a-zA-Z0-9_-]+)/);O&&(e=O[1])}if(e)return a.jsx(Gy,{token:e});const{user:t,token:r,authFetch:l,loading:c}=jf(),[d,f]=W.useState("home"),[p,m]=W.useState(null),[_,S]=W.useState(null),[v,y]=W.useState("D:\\Movies"),[w,b]=W.useState([]),[x,M]=W.useState(!1),[L,k]=W.useState(!1),[A,I]=W.useState(!1),[P,E]=W.useState(null),[D,J]=W.useState(()=>localStorage.getItem("streamlink_ambient_lighting")!=="false"),[z,V]=W.useState($n.currentLevel),[ee,ie]=W.useState(()=>localStorage.getItem("streamlink_seen_intro")!=="true");W.useEffect(()=>$n.subscribe(O=>V(O)),[]),W.useEffect(()=>{const O=$=>{var q;$.key==="/"&&!["INPUT","TEXTAREA"].includes((q=document.activeElement)==null?void 0:q.tagName)&&($.preventDefault(),M(!0))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const j=()=>{t&&l&&l("/api/movies?sort=recent").then(O=>O.json()).then(O=>{O.movies&&b(O.movies)}).catch(()=>{})};W.useEffect(()=>{j()},[t]),W.useEffect(()=>{t&&l&&l("/api/user/profiles").then(O=>O.json()).then(O=>{if(O.profiles&&O.profiles.length>0){const $=localStorage.getItem("streamlink_active_profile_id"),q=O.profiles.find(Q=>String(Q.id)===$)||O.profiles[0];E(q)}}).catch(()=>{})},[t]),W.useEffect(()=>{(t==null?void 0:t.role)==="admin"&&l&&l("/api/admin/settings").then(O=>O.json()).then(O=>{var $;($=O.settings)!=null&&$.library_folder&&y(O.settings.library_folder)}).catch(()=>{})},[t]);const X=()=>{J(O=>{const $=!O;return localStorage.setItem("streamlink_ambient_lighting",String($)),$})},ne=O=>{E(O),localStorage.setItem("streamlink_active_profile_id",String(O.id))};return c?a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Loading StreamLink 2.0..."})]}):t?ee?a.jsx(ST,{onEnter:()=>{ie(!1),localStorage.setItem("streamlink_seen_intro","true"),f("cine3d")},onSkip:()=>{ie(!1),localStorage.setItem("streamlink_seen_intro","true")}}):_?a.jsx(rx,{movie:_,onBack:()=>S(null),token:r,authFetch:l}):a.jsxs("div",{className:"app-shell-sidebar-layout",children:[a.jsx(bT,{enabled:D}),a.jsx(Dy,{currentView:d,setCurrentView:f,onOpenSearch:()=>M(!0),onOpenProfiles:()=>k(!0),onOpenQuality:()=>I(!0),currentProfile:P,qualityLevel:z}),a.jsxs("main",{className:"main-content-scrollable",children:[d==="home"&&a.jsx(ky,{onSelectMovie:O=>m(O),onPlayMovie:O=>S(O),authFetch:l,onNavigateLibrary:()=>f("library"),onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="cine3d"&&a.jsx(MT,{movies:w,onSelectMovie:O=>m(O),onPlayMovie:O=>S(O),onSwitchTo2D:()=>f("library")}),d==="library"&&a.jsx(Uy,{onSelectMovie:O=>m(O),onPlayMovie:O=>S(O),authFetch:l,onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="folder-sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Fy,{authFetch:l}),d==="folder"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Oy,{authFetch:l,onScanSuccess:O=>{y(O),j()},onViewLibrary:()=>f("library")}),d==="sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(zy,{authFetch:l}),d==="favorites"&&a.jsx(jy,{onSelectMovie:O=>m(O),onPlayMovie:O=>S(O),authFetch:l}),d==="dashboard"&&(t==null?void 0:t.role)==="admin"&&a.jsx(By,{authFetch:l,onOpenFolderPicker:()=>f("folder"),onOpenShareModal:()=>f("sharing")})]}),p&&a.jsx(sx,{movie:p,onClose:()=>m(null),onPlay:O=>{m(null),S(O)},onToggleFavorite:async O=>{try{const q=await(await l(`/api/user/favorites/${O}`,{method:"POST"})).json();m(Q=>Q?{...Q,is_favorite:q.favorited?1:0}:null),j()}catch{}},onRemoveMovie:async O=>{if(window.confirm(`Remove "${O.clean_title}" from your library?

The original video file will remain untouched on your computer.`))try{await l(`/api/movies/${O.id}/remove`,{method:"POST"}),m(null),j()}catch{}},onDeleteFile:async O=>{if(window.confirm(`PERMANENT DELETION WARNING:
Are you sure you want to permanently delete "${O.file_name}" from your hard drive?

This cannot be undone.`))try{await l(`/api/movies/${O.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:O.clean_title})}),m(null),j()}catch{}},authFetch:l}),a.jsx(wT,{isOpen:x,onClose:()=>M(!1),onSelectMovie:O=>m(O),onPlayMovie:O=>S(O),authFetch:l}),a.jsx(Vy,{isOpen:L,onClose:()=>k(!1),authFetch:l,currentProfile:P,onProfileChange:ne}),a.jsx(Xy,{isOpen:A,onClose:()=>I(!1),ambientEnabled:D,onToggleAmbient:X})]}):a.jsx(Hy,{})}B0.createRoot(document.getElementById("root")).render(a.jsx(I0.StrictMode,{children:a.jsx(H0,{children:a.jsx(TT,{})})}));
