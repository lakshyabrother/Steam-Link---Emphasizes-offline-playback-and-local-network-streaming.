(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const c of l)if(c.type==="childList")for(const d of c.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&r(d)}).observe(document,{childList:!0,subtree:!0});function t(l){const c={};return l.integrity&&(c.integrity=l.integrity),l.referrerPolicy&&(c.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?c.credentials="include":l.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(l){if(l.ep)return;l.ep=!0;const c=t(l);fetch(l.href,c)}})();function Qg(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ld={exports:{}},Za={},cd={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Am;function O0(){if(Am)return Pt;Am=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),l=Symbol.for("react.profiler"),c=Symbol.for("react.provider"),d=Symbol.for("react.context"),h=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),M=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=M&&F[M]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,T={};function x(F,K,Me){this.props=F,this.context=K,this.refs=T,this.updater=Me||S}x.prototype.isReactComponent={},x.prototype.setState=function(F,K){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,K,"setState")},x.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function y(){}y.prototype=x.prototype;function C(F,K,Me){this.props=F,this.context=K,this.refs=T,this.updater=Me||S}var I=C.prototype=new y;I.constructor=C,w(I,x.prototype),I.isPureReactComponent=!0;var N=Array.isArray,L=Object.prototype.hasOwnProperty,k={current:null},E={key:!0,ref:!0,__self:!0,__source:!0};function D(F,K,Me){var X,le={},ye=null,we=null;if(K!=null)for(X in K.ref!==void 0&&(we=K.ref),K.key!==void 0&&(ye=""+K.key),K)L.call(K,X)&&!E.hasOwnProperty(X)&&(le[X]=K[X]);var Se=arguments.length-2;if(Se===1)le.children=Me;else if(1<Se){for(var Re=Array(Se),pt=0;pt<Se;pt++)Re[pt]=arguments[pt+2];le.children=Re}if(F&&F.defaultProps)for(X in Se=F.defaultProps,Se)le[X]===void 0&&(le[X]=Se[X]);return{$$typeof:s,type:F,key:ye,ref:we,props:le,_owner:k.current}}function G(F,K){return{$$typeof:s,type:F.type,key:K,ref:F.ref,props:F.props,_owner:F._owner}}function H(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function z(F){var K={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Me){return K[Me]})}var ie=/\/+/g;function J(F,K){return typeof F=="object"&&F!==null&&F.key!=null?z(""+F.key):K.toString(36)}function j(F,K,Me,X,le){var ye=typeof F;(ye==="undefined"||ye==="boolean")&&(F=null);var we=!1;if(F===null)we=!0;else switch(ye){case"string":case"number":we=!0;break;case"object":switch(F.$$typeof){case s:case e:we=!0}}if(we)return we=F,le=le(we),F=X===""?"."+J(we,0):X,N(le)?(Me="",F!=null&&(Me=F.replace(ie,"$&/")+"/"),j(le,K,Me,"",function(pt){return pt})):le!=null&&(H(le)&&(le=G(le,Me+(!le.key||we&&we.key===le.key?"":(""+le.key).replace(ie,"$&/")+"/")+F)),K.push(le)),1;if(we=0,X=X===""?".":X+":",N(F))for(var Se=0;Se<F.length;Se++){ye=F[Se];var Re=X+J(ye,Se);we+=j(ye,K,Me,Re,le)}else if(Re=_(F),typeof Re=="function")for(F=Re.call(F),Se=0;!(ye=F.next()).done;)ye=ye.value,Re=X+J(ye,Se++),we+=j(ye,K,Me,Re,le);else if(ye==="object")throw K=String(F),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return we}function $(F,K,Me){if(F==null)return F;var X=[],le=0;return j(F,X,"","",function(ye){return K.call(Me,ye,le++)}),X}function te(F){if(F._status===-1){var K=F._result;K=K(),K.then(function(Me){(F._status===0||F._status===-1)&&(F._status=1,F._result=Me)},function(Me){(F._status===0||F._status===-1)&&(F._status=2,F._result=Me)}),F._status===-1&&(F._status=0,F._result=K)}if(F._status===1)return F._result.default;throw F._result}var q={current:null},ee={transition:null},O={ReactCurrentDispatcher:q,ReactCurrentBatchConfig:ee,ReactCurrentOwner:k};function Y(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:$,forEach:function(F,K,Me){$(F,function(){K.apply(this,arguments)},Me)},count:function(F){var K=0;return $(F,function(){K++}),K},toArray:function(F){return $(F,function(K){return K})||[]},only:function(F){if(!H(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},Pt.Component=x,Pt.Fragment=t,Pt.Profiler=l,Pt.PureComponent=C,Pt.StrictMode=r,Pt.Suspense=p,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O,Pt.act=Y,Pt.cloneElement=function(F,K,Me){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var X=w({},F.props),le=F.key,ye=F.ref,we=F._owner;if(K!=null){if(K.ref!==void 0&&(ye=K.ref,we=k.current),K.key!==void 0&&(le=""+K.key),F.type&&F.type.defaultProps)var Se=F.type.defaultProps;for(Re in K)L.call(K,Re)&&!E.hasOwnProperty(Re)&&(X[Re]=K[Re]===void 0&&Se!==void 0?Se[Re]:K[Re])}var Re=arguments.length-2;if(Re===1)X.children=Me;else if(1<Re){Se=Array(Re);for(var pt=0;pt<Re;pt++)Se[pt]=arguments[pt+2];X.children=Se}return{$$typeof:s,type:F.type,key:le,ref:ye,props:X,_owner:we}},Pt.createContext=function(F){return F={$$typeof:d,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:c,_context:F},F.Consumer=F},Pt.createElement=D,Pt.createFactory=function(F){var K=D.bind(null,F);return K.type=F,K},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(F){return{$$typeof:h,render:F}},Pt.isValidElement=H,Pt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:te}},Pt.memo=function(F,K){return{$$typeof:m,type:F,compare:K===void 0?null:K}},Pt.startTransition=function(F){var K=ee.transition;ee.transition={};try{F()}finally{ee.transition=K}},Pt.unstable_act=Y,Pt.useCallback=function(F,K){return q.current.useCallback(F,K)},Pt.useContext=function(F){return q.current.useContext(F)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(F){return q.current.useDeferredValue(F)},Pt.useEffect=function(F,K){return q.current.useEffect(F,K)},Pt.useId=function(){return q.current.useId()},Pt.useImperativeHandle=function(F,K,Me){return q.current.useImperativeHandle(F,K,Me)},Pt.useInsertionEffect=function(F,K){return q.current.useInsertionEffect(F,K)},Pt.useLayoutEffect=function(F,K){return q.current.useLayoutEffect(F,K)},Pt.useMemo=function(F,K){return q.current.useMemo(F,K)},Pt.useReducer=function(F,K,Me){return q.current.useReducer(F,K,Me)},Pt.useRef=function(F){return q.current.useRef(F)},Pt.useState=function(F){return q.current.useState(F)},Pt.useSyncExternalStore=function(F,K,Me){return q.current.useSyncExternalStore(F,K,Me)},Pt.useTransition=function(){return q.current.useTransition()},Pt.version="18.3.1",Pt}var Rm;function jh(){return Rm||(Rm=1,cd.exports=O0()),cd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pm;function j0(){if(Pm)return Za;Pm=1;var s=jh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(h,p,m){var v,M={},_=null,S=null;m!==void 0&&(_=""+m),p.key!==void 0&&(_=""+p.key),p.ref!==void 0&&(S=p.ref);for(v in p)r.call(p,v)&&!c.hasOwnProperty(v)&&(M[v]=p[v]);if(h&&h.defaultProps)for(v in p=h.defaultProps,p)M[v]===void 0&&(M[v]=p[v]);return{$$typeof:e,type:h,key:_,ref:S,props:M,_owner:l.current}}return Za.Fragment=t,Za.jsx=d,Za.jsxs=d,Za}var Lm;function z0(){return Lm||(Lm=1,ld.exports=j0()),ld.exports}var a=z0(),V=jh();const B0=Qg(V);var Rl={},ud={exports:{}},Xn={},dd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dm;function H0(){return Dm||(Dm=1,(function(s){function e(ee,O){var Y=ee.length;ee.push(O);e:for(;0<Y;){var F=Y-1>>>1,K=ee[F];if(0<l(K,O))ee[F]=O,ee[Y]=K,Y=F;else break e}}function t(ee){return ee.length===0?null:ee[0]}function r(ee){if(ee.length===0)return null;var O=ee[0],Y=ee.pop();if(Y!==O){ee[0]=Y;e:for(var F=0,K=ee.length,Me=K>>>1;F<Me;){var X=2*(F+1)-1,le=ee[X],ye=X+1,we=ee[ye];if(0>l(le,Y))ye<K&&0>l(we,le)?(ee[F]=we,ee[ye]=Y,F=ye):(ee[F]=le,ee[X]=Y,F=X);else if(ye<K&&0>l(we,Y))ee[F]=we,ee[ye]=Y,F=ye;else break e}}return O}function l(ee,O){var Y=ee.sortIndex-O.sortIndex;return Y!==0?Y:ee.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var c=performance;s.unstable_now=function(){return c.now()}}else{var d=Date,h=d.now();s.unstable_now=function(){return d.now()-h}}var p=[],m=[],v=1,M=null,_=3,S=!1,w=!1,T=!1,x=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,C=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(ee){for(var O=t(m);O!==null;){if(O.callback===null)r(m);else if(O.startTime<=ee)r(m),O.sortIndex=O.expirationTime,e(p,O);else break;O=t(m)}}function N(ee){if(T=!1,I(ee),!w)if(t(p)!==null)w=!0,te(L);else{var O=t(m);O!==null&&q(N,O.startTime-ee)}}function L(ee,O){w=!1,T&&(T=!1,y(D),D=-1),S=!0;var Y=_;try{for(I(O),M=t(p);M!==null&&(!(M.expirationTime>O)||ee&&!z());){var F=M.callback;if(typeof F=="function"){M.callback=null,_=M.priorityLevel;var K=F(M.expirationTime<=O);O=s.unstable_now(),typeof K=="function"?M.callback=K:M===t(p)&&r(p),I(O)}else r(p);M=t(p)}if(M!==null)var Me=!0;else{var X=t(m);X!==null&&q(N,X.startTime-O),Me=!1}return Me}finally{M=null,_=Y,S=!1}}var k=!1,E=null,D=-1,G=5,H=-1;function z(){return!(s.unstable_now()-H<G)}function ie(){if(E!==null){var ee=s.unstable_now();H=ee;var O=!0;try{O=E(!0,ee)}finally{O?J():(k=!1,E=null)}}else k=!1}var J;if(typeof C=="function")J=function(){C(ie)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,$=j.port2;j.port1.onmessage=ie,J=function(){$.postMessage(null)}}else J=function(){x(ie,0)};function te(ee){E=ee,k||(k=!0,J())}function q(ee,O){D=x(function(){ee(s.unstable_now())},O)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(ee){ee.callback=null},s.unstable_continueExecution=function(){w||S||(w=!0,te(L))},s.unstable_forceFrameRate=function(ee){0>ee||125<ee?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<ee?Math.floor(1e3/ee):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(p)},s.unstable_next=function(ee){switch(_){case 1:case 2:case 3:var O=3;break;default:O=_}var Y=_;_=O;try{return ee()}finally{_=Y}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(ee,O){switch(ee){case 1:case 2:case 3:case 4:case 5:break;default:ee=3}var Y=_;_=ee;try{return O()}finally{_=Y}},s.unstable_scheduleCallback=function(ee,O,Y){var F=s.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?F+Y:F):Y=F,ee){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=Y+K,ee={id:v++,callback:O,priorityLevel:ee,startTime:Y,expirationTime:K,sortIndex:-1},Y>F?(ee.sortIndex=Y,e(m,ee),t(p)===null&&ee===t(m)&&(T?(y(D),D=-1):T=!0,q(N,Y-F))):(ee.sortIndex=K,e(p,ee),w||S||(w=!0,te(L))),ee},s.unstable_shouldYield=z,s.unstable_wrapCallback=function(ee){var O=_;return function(){var Y=_;_=O;try{return ee.apply(this,arguments)}finally{_=Y}}}})(hd)),hd}var Im;function G0(){return Im||(Im=1,dd.exports=H0()),dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var km;function V0(){if(km)return Xn;km=1;var s=jh(),e=G0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,l={};function c(n,i){d(n,i),d(n+"Capture",i)}function d(n,i){for(l[n]=i,n=0;n<i.length;n++)r.add(i[n])}var h=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),p=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},M={};function _(n){return p.call(M,n)?!0:p.call(v,n)?!1:m.test(n)?M[n]=!0:(v[n]=!0,!1)}function S(n,i,o,u){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return u?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,i,o,u){if(i===null||typeof i>"u"||S(n,i,o,u))return!0;if(u)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,u,f,g,A){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=u,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=g,this.removeEmptyString=A}var x={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){x[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];x[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){x[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){x[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){x[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){x[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){x[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){x[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){x[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function C(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(y,C);x[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(y,C);x[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(y,C);x[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),x.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){x[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,u){var f=x.hasOwnProperty(i)?x[i]:null;(f!==null?f.type!==0:u||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(w(i,o,f,u)&&(o=null),u||f===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,u=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,u?n.setAttributeNS(u,i,o):n.setAttribute(i,o))))}var N=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),k=Symbol.for("react.portal"),E=Symbol.for("react.fragment"),D=Symbol.for("react.strict_mode"),G=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),z=Symbol.for("react.context"),ie=Symbol.for("react.forward_ref"),J=Symbol.for("react.suspense"),j=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),te=Symbol.for("react.lazy"),q=Symbol.for("react.offscreen"),ee=Symbol.iterator;function O(n){return n===null||typeof n!="object"?null:(n=ee&&n[ee]||n["@@iterator"],typeof n=="function"?n:null)}var Y=Object.assign,F;function K(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Me=!1;function X(n,i){if(!n||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(fe){var u=fe}Reflect.construct(n,[],i)}else{try{i.call()}catch(fe){u=fe}n.call(i.prototype)}else{try{throw Error()}catch(fe){u=fe}n()}}catch(fe){if(fe&&u&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),g=u.stack.split(`
`),A=f.length-1,B=g.length-1;1<=A&&0<=B&&f[A]!==g[B];)B--;for(;1<=A&&0<=B;A--,B--)if(f[A]!==g[B]){if(A!==1||B!==1)do if(A--,B--,0>B||f[A]!==g[B]){var Q=`
`+f[A].replace(" at new "," at ");return n.displayName&&Q.includes("<anonymous>")&&(Q=Q.replace("<anonymous>",n.displayName)),Q}while(1<=A&&0<=B);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?K(n):""}function le(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=X(n.type,!1),n;case 11:return n=X(n.type.render,!1),n;case 1:return n=X(n.type,!0),n;default:return""}}function ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case E:return"Fragment";case k:return"Portal";case G:return"Profiler";case D:return"StrictMode";case J:return"Suspense";case j:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case z:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case ie:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return i=n.displayName||null,i!==null?i:ye(n.type)||"Memo";case te:i=n._payload,n=n._init;try{return ye(n(i))}catch{}}return null}function we(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ye(i);case 8:return i===D?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Se(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Re(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function pt(n){var i=Re(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),u=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(A){u=""+A,g.call(this,A)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(A){u=""+A},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Ye(n){n._valueTracker||(n._valueTracker=pt(n))}function _t(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),u="";return n&&(u=Re(n)?n.checked?"true":"false":n.value),n=u,n!==o?(i.setValue(n),!0):!1}function dt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ct(n,i){var o=i.checked;return Y({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function je(n,i){var o=i.defaultValue==null?"":i.defaultValue,u=i.checked!=null?i.checked:i.defaultChecked;o=Se(i.value!=null?i.value:o),n._wrapperState={initialChecked:u,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function bt(n,i){ht(n,i);var o=Se(i.value),u=i.type;if(o!=null)u==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(u==="submit"||u==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Te(n,i.type,o):i.hasOwnProperty("defaultValue")&&Te(n,i.type,Se(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function he(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var u=i.type;if(!(u!=="submit"&&u!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Te(n,i,o){(i!=="number"||dt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ee=Array.isArray;function Mt(n,i,o,u){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&u&&(n[o].defaultSelected=!0)}else{for(o=""+Se(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,u&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function At(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return Y({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Le(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ee(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Se(o)}}function U(n,i){var o=Se(i.value),u=Se(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),u!=null&&(n.defaultValue=""+u)}function Be(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ot(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ft(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ot(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Ae,Wt=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,u,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,u,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Ae=Ae||document.createElement("div"),Ae.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Ae.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function rt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ve={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},P=["Webkit","ms","Moz","O"];Object.keys(ve).forEach(function(n){P.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ve[i]=ve[n]})});function b(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ve.hasOwnProperty(n)&&ve[n]?(""+i).trim():i+"px"}function re(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var u=o.indexOf("--")===0,f=b(o,i[o],u);o==="float"&&(o="cssFloat"),u?n.setProperty(o,f):n[o]=f}}var be=Y({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ge(n,i){if(i){if(be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Pe(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ue=null;function pe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var xe=null,ke=null,W=null;function _e(n){if(n=Ua(n)){if(typeof xe!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Wo(i),xe(n.stateNode,n.type,i))}}function me(n){ke?W?W.push(n):W=[n]:ke=n}function He(){if(ke){var n=ke,i=W;if(W=ke=null,_e(n),i)for(n=0;n<i.length;n++)_e(i[n])}}function Fe(n,i){return n(i)}function ze(){}var st=!1;function wt(n,i,o){if(st)return n(i,o);st=!0;try{return Fe(n,i,o)}finally{st=!1,(ke!==null||W!==null)&&(ze(),He())}}function De(n,i){var o=n.stateNode;if(o===null)return null;var u=Wo(o);if(u===null)return null;o=u[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(n=n.type,u=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!u;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ut=!1;if(h)try{var yt={};Object.defineProperty(yt,"passive",{get:function(){ut=!0}}),window.addEventListener("test",yt,yt),window.removeEventListener("test",yt,yt)}catch{ut=!1}function Xe(n,i,o,u,f,g,A,B,Q){var fe=Array.prototype.slice.call(arguments,3);try{i.apply(o,fe)}catch(Ne){this.onError(Ne)}}var Dt=!1,en=null,Qn=!1,ys=null,ga={onError:function(n){Dt=!0,en=n}};function Lc(n,i,o,u,f,g,A,B,Q){Dt=!1,en=null,Xe.apply(ga,arguments)}function To(n,i,o,u,f,g,A,B,Q){if(Lc.apply(this,arguments),Dt){if(Dt){var fe=en;Dt=!1,en=null}else throw Error(t(198));Qn||(Qn=!0,ys=fe)}}function Pi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Li(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function Ss(n){if(Pi(n)!==n)throw Error(t(188))}function Co(n){var i=n.alternate;if(!i){if(i=Pi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,u=i;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(u=f.return,u!==null){o=u;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return Ss(f),n;if(g===u)return Ss(f),i;g=g.sibling}throw Error(t(188))}if(o.return!==u.return)o=f,u=g;else{for(var A=!1,B=f.child;B;){if(B===o){A=!0,o=f,u=g;break}if(B===u){A=!0,u=f,o=g;break}B=B.sibling}if(!A){for(B=g.child;B;){if(B===o){A=!0,o=g,u=f;break}if(B===u){A=!0,u=g,o=f;break}B=B.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==u)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function xa(n){return n=Co(n),n!==null?qr(n):null}function qr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=qr(n);if(i!==null)return i;n=n.sibling}return null}var va=e.unstable_scheduleCallback,_a=e.unstable_cancelCallback,Yr=e.unstable_shouldYield,Dc=e.unstable_requestPaint,Zt=e.unstable_now,No=e.unstable_getCurrentPriorityLevel,ya=e.unstable_ImmediatePriority,Ao=e.unstable_UserBlockingPriority,Ms=e.unstable_NormalPriority,Ro=e.unstable_LowPriority,R=e.unstable_IdlePriority,Z=null,ce=null;function ae(n){if(ce&&typeof ce.onCommitFiberRoot=="function")try{ce.onCommitFiberRoot(Z,n,void 0,(n.current.flags&128)===128)}catch{}}var se=Math.clz32?Math.clz32:Ge,Ve=Math.log,Ze=Math.LN2;function Ge(n){return n>>>=0,n===0?32:31-(Ve(n)/Ze|0)|0}var We=64,Je=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ct(n,i){var o=n.pendingLanes;if(o===0)return 0;var u=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var B=A&~f;B!==0?u=xt(B):(g&=A,g!==0&&(u=xt(g)))}else A=o&~f,A!==0?u=xt(A):g!==0&&(u=xt(g));if(u===0)return 0;if(i!==0&&i!==u&&(i&f)===0&&(f=u&-u,g=i&-i,f>=g||f===16&&(g&4194240)!==0))return i;if((u&4)!==0&&(u|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=u;0<i;)o=31-se(i),f=1<<o,u|=n[o],i&=~f;return u}function et(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Rt(n,i){for(var o=n.suspendedLanes,u=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-se(g),B=1<<A,Q=f[A];Q===-1?((B&o)===0||(B&u)!==0)&&(f[A]=et(B,i)):Q<=i&&(n.expiredLanes|=B),g&=~B}}function Qt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Gt(){var n=We;return We<<=1,(We&4194240)===0&&(We=64),n}function Ht(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function sn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-se(i),n[i]=o}function tt(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var u=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-se(o),g=1<<f;i[f]=0,u[f]=-1,n[f]=-1,o&=~g}}function fn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var u=31-se(o),f=1<<u;f&i|n[u]&i&&(n[u]|=i),o&=~f}}var at=0;function Di(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var pn,mr,xi,Ii,Lt,ln=!1,Rn=[],jt=null,Xt=null,_n=null,gr=new Map,Sa=new Map,xr=[],av="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function hf(n,i){switch(n){case"focusin":case"focusout":jt=null;break;case"dragenter":case"dragleave":Xt=null;break;case"mouseover":case"mouseout":_n=null;break;case"pointerover":case"pointerout":gr.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Sa.delete(i.pointerId)}}function Ma(n,i,o,u,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:i,domEventName:o,eventSystemFlags:u,nativeEvent:g,targetContainers:[f]},i!==null&&(i=Ua(i),i!==null&&mr(i)),n):(n.eventSystemFlags|=u,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function ov(n,i,o,u,f){switch(i){case"focusin":return jt=Ma(jt,n,i,o,u,f),!0;case"dragenter":return Xt=Ma(Xt,n,i,o,u,f),!0;case"mouseover":return _n=Ma(_n,n,i,o,u,f),!0;case"pointerover":var g=f.pointerId;return gr.set(g,Ma(gr.get(g)||null,n,i,o,u,f)),!0;case"gotpointercapture":return g=f.pointerId,Sa.set(g,Ma(Sa.get(g)||null,n,i,o,u,f)),!0}return!1}function ff(n){var i=Kr(n.target);if(i!==null){var o=Pi(i);if(o!==null){if(i=o.tag,i===13){if(i=Li(o),i!==null){n.blockedOn=i,Lt(n.priority,function(){xi(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Po(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=kc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var u=new o.constructor(o.type,o);Ue=u,o.target.dispatchEvent(u),Ue=null}else return i=Ua(o),i!==null&&mr(i),n.blockedOn=o,!1;i.shift()}return!0}function pf(n,i,o){Po(n)&&o.delete(i)}function lv(){ln=!1,jt!==null&&Po(jt)&&(jt=null),Xt!==null&&Po(Xt)&&(Xt=null),_n!==null&&Po(_n)&&(_n=null),gr.forEach(pf),Sa.forEach(pf)}function Ea(n,i){n.blockedOn===i&&(n.blockedOn=null,ln||(ln=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,lv)))}function wa(n){function i(f){return Ea(f,n)}if(0<Rn.length){Ea(Rn[0],n);for(var o=1;o<Rn.length;o++){var u=Rn[o];u.blockedOn===n&&(u.blockedOn=null)}}for(jt!==null&&Ea(jt,n),Xt!==null&&Ea(Xt,n),_n!==null&&Ea(_n,n),gr.forEach(i),Sa.forEach(i),o=0;o<xr.length;o++)u=xr[o],u.blockedOn===n&&(u.blockedOn=null);for(;0<xr.length&&(o=xr[0],o.blockedOn===null);)ff(o),o.blockedOn===null&&xr.shift()}var Es=N.ReactCurrentBatchConfig,Lo=!0;function cv(n,i,o,u){var f=at,g=Es.transition;Es.transition=null;try{at=1,Ic(n,i,o,u)}finally{at=f,Es.transition=g}}function uv(n,i,o,u){var f=at,g=Es.transition;Es.transition=null;try{at=4,Ic(n,i,o,u)}finally{at=f,Es.transition=g}}function Ic(n,i,o,u){if(Lo){var f=kc(n,i,o,u);if(f===null)Qc(n,i,u,Do,o),hf(n,u);else if(ov(f,n,i,o,u))u.stopPropagation();else if(hf(n,u),i&4&&-1<av.indexOf(n)){for(;f!==null;){var g=Ua(f);if(g!==null&&pn(g),g=kc(n,i,o,u),g===null&&Qc(n,i,u,Do,o),g===f)break;f=g}f!==null&&u.stopPropagation()}else Qc(n,i,u,null,o)}}var Do=null;function kc(n,i,o,u){if(Do=null,n=pe(u),n=Kr(n),n!==null)if(i=Pi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Li(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Do=n,null}function mf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(No()){case ya:return 1;case Ao:return 4;case Ms:case Ro:return 16;case R:return 536870912;default:return 16}default:return 16}}var vr=null,Uc=null,Io=null;function gf(){if(Io)return Io;var n,i=Uc,o=i.length,u,f="value"in vr?vr.value:vr.textContent,g=f.length;for(n=0;n<o&&i[n]===f[n];n++);var A=o-n;for(u=1;u<=A&&i[o-u]===f[g-u];u++);return Io=f.slice(n,1<u?1-u:void 0)}function ko(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function Uo(){return!0}function xf(){return!1}function Jn(n){function i(o,u,f,g,A){this._reactName=o,this._targetInst=f,this.type=u,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var B in n)n.hasOwnProperty(B)&&(o=n[B],this[B]=o?o(g):g[B]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?Uo:xf,this.isPropagationStopped=xf,this}return Y(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Uo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Uo)},persist:function(){},isPersistent:Uo}),i}var ws={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Fc=Jn(ws),ba=Y({},ws,{view:0,detail:0}),dv=Jn(ba),Oc,jc,Ta,Fo=Y({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Bc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ta&&(Ta&&n.type==="mousemove"?(Oc=n.screenX-Ta.screenX,jc=n.screenY-Ta.screenY):jc=Oc=0,Ta=n),Oc)},movementY:function(n){return"movementY"in n?n.movementY:jc}}),vf=Jn(Fo),hv=Y({},Fo,{dataTransfer:0}),fv=Jn(hv),pv=Y({},ba,{relatedTarget:0}),zc=Jn(pv),mv=Y({},ws,{animationName:0,elapsedTime:0,pseudoElement:0}),gv=Jn(mv),xv=Y({},ws,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),vv=Jn(xv),_v=Y({},ws,{data:0}),_f=Jn(_v),yv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Sv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Mv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ev(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Mv[n])?!!i[n]:!1}function Bc(){return Ev}var wv=Y({},ba,{key:function(n){if(n.key){var i=yv[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Sv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Bc,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),bv=Jn(wv),Tv=Y({},Fo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=Jn(Tv),Cv=Y({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Bc}),Nv=Jn(Cv),Av=Y({},ws,{propertyName:0,elapsedTime:0,pseudoElement:0}),Rv=Jn(Av),Pv=Y({},Fo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Lv=Jn(Pv),Dv=[9,13,27,32],Hc=h&&"CompositionEvent"in window,Ca=null;h&&"documentMode"in document&&(Ca=document.documentMode);var Iv=h&&"TextEvent"in window&&!Ca,Sf=h&&(!Hc||Ca&&8<Ca&&11>=Ca),Mf=" ",Ef=!1;function wf(n,i){switch(n){case"keyup":return Dv.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function bf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var bs=!1;function kv(n,i){switch(n){case"compositionend":return bf(i);case"keypress":return i.which!==32?null:(Ef=!0,Mf);case"textInput":return n=i.data,n===Mf&&Ef?null:n;default:return null}}function Uv(n,i){if(bs)return n==="compositionend"||!Hc&&wf(n,i)?(n=gf(),Io=Uc=vr=null,bs=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sf&&i.locale!=="ko"?null:i.data;default:return null}}var Fv={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Tf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Fv[n.type]:i==="textarea"}function Cf(n,i,o,u){me(u),i=Ho(i,"onChange"),0<i.length&&(o=new Fc("onChange","change",null,o,u),n.push({event:o,listeners:i}))}var Na=null,Aa=null;function Ov(n){Wf(n,0)}function Oo(n){var i=Rs(n);if(_t(i))return n}function jv(n,i){if(n==="change")return i}var Nf=!1;if(h){var Gc;if(h){var Vc="oninput"in document;if(!Vc){var Af=document.createElement("div");Af.setAttribute("oninput","return;"),Vc=typeof Af.oninput=="function"}Gc=Vc}else Gc=!1;Nf=Gc&&(!document.documentMode||9<document.documentMode)}function Rf(){Na&&(Na.detachEvent("onpropertychange",Pf),Aa=Na=null)}function Pf(n){if(n.propertyName==="value"&&Oo(Aa)){var i=[];Cf(i,Aa,n,pe(n)),wt(Ov,i)}}function zv(n,i,o){n==="focusin"?(Rf(),Na=i,Aa=o,Na.attachEvent("onpropertychange",Pf)):n==="focusout"&&Rf()}function Bv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Oo(Aa)}function Hv(n,i){if(n==="click")return Oo(i)}function Gv(n,i){if(n==="input"||n==="change")return Oo(i)}function Vv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var vi=typeof Object.is=="function"?Object.is:Vv;function Ra(n,i){if(vi(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),u=Object.keys(i);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var f=o[u];if(!p.call(i,f)||!vi(n[f],i[f]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,i){var o=Lf(n);n=0;for(var u;o;){if(o.nodeType===3){if(u=n+o.textContent.length,n<=i&&u>=i)return{node:o,offset:i-n};n=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lf(o)}}function If(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?If(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function kf(){for(var n=window,i=dt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=dt(n.document)}return i}function Wc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function Wv(n){var i=kf(),o=n.focusedElem,u=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&If(o.ownerDocument.documentElement,o)){if(u!==null&&Wc(o)){if(i=u.start,n=u.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(u.start,f);u=u.end===void 0?g:Math.min(u.end,f),!n.extend&&g>u&&(f=u,u=g,g=f),f=Df(o,g);var A=Df(o,u);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),g>u?(n.addRange(i),n.extend(A.node,A.offset)):(i.setEnd(A.node,A.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var Xv=h&&"documentMode"in document&&11>=document.documentMode,Ts=null,Xc=null,Pa=null,$c=!1;function Uf(n,i,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;$c||Ts==null||Ts!==dt(u)||(u=Ts,"selectionStart"in u&&Wc(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Pa&&Ra(Pa,u)||(Pa=u,u=Ho(Xc,"onSelect"),0<u.length&&(i=new Fc("onSelect","select",null,i,o),n.push({event:i,listeners:u}),i.target=Ts)))}function jo(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var Cs={animationend:jo("Animation","AnimationEnd"),animationiteration:jo("Animation","AnimationIteration"),animationstart:jo("Animation","AnimationStart"),transitionend:jo("Transition","TransitionEnd")},qc={},Ff={};h&&(Ff=document.createElement("div").style,"AnimationEvent"in window||(delete Cs.animationend.animation,delete Cs.animationiteration.animation,delete Cs.animationstart.animation),"TransitionEvent"in window||delete Cs.transitionend.transition);function zo(n){if(qc[n])return qc[n];if(!Cs[n])return n;var i=Cs[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Ff)return qc[n]=i[o];return n}var Of=zo("animationend"),jf=zo("animationiteration"),zf=zo("animationstart"),Bf=zo("transitionend"),Hf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(n,i){Hf.set(n,i),c(i,[n])}for(var Yc=0;Yc<Gf.length;Yc++){var Kc=Gf[Yc],$v=Kc.toLowerCase(),qv=Kc[0].toUpperCase()+Kc.slice(1);_r($v,"on"+qv)}_r(Of,"onAnimationEnd"),_r(jf,"onAnimationIteration"),_r(zf,"onAnimationStart"),_r("dblclick","onDoubleClick"),_r("focusin","onFocus"),_r("focusout","onBlur"),_r(Bf,"onTransitionEnd"),d("onMouseEnter",["mouseout","mouseover"]),d("onMouseLeave",["mouseout","mouseover"]),d("onPointerEnter",["pointerout","pointerover"]),d("onPointerLeave",["pointerout","pointerover"]),c("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),c("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),c("onBeforeInput",["compositionend","keypress","textInput","paste"]),c("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),c("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Yv=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Vf(n,i,o){var u=n.type||"unknown-event";n.currentTarget=o,To(u,i,void 0,n),n.currentTarget=null}function Wf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var u=n[o],f=u.event;u=u.listeners;e:{var g=void 0;if(i)for(var A=u.length-1;0<=A;A--){var B=u[A],Q=B.instance,fe=B.currentTarget;if(B=B.listener,Q!==g&&f.isPropagationStopped())break e;Vf(f,B,fe),g=Q}else for(A=0;A<u.length;A++){if(B=u[A],Q=B.instance,fe=B.currentTarget,B=B.listener,Q!==g&&f.isPropagationStopped())break e;Vf(f,B,fe),g=Q}}}if(Qn)throw n=ys,Qn=!1,ys=null,n}function Yt(n,i){var o=i[ru];o===void 0&&(o=i[ru]=new Set);var u=n+"__bubble";o.has(u)||(Xf(i,n,2,!1),o.add(u))}function Zc(n,i,o){var u=0;i&&(u|=4),Xf(o,n,u,i)}var Bo="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[Bo]){n[Bo]=!0,r.forEach(function(o){o!=="selectionchange"&&(Yv.has(o)||Zc(o,!1,n),Zc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[Bo]||(i[Bo]=!0,Zc("selectionchange",!1,i))}}function Xf(n,i,o,u){switch(mf(i)){case 1:var f=cv;break;case 4:f=uv;break;default:f=Ic}o=f.bind(null,i,o,n),f=void 0,!ut||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),u?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function Qc(n,i,o,u,f){var g=u;if((i&1)===0&&(i&2)===0&&u!==null)e:for(;;){if(u===null)return;var A=u.tag;if(A===3||A===4){var B=u.stateNode.containerInfo;if(B===f||B.nodeType===8&&B.parentNode===f)break;if(A===4)for(A=u.return;A!==null;){var Q=A.tag;if((Q===3||Q===4)&&(Q=A.stateNode.containerInfo,Q===f||Q.nodeType===8&&Q.parentNode===f))return;A=A.return}for(;B!==null;){if(A=Kr(B),A===null)return;if(Q=A.tag,Q===5||Q===6){u=g=A;continue e}B=B.parentNode}}u=u.return}wt(function(){var fe=g,Ne=pe(o),Ie=[];e:{var Ce=Hf.get(n);if(Ce!==void 0){var Ke=Fc,nt=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":Ke=bv;break;case"focusin":nt="focus",Ke=zc;break;case"focusout":nt="blur",Ke=zc;break;case"beforeblur":case"afterblur":Ke=zc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ke=vf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ke=fv;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ke=Nv;break;case Of:case jf:case zf:Ke=gv;break;case Bf:Ke=Rv;break;case"scroll":Ke=dv;break;case"wheel":Ke=Lv;break;case"copy":case"cut":case"paste":Ke=vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ke=yf}var it=(i&4)!==0,cn=!it&&n==="scroll",oe=it?Ce!==null?Ce+"Capture":null:Ce;it=[];for(var ne=fe,ue;ne!==null;){ue=ne;var Oe=ue.stateNode;if(ue.tag===5&&Oe!==null&&(ue=Oe,oe!==null&&(Oe=De(ne,oe),Oe!=null&&it.push(Ia(ne,Oe,ue)))),cn)break;ne=ne.return}0<it.length&&(Ce=new Ke(Ce,nt,null,o,Ne),Ie.push({event:Ce,listeners:it}))}}if((i&7)===0){e:{if(Ce=n==="mouseover"||n==="pointerover",Ke=n==="mouseout"||n==="pointerout",Ce&&o!==Ue&&(nt=o.relatedTarget||o.fromElement)&&(Kr(nt)||nt[Zi]))break e;if((Ke||Ce)&&(Ce=Ne.window===Ne?Ne:(Ce=Ne.ownerDocument)?Ce.defaultView||Ce.parentWindow:window,Ke?(nt=o.relatedTarget||o.toElement,Ke=fe,nt=nt?Kr(nt):null,nt!==null&&(cn=Pi(nt),nt!==cn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(Ke=null,nt=fe),Ke!==nt)){if(it=vf,Oe="onMouseLeave",oe="onMouseEnter",ne="mouse",(n==="pointerout"||n==="pointerover")&&(it=yf,Oe="onPointerLeave",oe="onPointerEnter",ne="pointer"),cn=Ke==null?Ce:Rs(Ke),ue=nt==null?Ce:Rs(nt),Ce=new it(Oe,ne+"leave",Ke,o,Ne),Ce.target=cn,Ce.relatedTarget=ue,Oe=null,Kr(Ne)===fe&&(it=new it(oe,ne+"enter",nt,o,Ne),it.target=ue,it.relatedTarget=cn,Oe=it),cn=Oe,Ke&&nt)t:{for(it=Ke,oe=nt,ne=0,ue=it;ue;ue=Ns(ue))ne++;for(ue=0,Oe=oe;Oe;Oe=Ns(Oe))ue++;for(;0<ne-ue;)it=Ns(it),ne--;for(;0<ue-ne;)oe=Ns(oe),ue--;for(;ne--;){if(it===oe||oe!==null&&it===oe.alternate)break t;it=Ns(it),oe=Ns(oe)}it=null}else it=null;Ke!==null&&$f(Ie,Ce,Ke,it,!1),nt!==null&&cn!==null&&$f(Ie,cn,nt,it,!0)}}e:{if(Ce=fe?Rs(fe):window,Ke=Ce.nodeName&&Ce.nodeName.toLowerCase(),Ke==="select"||Ke==="input"&&Ce.type==="file")var lt=jv;else if(Tf(Ce))if(Nf)lt=Gv;else{lt=Bv;var mt=zv}else(Ke=Ce.nodeName)&&Ke.toLowerCase()==="input"&&(Ce.type==="checkbox"||Ce.type==="radio")&&(lt=Hv);if(lt&&(lt=lt(n,fe))){Cf(Ie,lt,o,Ne);break e}mt&&mt(n,Ce,fe),n==="focusout"&&(mt=Ce._wrapperState)&&mt.controlled&&Ce.type==="number"&&Te(Ce,"number",Ce.value)}switch(mt=fe?Rs(fe):window,n){case"focusin":(Tf(mt)||mt.contentEditable==="true")&&(Ts=mt,Xc=fe,Pa=null);break;case"focusout":Pa=Xc=Ts=null;break;case"mousedown":$c=!0;break;case"contextmenu":case"mouseup":case"dragend":$c=!1,Uf(Ie,o,Ne);break;case"selectionchange":if(Xv)break;case"keydown":case"keyup":Uf(Ie,o,Ne)}var gt;if(Hc)e:{switch(n){case"compositionstart":var St="onCompositionStart";break e;case"compositionend":St="onCompositionEnd";break e;case"compositionupdate":St="onCompositionUpdate";break e}St=void 0}else bs?wf(n,o)&&(St="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(St="onCompositionStart");St&&(Sf&&o.locale!=="ko"&&(bs||St!=="onCompositionStart"?St==="onCompositionEnd"&&bs&&(gt=gf()):(vr=Ne,Uc="value"in vr?vr.value:vr.textContent,bs=!0)),mt=Ho(fe,St),0<mt.length&&(St=new _f(St,n,null,o,Ne),Ie.push({event:St,listeners:mt}),gt?St.data=gt:(gt=bf(o),gt!==null&&(St.data=gt)))),(gt=Iv?kv(n,o):Uv(n,o))&&(fe=Ho(fe,"onBeforeInput"),0<fe.length&&(Ne=new _f("onBeforeInput","beforeinput",null,o,Ne),Ie.push({event:Ne,listeners:fe}),Ne.data=gt))}Wf(Ie,i)})}function Ia(n,i,o){return{instance:n,listener:i,currentTarget:o}}function Ho(n,i){for(var o=i+"Capture",u=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=De(n,o),g!=null&&u.unshift(Ia(n,g,f)),g=De(n,i),g!=null&&u.push(Ia(n,g,f))),n=n.return}return u}function Ns(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function $f(n,i,o,u,f){for(var g=i._reactName,A=[];o!==null&&o!==u;){var B=o,Q=B.alternate,fe=B.stateNode;if(Q!==null&&Q===u)break;B.tag===5&&fe!==null&&(B=fe,f?(Q=De(o,g),Q!=null&&A.unshift(Ia(o,Q,B))):f||(Q=De(o,g),Q!=null&&A.push(Ia(o,Q,B)))),o=o.return}A.length!==0&&n.push({event:i,listeners:A})}var Kv=/\r\n?/g,Zv=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(Kv,`
`).replace(Zv,"")}function Go(n,i,o){if(i=qf(i),qf(n)!==i&&o)throw Error(t(425))}function Vo(){}var Jc=null,eu=null;function tu(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var nu=typeof setTimeout=="function"?setTimeout:void 0,Qv=typeof clearTimeout=="function"?clearTimeout:void 0,Yf=typeof Promise=="function"?Promise:void 0,Jv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yf<"u"?function(n){return Yf.resolve(null).then(n).catch(e0)}:nu;function e0(n){setTimeout(function(){throw n})}function iu(n,i){var o=i,u=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(u===0){n.removeChild(f),wa(i);return}u--}else o!=="$"&&o!=="$?"&&o!=="$!"||u++;o=f}while(o);wa(i)}function yr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Kf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var As=Math.random().toString(36).slice(2),ki="__reactFiber$"+As,ka="__reactProps$"+As,Zi="__reactContainer$"+As,ru="__reactEvents$"+As,t0="__reactListeners$"+As,n0="__reactHandles$"+As;function Kr(n){var i=n[ki];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Zi]||o[ki]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Kf(n);n!==null;){if(o=n[ki])return o;n=Kf(n)}return i}n=o,o=n.parentNode}return null}function Ua(n){return n=n[ki]||n[Zi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Rs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Wo(n){return n[ka]||null}var su=[],Ps=-1;function Sr(n){return{current:n}}function Kt(n){0>Ps||(n.current=su[Ps],su[Ps]=null,Ps--)}function $t(n,i){Ps++,su[Ps]=n.current,n.current=i}var Mr={},Pn=Sr(Mr),Bn=Sr(!1),Zr=Mr;function Ls(n,i){var o=n.type.contextTypes;if(!o)return Mr;var u=n.stateNode;if(u&&u.__reactInternalMemoizedUnmaskedChildContext===i)return u.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=i[g];return u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Hn(n){return n=n.childContextTypes,n!=null}function Xo(){Kt(Bn),Kt(Pn)}function Zf(n,i,o){if(Pn.current!==Mr)throw Error(t(168));$t(Pn,i),$t(Bn,o)}function Qf(n,i,o){var u=n.stateNode;if(i=i.childContextTypes,typeof u.getChildContext!="function")return o;u=u.getChildContext();for(var f in u)if(!(f in i))throw Error(t(108,we(n)||"Unknown",f));return Y({},o,u)}function $o(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Mr,Zr=Pn.current,$t(Pn,n),$t(Bn,Bn.current),!0}function Jf(n,i,o){var u=n.stateNode;if(!u)throw Error(t(169));o?(n=Qf(n,i,Zr),u.__reactInternalMemoizedMergedChildContext=n,Kt(Bn),Kt(Pn),$t(Pn,n)):Kt(Bn),$t(Bn,o)}var Qi=null,qo=!1,au=!1;function ep(n){Qi===null?Qi=[n]:Qi.push(n)}function i0(n){qo=!0,ep(n)}function Er(){if(!au&&Qi!==null){au=!0;var n=0,i=at;try{var o=Qi;for(at=1;n<o.length;n++){var u=o[n];do u=u(!0);while(u!==null)}Qi=null,qo=!1}catch(f){throw Qi!==null&&(Qi=Qi.slice(n+1)),va(ya,Er),f}finally{at=i,au=!1}}return null}var Ds=[],Is=0,Yo=null,Ko=0,li=[],ci=0,Qr=null,Ji=1,er="";function Jr(n,i){Ds[Is++]=Ko,Ds[Is++]=Yo,Yo=n,Ko=i}function tp(n,i,o){li[ci++]=Ji,li[ci++]=er,li[ci++]=Qr,Qr=n;var u=Ji;n=er;var f=32-se(u)-1;u&=~(1<<f),o+=1;var g=32-se(i)+f;if(30<g){var A=f-f%5;g=(u&(1<<A)-1).toString(32),u>>=A,f-=A,Ji=1<<32-se(i)+f|o<<f|u,er=g+n}else Ji=1<<g|o<<f|u,er=n}function ou(n){n.return!==null&&(Jr(n,1),tp(n,1,0))}function lu(n){for(;n===Yo;)Yo=Ds[--Is],Ds[Is]=null,Ko=Ds[--Is],Ds[Is]=null;for(;n===Qr;)Qr=li[--ci],li[ci]=null,er=li[--ci],li[ci]=null,Ji=li[--ci],li[ci]=null}var ei=null,ti=null,Jt=!1,_i=null;function np(n,i){var o=fi(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ip(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=yr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Qr!==null?{id:Ji,overflow:er}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=fi(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function cu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function uu(n){if(Jt){var i=ti;if(i){var o=i;if(!ip(n,i)){if(cu(n))throw Error(t(418));i=yr(o.nextSibling);var u=ei;i&&ip(n,i)?np(u,o):(n.flags=n.flags&-4097|2,Jt=!1,ei=n)}}else{if(cu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Jt=!1,ei=n}}}function rp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function Zo(n){if(n!==ei)return!1;if(!Jt)return rp(n),Jt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!tu(n.type,n.memoizedProps)),i&&(i=ti)){if(cu(n))throw sp(),Error(t(418));for(;i;)np(n,i),i=yr(i.nextSibling)}if(rp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){ti=yr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?yr(n.stateNode.nextSibling):null;return!0}function sp(){for(var n=ti;n;)n=yr(n.nextSibling)}function ks(){ti=ei=null,Jt=!1}function du(n){_i===null?_i=[n]:_i.push(n)}var r0=N.ReactCurrentBatchConfig;function Fa(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var u=o.stateNode}if(!u)throw Error(t(147,n));var f=u,g=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===g?i.ref:(i=function(A){var B=f.refs;A===null?delete B[g]:B[g]=A},i._stringRef=g,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Qo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function ap(n){var i=n._init;return i(n._payload)}function op(n){function i(oe,ne){if(n){var ue=oe.deletions;ue===null?(oe.deletions=[ne],oe.flags|=16):ue.push(ne)}}function o(oe,ne){if(!n)return null;for(;ne!==null;)i(oe,ne),ne=ne.sibling;return null}function u(oe,ne){for(oe=new Map;ne!==null;)ne.key!==null?oe.set(ne.key,ne):oe.set(ne.index,ne),ne=ne.sibling;return oe}function f(oe,ne){return oe=Pr(oe,ne),oe.index=0,oe.sibling=null,oe}function g(oe,ne,ue){return oe.index=ue,n?(ue=oe.alternate,ue!==null?(ue=ue.index,ue<ne?(oe.flags|=2,ne):ue):(oe.flags|=2,ne)):(oe.flags|=1048576,ne)}function A(oe){return n&&oe.alternate===null&&(oe.flags|=2),oe}function B(oe,ne,ue,Oe){return ne===null||ne.tag!==6?(ne=nd(ue,oe.mode,Oe),ne.return=oe,ne):(ne=f(ne,ue),ne.return=oe,ne)}function Q(oe,ne,ue,Oe){var lt=ue.type;return lt===E?Ne(oe,ne,ue.props.children,Oe,ue.key):ne!==null&&(ne.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===te&&ap(lt)===ne.type)?(Oe=f(ne,ue.props),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,Oe):(Oe=Ml(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,Oe)}function fe(oe,ne,ue,Oe){return ne===null||ne.tag!==4||ne.stateNode.containerInfo!==ue.containerInfo||ne.stateNode.implementation!==ue.implementation?(ne=id(ue,oe.mode,Oe),ne.return=oe,ne):(ne=f(ne,ue.children||[]),ne.return=oe,ne)}function Ne(oe,ne,ue,Oe,lt){return ne===null||ne.tag!==7?(ne=os(ue,oe.mode,Oe,lt),ne.return=oe,ne):(ne=f(ne,ue),ne.return=oe,ne)}function Ie(oe,ne,ue){if(typeof ne=="string"&&ne!==""||typeof ne=="number")return ne=nd(""+ne,oe.mode,ue),ne.return=oe,ne;if(typeof ne=="object"&&ne!==null){switch(ne.$$typeof){case L:return ue=Ml(ne.type,ne.key,ne.props,null,oe.mode,ue),ue.ref=Fa(oe,null,ne),ue.return=oe,ue;case k:return ne=id(ne,oe.mode,ue),ne.return=oe,ne;case te:var Oe=ne._init;return Ie(oe,Oe(ne._payload),ue)}if(Ee(ne)||O(ne))return ne=os(ne,oe.mode,ue,null),ne.return=oe,ne;Qo(oe,ne)}return null}function Ce(oe,ne,ue,Oe){var lt=ne!==null?ne.key:null;if(typeof ue=="string"&&ue!==""||typeof ue=="number")return lt!==null?null:B(oe,ne,""+ue,Oe);if(typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:return ue.key===lt?Q(oe,ne,ue,Oe):null;case k:return ue.key===lt?fe(oe,ne,ue,Oe):null;case te:return lt=ue._init,Ce(oe,ne,lt(ue._payload),Oe)}if(Ee(ue)||O(ue))return lt!==null?null:Ne(oe,ne,ue,Oe,null);Qo(oe,ue)}return null}function Ke(oe,ne,ue,Oe,lt){if(typeof Oe=="string"&&Oe!==""||typeof Oe=="number")return oe=oe.get(ue)||null,B(ne,oe,""+Oe,lt);if(typeof Oe=="object"&&Oe!==null){switch(Oe.$$typeof){case L:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,Q(ne,oe,Oe,lt);case k:return oe=oe.get(Oe.key===null?ue:Oe.key)||null,fe(ne,oe,Oe,lt);case te:var mt=Oe._init;return Ke(oe,ne,ue,mt(Oe._payload),lt)}if(Ee(Oe)||O(Oe))return oe=oe.get(ue)||null,Ne(ne,oe,Oe,lt,null);Qo(ne,Oe)}return null}function nt(oe,ne,ue,Oe){for(var lt=null,mt=null,gt=ne,St=ne=0,Mn=null;gt!==null&&St<ue.length;St++){gt.index>St?(Mn=gt,gt=null):Mn=gt.sibling;var zt=Ce(oe,gt,ue[St],Oe);if(zt===null){gt===null&&(gt=Mn);break}n&&gt&&zt.alternate===null&&i(oe,gt),ne=g(zt,ne,St),mt===null?lt=zt:mt.sibling=zt,mt=zt,gt=Mn}if(St===ue.length)return o(oe,gt),Jt&&Jr(oe,St),lt;if(gt===null){for(;St<ue.length;St++)gt=Ie(oe,ue[St],Oe),gt!==null&&(ne=g(gt,ne,St),mt===null?lt=gt:mt.sibling=gt,mt=gt);return Jt&&Jr(oe,St),lt}for(gt=u(oe,gt);St<ue.length;St++)Mn=Ke(gt,oe,St,ue[St],Oe),Mn!==null&&(n&&Mn.alternate!==null&&gt.delete(Mn.key===null?St:Mn.key),ne=g(Mn,ne,St),mt===null?lt=Mn:mt.sibling=Mn,mt=Mn);return n&&gt.forEach(function(Lr){return i(oe,Lr)}),Jt&&Jr(oe,St),lt}function it(oe,ne,ue,Oe){var lt=O(ue);if(typeof lt!="function")throw Error(t(150));if(ue=lt.call(ue),ue==null)throw Error(t(151));for(var mt=lt=null,gt=ne,St=ne=0,Mn=null,zt=ue.next();gt!==null&&!zt.done;St++,zt=ue.next()){gt.index>St?(Mn=gt,gt=null):Mn=gt.sibling;var Lr=Ce(oe,gt,zt.value,Oe);if(Lr===null){gt===null&&(gt=Mn);break}n&&gt&&Lr.alternate===null&&i(oe,gt),ne=g(Lr,ne,St),mt===null?lt=Lr:mt.sibling=Lr,mt=Lr,gt=Mn}if(zt.done)return o(oe,gt),Jt&&Jr(oe,St),lt;if(gt===null){for(;!zt.done;St++,zt=ue.next())zt=Ie(oe,zt.value,Oe),zt!==null&&(ne=g(zt,ne,St),mt===null?lt=zt:mt.sibling=zt,mt=zt);return Jt&&Jr(oe,St),lt}for(gt=u(oe,gt);!zt.done;St++,zt=ue.next())zt=Ke(gt,oe,St,zt.value,Oe),zt!==null&&(n&&zt.alternate!==null&&gt.delete(zt.key===null?St:zt.key),ne=g(zt,ne,St),mt===null?lt=zt:mt.sibling=zt,mt=zt);return n&&gt.forEach(function(F0){return i(oe,F0)}),Jt&&Jr(oe,St),lt}function cn(oe,ne,ue,Oe){if(typeof ue=="object"&&ue!==null&&ue.type===E&&ue.key===null&&(ue=ue.props.children),typeof ue=="object"&&ue!==null){switch(ue.$$typeof){case L:e:{for(var lt=ue.key,mt=ne;mt!==null;){if(mt.key===lt){if(lt=ue.type,lt===E){if(mt.tag===7){o(oe,mt.sibling),ne=f(mt,ue.props.children),ne.return=oe,oe=ne;break e}}else if(mt.elementType===lt||typeof lt=="object"&&lt!==null&&lt.$$typeof===te&&ap(lt)===mt.type){o(oe,mt.sibling),ne=f(mt,ue.props),ne.ref=Fa(oe,mt,ue),ne.return=oe,oe=ne;break e}o(oe,mt);break}else i(oe,mt);mt=mt.sibling}ue.type===E?(ne=os(ue.props.children,oe.mode,Oe,ue.key),ne.return=oe,oe=ne):(Oe=Ml(ue.type,ue.key,ue.props,null,oe.mode,Oe),Oe.ref=Fa(oe,ne,ue),Oe.return=oe,oe=Oe)}return A(oe);case k:e:{for(mt=ue.key;ne!==null;){if(ne.key===mt)if(ne.tag===4&&ne.stateNode.containerInfo===ue.containerInfo&&ne.stateNode.implementation===ue.implementation){o(oe,ne.sibling),ne=f(ne,ue.children||[]),ne.return=oe,oe=ne;break e}else{o(oe,ne);break}else i(oe,ne);ne=ne.sibling}ne=id(ue,oe.mode,Oe),ne.return=oe,oe=ne}return A(oe);case te:return mt=ue._init,cn(oe,ne,mt(ue._payload),Oe)}if(Ee(ue))return nt(oe,ne,ue,Oe);if(O(ue))return it(oe,ne,ue,Oe);Qo(oe,ue)}return typeof ue=="string"&&ue!==""||typeof ue=="number"?(ue=""+ue,ne!==null&&ne.tag===6?(o(oe,ne.sibling),ne=f(ne,ue),ne.return=oe,oe=ne):(o(oe,ne),ne=nd(ue,oe.mode,Oe),ne.return=oe,oe=ne),A(oe)):o(oe,ne)}return cn}var Us=op(!0),lp=op(!1),Jo=Sr(null),el=null,Fs=null,hu=null;function fu(){hu=Fs=el=null}function pu(n){var i=Jo.current;Kt(Jo),n._currentValue=i}function mu(n,i,o){for(;n!==null;){var u=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,u!==null&&(u.childLanes|=i)):u!==null&&(u.childLanes&i)!==i&&(u.childLanes|=i),n===o)break;n=n.return}}function Os(n,i){el=n,hu=Fs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Gn=!0),n.firstContext=null)}function ui(n){var i=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:i,next:null},Fs===null){if(el===null)throw Error(t(308));Fs=n,el.dependencies={lanes:0,firstContext:n}}else Fs=Fs.next=n;return i}var es=null;function gu(n){es===null?es=[n]:es.push(n)}function cp(n,i,o,u){var f=i.interleaved;return f===null?(o.next=o,gu(i)):(o.next=f.next,f.next=o),i.interleaved=o,tr(n,u)}function tr(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var wr=!1;function xu(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function up(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function nr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function br(n,i,o){var u=n.updateQueue;if(u===null)return null;if(u=u.shared,(Ot&2)!==0){var f=u.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),u.pending=i,tr(n,o)}return f=u.interleaved,f===null?(i.next=i,gu(u)):(i.next=f.next,f.next=i),u.interleaved=i,tr(n,o)}function tl(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,fn(n,o)}}function dp(n,i){var o=n.updateQueue,u=n.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=i:g=g.next=i}else f=g=i;o={baseState:u.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:u.shared,effects:u.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function nl(n,i,o,u){var f=n.updateQueue;wr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,B=f.shared.pending;if(B!==null){f.shared.pending=null;var Q=B,fe=Q.next;Q.next=null,A===null?g=fe:A.next=fe,A=Q;var Ne=n.alternate;Ne!==null&&(Ne=Ne.updateQueue,B=Ne.lastBaseUpdate,B!==A&&(B===null?Ne.firstBaseUpdate=fe:B.next=fe,Ne.lastBaseUpdate=Q))}if(g!==null){var Ie=f.baseState;A=0,Ne=fe=Q=null,B=g;do{var Ce=B.lane,Ke=B.eventTime;if((u&Ce)===Ce){Ne!==null&&(Ne=Ne.next={eventTime:Ke,lane:0,tag:B.tag,payload:B.payload,callback:B.callback,next:null});e:{var nt=n,it=B;switch(Ce=i,Ke=o,it.tag){case 1:if(nt=it.payload,typeof nt=="function"){Ie=nt.call(Ke,Ie,Ce);break e}Ie=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=it.payload,Ce=typeof nt=="function"?nt.call(Ke,Ie,Ce):nt,Ce==null)break e;Ie=Y({},Ie,Ce);break e;case 2:wr=!0}}B.callback!==null&&B.lane!==0&&(n.flags|=64,Ce=f.effects,Ce===null?f.effects=[B]:Ce.push(B))}else Ke={eventTime:Ke,lane:Ce,tag:B.tag,payload:B.payload,callback:B.callback,next:null},Ne===null?(fe=Ne=Ke,Q=Ie):Ne=Ne.next=Ke,A|=Ce;if(B=B.next,B===null){if(B=f.shared.pending,B===null)break;Ce=B,B=Ce.next,Ce.next=null,f.lastBaseUpdate=Ce,f.shared.pending=null}}while(!0);if(Ne===null&&(Q=Ie),f.baseState=Q,f.firstBaseUpdate=fe,f.lastBaseUpdate=Ne,i=f.shared.interleaved,i!==null){f=i;do A|=f.lane,f=f.next;while(f!==i)}else g===null&&(f.shared.lanes=0);is|=A,n.lanes=A,n.memoizedState=Ie}}function hp(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var u=n[i],f=u.callback;if(f!==null){if(u.callback=null,u=o,typeof f!="function")throw Error(t(191,f));f.call(u)}}}var Oa={},Ui=Sr(Oa),ja=Sr(Oa),za=Sr(Oa);function ts(n){if(n===Oa)throw Error(t(174));return n}function vu(n,i){switch($t(za,i),$t(ja,n),$t(Ui,Oa),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:ft(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=ft(i,n)}Kt(Ui),$t(Ui,i)}function js(){Kt(Ui),Kt(ja),Kt(za)}function fp(n){ts(za.current);var i=ts(Ui.current),o=ft(i,n.type);i!==o&&($t(ja,n),$t(Ui,o))}function _u(n){ja.current===n&&(Kt(Ui),Kt(ja))}var tn=Sr(0);function il(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var yu=[];function Su(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var rl=N.ReactCurrentDispatcher,Mu=N.ReactCurrentBatchConfig,ns=0,nn=null,mn=null,yn=null,sl=!1,Ba=!1,Ha=0,s0=0;function Ln(){throw Error(t(321))}function Eu(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!vi(n[o],i[o]))return!1;return!0}function wu(n,i,o,u,f,g){if(ns=g,nn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,rl.current=n===null||n.memoizedState===null?c0:u0,n=o(u,f),Ba){g=0;do{if(Ba=!1,Ha=0,25<=g)throw Error(t(301));g+=1,yn=mn=null,i.updateQueue=null,rl.current=d0,n=o(u,f)}while(Ba)}if(rl.current=ll,i=mn!==null&&mn.next!==null,ns=0,yn=mn=nn=null,sl=!1,i)throw Error(t(300));return n}function bu(){var n=Ha!==0;return Ha=0,n}function Fi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return yn===null?nn.memoizedState=yn=n:yn=yn.next=n,yn}function di(){if(mn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=mn.next;var i=yn===null?nn.memoizedState:yn.next;if(i!==null)yn=i,mn=n;else{if(n===null)throw Error(t(310));mn=n,n={memoizedState:mn.memoizedState,baseState:mn.baseState,baseQueue:mn.baseQueue,queue:mn.queue,next:null},yn===null?nn.memoizedState=yn=n:yn=yn.next=n}return yn}function Ga(n,i){return typeof i=="function"?i(n):i}function Tu(n){var i=di(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=mn,f=u.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}u.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,u=u.baseState;var B=A=null,Q=null,fe=g;do{var Ne=fe.lane;if((ns&Ne)===Ne)Q!==null&&(Q=Q.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),u=fe.hasEagerState?fe.eagerState:n(u,fe.action);else{var Ie={lane:Ne,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};Q===null?(B=Q=Ie,A=u):Q=Q.next=Ie,nn.lanes|=Ne,is|=Ne}fe=fe.next}while(fe!==null&&fe!==g);Q===null?A=u:Q.next=B,vi(u,i.memoizedState)||(Gn=!0),i.memoizedState=u,i.baseState=A,i.baseQueue=Q,o.lastRenderedState=u}if(n=o.interleaved,n!==null){f=n;do g=f.lane,nn.lanes|=g,is|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Cu(n){var i=di(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var u=o.dispatch,f=o.pending,g=i.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);vi(g,i.memoizedState)||(Gn=!0),i.memoizedState=g,i.baseQueue===null&&(i.baseState=g),o.lastRenderedState=g}return[g,u]}function pp(){}function mp(n,i){var o=nn,u=di(),f=i(),g=!vi(u.memoizedState,f);if(g&&(u.memoizedState=f,Gn=!0),u=u.queue,Nu(vp.bind(null,o,u,n),[n]),u.getSnapshot!==i||g||yn!==null&&yn.memoizedState.tag&1){if(o.flags|=2048,Va(9,xp.bind(null,o,u,f,i),void 0,null),Sn===null)throw Error(t(349));(ns&30)!==0||gp(o,i,f)}return f}function gp(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function xp(n,i,o,u){i.value=o,i.getSnapshot=u,_p(i)&&yp(n)}function vp(n,i,o){return o(function(){_p(i)&&yp(n)})}function _p(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!vi(n,o)}catch{return!0}}function yp(n){var i=tr(n,1);i!==null&&Ei(i,n,1,-1)}function Sp(n){var i=Fi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ga,lastRenderedState:n},i.queue=n,n=n.dispatch=l0.bind(null,nn,n),[i.memoizedState,n]}function Va(n,i,o,u){return n={tag:n,create:i,destroy:o,deps:u,next:null},i=nn.updateQueue,i===null?(i={lastEffect:null,stores:null},nn.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(u=o.next,o.next=n,n.next=u,i.lastEffect=n)),n}function Mp(){return di().memoizedState}function al(n,i,o,u){var f=Fi();nn.flags|=n,f.memoizedState=Va(1|i,o,void 0,u===void 0?null:u)}function ol(n,i,o,u){var f=di();u=u===void 0?null:u;var g=void 0;if(mn!==null){var A=mn.memoizedState;if(g=A.destroy,u!==null&&Eu(u,A.deps)){f.memoizedState=Va(i,o,g,u);return}}nn.flags|=n,f.memoizedState=Va(1|i,o,g,u)}function Ep(n,i){return al(8390656,8,n,i)}function Nu(n,i){return ol(2048,8,n,i)}function wp(n,i){return ol(4,2,n,i)}function bp(n,i){return ol(4,4,n,i)}function Tp(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Cp(n,i,o){return o=o!=null?o.concat([n]):null,ol(4,4,Tp.bind(null,i,n),o)}function Au(){}function Np(n,i){var o=di();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(o.memoizedState=[n,i],n)}function Ap(n,i){var o=di();i=i===void 0?null:i;var u=o.memoizedState;return u!==null&&i!==null&&Eu(i,u[1])?u[0]:(n=n(),o.memoizedState=[n,i],n)}function Rp(n,i,o){return(ns&21)===0?(n.baseState&&(n.baseState=!1,Gn=!0),n.memoizedState=o):(vi(o,i)||(o=Gt(),nn.lanes|=o,is|=o,n.baseState=!0),i)}function a0(n,i){var o=at;at=o!==0&&4>o?o:4,n(!0);var u=Mu.transition;Mu.transition={};try{n(!1),i()}finally{at=o,Mu.transition=u}}function Pp(){return di().memoizedState}function o0(n,i,o){var u=Ar(n);if(o={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null},Lp(n))Dp(i,o);else if(o=cp(n,i,o,u),o!==null){var f=jn();Ei(o,n,u,f),Ip(o,i,u)}}function l0(n,i,o){var u=Ar(n),f={lane:u,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lp(n))Dp(i,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=i.lastRenderedReducer,g!==null))try{var A=i.lastRenderedState,B=g(A,o);if(f.hasEagerState=!0,f.eagerState=B,vi(B,A)){var Q=i.interleaved;Q===null?(f.next=f,gu(i)):(f.next=Q.next,Q.next=f),i.interleaved=f;return}}catch{}finally{}o=cp(n,i,f,u),o!==null&&(f=jn(),Ei(o,n,u,f),Ip(o,i,u))}}function Lp(n){var i=n.alternate;return n===nn||i!==null&&i===nn}function Dp(n,i){Ba=sl=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ip(n,i,o){if((o&4194240)!==0){var u=i.lanes;u&=n.pendingLanes,o|=u,i.lanes=o,fn(n,o)}}var ll={readContext:ui,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},c0={readContext:ui,useCallback:function(n,i){return Fi().memoizedState=[n,i===void 0?null:i],n},useContext:ui,useEffect:Ep,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,al(4194308,4,Tp.bind(null,i,n),o)},useLayoutEffect:function(n,i){return al(4194308,4,n,i)},useInsertionEffect:function(n,i){return al(4,2,n,i)},useMemo:function(n,i){var o=Fi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var u=Fi();return i=o!==void 0?o(i):i,u.memoizedState=u.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},u.queue=n,n=n.dispatch=o0.bind(null,nn,n),[u.memoizedState,n]},useRef:function(n){var i=Fi();return n={current:n},i.memoizedState=n},useState:Sp,useDebugValue:Au,useDeferredValue:function(n){return Fi().memoizedState=n},useTransition:function(){var n=Sp(!1),i=n[0];return n=a0.bind(null,n[1]),Fi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var u=nn,f=Fi();if(Jt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),Sn===null)throw Error(t(349));(ns&30)!==0||gp(u,i,o)}f.memoizedState=o;var g={value:o,getSnapshot:i};return f.queue=g,Ep(vp.bind(null,u,g,n),[n]),u.flags|=2048,Va(9,xp.bind(null,u,g,o,i),void 0,null),o},useId:function(){var n=Fi(),i=Sn.identifierPrefix;if(Jt){var o=er,u=Ji;o=(u&~(1<<32-se(u)-1)).toString(32)+o,i=":"+i+"R"+o,o=Ha++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=s0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},u0={readContext:ui,useCallback:Np,useContext:ui,useEffect:Nu,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ap,useReducer:Tu,useRef:Mp,useState:function(){return Tu(Ga)},useDebugValue:Au,useDeferredValue:function(n){var i=di();return Rp(i,mn.memoizedState,n)},useTransition:function(){var n=Tu(Ga)[0],i=di().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1},d0={readContext:ui,useCallback:Np,useContext:ui,useEffect:Nu,useImperativeHandle:Cp,useInsertionEffect:wp,useLayoutEffect:bp,useMemo:Ap,useReducer:Cu,useRef:Mp,useState:function(){return Cu(Ga)},useDebugValue:Au,useDeferredValue:function(n){var i=di();return mn===null?i.memoizedState=n:Rp(i,mn.memoizedState,n)},useTransition:function(){var n=Cu(Ga)[0],i=di().memoizedState;return[n,i]},useMutableSource:pp,useSyncExternalStore:mp,useId:Pp,unstable_isNewReconciler:!1};function yi(n,i){if(n&&n.defaultProps){i=Y({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Ru(n,i,o,u){i=n.memoizedState,o=o(u,i),o=o==null?i:Y({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var cl={isMounted:function(n){return(n=n._reactInternals)?Pi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var u=jn(),f=Ar(n),g=nr(u,f);g.payload=i,o!=null&&(g.callback=o),i=br(n,g,f),i!==null&&(Ei(i,n,f,u),tl(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var u=jn(),f=Ar(n),g=nr(u,f);g.tag=1,g.payload=i,o!=null&&(g.callback=o),i=br(n,g,f),i!==null&&(Ei(i,n,f,u),tl(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=jn(),u=Ar(n),f=nr(o,u);f.tag=2,i!=null&&(f.callback=i),i=br(n,f,u),i!==null&&(Ei(i,n,u,o),tl(i,n,u))}};function kp(n,i,o,u,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(u,g,A):i.prototype&&i.prototype.isPureReactComponent?!Ra(o,u)||!Ra(f,g):!0}function Up(n,i,o){var u=!1,f=Mr,g=i.contextType;return typeof g=="object"&&g!==null?g=ui(g):(f=Hn(i)?Zr:Pn.current,u=i.contextTypes,g=(u=u!=null)?Ls(n,f):Mr),i=new i(o,g),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=cl,n.stateNode=i,i._reactInternals=n,u&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),i}function Fp(n,i,o,u){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,u),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,u),i.state!==n&&cl.enqueueReplaceState(i,i.state,null)}function Pu(n,i,o,u){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},xu(n);var g=i.contextType;typeof g=="object"&&g!==null?f.context=ui(g):(g=Hn(i)?Zr:Pn.current,f.context=Ls(n,g)),f.state=n.memoizedState,g=i.getDerivedStateFromProps,typeof g=="function"&&(Ru(n,i,g,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&cl.enqueueReplaceState(f,f.state,null),nl(n,o,f,u),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function zs(n,i){try{var o="",u=i;do o+=le(u),u=u.return;while(u);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:i,stack:f,digest:null}}function Lu(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Du(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var h0=typeof WeakMap=="function"?WeakMap:Map;function Op(n,i,o){o=nr(-1,o),o.tag=3,o.payload={element:null};var u=i.value;return o.callback=function(){gl||(gl=!0,qu=u),Du(n,i)},o}function jp(n,i,o){o=nr(-1,o),o.tag=3;var u=n.type.getDerivedStateFromError;if(typeof u=="function"){var f=i.value;o.payload=function(){return u(f)},o.callback=function(){Du(n,i)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Du(n,i),typeof u!="function"&&(Cr===null?Cr=new Set([this]):Cr.add(this));var A=i.stack;this.componentDidCatch(i.value,{componentStack:A!==null?A:""})}),o}function zp(n,i,o){var u=n.pingCache;if(u===null){u=n.pingCache=new h0;var f=new Set;u.set(i,f)}else f=u.get(i),f===void 0&&(f=new Set,u.set(i,f));f.has(o)||(f.add(o),n=T0.bind(null,n,i,o),i.then(n,n))}function Bp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Hp(n,i,o,u,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=nr(-1,1),i.tag=2,br(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var f0=N.ReactCurrentOwner,Gn=!1;function On(n,i,o,u){i.child=n===null?lp(i,null,o,u):Us(i,n.child,o,u)}function Gp(n,i,o,u,f){o=o.render;var g=i.ref;return Os(i,f),u=wu(n,i,o,u,g,f),o=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(Jt&&o&&ou(i),i.flags|=1,On(n,i,u,f),i.child)}function Vp(n,i,o,u,f){if(n===null){var g=o.type;return typeof g=="function"&&!td(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=g,Wp(n,i,g,u,f)):(n=Ml(o.type,null,u,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ra,o(A,u)&&n.ref===i.ref)return ir(n,i,f)}return i.flags|=1,n=Pr(g,u),n.ref=i.ref,n.return=i,i.child=n}function Wp(n,i,o,u,f){if(n!==null){var g=n.memoizedProps;if(Ra(g,u)&&n.ref===i.ref)if(Gn=!1,i.pendingProps=u=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Gn=!0);else return i.lanes=n.lanes,ir(n,i,f)}return Iu(n,i,o,u,f)}function Xp(n,i,o){var u=i.pendingProps,f=u.children,g=n!==null?n.memoizedState:null;if(u.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},$t(Hs,ni),ni|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,$t(Hs,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},u=g!==null?g.baseLanes:o,$t(Hs,ni),ni|=u}else g!==null?(u=g.baseLanes|o,i.memoizedState=null):u=o,$t(Hs,ni),ni|=u;return On(n,i,f,o),i.child}function $p(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Iu(n,i,o,u,f){var g=Hn(o)?Zr:Pn.current;return g=Ls(i,g),Os(i,f),o=wu(n,i,o,u,g,f),u=bu(),n!==null&&!Gn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,ir(n,i,f)):(Jt&&u&&ou(i),i.flags|=1,On(n,i,o,f),i.child)}function qp(n,i,o,u,f){if(Hn(o)){var g=!0;$o(i)}else g=!1;if(Os(i,f),i.stateNode===null)dl(n,i),Up(i,o,u),Pu(i,o,u,f),u=!0;else if(n===null){var A=i.stateNode,B=i.memoizedProps;A.props=B;var Q=A.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=ui(fe):(fe=Hn(o)?Zr:Pn.current,fe=Ls(i,fe));var Ne=o.getDerivedStateFromProps,Ie=typeof Ne=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ie||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==u||Q!==fe)&&Fp(i,A,u,fe),wr=!1;var Ce=i.memoizedState;A.state=Ce,nl(i,u,A,f),Q=i.memoizedState,B!==u||Ce!==Q||Bn.current||wr?(typeof Ne=="function"&&(Ru(i,o,Ne,u),Q=i.memoizedState),(B=wr||kp(i,o,B,u,Ce,Q,fe))?(Ie||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(i.flags|=4194308)):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=u,i.memoizedState=Q),A.props=u,A.state=Q,A.context=fe,u=B):(typeof A.componentDidMount=="function"&&(i.flags|=4194308),u=!1)}else{A=i.stateNode,up(n,i),B=i.memoizedProps,fe=i.type===i.elementType?B:yi(i.type,B),A.props=fe,Ie=i.pendingProps,Ce=A.context,Q=o.contextType,typeof Q=="object"&&Q!==null?Q=ui(Q):(Q=Hn(o)?Zr:Pn.current,Q=Ls(i,Q));var Ke=o.getDerivedStateFromProps;(Ne=typeof Ke=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(B!==Ie||Ce!==Q)&&Fp(i,A,u,Q),wr=!1,Ce=i.memoizedState,A.state=Ce,nl(i,u,A,f);var nt=i.memoizedState;B!==Ie||Ce!==nt||Bn.current||wr?(typeof Ke=="function"&&(Ru(i,o,Ke,u),nt=i.memoizedState),(fe=wr||kp(i,o,fe,u,Ce,nt,Q)||!1)?(Ne||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(u,nt,Q),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(u,nt,Q)),typeof A.componentDidUpdate=="function"&&(i.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),i.memoizedProps=u,i.memoizedState=nt),A.props=u,A.state=nt,A.context=Q,u=fe):(typeof A.componentDidUpdate!="function"||B===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||B===n.memoizedProps&&Ce===n.memoizedState||(i.flags|=1024),u=!1)}return ku(n,i,o,u,g,f)}function ku(n,i,o,u,f,g){$p(n,i);var A=(i.flags&128)!==0;if(!u&&!A)return f&&Jf(i,o,!1),ir(n,i,g);u=i.stateNode,f0.current=i;var B=A&&typeof o.getDerivedStateFromError!="function"?null:u.render();return i.flags|=1,n!==null&&A?(i.child=Us(i,n.child,null,g),i.child=Us(i,null,B,g)):On(n,i,B,g),i.memoizedState=u.state,f&&Jf(i,o,!0),i.child}function Yp(n){var i=n.stateNode;i.pendingContext?Zf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zf(n,i.context,!1),vu(n,i.containerInfo)}function Kp(n,i,o,u,f){return ks(),du(f),i.flags|=256,On(n,i,o,u),i.child}var Uu={dehydrated:null,treeContext:null,retryLane:0};function Fu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zp(n,i,o){var u=i.pendingProps,f=tn.current,g=!1,A=(i.flags&128)!==0,B;if((B=A)||(B=n!==null&&n.memoizedState===null?!1:(f&2)!==0),B?(g=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),$t(tn,f&1),n===null)return uu(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(A=u.children,n=u.fallback,g?(u=i.mode,g=i.child,A={mode:"hidden",children:A},(u&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=El(A,u,0,null),n=os(n,u,o,null),g.return=i,n.return=i,g.sibling=n,i.child=g,i.child.memoizedState=Fu(o),i.memoizedState=Uu,n):Ou(i,A));if(f=n.memoizedState,f!==null&&(B=f.dehydrated,B!==null))return p0(n,i,A,u,B,f,o);if(g){g=u.fallback,A=i.mode,f=n.child,B=f.sibling;var Q={mode:"hidden",children:u.children};return(A&1)===0&&i.child!==f?(u=i.child,u.childLanes=0,u.pendingProps=Q,i.deletions=null):(u=Pr(f,Q),u.subtreeFlags=f.subtreeFlags&14680064),B!==null?g=Pr(B,g):(g=os(g,A,o,null),g.flags|=2),g.return=i,u.return=i,u.sibling=g,i.child=u,u=g,g=i.child,A=n.child.memoizedState,A=A===null?Fu(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,i.memoizedState=Uu,u}return g=n.child,n=g.sibling,u=Pr(g,{mode:"visible",children:u.children}),(i.mode&1)===0&&(u.lanes=o),u.return=i,u.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=u,i.memoizedState=null,u}function Ou(n,i){return i=El({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ul(n,i,o,u){return u!==null&&du(u),Us(i,n.child,null,o),n=Ou(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function p0(n,i,o,u,f,g,A){if(o)return i.flags&256?(i.flags&=-257,u=Lu(Error(t(422))),ul(n,i,A,u)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(g=u.fallback,f=i.mode,u=El({mode:"visible",children:u.children},f,0,null),g=os(g,f,A,null),g.flags|=2,u.return=i,g.return=i,u.sibling=g,i.child=u,(i.mode&1)!==0&&Us(i,n.child,null,A),i.child.memoizedState=Fu(A),i.memoizedState=Uu,g);if((i.mode&1)===0)return ul(n,i,A,null);if(f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var B=u.dgst;return u=B,g=Error(t(419)),u=Lu(g,u,void 0),ul(n,i,A,u)}if(B=(A&n.childLanes)!==0,Gn||B){if(u=Sn,u!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(u.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,tr(n,f),Ei(u,n,f,-1))}return ed(),u=Lu(Error(t(421))),ul(n,i,A,u)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=C0.bind(null,n),f._reactRetry=i,null):(n=g.treeContext,ti=yr(f.nextSibling),ei=i,Jt=!0,_i=null,n!==null&&(li[ci++]=Ji,li[ci++]=er,li[ci++]=Qr,Ji=n.id,er=n.overflow,Qr=i),i=Ou(i,u.children),i.flags|=4096,i)}function Qp(n,i,o){n.lanes|=i;var u=n.alternate;u!==null&&(u.lanes|=i),mu(n.return,i,o)}function ju(n,i,o,u,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:f}:(g.isBackwards=i,g.rendering=null,g.renderingStartTime=0,g.last=u,g.tail=o,g.tailMode=f)}function Jp(n,i,o){var u=i.pendingProps,f=u.revealOrder,g=u.tail;if(On(n,i,u.children,o),u=tn.current,(u&2)!==0)u=u&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qp(n,o,i);else if(n.tag===19)Qp(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}u&=1}if($t(tn,u),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&il(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),ju(i,!1,f,o,g);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&il(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ju(i,!0,o,null,g);break;case"together":ju(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function dl(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function ir(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),is|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=Pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=Pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function m0(n,i,o){switch(i.tag){case 3:Yp(i),ks();break;case 5:fp(i);break;case 1:Hn(i.type)&&$o(i);break;case 4:vu(i,i.stateNode.containerInfo);break;case 10:var u=i.type._context,f=i.memoizedProps.value;$t(Jo,u._currentValue),u._currentValue=f;break;case 13:if(u=i.memoizedState,u!==null)return u.dehydrated!==null?($t(tn,tn.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zp(n,i,o):($t(tn,tn.current&1),n=ir(n,i,o),n!==null?n.sibling:null);$t(tn,tn.current&1);break;case 19:if(u=(o&i.childLanes)!==0,(n.flags&128)!==0){if(u)return Jp(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),$t(tn,tn.current),u)break;return null;case 22:case 23:return i.lanes=0,Xp(n,i,o)}return ir(n,i,o)}var em,zu,tm,nm;em=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},zu=function(){},tm=function(n,i,o,u){var f=n.memoizedProps;if(f!==u){n=i.stateNode,ts(Ui.current);var g=null;switch(o){case"input":f=ct(n,f),u=ct(n,u),g=[];break;case"select":f=Y({},f,{value:void 0}),u=Y({},u,{value:void 0}),g=[];break;case"textarea":f=At(n,f),u=At(n,u),g=[];break;default:typeof f.onClick!="function"&&typeof u.onClick=="function"&&(n.onclick=Vo)}ge(o,u);var A;o=null;for(fe in f)if(!u.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var B=f[fe];for(A in B)B.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(l.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in u){var Q=u[fe];if(B=f!=null?f[fe]:void 0,u.hasOwnProperty(fe)&&Q!==B&&(Q!=null||B!=null))if(fe==="style")if(B){for(A in B)!B.hasOwnProperty(A)||Q&&Q.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in Q)Q.hasOwnProperty(A)&&B[A]!==Q[A]&&(o||(o={}),o[A]=Q[A])}else o||(g||(g=[]),g.push(fe,o)),o=Q;else fe==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,B=B?B.__html:void 0,Q!=null&&B!==Q&&(g=g||[]).push(fe,Q)):fe==="children"?typeof Q!="string"&&typeof Q!="number"||(g=g||[]).push(fe,""+Q):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(l.hasOwnProperty(fe)?(Q!=null&&fe==="onScroll"&&Yt("scroll",n),g||B===Q||(g=[])):(g=g||[]).push(fe,Q))}o&&(g=g||[]).push("style",o);var fe=g;(i.updateQueue=fe)&&(i.flags|=4)}},nm=function(n,i,o,u){o!==u&&(i.flags|=4)};function Wa(n,i){if(!Jt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:u.sibling=null}}function Dn(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,u=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags&14680064,u|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,u|=f.subtreeFlags,u|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=u,n.childLanes=o,i}function g0(n,i,o){var u=i.pendingProps;switch(lu(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(i),null;case 1:return Hn(i.type)&&Xo(),Dn(i),null;case 3:return u=i.stateNode,js(),Kt(Bn),Kt(Pn),Su(),u.pendingContext&&(u.context=u.pendingContext,u.pendingContext=null),(n===null||n.child===null)&&(Zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,_i!==null&&(Zu(_i),_i=null))),zu(n,i),Dn(i),null;case 5:_u(i);var f=ts(za.current);if(o=i.type,n!==null&&i.stateNode!=null)tm(n,i,o,u,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!u){if(i.stateNode===null)throw Error(t(166));return Dn(i),null}if(n=ts(Ui.current),Zo(i)){u=i.stateNode,o=i.type;var g=i.memoizedProps;switch(u[ki]=i,u[ka]=g,n=(i.mode&1)!==0,o){case"dialog":Yt("cancel",u),Yt("close",u);break;case"iframe":case"object":case"embed":Yt("load",u);break;case"video":case"audio":for(f=0;f<La.length;f++)Yt(La[f],u);break;case"source":Yt("error",u);break;case"img":case"image":case"link":Yt("error",u),Yt("load",u);break;case"details":Yt("toggle",u);break;case"input":je(u,g),Yt("invalid",u);break;case"select":u._wrapperState={wasMultiple:!!g.multiple},Yt("invalid",u);break;case"textarea":Le(u,g),Yt("invalid",u)}ge(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var B=g[A];A==="children"?typeof B=="string"?u.textContent!==B&&(g.suppressHydrationWarning!==!0&&Go(u.textContent,B,n),f=["children",B]):typeof B=="number"&&u.textContent!==""+B&&(g.suppressHydrationWarning!==!0&&Go(u.textContent,B,n),f=["children",""+B]):l.hasOwnProperty(A)&&B!=null&&A==="onScroll"&&Yt("scroll",u)}switch(o){case"input":Ye(u),he(u,g,!0);break;case"textarea":Ye(u),Be(u);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(u.onclick=Vo)}u=f,i.updateQueue=u,u!==null&&(i.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ot(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof u.is=="string"?n=A.createElement(o,{is:u.is}):(n=A.createElement(o),o==="select"&&(A=n,u.multiple?A.multiple=!0:u.size&&(A.size=u.size))):n=A.createElementNS(n,o),n[ki]=i,n[ka]=u,em(n,i,!1,!1),i.stateNode=n;e:{switch(A=Pe(o,u),o){case"dialog":Yt("cancel",n),Yt("close",n),f=u;break;case"iframe":case"object":case"embed":Yt("load",n),f=u;break;case"video":case"audio":for(f=0;f<La.length;f++)Yt(La[f],n);f=u;break;case"source":Yt("error",n),f=u;break;case"img":case"image":case"link":Yt("error",n),Yt("load",n),f=u;break;case"details":Yt("toggle",n),f=u;break;case"input":je(n,u),f=ct(n,u),Yt("invalid",n);break;case"option":f=u;break;case"select":n._wrapperState={wasMultiple:!!u.multiple},f=Y({},u,{value:void 0}),Yt("invalid",n);break;case"textarea":Le(n,u),f=At(n,u),Yt("invalid",n);break;default:f=u}ge(o,f),B=f;for(g in B)if(B.hasOwnProperty(g)){var Q=B[g];g==="style"?re(n,Q):g==="dangerouslySetInnerHTML"?(Q=Q?Q.__html:void 0,Q!=null&&Wt(n,Q)):g==="children"?typeof Q=="string"?(o!=="textarea"||Q!=="")&&rt(n,Q):typeof Q=="number"&&rt(n,""+Q):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(l.hasOwnProperty(g)?Q!=null&&g==="onScroll"&&Yt("scroll",n):Q!=null&&I(n,g,Q,A))}switch(o){case"input":Ye(n),he(n,u,!1);break;case"textarea":Ye(n),Be(n);break;case"option":u.value!=null&&n.setAttribute("value",""+Se(u.value));break;case"select":n.multiple=!!u.multiple,g=u.value,g!=null?Mt(n,!!u.multiple,g,!1):u.defaultValue!=null&&Mt(n,!!u.multiple,u.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=Vo)}switch(o){case"button":case"input":case"select":case"textarea":u=!!u.autoFocus;break e;case"img":u=!0;break e;default:u=!1}}u&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Dn(i),null;case 6:if(n&&i.stateNode!=null)nm(n,i,n.memoizedProps,u);else{if(typeof u!="string"&&i.stateNode===null)throw Error(t(166));if(o=ts(za.current),ts(Ui.current),Zo(i)){if(u=i.stateNode,o=i.memoizedProps,u[ki]=i,(g=u.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:Go(u.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Go(u.nodeValue,o,(n.mode&1)!==0)}g&&(i.flags|=4)}else u=(o.nodeType===9?o:o.ownerDocument).createTextNode(u),u[ki]=i,i.stateNode=u}return Dn(i),null;case 13:if(Kt(tn),u=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Jt&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sp(),ks(),i.flags|=98560,g=!1;else if(g=Zo(i),u!==null&&u.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=i.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[ki]=i}else ks(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Dn(i),g=!1}else _i!==null&&(Zu(_i),_i=null),g=!0;if(!g)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(u=u!==null,u!==(n!==null&&n.memoizedState!==null)&&u&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(tn.current&1)!==0?gn===0&&(gn=3):ed())),i.updateQueue!==null&&(i.flags|=4),Dn(i),null);case 4:return js(),zu(n,i),n===null&&Da(i.stateNode.containerInfo),Dn(i),null;case 10:return pu(i.type._context),Dn(i),null;case 17:return Hn(i.type)&&Xo(),Dn(i),null;case 19:if(Kt(tn),g=i.memoizedState,g===null)return Dn(i),null;if(u=(i.flags&128)!==0,A=g.rendering,A===null)if(u)Wa(g,!1);else{if(gn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(A=il(n),A!==null){for(i.flags|=128,Wa(g,!1),u=A.updateQueue,u!==null&&(i.updateQueue=u,i.flags|=4),i.subtreeFlags=0,u=o,o=i.child;o!==null;)g=o,n=u,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return $t(tn,tn.current&1|2),i.child}n=n.sibling}g.tail!==null&&Zt()>Gs&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304)}else{if(!u)if(n=il(A),n!==null){if(i.flags|=128,u=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Wa(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!Jt)return Dn(i),null}else 2*Zt()-g.renderingStartTime>Gs&&o!==1073741824&&(i.flags|=128,u=!0,Wa(g,!1),i.lanes=4194304);g.isBackwards?(A.sibling=i.child,i.child=A):(o=g.last,o!==null?o.sibling=A:i.child=A,g.last=A)}return g.tail!==null?(i=g.tail,g.rendering=i,g.tail=i.sibling,g.renderingStartTime=Zt(),i.sibling=null,o=tn.current,$t(tn,u?o&1|2:o&1),i):(Dn(i),null);case 22:case 23:return Ju(),u=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==u&&(i.flags|=8192),u&&(i.mode&1)!==0?(ni&1073741824)!==0&&(Dn(i),i.subtreeFlags&6&&(i.flags|=8192)):Dn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function x0(n,i){switch(lu(i),i.tag){case 1:return Hn(i.type)&&Xo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return js(),Kt(Bn),Kt(Pn),Su(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return _u(i),null;case 13:if(Kt(tn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));ks()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Kt(tn),null;case 4:return js(),null;case 10:return pu(i.type._context),null;case 22:case 23:return Ju(),null;case 24:return null;default:return null}}var hl=!1,In=!1,v0=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function Bs(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(u){an(n,i,u)}else o.current=null}function Bu(n,i,o){try{o()}catch(u){an(n,i,u)}}var im=!1;function _0(n,i){if(Jc=Lo,n=kf(),Wc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var f=u.anchorOffset,g=u.focusNode;u=u.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,B=-1,Q=-1,fe=0,Ne=0,Ie=n,Ce=null;t:for(;;){for(var Ke;Ie!==o||f!==0&&Ie.nodeType!==3||(B=A+f),Ie!==g||u!==0&&Ie.nodeType!==3||(Q=A+u),Ie.nodeType===3&&(A+=Ie.nodeValue.length),(Ke=Ie.firstChild)!==null;)Ce=Ie,Ie=Ke;for(;;){if(Ie===n)break t;if(Ce===o&&++fe===f&&(B=A),Ce===g&&++Ne===u&&(Q=A),(Ke=Ie.nextSibling)!==null)break;Ie=Ce,Ce=Ie.parentNode}Ie=Ke}o=B===-1||Q===-1?null:{start:B,end:Q}}else o=null}o=o||{start:0,end:0}}else o=null;for(eu={focusedElem:n,selectionRange:o},Lo=!1,Qe=i;Qe!==null;)if(i=Qe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Qe=n;else for(;Qe!==null;){i=Qe;try{var nt=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var it=nt.memoizedProps,cn=nt.memoizedState,oe=i.stateNode,ne=oe.getSnapshotBeforeUpdate(i.elementType===i.type?it:yi(i.type,it),cn);oe.__reactInternalSnapshotBeforeUpdate=ne}break;case 3:var ue=i.stateNode.containerInfo;ue.nodeType===1?ue.textContent="":ue.nodeType===9&&ue.documentElement&&ue.removeChild(ue.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Oe){an(i,i.return,Oe)}if(n=i.sibling,n!==null){n.return=i.return,Qe=n;break}Qe=i.return}return nt=im,im=!1,nt}function Xa(n,i,o){var u=i.updateQueue;if(u=u!==null?u.lastEffect:null,u!==null){var f=u=u.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Bu(i,o,g)}f=f.next}while(f!==u)}}function fl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var u=o.create;o.destroy=u()}o=o.next}while(o!==i)}}function Hu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function rm(n){var i=n.alternate;i!==null&&(n.alternate=null,rm(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[ki],delete i[ka],delete i[ru],delete i[t0],delete i[n0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sm(n){return n.tag===5||n.tag===3||n.tag===4}function am(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Gu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Vo));else if(u!==4&&(n=n.child,n!==null))for(Gu(n,i,o),n=n.sibling;n!==null;)Gu(n,i,o),n=n.sibling}function Vu(n,i,o){var u=n.tag;if(u===5||u===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(u!==4&&(n=n.child,n!==null))for(Vu(n,i,o),n=n.sibling;n!==null;)Vu(n,i,o),n=n.sibling}var Tn=null,Si=!1;function Tr(n,i,o){for(o=o.child;o!==null;)om(n,i,o),o=o.sibling}function om(n,i,o){if(ce&&typeof ce.onCommitFiberUnmount=="function")try{ce.onCommitFiberUnmount(Z,o)}catch{}switch(o.tag){case 5:In||Bs(o,i);case 6:var u=Tn,f=Si;Tn=null,Tr(n,i,o),Tn=u,Si=f,Tn!==null&&(Si?(n=Tn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):Tn.removeChild(o.stateNode));break;case 18:Tn!==null&&(Si?(n=Tn,o=o.stateNode,n.nodeType===8?iu(n.parentNode,o):n.nodeType===1&&iu(n,o),wa(n)):iu(Tn,o.stateNode));break;case 4:u=Tn,f=Si,Tn=o.stateNode.containerInfo,Si=!0,Tr(n,i,o),Tn=u,Si=f;break;case 0:case 11:case 14:case 15:if(!In&&(u=o.updateQueue,u!==null&&(u=u.lastEffect,u!==null))){f=u=u.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Bu(o,i,A),f=f.next}while(f!==u)}Tr(n,i,o);break;case 1:if(!In&&(Bs(o,i),u=o.stateNode,typeof u.componentWillUnmount=="function"))try{u.props=o.memoizedProps,u.state=o.memoizedState,u.componentWillUnmount()}catch(B){an(o,i,B)}Tr(n,i,o);break;case 21:Tr(n,i,o);break;case 22:o.mode&1?(In=(u=In)||o.memoizedState!==null,Tr(n,i,o),In=u):Tr(n,i,o);break;default:Tr(n,i,o)}}function lm(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new v0),i.forEach(function(u){var f=N0.bind(null,n,u);o.has(u)||(o.add(u),u.then(f,f))})}}function Mi(n,i){var o=i.deletions;if(o!==null)for(var u=0;u<o.length;u++){var f=o[u];try{var g=n,A=i,B=A;e:for(;B!==null;){switch(B.tag){case 5:Tn=B.stateNode,Si=!1;break e;case 3:Tn=B.stateNode.containerInfo,Si=!0;break e;case 4:Tn=B.stateNode.containerInfo,Si=!0;break e}B=B.return}if(Tn===null)throw Error(t(160));om(g,A,f),Tn=null,Si=!1;var Q=f.alternate;Q!==null&&(Q.return=null),f.return=null}catch(fe){an(f,i,fe)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cm(i,n),i=i.sibling}function cm(n,i){var o=n.alternate,u=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Mi(i,n),Oi(n),u&4){try{Xa(3,n,n.return),fl(3,n)}catch(it){an(n,n.return,it)}try{Xa(5,n,n.return)}catch(it){an(n,n.return,it)}}break;case 1:Mi(i,n),Oi(n),u&512&&o!==null&&Bs(o,o.return);break;case 5:if(Mi(i,n),Oi(n),u&512&&o!==null&&Bs(o,o.return),n.flags&32){var f=n.stateNode;try{rt(f,"")}catch(it){an(n,n.return,it)}}if(u&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,B=n.type,Q=n.updateQueue;if(n.updateQueue=null,Q!==null)try{B==="input"&&g.type==="radio"&&g.name!=null&&ht(f,g),Pe(B,A);var fe=Pe(B,g);for(A=0;A<Q.length;A+=2){var Ne=Q[A],Ie=Q[A+1];Ne==="style"?re(f,Ie):Ne==="dangerouslySetInnerHTML"?Wt(f,Ie):Ne==="children"?rt(f,Ie):I(f,Ne,Ie,fe)}switch(B){case"input":bt(f,g);break;case"textarea":U(f,g);break;case"select":var Ce=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Ke=g.value;Ke!=null?Mt(f,!!g.multiple,Ke,!1):Ce!==!!g.multiple&&(g.defaultValue!=null?Mt(f,!!g.multiple,g.defaultValue,!0):Mt(f,!!g.multiple,g.multiple?[]:"",!1))}f[ka]=g}catch(it){an(n,n.return,it)}}break;case 6:if(Mi(i,n),Oi(n),u&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(it){an(n,n.return,it)}}break;case 3:if(Mi(i,n),Oi(n),u&4&&o!==null&&o.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch(it){an(n,n.return,it)}break;case 4:Mi(i,n),Oi(n);break;case 13:Mi(i,n),Oi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||($u=Zt())),u&4&&lm(n);break;case 22:if(Ne=o!==null&&o.memoizedState!==null,n.mode&1?(In=(fe=In)||Ne,Mi(i,n),In=fe):Mi(i,n),Oi(n),u&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Ne&&(n.mode&1)!==0)for(Qe=n,Ne=n.child;Ne!==null;){for(Ie=Qe=Ne;Qe!==null;){switch(Ce=Qe,Ke=Ce.child,Ce.tag){case 0:case 11:case 14:case 15:Xa(4,Ce,Ce.return);break;case 1:Bs(Ce,Ce.return);var nt=Ce.stateNode;if(typeof nt.componentWillUnmount=="function"){u=Ce,o=Ce.return;try{i=u,nt.props=i.memoizedProps,nt.state=i.memoizedState,nt.componentWillUnmount()}catch(it){an(u,o,it)}}break;case 5:Bs(Ce,Ce.return);break;case 22:if(Ce.memoizedState!==null){hm(Ie);continue}}Ke!==null?(Ke.return=Ce,Qe=Ke):hm(Ie)}Ne=Ne.sibling}e:for(Ne=null,Ie=n;;){if(Ie.tag===5){if(Ne===null){Ne=Ie;try{f=Ie.stateNode,fe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(B=Ie.stateNode,Q=Ie.memoizedProps.style,A=Q!=null&&Q.hasOwnProperty("display")?Q.display:null,B.style.display=b("display",A))}catch(it){an(n,n.return,it)}}}else if(Ie.tag===6){if(Ne===null)try{Ie.stateNode.nodeValue=fe?"":Ie.memoizedProps}catch(it){an(n,n.return,it)}}else if((Ie.tag!==22&&Ie.tag!==23||Ie.memoizedState===null||Ie===n)&&Ie.child!==null){Ie.child.return=Ie,Ie=Ie.child;continue}if(Ie===n)break e;for(;Ie.sibling===null;){if(Ie.return===null||Ie.return===n)break e;Ne===Ie&&(Ne=null),Ie=Ie.return}Ne===Ie&&(Ne=null),Ie.sibling.return=Ie.return,Ie=Ie.sibling}}break;case 19:Mi(i,n),Oi(n),u&4&&lm(n);break;case 21:break;default:Mi(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(sm(o)){var u=o;break e}o=o.return}throw Error(t(160))}switch(u.tag){case 5:var f=u.stateNode;u.flags&32&&(rt(f,""),u.flags&=-33);var g=am(n);Vu(n,g,f);break;case 3:case 4:var A=u.stateNode.containerInfo,B=am(n);Gu(n,B,A);break;default:throw Error(t(161))}}catch(Q){an(n,n.return,Q)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function y0(n,i,o){Qe=n,um(n)}function um(n,i,o){for(var u=(n.mode&1)!==0;Qe!==null;){var f=Qe,g=f.child;if(f.tag===22&&u){var A=f.memoizedState!==null||hl;if(!A){var B=f.alternate,Q=B!==null&&B.memoizedState!==null||In;B=hl;var fe=In;if(hl=A,(In=Q)&&!fe)for(Qe=f;Qe!==null;)A=Qe,Q=A.child,A.tag===22&&A.memoizedState!==null?fm(f):Q!==null?(Q.return=A,Qe=Q):fm(f);for(;g!==null;)Qe=g,um(g),g=g.sibling;Qe=f,hl=B,In=fe}dm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Qe=g):dm(n)}}function dm(n){for(;Qe!==null;){var i=Qe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:In||fl(5,i);break;case 1:var u=i.stateNode;if(i.flags&4&&!In)if(o===null)u.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:yi(i.type,o.memoizedProps);u.componentDidUpdate(f,o.memoizedState,u.__reactInternalSnapshotBeforeUpdate)}var g=i.updateQueue;g!==null&&hp(i,g,u);break;case 3:var A=i.updateQueue;if(A!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}hp(i,A,o)}break;case 5:var B=i.stateNode;if(o===null&&i.flags&4){o=B;var Q=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":Q.autoFocus&&o.focus();break;case"img":Q.src&&(o.src=Q.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var fe=i.alternate;if(fe!==null){var Ne=fe.memoizedState;if(Ne!==null){var Ie=Ne.dehydrated;Ie!==null&&wa(Ie)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}In||i.flags&512&&Hu(i)}catch(Ce){an(i,i.return,Ce)}}if(i===n){Qe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function hm(n){for(;Qe!==null;){var i=Qe;if(i===n){Qe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Qe=o;break}Qe=i.return}}function fm(n){for(;Qe!==null;){var i=Qe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{fl(4,i)}catch(Q){an(i,o,Q)}break;case 1:var u=i.stateNode;if(typeof u.componentDidMount=="function"){var f=i.return;try{u.componentDidMount()}catch(Q){an(i,f,Q)}}var g=i.return;try{Hu(i)}catch(Q){an(i,g,Q)}break;case 5:var A=i.return;try{Hu(i)}catch(Q){an(i,A,Q)}}}catch(Q){an(i,i.return,Q)}if(i===n){Qe=null;break}var B=i.sibling;if(B!==null){B.return=i.return,Qe=B;break}Qe=i.return}}var S0=Math.ceil,pl=N.ReactCurrentDispatcher,Wu=N.ReactCurrentOwner,hi=N.ReactCurrentBatchConfig,Ot=0,Sn=null,dn=null,Cn=0,ni=0,Hs=Sr(0),gn=0,$a=null,is=0,ml=0,Xu=0,qa=null,Vn=null,$u=0,Gs=1/0,rr=null,gl=!1,qu=null,Cr=null,xl=!1,Nr=null,vl=0,Ya=0,Yu=null,_l=-1,yl=0;function jn(){return(Ot&6)!==0?Zt():_l!==-1?_l:_l=Zt()}function Ar(n){return(n.mode&1)===0?1:(Ot&2)!==0&&Cn!==0?Cn&-Cn:r0.transition!==null?(yl===0&&(yl=Gt()),yl):(n=at,n!==0||(n=window.event,n=n===void 0?16:mf(n.type)),n)}function Ei(n,i,o,u){if(50<Ya)throw Ya=0,Yu=null,Error(t(185));sn(n,o,u),((Ot&2)===0||n!==Sn)&&(n===Sn&&((Ot&2)===0&&(ml|=o),gn===4&&Rr(n,Cn)),Wn(n,u),o===1&&Ot===0&&(i.mode&1)===0&&(Gs=Zt()+500,qo&&Er()))}function Wn(n,i){var o=n.callbackNode;Rt(n,i);var u=Ct(n,n===Sn?Cn:0);if(u===0)o!==null&&_a(o),n.callbackNode=null,n.callbackPriority=0;else if(i=u&-u,n.callbackPriority!==i){if(o!=null&&_a(o),i===1)n.tag===0?i0(mm.bind(null,n)):ep(mm.bind(null,n)),Jv(function(){(Ot&6)===0&&Er()}),o=null;else{switch(Di(u)){case 1:o=ya;break;case 4:o=Ao;break;case 16:o=Ms;break;case 536870912:o=R;break;default:o=Ms}o=Em(o,pm.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function pm(n,i){if(_l=-1,yl=0,(Ot&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Vs()&&n.callbackNode!==o)return null;var u=Ct(n,n===Sn?Cn:0);if(u===0)return null;if((u&30)!==0||(u&n.expiredLanes)!==0||i)i=Sl(n,u);else{i=u;var f=Ot;Ot|=2;var g=xm();(Sn!==n||Cn!==i)&&(rr=null,Gs=Zt()+500,ss(n,i));do try{w0();break}catch(B){gm(n,B)}while(!0);fu(),pl.current=g,Ot=f,dn!==null?i=0:(Sn=null,Cn=0,i=gn)}if(i!==0){if(i===2&&(f=Qt(n),f!==0&&(u=f,i=Ku(n,f))),i===1)throw o=$a,ss(n,0),Rr(n,u),Wn(n,Zt()),o;if(i===6)Rr(n,u);else{if(f=n.current.alternate,(u&30)===0&&!M0(f)&&(i=Sl(n,u),i===2&&(g=Qt(n),g!==0&&(u=g,i=Ku(n,g))),i===1))throw o=$a,ss(n,0),Rr(n,u),Wn(n,Zt()),o;switch(n.finishedWork=f,n.finishedLanes=u,i){case 0:case 1:throw Error(t(345));case 2:as(n,Vn,rr);break;case 3:if(Rr(n,u),(u&130023424)===u&&(i=$u+500-Zt(),10<i)){if(Ct(n,0)!==0)break;if(f=n.suspendedLanes,(f&u)!==u){jn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=nu(as.bind(null,n,Vn,rr),i);break}as(n,Vn,rr);break;case 4:if(Rr(n,u),(u&4194240)===u)break;for(i=n.eventTimes,f=-1;0<u;){var A=31-se(u);g=1<<A,A=i[A],A>f&&(f=A),u&=~g}if(u=f,u=Zt()-u,u=(120>u?120:480>u?480:1080>u?1080:1920>u?1920:3e3>u?3e3:4320>u?4320:1960*S0(u/1960))-u,10<u){n.timeoutHandle=nu(as.bind(null,n,Vn,rr),u);break}as(n,Vn,rr);break;case 5:as(n,Vn,rr);break;default:throw Error(t(329))}}}return Wn(n,Zt()),n.callbackNode===o?pm.bind(null,n):null}function Ku(n,i){var o=qa;return n.current.memoizedState.isDehydrated&&(ss(n,i).flags|=256),n=Sl(n,i),n!==2&&(i=Vn,Vn=o,i!==null&&Zu(i)),n}function Zu(n){Vn===null?Vn=n:Vn.push.apply(Vn,n)}function M0(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var u=0;u<o.length;u++){var f=o[u],g=f.getSnapshot;f=f.value;try{if(!vi(g(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function Rr(n,i){for(i&=~Xu,i&=~ml,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-se(i),u=1<<o;n[o]=-1,i&=~u}}function mm(n){if((Ot&6)!==0)throw Error(t(327));Vs();var i=Ct(n,0);if((i&1)===0)return Wn(n,Zt()),null;var o=Sl(n,i);if(n.tag!==0&&o===2){var u=Qt(n);u!==0&&(i=u,o=Ku(n,u))}if(o===1)throw o=$a,ss(n,0),Rr(n,i),Wn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,as(n,Vn,rr),Wn(n,Zt()),null}function Qu(n,i){var o=Ot;Ot|=1;try{return n(i)}finally{Ot=o,Ot===0&&(Gs=Zt()+500,qo&&Er())}}function rs(n){Nr!==null&&Nr.tag===0&&(Ot&6)===0&&Vs();var i=Ot;Ot|=1;var o=hi.transition,u=at;try{if(hi.transition=null,at=1,n)return n()}finally{at=u,hi.transition=o,Ot=i,(Ot&6)===0&&Er()}}function Ju(){ni=Hs.current,Kt(Hs)}function ss(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,Qv(o)),dn!==null)for(o=dn.return;o!==null;){var u=o;switch(lu(u),u.tag){case 1:u=u.type.childContextTypes,u!=null&&Xo();break;case 3:js(),Kt(Bn),Kt(Pn),Su();break;case 5:_u(u);break;case 4:js();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:pu(u.type._context);break;case 22:case 23:Ju()}o=o.return}if(Sn=n,dn=n=Pr(n.current,null),Cn=ni=i,gn=0,$a=null,Xu=ml=is=0,Vn=qa=null,es!==null){for(i=0;i<es.length;i++)if(o=es[i],u=o.interleaved,u!==null){o.interleaved=null;var f=u.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,u.next=A}o.pending=u}es=null}return n}function gm(n,i){do{var o=dn;try{if(fu(),rl.current=ll,sl){for(var u=nn.memoizedState;u!==null;){var f=u.queue;f!==null&&(f.pending=null),u=u.next}sl=!1}if(ns=0,yn=mn=nn=null,Ba=!1,Ha=0,Wu.current=null,o===null||o.return===null){gn=1,$a=i,dn=null;break}e:{var g=n,A=o.return,B=o,Q=i;if(i=Cn,B.flags|=32768,Q!==null&&typeof Q=="object"&&typeof Q.then=="function"){var fe=Q,Ne=B,Ie=Ne.tag;if((Ne.mode&1)===0&&(Ie===0||Ie===11||Ie===15)){var Ce=Ne.alternate;Ce?(Ne.updateQueue=Ce.updateQueue,Ne.memoizedState=Ce.memoizedState,Ne.lanes=Ce.lanes):(Ne.updateQueue=null,Ne.memoizedState=null)}var Ke=Bp(A);if(Ke!==null){Ke.flags&=-257,Hp(Ke,A,B,g,i),Ke.mode&1&&zp(g,fe,i),i=Ke,Q=fe;var nt=i.updateQueue;if(nt===null){var it=new Set;it.add(Q),i.updateQueue=it}else nt.add(Q);break e}else{if((i&1)===0){zp(g,fe,i),ed();break e}Q=Error(t(426))}}else if(Jt&&B.mode&1){var cn=Bp(A);if(cn!==null){(cn.flags&65536)===0&&(cn.flags|=256),Hp(cn,A,B,g,i),du(zs(Q,B));break e}}g=Q=zs(Q,B),gn!==4&&(gn=2),qa===null?qa=[g]:qa.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,i&=-i,g.lanes|=i;var oe=Op(g,Q,i);dp(g,oe);break e;case 1:B=Q;var ne=g.type,ue=g.stateNode;if((g.flags&128)===0&&(typeof ne.getDerivedStateFromError=="function"||ue!==null&&typeof ue.componentDidCatch=="function"&&(Cr===null||!Cr.has(ue)))){g.flags|=65536,i&=-i,g.lanes|=i;var Oe=jp(g,B,i);dp(g,Oe);break e}}g=g.return}while(g!==null)}_m(o)}catch(lt){i=lt,dn===o&&o!==null&&(dn=o=o.return);continue}break}while(!0)}function xm(){var n=pl.current;return pl.current=ll,n===null?ll:n}function ed(){(gn===0||gn===3||gn===2)&&(gn=4),Sn===null||(is&268435455)===0&&(ml&268435455)===0||Rr(Sn,Cn)}function Sl(n,i){var o=Ot;Ot|=2;var u=xm();(Sn!==n||Cn!==i)&&(rr=null,ss(n,i));do try{E0();break}catch(f){gm(n,f)}while(!0);if(fu(),Ot=o,pl.current=u,dn!==null)throw Error(t(261));return Sn=null,Cn=0,gn}function E0(){for(;dn!==null;)vm(dn)}function w0(){for(;dn!==null&&!Yr();)vm(dn)}function vm(n){var i=Mm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?_m(n):dn=i,Wu.current=null}function _m(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=g0(o,i,ni),o!==null){dn=o;return}}else{if(o=x0(o,i),o!==null){o.flags&=32767,dn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{gn=6,dn=null;return}}if(i=i.sibling,i!==null){dn=i;return}dn=i=n}while(i!==null);gn===0&&(gn=5)}function as(n,i,o){var u=at,f=hi.transition;try{hi.transition=null,at=1,b0(n,i,o,u)}finally{hi.transition=f,at=u}return null}function b0(n,i,o,u){do Vs();while(Nr!==null);if((Ot&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(tt(n,g),n===Sn&&(dn=Sn=null,Cn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||xl||(xl=!0,Em(Ms,function(){return Vs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=hi.transition,hi.transition=null;var A=at;at=1;var B=Ot;Ot|=4,Wu.current=null,_0(n,o),cm(o,n),Wv(eu),Lo=!!Jc,eu=Jc=null,n.current=o,y0(o),Dc(),Ot=B,at=A,hi.transition=g}else n.current=o;if(xl&&(xl=!1,Nr=n,vl=f),g=n.pendingLanes,g===0&&(Cr=null),ae(o.stateNode),Wn(n,Zt()),i!==null)for(u=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],u(f.value,{componentStack:f.stack,digest:f.digest});if(gl)throw gl=!1,n=qu,qu=null,n;return(vl&1)!==0&&n.tag!==0&&Vs(),g=n.pendingLanes,(g&1)!==0?n===Yu?Ya++:(Ya=0,Yu=n):Ya=0,Er(),null}function Vs(){if(Nr!==null){var n=Di(vl),i=hi.transition,o=at;try{if(hi.transition=null,at=16>n?16:n,Nr===null)var u=!1;else{if(n=Nr,Nr=null,vl=0,(Ot&6)!==0)throw Error(t(331));var f=Ot;for(Ot|=4,Qe=n.current;Qe!==null;){var g=Qe,A=g.child;if((Qe.flags&16)!==0){var B=g.deletions;if(B!==null){for(var Q=0;Q<B.length;Q++){var fe=B[Q];for(Qe=fe;Qe!==null;){var Ne=Qe;switch(Ne.tag){case 0:case 11:case 15:Xa(8,Ne,g)}var Ie=Ne.child;if(Ie!==null)Ie.return=Ne,Qe=Ie;else for(;Qe!==null;){Ne=Qe;var Ce=Ne.sibling,Ke=Ne.return;if(rm(Ne),Ne===fe){Qe=null;break}if(Ce!==null){Ce.return=Ke,Qe=Ce;break}Qe=Ke}}}var nt=g.alternate;if(nt!==null){var it=nt.child;if(it!==null){nt.child=null;do{var cn=it.sibling;it.sibling=null,it=cn}while(it!==null)}}Qe=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,Qe=A;else e:for(;Qe!==null;){if(g=Qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Xa(9,g,g.return)}var oe=g.sibling;if(oe!==null){oe.return=g.return,Qe=oe;break e}Qe=g.return}}var ne=n.current;for(Qe=ne;Qe!==null;){A=Qe;var ue=A.child;if((A.subtreeFlags&2064)!==0&&ue!==null)ue.return=A,Qe=ue;else e:for(A=ne;Qe!==null;){if(B=Qe,(B.flags&2048)!==0)try{switch(B.tag){case 0:case 11:case 15:fl(9,B)}}catch(lt){an(B,B.return,lt)}if(B===A){Qe=null;break e}var Oe=B.sibling;if(Oe!==null){Oe.return=B.return,Qe=Oe;break e}Qe=B.return}}if(Ot=f,Er(),ce&&typeof ce.onPostCommitFiberRoot=="function")try{ce.onPostCommitFiberRoot(Z,n)}catch{}u=!0}return u}finally{at=o,hi.transition=i}}return!1}function ym(n,i,o){i=zs(o,i),i=Op(n,i,1),n=br(n,i,1),i=jn(),n!==null&&(sn(n,1,i),Wn(n,i))}function an(n,i,o){if(n.tag===3)ym(n,n,o);else for(;i!==null;){if(i.tag===3){ym(i,n,o);break}else if(i.tag===1){var u=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Cr===null||!Cr.has(u))){n=zs(o,n),n=jp(i,n,1),i=br(i,n,1),n=jn(),i!==null&&(sn(i,1,n),Wn(i,n));break}}i=i.return}}function T0(n,i,o){var u=n.pingCache;u!==null&&u.delete(i),i=jn(),n.pingedLanes|=n.suspendedLanes&o,Sn===n&&(Cn&o)===o&&(gn===4||gn===3&&(Cn&130023424)===Cn&&500>Zt()-$u?ss(n,0):Xu|=o),Wn(n,i)}function Sm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Je,Je<<=1,(Je&130023424)===0&&(Je=4194304)));var o=jn();n=tr(n,i),n!==null&&(sn(n,i,o),Wn(n,o))}function C0(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Sm(n,o)}function N0(n,i){var o=0;switch(n.tag){case 13:var u=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:u=n.stateNode;break;default:throw Error(t(314))}u!==null&&u.delete(i),Sm(n,o)}var Mm;Mm=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Bn.current)Gn=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return Gn=!1,m0(n,i,o);Gn=(n.flags&131072)!==0}else Gn=!1,Jt&&(i.flags&1048576)!==0&&tp(i,Ko,i.index);switch(i.lanes=0,i.tag){case 2:var u=i.type;dl(n,i),n=i.pendingProps;var f=Ls(i,Pn.current);Os(i,o),f=wu(null,i,u,n,f,o);var g=bu();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Hn(u)?(g=!0,$o(i)):g=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,xu(i),f.updater=cl,i.stateNode=f,f._reactInternals=i,Pu(i,u,n,o),i=ku(null,i,u,!0,g,o)):(i.tag=0,Jt&&g&&ou(i),On(null,i,f,o),i=i.child),i;case 16:u=i.elementType;e:{switch(dl(n,i),n=i.pendingProps,f=u._init,u=f(u._payload),i.type=u,f=i.tag=R0(u),n=yi(u,n),f){case 0:i=Iu(null,i,u,n,o);break e;case 1:i=qp(null,i,u,n,o);break e;case 11:i=Gp(null,i,u,n,o);break e;case 14:i=Vp(null,i,u,yi(u.type,n),o);break e}throw Error(t(306,u,""))}return i;case 0:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),Iu(n,i,u,f,o);case 1:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),qp(n,i,u,f,o);case 3:e:{if(Yp(i),n===null)throw Error(t(387));u=i.pendingProps,g=i.memoizedState,f=g.element,up(n,i),nl(i,u,null,o);var A=i.memoizedState;if(u=A.element,g.isDehydrated)if(g={element:u,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},i.updateQueue.baseState=g,i.memoizedState=g,i.flags&256){f=zs(Error(t(423)),i),i=Kp(n,i,u,o,f);break e}else if(u!==f){f=zs(Error(t(424)),i),i=Kp(n,i,u,o,f);break e}else for(ti=yr(i.stateNode.containerInfo.firstChild),ei=i,Jt=!0,_i=null,o=lp(i,null,u,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(ks(),u===f){i=ir(n,i,o);break e}On(n,i,u,o)}i=i.child}return i;case 5:return fp(i),n===null&&uu(i),u=i.type,f=i.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,tu(u,f)?A=null:g!==null&&tu(u,g)&&(i.flags|=32),$p(n,i),On(n,i,A,o),i.child;case 6:return n===null&&uu(i),null;case 13:return Zp(n,i,o);case 4:return vu(i,i.stateNode.containerInfo),u=i.pendingProps,n===null?i.child=Us(i,null,u,o):On(n,i,u,o),i.child;case 11:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),Gp(n,i,u,f,o);case 7:return On(n,i,i.pendingProps,o),i.child;case 8:return On(n,i,i.pendingProps.children,o),i.child;case 12:return On(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(u=i.type._context,f=i.pendingProps,g=i.memoizedProps,A=f.value,$t(Jo,u._currentValue),u._currentValue=A,g!==null)if(vi(g.value,A)){if(g.children===f.children&&!Bn.current){i=ir(n,i,o);break e}}else for(g=i.child,g!==null&&(g.return=i);g!==null;){var B=g.dependencies;if(B!==null){A=g.child;for(var Q=B.firstContext;Q!==null;){if(Q.context===u){if(g.tag===1){Q=nr(-1,o&-o),Q.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Ne=fe.pending;Ne===null?Q.next=Q:(Q.next=Ne.next,Ne.next=Q),fe.pending=Q}}g.lanes|=o,Q=g.alternate,Q!==null&&(Q.lanes|=o),mu(g.return,o,i),B.lanes|=o;break}Q=Q.next}}else if(g.tag===10)A=g.type===i.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,B=A.alternate,B!==null&&(B.lanes|=o),mu(A,o,i),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===i){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}On(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,u=i.pendingProps.children,Os(i,o),f=ui(f),u=u(f),i.flags|=1,On(n,i,u,o),i.child;case 14:return u=i.type,f=yi(u,i.pendingProps),f=yi(u.type,f),Vp(n,i,u,f,o);case 15:return Wp(n,i,i.type,i.pendingProps,o);case 17:return u=i.type,f=i.pendingProps,f=i.elementType===u?f:yi(u,f),dl(n,i),i.tag=1,Hn(u)?(n=!0,$o(i)):n=!1,Os(i,o),Up(i,u,f),Pu(i,u,f,o),ku(null,i,u,!0,n,o);case 19:return Jp(n,i,o);case 22:return Xp(n,i,o)}throw Error(t(156,i.tag))};function Em(n,i){return va(n,i)}function A0(n,i,o,u){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,o,u){return new A0(n,i,o,u)}function td(n){return n=n.prototype,!(!n||!n.isReactComponent)}function R0(n){if(typeof n=="function")return td(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ie)return 11;if(n===$)return 14}return 2}function Pr(n,i){var o=n.alternate;return o===null?(o=fi(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ml(n,i,o,u,f,g){var A=2;if(u=n,typeof n=="function")td(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case E:return os(o.children,f,g,i);case D:A=8,f|=8;break;case G:return n=fi(12,o,i,f|2),n.elementType=G,n.lanes=g,n;case J:return n=fi(13,o,i,f),n.elementType=J,n.lanes=g,n;case j:return n=fi(19,o,i,f),n.elementType=j,n.lanes=g,n;case q:return El(o,f,g,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:A=10;break e;case z:A=9;break e;case ie:A=11;break e;case $:A=14;break e;case te:A=16,u=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=fi(A,o,i,f),i.elementType=n,i.type=u,i.lanes=g,i}function os(n,i,o,u){return n=fi(7,n,u,i),n.lanes=o,n}function El(n,i,o,u){return n=fi(22,n,u,i),n.elementType=q,n.lanes=o,n.stateNode={isHidden:!1},n}function nd(n,i,o){return n=fi(6,n,null,i),n.lanes=o,n}function id(n,i,o){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function P0(n,i,o,u,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ht(0),this.expirationTimes=Ht(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ht(0),this.identifierPrefix=u,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function rd(n,i,o,u,f,g,A,B,Q){return n=new P0(n,i,o,B,Q),i===1?(i=1,g===!0&&(i|=8)):i=0,g=fi(3,null,null,i),n.current=g,g.stateNode=n,g.memoizedState={element:u,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},xu(g),n}function L0(n,i,o){var u=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:k,key:u==null?null:""+u,children:n,containerInfo:i,implementation:o}}function wm(n){if(!n)return Mr;n=n._reactInternals;e:{if(Pi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Hn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Hn(o))return Qf(n,o,i)}return i}function bm(n,i,o,u,f,g,A,B,Q){return n=rd(o,u,!0,n,f,g,A,B,Q),n.context=wm(null),o=n.current,u=jn(),f=Ar(o),g=nr(u,f),g.callback=i??null,br(o,g,f),n.current.lanes=f,sn(n,f,u),Wn(n,u),n}function wl(n,i,o,u){var f=i.current,g=jn(),A=Ar(f);return o=wm(o),i.context===null?i.context=o:i.pendingContext=o,i=nr(g,A),i.payload={element:n},u=u===void 0?null:u,u!==null&&(i.callback=u),n=br(f,i,A),n!==null&&(Ei(n,f,A,g),tl(n,f,A)),A}function bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Tm(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function sd(n,i){Tm(n,i),(n=n.alternate)&&Tm(n,i)}function D0(){return null}var Cm=typeof reportError=="function"?reportError:function(n){console.error(n)};function ad(n){this._internalRoot=n}Tl.prototype.render=ad.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));wl(n,i,null,null)},Tl.prototype.unmount=ad.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;rs(function(){wl(null,n,null,null)}),i[Zi]=null}};function Tl(n){this._internalRoot=n}Tl.prototype.unstable_scheduleHydration=function(n){if(n){var i=Ii();n={blockedOn:null,target:n,priority:i};for(var o=0;o<xr.length&&i!==0&&i<xr[o].priority;o++);xr.splice(o,0,n),o===0&&ff(n)}};function od(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Cl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Nm(){}function I0(n,i,o,u,f){if(f){if(typeof u=="function"){var g=u;u=function(){var fe=bl(A);g.call(fe)}}var A=bm(i,u,n,0,null,!1,!1,"",Nm);return n._reactRootContainer=A,n[Zi]=A.current,Da(n.nodeType===8?n.parentNode:n),rs(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof u=="function"){var B=u;u=function(){var fe=bl(Q);B.call(fe)}}var Q=rd(n,0,!1,null,null,!1,!1,"",Nm);return n._reactRootContainer=Q,n[Zi]=Q.current,Da(n.nodeType===8?n.parentNode:n),rs(function(){wl(i,Q,o,u)}),Q}function Nl(n,i,o,u,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var B=f;f=function(){var Q=bl(A);B.call(Q)}}wl(i,A,n,f)}else A=I0(o,i,n,f,u);return bl(A)}pn=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(fn(i,o|1),Wn(i,Zt()),(Ot&6)===0&&(Gs=Zt()+500,Er()))}break;case 13:rs(function(){var u=tr(n,1);if(u!==null){var f=jn();Ei(u,n,1,f)}}),sd(n,1)}},mr=function(n){if(n.tag===13){var i=tr(n,134217728);if(i!==null){var o=jn();Ei(i,n,134217728,o)}sd(n,134217728)}},xi=function(n){if(n.tag===13){var i=Ar(n),o=tr(n,i);if(o!==null){var u=jn();Ei(o,n,i,u)}sd(n,i)}},Ii=function(){return at},Lt=function(n,i){var o=at;try{return at=n,i()}finally{at=o}},xe=function(n,i,o){switch(i){case"input":if(bt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var u=o[i];if(u!==n&&u.form===n.form){var f=Wo(u);if(!f)throw Error(t(90));_t(u),bt(u,f)}}}break;case"textarea":U(n,o);break;case"select":i=o.value,i!=null&&Mt(n,!!o.multiple,i,!1)}},Fe=Qu,ze=rs;var k0={usingClientEntryPoint:!1,Events:[Ua,Rs,Wo,me,He,Qu]},Ka={findFiberByHostInstance:Kr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},U0={bundleType:Ka.bundleType,version:Ka.version,rendererPackageName:Ka.rendererPackageName,rendererConfig:Ka.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:N.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xa(n),n===null?null:n.stateNode},findFiberByHostInstance:Ka.findFiberByHostInstance||D0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Z=Al.inject(U0),ce=Al}catch{}}return Xn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=k0,Xn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!od(i))throw Error(t(200));return L0(n,i,null,o)},Xn.createRoot=function(n,i){if(!od(n))throw Error(t(299));var o=!1,u="",f=Cm;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(u=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=rd(n,1,!1,null,null,o,!1,u,f),n[Zi]=i.current,Da(n.nodeType===8?n.parentNode:n),new ad(i)},Xn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xa(i),n=n===null?null:n.stateNode,n},Xn.flushSync=function(n){return rs(n)},Xn.hydrate=function(n,i,o){if(!Cl(i))throw Error(t(200));return Nl(null,n,i,!0,o)},Xn.hydrateRoot=function(n,i,o){if(!od(n))throw Error(t(405));var u=o!=null&&o.hydratedSources||null,f=!1,g="",A=Cm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),i=bm(i,null,n,1,o??null,f,!1,g,A),n[Zi]=i.current,Da(n),u)for(n=0;n<u.length;n++)o=u[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new Tl(i)},Xn.render=function(n,i,o){if(!Cl(i))throw Error(t(200));return Nl(null,n,i,!1,o)},Xn.unmountComponentAtNode=function(n){if(!Cl(n))throw Error(t(40));return n._reactRootContainer?(rs(function(){Nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Zi]=null})}),!0):!1},Xn.unstable_batchedUpdates=Qu,Xn.unstable_renderSubtreeIntoContainer=function(n,i,o,u){if(!Cl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Nl(n,i,o,!1,u)},Xn.version="18.3.1-next-f1338f8080-20240426",Xn}var Um;function W0(){if(Um)return ud.exports;Um=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),ud.exports=V0(),ud.exports}var Fm;function X0(){if(Fm)return Rl;Fm=1;var s=W0();return Rl.createRoot=s.createRoot,Rl.hydrateRoot=s.hydrateRoot,Rl}var $0=X0();const q0=Qg($0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y0=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Jg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var K0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z0=V.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:l="",children:c,iconNode:d,...h},p)=>V.createElement("svg",{ref:p,...K0,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:Jg("lucide",l),...h},[...d.map(([m,v])=>V.createElement(m,v)),...Array.isArray(c)?c:[c]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qe=(s,e)=>{const t=V.forwardRef(({className:r,...l},c)=>V.createElement(Z0,{ref:c,iconNode:e,className:Jg(`lucide-${Y0(s)}`,r),...l}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Q0=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],ex=qe("Activity",Q0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J0=[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]],fc=qe("ArrowLeft",J0);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const e_=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],co=qe("ArrowRight",e_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const t_=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],n_=qe("ArrowUpRight",t_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const i_=[["rect",{width:"18",height:"14",x:"3",y:"5",rx:"2",ry:"2",key:"12ruh7"}],["path",{d:"M7 15h4M15 15h2M7 11h2M13 11h4",key:"1ueiar"}]],tx=qe("Captions",i_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r_=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],wn=qe("Check",r_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s_=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],a_=qe("ChevronDown",s_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const o_=[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]],l_=qe("ChevronRight",o_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c_=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],u_=qe("ChevronUp",c_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]],uo=qe("CircleAlert",d_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h_=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],Xd=qe("CircleCheckBig",h_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],nx=qe("CircleCheck",f_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],pr=qe("Clock",p_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m_=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Om=qe("Compass",m_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g_=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],aa=qe("Copy",g_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x_=[["polyline",{points:"9 10 4 15 9 20",key:"r3jprv"}],["path",{d:"M20 4v7a4 4 0 0 1-4 4H4",key:"6o5b7l"}]],v_=qe("CornerDownLeft",x_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const __=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]],jm=qe("Download",__);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y_=[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]],zm=qe("EllipsisVertical",y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S_=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Bm=qe("ExternalLink",S_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const M_=[["path",{d:"M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",key:"ct8e1f"}],["path",{d:"M14.084 14.158a3 3 0 0 1-4.242-4.242",key:"151rxh"}],["path",{d:"M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",key:"13bj9a"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],ix=qe("EyeOff",M_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E_=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],rx=qe("Eye",E_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M7 3v18",key:"bbkbws"}],["path",{d:"M3 7.5h4",key:"zfgn84"}],["path",{d:"M3 12h18",key:"1i2n21"}],["path",{d:"M3 16.5h4",key:"1230mu"}],["path",{d:"M17 3v18",key:"in4fa5"}],["path",{d:"M17 7.5h4",key:"myr1c1"}],["path",{d:"M17 16.5h4",key:"go4c1d"}]],ai=qe("Film",w_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const b_=[["path",{d:"M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z",key:"96xj49"}]],sx=qe("Flame",b_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const T_=[["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],jr=qe("FolderMinus",T_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const C_=[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]],fs=qe("FolderOpen",C_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const N_=[["path",{d:"M12 10v6",key:"1bos4e"}],["path",{d:"M9 13h6",key:"1uhe8q"}],["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ax=qe("FolderPlus",N_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A_=[["path",{d:"M9 20H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H20a2 2 0 0 1 2 2v.5",key:"1dkoa9"}],["path",{d:"M12 10v4h4",key:"1czhmt"}],["path",{d:"m12 14 1.535-1.605a5 5 0 0 1 8 1.5",key:"lvuxfi"}],["path",{d:"M22 22v-4h-4",key:"1ewp4q"}],["path",{d:"m22 18-1.535 1.605a5 5 0 0 1-8-1.5",key:"14ync0"}]],rc=qe("FolderSync",A_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const R_=[["path",{d:"M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z",key:"1kt360"}]],ao=qe("Folder",R_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],Tc=qe("Globe",P_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const L_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M3 9h18",key:"1pudct"}],["path",{d:"M3 15h18",key:"5xshup"}],["path",{d:"M9 3v18",key:"fh3hqa"}],["path",{d:"M15 3v18",key:"14nvp0"}]],Hm=qe("Grid3x3",L_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const D_=[["line",{x1:"22",x2:"2",y1:"12",y2:"12",key:"1y58io"}],["path",{d:"M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z",key:"oot6mr"}],["line",{x1:"6",x2:"6.01",y1:"16",y2:"16",key:"sgf278"}],["line",{x1:"10",x2:"10.01",y1:"16",y2:"16",key:"1l4acy"}]],$i=qe("HardDrive",D_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I_=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]],Ni=qe("Heart",I_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k_=[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]],Gm=qe("House",k_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const U_=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]],pc=qe("Image",U_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F_=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],ho=qe("Info",F_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=[["path",{d:"m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4",key:"g0fldk"}],["path",{d:"m21 2-9.6 9.6",key:"1j0ho8"}],["circle",{cx:"7.5",cy:"15.5",r:"5.5",key:"yqb3hr"}]],j_=qe("Key",O_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const z_=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],zh=qe("Layers",z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const B_=[["rect",{width:"7",height:"9",x:"3",y:"3",rx:"1",key:"10lvy0"}],["rect",{width:"7",height:"5",x:"14",y:"3",rx:"1",key:"16une8"}],["rect",{width:"7",height:"9",x:"14",y:"12",rx:"1",key:"1hutg5"}],["rect",{width:"7",height:"5",x:"3",y:"16",rx:"1",key:"ldoo1y"}]],H_=qe("LayoutDashboard",B_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const G_=[["rect",{width:"7",height:"7",x:"3",y:"3",rx:"1",key:"1g98yp"}],["rect",{width:"7",height:"7",x:"14",y:"3",rx:"1",key:"6d4xhi"}],["rect",{width:"7",height:"7",x:"14",y:"14",rx:"1",key:"nxv5o0"}],["rect",{width:"7",height:"7",x:"3",y:"14",rx:"1",key:"1bb6yr"}]],V_=qe("LayoutGrid",G_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W_=[["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 18h.01",key:"1tta3j"}],["path",{d:"M3 6h.01",key:"1rqtza"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 18h13",key:"1lx6n3"}],["path",{d:"M8 6h13",key:"ik3vkj"}]],X_=qe("List",W_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $_=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Cc=qe("Lock",$_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const q_=[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]],Vm=qe("LogOut",q_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Y_=[["path",{d:"M8 3H5a2 2 0 0 0-2 2v3",key:"1dcmit"}],["path",{d:"M21 8V5a2 2 0 0 0-2-2h-3",key:"1e4gt3"}],["path",{d:"M3 16v3a2 2 0 0 0 2 2h3",key:"wsl5sc"}],["path",{d:"M16 21h3a2 2 0 0 0 2-2v-3",key:"18trek"}]],K_=qe("Maximize",Y_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z_=[["path",{d:"M8 3v3a2 2 0 0 1-2 2H3",key:"hohbtr"}],["path",{d:"M21 8h-3a2 2 0 0 1-2-2V3",key:"5jw1f3"}],["path",{d:"M3 16h3a2 2 0 0 1 2 2v3",key:"198tvr"}],["path",{d:"M16 21v-3a2 2 0 0 1 2-2h3",key:"ph8mxp"}]],Q_=qe("Minimize",Z_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J_=[["rect",{width:"20",height:"14",x:"2",y:"3",rx:"2",key:"48i651"}],["line",{x1:"8",x2:"16",y1:"21",y2:"21",key:"1svkeh"}],["line",{x1:"12",x2:"12",y1:"17",y2:"21",key:"vw1qmm"}]],Bh=qe("Monitor",J_);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ey=[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1",key:"zuxfzm"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1",key:"1okwgv"}]],fd=qe("Pause",ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ty=[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]],un=qe("Play",ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ny=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Hh=qe("Plus",ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iy=[["rect",{width:"5",height:"5",x:"3",y:"3",rx:"1",key:"1tu5fj"}],["rect",{width:"5",height:"5",x:"16",y:"3",rx:"1",key:"1v8r4q"}],["rect",{width:"5",height:"5",x:"3",y:"16",rx:"1",key:"1x03jg"}],["path",{d:"M21 16h-3a2 2 0 0 0-2 2v3",key:"177gqh"}],["path",{d:"M21 21v.01",key:"ents32"}],["path",{d:"M12 7v3a2 2 0 0 1-2 2H7",key:"8crl2c"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M12 3h.01",key:"n36tog"}],["path",{d:"M12 16v.01",key:"133mhm"}],["path",{d:"M16 12h1",key:"1slzba"}],["path",{d:"M21 12v.01",key:"1lwtk9"}],["path",{d:"M12 21v-1",key:"1880an"}]],ry=qe("QrCode",iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sy=[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9",key:"1vaf9d"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5",key:"u1ii0m"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5",key:"1j5fej"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19",key:"10b0cb"}]],ay=qe("Radio",sy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oy=[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]],Ri=qe("RefreshCw",oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ly=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],oo=qe("RotateCcw",ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cy=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],sc=qe("RotateCw",cy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uy=[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]],ps=qe("Search",uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const dy=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],hy=qe("Server",dy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fy=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],py=qe("Shield",fy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const my=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],ox=qe("SlidersVertical",my);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gy=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Yn=qe("Sparkles",gy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xy=[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],mc=qe("SquareCheckBig",xy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vy=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]],ca=qe("Square",vy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _y=[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]],Wm=qe("Star",_y);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const yy=[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]],Sy=qe("Tag",yy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const My=[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]],Vr=qe("Trash2",My);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ey=[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]],wy=qe("TrendingUp",Ey);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const by=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],fo=qe("TriangleAlert",by);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ty=[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]],Cy=qe("Upload",Ty);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ny=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]],Ay=qe("UserPlus",Ny);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ry=[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]],lx=qe("User",Ry);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Py=[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]],Gh=qe("Users",Py);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ly=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],Dy=qe("Volume2",Ly);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iy=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],ky=qe("VolumeX",Iy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uy=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}],["path",{d:"M5 12.859a10 10 0 0 1 5.17-2.69",key:"1dl1wf"}],["path",{d:"M19 12.859a10 10 0 0 0-2.007-1.523",key:"4k23kn"}],["path",{d:"M2 8.82a15 15 0 0 1 4.177-2.643",key:"1grhjp"}],["path",{d:"M22 8.82a15 15 0 0 0-11.288-3.764",key:"z3jwby"}],["path",{d:"m2 2 20 20",key:"1ooewy"}]],Fy=qe("WifiOff",Uy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Oy=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],jy=qe("Wifi",Oy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zy=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Wi=qe("X",zy);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const By=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Vh=qe("Zap",By);function hs(){if(typeof window<"u"){const s=localStorage.getItem("streamlink_api_url");if(s){const e=s.trim().replace(/\/+$/,"");if(e.includes("your-temporary-url")||e.includes("your-tunnel")||e.includes("sponsored-fee-imposed-associations")||e==="https://"||e==="http://")localStorage.removeItem("streamlink_api_url");else return e}}return"".trim().replace(/\/+$/,"")}function Xm(s){typeof window<"u"&&(!s||!s.trim()?localStorage.removeItem("streamlink_api_url"):localStorage.setItem("streamlink_api_url",s.trim().replace(/\/+$/,"")))}function on(s){if(!s)return"";if(s.startsWith("http://")||s.startsWith("https://"))return s;const e=hs(),t=s.startsWith("/")?s:`/${s}`;return e?`${e}${t}`:t}const cx=V.createContext(null);function Hy({children:s}){const[e,t]=V.useState(null),[r,l]=V.useState(()=>localStorage.getItem("streamlink_token")),[c,d]=V.useState(!0);V.useEffect(()=>{r?fetch(on("/api/auth/me"),{headers:{Authorization:`Bearer ${r}`}}).then(v=>{if(v.ok)return v.json();throw new Error("Session invalid")}).then(v=>{t(v.user)}).catch(()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)}).finally(()=>d(!1)):d(!1)},[r]);const h=async(v,M)=>{const _=await fetch(on("/api/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:v,password:M})}),S=await _.json();if(!_.ok)throw new Error(S.error||"Login failed");return localStorage.setItem("streamlink_token",S.token),l(S.token),t(S.user),S.user},p=()=>{localStorage.removeItem("streamlink_token"),l(null),t(null)},m=(v,M={})=>{const _={...M.headers,Authorization:`Bearer ${r}`};return fetch(on(v),{...M,headers:_})};return a.jsx(cx.Provider,{value:{user:e,token:r,login:h,logout:p,authFetch:m,loading:c},children:s})}function Wh(){return V.useContext(cx)}function Gy({currentView:s,setCurrentView:e,onOpenSearch:t,onOpenProfiles:r,onOpenQuality:l,currentProfile:c,qualityLevel:d="high"}){var m,v,M,_,S,w,T,x;const{user:h,logout:p}=Wh();return a.jsxs(a.Fragment,{children:[a.jsxs("header",{className:"app-mobile-top-bar",children:[a.jsxs("div",{className:"mobile-brand-pill",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(ai,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"mobile-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"mobile-version-tag",children:"2.0"})]}),a.jsxs("span",{className:"mobile-live-dot",title:"Server Online",children:[a.jsx(ay,{size:11,className:"pulse-icon"}),"LIVE"]})]}),a.jsxs("div",{className:"mobile-top-right",children:[a.jsx("button",{className:"mobile-search-btn",onClick:t,title:"Search (/)",children:a.jsx(ps,{size:16})}),a.jsx("button",{className:"mobile-profile-btn",onClick:r,style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},title:"Switch Profile",children:a.jsx("span",{children:((v=(m=c==null?void 0:c.name)==null?void 0:m[0])==null?void 0:v.toUpperCase())||((_=(M=h==null?void 0:h.username)==null?void 0:M[0])==null?void 0:_.toUpperCase())||"U"})}),a.jsx("button",{className:"mobile-logout-btn",onClick:p,title:"Sign Out",children:a.jsx(Vm,{size:15})})]})]}),a.jsxs("aside",{className:"app-sidebar",children:[a.jsxs("div",{className:"sidebar-brand",onClick:()=>e("home"),children:[a.jsx("div",{className:"sidebar-logo-icon",children:a.jsx(ai,{size:20,strokeWidth:2.5})}),a.jsxs("div",{className:"sidebar-brand-text",children:[a.jsxs("span",{children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})," ",a.jsx("span",{className:"version-pill",children:"2.0"})]}),a.jsx("span",{className:"sidebar-brand-sub",children:"OBSIDIAN CINEMA"})]})]}),a.jsxs("div",{className:"sidebar-search-action",onClick:t,children:[a.jsx(ps,{size:15,className:"text-cyan"}),a.jsx("span",{children:"Dimensional Search"}),a.jsx("kbd",{className:"sidebar-kbd",children:"/"})]}),a.jsxs("nav",{className:"sidebar-nav",children:[a.jsx("div",{className:"sidebar-nav-section-label",children:"EXPERIENCE"}),a.jsxs("button",{className:`sidebar-nav-item cine3d-nav-item ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(Yn,{size:18,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D Lobby"}),a.jsx("span",{className:"sidebar-badge-new",children:"3D"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(Gm,{size:18}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(ai,{size:18}),a.jsx("span",{children:"Movie Library"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Ni,{size:18}),a.jsx("span",{children:"My List & Favorites"})]}),(h==null?void 0:h.role)==="admin"&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SERVER & CONTROL"}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder-sharing"?"active":""}`,onClick:()=>e("folder-sharing"),children:[a.jsx(rc,{size:18}),a.jsx("span",{children:"Folder Sharing"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="folder"?"active":""}`,onClick:()=>e("folder"),children:[a.jsx(fs,{size:18}),a.jsx("span",{children:"Movie Folder"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="sharing"?"active":""}`,onClick:()=>e("sharing"),children:[a.jsx(Tc,{size:18}),a.jsx("span",{children:"Sharing Hub"})]}),a.jsxs("button",{className:`sidebar-nav-item ${s==="dashboard"?"active":""}`,onClick:()=>e("dashboard"),children:[a.jsx(H_,{size:18}),a.jsx("span",{children:"Server Dashboard"})]})]}),a.jsx("div",{className:"sidebar-nav-section-label",style:{marginTop:"16px"},children:"SYSTEM & QUALITY"}),a.jsxs("button",{className:"sidebar-nav-item quality-nav-pill",onClick:l,children:[a.jsx(ox,{size:17,className:"text-cyan"}),a.jsxs("div",{style:{flex:1,textAlign:"left"},children:[a.jsx("div",{children:"Quality Manager"}),a.jsx("div",{className:"sidebar-quality-badge",children:d.toUpperCase()})]})]}),a.jsxs("button",{className:"sidebar-nav-item",onClick:r,children:[a.jsx(Gh,{size:17}),a.jsx("span",{children:"Switch Profile"})]})]}),a.jsx("div",{className:"sidebar-footer",children:a.jsxs("div",{className:"sidebar-user-pill",onClick:r,title:"Manage Profiles",children:[a.jsx("div",{className:"user-avatar-dot",style:{backgroundColor:(c==null?void 0:c.avatar_color)||"#8B5CF6"},children:a.jsx("span",{children:((w=(S=c==null?void 0:c.name)==null?void 0:S[0])==null?void 0:w.toUpperCase())||((x=(T=h==null?void 0:h.username)==null?void 0:T[0])==null?void 0:x.toUpperCase())||"U"})}),a.jsxs("div",{style:{flex:1,minWidth:0},children:[a.jsx("div",{className:"sidebar-username",children:(c==null?void 0:c.name)||(h==null?void 0:h.username)}),a.jsx("div",{className:"sidebar-role",children:(h==null?void 0:h.role)==="admin"?"Host Administrator":"Viewer"})]}),a.jsx("button",{className:"sidebar-logout-btn",onClick:y=>{y.stopPropagation(),p()},title:"Sign Out",children:a.jsx(Vm,{size:15})})]})})]}),a.jsxs("nav",{className:"app-mobile-bottom-nav",children:[a.jsxs("button",{className:`mobile-nav-btn ${s==="home"?"active":""}`,onClick:()=>e("home"),children:[a.jsx(Gm,{size:20}),a.jsx("span",{children:"Home"})]}),a.jsxs("button",{className:`mobile-nav-btn cine3d-btn ${s==="cine3d"?"active":""}`,onClick:()=>e("cine3d"),children:[a.jsx(Yn,{size:20,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="library"?"active":""}`,onClick:()=>e("library"),children:[a.jsx(ai,{size:20}),a.jsx("span",{children:"Library"})]}),a.jsxs("button",{className:"mobile-nav-btn",onClick:t,children:[a.jsx(ps,{size:20}),a.jsx("span",{children:"Search"})]}),a.jsxs("button",{className:`mobile-nav-btn ${s==="favorites"?"active":""}`,onClick:()=>e("favorites"),children:[a.jsx(Ni,{size:20}),a.jsx("span",{children:"My List"})]})]})]})}function Xh(s){if(!s||typeof s!="string")return"Untitled Feature";let e=s;if(e=e.replace(/\.(mp4|mkv|avi|mov|webm|m4v|flv|ts)$/i,""),e=e.replace(/\.(com|org|net|ru|to|xyz|tv|io|moe)\b/gi,""),e=e.replace(/\b(moewalls|moe\s*walls|wallpaper\s*engine|live\s*wallpaper|wallpaper|wallpapers|desktophut)\b/gi,""),e=e.replace(/\b(1080p|720p|4k|2160p|uhd|hdr|hdr10|remux|bluray|bdrip|web-dl|webrip|dvdrip|h264|h265|x264|x265|hevc|aac|dts|ddp5\.1|10bit|atmos)\b/gi,""),e=e.replace(/\b(proper|repack|internal|extended|unrated|directors\.cut|dual\.audio|multi)\b/gi,""),e=e.replace(/[\._\-]+/g," "),e=e.replace(/[\[\]\(\)\{\}]/g," "),e=e.replace(/[,;:]+/g," "),e=e.replace(/\s+/g," ").trim(),!e)return s;const t=new Set(["a","an","and","as","at","but","by","for","in","nor","of","on","or","so","the","to","up","yet","with"]);return e.split(" ").map((c,d)=>{const h=c.toLowerCase();return d>0&&t.has(h)?h:h.charAt(0).toUpperCase()+h.slice(1)}).join(" ")}function Wr(s){if(!s||s<=0)return"Unknown";const e=Math.floor(s/3600),t=Math.floor(s%3600/60);return e>0?`${e}h ${t}m`:`${t}m`}function oi(s){if(!s||s<=0)return"0 MB";const e=s/(1024*1024*1024);return e>=1?`${e.toFixed(2)} GB`:`${(s/(1024*1024)).toFixed(0)} MB`}function zr({movie:s,onSelect:e,onToggleFavorite:t,onPlay:r,onChangePoster:l,onRemoveMovie:c,onDeleteFile:d,viewMode:h="grid",isSelectMode:p=!1,isSelected:m=!1,onToggleSelect:v=null}){const M=V.useRef(null),_=V.useRef(null),[S,w]=V.useState(!1),[T,x]=V.useState(!1),[y,C]=V.useState({x:0,y:0}),[I,N]=V.useState(!1),L=Xh(s.clean_title);V.useEffect(()=>{if(!T)return;const z=ie=>{_.current&&!_.current.contains(ie.target)&&x(!1)};return document.addEventListener("mousedown",z),()=>document.removeEventListener("mousedown",z)},[T]);const k=s.duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.duration*100)):s.watched_duration>0&&s.progress_seconds>0?Math.min(100,Math.round(s.progress_seconds/s.watched_duration*100)):0,E=z=>{if(!M.current||window.matchMedia("(prefers-reduced-motion: reduce)").matches||p)return;const ie=M.current.getBoundingClientRect(),J=(z.clientX-ie.left)/ie.width,$=((z.clientY-ie.top)/ie.height-.5)*-8,te=(J-.5)*8;C({x:$,y:te})},D=()=>{w(!0)},G=()=>{w(!1),C({x:0,y:0})},H=z=>{p?v&&v(s.id):e&&e(s)};return h==="list"?a.jsxs("div",{className:`movie-list-item ${m?"selected":""}`,onClick:H,children:[p&&a.jsx("button",{className:"select-checkbox-btn",onClick:z=>{z.stopPropagation(),v&&v(s.id)},children:m?a.jsx(mc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"})}),a.jsxs("div",{className:"movie-list-thumb",children:[a.jsx("img",{src:on(I?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:L,onError:()=>N(!0),loading:"lazy"}),!p&&r&&a.jsx("button",{className:"list-play-overlay",onClick:z=>{z.stopPropagation(),r(s)},title:"Play Movie",children:a.jsx(un,{size:16,fill:"#ffffff"})})]}),a.jsxs("div",{className:"movie-list-info",children:[a.jsxs("div",{className:"movie-list-title-row",children:[a.jsx("h4",{className:"movie-list-title",title:L,children:L}),s.resolution&&a.jsx("span",{className:"badge-studio",children:s.resolution})]}),a.jsxs("div",{className:"movie-list-meta",children:[s.year&&a.jsx("span",{className:"meta-tag",children:s.year}),a.jsxs("span",{className:"meta-tag",children:[a.jsx(pr,{size:12})," ",Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:12})," ",oi(s.file_size)]}),s.codec&&a.jsx("span",{className:"meta-tag",children:s.codec})]})]}),a.jsxs("div",{className:"movie-list-actions",children:[t&&a.jsx("button",{className:`fav-btn-clean ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Ni,{size:16,fill:s.is_favorite?"currentColor":"none"})}),!p&&r&&a.jsxs("button",{className:"btn-primary-sm",onClick:z=>{z.stopPropagation(),r(s)},children:[a.jsx(un,{size:13,fill:"#ffffff"}),a.jsx("span",{children:"Watch"})]}),a.jsxs("div",{className:"card-menu-container",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!T)},title:"Movie options",children:a.jsx(zm,{size:16})}),T&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(un,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(ho,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Ni,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(pc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(jr,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]})]})]}):a.jsxs("div",{ref:M,className:`movie-card-3d ${S?"hovered":""} ${m?"selected":""}`,onMouseMove:E,onMouseEnter:D,onMouseLeave:G,onClick:H,style:{transform:S&&!p?`perspective(800px) rotateX(${y.x}deg) rotateY(${y.y}deg) translateY(-5px)`:"perspective(800px) rotateX(0deg) rotateY(0deg) translateY(0px)"},children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:on(I?`/api/movies/${s.id}/poster?fallback=1`:`/api/movies/${s.id}/poster`),alt:L,className:"poster-img-3d",onError:()=>N(!0),loading:"lazy"}),a.jsx("div",{className:"poster-gloss-sheen"}),a.jsx("div",{className:"poster-vignette"}),p?a.jsx("div",{className:"select-checkbox-overlay",onClick:z=>{z.stopPropagation(),v&&v(s.id)},children:m?a.jsx(mc,{size:22,className:"checkbox-icon checked"}):a.jsx(ca,{size:22,className:"checkbox-icon"})}):a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("button",{className:"play-circle-3d",onClick:z=>{r&&(z.stopPropagation(),r(s))},title:"Play Movie",children:a.jsx(un,{size:22,fill:"#ffffff",strokeWidth:0})})}),s.resolution&&a.jsx("span",{className:"badge-studio badge-top-left",children:s.resolution}),s.year&&a.jsx("span",{className:"badge-studio badge-top-right",children:s.year}),!p&&a.jsxs("div",{className:"card-menu-container top-right-ctrl",ref:_,children:[a.jsx("button",{className:"card-menu-btn",onClick:z=>{z.stopPropagation(),x(!T)},title:"Movie options",children:a.jsx(zm,{size:16})}),T&&a.jsxs("div",{className:"card-menu-dropdown",onClick:z=>z.stopPropagation(),children:[r&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),r(s)},children:[a.jsx(un,{size:14}),a.jsx("span",{children:"Play Movie"})]}),e&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),e(s)},children:[a.jsx(ho,{size:14}),a.jsx("span",{children:"View Details"})]}),t&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),t(s.id)},children:[a.jsx(Ni,{size:14,fill:s.is_favorite?"currentColor":"none"}),a.jsx("span",{children:s.is_favorite?"Remove Favorite":"Add to Favorites"})]}),l&&a.jsxs("button",{className:"card-menu-item",onClick:()=>{x(!1),l(s)},children:[a.jsx(pc,{size:14}),a.jsx("span",{children:"Change Poster"})]}),a.jsx("div",{className:"card-menu-divider"}),c&&a.jsxs("button",{className:"card-menu-item text-warning",onClick:()=>{x(!1),c(s)},children:[a.jsx(jr,{size:14}),a.jsx("span",{children:"Remove from Library"})]}),d&&a.jsxs("button",{className:"card-menu-item text-danger",onClick:()=>{x(!1),d(s)},children:[a.jsx(Vr,{size:14}),a.jsx("span",{children:"Delete Movie File"})]})]})]}),!p&&t&&a.jsx("button",{className:`fav-btn-3d ${s.is_favorite?"active":""}`,onClick:z=>{z.stopPropagation(),t(s.id)},title:s.is_favorite?"Remove Favorite":"Add to Favorites",children:a.jsx(Ni,{size:14,fill:s.is_favorite?"currentColor":"none"})}),k>0&&a.jsx("div",{className:"progress-bar-container-3d",children:a.jsx("div",{className:"progress-bar-fill-3d",style:{width:`${k}%`}})})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:L,children:L}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(pr,{size:11}),Wr(s.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11}),oi(s.file_size)]})]})]})]})}const pd=new Map;async function ux(s){return s?pd.has(s)?pd.get(s):new Promise(e=>{const t=new Image;t.crossOrigin="Anonymous",t.onload=()=>{try{const r=document.createElement("canvas");r.width=24,r.height=24;const l=r.getContext("2d");if(!l){e("#B69AFF");return}l.drawImage(t,0,0,24,24);const c=l.getImageData(0,0,24,24).data;let d=0,h=0,p=0,m=0;for(let M=0;M<c.length;M+=4){const _=c[M],S=c[M+1],w=c[M+2],T=.299*_+.587*S+.114*w;T>30&&T<220&&(d+=_,h+=S,p+=w,m++)}let v="#B69AFF";if(m>0){const M=Math.round(d/m),_=Math.round(h/m),S=Math.round(p/m);v=`rgb(${M}, ${_}, ${S})`}pd.set(s,v),e(v)}catch{e("#B69AFF")}},t.onerror=()=>{e("#B69AFF")},t.src=s}):"#B69AFF"}function Vy({movie:s,onPlay:e,onDetails:t,onEnterCine3D:r,onToggleFavorite:l,isFavorite:c}){const d=V.useRef(null),[h,p]=V.useState({x:0,y:0}),[m,v]=V.useState("#8B5CF6"),[M,_]=V.useState({x:-4,y:12});if(V.useEffect(()=>{if(s!=null&&s.id){const y=on(`/api/movies/${s.id}/backdrop`);ux(y).then(C=>{C&&C!=="#080B14"&&v(C)})}},[s==null?void 0:s.id]),!s)return null;const S=Xh(s.clean_title),w=(s.resolution||"1080P").toUpperCase(),T=y=>{if(!d.current||!window.matchMedia("(pointer: fine)").matches)return;const C=d.current.getBoundingClientRect(),I=((y.clientX-C.left)/C.width-.5)*2,N=((y.clientY-C.top)/C.height-.5)*2;p({x:I*10,y:N*6}),_({x:N*-10-3,y:I*14+8})},x=()=>{p({x:0,y:0}),_({x:-4,y:12})};return a.jsxs("div",{ref:d,className:"hero-section-3d hero-genz",onMouseMove:T,onMouseLeave:x,children:[a.jsxs("div",{className:"hero-backdrop-layer",style:{transform:`translate3d(${h.x*-1}px, ${h.y*-1}px, 0) scale(1.05)`},children:[a.jsx("img",{src:on(`/api/movies/${s.id}/backdrop`),alt:S,className:"hero-bg-image"}),a.jsx("div",{className:"hero-gradient-overlay"})]}),a.jsx("div",{className:"hero-accent-light",style:{transform:`translate3d(${h.x*1.5}px, ${h.y*1.5}px, 0)`,background:`radial-gradient(circle, ${m}40 0%, ${m}15 45%, transparent 70%)`}}),a.jsxs("div",{className:"hero-content-layer hero-grid-layout",children:[a.jsxs("div",{className:"hero-content-left",style:{transform:`translate3d(${h.x*.4}px, ${h.y*.4}px, 0)`},children:[a.jsxs("div",{className:"hero-badge-row",children:[a.jsxs("span",{className:"hero-badge-pill-genz",children:[a.jsx(sx,{size:13,className:"flame-icon-pulse"}),a.jsx("span",{children:"#1 ON STREAMLINK"})]}),a.jsxs("span",{className:"hero-badge-quality-genz",children:[a.jsx(Yn,{size:11}),a.jsxs("span",{children:[w," ULTRA HD"]})]}),a.jsxs("span",{className:"hero-badge-score-genz",children:[a.jsx(Wm,{size:11,fill:"#FACC15",color:"#FACC15"}),a.jsx("span",{children:"9.8 SCORE"})]}),s.duration>0&&a.jsxs("span",{className:"hero-badge-duration-genz",children:[a.jsx(pr,{size:11}),a.jsx("span",{children:Wr(s.duration)})]}),s.year&&a.jsx("span",{className:"hero-badge-year-genz",children:s.year})]}),a.jsx("h1",{className:"hero-title hero-title-genz",title:S,children:S}),a.jsxs("div",{className:"hero-meta-strip-genz",children:[a.jsx("span",{className:"tech-pill",children:"Direct Bitrate"}),a.jsx("span",{className:"tech-divider",children:"•"}),a.jsx("span",{className:"tech-pill",children:s.codec||"H.264 / HEVC"}),a.jsx("span",{className:"tech-divider",children:"•"}),a.jsx("span",{className:"tech-pill",children:"Zero Cloud Lag"}),a.jsx("span",{className:"tech-divider",children:"•"}),a.jsx("span",{className:"tech-pill",children:"Lossless Audio"})]}),a.jsx("p",{className:"hero-description",children:s.description||"Stream direct from your local Windows workstation in pure studio bitrate. Zero buffering, native hardware seeking, and full spatial audio reproduction."}),a.jsxs("div",{className:"hero-actions-row",children:[a.jsxs("button",{className:"hero-btn-play-genz",onClick:()=>e(s),children:[a.jsx(un,{size:18,fill:"#ffffff",strokeWidth:0}),a.jsx("span",{children:"Watch Now"})]}),r&&a.jsxs("button",{className:"hero-btn-cine3d-genz",onClick:r,children:[a.jsx(Yn,{size:16,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"Enter CINE-3D"})]}),a.jsxs("button",{className:"hero-btn-details-genz",onClick:()=>t(s),children:[a.jsx(ho,{size:17}),a.jsx("span",{children:"Details"})]})]})]}),a.jsx("div",{className:"hero-poster-showcase",style:{transform:`translate3d(${h.x*-.6}px, ${h.y*-.6}px, 0)`},children:a.jsxs("div",{className:"hero-poster-card-3d",style:{transform:`perspective(1000px) rotateX(${M.x}deg) rotateY(${M.y}deg)`,borderColor:`${m}55`},onClick:()=>e(s),title:"Click to stream immediately",children:[a.jsx("div",{className:"hero-poster-ambient-glow",style:{background:`radial-gradient(circle, ${m}70 0%, ${m}25 55%, transparent 75%)`}}),a.jsx("img",{src:on(`/api/movies/${s.id}/poster`),alt:S,className:"hero-poster-img"}),a.jsx("div",{className:"hero-poster-sheen"}),a.jsxs("div",{className:"hero-poster-top-bar",children:[a.jsxs("span",{className:"hero-poster-pill-badge",children:[a.jsx(Wm,{size:11,fill:"#FACC15",color:"#FACC15"}),a.jsx("span",{children:"9.8"})]}),a.jsx("span",{className:"hero-poster-res-badge",children:w})]}),a.jsx("div",{className:"hero-poster-hover-overlay",children:a.jsx("div",{className:"hero-poster-play-glow",children:a.jsx(un,{size:24,fill:"#ffffff",strokeWidth:0})})}),a.jsxs("div",{className:"hero-poster-footer",children:[a.jsxs("div",{className:"equalizer-waves",children:[a.jsx("span",{className:"eq-bar eq-1"}),a.jsx("span",{className:"eq-bar eq-2"}),a.jsx("span",{className:"eq-bar eq-3"}),a.jsx("span",{className:"eq-bar eq-4"})]}),a.jsx("span",{className:"live-stream-label",children:"DIRECT MASTER"})]})]})})]})]})}function Wy({onSelectMovie:s,onPlayMovie:e,authFetch:t,onNavigateLibrary:r,onOpenFolderPicker:l,onNavigateCine3D:c}){const[d,h]=V.useState({featured:null,continueWatching:[],recentlyAdded:[],popular:[],favorites:[],genreCollections:[]}),[p,m]=V.useState([]),[v,M]=V.useState(!0),[_,S]=V.useState("all"),w=[{id:"all",label:"All Vibes",icon:Yn,color:"#8B5CF6"},{id:"trending",label:"Trending",icon:sx,color:"#EC4899"},{id:"4k",label:"4K Ultra HD",icon:Vh,color:"#38BDF8"},{id:"continue",label:"Continue Binge",icon:pr,color:"#A855F7"},{id:"anime",label:"Anime & Aesthetic",icon:ai,color:"#F43F5E"},{id:"recommended",label:"Curated For You",icon:Om,color:"#10B981"},{id:"favorites",label:"Favorites",icon:Ni,color:"#F59E0B"}],T=()=>{M(!0),Promise.all([t("/api/movies/sections/home").then(C=>C.json()),t("/api/user/recommendations").then(C=>C.json()).catch(()=>({recommendations:[]}))]).then(([C,I])=>{h({featured:C.featured||null,continueWatching:C.continueWatching||[],recentlyAdded:C.recentlyAdded||[],popular:C.popular||[],favorites:C.favorites||[],genreCollections:C.genreCollections||[]}),m(I.recommendations||[])}).catch(()=>{}).finally(()=>M(!1))};V.useEffect(()=>{T()},[]);const x=async C=>{try{const N=await(await t(`/api/user/favorites/${C}`,{method:"POST"})).json();h(L=>({...L,recentlyAdded:L.recentlyAdded.map(k=>k.id===C?{...k,is_favorite:N.favorited?1:0}:k),popular:L.popular.map(k=>k.id===C?{...k,is_favorite:N.favorited?1:0}:k),favorites:N.favorited?[...L.favorites,L.recentlyAdded.find(k=>k.id===C)||{id:C,is_favorite:1}]:L.favorites.filter(k=>k.id!==C)}))}catch{}};return v?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading StreamLink 2.0 Cinema..."})]}):d.featured||d.recentlyAdded.length>0?a.jsxs("div",{className:"home-page-container",children:[d.featured&&a.jsx(Vy,{movie:d.featured,onPlay:e,onDetails:s,onEnterCine3D:c}),a.jsx("div",{className:"vibe-chips-bar",children:w.map(C=>{const I=C.icon,N=_===C.id;return a.jsxs("button",{className:`vibe-chip ${N?"active":""}`,style:{"--chip-color":C.color},onClick:()=>S(C.id),children:[a.jsx(I,{size:14,className:"vibe-chip-icon"}),a.jsx("span",{children:C.label})]},C.id)})}),c&&a.jsxs("div",{className:"cine3d-invitation-strip cyber-portal-strip",onClick:c,children:[a.jsx("div",{className:"cyber-strip-glow"}),a.jsxs("div",{className:"strip-left",children:[a.jsxs("div",{className:"strip-sparkle-pill",children:[a.jsx(Yn,{size:13,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"SPATIAL 3D CINEMA METAVERSE"})]}),a.jsx("h3",{className:"cyber-portal-heading",children:"Explore in CINE-3D Spatial Lobby"}),a.jsx("p",{className:"cyber-portal-desc",children:"Step inside an interactive 3D curved cinema carousel with volumetric depth, spatial physics, and holographic inertia."})]}),a.jsx("div",{className:"strip-right-action",children:a.jsxs("button",{className:"cyber-portal-launch-btn",children:[a.jsx(Yn,{size:15}),a.jsx("span",{children:"Launch 3D Cinema"}),a.jsx(co,{size:15})]})})]}),d.continueWatching.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(pr,{size:19,color:"#8B5CF6"}),a.jsx("span",{children:"Continue Watching"})]})}),a.jsx("div",{className:"continue-watching-grid",children:d.continueWatching.map(C=>{const I=C.duration>0?Math.min(100,Math.round(C.progress_seconds/C.duration*100)):50,N=Xh(C.clean_title);return a.jsxs("div",{className:"continue-card-3d",onClick:()=>e(C),children:[a.jsxs("div",{className:"continue-poster-thumb",children:[a.jsx("img",{src:on(`/api/movies/${C.id}/poster`),alt:N}),a.jsx("div",{className:"continue-play-overlay",children:a.jsx(un,{size:20,fill:"#ffffff"})})]}),a.jsxs("div",{className:"continue-info",children:[a.jsxs("div",{children:[a.jsx("h4",{className:"continue-title",title:N,children:N}),a.jsxs("div",{className:"continue-time",children:[Wr(C.progress_seconds)," of ",Wr(C.duration)," (",I,"%)"]})]}),a.jsx("div",{className:"continue-bar-track",children:a.jsx("div",{className:"continue-bar-fill",style:{width:`${I}%`}})})]})]},C.id)})})]}),p.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Om,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recommended For You"})]})}),a.jsx("div",{className:"movie-grid-3d",children:p.slice(0,6).map(C=>a.jsx(zr,{movie:C,onSelect:s,onPlay:e,onToggleFavorite:x},C.id))})]}),d.recentlyAdded.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsxs("div",{className:"section-header",children:[a.jsxs("div",{className:"section-title",children:[a.jsx(Yn,{size:19,color:"#38BDF8"}),a.jsx("span",{children:"Recently Added"})]}),r&&a.jsxs("button",{className:"section-see-all-btn",onClick:r,children:[a.jsx("span",{children:"View Full Library"}),a.jsx(co,{size:14})]})]}),a.jsx("div",{className:"movie-grid-3d",children:d.recentlyAdded.map(C=>a.jsx(zr,{movie:C,onSelect:s,onPlay:e,onToggleFavorite:x},C.id))})]}),d.genreCollections.map(({genre:C,movies:I})=>a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(zh,{size:19,color:"#A855F7"}),a.jsx("span",{children:C})]})}),a.jsx("div",{className:"movie-grid-3d",children:I.slice(0,6).map(N=>a.jsx(zr,{movie:N,onSelect:s,onPlay:e,onToggleFavorite:x},N.id))})]},C)),d.popular.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(wy,{size:19,color:"#22C55E"}),a.jsx("span",{children:"Popular & Most Watched"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.popular.map(C=>a.jsx(zr,{movie:C,onSelect:s,onPlay:e,onToggleFavorite:x},C.id))})]}),d.favorites.length>0&&a.jsxs("section",{className:"home-section",children:[a.jsx("div",{className:"section-header",children:a.jsxs("div",{className:"section-title",children:[a.jsx(Ni,{size:19,color:"#EF4444",fill:"#EF4444"}),a.jsx("span",{children:"Your Favorites"})]})}),a.jsx("div",{className:"movie-grid-3d",children:d.favorites.map(C=>a.jsx(zr,{movie:C,onSelect:s,onPlay:e,onToggleFavorite:x},C.id))})]})]}):a.jsxs("div",{className:"empty-state-3d",style:{marginTop:"60px"},children:[a.jsx(ai,{size:48,className:"text-dim",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"Your Cinema Library is Empty"}),a.jsx("p",{children:"Connect and scan a movie folder on your host Windows PC to populate your personal streaming theater."}),l&&a.jsxs("button",{className:"btn-primary",onClick:l,children:[a.jsx(ax,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]})}function Xy({onSelectMovie:s,onPlayMovie:e,authFetch:t,onOpenFolderPicker:r,onNavigateCine3D:l}){const[c,d]=V.useState([]),[h,p]=V.useState(""),[m,v]=V.useState(""),[M,_]=V.useState(""),[S,w]=V.useState(""),[T,x]=V.useState(""),[y,C]=V.useState("all"),[I,N]=V.useState("recent"),[L,k]=V.useState("grid"),[E,D]=V.useState(!0),[G,H]=V.useState(!1),[z,ie]=V.useState(!1),[J,j]=V.useState([]),[$,te]=V.useState(null),[q,ee]=V.useState(null),[O,Y]=V.useState(!1),[F,K]=V.useState(null),[Me,X]=V.useState(""),[le,ye]=V.useState(!1),[we,Se]=V.useState(null),Re=(U,Be="success")=>{Se({text:U,type:Be}),setTimeout(()=>{Se(null)},4500)},pt=()=>{D(!0);let U=`/api/movies?sort=${I}`;h.trim()&&(U+=`&q=${encodeURIComponent(h.trim())}`),m&&(U+=`&resolution=${encodeURIComponent(m)}`),M&&(U+=`&year=${encodeURIComponent(M)}`),S&&(U+=`&genre=${encodeURIComponent(S)}`),T&&(U+=`&artworkStatus=${encodeURIComponent(T)}`),t(U).then(Be=>Be.json()).then(Be=>{Be.movies&&d(Be.movies)}).catch(()=>{}).finally(()=>D(!1))};V.useEffect(()=>{pt()},[h,m,M,S,T,I]);const Ye=async()=>{H(!0);try{const Be=await(await t("/api/admin/scan",{method:"POST"})).json();await pt(),Re(Be.message||"Library rescan complete!","success")}catch{Re("Error during library scan","error")}H(!1)},_t=async U=>{try{const ot=await(await t(`/api/user/favorites/${U}`,{method:"POST"})).json();d(ft=>ft.map(Ae=>Ae.id===U?{...Ae,is_favorite:ot.favorited?1:0}:Ae))}catch{}},dt=c.filter(U=>y==="watched"?U.progress_seconds&&U.duration&&U.progress_seconds/U.duration>=.9||U.completed===1:y==="unwatched"?!U.progress_seconds||U.progress_seconds<15:!0),ct=Array.from(new Set(c.map(U=>U.year).filter(Boolean))).sort().reverse(),je=dt.reduce((U,Be)=>U+(Be.file_size||0),0),ht=!!(h||m||M||y!=="all"),bt=()=>{p(""),v(""),_(""),w(""),x(""),C("all")},he=U=>{j(Be=>Be.includes(U)?Be.filter(ot=>ot!==U):[...Be,U])},Te=()=>{J.length===dt.length?j([]):j(dt.map(U=>U.id))},Ee=async()=>{if($){try{const U=await t(`/api/movies/${$.id}/remove`,{method:"POST"}),Be=await U.json();U.ok?(d(ot=>ot.filter(ft=>ft.id!==$.id)),j(ot=>ot.filter(ft=>ft!==$.id)),Re(`"${$.clean_title}" removed from library (file preserved on PC)`,"success")):Re(Be.error||"Failed to remove movie","error")}catch{Re("Network error removing movie","error")}te(null)}},Mt=async()=>{if(q){try{const U=await t(`/api/movies/${q.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:q.clean_title})}),Be=await U.json();U.ok?(d(ot=>ot.filter(ft=>ft.id!==q.id)),j(ot=>ot.filter(ft=>ft!==q.id)),Re(`Permanently deleted "${q.clean_title}" from disk`,"warn")):Re(Be.error||"Failed to delete movie file","error")}catch{Re("Network error during file deletion","error")}ee(null)}},At=async()=>{if(J.length!==0){try{const U=await t("/api/movies/bulk/remove",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieIds:J})}),Be=await U.json();U.ok?(d(ot=>ot.filter(ft=>!J.includes(ft.id))),Re(`Removed ${Be.removedCount} movies from library (files preserved)`,"success"),j([]),ie(!1)):Re(Be.error||"Failed to bulk remove movies","error")}catch{Re("Network error during bulk removal","error")}Y(!1)}},Le=async U=>{if(U.preventDefault(),!(!F||!Me.trim())){ye(!0);try{const Be=await t(`/api/movies/${F.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:Me.trim()})}),ot=await Be.json();Be.ok?(Re("Poster updated successfully!","success"),K(null),X(""),pt()):Re(ot.error||"Failed to update poster","error")}catch{Re("Network error saving poster","error")}finally{ye(!1)}}};return a.jsxs("div",{className:"library-page-3d",children:[we&&a.jsxs("div",{className:`app-toast-banner ${we.type}`,children:[we.type==="success"&&a.jsx(nx,{size:16}),we.type==="warn"&&a.jsx(fo,{size:16}),we.type==="error"&&a.jsx(uo,{size:16}),a.jsx("span",{children:we.text})]}),a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{className:"page-header-info",children:[a.jsx("h1",{className:"page-header-title",children:"Movie Library"}),a.jsxs("p",{className:"page-header-subtitle",children:[dt.length," movies available • Total size: ",oi(je)]})]}),a.jsxs("div",{className:"page-header-actions",children:[l&&a.jsxs("button",{className:"btn-primary",onClick:l,title:"Enter CINE-3D spatial cinema carousel",children:[a.jsx(Yn,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"Launch CINE-3D"})]}),a.jsxs("button",{className:`btn-secondary ${z?"active":""}`,onClick:()=>{ie(!z),z&&j([])},title:z?"Cancel Selection":"Manage Multiple Movies",children:[a.jsx(mc,{size:15}),a.jsx("span",{children:z?"Cancel":"Manage"})]}),a.jsxs("div",{className:"view-mode-toggle",children:[a.jsx("button",{className:`view-toggle-btn ${L==="grid"?"active":""}`,onClick:()=>k("grid"),title:"Grid View",children:a.jsx(V_,{size:16})}),a.jsx("button",{className:`view-toggle-btn ${L==="list"?"active":""}`,onClick:()=>k("list"),title:"List View",children:a.jsx(X_,{size:16})})]}),a.jsxs("button",{className:`btn-secondary ${G?"rescan-spinning":""}`,onClick:Ye,disabled:G,title:"Scan movie folder for newly added or changed video files",children:[a.jsx(Ri,{size:15}),a.jsx("span",{children:G?"Scanning...":"Rescan Library"})]})]})]}),z&&a.jsxs("div",{className:"multi-select-toolbar",children:[a.jsxs("div",{className:"select-toolbar-left",children:[a.jsxs("button",{className:"select-all-btn",onClick:Te,children:[J.length===dt.length&&dt.length>0?a.jsx(mc,{size:18,className:"checkbox-icon checked"}):a.jsx(ca,{size:18,className:"checkbox-icon"}),a.jsxs("span",{children:["Select All Visible (",dt.length,")"]})]}),a.jsxs("span",{className:"selected-count-badge",children:[J.length," movie",J.length!==1?"s":""," selected"]})]}),a.jsxs("div",{className:"select-toolbar-right",children:[a.jsxs("button",{className:"btn-danger-sm",disabled:J.length===0,onClick:()=>Y(!0),children:[a.jsx(jr,{size:14}),a.jsxs("span",{children:["Remove Selected (",J.length,")"]})]}),a.jsx("button",{className:"btn-secondary-sm",onClick:()=>{ie(!1),j([])},children:a.jsx("span",{children:"Done"})})]})]}),a.jsxs("div",{className:"library-toolbar",children:[a.jsxs("div",{className:"toolbar-search-box",children:[a.jsx(ps,{size:16,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:"Search movie title...",value:h,onChange:U=>p(U.target.value)}),h&&a.jsx("button",{className:"search-clear-btn",onClick:()=>p(""),title:"Clear search",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"toolbar-filters-group",children:[a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:S,onChange:U=>w(U.target.value),children:[a.jsx("option",{value:"",children:"All Genres"}),a.jsx("option",{value:"Action & Adventure",children:"Action & Adventure"}),a.jsx("option",{value:"Anime & Animation",children:"Anime & Animation"}),a.jsx("option",{value:"Horror & Suspense",children:"Horror & Suspense"}),a.jsx("option",{value:"Sci-Fi & Cyber",children:"Sci-Fi & Cyber"}),a.jsx("option",{value:"Thriller & Mystery",children:"Thriller & Mystery"}),a.jsx("option",{value:"Comedy",children:"Comedy"}),a.jsx("option",{value:"Cinema & Drama",children:"Cinema & Drama"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:m,onChange:U=>v(U.target.value),children:[a.jsx("option",{value:"",children:"All Resolutions"}),a.jsx("option",{value:"4K",children:"4K Ultra HD"}),a.jsx("option",{value:"1080P",children:"1080p Full HD"}),a.jsx("option",{value:"720P",children:"720p HD"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:M,onChange:U=>_(U.target.value),children:[a.jsx("option",{value:"",children:"All Years"}),ct.map(U=>a.jsx("option",{value:U,children:U},U))]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:y,onChange:U=>C(U.target.value),children:[a.jsx("option",{value:"all",children:"All Status"}),a.jsx("option",{value:"unwatched",children:"Unwatched"}),a.jsx("option",{value:"watched",children:"Watched"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:T,onChange:U=>x(U.target.value),children:[a.jsx("option",{value:"",children:"All Artwork"}),a.jsx("option",{value:"missing",children:"Missing Artwork"}),a.jsx("option",{value:"uncertain",children:"Uncertain Matches"}),a.jsx("option",{value:"matched",children:"Matched Artwork"})]})}),a.jsx("div",{className:"toolbar-select-wrapper",children:a.jsxs("select",{value:I,onChange:U=>N(U.target.value),children:[a.jsx("option",{value:"recent",children:"Recently Added"}),a.jsx("option",{value:"title",children:"Title (A-Z)"}),a.jsx("option",{value:"year",children:"Release Year"}),a.jsx("option",{value:"size",children:"Largest File Size"}),a.jsx("option",{value:"duration",children:"Longest Duration"})]})}),ht&&a.jsxs("button",{className:"btn-clear-filters",onClick:bt,title:"Reset all search and filters",children:[a.jsx(Wi,{size:13}),a.jsx("span",{children:"Clear Filters"})]})]})]}),E?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning & loading movies..."})]}):dt.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(ai,{size:48,color:"var(--text-dim)",style:{marginBottom:"16px"}}),a.jsx("h3",{children:"No Movies Found"}),a.jsx("p",{children:ht?"No movies match your active search or filter criteria. Try clearing filters to see all available movies.":"You have not scanned a movie folder yet. Select a folder on your Windows PC to automatically populate your library."}),ht?a.jsxs("button",{className:"btn-secondary",onClick:bt,children:[a.jsx(Wi,{size:15}),a.jsx("span",{children:"Clear Active Filters"})]}):r&&a.jsxs("button",{className:"btn-primary",onClick:r,children:[a.jsx(ax,{size:16}),a.jsx("span",{children:"Select Movie Folder"})]})]}):L==="list"?a.jsx("div",{className:"movie-list-container",children:dt.map(U=>a.jsx(zr,{movie:U,onSelect:s,onPlay:e,onToggleFavorite:_t,onChangePoster:Be=>{K(Be),X("")},onRemoveMovie:Be=>te(Be),onDeleteFile:Be=>ee(Be),viewMode:"list",isSelectMode:z,isSelected:J.includes(U.id),onToggleSelect:he},U.id))}):a.jsx("div",{className:"movie-grid-3d",children:dt.map(U=>a.jsx(zr,{movie:U,onSelect:s,onPlay:e,onToggleFavorite:_t,onChangePoster:Be=>{K(Be),X("")},onRemoveMovie:Be=>te(Be),onDeleteFile:Be=>ee(Be),viewMode:"grid",isSelectMode:z,isSelected:J.includes(U.id),onToggleSelect:he},U.id))}),$&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>te(null),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(jr,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Remove from Library?"}),a.jsx("span",{className:"dialog-subtitle",children:$.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["This movie will be removed from your StreamLink library, but your ",a.jsx("strong",{children:"original video file will remain safe and untouched on your computer"}),"."]}),a.jsx("div",{className:"dialog-detail-box",children:a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Location:"}),a.jsx("code",{title:$.file_path,children:$.file_path})]})}),a.jsx("p",{className:"dialog-note",children:"StreamLink will remember this choice so the movie will not reappear when you rescan your library."})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>te(null),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:Ee,children:[a.jsx(jr,{size:15}),a.jsx("span",{children:"Remove from Library"})]})]})]})}),q&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>ee(null),children:a.jsxs("div",{className:"dialog-card card-danger-border",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-danger",children:a.jsx(fo,{size:24})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title text-danger",children:"Permanently Delete Video File?"}),a.jsx("span",{className:"dialog-subtitle",children:q.clean_title})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("div",{className:"danger-alert-box",children:[a.jsx("strong",{children:"WARNING: This action is permanent and cannot be undone!"}),a.jsx("p",{children:"The video file will be permanently deleted from your Windows hard drive."})]}),a.jsxs("div",{className:"dialog-detail-box",children:[a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Name:"}),a.jsx("code",{children:q.file_name})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Path:"}),a.jsx("code",{title:q.file_path,children:q.file_path})]}),a.jsxs("div",{className:"detail-row",children:[a.jsx("span",{children:"File Size:"}),a.jsx("code",{children:oi(q.file_size)})]})]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>ee(null),children:"Cancel"}),a.jsxs("button",{className:"btn-danger",onClick:Mt,children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Permanently Delete File"})]})]})]})}),O&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>Y(!1),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-warning",children:a.jsx(jr,{size:22})}),a.jsxs("div",{children:[a.jsxs("h3",{className:"dialog-title",children:["Remove ",J.length," Movies from Library?"]}),a.jsx("span",{className:"dialog-subtitle",children:"Original files remain untouched on computer"})]})]}),a.jsxs("div",{className:"dialog-body",children:[a.jsxs("p",{children:["All ",a.jsxs("strong",{children:[J.length," selected movies"]})," will be removed from your active StreamLink library."]}),a.jsxs("p",{className:"dialog-note",children:["Your original video files on your hard drive will ",a.jsx("strong",{children:"not"})," be deleted. StreamLink will keep them hidden so they will not reappear upon rescan."]})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{className:"btn-secondary",onClick:()=>Y(!1),children:"Cancel"}),a.jsxs("button",{className:"btn-warning",onClick:At,children:[a.jsx(jr,{size:15}),a.jsxs("span",{children:["Remove ",J.length," Movies"]})]})]})]})}),F&&a.jsx("div",{className:"dialog-backdrop",onClick:()=>K(null),children:a.jsxs("div",{className:"dialog-card",onClick:U=>U.stopPropagation(),children:[a.jsxs("div",{className:"dialog-header",children:[a.jsx("div",{className:"dialog-icon-wrapper icon-accent",children:a.jsx(pc,{size:22})}),a.jsxs("div",{children:[a.jsx("h3",{className:"dialog-title",children:"Change Movie Poster"}),a.jsx("span",{className:"dialog-subtitle",children:F.clean_title})]})]}),a.jsxs("form",{onSubmit:Le,children:[a.jsxs("div",{className:"dialog-body",children:[a.jsx("p",{children:"Enter an image URL or a local image path on your PC (e.g. D:\\Posters\\cover.jpg):"}),a.jsx("input",{type:"text",className:"dialog-input",placeholder:"https://image.tmdb.org/... or C:\\path\\poster.jpg",value:Me,onChange:U=>X(U.target.value),autoFocus:!0,required:!0})]}),a.jsxs("div",{className:"dialog-actions",children:[a.jsx("button",{type:"button",className:"btn-secondary",onClick:()=>K(null),children:"Cancel"}),a.jsx("button",{type:"submit",className:"btn-primary",disabled:le,children:le?"Downloading & Saving...":"Update Poster"})]})]})]})})]})}function $y({authFetch:s}){var je,ht,bt;const[e,t]=V.useState("D:\\Movies"),[r,l]=V.useState("Movies"),[c,d]=V.useState(""),[h,p]=V.useState(""),[m,v]=V.useState(!1),[M,_]=V.useState(!1),[S,w]=V.useState(null),[T,x]=V.useState(""),[y,C]=V.useState([]),[I,N]=V.useState(!0),[L,k]=V.useState(null),[E,D]=V.useState(!1),[G,H]=V.useState(null),[z,ie]=V.useState(!1),[J,j]=V.useState(null),[$,te]=V.useState([]),[q,ee]=V.useState(null),[O,Y]=V.useState(!1),F=async()=>{try{const Te=await(await s("/api/admin/drives")).json();Te.drives&&te(Te.drives)}catch{}},K=async he=>{try{const Te=await s(`/api/admin/browse-directory?path=${encodeURIComponent(he)}`),Ee=await Te.json();if(Te.ok){ee(Ee),t(Ee.currentPath);const Mt=Ee.currentPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Mt)}}catch{}},Me=async()=>{try{N(!0);const Te=await(await s("/api/share/folder/links")).json();Te.links&&C(Te.links)}catch{}finally{N(!1)}},X=async()=>{try{const Te=await(await s("/api/share/info")).json();k(Te)}catch{}};V.useEffect(()=>{Me(),X(),F();const he=setInterval(X,4e3);return()=>clearInterval(he)},[]);const le=async()=>{_(!0),x("Opening Windows Folder Dialog on your host PC screen...");try{const Te=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();if(Te.selectedPath){t(Te.selectedPath);const Ee=Te.selectedPath.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Ee),x(`Selected folder: ${Te.selectedPath}`),await ye(Te.selectedPath)}else x("Folder selection was cancelled.")}catch(he){x(`Error opening Windows dialog: ${he.message}`)}finally{_(!1)}},ye=async(he=e)=>{if(he){v(!0),x(`Scanning "${he}" for video files and movie metadata...`),w(null),j(null);try{const Te=await s("/api/share/folder/scan",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:he})}),Ee=await Te.json();if(!Te.ok)throw new Error(Ee.error||"Scan failed");w(Ee),l(Ee.folderName),x(`Scan complete! Detected ${Ee.movieCount} movies in "${Ee.folderName}".`)}catch(Te){x(`Scan error: ${Te.message}`)}finally{v(!1)}}},we=async he=>{if(he&&he.preventDefault(),!e){alert("Please select a folder first");return}ie(!0),x(`Registering folder "${r}" as a shared streaming resource...`);try{const Te=await s("/api/share/folder/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folderPath:e,folderName:r,label:c.trim()||`${r} Movies`,passcode:h.trim()})}),Ee=await Te.json();if(!Te.ok)throw new Error(Ee.error||"Failed to create share link");j(Ee.link),x(`Success! Sharing link generated for "${r}".`),d(""),p(""),await Me()}catch(Te){x(`Error generating link: ${Te.message}`)}finally{ie(!1)}},Se=async he=>{try{const Te=await s(`/api/share/folder/toggle/${he}`,{method:"POST"}),Ee=await Te.json();if(!Te.ok)throw new Error(Ee.error);await Me()}catch(Te){alert(Te.message)}},Re=async(he,Te)=>{if(window.confirm(`Delete sharing link for folder "${Te}"? Viewers will immediately lose access.`))try{const Ee=await s(`/api/share/folder/${he}`,{method:"DELETE"}),Mt=await Ee.json();if(!Ee.ok)throw new Error(Mt.error);await Me(),(J==null?void 0:J.id)===he&&j(null)}catch(Ee){alert(Ee.message)}},pt=async he=>{try{x("Rescanning shared folder on disk...");const Te=await s(`/api/share/folder/rescan/${he}`,{method:"POST"}),Ee=await Te.json();if(!Te.ok)throw new Error(Ee.error);x(Ee.message),await Me()}catch(Te){alert(Te.message)}},Ye=async he=>{D(!0),x(`${he==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const Te=await s(`/api/admin/tunnel/${he}`,{method:"POST"}),Ee=await Te.json();if(!Te.ok)throw new Error(Ee.error||"Tunnel command failed");x(Ee.message),await X(),await Me()}catch(Te){x(`Tunnel error: ${Te.message}`)}finally{D(!1)}},_t=(he,Te)=>{he&&navigator.clipboard.writeText(he).then(()=>{H(Te),setTimeout(()=>H(null),2500)})},dt=((je=L==null?void 0:L.remote)==null?void 0:je.status)==="connected",ct=((ht=L==null?void 0:L.remote)==null?void 0:ht.status)==="starting";return a.jsxs("div",{style:{padding:"0 0 60px"},children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(rc,{size:28,color:"var(--accent)"}),"Folder Sharing"]})}),a.jsx("p",{className:"page-sub-title",children:"Select any local movie folder on your Windows PC and generate a unique, secure streaming link. Viewers only see and stream movies inside the exact folder you choose."})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx("div",{className:`status-pill ${dt?"status-pill-green":ct?"status-pill-yellow":"status-pill-red"}`,children:dt?"REMOTE TUNNEL ONLINE":ct?"CONNECTING...":"LOCAL WI-FI ONLY"}),dt?a.jsxs("button",{className:"btn-danger",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>Ye("stop"),disabled:E,title:"Stop Cloudflare Tunnel",children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Stop Tunnel"})]}):a.jsxs("button",{className:"btn-primary",style:{padding:"8px 14px",fontSize:"13px",background:"var(--success)"},onClick:()=>Ye("start"),disabled:E||ct,title:"Start Cloudflare Tunnel to enable streaming outside home Wi-Fi",children:[a.jsx(un,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Go Worldwide"})]})]})]}),T&&a.jsx("div",{className:"folder-status-box",style:{margin:"0 32px 20px"},children:T}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"14px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(fs,{size:30,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"11px",color:"var(--text-dim)",fontWeight:700,letterSpacing:"0.8px",textTransform:"uppercase"},children:"SELECTED FOLDER TO SHARE"}),a.jsx("div",{style:{fontSize:"18px",fontWeight:800,color:"var(--text-primary)",marginTop:"2px"},children:r}),a.jsx("div",{className:"folder-path-display",title:e,style:{marginTop:"4px"},children:e})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",flexWrap:"wrap"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 22px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:le,disabled:M||m,children:[a.jsx(Bh,{size:17}),a.jsx("span",{children:"Select Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>Y(!O),children:[a.jsx($i,{size:16}),a.jsx("span",{children:O?"Hide Browser":"Browse Drives"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>ye(e),disabled:m||M,children:[a.jsx(Ri,{size:16,className:m?"spin":""}),a.jsx("span",{children:m?"Scanning...":"Scan Folder"})]})]})]}),O&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"10px",fontWeight:600},children:"Select Windows Drive Letter or Navigate Subdirectories:"}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"12px"},children:$.map(he=>a.jsxs("button",{className:`drive-pill ${e.startsWith(he)?"active":""}`,onClick:()=>K(he),children:[a.jsx($i,{size:13}),a.jsx("span",{children:he})]},he))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"10px"},children:[a.jsx("input",{type:"text",value:e,onChange:he=>{t(he.target.value);const Te=he.target.value.split(/[\\/]/).filter(Boolean).pop()||"Movies";l(Te)},placeholder:"Type full folder path (e.g. D:\\Movies\\Action)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>K(e),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>ye(e),disabled:m,children:"Scan"})]}),q&&a.jsxs("div",{className:"folder-list-container",children:[q.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>K(q.parentPath),children:[a.jsx(fs,{size:15,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(bt=q.folders)==null?void 0:bt.map(he=>a.jsxs("div",{className:"folder-list-item",onClick:()=>K(he.path),children:[a.jsx(fs,{size:15,color:"#fbbf24"}),a.jsx("span",{children:he.name})]},he.path))]})]}),S&&a.jsxs("div",{style:{background:"var(--bg-secondary)",padding:"18px",borderRadius:"var(--radius-md)",border:"1px solid var(--border)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"12px",flexWrap:"wrap",gap:"8px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(Xd,{size:18,color:"var(--success)"}),a.jsxs("span",{style:{fontWeight:700,fontSize:"15px"},children:[S.movieCount,' Movies Found in "',S.folderName,'"']}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["(",oi(S.totalBytes),")"]})]}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:["Location: ",S.folderPath]})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",maxHeight:"140px",overflowY:"auto",padding:"4px 0"},children:S.movies.map(he=>a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"6px",background:"var(--bg-card)",padding:"6px 12px",borderRadius:"var(--radius-sm)",border:"1px solid var(--border)",fontSize:"12px"},children:[a.jsx(ai,{size:13,color:"var(--info)"}),a.jsx("span",{style:{fontWeight:600,color:"var(--text-primary)"},children:he.clean_title}),he.resolution&&a.jsx("span",{style:{color:"var(--info)",fontSize:"10px",fontWeight:700},children:he.resolution}),a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"11px"},children:oi(he.file_size)})]},he.id))})]}),a.jsxs("div",{style:{borderTop:"1px solid var(--border)",paddingTop:"18px"},children:[a.jsx("div",{style:{fontSize:"15px",fontWeight:800,marginBottom:"6px"},children:"Generate Secure Sharing Link"}),a.jsxs("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"16px"},children:['Creates a unique web access link restricted exclusively to movies in "',r,'". Viewers cannot view any other folders, files, or settings on your PC.']}),a.jsxs("form",{onSubmit:we,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"12px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Link Name / Label:"}),a.jsx("input",{type:"text",value:c,onChange:he=>d(he.target.value),placeholder:`e.g. ${r} Movies`,style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",value:h,onChange:he=>p(he.target.value),placeholder:"e.g. 1234 (leave blank for open access)",style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",height:"42px",padding:"10px 20px",fontSize:"14px",gap:"8px"},disabled:z||!e,children:[a.jsx(Hh,{size:16}),a.jsx("span",{children:z?"Creating...":"Generate Sharing Link"})]})})]})]})]}),J&&a.jsxs("div",{style:{margin:"0 32px 28px",background:"linear-gradient(135deg, rgba(139,124,255,0.12) 0%, rgba(56,189,248,0.06) 100%)",border:"1px solid rgba(139,124,255,0.35)",borderRadius:"var(--radius-lg)",padding:"24px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",justifyContent:"space-between",marginBottom:"14px",flexWrap:"wrap",gap:"10px"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Xd,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800},children:"New Sharing Link Live!"}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:["Sharing ",J.movie_count," movies from folder: ",a.jsx("strong",{children:J.folder_name})]})]})]}),a.jsx("span",{className:"status-pill status-pill-green",children:"ACTIVE & READY"})]}),a.jsxs("div",{style:{display:"flex",gap:"12px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"260px"},children:[a.jsx("span",{className:"link-text-mono",children:J.activeUrl}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>_t(J.activeUrl,"new_created"),children:[G==="new_created"?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:G==="new_created"?"Copied":"Copy Link"})]})]}),a.jsxs("a",{href:J.activeUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"10px 16px",fontSize:"13px"},children:[a.jsx(Bm,{size:15}),a.jsx("span",{children:"Open Sharing Page"})]})]}),J.qrCode&&a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px",marginTop:"16px",padding:"12px 16px",background:"var(--bg-secondary)",borderRadius:"var(--radius-sm)"},children:[a.jsx("img",{src:J.qrCode,alt:"QR Code",style:{width:"80px",height:"80px",borderRadius:"6px",background:"#fff",padding:"4px"}}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",fontWeight:700},children:"Scan with Phone Camera"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginTop:"2px"},children:"Anyone who scans this code can immediately stream movies from this folder on their phone."})]})]})]}),a.jsxs("div",{style:{margin:"0 32px"},children:[a.jsxs("div",{className:"section-header",style:{padding:"0 0 16px 0"},children:[a.jsxs("div",{className:"section-title",children:[a.jsx(rc,{size:20,color:"var(--primary)"}),a.jsxs("span",{children:["Active Shared Folders (",y.length,")"]})]}),a.jsxs("button",{className:"btn-secondary",onClick:Me,title:"Refresh Shares",children:[a.jsx(Ri,{size:14}),a.jsx("span",{children:"Refresh"})]})]}),I?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading shared folders..."})]}):y.length===0?a.jsxs("div",{className:"empty-state-3d",style:{background:"var(--bg-card)",borderRadius:"var(--radius-lg)",border:"1px solid var(--border)"},children:[a.jsx(rc,{size:44,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Folders Shared Yet"}),a.jsx("p",{children:'Select a movie folder above (e.g. D:\\Movies) and click "Generate Sharing Link" to create your first independent folder share link.'})]}):a.jsx("div",{style:{display:"flex",flexDirection:"column",gap:"14px"},children:y.map(he=>{const Te=he.activeUrl,Ee=he.is_active===1;return a.jsxs("div",{style:{background:"var(--bg-card)",border:`1px solid ${Ee?"var(--border)":"rgba(239,68,68,0.2)"}`,borderRadius:"var(--radius-lg)",padding:"20px",display:"flex",flexDirection:"column",gap:"14px",opacity:Ee?1:.75,transition:"border-color var(--transition)"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"flex-start",justifyContent:"space-between",gap:"12px",flexWrap:"wrap"},children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{style:{width:"40px",height:"40px",background:Ee?"rgba(139,124,255,0.15)":"rgba(255,255,255,0.05)",border:Ee?"1px solid rgba(139,124,255,0.3)":"1px solid var(--border)",borderRadius:"var(--radius-md)",display:"flex",alignItems:"center",justifyContent:"center",color:Ee?"var(--accent)":"var(--text-dim)",flexShrink:0},children:a.jsx(fs,{size:22})}),a.jsxs("div",{children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px",flexWrap:"wrap"},children:[a.jsx("span",{style:{fontSize:"16px",fontWeight:800,color:"var(--text-primary)"},children:he.label||he.folder_name}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--info)",fontWeight:600},children:["(",he.movie_count," movies)"]}),he.hasPasscode&&a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"4px",fontSize:"11px",color:"#fbbf24",background:"rgba(251,191,36,0.1)",padding:"2px 8px",borderRadius:"4px"},children:[a.jsx(Cc,{size:11}),"PIN Protected"]})]}),a.jsxs("div",{style:{fontSize:"12px",color:"var(--text-dim)",fontFamily:"monospace",marginTop:"2px"},title:he.folder_path,children:["Path: ",he.folder_path]})]})]}),a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{className:`status-pill ${Ee?"status-pill-green":"status-pill-red"}`,children:Ee?"SHARING ACTIVE":"DISABLED"}),a.jsxs("span",{style:{fontSize:"12px",color:"var(--text-dim)"},children:[he.access_count," streams"]})]})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",alignItems:"center",flexWrap:"wrap"},children:[a.jsxs("div",{className:"link-display-box",style:{flex:1,minWidth:"240px"},children:[a.jsx("span",{className:"link-text-mono",children:Te}),a.jsxs("button",{className:"btn-secondary",style:{padding:"7px 12px",fontSize:"12px"},onClick:()=>_t(Te,`folder_${he.id}`),title:"Copy Sharing Link",children:[G===`folder_${he.id}`?a.jsx(wn,{size:14,color:"var(--success)"}):a.jsx(aa,{size:14}),a.jsx("span",{children:G===`folder_${he.id}`?"Copied":"Copy"})]})]}),a.jsxs("a",{href:Te,target:"_blank",rel:"noreferrer",className:"btn-secondary",style:{padding:"9px 14px",fontSize:"13px"},title:"Open sharing viewer in a new tab",children:[a.jsx(Bm,{size:14}),a.jsx("span",{children:"Open Sharing Page"})]})]}),a.jsxs("div",{style:{display:"flex",gap:"8px",alignItems:"center",justifyContent:"flex-end",flexWrap:"wrap",borderTop:"1px solid var(--border)",paddingTop:"10px"},children:[a.jsxs("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12px"},onClick:()=>pt(he.id),title:"Rescan folder for new or deleted movies",children:[a.jsx(Ri,{size:13}),a.jsx("span",{children:"Rescan Folder"})]}),a.jsxs("button",{className:Ee?"btn-secondary":"btn-success",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Se(he.id),children:[Ee?a.jsx(ix,{size:13}):a.jsx(rx,{size:13}),a.jsx("span",{children:Ee?"Disable Sharing":"Enable Sharing"})]}),a.jsxs("button",{className:"btn-danger",style:{padding:"6px 14px",fontSize:"12px"},onClick:()=>Re(he.id,he.label||he.folder_name),children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Delete Share"})]})]})]},he.id)})})]})]})}function qy({authFetch:s,onScanSuccess:e,onViewLibrary:t}){var J,j;const[r,l]=V.useState("D:\\Movies"),[c,d]=V.useState(!1),[h,p]=V.useState(0),[m,v]=V.useState(0),[M,_]=V.useState([]),[S,w]=V.useState(null),[T,x]=V.useState(!1),[y,C]=V.useState(!1),[I,N]=V.useState(""),[L,k]=V.useState(null),E=async()=>{try{const te=await(await s("/api/admin/dashboard-stats")).json();te.library&&(l(te.library.folder||"D:\\Movies"),d(te.library.folderExists),p(te.library.totalMovies),v(te.library.totalDiskBytes))}catch{}},D=async()=>{try{const te=await(await s("/api/admin/drives")).json();te.drives&&_(te.drives)}catch{}},G=async $=>{try{const te=await s(`/api/admin/browse-directory?path=${encodeURIComponent($)}`),q=await te.json();te.ok&&(w(q),l(q.currentPath))}catch{}};V.useEffect(()=>{E(),D()},[]);const H=async()=>{C(!0),N("Opening Windows Folder Dialog on your PC host screen...");try{const te=await(await s("/api/admin/open-folder-dialog",{method:"POST"})).json();te.selectedPath?(l(te.selectedPath),N(`Selected from Windows Dialog: ${te.selectedPath}`),await z(te.selectedPath)):N("Folder selection was cancelled.")}catch($){N(`Error launching Windows dialog: ${$.message}`)}finally{C(!1)}},z=async($=r)=>{if($){x(!0),N(`Scanning "${$}" for video files and metadata...`),k(null);try{const te=await s("/api/admin/library-folder",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({folder:$})}),q=await te.json();if(!te.ok)throw new Error(q.error||"Scan failed");k(q.scanResult),N(`Scan complete! Found ${q.scanResult.totalFiles} files (${q.scanResult.added} new, ${q.scanResult.updated} verified).`),await E(),e&&e($)}catch(te){N(`Scan Error: ${te.message}`)}finally{x(!1)}}},ie=async()=>{x(!0),N("Rescanning library folder for new or removed movies...");try{const $=await s("/api/admin/rescan",{method:"POST"}),te=await $.json();if(!$.ok)throw new Error(te.error||"Rescan failed");k(te.scanResult),N(`Rescan complete! ${te.scanResult.totalFiles} movies in library.`),await E()}catch($){N(`Rescan Error: ${$.message}`)}finally{x(!1)}};return a.jsxs("div",{className:"folder-page-container",children:[a.jsxs("div",{className:"page-header-row",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Movie Folder Management"}),a.jsx("p",{className:"page-sub-title",children:"Select any local folder on your Windows PC to automatically scan, index, and stream your movies."})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{padding:"10px 20px",gap:"8px"},onClick:()=>z(),disabled:T||y,children:[a.jsx(Ri,{size:16,className:T?"spin":""}),a.jsx("span",{children:T?"Scanning...":"Scan Movies"})]}),a.jsx("button",{className:"btn-secondary",onClick:ie,disabled:T||y,children:a.jsx("span",{children:"Refresh Library"})})]})]}),a.jsxs("div",{className:"folder-hero-card",children:[a.jsxs("div",{className:"folder-hero-top",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"12px"},children:[a.jsx("div",{className:"folder-icon-large",children:a.jsx(fs,{size:28,color:"var(--primary)"})}),a.jsxs("div",{children:[a.jsx("div",{style:{fontSize:"13px",color:"var(--text-muted)",fontWeight:600},children:"CURRENT MOVIE DIRECTORY"}),a.jsx("div",{className:"folder-path-display",title:r,children:r})]})]}),a.jsx("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:a.jsxs("div",{className:`folder-status-pill ${c?"status-connected":"status-missing"}`,children:[c?a.jsx(Xd,{size:15}):a.jsx(fo,{size:15}),a.jsx("span",{children:c?"Connected & Accessible":"Path Not Found on Host PC"})]})})]}),a.jsxs("div",{className:"folder-actions-row",children:[a.jsxs("button",{className:"btn-primary",style:{padding:"12px 24px",background:"linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)"},onClick:H,disabled:y||T,children:[a.jsx(Bh,{size:18}),a.jsx("span",{children:"Select Movie Folder (Windows Dialog)"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>G(r),children:[a.jsx(ao,{size:16}),a.jsx("span",{children:"Change Folder via Browser"})]})]}),a.jsxs("div",{className:"folder-stats-bar",children:[a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Total Movies Detected:"}),a.jsx("span",{className:"folder-stat-val text-red",children:h})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Library Storage Size:"}),a.jsx("span",{className:"folder-stat-val text-blue",children:oi(m)})]}),a.jsxs("div",{className:"folder-stat-item",children:[a.jsx("span",{className:"folder-stat-label",children:"Host Machine Location:"}),a.jsx("span",{className:"folder-stat-val",style:{color:"#cbd5e1"},children:"Local Windows Filesystem"})]})]})]}),I&&a.jsxs("div",{className:"folder-status-box",children:[a.jsx("span",{style:{fontWeight:600},children:I}),L&&a.jsxs("div",{style:{fontSize:"12px",marginTop:"6px",color:"var(--text-muted)"},children:["Summary: ",L.totalFiles," video files found | ",L.added," added | ",L.updated," updated | ",L.deleted," dead links removed"]})]}),a.jsxs("div",{className:"folder-browser-section",children:[a.jsxs("h3",{style:{fontSize:"16px",fontWeight:700,marginBottom:"14px",display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx($i,{size:18,color:"#38bdf8"}),a.jsx("span",{children:"Interactive Filesystem Navigator"})]}),a.jsx("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap",marginBottom:"14px"},children:M.map($=>a.jsxs("button",{className:`drive-pill ${r.startsWith($)?"active":""}`,onClick:()=>G($),children:[a.jsx($i,{size:14}),a.jsx("span",{children:$})]},$))}),a.jsxs("div",{style:{display:"flex",gap:"8px",marginBottom:"14px"},children:[a.jsx("input",{type:"text",value:r,onChange:$=>l($.target.value),placeholder:"Type path (e.g. D:\\Movies or C:\\Users\\ASUS\\Downloads)",style:{flex:1,fontFamily:"monospace",fontSize:"13px"}}),a.jsx("button",{className:"btn-secondary",onClick:()=>G(r),children:"Browse"}),a.jsx("button",{className:"btn-primary",onClick:()=>z(r),disabled:T,children:"Set & Scan"})]}),S&&a.jsxs("div",{className:"folder-list-container",children:[S.parentPath&&a.jsxs("div",{className:"folder-list-item",onClick:()=>G(S.parentPath),children:[a.jsx(ao,{size:16,color:"var(--text-dim)"}),a.jsx("span",{style:{color:"var(--text-muted)"},children:".. (Parent Directory)"})]}),(J=S.folders)==null?void 0:J.map($=>a.jsxs("div",{className:"folder-list-item",onClick:()=>G($.path),children:[a.jsx(ao,{size:16,color:"#fbbf24"}),a.jsx("span",{children:$.name})]},$.path)),((j=S.folders)==null?void 0:j.length)===0&&a.jsx("div",{style:{padding:"20px",textAlign:"center",color:"var(--text-dim)",fontSize:"13px"},children:"No subdirectories in this path."})]})]})]})}function Yy({authFetch:s}){var $,te,q,ee,O,Y,F,K,Me;const[e,t]=V.useState(null),[r,l]=V.useState([]),[c,d]=V.useState([]),[h,p]=V.useState(null),[m,v]=V.useState(!1),[M,_]=V.useState(""),[S,w]=V.useState("library"),[T,x]=V.useState(""),[y,C]=V.useState(""),[I,N]=V.useState(""),L=async()=>{try{const le=await(await s("/api/share/info")).json();t(le)}catch{}},k=async()=>{try{const le=await(await s("/api/share/links")).json();le.links&&l(le.links)}catch{}},E=async()=>{try{const le=await(await s("/api/movies")).json();le.movies&&d(le.movies)}catch{}};V.useEffect(()=>{L(),k(),E();const X=setInterval(L,3500);return()=>clearInterval(X)},[]);const D=(X,le)=>{X&&navigator.clipboard.writeText(X).then(()=>{p(le),setTimeout(()=>p(null),2500)})},G=async X=>{v(!0),_(`${X==="start"?"Starting":"Stopping"} Cloudflare Tunnel...`);try{const le=await s(`/api/admin/tunnel/${X}`,{method:"POST"}),ye=await le.json();if(!le.ok)throw new Error(ye.error||"Tunnel command failed");_(ye.message),await L()}catch(le){_(`Tunnel error: ${le.message}`)}finally{v(!1)}},H=async X=>{X.preventDefault();try{const le=await s("/api/share/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:S,movieId:S==="movie"?parseInt(T,10):null,passcode:y.trim(),label:I.trim()})}),ye=await le.json();if(!le.ok)throw new Error(ye.error||"Failed to generate link");_("New sharing link created successfully!"),C(""),N(""),await k()}catch(le){alert(le.message)}},z=async X=>{if(window.confirm("Revoke this share link? Viewers will no longer be able to access it."))try{const le=await s(`/api/share/revoke/${X}`,{method:"POST"}),ye=await le.json();if(!le.ok)throw new Error(ye.error);await k()}catch(le){alert(le.message)}},ie=(($=e==null?void 0:e.remote)==null?void 0:$.status)==="connected",J=((te=e==null?void 0:e.remote)==null?void 0:te.status)==="starting",j=(X,le=!0)=>{var we,Se;return`${le&&((we=e==null?void 0:e.remote)!=null&&we.publicUrl)?e.remote.publicUrl:((Se=e==null?void 0:e.local)==null?void 0:Se.url)||"http://localhost:5050"}/?share=${X}`};return a.jsxs("div",{className:"sharing-page-container",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:"Sharing & Network Access"}),a.jsx("p",{className:"page-sub-title",children:"Generate simple direct access links for remote friends and local Wi-Fi devices to stream movies from your PC."})]})}),M&&a.jsx("div",{className:"folder-status-box",style:{marginBottom:"20px"},children:M}),a.jsxs("div",{className:"sharing-sections-grid",children:[a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(jy,{size:22,color:"var(--success)"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section A: Local Network Access"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Same-Wi-Fi Home Streaming"})]})]}),a.jsx("span",{className:"status-pill-green",children:"LAN ONLINE"})]}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",lineHeight:1.5},children:"Any phone, tablet, smart TV or laptop connected to your home Wi-Fi network can open this address to browse and stream."}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",children:((q=e==null?void 0:e.local)==null?void 0:q.url)||"Detecting local IP..."}),a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var X;return D((X=e==null?void 0:e.local)==null?void 0:X.url,"local")},children:[h==="local"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:h==="local"?"Copied":"Copy"})]})]}),((ee=e==null?void 0:e.local)==null?void 0:ee.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone Camera (Same Wi-Fi)"}),a.jsx("img",{src:e.local.qrCode,alt:"Local QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]}),a.jsxs("div",{className:"sharing-card",children:[a.jsxs("div",{className:"sharing-card-header",children:[a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"10px"},children:[a.jsx(Tc,{size:22,color:"#38bdf8"}),a.jsxs("div",{children:[a.jsx("h3",{style:{fontSize:"17px",fontWeight:700},children:"Section B: Remote Access (Cloudflare Tunnel)"}),a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)"},children:"Worldwide Internet Streaming"})]})]}),a.jsx("span",{className:`status-pill ${ie?"status-pill-green":J?"status-pill-yellow":"status-pill-red"}`,children:((Y=(O=e==null?void 0:e.remote)==null?void 0:O.status)==null?void 0:Y.toUpperCase())||"STOPPED"})]}),a.jsxs("div",{style:{display:"flex",gap:"10px"},children:[a.jsxs("button",{className:"btn-primary",style:{flex:1,background:ie?"var(--bg-secondary)":"var(--success)"},onClick:()=>G("start"),disabled:m||ie,children:[a.jsx(un,{size:16,fill:"currentColor"}),a.jsx("span",{children:"START TUNNEL"})]}),a.jsxs("button",{className:"btn-danger",style:{flex:1},onClick:()=>G("stop"),disabled:m||!ie&&!J,children:[a.jsx(ca,{size:16,fill:"currentColor"}),a.jsx("span",{children:"STOP TUNNEL"})]})]}),a.jsxs("div",{className:"link-display-box",children:[a.jsx("span",{className:"link-text-mono",style:{color:"#38bdf8"},children:((F=e==null?void 0:e.remote)==null?void 0:F.publicUrl)||(J?"Connecting to Cloudflare edge...":"Tunnel stopped — Click START TUNNEL")}),((K=e==null?void 0:e.remote)==null?void 0:K.publicUrl)&&a.jsxs("button",{className:"btn-secondary",style:{padding:"8px 14px",fontSize:"13px"},onClick:()=>{var X;return D((X=e==null?void 0:e.remote)==null?void 0:X.publicUrl,"public")},children:[h==="public"?a.jsx(wn,{size:15,color:"var(--success)"}):a.jsx(aa,{size:15}),a.jsx("span",{children:h==="public"?"Copied":"Copy"})]})]}),((Me=e==null?void 0:e.remote)==null?void 0:Me.qrCode)&&a.jsxs("div",{style:{textAlign:"center",background:"var(--bg-secondary)",padding:"16px",borderRadius:"var(--radius-sm)"},children:[a.jsx("div",{style:{fontSize:"12px",color:"var(--text-muted)",marginBottom:"8px"},children:"Scan with Phone (Worldwide Access)"}),a.jsx("img",{src:e.remote.qrCode,alt:"Remote QR",style:{width:"140px",height:"140px",background:"#fff",padding:"6px",borderRadius:"8px"}})]})]})]}),a.jsxs("div",{className:"share-generator-card",children:[a.jsx("h3",{style:{fontSize:"18px",fontWeight:800,marginBottom:"6px"},children:"Generate Custom Sharing Links"}),a.jsx("p",{style:{fontSize:"13px",color:"var(--text-muted)",marginBottom:"18px"},children:"Create tailored streaming links. Viewers who open these links do not need an account — they can immediately stream the movies authorized by the link."}),a.jsxs("form",{onSubmit:H,style:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(200px, 1fr))",gap:"14px",alignItems:"flex-end"},children:[a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Sharing Scope:"}),a.jsxs("select",{value:S,onChange:X=>w(X.target.value),style:{width:"100%"},children:[a.jsx("option",{value:"library",children:"Entire Movie Library"}),a.jsx("option",{value:"movie",children:"Single Individual Movie"})]})]}),S==="movie"&&a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Select Movie:"}),a.jsxs("select",{value:T,onChange:X=>x(X.target.value),required:!0,style:{width:"100%"},children:[a.jsx("option",{value:"",children:"-- Choose Movie --"}),c.map(X=>a.jsx("option",{value:X.id,children:X.clean_title},X.id))]})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Optional Passcode / PIN:"}),a.jsx("input",{type:"text",placeholder:"e.g. 1234 (optional)",value:y,onChange:X=>C(X.target.value),style:{width:"100%"}})]}),a.jsxs("div",{children:[a.jsx("label",{style:{display:"block",fontSize:"12px",color:"var(--text-muted)",marginBottom:"6px",fontWeight:600},children:"Note / Label:"}),a.jsx("input",{type:"text",placeholder:"e.g. Link for John",value:I,onChange:X=>N(X.target.value),style:{width:"100%"}})]}),a.jsx("div",{children:a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"10px",height:"42px"},children:[a.jsx(Hh,{size:16}),a.jsx("span",{children:"Create Link"})]})})]})]}),a.jsxs("div",{className:"active-links-section",children:[a.jsxs("h3",{style:{fontSize:"17px",fontWeight:700,marginBottom:"14px"},children:["Active Sharing Links (",r.length,")"]}),a.jsx("div",{style:{overflowX:"auto",background:"var(--bg-card)",borderRadius:"var(--radius-md)",border:"1px solid var(--border-color)"},children:a.jsxs("table",{className:"sessions-table-3d",children:[a.jsx("thead",{children:a.jsxs("tr",{children:[a.jsx("th",{children:"Scope"}),a.jsx("th",{children:"Label / Target"}),a.jsx("th",{children:"Security"}),a.jsx("th",{children:"Views"}),a.jsx("th",{children:"Remote Sharing Link"}),a.jsx("th",{children:"Actions"})]})}),a.jsx("tbody",{children:r.map(X=>{const le=j(X.token,!0);return j(X.token,!1),a.jsxs("tr",{children:[a.jsx("td",{children:a.jsx("span",{className:`role-pill ${X.type==="movie"?"viewer":"admin"}`,children:X.type.toUpperCase()})}),a.jsxs("td",{children:[a.jsx("strong",{children:X.label||"Standard Link"}),X.movie_title&&a.jsx("div",{style:{fontSize:"12px",color:"#38bdf8"},children:X.movie_title})]}),a.jsx("td",{children:X.passcode?a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"4px",color:"#fbbf24",fontSize:"12px"},children:[a.jsx(Cc,{size:13}),a.jsx("span",{children:"PIN Protected"})]}):a.jsx("span",{style:{color:"var(--text-dim)",fontSize:"12px"},children:"Direct Access"})}),a.jsx("td",{children:X.access_count}),a.jsx("td",{children:a.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx("span",{style:{fontFamily:"monospace",fontSize:"12px",color:"#38bdf8",maxWidth:"240px",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},title:le,children:le}),a.jsx("button",{className:"btn-secondary",style:{padding:"4px 8px",fontSize:"11px"},onClick:()=>D(le,`link_${X.id}`),title:"Copy Remote Link",children:h===`link_${X.id}`?a.jsx(wn,{size:13,color:"var(--success)"}):a.jsx(aa,{size:13})})]})}),a.jsx("td",{children:a.jsxs("button",{className:"btn-danger",style:{padding:"5px 10px",fontSize:"12px"},onClick:()=>z(X.id),title:"Revoke Link",children:[a.jsx(Vr,{size:13}),a.jsx("span",{children:"Revoke"})]})})]},X.id)})})]})})]})]})}function Ky({onSelectMovie:s,onPlayMovie:e,authFetch:t}){const[r,l]=V.useState([]),[c,d]=V.useState(!0),h=()=>{d(!0),t("/api/user/favorites").then(m=>m.json()).then(m=>{m.favorites&&l(m.favorites.map(v=>({...v,is_favorite:1})))}).catch(()=>{}).finally(()=>d(!1))};V.useEffect(()=>{h()},[]);const p=async m=>{try{await t(`/api/user/favorites/${m}`,{method:"POST"}),l(v=>v.filter(M=>M.id!==m))}catch{}};return a.jsxs("div",{className:"favorites-page-shell",children:[a.jsx("div",{className:"page-header-row",children:a.jsxs("div",{children:[a.jsx("h1",{className:"page-main-title",children:a.jsxs("span",{style:{display:"inline-flex",alignItems:"center",gap:"10px"},children:[a.jsx(Ni,{size:26,fill:"var(--accent)",color:"var(--accent)"}),"My Favorites"]})}),a.jsx("p",{className:"page-sub-title",children:"Movies you've marked as favorites for quick access."})]})}),c?a.jsxs("div",{className:"loading-state-3d",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading your favorites..."})]}):r.length===0?a.jsxs("div",{className:"empty-state-3d",children:[a.jsx(Ni,{size:48,color:"var(--text-dim)"}),a.jsx("h3",{children:"No Favorites Yet"}),a.jsx("p",{children:"Browse your movie library and tap the heart icon on any poster to add it to your favorites collection."})]}):a.jsx("div",{className:"movie-grid-3d",children:r.map(m=>a.jsx(zr,{movie:m,onSelect:s,onPlay:e,onToggleFavorite:p},m.id))})]})}function Zy({authFetch:s,onOpenFolderPicker:e,onOpenShareModal:t}){var pt,Ye,_t,dt,ct,je,ht,bt,he,Te,Ee,Mt,At;const[r,l]=V.useState(null),[c,d]=V.useState([]),[h,p]=V.useState(!1),[m,v]=V.useState(!1),[M,_]=V.useState(""),[S,w]=V.useState({total:0,matched:0,uncertain:0,missing:0,hasApiKey:!1}),[T,x]=V.useState(""),[y,C]=V.useState(""),[I,N]=V.useState(!1),[L,k]=V.useState(""),[E,D]=V.useState(""),[G,H]=V.useState(""),[z,ie]=V.useState(""),[J,j]=V.useState(""),$=()=>{s("/api/admin/dashboard-stats").then(Le=>Le.json()).then(Le=>l(Le)).catch(()=>{})},te=()=>{s("/api/auth/users").then(Le=>Le.json()).then(Le=>{Le.users&&d(Le.users)}).catch(()=>{})},q=()=>{s("/api/movies/metadata/status").then(Le=>Le.json()).then(Le=>w(Le)).catch(()=>{})},ee=()=>{s("/api/admin/settings").then(Le=>Le.json()).then(Le=>{var U;(U=Le.settings)!=null&&U.tmdb_api_key&&x(Le.settings.tmdb_api_key)}).catch(()=>{})};V.useEffect(()=>{$(),te(),q(),ee();const Le=setInterval($,3e3);return()=>clearInterval(Le)},[]);const O=async Le=>{Le.preventDefault(),C("");try{(await s("/api/admin/settings",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdb_api_key:T.trim()})})).ok&&(C("TMDB API Key saved successfully!"),q(),setTimeout(()=>C(""),3e3))}catch{C("Failed to save API key")}},Y=async()=>{N(!0),k("Recognizing movies and caching high-res artwork...");try{const U=await(await s("/api/movies/batch/recognize",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({limit:40})})).json();k(U.message||"Auto-recognition finished."),q(),$()}catch(Le){k(`Error: ${Le.message}`)}finally{N(!1)}},F=async Le=>{v(!0),_(`Applying server ${Le}...`);try{const U=await s(`/api/admin/server/${Le}`,{method:"POST"}),Be=await U.json();if(!U.ok)throw new Error(Be.error||`${Le} failed`);_(Be.message||`Server ${Le} completed successfully.`),$()}catch(U){_(`Error: ${U.message}`)}finally{v(!1)}},K=async()=>{v(!0),_("Scanning movie folder for new files...");try{const Le=await s("/api/admin/rescan",{method:"POST"}),U=await Le.json();if(!Le.ok)throw new Error(U.error||"Rescan failed");_(U.message||"Library rescan complete."),$()}catch(Le){_(`Error: ${Le.message}`)}finally{v(!1)}},Me=()=>{var U;const Le=(U=r==null?void 0:r.tunnel)==null?void 0:U.publicUrl;Le&&navigator.clipboard.writeText(Le).then(()=>{p(!0),setTimeout(()=>p(!1),2500)})},X=async Le=>{Le.preventDefault(),ie(""),j("");try{const U=await s("/api/auth/users",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({username:E,password:G,role:"viewer"})}),Be=await U.json();if(!U.ok)throw new Error(Be.error||"Failed to create user");j(`Viewer account "${E}" created!`),D(""),H(""),te()}catch(U){ie(U.message)}},le=async(Le,U)=>{if(window.confirm(`Delete viewer account "${U}"?`))try{const Be=await s(`/api/auth/users/${Le}`,{method:"DELETE"}),ot=await Be.json();if(!Be.ok)throw new Error(ot.error);te()}catch(Be){alert(Be.message)}},ye=()=>{window.open(on(`/api/admin/backup?token=${encodeURIComponent(localStorage.getItem("streamlink_token"))}`),"_blank")},we=Le=>{const U=Le.target.files[0];if(!U)return;const Be=new FileReader;Be.onload=async ot=>{try{const ft=JSON.parse(ot.target.result),Ae=await s("/api/admin/restore",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(ft)}),Wt=await Ae.json();if(!Ae.ok)throw new Error(Wt.error);alert("Backup successfully restored!"),$()}catch(ft){alert(`Restore error: ${ft.message}`)}},Be.readAsText(U)},Se=((pt=r==null?void 0:r.tunnel)==null?void 0:pt.status)==="connected",Re=((Ye=r==null?void 0:r.tunnel)==null?void 0:Ye.status)==="starting";return a.jsxs("div",{className:"dash-container",children:[a.jsxs("div",{className:"dash-page-header",children:[a.jsxs("div",{children:[a.jsx("h1",{className:"dash-page-title",children:"Server Dashboard"}),a.jsx("p",{className:"dash-page-desc",children:"Manage your movie storage, remote streaming link, and viewer accounts."})]}),a.jsxs("div",{className:"dash-header-actions",children:[a.jsxs("button",{className:"btn-secondary",onClick:K,disabled:m,title:"Scan your movie folder for newly added files",children:[a.jsx(Ri,{size:14,className:m?"dash-spin":""}),a.jsx("span",{children:"Rescan Library"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>F("restart"),disabled:m,title:"Restart the local StreamLink server",children:[a.jsx(sc,{size:14}),a.jsx("span",{children:"Restart Server"})]})]})]}),M&&a.jsxs("div",{className:"dash-status-toast",children:[a.jsx("span",{children:M}),a.jsx("button",{onClick:()=>_(""),className:"dash-toast-close",title:"Dismiss",children:a.jsx(Wi,{size:14})})]}),a.jsxs("div",{className:"dash-sections-stack",children:[a.jsxs("div",{className:"dash-panel dash-panel-highlight",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx("div",{className:`dash-status-indicator ${Se?"indicator-online":Re?"indicator-starting":"indicator-offline"}`}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Remote Access"}),a.jsx("p",{className:"dash-panel-sub",children:Se?"Your movie library is securely accessible from anywhere.":Re?"Connecting encrypted remote streaming tunnel...":"Stream outside your home network on phones, tablets, or remote browsers."})]})]}),a.jsx("div",{children:Se?a.jsxs("button",{className:"btn-secondary dash-btn-danger",onClick:()=>F("stop"),disabled:m,children:[a.jsx(ca,{size:14,fill:"currentColor"}),a.jsx("span",{children:"Pause Remote Access"})]}):a.jsxs("button",{className:"btn-primary",onClick:()=>F("start"),disabled:m||Re,children:[a.jsx(un,{size:14,fill:"currentColor"}),a.jsx("span",{children:Re?"Connecting...":"Enable Remote Access"})]})})]}),Se&&((_t=r==null?void 0:r.tunnel)!=null&&_t.publicUrl)?a.jsxs("div",{className:"dash-link-bar",children:[a.jsxs("div",{className:"dash-link-content",children:[a.jsx("span",{className:"dash-link-label",children:"Your Live Streaming Link:"}),a.jsx("span",{className:"dash-link-url",title:r.tunnel.publicUrl,children:r.tunnel.publicUrl})]}),a.jsxs("div",{className:"dash-link-buttons",children:[a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:Me,title:"Copy link to clipboard",children:[h?a.jsx(wn,{size:14,color:"#10B981"}):a.jsx(aa,{size:14}),a.jsx("span",{children:h?"Copied!":"Copy"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:t,title:"Display QR Code for mobile",children:[a.jsx(ry,{size:14}),a.jsx("span",{children:"QR Code"})]}),a.jsxs("a",{href:r.tunnel.publicUrl,target:"_blank",rel:"noreferrer",className:"btn-secondary dash-btn-compact",title:"Open live link in new tab",children:[a.jsx(n_,{size:14}),a.jsx("span",{children:"Open"})]})]})]}):a.jsxs("div",{className:"dash-link-offline",children:[a.jsx(Tc,{size:16}),a.jsxs("span",{children:["Local in-home access is available at ",a.jsx("code",{className:"dash-code",children:"http://localhost:5050"}),'. Click "Enable Remote Access" to securely share outside home.']})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx($i,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Movie Storage"})]}),a.jsxs("button",{className:"btn-secondary dash-btn-compact",onClick:e,title:"Select another folder on your computer",children:[a.jsx(ao,{size:14}),a.jsx("span",{children:"Change Folder"})]})]}),a.jsxs("div",{className:"dash-storage-box",children:[a.jsxs("div",{className:"dash-folder-info",children:[a.jsx(ao,{size:15,className:"dash-folder-icon"}),a.jsx("span",{className:"dash-folder-text",title:(dt=r==null?void 0:r.library)==null?void 0:dt.folder,children:((ct=r==null?void 0:r.library)==null?void 0:ct.folder)||"No folder selected"})]}),a.jsx("span",{className:`dash-badge ${(je=r==null?void 0:r.library)!=null&&je.folderExists?"badge-success":"badge-error"}`,children:(ht=r==null?void 0:r.library)!=null&&ht.folderExists?"Connected":"Folder Not Found"})]}),a.jsxs("div",{className:"dash-metrics-grid",children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Movies"}),a.jsx("span",{className:"dash-metric-number",children:((bt=r==null?void 0:r.library)==null?void 0:bt.totalMovies)||0})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Disk Storage"}),a.jsx("span",{className:"dash-metric-number",children:oi((he=r==null?void 0:r.library)==null?void 0:he.totalDiskBytes)})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Server Port"}),a.jsxs("span",{className:"dash-metric-number",children:[":",((Te=r==null?void 0:r.server)==null?void 0:Te.port)||5050]})]})]})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(ex,{size:18,className:"dash-icon"}),a.jsx("h2",{className:"dash-panel-heading",children:"Now Playing"})]}),a.jsxs("span",{className:"dash-pill-counter",children:[((Ee=r==null?void 0:r.streaming)==null?void 0:Ee.activeViewersCount)||0," Active"]})]}),((At=(Mt=r==null?void 0:r.streaming)==null?void 0:Mt.activeSessions)==null?void 0:At.length)===0?a.jsxs("div",{className:"dash-empty-state",children:[a.jsx(Gh,{size:24,className:"dash-empty-icon"}),a.jsx("p",{className:"dash-empty-title",children:"No one is streaming right now"}),a.jsx("p",{className:"dash-empty-sub",children:"When movies are played on connected phones or browsers, real-time viewer details will appear here."})]}):a.jsx("div",{className:"dash-sessions-list",children:r.streaming.activeSessions.map(Le=>a.jsxs("div",{className:"dash-session-row",children:[a.jsx("div",{className:"dash-session-avatar",children:Le.username.charAt(0).toUpperCase()}),a.jsxs("div",{className:"dash-session-text",children:[a.jsx("span",{className:"dash-session-movie",children:Le.movieTitle}),a.jsxs("span",{className:"dash-session-user",children:[Le.username," (",Le.ip,")"]})]}),a.jsx("span",{className:"dash-session-bandwidth",children:oi(Le.bytesTransmitted)})]},Le.id))})]})]}),a.jsxs("div",{className:"dash-two-col-grid",children:[a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(py,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Viewer Accounts"}),a.jsx("p",{className:"dash-panel-sub",children:"Manage user logins for friends and family."})]})]})}),a.jsxs("form",{onSubmit:X,className:"dash-user-form",children:[a.jsxs("div",{className:"dash-user-inputs",children:[a.jsx("input",{type:"text",placeholder:"Username",value:E,onChange:Le=>D(Le.target.value),required:!0,className:"dash-input"}),a.jsx("input",{type:"password",placeholder:"Password (min 6 chars)",value:G,onChange:Le=>H(Le.target.value),required:!0,className:"dash-input"}),a.jsxs("button",{type:"submit",className:"btn-primary dash-btn-compact",children:[a.jsx(Ay,{size:14}),a.jsx("span",{children:"Add"})]})]}),z&&a.jsx("span",{className:"dash-form-error",children:z}),J&&a.jsx("span",{className:"dash-form-success",children:J})]}),a.jsx("div",{className:"dash-user-list",children:c.map(Le=>a.jsxs("div",{className:"dash-user-row",children:[a.jsxs("div",{className:"dash-user-info",children:[a.jsx("span",{className:"dash-user-name",children:Le.username}),a.jsx("span",{className:`dash-role-badge ${Le.role}`,children:Le.role})]}),Le.role!=="admin"&&a.jsx("button",{className:"dash-delete-btn",onClick:()=>le(Le.id,Le.username),title:`Remove user ${Le.username}`,children:a.jsx(Vr,{size:13})})]},Le.id))})]}),a.jsxs("div",{className:"dash-panel",children:[a.jsx("div",{className:"dash-panel-header",children:a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(jm,{size:18,className:"dash-icon"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Backup & Settings"}),a.jsx("p",{className:"dash-panel-sub",children:"Safely export or restore watch progress, favorites, and settings without touching movie files."})]})]})}),a.jsxs("div",{className:"dash-backup-actions",children:[a.jsxs("button",{className:"btn-secondary dash-backup-btn",onClick:ye,children:[a.jsx(jm,{size:15}),a.jsx("span",{children:"Export Backup (.json)"})]}),a.jsxs("label",{className:"btn-secondary dash-backup-btn dash-file-upload",children:[a.jsx(Cy,{size:15}),a.jsx("span",{children:"Restore Backup"}),a.jsx("input",{type:"file",accept:".json",onChange:we,style:{display:"none"}})]})]})]})]}),a.jsxs("div",{className:"dash-panel",style:{marginTop:"24px"},children:[a.jsxs("div",{className:"dash-panel-header",children:[a.jsxs("div",{className:"dash-panel-title-group",children:[a.jsx(Yn,{size:20,className:"dash-icon text-cyan"}),a.jsxs("div",{children:[a.jsx("h2",{className:"dash-panel-heading",children:"Automatic Movie Artwork & Metadata System"}),a.jsx("p",{className:"dash-panel-sub",children:"TMDB movie recognition, vertical poster & wide backdrop caching, and metadata matching."})]})]}),a.jsx("div",{className:"dash-panel-actions",children:a.jsxs("button",{className:"btn-primary",onClick:Y,disabled:I||!S.hasApiKey,title:S.hasApiKey?"Scan entire library and auto-fetch missing posters & backdrops":"Enter TMDB API Key below first",children:[a.jsx(Ri,{size:14,className:I?"rescan-spinning":""}),a.jsx("span",{children:I?"Fetching Artwork...":"Auto-Fetch All Artwork"})]})})]}),L&&a.jsxs("div",{className:"dash-status-alert info",style:{marginBottom:"18px"},children:[a.jsx(Yn,{size:15,className:"text-cyan pulse-icon"}),a.jsx("span",{children:L})]}),a.jsxs("div",{className:"dash-metrics-grid",style:{marginBottom:"20px"},children:[a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Total Titles"}),a.jsx("span",{className:"dash-metric-number",children:S.total})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Artwork Matched"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#22C55E"},children:S.matched})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Uncertain Matches"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#F59E0B"},children:S.uncertain})]}),a.jsxs("div",{className:"dash-metric-item",children:[a.jsx("span",{className:"dash-metric-label",children:"Missing Artwork"}),a.jsx("span",{className:"dash-metric-number",style:{color:"#EF4444"},children:S.missing})]})]}),a.jsxs("form",{onSubmit:O,className:"tmdb-key-config-row",children:[a.jsxs("div",{className:"tmdb-key-label-wrap",children:[a.jsx(j_,{size:16,className:"text-cyan"}),a.jsxs("div",{children:[a.jsx("strong",{children:"The Movie Database (TMDB) API Key:"}),a.jsx("p",{className:"text-xs text-dim",children:"Used by backend server to automatically query posters, backdrops, and descriptions. Your key is stored securely on the host PC and never exposed to client browsers."})]})]}),a.jsxs("div",{className:"tmdb-key-input-group",children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Paste your TMDB v3 API Key (e.g. a1b2c3d4e5...)",value:T,onChange:Le=>x(Le.target.value)}),a.jsx("button",{type:"submit",className:"btn-secondary",children:"Save Key"})]})]}),y&&a.jsxs("div",{className:"dash-form-success",style:{marginTop:"10px"},children:[a.jsx(nx,{size:14}),a.jsx("span",{children:y})]}),a.jsx("div",{className:"tmdb-attribution-footer",children:a.jsx("span",{children:"This product uses the TMDB API but is not endorsed or certified by TMDB. Movie posters and cinematic artwork remain copyright of their respective production studios."})})]})]})]})}function Qy(){const{login:s}=Wh(),[e,t]=V.useState(""),[r,l]=V.useState(""),[c,d]=V.useState(""),[h,p]=V.useState(!1),m=typeof window<"u"&&!window.location.hostname.includes("localhost")&&!window.location.hostname.includes("127.0.0.1"),[v,M]=V.useState(()=>m||!hs()),[_,S]=V.useState(()=>hs()||""),[w,T]=V.useState(!1),[x,y]=V.useState(null),C=async N=>{N.preventDefault(),d(""),p(!0);try{await s(e.trim(),r)}catch(L){const k=L.message||"Login failed";k.includes("fetch")||k.includes("Failed to fetch")||k.includes("NetworkError")||k.includes("Cannot connect")?(d("Cannot connect to your StreamLink server. Please enter your Cloudflare Tunnel URL below and click Save."),M(!0)):d(k)}finally{p(!1)}},I=async N=>{let L=(N!==void 0?N:_).trim();if(!L){Xm(""),S(""),y({type:"success",message:"Server URL cleared (using local /api)."}),d("");return}let k=L.replace(/\/+$/,"");if(/^https?:\/\//i.test(k)||(k=`https://${k}`),k=k.replace(/\/api\/?$/i,""),k.includes("your-temporary-url")||k.includes("your-tunnel")||k.includes("sponsored-fee-imposed-associations")){y({type:"error",message:"Please replace the placeholder with your actual Cloudflare Tunnel URL generated on your PC."});return}T(!0),y(null);const E=`${k}/api/health`;try{const D=await fetch(E,{signal:AbortSignal.timeout(8e3)});if(D.ok)Xm(k),S(k),y({type:"success",message:"Connected to StreamLink Server successfully!"}),d("");else throw new Error(`Server returned status ${D.status}`)}catch{y({type:"error",message:"Could not connect. Ensure start-streamlink.bat is running on your PC and Cloudflare Tunnel is started in your Dashboard."})}finally{T(!1)}};return a.jsxs("div",{className:"login-page-shell",children:[a.jsx("div",{className:"login-bg-gradient"}),a.jsxs("div",{className:"login-card",children:[a.jsxs("div",{className:"login-brand",children:[a.jsx("div",{className:"login-logo-icon",children:a.jsx(ai,{size:28})}),a.jsxs("h1",{className:"login-brand-name",children:["Stream",a.jsx("span",{style:{color:"var(--accent)"},children:"Link"})]}),a.jsx("p",{className:"login-brand-sub",children:"Personal Self-Hosted Movie Streaming"})]}),c&&a.jsxs("div",{className:"login-error",style:{marginBottom:"16px"},children:[a.jsx(uo,{size:16,style:{flexShrink:0}}),a.jsx("span",{children:c})]}),a.jsxs("form",{className:"login-form",onSubmit:C,children:[a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-username",children:"Username"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-username",type:"text",placeholder:"Enter username",value:e,onChange:N=>t(N.target.value),required:!0,autoFocus:!0}),a.jsx(lx,{size:16,className:"login-input-icon"})]})]}),a.jsxs("div",{className:"login-field",children:[a.jsx("label",{htmlFor:"sl-password",children:"Password"}),a.jsxs("div",{className:"login-input-wrapper",children:[a.jsx("input",{id:"sl-password",type:"password",placeholder:"Enter password",value:r,onChange:N=>l(N.target.value),required:!0}),a.jsx(Cc,{size:16,className:"login-input-icon"})]})]}),a.jsxs("button",{type:"submit",className:"btn-primary",style:{width:"100%",padding:"13px",fontSize:"15px",marginTop:"8px"},disabled:h,children:[a.jsx("span",{children:h?"Authenticating...":"Sign In"}),!h&&a.jsx(co,{size:16})]})]}),a.jsxs("div",{className:"login-hint",children:["Default credentials: ",a.jsx("strong",{style:{color:"#fff"},children:"admin"})," / ",a.jsx("strong",{style:{color:"#fff"},children:"admin123"})]}),a.jsxs("div",{className:"login-server-config",style:{marginTop:"16px"},children:[a.jsxs("button",{type:"button",className:"login-server-toggle",onClick:()=>M(!v),style:{fontWeight:600,color:"#fff"},children:[a.jsxs("span",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[a.jsx(hy,{size:15,style:{color:"var(--accent)"}}),"Server Connection",a.jsx("span",{style:{fontSize:"10px",padding:"2px 6px",borderRadius:"4px",background:hs()?"rgba(34,197,94,0.2)":"rgba(255,255,255,0.08)",color:hs()?"#4ade80":"var(--text-dim)"},children:hs()?"Configured":"Local / Not Set"})]}),v?a.jsx(u_,{size:15}):a.jsx(a_,{size:15})]}),v&&a.jsxs("div",{className:"login-server-panel",style:{marginTop:"10px"},children:[a.jsx("label",{className:"login-server-label",children:"PC Tunnel URL (Cloudflare):"}),a.jsxs("div",{className:"login-server-input-row",children:[a.jsx("input",{type:"url",className:"login-server-input",placeholder:"https://your-tunnel.trycloudflare.com",value:_,onChange:N=>S(N.target.value)}),a.jsxs("button",{type:"button",className:"btn-primary",onClick:()=>I(),disabled:w,style:{padding:"8px 14px",fontSize:"12px",whiteSpace:"nowrap"},children:[w?a.jsx(Ri,{size:13,className:"spin"}):a.jsx(wn,{size:13}),a.jsx("span",{children:"Save"})]})]}),a.jsxs("div",{className:"login-server-presets",children:[a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{S("http://localhost:5050"),I("http://localhost:5050")},children:[a.jsx(Tc,{size:11,style:{display:"inline",marginRight:"4px"}}),"Localhost (5050)"]}),hs()&&a.jsxs("button",{type:"button",className:"login-preset-chip",onClick:()=>{S(""),I("")},children:[a.jsx(oo,{size:11,style:{display:"inline",marginRight:"4px"}}),"Reset / Clear URL"]})]}),x&&a.jsx("div",{className:`login-server-feedback ${x.type}`,children:x.message}),a.jsxs("div",{className:"login-server-guide",children:[a.jsxs("div",{className:"login-server-guide-title",children:[a.jsx(ho,{size:13,style:{flexShrink:0}}),a.jsx("span",{children:"How to connect when hosted on Vercel:"})]}),a.jsxs("ol",{className:"login-server-steps",children:[a.jsxs("li",{children:["Run ",a.jsx("code",{children:"start-streamlink.bat"})," on your PC (where movies are stored)."]}),a.jsxs("li",{children:["In your PC browser, open ",a.jsx("code",{children:"http://localhost:5050"})," and go to ",a.jsx("strong",{children:"Dashboard"}),"."]}),a.jsxs("li",{children:["Under ",a.jsx("strong",{children:"Cloudflare Tunnel"}),", click ",a.jsx("strong",{children:"START SERVER"}),"."]}),a.jsxs("li",{children:["Copy your live ",a.jsx("code",{children:"https://....trycloudflare.com"})," link, paste it in the box above, and click ",a.jsx("strong",{children:"Save"}),"."]})]}),a.jsxs("div",{className:"login-server-tip",children:["💡 ",a.jsx("strong",{children:"Tip:"})," You don't need Vercel! Your Cloudflare Tunnel link from your PC can be shared and opened directly on any phone or device."]})]})]})]})]})]})}function Pl(s){if(isNaN(s)||s<0)return"00:00";const e=Math.floor(s/3600),t=Math.floor(s%3600/60),r=Math.floor(s%60),l=t<10?`0${t}`:t,c=r<10?`0${r}`:r;return e>0?`${e}:${l}:${c}`:`${l}:${c}`}function dx({movie:s,onBack:e,token:t,authFetch:r}){const l=V.useRef(null),c=V.useRef(null),d=V.useRef(null),[h,p]=V.useState(!1),[m,v]=V.useState(0),[M,_]=V.useState(s.duration||0),[S,w]=V.useState(0),[T,x]=V.useState(1),[y,C]=V.useState(!1),[I,N]=V.useState(1),[L,k]=V.useState(!0),[E,D]=V.useState(!1),[G,H]=V.useState(!1),[z,ie]=V.useState(-1),[J,j]=V.useState(!1),[$,te]=V.useState(!1),[q,ee]=V.useState(!1),[O,Y]=V.useState(null),[F,K]=V.useState({visible:!1,xPercent:0,time:0}),[Me,X]=V.useState(null),le=V.useRef(null),ye=V.useRef(null),we=()=>{k(!0),ye.current&&clearTimeout(ye.current),ye.current=setTimeout(()=>{l.current&&!l.current.paused&&(k(!1),D(!1),H(!1))},3500)},Se=ve=>{X(ve),le.current&&clearTimeout(le.current),le.current=setTimeout(()=>{X(null)},650)},Re=()=>{var re;ee(!1);const ve=(re=l.current)==null?void 0:re.error;let P="An error occurred during video playback.",b=(ve==null?void 0:ve.code)||0;b===1?P="Video playback was aborted.":b===2?P="A network error occurred while loading the video stream.":b===3?P="An error occurred while decoding the video stream.":b===4&&(P="This video format or codec is not supported by your browser."),Y({code:b,message:P,codec:s.codec||"Unknown",container:s.container||"Unknown",audioCodec:s.audio_codec||"Unknown"})},pt=()=>{Y(null),ee(!0),l.current&&(l.current.load(),l.current.play().then(()=>{p(!0),ee(!1)}).catch(()=>{Re()}))};V.useEffect(()=>{if(s.progress_seconds&&s.progress_seconds>15){j(!0);const ve=setTimeout(()=>{j(!1)},7e3);return()=>clearTimeout(ve)}},[s]);const Ye=s.streamUrlOverride||`/api/movies/${s.id}/stream?token=${encodeURIComponent(t||"")}`,_t=on(Ye),dt=()=>{we()};V.useEffect(()=>{const ve=setInterval(()=>{if(l.current&&h&&r){const P=l.current.currentTime,b=l.current.duration||M;P>5&&r("/api/user/progress",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({movieId:s.id,progressSeconds:Math.floor(P),durationSeconds:Math.floor(b)})}).catch(()=>{})}},5e3);return()=>clearInterval(ve)},[h,M,s.id]);const ct=()=>{l.current&&(l.current.paused?l.current.play().then(()=>{p(!0),Se("play"),we()}).catch(()=>{}):(l.current.pause(),p(!1),Se("pause"),k(!0),ye.current&&clearTimeout(ye.current)))},je=ve=>{j(!1),l.current&&(l.current.currentTime=Math.max(0,Math.min(l.current.duration||M,l.current.currentTime+ve)),Se(ve>0?"fwd":"rwd"),we())},ht=ve=>{if(j(!1),!d.current||!l.current)return;const P=d.current.getBoundingClientRect(),re=Math.max(0,Math.min(1,(ve.clientX-P.left)/P.width))*(l.current.duration||M);l.current.currentTime=re,v(re),we()},bt=ve=>{var Pe;if(!d.current)return;const P=d.current.getBoundingClientRect(),b=Math.max(0,Math.min(ve.clientX-P.left,P.width)),re=b/P.width*100,be=((Pe=l.current)==null?void 0:Pe.duration)||M||0,ge=b/P.width*be;K({visible:!0,xPercent:re,time:ge})},he=()=>{K(ve=>({...ve,visible:!1}))},Te=ve=>{if(!l.current)return;const P=Math.max(0,Math.min(1,ve));l.current.volume=P,x(P),C(P===0)},Ee=()=>{l.current&&(y?(l.current.muted=!1,l.current.volume=T||.5,C(!1)):(l.current.muted=!0,C(!0)))},Mt=ve=>{l.current&&(l.current.playbackRate=ve,N(ve),D(!1),we())};V.useEffect(()=>{const ve=()=>{var ge,Pe,Ue,pe;const be=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||(ge=l.current)!=null&&ge.webkitDisplayingFullscreen);if(te(be),be)document.body.classList.add("streamlink-fullscreen-active");else{document.body.classList.remove("streamlink-fullscreen-active");try{(Ue=(Pe=window.screen)==null?void 0:Pe.orientation)!=null&&Ue.unlock?window.screen.orientation.unlock():(pe=window.screen)!=null&&pe.unlockOrientation&&window.screen.unlockOrientation()}catch{}}},P=()=>{te(!0),document.body.classList.add("streamlink-fullscreen-active")},b=()=>{var be,ge;te(!1),document.body.classList.remove("streamlink-fullscreen-active");try{(ge=(be=window.screen)==null?void 0:be.orientation)!=null&&ge.unlock&&window.screen.orientation.unlock()}catch{}};document.addEventListener("fullscreenchange",ve),document.addEventListener("webkitfullscreenchange",ve),document.addEventListener("mozfullscreenchange",ve),document.addEventListener("MSFullscreenChange",ve);const re=l.current;return re&&(re.addEventListener("webkitbeginfullscreen",P),re.addEventListener("webkitendfullscreen",b)),()=>{var be,ge;document.removeEventListener("fullscreenchange",ve),document.removeEventListener("webkitfullscreenchange",ve),document.removeEventListener("mozfullscreenchange",ve),document.removeEventListener("MSFullscreenChange",ve),re&&(re.removeEventListener("webkitbeginfullscreen",P),re.removeEventListener("webkitendfullscreen",b)),document.body.classList.remove("streamlink-fullscreen-active");try{(ge=(be=window.screen)==null?void 0:be.orientation)!=null&&ge.unlock&&window.screen.orientation.unlock()}catch{}}},[]);const At=async()=>{var be,ge,Pe,Ue,pe,xe,ke,W;const ve=c.current,P=l.current;if(!ve)return;const b=!!(document.fullscreenElement||document.webkitFullscreenElement||document.mozFullScreenElement||document.msFullscreenElement||P!=null&&P.webkitDisplayingFullscreen),re=P==null?void 0:P.currentTime;if(b){try{document.exitFullscreen?await document.exitFullscreen():document.webkitExitFullscreen?await document.webkitExitFullscreen():document.mozCancelFullScreen?await document.mozCancelFullScreen():document.msExitFullscreen?await document.msExitFullscreen():P&&P.webkitExitFullscreen&&P.webkitExitFullscreen()}catch{}try{(ke=(xe=window.screen)==null?void 0:xe.orientation)!=null&&ke.unlock?window.screen.orientation.unlock():(W=window.screen)!=null&&W.unlockOrientation&&window.screen.unlockOrientation()}catch{}P&&re&&Math.abs(P.currentTime-re)>2&&(P.currentTime=re),te(!1)}else{try{ve.requestFullscreen?await ve.requestFullscreen():ve.webkitRequestFullscreen?await ve.webkitRequestFullscreen():ve.mozRequestFullScreen?await ve.mozRequestFullScreen():ve.msRequestFullscreen?await ve.msRequestFullscreen():P&&P.webkitEnterFullscreen&&P.webkitEnterFullscreen()}catch{if(P&&P.webkitEnterFullscreen)try{P.webkitEnterFullscreen()}catch{}}try{(ge=(be=window.screen)==null?void 0:be.orientation)!=null&&ge.lock?await window.screen.orientation.lock("landscape"):(Pe=window.screen)!=null&&Pe.lockOrientation?window.screen.lockOrientation("landscape"):(Ue=window.screen)!=null&&Ue.mozLockOrientation?window.screen.mozLockOrientation("landscape"):(pe=window.screen)!=null&&pe.msLockOrientation&&window.screen.msLockOrientation("landscape")}catch{}P&&re&&Math.abs(P.currentTime-re)>2&&(P.currentTime=re),te(!0)}},Le=()=>{"ontouchstart"in window||navigator.maxTouchPoints>0?k(P=>{const b=!P;return b&&we(),b}):ct()};V.useEffect(()=>{const ve=P=>{var b;if(!["INPUT","TEXTAREA"].includes((b=document.activeElement)==null?void 0:b.tagName))switch(P.code){case"Space":P.preventDefault(),ct();break;case"ArrowLeft":P.preventDefault(),je(-10);break;case"ArrowRight":P.preventDefault(),je(10);break;case"ArrowUp":P.preventDefault(),Te(T+.1);break;case"ArrowDown":P.preventDefault(),Te(T-.1);break;case"KeyM":Ee();break;case"KeyF":At();break;case"Escape":document.fullscreenElement||e();break}};return window.addEventListener("keydown",ve),()=>window.removeEventListener("keydown",ve)},[h,T,y,M]);const U=ve=>{if(ie(ve),H(!1),we(),!l.current)return;const P=l.current.textTracks;for(let b=0;b<P.length;b++)P[b].mode=b===ve?"showing":"disabled"},Be=()=>{l.current&&s.progress_seconds&&(l.current.currentTime=s.progress_seconds,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),we()},ot=()=>{l.current&&(l.current.currentTime=0,l.current.play().then(()=>p(!0)).catch(()=>{})),j(!1),we()},ft=()=>{if(l.current&&(v(l.current.currentTime),l.current.buffered.length>0)){const ve=l.current.buffered.end(l.current.buffered.length-1),P=l.current.duration||M;P>0&&w(Math.min(100,ve/P*100))}},Ae=()=>{l.current&&_(l.current.duration||s.duration||0)},Wt=M>0?m/M*100:0,rt=s.subtitles||[];return a.jsx("div",{ref:c,className:`player-page ${$?"player-page-fullscreen":""}`,onMouseMove:dt,style:{cursor:L?"default":"none"},children:a.jsxs("div",{className:"player-video-wrapper",onClick:Le,children:[a.jsx("video",{ref:l,src:_t,className:"player-video",onTimeUpdate:ft,onLoadedMetadata:Ae,onPlay:()=>{p(!0),ee(!1)},onPause:()=>p(!1),onWaiting:()=>ee(!0),onCanPlay:()=>ee(!1),onPlaying:()=>ee(!1),onSeeking:()=>ee(!0),onSeeked:()=>ee(!1),onError:Re,playsInline:!0,"webkit-playsinline":"true","x5-video-player-type":"h5",children:rt.map((ve,P)=>a.jsx("track",{kind:"subtitles",label:ve.language,src:on(`/api/movies/${s.id}/subtitles/${P}?token=${encodeURIComponent(t||"")}`),default:P===z},P))}),q&&!O&&a.jsxs("div",{className:"player-buffering-overlay",children:[a.jsx("div",{className:"player-buffer-spinner"}),a.jsx("span",{className:"player-buffer-text",children:"Buffering Stream..."})]}),O&&a.jsx("div",{className:"player-error-overlay",onClick:ve=>ve.stopPropagation(),children:a.jsxs("div",{className:"player-error-card",children:[a.jsx("div",{className:"player-error-icon",children:a.jsx(fo,{size:36,color:"#EF4444"})}),a.jsx("h3",{className:"player-error-title",children:O.code===4?"Codec Not Supported in Browser":"Stream Playback Error"}),a.jsx("p",{className:"player-error-desc",children:O.message}),a.jsxs("div",{className:"player-error-diagnostics",children:[a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Container:"}),a.jsx("span",{className:"diag-value",children:s.container?s.container.toUpperCase():"UNKNOWN"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Video Codec:"}),a.jsx("span",{className:"diag-value",children:s.codec||"Unknown (e.g. HEVC/H.265)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Audio Codec:"}),a.jsx("span",{className:"diag-value",children:s.audio_codec||"Unknown (e.g. AC3/DTS)"})]}),a.jsxs("div",{className:"diag-row",children:[a.jsx("span",{className:"diag-label",children:"Resolution:"}),a.jsx("span",{className:"diag-value",children:s.resolution||"Standard"})]})]}),O.code===4&&a.jsxs("div",{className:"player-error-tip",children:[a.jsx("strong",{children:"Why did this happen?"})," Most web browsers (Chrome, Edge, Firefox) do not include proprietary licensing decoders for certain video containers (MKV with HEVC/H.265) or surround-sound audio (multichannel DTS/AC3). You can play this directly in VLC/MPV or re-encode using H.264/AAC."]}),a.jsxs("div",{className:"player-error-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:pt,children:[a.jsx(Ri,{size:15}),a.jsx("span",{children:"Retry Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:e,children:[a.jsx(fc,{size:15}),a.jsx("span",{children:"Return to Library"})]})]})]})}),Me&&a.jsx("div",{className:"center-action-overlay",children:a.jsxs("div",{className:"center-action-bubble",children:[Me==="play"&&a.jsx(un,{size:38,fill:"#ffffff"}),Me==="pause"&&a.jsx(fd,{size:38,fill:"#ffffff"}),Me==="fwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(sc,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"+10s"})]}),Me==="rwd"&&a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx(oo,{size:32}),a.jsx("span",{style:{fontSize:"11px",fontWeight:800,marginTop:"2px"},children:"-10s"})]})]})}),a.jsxs("div",{className:"player-mobile-center-controls",style:{opacity:L?1:0,pointerEvents:L?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>je(-10),title:"Rewind 10s","aria-label":"Rewind 10 seconds",children:[a.jsx(oo,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]}),a.jsx("button",{className:"player-mobile-play-btn",onClick:ct,title:h?"Pause":"Play","aria-label":h?"Pause":"Play",children:h?a.jsx(fd,{size:36,fill:"#ffffff"}):a.jsx(un,{size:36,fill:"#ffffff",style:{marginLeft:"4px"}})}),a.jsxs("button",{className:"player-mobile-skip-btn",onClick:()=>je(10),title:"Forward 10s","aria-label":"Forward 10 seconds",children:[a.jsx(sc,{size:24}),a.jsx("span",{className:"mobile-skip-num",children:"10"})]})]}),a.jsxs("div",{className:"player-top-bar",style:{opacity:L?1:0,pointerEvents:L?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("button",{className:"player-back-btn",onClick:e,title:"Return to library",children:[a.jsx(fc,{size:18}),a.jsx("span",{className:"player-back-label",children:"Back"})]}),a.jsx("div",{className:"player-top-title",title:s.clean_title||s.title,children:s.clean_title||s.title}),a.jsx("div",{className:"player-top-actions",children:a.jsxs("div",{style:{position:"relative"},children:[a.jsxs("button",{className:"player-top-speed-btn",onClick:()=>{D(!E),H(!1),we()},title:"Playback Speed",children:[I,"x"]}),E&&a.jsx("div",{className:"player-popup-menu player-popup-top",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${I===ve?"active":""}`,onClick:()=>Mt(ve),children:[a.jsxs("span",{children:[ve,"x"]}),I===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]})})]}),J&&a.jsxs("div",{className:"resume-prompt",style:{opacity:L?1:0,pointerEvents:L?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsxs("span",{style:{fontSize:"13.5px",fontWeight:600},children:["Resume from ",Pl(s.progress_seconds),"?"]}),a.jsx("button",{className:"btn-primary",style:{padding:"6px 14px",fontSize:"12.5px"},onClick:Be,children:"Resume"}),a.jsx("button",{className:"btn-secondary",style:{padding:"6px 12px",fontSize:"12.5px"},onClick:ot,children:"Start Over"}),a.jsx("button",{className:"resume-close-btn",onClick:()=>j(!1),title:"Dismiss","aria-label":"Dismiss resume prompt",children:a.jsx(Wi,{size:15})})]}),a.jsxs("div",{className:"player-controls-overlay",style:{opacity:L?1:0,pointerEvents:L?"auto":"none"},onClick:ve=>ve.stopPropagation(),children:[a.jsx("div",{ref:d,className:"player-timeline-wrapper",onClick:ht,onMouseMove:bt,onMouseLeave:he,children:a.jsxs("div",{className:"player-timeline-track",children:[a.jsx("div",{className:"player-timeline-buffer",style:{width:`${S}%`}}),F.visible&&a.jsx("div",{className:"player-timeline-hover-bar",style:{width:`${F.xPercent}%`}}),a.jsx("div",{className:"player-timeline-progress",style:{width:`${Wt}%`},children:a.jsx("div",{className:"timeline-progress-sheen"})}),a.jsxs("div",{className:"player-timeline-thumb",style:{left:`${Wt}%`},children:[a.jsx("div",{className:"thumb-inner-core"}),a.jsx("div",{className:"thumb-outer-halo"})]}),F.visible&&a.jsxs("div",{className:"player-timeline-tooltip",style:{left:`${F.xPercent}%`,transform:`translateX(-50%) perspective(400px) rotateX(${(F.xPercent-50)/50*-6}deg)`},children:[a.jsx("span",{className:"tooltip-time",children:Pl(F.time)}),a.jsx("div",{className:"tooltip-arrow"})]})]})}),a.jsxs("div",{className:"player-controls-bottom",children:[a.jsxs("div",{className:"player-controls-left",children:[a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:ct,title:h?"Pause":"Play",children:h?a.jsx(fd,{size:22,fill:"#fff"}):a.jsx(un,{size:22,fill:"#fff"})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>je(-10),title:"Rewind 10s",children:a.jsx(oo,{size:18})}),a.jsx("button",{className:"player-ctrl-btn player-desktop-btn",onClick:()=>je(10),title:"Forward 10s",children:a.jsx(sc,{size:18})}),a.jsxs("div",{className:"player-volume-group",children:[a.jsx("button",{className:"player-ctrl-btn",onClick:Ee,title:y?"Unmute":"Mute",children:y||T===0?a.jsx(ky,{size:19}):a.jsx(Dy,{size:19})}),a.jsx("input",{type:"range",min:"0",max:"1",step:"0.05",value:y?0:T,onChange:ve=>Te(parseFloat(ve.target.value)),className:"player-volume-slider",style:{width:"74px",background:`linear-gradient(to right, var(--accent) 0%, var(--accent) ${(y?0:T)*100}%, rgba(255,255,255,0.18) ${(y?0:T)*100}%, rgba(255,255,255,0.18) 100%)`}})]}),a.jsxs("div",{className:"player-time-display",children:[a.jsx("span",{className:"player-time-current",children:Pl(m)}),a.jsx("span",{className:"player-time-sep",children:"/"}),a.jsx("span",{className:"player-time-total",children:Pl(M)})]})]}),a.jsxs("div",{className:"player-controls-right",children:[rt.length>0&&a.jsxs("div",{style:{position:"relative"},children:[a.jsx("button",{className:"player-ctrl-btn",onClick:()=>{H(!G),D(!1),we()},title:"Subtitles",style:{color:z>=0?"var(--primary)":"#fff"},children:a.jsx(tx,{size:19})}),G&&a.jsxs("div",{className:"player-popup-menu",style:{minWidth:"140px"},children:[a.jsxs("button",{className:`player-popup-item ${z===-1?"active":""}`,onClick:()=>U(-1),children:[a.jsx("span",{children:"Off"}),z===-1&&a.jsx(wn,{size:13,color:"var(--accent)"})]}),rt.map((ve,P)=>a.jsxs("button",{className:`player-popup-item ${z===P?"active":""}`,onClick:()=>U(P),children:[a.jsx("span",{children:ve.language}),z===P&&a.jsx(wn,{size:13,color:"var(--accent)"})]},P))]})]}),a.jsxs("div",{className:"player-desktop-btn",style:{position:"relative"},children:[a.jsxs("button",{className:"player-ctrl-btn",onClick:()=>{D(!E),H(!1),we()},style:{fontSize:"13px",fontWeight:700,padding:"5px 9px"},title:"Playback Speed",children:[I,"x"]}),E&&a.jsx("div",{className:"player-popup-menu",style:{minWidth:"95px"},children:[.5,.75,1,1.25,1.5,2].map(ve=>a.jsxs("button",{className:`player-popup-item ${I===ve?"active":""}`,onClick:()=>Mt(ve),children:[a.jsxs("span",{children:[ve,"x"]}),I===ve&&a.jsx(wn,{size:13,color:"var(--accent)"})]},ve))})]}),a.jsx("button",{className:"player-ctrl-btn player-fullscreen-btn",onClick:At,title:$?"Exit Fullscreen":"Landscape Fullscreen","aria-label":$?"Exit Fullscreen":"Enter Landscape Fullscreen",children:$?a.jsx(Q_,{size:21}):a.jsx(K_,{size:21})})]})]})]})]})})}function hx({movie:s,onClose:e,onPlay:t,onToggleFavorite:r,authFetch:l,onPosterUpdated:c,onRemoveMovie:d,onDeleteFile:h}){const[p,m]=V.useState(s),[v,M]=V.useState([]),[_,S]=V.useState("#B69AFF"),[w,T]=V.useState(!1),[x,y]=V.useState(""),[C,I]=V.useState(!1),[N,L]=V.useState(""),[k,E]=V.useState(!1),[D,G]=V.useState({type:"",text:""}),[H,z]=V.useState(Date.now()),[ie,J]=V.useState(!1),[j,$]=V.useState(""),[te,q]=V.useState(""),[ee,O]=V.useState([]),[Y,F]=V.useState(!1),[K,Me]=V.useState(!1),[X,le]=V.useState(""),[ye,we]=V.useState(!1);if(V.useEffect(()=>{m(s),s&&($(s.clean_title||""),q(s.year||""))},[s]),V.useEffect(()=>{p!=null&&p.id&&l&&l(`/api/movies/recommendations/${p.id}`).then(je=>je.json()).then(je=>{je.recommendations&&M(je.recommendations)}).catch(()=>{})},[p==null?void 0:p.id]),V.useEffect(()=>{if(p!=null&&p.id){const je=on(`/api/movies/${p.id}/poster`);ux(je).then(ht=>S(ht))}},[p==null?void 0:p.id,H]),!p)return null;const Se=p.subtitles&&p.subtitles.length>0,Re=p.progress_seconds&&p.progress_seconds>15,pt=async je=>{if(je&&je.preventDefault(),!(!j.trim()||!l)){F(!0),le("");try{const ht=encodeURIComponent(j.trim()),bt=te?`&year=${encodeURIComponent(te.trim())}`:"",Te=await(await l(`/api/movies/${p.id}/tmdb-search?q=${ht}${bt}`)).json();Te.error?(le(Te.error),O([])):O(Te.candidates||[])}catch{le("Network error searching TMDB")}finally{F(!1)}}},Ye=async je=>{Me(!0),le("");try{const ht=await l(`/api/movies/${p.id}/tmdb-match`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({tmdbId:je.id})}),bt=await ht.json();ht.ok?(m(he=>({...he,clean_title:je.title,year:je.year,description:je.overview||he.description,tmdb_id:je.id,match_status:"manual"})),z(Date.now()),J(!1),G({type:"success",text:`Matched to "${je.title}" (${je.year})!`}),c&&c(p.id)):le(bt.error||"Failed to apply TMDB match")}catch{le("Network error applying TMDB match")}finally{Me(!1)}},_t=async()=>{var je,ht;we(!0),G({type:"",text:""});try{const he=await(await l(`/api/movies/${p.id}/refresh-metadata`,{method:"POST"})).json();(je=he.result)!=null&&je.success?(m(Te=>({...Te,clean_title:he.result.title||Te.clean_title,year:he.result.year||Te.year,match_status:"matched"})),z(Date.now()),G({type:"success",text:"Metadata and artwork refreshed from TMDB!"}),c&&c(p.id)):G({type:"error",text:((ht=he.result)==null?void 0:ht.reason)==="no_api_key"?"No TMDB API key configured in Dashboard":'No confident match found. Use "Match on TMDB" to pick manually.'})}catch{G({type:"error",text:"Network error refreshing metadata"})}finally{we(!1)}},dt=async je=>{if(je.preventDefault(),!(!x.trim()||!l)){E(!0),G({type:"",text:""});try{const ht=await l(`/api/movies/${p.id}/poster`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({posterUrl:x.trim()})}),bt=await ht.json();ht.ok?(G({type:"success",text:"Poster updated successfully!"}),z(Date.now()),T(!1),y(""),c&&c(p.id)):G({type:"error",text:bt.error||"Failed to update poster"})}catch{G({type:"error",text:"Network error updating poster"})}finally{E(!1)}}},ct=async je=>{if(je.preventDefault(),!(!N.trim()||!l)){E(!0),G({type:"",text:""});try{const ht=await l(`/api/movies/${p.id}/backdrop`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({backdropUrl:N.trim()})}),bt=await ht.json();ht.ok?(G({type:"success",text:"Backdrop updated successfully!"}),z(Date.now()),I(!1),L(""),c&&c(p.id)):G({type:"error",text:bt.error||"Failed to update backdrop"})}catch{G({type:"error",text:"Network error updating backdrop"})}finally{E(!1)}}};return a.jsx("div",{className:"movie-modal-backdrop",onClick:e,children:a.jsxs("div",{className:"movie-modal-box",onClick:je=>je.stopPropagation(),style:{boxShadow:`0 24px 60px rgba(0, 0, 0, 0.85), 0 0 40px ${_}26`,borderColor:`${_}40`},children:[a.jsxs("div",{className:"movie-modal-top-banner",children:[a.jsx("img",{src:on(`/api/movies/${p.id}/backdrop?k=${H}`),alt:p.clean_title,className:"movie-modal-backdrop-img",loading:"lazy"}),a.jsx("div",{className:"movie-modal-banner-gradient"}),a.jsx("button",{className:"movie-modal-close-btn",onClick:e,title:"Close Details",children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"movie-modal-body",children:[a.jsxs("div",{className:"movie-modal-poster-col",children:[a.jsx("div",{className:"movie-modal-poster",children:a.jsx("img",{src:on(`/api/movies/${p.id}/poster?k=${H}`),alt:p.clean_title,loading:"lazy"},H)}),l&&a.jsxs("div",{className:"artwork-tools-bar",children:[a.jsxs("button",{className:"btn-change-poster",onClick:()=>{J(!0),pt()},title:"Search & Match TMDB Artwork & Metadata",children:[a.jsx(Yn,{size:13,className:"text-cyan"}),a.jsx("span",{children:"Match on TMDB"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:_t,disabled:ye,title:"Auto-refresh metadata from TMDB",children:[a.jsx(Ri,{size:13,className:ye?"rescan-spinning":""}),a.jsx("span",{children:ye?"Refreshing...":"Auto Refresh"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{T(!w),I(!1)},title:"Paste custom poster image URL or file path",children:[a.jsx(pc,{size:13}),a.jsx("span",{children:w?"Cancel":"Change Poster"})]}),a.jsxs("button",{className:"btn-change-poster",onClick:()=>{I(!C),T(!1)},title:"Paste custom backdrop image URL or file path",children:[a.jsx(zh,{size:13}),a.jsx("span",{children:C?"Cancel":"Change Backdrop"})]})]}),w&&a.jsxs("form",{onSubmit:dt,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste poster image URL or file path...",value:x,onChange:je=>y(je.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:k,children:k?"Saving...":"Apply Poster"})]}),C&&a.jsxs("form",{onSubmit:ct,className:"poster-input-popover",children:[a.jsx("input",{type:"text",placeholder:"Paste backdrop image URL or file path...",value:N,onChange:je=>L(je.target.value),autoFocus:!0,required:!0}),a.jsx("button",{type:"submit",className:"btn-primary-sm",disabled:k,children:k?"Saving...":"Apply Backdrop"})]}),D.text&&a.jsxs("div",{className:`poster-msg-banner ${D.type}`,children:[D.type==="success"?a.jsx(wn,{size:12}):a.jsx(uo,{size:12}),a.jsx("span",{children:D.text})]})]}),a.jsxs("div",{className:"movie-modal-info",children:[a.jsxs("div",{className:"movie-modal-badges",children:[p.resolution&&a.jsx("span",{className:"badge-studio",children:p.resolution}),p.genre&&a.jsx("span",{className:"badge-studio-cyan",children:p.genre}),p.year&&a.jsx("span",{className:"badge-studio-dim",children:p.year}),p.tmdb_id&&a.jsxs("span",{className:"badge-studio-info",title:"Official TMDB Metadata Match",children:[a.jsx(Sy,{size:11}),"TMDB #",p.tmdb_id]}),Se&&a.jsxs("span",{className:"badge-studio-info",children:[a.jsx(tx,{size:11}),"CC"]})]}),a.jsx("h2",{className:"movie-modal-title",children:p.clean_title}),a.jsxs("div",{className:"movie-modal-meta-row",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(pr,{size:13}),Wr(p.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:13}),oi(p.file_size)]}),p.codec&&a.jsx("span",{className:"meta-tag",children:p.codec})]}),a.jsx("p",{className:"movie-modal-description",children:p.description||"High-bitrate personal streaming directly from host workstation. Full dynamic HTTP range seeking with multi-track audio and subtitle support."}),a.jsxs("div",{className:"movie-modal-actions",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(p),children:[a.jsx(un,{size:17,fill:"#ffffff",strokeWidth:0}),a.jsx("span",{children:Re?"Resume Playback":"Play Movie"})]}),Re&&a.jsxs("button",{className:"btn-secondary",onClick:()=>t({...p,progress_seconds:0}),title:"Play from 00:00",children:[a.jsx(oo,{size:15}),a.jsx("span",{children:"Start Over"})]}),r&&a.jsxs("button",{className:p.is_favorite?"btn-danger":"btn-secondary",onClick:()=>r(p.id),children:[a.jsx(Ni,{size:16,fill:p.is_favorite?"currentColor":"none"}),a.jsx("span",{children:p.is_favorite?"Favorited":"Favorite"})]}),d&&a.jsxs("button",{className:"btn-warning-outline",onClick:()=>{e(),d(p)},title:"Remove from StreamLink library (keeps original file)",children:[a.jsx(jr,{size:15}),a.jsx("span",{children:"Remove from Library"})]}),h&&a.jsxs("button",{className:"btn-danger-outline",onClick:()=>{e(),h(p)},title:"Permanently delete video file from disk",children:[a.jsx(Vr,{size:15}),a.jsx("span",{children:"Delete File"})]})]}),a.jsxs("div",{className:"movie-modal-file-info",children:[a.jsxs("div",{className:"file-info-row",style:{gridColumn:"1 / -1"},children:[a.jsx("span",{className:"file-info-label",children:"File Location"}),a.jsx("span",{className:"file-info-value",title:p.file_path,style:{wordBreak:"break-all"},children:p.file_path})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Resolution"}),a.jsx("span",{className:"file-info-value accent-cyan",children:p.resolution||"Standard"})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"File Size"}),a.jsx("span",{className:"file-info-value",children:oi(p.file_size)})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Codec / Container"}),a.jsxs("span",{className:"file-info-value",children:[p.codec||"H264"," / ",p.container||"MP4"]})]}),a.jsxs("div",{className:"file-info-row",children:[a.jsx("span",{className:"file-info-label",children:"Subtitles"}),a.jsx("span",{className:"file-info-value",children:Se?`${p.subtitles.length} track(s) available`:"None embedded"})]})]}),a.jsx("div",{className:"tmdb-attribution-note",children:a.jsx("span",{children:"Film metadata & high-resolution artwork powered by The Movie Database (TMDB)."})})]})]}),ie&&a.jsx("div",{className:"tmdb-search-popover-overlay",onClick:()=>J(!1),children:a.jsxs("div",{className:"tmdb-search-popover-window",onClick:je=>je.stopPropagation(),children:[a.jsxs("div",{className:"tmdb-popover-header",children:[a.jsxs("div",{className:"tmdb-title-pill",children:[a.jsx(Yn,{size:16,className:"text-cyan"}),a.jsx("span",{children:"SEARCH & MATCH ON TMDB"})]}),a.jsx("button",{className:"modal-close-btn",onClick:()=>J(!1),children:a.jsx(Wi,{size:18})})]}),a.jsxs("form",{className:"tmdb-search-form",onSubmit:pt,children:[a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Movie title (e.g. Annabelle Creation, Inception)...",value:j,onChange:je=>$(je.target.value),autoFocus:!0}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Year (optional)",style:{width:"120px"},value:te,onChange:je=>q(je.target.value),maxLength:4}),a.jsxs("button",{type:"submit",className:"btn-primary",disabled:Y,children:[a.jsx(ps,{size:15}),a.jsx("span",{children:Y?"Searching...":"Search"})]})]}),X&&a.jsx("div",{className:"profiles-error-banner",style:{margin:"14px 0"},children:X}),a.jsx("div",{className:"tmdb-results-list",children:Y?a.jsxs("div",{className:"loading-state-3d",style:{padding:"30px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Searching official TMDB database..."})]}):ee.length>0?ee.map(je=>a.jsxs("div",{className:"tmdb-candidate-card",children:[a.jsx("div",{className:"candidate-poster-thumb",children:je.poster_url?a.jsx("img",{src:je.poster_url,alt:je.title}):a.jsx("div",{className:"thumb-placeholder",children:a.jsx(Film,{size:20})})}),a.jsxs("div",{className:"candidate-info",children:[a.jsxs("div",{className:"candidate-title-row",children:[a.jsx("h4",{children:je.title}),je.year&&a.jsxs("span",{className:"candidate-year",children:["(",je.year,")"]}),a.jsxs("span",{className:`confidence-pill ${je.confidence_score>=75?"high":"medium"}`,children:[je.confidence_score,"% Match"]})]}),a.jsx("p",{className:"candidate-overview",children:je.overview?je.overview.slice(0,160)+"...":"No overview available."})]}),a.jsxs("button",{className:"btn-primary btn-sm candidate-select-btn",onClick:()=>Ye(je),disabled:K,children:[a.jsx(wn,{size:14}),a.jsx("span",{children:K?"Applying...":"Select"})]})]},je.id)):a.jsx("div",{className:"tmdb-no-results",children:a.jsxs("p",{children:["Enter movie title and press ",a.jsx("strong",{children:"Search"})," to query TMDB."]})})})]})})]})})}function Jy({token:s}){const[e,t]=V.useState(!0),[r,l]=V.useState(""),[c,d]=V.useState(!1),[h,p]=V.useState(""),[m,v]=V.useState(null),[M,_]=V.useState(""),[S,w]=V.useState(null),[T,x]=V.useState(null),y=async(L=h)=>{t(!0),l("");try{const k=await fetch(on("/api/share/public/access"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({token:s,passcode:L})}),E=await k.json();if(!k.ok){E.requiresPasscode?d(!0):l(E.error||"Failed to access stream");return}d(!1),v(E),E.type==="movie"&&E.movie&&w(E.movie)}catch{l("Unable to connect to host streaming PC")}finally{t(!1)}};V.useEffect(()=>{y()},[s]);const C=L=>{L.preventDefault(),y(h)};if(T){const L=`/api/share/public/stream/${s}/${T.id}`;return a.jsx(dx,{movie:{...T,streamUrlOverride:L},onBack:()=>x(null),token:s})}if(c)return a.jsx("div",{className:"viewer-auth-container",children:a.jsxs("div",{className:"viewer-auth-card",children:[a.jsx("div",{className:"viewer-brand-badge",children:a.jsx(ai,{size:24})}),a.jsx("h2",{style:{fontSize:"20px",fontWeight:800},children:"StreamLink Movie Share"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"13px",marginTop:"6px"},children:"This stream is protected with a security passcode set by the host."}),r&&a.jsxs("div",{className:"viewer-error-box",children:[a.jsx(uo,{size:15}),a.jsx("span",{children:r})]}),a.jsxs("form",{onSubmit:C,style:{marginTop:"20px",display:"flex",flexDirection:"column",gap:"12px"},children:[a.jsxs("div",{style:{position:"relative"},children:[a.jsx("input",{type:"password",placeholder:"Enter Passcode / PIN",value:h,onChange:L=>p(L.target.value),required:!0,style:{width:"100%",paddingLeft:"38px",textAlign:"center",letterSpacing:"2px",fontSize:"16px"},autoFocus:!0}),a.jsx(Cc,{size:16,style:{position:"absolute",left:"12px",top:"50%",transform:"translateY(-50%)",color:"var(--text-dim)"}})]}),a.jsx("button",{type:"submit",className:"btn-primary",style:{padding:"12px"},disabled:e,children:a.jsx("span",{children:e?"Verifying...":"Unlock & Watch"})})]})]})});if(e)return a.jsxs("div",{className:"viewer-loading-screen",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{style:{marginTop:"16px",color:"var(--text-muted)"},children:"Connecting to private streaming server..."})]});if(r||!m)return a.jsxs("div",{className:"viewer-error-screen",children:[a.jsx(uo,{size:48,color:"var(--danger)"}),a.jsx("h2",{style:{fontSize:"22px",marginTop:"16px"},children:"Stream Unavailable"}),a.jsx("p",{style:{color:"var(--text-muted)",fontSize:"14px",maxWidth:"420px",marginTop:"8px"},children:r||"The sharing link is either invalid, disabled, or the host computer has stopped streaming."})]});const I=m.type==="library"||m.type==="folder",N=I?(m.movies||[]).filter(L=>!M||L.clean_title.toLowerCase().includes(M.toLowerCase())):m.movie?[m.movie]:[];return a.jsxs("div",{className:"public-viewer-layout",children:[a.jsxs("header",{className:"viewer-navbar",children:[a.jsxs("div",{className:"viewer-brand",children:[a.jsx("div",{className:"nav-logo-icon",children:a.jsx(ai,{size:18,strokeWidth:2.5})}),a.jsxs("span",{className:"viewer-brand-title",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"})]}),a.jsx("span",{className:"viewer-live-badge",children:m.type==="folder"?"SHARED FOLDER":"DIRECT STREAM"})]}),I&&a.jsxs("div",{className:"viewer-search-box",children:[a.jsx(ps,{size:15,className:"search-icon"}),a.jsx("input",{type:"text",placeholder:m.type==="folder"?`Search ${m.folderName||"folder"}...`:"Search movies...",value:M,onChange:L=>_(L.target.value)})]})]}),a.jsx("main",{className:"viewer-main",children:m.type==="movie"&&m.movie?a.jsxs("div",{className:"single-movie-showcase",children:[a.jsx("div",{className:"single-movie-poster-box",children:a.jsx("img",{src:on(`/api/movies/${m.movie.id}/poster`),alt:m.movie.clean_title})}),a.jsxs("div",{className:"single-movie-info-box",children:[a.jsxs("div",{className:"single-movie-badges-row",children:[a.jsx("span",{className:"hero-badge-pill",children:"AUTHORIZED DIRECT STREAM"}),m.movie.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",style:{position:"static"},children:m.movie.resolution}),m.movie.year&&a.jsx("span",{className:"hero-badge-year",children:m.movie.year})]}),a.jsx("h1",{className:"single-movie-title",children:m.movie.clean_title}),a.jsxs("div",{className:"single-movie-meta-row",children:[a.jsxs("span",{className:"meta-pill",children:[a.jsx(pr,{size:12})," ",Wr(m.movie.duration)]}),a.jsxs("span",{className:"meta-pill",children:[a.jsx($i,{size:12})," ",oi(m.movie.file_size)]})]}),a.jsx("p",{className:"single-movie-desc",children:m.movie.description||"Streamed in original high-bitrate quality directly from the host Windows workstation. Multi-channel audio and instant HTTP range seeking."}),a.jsxs("button",{className:"btn-primary hero-btn-play",onClick:()=>x(m.movie),children:[a.jsx(un,{size:18,fill:"#fff"}),a.jsx("span",{children:"Play Movie Now"})]})]})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"viewer-heading-row",children:m.type==="folder"?a.jsxs("div",{className:"viewer-folder-header-box",children:[a.jsx("div",{className:"viewer-folder-icon-circle",children:a.jsx(fs,{size:22})}),a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:[m.folderName||"Shared Folder",a.jsxs("span",{className:"viewer-count-pill",children:[N.length," ",N.length===1?"Movie":"Movies"]})]}),a.jsxs("p",{className:"viewer-page-subtitle",children:[m.label&&m.label!==m.folderName?`${m.label} • `:"","Streamed directly from host Windows PC. No app download needed."]})]})]}):a.jsx("div",{className:"viewer-folder-header-box",children:a.jsxs("div",{children:[a.jsxs("h2",{className:"viewer-page-title",children:["Available Movies",a.jsx("span",{className:"viewer-count-pill",children:N.length})]}),a.jsx("p",{className:"viewer-page-subtitle",children:"Tap any movie to stream directly from the host computer."})]})})}),N.length===0?a.jsx("div",{className:"viewer-empty-box",children:M?"No movies found matching your search query.":"No movies currently found in this shared folder."}):a.jsx("div",{className:"movie-grid-3d",children:N.map(L=>a.jsxs("div",{className:"movie-card-3d",onClick:()=>w(L),children:[a.jsxs("div",{className:"poster-wrapper-3d",children:[a.jsx("img",{src:on(`/api/movies/${L.id}/poster`),alt:L.clean_title,className:"poster-img-3d",loading:"lazy"}),a.jsx("div",{className:"poster-overlay-3d",children:a.jsx("div",{className:"play-circle-3d",children:a.jsx(un,{size:22,fill:"#fff",strokeWidth:0})})}),L.resolution&&a.jsx("span",{className:"badge-3d badge-top-left",children:L.resolution}),L.year&&a.jsx("span",{className:"badge-3d badge-top-right",children:L.year})]}),a.jsxs("div",{className:"movie-info-3d",children:[a.jsx("h4",{className:"movie-title-3d",title:L.clean_title,children:L.clean_title}),a.jsxs("div",{className:"movie-meta-row-3d",children:[a.jsxs("span",{className:"meta-tag",children:[a.jsx(pr,{size:11})," ",Wr(L.duration)]}),a.jsxs("span",{className:"meta-tag",children:[a.jsx($i,{size:11})," ",oi(L.file_size)]})]})]})]},L.id))})]})}),S&&a.jsx(hx,{movie:S,onClose:()=>w(null),onPlay:L=>{w(null),x(L)},onToggleFavorite:()=>{}})]})}const $m=["#8B5CF6","#38BDF8","#EC4899","#10B981","#F59E0B","#6366F1"];function eS({isOpen:s,onClose:e,authFetch:t,onProfileChange:r,currentProfile:l}){const[c,d]=V.useState([]),[h,p]=V.useState(!0),[m,v]=V.useState(!1),[M,_]=V.useState(""),[S,w]=V.useState($m[0]),[T,x]=V.useState(""),y=()=>{p(!0),t("/api/user/profiles").then(N=>N.json()).then(N=>{d(N.profiles||[])}).catch(()=>{}).finally(()=>p(!1))};V.useEffect(()=>{s&&(y(),v(!1),x(""))},[s]);const C=async N=>{if(N.preventDefault(),!!M.trim())try{const L=await t("/api/user/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:M.trim(),avatar_color:S,avatar_icon:"film"})}),k=await L.json();if(!L.ok){x(k.error||"Failed to create profile");return}_(""),v(!1),y()}catch{x("Network error creating profile")}},I=async(N,L)=>{if(window.confirm(`Delete profile "${L}"? Watchlist and history for this profile will be removed.`))try{const k=await t(`/api/user/profiles/${N}`,{method:"DELETE"}),E=await k.json();if(!k.ok){alert(E.error||"Failed to delete profile");return}y()}catch{alert("Network error deleting profile")}};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"profiles-modal-window",onClick:N=>N.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(Gh,{size:16,className:"text-cyan"}),a.jsx("span",{children:"WHO'S WATCHING STREAMLINK?"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),T&&a.jsx("div",{className:"profiles-error-banner",children:T}),h?a.jsxs("div",{className:"loading-state-3d",style:{padding:"40px"},children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Loading user profiles..."})]}):a.jsxs("div",{className:"profiles-grid-wrap",children:[c.map(N=>{const L=(l==null?void 0:l.id)===N.id;return a.jsxs("div",{className:`profile-card-item ${L?"active":""}`,onClick:()=>{r(N),e()},children:[a.jsxs("div",{className:"profile-avatar-circle",style:{backgroundColor:N.avatar_color||"#8B5CF6"},children:[a.jsx(lx,{size:32,color:"#FFFFFF"}),L&&a.jsx("div",{className:"active-badge-indicator",children:a.jsx(wn,{size:12,strokeWidth:3})})]}),a.jsx("span",{className:"profile-name-label",children:N.name}),c.length>1&&a.jsx("button",{className:"profile-delete-icon",onClick:k=>{k.stopPropagation(),I(N.id,N.name)},title:"Delete profile",children:a.jsx(Vr,{size:13})})]},N.id)}),c.length<6&&!m&&a.jsxs("div",{className:"profile-card-item add-new",onClick:()=>v(!0),children:[a.jsx("div",{className:"profile-avatar-circle dashed",children:a.jsx(Hh,{size:28})}),a.jsx("span",{className:"profile-name-label",children:"Add Profile"})]})]}),m&&a.jsxs("form",{className:"create-profile-form",onSubmit:C,children:[a.jsx("h4",{children:"Create Viewer Profile"}),a.jsx("input",{type:"text",className:"input-text-dark",placeholder:"Profile Name (e.g. Cinema Room, Family)",value:M,onChange:N=>_(N.target.value),autoFocus:!0,maxLength:24,required:!0}),a.jsxs("div",{className:"color-picker-row",children:[a.jsx("span",{className:"text-xs text-dim",children:"Avatar Glow Color:"}),a.jsx("div",{className:"colors-list",children:$m.map(N=>a.jsx("button",{type:"button",className:`color-dot-btn ${S===N?"active":""}`,style:{backgroundColor:N},onClick:()=>w(N)},N))})]}),a.jsxs("div",{className:"form-actions-row",children:[a.jsx("button",{type:"submit",className:"btn-primary btn-sm",children:"Save Profile"}),a.jsx("button",{type:"button",className:"btn-secondary btn-sm",onClick:()=>v(!1),children:"Cancel"})]})]})]})}):null}const Ft={HIGH:"high",MEDIUM:"medium",LOW:"low",REDUCED_MOTION:"reduced_motion"};class tS{constructor(){if(this.mode="auto",this.currentLevel=Ft.HIGH,this.fps=60,this.frameTimes=[],this.lastTime=performance.now(),this.listeners=new Set,this.consecutiveLowFrames=0,this.consecutiveHighFrames=0,this.isWebGLAvailable=this.checkWebGLSupport(),typeof window<"u"&&window.matchMedia&&(this.reducedMotionQuery=window.matchMedia("(prefers-reduced-motion: reduce)"),this.reducedMotionQuery.matches&&(this.currentLevel=Ft.REDUCED_MOTION),this.reducedMotionQuery.addEventListener("change",e=>{e.matches&&this.mode==="auto"&&this.setQualityLevel(Ft.REDUCED_MOTION)})),typeof window<"u"){const e=localStorage.getItem("streamlink_cine3d_quality");e&&["auto","high","medium","low","reduced_motion"].includes(e)&&(this.mode=e,e!=="auto"&&(this.currentLevel=e))}!this.isWebGLAvailable&&this.currentLevel!==Ft.REDUCED_MOTION&&(this.currentLevel=Ft.LOW)}checkWebGLSupport(){try{const e=document.createElement("canvas");return!!(window.WebGLRenderingContext&&(e.getContext("webgl")||e.getContext("experimental-webgl")))}catch{return!1}}setMode(e){var t;this.mode=e,typeof window<"u"&&localStorage.setItem("streamlink_cine3d_quality",e),e==="auto"?this.currentLevel=(t=this.reducedMotionQuery)!=null&&t.matches?Ft.REDUCED_MOTION:Ft.HIGH:this.currentLevel=e,this.notifyListeners()}setQualityLevel(e){this.currentLevel!==e&&(this.currentLevel=e,this.notifyListeners())}onFrame(){if(this.mode!=="auto"||!this.isWebGLAvailable)return;const e=performance.now(),t=e-this.lastTime;if(this.lastTime=e,t>0){const r=1e3/t;this.frameTimes.push(r),this.frameTimes.length>45&&this.frameTimes.shift();const l=this.frameTimes.reduce((c,d)=>c+d,0)/this.frameTimes.length;this.fps=Math.round(l),l<28?(this.consecutiveLowFrames++,this.consecutiveHighFrames=0,this.consecutiveLowFrames>90&&(this.currentLevel===Ft.HIGH?this.setQualityLevel(Ft.MEDIUM):this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.LOW),this.consecutiveLowFrames=0)):l>52&&(this.consecutiveHighFrames++,this.consecutiveLowFrames=0,this.consecutiveHighFrames>180&&(this.currentLevel===Ft.MEDIUM&&this.setQualityLevel(Ft.HIGH),this.consecutiveHighFrames=0))}}subscribe(e){return this.listeners.add(e),e(this.currentLevel,this.mode,this.fps),()=>this.listeners.delete(e)}notifyListeners(){this.listeners.forEach(e=>e(this.currentLevel,this.mode,this.fps))}}const $n=new tS;function nS({isOpen:s,onClose:e,ambientEnabled:t,onToggleAmbient:r}){const[l,c]=V.useState($n.mode),[d,h]=V.useState($n.currentLevel),[p,m]=V.useState($n.fps);V.useEffect(()=>$n.subscribe((M,_,S)=>{h(M),c(_),m(S)}),[]);const v=M=>{$n.setMode(M),c(M)};return s?a.jsx("div",{className:"modal-backdrop-3d",onClick:e,children:a.jsxs("div",{className:"quality-modal-window",onClick:M=>M.stopPropagation(),children:[a.jsxs("div",{className:"profiles-header",children:[a.jsxs("div",{className:"profiles-title-pill",children:[a.jsx(ox,{size:16,className:"text-cyan"}),a.jsx("span",{children:"CINE-3D GRAPHICS & PERFORMANCE"})]}),a.jsx("button",{className:"modal-close-btn",onClick:e,children:a.jsx(Wi,{size:18})})]}),a.jsxs("div",{className:"quality-stats-banner",children:[a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"RENDER QUALITY"}),a.jsx("span",{className:"stat-val text-cyan",children:d.toUpperCase()})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"REAL-TIME FPS"}),a.jsxs("span",{className:"stat-val",children:[p>0?p:60," FPS"]})]}),a.jsxs("div",{className:"stat-box",children:[a.jsx("span",{className:"stat-label",children:"WEBGL 2.0"}),a.jsx("span",{className:"stat-val text-violet",children:$n.isWebGLAvailable?"ACTIVE":"FALLBACK"})]})]}),a.jsxs("div",{className:"quality-options-list",children:[a.jsxs("div",{className:`quality-option-card ${l==="auto"?"active":""}`,onClick:()=>v("auto"),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Vh,{size:16,className:"text-cyan"}),a.jsx("strong",{children:"Auto-Adaptive (Recommended)"})]}),a.jsx("p",{children:"Dynamically scales particle count and geometry resolution based on your GPU and display refresh rate."})]}),l==="auto"&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.HIGH?"active":""}`,onClick:()=>v(Ft.HIGH),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(Bh,{size:16,className:"text-violet"}),a.jsx("strong",{children:"High Fidelity"})]}),a.jsx("p",{children:"Full 3D cinematic scene, high particle counts, procedural lighting, and soft shadows."})]}),l===Ft.HIGH&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.MEDIUM?"active":""}`,onClick:()=>v(Ft.MEDIUM),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(ex,{size:16,className:"text-muted"}),a.jsx("strong",{children:"Balanced"})]}),a.jsx("p",{children:"Optimized for laptops and integrated graphics. Streamlined particles and lighting."})]}),l===Ft.MEDIUM&&a.jsx(wn,{size:18,className:"text-cyan"})]}),a.jsxs("div",{className:`quality-option-card ${l===Ft.LOW?"active":""}`,onClick:()=>v(Ft.LOW),children:[a.jsxs("div",{className:"option-info",children:[a.jsxs("div",{className:"option-title-row",children:[a.jsx(rx,{size:16,className:"text-dim"}),a.jsx("strong",{children:"Low / 2D Canvas Mode"})]}),a.jsx("p",{children:"Disables heavy WebGL loops; uses lightweight CSS 3D perspective. Ideal for battery saving or older devices."})]}),l===Ft.LOW&&a.jsx(wn,{size:18,className:"text-cyan"})]})]}),a.jsxs("div",{className:"ambient-switch-row",children:[a.jsxs("div",{className:"ambient-switch-text",children:[a.jsx("strong",{children:"Ambient Cinema Glow"}),a.jsx("p",{className:"text-xs text-dim",children:"Projects subtle dynamic ambient color glows matching movie artwork."})]}),a.jsx("button",{className:`toggle-switch-pill ${t?"on":"off"}`,onClick:r,children:a.jsx("div",{className:"toggle-handle"})})]}),a.jsx("div",{className:"modal-footer-actions",children:a.jsx("button",{className:"btn-primary btn-sm",onClick:e,children:"Done"})})]})}):null}function iS({message:s="Loading StreamLink 2.0 Cinema...",onRetry:e}){const[t,r]=V.useState(!1);return V.useEffect(()=>{const l=setTimeout(()=>{r(!0)},8e3);return()=>clearTimeout(l)},[]),a.jsxs("div",{className:"obsidian-loading-container",role:"status","aria-live":"polite",children:[a.jsx("div",{className:"obsidian-ambient-glow"}),a.jsxs("div",{className:"obsidian-loader-core",children:[a.jsxs("div",{className:"obsidian-emblem-wrapper",children:[a.jsx("div",{className:"obsidian-pulse-ring outer"}),a.jsx("div",{className:"obsidian-pulse-ring inner"}),a.jsx("div",{className:"obsidian-emblem-badge",children:a.jsx(ai,{size:34,className:"obsidian-film-icon"})})]}),a.jsxs("div",{className:"obsidian-loader-brand",children:[a.jsxs("span",{className:"brand-title",children:["Stream",a.jsx("span",{className:"brand-lavender",children:"Link"}),a.jsx("span",{className:"brand-version-pill",children:"2.0"})]}),a.jsx("span",{className:"brand-subtitle",children:"OBSIDIAN CINEMA"})]}),a.jsx("p",{className:"obsidian-loader-status",children:s}),a.jsx("div",{className:"obsidian-progress-track",children:a.jsx("div",{className:"obsidian-progress-shimmer"})}),t&&a.jsxs("div",{className:"obsidian-retry-prompt",children:[a.jsxs("span",{className:"retry-hint",children:[a.jsx(fo,{size:14,className:"text-warning"}),"Taking longer than expected?"]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:()=>{e?e():window.location.reload()},children:[a.jsx(Ri,{size:13}),a.jsx("span",{children:"Retry Connection"})]})]})]})]})}function rS(){const s=V.useRef(null);return V.useEffect(()=>{if(!window.matchMedia("(pointer: fine)").matches)return;let e=window.innerWidth/2,t=window.innerHeight/2,r=e,l=t,c=null;const d=p=>{e=p.clientX,t=p.clientY;const m=(p.clientX/window.innerWidth-.5)*2,v=(p.clientY/window.innerHeight-.5)*2;document.documentElement.style.setProperty("--mouse-norm-x",m.toFixed(3)),document.documentElement.style.setProperty("--mouse-norm-y",v.toFixed(3)),document.documentElement.style.setProperty("--cursor-x",`${p.clientX}px`),document.documentElement.style.setProperty("--cursor-y",`${p.clientY}px`)},h=()=>{r+=(e-r)*.15,l+=(t-l)*.15,s.current&&(s.current.style.transform=`translate3d(${r-300}px, ${l-300}px, 0)`),c=requestAnimationFrame(h)};return window.addEventListener("pointermove",d,{passive:!0}),c=requestAnimationFrame(h),()=>{window.removeEventListener("pointermove",d),c&&cancelAnimationFrame(c)}},[]),a.jsx("div",{ref:s,className:"ambient-cursor-light","aria-hidden":"true"})}/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $h="187",sS=0,qm=1,aS=2,ac=1,oS=2,ro=3,ms=0,Zn=1,Hi=2,oa=0,lo=1,$d=2,Ym=3,Km=4,lS=5,ra=100,cS=101,uS=102,dS=103,hS=104,fS=200,pS=201,mS=202,gS=203,fx=204,px=205,xS=206,vS=207,_S=208,yS=209,SS=210,MS=211,ES=212,wS=213,bS=214,qd=0,Yd=1,Kd=2,po=3,Zd=4,Qd=5,Jd=6,eh=7,mx=0,TS=1,CS=2,dr=0,gx=1,xx=2,vx=3,_x=4,yx=5,Sx=6,Mx=7,Ex=300,ua=301,mo=302,md=303,gd=304,th=1e3,ur=1001,nh=1002,Nn=1003,NS=1004,Ll=1005,Kn=1006,xd=1007,Hr=1008,si=1009,wx=1010,bx=1011,go=1012,qh=1013,qi=1014,Gi=1015,Yi=1016,Yh=1017,Kh=1018,da=1020,Tx=35902,Cx=35899,Nx=1021,Ax=1022,Vi=1023,Xr=1026,Gr=1027,Rx=1028,Zh=1029,gs=1030,Qh=1031,Jh=1033,oc=33776,lc=33777,cc=33778,uc=33779,ih=35840,rh=35841,sh=35842,ah=35843,oh=36196,lh=37492,ch=37496,uh=37488,dh=37489,gc=37490,hh=37491,fh=37808,ph=37809,mh=37810,gh=37811,xh=37812,vh=37813,_h=37814,yh=37815,Sh=37816,Mh=37817,Eh=37818,wh=37819,bh=37820,Th=37821,Ch=36492,Nh=36494,Ah=36495,Rh=36283,Ph=36284,xc=36285,Lh=36286,AS=3200,Dh=0,RS=1,Br="",mi="srgb",vc="srgb-linear",_c="linear",Vt="srgb",vd=7680,PS=519,LS=512,DS=513,IS=514,Px=515,kS=516,US=517,Lx=518,Dx=519,FS=35044,Zm="300 es",Ai=2e3,xo=2001;function OS(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function vo(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function jS(){const s=vo("canvas");return s.style.display="block",s}const Qm={};function Jm(...s){const e="THREE."+s.shift();console.log(e,...s)}function Ix(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function vt(...s){s=Ix(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Bt(...s){s=Ix(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function dc(...s){const e=s.join(" ");e in Qm||(Qm[e]=!0,vt(...s))}function zS(s,e,t){return new Promise(function(r,l){function c(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:l();break;case s.TIMEOUT_EXPIRED:setTimeout(c,t);break;default:r()}}setTimeout(c,t)})}const BS={[qd]:qd,[Kd]:Jd,[Zd]:Zd,[po]:Qd,[Yd]:Yd,[Jd]:Kd,[eh]:eh,[Qd]:po};class vs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const l=r[e];if(l!==void 0){const c=l.indexOf(t);c!==-1&&l.splice(c,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const l=r.slice(0);for(let c=0,d=l.length;c<d;c++)l[c].call(this,e);e.target=null}}}const kn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],_d=Math.PI/180,yc=180/Math.PI;function yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(kn[s&255]+kn[s>>8&255]+kn[s>>16&255]+kn[s>>24&255]+"-"+kn[e&255]+kn[e>>8&255]+"-"+kn[e>>16&15|64]+kn[e>>24&255]+"-"+kn[t&63|128]+kn[t>>8&255]+"-"+kn[t>>16&255]+kn[t>>24&255]+kn[r&255]+kn[r>>8&255]+kn[r>>16&255]+kn[r>>24&255]).toLowerCase()}function kt(s,e,t){return Math.max(e,Math.min(t,s))}function HS(s,e){return(s%e+e)%e}function yd(s,e,t){return(1-t)*s+t*e}function GS(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function ef(s){switch(s.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function VS(s,e){if(e.constructor===Float32Array)return s;const t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(s/t,-1)}function WS(s,e){if(e.constructor===Float32Array)return s;const t=ef(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(s*t)}const lf=class lf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6],this.y=l[1]*t+l[4]*r+l[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),l=Math.sin(t),c=this.x-e.x,d=this.y-e.y;return this.x=c*r-d*l+e.x,this.y=c*l+d*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};lf.prototype.isVector2=!0;let Ut=lf;class pa{constructor(e=0,t=0,r=0,l=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=l}static slerpFlat(e,t,r,l,c,d,h){let p=r[l+0],m=r[l+1],v=r[l+2],M=r[l+3],_=c[d+0],S=c[d+1],w=c[d+2],T=c[d+3];if(M!==T||p!==_||m!==S||v!==w){let x=p*_+m*S+v*w+M*T;x<0&&(_=-_,S=-S,w=-w,T=-T,x=-x);let y=1-h;if(x<.9995){const C=Math.acos(x),I=Math.sin(C);y=Math.sin(y*C)/I,h=Math.sin(h*C)/I,p=p*y+_*h,m=m*y+S*h,v=v*y+w*h,M=M*y+T*h}else{p=p*y+_*h,m=m*y+S*h,v=v*y+w*h,M=M*y+T*h;const C=1/Math.sqrt(p*p+m*m+v*v+M*M);p*=C,m*=C,v*=C,M*=C}}e[t]=p,e[t+1]=m,e[t+2]=v,e[t+3]=M}static multiplyQuaternionsFlat(e,t,r,l,c,d){const h=r[l],p=r[l+1],m=r[l+2],v=r[l+3],M=c[d],_=c[d+1],S=c[d+2],w=c[d+3];return e[t]=h*w+v*M+p*S-m*_,e[t+1]=p*w+v*_+m*M-h*S,e[t+2]=m*w+v*S+h*_-p*M,e[t+3]=v*w-h*M-p*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,l){return this._x=e,this._y=t,this._z=r,this._w=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,l=e._y,c=e._z,d=e._order,h=Math.cos,p=Math.sin,m=h(r/2),v=h(l/2),M=h(c/2),_=p(r/2),S=p(l/2),w=p(c/2);switch(d){case"XYZ":this._x=_*v*M+m*S*w,this._y=m*S*M-_*v*w,this._z=m*v*w+_*S*M,this._w=m*v*M-_*S*w;break;case"YXZ":this._x=_*v*M+m*S*w,this._y=m*S*M-_*v*w,this._z=m*v*w-_*S*M,this._w=m*v*M+_*S*w;break;case"ZXY":this._x=_*v*M-m*S*w,this._y=m*S*M+_*v*w,this._z=m*v*w+_*S*M,this._w=m*v*M-_*S*w;break;case"ZYX":this._x=_*v*M-m*S*w,this._y=m*S*M+_*v*w,this._z=m*v*w-_*S*M,this._w=m*v*M+_*S*w;break;case"YZX":this._x=_*v*M+m*S*w,this._y=m*S*M+_*v*w,this._z=m*v*w-_*S*M,this._w=m*v*M-_*S*w;break;case"XZY":this._x=_*v*M-m*S*w,this._y=m*S*M-_*v*w,this._z=m*v*w+_*S*M,this._w=m*v*M+_*S*w;break;default:vt("Quaternion: .setFromEuler() encountered an unknown order: "+d)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,l=Math.sin(r);return this._x=e.x*l,this._y=e.y*l,this._z=e.z*l,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],l=t[4],c=t[8],d=t[1],h=t[5],p=t[9],m=t[2],v=t[6],M=t[10],_=r+h+M;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-p)*S,this._y=(c-m)*S,this._z=(d-l)*S}else if(r>h&&r>M){const S=2*Math.sqrt(1+r-h-M);this._w=(v-p)/S,this._x=.25*S,this._y=(l+d)/S,this._z=(c+m)/S}else if(h>M){const S=2*Math.sqrt(1+h-r-M);this._w=(c-m)/S,this._x=(l+d)/S,this._y=.25*S,this._z=(p+v)/S}else{const S=2*Math.sqrt(1+M-r-h);this._w=(d-l)/S,this._x=(c+m)/S,this._y=(p+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(kt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const l=Math.min(1,t/r);return this.slerp(e,l),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,l=e._y,c=e._z,d=e._w,h=t._x,p=t._y,m=t._z,v=t._w;return this._x=r*v+d*h+l*m-c*p,this._y=l*v+d*p+c*h-r*m,this._z=c*v+d*m+r*p-l*h,this._w=d*v-r*h-l*p-c*m,this._onChangeCallback(),this}slerp(e,t){let r=e._x,l=e._y,c=e._z,d=e._w,h=this.dot(e);h<0&&(r=-r,l=-l,c=-c,d=-d,h=-h);let p=1-t;if(h<.9995){const m=Math.acos(h),v=Math.sin(m);p=Math.sin(p*m)/v,t=Math.sin(t*m)/v,this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this._onChangeCallback()}else this._x=this._x*p+r*t,this._y=this._y*p+l*t,this._z=this._z*p+c*t,this._w=this._w*p+d*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),l=Math.sqrt(1-r),c=Math.sqrt(r);return this.set(l*Math.sin(e),l*Math.cos(e),c*Math.sin(t),c*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const cf=class cf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(eg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(eg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[3]*r+c[6]*l,this.y=c[1]*t+c[4]*r+c[7]*l,this.z=c[2]*t+c[5]*r+c[8]*l,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=e.elements,d=1/(c[3]*t+c[7]*r+c[11]*l+c[15]);return this.x=(c[0]*t+c[4]*r+c[8]*l+c[12])*d,this.y=(c[1]*t+c[5]*r+c[9]*l+c[13])*d,this.z=(c[2]*t+c[6]*r+c[10]*l+c[14])*d,this}applyQuaternion(e){const t=this.x,r=this.y,l=this.z,c=e.x,d=e.y,h=e.z,p=e.w,m=2*(d*l-h*r),v=2*(h*t-c*l),M=2*(c*r-d*t);return this.x=t+p*m+d*M-h*v,this.y=r+p*v+h*m-c*M,this.z=l+p*M+c*v-d*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,l=this.z,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*l,this.y=c[1]*t+c[5]*r+c[9]*l,this.z=c[2]*t+c[6]*r+c[10]*l,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,l=e.y,c=e.z,d=t.x,h=t.y,p=t.z;return this.x=l*p-c*h,this.y=c*d-r*p,this.z=r*h-l*d,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(kt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,l=this.z-e.z;return t*t+r*r+l*l}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const l=Math.sin(t)*e;return this.x=l*Math.sin(r),this.y=Math.cos(t)*e,this.z=l*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),l=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=l,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};cf.prototype.isVector3=!0;let de=cf;const Sd=new de,eg=new pa,uf=class uf{constructor(e,t,r,l,c,d,h,p,m){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,h,p,m)}set(e,t,r,l,c,d,h,p,m){const v=this.elements;return v[0]=e,v[1]=l,v[2]=h,v[3]=t,v[4]=c,v[5]=p,v[6]=r,v[7]=d,v[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],h=r[3],p=r[6],m=r[1],v=r[4],M=r[7],_=r[2],S=r[5],w=r[8],T=l[0],x=l[3],y=l[6],C=l[1],I=l[4],N=l[7],L=l[2],k=l[5],E=l[8];return c[0]=d*T+h*C+p*L,c[3]=d*x+h*I+p*k,c[6]=d*y+h*N+p*E,c[1]=m*T+v*C+M*L,c[4]=m*x+v*I+M*k,c[7]=m*y+v*N+M*E,c[2]=_*T+S*C+w*L,c[5]=_*x+S*I+w*k,c[8]=_*y+S*N+w*E,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8];return t*d*v-t*h*m-r*c*v+r*h*p+l*c*m-l*d*p}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],M=v*d-h*m,_=h*p-v*c,S=m*c-d*p,w=t*M+r*_+l*S;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/w;return e[0]=M*T,e[1]=(l*m-v*r)*T,e[2]=(h*r-l*d)*T,e[3]=_*T,e[4]=(v*t-l*p)*T,e[5]=(l*c-h*t)*T,e[6]=S*T,e[7]=(r*p-m*t)*T,e[8]=(d*t-r*c)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,l,c,d,h){const p=Math.cos(c),m=Math.sin(c);return this.set(r*p,r*m,-r*(p*d+m*h)+d+e,-l*m,l*p,-l*(-m*d+p*h)+h+t,0,0,1),this}scale(e,t){return dc("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Md.makeScale(e,t)),this}rotate(e){return dc("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Md.makeRotation(-e)),this}translate(e,t){return dc("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Md.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<9;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};uf.prototype.isMatrix3=!0;let Et=uf;const Md=new Et,tg=new Et().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ng=new Et().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function XS(){const s={enabled:!0,workingColorSpace:vc,spaces:{},convert:function(l,c,d){return this.enabled===!1||c===d||!c||!d||(this.spaces[c].transfer===Vt&&(l.r=hr(l.r),l.g=hr(l.g),l.b=hr(l.b)),this.spaces[c].primaries!==this.spaces[d].primaries&&(l.applyMatrix3(this.spaces[c].toXYZ),l.applyMatrix3(this.spaces[d].fromXYZ)),this.spaces[d].transfer===Vt&&(l.r=la(l.r),l.g=la(l.g),l.b=la(l.b))),l},workingToColorSpace:function(l,c){return this.convert(l,this.workingColorSpace,c)},colorSpaceToWorking:function(l,c){return this.convert(l,c,this.workingColorSpace)},getPrimaries:function(l){return this.spaces[l].primaries},getTransfer:function(l){return l===Br?_c:this.spaces[l].transfer},getToneMappingMode:function(l){return this.spaces[l].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(l,c=this.workingColorSpace){return l.fromArray(this.spaces[c].luminanceCoefficients)},define:function(l){Object.assign(this.spaces,l)},_getMatrix:function(l,c,d){return l.copy(this.spaces[d].fromXYZ).multiply(this.spaces[c].toXYZ)},_getDrawingBufferColorSpace:function(l){return this.spaces[l].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(l=this.workingColorSpace){return this.spaces[l].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[vc]:{primaries:e,whitePoint:r,transfer:_c,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:mi},outputColorSpaceConfig:{drawingBufferColorSpace:mi}},[mi]:{primaries:e,whitePoint:r,transfer:Vt,toXYZ:tg,fromXYZ:ng,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:mi}}}),s}const It=XS();function hr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function la(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ws;class $S{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ws===void 0&&(Ws=vo("canvas")),Ws.width=e.width,Ws.height=e.height;const l=Ws.getContext("2d");e instanceof ImageData?l.putImageData(e,0,0):l.drawImage(e,0,0,e.width,e.height),r=Ws}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const l=r.getImageData(0,0,e.width,e.height),c=l.data;for(let d=0;d<c.length;d++)c[d]=hr(c[d]/255)*255;return r.putImageData(l,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(hr(t[r]/255)*255):t[r]=hr(t[r]);return{data:t,width:e.width,height:e.height}}else return vt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qS=0;class tf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:qS++}),this.uuid=yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},l=this.data;if(l!==null){let c;if(Array.isArray(l)){c=[];for(let d=0,h=l.length;d<h;d++)l[d].isDataTexture?c.push(Ed(l[d].image)):c.push(Ed(l[d]))}else c=Ed(l);r.url=c}return t||(e.images[this.uuid]=r),r}}function Ed(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?$S.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(vt("Texture: Unable to serialize Texture."),{})}let YS=0;const wd=new de;class An extends vs{constructor(e=An.DEFAULT_IMAGE,t=An.DEFAULT_MAPPING,r=ur,l=ur,c=Kn,d=Hr,h=Vi,p=si,m=An.DEFAULT_ANISOTROPY,v=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:YS++}),this.uuid=yo(),this.name="",this.source=new tf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=l,this.magFilter=c,this.minFilter=d,this.anisotropy=m,this.format=h,this.internalFormat=null,this.type=p,this.offset=new Ut(0,0),this.repeat=new Ut(1,1),this.center=new Ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Et,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(wd).x}get height(){return this.source.getSize(wd).y}get depth(){return this.source.getSize(wd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){vt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){vt(`Texture.setValues(): property '${t}' does not exist.`);continue}l&&r&&l.isVector2&&r.isVector2||l&&r&&l.isVector3&&r.isVector3||l&&r&&l.isMatrix3&&r.isMatrix3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ex)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case th:e.x=e.x-Math.floor(e.x);break;case ur:e.x=e.x<0?0:1;break;case nh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case th:e.y=e.y-Math.floor(e.y);break;case ur:e.y=e.y<0?0:1;break;case nh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}An.DEFAULT_IMAGE=null;An.DEFAULT_MAPPING=Ex;An.DEFAULT_ANISOTROPY=1;const df=class df{constructor(e=0,t=0,r=0,l=1){this.x=e,this.y=t,this.z=r,this.w=l}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,l){return this.x=e,this.y=t,this.z=r,this.w=l,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,l=this.z,c=this.w,d=e.elements;return this.x=d[0]*t+d[4]*r+d[8]*l+d[12]*c,this.y=d[1]*t+d[5]*r+d[9]*l+d[13]*c,this.z=d[2]*t+d[6]*r+d[10]*l+d[14]*c,this.w=d[3]*t+d[7]*r+d[11]*l+d[15]*c,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,l,c;const p=e.elements,m=p[0],v=p[4],M=p[8],_=p[1],S=p[5],w=p[9],T=p[2],x=p[6],y=p[10];if(Math.abs(v-_)<.01&&Math.abs(M-T)<.01&&Math.abs(w-x)<.01){if(Math.abs(v+_)<.1&&Math.abs(M+T)<.1&&Math.abs(w+x)<.1&&Math.abs(m+S+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(m+1)/2,N=(S+1)/2,L=(y+1)/2,k=(v+_)/4,E=(M+T)/4,D=(w+x)/4;return I>N&&I>L?I<.01?(r=0,l=.707106781,c=.707106781):(r=Math.sqrt(I),l=k/r,c=E/r):N>L?N<.01?(r=.707106781,l=0,c=.707106781):(l=Math.sqrt(N),r=k/l,c=D/l):L<.01?(r=.707106781,l=.707106781,c=0):(c=Math.sqrt(L),r=E/c,l=D/c),this.set(r,l,c,t),this}let C=Math.sqrt((x-w)*(x-w)+(M-T)*(M-T)+(_-v)*(_-v));return Math.abs(C)<.001&&(C=1),this.x=(x-w)/C,this.y=(M-T)/C,this.z=(_-v)/C,this.w=Math.acos((m+S+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=kt(this.x,e.x,t.x),this.y=kt(this.y,e.y,t.y),this.z=kt(this.z,e.z,t.z),this.w=kt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=kt(this.x,e,t),this.y=kt(this.y,e,t),this.z=kt(this.z,e,t),this.w=kt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(kt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};df.prototype.isVector4=!0;let rn=df;class KS extends vs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const l=r.count;for(let c=0;c<l;c++)this.textures[c]=new An({width:e,height:t,depth:r.depth}),this.textures[c].isRenderTargetTexture=!0,this.textures[c].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let l=0,c=this.textures.length;l<c;l++)this.textures[l].image.width=e,this.textures[l].image.height=t,this.textures[l].image.depth=r,this.textures[l].isData3DTexture!==!0&&(this.textures[l].isArrayTexture=this.textures[l].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const l=Object.assign({},e.textures[t].image);this.textures[t].source=new tf(l)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Xi extends KS{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class kx extends An{constructor(e=null,t=1,r=1,l=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ZS extends An{constructor(e=null,t=1,r=1,l=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:l},this.magFilter=Nn,this.minFilter=Nn,this.wrapR=ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const bc=class bc{constructor(e,t,r,l,c,d,h,p,m,v,M,_,S,w,T,x){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,l,c,d,h,p,m,v,M,_,S,w,T,x)}set(e,t,r,l,c,d,h,p,m,v,M,_,S,w,T,x){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=l,y[1]=c,y[5]=d,y[9]=h,y[13]=p,y[2]=m,y[6]=v,y[10]=M,y[14]=_,y[3]=S,y[7]=w,y[11]=T,y[15]=x,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new bc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,l=1/Xs.setFromMatrixColumn(e,0).length(),c=1/Xs.setFromMatrixColumn(e,1).length(),d=1/Xs.setFromMatrixColumn(e,2).length();return t[0]=r[0]*l,t[1]=r[1]*l,t[2]=r[2]*l,t[3]=0,t[4]=r[4]*c,t[5]=r[5]*c,t[6]=r[6]*c,t[7]=0,t[8]=r[8]*d,t[9]=r[9]*d,t[10]=r[10]*d,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,l=e.y,c=e.z,d=Math.cos(r),h=Math.sin(r),p=Math.cos(l),m=Math.sin(l),v=Math.cos(c),M=Math.sin(c);if(e.order==="XYZ"){const _=d*v,S=d*M,w=h*v,T=h*M;t[0]=p*v,t[4]=-p*M,t[8]=m,t[1]=S+w*m,t[5]=_-T*m,t[9]=-h*p,t[2]=T-_*m,t[6]=w+S*m,t[10]=d*p}else if(e.order==="YXZ"){const _=p*v,S=p*M,w=m*v,T=m*M;t[0]=_+T*h,t[4]=w*h-S,t[8]=d*m,t[1]=d*M,t[5]=d*v,t[9]=-h,t[2]=S*h-w,t[6]=T+_*h,t[10]=d*p}else if(e.order==="ZXY"){const _=p*v,S=p*M,w=m*v,T=m*M;t[0]=_-T*h,t[4]=-d*M,t[8]=w+S*h,t[1]=S+w*h,t[5]=d*v,t[9]=T-_*h,t[2]=-d*m,t[6]=h,t[10]=d*p}else if(e.order==="ZYX"){const _=d*v,S=d*M,w=h*v,T=h*M;t[0]=p*v,t[4]=w*m-S,t[8]=_*m+T,t[1]=p*M,t[5]=T*m+_,t[9]=S*m-w,t[2]=-m,t[6]=h*p,t[10]=d*p}else if(e.order==="YZX"){const _=d*p,S=d*m,w=h*p,T=h*m;t[0]=p*v,t[4]=T-_*M,t[8]=w*M+S,t[1]=M,t[5]=d*v,t[9]=-h*v,t[2]=-m*v,t[6]=S*M+w,t[10]=_-T*M}else if(e.order==="XZY"){const _=d*p,S=d*m,w=h*p,T=h*m;t[0]=p*v,t[4]=-M,t[8]=m*v,t[1]=_*M+T,t[5]=d*v,t[9]=S*M-w,t[2]=w*M-S,t[6]=h*v,t[10]=T*M+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(QS,e,JS)}lookAt(e,t,r){const l=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Dr.crossVectors(r,ii),Dr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Dr.crossVectors(r,ii)),Dr.normalize(),Dl.crossVectors(ii,Dr),l[0]=Dr.x,l[4]=Dl.x,l[8]=ii.x,l[1]=Dr.y,l[5]=Dl.y,l[9]=ii.y,l[2]=Dr.z,l[6]=Dl.z,l[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,l=t.elements,c=this.elements,d=r[0],h=r[4],p=r[8],m=r[12],v=r[1],M=r[5],_=r[9],S=r[13],w=r[2],T=r[6],x=r[10],y=r[14],C=r[3],I=r[7],N=r[11],L=r[15],k=l[0],E=l[4],D=l[8],G=l[12],H=l[1],z=l[5],ie=l[9],J=l[13],j=l[2],$=l[6],te=l[10],q=l[14],ee=l[3],O=l[7],Y=l[11],F=l[15];return c[0]=d*k+h*H+p*j+m*ee,c[4]=d*E+h*z+p*$+m*O,c[8]=d*D+h*ie+p*te+m*Y,c[12]=d*G+h*J+p*q+m*F,c[1]=v*k+M*H+_*j+S*ee,c[5]=v*E+M*z+_*$+S*O,c[9]=v*D+M*ie+_*te+S*Y,c[13]=v*G+M*J+_*q+S*F,c[2]=w*k+T*H+x*j+y*ee,c[6]=w*E+T*z+x*$+y*O,c[10]=w*D+T*ie+x*te+y*Y,c[14]=w*G+T*J+x*q+y*F,c[3]=C*k+I*H+N*j+L*ee,c[7]=C*E+I*z+N*$+L*O,c[11]=C*D+I*ie+N*te+L*Y,c[15]=C*G+I*J+N*q+L*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[12],d=e[1],h=e[5],p=e[9],m=e[13],v=e[2],M=e[6],_=e[10],S=e[14],w=e[3],T=e[7],x=e[11],y=e[15],C=p*S-m*_,I=h*S-m*M,N=h*_-p*M,L=d*S-m*v,k=d*_-p*v,E=d*M-h*v;return t*(T*C-x*I+y*N)-r*(w*C-x*L+y*k)+l*(w*I-T*L+y*E)-c*(w*N-T*k+x*E)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],l=e[8],c=e[1],d=e[5],h=e[9],p=e[2],m=e[6],v=e[10];return t*(d*v-h*m)-r*(c*v-h*p)+l*(c*m-d*p)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const l=this.elements;return e.isVector3?(l[12]=e.x,l[13]=e.y,l[14]=e.z):(l[12]=e,l[13]=t,l[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],l=e[2],c=e[3],d=e[4],h=e[5],p=e[6],m=e[7],v=e[8],M=e[9],_=e[10],S=e[11],w=e[12],T=e[13],x=e[14],y=e[15],C=t*h-r*d,I=t*p-l*d,N=t*m-c*d,L=r*p-l*h,k=r*m-c*h,E=l*m-c*p,D=v*T-M*w,G=v*x-_*w,H=v*y-S*w,z=M*x-_*T,ie=M*y-S*T,J=_*y-S*x,j=C*J-I*ie+N*z+L*H-k*G+E*D;if(j===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/j;return e[0]=(h*J-p*ie+m*z)*$,e[1]=(l*ie-r*J-c*z)*$,e[2]=(T*E-x*k+y*L)*$,e[3]=(_*k-M*E-S*L)*$,e[4]=(p*H-d*J-m*G)*$,e[5]=(t*J-l*H+c*G)*$,e[6]=(x*N-w*E-y*I)*$,e[7]=(v*E-_*N+S*I)*$,e[8]=(d*ie-h*H+m*D)*$,e[9]=(r*H-t*ie-c*D)*$,e[10]=(w*k-T*N+y*C)*$,e[11]=(M*N-v*k-S*C)*$,e[12]=(h*G-d*z-p*D)*$,e[13]=(t*z-r*G+l*D)*$,e[14]=(T*I-w*L-x*C)*$,e[15]=(v*L-M*I+_*C)*$,this}scale(e){const t=this.elements,r=e.x,l=e.y,c=e.z;return t[0]*=r,t[4]*=l,t[8]*=c,t[1]*=r,t[5]*=l,t[9]*=c,t[2]*=r,t[6]*=l,t[10]*=c,t[3]*=r,t[7]*=l,t[11]*=c,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],l=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,l))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),l=Math.sin(t),c=1-r,d=e.x,h=e.y,p=e.z,m=c*d,v=c*h;return this.set(m*d+r,m*h-l*p,m*p+l*h,0,m*h+l*p,v*h+r,v*p-l*d,0,m*p-l*h,v*p+l*d,c*p*p+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,l,c,d){return this.set(1,r,c,0,e,1,d,0,t,l,1,0,0,0,0,1),this}compose(e,t,r){const l=this.elements,c=t._x,d=t._y,h=t._z,p=t._w,m=c+c,v=d+d,M=h+h,_=c*m,S=c*v,w=c*M,T=d*v,x=d*M,y=h*M,C=p*m,I=p*v,N=p*M,L=r.x,k=r.y,E=r.z;return l[0]=(1-(T+y))*L,l[1]=(S+N)*L,l[2]=(w-I)*L,l[3]=0,l[4]=(S-N)*k,l[5]=(1-(_+y))*k,l[6]=(x+C)*k,l[7]=0,l[8]=(w+I)*E,l[9]=(x-C)*E,l[10]=(1-(_+T))*E,l[11]=0,l[12]=e.x,l[13]=e.y,l[14]=e.z,l[15]=1,this}decompose(e,t,r){const l=this.elements;e.x=l[12],e.y=l[13],e.z=l[14];const c=this.determinantAffine();if(c===0)return r.set(1,1,1),t.identity(),this;let d=Xs.set(l[0],l[1],l[2]).length();const h=Xs.set(l[4],l[5],l[6]).length(),p=Xs.set(l[8],l[9],l[10]).length();c<0&&(d=-d),wi.copy(this);const m=1/d,v=1/h,M=1/p;return wi.elements[0]*=m,wi.elements[1]*=m,wi.elements[2]*=m,wi.elements[4]*=v,wi.elements[5]*=v,wi.elements[6]*=v,wi.elements[8]*=M,wi.elements[9]*=M,wi.elements[10]*=M,t.setFromRotationMatrix(wi),r.x=d,r.y=h,r.z=p,this}makePerspective(e,t,r,l,c,d,h=Ai,p=!1){const m=this.elements,v=2*c/(t-e),M=2*c/(r-l),_=(t+e)/(t-e),S=(r+l)/(r-l);let w,T;if(p)w=c/(d-c),T=d*c/(d-c);else if(h===Ai)w=-(d+c)/(d-c),T=-2*d*c/(d-c);else if(h===xo)w=-d/(d-c),T=-d*c/(d-c);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=_,m[12]=0,m[1]=0,m[5]=M,m[9]=S,m[13]=0,m[2]=0,m[6]=0,m[10]=w,m[14]=T,m[3]=0,m[7]=0,m[11]=-1,m[15]=0,this}makeOrthographic(e,t,r,l,c,d,h=Ai,p=!1){const m=this.elements,v=2/(t-e),M=2/(r-l),_=-(t+e)/(t-e),S=-(r+l)/(r-l);let w,T;if(p)w=1/(d-c),T=d/(d-c);else if(h===Ai)w=-2/(d-c),T=-(d+c)/(d-c);else if(h===xo)w=-1/(d-c),T=-c/(d-c);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+h);return m[0]=v,m[4]=0,m[8]=0,m[12]=_,m[1]=0,m[5]=M,m[9]=0,m[13]=S,m[2]=0,m[6]=0,m[10]=w,m[14]=T,m[3]=0,m[7]=0,m[11]=0,m[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let l=0;l<16;l++)if(t[l]!==r[l])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};bc.prototype.isMatrix4=!0;let qt=bc;const Xs=new de,wi=new qt,QS=new de(0,0,0),JS=new de(1,1,1),Dr=new de,Dl=new de,ii=new de,ig=new qt,rg=new pa;class $r{constructor(e=0,t=0,r=0,l=$r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=l}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,l=this._order){return this._x=e,this._y=t,this._z=r,this._order=l,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const l=e.elements,c=l[0],d=l[4],h=l[8],p=l[1],m=l[5],v=l[9],M=l[2],_=l[6],S=l[10];switch(t){case"XYZ":this._y=Math.asin(kt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-d,c)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-kt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(h,S),this._z=Math.atan2(p,m)):(this._y=Math.atan2(-M,c),this._z=0);break;case"ZXY":this._x=Math.asin(kt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-M,S),this._z=Math.atan2(-d,m)):(this._y=0,this._z=Math.atan2(p,c));break;case"ZYX":this._y=Math.asin(-kt(M,-1,1)),Math.abs(M)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(p,c)):(this._x=0,this._z=Math.atan2(-d,m));break;case"YZX":this._z=Math.asin(kt(p,-1,1)),Math.abs(p)<.9999999?(this._x=Math.atan2(-v,m),this._y=Math.atan2(-M,c)):(this._x=0,this._y=Math.atan2(h,S));break;case"XZY":this._z=Math.asin(-kt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(h,c)):(this._x=Math.atan2(-v,S),this._y=0);break;default:vt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return ig.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ig,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rg.setFromEuler(this),this.setFromQuaternion(rg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}$r.DEFAULT_ORDER="XYZ";class nf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let e1=0;const sg=new de,$s=new pa,sr=new qt,Il=new de,Qa=new de,t1=new de,n1=new pa,ag=new de(1,0,0),og=new de(0,1,0),lg=new de(0,0,1),cg={type:"added"},i1={type:"removed"},qs={type:"childadded",child:null},bd={type:"childremoved",child:null};class bn extends vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:e1++}),this.uuid=yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=bn.DEFAULT_UP.clone();const e=new de,t=new $r,r=new pa,l=new de(1,1,1);function c(){r.setFromEuler(t,!1)}function d(){t.setFromQuaternion(r,void 0,!1)}t._onChange(c),r._onChange(d),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:l},modelViewMatrix:{value:new qt},normalMatrix:{value:new Et}}),this.matrix=new qt,this.matrixWorld=new qt,this.matrixAutoUpdate=bn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(ag,e)}rotateY(e){return this.rotateOnAxis(og,e)}rotateZ(e){return this.rotateOnAxis(lg,e)}translateOnAxis(e,t){return sg.copy(e).applyQuaternion(this.quaternion),this.position.add(sg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ag,e)}translateY(e){return this.translateOnAxis(og,e)}translateZ(e){return this.translateOnAxis(lg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Il.copy(e):Il.set(e,t,r);const l=this.parent;this.updateWorldMatrix(!0,!1),Qa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(Qa,Il,this.up):sr.lookAt(Il,Qa,this.up),this.quaternion.setFromRotationMatrix(sr),l&&(sr.extractRotation(l.matrixWorld),$s.setFromRotationMatrix(sr),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Bt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cg),qs.child=e,this.dispatchEvent(qs),qs.child=null):Bt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(i1),bd.child=e,this.dispatchEvent(bd),bd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cg),qs.child=e,this.dispatchEvent(qs),qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,l=this.children.length;r<l;r++){const d=this.children[r].getObjectByProperty(e,t);if(d!==void 0)return d}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const l=this.children;for(let c=0,d=l.length;c<d;c++)l[c].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,e,t1),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Qa,n1,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,l=e.z,c=this.matrix.elements;c[12]+=t-c[0]*t-c[4]*r-c[8]*l,c[13]+=r-c[1]*t-c[5]*r-c[9]*l,c[14]+=l-c[2]*t-c[6]*r-c[10]*l}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,l=t.length;r<l;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const l=this.parent;if(e===!0&&l!==null&&l.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const c=this.children;for(let d=0,h=c.length;d<h;d++)c[d].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const l={};l.uuid=this.uuid,l.type=this.type,l.name=this.name,l.castShadow=this.castShadow,l.receiveShadow=this.receiveShadow,l.visible=this.visible,l.frustumCulled=this.frustumCulled,l.renderOrder=this.renderOrder,l.static=this.static,l.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(l.userData=this.userData),l.layers=this.layers.mask,l.matrix=this.matrix.toArray(),l.up=this.up.toArray(),this.pivot!==null&&(l.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(l.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(l.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(l.type="InstancedMesh",l.count=this.count,l.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(l.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(l.type="BatchedMesh",l.perObjectFrustumCulled=this.perObjectFrustumCulled,l.sortObjects=this.sortObjects,l.drawRanges=this._drawRanges,l.reservedRanges=this._reservedRanges,l.geometryInfo=this._geometryInfo.map(h=>({...h,boundingBox:h.boundingBox?h.boundingBox.toJSON():void 0,boundingSphere:h.boundingSphere?h.boundingSphere.toJSON():void 0})),l.instanceInfo=this._instanceInfo.map(h=>({...h})),l.availableInstanceIds=this._availableInstanceIds.slice(),l.availableGeometryIds=this._availableGeometryIds.slice(),l.nextIndexStart=this._nextIndexStart,l.nextVertexStart=this._nextVertexStart,l.geometryCount=this._geometryCount,l.maxInstanceCount=this._maxInstanceCount,l.maxVertexCount=this._maxVertexCount,l.maxIndexCount=this._maxIndexCount,l.geometryInitialized=this._geometryInitialized,l.matricesTexture=this._matricesTexture.toJSON(e),l.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(l.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(l.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(l.boundingBox=this.boundingBox.toJSON()));function c(h,p){return h[p.uuid]===void 0&&(h[p.uuid]=p.toJSON(e)),p.uuid}if(this.isScene)this.background&&(this.background.isColor?l.background=this.background.toJSON():this.background.isTexture&&(l.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(l.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){l.geometry=c(e.geometries,this.geometry);const h=this.geometry.parameters;if(h!==void 0&&h.shapes!==void 0){const p=h.shapes;if(Array.isArray(p))for(let m=0,v=p.length;m<v;m++){const M=p[m];c(e.shapes,M)}else c(e.shapes,p)}}if(this.isSkinnedMesh&&(l.bindMode=this.bindMode,l.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(c(e.skeletons,this.skeleton),l.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const h=[];for(let p=0,m=this.material.length;p<m;p++)h.push(c(e.materials,this.material[p]));l.material=h}else l.material=c(e.materials,this.material);if(this.children.length>0){l.children=[];for(let h=0;h<this.children.length;h++)l.children.push(this.children[h].toJSON(e).object)}if(this.animations.length>0){l.animations=[];for(let h=0;h<this.animations.length;h++){const p=this.animations[h];l.animations.push(c(e.animations,p))}}if(t){const h=d(e.geometries),p=d(e.materials),m=d(e.textures),v=d(e.images),M=d(e.shapes),_=d(e.skeletons),S=d(e.animations),w=d(e.nodes);h.length>0&&(r.geometries=h),p.length>0&&(r.materials=p),m.length>0&&(r.textures=m),v.length>0&&(r.images=v),M.length>0&&(r.shapes=M),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),w.length>0&&(r.nodes=w)}return r.object=l,r;function d(h){const p=[];for(const m in h){const v=h[m];delete v.metadata,p.push(v)}return p}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const l=e.children[r];this.add(l.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}bn.DEFAULT_UP=new de(0,1,0);bn.DEFAULT_MATRIX_AUTO_UPDATE=!0;bn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class sa extends bn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const r1={type:"move"};class Td{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new sa,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new sa,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new de,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new de),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new sa,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new de,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new de,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let l=null,c=null,d=null;const h=this._targetRay,p=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){d=!0;for(const T of e.hand.values()){const x=t.getJointPose(T,r),y=this._getHandJoint(m,T);x!==null&&(y.matrix.fromArray(x.transform.matrix),y.matrix.decompose(y.position,y.quaternion,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=x.radius),y.visible=x!==null}const v=m.joints["index-finger-tip"],M=m.joints["thumb-tip"],_=v.position.distanceTo(M.position),S=.02,w=.005;m.inputState.pinching&&_>S+w?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-w&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else p!==null&&e.gripSpace&&(c=t.getPose(e.gripSpace,r),c!==null&&(p.matrix.fromArray(c.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,c.linearVelocity?(p.hasLinearVelocity=!0,p.linearVelocity.copy(c.linearVelocity)):p.hasLinearVelocity=!1,c.angularVelocity?(p.hasAngularVelocity=!0,p.angularVelocity.copy(c.angularVelocity)):p.hasAngularVelocity=!1,p.eventsEnabled&&p.dispatchEvent({type:"gripUpdated",data:e,target:this})));h!==null&&(l=t.getPose(e.targetRaySpace,r),l===null&&c!==null&&(l=c),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.quaternion,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,this.dispatchEvent(r1)))}return h!==null&&(h.visible=l!==null),p!==null&&(p.visible=c!==null),m!==null&&(m.visible=d!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new sa;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Ux={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Cd(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Tt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const l=e;l&&l.isColor?this.copy(l):typeof l=="number"?this.setHex(l):typeof l=="string"&&this.setStyle(l)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,r,l=It.workingColorSpace){return this.r=e,this.g=t,this.b=r,It.colorSpaceToWorking(this,l),this}setHSL(e,t,r,l=It.workingColorSpace){if(e=HS(e,1),t=kt(t,0,1),r=kt(r,0,1),t===0)this.r=this.g=this.b=r;else{const c=r<=.5?r*(1+t):r+t-r*t,d=2*r-c;this.r=Cd(d,c,e+1/3),this.g=Cd(d,c,e),this.b=Cd(d,c,e-1/3)}return It.colorSpaceToWorking(this,l),this}setStyle(e,t=mi){function r(c){c!==void 0&&parseFloat(c)<1&&vt("Color: Alpha component of "+e+" will be ignored.")}let l;if(l=/^(\w+)\(([^\)]*)\)/.exec(e)){let c;const d=l[1],h=l[2];switch(d){case"rgb":case"rgba":if(c=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(255,parseInt(c[1],10))/255,Math.min(255,parseInt(c[2],10))/255,Math.min(255,parseInt(c[3],10))/255,t);if(c=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(c[4]),this.setRGB(Math.min(100,parseFloat(c[1]))/100,Math.min(100,parseFloat(c[2]))/100,Math.min(100,parseFloat(c[3]))/100,t);break;case"hsl":case"hsla":if(c=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(h))return r(c[4]),this.setHSL(parseFloat(c[1])/360,parseFloat(c[2])/100,parseFloat(c[3])/100,t);break;default:vt("Color: Unknown color model "+e)}}else if(l=/^\#([A-Fa-f\d]+)$/.exec(e)){const c=l[1],d=c.length;if(d===3)return this.setRGB(parseInt(c.charAt(0),16)/15,parseInt(c.charAt(1),16)/15,parseInt(c.charAt(2),16)/15,t);if(d===6)return this.setHex(parseInt(c,16),t);vt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=mi){const r=Ux[e.toLowerCase()];return r!==void 0?this.setHex(r,t):vt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=hr(e.r),this.g=hr(e.g),this.b=hr(e.b),this}copyLinearToSRGB(e){return this.r=la(e.r),this.g=la(e.g),this.b=la(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=mi){return It.workingToColorSpace(Un.copy(this),e),Math.round(kt(Un.r*255,0,255))*65536+Math.round(kt(Un.g*255,0,255))*256+Math.round(kt(Un.b*255,0,255))}getHexString(e=mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(Un.copy(this),t);const r=Un.r,l=Un.g,c=Un.b,d=Math.max(r,l,c),h=Math.min(r,l,c);let p,m;const v=(h+d)/2;if(h===d)p=0,m=0;else{const M=d-h;switch(m=v<=.5?M/(d+h):M/(2-d-h),d){case r:p=(l-c)/M+(l<c?6:0);break;case l:p=(c-r)/M+2;break;case c:p=(r-l)/M+4;break}p/=6}return e.h=p,e.s=m,e.l=v,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=mi){It.workingToColorSpace(Un.copy(this),e);const t=Un.r,r=Un.g,l=Un.b;return e!==mi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${l.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(l*255)})`}offsetHSL(e,t,r){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(kl);const r=yd(Ir.h,kl.h,t),l=yd(Ir.s,kl.s,t),c=yd(Ir.l,kl.l,t);return this.setHSL(r,l,c),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,l=this.b,c=e.elements;return this.r=c[0]*t+c[3]*r+c[6]*l,this.g=c[1]*t+c[4]*r+c[7]*l,this.b=c[2]*t+c[5]*r+c[8]*l,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Tt;Tt.NAMES=Ux;class Nc{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Tt(e),this.density=t}clone(){return new Nc(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Fx extends bn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new $r,this.environmentIntensity=1,this.environmentRotation=new $r,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new de,ar=new de,Nd=new de,or=new de,Ys=new de,Ks=new de,ug=new de,Ad=new de,Rd=new de,Pd=new de,Ld=new rn,Dd=new rn,Id=new rn;class Ci{constructor(e=new de,t=new de,r=new de){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,l){l.subVectors(r,t),bi.subVectors(e,t),l.cross(bi);const c=l.lengthSq();return c>0?l.multiplyScalar(1/Math.sqrt(c)):l.set(0,0,0)}static getBarycoord(e,t,r,l,c){bi.subVectors(l,t),ar.subVectors(r,t),Nd.subVectors(e,t);const d=bi.dot(bi),h=bi.dot(ar),p=bi.dot(Nd),m=ar.dot(ar),v=ar.dot(Nd),M=d*m-h*h;if(M===0)return c.set(0,0,0),null;const _=1/M,S=(m*p-h*v)*_,w=(d*v-h*p)*_;return c.set(1-S-w,w,S)}static containsPoint(e,t,r,l){return this.getBarycoord(e,t,r,l,or)===null?!1:or.x>=0&&or.y>=0&&or.x+or.y<=1}static getInterpolation(e,t,r,l,c,d,h,p){return this.getBarycoord(e,t,r,l,or)===null?(p.x=0,p.y=0,"z"in p&&(p.z=0),"w"in p&&(p.w=0),null):(p.setScalar(0),p.addScaledVector(c,or.x),p.addScaledVector(d,or.y),p.addScaledVector(h,or.z),p)}static getInterpolatedAttribute(e,t,r,l,c,d){return Ld.setScalar(0),Dd.setScalar(0),Id.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,r),Id.fromBufferAttribute(e,l),d.setScalar(0),d.addScaledVector(Ld,c.x),d.addScaledVector(Dd,c.y),d.addScaledVector(Id,c.z),d}static isFrontFacing(e,t,r,l){return bi.subVectors(r,t),ar.subVectors(e,t),bi.cross(ar).dot(l)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,l){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[l]),this}setFromAttributeAndIndices(e,t,r,l){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,l),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),bi.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,l,c){return Ci.getInterpolation(e,this.a,this.b,this.c,t,r,l,c)}containsPoint(e){return Ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,l=this.b,c=this.c;let d,h;Ys.subVectors(l,r),Ks.subVectors(c,r),Ad.subVectors(e,r);const p=Ys.dot(Ad),m=Ks.dot(Ad);if(p<=0&&m<=0)return t.copy(r);Rd.subVectors(e,l);const v=Ys.dot(Rd),M=Ks.dot(Rd);if(v>=0&&M<=v)return t.copy(l);const _=p*M-v*m;if(_<=0&&p>=0&&v<=0&&p-v>0)return d=p/(p-v),t.copy(r).addScaledVector(Ys,d);Pd.subVectors(e,c);const S=Ys.dot(Pd),w=Ks.dot(Pd);if(w>=0&&S<=w)return t.copy(c);const T=S*m-p*w;if(T<=0&&m>=0&&w<=0)return h=m/(m-w),t.copy(r).addScaledVector(Ks,h);const x=v*w-S*M;if(x<=0&&M-v>=0&&S-w>=0)return ug.subVectors(c,l),h=(M-v)/(M-v+(S-w)),t.copy(l).addScaledVector(ug,h);const y=1/(x+T+_);return d=T*y,h=_*y,t.copy(r).addScaledVector(Ys,d).addScaledVector(Ks,h)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class So{constructor(e=new de(1/0,1/0,1/0),t=new de(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ti.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ti.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ti.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const c=r.getAttribute("position");if(t===!0&&c!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let d=0,h=c.count;d<h;d++)e.isMesh===!0?e.getVertexPosition(d,Ti):Ti.fromBufferAttribute(c,d),Ti.applyMatrix4(e.matrixWorld),this.expandByPoint(Ti);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ul.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Ul.copy(r.boundingBox)),Ul.applyMatrix4(e.matrixWorld),this.union(Ul)}const l=e.children;for(let c=0,d=l.length;c<d;c++)this.expandByObject(l[c],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ti),Ti.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ja),Fl.subVectors(this.max,Ja),Zs.subVectors(e.a,Ja),Qs.subVectors(e.b,Ja),Js.subVectors(e.c,Ja),kr.subVectors(Qs,Zs),Ur.subVectors(Js,Qs),ls.subVectors(Zs,Js);let t=[0,-kr.z,kr.y,0,-Ur.z,Ur.y,0,-ls.z,ls.y,kr.z,0,-kr.x,Ur.z,0,-Ur.x,ls.z,0,-ls.x,-kr.y,kr.x,0,-Ur.y,Ur.x,0,-ls.y,ls.x,0];return!kd(t,Zs,Qs,Js,Fl)||(t=[1,0,0,0,1,0,0,0,1],!kd(t,Zs,Qs,Js,Fl))?!1:(Ol.crossVectors(kr,Ur),t=[Ol.x,Ol.y,Ol.z],kd(t,Zs,Qs,Js,Fl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ti).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ti).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(lr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),lr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),lr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),lr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),lr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),lr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),lr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),lr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(lr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const lr=[new de,new de,new de,new de,new de,new de,new de,new de],Ti=new de,Ul=new So,Zs=new de,Qs=new de,Js=new de,kr=new de,Ur=new de,ls=new de,Ja=new de,Fl=new de,Ol=new de,cs=new de;function kd(s,e,t,r,l){for(let c=0,d=s.length-3;c<=d;c+=3){cs.fromArray(s,c);const h=l.x*Math.abs(cs.x)+l.y*Math.abs(cs.y)+l.z*Math.abs(cs.z),p=e.dot(cs),m=t.dot(cs),v=r.dot(cs);if(Math.max(-Math.max(p,m,v),Math.min(p,m,v))>h)return!1}return!0}const hn=new de,jl=new Ut;let s1=0;class fr extends vs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:s1++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=FS,this.updateRanges=[],this.gpuType=Gi,this.version=0,this._normalizationScale=e!==void 0?ef(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let l=0,c=this.itemSize;l<c;l++)this.array[e+l]=t.array[r+l];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)jl.fromBufferAttribute(this,t),jl.applyMatrix3(e),this.setXY(t,jl.x,jl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix3(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyMatrix4(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.applyNormalMatrix(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)hn.fromBufferAttribute(this,t),hn.transformDirection(e),this.setXYZ(t,hn.x,hn.y,hn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=this._denormalize(r)),r}setComponent(e,t,r){return this.normalized&&(r=this._normalize(r)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,l){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this}setXYZW(e,t,r,l,c){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),r=this._normalize(r),l=this._normalize(l),c=this._normalize(c)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=l,this.array[e+3]=c,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){const t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):VS(e,this.array)}_normalize(e){const t=this._normalizationScale;return t!==void 0?Math.round(e*t):WS(e,this.array)}}class Ox extends fr{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class jx extends fr{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Fn extends fr{constructor(e,t,r){super(new Float32Array(e),t,r)}}const a1=new So,eo=new de,Ud=new de;class Mo{constructor(e=new de,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):a1.setFromPoints(e).getCenter(r);let l=0;for(let c=0,d=e.length;c<d;c++)l=Math.max(l,r.distanceToSquared(e[c]));return this.radius=Math.sqrt(l),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;eo.subVectors(e,this.center);const t=eo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),l=(r-this.radius)*.5;this.center.addScaledVector(eo,l/r),this.radius+=l}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ud.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(eo.copy(e.center).add(Ud)),this.expandByPoint(eo.copy(e.center).sub(Ud))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let o1=0;const pi=new qt,Fd=new bn,ea=new de,ri=new So,to=new So,En=new de;class gi extends vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:o1++}),this.uuid=yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(OS(e)?jx:Ox)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const c=new Et().getNormalMatrix(e);r.applyNormalMatrix(c),r.needsUpdate=!0}const l=this.attributes.tangent;return l!==void 0&&(l.transformDirection(e),l.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,r){return pi.makeTranslation(e,t,r),this.applyMatrix4(pi),this}scale(e,t,r){return pi.makeScale(e,t,r),this.applyMatrix4(pi),this}lookAt(e){return Fd.lookAt(e),Fd.updateMatrix(),this.applyMatrix4(Fd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ea).negate(),this.translate(ea.x,ea.y,ea.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let l=0,c=e.length;l<c;l++){const d=e[l];r.push(d.x,d.y,d.z||0)}this.setAttribute("position",new Fn(r,3))}else{const r=Math.min(e.length,t.count);for(let l=0;l<r;l++){const c=e[l];t.setXYZ(l,c.x,c.y,c.z||0)}e.length>t.count&&vt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new So);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new de(-1/0,-1/0,-1/0),new de(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,l=t.length;r<l;r++){const c=t[r];ri.setFromBufferAttribute(c),this.morphTargetsRelative?(En.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(En),En.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(En)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Bt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Bt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new de,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let c=0,d=t.length;c<d;c++){const h=t[c];to.setFromBufferAttribute(h),this.morphTargetsRelative?(En.addVectors(ri.min,to.min),ri.expandByPoint(En),En.addVectors(ri.max,to.max),ri.expandByPoint(En)):(ri.expandByPoint(to.min),ri.expandByPoint(to.max))}ri.getCenter(r);let l=0;for(let c=0,d=e.count;c<d;c++)En.fromBufferAttribute(e,c),l=Math.max(l,r.distanceToSquared(En));if(t)for(let c=0,d=t.length;c<d;c++){const h=t[c],p=this.morphTargetsRelative;for(let m=0,v=h.count;m<v;m++)En.fromBufferAttribute(h,m),p&&(ea.fromBufferAttribute(e,m),En.add(ea)),l=Math.max(l,r.distanceToSquared(En))}this.boundingSphere.radius=Math.sqrt(l),isNaN(this.boundingSphere.radius)&&Bt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Bt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,l=t.normal,c=t.uv;let d=this.getAttribute("tangent");(d===void 0||d.count!==r.count)&&(d=new fr(new Float32Array(4*r.count),4),this.setAttribute("tangent",d));const h=[],p=[],m=new Uint8Array(r.count);for(let G=0;G<r.count;G++)h[G]=new de,p[G]=new de;const v=new de,M=new de,_=new de,S=new Ut,w=new Ut,T=new Ut,x=new de,y=new de;function C(G,H,z){m[G]=m[H]=m[z]=1,v.fromBufferAttribute(r,G),M.fromBufferAttribute(r,H),_.fromBufferAttribute(r,z),S.fromBufferAttribute(c,G),w.fromBufferAttribute(c,H),T.fromBufferAttribute(c,z),M.sub(v),_.sub(v),w.sub(S),T.sub(S);const ie=1/(w.x*T.y-T.x*w.y);isFinite(ie)&&(x.copy(M).multiplyScalar(T.y).addScaledVector(_,-w.y).multiplyScalar(ie),y.copy(_).multiplyScalar(w.x).addScaledVector(M,-T.x).multiplyScalar(ie),h[G].add(x),h[H].add(x),h[z].add(x),p[G].add(y),p[H].add(y),p[z].add(y))}let I=this.groups;I.length===0&&(I=[{start:0,count:e.count}]);for(let G=0,H=I.length;G<H;++G){const z=I[G],ie=z.start,J=z.count;for(let j=ie,$=ie+J;j<$;j+=3)C(e.getX(j+0),e.getX(j+1),e.getX(j+2))}const N=new de,L=new de,k=new de,E=new de;function D(G){k.fromBufferAttribute(l,G),E.copy(k);const H=h[G];N.copy(H),N.sub(k.multiplyScalar(k.dot(H))).normalize(),L.crossVectors(E,H);const ie=L.dot(p[G])<0?-1:1;d.setXYZW(G,N.x,N.y,N.z,ie)}for(let G=0,H=r.count;G<H;++G)m[G]&&D(G);this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new fr(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const l=new de,c=new de,d=new de,h=new de,p=new de,m=new de,v=new de,M=new de;if(e)for(let _=0,S=e.count;_<S;_+=3){const w=e.getX(_+0),T=e.getX(_+1),x=e.getX(_+2);l.fromBufferAttribute(t,w),c.fromBufferAttribute(t,T),d.fromBufferAttribute(t,x),v.subVectors(d,c),M.subVectors(l,c),v.cross(M),h.fromBufferAttribute(r,w),p.fromBufferAttribute(r,T),m.fromBufferAttribute(r,x),h.add(v),p.add(v),m.add(v),r.setXYZ(w,h.x,h.y,h.z),r.setXYZ(T,p.x,p.y,p.z),r.setXYZ(x,m.x,m.y,m.z)}else for(let _=0,S=t.count;_<S;_+=3)l.fromBufferAttribute(t,_+0),c.fromBufferAttribute(t,_+1),d.fromBufferAttribute(t,_+2),v.subVectors(d,c),M.subVectors(l,c),v.cross(M),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)En.fromBufferAttribute(e,t),En.normalize(),e.setXYZ(t,En.x,En.y,En.z)}toNonIndexed(){function e(h,p){const m=h.array,v=h.itemSize,M=h.normalized,_=new m.constructor(p.length*v);let S=0,w=0;for(let T=0,x=p.length;T<x;T++){h.isInterleavedBufferAttribute?S=p[T]*h.data.stride+h.offset:S=p[T]*v;for(let y=0;y<v;y++)_[w++]=m[S++]}return new fr(_,v,M)}if(this.index===null)return vt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new gi,r=this.index.array,l=this.attributes;for(const h in l){const p=l[h],m=e(p,r);t.setAttribute(h,m)}const c=this.morphAttributes;for(const h in c){const p=[],m=c[h];for(let v=0,M=m.length;v<M;v++){const _=m[v],S=e(_,r);p.push(S)}t.morphAttributes[h]=p}t.morphTargetsRelative=this.morphTargetsRelative;const d=this.groups;for(let h=0,p=d.length;h<p;h++){const m=d[h];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const p=this.parameters;for(const m in p)p[m]!==void 0&&(e[m]=p[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const p in r){const m=r[p];e.data.attributes[p]=m.toJSON(e.data)}const l={};let c=!1;for(const p in this.morphAttributes){const m=this.morphAttributes[p],v=[];for(let M=0,_=m.length;M<_;M++){const S=m[M];v.push(S.toJSON(e.data))}v.length>0&&(l[p]=v,c=!0)}c&&(e.data.morphAttributes=l,e.data.morphTargetsRelative=this.morphTargetsRelative);const d=this.groups;d.length>0&&(e.data.groups=JSON.parse(JSON.stringify(d)));const h=this.boundingSphere;return h!==null&&(e.data.boundingSphere=h.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const l=e.attributes;for(const m in l){const v=l[m];this.setAttribute(m,v.clone(t))}const c=e.morphAttributes;for(const m in c){const v=[],M=c[m];for(let _=0,S=M.length;_<S;_++)v.push(M[_].clone(t));this.morphAttributes[m]=v}this.morphTargetsRelative=e.morphTargetsRelative;const d=e.groups;for(let m=0,v=d.length;m<v;m++){const M=d[m];this.addGroup(M.start,M.count,M.materialIndex)}const h=e.boundingBox;h!==null&&(this.boundingBox=h.clone());const p=e.boundingSphere;return p!==null&&(this.boundingSphere=p.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Od=new de,l1=new de,c1=new Et;class Or{constructor(e=new de(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,l){return this.normal.set(e,t,r),this.constant=l,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const l=Od.subVectors(r,t).cross(l1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(l,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const l=e.delta(Od),c=this.normal.dot(l);if(c===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const d=-(e.start.dot(this.normal)+this.constant)/c;return r===!0&&(d<0||d>1)?null:t.copy(e.start).addScaledVector(l,d)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||c1.getNormalMatrix(e),l=this.coplanarPoint(Od).applyMatrix4(e),c=this.normal.applyMatrix3(r).normalize();return this.constant=-l.dot(c),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let u1=0;class _s extends vs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:u1++}),this.uuid=yo(),this.name="",this.type="Material",this.blending=lo,this.side=ms,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fx,this.blendDst=px,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=po,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=PS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vd,this.stencilZFail=vd,this.stencilZPass=vd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){vt(`Material: parameter '${t}' has value of undefined.`);continue}const l=this[t];if(l===void 0){vt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}l&&l.isColor?l.set(r):l&&l.isVector2&&r&&r.isVector2||l&&l.isEuler&&r&&r.isEuler||l&&l.isVector3&&r&&r.isVector3?l.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(r.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(r.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(r.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(r.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(c=>c.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function l(c){const d=[];for(const h in c){const p=c[h];delete p.metadata,d.push(p)}return d}if(t){const c=l(e.textures),d=l(e.images);c.length>0&&(r.textures=c),d.length>0&&(r.images=d)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Or().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new Ut().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ut().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const l=t.length;r=new Array(l);for(let c=0;c!==l;++c)r[c]=t[c].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const cr=new de,jd=new de,zl=new de,Bl=new de;class Ac{constructor(e=new de,t=new de(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,cr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=cr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(cr.copy(this.origin).addScaledVector(this.direction,t),cr.distanceToSquared(e))}distanceSqToSegment(e,t,r,l){jd.copy(e).add(t).multiplyScalar(.5),zl.copy(t).sub(e).normalize(),Bl.copy(this.origin).sub(jd);const c=e.distanceTo(t)*.5,d=-this.direction.dot(zl),h=Bl.dot(this.direction),p=-Bl.dot(zl),m=Bl.lengthSq(),v=Math.abs(1-d*d);let M,_,S,w;if(v>0)if(M=d*p-h,_=d*h-p,w=c*v,M>=0)if(_>=-w)if(_<=w){const T=1/v;M*=T,_*=T,S=M*(M+d*_+2*h)+_*(d*M+_+2*p)+m}else _=c,M=Math.max(0,-(d*_+h)),S=-M*M+_*(_+2*p)+m;else _=-c,M=Math.max(0,-(d*_+h)),S=-M*M+_*(_+2*p)+m;else _<=-w?(M=Math.max(0,-(-d*c+h)),_=M>0?-c:Math.min(Math.max(-c,-p),c),S=-M*M+_*(_+2*p)+m):_<=w?(M=0,_=Math.min(Math.max(-c,-p),c),S=_*(_+2*p)+m):(M=Math.max(0,-(d*c+h)),_=M>0?c:Math.min(Math.max(-c,-p),c),S=-M*M+_*(_+2*p)+m);else _=d>0?-c:c,M=Math.max(0,-(d*_+h)),S=-M*M+_*(_+2*p)+m;return r&&r.copy(this.origin).addScaledVector(this.direction,M),l&&l.copy(jd).addScaledVector(zl,_),S}intersectSphere(e,t){if(e.radius<0)return null;cr.subVectors(e.center,this.origin);const r=cr.dot(this.direction),l=cr.dot(cr)-r*r,c=e.radius*e.radius;if(l>c)return null;const d=Math.sqrt(c-l),h=r-d,p=r+d;return p<0?null:h<0?this.at(p,t):this.at(h,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,l,c,d,h,p;const m=1/this.direction.x,v=1/this.direction.y,M=1/this.direction.z,_=this.origin;return m>=0?(r=(e.min.x-_.x)*m,l=(e.max.x-_.x)*m):(r=(e.max.x-_.x)*m,l=(e.min.x-_.x)*m),v>=0?(c=(e.min.y-_.y)*v,d=(e.max.y-_.y)*v):(c=(e.max.y-_.y)*v,d=(e.min.y-_.y)*v),r>d||c>l||((c>r||isNaN(r))&&(r=c),(d<l||isNaN(l))&&(l=d),M>=0?(h=(e.min.z-_.z)*M,p=(e.max.z-_.z)*M):(h=(e.max.z-_.z)*M,p=(e.min.z-_.z)*M),r>p||h>l)||((h>r||r!==r)&&(r=h),(p<l||l!==l)&&(l=p),l<0)?null:this.at(r>=0?r:l,t)}intersectsBox(e){return this.intersectBox(e,cr)!==null}intersectTriangle(e,t,r,l,c){const d=this.origin,h=this.direction,p=h.x,m=h.y,v=h.z,M=e.x-d.x,_=e.y-d.y,S=e.z-d.z,w=t.x-d.x,T=t.y-d.y,x=t.z-d.z,y=r.x-d.x,C=r.y-d.y,I=r.z-d.z,N=Math.abs(p),L=Math.abs(m),k=Math.abs(v);let E,D,G,H,z,ie,J,j,$,te,q,ee;if(N>=L&&N>=k?(G=p,ie=M,$=w,ee=y,p>=0?(E=m,D=v,H=_,z=S,J=T,j=x,te=C,q=I):(E=v,D=m,H=S,z=_,J=x,j=T,te=I,q=C)):L>=k?(G=m,ie=_,$=T,ee=C,m>=0?(E=v,D=p,H=S,z=M,J=x,j=w,te=I,q=y):(E=p,D=v,H=M,z=S,J=w,j=x,te=y,q=I)):(G=v,ie=S,$=x,ee=I,v>=0?(E=p,D=m,H=M,z=_,J=w,j=T,te=y,q=C):(E=m,D=p,H=_,z=M,J=T,j=w,te=C,q=y)),G===0)return null;const O=E/G,Y=D/G,F=1/G,K=H-O*ie,Me=z-Y*ie,X=J-O*$,le=j-Y*$,ye=te-O*ee,we=q-Y*ee,Se=ye*le-we*X,Re=K*we-Me*ye,pt=X*Me-le*K;if(l){if(Se<0||Re<0||pt<0)return null}else if((Se<0||Re<0||pt<0)&&(Se>0||Re>0||pt>0))return null;const Ye=Se+Re+pt;if(Ye===0)return null;const _t=F*(Se*ie+Re*$+pt*ee);return(Ye>0?_t<0:_t>0)?null:this.at(_t/Ye,c)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ih extends _s{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.combine=mx,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const dg=new qt,us=new Ac,Hl=new Mo,hg=new de,Gl=new de,Vl=new de,Wl=new de,zd=new de,Xl=new de,fg=new de,$l=new de;class Ki extends bn{constructor(e=new gi,t=new Ih){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}getVertexPosition(e,t){const r=this.geometry,l=r.attributes.position,c=r.morphAttributes.position,d=r.morphTargetsRelative;t.fromBufferAttribute(l,e);const h=this.morphTargetInfluences;if(c&&h){Xl.set(0,0,0);for(let p=0,m=c.length;p<m;p++){const v=h[p],M=c[p];v!==0&&(zd.fromBufferAttribute(M,e),d?Xl.addScaledVector(zd,v):Xl.addScaledVector(zd.sub(t),v))}t.add(Xl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.material,c=this.matrixWorld;l!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Hl.copy(r.boundingSphere),Hl.applyMatrix4(c),us.copy(e.ray).recast(e.near),!(Hl.containsPoint(us.origin)===!1&&(us.intersectSphere(Hl,hg)===null||us.origin.distanceToSquared(hg)>(e.far-e.near)**2))&&(dg.copy(c).invert(),us.copy(e.ray).applyMatrix4(dg),!(r.boundingBox!==null&&us.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,us)))}_computeIntersections(e,t,r){let l;const c=this.geometry,d=this.material,h=c.index,p=c.attributes.position,m=c.attributes.uv,v=c.attributes.uv1,M=c.attributes.normal,_=c.groups,S=c.drawRange;if(h!==null)if(Array.isArray(d))for(let w=0,T=_.length;w<T;w++){const x=_[w],y=d[x.materialIndex],C=Math.max(x.start,S.start),I=Math.min(h.count,Math.min(x.start+x.count,S.start+S.count));for(let N=C,L=I;N<L;N+=3){const k=h.getX(N),E=h.getX(N+1),D=h.getX(N+2);l=ql(this,y,e,r,m,v,M,k,E,D),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let x=w,y=T;x<y;x+=3){const C=h.getX(x),I=h.getX(x+1),N=h.getX(x+2);l=ql(this,d,e,r,m,v,M,C,I,N),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}else if(p!==void 0)if(Array.isArray(d))for(let w=0,T=_.length;w<T;w++){const x=_[w],y=d[x.materialIndex],C=Math.max(x.start,S.start),I=Math.min(p.count,Math.min(x.start+x.count,S.start+S.count));for(let N=C,L=I;N<L;N+=3){const k=N,E=N+1,D=N+2;l=ql(this,y,e,r,m,v,M,k,E,D),l&&(l.faceIndex=Math.floor(N/3),l.face.materialIndex=x.materialIndex,t.push(l))}}else{const w=Math.max(0,S.start),T=Math.min(p.count,S.start+S.count);for(let x=w,y=T;x<y;x+=3){const C=x,I=x+1,N=x+2;l=ql(this,d,e,r,m,v,M,C,I,N),l&&(l.faceIndex=Math.floor(x/3),t.push(l))}}}}function d1(s,e,t,r,l,c,d,h){let p;if(e.side===Zn?p=r.intersectTriangle(d,c,l,!0,h):p=r.intersectTriangle(l,c,d,e.side===ms,h),p===null)return null;$l.copy(h),$l.applyMatrix4(s.matrixWorld);const m=t.ray.origin.distanceTo($l);return m<t.near||m>t.far?null:{distance:m,point:$l.clone(),object:s}}function ql(s,e,t,r,l,c,d,h,p,m){s.getVertexPosition(h,Gl),s.getVertexPosition(p,Vl),s.getVertexPosition(m,Wl);const v=d1(s,e,t,r,Gl,Vl,Wl,fg);if(v){const M=new de;Ci.getBarycoord(fg,Gl,Vl,Wl,M),l&&(v.uv=Ci.getInterpolatedAttribute(l,h,p,m,M,new Ut)),c&&(v.uv1=Ci.getInterpolatedAttribute(c,h,p,m,M,new Ut)),d&&(v.normal=Ci.getInterpolatedAttribute(d,h,p,m,M,new de),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:h,b:p,c:m,normal:new de,materialIndex:0};Ci.getNormal(Gl,Vl,Wl,_.normal),v.face=_,v.barycoord=M}return v}class h1 extends An{constructor(e=null,t=1,r=1,l,c,d,h,p,m=Nn,v=Nn,M,_){super(null,d,h,p,m,v,l,c,M,_),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ds=new Mo,f1=new Ut(.5,.5),Yl=new de;class _o{constructor(e=new Or,t=new Or,r=new Or,l=new Or,c=new Or,d=new Or){this.planes=[e,t,r,l,c,d]}set(e,t,r,l,c,d){const h=this.planes;return h[0].copy(e),h[1].copy(t),h[2].copy(r),h[3].copy(l),h[4].copy(c),h[5].copy(d),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ai,r=!1){const l=this.planes,c=e.elements,d=c[0],h=c[1],p=c[2],m=c[3],v=c[4],M=c[5],_=c[6],S=c[7],w=c[8],T=c[9],x=c[10],y=c[11],C=c[12],I=c[13],N=c[14],L=c[15];if(l[0].setComponents(m-d,S-v,y-w,L-C).normalize(),l[1].setComponents(m+d,S+v,y+w,L+C).normalize(),l[2].setComponents(m+h,S+M,y+T,L+I).normalize(),l[3].setComponents(m-h,S-M,y-T,L-I).normalize(),r)l[4].setComponents(p,_,x,N).normalize(),l[5].setComponents(m-p,S-_,y-x,L-N).normalize();else if(l[4].setComponents(m-p,S-_,y-x,L-N).normalize(),t===Ai)l[5].setComponents(m+p,S+_,y+x,L+N).normalize();else if(t===xo)l[5].setComponents(p,_,x,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(e){ds.center.set(0,0,0);const t=f1.distanceTo(e.center);return ds.radius=.7071067811865476+t,ds.applyMatrix4(e.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(e){const t=this.planes,r=e.center,l=-e.radius;for(let c=0;c<6;c++)if(t[c].distanceToPoint(r)<l)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const l=t[r];if(Yl.x=l.normal.x>0?e.max.x:e.min.x,Yl.y=l.normal.y>0?e.max.y:e.min.y,Yl.z=l.normal.z>0?e.max.z:e.min.z,l.distanceToPoint(Yl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}const pg=new qt;class rf{constructor(){this.coordinateSystem=Ai,this._frustums=[],this._count=0}setFromArrayCamera(e){const t=e.cameras,r=this._frustums;for(let l=0;l<t.length;l++){const c=t[l];pg.multiplyMatrices(c.projectionMatrix,c.matrixWorldInverse),r[l]===void 0&&(r[l]=new _o),r[l].setFromProjectionMatrix(pg,c.coordinateSystem,c.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsObject(e))return!0;return!1}intersectsSprite(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSprite(e))return!0;return!1}intersectsSphere(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsSphere(e))return!0;return!1}intersectsBox(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].intersectsBox(e))return!0;return!1}containsPoint(e){const t=this._frustums;for(let r=0;r<this._count;r++)if(t[r].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;const t=this._frustums,r=e._frustums;for(let l=0;l<e._count;l++)t[l]===void 0&&(t[l]=new _o),t[l].copy(r[l]);return this._count=e._count,this}clone(){return new rf().copy(this)}}class zx extends _s{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Tt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Sc=new de,Mc=new de,mg=new qt,no=new Ac,Kl=new Mo,Bd=new de,gg=new de;class p1 extends bn{constructor(e=new gi,t=new zx){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let l=1,c=t.count;l<c;l++)Sc.fromBufferAttribute(t,l-1),Mc.fromBufferAttribute(t,l),r[l]=r[l-1],r[l]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Fn(r,1))}else vt("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Line.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Kl.copy(r.boundingSphere),Kl.applyMatrix4(l),Kl.radius+=c,e.ray.intersectsSphere(Kl)===!1)return;mg.copy(l).invert(),no.copy(e.ray).applyMatrix4(mg);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=this.isLineSegments?2:1,v=r.index,_=r.attributes.position;if(v!==null){const S=Math.max(0,d.start),w=Math.min(v.count,d.start+d.count);for(let T=S,x=w-1;T<x;T+=m){const y=v.getX(T),C=v.getX(T+1),I=Zl(this,e,no,p,y,C,T);I&&t.push(I)}if(this.isLineLoop){const T=v.getX(w-1),x=v.getX(S),y=Zl(this,e,no,p,T,x,w-1);y&&t.push(y)}}else{const S=Math.max(0,d.start),w=Math.min(_.count,d.start+d.count);for(let T=S,x=w-1;T<x;T+=m){const y=Zl(this,e,no,p,T,T+1,T);y&&t.push(y)}if(this.isLineLoop){const T=Zl(this,e,no,p,w-1,S,w-1);T&&t.push(T)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function Zl(s,e,t,r,l,c,d){const h=s.geometry.attributes.position;if(Sc.fromBufferAttribute(h,l),Mc.fromBufferAttribute(h,c),t.distanceSqToSegment(Sc,Mc,Bd,gg)>r)return;Bd.applyMatrix4(s.matrixWorld);const m=e.ray.origin.distanceTo(Bd);if(!(m<e.near||m>e.far))return{distance:m,point:gg.clone().applyMatrix4(s.matrixWorld),index:d,face:null,faceIndex:null,barycoord:null,object:s}}const xg=new de,vg=new de;class m1 extends p1{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let l=0,c=t.count;l<c;l+=2)xg.fromBufferAttribute(t,l),vg.fromBufferAttribute(t,l+1),r[l]=l===0?0:r[l-1],r[l+1]=r[l]+xg.distanceTo(vg);e.setAttribute("lineDistance",new Fn(r,1))}else vt("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Bx extends _s{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const _g=new qt,kh=new Ac,Ql=new Mo,Jl=new de;class g1 extends bn{constructor(e=new gi,t=new Bx){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,l=this.matrixWorld,c=e.params.Points.threshold,d=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ql.copy(r.boundingSphere),Ql.applyMatrix4(l),Ql.radius+=c,e.ray.intersectsSphere(Ql)===!1)return;_g.copy(l).invert(),kh.copy(e.ray).applyMatrix4(_g);const h=c/((this.scale.x+this.scale.y+this.scale.z)/3),p=h*h,m=r.index,M=r.attributes.position;if(m!==null){const _=Math.max(0,d.start),S=Math.min(m.count,d.start+d.count);for(let w=_,T=S;w<T;w++){const x=m.getX(w);Jl.fromBufferAttribute(M,x),yg(Jl,x,p,l,e,t,this)}}else{const _=Math.max(0,d.start),S=Math.min(M.count,d.start+d.count);for(let w=_,T=S;w<T;w++)Jl.fromBufferAttribute(M,w),yg(Jl,w,p,l,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const l=t[r[0]];if(l!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let c=0,d=l.length;c<d;c++){const h=l[c].name||String(c);this.morphTargetInfluences.push(0),this.morphTargetDictionary[h]=c}}}}}function yg(s,e,t,r,l,c,d){const h=kh.distanceSqToPoint(s);if(h<t){const p=new de;kh.closestPointToPoint(s,p),p.applyMatrix4(r);const m=l.ray.origin.distanceTo(p);if(m<l.near||m>l.far)return;c.push({distance:m,distanceToRay:Math.sqrt(h),point:p,index:e,face:null,faceIndex:null,barycoord:null,object:d})}}class Hx extends An{constructor(e=[],t=ua,r,l,c,d,h,p,m,v){super(e,t,r,l,c,d,h,p,m,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class x1 extends An{constructor(e,t,r,l,c,d,h,p,m){super(e,t,r,l,c,d,h,p,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ha extends An{constructor(e,t,r=qi,l,c,d,h=Nn,p=Nn,m,v=Xr,M=1){if(v!==Xr&&v!==Gr)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:M};super(_,l,c,d,h,p,v,r,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new tf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gx extends ha{constructor(e,t=qi,r=ua,l,c,d=Nn,h=Nn,p,m=Xr){const v={width:e,height:e,depth:1},M=[v,v,v,v,v,v];super(e,e,t,r,l,c,d,h,p,m),this.image=M,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Vx extends An{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Eo extends gi{constructor(e=1,t=1,r=1,l=1,c=1,d=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:l,heightSegments:c,depthSegments:d};const h=this;l=Math.floor(l),c=Math.floor(c),d=Math.floor(d);const p=[],m=[],v=[],M=[];let _=0,S=0;w("z","y","x",-1,-1,r,t,e,d,c,0),w("z","y","x",1,-1,r,t,-e,d,c,1),w("x","z","y",1,1,e,r,t,l,d,2),w("x","z","y",1,-1,e,r,-t,l,d,3),w("x","y","z",1,-1,e,t,r,l,c,4),w("x","y","z",-1,-1,e,t,-r,l,c,5),this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(M,2));function w(T,x,y,C,I,N,L,k,E,D,G){const H=N/E,z=L/D,ie=N/2,J=L/2,j=k/2,$=E+1,te=D+1;let q=0,ee=0;const O=new de;for(let Y=0;Y<te;Y++){const F=Y*z-J;for(let K=0;K<$;K++){const Me=K*H-ie;O[T]=Me*C,O[x]=F*I,O[y]=j,m.push(O.x,O.y,O.z),O[T]=0,O[x]=0,O[y]=k>0?1:-1,v.push(O.x,O.y,O.z),M.push(K/E),M.push(1-Y/D),q+=1}}for(let Y=0;Y<D;Y++)for(let F=0;F<E;F++){const K=_+F+$*Y,Me=_+F+$*(Y+1),X=_+(F+1)+$*(Y+1),le=_+(F+1)+$*Y;p.push(K,Me,le),p.push(Me,X,le),ee+=6}h.addGroup(S,ee,G),S+=ee,_+=q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Eo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class wo extends gi{constructor(e=1,t=1,r=1,l=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:l};const c=e/2,d=t/2,h=Math.floor(r),p=Math.floor(l),m=h+1,v=p+1,M=e/h,_=t/p,S=[],w=[],T=[],x=[];for(let y=0;y<v;y++){const C=y*_-d;for(let I=0;I<m;I++){const N=I*M-c;w.push(N,-C,0),T.push(0,0,1),x.push(I/h),x.push(1-y/p)}}for(let y=0;y<p;y++)for(let C=0;C<h;C++){const I=C+m*y,N=C+m*(y+1),L=C+1+m*(y+1),k=C+1+m*y;S.push(I,N,k),S.push(N,L,k)}this.setIndex(S),this.setAttribute("position",new Fn(w,3)),this.setAttribute("normal",new Fn(T,3)),this.setAttribute("uv",new Fn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ec extends gi{constructor(e=1,t=.4,r=12,l=48,c=Math.PI*2,d=0,h=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:l,arc:c,thetaStart:d,thetaLength:h},r=Math.floor(r),l=Math.floor(l);const p=[],m=[],v=[],M=[],_=new de,S=new de,w=new de;for(let T=0;T<=r;T++){const x=d+T/r*h;for(let y=0;y<=l;y++){const C=y/l*c;S.x=(e+t*Math.cos(x))*Math.cos(C),S.y=(e+t*Math.cos(x))*Math.sin(C),S.z=t*Math.sin(x),m.push(S.x,S.y,S.z),_.x=e*Math.cos(C),_.y=e*Math.sin(C),w.subVectors(S,_).normalize(),v.push(w.x,w.y,w.z),M.push(y/l),M.push(T/r)}}for(let T=1;T<=r;T++)for(let x=1;x<=l;x++){const y=(l+1)*T+x-1,C=(l+1)*(T-1)+x-1,I=(l+1)*(T-1)+x,N=(l+1)*T+x;p.push(y,C,N),p.push(C,I,N)}this.setIndex(p),this.setAttribute("position",new Fn(m,3)),this.setAttribute("normal",new Fn(v,3)),this.setAttribute("uv",new Fn(M,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ec(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function fa(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const l=s[t][r];if(Sg(l))l.isRenderTargetTexture?(vt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=l.clone();else if(Array.isArray(l))if(Sg(l[0])){const c=[];for(let d=0,h=l.length;d<h;d++)c[d]=l[d].clone();e[t][r]=c}else e[t][r]=l.slice();else e[t][r]=l}}return e}function zn(s){const e={};for(let t=0;t<s.length;t++){const r=fa(s[t]);for(const l in r)e[l]=r[l]}return e}function Sg(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function v1(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Wx(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const _1={clone:fa,merge:zn};var y1=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,S1=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xs extends _s{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=y1,this.fragmentShader=S1,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fa(e.uniforms),this.uniformsGroups=v1(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const l in this.uniforms){const d=this.uniforms[l].value;d&&d.isTexture?t.uniforms[l]={type:"t",value:d.toJSON(e).uuid}:d&&d.isColor?t.uniforms[l]={type:"c",value:d.getHex()}:d&&d.isVector2?t.uniforms[l]={type:"v2",value:d.toArray()}:d&&d.isVector3?t.uniforms[l]={type:"v3",value:d.toArray()}:d&&d.isVector4?t.uniforms[l]={type:"v4",value:d.toArray()}:d&&d.isMatrix3?t.uniforms[l]={type:"m3",value:d.toArray()}:d&&d.isMatrix4?t.uniforms[l]={type:"m4",value:d.toArray()}:t.uniforms[l]={value:d}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const l in this.extensions)this.extensions[l]===!0&&(r[l]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const l=e.uniforms[r];switch(this.uniforms[r]={},l.type){case"t":this.uniforms[r].value=t[l.value]||null;break;case"c":this.uniforms[r].value=new Tt().setHex(l.value);break;case"v2":this.uniforms[r].value=new Ut().fromArray(l.value);break;case"v3":this.uniforms[r].value=new de().fromArray(l.value);break;case"v4":this.uniforms[r].value=new rn().fromArray(l.value);break;case"m3":this.uniforms[r].value=new Et().fromArray(l.value);break;case"m4":this.uniforms[r].value=new qt().fromArray(l.value);break;default:this.uniforms[r].value=l.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class M1 extends xs{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class E1 extends _s{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dh,this.normalScale=new Ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new $r,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class w1 extends _s{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=AS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class b1 extends _s{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Hd={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Mg(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Mg(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Mg(s){try{const e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class T1{constructor(e,t,r){const l=this;let c=!1,d=0,h=0,p;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(v){h++,c===!1&&l.onStart!==void 0&&l.onStart(v,d,h),c=!0},this.itemEnd=function(v){d++,l.onProgress!==void 0&&l.onProgress(v,d,h),d===h&&(c=!1,l.onLoad!==void 0&&l.onLoad())},this.itemError=function(v){l.onError!==void 0&&l.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),p?p(v):v},this.setURLModifier=function(v){return p=v,this},this.addHandler=function(v,M){return m.push(v,M),this},this.removeHandler=function(v){const M=m.indexOf(v);return M!==-1&&m.splice(M,2),this},this.getHandler=function(v){for(let M=0,_=m.length;M<_;M+=2){const S=m[M],w=m[M+1];if(S.global&&(S.lastIndex=0),S.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const C1=new T1;class sf{constructor(e){this.manager=e!==void 0?e:C1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(l,c){r.load(e,l,t,c)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}}sf.DEFAULT_MATERIAL_NAME="__DEFAULT";const ta=new WeakMap;class N1 extends sf{constructor(e){super(e)}load(e,t,r,l){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const c=this,d=Hd.get(`image:${e}`);if(d!==void 0){if(d.complete===!0)c.manager.itemStart(e),setTimeout(function(){t&&t(d),c.manager.itemEnd(e)},0);else{let M=ta.get(d);M===void 0&&(M=[],ta.set(d,M)),M.push({onLoad:t,onError:l})}return d}const h=vo("img");function p(){v(),t&&t(this);const M=ta.get(this)||[];for(let _=0;_<M.length;_++){const S=M[_];S.onLoad&&S.onLoad(this)}ta.delete(this),c.manager.itemEnd(e)}function m(M){v(),l&&l(M),Hd.remove(`image:${e}`);const _=ta.get(this)||[];for(let S=0;S<_.length;S++){const w=_[S];w.onError&&w.onError(M)}ta.delete(this),c.manager.itemError(e),c.manager.itemEnd(e)}function v(){h.removeEventListener("load",p,!1),h.removeEventListener("error",m,!1)}return h.addEventListener("load",p,!1),h.addEventListener("error",m,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(h.crossOrigin=this.crossOrigin),Hd.add(`image:${e}`,h),c.manager.itemStart(e),h.fetchPriority=this.priority,h.src=e,h}}class A1 extends sf{constructor(e){super(e)}load(e,t,r,l){const c=new An,d=new N1(this.manager);return d.setPriority(this.priority),d.setCache(this.cache),d.setCrossOrigin(this.crossOrigin),d.setPath(this.path),d.load(e,function(h){c.image=h,c.needsUpdate=!0,t!==void 0&&t(c)},r,l),c}}class af extends bn{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Gd=new qt,Eg=new de,wg=new de;class Xx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ut(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _o,this._frameExtents=new Ut(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Eg.setFromMatrixPosition(e.matrixWorld),t.position.copy(Eg),wg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(wg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,l){Gd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Gd,e.coordinateSystem,e.reversedDepth);const c=this._frameExtents,d=l?l.z/c.x:1,h=l?l.w/c.y:1,p=l?l.x/c.x:0,m=l?l.y/c.y:0;e.coordinateSystem===xo||e.reversedDepth?t.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,1,0,0,0,0,1):t.set(.5*d,0,0,.5*d+p,0,.5*h,0,.5*h+m,0,0,.5,.5,0,0,0,1),t.multiply(Gd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const ec=new de,tc=new pa,ji=new de;class $x extends bn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new qt,this.projectionMatrix=new qt,this.projectionMatrixInverse=new qt,this.coordinateSystem=Ai,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(ec,tc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,ji.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(ec,tc,ji),ji.x===1&&ji.y===1&&ji.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(ec,tc,ji.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Fr=new de,bg=new Ut,Tg=new Ut;class qn extends $x{constructor(e=50,t=1,r=.1,l=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=l,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=yc*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(_d*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return yc*2*Math.atan(Math.tan(_d*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Fr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z),Fr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Fr.x,Fr.y).multiplyScalar(-e/Fr.z)}getViewSize(e,t){return this.getViewBounds(e,bg,Tg),t.subVectors(Tg,bg)}setViewOffset(e,t,r,l,c,d){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(_d*.5*this.fov)/this.zoom,r=2*t,l=this.aspect*r,c=-.5*l;const d=this.view;if(this.view!==null&&this.view.enabled){const p=d.fullWidth,m=d.fullHeight;c+=d.offsetX*l/p,t-=d.offsetY*r/m,l*=d.width/p,r*=d.height/m}const h=this.filmOffset;h!==0&&(c+=e*h/this.getFilmWidth()),this.projectionMatrix.makePerspective(c,c+l,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class R1 extends Xx{constructor(){super(new qn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){const t=this.camera,r=yc*2*e.angle*this.focus,l=this.mapSize.width/this.mapSize.height*this.aspect,c=e.distance||t.far;(r!==t.fov||l!==t.aspect||c!==t.far)&&(t.fov=r,t.aspect=l,t.far=c,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){const e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}}class P1 extends af{constructor(e,t,r=0,l=Math.PI/3,c=0,d=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(bn.DEFAULT_UP),this.updateMatrix(),this.target=new bn,this.distance=r,this.angle=l,this.penumbra=c,this.decay=d,this.map=null,this.shadow=new R1}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}}class L1 extends Xx{constructor(){super(new qn(90,1,.5,500)),this.isPointLightShadow=!0}}class D1 extends af{constructor(e,t,r=0,l=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=l,this.shadow=new L1}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class I1 extends $x{constructor(e=-1,t=1,r=1,l=-1,c=.1,d=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=l,this.near=c,this.far=d,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,l,c,d){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=l,this.view.width=c,this.view.height=d,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,l=(this.top+this.bottom)/2;let c=r-e,d=r+e,h=l+t,p=l-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;c+=m*this.view.offsetX,d=c+m*this.view.width,h-=v*this.view.offsetY,p=h-v*this.view.height}this.projectionMatrix.makeOrthographic(c,d,h,p,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class k1 extends af{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const na=-90,ia=1;class Uh extends bn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const l=new qn(na,ia,e,t);l.layers=this.layers,this.add(l);const c=new qn(na,ia,e,t);c.layers=this.layers,this.add(c);const d=new qn(na,ia,e,t);d.layers=this.layers,this.add(d);const h=new qn(na,ia,e,t);h.layers=this.layers,this.add(h);const p=new qn(na,ia,e,t);p.layers=this.layers,this.add(p);const m=new qn(na,ia,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,l,c,d,h,p]=t;for(const m of t)this.remove(m);if(e===Ai)r.up.set(0,1,0),r.lookAt(1,0,0),l.up.set(0,1,0),l.lookAt(-1,0,0),c.up.set(0,0,-1),c.lookAt(0,1,0),d.up.set(0,0,1),d.lookAt(0,-1,0),h.up.set(0,1,0),h.lookAt(0,0,1),p.up.set(0,1,0),p.lookAt(0,0,-1);else if(e===xo)r.up.set(0,-1,0),r.lookAt(-1,0,0),l.up.set(0,-1,0),l.lookAt(1,0,0),c.up.set(0,0,1),c.lookAt(0,1,0),d.up.set(0,0,-1),d.lookAt(0,-1,0),h.up.set(0,-1,0),h.lookAt(0,0,1),p.up.set(0,-1,0),p.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:l}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[c,d,h,p,m,v]=this.children,M=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.mipmapsAutoUpdate;r.texture.mipmapsAutoUpdate=!1;let x=!1;e.isWebGLRenderer===!0?x=e.state.buffers.depth.getReversed():x=e.reversedDepthBuffer,e.setRenderTarget(r,0,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,1,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,2,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,3,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),e.setRenderTarget(r,4,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),r.texture.mipmapsAutoUpdate=T,e.setRenderTarget(r,5,l),x&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(M,_,S),e.xr.enabled=w,r.texture.needsPMREMUpdate=!0}}class U1 extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}}const Cg=new qt;class F1{constructor(e,t,r=0,l=1/0){this.ray=new Ac(e,t),this.near=r,this.far=l,this.camera=null,this.layers=new nf,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Bt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cg),this}intersectObject(e,t=!0,r=[]){return Fh(e,this,r,t),r.sort(Ng),r}intersectObjects(e,t=!0,r=[]){for(let l=0,c=e.length;l<c;l++)Fh(e[l],this,r,t);return r.sort(Ng),r}}function Ng(s,e){return s.distance-e.distance}function Fh(s,e,t,r){let l=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(l=!1),l===!0&&r===!0){const c=s.children;for(let d=0,h=c.length;d<h;d++)Fh(c[d],e,t,!0)}}class O1{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1,vt("Clock: This module has been deprecated. Please use THREE.Timer instead.")}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}class j1 extends m1{constructor(e=10,t=10,r=4473924,l=8947848){r=new Tt(r),l=new Tt(l);const c=t/2,d=e/t,h=e/2,p=[],m=[];for(let _=0,S=0,w=-h;_<=t;_++,w+=d){p.push(-h,0,w,h,0,w),p.push(w,0,-h,w,0,h);const T=_===c?r:l;T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3,T.toArray(m,S),S+=3}const v=new gi;v.setAttribute("position",new Fn(p,3)),v.setAttribute("color",new Fn(m,3));const M=new zx({vertexColors:!0,toneMapped:!1});super(v,M),this.type="GridHelper"}dispose(){super.dispose(),this.geometry.dispose(),this.material.dispose()}}function Ag(s,e,t,r){const l=z1(r);switch(t){case Nx:return s*e;case Rx:return s*e/l.components*l.byteLength;case Zh:return s*e/l.components*l.byteLength;case gs:return s*e*2/l.components*l.byteLength;case Qh:return s*e*2/l.components*l.byteLength;case Ax:return s*e*3/l.components*l.byteLength;case Vi:return s*e*4/l.components*l.byteLength;case Jh:return s*e*4/l.components*l.byteLength;case oc:case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case cc:case uc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case rh:case ah:return Math.max(s,16)*Math.max(e,8)/4;case ih:case sh:return Math.max(s,8)*Math.max(e,8)/2;case oh:case lh:case uh:case dh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ch:case gc:case hh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case fh:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ph:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case mh:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case gh:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case xh:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case vh:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case _h:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case yh:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Sh:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Mh:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Eh:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case wh:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case bh:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Th:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Ch:case Nh:case Ah:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Rh:case Ph:return Math.ceil(s/4)*Math.ceil(e/4)*8;case xc:case Lh:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function z1(s){switch(s){case si:case wx:return{byteLength:1,components:1};case go:case bx:case Yi:return{byteLength:2,components:1};case Yh:case Kh:return{byteLength:2,components:4};case qi:case qh:case Gi:return{byteLength:4,components:1};case Tx:case Cx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$h}}));typeof window<"u"&&(window.__THREE__?vt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$h);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function qx(){let s=null,e=!1,t=null,r=null;function l(c,d){r=s.requestAnimationFrame(l),t(c,d)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(l),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(c){t=c},setContext:function(c){s=c}}}function B1(s){const e=new WeakMap;function t(h,p){const m=h.array,v=h.usage,M=m.byteLength,_=s.createBuffer();s.bindBuffer(p,_),s.bufferData(p,m,v),h.onUploadCallback();let S;if(m instanceof Float32Array)S=s.FLOAT;else if(typeof Float16Array<"u"&&m instanceof Float16Array)S=s.HALF_FLOAT;else if(m instanceof Uint16Array)h.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=s.SHORT;else if(m instanceof Uint32Array)S=s.UNSIGNED_INT;else if(m instanceof Int32Array)S=s.INT;else if(m instanceof Int8Array)S=s.BYTE;else if(m instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:h.version,size:M}}function r(h,p,m){const v=p.array,M=p.updateRanges;if(s.bindBuffer(m,h),M.length===0)s.bufferSubData(m,0,v);else{M.sort((S,w)=>S.start-w.start);let _=0;for(let S=1;S<M.length;S++){const w=M[_],T=M[S];T.start<=w.start+w.count+1?w.count=Math.max(w.count,T.start+T.count-w.start):(++_,M[_]=T)}M.length=_+1;for(let S=0,w=M.length;S<w;S++){const T=M[S];s.bufferSubData(m,T.start*v.BYTES_PER_ELEMENT,v,T.start,T.count)}p.clearUpdateRanges()}p.onUploadCallback()}function l(h){return h.isInterleavedBufferAttribute&&(h=h.data),e.get(h)}function c(h){h.isInterleavedBufferAttribute&&(h=h.data);const p=e.get(h);p&&(s.deleteBuffer(p.buffer),e.delete(h))}function d(h,p){if(h.isInterleavedBufferAttribute&&(h=h.data),h.isGLBufferAttribute){const v=e.get(h);(!v||v.version<h.version)&&e.set(h,{buffer:h.buffer,type:h.type,bytesPerElement:h.elementSize,version:h.version});return}const m=e.get(h);if(m===void 0)e.set(h,t(h,p));else if(m.version<h.version){if(m.size!==h.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(m.buffer,h,p),m.version=h.version}}return{get:l,remove:c,update:d}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,G1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,W1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,X1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,$1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,K1=`#ifdef USE_BATCHING
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Q1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,J1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,eM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,tM=`#ifdef USE_IRIDESCENCE
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
#endif`,nM=`#ifdef USE_BUMPMAP
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
#endif`,iM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,rM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,aM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,oM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,lM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,cM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,uM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,dM=`#define PI 3.141592653589793
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
} // validated`,hM=`vec3 transformedNormal = objectNormal;
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
#endif`,fM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,pM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,mM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,gM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,xM="gl_FragColor = linearToOutputTexel( gl_FragColor );",vM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,_M=`#ifdef USE_ENVMAP
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
#endif`,yM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,SM=`#ifdef USE_ENVMAP
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
#endif`,MM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,EM=`#ifdef USE_ENVMAP
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
#endif`,wM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,CM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,NM=`#ifdef USE_GRADIENTMAP
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
}`,AM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,PM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,LM=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,DM=`#ifdef USE_ENVMAP
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
#endif`,IM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,kM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,UM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,FM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OM=`PhysicalMaterial material;
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
#endif`,jM=`uniform sampler2D dfgLUT;
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
}`,zM=`
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
#endif`,BM=`#if defined( RE_IndirectDiffuse )
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
#endif`,HM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,GM=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,VM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,WM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,$M=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,KM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,ZM=`#if defined( USE_POINTS_UV )
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
#endif`,QM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,JM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tE=`#if defined( USE_MORPHCOLORS )
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
#endif`,nE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iE=`#ifdef USE_MORPHTARGETS
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
#endif`,rE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,sE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,aE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,oE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,uE=`#ifdef USE_NORMALMAP
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
#endif`,dE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,hE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,xE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_E=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ME=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TE=`float getShadowMask() {
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
}`,CE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,NE=`#ifdef USE_SKINNING
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
#endif`,AE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RE=`#ifdef USE_SKINNING
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
#endif`,PE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,LE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,DE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,kE=`#ifdef USE_TRANSMISSION
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
#endif`,UE=`#ifdef USE_TRANSMISSION
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
#endif`,FE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HE=`uniform sampler2D t2D;
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
}`,GE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VE=`uniform float backgroundBlurriness;
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
}`,WE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XE=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$E=`#include <common>
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
}`,qE=`#if DEPTH_PACKING == 3200
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
}`,YE=`#define DISTANCE
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
}`,KE=`#define DISTANCE
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
}`,ZE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QE=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,JE=`uniform float scale;
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
}`,ew=`uniform vec3 diffuse;
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
}`,tw=`#include <common>
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
}`,nw=`uniform vec3 diffuse;
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
}`,iw=`#define LAMBERT
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
}`,rw=`#define LAMBERT
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
}`,sw=`#define MATCAP
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
}`,aw=`#define MATCAP
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
}`,ow=`#define NORMAL
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
}`,lw=`#define NORMAL
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
}`,cw=`#define PHONG
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
}`,uw=`#define PHONG
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
}`,dw=`#define STANDARD
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
}`,hw=`#define STANDARD
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
}`,fw=`#define TOON
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
}`,pw=`#define TOON
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
}`,mw=`uniform float size;
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
}`,gw=`uniform vec3 diffuse;
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
}`,xw=`#include <common>
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
}`,vw=`uniform vec3 color;
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
}`,_w=`uniform float rotation;
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
}`,yw=`uniform vec3 diffuse;
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
}`,Nt={alphahash_fragment:H1,alphahash_pars_fragment:G1,alphamap_fragment:V1,alphamap_pars_fragment:W1,alphatest_fragment:X1,alphatest_pars_fragment:$1,aomap_fragment:q1,aomap_pars_fragment:Y1,batching_pars_vertex:K1,batching_vertex:Z1,begin_vertex:Q1,beginnormal_vertex:J1,bsdfs:eM,iridescence_fragment:tM,bumpmap_pars_fragment:nM,clipping_planes_fragment:iM,clipping_planes_pars_fragment:rM,clipping_planes_pars_vertex:sM,clipping_planes_vertex:aM,color_fragment:oM,color_pars_fragment:lM,color_pars_vertex:cM,color_vertex:uM,common:dM,defaultnormal_vertex:hM,displacementmap_pars_vertex:fM,displacementmap_vertex:pM,emissivemap_fragment:mM,emissivemap_pars_fragment:gM,colorspace_fragment:xM,colorspace_pars_fragment:vM,envmap_fragment:_M,envmap_common_pars_fragment:yM,envmap_pars_fragment:SM,envmap_pars_vertex:MM,envmap_physical_pars_fragment:DM,envmap_vertex:EM,fog_vertex:wM,fog_pars_vertex:bM,fog_fragment:TM,fog_pars_fragment:CM,gradientmap_pars_fragment:NM,lightmap_pars_fragment:AM,lights_lambert_fragment:RM,lights_lambert_pars_fragment:PM,lights_pars_begin:LM,lights_toon_fragment:IM,lights_toon_pars_fragment:kM,lights_phong_fragment:UM,lights_phong_pars_fragment:FM,lights_physical_fragment:OM,lights_physical_pars_fragment:jM,lights_fragment_begin:zM,lights_fragment_maps:BM,lights_fragment_end:HM,lightprobes_pars_fragment:GM,logdepthbuf_fragment:VM,logdepthbuf_pars_fragment:WM,logdepthbuf_pars_vertex:XM,logdepthbuf_vertex:$M,map_fragment:qM,map_pars_fragment:YM,map_particle_fragment:KM,map_particle_pars_fragment:ZM,metalnessmap_fragment:QM,metalnessmap_pars_fragment:JM,morphinstance_vertex:eE,morphcolor_vertex:tE,morphnormal_vertex:nE,morphtarget_pars_vertex:iE,morphtarget_vertex:rE,normal_fragment_begin:sE,normal_fragment_maps:aE,normal_pars_fragment:oE,normal_pars_vertex:lE,normal_vertex:cE,normalmap_pars_fragment:uE,clearcoat_normal_fragment_begin:dE,clearcoat_normal_fragment_maps:hE,clearcoat_pars_fragment:fE,iridescence_pars_fragment:pE,opaque_fragment:mE,packing:gE,premultiplied_alpha_fragment:xE,project_vertex:vE,dithering_fragment:_E,dithering_pars_fragment:yE,roughnessmap_fragment:SE,roughnessmap_pars_fragment:ME,shadowmap_pars_fragment:EE,shadowmap_pars_vertex:wE,shadowmap_vertex:bE,shadowmask_pars_fragment:TE,skinbase_vertex:CE,skinning_pars_vertex:NE,skinning_vertex:AE,skinnormal_vertex:RE,specularmap_fragment:PE,specularmap_pars_fragment:LE,tonemapping_fragment:DE,tonemapping_pars_fragment:IE,transmission_fragment:kE,transmission_pars_fragment:UE,uv_pars_fragment:FE,uv_pars_vertex:OE,uv_vertex:jE,worldpos_vertex:zE,background_vert:BE,background_frag:HE,backgroundCube_vert:GE,backgroundCube_frag:VE,cube_vert:WE,cube_frag:XE,depth_vert:$E,depth_frag:qE,distance_vert:YE,distance_frag:KE,equirect_vert:ZE,equirect_frag:QE,linedashed_vert:JE,linedashed_frag:ew,meshbasic_vert:tw,meshbasic_frag:nw,meshlambert_vert:iw,meshlambert_frag:rw,meshmatcap_vert:sw,meshmatcap_frag:aw,meshnormal_vert:ow,meshnormal_frag:lw,meshphong_vert:cw,meshphong_frag:uw,meshphysical_vert:dw,meshphysical_frag:hw,meshtoon_vert:fw,meshtoon_frag:pw,points_vert:mw,points_frag:gw,shadow_vert:xw,shadow_frag:vw,sprite_vert:_w,sprite_frag:yw},$e={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Et}},envmap:{envMap:{value:null},envMapRotation:{value:new Et},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Et}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Et}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Et},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Et},normalScale:{value:new Ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Et},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Et}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Et}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Et}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0},uvTransform:{value:new Et}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new Ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Et},alphaMap:{value:null},alphaMapTransform:{value:new Et},alphaTest:{value:0}}},Bi={basic:{uniforms:zn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:zn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:zn([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:zn([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:zn([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new Tt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:zn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:zn([$e.points,$e.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:zn([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:zn([$e.common,$e.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:zn([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:zn([$e.sprite,$e.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Et},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Et}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distance:{uniforms:zn([$e.common,$e.displacementmap,{referencePosition:{value:new de},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distance_vert,fragmentShader:Nt.distance_frag},shadow:{uniforms:zn([$e.lights,$e.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};Bi.physical={uniforms:zn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Et},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Et},clearcoatNormalScale:{value:new Ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Et},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new Et},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Et},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Et},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Et},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Et},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Et},transmissionSamplerSize:{value:new Ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Et},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Et},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Et},anisotropyVector:{value:new Ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Et}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const nc={r:0,b:0,g:0},Sw=new qt,Yx=new Et;Yx.set(-1,0,0,0,1,0,0,0,1);function Mw(s,e,t,r,l,c){const d=new Tt(0);let h=l===!0?0:1,p,m,v=null,M=0,_=null;function S(C){let I=C.isScene===!0?C.background:null;if(I&&I.isTexture){const N=C.backgroundBlurriness>0;I=e.get(I,N)}return I}function w(C){let I=!1;const N=S(C);N===null?x(d,h):N&&N.isColor&&(x(N,1),I=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,c):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,c),(s.autoClear||I)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function T(C,I){const N=S(I);N&&N.isCubeTexture?(m===void 0&&(m=new Ki(new Eo(1,1,1),new xs({name:"BackgroundCubeMaterial",uniforms:fa(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),m.geometry.deleteAttribute("uv"),m.onBeforeRender=function(L,k,E){this.matrixWorld.copyPosition(E.matrixWorld)},Object.defineProperty(m.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(m)),m.material.uniforms.envMap.value=N,m.material.uniforms.backgroundBlurriness.value=I.backgroundBlurriness,m.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,m.material.uniforms.backgroundRotation.value.setFromMatrix4(Sw.makeRotationFromEuler(I.backgroundRotation)).transpose(),N.isRenderTargetTexture===!1&&m.material.uniforms.backgroundRotation.value.premultiply(Yx),m.material.toneMapped=It.getTransfer(N.colorSpace)!==Vt,(v!==N||M!==N.version||_!==s.toneMapping)&&(m.material.needsUpdate=!0,v=N,M=N.version,_=s.toneMapping),m.layers.enableAll(),C.unshift(m,m.geometry,m.material,0,0,null)):N&&N.isTexture&&(p===void 0&&(p=new Ki(new wo(2,2),new xs({name:"BackgroundMaterial",uniforms:fa(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:ms,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(p)),p.material.uniforms.t2D.value=N,p.material.uniforms.backgroundIntensity.value=I.backgroundIntensity,p.material.toneMapped=It.getTransfer(N.colorSpace)!==Vt,N.matrixAutoUpdate===!0&&N.updateMatrix(),p.material.uniforms.uvTransform.value.copy(N.matrix),(v!==N||M!==N.version||_!==s.toneMapping)&&(p.material.needsUpdate=!0,v=N,M=N.version,_=s.toneMapping),p.layers.enableAll(),C.unshift(p,p.geometry,p.material,0,0,null))}function x(C,I){C.getRGB(nc,Wx(s)),t.buffers.color.setClear(nc.r,nc.g,nc.b,I,c)}function y(){m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(C,I=1){d.set(C),h=I,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(C){h=C,x(d,h)},render:w,addToRenderList:T,dispose:y}}function Ew(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},l=_(null);let c=l,d=!1;function h(z,ie,J,j,$){let te=!1;const q=M(z,j,J,ie);c!==q&&(c=q,m(c.object)),te=S(z,j,J,$),te&&w(z,j,J,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(te||d)&&(d=!1,N(z,ie,J,j),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function p(){return s.createVertexArray()}function m(z){return s.bindVertexArray(z)}function v(z){return s.deleteVertexArray(z)}function M(z,ie,J,j){const $=j.wireframe===!0;let te=r[ie.id];te===void 0&&(te={},r[ie.id]=te);const q=z.isInstancedMesh===!0?z.id:0;let ee=te[q];ee===void 0&&(ee={},te[q]=ee);let O=ee[J.id];O===void 0&&(O={},ee[J.id]=O);let Y=O[$];return Y===void 0&&(Y=_(p()),O[$]=Y),Y}function _(z){const ie=[],J=[],j=[];for(let $=0;$<t;$++)ie[$]=0,J[$]=0,j[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:ie,enabledAttributes:J,attributeDivisors:j,object:z,attributes:{},index:null}}function S(z,ie,J,j){const $=c.attributes,te=ie.attributes;let q=0;const ee=J.getAttributes();for(const O in ee)if(ee[O].location>=0){const F=$[O];let K=te[O];if(K===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(K=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(K=z.instanceColor)),F===void 0||F.attribute!==K||K&&F.data!==K.data)return!0;q++}return c.attributesNum!==q||c.index!==j}function w(z,ie,J,j){const $={},te=ie.attributes;let q=0;const ee=J.getAttributes();for(const O in ee)if(ee[O].location>=0){let F=te[O];F===void 0&&(O==="instanceMatrix"&&z.instanceMatrix&&(F=z.instanceMatrix),O==="instanceColor"&&z.instanceColor&&(F=z.instanceColor));const K={};K.attribute=F,F&&F.data&&(K.data=F.data),$[O]=K,q++}c.attributes=$,c.attributesNum=q,c.index=j}function T(){const z=c.newAttributes;for(let ie=0,J=z.length;ie<J;ie++)z[ie]=0}function x(z){y(z,0)}function y(z,ie){const J=c.newAttributes,j=c.enabledAttributes,$=c.attributeDivisors;J[z]=1,j[z]===0&&(s.enableVertexAttribArray(z),j[z]=1),$[z]!==ie&&(s.vertexAttribDivisor(z,ie),$[z]=ie)}function C(){const z=c.newAttributes,ie=c.enabledAttributes;for(let J=0,j=ie.length;J<j;J++)ie[J]!==z[J]&&(s.disableVertexAttribArray(J),ie[J]=0)}function I(z,ie,J,j,$,te,q){q===!0?s.vertexAttribIPointer(z,ie,J,$,te):s.vertexAttribPointer(z,ie,J,j,$,te)}function N(z,ie,J,j){T();const $=j.attributes,te=J.getAttributes(),q=ie.defaultAttributeValues;for(const ee in te){const O=te[ee];if(O.location>=0){let Y=$[ee];if(Y===void 0&&(ee==="instanceMatrix"&&z.instanceMatrix&&(Y=z.instanceMatrix),ee==="instanceColor"&&z.instanceColor&&(Y=z.instanceColor)),Y!==void 0){const F=Y.normalized,K=Y.itemSize,Me=e.get(Y);if(Me===void 0)continue;const X=Me.buffer,le=Me.type,ye=Me.bytesPerElement,we=le===s.INT||le===s.UNSIGNED_INT||Y.gpuType===qh;if(Y.isInterleavedBufferAttribute){const Se=Y.data,Re=Se.isInterleavedBuffer===!0?Se.stride:Se.itemSize,pt=Y.offset;if(Se.isInstancedInterleavedBuffer||Se.isInstancedBufferAttribute){for(let Ye=0;Ye<O.locationSize;Ye++)y(O.location+Ye,Se.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Se.meshPerAttribute*Se.count)}else for(let Ye=0;Ye<O.locationSize;Ye++)x(O.location+Ye);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Ye=0;Ye<O.locationSize;Ye++)I(O.location+Ye,K/O.locationSize,le,F,Re*ye,(pt+K/O.locationSize*Ye)*ye,we)}else{if(Y.isInstancedBufferAttribute){for(let Se=0;Se<O.locationSize;Se++)y(O.location+Se,Y.meshPerAttribute);z.isInstancedMesh!==!0&&j._maxInstanceCount===void 0&&(j._maxInstanceCount=Y.meshPerAttribute*Y.count)}else for(let Se=0;Se<O.locationSize;Se++)x(O.location+Se);s.bindBuffer(s.ARRAY_BUFFER,X);for(let Se=0;Se<O.locationSize;Se++)I(O.location+Se,K/O.locationSize,le,F,K*ye,K/O.locationSize*Se*ye,we)}}else if(q!==void 0){const F=q[ee];if(F!==void 0)switch(F.length){case 2:s.vertexAttrib2fv(O.location,F);break;case 3:s.vertexAttrib3fv(O.location,F);break;case 4:s.vertexAttrib4fv(O.location,F);break;default:s.vertexAttrib1fv(O.location,F)}}}}C()}function L(){G();for(const z in r){const ie=r[z];for(const J in ie){const j=ie[J];for(const $ in j){const te=j[$];for(const q in te)v(te[q].object),delete te[q];delete j[$]}}delete r[z]}}function k(z){if(r[z.id]===void 0)return;const ie=r[z.id];for(const J in ie){const j=ie[J];for(const $ in j){const te=j[$];for(const q in te)v(te[q].object),delete te[q];delete j[$]}}delete r[z.id]}function E(z){for(const ie in r){const J=r[ie];for(const j in J){const $=J[j];if($[z.id]===void 0)continue;const te=$[z.id];for(const q in te)v(te[q].object),delete te[q];delete $[z.id]}}}function D(z){for(const ie in r){const J=r[ie],j=z.isInstancedMesh===!0?z.id:0,$=J[j];if($!==void 0){for(const te in $){const q=$[te];for(const ee in q)v(q[ee].object),delete q[ee];delete $[te]}delete J[j],Object.keys(J).length===0&&delete r[ie]}}}function G(){H(),d=!0,c!==l&&(c=l,m(c.object))}function H(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:G,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:k,releaseStatesOfObject:D,releaseStatesOfProgram:E,initAttributes:T,enableAttribute:x,disableUnusedAttributes:C}}function ww(s,e,t){let r;function l(p){r=p}function c(p,m){s.drawArrays(r,p,m),t.update(m,r,1)}function d(p,m,v){v!==0&&(s.drawArraysInstanced(r,p,m,v),t.update(m,r,v))}function h(p,m,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,m,0,v);let _=0;for(let S=0;S<v;S++)_+=m[S];t.update(_,r,1)}this.setMode=l,this.render=c,this.renderInstances=d,this.renderMultiDraw=h}function bw(s,e,t,r){let l;function c(){if(l!==void 0)return l;if(e.has("EXT_texture_filter_anisotropic")===!0){const E=e.get("EXT_texture_filter_anisotropic");l=s.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else l=0;return l}function d(E){return!(E!==Vi&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function h(E){const D=E===Yi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(E!==si&&E!==Gi&&!D&&r.convert(E)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function p(E){if(E==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const v=p(m);v!==m&&(vt("WebGLRenderer:",m,"not supported, using",v,"instead."),m=v);const M=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),_=t.logarithmicDepthBuffer===!0&&M===!1;t.reversedDepthBuffer===!0&&M===!1&&vt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&M===!0&&vt("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");const S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),w=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_TEXTURE_SIZE),x=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),y=s.getParameter(s.MAX_VERTEX_ATTRIBS),C=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),I=s.getParameter(s.MAX_VARYING_VECTORS),N=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),k=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:c,getMaxPrecision:p,textureFormatReadable:d,textureTypeReadable:h,precision:m,logarithmicDepthBuffer:_,reversedDepthBuffer:M,maxTextures:S,maxVertexTextures:w,maxTextureSize:T,maxCubemapSize:x,maxAttributes:y,maxVertexUniforms:C,maxVaryings:I,maxFragmentUniforms:N,maxSamples:L,samples:k}}function Tw(s){const e=this;let t=null,r=0,l=!1,c=!1;const d=new Or,h=new Et,p={value:null,needsUpdate:!1};this.uniform=p,this.numPlanes=0,this.numIntersection=0,this.init=function(M,_){const S=M.length!==0||_||r!==0||l;return l=_,r=M.length,S},this.beginShadows=function(){c=!0,v(null)},this.endShadows=function(){c=!1},this.setGlobalState=function(M,_){t=v(M,_,0)},this.setState=function(M,_,S){const w=M.clippingPlanes,T=M.clipIntersection,x=M.clipShadows,y=s.get(M);if(!l||w===null||w.length===0||c&&!x)c?v(null):m();else{const C=c?0:r,I=C*4;let N=y.clippingState||null;p.value=N,N=v(w,_,I,S);for(let L=0;L!==I;++L)N[L]=t[L];y.clippingState=N,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=C}};function m(){p.value!==t&&(p.value=t,p.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(M,_,S,w){const T=M!==null?M.length:0;let x=null;if(T!==0){if(x=p.value,w!==!0||x===null){const y=S+T*4,C=_.matrixWorldInverse;h.getNormalMatrix(C),(x===null||x.length<y)&&(x=new Float32Array(y));for(let I=0,N=S;I!==T;++I,N+=4)d.copy(M[I]).applyMatrix4(C,h),d.normal.toArray(x,N),x[N+3]=d.constant}p.value=x,p.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,x}}class of extends Xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},l=[r,r,r,r,r,r];this.texture=new Hx(l),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},l=new Eo(5,5,5),c=new xs({name:"CubemapFromEquirect",uniforms:fa(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Zn,blending:oa});c.uniforms.tEquirect.value=t;const d=new Ki(l,c),h=t.minFilter;return t.minFilter===Hr&&(t.minFilter=Kn),new Uh(1,10,this).update(e,d),t.minFilter=h,d.geometry.dispose(),d.material.dispose(),this}clear(e,t=!0,r=!0,l=!0){const c=e.getRenderTarget();for(let d=0;d<6;d++)e.setRenderTarget(this,d),e.clear(t,r,l);e.setRenderTarget(c)}}const Rg=256,Cw=3,Nw=20,Kx=256,Zx=16,Aw=3,Rw=new de,Pw=new Tt;class wc{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Uh(1,10,null),this._boxMesh=new Ki(new Eo(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,r=.1,l=100,c={}){const{size:d=256,position:h=Rw}=c,p=this._renderer;this._setSize(d);const m=this._allocateTarget(),v=this._getSourceTarget(!0);t>0&&(v.texture.mipmapsAutoUpdate=!1);const M=p.autoClear,_=p.autoClearColor,S=p.autoClearDepth,w=p.autoClearStencil,T=e.background;p.autoClear=!0,p.autoClearColor=!0,p.autoClearDepth=!0,p.autoClearStencil=!0,T===null&&(e.background=p.getClearColor(Pw));const x=new Uh(r,l,v);return x.position.copy(h),x.update(p,e),p.autoClear=M,p.autoClearColor=_,p.autoClearDepth=S,p.autoClearStencil=w,e.background=T,t>0&&(v.texture.mipmapsAutoUpdate=!0,this._blur(m,t)),this._applyPMREM(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Lg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(Rg,GS(e))}_fromTexture(e,t){e.mapping===ua||e.mapping===mo?this._setSize(e.image.length===0?Rg:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);const r=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(r),r}_allocateTarget(){const e=this._cubeSize,t=Pg(e,!1,!1),r=Math.log2(e)-Cw;for(let l=0;l<=r;l++)t.texture.mipmaps.push({width:e>>l,height:e>>l});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){const t=this._cubeSize,r=this._sourceTarget;return(r===null||r.width!==t||e&&r.depthBuffer===!1)&&(r!==null&&r.dispose(),this._sourceTarget=Pg(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,r){const l=this._boxMesh,c=this._cubeCamera;l.material=r,c.renderTarget=e,c.activeMipmapLevel=t;const d=e.width>>t;e.viewport.set(0,0,d,d),c.update(this._renderer,l),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===ua||e.mapping===mo?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dg()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Lg()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Lw(),this._integrationMaterial=Dw());const t=this._cubeSize,r=e.texture.mipmaps.length-1,l=this._ggxMaterial.uniforms;l.envMap.value=this._sourceTarget.texture;const c=this._integrationMaterial.uniforms;c.envMap.value=this._sourceTarget.texture,c.sourceLod.value=Math.log2(t/Zx);for(let d=0;d<=r;d++){const h=wc.lodToRoughness(d,r);if(d>r-Aw)c.roughness.value=h,this._renderCube(e,d,this._integrationMaterial);else{const p=h>0?Math.log2(t)+.5*Math.log2(6/(Kx*Math.pow(h,4)))+.5:0;l.roughness.value=h,l.lodBias.value=p,this._renderCube(e,d,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Iw());const r=this._blurMaterial,l=r.uniforms,c=this._sourceTarget;l.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,l.envMap.value=c.texture,this._renderCube(e,0,r),l.envMap.value=e.texture,this._renderCube(c,0,r)}}function Pg(s,e,t){return new of(s,{minFilter:Hr,generateMipmaps:e,type:Yi,colorSpace:vc,depthBuffer:t})}function bo(s,e,t){return new xs({name:s,uniforms:e,vertexShader:Nt.cube_vert,fragmentShader:t,side:Zn,blending:oa,depthTest:!1,depthWrite:!1})}function Lw(){return bo("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${Kx}u

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
	`)}function Dw(){return bo("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:Zx}},`

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
	`)}function Iw(){return bo("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Nw}
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
	`)}function Lg(){return bo("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function Dg(){return bo("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function kw(s){let e=new WeakMap,t=new WeakMap,r=null;function l(_,S=!1){return _==null?null:S?d(_):c(_)}function c(_){if(_&&_.isTexture){const S=_.mapping;if(S===md||S===gd)if(e.has(_)){const w=e.get(_).texture;return h(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const T=new of(w.height);return T.fromEquirectangularTexture(s,_),e.set(_,T),_.addEventListener("dispose",m),h(T.texture,_.mapping)}else return null}}return _}function d(_){if(_&&_.isTexture&&_.isPMREMTexture!==!0){const S=_.mapping,w=S===md||S===gd,T=S===ua||S===mo;if(w||T){let x=t.get(_);const y=x!==void 0?x.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==y)return r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(_,x):r.fromCubemap(_,x),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),x.texture;if(x!==void 0)return x.texture;{const C=_.image;return w&&C&&C.height>0||T&&C&&p(C)?(r===null&&(r=new wc(s)),x=w?r.fromEquirectangular(_):r.fromCubemap(_),x.texture.pmremVersion=_.pmremVersion,t.set(_,x),_.addEventListener("dispose",v),x.texture):null}}}return _}function h(_,S){return S===md?_.mapping=ua:S===gd&&(_.mapping=mo),_}function p(_){let S=0;const w=6;for(let T=0;T<w;T++)_[T]!==void 0&&S++;return S===w}function m(_){const S=_.target;S.removeEventListener("dispose",m);const w=e.get(S);w!==void 0&&(e.delete(S),w.dispose())}function v(_){const S=_.target;S.removeEventListener("dispose",v);const w=t.get(S);w!==void 0&&(t.delete(S),w.dispose())}function M(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:l,dispose:M}}function Uw(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const l=s.getExtension(r);return e[r]=l,l}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const l=t(r);return l===null&&dc("WebGLRenderer: "+r+" extension not supported."),l}}}function Fw(s,e,t,r){const l={},c=new WeakMap,d=new FinalizationRegistry(w=>delete l[w]);function h(w){p(w.target)}function p(w){w.index!==null&&e.remove(w.index);for(const x in w.attributes)e.remove(w.attributes[x]);w.removeEventListener("dispose",h),delete l[w.id],d.unregister(w);const T=c.get(w);T&&(e.remove(T),c.delete(w)),r.releaseStatesOfGeometry(w),w.isInstancedBufferGeometry===!0&&delete w._maxInstanceCount,t.memory.geometries--}function m(w,T){return l[T.id]!==void 0||(T.addEventListener("dispose",h),l[T.id]=new WeakRef(T),d.register(T,T.id,T),t.memory.geometries++),T}function v(w){const T=w.attributes;for(const x in T)e.update(T[x],s.ARRAY_BUFFER)}function M(w){const T=w.index,x=w.attributes.position;let y=0;if(x===void 0)return;const C=T!==null?T.array.length:x.array.length/3-1,I=x.count>=65535?jx:Ox,N=new I(Math.ceil(C/3)*6,1),L=N.array;if(T!==null){const E=T.array;y=T.version;for(let D=0,G=0;D<C;D+=3){const H=E[D+0],z=E[D+1],ie=E[D+2];L[G++]=H,L[G++]=z,L[G++]=z,L[G++]=ie,L[G++]=ie,L[G++]=H}}else{y=x.version;for(let E=0,D=0;E<C;E+=3){const G=E+0,H=E+1,z=E+2;L[D++]=G,L[D++]=H,L[D++]=H,L[D++]=z,L[D++]=z,L[D++]=G}}N.version=y;const k=c.get(w);k&&e.remove(k),c.set(w,N)}function _(w){const T=c.get(w);if(T){const x=w.index;x!==null&&T.version<x.version&&M(w)}else M(w);return c.get(w)}function S(){for(const w in l){const T=l[w].deref();T!==void 0&&p(T)}}return{get:m,update:v,getWireframeAttribute:_,dispose:S}}function Ow(s,e,t){let r;function l(M){r=M}let c,d;function h(M){c=M.type,d=M.bytesPerElement}function p(M,_){s.drawElements(r,_,c,M*d),t.update(_,r,1)}function m(M,_,S){S!==0&&(s.drawElementsInstanced(r,_,c,M*d,S),t.update(_,r,S))}function v(M,_,S){if(S===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,_,0,c,M,0,S);let T=0;for(let x=0;x<S;x++)T+=_[x];t.update(T,r,1)}this.setMode=l,this.setIndex=h,this.render=p,this.renderInstances=m,this.renderMultiDraw=v}function jw(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(c,d,h){switch(t.calls++,d){case s.TRIANGLES:t.triangles+=h*(c/3);break;case s.LINES:t.lines+=h*(c/2);break;case s.LINE_STRIP:t.lines+=h*(c-1);break;case s.LINE_LOOP:t.lines+=h*c;break;case s.POINTS:t.points+=h*c;break;default:Bt("WebGLInfo: Unknown draw mode:",d);break}}function l(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:l,update:r}}function zw(s,e,t){const r=new WeakMap,l=new rn;function c(d,h,p){const m=d.morphTargetInfluences,v=h.morphAttributes.position||h.morphAttributes.normal||h.morphAttributes.color,M=v!==void 0?v.length:0;let _=r.get(h);if(_===void 0||_.count!==M){let H=function(){D.dispose(),r.delete(h),h.removeEventListener("dispose",H)};var S=H;_!==void 0&&_.texture.dispose();const w=h.morphAttributes.position!==void 0,T=h.morphAttributes.normal!==void 0,x=h.morphAttributes.color!==void 0,y=h.morphAttributes.position||[],C=h.morphAttributes.normal||[],I=h.morphAttributes.color||[];let N=0;w===!0&&(N=1),T===!0&&(N=2),x===!0&&(N=3);let L=h.attributes.position.count*N,k=1;L>e.maxTextureSize&&(k=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const E=new Float32Array(L*k*4*M),D=new kx(E,L,k,M);D.type=Gi,D.needsUpdate=!0;const G=N*4;for(let z=0;z<M;z++){const ie=y[z],J=C[z],j=I[z],$=L*k*4*z;for(let te=0;te<ie.count;te++){const q=te*G;w===!0&&(l.fromBufferAttribute(ie,te),E[$+q+0]=l.x,E[$+q+1]=l.y,E[$+q+2]=l.z,E[$+q+3]=0),T===!0&&(l.fromBufferAttribute(J,te),E[$+q+4]=l.x,E[$+q+5]=l.y,E[$+q+6]=l.z,E[$+q+7]=0),x===!0&&(l.fromBufferAttribute(j,te),E[$+q+8]=l.x,E[$+q+9]=l.y,E[$+q+10]=l.z,E[$+q+11]=j.itemSize===4?l.w:1)}}_={count:M,texture:D,size:new Ut(L,k)},r.set(h,_),h.addEventListener("dispose",H)}if(d.isInstancedMesh===!0&&d.morphTexture!==null)p.getUniforms().setValue(s,"morphTexture",d.morphTexture,t);else{let w=0;for(let x=0;x<m.length;x++)w+=m[x];const T=h.morphTargetsRelative?1:1-w;p.getUniforms().setValue(s,"morphTargetBaseInfluence",T),p.getUniforms().setValue(s,"morphTargetInfluences",m)}p.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),p.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:c}}function Bw(s,e,t,r,l){let c=new WeakMap;function d(m){const v=l.render.frame,M=m.geometry,_=e.get(m,M);if(c.get(_)!==v&&(e.update(_),c.set(_,v)),m.isInstancedMesh&&(m.hasEventListener("dispose",p)===!1&&m.addEventListener("dispose",p),c.get(m)!==v&&(t.update(m.instanceMatrix,s.ARRAY_BUFFER),m.instanceColor!==null&&t.update(m.instanceColor,s.ARRAY_BUFFER),c.set(m,v))),m.isSkinnedMesh){const S=m.skeleton;c.get(S)!==v&&(S.update(),c.set(S,v))}return _}function h(){c=new WeakMap}function p(m){const v=m.target;v.removeEventListener("dispose",p),r.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:d,dispose:h}}const Hw={[gx]:"LINEAR_TONE_MAPPING",[xx]:"REINHARD_TONE_MAPPING",[vx]:"CINEON_TONE_MAPPING",[_x]:"ACES_FILMIC_TONE_MAPPING",[Sx]:"AGX_TONE_MAPPING",[Mx]:"NEUTRAL_TONE_MAPPING",[yx]:"CUSTOM_TONE_MAPPING"};function Gw(s,e,t,r,l,c){const d=new Xi(e,t,{type:s,depthBuffer:l,stencilBuffer:c,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let h=null,p=null,m=null;const v=new gi;v.setAttribute("position",new Fn([-1,3,0,-1,-1,0,3,-1,0],3)),v.setAttribute("uv",new Fn([0,2,0,0,2,0],2));const M=new M1({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),_=new Ki(v,M),S=new I1(-1,1,1,-1,0,1);let w=null,T=null,x=!1,y,C=null,I=[],N=!1;this.setSize=function(L,k){d.setSize(L,k),h!==null&&h.setSize(L,k),p!==null&&p.setSize(L,k);for(let E=0;E<I.length;E++){const D=I[E];D.setSize&&D.setSize(L,k)}},this.setEffects=function(L){I=L,N=I.length>0&&I[0].isRenderPass===!0;const k=d.width,E=d.height;I.length>0&&h===null&&(h=new Xi(k,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}),p=new Xi(k,E,{type:Yi,depthBuffer:!1,stencilBuffer:!1}));const D=l===!0&&I.some(G=>G.needsDepthTexture===!0);D!==(d.depthTexture!==null)&&(D===!0&&m===null&&(m=new ha(k,E),c===!0&&(m.format=Gr,m.type=da)),d.dispose(),d.depthTexture=D?m:null,d.resolveDepthBuffer=D,d.storeMultisampledDepthBuffer=D);for(let G=0;G<I.length;G++){const H=I[G];H.setSize&&H.setSize(k,E),D&&H.needsDepthTexture===!0&&H.setDepthTexture&&H.setDepthTexture(m)}},this.begin=function(L,k){if(x||L.toneMapping===dr&&I.length===0)return!1;if(C=k,k!==null){const E=k.width,D=k.height;(d.width!==E||d.height!==D)&&this.setSize(E,D)}return N===!1&&L.setRenderTarget(d),y=L.toneMapping,L.toneMapping=dr,!0},this.hasRenderPass=function(){return N},this.end=function(L,k){L.toneMapping=y,x=!0;let E=d,D=h;for(let G=0;G<I.length;G++){const H=I[G];H.enabled!==!1&&(H.render(L,D,E,k),H.needsSwap!==!1&&(E=D,D=D===h?p:h))}if(w!==L.outputColorSpace||T!==L.toneMapping){w=L.outputColorSpace,T=L.toneMapping,M.defines={},It.getTransfer(w)===Vt&&(M.defines.SRGB_TRANSFER="");const G=Hw[T];G&&(M.defines[G]=""),M.needsUpdate=!0}M.uniforms.tDiffuse.value=E.texture,L.setRenderTarget(C),L.render(_,S),C=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){d.dispose(),h!==null&&h.dispose(),p!==null&&p.dispose(),v.dispose(),M.dispose()}}const Qx=new An,Jx=new ha(1,1),ev=new Gx(1),tv=new kx,nv=new ZS,iv=new Hx,Ig=[],kg=[],Ug=new Float32Array(16),Fg=new Float32Array(9),Og=new Float32Array(4);function ma(s,e,t){const r=s[0];if(r<=0||r>0)return s;const l=e*t;let c=Ig[l];if(c===void 0&&(c=new Float32Array(l),Ig[l]=c),e!==0){r.toArray(c,0);for(let d=1,h=0;d!==e;++d)h+=t,s[d].toArray(c,h)}return c}function xn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function vn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Rc(s,e){let t=kg[e];t===void 0&&(t=new Int32Array(e),kg[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function Vw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Ww(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2fv(this.addr,e),vn(t,e)}}function Xw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;s.uniform3fv(this.addr,e),vn(t,e)}}function $w(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4fv(this.addr,e),vn(t,e)}}function qw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Og.set(r),s.uniformMatrix2fv(this.addr,!1,Og),vn(t,r)}}function Yw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Fg.set(r),s.uniformMatrix3fv(this.addr,!1,Fg),vn(t,r)}}function Kw(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(xn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(xn(t,r))return;Ug.set(r),s.uniformMatrix4fv(this.addr,!1,Ug),vn(t,r)}}function Zw(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Qw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2iv(this.addr,e),vn(t,e)}}function Jw(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3iv(this.addr,e),vn(t,e)}}function eb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4iv(this.addr,e),vn(t,e)}}function tb(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function nb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;s.uniform2uiv(this.addr,e),vn(t,e)}}function ib(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;s.uniform3uiv(this.addr,e),vn(t,e)}}function rb(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;s.uniform4uiv(this.addr,e),vn(t,e)}}function Pc(s){return s.version===0&&(s.compareFunction=Dx,s.needsUpdate=!0),s}function sb(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_2D_SHADOW?c=Pc(Jx):c=Qx,t.setTexture2D(e||c,l)}function ab(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture3D(e||nv,l)}function ob(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l);let c;this.type===s.SAMPLER_CUBE_SHADOW?c=Pc(ev):c=iv,t.setTextureCube(e||c,l)}function lb(s,e,t){const r=this.cache,l=t.allocateTextureUnit();r[0]!==l&&(s.uniform1i(this.addr,l),r[0]=l),t.setTexture2DArray(e||tv,l)}function cb(s){switch(s){case 5126:return Vw;case 35664:return Ww;case 35665:return Xw;case 35666:return $w;case 35674:return qw;case 35675:return Yw;case 35676:return Kw;case 5124:case 35670:return Zw;case 35667:case 35671:return Qw;case 35668:case 35672:return Jw;case 35669:case 35673:return eb;case 5125:return tb;case 36294:return nb;case 36295:return ib;case 36296:return rb;case 35678:case 36198:case 36298:case 36306:case 35682:return sb;case 35679:case 36299:case 36307:return ab;case 35680:case 36300:case 36308:case 36293:return ob;case 36289:case 36303:case 36311:case 36292:return lb}}function ub(s,e){s.uniform1fv(this.addr,e)}function db(s,e){const t=ma(e,this.size,2);s.uniform2fv(this.addr,t)}function hb(s,e){const t=ma(e,this.size,3);s.uniform3fv(this.addr,t)}function fb(s,e){const t=ma(e,this.size,4);s.uniform4fv(this.addr,t)}function pb(s,e){const t=ma(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function mb(s,e){const t=ma(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function gb(s,e){const t=ma(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function xb(s,e){s.uniform1iv(this.addr,e)}function vb(s,e){s.uniform2iv(this.addr,e)}function _b(s,e){s.uniform3iv(this.addr,e)}function yb(s,e){s.uniform4iv(this.addr,e)}function Sb(s,e){s.uniform1uiv(this.addr,e)}function Mb(s,e){s.uniform2uiv(this.addr,e)}function Eb(s,e){s.uniform3uiv(this.addr,e)}function wb(s,e){s.uniform4uiv(this.addr,e)}function bb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_2D_SHADOW?d=Pc(Jx):d=Qx;for(let h=0;h!==l;++h)t.setTexture2D(e[h]||d,c[h])}function Tb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture3D(e[d]||nv,c[d])}function Cb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));let d;this.type===s.SAMPLER_CUBE_SHADOW?d=Pc(ev):d=iv;for(let h=0;h!==l;++h)t.setTextureCube(e[h]||d,c[h])}function Nb(s,e,t){const r=this.cache,l=e.length,c=Rc(t,l);xn(r,c)||(s.uniform1iv(this.addr,c),vn(r,c));for(let d=0;d!==l;++d)t.setTexture2DArray(e[d]||tv,c[d])}function Ab(s){switch(s){case 5126:return ub;case 35664:return db;case 35665:return hb;case 35666:return fb;case 35674:return pb;case 35675:return mb;case 35676:return gb;case 5124:case 35670:return xb;case 35667:case 35671:return vb;case 35668:case 35672:return _b;case 35669:case 35673:return yb;case 5125:return Sb;case 36294:return Mb;case 36295:return Eb;case 36296:return wb;case 35678:case 36198:case 36298:case 36306:case 35682:return bb;case 35679:case 36299:case 36307:return Tb;case 35680:case 36300:case 36308:case 36293:return Cb;case 36289:case 36303:case 36311:case 36292:return Nb}}class Rb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=cb(t.type)}}class Pb{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ab(t.type)}}class Lb{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const l=this.seq;for(let c=0,d=l.length;c!==d;++c){const h=l[c];h.setValue(e,t[h.id],r)}}}const Vd=/(\w+)(\])?(\[|\.)?/g;function jg(s,e){s.seq.push(e),s.map[e.id]=e}function Db(s,e,t){const r=s.name,l=r.length;for(Vd.lastIndex=0;;){const c=Vd.exec(r),d=Vd.lastIndex;let h=c[1];const p=c[2]==="]",m=c[3];if(p&&(h=h|0),m===void 0||m==="["&&d+2===l){jg(t,m===void 0?new Rb(h,s,e):new Pb(h,s,e));break}else{let M=t.map[h];M===void 0&&(M=new Lb(h),jg(t,M)),t=M}}}class hc{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let d=0;d<r;++d){const h=e.getActiveUniform(t,d),p=e.getUniformLocation(t,h.name);Db(h,p,this)}const l=[],c=[];for(const d of this.seq)d.type===e.SAMPLER_2D_SHADOW||d.type===e.SAMPLER_CUBE_SHADOW||d.type===e.SAMPLER_2D_ARRAY_SHADOW?l.push(d):c.push(d);l.length>0&&(this.seq=l.concat(c))}setValue(e,t,r,l){const c=this.map[t];c!==void 0&&c.setValue(e,r,l)}setOptional(e,t,r){const l=t[r];l!==void 0&&this.setValue(e,r,l)}static upload(e,t,r,l){for(let c=0,d=t.length;c!==d;++c){const h=t[c],p=r[h.id];p.needsUpdate!==!1&&h.setValue(e,p.value,l)}}static seqWithValue(e,t){const r=[];for(let l=0,c=e.length;l!==c;++l){const d=e[l];d.id in t&&r.push(d)}return r}}function zg(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const Ib=37297;let kb=0;function Ub(s,e){const t=s.split(`
`),r=[],l=Math.max(e-6,0),c=Math.min(e+6,t.length);for(let d=l;d<c;d++){const h=d+1;r.push(`${h===e?">":" "} ${h}: ${t[d]}`)}return r.join(`
`)}const Bg=new Et;function Fb(s){It._getMatrix(Bg,It.workingColorSpace,s);const e=`mat3( ${Bg.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(s)){case _c:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return vt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Hg(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),c=(s.getShaderInfoLog(e)||"").trim();if(r&&c==="")return"";const d=/ERROR: 0:(\d+)/.exec(c);if(d){const h=parseInt(d[1]);return t.toUpperCase()+`

`+c+`

`+Ub(s.getShaderSource(e),h)}else return c}function Ob(s,e){const t=Fb(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}const jb={[gx]:"Linear",[xx]:"Reinhard",[vx]:"Cineon",[_x]:"ACESFilmic",[Sx]:"AgX",[Mx]:"Neutral",[yx]:"Custom"};function zb(s,e){const t=jb[e];return t===void 0?(vt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ic=new de;function Bb(){It.getLuminanceCoefficients(ic);const s=ic.x.toFixed(4),e=ic.y.toFixed(4),t=ic.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(so).join(`
`)}function Gb(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function Vb(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let l=0;l<r;l++){const c=s.getActiveAttrib(e,l),d=c.name;let h=1;c.type===s.FLOAT_MAT2&&(h=2),c.type===s.FLOAT_MAT3&&(h=3),c.type===s.FLOAT_MAT4&&(h=4),t[d]={type:c.type,location:s.getAttribLocation(e,d),locationSize:h}}return t}function so(s){return s!==""}function Gg(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function Vg(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Wb=/^[ \t]*#include +<([\w\d./]+)>/gm;function Oh(s){return s.replace(Wb,Xb)}function Xb(s,e){const t=Nt[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Oh(t)}const $b=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Wg(s){return s.replace($b,qb)}function qb(s,e,t,r){let l="";for(let c=parseInt(e);c<parseInt(t);c++)l+=r.replace(/\[\s*i\s*\]/g,"[ "+c+" ]").replace(/UNROLLED_LOOP_INDEX/g,c);return l}function Xg(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}const Yb={[ac]:"SHADOWMAP_TYPE_PCF",[ro]:"SHADOWMAP_TYPE_VSM"};function Kb(s){return Yb[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Zb={[mo]:"ENVMAP_MODE_REFRACTION"};function Qb(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Zb[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Jb={[mx]:"ENVMAP_BLENDING_MULTIPLY",[TS]:"ENVMAP_BLENDING_MIX",[CS]:"ENVMAP_BLENDING_ADD"};function eT(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Jb[s.combine]||"ENVMAP_BLENDING_NONE"}function tT(s,e,t,r){const l=s.getContext(),c=t.defines;let d=t.vertexShader,h=t.fragmentShader;const p=Kb(t),m=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",v=Qb(t),M=eT(t),_=Hb(t),S=Gb(c),w=l.createProgram();let T,x,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(T=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),T.length>0&&(T+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S].filter(so).join(`
`),x.length>0&&(x+=`
`)):(T=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(so).join(`
`),x=[Xg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,S,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+v:"",t.envMap?"#define "+M:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+p:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==dr?"#define TONE_MAPPING":"",t.toneMapping!==dr?Nt.tonemapping_pars_fragment:"",t.toneMapping!==dr?zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Ob("linearToOutputTexel",t.outputColorSpace),Bb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(so).join(`
`)),d=Oh(d),d=Gg(d,t),d=Vg(d,t),h=Oh(h),h=Gg(h,t),h=Vg(h,t),d=Wg(d),h=Wg(h),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,T=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+T,x=["#define varying in",t.glslVersion===Zm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const C=y+T+d,I=y+x+h,N=zg(l,l.VERTEX_SHADER,C),L=zg(l,l.FRAGMENT_SHADER,I);l.attachShader(w,N),l.attachShader(w,L),t.index0AttributeName!==void 0?l.bindAttribLocation(w,0,t.index0AttributeName):t.hasPositionAttribute===!0&&l.bindAttribLocation(w,0,"position"),l.linkProgram(w);function k(H){if(s.debug.checkShaderErrors){const z=l.getProgramInfoLog(w)||"",ie=l.getShaderInfoLog(N)||"",J=l.getShaderInfoLog(L)||"",j=z.trim(),$=ie.trim(),te=J.trim();let q=!0,ee=!0;if(l.getProgramParameter(w,l.LINK_STATUS)===!1)if(q=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(l,w,N,L);else{const O=Hg(l,N,"vertex"),Y=Hg(l,L,"fragment");Bt("WebGLProgram: Shader Error "+l.getError()+" - VALIDATE_STATUS "+l.getProgramParameter(w,l.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+j+`
`+O+`
`+Y)}else j!==""?vt("WebGLProgram: Program Info Log:",j):($===""||te==="")&&(ee=!1);ee&&(H.diagnostics={runnable:q,programLog:j,vertexShader:{log:$,prefix:T},fragmentShader:{log:te,prefix:x}})}l.deleteShader(N),l.deleteShader(L),E=new hc(l,w),D=Vb(l,w)}let E;this.getUniforms=function(){return E===void 0&&k(this),E};let D;this.getAttributes=function(){return D===void 0&&k(this),D};let G=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return G===!1&&(G=l.getProgramParameter(w,Ib)),G},this.destroy=function(){r.releaseStatesOfProgram(this),l.deleteProgram(w),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kb++,this.cacheKey=e,this.usedTimes=1,this.program=w,this.vertexShader=N,this.fragmentShader=L,this}let nT=0;class iT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const l=this._getShaderCacheForMaterial(e);return l.has(t)===!1&&(l.add(t),t.usedTimes++),l.has(r)===!1&&(l.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new rT(e),t.set(e,r)),r}}class rT{constructor(e){this.id=nT++,this.code=e,this.usedTimes=0}}function sT(s){return s===gs||s===gc||s===xc}function aT(s,e,t,r,l,c){const d=new nf,h=new iT,p=new Set,m=[],v=new Map,M=r.logarithmicDepthBuffer,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function S(E){return p.add(E),E===0?"uv":`uv${E}`}function w(E,D,G,H,z,ie){const J=H.fog,j=z.geometry,$=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?H.environment:null,te=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap,q=e.get(E.envMap||$,te),ee=_[E.type];let O=r.precision;E.precision!==null&&(O=r.getMaxPrecision(E.precision),O!==E.precision&&vt("WebGLProgram.getParameters:",E.precision,"not supported, using",O,"instead."));const Y=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,F=Y!==void 0?Y.length:0;let K=0;j.morphAttributes.position!==void 0&&(K=1),j.morphAttributes.normal!==void 0&&(K=2),j.morphAttributes.color!==void 0&&(K=3);let Me,X,le,ye;if(ee){const Xe=Bi[ee];Me=Xe.vertexShader,X=Xe.fragmentShader}else{Me=E.vertexShader,X=E.fragmentShader;const Xe=h.getVertexShaderStage(E),Dt=h.getFragmentShaderStage(E);h.update(E,Xe,Dt),le=Xe.id,ye=Dt.id}const we=s.getRenderTarget(),Se=s.state.buffers.depth.getReversed(),Re=z.isInstancedMesh===!0,pt=z.isBatchedMesh===!0,Ye=!!E.map,_t=!!E.matcap,dt=!!q,ct=dt&&q.isPMREMTexture===!0,je=!!E.aoMap,ht=!!E.lightMap,bt=!!E.bumpMap&&E.wireframe===!1,he=!!E.normalMap,Te=!!E.displacementMap,Ee=!!E.emissiveMap,Mt=!!E.metalnessMap,At=!!E.roughnessMap,Le=E.anisotropy>0,U=E.clearcoat>0,Be=E.diffuseRoughness>0,ot=E.dispersion>0,ft=E.retroreflectivity>0,Ae=E.iridescence>0,Wt=E.sheen>0,rt=E.transmission>0,ve=Le&&!!E.anisotropyMap,P=U&&!!E.clearcoatMap,b=U&&!!E.clearcoatNormalMap,re=U&&!!E.clearcoatRoughnessMap,be=Be&&!!E.diffuseRoughnessMap,ge=Ae&&!!E.iridescenceMap,Pe=Ae&&!!E.iridescenceThicknessMap,Ue=Wt&&!!E.sheenColorMap,pe=Wt&&!!E.sheenRoughnessMap,xe=!!E.specularMap,ke=!!E.specularColorMap,W=!!E.specularIntensityMap,_e=rt&&!!E.transmissionMap,me=rt&&!!E.thicknessMap,He=!!E.gradientMap,Fe=!!E.alphaMap,ze=E.alphaTest>0,st=!!E.alphaHash,wt=!!E.extensions;let De=dr;E.toneMapped&&(we===null||we.isXRRenderTarget===!0)&&(De=s.toneMapping);const ut=ct?q.isCompressedCubeTexture?q.image[0].mipmaps:q.mipmaps:null,yt={shaderID:ee,shaderType:E.type,shaderName:E.name,vertexShader:Me,fragmentShader:X,defines:E.defines,customVertexShaderID:le,customFragmentShaderID:ye,isRawShaderMaterial:E.isRawShaderMaterial===!0,glslVersion:E.glslVersion,precision:O,batching:pt,batchingColor:pt&&z._colorsTexture!==null,instancing:Re,instancingColor:Re&&z.instanceColor!==null,instancingMorph:Re&&z.morphTexture!==null,outputColorSpace:we===null?s.outputColorSpace:we.isXRRenderTarget===!0?we.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!E.alphaToCoverage,map:Ye,matcap:_t,envMap:dt,envMapMode:dt&&q.mapping,envMapPMREM:ct,envMapMaxLod:ct?ut.length-1:null,envMapSize:ct?ut[0].width:null,aoMap:je,lightMap:ht,bumpMap:bt,normalMap:he,displacementMap:Te,emissiveMap:Ee,normalMapObjectSpace:he&&E.normalMapType===RS,normalMapTangentSpace:he&&E.normalMapType===Dh,packedNormalMap:he&&E.normalMapType===Dh&&sT(E.normalMap.format),metalnessMap:Mt,roughnessMap:At,anisotropy:Le,anisotropyMap:ve,clearcoat:U,clearcoatMap:P,clearcoatNormalMap:b,clearcoatRoughnessMap:re,diffuseRoughness:Be,diffuseRoughnessMap:be,dispersion:ot,retroreflection:ft,iridescence:Ae,iridescenceMap:ge,iridescenceThicknessMap:Pe,sheen:Wt,sheenColorMap:Ue,sheenRoughnessMap:pe,specularMap:xe,specularColorMap:ke,specularIntensityMap:W,transmission:rt,transmissionMap:_e,thicknessMap:me,gradientMap:He,opaque:E.transparent===!1&&E.blending===lo&&E.alphaToCoverage===!1,alphaMap:Fe,alphaTest:ze,alphaHash:st,combine:E.combine,mapUv:Ye&&S(E.map.channel),aoMapUv:je&&S(E.aoMap.channel),lightMapUv:ht&&S(E.lightMap.channel),bumpMapUv:bt&&S(E.bumpMap.channel),normalMapUv:he&&S(E.normalMap.channel),displacementMapUv:Te&&S(E.displacementMap.channel),emissiveMapUv:Ee&&S(E.emissiveMap.channel),metalnessMapUv:Mt&&S(E.metalnessMap.channel),roughnessMapUv:At&&S(E.roughnessMap.channel),anisotropyMapUv:ve&&S(E.anisotropyMap.channel),clearcoatMapUv:P&&S(E.clearcoatMap.channel),clearcoatNormalMapUv:b&&S(E.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:re&&S(E.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:be&&S(E.diffuseRoughnessMap.channel),iridescenceMapUv:ge&&S(E.iridescenceMap.channel),iridescenceThicknessMapUv:Pe&&S(E.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&S(E.sheenColorMap.channel),sheenRoughnessMapUv:pe&&S(E.sheenRoughnessMap.channel),specularMapUv:xe&&S(E.specularMap.channel),specularColorMapUv:ke&&S(E.specularColorMap.channel),specularIntensityMapUv:W&&S(E.specularIntensityMap.channel),transmissionMapUv:_e&&S(E.transmissionMap.channel),thicknessMapUv:me&&S(E.thicknessMap.channel),alphaMapUv:Fe&&S(E.alphaMap.channel),vertexTangents:!!j.attributes.tangent&&(he||Le),vertexNormals:!!j.attributes.normal,vertexColors:E.vertexColors,vertexAlphas:E.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!j.attributes.uv&&(Ye||Fe),fog:!!J,useFog:E.fog===!0,fogExp2:!!J&&J.isFogExp2,flatShading:E.wireframe===!1&&(E.flatShading===!0||j.attributes.normal===void 0&&he===!1&&(E.isMeshLambertMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isMeshPhysicalMaterial)),sizeAttenuation:E.sizeAttenuation===!0,logarithmicDepthBuffer:M,reversedDepthBuffer:Se,skinning:z.isSkinnedMesh===!0,hasPositionAttribute:j.attributes.position!==void 0,morphTargets:j.morphAttributes.position!==void 0,morphNormals:j.morphAttributes.normal!==void 0,morphColors:j.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:K,numSunLights:D.sun.length,numDirLights:D.directional.length,numPointLights:D.point.length,numSpotLights:D.spot.length,numSpotLightMaps:D.spotLightMap.length,numRectAreaLights:D.rectArea.length,numHemiLights:D.hemi.length,numSunLightShadows:D.sunShadowMap.length,numDirLightShadows:D.directionalShadowMap.length,numPointLightShadows:D.pointShadowMap.length,numSpotLightShadows:D.spotShadowMap.length,numSpotLightShadowsWithMaps:D.numSpotLightShadowsWithMaps,numLightProbes:D.numLightProbes,numLightProbeGrids:ie.filter(Xe=>Xe.texture!==null).length,numClippingPlanes:c.numPlanes,numClipIntersection:c.numIntersection,dithering:E.dithering,shadowMapEnabled:s.shadowMap.enabled&&G.length>0,shadowMapType:s.shadowMap.type,toneMapping:De,decodeVideoTexture:Ye&&E.map.isVideoTexture===!0&&It.getTransfer(E.map.colorSpace)===Vt,decodeVideoTextureEmissive:Ee&&E.emissiveMap.isVideoTexture===!0&&It.getTransfer(E.emissiveMap.colorSpace)===Vt,premultipliedAlpha:E.premultipliedAlpha,doubleSided:E.side===Hi,flipSided:E.side===Zn,useDepthPacking:E.depthPacking>=0,depthPacking:E.depthPacking||0,index0AttributeName:E.index0AttributeName,extensionClipCullDistance:wt&&E.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(wt&&E.extensions.multiDraw===!0||pt)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:E.customProgramCacheKey()};return yt.vertexUv1s=p.has(1),yt.vertexUv2s=p.has(2),yt.vertexUv3s=p.has(3),p.clear(),yt}function T(E){const D=[];if(E.shaderID?D.push(E.shaderID):(D.push(E.customVertexShaderID),D.push(E.customFragmentShaderID)),E.defines!==void 0)for(const G in E.defines)D.push(G),D.push(E.defines[G]);return E.isRawShaderMaterial===!1&&(x(D,E),y(D,E),D.push(s.outputColorSpace)),D.push(E.customProgramCacheKey),D.join()}function x(E,D){E.push(D.precision),E.push(D.outputColorSpace),E.push(D.envMapMode),E.push(D.envMapPMREM),E.push(D.envMapMaxLod),E.push(D.envMapSize),E.push(D.mapUv),E.push(D.alphaMapUv),E.push(D.lightMapUv),E.push(D.aoMapUv),E.push(D.bumpMapUv),E.push(D.normalMapUv),E.push(D.displacementMapUv),E.push(D.emissiveMapUv),E.push(D.metalnessMapUv),E.push(D.roughnessMapUv),E.push(D.anisotropyMapUv),E.push(D.clearcoatMapUv),E.push(D.clearcoatNormalMapUv),E.push(D.clearcoatRoughnessMapUv),E.push(D.diffuseRoughnessMapUv),E.push(D.iridescenceMapUv),E.push(D.iridescenceThicknessMapUv),E.push(D.sheenColorMapUv),E.push(D.sheenRoughnessMapUv),E.push(D.specularMapUv),E.push(D.specularColorMapUv),E.push(D.specularIntensityMapUv),E.push(D.transmissionMapUv),E.push(D.thicknessMapUv),E.push(D.combine),E.push(D.fogExp2),E.push(D.sizeAttenuation),E.push(D.morphTargetsCount),E.push(D.numSunLights),E.push(D.numDirLights),E.push(D.numPointLights),E.push(D.numSpotLights),E.push(D.numSpotLightMaps),E.push(D.numHemiLights),E.push(D.numRectAreaLights),E.push(D.numSunLightShadows),E.push(D.numDirLightShadows),E.push(D.numPointLightShadows),E.push(D.numSpotLightShadows),E.push(D.numSpotLightShadowsWithMaps),E.push(D.numLightProbes),E.push(D.numLightProbeGrids),E.push(D.shadowMapType),E.push(D.toneMapping),E.push(D.numClippingPlanes),E.push(D.numClipIntersection),E.push(D.depthPacking)}function y(E,D){d.disableAll(),D.instancing&&d.enable(0),D.instancingColor&&d.enable(1),D.instancingMorph&&d.enable(2),D.matcap&&d.enable(3),D.envMap&&d.enable(4),D.normalMapObjectSpace&&d.enable(5),D.normalMapTangentSpace&&d.enable(6),D.clearcoat&&d.enable(7),D.iridescence&&d.enable(8),D.alphaTest&&d.enable(9),D.vertexColors&&d.enable(10),D.vertexAlphas&&d.enable(11),D.vertexUv1s&&d.enable(12),D.vertexUv2s&&d.enable(13),D.vertexUv3s&&d.enable(14),D.vertexTangents&&d.enable(15),D.anisotropy&&d.enable(16),D.alphaHash&&d.enable(17),D.batching&&d.enable(18),D.dispersion&&d.enable(19),D.retroreflection&&d.enable(24),D.diffuseRoughness&&d.enable(25),D.batchingColor&&d.enable(20),D.gradientMap&&d.enable(21),D.packedNormalMap&&d.enable(22),D.vertexNormals&&d.enable(23),E.push(d.mask),d.disableAll(),D.fog&&d.enable(0),D.useFog&&d.enable(1),D.flatShading&&d.enable(2),D.logarithmicDepthBuffer&&d.enable(3),D.reversedDepthBuffer&&d.enable(4),D.skinning&&d.enable(5),D.morphTargets&&d.enable(6),D.morphNormals&&d.enable(7),D.morphColors&&d.enable(8),D.premultipliedAlpha&&d.enable(9),D.shadowMapEnabled&&d.enable(10),D.doubleSided&&d.enable(11),D.flipSided&&d.enable(12),D.useDepthPacking&&d.enable(13),D.dithering&&d.enable(14),D.transmission&&d.enable(15),D.sheen&&d.enable(16),D.opaque&&d.enable(17),D.pointsUvs&&d.enable(18),D.decodeVideoTexture&&d.enable(19),D.decodeVideoTextureEmissive&&d.enable(20),D.alphaToCoverage&&d.enable(21),D.numLightProbeGrids>0&&d.enable(22),D.hasPositionAttribute&&d.enable(23),E.push(d.mask)}function C(E){const D=_[E.type];let G;if(D){const H=Bi[D];G=_1.clone(H.uniforms)}else G=E.uniforms;return G}function I(E,D){let G=v.get(D);return G!==void 0?++G.usedTimes:(G=new tT(s,D,E,l),m.push(G),v.set(D,G)),G}function N(E){if(--E.usedTimes===0){const D=m.indexOf(E);m[D]=m[m.length-1],m.pop(),v.delete(E.cacheKey),E.destroy()}}function L(E){h.remove(E)}function k(){h.dispose()}return{getParameters:w,getProgramCacheKey:T,getUniforms:C,acquireProgram:I,releaseProgram:N,releaseShaderCache:L,programs:m,dispose:k}}function oT(){let s=new WeakMap;function e(d){return s.has(d)}function t(d){let h=s.get(d);return h===void 0&&(h={},s.set(d,h)),h}function r(d){s.delete(d)}function l(d,h,p){s.get(d)[h]=p}function c(){s=new WeakMap}return{has:e,get:t,remove:r,update:l,dispose:c}}function lT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function $g(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function qg(){const s=[];let e=0;const t=[],r=[],l=[];function c(){e=0,t.length=0,r.length=0,l.length=0}function d(_){let S=0;return _.isInstancedMesh&&(S+=2),_.isSkinnedMesh&&(S+=1),S}function h(_,S,w,T,x,y){let C=s[e];return C===void 0?(C={id:_.id,object:_,geometry:S,material:w,materialVariant:d(_),groupOrder:T,renderOrder:_.renderOrder,z:x,group:y},s[e]=C):(C.id=_.id,C.object=_,C.geometry=S,C.material=w,C.materialVariant=d(_),C.groupOrder=T,C.renderOrder=_.renderOrder,C.z=x,C.group=y),e++,C}function p(_,S,w,T,x,y,C){C.reversedDepth===!0&&(x=-x);const I=h(_,S,w,T,x,y);w.transmission>0?r.push(I):w.transparent===!0?l.push(I):t.push(I)}function m(_,S,w,T,x,y){const C=h(_,S,w,T,x,y);w.transmission>0?r.unshift(C):w.transparent===!0?l.unshift(C):t.unshift(C)}function v(_,S){t.length>1&&t.sort(_||lT),r.length>1&&r.sort(S||$g),l.length>1&&l.sort(S||$g)}function M(){for(let _=e,S=s.length;_<S;_++){const w=s[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:r,transparent:l,init:c,push:p,unshift:m,finish:M,sort:v}}function cT(){let s=new WeakMap;function e(r,l){const c=s.get(r);let d;return c===void 0?(d=new qg,s.set(r,[d])):l>=c.length?(d=new qg,c.push(d)):d=c[l],d}function t(){s=new WeakMap}return{get:e,dispose:t}}function uT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new de,color:new Tt};break;case"SpotLight":t={position:new de,direction:new de,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new de,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new de,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new de,halfWidth:new de,halfHeight:new de};break}return s[e.id]=t,t}}}function dT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let hT=0;function fT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function pT(s){const e=new uT,t=dT(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)r.probe.push(new de);const l=new de,c=new qt,d=new qt;function h(m){let v=0,M=0,_=0;for(let ie=0;ie<9;ie++)r.probe[ie].set(0,0,0);let S=0,w=0,T=0,x=0,y=0,C=0,I=0,N=0,L=0,k=0,E=0,D=0,G=0,H=0;m.sort(fT);for(let ie=0,J=m.length;ie<J;ie++){const j=m[ie],$=j.color,te=j.intensity,q=j.distance;let ee=null;if(j.shadow&&j.shadow.map&&(j.shadow.map.texture.format===gs?ee=j.shadow.map.texture:ee=j.shadow.map.depthTexture||j.shadow.map.texture),j.isAmbientLight)v+=$.r*te,M+=$.g*te,_+=$.b*te;else if(j.isLightProbe){for(let O=0;O<9;O++)r.probe[O].addScaledVector(j.sh.coefficients[O],te);H++}else if(j.isSunLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize.copy(Y.mapSize).multiply(Y.getFrameExtents()),r.sunShadow[w]=F,r.sunShadowMap[w]=ee;const K=Y.getViewportCount();for(let Me=0;Me<K;Me++)r.sunShadowMatrix[T+Me]=Y.getMatrix(Me),r.sunShadowCascade[T+Me]=Y._cascadeData[Me];T+=K,w++}r.sun[S]=O,S++}else if(j.isDirectionalLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,r.directionalShadow[x]=F,r.directionalShadowMap[x]=ee,r.directionalShadowMatrix[x]=j.shadow.matrix,L++}r.directional[x]=O,x++}else if(j.isSpotLight){const O=e.get(j);O.position.setFromMatrixPosition(j.matrixWorld),O.color.copy($).multiplyScalar(te),O.distance=q,O.coneCos=Math.cos(j.angle),O.penumbraCos=Math.cos(j.angle*(1-j.penumbra)),O.decay=j.decay,r.spot[C]=O;const Y=j.shadow;if(j.map&&(r.spotLightMap[D]=j.map,D++,Y.updateMatrices(j),j.castShadow&&G++),r.spotLightMatrix[C]=Y.matrix,j.castShadow){const F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,r.spotShadow[C]=F,r.spotShadowMap[C]=ee,E++}C++}else if(j.isRectAreaLight){const O=e.get(j);O.color.copy($).multiplyScalar(te),O.halfWidth.set(j.width*.5,0,0),O.halfHeight.set(0,j.height*.5,0),r.rectArea[I]=O,I++}else if(j.isPointLight){const O=e.get(j);if(O.color.copy(j.color).multiplyScalar(j.intensity),O.distance=j.distance,O.decay=j.decay,j.castShadow){const Y=j.shadow,F=t.get(j);F.shadowIntensity=Y.intensity,F.shadowBias=Y.bias,F.shadowNormalBias=Y.normalBias,F.shadowRadius=Y.radius,F.shadowMapSize=Y.mapSize,F.shadowCameraNear=Y.camera.near,F.shadowCameraFar=Y.camera.far,r.pointShadow[y]=F,r.pointShadowMap[y]=ee,r.pointShadowMatrix[y]=j.shadow.matrix,k++}r.point[y]=O,y++}else if(j.isHemisphereLight){const O=e.get(j);O.skyColor.copy(j.color).multiplyScalar(te),O.groundColor.copy(j.groundColor).multiplyScalar(te),r.hemi[N]=O,N++}}I>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=M,r.ambient[2]=_;const z=r.hash;(z.sunLength!==S||z.directionalLength!==x||z.pointLength!==y||z.spotLength!==C||z.rectAreaLength!==I||z.hemiLength!==N||z.numSunShadows!==w||z.numDirectionalShadows!==L||z.numPointShadows!==k||z.numSpotShadows!==E||z.numSpotMaps!==D||z.numLightProbes!==H)&&(r.sun.length=S,r.directional.length=x,r.spot.length=C,r.rectArea.length=I,r.point.length=y,r.hemi.length=N,r.sunShadow.length=w,r.sunShadowMap.length=w,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=L,r.directionalShadowMap.length=L,r.directionalShadowMatrix.length=L,r.pointShadow.length=k,r.pointShadowMap.length=k,r.pointShadowMatrix.length=k,r.spotShadow.length=E,r.spotShadowMap.length=E,r.spotLightMatrix.length=E+D-G,r.spotLightMap.length=D,r.numSpotLightShadowsWithMaps=G,r.numLightProbes=H,z.sunLength=S,z.directionalLength=x,z.pointLength=y,z.spotLength=C,z.rectAreaLength=I,z.hemiLength=N,z.numSunShadows=w,z.numDirectionalShadows=L,z.numPointShadows=k,z.numSpotShadows=E,z.numSpotMaps=D,z.numLightProbes=H,r.version=hT++)}function p(m,v){let M=0,_=0,S=0,w=0,T=0,x=0;const y=v.matrixWorldInverse;for(let C=0,I=m.length;C<I;C++){const N=m[C];if(N.isSunLight){const L=r.sun[M];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),M++}else if(N.isDirectionalLight){const L=r.directional[_];L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),_++}else if(N.isSpotLight){const L=r.spot[w];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),L.direction.setFromMatrixPosition(N.matrixWorld),l.setFromMatrixPosition(N.target.matrixWorld),L.direction.sub(l),L.direction.transformDirection(y),w++}else if(N.isRectAreaLight){const L=r.rectArea[T];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),d.identity(),c.copy(N.matrixWorld),c.premultiply(y),d.extractRotation(c),L.halfWidth.set(N.width*.5,0,0),L.halfHeight.set(0,N.height*.5,0),L.halfWidth.applyMatrix4(d),L.halfHeight.applyMatrix4(d),T++}else if(N.isPointLight){const L=r.point[S];L.position.setFromMatrixPosition(N.matrixWorld),L.position.applyMatrix4(y),S++}else if(N.isHemisphereLight){const L=r.hemi[x];L.direction.setFromMatrixPosition(N.matrixWorld),L.direction.transformDirection(y),x++}}}return{setup:h,setupView:p,state:r}}function Yg(s){const e=new pT(s),t=[],r=[],l=[];function c(M){v.camera=M,t.length=0,r.length=0,l.length=0}function d(M){M.isLightProbeGrid?l.push(M):t.push(M)}function h(M){r.push(M)}function p(){e.setup(t),l.sort((M,_)=>M.priority-_.priority||M.id-_.id)}function m(M){e.setupView(t,M)}const v={lightsArray:t,shadowsArray:r,lightProbeGridArray:l,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:c,state:v,setupLights:p,setupLightsView:m,pushLight:d,pushShadow:h}}function mT(s){let e=new WeakMap;function t(l,c=0){const d=e.get(l);let h;return d===void 0?(h=new Yg(s),e.set(l,[h])):c>=d.length?(h=new Yg(s),d.push(h)):h=d[c],h}function r(){e=new WeakMap}return{get:t,dispose:r}}const gT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xT=`uniform sampler2D shadow_pass;
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
}`,vT=[new de(1,0,0),new de(-1,0,0),new de(0,1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1)],_T=[new de(0,-1,0),new de(0,-1,0),new de(0,0,1),new de(0,0,-1),new de(0,-1,0),new de(0,-1,0)],Kg=new qt,io=new de,Wd=new de;function yT(s,e,t){let r=new _o;const l=new Ut,c=new Ut,d=new rn,h=new w1,p=new b1,m={},v=t.maxTextureSize,M={[ms]:Zn,[Zn]:ms,[Hi]:Hi},_=new xs({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ut},radius:{value:4}},vertexShader:gT,fragmentShader:xT}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const w=new gi;w.setAttribute("position",new fr(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ki(w,_),x=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ac;let y=this.type;this.render=function(k,E,D){if(x.enabled===!1||x.autoUpdate===!1&&x.needsUpdate===!1||k.length===0)return;this.type===oS&&(vt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ac);const G=s.getRenderTarget(),H=s.getActiveCubeFace(),z=s.getActiveMipmapLevel(),ie=s.state;ie.setBlending(oa),ie.buffers.depth.getReversed()===!0?ie.buffers.color.setClear(0,0,0,0):ie.buffers.color.setClear(1,1,1,1),ie.buffers.depth.setTest(!0),ie.setScissorTest(!1);const J=y!==this.type;J&&E.traverse(function(j){j.material&&(Array.isArray(j.material)?j.material.forEach($=>$.needsUpdate=!0):j.material.needsUpdate=!0)});for(let j=0,$=k.length;j<$;j++){const te=k[j],q=te.shadow;if(q===void 0){vt("WebGLShadowMap:",te,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;l.copy(q.mapSize);const ee=q.getFrameExtents();l.multiply(ee),c.copy(q.mapSize),(l.x>v||l.y>v)&&(l.x>v&&(c.x=Math.floor(v/ee.x),l.x=c.x*ee.x,q.mapSize.x=c.x),l.y>v&&(c.y=Math.floor(v/ee.y),l.y=c.y*ee.y,q.mapSize.y=c.y));const O=s.state.buffers.depth.getReversed();if(q.camera._reversedDepth=O,q.map===null||J===!0){if(q.map!==null&&(q.map.depthTexture!==null&&(q.map.depthTexture.dispose(),q.map.depthTexture=null),q.map.dispose()),this.type===ro){if(te.isPointLight){vt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}q.map=new Xi(l.x,l.y,{format:gs,type:Yi,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),q.map.texture.name=te.name+".shadowMap",q.map.depthTexture=new ha(l.x,l.y,Gi),q.map.depthTexture.name=te.name+".shadowMapDepth",q.map.depthTexture.format=Xr,q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn}else te.isPointLight?(q.map=new of(l.x),q.map.depthTexture=new Gx(l.x,qi)):(q.map=new Xi(l.x,l.y),q.map.depthTexture=new ha(l.x,l.y,qi)),q.map.depthTexture.name=te.name+".shadowMap",q.map.depthTexture.format=Xr,this.type===ac?(q.map.depthTexture.compareFunction=O?Lx:Px,q.map.depthTexture.minFilter=Kn,q.map.depthTexture.magFilter=Kn):(q.map.depthTexture.compareFunction=null,q.map.depthTexture.minFilter=Nn,q.map.depthTexture.magFilter=Nn);q.camera.updateProjectionMatrix()}q.map.isWebGLCubeRenderTarget!==!0&&(q.map.width!==l.x||q.map.height!==l.y)&&q.map.setSize(l.x,l.y);const Y=q.map.isWebGLCubeRenderTarget?6:q.getViewportCount();te.isPointLight!==!0&&q.updateMatrices(te,D);const F=(q.camera.layers.mask&4294967294)!==0?q.camera.layers:D.layers;for(let K=0;K<Y;K++){const Me=q.getCamera(K);if(te.isPointLight){const X=q.camera,le=q.matrix,ye=te.distance||X.far;ye!==X.far&&(X.far=ye,X.updateProjectionMatrix()),io.setFromMatrixPosition(te.matrixWorld),X.position.copy(io),Wd.copy(X.position),Wd.add(vT[K]),X.up.copy(_T[K]),X.lookAt(Wd),X.updateMatrixWorld(),le.makeTranslation(-io.x,-io.y,-io.z),Kg.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),q._frustum.setFromProjectionMatrix(Kg,X.coordinateSystem,X.reversedDepth)}if(q.map.isWebGLCubeRenderTarget)s.setRenderTarget(q.map,K),s.clear();else{K===0&&(s.setRenderTarget(q.map),s.clear());const X=q.getViewport(K);d.set(c.x*X.x,c.y*X.y,c.x*X.z,c.y*X.w),ie.viewport(d)}r=q.getFrustum(K),N(E,D,Me,te,F,this.type)}q.isPointLightShadow!==!0&&this.type===ro&&C(q,D),q.needsUpdate=!1}y=this.type,x.needsUpdate=!1,s.setRenderTarget(G,H,z)};function C(k,E){const D=e.update(T);_.defines.VSM_SAMPLES!==k.blurSamples&&(_.defines.VSM_SAMPLES=k.blurSamples,S.defines.VSM_SAMPLES=k.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),k.mapPass===null?k.mapPass=new Xi(l.x,l.y,{format:gs,type:Yi}):(k.mapPass.width!==k.map.width||k.mapPass.height!==k.map.height)&&k.mapPass.setSize(k.map.width,k.map.height),_.uniforms.shadow_pass.value=k.map.depthTexture,_.uniforms.resolution.value.set(k.map.width,k.map.height),_.uniforms.radius.value=k.radius,s.setRenderTarget(k.mapPass),s.clear(),s.renderBufferDirect(E,null,D,_,T,null),S.uniforms.shadow_pass.value=k.mapPass.texture,S.uniforms.resolution.value.set(k.map.width,k.map.height),S.uniforms.radius.value=k.radius,s.setRenderTarget(k.map),s.clear(),s.renderBufferDirect(E,null,D,S,T,null)}function I(k,E,D,G){let H=null;const z=D.isPointLight===!0?k.customDistanceMaterial:k.customDepthMaterial;if(z!==void 0)H=z;else if(H=D.isPointLight===!0?p:h,s.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){const ie=H.uuid,J=E.uuid;let j=m[ie];j===void 0&&(j={},m[ie]=j);let $=j[J];$===void 0&&($=H.clone(),j[J]=$,E.addEventListener("dispose",L)),H=$}if(H.visible=E.visible,H.wireframe=E.wireframe,G===ro?H.side=E.shadowSide!==null?E.shadowSide:E.side:H.side=E.shadowSide!==null?E.shadowSide:M[E.side],H.alphaMap=E.alphaMap,H.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,H.map=E.map,H.clipShadows=E.clipShadows,H.clippingPlanes=E.clippingPlanes,H.clipIntersection=E.clipIntersection,H.displacementMap=E.displacementMap,H.displacementScale=E.displacementScale,H.displacementBias=E.displacementBias,H.wireframeLinewidth=E.wireframeLinewidth,H.linewidth=E.linewidth,D.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const ie=s.properties.get(H);ie.light=D}return H}function N(k,E,D,G,H,z){if(k.visible===!1)return;if(k.layers.test(H)&&(k.isMesh||k.isLine||k.isPoints)&&(k.castShadow||k.receiveShadow&&z===ro)&&(!k.frustumCulled||k.intersectsFrustum(r))){k.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,k.matrixWorld);const j=e.update(k),$=k.material;if(Array.isArray($)){const te=j.groups;for(let q=0,ee=te.length;q<ee;q++){const O=te[q],Y=$[O.materialIndex];if(Y&&Y.visible){const F=I(k,Y,G,z);k.onBeforeShadow(s,k,E,D,j,F,O),s.renderBufferDirect(D,null,j,F,k,O),k.onAfterShadow(s,k,E,D,j,F,O)}}}else if($.visible){const te=I(k,$,G,z);k.onBeforeShadow(s,k,E,D,j,te,null),s.renderBufferDirect(D,null,j,te,k,null),k.onAfterShadow(s,k,E,D,j,te,null)}}const J=k.children;for(let j=0,$=J.length;j<$;j++)N(J[j],E,D,G,H,z)}function L(k){k.target.removeEventListener("dispose",L);for(const D in m){const G=m[D],H=k.target.uuid;H in G&&(G[H].dispose(),delete G[H])}}}function ST(s,e){function t(){let W=!1;const _e=new rn;let me=null;const He=new rn(0,0,0,0);return{setMask:function(Fe){me!==Fe&&!W&&(s.colorMask(Fe,Fe,Fe,Fe),me=Fe)},setLocked:function(Fe){W=Fe},setClear:function(Fe,ze,st,wt,De){De===!0&&(Fe*=wt,ze*=wt,st*=wt),_e.set(Fe,ze,st,wt),He.equals(_e)===!1&&(s.clearColor(Fe,ze,st,wt),He.copy(_e))},reset:function(){W=!1,me=null,He.set(-1,0,0,0)}}}function r(){let W=!1,_e=!1,me=null,He=null,Fe=null;return{setReversed:function(ze){if(_e!==ze){const st=e.get("EXT_clip_control");ze?st.clipControlEXT(st.LOWER_LEFT_EXT,st.ZERO_TO_ONE_EXT):st.clipControlEXT(st.LOWER_LEFT_EXT,st.NEGATIVE_ONE_TO_ONE_EXT),_e=ze;const wt=Fe;Fe=null,this.setClear(wt)}},getReversed:function(){return _e},setTest:function(ze){ze?Se(s.DEPTH_TEST):Re(s.DEPTH_TEST)},setMask:function(ze){me!==ze&&!W&&(s.depthMask(ze),me=ze)},setFunc:function(ze){if(_e&&(ze=BS[ze]),He!==ze){switch(ze){case qd:s.depthFunc(s.NEVER);break;case Yd:s.depthFunc(s.ALWAYS);break;case Kd:s.depthFunc(s.LESS);break;case po:s.depthFunc(s.LEQUAL);break;case Zd:s.depthFunc(s.EQUAL);break;case Qd:s.depthFunc(s.GEQUAL);break;case Jd:s.depthFunc(s.GREATER);break;case eh:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}He=ze}},setLocked:function(ze){W=ze},setClear:function(ze){Fe!==ze&&(Fe=ze,_e&&(ze=1-ze),s.clearDepth(ze))},reset:function(){W=!1,me=null,He=null,Fe=null,_e=!1}}}function l(){let W=!1,_e=null,me=null,He=null,Fe=null,ze=null,st=null,wt=null,De=null;return{setTest:function(ut){W||(ut?Se(s.STENCIL_TEST):Re(s.STENCIL_TEST))},setMask:function(ut){_e!==ut&&!W&&(s.stencilMask(ut),_e=ut)},setFunc:function(ut,yt,Xe){(me!==ut||He!==yt||Fe!==Xe)&&(s.stencilFunc(ut,yt,Xe),me=ut,He=yt,Fe=Xe)},setOp:function(ut,yt,Xe){(ze!==ut||st!==yt||wt!==Xe)&&(s.stencilOp(ut,yt,Xe),ze=ut,st=yt,wt=Xe)},setLocked:function(ut){W=ut},setClear:function(ut){De!==ut&&(s.clearStencil(ut),De=ut)},reset:function(){W=!1,_e=null,me=null,He=null,Fe=null,ze=null,st=null,wt=null,De=null}}}const c=new t,d=new r,h=new l;let p={};const m=new WeakMap;let v={},M={},_={},S=new WeakMap,w=[],T=null,x=!1,y=null,C=null,I=null,N=null,L=null,k=null,E=null,D=new Tt(0,0,0),G=0,H=!1,z=null,ie=null,J=null,j=null,$=null;const te=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,ee=0;const O=s.getParameter(s.VERSION);O.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(O)[1]),q=ee>=1):O.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),q=ee>=2);let Y=null,F={};const K=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),X=new rn().fromArray(K),le=new rn().fromArray(Me);function ye(W,_e,me,He){const Fe=new Uint8Array(4),ze=s.createTexture();s.bindTexture(W,ze),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let st=0;st<me;st++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(_e,0,s.RGBA,1,1,He,0,s.RGBA,s.UNSIGNED_BYTE,Fe):s.texImage2D(_e+st,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Fe);return ze}const we={};we[s.TEXTURE_2D]=ye(s.TEXTURE_2D,s.TEXTURE_2D,1),we[s.TEXTURE_CUBE_MAP]=ye(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[s.TEXTURE_2D_ARRAY]=ye(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),we[s.TEXTURE_3D]=ye(s.TEXTURE_3D,s.TEXTURE_3D,1,1),c.setClear(0,0,0,1),d.setClear(1),h.setClear(0),Se(s.DEPTH_TEST),d.setFunc(po),bt(!1),he(qm),Se(s.CULL_FACE),je(oa);function Se(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function Re(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function pt(W,_e){return _[W]!==_e?(s.bindFramebuffer(W,_e),_[W]=_e,W===s.DRAW_FRAMEBUFFER&&(_[s.FRAMEBUFFER]=_e),W===s.FRAMEBUFFER&&(_[s.DRAW_FRAMEBUFFER]=_e),!0):!1}function Ye(W,_e){let me=w,He=!1;if(W){me=S.get(_e),me===void 0&&(me=[],S.set(_e,me));const Fe=W.textures;if(me.length!==Fe.length||me[0]!==s.COLOR_ATTACHMENT0){for(let ze=0,st=Fe.length;ze<st;ze++)me[ze]=s.COLOR_ATTACHMENT0+ze;me.length=Fe.length,He=!0}}else me[0]!==s.BACK&&(me[0]=s.BACK,He=!0);He&&s.drawBuffers(me)}function _t(W){return T!==W?(s.useProgram(W),T=W,!0):!1}const dt={[ra]:s.FUNC_ADD,[cS]:s.FUNC_SUBTRACT,[uS]:s.FUNC_REVERSE_SUBTRACT};dt[dS]=s.MIN,dt[hS]=s.MAX;const ct={[fS]:s.ZERO,[pS]:s.ONE,[mS]:s.SRC_COLOR,[fx]:s.SRC_ALPHA,[SS]:s.SRC_ALPHA_SATURATE,[_S]:s.DST_COLOR,[xS]:s.DST_ALPHA,[gS]:s.ONE_MINUS_SRC_COLOR,[px]:s.ONE_MINUS_SRC_ALPHA,[yS]:s.ONE_MINUS_DST_COLOR,[vS]:s.ONE_MINUS_DST_ALPHA,[MS]:s.CONSTANT_COLOR,[ES]:s.ONE_MINUS_CONSTANT_COLOR,[wS]:s.CONSTANT_ALPHA,[bS]:s.ONE_MINUS_CONSTANT_ALPHA};function je(W,_e,me,He,Fe,ze,st,wt,De,ut){if(W===oa){x===!0&&(Re(s.BLEND),x=!1);return}if(x===!1&&(Se(s.BLEND),x=!0),W!==lS){if(W!==y||ut!==H){if((C!==ra||L!==ra)&&(s.blendEquation(s.FUNC_ADD),C=ra,L=ra),ut)switch(W){case lo:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $d:s.blendFunc(s.ONE,s.ONE);break;case Ym:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Km:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Bt("WebGLState: Invalid blending: ",W);break}else switch(W){case lo:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case $d:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Ym:Bt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Km:Bt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Bt("WebGLState: Invalid blending: ",W);break}I=null,N=null,k=null,E=null,D.set(0,0,0),G=0,y=W,H=ut}return}Fe=Fe||_e,ze=ze||me,st=st||He,(_e!==C||Fe!==L)&&(s.blendEquationSeparate(dt[_e],dt[Fe]),C=_e,L=Fe),(me!==I||He!==N||ze!==k||st!==E)&&(s.blendFuncSeparate(ct[me],ct[He],ct[ze],ct[st]),I=me,N=He,k=ze,E=st),(wt.equals(D)===!1||De!==G)&&(s.blendColor(wt.r,wt.g,wt.b,De),D.copy(wt),G=De),y=W,H=!1}function ht(W,_e){W.side===Hi?Re(s.CULL_FACE):Se(s.CULL_FACE);let me=W.side===Zn;_e&&(me=!me),bt(me),W.blending===lo&&W.transparent===!1?je(oa):je(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),d.setFunc(W.depthFunc),d.setTest(W.depthTest),d.setMask(W.depthWrite),c.setMask(W.colorWrite);const He=W.stencilWrite;h.setTest(He),He&&(h.setMask(W.stencilWriteMask),h.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),h.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ee(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?Se(s.SAMPLE_ALPHA_TO_COVERAGE):Re(s.SAMPLE_ALPHA_TO_COVERAGE)}function bt(W){z!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),z=W)}function he(W){W!==sS?(Se(s.CULL_FACE),W!==ie&&(W===qm?s.cullFace(s.BACK):W===aS?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Re(s.CULL_FACE),ie=W}function Te(W){W!==J&&(q&&s.lineWidth(W),J=W)}function Ee(W,_e,me){W?(Se(s.POLYGON_OFFSET_FILL),(j!==_e||$!==me)&&(j=_e,$=me,d.getReversed()&&(_e=-_e,me=-me),s.polygonOffset(_e,me))):Re(s.POLYGON_OFFSET_FILL)}function Mt(W){W?Se(s.SCISSOR_TEST):Re(s.SCISSOR_TEST)}function At(W){W===void 0&&(W=s.TEXTURE0+te-1),Y!==W&&(s.activeTexture(W),Y=W)}function Le(W,_e,me){me===void 0&&(Y===null?me=s.TEXTURE0+te-1:me=Y);let He=F[me];He===void 0&&(He={type:void 0,texture:void 0},F[me]=He),(He.type!==W||He.texture!==_e)&&(Y!==me&&(s.activeTexture(me),Y=me),s.bindTexture(W,_e||we[W]),He.type=W,He.texture=_e)}function U(){const W=F[Y];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function Be(){try{s.compressedTexImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function ot(){try{s.compressedTexImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function ft(){try{s.texSubImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function Ae(){try{s.texSubImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function Wt(){try{s.compressedTexSubImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function rt(){try{s.compressedTexSubImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function ve(){try{s.texStorage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function P(){try{s.texStorage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function b(){try{s.texImage2D(...arguments)}catch(W){Bt("WebGLState:",W)}}function re(){try{s.texImage3D(...arguments)}catch(W){Bt("WebGLState:",W)}}function be(W){return M[W]!==void 0?M[W]:s.getParameter(W)}function ge(W,_e){M[W]!==_e&&(s.pixelStorei(W,_e),M[W]=_e)}function Pe(W){X.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),X.copy(W))}function Ue(W){le.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),le.copy(W))}function pe(W,_e){let me=m.get(_e);me===void 0&&(me=new WeakMap,m.set(_e,me));let He=me.get(W);He===void 0&&(He=s.getUniformBlockIndex(_e,W.name),s.uniformBlockBinding(_e,He,He),me.set(W,He))}function xe(W,_e,me){const Fe=m.get(_e).get(W);p[Fe]!==me&&(s.bindBufferBase(s.UNIFORM_BUFFER,Fe,me),p[Fe]=me)}function ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),d.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),v={},M={},Y=null,F={},_={},p={},S=new WeakMap,w=[],T=null,x=!1,y=null,C=null,I=null,N=null,L=null,k=null,E=null,D=new Tt(0,0,0),G=0,H=!1,z=null,ie=null,J=null,j=null,$=null,X.set(0,0,s.canvas.width,s.canvas.height),le.set(0,0,s.canvas.width,s.canvas.height),c.reset(),d.reset(),h.reset()}return{buffers:{color:c,depth:d,stencil:h},enable:Se,disable:Re,bindFramebuffer:pt,drawBuffers:Ye,useProgram:_t,setBlending:je,setMaterial:ht,setFlipSided:bt,setCullFace:he,setLineWidth:Te,setPolygonOffset:Ee,setScissorTest:Mt,activeTexture:At,bindTexture:Le,unbindTexture:U,compressedTexImage2D:Be,compressedTexImage3D:ot,texImage2D:b,texImage3D:re,pixelStorei:ge,getParameter:be,updateUBOMapping:pe,uniformBlockBinding:xe,texStorage2D:ve,texStorage3D:P,texSubImage2D:ft,texSubImage3D:Ae,compressedTexSubImage2D:Wt,compressedTexSubImage3D:rt,scissor:Pe,viewport:Ue,reset:ke}}function MT(s,e,t,r,l,c,d){const h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new Ut,v=new WeakMap,M=new Set;let _;const S=new WeakMap,w=new Set,T=new FinalizationRegistry(P=>w.delete(P));let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(P,b){return x?new OffscreenCanvas(P,b):vo("canvas")}function C(P,b,re){let be=1;const ge=ve(P);if((ge.width>re||ge.height>re)&&(be=re/Math.max(ge.width,ge.height)),be<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){const Pe=Math.floor(be*ge.width),Ue=Math.floor(be*ge.height);_===void 0&&(_=y(Pe,Ue));const pe=b?y(Pe,Ue):_;return pe.width=Pe,pe.height=Ue,pe.getContext("2d").drawImage(P,0,0,Pe,Ue),vt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+Pe+"x"+Ue+")."),pe}else return"data"in P&&vt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),P;return P}function I(P){return P.generateMipmaps}function N(P){s.generateMipmap(P)}function L(P){return P.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?s.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function k(P,b,re,be,ge,Pe=!1){if(P!==null){if(s[P]!==void 0)return s[P];vt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let Ue;be&&(Ue=e.get("EXT_texture_norm16"),Ue||vt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=b;if(b===s.RED&&(re===s.FLOAT&&(pe=s.R32F),re===s.HALF_FLOAT&&(pe=s.R16F),re===s.UNSIGNED_BYTE&&(pe=s.R8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.R16_EXT),re===s.SHORT&&Ue&&(pe=Ue.R16_SNORM_EXT)),b===s.RED_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.R8UI),re===s.UNSIGNED_SHORT&&(pe=s.R16UI),re===s.UNSIGNED_INT&&(pe=s.R32UI),re===s.BYTE&&(pe=s.R8I),re===s.SHORT&&(pe=s.R16I),re===s.INT&&(pe=s.R32I)),b===s.RG&&(re===s.FLOAT&&(pe=s.RG32F),re===s.HALF_FLOAT&&(pe=s.RG16F),re===s.UNSIGNED_BYTE&&(pe=s.RG8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RG16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RG16_SNORM_EXT)),b===s.RG_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RG8UI),re===s.UNSIGNED_SHORT&&(pe=s.RG16UI),re===s.UNSIGNED_INT&&(pe=s.RG32UI),re===s.BYTE&&(pe=s.RG8I),re===s.SHORT&&(pe=s.RG16I),re===s.INT&&(pe=s.RG32I)),b===s.RGB_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGB8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGB16UI),re===s.UNSIGNED_INT&&(pe=s.RGB32UI),re===s.BYTE&&(pe=s.RGB8I),re===s.SHORT&&(pe=s.RGB16I),re===s.INT&&(pe=s.RGB32I)),b===s.RGBA_INTEGER&&(re===s.UNSIGNED_BYTE&&(pe=s.RGBA8UI),re===s.UNSIGNED_SHORT&&(pe=s.RGBA16UI),re===s.UNSIGNED_INT&&(pe=s.RGBA32UI),re===s.BYTE&&(pe=s.RGBA8I),re===s.SHORT&&(pe=s.RGBA16I),re===s.INT&&(pe=s.RGBA32I)),b===s.RGB&&(re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGB16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RGB16_SNORM_EXT),re===s.UNSIGNED_INT_5_9_9_9_REV&&(pe=s.RGB9_E5),re===s.UNSIGNED_INT_10F_11F_11F_REV&&(pe=s.R11F_G11F_B10F)),b===s.RGBA){const xe=Pe?_c:It.getTransfer(ge);re===s.FLOAT&&(pe=s.RGBA32F),re===s.HALF_FLOAT&&(pe=s.RGBA16F),re===s.UNSIGNED_BYTE&&(pe=xe===Vt?s.SRGB8_ALPHA8:s.RGBA8),re===s.UNSIGNED_SHORT&&Ue&&(pe=Ue.RGBA16_EXT),re===s.SHORT&&Ue&&(pe=Ue.RGBA16_SNORM_EXT),re===s.UNSIGNED_SHORT_4_4_4_4&&(pe=s.RGBA4),re===s.UNSIGNED_SHORT_5_5_5_1&&(pe=s.RGB5_A1)}return(pe===s.R16F||pe===s.R32F||pe===s.RG16F||pe===s.RG32F||pe===s.RGBA16F||pe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function E(P,b){let re;return P?b===null||b===qi||b===da?re=s.DEPTH24_STENCIL8:b===Gi?re=s.DEPTH32F_STENCIL8:b===go&&(re=s.DEPTH24_STENCIL8,vt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===qi||b===da?re=s.DEPTH_COMPONENT24:b===Gi?re=s.DEPTH_COMPONENT32F:b===go&&(re=s.DEPTH_COMPONENT16),re}function D(P,b){return I(P)===!0||P.isFramebufferTexture&&P.minFilter!==Nn&&P.minFilter!==Kn?Math.log2(Math.max(b.width,b.height))+1:P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?b.mipmaps.length:1}function G(P){const b=new WeakRef(P);r.get(P).__ref=b,w.add(b),T.register(P,b,b)}function H(P){const b=r.get(P).__ref;b!==void 0&&(w.delete(b),T.unregister(b))}function z(P){J(P.target)}function ie(P){j(P.target)}function J(P){P.removeEventListener("dispose",z),H(P),te(P),P.isVideoTexture&&v.delete(P),P.isHTMLTexture&&M.delete(P)}function j(P){P.removeEventListener("dispose",ie),H(P),ee(P)}function $(){for(const P of w){const b=P.deref();b!==void 0&&(b.isRenderTarget===!0?j(b):J(b))}w.clear(),M.clear()}function te(P){const b=r.get(P);if(b.__webglInit===void 0)return;const re=P.source,be=S.get(re);if(be){const ge=be[b.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&q(P),Object.keys(be).length===0&&S.delete(re)}r.remove(P)}function q(P){const b=r.get(P);s.deleteTexture(b.__webglTexture);const re=P.source,be=S.get(re);delete be[b.__cacheKey],d.memory.textures--}function ee(P){const b=r.get(P);b.__depthDisposeCallback&&b.__depthDisposeCallback();const re=P.depthTexture;if(re&&re.renderTarget===P&&J(re),P.isWebGLCubeRenderTarget)for(let ge=0;ge<6;ge++){if(Array.isArray(b.__webglFramebuffer[ge]))for(let Pe=0;Pe<b.__webglFramebuffer[ge].length;Pe++)s.deleteFramebuffer(b.__webglFramebuffer[ge][Pe]);else s.deleteFramebuffer(b.__webglFramebuffer[ge]);b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer[ge])}else{if(Array.isArray(b.__webglFramebuffer))for(let ge=0;ge<b.__webglFramebuffer.length;ge++)s.deleteFramebuffer(b.__webglFramebuffer[ge]);else s.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&s.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&s.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let ge=0;ge<b.__webglColorRenderbuffer.length;ge++)b.__webglColorRenderbuffer[ge]&&s.deleteRenderbuffer(b.__webglColorRenderbuffer[ge]);b.__webglDepthRenderbuffer&&s.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const be=P.textures;for(let ge=0,Pe=be.length;ge<Pe;ge++){const Ue=r.get(be[ge]);Ue.__webglTexture&&(s.deleteTexture(Ue.__webglTexture),d.memory.textures--),r.remove(be[ge])}r.remove(P)}let O=0;function Y(){O=0}function F(){return O}function K(P){O=P}function Me(){const P=O;return P>=l.maxTextures&&vt("WebGLTextures: Trying to use "+(P+1)+" texture units while this GPU supports only "+l.maxTextures),O+=1,P}function X(P){const b=[];return b.push(P.wrapS),b.push(P.wrapT),b.push(P.wrapR||0),b.push(P.magFilter),b.push(P.minFilter),b.push(P.anisotropy),b.push(P.internalFormat),b.push(P.format),b.push(P.type),b.push(P.generateMipmaps),b.push(P.mipmapsAutoUpdate),b.push(P.premultiplyAlpha),b.push(P.flipY),b.push(P.unpackAlignment),b.push(P.colorSpace),b.join()}function le(P,b){const re=r.get(P);if(P.isVideoTexture&&Wt(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&re.__version!==P.version){const be=P.image;if(be===null)vt("WebGLRenderer: Texture marked for update but no image data found.");else if(be.complete===!1)vt("WebGLRenderer: Texture marked for update but image is incomplete");else{ht(re,P,b);return}}else P.isExternalTexture&&(re.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,re.__webglTexture,s.TEXTURE0+b)}function ye(P,b){const re=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&re.__version!==P.version){ht(re,P,b);return}else P.isExternalTexture&&(re.__webglTexture=P.sourceTexture?P.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,re.__webglTexture,s.TEXTURE0+b)}function we(P,b){const re=r.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&re.__version!==P.version){ht(re,P,b);return}t.bindTexture(s.TEXTURE_3D,re.__webglTexture,s.TEXTURE0+b)}function Se(P,b){const re=r.get(P);if(P.version>0&&re.__version!==P.version){bt(re,P,b);return}t.bindTexture(s.TEXTURE_CUBE_MAP,re.__webglTexture,s.TEXTURE0+b)}const Re={[th]:s.REPEAT,[ur]:s.CLAMP_TO_EDGE,[nh]:s.MIRRORED_REPEAT},pt={[Nn]:s.NEAREST,[NS]:s.NEAREST_MIPMAP_NEAREST,[Ll]:s.NEAREST_MIPMAP_LINEAR,[Kn]:s.LINEAR,[xd]:s.LINEAR_MIPMAP_NEAREST,[Hr]:s.LINEAR_MIPMAP_LINEAR},Ye={[LS]:s.NEVER,[Dx]:s.ALWAYS,[DS]:s.LESS,[Px]:s.LEQUAL,[IS]:s.EQUAL,[Lx]:s.GEQUAL,[kS]:s.GREATER,[US]:s.NOTEQUAL};function _t(P,b){if(b.type===Gi&&e.has("OES_texture_float_linear")===!1&&(b.magFilter===Kn||b.magFilter===xd||b.magFilter===Ll||b.magFilter===Hr||b.minFilter===Kn||b.minFilter===xd||b.minFilter===Ll||b.minFilter===Hr)&&vt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(P,s.TEXTURE_WRAP_S,Re[b.wrapS]),s.texParameteri(P,s.TEXTURE_WRAP_T,Re[b.wrapT]),(P===s.TEXTURE_3D||P===s.TEXTURE_2D_ARRAY)&&s.texParameteri(P,s.TEXTURE_WRAP_R,Re[b.wrapR]),s.texParameteri(P,s.TEXTURE_MAG_FILTER,pt[b.magFilter]),s.texParameteri(P,s.TEXTURE_MIN_FILTER,pt[b.minFilter]),b.compareFunction&&(s.texParameteri(P,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(P,s.TEXTURE_COMPARE_FUNC,Ye[b.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===Nn||b.minFilter!==Ll&&b.minFilter!==Hr||b.type===Gi&&e.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||r.get(b).__currentAnisotropy){const re=e.get("EXT_texture_filter_anisotropic");s.texParameterf(P,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,l.getMaxAnisotropy())),r.get(b).__currentAnisotropy=b.anisotropy}}}function dt(P,b){let re=!1;P.__webglInit===void 0&&(P.__webglInit=!0,b.addEventListener("dispose",z),G(b));const be=b.source;let ge=S.get(be);ge===void 0&&(ge={},S.set(be,ge));const Pe=X(b);if(Pe!==P.__cacheKey){ge[Pe]===void 0&&(ge[Pe]={texture:s.createTexture(),usedTimes:0},d.memory.textures++,re=!0),ge[Pe].usedTimes++;const Ue=ge[P.__cacheKey];Ue!==void 0&&(ge[P.__cacheKey].usedTimes--,Ue.usedTimes===0&&q(b)),P.__cacheKey=Pe,P.__webglTexture=ge[Pe].texture}return re}function ct(P,b,re){return Math.floor(Math.floor(P/re)/b)}function je(P,b,re,be){const Pe=P.updateRanges;if(Pe.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,b.width,b.height,re,be,b.data);else{Pe.sort((W,_e)=>W.start-_e.start);let Ue=0;for(let W=1;W<Pe.length;W++){const _e=Pe[Ue],me=Pe[W],He=_e.start+_e.count,Fe=ct(me.start,b.width,4),ze=ct(_e.start,b.width,4);me.start<=He+1&&Fe===ze&&ct(me.start+me.count-1,b.width,4)===Fe?_e.count=Math.max(_e.count,me.start+me.count-_e.start):(++Ue,Pe[Ue]=me)}Pe.length=Ue+1;const pe=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),ke=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,b.width);for(let W=0,_e=Pe.length;W<_e;W++){const me=Pe[W],He=Math.floor(me.start/4),Fe=Math.ceil(me.count/4),ze=He%b.width,st=Math.floor(He/b.width),wt=Fe,De=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,st),t.texSubImage2D(s.TEXTURE_2D,0,ze,st,wt,De,re,be,b.data)}P.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,pe),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,ke)}}function ht(P,b,re){let be=s.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(be=s.TEXTURE_2D_ARRAY),b.isData3DTexture&&(be=s.TEXTURE_3D);const ge=dt(P,b),Pe=b.source;t.bindTexture(be,P.__webglTexture,s.TEXTURE0+re);const Ue=r.get(Pe);if(Pe.version!==Ue.__version||ge===!0){if(t.activeTexture(s.TEXTURE0+re),(typeof ImageBitmap<"u"&&b.image instanceof ImageBitmap)===!1){const De=It.getPrimaries(It.workingColorSpace),ut=b.colorSpace===Br?null:It.getPrimaries(b.colorSpace),yt=b.colorSpace===Br||De===ut?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt)}t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment);let xe=C(b.image,!1,l.maxTextureSize);xe=rt(b,xe);const ke=c.convert(b.format,b.colorSpace),W=c.convert(b.type);let _e=k(b.internalFormat,ke,W,b.normalized,b.colorSpace,b.isVideoTexture);_t(be,b);let me;const He=b.mipmaps,Fe=b.isVideoTexture!==!0,ze=Ue.__version===void 0||ge===!0,st=Pe.dataReady,wt=D(b,xe);if(b.isDepthTexture)_e=E(b.format===Gr,b.type),ze&&(Fe?t.texStorage2D(s.TEXTURE_2D,1,_e,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,ke,W,null));else if(b.isDataTexture)if(He.length>0){Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,wt,_e,He[0].width,He[0].height);for(let De=0,ut=He.length;De<ut;De++)me=He[De],Fe?st&&t.texSubImage2D(s.TEXTURE_2D,De,0,0,me.width,me.height,ke,W,me.data):t.texImage2D(s.TEXTURE_2D,De,_e,me.width,me.height,0,ke,W,me.data);b.generateMipmaps=!1}else Fe?(ze&&t.texStorage2D(s.TEXTURE_2D,wt,_e,xe.width,xe.height),st&&je(b,xe,ke,W)):t.texImage2D(s.TEXTURE_2D,0,_e,xe.width,xe.height,0,ke,W,xe.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Fe&&ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,_e,He[0].width,He[0].height,xe.depth);for(let De=0,ut=He.length;De<ut;De++)if(me=He[De],b.format!==Vi)if(ke!==null)if(Fe){if(st)if(b.layerUpdates.size>0){const yt=Ag(me.width,me.height,b.format,b.type);for(const Xe of b.layerUpdates){const Dt=me.data.subarray(Xe*yt/me.data.BYTES_PER_ELEMENT,(Xe+1)*yt/me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,Xe,me.width,me.height,1,ke,Dt)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,0,me.width,me.height,xe.depth,ke,me.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,De,_e,me.width,me.height,xe.depth,0,me.data,0,0);else vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Fe?st&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,De,0,0,0,me.width,me.height,xe.depth,ke,W,me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,De,_e,me.width,me.height,xe.depth,0,ke,W,me.data);b.layerUpdates.size>0&&b.clearLayerUpdates()}else{Fe&&ze&&t.texStorage2D(s.TEXTURE_2D,wt,_e,He[0].width,He[0].height);for(let De=0,ut=He.length;De<ut;De++)me=He[De],b.format!==Vi?ke!==null?Fe?st&&t.compressedTexSubImage2D(s.TEXTURE_2D,De,0,0,me.width,me.height,ke,me.data):t.compressedTexImage2D(s.TEXTURE_2D,De,_e,me.width,me.height,0,me.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Fe?st&&t.texSubImage2D(s.TEXTURE_2D,De,0,0,me.width,me.height,ke,W,me.data):t.texImage2D(s.TEXTURE_2D,De,_e,me.width,me.height,0,ke,W,me.data)}else if(b.isDataArrayTexture)if(Fe){if(ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,wt,_e,xe.width,xe.height,xe.depth),st)if(b.layerUpdates.size>0){const De=Ag(xe.width,xe.height,b.format,b.type);for(const ut of b.layerUpdates){const yt=xe.data.subarray(ut*De/xe.data.BYTES_PER_ELEMENT,(ut+1)*De/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ut,xe.width,xe.height,1,ke,W,yt)}b.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,ke,W,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,_e,xe.width,xe.height,xe.depth,0,ke,W,xe.data);else if(b.isData3DTexture)Fe?(ze&&t.texStorage3D(s.TEXTURE_3D,wt,_e,xe.width,xe.height,xe.depth),st&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,ke,W,xe.data)):t.texImage3D(s.TEXTURE_3D,0,_e,xe.width,xe.height,xe.depth,0,ke,W,xe.data);else if(b.isFramebufferTexture){if(ze)if(Fe)t.texStorage2D(s.TEXTURE_2D,wt,_e,xe.width,xe.height);else{let De=xe.width,ut=xe.height;for(let yt=0;yt<wt;yt++)t.texImage2D(s.TEXTURE_2D,yt,_e,De,ut,0,ke,W,null),De>>=1,ut>>=1}}else if(b.isHTMLTexture){if("texElementImage2D"in s){const De=s.canvas;if(De.hasAttribute("layoutsubtree")||De.setAttribute("layoutsubtree","true"),xe.parentNode!==De){De.appendChild(xe),M.add(b),De.onpaint=ut=>{const yt=ut.changedElements;for(const Xe of M)yt.includes(Xe.image)&&(Xe.needsUpdate=!0)},De.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const yt=s.RGBA,Xe=s.RGBA,Dt=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,yt,Xe,Dt,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(He.length>0){if(Fe&&ze){const De=ve(He[0]);t.texStorage2D(s.TEXTURE_2D,wt,_e,De.width,De.height)}for(let De=0,ut=He.length;De<ut;De++)me=He[De],Fe?st&&t.texSubImage2D(s.TEXTURE_2D,De,0,0,ke,W,me):t.texImage2D(s.TEXTURE_2D,De,_e,ke,W,me);b.generateMipmaps=!1}else if(Fe){if(ze){const De=ve(xe);t.texStorage2D(s.TEXTURE_2D,wt,_e,De.width,De.height)}st&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ke,W,xe)}else t.texImage2D(s.TEXTURE_2D,0,_e,ke,W,xe);I(b)&&b.mipmapsAutoUpdate===!0&&N(be),Ue.__version=Pe.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function bt(P,b,re){if(b.image.length!==6)return;const be=dt(P,b),ge=b.source;t.bindTexture(s.TEXTURE_CUBE_MAP,P.__webglTexture,s.TEXTURE0+re);const Pe=r.get(ge);if(ge.version!==Pe.__version||be===!0){t.activeTexture(s.TEXTURE0+re);const Ue=It.getPrimaries(It.workingColorSpace),pe=b.colorSpace===Br?null:It.getPrimaries(b.colorSpace),xe=b.colorSpace===Br||Ue===pe?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,b.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,b.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const ke=b.isCompressedTexture||b.image[0].isCompressedTexture,W=b.image[0]&&b.image[0].isDataTexture,_e=[];for(let Xe=0;Xe<6;Xe++)!ke&&!W?_e[Xe]=C(b.image[Xe],!0,l.maxCubemapSize):_e[Xe]=W?b.image[Xe].image:b.image[Xe],_e[Xe]=rt(b,_e[Xe]);const me=_e[0],He=c.convert(b.format,b.colorSpace),Fe=c.convert(b.type);let ze=k(b.internalFormat,He,Fe,b.normalized,b.colorSpace);const st=b.isVideoTexture!==!0,wt=Pe.__version===void 0||be===!0,De=ge.dataReady;let ut=D(b,me);_t(s.TEXTURE_CUBE_MAP,b);let yt;if(b.isDepthTexture){if(ze=E(b.format===Gr,b.type),wt)if(st)t.texStorage2D(s.TEXTURE_CUBE_MAP,1,ze,me.width,me.height);else for(let Xe=0;Xe<6;Xe++)t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,ze,me.width,me.height,0,He,Fe,null)}else if(ke){st&&wt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ze,me.width,me.height);for(let Xe=0;Xe<6;Xe++){yt=_e[Xe].mipmaps;for(let Dt=0;Dt<yt.length;Dt++){const en=yt[Dt];b.format!==Vi?He!==null?st?De&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt,0,0,en.width,en.height,He,en.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt,ze,en.width,en.height,0,en.data):vt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt,0,0,en.width,en.height,He,Fe,en.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt,ze,en.width,en.height,0,He,Fe,en.data)}}}else{if(yt=b.mipmaps,st&&wt){yt.length>0&&ut++;const Xe=ve(_e[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,ut,ze,Xe.width,Xe.height)}for(let Xe=0;Xe<6;Xe++)if(W){st?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,_e[Xe].width,_e[Xe].height,He,Fe,_e[Xe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,ze,_e[Xe].width,_e[Xe].height,0,He,Fe,_e[Xe].data);for(let Dt=0;Dt<yt.length;Dt++){const Qn=yt[Dt].image[Xe].image;st?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt+1,0,0,Qn.width,Qn.height,He,Fe,Qn.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt+1,ze,Qn.width,Qn.height,0,He,Fe,Qn.data)}}else{st?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,0,0,He,Fe,_e[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,0,ze,He,Fe,_e[Xe]);for(let Dt=0;Dt<yt.length;Dt++){const en=yt[Dt];st?De&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt+1,0,0,He,Fe,en.image[Xe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Xe,Dt+1,ze,He,Fe,en.image[Xe])}}}I(b)&&b.mipmapsAutoUpdate===!0&&N(s.TEXTURE_CUBE_MAP),Pe.__version=ge.version,b.onUpdate&&b.onUpdate(b)}P.__version=b.version}function he(P,b,re,be,ge,Pe){const Ue=c.convert(re.format,re.colorSpace),pe=c.convert(re.type),xe=k(re.internalFormat,Ue,pe,re.normalized,re.colorSpace),ke=r.get(b),W=r.get(re);if(W.__renderTarget=b,!ke.__hasExternalTextures){const _e=Math.max(1,b.width>>Pe),me=Math.max(1,b.height>>Pe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,Pe,xe,_e,me,b.depth,0,Ue,pe,null):t.texImage2D(ge,Pe,xe,_e,me,0,Ue,pe,null)}t.bindFramebuffer(s.FRAMEBUFFER,P),Ae(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,be,ge,W.__webglTexture,0,ft(b)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,be,ge,W.__webglTexture,Pe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Te(P,b,re){if(s.bindRenderbuffer(s.RENDERBUFFER,P),b.depthBuffer){const be=b.depthTexture,ge=be&&be.isDepthTexture?be.type:null,Pe=E(b.stencilBuffer,ge),Ue=b.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ae(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),Pe,b.width,b.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),Pe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,Pe,b.width,b.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ue,s.RENDERBUFFER,P)}else{const be=b.textures;for(let ge=0;ge<be.length;ge++){const Pe=be[ge],Ue=c.convert(Pe.format,Pe.colorSpace),pe=c.convert(Pe.type),xe=k(Pe.internalFormat,Ue,pe,Pe.normalized,Pe.colorSpace);Ae(b)?h.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ft(b),xe,b.width,b.height):re?s.renderbufferStorageMultisample(s.RENDERBUFFER,ft(b),xe,b.width,b.height):s.renderbufferStorage(s.RENDERBUFFER,xe,b.width,b.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(P,b,re){const be=b.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,P),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=r.get(b.depthTexture);ge.__renderTarget=b;const Pe=be?b.depthTexture.image[0]:b.depthTexture.image;(!ge.__webglTexture||Pe.width!==b.width||Pe.height!==b.height)&&(Pe.width=b.width,Pe.height=b.height,b.depthTexture.needsUpdate=!0),be?Se(b.depthTexture,0):le(b.depthTexture,0);const Ue=ge.__webglTexture,pe=ft(b),xe=be?s.TEXTURE_CUBE_MAP_POSITIVE_X+re:s.TEXTURE_2D,ke=b.depthTexture.format===Gr?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(b.depthTexture.format===Xr)Ae(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,xe,Ue,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,xe,Ue,0);else if(b.depthTexture.format===Gr)Ae(b)?h.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,ke,xe,Ue,0,pe):s.framebufferTexture2D(s.FRAMEBUFFER,ke,xe,Ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Mt(P){const b=r.get(P),re=P.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==P.depthTexture){const be=P.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),be){const ge=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,be.removeEventListener("dispose",ge)};be.addEventListener("dispose",ge),b.__depthDisposeCallback=ge}b.__boundDepthTexture=be}if(P.depthTexture&&!b.__autoAllocateDepthBuffer)if(re)for(let be=0;be<6;be++)Ee(b.__webglFramebuffer[be],P,be);else P.texture.mipmaps.length>0?Ee(b.__webglFramebuffer[0],P,0):Ee(b.__webglFramebuffer,P,0);else if(re){b.__webglDepthbuffer=[];for(let be=0;be<6;be++)if(t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[be]),b.__webglDepthbuffer[be]===void 0)b.__webglDepthbuffer[be]=s.createRenderbuffer(),Te(b.__webglDepthbuffer[be],P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer[be];s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Pe)}}else if(P.texture.mipmaps.length>0?t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=s.createRenderbuffer(),Te(b.__webglDepthbuffer,P,!1);else{const ge=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Pe=b.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Pe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,Pe)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function At(P,b,re){const be=r.get(P);b!==void 0&&he(be.__webglFramebuffer,P,P.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),re!==void 0&&Mt(P)}function Le(P){const b=P.texture,re=r.get(P),be=r.get(b);P.addEventListener("dispose",ie),G(P);const ge=P.textures,Pe=P.isWebGLCubeRenderTarget===!0,Ue=ge.length>1;if(Ue||(be.__webglTexture===void 0&&(be.__webglTexture=s.createTexture()),be.__version=b.version,d.memory.textures++),Pe){re.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(b.mipmaps.length>0){re.__webglFramebuffer[pe]=[];for(let xe=0;xe<b.mipmaps.length;xe++)re.__webglFramebuffer[pe][xe]=s.createFramebuffer()}else re.__webglFramebuffer[pe]=s.createFramebuffer()}else{if(b.mipmaps.length>0){re.__webglFramebuffer=[];for(let pe=0;pe<b.mipmaps.length;pe++)re.__webglFramebuffer[pe]=s.createFramebuffer()}else re.__webglFramebuffer=s.createFramebuffer();if(Ue)for(let pe=0,xe=ge.length;pe<xe;pe++){const ke=r.get(ge[pe]);ke.__webglTexture===void 0&&(ke.__webglTexture=s.createTexture(),d.memory.textures++)}if(P.samples>0&&Ae(P)===!1){re.__webglMultisampledFramebuffer=s.createFramebuffer(),re.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,re.__webglMultisampledFramebuffer);for(let pe=0;pe<ge.length;pe++){const xe=ge[pe];re.__webglColorRenderbuffer[pe]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,re.__webglColorRenderbuffer[pe]);const ke=c.convert(xe.format,xe.colorSpace),W=c.convert(xe.type),_e=k(xe.internalFormat,ke,W,xe.normalized,xe.colorSpace,P.isXRRenderTarget===!0),me=ft(P);s.renderbufferStorageMultisample(s.RENDERBUFFER,me,_e,P.width,P.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+pe,s.RENDERBUFFER,re.__webglColorRenderbuffer[pe])}s.bindRenderbuffer(s.RENDERBUFFER,null),P.depthBuffer&&(re.__webglDepthRenderbuffer=s.createRenderbuffer(),Te(re.__webglDepthRenderbuffer,P,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Pe){t.bindTexture(s.TEXTURE_CUBE_MAP,be.__webglTexture),_t(s.TEXTURE_CUBE_MAP,b);for(let pe=0;pe<6;pe++)if(b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)he(re.__webglFramebuffer[pe][xe],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,xe);else he(re.__webglFramebuffer[pe],P,b,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);I(b)?N(s.TEXTURE_CUBE_MAP):b.mipmaps.length>0&&s.texParameteri(s.TEXTURE_CUBE_MAP,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}else if(Ue){for(let pe=0,xe=ge.length;pe<xe;pe++){const ke=ge[pe],W=r.get(ke);let _e=s.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(_e=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(_e,W.__webglTexture),_t(_e,ke),he(re.__webglFramebuffer,P,ke,s.COLOR_ATTACHMENT0+pe,_e,0),I(ke)&&N(_e)}t.unbindTexture()}else{let pe=s.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(pe=P.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(pe,be.__webglTexture),_t(pe,b),b.mipmaps.length>0)for(let xe=0;xe<b.mipmaps.length;xe++)he(re.__webglFramebuffer[xe],P,b,s.COLOR_ATTACHMENT0,pe,xe);else he(re.__webglFramebuffer,P,b,s.COLOR_ATTACHMENT0,pe,0);I(b)?N(pe):b.mipmaps.length>0&&s.texParameteri(pe,s.TEXTURE_MAX_LEVEL,b.mipmaps.length-1),t.unbindTexture()}P.depthBuffer&&Mt(P)}function U(P){const b=P.textures;for(let re=0,be=b.length;re<be;re++){const ge=b[re];if(I(ge)&&ge.mipmapsAutoUpdate===!0){const Pe=L(P),Ue=r.get(ge).__webglTexture;t.bindTexture(Pe,Ue),N(Pe),t.unbindTexture()}}}const Be=[];function ot(P){if(P.samples>0){if(Ae(P)===!1){const b=P.textures,re=P.width,be=P.height;let ge=s.COLOR_BUFFER_BIT;const Pe=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ue=r.get(P),pe=b.length>1;if(pe)for(let ke=0;ke<b.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),P.texture.mipmaps.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglFramebuffer);for(let ke=0;ke<b.length;ke++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),pe){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const W=r.get(b[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,W,0)}s.blitFramebuffer(0,0,re,be,0,0,re,be,ge,s.NEAREST),p===!0&&(Be.length=0,Be.push(s.COLOR_ATTACHMENT0+ke),P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&Be.push(Pe),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,Be))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),pe)for(let ke=0;ke<b.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,Ue.__webglColorRenderbuffer[ke]);const W=r.get(b[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ue.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,W,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ue.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.storeMultisampledDepthBuffer===!1&&p){const b=P.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[b])}}}function ft(P){return Math.min(l.maxSamples,P.samples)}function Ae(P){const b=r.get(P);return P.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Wt(P){const b=d.render.frame;v.get(P)!==b&&(v.set(P,b),P.update())}function rt(P,b){const re=P.colorSpace,be=P.format,ge=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||re!==vc&&re!==Br&&(It.getTransfer(re)===Vt?(be!==Vi||ge!==si)&&vt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Bt("WebGLTextures: Unsupported texture color space:",re)),b}function ve(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(m.width=P.naturalWidth||P.width,m.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(m.width=P.displayWidth,m.height=P.displayHeight):(m.width=P.width,m.height=P.height),m}this.allocateTextureUnit=Me,this.resetTextureUnits=Y,this.getTextureUnits=F,this.setTextureUnits=K,this.setTexture2D=le,this.setTexture2DArray=ye,this.setTexture3D=we,this.setTextureCube=Se,this.rebindTextures=At,this.setupRenderTarget=Le,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Mt,this.setupFrameBufferTexture=he,this.useMultisampledRTT=Ae,this.dispose=$}function ET(s,e){function t(r,l=Br){let c;const d=It.getTransfer(l);if(r===si)return s.UNSIGNED_BYTE;if(r===Yh)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Kh)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Tx)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===Cx)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===wx)return s.BYTE;if(r===bx)return s.SHORT;if(r===go)return s.UNSIGNED_SHORT;if(r===qh)return s.INT;if(r===qi)return s.UNSIGNED_INT;if(r===Gi)return s.FLOAT;if(r===Yi)return s.HALF_FLOAT;if(r===Nx)return s.ALPHA;if(r===Ax)return s.RGB;if(r===Vi)return s.RGBA;if(r===Xr)return s.DEPTH_COMPONENT;if(r===Gr)return s.DEPTH_STENCIL;if(r===Rx)return s.RED;if(r===Zh)return s.RED_INTEGER;if(r===gs)return s.RG;if(r===Qh)return s.RG_INTEGER;if(r===Jh)return s.RGBA_INTEGER;if(r===oc||r===lc||r===cc||r===uc)if(d===Vt)if(c=e.get("WEBGL_compressed_texture_s3tc_srgb"),c!==null){if(r===oc)return c.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===cc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===uc)return c.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(c=e.get("WEBGL_compressed_texture_s3tc"),c!==null){if(r===oc)return c.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===lc)return c.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===cc)return c.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===uc)return c.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===ih||r===rh||r===sh||r===ah)if(c=e.get("WEBGL_compressed_texture_pvrtc"),c!==null){if(r===ih)return c.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===rh)return c.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===sh)return c.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===ah)return c.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===oh||r===lh||r===ch||r===uh||r===dh||r===gc||r===hh)if(c=e.get("WEBGL_compressed_texture_etc"),c!==null){if(r===oh||r===lh)return d===Vt?c.COMPRESSED_SRGB8_ETC2:c.COMPRESSED_RGB8_ETC2;if(r===ch)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:c.COMPRESSED_RGBA8_ETC2_EAC;if(r===uh)return c.COMPRESSED_R11_EAC;if(r===dh)return c.COMPRESSED_SIGNED_R11_EAC;if(r===gc)return c.COMPRESSED_RG11_EAC;if(r===hh)return c.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===fh||r===ph||r===mh||r===gh||r===xh||r===vh||r===_h||r===yh||r===Sh||r===Mh||r===Eh||r===wh||r===bh||r===Th)if(c=e.get("WEBGL_compressed_texture_astc"),c!==null){if(r===fh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:c.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===ph)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:c.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:c.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===gh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:c.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===xh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:c.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===vh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:c.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===_h)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:c.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===yh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:c.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Sh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:c.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Mh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:c.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Eh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:c.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===wh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:c.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===bh)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:c.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Th)return d===Vt?c.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:c.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Ch||r===Nh||r===Ah)if(c=e.get("EXT_texture_compression_bptc"),c!==null){if(r===Ch)return d===Vt?c.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:c.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Nh)return c.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Ah)return c.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Rh||r===Ph||r===xc||r===Lh)if(c=e.get("EXT_texture_compression_rgtc"),c!==null){if(r===Rh)return c.COMPRESSED_RED_RGTC1_EXT;if(r===Ph)return c.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===xc)return c.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Lh)return c.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===da?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const wT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,bT=`
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

}`;class TT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Vx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new xs({vertexShader:wT,fragmentShader:bT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ki(new wo(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class CT extends vs{constructor(e,t){super();const r=this;let l=null,c=1,d=null,h="local-floor",p=1,m=null,v=null,M=null,_=null,S=null,w=null;const T=typeof XRWebGLBinding<"u",x=new TT,y={},C=t.getContextAttributes();let I=null,N=null;const L=[],k=[],E=new Ut;let D=null,G=null;const H=new qn;H.viewport=new rn;const z=new qn;z.viewport=new rn;const ie=[H,z],J=new U1;let j=null,$=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let le=L[X];return le===void 0&&(le=new Td,L[X]=le),le.getTargetRaySpace()},this.getControllerGrip=function(X){let le=L[X];return le===void 0&&(le=new Td,L[X]=le),le.getGripSpace()},this.getHand=function(X){let le=L[X];return le===void 0&&(le=new Td,L[X]=le),le.getHandSpace()};function te(X){const le=k.indexOf(X.inputSource);if(le===-1)return;const ye=L[le];ye!==void 0&&(ye.update(X.inputSource,X.frame,m||d),ye.dispatchEvent({type:X.type,data:X.inputSource}))}function q(){l.removeEventListener("select",te),l.removeEventListener("selectstart",te),l.removeEventListener("selectend",te),l.removeEventListener("squeeze",te),l.removeEventListener("squeezestart",te),l.removeEventListener("squeezeend",te),l.removeEventListener("end",q),l.removeEventListener("inputsourceschange",ee);for(let X=0;X<L.length;X++){const le=k[X];le!==null&&(k[X]=null,L[X].disconnect(le))}j=null,$=null,x.reset();for(const X in y)delete y[X];if(e.setRenderTarget(I),S=null,_=null,M=null,l=null,N=null,Me.stop(),r.isPresenting=!1,e.setPixelRatio(D),e.setSize(E.width,E.height,!1),G!==null){const X=G.camera;X.fov=G.fov,X.zoom=G.zoom,X.updateProjectionMatrix(),G=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){c=X,r.isPresenting===!0&&vt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){h=X,r.isPresenting===!0&&vt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||d},this.setReferenceSpace=function(X){m=X},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return M===null&&T&&(M=new XRWebGLBinding(l,t)),M},this.getFrame=function(){return w},this.getSession=function(){return l},this.setSession=async function(X){if(l=X,l!==null){if(I=e.getRenderTarget(),l.addEventListener("select",te),l.addEventListener("selectstart",te),l.addEventListener("selectend",te),l.addEventListener("squeeze",te),l.addEventListener("squeezestart",te),l.addEventListener("squeezeend",te),l.addEventListener("end",q),l.addEventListener("inputsourceschange",ee),C.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(E),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,we=null,Se=null;C.depth&&(Se=C.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=C.stencil?Gr:Xr,we=C.stencil?da:qi);const Re={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:c};M=this.getBinding(),_=M.createProjectionLayer(Re),l.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),N=new Xi(_.textureWidth,_.textureHeight,{format:Vi,type:si,depthTexture:new ha(_.textureWidth,_.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:C.stencil,colorSpace:e.outputColorSpace,samples:C.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:C.antialias,alpha:!0,depth:C.depth,stencil:C.stencil,framebufferScaleFactor:c};S=new XRWebGLLayer(l,t,ye),l.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),N=new Xi(S.framebufferWidth,S.framebufferHeight,{format:Vi,type:si,colorSpace:e.outputColorSpace,stencilBuffer:C.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1,storeMultisampledDepthBuffer:S.ignoreDepthValues===!1,storeMultisampledStencilBuffer:S.ignoreDepthValues===!1})}N.isXRRenderTarget=!0,this.setFoveation(p),m=null,d=await l.requestReferenceSpace(h),Me.setContext(l),Me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(l!==null)return l.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function ee(X){for(let le=0;le<X.removed.length;le++){const ye=X.removed[le],we=k.indexOf(ye);we>=0&&(k[we]=null,L[we].disconnect(ye))}for(let le=0;le<X.added.length;le++){const ye=X.added[le];let we=k.indexOf(ye);if(we===-1){for(let Re=0;Re<L.length;Re++)if(Re>=k.length){k.push(ye),we=Re;break}else if(k[Re]===null){k[Re]=ye,we=Re;break}if(we===-1)break}const Se=L[we];Se&&Se.connect(ye)}}function O(X,le){le===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(le.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(l===null)return;let le=X.near,ye=X.far;x.texture!==null&&(x.depthNear>0&&(le=x.depthNear),x.depthFar>0&&(ye=x.depthFar)),J.near=z.near=H.near=le,J.far=z.far=H.far=ye,(j!==J.near||$!==J.far)&&(l.updateRenderState({depthNear:J.near,depthFar:J.far}),j=J.near,$=J.far),J.layers.mask=X.layers.mask|6,H.layers.mask=J.layers.mask&-5,z.layers.mask=J.layers.mask&-3;const we=X.parent,Se=J.cameras;O(J,we);for(let Re=0;Re<Se.length;Re++)O(Se[Re],we);J.projectionMatrix.copy(H.projectionMatrix),J.projectionMatrixInverse.copy(H.projectionMatrixInverse),G===null&&X.isPerspectiveCamera&&(G={camera:X,fov:X.fov,zoom:X.zoom}),Y(X,J,we)};function Y(X,le,ye){ye===null?X.matrix.copy(le.matrixWorld):(X.matrix.copy(ye.matrixWorld),X.matrix.invert(),X.matrix.multiply(le.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(le.projectionMatrix),X.projectionMatrixInverse.copy(le.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=yc*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return J},this.getFoveation=function(){if(!(_===null&&S===null))return p},this.setFoveation=function(X){p=X,_!==null&&(_.fixedFoveation=X),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=X)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(J)},this.getCameraTexture=function(X){return y[X]};let F=null;function K(X,le){if(v=le.getViewerPose(m||d),w=le,v!==null){const ye=v.views;S!==null&&(e.setRenderTargetFramebuffer(N,S.framebuffer),e.setRenderTarget(N));let we=!1;ye.length!==J.cameras.length&&(J.cameras.length=0,we=!0);for(let Ye=0;Ye<ye.length;Ye++){const _t=ye[Ye];let dt=null;if(S!==null)dt=S.getViewport(_t);else{const je=M.getViewSubImage(_,_t);dt=je.viewport,Ye===0&&(e.setRenderTargetTextures(N,je.colorTexture,je.depthStencilTexture),e.setRenderTarget(N))}let ct=ie[Ye];ct===void 0&&(ct=new qn,ct.layers.enable(Ye),ct.viewport=new rn,ie[Ye]=ct),ct.matrix.fromArray(_t.transform.matrix),ct.matrix.decompose(ct.position,ct.quaternion,ct.scale),ct.projectionMatrix.fromArray(_t.projectionMatrix),ct.projectionMatrixInverse.copy(ct.projectionMatrix).invert(),ct.viewport.set(dt.x,dt.y,dt.width,dt.height),Ye===0&&(J.matrix.copy(ct.matrix),J.matrix.decompose(J.position,J.quaternion,J.scale)),we===!0&&J.cameras.push(ct)}const Se=l.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&l.depthUsage=="gpu-optimized"&&T){M=r.getBinding();const Ye=M.getDepthInformation(ye[0]);Ye&&Ye.isValid&&Ye.texture&&x.init(Ye,l.renderState)}if(Se&&Se.includes("camera-access")&&T){e.state.unbindTexture(),M=r.getBinding();for(let Ye=0;Ye<ye.length;Ye++){const _t=ye[Ye].camera;if(_t){let dt=y[_t];dt||(dt=new Vx,y[_t]=dt);const ct=M.getCameraImage(_t);dt.sourceTexture=ct}}}}for(let ye=0;ye<L.length;ye++){const we=k[ye],Se=L[ye];we!==null&&Se!==void 0&&Se.update(we,le,m||d)}F&&F(X,le),le.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:le}),w=null}const Me=new qx;Me.setAnimationLoop(K),this.setAnimationLoop=function(X){F=X},this.dispose=function(){}}}const NT=new qt,rv=new Et;rv.set(-1,0,0,0,1,0,0,0,1);function AT(s,e){function t(x,y){x.matrixAutoUpdate===!0&&x.updateMatrix(),y.value.copy(x.matrix)}function r(x,y){y.color.getRGB(x.fogColor.value,Wx(s)),y.isFog?(x.fogNear.value=y.near,x.fogFar.value=y.far):y.isFogExp2&&(x.fogDensity.value=y.density)}function l(x,y,C,I,N){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?c(x,y):y.isMeshLambertMaterial?(c(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(c(x,y),M(x,y)):y.isMeshPhongMaterial?(c(x,y),v(x,y),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(c(x,y),_(x,y),y.isMeshPhysicalMaterial&&S(x,y,N)):y.isMeshMatcapMaterial?(c(x,y),w(x,y)):y.isMeshDepthMaterial?c(x,y):y.isMeshDistanceMaterial?(c(x,y),T(x,y)):y.isMeshNormalMaterial?c(x,y):y.isLineBasicMaterial?(d(x,y),y.isLineDashedMaterial&&h(x,y)):y.isPointsMaterial?p(x,y,C,I):y.isSpriteMaterial?m(x,y):y.isShadowMaterial?(x.color.value.copy(y.color),x.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function c(x,y){x.opacity.value=y.opacity,y.color&&x.diffuse.value.copy(y.color),y.emissive&&x.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.bumpMap&&(x.bumpMap.value=y.bumpMap,t(y.bumpMap,x.bumpMapTransform),x.bumpScale.value=y.bumpScale,y.side===Zn&&(x.bumpScale.value*=-1)),y.normalMap&&(x.normalMap.value=y.normalMap,t(y.normalMap,x.normalMapTransform),x.normalScale.value.copy(y.normalScale),y.side===Zn&&x.normalScale.value.negate()),y.displacementMap&&(x.displacementMap.value=y.displacementMap,t(y.displacementMap,x.displacementMapTransform),x.displacementScale.value=y.displacementScale,x.displacementBias.value=y.displacementBias),y.emissiveMap&&(x.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,x.emissiveMapTransform)),y.specularMap&&(x.specularMap.value=y.specularMap,t(y.specularMap,x.specularMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest);const C=e.get(y),I=C.envMap,N=C.envMapRotation;I&&(x.envMap.value=I,x.envMapRotation.value.setFromMatrix4(NT.makeRotationFromEuler(N)).transpose(),I.isCubeTexture&&I.isRenderTargetTexture===!1&&x.envMapRotation.value.premultiply(rv),x.reflectivity.value=y.reflectivity,x.ior.value=y.ior,x.refractionRatio.value=y.refractionRatio),y.lightMap&&(x.lightMap.value=y.lightMap,x.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,x.lightMapTransform)),y.aoMap&&(x.aoMap.value=y.aoMap,x.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,x.aoMapTransform))}function d(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform))}function h(x,y){x.dashSize.value=y.dashSize,x.totalSize.value=y.dashSize+y.gapSize,x.scale.value=y.scale}function p(x,y,C,I){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.size.value=y.size*C,x.scale.value=I*.5,y.map&&(x.map.value=y.map,t(y.map,x.uvTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function m(x,y){x.diffuse.value.copy(y.color),x.opacity.value=y.opacity,x.rotation.value=y.rotation,y.map&&(x.map.value=y.map,t(y.map,x.mapTransform)),y.alphaMap&&(x.alphaMap.value=y.alphaMap,t(y.alphaMap,x.alphaMapTransform)),y.alphaTest>0&&(x.alphaTest.value=y.alphaTest)}function v(x,y){x.specular.value.copy(y.specular),x.shininess.value=Math.max(y.shininess,1e-4)}function M(x,y){y.gradientMap&&(x.gradientMap.value=y.gradientMap)}function _(x,y){x.metalness.value=y.metalness,y.metalnessMap&&(x.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,x.metalnessMapTransform)),x.roughness.value=y.roughness,y.roughnessMap&&(x.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,x.roughnessMapTransform)),y.envMap&&(x.envMapIntensity.value=y.envMapIntensity)}function S(x,y,C){x.ior.value=y.ior,y.diffuseRoughness>0&&(x.diffuseRoughness.value=y.diffuseRoughness,y.diffuseRoughnessMap&&(x.diffuseRoughnessMap.value=y.diffuseRoughnessMap,t(y.diffuseRoughnessMap,x.diffuseRoughnessMapTransform))),y.sheen>0&&(x.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),x.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(x.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,x.sheenColorMapTransform)),y.sheenRoughnessMap&&(x.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,x.sheenRoughnessMapTransform))),y.clearcoat>0&&(x.clearcoat.value=y.clearcoat,x.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(x.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,x.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(x.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,x.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(x.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,x.clearcoatNormalMapTransform),x.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===Zn&&x.clearcoatNormalScale.value.negate())),y.dispersion>0&&(x.dispersion.value=y.dispersion),y.retroreflectivity>0&&(x.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(x.iridescence.value=y.iridescence,x.iridescenceIOR.value=y.iridescenceIOR,x.iridescenceThicknessMinimum.value=y.iridescenceThicknessMinimum,x.iridescenceThicknessMaximum.value=y.iridescenceThicknessMaximum,y.iridescenceMap&&(x.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,x.iridescenceMapTransform)),y.iridescenceThicknessMap&&(x.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,x.iridescenceThicknessMapTransform))),y.transmission>0&&(x.transmission.value=y.transmission,x.transmissionSamplerMap.value=C.texture,x.transmissionSamplerSize.value.set(C.width,C.height),y.transmissionMap&&(x.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,x.transmissionMapTransform)),x.thickness.value=y.thickness,y.thicknessMap&&(x.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,x.thicknessMapTransform)),x.attenuationDistance.value=y.attenuationDistance,x.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(x.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(x.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,x.anisotropyMapTransform))),x.specularIntensity.value=y.specularIntensity,x.specularColor.value.copy(y.specularColor),y.specularColorMap&&(x.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,x.specularColorMapTransform)),y.specularIntensityMap&&(x.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,x.specularIntensityMapTransform))}function w(x,y){y.matcap&&(x.matcap.value=y.matcap)}function T(x,y){const C=e.get(y).light;x.referencePosition.value.setFromMatrixPosition(C.matrixWorld),x.nearDistance.value=C.shadow.camera.near,x.farDistance.value=C.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:l}}function RT(s,e,t,r){let l={},c={};function d(C,I){const N=I.program;r.uniformBlockBinding(C,N,l[C.id])}function h(C,I){let N=l[C.id];N===void 0&&(w(C),N=p(C),l[C.id]=N,C.addEventListener("dispose",x));const L=I.program;r.updateUBOMapping(C,L);const k=e.render.frame;c[C.id]!==k&&(m(C),c[C.id]=k)}function p(C){const I=s.createBuffer(),N=C.__size,L=C.usage;return s.bindBuffer(s.UNIFORM_BUFFER,I),s.bufferData(s.UNIFORM_BUFFER,N,L),s.bindBuffer(s.UNIFORM_BUFFER,null),I}function m(C){const I=l[C.id],N=C.uniforms,L=C.__cache;s.bindBuffer(s.UNIFORM_BUFFER,I);for(let k=0,E=N.length;k<E;k++){const D=N[k];if(Array.isArray(D))for(let G=0,H=D.length;G<H;G++)v(D[G],k,G,L);else v(D,k,0,L)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function v(C,I,N,L){if(_(C,I,N,L)===!0){const k=C.__offset,E=C.value;if(Array.isArray(E)){let D=0;for(let G=0;G<E.length;G++){const H=E[G],z=T(H,!0);M(H,C.__data,D),D+=z.storage/Float32Array.BYTES_PER_ELEMENT}}else M(E,C.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,k,C.__data)}}function M(C,I,N){typeof C=="number"||typeof C=="boolean"?I[N]=C:C.isMatrix3?(I[N]=C.elements[0],I[N+1]=C.elements[1],I[N+2]=C.elements[2],I[N+3]=0,I[N+4]=C.elements[3],I[N+5]=C.elements[4],I[N+6]=C.elements[5],I[N+7]=0,I[N+8]=C.elements[6],I[N+9]=C.elements[7],I[N+10]=C.elements[8],I[N+11]=0):ArrayBuffer.isView(C)?I.set(C.subarray(0,I.length-N),N):C.toArray(I,N)}function _(C,I,N,L){const k=C.value,E=I+"_"+N;if(Array.isArray(k)){L[E]===void 0&&(L[E]=[]);const D=L[E];let G=!1;for(let H=0;H<k.length;H++)S(k[H],D,H)===!0&&(G=!0);return G}return S(k,L,E)}function S(C,I,N){if(I[N]===void 0)return typeof C=="number"||typeof C=="boolean"?I[N]=C:ArrayBuffer.isView(C)?I[N]=C.slice():I[N]=C.clone(),!0;{const L=I[N];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return I[N]=C,!0}else{if(ArrayBuffer.isView(C))return!0;if(L.equals(C)===!1)return L.copy(C),!0}}return!1}function w(C){const I=C.uniforms;let N=0;const L=16;for(let E=0,D=I.length;E<D;E++){const G=Array.isArray(I[E])?I[E]:[I[E]];for(let H=0,z=G.length;H<z;H++){const ie=G[H],J=Array.isArray(ie.value)?ie.value:[ie.value],j=Array.isArray(I[E])||Array.isArray(ie.value);let $=N;for(let q=0,ee=J.length;q<ee;q++){const O=J[q],Y=T(O,j),F=N%L,K=F%Y.boundary,Me=F+K;N+=K,Me!==0&&L-Me<Y.storage&&(N+=L-Me),q===0&&($=N),N+=Y.storage}const te=ie.type==="int"?Int32Array:ie.type==="uint"?Uint32Array:Float32Array;ie.__data=new te((N-$)/Float32Array.BYTES_PER_ELEMENT),ie.__offset=$}}const k=N%L;return k>0&&(N+=L-k),C.__size=N,C.__cache={},this}function T(C,I){const N={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(N.boundary=4,N.storage=4):C.isVector2?(N.boundary=8,N.storage=8):C.isVector3||C.isColor?(N.boundary=16,N.storage=12):C.isVector4?(N.boundary=16,N.storage=16):C.isMatrix3?(N.boundary=16,N.storage=48):C.isMatrix4?(N.boundary=16,N.storage=64):C.isTexture?vt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(N.boundary=16,N.storage=C.byteLength):vt("WebGLRenderer: Unsupported uniform value type.",C),I===!0&&(N.boundary=16,N.storage=Math.ceil(N.storage/16)*16),N}function x(C){const I=C.target;I.removeEventListener("dispose",x),s.deleteBuffer(l[I.id]),delete l[I.id],delete c[I.id]}function y(){for(const C in l)s.deleteBuffer(l[C]);l={},c={}}return{bind:d,update:h,dispose:y}}const PT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let zi=null;function LT(){return zi===null&&(zi=new h1(PT,16,16,gs,Yi),zi.name="DFG_LUT",zi.minFilter=Kn,zi.magFilter=Kn,zi.wrapS=ur,zi.wrapT=ur,zi.generateMipmaps=!1,zi.needsUpdate=!0),zi}class sv{constructor(e={}){const{canvas:t=jS(),context:r=null,depth:l=!0,stencil:c=!1,alpha:d=!1,antialias:h=!1,premultipliedAlpha:p=!0,preserveDrawingBuffer:m=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:M=!1,reversedDepthBuffer:_=!1,outputBufferType:S=si}=e;this.isWebGLRenderer=!0;let w;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=r.getContextAttributes().alpha}else w=d;const T=S,x=new Set([Jh,Qh,Zh]),y=new Set([si,qi,go,da,Yh,Kh]),C=new Uint32Array(4),I=new Int32Array(4),N={textures:[],min:[],max:[],resolution:[]};let L=null,k=null;const E=[],D=[];let G=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=dr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let z=!1,ie=null,J=null,j=null,$=null;this._outputColorSpace=mi;let te=0,q=0,ee=null,O=-1,Y=null;const F=new rn,K=new rn;let Me=null;const X=new Tt(0);let le=0,ye=t.width,we=t.height,Se=1,Re=null,pt=null;const Ye=new rn(0,0,ye,we),_t=new rn(0,0,ye,we);let dt=!1;const ct=new _o,je=new rf;let ht=!1,bt=!1;const he=new qt,Te=new de,Ee=new rn,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function Le(){return ee===null?Se:1}let U=r;function Be(R,Z){return t.getContext(R,Z)}let ot,ft,Ae,Wt,rt,ve,P,b,re,be,ge,Pe,Ue,pe,xe,ke,W,_e,me,He,Fe,ze,st;try{const R={alpha:!0,depth:l,stencil:c,antialias:h,premultipliedAlpha:p,preserveDrawingBuffer:m,powerPreference:v,failIfMajorPerformanceCaveat:M};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$h}`),t.addEventListener("webglcontextlost",ut,!1),t.addEventListener("webglcontextrestored",yt,!1),t.addEventListener("webglcontextcreationerror",Xe,!1),U===null){const Z="webgl2";if(U=Be(Z,R),U===null)throw Be(Z)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}wt()}catch(R){throw t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),Bt("WebGLRenderer: "+R.message),R}function wt(){ot=new Uw(U),ot.init(),Fe=new ET(U,ot),ft=new bw(U,ot,e,Fe),Ae=new ST(U,ot),ft.reversedDepthBuffer&&_&&Ae.buffers.depth.setReversed(!0),J=U.createFramebuffer(),j=U.createFramebuffer(),$=U.createFramebuffer(),Wt=new jw(U),rt=new oT,ve=new MT(U,ot,Ae,rt,ft,Fe,Wt),P=new kw(H),b=new B1(U),ze=new Ew(U,b),re=new Fw(U,b,Wt,ze),be=new Bw(U,re,b,ze,Wt),_e=new zw(U,ft,ve),xe=new Tw(rt),ge=new aT(H,P,ot,ft,ze,xe),Pe=new AT(H,rt),Ue=new cT,pe=new mT(ot),W=new Mw(H,P,Ae,be,w,p),ke=new yT(H,be,ft),st=new RT(U,Wt,ft,Ae),me=new ww(U,ot,Wt),He=new Ow(U,ot,Wt),Wt.programs=ge.programs,H.capabilities=ft,H.extensions=ot,H.properties=rt,H.renderLists=Ue,H.shadowMap=ke,H.state=Ae,H.info=Wt}T!==si&&(G=new Gw(T,t.width,t.height,h,l,c));const De=new CT(H,U);this.xr=De,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const R=ot.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ot.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return Se},this.setPixelRatio=function(R){R!==void 0&&(Se=R,this.setSize(ye,we,!1))},this.getSize=function(R){return R.set(ye,we)},this.setSize=function(R,Z,ce=!0){if(De.isPresenting){vt("WebGLRenderer: Can't change size while VR device is presenting.");return}ye=R,we=Z,t.width=Math.floor(R*Se),t.height=Math.floor(Z*Se),ce===!0&&(t.style.width=R+"px",t.style.height=Z+"px"),G!==null&&G.setSize(t.width,t.height),this.setViewport(0,0,R,Z)},this.getDrawingBufferSize=function(R){return R.set(ye*Se,we*Se).floor()},this.setDrawingBufferSize=function(R,Z,ce){ye=R,we=Z,Se=ce,t.width=Math.floor(R*ce),t.height=Math.floor(Z*ce),this.setViewport(0,0,R,Z)},this.setEffects=function(R){if(T===si){Bt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Z=0;Z<R.length;Z++)if(R[Z].isOutputPass===!0){vt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}G.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(F)},this.getViewport=function(R){return R.copy(Ye)},this.setViewport=function(R,Z,ce,ae){R.isVector4?Ye.set(R.x,R.y,R.z,R.w):Ye.set(R,Z,ce,ae),Ae.viewport(F.copy(Ye).multiplyScalar(Le()).round())},this.getScissor=function(R){return R.copy(_t)},this.setScissor=function(R,Z,ce,ae){R.isVector4?_t.set(R.x,R.y,R.z,R.w):_t.set(R,Z,ce,ae),Ae.scissor(K.copy(_t).multiplyScalar(Le()).round())},this.getScissorTest=function(){return dt},this.setScissorTest=function(R){Ae.setScissorTest(dt=R)},this.setOpaqueSort=function(R){Re=R},this.setTransparentSort=function(R){pt=R},this.getClearColor=function(R){return R.copy(W.getClearColor())},this.setClearColor=function(){W.setClearColor(...arguments)},this.getClearAlpha=function(){return W.getClearAlpha()},this.setClearAlpha=function(){W.setClearAlpha(...arguments)},this.clear=function(R=!0,Z=!0,ce=!0){let ae=0;if(R){let se=!1;if(ee!==null){const Ve=ee.texture.format;se=x.has(Ve)}if(se){const Ve=ee.texture.type,Ze=y.has(Ve),Ge=W.getClearColor(),We=W.getClearAlpha(),Je=Ge.r,xt=Ge.g,Ct=Ge.b;Ze?(C[0]=Je,C[1]=xt,C[2]=Ct,C[3]=We,U.clearBufferuiv(U.COLOR,0,C)):(I[0]=Je,I[1]=xt,I[2]=Ct,I[3]=We,U.clearBufferiv(U.COLOR,0,I))}else ae|=U.COLOR_BUFFER_BIT}Z&&(ae|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ae|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&U.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),ie=R},this.dispose=function(){t.removeEventListener("webglcontextlost",ut,!1),t.removeEventListener("webglcontextrestored",yt,!1),t.removeEventListener("webglcontextcreationerror",Xe,!1),W.dispose(),Ue.dispose(),pe.dispose(),ve.dispose(),rt.dispose(),P.dispose(),be.dispose(),re.dispose(),ze.dispose(),st.dispose(),ge.dispose(),De.dispose(),De.removeEventListener("sessionstart",To),De.removeEventListener("sessionend",Pi),Li.stop()};function ut(R){R.preventDefault(),Jm("WebGLRenderer: Context Lost."),z=!0}function yt(){Jm("WebGLRenderer: Context Restored."),z=!1;const R=Wt.autoReset,Z=ke.enabled,ce=ke.autoUpdate,ae=ke.needsUpdate,se=ke.type;wt(),Wt.autoReset=R,ke.enabled=Z,ke.autoUpdate=ce,ke.needsUpdate=ae,ke.type=se}function Xe(R){Bt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Dt(R){const Z=R.target;Z.removeEventListener("dispose",Dt),en(Z)}function en(R){Qn(R),rt.remove(R)}function Qn(R){const Z=rt.get(R).programs;Z!==void 0&&(Z.forEach(function(ce){ge.releaseProgram(ce)}),R.isShaderMaterial&&ge.releaseShaderCache(R))}this.renderBufferDirect=function(R,Z,ce,ae,se,Ve){Z===null&&(Z=Mt);const Ze=se.isMesh&&se.matrixWorld.determinantAffine()<0,Ge=ya(R,Z,ce,ae,se);Ae.setMaterial(ae,Ze);let We=ce.index,Je=1;if(ae.wireframe===!0){if(We=re.getWireframeAttribute(ce),We===void 0)return;Je=2}const xt=ce.drawRange,Ct=ce.attributes.position;let et=xt.start*Je,Rt=(xt.start+xt.count)*Je;Ve!==null&&(et=Math.max(et,Ve.start*Je),Rt=Math.min(Rt,(Ve.start+Ve.count)*Je)),We!==null?(et=Math.max(et,0),Rt=Math.min(Rt,We.count)):Ct!=null&&(et=Math.max(et,0),Rt=Math.min(Rt,Ct.count));const Qt=Rt-et;if(Qt<0||Qt===1/0)return;ze.setup(se,ae,Ge,ce,We);let Gt,Ht=me;if(We!==null&&(Gt=b.get(We),Ht=He,Ht.setIndex(Gt)),se.isMesh)ae.wireframe===!0?(Ae.setLineWidth(ae.wireframeLinewidth*Le()),Ht.setMode(U.LINES)):Ht.setMode(U.TRIANGLES);else if(se.isLine){let sn=ae.linewidth;sn===void 0&&(sn=1),Ae.setLineWidth(sn*Le()),se.isLineSegments?Ht.setMode(U.LINES):se.isLineLoop?Ht.setMode(U.LINE_LOOP):Ht.setMode(U.LINE_STRIP)}else se.isPoints?Ht.setMode(U.POINTS):se.isSprite&&Ht.setMode(U.TRIANGLES);if(se.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Ht.renderMultiDraw(se._multiDrawStarts,se._multiDrawCounts,se._multiDrawCount);else{const sn=se._multiDrawStarts,tt=se._multiDrawCounts,fn=se._multiDrawCount,at=We?b.get(We).bytesPerElement:1,Di=rt.get(ae).currentProgram.getUniforms();for(let pn=0;pn<fn;pn++)Di.setValue(U,"_gl_DrawID",pn),Ht.render(sn[pn]/at,tt[pn])}else if(se.isInstancedMesh)Ht.renderInstances(et,Qt,se.count);else if(ce.isInstancedBufferGeometry){const sn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,tt=Math.min(ce.instanceCount,sn);Ht.renderInstances(et,Qt,tt)}else Ht.render(et,Qt)};function ys(R,Z,ce,ae){ie!==null&&R.isNodeMaterial&&ie.setObject(ae,R),ht===!0&&xe.setState(R,ce,!1),R.transparent===!0&&R.side===Hi&&R.forceSinglePass===!1?(R.side=Zn,R.needsUpdate=!0,Yr(R,Z,ae),R.side=ms,R.needsUpdate=!0,Yr(R,Z,ae),R.side=Hi):Yr(R,Z,ae)}this.compile=function(R,Z,ce=null){ce===null&&(ce=R),ie!==null&&ie.renderStart(R,Z,ce),k=pe.get(ce),k.init(Z),D.push(k),ce.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(k.pushLight(se),se.castShadow&&k.pushShadow(se))}),R!==ce&&R.traverseVisible(function(se){se.isLight&&se.layers.test(Z.layers)&&(k.pushLight(se),se.castShadow&&k.pushShadow(se))}),k.setupLights(),ie!==null&&ie.updateLights(k.state.lightsArray),bt=this.localClippingEnabled,ht=xe.init(this.clippingPlanes,bt),ht===!0&&xe.setGlobalState(this.clippingPlanes,Z),ie!==null&&ke.render(k.state.shadowsArray,ce,Z);const ae=new Set;return R.traverse(function(se){if(!(se.isMesh||se.isPoints||se.isLine||se.isSprite))return;const Ve=se.material;if(Ve)if(Array.isArray(Ve))for(let Ze=0;Ze<Ve.length;Ze++){const Ge=Ve[Ze];ys(Ge,ce,Z,se),ae.add(Ge)}else ys(Ve,ce,Z,se),ae.add(Ve)}),k=D.pop(),ie!==null&&ie.renderEnd(),ae},this.compileAsync=function(R,Z,ce=null){const ae=this.compile(R,Z,ce);return new Promise(se=>{function Ve(){if(ae.forEach(function(Ze){const We=rt.get(Ze).currentProgram;(We===void 0||We.isReady())&&ae.delete(Ze)}),ae.size===0){se(R);return}setTimeout(Ve,10)}ot.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let ga=null;function Lc(R){ga&&ga(R)}function To(){Li.stop()}function Pi(){Li.start()}const Li=new qx;Li.setAnimationLoop(Lc),typeof self<"u"&&Li.setContext(self),this.setAnimationLoop=function(R){ga=R,De.setAnimationLoop(R),R===null?Li.stop():Li.start()},De.addEventListener("sessionstart",To),De.addEventListener("sessionend",Pi),this.render=function(R,Z){if(Z!==void 0&&Z.isCamera!==!0){Bt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;ie!==null&&ie.renderStart(R,Z);const ce=De.enabled===!0&&De.isPresenting===!0,ae=G!==null&&(ee===null||ce)&&G.begin(H,ee);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Z.parent===null&&Z.matrixWorldAutoUpdate===!0&&Z.updateMatrixWorld(),De.enabled===!0&&De.isPresenting===!0&&(G===null||G.isCompositing()===!1)&&(De.cameraAutoUpdate===!0&&De.updateCamera(Z),Z=De.getCamera()),R.isScene===!0&&R.onBeforeRender(H,R,Z,ee),k=pe.get(R,D.length),k.init(Z),k.state.textureUnits=ve.getTextureUnits(),D.push(k),he.multiplyMatrices(Z.projectionMatrix,Z.matrixWorldInverse),Z.isArrayCamera?je.setFromArrayCamera(Z):ct.setFromProjectionMatrix(he,Ai,Z.reversedDepth),bt=this.localClippingEnabled,ht=xe.init(this.clippingPlanes,bt),L=Ue.get(R,E.length),L.init(),E.push(L),this.info.render.frame++,De.enabled===!0&&De.isPresenting===!0){const Ze=H.xr.getDepthSensingMesh();Ze!==null&&Ss(Ze,Z,-1/0,H.sortObjects)}Ss(R,Z,0,H.sortObjects),L.finish(),ie!==null&&ie.updateLights(k.state.lightsArray),H.sortObjects===!0&&L.sort(Re,pt),At=De.enabled===!1||De.isPresenting===!1||De.hasDepthSensing()===!1,At&&W.addToRenderList(L,R),this.info.autoReset===!0&&this.info.reset(),ht===!0&&xe.beginShadows();const se=k.state.shadowsArray;if(ke.render(se,R,Z),ht===!0&&xe.endShadows(),(ae&&G.hasRenderPass())===!1){const Ze=L.opaque,Ge=L.transmissive;if(k.setupLights(),Z.isArrayCamera){const We=Z.cameras;if(Ge.length>0)for(let Je=0,xt=We.length;Je<xt;Je++){const Ct=We[Je];xa(Ze,Ge,R,Ct)}At&&W.render(R);for(let Je=0,xt=We.length;Je<xt;Je++){const Ct=We[Je];Co(L,R,Ct,Ct.viewport)}}else Ge.length>0&&xa(Ze,Ge,R,Z),At&&W.render(R),Co(L,R,Z)}ee!==null&&q===0&&(ve.updateMultisampleRenderTarget(ee),ve.updateRenderTargetMipmap(ee)),ae&&G.end(H),R.isScene===!0&&R.onAfterRender(H,R,Z),ze.resetDefaultState(),O=-1,Y=null,D.pop(),D.length>0?(k=D[D.length-1],ve.setTextureUnits(k.state.textureUnits),ht===!0&&xe.setGlobalState(H.clippingPlanes,k.state.camera)):k=null,E.pop(),E.length>0?L=E[E.length-1]:L=null,ie!==null&&ie.renderEnd()};function Ss(R,Z,ce,ae){if(R.visible===!1)return;if(R.layers.test(Z.layers)){if(R.isGroup)ce=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Z);else if(R.isLight)k.pushLight(R),R.castShadow&&k.pushShadow(R);else if(R.isSprite){const Ze=Z.isArrayCamera?je:ct;if(!R.frustumCulled||R.intersectsFrustum(Ze)){ae&&Ee.setFromMatrixPosition(R.matrixWorld).applyMatrix4(he);const Ge=be.update(R),We=R.material;We.visible&&L.push(R,Ge,We,ce,Ee.z,null,Z)}}else if(R.isMesh||R.isLine||R.isPoints){const Ze=Z.isArrayCamera?je:ct;if(!R.frustumCulled||R.intersectsFrustum(Ze)){const Ge=be.update(R),We=R.material;if(ae&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ee.copy(R.boundingSphere.center)):(Ge.boundingSphere===null&&Ge.computeBoundingSphere(),Ee.copy(Ge.boundingSphere.center)),Ee.applyMatrix4(R.matrixWorld).applyMatrix4(he)),Array.isArray(We)){const Je=Ge.groups;for(let xt=0,Ct=Je.length;xt<Ct;xt++){const et=Je[xt],Rt=We[et.materialIndex];Rt&&Rt.visible&&L.push(R,Ge,Rt,ce,Ee.z,et,Z)}}else We.visible&&L.push(R,Ge,We,ce,Ee.z,null,Z)}}}const Ve=R.children;for(let Ze=0,Ge=Ve.length;Ze<Ge;Ze++)Ss(Ve[Ze],Z,ce,ae)}function Co(R,Z,ce,ae){const{opaque:se,transmissive:Ve,transparent:Ze}=R;k.setupLightsView(ce),ht===!0&&xe.setGlobalState(H.clippingPlanes,ce),ae&&Ae.viewport(F.copy(ae)),se.length>0&&qr(se,Z,ce),Ve.length>0&&qr(Ve,Z,ce),Ze.length>0&&qr(Ze,Z,ce),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function xa(R,Z,ce,ae){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(k.state.transmissionRenderTarget[ae.id]===void 0){const et=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");k.state.transmissionRenderTarget[ae.id]=new Xi(1,1,{generateMipmaps:!0,type:et?Yi:si,minFilter:Hr,samples:Math.max(4,ft.samples),stencilBuffer:c,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ve=k.state.transmissionRenderTarget[ae.id],Ze=ae.viewport||F;Ve.setSize(Ze.z*H.transmissionResolutionScale,Ze.w*H.transmissionResolutionScale);const Ge=H.getRenderTarget(),We=H.getActiveCubeFace(),Je=H.getActiveMipmapLevel();H.setRenderTarget(Ve),H.getClearColor(X),le=H.getClearAlpha(),le<1&&H.setClearColor(16777215,.5),H.clear(),At&&W.render(ce);const xt=H.toneMapping;H.toneMapping=dr;const Ct=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),k.setupLightsView(ae),ht===!0&&xe.setGlobalState(H.clippingPlanes,ae),qr(R,ce,ae),ve.updateMultisampleRenderTarget(Ve),ve.updateRenderTargetMipmap(Ve),ot.has("WEBGL_multisampled_render_to_texture")===!1){let et=!1;for(let Rt=0,Qt=Z.length;Rt<Qt;Rt++){const Gt=Z[Rt],{object:Ht,geometry:sn,material:tt,group:fn}=Gt;if(tt.side===Hi&&Ht.layers.test(ae.layers)){const at=tt.side;tt.side=Zn,tt.needsUpdate=!0,va(Ht,ce,ae,sn,tt,fn),tt.side=at,tt.needsUpdate=!0,et=!0}}et===!0&&(ve.updateMultisampleRenderTarget(Ve),ve.updateRenderTargetMipmap(Ve))}H.setRenderTarget(Ge,We,Je),H.setClearColor(X,le),Ct!==void 0&&(ae.viewport=Ct),H.toneMapping=xt}function qr(R,Z,ce){const ae=Z.isScene===!0?Z.overrideMaterial:null;for(let se=0,Ve=R.length;se<Ve;se++){const Ze=R[se],{object:Ge,geometry:We,group:Je}=Ze;let xt=Ze.material;xt.allowOverride===!0&&ae!==null&&(xt=ae),Ge.layers.test(ce.layers)&&va(Ge,Z,ce,We,xt,Je)}}function va(R,Z,ce,ae,se,Ve){ie!==null&&se.isNodeMaterial&&ie.setObject(R,se),R.onBeforeRender(H,Z,ce,ae,se,Ve),R.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),se.onBeforeRender(H,Z,ce,ae,R,Ve),se.transparent===!0&&se.side===Hi&&se.forceSinglePass===!1?(se.side=Zn,se.needsUpdate=!0,H.renderBufferDirect(ce,Z,ae,se,R,Ve),se.side=ms,se.needsUpdate=!0,H.renderBufferDirect(ce,Z,ae,se,R,Ve),se.side=Hi):H.renderBufferDirect(ce,Z,ae,se,R,Ve),R.onAfterRender(H,Z,ce,ae,se,Ve)}function _a(R){let Z=0;for(const ce of R)ce.texture!==null&&Z++;return Z}function Yr(R,Z,ce){Z.isScene!==!0&&(Z=Mt);const ae=rt.get(R),se=k.state.lights,Ve=k.state.shadowsArray,Ze=se.state.version,Ge=ge.getParameters(R,se.state,Ve,Z,ce,k.state.lightProbeGridArray),We=ge.getProgramCacheKey(Ge);let Je=ae.programs;ae.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?Z.environment:null,ae.fog=Z.fog;const xt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;ae.envMap=P.get(R.envMap||ae.environment,xt),ae.envMapRotation=ae.environment!==null&&R.envMap===null?Z.environmentRotation:R.envMapRotation,Je===void 0&&(R.addEventListener("dispose",Dt),Je=new Map,ae.programs=Je,ae.programVariants=new Map);let Ct=Je.get(We);if(Ct!==void 0){if(ae.currentProgram===Ct&&ae.lightsStateVersion===Ze)return No(R,Ge),Ct}else Ge.uniforms=ge.getUniforms(R),ie!==null&&R.isNodeMaterial&&ie.build(R,ce,Ge),R.onBeforeCompile(Ge,H),Ct=ge.acquireProgram(Ge,We),Je.set(We,Ct),ae.uniforms=Ge.uniforms;const et=ae.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(et.clippingPlanes=xe.uniform),No(R,Ge),ae.needsLights=Ms(R),ae.lightsStateVersion=Ze,ae.needsLights&&(et.ambientLightColor.value=se.state.ambient,et.lightProbe.value=se.state.probe,et.sunLights.value=se.state.sun,et.sunLightShadows.value=se.state.sunShadow,et.directionalLights.value=se.state.directional,et.directionalLightShadows.value=se.state.directionalShadow,et.spotLights.value=se.state.spot,et.spotLightShadows.value=se.state.spotShadow,et.rectAreaLights.value=se.state.rectArea,et.ltc_1.value=se.state.rectAreaLTC1,et.ltc_2.value=se.state.rectAreaLTC2,et.pointLights.value=se.state.point,et.pointLightShadows.value=se.state.pointShadow,et.hemisphereLights.value=se.state.hemi,et.sunShadowMatrix.value=se.state.sunShadowMatrix,et.sunShadowCascade.value=se.state.sunShadowCascade,et.directionalShadowMatrix.value=se.state.directionalShadowMatrix,et.spotLightMatrix.value=se.state.spotLightMatrix,et.spotLightMap.value=se.state.spotLightMap,et.pointShadowMatrix.value=se.state.pointShadowMatrix),ae.numLightProbeGrids=_a(k.state.lightProbeGridArray),ae.currentProgram=Ct,ae.uniformsList=null,Ct}function Dc(R,Z,ce,ae,se){const Ve=rt.get(R),Ze=Ve.currentProgram.id+","+ae+","+se;let Ge=Ve.programVariants.get(Ze);return Ge===void 0?(Ge=Yr(R,Z,ce),Ve.programVariants.set(Ze,Ge)):(Ve.currentProgram=Ge,Ve.uniformsList=null,Ve.outputColorSpace=ae,Ve.toneMapping=se),Ge}function Zt(R){if(R.uniformsList===null){const Z=R.currentProgram.getUniforms();R.uniformsList=hc.seqWithValue(Z.seq,R.uniforms)}return R.uniformsList}function No(R,Z){const ce=rt.get(R);ce.outputColorSpace=Z.outputColorSpace,ce.batching=Z.batching,ce.batchingColor=Z.batchingColor,ce.instancing=Z.instancing,ce.instancingColor=Z.instancingColor,ce.instancingMorph=Z.instancingMorph,ce.skinning=Z.skinning,ce.morphTargets=Z.morphTargets,ce.morphNormals=Z.morphNormals,ce.morphColors=Z.morphColors,ce.morphTargetsCount=Z.morphTargetsCount,ce.numClippingPlanes=Z.numClippingPlanes,ce.numIntersection=Z.numClipIntersection,ce.vertexAlphas=Z.vertexAlphas,ce.vertexTangents=Z.vertexTangents,ce.toneMapping=Z.toneMapping}function ya(R,Z,ce,ae,se){Z.isScene!==!0&&(Z=Mt),ve.resetTextureUnits();const Ve=Z.fog,Ze=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?Z.environment:null,Ge=ee===null?H.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:It.workingColorSpace,We=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,Je=P.get(ae.envMap||Ze,We),xt=ae.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,Ct=!!ce.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),et=!!ce.morphAttributes.position,Rt=!!ce.morphAttributes.normal,Qt=!!ce.morphAttributes.color;let Gt=dr;ae.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Gt=H.toneMapping);const Ht=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,sn=Ht!==void 0?Ht.length:0,tt=rt.get(ae),fn=k.state.lights;if(ht===!0&&(bt===!0||R!==Y)){const jt=R===Y&&ae.id===O;xe.setState(ae,R,jt)}let at=!1,Di=!1;ae.version===tt.__version?tt.needsLights&&tt.lightsStateVersion!==fn.state.version||se.isBatchedMesh&&tt.batching===!1||!se.isBatchedMesh&&tt.batching===!0||se.isBatchedMesh&&tt.batchingColor===!0&&se._colorsTexture===null||se.isBatchedMesh&&tt.batchingColor===!1&&se._colorsTexture!==null||se.isInstancedMesh&&tt.instancing===!1||!se.isInstancedMesh&&tt.instancing===!0||se.isSkinnedMesh&&tt.skinning===!1||!se.isSkinnedMesh&&tt.skinning===!0||se.isInstancedMesh&&tt.instancingColor===!0&&se.instanceColor===null||se.isInstancedMesh&&tt.instancingColor===!1&&se.instanceColor!==null||se.isInstancedMesh&&tt.instancingMorph===!0&&se.morphTexture===null||se.isInstancedMesh&&tt.instancingMorph===!1&&se.morphTexture!==null||tt.envMap!==Je||ae.fog===!0&&tt.fog!==Ve||tt.numClippingPlanes!==void 0&&(tt.numClippingPlanes!==xe.numPlanes||tt.numIntersection!==xe.numIntersection)||tt.vertexAlphas!==xt||tt.vertexTangents!==Ct||tt.morphTargets!==et||tt.morphNormals!==Rt||tt.morphColors!==Qt||tt.morphTargetsCount!==sn||tt.numLightProbeGrids!==_a(k.state.lightProbeGridArray)?at=!0:(tt.outputColorSpace!==Ge||tt.toneMapping!==Gt)&&(Di=!0):(at=!0,tt.__version=ae.version);let pn=tt.currentProgram;(at===!0||Di===!0)&&(pn=Di===!0?Dc(ae,Z,se,Ge,Gt):Yr(ae,Z,se),ie&&ae.isNodeMaterial&&ie.onUpdateProgram(ae,pn,tt));let mr=!1,xi=!1,Ii=!1;const Lt=pn.getUniforms(),ln=tt.uniforms;if(Ae.useProgram(pn.program)&&(mr=!0,xi=!0,Ii=!0),ae.id!==O&&(O=ae.id,xi=!0),mr||Y!==R){Ae.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Lt.setValue(U,"projectionMatrix",R.projectionMatrix),Lt.setValue(U,"viewMatrix",R.matrixWorldInverse);const Xt=Lt.map.cameraPosition;Xt!==void 0&&Xt.setValue(U,Te.setFromMatrixPosition(R.matrixWorld)),ft.logarithmicDepthBuffer&&Lt.setValue(U,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&Lt.setValue(U,"isOrthographic",R.isOrthographicCamera===!0),Y!==R&&(Y=R,xi=!0,Ii=!0)}if(tt.needsLights&&(fn.state.sunShadowMap.length>0&&Lt.setValue(U,"sunShadowMap",fn.state.sunShadowMap,ve),fn.state.directionalShadowMap.length>0&&Lt.setValue(U,"directionalShadowMap",fn.state.directionalShadowMap,ve),fn.state.spotShadowMap.length>0&&Lt.setValue(U,"spotShadowMap",fn.state.spotShadowMap,ve),fn.state.pointShadowMap.length>0&&Lt.setValue(U,"pointShadowMap",fn.state.pointShadowMap,ve)),se.isSkinnedMesh){Lt.setOptional(U,se,"bindMatrix"),Lt.setOptional(U,se,"bindMatrixInverse");const jt=se.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Lt.setValue(U,"boneTexture",jt.boneTexture,ve))}se.isBatchedMesh&&(Lt.setOptional(U,se,"batchingTexture"),Lt.setValue(U,"batchingTexture",se._matricesTexture,ve),Lt.setOptional(U,se,"batchingIdTexture"),Lt.setValue(U,"batchingIdTexture",se._indirectTexture,ve),Lt.setOptional(U,se,"batchingColorTexture"),se._colorsTexture!==null&&Lt.setValue(U,"batchingColorTexture",se._colorsTexture,ve));const Rn=ce.morphAttributes;if((Rn.position!==void 0||Rn.normal!==void 0||Rn.color!==void 0)&&_e.update(se,ce,pn),(xi||tt.receiveShadow!==se.receiveShadow)&&(tt.receiveShadow=se.receiveShadow,Lt.setValue(U,"receiveShadow",se.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&Z.environment!==null&&(ln.envMapIntensity.value=Z.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=LT()),xi){if(Lt.setValue(U,"toneMappingExposure",H.toneMappingExposure),tt.needsLights&&Ao(ln,Ii),Ve&&ae.fog===!0&&Pe.refreshFogUniforms(ln,Ve),Pe.refreshMaterialUniforms(ln,ae,Se,we,k.state.transmissionRenderTarget[R.id]),tt.needsLights&&tt.numLightProbeGrids>0){const jt=N;let Xt=0;for(const _n of k.state.lightProbeGridArray)_n.texture!==null&&(jt.textures[Xt]=_n.texture,jt.min[Xt]=_n.boundingBox.min,jt.max[Xt]=_n.boundingBox.max,jt.resolution[Xt]=_n.resolution,Xt++);for(const _n in jt)jt[_n].length=Xt;ln.probesSH.value=jt.textures,ln.probesMin.value=jt.min,ln.probesMax.value=jt.max,ln.probesResolution.value=jt.resolution}hc.upload(U,Zt(tt),ln,ve)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(hc.upload(U,Zt(tt),ln,ve),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&Lt.setValue(U,"center",se.center),Lt.setValue(U,"modelViewMatrix",se.modelViewMatrix),Lt.setValue(U,"normalMatrix",se.normalMatrix),Lt.setValue(U,"modelMatrix",se.matrixWorld),ae.uniformsGroups!==void 0){const jt=ae.uniformsGroups;for(let Xt=0,_n=jt.length;Xt<_n;Xt++){const gr=jt[Xt];st.update(gr,pn),st.bind(gr,pn)}}return pn}function Ao(R,Z){R.ambientLightColor.needsUpdate=Z,R.lightProbe.needsUpdate=Z,R.sunLights.needsUpdate=Z,R.sunLightShadows.needsUpdate=Z,R.directionalLights.needsUpdate=Z,R.directionalLightShadows.needsUpdate=Z,R.pointLights.needsUpdate=Z,R.pointLightShadows.needsUpdate=Z,R.spotLights.needsUpdate=Z,R.spotLightShadows.needsUpdate=Z,R.rectAreaLights.needsUpdate=Z,R.hemisphereLights.needsUpdate=Z}function Ms(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return te},this.getActiveMipmapLevel=function(){return q},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(R,Z,ce){const ae=rt.get(R);ae.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),rt.get(R.texture).__webglTexture=Z,rt.get(R.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:ce,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Z){const ce=rt.get(R);ce.__webglFramebuffer=Z,ce.__useDefaultFramebuffer=Z===void 0},this.setRenderTarget=function(R,Z=0,ce=0){ee=R,te=Z,q=ce;let ae=null,se=!1,Ve=!1;if(R){const Ge=rt.get(R);if(Ge.__useDefaultFramebuffer!==void 0){Ae.bindFramebuffer(U.FRAMEBUFFER,Ge.__webglFramebuffer),F.copy(R.viewport),K.copy(R.scissor),Me=R.scissorTest,Ae.viewport(F),Ae.scissor(K),Ae.setScissorTest(Me),O=-1;return}else if(Ge.__webglFramebuffer===void 0)ve.setupRenderTarget(R);else if(Ge.__hasExternalTextures)ve.rebindTextures(R,rt.get(R.texture).__webglTexture,rt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const xt=R.depthTexture;if(Ge.__boundDepthTexture!==xt){if(xt!==null&&rt.has(xt)&&(R.width!==xt.image.width||R.height!==xt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ve.setupDepthRenderbuffer(R)}}const We=R.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ve=!0);const Je=rt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Je[Z])?ae=Je[Z][ce]:ae=Je[Z],se=!0):R.samples>0&&ve.useMultisampledRTT(R)===!1?ae=rt.get(R).__webglMultisampledFramebuffer:Array.isArray(Je)?ae=Je[ce]:ae=Je,F.copy(R.viewport),K.copy(R.scissor),Me=R.scissorTest}else F.copy(Ye).multiplyScalar(Se).floor(),K.copy(_t).multiplyScalar(Se).floor(),Me=dt;if(ce!==0&&(ae=J),Ae.bindFramebuffer(U.FRAMEBUFFER,ae)&&Ae.drawBuffers(R,ae),Ae.viewport(F),Ae.scissor(K),Ae.setScissorTest(Me),se){const Ge=rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+Z,Ge.__webglTexture,ce)}else if(Ve){const Ge=Z;for(let We=0;We<R.textures.length;We++){const Je=rt.get(R.textures[We]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+We,Je.__webglTexture,ce,Ge)}}else if(R!==null&&ce!==0){const Ge=rt.get(R.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ge.__webglTexture,ce)}O=-1};function Ro(R){const Z=rt.get(R);return(Z.__readFormat!==R.format||Z.__readType!==R.type)&&(Z.__readFormat=R.format,Z.__readType=R.type,Z.__formatReadable=ft.textureFormatReadable(R.format),Z.__typeReadable=ft.textureTypeReadable(R.type)),Z}this.readRenderTargetPixels=function(R,Z,ce,ae,se,Ve,Ze,Ge=0){if(!(R&&R.isWebGLRenderTarget)){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We){Ae.bindFramebuffer(U.FRAMEBUFFER,We);try{const Je=R.textures[Ge],xt=Je.format,Ct=Je.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ge);const et=Ro(Je);if(et.__formatReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(et.__typeReadable===!1){Bt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Z>=0&&Z<=R.width-ae&&ce>=0&&ce<=R.height-se&&U.readPixels(Z,ce,ae,se,Fe.convert(xt),Fe.convert(Ct),Ve)}finally{const Je=ee!==null?rt.get(ee).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Je)}}},this.readRenderTargetPixelsAsync=async function(R,Z,ce,ae,se,Ve,Ze,Ge=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=rt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ze!==void 0&&(We=We[Ze],Array.isArray(We)&&(We=We[0])),We)if(Z>=0&&Z<=R.width-ae&&ce>=0&&ce<=R.height-se){Ae.bindFramebuffer(U.FRAMEBUFFER,We);const Je=R.textures[Ge],xt=Je.format,Ct=Je.type;R.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Ge);const et=Ro(Je);if(et.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(et.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Rt=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.bufferData(U.PIXEL_PACK_BUFFER,Ve.byteLength,U.STREAM_READ),U.readPixels(Z,ce,ae,se,Fe.convert(xt),Fe.convert(Ct),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);const Qt=ee!==null?rt.get(ee).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Qt);const Gt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await zS(U,Gt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Rt),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Ve),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Rt),U.deleteSync(Gt),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Z=null,ce=0){const ae=Math.pow(2,-ce),se=Math.floor(R.image.width*ae),Ve=Math.floor(R.image.height*ae),Ze=Z!==null?Z.x:0,Ge=Z!==null?Z.y:0;ve.setTexture2D(R,0),U.copyTexSubImage2D(U.TEXTURE_2D,ce,0,0,Ze,Ge,se,Ve),Ae.unbindTexture()},this.copyTextureToTexture=function(R,Z,ce=null,ae=null,se=0,Ve=0){let Ze,Ge,We,Je,xt,Ct,et,Rt,Qt;const Gt=R.isCompressedTexture?R.mipmaps[Ve]:R.image;if(ce!==null)Ze=ce.max.x-ce.min.x,Ge=ce.max.y-ce.min.y,We=ce.isBox3?ce.max.z-ce.min.z:1,Je=ce.min.x,xt=ce.min.y,Ct=ce.isBox3?ce.min.z:0;else{const Lt=Math.pow(2,-se);Ze=Math.floor(Gt.width*Lt),Ge=Math.floor(Gt.height*Lt),R.isDataArrayTexture?We=Gt.depth:R.isData3DTexture?We=Math.floor(Gt.depth*Lt):We=1,Je=0,xt=0,Ct=0}ae!==null?(et=ae.x,Rt=ae.y,Qt=ae.z):(et=0,Rt=0,Qt=0);const Ht=Fe.convert(Z.format),sn=Fe.convert(Z.type);let tt;Z.isData3DTexture?(ve.setTexture3D(Z,0),tt=U.TEXTURE_3D):Z.isDataArrayTexture||Z.isCompressedArrayTexture?(ve.setTexture2DArray(Z,0),tt=U.TEXTURE_2D_ARRAY):(ve.setTexture2D(Z,0),tt=U.TEXTURE_2D),Ae.activeTexture(U.TEXTURE0),Ae.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,Z.flipY),Ae.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Z.premultiplyAlpha),Ae.pixelStorei(U.UNPACK_ALIGNMENT,Z.unpackAlignment);const fn=Ae.getParameter(U.UNPACK_ROW_LENGTH),at=Ae.getParameter(U.UNPACK_IMAGE_HEIGHT),Di=Ae.getParameter(U.UNPACK_SKIP_PIXELS),pn=Ae.getParameter(U.UNPACK_SKIP_ROWS),mr=Ae.getParameter(U.UNPACK_SKIP_IMAGES);Ae.pixelStorei(U.UNPACK_ROW_LENGTH,Gt.width),Ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Gt.height),Ae.pixelStorei(U.UNPACK_SKIP_PIXELS,Je),Ae.pixelStorei(U.UNPACK_SKIP_ROWS,xt),Ae.pixelStorei(U.UNPACK_SKIP_IMAGES,Ct);const xi=R.isDataArrayTexture||R.isData3DTexture,Ii=Z.isDataArrayTexture||Z.isData3DTexture;if(R.isDepthTexture){const Lt=rt.get(R),ln=rt.get(Z),Rn=rt.get(Lt.__renderTarget),jt=rt.get(ln.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Rn.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,jt.__webglFramebuffer);for(let Xt=0;Xt<We;Xt++)xi&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.get(R).__webglTexture,se,Ct+Xt),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,rt.get(Z).__webglTexture,Ve,Qt+Xt)),U.blitFramebuffer(Je,xt,Je+Ze,xt+Ge,et,Rt,et+Ze,Rt+Ge,U.DEPTH_BUFFER_BIT,U.NEAREST);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(se!==0||R.isRenderTargetTexture||rt.has(R)){const Lt=rt.get(R),ln=rt.get(Z);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,j),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,$);for(let Rn=0;Rn<We;Rn++)xi?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Lt.__webglTexture,se,Ct+Rn):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Lt.__webglTexture,se),Ii?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ln.__webglTexture,Ve,Qt+Rn):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ln.__webglTexture,Ve),se!==0?U.blitFramebuffer(Je,xt,Je+Ze,xt+Ge,et,Rt,et+Ze,Rt+Ge,U.COLOR_BUFFER_BIT,U.NEAREST):Ii?U.copyTexSubImage3D(tt,Ve,et,Rt,Qt+Rn,Je,xt,Ze,Ge):U.copyTexSubImage2D(tt,Ve,et,Rt,Je,xt,Ze,Ge);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Ii?R.isDataTexture||R.isData3DTexture?U.texSubImage3D(tt,Ve,et,Rt,Qt,Ze,Ge,We,Ht,sn,Gt.data):Z.isCompressedArrayTexture?U.compressedTexSubImage3D(tt,Ve,et,Rt,Qt,Ze,Ge,We,Ht,Gt.data):U.texSubImage3D(tt,Ve,et,Rt,Qt,Ze,Ge,We,Ht,sn,Gt):R.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Ve,et,Rt,Ze,Ge,Ht,sn,Gt.data):R.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Ve,et,Rt,Gt.width,Gt.height,Ht,Gt.data):U.texSubImage2D(U.TEXTURE_2D,Ve,et,Rt,Ze,Ge,Ht,sn,Gt);Ae.pixelStorei(U.UNPACK_ROW_LENGTH,fn),Ae.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at),Ae.pixelStorei(U.UNPACK_SKIP_PIXELS,Di),Ae.pixelStorei(U.UNPACK_SKIP_ROWS,pn),Ae.pixelStorei(U.UNPACK_SKIP_IMAGES,mr),Ve===0&&Z.generateMipmaps===!0&&Z.mipmapsAutoUpdate===!0&&U.generateMipmap(tt),Ae.unbindTexture()},this.initRenderTarget=function(R){rt.get(R).__webglFramebuffer===void 0&&ve.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?ve.setTextureCube(R,0):R.isData3DTexture?ve.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?ve.setTexture2DArray(R,0):ve.setTexture2D(R,0),Ae.unbindTexture()},this.resetState=function(){te=0,q=0,ee=null,Ae.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ai}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}function DT({onEnter:s,onSkip:e}){const t=V.useRef(null),[r,l]=V.useState($n.currentLevel),[c,d]=V.useState(!1);return V.useEffect(()=>$n.subscribe(p=>{l(p)}),[]),V.useEffect(()=>{if(r===Ft.LOW||r===Ft.REDUCED_MOTION)return;const h=t.current;if(!h)return;let p;const m=h.clientWidth||window.innerWidth,v=h.clientHeight||window.innerHeight,M=new Fx;M.fog=new Nc(526348,.035);const _=new qn(60,m/v,.1,1e3);_.position.z=24;const S=new sv({alpha:!0,antialias:r===Ft.HIGH});S.setSize(m,v),S.setPixelRatio(Math.min(window.devicePixelRatio,r===Ft.HIGH?2:1)),S.setClearColor(526348,1),h.appendChild(S.domElement);const w=r===Ft.HIGH?1200:400,T=new gi,x=new Float32Array(w*3),y=new Float32Array(w*3),C=new Tt(9133302),I=new Tt(3718648),N=new Tt(11032055);for(let K=0;K<w;K++){x[K*3]=(Math.random()-.5)*50,x[K*3+1]=(Math.random()-.5)*35,x[K*3+2]=(Math.random()-.5)*40;const Me=Math.random()<.5?C.clone().lerp(I,Math.random()):I.clone().lerp(N,Math.random());y[K*3]=Me.r,y[K*3+1]=Me.g,y[K*3+2]=Me.b}T.setAttribute("position",new fr(x,3)),T.setAttribute("color",new fr(y,3));const L=new Bx({size:r===Ft.HIGH?.18:.25,vertexColors:!0,transparent:!0,opacity:.85,blending:$d}),k=new g1(T,L);M.add(k);const E=new sa,D=new Ih({color:9133302,wireframe:!0,transparent:!0,opacity:.25}),G=new Ih({color:3718648,wireframe:!0,transparent:!0,opacity:.35}),H=new Ec(7.5,.08,16,64),z=new Ec(9.2,.05,16,64),ie=new Ki(H,D),J=new Ki(z,G);E.add(ie),E.add(J),M.add(E);let j=0,$=0,te=0,q=0;const ee=K=>{j=(K.clientX/window.innerWidth-.5)*2,$=(K.clientY/window.innerHeight-.5)*2};window.addEventListener("mousemove",ee);const O=()=>{if(!h)return;const K=h.clientWidth||window.innerWidth,Me=h.clientHeight||window.innerHeight;_.aspect=K/Me,_.updateProjectionMatrix(),S.setSize(K,Me)};window.addEventListener("resize",O);let Y=new O1;const F=()=>{p=requestAnimationFrame(F),$n.onFrame(),Y.getDelta();const K=Y.getElapsedTime();te+=(j*2.5-te)*.05,q+=(-$*1.8-q)*.05,_.position.x=te,_.position.y=q,_.lookAt(0,0,0),k.rotation.y=K*.03,k.rotation.x=Math.sin(K*.02)*.05,ie.rotation.x=K*.15,ie.rotation.y=K*.2,J.rotation.y=-K*.12,J.rotation.z=K*.08,S.render(M,_)};return F(),()=>{cancelAnimationFrame(p),window.removeEventListener("mousemove",ee),window.removeEventListener("resize",O),S.domElement&&h.contains(S.domElement)&&h.removeChild(S.domElement),T.dispose(),L.dispose(),H.dispose(),z.dispose(),D.dispose(),G.dispose(),S.dispose()}},[r]),a.jsxs("div",{className:"spatial-landing-root",children:[a.jsx("div",{ref:t,className:"spatial-canvas-viewport"}),a.jsx("div",{className:"spatial-vignette-overlay"}),a.jsxs("div",{className:"spatial-content-wrap",children:[a.jsxs("div",{className:"spatial-badge-pill",children:[a.jsx(Vh,{size:13,className:"pulse-icon text-cyan"}),a.jsx("span",{children:"PROJECT CINE-3D • SPATIAL CINEMA"})]}),a.jsxs("h1",{className:"spatial-headline",children:["Stream",a.jsx("span",{className:"brand-accent",children:"Link"}),a.jsx("span",{className:"spatial-version-tag",children:"2.0"})]}),a.jsx("p",{className:"spatial-tagline",children:"Beyond the Screen."}),a.jsx("p",{className:"spatial-description",children:"A high-performance personal streaming theater powered by your host workstation. Spatial library discovery, instant seeking, and zero cloud lock-in."}),a.jsxs("div",{className:"spatial-actions-row",children:[a.jsxs("button",{className:`spatial-enter-btn ${c?"hovered":""}`,onClick:s,onMouseEnter:()=>d(!0),onMouseLeave:()=>d(!1),children:[a.jsx("div",{className:"btn-glow-ring"}),a.jsx(un,{size:18,fill:"currentColor"}),a.jsx("span",{children:"Enter CINE-3D Experience"}),a.jsx(l_,{size:18})]}),a.jsxs("button",{className:"spatial-skip-btn",onClick:e,title:"Go directly to traditional media library",children:[a.jsx(ix,{size:15}),a.jsx("span",{children:"Skip to Library"})]})]}),a.jsx("div",{className:"spatial-footer-note",children:a.jsx("span",{children:"Direct Host Stream • HTTP 206 Range Seeking • Cloudflare Tunnel Active"})})]})]})}const Zg={compact:{cardWidth:1.5,cardHeight:2.25,activeScale:1.1,hoverScale:1.02,idleScale:.88,camZ:15.2,camY:.65,cardY:.45,gridY:-1.9,fov:46},balanced:{cardWidth:1.85,cardHeight:2.78,activeScale:1.12,hoverScale:1.04,idleScale:.9,camZ:15.6,camY:.65,cardY:.45,gridY:-2.1,fov:46},cinematic:{cardWidth:2.3,cardHeight:3.45,activeScale:1.15,hoverScale:1.05,idleScale:.92,camZ:16.2,camY:.7,cardY:.48,gridY:-2.4,fov:48}};function IT({movies:s=[],onSelectMovie:e,onPlayMovie:t,onSwitchTo2D:r}){const l=V.useRef(null),[c,d]=V.useState($n.currentLevel),[h,p]=V.useState(0),[m,v]=V.useState(!1),[M,_]=V.useState(null),[S,w]=V.useState(()=>localStorage.getItem("streamlink_cine3d_card_scale")||"balanced"),T=G=>{w(G);try{localStorage.setItem("streamlink_cine3d_card_scale",G)}catch{}};V.useEffect(()=>$n.subscribe(G=>d(G)),[]);const x=V.useMemo(()=>(s||[]).filter(G=>G&&G.id),[s]),y=x[h]||x[0]||null,C=V.useRef(0),I=V.useRef(0),N=V.useRef(0),L=V.useRef(!1),k=V.useRef(0),E=V.useRef(0);V.useEffect(()=>{const G=H=>{["ArrowLeft","KeyA"].includes(H.code)?(H.preventDefault(),D(-1)):["ArrowRight","KeyD"].includes(H.code)?(H.preventDefault(),D(1)):H.code==="Enter"&&y?e(y):H.code==="Space"&&y&&(H.preventDefault(),t(y))};return window.addEventListener("keydown",G),()=>window.removeEventListener("keydown",G)},[y,x.length]);const D=G=>{if(!x.length)return;const H=x.length,z=Math.PI*2/H;I.current+=G*z};return V.useEffect(()=>{if(c===Ft.LOW||c===Ft.REDUCED_MOTION)return;const G=l.current;if(!G||x.length===0)return;let H;const z=G.clientWidth||window.innerWidth,ie=G.clientHeight||window.innerHeight,J=Zg[S]||Zg.balanced,j=new Fx;j.fog=new Nc(526348,.028);const $=new qn(J.fov,z/ie,.1,100);$.position.set(0,J.camY,J.camZ),$.lookAt(0,J.cardY*.4,0);const te=new sv({antialias:c===Ft.HIGH,alpha:!0});te.setSize(z,ie),te.setPixelRatio(Math.min(window.devicePixelRatio,c===Ft.HIGH?2:1)),te.setClearColor(526348,1),G.appendChild(te.domElement);const q=new k1(16777215,.88);j.add(q);const ee=new P1(9133302,2.5);ee.position.set(0,8,12),ee.angle=Math.PI/4,ee.penumbra=.8,j.add(ee);const O=new D1(3718648,1.8,30);O.position.set(-6,-2,6),j.add(O);const Y=new j1(36,36,9133302,1974840);Y.position.y=J.gridY,j.add(Y);const F=new sa;j.add(F);const K=x.length,Me=Math.max(8,K*.95),X=new wo(J.cardWidth,J.cardHeight),le=new A1,ye=[],we=[],Se=[],Re=he=>{const Te=document.createElement("canvas");Te.width=300,Te.height=450;const Ee=Te.getContext("2d"),Mt=he||"Stream";let At=0;for(let Ae=0;Ae<Mt.length;Ae++)At=Mt.charCodeAt(Ae)+((At<<5)-At);const Le=Math.abs(At)%5,Be=[{c1:"#7928CA",c2:"#FF0080",c3:"#00DFD8",accent:"#FF0080"},{c1:"#E11D48",c2:"#FB923C",c3:"#4F46E5",accent:"#FB923C"},{c1:"#059669",c2:"#06B6D4",c3:"#0F172A",accent:"#10B981"},{c1:"#8B5CF6",c2:"#EC4899",c3:"#1E1B4B",accent:"#C084FC"},{c1:"#2563EB",c2:"#38BDF8",c3:"#7C3AED",accent:"#38BDF8"}][Le],ot=Ee.createLinearGradient(0,0,300,450);ot.addColorStop(0,Be.c1),ot.addColorStop(.55,Be.c2),ot.addColorStop(1,Be.c3),Ee.fillStyle=ot,Ee.fillRect(0,0,300,450);const ft=Ee.createRadialGradient(80,100,10,100,120,180);return ft.addColorStop(0,"rgba(255, 255, 255, 0.45)"),ft.addColorStop(1,"transparent"),Ee.fillStyle=ft,Ee.fillRect(0,0,300,450),Ee.fillStyle="rgba(255, 255, 255, 0.12)",Ee.font="900 130px -apple-system, sans-serif",Ee.textAlign="center",Ee.fillText(Mt.charAt(0).toUpperCase(),150,240),Ee.strokeStyle="rgba(255, 255, 255, 0.35)",Ee.lineWidth=2,Ee.beginPath(),Ee.arc(150,210,42,0,Math.PI*2),Ee.stroke(),Ee.fillStyle="rgba(0, 0, 0, 0.6)",Ee.beginPath(),Ee.roundRect(16,16,68,22,6),Ee.fill(),Ee.fillStyle="#FFFFFF",Ee.font="bold 11px -apple-system, sans-serif",Ee.fillText("⚡ 4K UHD",50,31),Ee.fillStyle="rgba(10, 12, 20, 0.88)",Ee.fillRect(0,340,300,110),Ee.fillStyle=Be.accent,Ee.fillRect(16,344,24,3),Ee.fillStyle="#FFFFFF",Ee.font="800 15px -apple-system, sans-serif",Ee.textAlign="left",Ee.fillText(Mt.length>24?Mt.substring(0,22)+"...":Mt,16,380),Ee.fillStyle="rgba(255, 255, 255, 0.6)",Ee.font="600 11px -apple-system, sans-serif",Ee.fillText("STREAMLINK 2.0 CINEMA",16,404),new x1(Te)};x.forEach((he,Te)=>{const Ee=Te/K*Math.PI*2,Mt=Math.sin(Ee)*Me,At=Math.cos(Ee)*Me;let Le;try{const ot=on(`/api/movies/${he.id}/poster`);Le=le.load(ot,void 0,void 0,()=>{const ft=Re(he.clean_title);U.map=ft,U.needsUpdate=!0})}catch{Le=Re(he.clean_title)}Se.push(Le);const U=new E1({map:Le,roughness:.35,metalness:.15,side:Hi});we.push(U);const Be=new Ki(X,U);Be.position.set(Mt,J.cardY,At),Be.lookAt(0,J.cardY,0),Be.rotation.y+=Math.PI,Be.userData={movie:he,index:Te},F.add(Be),ye.push(Be)});const pt=new F1,Ye=new Ut(-999,-999),_t=he=>{const Te=G.getBoundingClientRect();if(Ye.x=(he.clientX-Te.left)/Te.width*2-1,Ye.y=-((he.clientY-Te.top)/Te.height)*2+1,L.current){const Ee=he.clientX-E.current;E.current=he.clientX,I.current+=Ee*.005,N.current=Ee*.005}},dt=he=>{L.current=!0,k.current=he.clientX,E.current=he.clientX,N.current=0,v(!0)},ct=he=>{const Te=Math.abs(he.clientX-k.current);if(L.current=!1,v(!1),Te<6){pt.setFromCamera(Ye,$);const Ee=pt.intersectObjects(ye);if(Ee.length>0){const Mt=Ee[0].object,{movie:At,index:Le}=Mt.userData;if(Le===h)e(At);else{const U=Math.PI*2/K,Be=Le-h;I.current-=Be*U}}}},je=he=>{he.preventDefault(),I.current+=Math.sign(he.deltaY)*.15};G.addEventListener("pointermove",_t),G.addEventListener("pointerdown",dt),window.addEventListener("pointerup",ct),G.addEventListener("wheel",je,{passive:!1});const ht=()=>{if(!G)return;const he=G.clientWidth||window.innerWidth,Te=G.clientHeight||window.innerHeight;$.aspect=he/Te,$.updateProjectionMatrix(),te.setSize(he,Te)};window.addEventListener("resize",ht);const bt=()=>{var Le;H=requestAnimationFrame(bt),$n.onFrame(),L.current||(I.current+=N.current,N.current*=.92),C.current+=(I.current-C.current)*.08,F.rotation.y=C.current;const he=(-F.rotation.y%(Math.PI*2)+Math.PI*2)%(Math.PI*2),Te=Math.PI*2/K;let Ee=Math.round(he/Te)%K;Ee<0&&(Ee+=K),Ee!==h&&p(Ee),pt.setFromCamera(Ye,$);const Mt=pt.intersectObjects(ye),At=Mt.length>0?Mt[0].object:null;ye.forEach((U,Be)=>{const ot=Be===Ee,ft=At===U,Ae=ot?J.activeScale:ft?J.hoverScale:J.idleScale;U.scale.lerp(new de(Ae,Ae,Ae),.1),U.material&&(U.material.emissive=new Tt(ot?2233152:ft?990771:0))}),(Le=At==null?void 0:At.userData)!=null&&Le.movie?_(At.userData.movie):_(null),te.render(j,$)};return bt(),()=>{cancelAnimationFrame(H),G.removeEventListener("pointermove",_t),G.removeEventListener("pointerdown",dt),window.removeEventListener("pointerup",ct),G.removeEventListener("wheel",je),window.removeEventListener("resize",ht),te.domElement&&G.contains(te.domElement)&&G.removeChild(te.domElement),X.dispose(),Y.dispose(),we.forEach(he=>he.dispose()),Se.forEach(he=>he.dispose()),te.dispose()}},[x,c,S]),c===Ft.LOW||c===Ft.REDUCED_MOTION?a.jsxs("div",{className:"cinema-lobby-css3d-fallback",children:[a.jsxs("div",{className:"lobby-header-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(zh,{size:14,className:"text-cyan"}),a.jsx("span",{children:"2D ADAPTIVE CINEMA LOBBY"})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,children:[a.jsx(Hm,{size:14}),a.jsx("span",{children:"Switch to Traditional Grid"})]})]}),a.jsxs("div",{className:"css3d-carousel-container",children:[a.jsx("button",{className:"css3d-nav-arrow left",onClick:()=>D(-1),children:a.jsx(fc,{size:22})}),a.jsx("div",{className:"css3d-active-card-portal",children:y&&a.jsxs("div",{className:"css3d-featured-card",onClick:()=>e(y),children:[a.jsx("img",{src:on(`/api/movies/${y.id}/poster`),alt:y.clean_title,className:"css3d-card-img"}),a.jsxs("div",{className:"css3d-card-overlay",children:[a.jsx("span",{className:"card-pill-res",children:y.resolution||"1080P"}),a.jsx("h4",{children:y.clean_title}),a.jsx("div",{className:"card-actions-quick",children:a.jsxs("button",{className:"btn-primary btn-sm",onClick:G=>{G.stopPropagation(),t(y)},children:[a.jsx(un,{size:14,fill:"currentColor"})," Play Now"]})})]})]})}),a.jsx("button",{className:"css3d-nav-arrow right",onClick:()=>D(1),children:a.jsx(co,{size:22})})]}),a.jsx("div",{className:"css3d-reel-row",children:x.map((G,H)=>a.jsxs("div",{className:`css3d-thumb-pill ${H===h?"active":""}`,onClick:()=>p(H),children:[a.jsx("img",{src:on(`/api/movies/${G.id}/poster`),alt:G.clean_title}),a.jsx("span",{children:G.clean_title})]},G.id))})]}):a.jsxs("div",{className:"cinema-lobby-3d-root",children:[a.jsx("div",{ref:l,className:"lobby-canvas-viewport"}),a.jsxs("div",{className:"lobby-top-bar",children:[a.jsxs("div",{className:"lobby-badge",children:[a.jsx(Yn,{size:14,className:"text-cyan pulse-icon"}),a.jsx("span",{children:"CINE-3D SPATIAL CAROUSEL"}),a.jsxs("span",{className:"badge-movie-count",children:[x.length," TITLES"]})]}),a.jsxs("div",{className:"lobby-top-controls",children:[a.jsxs("div",{className:"lobby-size-picker",title:"Adjust 3D Movie Poster Size",children:[a.jsx("span",{className:"lobby-picker-label",children:"Card Size"}),a.jsxs("div",{className:"lobby-size-btn-group",children:[a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="compact"?"active":""}`,onClick:()=>T("compact"),title:"Small / Compact posters",children:"Small"}),a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="balanced"?"active":""}`,onClick:()=>T("balanced"),title:"Medium / Balanced posters (Default)",children:"Medium"}),a.jsx("button",{type:"button",className:`lobby-size-pill ${S==="cinematic"?"active":""}`,onClick:()=>T("cinematic"),title:"Large / Cinematic posters",children:"Large"})]})]}),a.jsxs("button",{className:"btn-secondary btn-sm",onClick:r,title:"Switch to conventional 2D Library grid",children:[a.jsx(Hm,{size:14}),a.jsx("span",{children:"2D Library Grid"})]})]})]}),y&&a.jsx("div",{className:"lobby-floating-hud",children:a.jsxs("div",{className:"hud-content-panel",children:[a.jsxs("div",{className:"hud-metadata-tags",children:[a.jsx("span",{className:"hud-badge-res",children:y.resolution||"1080P"}),y.year&&a.jsx("span",{className:"hud-badge-year",children:y.year}),a.jsx("span",{className:"hud-badge-genre",children:y.genre||"Cinema"}),y.codec&&a.jsx("span",{className:"hud-badge-codec",children:y.codec})]}),a.jsx("h2",{className:"hud-movie-title",children:y.clean_title}),a.jsxs("p",{className:"hud-instructions",children:["Drag horizontally or use ",a.jsx("strong",{children:"← / →"})," to rotate • ",a.jsx("strong",{children:"Enter"})," for details • ",a.jsx("strong",{children:"Space"})," to stream"]}),a.jsxs("div",{className:"hud-actions-row",children:[a.jsxs("button",{className:"btn-primary",onClick:()=>t(y),children:[a.jsx(un,{size:16,fill:"currentColor"}),a.jsx("span",{children:"Play Stream"})]}),a.jsxs("button",{className:"btn-secondary",onClick:()=>e(y),children:[a.jsx(ho,{size:16}),a.jsx("span",{children:"Movie Details"})]}),a.jsxs("div",{className:"hud-nav-buttons",children:[a.jsx("button",{className:"hud-arrow-btn",onClick:()=>D(-1),title:"Previous Film (Left Arrow)",children:a.jsx(fc,{size:16})}),a.jsx("button",{className:"hud-arrow-btn",onClick:()=>D(1),title:"Next Film (Right Arrow)",children:a.jsx(co,{size:16})})]})]})]})})]})}const kT=["All","Action & Adventure","Anime & Animation","Horror & Suspense","Sci-Fi & Cyber","Thriller & Mystery","Cinema & Drama"];function UT({isOpen:s,onClose:e,onSelectMovie:t,onPlayMovie:r,authFetch:l}){const[c,d]=V.useState(""),[h,p]=V.useState("All"),[m,v]=V.useState([]),[M,_]=V.useState(!1),[S,w]=V.useState([]),[T,x]=V.useState(0),y=V.useRef(null);V.useEffect(()=>{if(typeof window<"u")try{const I=JSON.parse(localStorage.getItem("streamlink_search_history")||"[]");w(Array.isArray(I)?I.slice(0,6):[])}catch{}},[]);const C=I=>{if(!I||!I.trim())return;const N=I.trim(),L=[N,...S.filter(k=>k.toLowerCase()!==N.toLowerCase())].slice(0,6);w(L);try{localStorage.setItem("streamlink_search_history",JSON.stringify(L))}catch{}};return V.useEffect(()=>{s?setTimeout(()=>{var I;return(I=y.current)==null?void 0:I.focus()},80):(d(""),x(0))},[s]),V.useEffect(()=>{if(!s)return;let I=!0;_(!0);const N=new URLSearchParams;return c.trim()&&N.set("q",c.trim()),h!=="All"&&N.set("genre",h),l(`/api/movies?${N.toString()}`).then(L=>L.json()).then(L=>{I&&(v(L.movies||[]),x(0))}).catch(()=>{}).finally(()=>{I&&_(!1)}),()=>{I=!1}},[s,c,h]),V.useEffect(()=>{if(!s)return;const I=N=>{N.key==="Escape"?e():N.key==="ArrowDown"?(N.preventDefault(),x(L=>Math.min(L+1,m.length-1))):N.key==="ArrowUp"?(N.preventDefault(),x(L=>Math.max(L-1,0))):N.key==="Enter"&&m[T]&&(C(c||m[T].clean_title),t(m[T]),e())};return window.addEventListener("keydown",I),()=>window.removeEventListener("keydown",I)},[s,m,T,c]),s?a.jsx("div",{className:"dimensional-search-overlay",onClick:e,children:a.jsxs("div",{className:"dimensional-search-window",onClick:I=>I.stopPropagation(),children:[a.jsxs("div",{className:"search-bar-wrap",children:[a.jsx(ps,{size:22,className:"search-input-icon text-cyan"}),a.jsx("input",{ref:y,type:"text",className:"spatial-search-input",placeholder:"Search by title, genre, year, resolution (e.g. 4K, Annabelle)...",value:c,onChange:I=>d(I.target.value)}),c&&a.jsx("button",{className:"search-clear-btn",onClick:()=>d(""),children:a.jsx(Wi,{size:18})}),a.jsx("div",{className:"search-shortcut-pill",children:a.jsx("span",{children:"ESC to close"})})]}),a.jsx("div",{className:"search-genres-row",children:kT.map(I=>a.jsx("button",{className:`search-genre-chip ${h===I?"active":""}`,onClick:()=>p(I),children:I},I))}),S.length>0&&!c&&a.jsxs("div",{className:"search-history-row",children:[a.jsx(pr,{size:13,className:"text-muted"}),a.jsx("span",{className:"text-dim text-xs",children:"Recent:"}),S.map((I,N)=>a.jsx("button",{className:"search-history-chip",onClick:()=>d(I),children:I},N))]}),a.jsx("div",{className:"search-results-viewport",children:M?a.jsxs("div",{className:"search-loading-state",children:[a.jsx("div",{className:"loading-pulse-ring"}),a.jsx("span",{children:"Scanning personal cinema database..."})]}):m.length>0?a.jsx("div",{className:"search-cards-grid",children:m.map((I,N)=>a.jsxs("div",{className:`search-card-3d ${N===T?"focused":""}`,onClick:()=>{C(c||I.clean_title),t(I),e()},onMouseEnter:()=>x(N),children:[a.jsxs("div",{className:"search-card-poster",children:[a.jsx("img",{src:on(`/api/movies/${I.id}/poster`),alt:I.clean_title,loading:"lazy"}),a.jsx("div",{className:"search-card-glow"})]}),a.jsxs("div",{className:"search-card-info",children:[a.jsxs("div",{className:"search-card-tags",children:[a.jsx("span",{className:"badge-pill res",children:I.resolution||"1080P"}),I.year&&a.jsx("span",{className:"badge-pill year",children:I.year}),a.jsx("span",{className:"badge-pill genre",children:I.genre||"Movie"})]}),a.jsx("h4",{className:"search-card-title",children:I.clean_title}),a.jsx("p",{className:"search-card-filename",children:I.file_name}),a.jsxs("div",{className:"search-card-play-pill",children:[a.jsx(un,{size:12,fill:"currentColor"}),a.jsx("span",{children:"Stream"})]})]})]},I.id))}):a.jsxs("div",{className:"search-empty-state",children:[a.jsx(ai,{size:40,className:"text-dim",style:{marginBottom:"12px"}}),a.jsxs("h4",{children:['No matches found for "',c,'"']}),a.jsx("p",{children:'Check spelling or try searching for broad terms like "1080p", "4k", or clearing the genre filter.'})]})}),a.jsxs("div",{className:"search-footer-hint",children:[a.jsxs("span",{children:[a.jsx(v_,{size:12})," Press ",a.jsx("strong",{children:"Enter"})," to open details"]}),a.jsxs("span",{children:["Use ",a.jsx("strong",{children:"↑ / ↓ Arrow Keys"})," to navigate"]})]})]})}):null}function FT({activeColor:s="#8B5CF6",enabled:e=!0}){return e?a.jsxs("div",{className:"ambient-cinema-backdrop","aria-hidden":"true",children:[a.jsx("div",{className:"ambient-glow-orb orb-primary",style:{background:`radial-gradient(circle, ${s}33 0%, rgba(8, 8, 12, 0) 70%)`}}),a.jsx("div",{className:"ambient-glow-orb orb-secondary",style:{background:"radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(8, 8, 12, 0) 70%)"}})]}):null}function OT(){let e=new URLSearchParams(window.location.search).get("share");if(!e){const O=window.location.pathname.match(/\/share\/([a-zA-Z0-9_-]+)/);O&&(e=O[1])}if(e)return a.jsx(Jy,{token:e});const{user:t,token:r,authFetch:l,loading:c}=Wh(),[d,h]=V.useState("home"),[p,m]=V.useState(null),[v,M]=V.useState(null),[_,S]=V.useState("D:\\Movies"),[w,T]=V.useState([]),[x,y]=V.useState(!1),[C,I]=V.useState(!1),[N,L]=V.useState(!1),[k,E]=V.useState(null),[D,G]=V.useState(()=>localStorage.getItem("streamlink_ambient_lighting")!=="false"),[H,z]=V.useState($n.currentLevel),[ie,J]=V.useState(()=>localStorage.getItem("streamlink_seen_intro")!=="true");V.useEffect(()=>$n.subscribe(O=>z(O)),[]),V.useEffect(()=>{const O=Y=>{var F;Y.key==="/"&&!["INPUT","TEXTAREA"].includes((F=document.activeElement)==null?void 0:F.tagName)&&(Y.preventDefault(),y(!0))};return window.addEventListener("keydown",O),()=>window.removeEventListener("keydown",O)},[]);const j=()=>{t&&l&&l("/api/movies?sort=recent").then(O=>O.json()).then(O=>{O.movies&&T(O.movies)}).catch(()=>{})};V.useEffect(()=>{j()},[t]),V.useEffect(()=>{t&&l&&l("/api/user/profiles").then(O=>O.json()).then(O=>{if(O.profiles&&O.profiles.length>0){const Y=localStorage.getItem("streamlink_active_profile_id"),F=O.profiles.find(K=>String(K.id)===Y)||O.profiles[0];E(F)}}).catch(()=>{})},[t]),V.useEffect(()=>{(t==null?void 0:t.role)==="admin"&&l&&l("/api/admin/settings").then(O=>O.json()).then(O=>{var Y;(Y=O.settings)!=null&&Y.library_folder&&S(O.settings.library_folder)}).catch(()=>{})},[t]);const $=()=>{G(O=>{const Y=!O;return localStorage.setItem("streamlink_ambient_lighting",String(Y)),Y})},[te,q]=V.useState(typeof navigator<"u"?navigator.onLine:!0);V.useEffect(()=>{const O=()=>q(!0),Y=()=>q(!1);return window.addEventListener("online",O),window.addEventListener("offline",Y),()=>{window.removeEventListener("online",O),window.removeEventListener("offline",Y)}},[]);const ee=O=>{E(O),localStorage.setItem("streamlink_active_profile_id",String(O.id))};return c?a.jsx(iS,{message:"Connecting to StreamLink 2.0 Media Server...",onRetry:()=>window.location.reload()}):t?ie?a.jsx(DT,{onEnter:()=>{J(!1),localStorage.setItem("streamlink_seen_intro","true"),h("cine3d")},onSkip:()=>{J(!1),localStorage.setItem("streamlink_seen_intro","true")}}):v?a.jsx(dx,{movie:v,onBack:()=>M(null),token:r,authFetch:l}):a.jsxs("div",{className:"app-shell-sidebar-layout",children:[!te&&a.jsxs("div",{className:"obsidian-offline-banner",children:[a.jsx("span",{className:"offline-badge",children:"OFFLINE"}),a.jsx(Fy,{size:14}),a.jsx("span",{children:"Windows Media Server is offline. Cached library and interface are available. Streaming will resume when reconnected."})]}),a.jsx(rS,{}),a.jsx(FT,{enabled:D}),a.jsx(Gy,{currentView:d,setCurrentView:h,onOpenSearch:()=>y(!0),onOpenProfiles:()=>I(!0),onOpenQuality:()=>L(!0),currentProfile:k,qualityLevel:H}),a.jsxs("main",{className:"main-content-scrollable",children:[d==="home"&&a.jsx(Wy,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l,onNavigateLibrary:()=>h("library"),onOpenFolderPicker:()=>h("folder"),onNavigateCine3D:()=>h("cine3d")}),d==="cine3d"&&a.jsx(IT,{movies:w,onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),onSwitchTo2D:()=>h("library")}),d==="library"&&a.jsx(Xy,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l,onOpenFolderPicker:()=>h("folder"),onNavigateCine3D:()=>h("cine3d")}),d==="folder-sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx($y,{authFetch:l}),d==="folder"&&(t==null?void 0:t.role)==="admin"&&a.jsx(qy,{authFetch:l,onScanSuccess:O=>{S(O),j()},onViewLibrary:()=>h("library")}),d==="sharing"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Yy,{authFetch:l}),d==="favorites"&&a.jsx(Ky,{onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l}),d==="dashboard"&&(t==null?void 0:t.role)==="admin"&&a.jsx(Zy,{authFetch:l,onOpenFolderPicker:()=>h("folder"),onOpenShareModal:()=>h("sharing")})]}),p&&a.jsx(hx,{movie:p,onClose:()=>m(null),onPlay:O=>{m(null),M(O)},onToggleFavorite:async O=>{try{const F=await(await l(`/api/user/favorites/${O}`,{method:"POST"})).json();m(K=>K?{...K,is_favorite:F.favorited?1:0}:null),j()}catch{}},onRemoveMovie:async O=>{if(window.confirm(`Remove "${O.clean_title}" from your library?

The original video file will remain untouched on your computer.`))try{await l(`/api/movies/${O.id}/remove`,{method:"POST"}),m(null),j()}catch{}},onDeleteFile:async O=>{if(window.confirm(`PERMANENT DELETION WARNING:
Are you sure you want to permanently delete "${O.file_name}" from your hard drive?

This cannot be undone.`))try{await l(`/api/movies/${O.id}/delete-file`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({confirmPermanent:!0,confirmTitle:O.clean_title})}),m(null),j()}catch{}},authFetch:l}),a.jsx(UT,{isOpen:x,onClose:()=>y(!1),onSelectMovie:O=>m(O),onPlayMovie:O=>M(O),authFetch:l}),a.jsx(eS,{isOpen:C,onClose:()=>I(!1),authFetch:l,currentProfile:k,onProfileChange:ee}),a.jsx(nS,{isOpen:N,onClose:()=>L(!1),ambientEnabled:D,onToggleAmbient:$})]}):a.jsx(Qy,{})}"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/sw.js").then(s=>{console.log("[PWA] Obsidian Cinema ServiceWorker active: ",s.scope)}).catch(s=>{console.warn("[PWA] ServiceWorker registration bypassed: ",s)})});q0.createRoot(document.getElementById("root")).render(a.jsx(B0.StrictMode,{children:a.jsx(Hy,{children:a.jsx(OT,{})})}));
