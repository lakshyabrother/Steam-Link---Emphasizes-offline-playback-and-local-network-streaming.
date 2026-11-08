(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function qg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ld={exports:{}},Za={},cd={exports:{}},Rt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cm;function I0(){if(Cm)return Rt;Cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,w={};function x(F,K,Me){this.props=F,this.context=K,this.refs=w,this.updater=Me||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function P(F,K,Me){this.props=F,this.context=K,this.refs=w,this.updater=Me||S}var D=P.prototype=new y;D.constructor=P,b(D,x.prototype),D.isPureReactComponent=!0;var A=Array.isArray,I=Object.prototype.hasOwnProperty,U={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function L(F,K,Me){var X,le={},ye=null,Ee=null;if(K!=null)for(X in K.ref!==void 0&&(Ee=K.ref),K.key!==void 0&&(ye=""+K.key),K)I.call(K,X)&&!E.hasOwnProperty(X)&&(le[X]=K[X]);var Se=arguments.length-2;if(Se===1)le.children=Me;else if(1<Se){for(var Ae=Array(Se),ht=0;ht<Se;ht++)Ae[ht]=arguments[ht+2];le.children=Ae}if(F&&F.defaultProps)for(X in Se=F.defaultProps,Se)le[X]===void 0&&(le[X]=Se[X]);return{$$typeof:s,type:F,key:ye,ref:Ee,props:le,_owner:U.current}}function H(F,K){return{$$typeof:s,type:F.type,key:K,ref:F.ref,props:F.props,_owner:F._owner}}function z(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function W(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Me){return K[Me]})}var ie=/\/+/g;function J(F,K){return typeof F=="object"&&F!==null&&F.key!=null?W(""+F.key):K.toString(36)}function j(F,K,Me,X,le){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var Ee=!1;if(F===null)Ee=!0;else switch(ye){case"string":case"number":Ee=!0;break;case"object":switch(F.$$typeof){case s:case e:Ee=!0}}if(Ee)return Ee=F,le=le(Ee),F=X===""?"."+J(Ee,0):X,A(le)?(Me="",F!=null&&(Me=F.replace(ie,"$&/")+"/"),j(le,K,Me,"",function(ht){return ht})):le!=null&&(z(le)&&(le=H(le,Me+(!le.key||Ee&&Ee.key===le.key?"":(""+le.key).replace(ie,"$&/")+"/")+F)),K.push(le)),1;if(Ee=0,X=X===""?".":X+":",A(F))for(var Se=0;Se<F.length;Se++){ye=F[Se];var Ae=X+J(ye,Se);Ee+=j(ye,K,Me,Ae,le)}else if(Ae=_(F),typeof Ae=="function")for(F=Ae.call(F),Se=0;!(ye=F.next()).done;)ye=ye.value,Ae=X+J(ye,Se++),Ee+=j(ye,K,Me,Ae,le);else if(ye==="object")throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return Ee}function $(F,K,Me){if(F==null)return F;var X=[],le=0;return j(F,X,"","",function(ye){return K.call(Me,ye,le++)}),X}function te(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(Me){(F._status===0||F._status===-1)&&(F._status=1,F._result=Me)},function(Me){(F._status===0||F._status===-1)&&(F._status=2,F._result=Me)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var q={current:null},ee={transition:null},O={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:ee,ReactCurrentOwner:U};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Rt.Children={map:$,forEach:function(F,K,Me){$(F,function(){K.apply(this,arguments)},Me)},count:function(F){var K=0;return $(F,function(){K++}),K},toArray:function(F){return $(F,function(K){return K})||[]},only:function(F){if(!z(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Rt.Component=x,Rt.Fragment=t,Rt.Profiler=l,Rt.PureComponent=P,Rt.StrictMode=r,Rt.Suspense=p,Rt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Rt.act=Y,Rt.cloneElement=function(F,K,Me){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var X=b({},F.props),le=F.key,ye=F.ref,Ee=F._owner;if(K!=null){if(K.ref!==void 0&&(ye=K.ref,Ee=U.current),K.key!==void 0&&(le=""+K.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(Ae in K)I.call(K,Ae)&&!E.hasOwnProperty(Ae)&&(X[Ae]=K[Ae]===void 0&&Se!==void 0?Se[Ae]:K[Ae])}var Ae=arguments.length-2;if(Ae===1)X.children=Me;else if(1<Ae){Se=Array(Ae);for(var ht=0;ht<Ae;ht++)Se[ht]=arguments[ht+2];X.children=Se}return{$$typeof:s,type:F.type,key:le,ref:ye,props:X,_owner:Ee}},Rt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},Rt.createElement=L,Rt.createFactory=function(F){var K=L.bind(null,F);return K.type=F,K},Rt.createRef=function(){return{current:null}},Rt.forwardRef=function(F){return{$$typeof:f,render:F}},Rt.isValidElement=z,Rt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:te}},Rt.memo=function(F,K){return{$$typeof:m,type:F,compare:K===void 0?null:K}},Rt.startTransition=function(F){var K=ee.transition;ee.transition={};try{F()}finally{ee.transition=K}},Rt.unstable_act=Y,Rt.useCallback=function(F,K){return q.current.useCallback(F,K)},Rt.useContext=function(F){return q.current.useContext(F)},Rt.useDebugValue=function(){},Rt.useDeferredValue=function(F){return q.current.useDeferredValue(F)},Rt.useEffect=function(F,K){return q.current.useEffect(F,K)},Rt.useId=function(){return q.current.useId()},Rt.useImperativeHandle=function(F,K,Me){return q.current.useImperativeHandle(F,K,Me)},Rt.useInsertionEffect=function(F,K){return q.current.useInsertionEffect(F,K)},Rt.useLayoutEffect=function(F,K){return q.current.useLayoutEffect(F,K)},Rt.useMemo=function(F,K){return q.current.useMemo(F,K)},Rt.useReducer=function(F,K,Me){return q.current.useReducer(F,K,Me)},Rt.useRef=function(F){return q.current.useRef(F)},Rt.useState=function(F){return q.current.useState(F)},Rt.useSyncExternalStore=function(F,K,Me){return q.current.useSyncExternalStore(F,K,Me)},Rt.useTransition=function(){return q.current.useTransition()},Rt.version="18.3.1",Rt}var Am;function jf(){return Am||(Am=1,cd.exports=I0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nm;function k0(){if(Nm)return Za;Nm=1;var s=jf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(f,p,m){var v,M={},_=null,S=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(M[v]=p[v]);if(f&&f.defaultProps)for(v in p=f.defaultProps,p)M[v]===void 0&&(M[v]=p[v]);return{$$typeof:e,type:f,key:_,ref:S,props:M,_owner:l.current}}return Za.Fragment=t,Za.jsx=d,Za.jsxs=d,Za}var Rm;function U0(){return Rm||(Rm=1,ld.exports=k0()),ld.exports}var a=U0(),G=jf();const F0=qg(G);var Rl={},ud={exports:{}},Xn={},dd={exports:{}},fd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function O0(){return Pm||(Pm=1,(function(s){function e(ee,O){var Y=ee.length;ee.push(O);e:for(;0<Y;){var F=Y-1>>>1,K=ee[F];if(0<l(K,O))ee[F]=O,ee[Y]=K,Y=F;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var O=ee[0],Y=ee.pop();if(Y!==O){ee[0]=Y;e:for(var F=0,K=ee.length,Me=K>>>1;F<Me;){var X=2*(F+1)-1,le=ee[X],ye=X+1,Ee=ee[ye];if(0>l(le,Y))ye<K&&0>l(Ee,le)?(ee[F]=Ee,ee[ye]=Y,F=ye):(ee[F]=le,ee[X]=Y,F=X);else if(ye<K&&0>l(Ee,Y))ee[F]=Ee,ee[ye]=Y,F=ye;else break e}}return O}function l(ee,O){var Y=ee.sortIndex-O.sortIndex;return Y!==0?Y:ee.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,f=d.now();s.unstable_now=function(){return d.now()-f}}var p=[],m=[],v=1,M=null,_=3,S=!1,b=!1,w=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(ee){for(var O=t(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=ee)r(m),O.sortIndex=O.expirationTime,e(p,O);else break;O=t(m)}}function A(ee){if(w=!1,D(ee),!b)if(t(p)!==null)b=!0,te(I);else{var O=t(m);O!==null&&q(A,O.startTime-ee)}}function I(ee,O){b=!1,w&&(w=!1,y(L),L=-1),S=!0;var Y=_;try{for(D(O),M=t(p);M!==null&&(!(M.expirationTime>O)||ee&&!W());){var F=M.callback;if(typeof F=="function"){M.callback=null,_=M.priorityLevel;var K=F(M.expirationTime<=O);O=s.unstable_now(),typeof K=="function"?M.callback=K:M===t(p)&&r(p),D(O)}else r(p);M=t(p)}if(M!==null)var Me=!0;else{var X=t(m);X!==null&&q(A,X.startTime-O),Me=!1}return Me}finally{M=null,_=Y,S=!1}}var U=!1,E=null,L=-1,H=5,z=-1;function W(){return!(s.unstable_now()-z<H)}function ie(){if(E!==null){var ee=s.unstable_now();z=ee;var O=!0;try{O=E(!0,ee)}finally{O?J():(U=!1,E=null)}}else U=!1}var J;if(typeof P=="function")J=function(){P(ie)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=ie,J=function(){$.postMessage(null)}}else J=function(){x(ie,0)};function te(ee){E=ee,U||(U=!0,J())}function q(ee,O){L=x(function(){ee(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){b||S||(b=!0,te(I))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(ee){switch(_){case 1:case 2:case 3:var O=3;break;default:O=_}var Y=_;_=O;try{return ee()}finally{_=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,O){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var Y=_;_=ee;try{return O()}finally{_=Y}},s.unstable_scheduleCallback=function(ee,O,Y){var F=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,ee){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Y+K,ee={id:v++,callback:O,priorityLevel:ee,startTime:Y,expirationTime:K,sortIndex:-1},Y>F?(ee.sortIndex=Y,e(m,ee),t(p)===null&&ee===t(m)&&(w?(y(L),L=-1):w=!0,q(A,Y-F))):(ee.sortIndex=K,e(p,ee),b||S||(b=!0,te(I))),ee},s.unstable_shouldYield=W,s.unstable_wrapCallback=function(ee){var O=_;return function(){var Y=_;_=O;try{return ee.apply(this,arguments)}finally{_=Y}}}})(fd)),fd}var Lm;function z0(){return Lm||(Lm=1,dd.exports=O0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function j0(){if(Dm)return Xn;Dm=1;var s=jf(),e=z0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},M={};function _(n){return p.call(M,n)?!0:p.call(v,n)?!1:m.test(n)?M[n]=!0:(v[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function b(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function w(n,i,o,u,h,g,C){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=h,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=C}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new w(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new w(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new w(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new w(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new w(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new w(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new w(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new w(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new w(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function P(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,P);x[i]=new w(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,P);x[i]=new w(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,P);x[i]=new w(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new w("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new w(n,1,!1,n.toLowerCase(),null,!0,!0)});function D(n,i,o,u){var h=x.hasOwnProperty(i)?x[i]:null;(h!==null?h.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(b(i,o,h,u)&&(o=null),u||h===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):h.mustUseProperty?n[h.propertyName]=o===null?h.type===3?!1:"":o:(i=h.attributeName,u=h.attributeNamespace,o===null?n.removeAttribute(i):(h=h.type,o=h===3||h===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var A=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,I=Symbol.for("react.element"),U=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),L=Symbol.for("react.strict_mode"),H=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),W=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),ee=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,F;function K(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Me=!1;function X(n,i){if(!n||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(he){var u=he}Reflect.construct(n,[],i)}else{try{i.call()}catch(he){u=he}n.call(i.prototype)}else{try{throw Error()}catch(he){u=he}n()}}catch(he){if(he&&u&&typeof he.stack=="string"){for(var h=he.stack.split(`
`),g=u.stack.split(`
`),C=h.length-1,B=g.length-1;1<=C&&0<=B&&h[C]!==g[B];)B--;for(;1<=C&&0<=B;C--,B--)if(h[C]!==g[B]){if(C!==1||B!==1)do if(C--,B--,0>B||h[C]!==g[B]){var Q=`
`+h[C].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=C&&0<=B);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?K(n):""}function le(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case U:return"Portal";case H:return"Profiler";case L:return"StrictMode";case J:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case W:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function Ee(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===L?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ae(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function ht(n){var i=Ae(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return h.call(this)},set:function(C){u=""+C,g.call(this,C)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(C){u=""+C},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ye(n){n._valueTracker||(n._valueTracker=ht(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Ae(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function ut(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function lt(n,i){var o=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ze(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&D(n,"checked",i,!1)}function wt(n,i){dt(n,i);var o=Se(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?be(n,i.type,o):i.hasOwnProperty("defaultValue")&&be(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function fe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function be(n,i,o){(i!=="number"||ut(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ie=Array.isArray;function At(n,i,o,u){if(n=n.options,i){i={};for(var h=0;h<o.length;h++)i["$"+o[h]]=!0;for(o=0;o<n.length;o++)h=i.hasOwnProperty("$"+n[o].value),n[o].selected!==h&&(n[o].selected=h),h&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,h=0;h<n.length;h++){if(n[h].value===o){n[h].selected=!0,u&&(n[h].defaultSelected=!0);return}i!==null||n[h].disabled||(i=n[h])}i!==null&&(i.selected=!0)}}function Ut(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Pe(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ie(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Se(o)}}function k(n,i){var o=Se(i.value),u=Se(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Ve(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ft(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gt(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ft(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Le,Wt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,h){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,h)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Le=Le||document.createElement("div"),Le.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Le.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function rt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},R=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(n){R.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ve[i]=ve[n]})});function T(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ve.hasOwnProperty(n)&&ve[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,h=T(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,h):n[o]=h}}var we=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(n,i){if(i){if(we[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ne(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,ke=null,V=null;function _e(n){if(n=Ua(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wo(i),xe(n.stateNode,n.type,i))}}function me(n){ke?V?V.push(n):V=[n]:ke=n}function Be(){if(ke){var n=ke,i=V;if(V=ke=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Fe(n,i){return n(i)}function je(){}var st=!1;function Et(n,i,o){if(st)return n(i,o);st=!0;try{return Fe(n,i,o)}finally{st=!1,(ke!==null||V!==null)&&(je(),Be())}}function Re(n,i){var o=n.stateNode;if(o===null)return null;var u=Wo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ct=!1;if(f)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){ct=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{ct=!1}function Xe(n,i,o,u,h,g,C,B,Q){var he=Array.prototype.slice.call(arguments,3);try{i.apply(o,he)}catch(Ce){this.onError(Ce)}}var Lt=!1,en=null,Zn=!1,ys=null,ga={onError:function(n){Lt=!0,en=n}};function Lc(n,i,o,u,h,g,C,B,Q){Lt=!1,en=null,Xe.apply(ga,arguments)}function To(n,i,o,u,h,g,C,B,Q){if(Lc.apply(this,arguments),Lt){if(Lt){var he=en;Lt=!1,en=null}else throw Error(t(198));Zn||(Zn=!0,ys=he)}}function Ri(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Pi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ss(n){if(Ri(n)!==n)throw Error(t(188))}function Co(n){var i=n.alternate;if(!i){if(i=Ri(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var h=o.return;if(h===null)break;var g=h.alternate;if(g===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===g.child){for(g=h.child;g;){if(g===o)return Ss(h),n;if(g===u)return Ss(h),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=h,u=g;else{for(var C=!1,B=h.child;B;){if(B===o){C=!0,o=h,u=g;break}if(B===u){C=!0,u=h,o=g;break}B=B.sibling}if(!C){for(B=g.child;B;){if(B===o){C=!0,o=g,u=h;break}if(B===u){C=!0,u=g,o=h;break}B=B.sibling}if(!C)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function xa(n){return n=Co(n),n!==null?qr(n):null}function qr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qr(n);if(i!==null)return i;n=n.sibling}return null}var va=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,Dc=e.unstable_requestPaint,Zt=e.unstable_now,Ao=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,No=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,Ro=e.unstable_LowPriority,N=e.unstable_IdlePriority,Z=null,ce=null;function ae(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}}var se=Math.clz32?Math.clz32:He,Ge=Math.log,Ze=Math.LN2;function He(n){return n>>>=0,n===0?32:31-(Ge(n)/Ze|0)|0}var We=64,Je=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Tt(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,h=n.suspendedLanes,g=n.pingedLanes,C=o&268435455;if(C!==0){var B=C&~h;B!==0?u=xt(B):(g&=C,g!==0&&(u=xt(g)))}else C=o&~h,C!==0?u=xt(C):g!==0&&(u=xt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&h)===0&&(h=u&-u,g=i&-i,h>=g||h===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-se(i),h=1<<o,u|=n[o],i&=~h;return u}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Nt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,h=n.expirationTimes,g=n.pendingLanes;0<g;){var C=31-se(g),B=1<<C,Q=h[C];Q===-1?((B&o)===0||(B&u)!==0)&&(h[C]=et(B,i)):Q<=i&&(n.expiredLanes|=B),g&=~B}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Ht(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-se(i),n[i]=o}function tt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var h=31-se(o),g=1<<h;i[h]=0,u[h]=-1,n[h]=-1,o&=~g}}function hn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-se(o),h=1<<u;h&i|n[u]&i&&(n[u]|=i),o&=~h}}var at=0;function Li(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,pr,xi,Di,Pt,on=!1,Rn=[],zt=null,Xt=null,_n=null,mr=new Map,Sa=new Map,gr=[],nv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function uh(n,i){switch(n){case"focusin":case"focusout":zt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":mr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function Ma(n,i,o,u,h,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[h]},i!==null&&(i=Ua(i),i!==null&&pr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,h!==null&&i.indexOf(h)===-1&&i.push(h),n)}function iv(n,i,o,u,h){switch(i){case"focusin":return zt=Ma(zt,n,i,o,u,h),!0;case"dragenter":return Xt=Ma(Xt,n,i,o,u,h),!0;case"mouseover":return _n=Ma(_n,n,i,o,u,h),!0;case"pointerover":var g=h.pointerId;return mr.set(g,Ma(mr.get(g)||null,n,i,o,u,h)),!0;case"gotpointercapture":return g=h.pointerId,Sa.set(g,Ma(Sa.get(g)||null,n,i,o,u,h)),!0}return!1}function dh(n){var i=Kr(n.target);if(i!==null){var o=Ri(i);if(o!==null){if(i=o.tag,i===13){if(i=Pi(o),i!==null){n.blockedOn=i,Pt(n.priority,function(){xi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=kc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ue=u,o.target.dispatchEvent(u),Ue=null}else return i=Ua(o),i!==null&&pr(i),n.blockedOn=o,!1;i.shift()}return!0}function fh(n,i,o){Po(n)&&o.delete(i)}function rv(){on=!1,zt!==null&&Po(zt)&&(zt=null),Xt!==null&&Po(Xt)&&(Xt=null),_n!==null&&Po(_n)&&(_n=null),mr.forEach(fh),Sa.forEach(fh)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,on||(on=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,rv)))}function wa(n){function i(h){return Ea(h,n)}if(0<Rn.length){Ea(Rn[0],n);for(var o=1;o<Rn.length;o++){var u=Rn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(zt!==null&&Ea(zt,n),Xt!==null&&Ea(Xt,n),_n!==null&&Ea(_n,n),mr.forEach(i),Sa.forEach(i),o=0;o<gr.length;o++)u=gr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<gr.length&&(o=gr[0],o.blockedOn===null);)dh(o),o.blockedOn===null&&gr.shift()}var Es=A.ReactCurrentBatchConfig,Lo=!0;function sv(n,i,o,u){var h=at,g=Es.transition;Es.transition=null;try{at=1,Ic(n,i,o,u)}finally{at=h,Es.transition=g}}function av(n,i,o,u){var h=at,g=Es.transition;Es.transition=null;try{at=4,Ic(n,i,o,u)}finally{at=h,Es.transition=g}}function Ic(n,i,o,u){if(Lo){var h=kc(n,i,o,u);if(h===null)Qc(n,i,u,Do,o),uh(n,u);else if(iv(h,n,i,o,u))u.stopPropagation();else if(uh(n,u),i&4&&-1<nv.indexOf(n)){for(;h!==null;){var g=Ua(h);if(g!==null&&pn(g),g=kc(n,i,o,u),g===null&&Qc(n,i,u,Do,o),g===h)break;h=g}h!==null&&u.stopPropagation()}else Qc(n,i,u,null,o)}}var Do=null;function kc(n,i,o,u){if(Do=null,n=pe(u),n=Kr(n),n!==null)if(i=Ri(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Pi(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function hh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ao()){case ya:return 1;case No:return 4;case Ms:case Ro:return 16;case N:return 536870912;default:return 16}default:return 16}}var xr=null,Uc=null,Io=null;function ph(){if(Io)return Io;var n,i=Uc,o=i.length,u,h="value"in xr?xr.value:xr.textContent,g=h.length;for(n=0;n<o&&i[n]===h[n];n++);var C=o-n;for(u=1;u<=C&&i[o-u]===h[g-u];u++);return Io=h.slice(n,1<u?1-u:void 0)}function ko(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Uo(){return!0}function mh(){return!1}function Qn(n){function i(o,u,h,g,C){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=g,this.target=C,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Uo:mh,this.isPropagationStopped=mh,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Qn(ws),ba=Y({},ws,{view:0,detail:0}),ov=Qn(ba),Oc,zc,Ta,Fo=Y({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Oc=n.screenX-Ta.screenX,zc=n.screenY-Ta.screenY):zc=Oc=0,Ta=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:zc}}),gh=Qn(Fo),lv=Y({},Fo,{dataTransfer:0}),cv=Qn(lv),uv=Y({},ba,{relatedTarget:0}),jc=Qn(uv),dv=Y({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),fv=Qn(dv),hv=Y({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),pv=Qn(hv),mv=Y({},ws,{data:0}),xh=Qn(mv),gv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},xv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _v(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=vv[n])?!!i[n]:!1}function Bc(){return _v}var yv=Y({},ba,{key:function(n){if(n.key){var i=gv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?xv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Sv=Qn(yv),Mv=Y({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vh=Qn(Mv),Ev=Y({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),wv=Qn(Ev),bv=Y({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tv=Qn(bv),Cv=Y({},Fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Av=Qn(Cv),Nv=[9,13,27,32],Hc=f&&"CompositionEvent"in window,Ca=null;f&&"documentMode"in document&&(Ca=document.documentMode);var Rv=f&&"TextEvent"in window&&!Ca,_h=f&&(!Hc||Ca&&8<Ca&&11>=Ca),yh=" ",Sh=!1;function Mh(n,i){switch(n){case"keyup":return Nv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Eh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function Pv(n,i){switch(n){case"compositionend":return Eh(i);case"keypress":return i.which!==32?null:(Sh=!0,yh);case"textInput":return n=i.data,n===yh&&Sh?null:n;default:return null}}function Lv(n,i){if(bs)return n==="compositionend"||!Hc&&Mh(n,i)?(n=ph(),Io=Uc=xr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _h&&i.locale!=="ko"?null:i.data;default:return null}}var Dv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function wh(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Dv[n.type]:i==="textarea"}function bh(n,i,o,u){me(u),i=Ho(i,"onChange"),0<i.length&&(o=new Fc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Aa=null,Na=null;function Iv(n){Gh(n,0)}function Oo(n){var i=Rs(n);if(_t(i))return n}function kv(n,i){if(n==="change")return i}var Th=!1;if(f){var Gc;if(f){var Vc="oninput"in document;if(!Vc){var Ch=document.createElement("div");Ch.setAttribute("oninput","return;"),Vc=typeof Ch.oninput=="function"}Gc=Vc}else Gc=!1;Th=Gc&&(!document.documentMode||9<document.documentMode)}function Ah(){Aa&&(Aa.detachEvent("onpropertychange",Nh),Na=Aa=null)}function Nh(n){if(n.propertyName==="value"&&Oo(Na)){var i=[];bh(i,Na,n,pe(n)),Et(Iv,i)}}function Uv(n,i,o){n==="focusin"?(Ah(),Aa=i,Na=o,Aa.attachEvent("onpropertychange",Nh)):n==="focusout"&&Ah()}function Fv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(Na)}function Ov(n,i){if(n==="click")return Oo(i)}function zv(n,i){if(n==="input"||n==="change")return Oo(i)}function jv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:jv;function Ra(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!p.call(i,h)||!vi(n[h],i[h]))return!1}return!0}function Rh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Ph(n,i){var o=Rh(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Rh(o)}}function Lh(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Lh(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Dh(){for(var n=window,i=ut();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=ut(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Bv(n){var i=Dh(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Lh(o.ownerDocument.documentElement,o)){if(u!==null&&Wc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var h=o.textContent.length,g=Math.min(u.start,h);u=u.end===void 0?g:Math.min(u.end,h),!n.extend&&g>u&&(h=u,u=g,g=h),h=Ph(o,g);var C=Ph(o,u);h&&C&&(n.rangeCount!==1||n.anchorNode!==h.node||n.anchorOffset!==h.offset||n.focusNode!==C.node||n.focusOffset!==C.offset)&&(i=i.createRange(),i.setStart(h.node,h.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(C.node,C.offset)):(i.setEnd(C.node,C.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Hv=f&&"documentMode"in document&&11>=document.documentMode,Ts=null,Xc=null,Pa=null,$c=!1;function Ih(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||Ts==null||Ts!==ut(u)||(u=Ts,"selectionStart"in u&&Wc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pa&&Ra(Pa,u)||(Pa=u,u=Ho(Xc,"onSelect"),0<u.length&&(i=new Fc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ts)))}function zo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Cs={animationend:zo("Animation","AnimationEnd"),animationiteration:zo("Animation","AnimationIteration"),animationstart:zo("Animation","AnimationStart"),transitionend:zo("Transition","TransitionEnd")},qc={},kh={};f&&(kh=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function jo(n){if(qc[n])return qc[n];if(!Cs[n])return n;var i=Cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in kh)return qc[n]=i[o];return n}var Uh=jo("animationend"),Fh=jo("animationiteration"),Oh=jo("animationstart"),zh=jo("transitionend"),jh=new Map,Bh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function vr(n,i){jh.set(n,i),c(i,[n])}for(var Yc=0;Yc<Bh.length;Yc++){var Kc=Bh[Yc],Gv=Kc.toLowerCase(),Vv=Kc[0].toUpperCase()+Kc.slice(1);vr(Gv,"on"+Vv)}vr(Uh,"onAnimationEnd"),vr(Fh,"onAnimationIteration"),vr(Oh,"onAnimationStart"),vr("dblclick","onDoubleClick"),vr("focusin","onFocus"),vr("focusout","onBlur"),vr(zh,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Wv=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Hh(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,i,void 0,n),n.currentTarget=null}function Gh(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],h=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var C=u.length-1;0<=C;C--){var B=u[C],Q=B.instance,he=B.currentTarget;if(B=B.listener,Q!==g&&h.isPropagationStopped())break e;Hh(h,B,he),g=Q}else for(C=0;C<u.length;C++){if(B=u[C],Q=B.instance,he=B.currentTarget,B=B.listener,Q!==g&&h.isPropagationStopped())break e;Hh(h,B,he),g=Q}}}if(Zn)throw n=ys,Zn=!1,ys=null,n}function Yt(n,i){var o=i[ru];o===void 0&&(o=i[ru]=new Set);var u=n+"__bubble";o.has(u)||(Vh(i,n,2,!1),o.add(u))}function Zc(n,i,o){var u=0;i&&(u|=4),Vh(o,n,u,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Wv.has(o)||Zc(o,!1,n),Zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Zc("selectionchange",!1,i))}}function Vh(n,i,o,u){switch(hh(i)){case 1:var h=sv;break;case 4:h=av;break;default:h=Ic}o=h.bind(null,i,o,n),h=void 0,!ct||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(h=!0),u?h!==void 0?n.addEventListener(i,o,{capture:!0,passive:h}):n.addEventListener(i,o,!0):h!==void 0?n.addEventListener(i,o,{passive:h}):n.addEventListener(i,o,!1)}function Qc(n,i,o,u,h){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var C=u.tag;if(C===3||C===4){var B=u.stateNode.containerInfo;if(B===h||B.nodeType===8&&B.parentNode===h)break;if(C===4)for(C=u.return;C!==null;){var Q=C.tag;if((Q===3||Q===4)&&(Q=C.stateNode.containerInfo,Q===h||Q.nodeType===8&&Q.parentNode===h))return;C=C.return}for(;B!==null;){if(C=Kr(B),C===null)return;if(Q=C.tag,Q===5||Q===6){u=g=C;continue e}B=B.parentNode}}u=u.return}Et(function(){var he=g,Ce=pe(o),De=[];e:{var Te=jh.get(n);if(Te!==void 0){var Ke=Fc,nt=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":Ke=Sv;break;case"focusin":nt="focus",Ke=jc;break;case"focusout":nt="blur",Ke=jc;break;case"beforeblur":case"afterblur":Ke=jc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=gh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=cv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=wv;break;case Uh:case Fh:case Oh:Ke=fv;break;case zh:Ke=Tv;break;case"scroll":Ke=ov;break;case"wheel":Ke=Av;break;case"copy":case"cut":case"paste":Ke=pv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=vh}var it=(i&4)!==0,ln=!it&&n==="scroll",oe=it?Te!==null?Te+"Capture":null:Te;it=[];for(var ne=he,ue;ne!==null;){ue=ne;var Oe=ue.stateNode;if(ue.tag===5&&Oe!==null&&(ue=Oe,oe!==null&&(Oe=Re(ne,oe),Oe!=null&&it.push(Ia(ne,Oe,ue)))),ln)break;ne=ne.return}0<it.length&&(Te=new Ke(Te,nt,null,o,Ce),De.push({event:Te,listeners:it}))}}if((i&7)===0){e:{if(Te=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Te&&o!==Ue&&(nt=o.relatedTarget||o.fromElement)&&(Kr(nt)||nt[Zi]))break e;if((Ke||Te)&&(Te=Ce.window===Ce?Ce:(Te=Ce.ownerDocument)?Te.defaultView||Te.parentWindow:window,Ke?(nt=o.relatedTarget||o.toElement,Ke=he,nt=nt?Kr(nt):null,nt!==null&&(ln=Ri(nt),nt!==ln||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=he),Ke!==nt)){if(it=gh,Oe="onMouseLeave",oe="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(it=vh,Oe="onPointerLeave",oe="onPointerEnter",ne="pointer"),ln=Ke==null?Te:Rs(Ke),ue=nt==null?Te:Rs(nt),Te=new it(Oe,ne+"leave",Ke,o,Ce),Te.target=ln,Te.relatedTarget=ue,Oe=null,Kr(Ce)===he&&(it=new it(oe,ne+"enter",nt,o,Ce),it.target=ue,it.relatedTarget=ln,Oe=it),ln=Oe,Ke&&nt)t:{for(it=Ke,oe=nt,ne=0,ue=it;ue;ue=As(ue))ne++;for(ue=0,Oe=oe;Oe;Oe=As(Oe))ue++;for(;0<ne-ue;)it=As(it),ne--;for(;0<ue-ne;)oe=As(oe),ue--;for(;ne--;){if(it===oe||oe!==null&&it===oe.alternate)break t;it=As(it),oe=As(oe)}it=null}else it=null;Ke!==null&&Wh(De,Te,Ke,it,!1),nt!==null&&ln!==null&&Wh(De,ln,nt,it,!0)}}e:{if(Te=he?Rs(he):window,Ke=Te.nodeName&&Te.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Te.type==="file")var ot=kv;else if(wh(Te))if(Th)ot=zv;else{ot=Fv;var pt=Uv}else(Ke=Te.nodeName)&&Ke.toLowerCase()==="input"&&(Te.type==="checkbox"||Te.type==="radio")&&(ot=Ov);if(ot&&(ot=ot(n,he))){bh(De,ot,o,Ce);break e}pt&&pt(n,Te,he),n==="focusout"&&(pt=Te._wrapperState)&&pt.controlled&&Te.type==="number"&&be(Te,"number",Te.value)}switch(pt=he?Rs(he):window,n){case"focusin":(wh(pt)||pt.contentEditable==="true")&&(Ts=pt,Xc=he,Pa=null);break;case"focusout":Pa=Xc=Ts=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Ih(De,o,Ce);break;case"selectionchange":if(Hv)break;case"keydown":case"keyup":Ih(De,o,Ce)}var mt;if(Hc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bs?Mh(n,o)&&(St="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(St="onCompositionStart");St&&(_h&&o.locale!=="ko"&&(bs||St!=="onCompositionStart"?St==="onCompositionEnd"&&bs&&(mt=ph()):(xr=Ce,Uc="value"in xr?xr.value:xr.textContent,bs=!0)),pt=Ho(he,St),0<pt.length&&(St=new xh(St,n,null,o,Ce),De.push({event:St,listeners:pt}),mt?St.data=mt:(mt=Eh(o),mt!==null&&(St.data=mt)))),(mt=Rv?Pv(n,o):Lv(n,o))&&(he=Ho(he,"onBeforeInput"),0<he.length&&(Ce=new xh("onBeforeInput","beforeinput",null,o,Ce),De.push({event:Ce,listeners:he}),Ce.data=mt))}Gh(De,i)})}function Ia(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ho(n,i){for(var o=i+"Capture",u=[];n!==null;){var h=n,g=h.stateNode;h.tag===5&&g!==null&&(h=g,g=Re(n,o),g!=null&&u.unshift(Ia(n,g,h)),g=Re(n,i),g!=null&&u.push(Ia(n,g,h))),n=n.return}return u}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Wh(n,i,o,u,h){for(var g=i._reactName,C=[];o!==null&&o!==u;){var B=o,Q=B.alternate,he=B.stateNode;if(Q!==null&&Q===u)break;B.tag===5&&he!==null&&(B=he,h?(Q=Re(o,g),Q!=null&&C.unshift(Ia(o,Q,B))):h||(Q=Re(o,g),Q!=null&&C.push(Ia(o,Q,B)))),o=o.return}C.length!==0&&n.push({event:i,listeners:C})}var Xv=/\r\n?/g,$v=/\u0000|\uFFFD/g;function Xh(n){return(typeof n=="string"?n:""+n).replace(Xv,`
`).replace($v,"")}function Go(n,i,o){if(i=Xh(i),Xh(n)!==i&&o)throw Error(t(425))}function Vo(){}var Jc=null,eu=null;function tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,qv=typeof clearTimeout=="function"?clearTimeout:void 0,$h=typeof Promise=="function"?Promise:void 0,Yv=typeof queueMicrotask=="function"?queueMicrotask:typeof $h<"u"?function(n){return $h.resolve(null).then(n).catch(Kv)}:nu;function Kv(n){setTimeout(function(){throw n})}function iu(n,i){var o=i,u=0;do{var h=o.nextSibling;if(n.removeChild(o),h&&h.nodeType===8)if(o=h.data,o==="/$"){if(u===0){n.removeChild(h),wa(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=h}while(o);wa(i)}function _r(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function qh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var Ns=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ns,ka="__reactProps$"+Ns,Zi="__reactContainer$"+Ns,ru="__reactEvents$"+Ns,Zv="__reactListeners$"+Ns,Qv="__reactHandles$"+Ns;function Kr(n){var i=n[Ii];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Zi]||o[Ii]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=qh(n);n!==null;){if(o=n[Ii])return o;n=qh(n)}return i}n=o,o=n.parentNode}return null}function Ua(n){return n=n[Ii]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wo(n){return n[ka]||null}var su=[],Ps=-1;function yr(n){return{current:n}}function Kt(n){0>Ps||(n.current=su[Ps],su[Ps]=null,Ps--)}function $t(n,i){Ps++,su[Ps]=n.current,n.current=i}var Sr={},Pn=yr(Sr),Bn=yr(!1),Zr=Sr;function Ls(n,i){var o=n.type.contextTypes;if(!o)return Sr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var h={},g;for(g in o)h[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=h),h}function Hn(n){return n=n.childContextTypes,n!=null}function Xo(){Kt(Bn),Kt(Pn)}function Yh(n,i,o){if(Pn.current!==Sr)throw Error(t(168));$t(Pn,i),$t(Bn,o)}function Kh(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var h in u)if(!(h in i))throw Error(t(108,Ee(n)||"Unknown",h));return Y({},o,u)}function $o(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Sr,Zr=Pn.current,$t(Pn,n),$t(Bn,Bn.current),!0}function Zh(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Kh(n,i,Zr),u.__reactInternalMemoizedMergedChildContext=n,Kt(Bn),Kt(Pn),$t(Pn,n)):Kt(Bn),$t(Bn,o)}var Qi=null,qo=!1,au=!1;function Qh(n){Qi===null?Qi=[n]:Qi.push(n)}function Jv(n){qo=!0,Qh(n)}function Mr(){if(!au&&Qi!==null){au=!0;var n=0,i=at;try{var o=Qi;for(at=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Qi=null,qo=!1}catch(h){throw Qi!==null&&(Qi=Qi.slice(n+1)),va(ya,Mr),h}finally{at=i,au=!1}}return null}var Ds=[],Is=0,Yo=null,Ko=0,ai=[],oi=0,Qr=null,Ji=1,er="";function Jr(n,i){Ds[Is++]=Ko,Ds[Is++]=Yo,Yo=n,Ko=i}function Jh(n,i,o){ai[oi++]=Ji,ai[oi++]=er,ai[oi++]=Qr,Qr=n;var u=Ji;n=er;var h=32-se(u)-1;u&=~(1<<h),o+=1;var g=32-se(i)+h;if(30<g){var C=h-h%5;g=(u&(1<<C)-1).toString(32),u>>=C,h-=C,Ji=1<<32-se(i)+h|o<<h|u,er=g+n}else Ji=1<<g|o<<h|u,er=n}function ou(n){n.return!==null&&(Jr(n,1),Jh(n,1,0))}function lu(n){for(;n===Yo;)Yo=Ds[--Is],Ds[Is]=null,Ko=Ds[--Is],Ds[Is]=null;for(;n===Qr;)Qr=ai[--oi],ai[oi]=null,er=ai[--oi],ai[oi]=null,Ji=ai[--oi],ai[oi]=null}var Jn=null,ei=null,Jt=!1,_i=null;function ep(n,i){var o=di(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function tp(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Jn=n,ei=_r(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Jn=n,ei=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:Ji,overflow:er}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=di(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Jn=n,ei=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Jt){var i=ei;if(i){var o=i;if(!tp(n,i)){if(cu(n))throw Error(t(418));i=_r(o.nextSibling);var u=Jn;i&&tp(n,i)?ep(u,o):(n.flags=n.flags&-4097|2,Jt=!1,Jn=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,Jn=n}}}function np(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function Zo(n){if(n!==Jn)return!1;if(!Jt)return np(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tu(n.type,n.memoizedProps)),i&&(i=ei)){if(cu(n))throw ip(),Error(t(418));for(;i;)ep(n,i),i=_r(i.nextSibling)}if(np(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ei=_r(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ei=null}}else ei=Jn?_r(n.stateNode.nextSibling):null;return!0}function ip(){for(var n=ei;n;)n=_r(n.nextSibling)}function ks(){ei=Jn=null,Jt=!1}function du(n){_i===null?_i=[n]:_i.push(n)}var e0=A.ReactCurrentBatchConfig;function Fa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var h=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(C){var B=h.refs;C===null?delete B[g]:B[g]=C},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Qo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rp(n){var i=n._init;return i(n._payload)}function sp(n){function i(oe,ne){if(n){var ue=oe.deletions;ue===null?(oe.deletions=[ne],oe.flags|=16):ue.push(ne)}}function o(oe,ne){if(!n)return null;for(;ne!==null;)i(oe,ne),ne=ne.sibling;return null}function u(oe,ne){for(oe=new Map;ne!==null;)ne.key!==null?oe.set(ne.key,ne):oe.set(ne.index,ne),ne=ne.sibling;return oe}function h(oe,ne){return oe=Rr(oe,ne),oe.index=0,oe.sibling=null,oe}function g(oe,ne,ue){return oe.index=ue,n?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<ne?(oe.flags|=2,ne):ue):(oe.flags|=2,ne)):(oe.flags|=1048576,ne)}function C(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,ne,ue,Oe){return ne===null||ne.tag!==6?(ne=nd(ue,oe.mode,Oe),ne.return=oe,ne):(ne=h(ne,ue),ne.return=oe,ne)}function Q(oe,ne,ue,Oe){var ot=ue.type;return ot===E?Ce(oe,ne,ue.props.children,Oe,ue.key):ne!==null&&(ne.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===te&&rp(ot)===ne.type)?(Oe=h(ne,ue.props),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,Oe):(Oe=Ml(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,Oe)}function he(oe,ne,ue,Oe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ue.containerInfo||ne.stateNode.implementation!==ue.implementation?(ne=id(ue,oe.mode,Oe),ne.return=oe,ne):(ne=h(ne,ue.children||[]),ne.return=oe,ne)}function Ce(oe,ne,ue,Oe,ot){return ne===null||ne.tag!==7?(ne=os(ue,oe.mode,Oe,ot),ne.return=oe,ne):(ne=h(ne,ue),ne.return=oe,ne)}function De(oe,ne,ue){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=nd(""+ne,oe.mode,ue),ne.return=oe,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case I:return ue=Ml(ne.type,ne.key,ne.props,null,oe.mode,ue),ue.ref=Fa(oe,null,ne),ue.return=oe,ue;case U:return ne=id(ne,oe.mode,ue),ne.return=oe,ne;case te:var Oe=ne._init;return De(oe,Oe(ne._payload),ue)}if(Ie(ne)||O(ne))return ne=os(ne,oe.mode,ue,null),ne.return=oe,ne;Qo(oe,ne)}return null}function Te(oe,ne,ue,Oe){var ot=ne!==null?ne.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return ot!==null?null:B(oe,ne,""+ue,Oe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:return ue.key===ot?Q(oe,ne,ue,Oe):null;case U:return ue.key===ot?he(oe,ne,ue,Oe):null;case te:return ot=ue._init,Te(oe,ne,ot(ue._payload),Oe)}if(Ie(ue)||O(ue))return ot!==null?null:Ce(oe,ne,ue,Oe,null);Qo(oe,ue)}return null}function Ke(oe,ne,ue,Oe,ot){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return oe=oe.get(ue)||null,B(ne,oe,""+Oe,ot);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case I:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,Q(ne,oe,Oe,ot);case U:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,he(ne,oe,Oe,ot);case te:var pt=Oe._init;return Ke(oe,ne,ue,pt(Oe._payload),ot)}if(Ie(Oe)||O(Oe))return oe=oe.get(ue)||null,Ce(ne,oe,Oe,ot,null);Qo(ne,Oe)}return null}function nt(oe,ne,ue,Oe){for(var ot=null,pt=null,mt=ne,St=ne=0,Mn=null;mt!==null&&St<ue.length;St++){mt.index>St?(Mn=mt,mt=null):Mn=mt.sibling;var jt=Te(oe,mt,ue[St],Oe);if(jt===null){mt===null&&(mt=Mn);break}n&&mt&&jt.alternate===null&&i(oe,mt),ne=g(jt,ne,St),pt===null?ot=jt:pt.sibling=jt,pt=jt,mt=Mn}if(St===ue.length)return o(oe,mt),Jt&&Jr(oe,St),ot;if(mt===null){for(;St<ue.length;St++)mt=De(oe,ue[St],Oe),mt!==null&&(ne=g(mt,ne,St),pt===null?ot=mt:pt.sibling=mt,pt=mt);return Jt&&Jr(oe,St),ot}for(mt=u(oe,mt);St<ue.length;St++)Mn=Ke(mt,oe,St,ue[St],Oe),Mn!==null&&(n&&Mn.alternate!==null&&mt.delete(Mn.key===null?St:Mn.key),ne=g(Mn,ne,St),pt===null?ot=Mn:pt.sibling=Mn,pt=Mn);return n&&mt.forEach(function(Pr){return i(oe,Pr)}),Jt&&Jr(oe,St),ot}function it(oe,ne,ue,Oe){var ot=O(ue);if(typeof ot!="function")throw Error(t(150));if(ue=ot.call(ue),ue==null)throw Error(t(151));for(var pt=ot=null,mt=ne,St=ne=0,Mn=null,jt=ue.next();mt!==null&&!jt.done;St++,jt=ue.next()){mt.index>St?(Mn=mt,mt=null):Mn=mt.sibling;var Pr=Te(oe,mt,jt.value,Oe);if(Pr===null){mt===null&&(mt=Mn);break}n&&mt&&Pr.alternate===null&&i(oe,mt),ne=g(Pr,ne,St),pt===null?ot=Pr:pt.sibling=Pr,pt=Pr,mt=Mn}if(jt.done)return o(oe,mt),Jt&&Jr(oe,St),ot;if(mt===null){for(;!jt.done;St++,jt=ue.next())jt=De(oe,jt.value,Oe),jt!==null&&(ne=g(jt,ne,St),pt===null?ot=jt:pt.sibling=jt,pt=jt);return Jt&&Jr(oe,St),ot}for(mt=u(oe,mt);!jt.done;St++,jt=ue.next())jt=Ke(mt,oe,St,jt.value,Oe),jt!==null&&(n&&jt.alternate!==null&&mt.delete(jt.key===null?St:jt.key),ne=g(jt,ne,St),pt===null?ot=jt:pt.sibling=jt,pt=jt);return n&&mt.forEach(function(D0){return i(oe,D0)}),Jt&&Jr(oe,St),ot}function ln(oe,ne,ue,Oe){if(typeof ue=="object"&&ue!==null&&ue.type===E&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case I:e:{for(var ot=ue.key,pt=ne;pt!==null;){if(pt.key===ot){if(ot=ue.type,ot===E){if(pt.tag===7){o(oe,pt.sibling),ne=h(pt,ue.props.children),ne.return=oe,oe=ne;break e}}else if(pt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===te&&rp(ot)===pt.type){o(oe,pt.sibling),ne=h(pt,ue.props),ne.ref=Fa(oe,pt,ue),ne.return=oe,oe=ne;break e}o(oe,pt);break}else i(oe,pt);pt=pt.sibling}ue.type===E?(ne=os(ue.props.children,oe.mode,Oe,ue.key),ne.return=oe,oe=ne):(Oe=Ml(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,oe=Oe)}return C(oe);case U:e:{for(pt=ue.key;ne!==null;){if(ne.key===pt)if(ne.tag===4&&ne.stateNode.containerInfo===ue.containerInfo&&ne.stateNode.implementation===ue.implementation){o(oe,ne.sibling),ne=h(ne,ue.children||[]),ne.return=oe,oe=ne;break e}else{o(oe,ne);break}else i(oe,ne);ne=ne.sibling}ne=id(ue,oe.mode,Oe),ne.return=oe,oe=ne}return C(oe);case te:return pt=ue._init,ln(oe,ne,pt(ue._payload),Oe)}if(Ie(ue))return nt(oe,ne,ue,Oe);if(O(ue))return it(oe,ne,ue,Oe);Qo(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,ne!==null&&ne.tag===6?(o(oe,ne.sibling),ne=h(ne,ue),ne.return=oe,oe=ne):(o(oe,ne),ne=nd(ue,oe.mode,Oe),ne.return=oe,oe=ne),C(oe)):o(oe,ne)}return ln}var Us=sp(!0),ap=sp(!1),Jo=yr(null),el=null,Fs=null,fu=null;function hu(){fu=Fs=el=null}function pu(n){var i=Jo.current;Kt(Jo),n._currentValue=i}function mu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Os(n,i){el=n,fu=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function li(n){var i=n._currentValue;if(fu!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(el===null)throw Error(t(308));Fs=n,el.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var es=null;function gu(n){es===null?es=[n]:es.push(n)}function op(n,i,o,u){var h=i.interleaved;return h===null?(o.next=o,gu(i)):(o.next=h.next,h.next=o),i.interleaved=o,tr(n,u)}function tr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Er=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lp(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function wr(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var h=u.pending;return h===null?i.next=i:(i.next=h.next,h.next=i),u.pending=i,tr(n,o)}return h=u.interleaved,h===null?(i.next=i,gu(u)):(i.next=h.next,h.next=i),u.interleaved=i,tr(n,o)}function tl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,hn(n,o)}}function cp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var C={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?h=g=C:g=g.next=C,o=o.next}while(o!==null);g===null?h=g=i:g=g.next=i}else h=g=i;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function nl(n,i,o,u){var h=n.updateQueue;Er=!1;var g=h.firstBaseUpdate,C=h.lastBaseUpdate,B=h.shared.pending;if(B!==null){h.shared.pending=null;var Q=B,he=Q.next;Q.next=null,C===null?g=he:C.next=he,C=Q;var Ce=n.alternate;Ce!==null&&(Ce=Ce.updateQueue,B=Ce.lastBaseUpdate,B!==C&&(B===null?Ce.firstBaseUpdate=he:B.next=he,Ce.lastBaseUpdate=Q))}if(g!==null){var De=h.baseState;C=0,Ce=he=Q=null,B=g;do{var Te=B.lane,Ke=B.eventTime;if((u&Te)===Te){Ce!==null&&(Ce=Ce.next={eventTime:Ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=n,it=B;switch(Te=i,Ke=o,it.tag){case 1:if(nt=it.payload,typeof nt=="function"){De=nt.call(Ke,De,Te);break e}De=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=it.payload,Te=typeof nt=="function"?nt.call(Ke,De,Te):nt,Te==null)break e;De=Y({},De,Te);break e;case 2:Er=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Te=h.effects,Te===null?h.effects=[B]:Te.push(B))}else Ke={eventTime:Ke,lane:Te,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ce===null?(he=Ce=Ke,Q=De):Ce=Ce.next=Ke,C|=Te;if(B=B.next,B===null){if(B=h.shared.pending,B===null)break;Te=B,B=Te.next,Te.next=null,h.lastBaseUpdate=Te,h.shared.pending=null}}while(!0);if(Ce===null&&(Q=De),h.baseState=Q,h.firstBaseUpdate=he,h.lastBaseUpdate=Ce,i=h.shared.interleaved,i!==null){h=i;do C|=h.lane,h=h.next;while(h!==i)}else g===null&&(h.shared.lanes=0);is|=C,n.lanes=C,n.memoizedState=De}}function up(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],h=u.callback;if(h!==null){if(u.callback=null,u=o,typeof h!="function")throw Error(t(191,h));h.call(u)}}}var Oa={},ki=yr(Oa),za=yr(Oa),ja=yr(Oa);function ts(n){if(n===Oa)throw Error(t(174));return n}function vu(n,i){switch($t(ja,i),$t(za,n),$t(ki,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:gt(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=gt(i,n)}Kt(ki),$t(ki,i)}function zs(){Kt(ki),Kt(za),Kt(ja)}function dp(n){ts(ja.current);var i=ts(ki.current),o=gt(i,n.type);i!==o&&($t(za,n),$t(ki,o))}function _u(n){za.current===n&&(Kt(ki),Kt(za))}var tn=yr(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var rl=A.ReactCurrentDispatcher,Mu=A.ReactCurrentBatchConfig,ns=0,nn=null,mn=null,yn=null,sl=!1,Ba=!1,Ha=0,t0=0;function Ln(){throw Error(t(321))}function Eu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!vi(n[o],i[o]))return!1;return!0}function wu(n,i,o,u,h,g){if(ns=g,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?s0:a0,n=o(u,h),Ba){g=0;do{if(Ba=!1,Ha=0,25<=g)throw Error(t(301));g+=1,yn=mn=null,i.updateQueue=null,rl.current=o0,n=o(u,h)}while(Ba)}if(rl.current=ll,i=mn!==null&&mn.next!==null,ns=0,yn=mn=nn=null,sl=!1,i)throw Error(t(300));return n}function bu(){var n=Ha!==0;return Ha=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function ci(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ga(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=mn,h=u.baseQueue,g=o.pending;if(g!==null){if(h!==null){var C=h.next;h.next=g.next,g.next=C}u.baseQueue=h=g,o.pending=null}if(h!==null){g=h.next,u=u.baseState;var B=C=null,Q=null,he=g;do{var Ce=he.lane;if((ns&Ce)===Ce)Q!==null&&(Q=Q.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),u=he.hasEagerState?he.eagerState:n(u,he.action);else{var De={lane:Ce,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};Q===null?(B=Q=De,C=u):Q=Q.next=De,nn.lanes|=Ce,is|=Ce}he=he.next}while(he!==null&&he!==g);Q===null?C=u:Q.next=B,vi(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=C,i.baseQueue=Q,o.lastRenderedState=u}if(n=o.interleaved,n!==null){h=n;do g=h.lane,nn.lanes|=g,is|=g,h=h.next;while(h!==n)}else h===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cu(n){var i=ci(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,h=o.pending,g=i.memoizedState;if(h!==null){o.pending=null;var C=h=h.next;do g=n(g,C.action),C=C.next;while(C!==h);vi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function fp(){}function hp(n,i){var o=nn,u=ci(),h=i(),g=!vi(u.memoizedState,h);if(g&&(u.memoizedState=h,Gn=!0),u=u.queue,Au(gp.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Va(9,mp.bind(null,o,u,h,i),void 0,null),Sn===null)throw Error(t(349));(ns&30)!==0||pp(o,i,h)}return h}function pp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function mp(n,i,o,u){i.value=o,i.getSnapshot=u,xp(i)&&vp(n)}function gp(n,i,o){return o(function(){xp(i)&&vp(n)})}function xp(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!vi(n,o)}catch{return!0}}function vp(n){var i=tr(n,1);i!==null&&Ei(i,n,1,-1)}function _p(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=r0.bind(null,nn,n),[i.memoizedState,n]}function Va(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function yp(){return ci().memoizedState}function al(n,i,o,u){var h=Ui();nn.flags|=n,h.memoizedState=Va(1|i,o,void 0,u===void 0?null:u)}function ol(n,i,o,u){var h=ci();u=u===void 0?null:u;var g=void 0;if(mn!==null){var C=mn.memoizedState;if(g=C.destroy,u!==null&&Eu(u,C.deps)){h.memoizedState=Va(i,o,g,u);return}}nn.flags|=n,h.memoizedState=Va(1|i,o,g,u)}function Sp(n,i){return al(8390656,8,n,i)}function Au(n,i){return ol(2048,8,n,i)}function Mp(n,i){return ol(4,2,n,i)}function Ep(n,i){return ol(4,4,n,i)}function wp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function bp(n,i,o){return o=o!=null?o.concat([n]):null,ol(4,4,wp.bind(null,i,n),o)}function Nu(){}function Tp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Cp(n,i){var o=ci();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Ap(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(vi(o,i)||(o=Gt(),nn.lanes|=o,is|=o,n.baseState=!0),i)}function n0(n,i){var o=at;at=o!==0&&4>o?o:4,n(!0);var u=Mu.transition;Mu.transition={};try{n(!1),i()}finally{at=o,Mu.transition=u}}function Np(){return ci().memoizedState}function i0(n,i,o){var u=Ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Rp(n))Pp(i,o);else if(o=op(n,i,o,u),o!==null){var h=zn();Ei(o,n,u,h),Lp(o,i,u)}}function r0(n,i,o){var u=Ar(n),h={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Rp(n))Pp(i,h);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var C=i.lastRenderedState,B=g(C,o);if(h.hasEagerState=!0,h.eagerState=B,vi(B,C)){var Q=i.interleaved;Q===null?(h.next=h,gu(i)):(h.next=Q.next,Q.next=h),i.interleaved=h;return}}catch{}finally{}o=op(n,i,h,u),o!==null&&(h=zn(),Ei(o,n,u,h),Lp(o,i,u))}}function Rp(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function Pp(n,i){Ba=sl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Lp(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,hn(n,o)}}var ll={readContext:li,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},s0={readContext:li,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:li,useEffect:Sp,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,al(4194308,4,wp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var o=Ui();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Ui();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=i0.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:_p,useDebugValue:Nu,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=_p(!1),i=n[0];return n=n0.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=nn,h=Ui();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(ns&30)!==0||pp(u,i,o)}h.memoizedState=o;var g={value:o,getSnapshot:i};return h.queue=g,Sp(gp.bind(null,u,g,n),[n]),u.flags|=2048,Va(9,mp.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=Ui(),i=Sn.identifierPrefix;if(Jt){var o=er,u=Ji;o=(u&~(1<<32-se(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ha++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=t0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},a0={readContext:li,useCallback:Tp,useContext:li,useEffect:Au,useImperativeHandle:bp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Cp,useReducer:Tu,useRef:yp,useState:function(){return Tu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return Ap(i,mn.memoizedState,n)},useTransition:function(){var n=Tu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:Np,unstable_isNewReconciler:!1},o0={readContext:li,useCallback:Tp,useContext:li,useEffect:Au,useImperativeHandle:bp,useInsertionEffect:Mp,useLayoutEffect:Ep,useMemo:Cp,useReducer:Cu,useRef:yp,useState:function(){return Cu(Ga)},useDebugValue:Nu,useDeferredValue:function(n){var i=ci();return mn===null?i.memoizedState=n:Ap(i,mn.memoizedState,n)},useTransition:function(){var n=Cu(Ga)[0],i=ci().memoizedState;return[n,i]},useMutableSource:fp,useSyncExternalStore:hp,useId:Np,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ru(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Y({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?Ri(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Ar(n),g=nr(u,h);g.payload=i,o!=null&&(g.callback=o),i=wr(n,g,h),i!==null&&(Ei(i,n,h,u),tl(i,n,h))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=zn(),h=Ar(n),g=nr(u,h);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=wr(n,g,h),i!==null&&(Ei(i,n,h,u),tl(i,n,h))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=zn(),u=Ar(n),h=nr(o,u);h.tag=2,i!=null&&(h.callback=i),i=wr(n,h,u),i!==null&&(Ei(i,n,u,o),tl(i,n,u))}};function Dp(n,i,o,u,h,g,C){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,C):i.prototype&&i.prototype.isPureReactComponent?!Ra(o,u)||!Ra(h,g):!0}function Ip(n,i,o){var u=!1,h=Sr,g=i.contextType;return typeof g=="object"&&g!==null?g=li(g):(h=Hn(i)?Zr:Pn.current,u=i.contextTypes,g=(u=u!=null)?Ls(n,h):Sr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=h,n.__reactInternalMemoizedMaskedChildContext=g),i}function kp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function Pu(n,i,o,u){var h=n.stateNode;h.props=o,h.state=n.memoizedState,h.refs={},xu(n);var g=i.contextType;typeof g=="object"&&g!==null?h.context=li(g):(g=Hn(i)?Zr:Pn.current,h.context=Ls(n,g)),h.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,o),h.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof h.getSnapshotBeforeUpdate=="function"||typeof h.UNSAFE_componentWillMount!="function"&&typeof h.componentWillMount!="function"||(i=h.state,typeof h.componentWillMount=="function"&&h.componentWillMount(),typeof h.UNSAFE_componentWillMount=="function"&&h.UNSAFE_componentWillMount(),i!==h.state&&cl.enqueueReplaceState(h,h.state,null),nl(n,o,h,u),h.state=n.memoizedState),typeof h.componentDidMount=="function"&&(n.flags|=4194308)}function js(n,i){try{var o="",u=i;do o+=le(u),u=u.return;while(u);var h=o}catch(g){h=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:h,digest:null}}function Lu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var l0=typeof WeakMap=="function"?WeakMap:Map;function Up(n,i,o){o=nr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){gl||(gl=!0,qu=u),Du(n,i)},o}function Fp(n,i,o){o=nr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var h=i.value;o.payload=function(){return u(h)},o.callback=function(){Du(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Du(n,i),typeof u!="function"&&(Tr===null?Tr=new Set([this]):Tr.add(this));var C=i.stack;this.componentDidCatch(i.value,{componentStack:C!==null?C:""})}),o}function Op(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new l0;var h=new Set;u.set(i,h)}else h=u.get(i),h===void 0&&(h=new Set,u.set(i,h));h.has(o)||(h.add(o),n=M0.bind(null,n,i,o),i.then(n,n))}function zp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function jp(n,i,o,u,h){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=nr(-1,1),i.tag=2,wr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=h,n)}var c0=A.ReactCurrentOwner,Gn=!1;function On(n,i,o,u){i.child=n===null?ap(i,null,o,u):Us(i,n.child,o,u)}function Bp(n,i,o,u,h){o=o.render;var g=i.ref;return Os(i,h),u=wu(n,i,o,u,g,h),o=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ir(n,i,h)):(Jt&&o&&ou(i),i.flags|=1,On(n,i,u,h),i.child)}function Hp(n,i,o,u,h){if(n===null){var g=o.type;return typeof g=="function"&&!td(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Gp(n,i,g,u,h)):(n=Ml(o.type,null,u,i,i.mode,h),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&h)===0){var C=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(C,u)&&n.ref===i.ref)return ir(n,i,h)}return i.flags|=1,n=Rr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Gp(n,i,o,u,h){if(n!==null){var g=n.memoizedProps;if(Ra(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&h)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ir(n,i,h)}return Iu(n,i,o,u,h)}function Vp(n,i,o){var u=i.pendingProps,h=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(Hs,ti),ti|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t(Hs,ti),ti|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,$t(Hs,ti),ti|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,$t(Hs,ti),ti|=u;return On(n,i,h,o),i.child}function Wp(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Iu(n,i,o,u,h){var g=Hn(o)?Zr:Pn.current;return g=Ls(i,g),Os(i,h),o=wu(n,i,o,u,g,h),u=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~h,ir(n,i,h)):(Jt&&u&&ou(i),i.flags|=1,On(n,i,o,h),i.child)}function Xp(n,i,o,u,h){if(Hn(o)){var g=!0;$o(i)}else g=!1;if(Os(i,h),i.stateNode===null)dl(n,i),Ip(i,o,u),Pu(i,o,u,h),u=!0;else if(n===null){var C=i.stateNode,B=i.memoizedProps;C.props=B;var Q=C.context,he=o.contextType;typeof he=="object"&&he!==null?he=li(he):(he=Hn(o)?Zr:Pn.current,he=Ls(i,he));var Ce=o.getDerivedStateFromProps,De=typeof Ce=="function"||typeof C.getSnapshotBeforeUpdate=="function";De||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==u||Q!==he)&&kp(i,C,u,he),Er=!1;var Te=i.memoizedState;C.state=Te,nl(i,u,C,h),Q=i.memoizedState,B!==u||Te!==Q||Bn.current||Er?(typeof Ce=="function"&&(Ru(i,o,Ce,u),Q=i.memoizedState),(B=Er||Dp(i,o,B,u,Te,Q,he))?(De||typeof C.UNSAFE_componentWillMount!="function"&&typeof C.componentWillMount!="function"||(typeof C.componentWillMount=="function"&&C.componentWillMount(),typeof C.UNSAFE_componentWillMount=="function"&&C.UNSAFE_componentWillMount()),typeof C.componentDidMount=="function"&&(i.flags|=4194308)):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Q),C.props=u,C.state=Q,C.context=he,u=B):(typeof C.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{C=i.stateNode,lp(n,i),B=i.memoizedProps,he=i.type===i.elementType?B:yi(i.type,B),C.props=he,De=i.pendingProps,Te=C.context,Q=o.contextType,typeof Q=="object"&&Q!==null?Q=li(Q):(Q=Hn(o)?Zr:Pn.current,Q=Ls(i,Q));var Ke=o.getDerivedStateFromProps;(Ce=typeof Ke=="function"||typeof C.getSnapshotBeforeUpdate=="function")||typeof C.UNSAFE_componentWillReceiveProps!="function"&&typeof C.componentWillReceiveProps!="function"||(B!==De||Te!==Q)&&kp(i,C,u,Q),Er=!1,Te=i.memoizedState,C.state=Te,nl(i,u,C,h);var nt=i.memoizedState;B!==De||Te!==nt||Bn.current||Er?(typeof Ke=="function"&&(Ru(i,o,Ke,u),nt=i.memoizedState),(he=Er||Dp(i,o,he,u,Te,nt,Q)||!1)?(Ce||typeof C.UNSAFE_componentWillUpdate!="function"&&typeof C.componentWillUpdate!="function"||(typeof C.componentWillUpdate=="function"&&C.componentWillUpdate(u,nt,Q),typeof C.UNSAFE_componentWillUpdate=="function"&&C.UNSAFE_componentWillUpdate(u,nt,Q)),typeof C.componentDidUpdate=="function"&&(i.flags|=4),typeof C.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=nt),C.props=u,C.state=nt,C.context=Q,u=he):(typeof C.componentDidUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=4),typeof C.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Te===n.memoizedState||(i.flags|=1024),u=!1)}return ku(n,i,o,u,g,h)}function ku(n,i,o,u,h,g){Wp(n,i);var C=(i.flags&128)!==0;if(!u&&!C)return h&&Zh(i,o,!1),ir(n,i,g);u=i.stateNode,c0.current=i;var B=C&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&C?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,B,g)):On(n,i,B,g),i.memoizedState=u.state,h&&Zh(i,o,!0),i.child}function $p(n){var i=n.stateNode;i.pendingContext?Yh(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Yh(n,i.context,!1),vu(n,i.containerInfo)}function qp(n,i,o,u,h){return ks(),du(h),i.flags|=256,On(n,i,o,u),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Yp(n,i,o){var u=i.pendingProps,h=tn.current,g=!1,C=(i.flags&128)!==0,B;if((B=C)||(B=n!==null&&n.memoizedState===null?!1:(h&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(h|=1),$t(tn,h&1),n===null)return uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(C=u.children,n=u.fallback,g?(u=i.mode,g=i.child,C={mode:"hidden",children:C},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=C):g=El(C,u,0,null),n=os(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Fu(o),i.memoizedState=Uu,n):Ou(i,C));if(h=n.memoizedState,h!==null&&(B=h.dehydrated,B!==null))return u0(n,i,C,u,B,h,o);if(g){g=u.fallback,C=i.mode,h=n.child,B=h.sibling;var Q={mode:"hidden",children:u.children};return(C&1)===0&&i.child!==h?(u=i.child,u.childLanes=0,u.pendingProps=Q,i.deletions=null):(u=Rr(h,Q),u.subtreeFlags=h.subtreeFlags&14680064),B!==null?g=Rr(B,g):(g=os(g,C,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,C=n.child.memoizedState,C=C===null?Fu(o):{baseLanes:C.baseLanes|o,cachePool:null,transitions:C.transitions},g.memoizedState=C,g.childLanes=n.childLanes&~o,i.memoizedState=Uu,u}return g=n.child,n=g.sibling,u=Rr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ou(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,o,u){return u!==null&&du(u),Us(i,n.child,null,o),n=Ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function u0(n,i,o,u,h,g,C){if(o)return i.flags&256?(i.flags&=-257,u=Lu(Error(t(422))),ul(n,i,C,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,h=i.mode,u=El({mode:"visible",children:u.children},h,0,null),g=os(g,h,C,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Us(i,n.child,null,C),i.child.memoizedState=Fu(C),i.memoizedState=Uu,g);if((i.mode&1)===0)return ul(n,i,C,null);if(h.data==="$!"){if(u=h.nextSibling&&h.nextSibling.dataset,u)var B=u.dgst;return u=B,g=Error(t(419)),u=Lu(g,u,void 0),ul(n,i,C,u)}if(B=(C&n.childLanes)!==0,Gn||B){if(u=Sn,u!==null){switch(C&-C){case 4:h=2;break;case 16:h=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:h=32;break;case 536870912:h=268435456;break;default:h=0}h=(h&(u.suspendedLanes|C))!==0?0:h,h!==0&&h!==g.retryLane&&(g.retryLane=h,tr(n,h),Ei(u,n,h,-1))}return ed(),u=Lu(Error(t(421))),ul(n,i,C,u)}return h.data==="$?"?(i.flags|=128,i.child=n.child,i=E0.bind(null,n),h._reactRetry=i,null):(n=g.treeContext,ei=_r(h.nextSibling),Jn=i,Jt=!0,_i=null,n!==null&&(ai[oi++]=Ji,ai[oi++]=er,ai[oi++]=Qr,Ji=n.id,er=n.overflow,Qr=i),i=Ou(i,u.children),i.flags|=4096,i)}function Kp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),mu(n.return,i,o)}function zu(n,i,o,u,h){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=h)}function Zp(n,i,o){var u=i.pendingProps,h=u.revealOrder,g=u.tail;if(On(n,i,u.children,o),u=tn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Kp(n,o,i);else if(n.tag===19)Kp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(tn,u),(i.mode&1)===0)i.memoizedState=null;else switch(h){case"forwards":for(o=i.child,h=null;o!==null;)n=o.alternate,n!==null&&il(n)===null&&(h=o),o=o.sibling;o=h,o===null?(h=i.child,i.child=null):(h=o.sibling,o.sibling=null),zu(i,!1,h,o,g);break;case"backwards":for(o=null,h=i.child,i.child=null;h!==null;){if(n=h.alternate,n!==null&&il(n)===null){i.child=h;break}n=h.sibling,h.sibling=o,o=h,h=n}zu(i,!0,o,null,g);break;case"together":zu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ir(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Rr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Rr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function d0(n,i,o){switch(i.tag){case 3:$p(i),ks();break;case 5:dp(i);break;case 1:Hn(i.type)&&$o(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,h=i.memoizedProps.value;$t(Jo,u._currentValue),u._currentValue=h;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?($t(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Yp(n,i,o):($t(tn,tn.current&1),n=ir(n,i,o),n!==null?n.sibling:null);$t(tn,tn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Zp(n,i,o);i.flags|=128}if(h=i.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),$t(tn,tn.current),u)break;return null;case 22:case 23:return i.lanes=0,Vp(n,i,o)}return ir(n,i,o)}var Qp,ju,Jp,em;Qp=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ju=function(){},Jp=function(n,i,o,u){var h=n.memoizedProps;if(h!==u){n=i.stateNode,ts(ki.current);var g=null;switch(o){case"input":h=lt(n,h),u=lt(n,u),g=[];break;case"select":h=Y({},h,{value:void 0}),u=Y({},u,{value:void 0}),g=[];break;case"textarea":h=Ut(n,h),u=Ut(n,u),g=[];break;default:typeof h.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Vo)}ge(o,u);var C;o=null;for(he in h)if(!u.hasOwnProperty(he)&&h.hasOwnProperty(he)&&h[he]!=null)if(he==="style"){var B=h[he];for(C in B)B.hasOwnProperty(C)&&(o||(o={}),o[C]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(l.hasOwnProperty(he)?g||(g=[]):(g=g||[]).push(he,null));for(he in u){var Q=u[he];if(B=h!=null?h[he]:void 0,u.hasOwnProperty(he)&&Q!==B&&(Q!=null||B!=null))if(he==="style")if(B){for(C in B)!B.hasOwnProperty(C)||Q&&Q.hasOwnProperty(C)||(o||(o={}),o[C]="");for(C in Q)Q.hasOwnProperty(C)&&B[C]!==Q[C]&&(o||(o={}),o[C]=Q[C])}else o||(g||(g=[]),g.push(he,o)),o=Q;else he==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,B=B?B.__html:void 0,Q!=null&&B!==Q&&(g=g||[]).push(he,Q)):he==="children"?typeof Q!="string"&&typeof Q!="number"||(g=g||[]).push(he,""+Q):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(l.hasOwnProperty(he)?(Q!=null&&he==="onScroll"&&Yt("scroll",n),g||B===Q||(g=[])):(g=g||[]).push(he,Q))}o&&(g=g||[]).push("style",o);var he=g;(i.updateQueue=he)&&(i.flags|=4)}},em=function(n,i,o,u){o!==u&&(i.flags|=4)};function Wa(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&14680064,u|=h.flags&14680064,h.return=n,h=h.sibling;else for(h=n.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=n,h=h.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function f0(n,i,o){var u=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Hn(i.type)&&Xo(),Dn(i),null;case 3:return u=i.stateNode,zs(),Kt(Bn),Kt(Pn),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Zu(_i),_i=null))),ju(n,i),Dn(i),null;case 5:_u(i);var h=ts(ja.current);if(o=i.type,n!==null&&i.stateNode!=null)Jp(n,i,o,u,h),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=ts(ki.current),Zo(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[Ii]=i,u[ka]=g,n=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":ze(u,g),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",u);break;case"textarea":Pe(u,g),Yt("invalid",u)}ge(o,g),h=null;for(var C in g)if(g.hasOwnProperty(C)){var B=g[C];C==="children"?typeof B=="string"?u.textContent!==B&&(g.suppressHydrationWarning!==!0&&Go(u.textContent,B,n),h=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Go(u.textContent,B,n),h=["children",""+B]):l.hasOwnProperty(C)&&B!=null&&C==="onScroll"&&Yt("scroll",u)}switch(o){case"input":Ye(u),fe(u,g,!0);break;case"textarea":Ye(u),Ve(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Vo)}u=h,i.updateQueue=u,u!==null&&(i.flags|=4)}else{C=h.nodeType===9?h:h.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ft(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=C.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=C.createElement(o,{is:u.is}):(n=C.createElement(o),o==="select"&&(C=n,u.multiple?C.multiple=!0:u.size&&(C.size=u.size))):n=C.createElementNS(n,o),n[Ii]=i,n[ka]=u,Qp(n,i,!1,!1),i.stateNode=n;e:{switch(C=Ne(o,u),o){case"dialog":Yt("cancel",n),Yt("close",n),h=u;break;case"iframe":case"object":case"embed":Yt("load",n),h=u;break;case"video":case"audio":for(h=0;h<La.length;h++)Yt(La[h],n);h=u;break;case"source":Yt("error",n),h=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),h=u;break;case"details":Yt("toggle",n),h=u;break;case"input":ze(n,u),h=lt(n,u),Yt("invalid",n);break;case"option":h=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},h=Y({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":Pe(n,u),h=Ut(n,u),Yt("invalid",n);break;default:h=u}ge(o,h),B=h;for(g in B)if(B.hasOwnProperty(g)){var Q=B[g];g==="style"?re(n,Q):g==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&Wt(n,Q)):g==="children"?typeof Q=="string"?(o!=="textarea"||Q!=="")&&rt(n,Q):typeof Q=="number"&&rt(n,""+Q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?Q!=null&&g==="onScroll"&&Yt("scroll",n):Q!=null&&D(n,g,Q,C))}switch(o){case"input":Ye(n),fe(n,u,!1);break;case"textarea":Ye(n),Ve(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Se(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?At(n,!!u.multiple,g,!1):u.defaultValue!=null&&At(n,!!u.multiple,u.defaultValue,!0);break;default:typeof h.onClick=="function"&&(n.onclick=Vo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)em(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(ja.current),ts(ki.current),Zo(i)){if(u=i.stateNode,o=i.memoizedProps,u[Ii]=i,(g=u.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:Go(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Go(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[Ii]=i,i.stateNode=u}return Dn(i),null;case 13:if(Kt(tn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ei!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ip(),ks(),i.flags|=98560,g=!1;else if(g=Zo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ii]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),g=!1}else _i!==null&&(Zu(_i),_i=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):ed())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return zs(),ju(n,i),n===null&&Da(i.stateNode.containerInfo),Dn(i),null;case 10:return pu(i.type._context),Dn(i),null;case 17:return Hn(i.type)&&Xo(),Dn(i),null;case 19:if(Kt(tn),g=i.memoizedState,g===null)return Dn(i),null;if(u=(i.flags&128)!==0,C=g.rendering,C===null)if(u)Wa(g,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(C=il(n),C!==null){for(i.flags|=128,Wa(g,!1),u=C.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,C=g.alternate,C===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=C.childLanes,g.lanes=C.lanes,g.child=C.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=C.memoizedProps,g.memoizedState=C.memoizedState,g.updateQueue=C.updateQueue,g.type=C.type,n=C.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $t(tn,tn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>Gs&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304)}else{if(!u)if(n=il(C),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!C.alternate&&!Jt)return Dn(i),null}else 2*Zt()-g.renderingStartTime>Gs&&o!==1073741824&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304);g.isBackwards?(C.sibling=i.child,i.child=C):(o=g.last,o!==null?o.sibling=C:i.child=C,g.last=C)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,o=tn.current,$t(tn,u?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ti&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function h0(n,i){switch(lu(i),i.tag){case 1:return Hn(i.type)&&Xo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return zs(),Kt(Bn),Kt(Pn),Su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Kt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return zs(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var fl=!1,In=!1,p0=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){an(n,i,u)}else o.current=null}function Bu(n,i,o){try{o()}catch(u){an(n,i,u)}}var tm=!1;function m0(n,i){if(Jc=Lo,n=Dh(),Wc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var C=0,B=-1,Q=-1,he=0,Ce=0,De=n,Te=null;t:for(;;){for(var Ke;De!==o||h!==0&&De.nodeType!==3||(B=C+h),De!==g||u!==0&&De.nodeType!==3||(Q=C+u),De.nodeType===3&&(C+=De.nodeValue.length),(Ke=De.firstChild)!==null;)Te=De,De=Ke;for(;;){if(De===n)break t;if(Te===o&&++he===h&&(B=C),Te===g&&++Ce===u&&(Q=C),(Ke=De.nextSibling)!==null)break;De=Te,Te=De.parentNode}De=Ke}o=B===-1||Q===-1?null:{start:B,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:n,selectionRange:o},Lo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var it=nt.memoizedProps,ln=nt.memoizedState,oe=i.stateNode,ne=oe.getSnapshotBeforeUpdate(i.elementType===i.type?it:yi(i.type,it),ln);oe.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){an(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return nt=tm,tm=!1,nt}function Xa(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var h=u=u.next;do{if((h.tag&n)===n){var g=h.destroy;h.destroy=void 0,g!==void 0&&Bu(i,o,g)}h=h.next}while(h!==u)}}function hl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function nm(n){var i=n.alternate;i!==null&&(n.alternate=null,nm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Ii],delete i[ka],delete i[ru],delete i[Zv],delete i[Qv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function im(n){return n.tag===5||n.tag===3||n.tag===4}function rm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Vo));else if(u!==4&&(n=n.child,n!==null))for(Gu(n,i,o),n=n.sibling;n!==null;)Gu(n,i,o),n=n.sibling}function Vu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var Tn=null,Si=!1;function br(n,i,o){for(o=o.child;o!==null;)sm(n,i,o),o=o.sibling}function sm(n,i,o){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Z,o)}catch{}switch(o.tag){case 5:In||Bs(o,i);case 6:var u=Tn,h=Si;Tn=null,br(n,i,o),Tn=u,Si=h,Tn!==null&&(Si?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Si?(n=Tn,o=o.stateNode,n.nodeType===8?iu(n.parentNode,o):n.nodeType===1&&iu(n,o),wa(n)):iu(Tn,o.stateNode));break;case 4:u=Tn,h=Si,Tn=o.stateNode.containerInfo,Si=!0,br(n,i,o),Tn=u,Si=h;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){h=u=u.next;do{var g=h,C=g.destroy;g=g.tag,C!==void 0&&((g&2)!==0||(g&4)!==0)&&Bu(o,i,C),h=h.next}while(h!==u)}br(n,i,o);break;case 1:if(!In&&(Bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){an(o,i,B)}br(n,i,o);break;case 21:br(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,br(n,i,o),In=u):br(n,i,o);break;default:br(n,i,o)}}function am(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new p0),i.forEach(function(u){var h=w0.bind(null,n,u);o.has(u)||(o.add(u),u.then(h,h))})}}function Mi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u];try{var g=n,C=i,B=C;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,Si=!1;break e;case 3:Tn=B.stateNode.containerInfo,Si=!0;break e;case 4:Tn=B.stateNode.containerInfo,Si=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));sm(g,C,h),Tn=null,Si=!1;var Q=h.alternate;Q!==null&&(Q.return=null),h.return=null}catch(he){an(h,i,he)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)om(i,n),i=i.sibling}function om(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Fi(n),u&4){try{Xa(3,n,n.return),hl(3,n)}catch(it){an(n,n.return,it)}try{Xa(5,n,n.return)}catch(it){an(n,n.return,it)}}break;case 1:Mi(i,n),Fi(n),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(Mi(i,n),Fi(n),u&512&&o!==null&&Bs(o,o.return),n.flags&32){var h=n.stateNode;try{rt(h,"")}catch(it){an(n,n.return,it)}}if(u&4&&(h=n.stateNode,h!=null)){var g=n.memoizedProps,C=o!==null?o.memoizedProps:g,B=n.type,Q=n.updateQueue;if(n.updateQueue=null,Q!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&dt(h,g),Ne(B,C);var he=Ne(B,g);for(C=0;C<Q.length;C+=2){var Ce=Q[C],De=Q[C+1];Ce==="style"?re(h,De):Ce==="dangerouslySetInnerHTML"?Wt(h,De):Ce==="children"?rt(h,De):D(h,Ce,De,he)}switch(B){case"input":wt(h,g);break;case"textarea":k(h,g);break;case"select":var Te=h._wrapperState.wasMultiple;h._wrapperState.wasMultiple=!!g.multiple;var Ke=g.value;Ke!=null?At(h,!!g.multiple,Ke,!1):Te!==!!g.multiple&&(g.defaultValue!=null?At(h,!!g.multiple,g.defaultValue,!0):At(h,!!g.multiple,g.multiple?[]:"",!1))}h[ka]=g}catch(it){an(n,n.return,it)}}break;case 6:if(Mi(i,n),Fi(n),u&4){if(n.stateNode===null)throw Error(t(162));h=n.stateNode,g=n.memoizedProps;try{h.nodeValue=g}catch(it){an(n,n.return,it)}}break;case 3:if(Mi(i,n),Fi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(it){an(n,n.return,it)}break;case 4:Mi(i,n),Fi(n);break;case 13:Mi(i,n),Fi(n),h=n.child,h.flags&8192&&(g=h.memoizedState!==null,h.stateNode.isHidden=g,!g||h.alternate!==null&&h.alternate.memoizedState!==null||($u=Zt())),u&4&&am(n);break;case 22:if(Ce=o!==null&&o.memoizedState!==null,n.mode&1?(In=(he=In)||Ce,Mi(i,n),In=he):Mi(i,n),Fi(n),u&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Ce&&(n.mode&1)!==0)for(Qe=n,Ce=n.child;Ce!==null;){for(De=Qe=Ce;Qe!==null;){switch(Te=Qe,Ke=Te.child,Te.tag){case 0:case 11:case 14:case 15:Xa(4,Te,Te.return);break;case 1:Bs(Te,Te.return);var nt=Te.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Te,o=Te.return;try{i=u,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(it){an(u,o,it)}}break;case 5:Bs(Te,Te.return);break;case 22:if(Te.memoizedState!==null){um(De);continue}}Ke!==null?(Ke.return=Te,Qe=Ke):um(De)}Ce=Ce.sibling}e:for(Ce=null,De=n;;){if(De.tag===5){if(Ce===null){Ce=De;try{h=De.stateNode,he?(g=h.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=De.stateNode,Q=De.memoizedProps.style,C=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,B.style.display=T("display",C))}catch(it){an(n,n.return,it)}}}else if(De.tag===6){if(Ce===null)try{De.stateNode.nodeValue=he?"":De.memoizedProps}catch(it){an(n,n.return,it)}}else if((De.tag!==22&&De.tag!==23||De.memoizedState===null||De===n)&&De.child!==null){De.child.return=De,De=De.child;continue}if(De===n)break e;for(;De.sibling===null;){if(De.return===null||De.return===n)break e;Ce===De&&(Ce=null),De=De.return}Ce===De&&(Ce=null),De.sibling.return=De.return,De=De.sibling}}break;case 19:Mi(i,n),Fi(n),u&4&&am(n);break;case 21:break;default:Mi(i,n),Fi(n)}}function Fi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(im(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var h=u.stateNode;u.flags&32&&(rt(h,""),u.flags&=-33);var g=rm(n);Vu(n,g,h);break;case 3:case 4:var C=u.stateNode.containerInfo,B=rm(n);Gu(n,B,C);break;default:throw Error(t(161))}}catch(Q){an(n,n.return,Q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function g0(n,i,o){Qe=n,lm(n)}function lm(n,i,o){for(var u=(n.mode&1)!==0;Qe!==null;){var h=Qe,g=h.child;if(h.tag===22&&u){var C=h.memoizedState!==null||fl;if(!C){var B=h.alternate,Q=B!==null&&B.memoizedState!==null||In;B=fl;var he=In;if(fl=C,(In=Q)&&!he)for(Qe=h;Qe!==null;)C=Qe,Q=C.child,C.tag===22&&C.memoizedState!==null?dm(h):Q!==null?(Q.return=C,Qe=Q):dm(h);for(;g!==null;)Qe=g,lm(g),g=g.sibling;Qe=h,fl=B,In=he}cm(n)}else(h.subtreeFlags&8772)!==0&&g!==null?(g.return=h,Qe=g):cm(n)}}function cm(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||hl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var h=i.elementType===i.type?o.memoizedProps:yi(i.type,o.memoizedProps);u.componentDidUpdate(h,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&up(i,g,u);break;case 3:var C=i.updateQueue;if(C!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}up(i,C,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var Q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&o.focus();break;case"img":Q.src&&(o.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var he=i.alternate;if(he!==null){var Ce=he.memoizedState;if(Ce!==null){var De=Ce.dehydrated;De!==null&&wa(De)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Hu(i)}catch(Te){an(i,i.return,Te)}}if(i===n){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function um(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function dm(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{hl(4,i)}catch(Q){an(i,o,Q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var h=i.return;try{u.componentDidMount()}catch(Q){an(i,h,Q)}}var g=i.return;try{Hu(i)}catch(Q){an(i,g,Q)}break;case 5:var C=i.return;try{Hu(i)}catch(Q){an(i,C,Q)}}}catch(Q){an(i,i.return,Q)}if(i===n){Qe=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Qe=B;break}Qe=i.return}}var x0=Math.ceil,pl=A.ReactCurrentDispatcher,Wu=A.ReactCurrentOwner,ui=A.ReactCurrentBatchConfig,Ot=0,Sn=null,un=null,Cn=0,ti=0,Hs=yr(0),gn=0,$a=null,is=0,ml=0,Xu=0,qa=null,Vn=null,$u=0,Gs=1/0,rr=null,gl=!1,qu=null,Tr=null,xl=!1,Cr=null,vl=0,Ya=0,Yu=null,_l=-1,yl=0;function zn(){return(Ot&6)!==0?Zt():_l!==-1?_l:_l=Zt()}function Ar(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Cn!==0?Cn&-Cn:e0.transition!==null?(yl===0&&(yl=Gt()),yl):(n=at,n!==0||(n=window.event,n=n===void 0?16:hh(n.type)),n)}function Ei(n,i,o,u){if(50<Ya)throw Ya=0,Yu=null,Error(t(185));sn(n,o,u),((Ot&2)===0||n!==Sn)&&(n===Sn&&((Ot&2)===0&&(ml|=o),gn===4&&Nr(n,Cn)),Wn(n,u),o===1&&Ot===0&&(i.mode&1)===0&&(Gs=Zt()+500,qo&&Mr()))}function Wn(n,i){var o=n.callbackNode;Nt(n,i);var u=Tt(n,n===Sn?Cn:0);if(u===0)o!==null&&_a(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&_a(o),i===1)n.tag===0?Jv(hm.bind(null,n)):Qh(hm.bind(null,n)),Yv(function(){(Ot&6)===0&&Mr()}),o=null;else{switch(Li(u)){case 1:o=ya;break;case 4:o=No;break;case 16:o=Ms;break;case 536870912:o=N;break;default:o=Ms}o=Sm(o,fm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function fm(n,i){if(_l=-1,yl=0,(Ot&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Vs()&&n.callbackNode!==o)return null;var u=Tt(n,n===Sn?Cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Sl(n,u);else{i=u;var h=Ot;Ot|=2;var g=mm();(Sn!==n||Cn!==i)&&(rr=null,Gs=Zt()+500,ss(n,i));do try{y0();break}catch(B){pm(n,B)}while(!0);hu(),pl.current=g,Ot=h,un!==null?i=0:(Sn=null,Cn=0,i=gn)}if(i!==0){if(i===2&&(h=Qt(n),h!==0&&(u=h,i=Ku(n,h))),i===1)throw o=$a,ss(n,0),Nr(n,u),Wn(n,Zt()),o;if(i===6)Nr(n,u);else{if(h=n.current.alternate,(u&30)===0&&!v0(h)&&(i=Sl(n,u),i===2&&(g=Qt(n),g!==0&&(u=g,i=Ku(n,g))),i===1))throw o=$a,ss(n,0),Nr(n,u),Wn(n,Zt()),o;switch(n.finishedWork=h,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Vn,rr);break;case 3:if(Nr(n,u),(u&130023424)===u&&(i=$u+500-Zt(),10<i)){if(Tt(n,0)!==0)break;if(h=n.suspendedLanes,(h&u)!==u){zn(),n.pingedLanes|=n.suspendedLanes&h;break}n.timeoutHandle=nu(as.bind(null,n,Vn,rr),i);break}as(n,Vn,rr);break;case 4:if(Nr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,h=-1;0<u;){var C=31-se(u);g=1<<C,C=i[C],C>h&&(h=C),u&=~g}if(u=h,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*x0(u/1960))-u,10<u){n.timeoutHandle=nu(as.bind(null,n,Vn,rr),u);break}as(n,Vn,rr);break;case 5:as(n,Vn,rr);break;default:throw Error(t(329))}}}return Wn(n,Zt()),n.callbackNode===o?fm.bind(null,n):null}function Ku(n,i){var o=qa;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=Sl(n,i),n!==2&&(i=Vn,Vn=o,i!==null&&Zu(i)),n}function Zu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function v0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var h=o[u],g=h.getSnapshot;h=h.value;try{if(!vi(g(),h))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Nr(n,i){for(i&=~Xu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-se(i),u=1<<o;n[o]=-1,i&=~u}}function hm(n){if((Ot&6)!==0)throw Error(t(327));Vs();var i=Tt(n,0);if((i&1)===0)return Wn(n,Zt()),null;var o=Sl(n,i);if(n.tag!==0&&o===2){var u=Qt(n);u!==0&&(i=u,o=Ku(n,u))}if(o===1)throw o=$a,ss(n,0),Nr(n,i),Wn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Vn,rr),Wn(n,Zt()),null}function Qu(n,i){var o=Ot;Ot|=1;try{return n(i)}finally{Ot=o,Ot===0&&(Gs=Zt()+500,qo&&Mr())}}function rs(n){Cr!==null&&Cr.tag===0&&(Ot&6)===0&&Vs();var i=Ot;Ot|=1;var o=ui.transition,u=at;try{if(ui.transition=null,at=1,n)return n()}finally{at=u,ui.transition=o,Ot=i,(Ot&6)===0&&Mr()}}function Ju(){ti=Hs.current,Kt(Hs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,qv(o)),un!==null)for(o=un.return;o!==null;){var u=o;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xo();break;case 3:zs(),Kt(Bn),Kt(Pn),Su();break;case 5:_u(u);break;case 4:zs();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:pu(u.type._context);break;case 22:case 23:Ju()}o=o.return}if(Sn=n,un=n=Rr(n.current,null),Cn=ti=i,gn=0,$a=null,Xu=ml=is=0,Vn=qa=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],u=o.interleaved,u!==null){o.interleaved=null;var h=u.next,g=o.pending;if(g!==null){var C=g.next;g.next=h,u.next=C}o.pending=u}es=null}return n}function pm(n,i){do{var o=un;try{if(hu(),rl.current=ll,sl){for(var u=nn.memoizedState;u!==null;){var h=u.queue;h!==null&&(h.pending=null),u=u.next}sl=!1}if(ns=0,yn=mn=nn=null,Ba=!1,Ha=0,Wu.current=null,o===null||o.return===null){gn=1,$a=i,un=null;break}e:{var g=n,C=o.return,B=o,Q=i;if(i=Cn,B.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var he=Q,Ce=B,De=Ce.tag;if((Ce.mode&1)===0&&(De===0||De===11||De===15)){var Te=Ce.alternate;Te?(Ce.updateQueue=Te.updateQueue,Ce.memoizedState=Te.memoizedState,Ce.lanes=Te.lanes):(Ce.updateQueue=null,Ce.memoizedState=null)}var Ke=zp(C);if(Ke!==null){Ke.flags&=-257,jp(Ke,C,B,g,i),Ke.mode&1&&Op(g,he,i),i=Ke,Q=he;var nt=i.updateQueue;if(nt===null){var it=new Set;it.add(Q),i.updateQueue=it}else nt.add(Q);break e}else{if((i&1)===0){Op(g,he,i),ed();break e}Q=Error(t(426))}}else if(Jt&&B.mode&1){var ln=zp(C);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),jp(ln,C,B,g,i),du(js(Q,B));break e}}g=Q=js(Q,B),gn!==4&&(gn=2),qa===null?qa=[g]:qa.push(g),g=C;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var oe=Up(g,Q,i);cp(g,oe);break e;case 1:B=Q;var ne=g.type,ue=g.stateNode;if((g.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Tr===null||!Tr.has(ue)))){g.flags|=65536,i&=-i,g.lanes|=i;var Oe=Fp(g,B,i);cp(g,Oe);break e}}g=g.return}while(g!==null)}xm(o)}catch(ot){i=ot,un===o&&o!==null&&(un=o=o.return);continue}break}while(!0)}function mm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function ed(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(is&268435455)===0&&(ml&268435455)===0||Nr(Sn,Cn)}function Sl(n,i){var o=Ot;Ot|=2;var u=mm();(Sn!==n||Cn!==i)&&(rr=null,ss(n,i));do try{_0();break}catch(h){pm(n,h)}while(!0);if(hu(),Ot=o,pl.current=u,un!==null)throw Error(t(261));return Sn=null,Cn=0,gn}function _0(){for(;un!==null;)gm(un)}function y0(){for(;un!==null&&!Yr();)gm(un)}function gm(n){var i=ym(n.alternate,n,ti);n.memoizedProps=n.pendingProps,i===null?xm(n):un=i,Wu.current=null}function xm(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=f0(o,i,ti),o!==null){un=o;return}}else{if(o=h0(o,i),o!==null){o.flags&=32767,un=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);gn===0&&(gn=5)}function as(n,i,o){var u=at,h=ui.transition;try{ui.transition=null,at=1,S0(n,i,o,u)}finally{ui.transition=h,at=u}return null}function S0(n,i,o,u){do Vs();while(Cr!==null);if((Ot&6)!==0)throw Error(t(327));o=n.finishedWork;var h=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(tt(n,g),n===Sn&&(un=Sn=null,Cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xl||(xl=!0,Sm(Ms,function(){return Vs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=ui.transition,ui.transition=null;var C=at;at=1;var B=Ot;Ot|=4,Wu.current=null,m0(n,o),om(o,n),Bv(eu),Lo=!!Jc,eu=Jc=null,n.current=o,g0(o),Dc(),Ot=B,at=C,ui.transition=g}else n.current=o;if(xl&&(xl=!1,Cr=n,vl=h),g=n.pendingLanes,g===0&&(Tr=null),ae(o.stateNode),Wn(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)h=i[o],u(h.value,{componentStack:h.stack,digest:h.digest});if(gl)throw gl=!1,n=qu,qu=null,n;return(vl&1)!==0&&n.tag!==0&&Vs(),g=n.pendingLanes,(g&1)!==0?n===Yu?Ya++:(Ya=0,Yu=n):Ya=0,Mr(),null}function Vs(){if(Cr!==null){var n=Li(vl),i=ui.transition,o=at;try{if(ui.transition=null,at=16>n?16:n,Cr===null)var u=!1;else{if(n=Cr,Cr=null,vl=0,(Ot&6)!==0)throw Error(t(331));var h=Ot;for(Ot|=4,Qe=n.current;Qe!==null;){var g=Qe,C=g.child;if((Qe.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Q=0;Q<B.length;Q++){var he=B[Q];for(Qe=he;Qe!==null;){var Ce=Qe;switch(Ce.tag){case 0:case 11:case 15:Xa(8,Ce,g)}var De=Ce.child;if(De!==null)De.return=Ce,Qe=De;else for(;Qe!==null;){Ce=Qe;var Te=Ce.sibling,Ke=Ce.return;if(nm(Ce),Ce===he){Qe=null;break}if(Te!==null){Te.return=Ke,Qe=Te;break}Qe=Ke}}}var nt=g.alternate;if(nt!==null){var it=nt.child;if(it!==null){nt.child=null;do{var ln=it.sibling;it.sibling=null,it=ln}while(it!==null)}}Qe=g}}if((g.subtreeFlags&2064)!==0&&C!==null)C.return=g,Qe=C;else e:for(;Qe!==null;){if(g=Qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var oe=g.sibling;if(oe!==null){oe.return=g.return,Qe=oe;break e}Qe=g.return}}var ne=n.current;for(Qe=ne;Qe!==null;){C=Qe;var ue=C.child;if((C.subtreeFlags&2064)!==0&&ue!==null)ue.return=C,Qe=ue;else e:for(C=ne;Qe!==null;){if(B=Qe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:hl(9,B)}}catch(ot){an(B,B.return,ot)}if(B===C){Qe=null;break e}var Oe=B.sibling;if(Oe!==null){Oe.return=B.return,Qe=Oe;break e}Qe=B.return}}if(Ot=h,Mr(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Z,n)}catch{}u=!0}return u}finally{at=o,ui.transition=i}}return!1}function vm(n,i,o){i=js(o,i),i=Up(n,i,1),n=wr(n,i,1),i=zn(),n!==null&&(sn(n,1,i),Wn(n,i))}function an(n,i,o){if(n.tag===3)vm(n,n,o);else for(;i!==null;){if(i.tag===3){vm(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Tr===null||!Tr.has(u))){n=js(o,n),n=Fp(i,n,1),i=wr(i,n,1),n=zn(),i!==null&&(sn(i,1,n),Wn(i,n));break}}i=i.return}}function M0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=zn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(Cn&o)===o&&(gn===4||gn===3&&(Cn&130023424)===Cn&&500>Zt()-$u?ss(n,0):Xu|=o),Wn(n,i)}function _m(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var o=zn();n=tr(n,i),n!==null&&(sn(n,i,o),Wn(n,o))}function E0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),_m(n,o)}function w0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,h=n.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),_m(n,o)}var ym;ym=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Gn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gn=!1,d0(n,i,o);Gn=(n.flags&131072)!==0}else Gn=!1,Jt&&(i.flags&1048576)!==0&&Jh(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;dl(n,i),n=i.pendingProps;var h=Ls(i,Pn.current);Os(i,o),h=wu(null,i,u,n,h,o);var g=bu();return i.flags|=1,typeof h=="object"&&h!==null&&typeof h.render=="function"&&h.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(g=!0,$o(i)):g=!1,i.memoizedState=h.state!==null&&h.state!==void 0?h.state:null,xu(i),h.updater=cl,i.stateNode=h,h._reactInternals=i,Pu(i,u,n,o),i=ku(null,i,u,!0,g,o)):(i.tag=0,Jt&&g&&ou(i),On(null,i,h,o),i=i.child),i;case 16:u=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,h=u._init,u=h(u._payload),i.type=u,h=i.tag=T0(u),n=yi(u,n),h){case 0:i=Iu(null,i,u,n,o);break e;case 1:i=Xp(null,i,u,n,o);break e;case 11:i=Bp(null,i,u,n,o);break e;case 14:i=Hp(null,i,u,yi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yi(u,h),Iu(n,i,u,h,o);case 1:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yi(u,h),Xp(n,i,u,h,o);case 3:e:{if($p(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,h=g.element,lp(n,i),nl(i,u,null,o);var C=i.memoizedState;if(u=C.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:C.cache,pendingSuspenseBoundaries:C.pendingSuspenseBoundaries,transitions:C.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){h=js(Error(t(423)),i),i=qp(n,i,u,o,h);break e}else if(u!==h){h=js(Error(t(424)),i),i=qp(n,i,u,o,h);break e}else for(ei=_r(i.stateNode.containerInfo.firstChild),Jn=i,Jt=!0,_i=null,o=ap(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ks(),u===h){i=ir(n,i,o);break e}On(n,i,u,o)}i=i.child}return i;case 5:return dp(i),n===null&&uu(i),u=i.type,h=i.pendingProps,g=n!==null?n.memoizedProps:null,C=h.children,tu(u,h)?C=null:g!==null&&tu(u,g)&&(i.flags|=32),Wp(n,i),On(n,i,C,o),i.child;case 6:return n===null&&uu(i),null;case 13:return Yp(n,i,o);case 4:return vu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Us(i,null,u,o):On(n,i,u,o),i.child;case 11:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yi(u,h),Bp(n,i,u,h,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,h=i.pendingProps,g=i.memoizedProps,C=h.value,$t(Jo,u._currentValue),u._currentValue=C,g!==null)if(vi(g.value,C)){if(g.children===h.children&&!Bn.current){i=ir(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){C=g.child;for(var Q=B.firstContext;Q!==null;){if(Q.context===u){if(g.tag===1){Q=nr(-1,o&-o),Q.tag=2;var he=g.updateQueue;if(he!==null){he=he.shared;var Ce=he.pending;Ce===null?Q.next=Q:(Q.next=Ce.next,Ce.next=Q),he.pending=Q}}g.lanes|=o,Q=g.alternate,Q!==null&&(Q.lanes|=o),mu(g.return,o,i),B.lanes|=o;break}Q=Q.next}}else if(g.tag===10)C=g.type===i.type?null:g.child;else if(g.tag===18){if(C=g.return,C===null)throw Error(t(341));C.lanes|=o,B=C.alternate,B!==null&&(B.lanes|=o),mu(C,o,i),C=g.sibling}else C=g.child;if(C!==null)C.return=g;else for(C=g;C!==null;){if(C===i){C=null;break}if(g=C.sibling,g!==null){g.return=C.return,C=g;break}C=C.return}g=C}On(n,i,h.children,o),i=i.child}return i;case 9:return h=i.type,u=i.pendingProps.children,Os(i,o),h=li(h),u=u(h),i.flags|=1,On(n,i,u,o),i.child;case 14:return u=i.type,h=yi(u,i.pendingProps),h=yi(u.type,h),Hp(n,i,u,h,o);case 15:return Gp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,h=i.pendingProps,h=i.elementType===u?h:yi(u,h),dl(n,i),i.tag=1,Hn(u)?(n=!0,$o(i)):n=!1,Os(i,o),Ip(i,u,h),Pu(i,u,h,o),ku(null,i,u,!0,n,o);case 19:return Zp(n,i,o);case 22:return Vp(n,i,o)}throw Error(t(156,i.tag))};function Sm(n,i){return va(n,i)}function b0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function di(n,i,o,u){return new b0(n,i,o,u)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function T0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===$)return 14}return 2}function Rr(n,i){var o=n.alternate;return o===null?(o=di(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ml(n,i,o,u,h,g){var C=2;if(u=n,typeof n=="function")td(n)&&(C=1);else if(typeof n=="string")C=5;else e:switch(n){case E:return os(o.children,h,g,i);case L:C=8,h|=8;break;case H:return n=di(12,o,i,h|2),n.elementType=H,n.lanes=g,n;case J:return n=di(13,o,i,h),n.elementType=J,n.lanes=g,n;case j:return n=di(19,o,i,h),n.elementType=j,n.lanes=g,n;case q:return El(o,h,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:C=10;break e;case W:C=9;break e;case ie:C=11;break e;case $:C=14;break e;case te:C=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=di(C,o,i,h),i.elementType=n,i.type=u,i.lanes=g,i}function os(n,i,o,u){return n=di(7,n,u,i),n.lanes=o,n}function El(n,i,o,u){return n=di(22,n,u,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function nd(n,i,o){return n=di(6,n,null,i),n.lanes=o,n}function id(n,i,o){return i=di(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function C0(n,i,o,u,h){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=u,this.onRecoverableError=h,this.mutableSourceEagerHydrationData=null}function rd(n,i,o,u,h,g,C,B,Q){return n=new C0(n,i,o,B,Q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=di(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(g),n}function A0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function Mm(n){if(!n)return Sr;n=n._reactInternals;e:{if(Ri(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return Kh(n,o,i)}return i}function Em(n,i,o,u,h,g,C,B,Q){return n=rd(o,u,!0,n,h,g,C,B,Q),n.context=Mm(null),o=n.current,u=zn(),h=Ar(o),g=nr(u,h),g.callback=i??null,wr(o,g,h),n.current.lanes=h,sn(n,h,u),Wn(n,u),n}function wl(n,i,o,u){var h=i.current,g=zn(),C=Ar(h);return o=Mm(o),i.context===null?i.context=o:i.pendingContext=o,i=nr(g,C),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=wr(h,i,C),n!==null&&(Ei(n,h,C,g),tl(n,h,C)),C}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function wm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function sd(n,i){wm(n,i),(n=n.alternate)&&wm(n,i)}function N0(){return null}var bm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Tl.prototype.render=ad.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},Tl.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){wl(null,n,null,null)}),i[Zi]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Di();n={blockedOn:null,target:n,priority:i};for(var o=0;o<gr.length&&i!==0&&i<gr[o].priority;o++);gr.splice(o,0,n),o===0&&dh(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tm(){}function R0(n,i,o,u,h){if(h){if(typeof u=="function"){var g=u;u=function(){var he=bl(C);g.call(he)}}var C=Em(i,u,n,0,null,!1,!1,"",Tm);return n._reactRootContainer=C,n[Zi]=C.current,Da(n.nodeType===8?n.parentNode:n),rs(),C}for(;h=n.lastChild;)n.removeChild(h);if(typeof u=="function"){var B=u;u=function(){var he=bl(Q);B.call(he)}}var Q=rd(n,0,!1,null,null,!1,!1,"",Tm);return n._reactRootContainer=Q,n[Zi]=Q.current,Da(n.nodeType===8?n.parentNode:n),rs(function(){wl(i,Q,o,u)}),Q}function Al(n,i,o,u,h){var g=o._reactRootContainer;if(g){var C=g;if(typeof h=="function"){var B=h;h=function(){var Q=bl(C);B.call(Q)}}wl(i,C,n,h)}else C=R0(o,i,n,h,u);return bl(C)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(hn(i,o|1),Wn(i,Zt()),(Ot&6)===0&&(Gs=Zt()+500,Mr()))}break;case 13:rs(function(){var u=tr(n,1);if(u!==null){var h=zn();Ei(u,n,1,h)}}),sd(n,1)}},pr=function(n){if(n.tag===13){var i=tr(n,134217728);if(i!==null){var o=zn();Ei(i,n,134217728,o)}sd(n,134217728)}},xi=function(n){if(n.tag===13){var i=Ar(n),o=tr(n,i);if(o!==null){var u=zn();Ei(o,n,i,u)}sd(n,i)}},Di=function(){return at},Pt=function(n,i){var o=at;try{return at=n,i()}finally{at=o}},xe=function(n,i,o){switch(i){case"input":if(wt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var h=Wo(u);if(!h)throw Error(t(90));_t(u),wt(u,h)}}}break;case"textarea":k(n,o);break;case"select":i=o.value,i!=null&&At(n,!!o.multiple,i,!1)}},Fe=Qu,je=rs;var P0={usingClientEntryPoint:!1,Events:[Ua,Rs,Wo,me,Be,Qu]},Ka={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},L0={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:A.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||N0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Nl.isDisabled&&Nl.supportsFiber)try{Z=Nl.inject(L0),ce=Nl}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=P0,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(i))throw Error(t(200));return A0(n,i,null,o)},Xn.createRoot=function(n,i){if(!od(n))throw Error(t(299));var o=!1,u="",h=bm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(h=i.onRecoverableError)),i=rd(n,1,!1,null,null,o,!1,u,h),n[Zi]=i.current,Da(n.nodeType===8?n.parentNode:n),new ad(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return rs(n)},Xn.hydrate=function(n,i,o){if(!Cl(i))throw Error(t(200));return Al(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!od(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,h=!1,g="",C=bm;if(o!=null&&(o.unstable_strictMode===!0&&(h=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(C=o.onRecoverableError)),i=Em(i,null,n,1,o??null,h,!1,g,C),n[Zi]=i.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],h=o._getVersion,h=h(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,h]:i.mutableSourceEagerHydrationData.push(o,h);return new Tl(i)},Xn.render=function(n,i,o){if(!Cl(i))throw Error(t(200));return Al(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Al(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Qu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Al(n,i,o,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Im;function B0(){if(Im)return ud.exports;Im=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=j0(),ud.exports}var km;function H0(){if(km)return Rl;km=1;var s=B0();return Rl.createRoot=s.createRoot,Rl.hydrateRoot=s.hydrateRoot,Rl}var G0=H0();const V0=qg(G0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Yg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var X0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $0=G.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...f},p)=>G.createElement("svg",{ref:p,...X0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Yg("lucide",l),...f},[...d.map(([m,v])=>G.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(s,e)=>{const t=G.forwardRef(({className:r,...l},c)=>G.createElement($0,{ref:c,iconNode:e,className:Yg(`lucide-${W0(s)}`,r),...l}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Kg=qe("Activity",q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],hc=qe("ArrowLeft",Y0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K0=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],co=qe("ArrowRight",K0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],Q0=qe("ArrowUpRight",Z0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],Zg=qe("Captions",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wn=qe("Check",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],n_=qe("ChevronDown",t_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],r_=qe("ChevronRight",i_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],a_=qe("ChevronUp",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uo=qe("CircleAlert",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const l_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xd=qe("CircleCheckBig",l_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Qg=qe("CircleCheck",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],Gr=qe("Clock",u_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],f_=qe("Compass",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],aa=qe("Copy",h_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],m_=qe("CornerDownLeft",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],Um=qe("Download",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],Fm=qe("EllipsisVertical",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Om=qe("ExternalLink",v_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Jg=qe("EyeOff",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],ex=qe("Eye",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],pi=qe("Film",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],Or=qe("FolderMinus",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],hs=qe("FolderOpen",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],tx=qe("FolderPlus",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],rc=qe("FolderSync",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ao=qe("Folder",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Tc=qe("Globe",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],zm=qe("Grid3x3",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],$i=qe("HardDrive",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Hi=qe("Heart",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],jm=qe("House",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],pc=qe("Image",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],fo=qe("Info",D_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],k_=qe("Key",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Bf=qe("Layers",U_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],O_=qe("LayoutDashboard",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],j_=qe("LayoutGrid",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],H_=qe("List",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cc=qe("Lock",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Bm=qe("LogOut",V_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],X_=qe("Maximize",W_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],q_=qe("Minimize",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Hf=qe("Monitor",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K_=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],hd=qe("Pause",K_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],fn=qe("Play",Z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Gf=qe("Plus",Q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],ey=qe("QrCode",J_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],ny=qe("Radio",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ni=qe("RefreshCw",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ry=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oo=qe("RotateCcw",ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],sc=qe("RotateCw",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ay=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ps=qe("Search",ay);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],ly=qe("Server",oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],uy=qe("Shield",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],nx=qe("SlidersVertical",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],mi=qe("Sparkles",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hy=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],mc=qe("SquareCheckBig",hy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const py=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ca=qe("Square",py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],gy=qe("Tag",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Vr=qe("Trash2",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],_y=qe("TrendingUp",vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],ho=qe("TriangleAlert",yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sy=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],My=qe("Upload",Sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],wy=qe("UserPlus",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],ix=qe("User",by);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Vf=qe("Users",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Cy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Ay=qe("Volume2",Cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],Ry=qe("VolumeX",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Ly=qe("WifiOff",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dy=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],Iy=qe("Wifi",Dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ky=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wi=qe("X",ky);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],rx=qe("Zap",Uy);function fs(){if(typeof window<"u"){const s=localStorage.getItem("streamlink_api_url");if(s){const e=s.trim().replace(/\/+$/,"");if(e.includes("your-temporary-url")||e.includes("your-tunnel")||e.includes("sponsored-fee-imposed-associations")||e==="https://"||e==="http://")localStorage.removeItem("streamlink_api_url");else return e}}return"".trim().replace(/\/+$/,"")}function Hm(s){typeof window<"u"&&(!s||!s.trim()?localStorage.removeItem("streamlink_api_url"):localStorage.setItem("streamlink_api_url",s.trim().replace(/\/+$/,"")))}function cn(s){if(!s)return"";if(s.startsWith("http://")||s.startsWith("https://"))return s;const e=fs(),t=s.startsWith("/")?s:`/${s}`;return e?`${e}${t}`:t}const sx=G.createContext(null);function Fy({children:s}){const[e,t]=G.useState(null),[r,l]=G.useState(()=>localStorage.getItem("streamlink_token")),[c,d]=G.useState(!0);G.useEffect(()=>{r?fetch(cn("/api/auth/me"),{headers:{Authorization:`Bearer ${r}`}}).then(v=>{if(v.ok)return v.json();throw new Error("Session invalid")}).then(v=>{t(v.user)}).catch(()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)}).finally(()=>d(!1)):d(!1)},[r]);const f=async(v,M)=>{const _=await fetch(cn("/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:M})}),S=await _.json();if(!_.ok)throw new Error(S.error||"Login failed");return localStorage.setItem("streamlink_token",S.token),l(S.token),t(S.user),S.user},p=()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)},m=(v,M={})=>{const _={...M.headers,Authorization:`Bearer ${r}`};return fetch(cn(v),{...M,headers:_})};return a.jsx(sx.Provider,{value:{user:e,token:r,login:f,logout:p,authFetch:m,loading:c},children:s})}function Wf(){return G.useContext(sx)}function Oy({currentView:s,setCurrentView:e,onOpenSearch:t,onOpenProfiles:r,onOpenQuality:l,currentProfile:c,qualityLevel:d="high"}){var m,v,M,_,S,b,w,x;const{user:f,logout:p}=Wf();return a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"app-mobile-top-bar",children:[a.jsxs("div",{className:"mobile-brand-pill",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(pi,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"mobile-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"mobile-version-tag",children:"2.0"})]}),a.jsxs("span",{className:"mobile-live-dot",title:"Server Online",children:[a.jsx(ny,{size:11,className:"pulse-icon"}),"LIVE"]})]}),a.jsxs("div",{className:"mobile-top-right",children:[a.jsx("button",{className:"mobile-search-btn",onClick:t,title:"Search (/)",children:a.jsx(ps,{size:16})}),a.jsx("button",{className:"mobile-profile-btn",onClick:r,style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},title:"Switch Profile",children:a.jsx("span",{children:((v=(m=c==null?void 0:c.name)==null?void 0:m[0])==null?void 0:v.toUpperCase())||((_=(M=f==null?void 0:f.username)==null?void 0:M[0])==null?void 0:_.toUpperCase())||"U"})}),a.jsx("button",{className:"mobile-logout-btn",onClick:p,title:"Sign Out",children:a.jsx(Bm,{size:15})})]})]}),a.jsxs("aside",{className:"app-sidebar",children:[a.jsxs("div",{className:"sidebar-brand",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(pi,{size:20,strokeWidth:2.5})}),a.jsxs("div",{className:"sidebar-brand-text",children:[a.jsxs("span",{children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})," ",a.jsx("span",{className:"version-pill",children:"2.0"})]}),a.jsx("span",{className:"sidebar-brand-sub",children:"OBSIDIAN CINEMA"})]})]}),a.jsxs("div",{className:"sidebar-search-action",onClick:t,children:[a.jsx(ps,{size:15,className:"text-cyan"}),a.jsx("span",{children:"Dimensional Search"}),a.jsx("kbd",{className:"sidebar-kbd",children:"/"})]}),a.jsxs("nav",{className:"sidebar-nav",children:[a.jsx("div",{className:"sidebar-nav-section-label",children:"EXPERIENCE"}),a.jsxs("button",{className:`sidebar-nav-item cine3d-nav-item ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(mi,{size:18,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D Lobby"}),a.jsx("span",{className:"sidebar-badge-new",children:"3D"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(jm,{size:18}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(pi,{size:18}),a.jsx("span",{children:"Movie Library"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Hi,{size:18}),a.jsx("span",{children:"My List & Favorites"})]}),(f==null?void 0:f.role)==="admin"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SERVER & CONTROL"}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder-sharing"?"active":""}`,onClick:()=>e("folder-sharing"),children:[a.jsx(rc,{size:18}),a.jsx("span",{children:"Folder Sharing"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder"?"active":""}`,onClick:()=>e("folder"),children:[a.jsx(hs,{size:18}),a.jsx("span",{children:"Movie Folder"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="sharing"?"active":""}`,onClick:()=>e("sharing"),children:[a.jsx(Tc,{size:18}),a.jsx("span",{children:"Sharing Hub"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[a.jsx(O_,{size:18}),a.jsx("span",{children:"Server Dashboard"})]})]}),a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SYSTEM & QUALITY"}),a.jsxs("button",{className:"sidebar-nav-item quality-nav-pill",onClick:l,children:[a.jsx(nx,{size:17,className:"text-cyan"}),a.jsxs("div",{style:{flex:1,textAlign:"left"},children:[a.jsx("div",{children:"Quality Manager"}),a.jsx("div",{className:"sidebar-quality-badge",children:d.toUpperCase()})]})]}),a.jsxs("button",{className:"sidebar-nav-item",onClick:r,children:[a.jsx(Vf,{size:17}),a.jsx("span",{children:"Switch Profile"})]})]}),a.jsx("div",{className:"sidebar-footer",children:a.jsxs("div",{className:"sidebar-user-pill",onClick:r,title:"Manage Profiles",children:[a.jsx("div",{className:"user-avatar-dot",style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},children:a.jsx("span",{children:((b=(S=c==null?void 0:c.name)==null?void 0:S[0])==null?void 0:b.toUpperCase())||((x=(w=f==null?void 0:f.username)==null?void 0:w[0])==null?void 0:x.toUpperCase())||"U"})}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{className:"sidebar-username",children:(c==null?void 0:c.name)||(f==null?void 0:f.username)}),a.jsx("div",{className:"sidebar-role",children:(f==null?void 0:f.role)==="admin"?"Host Administrator":"Viewer"})]}),a.jsx("button",{className:"sidebar-logout-btn",onClick:y=>{y.stopPropagation(),p()},title:"Sign Out",children:a.jsx(Bm,{size:15})})]})})]}),a.jsxs("nav",{className:"app-mobile-bottom-nav",children:[a.jsxs("button",{className:`mobile-nav-btn ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(jm,{size:20}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`mobile-nav-btn cine3d-btn ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(mi,{size:20,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(pi,{size:20}),a.jsx("span",{children:"Library"})]}),a.jsxs("button",{className:"mobile-nav-btn",onClick:t,children:[a.jsx(ps,{size:20}),a.jsx("span",{children:"Search"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Hi,{size:20}),a.jsx("span",{children:"My List"})]})]})]})}function Wr(s){if(!s||s<=0)return"Unknown";const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function si(s){if(!s||s<=0)return"0 MB";const e=s/(1024*1024*1024);return e>=1?`${e.toFixed(2)} GB`:`${(s/(1024*1024)).toFixed(0)} MB`}function zr({movie:s,onSelect:e,onToggleFavorite:t,onPlay:r,onChangePoster:l,onRemoveMovie:c,onDeleteFile:d,viewMode:f="grid",isSelectMode:p=!1,isSelected:m=!1,onToggleSelect:v=null}){const M=G.useRef(null),_=G.useRef(null),[S,b]=G.useState(!1),[w,x]=G.useState(!1),[y,P]=G.useState({x:0,y:0}),[D,A]=G.useState(!1);G.useEffect(()=>{if(!w)return;const z=W=>{_.current&&!_.current.contains(W.target)&&x(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[w]);const I=s.duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.duration*100)):s.watched_duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.watched_duration*100)):0,U=z=>{if(!M.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches||p)return;const W=M.current.getBoundingClientRect(),ie=(z.clientX-W.left)/W.width,j=((z.clientY-W.top)/W.height-.5)*-8,$=(ie-.5)*8;P({x:j,y:$})},E=()=>{b(!0)},L=()=>{b(!1),P({x:0,y:0})},H=z=>{p?v&&v(s.id):e&&e(s)};return f==="list"?a.jsxs("div",{className:`movie-list-item ${m?"selected":""}`,onClick:H,children:[p&&a.jsx("button",{className:"select-checkbox-btn",onClick:z=>{z.stopPropagation(),v&&v(s.id)},children:m?a.jsx(mc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"})}),a.jsxs("div",{className:"movie-list-thumb",children:[a.jsx("img",{src:cn(D?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,onError:()=>A(!0),loading:"lazy"}),!p&&r&&a.jsx("button",{className:"list-play-overlay",onClick:z=>{z.stopPropagation(),r(s)},title:"Play Movie",children:a.jsx(fn,{size:16,fill:"#ffffff"})})]}),a.jsxs("div",{className:"movie-list-info",children:[a.jsxs("div",{className:"movie-list-title-row",children:[a.jsx("h4",{className:"movie-list-title",title:s.clean_title,children:s.clean_title}),s.resolution&&a.jsx("span",{className:"badge-studio",children:s.resolution})]}),a.jsxs("div",{className:"movie-list-meta",children:[s.year&&a.jsx("span",{className:"meta-tag",children:s.year}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:12})," ",Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:12})," ",si(s.file_size)]}),s.codec&&a.jsx("span",{className:"meta-tag",children:s.codec})]})]}),a.jsxs("div",{className:"movie-list-actions",children:[t&&a.jsx("button",{className:`fav-btn-clean ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Hi,{size:16,fill:s.is_favorite?"currentColor":"none"})}),!p&&r&&a.jsxs("button",{className:"btn-primary-sm",onClick:z=>{z.stopPropagation(),r(s)},children:[a.jsx(fn,{size:13,fill:"#ffffff"}),a.jsx("span",{children:"Watch"})]}),a.jsxs("div",{className:"card-menu-container",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!w)},title:"Movie options",children:a.jsx(Fm,{size:16})}),w&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(fn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Hi,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(pc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Or,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]})]})]}):a.jsxs("div",{ref:M,className:`movie-card-3d ${S?"hovered":""} ${m?"selected":""}`,onMouseMove:U,onMouseEnter:E,onMouseLeave:L,onClick:H,style:{transform:S&&!p?`perspective(800px) rotateX(${y.x}deg) rotateY(${y.y}deg) translateY(-5px)`:"perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:cn(D?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:s.clean_title,className:"poster-img-3d",onError:()=>A(!0),loading:"lazy"}),a.jsx("div",{className:"poster-vignette"}),p?a.jsx("div",{className:"select-checkbox-overlay",onClick:z=>{z.stopPropagation(),v&&v(s.id)},children:m?a.jsx(mc,{size:22,className:"checkbox-icon checked"}):a.jsx(ca,{size:22,className:"checkbox-icon"})}):a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("button",{className:"play-circle-3d",onClick:z=>{r&&(z.stopPropagation(),r(s))},title:"Play Movie",children:a.jsx(fn,{size:22,fill:"#ffffff",strokeWidth:0})})}),s.resolution&&a.jsx("span",{className:"badge-studio badge-top-left",children:s.resolution}),s.year&&a.jsx("span",{className:"badge-studio badge-top-right",children:s.year}),!p&&a.jsxs("div",{className:"card-menu-container top-right-ctrl",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!w)},title:"Movie options",children:a.jsx(Fm,{size:16})}),w&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(fn,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(fo,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Hi,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(pc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(Or,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]}),!p&&t&&a.jsx("button",{className:`fav-btn-3d ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Hi,{size:14,fill:s.is_favorite?"currentColor":"none"})}),I>0&&a.jsx("div",{className:"progress-bar-container-3d",children:a.jsx("div",{className:"progress-bar-fill-3d",style:{width:`${I}%`}})})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:s.clean_title,children:s.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11}),Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11}),si(s.file_size)]})]})]})]})}const pd=new Map;async function ax(s){return s?pd.has(s)?pd.get(s):new Promise(e=>{const t=new Image;t.crossOrigin="Anonymous",t.onload=()=>{try{const r=document.createElement("canvas");r.width=24,r.height=24;const l=r.getContext("2d");if(!l){e("#B69AFF");return}l.drawImage(t,0,0,24,24);const c=l.getImageData(0,0,24,24).data;let d=0,f=0,p=0,m=0;for(let M=0;M<c.length;M+=4){const _=c[M],S=c[M+1],b=c[M+2],w=.299*_+.587*S+.114*b;w>30&&w<220&&(d+=_,f+=S,p+=b,m++)}let v="#B69AFF";if(m>0){const M=Math.round(d/m),_=Math.round(f/m),S=Math.round(p/m);v=`rgb(${M}, ${_}, ${S})`}pd.set(s,v),e(v)}catch{e("#B69AFF")}},t.onerror=()=>{e("#B69AFF")},t.src=s}):"#B69AFF"}function zy({movie:s,onPlay:e,onDetails:t,onEnterCine3D:r,onToggleFavorite:l,isFavorite:c}){const d=G.useRef(null),[f,p]=G.useState({x:0,y:0}),[m,v]=G.useState("#B69AFF");if(G.useEffect(()=>{if(s!=null&&s.id){const S=cn(`/api/movies/${s.id}/backdrop`);ax(S).then(b=>v(b))}},[s==null?void 0:s.id]),!s)return null;const M=S=>{if(!d.current||!window.matchMedia("(pointer: fine)").matches)return;const b=d.current.getBoundingClientRect(),w=((S.clientX-b.left)/b.width-.5)*2,x=((S.clientY-b.top)/b.height-.5)*2;p({x:w*12,y:x*8})},_=()=>{p({x:0,y:0})};return a.jsxs("div",{ref:d,className:"hero-section-3d",onMouseMove:M,onMouseLeave:_,children:[a.jsxs("div",{className:"hero-backdrop-layer",style:{transform:`translate3d(${f.x*-1}px, ${f.y*-1}px, 0) scale(1.05)`},children:[a.jsx("img",{src:cn(`/api/movies/${s.id}/backdrop`),alt:s.clean_title,className:"hero-bg-image"}),a.jsx("div",{className:"hero-gradient-overlay"})]}),a.jsx("div",{className:"hero-accent-light",style:{transform:`translate3d(${f.x*1.5}px, ${f.y*1.5}px, 0)`,background:`radial-gradient(circle, ${m}33 0%, ${m}11 50%, transparent 70%)`}}),a.jsxs("div",{className:"hero-content-layer",style:{transform:`translate3d(${f.x*.5}px, ${f.y*.5}px, 0)`},children:[a.jsxs("div",{className:"hero-badge-row",children:[a.jsxs("span",{className:"hero-badge-pill",children:[a.jsx(mi,{size:13,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"FEATURED CINEMA STREAM"})]}),s.resolution&&a.jsxs("span",{className:"hero-badge-quality",children:[s.resolution," ULTRA HD"]}),s.genre&&a.jsx("span",{className:"hero-badge-genre",children:s.genre}),s.year&&a.jsx("span",{className:"hero-badge-year",children:s.year}),s.duration>0&&a.jsxs("span",{className:"hero-badge-duration",children:[a.jsx(Gr,{size:12}),Wr(s.duration)]})]}),a.jsx("h1",{className:"hero-title",children:s.clean_title}),a.jsx("p",{className:"hero-description",children:s.description||"Direct high-bitrate streaming from your host Windows workstation. Multi-channel audio, dynamic range seeking, and zero cloud compression."}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsxs("button",{className:"hero-btn-play",onClick:()=>e(s),children:[a.jsx(fn,{size:18,fill:"#ffffff"}),a.jsx("span",{children:"Watch Now"})]}),r&&a.jsxs("button",{className:"hero-btn-cine3d",onClick:r,children:[a.jsx(mi,{size:16,className:"text-cyan"}),a.jsx("span",{children:"Enter in CINE-3D"})]}),a.jsxs("button",{className:"hero-btn-details",onClick:()=>t(s),children:[a.jsx(fo,{size:18}),a.jsx("span",{children:"More Details"})]})]})]})]})}function jy({onSelectMovie:s,onPlayMovie:e,authFetch:t,onNavigateLibrary:r,onOpenFolderPicker:l,onNavigateCine3D:c}){const[d,f]=G.useState({featured:null,continueWatching:[],recentlyAdded:[],popular:[],favorites:[],genreCollections:[]}),[p,m]=G.useState([]),[v,M]=G.useState(!0),_=()=>{M(!0),Promise.all([t("/api/movies/sections/home").then(w=>w.json()),t("/api/user/recommendations").then(w=>w.json()).catch(()=>({recommendations:[]}))]).then(([w,x])=>{f({featured:w.featured||null,continueWatching:w.continueWatching||[],recentlyAdded:w.recentlyAdded||[],popular:w.popular||[],favorites:w.favorites||[],genreCollections:w.genreCollections||[]}),m(x.recommendations||[])}).catch(()=>{}).finally(()=>M(!1))};G.useEffect(()=>{_()},[]);const S=async w=>{try{const y=await(await t(`/api/user/favorites/${w}`,{method:"POST"})).json();f(P=>({...P,recentlyAdded:P.recentlyAdded.map(D=>D.id===w?{...D,is_favorite:y.favorited?1:0}:D),popular:P.popular.map(D=>D.id===w?{...D,is_favorite:y.favorited?1:0}:D),favorites:y.favorited?[...P.favorites,P.recentlyAdded.find(D=>D.id===w)||{id:w,is_favorite:1}]:P.favorites.filter(D=>D.id!==w)}))}catch{}};return v?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading StreamLink 2.0 Cinema..."})]}):d.featured||d.recentlyAdded.length>0?a.jsxs("div",{className:"home-page-container",children:[d.featured&&a.jsx(zy,{movie:d.featured,onPlay:e,onDetails:s,onEnterCine3D:c}),c&&a.jsxs("div",{className:"cine3d-invitation-strip",onClick:c,children:[a.jsxs("div",{className:"strip-left",children:[a.jsxs("div",{className:"strip-sparkle-pill",children:[a.jsx(mi,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"SPATIAL WEBGL CINEMA"})]}),a.jsx("h3",{children:"Explore in CINE-3D Spatial Lobby"}),a.jsx("p",{children:"Step inside an interactive 3D curved cinema carousel with dynamic lighting and spatial controls."})]}),a.jsxs("button",{className:"btn-primary btn-sm",children:[a.jsx("span",{children:"Enter CINE-3D"}),a.jsx(co,{size:14})]})]}),d.continueWatching.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Gr,{size:19,color:"#8B5CF6"}),a.jsx("span",{children:"Continue Watching"})]})}),a.jsx("div",{className:"continue-watching-grid",children:d.continueWatching.map(w=>{const x=w.duration>0?Math.min(100,Math.round(w.progress_seconds/w.duration*100)):50;return a.jsxs("div",{className:"continue-card-3d",onClick:()=>e(w),children:[a.jsxs("div",{className:"continue-poster-thumb",children:[a.jsx("img",{src:cn(`/api/movies/${w.id}/poster`),alt:w.clean_title}),a.jsx("div",{className:"continue-play-overlay",children:a.jsx(fn,{size:20,fill:"#ffffff"})})]}),a.jsxs("div",{className:"continue-info",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"continue-title",title:w.clean_title,children:w.clean_title}),a.jsxs("div",{className:"continue-time",children:[Wr(w.progress_seconds)," of ",Wr(w.duration)," (",x,"%)"]})]}),a.jsx("div",{className:"continue-bar-track",children:a.jsx("div",{className:"continue-bar-fill",style:{width:`${x}%`}})})]})]},w.id)})})]}),p.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(f_,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recommended For You"})]})}),a.jsx("div",{className:"movie-grid-3d",children:p.slice(0,6).map(w=>a.jsx(zr,{movie:w,onSelect:s,onPlay:e,onToggleFavorite:S},w.id))})]}),d.recentlyAdded.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-title",children:[a.jsx(mi,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recently Added"})]}),r&&a.jsxs("button",{className:"section-see-all-btn",onClick:r,children:[a.jsx("span",{children:"View Full Library"}),a.jsx(co,{size:14})]})]}),a.jsx("div",{className:"movie-grid-3d",children:d.recentlyAdded.map(w=>a.jsx(zr,{movie:w,onSelect:s,onPlay:e,onToggleFavorite:S},w.id))})]}),d.genreCollections.map(({genre:w,movies:x})=>a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Bf,{size:19,color:"#A855F7"}),a.jsx("span",{children:w})]})}),a.jsx("div",{className:"movie-grid-3d",children:x.slice(0,6).map(y=>a.jsx(zr,{movie:y,onSelect:s,onPlay:e,onToggleFavorite:S},y.id))})]},w)),d.popular.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(_y,{size:19,color:"#22C55E"}),a.jsx("span",{children:"Popular & Most Watched"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.popular.map(w=>a.jsx(zr,{movie:w,onSelect:s,onPlay:e,onToggleFavorite:S},w.id))})]}),d.favorites.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Hi,{size:19,color:"#EF4444",fill:"#EF4444"}),a.jsx("span",{children:"Your Favorites"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.favorites.map(w=>a.jsx(zr,{movie:w,onSelect:s,onPlay:e,onToggleFavorite:S},w.id))})]})]}):a.jsxs("div",{className:"empty-state-3d",style:{marginTop:"60px"},children:[a.jsx(pi,{size:48,className:"text-dim",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"Your Cinema Library is Empty"}),a.jsx("p",{children:"Connect and scan a movie folder on your host Windows PC to populate your personal streaming theater."}),l&&a.jsxs("button",{className:"btn-primary",onClick:l,children:[a.jsx(tx,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]})}function By({onSelectMovie:s,onPlayMovie:e,authFetch:t,onOpenFolderPicker:r,onNavigateCine3D:l}){const[c,d]=G.useState([]),[f,p]=G.useState(""),[m,v]=G.useState(""),[M,_]=G.useState(""),[S,b]=G.useState(""),[w,x]=G.useState(""),[y,P]=G.useState("all"),[D,A]=G.useState("recent"),[I,U]=G.useState("grid"),[E,L]=G.useState(!0),[H,z]=G.useState(!1),[W,ie]=G.useState(!1),[J,j]=G.useState([]),[$,te]=G.useState(null),[q,ee]=G.useState(null),[O,Y]=G.useState(!1),[F,K]=G.useState(null),[Me,X]=G.useState(""),[le,ye]=G.useState(!1),[Ee,Se]=G.useState(null),Ae=(k,Ve="success")=>{Se({text:k,type:Ve}),setTimeout(()=>{Se(null)},4500)},ht=()=>{L(!0);let k=`/api/movies?sort=${D}`;f.trim()&&(k+=`&q=${encodeURIComponent(f.trim())}`),m&&(k+=`&resolution=${encodeURIComponent(m)}`),M&&(k+=`&year=${encodeURIComponent(M)}`),S&&(k+=`&genre=${encodeURIComponent(S)}`),w&&(k+=`&artworkStatus=${encodeURIComponent(w)}`),t(k).then(Ve=>Ve.json()).then(Ve=>{Ve.movies&&d(Ve.movies)}).catch(()=>{}).finally(()=>L(!1))};G.useEffect(()=>{ht()},[f,m,M,S,w,D]);const Ye=async()=>{z(!0);try{const Ve=await(await t("/api/admin/scan",{method:"POST"})).json();await ht(),Ae(Ve.message||"Library rescan complete!","success")}catch{Ae("Error during library scan","error")}z(!1)},_t=async k=>{try{const ft=await(await t(`/api/user/favorites/${k}`,{method:"POST"})).json();d(gt=>gt.map(Le=>Le.id===k?{...Le,is_favorite:ft.favorited?1:0}:Le))}catch{}},ut=c.filter(k=>y==="watched"?k.progress_seconds&&k.duration&&k.progress_seconds/k.duration>=.9||k.completed===1:y==="unwatched"?!k.progress_seconds||k.progress_seconds<15:!0),lt=Array.from(new Set(c.map(k=>k.year).filter(Boolean))).sort().reverse(),ze=ut.reduce((k,Ve)=>k+(Ve.file_size||0),0),dt=!!(f||m||M||y!=="all"),wt=()=>{p(""),v(""),_(""),b(""),x(""),P("all")},fe=k=>{j(Ve=>Ve.includes(k)?Ve.filter(ft=>ft!==k):[...Ve,k])},be=()=>{J.length===ut.length?j([]):j(ut.map(k=>k.id))},Ie=async()=>{if($){try{const k=await t(`/api/movies/${$.id}/remove`,{method:"POST"}),Ve=await k.json();k.ok?(d(ft=>ft.filter(gt=>gt.id!==$.id)),j(ft=>ft.filter(gt=>gt!==$.id)),Ae(`"${$.clean_title}" removed from library (file preserved on PC)`,"success")):Ae(Ve.error||"Failed to remove movie","error")}catch{Ae("Network error removing movie","error")}te(null)}},At=async()=>{if(q){try{const k=await t(`/api/movies/${q.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:q.clean_title})}),Ve=await k.json();k.ok?(d(ft=>ft.filter(gt=>gt.id!==q.id)),j(ft=>ft.filter(gt=>gt!==q.id)),Ae(`Permanently deleted "${q.clean_title}" from disk`,"warn")):Ae(Ve.error||"Failed to delete movie file","error")}catch{Ae("Network error during file deletion","error")}ee(null)}},Ut=async()=>{if(J.length!==0){try{const k=await t("/api/movies/bulk/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieIds:J})}),Ve=await k.json();k.ok?(d(ft=>ft.filter(gt=>!J.includes(gt.id))),Ae(`Removed ${Ve.removedCount} movies from library (files preserved)`,"success"),j([]),ie(!1)):Ae(Ve.error||"Failed to bulk remove movies","error")}catch{Ae("Network error during bulk removal","error")}Y(!1)}},Pe=async k=>{if(k.preventDefault(),!(!F||!Me.trim())){ye(!0);try{const Ve=await t(`/api/movies/${F.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:Me.trim()})}),ft=await Ve.json();Ve.ok?(Ae("Poster updated successfully!","success"),K(null),X(""),ht()):Ae(ft.error||"Failed to update poster","error")}catch{Ae("Network error saving poster","error")}finally{ye(!1)}}};return a.jsxs("div",{className:"library-page-3d",children:[Ee&&a.jsxs("div",{className:`app-toast-banner ${Ee.type}`,children:[Ee.type==="success"&&a.jsx(Qg,{size:16}),Ee.type==="warn"&&a.jsx(ho,{size:16}),Ee.type==="error"&&a.jsx(uo,{size:16}),a.jsx("span",{children:Ee.text})]}),a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{className:"page-header-info",children:[a.jsx("h1",{className:"page-header-title",children:"Movie Library"}),a.jsxs("p",{className:"page-header-subtitle",children:[ut.length," movies available • Total size: ",si(ze)]})]}),a.jsxs("div",{className:"page-header-actions",children:[l&&a.jsxs("button",{className:"btn-primary",onClick:l,title:"Enter CINE-3D spatial cinema carousel",children:[a.jsx(mi,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"Launch CINE-3D"})]}),a.jsxs("button",{className:`btn-secondary ${W?"active":""}`,onClick:()=>{ie(!W),W&&j([])},title:W?"Cancel Selection":"Manage Multiple Movies",children:[a.jsx(mc,{size:15}),a.jsx("span",{children:W?"Cancel":"Manage"})]}),a.jsxs("div",{className:"view-mode-toggle",children:[a.jsx("button",{className:`view-toggle-btn ${I==="grid"?"active":""}`,onClick:()=>U("grid"),title:"Grid View",children:a.jsx(j_,{size:16})}),a.jsx("button",{className:`view-toggle-btn ${I==="list"?"active":""}`,onClick:()=>U("list"),title:"List View",children:a.jsx(H_,{size:16})})]}),a.jsxs("button",{className:`btn-secondary ${H?"rescan-spinning":""}`,onClick:Ye,disabled:H,title:"Scan movie folder for newly added or changed video files",children:[a.jsx(Ni,{size:15}),a.jsx("span",{children:H?"Scanning...":"Rescan Library"})]})]})]}),W&&a.jsxs("div",{className:"multi-select-toolbar",children:[a.jsxs("div",{className:"select-toolbar-left",children:[a.jsxs("button",{className:"select-all-btn",onClick:be,children:[J.length===ut.length&&ut.length>0?a.jsx(mc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"}),a.jsxs("span",{children:["Select All Visible (",ut.length,")"]})]}),a.jsxs("span",{className:"selected-count-badge",children:[J.length," movie",J.length!==1?"s":""," selected"]})]}),a.jsxs("div",{className:"select-toolbar-right",children:[a.jsxs("button",{className:"btn-danger-sm",disabled:J.length===0,onClick:()=>Y(!0),children:[a.jsx(Or,{size:14}),a.jsxs("span",{children:["Remove Selected (",J.length,")"]})]}),a.jsx("button",{className:"btn-secondary-sm",onClick:()=>{ie(!1),j([])},children:a.jsx("span",{children:"Done"})})]})]}),a.jsxs("div",{className:"library-toolbar",children:[a.jsxs("div",{className:"toolbar-search-box",children:[a.jsx(ps,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Search movie title...",value:f,onChange:k=>p(k.target.value)}),f&&a.jsx("button",{className:"search-clear-btn",onClick:()=>p(""),title:"Clear search",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"toolbar-filters-group",children:[a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:S,onChange:k=>b(k.target.value),children:[a.jsx("option",{value:"",children:"All Genres"}),a.jsx("option",{value:"Action & Adventure",children:"Action & Adventure"}),a.jsx("option",{value:"Anime & Animation",children:"Anime & Animation"}),a.jsx("option",{value:"Horror & Suspense",children:"Horror & Suspense"}),a.jsx("option",{value:"Sci-Fi & Cyber",children:"Sci-Fi & Cyber"}),a.jsx("option",{value:"Thriller & Mystery",children:"Thriller & Mystery"}),a.jsx("option",{value:"Comedy",children:"Comedy"}),a.jsx("option",{value:"Cinema & Drama",children:"Cinema & Drama"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:m,onChange:k=>v(k.target.value),children:[a.jsx("option",{value:"",children:"All Resolutions"}),a.jsx("option",{value:"4K",children:"4K Ultra HD"}),a.jsx("option",{value:"1080P",children:"1080p Full HD"}),a.jsx("option",{value:"720P",children:"720p HD"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:M,onChange:k=>_(k.target.value),children:[a.jsx("option",{value:"",children:"All Years"}),lt.map(k=>a.jsx("option",{value:k,children:k},k))]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:y,onChange:k=>P(k.target.value),children:[a.jsx("option",{value:"all",children:"All Status"}),a.jsx("option",{value:"unwatched",children:"Unwatched"}),a.jsx("option",{value:"watched",children:"Watched"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:w,onChange:k=>x(k.target.value),children:[a.jsx("option",{value:"",children:"All Artwork"}),a.jsx("option",{value:"missing",children:"Missing Artwork"}),a.jsx("option",{value:"uncertain",children:"Uncertain Matches"}),a.jsx("option",{value:"matched",children:"Matched Artwork"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:D,onChange:k=>A(k.target.value),children:[a.jsx("option",{value:"recent",children:"Recently Added"}),a.jsx("option",{value:"title",children:"Title (A-Z)"}),a.jsx("option",{value:"year",children:"Release Year"}),a.jsx("option",{value:"size",children:"Largest File Size"}),a.jsx("option",{value:"duration",children:"Longest Duration"})]})}),dt&&a.jsxs("button",{className:"btn-clear-filters",onClick:wt,title:"Reset all search and filters",children:[a.jsx(Wi,{size:13}),a.jsx("span",{children:"Clear Filters"})]})]})]}),E?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning & loading movies..."})]}):ut.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(pi,{size:48,color:"var(--text-dim)",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"No Movies Found"}),a.jsx("p",{children:dt?"No movies match your active search or filter criteria. Try clearing filters to see all available movies.":"You have not scanned a movie folder yet. Select a folder on your Windows PC to automatically populate your library."}),dt?a.jsxs("button",{className:"btn-secondary",onClick:wt,children:[a.jsx(Wi,{size:15}),a.jsx("span",{children:"Clear Active Filters"})]}):r&&a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx(tx,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]}):I==="list"?a.jsx("div",{className:"movie-list-container",children:ut.map(k=>a.jsx(zr,{movie:k,onSelect:s,onPlay:e,onToggleFavorite:_t,onChangePoster:Ve=>{K(Ve),X("")},onRemoveMovie:Ve=>te(Ve),onDeleteFile:Ve=>ee(Ve),viewMode:"list",isSelectMode:W,isSelected:J.includes(k.id),onToggleSelect:fe},k.id))}):a.jsx("div",{className:"movie-grid-3d",children:ut.map(k=>a.jsx(zr,{movie:k,onSelect:s,onPlay:e,onToggleFavorite:_t,onChangePoster:Ve=>{K(Ve),X("")},onRemoveMovie:Ve=>te(Ve),onDeleteFile:Ve=>ee(Ve),viewMode:"grid",isSelectMode:W,isSelected:J.includes(k.id),onToggleSelect:fe},k.id))}),$&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>te(null),children:a.jsxs("div",{className:"dialog-card",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Or,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Remove from Library?"}),a.jsx("span",{className:"dialog-subtitle",children:$.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["This movie will be removed from your StreamLink library, but your ",a.jsx("strong",{children:"original video file will remain safe and untouched on your computer"}),"."]}),a.jsx("div",{className:"dialog-detail-box",children:a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Location:"}),a.jsx("code",{title:$.file_path,children:$.file_path})]})}),a.jsx("p",{className:"dialog-note",children:"StreamLink will remember this choice so the movie will not reappear when you rescan your library."})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>te(null),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Ie,children:[a.jsx(Or,{size:15}),a.jsx("span",{children:"Remove from Library"})]})]})]})}),q&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>ee(null),children:a.jsxs("div",{className:"dialog-card card-danger-border",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-danger",children:a.jsx(ho,{size:24})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title text-danger",children:"Permanently Delete Video File?"}),a.jsx("span",{className:"dialog-subtitle",children:q.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("div",{className:"danger-alert-box",children:[a.jsx("strong",{children:"WARNING: This action is permanent and cannot be undone!"}),a.jsx("p",{children:"The video file will be permanently deleted from your Windows hard drive."})]}),a.jsxs("div",{className:"dialog-detail-box",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Name:"}),a.jsx("code",{children:q.file_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Path:"}),a.jsx("code",{title:q.file_path,children:q.file_path})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Size:"}),a.jsx("code",{children:si(q.file_size)})]})]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>ee(null),children:"Cancel"}),a.jsxs("button",{className:"btn-danger",onClick:At,children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Permanently Delete File"})]})]})]})}),O&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>Y(!1),children:a.jsxs("div",{className:"dialog-card",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(Or,{size:22})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"dialog-title",children:["Remove ",J.length," Movies from Library?"]}),a.jsx("span",{className:"dialog-subtitle",children:"Original files remain untouched on computer"})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["All ",a.jsxs("strong",{children:[J.length," selected movies"]})," will be removed from your active StreamLink library."]}),a.jsxs("p",{className:"dialog-note",children:["Your original video files on your hard drive will ",a.jsx("strong",{children:"not"})," be deleted. StreamLink will keep them hidden so they will not reappear upon rescan."]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>Y(!1),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Ut,children:[a.jsx(Or,{size:15}),a.jsxs("span",{children:["Remove ",J.length," Movies"]})]})]})]})}),F&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>K(null),children:a.jsxs("div",{className:"dialog-card",onClick:k=>k.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-accent",children:a.jsx(pc,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Change Movie Poster"}),a.jsx("span",{className:"dialog-subtitle",children:F.clean_title})]})]}),a.jsxs("form",{onSubmit:Pe,children:[a.jsxs("div",{className:"dialog-body",children:[a.jsx("p",{children:"Enter an image URL or a local image path on your PC (e.g. D:\\Posters\\cover.jpg):"}),a.jsx("input",{type:"text",className:"dialog-input",placeholder:"https://image.tmdb.org/... or C:\\path\\poster.jpg",value:Me,onChange:k=>X(k.target.value),autoFocus:!0,required:!0})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>K(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:le,children:le?"Downloading & Saving...":"Update Poster"})]})]})]})})]})}function Hy({authFetch:s}){var ze,dt,wt;const[e,t]=G.useState("D:\\Movies"),[r,l]=G.useState("Movies"),[c,d]=G.useState(""),[f,p]=G.useState(""),[m,v]=G.useState(!1),[M,_]=G.useState(!1),[S,b]=G.useState(null),[w,x]=G.useState(""),[y,P]=G.useState([]),[D,A]=G.useState(!0),[I,U]=G.useState(null),[E,L]=G.useState(!1),[H,z]=G.useState(null),[W,ie]=G.useState(!1),[J,j]=G.useState(null),[$,te]=G.useState([]),[q,ee]=G.useState(null),[O,Y]=G.useState(!1),F=async()=>{try{const be=await(await s("/api/admin/drives")).json();be.drives&&te(be.drives)}catch{}},K=async fe=>{try{const be=await s(`/api/admin/browse-directory?path=${encodeURIComponent(fe)}`),Ie=await be.json();if(be.ok){ee(Ie),t(Ie.currentPath);const At=Ie.currentPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(At)}}catch{}},Me=async()=>{try{A(!0);const be=await(await s("/api/share/folder/links")).json();be.links&&P(be.links)}catch{}finally{A(!1)}},X=async()=>{try{const be=await(await s("/api/share/info")).json();U(be)}catch{}};G.useEffect(()=>{Me(),X(),F();const fe=setInterval(X,4e3);return()=>clearInterval(fe)},[]);const le=async()=>{_(!0),x("Opening Windows Folder Dialog on your host PC screen...");try{const be=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();if(be.selectedPath){t(be.selectedPath);const Ie=be.selectedPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Ie),x(`Selected folder: ${be.selectedPath}`),await ye(be.selectedPath)}else x("Folder selection was cancelled.")}catch(fe){x(`Error opening Windows dialog: ${fe.message}`)}finally{_(!1)}},ye=async(fe=e)=>{if(fe){v(!0),x(`Scanning "${fe}" for video files and movie metadata...`),b(null),j(null);try{const be=await s("/api/share/folder/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:fe})}),Ie=await be.json();if(!be.ok)throw new Error(Ie.error||"Scan failed");b(Ie),l(Ie.folderName),x(`Scan complete! Detected ${Ie.movieCount} movies in "${Ie.folderName}".`)}catch(be){x(`Scan error: ${be.message}`)}finally{v(!1)}}},Ee=async fe=>{if(fe&&fe.preventDefault(),!e){alert("Please select a folder first");return}ie(!0),x(`Registering folder "${r}" as a shared streaming resource...`);try{const be=await s("/api/share/folder/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:e,folderName:r,label:c.trim()||`${r} Movies`,passcode:f.trim()})}),Ie=await be.json();if(!be.ok)throw new Error(Ie.error||"Failed to create share link");j(Ie.link),x(`Success! Sharing link generated for "${r}".`),d(""),p(""),await Me()}catch(be){x(`Error generating link: ${be.message}`)}finally{ie(!1)}},Se=async fe=>{try{const be=await s(`/api/share/folder/toggle/${fe}`,{method:"POST"}),Ie=await be.json();if(!be.ok)throw new Error(Ie.error);await Me()}catch(be){alert(be.message)}},Ae=async(fe,be)=>{if(window.confirm(`Delete sharing link for folder "${be}"? Viewers will immediately lose access.`))try{const Ie=await s(`/api/share/folder/${fe}`,{method:"DELETE"}),At=await Ie.json();if(!Ie.ok)throw new Error(At.error);await Me(),(J==null?void 0:J.id)===fe&&j(null)}catch(Ie){alert(Ie.message)}},ht=async fe=>{try{x("Rescanning shared folder on disk...");const be=await s(`/api/share/folder/rescan/${fe}`,{method:"POST"}),Ie=await be.json();if(!be.ok)throw new Error(Ie.error);x(Ie.message),await Me()}catch(be){alert(be.message)}},Ye=async fe=>{L(!0),x(`${fe==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const be=await s(`/api/admin/tunnel/${fe}`,{method:"POST"}),Ie=await be.json();if(!be.ok)throw new Error(Ie.error||"Tunnel command failed");x(Ie.message),await X(),await Me()}catch(be){x(`Tunnel error: ${be.message}`)}finally{L(!1)}},_t=(fe,be)=>{fe&&navigator.clipboard.writeText(fe).then(()=>{z(be),setTimeout(()=>z(null),2500)})},ut=((ze=I==null?void 0:I.remote)==null?void 0:ze.status)==="connected",lt=((dt=I==null?void 0:I.remote)==null?void 0:dt.status)==="starting";return a.jsxs("div",{style:{padding:"0 0 60px"},children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(rc,{size:28,color:"var(--accent)"}),"Folder Sharing"]})}),a.jsx("p",{className:"page-sub-title",children:"Select any local movie folder on your Windows PC and generate a unique, secure streaming link. Viewers only see and stream movies inside the exact folder you choose."})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{className:`status-pill ${ut?"status-pill-green":lt?"status-pill-yellow":"status-pill-red"}`,children:ut?"REMOTE TUNNEL ONLINE":lt?"CONNECTING...":"LOCAL WI-FI ONLY"}),ut?a.jsxs("button",{className:"btn-danger",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>Ye("stop"),disabled:E,title:"Stop Cloudflare Tunnel",children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Stop Tunnel"})]}):a.jsxs("button",{className:"btn-primary",style:{padding:"8px 14px",fontSize:"13px",background:"var(--success)"},onClick:()=>Ye("start"),disabled:E||lt,title:"Start Cloudflare Tunnel to enable streaming outside home Wi-Fi",children:[a.jsx(fn,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Go Worldwide"})]})]})]}),w&&a.jsx("div",{className:"folder-status-box",style:{margin:"0 32px 20px"},children:w}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:30,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"11px",color:"var(--text-dim)",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"SELECTED FOLDER TO SHARE"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"var(--text-primary)",marginTop:"2px"},children:r}),a.jsx("div",{className:"folder-path-display",title:e,style:{marginTop:"4px"},children:e})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 22px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:le,disabled:M||m,children:[a.jsx(Hf,{size:17}),a.jsx("span",{children:"Select Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Y(!O),children:[a.jsx($i,{size:16}),a.jsx("span",{children:O?"Hide Browser":"Browse Drives"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>ye(e),disabled:m||M,children:[a.jsx(Ni,{size:16,className:m?"spin":""}),a.jsx("span",{children:m?"Scanning...":"Scan Folder"})]})]})]}),O&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"10px",fontWeight:600},children:"Select Windows Drive Letter or Navigate Subdirectories:"}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:$.map(fe=>a.jsxs("button",{className:`drive-pill ${e.startsWith(fe)?"active":""}`,onClick:()=>K(fe),children:[a.jsx($i,{size:13}),a.jsx("span",{children:fe})]},fe))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[a.jsx("input",{type:"text",value:e,onChange:fe=>{t(fe.target.value);const be=fe.target.value.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(be)},placeholder:"Type full folder path (e.g. D:\\Movies\\Action)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>K(e),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>ye(e),disabled:m,children:"Scan"})]}),q&&a.jsxs("div",{className:"folder-list-container",children:[q.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>K(q.parentPath),children:[a.jsx(hs,{size:15,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(wt=q.folders)==null?void 0:wt.map(fe=>a.jsxs("div",{className:"folder-list-item",onClick:()=>K(fe.path),children:[a.jsx(hs,{size:15,color:"#fbbf24"}),a.jsx("span",{children:fe.name})]},fe.path))]})]}),S&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Xd,{size:18,color:"var(--success)"}),a.jsxs("span",{style:{fontWeight:700,fontSize:"15px"},children:[S.movieCount,' Movies Found in "',S.folderName,'"']}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["(",si(S.totalBytes),")"]})]}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:["Location: ",S.folderPath]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxHeight:"140px",overflowY:"auto",padding:"4px 0"},children:S.movies.map(fe=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--bg-card)",padding:"6px 12px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)",fontSize:"12px"},children:[a.jsx(pi,{size:13,color:"var(--info)"}),a.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)"},children:fe.clean_title}),fe.resolution&&a.jsx("span",{style:{color:"var(--info)",fontSize:"10px",fontWeight:700},children:fe.resolution}),a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"11px"},children:si(fe.file_size)})]},fe.id))})]}),a.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"18px"},children:[a.jsx("div",{style:{fontSize:"15px",fontWeight:800,marginBottom:"6px"},children:"Generate Secure Sharing Link"}),a.jsxs("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"16px"},children:['Creates a unique web access link restricted exclusively to movies in "',r,'". Viewers cannot view any other folders, files, or settings on your PC.']}),a.jsxs("form",{onSubmit:Ee,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Link Name / Label:"}),a.jsx("input",{type:"text",value:c,onChange:fe=>d(fe.target.value),placeholder:`e.g. ${r} Movies`,style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",value:f,onChange:fe=>p(fe.target.value),placeholder:"e.g. 1234 (leave blank for open access)",style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",height:"42px",padding:"10px 20px",fontSize:"14px",gap:"8px"},disabled:W||!e,children:[a.jsx(Gf,{size:16}),a.jsx("span",{children:W?"Creating...":"Generate Sharing Link"})]})})]})]})]}),J&&a.jsxs("div",{style:{margin:"0 32px 28px",background:"linear-gradient(135deg, rgba(139,124,255,0.12) 0%, rgba(56,189,248,0.06) 100%)",border:"1px solid rgba(139,124,255,0.35)",borderRadius:"var(--radius-lg)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Xd,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800},children:"New Sharing Link Live!"}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["Sharing ",J.movie_count," movies from folder: ",a.jsx("strong",{children:J.folder_name})]})]})]}),a.jsx("span",{className:"status-pill status-pill-green",children:"ACTIVE & READY"})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"260px"},children:[a.jsx("span",{className:"link-text-mono",children:J.activeUrl}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>_t(J.activeUrl,"new_created"),children:[H==="new_created"?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:H==="new_created"?"Copied":"Copy Link"})]})]}),a.jsxs("a",{href:J.activeUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 16px",fontSize:"13px"},children:[a.jsx(Om,{size:15}),a.jsx("span",{children:"Open Sharing Page"})]})]}),J.qrCode&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"16px",padding:"12px 16px",background:"var(--bg-secondary)",borderRadius:"var(--radius-sm)"},children:[a.jsx("img",{src:J.qrCode,alt:"QR Code",style:{width:"80px",height:"80px",borderRadius:"6px",background:"#fff",padding:"4px"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",fontWeight:700},children:"Scan with Phone Camera"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginTop:"2px"},children:"Anyone who scans this code can immediately stream movies from this folder on their phone."})]})]})]}),a.jsxs("div",{style:{margin:"0 32px"},children:[a.jsxs("div",{className:"section-header",style:{padding:"0 0 16px 0"},children:[a.jsxs("div",{className:"section-title",children:[a.jsx(rc,{size:20,color:"var(--primary)"}),a.jsxs("span",{children:["Active Shared Folders (",y.length,")"]})]}),a.jsxs("button",{className:"btn-secondary",onClick:Me,title:"Refresh Shares",children:[a.jsx(Ni,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),D?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading shared folders..."})]}):y.length===0?a.jsxs("div",{className:"empty-state-3d",style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[a.jsx(rc,{size:44,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Folders Shared Yet"}),a.jsx("p",{children:'Select a movie folder above (e.g. D:\\Movies) and click "Generate Sharing Link" to create your first independent folder share link.'})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:y.map(fe=>{const be=fe.activeUrl,Ie=fe.is_active===1;return a.jsxs("div",{style:{background:"var(--bg-card)",border:`1px solid ${Ie?"var(--border)":"rgba(239,68,68,0.2)"}`,borderRadius:"var(--radius-lg)",padding:"20px",display:"flex",flexDirection:"column",gap:"14px",opacity:Ie?1:.75,transition:"border-color var(--transition)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",background:Ie?"rgba(139,124,255,0.15)":"rgba(255,255,255,0.05)",border:Ie?"1px solid rgba(139,124,255,0.3)":"1px solid var(--border)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:Ie?"var(--accent)":"var(--text-dim)",flexShrink:0},children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:800,color:"var(--text-primary)"},children:fe.label||fe.folder_name}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--info)",fontWeight:600},children:["(",fe.movie_count," movies)"]}),fe.hasPasscode&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"2px 8px",borderRadius:"4px"},children:[a.jsx(Cc,{size:11}),"PIN Protected"]})]}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-dim)",fontFamily:"monospace",marginTop:"2px"},title:fe.folder_path,children:["Path: ",fe.folder_path]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`status-pill ${Ie?"status-pill-green":"status-pill-red"}`,children:Ie?"SHARING ACTIVE":"DISABLED"}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:[fe.access_count," streams"]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"240px"},children:[a.jsx("span",{className:"link-text-mono",children:be}),a.jsxs("button",{className:"btn-secondary",style:{padding:"7px 12px",fontSize:"12px"},onClick:()=>_t(be,`folder_${fe.id}`),title:"Copy Sharing Link",children:[H===`folder_${fe.id}`?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:H===`folder_${fe.id}`?"Copied":"Copy"})]})]}),a.jsxs("a",{href:be,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"9px 14px",fontSize:"13px"},title:"Open sharing viewer in a new tab",children:[a.jsx(Om,{size:14}),a.jsx("span",{children:"Open Sharing Page"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap",borderTop:"1px solid var(--border)",paddingTop:"10px"},children:[a.jsxs("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12px"},onClick:()=>ht(fe.id),title:"Rescan folder for new or deleted movies",children:[a.jsx(Ni,{size:13}),a.jsx("span",{children:"Rescan Folder"})]}),a.jsxs("button",{className:Ie?"btn-secondary":"btn-success",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Se(fe.id),children:[Ie?a.jsx(Jg,{size:13}):a.jsx(ex,{size:13}),a.jsx("span",{children:Ie?"Disable Sharing":"Enable Sharing"})]}),a.jsxs("button",{className:"btn-danger",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Ae(fe.id,fe.label||fe.folder_name),children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Delete Share"})]})]})]},fe.id)})})]})]})}function Gy({authFetch:s,onScanSuccess:e,onViewLibrary:t}){var J,j;const[r,l]=G.useState("D:\\Movies"),[c,d]=G.useState(!1),[f,p]=G.useState(0),[m,v]=G.useState(0),[M,_]=G.useState([]),[S,b]=G.useState(null),[w,x]=G.useState(!1),[y,P]=G.useState(!1),[D,A]=G.useState(""),[I,U]=G.useState(null),E=async()=>{try{const te=await(await s("/api/admin/dashboard-stats")).json();te.library&&(l(te.library.folder||"D:\\Movies"),d(te.library.folderExists),p(te.library.totalMovies),v(te.library.totalDiskBytes))}catch{}},L=async()=>{try{const te=await(await s("/api/admin/drives")).json();te.drives&&_(te.drives)}catch{}},H=async $=>{try{const te=await s(`/api/admin/browse-directory?path=${encodeURIComponent($)}`),q=await te.json();te.ok&&(b(q),l(q.currentPath))}catch{}};G.useEffect(()=>{E(),L()},[]);const z=async()=>{P(!0),A("Opening Windows Folder Dialog on your PC host screen...");try{const te=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();te.selectedPath?(l(te.selectedPath),A(`Selected from Windows Dialog: ${te.selectedPath}`),await W(te.selectedPath)):A("Folder selection was cancelled.")}catch($){A(`Error launching Windows dialog: ${$.message}`)}finally{P(!1)}},W=async($=r)=>{if($){x(!0),A(`Scanning "${$}" for video files and metadata...`),U(null);try{const te=await s("/api/admin/library-folder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folder:$})}),q=await te.json();if(!te.ok)throw new Error(q.error||"Scan failed");U(q.scanResult),A(`Scan complete! Found ${q.scanResult.totalFiles} files (${q.scanResult.added} new, ${q.scanResult.updated} verified).`),await E(),e&&e($)}catch(te){A(`Scan Error: ${te.message}`)}finally{x(!1)}}},ie=async()=>{x(!0),A("Rescanning library folder for new or removed movies...");try{const $=await s("/api/admin/rescan",{method:"POST"}),te=await $.json();if(!$.ok)throw new Error(te.error||"Rescan failed");U(te.scanResult),A(`Rescan complete! ${te.scanResult.totalFiles} movies in library.`),await E()}catch($){A(`Rescan Error: ${$.message}`)}finally{x(!1)}};return a.jsxs("div",{className:"folder-page-container",children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Movie Folder Management"}),a.jsx("p",{className:"page-sub-title",children:"Select any local folder on your Windows PC to automatically scan, index, and stream your movies."})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"10px 20px",gap:"8px"},onClick:()=>W(),disabled:w||y,children:[a.jsx(Ni,{size:16,className:w?"spin":""}),a.jsx("span",{children:w?"Scanning...":"Scan Movies"})]}),a.jsx("button",{className:"btn-secondary",onClick:ie,disabled:w||y,children:a.jsx("span",{children:"Refresh Library"})})]})]}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(hs,{size:28,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)",fontWeight:600},children:"CURRENT MOVIE DIRECTORY"}),a.jsx("div",{className:"folder-path-display",title:r,children:r})]})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:a.jsxs("div",{className:`folder-status-pill ${c?"status-connected":"status-missing"}`,children:[c?a.jsx(Xd,{size:15}):a.jsx(ho,{size:15}),a.jsx("span",{children:c?"Connected & Accessible":"Path Not Found on Host PC"})]})})]}),a.jsxs("div",{className:"folder-actions-row",children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 24px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:z,disabled:y||w,children:[a.jsx(Hf,{size:18}),a.jsx("span",{children:"Select Movie Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>H(r),children:[a.jsx(ao,{size:16}),a.jsx("span",{children:"Change Folder via Browser"})]})]}),a.jsxs("div",{className:"folder-stats-bar",children:[a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Total Movies Detected:"}),a.jsx("span",{className:"folder-stat-val text-red",children:f})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Library Storage Size:"}),a.jsx("span",{className:"folder-stat-val text-blue",children:si(m)})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Host Machine Location:"}),a.jsx("span",{className:"folder-stat-val",style:{color:"#cbd5e1"},children:"Local Windows Filesystem"})]})]})]}),D&&a.jsxs("div",{className:"folder-status-box",children:[a.jsx("span",{style:{fontWeight:600},children:D}),I&&a.jsxs("div",{style:{fontSize:"12px",marginTop:"6px",color:"var(--text-muted)"},children:["Summary: ",I.totalFiles," video files found | ",I.added," added | ",I.updated," updated | ",I.deleted," dead links removed"]})]}),a.jsxs("div",{className:"folder-browser-section",children:[a.jsxs("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx($i,{size:18,color:"#38bdf8"}),a.jsx("span",{children:"Interactive Filesystem Navigator"})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"},children:M.map($=>a.jsxs("button",{className:`drive-pill ${r.startsWith($)?"active":""}`,onClick:()=>H($),children:[a.jsx($i,{size:14}),a.jsx("span",{children:$})]},$))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"14px"},children:[a.jsx("input",{type:"text",value:r,onChange:$=>l($.target.value),placeholder:"Type path (e.g. D:\\Movies or C:\\Users\\ASUS\\Downloads)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>H(r),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>W(r),disabled:w,children:"Set & Scan"})]}),S&&a.jsxs("div",{className:"folder-list-container",children:[S.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>H(S.parentPath),children:[a.jsx(ao,{size:16,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(J=S.folders)==null?void 0:J.map($=>a.jsxs("div",{className:"folder-list-item",onClick:()=>H($.path),children:[a.jsx(ao,{size:16,color:"#fbbf24"}),a.jsx("span",{children:$.name})]},$.path)),((j=S.folders)==null?void 0:j.length)===0&&a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-dim)",fontSize:"13px"},children:"No subdirectories in this path."})]})]})]})}function Vy({authFetch:s}){var $,te,q,ee,O,Y,F,K,Me;const[e,t]=G.useState(null),[r,l]=G.useState([]),[c,d]=G.useState([]),[f,p]=G.useState(null),[m,v]=G.useState(!1),[M,_]=G.useState(""),[S,b]=G.useState("library"),[w,x]=G.useState(""),[y,P]=G.useState(""),[D,A]=G.useState(""),I=async()=>{try{const le=await(await s("/api/share/info")).json();t(le)}catch{}},U=async()=>{try{const le=await(await s("/api/share/links")).json();le.links&&l(le.links)}catch{}},E=async()=>{try{const le=await(await s("/api/movies")).json();le.movies&&d(le.movies)}catch{}};G.useEffect(()=>{I(),U(),E();const X=setInterval(I,3500);return()=>clearInterval(X)},[]);const L=(X,le)=>{X&&navigator.clipboard.writeText(X).then(()=>{p(le),setTimeout(()=>p(null),2500)})},H=async X=>{v(!0),_(`${X==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const le=await s(`/api/admin/tunnel/${X}`,{method:"POST"}),ye=await le.json();if(!le.ok)throw new Error(ye.error||"Tunnel command failed");_(ye.message),await I()}catch(le){_(`Tunnel error: ${le.message}`)}finally{v(!1)}},z=async X=>{X.preventDefault();try{const le=await s("/api/share/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:S,movieId:S==="movie"?parseInt(w,10):null,passcode:y.trim(),label:D.trim()})}),ye=await le.json();if(!le.ok)throw new Error(ye.error||"Failed to generate link");_("New sharing link created successfully!"),P(""),A(""),await U()}catch(le){alert(le.message)}},W=async X=>{if(window.confirm("Revoke this share link? Viewers will no longer be able to access it."))try{const le=await s(`/api/share/revoke/${X}`,{method:"POST"}),ye=await le.json();if(!le.ok)throw new Error(ye.error);await U()}catch(le){alert(le.message)}},ie=(($=e==null?void 0:e.remote)==null?void 0:$.status)==="connected",J=((te=e==null?void 0:e.remote)==null?void 0:te.status)==="starting",j=(X,le=!0)=>{var Ee,Se;return`${le&&((Ee=e==null?void 0:e.remote)!=null&&Ee.publicUrl)?e.remote.publicUrl:((Se=e==null?void 0:e.local)==null?void 0:Se.url)||"http://localhost:5050"}/?share=${X}`};return a.jsxs("div",{className:"sharing-page-container",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Sharing & Network Access"}),a.jsx("p",{className:"page-sub-title",children:"Generate simple direct access links for remote friends and local Wi-Fi devices to stream movies from your PC."})]})}),M&&a.jsx("div",{className:"folder-status-box",style:{marginBottom:"20px"},children:M}),a.jsxs("div",{className:"sharing-sections-grid",children:[a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Iy,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section A: Local Network Access"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Same-Wi-Fi Home Streaming"})]})]}),a.jsx("span",{className:"status-pill-green",children:"LAN ONLINE"})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.5},children:"Any phone, tablet, smart TV or laptop connected to your home Wi-Fi network can open this address to browse and stream."}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",children:((q=e==null?void 0:e.local)==null?void 0:q.url)||"Detecting local IP..."}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var X;return L((X=e==null?void 0:e.local)==null?void 0:X.url,"local")},children:[f==="local"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:f==="local"?"Copied":"Copy"})]})]}),((ee=e==null?void 0:e.local)==null?void 0:ee.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone Camera (Same Wi-Fi)"}),a.jsx("img",{src:e.local.qrCode,alt:"Local QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]}),a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Tc,{size:22,color:"#38bdf8"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section B: Remote Access (Cloudflare Tunnel)"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Worldwide Internet Streaming"})]})]}),a.jsx("span",{className:`status-pill ${ie?"status-pill-green":J?"status-pill-yellow":"status-pill-red"}`,children:((Y=(O=e==null?void 0:e.remote)==null?void 0:O.status)==null?void 0:Y.toUpperCase())||"STOPPED"})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{flex:1,background:ie?"var(--bg-secondary)":"var(--success)"},onClick:()=>H("start"),disabled:m||ie,children:[a.jsx(fn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"START TUNNEL"})]}),a.jsxs("button",{className:"btn-danger",style:{flex:1},onClick:()=>H("stop"),disabled:m||!ie&&!J,children:[a.jsx(ca,{size:16,fill:"currentColor"}),a.jsx("span",{children:"STOP TUNNEL"})]})]}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",style:{color:"#38bdf8"},children:((F=e==null?void 0:e.remote)==null?void 0:F.publicUrl)||(J?"Connecting to Cloudflare edge...":"Tunnel stopped — Click START TUNNEL")}),((K=e==null?void 0:e.remote)==null?void 0:K.publicUrl)&&a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var X;return L((X=e==null?void 0:e.remote)==null?void 0:X.publicUrl,"public")},children:[f==="public"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:f==="public"?"Copied":"Copy"})]})]}),((Me=e==null?void 0:e.remote)==null?void 0:Me.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone (Worldwide Access)"}),a.jsx("img",{src:e.remote.qrCode,alt:"Remote QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]})]}),a.jsxs("div",{className:"share-generator-card",children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800,marginBottom:"6px"},children:"Generate Custom Sharing Links"}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"18px"},children:"Create tailored streaming links. Viewers who open these links do not need an account — they can immediately stream the movies authorized by the link."}),a.jsxs("form",{onSubmit:z,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Sharing Scope:"}),a.jsxs("select",{value:S,onChange:X=>b(X.target.value),style:{width:"100%"},children:[a.jsx("option",{value:"library",children:"Entire Movie Library"}),a.jsx("option",{value:"movie",children:"Single Individual Movie"})]})]}),S==="movie"&&a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Select Movie:"}),a.jsxs("select",{value:w,onChange:X=>x(X.target.value),required:!0,style:{width:"100%"},children:[a.jsx("option",{value:"",children:"-- Choose Movie --"}),c.map(X=>a.jsx("option",{value:X.id,children:X.clean_title},X.id))]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",placeholder:"e.g. 1234 (optional)",value:y,onChange:X=>P(X.target.value),style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Note / Label:"}),a.jsx("input",{type:"text",placeholder:"e.g. Link for John",value:D,onChange:X=>A(X.target.value),style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"10px",height:"42px"},children:[a.jsx(Gf,{size:16}),a.jsx("span",{children:"Create Link"})]})})]})]}),a.jsxs("div",{className:"active-links-section",children:[a.jsxs("h3",{style:{fontSize:"17px",fontWeight:700,marginBottom:"14px"},children:["Active Sharing Links (",r.length,")"]}),a.jsx("div",{style:{overflowX:"auto",background:"var(--bg-card)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:a.jsxs("table",{className:"sessions-table-3d",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Scope"}),a.jsx("th",{children:"Label / Target"}),a.jsx("th",{children:"Security"}),a.jsx("th",{children:"Views"}),a.jsx("th",{children:"Remote Sharing Link"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:r.map(X=>{const le=j(X.token,!0);return j(X.token,!1),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:`role-pill ${X.type==="movie"?"viewer":"admin"}`,children:X.type.toUpperCase()})}),a.jsxs("td",{children:[a.jsx("strong",{children:X.label||"Standard Link"}),X.movie_title&&a.jsx("div",{style:{fontSize:"12px",color:"#38bdf8"},children:X.movie_title})]}),a.jsx("td",{children:X.passcode?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#fbbf24",fontSize:"12px"},children:[a.jsx(Cc,{size:13}),a.jsx("span",{children:"PIN Protected"})]}):a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"12px"},children:"Direct Access"})}),a.jsx("td",{children:X.access_count}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontFamily:"monospace",fontSize:"12px",color:"#38bdf8",maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:le,children:le}),a.jsx("button",{className:"btn-secondary",style:{padding:"4px 8px",fontSize:"11px"},onClick:()=>L(le,`link_${X.id}`),title:"Copy Remote Link",children:f===`link_${X.id}`?a.jsx(wn,{size:13,color:"var(--success)"}):a.jsx(aa,{size:13})})]})}),a.jsx("td",{children:a.jsxs("button",{className:"btn-danger",style:{padding:"5px 10px",fontSize:"12px"},onClick:()=>W(X.id),title:"Revoke Link",children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Revoke"})]})})]},X.id)})})]})})]})]})}function Wy({onSelectMovie:s,onPlayMovie:e,authFetch:t}){const[r,l]=G.useState([]),[c,d]=G.useState(!0),f=()=>{d(!0),t("/api/user/favorites").then(m=>m.json()).then(m=>{m.favorites&&l(m.favorites.map(v=>({...v,is_favorite:1})))}).catch(()=>{}).finally(()=>d(!1))};G.useEffect(()=>{f()},[]);const p=async m=>{try{await t(`/api/user/favorites/${m}`,{method:"POST"}),l(v=>v.filter(M=>M.id!==m))}catch{}};return a.jsxs("div",{className:"favorites-page-shell",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(Hi,{size:26,fill:"var(--accent)",color:"var(--accent)"}),"My Favorites"]})}),a.jsx("p",{className:"page-sub-title",children:"Movies you've marked as favorites for quick access."})]})}),c?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading your favorites..."})]}):r.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(Hi,{size:48,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Favorites Yet"}),a.jsx("p",{children:"Browse your movie library and tap the heart icon on any poster to add it to your favorites collection."})]}):a.jsx("div",{className:"movie-grid-3d",children:r.map(m=>a.jsx(zr,{movie:m,onSelect:s,onPlay:e,onToggleFavorite:p},m.id))})]})}function Xy({authFetch:s,onOpenFolderPicker:e,onOpenShareModal:t}){var ht,Ye,_t,ut,lt,ze,dt,wt,fe,be,Ie,At,Ut;const[r,l]=G.useState(null),[c,d]=G.useState([]),[f,p]=G.useState(!1),[m,v]=G.useState(!1),[M,_]=G.useState(""),[S,b]=G.useState({total:0,matched:0,uncertain:0,missing:0,hasApiKey:!1}),[w,x]=G.useState(""),[y,P]=G.useState(""),[D,A]=G.useState(!1),[I,U]=G.useState(""),[E,L]=G.useState(""),[H,z]=G.useState(""),[W,ie]=G.useState(""),[J,j]=G.useState(""),$=()=>{s("/api/admin/dashboard-stats").then(Pe=>Pe.json()).then(Pe=>l(Pe)).catch(()=>{})},te=()=>{s("/api/auth/users").then(Pe=>Pe.json()).then(Pe=>{Pe.users&&d(Pe.users)}).catch(()=>{})},q=()=>{s("/api/movies/metadata/status").then(Pe=>Pe.json()).then(Pe=>b(Pe)).catch(()=>{})},ee=()=>{s("/api/admin/settings").then(Pe=>Pe.json()).then(Pe=>{var k;(k=Pe.settings)!=null&&k.tmdb_api_key&&x(Pe.settings.tmdb_api_key)}).catch(()=>{})};G.useEffect(()=>{$(),te(),q(),ee();const Pe=setInterval($,3e3);return()=>clearInterval(Pe)},[]);const O=async Pe=>{Pe.preventDefault(),P("");try{(await s("/api/admin/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdb_api_key:w.trim()})})).ok&&(P("TMDB API Key saved successfully!"),q(),setTimeout(()=>P(""),3e3))}catch{P("Failed to save API key")}},Y=async()=>{A(!0),U("Recognizing movies and caching high-res artwork...");try{const k=await(await s("/api/movies/batch/recognize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:40})})).json();U(k.message||"Auto-recognition finished."),q(),$()}catch(Pe){U(`Error: ${Pe.message}`)}finally{A(!1)}},F=async Pe=>{v(!0),_(`Applying server ${Pe}...`);try{const k=await s(`/api/admin/server/${Pe}`,{method:"POST"}),Ve=await k.json();if(!k.ok)throw new Error(Ve.error||`${Pe} failed`);_(Ve.message||`Server ${Pe} completed successfully.`),$()}catch(k){_(`Error: ${k.message}`)}finally{v(!1)}},K=async()=>{v(!0),_("Scanning movie folder for new files...");try{const Pe=await s("/api/admin/rescan",{method:"POST"}),k=await Pe.json();if(!Pe.ok)throw new Error(k.error||"Rescan failed");_(k.message||"Library rescan complete."),$()}catch(Pe){_(`Error: ${Pe.message}`)}finally{v(!1)}},Me=()=>{var k;const Pe=(k=r==null?void 0:r.tunnel)==null?void 0:k.publicUrl;Pe&&navigator.clipboard.writeText(Pe).then(()=>{p(!0),setTimeout(()=>p(!1),2500)})},X=async Pe=>{Pe.preventDefault(),ie(""),j("");try{const k=await s("/api/auth/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:E,password:H,role:"viewer"})}),Ve=await k.json();if(!k.ok)throw new Error(Ve.error||"Failed to create user");j(`Viewer account "${E}" created!`),L(""),z(""),te()}catch(k){ie(k.message)}},le=async(Pe,k)=>{if(window.confirm(`Delete viewer account "${k}"?`))try{const Ve=await s(`/api/auth/users/${Pe}`,{method:"DELETE"}),ft=await Ve.json();if(!Ve.ok)throw new Error(ft.error);te()}catch(Ve){alert(Ve.message)}},ye=()=>{window.open(cn(`/api/admin/backup?token=${encodeURIComponent(localStorage.getItem("streamlink_token"))}`),"_blank")},Ee=Pe=>{const k=Pe.target.files[0];if(!k)return;const Ve=new FileReader;Ve.onload=async ft=>{try{const gt=JSON.parse(ft.target.result),Le=await s("/api/admin/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(gt)}),Wt=await Le.json();if(!Le.ok)throw new Error(Wt.error);alert("Backup successfully restored!"),$()}catch(gt){alert(`Restore error: ${gt.message}`)}},Ve.readAsText(k)},Se=((ht=r==null?void 0:r.tunnel)==null?void 0:ht.status)==="connected",Ae=((Ye=r==null?void 0:r.tunnel)==null?void 0:Ye.status)==="starting";return a.jsxs("div",{className:"dash-container",children:[a.jsxs("div",{className:"dash-page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"dash-page-title",children:"Server Dashboard"}),a.jsx("p",{className:"dash-page-desc",children:"Manage your movie storage, remote streaming link, and viewer accounts."})]}),a.jsxs("div",{className:"dash-header-actions",children:[a.jsxs("button",{className:"btn-secondary",onClick:K,disabled:m,title:"Scan your movie folder for newly added files",children:[a.jsx(Ni,{size:14,className:m?"dash-spin":""}),a.jsx("span",{children:"Rescan Library"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>F("restart"),disabled:m,title:"Restart the local StreamLink server",children:[a.jsx(sc,{size:14}),a.jsx("span",{children:"Restart Server"})]})]})]}),M&&a.jsxs("div",{className:"dash-status-toast",children:[a.jsx("span",{children:M}),a.jsx("button",{onClick:()=>_(""),className:"dash-toast-close",title:"Dismiss",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"dash-sections-stack",children:[a.jsxs("div",{className:"dash-panel dash-panel-highlight",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx("div",{className:`dash-status-indicator ${Se?"indicator-online":Ae?"indicator-starting":"indicator-offline"}`}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Remote Access"}),a.jsx("p",{className:"dash-panel-sub",children:Se?"Your movie library is securely accessible from anywhere.":Ae?"Connecting encrypted remote streaming tunnel...":"Stream outside your home network on phones, tablets, or remote browsers."})]})]}),a.jsx("div",{children:Se?a.jsxs("button",{className:"btn-secondary dash-btn-danger",onClick:()=>F("stop"),disabled:m,children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Pause Remote Access"})]}):a.jsxs("button",{className:"btn-primary",onClick:()=>F("start"),disabled:m||Ae,children:[a.jsx(fn,{size:14,fill:"currentColor"}),a.jsx("span",{children:Ae?"Connecting...":"Enable Remote Access"})]})})]}),Se&&((_t=r==null?void 0:r.tunnel)!=null&&_t.publicUrl)?a.jsxs("div",{className:"dash-link-bar",children:[a.jsxs("div",{className:"dash-link-content",children:[a.jsx("span",{className:"dash-link-label",children:"Your Live Streaming Link:"}),a.jsx("span",{className:"dash-link-url",title:r.tunnel.publicUrl,children:r.tunnel.publicUrl})]}),a.jsxs("div",{className:"dash-link-buttons",children:[a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:Me,title:"Copy link to clipboard",children:[f?a.jsx(wn,{size:14,color:"#10B981"}):a.jsx(aa,{size:14}),a.jsx("span",{children:f?"Copied!":"Copy"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:t,title:"Display QR Code for mobile",children:[a.jsx(ey,{size:14}),a.jsx("span",{children:"QR Code"})]}),a.jsxs("a",{href:r.tunnel.publicUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary dash-btn-compact",title:"Open live link in new tab",children:[a.jsx(Q0,{size:14}),a.jsx("span",{children:"Open"})]})]})]}):a.jsxs("div",{className:"dash-link-offline",children:[a.jsx(Tc,{size:16}),a.jsxs("span",{children:["Local in-home access is available at ",a.jsx("code",{className:"dash-code",children:"http://localhost:5050"}),'. Click "Enable Remote Access" to securely share outside home.']})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx($i,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Movie Storage"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:e,title:"Select another folder on your computer",children:[a.jsx(ao,{size:14}),a.jsx("span",{children:"Change Folder"})]})]}),a.jsxs("div",{className:"dash-storage-box",children:[a.jsxs("div",{className:"dash-folder-info",children:[a.jsx(ao,{size:15,className:"dash-folder-icon"}),a.jsx("span",{className:"dash-folder-text",title:(ut=r==null?void 0:r.library)==null?void 0:ut.folder,children:((lt=r==null?void 0:r.library)==null?void 0:lt.folder)||"No folder selected"})]}),a.jsx("span",{className:`dash-badge ${(ze=r==null?void 0:r.library)!=null&&ze.folderExists?"badge-success":"badge-error"}`,children:(dt=r==null?void 0:r.library)!=null&&dt.folderExists?"Connected":"Folder Not Found"})]}),a.jsxs("div",{className:"dash-metrics-grid",children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Movies"}),a.jsx("span",{className:"dash-metric-number",children:((wt=r==null?void 0:r.library)==null?void 0:wt.totalMovies)||0})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Disk Storage"}),a.jsx("span",{className:"dash-metric-number",children:si((fe=r==null?void 0:r.library)==null?void 0:fe.totalDiskBytes)})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Server Port"}),a.jsxs("span",{className:"dash-metric-number",children:[":",((be=r==null?void 0:r.server)==null?void 0:be.port)||5050]})]})]})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Kg,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Now Playing"})]}),a.jsxs("span",{className:"dash-pill-counter",children:[((Ie=r==null?void 0:r.streaming)==null?void 0:Ie.activeViewersCount)||0," Active"]})]}),((Ut=(At=r==null?void 0:r.streaming)==null?void 0:At.activeSessions)==null?void 0:Ut.length)===0?a.jsxs("div",{className:"dash-empty-state",children:[a.jsx(Vf,{size:24,className:"dash-empty-icon"}),a.jsx("p",{className:"dash-empty-title",children:"No one is streaming right now"}),a.jsx("p",{className:"dash-empty-sub",children:"When movies are played on connected phones or browsers, real-time viewer details will appear here."})]}):a.jsx("div",{className:"dash-sessions-list",children:r.streaming.activeSessions.map(Pe=>a.jsxs("div",{className:"dash-session-row",children:[a.jsx("div",{className:"dash-session-avatar",children:Pe.username.charAt(0).toUpperCase()}),a.jsxs("div",{className:"dash-session-text",children:[a.jsx("span",{className:"dash-session-movie",children:Pe.movieTitle}),a.jsxs("span",{className:"dash-session-user",children:[Pe.username," (",Pe.ip,")"]})]}),a.jsx("span",{className:"dash-session-bandwidth",children:si(Pe.bytesTransmitted)})]},Pe.id))})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(uy,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Viewer Accounts"}),a.jsx("p",{className:"dash-panel-sub",children:"Manage user logins for friends and family."})]})]})}),a.jsxs("form",{onSubmit:X,className:"dash-user-form",children:[a.jsxs("div",{className:"dash-user-inputs",children:[a.jsx("input",{type:"text",placeholder:"Username",value:E,onChange:Pe=>L(Pe.target.value),required:!0,className:"dash-input"}),a.jsx("input",{type:"password",placeholder:"Password (min 6 chars)",value:H,onChange:Pe=>z(Pe.target.value),required:!0,className:"dash-input"}),a.jsxs("button",{type:"submit",className:"btn-primary dash-btn-compact",children:[a.jsx(wy,{size:14}),a.jsx("span",{children:"Add"})]})]}),W&&a.jsx("span",{className:"dash-form-error",children:W}),J&&a.jsx("span",{className:"dash-form-success",children:J})]}),a.jsx("div",{className:"dash-user-list",children:c.map(Pe=>a.jsxs("div",{className:"dash-user-row",children:[a.jsxs("div",{className:"dash-user-info",children:[a.jsx("span",{className:"dash-user-name",children:Pe.username}),a.jsx("span",{className:`dash-role-badge ${Pe.role}`,children:Pe.role})]}),Pe.role!=="admin"&&a.jsx("button",{className:"dash-delete-btn",onClick:()=>le(Pe.id,Pe.username),title:`Remove user ${Pe.username}`,children:a.jsx(Vr,{size:13})})]},Pe.id))})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Um,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Backup & Settings"}),a.jsx("p",{className:"dash-panel-sub",children:"Safely export or restore watch progress, favorites, and settings without touching movie files."})]})]})}),a.jsxs("div",{className:"dash-backup-actions",children:[a.jsxs("button",{className:"btn-secondary dash-backup-btn",onClick:ye,children:[a.jsx(Um,{size:15}),a.jsx("span",{children:"Export Backup (.json)"})]}),a.jsxs("label",{className:"btn-secondary dash-backup-btn dash-file-upload",children:[a.jsx(My,{size:15}),a.jsx("span",{children:"Restore Backup"}),a.jsx("input",{type:"file",accept:".json",onChange:Ee,style:{display:"none"}})]})]})]})]}),a.jsxs("div",{className:"dash-panel",style:{marginTop:"24px"},children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(mi,{size:20,className:"dash-icon text-cyan"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Automatic Movie Artwork & Metadata System"}),a.jsx("p",{className:"dash-panel-sub",children:"TMDB movie recognition, vertical poster & wide backdrop caching, and metadata matching."})]})]}),a.jsx("div",{className:"dash-panel-actions",children:a.jsxs("button",{className:"btn-primary",onClick:Y,disabled:D||!S.hasApiKey,title:S.hasApiKey?"Scan entire library and auto-fetch missing posters & backdrops":"Enter TMDB API Key below first",children:[a.jsx(Ni,{size:14,className:D?"rescan-spinning":""}),a.jsx("span",{children:D?"Fetching Artwork...":"Auto-Fetch All Artwork"})]})})]}),I&&a.jsxs("div",{className:"dash-status-alert info",style:{marginBottom:"18px"},children:[a.jsx(mi,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:I})]}),a.jsxs("div",{className:"dash-metrics-grid",style:{marginBottom:"20px"},children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Titles"}),a.jsx("span",{className:"dash-metric-number",children:S.total})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Artwork Matched"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#22C55E"},children:S.matched})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Uncertain Matches"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#F59E0B"},children:S.uncertain})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Missing Artwork"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#EF4444"},children:S.missing})]})]}),a.jsxs("form",{onSubmit:O,className:"tmdb-key-config-row",children:[a.jsxs("div",{className:"tmdb-key-label-wrap",children:[a.jsx(k_,{size:16,className:"text-cyan"}),a.jsxs("div",{children:[a.jsx("strong",{children:"The Movie Database (TMDB) API Key:"}),a.jsx("p",{className:"text-xs text-dim",children:"Used by backend server to automatically query posters, backdrops, and descriptions. Your key is stored securely on the host PC and never exposed to client browsers."})]})]}),a.jsxs("div",{className:"tmdb-key-input-group",children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Paste your TMDB v3 API Key (e.g. a1b2c3d4e5...)",value:w,onChange:Pe=>x(Pe.target.value)}),a.jsx("button",{type:"submit",className:"btn-secondary",children:"Save Key"})]})]}),y&&a.jsxs("div",{className:"dash-form-success",style:{marginTop:"10px"},children:[a.jsx(Qg,{size:14}),a.jsx("span",{children:y})]}),a.jsx("div",{className:"tmdb-attribution-footer",children:a.jsx("span",{children:"This product uses the TMDB API but is not endorsed or certified by TMDB. Movie posters and cinematic artwork remain copyright of their respective production studios."})})]})]})]})}function $y(){const{login:s}=Wf(),[e,t]=G.useState(""),[r,l]=G.useState(""),[c,d]=G.useState(""),[f,p]=G.useState(!1),m=typeof window<"u"&&!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("127.0.0.1"),[v,M]=G.useState(()=>m||!fs()),[_,S]=G.useState(()=>fs()||""),[b,w]=G.useState(!1),[x,y]=G.useState(null),P=async A=>{A.preventDefault(),d(""),p(!0);try{await s(e.trim(),r)}catch(I){const U=I.message||"Login failed";U.includes("fetch")||U.includes("Failed to fetch")||U.includes("NetworkError")||U.includes("Cannot connect")?(d("Cannot connect to your StreamLink server. Please enter your Cloudflare Tunnel URL below and click Save."),M(!0)):d(U)}finally{p(!1)}},D=async A=>{let I=(A!==void 0?A:_).trim();if(!I){Hm(""),S(""),y({type:"success",message:"Server URL cleared (using local /api)."}),d("");return}let U=I.replace(/\/+$/,"");if(/^https?:\/\//i.test(U)||(U=`https://${U}`),U=U.replace(/\/api\/?$/i,""),U.includes("your-temporary-url")||U.includes("your-tunnel")||U.includes("sponsored-fee-imposed-associations")){y({type:"error",message:"Please replace the placeholder with your actual Cloudflare Tunnel URL generated on your PC."});return}w(!0),y(null);const E=`${U}/api/health`;try{const L=await fetch(E,{signal:AbortSignal.timeout(8e3)});if(L.ok)Hm(U),S(U),y({type:"success",message:"Connected to StreamLink Server successfully!"}),d("");else throw new Error(`Server returned status ${L.status}`)}catch{y({type:"error",message:"Could not connect. Ensure start-streamlink.bat is running on your PC and Cloudflare Tunnel is started in your Dashboard."})}finally{w(!1)}};return a.jsxs("div",{className:"login-page-shell",children:[a.jsx("div",{className:"login-bg-gradient"}),a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-brand",children:[a.jsx("div",{className:"login-logo-icon",children:a.jsx(pi,{size:28})}),a.jsxs("h1",{className:"login-brand-name",children:["Stream",a.jsx("span",{style:{color:"var(--accent)"},children:"Link"})]}),a.jsx("p",{className:"login-brand-sub",children:"Personal Self-Hosted Movie Streaming"})]}),c&&a.jsxs("div",{className:"login-error",style:{marginBottom:"16px"},children:[a.jsx(uo,{size:16,style:{flexShrink:0}}),a.jsx("span",{children:c})]}),a.jsxs("form",{className:"login-form",onSubmit:P,children:[a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-username",children:"Username"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-username",type:"text",placeholder:"Enter username",value:e,onChange:A=>t(A.target.value),required:!0,autoFocus:!0}),a.jsx(ix,{size:16,className:"login-input-icon"})]})]}),a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-password",children:"Password"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-password",type:"password",placeholder:"Enter password",value:r,onChange:A=>l(A.target.value),required:!0}),a.jsx(Cc,{size:16,className:"login-input-icon"})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"13px",fontSize:"15px",marginTop:"8px"},disabled:f,children:[a.jsx("span",{children:f?"Authenticating...":"Sign In"}),!f&&a.jsx(co,{size:16})]})]}),a.jsxs("div",{className:"login-hint",children:["Default credentials: ",a.jsx("strong",{style:{color:"#fff"},children:"admin"})," / ",a.jsx("strong",{style:{color:"#fff"},children:"admin123"})]}),a.jsxs("div",{className:"login-server-config",style:{marginTop:"16px"},children:[a.jsxs("button",{type:"button",className:"login-server-toggle",onClick:()=>M(!v),style:{fontWeight:600,color:"#fff"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(ly,{size:15,style:{color:"var(--accent)"}}),"Server Connection",a.jsx("span",{style:{fontSize:"10px",padding:"2px 6px",borderRadius:"4px",background:fs()?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.08)",color:fs()?"#4ade80":"var(--text-dim)"},children:fs()?"Configured":"Local / Not Set"})]}),v?a.jsx(a_,{size:15}):a.jsx(n_,{size:15})]}),v&&a.jsxs("div",{className:"login-server-panel",style:{marginTop:"10px"},children:[a.jsx("label",{className:"login-server-label",children:"PC Tunnel URL (Cloudflare):"}),a.jsxs("div",{className:"login-server-input-row",children:[a.jsx("input",{type:"url",className:"login-server-input",placeholder:"https://your-tunnel.trycloudflare.com",value:_,onChange:A=>S(A.target.value)}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>D(),disabled:b,style:{padding:"8px 14px",fontSize:"12px",whiteSpace:"nowrap"},children:[b?a.jsx(Ni,{size:13,className:"spin"}):a.jsx(wn,{size:13}),a.jsx("span",{children:"Save"})]})]}),a.jsxs("div",{className:"login-server-presets",children:[a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{S("http://localhost:5050"),D("http://localhost:5050")},children:[a.jsx(Tc,{size:11,style:{display:"inline",marginRight:"4px"}}),"Localhost (5050)"]}),fs()&&a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{S(""),D("")},children:[a.jsx(oo,{size:11,style:{display:"inline",marginRight:"4px"}}),"Reset / Clear URL"]})]}),x&&a.jsx("div",{className:`login-server-feedback ${x.type}`,children:x.message}),a.jsxs("div",{className:"login-server-guide",children:[a.jsxs("div",{className:"login-server-guide-title",children:[a.jsx(fo,{size:13,style:{flexShrink:0}}),a.jsx("span",{children:"How to connect when hosted on Vercel:"})]}),a.jsxs("ol",{className:"login-server-steps",children:[a.jsxs("li",{children:["Run ",a.jsx("code",{children:"start-streamlink.bat"})," on your PC (where movies are stored)."]}),a.jsxs("li",{children:["In your PC browser, open ",a.jsx("code",{children:"http://localhost:5050"})," and go to ",a.jsx("strong",{children:"Dashboard"}),"."]}),a.jsxs("li",{children:["Under ",a.jsx("strong",{children:"Cloudflare Tunnel"}),", click ",a.jsx("strong",{children:"START SERVER"}),"."]}),a.jsxs("li",{children:["Copy your live ",a.jsx("code",{children:"https://....trycloudflare.com"})," link, paste it in the box above, and click ",a.jsx("strong",{children:"Save"}),"."]})]}),a.jsxs("div",{className:"login-server-tip",children:["💡 ",a.jsx("strong",{children:"Tip:"})," You don't need Vercel! Your Cloudflare Tunnel link from your PC can be shared and opened directly on any phone or device."]})]})]})]})]})]})}function Pl(s){if(isNaN(s)||s<0)return"00:00";const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=Math.floor(s%60),l=t<10?`0${t}`:t,c=r<10?`0${r}`:r;return e>0?`${e}:${l}:${c}`:`${l}:${c}`}function ox({movie:s,onBack:e,token:t,authFetch:r}){const l=G.useRef(null),c=G.useRef(null),d=G.useRef(null),[f,p]=G.useState(!1),[m,v]=G.useState(0),[M,_]=G.useState(s.duration||0),[S,b]=G.useState(0),[w,x]=G.useState(1),[y,P]=G.useState(!1),[D,A]=G.useState(1),[I,U]=G.useState(!0),[E,L]=G.useState(!1),[H,z]=G.useState(!1),[W,ie]=G.useState(-1),[J,j]=G.useState(!1),[$,te]=G.useState(!1),[q,ee]=G.useState(!1),[O,Y]=G.useState(null),[F,K]=G.useState({visible:!1,xPercent:0,time:0}),[Me,X]=G.useState(null),le=G.useRef(null),ye=G.useRef(null),Ee=()=>{U(!0),ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{l.current&&!l.current.paused&&(U(!1),L(!1),z(!1))},3500)},Se=ve=>{X(ve),le.current&&clearTimeout(le.current),le.current=setTimeout(()=>{X(null)},650)},Ae=()=>{var re;ee(!1);const ve=(re=l.current)==null?void 0:re.error;let R="An error occurred during video playback.",T=(ve==null?void 0:ve.code)||0;T===1?R="Video playback was aborted.":T===2?R="A network error occurred while loading the video stream.":T===3?R="An error occurred while decoding the video stream.":T===4&&(R="This video format or codec is not supported by your browser."),Y({code:T,message:R,codec:s.codec||"Unknown",container:s.container||"Unknown",audioCodec:s.audio_codec||"Unknown"})},ht=()=>{Y(null),ee(!0),l.current&&(l.current.load(),l.current.play().then(()=>{p(!0),ee(!1)}).catch(()=>{Ae()}))};G.useEffect(()=>{if(s.progress_seconds&&s.progress_seconds>15){j(!0);const ve=setTimeout(()=>{j(!1)},7e3);return()=>clearTimeout(ve)}},[s]);const Ye=s.streamUrlOverride||`/api/movies/${s.id}/stream?token=${encodeURIComponent(t||"")}`,_t=cn(Ye),ut=()=>{Ee()};G.useEffect(()=>{const ve=setInterval(()=>{if(l.current&&f&&r){const R=l.current.currentTime,T=l.current.duration||M;R>5&&r("/api/user/progress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieId:s.id,progressSeconds:Math.floor(R),durationSeconds:Math.floor(T)})}).catch(()=>{})}},5e3);return()=>clearInterval(ve)},[f,M,s.id]);const lt=()=>{l.current&&(l.current.paused?l.current.play().then(()=>{p(!0),Se("play"),Ee()}).catch(()=>{}):(l.current.pause(),p(!1),Se("pause"),U(!0),ye.current&&clearTimeout(ye.current)))},ze=ve=>{j(!1),l.current&&(l.current.currentTime=Math.max(0,Math.min(l.current.duration||M,l.current.currentTime+ve)),Se(ve>0?"fwd":"rwd"),Ee())},dt=ve=>{if(j(!1),!d.current||!l.current)return;const R=d.current.getBoundingClientRect(),re=Math.max(0,Math.min(1,(ve.clientX-R.left)/R.width))*(l.current.duration||M);l.current.currentTime=re,v(re),Ee()},wt=ve=>{var Ne;if(!d.current)return;const R=d.current.getBoundingClientRect(),T=Math.max(0,Math.min(ve.clientX-R.left,R.width)),re=T/R.width*100,we=((Ne=l.current)==null?void 0:Ne.duration)||M||0,ge=T/R.width*we;K({visible:!0,xPercent:re,time:ge})},fe=()=>{K(ve=>({...ve,visible:!1}))},be=ve=>{if(!l.current)return;const R=Math.max(0,Math.min(1,ve));l.current.volume=R,x(R),P(R===0)},Ie=()=>{l.current&&(y?(l.current.muted=!1,l.current.volume=w||.5,P(!1)):(l.current.muted=!0,P(!0)))},At=ve=>{l.current&&(l.current.playbackRate=ve,A(ve),L(!1),Ee())};G.useEffect(()=>{const ve=()=>{var ge,Ne,Ue,pe;const we=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||(ge=l.current)!=null&&ge.webkitDisplayingFullscreen);if(te(we),we)document.body.classList.add("streamlink-fullscreen-active");else{document.body.classList.remove("streamlink-fullscreen-active");try{(Ue=(Ne=window.screen)==null?void 0:Ne.orientation)!=null&&Ue.unlock?window.screen.orientation.unlock():(pe=window.screen)!=null&&pe.unlockOrientation&&window.screen.unlockOrientation()}catch{}}},R=()=>{te(!0),document.body.classList.add("streamlink-fullscreen-active")},T=()=>{var we,ge;te(!1),document.body.classList.remove("streamlink-fullscreen-active");try{(ge=(we=window.screen)==null?void 0:we.orientation)!=null&&ge.unlock&&window.screen.orientation.unlock()}catch{}};document.addEventListener("fullscreenchange",ve),document.addEventListener("webkitfullscreenchange",ve),document.addEventListener("mozfullscreenchange",ve),document.addEventListener("MSFullscreenChange",ve);const re=l.current;return re&&(re.addEventListener("webkitbeginfullscreen",R),re.addEventListener("webkitendfullscreen",T)),()=>{var we,ge;document.removeEventListener("fullscreenchange",ve),document.removeEventListener("webkitfullscreenchange",ve),document.removeEventListener("mozfullscreenchange",ve),document.removeEventListener("MSFullscreenChange",ve),re&&(re.removeEventListener("webkitbeginfullscreen",R),re.removeEventListener("webkitendfullscreen",T)),document.body.classList.remove("streamlink-fullscreen-active");try{(ge=(we=window.screen)==null?void 0:we.orientation)!=null&&ge.unlock&&window.screen.orientation.unlock()}catch{}}},[]);const Ut=async()=>{var we,ge,Ne,Ue,pe,xe,ke,V;const ve=c.current,R=l.current;if(!ve)return;const T=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||R!=null&&R.webkitDisplayingFullscreen),re=R==null?void 0:R.currentTime;if(T){try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.msExitFullscreen?await document.msExitFullscreen():R&&R.webkitExitFullscreen&&R.webkitExitFullscreen()}catch{}try{(ke=(xe=window.screen)==null?void 0:xe.orientation)!=null&&ke.unlock?window.screen.orientation.unlock():(V=window.screen)!=null&&V.unlockOrientation&&window.screen.unlockOrientation()}catch{}R&&re&&Math.abs(R.currentTime-re)>2&&(R.currentTime=re),te(!1)}else{try{ve.requestFullscreen?await ve.requestFullscreen():ve.webkitRequestFullscreen?await ve.webkitRequestFullscreen():ve.mozRequestFullScreen?await ve.mozRequestFullScreen():ve.msRequestFullscreen?await ve.msRequestFullscreen():R&&R.webkitEnterFullscreen&&R.webkitEnterFullscreen()}catch{if(R&&R.webkitEnterFullscreen)try{R.webkitEnterFullscreen()}catch{}}try{(ge=(we=window.screen)==null?void 0:we.orientation)!=null&&ge.lock?await window.screen.orientation.lock("landscape"):(Ne=window.screen)!=null&&Ne.lockOrientation?window.screen.lockOrientation("landscape"):(Ue=window.screen)!=null&&Ue.mozLockOrientation?window.screen.mozLockOrientation("landscape"):(pe=window.screen)!=null&&pe.msLockOrientation&&window.screen.msLockOrientation("landscape")}catch{}R&&re&&Math.abs(R.currentTime-re)>2&&(R.currentTime=re),te(!0)}},Pe=()=>{"ontouchstart"in window||navigator.maxTouchPoints>0?U(R=>{const T=!R;return T&&Ee(),T}):lt()};G.useEffect(()=>{const ve=R=>{var T;if(!["INPUT","TEXTAREA"].includes((T=document.activeElement)==null?void 0:T.tagName))switch(R.code){case"Space":R.preventDefault(),lt();break;case"ArrowLeft":R.preventDefault(),ze(-10);break;case"ArrowRight":R.preventDefault(),ze(10);break;case"ArrowUp":R.preventDefault(),be(w+.1);break;case"ArrowDown":R.preventDefault(),be(w-.1);break;case"KeyM":Ie();break;case"KeyF":Ut();break;case"Escape":document.fullscreenElement||e();break}};return window.addEventListener("keydown",ve),()=>window.removeEventListener("keydown",ve)},[f,w,y,M]);const k=ve=>{if(ie(ve),z(!1),Ee(),!l.current)return;const R=l.current.textTracks;for(let T=0;T<R.length;T++)R[T].mode=T===ve?"showing":"disabled"},Ve=()=>{l.current&&s.progress_seconds&&(l.current.currentTime=s.progress_seconds,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),Ee()},ft=()=>{l.current&&(l.current.currentTime=0,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),Ee()},gt=()=>{if(l.current&&(v(l.current.currentTime),l.current.buffered.length>0)){const ve=l.current.buffered.end(l.current.buffered.length-1),R=l.current.duration||M;R>0&&b(Math.min(100,ve/R*100))}},Le=()=>{l.current&&_(l.current.duration||s.duration||0)},Wt=M>0?m/M*100:0,rt=s.subtitles||[];return a.jsx("div",{ref:c,className:`player-page ${$?"player-page-fullscreen":""}`,onMouseMove:ut,style:{cursor:I?"default":"none"},children:a.jsxs("div",{className:"player-video-wrapper",onClick:Pe,children:[a.jsx("video",{ref:l,src:_t,className:"player-video",onTimeUpdate:gt,onLoadedMetadata:Le,onPlay:()=>{p(!0),ee(!1)},onPause:()=>p(!1),onWaiting:()=>ee(!0),onCanPlay:()=>ee(!1),onPlaying:()=>ee(!1),onSeeking:()=>ee(!0),onSeeked:()=>ee(!1),onError:Ae,playsInline:!0,"webkit-playsinline":"true","x5-video-player-type":"h5",children:rt.map((ve,R)=>a.jsx("track",{kind:"subtitles",label:ve.language,src:cn(`/api/movies/${s.id}/subtitles/${R}?token=${encodeURIComponent(t||"")}`),default:R===W},R))}),q&&!O&&a.jsxs("div",{className:"player-buffering-overlay",children:[a.jsx("div",{className:"player-buffer-spinner"}),a.jsx("span",{className:"player-buffer-text",children:"Buffering Stream..."})]}),O&&a.jsx("div",{className:"player-error-overlay",onClick:ve=>ve.stopPropagation(),children:a.jsxs("div",{className:"player-error-card",children:[a.jsx("div",{className:"player-error-icon",children:a.jsx(ho,{size:36,color:"#EF4444"})}),a.jsx("h3",{className:"player-error-title",children:O.code===4?"Codec Not Supported in Browser":"Stream Playback Error"}),a.jsx("p",{className:"player-error-desc",children:O.message}),a.jsxs("div",{className:"player-error-diagnostics",children:[a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Container:"}),a.jsx("span",{className:"diag-value",children:s.container?s.container.toUpperCase():"UNKNOWN"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Video Codec:"}),a.jsx("span",{className:"diag-value",children:s.codec||"Unknown (e.g. HEVC/H.265)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Audio Codec:"}),a.jsx("span",{className:"diag-value",children:s.audio_codec||"Unknown (e.g. AC3/DTS)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Resolution:"}),a.jsx("span",{className:"diag-value",children:s.resolution||"Standard"})]})]}),O.code===4&&a.jsxs("div",{className:"player-error-tip",children:[a.jsx("strong",{children:"Why did this happen?"})," Most web browsers (Chrome, Edge, Firefox) do not include proprietary licensing decoders for certain video containers (MKV with HEVC/H.265) or surround-sound audio (multichannel DTS/AC3). You can play this directly in VLC/MPV or re-encode using H.264/AAC."]}),a.jsxs("div",{className:"player-error-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:ht,children:[a.jsx(Ni,{size:15}),a.jsx("span",{children:"Retry Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:e,children:[a.jsx(hc,{size:15}),a.jsx("span",{children:"Return to Library"})]})]})]})}),Me&&a.jsx("div",{className:"center-action-overlay",children:a.jsxs("div",{className:"center-action-bubble",children:[Me==="play"&&a.jsx(fn,{size:38,fill:"#ffffff"}),Me==="pause"&&a.jsx(hd,{size:38,fill:"#ffffff"}),Me==="fwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(sc,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"+10s"})]}),Me==="rwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(oo,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"-10s"})]})]})}),a.jsxs("div",{className:"player-mobile-center-controls",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>ze(-10),title:"Rewind 10s","aria-label":"Rewind 10 seconds",children:[a.jsx(oo,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]}),a.jsx("button",{className:"player-mobile-play-btn",onClick:lt,title:f?"Pause":"Play","aria-label":f?"Pause":"Play",children:f?a.jsx(hd,{size:36,fill:"#ffffff"}):a.jsx(fn,{size:36,fill:"#ffffff",style:{marginLeft:"4px"}})}),a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>ze(10),title:"Forward 10s","aria-label":"Forward 10 seconds",children:[a.jsx(sc,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]})]}),a.jsxs("div",{className:"player-top-bar",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-back-btn",onClick:e,title:"Return to library",children:[a.jsx(hc,{size:18}),a.jsx("span",{className:"player-back-label",children:"Back"})]}),a.jsx("div",{className:"player-top-title",title:s.clean_title||s.title,children:s.clean_title||s.title}),a.jsx("div",{className:"player-top-actions",children:a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("button",{className:"player-top-speed-btn",onClick:()=>{L(!E),z(!1),Ee()},title:"Playback Speed",children:[D,"x"]}),E&&a.jsx("div",{className:"player-popup-menu player-popup-top",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${D===ve?"active":""}`,onClick:()=>At(ve),children:[a.jsxs("span",{children:[ve,"x"]}),D===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]})})]}),J&&a.jsxs("div",{className:"resume-prompt",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("span",{style:{fontSize:"13.5px",fontWeight:600},children:["Resume from ",Pl(s.progress_seconds),"?"]}),a.jsx("button",{className:"btn-primary",style:{padding:"6px 14px",fontSize:"12.5px"},onClick:Ve,children:"Resume"}),a.jsx("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12.5px"},onClick:ft,children:"Start Over"}),a.jsx("button",{className:"resume-close-btn",onClick:()=>j(!1),title:"Dismiss","aria-label":"Dismiss resume prompt",children:a.jsx(Wi,{size:15})})]}),a.jsxs("div",{className:"player-controls-overlay",style:{opacity:I?1:0,pointerEvents:I?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsx("div",{ref:d,className:"player-timeline-wrapper",onClick:dt,onMouseMove:wt,onMouseLeave:fe,children:a.jsxs("div",{className:"player-timeline-track",children:[a.jsx("div",{className:"player-timeline-buffer",style:{width:`${S}%`}}),F.visible&&a.jsx("div",{className:"player-timeline-hover-bar",style:{width:`${F.xPercent}%`}}),a.jsx("div",{className:"player-timeline-progress",style:{width:`${Wt}%`},children:a.jsx("div",{className:"timeline-progress-sheen"})}),a.jsxs("div",{className:"player-timeline-thumb",style:{left:`${Wt}%`},children:[a.jsx("div",{className:"thumb-inner-core"}),a.jsx("div",{className:"thumb-outer-halo"})]}),F.visible&&a.jsxs("div",{className:"player-timeline-tooltip",style:{left:`${F.xPercent}%`,transform:`translateX(-50%) perspective(400px) rotateX(${(F.xPercent-50)/50*-6}deg)`},children:[a.jsx("span",{className:"tooltip-time",children:Pl(F.time)}),a.jsx("div",{className:"tooltip-arrow"})]})]})}),a.jsxs("div",{className:"player-controls-bottom",children:[a.jsxs("div",{className:"player-controls-left",children:[a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:lt,title:f?"Pause":"Play",children:f?a.jsx(hd,{size:22,fill:"#fff"}):a.jsx(fn,{size:22,fill:"#fff"})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>ze(-10),title:"Rewind 10s",children:a.jsx(oo,{size:18})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>ze(10),title:"Forward 10s",children:a.jsx(sc,{size:18})}),a.jsxs("div",{className:"player-volume-group",children:[a.jsx("button",{className:"player-ctrl-btn",onClick:Ie,title:y?"Unmute":"Mute",children:y||w===0?a.jsx(Ry,{size:19}):a.jsx(Ay,{size:19})}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:y?0:w,onChange:ve=>be(parseFloat(ve.target.value)),className:"player-volume-slider",style:{width:"74px",background:`linear-gradient(to right, var(--accent) 0%, var(--accent) ${(y?0:w)*100}%, rgba(255,255,255,0.18) ${(y?0:w)*100}%, rgba(255,255,255,0.18) 100%)`}})]}),a.jsxs("div",{className:"player-time-display",children:[a.jsx("span",{className:"player-time-current",children:Pl(m)}),a.jsx("span",{className:"player-time-sep",children:"/"}),a.jsx("span",{className:"player-time-total",children:Pl(M)})]})]}),a.jsxs("div",{className:"player-controls-right",children:[rt.length>0&&a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"player-ctrl-btn",onClick:()=>{z(!H),L(!1),Ee()},title:"Subtitles",style:{color:W>=0?"var(--primary)":"#fff"},children:a.jsx(Zg,{size:19})}),H&&a.jsxs("div",{className:"player-popup-menu",style:{minWidth:"140px"},children:[a.jsxs("button",{className:`player-popup-item ${W===-1?"active":""}`,onClick:()=>k(-1),children:[a.jsx("span",{children:"Off"}),W===-1&&a.jsx(wn,{size:13,color:"var(--accent)"})]}),rt.map((ve,R)=>a.jsxs("button",{className:`player-popup-item ${W===R?"active":""}`,onClick:()=>k(R),children:[a.jsx("span",{children:ve.language}),W===R&&a.jsx(wn,{size:13,color:"var(--accent)"})]},R))]})]}),a.jsxs("div",{className:"player-desktop-btn",style:{position:"relative"},children:[a.jsxs("button",{className:"player-ctrl-btn",onClick:()=>{L(!E),z(!1),Ee()},style:{fontSize:"13px",fontWeight:700,padding:"5px 9px"},title:"Playback Speed",children:[D,"x"]}),E&&a.jsx("div",{className:"player-popup-menu",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${D===ve?"active":""}`,onClick:()=>At(ve),children:[a.jsxs("span",{children:[ve,"x"]}),D===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]}),a.jsx("button",{className:"player-ctrl-btn player-fullscreen-btn",onClick:Ut,title:$?"Exit Fullscreen":"Landscape Fullscreen","aria-label":$?"Exit Fullscreen":"Enter Landscape Fullscreen",children:$?a.jsx(q_,{size:21}):a.jsx(X_,{size:21})})]})]})]})]})})}function lx({movie:s,onClose:e,onPlay:t,onToggleFavorite:r,authFetch:l,onPosterUpdated:c,onRemoveMovie:d,onDeleteFile:f}){const[p,m]=G.useState(s),[v,M]=G.useState([]),[_,S]=G.useState("#B69AFF"),[b,w]=G.useState(!1),[x,y]=G.useState(""),[P,D]=G.useState(!1),[A,I]=G.useState(""),[U,E]=G.useState(!1),[L,H]=G.useState({type:"",text:""}),[z,W]=G.useState(Date.now()),[ie,J]=G.useState(!1),[j,$]=G.useState(""),[te,q]=G.useState(""),[ee,O]=G.useState([]),[Y,F]=G.useState(!1),[K,Me]=G.useState(!1),[X,le]=G.useState(""),[ye,Ee]=G.useState(!1);if(G.useEffect(()=>{m(s),s&&($(s.clean_title||""),q(s.year||""))},[s]),G.useEffect(()=>{p!=null&&p.id&&l&&l(`/api/movies/recommendations/${p.id}`).then(ze=>ze.json()).then(ze=>{ze.recommendations&&M(ze.recommendations)}).catch(()=>{})},[p==null?void 0:p.id]),G.useEffect(()=>{if(p!=null&&p.id){const ze=cn(`/api/movies/${p.id}/poster`);ax(ze).then(dt=>S(dt))}},[p==null?void 0:p.id,z]),!p)return null;const Se=p.subtitles&&p.subtitles.length>0,Ae=p.progress_seconds&&p.progress_seconds>15,ht=async ze=>{if(ze&&ze.preventDefault(),!(!j.trim()||!l)){F(!0),le("");try{const dt=encodeURIComponent(j.trim()),wt=te?`&year=${encodeURIComponent(te.trim())}`:"",be=await(await l(`/api/movies/${p.id}/tmdb-search?q=${dt}${wt}`)).json();be.error?(le(be.error),O([])):O(be.candidates||[])}catch{le("Network error searching TMDB")}finally{F(!1)}}},Ye=async ze=>{Me(!0),le("");try{const dt=await l(`/api/movies/${p.id}/tmdb-match`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdbId:ze.id})}),wt=await dt.json();dt.ok?(m(fe=>({...fe,clean_title:ze.title,year:ze.year,description:ze.overview||fe.description,tmdb_id:ze.id,match_status:"manual"})),W(Date.now()),J(!1),H({type:"success",text:`Matched to "${ze.title}" (${ze.year})!`}),c&&c(p.id)):le(wt.error||"Failed to apply TMDB match")}catch{le("Network error applying TMDB match")}finally{Me(!1)}},_t=async()=>{var ze,dt;Ee(!0),H({type:"",text:""});try{const fe=await(await l(`/api/movies/${p.id}/refresh-metadata`,{method:"POST"})).json();(ze=fe.result)!=null&&ze.success?(m(be=>({...be,clean_title:fe.result.title||be.clean_title,year:fe.result.year||be.year,match_status:"matched"})),W(Date.now()),H({type:"success",text:"Metadata and artwork refreshed from TMDB!"}),c&&c(p.id)):H({type:"error",text:((dt=fe.result)==null?void 0:dt.reason)==="no_api_key"?"No TMDB API key configured in Dashboard":'No confident match found. Use "Match on TMDB" to pick manually.'})}catch{H({type:"error",text:"Network error refreshing metadata"})}finally{Ee(!1)}},ut=async ze=>{if(ze.preventDefault(),!(!x.trim()||!l)){E(!0),H({type:"",text:""});try{const dt=await l(`/api/movies/${p.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:x.trim()})}),wt=await dt.json();dt.ok?(H({type:"success",text:"Poster updated successfully!"}),W(Date.now()),w(!1),y(""),c&&c(p.id)):H({type:"error",text:wt.error||"Failed to update poster"})}catch{H({type:"error",text:"Network error updating poster"})}finally{E(!1)}}},lt=async ze=>{if(ze.preventDefault(),!(!A.trim()||!l)){E(!0),H({type:"",text:""});try{const dt=await l(`/api/movies/${p.id}/backdrop`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({backdropUrl:A.trim()})}),wt=await dt.json();dt.ok?(H({type:"success",text:"Backdrop updated successfully!"}),W(Date.now()),D(!1),I(""),c&&c(p.id)):H({type:"error",text:wt.error||"Failed to update backdrop"})}catch{H({type:"error",text:"Network error updating backdrop"})}finally{E(!1)}}};return a.jsx("div",{className:"movie-modal-backdrop",onClick:e,children:a.jsxs("div",{className:"movie-modal-box",onClick:ze=>ze.stopPropagation(),style:{boxShadow:`0 24px 60px rgba(0, 0, 0, 0.85), 0 0 40px ${_}26`,borderColor:`${_}40`},children:[a.jsxs("div",{className:"movie-modal-top-banner",children:[a.jsx("img",{src:cn(`/api/movies/${p.id}/backdrop?k=${z}`),alt:p.clean_title,className:"movie-modal-backdrop-img",loading:"lazy"}),a.jsx("div",{className:"movie-modal-banner-gradient"}),a.jsx("button",{className:"movie-modal-close-btn",onClick:e,title:"Close Details",children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"movie-modal-body",children:[a.jsxs("div",{className:"movie-modal-poster-col",children:[a.jsx("div",{className:"movie-modal-poster",children:a.jsx("img",{src:cn(`/api/movies/${p.id}/poster?k=${z}`),alt:p.clean_title,loading:"lazy"},z)}),l&&a.jsxs("div",{className:"artwork-tools-bar",children:[a.jsxs("button",{className:"btn-change-poster",onClick:()=>{J(!0),ht()},title:"Search & Match TMDB Artwork & Metadata",children:[a.jsx(mi,{size:13,className:"text-cyan"}),a.jsx("span",{children:"Match on TMDB"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:_t,disabled:ye,title:"Auto-refresh metadata from TMDB",children:[a.jsx(Ni,{size:13,className:ye?"rescan-spinning":""}),a.jsx("span",{children:ye?"Refreshing...":"Auto Refresh"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{w(!b),D(!1)},title:"Paste custom poster image URL or file path",children:[a.jsx(pc,{size:13}),a.jsx("span",{children:b?"Cancel":"Change Poster"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{D(!P),w(!1)},title:"Paste custom backdrop image URL or file path",children:[a.jsx(Bf,{size:13}),a.jsx("span",{children:P?"Cancel":"Change Backdrop"})]})]}),b&&a.jsxs("form",{onSubmit:ut,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste poster image URL or file path...",value:x,onChange:ze=>y(ze.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:U,children:U?"Saving...":"Apply Poster"})]}),P&&a.jsxs("form",{onSubmit:lt,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste backdrop image URL or file path...",value:A,onChange:ze=>I(ze.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:U,children:U?"Saving...":"Apply Backdrop"})]}),L.text&&a.jsxs("div",{className:`poster-msg-banner ${L.type}`,children:[L.type==="success"?a.jsx(wn,{size:12}):a.jsx(uo,{size:12}),a.jsx("span",{children:L.text})]})]}),a.jsxs("div",{className:"movie-modal-info",children:[a.jsxs("div",{className:"movie-modal-badges",children:[p.resolution&&a.jsx("span",{className:"badge-studio",children:p.resolution}),p.genre&&a.jsx("span",{className:"badge-studio-cyan",children:p.genre}),p.year&&a.jsx("span",{className:"badge-studio-dim",children:p.year}),p.tmdb_id&&a.jsxs("span",{className:"badge-studio-info",title:"Official TMDB Metadata Match",children:[a.jsx(gy,{size:11}),"TMDB #",p.tmdb_id]}),Se&&a.jsxs("span",{className:"badge-studio-info",children:[a.jsx(Zg,{size:11}),"CC"]})]}),a.jsx("h2",{className:"movie-modal-title",children:p.clean_title}),a.jsxs("div",{className:"movie-modal-meta-row",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:13}),Wr(p.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:13}),si(p.file_size)]}),p.codec&&a.jsx("span",{className:"meta-tag",children:p.codec})]}),a.jsx("p",{className:"movie-modal-description",children:p.description||"High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support."}),a.jsxs("div",{className:"movie-modal-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(p),children:[a.jsx(fn,{size:17,fill:"#ffffff",strokeWidth:0}),a.jsx("span",{children:Ae?"Resume Playback":"Play Movie"})]}),Ae&&a.jsxs("button",{className:"btn-secondary",onClick:()=>t({...p,progress_seconds:0}),title:"Play from 00:00",children:[a.jsx(oo,{size:15}),a.jsx("span",{children:"Start Over"})]}),r&&a.jsxs("button",{className:p.is_favorite?"btn-danger":"btn-secondary",onClick:()=>r(p.id),children:[a.jsx(Hi,{size:16,fill:p.is_favorite?"currentColor":"none"}),a.jsx("span",{children:p.is_favorite?"Favorited":"Favorite"})]}),d&&a.jsxs("button",{className:"btn-warning-outline",onClick:()=>{e(),d(p)},title:"Remove from StreamLink library (keeps original file)",children:[a.jsx(Or,{size:15}),a.jsx("span",{children:"Remove from Library"})]}),f&&a.jsxs("button",{className:"btn-danger-outline",onClick:()=>{e(),f(p)},title:"Permanently delete video file from disk",children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Delete File"})]})]}),a.jsxs("div",{className:"movie-modal-file-info",children:[a.jsxs("div",{className:"file-info-row",style:{gridColumn:"1 / -1"},children:[a.jsx("span",{className:"file-info-label",children:"File Location"}),a.jsx("span",{className:"file-info-value",title:p.file_path,style:{wordBreak:"break-all"},children:p.file_path})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Resolution"}),a.jsx("span",{className:"file-info-value accent-cyan",children:p.resolution||"Standard"})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"File Size"}),a.jsx("span",{className:"file-info-value",children:si(p.file_size)})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Codec / Container"}),a.jsxs("span",{className:"file-info-value",children:[p.codec||"H264"," / ",p.container||"MP4"]})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Subtitles"}),a.jsx("span",{className:"file-info-value",children:Se?`${p.subtitles.length} track(s) available`:"None embedded"})]})]}),a.jsx("div",{className:"tmdb-attribution-note",children:a.jsx("span",{children:"Film metadata & high-resolution artwork powered by The Movie Database (TMDB)."})})]})]}),ie&&a.jsx("div",{className:"tmdb-search-popover-overlay",onClick:()=>J(!1),children:a.jsxs("div",{className:"tmdb-search-popover-window",onClick:ze=>ze.stopPropagation(),children:[a.jsxs("div",{className:"tmdb-popover-header",children:[a.jsxs("div",{className:"tmdb-title-pill",children:[a.jsx(mi,{size:16,className:"text-cyan"}),a.jsx("span",{children:"SEARCH & MATCH ON TMDB"})]}),a.jsx("button",{className:"modal-close-btn",onClick:()=>J(!1),children:a.jsx(Wi,{size:18})})]}),a.jsxs("form",{className:"tmdb-search-form",onSubmit:ht,children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Movie title (e.g. Annabelle Creation, Inception)...",value:j,onChange:ze=>$(ze.target.value),autoFocus:!0}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Year (optional)",style:{width:"120px"},value:te,onChange:ze=>q(ze.target.value),maxLength:4}),a.jsxs("button",{type:"submit",className:"btn-primary",disabled:Y,children:[a.jsx(ps,{size:15}),a.jsx("span",{children:Y?"Searching...":"Search"})]})]}),X&&a.jsx("div",{className:"profiles-error-banner",style:{margin:"14px 0"},children:X}),a.jsx("div",{className:"tmdb-results-list",children:Y?a.jsxs("div",{className:"loading-state-3d",style:{padding:"30px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Searching official TMDB database..."})]}):ee.length>0?ee.map(ze=>a.jsxs("div",{className:"tmdb-candidate-card",children:[a.jsx("div",{className:"candidate-poster-thumb",children:ze.poster_url?a.jsx("img",{src:ze.poster_url,alt:ze.title}):a.jsx("div",{className:"thumb-placeholder",children:a.jsx(Film,{size:20})})}),a.jsxs("div",{className:"candidate-info",children:[a.jsxs("div",{className:"candidate-title-row",children:[a.jsx("h4",{children:ze.title}),ze.year&&a.jsxs("span",{className:"candidate-year",children:["(",ze.year,")"]}),a.jsxs("span",{className:`confidence-pill ${ze.confidence_score>=75?"high":"medium"}`,children:[ze.confidence_score,"% Match"]})]}),a.jsx("p",{className:"candidate-overview",children:ze.overview?ze.overview.slice(0,160)+"...":"No overview available."})]}),a.jsxs("button",{className:"btn-primary btn-sm candidate-select-btn",onClick:()=>Ye(ze),disabled:K,children:[a.jsx(wn,{size:14}),a.jsx("span",{children:K?"Applying...":"Select"})]})]},ze.id)):a.jsx("div",{className:"tmdb-no-results",children:a.jsxs("p",{children:["Enter movie title and press ",a.jsx("strong",{children:"Search"})," to query TMDB."]})})})]})})]})})}function qy({token:s}){const[e,t]=G.useState(!0),[r,l]=G.useState(""),[c,d]=G.useState(!1),[f,p]=G.useState(""),[m,v]=G.useState(null),[M,_]=G.useState(""),[S,b]=G.useState(null),[w,x]=G.useState(null),y=async(I=f)=>{t(!0),l("");try{const U=await fetch(cn("/api/share/public/access"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,passcode:I})}),E=await U.json();if(!U.ok){E.requiresPasscode?d(!0):l(E.error||"Failed to access stream");return}d(!1),v(E),E.type==="movie"&&E.movie&&b(E.movie)}catch{l("Unable to connect to host streaming PC")}finally{t(!1)}};G.useEffect(()=>{y()},[s]);const P=I=>{I.preventDefault(),y(f)};if(w){const I=`/api/share/public/stream/${s}/${w.id}`;return a.jsx(ox,{movie:{...w,streamUrlOverride:I},onBack:()=>x(null),token:s})}if(c)return a.jsx("div",{className:"viewer-auth-container",children:a.jsxs("div",{className:"viewer-auth-card",children:[a.jsx("div",{className:"viewer-brand-badge",children:a.jsx(pi,{size:24})}),a.jsx("h2",{style:{fontSize:"20px",fontWeight:800},children:"StreamLink Movie Share"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"13px",marginTop:"6px"},children:"This stream is protected with a security passcode set by the host."}),r&&a.jsxs("div",{className:"viewer-error-box",children:[a.jsx(uo,{size:15}),a.jsx("span",{children:r})]}),a.jsxs("form",{onSubmit:P,style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{type:"password",placeholder:"Enter Passcode / PIN",value:f,onChange:I=>p(I.target.value),required:!0,style:{width:"100%",paddingLeft:"38px",textAlign:"center",letterSpacing:"2px",fontSize:"16px"},autoFocus:!0}),a.jsx(Cc,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-dim)"}})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"12px"},disabled:e,children:a.jsx("span",{children:e?"Verifying...":"Unlock & Watch"})})]})]})});if(e)return a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Connecting to private streaming server..."})]});if(r||!m)return a.jsxs("div",{className:"viewer-error-screen",children:[a.jsx(uo,{size:48,color:"var(--danger)"}),a.jsx("h2",{style:{fontSize:"22px",marginTop:"16px"},children:"Stream Unavailable"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px",maxWidth:"420px",marginTop:"8px"},children:r||"The sharing link is either invalid, disabled, or the host computer has stopped streaming."})]});const D=m.type==="library"||m.type==="folder",A=D?(m.movies||[]).filter(I=>!M||I.clean_title.toLowerCase().includes(M.toLowerCase())):m.movie?[m.movie]:[];return a.jsxs("div",{className:"public-viewer-layout",children:[a.jsxs("header",{className:"viewer-navbar",children:[a.jsxs("div",{className:"viewer-brand",children:[a.jsx("div",{className:"nav-logo-icon",children:a.jsx(pi,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"viewer-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})]}),a.jsx("span",{className:"viewer-live-badge",children:m.type==="folder"?"SHARED FOLDER":"DIRECT STREAM"})]}),D&&a.jsxs("div",{className:"viewer-search-box",children:[a.jsx(ps,{size:15,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:m.type==="folder"?`Search ${m.folderName||"folder"}...`:"Search movies...",value:M,onChange:I=>_(I.target.value)})]})]}),a.jsx("main",{className:"viewer-main",children:m.type==="movie"&&m.movie?a.jsxs("div",{className:"single-movie-showcase",children:[a.jsx("div",{className:"single-movie-poster-box",children:a.jsx("img",{src:cn(`/api/movies/${m.movie.id}/poster`),alt:m.movie.clean_title})}),a.jsxs("div",{className:"single-movie-info-box",children:[a.jsxs("div",{className:"single-movie-badges-row",children:[a.jsx("span",{className:"hero-badge-pill",children:"AUTHORIZED DIRECT STREAM"}),m.movie.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",style:{position:"static"},children:m.movie.resolution}),m.movie.year&&a.jsx("span",{className:"hero-badge-year",children:m.movie.year})]}),a.jsx("h1",{className:"single-movie-title",children:m.movie.clean_title}),a.jsxs("div",{className:"single-movie-meta-row",children:[a.jsxs("span",{className:"meta-pill",children:[a.jsx(Gr,{size:12})," ",Wr(m.movie.duration)]}),a.jsxs("span",{className:"meta-pill",children:[a.jsx($i,{size:12})," ",si(m.movie.file_size)]})]}),a.jsx("p",{className:"single-movie-desc",children:m.movie.description||"Streamed in original high-bitrate quality directly from the host Windows workstation. Multi-channel audio and instant HTTP range seeking."}),a.jsxs("button",{className:"btn-primary hero-btn-play",onClick:()=>x(m.movie),children:[a.jsx(fn,{size:18,fill:"#fff"}),a.jsx("span",{children:"Play Movie Now"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"viewer-heading-row",children:m.type==="folder"?a.jsxs("div",{className:"viewer-folder-header-box",children:[a.jsx("div",{className:"viewer-folder-icon-circle",children:a.jsx(hs,{size:22})}),a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:[m.folderName||"Shared Folder",a.jsxs("span",{className:"viewer-count-pill",children:[A.length," ",A.length===1?"Movie":"Movies"]})]}),a.jsxs("p",{className:"viewer-page-subtitle",children:[m.label&&m.label!==m.folderName?`${m.label} • `:"","Streamed directly from host Windows PC. No app download needed."]})]})]}):a.jsx("div",{className:"viewer-folder-header-box",children:a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:["Available Movies",a.jsx("span",{className:"viewer-count-pill",children:A.length})]}),a.jsx("p",{className:"viewer-page-subtitle",children:"Tap any movie to stream directly from the host computer."})]})})}),A.length===0?a.jsx("div",{className:"viewer-empty-box",children:M?"No movies found matching your search query.":"No movies currently found in this shared folder."}):a.jsx("div",{className:"movie-grid-3d",children:A.map(I=>a.jsxs("div",{className:"movie-card-3d",onClick:()=>b(I),children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:cn(`/api/movies/${I.id}/poster`),alt:I.clean_title,className:"poster-img-3d",loading:"lazy"}),a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("div",{className:"play-circle-3d",children:a.jsx(fn,{size:22,fill:"#fff",strokeWidth:0})})}),I.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",children:I.resolution}),I.year&&a.jsx("span",{className:"badge-3d badge-top-right",children:I.year})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:I.clean_title,children:I.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(Gr,{size:11})," ",Wr(I.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11})," ",si(I.file_size)]})]})]})]},I.id))})]})}),S&&a.jsx(lx,{movie:S,onClose:()=>b(null),onPlay:I=>{b(null),x(I)},onToggleFavorite:()=>{}})]})}const Gm=["#8B5CF6","#38BDF8","#EC4899","#10B981","#F59E0B","#6366F1"];function Yy({isOpen:s,onClose:e,authFetch:t,onProfileChange:r,currentProfile:l}){const[c,d]=G.useState([]),[f,p]=G.useState(!0),[m,v]=G.useState(!1),[M,_]=G.useState(""),[S,b]=G.useState(Gm[0]),[w,x]=G.useState(""),y=()=>{p(!0),t("/api/user/profiles").then(A=>A.json()).then(A=>{d(A.profiles||[])}).catch(()=>{}).finally(()=>p(!1))};G.useEffect(()=>{s&&(y(),v(!1),x(""))},[s]);const P=async A=>{if(A.preventDefault(),!!M.trim())try{const I=await t("/api/user/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M.trim(),avatar_color:S,avatar_icon:"film"})}),U=await I.json();if(!I.ok){x(U.error||"Failed to create profile");return}_(""),v(!1),y()}catch{x("Network error creating profile")}},D=async(A,I)=>{if(window.confirm(`Delete profile "${I}"? Watchlist and history for this profile will be removed.`))try{const U=await t(`/api/user/profiles/${A}`,{method:"DELETE"}),E=await U.json();if(!U.ok){alert(E.error||"Failed to delete profile");return}y()}catch{alert("Network error deleting profile")}};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"profiles-modal-window",onClick:A=>A.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(Vf,{size:16,className:"text-cyan"}),a.jsx("span",{children:"WHO'S WATCHING STREAMLINK?"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),w&&a.jsx("div",{className:"profiles-error-banner",children:w}),f?a.jsxs("div",{className:"loading-state-3d",style:{padding:"40px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading user profiles..."})]}):a.jsxs("div",{className:"profiles-grid-wrap",children:[c.map(A=>{const I=(l==null?void 0:l.id)===A.id;return a.jsxs("div",{className:`profile-card-item ${I?"active":""}`,onClick:()=>{r(A),e()},children:[a.jsxs("div",{className:"profile-avatar-circle",style:{backgroundColor:A.avatar_color||"#8B5CF6"},children:[a.jsx(ix,{size:32,color:"#FFFFFF"}),I&&a.jsx("div",{className:"active-badge-indicator",children:a.jsx(wn,{size:12,strokeWidth:3})})]}),a.jsx("span",{className:"profile-name-label",children:A.name}),c.length>1&&a.jsx("button",{className:"profile-delete-icon",onClick:U=>{U.stopPropagation(),D(A.id,A.name)},title:"Delete profile",children:a.jsx(Vr,{size:13})})]},A.id)}),c.length<6&&!m&&a.jsxs("div",{className:"profile-card-item add-new",onClick:()=>v(!0),children:[a.jsx("div",{className:"profile-avatar-circle dashed",children:a.jsx(Gf,{size:28})}),a.jsx("span",{className:"profile-name-label",children:"Add Profile"})]})]}),m&&a.jsxs("form",{className:"create-profile-form",onSubmit:P,children:[a.jsx("h4",{children:"Create Viewer Profile"}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Profile Name (e.g. Cinema Room, Family)",value:M,onChange:A=>_(A.target.value),autoFocus:!0,maxLength:24,required:!0}),a.jsxs("div",{className:"color-picker-row",children:[a.jsx("span",{className:"text-xs text-dim",children:"Avatar Glow Color:"}),a.jsx("div",{className:"colors-list",children:Gm.map(A=>a.jsx("button",{type:"button",className:`color-dot-btn ${S===A?"active":""}`,style:{backgroundColor:A},onClick:()=>b(A)},A))})]}),a.jsxs("div",{className:"form-actions-row",children:[a.jsx("button",{type:"submit",className:"btn-primary btn-sm",children:"Save Profile"}),a.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>v(!1),children:"Cancel"})]})]})]})}):null}const Ft={HIGH:"high",MEDIUM:"medium",LOW:"low",REDUCED_MOTION:"reduced_motion"};class Ky{constructor(){if(this.mode="auto",this.currentLevel=Ft.HIGH,this.fps=60,this.frameTimes=[],this.lastTime=performance.now(),this.listeners=new Set,this.consecutiveLowFrames=0,this.consecutiveHighFrames=0,this.isWebGLAvailable=this.checkWebGLSupport(),typeof window<"u"&&window.matchMedia&&(this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.reducedMotionQuery.matches&&(this.currentLevel=Ft.REDUCED_MOTION),this.reducedMotionQuery.addEventListener("change",e=>{e.matches&&this.mode==="auto"&&this.setQualityLevel(Ft.REDUCED_MOTION)})),typeof window<"u"){const e=localStorage.getItem("streamlink_cine3d_quality");e&&["auto","high","medium","low","reduced_motion"].includes(e)&&(this.mode=e,e!=="auto"&&(this.currentLevel=e))}!this.isWebGLAvailable&&this.currentLevel!==Ft.REDUCED_MOTION&&(this.currentLevel=Ft.LOW)}checkWebGLSupport(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}setMode(e){var t;this.mode=e,typeof window<"u"&&localStorage.setItem("streamlink_cine3d_quality",e),e==="auto"?this.currentLevel=(t=this.reducedMotionQuery)!=null&&t.matches?Ft.REDUCED_MOTION:Ft.HIGH:this.currentLevel=e,this.notifyListeners()}setQualityLevel(e){this.currentLevel!==e&&(this.currentLevel=e,this.notifyListeners())}onFrame(){if(this.mode!=="auto"||!this.isWebGLAvailable)return;const e=performance.now(),t=e-this.lastTime;if(this.lastTime=e,t>0){const r=1e3/t;this.frameTimes.push(r),this.frameTimes.length>45&&this.frameTimes.shift();const l=this.frameTimes.reduce((c,d)=>c+d,0)/this.frameTimes.length;this.fps=Math.round(l),l<28?(this.consecutiveLowFrames++,this.consecutiveHighFrames=0,this.consecutiveLowFrames>90&&(this.currentLevel===Ft.HIGH?this.setQualityLevel(Ft.MEDIUM):this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.LOW),this.consecutiveLowFrames=0)):l>52&&(this.consecutiveHighFrames++,this.consecutiveLowFrames=0,this.consecutiveHighFrames>180&&(this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.HIGH),this.consecutiveHighFrames=0))}}subscribe(e){return this.listeners.add(e),e(this.currentLevel,this.mode,this.fps),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLevel,this.mode,this.fps))}}const $n=new Ky;function Zy({isOpen:s,onClose:e,ambientEnabled:t,onToggleAmbient:r}){const[l,c]=G.useState($n.mode),[d,f]=G.useState($n.currentLevel),[p,m]=G.useState($n.fps);G.useEffect(()=>$n.subscribe((M,_,S)=>{f(M),c(_),m(S)}),[]);const v=M=>{$n.setMode(M),c(M)};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"quality-modal-window",onClick:M=>M.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(nx,{size:16,className:"text-cyan"}),a.jsx("span",{children:"CINE-3D GRAPHICS & PERFORMANCE"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"quality-stats-banner",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"RENDER QUALITY"}),a.jsx("span",{className:"stat-val text-cyan",children:d.toUpperCase()})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"REAL-TIME FPS"}),a.jsxs("span",{className:"stat-val",children:[p>0?p:60," FPS"]})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"WEBGL 2.0"}),a.jsx("span",{className:"stat-val text-violet",children:$n.isWebGLAvailable?"ACTIVE":"FALLBACK"})]})]}),a.jsxs("div",{className:"quality-options-list",children:[a.jsxs("div",{className:`quality-option-card ${l==="auto"?"active":""}`,onClick:()=>v("auto"),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(rx,{size:16,className:"text-cyan"}),a.jsx("strong",{children:"Auto-Adaptive (Recommended)"})]}),a.jsx("p",{children:"Dynamically scales particle count and geometry resolution based on your GPU and display refresh rate."})]}),l==="auto"&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.HIGH?"active":""}`,onClick:()=>v(Ft.HIGH),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Hf,{size:16,className:"text-violet"}),a.jsx("strong",{children:"High Fidelity"})]}),a.jsx("p",{children:"Full 3D cinematic scene, high particle counts, procedural lighting, and soft shadows."})]}),l===Ft.HIGH&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.MEDIUM?"active":""}`,onClick:()=>v(Ft.MEDIUM),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Kg,{size:16,className:"text-muted"}),a.jsx("strong",{children:"Balanced"})]}),a.jsx("p",{children:"Optimized for laptops and integrated graphics. Streamlined particles and lighting."})]}),l===Ft.MEDIUM&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.LOW?"active":""}`,onClick:()=>v(Ft.LOW),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(ex,{size:16,className:"text-dim"}),a.jsx("strong",{children:"Low / 2D Canvas Mode"})]}),a.jsx("p",{children:"Disables heavy WebGL loops; uses lightweight CSS 3D perspective. Ideal for battery saving or older devices."})]}),l===Ft.LOW&&a.jsx(wn,{size:18,className:"text-cyan"})]})]}),a.jsxs("div",{className:"ambient-switch-row",children:[a.jsxs("div",{className:"ambient-switch-text",children:[a.jsx("strong",{children:"Ambient Cinema Glow"}),a.jsx("p",{className:"text-xs text-dim",children:"Projects subtle dynamic ambient color glows matching movie artwork."})]}),a.jsx("button",{className:`toggle-switch-pill ${t?"on":"off"}`,onClick:r,children:a.jsx("div",{className:"toggle-handle"})})]}),a.jsx("div",{className:"modal-footer-actions",children:a.jsx("button",{className:"btn-primary btn-sm",onClick:e,children:"Done"})})]})}):null}function Qy({message:s="Loading StreamLink 2.0 Cinema...",onRetry:e}){const[t,r]=G.useState(!1);return G.useEffect(()=>{const l=setTimeout(()=>{r(!0)},8e3);return()=>clearTimeout(l)},[]),a.jsxs("div",{className:"obsidian-loading-container",role:"status","aria-live":"polite",children:[a.jsx("div",{className:"obsidian-ambient-glow"}),a.jsxs("div",{className:"obsidian-loader-core",children:[a.jsxs("div",{className:"obsidian-emblem-wrapper",children:[a.jsx("div",{className:"obsidian-pulse-ring outer"}),a.jsx("div",{className:"obsidian-pulse-ring inner"}),a.jsx("div",{className:"obsidian-emblem-badge",children:a.jsx(pi,{size:34,className:"obsidian-film-icon"})})]}),a.jsxs("div",{className:"obsidian-loader-brand",children:[a.jsxs("span",{className:"brand-title",children:["Stream",a.jsx("span",{className:"brand-lavender",children:"Link"}),a.jsx("span",{className:"brand-version-pill",children:"2.0"})]}),a.jsx("span",{className:"brand-subtitle",children:"OBSIDIAN CINEMA"})]}),a.jsx("p",{className:"obsidian-loader-status",children:s}),a.jsx("div",{className:"obsidian-progress-track",children:a.jsx("div",{className:"obsidian-progress-shimmer"})}),t&&a.jsxs("div",{className:"obsidian-retry-prompt",children:[a.jsxs("span",{className:"retry-hint",children:[a.jsx(ho,{size:14,className:"text-warning"}),"Taking longer than expected?"]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:()=>{e?e():window.location.reload()},children:[a.jsx(Ni,{size:13}),a.jsx("span",{children:"Retry Connection"})]})]})]})]})}function Jy(){const s=G.useRef(null);return G.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches)return;let e=window.innerWidth/2,t=window.innerHeight/2,r=e,l=t,c=null;const d=p=>{e=p.clientX,t=p.clientY;const m=(p.clientX/window.innerWidth-.5)*2,v=(p.clientY/window.innerHeight-.5)*2;document.documentElement.style.setProperty("--mouse-norm-x",m.toFixed(3)),document.documentElement.style.setProperty("--mouse-norm-y",v.toFixed(3)),document.documentElement.style.setProperty("--cursor-x",`${p.clientX}px`),document.documentElement.style.setProperty("--cursor-y",`${p.clientY}px`)},f=()=>{r+=(e-r)*.15,l+=(t-l)*.15,s.current&&(s.current.style.transform=`translate3d(${r-300}px, ${l-300}px, 0)`),c=requestAnimationFrame(f)};return window.addEventListener("pointermove",d,{passive:!0}),c=requestAnimationFrame(f),()=>{window.removeEventListener("pointermove",d),c&&cancelAnimationFrame(c)}},[]),a.jsx("div",{ref:s,className:"ambient-cursor-light","aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xf="187",eS=0,Vm=1,tS=2,ac=1,nS=2,ro=3,ms=0,Kn=1,Bi=2,oa=0,lo=1,$d=2,Wm=3,Xm=4,iS=5,ra=100,rS=101,sS=102,aS=103,oS=104,lS=200,cS=201,uS=202,dS=203,cx=204,ux=205,fS=206,hS=207,pS=208,mS=209,gS=210,xS=211,vS=212,_S=213,yS=214,qd=0,Yd=1,Kd=2,po=3,Zd=4,Qd=5,Jd=6,ef=7,dx=0,SS=1,MS=2,dr=0,fx=1,hx=2,px=3,mx=4,gx=5,xx=6,vx=7,_x=300,ua=301,mo=302,md=303,gd=304,tf=1e3,ur=1001,nf=1002,An=1003,ES=1004,Ll=1005,Yn=1006,xd=1007,Br=1008,ri=1009,yx=1010,Sx=1011,go=1012,$f=1013,qi=1014,Gi=1015,Yi=1016,qf=1017,Yf=1018,da=1020,Mx=35902,Ex=35899,wx=1021,bx=1022,Vi=1023,Xr=1026,Hr=1027,Tx=1028,Kf=1029,gs=1030,Zf=1031,Qf=1033,oc=33776,lc=33777,cc=33778,uc=33779,rf=35840,sf=35841,af=35842,of=35843,lf=36196,cf=37492,uf=37496,df=37488,ff=37489,gc=37490,hf=37491,pf=37808,mf=37809,gf=37810,xf=37811,vf=37812,_f=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,wf=37818,bf=37819,Tf=37820,Cf=37821,Af=36492,Nf=36494,Rf=36495,Pf=36283,Lf=36284,xc=36285,Df=36286,wS=3200,If=0,bS=1,jr="",hi="srgb",vc="srgb-linear",_c="linear",Vt="srgb",vd=7680,TS=519,CS=512,AS=513,NS=514,Cx=515,RS=516,PS=517,Ax=518,Nx=519,LS=35044,$m="300 es",Ai=2e3,xo=2001;function DS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function IS(){const s=vo("canvas");return s.style.display="block",s}const qm={};function Ym(...s){const e="THREE."+s.shift();console.log(e,...s)}function Rx(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=Rx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=Rx(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function dc(...s){const e=s.join(" ");e in qm||(qm[e]=!0,vt(...s))}function kS(s,e,t){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const US={[qd]:qd,[Kd]:Jd,[Zd]:Zd,[po]:Qd,[Yd]:Yd,[Jd]:Kd,[ef]:ef,[Qd]:po};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,yc=180/Math.PI;function yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function It(s,e,t){return Math.max(e,Math.min(t,s))}function FS(s,e){return(s%e+e)%e}function yd(s,e,t){return(1-t)*s+t*e}function OS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Jf(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function zS(s,e){if(e.constructor===Float32Array)return s;const t=Jf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function jS(s,e){if(e.constructor===Float32Array)return s;const t=Jf(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const ah=class ah{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6],this.y=l[1]*t+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};ah.prototype.isVector2=!0;let kt=ah;class pa{constructor(e=0,t=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=l}static slerpFlat(e,t,r,l,c,d,f){let p=r[l+0],m=r[l+1],v=r[l+2],M=r[l+3],_=c[d+0],S=c[d+1],b=c[d+2],w=c[d+3];if(M!==w||p!==_||m!==S||v!==b){let x=p*_+m*S+v*b+M*w;x<0&&(_=-_,S=-S,b=-b,w=-w,x=-x);let y=1-f;if(x<.9995){const P=Math.acos(x),D=Math.sin(P);y=Math.sin(y*P)/D,f=Math.sin(f*P)/D,p=p*y+_*f,m=m*y+S*f,v=v*y+b*f,M=M*y+w*f}else{p=p*y+_*f,m=m*y+S*f,v=v*y+b*f,M=M*y+w*f;const P=1/Math.sqrt(p*p+m*m+v*v+M*M);p*=P,m*=P,v*=P,M*=P}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,l,c,d){const f=r[l],p=r[l+1],m=r[l+2],v=r[l+3],M=c[d],_=c[d+1],S=c[d+2],b=c[d+3];return e[t]=f*b+v*M+p*S-m*_,e[t+1]=p*b+v*_+m*M-f*S,e[t+2]=m*b+v*S+f*_-p*M,e[t+3]=v*b-f*M-p*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,l){return this._x=e,this._y=t,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,l=e._y,c=e._z,d=e._order,f=Math.cos,p=Math.sin,m=f(r/2),v=f(l/2),M=f(c/2),_=p(r/2),S=p(l/2),b=p(c/2);switch(d){case"XYZ":this._x=_*v*M+m*S*b,this._y=m*S*M-_*v*b,this._z=m*v*b+_*S*M,this._w=m*v*M-_*S*b;break;case"YXZ":this._x=_*v*M+m*S*b,this._y=m*S*M-_*v*b,this._z=m*v*b-_*S*M,this._w=m*v*M+_*S*b;break;case"ZXY":this._x=_*v*M-m*S*b,this._y=m*S*M+_*v*b,this._z=m*v*b+_*S*M,this._w=m*v*M-_*S*b;break;case"ZYX":this._x=_*v*M-m*S*b,this._y=m*S*M+_*v*b,this._z=m*v*b-_*S*M,this._w=m*v*M+_*S*b;break;case"YZX":this._x=_*v*M+m*S*b,this._y=m*S*M+_*v*b,this._z=m*v*b-_*S*M,this._w=m*v*M-_*S*b;break;case"XZY":this._x=_*v*M-m*S*b,this._y=m*S*M-_*v*b,this._z=m*v*b+_*S*M,this._w=m*v*M+_*S*b;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],l=t[4],c=t[8],d=t[1],f=t[5],p=t[9],m=t[2],v=t[6],M=t[10],_=r+f+M;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(d-l)*S}else if(r>f&&r>M){const S=2*Math.sqrt(1+r-f-M);this._w=(v-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+m)/S}else if(f>M){const S=2*Math.sqrt(1+f-r-M);this._w=(c-m)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+M-r-f);this._w=(d-l)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(It(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,t/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,l=e._y,c=e._z,d=e._w,f=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+d*f+l*m-c*p,this._y=l*v+d*p+c*f-r*m,this._z=c*v+d*m+r*p-l*f,this._w=d*v-r*f-l*p-c*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,l=e._y,c=e._z,d=e._w,f=this.dot(e);f<0&&(r=-r,l=-l,c=-c,d=-d,f=-f);let p=1-t;if(f<.9995){const m=Math.acos(f),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const oh=class oh{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Km.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Km.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*l,this.y=c[1]*t+c[4]*r+c[7]*l,this.z=c[2]*t+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,l=this.z,c=e.x,d=e.y,f=e.z,p=e.w,m=2*(d*l-f*r),v=2*(f*t-c*l),M=2*(c*r-d*t);return this.x=t+p*m+d*M-f*v,this.y=r+p*v+f*m-c*M,this.z=l+p*M+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*l,this.y=c[1]*t+c[5]*r+c[9]*l,this.z=c[2]*t+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,l=e.y,c=e.z,d=t.x,f=t.y,p=t.z;return this.x=l*p-c*f,this.y=c*d-r*p,this.z=r*f-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(It(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return t*t+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const l=Math.sin(t)*e;return this.x=l*Math.sin(r),this.y=Math.cos(t)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};oh.prototype.isVector3=!0;let de=oh;const Sd=new de,Km=new pa,lh=class lh{constructor(e,t,r,l,c,d,f,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,p,m)}set(e,t,r,l,c,d,f,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=f,v[3]=t,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[3],p=r[6],m=r[1],v=r[4],M=r[7],_=r[2],S=r[5],b=r[8],w=l[0],x=l[3],y=l[6],P=l[1],D=l[4],A=l[7],I=l[2],U=l[5],E=l[8];return c[0]=d*w+f*P+p*I,c[3]=d*x+f*D+p*U,c[6]=d*y+f*A+p*E,c[1]=m*w+v*P+M*I,c[4]=m*x+v*D+M*U,c[7]=m*y+v*A+M*E,c[2]=_*w+S*P+b*I,c[5]=_*x+S*D+b*U,c[8]=_*y+S*A+b*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*f*m-r*c*v+r*f*p+l*c*m-l*d*p}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],M=v*d-f*m,_=f*p-v*c,S=m*c-d*p,b=t*M+r*_+l*S;if(b===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/b;return e[0]=M*w,e[1]=(l*m-v*r)*w,e[2]=(f*r-l*d)*w,e[3]=_*w,e[4]=(v*t-l*p)*w,e[5]=(l*c-f*t)*w,e[6]=S*w,e[7]=(r*p-m*t)*w,e[8]=(d*t-r*c)*w,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,l,c,d,f){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*f)+d+e,-l*m,l*p,-l*(-m*d+p*f)+f+t,0,0,1),this}scale(e,t){return dc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Md.makeScale(e,t)),this}rotate(e){return dc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return dc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<9;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};lh.prototype.isMatrix3=!0;let Mt=lh;const Md=new Mt,Zm=new Mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qm=new Mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function BS(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=fr(l.r),l.g=fr(l.g),l.b=fr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===jr?_c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:hi},outputColorSpaceConfig:{drawingBufferColorSpace:hi}},[hi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:Zm,fromXYZ:Qm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:hi}}}),s}const Dt=BS();function fr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ws;class HS{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=vo("canvas")),Ws.width=e.width,Ws.height=e.height;const l=Ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=fr(c[d]/255)*255;return r.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(fr(t[r]/255)*255):t[r]=fr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let GS=0;class eh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,f=l.length;d<f;d++)l[d].isDataTexture?c.push(Ed(l[d].image)):c.push(Ed(l[d]))}else c=Ed(l);r.url=c}return t||(e.images[this.uuid]=r),r}}function Ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?HS.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let VS=0;const wd=new de;class Nn extends vs{constructor(e=Nn.DEFAULT_IMAGE,t=Nn.DEFAULT_MAPPING,r=ur,l=ur,c=Yn,d=Br,f=Vi,p=ri,m=Nn.DEFAULT_ANISOTROPY,v=jr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:VS++}),this.uuid=yo(),this.name="",this.source=new eh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=p,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Mt,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==_x)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case tf:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case nf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case tf:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case nf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Nn.DEFAULT_IMAGE=null;Nn.DEFAULT_MAPPING=_x;Nn.DEFAULT_ANISOTROPY=1;const ch=class ch{constructor(e=0,t=0,r=0,l=1){this.x=e,this.y=t,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,l){return this.x=e,this.y=t,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,l,c;const p=e.elements,m=p[0],v=p[4],M=p[8],_=p[1],S=p[5],b=p[9],w=p[2],x=p[6],y=p[10];if(Math.abs(v-_)<.01&&Math.abs(M-w)<.01&&Math.abs(b-x)<.01){if(Math.abs(v+_)<.1&&Math.abs(M+w)<.1&&Math.abs(b+x)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(m+1)/2,A=(S+1)/2,I=(y+1)/2,U=(v+_)/4,E=(M+w)/4,L=(b+x)/4;return D>A&&D>I?D<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(D),l=U/r,c=E/r):A>I?A<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(A),r=U/l,c=L/l):I<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(I),r=E/c,l=L/c),this.set(r,l,c,t),this}let P=Math.sqrt((x-b)*(x-b)+(M-w)*(M-w)+(_-v)*(_-v));return Math.abs(P)<.001&&(P=1),this.x=(x-b)/P,this.y=(M-w)/P,this.z=(_-v)/P,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=It(this.x,e.x,t.x),this.y=It(this.y,e.y,t.y),this.z=It(this.z,e.z,t.z),this.w=It(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=It(this.x,e,t),this.y=It(this.y,e,t),this.z=It(this.z,e,t),this.w=It(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(It(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};ch.prototype.isVector4=!0;let rn=ch;class WS extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=new Nn({width:e,height:t,depth:r.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Yn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const l=Object.assign({},e.textures[t].image);this.textures[t].source=new eh(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends WS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Px extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class XS extends Nn{constructor(e=null,t=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=An,this.minFilter=An,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bc=class bc{constructor(e,t,r,l,c,d,f,p,m,v,M,_,S,b,w,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,f,p,m,v,M,_,S,b,w,x)}set(e,t,r,l,c,d,f,p,m,v,M,_,S,b,w,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=l,y[1]=c,y[5]=d,y[9]=f,y[13]=p,y[2]=m,y[6]=v,y[10]=M,y[14]=_,y[3]=S,y[7]=b,y[11]=w,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,l=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*l,t[1]=r[1]*l,t[2]=r[2]*l,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),f=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const _=d*v,S=d*M,b=f*v,w=f*M;t[0]=p*v,t[4]=-p*M,t[8]=m,t[1]=S+b*m,t[5]=_-w*m,t[9]=-f*p,t[2]=w-_*m,t[6]=b+S*m,t[10]=d*p}else if(e.order==="YXZ"){const _=p*v,S=p*M,b=m*v,w=m*M;t[0]=_+w*f,t[4]=b*f-S,t[8]=d*m,t[1]=d*M,t[5]=d*v,t[9]=-f,t[2]=S*f-b,t[6]=w+_*f,t[10]=d*p}else if(e.order==="ZXY"){const _=p*v,S=p*M,b=m*v,w=m*M;t[0]=_-w*f,t[4]=-d*M,t[8]=b+S*f,t[1]=S+b*f,t[5]=d*v,t[9]=w-_*f,t[2]=-d*m,t[6]=f,t[10]=d*p}else if(e.order==="ZYX"){const _=d*v,S=d*M,b=f*v,w=f*M;t[0]=p*v,t[4]=b*m-S,t[8]=_*m+w,t[1]=p*M,t[5]=w*m+_,t[9]=S*m-b,t[2]=-m,t[6]=f*p,t[10]=d*p}else if(e.order==="YZX"){const _=d*p,S=d*m,b=f*p,w=f*m;t[0]=p*v,t[4]=w-_*M,t[8]=b*M+S,t[1]=M,t[5]=d*v,t[9]=-f*v,t[2]=-m*v,t[6]=S*M+b,t[10]=_-w*M}else if(e.order==="XZY"){const _=d*p,S=d*m,b=f*p,w=f*m;t[0]=p*v,t[4]=-M,t[8]=m*v,t[1]=_*M+w,t[5]=d*v,t[9]=S*M-b,t[2]=b*M-S,t[6]=f*v,t[10]=w*M+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose($S,e,qS)}lookAt(e,t,r){const l=this.elements;return ni.subVectors(e,t),ni.lengthSq()===0&&(ni.z=1),ni.normalize(),Lr.crossVectors(r,ni),Lr.lengthSq()===0&&(Math.abs(r.z)===1?ni.x+=1e-4:ni.z+=1e-4,ni.normalize(),Lr.crossVectors(r,ni)),Lr.normalize(),Dl.crossVectors(ni,Lr),l[0]=Lr.x,l[4]=Dl.x,l[8]=ni.x,l[1]=Lr.y,l[5]=Dl.y,l[9]=ni.y,l[2]=Lr.z,l[6]=Dl.z,l[10]=ni.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],f=r[4],p=r[8],m=r[12],v=r[1],M=r[5],_=r[9],S=r[13],b=r[2],w=r[6],x=r[10],y=r[14],P=r[3],D=r[7],A=r[11],I=r[15],U=l[0],E=l[4],L=l[8],H=l[12],z=l[1],W=l[5],ie=l[9],J=l[13],j=l[2],$=l[6],te=l[10],q=l[14],ee=l[3],O=l[7],Y=l[11],F=l[15];return c[0]=d*U+f*z+p*j+m*ee,c[4]=d*E+f*W+p*$+m*O,c[8]=d*L+f*ie+p*te+m*Y,c[12]=d*H+f*J+p*q+m*F,c[1]=v*U+M*z+_*j+S*ee,c[5]=v*E+M*W+_*$+S*O,c[9]=v*L+M*ie+_*te+S*Y,c[13]=v*H+M*J+_*q+S*F,c[2]=b*U+w*z+x*j+y*ee,c[6]=b*E+w*W+x*$+y*O,c[10]=b*L+w*ie+x*te+y*Y,c[14]=b*H+w*J+x*q+y*F,c[3]=P*U+D*z+A*j+I*ee,c[7]=P*E+D*W+A*$+I*O,c[11]=P*L+D*ie+A*te+I*Y,c[15]=P*H+D*J+A*q+I*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[12],d=e[1],f=e[5],p=e[9],m=e[13],v=e[2],M=e[6],_=e[10],S=e[14],b=e[3],w=e[7],x=e[11],y=e[15],P=p*S-m*_,D=f*S-m*M,A=f*_-p*M,I=d*S-m*v,U=d*_-p*v,E=d*M-f*v;return t*(w*P-x*D+y*A)-r*(b*P-x*I+y*U)+l*(b*D-w*I+y*E)-c*(b*A-w*U+x*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[1],d=e[5],f=e[9],p=e[2],m=e[6],v=e[10];return t*(d*v-f*m)-r*(c*v-f*p)+l*(c*m-d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],f=e[5],p=e[6],m=e[7],v=e[8],M=e[9],_=e[10],S=e[11],b=e[12],w=e[13],x=e[14],y=e[15],P=t*f-r*d,D=t*p-l*d,A=t*m-c*d,I=r*p-l*f,U=r*m-c*f,E=l*m-c*p,L=v*w-M*b,H=v*x-_*b,z=v*y-S*b,W=M*x-_*w,ie=M*y-S*w,J=_*y-S*x,j=P*J-D*ie+A*W+I*z-U*H+E*L;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/j;return e[0]=(f*J-p*ie+m*W)*$,e[1]=(l*ie-r*J-c*W)*$,e[2]=(w*E-x*U+y*I)*$,e[3]=(_*U-M*E-S*I)*$,e[4]=(p*z-d*J-m*H)*$,e[5]=(t*J-l*z+c*H)*$,e[6]=(x*A-b*E-y*D)*$,e[7]=(v*E-_*A+S*D)*$,e[8]=(d*ie-f*z+m*L)*$,e[9]=(r*z-t*ie-c*L)*$,e[10]=(b*U-w*A+y*P)*$,e[11]=(M*A-v*U-S*P)*$,e[12]=(f*H-d*W-p*L)*$,e[13]=(t*W-r*H+l*L)*$,e[14]=(w*D-b*I-x*P)*$,e[15]=(v*I-M*D+_*P)*$,this}scale(e){const t=this.elements,r=e.x,l=e.y,c=e.z;return t[0]*=r,t[4]*=l,t[8]*=c,t[1]*=r,t[5]*=l,t[9]*=c,t[2]*=r,t[6]*=l,t[10]*=c,t[3]*=r,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,l))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),l=Math.sin(t),c=1-r,d=e.x,f=e.y,p=e.z,m=c*d,v=c*f;return this.set(m*d+r,m*f-l*p,m*p+l*f,0,m*f+l*p,v*f+r,v*p-l*d,0,m*p-l*f,v*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,r){const l=this.elements,c=t._x,d=t._y,f=t._z,p=t._w,m=c+c,v=d+d,M=f+f,_=c*m,S=c*v,b=c*M,w=d*v,x=d*M,y=f*M,P=p*m,D=p*v,A=p*M,I=r.x,U=r.y,E=r.z;return l[0]=(1-(w+y))*I,l[1]=(S+A)*I,l[2]=(b-D)*I,l[3]=0,l[4]=(S-A)*U,l[5]=(1-(_+y))*U,l[6]=(x+P)*U,l[7]=0,l[8]=(b+D)*E,l[9]=(x-P)*E,l[10]=(1-(_+w))*E,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),t.identity(),this;let d=Xs.set(l[0],l[1],l[2]).length();const f=Xs.set(l[4],l[5],l[6]).length(),p=Xs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const m=1/d,v=1/f,M=1/p;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=M,wi.elements[9]*=M,wi.elements[10]*=M,t.setFromRotationMatrix(wi),r.x=d,r.y=f,r.z=p,this}makePerspective(e,t,r,l,c,d,f=Ai,p=!1){const m=this.elements,v=2*c/(t-e),M=2*c/(r-l),_=(t+e)/(t-e),S=(r+l)/(r-l);let b,w;if(p)b=c/(d-c),w=d*c/(d-c);else if(f===Ai)b=-(d+c)/(d-c),w=-2*d*c/(d-c);else if(f===xo)b=-d/(d-c),w=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=M,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,l,c,d,f=Ai,p=!1){const m=this.elements,v=2/(t-e),M=2/(r-l),_=-(t+e)/(t-e),S=-(r+l)/(r-l);let b,w;if(p)b=1/(d-c),w=d/(d-c);else if(f===Ai)b=-2/(d-c),w=-(d+c)/(d-c);else if(f===xo)b=-1/(d-c),w=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=M,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=b,m[14]=w,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<16;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};bc.prototype.isMatrix4=!0;let qt=bc;const Xs=new de,wi=new qt,$S=new de(0,0,0),qS=new de(1,1,1),Lr=new de,Dl=new de,ni=new de,Jm=new qt,eg=new pa;class $r{constructor(e=0,t=0,r=0,l=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,l=this._order){return this._x=e,this._y=t,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],f=l[8],p=l[1],m=l[5],v=l[9],M=l[2],_=l[6],S=l[10];switch(t){case"XYZ":this._y=Math.asin(It(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-It(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(It(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-It(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(It(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-It(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Jm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Jm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return eg.setFromEuler(this),this.setFromQuaternion(eg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class th{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let YS=0;const tg=new de,$s=new pa,sr=new qt,Il=new de,Qa=new de,KS=new de,ZS=new pa,ng=new de(1,0,0),ig=new de(0,1,0),rg=new de(0,0,1),sg={type:"added"},QS={type:"removed"},qs={type:"childadded",child:null},bd={type:"childremoved",child:null};class bn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new de,t=new $r,r=new pa,l=new de(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new Mt}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new th,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(ng,e)}rotateY(e){return this.rotateOnAxis(ig,e)}rotateZ(e){return this.rotateOnAxis(rg,e)}translateOnAxis(e,t){return tg.copy(e).applyQuaternion(this.quaternion),this.position.add(tg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ng,e)}translateY(e){return this.translateOnAxis(ig,e)}translateZ(e){return this.translateOnAxis(rg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Il.copy(e):Il.set(e,t,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Qa,Il,this.up):sr.lookAt(Il,Qa,this.up),this.quaternion.setFromRotationMatrix(sr),l&&(sr.extractRotation(l.matrixWorld),$s.setFromRotationMatrix(sr),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(sg),qs.child=e,this.dispatchEvent(qs),qs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(QS),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(sg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,KS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,ZS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*l,c[13]+=r-c[1]*t-c[5]*r-c[9]*l,c[14]+=l-c[2]*t-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const c=this.children;for(let d=0,f=c.length;d<f;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(f=>({...f})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(f,p){return f[p.uuid]===void 0&&(f[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const p=f.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const M=p[m];c(e.shapes,M)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let p=0,m=this.material.length;p<m;p++)f.push(c(e.materials,this.material[p]));l.material=f}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let f=0;f<this.children.length;f++)l.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let f=0;f<this.animations.length;f++){const p=this.animations[f];l.animations.push(c(e.animations,p))}}if(t){const f=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),M=d(e.shapes),_=d(e.skeletons),S=d(e.animations),b=d(e.nodes);f.length>0&&(r.geometries=f),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),M.length>0&&(r.shapes=M),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),b.length>0&&(r.nodes=b)}return r.object=l,r;function d(f){const p=[];for(const m in f){const v=f[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new de(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sa extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const JS={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let l=null,c=null,d=null;const f=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const w of e.hand.values()){const x=t.getJointPose(w,r),y=this._getHandJoint(m,w);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],_=v.position.distanceTo(M.position),S=.02,b=.005;m.inputState.pinching&&_>S+b?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-b&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(l=t.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(f.matrix.fromArray(l.transform.matrix),f.matrix.decompose(f.position,f.quaternion,f.scale),f.matrixWorldNeedsUpdate=!0,l.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(l.linearVelocity)):f.hasLinearVelocity=!1,l.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(l.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(JS)))}return f!==null&&(f.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new sa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Lx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Dr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class bt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=hi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,l=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Dt.colorSpaceToWorking(this,l),this}setHSL(e,t,r,l=Dt.workingColorSpace){if(e=FS(e,1),t=It(t,0,1),r=It(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=Cd(d,c,e+1/3),this.g=Cd(d,c,e),this.b=Cd(d,c,e-1/3)}return Dt.colorSpaceToWorking(this,l),this}setStyle(e,t=hi){function r(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],f=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,t);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(f))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=hi){const r=Lx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=fr(e.r),this.g=fr(e.g),this.b=fr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=hi){return Dt.workingToColorSpace(Un.copy(this),e),Math.round(It(Un.r*255,0,255))*65536+Math.round(It(Un.g*255,0,255))*256+Math.round(It(Un.b*255,0,255))}getHexString(e=hi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.workingToColorSpace(Un.copy(this),t);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),f=Math.min(r,l,c);let p,m;const v=(f+d)/2;if(f===d)p=0,m=0;else{const M=d-f;switch(m=v<=.5?M/(d+f):M/(2-d-f),d){case r:p=(l-c)/M+(l<c?6:0);break;case l:p=(c-r)/M+2;break;case c:p=(r-l)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=Dt.workingColorSpace){return Dt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=hi){Dt.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,l=Un.b;return e!==hi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,t,r){return this.getHSL(Dr),this.setHSL(Dr.h+e,Dr.s+t,Dr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Dr),e.getHSL(kl);const r=yd(Dr.h,kl.h,t),l=yd(Dr.s,kl.s,t),c=yd(Dr.l,kl.l,t);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*l,this.g=c[1]*t+c[4]*r+c[7]*l,this.b=c[2]*t+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new bt;bt.NAMES=Lx;class Ac{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new bt(e),this.density=t}clone(){return new Ac(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Dx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new de,ar=new de,Ad=new de,or=new de,Ys=new de,Ks=new de,ag=new de,Nd=new de,Rd=new de,Pd=new de,Ld=new rn,Dd=new rn,Id=new rn;class Ci{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,l){l.subVectors(r,t),bi.subVectors(e,t),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,r,l,c){bi.subVectors(l,t),ar.subVectors(r,t),Ad.subVectors(e,t);const d=bi.dot(bi),f=bi.dot(ar),p=bi.dot(Ad),m=ar.dot(ar),v=ar.dot(Ad),M=d*m-f*f;if(M===0)return c.set(0,0,0),null;const _=1/M,S=(m*p-f*v)*_,b=(d*v-f*p)*_;return c.set(1-S-b,b,S)}static containsPoint(e,t,r,l){return this.getBarycoord(e,t,r,l,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,l,c,d,f,p){return this.getBarycoord(e,t,r,l,or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,or.x),p.addScaledVector(d,or.y),p.addScaledVector(f,or.z),p)}static getInterpolatedAttribute(e,t,r,l,c,d){return Ld.setScalar(0),Dd.setScalar(0),Id.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Id,c.z),d}static isFrontFacing(e,t,r,l){return bi.subVectors(r,t),ar.subVectors(e,t),bi.cross(ar).dot(l)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,l){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,r,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),bi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,l=this.b,c=this.c;let d,f;Ys.subVectors(l,r),Ks.subVectors(c,r),Nd.subVectors(e,r);const p=Ys.dot(Nd),m=Ks.dot(Nd);if(p<=0&&m<=0)return t.copy(r);Rd.subVectors(e,l);const v=Ys.dot(Rd),M=Ks.dot(Rd);if(v>=0&&M<=v)return t.copy(l);const _=p*M-v*m;if(_<=0&&p>=0&&v<=0&&p-v>0)return d=p/(p-v),t.copy(r).addScaledVector(Ys,d);Pd.subVectors(e,c);const S=Ys.dot(Pd),b=Ks.dot(Pd);if(b>=0&&S<=b)return t.copy(c);const w=S*m-p*b;if(w<=0&&m>=0&&b<=0)return f=m/(m-b),t.copy(r).addScaledVector(Ks,f);const x=v*b-S*M;if(x<=0&&M-v>=0&&S-b>=0)return ag.subVectors(c,l),f=(M-v)/(M-v+(S-b)),t.copy(l).addScaledVector(ag,f);const y=1/(x+w+_);return d=w*y,f=_*y,t.copy(r).addScaledVector(Ys,d).addScaledVector(Ks,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,f=c.count;d<f;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Fl.subVectors(this.max,Ja),Zs.subVectors(e.a,Ja),Qs.subVectors(e.b,Ja),Js.subVectors(e.c,Ja),Ir.subVectors(Qs,Zs),kr.subVectors(Js,Qs),ls.subVectors(Zs,Js);let t=[0,-Ir.z,Ir.y,0,-kr.z,kr.y,0,-ls.z,ls.y,Ir.z,0,-Ir.x,kr.z,0,-kr.x,ls.z,0,-ls.x,-Ir.y,Ir.x,0,-kr.y,kr.x,0,-ls.y,ls.x,0];return!kd(t,Zs,Qs,Js,Fl)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,Zs,Qs,Js,Fl))?!1:(Ol.crossVectors(Ir,kr),t=[Ol.x,Ol.y,Ol.z],kd(t,Zs,Qs,Js,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new de,new de,new de,new de,new de,new de,new de,new de],Ti=new de,Ul=new So,Zs=new de,Qs=new de,Js=new de,Ir=new de,kr=new de,ls=new de,Ja=new de,Fl=new de,Ol=new de,cs=new de;function kd(s,e,t,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){cs.fromArray(s,c);const f=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),p=e.dot(cs),m=t.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>f)return!1}return!0}const dn=new de,zl=new kt;let eM=0;class hr extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:eM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=LS,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?Jf(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)zl.fromBufferAttribute(this,t),zl.applyMatrix3(e),this.setXY(t,zl.x,zl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,t,r,l,c){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l),c=this._normalize(c)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):zS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):jS(e,this.array)}}class Ix extends hr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class kx extends hr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends hr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const tM=new So,eo=new de,Ud=new de;class Mo{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):tM.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),l=(r-this.radius)*.5;this.center.addScaledVector(eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ud)),this.expandByPoint(eo.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let nM=0;const fi=new qt,Fd=new bn,ea=new de,ii=new So,to=new So,En=new de;class gi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nM++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(DS(e)?kx:Ix)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Mt().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return fi.makeRotationFromQuaternion(e),this.applyMatrix4(fi),this}rotateX(e){return fi.makeRotationX(e),this.applyMatrix4(fi),this}rotateY(e){return fi.makeRotationY(e),this.applyMatrix4(fi),this}rotateZ(e){return fi.makeRotationZ(e),this.applyMatrix4(fi),this}translate(e,t,r){return fi.makeTranslation(e,t,r),this.applyMatrix4(fi),this}scale(e,t,r){return fi.makeScale(e,t,r),this.applyMatrix4(fi),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let l=0;l<r;l++){const c=e[l];t.setXYZ(l,c.x,c.y,c.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const c=t[r];ii.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ii.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ii.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ii.min),this.boundingBox.expandByPoint(ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ii.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const f=t[c];to.setFromBufferAttribute(f),this.morphTargetsRelative?(En.addVectors(ii.min,to.min),ii.expandByPoint(En),En.addVectors(ii.max,to.max),ii.expandByPoint(En)):(ii.expandByPoint(to.min),ii.expandByPoint(to.max))}ii.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(t)for(let c=0,d=t.length;c<d;c++){const f=t[c],p=this.morphTargetsRelative;for(let m=0,v=f.count;m<v;m++)En.fromBufferAttribute(f,m),p&&(ea.fromBufferAttribute(e,m),En.add(ea)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,l=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new hr(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const f=[],p=[],m=new Uint8Array(r.count);for(let H=0;H<r.count;H++)f[H]=new de,p[H]=new de;const v=new de,M=new de,_=new de,S=new kt,b=new kt,w=new kt,x=new de,y=new de;function P(H,z,W){m[H]=m[z]=m[W]=1,v.fromBufferAttribute(r,H),M.fromBufferAttribute(r,z),_.fromBufferAttribute(r,W),S.fromBufferAttribute(c,H),b.fromBufferAttribute(c,z),w.fromBufferAttribute(c,W),M.sub(v),_.sub(v),b.sub(S),w.sub(S);const ie=1/(b.x*w.y-w.x*b.y);isFinite(ie)&&(x.copy(M).multiplyScalar(w.y).addScaledVector(_,-b.y).multiplyScalar(ie),y.copy(_).multiplyScalar(b.x).addScaledVector(M,-w.x).multiplyScalar(ie),f[H].add(x),f[z].add(x),f[W].add(x),p[H].add(y),p[z].add(y),p[W].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let H=0,z=D.length;H<z;++H){const W=D[H],ie=W.start,J=W.count;for(let j=ie,$=ie+J;j<$;j+=3)P(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const A=new de,I=new de,U=new de,E=new de;function L(H){U.fromBufferAttribute(l,H),E.copy(U);const z=f[H];A.copy(z),A.sub(U.multiplyScalar(U.dot(z))).normalize(),I.crossVectors(E,z);const ie=I.dot(p[H])<0?-1:1;d.setXYZW(H,A.x,A.y,A.z,ie)}for(let H=0,z=r.count;H<z;++H)m[H]&&L(H);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new hr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new de,c=new de,d=new de,f=new de,p=new de,m=new de,v=new de,M=new de;if(e)for(let _=0,S=e.count;_<S;_+=3){const b=e.getX(_+0),w=e.getX(_+1),x=e.getX(_+2);l.fromBufferAttribute(t,b),c.fromBufferAttribute(t,w),d.fromBufferAttribute(t,x),v.subVectors(d,c),M.subVectors(l,c),v.cross(M),f.fromBufferAttribute(r,b),p.fromBufferAttribute(r,w),m.fromBufferAttribute(r,x),f.add(v),p.add(v),m.add(v),r.setXYZ(b,f.x,f.y,f.z),r.setXYZ(w,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,S=t.count;_<S;_+=3)l.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),d.fromBufferAttribute(t,_+2),v.subVectors(d,c),M.subVectors(l,c),v.cross(M),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(f,p){const m=f.array,v=f.itemSize,M=f.normalized,_=new m.constructor(p.length*v);let S=0,b=0;for(let w=0,x=p.length;w<x;w++){f.isInterleavedBufferAttribute?S=p[w]*f.data.stride+f.offset:S=p[w]*v;for(let y=0;y<v;y++)_[b++]=m[S++]}return new hr(_,v,M)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,r=this.index.array,l=this.attributes;for(const f in l){const p=l[f],m=e(p,r);t.setAttribute(f,m)}const c=this.morphAttributes;for(const f in c){const p=[],m=c[f];for(let v=0,M=m.length;v<M;v++){const _=m[v],S=e(_,r);p.push(S)}t.morphAttributes[f]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let f=0,p=d.length;f<p;f++){const m=d[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let M=0,_=m.length;M<_;M++){const S=m[M];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],M=c[m];for(let _=0,S=M.length;_<S;_++)v.push(M[_].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const M=d[m];this.addGroup(M.start,M.count,M.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new de,iM=new de,rM=new Mt;class Fr{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,l){return this.normal.set(e,t,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const l=Od.subVectors(r,t).cross(iM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const l=e.delta(Od),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||rM.getNormalMatrix(e),l=this.coplanarPoint(Od).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let sM=0;class _s extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=lo,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=cx,this.blendDst=ux,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new bt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=TS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vd,this.stencilZFail=vd,this.stencilZPass=vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const f in c){const p=c[f];delete p.metadata,d.push(p)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new bt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Fr().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new kt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new kt().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const l=t.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new de,zd=new de,jl=new de,Bl=new de;class Nc{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,l){zd.copy(e).add(t).multiplyScalar(.5),jl.copy(t).sub(e).normalize(),Bl.copy(this.origin).sub(zd);const c=e.distanceTo(t)*.5,d=-this.direction.dot(jl),f=Bl.dot(this.direction),p=-Bl.dot(jl),m=Bl.lengthSq(),v=Math.abs(1-d*d);let M,_,S,b;if(v>0)if(M=d*p-f,_=d*f-p,b=c*v,M>=0)if(_>=-b)if(_<=b){const w=1/v;M*=w,_*=w,S=M*(M+d*_+2*f)+_*(d*M+_+2*p)+m}else _=c,M=Math.max(0,-(d*_+f)),S=-M*M+_*(_+2*p)+m;else _=-c,M=Math.max(0,-(d*_+f)),S=-M*M+_*(_+2*p)+m;else _<=-b?(M=Math.max(0,-(-d*c+f)),_=M>0?-c:Math.min(Math.max(-c,-p),c),S=-M*M+_*(_+2*p)+m):_<=b?(M=0,_=Math.min(Math.max(-c,-p),c),S=_*(_+2*p)+m):(M=Math.max(0,-(d*c+f)),_=M>0?c:Math.min(Math.max(-c,-p),c),S=-M*M+_*(_+2*p)+m);else _=d>0?-c:c,M=Math.max(0,-(d*_+f)),S=-M*M+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),l&&l.copy(zd).addScaledVector(jl,_),S}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);const r=cr.dot(this.direction),l=cr.dot(cr)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),f=r-d,p=r+d;return p<0?null:f<0?this.at(p,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,l,c,d,f,p;const m=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,l=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,l=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),M>=0?(f=(e.min.z-_.z)*M,p=(e.max.z-_.z)*M):(f=(e.max.z-_.z)*M,p=(e.min.z-_.z)*M),r>p||f>l)||((f>r||r!==r)&&(r=f),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,r,l,c){const d=this.origin,f=this.direction,p=f.x,m=f.y,v=f.z,M=e.x-d.x,_=e.y-d.y,S=e.z-d.z,b=t.x-d.x,w=t.y-d.y,x=t.z-d.z,y=r.x-d.x,P=r.y-d.y,D=r.z-d.z,A=Math.abs(p),I=Math.abs(m),U=Math.abs(v);let E,L,H,z,W,ie,J,j,$,te,q,ee;if(A>=I&&A>=U?(H=p,ie=M,$=b,ee=y,p>=0?(E=m,L=v,z=_,W=S,J=w,j=x,te=P,q=D):(E=v,L=m,z=S,W=_,J=x,j=w,te=D,q=P)):I>=U?(H=m,ie=_,$=w,ee=P,m>=0?(E=v,L=p,z=S,W=M,J=x,j=b,te=D,q=y):(E=p,L=v,z=M,W=S,J=b,j=x,te=y,q=D)):(H=v,ie=S,$=x,ee=D,v>=0?(E=p,L=m,z=M,W=_,J=b,j=w,te=y,q=P):(E=m,L=p,z=_,W=M,J=w,j=b,te=P,q=y)),H===0)return null;const O=E/H,Y=L/H,F=1/H,K=z-O*ie,Me=W-Y*ie,X=J-O*$,le=j-Y*$,ye=te-O*ee,Ee=q-Y*ee,Se=ye*le-Ee*X,Ae=K*Ee-Me*ye,ht=X*Me-le*K;if(l){if(Se<0||Ae<0||ht<0)return null}else if((Se<0||Ae<0||ht<0)&&(Se>0||Ae>0||ht>0))return null;const Ye=Se+Ae+ht;if(Ye===0)return null;const _t=F*(Se*ie+Ae*$+ht*ee);return(Ye>0?_t<0:_t>0)?null:this.at(_t/Ye,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class kf extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new bt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=dx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const og=new qt,us=new Nc,Hl=new Mo,lg=new de,Gl=new de,Vl=new de,Wl=new de,jd=new de,Xl=new de,cg=new de,$l=new de;class Ki extends bn{constructor(e=new gi,t=new kf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}getVertexPosition(e,t){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(l,e);const f=this.morphTargetInfluences;if(c&&f){Xl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=f[p],M=c[p];v!==0&&(jd.fromBufferAttribute(M,e),d?Xl.addScaledVector(jd,v):Xl.addScaledVector(jd.sub(t),v))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(c),us.copy(e.ray).recast(e.near),!(Hl.containsPoint(us.origin)===!1&&(us.intersectSphere(Hl,lg)===null||us.origin.distanceToSquared(lg)>(e.far-e.near)**2))&&(og.copy(c).invert(),us.copy(e.ray).applyMatrix4(og),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let l;const c=this.geometry,d=this.material,f=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,M=c.attributes.normal,_=c.groups,S=c.drawRange;if(f!==null)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const x=_[b],y=d[x.materialIndex],P=Math.max(x.start,S.start),D=Math.min(f.count,Math.min(x.start+x.count,S.start+S.count));for(let A=P,I=D;A<I;A+=3){const U=f.getX(A),E=f.getX(A+1),L=f.getX(A+2);l=ql(this,y,e,r,m,v,M,U,E,L),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(f.count,S.start+S.count);for(let x=b,y=w;x<y;x+=3){const P=f.getX(x),D=f.getX(x+1),A=f.getX(x+2);l=ql(this,d,e,r,m,v,M,P,D,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let b=0,w=_.length;b<w;b++){const x=_[b],y=d[x.materialIndex],P=Math.max(x.start,S.start),D=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let A=P,I=D;A<I;A+=3){const U=A,E=A+1,L=A+2;l=ql(this,y,e,r,m,v,M,U,E,L),l&&(l.faceIndex=Math.floor(A/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const b=Math.max(0,S.start),w=Math.min(p.count,S.start+S.count);for(let x=b,y=w;x<y;x+=3){const P=x,D=x+1,A=x+2;l=ql(this,d,e,r,m,v,M,P,D,A),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function aM(s,e,t,r,l,c,d,f){let p;if(e.side===Kn?p=r.intersectTriangle(d,c,l,!0,f):p=r.intersectTriangle(l,c,d,e.side===ms,f),p===null)return null;$l.copy(f),$l.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo($l);return m<t.near||m>t.far?null:{distance:m,point:$l.clone(),object:s}}function ql(s,e,t,r,l,c,d,f,p,m){s.getVertexPosition(f,Gl),s.getVertexPosition(p,Vl),s.getVertexPosition(m,Wl);const v=aM(s,e,t,r,Gl,Vl,Wl,cg);if(v){const M=new de;Ci.getBarycoord(cg,Gl,Vl,Wl,M),l&&(v.uv=Ci.getInterpolatedAttribute(l,f,p,m,M,new kt)),c&&(v.uv1=Ci.getInterpolatedAttribute(c,f,p,m,M,new kt)),d&&(v.normal=Ci.getInterpolatedAttribute(d,f,p,m,M,new de),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:f,b:p,c:m,normal:new de,materialIndex:0};Ci.getNormal(Gl,Vl,Wl,_.normal),v.face=_,v.barycoord=M}return v}class oM extends Nn{constructor(e=null,t=1,r=1,l,c,d,f,p,m=An,v=An,M,_){super(null,d,f,p,m,v,l,c,M,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new Mo,lM=new kt(.5,.5),Yl=new de;class _o{constructor(e=new Fr,t=new Fr,r=new Fr,l=new Fr,c=new Fr,d=new Fr){this.planes=[e,t,r,l,c,d]}set(e,t,r,l,c,d){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(l),f[4].copy(c),f[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const l=this.planes,c=e.elements,d=c[0],f=c[1],p=c[2],m=c[3],v=c[4],M=c[5],_=c[6],S=c[7],b=c[8],w=c[9],x=c[10],y=c[11],P=c[12],D=c[13],A=c[14],I=c[15];if(l[0].setComponents(m-d,S-v,y-b,I-P).normalize(),l[1].setComponents(m+d,S+v,y+b,I+P).normalize(),l[2].setComponents(m+f,S+M,y+w,I+D).normalize(),l[3].setComponents(m-f,S-M,y-w,I-D).normalize(),r)l[4].setComponents(p,_,x,A).normalize(),l[5].setComponents(m-p,S-_,y-x,I-A).normalize();else if(l[4].setComponents(m-p,S-_,y-x,I-A).normalize(),t===Ai)l[5].setComponents(m+p,S+_,y+x,I+A).normalize();else if(t===xo)l[5].setComponents(p,_,x,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=lM.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const l=t[r];if(Yl.x=l.normal.x>0?e.max.x:e.min.x,Yl.y=l.normal.y>0?e.max.y:e.min.y,Yl.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const ug=new qt;class nh{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let l=0;l<t.length;l++){const c=t[l];ug.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),r[l]===void 0&&(r[l]=new _o),r[l].setFromProjectionMatrix(ug,c.coordinateSystem,c.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let l=0;l<e._count;l++)t[l]===void 0&&(t[l]=new _o),t[l].copy(r[l]);return this._count=e._count,this}clone(){return new nh().copy(this)}}class Ux extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new bt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new de,Mc=new de,dg=new qt,no=new Nc,Kl=new Mo,Bd=new de,fg=new de;class cM extends bn{constructor(e=new gi,t=new Ux){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let l=1,c=t.count;l<c;l++)Sc.fromBufferAttribute(t,l-1),Mc.fromBufferAttribute(t,l),r[l]=r[l-1],r[l]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Fn(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Kl.radius+=c,e.ray.intersectsSphere(Kl)===!1)return;dg.copy(l).invert(),no.copy(e.ray).applyMatrix4(dg);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const S=Math.max(0,d.start),b=Math.min(v.count,d.start+d.count);for(let w=S,x=b-1;w<x;w+=m){const y=v.getX(w),P=v.getX(w+1),D=Zl(this,e,no,p,y,P,w);D&&t.push(D)}if(this.isLineLoop){const w=v.getX(b-1),x=v.getX(S),y=Zl(this,e,no,p,w,x,b-1);y&&t.push(y)}}else{const S=Math.max(0,d.start),b=Math.min(_.count,d.start+d.count);for(let w=S,x=b-1;w<x;w+=m){const y=Zl(this,e,no,p,w,w+1,w);y&&t.push(y)}if(this.isLineLoop){const w=Zl(this,e,no,p,b-1,S,b-1);w&&t.push(w)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function Zl(s,e,t,r,l,c,d){const f=s.geometry.attributes.position;if(Sc.fromBufferAttribute(f,l),Mc.fromBufferAttribute(f,c),t.distanceSqToSegment(Sc,Mc,Bd,fg)>r)return;Bd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Bd);if(!(m<e.near||m>e.far))return{distance:m,point:fg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const hg=new de,pg=new de;class uM extends cM{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let l=0,c=t.count;l<c;l+=2)hg.fromBufferAttribute(t,l),pg.fromBufferAttribute(t,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+hg.distanceTo(pg);e.setAttribute("lineDistance",new Fn(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Fx extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new bt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const mg=new qt,Uf=new Nc,Ql=new Mo,Jl=new de;class dM extends bn{constructor(e=new gi,t=new Fx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(l),Ql.radius+=c,e.ray.intersectsSphere(Ql)===!1)return;mg.copy(l).invert(),Uf.copy(e.ray).applyMatrix4(mg);const f=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=f*f,m=r.index,M=r.attributes.position;if(m!==null){const _=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let b=_,w=S;b<w;b++){const x=m.getX(b);Jl.fromBufferAttribute(M,x),gg(Jl,x,p,l,e,t,this)}}else{const _=Math.max(0,d.start),S=Math.min(M.count,d.start+d.count);for(let b=_,w=S;b<w;b++)Jl.fromBufferAttribute(M,b),gg(Jl,b,p,l,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const f=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=c}}}}}function gg(s,e,t,r,l,c,d){const f=Uf.distanceSqToPoint(s);if(f<t){const p=new de;Uf.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(f),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Ox extends Nn{constructor(e=[],t=ua,r,l,c,d,f,p,m,v){super(e,t,r,l,c,d,f,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class fM extends Nn{constructor(e,t,r,l,c,d,f,p,m){super(e,t,r,l,c,d,f,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class fa extends Nn{constructor(e,t,r=qi,l,c,d,f=An,p=An,m,v=Xr,M=1){if(v!==Xr&&v!==Hr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:M};super(_,l,c,d,f,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new eh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class zx extends fa{constructor(e,t=qi,r=ua,l,c,d=An,f=An,p,m=Xr){const v={width:e,height:e,depth:1},M=[v,v,v,v,v,v];super(e,e,t,r,l,c,d,f,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class jx extends Nn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends gi{constructor(e=1,t=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const f=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],M=[];let _=0,S=0;b("z","y","x",-1,-1,r,t,e,d,c,0),b("z","y","x",1,-1,r,t,-e,d,c,1),b("x","z","y",1,1,e,r,t,l,d,2),b("x","z","y",1,-1,e,r,-t,l,d,3),b("x","y","z",1,-1,e,t,r,l,c,4),b("x","y","z",-1,-1,e,t,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(M,2));function b(w,x,y,P,D,A,I,U,E,L,H){const z=A/E,W=I/L,ie=A/2,J=I/2,j=U/2,$=E+1,te=L+1;let q=0,ee=0;const O=new de;for(let Y=0;Y<te;Y++){const F=Y*W-J;for(let K=0;K<$;K++){const Me=K*z-ie;O[w]=Me*P,O[x]=F*D,O[y]=j,m.push(O.x,O.y,O.z),O[w]=0,O[x]=0,O[y]=U>0?1:-1,v.push(O.x,O.y,O.z),M.push(K/E),M.push(1-Y/L),q+=1}}for(let Y=0;Y<L;Y++)for(let F=0;F<E;F++){const K=_+F+$*Y,Me=_+F+$*(Y+1),X=_+(F+1)+$*(Y+1),le=_+(F+1)+$*Y;p.push(K,Me,le),p.push(Me,X,le),ee+=6}f.addGroup(S,ee,H),S+=ee,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wo extends gi{constructor(e=1,t=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:l};const c=e/2,d=t/2,f=Math.floor(r),p=Math.floor(l),m=f+1,v=p+1,M=e/f,_=t/p,S=[],b=[],w=[],x=[];for(let y=0;y<v;y++){const P=y*_-d;for(let D=0;D<m;D++){const A=D*M-c;b.push(A,-P,0),w.push(0,0,1),x.push(D/f),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let P=0;P<f;P++){const D=P+m*y,A=P+m*(y+1),I=P+1+m*(y+1),U=P+1+m*y;S.push(D,A,U),S.push(A,I,U)}this.setIndex(S),this.setAttribute("position",new Fn(b,3)),this.setAttribute("normal",new Fn(w,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends gi{constructor(e=1,t=.4,r=12,l=48,c=Math.PI*2,d=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:f},r=Math.floor(r),l=Math.floor(l);const p=[],m=[],v=[],M=[],_=new de,S=new de,b=new de;for(let w=0;w<=r;w++){const x=d+w/r*f;for(let y=0;y<=l;y++){const P=y/l*c;S.x=(e+t*Math.cos(x))*Math.cos(P),S.y=(e+t*Math.cos(x))*Math.sin(P),S.z=t*Math.sin(x),m.push(S.x,S.y,S.z),_.x=e*Math.cos(P),_.y=e*Math.sin(P),b.subVectors(S,_).normalize(),v.push(b.x,b.y,b.z),M.push(y/l),M.push(w/r)}}for(let w=1;w<=r;w++)for(let x=1;x<=l;x++){const y=(l+1)*w+x-1,P=(l+1)*(w-1)+x-1,D=(l+1)*(w-1)+x,A=(l+1)*w+x;p.push(y,P,A),p.push(P,D,A)}this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ha(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const l=s[t][r];if(xg(l))l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=l.clone();else if(Array.isArray(l))if(xg(l[0])){const c=[];for(let d=0,f=l.length;d<f;d++)c[d]=l[d].clone();e[t][r]=c}else e[t][r]=l.slice();else e[t][r]=l}}return e}function jn(s){const e={};for(let t=0;t<s.length;t++){const r=ha(s[t]);for(const l in r)e[l]=r[l]}return e}function xg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function hM(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Bx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const pM={clone:ha,merge:jn};var mM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,gM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=mM,this.fragmentShader=gM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ha(e.uniforms),this.uniformsGroups=hM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=t[l.value]||null;break;case"c":this.uniforms[r].value=new bt().setHex(l.value);break;case"v2":this.uniforms[r].value=new kt().fromArray(l.value);break;case"v3":this.uniforms[r].value=new de().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new Mt().fromArray(l.value);break;case"m4":this.uniforms[r].value=new qt().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class xM extends xs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class vM extends _s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new bt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new bt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=If,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class _M extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class yM extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(vg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!vg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function vg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class SM{constructor(e,t,r){const l=this;let c=!1,d=0,f=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){f++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,f),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,f),d===f&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,M){return m.push(v,M),this},this.removeHandler=function(v){const M=m.indexOf(v);return M!==-1&&m.splice(M,2),this},this.getHandler=function(v){for(let M=0,_=m.length;M<_;M+=2){const S=m[M],b=m[M+1];if(S.global&&(S.lastIndex=0),S.test(v))return b}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const MM=new SM;class ih{constructor(e){this.manager=e!==void 0?e:MM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(l,c){r.load(e,l,t,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const ta=new WeakMap;class EM extends ih{constructor(e){super(e)}load(e,t,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Hd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){t&&t(d),c.manager.itemEnd(e)},0);else{let M=ta.get(d);M===void 0&&(M=[],ta.set(d,M)),M.push({onLoad:t,onError:l})}return d}const f=vo("img");function p(){v(),t&&t(this);const M=ta.get(this)||[];for(let _=0;_<M.length;_++){const S=M[_];S.onLoad&&S.onLoad(this)}ta.delete(this),c.manager.itemEnd(e)}function m(M){v(),l&&l(M),Hd.remove(`image:${e}`);const _=ta.get(this)||[];for(let S=0;S<_.length;S++){const b=_[S];b.onError&&b.onError(M)}ta.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){f.removeEventListener("load",p,!1),f.removeEventListener("error",m,!1)}return f.addEventListener("load",p,!1),f.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(f.crossOrigin=this.crossOrigin),Hd.add(`image:${e}`,f),c.manager.itemStart(e),f.fetchPriority=this.priority,f.src=e,f}}class wM extends ih{constructor(e){super(e)}load(e,t,r,l){const c=new Nn,d=new EM(this.manager);return d.setPriority(this.priority),d.setCache(this.cache),d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(f){c.image=f,c.needsUpdate=!0,t!==void 0&&t(c)},r,l),c}}class rh extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new bt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Gd=new qt,_g=new de,yg=new de;class Hx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;_g.setFromMatrixPosition(e.matrixWorld),t.position.copy(_g),yg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(yg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,l){Gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Gd,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,f=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*d,0,0,.5*d+p,0,.5*f,0,.5*f+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+p,0,.5*f,0,.5*f+m,0,0,.5,.5,0,0,0,1),t.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new de,tc=new pa,Oi=new de;class Gx extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Oi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ec,tc,Oi),Oi.x===1&&Oi.y===1&&Oi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,Oi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Ur=new de,Sg=new kt,Mg=new kt;class qn extends Gx{constructor(e=50,t=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Ur.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z),Ur.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Ur.x,Ur.y).multiplyScalar(-e/Ur.z)}getViewSize(e,t){return this.getViewBounds(e,Sg,Mg),t.subVectors(Mg,Sg)}setViewOffset(e,t,r,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_d*.5*this.fov)/this.zoom,r=2*t,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,t-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const f=this.filmOffset;f!==0&&(c+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class bM extends Hx{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||t.far;(r!==t.fov||l!==t.aspect||c!==t.far)&&(t.fov=r,t.aspect=l,t.far=c,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class TM extends rh{constructor(e,t,r=0,l=Math.PI/3,c=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=d,this.map=null,this.shadow=new bM}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class CM extends Hx{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class AM extends rh{constructor(e,t,r=0,l=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new CM}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class NM extends Gx{constructor(e=-1,t=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,f=l+t,p=l-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,f-=v*this.view.offsetY,p=f-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,f,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class RM extends rh{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const na=-90,ia=1;class Ff extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(na,ia,e,t);l.layers=this.layers,this.add(l);const c=new qn(na,ia,e,t);c.layers=this.layers,this.add(c);const d=new qn(na,ia,e,t);d.layers=this.layers,this.add(d);const f=new qn(na,ia,e,t);f.layers=this.layers,this.add(f);const p=new qn(na,ia,e,t);p.layers=this.layers,this.add(p);const m=new qn(na,ia,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,l,c,d,f,p]=t;for(const m of t)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,f,p,m,v]=this.children,M=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),b=e.xr.enabled;e.xr.enabled=!1;const w=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=w,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(M,_,S),e.xr.enabled=b,r.texture.needsPMREMUpdate=!0}}class PM extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Eg=new qt;class LM{constructor(e,t,r=0,l=1/0){this.ray=new Nc(e,t),this.near=r,this.far=l,this.camera=null,this.layers=new th,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Eg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Eg),this}intersectObject(e,t=!0,r=[]){return Of(e,this,r,t),r.sort(wg),r}intersectObjects(e,t=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Of(e[l],this,r,t);return r.sort(wg),r}}function wg(s,e){return s.distance-e.distance}function Of(s,e,t,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,f=c.length;d<f;d++)Of(c[d],e,t,!0)}}class DM{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class IM extends uM{constructor(e=10,t=10,r=4473924,l=8947848){r=new bt(r),l=new bt(l);const c=t/2,d=e/t,f=e/2,p=[],m=[];for(let _=0,S=0,b=-f;_<=t;_++,b+=d){p.push(-f,0,b,f,0,b),p.push(b,0,-f,b,0,f);const w=_===c?r:l;w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3,w.toArray(m,S),S+=3}const v=new gi;v.setAttribute("position",new Fn(p,3)),v.setAttribute("color",new Fn(m,3));const M=new Ux({vertexColors:!0,toneMapped:!1});super(v,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function bg(s,e,t,r){const l=kM(r);switch(t){case wx:return s*e;case Tx:return s*e/l.components*l.byteLength;case Kf:return s*e/l.components*l.byteLength;case gs:return s*e*2/l.components*l.byteLength;case Zf:return s*e*2/l.components*l.byteLength;case bx:return s*e*3/l.components*l.byteLength;case Vi:return s*e*4/l.components*l.byteLength;case Qf:return s*e*4/l.components*l.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case sf:case of:return Math.max(s,16)*Math.max(e,8)/4;case rf:case af:return Math.max(s,8)*Math.max(e,8)/2;case lf:case cf:case df:case ff:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case uf:case gc:case hf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case xf:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case vf:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case _f:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Tf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Af:case Nf:case Rf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Pf:case Lf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Df:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function kM(s){switch(s){case ri:case yx:return{byteLength:1,components:1};case go:case Sx:case Yi:return{byteLength:2,components:1};case qf:case Yf:return{byteLength:2,components:4};case qi:case $f:case Gi:return{byteLength:4,components:1};case Mx:case Ex:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xf}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Vx(){let s=null,e=!1,t=null,r=null;function l(c,d){r=s.requestAnimationFrame(l),t(c,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function UM(s){const e=new WeakMap;function t(f,p){const m=f.array,v=f.usage,M=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),f.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:M}}function r(f,p,m){const v=p.array,M=p.updateRanges;if(s.bindBuffer(m,f),M.length===0)s.bufferSubData(m,0,v);else{M.sort((S,b)=>S.start-b.start);let _=0;for(let S=1;S<M.length;S++){const b=M[_],w=M[S];w.start<=b.start+b.count+1?b.count=Math.max(b.count,w.start+w.count-b.start):(++_,M[_]=w)}M.length=_+1;for(let S=0,b=M.length;S<b;S++){const w=M[S];s.bufferSubData(m,w.start*v.BYTES_PER_ELEMENT,v,w.start,w.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function c(f){f.isInterleavedBufferAttribute&&(f=f.data);const p=e.get(f);p&&(s.deleteBuffer(p.buffer),e.delete(f))}function d(f,p){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const v=e.get(f);(!v||v.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,p));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,f,p),m.version=f.version}}return{get:l,remove:c,update:d}}var FM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,OM=`#ifdef USE_ALPHAHASH
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
#endif`,zM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,GM=`#ifdef USE_AOMAP
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
#endif`,VM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
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
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$M=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,qM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,KM=`#ifdef USE_IRIDESCENCE
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
#endif`,ZM=`#ifdef USE_BUMPMAP
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
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,e1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,t1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,n1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,i1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,r1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,s1=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,a1=`#define PI 3.141592653589793
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
} // validated`,o1=`vec3 transformedNormal = objectNormal;
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
#endif`,l1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,c1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,u1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,d1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,f1="gl_FragColor = linearToOutputTexel( gl_FragColor );",h1=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,p1=`#ifdef USE_ENVMAP
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
#endif`,m1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,g1=`#ifdef USE_ENVMAP
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
#endif`,x1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,v1=`#ifdef USE_ENVMAP
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
#endif`,_1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,y1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,S1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,M1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,E1=`#ifdef USE_GRADIENTMAP
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
}`,w1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,b1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,T1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,C1=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,A1=`#ifdef USE_ENVMAP
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
#endif`,N1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,R1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,P1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,L1=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,D1=`PhysicalMaterial material;
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
#endif`,I1=`uniform sampler2D dfgLUT;
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
}`,k1=`
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
#endif`,U1=`#if defined( RE_IndirectDiffuse )
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
#endif`,F1=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,O1=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,z1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,B1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,H1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,G1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,V1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,W1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,X1=`#if defined( USE_POINTS_UV )
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
#endif`,$1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,q1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Y1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,K1=`#if defined( USE_MORPHCOLORS )
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
#endif`,Z1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Q1=`#ifdef USE_MORPHTARGETS
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
#endif`,J1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,eE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,tE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,nE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,rE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,sE=`#ifdef USE_NORMALMAP
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
#endif`,aE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,oE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,lE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,cE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,uE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,dE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,fE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,hE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,pE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,mE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,gE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,xE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,vE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,_E=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,yE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,SE=`float getShadowMask() {
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
}`,ME=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,EE=`#ifdef USE_SKINNING
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
#endif`,wE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bE=`#ifdef USE_SKINNING
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
#endif`,TE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,CE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,AE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,RE=`#ifdef USE_TRANSMISSION
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
#endif`,PE=`#ifdef USE_TRANSMISSION
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
#endif`,LE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,DE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,IE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const UE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,FE=`uniform sampler2D t2D;
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
}`,OE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,zE=`uniform float backgroundBlurriness;
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
}`,jE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,BE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HE=`#include <common>
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
}`,GE=`#if DEPTH_PACKING == 3200
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
}`,VE=`#define DISTANCE
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
}`,WE=`#define DISTANCE
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
}`,XE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,$E=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,qE=`uniform float scale;
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
}`,YE=`uniform vec3 diffuse;
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
}`,KE=`#include <common>
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
}`,ZE=`uniform vec3 diffuse;
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
}`,QE=`#define LAMBERT
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
}`,JE=`#define LAMBERT
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
}`,ew=`#define MATCAP
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
}`,tw=`#define MATCAP
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
}`,nw=`#define NORMAL
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
}`,iw=`#define NORMAL
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
}`,rw=`#define PHONG
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
}`,sw=`#define PHONG
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
}`,aw=`#define STANDARD
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
}`,ow=`#define STANDARD
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
}`,lw=`#define TOON
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
}`,cw=`#define TOON
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
}`,uw=`uniform float size;
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
}`,dw=`uniform vec3 diffuse;
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
}`,fw=`#include <common>
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
}`,hw=`uniform vec3 color;
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
}`,pw=`uniform float rotation;
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
}`,mw=`uniform vec3 diffuse;
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
}`,Ct={alphahash_fragment:FM,alphahash_pars_fragment:OM,alphamap_fragment:zM,alphamap_pars_fragment:jM,alphatest_fragment:BM,alphatest_pars_fragment:HM,aomap_fragment:GM,aomap_pars_fragment:VM,batching_pars_vertex:WM,batching_vertex:XM,begin_vertex:$M,beginnormal_vertex:qM,bsdfs:YM,iridescence_fragment:KM,bumpmap_pars_fragment:ZM,clipping_planes_fragment:QM,clipping_planes_pars_fragment:JM,clipping_planes_pars_vertex:e1,clipping_planes_vertex:t1,color_fragment:n1,color_pars_fragment:i1,color_pars_vertex:r1,color_vertex:s1,common:a1,defaultnormal_vertex:o1,displacementmap_pars_vertex:l1,displacementmap_vertex:c1,emissivemap_fragment:u1,emissivemap_pars_fragment:d1,colorspace_fragment:f1,colorspace_pars_fragment:h1,envmap_fragment:p1,envmap_common_pars_fragment:m1,envmap_pars_fragment:g1,envmap_pars_vertex:x1,envmap_physical_pars_fragment:A1,envmap_vertex:v1,fog_vertex:_1,fog_pars_vertex:y1,fog_fragment:S1,fog_pars_fragment:M1,gradientmap_pars_fragment:E1,lightmap_pars_fragment:w1,lights_lambert_fragment:b1,lights_lambert_pars_fragment:T1,lights_pars_begin:C1,lights_toon_fragment:N1,lights_toon_pars_fragment:R1,lights_phong_fragment:P1,lights_phong_pars_fragment:L1,lights_physical_fragment:D1,lights_physical_pars_fragment:I1,lights_fragment_begin:k1,lights_fragment_maps:U1,lights_fragment_end:F1,lightprobes_pars_fragment:O1,logdepthbuf_fragment:z1,logdepthbuf_pars_fragment:j1,logdepthbuf_pars_vertex:B1,logdepthbuf_vertex:H1,map_fragment:G1,map_pars_fragment:V1,map_particle_fragment:W1,map_particle_pars_fragment:X1,metalnessmap_fragment:$1,metalnessmap_pars_fragment:q1,morphinstance_vertex:Y1,morphcolor_vertex:K1,morphnormal_vertex:Z1,morphtarget_pars_vertex:Q1,morphtarget_vertex:J1,normal_fragment_begin:eE,normal_fragment_maps:tE,normal_pars_fragment:nE,normal_pars_vertex:iE,normal_vertex:rE,normalmap_pars_fragment:sE,clearcoat_normal_fragment_begin:aE,clearcoat_normal_fragment_maps:oE,clearcoat_pars_fragment:lE,iridescence_pars_fragment:cE,opaque_fragment:uE,packing:dE,premultiplied_alpha_fragment:fE,project_vertex:hE,dithering_fragment:pE,dithering_pars_fragment:mE,roughnessmap_fragment:gE,roughnessmap_pars_fragment:xE,shadowmap_pars_fragment:vE,shadowmap_pars_vertex:_E,shadowmap_vertex:yE,shadowmask_pars_fragment:SE,skinbase_vertex:ME,skinning_pars_vertex:EE,skinning_vertex:wE,skinnormal_vertex:bE,specularmap_fragment:TE,specularmap_pars_fragment:CE,tonemapping_fragment:AE,tonemapping_pars_fragment:NE,transmission_fragment:RE,transmission_pars_fragment:PE,uv_pars_fragment:LE,uv_pars_vertex:DE,uv_vertex:IE,worldpos_vertex:kE,background_vert:UE,background_frag:FE,backgroundCube_vert:OE,backgroundCube_frag:zE,cube_vert:jE,cube_frag:BE,depth_vert:HE,depth_frag:GE,distance_vert:VE,distance_frag:WE,equirect_vert:XE,equirect_frag:$E,linedashed_vert:qE,linedashed_frag:YE,meshbasic_vert:KE,meshbasic_frag:ZE,meshlambert_vert:QE,meshlambert_frag:JE,meshmatcap_vert:ew,meshmatcap_frag:tw,meshnormal_vert:nw,meshnormal_frag:iw,meshphong_vert:rw,meshphong_frag:sw,meshphysical_vert:aw,meshphysical_frag:ow,meshtoon_vert:lw,meshtoon_frag:cw,points_vert:uw,points_frag:dw,shadow_vert:fw,shadow_frag:hw,sprite_vert:pw,sprite_frag:mw},$e={common:{diffuse:{value:new bt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Mt}},envmap:{envMap:{value:null},envMapRotation:{value:new Mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Mt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new bt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new bt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0},uvTransform:{value:new Mt}},sprite:{diffuse:{value:new bt(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Mt},alphaMap:{value:null},alphaMapTransform:{value:new Mt},alphaTest:{value:0}}},ji={basic:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},envMapIntensity:{value:1}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:jn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},specular:{value:new bt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:jn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new bt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:jn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new bt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:jn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:jn([$e.points,$e.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:jn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:jn([$e.common,$e.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:jn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:jn([$e.sprite,$e.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Mt}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distance:{uniforms:jn([$e.common,$e.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distance_vert,fragmentShader:Ct.distance_frag},shadow:{uniforms:jn([$e.lights,$e.fog,{color:{value:new bt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};ji.physical={uniforms:jn([ji.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Mt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Mt},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Mt},sheen:{value:0},sheenColor:{value:new bt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Mt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Mt},attenuationDistance:{value:0},attenuationColor:{value:new bt(0)},specularColor:{value:new bt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Mt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Mt}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const nc={r:0,b:0,g:0},gw=new qt,Wx=new Mt;Wx.set(-1,0,0,0,1,0,0,0,1);function xw(s,e,t,r,l,c){const d=new bt(0);let f=l===!0?0:1,p,m,v=null,M=0,_=null;function S(P){let D=P.isScene===!0?P.background:null;if(D&&D.isTexture){const A=P.backgroundBlurriness>0;D=e.get(D,A)}return D}function b(P){let D=!1;const A=S(P);A===null?x(d,f):A&&A.isColor&&(x(A,1),D=!0);const I=s.xr.getEnvironmentBlendMode();I==="additive"?t.buffers.color.setClear(0,0,0,1,c):I==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(s.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function w(P,D){const A=S(D);A&&A.isCubeTexture?(m===void 0&&(m=new Ki(new Eo(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:ha(ji.backgroundCube.uniforms),vertexShader:ji.backgroundCube.vertexShader,fragmentShader:ji.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(I,U,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=A,m.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(gw.makeRotationFromEuler(D.backgroundRotation)).transpose(),A.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Wx),m.material.toneMapped=Dt.getTransfer(A.colorSpace)!==Vt,(v!==A||M!==A.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,v=A,M=A.version,_=s.toneMapping),m.layers.enableAll(),P.unshift(m,m.geometry,m.material,0,0,null)):A&&A.isTexture&&(p===void 0&&(p=new Ki(new wo(2,2),new xs({name:"BackgroundMaterial",uniforms:ha(ji.background.uniforms),vertexShader:ji.background.vertexShader,fragmentShader:ji.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=A,p.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,p.material.toneMapped=Dt.getTransfer(A.colorSpace)!==Vt,A.matrixAutoUpdate===!0&&A.updateMatrix(),p.material.uniforms.uvTransform.value.copy(A.matrix),(v!==A||M!==A.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,v=A,M=A.version,_=s.toneMapping),p.layers.enableAll(),P.unshift(p,p.geometry,p.material,0,0,null))}function x(P,D){P.getRGB(nc,Bx(s)),t.buffers.color.setClear(nc.r,nc.g,nc.b,D,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(P,D=1){d.set(P),f=D,x(d,f)},getClearAlpha:function(){return f},setClearAlpha:function(P){f=P,x(d,f)},render:b,addToRenderList:w,dispose:y}}function vw(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function f(W,ie,J,j,$){let te=!1;const q=M(W,j,J,ie);c!==q&&(c=q,m(c.object)),te=S(W,j,J,$),te&&b(W,j,J,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(te||d)&&(d=!1,A(W,ie,J,j),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return s.createVertexArray()}function m(W){return s.bindVertexArray(W)}function v(W){return s.deleteVertexArray(W)}function M(W,ie,J,j){const $=j.wireframe===!0;let te=r[ie.id];te===void 0&&(te={},r[ie.id]=te);const q=W.isInstancedMesh===!0?W.id:0;let ee=te[q];ee===void 0&&(ee={},te[q]=ee);let O=ee[J.id];O===void 0&&(O={},ee[J.id]=O);let Y=O[$];return Y===void 0&&(Y=_(p()),O[$]=Y),Y}function _(W){const ie=[],J=[],j=[];for(let $=0;$<t;$++)ie[$]=0,J[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:J,attributeDivisors:j,object:W,attributes:{},index:null}}function S(W,ie,J,j){const $=c.attributes,te=ie.attributes;let q=0;const ee=J.getAttributes();for(const O in ee)if(ee[O].location>=0){const F=$[O];let K=te[O];if(K===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(K=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(K=W.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;q++}return c.attributesNum!==q||c.index!==j}function b(W,ie,J,j){const $={},te=ie.attributes;let q=0;const ee=J.getAttributes();for(const O in ee)if(ee[O].location>=0){let F=te[O];F===void 0&&(O==="instanceMatrix"&&W.instanceMatrix&&(F=W.instanceMatrix),O==="instanceColor"&&W.instanceColor&&(F=W.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),$[O]=K,q++}c.attributes=$,c.attributesNum=q,c.index=j}function w(){const W=c.newAttributes;for(let ie=0,J=W.length;ie<J;ie++)W[ie]=0}function x(W){y(W,0)}function y(W,ie){const J=c.newAttributes,j=c.enabledAttributes,$=c.attributeDivisors;J[W]=1,j[W]===0&&(s.enableVertexAttribArray(W),j[W]=1),$[W]!==ie&&(s.vertexAttribDivisor(W,ie),$[W]=ie)}function P(){const W=c.newAttributes,ie=c.enabledAttributes;for(let J=0,j=ie.length;J<j;J++)ie[J]!==W[J]&&(s.disableVertexAttribArray(J),ie[J]=0)}function D(W,ie,J,j,$,te,q){q===!0?s.vertexAttribIPointer(W,ie,J,$,te):s.vertexAttribPointer(W,ie,J,j,$,te)}function A(W,ie,J,j){w();const $=j.attributes,te=J.getAttributes(),q=ie.defaultAttributeValues;for(const ee in te){const O=te[ee];if(O.location>=0){let Y=$[ee];if(Y===void 0&&(ee==="instanceMatrix"&&W.instanceMatrix&&(Y=W.instanceMatrix),ee==="instanceColor"&&W.instanceColor&&(Y=W.instanceColor)),Y!==void 0){const F=Y.normalized,K=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const X=Me.buffer,le=Me.type,ye=Me.bytesPerElement,Ee=le===s.INT||le===s.UNSIGNED_INT||Y.gpuType===$f;if(Y.isInterleavedBufferAttribute){const Se=Y.data,Ae=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,ht=Y.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ye=0;Ye<O.locationSize;Ye++)y(O.location+Ye,Se.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ye=0;Ye<O.locationSize;Ye++)x(O.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ye=0;Ye<O.locationSize;Ye++)D(O.location+Ye,K/O.locationSize,le,F,Ae*ye,(ht+K/O.locationSize*Ye)*ye,Ee)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<O.locationSize;Se++)y(O.location+Se,Y.meshPerAttribute);W.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<O.locationSize;Se++)x(O.location+Se);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Se=0;Se<O.locationSize;Se++)D(O.location+Se,K/O.locationSize,le,F,K*ye,K/O.locationSize*Se*ye,Ee)}}else if(q!==void 0){const F=q[ee];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(O.location,F);break;case 3:s.vertexAttrib3fv(O.location,F);break;case 4:s.vertexAttrib4fv(O.location,F);break;default:s.vertexAttrib1fv(O.location,F)}}}}P()}function I(){H();for(const W in r){const ie=r[W];for(const J in ie){const j=ie[J];for(const $ in j){const te=j[$];for(const q in te)v(te[q].object),delete te[q];delete j[$]}}delete r[W]}}function U(W){if(r[W.id]===void 0)return;const ie=r[W.id];for(const J in ie){const j=ie[J];for(const $ in j){const te=j[$];for(const q in te)v(te[q].object),delete te[q];delete j[$]}}delete r[W.id]}function E(W){for(const ie in r){const J=r[ie];for(const j in J){const $=J[j];if($[W.id]===void 0)continue;const te=$[W.id];for(const q in te)v(te[q].object),delete te[q];delete $[W.id]}}}function L(W){for(const ie in r){const J=r[ie],j=W.isInstancedMesh===!0?W.id:0,$=J[j];if($!==void 0){for(const te in $){const q=$[te];for(const ee in q)v(q[ee].object),delete q[ee];delete $[te]}delete J[j],Object.keys(J).length===0&&delete r[ie]}}}function H(){z(),d=!0,c!==l&&(c=l,m(c.object))}function z(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:H,resetDefaultState:z,dispose:I,releaseStatesOfGeometry:U,releaseStatesOfObject:L,releaseStatesOfProgram:E,initAttributes:w,enableAttribute:x,disableUnusedAttributes:P}}function _w(s,e,t){let r;function l(p){r=p}function c(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function d(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),t.update(m,r,v))}function f(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let _=0;for(let S=0;S<v;S++)_+=m[S];t.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=f}function yw(s,e,t,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(E){return!(E!==Vi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(E){const L=E===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==ri&&E!==Gi&&!L&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(vt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),b=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),P=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),D=s.getParameter(s.MAX_VARYING_VECTORS),A=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),I=s.getParameter(s.MAX_SAMPLES),U=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:b,maxTextureSize:w,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:P,maxVaryings:D,maxFragmentUniforms:A,maxSamples:I,samples:U}}function Sw(s){const e=this;let t=null,r=0,l=!1,c=!1;const d=new Fr,f=new Mt,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,_){const S=M.length!==0||_||r!==0||l;return l=_,r=M.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,_){t=v(M,_,0)},this.setState=function(M,_,S){const b=M.clippingPlanes,w=M.clipIntersection,x=M.clipShadows,y=s.get(M);if(!l||b===null||b.length===0||c&&!x)c?v(null):m();else{const P=c?0:r,D=P*4;let A=y.clippingState||null;p.value=A,A=v(b,_,D,S);for(let I=0;I!==D;++I)A[I]=t[I];y.clippingState=A,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=P}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(M,_,S,b){const w=M!==null?M.length:0;let x=null;if(w!==0){if(x=p.value,b!==!0||x===null){const y=S+w*4,P=_.matrixWorldInverse;f.getNormalMatrix(P),(x===null||x.length<y)&&(x=new Float32Array(y));for(let D=0,A=S;D!==w;++D,A+=4)d.copy(M[D]).applyMatrix4(P,f),d.normal.toArray(x,A),x[A+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=w,e.numIntersection=0,x}}class sh extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Ox(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Eo(5,5,5),c=new xs({name:"CubemapFromEquirect",uniforms:ha(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Kn,blending:oa});c.uniforms.tEquirect.value=t;const d=new Ki(l,c),f=t.minFilter;return t.minFilter===Br&&(t.minFilter=Yn),new Ff(1,10,this).update(e,d),t.minFilter=f,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,l);e.setRenderTarget(c)}}const Tg=256,Mw=3,Ew=20,Xx=256,$x=16,ww=3,bw=new de,Tw=new bt;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ff(1,10,null),this._boxMesh=new Ki(new Eo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,l=100,c={}){const{size:d=256,position:f=bw}=c,p=this._renderer;this._setSize(d);const m=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,_=p.autoClearColor,S=p.autoClearDepth,b=p.autoClearStencil,w=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,w===null&&(e.background=p.getClearColor(Tw));const x=new Ff(r,l,v);return x.position.copy(f),x.update(p,e),p.autoClear=M,p.autoClearColor=_,p.autoClearDepth=S,p.autoClearStencil=b,e.background=w,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ng(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ag(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Tg,OS(e))}_fromTexture(e,t){e.mapping===ua||e.mapping===mo?this._setSize(e.image.length===0?Tg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Cg(e,!1,!1),r=Math.log2(e)-Mw;for(let l=0;l<=r;l++)t.texture.mipmaps.push({width:e>>l,height:e>>l});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Cg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const l=this._boxMesh,c=this._cubeCamera;l.material=r,c.renderTarget=e,c.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),c.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ua||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ng()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Ag()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Cw(),this._integrationMaterial=Aw());const t=this._cubeSize,r=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(t/$x);for(let d=0;d<=r;d++){const f=wc.lodToRoughness(d,r);if(d>r-ww)c.roughness.value=f,this._renderCube(e,d,this._integrationMaterial);else{const p=f>0?Math.log2(t)+.5*Math.log2(6/(Xx*Math.pow(f,4)))+.5:0;l.roughness.value=f,l.lodBias.value=p,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Nw());const r=this._blurMaterial,l=r.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(e,0,r),l.envMap.value=e.texture,this._renderCube(c,0,r)}}function Cg(s,e,t){return new sh(s,{minFilter:Br,generateMipmaps:e,type:Yi,colorSpace:vc,depthBuffer:t})}function bo(s,e,t){return new xs({name:s,uniforms:e,vertexShader:Ct.cube_vert,fragmentShader:t,side:Kn,blending:oa,depthTest:!1,depthWrite:!1})}function Cw(){return bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Xx}u

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
	`)}function Aw(){return bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:$x}},`

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
	`)}function Nw(){return bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Ew}
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
	`)}function Ag(){return bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Ng(){return bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function Rw(s){let e=new WeakMap,t=new WeakMap,r=null;function l(_,S=!1){return _==null?null:S?d(_):c(_)}function c(_){if(_&&_.isTexture){const S=_.mapping;if(S===md||S===gd)if(e.has(_)){const b=e.get(_).texture;return f(b,_.mapping)}else{const b=_.image;if(b&&b.height>0){const w=new sh(b.height);return w.fromEquirectangularTexture(s,_),e.set(_,w),_.addEventListener("dispose",m),f(w.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const S=_.mapping,b=S===md||S===gd,w=S===ua||S===mo;if(b||w){let x=t.get(_);const y=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new wc(s)),x=b?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const P=_.image;return b&&P&&P.height>0||w&&P&&p(P)?(r===null&&(r=new wc(s)),x=b?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",v),x.texture):null}}}return _}function f(_,S){return S===md?_.mapping=ua:S===gd&&(_.mapping=mo),_}function p(_){let S=0;const b=6;for(let w=0;w<b;w++)_[w]!==void 0&&S++;return S===b}function m(_){const S=_.target;S.removeEventListener("dispose",m);const b=e.get(S);b!==void 0&&(e.delete(S),b.dispose())}function v(_){const S=_.target;S.removeEventListener("dispose",v);const b=t.get(S);b!==void 0&&(t.delete(S),b.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:M}}function Pw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const l=t(r);return l===null&&dc("WebGLRenderer: "+r+" extension not supported."),l}}}function Lw(s,e,t,r){const l={},c=new WeakMap,d=new FinalizationRegistry(b=>delete l[b]);function f(b){p(b.target)}function p(b){b.index!==null&&e.remove(b.index);for(const x in b.attributes)e.remove(b.attributes[x]);b.removeEventListener("dispose",f),delete l[b.id],d.unregister(b);const w=c.get(b);w&&(e.remove(w),c.delete(b)),r.releaseStatesOfGeometry(b),b.isInstancedBufferGeometry===!0&&delete b._maxInstanceCount,t.memory.geometries--}function m(b,w){return l[w.id]!==void 0||(w.addEventListener("dispose",f),l[w.id]=new WeakRef(w),d.register(w,w.id,w),t.memory.geometries++),w}function v(b){const w=b.attributes;for(const x in w)e.update(w[x],s.ARRAY_BUFFER)}function M(b){const w=b.index,x=b.attributes.position;let y=0;if(x===void 0)return;const P=w!==null?w.array.length:x.array.length/3-1,D=x.count>=65535?kx:Ix,A=new D(Math.ceil(P/3)*6,1),I=A.array;if(w!==null){const E=w.array;y=w.version;for(let L=0,H=0;L<P;L+=3){const z=E[L+0],W=E[L+1],ie=E[L+2];I[H++]=z,I[H++]=W,I[H++]=W,I[H++]=ie,I[H++]=ie,I[H++]=z}}else{y=x.version;for(let E=0,L=0;E<P;E+=3){const H=E+0,z=E+1,W=E+2;I[L++]=H,I[L++]=z,I[L++]=z,I[L++]=W,I[L++]=W,I[L++]=H}}A.version=y;const U=c.get(b);U&&e.remove(U),c.set(b,A)}function _(b){const w=c.get(b);if(w){const x=b.index;x!==null&&w.version<x.version&&M(b)}else M(b);return c.get(b)}function S(){for(const b in l){const w=l[b].deref();w!==void 0&&p(w)}}return{get:m,update:v,getWireframeAttribute:_,dispose:S}}function Dw(s,e,t){let r;function l(M){r=M}let c,d;function f(M){c=M.type,d=M.bytesPerElement}function p(M,_){s.drawElements(r,_,c,M*d),t.update(_,r,1)}function m(M,_,S){S!==0&&(s.drawElementsInstanced(r,_,c,M*d,S),t.update(_,r,S))}function v(M,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,M,0,S);let w=0;for(let x=0;x<S;x++)w+=_[x];t.update(w,r,1)}this.setMode=l,this.setIndex=f,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function Iw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,f){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=f*(c/3);break;case s.LINES:t.lines+=f*(c/2);break;case s.LINE_STRIP:t.lines+=f*(c-1);break;case s.LINE_LOOP:t.lines+=f*c;break;case s.POINTS:t.points+=f*c;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:r}}function kw(s,e,t){const r=new WeakMap,l=new rn;function c(d,f,p){const m=d.morphTargetInfluences,v=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,M=v!==void 0?v.length:0;let _=r.get(f);if(_===void 0||_.count!==M){let z=function(){L.dispose(),r.delete(f),f.removeEventListener("dispose",z)};var S=z;_!==void 0&&_.texture.dispose();const b=f.morphAttributes.position!==void 0,w=f.morphAttributes.normal!==void 0,x=f.morphAttributes.color!==void 0,y=f.morphAttributes.position||[],P=f.morphAttributes.normal||[],D=f.morphAttributes.color||[];let A=0;b===!0&&(A=1),w===!0&&(A=2),x===!0&&(A=3);let I=f.attributes.position.count*A,U=1;I>e.maxTextureSize&&(U=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const E=new Float32Array(I*U*4*M),L=new Px(E,I,U,M);L.type=Gi,L.needsUpdate=!0;const H=A*4;for(let W=0;W<M;W++){const ie=y[W],J=P[W],j=D[W],$=I*U*4*W;for(let te=0;te<ie.count;te++){const q=te*H;b===!0&&(l.fromBufferAttribute(ie,te),E[$+q+0]=l.x,E[$+q+1]=l.y,E[$+q+2]=l.z,E[$+q+3]=0),w===!0&&(l.fromBufferAttribute(J,te),E[$+q+4]=l.x,E[$+q+5]=l.y,E[$+q+6]=l.z,E[$+q+7]=0),x===!0&&(l.fromBufferAttribute(j,te),E[$+q+8]=l.x,E[$+q+9]=l.y,E[$+q+10]=l.z,E[$+q+11]=j.itemSize===4?l.w:1)}}_={count:M,texture:L,size:new kt(I,U)},r.set(f,_),f.addEventListener("dispose",z)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let b=0;for(let x=0;x<m.length;x++)b+=m[x];const w=f.morphTargetsRelative?1:1-b;p.getUniforms().setValue(s,"morphTargetBaseInfluence",w),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Uw(s,e,t,r,l){let c=new WeakMap;function d(m){const v=l.render.frame,M=m.geometry,_=e.get(m,M);if(c.get(_)!==v&&(e.update(_),c.set(_,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return _}function f(){c=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:f}}const Fw={[fx]:"LINEAR_TONE_MAPPING",[hx]:"REINHARD_TONE_MAPPING",[px]:"CINEON_TONE_MAPPING",[mx]:"ACES_FILMIC_TONE_MAPPING",[xx]:"AGX_TONE_MAPPING",[vx]:"NEUTRAL_TONE_MAPPING",[gx]:"CUSTOM_TONE_MAPPING"};function Ow(s,e,t,r,l,c){const d=new Xi(e,t,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let f=null,p=null,m=null;const v=new gi;v.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const M=new xM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ki(v,M),S=new NM(-1,1,1,-1,0,1);let b=null,w=null,x=!1,y,P=null,D=[],A=!1;this.setSize=function(I,U){d.setSize(I,U),f!==null&&f.setSize(I,U),p!==null&&p.setSize(I,U);for(let E=0;E<D.length;E++){const L=D[E];L.setSize&&L.setSize(I,U)}},this.setEffects=function(I){D=I,A=D.length>0&&D[0].isRenderPass===!0;const U=d.width,E=d.height;D.length>0&&f===null&&(f=new Xi(U,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(U,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}));const L=l===!0&&D.some(H=>H.needsDepthTexture===!0);L!==(d.depthTexture!==null)&&(L===!0&&m===null&&(m=new fa(U,E),c===!0&&(m.format=Hr,m.type=da)),d.dispose(),d.depthTexture=L?m:null,d.resolveDepthBuffer=L,d.storeMultisampledDepthBuffer=L);for(let H=0;H<D.length;H++){const z=D[H];z.setSize&&z.setSize(U,E),L&&z.needsDepthTexture===!0&&z.setDepthTexture&&z.setDepthTexture(m)}},this.begin=function(I,U){if(x||I.toneMapping===dr&&D.length===0)return!1;if(P=U,U!==null){const E=U.width,L=U.height;(d.width!==E||d.height!==L)&&this.setSize(E,L)}return A===!1&&I.setRenderTarget(d),y=I.toneMapping,I.toneMapping=dr,!0},this.hasRenderPass=function(){return A},this.end=function(I,U){I.toneMapping=y,x=!0;let E=d,L=f;for(let H=0;H<D.length;H++){const z=D[H];z.enabled!==!1&&(z.render(I,L,E,U),z.needsSwap!==!1&&(E=L,L=L===f?p:f))}if(b!==I.outputColorSpace||w!==I.toneMapping){b=I.outputColorSpace,w=I.toneMapping,M.defines={},Dt.getTransfer(b)===Vt&&(M.defines.SRGB_TRANSFER="");const H=Fw[w];H&&(M.defines[H]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=E.texture,I.setRenderTarget(P),I.render(_,S),P=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){d.dispose(),f!==null&&f.dispose(),p!==null&&p.dispose(),v.dispose(),M.dispose()}}const qx=new Nn,Yx=new fa(1,1),Kx=new zx(1),Zx=new Px,Qx=new XS,Jx=new Ox,Rg=[],Pg=[],Lg=new Float32Array(16),Dg=new Float32Array(9),Ig=new Float32Array(4);function ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const l=e*t;let c=Rg[l];if(c===void 0&&(c=new Float32Array(l),Rg[l]=c),e!==0){r.toArray(c,0);for(let d=1,f=0;d!==e;++d)f+=t,s[d].toArray(c,f)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=Pg[e];t===void 0&&(t=new Int32Array(e),Pg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function zw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function Bw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function Hw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function Gw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Ig.set(r),s.uniformMatrix2fv(this.addr,!1,Ig),vn(t,r)}}function Vw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Dg.set(r),s.uniformMatrix3fv(this.addr,!1,Dg),vn(t,r)}}function Ww(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Lg.set(r),s.uniformMatrix4fv(this.addr,!1,Lg),vn(t,r)}}function Xw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function Yw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function Kw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Zw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function Qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function Jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Pc(s){return s.version===0&&(s.compareFunction=Nx,s.needsUpdate=!0),s}function eb(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?c=Pc(Yx):c=qx,t.setTexture2D(e||c,l)}function tb(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture3D(e||Qx,l)}function nb(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Pc(Kx):c=Jx,t.setTextureCube(e||c,l)}function ib(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture2DArray(e||Zx,l)}function rb(s){switch(s){case 5126:return zw;case 35664:return jw;case 35665:return Bw;case 35666:return Hw;case 35674:return Gw;case 35675:return Vw;case 35676:return Ww;case 5124:case 35670:return Xw;case 35667:case 35671:return $w;case 35668:case 35672:return qw;case 35669:case 35673:return Yw;case 5125:return Kw;case 36294:return Zw;case 36295:return Qw;case 36296:return Jw;case 35678:case 36198:case 36298:case 36306:case 35682:return eb;case 35679:case 36299:case 36307:return tb;case 35680:case 36300:case 36308:case 36293:return nb;case 36289:case 36303:case 36311:case 36292:return ib}}function sb(s,e){s.uniform1fv(this.addr,e)}function ab(s,e){const t=ma(e,this.size,2);s.uniform2fv(this.addr,t)}function ob(s,e){const t=ma(e,this.size,3);s.uniform3fv(this.addr,t)}function lb(s,e){const t=ma(e,this.size,4);s.uniform4fv(this.addr,t)}function cb(s,e){const t=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function ub(s,e){const t=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function db(s,e){const t=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function fb(s,e){s.uniform1iv(this.addr,e)}function hb(s,e){s.uniform2iv(this.addr,e)}function pb(s,e){s.uniform3iv(this.addr,e)}function mb(s,e){s.uniform4iv(this.addr,e)}function gb(s,e){s.uniform1uiv(this.addr,e)}function xb(s,e){s.uniform2uiv(this.addr,e)}function vb(s,e){s.uniform3uiv(this.addr,e)}function _b(s,e){s.uniform4uiv(this.addr,e)}function yb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Pc(Yx):d=qx;for(let f=0;f!==l;++f)t.setTexture2D(e[f]||d,c[f])}function Sb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||Qx,c[d])}function Mb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=Pc(Kx):d=Jx;for(let f=0;f!==l;++f)t.setTextureCube(e[f]||d,c[f])}function Eb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||Zx,c[d])}function wb(s){switch(s){case 5126:return sb;case 35664:return ab;case 35665:return ob;case 35666:return lb;case 35674:return cb;case 35675:return ub;case 35676:return db;case 5124:case 35670:return fb;case 35667:case 35671:return hb;case 35668:case 35672:return pb;case 35669:case 35673:return mb;case 5125:return gb;case 36294:return xb;case 36295:return vb;case 36296:return _b;case 35678:case 36198:case 36298:case 36306:case 35682:return yb;case 35679:case 36299:case 36307:return Sb;case 35680:case 36300:case 36308:case 36293:return Mb;case 36289:case 36303:case 36311:case 36292:return Eb}}class bb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=rb(t.type)}}class Tb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=wb(t.type)}}class Cb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const f=l[c];f.setValue(e,t[f.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function kg(s,e){s.seq.push(e),s.map[e.id]=e}function Ab(s,e,t){const r=s.name,l=r.length;for(Vd.lastIndex=0;;){const c=Vd.exec(r),d=Vd.lastIndex;let f=c[1];const p=c[2]==="]",m=c[3];if(p&&(f=f|0),m===void 0||m==="["&&d+2===l){kg(t,m===void 0?new bb(f,s,e):new Tb(f,s,e));break}else{let M=t.map[f];M===void 0&&(M=new Cb(f),kg(t,M)),t=M}}}class fc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const f=e.getActiveUniform(t,d),p=e.getUniformLocation(t,f.name);Ab(f,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,t,r,l){const c=this.map[t];c!==void 0&&c.setValue(e,r,l)}setOptional(e,t,r){const l=t[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,t,r,l){for(let c=0,d=t.length;c!==d;++c){const f=t[c],p=r[f.id];p.needsUpdate!==!1&&f.setValue(e,p.value,l)}}static seqWithValue(e,t){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&r.push(d)}return r}}function Ug(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Nb=37297;let Rb=0;function Pb(s,e){const t=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const f=d+1;r.push(`${f===e?">":" "} ${f}: ${t[d]}`)}return r.join(`
`)}const Fg=new Mt;function Lb(s){Dt._getMatrix(Fg,Dt.workingColorSpace,s);const e=`mat3( ${Fg.elements.map(t=>t.toFixed(4))} )`;switch(Dt.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Og(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const f=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+Pb(s.getShaderSource(e),f)}else return c}function Db(s,e){const t=Lb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const Ib={[fx]:"Linear",[hx]:"Reinhard",[px]:"Cineon",[mx]:"ACESFilmic",[xx]:"AgX",[vx]:"Neutral",[gx]:"Custom"};function kb(s,e){const t=Ib[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new de;function Ub(){Dt.getLuminanceCoefficients(ic);const s=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Fb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Ob(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function zb(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let f=1;c.type===s.FLOAT_MAT2&&(f=2),c.type===s.FLOAT_MAT3&&(f=3),c.type===s.FLOAT_MAT4&&(f=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:f}}return t}function so(s){return s!==""}function zg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function jg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jb=/^[ \t]*#include +<([\w\d./]+)>/gm;function zf(s){return s.replace(jb,Bb)}function Bb(s,e){const t=Ct[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return zf(t)}const Hb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bg(s){return s.replace(Hb,Gb)}function Gb(s,e,t,r){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Hg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Vb={[ac]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function Wb(s){return Vb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Xb={[mo]:"ENVMAP_MODE_REFRACTION"};function $b(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Xb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const qb={[dx]:"ENVMAP_BLENDING_MULTIPLY",[SS]:"ENVMAP_BLENDING_MIX",[MS]:"ENVMAP_BLENDING_ADD"};function Yb(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":qb[s.combine]||"ENVMAP_BLENDING_NONE"}function Kb(s,e,t,r){const l=s.getContext(),c=t.defines;let d=t.vertexShader,f=t.fragmentShader;const p=Wb(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=$b(t),M=Yb(t),_=Fb(t),S=Ob(c),b=l.createProgram();let w,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(w=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),w.length>0&&(w+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),x.length>0&&(x+=`
`)):(w=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),x=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?Ct.tonemapping_pars_fragment:"",t.toneMapping!==dr?kb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ct.colorspace_pars_fragment,Db("linearToOutputTexel",t.outputColorSpace),Ub(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),d=zf(d),d=zg(d,t),d=jg(d,t),f=zf(f),f=zg(f,t),f=jg(f,t),d=Bg(d),f=Bg(f),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,w=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+w,x=["#define varying in",t.glslVersion===$m?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===$m?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const P=y+w+d,D=y+x+f,A=Ug(l,l.VERTEX_SHADER,P),I=Ug(l,l.FRAGMENT_SHADER,D);l.attachShader(b,A),l.attachShader(b,I),t.index0AttributeName!==void 0?l.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(b,0,"position"),l.linkProgram(b);function U(z){if(s.debug.checkShaderErrors){const W=l.getProgramInfoLog(b)||"",ie=l.getShaderInfoLog(A)||"",J=l.getShaderInfoLog(I)||"",j=W.trim(),$=ie.trim(),te=J.trim();let q=!0,ee=!0;if(l.getProgramParameter(b,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,b,A,I);else{const O=Og(l,A,"vertex"),Y=Og(l,I,"fragment");Bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(b,l.VALIDATE_STATUS)+`

Material Name: `+z.name+`
Material Type: `+z.type+`

Program Info Log: `+j+`
`+O+`
`+Y)}else j!==""?vt("WebGLProgram: Program Info Log:",j):($===""||te==="")&&(ee=!1);ee&&(z.diagnostics={runnable:q,programLog:j,vertexShader:{log:$,prefix:w},fragmentShader:{log:te,prefix:x}})}l.deleteShader(A),l.deleteShader(I),E=new fc(l,b),L=zb(l,b)}let E;this.getUniforms=function(){return E===void 0&&U(this),E};let L;this.getAttributes=function(){return L===void 0&&U(this),L};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=l.getProgramParameter(b,Nb)),H},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rb++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=A,this.fragmentShader=I,this}let Zb=0;class Qb{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const l=this._getShaderCacheForMaterial(e);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new Jb(e),t.set(e,r)),r}}class Jb{constructor(e){this.id=Zb++,this.code=e,this.usedTimes=0}}function eT(s){return s===gs||s===gc||s===xc}function tT(s,e,t,r,l,c){const d=new th,f=new Qb,p=new Set,m=[],v=new Map,M=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return p.add(E),E===0?"uv":`uv${E}`}function b(E,L,H,z,W,ie){const J=z.fog,j=W.geometry,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?z.environment:null,te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||$,te),ee=_[E.type];let O=r.precision;E.precision!==null&&(O=r.getMaxPrecision(E.precision),O!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",O,"instead."));const Y=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,F=Y!==void 0?Y.length:0;let K=0;j.morphAttributes.position!==void 0&&(K=1),j.morphAttributes.normal!==void 0&&(K=2),j.morphAttributes.color!==void 0&&(K=3);let Me,X,le,ye;if(ee){const Xe=ji[ee];Me=Xe.vertexShader,X=Xe.fragmentShader}else{Me=E.vertexShader,X=E.fragmentShader;const Xe=f.getVertexShaderStage(E),Lt=f.getFragmentShaderStage(E);f.update(E,Xe,Lt),le=Xe.id,ye=Lt.id}const Ee=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Ae=W.isInstancedMesh===!0,ht=W.isBatchedMesh===!0,Ye=!!E.map,_t=!!E.matcap,ut=!!q,lt=ut&&q.isPMREMTexture===!0,ze=!!E.aoMap,dt=!!E.lightMap,wt=!!E.bumpMap&&E.wireframe===!1,fe=!!E.normalMap,be=!!E.displacementMap,Ie=!!E.emissiveMap,At=!!E.metalnessMap,Ut=!!E.roughnessMap,Pe=E.anisotropy>0,k=E.clearcoat>0,Ve=E.diffuseRoughness>0,ft=E.dispersion>0,gt=E.retroreflectivity>0,Le=E.iridescence>0,Wt=E.sheen>0,rt=E.transmission>0,ve=Pe&&!!E.anisotropyMap,R=k&&!!E.clearcoatMap,T=k&&!!E.clearcoatNormalMap,re=k&&!!E.clearcoatRoughnessMap,we=Ve&&!!E.diffuseRoughnessMap,ge=Le&&!!E.iridescenceMap,Ne=Le&&!!E.iridescenceThicknessMap,Ue=Wt&&!!E.sheenColorMap,pe=Wt&&!!E.sheenRoughnessMap,xe=!!E.specularMap,ke=!!E.specularColorMap,V=!!E.specularIntensityMap,_e=rt&&!!E.transmissionMap,me=rt&&!!E.thicknessMap,Be=!!E.gradientMap,Fe=!!E.alphaMap,je=E.alphaTest>0,st=!!E.alphaHash,Et=!!E.extensions;let Re=dr;E.toneMapped&&(Ee===null||Ee.isXRRenderTarget===!0)&&(Re=s.toneMapping);const ct=lt?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,yt={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:X,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:O,batching:ht,batchingColor:ht&&W._colorsTexture!==null,instancing:Ae,instancingColor:Ae&&W.instanceColor!==null,instancingMorph:Ae&&W.morphTexture!==null,outputColorSpace:Ee===null?s.outputColorSpace:Ee.isXRRenderTarget===!0?Ee.texture.colorSpace:Dt.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:_t,envMap:ut,envMapMode:ut&&q.mapping,envMapPMREM:lt,envMapMaxLod:lt?ct.length-1:null,envMapSize:lt?ct[0].width:null,aoMap:ze,lightMap:dt,bumpMap:wt,normalMap:fe,displacementMap:be,emissiveMap:Ie,normalMapObjectSpace:fe&&E.normalMapType===bS,normalMapTangentSpace:fe&&E.normalMapType===If,packedNormalMap:fe&&E.normalMapType===If&&eT(E.normalMap.format),metalnessMap:At,roughnessMap:Ut,anisotropy:Pe,anisotropyMap:ve,clearcoat:k,clearcoatMap:R,clearcoatNormalMap:T,clearcoatRoughnessMap:re,diffuseRoughness:Ve,diffuseRoughnessMap:we,dispersion:ft,retroreflection:gt,iridescence:Le,iridescenceMap:ge,iridescenceThicknessMap:Ne,sheen:Wt,sheenColorMap:Ue,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:ke,specularIntensityMap:V,transmission:rt,transmissionMap:_e,thicknessMap:me,gradientMap:Be,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:je,alphaHash:st,combine:E.combine,mapUv:Ye&&S(E.map.channel),aoMapUv:ze&&S(E.aoMap.channel),lightMapUv:dt&&S(E.lightMap.channel),bumpMapUv:wt&&S(E.bumpMap.channel),normalMapUv:fe&&S(E.normalMap.channel),displacementMapUv:be&&S(E.displacementMap.channel),emissiveMapUv:Ie&&S(E.emissiveMap.channel),metalnessMapUv:At&&S(E.metalnessMap.channel),roughnessMapUv:Ut&&S(E.roughnessMap.channel),anisotropyMapUv:ve&&S(E.anisotropyMap.channel),clearcoatMapUv:R&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:T&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&S(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:we&&S(E.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(E.sheenRoughnessMap.channel),specularMapUv:xe&&S(E.specularMap.channel),specularColorMapUv:ke&&S(E.specularColorMap.channel),specularIntensityMapUv:V&&S(E.specularIntensityMap.channel),transmissionMapUv:_e&&S(E.transmissionMap.channel),thicknessMapUv:me&&S(E.thicknessMap.channel),alphaMapUv:Fe&&S(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(fe||Pe),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:W.isPoints===!0&&!!j.attributes.uv&&(Ye||Fe),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&fe===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Se,skinning:W.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numSunLights:L.sun.length,numDirLights:L.directional.length,numPointLights:L.point.length,numSpotLights:L.spot.length,numSpotLightMaps:L.spotLightMap.length,numRectAreaLights:L.rectArea.length,numHemiLights:L.hemi.length,numSunLightShadows:L.sunShadowMap.length,numDirLightShadows:L.directionalShadowMap.length,numPointLightShadows:L.pointShadowMap.length,numSpotLightShadows:L.spotShadowMap.length,numSpotLightShadowsWithMaps:L.numSpotLightShadowsWithMaps,numLightProbes:L.numLightProbes,numLightProbeGrids:ie.filter(Xe=>Xe.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Re,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&Dt.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ie&&E.emissiveMap.isVideoTexture===!0&&Dt.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Bi,flipSided:E.side===Kn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:Et&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Et&&E.extensions.multiDraw===!0||ht)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=p.has(1),yt.vertexUv2s=p.has(2),yt.vertexUv3s=p.has(3),p.clear(),yt}function w(E){const L=[];if(E.shaderID?L.push(E.shaderID):(L.push(E.customVertexShaderID),L.push(E.customFragmentShaderID)),E.defines!==void 0)for(const H in E.defines)L.push(H),L.push(E.defines[H]);return E.isRawShaderMaterial===!1&&(x(L,E),y(L,E),L.push(s.outputColorSpace)),L.push(E.customProgramCacheKey),L.join()}function x(E,L){E.push(L.precision),E.push(L.outputColorSpace),E.push(L.envMapMode),E.push(L.envMapPMREM),E.push(L.envMapMaxLod),E.push(L.envMapSize),E.push(L.mapUv),E.push(L.alphaMapUv),E.push(L.lightMapUv),E.push(L.aoMapUv),E.push(L.bumpMapUv),E.push(L.normalMapUv),E.push(L.displacementMapUv),E.push(L.emissiveMapUv),E.push(L.metalnessMapUv),E.push(L.roughnessMapUv),E.push(L.anisotropyMapUv),E.push(L.clearcoatMapUv),E.push(L.clearcoatNormalMapUv),E.push(L.clearcoatRoughnessMapUv),E.push(L.diffuseRoughnessMapUv),E.push(L.iridescenceMapUv),E.push(L.iridescenceThicknessMapUv),E.push(L.sheenColorMapUv),E.push(L.sheenRoughnessMapUv),E.push(L.specularMapUv),E.push(L.specularColorMapUv),E.push(L.specularIntensityMapUv),E.push(L.transmissionMapUv),E.push(L.thicknessMapUv),E.push(L.combine),E.push(L.fogExp2),E.push(L.sizeAttenuation),E.push(L.morphTargetsCount),E.push(L.numSunLights),E.push(L.numDirLights),E.push(L.numPointLights),E.push(L.numSpotLights),E.push(L.numSpotLightMaps),E.push(L.numHemiLights),E.push(L.numRectAreaLights),E.push(L.numSunLightShadows),E.push(L.numDirLightShadows),E.push(L.numPointLightShadows),E.push(L.numSpotLightShadows),E.push(L.numSpotLightShadowsWithMaps),E.push(L.numLightProbes),E.push(L.numLightProbeGrids),E.push(L.shadowMapType),E.push(L.toneMapping),E.push(L.numClippingPlanes),E.push(L.numClipIntersection),E.push(L.depthPacking)}function y(E,L){d.disableAll(),L.instancing&&d.enable(0),L.instancingColor&&d.enable(1),L.instancingMorph&&d.enable(2),L.matcap&&d.enable(3),L.envMap&&d.enable(4),L.normalMapObjectSpace&&d.enable(5),L.normalMapTangentSpace&&d.enable(6),L.clearcoat&&d.enable(7),L.iridescence&&d.enable(8),L.alphaTest&&d.enable(9),L.vertexColors&&d.enable(10),L.vertexAlphas&&d.enable(11),L.vertexUv1s&&d.enable(12),L.vertexUv2s&&d.enable(13),L.vertexUv3s&&d.enable(14),L.vertexTangents&&d.enable(15),L.anisotropy&&d.enable(16),L.alphaHash&&d.enable(17),L.batching&&d.enable(18),L.dispersion&&d.enable(19),L.retroreflection&&d.enable(24),L.diffuseRoughness&&d.enable(25),L.batchingColor&&d.enable(20),L.gradientMap&&d.enable(21),L.packedNormalMap&&d.enable(22),L.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),L.fog&&d.enable(0),L.useFog&&d.enable(1),L.flatShading&&d.enable(2),L.logarithmicDepthBuffer&&d.enable(3),L.reversedDepthBuffer&&d.enable(4),L.skinning&&d.enable(5),L.morphTargets&&d.enable(6),L.morphNormals&&d.enable(7),L.morphColors&&d.enable(8),L.premultipliedAlpha&&d.enable(9),L.shadowMapEnabled&&d.enable(10),L.doubleSided&&d.enable(11),L.flipSided&&d.enable(12),L.useDepthPacking&&d.enable(13),L.dithering&&d.enable(14),L.transmission&&d.enable(15),L.sheen&&d.enable(16),L.opaque&&d.enable(17),L.pointsUvs&&d.enable(18),L.decodeVideoTexture&&d.enable(19),L.decodeVideoTextureEmissive&&d.enable(20),L.alphaToCoverage&&d.enable(21),L.numLightProbeGrids>0&&d.enable(22),L.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function P(E){const L=_[E.type];let H;if(L){const z=ji[L];H=pM.clone(z.uniforms)}else H=E.uniforms;return H}function D(E,L){let H=v.get(L);return H!==void 0?++H.usedTimes:(H=new Kb(s,L,E,l),m.push(H),v.set(L,H)),H}function A(E){if(--E.usedTimes===0){const L=m.indexOf(E);m[L]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function I(E){f.remove(E)}function U(){f.dispose()}return{getParameters:b,getProgramCacheKey:w,getUniforms:P,acquireProgram:D,releaseProgram:A,releaseShaderCache:I,programs:m,dispose:U}}function nT(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let f=s.get(d);return f===void 0&&(f={},s.set(d,f)),f}function r(d){s.delete(d)}function l(d,f,p){s.get(d)[f]=p}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:l,dispose:c}}function iT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Gg(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Vg(){const s=[];let e=0;const t=[],r=[],l=[];function c(){e=0,t.length=0,r.length=0,l.length=0}function d(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function f(_,S,b,w,x,y){let P=s[e];return P===void 0?(P={id:_.id,object:_,geometry:S,material:b,materialVariant:d(_),groupOrder:w,renderOrder:_.renderOrder,z:x,group:y},s[e]=P):(P.id=_.id,P.object=_,P.geometry=S,P.material=b,P.materialVariant=d(_),P.groupOrder=w,P.renderOrder=_.renderOrder,P.z=x,P.group=y),e++,P}function p(_,S,b,w,x,y,P){P.reversedDepth===!0&&(x=-x);const D=f(_,S,b,w,x,y);b.transmission>0?r.push(D):b.transparent===!0?l.push(D):t.push(D)}function m(_,S,b,w,x,y){const P=f(_,S,b,w,x,y);b.transmission>0?r.unshift(P):b.transparent===!0?l.unshift(P):t.unshift(P)}function v(_,S){t.length>1&&t.sort(_||iT),r.length>1&&r.sort(S||Gg),l.length>1&&l.sort(S||Gg)}function M(){for(let _=e,S=s.length;_<S;_++){const b=s[_];if(b.id===null)break;b.id=null,b.object=null,b.geometry=null,b.material=null,b.group=null}}return{opaque:t,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:M,sort:v}}function rT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new Vg,s.set(r,[d])):l>=c.length?(d=new Vg,c.push(d)):d=c[l],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function sT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new bt};break;case"SpotLight":t={position:new de,direction:new de,color:new bt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new bt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new bt,groundColor:new bt};break;case"RectAreaLight":t={color:new bt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function aT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let oT=0;function lT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function cT(s){const e=new sT,t=aT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new de);const l=new de,c=new qt,d=new qt;function f(m){let v=0,M=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let S=0,b=0,w=0,x=0,y=0,P=0,D=0,A=0,I=0,U=0,E=0,L=0,H=0,z=0;m.sort(lT);for(let ie=0,J=m.length;ie<J;ie++){const j=m[ie],$=j.color,te=j.intensity,q=j.distance;let ee=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===gs?ee=j.shadow.map.texture:ee=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=$.r*te,M+=$.g*te,_+=$.b*te;else if(j.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(j.sh.coefficients[O],te);z++}else if(j.isSunLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[b]=F,r.sunShadowMap[b]=ee;const K=Y.getViewportCount();for(let Me=0;Me<K;Me++)r.sunShadowMatrix[w+Me]=Y.getMatrix(Me),r.sunShadowCascade[w+Me]=Y._cascadeData[Me];w+=K,b++}r.sun[S]=O,S++}else if(j.isDirectionalLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,r.directionalShadow[x]=F,r.directionalShadowMap[x]=ee,r.directionalShadowMatrix[x]=j.shadow.matrix,I++}r.directional[x]=O,x++}else if(j.isSpotLight){const O=e.get(j);O.position.setFromMatrixPosition(j.matrixWorld),O.color.copy($).multiplyScalar(te),O.distance=q,O.coneCos=Math.cos(j.angle),O.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),O.decay=j.decay,r.spot[P]=O;const Y=j.shadow;if(j.map&&(r.spotLightMap[L]=j.map,L++,Y.updateMatrices(j),j.castShadow&&H++),r.spotLightMatrix[P]=Y.matrix,j.castShadow){const F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,r.spotShadow[P]=F,r.spotShadowMap[P]=ee,E++}P++}else if(j.isRectAreaLight){const O=e.get(j);O.color.copy($).multiplyScalar(te),O.halfWidth.set(j.width*.5,0,0),O.halfHeight.set(0,j.height*.5,0),r.rectArea[D]=O,D++}else if(j.isPointLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),O.distance=j.distance,O.decay=j.decay,j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,r.pointShadow[y]=F,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=j.shadow.matrix,U++}r.point[y]=O,y++}else if(j.isHemisphereLight){const O=e.get(j);O.skyColor.copy(j.color).multiplyScalar(te),O.groundColor.copy(j.groundColor).multiplyScalar(te),r.hemi[A]=O,A++}}D>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=_;const W=r.hash;(W.sunLength!==S||W.directionalLength!==x||W.pointLength!==y||W.spotLength!==P||W.rectAreaLength!==D||W.hemiLength!==A||W.numSunShadows!==b||W.numDirectionalShadows!==I||W.numPointShadows!==U||W.numSpotShadows!==E||W.numSpotMaps!==L||W.numLightProbes!==z)&&(r.sun.length=S,r.directional.length=x,r.spot.length=P,r.rectArea.length=D,r.point.length=y,r.hemi.length=A,r.sunShadow.length=b,r.sunShadowMap.length=b,r.sunShadowMatrix.length=w,r.sunShadowCascade.length=w,r.directionalShadow.length=I,r.directionalShadowMap.length=I,r.directionalShadowMatrix.length=I,r.pointShadow.length=U,r.pointShadowMap.length=U,r.pointShadowMatrix.length=U,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+L-H,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=H,r.numLightProbes=z,W.sunLength=S,W.directionalLength=x,W.pointLength=y,W.spotLength=P,W.rectAreaLength=D,W.hemiLength=A,W.numSunShadows=b,W.numDirectionalShadows=I,W.numPointShadows=U,W.numSpotShadows=E,W.numSpotMaps=L,W.numLightProbes=z,r.version=oT++)}function p(m,v){let M=0,_=0,S=0,b=0,w=0,x=0;const y=v.matrixWorldInverse;for(let P=0,D=m.length;P<D;P++){const A=m[P];if(A.isSunLight){const I=r.sun[M];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(y),M++}else if(A.isDirectionalLight){const I=r.directional[_];I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),_++}else if(A.isSpotLight){const I=r.spot[b];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(y),I.direction.setFromMatrixPosition(A.matrixWorld),l.setFromMatrixPosition(A.target.matrixWorld),I.direction.sub(l),I.direction.transformDirection(y),b++}else if(A.isRectAreaLight){const I=r.rectArea[w];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(y),d.identity(),c.copy(A.matrixWorld),c.premultiply(y),d.extractRotation(c),I.halfWidth.set(A.width*.5,0,0),I.halfHeight.set(0,A.height*.5,0),I.halfWidth.applyMatrix4(d),I.halfHeight.applyMatrix4(d),w++}else if(A.isPointLight){const I=r.point[S];I.position.setFromMatrixPosition(A.matrixWorld),I.position.applyMatrix4(y),S++}else if(A.isHemisphereLight){const I=r.hemi[x];I.direction.setFromMatrixPosition(A.matrixWorld),I.direction.transformDirection(y),x++}}}return{setup:f,setupView:p,state:r}}function Wg(s){const e=new cT(s),t=[],r=[],l=[];function c(M){v.camera=M,t.length=0,r.length=0,l.length=0}function d(M){M.isLightProbeGrid?l.push(M):t.push(M)}function f(M){r.push(M)}function p(){e.setup(t),l.sort((M,_)=>M.priority-_.priority||M.id-_.id)}function m(M){e.setupView(t,M)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:m,pushLight:d,pushShadow:f}}function uT(s){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let f;return d===void 0?(f=new Wg(s),e.set(l,[f])):c>=d.length?(f=new Wg(s),d.push(f)):f=d[c],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const dT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,fT=`uniform sampler2D shadow_pass;
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
}`,hT=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],pT=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Xg=new qt,io=new de,Wd=new de;function mT(s,e,t){let r=new _o;const l=new kt,c=new kt,d=new rn,f=new _M,p=new yM,m={},v=t.maxTextureSize,M={[ms]:Kn,[Kn]:ms,[Bi]:Bi},_=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:dT,fragmentShader:fT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const b=new gi;b.setAttribute("position",new hr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Ki(b,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let y=this.type;this.render=function(U,E,L){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||U.length===0)return;this.type===nS&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const H=s.getRenderTarget(),z=s.getActiveCubeFace(),W=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(oa),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=y!==this.type;J&&E.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach($=>$.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,$=U.length;j<$;j++){const te=U[j],q=te.shadow;if(q===void 0){vt("WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ee=q.getFrameExtents();l.multiply(ee),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,q.mapSize.y=c.y));const O=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=O,q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ro){if(te.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xi(l.x,l.y,{format:gs,type:Yi,minFilter:Yn,magFilter:Yn,generateMipmaps:!1}),q.map.texture.name=te.name+".shadowMap",q.map.depthTexture=new fa(l.x,l.y,Gi),q.map.depthTexture.name=te.name+".shadowMapDepth",q.map.depthTexture.format=Xr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An}else te.isPointLight?(q.map=new sh(l.x),q.map.depthTexture=new zx(l.x,qi)):(q.map=new Xi(l.x,l.y),q.map.depthTexture=new fa(l.x,l.y,qi)),q.map.depthTexture.name=te.name+".shadowMap",q.map.depthTexture.format=Xr,this.type===ac?(q.map.depthTexture.compareFunction=O?Ax:Cx,q.map.depthTexture.minFilter=Yn,q.map.depthTexture.magFilter=Yn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=An,q.map.depthTexture.magFilter=An);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();te.isPointLight!==!0&&q.updateMatrices(te,L);const F=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:L.layers;for(let K=0;K<Y;K++){const Me=q.getCamera(K);if(te.isPointLight){const X=q.camera,le=q.matrix,ye=te.distance||X.far;ye!==X.far&&(X.far=ye,X.updateProjectionMatrix()),io.setFromMatrixPosition(te.matrixWorld),X.position.copy(io),Wd.copy(X.position),Wd.add(hT[K]),X.up.copy(pT[K]),X.lookAt(Wd),X.updateMatrixWorld(),le.makeTranslation(-io.x,-io.y,-io.z),Xg.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Xg,X.coordinateSystem,X.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,K),s.clear();else{K===0&&(s.setRenderTarget(q.map),s.clear());const X=q.getViewport(K);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),ie.viewport(d)}r=q.getFrustum(K),A(E,L,Me,te,F,this.type)}q.isPointLightShadow!==!0&&this.type===ro&&P(q,L),q.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(H,z,W)};function P(U,E){const L=e.update(w);_.defines.VSM_SAMPLES!==U.blurSamples&&(_.defines.VSM_SAMPLES=U.blurSamples,S.defines.VSM_SAMPLES=U.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),U.mapPass===null?U.mapPass=new Xi(l.x,l.y,{format:gs,type:Yi}):(U.mapPass.width!==U.map.width||U.mapPass.height!==U.map.height)&&U.mapPass.setSize(U.map.width,U.map.height),_.uniforms.shadow_pass.value=U.map.depthTexture,_.uniforms.resolution.value.set(U.map.width,U.map.height),_.uniforms.radius.value=U.radius,s.setRenderTarget(U.mapPass),s.clear(),s.renderBufferDirect(E,null,L,_,w,null),S.uniforms.shadow_pass.value=U.mapPass.texture,S.uniforms.resolution.value.set(U.map.width,U.map.height),S.uniforms.radius.value=U.radius,s.setRenderTarget(U.map),s.clear(),s.renderBufferDirect(E,null,L,S,w,null)}function D(U,E,L,H){let z=null;const W=L.isPointLight===!0?U.customDistanceMaterial:U.customDepthMaterial;if(W!==void 0)z=W;else if(z=L.isPointLight===!0?p:f,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ie=z.uuid,J=E.uuid;let j=m[ie];j===void 0&&(j={},m[ie]=j);let $=j[J];$===void 0&&($=z.clone(),j[J]=$,E.addEventListener("dispose",I)),z=$}if(z.visible=E.visible,z.wireframe=E.wireframe,H===ro?z.side=E.shadowSide!==null?E.shadowSide:E.side:z.side=E.shadowSide!==null?E.shadowSide:M[E.side],z.alphaMap=E.alphaMap,z.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,z.map=E.map,z.clipShadows=E.clipShadows,z.clippingPlanes=E.clippingPlanes,z.clipIntersection=E.clipIntersection,z.displacementMap=E.displacementMap,z.displacementScale=E.displacementScale,z.displacementBias=E.displacementBias,z.wireframeLinewidth=E.wireframeLinewidth,z.linewidth=E.linewidth,L.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const ie=s.properties.get(z);ie.light=L}return z}function A(U,E,L,H,z,W){if(U.visible===!1)return;if(U.layers.test(z)&&(U.isMesh||U.isLine||U.isPoints)&&(U.castShadow||U.receiveShadow&&W===ro)&&(!U.frustumCulled||U.intersectsFrustum(r))){U.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,U.matrixWorld);const j=e.update(U),$=U.material;if(Array.isArray($)){const te=j.groups;for(let q=0,ee=te.length;q<ee;q++){const O=te[q],Y=$[O.materialIndex];if(Y&&Y.visible){const F=D(U,Y,H,W);U.onBeforeShadow(s,U,E,L,j,F,O),s.renderBufferDirect(L,null,j,F,U,O),U.onAfterShadow(s,U,E,L,j,F,O)}}}else if($.visible){const te=D(U,$,H,W);U.onBeforeShadow(s,U,E,L,j,te,null),s.renderBufferDirect(L,null,j,te,U,null),U.onAfterShadow(s,U,E,L,j,te,null)}}const J=U.children;for(let j=0,$=J.length;j<$;j++)A(J[j],E,L,H,z,W)}function I(U){U.target.removeEventListener("dispose",I);for(const L in m){const H=m[L],z=U.target.uuid;z in H&&(H[z].dispose(),delete H[z])}}}function gT(s,e){function t(){let V=!1;const _e=new rn;let me=null;const Be=new rn(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!V&&(s.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){V=Fe},setClear:function(Fe,je,st,Et,Re){Re===!0&&(Fe*=Et,je*=Et,st*=Et),_e.set(Fe,je,st,Et),Be.equals(_e)===!1&&(s.clearColor(Fe,je,st,Et),Be.copy(_e))},reset:function(){V=!1,me=null,Be.set(-1,0,0,0)}}}function r(){let V=!1,_e=!1,me=null,Be=null,Fe=null;return{setReversed:function(je){if(_e!==je){const st=e.get("EXT_clip_control");je?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),_e=je;const Et=Fe;Fe=null,this.setClear(Et)}},getReversed:function(){return _e},setTest:function(je){je?Se(s.DEPTH_TEST):Ae(s.DEPTH_TEST)},setMask:function(je){me!==je&&!V&&(s.depthMask(je),me=je)},setFunc:function(je){if(_e&&(je=US[je]),Be!==je){switch(je){case qd:s.depthFunc(s.NEVER);break;case Yd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case po:s.depthFunc(s.LEQUAL);break;case Zd:s.depthFunc(s.EQUAL);break;case Qd:s.depthFunc(s.GEQUAL);break;case Jd:s.depthFunc(s.GREATER);break;case ef:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Be=je}},setLocked:function(je){V=je},setClear:function(je){Fe!==je&&(Fe=je,_e&&(je=1-je),s.clearDepth(je))},reset:function(){V=!1,me=null,Be=null,Fe=null,_e=!1}}}function l(){let V=!1,_e=null,me=null,Be=null,Fe=null,je=null,st=null,Et=null,Re=null;return{setTest:function(ct){V||(ct?Se(s.STENCIL_TEST):Ae(s.STENCIL_TEST))},setMask:function(ct){_e!==ct&&!V&&(s.stencilMask(ct),_e=ct)},setFunc:function(ct,yt,Xe){(me!==ct||Be!==yt||Fe!==Xe)&&(s.stencilFunc(ct,yt,Xe),me=ct,Be=yt,Fe=Xe)},setOp:function(ct,yt,Xe){(je!==ct||st!==yt||Et!==Xe)&&(s.stencilOp(ct,yt,Xe),je=ct,st=yt,Et=Xe)},setLocked:function(ct){V=ct},setClear:function(ct){Re!==ct&&(s.clearStencil(ct),Re=ct)},reset:function(){V=!1,_e=null,me=null,Be=null,Fe=null,je=null,st=null,Et=null,Re=null}}}const c=new t,d=new r,f=new l;let p={};const m=new WeakMap;let v={},M={},_={},S=new WeakMap,b=[],w=null,x=!1,y=null,P=null,D=null,A=null,I=null,U=null,E=null,L=new bt(0,0,0),H=0,z=!1,W=null,ie=null,J=null,j=null,$=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=ee>=1):O.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=ee>=2);let Y=null,F={};const K=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),X=new rn().fromArray(K),le=new rn().fromArray(Me);function ye(V,_e,me,Be){const Fe=new Uint8Array(4),je=s.createTexture();s.bindTexture(V,je),s.texParameteri(V,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(V,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<me;st++)V===s.TEXTURE_3D||V===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,Be,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(_e+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return je}const Ee={};Ee[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),Ee[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Ee[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Ee[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),f.setClear(0),Se(s.DEPTH_TEST),d.setFunc(po),wt(!1),fe(Vm),Se(s.CULL_FACE),ze(oa);function Se(V){v[V]!==!0&&(s.enable(V),v[V]=!0)}function Ae(V){v[V]!==!1&&(s.disable(V),v[V]=!1)}function ht(V,_e){return _[V]!==_e?(s.bindFramebuffer(V,_e),_[V]=_e,V===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),V===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ye(V,_e){let me=b,Be=!1;if(V){me=S.get(_e),me===void 0&&(me=[],S.set(_e,me));const Fe=V.textures;if(me.length!==Fe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let je=0,st=Fe.length;je<st;je++)me[je]=s.COLOR_ATTACHMENT0+je;me.length=Fe.length,Be=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,Be=!0);Be&&s.drawBuffers(me)}function _t(V){return w!==V?(s.useProgram(V),w=V,!0):!1}const ut={[ra]:s.FUNC_ADD,[rS]:s.FUNC_SUBTRACT,[sS]:s.FUNC_REVERSE_SUBTRACT};ut[aS]=s.MIN,ut[oS]=s.MAX;const lt={[lS]:s.ZERO,[cS]:s.ONE,[uS]:s.SRC_COLOR,[cx]:s.SRC_ALPHA,[gS]:s.SRC_ALPHA_SATURATE,[pS]:s.DST_COLOR,[fS]:s.DST_ALPHA,[dS]:s.ONE_MINUS_SRC_COLOR,[ux]:s.ONE_MINUS_SRC_ALPHA,[mS]:s.ONE_MINUS_DST_COLOR,[hS]:s.ONE_MINUS_DST_ALPHA,[xS]:s.CONSTANT_COLOR,[vS]:s.ONE_MINUS_CONSTANT_COLOR,[_S]:s.CONSTANT_ALPHA,[yS]:s.ONE_MINUS_CONSTANT_ALPHA};function ze(V,_e,me,Be,Fe,je,st,Et,Re,ct){if(V===oa){x===!0&&(Ae(s.BLEND),x=!1);return}if(x===!1&&(Se(s.BLEND),x=!0),V!==iS){if(V!==y||ct!==z){if((P!==ra||I!==ra)&&(s.blendEquation(s.FUNC_ADD),P=ra,I=ra),ct)switch(V){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $d:s.blendFunc(s.ONE,s.ONE);break;case Wm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Xm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",V);break}else switch(V){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $d:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Wm:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Xm:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",V);break}D=null,A=null,U=null,E=null,L.set(0,0,0),H=0,y=V,z=ct}return}Fe=Fe||_e,je=je||me,st=st||Be,(_e!==P||Fe!==I)&&(s.blendEquationSeparate(ut[_e],ut[Fe]),P=_e,I=Fe),(me!==D||Be!==A||je!==U||st!==E)&&(s.blendFuncSeparate(lt[me],lt[Be],lt[je],lt[st]),D=me,A=Be,U=je,E=st),(Et.equals(L)===!1||Re!==H)&&(s.blendColor(Et.r,Et.g,Et.b,Re),L.copy(Et),H=Re),y=V,z=!1}function dt(V,_e){V.side===Bi?Ae(s.CULL_FACE):Se(s.CULL_FACE);let me=V.side===Kn;_e&&(me=!me),wt(me),V.blending===lo&&V.transparent===!1?ze(oa):ze(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),d.setFunc(V.depthFunc),d.setTest(V.depthTest),d.setMask(V.depthWrite),c.setMask(V.colorWrite);const Be=V.stencilWrite;f.setTest(Be),Be&&(f.setMask(V.stencilWriteMask),f.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),f.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),Ie(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Ae(s.SAMPLE_ALPHA_TO_COVERAGE)}function wt(V){W!==V&&(V?s.frontFace(s.CW):s.frontFace(s.CCW),W=V)}function fe(V){V!==eS?(Se(s.CULL_FACE),V!==ie&&(V===Vm?s.cullFace(s.BACK):V===tS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ae(s.CULL_FACE),ie=V}function be(V){V!==J&&(q&&s.lineWidth(V),J=V)}function Ie(V,_e,me){V?(Se(s.POLYGON_OFFSET_FILL),(j!==_e||$!==me)&&(j=_e,$=me,d.getReversed()&&(_e=-_e,me=-me),s.polygonOffset(_e,me))):Ae(s.POLYGON_OFFSET_FILL)}function At(V){V?Se(s.SCISSOR_TEST):Ae(s.SCISSOR_TEST)}function Ut(V){V===void 0&&(V=s.TEXTURE0+te-1),Y!==V&&(s.activeTexture(V),Y=V)}function Pe(V,_e,me){me===void 0&&(Y===null?me=s.TEXTURE0+te-1:me=Y);let Be=F[me];Be===void 0&&(Be={type:void 0,texture:void 0},F[me]=Be),(Be.type!==V||Be.texture!==_e)&&(Y!==me&&(s.activeTexture(me),Y=me),s.bindTexture(V,_e||Ee[V]),Be.type=V,Be.texture=_e)}function k(){const V=F[Y];V!==void 0&&V.type!==void 0&&(s.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function Ve(){try{s.compressedTexImage2D(...arguments)}catch(V){Bt("WebGLState:",V)}}function ft(){try{s.compressedTexImage3D(...arguments)}catch(V){Bt("WebGLState:",V)}}function gt(){try{s.texSubImage2D(...arguments)}catch(V){Bt("WebGLState:",V)}}function Le(){try{s.texSubImage3D(...arguments)}catch(V){Bt("WebGLState:",V)}}function Wt(){try{s.compressedTexSubImage2D(...arguments)}catch(V){Bt("WebGLState:",V)}}function rt(){try{s.compressedTexSubImage3D(...arguments)}catch(V){Bt("WebGLState:",V)}}function ve(){try{s.texStorage2D(...arguments)}catch(V){Bt("WebGLState:",V)}}function R(){try{s.texStorage3D(...arguments)}catch(V){Bt("WebGLState:",V)}}function T(){try{s.texImage2D(...arguments)}catch(V){Bt("WebGLState:",V)}}function re(){try{s.texImage3D(...arguments)}catch(V){Bt("WebGLState:",V)}}function we(V){return M[V]!==void 0?M[V]:s.getParameter(V)}function ge(V,_e){M[V]!==_e&&(s.pixelStorei(V,_e),M[V]=_e)}function Ne(V){X.equals(V)===!1&&(s.scissor(V.x,V.y,V.z,V.w),X.copy(V))}function Ue(V){le.equals(V)===!1&&(s.viewport(V.x,V.y,V.z,V.w),le.copy(V))}function pe(V,_e){let me=m.get(_e);me===void 0&&(me=new WeakMap,m.set(_e,me));let Be=me.get(V);Be===void 0&&(Be=s.getUniformBlockIndex(_e,V.name),s.uniformBlockBinding(_e,Be,Be),me.set(V,Be))}function xe(V,_e,me){const Fe=m.get(_e).get(V);p[Fe]!==me&&(s.bindBufferBase(s.UNIFORM_BUFFER,Fe,me),p[Fe]=me)}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},M={},Y=null,F={},_={},p={},S=new WeakMap,b=[],w=null,x=!1,y=null,P=null,D=null,A=null,I=null,U=null,E=null,L=new bt(0,0,0),H=0,z=!1,W=null,ie=null,J=null,j=null,$=null,X.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),f.reset()}return{buffers:{color:c,depth:d,stencil:f},enable:Se,disable:Ae,bindFramebuffer:ht,drawBuffers:Ye,useProgram:_t,setBlending:ze,setMaterial:dt,setFlipSided:wt,setCullFace:fe,setLineWidth:be,setPolygonOffset:Ie,setScissorTest:At,activeTexture:Ut,bindTexture:Pe,unbindTexture:k,compressedTexImage2D:Ve,compressedTexImage3D:ft,texImage2D:T,texImage3D:re,pixelStorei:ge,getParameter:we,updateUBOMapping:pe,uniformBlockBinding:xe,texStorage2D:ve,texStorage3D:R,texSubImage2D:gt,texSubImage3D:Le,compressedTexSubImage2D:Wt,compressedTexSubImage3D:rt,scissor:Ne,viewport:Ue,reset:ke}}function xT(s,e,t,r,l,c,d){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new kt,v=new WeakMap,M=new Set;let _;const S=new WeakMap,b=new Set,w=new FinalizationRegistry(R=>b.delete(R));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(R,T){return x?new OffscreenCanvas(R,T):vo("canvas")}function P(R,T,re){let we=1;const ge=ve(R);if((ge.width>re||ge.height>re)&&(we=re/Math.max(ge.width,ge.height)),we<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Ne=Math.floor(we*ge.width),Ue=Math.floor(we*ge.height);_===void 0&&(_=y(Ne,Ue));const pe=T?y(Ne,Ue):_;return pe.width=Ne,pe.height=Ue,pe.getContext("2d").drawImage(R,0,0,Ne,Ue),vt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Ne+"x"+Ue+")."),pe}else return"data"in R&&vt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),R;return R}function D(R){return R.generateMipmaps}function A(R){s.generateMipmap(R)}function I(R){return R.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?s.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function U(R,T,re,we,ge,Ne=!1){if(R!==null){if(s[R]!==void 0)return s[R];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Ue;we&&(Ue=e.get("EXT_texture_norm16"),Ue||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=T;if(T===s.RED&&(re===s.FLOAT&&(pe=s.R32F),re===s.HALF_FLOAT&&(pe=s.R16F),re===s.UNSIGNED_BYTE&&(pe=s.R8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.R16_EXT),re===s.SHORT&&Ue&&(pe=Ue.R16_SNORM_EXT)),T===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.R8UI),re===s.UNSIGNED_SHORT&&(pe=s.R16UI),re===s.UNSIGNED_INT&&(pe=s.R32UI),re===s.BYTE&&(pe=s.R8I),re===s.SHORT&&(pe=s.R16I),re===s.INT&&(pe=s.R32I)),T===s.RG&&(re===s.FLOAT&&(pe=s.RG32F),re===s.HALF_FLOAT&&(pe=s.RG16F),re===s.UNSIGNED_BYTE&&(pe=s.RG8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RG16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RG16_SNORM_EXT)),T===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RG8UI),re===s.UNSIGNED_SHORT&&(pe=s.RG16UI),re===s.UNSIGNED_INT&&(pe=s.RG32UI),re===s.BYTE&&(pe=s.RG8I),re===s.SHORT&&(pe=s.RG16I),re===s.INT&&(pe=s.RG32I)),T===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),re===s.UNSIGNED_INT&&(pe=s.RGB32UI),re===s.BYTE&&(pe=s.RGB8I),re===s.SHORT&&(pe=s.RGB16I),re===s.INT&&(pe=s.RGB32I)),T===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),re===s.UNSIGNED_INT&&(pe=s.RGBA32UI),re===s.BYTE&&(pe=s.RGBA8I),re===s.SHORT&&(pe=s.RGBA16I),re===s.INT&&(pe=s.RGBA32I)),T===s.RGB&&(re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGB16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),T===s.RGBA){const xe=Ne?_c:Dt.getTransfer(ge);re===s.FLOAT&&(pe=s.RGBA32F),re===s.HALF_FLOAT&&(pe=s.RGBA16F),re===s.UNSIGNED_BYTE&&(pe=xe===Vt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGBA16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function E(R,T){let re;return R?T===null||T===qi||T===da?re=s.DEPTH24_STENCIL8:T===Gi?re=s.DEPTH32F_STENCIL8:T===go&&(re=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===qi||T===da?re=s.DEPTH_COMPONENT24:T===Gi?re=s.DEPTH_COMPONENT32F:T===go&&(re=s.DEPTH_COMPONENT16),re}function L(R,T){return D(R)===!0||R.isFramebufferTexture&&R.minFilter!==An&&R.minFilter!==Yn?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function H(R){const T=new WeakRef(R);r.get(R).__ref=T,b.add(T),w.register(R,T,T)}function z(R){const T=r.get(R).__ref;T!==void 0&&(b.delete(T),w.unregister(T))}function W(R){J(R.target)}function ie(R){j(R.target)}function J(R){R.removeEventListener("dispose",W),z(R),te(R),R.isVideoTexture&&v.delete(R),R.isHTMLTexture&&M.delete(R)}function j(R){R.removeEventListener("dispose",ie),z(R),ee(R)}function $(){for(const R of b){const T=R.deref();T!==void 0&&(T.isRenderTarget===!0?j(T):J(T))}b.clear(),M.clear()}function te(R){const T=r.get(R);if(T.__webglInit===void 0)return;const re=R.source,we=S.get(re);if(we){const ge=we[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(R),Object.keys(we).length===0&&S.delete(re)}r.remove(R)}function q(R){const T=r.get(R);s.deleteTexture(T.__webglTexture);const re=R.source,we=S.get(re);delete we[T.__cacheKey],d.memory.textures--}function ee(R){const T=r.get(R);T.__depthDisposeCallback&&T.__depthDisposeCallback();const re=R.depthTexture;if(re&&re.renderTarget===R&&J(re),R.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(T.__webglFramebuffer[ge]))for(let Ne=0;Ne<T.__webglFramebuffer[ge].length;Ne++)s.deleteFramebuffer(T.__webglFramebuffer[ge][Ne]);else s.deleteFramebuffer(T.__webglFramebuffer[ge]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[ge])}else{if(Array.isArray(T.__webglFramebuffer))for(let ge=0;ge<T.__webglFramebuffer.length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[ge]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let ge=0;ge<T.__webglColorRenderbuffer.length;ge++)T.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[ge]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const we=R.textures;for(let ge=0,Ne=we.length;ge<Ne;ge++){const Ue=r.get(we[ge]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),d.memory.textures--),r.remove(we[ge])}r.remove(R)}let O=0;function Y(){O=0}function F(){return O}function K(R){O=R}function Me(){const R=O;return R>=l.maxTextures&&vt("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+l.maxTextures),O+=1,R}function X(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.mipmapsAutoUpdate),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function le(R,T){const re=r.get(R);if(R.isVideoTexture&&Wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&re.__version!==R.version){const we=R.image;if(we===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(we.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{dt(re,R,T);return}}else R.isExternalTexture&&(re.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+T)}function ye(R,T){const re=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&re.__version!==R.version){dt(re,R,T);return}else R.isExternalTexture&&(re.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+T)}function Ee(R,T){const re=r.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&re.__version!==R.version){dt(re,R,T);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+T)}function Se(R,T){const re=r.get(R);if(R.version>0&&re.__version!==R.version){wt(re,R,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+T)}const Ae={[tf]:s.REPEAT,[ur]:s.CLAMP_TO_EDGE,[nf]:s.MIRRORED_REPEAT},ht={[An]:s.NEAREST,[ES]:s.NEAREST_MIPMAP_NEAREST,[Ll]:s.NEAREST_MIPMAP_LINEAR,[Yn]:s.LINEAR,[xd]:s.LINEAR_MIPMAP_NEAREST,[Br]:s.LINEAR_MIPMAP_LINEAR},Ye={[CS]:s.NEVER,[Nx]:s.ALWAYS,[AS]:s.LESS,[Cx]:s.LEQUAL,[NS]:s.EQUAL,[Ax]:s.GEQUAL,[RS]:s.GREATER,[PS]:s.NOTEQUAL};function _t(R,T){if(T.type===Gi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Yn||T.magFilter===xd||T.magFilter===Ll||T.magFilter===Br||T.minFilter===Yn||T.minFilter===xd||T.minFilter===Ll||T.minFilter===Br)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(R,s.TEXTURE_WRAP_S,Ae[T.wrapS]),s.texParameteri(R,s.TEXTURE_WRAP_T,Ae[T.wrapT]),(R===s.TEXTURE_3D||R===s.TEXTURE_2D_ARRAY)&&s.texParameteri(R,s.TEXTURE_WRAP_R,Ae[T.wrapR]),s.texParameteri(R,s.TEXTURE_MAG_FILTER,ht[T.magFilter]),s.texParameteri(R,s.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(s.texParameteri(R,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(R,s.TEXTURE_COMPARE_FUNC,Ye[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===An||T.minFilter!==Ll&&T.minFilter!==Br||T.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(R,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,l.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function ut(R,T){let re=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",W),H(T));const we=T.source;let ge=S.get(we);ge===void 0&&(ge={},S.set(we,ge));const Ne=X(T);if(Ne!==R.__cacheKey){ge[Ne]===void 0&&(ge[Ne]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,re=!0),ge[Ne].usedTimes++;const Ue=ge[R.__cacheKey];Ue!==void 0&&(ge[R.__cacheKey].usedTimes--,Ue.usedTimes===0&&q(T)),R.__cacheKey=Ne,R.__webglTexture=ge[Ne].texture}return re}function lt(R,T,re){return Math.floor(Math.floor(R/re)/T)}function ze(R,T,re,we){const Ne=R.updateRanges;if(Ne.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,T.width,T.height,re,we,T.data);else{Ne.sort((V,_e)=>V.start-_e.start);let Ue=0;for(let V=1;V<Ne.length;V++){const _e=Ne[Ue],me=Ne[V],Be=_e.start+_e.count,Fe=lt(me.start,T.width,4),je=lt(_e.start,T.width,4);me.start<=Be+1&&Fe===je&&lt(me.start+me.count-1,T.width,4)===Fe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++Ue,Ne[Ue]=me)}Ne.length=Ue+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),ke=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,T.width);for(let V=0,_e=Ne.length;V<_e;V++){const me=Ne[V],Be=Math.floor(me.start/4),Fe=Math.ceil(me.count/4),je=Be%T.width,st=Math.floor(Be/T.width),Et=Fe,Re=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,je),t.pixelStorei(s.UNPACK_SKIP_ROWS,st),t.texSubImage2D(s.TEXTURE_2D,0,je,st,Et,Re,re,we,T.data)}R.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function dt(R,T,re){let we=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(we=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(we=s.TEXTURE_3D);const ge=ut(R,T),Ne=T.source;t.bindTexture(we,R.__webglTexture,s.TEXTURE0+re);const Ue=r.get(Ne);if(Ne.version!==Ue.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&T.image instanceof ImageBitmap)===!1){const Re=Dt.getPrimaries(Dt.workingColorSpace),ct=T.colorSpace===jr?null:Dt.getPrimaries(T.colorSpace),yt=T.colorSpace===jr||Re===ct?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment);let xe=P(T.image,!1,l.maxTextureSize);xe=rt(T,xe);const ke=c.convert(T.format,T.colorSpace),V=c.convert(T.type);let _e=U(T.internalFormat,ke,V,T.normalized,T.colorSpace,T.isVideoTexture);_t(we,T);let me;const Be=T.mipmaps,Fe=T.isVideoTexture!==!0,je=Ue.__version===void 0||ge===!0,st=Ne.dataReady,Et=L(T,xe);if(T.isDepthTexture)_e=E(T.format===Hr,T.type),je&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,_e,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,ke,V,null));else if(T.isDataTexture)if(Be.length>0){Fe&&je&&t.texStorage2D(s.TEXTURE_2D,Et,_e,Be[0].width,Be[0].height);for(let Re=0,ct=Be.length;Re<ct;Re++)me=Be[Re],Fe?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,me.width,me.height,ke,V,me.data):t.texImage2D(s.TEXTURE_2D,Re,_e,me.width,me.height,0,ke,V,me.data);T.generateMipmaps=!1}else Fe?(je&&t.texStorage2D(s.TEXTURE_2D,Et,_e,xe.width,xe.height),st&&ze(T,xe,ke,V)):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,ke,V,xe.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Fe&&je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Et,_e,Be[0].width,Be[0].height,xe.depth);for(let Re=0,ct=Be.length;Re<ct;Re++)if(me=Be[Re],T.format!==Vi)if(ke!==null)if(Fe){if(st)if(T.layerUpdates.size>0){const yt=bg(me.width,me.height,T.format,T.type);for(const Xe of T.layerUpdates){const Lt=me.data.subarray(Xe*yt/me.data.BYTES_PER_ELEMENT,(Xe+1)*yt/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,Xe,me.width,me.height,1,ke,Lt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,me.width,me.height,xe.depth,ke,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Re,_e,me.width,me.height,xe.depth,0,me.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?st&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Re,0,0,0,me.width,me.height,xe.depth,ke,V,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Re,_e,me.width,me.height,xe.depth,0,ke,V,me.data);T.layerUpdates.size>0&&T.clearLayerUpdates()}else{Fe&&je&&t.texStorage2D(s.TEXTURE_2D,Et,_e,Be[0].width,Be[0].height);for(let Re=0,ct=Be.length;Re<ct;Re++)me=Be[Re],T.format!==Vi?ke!==null?Fe?st&&t.compressedTexSubImage2D(s.TEXTURE_2D,Re,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(s.TEXTURE_2D,Re,_e,me.width,me.height,0,me.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,me.width,me.height,ke,V,me.data):t.texImage2D(s.TEXTURE_2D,Re,_e,me.width,me.height,0,ke,V,me.data)}else if(T.isDataArrayTexture)if(Fe){if(je&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Et,_e,xe.width,xe.height,xe.depth),st)if(T.layerUpdates.size>0){const Re=bg(xe.width,xe.height,T.format,T.type);for(const ct of T.layerUpdates){const yt=xe.data.subarray(ct*Re/xe.data.BYTES_PER_ELEMENT,(ct+1)*Re/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ct,xe.width,xe.height,1,ke,V,yt)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ke,V,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,xe.width,xe.height,xe.depth,0,ke,V,xe.data);else if(T.isData3DTexture)Fe?(je&&t.texStorage3D(s.TEXTURE_3D,Et,_e,xe.width,xe.height,xe.depth),st&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ke,V,xe.data)):t.texImage3D(s.TEXTURE_3D,0,_e,xe.width,xe.height,xe.depth,0,ke,V,xe.data);else if(T.isFramebufferTexture){if(je)if(Fe)t.texStorage2D(s.TEXTURE_2D,Et,_e,xe.width,xe.height);else{let Re=xe.width,ct=xe.height;for(let yt=0;yt<Et;yt++)t.texImage2D(s.TEXTURE_2D,yt,_e,Re,ct,0,ke,V,null),Re>>=1,ct>>=1}}else if(T.isHTMLTexture){if("texElementImage2D"in s){const Re=s.canvas;if(Re.hasAttribute("layoutsubtree")||Re.setAttribute("layoutsubtree","true"),xe.parentNode!==Re){Re.appendChild(xe),M.add(T),Re.onpaint=ct=>{const yt=ct.changedElements;for(const Xe of M)yt.includes(Xe.image)&&(Xe.needsUpdate=!0)},Re.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const yt=s.RGBA,Xe=s.RGBA,Lt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,Xe,Lt,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Be.length>0){if(Fe&&je){const Re=ve(Be[0]);t.texStorage2D(s.TEXTURE_2D,Et,_e,Re.width,Re.height)}for(let Re=0,ct=Be.length;Re<ct;Re++)me=Be[Re],Fe?st&&t.texSubImage2D(s.TEXTURE_2D,Re,0,0,ke,V,me):t.texImage2D(s.TEXTURE_2D,Re,_e,ke,V,me);T.generateMipmaps=!1}else if(Fe){if(je){const Re=ve(xe);t.texStorage2D(s.TEXTURE_2D,Et,_e,Re.width,Re.height)}st&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,V,xe)}else t.texImage2D(s.TEXTURE_2D,0,_e,ke,V,xe);D(T)&&T.mipmapsAutoUpdate===!0&&A(we),Ue.__version=Ne.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function wt(R,T,re){if(T.image.length!==6)return;const we=ut(R,T),ge=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,R.__webglTexture,s.TEXTURE0+re);const Ne=r.get(ge);if(ge.version!==Ne.__version||we===!0){t.activeTexture(s.TEXTURE0+re);const Ue=Dt.getPrimaries(Dt.workingColorSpace),pe=T.colorSpace===jr?null:Dt.getPrimaries(T.colorSpace),xe=T.colorSpace===jr||Ue===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ke=T.isCompressedTexture||T.image[0].isCompressedTexture,V=T.image[0]&&T.image[0].isDataTexture,_e=[];for(let Xe=0;Xe<6;Xe++)!ke&&!V?_e[Xe]=P(T.image[Xe],!0,l.maxCubemapSize):_e[Xe]=V?T.image[Xe].image:T.image[Xe],_e[Xe]=rt(T,_e[Xe]);const me=_e[0],Be=c.convert(T.format,T.colorSpace),Fe=c.convert(T.type);let je=U(T.internalFormat,Be,Fe,T.normalized,T.colorSpace);const st=T.isVideoTexture!==!0,Et=Ne.__version===void 0||we===!0,Re=ge.dataReady;let ct=L(T,me);_t(s.TEXTURE_CUBE_MAP,T);let yt;if(T.isDepthTexture){if(je=E(T.format===Hr,T.type),Et)if(st)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,je,me.width,me.height);else for(let Xe=0;Xe<6;Xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,je,me.width,me.height,0,Be,Fe,null)}else if(ke){st&&Et&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,je,me.width,me.height);for(let Xe=0;Xe<6;Xe++){yt=_e[Xe].mipmaps;for(let Lt=0;Lt<yt.length;Lt++){const en=yt[Lt];T.format!==Vi?Be!==null?st?Re&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt,0,0,en.width,en.height,Be,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt,je,en.width,en.height,0,en.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt,0,0,en.width,en.height,Be,Fe,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt,je,en.width,en.height,0,Be,Fe,en.data)}}}else{if(yt=T.mipmaps,st&&Et){yt.length>0&&ct++;const Xe=ve(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ct,je,Xe.width,Xe.height)}for(let Xe=0;Xe<6;Xe++)if(V){st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,_e[Xe].width,_e[Xe].height,Be,Fe,_e[Xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,je,_e[Xe].width,_e[Xe].height,0,Be,Fe,_e[Xe].data);for(let Lt=0;Lt<yt.length;Lt++){const Zn=yt[Lt].image[Xe].image;st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt+1,0,0,Zn.width,Zn.height,Be,Fe,Zn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt+1,je,Zn.width,Zn.height,0,Be,Fe,Zn.data)}}else{st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,Be,Fe,_e[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,je,Be,Fe,_e[Xe]);for(let Lt=0;Lt<yt.length;Lt++){const en=yt[Lt];st?Re&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt+1,0,0,Be,Fe,en.image[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Lt+1,je,Be,Fe,en.image[Xe])}}}D(T)&&T.mipmapsAutoUpdate===!0&&A(s.TEXTURE_CUBE_MAP),Ne.__version=ge.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function fe(R,T,re,we,ge,Ne){const Ue=c.convert(re.format,re.colorSpace),pe=c.convert(re.type),xe=U(re.internalFormat,Ue,pe,re.normalized,re.colorSpace),ke=r.get(T),V=r.get(re);if(V.__renderTarget=T,!ke.__hasExternalTextures){const _e=Math.max(1,T.width>>Ne),me=Math.max(1,T.height>>Ne);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Ne,xe,_e,me,T.depth,0,Ue,pe,null):t.texImage2D(ge,Ne,xe,_e,me,0,Ue,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,R),Le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,we,ge,V.__webglTexture,0,gt(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,we,ge,V.__webglTexture,Ne),t.bindFramebuffer(s.FRAMEBUFFER,null)}function be(R,T,re){if(s.bindRenderbuffer(s.RENDERBUFFER,R),T.depthBuffer){const we=T.depthTexture,ge=we&&we.isDepthTexture?we.type:null,Ne=E(T.stencilBuffer,ge),Ue=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Le(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(T),Ne,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(T),Ne,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,Ne,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,R)}else{const we=T.textures;for(let ge=0;ge<we.length;ge++){const Ne=we[ge],Ue=c.convert(Ne.format,Ne.colorSpace),pe=c.convert(Ne.type),xe=U(Ne.internalFormat,Ue,pe,Ne.normalized,Ne.colorSpace);Le(T)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,gt(T),xe,T.width,T.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,gt(T),xe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,xe,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ie(R,T,re){const we=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(T.depthTexture);ge.__renderTarget=T;const Ne=we?T.depthTexture.image[0]:T.depthTexture.image;(!ge.__webglTexture||Ne.width!==T.width||Ne.height!==T.height)&&(Ne.width=T.width,Ne.height=T.height,T.depthTexture.needsUpdate=!0),we?Se(T.depthTexture,0):le(T.depthTexture,0);const Ue=ge.__webglTexture,pe=gt(T),xe=we?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,ke=T.depthTexture.format===Hr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(T.depthTexture.format===Xr)Le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,xe,Ue,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,xe,Ue,0);else if(T.depthTexture.format===Hr)Le(T)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,xe,Ue,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,xe,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function At(R){const T=r.get(R),re=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const we=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),we){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,we.removeEventListener("dispose",ge)};we.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=we}if(R.depthTexture&&!T.__autoAllocateDepthBuffer)if(re)for(let we=0;we<6;we++)Ie(T.__webglFramebuffer[we],R,we);else R.texture.mipmaps.length>0?Ie(T.__webglFramebuffer[0],R,0):Ie(T.__webglFramebuffer,R,0);else if(re){T.__webglDepthbuffer=[];for(let we=0;we<6;we++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[we]),T.__webglDepthbuffer[we]===void 0)T.__webglDepthbuffer[we]=s.createRenderbuffer(),be(T.__webglDepthbuffer[we],R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer[we];s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ne)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),be(T.__webglDepthbuffer,R,!1);else{const ge=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ne=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Ne),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Ne)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ut(R,T,re){const we=r.get(R);T!==void 0&&fe(we.__webglFramebuffer,R,R.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&At(R)}function Pe(R){const T=R.texture,re=r.get(R),we=r.get(T);R.addEventListener("dispose",ie),H(R);const ge=R.textures,Ne=R.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(we.__webglTexture===void 0&&(we.__webglTexture=s.createTexture()),we.__version=T.version,d.memory.textures++),Ne){re.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(T.mipmaps.length>0){re.__webglFramebuffer[pe]=[];for(let xe=0;xe<T.mipmaps.length;xe++)re.__webglFramebuffer[pe][xe]=s.createFramebuffer()}else re.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(T.mipmaps.length>0){re.__webglFramebuffer=[];for(let pe=0;pe<T.mipmaps.length;pe++)re.__webglFramebuffer[pe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let pe=0,xe=ge.length;pe<xe;pe++){const ke=r.get(ge[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),d.memory.textures++)}if(R.samples>0&&Le(R)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let pe=0;pe<ge.length;pe++){const xe=ge[pe];re.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const ke=c.convert(xe.format,xe.colorSpace),V=c.convert(xe.type),_e=U(xe.internalFormat,ke,V,xe.normalized,xe.colorSpace,R.isXRRenderTarget===!0),me=gt(R);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,_e,R.width,R.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,re.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),R.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),be(re.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Ne){t.bindTexture(s.TEXTURE_CUBE_MAP,we.__webglTexture),_t(s.TEXTURE_CUBE_MAP,T);for(let pe=0;pe<6;pe++)if(T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)fe(re.__webglFramebuffer[pe][xe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else fe(re.__webglFramebuffer[pe],R,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);D(T)?A(s.TEXTURE_CUBE_MAP):T.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let pe=0,xe=ge.length;pe<xe;pe++){const ke=ge[pe],V=r.get(ke);let _e=s.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(_e=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,V.__webglTexture),_t(_e,ke),fe(re.__webglFramebuffer,R,ke,s.COLOR_ATTACHMENT0+pe,_e,0),D(ke)&&A(_e)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(pe=R.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,we.__webglTexture),_t(pe,T),T.mipmaps.length>0)for(let xe=0;xe<T.mipmaps.length;xe++)fe(re.__webglFramebuffer[xe],R,T,s.COLOR_ATTACHMENT0,pe,xe);else fe(re.__webglFramebuffer,R,T,s.COLOR_ATTACHMENT0,pe,0);D(T)?A(pe):T.mipmaps.length>0&&s.texParameteri(pe,s.TEXTURE_MAX_LEVEL,T.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&At(R)}function k(R){const T=R.textures;for(let re=0,we=T.length;re<we;re++){const ge=T[re];if(D(ge)&&ge.mipmapsAutoUpdate===!0){const Ne=I(R),Ue=r.get(ge).__webglTexture;t.bindTexture(Ne,Ue),A(Ne),t.unbindTexture()}}}const Ve=[];function ft(R){if(R.samples>0){if(Le(R)===!1){const T=R.textures,re=R.width,we=R.height;let ge=s.COLOR_BUFFER_BIT;const Ne=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(R),pe=T.length>1;if(pe)for(let ke=0;ke<T.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const V=r.get(T[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,V,0)}s.blitFramebuffer(0,0,re,we,0,0,re,we,ge,s.NEAREST),p===!0&&(Ve.length=0,Ve.push(s.COLOR_ATTACHMENT0+ke),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&Ve.push(Ne),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Ve))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<T.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const V=r.get(T[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,V,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&p){const T=R.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function gt(R){return Math.min(l.maxSamples,R.samples)}function Le(R){const T=r.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Wt(R){const T=d.render.frame;v.get(R)!==T&&(v.set(R,T),R.update())}function rt(R,T){const re=R.colorSpace,we=R.format,ge=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||re!==vc&&re!==jr&&(Dt.getTransfer(re)===Vt?(we!==Vi||ge!==ri)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",re)),T}function ve(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(m.width=R.naturalWidth||R.width,m.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(m.width=R.displayWidth,m.height=R.displayHeight):(m.width=R.width,m.height=R.height),m}this.allocateTextureUnit=Me,this.resetTextureUnits=Y,this.getTextureUnits=F,this.setTextureUnits=K,this.setTexture2D=le,this.setTexture2DArray=ye,this.setTexture3D=Ee,this.setTextureCube=Se,this.rebindTextures=Ut,this.setupRenderTarget=Pe,this.updateRenderTargetMipmap=k,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=Le,this.dispose=$}function vT(s,e){function t(r,l=jr){let c;const d=Dt.getTransfer(l);if(r===ri)return s.UNSIGNED_BYTE;if(r===qf)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Yf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Mx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Ex)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===yx)return s.BYTE;if(r===Sx)return s.SHORT;if(r===go)return s.UNSIGNED_SHORT;if(r===$f)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Yi)return s.HALF_FLOAT;if(r===wx)return s.ALPHA;if(r===bx)return s.RGB;if(r===Vi)return s.RGBA;if(r===Xr)return s.DEPTH_COMPONENT;if(r===Hr)return s.DEPTH_STENCIL;if(r===Tx)return s.RED;if(r===Kf)return s.RED_INTEGER;if(r===gs)return s.RG;if(r===Zf)return s.RG_INTEGER;if(r===Qf)return s.RGBA_INTEGER;if(r===oc||r===lc||r===cc||r===uc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===rf||r===sf||r===af||r===of)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===rf)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===sf)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===af)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===of)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===lf||r===cf||r===uf||r===df||r===ff||r===gc||r===hf)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===lf||r===cf)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===uf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===df)return c.COMPRESSED_R11_EAC;if(r===ff)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return c.COMPRESSED_RG11_EAC;if(r===hf)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===pf||r===mf||r===gf||r===xf||r===vf||r===_f||r===yf||r===Sf||r===Mf||r===Ef||r===wf||r===bf||r===Tf||r===Cf)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===pf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===gf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===xf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===vf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===_f)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===yf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Sf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Mf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ef)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===wf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===bf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Tf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Cf)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Af||r===Nf||r===Rf)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Af)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nf)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Rf)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Pf||r===Lf||r===xc||r===Df)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Pf)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Lf)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Df)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const _T=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yT=`
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

}`;class ST{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new jx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new xs({vertexShader:_T,fragmentShader:yT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ki(new wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class MT extends vs{constructor(e,t){super();const r=this;let l=null,c=1,d=null,f="local-floor",p=1,m=null,v=null,M=null,_=null,S=null,b=null;const w=typeof XRWebGLBinding<"u",x=new ST,y={},P=t.getContextAttributes();let D=null,A=null;const I=[],U=[],E=new kt;let L=null,H=null;const z=new qn;z.viewport=new rn;const W=new qn;W.viewport=new rn;const ie=[z,W],J=new PM;let j=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=I[X];return le===void 0&&(le=new Td,I[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=I[X];return le===void 0&&(le=new Td,I[X]=le),le.getGripSpace()},this.getHand=function(X){let le=I[X];return le===void 0&&(le=new Td,I[X]=le),le.getHandSpace()};function te(X){const le=U.indexOf(X.inputSource);if(le===-1)return;const ye=I[le];ye!==void 0&&(ye.update(X.inputSource,X.frame,m||d),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",ee);for(let X=0;X<I.length;X++){const le=U[X];le!==null&&(U[X]=null,I[X].disconnect(le))}j=null,$=null,x.reset();for(const X in y)delete y[X];if(e.setRenderTarget(D),S=null,_=null,M=null,l=null,A=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(L),e.setSize(E.width,E.height,!1),H!==null){const X=H.camera;X.fov=H.fov,X.zoom=H.zoom,X.updateProjectionMatrix(),H=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){f=X,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return M===null&&w&&(M=new XRWebGLBinding(l,t)),M},this.getFrame=function(){return b},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(D=e.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",q),l.addEventListener("inputsourceschange",ee),P.xrCompatible!==!0&&await t.makeXRCompatible(),L=e.getPixelRatio(),e.getSize(E),w&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Ee=null,Se=null;P.depth&&(Se=P.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=P.stencil?Hr:Xr,Ee=P.stencil?da:qi);const Ae={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:c};M=this.getBinding(),_=M.createProjectionLayer(Ae),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),A=new Xi(_.textureWidth,_.textureHeight,{format:Vi,type:ri,depthTexture:new fa(_.textureWidth,_.textureHeight,Ee,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:P.stencil,colorSpace:e.outputColorSpace,samples:P.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:P.antialias,alpha:!0,depth:P.depth,stencil:P.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,t,ye),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),A=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:P.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}A.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(f),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(X){for(let le=0;le<X.removed.length;le++){const ye=X.removed[le],Ee=U.indexOf(ye);Ee>=0&&(U[Ee]=null,I[Ee].disconnect(ye))}for(let le=0;le<X.added.length;le++){const ye=X.added[le];let Ee=U.indexOf(ye);if(Ee===-1){for(let Ae=0;Ae<I.length;Ae++)if(Ae>=U.length){U.push(ye),Ee=Ae;break}else if(U[Ae]===null){U[Ae]=ye,Ee=Ae;break}if(Ee===-1)break}const Se=I[Ee];Se&&Se.connect(ye)}}function O(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let le=X.near,ye=X.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),J.near=W.near=z.near=le,J.far=W.far=z.far=ye,(j!==J.near||$!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),j=J.near,$=J.far),J.layers.mask=X.layers.mask|6,z.layers.mask=J.layers.mask&-5,W.layers.mask=J.layers.mask&-3;const Ee=X.parent,Se=J.cameras;O(J,Ee);for(let Ae=0;Ae<Se.length;Ae++)O(Se[Ae],Ee);J.projectionMatrix.copy(z.projectionMatrix),J.projectionMatrixInverse.copy(z.projectionMatrixInverse),H===null&&X.isPerspectiveCamera&&(H={camera:X,fov:X.fov,zoom:X.zoom}),Y(X,J,Ee)};function Y(X,le,ye){ye===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=yc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(X){p=X,_!==null&&(_.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(X){return y[X]};let F=null;function K(X,le){if(v=le.getViewerPose(m||d),b=le,v!==null){const ye=v.views;S!==null&&(e.setRenderTargetFramebuffer(A,S.framebuffer),e.setRenderTarget(A));let Ee=!1;ye.length!==J.cameras.length&&(J.cameras.length=0,Ee=!0);for(let Ye=0;Ye<ye.length;Ye++){const _t=ye[Ye];let ut=null;if(S!==null)ut=S.getViewport(_t);else{const ze=M.getViewSubImage(_,_t);ut=ze.viewport,Ye===0&&(e.setRenderTargetTextures(A,ze.colorTexture,ze.depthStencilTexture),e.setRenderTarget(A))}let lt=ie[Ye];lt===void 0&&(lt=new qn,lt.layers.enable(Ye),lt.viewport=new rn,ie[Ye]=lt),lt.matrix.fromArray(_t.transform.matrix),lt.matrix.decompose(lt.position,lt.quaternion,lt.scale),lt.projectionMatrix.fromArray(_t.projectionMatrix),lt.projectionMatrixInverse.copy(lt.projectionMatrix).invert(),lt.viewport.set(ut.x,ut.y,ut.width,ut.height),Ye===0&&(J.matrix.copy(lt.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),Ee===!0&&J.cameras.push(lt)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&w){M=r.getBinding();const Ye=M.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(Ye,l.renderState)}if(Se&&Se.includes("camera-access")&&w){e.state.unbindTexture(),M=r.getBinding();for(let Ye=0;Ye<ye.length;Ye++){const _t=ye[Ye].camera;if(_t){let ut=y[_t];ut||(ut=new jx,y[_t]=ut);const lt=M.getCameraImage(_t);ut.sourceTexture=lt}}}}for(let ye=0;ye<I.length;ye++){const Ee=U[ye],Se=I[ye];Ee!==null&&Se!==void 0&&Se.update(Ee,le,m||d)}F&&F(X,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),b=null}const Me=new Vx;Me.setAnimationLoop(K),this.setAnimationLoop=function(X){F=X},this.dispose=function(){}}}const ET=new qt,ev=new Mt;ev.set(-1,0,0,0,1,0,0,0,1);function wT(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Bx(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,P,D,A){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(x,y):y.isMeshLambertMaterial?(c(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(x,y),M(x,y)):y.isMeshPhongMaterial?(c(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,A)):y.isMeshMatcapMaterial?(c(x,y),b(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),w(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(d(x,y),y.isLineDashedMaterial&&f(x,y)):y.isPointsMaterial?p(x,y,P,D):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Kn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Kn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const P=e.get(y),D=P.envMap,A=P.envMapRotation;D&&(x.envMap.value=D,x.envMapRotation.value.setFromMatrix4(ET.makeRotationFromEuler(A)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(ev),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function f(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,P,D){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*P,x.scale.value=D*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function M(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,P){x.ior.value=y.ior,y.diffuseRoughness>0&&(x.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Kn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.retroreflectivity>0&&(x.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=P.texture,x.transmissionSamplerSize.value.set(P.width,P.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function b(x,y){y.matcap&&(x.matcap.value=y.matcap)}function w(x,y){const P=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(P.matrixWorld),x.nearDistance.value=P.shadow.camera.near,x.farDistance.value=P.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function bT(s,e,t,r){let l={},c={};function d(P,D){const A=D.program;r.uniformBlockBinding(P,A,l[P.id])}function f(P,D){let A=l[P.id];A===void 0&&(b(P),A=p(P),l[P.id]=A,P.addEventListener("dispose",x));const I=D.program;r.updateUBOMapping(P,I);const U=e.render.frame;c[P.id]!==U&&(m(P),c[P.id]=U)}function p(P){const D=s.createBuffer(),A=P.__size,I=P.usage;return s.bindBuffer(s.UNIFORM_BUFFER,D),s.bufferData(s.UNIFORM_BUFFER,A,I),s.bindBuffer(s.UNIFORM_BUFFER,null),D}function m(P){const D=l[P.id],A=P.uniforms,I=P.__cache;s.bindBuffer(s.UNIFORM_BUFFER,D);for(let U=0,E=A.length;U<E;U++){const L=A[U];if(Array.isArray(L))for(let H=0,z=L.length;H<z;H++)v(L[H],U,H,I);else v(L,U,0,I)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(P,D,A,I){if(_(P,D,A,I)===!0){const U=P.__offset,E=P.value;if(Array.isArray(E)){let L=0;for(let H=0;H<E.length;H++){const z=E[H],W=w(z,!0);M(z,P.__data,L),L+=W.storage/Float32Array.BYTES_PER_ELEMENT}}else M(E,P.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,U,P.__data)}}function M(P,D,A){typeof P=="number"||typeof P=="boolean"?D[A]=P:P.isMatrix3?(D[A]=P.elements[0],D[A+1]=P.elements[1],D[A+2]=P.elements[2],D[A+3]=0,D[A+4]=P.elements[3],D[A+5]=P.elements[4],D[A+6]=P.elements[5],D[A+7]=0,D[A+8]=P.elements[6],D[A+9]=P.elements[7],D[A+10]=P.elements[8],D[A+11]=0):ArrayBuffer.isView(P)?D.set(P.subarray(0,D.length-A),A):P.toArray(D,A)}function _(P,D,A,I){const U=P.value,E=D+"_"+A;if(Array.isArray(U)){I[E]===void 0&&(I[E]=[]);const L=I[E];let H=!1;for(let z=0;z<U.length;z++)S(U[z],L,z)===!0&&(H=!0);return H}return S(U,I,E)}function S(P,D,A){if(D[A]===void 0)return typeof P=="number"||typeof P=="boolean"?D[A]=P:ArrayBuffer.isView(P)?D[A]=P.slice():D[A]=P.clone(),!0;{const I=D[A];if(typeof P=="number"||typeof P=="boolean"){if(I!==P)return D[A]=P,!0}else{if(ArrayBuffer.isView(P))return!0;if(I.equals(P)===!1)return I.copy(P),!0}}return!1}function b(P){const D=P.uniforms;let A=0;const I=16;for(let E=0,L=D.length;E<L;E++){const H=Array.isArray(D[E])?D[E]:[D[E]];for(let z=0,W=H.length;z<W;z++){const ie=H[z],J=Array.isArray(ie.value)?ie.value:[ie.value],j=Array.isArray(D[E])||Array.isArray(ie.value);let $=A;for(let q=0,ee=J.length;q<ee;q++){const O=J[q],Y=w(O,j),F=A%I,K=F%Y.boundary,Me=F+K;A+=K,Me!==0&&I-Me<Y.storage&&(A+=I-Me),q===0&&($=A),A+=Y.storage}const te=ie.type==="int"?Int32Array:ie.type==="uint"?Uint32Array:Float32Array;ie.__data=new te((A-$)/Float32Array.BYTES_PER_ELEMENT),ie.__offset=$}}const U=A%I;return U>0&&(A+=I-U),P.__size=A,P.__cache={},this}function w(P,D){const A={boundary:0,storage:0};return typeof P=="number"||typeof P=="boolean"?(A.boundary=4,A.storage=4):P.isVector2?(A.boundary=8,A.storage=8):P.isVector3||P.isColor?(A.boundary=16,A.storage=12):P.isVector4?(A.boundary=16,A.storage=16):P.isMatrix3?(A.boundary=16,A.storage=48):P.isMatrix4?(A.boundary=16,A.storage=64):P.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(P)?(A.boundary=16,A.storage=P.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",P),D===!0&&(A.boundary=16,A.storage=Math.ceil(A.storage/16)*16),A}function x(P){const D=P.target;D.removeEventListener("dispose",x),s.deleteBuffer(l[D.id]),delete l[D.id],delete c[D.id]}function y(){for(const P in l)s.deleteBuffer(l[P]);l={},c={}}return{bind:d,update:f,dispose:y}}const TT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function CT(){return zi===null&&(zi=new oM(TT,16,16,gs,Yi),zi.name="DFG_LUT",zi.minFilter=Yn,zi.magFilter=Yn,zi.wrapS=ur,zi.wrapT=ur,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class tv{constructor(e={}){const{canvas:t=IS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:f=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:_=!1,outputBufferType:S=ri}=e;this.isWebGLRenderer=!0;let b;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");b=r.getContextAttributes().alpha}else b=d;const w=S,x=new Set([Qf,Zf,Kf]),y=new Set([ri,qi,go,da,qf,Yf]),P=new Uint32Array(4),D=new Int32Array(4),A={textures:[],min:[],max:[],resolution:[]};let I=null,U=null;const E=[],L=[];let H=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let W=!1,ie=null,J=null,j=null,$=null;this._outputColorSpace=hi;let te=0,q=0,ee=null,O=-1,Y=null;const F=new rn,K=new rn;let Me=null;const X=new bt(0);let le=0,ye=t.width,Ee=t.height,Se=1,Ae=null,ht=null;const Ye=new rn(0,0,ye,Ee),_t=new rn(0,0,ye,Ee);let ut=!1;const lt=new _o,ze=new nh;let dt=!1,wt=!1;const fe=new qt,be=new de,Ie=new rn,At={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Pe(){return ee===null?Se:1}let k=r;function Ve(N,Z){return t.getContext(N,Z)}let ft,gt,Le,Wt,rt,ve,R,T,re,we,ge,Ne,Ue,pe,xe,ke,V,_e,me,Be,Fe,je,st;try{const N={alpha:!0,depth:l,stencil:c,antialias:f,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xf}`),t.addEventListener("webglcontextlost",ct,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),k===null){const Z="webgl2";if(k=Ve(Z,N),k===null)throw Ve(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Et()}catch(N){throw t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Bt("WebGLRenderer: "+N.message),N}function Et(){ft=new Pw(k),ft.init(),Fe=new vT(k,ft),gt=new yw(k,ft,e,Fe),Le=new gT(k,ft),gt.reversedDepthBuffer&&_&&Le.buffers.depth.setReversed(!0),J=k.createFramebuffer(),j=k.createFramebuffer(),$=k.createFramebuffer(),Wt=new Iw(k),rt=new nT,ve=new xT(k,ft,Le,rt,gt,Fe,Wt),R=new Rw(z),T=new UM(k),je=new vw(k,T),re=new Lw(k,T,Wt,je),we=new Uw(k,re,T,je,Wt),_e=new kw(k,gt,ve),xe=new Sw(rt),ge=new tT(z,R,ft,gt,je,xe),Ne=new wT(z,rt),Ue=new rT,pe=new uT(ft),V=new xw(z,R,Le,we,b,p),ke=new mT(z,we,gt),st=new bT(k,Wt,gt,Le),me=new _w(k,ft,Wt),Be=new Dw(k,ft,Wt),Wt.programs=ge.programs,z.capabilities=gt,z.extensions=ft,z.properties=rt,z.renderLists=Ue,z.shadowMap=ke,z.state=Le,z.info=Wt}w!==ri&&(H=new Ow(w,t.width,t.height,f,l,c));const Re=new MT(z,k);this.xr=Re,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const N=ft.get("WEBGL_lose_context");N&&N.loseContext()},this.forceContextRestore=function(){const N=ft.get("WEBGL_lose_context");N&&N.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(N){N!==void 0&&(Se=N,this.setSize(ye,Ee,!1))},this.getSize=function(N){return N.set(ye,Ee)},this.setSize=function(N,Z,ce=!0){if(Re.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=N,Ee=Z,t.width=Math.floor(N*Se),t.height=Math.floor(Z*Se),ce===!0&&(t.style.width=N+"px",t.style.height=Z+"px"),H!==null&&H.setSize(t.width,t.height),this.setViewport(0,0,N,Z)},this.getDrawingBufferSize=function(N){return N.set(ye*Se,Ee*Se).floor()},this.setDrawingBufferSize=function(N,Z,ce){ye=N,Ee=Z,Se=ce,t.width=Math.floor(N*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,N,Z)},this.setEffects=function(N){if(w===ri){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(N){for(let Z=0;Z<N.length;Z++)if(N[Z].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}H.setEffects(N||[])},this.getCurrentViewport=function(N){return N.copy(F)},this.getViewport=function(N){return N.copy(Ye)},this.setViewport=function(N,Z,ce,ae){N.isVector4?Ye.set(N.x,N.y,N.z,N.w):Ye.set(N,Z,ce,ae),Le.viewport(F.copy(Ye).multiplyScalar(Pe()).round())},this.getScissor=function(N){return N.copy(_t)},this.setScissor=function(N,Z,ce,ae){N.isVector4?_t.set(N.x,N.y,N.z,N.w):_t.set(N,Z,ce,ae),Le.scissor(K.copy(_t).multiplyScalar(Pe()).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(N){Le.setScissorTest(ut=N)},this.setOpaqueSort=function(N){Ae=N},this.setTransparentSort=function(N){ht=N},this.getClearColor=function(N){return N.copy(V.getClearColor())},this.setClearColor=function(){V.setClearColor(...arguments)},this.getClearAlpha=function(){return V.getClearAlpha()},this.setClearAlpha=function(){V.setClearAlpha(...arguments)},this.clear=function(N=!0,Z=!0,ce=!0){let ae=0;if(N){let se=!1;if(ee!==null){const Ge=ee.texture.format;se=x.has(Ge)}if(se){const Ge=ee.texture.type,Ze=y.has(Ge),He=V.getClearColor(),We=V.getClearAlpha(),Je=He.r,xt=He.g,Tt=He.b;Ze?(P[0]=Je,P[1]=xt,P[2]=Tt,P[3]=We,k.clearBufferuiv(k.COLOR,0,P)):(D[0]=Je,D[1]=xt,D[2]=Tt,D[3]=We,k.clearBufferiv(k.COLOR,0,D))}else ae|=k.COLOR_BUFFER_BIT}Z&&(ae|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&k.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(N){N.setRenderer(this),ie=N},this.dispose=function(){t.removeEventListener("webglcontextlost",ct,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),V.dispose(),Ue.dispose(),pe.dispose(),ve.dispose(),rt.dispose(),R.dispose(),we.dispose(),re.dispose(),je.dispose(),st.dispose(),ge.dispose(),Re.dispose(),Re.removeEventListener("sessionstart",To),Re.removeEventListener("sessionend",Ri),Pi.stop()};function ct(N){N.preventDefault(),Ym("WebGLRenderer: Context Lost."),W=!0}function yt(){Ym("WebGLRenderer: Context Restored."),W=!1;const N=Wt.autoReset,Z=ke.enabled,ce=ke.autoUpdate,ae=ke.needsUpdate,se=ke.type;Et(),Wt.autoReset=N,ke.enabled=Z,ke.autoUpdate=ce,ke.needsUpdate=ae,ke.type=se}function Xe(N){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",N.statusMessage)}function Lt(N){const Z=N.target;Z.removeEventListener("dispose",Lt),en(Z)}function en(N){Zn(N),rt.remove(N)}function Zn(N){const Z=rt.get(N).programs;Z!==void 0&&(Z.forEach(function(ce){ge.releaseProgram(ce)}),N.isShaderMaterial&&ge.releaseShaderCache(N))}this.renderBufferDirect=function(N,Z,ce,ae,se,Ge){Z===null&&(Z=At);const Ze=se.isMesh&&se.matrixWorld.determinantAffine()<0,He=ya(N,Z,ce,ae,se);Le.setMaterial(ae,Ze);let We=ce.index,Je=1;if(ae.wireframe===!0){if(We=re.getWireframeAttribute(ce),We===void 0)return;Je=2}const xt=ce.drawRange,Tt=ce.attributes.position;let et=xt.start*Je,Nt=(xt.start+xt.count)*Je;Ge!==null&&(et=Math.max(et,Ge.start*Je),Nt=Math.min(Nt,(Ge.start+Ge.count)*Je)),We!==null?(et=Math.max(et,0),Nt=Math.min(Nt,We.count)):Tt!=null&&(et=Math.max(et,0),Nt=Math.min(Nt,Tt.count));const Qt=Nt-et;if(Qt<0||Qt===1/0)return;je.setup(se,ae,He,ce,We);let Gt,Ht=me;if(We!==null&&(Gt=T.get(We),Ht=Be,Ht.setIndex(Gt)),se.isMesh)ae.wireframe===!0?(Le.setLineWidth(ae.wireframeLinewidth*Pe()),Ht.setMode(k.LINES)):Ht.setMode(k.TRIANGLES);else if(se.isLine){let sn=ae.linewidth;sn===void 0&&(sn=1),Le.setLineWidth(sn*Pe()),se.isLineSegments?Ht.setMode(k.LINES):se.isLineLoop?Ht.setMode(k.LINE_LOOP):Ht.setMode(k.LINE_STRIP)}else se.isPoints?Ht.setMode(k.POINTS):se.isSprite&&Ht.setMode(k.TRIANGLES);if(se.isBatchedMesh)if(ft.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const sn=se._multiDrawStarts,tt=se._multiDrawCounts,hn=se._multiDrawCount,at=We?T.get(We).bytesPerElement:1,Li=rt.get(ae).currentProgram.getUniforms();for(let pn=0;pn<hn;pn++)Li.setValue(k,"_gl_DrawID",pn),Ht.render(sn[pn]/at,tt[pn])}else if(se.isInstancedMesh)Ht.renderInstances(et,Qt,se.count);else if(ce.isInstancedBufferGeometry){const sn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,tt=Math.min(ce.instanceCount,sn);Ht.renderInstances(et,Qt,tt)}else Ht.render(et,Qt)};function ys(N,Z,ce,ae){ie!==null&&N.isNodeMaterial&&ie.setObject(ae,N),dt===!0&&xe.setState(N,ce,!1),N.transparent===!0&&N.side===Bi&&N.forceSinglePass===!1?(N.side=Kn,N.needsUpdate=!0,Yr(N,Z,ae),N.side=ms,N.needsUpdate=!0,Yr(N,Z,ae),N.side=Bi):Yr(N,Z,ae)}this.compile=function(N,Z,ce=null){ce===null&&(ce=N),ie!==null&&ie.renderStart(N,Z,ce),U=pe.get(ce),U.init(Z),L.push(U),ce.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),N!==ce&&N.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(U.pushLight(se),se.castShadow&&U.pushShadow(se))}),U.setupLights(),ie!==null&&ie.updateLights(U.state.lightsArray),wt=this.localClippingEnabled,dt=xe.init(this.clippingPlanes,wt),dt===!0&&xe.setGlobalState(this.clippingPlanes,Z),ie!==null&&ke.render(U.state.shadowsArray,ce,Z);const ae=new Set;return N.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ge=se.material;if(Ge)if(Array.isArray(Ge))for(let Ze=0;Ze<Ge.length;Ze++){const He=Ge[Ze];ys(He,ce,Z,se),ae.add(He)}else ys(Ge,ce,Z,se),ae.add(Ge)}),U=L.pop(),ie!==null&&ie.renderEnd(),ae},this.compileAsync=function(N,Z,ce=null){const ae=this.compile(N,Z,ce);return new Promise(se=>{function Ge(){if(ae.forEach(function(Ze){const We=rt.get(Ze).currentProgram;(We===void 0||We.isReady())&&ae.delete(Ze)}),ae.size===0){se(N);return}setTimeout(Ge,10)}ft.get("KHR_parallel_shader_compile")!==null?Ge():setTimeout(Ge,10)})};let ga=null;function Lc(N){ga&&ga(N)}function To(){Pi.stop()}function Ri(){Pi.start()}const Pi=new Vx;Pi.setAnimationLoop(Lc),typeof self<"u"&&Pi.setContext(self),this.setAnimationLoop=function(N){ga=N,Re.setAnimationLoop(N),N===null?Pi.stop():Pi.start()},Re.addEventListener("sessionstart",To),Re.addEventListener("sessionend",Ri),this.render=function(N,Z){if(Z!==void 0&&Z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(W===!0)return;ie!==null&&ie.renderStart(N,Z);const ce=Re.enabled===!0&&Re.isPresenting===!0,ae=H!==null&&(ee===null||ce)&&H.begin(z,ee);if(N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),Re.enabled===!0&&Re.isPresenting===!0&&(H===null||H.isCompositing()===!1)&&(Re.cameraAutoUpdate===!0&&Re.updateCamera(Z),Z=Re.getCamera()),N.isScene===!0&&N.onBeforeRender(z,N,Z,ee),U=pe.get(N,L.length),U.init(Z),U.state.textureUnits=ve.getTextureUnits(),L.push(U),fe.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?ze.setFromArrayCamera(Z):lt.setFromProjectionMatrix(fe,Ai,Z.reversedDepth),wt=this.localClippingEnabled,dt=xe.init(this.clippingPlanes,wt),I=Ue.get(N,E.length),I.init(),E.push(I),this.info.render.frame++,Re.enabled===!0&&Re.isPresenting===!0){const Ze=z.xr.getDepthSensingMesh();Ze!==null&&Ss(Ze,Z,-1/0,z.sortObjects)}Ss(N,Z,0,z.sortObjects),I.finish(),ie!==null&&ie.updateLights(U.state.lightsArray),z.sortObjects===!0&&I.sort(Ae,ht),Ut=Re.enabled===!1||Re.isPresenting===!1||Re.hasDepthSensing()===!1,Ut&&V.addToRenderList(I,N),this.info.autoReset===!0&&this.info.reset(),dt===!0&&xe.beginShadows();const se=U.state.shadowsArray;if(ke.render(se,N,Z),dt===!0&&xe.endShadows(),(ae&&H.hasRenderPass())===!1){const Ze=I.opaque,He=I.transmissive;if(U.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(He.length>0)for(let Je=0,xt=We.length;Je<xt;Je++){const Tt=We[Je];xa(Ze,He,N,Tt)}Ut&&V.render(N);for(let Je=0,xt=We.length;Je<xt;Je++){const Tt=We[Je];Co(I,N,Tt,Tt.viewport)}}else He.length>0&&xa(Ze,He,N,Z),Ut&&V.render(N),Co(I,N,Z)}ee!==null&&q===0&&(ve.updateMultisampleRenderTarget(ee),ve.updateRenderTargetMipmap(ee)),ae&&H.end(z),N.isScene===!0&&N.onAfterRender(z,N,Z),je.resetDefaultState(),O=-1,Y=null,L.pop(),L.length>0?(U=L[L.length-1],ve.setTextureUnits(U.state.textureUnits),dt===!0&&xe.setGlobalState(z.clippingPlanes,U.state.camera)):U=null,E.pop(),E.length>0?I=E[E.length-1]:I=null,ie!==null&&ie.renderEnd()};function Ss(N,Z,ce,ae){if(N.visible===!1)return;if(N.layers.test(Z.layers)){if(N.isGroup)ce=N.renderOrder;else if(N.isLOD)N.autoUpdate===!0&&N.update(Z);else if(N.isLight)U.pushLight(N),N.castShadow&&U.pushShadow(N);else if(N.isSprite){const Ze=Z.isArrayCamera?ze:lt;if(!N.frustumCulled||N.intersectsFrustum(Ze)){ae&&Ie.setFromMatrixPosition(N.matrixWorld).applyMatrix4(fe);const He=we.update(N),We=N.material;We.visible&&I.push(N,He,We,ce,Ie.z,null,Z)}}else if(N.isMesh||N.isLine||N.isPoints){const Ze=Z.isArrayCamera?ze:lt;if(!N.frustumCulled||N.intersectsFrustum(Ze)){const He=we.update(N),We=N.material;if(ae&&(N.boundingSphere!==void 0?(N.boundingSphere===null&&N.computeBoundingSphere(),Ie.copy(N.boundingSphere.center)):(He.boundingSphere===null&&He.computeBoundingSphere(),Ie.copy(He.boundingSphere.center)),Ie.applyMatrix4(N.matrixWorld).applyMatrix4(fe)),Array.isArray(We)){const Je=He.groups;for(let xt=0,Tt=Je.length;xt<Tt;xt++){const et=Je[xt],Nt=We[et.materialIndex];Nt&&Nt.visible&&I.push(N,He,Nt,ce,Ie.z,et,Z)}}else We.visible&&I.push(N,He,We,ce,Ie.z,null,Z)}}}const Ge=N.children;for(let Ze=0,He=Ge.length;Ze<He;Ze++)Ss(Ge[Ze],Z,ce,ae)}function Co(N,Z,ce,ae){const{opaque:se,transmissive:Ge,transparent:Ze}=N;U.setupLightsView(ce),dt===!0&&xe.setGlobalState(z.clippingPlanes,ce),ae&&Le.viewport(F.copy(ae)),se.length>0&&qr(se,Z,ce),Ge.length>0&&qr(Ge,Z,ce),Ze.length>0&&qr(Ze,Z,ce),Le.buffers.depth.setTest(!0),Le.buffers.depth.setMask(!0),Le.buffers.color.setMask(!0),Le.setPolygonOffset(!1)}function xa(N,Z,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(U.state.transmissionRenderTarget[ae.id]===void 0){const et=ft.has("EXT_color_buffer_half_float")||ft.has("EXT_color_buffer_float");U.state.transmissionRenderTarget[ae.id]=new Xi(1,1,{generateMipmaps:!0,type:et?Yi:ri,minFilter:Br,samples:Math.max(4,gt.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Dt.workingColorSpace})}const Ge=U.state.transmissionRenderTarget[ae.id],Ze=ae.viewport||F;Ge.setSize(Ze.z*z.transmissionResolutionScale,Ze.w*z.transmissionResolutionScale);const He=z.getRenderTarget(),We=z.getActiveCubeFace(),Je=z.getActiveMipmapLevel();z.setRenderTarget(Ge),z.getClearColor(X),le=z.getClearAlpha(),le<1&&z.setClearColor(16777215,.5),z.clear(),Ut&&V.render(ce);const xt=z.toneMapping;z.toneMapping=dr;const Tt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),U.setupLightsView(ae),dt===!0&&xe.setGlobalState(z.clippingPlanes,ae),qr(N,ce,ae),ve.updateMultisampleRenderTarget(Ge),ve.updateRenderTargetMipmap(Ge),ft.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Nt=0,Qt=Z.length;Nt<Qt;Nt++){const Gt=Z[Nt],{object:Ht,geometry:sn,material:tt,group:hn}=Gt;if(tt.side===Bi&&Ht.layers.test(ae.layers)){const at=tt.side;tt.side=Kn,tt.needsUpdate=!0,va(Ht,ce,ae,sn,tt,hn),tt.side=at,tt.needsUpdate=!0,et=!0}}et===!0&&(ve.updateMultisampleRenderTarget(Ge),ve.updateRenderTargetMipmap(Ge))}z.setRenderTarget(He,We,Je),z.setClearColor(X,le),Tt!==void 0&&(ae.viewport=Tt),z.toneMapping=xt}function qr(N,Z,ce){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ge=N.length;se<Ge;se++){const Ze=N[se],{object:He,geometry:We,group:Je}=Ze;let xt=Ze.material;xt.allowOverride===!0&&ae!==null&&(xt=ae),He.layers.test(ce.layers)&&va(He,Z,ce,We,xt,Je)}}function va(N,Z,ce,ae,se,Ge){ie!==null&&se.isNodeMaterial&&ie.setObject(N,se),N.onBeforeRender(z,Z,ce,ae,se,Ge),N.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,N.matrixWorld),N.normalMatrix.getNormalMatrix(N.modelViewMatrix),se.onBeforeRender(z,Z,ce,ae,N,Ge),se.transparent===!0&&se.side===Bi&&se.forceSinglePass===!1?(se.side=Kn,se.needsUpdate=!0,z.renderBufferDirect(ce,Z,ae,se,N,Ge),se.side=ms,se.needsUpdate=!0,z.renderBufferDirect(ce,Z,ae,se,N,Ge),se.side=Bi):z.renderBufferDirect(ce,Z,ae,se,N,Ge),N.onAfterRender(z,Z,ce,ae,se,Ge)}function _a(N){let Z=0;for(const ce of N)ce.texture!==null&&Z++;return Z}function Yr(N,Z,ce){Z.isScene!==!0&&(Z=At);const ae=rt.get(N),se=U.state.lights,Ge=U.state.shadowsArray,Ze=se.state.version,He=ge.getParameters(N,se.state,Ge,Z,ce,U.state.lightProbeGridArray),We=ge.getProgramCacheKey(He);let Je=ae.programs;ae.environment=N.isMeshStandardMaterial||N.isMeshLambertMaterial||N.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const xt=N.isMeshStandardMaterial||N.isMeshLambertMaterial&&!N.envMap||N.isMeshPhongMaterial&&!N.envMap;ae.envMap=R.get(N.envMap||ae.environment,xt),ae.envMapRotation=ae.environment!==null&&N.envMap===null?Z.environmentRotation:N.envMapRotation,Je===void 0&&(N.addEventListener("dispose",Lt),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let Tt=Je.get(We);if(Tt!==void 0){if(ae.currentProgram===Tt&&ae.lightsStateVersion===Ze)return Ao(N,He),Tt}else He.uniforms=ge.getUniforms(N),ie!==null&&N.isNodeMaterial&&ie.build(N,ce,He),N.onBeforeCompile(He,z),Tt=ge.acquireProgram(He,We),Je.set(We,Tt),ae.uniforms=He.uniforms;const et=ae.uniforms;return(!N.isShaderMaterial&&!N.isRawShaderMaterial||N.clipping===!0)&&(et.clippingPlanes=xe.uniform),Ao(N,He),ae.needsLights=Ms(N),ae.lightsStateVersion=Ze,ae.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.sunLights.value=se.state.sun,et.sunLightShadows.value=se.state.sunShadow,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.sunShadowMatrix.value=se.state.sunShadowMatrix,et.sunShadowCascade.value=se.state.sunShadowCascade,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.numLightProbeGrids=_a(U.state.lightProbeGridArray),ae.currentProgram=Tt,ae.uniformsList=null,Tt}function Dc(N,Z,ce,ae,se){const Ge=rt.get(N),Ze=Ge.currentProgram.id+","+ae+","+se;let He=Ge.programVariants.get(Ze);return He===void 0?(He=Yr(N,Z,ce),Ge.programVariants.set(Ze,He)):(Ge.currentProgram=He,Ge.uniformsList=null,Ge.outputColorSpace=ae,Ge.toneMapping=se),He}function Zt(N){if(N.uniformsList===null){const Z=N.currentProgram.getUniforms();N.uniformsList=fc.seqWithValue(Z.seq,N.uniforms)}return N.uniformsList}function Ao(N,Z){const ce=rt.get(N);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function ya(N,Z,ce,ae,se){Z.isScene!==!0&&(Z=At),ve.resetTextureUnits();const Ge=Z.fog,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,He=ee===null?z.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Dt.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=R.get(ae.envMap||Ze,We),xt=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Tt=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ce.morphAttributes.position,Nt=!!ce.morphAttributes.normal,Qt=!!ce.morphAttributes.color;let Gt=dr;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Gt=z.toneMapping);const Ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,sn=Ht!==void 0?Ht.length:0,tt=rt.get(ae),hn=U.state.lights;if(dt===!0&&(wt===!0||N!==Y)){const zt=N===Y&&ae.id===O;xe.setState(ae,N,zt)}let at=!1,Li=!1;ae.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==hn.state.version||se.isBatchedMesh&&tt.batching===!1||!se.isBatchedMesh&&tt.batching===!0||se.isBatchedMesh&&tt.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&tt.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||se.isInstancedMesh&&tt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&tt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&tt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&tt.instancingMorph===!1&&se.morphTexture!==null||tt.envMap!==Je||ae.fog===!0&&tt.fog!==Ge||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==xt||tt.vertexTangents!==Tt||tt.morphTargets!==et||tt.morphNormals!==Nt||tt.morphColors!==Qt||tt.morphTargetsCount!==sn||tt.numLightProbeGrids!==_a(U.state.lightProbeGridArray)?at=!0:(tt.outputColorSpace!==He||tt.toneMapping!==Gt)&&(Li=!0):(at=!0,tt.__version=ae.version);let pn=tt.currentProgram;(at===!0||Li===!0)&&(pn=Li===!0?Dc(ae,Z,se,He,Gt):Yr(ae,Z,se),ie&&ae.isNodeMaterial&&ie.onUpdateProgram(ae,pn,tt));let pr=!1,xi=!1,Di=!1;const Pt=pn.getUniforms(),on=tt.uniforms;if(Le.useProgram(pn.program)&&(pr=!0,xi=!0,Di=!0),ae.id!==O&&(O=ae.id,xi=!0),pr||Y!==N){Le.buffers.depth.getReversed()&&N.reversedDepth!==!0&&(N._reversedDepth=!0,N.updateProjectionMatrix()),Pt.setValue(k,"projectionMatrix",N.projectionMatrix),Pt.setValue(k,"viewMatrix",N.matrixWorldInverse);const Xt=Pt.map.cameraPosition;Xt!==void 0&&Xt.setValue(k,be.setFromMatrixPosition(N.matrixWorld)),gt.logarithmicDepthBuffer&&Pt.setValue(k,"logDepthBufFC",2/(Math.log(N.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Pt.setValue(k,"isOrthographic",N.isOrthographicCamera===!0),Y!==N&&(Y=N,xi=!0,Di=!0)}if(tt.needsLights&&(hn.state.sunShadowMap.length>0&&Pt.setValue(k,"sunShadowMap",hn.state.sunShadowMap,ve),hn.state.directionalShadowMap.length>0&&Pt.setValue(k,"directionalShadowMap",hn.state.directionalShadowMap,ve),hn.state.spotShadowMap.length>0&&Pt.setValue(k,"spotShadowMap",hn.state.spotShadowMap,ve),hn.state.pointShadowMap.length>0&&Pt.setValue(k,"pointShadowMap",hn.state.pointShadowMap,ve)),se.isSkinnedMesh){Pt.setOptional(k,se,"bindMatrix"),Pt.setOptional(k,se,"bindMatrixInverse");const zt=se.skeleton;zt&&(zt.boneTexture===null&&zt.computeBoneTexture(),Pt.setValue(k,"boneTexture",zt.boneTexture,ve))}se.isBatchedMesh&&(Pt.setOptional(k,se,"batchingTexture"),Pt.setValue(k,"batchingTexture",se._matricesTexture,ve),Pt.setOptional(k,se,"batchingIdTexture"),Pt.setValue(k,"batchingIdTexture",se._indirectTexture,ve),Pt.setOptional(k,se,"batchingColorTexture"),se._colorsTexture!==null&&Pt.setValue(k,"batchingColorTexture",se._colorsTexture,ve));const Rn=ce.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&_e.update(se,ce,pn),(xi||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Pt.setValue(k,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(on.envMapIntensity.value=Z.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=CT()),xi){if(Pt.setValue(k,"toneMappingExposure",z.toneMappingExposure),tt.needsLights&&No(on,Di),Ge&&ae.fog===!0&&Ne.refreshFogUniforms(on,Ge),Ne.refreshMaterialUniforms(on,ae,Se,Ee,U.state.transmissionRenderTarget[N.id]),tt.needsLights&&tt.numLightProbeGrids>0){const zt=A;let Xt=0;for(const _n of U.state.lightProbeGridArray)_n.texture!==null&&(zt.textures[Xt]=_n.texture,zt.min[Xt]=_n.boundingBox.min,zt.max[Xt]=_n.boundingBox.max,zt.resolution[Xt]=_n.resolution,Xt++);for(const _n in zt)zt[_n].length=Xt;on.probesSH.value=zt.textures,on.probesMin.value=zt.min,on.probesMax.value=zt.max,on.probesResolution.value=zt.resolution}fc.upload(k,Zt(tt),on,ve)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(fc.upload(k,Zt(tt),on,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Pt.setValue(k,"center",se.center),Pt.setValue(k,"modelViewMatrix",se.modelViewMatrix),Pt.setValue(k,"normalMatrix",se.normalMatrix),Pt.setValue(k,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const zt=ae.uniformsGroups;for(let Xt=0,_n=zt.length;Xt<_n;Xt++){const mr=zt[Xt];st.update(mr,pn),st.bind(mr,pn)}}return pn}function No(N,Z){N.ambientLightColor.needsUpdate=Z,N.lightProbe.needsUpdate=Z,N.sunLights.needsUpdate=Z,N.sunLightShadows.needsUpdate=Z,N.directionalLights.needsUpdate=Z,N.directionalLightShadows.needsUpdate=Z,N.pointLights.needsUpdate=Z,N.pointLightShadows.needsUpdate=Z,N.spotLights.needsUpdate=Z,N.spotLightShadows.needsUpdate=Z,N.rectAreaLights.needsUpdate=Z,N.hemisphereLights.needsUpdate=Z}function Ms(N){return N.isMeshLambertMaterial||N.isMeshToonMaterial||N.isMeshPhongMaterial||N.isMeshStandardMaterial||N.isShadowMaterial||N.isShaderMaterial&&N.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(N,Z,ce){const ae=rt.get(N);ae.__autoAllocateDepthBuffer=N.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),rt.get(N.texture).__webglTexture=Z,rt.get(N.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(N,Z){const ce=rt.get(N);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(N,Z=0,ce=0){ee=N,te=Z,q=ce;let ae=null,se=!1,Ge=!1;if(N){const He=rt.get(N);if(He.__useDefaultFramebuffer!==void 0){Le.bindFramebuffer(k.FRAMEBUFFER,He.__webglFramebuffer),F.copy(N.viewport),K.copy(N.scissor),Me=N.scissorTest,Le.viewport(F),Le.scissor(K),Le.setScissorTest(Me),O=-1;return}else if(He.__webglFramebuffer===void 0)ve.setupRenderTarget(N);else if(He.__hasExternalTextures)ve.rebindTextures(N,rt.get(N.texture).__webglTexture,rt.get(N.depthTexture).__webglTexture);else if(N.depthBuffer){const xt=N.depthTexture;if(He.__boundDepthTexture!==xt){if(xt!==null&&rt.has(xt)&&(N.width!==xt.image.width||N.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(N)}}const We=N.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ge=!0);const Je=rt.get(N).__webglFramebuffer;N.isWebGLCubeRenderTarget?(Array.isArray(Je[Z])?ae=Je[Z][ce]:ae=Je[Z],se=!0):N.samples>0&&ve.useMultisampledRTT(N)===!1?ae=rt.get(N).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ce]:ae=Je,F.copy(N.viewport),K.copy(N.scissor),Me=N.scissorTest}else F.copy(Ye).multiplyScalar(Se).floor(),K.copy(_t).multiplyScalar(Se).floor(),Me=ut;if(ce!==0&&(ae=J),Le.bindFramebuffer(k.FRAMEBUFFER,ae)&&Le.drawBuffers(N,ae),Le.viewport(F),Le.scissor(K),Le.setScissorTest(Me),se){const He=rt.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Z,He.__webglTexture,ce)}else if(Ge){const He=Z;for(let We=0;We<N.textures.length;We++){const Je=rt.get(N.textures[We]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+We,Je.__webglTexture,ce,He)}}else if(N!==null&&ce!==0){const He=rt.get(N.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,He.__webglTexture,ce)}O=-1};function Ro(N){const Z=rt.get(N);return(Z.__readFormat!==N.format||Z.__readType!==N.type)&&(Z.__readFormat=N.format,Z.__readType=N.type,Z.__formatReadable=gt.textureFormatReadable(N.format),Z.__typeReadable=gt.textureTypeReadable(N.type)),Z}this.readRenderTargetPixels=function(N,Z,ce,ae,se,Ge,Ze,He=0){if(!(N&&N.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We){Le.bindFramebuffer(k.FRAMEBUFFER,We);try{const Je=N.textures[He],xt=Je.format,Tt=Je.type;N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He);const et=Ro(Je);if(et.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=N.width-ae&&ce>=0&&ce<=N.height-se&&k.readPixels(Z,ce,ae,se,Fe.convert(xt),Fe.convert(Tt),Ge)}finally{const Je=ee!==null?rt.get(ee).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(N,Z,ce,ae,se,Ge,Ze,He=0){if(!(N&&N.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=rt.get(N).__webglFramebuffer;if(N.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We)if(Z>=0&&Z<=N.width-ae&&ce>=0&&ce<=N.height-se){Le.bindFramebuffer(k.FRAMEBUFFER,We);const Je=N.textures[He],xt=Je.format,Tt=Je.type;N.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+He);const et=Ro(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Nt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.bufferData(k.PIXEL_PACK_BUFFER,Ge.byteLength,k.STREAM_READ),k.readPixels(Z,ce,ae,se,Fe.convert(xt),Fe.convert(Tt),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const Qt=ee!==null?rt.get(ee).__webglFramebuffer:null;Le.bindFramebuffer(k.FRAMEBUFFER,Qt);const Gt=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await kS(k,Gt,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,Nt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,Ge),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer(Nt),k.deleteSync(Gt),Ge}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(N,Z=null,ce=0){const ae=Math.pow(2,-ce),se=Math.floor(N.image.width*ae),Ge=Math.floor(N.image.height*ae),Ze=Z!==null?Z.x:0,He=Z!==null?Z.y:0;ve.setTexture2D(N,0),k.copyTexSubImage2D(k.TEXTURE_2D,ce,0,0,Ze,He,se,Ge),Le.unbindTexture()},this.copyTextureToTexture=function(N,Z,ce=null,ae=null,se=0,Ge=0){let Ze,He,We,Je,xt,Tt,et,Nt,Qt;const Gt=N.isCompressedTexture?N.mipmaps[Ge]:N.image;if(ce!==null)Ze=ce.max.x-ce.min.x,He=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,xt=ce.min.y,Tt=ce.isBox3?ce.min.z:0;else{const Pt=Math.pow(2,-se);Ze=Math.floor(Gt.width*Pt),He=Math.floor(Gt.height*Pt),N.isDataArrayTexture?We=Gt.depth:N.isData3DTexture?We=Math.floor(Gt.depth*Pt):We=1,Je=0,xt=0,Tt=0}ae!==null?(et=ae.x,Nt=ae.y,Qt=ae.z):(et=0,Nt=0,Qt=0);const Ht=Fe.convert(Z.format),sn=Fe.convert(Z.type);let tt;Z.isData3DTexture?(ve.setTexture3D(Z,0),tt=k.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ve.setTexture2DArray(Z,0),tt=k.TEXTURE_2D_ARRAY):(ve.setTexture2D(Z,0),tt=k.TEXTURE_2D),Le.activeTexture(k.TEXTURE0),Le.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,Z.flipY),Le.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Le.pixelStorei(k.UNPACK_ALIGNMENT,Z.unpackAlignment);const hn=Le.getParameter(k.UNPACK_ROW_LENGTH),at=Le.getParameter(k.UNPACK_IMAGE_HEIGHT),Li=Le.getParameter(k.UNPACK_SKIP_PIXELS),pn=Le.getParameter(k.UNPACK_SKIP_ROWS),pr=Le.getParameter(k.UNPACK_SKIP_IMAGES);Le.pixelStorei(k.UNPACK_ROW_LENGTH,Gt.width),Le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Gt.height),Le.pixelStorei(k.UNPACK_SKIP_PIXELS,Je),Le.pixelStorei(k.UNPACK_SKIP_ROWS,xt),Le.pixelStorei(k.UNPACK_SKIP_IMAGES,Tt);const xi=N.isDataArrayTexture||N.isData3DTexture,Di=Z.isDataArrayTexture||Z.isData3DTexture;if(N.isDepthTexture){const Pt=rt.get(N),on=rt.get(Z),Rn=rt.get(Pt.__renderTarget),zt=rt.get(on.__renderTarget);Le.bindFramebuffer(k.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,zt.__webglFramebuffer);for(let Xt=0;Xt<We;Xt++)xi&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rt.get(N).__webglTexture,se,Tt+Xt),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,rt.get(Z).__webglTexture,Ge,Qt+Xt)),k.blitFramebuffer(Je,xt,Je+Ze,xt+He,et,Nt,et+Ze,Nt+He,k.DEPTH_BUFFER_BIT,k.NEAREST);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(se!==0||N.isRenderTargetTexture||rt.has(N)){const Pt=rt.get(N),on=rt.get(Z);Le.bindFramebuffer(k.READ_FRAMEBUFFER,j),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,$);for(let Rn=0;Rn<We;Rn++)xi?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,se,Tt+Rn):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Pt.__webglTexture,se),Di?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,on.__webglTexture,Ge,Qt+Rn):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,on.__webglTexture,Ge),se!==0?k.blitFramebuffer(Je,xt,Je+Ze,xt+He,et,Nt,et+Ze,Nt+He,k.COLOR_BUFFER_BIT,k.NEAREST):Di?k.copyTexSubImage3D(tt,Ge,et,Nt,Qt+Rn,Je,xt,Ze,He):k.copyTexSubImage2D(tt,Ge,et,Nt,Je,xt,Ze,He);Le.bindFramebuffer(k.READ_FRAMEBUFFER,null),Le.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Di?N.isDataTexture||N.isData3DTexture?k.texSubImage3D(tt,Ge,et,Nt,Qt,Ze,He,We,Ht,sn,Gt.data):Z.isCompressedArrayTexture?k.compressedTexSubImage3D(tt,Ge,et,Nt,Qt,Ze,He,We,Ht,Gt.data):k.texSubImage3D(tt,Ge,et,Nt,Qt,Ze,He,We,Ht,sn,Gt):N.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,Ge,et,Nt,Ze,He,Ht,sn,Gt.data):N.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,Ge,et,Nt,Gt.width,Gt.height,Ht,Gt.data):k.texSubImage2D(k.TEXTURE_2D,Ge,et,Nt,Ze,He,Ht,sn,Gt);Le.pixelStorei(k.UNPACK_ROW_LENGTH,hn),Le.pixelStorei(k.UNPACK_IMAGE_HEIGHT,at),Le.pixelStorei(k.UNPACK_SKIP_PIXELS,Li),Le.pixelStorei(k.UNPACK_SKIP_ROWS,pn),Le.pixelStorei(k.UNPACK_SKIP_IMAGES,pr),Ge===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&k.generateMipmap(tt),Le.unbindTexture()},this.initRenderTarget=function(N){rt.get(N).__webglFramebuffer===void 0&&ve.setupRenderTarget(N)},this.initTexture=function(N){N.isCubeTexture?ve.setTextureCube(N,0):N.isData3DTexture?ve.setTexture3D(N,0):N.isDataArrayTexture||N.isCompressedArrayTexture?ve.setTexture2DArray(N,0):ve.setTexture2D(N,0),Le.unbindTexture()},this.resetState=function(){te=0,q=0,ee=null,Le.reset(),je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Dt._getUnpackColorSpace()}}function AT({onEnter:s,onSkip:e}){const t=G.useRef(null),[r,l]=G.useState($n.currentLevel),[c,d]=G.useState(!1);return G.useEffect(()=>$n.subscribe(p=>{l(p)}),[]),G.useEffect(()=>{if(r===Ft.LOW||r===Ft.REDUCED_MOTION)return;const f=t.current;if(!f)return;let p;const m=f.clientWidth||window.innerWidth,v=f.clientHeight||window.innerHeight,M=new Dx;M.fog=new Ac(526348,.035);const _=new qn(60,m/v,.1,1e3);_.position.z=24;const S=new tv({alpha:!0,antialias:r===Ft.HIGH});S.setSize(m,v),S.setPixelRatio(Math.min(window.devicePixelRatio,r===Ft.HIGH?2:1)),S.setClearColor(526348,1),f.appendChild(S.domElement);const b=r===Ft.HIGH?1200:400,w=new gi,x=new Float32Array(b*3),y=new Float32Array(b*3),P=new bt(9133302),D=new bt(3718648),A=new bt(11032055);for(let K=0;K<b;K++){x[K*3]=(Math.random()-.5)*50,x[K*3+1]=(Math.random()-.5)*35,x[K*3+2]=(Math.random()-.5)*40;const Me=Math.random()<.5?P.clone().lerp(D,Math.random()):D.clone().lerp(A,Math.random());y[K*3]=Me.r,y[K*3+1]=Me.g,y[K*3+2]=Me.b}w.setAttribute("position",new hr(x,3)),w.setAttribute("color",new hr(y,3));const I=new Fx({size:r===Ft.HIGH?.18:.25,vertexColors:!0,transparent:!0,opacity:.85,blending:$d}),U=new dM(w,I);M.add(U);const E=new sa,L=new kf({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),H=new kf({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),z=new Ec(7.5,.08,16,64),W=new Ec(9.2,.05,16,64),ie=new Ki(z,L),J=new Ki(W,H);E.add(ie),E.add(J),M.add(E);let j=0,$=0,te=0,q=0;const ee=K=>{j=(K.clientX/window.innerWidth-.5)*2,$=(K.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",ee);const O=()=>{if(!f)return;const K=f.clientWidth||window.innerWidth,Me=f.clientHeight||window.innerHeight;_.aspect=K/Me,_.updateProjectionMatrix(),S.setSize(K,Me)};window.addEventListener("resize",O);let Y=new DM;const F=()=>{p=requestAnimationFrame(F),$n.onFrame(),Y.getDelta();const K=Y.getElapsedTime();te+=(j*2.5-te)*.05,q+=(-$*1.8-q)*.05,_.position.x=te,_.position.y=q,_.lookAt(0,0,0),U.rotation.y=K*.03,U.rotation.x=Math.sin(K*.02)*.05,ie.rotation.x=K*.15,ie.rotation.y=K*.2,J.rotation.y=-K*.12,J.rotation.z=K*.08,S.render(M,_)};return F(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",ee),window.removeEventListener("resize",O),S.domElement&&f.contains(S.domElement)&&f.removeChild(S.domElement),w.dispose(),I.dispose(),z.dispose(),W.dispose(),L.dispose(),H.dispose(),S.dispose()}},[r]),a.jsxs("div",{className:"spatial-landing-root",children:[a.jsx("div",{ref:t,className:"spatial-canvas-viewport"}),a.jsx("div",{className:"spatial-vignette-overlay"}),a.jsxs("div",{className:"spatial-content-wrap",children:[a.jsxs("div",{className:"spatial-badge-pill",children:[a.jsx(rx,{size:13,className:"pulse-icon text-cyan"}),a.jsx("span",{children:"PROJECT CINE-3D • SPATIAL CINEMA"})]}),a.jsxs("h1",{className:"spatial-headline",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"spatial-version-tag",children:"2.0"})]}),a.jsx("p",{className:"spatial-tagline",children:"Beyond the Screen."}),a.jsx("p",{className:"spatial-description",children:"A high-performance personal streaming theater powered by your host workstation. Spatial library discovery, instant seeking, and zero cloud lock-in."}),a.jsxs("div",{className:"spatial-actions-row",children:[a.jsxs("button",{className:`spatial-enter-btn ${c?"hovered":""}`,onClick:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.jsx("div",{className:"btn-glow-ring"}),a.jsx(fn,{size:18,fill:"currentColor"}),a.jsx("span",{children:"Enter CINE-3D Experience"}),a.jsx(r_,{size:18})]}),a.jsxs("button",{className:"spatial-skip-btn",onClick:e,title:"Go directly to traditional media library",children:[a.jsx(Jg,{size:15}),a.jsx("span",{children:"Skip to Library"})]})]}),a.jsx("div",{className:"spatial-footer-note",children:a.jsx("span",{children:"Direct Host Stream • HTTP 206 Range Seeking • Cloudflare Tunnel Active"})})]})]})}const $g={compact:{cardWidth:1.5,cardHeight:2.25,activeScale:1.1,hoverScale:1.02,idleScale:.88,camZ:15.2,camY:.65,cardY:.45,gridY:-1.9,fov:46},balanced:{cardWidth:1.85,cardHeight:2.78,activeScale:1.12,hoverScale:1.04,idleScale:.9,camZ:15.6,camY:.65,cardY:.45,gridY:-2.1,fov:46},cinematic:{cardWidth:2.3,cardHeight:3.45,activeScale:1.15,hoverScale:1.05,idleScale:.92,camZ:16.2,camY:.7,cardY:.48,gridY:-2.4,fov:48}};function NT({movies:s=[],onSelectMovie:e,onPlayMovie:t,onSwitchTo2D:r}){const l=G.useRef(null),[c,d]=G.useState($n.currentLevel),[f,p]=G.useState(0),[m,v]=G.useState(!1),[M,_]=G.useState(null),[S,b]=G.useState(()=>localStorage.getItem("streamlink_cine3d_card_scale")||"balanced"),w=H=>{b(H);try{localStorage.setItem("streamlink_cine3d_card_scale",H)}catch{}};G.useEffect(()=>$n.subscribe(H=>d(H)),[]);const x=G.useMemo(()=>(s||[]).filter(H=>H&&H.id),[s]),y=x[f]||x[0]||null,P=G.useRef(0),D=G.useRef(0),A=G.useRef(0),I=G.useRef(!1),U=G.useRef(0),E=G.useRef(0);G.useEffect(()=>{const H=z=>{["ArrowLeft","KeyA"].includes(z.code)?(z.preventDefault(),L(-1)):["ArrowRight","KeyD"].includes(z.code)?(z.preventDefault(),L(1)):z.code==="Enter"&&y?e(y):z.code==="Space"&&y&&(z.preventDefault(),t(y))};return window.addEventListener("keydown",H),()=>window.removeEventListener("keydown",H)},[y,x.length]);const L=H=>{if(!x.length)return;const z=x.length,W=Math.PI*2/z;D.current+=H*W};return G.useEffect(()=>{if(c===Ft.LOW||c===Ft.REDUCED_MOTION)return;const H=l.current;if(!H||x.length===0)return;let z;const W=H.clientWidth||window.innerWidth,ie=H.clientHeight||window.innerHeight,J=$g[S]||$g.balanced,j=new Dx;j.fog=new Ac(526348,.028);const $=new qn(J.fov,W/ie,.1,100);$.position.set(0,J.camY,J.camZ),$.lookAt(0,J.cardY*.4,0);const te=new tv({antialias:c===Ft.HIGH,alpha:!0});te.setSize(W,ie),te.setPixelRatio(Math.min(window.devicePixelRatio,c===Ft.HIGH?2:1)),te.setClearColor(526348,1),H.appendChild(te.domElement);const q=new RM(16777215,.88);j.add(q);const ee=new TM(9133302,2.5);ee.position.set(0,8,12),ee.angle=Math.PI/4,ee.penumbra=.8,j.add(ee);const O=new AM(3718648,1.8,30);O.position.set(-6,-2,6),j.add(O);const Y=new IM(36,36,9133302,1974840);Y.position.y=J.gridY,j.add(Y);const F=new sa;j.add(F);const K=x.length,Me=Math.max(8,K*.95),X=new wo(J.cardWidth,J.cardHeight),le=new wM,ye=[],Ee=[],Se=[],Ae=fe=>{const be=document.createElement("canvas");be.width=300,be.height=450;const Ie=be.getContext("2d");return Ie.fillStyle="#101626",Ie.fillRect(0,0,300,450),Ie.fillStyle="#8B5CF6",Ie.fillRect(0,440,300,10),Ie.fillStyle="#F8FAFC",Ie.font="bold 20px sans-serif",Ie.textAlign="center",Ie.fillText((fe||"Movie").substring(0,22),150,225),new fM(be)};x.forEach((fe,be)=>{const Ie=be/K*Math.PI*2,At=Math.sin(Ie)*Me,Ut=Math.cos(Ie)*Me;let Pe;try{const ft=cn(`/api/movies/${fe.id}/poster`);Pe=le.load(ft,void 0,void 0,()=>{const gt=Ae(fe.clean_title);k.map=gt,k.needsUpdate=!0})}catch{Pe=Ae(fe.clean_title)}Se.push(Pe);const k=new vM({map:Pe,roughness:.35,metalness:.15,side:Bi});Ee.push(k);const Ve=new Ki(X,k);Ve.position.set(At,J.cardY,Ut),Ve.lookAt(0,J.cardY,0),Ve.rotation.y+=Math.PI,Ve.userData={movie:fe,index:be},F.add(Ve),ye.push(Ve)});const ht=new LM,Ye=new kt(-999,-999),_t=fe=>{const be=H.getBoundingClientRect();if(Ye.x=(fe.clientX-be.left)/be.width*2-1,Ye.y=-((fe.clientY-be.top)/be.height)*2+1,I.current){const Ie=fe.clientX-E.current;E.current=fe.clientX,D.current+=Ie*.005,A.current=Ie*.005}},ut=fe=>{I.current=!0,U.current=fe.clientX,E.current=fe.clientX,A.current=0,v(!0)},lt=fe=>{const be=Math.abs(fe.clientX-U.current);if(I.current=!1,v(!1),be<6){ht.setFromCamera(Ye,$);const Ie=ht.intersectObjects(ye);if(Ie.length>0){const At=Ie[0].object,{movie:Ut,index:Pe}=At.userData;if(Pe===f)e(Ut);else{const k=Math.PI*2/K,Ve=Pe-f;D.current-=Ve*k}}}},ze=fe=>{fe.preventDefault(),D.current+=Math.sign(fe.deltaY)*.15};H.addEventListener("pointermove",_t),H.addEventListener("pointerdown",ut),window.addEventListener("pointerup",lt),H.addEventListener("wheel",ze,{passive:!1});const dt=()=>{if(!H)return;const fe=H.clientWidth||window.innerWidth,be=H.clientHeight||window.innerHeight;$.aspect=fe/be,$.updateProjectionMatrix(),te.setSize(fe,be)};window.addEventListener("resize",dt);const wt=()=>{var Pe;z=requestAnimationFrame(wt),$n.onFrame(),I.current||(D.current+=A.current,A.current*=.92),P.current+=(D.current-P.current)*.08,F.rotation.y=P.current;const fe=(-F.rotation.y%(Math.PI*2)+Math.PI*2)%(Math.PI*2),be=Math.PI*2/K;let Ie=Math.round(fe/be)%K;Ie<0&&(Ie+=K),Ie!==f&&p(Ie),ht.setFromCamera(Ye,$);const At=ht.intersectObjects(ye),Ut=At.length>0?At[0].object:null;ye.forEach((k,Ve)=>{const ft=Ve===Ie,gt=Ut===k,Le=ft?J.activeScale:gt?J.hoverScale:J.idleScale;k.scale.lerp(new de(Le,Le,Le),.1),k.material&&(k.material.emissive=new bt(ft?2233152:gt?990771:0))}),(Pe=Ut==null?void 0:Ut.userData)!=null&&Pe.movie?_(Ut.userData.movie):_(null),te.render(j,$)};return wt(),()=>{cancelAnimationFrame(z),H.removeEventListener("pointermove",_t),H.removeEventListener("pointerdown",ut),window.removeEventListener("pointerup",lt),H.removeEventListener("wheel",ze),window.removeEventListener("resize",dt),te.domElement&&H.contains(te.domElement)&&H.removeChild(te.domElement),X.dispose(),Y.dispose(),Ee.forEach(fe=>fe.dispose()),Se.forEach(fe=>fe.dispose()),te.dispose()}},[x,c,S]),c===Ft.LOW||c===Ft.REDUCED_MOTION?a.jsxs("div",{className:"cinema-lobby-css3d-fallback",children:[a.jsxs("div",{className:"lobby-header-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(Bf,{size:14,className:"text-cyan"}),a.jsx("span",{children:"2D ADAPTIVE CINEMA LOBBY"})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,children:[a.jsx(zm,{size:14}),a.jsx("span",{children:"Switch to Traditional Grid"})]})]}),a.jsxs("div",{className:"css3d-carousel-container",children:[a.jsx("button",{className:"css3d-nav-arrow left",onClick:()=>L(-1),children:a.jsx(hc,{size:22})}),a.jsx("div",{className:"css3d-active-card-portal",children:y&&a.jsxs("div",{className:"css3d-featured-card",onClick:()=>e(y),children:[a.jsx("img",{src:cn(`/api/movies/${y.id}/poster`),alt:y.clean_title,className:"css3d-card-img"}),a.jsxs("div",{className:"css3d-card-overlay",children:[a.jsx("span",{className:"card-pill-res",children:y.resolution||"1080P"}),a.jsx("h4",{children:y.clean_title}),a.jsx("div",{className:"card-actions-quick",children:a.jsxs("button",{className:"btn-primary btn-sm",onClick:H=>{H.stopPropagation(),t(y)},children:[a.jsx(fn,{size:14,fill:"currentColor"})," Play Now"]})})]})]})}),a.jsx("button",{className:"css3d-nav-arrow right",onClick:()=>L(1),children:a.jsx(co,{size:22})})]}),a.jsx("div",{className:"css3d-reel-row",children:x.map((H,z)=>a.jsxs("div",{className:`css3d-thumb-pill ${z===f?"active":""}`,onClick:()=>p(z),children:[a.jsx("img",{src:cn(`/api/movies/${H.id}/poster`),alt:H.clean_title}),a.jsx("span",{children:H.clean_title})]},H.id))})]}):a.jsxs("div",{className:"cinema-lobby-3d-root",children:[a.jsx("div",{ref:l,className:"lobby-canvas-viewport"}),a.jsxs("div",{className:"lobby-top-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(mi,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D SPATIAL CAROUSEL"}),a.jsxs("span",{className:"badge-movie-count",children:[x.length," TITLES"]})]}),a.jsxs("div",{className:"lobby-top-controls",children:[a.jsxs("div",{className:"lobby-size-picker",title:"Adjust 3D Movie Poster Size",children:[a.jsx("span",{className:"lobby-picker-label",children:"Card Size"}),a.jsxs("div",{className:"lobby-size-btn-group",children:[a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="compact"?"active":""}`,onClick:()=>w("compact"),title:"Small / Compact posters",children:"Small"}),a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="balanced"?"active":""}`,onClick:()=>w("balanced"),title:"Medium / Balanced posters (Default)",children:"Medium"}),a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="cinematic"?"active":""}`,onClick:()=>w("cinematic"),title:"Large / Cinematic posters",children:"Large"})]})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,title:"Switch to conventional 2D Library grid",children:[a.jsx(zm,{size:14}),a.jsx("span",{children:"2D Library Grid"})]})]})]}),y&&a.jsx("div",{className:"lobby-floating-hud",children:a.jsxs("div",{className:"hud-content-panel",children:[a.jsxs("div",{className:"hud-metadata-tags",children:[a.jsx("span",{className:"hud-badge-res",children:y.resolution||"1080P"}),y.year&&a.jsx("span",{className:"hud-badge-year",children:y.year}),a.jsx("span",{className:"hud-badge-genre",children:y.genre||"Cinema"}),y.codec&&a.jsx("span",{className:"hud-badge-codec",children:y.codec})]}),a.jsx("h2",{className:"hud-movie-title",children:y.clean_title}),a.jsxs("p",{className:"hud-instructions",children:["Drag horizontally or use ",a.jsx("strong",{children:"← / →"})," to rotate • ",a.jsx("strong",{children:"Enter"})," for details • ",a.jsx("strong",{children:"Space"})," to stream"]}),a.jsxs("div",{className:"hud-actions-row",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(y),children:[a.jsx(fn,{size:16,fill:"currentColor"}),a.jsx("span",{children:"Play Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>e(y),children:[a.jsx(fo,{size:16}),a.jsx("span",{children:"Movie Details"})]}),a.jsxs("div",{className:"hud-nav-buttons",children:[a.jsx("button",{className:"hud-arrow-btn",onClick:()=>L(-1),title:"Previous Film (Left Arrow)",children:a.jsx(hc,{size:16})}),a.jsx("button",{className:"hud-arrow-btn",onClick:()=>L(1),title:"Next Film (Right Arrow)",children:a.jsx(co,{size:16})})]})]})]})})]})}const RT=["All","Action & Adventure","Anime & Animation","Horror & Suspense","Sci-Fi & Cyber","Thriller & Mystery","Cinema & Drama"];function PT({isOpen:s,onClose:e,onSelectMovie:t,onPlayMovie:r,authFetch:l}){const[c,d]=G.useState(""),[f,p]=G.useState("All"),[m,v]=G.useState([]),[M,_]=G.useState(!1),[S,b]=G.useState([]),[w,x]=G.useState(0),y=G.useRef(null);G.useEffect(()=>{if(typeof window<"u")try{const D=JSON.parse(localStorage.getItem("streamlink_search_history")||"[]");b(Array.isArray(D)?D.slice(0,6):[])}catch{}},[]);const P=D=>{if(!D||!D.trim())return;const A=D.trim(),I=[A,...S.filter(U=>U.toLowerCase()!==A.toLowerCase())].slice(0,6);b(I);try{localStorage.setItem("streamlink_search_history",JSON.stringify(I))}catch{}};return G.useEffect(()=>{s?setTimeout(()=>{var D;return(D=y.current)==null?void 0:D.focus()},80):(d(""),x(0))},[s]),G.useEffect(()=>{if(!s)return;let D=!0;_(!0);const A=new URLSearchParams;return c.trim()&&A.set("q",c.trim()),f!=="All"&&A.set("genre",f),l(`/api/movies?${A.toString()}`).then(I=>I.json()).then(I=>{D&&(v(I.movies||[]),x(0))}).catch(()=>{}).finally(()=>{D&&_(!1)}),()=>{D=!1}},[s,c,f]),G.useEffect(()=>{if(!s)return;const D=A=>{A.key==="Escape"?e():A.key==="ArrowDown"?(A.preventDefault(),x(I=>Math.min(I+1,m.length-1))):A.key==="ArrowUp"?(A.preventDefault(),x(I=>Math.max(I-1,0))):A.key==="Enter"&&m[w]&&(P(c||m[w].clean_title),t(m[w]),e())};return window.addEventListener("keydown",D),()=>window.removeEventListener("keydown",D)},[s,m,w,c]),s?a.jsx("div",{className:"dimensional-search-overlay",onClick:e,children:a.jsxs("div",{className:"dimensional-search-window",onClick:D=>D.stopPropagation(),children:[a.jsxs("div",{className:"search-bar-wrap",children:[a.jsx(ps,{size:22,className:"search-input-icon text-cyan"}),a.jsx("input",{ref:y,type:"text",className:"spatial-search-input",placeholder:"Search by title, genre, year, resolution (e.g. 4K, Annabelle)...",value:c,onChange:D=>d(D.target.value)}),c&&a.jsx("button",{className:"search-clear-btn",onClick:()=>d(""),children:a.jsx(Wi,{size:18})}),a.jsx("div",{className:"search-shortcut-pill",children:a.jsx("span",{children:"ESC to close"})})]}),a.jsx("div",{className:"search-genres-row",children:RT.map(D=>a.jsx("button",{className:`search-genre-chip ${f===D?"active":""}`,onClick:()=>p(D),children:D},D))}),S.length>0&&!c&&a.jsxs("div",{className:"search-history-row",children:[a.jsx(Gr,{size:13,className:"text-muted"}),a.jsx("span",{className:"text-dim text-xs",children:"Recent:"}),S.map((D,A)=>a.jsx("button",{className:"search-history-chip",onClick:()=>d(D),children:D},A))]}),a.jsx("div",{className:"search-results-viewport",children:M?a.jsxs("div",{className:"search-loading-state",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning personal cinema database..."})]}):m.length>0?a.jsx("div",{className:"search-cards-grid",children:m.map((D,A)=>a.jsxs("div",{className:`search-card-3d ${A===w?"focused":""}`,onClick:()=>{P(c||D.clean_title),t(D),e()},onMouseEnter:()=>x(A),children:[a.jsxs("div",{className:"search-card-poster",children:[a.jsx("img",{src:cn(`/api/movies/${D.id}/poster`),alt:D.clean_title,loading:"lazy"}),a.jsx("div",{className:"search-card-glow"})]}),a.jsxs("div",{className:"search-card-info",children:[a.jsxs("div",{className:"search-card-tags",children:[a.jsx("span",{className:"badge-pill res",children:D.resolution||"1080P"}),D.year&&a.jsx("span",{className:"badge-pill year",children:D.year}),a.jsx("span",{className:"badge-pill genre",children:D.genre||"Movie"})]}),a.jsx("h4",{className:"search-card-title",children:D.clean_title}),a.jsx("p",{className:"search-card-filename",children:D.file_name}),a.jsxs("div",{className:"search-card-play-pill",children:[a.jsx(fn,{size:12,fill:"currentColor"}),a.jsx("span",{children:"Stream"})]})]})]},D.id))}):a.jsxs("div",{className:"search-empty-state",children:[a.jsx(pi,{size:40,className:"text-dim",style:{marginBottom:"12px"}}),a.jsxs("h4",{children:['No matches found for "',c,'"']}),a.jsx("p",{children:'Check spelling or try searching for broad terms like "1080p", "4k", or clearing the genre filter.'})]})}),a.jsxs("div",{className:"search-footer-hint",children:[a.jsxs("span",{children:[a.jsx(m_,{size:12})," Press ",a.jsx("strong",{children:"Enter"})," to open details"]}),a.jsxs("span",{children:["Use ",a.jsx("strong",{children:"↑ / ↓ Arrow Keys"})," to navigate"]})]})]})}):null}function LT({activeColor:s="#8B5CF6",enabled:e=!0}){return e?a.jsxs("div",{className:"ambient-cinema-backdrop","aria-hidden":"true",children:[a.jsx("div",{className:"ambient-glow-orb orb-primary",style:{background:`radial-gradient(circle, ${s}33 0%, rgba(8, 8, 12, 0) 70%)`}}),a.jsx("div",{className:"ambient-glow-orb orb-secondary",style:{background:"radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(8, 8, 12, 0) 70%)"}})]}):null}function DT(){let e=new URLSearchParams(window.location.search).get("share");if(!e){const O=window.location.pathname.match(/\/share\/([a-zA-Z0-9_-]+)/);O&&(e=O[1])}if(e)return a.jsx(qy,{token:e});const{user:t,token:r,authFetch:l,loading:c}=Wf(),[d,f]=G.useState("home"),[p,m]=G.useState(null),[v,M]=G.useState(null),[_,S]=G.useState("D:\\Movies"),[b,w]=G.useState([]),[x,y]=G.useState(!1),[P,D]=G.useState(!1),[A,I]=G.useState(!1),[U,E]=G.useState(null),[L,H]=G.useState(()=>localStorage.getItem("streamlink_ambient_lighting")!=="false"),[z,W]=G.useState($n.currentLevel),[ie,J]=G.useState(()=>localStorage.getItem("streamlink_seen_intro")!=="true");G.useEffect(()=>$n.subscribe(O=>W(O)),[]),G.useEffect(()=>{const O=Y=>{var F;Y.key==="/"&&!["INPUT","TEXTAREA"].includes((F=document.activeElement)==null?void 0:F.tagName)&&(Y.preventDefault(),y(!0))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const j=()=>{t&&l&&l("/api/movies?sort=recent").then(O=>O.json()).then(O=>{O.movies&&w(O.movies)}).catch(()=>{})};G.useEffect(()=>{j()},[t]),G.useEffect(()=>{t&&l&&l("/api/user/profiles").then(O=>O.json()).then(O=>{if(O.profiles&&O.profiles.length>0){const Y=localStorage.getItem("streamlink_active_profile_id"),F=O.profiles.find(K=>String(K.id)===Y)||O.profiles[0];E(F)}}).catch(()=>{})},[t]),G.useEffect(()=>{(t==null?void 0:t.role)==="admin"&&l&&l("/api/admin/settings").then(O=>O.json()).then(O=>{var Y;(Y=O.settings)!=null&&Y.library_folder&&S(O.settings.library_folder)}).catch(()=>{})},[t]);const $=()=>{H(O=>{const Y=!O;return localStorage.setItem("streamlink_ambient_lighting",String(Y)),Y})},[te,q]=G.useState(typeof navigator<"u"?navigator.onLine:!0);G.useEffect(()=>{const O=()=>q(!0),Y=()=>q(!1);return window.addEventListener("online",O),window.addEventListener("offline",Y),()=>{window.removeEventListener("online",O),window.removeEventListener("offline",Y)}},[]);const ee=O=>{E(O),localStorage.setItem("streamlink_active_profile_id",String(O.id))};return c?a.jsx(Qy,{message:"Connecting to StreamLink 2.0 Media Server...",onRetry:()=>window.location.reload()}):t?ie?a.jsx(AT,{onEnter:()=>{J(!1),localStorage.setItem("streamlink_seen_intro","true"),f("cine3d")},onSkip:()=>{J(!1),localStorage.setItem("streamlink_seen_intro","true")}}):v?a.jsx(ox,{movie:v,onBack:()=>M(null),token:r,authFetch:l}):a.jsxs("div",{className:"app-shell-sidebar-layout",children:[!te&&a.jsxs("div",{className:"obsidian-offline-banner",children:[a.jsx("span",{className:"offline-badge",children:"OFFLINE"}),a.jsx(Ly,{size:14}),a.jsx("span",{children:"Windows Media Server is offline. Cached library and interface are available. Streaming will resume when reconnected."})]}),a.jsx(Jy,{}),a.jsx(LT,{enabled:L}),a.jsx(Oy,{currentView:d,setCurrentView:f,onOpenSearch:()=>y(!0),onOpenProfiles:()=>D(!0),onOpenQuality:()=>I(!0),currentProfile:U,qualityLevel:z}),a.jsxs("main",{className:"main-content-scrollable",children:[d==="home"&&a.jsx(jy,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l,onNavigateLibrary:()=>f("library"),onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="cine3d"&&a.jsx(NT,{movies:b,onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),onSwitchTo2D:()=>f("library")}),d==="library"&&a.jsx(By,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l,onOpenFolderPicker:()=>f("folder"),onNavigateCine3D:()=>f("cine3d")}),d==="folder-sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Hy,{authFetch:l}),d==="folder"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Gy,{authFetch:l,onScanSuccess:O=>{S(O),j()},onViewLibrary:()=>f("library")}),d==="sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Vy,{authFetch:l}),d==="favorites"&&a.jsx(Wy,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l}),d==="dashboard"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Xy,{authFetch:l,onOpenFolderPicker:()=>f("folder"),onOpenShareModal:()=>f("sharing")})]}),p&&a.jsx(lx,{movie:p,onClose:()=>m(null),onPlay:O=>{m(null),M(O)},onToggleFavorite:async O=>{try{const F=await(await l(`/api/user/favorites/${O}`,{method:"POST"})).json();m(K=>K?{...K,is_favorite:F.favorited?1:0}:null),j()}catch{}},onRemoveMovie:async O=>{if(window.confirm(`Remove "${O.clean_title}" from your library?

The original video file will remain untouched on your computer.`))try{await l(`/api/movies/${O.id}/remove`,{method:"POST"}),m(null),j()}catch{}},onDeleteFile:async O=>{if(window.confirm(`PERMANENT DELETION WARNING:
Are you sure you want to permanently delete "${O.file_name}" from your hard drive?

This cannot be undone.`))try{await l(`/api/movies/${O.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:O.clean_title})}),m(null),j()}catch{}},authFetch:l}),a.jsx(PT,{isOpen:x,onClose:()=>y(!1),onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l}),a.jsx(Yy,{isOpen:P,onClose:()=>D(!1),authFetch:l,currentProfile:U,onProfileChange:ee}),a.jsx(Zy,{isOpen:A,onClose:()=>I(!1),ambientEnabled:L,onToggleAmbient:$})]}):a.jsx($y,{})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(s=>{console.log("[PWA] Obsidian Cinema ServiceWorker active: ",s.scope)}).catch(s=>{console.warn("[PWA] ServiceWorker registration bypassed: ",s)})});V0.createRoot(document.getElementById("root")).render(a.jsx(F0.StrictMode,{children:a.jsx(Fy,{children:a.jsx(DT,{})})}));
