var e=Object.create,t=Object.defineProperty,n=Object.getOwnPropertyDescriptor,r=Object.getOwnPropertyNames,i=Object.getPrototypeOf,a=Object.prototype.hasOwnProperty,o=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),s=(e,i,o,s)=>{if(i&&typeof i==`object`||typeof i==`function`)for(var c=r(i),l=0,u=c.length,d;l<u;l++)d=c[l],!a.call(e,d)&&d!==o&&t(e,d,{get:(e=>i[e]).bind(null,d),enumerable:!(s=n(i,d))||s.enumerable});return e},c=(n,r,a)=>(a=n==null?{}:e(i(n)),s(r||!n||!n.__esModule?t(a,`default`,{value:n,enumerable:!0}):a,n));(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var l=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.portal`),r=Symbol.for(`react.fragment`),i=Symbol.for(`react.strict_mode`),a=Symbol.for(`react.profiler`),o=Symbol.for(`react.consumer`),s=Symbol.for(`react.context`),c=Symbol.for(`react.forward_ref`),l=Symbol.for(`react.suspense`),u=Symbol.for(`react.memo`),d=Symbol.for(`react.lazy`),f=Symbol.for(`react.activity`),p=Symbol.iterator;function m(e){return typeof e!=`object`||!e?null:(e=p&&e[p]||e[`@@iterator`],typeof e==`function`?e:null)}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},g=Object.assign,_={};function v(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}v.prototype.isReactComponent={},v.prototype.setState=function(e,t){if(typeof e!=`object`&&typeof e!=`function`&&e!=null)throw Error(`takes an object of state variables to update or a function which returns an object of state variables.`);this.updater.enqueueSetState(this,e,t,`setState`)},v.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,`forceUpdate`)};function y(){}y.prototype=v.prototype;function b(e,t,n){this.props=e,this.context=t,this.refs=_,this.updater=n||h}var x=b.prototype=new y;x.constructor=b,g(x,v.prototype),x.isPureReactComponent=!0;var S=Array.isArray;function C(){}var w={H:null,A:null,T:null,S:null},T=Object.prototype.hasOwnProperty;function ee(e,n,r){var i=r.ref;return{$$typeof:t,type:e,key:n,ref:i===void 0?null:i,props:r}}function te(e,t){return ee(e.type,t,e.props)}function E(e){return typeof e==`object`&&!!e&&e.$$typeof===t}function ne(e){var t={"=":`=0`,":":`=2`};return`$`+e.replace(/[=:]/g,function(e){return t[e]})}var re=/\/+/g;function ie(e,t){return typeof e==`object`&&e&&e.key!=null?ne(``+e.key):t.toString(36)}function ae(e){switch(e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason;default:switch(typeof e.status==`string`?e.then(C,C):(e.status=`pending`,e.then(function(t){e.status===`pending`&&(e.status=`fulfilled`,e.value=t)},function(t){e.status===`pending`&&(e.status=`rejected`,e.reason=t)})),e.status){case`fulfilled`:return e.value;case`rejected`:throw e.reason}}throw e}function oe(e,r,i,a,o){var s=typeof e;(s===`undefined`||s===`boolean`)&&(e=null);var c=!1;if(e===null)c=!0;else switch(s){case`bigint`:case`string`:case`number`:c=!0;break;case`object`:switch(e.$$typeof){case t:case n:c=!0;break;case d:return c=e._init,oe(c(e._payload),r,i,a,o)}}if(c)return o=o(e),c=a===``?`.`+ie(e,0):a,S(o)?(i=``,c!=null&&(i=c.replace(re,`$&/`)+`/`),oe(o,r,i,``,function(e){return e})):o!=null&&(E(o)&&(o=te(o,i+(o.key==null||e&&e.key===o.key?``:(``+o.key).replace(re,`$&/`)+`/`)+c)),r.push(o)),1;c=0;var l=a===``?`.`:a+`:`;if(S(e))for(var u=0;u<e.length;u++)a=e[u],s=l+ie(a,u),c+=oe(a,r,i,s,o);else if(u=m(e),typeof u==`function`)for(e=u.call(e),u=0;!(a=e.next()).done;)a=a.value,s=l+ie(a,u++),c+=oe(a,r,i,s,o);else if(s===`object`){if(typeof e.then==`function`)return oe(ae(e),r,i,a,o);throw r=String(e),Error(`Objects are not valid as a React child (found: `+(r===`[object Object]`?`object with keys {`+Object.keys(e).join(`, `)+`}`:r)+`). If you meant to render a collection of children, use an array instead.`)}return c}function se(e,t,n){if(e==null)return e;var r=[],i=0;return oe(e,r,``,``,function(e){return t.call(n,e,i++)}),r}function ce(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(t){(e._status===0||e._status===-1)&&(e._status=1,e._result=t)},function(t){(e._status===0||e._status===-1)&&(e._status=2,e._result=t)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var D=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},O={map:se,forEach:function(e,t,n){se(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return se(e,function(){t++}),t},toArray:function(e){return se(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error(`React.Children.only expected to receive a single React element child.`);return e}};e.Activity=f,e.Children=O,e.Component=v,e.Fragment=r,e.Profiler=a,e.PureComponent=b,e.StrictMode=i,e.Suspense=l,e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=w,e.__COMPILER_RUNTIME={__proto__:null,c:function(e){return w.H.useMemoCache(e)}},e.cache=function(e){return function(){return e.apply(null,arguments)}},e.cacheSignal=function(){return null},e.cloneElement=function(e,t,n){if(e==null)throw Error(`The argument must be a React element, but you passed `+e+`.`);var r=g({},e.props),i=e.key;if(t!=null)for(a in t.key!==void 0&&(i=``+t.key),t)!T.call(t,a)||a===`key`||a===`__self`||a===`__source`||a===`ref`&&t.ref===void 0||(r[a]=t[a]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var o=Array(a),s=0;s<a;s++)o[s]=arguments[s+2];r.children=o}return ee(e.type,i,r)},e.createContext=function(e){return e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider=e,e.Consumer={$$typeof:o,_context:e},e},e.createElement=function(e,t,n){var r,i={},a=null;if(t!=null)for(r in t.key!==void 0&&(a=``+t.key),t)T.call(t,r)&&r!==`key`&&r!==`__self`&&r!==`__source`&&(i[r]=t[r]);var o=arguments.length-2;if(o===1)i.children=n;else if(1<o){for(var s=Array(o),c=0;c<o;c++)s[c]=arguments[c+2];i.children=s}if(e&&e.defaultProps)for(r in o=e.defaultProps,o)i[r]===void 0&&(i[r]=o[r]);return ee(e,a,i)},e.createRef=function(){return{current:null}},e.forwardRef=function(e){return{$$typeof:c,render:e}},e.isValidElement=E,e.lazy=function(e){return{$$typeof:d,_payload:{_status:-1,_result:e},_init:ce}},e.memo=function(e,t){return{$$typeof:u,type:e,compare:t===void 0?null:t}},e.startTransition=function(e){var t=w.T,n={};w.T=n;try{var r=e(),i=w.S;i!==null&&i(n,r),typeof r==`object`&&r&&typeof r.then==`function`&&r.then(C,D)}catch(e){D(e)}finally{t!==null&&n.types!==null&&(t.types=n.types),w.T=t}},e.unstable_useCacheRefresh=function(){return w.H.useCacheRefresh()},e.use=function(e){return w.H.use(e)},e.useActionState=function(e,t,n){return w.H.useActionState(e,t,n)},e.useCallback=function(e,t){return w.H.useCallback(e,t)},e.useContext=function(e){return w.H.useContext(e)},e.useDebugValue=function(){},e.useDeferredValue=function(e,t){return w.H.useDeferredValue(e,t)},e.useEffect=function(e,t){return w.H.useEffect(e,t)},e.useEffectEvent=function(e){return w.H.useEffectEvent(e)},e.useId=function(){return w.H.useId()},e.useImperativeHandle=function(e,t,n){return w.H.useImperativeHandle(e,t,n)},e.useInsertionEffect=function(e,t){return w.H.useInsertionEffect(e,t)},e.useLayoutEffect=function(e,t){return w.H.useLayoutEffect(e,t)},e.useMemo=function(e,t){return w.H.useMemo(e,t)},e.useOptimistic=function(e,t){return w.H.useOptimistic(e,t)},e.useReducer=function(e,t,n){return w.H.useReducer(e,t,n)},e.useRef=function(e){return w.H.useRef(e)},e.useState=function(e){return w.H.useState(e)},e.useSyncExternalStore=function(e,t,n){return w.H.useSyncExternalStore(e,t,n)},e.useTransition=function(){return w.H.useTransition()},e.version=`19.2.4`})),u=o(((e,t)=>{t.exports=l()})),d=o((e=>{function t(e,t){var n=e.length;e.push(t);a:for(;0<n;){var r=n-1>>>1,a=e[r];if(0<i(a,t))e[r]=t,e[n]=a,n=r;else break a}}function n(e){return e.length===0?null:e[0]}function r(e){if(e.length===0)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;a:for(var r=0,a=e.length,o=a>>>1;r<o;){var s=2*(r+1)-1,c=e[s],l=s+1,u=e[l];if(0>i(c,n))l<a&&0>i(u,c)?(e[r]=u,e[l]=n,r=l):(e[r]=c,e[s]=n,r=s);else if(l<a&&0>i(u,n))e[r]=u,e[l]=n,r=l;else break a}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return n===0?e.id-t.id:n}if(e.unstable_now=void 0,typeof performance==`object`&&typeof performance.now==`function`){var a=performance;e.unstable_now=function(){return a.now()}}else{var o=Date,s=o.now();e.unstable_now=function(){return o.now()-s}}var c=[],l=[],u=1,d=null,f=3,p=!1,m=!1,h=!1,g=!1,_=typeof setTimeout==`function`?setTimeout:null,v=typeof clearTimeout==`function`?clearTimeout:null,y=typeof setImmediate<`u`?setImmediate:null;function b(e){for(var i=n(l);i!==null;){if(i.callback===null)r(l);else if(i.startTime<=e)r(l),i.sortIndex=i.expirationTime,t(c,i);else break;i=n(l)}}function x(e){if(h=!1,b(e),!m)if(n(c)!==null)m=!0,S||(S=!0,E());else{var t=n(l);t!==null&&ie(x,t.startTime-e)}}var S=!1,C=-1,w=5,T=-1;function ee(){return g?!0:!(e.unstable_now()-T<w)}function te(){if(g=!1,S){var t=e.unstable_now();T=t;var i=!0;try{a:{m=!1,h&&(h=!1,v(C),C=-1),p=!0;var a=f;try{b:{for(b(t),d=n(c);d!==null&&!(d.expirationTime>t&&ee());){var o=d.callback;if(typeof o==`function`){d.callback=null,f=d.priorityLevel;var s=o(d.expirationTime<=t);if(t=e.unstable_now(),typeof s==`function`){d.callback=s,b(t),i=!0;break b}d===n(c)&&r(c),b(t)}else r(c);d=n(c)}if(d!==null)i=!0;else{var u=n(l);u!==null&&ie(x,u.startTime-t),i=!1}}break a}finally{d=null,f=a,p=!1}i=void 0}}finally{i?E():S=!1}}}var E;if(typeof y==`function`)E=function(){y(te)};else if(typeof MessageChannel<`u`){var ne=new MessageChannel,re=ne.port2;ne.port1.onmessage=te,E=function(){re.postMessage(null)}}else E=function(){_(te,0)};function ie(t,n){C=_(function(){t(e.unstable_now())},n)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(e){e.callback=null},e.unstable_forceFrameRate=function(e){0>e||125<e?console.error(`forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported`):w=0<e?Math.floor(1e3/e):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_next=function(e){switch(f){case 1:case 2:case 3:var t=3;break;default:t=f}var n=f;f=t;try{return e()}finally{f=n}},e.unstable_requestPaint=function(){g=!0},e.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=f;f=e;try{return t()}finally{f=n}},e.unstable_scheduleCallback=function(r,i,a){var o=e.unstable_now();switch(typeof a==`object`&&a?(a=a.delay,a=typeof a==`number`&&0<a?o+a:o):a=o,r){case 1:var s=-1;break;case 2:s=250;break;case 5:s=1073741823;break;case 4:s=1e4;break;default:s=5e3}return s=a+s,r={id:u++,callback:i,priorityLevel:r,startTime:a,expirationTime:s,sortIndex:-1},a>o?(r.sortIndex=a,t(l,r),n(c)===null&&r===n(l)&&(h?(v(C),C=-1):h=!0,ie(x,a-o))):(r.sortIndex=s,t(c,r),m||p||(m=!0,S||(S=!0,E()))),r},e.unstable_shouldYield=ee,e.unstable_wrapCallback=function(e){var t=f;return function(){var n=f;f=t;try{return e.apply(this,arguments)}finally{f=n}}}})),f=o(((e,t)=>{t.exports=d()})),p=o((e=>{var t=u();function n(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function r(){}var i={d:{f:r,r:function(){throw Error(n(522))},D:r,C:r,L:r,m:r,X:r,S:r,M:r},p:0,findDOMNode:null},a=Symbol.for(`react.portal`);function o(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:a,key:r==null?null:``+r,children:e,containerInfo:t,implementation:n}}var s=t.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function c(e,t){if(e===`font`)return``;if(typeof t==`string`)return t===`use-credentials`?t:``}e.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,e.createPortal=function(e,t){var r=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)throw Error(n(299));return o(e,t,null,r)},e.flushSync=function(e){var t=s.T,n=i.p;try{if(s.T=null,i.p=2,e)return e()}finally{s.T=t,i.p=n,i.d.f()}},e.preconnect=function(e,t){typeof e==`string`&&(t?(t=t.crossOrigin,t=typeof t==`string`?t===`use-credentials`?t:``:void 0):t=null,i.d.C(e,t))},e.prefetchDNS=function(e){typeof e==`string`&&i.d.D(e)},e.preinit=function(e,t){if(typeof e==`string`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin),a=typeof t.integrity==`string`?t.integrity:void 0,o=typeof t.fetchPriority==`string`?t.fetchPriority:void 0;n===`style`?i.d.S(e,typeof t.precedence==`string`?t.precedence:void 0,{crossOrigin:r,integrity:a,fetchPriority:o}):n===`script`&&i.d.X(e,{crossOrigin:r,integrity:a,fetchPriority:o,nonce:typeof t.nonce==`string`?t.nonce:void 0})}},e.preinitModule=function(e,t){if(typeof e==`string`)if(typeof t==`object`&&t){if(t.as==null||t.as===`script`){var n=c(t.as,t.crossOrigin);i.d.M(e,{crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0})}}else t??i.d.M(e)},e.preload=function(e,t){if(typeof e==`string`&&typeof t==`object`&&t&&typeof t.as==`string`){var n=t.as,r=c(n,t.crossOrigin);i.d.L(e,n,{crossOrigin:r,integrity:typeof t.integrity==`string`?t.integrity:void 0,nonce:typeof t.nonce==`string`?t.nonce:void 0,type:typeof t.type==`string`?t.type:void 0,fetchPriority:typeof t.fetchPriority==`string`?t.fetchPriority:void 0,referrerPolicy:typeof t.referrerPolicy==`string`?t.referrerPolicy:void 0,imageSrcSet:typeof t.imageSrcSet==`string`?t.imageSrcSet:void 0,imageSizes:typeof t.imageSizes==`string`?t.imageSizes:void 0,media:typeof t.media==`string`?t.media:void 0})}},e.preloadModule=function(e,t){if(typeof e==`string`)if(t){var n=c(t.as,t.crossOrigin);i.d.m(e,{as:typeof t.as==`string`&&t.as!==`script`?t.as:void 0,crossOrigin:n,integrity:typeof t.integrity==`string`?t.integrity:void 0})}else i.d.m(e)},e.requestFormReset=function(e){i.d.r(e)},e.unstable_batchedUpdates=function(e,t){return e(t)},e.useFormState=function(e,t,n){return s.H.useFormState(e,t,n)},e.useFormStatus=function(){return s.H.useHostTransitionStatus()},e.version=`19.2.4`})),m=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=p()})),h=o((e=>{var t=f(),n=u(),r=m();function i(e){var t=`https://react.dev/errors/`+e;if(1<arguments.length){t+=`?args[]=`+encodeURIComponent(arguments[1]);for(var n=2;n<arguments.length;n++)t+=`&args[]=`+encodeURIComponent(arguments[n])}return`Minified React error #`+e+`; visit `+t+` for the full message or use the non-minified dev environment for full errors and additional helpful warnings.`}function a(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function o(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function s(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function c(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function l(e){if(o(e)!==e)throw Error(i(188))}function d(e){var t=e.alternate;if(!t){if(t=o(e),t===null)throw Error(i(188));return t===e?e:null}for(var n=e,r=t;;){var a=n.return;if(a===null)break;var s=a.alternate;if(s===null){if(r=a.return,r!==null){n=r;continue}break}if(a.child===s.child){for(s=a.child;s;){if(s===n)return l(a),e;if(s===r)return l(a),t;s=s.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=s;else{for(var c=!1,u=a.child;u;){if(u===n){c=!0,n=a,r=s;break}if(u===r){c=!0,r=a,n=s;break}u=u.sibling}if(!c){for(u=s.child;u;){if(u===n){c=!0,n=s,r=a;break}if(u===r){c=!0,r=s,n=a;break}u=u.sibling}if(!c)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(n.tag!==3)throw Error(i(188));return n.stateNode.current===n?e:t}function p(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=p(e),t!==null)return t;e=e.sibling}return null}var h=Object.assign,g=Symbol.for(`react.element`),_=Symbol.for(`react.transitional.element`),v=Symbol.for(`react.portal`),y=Symbol.for(`react.fragment`),b=Symbol.for(`react.strict_mode`),x=Symbol.for(`react.profiler`),S=Symbol.for(`react.consumer`),C=Symbol.for(`react.context`),w=Symbol.for(`react.forward_ref`),T=Symbol.for(`react.suspense`),ee=Symbol.for(`react.suspense_list`),te=Symbol.for(`react.memo`),E=Symbol.for(`react.lazy`),ne=Symbol.for(`react.activity`),re=Symbol.for(`react.memo_cache_sentinel`),ie=Symbol.iterator;function ae(e){return typeof e!=`object`||!e?null:(e=ie&&e[ie]||e[`@@iterator`],typeof e==`function`?e:null)}var oe=Symbol.for(`react.client.reference`);function se(e){if(e==null)return null;if(typeof e==`function`)return e.$$typeof===oe?null:e.displayName||e.name||null;if(typeof e==`string`)return e;switch(e){case y:return`Fragment`;case x:return`Profiler`;case b:return`StrictMode`;case T:return`Suspense`;case ee:return`SuspenseList`;case ne:return`Activity`}if(typeof e==`object`)switch(e.$$typeof){case v:return`Portal`;case C:return e.displayName||`Context`;case S:return(e._context.displayName||`Context`)+`.Consumer`;case w:var t=e.render;return e=e.displayName,e||=(e=t.displayName||t.name||``,e===``?`ForwardRef`:`ForwardRef(`+e+`)`),e;case te:return t=e.displayName||null,t===null?se(e.type)||`Memo`:t;case E:t=e._payload,e=e._init;try{return se(e(t))}catch{}}return null}var ce=Array.isArray,D=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,O=r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,le={pending:!1,data:null,method:null,action:null},ue=[],de=-1;function fe(e){return{current:e}}function pe(e){0>de||(e.current=ue[de],ue[de]=null,de--)}function k(e,t){de++,ue[de]=e.current,e.current=t}var me=fe(null),he=fe(null),ge=fe(null),_e=fe(null);function ve(e,t){switch(k(ge,t),k(he,e),k(me,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Vd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Vd(t),e=Hd(t,e);else switch(e){case`svg`:e=1;break;case`math`:e=2;break;default:e=0}}pe(me),k(me,e)}function ye(){pe(me),pe(he),pe(ge)}function be(e){e.memoizedState!==null&&k(_e,e);var t=me.current,n=Hd(t,e.type);t!==n&&(k(he,e),k(me,n))}function xe(e){he.current===e&&(pe(me),pe(he)),_e.current===e&&(pe(_e),Qf._currentValue=le)}var Se,Ce;function we(e){if(Se===void 0)try{throw Error()}catch(e){var t=e.stack.trim().match(/\n( *(at )?)/);Se=t&&t[1]||``,Ce=-1<e.stack.indexOf(`
    at`)?` (<anonymous>)`:-1<e.stack.indexOf(`@`)?`@unknown:0:0`:``}return`
`+Se+e+Ce}var Te=!1;function Ee(e,t){if(!e||Te)return``;Te=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var r={DetermineComponentFrameRoot:function(){try{if(t){var n=function(){throw Error()};if(Object.defineProperty(n.prototype,`props`,{set:function(){throw Error()}}),typeof Reflect==`object`&&Reflect.construct){try{Reflect.construct(n,[])}catch(e){var r=e}Reflect.construct(e,[],n)}else{try{n.call()}catch(e){r=e}e.call(n.prototype)}}else{try{throw Error()}catch(e){r=e}(n=e())&&typeof n.catch==`function`&&n.catch(function(){})}}catch(e){if(e&&r&&typeof e.stack==`string`)return[e.stack,r.stack]}return[null,null]}};r.DetermineComponentFrameRoot.displayName=`DetermineComponentFrameRoot`;var i=Object.getOwnPropertyDescriptor(r.DetermineComponentFrameRoot,`name`);i&&i.configurable&&Object.defineProperty(r.DetermineComponentFrameRoot,`name`,{value:`DetermineComponentFrameRoot`});var a=r.DetermineComponentFrameRoot(),o=a[0],s=a[1];if(o&&s){var c=o.split(`
`),l=s.split(`
`);for(i=r=0;r<c.length&&!c[r].includes(`DetermineComponentFrameRoot`);)r++;for(;i<l.length&&!l[i].includes(`DetermineComponentFrameRoot`);)i++;if(r===c.length||i===l.length)for(r=c.length-1,i=l.length-1;1<=r&&0<=i&&c[r]!==l[i];)i--;for(;1<=r&&0<=i;r--,i--)if(c[r]!==l[i]){if(r!==1||i!==1)do if(r--,i--,0>i||c[r]!==l[i]){var u=`
`+c[r].replace(` at new `,` at `);return e.displayName&&u.includes(`<anonymous>`)&&(u=u.replace(`<anonymous>`,e.displayName)),u}while(1<=r&&0<=i);break}}}finally{Te=!1,Error.prepareStackTrace=n}return(n=e?e.displayName||e.name:``)?we(n):``}function De(e,t){switch(e.tag){case 26:case 27:case 5:return we(e.type);case 16:return we(`Lazy`);case 13:return e.child!==t&&t!==null?we(`Suspense Fallback`):we(`Suspense`);case 19:return we(`SuspenseList`);case 0:case 15:return Ee(e.type,!1);case 11:return Ee(e.type.render,!1);case 1:return Ee(e.type,!0);case 31:return we(`Activity`);default:return``}}function Oe(e){try{var t=``,n=null;do t+=De(e,n),n=e,e=e.return;while(e);return t}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}var ke=Object.prototype.hasOwnProperty,Ae=t.unstable_scheduleCallback,je=t.unstable_cancelCallback,Me=t.unstable_shouldYield,Ne=t.unstable_requestPaint,Pe=t.unstable_now,Fe=t.unstable_getCurrentPriorityLevel,Ie=t.unstable_ImmediatePriority,Le=t.unstable_UserBlockingPriority,Re=t.unstable_NormalPriority,ze=t.unstable_LowPriority,Be=t.unstable_IdlePriority,A=t.log,Ve=t.unstable_setDisableYieldValue,He=null,Ue=null;function We(e){if(typeof A==`function`&&Ve(e),Ue&&typeof Ue.setStrictMode==`function`)try{Ue.setStrictMode(He,e)}catch{}}var Ge=Math.clz32?Math.clz32:Je,Ke=Math.log,qe=Math.LN2;function Je(e){return e>>>=0,e===0?32:31-(Ke(e)/qe|0)|0}var Ye=256,Xe=262144,Ze=4194304;function Qe(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function $e(e,t,n){var r=e.pendingLanes;if(r===0)return 0;var i=0,a=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=r&134217727;return s===0?(s=r&~a,s===0?o===0?n||(n=r&~e,n!==0&&(i=Qe(n))):i=Qe(o):i=Qe(s)):(r=s&~a,r===0?(o&=s,o===0?n||(n=s&~e,n!==0&&(i=Qe(n))):i=Qe(o)):i=Qe(r)),i===0?0:t!==0&&t!==i&&(t&a)===0&&(a=i&-i,n=t&-t,a>=n||a===32&&n&4194048)?t:i}function et(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function tt(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function nt(){var e=Ze;return Ze<<=1,!(Ze&62914560)&&(Ze=4194304),e}function rt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function it(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function at(e,t,n,r,i,a){var o=e.pendingLanes;e.pendingLanes=n,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=n,e.entangledLanes&=n,e.errorRecoveryDisabledLanes&=n,e.shellSuspendCounter=0;var s=e.entanglements,c=e.expirationTimes,l=e.hiddenUpdates;for(n=o&~n;0<n;){var u=31-Ge(n),d=1<<u;s[u]=0,c[u]=-1;var f=l[u];if(f!==null)for(l[u]=null,u=0;u<f.length;u++){var p=f[u];p!==null&&(p.lane&=-536870913)}n&=~d}r!==0&&j(e,r,0),a!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=a&~(o&~t))}function j(e,t,n){e.pendingLanes|=t,e.suspendedLanes&=~t;var r=31-Ge(t);e.entangledLanes|=t,e.entanglements[r]=e.entanglements[r]|1073741824|n&261930}function ot(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Ge(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}function st(e,t){var n=t&-t;return n=n&42?1:ct(n),(n&(e.suspendedLanes|t))===0?n:0}function ct(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function lt(e){return e&=-e,2<e?8<e?e&134217727?32:268435456:8:2}function ut(){var e=O.p;return e===0?(e=window.event,e===void 0?32:mp(e.type)):e}function dt(e,t){var n=O.p;try{return O.p=e,t()}finally{O.p=n}}var ft=Math.random().toString(36).slice(2),pt=`__reactFiber$`+ft,mt=`__reactProps$`+ft,ht=`__reactContainer$`+ft,gt=`__reactEvents$`+ft,_t=`__reactListeners$`+ft,vt=`__reactHandles$`+ft,yt=`__reactResources$`+ft,bt=`__reactMarker$`+ft;function xt(e){delete e[pt],delete e[mt],delete e[gt],delete e[_t],delete e[vt]}function St(e){var t=e[pt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ht]||n[pt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=df(e);e!==null;){if(n=e[pt])return n;e=df(e)}return t}e=n,n=e.parentNode}return null}function Ct(e){if(e=e[pt]||e[ht]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function wt(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(i(33))}function Tt(e){var t=e[yt];return t||=e[yt]={hoistableStyles:new Map,hoistableScripts:new Map},t}function Et(e){e[bt]=!0}var Dt=new Set,Ot={};function kt(e,t){At(e,t),At(e+`Capture`,t)}function At(e,t){for(Ot[e]=t,e=0;e<t.length;e++)Dt.add(t[e])}var jt=RegExp(`^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$`),Mt={},Nt={};function Pt(e){return ke.call(Nt,e)?!0:ke.call(Mt,e)?!1:jt.test(e)?Nt[e]=!0:(Mt[e]=!0,!1)}function Ft(e,t,n){if(Pt(t))if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:e.removeAttribute(t);return;case`boolean`:var r=t.toLowerCase().slice(0,5);if(r!==`data-`&&r!==`aria-`){e.removeAttribute(t);return}}e.setAttribute(t,``+n)}}function It(e,t,n){if(n===null)e.removeAttribute(t);else{switch(typeof n){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(t);return}e.setAttribute(t,``+n)}}function Lt(e,t,n,r){if(r===null)e.removeAttribute(n);else{switch(typeof r){case`undefined`:case`function`:case`symbol`:case`boolean`:e.removeAttribute(n);return}e.setAttributeNS(t,n,``+r)}}function Rt(e){switch(typeof e){case`bigint`:case`boolean`:case`number`:case`string`:case`undefined`:return e;case`object`:return e;default:return``}}function zt(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()===`input`&&(t===`checkbox`||t===`radio`)}function Bt(e,t,n){var r=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&r!==void 0&&typeof r.get==`function`&&typeof r.set==`function`){var i=r.get,a=r.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(e){n=``+e,a.call(this,e)}}),Object.defineProperty(e,t,{enumerable:r.enumerable}),{getValue:function(){return n},setValue:function(e){n=``+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Vt(e){if(!e._valueTracker){var t=zt(e)?`checked`:`value`;e._valueTracker=Bt(e,t,``+e[t])}}function Ht(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r=``;return e&&(r=zt(e)?e.checked?`true`:`false`:e.value),e=r,e===n?!1:(t.setValue(e),!0)}function Ut(e){if(e||=typeof document<`u`?document:void 0,e===void 0)return null;try{return e.activeElement||e.body}catch{return e.body}}var M=/[\n"\\]/g;function Wt(e){return e.replace(M,function(e){return`\\`+e.charCodeAt(0).toString(16)+` `})}function N(e,t,n,r,i,a,o,s){e.name=``,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`?e.type=o:e.removeAttribute(`type`),t==null?o!==`submit`&&o!==`reset`||e.removeAttribute(`value`):o===`number`?(t===0&&e.value===``||e.value!=t)&&(e.value=``+Rt(t)):e.value!==``+Rt(t)&&(e.value=``+Rt(t)),t==null?n==null?r!=null&&e.removeAttribute(`value`):P(e,o,Rt(n)):P(e,o,Rt(t)),i==null&&a!=null&&(e.defaultChecked=!!a),i!=null&&(e.checked=i&&typeof i!=`function`&&typeof i!=`symbol`),s!=null&&typeof s!=`function`&&typeof s!=`symbol`&&typeof s!=`boolean`?e.name=``+Rt(s):e.removeAttribute(`name`)}function Gt(e,t,n,r,i,a,o,s){if(a!=null&&typeof a!=`function`&&typeof a!=`symbol`&&typeof a!=`boolean`&&(e.type=a),t!=null||n!=null){if(!(a!==`submit`&&a!==`reset`||t!=null)){Vt(e);return}n=n==null?``:``+Rt(n),t=t==null?n:``+Rt(t),s||t===e.value||(e.value=t),e.defaultValue=t}r??=i,r=typeof r!=`function`&&typeof r!=`symbol`&&!!r,e.checked=s?e.checked:!!r,e.defaultChecked=!!r,o!=null&&typeof o!=`function`&&typeof o!=`symbol`&&typeof o!=`boolean`&&(e.name=o),Vt(e)}function P(e,t,n){t===`number`&&Ut(e.ownerDocument)===e||e.defaultValue===``+n||(e.defaultValue=``+n)}function Kt(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t[`$`+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty(`$`+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=``+Rt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function qt(e,t,n){if(t!=null&&(t=``+Rt(t),t!==e.value&&(e.value=t),n==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=n==null?``:``+Rt(n)}function Jt(e,t,n,r){if(t==null){if(r!=null){if(n!=null)throw Error(i(92));if(ce(r)){if(1<r.length)throw Error(i(93));r=r[0]}n=r}n??=``,t=n}n=Rt(t),e.defaultValue=n,r=e.textContent,r===n&&r!==``&&r!==null&&(e.value=r),Vt(e)}function Yt(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Xt=new Set(`animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp`.split(` `));function Zt(e,t,n){var r=t.indexOf(`--`)===0;n==null||typeof n==`boolean`||n===``?r?e.setProperty(t,``):t===`float`?e.cssFloat=``:e[t]=``:r?e.setProperty(t,n):typeof n!=`number`||n===0||Xt.has(t)?t===`float`?e.cssFloat=n:e[t]=(``+n).trim():e[t]=n+`px`}function Qt(e,t,n){if(t!=null&&typeof t!=`object`)throw Error(i(62));if(e=e.style,n!=null){for(var r in n)!n.hasOwnProperty(r)||t!=null&&t.hasOwnProperty(r)||(r.indexOf(`--`)===0?e.setProperty(r,``):r===`float`?e.cssFloat=``:e[r]=``);for(var a in t)r=t[a],t.hasOwnProperty(a)&&n[a]!==r&&Zt(e,a,r)}else for(var o in t)t.hasOwnProperty(o)&&Zt(e,o,t[o])}function $t(e){if(e.indexOf(`-`)===-1)return!1;switch(e){case`annotation-xml`:case`color-profile`:case`font-face`:case`font-face-src`:case`font-face-uri`:case`font-face-format`:case`font-face-name`:case`missing-glyph`:return!1;default:return!0}}var en=new Map([[`acceptCharset`,`accept-charset`],[`htmlFor`,`for`],[`httpEquiv`,`http-equiv`],[`crossOrigin`,`crossorigin`],[`accentHeight`,`accent-height`],[`alignmentBaseline`,`alignment-baseline`],[`arabicForm`,`arabic-form`],[`baselineShift`,`baseline-shift`],[`capHeight`,`cap-height`],[`clipPath`,`clip-path`],[`clipRule`,`clip-rule`],[`colorInterpolation`,`color-interpolation`],[`colorInterpolationFilters`,`color-interpolation-filters`],[`colorProfile`,`color-profile`],[`colorRendering`,`color-rendering`],[`dominantBaseline`,`dominant-baseline`],[`enableBackground`,`enable-background`],[`fillOpacity`,`fill-opacity`],[`fillRule`,`fill-rule`],[`floodColor`,`flood-color`],[`floodOpacity`,`flood-opacity`],[`fontFamily`,`font-family`],[`fontSize`,`font-size`],[`fontSizeAdjust`,`font-size-adjust`],[`fontStretch`,`font-stretch`],[`fontStyle`,`font-style`],[`fontVariant`,`font-variant`],[`fontWeight`,`font-weight`],[`glyphName`,`glyph-name`],[`glyphOrientationHorizontal`,`glyph-orientation-horizontal`],[`glyphOrientationVertical`,`glyph-orientation-vertical`],[`horizAdvX`,`horiz-adv-x`],[`horizOriginX`,`horiz-origin-x`],[`imageRendering`,`image-rendering`],[`letterSpacing`,`letter-spacing`],[`lightingColor`,`lighting-color`],[`markerEnd`,`marker-end`],[`markerMid`,`marker-mid`],[`markerStart`,`marker-start`],[`overlinePosition`,`overline-position`],[`overlineThickness`,`overline-thickness`],[`paintOrder`,`paint-order`],[`panose-1`,`panose-1`],[`pointerEvents`,`pointer-events`],[`renderingIntent`,`rendering-intent`],[`shapeRendering`,`shape-rendering`],[`stopColor`,`stop-color`],[`stopOpacity`,`stop-opacity`],[`strikethroughPosition`,`strikethrough-position`],[`strikethroughThickness`,`strikethrough-thickness`],[`strokeDasharray`,`stroke-dasharray`],[`strokeDashoffset`,`stroke-dashoffset`],[`strokeLinecap`,`stroke-linecap`],[`strokeLinejoin`,`stroke-linejoin`],[`strokeMiterlimit`,`stroke-miterlimit`],[`strokeOpacity`,`stroke-opacity`],[`strokeWidth`,`stroke-width`],[`textAnchor`,`text-anchor`],[`textDecoration`,`text-decoration`],[`textRendering`,`text-rendering`],[`transformOrigin`,`transform-origin`],[`underlinePosition`,`underline-position`],[`underlineThickness`,`underline-thickness`],[`unicodeBidi`,`unicode-bidi`],[`unicodeRange`,`unicode-range`],[`unitsPerEm`,`units-per-em`],[`vAlphabetic`,`v-alphabetic`],[`vHanging`,`v-hanging`],[`vIdeographic`,`v-ideographic`],[`vMathematical`,`v-mathematical`],[`vectorEffect`,`vector-effect`],[`vertAdvY`,`vert-adv-y`],[`vertOriginX`,`vert-origin-x`],[`vertOriginY`,`vert-origin-y`],[`wordSpacing`,`word-spacing`],[`writingMode`,`writing-mode`],[`xmlnsXlink`,`xmlns:xlink`],[`xHeight`,`x-height`]]),tn=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function nn(e){return tn.test(``+e)?`javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')`:e}function rn(){}var F=null;function an(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var on=null,sn=null;function cn(e){var t=Ct(e);if(t&&(e=t.stateNode)){var n=e[mt]||null;a:switch(e=t.stateNode,t.type){case`input`:if(N(e,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name),t=n.name,n.type===`radio`&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll(`input[name="`+Wt(``+t)+`"][type="radio"]`),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=r[mt]||null;if(!a)throw Error(i(90));N(r,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name)}}for(t=0;t<n.length;t++)r=n[t],r.form===e.form&&Ht(r)}break a;case`textarea`:qt(e,n.value,n.defaultValue);break a;case`select`:t=n.value,t!=null&&Kt(e,!!n.multiple,t,!1)}}}var ln=!1;function un(e,t,n){if(ln)return e(t,n);ln=!0;try{return e(t)}finally{if(ln=!1,(on!==null||sn!==null)&&(Su(),on&&(t=on,e=sn,sn=on=null,cn(t),e)))for(t=0;t<e.length;t++)cn(e[t])}}function dn(e,t){var n=e.stateNode;if(n===null)return null;var r=n[mt]||null;if(r===null)return null;n=r[t];a:switch(t){case`onClick`:case`onClickCapture`:case`onDoubleClick`:case`onDoubleClickCapture`:case`onMouseDown`:case`onMouseDownCapture`:case`onMouseMove`:case`onMouseMoveCapture`:case`onMouseUp`:case`onMouseUpCapture`:case`onMouseEnter`:(r=!r.disabled)||(e=e.type,r=!(e===`button`||e===`input`||e===`select`||e===`textarea`)),e=!r;break a;default:e=!1}if(e)return null;if(n&&typeof n!=`function`)throw Error(i(231,t,typeof n));return n}var fn=!(typeof window>`u`||window.document===void 0||window.document.createElement===void 0),pn=!1;if(fn)try{var mn={};Object.defineProperty(mn,`passive`,{get:function(){pn=!0}}),window.addEventListener(`test`,mn,mn),window.removeEventListener(`test`,mn,mn)}catch{pn=!1}var hn=null,gn=null,_n=null;function vn(){if(_n)return _n;var e,t=gn,n=t.length,r,i=`value`in hn?hn.value:hn.textContent,a=i.length;for(e=0;e<n&&t[e]===i[e];e++);var o=n-e;for(r=1;r<=o&&t[n-r]===i[a-r];r++);return _n=i.slice(e,1<r?1-r:void 0)}function yn(e){var t=e.keyCode;return`charCode`in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function bn(){return!0}function xn(){return!1}function Sn(e){function t(t,n,r,i,a){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=i,this.target=a,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(i):i[o]);return this.isDefaultPrevented=(i.defaultPrevented==null?!1===i.returnValue:i.defaultPrevented)?bn:xn,this.isPropagationStopped=xn,this}return h(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!=`unknown`&&(e.returnValue=!1),this.isDefaultPrevented=bn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!=`unknown`&&(e.cancelBubble=!0),this.isPropagationStopped=bn)},persist:function(){},isPersistent:bn}),t}var Cn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},wn=Sn(Cn),Tn=h({},Cn,{view:0,detail:0}),En=Sn(Tn),Dn,On,kn,An=h({},Tn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Vn,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return`movementX`in e?e.movementX:(e!==kn&&(kn&&e.type===`mousemove`?(Dn=e.screenX-kn.screenX,On=e.screenY-kn.screenY):On=Dn=0,kn=e),Dn)},movementY:function(e){return`movementY`in e?e.movementY:On}}),jn=Sn(An),Mn=Sn(h({},An,{dataTransfer:0})),Nn=Sn(h({},Tn,{relatedTarget:0})),Pn=Sn(h({},Cn,{animationName:0,elapsedTime:0,pseudoElement:0})),Fn=Sn(h({},Cn,{clipboardData:function(e){return`clipboardData`in e?e.clipboardData:window.clipboardData}})),In=Sn(h({},Cn,{data:0})),Ln={Esc:`Escape`,Spacebar:` `,Left:`ArrowLeft`,Up:`ArrowUp`,Right:`ArrowRight`,Down:`ArrowDown`,Del:`Delete`,Win:`OS`,Menu:`ContextMenu`,Apps:`ContextMenu`,Scroll:`ScrollLock`,MozPrintableKey:`Unidentified`},Rn={8:`Backspace`,9:`Tab`,12:`Clear`,13:`Enter`,16:`Shift`,17:`Control`,18:`Alt`,19:`Pause`,20:`CapsLock`,27:`Escape`,32:` `,33:`PageUp`,34:`PageDown`,35:`End`,36:`Home`,37:`ArrowLeft`,38:`ArrowUp`,39:`ArrowRight`,40:`ArrowDown`,45:`Insert`,46:`Delete`,112:`F1`,113:`F2`,114:`F3`,115:`F4`,116:`F5`,117:`F6`,118:`F7`,119:`F8`,120:`F9`,121:`F10`,122:`F11`,123:`F12`,144:`NumLock`,145:`ScrollLock`,224:`Meta`},zn={Alt:`altKey`,Control:`ctrlKey`,Meta:`metaKey`,Shift:`shiftKey`};function Bn(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=zn[e])?!!t[e]:!1}function Vn(){return Bn}var Hn=Sn(h({},Tn,{key:function(e){if(e.key){var t=Ln[e.key]||e.key;if(t!==`Unidentified`)return t}return e.type===`keypress`?(e=yn(e),e===13?`Enter`:String.fromCharCode(e)):e.type===`keydown`||e.type===`keyup`?Rn[e.keyCode]||`Unidentified`:``},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Vn,charCode:function(e){return e.type===`keypress`?yn(e):0},keyCode:function(e){return e.type===`keydown`||e.type===`keyup`?e.keyCode:0},which:function(e){return e.type===`keypress`?yn(e):e.type===`keydown`||e.type===`keyup`?e.keyCode:0}})),Un=Sn(h({},An,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),Wn=Sn(h({},Tn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Vn})),Gn=Sn(h({},Cn,{propertyName:0,elapsedTime:0,pseudoElement:0})),Kn=Sn(h({},An,{deltaX:function(e){return`deltaX`in e?e.deltaX:`wheelDeltaX`in e?-e.wheelDeltaX:0},deltaY:function(e){return`deltaY`in e?e.deltaY:`wheelDeltaY`in e?-e.wheelDeltaY:`wheelDelta`in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0})),qn=Sn(h({},Cn,{newState:0,oldState:0})),Jn=[9,13,27,32],Yn=fn&&`CompositionEvent`in window,Xn=null;fn&&`documentMode`in document&&(Xn=document.documentMode);var Zn=fn&&`TextEvent`in window&&!Xn,Qn=fn&&(!Yn||Xn&&8<Xn&&11>=Xn),$n=` `,er=!1;function tr(e,t){switch(e){case`keyup`:return Jn.indexOf(t.keyCode)!==-1;case`keydown`:return t.keyCode!==229;case`keypress`:case`mousedown`:case`focusout`:return!0;default:return!1}}function nr(e){return e=e.detail,typeof e==`object`&&`data`in e?e.data:null}var rr=!1;function ir(e,t){switch(e){case`compositionend`:return nr(t);case`keypress`:return t.which===32?(er=!0,$n):null;case`textInput`:return e=t.data,e===$n&&er?null:e;default:return null}}function ar(e,t){if(rr)return e===`compositionend`||!Yn&&tr(e,t)?(e=vn(),_n=gn=hn=null,rr=!1,e):null;switch(e){case`paste`:return null;case`keypress`:if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case`compositionend`:return Qn&&t.locale!==`ko`?null:t.data;default:return null}}var or={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function sr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t===`input`?!!or[e.type]:t===`textarea`}function cr(e,t,n,r){on?sn?sn.push(r):sn=[r]:on=r,t=Td(t,`onChange`),0<t.length&&(n=new wn(`onChange`,`change`,null,n,r),e.push({event:n,listeners:t}))}var lr=null,ur=null;function dr(e){vd(e,0)}function fr(e){if(Ht(wt(e)))return e}function pr(e,t){if(e===`change`)return t}var I=!1;if(fn){var mr;if(fn){var hr=`oninput`in document;if(!hr){var gr=document.createElement(`div`);gr.setAttribute(`oninput`,`return;`),hr=typeof gr.oninput==`function`}mr=hr}else mr=!1;I=mr&&(!document.documentMode||9<document.documentMode)}function _r(){lr&&(lr.detachEvent(`onpropertychange`,vr),ur=lr=null)}function vr(e){if(e.propertyName===`value`&&fr(ur)){var t=[];cr(t,ur,e,an(e)),un(dr,t)}}function yr(e,t,n){e===`focusin`?(_r(),lr=t,ur=n,lr.attachEvent(`onpropertychange`,vr)):e===`focusout`&&_r()}function br(e){if(e===`selectionchange`||e===`keyup`||e===`keydown`)return fr(ur)}function xr(e,t){if(e===`click`)return fr(t)}function Sr(e,t){if(e===`input`||e===`change`)return fr(t)}function Cr(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var L=typeof Object.is==`function`?Object.is:Cr;function wr(e,t){if(L(e,t))return!0;if(typeof e!=`object`||!e||typeof t!=`object`||!t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!ke.call(t,i)||!L(e[i],t[i]))return!1}return!0}function Tr(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Er(e,t){var n=Tr(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}a:{for(;n;){if(n.nextSibling){n=n.nextSibling;break a}n=n.parentNode}n=void 0}n=Tr(n)}}function Dr(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Dr(e,t.parentNode):`contains`in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Or(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Ut(e.document);t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href==`string`}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ut(e.document)}return t}function kr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t===`input`&&(e.type===`text`||e.type===`search`||e.type===`tel`||e.type===`url`||e.type===`password`)||t===`textarea`||e.contentEditable===`true`)}var Ar=fn&&`documentMode`in document&&11>=document.documentMode,jr=null,Mr=null,Nr=null,Pr=!1;function Fr(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pr||jr==null||jr!==Ut(r)||(r=jr,`selectionStart`in r&&kr(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&wr(Nr,r)||(Nr=r,r=Td(Mr,`onSelect`),0<r.length&&(t=new wn(`onSelect`,`select`,null,t,n),e.push({event:t,listeners:r}),t.target=jr)))}function Ir(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n[`Webkit`+e]=`webkit`+t,n[`Moz`+e]=`moz`+t,n}var Lr={animationend:Ir(`Animation`,`AnimationEnd`),animationiteration:Ir(`Animation`,`AnimationIteration`),animationstart:Ir(`Animation`,`AnimationStart`),transitionrun:Ir(`Transition`,`TransitionRun`),transitionstart:Ir(`Transition`,`TransitionStart`),transitioncancel:Ir(`Transition`,`TransitionCancel`),transitionend:Ir(`Transition`,`TransitionEnd`)},Rr={},zr={};fn&&(zr=document.createElement(`div`).style,`AnimationEvent`in window||(delete Lr.animationend.animation,delete Lr.animationiteration.animation,delete Lr.animationstart.animation),`TransitionEvent`in window||delete Lr.transitionend.transition);function Br(e){if(Rr[e])return Rr[e];if(!Lr[e])return e;var t=Lr[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in zr)return Rr[e]=t[n];return e}var Vr=Br(`animationend`),Hr=Br(`animationiteration`),Ur=Br(`animationstart`),Wr=Br(`transitionrun`),Gr=Br(`transitionstart`),Kr=Br(`transitioncancel`),qr=Br(`transitionend`),Jr=new Map,Yr=`abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel`.split(` `);Yr.push(`scrollEnd`);function Xr(e,t){Jr.set(e,t),kt(t,[e])}var Zr=typeof reportError==`function`?reportError:function(e){if(typeof window==`object`&&typeof window.ErrorEvent==`function`){var t=new window.ErrorEvent(`error`,{bubbles:!0,cancelable:!0,message:typeof e==`object`&&e&&typeof e.message==`string`?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process==`object`&&typeof process.emit==`function`){process.emit(`uncaughtException`,e);return}console.error(e)},Qr=[],$r=0,ei=0;function ti(){for(var e=$r,t=ei=$r=0;t<e;){var n=Qr[t];Qr[t++]=null;var r=Qr[t];Qr[t++]=null;var i=Qr[t];Qr[t++]=null;var a=Qr[t];if(Qr[t++]=null,r!==null&&i!==null){var o=r.pending;o===null?i.next=i:(i.next=o.next,o.next=i),r.pending=i}a!==0&&ai(n,i,a)}}function ni(e,t,n,r){Qr[$r++]=e,Qr[$r++]=t,Qr[$r++]=n,Qr[$r++]=r,ei|=r,e.lanes|=r,e=e.alternate,e!==null&&(e.lanes|=r)}function ri(e,t,n,r){return ni(e,t,n,r),oi(e)}function ii(e,t){return ni(e,null,null,t),oi(e)}function ai(e,t,n){e.lanes|=n;var r=e.alternate;r!==null&&(r.lanes|=n);for(var i=!1,a=e.return;a!==null;)a.childLanes|=n,r=a.alternate,r!==null&&(r.childLanes|=n),a.tag===22&&(e=a.stateNode,e===null||e._visibility&1||(i=!0)),e=a,a=a.return;return e.tag===3?(a=e.stateNode,i&&t!==null&&(i=31-Ge(n),e=a.hiddenUpdates,r=e[i],r===null?e[i]=[t]:r.push(t),t.lane=n|536870912),a):null}function oi(e){if(50<pu)throw pu=0,mu=null,Error(i(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var si={};function ci(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function li(e,t,n,r){return new ci(e,t,n,r)}function ui(e){return e=e.prototype,!(!e||!e.isReactComponent)}function di(e,t){var n=e.alternate;return n===null?(n=li(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&65011712,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n.refCleanup=e.refCleanup,n}function R(e,t){e.flags&=65011714;var n=e.alternate;return n===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=n.childLanes,e.lanes=n.lanes,e.child=n.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=n.memoizedProps,e.memoizedState=n.memoizedState,e.updateQueue=n.updateQueue,e.type=n.type,t=n.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function fi(e,t,n,r,a,o){var s=0;if(r=e,typeof e==`function`)ui(e)&&(s=1);else if(typeof e==`string`)s=Uf(e,n,me.current)?26:e===`html`||e===`head`||e===`body`?27:5;else a:switch(e){case ne:return e=li(31,n,t,a),e.elementType=ne,e.lanes=o,e;case y:return pi(n.children,a,o,t);case b:s=8,a|=24;break;case x:return e=li(12,n,t,a|2),e.elementType=x,e.lanes=o,e;case T:return e=li(13,n,t,a),e.elementType=T,e.lanes=o,e;case ee:return e=li(19,n,t,a),e.elementType=ee,e.lanes=o,e;default:if(typeof e==`object`&&e)switch(e.$$typeof){case C:s=10;break a;case S:s=9;break a;case w:s=11;break a;case te:s=14;break a;case E:s=16,r=null;break a}s=29,n=Error(i(130,e===null?`null`:typeof e,``)),r=null}return t=li(s,n,t,a),t.elementType=e,t.type=r,t.lanes=o,t}function pi(e,t,n,r){return e=li(7,e,r,t),e.lanes=n,e}function mi(e,t,n){return e=li(6,e,null,t),e.lanes=n,e}function hi(e){var t=li(18,null,null,0);return t.stateNode=e,t}function gi(e,t,n){return t=li(4,e.children===null?[]:e.children,e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var _i=new WeakMap;function vi(e,t){if(typeof e==`object`&&e){var n=_i.get(e);return n===void 0?(t={value:e,source:t,stack:Oe(t)},_i.set(e,t),t):n}return{value:e,source:t,stack:Oe(t)}}var yi=[],bi=0,xi=null,Si=0,Ci=[],wi=0,Ti=null,z=1,Ei=``;function Di(e,t){yi[bi++]=Si,yi[bi++]=xi,xi=e,Si=t}function Oi(e,t,n){Ci[wi++]=z,Ci[wi++]=Ei,Ci[wi++]=Ti,Ti=e;var r=z;e=Ei;var i=32-Ge(r)-1;r&=~(1<<i),n+=1;var a=32-Ge(t)+i;if(30<a){var o=i-i%5;a=(r&(1<<o)-1).toString(32),r>>=o,i-=o,z=1<<32-Ge(t)+i|n<<i|r,Ei=a+e}else z=1<<a|n<<i|r,Ei=e}function ki(e){e.return!==null&&(Di(e,1),Oi(e,1,0))}function Ai(e){for(;e===xi;)xi=yi[--bi],yi[bi]=null,Si=yi[--bi],yi[bi]=null;for(;e===Ti;)Ti=Ci[--wi],Ci[wi]=null,Ei=Ci[--wi],Ci[wi]=null,z=Ci[--wi],Ci[wi]=null}function ji(e,t){Ci[wi++]=z,Ci[wi++]=Ei,Ci[wi++]=Ti,z=t.id,Ei=t.overflow,Ti=e}var Mi=null,Ni=null,B=!1,Pi=null,V=!1,Fi=Error(i(519));function H(e){throw Vi(vi(Error(i(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?`text`:`HTML`,``)),e)),Fi}function Ii(e){var t=e.stateNode,n=e.type,r=e.memoizedProps;switch(t[pt]=e,t[mt]=r,n){case`dialog`:$(`cancel`,t),$(`close`,t);break;case`iframe`:case`object`:case`embed`:$(`load`,t);break;case`video`:case`audio`:for(n=0;n<gd.length;n++)$(gd[n],t);break;case`source`:$(`error`,t);break;case`img`:case`image`:case`link`:$(`error`,t),$(`load`,t);break;case`details`:$(`toggle`,t);break;case`input`:$(`invalid`,t),Gt(t,r.value,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name,!0);break;case`select`:$(`invalid`,t);break;case`textarea`:$(`invalid`,t),Jt(t,r.value,r.defaultValue,r.children)}n=r.children,typeof n!=`string`&&typeof n!=`number`&&typeof n!=`bigint`||t.textContent===``+n||!0===r.suppressHydrationWarning||jd(t.textContent,n)?(r.popover!=null&&($(`beforetoggle`,t),$(`toggle`,t)),r.onScroll!=null&&$(`scroll`,t),r.onScrollEnd!=null&&$(`scrollend`,t),r.onClick!=null&&(t.onclick=rn),t=!0):t=!1,t||H(e,!0)}function Li(e){for(Mi=e.return;Mi;)switch(Mi.tag){case 5:case 31:case 13:V=!1;return;case 27:case 3:V=!0;return;default:Mi=Mi.return}}function Ri(e){if(e!==Mi)return!1;if(!B)return Li(e),B=!0,!1;var t=e.tag,n;if((n=t!==3&&t!==27)&&((n=t===5)&&(n=e.type,n=!(n!==`form`&&n!==`button`)||Ud(e.type,e.memoizedProps)),n=!n),n&&Ni&&H(e),Li(e),t===13){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=uf(e)}else if(t===31){if(e=e.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(317));Ni=uf(e)}else t===27?(t=Ni,Zd(e.type)?(e=lf,lf=null,Ni=e):Ni=t):Ni=Mi?cf(e.stateNode.nextSibling):null;return!0}function zi(){Ni=Mi=null,B=!1}function Bi(){var e=Pi;return e!==null&&($l===null?$l=e:$l.push.apply($l,e),Pi=null),e}function Vi(e){Pi===null?Pi=[e]:Pi.push(e)}var Hi=fe(null),Ui=null,Wi=null;function Gi(e,t,n){k(Hi,t._currentValue),t._currentValue=n}function Ki(e){e._currentValue=Hi.current,pe(Hi)}function qi(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)===t?r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t):(e.childLanes|=t,r!==null&&(r.childLanes|=t)),e===n)break;e=e.return}}function Ji(e,t,n,r){var a=e.child;for(a!==null&&(a.return=e);a!==null;){var o=a.dependencies;if(o!==null){var s=a.child;o=o.firstContext;a:for(;o!==null;){var c=o;o=a;for(var l=0;l<t.length;l++)if(c.context===t[l]){o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),qi(o.return,n,e),r||(s=null);break a}o=c.next}}else if(a.tag===18){if(s=a.return,s===null)throw Error(i(341));s.lanes|=n,o=s.alternate,o!==null&&(o.lanes|=n),qi(s,n,e),s=null}else s=a.child;if(s!==null)s.return=a;else for(s=a;s!==null;){if(s===e){s=null;break}if(a=s.sibling,a!==null){a.return=s.return,s=a;break}s=s.return}a=s}}function Yi(e,t,n,r){e=null;for(var a=t,o=!1;a!==null;){if(!o){if(a.flags&524288)o=!0;else if(a.flags&262144)break}if(a.tag===10){var s=a.alternate;if(s===null)throw Error(i(387));if(s=s.memoizedProps,s!==null){var c=a.type;L(a.pendingProps.value,s.value)||(e===null?e=[c]:e.push(c))}}else if(a===_e.current){if(s=a.alternate,s===null)throw Error(i(387));s.memoizedState.memoizedState!==a.memoizedState.memoizedState&&(e===null?e=[Qf]:e.push(Qf))}a=a.return}e!==null&&Ji(t,e,n,r),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!L(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Zi(e){Ui=e,Wi=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function U(e){return $i(Ui,e)}function Qi(e,t){return Ui===null&&Zi(e),$i(e,t)}function $i(e,t){var n=t._currentValue;if(t={context:t,memoizedValue:n,next:null},Wi===null){if(e===null)throw Error(i(308));Wi=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Wi=Wi.next=t;return n}var ea=typeof AbortController<`u`?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(t,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(e){return e()})}},ta=t.unstable_scheduleCallback,na=t.unstable_NormalPriority,ra={$$typeof:C,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function ia(){return{controller:new ea,data:new Map,refCount:0}}function aa(e){e.refCount--,e.refCount===0&&ta(na,function(){e.controller.abort()})}var oa=null,sa=0,ca=0,la=null;function ua(e,t){if(oa===null){var n=oa=[];sa=0,ca=Z(),la={status:`pending`,value:void 0,then:function(e){n.push(e)}}}return sa++,t.then(da,da),t}function da(){if(--sa===0&&oa!==null){la!==null&&(la.status=`fulfilled`);var e=oa;oa=null,ca=0,la=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fa(e,t){var n=[],r={status:`pending`,value:null,reason:null,then:function(e){n.push(e)}};return e.then(function(){r.status=`fulfilled`,r.value=t;for(var e=0;e<n.length;e++)(0,n[e])(t)},function(e){for(r.status=`rejected`,r.reason=e,e=0;e<n.length;e++)(0,n[e])(void 0)}),r}var pa=D.S;D.S=function(e,t){nu=Pe(),typeof t==`object`&&t&&typeof t.then==`function`&&ua(e,t),pa!==null&&pa(e,t)};var ma=fe(null);function ha(){var e=ma.current;return e===null?zl.pooledCache:e}function ga(e,t){t===null?k(ma,ma.current):k(ma,t.pool)}function _a(){var e=ha();return e===null?null:{parent:ra._currentValue,pool:e}}var va=Error(i(460)),ya=Error(i(474)),ba=Error(i(542)),xa={then:function(){}};function Sa(e){return e=e.status,e===`fulfilled`||e===`rejected`}function Ca(e,t,n){switch(n=e[n],n===void 0?e.push(t):n!==t&&(t.then(rn,rn),t=n),t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e;default:if(typeof t.status==`string`)t.then(rn,rn);else{if(e=zl,e!==null&&100<e.shellSuspendCounter)throw Error(i(482));e=t,e.status=`pending`,e.then(function(e){if(t.status===`pending`){var n=t;n.status=`fulfilled`,n.value=e}},function(e){if(t.status===`pending`){var n=t;n.status=`rejected`,n.reason=e}})}switch(t.status){case`fulfilled`:return t.value;case`rejected`:throw e=t.reason,Da(e),e}throw Ta=t,va}}function wa(e){try{var t=e._init;return t(e._payload)}catch(e){throw typeof e==`object`&&e&&typeof e.then==`function`?(Ta=e,va):e}}var Ta=null;function Ea(){if(Ta===null)throw Error(i(459));var e=Ta;return Ta=null,e}function Da(e){if(e===va||e===ba)throw Error(i(483))}var Oa=null,ka=0;function Aa(e){var t=ka;return ka+=1,Oa===null&&(Oa=[]),Ca(Oa,e,t)}function ja(e,t){t=t.props.ref,e.ref=t===void 0?null:t}function Ma(e,t){throw t.$$typeof===g?Error(i(525)):(e=Object.prototype.toString.call(t),Error(i(31,e===`[object Object]`?`object with keys {`+Object.keys(t).join(`, `)+`}`:e)))}function Na(e){function t(t,n){if(e){var r=t.deletions;r===null?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;r!==null;)t(n,r),r=r.sibling;return null}function r(e){for(var t=new Map;e!==null;)e.key===null?t.set(e.index,e):t.set(e.key,e),e=e.sibling;return t}function a(e,t){return e=di(e,t),e.index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?(r=t.alternate,r===null?(t.flags|=67108866,n):(r=r.index,r<n?(t.flags|=67108866,n):r)):(t.flags|=1048576,n)}function s(t){return e&&t.alternate===null&&(t.flags|=67108866),t}function c(e,t,n,r){return t===null||t.tag!==6?(t=mi(n,e.mode,r),t.return=e,t):(t=a(t,n),t.return=e,t)}function l(e,t,n,r){var i=n.type;return i===y?d(e,t,n.props.children,r,n.key):t!==null&&(t.elementType===i||typeof i==`object`&&i&&i.$$typeof===E&&wa(i)===t.type)?(t=a(t,n.props),ja(t,n),t.return=e,t):(t=fi(n.type,n.key,n.props,null,e.mode,r),ja(t,n),t.return=e,t)}function u(e,t,n,r){return t===null||t.tag!==4||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?(t=gi(n,e.mode,r),t.return=e,t):(t=a(t,n.children||[]),t.return=e,t)}function d(e,t,n,r,i){return t===null||t.tag!==7?(t=pi(n,e.mode,r,i),t.return=e,t):(t=a(t,n),t.return=e,t)}function f(e,t,n){if(typeof t==`string`&&t!==``||typeof t==`number`||typeof t==`bigint`)return t=mi(``+t,e.mode,n),t.return=e,t;if(typeof t==`object`&&t){switch(t.$$typeof){case _:return n=fi(t.type,t.key,t.props,null,e.mode,n),ja(n,t),n.return=e,n;case v:return t=gi(t,e.mode,n),t.return=e,t;case E:return t=wa(t),f(e,t,n)}if(ce(t)||ae(t))return t=pi(t,e.mode,n,null),t.return=e,t;if(typeof t.then==`function`)return f(e,Aa(t),n);if(t.$$typeof===C)return f(e,Qi(e,t),n);Ma(e,t)}return null}function p(e,t,n,r){var i=t===null?null:t.key;if(typeof n==`string`&&n!==``||typeof n==`number`||typeof n==`bigint`)return i===null?c(e,t,``+n,r):null;if(typeof n==`object`&&n){switch(n.$$typeof){case _:return n.key===i?l(e,t,n,r):null;case v:return n.key===i?u(e,t,n,r):null;case E:return n=wa(n),p(e,t,n,r)}if(ce(n)||ae(n))return i===null?d(e,t,n,r,null):null;if(typeof n.then==`function`)return p(e,t,Aa(n),r);if(n.$$typeof===C)return p(e,t,Qi(e,n),r);Ma(e,n)}return null}function m(e,t,n,r,i){if(typeof r==`string`&&r!==``||typeof r==`number`||typeof r==`bigint`)return e=e.get(n)||null,c(t,e,``+r,i);if(typeof r==`object`&&r){switch(r.$$typeof){case _:return e=e.get(r.key===null?n:r.key)||null,l(t,e,r,i);case v:return e=e.get(r.key===null?n:r.key)||null,u(t,e,r,i);case E:return r=wa(r),m(e,t,n,r,i)}if(ce(r)||ae(r))return e=e.get(n)||null,d(t,e,r,i,null);if(typeof r.then==`function`)return m(e,t,n,Aa(r),i);if(r.$$typeof===C)return m(e,t,n,Qi(t,r),i);Ma(t,r)}return null}function h(i,a,s,c){for(var l=null,u=null,d=a,h=a=0,g=null;d!==null&&h<s.length;h++){d.index>h?(g=d,d=null):g=d.sibling;var _=p(i,d,s[h],c);if(_===null){d===null&&(d=g);break}e&&d&&_.alternate===null&&t(i,d),a=o(_,a,h),u===null?l=_:u.sibling=_,u=_,d=g}if(h===s.length)return n(i,d),B&&Di(i,h),l;if(d===null){for(;h<s.length;h++)d=f(i,s[h],c),d!==null&&(a=o(d,a,h),u===null?l=d:u.sibling=d,u=d);return B&&Di(i,h),l}for(d=r(d);h<s.length;h++)g=m(d,i,h,s[h],c),g!==null&&(e&&g.alternate!==null&&d.delete(g.key===null?h:g.key),a=o(g,a,h),u===null?l=g:u.sibling=g,u=g);return e&&d.forEach(function(e){return t(i,e)}),B&&Di(i,h),l}function g(a,s,c,l){if(c==null)throw Error(i(151));for(var u=null,d=null,h=s,g=s=0,_=null,v=c.next();h!==null&&!v.done;g++,v=c.next()){h.index>g?(_=h,h=null):_=h.sibling;var y=p(a,h,v.value,l);if(y===null){h===null&&(h=_);break}e&&h&&y.alternate===null&&t(a,h),s=o(y,s,g),d===null?u=y:d.sibling=y,d=y,h=_}if(v.done)return n(a,h),B&&Di(a,g),u;if(h===null){for(;!v.done;g++,v=c.next())v=f(a,v.value,l),v!==null&&(s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return B&&Di(a,g),u}for(h=r(h);!v.done;g++,v=c.next())v=m(h,a,g,v.value,l),v!==null&&(e&&v.alternate!==null&&h.delete(v.key===null?g:v.key),s=o(v,s,g),d===null?u=v:d.sibling=v,d=v);return e&&h.forEach(function(e){return t(a,e)}),B&&Di(a,g),u}function b(e,r,o,c){if(typeof o==`object`&&o&&o.type===y&&o.key===null&&(o=o.props.children),typeof o==`object`&&o){switch(o.$$typeof){case _:a:{for(var l=o.key;r!==null;){if(r.key===l){if(l=o.type,l===y){if(r.tag===7){n(e,r.sibling),c=a(r,o.props.children),c.return=e,e=c;break a}}else if(r.elementType===l||typeof l==`object`&&l&&l.$$typeof===E&&wa(l)===r.type){n(e,r.sibling),c=a(r,o.props),ja(c,o),c.return=e,e=c;break a}n(e,r);break}else t(e,r);r=r.sibling}o.type===y?(c=pi(o.props.children,e.mode,c,o.key),c.return=e,e=c):(c=fi(o.type,o.key,o.props,null,e.mode,c),ja(c,o),c.return=e,e=c)}return s(e);case v:a:{for(l=o.key;r!==null;){if(r.key===l)if(r.tag===4&&r.stateNode.containerInfo===o.containerInfo&&r.stateNode.implementation===o.implementation){n(e,r.sibling),c=a(r,o.children||[]),c.return=e,e=c;break a}else{n(e,r);break}else t(e,r);r=r.sibling}c=gi(o,e.mode,c),c.return=e,e=c}return s(e);case E:return o=wa(o),b(e,r,o,c)}if(ce(o))return h(e,r,o,c);if(ae(o)){if(l=ae(o),typeof l!=`function`)throw Error(i(150));return o=l.call(o),g(e,r,o,c)}if(typeof o.then==`function`)return b(e,r,Aa(o),c);if(o.$$typeof===C)return b(e,r,Qi(e,o),c);Ma(e,o)}return typeof o==`string`&&o!==``||typeof o==`number`||typeof o==`bigint`?(o=``+o,r!==null&&r.tag===6?(n(e,r.sibling),c=a(r,o),c.return=e,e=c):(n(e,r),c=mi(o,e.mode,c),c.return=e,e=c),s(e)):n(e,r)}return function(e,t,n,r){try{ka=0;var i=b(e,t,n,r);return Oa=null,i}catch(t){if(t===va||t===ba)throw t;var a=li(29,t,null,e.mode);return a.lanes=r,a.return=e,a}}}var Pa=Na(!0),Fa=Na(!1),Ia=!1;function La(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ra(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function za(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function Ba(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,K&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,t=oi(e),ai(e,null,n),t}return ni(e,r,t,n),oi(e)}function Va(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,n&4194048)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}function Ha(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var o={lane:n.lane,tag:n.tag,payload:n.payload,callback:null,next:null};a===null?i=a=o:a=a.next=o,n=n.next}while(n!==null);a===null?i=a=t:a=a.next=t}else i=a=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:a,shared:r.shared,callbacks:r.callbacks},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}var Ua=!1;function Wa(){if(Ua){var e=la;if(e!==null)throw e}}function Ga(e,t,n,r){Ua=!1;var i=e.updateQueue;Ia=!1;var a=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var c=s,l=c.next;c.next=null,o===null?a=l:o.next=l,o=c;var u=e.alternate;u!==null&&(u=u.updateQueue,s=u.lastBaseUpdate,s!==o&&(s===null?u.firstBaseUpdate=l:s.next=l,u.lastBaseUpdate=c))}if(a!==null){var d=i.baseState;o=0,u=l=c=null,s=a;do{var f=s.lane&-536870913,p=f!==s.lane;if(p?(J&f)===f:(r&f)===f){f!==0&&f===ca&&(Ua=!0),u!==null&&(u=u.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});a:{var m=e,g=s;f=t;var _=n;switch(g.tag){case 1:if(m=g.payload,typeof m==`function`){d=m.call(_,d,f);break a}d=m;break a;case 3:m.flags=m.flags&-65537|128;case 0:if(m=g.payload,f=typeof m==`function`?m.call(_,d,f):m,f==null)break a;d=h({},d,f);break a;case 2:Ia=!0}}f=s.callback,f!==null&&(e.flags|=64,p&&(e.flags|=8192),p=i.callbacks,p===null?i.callbacks=[f]:p.push(f))}else p={lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},u===null?(l=u=p,c=d):u=u.next=p,o|=f;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;p=s,s=p.next,p.next=null,i.lastBaseUpdate=p,i.shared.pending=null}}while(1);u===null&&(c=d),i.baseState=c,i.firstBaseUpdate=l,i.lastBaseUpdate=u,a===null&&(i.shared.lanes=0),ql|=o,e.lanes=o,e.memoizedState=d}}function Ka(e,t){if(typeof e!=`function`)throw Error(i(191,e));e.call(t)}function qa(e,t){var n=e.callbacks;if(n!==null)for(e.callbacks=null,e=0;e<n.length;e++)Ka(n[e],t)}var Ja=fe(null),Ya=fe(0);function Xa(e,t){e=Gl,k(Ya,e),k(Ja,t),Gl=e|t.baseLanes}function Za(){k(Ya,Gl),k(Ja,Ja.current)}function Qa(){Gl=Ya.current,pe(Ja),pe(Ya)}var $a=fe(null),eo=null;function to(e){var t=e.alternate;k(oo,oo.current&1),k($a,e),eo===null&&(t===null||Ja.current!==null||t.memoizedState!==null)&&(eo=e)}function no(e){k(oo,oo.current),k($a,e),eo===null&&(eo=e)}function ro(e){e.tag===22?(k(oo,oo.current),k($a,e),eo===null&&(eo=e)):io(e)}function io(){k(oo,oo.current),k($a,$a.current)}function ao(e){pe($a),eo===e&&(eo=null),pe(oo)}var oo=fe(0);function so(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||af(n)||of(n)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder===`forwards`||t.memoizedProps.revealOrder===`backwards`||t.memoizedProps.revealOrder===`unstable_legacy-backwards`||t.memoizedProps.revealOrder===`together`)){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var co=0,W=null,lo=null,uo=null,fo=!1,po=!1,mo=!1,ho=0,go=0,_o=null,vo=0;function yo(){throw Error(i(321))}function bo(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!L(e[n],t[n]))return!1;return!0}function xo(e,t,n,r,i,a){return co=a,W=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,D.H=e===null||e.memoizedState===null?Rs:zs,mo=!1,a=n(r,i),mo=!1,po&&(a=Co(t,n,r,i)),So(e),a}function So(e){D.H=Ls;var t=lo!==null&&lo.next!==null;if(co=0,uo=lo=W=null,fo=!1,go=0,_o=null,t)throw Error(i(300));e===null||nc||(e=e.dependencies,e!==null&&Xi(e)&&(nc=!0))}function Co(e,t,n,r){W=e;var a=0;do{if(po&&(_o=null),go=0,po=!1,25<=a)throw Error(i(301));if(a+=1,uo=lo=null,e.updateQueue!=null){var o=e.updateQueue;o.lastEffect=null,o.events=null,o.stores=null,o.memoCache!=null&&(o.memoCache.index=0)}D.H=Bs,o=t(n,r)}while(po);return o}function wo(){var e=D.H,t=e.useState()[0];return t=typeof t.then==`function`?jo(t):t,e=e.useState()[0],(lo===null?null:lo.memoizedState)!==e&&(W.flags|=1024),t}function To(){var e=ho!==0;return ho=0,e}function Eo(e,t,n){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~n}function Do(e){if(fo){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}fo=!1}co=0,uo=lo=W=null,po=!1,go=ho=0,_o=null}function Oo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return uo===null?W.memoizedState=uo=e:uo=uo.next=e,uo}function ko(){if(lo===null){var e=W.alternate;e=e===null?null:e.memoizedState}else e=lo.next;var t=uo===null?W.memoizedState:uo.next;if(t!==null)uo=t,lo=e;else{if(e===null)throw W.alternate===null?Error(i(467)):Error(i(310));lo=e,e={memoizedState:lo.memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},uo===null?W.memoizedState=uo=e:uo=uo.next=e}return uo}function Ao(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function jo(e){var t=go;return go+=1,_o===null&&(_o=[]),e=Ca(_o,e,t),t=W,(uo===null?t.memoizedState:uo.next)===null&&(t=t.alternate,D.H=t===null||t.memoizedState===null?Rs:zs),e}function Mo(e){if(typeof e==`object`&&e){if(typeof e.then==`function`)return jo(e);if(e.$$typeof===C)return U(e)}throw Error(i(438,String(e)))}function No(e){var t=null,n=W.updateQueue;if(n!==null&&(t=n.memoCache),t==null){var r=W.alternate;r!==null&&(r=r.updateQueue,r!==null&&(r=r.memoCache,r!=null&&(t={data:r.data.map(function(e){return e.slice()}),index:0})))}if(t??={data:[],index:0},n===null&&(n=Ao(),W.updateQueue=n),n.memoCache=t,n=t.data[t.index],n===void 0)for(n=t.data[t.index]=Array(e),r=0;r<e;r++)n[r]=re;return t.index++,n}function Po(e,t){return typeof t==`function`?t(e):t}function Fo(e){return Io(ko(),lo,e)}function Io(e,t,n){var r=e.queue;if(r===null)throw Error(i(311));r.lastRenderedReducer=n;var a=e.baseQueue,o=r.pending;if(o!==null){if(a!==null){var s=a.next;a.next=o.next,o.next=s}t.baseQueue=a=o,r.pending=null}if(o=e.baseState,a===null)e.memoizedState=o;else{t=a.next;var c=s=null,l=null,u=t,d=!1;do{var f=u.lane&-536870913;if(f===u.lane?(co&f)===f:(J&f)===f){var p=u.revertLane;if(p===0)l!==null&&(l=l.next={lane:0,revertLane:0,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),f===ca&&(d=!0);else if((co&p)===p){u=u.next,p===ca&&(d=!0);continue}else f={lane:0,revertLane:u.revertLane,gesture:null,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=f,s=o):l=l.next=f,W.lanes|=p,ql|=p;f=u.action,mo&&n(o,f),o=u.hasEagerState?u.eagerState:n(o,f)}else p={lane:f,revertLane:u.revertLane,gesture:u.gesture,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null},l===null?(c=l=p,s=o):l=l.next=p,W.lanes|=f,ql|=f;u=u.next}while(u!==null&&u!==t);if(l===null?s=o:l.next=c,!L(o,e.memoizedState)&&(nc=!0,d&&(n=la,n!==null)))throw n;e.memoizedState=o,e.baseState=s,e.baseQueue=l,r.lastRenderedState=o}return a===null&&(r.lanes=0),[e.memoizedState,r.dispatch]}function Lo(e){var t=ko(),n=t.queue;if(n===null)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(a!==null){n.pending=null;var s=a=a.next;do o=e(o,s.action),s=s.next;while(s!==a);L(o,t.memoizedState)||(nc=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function Ro(e,t,n){var r=W,a=ko(),o=B;if(o){if(n===void 0)throw Error(i(407));n=n()}else n=t();var s=!L((lo||a).memoizedState,n);if(s&&(a.memoizedState=n,nc=!0),a=a.queue,ls(Vo.bind(null,r,a,e),[e]),a.getSnapshot!==t||s||uo!==null&&uo.memoizedState.tag&1){if(r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,a,n,t),null),zl===null)throw Error(i(349));o||co&127||zo(r,t,n)}return n}function zo(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=W.updateQueue,t===null?(t=Ao(),W.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function Bo(e,t,n,r){t.value=n,t.getSnapshot=r,Ho(t)&&Uo(e)}function Vo(e,t,n){return n(function(){Ho(t)&&Uo(e)})}function Ho(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!L(e,n)}catch{return!0}}function Uo(e){var t=ii(e,2);t!==null&&_u(t,e,2)}function Wo(e){var t=Oo();if(typeof e==`function`){var n=e;if(e=n(),mo){We(!0);try{n()}finally{We(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:e},t}function Go(e,t,n,r){return e.baseState=n,Io(e,lo,typeof r==`function`?r:Po)}function Ko(e,t,n,r,a){if(Ps(e))throw Error(i(485));if(e=t.action,e!==null){var o={payload:a,action:e,next:null,isTransition:!0,status:`pending`,value:null,reason:null,listeners:[],then:function(e){o.listeners.push(e)}};D.T===null?o.isTransition=!1:n(!0),r(o),n=t.pending,n===null?(o.next=t.pending=o,qo(t,o)):(o.next=n.next,t.pending=n.next=o)}}function qo(e,t){var n=t.action,r=t.payload,i=e.state;if(t.isTransition){var a=D.T,o={};D.T=o;try{var s=n(i,r),c=D.S;c!==null&&c(o,s),Jo(e,t,s)}catch(n){Xo(e,t,n)}finally{a!==null&&o.types!==null&&(a.types=o.types),D.T=a}}else try{a=n(i,r),Jo(e,t,a)}catch(n){Xo(e,t,n)}}function Jo(e,t,n){typeof n==`object`&&n&&typeof n.then==`function`?n.then(function(n){Yo(e,t,n)},function(n){return Xo(e,t,n)}):Yo(e,t,n)}function Yo(e,t,n){t.status=`fulfilled`,t.value=n,Zo(t),e.state=n,t=e.pending,t!==null&&(n=t.next,n===t?e.pending=null:(n=n.next,t.next=n,qo(e,n)))}function Xo(e,t,n){var r=e.pending;if(e.pending=null,r!==null){r=r.next;do t.status=`rejected`,t.reason=n,Zo(t),t=t.next;while(t!==r)}e.action=null}function Zo(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Qo(e,t){return t}function $o(e,t){if(B){var n=zl.formState;if(n!==null){a:{var r=W;if(B){if(Ni){b:{for(var i=Ni,a=V;i.nodeType!==8;){if(!a){i=null;break b}if(i=cf(i.nextSibling),i===null){i=null;break b}}a=i.data,i=a===`F!`||a===`F`?i:null}if(i){Ni=cf(i.nextSibling),r=i.data===`F!`;break a}}H(r)}r=!1}r&&(t=n[0])}}return n=Oo(),n.memoizedState=n.baseState=t,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Qo,lastRenderedState:t},n.queue=r,n=js.bind(null,W,r),r.dispatch=n,r=Wo(!1),a=Ns.bind(null,W,!1,r.queue),r=Oo(),i={state:t,dispatch:null,action:e,pending:null},r.queue=i,n=Ko.bind(null,W,i,a,n),i.dispatch=n,r.memoizedState=e,[t,n,!1]}function es(e){return ts(ko(),lo,e)}function ts(e,t,n){if(t=Io(e,t,Qo)[0],e=Fo(Po)[0],typeof t==`object`&&t&&typeof t.then==`function`)try{var r=jo(t)}catch(e){throw e===va?ba:e}else r=t;t=ko();var i=t.queue,a=i.dispatch;return n!==t.memoizedState&&(W.flags|=2048,is(9,{destroy:void 0},ns.bind(null,i,n),null)),[r,a,e]}function ns(e,t){e.action=t}function rs(e){var t=ko(),n=lo;if(n!==null)return ts(t,n,e);ko(),t=t.memoizedState,n=ko();var r=n.queue.dispatch;return n.memoizedState=e,[t,r,!1]}function is(e,t,n,r){return e={tag:e,create:n,deps:r,inst:t,next:null},t=W.updateQueue,t===null&&(t=Ao(),W.updateQueue=t),n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function as(){return ko().memoizedState}function os(e,t,n,r){var i=Oo();W.flags|=e,i.memoizedState=is(1|t,{destroy:void 0},n,r===void 0?null:r)}function ss(e,t,n,r){var i=ko();r=r===void 0?null:r;var a=i.memoizedState.inst;lo!==null&&r!==null&&bo(r,lo.memoizedState.deps)?i.memoizedState=is(t,a,n,r):(W.flags|=e,i.memoizedState=is(1|t,a,n,r))}function cs(e,t){os(8390656,8,e,t)}function ls(e,t){ss(2048,8,e,t)}function us(e){W.flags|=4;var t=W.updateQueue;if(t===null)t=Ao(),W.updateQueue=t,t.events=[e];else{var n=t.events;n===null?t.events=[e]:n.push(e)}}function ds(e){var t=ko().memoizedState;return us({ref:t,nextImpl:e}),function(){if(K&2)throw Error(i(440));return t.impl.apply(void 0,arguments)}}function fs(e,t){return ss(4,2,e,t)}function ps(e,t){return ss(4,4,e,t)}function ms(e,t){if(typeof t==`function`){e=e();var n=t(e);return function(){typeof n==`function`?n():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hs(e,t,n){n=n==null?null:n.concat([e]),ss(4,4,ms.bind(null,t,e),n)}function gs(){}function _s(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;return t!==null&&bo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function vs(e,t){var n=ko();t=t===void 0?null:t;var r=n.memoizedState;if(t!==null&&bo(t,r[1]))return r[0];if(r=e(),mo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r}function ys(e,t,n){return n===void 0||co&1073741824&&!(J&261930)?e.memoizedState=t:(e.memoizedState=n,e=gu(),W.lanes|=e,ql|=e,n)}function bs(e,t,n,r){return L(n,t)?n:Ja.current===null?!(co&42)||co&1073741824&&!(J&261930)?(nc=!0,e.memoizedState=n):(e=gu(),W.lanes|=e,ql|=e,t):(e=ys(e,n,r),L(e,t)||(nc=!0),e)}function xs(e,t,n,r,i){var a=O.p;O.p=a!==0&&8>a?a:8;var o=D.T,s={};D.T=s,Ns(e,!1,t,n);try{var c=i(),l=D.S;l!==null&&l(s,c),typeof c==`object`&&c&&typeof c.then==`function`?Ms(e,t,fa(c,r),hu(e)):Ms(e,t,r,hu(e))}catch(n){Ms(e,t,{then:function(){},status:`rejected`,reason:n},hu())}finally{O.p=a,o!==null&&s.types!==null&&(o.types=s.types),D.T=o}}function Ss(){}function Cs(e,t,n,r){if(e.tag!==5)throw Error(i(476));var a=ws(e).queue;xs(e,a,t,le,n===null?Ss:function(){return Ts(e),n(r)})}function ws(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:le,baseState:le,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:le},next:null};var n={};return t.next={memoizedState:n,baseState:n,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Po,lastRenderedState:n},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Ts(e){var t=ws(e);t.next===null&&(t=e.alternate.memoizedState),Ms(e,t.next.queue,{},hu())}function Es(){return U(Qf)}function Ds(){return ko().memoizedState}function Os(){return ko().memoizedState}function ks(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var n=hu();e=za(n);var r=Ba(t,e,n);r!==null&&(_u(r,t,n),Va(r,t,n)),t={cache:ia()},e.payload=t;return}t=t.return}}function As(e,t,n){var r=hu();n={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},Ps(e)?Fs(t,n):(n=ri(e,t,n,r),n!==null&&(_u(n,e,r),Is(n,t,r)))}function js(e,t,n){Ms(e,t,n,hu())}function Ms(e,t,n,r){var i={lane:r,revertLane:0,gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null};if(Ps(e))Fs(t,i);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var o=t.lastRenderedState,s=a(o,n);if(i.hasEagerState=!0,i.eagerState=s,L(s,o))return ni(e,t,i,0),zl===null&&ti(),!1}catch{}if(n=ri(e,t,i,r),n!==null)return _u(n,e,r),Is(n,t,r),!0}return!1}function Ns(e,t,n,r){if(r={lane:2,revertLane:Z(),gesture:null,action:r,hasEagerState:!1,eagerState:null,next:null},Ps(e)){if(t)throw Error(i(479))}else t=ri(e,n,r,2),t!==null&&_u(t,e,2)}function Ps(e){var t=e.alternate;return e===W||t!==null&&t===W}function Fs(e,t){po=fo=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Is(e,t,n){if(n&4194048){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,ot(e,n)}}var Ls={readContext:U,use:Mo,useCallback:yo,useContext:yo,useEffect:yo,useImperativeHandle:yo,useLayoutEffect:yo,useInsertionEffect:yo,useMemo:yo,useReducer:yo,useRef:yo,useState:yo,useDebugValue:yo,useDeferredValue:yo,useTransition:yo,useSyncExternalStore:yo,useId:yo,useHostTransitionStatus:yo,useFormState:yo,useActionState:yo,useOptimistic:yo,useMemoCache:yo,useCacheRefresh:yo};Ls.useEffectEvent=yo;var Rs={readContext:U,use:Mo,useCallback:function(e,t){return Oo().memoizedState=[e,t===void 0?null:t],e},useContext:U,useEffect:cs,useImperativeHandle:function(e,t,n){n=n==null?null:n.concat([e]),os(4194308,4,ms.bind(null,t,e),n)},useLayoutEffect:function(e,t){return os(4194308,4,e,t)},useInsertionEffect:function(e,t){os(4,2,e,t)},useMemo:function(e,t){var n=Oo();t=t===void 0?null:t;var r=e();if(mo){We(!0);try{e()}finally{We(!1)}}return n.memoizedState=[r,t],r},useReducer:function(e,t,n){var r=Oo();if(n!==void 0){var i=n(t);if(mo){We(!0);try{n(t)}finally{We(!1)}}}else i=t;return r.memoizedState=r.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},r.queue=e,e=e.dispatch=As.bind(null,W,e),[r.memoizedState,e]},useRef:function(e){var t=Oo();return e={current:e},t.memoizedState=e},useState:function(e){e=Wo(e);var t=e.queue,n=js.bind(null,W,t);return t.dispatch=n,[e.memoizedState,n]},useDebugValue:gs,useDeferredValue:function(e,t){return ys(Oo(),e,t)},useTransition:function(){var e=Wo(!1);return e=xs.bind(null,W,e.queue,!0,!1),Oo().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,n){var r=W,a=Oo();if(B){if(n===void 0)throw Error(i(407));n=n()}else{if(n=t(),zl===null)throw Error(i(349));J&127||zo(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,cs(Vo.bind(null,r,o,e),[e]),r.flags|=2048,is(9,{destroy:void 0},Bo.bind(null,r,o,n,t),null),n},useId:function(){var e=Oo(),t=zl.identifierPrefix;if(B){var n=Ei,r=z;n=(r&~(1<<32-Ge(r)-1)).toString(32)+n,t=`_`+t+`R_`+n,n=ho++,0<n&&(t+=`H`+n.toString(32)),t+=`_`}else n=vo++,t=`_`+t+`r_`+n.toString(32)+`_`;return e.memoizedState=t},useHostTransitionStatus:Es,useFormState:$o,useActionState:$o,useOptimistic:function(e){var t=Oo();t.memoizedState=t.baseState=e;var n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=n,t=Ns.bind(null,W,!0,n),n.dispatch=t,[e,t]},useMemoCache:No,useCacheRefresh:function(){return Oo().memoizedState=ks.bind(null,W)},useEffectEvent:function(e){var t=Oo(),n={impl:e};return t.memoizedState=n,function(){if(K&2)throw Error(i(440));return n.impl.apply(void 0,arguments)}}},zs={readContext:U,use:Mo,useCallback:_s,useContext:U,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Fo,useRef:as,useState:function(){return Fo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){return bs(ko(),lo.memoizedState,e,t)},useTransition:function(){var e=Fo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:es,useActionState:es,useOptimistic:function(e,t){return Go(ko(),lo,e,t)},useMemoCache:No,useCacheRefresh:Os};zs.useEffectEvent=ds;var Bs={readContext:U,use:Mo,useCallback:_s,useContext:U,useEffect:ls,useImperativeHandle:hs,useInsertionEffect:fs,useLayoutEffect:ps,useMemo:vs,useReducer:Lo,useRef:as,useState:function(){return Lo(Po)},useDebugValue:gs,useDeferredValue:function(e,t){var n=ko();return lo===null?ys(n,e,t):bs(n,lo.memoizedState,e,t)},useTransition:function(){var e=Lo(Po)[0],t=ko().memoizedState;return[typeof e==`boolean`?e:jo(e),t]},useSyncExternalStore:Ro,useId:Ds,useHostTransitionStatus:Es,useFormState:rs,useActionState:rs,useOptimistic:function(e,t){var n=ko();return lo===null?(n.baseState=e,[e,n.queue.dispatch]):Go(n,lo,e,t)},useMemoCache:No,useCacheRefresh:Os};Bs.useEffectEvent=ds;function Vs(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:h({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hs={enqueueSetState:function(e,t,n){e=e._reactInternals;var r=hu(),i=za(r);i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(_u(t,e,r),Va(t,e,r))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=hu(),i=za(r);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=Ba(e,i,r),t!==null&&(_u(t,e,r),Va(t,e,r))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=hu(),r=za(n);r.tag=2,t!=null&&(r.callback=t),t=Ba(e,r,n),t!==null&&(_u(t,e,n),Va(t,e,n))}};function Us(e,t,n,r,i,a,o){return e=e.stateNode,typeof e.shouldComponentUpdate==`function`?e.shouldComponentUpdate(r,a,o):t.prototype&&t.prototype.isPureReactComponent?!wr(n,r)||!wr(i,a):!0}function Ws(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps==`function`&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps==`function`&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hs.enqueueReplaceState(t,t.state,null)}function Gs(e,t){var n=t;if(`ref`in t)for(var r in n={},t)r!==`ref`&&(n[r]=t[r]);if(e=e.defaultProps)for(var i in n===t&&(n=h({},n)),e)n[i]===void 0&&(n[i]=e[i]);return n}function Ks(e){Zr(e)}function qs(e){console.error(e)}function Js(e){Zr(e)}function Ys(e,t){try{var n=e.onUncaughtError;n(t.value,{componentStack:t.stack})}catch(e){setTimeout(function(){throw e})}}function Xs(e,t,n){try{var r=e.onCaughtError;r(n.value,{componentStack:n.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(e){setTimeout(function(){throw e})}}function Zs(e,t,n){return n=za(n),n.tag=3,n.payload={element:null},n.callback=function(){Ys(e,t)},n}function Qs(e){return e=za(e),e.tag=3,e}function $s(e,t,n,r){var i=n.type.getDerivedStateFromError;if(typeof i==`function`){var a=r.value;e.payload=function(){return i(a)},e.callback=function(){Xs(t,n,r)}}var o=n.stateNode;o!==null&&typeof o.componentDidCatch==`function`&&(e.callback=function(){Xs(t,n,r),typeof i!=`function`&&(au===null?au=new Set([this]):au.add(this));var e=r.stack;this.componentDidCatch(r.value,{componentStack:e===null?``:e})})}function ec(e,t,n,r,a){if(n.flags|=32768,typeof r==`object`&&r&&typeof r.then==`function`){if(t=n.alternate,t!==null&&Yi(t,n,a,!0),n=$a.current,n!==null){switch(n.tag){case 31:case 13:return eo===null?ku():n.alternate===null&&Kl===0&&(Kl=3),n.flags&=-257,n.flags|=65536,n.lanes=a,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?n.updateQueue=new Set([r]):t.add(r),Ku(e,r,a)),!1;case 22:return n.flags|=65536,r===xa?n.flags|=16384:(t=n.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([r])},n.updateQueue=t):(n=t.retryQueue,n===null?t.retryQueue=new Set([r]):n.add(r)),Ku(e,r,a)),!1}throw Error(i(435,n.tag))}return Ku(e,r,a),ku(),!1}if(B)return t=$a.current,t===null?(r!==Fi&&(t=Error(i(423),{cause:r}),Vi(vi(t,n))),e=e.current.alternate,e.flags|=65536,a&=-a,e.lanes|=a,r=vi(r,n),a=Zs(e.stateNode,r,a),Ha(e,a),Kl!==4&&(Kl=2)):(!(t.flags&65536)&&(t.flags|=256),t.flags|=65536,t.lanes=a,r!==Fi&&(e=Error(i(422),{cause:r}),Vi(vi(e,n)))),!1;var o=Error(i(520),{cause:r});if(o=vi(o,n),Ql===null?Ql=[o]:Ql.push(o),Kl!==4&&(Kl=2),t===null)return!0;r=vi(r,n),n=t;do{switch(n.tag){case 3:return n.flags|=65536,e=a&-a,n.lanes|=e,e=Zs(n.stateNode,r,e),Ha(n,e),!1;case 1:if(t=n.type,o=n.stateNode,!(n.flags&128)&&(typeof t.getDerivedStateFromError==`function`||o!==null&&typeof o.componentDidCatch==`function`&&(au===null||!au.has(o))))return n.flags|=65536,a&=-a,n.lanes|=a,a=Qs(a),$s(a,e,n,r),Ha(n,a),!1}n=n.return}while(n!==null);return!1}var tc=Error(i(461)),nc=!1;function rc(e,t,n,r){t.child=e===null?Fa(t,null,n,r):Pa(t,e.child,n,r)}function ic(e,t,n,r,i){n=n.render;var a=t.ref;if(`ref`in r){var o={};for(var s in r)s!==`ref`&&(o[s]=r[s])}else o=r;return Zi(t),r=xo(e,t,n,o,a,i),s=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(B&&s&&ki(t),t.flags|=1,rc(e,t,r,i),t.child)}function ac(e,t,n,r,i){if(e===null){var a=n.type;return typeof a==`function`&&!ui(a)&&a.defaultProps===void 0&&n.compare===null?(t.tag=15,t.type=a,oc(e,t,a,r,i)):(e=fi(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,!kc(e,i)){var o=a.memoizedProps;if(n=n.compare,n=n===null?wr:n,n(o,r)&&e.ref===t.ref)return Oc(e,t,i)}return t.flags|=1,e=di(a,r),e.ref=t.ref,e.return=t,t.child=e}function oc(e,t,n,r,i){if(e!==null){var a=e.memoizedProps;if(wr(a,r)&&e.ref===t.ref)if(nc=!1,t.pendingProps=r=a,kc(e,i))e.flags&131072&&(nc=!0);else return t.lanes=e.lanes,Oc(e,t,i)}return mc(e,t,n,r,i)}function sc(e,t,n,r){var i=r.children,a=e===null?null:e.memoizedState;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),r.mode===`hidden`){if(t.flags&128){if(a=a===null?n:a.baseLanes|n,e!==null){for(r=t.child=e.child,i=0;r!==null;)i=i|r.lanes|r.childLanes,r=r.sibling;r=i&~a}else r=0,t.child=null;return lc(e,t,a,n,r)}if(n&536870912)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ga(t,a===null?null:a.cachePool),a===null?Za():Xa(t,a),ro(t);else return r=t.lanes=536870912,lc(e,t,a===null?n:a.baseLanes|n,n,r)}else a===null?(e!==null&&ga(t,null),Za(),io(t)):(ga(t,a.cachePool),Xa(t,a),io(t),t.memoizedState=null);return rc(e,t,i,n),t.child}function cc(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function lc(e,t,n,r,i){var a=ha();return a=a===null?null:{parent:ra._currentValue,pool:a},t.memoizedState={baseLanes:n,cachePool:a},e!==null&&ga(t,null),Za(),ro(t),e!==null&&Yi(e,t,r,!0),t.childLanes=i,null}function uc(e,t){return t=Cc({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function dc(e,t,n){return Pa(t,e.child,null,n),e=uc(t,t.pendingProps),e.flags|=2,ao(t),t.memoizedState=null,e}function fc(e,t,n){var r=t.pendingProps,a=(t.flags&128)!=0;if(t.flags&=-129,e===null){if(B){if(r.mode===`hidden`)return e=uc(t,r),t.lanes=536870912,cc(null,e);if(no(t),(e=Ni)?(e=rf(e,V),e=e!==null&&e.data===`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:z,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw H(t);return t.lanes=536870912,null}return uc(t,r)}var o=e.memoizedState;if(o!==null){var s=o.dehydrated;if(no(t),a)if(t.flags&256)t.flags&=-257,t=dc(e,t,n);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(i(558));else if(nc||Yi(e,t,n,!1),a=(n&e.childLanes)!==0,nc||a){if(r=zl,r!==null&&(s=st(r,n),s!==0&&s!==o.retryLane))throw o.retryLane=s,ii(e,s),_u(r,e,s),tc;ku(),t=dc(e,t,n)}else e=o.treeContext,Ni=cf(s.nextSibling),Mi=t,B=!0,Pi=null,V=!1,e!==null&&ji(t,e),t=uc(t,r),t.flags|=4096;return t}return e=di(e.child,{mode:r.mode,children:r.children}),e.ref=t.ref,t.child=e,e.return=t,e}function pc(e,t){var n=t.ref;if(n===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof n!=`function`&&typeof n!=`object`)throw Error(i(284));(e===null||e.ref!==n)&&(t.flags|=4194816)}}function mc(e,t,n,r,i){return Zi(t),n=xo(e,t,n,r,void 0,i),r=To(),e!==null&&!nc?(Eo(e,t,i),Oc(e,t,i)):(B&&r&&ki(t),t.flags|=1,rc(e,t,n,i),t.child)}function hc(e,t,n,r,i,a){return Zi(t),t.updateQueue=null,n=Co(t,r,n,i),So(e),r=To(),e!==null&&!nc?(Eo(e,t,a),Oc(e,t,a)):(B&&r&&ki(t),t.flags|=1,rc(e,t,n,a),t.child)}function gc(e,t,n,r,i){if(Zi(t),t.stateNode===null){var a=si,o=n.contextType;typeof o==`object`&&o&&(a=U(o)),a=new n(r,a),t.memoizedState=a.state!==null&&a.state!==void 0?a.state:null,a.updater=Hs,t.stateNode=a,a._reactInternals=t,a=t.stateNode,a.props=r,a.state=t.memoizedState,a.refs={},La(t),o=n.contextType,a.context=typeof o==`object`&&o?U(o):si,a.state=t.memoizedState,o=n.getDerivedStateFromProps,typeof o==`function`&&(Vs(t,n,o,r),a.state=t.memoizedState),typeof n.getDerivedStateFromProps==`function`||typeof a.getSnapshotBeforeUpdate==`function`||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(o=a.state,typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount(),o!==a.state&&Hs.enqueueReplaceState(a,a.state,null),Ga(t,r,a,i),Wa(),a.state=t.memoizedState),typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!0}else if(e===null){a=t.stateNode;var s=t.memoizedProps,c=Gs(n,s);a.props=c;var l=a.context,u=n.contextType;o=si,typeof u==`object`&&u&&(o=U(u));var d=n.getDerivedStateFromProps;u=typeof d==`function`||typeof a.getSnapshotBeforeUpdate==`function`,s=t.pendingProps!==s,u||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(s||l!==o)&&Ws(t,a,r,o),Ia=!1;var f=t.memoizedState;a.state=f,Ga(t,r,a,i),Wa(),l=t.memoizedState,s||f!==l||Ia?(typeof d==`function`&&(Vs(t,n,d,r),l=t.memoizedState),(c=Ia||Us(t,n,c,r,f,l,o))?(u||typeof a.UNSAFE_componentWillMount!=`function`&&typeof a.componentWillMount!=`function`||(typeof a.componentWillMount==`function`&&a.componentWillMount(),typeof a.UNSAFE_componentWillMount==`function`&&a.UNSAFE_componentWillMount()),typeof a.componentDidMount==`function`&&(t.flags|=4194308)):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),a.props=r,a.state=l,a.context=o,r=c):(typeof a.componentDidMount==`function`&&(t.flags|=4194308),r=!1)}else{a=t.stateNode,Ra(e,t),o=t.memoizedProps,u=Gs(n,o),a.props=u,d=t.pendingProps,f=a.context,l=n.contextType,c=si,typeof l==`object`&&l&&(c=U(l)),s=n.getDerivedStateFromProps,(l=typeof s==`function`||typeof a.getSnapshotBeforeUpdate==`function`)||typeof a.UNSAFE_componentWillReceiveProps!=`function`&&typeof a.componentWillReceiveProps!=`function`||(o!==d||f!==c)&&Ws(t,a,r,c),Ia=!1,f=t.memoizedState,a.state=f,Ga(t,r,a,i),Wa();var p=t.memoizedState;o!==d||f!==p||Ia||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof s==`function`&&(Vs(t,n,s,r),p=t.memoizedState),(u=Ia||Us(t,n,u,r,f,p,c)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(l||typeof a.UNSAFE_componentWillUpdate!=`function`&&typeof a.componentWillUpdate!=`function`||(typeof a.componentWillUpdate==`function`&&a.componentWillUpdate(r,p,c),typeof a.UNSAFE_componentWillUpdate==`function`&&a.UNSAFE_componentWillUpdate(r,p,c)),typeof a.componentDidUpdate==`function`&&(t.flags|=4),typeof a.getSnapshotBeforeUpdate==`function`&&(t.flags|=1024)):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=p),a.props=r,a.state=p,a.context=c,r=u):(typeof a.componentDidUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof a.getSnapshotBeforeUpdate!=`function`||o===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return a=r,pc(e,t),r=(t.flags&128)!=0,a||r?(a=t.stateNode,n=r&&typeof n.getDerivedStateFromError!=`function`?null:a.render(),t.flags|=1,e!==null&&r?(t.child=Pa(t,e.child,null,i),t.child=Pa(t,null,n,i)):rc(e,t,n,i),t.memoizedState=a.state,e=t.child):e=Oc(e,t,i),e}function _c(e,t,n,r){return zi(),t.flags|=256,rc(e,t,n,r),t.child}var vc={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function yc(e){return{baseLanes:e,cachePool:_a()}}function bc(e,t,n){return e=e===null?0:e.childLanes&~n,t&&(e|=Xl),e}function xc(e,t,n){var r=t.pendingProps,a=!1,o=(t.flags&128)!=0,s;if((s=o)||(s=e!==null&&e.memoizedState===null?!1:(oo.current&2)!=0),s&&(a=!0,t.flags&=-129),s=(t.flags&32)!=0,t.flags&=-33,e===null){if(B){if(a?to(t):io(t),(e=Ni)?(e=rf(e,V),e=e!==null&&e.data!==`&`?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ti===null?null:{id:z,overflow:Ei},retryLane:536870912,hydrationErrors:null},n=hi(e),n.return=t,t.child=n,Mi=t,Ni=null)):e=null,e===null)throw H(t);return of(e)?t.lanes=32:t.lanes=536870912,null}var c=r.children;return r=r.fallback,a?(io(t),a=t.mode,c=Cc({mode:`hidden`,children:c},a),r=pi(r,a,n,null),c.return=t,r.return=t,c.sibling=r,t.child=c,r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(null,r)):(to(t),Sc(t,c))}var l=e.memoizedState;if(l!==null&&(c=l.dehydrated,c!==null)){if(o)t.flags&256?(to(t),t.flags&=-257,t=wc(e,t,n)):t.memoizedState===null?(io(t),c=r.fallback,a=t.mode,r=Cc({mode:`visible`,children:r.children},a),c=pi(c,a,n,null),c.flags|=2,r.return=t,c.return=t,r.sibling=c,t.child=r,Pa(t,e.child,null,n),r=t.child,r.memoizedState=yc(n),r.childLanes=bc(e,s,n),t.memoizedState=vc,t=cc(null,r)):(io(t),t.child=e.child,t.flags|=128,t=null);else if(to(t),of(c)){if(s=c.nextSibling&&c.nextSibling.dataset,s)var u=s.dgst;s=u,r=Error(i(419)),r.stack=``,r.digest=s,Vi({value:r,source:null,stack:null}),t=wc(e,t,n)}else if(nc||Yi(e,t,n,!1),s=(n&e.childLanes)!==0,nc||s){if(s=zl,s!==null&&(r=st(s,n),r!==0&&r!==l.retryLane))throw l.retryLane=r,ii(e,r),_u(s,e,r),tc;af(c)||ku(),t=wc(e,t,n)}else af(c)?(t.flags|=192,t.child=e.child,t=null):(e=l.treeContext,Ni=cf(c.nextSibling),Mi=t,B=!0,Pi=null,V=!1,e!==null&&ji(t,e),t=Sc(t,r.children),t.flags|=4096);return t}return a?(io(t),c=r.fallback,a=t.mode,l=e.child,u=l.sibling,r=di(l,{mode:`hidden`,children:r.children}),r.subtreeFlags=l.subtreeFlags&65011712,u===null?(c=pi(c,a,n,null),c.flags|=2):c=di(u,c),c.return=t,r.return=t,r.sibling=c,t.child=r,cc(null,r),r=t.child,c=e.child.memoizedState,c===null?c=yc(n):(a=c.cachePool,a===null?a=_a():(l=ra._currentValue,a=a.parent===l?a:{parent:l,pool:l}),c={baseLanes:c.baseLanes|n,cachePool:a}),r.memoizedState=c,r.childLanes=bc(e,s,n),t.memoizedState=vc,cc(e.child,r)):(to(t),n=e.child,e=n.sibling,n=di(n,{mode:`visible`,children:r.children}),n.return=t,n.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=n,t.memoizedState=null,n)}function Sc(e,t){return t=Cc({mode:`visible`,children:t},e.mode),t.return=e,e.child=t}function Cc(e,t){return e=li(22,e,null,t),e.lanes=0,e}function wc(e,t,n){return Pa(t,e.child,null,n),e=Sc(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Tc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),qi(e.return,t,n)}function Ec(e,t,n,r,i,a){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,treeForkCount:a}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.treeForkCount=a)}function Dc(e,t,n){var r=t.pendingProps,i=r.revealOrder,a=r.tail;r=r.children;var o=oo.current,s=(o&2)!=0;if(s?(o=o&1|2,t.flags|=128):o&=1,k(oo,o),rc(e,t,r,n),r=B?Si:0,!s&&e!==null&&e.flags&128)a:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Tc(e,n,t);else if(e.tag===19)Tc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break a;for(;e.sibling===null;){if(e.return===null||e.return===t)break a;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case`forwards`:for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&so(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),Ec(t,!1,i,n,a,r);break;case`backwards`:case`unstable_legacy-backwards`:for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&so(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}Ec(t,!0,n,null,a,r);break;case`together`:Ec(t,!1,null,null,void 0,r);break;default:t.memoizedState=null}return t.child}function Oc(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),ql|=t.lanes,(n&t.childLanes)===0)if(e!==null){if(Yi(e,t,n,!1),(n&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(i(153));if(t.child!==null){for(e=t.child,n=di(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=di(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function kc(e,t){return(e.lanes&t)===0?(e=e.dependencies,!!(e!==null&&Xi(e))):!0}function Ac(e,t,n){switch(t.tag){case 3:ve(t,t.stateNode.containerInfo),Gi(t,ra,e.memoizedState.cache),zi();break;case 27:case 5:be(t);break;case 4:ve(t,t.stateNode.containerInfo);break;case 10:Gi(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,no(t),null;break;case 13:var r=t.memoizedState;if(r!==null)return r.dehydrated===null?(n&t.child.childLanes)===0?(to(t),e=Oc(e,t,n),e===null?null:e.sibling):xc(e,t,n):(to(t),t.flags|=128,null);to(t);break;case 19:var i=(e.flags&128)!=0;if(r=(n&t.childLanes)!==0,r||=(Yi(e,t,n,!1),(n&t.childLanes)!==0),i){if(r)return Dc(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),k(oo,oo.current),r)break;return null;case 22:return t.lanes=0,sc(e,t,n,t.pendingProps);case 24:Gi(t,ra,e.memoizedState.cache)}return Oc(e,t,n)}function jc(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps)nc=!0;else{if(!kc(e,n)&&!(t.flags&128))return nc=!1,Ac(e,t,n);nc=!!(e.flags&131072)}else nc=!1,B&&t.flags&1048576&&Oi(t,Si,t.index);switch(t.lanes=0,t.tag){case 16:a:{var r=t.pendingProps;if(e=wa(t.elementType),t.type=e,typeof e==`function`)ui(e)?(r=Gs(e,r),t.tag=1,t=gc(null,t,e,r,n)):(t.tag=0,t=mc(null,t,e,r,n));else{if(e!=null){var a=e.$$typeof;if(a===w){t.tag=11,t=ic(null,t,e,r,n);break a}else if(a===te){t.tag=14,t=ac(null,t,e,r,n);break a}}throw t=se(e)||e,Error(i(306,t,``))}}return t;case 0:return mc(e,t,t.type,t.pendingProps,n);case 1:return r=t.type,a=Gs(r,t.pendingProps),gc(e,t,r,a,n);case 3:a:{if(ve(t,t.stateNode.containerInfo),e===null)throw Error(i(387));r=t.pendingProps;var o=t.memoizedState;a=o.element,Ra(e,t),Ga(t,r,null,n);var s=t.memoizedState;if(r=s.cache,Gi(t,ra,r),r!==o.cache&&Ji(t,[ra],n,!0),Wa(),r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){t=_c(e,t,r,n);break a}else if(r!==a){a=vi(Error(i(424)),t),Vi(a),t=_c(e,t,r,n);break a}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName===`HTML`?e.ownerDocument.body:e}for(Ni=cf(e.firstChild),Mi=t,B=!0,Pi=null,V=!0,n=Fa(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling}else{if(zi(),r===a){t=Oc(e,t,n);break a}rc(e,t,r,n)}t=t.child}return t;case 26:return pc(e,t),e===null?(n=kf(t.type,null,t.pendingProps,null))?t.memoizedState=n:B||(n=t.type,e=t.pendingProps,r=Bd(ge.current).createElement(n),r[pt]=t,r[mt]=e,Pd(r,n,e),Et(r),t.stateNode=r):t.memoizedState=kf(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return be(t),e===null&&B&&(r=t.stateNode=ff(t.type,t.pendingProps,ge.current),Mi=t,V=!0,a=Ni,Zd(t.type)?(lf=a,Ni=cf(r.firstChild)):Ni=a),rc(e,t,t.pendingProps.children,n),pc(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&B&&((a=r=Ni)&&(r=tf(r,t.type,t.pendingProps,V),r===null?a=!1:(t.stateNode=r,Mi=t,Ni=cf(r.firstChild),V=!1,a=!0)),a||H(t)),be(t),a=t.type,o=t.pendingProps,s=e===null?null:e.memoizedProps,r=o.children,Ud(a,o)?r=null:s!==null&&Ud(a,s)&&(t.flags|=32),t.memoizedState!==null&&(a=xo(e,t,wo,null,null,n),Qf._currentValue=a),pc(e,t),rc(e,t,r,n),t.child;case 6:return e===null&&B&&((e=n=Ni)&&(n=nf(n,t.pendingProps,V),n===null?e=!1:(t.stateNode=n,Mi=t,Ni=null,e=!0)),e||H(t)),null;case 13:return xc(e,t,n);case 4:return ve(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Pa(t,null,r,n):rc(e,t,r,n),t.child;case 11:return ic(e,t,t.type,t.pendingProps,n);case 7:return rc(e,t,t.pendingProps,n),t.child;case 8:return rc(e,t,t.pendingProps.children,n),t.child;case 12:return rc(e,t,t.pendingProps.children,n),t.child;case 10:return r=t.pendingProps,Gi(t,t.type,r.value),rc(e,t,r.children,n),t.child;case 9:return a=t.type._context,r=t.pendingProps.children,Zi(t),a=U(a),r=r(a),t.flags|=1,rc(e,t,r,n),t.child;case 14:return ac(e,t,t.type,t.pendingProps,n);case 15:return oc(e,t,t.type,t.pendingProps,n);case 19:return Dc(e,t,n);case 31:return fc(e,t,n);case 22:return sc(e,t,n,t.pendingProps);case 24:return Zi(t),r=U(ra),e===null?(a=ha(),a===null&&(a=zl,o=ia(),a.pooledCache=o,o.refCount++,o!==null&&(a.pooledCacheLanes|=n),a=o),t.memoizedState={parent:r,cache:a},La(t),Gi(t,ra,a)):((e.lanes&n)!==0&&(Ra(e,t),Ga(t,null,null,n),Wa()),a=e.memoizedState,o=t.memoizedState,a.parent===r?(r=o.cache,Gi(t,ra,r),r!==a.cache&&Ji(t,[ra],n,!0)):(a={parent:r,cache:r},t.memoizedState=a,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=a),Gi(t,ra,r))),rc(e,t,t.pendingProps.children,n),t.child;case 29:throw t.pendingProps}throw Error(i(156,t.tag))}function Mc(e){e.flags|=4}function Nc(e,t,n,r,i){if((t=(e.mode&32)!=0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(Eu())e.flags|=8192;else throw Ta=xa,ya}else e.flags&=-16777217}function Pc(e,t){if(t.type!==`stylesheet`||t.state.loading&4)e.flags&=-16777217;else if(e.flags|=16777216,!Wf(t))if(Eu())e.flags|=8192;else throw Ta=xa,ya}function Fc(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag===22?536870912:nt(),e.lanes|=t,Zl|=t)}function Ic(e,t){if(!B)switch(e.tailMode){case`hidden`:t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case`collapsed`:n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Lc(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&65011712,r|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Rc(e,t,n){var r=t.pendingProps;switch(Ai(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Lc(t),null;case 1:return Lc(t),null;case 3:return n=t.stateNode,r=null,e!==null&&(r=e.memoizedState.cache),t.memoizedState.cache!==r&&(t.flags|=2048),Ki(ra),ye(),n.pendingContext&&(n.context=n.pendingContext,n.pendingContext=null),(e===null||e.child===null)&&(Ri(t)?Mc(t):e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,Bi())),Lc(t),null;case 26:var a=t.type,o=t.memoizedState;return e===null?(Mc(t),o===null?(Lc(t),Nc(t,a,null,r,n)):(Lc(t),Pc(t,o))):o?o===e.memoizedState?(Lc(t),t.flags&=-16777217):(Mc(t),Lc(t),Pc(t,o)):(e=e.memoizedProps,e!==r&&Mc(t),Lc(t),Nc(t,a,e,r,n)),null;case 27:if(xe(t),n=ge.current,a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}e=me.current,Ri(t)?Ii(t,e):(e=ff(a,r,n),t.stateNode=e,Mc(t))}return Lc(t),null;case 5:if(xe(t),a=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(!r){if(t.stateNode===null)throw Error(i(166));return Lc(t),null}if(o=me.current,Ri(t))Ii(t,o);else{var s=Bd(ge.current);switch(o){case 1:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case 2:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;default:switch(a){case`svg`:o=s.createElementNS(`http://www.w3.org/2000/svg`,a);break;case`math`:o=s.createElementNS(`http://www.w3.org/1998/Math/MathML`,a);break;case`script`:o=s.createElement(`div`),o.innerHTML=`<script><\/script>`,o=o.removeChild(o.firstChild);break;case`select`:o=typeof r.is==`string`?s.createElement(`select`,{is:r.is}):s.createElement(`select`),r.multiple?o.multiple=!0:r.size&&(o.size=r.size);break;default:o=typeof r.is==`string`?s.createElement(a,{is:r.is}):s.createElement(a)}}o[pt]=t,o[mt]=r;a:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)o.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break a;for(;s.sibling===null;){if(s.return===null||s.return===t)break a;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=o;a:switch(Pd(o,a,r),a){case`button`:case`input`:case`select`:case`textarea`:r=!!r.autoFocus;break a;case`img`:r=!0;break a;default:r=!1}r&&Mc(t)}}return Lc(t),Nc(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,n),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==r&&Mc(t);else{if(typeof r!=`string`&&t.stateNode===null)throw Error(i(166));if(e=ge.current,Ri(t)){if(e=t.stateNode,n=t.memoizedProps,r=null,a=Mi,a!==null)switch(a.tag){case 27:case 5:r=a.memoizedProps}e[pt]=t,e=!!(e.nodeValue===n||r!==null&&!0===r.suppressHydrationWarning||jd(e.nodeValue,n)),e||H(t,!0)}else e=Bd(e).createTextNode(r),e[pt]=t,t.stateNode=e}return Lc(t),null;case 31:if(n=t.memoizedState,e===null||e.memoizedState!==null){if(r=Ri(t),n!==null){if(e===null){if(!r)throw Error(i(318));if(e=t.memoizedState,e=e===null?null:e.dehydrated,!e)throw Error(i(557));e[pt]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),e=!1}else n=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),e=!0;if(!e)return t.flags&256?(ao(t),t):(ao(t),null);if(t.flags&128)throw Error(i(558))}return Lc(t),null;case 13:if(r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(a=Ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(i(318));if(a=t.memoizedState,a=a===null?null:a.dehydrated,!a)throw Error(i(317));a[pt]=t}else zi(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;Lc(t),a=!1}else a=Bi(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),a=!0;if(!a)return t.flags&256?(ao(t),t):(ao(t),null)}return ao(t),t.flags&128?(t.lanes=n,t):(n=r!==null,e=e!==null&&e.memoizedState!==null,n&&(r=t.child,a=null,r.alternate!==null&&r.alternate.memoizedState!==null&&r.alternate.memoizedState.cachePool!==null&&(a=r.alternate.memoizedState.cachePool.pool),o=null,r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),o!==a&&(r.flags|=2048)),n!==e&&n&&(t.child.flags|=8192),Fc(t,t.updateQueue),Lc(t),null);case 4:return ye(),e===null&&xd(t.stateNode.containerInfo),Lc(t),null;case 10:return Ki(t.type),Lc(t),null;case 19:if(pe(oo),r=t.memoizedState,r===null)return Lc(t),null;if(a=(t.flags&128)!=0,o=r.rendering,o===null)if(a)Ic(r,!1);else{if(Kl!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(o=so(e),o!==null){for(t.flags|=128,Ic(r,!1),e=o.updateQueue,t.updateQueue=e,Fc(t,e),t.subtreeFlags=0,e=n,n=t.child;n!==null;)R(n,e),n=n.sibling;return k(oo,oo.current&1|2),B&&Di(t,r.treeForkCount),t.child}e=e.sibling}r.tail!==null&&Pe()>ru&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304)}else{if(!a)if(e=so(o),e!==null){if(t.flags|=128,a=!0,e=e.updateQueue,t.updateQueue=e,Fc(t,e),Ic(r,!0),r.tail===null&&r.tailMode===`hidden`&&!o.alternate&&!B)return Lc(t),null}else 2*Pe()-r.renderingStartTime>ru&&n!==536870912&&(t.flags|=128,a=!0,Ic(r,!1),t.lanes=4194304);r.isBackwards?(o.sibling=t.child,t.child=o):(e=r.last,e===null?t.child=o:e.sibling=o,r.last=o)}return r.tail===null?(Lc(t),null):(e=r.tail,r.rendering=e,r.tail=e.sibling,r.renderingStartTime=Pe(),e.sibling=null,n=oo.current,k(oo,a?n&1|2:n&1),B&&Di(t,r.treeForkCount),e);case 22:case 23:return ao(t),Qa(),r=t.memoizedState!==null,e===null?r&&(t.flags|=8192):e.memoizedState!==null!==r&&(t.flags|=8192),r?n&536870912&&!(t.flags&128)&&(Lc(t),t.subtreeFlags&6&&(t.flags|=8192)):Lc(t),n=t.updateQueue,n!==null&&Fc(t,n.retryQueue),n=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),r=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(r=t.memoizedState.cachePool.pool),r!==n&&(t.flags|=2048),e!==null&&pe(ma),null;case 24:return n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),Ki(ra),Lc(t),null;case 25:return null;case 30:return null}throw Error(i(156,t.tag))}function zc(e,t){switch(Ai(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Ki(ra),ye(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return xe(t),null;case 31:if(t.memoizedState!==null){if(ao(t),t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(ao(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(i(340));zi()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return pe(oo),null;case 4:return ye(),null;case 10:return Ki(t.type),null;case 22:case 23:return ao(t),Qa(),e!==null&&pe(ma),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Ki(ra),null;case 25:return null;default:return null}}function Bc(e,t){switch(Ai(t),t.tag){case 3:Ki(ra),ye();break;case 26:case 27:case 5:xe(t);break;case 4:ye();break;case 31:t.memoizedState!==null&&ao(t);break;case 13:ao(t);break;case 19:pe(oo);break;case 10:Ki(t.type);break;case 22:case 23:ao(t),Qa(),e!==null&&pe(ma);break;case 24:Ki(ra)}}function Vc(e,t){try{var n=t.updateQueue,r=n===null?null:n.lastEffect;if(r!==null){var i=r.next;n=i;do{if((n.tag&e)===e){r=void 0;var a=n.create,o=n.inst;r=a(),o.destroy=r}n=n.next}while(n!==i)}}catch(e){X(t,t.return,e)}}function Hc(e,t,n){try{var r=t.updateQueue,i=r===null?null:r.lastEffect;if(i!==null){var a=i.next;r=a;do{if((r.tag&e)===e){var o=r.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var c=n,l=s;try{l()}catch(e){X(i,c,e)}}}r=r.next}while(r!==a)}}catch(e){X(t,t.return,e)}}function Uc(e){var t=e.updateQueue;if(t!==null){var n=e.stateNode;try{qa(t,n)}catch(t){X(e,e.return,t)}}}function Wc(e,t,n){n.props=Gs(e.type,e.memoizedProps),n.state=e.memoizedState;try{n.componentWillUnmount()}catch(n){X(e,t,n)}}function Gc(e,t){try{var n=e.ref;if(n!==null){switch(e.tag){case 26:case 27:case 5:var r=e.stateNode;break;case 30:r=e.stateNode;break;default:r=e.stateNode}typeof n==`function`?e.refCleanup=n(r):n.current=r}}catch(n){X(e,t,n)}}function Kc(e,t){var n=e.ref,r=e.refCleanup;if(n!==null)if(typeof r==`function`)try{r()}catch(n){X(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof n==`function`)try{n(null)}catch(n){X(e,t,n)}else n.current=null}function qc(e){var t=e.type,n=e.memoizedProps,r=e.stateNode;try{a:switch(t){case`button`:case`input`:case`select`:case`textarea`:n.autoFocus&&r.focus();break a;case`img`:n.src?r.src=n.src:n.srcSet&&(r.srcset=n.srcSet)}}catch(t){X(e,e.return,t)}}function Jc(e,t,n){try{var r=e.stateNode;Fd(r,e.type,n,t),r[mt]=t}catch(t){X(e,e.return,t)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&Zd(e.type)||e.tag===4}function Xc(e){a:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&Zd(e.type)||e.flags&2||e.child===null||e.tag===4)continue a;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Zc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?(n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n).insertBefore(e,t):(t=n.nodeType===9?n.body:n.nodeName===`HTML`?n.ownerDocument.body:n,t.appendChild(e),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=rn));else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode,t=null),e=e.child,e!==null))for(Zc(e,t,n),e=e.sibling;e!==null;)Zc(e,t,n),e=e.sibling}function Qc(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(r===27&&Zd(e.type)&&(n=e.stateNode),e=e.child,e!==null))for(Qc(e,t,n),e=e.sibling;e!==null;)Qc(e,t,n),e=e.sibling}function $c(e){var t=e.stateNode,n=e.memoizedProps;try{for(var r=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Pd(t,r,n),t[pt]=e,t[mt]=n}catch(t){X(e,e.return,t)}}var el=!1,tl=!1,nl=!1,rl=typeof WeakSet==`function`?WeakSet:Set,il=null;function al(e,t){if(e=e.containerInfo,Rd=sp,e=Or(e),kr(e)){if(`selectionStart`in e)var n={start:e.selectionStart,end:e.selectionEnd};else a:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break a}var s=0,c=-1,l=-1,u=0,d=0,f=e,p=null;b:for(;;){for(var m;f!==n||a!==0&&f.nodeType!==3||(c=s+a),f!==o||r!==0&&f.nodeType!==3||(l=s+r),f.nodeType===3&&(s+=f.nodeValue.length),(m=f.firstChild)!==null;)p=f,f=m;for(;;){if(f===e)break b;if(p===n&&++u===a&&(c=s),p===o&&++d===r&&(l=s),(m=f.nextSibling)!==null)break;f=p,p=f.parentNode}f=m}n=c===-1||l===-1?null:{start:c,end:l}}else n=null}n||={start:0,end:0}}else n=null;for(zd={focusedElem:e,selectionRange:n},sp=!1,il=t;il!==null;)if(t=il,e=t.child,t.subtreeFlags&1028&&e!==null)e.return=t,il=e;else for(;il!==null;){switch(t=il,o=t.alternate,e=t.flags,t.tag){case 0:if(e&4&&(e=t.updateQueue,e=e===null?null:e.events,e!==null))for(n=0;n<e.length;n++)a=e[n],a.ref.impl=a.nextImpl;break;case 11:case 15:break;case 1:if(e&1024&&o!==null){e=void 0,n=t,a=o.memoizedProps,o=o.memoizedState,r=n.stateNode;try{var h=Gs(n.type,a);e=r.getSnapshotBeforeUpdate(h,o),r.__reactInternalSnapshotBeforeUpdate=e}catch(e){X(n,n.return,e)}}break;case 3:if(e&1024){if(e=t.stateNode.containerInfo,n=e.nodeType,n===9)ef(e);else if(n===1)switch(e.nodeName){case`HEAD`:case`HTML`:case`BODY`:ef(e);break;default:e.textContent=``}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if(e&1024)throw Error(i(163))}if(e=t.sibling,e!==null){e.return=t.return,il=e;break}il=t.return}}function ol(e,t,n){var r=n.flags;switch(n.tag){case 0:case 11:case 15:xl(e,n),r&4&&Vc(5,n);break;case 1:if(xl(e,n),r&4)if(e=n.stateNode,t===null)try{e.componentDidMount()}catch(e){X(n,n.return,e)}else{var i=Gs(n.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(e){X(n,n.return,e)}}r&64&&Uc(n),r&512&&Gc(n,n.return);break;case 3:if(xl(e,n),r&64&&(e=n.updateQueue,e!==null)){if(t=null,n.child!==null)switch(n.child.tag){case 27:case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}try{qa(e,t)}catch(e){X(n,n.return,e)}}break;case 27:t===null&&r&4&&$c(n);case 26:case 5:xl(e,n),t===null&&r&4&&qc(n),r&512&&Gc(n,n.return);break;case 12:xl(e,n);break;case 31:xl(e,n),r&4&&fl(e,n);break;case 13:xl(e,n),r&4&&pl(e,n),r&64&&(e=n.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(n=Yu.bind(null,n),sf(e,n))));break;case 22:if(r=n.memoizedState!==null||el,!r){t=t!==null&&t.memoizedState!==null||tl,i=el;var a=tl;el=r,(tl=t)&&!a?Cl(e,n,(n.subtreeFlags&8772)!=0):xl(e,n),el=i,tl=a}break;case 30:break;default:xl(e,n)}}function sl(e){var t=e.alternate;t!==null&&(e.alternate=null,sl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&xt(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var cl=null,ll=!1;function ul(e,t,n){for(n=n.child;n!==null;)dl(e,t,n),n=n.sibling}function dl(e,t,n){if(Ue&&typeof Ue.onCommitFiberUnmount==`function`)try{Ue.onCommitFiberUnmount(He,n)}catch{}switch(n.tag){case 26:tl||Kc(n,t),ul(e,t,n),n.memoizedState?n.memoizedState.count--:n.stateNode&&(n=n.stateNode,n.parentNode.removeChild(n));break;case 27:tl||Kc(n,t);var r=cl,i=ll;Zd(n.type)&&(cl=n.stateNode,ll=!1),ul(e,t,n),pf(n.stateNode),cl=r,ll=i;break;case 5:tl||Kc(n,t);case 6:if(r=cl,i=ll,cl=null,ul(e,t,n),cl=r,ll=i,cl!==null)if(ll)try{(cl.nodeType===9?cl.body:cl.nodeName===`HTML`?cl.ownerDocument.body:cl).removeChild(n.stateNode)}catch(e){X(n,t,e)}else try{cl.removeChild(n.stateNode)}catch(e){X(n,t,e)}break;case 18:cl!==null&&(ll?(e=cl,Qd(e.nodeType===9?e.body:e.nodeName===`HTML`?e.ownerDocument.body:e,n.stateNode),Np(e)):Qd(cl,n.stateNode));break;case 4:r=cl,i=ll,cl=n.stateNode.containerInfo,ll=!0,ul(e,t,n),cl=r,ll=i;break;case 0:case 11:case 14:case 15:Hc(2,n,t),tl||Hc(4,n,t),ul(e,t,n);break;case 1:tl||(Kc(n,t),r=n.stateNode,typeof r.componentWillUnmount==`function`&&Wc(n,t,r)),ul(e,t,n);break;case 21:ul(e,t,n);break;case 22:tl=(r=tl)||n.memoizedState!==null,ul(e,t,n),tl=r;break;default:ul(e,t,n)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Np(e)}catch(e){X(t,t.return,e)}}}function pl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Np(e)}catch(e){X(t,t.return,e)}}function ml(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new rl),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new rl),t;default:throw Error(i(435,e.tag))}}function hl(e,t){var n=ml(e);t.forEach(function(t){if(!n.has(t)){n.add(t);var r=Xu.bind(null,e,t);t.then(r,r)}})}function gl(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var a=n[r],o=e,s=t,c=s;a:for(;c!==null;){switch(c.tag){case 27:if(Zd(c.type)){cl=c.stateNode,ll=!1;break a}break;case 5:cl=c.stateNode,ll=!1;break a;case 3:case 4:cl=c.stateNode.containerInfo,ll=!0;break a}c=c.return}if(cl===null)throw Error(i(160));dl(o,s,a),cl=null,ll=!1,o=a.alternate,o!==null&&(o.return=null),a.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)vl(t,e),t=t.sibling}var _l=null;function vl(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:gl(t,e),yl(e),r&4&&(Hc(3,e,e.return),Vc(3,e),Hc(5,e,e.return));break;case 1:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&64&&el&&(e=e.updateQueue,e!==null&&(r=e.callbacks,r!==null&&(n=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=n===null?r:n.concat(r))));break;case 26:var a=_l;if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),r&4){var o=n===null?null:n.memoizedState;if(r=e.memoizedState,n===null)if(r===null)if(e.stateNode===null){a:{r=e.type,n=e.memoizedProps,a=a.ownerDocument||a;b:switch(r){case`title`:o=a.getElementsByTagName(`title`)[0],(!o||o[bt]||o[pt]||o.namespaceURI===`http://www.w3.org/2000/svg`||o.hasAttribute(`itemprop`))&&(o=a.createElement(r),a.head.insertBefore(o,a.querySelector(`head > title`))),Pd(o,r,n),o[pt]=e,Et(o),r=o;break a;case`link`:var s=Vf(`link`,`href`,a).get(r+(n.href||``));if(s){for(var c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`href`)===(n.href==null||n.href===``?null:n.href)&&o.getAttribute(`rel`)===(n.rel==null?null:n.rel)&&o.getAttribute(`title`)===(n.title==null?null:n.title)&&o.getAttribute(`crossorigin`)===(n.crossOrigin==null?null:n.crossOrigin)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;case`meta`:if(s=Vf(`meta`,`content`,a).get(r+(n.content||``))){for(c=0;c<s.length;c++)if(o=s[c],o.getAttribute(`content`)===(n.content==null?null:``+n.content)&&o.getAttribute(`name`)===(n.name==null?null:n.name)&&o.getAttribute(`property`)===(n.property==null?null:n.property)&&o.getAttribute(`http-equiv`)===(n.httpEquiv==null?null:n.httpEquiv)&&o.getAttribute(`charset`)===(n.charSet==null?null:n.charSet)){s.splice(c,1);break b}}o=a.createElement(r),Pd(o,r,n),a.head.appendChild(o);break;default:throw Error(i(468,r))}o[pt]=e,Et(o),r=o}e.stateNode=r}else Hf(a,e.type,e.stateNode);else e.stateNode=If(a,r,e.memoizedProps);else o===r?r===null&&e.stateNode!==null&&Jc(e,e.memoizedProps,n.memoizedProps):(o===null?n.stateNode!==null&&(n=n.stateNode,n.parentNode.removeChild(n)):o.count--,r===null?Hf(a,e.type,e.stateNode):If(a,r,e.memoizedProps))}break;case 27:gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),n!==null&&r&4&&Jc(e,e.memoizedProps,n.memoizedProps);break;case 5:if(gl(t,e),yl(e),r&512&&(tl||n===null||Kc(n,n.return)),e.flags&32){a=e.stateNode;try{Yt(a,``)}catch(t){X(e,e.return,t)}}r&4&&e.stateNode!=null&&(a=e.memoizedProps,Jc(e,a,n===null?a:n.memoizedProps)),r&1024&&(nl=!0);break;case 6:if(gl(t,e),yl(e),r&4){if(e.stateNode===null)throw Error(i(162));r=e.memoizedProps,n=e.stateNode;try{n.nodeValue=r}catch(t){X(e,e.return,t)}}break;case 3:if(Bf=null,a=_l,_l=gf(t.containerInfo),gl(t,e),_l=a,yl(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Np(t.containerInfo)}catch(t){X(e,e.return,t)}nl&&(nl=!1,bl(e));break;case 4:r=_l,_l=gf(e.stateNode.containerInfo),gl(t,e),yl(e),_l=r;break;case 12:gl(t,e),yl(e);break;case 31:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 13:gl(t,e),yl(e),e.child.flags&8192&&e.memoizedState!==null!=(n!==null&&n.memoizedState!==null)&&(tu=Pe()),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 22:a=e.memoizedState!==null;var l=n!==null&&n.memoizedState!==null,u=el,d=tl;if(el=u||a,tl=d||l,gl(t,e),tl=d,el=u,yl(e),r&8192)a:for(t=e.stateNode,t._visibility=a?t._visibility&-2:t._visibility|1,a&&(n===null||l||el||tl||Sl(e)),n=null,t=e;;){if(t.tag===5||t.tag===26){if(n===null){l=n=t;try{if(o=l.stateNode,a)s=o.style,typeof s.setProperty==`function`?s.setProperty(`display`,`none`,`important`):s.display=`none`;else{c=l.stateNode;var f=l.memoizedProps.style,p=f!=null&&f.hasOwnProperty(`display`)?f.display:null;c.style.display=p==null||typeof p==`boolean`?``:(``+p).trim()}}catch(e){X(l,l.return,e)}}}else if(t.tag===6){if(n===null){l=t;try{l.stateNode.nodeValue=a?``:l.memoizedProps}catch(e){X(l,l.return,e)}}}else if(t.tag===18){if(n===null){l=t;try{var m=l.stateNode;a?$d(m,!0):$d(l.stateNode,!1)}catch(e){X(l,l.return,e)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break a;for(;t.sibling===null;){if(t.return===null||t.return===e)break a;n===t&&(n=null),t=t.return}n===t&&(n=null),t.sibling.return=t.return,t=t.sibling}r&4&&(r=e.updateQueue,r!==null&&(n=r.retryQueue,n!==null&&(r.retryQueue=null,hl(e,n))));break;case 19:gl(t,e),yl(e),r&4&&(r=e.updateQueue,r!==null&&(e.updateQueue=null,hl(e,r)));break;case 30:break;case 21:break;default:gl(t,e),yl(e)}}function yl(e){var t=e.flags;if(t&2){try{for(var n,r=e.return;r!==null;){if(Yc(r)){n=r;break}r=r.return}if(n==null)throw Error(i(160));switch(n.tag){case 27:var a=n.stateNode;Qc(e,Xc(e),a);break;case 5:var o=n.stateNode;n.flags&32&&(Yt(o,``),n.flags&=-33),Qc(e,Xc(e),o);break;case 3:case 4:var s=n.stateNode.containerInfo;Zc(e,Xc(e),s);break;default:throw Error(i(161))}}catch(t){X(e,e.return,t)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function bl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;bl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function xl(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ol(e,t.alternate,t),t=t.sibling}function Sl(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:Hc(4,t,t.return),Sl(t);break;case 1:Kc(t,t.return);var n=t.stateNode;typeof n.componentWillUnmount==`function`&&Wc(t,t.return,n),Sl(t);break;case 27:pf(t.stateNode);case 26:case 5:Kc(t,t.return),Sl(t);break;case 22:t.memoizedState===null&&Sl(t);break;case 30:Sl(t);break;default:Sl(t)}e=e.sibling}}function Cl(e,t,n){for(n&&=(t.subtreeFlags&8772)!=0,t=t.child;t!==null;){var r=t.alternate,i=e,a=t,o=a.flags;switch(a.tag){case 0:case 11:case 15:Cl(i,a,n),Vc(4,a);break;case 1:if(Cl(i,a,n),r=a,i=r.stateNode,typeof i.componentDidMount==`function`)try{i.componentDidMount()}catch(e){X(r,r.return,e)}if(r=a,i=r.updateQueue,i!==null){var s=r.stateNode;try{var c=i.shared.hiddenCallbacks;if(c!==null)for(i.shared.hiddenCallbacks=null,i=0;i<c.length;i++)Ka(c[i],s)}catch(e){X(r,r.return,e)}}n&&o&64&&Uc(a),Gc(a,a.return);break;case 27:$c(a);case 26:case 5:Cl(i,a,n),n&&r===null&&o&4&&qc(a),Gc(a,a.return);break;case 12:Cl(i,a,n);break;case 31:Cl(i,a,n),n&&o&4&&fl(i,a);break;case 13:Cl(i,a,n),n&&o&4&&pl(i,a);break;case 22:a.memoizedState===null&&Cl(i,a,n),Gc(a,a.return);break;case 30:break;default:Cl(i,a,n)}t=t.sibling}}function wl(e,t){var n=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(n=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==n&&(e!=null&&e.refCount++,n!=null&&aa(n))}function Tl(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e))}function El(e,t,n,r){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Dl(e,t,n,r),t=t.sibling}function Dl(e,t,n,r){var i=t.flags;switch(t.tag){case 0:case 11:case 15:El(e,t,n,r),i&2048&&Vc(9,t);break;case 1:El(e,t,n,r);break;case 3:El(e,t,n,r),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&aa(e)));break;case 12:if(i&2048){El(e,t,n,r),e=t.stateNode;try{var a=t.memoizedProps,o=a.id,s=a.onPostCommit;typeof s==`function`&&s(o,t.alternate===null?`mount`:`update`,e.passiveEffectDuration,-0)}catch(e){X(t,t.return,e)}}else El(e,t,n,r);break;case 31:El(e,t,n,r);break;case 13:El(e,t,n,r);break;case 23:break;case 22:a=t.stateNode,o=t.alternate,t.memoizedState===null?a._visibility&2?El(e,t,n,r):(a._visibility|=2,Ol(e,t,n,r,(t.subtreeFlags&10256)!=0||!1)):a._visibility&2?El(e,t,n,r):kl(e,t),i&2048&&wl(o,t);break;case 24:El(e,t,n,r),i&2048&&Tl(t.alternate,t);break;default:El(e,t,n,r)}}function Ol(e,t,n,r,i){for(i&&=(t.subtreeFlags&10256)!=0||!1,t=t.child;t!==null;){var a=e,o=t,s=n,c=r,l=o.flags;switch(o.tag){case 0:case 11:case 15:Ol(a,o,s,c,i),Vc(8,o);break;case 23:break;case 22:var u=o.stateNode;o.memoizedState===null?(u._visibility|=2,Ol(a,o,s,c,i)):u._visibility&2?Ol(a,o,s,c,i):kl(a,o),i&&l&2048&&wl(o.alternate,o);break;case 24:Ol(a,o,s,c,i),i&&l&2048&&Tl(o.alternate,o);break;default:Ol(a,o,s,c,i)}t=t.sibling}}function kl(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var n=e,r=t,i=r.flags;switch(r.tag){case 22:kl(n,r),i&2048&&wl(r.alternate,r);break;case 24:kl(n,r),i&2048&&Tl(r.alternate,r);break;default:kl(n,r)}t=t.sibling}}var Al=8192;function jl(e,t,n){if(e.subtreeFlags&Al)for(e=e.child;e!==null;)Ml(e,t,n),e=e.sibling}function Ml(e,t,n){switch(e.tag){case 26:jl(e,t,n),e.flags&Al&&e.memoizedState!==null&&Gf(n,_l,e.memoizedState,e.memoizedProps);break;case 5:jl(e,t,n);break;case 3:case 4:var r=_l;_l=gf(e.stateNode.containerInfo),jl(e,t,n),_l=r;break;case 22:e.memoizedState===null&&(r=e.alternate,r!==null&&r.memoizedState!==null?(r=Al,Al=16777216,jl(e,t,n),Al=r):jl(e,t,n));break;default:jl(e,t,n)}}function Nl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function Pl(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Nl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Fl(e),e=e.sibling}function Fl(e){switch(e.tag){case 0:case 11:case 15:Pl(e),e.flags&2048&&Hc(9,e,e.return);break;case 3:Pl(e);break;case 12:Pl(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,G(e)):Pl(e);break;default:Pl(e)}}function G(e){var t=e.deletions;if(e.flags&16){if(t!==null)for(var n=0;n<t.length;n++){var r=t[n];il=r,Il(r,e)}Nl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:Hc(8,t,t.return),G(t);break;case 22:n=t.stateNode,n._visibility&2&&(n._visibility&=-3,G(t));break;default:G(t)}e=e.sibling}}function Il(e,t){for(;il!==null;){var n=il;switch(n.tag){case 0:case 11:case 15:Hc(8,n,t);break;case 23:case 22:if(n.memoizedState!==null&&n.memoizedState.cachePool!==null){var r=n.memoizedState.cachePool.pool;r!=null&&r.refCount++}break;case 24:aa(n.memoizedState.cache)}if(r=n.child,r!==null)r.return=n,il=r;else a:for(n=e;il!==null;){r=il;var i=r.sibling,a=r.return;if(sl(r),r===n){il=null;break a}if(i!==null){i.return=a,il=i;break a}il=a}}}var Ll={getCacheForType:function(e){var t=U(ra),n=t.data.get(e);return n===void 0&&(n=e(),t.data.set(e,n)),n},cacheSignal:function(){return U(ra).controller.signal}},Rl=typeof WeakMap==`function`?WeakMap:Map,K=0,zl=null,q=null,J=0,Bl=0,Vl=null,Hl=!1,Ul=!1,Wl=!1,Gl=0,Kl=0,ql=0,Jl=0,Yl=0,Xl=0,Zl=0,Ql=null,$l=null,eu=!1,tu=0,nu=0,ru=1/0,iu=null,au=null,ou=0,su=null,cu=null,lu=0,uu=0,du=null,fu=null,pu=0,mu=null;function hu(){return K&2&&J!==0?J&-J:D.T===null?ut():Z()}function gu(){if(Xl===0)if(!(J&536870912)||B){var e=Xe;Xe<<=1,!(Xe&3932160)&&(Xe=262144),Xl=e}else Xl=536870912;return e=$a.current,e!==null&&(e.flags|=32),Xl}function _u(e,t,n){(e===zl&&(Bl===2||Bl===9)||e.cancelPendingCommit!==null)&&(wu(e,0),xu(e,J,Xl,!1)),it(e,n),(!(K&2)||e!==zl)&&(e===zl&&(!(K&2)&&(Jl|=n),Kl===4&&xu(e,J,Xl,!1)),id(e))}function vu(e,t,n){if(K&6)throw Error(i(327));var r=!n&&(t&127)==0&&(t&e.expiredLanes)===0||et(e,t),a=r?Mu(e,t):Au(e,t,!0),o=r;do{if(a===0){Ul&&!r&&xu(e,t,0,!1);break}else{if(n=e.current.alternate,o&&!bu(n)){a=Au(e,t,!1),o=!1;continue}if(a===2){if(o=t,e.errorRecoveryDisabledLanes&o)var s=0;else s=e.pendingLanes&-536870913,s=s===0?s&536870912?536870912:0:s;if(s!==0){t=s;a:{var c=e;a=Ql;var l=c.current.memoizedState.isDehydrated;if(l&&(wu(c,s).flags|=256),s=Au(c,s,!1),s!==2){if(Wl&&!l){c.errorRecoveryDisabledLanes|=o,Jl|=o,a=4;break a}o=$l,$l=a,o!==null&&($l===null?$l=o:$l.push.apply($l,o))}a=s}if(o=!1,a!==2)continue}}if(a===1){wu(e,0),xu(e,t,0,!0);break}a:{switch(r=e,o=a,o){case 0:case 1:throw Error(i(345));case 4:if((t&4194048)!==t)break;case 6:xu(r,t,Xl,!Hl);break a;case 2:$l=null;break;case 3:case 5:break;default:throw Error(i(329))}if((t&62914560)===t&&(a=tu+300-Pe(),10<a)){if(xu(r,t,Xl,!Hl),$e(r,0,!0)!==0)break a;lu=t,r.timeoutHandle=Kd(yu.bind(null,r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,`Throttled`,-0,0),a);break a}yu(r,n,$l,iu,eu,t,Xl,Jl,Zl,Hl,o,null,-0,0)}}break}while(1);id(e)}function yu(e,t,n,r,i,a,o,s,c,l,u,d,f,p){if(e.timeoutHandle=-1,d=t.subtreeFlags,d&8192||(d&16785408)==16785408){d={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:rn},Ml(t,a,d);var m=(a&62914560)===a?tu-Pe():(a&4194048)===a?nu-Pe():0;if(m=qf(d,m),m!==null){lu=a,e.cancelPendingCommit=m(zu.bind(null,e,t,a,n,r,i,o,s,c,u,d,null,f,p)),xu(e,a,o,!l);return}}zu(e,t,a,n,r,i,o,s,c)}function bu(e){for(var t=e;;){var n=t.tag;if((n===0||n===11||n===15)&&t.flags&16384&&(n=t.updateQueue,n!==null&&(n=n.stores,n!==null)))for(var r=0;r<n.length;r++){var i=n[r],a=i.getSnapshot;i=i.value;try{if(!L(a(),i))return!1}catch{return!1}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function xu(e,t,n,r){t&=~Yl,t&=~Jl,e.suspendedLanes|=t,e.pingedLanes&=~t,r&&(e.warmLanes|=t),r=e.expirationTimes;for(var i=t;0<i;){var a=31-Ge(i),o=1<<a;r[a]=-1,i&=~o}n!==0&&j(e,n,t)}function Su(){return K&6?!0:(ad(0,!1),!1)}function Cu(){if(q!==null){if(Bl===0)var e=q.return;else e=q,Wi=Ui=null,Do(e),Oa=null,ka=0,e=q;for(;e!==null;)Bc(e.alternate,e),e=e.return;q=null}}function wu(e,t){var n=e.timeoutHandle;n!==-1&&(e.timeoutHandle=-1,qd(n)),n=e.cancelPendingCommit,n!==null&&(e.cancelPendingCommit=null,n()),lu=0,Cu(),zl=e,q=n=di(e.current,null),J=t,Bl=0,Vl=null,Hl=!1,Ul=et(e,t),Wl=!1,Zl=Xl=Yl=Jl=ql=Kl=0,$l=Ql=null,eu=!1,t&8&&(t|=t&32);var r=e.entangledLanes;if(r!==0)for(e=e.entanglements,r&=t;0<r;){var i=31-Ge(r),a=1<<i;t|=e[i],r&=~a}return Gl=t,ti(),n}function Tu(e,t){W=null,D.H=Ls,t===va||t===ba?(t=Ea(),Bl=3):t===ya?(t=Ea(),Bl=4):Bl=t===tc?8:typeof t==`object`&&t&&typeof t.then==`function`?6:1,Vl=t,q===null&&(Kl=1,Ys(e,vi(t,e.current)))}function Eu(){var e=$a.current;return e===null?!0:(J&4194048)===J?eo===null:(J&62914560)===J||J&536870912?e===eo:!1}function Du(){var e=D.H;return D.H=Ls,e===null?Ls:e}function Ou(){var e=D.A;return D.A=Ll,e}function ku(){Kl=4,Hl||(J&4194048)!==J&&$a.current!==null||(Ul=!0),!(ql&134217727)&&!(Jl&134217727)||zl===null||xu(zl,J,Xl,!1)}function Au(e,t,n){var r=K;K|=2;var i=Du(),a=Ou();(zl!==e||J!==t)&&(iu=null,wu(e,t)),t=!1;var o=Kl;a:do try{if(Bl!==0&&q!==null){var s=q,c=Vl;switch(Bl){case 8:Cu(),o=6;break a;case 3:case 2:case 9:case 6:$a.current===null&&(t=!0);var l=Bl;if(Bl=0,Vl=null,Iu(e,s,c,l),n&&Ul){o=0;break a}break;default:l=Bl,Bl=0,Vl=null,Iu(e,s,c,l)}}ju(),o=Kl;break}catch(t){Tu(e,t)}while(1);return t&&e.shellSuspendCounter++,Wi=Ui=null,K=r,D.H=i,D.A=a,q===null&&(zl=null,J=0,ti()),o}function ju(){for(;q!==null;)Pu(q)}function Mu(e,t){var n=K;K|=2;var r=Du(),a=Ou();zl!==e||J!==t?(iu=null,ru=Pe()+500,wu(e,t)):Ul=et(e,t);a:do try{if(Bl!==0&&q!==null){t=q;var o=Vl;b:switch(Bl){case 1:Bl=0,Vl=null,Iu(e,t,o,1);break;case 2:case 9:if(Sa(o)){Bl=0,Vl=null,Fu(t);break}t=function(){Bl!==2&&Bl!==9||zl!==e||(Bl=7),id(e)},o.then(t,t);break a;case 3:Bl=7;break a;case 4:Bl=5;break a;case 7:Sa(o)?(Bl=0,Vl=null,Fu(t)):(Bl=0,Vl=null,Iu(e,t,o,7));break;case 5:var s=null;switch(q.tag){case 26:s=q.memoizedState;case 5:case 27:var c=q;if(s?Wf(s):c.stateNode.complete){Bl=0,Vl=null;var l=c.sibling;if(l!==null)q=l;else{var u=c.return;u===null?q=null:(q=u,Lu(u))}break b}}Bl=0,Vl=null,Iu(e,t,o,5);break;case 6:Bl=0,Vl=null,Iu(e,t,o,6);break;case 8:Cu(),Kl=6;break a;default:throw Error(i(462))}}Nu();break}catch(t){Tu(e,t)}while(1);return Wi=Ui=null,D.H=r,D.A=a,K=n,q===null?(zl=null,J=0,ti(),Kl):0}function Nu(){for(;q!==null&&!Me();)Pu(q)}function Pu(e){var t=jc(e.alternate,e,Gl);e.memoizedProps=e.pendingProps,t===null?Lu(e):q=t}function Fu(e){var t=e,n=t.alternate;switch(t.tag){case 15:case 0:t=hc(n,t,t.pendingProps,t.type,void 0,J);break;case 11:t=hc(n,t,t.pendingProps,t.type.render,t.ref,J);break;case 5:Do(t);default:Bc(n,t),t=q=R(t,Gl),t=jc(n,t,Gl)}e.memoizedProps=e.pendingProps,t===null?Lu(e):q=t}function Iu(e,t,n,r){Wi=Ui=null,Do(t),Oa=null,ka=0;var i=t.return;try{if(ec(e,i,t,n,J)){Kl=1,Ys(e,vi(n,e.current)),q=null;return}}catch(t){if(i!==null)throw q=i,t;Kl=1,Ys(e,vi(n,e.current)),q=null;return}t.flags&32768?(B||r===1?e=!0:Ul||J&536870912?e=!1:(Hl=e=!0,(r===2||r===9||r===3||r===6)&&(r=$a.current,r!==null&&r.tag===13&&(r.flags|=16384))),Ru(t,e)):Lu(t)}function Lu(e){var t=e;do{if(t.flags&32768){Ru(t,Hl);return}e=t.return;var n=Rc(t.alternate,t,Gl);if(n!==null){q=n;return}if(t=t.sibling,t!==null){q=t;return}q=t=e}while(t!==null);Kl===0&&(Kl=5)}function Ru(e,t){do{var n=zc(e.alternate,e);if(n!==null){n.flags&=32767,q=n;return}if(n=e.return,n!==null&&(n.flags|=32768,n.subtreeFlags=0,n.deletions=null),!t&&(e=e.sibling,e!==null)){q=e;return}q=e=n}while(e!==null);Kl=6,q=null}function zu(e,t,n,r,a,o,s,c,l){e.cancelPendingCommit=null;do Wu();while(ou!==0);if(K&6)throw Error(i(327));if(t!==null){if(t===e.current)throw Error(i(177));if(o=t.lanes|t.childLanes,o|=ei,at(e,n,o,s,c,l),e===zl&&(q=zl=null,J=0),cu=t,su=e,lu=n,uu=o,du=a,fu=r,t.subtreeFlags&10256||t.flags&10256?(e.callbackNode=null,e.callbackPriority=0,Zu(Re,function(){return Gu(),null})):(e.callbackNode=null,e.callbackPriority=0),r=(t.flags&13878)!=0,t.subtreeFlags&13878||r){r=D.T,D.T=null,a=O.p,O.p=2,s=K,K|=4;try{al(e,t,n)}finally{K=s,O.p=a,D.T=r}}ou=1,Bu(),Vu(),Hu()}}function Bu(){if(ou===1){ou=0;var e=su,t=cu,n=(t.flags&13878)!=0;if(t.subtreeFlags&13878||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{vl(t,e);var a=zd,o=Or(e.containerInfo),s=a.focusedElem,c=a.selectionRange;if(o!==s&&s&&s.ownerDocument&&Dr(s.ownerDocument.documentElement,s)){if(c!==null&&kr(s)){var l=c.start,u=c.end;if(u===void 0&&(u=l),`selectionStart`in s)s.selectionStart=l,s.selectionEnd=Math.min(u,s.value.length);else{var d=s.ownerDocument||document,f=d&&d.defaultView||window;if(f.getSelection){var p=f.getSelection(),m=s.textContent.length,h=Math.min(c.start,m),g=c.end===void 0?h:Math.min(c.end,m);!p.extend&&h>g&&(o=g,g=h,h=o);var _=Er(s,h),v=Er(s,g);if(_&&v&&(p.rangeCount!==1||p.anchorNode!==_.node||p.anchorOffset!==_.offset||p.focusNode!==v.node||p.focusOffset!==v.offset)){var y=d.createRange();y.setStart(_.node,_.offset),p.removeAllRanges(),h>g?(p.addRange(y),p.extend(v.node,v.offset)):(y.setEnd(v.node,v.offset),p.addRange(y))}}}}for(d=[],p=s;p=p.parentNode;)p.nodeType===1&&d.push({element:p,left:p.scrollLeft,top:p.scrollTop});for(typeof s.focus==`function`&&s.focus(),s=0;s<d.length;s++){var b=d[s];b.element.scrollLeft=b.left,b.element.scrollTop=b.top}}sp=!!Rd,zd=Rd=null}finally{K=i,O.p=r,D.T=n}}e.current=t,ou=2}}function Vu(){if(ou===2){ou=0;var e=su,t=cu,n=(t.flags&8772)!=0;if(t.subtreeFlags&8772||n){n=D.T,D.T=null;var r=O.p;O.p=2;var i=K;K|=4;try{ol(e,t.alternate,t)}finally{K=i,O.p=r,D.T=n}}ou=3}}function Hu(){if(ou===4||ou===3){ou=0,Ne();var e=su,t=cu,n=lu,r=fu;t.subtreeFlags&10256||t.flags&10256?ou=5:(ou=0,cu=su=null,Uu(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(au=null),lt(n),t=t.stateNode,Ue&&typeof Ue.onCommitFiberRoot==`function`)try{Ue.onCommitFiberRoot(He,t,void 0,(t.current.flags&128)==128)}catch{}if(r!==null){t=D.T,i=O.p,O.p=2,D.T=null;try{for(var a=e.onRecoverableError,o=0;o<r.length;o++){var s=r[o];a(s.value,{componentStack:s.stack})}}finally{D.T=t,O.p=i}}lu&3&&Wu(),id(e),i=e.pendingLanes,n&261930&&i&42?e===mu?pu++:(pu=0,mu=e):pu=0,ad(0,!1)}}function Uu(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,aa(t)))}function Wu(){return Bu(),Vu(),Hu(),Gu()}function Gu(){if(ou!==5)return!1;var e=su,t=uu;uu=0;var n=lt(lu),r=D.T,a=O.p;try{O.p=32>n?32:n,D.T=null,n=du,du=null;var o=su,s=lu;if(ou=0,cu=su=null,lu=0,K&6)throw Error(i(331));var c=K;if(K|=4,Fl(o.current),Dl(o,o.current,s,n),K=c,ad(0,!1),Ue&&typeof Ue.onPostCommitFiberRoot==`function`)try{Ue.onPostCommitFiberRoot(He,o)}catch{}return!0}finally{O.p=a,D.T=r,Uu(e,t)}}function Y(e,t,n){t=vi(n,t),t=Zs(e.stateNode,t,2),e=Ba(e,t,2),e!==null&&(it(e,2),id(e))}function X(e,t,n){if(e.tag===3)Y(e,e,n);else for(;t!==null;){if(t.tag===3){Y(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError==`function`||typeof r.componentDidCatch==`function`&&(au===null||!au.has(r))){e=vi(n,e),n=Qs(2),r=Ba(t,n,2),r!==null&&($s(n,r,t,e),it(r,2),id(r));break}}t=t.return}}function Ku(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new Rl;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(Wl=!0,i.add(n),e=qu.bind(null,e,t,n),t.then(e,e))}function qu(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),e.pingedLanes|=e.suspendedLanes&n,e.warmLanes&=~n,zl===e&&(J&n)===n&&(Kl===4||Kl===3&&(J&62914560)===J&&300>Pe()-tu?!(K&2)&&wu(e,0):Yl|=n,Zl===J&&(Zl=0)),id(e)}function Ju(e,t){t===0&&(t=nt()),e=ii(e,t),e!==null&&(it(e,t),id(e))}function Yu(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Ju(e,n)}function Xu(e,t){var n=0;switch(e.tag){case 31:case 13:var r=e.stateNode,a=e.memoizedState;a!==null&&(n=a.retryLane);break;case 19:r=e.stateNode;break;case 22:r=e.stateNode._retryCache;break;default:throw Error(i(314))}r!==null&&r.delete(t),Ju(e,n)}function Zu(e,t){return Ae(e,t)}var Qu=null,$u=null,ed=!1,td=!1,nd=!1,rd=0;function id(e){e!==$u&&e.next===null&&($u===null?Qu=$u=e:$u=$u.next=e),td=!0,ed||(ed=!0,dd())}function ad(e,t){if(!nd&&td){nd=!0;do for(var n=!1,r=Qu;r!==null;){if(!t)if(e!==0){var i=r.pendingLanes;if(i===0)var a=0;else{var o=r.suspendedLanes,s=r.pingedLanes;a=(1<<31-Ge(42|e)+1)-1,a&=i&~(o&~s),a=a&201326741?a&201326741|1:a?a|2:0}a!==0&&(n=!0,ud(r,a))}else a=J,a=$e(r,r===zl?a:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),!(a&3)||et(r,a)||(n=!0,ud(r,a));r=r.next}while(n);nd=!1}}function od(){sd()}function sd(){td=ed=!1;var e=0;rd!==0&&Gd()&&(e=rd);for(var t=Pe(),n=null,r=Qu;r!==null;){var i=r.next,a=cd(r,t);a===0?(r.next=null,n===null?Qu=i:n.next=i,i===null&&($u=n)):(n=r,(e!==0||a&3)&&(td=!0)),r=i}ou!==0&&ou!==5||ad(e,!1),rd!==0&&(rd=0)}function cd(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,a=e.pendingLanes&-62914561;0<a;){var o=31-Ge(a),s=1<<o,c=i[o];c===-1?((s&n)===0||(s&r)!==0)&&(i[o]=tt(s,t)):c<=t&&(e.expiredLanes|=s),a&=~s}if(t=zl,n=J,n=$e(e,e===t?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r=e.callbackNode,n===0||e===t&&(Bl===2||Bl===9)||e.cancelPendingCommit!==null)return r!==null&&r!==null&&je(r),e.callbackNode=null,e.callbackPriority=0;if(!(n&3)||et(e,n)){if(t=n&-n,t===e.callbackPriority)return t;switch(r!==null&&je(r),lt(n)){case 2:case 8:n=Le;break;case 32:n=Re;break;case 268435456:n=Be;break;default:n=Re}return r=ld.bind(null,e),n=Ae(n,r),e.callbackPriority=t,e.callbackNode=n,t}return r!==null&&r!==null&&je(r),e.callbackPriority=2,e.callbackNode=null,2}function ld(e,t){if(ou!==0&&ou!==5)return e.callbackNode=null,e.callbackPriority=0,null;var n=e.callbackNode;if(Wu()&&e.callbackNode!==n)return null;var r=J;return r=$e(e,e===zl?r:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),r===0?null:(vu(e,r,t),cd(e,Pe()),e.callbackNode!=null&&e.callbackNode===n?ld.bind(null,e):null)}function ud(e,t){if(Wu())return null;vu(e,t,!0)}function dd(){Yd(function(){K&6?Ae(Ie,od):sd()})}function Z(){if(rd===0){var e=ca;e===0&&(e=Ye,Ye<<=1,!(Ye&261888)&&(Ye=256)),rd=e}return rd}function fd(e){return e==null||typeof e==`symbol`||typeof e==`boolean`?null:typeof e==`function`?e:nn(``+e)}function pd(e,t){var n=t.ownerDocument.createElement(`input`);return n.name=t.name,n.value=t.value,e.id&&n.setAttribute(`form`,e.id),t.parentNode.insertBefore(n,t),e=new FormData(e),n.parentNode.removeChild(n),e}function md(e,t,n,r,i){if(t===`submit`&&n&&n.stateNode===i){var a=fd((i[mt]||null).action),o=r.submitter;o&&(t=(t=o[mt]||null)?fd(t.formAction):o.getAttribute(`formAction`),t!==null&&(a=t,o=null));var s=new wn(`action`,`action`,null,r,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(r.defaultPrevented){if(rd!==0){var e=o?pd(i,o):new FormData(i);Cs(n,{pending:!0,data:e,method:i.method,action:a},null,e)}}else typeof a==`function`&&(s.preventDefault(),e=o?pd(i,o):new FormData(i),Cs(n,{pending:!0,data:e,method:i.method,action:a},a,e))},currentTarget:i}]})}}for(var hd=0;hd<Yr.length;hd++){var Q=Yr[hd];Xr(Q.toLowerCase(),`on`+(Q[0].toUpperCase()+Q.slice(1)))}Xr(Vr,`onAnimationEnd`),Xr(Hr,`onAnimationIteration`),Xr(Ur,`onAnimationStart`),Xr(`dblclick`,`onDoubleClick`),Xr(`focusin`,`onFocus`),Xr(`focusout`,`onBlur`),Xr(Wr,`onTransitionRun`),Xr(Gr,`onTransitionStart`),Xr(Kr,`onTransitionCancel`),Xr(qr,`onTransitionEnd`),At(`onMouseEnter`,[`mouseout`,`mouseover`]),At(`onMouseLeave`,[`mouseout`,`mouseover`]),At(`onPointerEnter`,[`pointerout`,`pointerover`]),At(`onPointerLeave`,[`pointerout`,`pointerover`]),kt(`onChange`,`change click focusin focusout input keydown keyup selectionchange`.split(` `)),kt(`onSelect`,`focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange`.split(` `)),kt(`onBeforeInput`,[`compositionend`,`keypress`,`textInput`,`paste`]),kt(`onCompositionEnd`,`compositionend focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionStart`,`compositionstart focusout keydown keypress keyup mousedown`.split(` `)),kt(`onCompositionUpdate`,`compositionupdate focusout keydown keypress keyup mousedown`.split(` `));var gd=`abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting`.split(` `),_d=new Set(`beforetoggle cancel close invalid load scroll scrollend toggle`.split(` `).concat(gd));function vd(e,t){t=(t&4)!=0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;a:{var a=void 0;if(t)for(var o=r.length-1;0<=o;o--){var s=r[o],c=s.instance,l=s.currentTarget;if(s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}else for(o=0;o<r.length;o++){if(s=r[o],c=s.instance,l=s.currentTarget,s=s.listener,c!==a&&i.isPropagationStopped())break a;a=s,i.currentTarget=l;try{a(i)}catch(e){Zr(e)}i.currentTarget=null,a=c}}}}function $(e,t){var n=t[gt];n===void 0&&(n=t[gt]=new Set);var r=e+`__bubble`;n.has(r)||(Sd(t,e,2,!1),n.add(r))}function yd(e,t,n){var r=0;t&&(r|=4),Sd(n,e,r,t)}var bd=`_reactListening`+Math.random().toString(36).slice(2);function xd(e){if(!e[bd]){e[bd]=!0,Dt.forEach(function(t){t!==`selectionchange`&&(_d.has(t)||yd(t,!1,e),yd(t,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[bd]||(t[bd]=!0,yd(`selectionchange`,!1,t))}}function Sd(e,t,n,r){switch(mp(t)){case 2:var i=cp;break;case 8:i=lp;break;default:i=up}n=i.bind(null,t,n,e),i=void 0,!pn||t!==`touchstart`&&t!==`touchmove`&&t!==`wheel`||(i=!0),r?i===void 0?e.addEventListener(t,n,!0):e.addEventListener(t,n,{capture:!0,passive:i}):i===void 0?e.addEventListener(t,n,!1):e.addEventListener(t,n,{passive:i})}function Cd(e,t,n,r,i){var a=r;if(!(t&1)&&!(t&2)&&r!==null)a:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var c=r.stateNode.containerInfo;if(c===i)break;if(s===4)for(s=r.return;s!==null;){var l=s.tag;if((l===3||l===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;c!==null;){if(s=St(c),s===null)return;if(l=s.tag,l===5||l===6||l===26||l===27){r=a=s;continue a}c=c.parentNode}}r=r.return}un(function(){var r=a,i=an(n),s=[];a:{var c=Jr.get(e);if(c!==void 0){var l=wn,u=e;switch(e){case`keypress`:if(yn(n)===0)break a;case`keydown`:case`keyup`:l=Hn;break;case`focusin`:u=`focus`,l=Nn;break;case`focusout`:u=`blur`,l=Nn;break;case`beforeblur`:case`afterblur`:l=Nn;break;case`click`:if(n.button===2)break a;case`auxclick`:case`dblclick`:case`mousedown`:case`mousemove`:case`mouseup`:case`mouseout`:case`mouseover`:case`contextmenu`:l=jn;break;case`drag`:case`dragend`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`dragstart`:case`drop`:l=Mn;break;case`touchcancel`:case`touchend`:case`touchmove`:case`touchstart`:l=Wn;break;case Vr:case Hr:case Ur:l=Pn;break;case qr:l=Gn;break;case`scroll`:case`scrollend`:l=En;break;case`wheel`:l=Kn;break;case`copy`:case`cut`:case`paste`:l=Fn;break;case`gotpointercapture`:case`lostpointercapture`:case`pointercancel`:case`pointerdown`:case`pointermove`:case`pointerout`:case`pointerover`:case`pointerup`:l=Un;break;case`toggle`:case`beforetoggle`:l=qn}var d=(t&4)!=0,f=!d&&(e===`scroll`||e===`scrollend`),p=d?c===null?null:c+`Capture`:c;d=[];for(var m=r,h;m!==null;){var g=m;if(h=g.stateNode,g=g.tag,g!==5&&g!==26&&g!==27||h===null||p===null||(g=dn(m,p),g!=null&&d.push(wd(m,g,h))),f)break;m=m.return}0<d.length&&(c=new l(c,u,null,n,i),s.push({event:c,listeners:d}))}}if(!(t&7)){a:{if(c=e===`mouseover`||e===`pointerover`,l=e===`mouseout`||e===`pointerout`,c&&n!==F&&(u=n.relatedTarget||n.fromElement)&&(St(u)||u[ht]))break a;if((l||c)&&(c=i.window===i?i:(c=i.ownerDocument)?c.defaultView||c.parentWindow:window,l?(u=n.relatedTarget||n.toElement,l=r,u=u?St(u):null,u!==null&&(f=o(u),d=u.tag,u!==f||d!==5&&d!==27&&d!==6)&&(u=null)):(l=null,u=r),l!==u)){if(d=jn,g=`onMouseLeave`,p=`onMouseEnter`,m=`mouse`,(e===`pointerout`||e===`pointerover`)&&(d=Un,g=`onPointerLeave`,p=`onPointerEnter`,m=`pointer`),f=l==null?c:wt(l),h=u==null?c:wt(u),c=new d(g,m+`leave`,l,n,i),c.target=f,c.relatedTarget=h,g=null,St(i)===r&&(d=new d(p,m+`enter`,u,n,i),d.target=h,d.relatedTarget=f,g=d),f=g,l&&u)b:{for(d=Ed,p=l,m=u,h=0,g=p;g;g=d(g))h++;g=0;for(var _=m;_;_=d(_))g++;for(;0<h-g;)p=d(p),h--;for(;0<g-h;)m=d(m),g--;for(;h--;){if(p===m||m!==null&&p===m.alternate){d=p;break b}p=d(p),m=d(m)}d=null}else d=null;l!==null&&Dd(s,c,l,d,!1),u!==null&&f!==null&&Dd(s,f,u,d,!0)}}a:{if(c=r?wt(r):window,l=c.nodeName&&c.nodeName.toLowerCase(),l===`select`||l===`input`&&c.type===`file`)var v=pr;else if(sr(c))if(I)v=Sr;else{v=br;var y=yr}else l=c.nodeName,!l||l.toLowerCase()!==`input`||c.type!==`checkbox`&&c.type!==`radio`?r&&$t(r.elementType)&&(v=pr):v=xr;if(v&&=v(e,r)){cr(s,v,n,i);break a}y&&y(e,c,r),e===`focusout`&&r&&c.type===`number`&&r.memoizedProps.value!=null&&P(c,`number`,c.value)}switch(y=r?wt(r):window,e){case`focusin`:(sr(y)||y.contentEditable===`true`)&&(jr=y,Mr=r,Nr=null);break;case`focusout`:Nr=Mr=jr=null;break;case`mousedown`:Pr=!0;break;case`contextmenu`:case`mouseup`:case`dragend`:Pr=!1,Fr(s,n,i);break;case`selectionchange`:if(Ar)break;case`keydown`:case`keyup`:Fr(s,n,i)}var b;if(Yn)b:{switch(e){case`compositionstart`:var x=`onCompositionStart`;break b;case`compositionend`:x=`onCompositionEnd`;break b;case`compositionupdate`:x=`onCompositionUpdate`;break b}x=void 0}else rr?tr(e,n)&&(x=`onCompositionEnd`):e===`keydown`&&n.keyCode===229&&(x=`onCompositionStart`);x&&(Qn&&n.locale!==`ko`&&(rr||x!==`onCompositionStart`?x===`onCompositionEnd`&&rr&&(b=vn()):(hn=i,gn=`value`in hn?hn.value:hn.textContent,rr=!0)),y=Td(r,x),0<y.length&&(x=new In(x,e,null,n,i),s.push({event:x,listeners:y}),b?x.data=b:(b=nr(n),b!==null&&(x.data=b)))),(b=Zn?ir(e,n):ar(e,n))&&(x=Td(r,`onBeforeInput`),0<x.length&&(y=new In(`onBeforeInput`,`beforeinput`,null,n,i),s.push({event:y,listeners:x}),y.data=b)),md(s,e,r,n,i)}vd(s,t)})}function wd(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Td(e,t){for(var n=t+`Capture`,r=[];e!==null;){var i=e,a=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||a===null||(i=dn(e,n),i!=null&&r.unshift(wd(e,i,a)),i=dn(e,t),i!=null&&r.push(wd(e,i,a))),e.tag===3)return r;e=e.return}return[]}function Ed(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Dd(e,t,n,r,i){for(var a=t._reactName,o=[];n!==null&&n!==r;){var s=n,c=s.alternate,l=s.stateNode;if(s=s.tag,c!==null&&c===r)break;s!==5&&s!==26&&s!==27||l===null||(c=l,i?(l=dn(n,a),l!=null&&o.unshift(wd(n,l,c))):i||(l=dn(n,a),l!=null&&o.push(wd(n,l,c)))),n=n.return}o.length!==0&&e.push({event:t,listeners:o})}var Od=/\r\n?/g,kd=/\u0000|\uFFFD/g;function Ad(e){return(typeof e==`string`?e:``+e).replace(Od,`
`).replace(kd,``)}function jd(e,t){return t=Ad(t),Ad(e)===t}function Md(e,t,n,r,a,o){switch(n){case`children`:typeof r==`string`?t===`body`||t===`textarea`&&r===``||Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&t!==`body`&&Yt(e,``+r);break;case`className`:It(e,`class`,r);break;case`tabIndex`:It(e,`tabindex`,r);break;case`dir`:case`role`:case`viewBox`:case`width`:case`height`:It(e,n,r);break;case`style`:Qt(e,r,o);break;case`data`:if(t!==`object`){It(e,`data`,r);break}case`src`:case`href`:if(r===``&&(t!==`a`||n!==`href`)){e.removeAttribute(n);break}if(r==null||typeof r==`function`||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`action`:case`formAction`:if(typeof r==`function`){e.setAttribute(n,`javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')`);break}else typeof o==`function`&&(n===`formAction`?(t!==`input`&&Md(e,t,`name`,a.name,a,null),Md(e,t,`formEncType`,a.formEncType,a,null),Md(e,t,`formMethod`,a.formMethod,a,null),Md(e,t,`formTarget`,a.formTarget,a,null)):(Md(e,t,`encType`,a.encType,a,null),Md(e,t,`method`,a.method,a,null),Md(e,t,`target`,a.target,a,null)));if(r==null||typeof r==`symbol`||typeof r==`boolean`){e.removeAttribute(n);break}r=nn(``+r),e.setAttribute(n,r);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`multiple`:e.multiple=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`muted`:e.muted=r&&typeof r!=`function`&&typeof r!=`symbol`;break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`defaultValue`:case`defaultChecked`:case`innerHTML`:case`ref`:break;case`autoFocus`:break;case`xlinkHref`:if(r==null||typeof r==`function`||typeof r==`boolean`||typeof r==`symbol`){e.removeAttribute(`xlink:href`);break}n=nn(``+r),e.setAttributeNS(`http://www.w3.org/1999/xlink`,`xlink:href`,n);break;case`contentEditable`:case`spellCheck`:case`draggable`:case`value`:case`autoReverse`:case`externalResourcesRequired`:case`focusable`:case`preserveAlpha`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``+r):e.removeAttribute(n);break;case`inert`:case`allowFullScreen`:case`async`:case`autoPlay`:case`controls`:case`default`:case`defer`:case`disabled`:case`disablePictureInPicture`:case`disableRemotePlayback`:case`formNoValidate`:case`hidden`:case`loop`:case`noModule`:case`noValidate`:case`open`:case`playsInline`:case`readOnly`:case`required`:case`reversed`:case`scoped`:case`seamless`:case`itemScope`:r&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,``):e.removeAttribute(n);break;case`capture`:case`download`:!0===r?e.setAttribute(n,``):!1!==r&&r!=null&&typeof r!=`function`&&typeof r!=`symbol`?e.setAttribute(n,r):e.removeAttribute(n);break;case`cols`:case`rows`:case`size`:case`span`:r!=null&&typeof r!=`function`&&typeof r!=`symbol`&&!isNaN(r)&&1<=r?e.setAttribute(n,r):e.removeAttribute(n);break;case`rowSpan`:case`start`:r==null||typeof r==`function`||typeof r==`symbol`||isNaN(r)?e.removeAttribute(n):e.setAttribute(n,r);break;case`popover`:$(`beforetoggle`,e),$(`toggle`,e),Ft(e,`popover`,r);break;case`xlinkActuate`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:actuate`,r);break;case`xlinkArcrole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:arcrole`,r);break;case`xlinkRole`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:role`,r);break;case`xlinkShow`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:show`,r);break;case`xlinkTitle`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:title`,r);break;case`xlinkType`:Lt(e,`http://www.w3.org/1999/xlink`,`xlink:type`,r);break;case`xmlBase`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:base`,r);break;case`xmlLang`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:lang`,r);break;case`xmlSpace`:Lt(e,`http://www.w3.org/XML/1998/namespace`,`xml:space`,r);break;case`is`:Ft(e,`is`,r);break;case`innerText`:case`textContent`:break;default:(!(2<n.length)||n[0]!==`o`&&n[0]!==`O`||n[1]!==`n`&&n[1]!==`N`)&&(n=en.get(n)||n,Ft(e,n,r))}}function Nd(e,t,n,r,a,o){switch(n){case`style`:Qt(e,r,o);break;case`dangerouslySetInnerHTML`:if(r!=null){if(typeof r!=`object`||!(`__html`in r))throw Error(i(61));if(n=r.__html,n!=null){if(a.children!=null)throw Error(i(60));e.innerHTML=n}}break;case`children`:typeof r==`string`?Yt(e,r):(typeof r==`number`||typeof r==`bigint`)&&Yt(e,``+r);break;case`onScroll`:r!=null&&$(`scroll`,e);break;case`onScrollEnd`:r!=null&&$(`scrollend`,e);break;case`onClick`:r!=null&&(e.onclick=rn);break;case`suppressContentEditableWarning`:case`suppressHydrationWarning`:case`innerHTML`:case`ref`:break;case`innerText`:case`textContent`:break;default:if(!Ot.hasOwnProperty(n))a:{if(n[0]===`o`&&n[1]===`n`&&(a=n.endsWith(`Capture`),t=n.slice(2,a?n.length-7:void 0),o=e[mt]||null,o=o==null?null:o[n],typeof o==`function`&&e.removeEventListener(t,o,a),typeof r==`function`)){typeof o!=`function`&&o!==null&&(n in e?e[n]=null:e.hasAttribute(n)&&e.removeAttribute(n)),e.addEventListener(t,r,a);break a}n in e?e[n]=r:!0===r?e.setAttribute(n,``):Ft(e,n,r)}}}function Pd(e,t,n){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`img`:$(`error`,e),$(`load`,e);var r=!1,a=!1,o;for(o in n)if(n.hasOwnProperty(o)){var s=n[o];if(s!=null)switch(o){case`src`:r=!0;break;case`srcSet`:a=!0;break;case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,o,s,n,null)}}a&&Md(e,t,`srcSet`,n.srcSet,n,null),r&&Md(e,t,`src`,n.src,n,null);return;case`input`:$(`invalid`,e);var c=o=s=a=null,l=null,u=null;for(r in n)if(n.hasOwnProperty(r)){var d=n[r];if(d!=null)switch(r){case`name`:a=d;break;case`type`:s=d;break;case`checked`:l=d;break;case`defaultChecked`:u=d;break;case`value`:o=d;break;case`defaultValue`:c=d;break;case`children`:case`dangerouslySetInnerHTML`:if(d!=null)throw Error(i(137,t));break;default:Md(e,t,r,d,n,null)}}Gt(e,o,c,l,u,s,a,!1);return;case`select`:for(a in $(`invalid`,e),r=s=o=null,n)if(n.hasOwnProperty(a)&&(c=n[a],c!=null))switch(a){case`value`:o=c;break;case`defaultValue`:s=c;break;case`multiple`:r=c;default:Md(e,t,a,c,n,null)}t=o,n=s,e.multiple=!!r,t==null?n!=null&&Kt(e,!!r,n,!0):Kt(e,!!r,t,!1);return;case`textarea`:for(s in $(`invalid`,e),o=a=r=null,n)if(n.hasOwnProperty(s)&&(c=n[s],c!=null))switch(s){case`value`:r=c;break;case`defaultValue`:a=c;break;case`children`:o=c;break;case`dangerouslySetInnerHTML`:if(c!=null)throw Error(i(91));break;default:Md(e,t,s,c,n,null)}Jt(e,r,a,o);return;case`option`:for(l in n)if(n.hasOwnProperty(l)&&(r=n[l],r!=null))switch(l){case`selected`:e.selected=r&&typeof r!=`function`&&typeof r!=`symbol`;break;default:Md(e,t,l,r,n,null)}return;case`dialog`:$(`beforetoggle`,e),$(`toggle`,e),$(`cancel`,e),$(`close`,e);break;case`iframe`:case`object`:$(`load`,e);break;case`video`:case`audio`:for(r=0;r<gd.length;r++)$(gd[r],e);break;case`image`:$(`error`,e),$(`load`,e);break;case`details`:$(`toggle`,e);break;case`embed`:case`source`:case`link`:$(`error`,e),$(`load`,e);case`area`:case`base`:case`br`:case`col`:case`hr`:case`keygen`:case`meta`:case`param`:case`track`:case`wbr`:case`menuitem`:for(u in n)if(n.hasOwnProperty(u)&&(r=n[u],r!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:throw Error(i(137,t));default:Md(e,t,u,r,n,null)}return;default:if($t(t)){for(d in n)n.hasOwnProperty(d)&&(r=n[d],r!==void 0&&Nd(e,t,d,r,n,void 0));return}}for(c in n)n.hasOwnProperty(c)&&(r=n[c],r!=null&&Md(e,t,c,r,n,null))}function Fd(e,t,n,r){switch(t){case`div`:case`span`:case`svg`:case`path`:case`a`:case`g`:case`p`:case`li`:break;case`input`:var a=null,o=null,s=null,c=null,l=null,u=null,d=null;for(m in n){var f=n[m];if(n.hasOwnProperty(m)&&f!=null)switch(m){case`checked`:break;case`value`:break;case`defaultValue`:l=f;default:r.hasOwnProperty(m)||Md(e,t,m,null,r,f)}}for(var p in r){var m=r[p];if(f=n[p],r.hasOwnProperty(p)&&(m!=null||f!=null))switch(p){case`type`:o=m;break;case`name`:a=m;break;case`checked`:u=m;break;case`defaultChecked`:d=m;break;case`value`:s=m;break;case`defaultValue`:c=m;break;case`children`:case`dangerouslySetInnerHTML`:if(m!=null)throw Error(i(137,t));break;default:m!==f&&Md(e,t,p,m,r,f)}}N(e,s,c,l,u,d,o,a);return;case`select`:for(o in m=s=c=p=null,n)if(l=n[o],n.hasOwnProperty(o)&&l!=null)switch(o){case`value`:break;case`multiple`:m=l;default:r.hasOwnProperty(o)||Md(e,t,o,null,r,l)}for(a in r)if(o=r[a],l=n[a],r.hasOwnProperty(a)&&(o!=null||l!=null))switch(a){case`value`:p=o;break;case`defaultValue`:c=o;break;case`multiple`:s=o;default:o!==l&&Md(e,t,a,o,r,l)}t=c,n=s,r=m,p==null?!!r!=!!n&&(t==null?Kt(e,!!n,n?[]:``,!1):Kt(e,!!n,t,!0)):Kt(e,!!n,p,!1);return;case`textarea`:for(c in m=p=null,n)if(a=n[c],n.hasOwnProperty(c)&&a!=null&&!r.hasOwnProperty(c))switch(c){case`value`:break;case`children`:break;default:Md(e,t,c,null,r,a)}for(s in r)if(a=r[s],o=n[s],r.hasOwnProperty(s)&&(a!=null||o!=null))switch(s){case`value`:p=a;break;case`defaultValue`:m=a;break;case`children`:break;case`dangerouslySetInnerHTML`:if(a!=null)throw Error(i(91));break;default:a!==o&&Md(e,t,s,a,r,o)}qt(e,p,m);return;case`option`:for(var h in n)if(p=n[h],n.hasOwnProperty(h)&&p!=null&&!r.hasOwnProperty(h))switch(h){case`selected`:e.selected=!1;break;default:Md(e,t,h,null,r,p)}for(l in r)if(p=r[l],m=n[l],r.hasOwnProperty(l)&&p!==m&&(p!=null||m!=null))switch(l){case`selected`:e.selected=p&&typeof p!=`function`&&typeof p!=`symbol`;break;default:Md(e,t,l,p,r,m)}return;case`img`:case`link`:case`area`:case`base`:case`br`:case`col`:case`embed`:case`hr`:case`keygen`:case`meta`:case`param`:case`source`:case`track`:case`wbr`:case`menuitem`:for(var g in n)p=n[g],n.hasOwnProperty(g)&&p!=null&&!r.hasOwnProperty(g)&&Md(e,t,g,null,r,p);for(u in r)if(p=r[u],m=n[u],r.hasOwnProperty(u)&&p!==m&&(p!=null||m!=null))switch(u){case`children`:case`dangerouslySetInnerHTML`:if(p!=null)throw Error(i(137,t));break;default:Md(e,t,u,p,r,m)}return;default:if($t(t)){for(var _ in n)p=n[_],n.hasOwnProperty(_)&&p!==void 0&&!r.hasOwnProperty(_)&&Nd(e,t,_,void 0,r,p);for(d in r)p=r[d],m=n[d],!r.hasOwnProperty(d)||p===m||p===void 0&&m===void 0||Nd(e,t,d,p,r,m);return}}for(var v in n)p=n[v],n.hasOwnProperty(v)&&p!=null&&!r.hasOwnProperty(v)&&Md(e,t,v,null,r,p);for(f in r)p=r[f],m=n[f],!r.hasOwnProperty(f)||p===m||p==null&&m==null||Md(e,t,f,p,r,m)}function Id(e){switch(e){case`css`:case`script`:case`font`:case`img`:case`image`:case`input`:case`link`:return!0;default:return!1}}function Ld(){if(typeof performance.getEntriesByType==`function`){for(var e=0,t=0,n=performance.getEntriesByType(`resource`),r=0;r<n.length;r++){var i=n[r],a=i.transferSize,o=i.initiatorType,s=i.duration;if(a&&s&&Id(o)){for(o=0,s=i.responseEnd,r+=1;r<n.length;r++){var c=n[r],l=c.startTime;if(l>s)break;var u=c.transferSize,d=c.initiatorType;u&&Id(d)&&(c=c.responseEnd,o+=u*(c<s?1:(s-l)/(c-l)))}if(--r,t+=8*(a+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e==`number`)?e:5}var Rd=null,zd=null;function Bd(e){return e.nodeType===9?e:e.ownerDocument}function Vd(e){switch(e){case`http://www.w3.org/2000/svg`:return 1;case`http://www.w3.org/1998/Math/MathML`:return 2;default:return 0}}function Hd(e,t){if(e===0)switch(t){case`svg`:return 1;case`math`:return 2;default:return 0}return e===1&&t===`foreignObject`?0:e}function Ud(e,t){return e===`textarea`||e===`noscript`||typeof t.children==`string`||typeof t.children==`number`||typeof t.children==`bigint`||typeof t.dangerouslySetInnerHTML==`object`&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Wd=null;function Gd(){var e=window.event;return e&&e.type===`popstate`?e===Wd?!1:(Wd=e,!0):(Wd=null,!1)}var Kd=typeof setTimeout==`function`?setTimeout:void 0,qd=typeof clearTimeout==`function`?clearTimeout:void 0,Jd=typeof Promise==`function`?Promise:void 0,Yd=typeof queueMicrotask==`function`?queueMicrotask:Jd===void 0?Kd:function(e){return Jd.resolve(null).then(e).catch(Xd)};function Xd(e){setTimeout(function(){throw e})}function Zd(e){return e===`head`}function Qd(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n===`/$`||n===`/&`){if(r===0){e.removeChild(i),Np(t);return}r--}else if(n===`$`||n===`$?`||n===`$~`||n===`$!`||n===`&`)r++;else if(n===`html`)pf(e.ownerDocument.documentElement);else if(n===`head`){n=e.ownerDocument.head,pf(n);for(var a=n.firstChild;a;){var o=a.nextSibling,s=a.nodeName;a[bt]||s===`SCRIPT`||s===`STYLE`||s===`LINK`&&a.rel.toLowerCase()===`stylesheet`||n.removeChild(a),a=o}}else n===`body`&&pf(e.ownerDocument.body);n=i}while(n);Np(t)}function $d(e,t){var n=e;e=0;do{var r=n.nextSibling;if(n.nodeType===1?t?(n._stashedDisplay=n.style.display,n.style.display=`none`):(n.style.display=n._stashedDisplay||``,n.getAttribute(`style`)===``&&n.removeAttribute(`style`)):n.nodeType===3&&(t?(n._stashedText=n.nodeValue,n.nodeValue=``):n.nodeValue=n._stashedText||``),r&&r.nodeType===8)if(n=r.data,n===`/$`){if(e===0)break;e--}else n!==`$`&&n!==`$?`&&n!==`$~`&&n!==`$!`||e++;n=r}while(n)}function ef(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var n=t;switch(t=t.nextSibling,n.nodeName){case`HTML`:case`HEAD`:case`BODY`:ef(n),xt(n);continue;case`SCRIPT`:case`STYLE`:continue;case`LINK`:if(n.rel.toLowerCase()===`stylesheet`)continue}e.removeChild(n)}}function tf(e,t,n,r){for(;e.nodeType===1;){var i=n;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!r&&(e.nodeName!==`INPUT`||e.type!==`hidden`))break}else if(!r)if(t===`input`&&e.type===`hidden`){var a=i.name==null?null:``+i.name;if(i.type===`hidden`&&e.getAttribute(`name`)===a)return e}else return e;else if(!e[bt])switch(t){case`meta`:if(!e.hasAttribute(`itemprop`))break;return e;case`link`:if(a=e.getAttribute(`rel`),a===`stylesheet`&&e.hasAttribute(`data-precedence`)||a!==i.rel||e.getAttribute(`href`)!==(i.href==null||i.href===``?null:i.href)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute(`title`)!==(i.title==null?null:i.title))break;return e;case`style`:if(e.hasAttribute(`data-precedence`))break;return e;case`script`:if(a=e.getAttribute(`src`),(a!==(i.src==null?null:i.src)||e.getAttribute(`type`)!==(i.type==null?null:i.type)||e.getAttribute(`crossorigin`)!==(i.crossOrigin==null?null:i.crossOrigin))&&a&&e.hasAttribute(`async`)&&!e.hasAttribute(`itemprop`))break;return e;default:return e}if(e=cf(e.nextSibling),e===null)break}return null}function nf(e,t,n){if(t===``)return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!n||(e=cf(e.nextSibling),e===null))return null;return e}function rf(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!==`INPUT`||e.type!==`hidden`)&&!t||(e=cf(e.nextSibling),e===null))return null;return e}function af(e){return e.data===`$?`||e.data===`$~`}function of(e){return e.data===`$!`||e.data===`$?`&&e.ownerDocument.readyState!==`loading`}function sf(e,t){var n=e.ownerDocument;if(e.data===`$~`)e._reactRetry=t;else if(e.data!==`$?`||n.readyState!==`loading`)t();else{var r=function(){t(),n.removeEventListener(`DOMContentLoaded`,r)};n.addEventListener(`DOMContentLoaded`,r),e._reactRetry=r}}function cf(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t===`$`||t===`$!`||t===`$?`||t===`$~`||t===`&`||t===`F!`||t===`F`)break;if(t===`/$`||t===`/&`)return null}}return e}var lf=null;function uf(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`/$`||n===`/&`){if(t===0)return cf(e.nextSibling);t--}else n!==`$`&&n!==`$!`&&n!==`$?`&&n!==`$~`&&n!==`&`||t++}e=e.nextSibling}return null}function df(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n===`$`||n===`$!`||n===`$?`||n===`$~`||n===`&`){if(t===0)return e;t--}else n!==`/$`&&n!==`/&`||t++}e=e.previousSibling}return null}function ff(e,t,n){switch(t=Bd(n),e){case`html`:if(e=t.documentElement,!e)throw Error(i(452));return e;case`head`:if(e=t.head,!e)throw Error(i(453));return e;case`body`:if(e=t.body,!e)throw Error(i(454));return e;default:throw Error(i(451))}}function pf(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);xt(e)}var mf=new Map,hf=new Set;function gf(e){return typeof e.getRootNode==`function`?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var _f=O.d;O.d={f:vf,r:yf,D:Sf,C:Cf,L:wf,m:Tf,X:Df,S:Ef,M:Of};function vf(){var e=_f.f(),t=Su();return e||t}function yf(e){var t=Ct(e);t!==null&&t.tag===5&&t.type===`form`?Ts(t):_f.r(e)}var bf=typeof document>`u`?null:document;function xf(e,t,n){var r=bf;if(r&&typeof t==`string`&&t){var i=Wt(t);i=`link[rel="`+e+`"][href="`+i+`"]`,typeof n==`string`&&(i+=`[crossorigin="`+n+`"]`),hf.has(i)||(hf.add(i),e={rel:e,crossOrigin:n,href:t},r.querySelector(i)===null&&(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Sf(e){_f.D(e),xf(`dns-prefetch`,e,null)}function Cf(e,t){_f.C(e,t),xf(`preconnect`,e,t)}function wf(e,t,n){_f.L(e,t,n);var r=bf;if(r&&e&&t){var i=`link[rel="preload"][as="`+Wt(t)+`"]`;t===`image`&&n&&n.imageSrcSet?(i+=`[imagesrcset="`+Wt(n.imageSrcSet)+`"]`,typeof n.imageSizes==`string`&&(i+=`[imagesizes="`+Wt(n.imageSizes)+`"]`)):i+=`[href="`+Wt(e)+`"]`;var a=i;switch(t){case`style`:a=Af(e);break;case`script`:a=Pf(e)}mf.has(a)||(e=h({rel:`preload`,href:t===`image`&&n&&n.imageSrcSet?void 0:e,as:t},n),mf.set(a,e),r.querySelector(i)!==null||t===`style`&&r.querySelector(jf(a))||t===`script`&&r.querySelector(Ff(a))||(t=r.createElement(`link`),Pd(t,`link`,e),Et(t),r.head.appendChild(t)))}}function Tf(e,t){_f.m(e,t);var n=bf;if(n&&e){var r=t&&typeof t.as==`string`?t.as:`script`,i=`link[rel="modulepreload"][as="`+Wt(r)+`"][href="`+Wt(e)+`"]`,a=i;switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:a=Pf(e)}if(!mf.has(a)&&(e=h({rel:`modulepreload`,href:e},t),mf.set(a,e),n.querySelector(i)===null)){switch(r){case`audioworklet`:case`paintworklet`:case`serviceworker`:case`sharedworker`:case`worker`:case`script`:if(n.querySelector(Ff(a)))return}r=n.createElement(`link`),Pd(r,`link`,e),Et(r),n.head.appendChild(r)}}}function Ef(e,t,n){_f.S(e,t,n);var r=bf;if(r&&e){var i=Tt(r).hoistableStyles,a=Af(e);t||=`default`;var o=i.get(a);if(!o){var s={loading:0,preload:null};if(o=r.querySelector(jf(a)))s.loading=5;else{e=h({rel:`stylesheet`,href:e,"data-precedence":t},n),(n=mf.get(a))&&Rf(e,n);var c=o=r.createElement(`link`);Et(c),Pd(c,`link`,e),c._p=new Promise(function(e,t){c.onload=e,c.onerror=t}),c.addEventListener(`load`,function(){s.loading|=1}),c.addEventListener(`error`,function(){s.loading|=2}),s.loading|=4,Lf(o,t,r)}o={type:`stylesheet`,instance:o,count:1,state:s},i.set(a,o)}}}function Df(e,t){_f.X(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function Of(e,t){_f.M(e,t);var n=bf;if(n&&e){var r=Tt(n).hoistableScripts,i=Pf(e),a=r.get(i);a||(a=n.querySelector(Ff(i)),a||(e=h({src:e,async:!0,type:`module`},t),(t=mf.get(i))&&zf(e,t),a=n.createElement(`script`),Et(a),Pd(a,`link`,e),n.head.appendChild(a)),a={type:`script`,instance:a,count:1,state:null},r.set(i,a))}}function kf(e,t,n,r){var a=(a=ge.current)?gf(a):null;if(!a)throw Error(i(446));switch(e){case`meta`:case`title`:return null;case`style`:return typeof n.precedence==`string`&&typeof n.href==`string`?(t=Af(n.href),n=Tt(a).hoistableStyles,r=n.get(t),r||(r={type:`style`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};case`link`:if(n.rel===`stylesheet`&&typeof n.href==`string`&&typeof n.precedence==`string`){e=Af(n.href);var o=Tt(a).hoistableStyles,s=o.get(e);if(s||(a=a.ownerDocument||a,s={type:`stylesheet`,instance:null,count:0,state:{loading:0,preload:null}},o.set(e,s),(o=a.querySelector(jf(e)))&&!o._p&&(s.instance=o,s.state.loading=5),mf.has(e)||(n={rel:`preload`,as:`style`,href:n.href,crossOrigin:n.crossOrigin,integrity:n.integrity,media:n.media,hrefLang:n.hrefLang,referrerPolicy:n.referrerPolicy},mf.set(e,n),o||Nf(a,e,n,s.state))),t&&r===null)throw Error(i(528,``));return s}if(t&&r!==null)throw Error(i(529,``));return null;case`script`:return t=n.async,n=n.src,typeof n==`string`&&t&&typeof t!=`function`&&typeof t!=`symbol`?(t=Pf(n),n=Tt(a).hoistableScripts,r=n.get(t),r||(r={type:`script`,instance:null,count:0,state:null},n.set(t,r)),r):{type:`void`,instance:null,count:0,state:null};default:throw Error(i(444,e))}}function Af(e){return`href="`+Wt(e)+`"`}function jf(e){return`link[rel="stylesheet"][`+e+`]`}function Mf(e){return h({},e,{"data-precedence":e.precedence,precedence:null})}function Nf(e,t,n,r){e.querySelector(`link[rel="preload"][as="style"][`+t+`]`)?r.loading=1:(t=e.createElement(`link`),r.preload=t,t.addEventListener(`load`,function(){return r.loading|=1}),t.addEventListener(`error`,function(){return r.loading|=2}),Pd(t,`link`,n),Et(t),e.head.appendChild(t))}function Pf(e){return`[src="`+Wt(e)+`"]`}function Ff(e){return`script[async]`+e}function If(e,t,n){if(t.count++,t.instance===null)switch(t.type){case`style`:var r=e.querySelector(`style[data-href~="`+Wt(n.href)+`"]`);if(r)return t.instance=r,Et(r),r;var a=h({},n,{"data-href":n.href,"data-precedence":n.precedence,href:null,precedence:null});return r=(e.ownerDocument||e).createElement(`style`),Et(r),Pd(r,`style`,a),Lf(r,n.precedence,e),t.instance=r;case`stylesheet`:a=Af(n.href);var o=e.querySelector(jf(a));if(o)return t.state.loading|=4,t.instance=o,Et(o),o;r=Mf(n),(a=mf.get(a))&&Rf(r,a),o=(e.ownerDocument||e).createElement(`link`),Et(o);var s=o;return s._p=new Promise(function(e,t){s.onload=e,s.onerror=t}),Pd(o,`link`,r),t.state.loading|=4,Lf(o,n.precedence,e),t.instance=o;case`script`:return o=Pf(n.src),(a=e.querySelector(Ff(o)))?(t.instance=a,Et(a),a):(r=n,(a=mf.get(o))&&(r=h({},n),zf(r,a)),e=e.ownerDocument||e,a=e.createElement(`script`),Et(a),Pd(a,`link`,r),e.head.appendChild(a),t.instance=a);case`void`:return null;default:throw Error(i(443,t.type))}else t.type===`stylesheet`&&!(t.state.loading&4)&&(r=t.instance,t.state.loading|=4,Lf(r,n.precedence,e));return t.instance}function Lf(e,t,n){for(var r=n.querySelectorAll(`link[rel="stylesheet"][data-precedence],style[data-precedence]`),i=r.length?r[r.length-1]:null,a=i,o=0;o<r.length;o++){var s=r[o];if(s.dataset.precedence===t)a=s;else if(a!==i)break}a?a.parentNode.insertBefore(e,a.nextSibling):(t=n.nodeType===9?n.head:n,t.insertBefore(e,t.firstChild))}function Rf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.title??=t.title}function zf(e,t){e.crossOrigin??=t.crossOrigin,e.referrerPolicy??=t.referrerPolicy,e.integrity??=t.integrity}var Bf=null;function Vf(e,t,n){if(Bf===null){var r=new Map,i=Bf=new Map;i.set(n,r)}else i=Bf,r=i.get(n),r||(r=new Map,i.set(n,r));if(r.has(e))return r;for(r.set(e,null),n=n.getElementsByTagName(e),i=0;i<n.length;i++){var a=n[i];if(!(a[bt]||a[pt]||e===`link`&&a.getAttribute(`rel`)===`stylesheet`)&&a.namespaceURI!==`http://www.w3.org/2000/svg`){var o=a.getAttribute(t)||``;o=e+o;var s=r.get(o);s?s.push(a):r.set(o,[a])}}return r}function Hf(e,t,n){e=e.ownerDocument||e,e.head.insertBefore(n,t===`title`?e.querySelector(`head > title`):null)}function Uf(e,t,n){if(n===1||t.itemProp!=null)return!1;switch(e){case`meta`:case`title`:return!0;case`style`:if(typeof t.precedence!=`string`||typeof t.href!=`string`||t.href===``)break;return!0;case`link`:if(typeof t.rel!=`string`||typeof t.href!=`string`||t.href===``||t.onLoad||t.onError)break;switch(t.rel){case`stylesheet`:return e=t.disabled,typeof t.precedence==`string`&&e==null;default:return!0}case`script`:if(t.async&&typeof t.async!=`function`&&typeof t.async!=`symbol`&&!t.onLoad&&!t.onError&&t.src&&typeof t.src==`string`)return!0}return!1}function Wf(e){return!(e.type===`stylesheet`&&!(e.state.loading&3))}function Gf(e,t,n,r){if(n.type===`stylesheet`&&(typeof r.media!=`string`||!1!==matchMedia(r.media).matches)&&!(n.state.loading&4)){if(n.instance===null){var i=Af(r.href),a=t.querySelector(jf(i));if(a){t=a._p,typeof t==`object`&&t&&typeof t.then==`function`&&(e.count++,e=Jf.bind(e),t.then(e,e)),n.state.loading|=4,n.instance=a,Et(a);return}a=t.ownerDocument||t,r=Mf(r),(i=mf.get(i))&&Rf(r,i),a=a.createElement(`link`),Et(a);var o=a;o._p=new Promise(function(e,t){o.onload=e,o.onerror=t}),Pd(a,`link`,r),n.instance=a}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(n,t),(t=n.state.preload)&&!(n.state.loading&3)&&(e.count++,n=Jf.bind(e),t.addEventListener(`load`,n),t.addEventListener(`error`,n))}}var Kf=0;function qf(e,t){return e.stylesheets&&e.count===0&&Xf(e,e.stylesheets),0<e.count||0<e.imgCount?function(n){var r=setTimeout(function(){if(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend){var t=e.unsuspend;e.unsuspend=null,t()}},6e4+t);0<e.imgBytes&&Kf===0&&(Kf=62500*Ld());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Xf(e,e.stylesheets),e.unsuspend)){var t=e.unsuspend;e.unsuspend=null,t()}},(e.imgBytes>Kf?50:800)+t);return e.unsuspend=n,function(){e.unsuspend=null,clearTimeout(r),clearTimeout(i)}}:null}function Jf(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Xf(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Yf=null;function Xf(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Yf=new Map,t.forEach(Zf,e),Yf=null,Jf.call(e))}function Zf(e,t){if(!(t.state.loading&4)){var n=Yf.get(e);if(n)var r=n.get(null);else{n=new Map,Yf.set(e,n);for(var i=e.querySelectorAll(`link[data-precedence],style[data-precedence]`),a=0;a<i.length;a++){var o=i[a];(o.nodeName===`LINK`||o.getAttribute(`media`)!==`not all`)&&(n.set(o.dataset.precedence,o),r=o)}r&&n.set(null,r)}i=t.instance,o=i.getAttribute(`data-precedence`),a=n.get(o)||r,a===r&&n.set(null,i),n.set(o,i),this.count++,r=Jf.bind(this),i.addEventListener(`load`,r),i.addEventListener(`error`,r),a?a.parentNode.insertBefore(i,a.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var Qf={$$typeof:C,Provider:null,Consumer:null,_currentValue:le,_currentValue2:le,_threadCount:0};function $f(e,t,n,r,i,a,o,s,c){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=rt(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=rt(0),this.hiddenUpdates=rt(null),this.identifierPrefix=r,this.onUncaughtError=i,this.onCaughtError=a,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=c,this.incompleteTransitions=new Map}function ep(e,t,n,r,i,a,o,s,c,l,u,d){return e=new $f(e,t,n,o,c,l,u,d,s),t=1,!0===a&&(t|=24),a=li(3,null,null,t),e.current=a,a.stateNode=e,t=ia(),t.refCount++,e.pooledCache=t,t.refCount++,a.memoizedState={element:r,isDehydrated:n,cache:t},La(a),e}function tp(e){return e?(e=si,e):si}function np(e,t,n,r,i,a){i=tp(i),r.context===null?r.context=i:r.pendingContext=i,r=za(t),r.payload={element:n},a=a===void 0?null:a,a!==null&&(r.callback=a),n=Ba(e,r,t),n!==null&&(_u(n,e,t),Va(n,e,t))}function rp(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function ip(e,t){rp(e,t),(e=e.alternate)&&rp(e,t)}function ap(e){if(e.tag===13||e.tag===31){var t=ii(e,67108864);t!==null&&_u(t,e,67108864),ip(e,67108864)}}function op(e){if(e.tag===13||e.tag===31){var t=hu();t=ct(t);var n=ii(e,t);n!==null&&_u(n,e,t),ip(e,t)}}var sp=!0;function cp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=2,up(e,t,n,r)}finally{O.p=a,D.T=i}}function lp(e,t,n,r){var i=D.T;D.T=null;var a=O.p;try{O.p=8,up(e,t,n,r)}finally{O.p=a,D.T=i}}function up(e,t,n,r){if(sp){var i=dp(r);if(i===null)Cd(e,t,r,fp,n),Cp(e,r);else if(Tp(i,e,t,n,r))r.stopPropagation();else if(Cp(e,r),t&4&&-1<Sp.indexOf(e)){for(;i!==null;){var a=Ct(i);if(a!==null)switch(a.tag){case 3:if(a=a.stateNode,a.current.memoizedState.isDehydrated){var o=Qe(a.pendingLanes);if(o!==0){var s=a;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var c=1<<31-Ge(o);s.entanglements[1]|=c,o&=~c}id(a),!(K&6)&&(ru=Pe()+500,ad(0,!1))}}break;case 31:case 13:s=ii(a,2),s!==null&&_u(s,a,2),Su(),ip(a,2)}if(a=dp(r),a===null&&Cd(e,t,r,fp,n),a===i)break;i=a}i!==null&&r.stopPropagation()}else Cd(e,t,r,null,n)}}function dp(e){return e=an(e),pp(e)}var fp=null;function pp(e){if(fp=null,e=St(e),e!==null){var t=o(e);if(t===null)e=null;else{var n=t.tag;if(n===13){if(e=s(t),e!==null)return e;e=null}else if(n===31){if(e=c(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return fp=e,null}function mp(e){switch(e){case`beforetoggle`:case`cancel`:case`click`:case`close`:case`contextmenu`:case`copy`:case`cut`:case`auxclick`:case`dblclick`:case`dragend`:case`dragstart`:case`drop`:case`focusin`:case`focusout`:case`input`:case`invalid`:case`keydown`:case`keypress`:case`keyup`:case`mousedown`:case`mouseup`:case`paste`:case`pause`:case`play`:case`pointercancel`:case`pointerdown`:case`pointerup`:case`ratechange`:case`reset`:case`resize`:case`seeked`:case`submit`:case`toggle`:case`touchcancel`:case`touchend`:case`touchstart`:case`volumechange`:case`change`:case`selectionchange`:case`textInput`:case`compositionstart`:case`compositionend`:case`compositionupdate`:case`beforeblur`:case`afterblur`:case`beforeinput`:case`blur`:case`fullscreenchange`:case`focus`:case`hashchange`:case`popstate`:case`select`:case`selectstart`:return 2;case`drag`:case`dragenter`:case`dragexit`:case`dragleave`:case`dragover`:case`mousemove`:case`mouseout`:case`mouseover`:case`pointermove`:case`pointerout`:case`pointerover`:case`scroll`:case`touchmove`:case`wheel`:case`mouseenter`:case`mouseleave`:case`pointerenter`:case`pointerleave`:return 8;case`message`:switch(Fe()){case Ie:return 2;case Le:return 8;case Re:case ze:return 32;case Be:return 268435456;default:return 32}default:return 32}}var hp=!1,gp=null,_p=null,vp=null,yp=new Map,bp=new Map,xp=[],Sp=`mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset`.split(` `);function Cp(e,t){switch(e){case`focusin`:case`focusout`:gp=null;break;case`dragenter`:case`dragleave`:_p=null;break;case`mouseover`:case`mouseout`:vp=null;break;case`pointerover`:case`pointerout`:yp.delete(t.pointerId);break;case`gotpointercapture`:case`lostpointercapture`:bp.delete(t.pointerId)}}function wp(e,t,n,r,i,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[i]},t!==null&&(t=Ct(t),t!==null&&ap(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Tp(e,t,n,r,i){switch(t){case`focusin`:return gp=wp(gp,e,t,n,r,i),!0;case`dragenter`:return _p=wp(_p,e,t,n,r,i),!0;case`mouseover`:return vp=wp(vp,e,t,n,r,i),!0;case`pointerover`:var a=i.pointerId;return yp.set(a,wp(yp.get(a)||null,e,t,n,r,i)),!0;case`gotpointercapture`:return a=i.pointerId,bp.set(a,wp(bp.get(a)||null,e,t,n,r,i)),!0}return!1}function Ep(e){var t=St(e.target);if(t!==null){var n=o(t);if(n!==null){if(t=n.tag,t===13){if(t=s(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===31){if(t=c(n),t!==null){e.blockedOn=t,dt(e.priority,function(){op(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Dp(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=dp(e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);F=r,n.target.dispatchEvent(r),F=null}else return t=Ct(n),t!==null&&ap(t),e.blockedOn=n,!1;t.shift()}return!0}function Op(e,t,n){Dp(e)&&n.delete(t)}function kp(){hp=!1,gp!==null&&Dp(gp)&&(gp=null),_p!==null&&Dp(_p)&&(_p=null),vp!==null&&Dp(vp)&&(vp=null),yp.forEach(Op),bp.forEach(Op)}function Ap(e,n){e.blockedOn===n&&(e.blockedOn=null,hp||(hp=!0,t.unstable_scheduleCallback(t.unstable_NormalPriority,kp)))}var jp=null;function Mp(e){jp!==e&&(jp=e,t.unstable_scheduleCallback(t.unstable_NormalPriority,function(){jp===e&&(jp=null);for(var t=0;t<e.length;t+=3){var n=e[t],r=e[t+1],i=e[t+2];if(typeof r!=`function`){if(pp(r||n)===null)continue;break}var a=Ct(n);a!==null&&(e.splice(t,3),t-=3,Cs(a,{pending:!0,data:i,method:n.method,action:r},r,i))}}))}function Np(e){function t(t){return Ap(t,e)}gp!==null&&Ap(gp,e),_p!==null&&Ap(_p,e),vp!==null&&Ap(vp,e),yp.forEach(t),bp.forEach(t);for(var n=0;n<xp.length;n++){var r=xp[n];r.blockedOn===e&&(r.blockedOn=null)}for(;0<xp.length&&(n=xp[0],n.blockedOn===null);)Ep(n),n.blockedOn===null&&xp.shift();if(n=(e.ownerDocument||e).$$reactFormReplay,n!=null)for(r=0;r<n.length;r+=3){var i=n[r],a=n[r+1],o=i[mt]||null;if(typeof a==`function`)o||Mp(n);else if(o){var s=null;if(a&&a.hasAttribute(`formAction`)){if(i=a,o=a[mt]||null)s=o.formAction;else if(pp(i)!==null)continue}else s=o.action;typeof s==`function`?n[r+1]=s:(n.splice(r,3),r-=3),Mp(n)}}}function Pp(){function e(e){e.canIntercept&&e.info===`react-transition`&&e.intercept({handler:function(){return new Promise(function(e){return i=e})},focusReset:`manual`,scroll:`manual`})}function t(){i!==null&&(i(),i=null),r||setTimeout(n,20)}function n(){if(!r&&!navigation.transition){var e=navigation.currentEntry;e&&e.url!=null&&navigation.navigate(e.url,{state:e.getState(),info:`react-transition`,history:`replace`})}}if(typeof navigation==`object`){var r=!1,i=null;return navigation.addEventListener(`navigate`,e),navigation.addEventListener(`navigatesuccess`,t),navigation.addEventListener(`navigateerror`,t),setTimeout(n,100),function(){r=!0,navigation.removeEventListener(`navigate`,e),navigation.removeEventListener(`navigatesuccess`,t),navigation.removeEventListener(`navigateerror`,t),i!==null&&(i(),i=null)}}}function Fp(e){this._internalRoot=e}Ip.prototype.render=Fp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(i(409));var n=t.current;np(n,hu(),e,t,null,null)},Ip.prototype.unmount=Fp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;np(e.current,2,null,e,null,null),Su(),t[ht]=null}};function Ip(e){this._internalRoot=e}Ip.prototype.unstable_scheduleHydration=function(e){if(e){var t=ut();e={blockedOn:null,target:e,priority:t};for(var n=0;n<xp.length&&t!==0&&t<xp[n].priority;n++);xp.splice(n,0,e),n===0&&Ep(e)}};var Lp=n.version;if(Lp!==`19.2.4`)throw Error(i(527,Lp,`19.2.4`));O.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render==`function`?Error(i(188)):(e=Object.keys(e).join(`,`),Error(i(268,e)));return e=d(t),e=e===null?null:p(e),e=e===null?null:e.stateNode,e};var Rp={bundleType:0,version:`19.2.4`,rendererPackageName:`react-dom`,currentDispatcherRef:D,reconcilerVersion:`19.2.4`};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<`u`){var zp=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zp.isDisabled&&zp.supportsFiber)try{He=zp.inject(Rp),Ue=zp}catch{}}e.createRoot=function(e,t){if(!a(e))throw Error(i(299));var n=!1,r=``,o=Ks,s=qs,c=Js;return t!=null&&(!0===t.unstable_strictMode&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onUncaughtError!==void 0&&(o=t.onUncaughtError),t.onCaughtError!==void 0&&(s=t.onCaughtError),t.onRecoverableError!==void 0&&(c=t.onRecoverableError)),t=ep(e,1,!1,null,null,n,r,null,o,s,c,Pp),e[ht]=t.current,xd(e),new Fp(t)}})),g=o(((e,t)=>{function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>`u`||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!=`function`))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}n(),t.exports=h()}))(),_=c(u(),1),v=`bippy-0.5.32`,y=Object.defineProperty,b=Object.prototype.hasOwnProperty,x=()=>{},S=e=>{try{Function.prototype.toString.call(e).indexOf(`^_^`)>-1&&setTimeout(()=>{throw Error(`React is running in production mode, but dead code elimination has not been applied. Read how to correctly configure React for production: https://reactjs.org/link/perf-use-production-build`)})}catch{}},C=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>!!(e&&`getFiberRoots`in e),w=!1,T,ee=(e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__)=>w?!0:(e&&typeof e.inject==`function`&&(T=e.inject.toString()),!!T?.includes(`(injected)`)),te=new Set,E=new Set,ne=e=>{let t=new Map,n=0,r={_instrumentationIsActive:!1,_instrumentationSource:v,checkDCE:S,hasUnsupportedRendererAttached:!1,inject(e){let i=++n;return t.set(i,e),E.add(e),r._instrumentationIsActive||(r._instrumentationIsActive=!0,te.forEach(e=>e())),i},on:x,onCommitFiberRoot:x,onCommitFiberUnmount:x,onPostCommitFiberRoot:x,renderers:t,supportsFiber:!0,supportsFlight:!0};try{y(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`,{configurable:!0,enumerable:!0,get(){return r},set(t){if(t&&typeof t==`object`){let n=r.renderers;r=t,n.size>0&&(n.forEach((e,n)=>{E.add(e),t.renderers.set(n,e)}),re(e))}}});let t=window.hasOwnProperty,n=!1;y(window,`hasOwnProperty`,{configurable:!0,value:function(...e){try{if(!n&&e[0]===`__REACT_DEVTOOLS_GLOBAL_HOOK__`)return globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__=void 0,n=!0,-0}catch{}return t.apply(this,e)},writable:!0})}catch{re(e)}return r},re=e=>{e&&te.add(e);try{let t=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t)return;if(!t._instrumentationSource){t.checkDCE=S,t.supportsFiber=!0,t.supportsFlight=!0,t.hasUnsupportedRendererAttached=!1,t._instrumentationSource=v,t._instrumentationIsActive=!1;let e=C(t);if(e||(t.on=x),t.renderers.size){t._instrumentationIsActive=!0,te.forEach(e=>e());return}let n=t.inject,r=ee(t);r&&!e&&(w=!0,t.inject({scheduleRefresh(){}})&&(t._instrumentationIsActive=!0)),t.inject=e=>{let i=n(e);return E.add(e),r&&t.renderers.set(i,e),t._instrumentationIsActive=!0,te.forEach(e=>e()),i}}(t.renderers.size||t._instrumentationIsActive||ee())&&e?.()}catch{}},ie=()=>b.call(globalThis,`__REACT_DEVTOOLS_GLOBAL_HOOK__`),ae=e=>ie()?(re(e),globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__):ne(e),oe=()=>!!(typeof window<`u`&&(window.document?.createElement||window.navigator?.product===`ReactNative`));(()=>{try{oe()&&ae()}catch{}})();var se=60111,ce=`Symbol(react.concurrent_mode)`,D=`Symbol(react.async_mode)`,O=13366,le=e=>{switch(e.tag){case 5:case 26:case 27:return!0;default:return typeof e.type==`string`}},ue=e=>{switch(e.tag){case 1:case 11:case 0:case 14:case 15:return!0;default:return!1}},de=(e,t)=>{try{let n=e.dependencies,r=e.alternate?.dependencies;if(!n||!r||typeof n!=`object`||!(`firstContext`in n)||typeof r!=`object`||!(`firstContext`in r))return!1;let i=n.firstContext,a=r.firstContext;for(;i&&typeof i==`object`&&`memoizedValue`in i||a&&typeof a==`object`&&`memoizedValue`in a;){if(t(i,a)===!0)return!0;i=i?.next,a=a?.next}}catch{}return!1},fe=(e,t)=>{try{let n=e.memoizedProps,r=e.alternate?.memoizedProps||{},i=new Set([...Object.keys(n),...Object.keys(r)]);for(let e of i){let i=r?.[e],a=n?.[e];if(t(e,a,i)===!0)return!0}}catch{}return!1},pe=e=>{let t=e.memoizedProps,n=e.alternate?.memoizedProps||{},r=e.flags??e.effectTag??0;switch(e.tag){case 1:case 9:case 11:case 0:case 14:case 15:return(r&1)==1;default:return e.alternate?n!==t||e.alternate.memoizedState!==e.memoizedState||e.alternate.ref!==e.ref:!0}},k=e=>!!(e.flags&(O|8)||e.subtreeFlags&(O|8)),me=e=>{let t=[],n=[e];for(;n.length;){let e=n.pop();e&&(le(e)&&k(e)&&pe(e)&&t.push(e),e.child&&n.push(e.child),e.sibling&&n.push(e.sibling))}return t},he=e=>{switch(e.tag){case 18:return!0;case 7:case 6:case 23:case 22:return!0;case 3:return!1;default:{let t=typeof e.type==`object`&&e.type!==null?e.type.$$typeof:e.type;switch(typeof t==`symbol`?t.toString():t){case se:case ce:case D:return!0;default:return!1}}}},ge=e=>{let t=[],n=[];for(le(e)?t.push(e):e.child&&n.push(e.child);n.length;){let e=n.pop();if(!e)break;le(e)?t.push(e):e.child&&n.push(e.child),e.sibling&&n.push(e.sibling)}return t};function _e(e,t,n=!1){if(!e)return null;let r=t(e);if(r instanceof Promise)return(async()=>{if(await r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=await ye(i,t,n);if(e)return e;i=n?null:i.sibling}return null})();if(r===!0)return e;let i=n?e.return:e.child;for(;i;){let e=ve(i,t,n);if(e)return e;i=n?null:i.sibling}return null}var ve=(e,t,n=!1)=>{if(!e)return null;if(t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=ve(r,t,n);if(e)return e;r=n?null:r.sibling}return null},ye=async(e,t,n=!1)=>{if(!e)return null;if(await t(e)===!0)return e;let r=n?e.return:e.child;for(;r;){let e=await ye(r,t,n);if(e)return e;r=n?null:r.sibling}return null},be=e=>{let t=e?.actualDuration??0,n=t,r=e?.child??null;for(;t>0&&r!=null;)n-=r.actualDuration??0,r=r.sibling;return{selfTime:n,totalTime:t}},xe=e=>!!e.updateQueue?.memoCache,Se=e=>{let t=e;return typeof t==`function`?t:typeof t==`object`&&t?Se(t.type||t.render):null},Ce=e=>{let t=e;if(typeof t==`string`)return t;if(typeof t!=`function`&&!(typeof t==`object`&&t))return null;let n=t.displayName||t.name||null;if(n)return n;let r=Se(t);return r&&(r.displayName||r.name)||null},we=e=>{try{if(typeof e.version==`string`&&e.bundleType>0)return`development`}catch{}return`production`},Te=()=>{let e=globalThis.__REACT_DEVTOOLS_GLOBAL_HOOK__;return!!e?._instrumentationIsActive||C(e)||ee(e)},Ee=0,De=new WeakMap,Oe=(e,t=Ee++)=>{De.set(e,t)},ke=e=>{let t=De.get(e);return!t&&e.alternate&&(t=De.get(e.alternate)),t||(t=Ee++,Oe(e,t)),t},Ae=(e,t,n)=>{let r=t;for(;r!=null;){if(De.has(r)||ke(r),!he(r)&&pe(r)&&e(r,`mount`),r.tag===13)if(r.memoizedState!==null){let t=r.child,n=t?t.sibling:null;if(n){let t=n.child;t!==null&&Ae(e,t,!1)}}else{let t=null;r.child!==null&&(t=r.child.child),t!==null&&Ae(e,t,!1)}else r.child!=null&&Ae(e,r.child,!0);r=n?r.sibling:null}},je=(e,t,n,r)=>{if(De.has(t)||ke(t),!n)return;De.has(n)||ke(n);let i=t.tag===13,a=!he(t);a&&pe(t)&&e(t,`update`);let o=i&&n.memoizedState!==null,s=i&&t.memoizedState!==null;if(o&&s){let r=t.child?.sibling??null,i=n.child?.sibling??null;r!==null&&i!==null&&je(e,r,i,t)}else if(o&&!s){let n=t.child;n!==null&&Ae(e,n,!0)}else if(!o&&s){Ne(e,n);let r=t.child?.sibling??null;r!==null&&Ae(e,r,!0)}else if(t.child!==n.child){let n=t.child;for(;n;){if(n.alternate){let i=n.alternate;je(e,n,i,a?t:r)}else Ae(e,n,!1);n=n.sibling}}},Me=(e,t)=>{(t.tag===3||!he(t))&&e(t,`unmount`)},Ne=(e,t)=>{let n=t.tag===13&&t.memoizedState!==null,r=t.child;for(n&&(r=(t.child?.sibling??null)?.child??null);r!==null;)r.return!==null&&(Me(e,r),Ne(e,r)),r=r.sibling},Pe=0,Fe=new WeakMap,Ie=(e,t)=>{let n=`current`in e?e.current:e,r=Fe.get(e);r||(r={id:Pe++,prevFiber:null},Fe.set(e,r));let{prevFiber:i}=r;if(!n)Me(t,n);else if(i!==null){let e=i&&i.memoizedState!=null&&i.memoizedState.element!=null&&i.memoizedState.isDehydrated!==!0,r=n.memoizedState!=null&&n.memoizedState.element!=null&&n.memoizedState.isDehydrated!==!0;!e&&r?Ae(t,n,!1):e&&r?je(t,n,n.alternate,null):e&&!r&&Me(t,n)}else Ae(t,n,!0);r.prevFiber=n},Le=e=>Object.prototype.toString.call(e)===`[object Object]`&&(Object.getPrototypeOf(e)===Object.prototype||Object.getPrototypeOf(e)===null),Re=(e,t=[])=>{if(!Le(e))return[{path:t,value:e}];let n=[];for(let r in e){let i=e[r],a=t.concat(r);Le(i)?n.push(...Re(i,a)):n.push({path:a,value:i})}return n},ze=e=>{let t=ae(e.onActive);t._instrumentationSource=e.name??v;let n=t.onCommitFiberRoot;if(e.onCommitFiberRoot){let r=(t,i,a)=>{n!==r&&(n?.(t,i,a),e.onCommitFiberRoot?.(t,i,a))};t.onCommitFiberRoot=r}let r=t.onCommitFiberUnmount;if(e.onCommitFiberUnmount){let n=(i,a)=>{t.onCommitFiberUnmount===n&&(r?.(i,a),e.onCommitFiberUnmount?.(i,a))};t.onCommitFiberUnmount=n}let i=t.onPostCommitFiberRoot;if(e.onPostCommitFiberRoot){let n=(r,a)=>{t.onPostCommitFiberRoot===n&&(i?.(r,a),e.onPostCommitFiberRoot?.(r,a))};t.onPostCommitFiberRoot=n}return t},Be,A,Ve,He,Ue,We,Ge,Ke,qe,Je,Ye,Xe,Ze,Qe={},$e=[],et=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,tt=Array.isArray;function nt(e,t){for(var n in t)e[n]=t[n];return e}function rt(e){e&&e.parentNode&&e.parentNode.removeChild(e)}function it(e,t,n){var r,i,a,o={};for(a in t)a==`key`?r=t[a]:a==`ref`?i=t[a]:o[a]=t[a];if(arguments.length>2&&(o.children=arguments.length>3?Be.call(arguments,2):n),typeof e==`function`&&e.defaultProps!=null)for(a in e.defaultProps)o[a]===void 0&&(o[a]=e.defaultProps[a]);return at(e,o,r,i,null)}function at(e,t,n,r,i){var a={type:e,props:t,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:i??++Ve,__i:-1,__u:0};return i==null&&A.vnode!=null&&A.vnode(a),a}function j(e){return e.children}function ot(e,t){this.props=e,this.context=t}function st(e,t){if(t==null)return e.__?st(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type==`function`?st(e):null}function ct(e){if(e.__P&&e.__d){var t=e.__v,n=t.__e,r=[],i=[],a=nt({},t);a.__v=t.__v+1,A.vnode&&A.vnode(a),bt(e.__P,a,t,e.__n,e.__P.namespaceURI,32&t.__u?[n]:null,r,n??st(t),!!(32&t.__u),i),a.__v=t.__v,a.__.__k[a.__i]=a,St(r,a,i),t.__e=t.__=null,a.__e!=n&&lt(a)}}function lt(e){if((e=e.__)!=null&&e.__c!=null)return e.__e=e.__c.base=null,e.__k.some(function(t){if(t!=null&&t.__e!=null)return e.__e=e.__c.base=t.__e}),lt(e)}function ut(e){(!e.__d&&(e.__d=!0)&&Ue.push(e)&&!dt.__r++||We!=A.debounceRendering)&&((We=A.debounceRendering)||Ge)(dt)}function dt(){for(var e,t=1;Ue.length;)Ue.length>t&&Ue.sort(Ke),e=Ue.shift(),t=Ue.length,ct(e);dt.__r=0}function ft(e,t,n,r,i,a,o,s,c,l,u){var d,f,p,m,h,g,_,v=r&&r.__k||$e,y=t.length;for(c=pt(n,t,v,c,y),d=0;d<y;d++)(p=n.__k[d])!=null&&(f=p.__i!=-1&&v[p.__i]||Qe,p.__i=d,g=bt(e,p,f,i,a,o,s,c,l,u),m=p.__e,p.ref&&f.ref!=p.ref&&(f.ref&&Tt(f.ref,null,p),u.push(p.ref,p.__c||m,p)),h==null&&m!=null&&(h=m),(_=!!(4&p.__u))||f.__k===p.__k?c=mt(p,c,e,_):typeof p.type==`function`&&g!==void 0?c=g:m&&(c=m.nextSibling),p.__u&=-7);return n.__e=h,c}function pt(e,t,n,r,i){var a,o,s,c,l,u=n.length,d=u,f=0;for(e.__k=Array(i),a=0;a<i;a++)(o=t[a])!=null&&typeof o!=`boolean`&&typeof o!=`function`?(typeof o==`string`||typeof o==`number`||typeof o==`bigint`||o.constructor==String?o=e.__k[a]=at(null,o,null,null,null):tt(o)?o=e.__k[a]=at(j,{children:o},null,null,null):o.constructor===void 0&&o.__b>0?o=e.__k[a]=at(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):e.__k[a]=o,c=a+f,o.__=e,o.__b=e.__b+1,s=null,(l=o.__i=gt(o,n,c,d))!=-1&&(d--,(s=n[l])&&(s.__u|=2)),s==null||s.__v==null?(l==-1&&(i>u?f--:i<u&&f++),typeof o.type!=`function`&&(o.__u|=4)):l!=c&&(l==c-1?f--:l==c+1?f++:(l>c?f--:f++,o.__u|=4))):e.__k[a]=null;if(d)for(a=0;a<u;a++)(s=n[a])!=null&&!(2&s.__u)&&(s.__e==r&&(r=st(s)),Et(s,s));return r}function mt(e,t,n,r){var i,a;if(typeof e.type==`function`){for(i=e.__k,a=0;i&&a<i.length;a++)i[a]&&(i[a].__=e,t=mt(i[a],t,n,r));return t}e.__e!=t&&(r&&(t&&e.type&&!t.parentNode&&(t=st(e)),n.insertBefore(e.__e,t||null)),t=e.__e);do t&&=t.nextSibling;while(t!=null&&t.nodeType==8);return t}function ht(e,t){return t||=[],e==null||typeof e==`boolean`||(tt(e)?e.some(function(e){ht(e,t)}):t.push(e)),t}function gt(e,t,n,r){var i,a,o,s=e.key,c=e.type,l=t[n],u=l!=null&&(2&l.__u)==0;if(l===null&&s==null||u&&s==l.key&&c==l.type)return n;if(r>(u?1:0)){for(i=n-1,a=n+1;i>=0||a<t.length;)if((l=t[o=i>=0?i--:a++])!=null&&!(2&l.__u)&&s==l.key&&c==l.type)return o}return-1}function _t(e,t,n){t[0]==`-`?e.setProperty(t,n??``):e[t]=n==null?``:typeof n!=`number`||et.test(t)?n:n+`px`}function vt(e,t,n,r,i){var a,o;n:if(t==`style`)if(typeof n==`string`)e.style.cssText=n;else{if(typeof r==`string`&&(e.style.cssText=r=``),r)for(t in r)n&&t in n||_t(e.style,t,``);if(n)for(t in n)r&&n[t]==r[t]||_t(e.style,t,n[t])}else if(t[0]==`o`&&t[1]==`n`)a=t!=(t=t.replace(qe,`$1`)),o=t.toLowerCase(),t=o in e||t==`onFocusOut`||t==`onFocusIn`?o.slice(2):t.slice(2),e.l||={},e.l[t+a]=n,n?r?n.u=r.u:(n.u=Je,e.addEventListener(t,a?Xe:Ye,a)):e.removeEventListener(t,a?Xe:Ye,a);else{if(i==`http://www.w3.org/2000/svg`)t=t.replace(/xlink(H|:h)/,`h`).replace(/sName$/,`s`);else if(t!=`width`&&t!=`height`&&t!=`href`&&t!=`list`&&t!=`form`&&t!=`tabIndex`&&t!=`download`&&t!=`rowSpan`&&t!=`colSpan`&&t!=`role`&&t!=`popover`&&t in e)try{e[t]=n??``;break n}catch{}typeof n==`function`||(n==null||!1===n&&t[4]!=`-`?e.removeAttribute(t):e.setAttribute(t,t==`popover`&&n==1?``:n))}}function yt(e){return function(t){if(this.l){var n=this.l[t.type+e];if(t.t==null)t.t=Je++;else if(t.t<n.u)return;return n(A.event?A.event(t):t)}}}function bt(e,t,n,r,i,a,o,s,c,l){var u,d,f,p,m,h,g,_,v,y,b,x,S,C,w,T=t.type;if(t.constructor!==void 0)return null;128&n.__u&&(c=!!(32&n.__u),a=[s=t.__e=n.__e]),(u=A.__b)&&u(t);n:if(typeof T==`function`)try{if(_=t.props,v=`prototype`in T&&T.prototype.render,y=(u=T.contextType)&&r[u.__c],b=u?y?y.props.value:u.__:r,n.__c?g=(d=t.__c=n.__c).__=d.__E:(v?t.__c=d=new T(_,b):(t.__c=d=new ot(_,b),d.constructor=T,d.render=Dt),y&&y.sub(d),d.state||={},d.__n=r,f=d.__d=!0,d.__h=[],d._sb=[]),v&&d.__s==null&&(d.__s=d.state),v&&T.getDerivedStateFromProps!=null&&(d.__s==d.state&&(d.__s=nt({},d.__s)),nt(d.__s,T.getDerivedStateFromProps(_,d.__s))),p=d.props,m=d.state,d.__v=t,f)v&&T.getDerivedStateFromProps==null&&d.componentWillMount!=null&&d.componentWillMount(),v&&d.componentDidMount!=null&&d.__h.push(d.componentDidMount);else{if(v&&T.getDerivedStateFromProps==null&&_!==p&&d.componentWillReceiveProps!=null&&d.componentWillReceiveProps(_,b),t.__v==n.__v||!d.__e&&d.shouldComponentUpdate!=null&&!1===d.shouldComponentUpdate(_,d.__s,b)){t.__v!=n.__v&&(d.props=_,d.state=d.__s,d.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some(function(e){e&&(e.__=t)}),$e.push.apply(d.__h,d._sb),d._sb=[],d.__h.length&&o.push(d);break n}d.componentWillUpdate!=null&&d.componentWillUpdate(_,d.__s,b),v&&d.componentDidUpdate!=null&&d.__h.push(function(){d.componentDidUpdate(p,m,h)})}if(d.context=b,d.props=_,d.__P=e,d.__e=!1,x=A.__r,S=0,v)d.state=d.__s,d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),$e.push.apply(d.__h,d._sb),d._sb=[];else do d.__d=!1,x&&x(t),u=d.render(d.props,d.state,d.context),d.state=d.__s;while(d.__d&&++S<25);d.state=d.__s,d.getChildContext!=null&&(r=nt(nt({},r),d.getChildContext())),v&&!f&&d.getSnapshotBeforeUpdate!=null&&(h=d.getSnapshotBeforeUpdate(p,m)),C=u!=null&&u.type===j&&u.key==null?Ct(u.props.children):u,s=ft(e,tt(C)?C:[C],t,n,r,i,a,o,s,c,l),d.base=t.__e,t.__u&=-161,d.__h.length&&o.push(d),g&&(d.__E=d.__=null)}catch(e){if(t.__v=null,c||a!=null)if(e.then){for(t.__u|=c?160:128;s&&s.nodeType==8&&s.nextSibling;)s=s.nextSibling;a[a.indexOf(s)]=null,t.__e=s}else{for(w=a.length;w--;)rt(a[w]);xt(t)}else t.__e=n.__e,t.__k=n.__k,e.then||xt(t);A.__e(e,t,n)}else a==null&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):s=t.__e=wt(n.__e,t,n,r,i,a,o,c,l);return(u=A.diffed)&&u(t),128&t.__u?void 0:s}function xt(e){e&&(e.__c&&(e.__c.__e=!0),e.__k&&e.__k.some(xt))}function St(e,t,n){for(var r=0;r<n.length;r++)Tt(n[r],n[++r],n[++r]);A.__c&&A.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){A.__e(e,t.__v)}})}function Ct(e){return typeof e!=`object`||!e||e.__b>0?e:tt(e)?e.map(Ct):nt({},e)}function wt(e,t,n,r,i,a,o,s,c){var l,u,d,f,p,m,h,g=n.props||Qe,_=t.props,v=t.type;if(v==`svg`?i=`http://www.w3.org/2000/svg`:v==`math`?i=`http://www.w3.org/1998/Math/MathML`:i||=`http://www.w3.org/1999/xhtml`,a!=null){for(l=0;l<a.length;l++)if((p=a[l])&&`setAttribute`in p==!!v&&(v?p.localName==v:p.nodeType==3)){e=p,a[l]=null;break}}if(e==null){if(v==null)return document.createTextNode(_);e=document.createElementNS(i,v,_.is&&_),s&&=(A.__m&&A.__m(t,a),!1),a=null}if(v==null)g===_||s&&e.data==_||(e.data=_);else{if(a&&=Be.call(e.childNodes),!s&&a!=null)for(g={},l=0;l<e.attributes.length;l++)g[(p=e.attributes[l]).name]=p.value;for(l in g)p=g[l],l==`dangerouslySetInnerHTML`?d=p:l==`children`||l in _||l==`value`&&`defaultValue`in _||l==`checked`&&`defaultChecked`in _||vt(e,l,null,p,i);for(l in _)p=_[l],l==`children`?f=p:l==`dangerouslySetInnerHTML`?u=p:l==`value`?m=p:l==`checked`?h=p:s&&typeof p!=`function`||g[l]===p||vt(e,l,p,g[l],i);if(u)s||d&&(u.__html==d.__html||u.__html==e.innerHTML)||(e.innerHTML=u.__html),t.__k=[];else if(d&&(e.innerHTML=``),ft(t.type==`template`?e.content:e,tt(f)?f:[f],t,n,r,v==`foreignObject`?`http://www.w3.org/1999/xhtml`:i,a,o,a?a[0]:n.__k&&st(n,0),s,c),a!=null)for(l=a.length;l--;)rt(a[l]);s||(l=`value`,v==`progress`&&m==null?e.removeAttribute(`value`):m!=null&&(m!==e[l]||v==`progress`&&!m||v==`option`&&m!=g[l])&&vt(e,l,m,g[l],i),l=`checked`,h!=null&&h!=e[l]&&vt(e,l,h,g[l],i))}return e}function Tt(e,t,n){try{if(typeof e==`function`){var r=typeof e.__u==`function`;r&&e.__u(),r&&t==null||(e.__u=e(t))}else e.current=t}catch(e){A.__e(e,n)}}function Et(e,t,n){var r,i;if(A.unmount&&A.unmount(e),(r=e.ref)&&(r.current&&r.current!=e.__e||Tt(r,null,t)),(r=e.__c)!=null){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){A.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(i=0;i<r.length;i++)r[i]&&Et(r[i],t,n||typeof e.type!=`function`);n||rt(e.__e),e.__c=e.__=e.__e=void 0}function Dt(e,t,n){return this.constructor(e,n)}function Ot(e,t,n){var r,i,a,o;t==document&&(t=document.documentElement),A.__&&A.__(e,t),i=(r=typeof n==`function`)?null:n&&n.__k||t.__k,a=[],o=[],bt(t,e=(!r&&n||t).__k=it(j,null,[e]),i||Qe,Qe,t.namespaceURI,!r&&n?[n]:i?null:t.firstChild?Be.call(t.childNodes):null,a,!r&&n?n:i?i.__e:t.firstChild,r,o),St(a,e,o)}function kt(e){function t(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t.__c]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null},this.shouldComponentUpdate=function(e){this.props.value!=e.value&&n.forEach(function(e){e.__e=!0,ut(e)})},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e)}}),e.children}return t.__c=`__cC`+ Ze++,t.__=e,t.Provider=t.__l=(t.Consumer=function(e,t){return e.children(t)}).contextType=t,t}Be=$e.slice,A={__e:function(e,t,n,r){for(var i,a,o;t=t.__;)if((i=t.__c)&&!i.__)try{if((a=i.constructor)&&a.getDerivedStateFromError!=null&&(i.setState(a.getDerivedStateFromError(e)),o=i.__d),i.componentDidCatch!=null&&(i.componentDidCatch(e,r||{}),o=i.__d),o)return i.__E=i}catch(t){e=t}throw e}},Ve=0,He=function(e){return e!=null&&e.constructor===void 0},ot.prototype.setState=function(e,t){var n=this.__s!=null&&this.__s!=this.state?this.__s:this.__s=nt({},this.state);typeof e==`function`&&(e=e(nt({},n),this.props)),e&&nt(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ut(this))},ot.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ut(this))},ot.prototype.render=j,Ue=[],Ge=typeof Promise==`function`?Promise.prototype.then.bind(Promise.resolve()):setTimeout,Ke=function(e,t){return e.__v.__b-t.__v.__b},dt.__r=0,qe=/(PointerCapture)$|Capture$/i,Je=0,Ye=yt(!1),Xe=yt(!0),Ze=0;var At,jt,Mt,Nt,Pt=0,Ft=[],It=A,Lt=It.__b,Rt=It.__r,zt=It.diffed,Bt=It.__c,Vt=It.unmount,Ht=It.__;function Ut(e,t){It.__h&&It.__h(jt,e,Pt||t),Pt=0;var n=jt.__H||={__:[],__h:[]};return e>=n.__.length&&n.__.push({}),n.__[e]}function M(e){return Pt=1,Wt(tn,e)}function Wt(e,t,n){var r=Ut(At++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):tn(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}))}],r.__c=jt,!jt.__f)){var i=function(e,t,n){if(!r.__c.__H)return!0;var i=r.__c.__H.__.filter(function(e){return e.__c});if(i.every(function(e){return!e.__N}))return!a||a.call(this,e,t,n);var o=r.__c.props!==e;return i.some(function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(o=!0)}}),a&&a.call(this,e,t,n)||o};jt.__f=!0;var a=jt.shouldComponentUpdate,o=jt.componentWillUpdate;jt.componentWillUpdate=function(e,t,n){if(this.__e){var r=a;a=void 0,i(e,t,n),a=r}o&&o.call(this,e,t,n)},jt.shouldComponentUpdate=i}return r.__N||r.__}function N(e,t){var n=Ut(At++,3);!It.__s&&en(n.__H,t)&&(n.__=e,n.u=t,jt.__H.__h.push(n))}function Gt(e,t){var n=Ut(At++,4);!It.__s&&en(n.__H,t)&&(n.__=e,n.u=t,jt.__h.push(n))}function P(e){return Pt=5,Kt(function(){return{current:e}},[])}function Kt(e,t){var n=Ut(At++,7);return en(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function qt(e,t){return Pt=8,Kt(function(){return e},t)}function Jt(e){var t=jt.context[e.__c],n=Ut(At++,9);return n.c=e,t?(n.__??(n.__=!0,t.sub(jt)),t.props.value):e.__}function Yt(){for(var e;e=Ft.shift();){var t=e.__H;if(e.__P&&t)try{t.__h.some(Qt),t.__h.some($t),t.__h=[]}catch(n){t.__h=[],It.__e(n,e.__v)}}}It.__b=function(e){jt=null,Lt&&Lt(e)},It.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),Ht&&Ht(e,t)},It.__r=function(e){Rt&&Rt(e),At=0;var t=(jt=e.__c).__H;t&&(Mt===jt?(t.__h=[],jt.__h=[],t.__.some(function(e){e.__N&&(e.__=e.__N),e.u=e.__N=void 0})):(t.__h.some(Qt),t.__h.some($t),t.__h=[],At=0)),Mt=jt},It.diffed=function(e){zt&&zt(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(Ft.push(t)!==1&&Nt===It.requestAnimationFrame||((Nt=It.requestAnimationFrame)||Zt)(Yt)),t.__H.__.some(function(e){e.u&&(e.__H=e.u),e.u=void 0})),Mt=jt=null},It.__c=function(e,t){t.some(function(e){try{e.__h.some(Qt),e.__h=e.__h.filter(function(e){return!e.__||$t(e)})}catch(n){t.some(function(e){e.__h&&=[]}),t=[],It.__e(n,e.__v)}}),Bt&&Bt(e,t)},It.unmount=function(e){Vt&&Vt(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.some(function(e){try{Qt(e)}catch(e){t=e}}),n.__H=void 0,t&&It.__e(t,n.__v))};var Xt=typeof requestAnimationFrame==`function`;function Zt(e){var t,n=function(){clearTimeout(r),Xt&&cancelAnimationFrame(t),setTimeout(e)},r=setTimeout(n,35);Xt&&(t=requestAnimationFrame(n))}function Qt(e){var t=jt,n=e.__c;typeof n==`function`&&(e.__c=void 0,n()),jt=t}function $t(e){var t=jt;e.__c=e.__(),jt=t}function en(e,t){return!e||e.length!==t.length||t.some(function(t,n){return t!==e[n]})}function tn(e,t){return typeof t==`function`?t(e):t}var nn=Symbol.for(`preact-signals`);function rn(){if(cn>1)cn--;else{var e,t=!1;for((function(){var e=dn;for(dn=void 0;e!==void 0;)e.S.v===e.v&&(e.S.i=e.i),e=e.o})();sn!==void 0;){var n=sn;for(sn=void 0,ln++;n!==void 0;){var r=n.u;if(n.u=void 0,n.f&=-3,!(8&n.f)&&gn(n))try{n.c()}catch(n){t||=(e=n,!0)}n=r}}if(ln=0,cn--,t)throw e}}var F=void 0;function an(e){var t=F;F=void 0;try{return e()}finally{F=t}}var on,sn=void 0,cn=0,ln=0,un=0,dn=void 0,fn=0;function pn(e){if(F!==void 0){var t=e.n;if(t===void 0||t.t!==F)return t={i:0,S:e,p:F.s,n:void 0,t:F,e:void 0,x:void 0,r:t},F.s!==void 0&&(F.s.n=t),F.s=t,e.n=t,32&F.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=F.s,t.n=void 0,F.s.n=t,F.s=t),t}}function mn(e,t){this.v=e,this.i=0,this.n=void 0,this.t=void 0,this.l=0,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}mn.prototype.brand=nn,mn.prototype.h=function(){return!0},mn.prototype.S=function(e){var t=this,n=this.t;n!==e&&e.e===void 0&&(e.x=n,this.t=e,n===void 0?an(function(){var e;(e=t.W)==null||e.call(t)}):n.e=e)},mn.prototype.U=function(e){var t=this;if(this.t!==void 0){var n=e.e,r=e.x;n!==void 0&&(n.x=r,e.e=void 0),r!==void 0&&(r.e=n,e.x=void 0),e===this.t&&(this.t=r,r===void 0&&an(function(){var e;(e=t.Z)==null||e.call(t)}))}},mn.prototype.subscribe=function(e){var t=this;return Tn(function(){var n=t.value,r=F;F=void 0;try{e(n)}finally{F=r}},{name:`sub`})},mn.prototype.valueOf=function(){return this.value},mn.prototype.toString=function(){return this.value+``},mn.prototype.toJSON=function(){return this.value},mn.prototype.peek=function(){var e=F;F=void 0;try{return this.value}finally{F=e}},Object.defineProperty(mn.prototype,`value`,{get:function(){var e=pn(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(e!==this.v){if(ln>100)throw Error(`Cycle detected`);(function(e){cn!==0&&ln===0&&e.l!==un&&(e.l=un,dn={S:e,v:e.v,i:e.i,o:dn})})(this),this.v=e,this.i++,fn++,cn++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{rn()}}}});function hn(e,t){return new mn(e,t)}function gn(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function _n(e){for(var t=e.s;t!==void 0;t=t.n){var n=t.S.n;if(n!==void 0&&(t.r=n),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function vn(e){for(var t=e.s,n=void 0;t!==void 0;){var r=t.p;t.i===-1?(t.S.U(t),r!==void 0&&(r.n=t.n),t.n!==void 0&&(t.n.p=r)):n=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=r}e.s=n}function yn(e,t){mn.call(this,void 0),this.x=e,this.s=void 0,this.g=fn-1,this.f=4,this.W=t?.watched,this.Z=t?.unwatched,this.name=t?.name}yn.prototype=new mn,yn.prototype.h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===fn))return!0;if(this.g=fn,this.f|=1,this.i>0&&!gn(this))return this.f&=-2,!0;var e=F;try{_n(this),F=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(e){this.v=e,this.f|=16,this.i++}return F=e,vn(this),this.f&=-2,!0},yn.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}mn.prototype.S.call(this,e)},yn.prototype.U=function(e){if(this.t!==void 0&&(mn.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}},yn.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}},Object.defineProperty(yn.prototype,`value`,{get:function(){if(1&this.f)throw Error(`Cycle detected`);var e=pn(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function bn(e,t){return new yn(e,t)}function xn(e){var t=e.m;if(e.m=void 0,typeof t==`function`){cn++;var n=F;F=void 0;try{t()}catch(t){throw e.f&=-2,e.f|=8,Sn(e),t}finally{F=n,rn()}}}function Sn(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,xn(e)}function Cn(e){if(F!==this)throw Error(`Out-of-order effect`);vn(this),F=e,this.f&=-2,8&this.f&&Sn(this),rn()}function wn(e,t){this.x=e,this.m=void 0,this.s=void 0,this.u=void 0,this.f=32,this.name=t?.name,on&&on.push(this)}wn.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t==`function`&&(this.m=t)}finally{e()}},wn.prototype.S=function(){if(1&this.f)throw Error(`Cycle detected`);this.f|=1,this.f&=-9,xn(this),_n(this),cn++;var e=F;return F=this,Cn.bind(this,e)},wn.prototype.N=function(){2&this.f||(this.f|=2,this.u=sn,sn=this)},wn.prototype.d=function(){this.f|=8,1&this.f||Sn(this)},wn.prototype.dispose=function(){this.d()};function Tn(e,t){var n=new wn(e,t);try{n.c()}catch(e){throw n.d(),e}var r=n.d.bind(n);return r[Symbol.dispose]=r,r}var En;function Dn(e,t){A[e]=t.bind(null,A[e]||function(){})}function On(e){if(En){var t=En;En=void 0,t()}En=e&&e.S()}function kn(e){var t=this,n=e.data,r=jn(n);r.value=n;var i=Kt(function(){for(var e=t.__v;e=e.__;)if(e.__c){e.__c.__$f|=4;break}return t.__$u.c=function(){var e=t.__$u.S(),n=i.value;e(),He(n)||t.base?.nodeType!==3?(t.__$f|=1,t.setState({})):t.base.data=n},bn(function(){var e=r.value.value;return e===0?0:!0===e?``:e||``})},[]);return i.value}kn.displayName=`_st`,Object.defineProperties(mn.prototype,{constructor:{configurable:!0,value:void 0},type:{configurable:!0,value:kn},props:{configurable:!0,get:function(){return{data:this}}},__b:{configurable:!0,value:1}}),Dn(`__b`,function(e,t){if(typeof t.type==`string`){var n,r=t.props;for(var i in r)if(i!==`children`){var a=r[i];a instanceof mn&&(n||(t.__np=n={}),n[i]=a,r[i]=a.peek())}}e(t)}),Dn(`__r`,function(e,t){e(t),On();var n,r=t.__c;r&&(r.__$f&=-2,(n=r.__$u)===void 0&&(r.__$u=n=function(e){var t;return Tn(function(){t=this}),t.c=function(){r.__$f|=1,r.setState({})},t}())),On(n)}),Dn(`__e`,function(e,t,n,r){On(),e(t,n,r)}),Dn(`diffed`,function(e,t){On();var n;if(typeof t.type==`string`&&(n=t.__e)){var r=t.__np,i=t.props;if(r){var a=n.U;if(a)for(var o in a){var s=a[o];s!==void 0&&!(o in r)&&(s.d(),a[o]=void 0)}else n.U=a={};for(var c in r){var l=a[c],u=r[c];l===void 0?(l=An(n,c,u,i),a[c]=l):l.o(u,i)}}}e(t)});function An(e,t,n,r){var i=t in e&&e.ownerSVGElement===void 0,a=hn(n);return{o:function(e,t){a.value=e,r=t},d:Tn(function(){var n=a.value.value;r[t]!==n&&(r[t]=n,i?e[t]=n:n?e.setAttribute(t,n):e.removeAttribute(t))})}}Dn(`unmount`,function(e,t){if(typeof t.type==`string`){var n=t.__e;if(n){var r=n.U;if(r)for(var i in n.U=void 0,r){var a=r[i];a&&a.d()}}}else{var o=t.__c;if(o){var s=o.__$u;s&&(o.__$u=void 0,s.d())}}e(t)}),Dn(`__h`,function(e,t,n,r){(r<3||r===9)&&(t.__$f|=2),e(t,n,r)}),ot.prototype.shouldComponentUpdate=function(e,t){if(this.__R)return!0;var n=this.__$u,r=n&&n.s!==void 0;for(var i in t)return!0;if(this.__f||typeof this.u==`boolean`&&!0===this.u){if(!(r||2&this.__$f||4&this.__$f)||1&this.__$f)return!0}else if(!(r||4&this.__$f)||3&this.__$f)return!0;for(var a in e)if(a!==`__source`&&e[a]!==this.props[a])return!0;for(var o in this.props)if(!(o in e))return!0;return!1};function jn(e){return Kt(function(){return hn(e)},[])}function Mn(e){var t=P(e);t.current=e,N(function(){return Tn(function(){return t.current()})},[])}function Nn(e,t){for(var n in t)e[n]=t[n];return e}function Pn(e,t){for(var n in e)if(n!==`__source`&&!(n in t))return!0;for(var r in t)if(r!==`__source`&&e[r]!==t[r])return!0;return!1}function Fn(e,t){var n=t(),r=M({t:{__:n,u:t}}),i=r[0].t,a=r[1];return Gt(function(){i.__=n,i.u=t,In(i)&&a({t:i})},[e,n,t]),N(function(){return In(i)&&a({t:i}),e(function(){In(i)&&a({t:i})})},[e]),n}function In(e){try{return!((t=e.__)===(n=e.u())&&(t!==0||1/t==1/n)||t!=t&&n!=n)}catch{return!0}var t,n}function Ln(e,t){this.props=e,this.context=t}function Rn(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return!r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:Pn(this.props,e)}function r(t){return this.shouldComponentUpdate=n,it(e,t)}return r.displayName=`Memo(`+(e.displayName||e.name)+`)`,r.prototype.isReactComponent=!0,r.__f=!0,r.type=e,r}(Ln.prototype=new ot).isPureReactComponent=!0,Ln.prototype.shouldComponentUpdate=function(e,t){return Pn(this.props,e)||Pn(this.state,t)};var zn=A.__b;A.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),zn&&zn(e)};var Bn=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.forward_ref`)||3911;function Vn(e){function t(t){var n=Nn({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=Bn,t.render=e,t.prototype.isReactComponent=t.__f=!0,t.displayName=`ForwardRef(`+(e.displayName||e.name)+`)`,t}var Hn=A.__e;A.__e=function(e,t,n,r){if(e.then){for(var i,a=t;a=a.__;)if((i=a.__c)&&i.__c)return t.__e??(t.__e=n.__e,t.__k=n.__k),i.__c(e,t)}Hn(e,t,n,r)};var Un=A.unmount;function Wn(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach(function(e){typeof e.__c==`function`&&e.__c()}),e.__c.__H=null),(e=Nn({},e)).__c!=null&&(e.__c.__P===n&&(e.__c.__P=t),e.__c.__e=!0,e.__c=null),e.__k=e.__k&&e.__k.map(function(e){return Wn(e,t,n)})),e}function Gn(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map(function(e){return Gn(e,t,n)}),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function Kn(){this.__u=0,this.o=null,this.__b=null}function qn(e){if(!e.__)return null;var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Jn(){this.i=null,this.l=null}A.unmount=function(e){var t=e.__c;t&&(t.__z=!0),t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Un&&Un(e)},(Kn.prototype=new ot).__c=function(e,t){var n=t.__c,r=this;r.o??=[],r.o.push(n);var i=qn(r.__v),a=!1,o=function(){a||r.__z||(a=!0,n.__R=null,i?i(c):c())};n.__R=o;var s=n.__P;n.__P=null;var c=function(){if(!--r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Gn(e,e.__c.__P,e.__c.__O)}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.__P=s,t.forceUpdate()}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(o,o)},Kn.prototype.componentWillUnmount=function(){this.o=[]},Kn.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement(`div`),r=this.__v.__k[0].__c;this.__v.__k[0]=Wn(this.__b,n,r.__O=r.__P)}this.__b=null}var i=t.__a&&it(j,null,e.fallback);return i&&(i.__u&=-33),[it(j,null,t.__a?null:e.children),i]};var Yn=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&(e.props.revealOrder[0]!==`t`||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2]}};function Xn(e){return this.getChildContext=function(){return e.context},e.children}function Zn(e){var t=this,n=e.h;if(t.componentWillUnmount=function(){Ot(null,t.v),t.v=null,t.h=null},t.h&&t.h!==n&&t.componentWillUnmount(),!t.v){for(var r=t.__v;r!==null&&!r.__m&&r.__!==null;)r=r.__;t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],__k:{__m:r.__m},contains:function(){return!0},namespaceURI:n.namespaceURI,insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n)},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e)}}}Ot(it(Xn,{context:t.context},e.__v),t.v)}function Qn(e,t){var n=it(Zn,{__v:e,h:t});return n.containerInfo=t,n}(Jn.prototype=new ot).__a=function(e){var t=this,n=qn(t.__v),r=t.l.get(e);return r[0]++,function(i){var a=function(){t.props.revealOrder?(r.push(i),Yn(t,e,r)):i()};n?n(a):a()}},Jn.prototype.render=function(e){this.i=null,this.l=new Map;var t=ht(e.children);e.revealOrder&&e.revealOrder[0]===`b`&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Jn.prototype.componentDidUpdate=Jn.prototype.componentDidMount=function(){var e=this;this.l.forEach(function(t,n){Yn(e,n,t)})};var $n=typeof Symbol<`u`&&Symbol.for&&Symbol.for(`react.element`)||60103,er=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,tr=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,nr=/[A-Z0-9]/g,rr=typeof document<`u`,ir=function(e){return(typeof Symbol<`u`&&typeof Symbol()==`symbol`?/fil|che|rad/:/fil|che|ra/).test(e)};ot.prototype.isReactComponent={},[`componentWillMount`,`componentWillReceiveProps`,`componentWillUpdate`].forEach(function(e){Object.defineProperty(ot.prototype,e,{configurable:!0,get:function(){return this[`UNSAFE_`+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t})}})});var ar=A.event;function or(){}function sr(){return this.cancelBubble}function cr(){return this.defaultPrevented}A.event=function(e){return ar&&(e=ar(e)),e.persist=or,e.isPropagationStopped=sr,e.isDefaultPrevented=cr,e.nativeEvent=e};var lr={enumerable:!1,configurable:!0,get:function(){return this.class}},ur=A.vnode;A.vnode=function(e){typeof e.type==`string`&&function(e){var t=e.props,n=e.type,r={},i=n.indexOf(`-`)===-1;for(var a in t){var o=t[a];if(!(a===`value`&&`defaultValue`in t&&o==null||rr&&a===`children`&&n===`noscript`||a===`class`||a===`className`)){var s=a.toLowerCase();a===`defaultValue`&&`value`in t&&t.value==null?a=`value`:a===`download`&&!0===o?o=``:s===`translate`&&o===`no`?o=!1:s[0]===`o`&&s[1]===`n`?s===`ondoubleclick`?a=`ondblclick`:s!==`onchange`||n!==`input`&&n!==`textarea`||ir(t.type)?s===`onfocus`?a=`onfocusin`:s===`onblur`?a=`onfocusout`:tr.test(a)&&(a=s):s=a=`oninput`:i&&er.test(a)?a=a.replace(nr,`-$&`).toLowerCase():o===null&&(o=void 0),s===`oninput`&&r[a=s]&&(a=`oninputCapture`),r[a]=o}}n==`select`&&r.multiple&&Array.isArray(r.value)&&(r.value=ht(t.children).forEach(function(e){e.props.selected=r.value.indexOf(e.props.value)!=-1})),n==`select`&&r.defaultValue!=null&&(r.value=ht(t.children).forEach(function(e){e.props.selected=r.multiple?r.defaultValue.indexOf(e.props.value)!=-1:r.defaultValue==e.props.value})),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,`className`,lr)):t.className&&(r.class=r.className=t.className),e.props=r}(e),e.$$typeof=$n,ur&&ur(e)};var dr=A.__r;A.__r=function(e){dr&&dr(e),e.__c};var fr=A.diffed;A.diffed=function(e){fr&&fr(e);var t=e.props,n=e.__e;n!=null&&e.type===`textarea`&&`value`in t&&t.value!==n.value&&(n.value=t.value==null?``:t.value)};var pr=0;Array.isArray;function I(e,t,n,r,i,a){t||={};var o,s,c=t;if(`ref`in c)for(s in c={},t)s==`ref`?o=t[s]:c[s]=t[s];var l={type:e,props:c,key:n,ref:o,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--pr,__i:-1,__u:0,__source:i,__self:a};if(typeof e==`function`&&(o=e.defaultProps))for(s in o)c[s]===void 0&&(c[s]=o[s]);return A.vnode&&A.vnode(l),l}Array.prototype.toSorted||Object.defineProperty(Array.prototype,`toSorted`,{value:function(e){return[...this].sort(e)},writable:!0,configurable:!0});var mr=typeof window<`u`;function hr(e,t){return t-e}function gr(e){let t=e[0].name,n=e.length,r=Math.min(4,n);for(let n=1;n<r;n++)t+=`, ${e[n].name}`;return t}function _r(e){let t=e[0].time;for(let n=1,r=e.length;n<r;n++)t+=e[n].time;return t}function vr(e){for(let t=0,n=e.length;t<n;t++)if(e[t].forget)return!0;return!1}var yr=e=>{let t=``,n=new Map;for(let t of e){let{forget:e,time:r,aggregatedCount:i,name:a}=t;n.has(i)||n.set(i,[]);let o=n.get(i);o&&o.push({name:a,forget:e,time:r??0})}let r=Array.from(n.keys()).sort(hr),i=[],a=0;for(let e of r){let t=n.get(e);if(!t)continue;let r=gr(t),o=_r(t),s=vr(t);a+=o,t.length>4&&(r+=`…`),e>1&&(r+=` \xD7 ${e}`),s&&(r=`\u2728${r}`),i.push(r)}return t=i.join(`, `),t.length?(t.length>40&&(t=`${t.slice(0,40)}\u2026`),a>=.01&&(t+=` (${Number(a.toFixed(2))}ms)`),t):null};function br(e,t){return e===t||e!==e&&t!==t}var xr=()=>mr?(window.reactScanIdCounter===void 0&&(window.reactScanIdCounter=0),`${++window.reactScanIdCounter}`):`0`,Sr=e=>{let t=e.createOscillator(),n=e.createGain();t.connect(n),n.connect(e.destination);let r={type:`sine`,freq:[392,600],duration:.3,gain:.12},i=r.freq,a=r.duration/i.length;i.forEach((n,r)=>{t.frequency.setValueAtTime(n,e.currentTime+r*a)}),t.type=r.type,n.gain.setValueAtTime(r.gain,e.currentTime),n.gain.setTargetAtTime(0,e.currentTime+r.duration*.7,.05),t.start(),t.stop(e.currentTime+r.duration)},Cr=Vn(({size:e=15,name:t,fill:n=`currentColor`,stroke:r=`currentColor`,className:i,externalURL:a=``,style:o},s)=>{let c=Array.isArray(e)?e[0]:e,l=Array.isArray(e)?e[1]||e[0]:e,u=`${a}#${t}`;return I(`svg`,{ref:s,width:`${c}px`,height:`${l}px`,fill:n,stroke:r,className:i,style:{...o,minWidth:`${c}px`,maxWidth:`${c}px`,minHeight:`${l}px`,maxHeight:`${l}px`},children:[I(`title`,{children:t}),I(`use`,{href:u})]})}),L=24,wr={width:550,height:350,initialHeight:400},Tr=240,Er=`react-scan-widget-settings-v2`,Dr=`react-scan-widget-collapsed-v1`,Or=`react-scan-widget-last-view-v1`;function kr(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kr(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Ar(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kr(e))&&(r&&(r+=` `),r+=t);return r}var jr=`-`,Mr=e=>{let t=Ir(e),{conflictingClassGroups:n,conflictingClassGroupModifiers:r}=e;return{getClassGroupId:e=>{let n=e.split(jr);return n[0]===``&&n.length!==1&&n.shift(),Nr(n,t)||Fr(e)},getConflictingClassGroupIds:(e,t)=>{let i=n[e]||[];return t&&r[e]?[...i,...r[e]]:i}}},Nr=(e,t)=>{if(e.length===0)return t.classGroupId;let n=e[0],r=t.nextPart.get(n),i=r?Nr(e.slice(1),r):void 0;if(i)return i;if(t.validators.length===0)return;let a=e.join(jr);return t.validators.find(({validator:e})=>e(a))?.classGroupId},Pr=/^\[(.+)\]$/,Fr=e=>{if(Pr.test(e)){let t=Pr.exec(e)[1],n=t?.substring(0,t.indexOf(`:`));if(n)return`arbitrary..`+n}},Ir=e=>{let{theme:t,prefix:n}=e,r={nextPart:new Map,validators:[]};return Br(Object.entries(e.classGroups),n).forEach(([e,n])=>{Lr(n,r,e,t)}),r},Lr=(e,t,n,r)=>{e.forEach(e=>{if(typeof e==`string`){let r=e===``?t:Rr(t,e);r.classGroupId=n;return}if(typeof e==`function`){if(zr(e)){Lr(e(r),t,n,r);return}t.validators.push({validator:e,classGroupId:n});return}Object.entries(e).forEach(([e,i])=>{Lr(i,Rr(t,e),n,r)})})},Rr=(e,t)=>{let n=e;return t.split(jr).forEach(e=>{n.nextPart.has(e)||n.nextPart.set(e,{nextPart:new Map,validators:[]}),n=n.nextPart.get(e)}),n},zr=e=>e.isThemeGetter,Br=(e,t)=>t?e.map(([e,n])=>[e,n.map(e=>typeof e==`string`?t+e:typeof e==`object`?Object.fromEntries(Object.entries(e).map(([e,n])=>[t+e,n])):e)]):e,Vr=e=>{if(e<1)return{get:()=>void 0,set:()=>{}};let t=0,n=new Map,r=new Map,i=(i,a)=>{n.set(i,a),t++,t>e&&(t=0,r=n,n=new Map)};return{get(e){let t=n.get(e);if(t!==void 0)return t;if((t=r.get(e))!==void 0)return i(e,t),t},set(e,t){n.has(e)?n.set(e,t):i(e,t)}}},Hr=`!`,Ur=e=>{let{separator:t,experimentalParseClassName:n}=e,r=t.length===1,i=t[0],a=t.length,o=e=>{let n=[],o=0,s=0,c;for(let l=0;l<e.length;l++){let u=e[l];if(o===0){if(u===i&&(r||e.slice(l,l+a)===t)){n.push(e.slice(s,l)),s=l+a;continue}if(u===`/`){c=l;continue}}u===`[`?o++:u===`]`&&o--}let l=n.length===0?e:e.substring(s),u=l.startsWith(Hr);return{modifiers:n,hasImportantModifier:u,baseClassName:u?l.substring(1):l,maybePostfixModifierPosition:c&&c>s?c-s:void 0}};return n?e=>n({className:e,parseClassName:o}):o},Wr=e=>{if(e.length<=1)return e;let t=[],n=[];return e.forEach(e=>{e[0]===`[`?(t.push(...n.sort(),e),n=[]):n.push(e)}),t.push(...n.sort()),t},Gr=e=>({cache:Vr(e.cacheSize),parseClassName:Ur(e),...Mr(e)}),Kr=/\s+/,qr=(e,t)=>{let{parseClassName:n,getClassGroupId:r,getConflictingClassGroupIds:i}=t,a=[],o=e.trim().split(Kr),s=``;for(let e=o.length-1;e>=0;--e){let t=o[e],{modifiers:c,hasImportantModifier:l,baseClassName:u,maybePostfixModifierPosition:d}=n(t),f=!!d,p=r(f?u.substring(0,d):u);if(!p){if(!f){s=t+(s.length>0?` `+s:s);continue}if(p=r(u),!p){s=t+(s.length>0?` `+s:s);continue}f=!1}let m=Wr(c).join(`:`),h=l?m+Hr:m,g=h+p;if(a.includes(g))continue;a.push(g);let _=i(p,f);for(let e=0;e<_.length;++e){let t=_[e];a.push(h+t)}s=t+(s.length>0?` `+s:s)}return s};function Jr(){let e=0,t,n,r=``;for(;e<arguments.length;)(t=arguments[e++])&&(n=Yr(t))&&(r&&(r+=` `),r+=n);return r}var Yr=e=>{if(typeof e==`string`)return e;let t,n=``;for(let r=0;r<e.length;r++)e[r]&&(t=Yr(e[r]))&&(n&&(n+=` `),n+=t);return n};function Xr(e,...t){let n,r,i,a=o;function o(o){return n=Gr(t.reduce((e,t)=>t(e),e())),r=n.cache.get,i=n.cache.set,a=s,s(o)}function s(e){let t=r(e);if(t)return t;let a=qr(e,n);return i(e,a),a}return function(){return a(Jr.apply(null,arguments))}}var Zr=e=>{let t=t=>t[e]||[];return t.isThemeGetter=!0,t},Qr=/^\[(?:([a-z-]+):)?(.+)\]$/i,$r=/^\d+\/\d+$/,ei=new Set([`px`,`full`,`screen`]),ti=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,ni=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,ri=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,ii=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,ai=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,oi=e=>ci(e)||ei.has(e)||$r.test(e),si=e=>bi(e,`length`,xi),ci=e=>!!e&&!Number.isNaN(Number(e)),li=e=>bi(e,`number`,ci),ui=e=>!!e&&Number.isInteger(Number(e)),di=e=>e.endsWith(`%`)&&ci(e.slice(0,-1)),R=e=>Qr.test(e),fi=e=>ti.test(e),pi=new Set([`length`,`size`,`percentage`]),mi=e=>bi(e,pi,Si),hi=e=>bi(e,`position`,Si),gi=new Set([`image`,`url`]),_i=e=>bi(e,gi,wi),vi=e=>bi(e,``,Ci),yi=()=>!0,bi=(e,t,n)=>{let r=Qr.exec(e);return r?r[1]?typeof t==`string`?r[1]===t:t.has(r[1]):n(r[2]):!1},xi=e=>ni.test(e)&&!ri.test(e),Si=()=>!1,Ci=e=>ii.test(e),wi=e=>ai.test(e),Ti=Xr(()=>{let e=Zr(`colors`),t=Zr(`spacing`),n=Zr(`blur`),r=Zr(`brightness`),i=Zr(`borderColor`),a=Zr(`borderRadius`),o=Zr(`borderSpacing`),s=Zr(`borderWidth`),c=Zr(`contrast`),l=Zr(`grayscale`),u=Zr(`hueRotate`),d=Zr(`invert`),f=Zr(`gap`),p=Zr(`gradientColorStops`),m=Zr(`gradientColorStopPositions`),h=Zr(`inset`),g=Zr(`margin`),_=Zr(`opacity`),v=Zr(`padding`),y=Zr(`saturate`),b=Zr(`scale`),x=Zr(`sepia`),S=Zr(`skew`),C=Zr(`space`),w=Zr(`translate`),T=()=>[`auto`,`contain`,`none`],ee=()=>[`auto`,`hidden`,`clip`,`visible`,`scroll`],te=()=>[`auto`,R,t],E=()=>[R,t],ne=()=>[``,oi,si],re=()=>[`auto`,ci,R],ie=()=>[`bottom`,`center`,`left`,`left-bottom`,`left-top`,`right`,`right-bottom`,`right-top`,`top`],ae=()=>[`solid`,`dashed`,`dotted`,`double`,`none`],oe=()=>[`normal`,`multiply`,`screen`,`overlay`,`darken`,`lighten`,`color-dodge`,`color-burn`,`hard-light`,`soft-light`,`difference`,`exclusion`,`hue`,`saturation`,`color`,`luminosity`],se=()=>[`start`,`end`,`center`,`between`,`around`,`evenly`,`stretch`],ce=()=>[``,`0`,R],D=()=>[`auto`,`avoid`,`all`,`avoid-page`,`page`,`left`,`right`,`column`],O=()=>[ci,R];return{cacheSize:500,separator:`:`,theme:{colors:[yi],spacing:[oi,si],blur:[`none`,``,fi,R],brightness:O(),borderColor:[e],borderRadius:[`none`,``,`full`,fi,R],borderSpacing:E(),borderWidth:ne(),contrast:O(),grayscale:ce(),hueRotate:O(),invert:ce(),gap:E(),gradientColorStops:[e],gradientColorStopPositions:[di,si],inset:te(),margin:te(),opacity:O(),padding:E(),saturate:O(),scale:O(),sepia:ce(),skew:O(),space:E(),translate:E()},classGroups:{aspect:[{aspect:[`auto`,`square`,`video`,R]}],container:[`container`],columns:[{columns:[fi]}],"break-after":[{"break-after":D()}],"break-before":[{"break-before":D()}],"break-inside":[{"break-inside":[`auto`,`avoid`,`avoid-page`,`avoid-column`]}],"box-decoration":[{"box-decoration":[`slice`,`clone`]}],box:[{box:[`border`,`content`]}],display:[`block`,`inline-block`,`inline`,`flex`,`inline-flex`,`table`,`inline-table`,`table-caption`,`table-cell`,`table-column`,`table-column-group`,`table-footer-group`,`table-header-group`,`table-row-group`,`table-row`,`flow-root`,`grid`,`inline-grid`,`contents`,`list-item`,`hidden`],float:[{float:[`right`,`left`,`none`,`start`,`end`]}],clear:[{clear:[`left`,`right`,`both`,`none`,`start`,`end`]}],isolation:[`isolate`,`isolation-auto`],"object-fit":[{object:[`contain`,`cover`,`fill`,`none`,`scale-down`]}],"object-position":[{object:[...ie(),R]}],overflow:[{overflow:ee()}],"overflow-x":[{"overflow-x":ee()}],"overflow-y":[{"overflow-y":ee()}],overscroll:[{overscroll:T()}],"overscroll-x":[{"overscroll-x":T()}],"overscroll-y":[{"overscroll-y":T()}],position:[`static`,`fixed`,`absolute`,`relative`,`sticky`],inset:[{inset:[h]}],"inset-x":[{"inset-x":[h]}],"inset-y":[{"inset-y":[h]}],start:[{start:[h]}],end:[{end:[h]}],top:[{top:[h]}],right:[{right:[h]}],bottom:[{bottom:[h]}],left:[{left:[h]}],visibility:[`visible`,`invisible`,`collapse`],z:[{z:[`auto`,ui,R]}],basis:[{basis:te()}],"flex-direction":[{flex:[`row`,`row-reverse`,`col`,`col-reverse`]}],"flex-wrap":[{flex:[`wrap`,`wrap-reverse`,`nowrap`]}],flex:[{flex:[`1`,`auto`,`initial`,`none`,R]}],grow:[{grow:ce()}],shrink:[{shrink:ce()}],order:[{order:[`first`,`last`,`none`,ui,R]}],"grid-cols":[{"grid-cols":[yi]}],"col-start-end":[{col:[`auto`,{span:[`full`,ui,R]},R]}],"col-start":[{"col-start":re()}],"col-end":[{"col-end":re()}],"grid-rows":[{"grid-rows":[yi]}],"row-start-end":[{row:[`auto`,{span:[ui,R]},R]}],"row-start":[{"row-start":re()}],"row-end":[{"row-end":re()}],"grid-flow":[{"grid-flow":[`row`,`col`,`dense`,`row-dense`,`col-dense`]}],"auto-cols":[{"auto-cols":[`auto`,`min`,`max`,`fr`,R]}],"auto-rows":[{"auto-rows":[`auto`,`min`,`max`,`fr`,R]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:[`normal`,...se()]}],"justify-items":[{"justify-items":[`start`,`end`,`center`,`stretch`]}],"justify-self":[{"justify-self":[`auto`,`start`,`end`,`center`,`stretch`]}],"align-content":[{content:[`normal`,...se(),`baseline`]}],"align-items":[{items:[`start`,`end`,`center`,`baseline`,`stretch`]}],"align-self":[{self:[`auto`,`start`,`end`,`center`,`stretch`,`baseline`]}],"place-content":[{"place-content":[...se(),`baseline`]}],"place-items":[{"place-items":[`start`,`end`,`center`,`baseline`,`stretch`]}],"place-self":[{"place-self":[`auto`,`start`,`end`,`center`,`stretch`]}],p:[{p:[v]}],px:[{px:[v]}],py:[{py:[v]}],ps:[{ps:[v]}],pe:[{pe:[v]}],pt:[{pt:[v]}],pr:[{pr:[v]}],pb:[{pb:[v]}],pl:[{pl:[v]}],m:[{m:[g]}],mx:[{mx:[g]}],my:[{my:[g]}],ms:[{ms:[g]}],me:[{me:[g]}],mt:[{mt:[g]}],mr:[{mr:[g]}],mb:[{mb:[g]}],ml:[{ml:[g]}],"space-x":[{"space-x":[C]}],"space-x-reverse":[`space-x-reverse`],"space-y":[{"space-y":[C]}],"space-y-reverse":[`space-y-reverse`],w:[{w:[`auto`,`min`,`max`,`fit`,`svw`,`lvw`,`dvw`,R,t]}],"min-w":[{"min-w":[R,t,`min`,`max`,`fit`]}],"max-w":[{"max-w":[R,t,`none`,`full`,`min`,`max`,`fit`,`prose`,{screen:[fi]},fi]}],h:[{h:[R,t,`auto`,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],"min-h":[{"min-h":[R,t,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],"max-h":[{"max-h":[R,t,`min`,`max`,`fit`,`svh`,`lvh`,`dvh`]}],size:[{size:[R,t,`auto`,`min`,`max`,`fit`]}],"font-size":[{text:[`base`,fi,si]}],"font-smoothing":[`antialiased`,`subpixel-antialiased`],"font-style":[`italic`,`not-italic`],"font-weight":[{font:[`thin`,`extralight`,`light`,`normal`,`medium`,`semibold`,`bold`,`extrabold`,`black`,li]}],"font-family":[{font:[yi]}],"fvn-normal":[`normal-nums`],"fvn-ordinal":[`ordinal`],"fvn-slashed-zero":[`slashed-zero`],"fvn-figure":[`lining-nums`,`oldstyle-nums`],"fvn-spacing":[`proportional-nums`,`tabular-nums`],"fvn-fraction":[`diagonal-fractions`,`stacked-fractions`],tracking:[{tracking:[`tighter`,`tight`,`normal`,`wide`,`wider`,`widest`,R]}],"line-clamp":[{"line-clamp":[`none`,ci,li]}],leading:[{leading:[`none`,`tight`,`snug`,`normal`,`relaxed`,`loose`,oi,R]}],"list-image":[{"list-image":[`none`,R]}],"list-style-type":[{list:[`none`,`disc`,`decimal`,R]}],"list-style-position":[{list:[`inside`,`outside`]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[_]}],"text-alignment":[{text:[`left`,`center`,`right`,`justify`,`start`,`end`]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[_]}],"text-decoration":[`underline`,`overline`,`line-through`,`no-underline`],"text-decoration-style":[{decoration:[...ae(),`wavy`]}],"text-decoration-thickness":[{decoration:[`auto`,`from-font`,oi,si]}],"underline-offset":[{"underline-offset":[`auto`,oi,R]}],"text-decoration-color":[{decoration:[e]}],"text-transform":[`uppercase`,`lowercase`,`capitalize`,`normal-case`],"text-overflow":[`truncate`,`text-ellipsis`,`text-clip`],"text-wrap":[{text:[`wrap`,`nowrap`,`balance`,`pretty`]}],indent:[{indent:E()}],"vertical-align":[{align:[`baseline`,`top`,`middle`,`bottom`,`text-top`,`text-bottom`,`sub`,`super`,R]}],whitespace:[{whitespace:[`normal`,`nowrap`,`pre`,`pre-line`,`pre-wrap`,`break-spaces`]}],break:[{break:[`normal`,`words`,`all`,`keep`]}],hyphens:[{hyphens:[`none`,`manual`,`auto`]}],content:[{content:[`none`,R]}],"bg-attachment":[{bg:[`fixed`,`local`,`scroll`]}],"bg-clip":[{"bg-clip":[`border`,`padding`,`content`,`text`]}],"bg-opacity":[{"bg-opacity":[_]}],"bg-origin":[{"bg-origin":[`border`,`padding`,`content`]}],"bg-position":[{bg:[...ie(),hi]}],"bg-repeat":[{bg:[`no-repeat`,{repeat:[``,`x`,`y`,`round`,`space`]}]}],"bg-size":[{bg:[`auto`,`cover`,`contain`,mi]}],"bg-image":[{bg:[`none`,{"gradient-to":[`t`,`tr`,`r`,`br`,`b`,`bl`,`l`,`tl`]},_i]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[m]}],"gradient-via-pos":[{via:[m]}],"gradient-to-pos":[{to:[m]}],"gradient-from":[{from:[p]}],"gradient-via":[{via:[p]}],"gradient-to":[{to:[p]}],rounded:[{rounded:[a]}],"rounded-s":[{"rounded-s":[a]}],"rounded-e":[{"rounded-e":[a]}],"rounded-t":[{"rounded-t":[a]}],"rounded-r":[{"rounded-r":[a]}],"rounded-b":[{"rounded-b":[a]}],"rounded-l":[{"rounded-l":[a]}],"rounded-ss":[{"rounded-ss":[a]}],"rounded-se":[{"rounded-se":[a]}],"rounded-ee":[{"rounded-ee":[a]}],"rounded-es":[{"rounded-es":[a]}],"rounded-tl":[{"rounded-tl":[a]}],"rounded-tr":[{"rounded-tr":[a]}],"rounded-br":[{"rounded-br":[a]}],"rounded-bl":[{"rounded-bl":[a]}],"border-w":[{border:[s]}],"border-w-x":[{"border-x":[s]}],"border-w-y":[{"border-y":[s]}],"border-w-s":[{"border-s":[s]}],"border-w-e":[{"border-e":[s]}],"border-w-t":[{"border-t":[s]}],"border-w-r":[{"border-r":[s]}],"border-w-b":[{"border-b":[s]}],"border-w-l":[{"border-l":[s]}],"border-opacity":[{"border-opacity":[_]}],"border-style":[{border:[...ae(),`hidden`]}],"divide-x":[{"divide-x":[s]}],"divide-x-reverse":[`divide-x-reverse`],"divide-y":[{"divide-y":[s]}],"divide-y-reverse":[`divide-y-reverse`],"divide-opacity":[{"divide-opacity":[_]}],"divide-style":[{divide:ae()}],"border-color":[{border:[i]}],"border-color-x":[{"border-x":[i]}],"border-color-y":[{"border-y":[i]}],"border-color-s":[{"border-s":[i]}],"border-color-e":[{"border-e":[i]}],"border-color-t":[{"border-t":[i]}],"border-color-r":[{"border-r":[i]}],"border-color-b":[{"border-b":[i]}],"border-color-l":[{"border-l":[i]}],"divide-color":[{divide:[i]}],"outline-style":[{outline:[``,...ae()]}],"outline-offset":[{"outline-offset":[oi,R]}],"outline-w":[{outline:[oi,si]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:ne()}],"ring-w-inset":[`ring-inset`],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[_]}],"ring-offset-w":[{"ring-offset":[oi,si]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:[``,`inner`,`none`,fi,vi]}],"shadow-color":[{shadow:[yi]}],opacity:[{opacity:[_]}],"mix-blend":[{"mix-blend":[...oe(),`plus-lighter`,`plus-darker`]}],"bg-blend":[{"bg-blend":oe()}],filter:[{filter:[``,`none`]}],blur:[{blur:[n]}],brightness:[{brightness:[r]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":[``,`none`,fi,R]}],grayscale:[{grayscale:[l]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[d]}],saturate:[{saturate:[y]}],sepia:[{sepia:[x]}],"backdrop-filter":[{"backdrop-filter":[``,`none`]}],"backdrop-blur":[{"backdrop-blur":[n]}],"backdrop-brightness":[{"backdrop-brightness":[r]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[l]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[d]}],"backdrop-opacity":[{"backdrop-opacity":[_]}],"backdrop-saturate":[{"backdrop-saturate":[y]}],"backdrop-sepia":[{"backdrop-sepia":[x]}],"border-collapse":[{border:[`collapse`,`separate`]}],"border-spacing":[{"border-spacing":[o]}],"border-spacing-x":[{"border-spacing-x":[o]}],"border-spacing-y":[{"border-spacing-y":[o]}],"table-layout":[{table:[`auto`,`fixed`]}],caption:[{caption:[`top`,`bottom`]}],transition:[{transition:[`none`,`all`,``,`colors`,`opacity`,`shadow`,`transform`,R]}],duration:[{duration:O()}],ease:[{ease:[`linear`,`in`,`out`,`in-out`,R]}],delay:[{delay:O()}],animate:[{animate:[`none`,`spin`,`ping`,`pulse`,`bounce`,R]}],transform:[{transform:[``,`gpu`,`none`]}],scale:[{scale:[b]}],"scale-x":[{"scale-x":[b]}],"scale-y":[{"scale-y":[b]}],rotate:[{rotate:[ui,R]}],"translate-x":[{"translate-x":[w]}],"translate-y":[{"translate-y":[w]}],"skew-x":[{"skew-x":[S]}],"skew-y":[{"skew-y":[S]}],"transform-origin":[{origin:[`center`,`top`,`top-right`,`right`,`bottom-right`,`bottom`,`bottom-left`,`left`,`top-left`,R]}],accent:[{accent:[`auto`,e]}],appearance:[{appearance:[`none`,`auto`]}],cursor:[{cursor:[`auto`,`default`,`pointer`,`wait`,`text`,`move`,`help`,`not-allowed`,`none`,`context-menu`,`progress`,`cell`,`crosshair`,`vertical-text`,`alias`,`copy`,`no-drop`,`grab`,`grabbing`,`all-scroll`,`col-resize`,`row-resize`,`n-resize`,`e-resize`,`s-resize`,`w-resize`,`ne-resize`,`nw-resize`,`se-resize`,`sw-resize`,`ew-resize`,`ns-resize`,`nesw-resize`,`nwse-resize`,`zoom-in`,`zoom-out`,R]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":[`none`,`auto`]}],resize:[{resize:[`none`,`y`,`x`,``]}],"scroll-behavior":[{scroll:[`auto`,`smooth`]}],"scroll-m":[{"scroll-m":E()}],"scroll-mx":[{"scroll-mx":E()}],"scroll-my":[{"scroll-my":E()}],"scroll-ms":[{"scroll-ms":E()}],"scroll-me":[{"scroll-me":E()}],"scroll-mt":[{"scroll-mt":E()}],"scroll-mr":[{"scroll-mr":E()}],"scroll-mb":[{"scroll-mb":E()}],"scroll-ml":[{"scroll-ml":E()}],"scroll-p":[{"scroll-p":E()}],"scroll-px":[{"scroll-px":E()}],"scroll-py":[{"scroll-py":E()}],"scroll-ps":[{"scroll-ps":E()}],"scroll-pe":[{"scroll-pe":E()}],"scroll-pt":[{"scroll-pt":E()}],"scroll-pr":[{"scroll-pr":E()}],"scroll-pb":[{"scroll-pb":E()}],"scroll-pl":[{"scroll-pl":E()}],"snap-align":[{snap:[`start`,`end`,`center`,`align-none`]}],"snap-stop":[{snap:[`normal`,`always`]}],"snap-type":[{snap:[`none`,`x`,`y`,`both`]}],"snap-strictness":[{snap:[`mandatory`,`proximity`]}],touch:[{touch:[`auto`,`none`,`manipulation`]}],"touch-x":[{"touch-pan":[`x`,`left`,`right`]}],"touch-y":[{"touch-pan":[`y`,`up`,`down`]}],"touch-pz":[`touch-pinch-zoom`],select:[{select:[`none`,`text`,`all`,`auto`]}],"will-change":[{"will-change":[`auto`,`scroll`,`contents`,`transform`,R]}],fill:[{fill:[e,`none`]}],"stroke-w":[{stroke:[oi,si,li]}],stroke:[{stroke:[e,`none`]}],sr:[`sr-only`,`not-sr-only`],"forced-color-adjust":[{"forced-color-adjust":[`auto`,`none`]}]},conflictingClassGroups:{overflow:[`overflow-x`,`overflow-y`],overscroll:[`overscroll-x`,`overscroll-y`],inset:[`inset-x`,`inset-y`,`start`,`end`,`top`,`right`,`bottom`,`left`],"inset-x":[`right`,`left`],"inset-y":[`top`,`bottom`],flex:[`basis`,`grow`,`shrink`],gap:[`gap-x`,`gap-y`],p:[`px`,`py`,`ps`,`pe`,`pt`,`pr`,`pb`,`pl`],px:[`pr`,`pl`],py:[`pt`,`pb`],m:[`mx`,`my`,`ms`,`me`,`mt`,`mr`,`mb`,`ml`],mx:[`mr`,`ml`],my:[`mt`,`mb`],size:[`w`,`h`],"font-size":[`leading`],"fvn-normal":[`fvn-ordinal`,`fvn-slashed-zero`,`fvn-figure`,`fvn-spacing`,`fvn-fraction`],"fvn-ordinal":[`fvn-normal`],"fvn-slashed-zero":[`fvn-normal`],"fvn-figure":[`fvn-normal`],"fvn-spacing":[`fvn-normal`],"fvn-fraction":[`fvn-normal`],"line-clamp":[`display`,`overflow`],rounded:[`rounded-s`,`rounded-e`,`rounded-t`,`rounded-r`,`rounded-b`,`rounded-l`,`rounded-ss`,`rounded-se`,`rounded-ee`,`rounded-es`,`rounded-tl`,`rounded-tr`,`rounded-br`,`rounded-bl`],"rounded-s":[`rounded-ss`,`rounded-es`],"rounded-e":[`rounded-se`,`rounded-ee`],"rounded-t":[`rounded-tl`,`rounded-tr`],"rounded-r":[`rounded-tr`,`rounded-br`],"rounded-b":[`rounded-br`,`rounded-bl`],"rounded-l":[`rounded-tl`,`rounded-bl`],"border-spacing":[`border-spacing-x`,`border-spacing-y`],"border-w":[`border-w-s`,`border-w-e`,`border-w-t`,`border-w-r`,`border-w-b`,`border-w-l`],"border-w-x":[`border-w-r`,`border-w-l`],"border-w-y":[`border-w-t`,`border-w-b`],"border-color":[`border-color-s`,`border-color-e`,`border-color-t`,`border-color-r`,`border-color-b`,`border-color-l`],"border-color-x":[`border-color-r`,`border-color-l`],"border-color-y":[`border-color-t`,`border-color-b`],"scroll-m":[`scroll-mx`,`scroll-my`,`scroll-ms`,`scroll-me`,`scroll-mt`,`scroll-mr`,`scroll-mb`,`scroll-ml`],"scroll-mx":[`scroll-mr`,`scroll-ml`],"scroll-my":[`scroll-mt`,`scroll-mb`],"scroll-p":[`scroll-px`,`scroll-py`,`scroll-ps`,`scroll-pe`,`scroll-pt`,`scroll-pr`,`scroll-pb`,`scroll-pl`],"scroll-px":[`scroll-pr`,`scroll-pl`],"scroll-py":[`scroll-pt`,`scroll-pb`],touch:[`touch-x`,`touch-y`,`touch-pz`],"touch-x":[`touch`],"touch-y":[`touch`],"touch-pz":[`touch`]},conflictingClassGroupModifiers:{"font-size":[`leading`]}}}),z=(...e)=>Ti(Ar(e));typeof navigator<`u`&&navigator.userAgent.includes(`Firefox`);var Ei=(e,t)=>{let n=0;return r=>{let i=Date.now();if(i-n>=t)return n=i,e(r)}},Di=e=>{if(!mr)return null;try{let t=localStorage.getItem(e);return t?JSON.parse(t):null}catch{return null}},Oi=(e,t)=>{if(mr)try{window.localStorage.setItem(e,JSON.stringify(t))}catch{}},ki=e=>{if(mr)try{window.localStorage.removeItem(e)}catch{}},Ai=24,ji=12,Mi=e=>{if(!e)return{name:`Unknown`,wrappers:[],wrapperTypes:[]};let{tag:t,type:n,elementType:r}=e,i=Ce(n),a=[],o=[];if(xe(e)||t===15||t===14||n?.$$typeof===Symbol.for(`react.memo`)||r?.$$typeof===Symbol.for(`react.memo`)){let t=xe(e);o.push({type:`memo`,title:t?`This component has been auto-memoized by the React Compiler.`:`Memoized component that skips re-renders if props are the same`,compiler:t})}if(t===Ai&&o.push({type:`lazy`,title:`Lazily loaded component that supports code splitting`}),t===13&&o.push({type:`suspense`,title:`Component that can suspend while content is loading`}),t===ji&&o.push({type:`profiler`,title:`Component that measures rendering performance`}),typeof i==`string`){let e=/^(\w+)\((.*)\)$/,t=i;for(;e.test(t);){let n=t.match(e);if(n?.[1]&&n?.[2])a.unshift(n[1]),t=n[2];else break}i=t}return{name:i||`Unknown`,wrappers:a,wrapperTypes:o}},Ni=hn(!1),B=hn(null),Pi={corner:`bottom-right`,dimensions:{isFullWidth:!1,isFullHeight:!1,width:wr.width,height:wr.height,position:{x:L,y:L}},lastDimensions:{isFullWidth:!1,isFullHeight:!1,width:wr.width,height:wr.height,position:{x:L,y:L}},componentsTree:{width:Tr}},V=hn((()=>{let e=Di(Er);return e?{corner:e.corner??Pi.corner,dimensions:e.dimensions??Pi.dimensions,lastDimensions:e.lastDimensions??e.dimensions??Pi.lastDimensions,componentsTree:e.componentsTree??Pi.componentsTree}:(Oi(Er,{corner:Pi.corner,dimensions:Pi.dimensions,lastDimensions:Pi.lastDimensions,componentsTree:Pi.componentsTree}),Pi)})()),Fi=()=>{if(!mr)return;let{dimensions:e}=V.value,{width:t,height:n,position:r}=e;V.value={...V.value,dimensions:{isFullWidth:t>=window.innerWidth-L*2,isFullHeight:n>=window.innerHeight-L*2,width:t,height:n,position:r}}},H=hn({view:`none`}),Ii=hn(Di(Dr)??null);function Li(){return!1}function Ri(e){function t(t){return this.shouldComponentUpdate=Li,it(e,t)}return t.displayName=`Memo(${e.displayName||e.name})`,t.prototype.isReactComponent=!0,t._forwarded=!0,t}var zi=e=>{let{count:t,getScrollElement:n,estimateSize:r,overscan:i=5}=e,[a,o]=M(0),[s,c]=M(0),l=P(),u=P(null),d=P(null),f=r(),p=qt(e=>{u.current&&c(e?.[0]?.contentRect.height??u.current.getBoundingClientRect().height)},[]),m=qt(()=>{d.current!==null&&cancelAnimationFrame(d.current),d.current=requestAnimationFrame(()=>{p(),d.current=null})},[p]);N(()=>{let e=n();if(!e)return;u.current=e;let t=()=>{u.current&&o(u.current.scrollTop)};p(),l.current||=new ResizeObserver(()=>{m()}),l.current.observe(e),e.addEventListener(`scroll`,t,{passive:!0});let r=new MutationObserver(m);return r.observe(e,{attributes:!0,childList:!0,subtree:!0}),()=>{e.removeEventListener(`scroll`,t),l.current&&l.current.disconnect(),r.disconnect(),d.current!==null&&cancelAnimationFrame(d.current)}},[n,p,m]);let h=Kt(()=>{let e=Math.floor(a/f),n=Math.ceil(s/f);return{start:Math.max(0,e-i),end:Math.min(t,e+n+i)}},[a,f,s,t,i]);return{virtualItems:Kt(()=>{let e=[];for(let t=h.start;t<h.end;t++)e.push({key:t,index:t,start:t*f});return e},[h,f]),totalSize:t*f,scrollTop:a,containerHeight:s}},Bi=e=>{let t=[],n=e;for(;n;){let e=n.elementType,r=typeof e==`function`?e.displayName||e.name:typeof e==`string`?e:`Unknown`,i=n.index===void 0?``:`[${n.index}]`;t.unshift(`${r}${i}`),n=n.return??null}return t.join(`::`)},Vi=new WeakMap,Hi=(e,t)=>{let n=t.bind(null,e);return document.addEventListener(`scroll`,n,{passive:!0,capture:!0}),()=>{document.removeEventListener(`scroll`,n,{capture:!0})}},Ui={activeFlashes:new Map,create(e){let t=e.querySelector(`.react-scan-flash-overlay`),n=t instanceof HTMLElement?t:(()=>{let t=document.createElement(`div`);t.className=`react-scan-flash-overlay`,e.appendChild(t);let n=Hi(e,()=>{e.querySelector(`.react-scan-flash-overlay`)&&this.create(e)});return this.activeFlashes.set(e,{element:e,overlay:t,scrollCleanup:n}),t})(),r=Vi.get(n);r&&(clearTimeout(r),Vi.delete(n)),requestAnimationFrame(()=>{n.style.transition=`none`,n.style.opacity=`0.9`;let t=setTimeout(()=>{n.style.transition=`opacity 150ms ease-out`,n.style.opacity=`0`;let t=setTimeout(()=>{n.parentNode&&n.parentNode.removeChild(n);let t=this.activeFlashes.get(e);t?.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e),Vi.delete(n)},150);Vi.set(n,t)},300);Vi.set(n,t)})},cleanup(e){let t=this.activeFlashes.get(e);if(t){let n=Vi.get(t.overlay);n&&(clearTimeout(n),Vi.delete(t.overlay)),t.overlay.parentNode&&t.overlay.parentNode.removeChild(t.overlay),t.scrollCleanup&&t.scrollCleanup(),this.activeFlashes.delete(e)}},cleanupAll(){for(let[,e]of this.activeFlashes)this.cleanup(e.element)}},Wi=1e3,Gi={updates:[],currentFiber:null,totalUpdates:0,windowOffset:0,currentIndex:0,isViewingHistory:!1,latestFiber:null,isVisible:!1,playbackSpeed:1},Ki=hn(Gi),qi=hn(0),Ji=[],Yi=null,Xi=()=>{if(Ji.length===0)return;let e=[...Ji],{updates:t,totalUpdates:n,currentIndex:r,isViewingHistory:i}=Ki.value,a=[...t],o=n;for(let{update:t}of e)a.length>=Wi&&a.shift(),a.push(t),o++;let s=Math.max(0,o-Wi),c;c=i?r===n-1?a.length-1:r===0?0:s===0?r:r-1:a.length-1;let l=e[e.length-1];Ki.value={...Ki.value,latestFiber:l.fiber,updates:a,totalUpdates:o,windowOffset:s,currentIndex:c,isViewingHistory:i},Ji=Ji.slice(e.length)},Zi={showTimeline:()=>{Ki.value={...Ki.value,isVisible:!0}},hideTimeline:()=>{Ki.value={...Ki.value,isVisible:!1,currentIndex:Ki.value.updates.length-1}},updateFrame:(e,t)=>{Ki.value={...Ki.value,currentIndex:e,isViewingHistory:t}},updatePlaybackSpeed:e=>{Ki.value={...Ki.value,playbackSpeed:e}},addUpdate:(e,t)=>{if(Ji.push({update:e,fiber:t}),!Yi){let e=()=>{Xi(),Yi=null,Ji.length>0&&(Yi=setTimeout(e,96))};Yi=setTimeout(e,96)}},reset:()=>{Yi&&=(clearTimeout(Yi),null),Ji=[],Ki.value=Gi}},U=hn({query:``,matches:[],currentMatchIndex:-1}),Qi=hn(!1),$i=(e,t=0,n=null)=>e.reduce((e,r,i)=>{let a=r.element?Bi(r.fiber):`${n}-${i}`,o=r.fiber?.type?Yo(r.fiber):void 0,s={...r,depth:t,nodeId:a,parentId:n,fiber:r.fiber,renderData:o};return e.push(s),r.children?.length&&e.push(...$i(r.children,t+1,a)),e},[]),ea=e=>e.reduce((e,t)=>Math.max(e,t.depth),0),ta=(e,t)=>{if(t<=0)return 24;let n=Math.max(0,e-Tr);if(n<24)return 0;let r=Math.min(n*.3,t*24)/t;return Math.max(0,Math.min(24,r))},na=[`memo`,`forwardRef`,`lazy`,`suspense`],ra=e=>{let t=e.match(/\[(.*?)\]/);if(!t)return null;let n=[],r=t[1].split(`,`);for(let e of r){let t=e.trim().toLowerCase();t&&n.push(t)}return n},ia=e=>{if(e.length===0)return!1;for(let t of e){let e=!1;for(let n of na)if(n.toLowerCase().includes(t)){e=!0;break}if(!e)return!1}return!0},aa=(e,t)=>{if(e.length===0)return!0;if(!t.length)return!1;for(let n of e){let e=!1;for(let r of t)if(r.type.toLowerCase().includes(n)){e=!0;break}if(!e)return!1}return!0},oa=(e,t)=>Kt(()=>{let{query:n,matches:r}=t,i=r.some(t=>t.nodeId===e.nodeId),a=ra(n)||[],o=n?n.replace(/\[.*?\]/,``).trim():``;if(!n||!i)return{highlightedText:I(`span`,{className:`truncate`,children:e.label}),typeHighlight:!1};let s=!0;if(a.length>0)if(!e.fiber)s=!1;else{let{wrapperTypes:t}=Mi(e.fiber);s=aa(a,t)}let c=I(`span`,{className:`truncate`,children:e.label});if(o)try{if(o.startsWith(`/`)&&o.endsWith(`/`)){let t=o.slice(1,-1),n=RegExp(`(${t})`,`i`),r=e.label.split(n);c=I(`span`,{className:`tree-node-search-highlight`,children:r.map((t,i)=>n.test(t)?I(`span`,{className:z(`regex`,{start:n.test(t)&&i===0,middle:n.test(t)&&i%2==1,end:n.test(t)&&i===r.length-1,"!ml-0":i===1}),children:t},`${e.nodeId}-${t}`):t)})}else{let t=e.label.toLowerCase(),n=o.toLowerCase(),r=t.indexOf(n);r>=0&&(c=I(`span`,{className:`tree-node-search-highlight`,children:[e.label.slice(0,r),I(`span`,{className:`single`,children:e.label.slice(r,r+o.length)}),e.label.slice(r+o.length)]}))}}catch{}return{highlightedText:c,typeHighlight:s&&a.length>0}},[e.label,e.nodeId,e.fiber,t]),sa=e=>e>0?e<.1-2**-52?`< 0.1`:e<1e3?Number(e.toFixed(1)).toString():`${(e/1e3).toFixed(1)}k`:`0`,ca=({node:e,nodeIndex:t,hasChildren:n,isCollapsed:r,handleTreeNodeClick:i,handleTreeNodeToggle:a,searchValue:o})=>{let s=P(null),c=P(e.renderData?.renderCount??0),{highlightedText:l,typeHighlight:u}=oa(e,o);N(()=>{let t=e.renderData?.renderCount,n=s.current;!n||!c.current||!t||c.current===t||(n.classList.remove(`count-flash`),n.offsetWidth,n.classList.add(`count-flash`),c.current=t)},[e.renderData?.renderCount]);let d=Kt(()=>{if(!e.renderData)return null;let{selfTime:t,totalTime:n,renderCount:r}=e.renderData;return r?I(`span`,{className:z(`flex items-center gap-x-0.5 ml-1.5`,`text-[10px] text-neutral-400`),children:I(`span`,{ref:s,title:`Self time: ${sa(t)}ms
Total time: ${sa(n)}ms`,className:`count-badge`,children:[`×`,r]})}):null},[e.renderData]),f=Kt(()=>{if(!e.fiber)return null;let{wrapperTypes:t}=Mi(e.fiber),n=t[0];return I(`span`,{className:z(`flex items-center gap-x-1`,`text-[10px] text-neutral-400 tracking-wide`,`overflow-hidden`),children:[n&&I(j,{children:[I(`span`,{title:n?.title,className:z(`rounded py-[1px] px-1`,`bg-neutral-700 text-neutral-300`,`truncate`,n.type===`memo`&&`bg-[#8e61e3] text-white`,u&&`bg-yellow-300 text-black`),children:n.type},n.type),n.compiler&&I(`span`,{className:`text-yellow-300 ml-1`,children:`✨`})]}),t.length>1&&`\xD7${t.length}`,d]})},[e.fiber,u,d]);return I(`button`,{type:`button`,title:e.title,"data-index":t,className:z(`flex items-center gap-x-1`,`pl-1 pr-2`,`w-full h-7`,`text-left`,`rounded`,`cursor-pointer select-none`),onClick:i,children:[I(`button`,{type:`button`,"data-index":t,onClick:a,className:z(`w-6 h-6 flex items-center justify-center`,`text-left`),children:n&&I(Cr,{name:`icon-chevron-right`,size:12,className:z(`transition-transform`,!r&&`rotate-90`)})}),l,f]})},la=()=>{let e=P(null),t=P(null),n=P(null),r=P(null),i=P(null),a=P(0),o=P(!1),s=P(!1),c=P(null),[l,u]=M([]),[d,f]=M(new Set),[p,m]=M(void 0),[h,g]=M(U.value),_=Kt(()=>{let e=[],t=l,n=new Map(t.map(e=>[e.nodeId,e]));for(let r of t){let t=!0,i=r;for(;i.parentId;){let e=n.get(i.parentId);if(!e)break;if(d.has(e.nodeId)){t=!1;break}i=e}t&&e.push(r)}return e},[d,l]),{virtualItems:v,totalSize:y}=zi({count:_.length,getScrollElement:()=>e.current,estimateSize:()=>28,overscan:5}),b=qt(t=>{o.current=!0,r.current?.blur(),Qi.value=!0;let{parentCompositeFiber:n}=Wa(t);if(!n)return;Y.inspectState.value={kind:`focused`,focusedDomElement:t,fiber:n};let i=_.findIndex(e=>e.element===t);if(i!==-1){m(i);let t=i*28,n=e.current;if(n){let e=n.clientHeight,r=n.scrollTop;(t<r||t+28>r+e)&&n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),x=qt(e=>{let t=e.currentTarget,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].element;r&&b(r)},[_,b]),S=qt(e=>{f(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},[]),C=qt(e=>{e.stopPropagation();let t=e.target,n=Number(t.dataset.index);if(Number.isNaN(n))return;let r=_[n].nodeId;S(r)},[_,S]),w=qt(t=>{n.current?.classList.remove(`!border-red-500`);let r=[];if(!t){U.value={query:t,matches:r,currentMatchIndex:-1};return}if(t.includes(`[`)&&!t.includes(`]`)&&t.length>t.indexOf(`[`)+1){n.current?.classList.add(`!border-red-500`);return}let i=ra(t)||[];if(t.includes(`[`)&&!ia(i)){n.current?.classList.add(`!border-red-500`);return}let a=t.replace(/\[.*?\]/,``).trim(),o=/^\/.*\/$/.test(a),s=e=>!1;if(a.startsWith(`/`)&&!o&&a.length>1){n.current?.classList.add(`!border-red-500`);return}if(o)try{let e=a.slice(1,-1),t=new RegExp(e,`i`);s=e=>t.test(e)}catch{n.current?.classList.add(`!border-red-500`);return}else if(a){let e=a.toLowerCase();s=t=>t.toLowerCase().includes(e)}for(let e of l){let t=!0;if(a&&(t=s(e.label)),t&&i.length>0)if(!e.fiber)t=!1;else{let{wrapperTypes:n}=Mi(e.fiber);t=aa(i,n)}t&&r.push(e)}if(U.value={query:t,matches:r,currentMatchIndex:r.length>0?0:-1},r.length>0){let t=r[0],n=_.findIndex(e=>e.nodeId===t.nodeId);if(n!==-1){let t=n*28,r=e.current;if(r){let e=r.clientHeight;r.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}}},[l,_]),T=qt(e=>{let t=e.currentTarget;t&&w(t.value)},[w]),ee=qt(t=>{let{matches:n,currentMatchIndex:r}=U.value;if(n.length===0)return;let i=t===`next`?(r+1)%n.length:(r-1+n.length)%n.length;U.value={...U.value,currentMatchIndex:i};let a=n[i],o=_.findIndex(e=>e.nodeId===a.nodeId);if(o!==-1){m(o);let t=o*28,n=e.current;if(n){let e=n.clientHeight;n.scrollTo({top:Math.max(0,t-e/2),behavior:`instant`})}}},[_]),te=qt(n=>{if(t.current&&(t.current.style.width=`${n}px`),e.current){e.current.style.width=`${n}px`;let t=ta(n,a.current);e.current.style.setProperty(`--indentation-size`,`${t}px`)}},[]),E=qt(e=>{if(!c.current)return;let t=V.value.dimensions.width,n=Math.floor(t-Tr/2);c.current.classList.remove(`cursor-ew-resize`,`cursor-w-resize`,`cursor-e-resize`),e<=Tr?c.current.classList.add(`cursor-w-resize`):e>=n?c.current.classList.add(`cursor-e-resize`):c.current.classList.add(`cursor-ew-resize`)},[]),ne=qt(t=>{if(t.preventDefault(),t.stopPropagation(),!e.current)return;e.current.style.setProperty(`pointer-events`,`none`),s.current=!0;let n=t.clientX,r=e.current.offsetWidth,i=V.value.dimensions.width,a=Math.floor(i-Tr/2);E(r);let o=e=>{let t=r+(n-e.clientX);E(t),te(Math.min(a,Math.max(Tr,t)))},c=()=>{e.current&&(e.current.style.removeProperty(`pointer-events`),document.removeEventListener(`pointermove`,o),document.removeEventListener(`pointerup`,c),V.value={...V.value,componentsTree:{...V.value.componentsTree,width:e.current.offsetWidth}},Oi(Er,V.value),s.current=!1)};document.addEventListener(`pointermove`,o),document.addEventListener(`pointerup`,c)},[te,E]);N(()=>{if(!e.current)return;let t=e.current.offsetWidth;return E(t),V.subscribe(()=>{e.current&&E(e.current.offsetWidth)})},[E]);let re=qt(()=>{o.current=!1},[]);return N(()=>{let t=!0,n=e=>{let t=new Map,n=[];for(let{element:n,name:r,fiber:i}of e){if(!n)continue;let e=r,{name:a,wrappers:o}=Mi(i);a&&(e=o.length>0?`${o.join(`(`)}(${a})${`)`.repeat(o.length)}`:a),t.set(n,{label:a||r,title:e,children:[],element:n,fiber:i})}for(let{element:r,depth:i}of e){if(!r)continue;let e=t.get(r);if(e)if(i===0)n.push(e);else{let n=r.parentElement;for(;n;){let r=t.get(n);if(r){r.children=r.children||[],r.children.push(e);break}n=n.parentElement}}}return n},r=()=>{let r=i.current;if(!r)return;let o=n(Ya());if(o.length>0){let n=$i(o);if(a.current=ea(n),te(V.value.componentsTree.width),u(n),t){t=!1;let i=n.findIndex(e=>e.element===r);if(i!==-1){let t=i*28,n=e.current;n&&setTimeout(()=>{n.scrollTo({top:t,behavior:`instant`})},96)}}}},o=Y.inspectState.subscribe(e=>{if(e.kind===`focused`){if(Qi.value)return;w(``),i.current=e.focusedDomElement,r()}}),c=0,l=qi.subscribe(()=>{if(Y.inspectState.value.kind===`focused`){if(cancelAnimationFrame(c),s.current)return;c=requestAnimationFrame(()=>{Qi.value=!1,r()})}});return()=>{o(),l(),U.value={query:``,matches:[],currentMatchIndex:-1}}},[]),N(()=>{let e=e=>{if(o.current&&p)switch(e.key){case`ArrowUp`:if(e.preventDefault(),e.stopPropagation(),p>0){let e=_[p-1];e?.element&&b(e.element)}return;case`ArrowDown`:if(e.preventDefault(),e.stopPropagation(),p<_.length-1){let e=_[p+1];e?.element&&b(e.element)}return;case`ArrowLeft`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}case`ArrowRight`:{e.preventDefault(),e.stopPropagation();let t=_[p];t?.nodeId&&S(t.nodeId);return}}};return document.addEventListener(`keydown`,e),()=>{document.removeEventListener(`keydown`,e)}},[p,_,b,S]),N(()=>U.subscribe(g),[]),N(()=>V.subscribe(e=>{t.current?.style.setProperty(`transition`,`width 0.1s`),te(e.componentsTree.width),setTimeout(()=>{t.current?.style.removeProperty(`transition`)},500)}),[]),I(`div`,{className:`react-scan-components-tree flex`,children:[I(`div`,{ref:c,onPointerDown:ne,className:`relative resize-v-line`,children:I(`span`,{children:I(Cr,{name:`icon-ellipsis`,size:18})})}),I(`div`,{ref:t,className:`flex flex-col h-full`,children:[I(`div`,{className:`p-2 border-b border-[#1e1e1e]`,children:I(`div`,{ref:n,title:`Search components by:

• Name (e.g., "Button") — Case insensitive, matches any part

• Regular Expression (e.g., "/^Button/") — Use forward slashes

• Wrapper Type (e.g., "[memo,forwardRef]"):
   - Available types: memo, forwardRef, lazy, suspense
   - Matches any part of type name (e.g., "mo" matches "memo")
   - Use commas for multiple types

• Combined Search:
   - Mix name/regex with type: "button [for]"
   - Will match components satisfying both conditions

• Navigation:
   - Enter → Next match
   - Shift + Enter → Previous match
   - Cmd/Ctrl + Enter → Select and focus match
`,className:z(`relative`,`flex items-center gap-x-1 px-2`,`rounded`,`border border-transparent`,`focus-within:border-[#454545]`,`bg-[#1e1e1e] text-neutral-300`,`transition-colors`,`whitespace-nowrap`,`overflow-hidden`),children:[I(Cr,{name:`icon-search`,size:12,className:` text-neutral-500`}),I(`div`,{className:`relative flex-1 h-7 overflow-hidden`,children:I(`input`,{ref:r,type:`text`,value:U.value.query,onClick:e=>{e.stopPropagation(),e.currentTarget.focus()},onPointerDown:e=>{e.stopPropagation()},onKeyDown:e=>{e.key===`Escape`&&e.currentTarget.blur(),U.value.matches.length&&(e.key===`Enter`&&e.shiftKey?ee(`prev`):e.key===`Enter`&&(e.metaKey||e.ctrlKey?(e.preventDefault(),e.stopPropagation(),b(U.value.matches[U.value.currentMatchIndex].element),e.currentTarget.focus()):ee(`next`)))},onChange:T,className:`absolute inset-y-0 inset-x-1`,placeholder:`Component name, /regex/, or [type]`})}),U.value.query?I(j,{children:[I(`span`,{className:`flex items-center gap-x-0.5 text-xs text-neutral-500`,children:[U.value.currentMatchIndex+1,`|`,U.value.matches.length]}),!!U.value.matches.length&&I(j,{children:[I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),ee(`prev`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(Cr,{name:`icon-chevron-right`,className:`-rotate-90`,size:12})}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),ee(`next`)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(Cr,{name:`icon-chevron-right`,className:`rotate-90`,size:12})})]}),I(`button`,{type:`button`,onClick:e=>{e.stopPropagation(),w(``)},className:`button rounded w-4 h-4 flex items-center justify-center text-neutral-400 hover:text-neutral-300`,children:I(Cr,{name:`icon-close`,size:12})})]}):!!l.length&&I(`span`,{className:`text-xs text-neutral-500`,children:l.length})]})}),I(`div`,{className:`flex-1 overflow-hidden`,children:I(`div`,{ref:e,onPointerLeave:re,className:`tree h-full overflow-auto will-change-transform`,children:I(`div`,{className:`relative w-full`,style:{height:y},children:v.map(e=>{let t=_[e.index];if(!t)return null;let n=Y.inspectState.value.kind===`focused`&&t.element===Y.inspectState.value.focusedDomElement,r=e.index===p;return I(`div`,{className:z(`absolute left-0 w-full overflow-hidden`,`text-neutral-400 hover:text-neutral-300`,`bg-transparent hover:bg-[#5f3f9a]/20`,(n||r)&&`text-neutral-300 bg-[#5f3f9a]/40 hover:bg-[#5f3f9a]/40`),style:{top:e.start,height:28},children:I(`div`,{className:`w-full h-full`,style:{paddingLeft:`calc(${t.depth} * var(--indentation-size))`},children:I(ca,{node:t,nodeIndex:e.index,hasChildren:!!t.children?.length,isCollapsed:d.has(t.nodeId),handleTreeNodeClick:x,handleTreeNodeToggle:C,searchValue:h})})},t.nodeId)})})})})]})]})},ua=Rn(({text:e,children:t,onCopy:n,className:r,iconSize:i=14})=>{let[a,o]=M(!1);N(()=>{if(a){let e=setTimeout(()=>o(!1),600);return()=>{clearTimeout(e)}}},[a]);let s=qt(t=>{t.preventDefault(),t.stopPropagation(),navigator.clipboard.writeText(e).then(()=>{o(!0),n?.(!0,e)},()=>{n?.(!1,e)})},[e,n]),c=I(`button`,{onClick:s,type:`button`,className:z(`z-10`,`flex items-center justify-center`,`hover:text-dev-pink-400`,`transition-colors duration-200 ease-in-out`,`cursor-pointer`,`size-[${i}px]`,r),children:I(Cr,{name:`icon-${a?`check`:`copy`}`,size:[i],className:z(a&&`text-green-500`)})});return t?t({ClipboardIcon:c,onClick:s}):c}),da=({length:e,expanded:t,onToggle:n,isNegative:r})=>I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:n,className:`flex items-center p-0 opacity-50`,children:I(Cr,{name:`icon-chevron-right`,size:12,className:z(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`span`,{children:[`Array(`,e,`)`]})]}),fa=({value:e,path:t,isNegative:n})=>{let[r,i]=M(!1);if(!(typeof e==`object`&&e&&!(e instanceof Date)))return I(`div`,{className:`flex items-center gap-1`,children:[I(`span`,{className:`text-gray-500`,children:[t,`:`]}),I(`span`,{className:`truncate`,children:no(e)})]});let a=Object.entries(e);return I(`div`,{className:`flex flex-col`,children:[I(`div`,{className:`flex items-center gap-1`,children:[I(`button`,{type:`button`,onClick:()=>i(!r),className:`flex items-center p-0 opacity-50`,children:I(Cr,{name:`icon-chevron-right`,size:12,className:z(`transition-[color,transform]`,n?`text-[#f87171]`:`text-[#4ade80]`,r&&`rotate-90`)})}),I(`span`,{className:`text-gray-500`,children:[t,`:`]}),!r&&I(`span`,{className:`truncate`,children:e instanceof Date?no(e):`{${Object.keys(e).join(`, `)}}`})]}),r&&I(`div`,{className:`pl-5 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:a.map(([e,t])=>I(fa,{value:t,path:e,isNegative:n},e))})]})},pa=({value:e,expanded:t,onToggle:n,isNegative:r})=>{let{value:i,error:a}=ro(e);return a?I(`span`,{className:`text-gray-500 font-italic`,children:a}):typeof i==`object`&&i&&!(i instanceof Promise)?Array.isArray(i)?I(`div`,{className:`flex flex-col gap-1 relative`,children:[I(da,{length:i.length,expanded:t,onToggle:n,isNegative:r}),t&&I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:i.map((e,t)=>I(fa,{value:e,path:t.toString(),isNegative:r},t.toString()))}),I(ua,{text:Xa(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(j,{children:e})})]}):I(`div`,{className:`flex items-start gap-1 relative`,children:[I(`button`,{type:`button`,onClick:n,className:z(`flex items-center`,`p-0 mt-0.5 mr-1`,`opacity-50`),children:I(Cr,{name:`icon-chevron-right`,size:12,className:z(`transition-[color,transform]`,r?`text-[#f87171]`:`text-[#4ade80]`,t&&`rotate-90`)})}),I(`div`,{className:`flex-1`,children:t?I(`div`,{className:`pl-2 border-l border-[#333] mt-0.5 ml-1 flex flex-col gap-0.5`,children:Object.entries(i).map(([e,t])=>I(fa,{value:t,path:e,isNegative:r},e))}):I(`span`,{children:no(i)})}),I(ua,{text:Xa(i),className:`absolute top-0.5 right-0.5 opacity-0 transition-opacity group-hover:opacity-100 self-end`,children:({ClipboardIcon:e})=>I(j,{children:e})})]}):I(`span`,{children:no(i)})},ma=50;hn({fiber:null,fiberProps:{current:[],changes:new Set},fiberState:{current:[],changes:new Set},fiberContext:{current:[],changes:new Set}});var ha=e=>{switch(e.kind){case`initialized`:return e.changes.currentValue;case`partially-initialized`:return e.value}},ga=(e,t)=>{for(let n of e){let e=t.get(n.name);if(e){t.set(e.name,{count:e.count+1,currentValue:n.value,id:e.name,lastUpdated:Date.now(),name:e.name,previousValue:n.prevValue});continue}t.set(n.name,{count:1,currentValue:n.value,id:n.name,lastUpdated:Date.now(),name:n.name,previousValue:n.prevValue})}},_a=(e,t)=>{for(let n of e){let e=t.contextChanges.get(n.contextType);if(e){if(br(ha(e),n.value))continue;if(e.kind===`partially-initialized`){t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.value}});continue}t.contextChanges.set(n.contextType,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:n.value,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,previousValue:e.changes.currentValue}});continue}t.contextChanges.set(n.contextType,{kind:`partially-initialized`,id:n.contextType.toString(),lastUpdated:Date.now(),name:n.name,value:n.value})}},va=e=>{let t={contextChanges:new Map,propsChanges:new Map,stateChanges:new Map};return e.forEach(e=>{_a(e.contextChanges,t),ga(e.stateChanges,t.stateChanges),ga(e.propsChanges,t.propsChanges)}),t},ya=(e,t)=>{let n=new Map;return e.forEach((e,t)=>{n.set(t,e)}),t.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}n.set(t,{count:r.count+e.count,currentValue:e.currentValue,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:e.previousValue})}),n},ba=(e,t)=>{let n=new Map;return e.contextChanges.forEach((e,t)=>{n.set(t,e)}),t.contextChanges.forEach((e,t)=>{let r=n.get(t);if(!r){n.set(t,e);return}if(ha(e)!==ha(r))switch(r.kind){case`initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{...e.changes,count:e.changes.count+r.changes.count+1,currentValue:e.changes.currentValue,previousValue:e.changes.previousValue}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:r.changes.count+1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.changes.currentValue}});return}case`partially-initialized`:switch(e.kind){case`initialized`:n.set(t,{kind:`initialized`,changes:{count:e.changes.count+1,currentValue:e.changes.currentValue,id:e.changes.id,lastUpdated:e.changes.lastUpdated,name:e.changes.name,previousValue:r.value}});return;case`partially-initialized`:n.set(t,{kind:`initialized`,changes:{count:1,currentValue:e.value,id:e.id,lastUpdated:e.lastUpdated,name:e.name,previousValue:r.value}});return}}}),n},xa=(e,t)=>({contextChanges:ba(e,t),propsChanges:ya(e.propsChanges,t.propsChanges),stateChanges:ya(e.stateChanges,t.stateChanges)}),Sa=e=>Array.from(e.propsChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.stateChanges.values()).reduce((e,t)=>e+t.count,0)+Array.from(e.contextChanges.values()).filter(e=>e.kind===`initialized`).reduce((e,t)=>e+t.changes.count,0),Ca=e=>{let t=P({queue:[]}),[n,r]=M({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),i=Y.inspectState.value.kind===`focused`?Y.inspectState.value.fiber:null,a=i?ke(i):null;return N(()=>{let n=setInterval(()=>{t.current.queue.length!==0&&(r(n=>{let r=xa(n,va(t.current.queue)),i=Sa(n),a=Sa(r)-i;return e?.onChangeUpdate?.(a),r}),t.current.queue=[])},ma);return()=>{clearInterval(n)}},[i]),N(()=>{if(!a)return;let e=e=>{t.current?.queue.push(e)},n=Y.changesListeners.get(a);return n||(n=[],Y.changesListeners.set(a,n)),n.push(e),()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[],Y.changesListeners.set(a,Y.changesListeners.get(a)?.filter(t=>t!==e)??[])}},[a]),N(()=>()=>{r({propsChanges:new Map,stateChanges:new Map,contextChanges:new Map}),t.current.queue=[]},[a]),n},wa=Rn(()=>{let[e,t]=M(!0),n=Ca(),[r,i]=M(!1),a=Sa(n)>0;N(()=>{if(!r&&a){let e=setTimeout(()=>{i(!0),requestAnimationFrame(()=>{t(!0)})},0);return()=>clearTimeout(e)}},[r,a]);let o=new Map(Array.from(n.contextChanges.entries()).filter(([,e])=>e.kind===`initialized`).map(([e,t])=>[e,t.kind===`partially-initialized`?null:t.changes])),s=Y.inspectState.value.kind===`focused`?Y.inspectState.value.fiber:null;if(s)return I(j,{children:[I(Ea,{}),I(`div`,{className:`overflow-hidden h-full flex flex-col gap-y-2`,children:[I(`div`,{className:`flex flex-col gap-2 px-3 pt-2`,children:[I(`span`,{className:`text-sm font-medium text-[#888]`,children:[`Why did`,` `,I(`span`,{className:`text-[#A855F7]`,children:Ce(s)}),` `,`render?`]}),!a&&I(`div`,{className:`text-sm text-[#737373] bg-[#1E1E1E] rounded-md p-4 flex flex-col gap-4`,children:[I(`div`,{children:`No changes detected since selecting`}),I(`div`,{children:`The props, state, and context changes within your component will be reported here`})]})]}),I(`div`,{className:z(`flex flex-col gap-y-2 pl-3 relative overflow-y-auto h-full`),children:[I(Oa,{changes:n.propsChanges,title:`Changed Props`,isExpanded:e}),I(Oa,{renderName:e=>Ta(e,Ce(Se(s))??`Unknown Component`),changes:n.stateChanges,title:`Changed State`,isExpanded:e}),I(Oa,{changes:o,title:`Changed Context`,isExpanded:e})]})]})]})}),Ta=(e,t)=>{if(Number.isNaN(Number(e)))return e;let n=Number.parseInt(e);return I(`span`,{className:`truncate`,children:[I(`span`,{className:`text-white`,children:[n,(e=>{let t=e%10,n=e%100;if(n>=11&&n<=13)return`th`;switch(t){case 1:return`st`;case 2:return`nd`;case 3:return`rd`;default:return`th`}})(n),` hook`,` `]}),I(`span`,{style:{color:`#666`},children:[`called in `,I(`i`,{className:`text-[#A855F7] truncate`,children:t})]})]})},Ea=Rn(()=>{let e=P(null),t=P(null),n=P(null),r=P({isPropsChanged:!1,isStateChanged:!1,isContextChanged:!1});return N(()=>{let i=Ei(()=>{let r=[];e.current?.dataset.flash===`true`&&r.push(e.current),t.current?.dataset.flash===`true`&&r.push(t.current),n.current?.dataset.flash===`true`&&r.push(n.current);for(let e of r)e.classList.remove(`count-flash-white`),e.offsetWidth,e.classList.add(`count-flash-white`)},400);return Ki.subscribe(a=>{if(!e.current||!t.current||!n.current)return;let{currentIndex:o,updates:s}=a,c=s[o];!c||o===0||(i(),r.current={isPropsChanged:(c.props?.changes?.size??0)>0,isStateChanged:(c.state?.changes?.size??0)>0,isContextChanged:(c.context?.changes?.size??0)>0},e.current.dataset.flash!==`true`&&(e.current.dataset.flash=r.current.isPropsChanged.toString()),t.current.dataset.flash!==`true`&&(t.current.dataset.flash=r.current.isStateChanged.toString()),n.current.dataset.flash!==`true`&&(n.current.dataset.flash=r.current.isContextChanged.toString()))})},[]),I(`button`,{type:`button`,className:z(`react-section-header`,`overflow-hidden`,`max-h-0`,`transition-[max-height]`),children:I(`div`,{className:z(`flex-1 react-scan-expandable`),children:I(`div`,{className:`overflow-hidden`,children:I(`div`,{className:`flex items-center whitespace-nowrap`,children:[I(`div`,{className:`flex items-center gap-x-2`,children:`What changed?`}),I(`div`,{className:z(`ml-auto`,`change-scope`,`transition-opacity duration-300 delay-150`),children:[I(`div`,{ref:e,children:`props`}),I(`div`,{ref:t,children:`state`}),I(`div`,{ref:n,children:`context`})]})]})})})})}),Da=e=>e,Oa=Rn(({title:e,changes:t,renderName:n=Da})=>{let[r,i]=M(new Set),[a,o]=M(new Set),s=Array.from(t.entries());return t.size===0?null:I(`div`,{children:[I(`div`,{className:`text-xs text-[#888] mb-1.5`,children:e}),I(`div`,{className:`flex flex-col gap-2`,children:s.map(([t,s])=>{let c=a.has(String(t)),{value:l,error:u}=ro(s.previousValue),{value:d,error:f}=ro(s.currentValue),p=Qa(l,d);return I(`div`,{children:[I(`button`,{onClick:()=>{o(e=>{let n=new Set(e);return n.has(String(t))?n.delete(String(t)):n.add(String(t)),n})},className:`flex items-center gap-2 w-full bg-transparent border-none p-0 cursor-pointer text-white text-xs`,children:I(`div`,{className:`flex items-center gap-1.5 flex-1`,children:[I(Cr,{name:`icon-chevron-right`,size:12,className:z(`text-[#666] transition-transform duration-200 ease-[cubic-bezier(0.25,0.1,0.25,1)]`,{"rotate-90":c})}),I(`div`,{className:`whitespace-pre-wrap break-words text-left font-medium flex items-center gap-x-1.5`,children:[n(s.name),I(Ma,{count:s.count,isFunction:typeof s.currentValue==`function`,showWarning:p.changes.length===0,forceFlash:!0})]})]})}),I(`div`,{className:z(`react-scan-expandable`,{"react-scan-expanded":c}),children:I(`div`,{className:`pl-3 text-xs font-mono border-l-1 border-[#333]`,children:I(`div`,{className:`flex flex-col gap-0.5`,children:u||f?I(ka,{currError:f,prevError:u}):p.changes.length>0?I(Aa,{change:s,diff:p,expandedFns:r,renderName:n,setExpandedFns:i,title:e}):I(ja,{currValue:d,entryKey:t,expandedFns:r,prevValue:l,setExpandedFns:i})})})})]},t)})})]})}),ka=({prevError:e,currError:t})=>I(j,{children:[e&&I(`div`,{className:`text-[#f87171] bg-[#2a1515] pr-1.5 py-[3px] rounded italic`,children:e}),t&&I(`div`,{className:`text-[#4ade80] bg-[#1a2a1a] pr-1.5 py-[3px] rounded italic mt-0.5`,children:t})]}),Aa=({diff:e,title:t,renderName:n,change:r,expandedFns:i,setExpandedFns:a})=>e.changes.map((o,s)=>{let{value:c,error:l}=ro(o.prevValue),{value:u,error:d}=ro(o.currentValue),f=typeof c==`function`||typeof u==`function`,p;return t===`Props`&&(p=o.path.length>0?`${n(String(r.name))}.${$a(o.path)}`:void 0),t===`State`&&o.path.length>0&&(p=`state.${$a(o.path)}`),p||=$a(o.path),I(`div`,{className:z(`flex flex-col gap-y-1`,s<e.changes.length-1&&`mb-4`),children:[p&&I(`div`,{className:`text-[#666] text-[10px]`,children:p}),I(`button`,{type:`button`,className:z(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#f87171] bg-[#2a1515]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${$a(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 whitespace-nowrap font-mono`,children:l?I(`span`,{className:`italic text-[#f87171]`,children:l}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1 max-h-40`,children:to(c,i.has(`${$a(o.path)}-prev`))}),typeof c==`function`&&I(ua,{text:c.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(j,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(pa,{value:c,expanded:i.has(`${$a(o.path)}-prev`),onToggle:()=>{let e=`${$a(o.path)}-prev`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`button`,{type:`button`,className:z(`group`,`flex items-start`,`py-[3px] px-1.5`,`text-left text-[#4ade80] bg-[#1a2a1a]`,`rounded`,`overflow-hidden break-all`,f&&`cursor-pointer`),onClick:f?()=>{let e=`${$a(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})}:void 0,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 whitespace-pre-wrap font-mono`,children:d?I(`span`,{className:`italic text-[#4ade80]`,children:d}):f?I(`div`,{className:`flex gap-1 items-start flex-col`,children:[I(`div`,{className:`flex gap-1 items-start w-full`,children:[I(`span`,{className:`flex-1`,children:to(u,i.has(`${$a(o.path)}-current`))}),typeof u==`function`&&I(ua,{text:u.toString(),className:`opacity-0 transition-opacity group-hover:opacity-100`,children:({ClipboardIcon:e})=>I(j,{children:e})})]}),c?.toString()===u?.toString()&&I(`div`,{className:`text-[10px] text-[#666] italic`,children:`Function reference changed`})]}):I(pa,{value:u,expanded:i.has(`${$a(o.path)}-current`),onToggle:()=>{let e=`${$a(o.path)}-current`;a(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]})]},`${p}-${r.name}-${s}`)}),ja=({prevValue:e,currValue:t,entryKey:n,expandedFns:r,setExpandedFns:i})=>I(j,{children:[I(`div`,{className:`group flex gap-0.5 items-start text-[#f87171] bg-[#2a1515] py-[3px] px-1.5 rounded`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`-`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(pa,{value:e,expanded:r.has(`${String(n)}-prev`),onToggle:()=>{let e=`${String(n)}-prev`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!0})})]}),I(`div`,{className:`group flex gap-0.5 items-start text-[#4ade80] bg-[#1a2a1a] py-[3px] px-1.5 rounded mt-0.5`,children:[I(`span`,{className:`w-3 flex items-center justify-center opacity-50`,children:`+`}),I(`span`,{className:`flex-1 overflow-hidden whitespace-pre-wrap font-mono`,children:I(pa,{value:t,expanded:r.has(`${String(n)}-current`),onToggle:()=>{let e=`${String(n)}-current`;i(t=>{let n=new Set(t);return n.has(e)?n.delete(e):n.add(e),n})},isNegative:!1})})]}),typeof t==`object`&&!!t&&I(`div`,{className:`text-[#666] text-[10px] italic mt-1 flex items-center gap-x-1`,children:[I(Cr,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),I(`span`,{children:`Reference changed but objects are structurally the same`})]})]}),Ma=({count:e,forceFlash:t,isFunction:n,showWarning:r})=>{let i=P(!0),a=P(null),o=P(e);return N(()=>{let t=a.current;!t||o.current===e||(t.classList.remove(`count-flash`),t.offsetWidth,t.classList.add(`count-flash`),o.current=e)},[e]),N(()=>{if(i.current){i.current=!1;return}if(t){let e=setTimeout(()=>{a.current?.classList.add(`count-flash-white`),e=setTimeout(()=>{a.current?.classList.remove(`count-flash-white`)},300)},500);return()=>{clearTimeout(e)}}},[t]),I(`div`,{ref:a,className:`count-badge`,children:[r&&I(Cr,{name:`icon-triangle-alert`,className:`text-yellow-500 mb-px`,size:14}),n&&I(Cr,{name:`icon-function`,className:`text-[#A855F7] mb-px`,size:14}),`x`,e]})},Na={lastRendered:new Map,expandedPaths:new Set,cleanup:()=>{Na.lastRendered.clear(),Na.expandedPaths.clear(),Ui.cleanupAll(),fo(),Zi.reset()}},Pa=class extends ot{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null}),Na.cleanup()}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`p-4 bg-red-950/50 h-screen backdrop-blur-sm`,children:[I(`div`,{className:`flex items-center gap-2 mb-3 text-red-400 font-medium`,children:[I(Cr,{name:`icon-flame`,className:`text-red-500`,size:16}),`Something went wrong in the inspector`]}),I(`div`,{className:`p-3 bg-black/40 rounded font-mono text-xs text-red-300 mb-4 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2`,children:`Reset Inspector`})]}):this.props.children}},Fa=bn(()=>z(`react-scan-inspector`,`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,!Ni.value&&`opacity-100 delay-300 pointer-events-auto`)),Ia=Ri(()=>{let e=P(null),t=t=>{if(!t)return;e.current=t;let{data:n,shouldUpdate:r}=yo(t);if(r){let e={timestamp:Date.now(),fiberInfo:ao(t),props:n.fiberProps,state:n.fiberState,context:n.fiberContext,stateNames:uo(t)};Zi.addUpdate(e,t)}};return Mn(()=>{let n=Y.inspectState.value;an(()=>{if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Na.cleanup();return}n.kind===`focused`&&(Ni.value=!1);let{parentCompositeFiber:r}=Ga(n.focusedDomElement,n.fiber);if(!r){Y.inspectState.value={kind:`inspect-off`},H.value={view:`none`};return}e.current?.type!==r.type&&(e.current=r,Na.cleanup(),t(r))})}),Mn(()=>{qi.value,an(()=>{let n=Y.inspectState.value;if(n.kind!==`focused`||!n.focusedDomElement){e.current=null,Na.cleanup();return}let{parentCompositeFiber:r}=Ga(n.focusedDomElement,n.fiber);if(!r){Y.inspectState.value={kind:`inspect-off`},H.value={view:`none`};return}t(r),n.focusedDomElement.isConnected||(e.current=null,Na.cleanup(),Y.inspectState.value={kind:`inspecting`,hoveredDomElement:null})})}),N(()=>()=>{Na.cleanup()},[]),I(Pa,{children:I(`div`,{className:Fa,children:I(`div`,{className:`w-full h-full`,children:I(wa,{})})})})}),La=Ri(()=>Y.inspectState.value.kind===`focused`?I(Pa,{children:[I(Ia,{}),I(la,{})]}):null),Ra=e=>{if(`__REACT_DEVTOOLS_GLOBAL_HOOK__`in window){let t=window.__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t?.renderers)return null;for(let[,n]of Array.from(t.renderers))try{let t=n.findFiberByHostInstance?.(e);if(t)return t}catch{}}if(`_reactRootContainer`in e)return e._reactRootContainer?._internalRoot?.current?.child??null;for(let t in e)if(t.startsWith(`__reactInternalInstance$`)||t.startsWith(`__reactFiber`))return e[t];return null},za=e=>{let t=e;for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.child)break;t=t.child}for(;t;){if(t.stateNode instanceof Element)return t.stateNode;if(!t.return)break;t=t.return}return null},Ba=e=>{if(!e)return null;try{let t=Ra(e);if(!t)return null;let n=Va(t);return n?n[0]:null}catch{return null}},Va=e=>{let t=e,n=null;for(;t;){if(ue(t))return[t,n];le(t)&&!n&&(n=t),t=t.return}return null},Ha=(e,t)=>!!_e(t,t=>t===e),Ua=async e=>{let t=Ba(e);if(!t)return null;let n=za(t);return n?await new Promise(e=>{let t=new IntersectionObserver(n=>{t.disconnect(),e(n[0]?.boundingClientRect??null)});t.observe(n)}):null},Wa=e=>{let t=Ba(e);if(!t||!za(t))return{};let n=Va(t);if(!n)return{};let[r]=n;return{parentCompositeFiber:r}},Ga=(e,t)=>{if(!e.isConnected)return{};let n=t??Ba(e);if(!n)return{};let r=n,i=null,a=null;for(;r;){if(!r.stateNode){r=r.return;continue}if(X.instrumentation?.fiberRoots.has(r.stateNode)){i=r,a=r.stateNode.current;break}r=r.return}if(!i||!a||(n=Ha(n,a)?n:n.alternate??n,!n)||!za(n))return{};let o=Va(n)?.[0];return o?{parentCompositeFiber:Ha(o,a)?o:o.alternate??o}:{}},Ka=e=>{let t=e.memoizedProps??{},n=e.alternate?.memoizedProps??{},r=[];for(let e in t){if(e===`children`)continue;let i=t[e],a=n[e];br(i,a)||r.push({name:e,value:i,prevValue:a,type:1})}return r},qa=new Set([`HTML`,`HEAD`,`META`,`TITLE`,`BASE`,`SCRIPT`,`SCRIPT`,`STYLE`,`LINK`,`NOSCRIPT`,`SOURCE`,`TRACK`,`EMBED`,`OBJECT`,`PARAM`,`TEMPLATE`,`PORTAL`,`SLOT`,`AREA`,`XML`,`DOCTYPE`,`COMMENT`]),Ja=(e,t=!0)=>{if(e.stateNode&&`nodeType`in e.stateNode){let n=e.stateNode;return t&&n.tagName&&qa.has(n.tagName.toLowerCase())?null:n}let n=e.child;for(;n;){let e=Ja(n,t);if(e)return e;n=n.sibling}return null},Ya=(e=document.body)=>{let t=[],n=e=>{if(!e)return null;let{parentCompositeFiber:t}=Wa(e);return t&&Ja(t)===e?e:null},r=(e,i=0)=>{let a=n(e);if(a){let{parentCompositeFiber:e}=Wa(a);if(!e)return;t.push({element:a,depth:i,name:Ce(e.type)??`Unknown`,fiber:e})}for(let t of Array.from(e.children))r(t,a?i+1:i)};return r(e),t},Xa=e=>{try{if(e===null)return`null`;if(e===void 0)return`undefined`;if(io(e))return`Promise`;if(typeof e==`function`){let t=e.toString();try{return t.replace(/\s+/g,` `).replace(/{\s+/g,`{
  `).replace(/;\s+/g,`;
  `).replace(/}\s*$/g,`
}`).replace(/\(\s+/g,`(`).replace(/\s+\)/g,`)`).replace(/,\s+/g,`, `)}catch{return t}}switch(!0){case e instanceof Date:return e.toISOString();case e instanceof RegExp:return e.toString();case e instanceof Error:return`${e.name}: ${e.message}`;case e instanceof Map:return JSON.stringify(Array.from(e.entries()),null,2);case e instanceof Set:return JSON.stringify(Array.from(e),null,2);case e instanceof DataView:return JSON.stringify(Array.from(new Uint8Array(e.buffer)),null,2);case e instanceof ArrayBuffer:return JSON.stringify(Array.from(new Uint8Array(e)),null,2);case ArrayBuffer.isView(e)&&`length`in e:return JSON.stringify(Array.from(e),null,2);case Array.isArray(e):return JSON.stringify(e,null,2);case typeof e==`object`:return JSON.stringify(e,null,2);default:return String(e)}}catch{return String(e)}},Za=(e,t)=>{try{return typeof e!=`function`||typeof t!=`function`?!1:e.toString()===t.toString()}catch{return!1}},Qa=(e,t,n=[],r=new WeakSet)=>{if(e===t)return{type:`primitive`,changes:[],hasDeepChanges:!1};if(typeof e==`function`&&typeof t==`function`){let r=Za(e,t);return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t,sameFunction:r}],hasDeepChanges:!r}}if(e===null||t===null||e===void 0||t===void 0||typeof e!=`object`||typeof t!=`object`)return{type:`primitive`,changes:[{path:n,prevValue:e,currentValue:t}],hasDeepChanges:!0};if(r.has(e)||r.has(t))return{type:`object`,changes:[{path:n,prevValue:`[Circular]`,currentValue:`[Circular]`}],hasDeepChanges:!1};r.add(e),r.add(t);let i=e,a=t,o=new Set([...Object.keys(i),...Object.keys(a)]),s=[],c=!1;for(let e of o){let t=i[e],o=a[e];if(t!==o)if(typeof t==`object`&&typeof o==`object`&&t!==null&&o!==null){let i=Qa(t,o,[...n,e],r);s.push(...i.changes),i.hasDeepChanges&&(c=!0)}else s.push({path:[...n,e],prevValue:t,currentValue:o}),c=!0}return{type:`object`,changes:s,hasDeepChanges:c}},$a=e=>e.length===0?``:e.reduce((e,t,n)=>/^\d+$/.test(t)?`${e}[${t}]`:n===0?t:`${e}.${t}`,``);function eo(e){let t=e.replace(/\s+/g,` `).trim(),n=[],r=``;for(let e=0;e<t.length;e++){let i=t[e];if(i===`=`&&t[e+1]===`>`){r.trim()&&n.push(r.trim()),n.push(`=>`),r=``,e++;continue}/[(){}[\];,<>:\?!]/.test(i)?(r.trim()&&n.push(r.trim()),n.push(i),r=``):/\s/.test(i)?(r.trim()&&n.push(r.trim()),r=``):r+=i}r.trim()&&n.push(r.trim());let i=[];for(let e=0;e<n.length;e++){let t=n[e],r=n[e+1];t===`(`&&r===`)`||t===`[`&&r===`]`||t===`{`&&r===`}`||t===`<`&&r===`>`?(i.push(t+r),e++):i.push(t)}let a=new Set,o=new Set;function s(e,t,n){let r=0;for(let a=n;a<i.length;a++){let n=i[a];if(n===e)r++;else if(n===t&&(r--,r===0))return a}return-1}for(let e=0;e<i.length;e++)if(i[e]===`(`){let t=s(`(`,`)`,e);if(t!==-1&&i[t+1]===`=>`)for(let n=e;n<=t;n++)a.add(n)}for(let e=1;e<i.length;e++){let t=i[e-1],n=i[e];if(/^[a-zA-Z0-9_$]+$/.test(t)&&n===`<`){let t=s(`<`,`>`,e);if(t!==-1)for(let n=e;n<=t;n++)o.add(n)}}let c=0,l=[],u=``;function d(){u.trim()&&l.push(u.replace(/\s+$/,``)),u=``}function f(){d(),u=`  `.repeat(c)}let p=[];function m(){return p.length?p[p.length-1]:null}function h(e,t=!1){u.trim()?t||/^[),;:\].}>]$/.test(e)?u+=e:u+=` ${e}`:u+=e}for(let e=0;e<i.length;e++){let t=i[e],n=i[e+1]||``;if([`(`,`{`,`[`,`<`].includes(t))h(t),p.push(t),t===`{`?(c++,f()):(t===`(`||t===`[`||t===`<`)&&(a.has(e)&&t===`(`||o.has(e)&&t===`<`||n!=={"(":`)`,"[":`]`,"<":`>`}[t]&&n!==`()`&&n!==`[]`&&n!==`<>`&&(c++,f()));else if([`)`,`}`,`]`,`>`].includes(t)){let n=m();t===`)`&&n===`(`||t===`]`&&n===`[`||t===`>`&&n===`<`?!(a.has(e)&&t===`)`)&&!(o.has(e)&&t===`>`)&&(c=Math.max(c-1,0),f()):t===`}`&&n===`{`&&(c=Math.max(c-1,0),f()),p.pop(),h(t),t===`}`&&f()}else if(/^\(\)|\[\]|\{\}|\<\>$/.test(t))h(t);else if(t===`=>`)h(t);else if(t===`;`)h(t,!0),f();else if(t===`,`){h(t,!0);let n=m();!(a.has(e)&&n===`(`)&&!(o.has(e)&&n===`<`)&&n&&[`{`,`[`,`(`,`<`].includes(n)&&f()}else h(t)}return d(),l.join(`
`).replace(/\n\s*\n+/g,`
`).trim()}var to=(e,t=!1)=>{try{let n=e.toString(),r=n.match(/(?:function\s*)?(?:\(([^)]*)\)|([^=>\s]+))\s*=>?/);if(!r)return`ƒ`;let i=(r[1]||r[2]||``).replace(/\s+/g,``);return t?eo(n):`\u0192 (${i}) => ...`}catch{return`ƒ`}},no=e=>{if(e===null)return`null`;if(e===void 0)return`undefined`;if(typeof e==`string`)return`"${e.length>150?`${e.slice(0,20)}...`:e}"`;if(typeof e==`number`||typeof e==`boolean`)return String(e);if(typeof e==`function`)return to(e);if(Array.isArray(e))return`Array(${e.length})`;if(e instanceof Map)return`Map(${e.size})`;if(e instanceof Set)return`Set(${e.size})`;if(e instanceof Date)return e.toISOString();if(e instanceof RegExp)return e.toString();if(e instanceof Error)return`${e.name}: ${e.message}`;if(typeof e==`object`){let t=Object.keys(e);return`{${t.length>2?`${t.slice(0,2).join(`, `)}, ...`:t.join(`, `)}}`}return String(e)},ro=e=>{if(e==null||typeof e==`function`||typeof e!=`object`)return{value:e};if(io(e))return{value:`Promise`};try{let t=Object.getPrototypeOf(e);return t===Promise.prototype||t?.constructor?.name===`Promise`?{value:`Promise`}:{value:e}}catch{return{value:null,error:`Error accessing value`}}},io=e=>!!e&&(e instanceof Promise||typeof e==`object`&&`then`in e),ao=e=>{let t=be(e);return{displayName:Ce(e)||`Unknown`,type:e.type,key:e.key,id:e.index,selfTime:t?.selfTime??null,totalTime:t?.totalTime??null}},oo=new Map,so=new Map,co=new Map,W=null,lo=/\[(?<name>\w+),\s*set\w+\]/g,uo=e=>{let t=e.type?.toString?.()||``;return t?Array.from(t.matchAll(lo),e=>e.groups?.name??``):[]},fo=()=>{oo.clear(),so.clear(),co.clear(),W=null},po=e=>{let t=e.type!==W;return W=e.type,t},mo=(e,t,n,r)=>{let i=e.get(t),a=e===oo||e===co,o=!br(n,r);if(!i)return e.set(t,{count:o&&a?1:0,currentValue:n,previousValue:r,lastUpdated:Date.now()}),{hasChanged:o,count:o&&a?1:a?0:1};if(!br(i.currentValue,n)){let r=i.count+1;return e.set(t,{count:r,currentValue:n,previousValue:i.currentValue,lastUpdated:Date.now()}),{hasChanged:!0,count:r}}return{hasChanged:!1,count:i.count}},ho=e=>{if(!e)return{};if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let t=e.memoizedState,n={},r=0;for(;t;)t.queue&&t.memoizedState!==void 0&&(n[r]=t.memoizedState),t=t.next,r++;return n}return e.tag===1&&e.memoizedState||{}},go=e=>{let t=e.memoizedProps||{},n=e.alternate?.memoizedProps||{},r={},i={},a=Object.keys(t);for(let e of a)e in t&&(r[e]=t[e],i[e]=n[e]);return{current:r,prev:i,changes:Ka(e).map(e=>({name:e.name,value:e.value,prevValue:e.prevValue}))}},_o=e=>{let t=ho(e),n=e.alternate?ho(e.alternate):{},r=[];for(let[i,a]of Object.entries(t)){let t=e.tag===1?i:Number(i);e.alternate&&!br(n[i],a)&&r.push({name:t,value:a,prevValue:n[i]})}return{current:t,prev:n,changes:r}},vo=e=>{let t=xo(e),n=e.alternate?xo(e.alternate):new Map,r={},i={},a=[],o=new Set;for(let[e,s]of t){let t=s.displayName,c=e;if(o.has(c))continue;o.add(c),r[t]=s.value;let l=n.get(e);l&&(i[t]=l.value,br(l.value,s.value)||a.push({name:t,value:s.value,prevValue:l.value,contextType:e}))}return{current:r,prev:i,changes:a}},yo=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{data:{fiberProps:t(),fiberState:t(),fiberContext:t()},shouldUpdate:!1};let n=!1,r=po(e),i=t();if(e.memoizedProps){let{current:t,changes:r}=go(e);for(let[e,n]of Object.entries(t))i.current.push({name:e,value:io(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of r){let{hasChanged:t,count:r}=mo(oo,e.name,e.value,e.prevValue);t&&(n=!0,i.changes.add(e.name),i.changesCounts.set(e.name,r))}}let a=t(),{current:o,changes:s}=_o(e);for(let[t,n]of Object.entries(o)){let r=e.tag===1?t:Number(t);a.current.push({name:r,value:n})}for(let e of s){let{hasChanged:t,count:r}=mo(so,e.name,e.value,e.prevValue);t&&(n=!0,a.changes.add(e.name),a.changesCounts.set(e.name,r))}let c=t(),{current:l,changes:u}=vo(e);for(let[e,t]of Object.entries(l))c.current.push({name:e,value:t});if(!r)for(let e of u){let{hasChanged:t,count:r}=mo(co,e.name,e.value,e.prevValue);t&&(n=!0,c.changes.add(e.name),c.changesCounts.set(e.name,r))}return!n&&!r&&(i.changes.clear(),a.changes.clear(),c.changes.clear()),{data:{fiberProps:i,fiberState:a,fiberContext:c},shouldUpdate:n||r}},bo=new WeakMap,xo=e=>{if(!e)return new Map;let t=bo.get(e);if(t)return t;let n=new Map,r=e;for(;r;){let e=r.dependencies;if(e?.firstContext){let t=e.firstContext;for(;t;){let e=t.memoizedValue,r=t.context?.displayName;if(n.has(e)||n.set(t.context,{value:e,displayName:r??`UnnamedContext`,contextType:null}),t===t.next)break;t=t.next}}r=r.return}return bo.set(e,n),n},So=e=>{let t=()=>({current:[],changes:new Set,changesCounts:new Map});if(!e)return{fiberProps:t(),fiberState:t(),fiberContext:t()};let n=t();if(e.memoizedProps){let{current:t,changes:r}=go(e);for(let[e,r]of Object.entries(t))n.current.push({name:e,value:io(r)?{type:`promise`,displayValue:`Promise`}:r});for(let e of r)n.changes.add(e.name),n.changesCounts.set(e.name,1)}let r=t();if(e.memoizedState){let{current:t,changes:n}=_o(e);for(let[e,n]of Object.entries(t))r.current.push({name:e,value:io(n)?{type:`promise`,displayValue:`Promise`}:n});for(let e of n)r.changes.add(e.name),r.changesCounts.set(e.name,1)}let i=t(),{current:a,changes:o}=vo(e);for(let[e,t]of Object.entries(a))i.current.push({name:e,value:io(t)?{type:`promise`,displayValue:`Promise`}:t});for(let e of o)i.changes.add(e.name),i.changesCounts.set(e.name,1);return{fiberProps:n,fiberState:r,fiberContext:i}},Co={mount:1,update:2,unmount:4},wo=0,To=performance.now(),Eo=0,Do=!1,Oo=()=>{Eo++;let e=performance.now();e-To>=1e3&&(wo=Eo,Eo=0,To=e),requestAnimationFrame(Oo)},ko=()=>(Do||(Do=!0,Oo(),wo=60),wo),Ao=(e,t)=>No(e)===No(t)&&jo.includes(typeof e)&&jo.includes(typeof t),jo=[`function`,`object`],Mo=new WeakMap;function No(e,t=0){if(t<0)return`…`;switch(typeof e){case`function`:return e.toString();case`string`:return e;case`number`:case`boolean`:case`undefined`:return String(e);case`object`:break;default:return String(e)}if(e===null)return`null`;if(Mo.has(e)){let t=Mo.get(e);if(t!==void 0)return t}if(Array.isArray(e)){let t=e.length?`[${e.length}]`:`[]`;return Mo.set(e,t),t}if(He(e)){let t=`<${Ce(e.type)??``} ${e.props?Object.keys(e.props).length:0}>`;return Mo.set(e,t),t}if(Object.getPrototypeOf(e)===Object.prototype){let t=Object.keys(e),n=t.length?`{${t.length}}`:`{}`;return Mo.set(e,n),n}let n=e&&typeof e==`object`?e.constructor:void 0;if(n&&typeof n==`function`&&n.name){let t=`${n.name}{\u2026}`;return Mo.set(e,t),t}let r=`${Object.prototype.toString.call(e).slice(8,-1)}{\u2026}`;return Mo.set(e,r),r}var Po=e=>{if(!e)return[];let t=[];if(e.tag===0||e.tag===11||e.tag===15||e.tag===14){let n=e.memoizedState,r=e.alternate?.memoizedState,i=0;for(;n;){if(n.queue&&n.memoizedState!==void 0){let e={type:2,name:i.toString(),value:n.memoizedState,prevValue:r?.memoizedState};br(e.prevValue,e.value)||t.push(e)}n=n.next,r=r?.next,i++}return t}if(e.tag===1){let n={type:3,name:`state`,value:e.memoizedState,prevValue:e.alternate?.memoizedState};return br(n.prevValue,n.value)||t.push(n),t}return t},Fo=0,Io=new WeakMap,Lo=e=>Io.get(e)||(Fo++,Io.set(e,Fo),Fo);function Ro(e,t){if(!e||!t)return;let n=e.memoizedValue,r={type:4,name:e.context.displayName??`Context.Provider`,value:n,contextType:Lo(e.context)};this.push(r)}var zo=e=>{let t=[];return de(e,Ro.bind(t)),t},Bo=new Map,Vo=!1,Ho=()=>Array.from(Bo.values());function Uo(e,t,n){!br(t,n)&&!Ao(t,n)&&(this.isRequiredChange=!0)}var Wo=e=>{if(!k(e))return!0;let t=me(e);for(let e of t){let t={isRequiredChange:!1};if(fe(e,Uo.bind(t)),t.isRequiredChange)return!1}return!0},Go=!1,Ko=16,qo=new WeakMap;function Jo(e){return String(ke(e))}function Yo(e){let t=Jo(e),n=qo.get(Se(e));if(n)return n.get(t)}function Xo(e,t){let n=Se(e.type),r=Jo(e),i=qo.get(n);i||(i=new Map,qo.set(n,i)),i.set(r,t)}var Zo=(e,t,n,r,i)=>{let a=Date.now(),o=Yo(e);if((r||i)&&(!o||a-(o.lastRenderTimestamp||0)>Ko)){let r=o||{selfTime:0,totalTime:0,renderCount:0,lastRenderTimestamp:a};r.renderCount=(r.renderCount||0)+1,r.selfTime=t||0,r.totalTime=n||0,r.lastRenderTimestamp=a,Xo(e,{...r})}},Qo=(e,t)=>{let n={isPaused:hn(!X.options.value.enabled),fiberRoots:new WeakSet};return Bo.set(e,{key:e,config:t,instrumentation:n}),Vo||(Vo=!0,ze({name:`react-scan`,onActive:t.onActive,onCommitFiberRoot(e,t){n.fiberRoots.add(t);let r=Ho();for(let e of r)e.config.onCommitStart();Ie(t.current,(e,t)=>{let n=Se(e.type);if(!n)return null;let r=Ho(),i=[];for(let t=0,n=r.length;t<n;t++)r[t].config.isValidFiber(e)&&i.push(t);if(!i.length)return null;let a=[];if(r.some(e=>e.config.trackChanges)){let t=go(e).changes,n=_o(e).changes,r=vo(e).changes;a.push.apply(null,t.map(e=>({type:1,name:e.name,value:e.value})));for(let t of n)e.tag===1?a.push({type:3,name:t.name.toString(),value:t.value}):a.push({type:2,name:t.name.toString(),value:t.value});a.push.apply(null,r.map(e=>({type:4,name:e.name,value:e.value,contextType:Number(e.contextType)})))}let{selfTime:o,totalTime:s}=be(e),c=ko(),l={phase:Co[t],componentName:Ce(n),count:1,changes:a,time:o,forget:xe(e),unnecessary:Go?Wo(e):null,didCommit:k(e),fps:c},u=a.length>0,d=me(e).length>0;t===`update`&&Zo(e,o,s,u,d);for(let t=0,n=i.length;t<n;t++)r[i[t]].config.onRender(e,[l])});for(let e of r)e.config.onCommitFinish()},onPostCommitFiberRoot(){let e=Ho();for(let t of e)t.config.onPostCommitFiberRoot()}})),n},$o=e=>{let t=new Map;for(let n=0,r=e.length;n<r;n++){let r=e[n];if(!r.componentName)continue;let i=t.get(r.componentName)??[],a=yr([{aggregatedCount:1,computedKey:null,name:r.componentName,frame:null,...r,changes:{type:r.changes.reduce((e,t)=>e|t.type,0),unstable:r.changes.some(e=>e.unstable)},phase:r.phase,computedCurrent:null}]);if(!a)continue;let o=null,s=null;if(r.changes)for(let e=0,t=r.changes.length;e<t;e++){let{name:t,prevValue:n,nextValue:a,unstable:c,type:l}=r.changes[e];l===1?(o??={},s??={},o[`${c?`⚠️`:``}${t} (prev)`]=n,s[`${c?`⚠️`:``}${t} (next)`]=a):i.push({prev:n,next:a,type:l===4?`context`:`state`,unstable:c??!1})}o&&s&&i.push({prev:o,next:s,type:`props`,unstable:!1}),t.set(a,i)}for(let[e,n]of Array.from(t.entries())){console.group(`%c${e}`,`background: hsla(0,0%,70%,.3); border-radius:3px; padding: 0 2px;`);for(let{type:e,prev:t,next:r,unstable:i}of n)console.log(`${e}:`,i?`⚠️`:``,t,`!==`,r);console.groupEnd()}},es=()=>{if(window.hideIntro){window.hideIntro=void 0;return}console.log(`%c[·] %cReact Scan`,`font-weight:bold;color:#7a68e8;font-size:20px;`,`font-weight:bold;font-size:14px;`)},ts=7,ns=`Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace`,rs=.2,is=.5,as=(e,t)=>{let n=t-e;return Math.abs(n)<is?t:e+n*rs},os=4,ss=40,cs=45,ls=`115,97,230`;function us(e,t){return t[0]-e[0]}function ds(e){return[...e.entries()].sort(us)}function fs([e,t]){let n=`${t.slice(0,os).join(`, `)} \xD7${e}`;return n.length>ss&&(n=`${n.slice(0,ss)}\u2026`),n}var ps=e=>{let t=new Map;for(let{name:n,count:r}of e)t.set(n,(t.get(n)||0)+r);let n=new Map;for(let[e,r]of t){let t=n.get(r);t?t.push(e):n.set(r,[e])}let r=ds(n),i=fs(r[0]);for(let e=1,t=r.length;e<t;e++)i+=`, `+fs(r[e]);return i.length>ss?`${i.slice(0,ss)}\u2026`:i},ms=e=>{let t=0;for(let n of e)t+=n.width*n.height;return t},hs=(e,t)=>{for(let{id:n,name:r,count:i,x:a,y:o,width:s,height:c,didCommit:l}of t){let t={id:n,name:r,count:i,x:a,y:o,width:s,height:c,frame:0,targetX:a,targetY:o,targetWidth:s,targetHeight:c,didCommit:l},u=String(t.id),d=e.get(u);d?(d.count++,d.frame=0,d.targetX=a,d.targetY=o,d.targetWidth=s,d.targetHeight=c,d.didCommit=l):e.set(u,t)}},gs=(e,t,n)=>{for(let r of e.values()){let e=r.x-t,i=r.y-n;r.targetX=e,r.targetY=i}},_s=(e,t)=>{let n=e.getContext(`2d`,{alpha:!0});return n&&n.scale(t,t),n},vs=(e,t,n,r)=>{e.clearRect(0,0,t.width/n,t.height/n);let i=new Map,a=new Map;for(let e of r.values()){let{x:t,y:n,width:r,height:o,targetX:s,targetY:c,targetWidth:l,targetHeight:u,frame:d}=e;s!==t&&(e.x=as(t,s)),c!==n&&(e.y=as(n,c)),l!==r&&(e.width=as(r,l)),u!==o&&(e.height=as(o,u));let f=`${s??t},${c??n}`,p=`${f},${l??r},${u??o}`,m=i.get(f);m?m.push(e):i.set(f,[e]);let h=1-d/cs;e.frame++;let g=a.get(p)||{x:t,y:n,width:r,height:o,alpha:h};h>g.alpha&&(g.alpha=h),a.set(p,g)}for(let{x:t,y:n,width:r,height:i,alpha:o}of a.values()){e.strokeStyle=`rgba(${ls},${o})`,e.lineWidth=1;let a=Math.round(t)+.5,s=Math.round(n)+.5,c=Math.round(r),l=Math.round(i);e.beginPath(),e.rect(a,s,c,l),e.stroke(),e.fillStyle=`rgba(${ls},${o*.1})`,e.fill()}e.font=`11px ${ns}`;let o=new Map;e.textRendering=`optimizeSpeed`;for(let t of i.values()){let{x:n,y:i,frame:a}=t[0],s=1-a/cs,c=ps(t),{width:l}=e.measureText(c);o.set(`${n},${i},${l},${c}`,{text:c,width:l,height:11,alpha:s,x:n,y:i,outlines:t});let u=i-11-4;if(u<0&&(u=0),a>cs)for(let e of t)r.delete(String(e.id))}let s=Array.from(o.entries()).sort(([e,t],[n,r])=>ms(r.outlines)-ms(t.outlines));for(let[t,n]of s)if(o.has(t))for(let[r,i]of o.entries()){if(t===r)continue;let{x:a,y:s,width:c,height:l}=n,{x:u,y:d,width:f,height:p}=i;a+c>u&&u+f>a&&s+l>d&&d+p>s&&(n.text=ps(n.outlines.concat(i.outlines)),n.width=e.measureText(n.text).width,o.delete(r))}for(let t of o.values()){let{x:n,y:r,alpha:i,width:a,height:o,text:s}=t,c=r-o-4;c<0&&(c=0),e.fillStyle=`rgba(${ls},${i})`,e.fillRect(n,c,a+4,o+4),e.fillStyle=`rgba(255,255,255,${i})`,e.fillText(s,n+2,c+o)}return r.size>0},ys='"use strict";(()=>{var D="Menlo,Consolas,Monaco,Liberation Mono,Lucida Console,monospace";var T=(t,n)=>{let r=n-t;return Math.abs(r)<.5?n:t+r*.2};var x="115,97,230";function P(t,n){return n[0]-t[0]}function F(t){return[...t.entries()].sort(P)}function v([t,n]){let r=`${n.slice(0,4).join(", ")} \\xD7${t}`;return r.length>40&&(r=`${r.slice(0,40)}\\u2026`),r}var $=t=>{let n=new Map;for(let{name:e,count:u}of t)n.set(e,(n.get(e)||0)+u);let r=new Map;for(let[e,u]of n){let A=r.get(u);A?A.push(e):r.set(u,[e])}let d=F(r),a=v(d[0]);for(let e=1,u=d.length;e<u;e++)a+=", "+v(d[e]);return a.length>40?`${a.slice(0,40)}\\u2026`:a},H=t=>{let n=0;for(let r of t)n+=r.width*r.height;return n};var N=(t,n)=>{let r=t.getContext("2d",{alpha:!0});return r&&r.scale(n,n),r},X=(t,n,r,d)=>{t.clearRect(0,0,n.width/r,n.height/r);let a=new Map,e=new Map;for(let i of d.values()){let{x:o,y:c,width:l,height:g,targetX:s,targetY:f,targetWidth:h,targetHeight:m,frame:O}=i;s!==o&&(i.x=T(o,s)),f!==c&&(i.y=T(c,f)),h!==l&&(i.width=T(l,h)),m!==g&&(i.height=T(g,m));let M=`${s??o},${f??c}`,L=`${M},${h??l},${m??g}`,S=a.get(M);S?S.push(i):a.set(M,[i]);let C=1-O/45;i.frame++;let _=e.get(L)||{x:o,y:c,width:l,height:g,alpha:C};C>_.alpha&&(_.alpha=C),e.set(L,_)}for(let{x:i,y:o,width:c,height:l,alpha:g}of e.values()){t.strokeStyle=`rgba(${x},${g})`,t.lineWidth=1;let s=Math.round(i)+.5,f=Math.round(o)+.5,h=Math.round(c),m=Math.round(l);t.beginPath(),t.rect(s,f,h,m),t.stroke(),t.fillStyle=`rgba(${x},${g*.1})`,t.fill()}t.font=`11px ${D}`;let u=new Map;t.textRendering="optimizeSpeed";for(let i of a.values()){let o=i[0],{x:c,y:l,frame:g}=o,s=1-g/45,f=$(i),{width:h}=t.measureText(f),m=11;u.set(`${c},${l},${h},${f}`,{text:f,width:h,height:m,alpha:s,x:c,y:l,outlines:i});let O=l-m-4;if(O<0&&(O=0),g>45)for(let M of i)d.delete(String(M.id))}let A=Array.from(u.entries()).sort(([i,o],[c,l])=>H(l.outlines)-H(o.outlines));for(let[i,o]of A)if(u.has(i))for(let[c,l]of u.entries()){if(i===c)continue;let{x:g,y:s,width:f,height:h}=o,{x:m,y:O,width:M,height:L}=l;g+f>m&&m+M>g&&s+h>O&&O+L>s&&(o.text=$(o.outlines.concat(l.outlines)),o.width=t.measureText(o.text).width,u.delete(c))}for(let i of u.values()){let{x:o,y:c,alpha:l,width:g,height:s,text:f}=i,h=c-s-4;h<0&&(h=0),t.fillStyle=`rgba(${x},${l})`,t.fillRect(o,h,g+4,s+4),t.fillStyle=`rgba(255,255,255,${l})`,t.fillText(f,o+2,h+s)}return d.size>0};var p=null,w=null,b=1,y=new Map,E=null,R=()=>{if(!w||!p)return;X(w,p,b,y)?E=requestAnimationFrame(R):E=null};self.onmessage=t=>{let{type:n}=t.data;if(n==="init"&&(p=t.data.canvas,b=t.data.dpr,p&&(p.width=t.data.width,p.height=t.data.height,w=N(p,b))),!(!p||!w)){if(n==="resize"){b=t.data.dpr,p.width=t.data.width*b,p.height=t.data.height*b,w.resetTransform(),w.scale(b,b),R();return}if(n==="draw-outlines"){let{data:r,names:d}=t.data,a=new Float32Array(r);for(let e=0;e<a.length;e+=7){let u=a[e+2],A=a[e+3],i=a[e+4],o=a[e+5],c=a[e+6],l={id:a[e],name:d[e/7],count:a[e+1],x:u,y:A,width:i,height:o,frame:0,targetX:u,targetY:A,targetWidth:i,targetHeight:o,didCommit:c},g=String(l.id),s=y.get(g);s?(s.count++,s.frame=0,s.targetX=u,s.targetY=A,s.targetWidth=i,s.targetHeight=o,s.didCommit=c):y.set(g,l)}E||(E=requestAnimationFrame(R));return}if(n==="scroll"){let{deltaX:r,deltaY:d}=t.data;for(let a of y.values()){let e=a.x-r,u=a.y-d;a.targetX=e,a.targetY=u}}}};})();\n',bs=null,xs=null,Ss=null,Cs=1,ws=null,Ts=new Map,Es=new Map,Ds=new Set,Os=e=>{if(!ue(e))return;let t=typeof e.type==`string`?e.type:Ce(e);if(!t)return;let n=Es.get(e),r=ge(e),i=k(e);n?n.count++:(Es.set(e,{name:t,count:1,elements:r.map(e=>e.stateNode),didCommit:i?1:0}),Ds.add(e))},ks=e=>{let t=e[0];if(e.length===1)return t;let n,r,i,a;for(let t=0,o=e.length;t<o;t++){let o=e[t];n=n==null?o.x:Math.min(n,o.x),r=r==null?o.y:Math.min(r,o.y),i=i==null?o.x+o.width:Math.max(i,o.x+o.width),a=a==null?o.y+o.height:Math.max(a,o.y+o.height)}return n==null||r==null||i==null||a==null?e[0]:new DOMRect(n,r,i-n,a-r)};function As(e,t){let n=[];for(let t of e){let e=t.target;this.seenElements.has(e)||(this.seenElements.add(e),n.push(t))}n.length>0&&this.resolveNext&&(this.resolveNext(n),this.resolveNext=null),this.seenElements.size===this.uniqueElements.size&&(t.disconnect(),this.done=!0,this.resolveNext&&this.resolveNext([]))}var js=async function*(e){let t={uniqueElements:new Set(e),seenElements:new Set,resolveNext:null,done:!1},n=new IntersectionObserver(As.bind(t));for(let e of t.uniqueElements)n.observe(e);for(;!t.done;){let e=await new Promise(e=>{t.resolveNext=e});e.length>0&&(yield e)}},Ms=typeof SharedArrayBuffer<`u`?SharedArrayBuffer:ArrayBuffer,Ns=async()=>{let e=[];for(let t of Ds){let n=Es.get(t);if(n)for(let t=0;t<n.elements.length;t++)n.elements[t]instanceof Element&&e.push(n.elements[t])}let t=new Map;for await(let n of js(e)){for(let e of n){let n=e.target,r=e.intersectionRect;e.isIntersecting&&r.width&&r.height&&t.set(n,r)}let e=[],r=[],i=[];for(let n of Ds){let a=Es.get(n);if(!a)continue;let o=[];for(let e=0;e<a.elements.length;e++){let n=a.elements[e],r=t.get(n);r&&o.push(r)}o.length&&(e.push(a),r.push(ks(o)),i.push(ke(n)))}if(e.length>0){let t=new Ms(e.length*ts*4),n=new Float32Array(t),a=Array(e.length),o;for(let t=0,s=e.length;t<s;t++){let s=e[t],c=i[t],{x:l,y:u,width:d,height:f}=r[t],{count:p,name:m,didCommit:h}=s;if(bs){let e=t*ts;n[e]=c,n[e+1]=p,n[e+2]=l,n[e+3]=u,n[e+4]=d,n[e+5]=f,n[e+6]=h,a[t]=m}else o||=Array(e.length),o[t]={id:c,name:m,count:p,x:l,y:u,width:d,height:f,didCommit:h}}bs?bs.postMessage({type:`draw-outlines`,data:t,names:a}):xs&&Ss&&o&&(hs(Ts,o),ws||=requestAnimationFrame(Ps))}}for(let e of Ds)Es.delete(e),Ds.delete(e)},Ps=()=>{!Ss||!xs||(ws=vs(Ss,xs,Cs,Ts)?requestAnimationFrame(Ps):null)},Fs=typeof OffscreenCanvas<`u`&&typeof Worker<`u`,Is=()=>Math.min(window.devicePixelRatio||1,2),Ls=()=>{zs();let e=document.createElement(`div`);e.setAttribute(`data-react-scan`,`true`);let t=e.attachShadow({mode:`open`}),n=document.createElement(`canvas`);if(n.style.position=`fixed`,n.style.top=`0`,n.style.left=`0`,n.style.pointerEvents=`none`,n.style.zIndex=`2147483646`,n.setAttribute(`aria-hidden`,`true`),t.appendChild(n),!n)return null;Cs=Is(),xs=n;let{innerWidth:r,innerHeight:i}=window;n.style.width=`${r}px`,n.style.height=`${i}px`;let a=r*Cs,o=i*Cs;if(n.width=a,n.height=o,Fs&&!window.__REACT_SCAN_EXTENSION__)try{bs=new Worker(URL.createObjectURL(new Blob([ys],{type:`application/javascript`})));let e=n.transferControlToOffscreen();bs?.postMessage({type:`init`,canvas:e,width:n.width,height:n.height,dpr:Cs},[e])}catch(e){console.warn(`Failed to initialize OffscreenCanvas worker:`,e)}bs||(Ss=_s(n,Cs));let s=!1;window.addEventListener(`resize`,()=>{s||(s=!0,setTimeout(()=>{let e=window.innerWidth,t=window.innerHeight;Cs=Is(),n.style.width=`${e}px`,n.style.height=`${t}px`,bs?bs.postMessage({type:`resize`,width:e,height:t,dpr:Cs}):(n.width=e*Cs,n.height=t*Cs,Ss&&(Ss.resetTransform(),Ss.scale(Cs,Cs)),Ps()),s=!1}))});let c=window.scrollX,l=window.scrollY,u=!1;return window.addEventListener(`scroll`,()=>{u||(u=!0,setTimeout(()=>{let{scrollX:e,scrollY:t}=window,n=e-c,r=t-l;c=e,l=t,bs?bs.postMessage({type:`scroll`,deltaX:n,deltaY:r}):requestAnimationFrame(gs.bind(null,Ts,n,r)),u=!1},32))}),setInterval(()=>{Ds.size&&requestAnimationFrame(Ns)},32),t.appendChild(n),e},Rs=()=>globalThis.__REACT_SCAN_STOP__,zs=()=>{let e=document.querySelector(`[data-react-scan]`);e&&e.remove()},Bs=e=>{if(ue(e)&&X.options.value.showToolbar!==!1&&Y.inspectState.value.kind===`focused`){let t=e,{selfTime:n}=be(e),r=Ce(e.type),i=ke(t),a=Y.reportData.get(i),o=a?.count??0,s=a?.time??0,c=[],l=Y.changesListeners.get(ke(e));if(l?.length){let t=Ka(e).map(e=>({type:1,name:e.name,value:e.value,prevValue:e.prevValue,unstable:!1})),n=Po(e),r=zo(e).map(e=>({name:e.name,type:4,value:e.value,contextType:e.contextType}));l.forEach(e=>{e({propsChanges:t,stateChanges:n,contextChanges:r})})}let u={count:o+1,time:s+n||0,renders:[],displayName:r,type:Se(e.type)||null,changes:c};Y.reportData.set(i,u),Vs=!0}},Vs=!1,Hs,Us=()=>{clearInterval(Hs),Hs=setInterval(()=>{Vs&&=(Y.lastReportTime.value=Date.now(),!1)},50)},Ws=e=>!rd.has(e.memoizedProps),Gs=!1,Ks=e=>{if(Rs()||Gs)return;Gs=!0;let t,n=!1,r=()=>{n||(t&&cancelAnimationFrame(t),t=requestAnimationFrame(()=>{n=!0;let t=Ls();t&&document.documentElement.appendChild(t),e()}))};X.instrumentation=Qo(`react-scan-devtools-0.1.0`,{onCommitStart:()=>{X.options.value.onCommitStart?.()},onActive:(()=>{let e=!1;return()=>{Rs()||e||(e=!0,r(),window.__REACT_SCAN_EXTENSION__||(globalThis.__REACT_SCAN__={ReactScanInternals:X}),Us(),es())}})(),onError:()=>{},isValidFiber:Ws,onRender:(e,t)=>{ue(e)&&Y.interactionListeningForRenders?.(e,t);let n=X.instrumentation?.isPaused.value,r=Y.inspectState.value.kind===`inspect-off`||Y.inspectState.value.kind===`uninitialized`;n&&r||(n||Os(e),X.options.value.log&&$o(t),Y.inspectState.value.kind===`focused`&&(qi.value=Date.now()),r||Bs(e),X.options.value.onRender?.(e,t))},onCommitFinish:()=>{r(),X.options.value.onCommitFinish?.()},onPostCommitFiberRoot(){r()},trackChanges:!1})},qs=`*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */
  -moz-tab-size: 4; /* 3 */
  -o-tab-size: 4;
     tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  -webkit-text-decoration: underline dotted;
          text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::-moz-placeholder, textarea::-moz-placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.\\!container {
  width: 100% !important;
}
.container {
  width: 100%;
}
@media (min-width: 640px) {

  .\\!container {
    max-width: 640px !important;
  }

  .container {
    max-width: 640px;
  }
}
@media (min-width: 768px) {

  .\\!container {
    max-width: 768px !important;
  }

  .container {
    max-width: 768px;
  }
}
@media (min-width: 1024px) {

  .\\!container {
    max-width: 1024px !important;
  }

  .container {
    max-width: 1024px;
  }
}
@media (min-width: 1280px) {

  .\\!container {
    max-width: 1280px !important;
  }

  .container {
    max-width: 1280px;
  }
}
@media (min-width: 1536px) {

  .\\!container {
    max-width: 1536px !important;
  }

  .container {
    max-width: 1536px;
  }
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.sticky {
  position: sticky;
}
.inset-0 {
  inset: 0px;
}
.inset-x-1 {
  left: 4px;
  right: 4px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-right-1 {
  right: -4px;
}
.-right-2\\.5 {
  right: -10px;
}
.-top-1 {
  top: -4px;
}
.-top-2\\.5 {
  top: -10px;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-4 {
  bottom: 16px;
}
.left-0 {
  left: 0px;
}
.left-3 {
  left: 12px;
}
.right-0 {
  right: 0px;
}
.right-0\\.5 {
  right: 2px;
}
.right-2 {
  right: 8px;
}
.right-4 {
  right: 16px;
}
.top-0 {
  top: 0px;
}
.top-0\\.5 {
  top: 2px;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 8px;
}
.z-10 {
  z-index: 10;
}
.z-100 {
  z-index: 100;
}
.z-50 {
  z-index: 50;
}
.z-\\[124124124124\\] {
  z-index: 124124124124;
}
.z-\\[214748365\\] {
  z-index: 214748365;
}
.z-\\[214748367\\] {
  z-index: 214748367;
}
.m-\\[2px\\] {
  margin: 2px;
}
.mx-0\\.5 {
  margin-left: 2px;
  margin-right: 2px;
}
.\\!ml-0 {
  margin-left: 0px !important;
}
.mb-1\\.5 {
  margin-bottom: 6px;
}
.mb-2 {
  margin-bottom: 8px;
}
.mb-3 {
  margin-bottom: 12px;
}
.mb-4 {
  margin-bottom: 16px;
}
.mb-px {
  margin-bottom: 1px;
}
.ml-1 {
  margin-left: 4px;
}
.ml-1\\.5 {
  margin-left: 6px;
}
.ml-auto {
  margin-left: auto;
}
.mr-0\\.5 {
  margin-right: 2px;
}
.mr-1 {
  margin-right: 4px;
}
.mr-1\\.5 {
  margin-right: 6px;
}
.mr-16 {
  margin-right: 64px;
}
.mr-auto {
  margin-right: auto;
}
.mt-0\\.5 {
  margin-top: 2px;
}
.mt-1 {
  margin-top: 4px;
}
.mt-4 {
  margin-top: 16px;
}
.block {
  display: block;
}
.inline {
  display: inline;
}
.flex {
  display: flex;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1 {
  height: 4px;
}
.h-1\\.5 {
  height: 6px;
}
.h-10 {
  height: 40px;
}
.h-12 {
  height: 48px;
}
.h-4 {
  height: 16px;
}
.h-4\\/5 {
  height: 80%;
}
.h-6 {
  height: 24px;
}
.h-7 {
  height: 28px;
}
.h-8 {
  height: 32px;
}
.h-\\[150px\\] {
  height: 150px;
}
.h-\\[235px\\] {
  height: 235px;
}
.h-\\[28px\\] {
  height: 28px;
}
.h-\\[48px\\] {
  height: 48px;
}
.h-\\[50px\\] {
  height: 50px;
}
.h-\\[calc\\(100\\%-150px\\)\\] {
  height: calc(100% - 150px);
}
.h-\\[calc\\(100\\%-200px\\)\\] {
  height: calc(100% - 200px);
}
.h-\\[calc\\(100\\%-25px\\)\\] {
  height: calc(100% - 25px);
}
.h-\\[calc\\(100\\%-40px\\)\\] {
  height: calc(100% - 40px);
}
.h-\\[calc\\(100\\%-48px\\)\\] {
  height: calc(100% - 48px);
}
.h-fit {
  height: -moz-fit-content;
  height: fit-content;
}
.h-full {
  height: 100%;
}
.h-screen {
  height: 100vh;
}
.max-h-0 {
  max-height: 0px;
}
.max-h-40 {
  max-height: 160px;
}
.max-h-9 {
  max-height: 36px;
}
.min-h-9 {
  min-height: 36px;
}
.min-h-\\[48px\\] {
  min-height: 48px;
}
.min-h-fit {
  min-height: -moz-fit-content;
  min-height: fit-content;
}
.w-1 {
  width: 4px;
}
.w-1\\/2 {
  width: 50%;
}
.w-1\\/3 {
  width: 33.333333%;
}
.w-2\\/4 {
  width: 50%;
}
.w-3 {
  width: 12px;
}
.w-4 {
  width: 16px;
}
.w-4\\/5 {
  width: 80%;
}
.w-6 {
  width: 24px;
}
.w-80 {
  width: 320px;
}
.w-\\[20px\\] {
  width: 20px;
}
.w-\\[72px\\] {
  width: 72px;
}
.w-\\[90\\%\\] {
  width: 90%;
}
.w-\\[calc\\(100\\%-200px\\)\\] {
  width: calc(100% - 200px);
}
.w-fit {
  width: -moz-fit-content;
  width: fit-content;
}
.w-full {
  width: 100%;
}
.w-px {
  width: 1px;
}
.w-screen {
  width: 100vw;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-\\[200px\\] {
  min-width: 200px;
}
.min-w-fit {
  min-width: -moz-fit-content;
  min-width: fit-content;
}
.max-w-md {
  max-width: 448px;
}
.flex-1 {
  flex: 1 1 0%;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-\\[200\\%\\] {
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-rotate-90 {
  --tw-rotate: -90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-0 {
  --tw-rotate: 0deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
.animate-fade-in {
  animation: fadeIn ease-in forwards;
}
.cursor-default {
  cursor: default;
}
.cursor-e-resize {
  cursor: e-resize;
}
.cursor-ew-resize {
  cursor: ew-resize;
}
.cursor-move {
  cursor: move;
}
.cursor-nesw-resize {
  cursor: nesw-resize;
}
.cursor-ns-resize {
  cursor: ns-resize;
}
.cursor-nwse-resize {
  cursor: nwse-resize;
}
.cursor-pointer {
  cursor: pointer;
}
.cursor-w-resize {
  cursor: w-resize;
}
.select-none {
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
}
.resize {
  resize: both;
}
.appearance-none {
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}
.flex-col {
  flex-direction: column;
}
.items-start {
  align-items: flex-start;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.items-stretch {
  align-items: stretch;
}
.justify-start {
  justify-content: flex-start;
}
.justify-end {
  justify-content: flex-end;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-0\\.5 {
  gap: 2px;
}
.gap-1 {
  gap: 4px;
}
.gap-1\\.5 {
  gap: 6px;
}
.gap-2 {
  gap: 8px;
}
.gap-4 {
  gap: 16px;
}
.gap-x-0\\.5 {
  -moz-column-gap: 2px;
       column-gap: 2px;
}
.gap-x-1 {
  -moz-column-gap: 4px;
       column-gap: 4px;
}
.gap-x-1\\.5 {
  -moz-column-gap: 6px;
       column-gap: 6px;
}
.gap-x-2 {
  -moz-column-gap: 8px;
       column-gap: 8px;
}
.gap-x-3 {
  -moz-column-gap: 12px;
       column-gap: 12px;
}
.gap-x-4 {
  -moz-column-gap: 16px;
       column-gap: 16px;
}
.gap-y-0\\.5 {
  row-gap: 2px;
}
.gap-y-1 {
  row-gap: 4px;
}
.gap-y-2 {
  row-gap: 8px;
}
.gap-y-4 {
  row-gap: 16px;
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(6px * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(6px * var(--tw-space-y-reverse));
}
.divide-y > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-y-reverse: 0;
  border-top-width: calc(1px * calc(1 - var(--tw-divide-y-reverse)));
  border-bottom-width: calc(1px * var(--tw-divide-y-reverse));
}
.divide-zinc-800 > :not([hidden]) ~ :not([hidden]) {
  --tw-divide-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-divide-opacity, 1));
}
.place-self-center {
  place-self: center;
}
.self-end {
  align-self: flex-end;
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.\\!overflow-visible {
  overflow: visible !important;
}
.overflow-x-auto {
  overflow-x: auto;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.truncate {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.whitespace-pre-wrap {
  white-space: pre-wrap;
}
.text-wrap {
  text-wrap: wrap;
}
.break-words {
  overflow-wrap: break-word;
}
.break-all {
  word-break: break-all;
}
.rounded {
  border-radius: 4px;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 8px;
}
.rounded-md {
  border-radius: 6px;
}
.rounded-sm {
  border-radius: 2px;
}
.rounded-l-md {
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.rounded-l-sm {
  border-top-left-radius: 2px;
  border-bottom-left-radius: 2px;
}
.rounded-r-md {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
}
.rounded-r-sm {
  border-top-right-radius: 2px;
  border-bottom-right-radius: 2px;
}
.rounded-t-lg {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}
.rounded-t-sm {
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.rounded-bl-lg {
  border-bottom-left-radius: 8px;
}
.rounded-br-lg {
  border-bottom-right-radius: 8px;
}
.rounded-tl-lg {
  border-top-left-radius: 8px;
}
.rounded-tr-lg {
  border-top-right-radius: 8px;
}
.border {
  border-width: 1px;
}
.border-4 {
  border-width: 4px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-l-0 {
  border-left-width: 0px;
}
.border-l-1 {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-none {
  border-style: none;
}
.\\!border-red-500 {
  --tw-border-opacity: 1 !important;
  border-color: rgb(239 68 68 / var(--tw-border-opacity, 1)) !important;
}
.border-\\[\\#1e1e1e\\] {
  --tw-border-opacity: 1;
  border-color: rgb(30 30 30 / var(--tw-border-opacity, 1));
}
.border-\\[\\#222\\] {
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
}
.border-\\[\\#27272A\\] {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.border-\\[\\#333\\] {
  --tw-border-opacity: 1;
  border-color: rgb(51 51 51 / var(--tw-border-opacity, 1));
}
.border-transparent {
  border-color: transparent;
}
.border-zinc-800 {
  --tw-border-opacity: 1;
  border-color: rgb(39 39 42 / var(--tw-border-opacity, 1));
}
.bg-\\[\\#0A0A0A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#141414\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 20 20 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#18181B\\]\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.bg-\\[\\#1D3A66\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(29 58 102 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1E1E1E\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1a2a1a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(26 42 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#1e1e1e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(30 30 30 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#214379d4\\] {
  background-color: #214379d4;
}
.bg-\\[\\#27272A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#2a1515\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(42 21 21 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#412162\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(65 33 98 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#44444a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(68 68 74 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#4b4b4b\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(75 75 75 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#5f3f9a\\]\\/40 {
  background-color: rgb(95 63 154 / 0.4);
}
.bg-\\[\\#6a369e\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 54 158 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#7521c8\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(117 33 200 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#8e61e3\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#EFD81A\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(239 216 26 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b77116\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(183 113 22 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#b94040\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(185 64 64 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#d36cff\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(211 108 255 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#efd81a6b\\] {
  background-color: #efd81a6b;
}
.bg-black {
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}
.bg-black\\/40 {
  background-color: rgb(0 0 0 / 0.4);
}
.bg-gray-200 {
  --tw-bg-opacity: 1;
  background-color: rgb(229 231 235 / var(--tw-bg-opacity, 1));
}
.bg-green-500\\/50 {
  background-color: rgb(34 197 94 / 0.5);
}
.bg-green-500\\/60 {
  background-color: rgb(34 197 94 / 0.6);
}
.bg-neutral-700 {
  --tw-bg-opacity: 1;
  background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
}
.bg-purple-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(168 85 247 / var(--tw-bg-opacity, 1));
}
.bg-purple-500\\/90 {
  background-color: rgb(168 85 247 / 0.9);
}
.bg-purple-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(107 33 168 / var(--tw-bg-opacity, 1));
}
.bg-red-500 {
  --tw-bg-opacity: 1;
  background-color: rgb(239 68 68 / var(--tw-bg-opacity, 1));
}
.bg-red-500\\/90 {
  background-color: rgb(239 68 68 / 0.9);
}
.bg-red-950\\/50 {
  background-color: rgb(69 10 10 / 0.5);
}
.bg-transparent {
  background-color: transparent;
}
.bg-white {
  --tw-bg-opacity: 1;
  background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
}
.bg-yellow-300 {
  --tw-bg-opacity: 1;
  background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
}
.bg-zinc-800 {
  --tw-bg-opacity: 1;
  background-color: rgb(39 39 42 / var(--tw-bg-opacity, 1));
}
.bg-zinc-900\\/30 {
  background-color: rgb(24 24 27 / 0.3);
}
.bg-zinc-900\\/50 {
  background-color: rgb(24 24 27 / 0.5);
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 4px;
}
.p-2 {
  padding: 8px;
}
.p-3 {
  padding: 12px;
}
.p-4 {
  padding: 16px;
}
.p-5 {
  padding: 20px;
}
.p-6 {
  padding: 24px;
}
.px-1 {
  padding-left: 4px;
  padding-right: 4px;
}
.px-1\\.5 {
  padding-left: 6px;
  padding-right: 6px;
}
.px-2 {
  padding-left: 8px;
  padding-right: 8px;
}
.px-2\\.5 {
  padding-left: 10px;
  padding-right: 10px;
}
.px-3 {
  padding-left: 12px;
  padding-right: 12px;
}
.px-4 {
  padding-left: 16px;
  padding-right: 16px;
}
.py-0\\.5 {
  padding-top: 2px;
  padding-bottom: 2px;
}
.py-1 {
  padding-top: 4px;
  padding-bottom: 4px;
}
.py-1\\.5 {
  padding-top: 6px;
  padding-bottom: 6px;
}
.py-2 {
  padding-top: 8px;
  padding-bottom: 8px;
}
.py-3 {
  padding-top: 12px;
  padding-bottom: 12px;
}
.py-4 {
  padding-top: 16px;
  padding-bottom: 16px;
}
.py-\\[1px\\] {
  padding-top: 1px;
  padding-bottom: 1px;
}
.py-\\[3px\\] {
  padding-top: 3px;
  padding-bottom: 3px;
}
.py-\\[5px\\] {
  padding-top: 5px;
  padding-bottom: 5px;
}
.pb-2 {
  padding-bottom: 8px;
}
.pl-1 {
  padding-left: 4px;
}
.pl-2 {
  padding-left: 8px;
}
.pl-2\\.5 {
  padding-left: 10px;
}
.pl-3 {
  padding-left: 12px;
}
.pl-5 {
  padding-left: 20px;
}
.pl-6 {
  padding-left: 24px;
}
.pr-1 {
  padding-right: 4px;
}
.pr-1\\.5 {
  padding-right: 6px;
}
.pr-2 {
  padding-right: 8px;
}
.pr-2\\.5 {
  padding-right: 10px;
}
.pt-0 {
  padding-top: 0px;
}
.pt-2 {
  padding-top: 8px;
}
.pt-5 {
  padding-top: 20px;
}
.text-left {
  text-align: left;
}
.font-mono {
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-\\[13px\\] {
  font-size: 13px;
}
.text-\\[14px\\] {
  font-size: 14px;
}
.text-\\[17px\\] {
  font-size: 17px;
}
.text-\\[8px\\] {
  font-size: 8px;
}
.text-sm {
  font-size: 14px;
  line-height: 20px;
}
.text-xs {
  font-size: 12px;
  line-height: 16px;
}
.font-bold {
  font-weight: 700;
}
.font-medium {
  font-weight: 500;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.capitalize {
  text-transform: capitalize;
}
.italic {
  font-style: italic;
}
.leading-6 {
  line-height: 24px;
}
.leading-none {
  line-height: 1;
}
.tracking-wide {
  letter-spacing: 0.025em;
}
.text-\\[\\#4ade80\\] {
  --tw-text-opacity: 1;
  color: rgb(74 222 128 / var(--tw-text-opacity, 1));
}
.text-\\[\\#5a5a5a\\] {
  --tw-text-opacity: 1;
  color: rgb(90 90 90 / var(--tw-text-opacity, 1));
}
.text-\\[\\#65656D\\] {
  --tw-text-opacity: 1;
  color: rgb(101 101 109 / var(--tw-text-opacity, 1));
}
.text-\\[\\#666\\] {
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6E6E77\\] {
  --tw-text-opacity: 1;
  color: rgb(110 110 119 / var(--tw-text-opacity, 1));
}
.text-\\[\\#6F6F78\\] {
  --tw-text-opacity: 1;
  color: rgb(111 111 120 / var(--tw-text-opacity, 1));
}
.text-\\[\\#7346a0\\] {
  --tw-text-opacity: 1;
  color: rgb(115 70 160 / var(--tw-text-opacity, 1));
}
.text-\\[\\#737373\\] {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-\\[\\#888\\] {
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}
.text-\\[\\#8E61E3\\] {
  --tw-text-opacity: 1;
  color: rgb(142 97 227 / var(--tw-text-opacity, 1));
}
.text-\\[\\#999\\] {
  --tw-text-opacity: 1;
  color: rgb(153 153 153 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A1A1AA\\] {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-\\[\\#A855F7\\] {
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
}
.text-\\[\\#E4E4E7\\] {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-\\[\\#d36cff\\] {
  --tw-text-opacity: 1;
  color: rgb(211 108 255 / var(--tw-text-opacity, 1));
}
.text-\\[\\#f87171\\] {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-black {
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity, 1));
}
.text-gray-100 {
  --tw-text-opacity: 1;
  color: rgb(243 244 246 / var(--tw-text-opacity, 1));
}
.text-gray-300 {
  --tw-text-opacity: 1;
  color: rgb(209 213 219 / var(--tw-text-opacity, 1));
}
.text-gray-400 {
  --tw-text-opacity: 1;
  color: rgb(156 163 175 / var(--tw-text-opacity, 1));
}
.text-gray-500 {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
}
.text-green-500 {
  --tw-text-opacity: 1;
  color: rgb(34 197 94 / var(--tw-text-opacity, 1));
}
.text-neutral-300 {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}
.text-neutral-400 {
  --tw-text-opacity: 1;
  color: rgb(163 163 163 / var(--tw-text-opacity, 1));
}
.text-neutral-500 {
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}
.text-purple-400 {
  --tw-text-opacity: 1;
  color: rgb(192 132 252 / var(--tw-text-opacity, 1));
}
.text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}
.text-red-400 {
  --tw-text-opacity: 1;
  color: rgb(248 113 113 / var(--tw-text-opacity, 1));
}
.text-red-500 {
  --tw-text-opacity: 1;
  color: rgb(239 68 68 / var(--tw-text-opacity, 1));
}
.text-white {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}
.text-white\\/30 {
  color: rgb(255 255 255 / 0.3);
}
.text-white\\/70 {
  color: rgb(255 255 255 / 0.7);
}
.text-yellow-300 {
  --tw-text-opacity: 1;
  color: rgb(253 224 71 / var(--tw-text-opacity, 1));
}
.text-yellow-500 {
  --tw-text-opacity: 1;
  color: rgb(234 179 8 / var(--tw-text-opacity, 1));
}
.text-zinc-200 {
  --tw-text-opacity: 1;
  color: rgb(228 228 231 / var(--tw-text-opacity, 1));
}
.text-zinc-400 {
  --tw-text-opacity: 1;
  color: rgb(161 161 170 / var(--tw-text-opacity, 1));
}
.text-zinc-500 {
  --tw-text-opacity: 1;
  color: rgb(113 113 122 / var(--tw-text-opacity, 1));
}
.text-zinc-600 {
  --tw-text-opacity: 1;
  color: rgb(82 82 91 / var(--tw-text-opacity, 1));
}
.opacity-0 {
  opacity: 0;
}
.opacity-100 {
  opacity: 1;
}
.opacity-50 {
  opacity: 0.5;
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline {
  outline-style: solid;
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-white\\/\\[0\\.08\\] {
  --tw-ring-color: rgb(255 255 255 / 0.08);
}
.blur {
  --tw-blur: blur(8px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.\\!filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow) !important;
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  -webkit-backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, -webkit-backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter, -webkit-backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[border-radius\\] {
  transition-property: border-radius;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[color\\2c transform\\] {
  transition-property: color,transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[max-height\\] {
  transition-property: max-height;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-\\[opacity\\] {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-none {
  transition-property: none;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.delay-0 {
  transition-delay: 0s;
}
.delay-150 {
  transition-delay: 150ms;
}
.delay-300 {
  transition-delay: 300ms;
}
.\\!duration-0 {
  transition-duration: 0s !important;
}
.duration-0 {
  transition-duration: 0s;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.ease-\\[cubic-bezier\\(0\\.25\\2c 0\\.1\\2c 0\\.25\\2c 1\\)\\] {
  transition-timing-function: cubic-bezier(0.25,0.1,0.25,1);
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.ease-out {
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
.animation-duration-300 {
  animation-duration: .3s;
}
.animation-delay-300 {
  animation-delay: .3s;
}
.\\[touch-action\\:none\\] {
  touch-action: none;
}

* {
  outline: none !important;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* WebKit (Chrome, Safari, Edge) specific scrollbar styles */
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(255, 255, 255, 0.3);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: rgba(255, 255, 255, 0.4);
  }

  &::-webkit-scrollbar-corner {
    background: transparent;
  }
}

@-moz-document url-prefix() {
  * {
    scrollbar-width: thin;
    scrollbar-color: rgba(255, 255, 255, 0.4) transparent;
    scrollbar-width: 6px;
  }
}

button:hover {
  background-image: none;
}

button {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  cursor: pointer;
}

input {
  outline: 2px solid transparent;
  outline-offset: 2px;
  border-style: none;
  background-color: transparent;
  background-image: none;
}

input::-moz-placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input::placeholder {
  font-size: 12px;
  line-height: 16px;
  font-style: italic;
  --tw-text-opacity: 1;
  color: rgb(115 115 115 / var(--tw-text-opacity, 1));
}

input:-moz-placeholder {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

input:placeholder-shown {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

svg {
  height: auto;
  width: auto;
  pointer-events: none;
}

/*
  Using CSS content with data attributes is more performant than:
  1. React re-renders with JSX text content
  2. Direct DOM manipulation methods:
     - element.textContent (creates/updates text nodes, triggers repaint)
     - element.innerText (triggers reflow by computing styles & layout)
     - element.innerHTML (heavy parsing, triggers reflow, security risks)
  3. Multiple data attributes with complex CSS concatenation

  This approach:
  - Avoids React reconciliation
  - Uses browser's native CSS engine (optimized content updates)
  - Minimizes main thread work
  - Reduces DOM operations
  - Avoids forced reflows (layout recalculation)
  - Only triggers necessary repaints
  - Keeps pseudo-element updates in render layer
*/
.with-data-text {
  overflow: hidden;
  &::before {
    content: attr(data-text);
  }
  &::before {
    display: block;
  }
  &::before {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

#react-scan-toolbar {
  position: fixed;
  left: 0px;
  top: 0px;
  display: flex;
  flex-direction: column;
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;
  font-size: 13px;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  -webkit-user-select: none;
     -moz-user-select: none;
          user-select: none;
  cursor: move;
  opacity: 0;
  z-index: 2147483678;
}

@keyframes fadeIn {

  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

#react-scan-toolbar {
  animation: fadeIn ease-in forwards;
  animation-duration: .3s;
  animation-delay: .3s;
  --tw-shadow: 0 4px 12px rgba(0,0,0,0.2);
  --tw-shadow-colored: 0 4px 12px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
  place-self: start;

  will-change: transform;
  backface-visibility: hidden;
}

.button {
  &:hover {
    background: rgba(255, 255, 255, 0.1);
  }

  &:active {
    background: rgba(255, 255, 255, 0.15);
  }
}

.resize-line-wrapper {
  position: absolute;
  overflow: hidden;
}

.resize-line {
  position: absolute;
  inset: 0px;
  overflow: hidden;
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  svg {
    position: absolute;
  }

  svg {
    top: 50%;
  }

  svg {
    left: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-right,
.resize-left {
  top: 0px;
  bottom: 0px;
  width: 24px;
  cursor: ew-resize;

  .resize-line-wrapper {
    top: 0px;
    bottom: 0px;
  }

  .resize-line-wrapper {
    width: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-x: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-right {
  right: 0px;
  --tw-translate-x: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    right: 0px;
  }
  .resize-line {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-left {
  left: 0px;
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    left: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-top,
.resize-bottom {
  left: 0px;
  right: 0px;
  height: 24px;
  cursor: ns-resize;

  .resize-line-wrapper {
    left: 0px;
    right: 0px;
  }

  .resize-line-wrapper {
    height: 50%;
  }

  &:hover {
    .resize-line {
      --tw-translate-y: 0px;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }
}
.resize-top {
  top: 0px;
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    top: 0px;
  }
  .resize-line {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.resize-bottom {
  bottom: 0px;
  --tw-translate-y: 50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));

  .resize-line-wrapper {
    bottom: 0px;
  }
  .resize-line {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }
  .resize-line {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 8px;
  min-height: 36px;
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  overflow: hidden;
  white-space: nowrap;
}

.react-scan-replay-button,
.react-scan-close-button {
  display: flex;
  align-items: center;
  padding: 4px;
  min-width: -moz-fit-content;
  min-width: fit-content;
  border-radius: 4px;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-replay-button {
  position: relative;
  overflow: hidden;
  background-color: rgb(168 85 247 / 0.5) !important;

  &:hover {
    background-color: rgb(168 85 247 / 0.25);
  }

  &.disabled {
    opacity: 0.5;
  }

  &.disabled {
    pointer-events: none;
  }

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    inset: 0px;
  }

  &:before {
    --tw-translate-x: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    animation: shimmer 2s infinite;
    background: linear-gradient(
      to right,
      transparent,
      rgba(142, 97, 227, 0.3),
      transparent
    );
  }
}

.react-scan-close-button {
  background-color: rgb(255 255 255 / 0.1);

  &:hover {
    background-color: rgb(255 255 255 / 0.15);
  }
}

@keyframes shimmer {
  100% {
    --tw-translate-x: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-section-header {
  position: sticky;
  z-index: 100;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 12px;
  padding-right: 12px;
  height: 28px;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
  border-bottom-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(34 34 34 / var(--tw-border-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(10 10 10 / var(--tw-bg-opacity, 1));
}

.react-scan-section {
  display: flex;
  flex-direction: column;
  padding-left: 8px;
  padding-right: 8px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));
}

.react-scan-section::before {
  --tw-text-opacity: 1;
  color: rgb(107 114 128 / var(--tw-text-opacity, 1));
  --tw-content: attr(data-section);
  content: var(--tw-content);
}

.react-scan-section {
  font-size: 12px;
  line-height: 16px;

  > .react-scan-property {
    margin-left: -14px;
  }
}

.react-scan-property {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-left: 32px;
  border-left-width: 1px;
  border-color: transparent;
  overflow: hidden;
}

.react-scan-property-content {
  display: flex;
  flex: 1 1 0%;
  flex-direction: column;
  min-height: 28px;
  max-width: 100%;
  overflow: hidden;
}

.react-scan-string {
  color: #9ecbff;
}

.react-scan-number {
  color: #79c7ff;
}

.react-scan-boolean {
  color: #56b6c2;
}

.react-scan-key {
  width: -moz-fit-content;
  width: fit-content;
  max-width: 240px;
  white-space: nowrap;
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.react-scan-input {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
  --tw-bg-opacity: 1;
  background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
}

@keyframes blink {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}

.react-scan-arrow {
  position: absolute;
  top: 0px;
  left: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  height: 28px;
  width: 24px;
  --tw-translate-x: -100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  z-index: 10;

  > svg {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }
}

.react-scan-nested {
  position: relative;
  overflow: hidden;

  &:before {
    content: "";
  }

  &:before {
    position: absolute;
  }

  &:before {
    top: 0px;
  }

  &:before {
    left: 0px;
  }

  &:before {
    height: 100%;
  }

  &:before {
    width: 1px;
  }

  &:before {
    background-color: rgb(107 114 128 / 0.3);
  }
}

.react-scan-settings {
  position: absolute;
  inset: 0px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
  padding-left: 16px;
  padding-right: 16px;
  --tw-text-opacity: 1;
  color: rgb(136 136 136 / var(--tw-text-opacity, 1));

  > div {
    display: flex;
  }

  > div {
    align-items: center;
  }

  > div {
    justify-content: space-between;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }
}

.react-scan-preview-line {
  position: relative;
  display: flex;
  min-height: 28px;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
}

.react-scan-flash-overlay {
  position: absolute;
  inset: 0px;
  opacity: 0;
  z-index: 50;
  pointer-events: none;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
  mix-blend-mode: multiply;
  background-color: rgb(168 85 247 / 0.9);
}

.react-scan-toggle {
  position: relative;
  display: inline-flex;
  height: 24px;
  width: 40px;

  input {
    position: absolute;
  }

  input {
    inset: 0px;
  }

  input {
    z-index: 20;
  }

  input {
    opacity: 0;
  }

  input {
    cursor: pointer;
  }

  input {
    height: 100%;
  }

  input {
    width: 100%;
  }

  input:checked {
    + div {
      --tw-bg-opacity: 1;
      background-color: rgb(95 63 154 / var(--tw-bg-opacity, 1));
    }
    + div {

      &::before {
        --tw-translate-x: 100%;
        transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
      }

      &::before {
        left: auto;
      }

      &::before {
        --tw-border-opacity: 1;
        border-color: rgb(95 63 154 / var(--tw-border-opacity, 1));
      }
    }
  }

  > div {
    position: absolute;
  }

  > div {
    inset: 4px;
  }

  > div {
    --tw-bg-opacity: 1;
    background-color: rgb(64 64 64 / var(--tw-bg-opacity, 1));
  }

  > div {
    border-radius: 9999px;
  }

  > div {
    pointer-events: none;
  }

  > div {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &:before {
      --tw-content: '';
      content: var(--tw-content);
    }

    &:before {
      position: absolute;
    }

    &:before {
      top: 50%;
    }

    &:before {
      left: 0px;
    }

    &:before {
      --tw-translate-y: -50%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }

    &:before {
      height: 16px;
    }

    &:before {
      width: 16px;
    }

    &:before {
      --tw-bg-opacity: 1;
      background-color: rgb(255 255 255 / var(--tw-bg-opacity, 1));
    }

    &:before {
      border-width: 2px;
    }

    &:before {
      --tw-border-opacity: 1;
      border-color: rgb(64 64 64 / var(--tw-border-opacity, 1));
    }

    &:before {
      border-radius: 9999px;
    }

    &:before {
      --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
      --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
      box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    }

    &:before {
      transition-property: all;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 150ms;
    }

    &:before {
      transition-duration: 300ms;
    }
  }
}

.react-scan-flash-active {
  opacity: 0.4;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

.react-scan-inspector-overlay {
  display: flex;
  flex-direction: column;
  opacity: 0;
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  will-change: opacity;

  &.fade-out {
    opacity: 0;
  }

  &.fade-in {
    opacity: 1;
  }
}

.react-scan-what-changed {
  ul {
    list-style-type: disc;
  }
  ul {
    padding-left: 16px;
  }

  li {
    white-space: nowrap;
  }

  li {
    > div {
      display: flex;
    }
    > div {
      align-items: center;
    }
    > div {
      justify-content: space-between;
    }
    > div {
      -moz-column-gap: 8px;
           column-gap: 8px;
    }
  }
}

.count-badge {
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 4px;
  font-size: 12px;
  line-height: 16px;
  font-weight: 500;
  --tw-numeric-spacing: tabular-nums;
  font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  --tw-text-opacity: 1;
  color: rgb(168 85 247 / var(--tw-text-opacity, 1));
  background-color: rgb(168 85 247 / 0.1);
  transform-origin: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-delay: 150ms;
  transition-duration: 300ms;
}

@keyframes countFlash {

  0% {
    background-color: rgba(168, 85, 247, 0.3);
    transform: scale(1.05);
  }

  100% {
    background-color: rgba(168, 85, 247, 0.1);
    transform: scale(1);
  }
}

.count-flash {
  animation: countFlash .3s ease-out forwards;
}

@keyframes countFlashShake {

  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(-5px);
  }

  50% {
    transform: translateX(5px) scale(1.1);
  }

  75% {
    transform: translateX(-5px);
  }

  100% {
    transform: translateX(0);
  }
}

.count-flash-white {
  animation: countFlashShake .3s ease-out forwards;
  transition-delay: 500ms !important;
}

.change-scope {
  display: flex;
  align-items: center;
  -moz-column-gap: 4px;
       column-gap: 4px;
  --tw-text-opacity: 1;
  color: rgb(102 102 102 / var(--tw-text-opacity, 1));
  font-size: 12px;
  line-height: 16px;
  font-family: Menlo, Consolas, Monaco, Liberation Mono, Lucida Console, monospace;

  > div {
    padding-left: 6px;
    padding-right: 6px;
  }

  > div {
    padding-top: 2px;
    padding-bottom: 2px;
  }

  > div {
    border-radius: 4px;
  }

  > div {
    font-size: 12px;
    line-height: 16px;
  }

  > div {
    font-weight: 500;
  }

  > div {
    --tw-numeric-spacing: tabular-nums;
    font-variant-numeric: var(--tw-ordinal) var(--tw-slashed-zero) var(--tw-numeric-figure) var(--tw-numeric-spacing) var(--tw-numeric-fraction);
  }

  > div {
    transform-origin: center;
  }

  > div {
    transition-property: all;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > div {
    transition-delay: 150ms;
  }

  > div {
    transition-duration: 300ms;
  }

  > div {

    &[data-flash="true"] {
      background-color: rgb(168 85 247 / 0.1);
    }

    &[data-flash="true"] {
      --tw-text-opacity: 1;
      color: rgb(168 85 247 / var(--tw-text-opacity, 1));
    }
  }
}

.react-scan-slider {
  position: relative;
  min-height: 24px;

  > input {
    position: absolute;
  }

  > input {
    inset: 0px;
  }

  > input {
    opacity: 0;
  }

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    top: 50%;
  }

  &:before {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &:before {
    height: 6px;
  }

  &:before {
    background-color: rgb(142 97 227 / 0.4);
  }

  &:before {
    border-radius: 8px;
  }

  &:before {
    pointer-events: none;
  }

  &:after {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:after {
    position: absolute;
  }

  &:after {
    left: 0px;
    right: 0px;
  }

  &:after {
    top: -8px;
    bottom: -8px;
  }

  &:after {
    z-index: -10;
  }

  span {
    position: absolute;
  }

  span {
    left: 0px;
  }

  span {
    top: 50%;
  }

  span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  span {
    height: 10px;
  }

  span {
    width: 10px;
  }

  span {
    border-radius: 8px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(142 97 227 / var(--tw-bg-opacity, 1));
  }

  span {
    pointer-events: none;
  }

  span {
    transition-property: transform;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  span {
    transition-duration: 75ms;
  }
}

.resize-v-line {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4px;
  max-width: 4px;
  height: 100%;
  width: 100%;
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:hover,
  &:active {
    > span {
      --tw-bg-opacity: 1;
      background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
    }

    svg {
      opacity: 1;
    }
  }

  &::before {
    --tw-content: "";
    content: var(--tw-content);
  }

  &::before {
    position: absolute;
  }

  &::before {
    inset: 0px;
  }

  &::before {
    left: 50%;
  }

  &::before {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &::before {
    width: 1px;
  }

  &::before {
    --tw-bg-opacity: 1;
    background-color: rgb(34 34 34 / var(--tw-bg-opacity, 1));
  }

  &::before {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  > span {
    position: absolute;
  }

  > span {
    left: 50%;
  }

  > span {
    top: 50%;
  }

  > span {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  > span {
    height: 18px;
  }

  > span {
    width: 6px;
  }

  > span {
    border-radius: 4px;
  }

  > span {
    transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    position: absolute;
  }

  svg {
    left: 50%;
  }

  svg {
    top: 50%;
  }

  svg {
    --tw-translate-x: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-translate-y: -50%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-rotate: 90deg;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  svg {
    --tw-text-opacity: 1;
    color: rgb(163 163 163 / var(--tw-text-opacity, 1));
  }

  svg {
    opacity: 0;
  }

  svg {
    transition-property: opacity;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
    transition-duration: 150ms;
  }

  svg {
    z-index: 50;
  }
}

.tree-node-search-highlight {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  span {
    padding-top: 1px;
    padding-bottom: 1px;
  }

  span {
    border-radius: 2px;
  }

  span {
    --tw-bg-opacity: 1;
    background-color: rgb(253 224 71 / var(--tw-bg-opacity, 1));
  }

  span {
    font-weight: 500;
  }

  span {
    --tw-text-opacity: 1;
    color: rgb(0 0 0 / var(--tw-text-opacity, 1));
  }

  .single {
    margin-right: 1px;
  }

  .single {
    padding-left: 2px;
    padding-right: 2px;
  }

  .regex {
    padding-left: 2px;
    padding-right: 2px;
  }

  .start {
    margin-left: 1px;
  }

  .start {
    border-top-left-radius: 2px;
    border-bottom-left-radius: 2px;
  }

  .end {
    margin-right: 1px;
  }

  .end {
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
  }

  .middle {
    margin-left: 1px;
    margin-right: 1px;
  }

  .middle {
    border-radius: 2px;
  }
}

.react-scan-toolbar-notification {
  position: absolute;
  left: 0px;
  right: 0px;
  display: flex;
  align-items: center;
  -moz-column-gap: 8px;
       column-gap: 8px;
  padding: 4px;
  padding-left: 8px;
  font-size: 10px;
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
  background-color: rgb(0 0 0 / 0.9);
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;

  &:before {
    --tw-content: '';
    content: var(--tw-content);
  }

  &:before {
    position: absolute;
  }

  &:before {
    left: 0px;
    right: 0px;
  }

  &:before {
    --tw-bg-opacity: 1;
    background-color: rgb(0 0 0 / var(--tw-bg-opacity, 1));
  }

  &:before {
    height: 8px;
  }

  &.position-top {
    top: 100%;
  }

  &.position-top {
    --tw-translate-y: -100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-top {
    border-bottom-right-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &.position-top {

    &::before {
      top: 0px;
    }

    &::before {
      --tw-translate-y: -100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.position-bottom {
    bottom: 100%;
  }

  &.position-bottom {
    --tw-translate-y: 100%;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }

  &.position-bottom {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }

  &.position-bottom {

    &::before {
      bottom: 0px;
    }

    &::before {
      --tw-translate-y: 100%;
      transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
    }
  }

  &.is-open {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-header-item {
  position: absolute;
  inset: 0px;
  --tw-translate-y: -200%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;

  &.is-visible {
    --tw-translate-y: 0px;
    transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
  }
}

.react-scan-components-tree:has(.resize-v-line:hover, .resize-v-line:active)
  .tree {
  overflow: hidden;
}

.react-scan-expandable {
  display: grid;
  grid-template-rows: 0fr;
  overflow: hidden;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 75ms;
  transition-timing-function: ease-out;

  > * {
    min-height: 0;
  }

  &.react-scan-expanded {
    grid-template-rows: 1fr;
    transition-duration: 100ms;
  }
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-0::after {
  content: var(--tw-content);
  inset: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:top-\\[100\\%\\]::after {
  content: var(--tw-content);
  top: 100%;
}

.after\\:h-\\[6px\\]::after {
  content: var(--tw-content);
  height: 6px;
}

.after\\:w-\\[10px\\]::after {
  content: var(--tw-content);
  width: 10px;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes fadeOut {

  0% {
    content: var(--tw-content);
    opacity: 1;
  }

  100% {
    content: var(--tw-content);
    opacity: 0;
  }
}

.after\\:animate-\\[fadeOut_1s_ease-out_forwards\\]::after {
  content: var(--tw-content);
  animation: fadeOut 1s ease-out forwards;
}

.after\\:border-l-\\[5px\\]::after {
  content: var(--tw-content);
  border-left-width: 5px;
}

.after\\:border-r-\\[5px\\]::after {
  content: var(--tw-content);
  border-right-width: 5px;
}

.after\\:border-t-\\[6px\\]::after {
  content: var(--tw-content);
  border-top-width: 6px;
}

.after\\:border-l-transparent::after {
  content: var(--tw-content);
  border-left-color: transparent;
}

.after\\:border-r-transparent::after {
  content: var(--tw-content);
  border-right-color: transparent;
}

.after\\:border-t-white::after {
  content: var(--tw-content);
  --tw-border-opacity: 1;
  border-top-color: rgb(255 255 255 / var(--tw-border-opacity, 1));
}

.after\\:bg-purple-500\\/30::after {
  content: var(--tw-content);
  background-color: rgb(168 85 247 / 0.3);
}

.after\\:content-\\[\\"\\"\\]::after {
  --tw-content: "";
  content: var(--tw-content);
}

.focus-within\\:border-\\[\\#454545\\]:focus-within {
  --tw-border-opacity: 1;
  border-color: rgb(69 69 69 / var(--tw-border-opacity, 1));
}

.hover\\:bg-\\[\\#0f0f0f\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(15 15 15 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#18181B\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(24 24 27 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#34343b\\]:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(52 52 59 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/20:hover {
  background-color: rgb(95 63 154 / 0.2);
}

.hover\\:bg-\\[\\#5f3f9a\\]\\/40:hover {
  background-color: rgb(95 63 154 / 0.4);
}

.hover\\:bg-red-600:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(220 38 38 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-700:hover {
  --tw-bg-opacity: 1;
  background-color: rgb(63 63 70 / var(--tw-bg-opacity, 1));
}

.hover\\:bg-zinc-800\\/50:hover {
  background-color: rgb(39 39 42 / 0.5);
}

.hover\\:text-neutral-300:hover {
  --tw-text-opacity: 1;
  color: rgb(212 212 212 / var(--tw-text-opacity, 1));
}

.hover\\:text-white:hover {
  --tw-text-opacity: 1;
  color: rgb(255 255 255 / var(--tw-text-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#21437982\\] {
  background-color: #21437982;
}

.group:hover .group-hover\\:bg-\\[\\#5b2d89\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(91 45 137 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#6a6a6a\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(106 106 106 / var(--tw-bg-opacity, 1));
}

.group:hover .group-hover\\:bg-\\[\\#efda1a2f\\] {
  background-color: #efda1a2f;
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.peer\\/bottom:hover ~ .peer-hover\\/bottom\\:rounded-b-none {
  border-bottom-right-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/left:hover ~ .peer-hover\\/left\\:rounded-l-none {
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}

.peer\\/right:hover ~ .peer-hover\\/right\\:rounded-r-none {
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.peer\\/top:hover ~ .peer-hover\\/top\\:rounded-t-none {
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}
`,Js=(e,t,n=t)=>{let[r,i]=M(e);return N(()=>{if(e===r)return;let a=e?t:n,o=setTimeout(()=>i(e),a);return()=>clearTimeout(o)},[e,t,n]),r},Ys=bn(()=>z(`absolute inset-0 flex items-center gap-x-2`,`translate-y-0`,`transition-transform duration-300`,Ni.value&&`-translate-y-[200%]`)),Xs=()=>{let e=P(null),t=P(null),[n,r]=M(null);return Mn(()=>{let e=Y.inspectState.value;e.kind===`focused`&&r(e.fiber)}),Mn(()=>{let n=Ki.value;an(()=>{if(Y.inspectState.value.kind!==`focused`||!e.current||!t.current)return;let{totalUpdates:r,currentIndex:i,updates:a,isVisible:o,windowOffset:s}=n,c=Math.max(0,r-1),l=o?`#${s+i} Re-render`:c>0?`\xD7${c}`:``,u;if(c>0&&i>=0&&i<a.length){let e=a[i]?.fiberInfo?.selfTime;u=e>0?e<.1-2**-52?`< 0.1ms`:`${Number(e.toFixed(1))}ms`:void 0}e.current.dataset.text=l?` \u2022 ${l}`:``,t.current.dataset.text=u?` \u2022 ${u}`:``})}),I(`div`,{className:Ys,children:[Kt(()=>{if(!n)return null;let{name:e,wrappers:t,wrapperTypes:r}=Mi(n),i=t.length?`${t.join(`(`)}(${e})${`)`.repeat(t.length)}`:e??``,a=r[0];return I(`span`,{title:i,className:`flex items-center gap-x-1`,children:[e??`Unknown`,I(`span`,{title:a?.title,className:`flex items-center gap-x-1 text-[10px] text-purple-400`,children:!!a&&I(j,{children:[I(`span`,{className:z(`rounded py-[1px] px-1`,`truncate`,a.compiler&&`bg-purple-800 text-neutral-400`,!a.compiler&&`bg-neutral-700 text-neutral-300`,a.type===`memo`&&`bg-[#5f3f9a] text-white`),children:a.type},a.type),a.compiler&&I(`span`,{className:`text-yellow-300`,children:`✨`})]})}),r.length>1&&I(`span`,{className:`text-[10px] text-neutral-400`,children:[`×`,r.length-1]})]})},[n]),I(`div`,{className:`flex items-center gap-x-2 mr-auto text-xs text-[#888]`,children:[I(`span`,{ref:e,className:`with-data-text cursor-pointer !overflow-visible`,title:`Click to toggle between rerenders and total renders`}),I(`span`,{ref:t,className:`with-data-text !overflow-visible`})]})]})},Zs=()=>{let e=Js(Y.inspectState.value.kind===`focused`,150,0),t=()=>{H.value={view:`none`},Y.inspectState.value={kind:`inspect-off`}};if(H.value.view!==`notifications`)return I(`div`,{className:`react-scan-header`,children:[I(`div`,{className:`relative flex-1 h-full`,children:I(`div`,{className:z(`react-scan-header-item is-visible`,!e&&`!duration-0`),children:I(Xs,{})})}),I(`button`,{type:`button`,title:`Close`,className:`react-scan-close-button`,onClick:t,children:I(Cr,{name:`icon-close`})})]})},Qs=({className:e,...t})=>I(`div`,{className:z(`react-scan-toggle`,e),children:[I(`input`,{type:`checkbox`,...t}),I(`div`,{})]}),$s=({fps:e})=>I(`div`,{className:z(`flex items-center gap-x-1 px-2 w-full`,`h-6`,`rounded-md`,`font-mono leading-none`,`bg-[#141414]`,`ring-1 ring-white/[0.08]`),children:[I(`div`,{style:{color:(e=>e<30?`#EF4444`:e<50?`#F59E0B`:`rgb(214,132,245)`)(e)},className:`text-sm font-semibold tracking-wide transition-colors ease-in-out w-full flex justify-center items-center`,children:e}),I(`span`,{className:`text-white/30 text-[11px] font-medium tracking-wide ml-auto min-w-fit`,children:`FPS`})]}),ec=()=>{let[e,t]=M(null);return N(()=>{let e=setInterval(()=>{t(ko())},200);return()=>clearInterval(e)},[]),I(`div`,{className:z(`flex items-center justify-end gap-x-2 px-1 ml-1 w-[72px]`,`whitespace-nowrap text-sm text-white`),children:e===null?I(j,{children:`️`}):I($s,{fps:e})})},tc=!1,nc=e=>{if(tc)throw Error(e)},rc=e=>e(),ic=class e extends Array{constructor(e=25){super(),this.capacity=e}push(...e){let t=super.push(...e);for(;this.length>this.capacity;)this.shift();return t}static fromArray(t,n){let r=new e(n);return r.push(...t),r}},ac=class{constructor(e){this.subscribers=new Set,this.currentValue=e}subscribe(e){return this.subscribers.add(e),e(this.currentValue),()=>{this.subscribers.delete(e)}}setState(e){this.currentValue=e,this.subscribers.forEach(t=>t(e))}getCurrentState(){return this.currentValue}},oc=150,sc=new ac(new ic(oc)),cc=50,lc=new class{constructor(){this.channels={}}publish(e,t,n=!0){let r=this.channels[t];if(!r){if(!n)return;this.channels[t]={callbacks:new ic(cc),state:new ic(cc)},this.channels[t].state.push(e);return}r.state.push(e),r.callbacks.forEach(t=>t(e))}getAvailableChannels(){return ic.fromArray(Object.keys(this.channels),cc)}subscribe(e,t,n=!1){let r=()=>(n||this.channels[e].state.forEach(e=>{t(e)}),()=>{let n=this.channels[e].callbacks.filter(e=>e!==t);this.channels[e].callbacks=ic.fromArray(n,cc)}),i=this.channels[e];return i?(i.callbacks.push(t),r()):(this.channels[e]={callbacks:new ic(cc),state:new ic(cc)},this.channels[e].callbacks.push(t),r())}updateChannelState(e,t,n=!0){let r=this.channels[e];if(!r){if(!n)return;let r=new ic(cc),i={callbacks:new ic(cc),state:r};this.channels[e]=i,i.state=t(r);return}r.state=t(r.state)}getChannelState(e){return this.channels[e].state??new ic(cc)}},uc={skipProviders:!0,skipHocs:!0,skipContainers:!0,skipMinified:!0,skipUtilities:!0,skipBoundaries:!0},dc={providers:[/Provider$/,/^Provider$/,/^Context$/],hocs:[/^with[A-Z]/,/^forward(?:Ref)?$/i,/^Forward(?:Ref)?\(/],containers:[/^(?:App)?Container$/,/^Root$/,/^ReactDev/],utilities:[/^Fragment$/,/^Suspense$/,/^ErrorBoundary$/,/^Portal$/,/^Consumer$/,/^Layout$/,/^Router/,/^Hydration/],boundaries:[/^Boundary$/,/Boundary$/,/^Provider$/,/Provider$/]},fc=(e,t=uc)=>{let n=[];return t.skipProviders&&n.push(...dc.providers),t.skipHocs&&n.push(...dc.hocs),t.skipContainers&&n.push(...dc.containers),t.skipUtilities&&n.push(...dc.utilities),t.skipBoundaries&&n.push(...dc.boundaries),!n.some(t=>t.test(e))},pc=[/^[a-z]$/,/^[a-z][0-9]$/,/^_+$/,/^[A-Za-z][_$]$/,/^[a-z]{1,2}$/],mc=e=>{for(let t=0;t<pc.length;t++)if(pc[t].test(e))return!0;let t=!/[aeiou]/i.test(e),n=(e.match(/\d/g)?.length??0)>e.length/2,r=/^[a-z]+$/.test(e),i=/[$_]{2,}/.test(e);return Number(t)+Number(n)+Number(r)+Number(i)>=2},hc=e=>{let t=Ce(e);return t?t.replace(/^(?:Memo|Forward(?:Ref)?|With.*?)\((?<inner>.*?)\)$/,`$<inner>`):``},gc=(e,t=uc)=>{if(!e||!Ce(e.type))return[];let n=[],r=e;for(;r.return;){let e=hc(r.type);e&&!mc(e)&&fc(e,t)&&e.toLowerCase()!==e&&n.push(e),r=r.return}let i=Array(n.length);for(let e=0;e<n.length;e++)i[e]=n[n.length-e-1];return i},_c=(e,t=()=>!0)=>{let n=e;for(;n;){let e=Ce(n.type);if(e&&t(e))return e;n=n.return}return null},vc,yc=`never-hidden`,bc=()=>{vc?.();let e=()=>{document.hidden&&(yc=Date.now())};document.addEventListener(`visibilitychange`,e),vc=()=>{document.removeEventListener(`visibilitychange`,e)}},xc=e=>[`pointerup`,`click`].includes(e)?`pointer`:(e.includes(`key`),[`keydown`,`keyup`].includes(e)?`keyboard`:null),Sc=null,Cc=e=>{bc();let t=new Map,n=new Map,r=r=>{if(!r.interactionId)return;if(r.interactionId&&r.target&&!n.has(r.interactionId)&&n.set(r.interactionId,r.target),r.target){let e=r.target;for(;e;){if(e.id===`react-scan-toolbar-root`||e.id===`react-scan-root`)return;e=e.parentElement}}let i=t.get(r.interactionId);if(i)r.duration>i.latency?(i.entries=[r],i.latency=r.duration):r.duration===i.latency&&r.startTime===i.entries[0].startTime&&i.entries.push(r);else{let n=xc(r.name);if(!n)return;let i={id:r.interactionId,latency:r.duration,entries:[r],target:r.target,type:n,startTime:r.startTime,endTime:Date.now(),processingStart:r.processingStart,processingEnd:r.processingEnd,duration:r.duration,inputDelay:r.processingStart-r.startTime,processingDuration:r.processingEnd-r.processingStart,presentationDelay:r.duration-(r.processingEnd-r.startTime),timestamp:Date.now(),timeSinceTabInactive:yc===`never-hidden`?`never-hidden`:Date.now()-yc,visibilityState:document.visibilityState,timeOrigin:performance.timeOrigin,referrer:document.referrer};t.set(i.id,i),Sc||=requestAnimationFrame(()=>{requestAnimationFrame(()=>{e(t.get(i.id)),Sc=null})})}},i=new PerformanceObserver(e=>{let t=e.getEntries();for(let e=0,n=t.length;e<n;e++){let n=t[e];r(n)}});try{i.observe({type:`event`,buffered:!0,durationThreshold:16}),i.observe({type:`first-input`,buffered:!0})}catch{}return()=>i.disconnect()},wc=()=>Cc(e=>{lc.publish({kind:`entry-received`,entry:e},`recording`)}),Tc=25,Ec=new ic(Tc),Dc=(e,t)=>{let n=null;for(let r of t){if(r.type!==e.type)continue;if(n===null){n=r;continue}let t=(e,t)=>Math.abs(e.startDateTime)-(t.startTime+t.timeOrigin);t(r,e)<t(n,e)&&(n=r)}return n},Oc=e=>lc.subscribe(`recording`,t=>{let n=t.kind===`auto-complete-race`?Ec.find(e=>e.interactionUUID===t.interactionUUID):Dc(t.entry,Ec);n&&e(n.completeInteraction(t))}),kc=({onMicroTask:e,onRAF:t,onTimeout:n,abort:r})=>{queueMicrotask(()=>{r?.()!==!0&&e()&&requestAnimationFrame(()=>{r?.()!==!0&&t()&&setTimeout(()=>{r?.()!==!0&&n()},0)})})},Ac=e=>{let t=Ra(e);if(!t)return;let n=t?Ce(t?.type):`N/A`;if(n||=_c(t,e=>e.length>2)??`N/A`,n)return{componentPath:gc(t),childrenTree:{},componentName:n,elementFiber:t}},jc=(e,t)=>{let n=null,r=t=>{switch(e){case`pointer`:return t.phase===`start`?`pointerup`:t.target instanceof HTMLInputElement||t.target instanceof HTMLSelectElement?`change`:`click`;case`keyboard`:return t.phase===`start`?`keydown`:`change`}},i={current:{kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e}},a=n=>{if(n.composedPath().some(e=>e instanceof Element&&e.id===`react-scan-toolbar-root`)||(Date.now()-i.current.stageStart>2e3&&(i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e}),i.current.kind!==`uninitialized-stage`))return;let a=performance.now();t?.onStart?.(i.current.interactionUUID);let s=Ac(n.target);if(!s){t?.onError?.(i.current.interactionUUID);return}let c={},l=Pc(c);i.current={...i.current,interactionType:e,blockingTimeStart:Date.now(),childrenTree:s.childrenTree,componentName:s.componentName,componentPath:s.componentPath,fiberRenders:c,kind:`interaction-start`,interactionStartDetail:a,stopListeningForRenders:l};let u=r({phase:`end`,target:n.target});document.addEventListener(u,o,{once:!0}),requestAnimationFrame(()=>{document.removeEventListener(u,o)})};document.addEventListener(r({phase:`start`}),a,{capture:!0});let o=(r,a,o)=>{if(i.current.kind!==`interaction-start`&&a===n){if(e===`pointer`&&r.target instanceof HTMLSelectElement){i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e};return}t?.onError?.(i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e},nc(`pointer -> click`);return}n=a,kc({abort:o,onMicroTask:()=>i.current.kind===`uninitialized-stage`?!1:(i.current={...i.current,kind:`js-end-stage`,jsEndDetail:performance.now()},!0),onRAF:()=>i.current.kind!==`js-end-stage`&&i.current.kind!==`raf-stage`?(t?.onError?.(i.current.interactionUUID),nc(`bad transition to raf`),i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e},!1):(i.current={...i.current,kind:`raf-stage`,rafStart:performance.now()},!0),onTimeout:()=>{if(i.current.kind!==`raf-stage`){t?.onError?.(i.current.interactionUUID),i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:Date.now(),interactionType:e},nc(`raf->timeout`);return}let n=Date.now(),r=Object.freeze({...i.current,kind:`timeout-stage`,blockingTimeEnd:n,commitEnd:performance.now()});i.current={kind:`uninitialized-stage`,interactionUUID:xr(),stageStart:n,interactionType:e};let a=!1,o=e=>{a=!0;let n={detailedTiming:r,latency:e.kind===`auto-complete-race`?e.detailedTiming.commitEnd-e.detailedTiming.interactionStartDetail:e.entry.latency,completedAt:Date.now(),flushNeeded:!0};t?.onComplete?.(r.interactionUUID,n,e);let i=Ec.filter(e=>e.interactionUUID!==r.interactionUUID);return Ec=ic.fromArray(i,Tc),n},s={completeInteraction:o,endDateTime:Date.now(),startDateTime:r.blockingTimeStart,type:e,interactionUUID:r.interactionUUID};if(Ec.push(s),Nc())setTimeout(()=>{if(a)return;o({kind:`auto-complete-race`,detailedTiming:r,interactionUUID:r.interactionUUID});let e=Ec.filter(e=>e.interactionUUID!==r.interactionUUID);Ec=ic.fromArray(e,Tc)},1e3);else{let e=Ec.filter(e=>e.interactionUUID!==r.interactionUUID);Ec=ic.fromArray(e,Tc),o({kind:`auto-complete-race`,detailedTiming:r,interactionUUID:r.interactionUUID})}}})},s=e=>{let t=xr();o(e,t,()=>t!==n)};return e===`keyboard`&&document.addEventListener(`keypress`,s),()=>{document.removeEventListener(r({phase:`start`}),a,{capture:!0}),document.removeEventListener(`keypress`,s)}},Mc=e=>_e(e,e=>{if(le(e))return!0})?.stateNode,Nc=()=>`PerformanceEventTiming`in globalThis,Pc=e=>{let t=t=>{let n=Ce(t.type);if(!n)return;let r=e[n];if(!r){let r=new Set,i=t.return&&Va(t.return),a=i&&Ce(i[0]);a&&r.add(a);let{selfTime:o,totalTime:s}=be(t),c=So(t),l={current:[],changes:new Set,changesCounts:new Map},u={fiberProps:c.fiberProps||l,fiberState:c.fiberState||l,fiberContext:c.fiberContext||l};e[n]={renderCount:1,hasMemoCache:xe(t),wasFiberRenderMount:Ic(t),parents:r,selfTime:o,totalTime:s,nodeInfo:[{element:Mc(t),name:Ce(t.type)??`Unknown`,selfTime:be(t).selfTime}],changes:u};return}if(Va(t)?.[0]?.type){let e=t.return&&Va(t.return),n=e&&Ce(e[0]);n&&r.parents.add(n)}let{selfTime:i,totalTime:a}=be(t),o=So(t);if(!o)return;let s={current:[],changes:new Set,changesCounts:new Map};r.wasFiberRenderMount=r.wasFiberRenderMount||Ic(t),r.hasMemoCache=r.hasMemoCache||xe(t),r.changes={fiberProps:Fc(r.changes?.fiberProps||s,o.fiberProps||s),fiberState:Fc(r.changes?.fiberState||s,o.fiberState||s),fiberContext:Fc(r.changes?.fiberContext||s,o.fiberContext||s)},r.renderCount+=1,r.selfTime+=i,r.totalTime+=a,r.nodeInfo.push({element:Mc(t),name:Ce(t.type)??`Unknown`,selfTime:be(t).selfTime})};return Y.interactionListeningForRenders=t,()=>{Y.interactionListeningForRenders===t&&(Y.interactionListeningForRenders=null)}},Fc=(e,t)=>{let n={current:[...e.current],changes:new Set,changesCounts:new Map};for(let e of t.current)n.current.some(t=>t.name===e.name)||n.current.push(e);for(let r of t.changes)if(typeof r==`string`||typeof r==`number`){n.changes.add(r);let i=e.changesCounts.get(r)||0,a=t.changesCounts.get(r)||0;n.changesCounts.set(r,i+a)}return n},Ic=e=>{if(!e.alternate)return!0;let t=e.alternate,n=t&&t.memoizedState!=null&&t.memoizedState.element!=null&&t.memoizedState.isDehydrated!==!0,r=e.memoizedState!=null&&e.memoizedState.element!=null&&e.memoizedState.isDehydrated!==!0;return!n&&r},Lc=e=>{let t,n=new Set,r=(e,r)=>{let i=typeof e==`function`?e(t):e;if(!Object.is(i,t)){let e=t;t=r??(typeof i!=`object`||!i)?i:Object.assign({},t,i),n.forEach(n=>n(t,e))}},i=()=>t,a={setState:r,getState:i,getInitialState:()=>o,subscribe:(e,r)=>{let i,a;r?(i=e,a=r):a=e;let o=i?i(t):void 0,s=(e,t)=>{if(i){let n=i(e),r=i(t);Object.is(o,n)||(o=n,a(n,r))}else a(e,t)};return n.add(s),()=>n.delete(s)}},o=t=e(r,i,a);return a},Rc=e=>e?Lc(e):Lc,zc=null;Rc()(e=>({state:{events:[]},actions:{addEvent:t=>{e(e=>({state:{events:[...e.state.events,t]}}))},clear:()=>{e({state:{events:[]}})}}}));var Bc=200,Vc=Rc()((e,t)=>{let n=new Set;return{state:{events:new ic(Bc)},actions:{addEvent:r=>{n.forEach(e=>e(r));let i=[...t().state.events,r],a=(e,t)=>{let n=i.find(t=>{if(t.kind!==`long-render`&&t.id!==e.id&&(e.data.startAt<=t.data.startAt&&e.data.endAt<=t.data.endAt&&e.data.endAt>=t.data.startAt||t.data.startAt<=e.data.startAt&&t.data.endAt>=e.data.startAt||e.data.startAt<=t.data.startAt&&e.data.endAt>=t.data.endAt))return!0});n&&t(n)},o=new Set;i.forEach(e=>{e.kind!==`interaction`&&a(e,()=>{o.add(e.id)})});let s=i.filter(e=>!o.has(e.id));e(()=>({state:{events:ic.fromArray(s,Bc)}}))},addListener:e=>(n.add(e),()=>{n.delete(e)}),clear:()=>{e({state:{events:new ic(Bc)}})}}}}),Hc=()=>Fn(Vc.subscribe,Vc.getState),Uc=null,Wc=null,Gc=null,Kc,qc=()=>{let e=e=>{Kc=e.composedPath().map(e=>e.id).filter(Boolean).includes(`react-scan-toolbar`)};return document.addEventListener(`mouseover`,e),Gc=e,()=>{Gc&&document.removeEventListener(`mouseover`,Gc)}},Jc=()=>{let e=()=>{Uc=performance.now(),Wc=performance.timeOrigin};return document.addEventListener(`visibilitychange`,e),()=>{document.removeEventListener(`visibilitychange`,e)}},Yc=150,Xc=[];function Zc(){let e,t;function n(){let r=null;zc=null,zc={},r=Pc(zc);let i=performance.timeOrigin,a=performance.now();return e=requestAnimationFrame(()=>{t=setTimeout(()=>{let e=performance.now(),t=e-a,o=performance.timeOrigin;Xc.push(e+o);let s=Xc.filter(t=>e+o-t<=1e3),c=s.length;Xc=s;let l=Uc!==null&&Wc!==null?e+o-(Wc+Uc)<100:null,u=Kc!==null&&Kc;if(t>Yc&&!l&&document.visibilityState===`visible`&&!u){let n=o+e,r=a+i;Vc.getState().actions.addEvent({kind:`long-render`,id:xr(),data:{endAt:n,startAt:r,meta:{fiberRenders:zc,latency:t,fps:c}}})}Uc=null,Wc=null,r?.(),n()},0)}),r}let r=n();return()=>{r(),cancelAnimationFrame(e),clearTimeout(t)}}var Qc=()=>{let e=wc(),t=qc(),n=Jc(),r=Zc(),i=async(e,t,n)=>{Vc.getState().actions.addEvent({kind:`interaction`,id:xr(),data:{startAt:t.detailedTiming.blockingTimeStart,endAt:performance.now()+performance.timeOrigin,meta:{...t,kind:n.kind}}});let r=lc.getChannelState(`recording`);t.detailedTiming.stopListeningForRenders(),r.length&&lc.updateChannelState(`recording`,()=>new ic(cc))},a=jc(`pointer`,{onComplete:i}),o=jc(`keyboard`,{onComplete:i}),s=Oc(e=>{sc.setState(ic.fromArray(sc.getCurrentState().concat(e),oc))});return()=>{t(),n(),r(),e(),a(),s(),o()}},$c=e=>{let t=e.filter(e=>e.length>2);return t.length===0?e.at(-1)??`Unknown`:t.at(-1)},el=e=>{switch(e.kind){case`interaction`:{let{renderTime:t,otherJSTime:n,framePreparation:r,frameConstruction:i,frameDraw:a}=e;return t+n+r+i+(a??0)}case`dropped-frames`:return e.otherTime+e.renderTime}},tl=e=>e.wasFiberRenderMount||e.hasMemoCache?!1:e.changes.context.length===0&&e.changes.props.length===0&&e.changes.state.length===0,nl=e=>{let t=el(e.timing);switch(e.kind){case`interaction`:return t<200?`low`:t<500?`needs-improvement`:`high`;case`dropped-frames`:return t<50?`low`:t<Yc?`needs-improvement`:`high`}},rl=()=>Jt(il),il=kt(null),al=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:z([`lucide lucide-chevron-right`,t]),children:I(`path`,{d:`m9 18 6-6-6-6`})}),ol=({className:e=``,size:t=24,events:n=[]})=>{let r=n.includes(!0),i=n.filter(e=>e).length,a=i>99?`>99`:i,o=r?Math.max(t*.6,14):Math.max(t*.4,6);return I(`div`,{className:`relative`,children:[I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:`lucide lucide-bell ${e}`,children:[I(`path`,{d:`M10.268 21a2 2 0 0 0 3.464 0`}),I(`path`,{d:`M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326`})]}),n.length>0&&i>0&&X.options.value.showNotificationCount&&I(`div`,{className:z([`absolute`,r?`-top-2.5 -right-2.5`:`-top-1 -right-1`,`rounded-full`,`flex items-center justify-center`,`text-[8px] font-medium text-white`,`aspect-square`,r?`bg-red-500/90`:`bg-purple-500/90`]),style:{width:`${o}px`,height:`${o}px`,padding:r?`0.5px`:`0`},children:r&&a})]})},sl=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M18 6 6 18`}),I(`path`,{d:`m6 6 12 12`})]}),cl=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`}),I(`path`,{d:`M16 9a5 5 0 0 1 0 6`}),I(`path`,{d:`M19.364 18.364a9 9 0 0 0 0-12.728`})]}),ll=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M16 9a5 5 0 0 1 .95 2.293`}),I(`path`,{d:`M19.364 5.636a9 9 0 0 1 1.889 9.96`}),I(`path`,{d:`m2 2 20 20`}),I(`path`,{d:`m7 7-.587.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298V11`}),I(`path`,{d:`M9.828 4.172A.686.686 0 0 1 11 4.657v.686`})]}),ul=({size:e=24,className:t})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:e,height:e,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:z([`lucide lucide-arrow-left`,t]),children:[I(`path`,{d:`m12 19-7-7 7-7`}),I(`path`,{d:`M19 12H5`})]}),dl=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M14 4.1 12 6`}),I(`path`,{d:`m5.1 8-2.9-.8`}),I(`path`,{d:`m6 12-1.9 2`}),I(`path`,{d:`M7.2 2.2 8 5.1`}),I(`path`,{d:`M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z`})]}),fl=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,children:[I(`path`,{d:`M10 8h.01`}),I(`path`,{d:`M12 12h.01`}),I(`path`,{d:`M14 8h.01`}),I(`path`,{d:`M16 12h.01`}),I(`path`,{d:`M18 8h.01`}),I(`path`,{d:`M6 8h.01`}),I(`path`,{d:`M7 16h10`}),I(`path`,{d:`M8 12h.01`}),I(`rect`,{width:`20`,height:`16`,x:`2`,y:`4`,rx:`2`})]}),pl=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,className:e,style:{transform:`rotate(180deg)`},children:[I(`circle`,{cx:`12`,cy:`12`,r:`10`}),I(`path`,{d:`m4.9 4.9 14.2 14.2`})]}),ml=({className:e=``,size:t=24})=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:t,height:t,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:e,children:[I(`polyline`,{points:`22 17 13.5 8.5 8.5 13.5 2 7`}),I(`polyline`,{points:`16 17 22 17 22 11`})]}),hl=({children:e,triggerContent:t,wrapperProps:n})=>{let[r,i]=M(`closed`),[a,o]=M(null),[s,c]=M({width:window.innerWidth,height:window.innerHeight}),l=P(null),u=P(null),d=Jt(Ru),f=P(!1);N(()=>{let e=()=>{c({width:window.innerWidth,height:window.innerHeight}),p()};return window.addEventListener(`resize`,e),()=>window.removeEventListener(`resize`,e)},[]);let p=()=>{if(l.current&&d){let e=l.current.getBoundingClientRect(),t=d.getBoundingClientRect(),n=e.left+e.width/2,r=e.top;o(new DOMRect(n-t.left,r-t.top,e.width,e.height))}};N(()=>{p()},[l.current]),N(()=>{if(r===`opening`){let e=setTimeout(()=>i(`open`),120);return()=>clearTimeout(e)}else if(r===`closing`){let e=setTimeout(()=>i(`closed`),120);return()=>clearTimeout(e)}},[r]),N(()=>{let e=setInterval(()=>{!f.current&&r!==`closed`&&i(`closing`)},1e3);return()=>clearInterval(e)},[r]);let m=()=>{f.current=!0,p(),i(`opening`)},h=()=>{f.current=!1,p(),i(`closing`)},g=(()=>{if(!a||!d)return{top:0,left:0};let e=d.getBoundingClientRect(),t=u.current?.offsetHeight||40,n=a.x+e.left,r=a.y+e.top,i=n,o=r-4;return i-175/2<5?i=92.5:i+175/2>s.width-5&&(i=s.width-5-175/2),o-t<5&&(o=r+a.height+4),{top:o-e.top,left:i-e.left}})();return I(j,{children:[d&&a&&r!==`closed`&&Qn(I(`div`,{ref:u,className:z([`absolute z-100 bg-white text-black rounded-lg px-3 py-2 shadow-lg`,`transition-[opacity] duration-120 ease-out`,`after:content-[""] after:absolute after:top-[100%]`,`after:left-1/2 after:-translate-x-1/2`,`after:w-[10px] after:h-[6px]`,`after:border-l-[5px] after:border-l-transparent`,`after:border-r-[5px] after:border-r-transparent`,`after:border-t-[6px] after:border-t-white`,`pointer-events-none`,r===`opening`||r===`closing`?`opacity-0`:`opacity-100`]),style:{top:g.top+`px`,left:g.left+`px`,transform:`translate(-50%, calc(-100% - 4px)) scale(${r===`open`?1:.97})`,minWidth:`175px`,willChange:`opacity, transform`},children:e}),d),I(`div`,{ref:l,onMouseEnter:m,onMouseLeave:h,...n,children:t})]})},gl=({selectedEvent:e})=>{let{notificationState:t,setNotificationState:n,setRoute:r}=rl();return I(`div`,{className:z([`flex w-full justify-between items-center px-3 py-2 text-xs`]),children:[I(`div`,{className:z([`bg-[#18181B] flex items-center gap-x-1 p-1 rounded-sm`]),children:[I(`button`,{onClick:()=>{r({route:`render-visualization`,routeMessage:null})},className:z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`render-visualization`||t.route===`render-explanation`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Ranked`}),I(`button`,{onClick:()=>{r({route:`other-visualization`,routeMessage:null})},className:z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`other-visualization`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:`Overview`}),I(`button`,{onClick:()=>{r({route:`optimize`,routeMessage:null})},className:z([`w-1/2 flex items-center justify-center whitespace-nowrap py-[5px] px-1 gap-x-1`,t.route===`optimize`?`text-white bg-[#7521c8] rounded-sm`:`text-[#6E6E77] bg-[#18181B] rounded-sm`]),children:I(`span`,{children:`Prompts`})})]}),I(hl,{triggerContent:I(`button`,{onClick:()=>{n(e=>{e.audioNotificationsOptions.enabled&&e.audioNotificationsOptions.audioContext.state!==`closed`&&e.audioNotificationsOptions.audioContext.close();let t=e.audioNotificationsOptions.enabled;localStorage.setItem(`react-scan-notifications-audio`,String(!t));let n=new AudioContext;return e.audioNotificationsOptions.enabled||Sr(n),t&&n.close(),{...e,audioNotificationsOptions:t?{audioContext:null,enabled:!1}:{audioContext:n,enabled:!0}}})},className:`ml-auto`,children:I(`div`,{className:z([`flex gap-x-2 justify-center items-center text-[#6E6E77]`]),children:[I(`span`,{children:`Alerts`}),t.audioNotificationsOptions.enabled?I(cl,{size:16,className:`text-[#6E6E77]`}):I(ll,{size:16,className:`text-[#6E6E77]`})]})}),children:I(j,{children:`Play a chime when a slowdown is recorded`})})]})},_l=e=>{let t=``;return e.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,30).filter(e=>e.totalTime>5).forEach(e=>{let n=``;n+=`Component Name:`,n+=e.name,n+=`
`,n+=`Rendered: ${e.count} times
`,n+=`Sum of self times for ${e.name} is ${e.totalTime.toFixed(0)}ms
`,e.changes.props.length>0&&(n+=`Changed props for all ${e.name} instances ("name:count" pairs)
`,e.changes.props.forEach(e=>{n+=`${e.name}:${e.count}x
`})),e.changes.state.length>0&&(n+=`Changed state for all ${e.name} instances ("hook index:count" pairs)
`,e.changes.state.forEach(e=>{n+=`${e.index}:${e.count}x
`})),e.changes.context.length>0&&(n+=`Changed context for all ${e.name} instances ("context display name (if exists):count" pairs)
`,e.changes.context.forEach(e=>{n+=`${e.name}:${e.count}x
`})),t+=n,t+=`
`}),t},vl=({renderTime:e,eHandlerTimeExcludingRenders:t,toRafTime:n,commitTime:r,framePresentTime:i,formattedReactData:a})=>`I will provide you with a set of high level, and low level performance data about an interaction in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${t.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${n.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${r.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${i===null?``:`- how long it took from dom commit for the frame to be presented: ${i.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${a}`,yl=({interactionType:e,name:t,componentPath:n,time:r,renderTime:i,eHandlerTimeExcludingRenders:a,toRafTime:o,commitTime:s,framePresentTime:c,formattedReactData:l})=>`You will attempt to implement a performance improvement to a user interaction in a React app. You will be provided with data about the interaction, and the slow down.

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.


Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)

The interaction was a ${e} on the component named ${t}. This component has the following ancestors ${n}. This is the path from the component, to the root. This should be enough information to figure out where this component is in the user's code base

This path is the component that was clicked, so it should tell you roughly where component had an event handler that triggered a state change.

Please note that the leaf node of this path might not be user code (if they use a UI library), and they may contain many wrapper components that just pass through children that aren't relevant to the actual click. So make you sure analyze the path and understand what the user code is doing

We have a set of high level, and low level data about the performance issue.

The click took ${r.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${i.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${a.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${o.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${s.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${c===null?``:`- how long it took from dom commit for the frame to be presented: ${c.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${l}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

`,bl=({renderTime:e,otherTime:t,formattedReactData:n})=>`You will attempt to implement a performance improvement to a large slowdown in a react app

Your should split your goals into 2 parts:
- identifying the problem
- fixing the problem
	- it is okay to implement a fix even if you aren't 100% sure the fix solves the performance problem. When you aren't sure, you should tell the user to try repeating the interaction, and feeding the "Formatted Data" in the React Scan notifications optimize tab. This allows you to start a debugging flow with the user, where you attempt a fix, and observe the result. The user may make a mistake when they pass you the formatted data, so must make sure, given the data passed to you, that the associated data ties to the same interaction you were trying to debug.

Make sure to check if the user has the react compiler enabled (project dependent, configured through build tool), so you don't unnecessarily memoize components. If it is, you do not need to worry about memoizing user components

One challenge you may face is the performance problem lies in a node_module, not in user code. If you are confident the problem originates because of a node_module, there are multiple strategies, which are context dependent:
- you can try to work around the problem, knowing which module is slow
- you can determine if its possible to resolve the problem in the node_module by modifying non node_module code
- you can monkey patch the node_module to experiment and see if it's really the problem (you can modify a functions properties to hijack the call for example)
- you can determine if it's feasible to replace whatever node_module is causing the problem with a performant option (this is an extreme)


We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time: ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So the flow should be:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 

An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If a node_module is the component with high renders, you can experiment to see if that component is the root issue (because of hooks). You should use the same instructions for node_module debugging mentioned previously.

If renders don't seem to be the problem, see if there are any expensive CSS properties being added/mutated, or any expensive DOM Element mutations/new elements being created that could cause this slowdown. 
`,xl=({renderTime:e,otherTime:t,formattedReactData:n})=>`Your goal will be to help me find the source of a performance problem in a React App. I collected a large dataset about this specific performance problem.

We have the high level time of how much react spent rendering, and what else the browser spent time on during this slowdown

- react component render time: ${e.toFixed(0)}ms
- other time (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms


We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${n}

You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but other time is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run outside of what we profile (just react render time).

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one, and this can add significant overhead when thousands of effects ran.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,Sl=({renderTime:e,otherTime:t,formattedReactData:n})=>`I will provide you with a set of high level, and low level performance data about a large frame drop in a React App:
### High level
- react component render time: ${e.toFixed(0)}ms
- how long it took to run everything else (other JavaScript, hooks like useEffect, style recalculations, layerization, paint & commit and everything else the browser might do to draw a new frame after javascript mutates the DOM): ${t}ms

### Low level
We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.
${n}`,Cl=({interactionType:e,name:t,time:n,renderTime:r,eHandlerTimeExcludingRenders:i,toRafTime:a,commitTime:o,framePresentTime:s,formattedReactData:c})=>`Your goal will be to help me find the source of a performance problem. I collected a large dataset about this specific performance problem.

There was a ${e} on a component named ${t}. This means, roughly, the component that handled the ${e} event was named ${t}.

We have a set of high level, and low level data about the performance issue.

The click took ${n.toFixed(0)}ms from interaction start, to when a new frame was presented to a user.

We also provide you with a breakdown of what the browser spent time on during the period of interaction start to frame presentation.

- react component render time: ${r.toFixed(0)}ms
- how long it took to run javascript event handlers (EXCLUDING REACT RENDERS): ${i.toFixed(0)}ms
- how long it took from the last event handler time, to the last request animation frame: ${a.toFixed(0)}ms
	- things like prepaint, style recalculations, layerization, async web API's like observers may occur during this time
- how long it took from the last request animation frame to when the dom was committed: ${o.toFixed(0)}ms
	- during this period you will see paint, commit, potential style recalcs, and other misc browser activity. Frequently high times here imply css that makes the browser do a lot of work, or mutating expensive dom properties during the event handler stage. This can be many things, but it narrows the problem scope significantly when this is high
${s===null?``:`- how long it took from dom commit for the frame to be presented: ${s.toFixed(0)}ms. This is when information about how to paint the next frame is sent to the compositor threads, and when the GPU does work. If this is high, look for issues that may be a bottleneck for operations occurring during this time`}

We also have lower level information about react components, such as their render time, and which props/state/context changed when they re-rendered.

${c}


You may notice components have many renders, but much fewer props/state/context changes. This normally implies most of the components could of been memoized to avoid computation

It's also important to remember if a component had no props/state/context change, and it was memoized, it would not render. So a flow we can go through is:
- find the most expensive components
- see what's causing them to render
- determine how you can make those state/props/context not change for a large set of the renders
- once there are no more changes left, you can memoize the component so it no longer unnecessarily re-renders. 


An important thing to note is that if you see a lot of react renders (some components with very high render counts), but javascript excluding renders is much higher than render time, it is possible that the components with lots of renders run hooks like useEffect/useLayoutEffect, which run during the JS event handler period.

It's also good to note that react profiles hook times in development, and if many hooks are called (lets say 5,000 components all called a useEffect), it will have to profile every single one. And it may also be the case the comparison of the hooks dependency can be expensive, and that would not be tracked in render time.

If it's not possible to explain the root problem from this data, please ask me for more data explicitly, and what we would need to know to find the source of the performance problem.
`,wl=(e,t)=>rc(()=>{switch(e){case`data`:switch(t.kind){case`dropped-frames`:return Sl({formattedReactData:_l(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return vl({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:_l(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),toRafTime:t.timing.framePreparation})}case`explanation`:switch(t.kind){case`dropped-frames`:return xl({formattedReactData:_l(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return Cl({commitTime:t.timing.frameConstruction,eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:_l(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:$c(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:el(t.timing),toRafTime:t.timing.framePreparation})}case`fix`:switch(t.kind){case`dropped-frames`:return bl({formattedReactData:_l(t.groupedFiberRenders),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),otherTime:t.timing.otherTime});case`interaction`:return yl({commitTime:t.timing.frameConstruction,componentPath:t.componentPath.join(`>`),eHandlerTimeExcludingRenders:t.timing.otherJSTime,formattedReactData:_l(t.groupedFiberRenders),framePresentTime:t.timing.frameDraw,interactionType:t.type,name:$c(t.componentPath),renderTime:t.groupedFiberRenders.reduce((e,t)=>e+t.totalTime,0),time:el(t.timing),toRafTime:t.timing.framePreparation})}}}),Tl=({selectedEvent:e})=>{let[t,n]=M(`fix`),[r,i]=M(!1);return I(`div`,{className:z([`w-full h-full`]),children:[I(`div`,{className:z([`border border-[#27272A] rounded-sm h-4/5 text-xs overflow-hidden`]),children:[I(`div`,{className:z([`bg-[#18181B] p-1 rounded-t-sm`]),children:I(`div`,{className:z([`flex items-center gap-x-1`]),children:[I(`button`,{onClick:()=>n(`fix`),className:z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`fix`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Fix`}),I(`button`,{onClick:()=>n(`explanation`),className:z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`explanation`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Explanation`}),I(`button`,{onClick:()=>n(`data`),className:z([`flex items-center justify-center whitespace-nowrap py-1.5 px-3 rounded-sm`,t===`data`?`text-white bg-[#7521c8]`:`text-[#6E6E77] hover:text-white`]),children:`Data`})]})}),I(`div`,{className:z([`overflow-y-auto h-full`]),children:I(`pre`,{className:z([`p-2 h-full`,`whitespace-pre-wrap break-words`,`text-gray-300 font-mono `]),children:wl(t,e)})})]}),I(`button`,{onClick:async()=>{let n=wl(t,e);await navigator.clipboard.writeText(n),i(!0),setTimeout(()=>i(!1),1e3)},className:z([`mt-4 px-4 py-2 bg-[#18181B] text-[#6E6E77] rounded-sm`,`hover:text-white transition-colors duration-200`,`flex items-center justify-center gap-x-2 text-xs`]),children:[I(`span`,{children:r?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:z([`transition-transform duration-200`,r&&`scale-110`]),children:r?I(`path`,{d:`M20 6L9 17l-5-5`}):I(j,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})]})},El=(e,t)=>{switch(e.kind){case`dropped-frames`:return[...t?[{name:`Total Processing Time`,time:el(e.timing),color:`bg-red-500`,kind:`total-processing-time`}]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`},{name:`JavaScript, DOM updates, Draw Frame`,time:e.timing.otherTime,color:`bg-[#4b4b4b]`,kind:`other-frame-drop`}]];case`interaction`:return[...t?[]:[{name:`Renders`,time:e.timing.renderTime,color:`bg-purple-500`,kind:`render`}],{name:t?`React Renders, Hooks, Other JavaScript`:`JavaScript/React Hooks `,time:e.timing.otherJSTime,color:`bg-[#EFD81A]`,kind:`other-javascript`},{name:`Update DOM and Draw New Frame`,time:el(e.timing)-e.timing.renderTime-e.timing.otherJSTime,color:`bg-[#1D3A66]`,kind:`other-not-javascript`}]}},Dl=({selectedEvent:e})=>{let[t]=M(Qu()??!1),{notificationState:n}=rl(),[r,i]=M(n.routeMessage?.name?[n.routeMessage.name]:[]),a=El(e,t),o=Jt(Ru);N(()=>{if(n.routeMessage?.name){let e=o?.querySelector(`#overview-scroll-container`),t=o?.querySelector(`#react-scan-overview-bar-${n.routeMessage.name}`);if(e&&t){let n=t.getBoundingClientRect().top-e.getBoundingClientRect().top;e.scrollTop+=n}}},[n.route]),N(()=>{n.route===`other-visualization`&&i(e=>n.routeMessage?.name?[n.routeMessage.name]:e)},[n.route]);let s=a.reduce((e,t)=>e+t.time,0);return I(`div`,{className:`rounded-sm border border-zinc-800 text-xs`,children:[I(`div`,{className:`p-2 border-b border-zinc-800 bg-zinc-900/50`,children:I(`div`,{className:`flex items-center justify-between`,children:[I(`h3`,{className:`text-xs font-medium`,children:`What was time spent on?`}),I(`span`,{className:`text-xs text-zinc-400`,children:[`Total: `,s.toFixed(0),`ms`]})]})}),I(`div`,{className:`divide-y divide-zinc-800`,children:a.map(t=>{let n=r.includes(t.kind);return I(`div`,{id:`react-scan-overview-bar-${t.kind}`,children:[I(`button`,{onClick:()=>i(e=>e.includes(t.kind)?e.filter(e=>e!==t.kind):[...e,t.kind]),className:`w-full px-3 py-2 flex items-center gap-4 hover:bg-zinc-800/50 transition-colors`,children:I(`div`,{className:`flex-1`,children:[I(`div`,{className:`flex items-center justify-between mb-2`,children:[I(`div`,{className:`flex items-center gap-0.5`,children:[I(`svg`,{className:`h-4 w-4 text-zinc-400 transition-transform ${n?`rotate-90`:``}`,fill:`none`,stroke:`currentColor`,viewBox:`0 0 24 24`,children:I(`path`,{strokeLinecap:`round`,strokeLinejoin:`round`,strokeWidth:2,d:`M9 5l7 7-7 7`})}),I(`span`,{className:`font-medium flex items-center text-left`,children:t.name})]}),I(`span`,{className:` text-zinc-400`,children:[t.time.toFixed(0),`ms`]})]}),I(`div`,{className:`h-1 bg-zinc-800 rounded-full overflow-hidden`,children:I(`div`,{className:`h-full ${t.color} transition-all`,style:{width:`${t.time/s*100}%`}})})]})}),n&&I(`div`,{className:`bg-zinc-900/30 border-t border-zinc-800 px-2.5 py-3`,children:I(`p`,{className:` text-zinc-400 mb-4 text-xs`,children:rc(()=>{switch(e.kind){case`interaction`:switch(t.kind){case`render`:return I(Ml,{input:Al(e)});case`other-javascript`:return I(Ml,{input:jl(e)});case`other-not-javascript`:return I(Ml,{input:Ol(e)})}case`dropped-frames`:switch(t.kind){case`total-processing-time`:return I(Ml,{input:{kind:`total-processing`,data:{time:el(e.timing)}}});case`render`:return I(j,{children:I(Ml,{input:{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({name:t.name,percentage:t.totalTime/el(e.timing)}))}}})});case`other-frame-drop`:return I(Ml,{input:{kind:`other`}})}}})})})]},t.kind)})})]})},Ol=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0),n=e.timing.renderTime/el(e.timing)*100;return t>100?{kind:`high-render-count-update-dom-draw-frame`,data:{count:t,percentageOfTotal:n,copyButton:I(kl,{})}}:{kind:`update-dom-draw-frame`,data:{copyButton:I(kl,{})}}},kl=()=>{let[e,t]=M(!1),{notificationState:n}=rl();return I(`button`,{onClick:async()=>{n.selectedEvent&&(await navigator.clipboard.writeText(wl(`explanation`,n.selectedEvent)),t(!0),setTimeout(()=>t(!1),1e3))},className:`bg-zinc-800 flex hover:bg-zinc-700 text-zinc-200 px-2 py-1 rounded gap-x-3`,children:[I(`span`,{children:e?`Copied!`:`Copy Prompt`}),I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,width:`16`,height:`16`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,strokeWidth:`2`,strokeLinecap:`round`,strokeLinejoin:`round`,className:z([`transition-transform duration-200`,e&&`scale-110`]),children:e?I(`path`,{d:`M20 6L9 17l-5-5`}):I(j,{children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]})})]})},Al=e=>e.timing.renderTime/el(e.timing)>.3?{kind:`render`,data:{topByTime:e.groupedFiberRenders.toSorted((e,t)=>t.totalTime-e.totalTime).slice(0,3).map(t=>({percentage:t.totalTime/el(e.timing),name:t.name}))}}:{kind:`other`},jl=e=>{let t=e.groupedFiberRenders.reduce((e,t)=>e+t.count,0);return e.timing.otherJSTime/el(e.timing)<.2?{kind:`js-explanation-base`}:e.groupedFiberRenders.find(e=>e.count>200)||e.groupedFiberRenders.reduce((e,t)=>e+t.count,0)>500?{kind:`high-render-count-high-js`,data:{renderCount:t,topByCount:e.groupedFiberRenders.filter(e=>e.count>100).toSorted((e,t)=>t.count-e.count).slice(0,3)}}:e.timing.otherJSTime/el(e.timing)>.3?e.timing.renderTime>.2?{kind:`js-explanation-base`}:{kind:`low-render-count-high-js`,data:{renderCount:t}}:{kind:`js-explanation-base`}},Ml=({input:e})=>{switch(e.kind){case`total-processing`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to draw the entire frame that was presented to the user. To be at 60FPS, this number needs to be `,`<=16ms`]}),I(`p`,{children:`To debug the issue, check the "Ranked" tab to see if there are significant component renders`}),I(`p`,{children:`On a production React build, React Scan can't access the time it took for component to render. To get that information, run React Scan on a development build`}),I(`p`,{children:[`To understand precisely what caused the slowdown while in production, use the `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]}),I(`p`,{})]});case`render`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the time it took React to run components, and internal logic to handle the output of your component.`}),I(`div`,{className:z([`flex flex-col`]),children:[I(`p`,{children:`The slowest components for this time period were:`}),e.data.topByTime.map(e=>I(`div`,{children:[I(`strong`,{children:e.name}),`:`,` `,(e.percentage*100).toFixed(0),`% of total`]},e.name))]}),I(`p`,{children:`To view the render times of all your components, and what caused them to render, go to the "Ranked" tab`}),I(`p`,{children:`The "Ranked" tab shows the render times of every component.`}),I(`p`,{children:`The render times of the same components are grouped together into one bar.`}),I(`p`,{children:`Clicking the component will show you what props, state, or context caused the component to re-render.`})]});case`js-explanation-base`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`The most common culprit for high JS time is expensive hooks, like expensive callbacks inside of `,I(`code`,{children:`useEffect`}),`'s or a large number of useEffect's called, but this can also be JavaScript event handlers (`,I(`code`,{children:`'onclick'`}),`, `,I(`code`,{children:`'onchange'`}),`) that performed expensive computation.`]}),I(`p`,{children:`If you have lots of components rendering that call hooks, like useEffect, it can add significant overhead even if the callbacks are not expensive. If this is the case, you can try optimizing the renders of those components to avoid the hook from having to run.`}),I(`p`,{children:[`You should profile your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to learn exactly which functions took the longest to execute.`]})]});case`high-render-count-high-js`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),e.data.renderCount===0?I(j,{children:[I(`p`,{children:`There were no renders, which means nothing related to React caused this slowdown. The most likely cause of the slowdown is a slow JavaScript event handler, or code related to a Web API`}),I(`p`,{children:[`You should try to reproduce the slowdown while profiling your website with the`,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]}):I(j,{children:[` `,I(`p`,{children:[`There were `,I(`strong`,{children:e.data.renderCount}),` renders, which could have contributed to the high JavaScript/Hook time if they ran lots of hooks, like `,I(`code`,{children:`useEffects`}),`.`]}),I(`div`,{className:z([`flex flex-col`]),children:[I(`p`,{children:`You should try optimizing the renders of:`}),e.data.topByCount.map(e=>I(`div`,{children:[`- `,I(`strong`,{children:e.name}),` (rendered `,e.count,`x)`]},e.name))]}),`and then checking if the problem still exists.`,I(`p`,{children:[`You can also try profiling your app using the`,` `,I(`strong`,{children:`Chrome DevTools profiler`}),` to see exactly what functions took the longest to execute.`]})]})]});case`low-render-count-high-js`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`This is the period when JavaScript hooks and other JavaScript outside of React Renders run.`}),I(`p`,{children:[`There were only `,I(`strong`,{children:e.data.renderCount}),` renders detected, which means either you had very expensive hooks like`,` `,I(`code`,{children:`useEffect`}),`/`,I(`code`,{children:`useLayoutEffect`}),`, or there is other JavaScript running during this interaction that took up the majority of the time.`]}),I(`p`,{children:[`To understand precisely what caused the slowdown, use the`,` `,I(`strong`,{children:`Chrome profiler`}),` and analyze the function call times.`]})]});case`high-render-count-update-dom-draw-frame`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:[`During this interaction, there were`,` `,I(`strong`,{children:e.data.count}),` renders, which was`,` `,I(`strong`,{children:[e.data.percentageOfTotal.toFixed(0),`%`]}),` of the time spent processing`]}),I(`p`,{children:`The work performed as a result of the renders may have forced the browser to spend a lot of time to draw the next frame.`}),I(`p`,{children:`You can try optimizing the renders to see if the performance problem still exists using the "Ranked" tab.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`update-dom-draw-frame`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:`These are the calculations the browser is forced to do in response to the JavaScript that ran during the interaction.`}),I(`p`,{children:`This can be caused by CSS updates/CSS recalculations, or new DOM elements/DOM mutations.`}),I(`p`,{children:`If you use an AI-based code editor, you can export the performance data collected as a prompt.`}),I(`p`,{children:e.data.copyButton}),I(`p`,{children:`Provide this formatted data to the model and ask it to find, or fix, what could be causing this performance problem.`}),I(`p`,{children:`For a larger selection of prompts, try the "Prompts" tab`})]});case`other`:return I(`div`,{className:z([`text-[#E4E4E7] text-[10px] leading-6 flex flex-col gap-y-2`]),children:[I(`p`,{children:[`This is the time it took to run everything other than React renders. This can be hooks like `,I(`code`,{children:`useEffect`}),`, other JavaScript not part of React, or work the browser has to do to update the DOM and draw the next frame.`]}),I(`p`,{children:[`To get a better picture of what happened, profile your app using the`,` `,I(`strong`,{children:`Chrome profiler`}),` when the performance problem arises.`]})]})}},Nl=null,Pl=null,Fl=null,G=hn({kind:`idle`,current:null}),Il=null,Ll=0,Rl=1.8,K=.05,zl=1/60,q=()=>{Il&&cancelAnimationFrame(Il),Il=requestAnimationFrame(e=>{if(!Nl||!Pl)return;let t=Ll?Math.min((e-Ll)/1e3,K):zl;Ll=e;let n=Rl*t;Pl.clearRect(0,0,Nl.width,Nl.height);let r=`hsl(271, 76%, 53%)`,i=G.value,{alpha:a,current:o}=rc(()=>{switch(i.kind){case`transition`:{let e=i.current?.alpha&&i.current.alpha>0?i.current:i.transitionTo;return{alpha:e?e.alpha:0,current:e}}case`move-out`:return{alpha:i.current?.alpha??0,current:i.current};case`idle`:return{alpha:1,current:i.current}}});switch(o?.rects.forEach(e=>{Pl&&(Pl.shadowColor=r,Pl.shadowBlur=6,Pl.strokeStyle=r,Pl.lineWidth=2,Pl.globalAlpha=a,Pl.beginPath(),Pl.rect(e.left,e.top,e.width,e.height),Pl.stroke(),Pl.shadowBlur=0,Pl.beginPath(),Pl.rect(e.left,e.top,e.width,e.height),Pl.stroke())}),i.kind){case`move-out`:if(i.current.alpha===0){G.value={kind:`idle`,current:null},Ll=0;return}i.current.alpha<=.01&&(i.current.alpha=0),i.current.alpha=Math.max(0,i.current.alpha-n),q();return;case`transition`:if(i.current&&i.current.alpha>0){i.current.alpha=Math.max(0,i.current.alpha-n),q();return}if(i.transitionTo.alpha===1){G.value={kind:`idle`,current:i.transitionTo},Ll=0;return}i.transitionTo.alpha=Math.min(i.transitionTo.alpha+n,1),q();case`idle`:Ll=0;return}})},J=null,Bl=e=>{if(Nl=document.createElement(`canvas`),Pl=Nl.getContext(`2d`,{alpha:!0}),!Pl)return null;let t=window.devicePixelRatio||1,{innerWidth:n,innerHeight:r}=window;Nl.style.width=`${n}px`,Nl.style.height=`${r}px`,Nl.width=n*t,Nl.height=r*t,Nl.style.position=`fixed`,Nl.style.left=`0`,Nl.style.top=`0`,Nl.style.pointerEvents=`none`,Nl.style.zIndex=`2147483600`,Pl.scale(t,t),e.appendChild(Nl),J&&window.removeEventListener(`resize`,J);let i=()=>{if(!Nl||!Pl)return;let e=window.devicePixelRatio||1,{innerWidth:t,innerHeight:n}=window;Nl.style.width=`${t}px`,Nl.style.height=`${n}px`,Nl.width=t*e,Nl.height=n*e,Pl.scale(e,e),q()};return J=i,window.addEventListener(`resize`,i),G.subscribe(()=>{requestAnimationFrame(()=>{q()})}),Vl};function Vl(){Fl&&=(cancelAnimationFrame(Fl),null),Nl?.parentNode&&Nl.parentNode.removeChild(Nl),Nl=null,Pl=null}var Hl=()=>{let e=G.value.current?G.value.current:G.value.kind===`transition`?G.value.transitionTo:null;if(e){if(G.value.kind===`transition`){G.value={kind:`move-out`,current:G.value.current?.alpha===0?G.value.transitionTo:G.value.current??G.value.transitionTo};return}G.value={kind:`move-out`,current:{alpha:0,...e}}}},Ul=({selectedEvent:e})=>{let t=el(e.timing),n=t-e.timing.renderTime,[r]=M(Qu()),i=e.groupedFiberRenders.map(e=>({event:e,kind:`render`,totalTime:r?e.count:e.totalTime})),a=rc(()=>{switch(e.kind){case`dropped-frames`:return e.timing.renderTime/t<.1;case`interaction`:return(e.timing.otherJSTime+e.timing.renderTime)/t<.2}});e.kind===`interaction`&&!r&&i.push({kind:`other-javascript`,totalTime:e.timing.otherJSTime}),a&&!r&&(e.kind===`interaction`?i.push({kind:`other-not-javascript`,totalTime:el(e.timing)-e.timing.renderTime-e.timing.otherJSTime}):i.push({kind:`other-frame-drop`,totalTime:n}));let o=P({lastCallAt:null,timer:null}),s=i.reduce((e,t)=>e+t.totalTime,0);return I(`div`,{className:z([`flex flex-col h-full w-full gap-y-1`]),children:[rc(()=>{if(r&&i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No data available`}),I(`p`,{className:`text-x w-full text-lefts`,children:`No data was collected during this period`})]});if(i.length===0)return I(`div`,{className:`flex flex-col items-center justify-center h-full text-zinc-400`,children:[I(`p`,{className:`text-sm w-full text-left text-white mb-1.5`,children:`No renders collected`}),I(`p`,{className:`text-x w-full text-lefts`,children:`There were no renders during this period`})]})}),i.toSorted((e,t)=>t.totalTime-e.totalTime).map(e=>I(Gl,{bars:i,bar:e,debouncedMouseEnter:o,totalBarTime:s,isProduction:r},e.kind===`render`?e.event.id:e.kind))]})},Wl=e=>e.current&&e.current.alpha>0?`fading-out`:`fading-in`,Gl=({bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i,depth:a=0})=>{let{setNotificationState:o,setRoute:s}=rl(),[c,l]=M(!1),u=e.kind===`render`?e.event.parents.size===0:!0,d=i.filter(t=>t.kind===`render`&&e.kind===`render`?e.event.parents.has(t.event.name)&&t.event.name!==e.event.name:!1),f=e.kind===`render`?Array.from(e.event.parents).filter(e=>!i.some(t=>t.kind===`render`&&t.event.name===e)):[];return I(`div`,{className:`w-full`,children:[I(`div`,{className:z([`w-full flex items-center relative text-xs min-w-0`]),children:[I(`button`,{onMouseLeave:()=>{t.current.timer&&clearTimeout(t.current.timer),Hl()},onMouseEnter:async()=>{let n=async()=>{if(t.current.lastCallAt=Date.now(),e.kind!==`render`){let e=G.value.current?G.value.current:G.value.kind===`transition`?G.value.transitionTo:null;if(!e){G.value={kind:`idle`,current:null};return}G.value={kind:`move-out`,current:{alpha:0,...e}};return}let n=G.value,r=rc(()=>{switch(n.kind){case`transition`:return n.transitionTo;case`idle`:case`move-out`:return n.current}}),i=[];if(n.kind===`transition`){let t=Wl(n);rc(()=>{switch(t){case`fading-in`:G.value={kind:`transition`,current:n.transitionTo,transitionTo:{rects:i,alpha:0,name:e.event.name}};return;case`fading-out`:G.value={kind:`transition`,current:G.value.current?{alpha:0,...G.value.current}:null,transitionTo:{rects:i,alpha:0,name:e.event.name}};return}})}else G.value={kind:`transition`,transitionTo:{rects:i,alpha:0,name:e.event.name},current:r?{alpha:0,...r}:null};let a=e.event.elements.filter(e=>e instanceof Element);for await(let e of js(a))e.forEach(({boundingClientRect:e})=>{i.push(e)}),q()};if(t.current.lastCallAt&&Date.now()-t.current.lastCallAt<200){t.current.timer&&clearTimeout(t.current.timer),t.current.timer=setTimeout(()=>{n()},200);return}n()},onClick:()=>{e.kind===`render`?(o(t=>({...t,selectedFiber:e.event})),s({route:`render-explanation`,routeMessage:null})):s({route:`other-visualization`,routeMessage:{kind:`auto-open-overview-accordion`,name:e.kind}})},className:z([`h-full w-[90%] flex items-center hover:bg-[#0f0f0f] rounded-l-md min-w-0 relative`]),children:[I(`div`,{style:{minWidth:`fit-content`,width:`${e.totalTime/n*100}%`},className:z([`flex items-center rounded-sm text-white text-xs h-[28px] shrink-0`,e.kind===`render`&&`bg-[#412162] group-hover:bg-[#5b2d89]`,e.kind===`other-frame-drop`&&`bg-[#44444a] group-hover:bg-[#6a6a6a]`,e.kind===`other-javascript`&&`bg-[#efd81a6b] group-hover:bg-[#efda1a2f]`,e.kind===`other-not-javascript`&&`bg-[#214379d4] group-hover:bg-[#21437982]`])}),I(`div`,{className:z([`absolute inset-0 flex items-center px-2`,`min-w-0`]),children:I(`div`,{className:`flex items-center gap-x-2 min-w-0 w-full`,children:[I(`span`,{className:z([`truncate`]),children:rc(()=>{switch(e.kind){case`other-frame-drop`:return`JavaScript, DOM updates, Draw Frame`;case`other-javascript`:return`JavaScript/React Hooks`;case`other-not-javascript`:return`Update DOM and Draw New Frame`;case`render`:return e.event.name}})}),e.kind===`render`&&tl(e.event)&&I(`div`,{style:{lineHeight:`10px`},className:z([`px-1 py-0.5 bg-[#6a369e] flex items-center rounded-sm font-semibold text-[8px] shrink-0`]),children:`Memoizable`})]})})]}),I(`button`,{onClick:()=>e.kind===`render`&&!u&&l(!c),className:z([`flex items-center min-w-fit shrink-0 rounded-r-md h-[28px]`,!u&&`hover:bg-[#0f0f0f]`,e.kind===`render`&&!u?`cursor-pointer`:`cursor-default`]),children:[I(`div`,{className:`w-[20px] flex items-center justify-center`,children:e.kind===`render`&&!u&&I(al,{className:z(`transition-transform`,c&&`rotate-90`),size:16})}),I(`div`,{style:{minWidth:u?`fit-content`:r?`30px`:`60px`},className:`flex items-center justify-end gap-x-1`,children:[e.kind===`render`&&I(`span`,{className:z([`text-[10px]`]),children:[`x`,e.event.count]}),(e.kind!==`render`||!r)&&I(`span`,{className:`text-[10px] text-[#7346a0] pr-1`,children:[e.totalTime<1?`<1`:e.totalTime.toFixed(0),`ms`]})]})]}),a===0&&I(`div`,{className:z([`absolute right-0 top-1/2 transition-none -translate-y-1/2 bg-white text-black px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity mr-16`,`pointer-events-none`]),children:`Click to learn more`})]}),c&&(d.length>0||f.length>0)&&I(`div`,{className:`pl-3 flex flex-col gap-y-1 mt-1`,children:[d.toSorted((e,t)=>t.totalTime-e.totalTime).map((e,o)=>I(Gl,{depth:a+1,bar:e,debouncedMouseEnter:t,totalBarTime:n,isProduction:r,bars:i},o)),f.map(e=>I(`div`,{className:`w-full`,children:I(`div`,{className:`w-full flex items-center relative text-xs`,children:I(`div`,{className:`h-full w-full flex items-center relative`,children:[I(`div`,{className:`flex items-center rounded-sm text-white text-xs h-[28px] w-full`}),I(`div`,{className:`absolute inset-0 flex items-center px-2`,children:I(`span`,{className:`truncate whitespace-nowrap text-white/70 w-full`,children:e})})]})})},e))]})]})},Kl=({selectedEvent:e,selectedFiber:t})=>{let{setRoute:n}=rl(),[r,i]=M(!0),[a]=M(Qu());Gt(()=>{let e=localStorage.getItem(`react-scan-tip-shown`),t=e===`true`?!0:e===`false`?!1:null;if(t===null){i(!0),localStorage.setItem(`react-scan-tip-is-shown`,`true`);return}t||i(!1)},[]);let o=t.changes.context.length===0&&t.changes.props.length===0&&t.changes.state.length===0;return I(`div`,{className:z([`w-full min-h-fit h-full flex flex-col py-4 pt-0 rounded-sm`]),children:[I(`div`,{className:z([`flex items-start gap-x-4 `]),children:[I(`button`,{onClick:()=>{n({route:`render-visualization`,routeMessage:null})},className:z([`text-white hover:bg-[#34343b] flex gap-x-1 justify-center items-center mb-4 w-fit px-2.5 py-1.5 text-xs rounded-sm bg-[#18181B]`]),children:[I(ul,{size:14}),` `,I(`span`,{children:`Overview`})]}),I(`div`,{className:z([`flex flex-col gap-y-1`]),children:[I(`div`,{className:z([`text-sm font-bold text-white overflow-x-hidden`]),children:I(`div`,{className:`flex items-center gap-x-2 truncate`,children:t.name})}),I(`div`,{className:z([`flex gap-x-2`]),children:[!a&&I(j,{children:I(`div`,{className:z([`text-xs text-gray-400`]),children:[`• Render time: `,t.totalTime.toFixed(0),`ms`]})}),I(`div`,{className:z([`text-xs text-gray-400 mb-4`]),children:[`• Renders: `,t.count,`x`]})]})]})]}),r&&!o&&I(`div`,{className:z([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex relative`]),children:[I(`button`,{onClick:()=>{i(!1),localStorage.setItem(`react-scan-tip-shown`,`false`)},className:z([`absolute right-2 top-2 rounded-sm p-1 hover:bg-[#18181B]`]),children:I(sl,{size:12})}),I(`div`,{className:z([`w-1 bg-[#d36cff]`])}),I(`div`,{className:z([`flex-1`]),children:[I(`div`,{className:z([`px-3 py-2 text-gray-100 text-xs font-semibold`]),children:`How to stop renders`}),I(`div`,{className:z([`px-3 pb-2 text-gray-400 text-[10px]`]),children:`Stop the following props, state and context from changing between renders, and wrap the component in React.memo if not already`})]})]}),o&&I(`div`,{className:z([`w-full mb-4 bg-[#0A0A0A] border border-[#27272A] rounded-sm overflow-hidden flex`]),children:[I(`div`,{className:z([`w-1 bg-[#d36cff]`])}),I(`div`,{className:z([`flex-1`]),children:[I(`div`,{className:z([`px-3 py-2 text-gray-100 text-sm font-semibold`]),children:`No changes detected`}),I(`div`,{className:z([`px-3 pb-2 text-gray-400 text-xs`]),children:`This component would not have rendered if it was memoized`})]})]}),I(`div`,{className:z([`flex w-full`]),children:[I(`div`,{className:z([`flex flex-col border border-[#27272A] rounded-l-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:z([`text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Props`}),t.changes.props.length>0?t.changes.props.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:z([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:z([`text-white `]),children:e.name}),I(`div`,{className:z([` text-[8px]  text-[#d36cff] pl-1 py-1 `]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:z([`flex flex-col border border-[#27272A] border-l-0 overflow-hidden w-1/3`]),children:[I(`div`,{className:z([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed State`}),t.changes.state.length>0?t.changes.state.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:z([`flex flex-col justify-between items-center border-t overflow-x-auto border-[#27272A] px-1 py-1 text-wrap bg-[#0A0A0A] text-[10px]`]),children:[I(`span`,{className:z([`text-white `]),children:[`index `,e.index]}),I(`div`,{className:z([`rounded-full  text-[#d36cff] pl-1 py-1 text-[8px]`]),children:[e.count,`/`,t.count,`x`]})]},e.index)):I(`div`,{className:z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A]`]),children:`No changes`})]}),I(`div`,{className:z([`flex flex-col border border-[#27272A] border-l-0 rounded-r-sm overflow-hidden w-1/3`]),children:[I(`div`,{className:z([` text-[14px] font-semibold px-2 py-2 bg-[#18181B] text-white flex justify-center`]),children:`Changed Context`}),t.changes.context.length>0?t.changes.context.toSorted((e,t)=>t.count-e.count).map(e=>I(`div`,{className:z([`flex flex-col justify-between items-center border-t  border-[#27272A] px-1 py-1 bg-[#0A0A0A] text-[10px] overflow-x-auto`]),children:[I(`span`,{className:z([`text-white `]),children:e.name}),I(`div`,{className:z([`rounded-full text-[#d36cff] pl-1 py-1 text-[8px] text-wrap`]),children:[e.count,`/`,t.count,`x`]})]},e.name)):I(`div`,{className:z([`flex items-center justify-center h-full bg-[#0A0A0A] text-[#A1A1AA] border-t border-[#27272A] py-2`]),children:`No changes`})]})]})]})},ql=()=>{let{notificationState:e,setNotificationState:t}=rl(),[n,r]=M(`...`),i=P(null);if(N(()=>{let e=setInterval(()=>{r(e=>e===`...`?``:e+`.`)},500);return()=>clearInterval(e)},[]),!e.selectedEvent)return I(`div`,{ref:i,className:z([`h-full w-full flex flex-col items-center justify-center relative py-2 px-4`]),children:[I(`div`,{className:z([`p-2 flex justify-center items-center border-[#27272A] absolute top-0 right-0`]),children:I(`button`,{onClick:()=>{H.value={view:`none`}},children:I(sl,{size:18,className:`text-[#6F6F78]`})})}),I(`div`,{className:z([`flex flex-col items-start pt-5 bg-[#0A0A0A] p-5 rounded-sm max-w-md`,` shadow-lg`]),children:I(`div`,{className:z([`flex flex-col items-start gap-y-4`]),children:[I(`div`,{className:z([`flex items-center`]),children:I(`span`,{className:z([`text-zinc-400 font-medium text-[17px]`]),children:[`Scanning for slowdowns`,n]})}),e.events.length!==0&&I(`p`,{className:z([`text-xs`]),children:[`Click on an item in the`,` `,I(`span`,{className:z([`text-purple-400`]),children:`History`}),` list to get started`]}),I(`p`,{className:z([`text-zinc-600 text-xs`]),children:`You don't need to keep this panel open for React Scan to record slowdowns`}),I(`p`,{className:z([`text-zinc-600 text-xs`]),children:`Enable audio alerts to hear a delightful ding every time a large slowdown is recorded`}),I(`button`,{onClick:()=>{if(e.audioNotificationsOptions.enabled){t(e=>(e.audioNotificationsOptions.audioContext?.state!==`closed`&&e.audioNotificationsOptions.audioContext?.close(),localStorage.setItem(`react-scan-notifications-audio`,`false`),{...e,audioNotificationsOptions:{audioContext:null,enabled:!1}}));return}localStorage.setItem(`react-scan-notifications-audio`,`true`);let n=new AudioContext;Sr(n),t(e=>({...e,audioNotificationsOptions:{enabled:!0,audioContext:n}}))},className:z([`px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-sm w-full`,` text-sm flex items-center gap-x-2 justify-center`]),children:e.audioNotificationsOptions.enabled?I(j,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Disable audio alerts`})}):I(j,{children:I(`span`,{className:`flex items-center gap-x-1`,children:`Enable audio alerts`})})})]})})]});switch(e.route){case`render-visualization`:return I(Jl,{children:I(Ul,{selectedEvent:e.selectedEvent})});case`render-explanation`:if(!e.selectedFiber)throw Error(`Invariant: must have selected fiber when viewing render explanation`);return I(Jl,{children:I(Kl,{selectedFiber:e.selectedFiber,selectedEvent:e.selectedEvent})});case`other-visualization`:return I(Jl,{children:I(`div`,{className:z([`flex w-full h-full flex-col overflow-y-auto`]),id:`overview-scroll-container`,children:I(Dl,{selectedEvent:e.selectedEvent})})});case`optimize`:return I(Jl,{children:I(Tl,{selectedEvent:e.selectedEvent})})}e.route},Jl=({children:e})=>{let{notificationState:t}=rl();if(!t.selectedEvent)throw Error(`Invariant: d must have selected event when viewing render explanation`);return I(`div`,{className:z([`w-full h-full flex flex-col gap-y-2`]),children:[I(`div`,{className:z([`h-[50px] w-full`]),children:I(gl,{selectedEvent:t.selectedEvent})}),I(`div`,{className:z([`h-calc(100%-50px) flex flex-col overflow-y-auto px-3`]),children:e})]})},Yl=({selectedEvent:e})=>{let t=nl(e);switch(e.kind){case`interaction`:return I(`div`,{className:z([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:z([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:z([`flex items-center gap-x-2 `]),children:[I(`span`,{className:z([`text-[#5a5a5a] mr-0.5`]),children:e.type===`click`?`Clicked `:`Typed in `}),I(`span`,{children:$c(e.componentPath)}),I(`div`,{className:z([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[el(e.timing).toFixed(0),`ms processing time`]})]}),I(`div`,{className:z([`flex items-center gap-x-2  justify-end ml-auto`]),children:I(`div`,{className:z([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{H.value={view:`none`}},title:`Close`,children:I(sl,{size:18,className:`text-[#6F6F78]`})})})})]})});case`dropped-frames`:return I(`div`,{className:z([`w-full flex border-b border-[#27272A] min-h-[48px]`]),children:I(`div`,{className:z([`min-w-fit w-full justify-start flex items-center border-r border-[#27272A] pl-5 pr-2 text-sm gap-x-4`]),children:[I(`div`,{className:z([`flex items-center gap-x-2 `]),children:[`FPS Drop`,I(`div`,{className:z([`w-fit flex items-center justify-center h-fit text-white px-1 rounded-sm font-semibold text-[10px] whitespace-nowrap`,t===`low`&&`bg-green-500/50`,t===`needs-improvement`&&`bg-[#b77116]`,t===`high`&&`bg-[#b94040]`]),children:[`dropped to `,e.fps,` FPS`]})]}),I(`div`,{className:z([`flex items-center gap-x-2 w-2/4 justify-end ml-auto`]),children:I(`div`,{className:z([`p-2 flex justify-center items-center border-[#27272A]`]),children:I(`button`,{onClick:()=>{H.value={view:`none`}},children:I(sl,{size:18,className:`text-[#6F6F78]`})})})})]})})}},Xl=({flashingItemsCount:e,totalEvents:t})=>{let[n,r]=M(!1),i=P(0),a=P(0);return N(()=>{if(i.current>=t)return;let e=Date.now()-a.current;if(e>=250){r(!1);let e=setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50);return()=>clearTimeout(e)}else{let n=250-e,o=setTimeout(()=>{r(!1),setTimeout(()=>{i.current=t,a.current=Date.now(),r(!0),setTimeout(()=>{r(!1)},2e3)},50)},n);return()=>clearTimeout(o)}},[e]),n},Zl=({item:e,shouldFlash:t})=>{let[n,r]=M(!1),i=e.events.map(nl).reduce((e,t)=>{switch(t){case`high`:return`high`;case`needs-improvement`:return e===`high`?`high`:`needs-improvement`;case`low`:return e}},`low`),a=Xl({flashingItemsCount:e.events.reduce((e,n)=>t(n.id)?e+1:e,0),totalEvents:e.events.length});return I(`div`,{className:z([`flex flex-col gap-y-0.5`]),children:[I(`button`,{onClick:()=>r(e=>!e),className:z([`pl-2 py-1.5  text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,a&&!n&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:z([`w-4/5 flex items-center justify-start h-full text-xs truncate gap-x-1.5`]),children:[I(`span`,{className:z([`min-w-fit`]),children:I(al,{className:z([`text-[#A1A1AA] transition-transform`,n?`rotate-90`:``]),size:14},`chevron-${e.timestamp}`)}),I(`span`,{className:z([`text-xs`]),children:e.kind===`collapsed-frame-drops`?`FPS Drops`:$c(e.events.at(0)?.componentPath??[])})]}),I(`div`,{className:z([`ml-auto min-w-fit flex justify-end items-center`]),children:I(`div`,{style:{lineHeight:`10px`},className:z([`w-fit flex items-center text-[10px] justify-center h-full text-white px-1 py-1 rounded-sm font-semibold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[`x`,e.events.length]})})]}),n&&I(Ql,{children:e.events.toSorted((e,t)=>t.timestamp-e.timestamp).map(e=>I(tu,{event:e,shouldFlash:t(e.id)}))})]})},Ql=({children:e})=>I(`div`,{className:`relative pl-6 flex flex-col gap-y-1`,children:[I(`div`,{className:`absolute left-3 top-0 bottom-0 w-px bg-[#27272A]`}),e]}),$l=e=>{let t=P([]),[n,r]=M(new Set),i=P(!0);return N(()=>{if(i.current){i.current=!1,t.current=e;return}let n=new Set(e.map(e=>e.id)),a=new Set(t.current.map(e=>e.id)),o=new Set;n.forEach(e=>{a.has(e)||o.add(e)}),o.size>0&&(r(o),setTimeout(()=>{r(new Set)},2e3)),t.current=e},[e]),e=>n.has(e)},eu=({shouldFlash:e})=>{let[t,n]=M(e);return N(()=>{if(e){n(!0);let e=setTimeout(()=>{n(!1)},1e3);return()=>clearTimeout(e)}},[e]),t},tu=({event:e,shouldFlash:t})=>{let{notificationState:n,setNotificationState:r}=rl(),i=nl(e),a=eu({shouldFlash:t});switch(e.kind){case`interaction`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:z([`pl-2 py-1.5  text-sm flex w-full items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:z([`w-4/5 flex items-center justify-start h-full gap-x-1.5`]),children:[I(`span`,{className:z([`min-w-fit text-xs`]),children:rc(()=>{switch(e.type){case`click`:return I(dl,{size:14});case`keyboard`:return I(fl,{size:14})}})}),I(`span`,{className:z([`text-xs pr-1 truncate`]),children:$c(e.componentPath)})]}),I(`div`,{className:z([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:z([`gap-x-0.5 w-fit flex items-end justify-center h-full text-white px-1 py-1 rounded-sm font-semibold text-[10px]`,i===`low`&&`bg-green-500/50`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:I(`div`,{style:{lineHeight:`10px`},className:z([`text-[10px] text-white flex items-end`]),children:[el(e.timing).toFixed(0),`ms`]})})})]});case`dropped-frames`:return I(`button`,{onClick:()=>{r(t=>({...t,selectedEvent:e,route:`render-visualization`,selectedFiber:null}))},className:z([`pl-2 py-1.5  w-full text-sm flex items-center rounded-sm hover:bg-[#18181B] relative overflow-hidden`,e.id===n.selectedEvent?.id&&`bg-[#18181B]`,a&&`after:absolute after:inset-0 after:bg-purple-500/30 after:animate-[fadeOut_1s_ease-out_forwards]`]),children:[I(`div`,{className:z([`w-4/5 flex items-center justify-start h-full text-xs truncate`]),children:[I(ml,{size:14,className:`mr-1.5`}),` FPS Drop`]}),I(`div`,{className:z([` min-w-fit flex justify-end items-center ml-auto`]),children:I(`div`,{style:{lineHeight:`10px`},className:z([`w-fit flex items-center justify-center h-full text-white px-1 py-1 rounded-sm text-[10px] font-bold`,i===`low`&&`bg-green-500/60`,i===`needs-improvement`&&`bg-[#b77116] text-[10px]`,i===`high`&&`bg-[#b94040]`]),children:[e.fps,` FPS`]})})]})}},nu=e=>e.reduce((e,t)=>{let n=e.at(-1);if(!n)return[{kind:`single`,event:t,timestamp:t.timestamp}];switch(n.kind){case`collapsed-keyboard`:return t.kind===`interaction`&&t.type===`keyboard`&&t.componentPath.join(`-`)===n.events[0].componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`single`:return n.event.kind===`interaction`&&n.event.type===`keyboard`&&t.kind===`interaction`&&t.type===`keyboard`&&n.event.componentPath.join(`-`)===t.componentPath.join(`-`)?[...e.filter(e=>e!==n),{kind:`collapsed-keyboard`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:n.event.kind===`dropped-frames`&&t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[n.event,t],timestamp:Math.max(n.event.timestamp,t.timestamp)}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}];case`collapsed-frame-drops`:return t.kind===`dropped-frames`?[...e.filter(e=>e!==n),{kind:`collapsed-frame-drops`,events:[...n.events,t],timestamp:Math.max(...[...n.events,t].map(e=>e.timestamp))}]:[...e,{kind:`single`,event:t,timestamp:t.timestamp}]}},[]),ru=(e=150)=>{let{notificationState:t}=rl(),[n,r]=M(t.events);return N(()=>{setTimeout(()=>{r(t.events)},e)},[t.events]),[n,r]},iu=()=>{let{notificationState:e,setNotificationState:t}=rl(),n=$l(e.events),[r,i]=ru(),a=nu(r).toSorted((e,t)=>t.timestamp-e.timestamp);return I(`div`,{className:z([`w-full h-full gap-y-2 flex flex-col border-r border-[#27272A] overflow-y-auto`]),children:[I(`div`,{className:z([`text-sm text-[#65656D] pl-3 pr-1 w-full flex items-center justify-between`]),children:[I(`span`,{children:`History`}),I(hl,{wrapperProps:{className:`h-full flex items-center justify-center ml-auto`},triggerContent:I(`button`,{className:z([`hover:bg-[#18181B] rounded-full p-2`]),title:`Clear all events`,onClick:()=>{Vc.getState().actions.clear(),t(e=>({...e,selectedEvent:null,selectedFiber:null,route:e.route===`other-visualization`?`other-visualization`:`render-visualization`})),i([])},children:I(pl,{className:z([``]),size:16})}),children:I(`div`,{className:z([`w-full flex justify-center`]),children:`Clear all events`})})]}),I(`div`,{className:z([`flex flex-col px-1 gap-y-1`]),children:[a.length===0&&I(`div`,{className:z([`flex items-center justify-center text-zinc-500 text-sm py-4`]),children:`No Events`}),a.map(e=>rc(()=>{switch(e.kind){case`collapsed-keyboard`:return I(Zl,{shouldFlash:n,item:e});case`single`:return I(tu,{event:e.event,shouldFlash:n(e.event.id)},e.event.id);case`collapsed-frame-drops`:return I(Zl,{shouldFlash:n,item:e})}}))]})]})},au=e=>Object.values(e).map(e=>({id:xr(),totalTime:e.nodeInfo.reduce((e,t)=>e+t.selfTime,0),count:e.nodeInfo.length,name:e.nodeInfo[0].name,deletedAll:!1,parents:e.parents,hasMemoCache:e.hasMemoCache,wasFiberRenderMount:e.wasFiberRenderMount,elements:e.nodeInfo.map(e=>e.element),changes:{context:e.changes.fiberContext.current.filter(t=>e.changes.fiberContext.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberContext.changesCounts.get(t.name)??0})),props:e.changes.fiberProps.current.filter(t=>e.changes.fiberProps.changesCounts.get(t.name)).map(t=>({name:String(t.name),count:e.changes.fiberProps.changesCounts.get(t.name)??0})),state:e.changes.fiberState.current.filter(t=>e.changes.fiberState.changesCounts.get(Number(t.name))).map(t=>({index:t.name,count:e.changes.fiberState.changesCounts.get(Number(t.name))??0}))}})),ou=e=>{N(()=>{let t=setInterval(()=>{e.forEach(e=>{e.groupedFiberRenders&&e.groupedFiberRenders.forEach(e=>{if(e.deletedAll)return;if(!e.elements||e.elements.length===0){e.deletedAll=!0;return}let t=e.elements.length;e.elements=e.elements.filter(e=>e&&e.isConnected),e.elements.length===0&&t>0&&(e.deletedAll=!0)})})},5e3);return()=>{clearInterval(t)}},[e])},su=()=>{let e=Hc(),t=[];return ou(t),e.state.events.forEach(e=>{let n=au(e.kind===`interaction`?e.data.meta.detailedTiming.fiberRenders:e.data.meta.fiberRenders),r=n.reduce((e,t)=>e+t.totalTime,0);switch(e.kind){case`interaction`:{let{commitEnd:i,jsEndDetail:a,interactionStartDetail:o,rafStart:s}=e.data.meta.detailedTiming;a-o-r<0&&nc(`js time must be longer than render time`);let c=Math.max(0,a-o-r),l=Math.max(e.data.meta.latency-(i-o),0);t.push({componentPath:e.data.meta.detailedTiming.componentPath,groupedFiberRenders:n,id:e.id,kind:`interaction`,memory:null,timestamp:e.data.startAt,type:e.data.meta.detailedTiming.interactionType===`keyboard`?`keyboard`:`click`,timing:{renderTime:r,kind:`interaction`,otherJSTime:c,framePreparation:s-a,frameConstruction:i-s,frameDraw:l}});return}case`long-render`:t.push({kind:`dropped-frames`,id:e.id,memory:null,timing:{kind:`dropped-frames`,renderTime:r,otherTime:e.data.meta.latency},groupedFiberRenders:n,timestamp:e.data.startAt,fps:e.data.meta.fps});return}}),t},cu=1e3,lu=()=>{let{notificationState:e,setNotificationState:t}=rl(),n=P(null),r=P(null),i=P(0),[a]=ru(),o=a.filter(e=>nl(e)===`high`).length;return N(()=>{let e=localStorage.getItem(`react-scan-notifications-audio`);if(e!==`false`&&e!==`true`){localStorage.setItem(`react-scan-notifications-audio`,`false`);return}if(e!==`false`){t(e=>e.audioNotificationsOptions.enabled?e:{...e,audioNotificationsOptions:{enabled:!0,audioContext:new AudioContext}});return}},[]),N(()=>{let{audioNotificationsOptions:t}=e;if(!t.enabled||o===0||n.current&&n.current>=o)return;r.current&&clearTimeout(r.current);let a=Date.now()-i.current,s=Math.max(0,cu-a);r.current=setTimeout(()=>{Sr(t.audioContext),n.current=o,i.current=Date.now(),r.current=null},s)},[o]),N(()=>{o===0&&(n.current=null)},[o]),N(()=>()=>{r.current&&clearTimeout(r.current)},[]),null},uu=Vn((e,t)=>{let n=su(),[r,i]=M({detailsExpanded:!1,events:n,filterBy:`latest`,moreInfoExpanded:!1,route:`render-visualization`,selectedEvent:n.toSorted((e,t)=>e.timestamp-t.timestamp).at(-1)??null,selectedFiber:null,routeMessage:null,audioNotificationsOptions:{enabled:!1,audioContext:null}});return r.events=n,I(il.Provider,{value:{notificationState:r,setNotificationState:i,setRoute:({route:e,routeMessage:t})=>{i(n=>{let r={...n,route:e,routeMessage:t};switch(e){case`render-visualization`:return Hl(),{...r,selectedFiber:null};case`optimize`:return Hl(),{...r,selectedFiber:null};case`other-visualization`:return Hl(),{...r,selectedFiber:null};case`render-explanation`:return Hl(),r}})}},children:[I(lu,{}),I(du,{ref:t})]})}),du=Vn((e,t)=>{let{notificationState:n}=rl();return I(`div`,{ref:t,className:z([`h-full w-full flex flex-col`]),children:[n.selectedEvent&&I(`div`,{className:z([`w-full h-[48px] flex flex-col`,n.moreInfoExpanded&&`h-[235px]`,n.moreInfoExpanded&&n.selectedEvent.kind===`dropped-frames`&&`h-[150px]`]),children:[I(Yl,{selectedEvent:n.selectedEvent}),n.moreInfoExpanded&&I(fu,{})]}),I(`div`,{className:z([`flex `,n.selectedEvent?`h-[calc(100%-48px)]`:`h-full`,n.moreInfoExpanded&&`h-[calc(100%-200px)]`,n.moreInfoExpanded&&n.selectedEvent?.kind===`dropped-frames`&&`h-[calc(100%-150px)]`]),children:[I(`div`,{className:z([`h-full min-w-[200px]`]),children:I(iu,{})}),I(`div`,{className:z([`w-[calc(100%-200px)] h-full overflow-y-auto`]),children:I(ql,{})})]})]})}),fu=()=>{let{notificationState:e}=rl();if(!e.selectedEvent)throw Error(`Invariant must have selected event for more info`);let t=e.selectedEvent;return I(`div`,{className:z([`px-4 py-2 border-b border-[#27272A] bg-[#18181B]/50 h-[calc(100%-40px)]`,t.kind===`dropped-frames`&&`h-[calc(100%-25px)]`]),children:I(`div`,{className:z([`flex flex-col gap-y-4 h-full`]),children:rc(()=>{switch(t.kind){case`interaction`:return I(j,{children:[I(`div`,{className:z([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:t.type===`click`?`Clicked component location`:`Typed in component location`}),I(`div`,{className:`font-mono text-[#E4E4E7] flex items-center bg-[#27272A] pl-2 py-1 rounded-sm overflow-x-auto`,children:t.componentPath.toReversed().map((e,n)=>I(j,{children:[I(`span`,{style:{lineHeight:`14px`},className:`text-[10px] whitespace-nowrap`,children:e},e),n<t.componentPath.length-1&&I(`span`,{className:`text-[#6F6F78] mx-0.5`,children:`‹`})]}))})]}),I(`div`,{className:z([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[el(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:z([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]});case`dropped-frames`:return I(j,{children:[I(`div`,{className:z([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Total Time`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:[el(t.timing).toFixed(0),`ms`]})]}),I(`div`,{className:z([`flex items-center gap-x-3`]),children:[I(`span`,{className:`text-[#6F6F78] text-xs font-medium`,children:`Occurred`}),I(`span`,{className:`text-[#E4E4E7] bg-[#27272A] px-1.5 py-1 rounded-sm text-xs`,children:`${((Date.now()-t.timestamp)/1e3).toFixed(0)}s ago`})]})]})}})})})},pu=Ri(()=>{let e=su(),[t,n]=M(e);N(()=>{let t=setTimeout(()=>{n(e)},600);return()=>{clearTimeout(t)}},[e]);let r=Y.inspectState,i=r.value.kind===`inspecting`,a=r.value.kind===`focused`,[o,s]=M([]),c=qt(()=>{switch(Y.inspectState.value.kind){case`inspecting`:H.value={view:`none`},Y.inspectState.value={kind:`inspect-off`};return;case`focused`:H.value={view:`inspector`},Y.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`inspect-off`:H.value={view:`none`},Y.inspectState.value={kind:`inspecting`,hoveredDomElement:null};return;case`uninitialized`:return}},[]),l=qt(e=>{if(e.preventDefault(),e.stopPropagation(),!X.instrumentation)return;let t=!X.instrumentation.isPaused.value;X.instrumentation.isPaused.value=t,Oi(`react-scan-options`,{...Di(`react-scan-options`),enabled:!t})},[]);Mn(()=>{Y.inspectState.value.kind===`uninitialized`&&(Y.inspectState.value={kind:`inspect-off`})});let u=null,d=`#999`;return i?(u=I(Cr,{name:`icon-inspect`}),d=`#8e61e3`):a?(u=I(Cr,{name:`icon-focus`}),d=`#8e61e3`):(u=I(Cr,{name:`icon-inspect`}),d=`#999`),Gt(()=>{H.value.view===`notifications`&&s([...new Set(e.map(e=>e.id)).values()])},[e.length,H.value.view]),I(`div`,{className:`flex max-h-9 min-h-9 flex-1 items-stretch overflow-hidden`,children:[I(`div`,{className:`h-full flex items-center min-w-fit`,children:I(`button`,{type:`button`,id:`react-scan-inspect-element`,title:`Inspect element`,onClick:c,className:`button flex items-center justify-center h-full w-full pl-3 pr-2.5`,style:{color:d},children:u})}),I(`div`,{className:`h-full flex items-center justify-center`,children:I(`button`,{type:`button`,id:`react-scan-notifications`,title:`Notifications`,onClick:()=>{switch(Y.inspectState.value.kind!==`inspect-off`&&(Y.inspectState.value={kind:`inspect-off`}),H.value.view){case`inspector`:Y.inspectState.value={kind:`inspect-off`},s([...new Set(e.map(e=>e.id)).values()]),H.value={view:`notifications`};return;case`notifications`:H.value={view:`none`};return;case`none`:s([...new Set(e.map(e=>e.id)).values()]),H.value={view:`notifications`};return}},className:`button flex items-center justify-center h-full pl-2.5 pr-2.5`,style:{color:d},children:I(ol,{events:t.filter(e=>!o.includes(e.id)).map(e=>nl(e)===`high`),size:16,className:z([`text-[#999]`,H.value.view===`notifications`&&`text-[#8E61E3]`])})})}),I(Qs,{checked:!X.instrumentation?.isPaused.value,onChange:l,className:`place-self-center`,title:`Outline Re-renders`}),X.options.value.showFPS&&I(ec,{})]})}),mu=bn(()=>Y.inspectState.value.kind===`inspecting`),hu=bn(()=>z(`relative`,`flex-1`,`flex flex-col`,`rounded-t-lg`,`overflow-hidden`,`opacity-100`,`transition-[opacity]`,mu.value&&`opacity-0 duration-0 delay-0`)),gu=bn(()=>H.value.view===`inspector`),_u=bn(()=>H.value.view===`notifications`),vu=()=>I(`div`,{className:z(`flex flex-1 flex-col`,`overflow-hidden z-10`,`rounded-lg`,`bg-black`,`opacity-100`,`transition-[border-radius]`,`peer-hover/left:rounded-l-none`,`peer-hover/right:rounded-r-none`,`peer-hover/top:rounded-t-none`,`peer-hover/bottom:rounded-b-none`),children:[I(`div`,{className:hu,children:[I(Zs,{}),I(`div`,{className:z(`relative`,`flex-1 flex`,`text-white`,`bg-[#0A0A0A]`,`transition-opacity delay-150`,`overflow-hidden`,`border-b border-[#222]`),children:[I(yu,{isOpen:gu,children:I(La,{})}),I(yu,{isOpen:_u,children:I(uu,{})})]})]}),I(pu,{})]}),yu=({isOpen:e,children:t})=>I(`div`,{className:z(`flex-1`,`opacity-0`,`overflow-y-auto overflow-x-hidden`,`transition-opacity delay-0`,`pointer-events-none`,e.value&&`opacity-100 delay-150 pointer-events-auto`),children:I(`div`,{className:`absolute inset-0 flex`,children:t})}),bu=(e,t,n)=>e+(t-e)*n,xu={frameInterval:1e3/60,speeds:{fast:.51,slow:.1,off:0}},Su=mr&&window.devicePixelRatio||1,Cu=()=>{let e=P(null),t=P(null),n=P(null),r=P(null),i=P(null),a=P(0),o=P(),s=P(new Map),c=P(!1),l=P(0),u=(e,t,n,r)=>{e.save(),e.strokeStyle=`white`,e.fillStyle=`white`,e.lineWidth=1.5;let i=r*.6,a=r*.5,o=t+(r-i)/2,s=n;e.beginPath(),e.arc(o+i/2,s+a/2,i/2,Math.PI,0,!1),e.stroke();let c=r*.8,l=r*.5,u=t+(r-c)/2,d=n+a/2;e.fillRect(u,d,c,l),e.restore()},d=(e,t,n,i)=>{if(!i)return;let a=(i?.type&&Ce(i.type))??`Unknown`;e.save(),e.font=`12px system-ui, -apple-system, sans-serif`;let o=e.measureText(a).width,s=n===`locked`?14:0,c=n===`locked`?6:0,l=o+16+s+c,d=t.left,f=t.top-24-4;if(e.fillStyle=`rgb(37, 37, 38, .75)`,e.beginPath(),e.roundRect(d,f,l,24,3),e.fill(),n===`locked`){let t=d+8,n=f+(24-s)/2+2;u(e,t,n,s),r.current={x:t,y:n,width:s,height:s}}else r.current=null;e.fillStyle=`white`,e.textBaseline=`middle`;let p=d+8+(n===`locked`?s+c:0);e.fillText(a,p,f+24/2),e.restore()},f=(e,t,r,i)=>{if(!n.current)return;let a=n.current;t.clearRect(0,0,e.width,e.height),t.strokeStyle=`rgba(142, 97, 227, 0.5)`,t.fillStyle=`rgba(173, 97, 230, 0.10)`,r===`locked`?t.setLineDash([]):t.setLineDash([4]),t.lineWidth=1,t.fillRect(a.left,a.top,a.width,a.height),t.strokeRect(a.left,a.top,a.width,a.height),d(t,a,r,i)},p=(e,t,r,i,s,c)=>{let u=X.options.value.animationSpeed,d=xu.speeds[u]??xu.speeds.off,p=o=>{if(o-l.current<xu.frameInterval){a.current=requestAnimationFrame(p);return}if(l.current=o,!n.current){cancelAnimationFrame(a.current);return}n.current={left:bu(n.current.left,r.left,d),top:bu(n.current.top,r.top,d),width:bu(n.current.width,r.width,d),height:bu(n.current.height,r.height,d)},f(e,t,i,s),Math.abs(n.current.left-r.left)>.1||Math.abs(n.current.top-r.top)>.1||Math.abs(n.current.width-r.width)>.1||Math.abs(n.current.height-r.height)>.1?a.current=requestAnimationFrame(p):(n.current=r,f(e,t,i,s),cancelAnimationFrame(a.current),t.restore(),c?.())};cancelAnimationFrame(a.current),clearTimeout(o.current),a.current=requestAnimationFrame(p),o.current=setTimeout(()=>{cancelAnimationFrame(a.current),n.current=r,f(e,t,i,s),t.restore(),c?.()},1e3)},m=(e,t,r,i,a)=>{if(t.save(),!n.current){n.current=r,f(e,t,i,a),t.restore();return}p(e,t,r,i,a)},h=async(e,t,n,r)=>{if(!e||!t||!n)return;let{parentCompositeFiber:i}=Wa(e),a=await Ua(e);!i||!a||m(t,n,a,r,i)},g=()=>{for(let e of s.current.values())e?.()},_=e=>{let t=e.getContext(`2d`);t&&t.clearRect(0,0,e.width,e.height),n.current=null,r.current=null,i.current=null,e.classList.remove(`fade-in`),c.current=!1},v=t=>{if(!e.current||c.current)return;let n=r=>{!e.current||r.propertyName!==`opacity`||!c.current||(e.current.removeEventListener(`transitionend`,n),_(e.current),t?.())},r=s.current.get(`fade-out`);r&&(r(),s.current.delete(`fade-out`)),e.current.addEventListener(`transitionend`,n),s.current.set(`fade-out`,()=>{e.current?.removeEventListener(`transitionend`,n)}),c.current=!0,e.current.classList.remove(`fade-in`),requestAnimationFrame(()=>{e.current?.classList.add(`fade-out`)})},y=()=>{e.current&&(c.current=!1,e.current.classList.remove(`fade-out`),requestAnimationFrame(()=>{e.current?.classList.add(`fade-in`)}))},b=e=>{e!==i.current&&(i.current=e,qa.has(e.tagName)?v():y(),Y.inspectState.value={kind:`inspecting`,hoveredDomElement:e})},x=()=>{!n.current||!e.current||c.current||v()},S=Ei(n=>{if(Y.inspectState.peek().kind!==`inspecting`||!t.current)return;t.current.style.pointerEvents=`none`;let r=document.elementFromPoint(n?.clientX??0,n?.clientY??0);if(t.current.style.removeProperty(`pointer-events`),clearTimeout(o.current),r&&r!==e.current){let{parentCompositeFiber:e}=Wa(r);if(e){let t=Ja(e);if(t){b(t);return}}}x()},32),C=(e,t)=>{let n=r.current;if(!n)return!1;let i=t.getBoundingClientRect(),a=t.width/i.width,o=t.height/i.height,s=(e.clientX-i.left)*a,c=(e.clientY-i.top)*o,l=s/Su,u=c/Su;return l>=n.x&&l<=n.x+n.width&&u>=n.y&&u<=n.y+n.height},w=e=>{e.kind===`focused`&&(Y.inspectState.value={kind:`inspecting`,hoveredDomElement:e.focusedDomElement})},T=e=>{let t=[`react-scan-inspect-element`,`react-scan-power`];if(e.target instanceof HTMLElement&&t.includes(e.target.id))return;let n=i.current?.tagName;if(n&&qa.has(n))return;e.preventDefault(),e.stopPropagation();let r=i.current??document.elementFromPoint(e.clientX,e.clientY);if(!r)return;let a=e.composedPath().at(0);if(a instanceof HTMLElement&&t.includes(a.id)){let t=new MouseEvent(e.type,e);t.__reactScanSyntheticEvent=!0,a.dispatchEvent(t);return}let{parentCompositeFiber:o}=Wa(r);if(!o)return;let s=Ja(o);if(!s){i.current=null,Y.inspectState.value={kind:`inspect-off`};return}Y.inspectState.value={kind:`focused`,focusedDomElement:s,fiber:o}},ee=n=>{if(n.__reactScanSyntheticEvent)return;let r=Y.inspectState.peek(),i=e.current;if(!(!i||!t.current)){if(C(n,i)){n.preventDefault(),n.stopPropagation(),w(r);return}r.kind===`inspecting`&&T(n)}},te=t=>{if(t.key!==`Escape`)return;let r=Y.inspectState.peek();if(e.current&&document.activeElement?.id!==`react-scan-root`&&(H.value={view:`none`},r.kind===`focused`||r.kind===`inspecting`))switch(t.preventDefault(),t.stopPropagation(),r.kind){case`focused`:y(),n.current=null,i.current=r.focusedDomElement,Y.inspectState.value={kind:`inspecting`,hoveredDomElement:r.focusedDomElement};break;case`inspecting`:v(()=>{Ni.value=!1,Y.inspectState.value={kind:`inspect-off`}});break}},E=(e,r,o)=>{s.current.get(e.kind)?.(),t.current&&e.kind!==`inspecting`&&(t.current.style.pointerEvents=`none`),a.current&&cancelAnimationFrame(a.current);let c;switch(e.kind){case`inspect-off`:v();return;case`inspecting`:h(e.hoveredDomElement,r,o,`inspecting`);break;case`focused`:if(!e.focusedDomElement)return;i.current!==e.focusedDomElement&&(i.current=e.focusedDomElement),H.value={view:`inspector`},h(e.focusedDomElement,r,o,`locked`),c=Y.lastReportTime.subscribe(()=>{if(a.current&&n.current){let{parentCompositeFiber:t}=Wa(e.focusedDomElement);t&&h(e.focusedDomElement,r,o,`locked`)}}),c&&s.current.set(e.kind,c);break}},ne=(e,t)=>{let n=e.getBoundingClientRect();e.width=n.width*Su,e.height=n.height*Su,t.scale(Su,Su),t.save()},re=()=>{let t=Y.inspectState.peek(),r=e.current;if(!r)return;let i=r?.getContext(`2d`);i&&(cancelAnimationFrame(a.current),clearTimeout(o.current),ne(r,i),n.current=null,t.kind===`focused`&&t.focusedDomElement?h(t.focusedDomElement,r,i,`locked`):t.kind===`inspecting`&&t.hoveredDomElement&&h(t.hoveredDomElement,r,i,`inspecting`))},ie=t=>{let n=Y.inspectState.peek(),r=e.current;r&&(n.kind===`inspecting`||C(t,r))&&(t.preventDefault(),t.stopPropagation(),t.stopImmediatePropagation())};return N(()=>{let t=e.current;if(!t)return;let n=t?.getContext(`2d`);if(!n)return;ne(t,n);let r=Y.inspectState.subscribe(e=>{E(e,t,n)});return window.addEventListener(`scroll`,re,{passive:!0}),window.addEventListener(`resize`,re,{passive:!0}),document.addEventListener(`pointermove`,S,{passive:!0,capture:!0}),document.addEventListener(`pointerdown`,ie,{capture:!0}),document.addEventListener(`click`,ee,{capture:!0}),document.addEventListener(`keydown`,te,{capture:!0}),()=>{g(),r(),window.removeEventListener(`scroll`,re),window.removeEventListener(`resize`,re),document.removeEventListener(`pointermove`,S,{capture:!0}),document.removeEventListener(`click`,ee,{capture:!0}),document.removeEventListener(`pointerdown`,ie,{capture:!0}),document.removeEventListener(`keydown`,te,{capture:!0}),a.current&&cancelAnimationFrame(a.current),clearTimeout(o.current)}},[]),I(j,{children:[I(`div`,{ref:t,className:z(`fixed top-0 left-0 w-screen h-screen`,`z-[214748365]`),style:{pointerEvents:`none`}}),I(`canvas`,{ref:e,dir:`ltr`,className:z(`react-scan-inspector-overlay`,`fixed top-0 left-0 w-screen h-screen`,`pointer-events-none`,`z-[214748367]`)})]})},wu=class{constructor(e,t){this.width=e,this.height=t,this.maxWidth=e-L*2,this.maxHeight=t-L*2}rightEdge(e){return this.width-e-L}bottomEdge(e){return this.height-e-L}isFullWidth(e){return e>=this.maxWidth}isFullHeight(e){return e>=this.maxHeight}},Tu,Eu=()=>{let e=window.innerWidth,t=window.innerHeight;return Tu&&Tu.width===e&&Tu.height===t||(Tu=new wu(e,t)),Tu},Du=(e,t,n,r,i)=>{if(n){if(e===`top-left`)return`bottom-right`;if(e===`top-right`)return`bottom-left`;if(e===`bottom-left`)return`top-right`;if(e===`bottom-right`)return`top-left`;let[n,r]=t.split(`-`);if(e===`left`)return`${n}-right`;if(e===`right`)return`${n}-left`;if(e===`top`)return`bottom-${r}`;if(e===`bottom`)return`top-${r}`}if(r){if(e===`left`)return`${t.split(`-`)[0]}-right`;if(e===`right`)return`${t.split(`-`)[0]}-left`}if(i){if(e===`top`)return`bottom-${t.split(`-`)[1]}`;if(e===`bottom`)return`top-${t.split(`-`)[1]}`}return t},Ou=(e,t,n)=>{let r=getComputedStyle(document.body).direction===`rtl`,i=window.innerWidth,a=window.innerHeight,o=t===wr.width,s=o?t:Math.min(t,i-L*2),c=o?n:Math.min(n,a-L*2),l,u,d=L,f=i-s-L,p=L,m=a-c-L;switch(e){case`top-right`:l=r?-d:f,u=p;break;case`bottom-right`:l=r?-d:f,u=m;break;case`bottom-left`:l=r?-f:d,u=m;break;case`top-left`:l=r?-f:d,u=p;break;default:l=d,u=p;break}return o&&(l=r?Math.min(-d,Math.max(l,-f)):Math.max(d,Math.min(l,f)),u=Math.max(p,Math.min(u,m))),{x:l,y:u}},ku=(e,t)=>{let[n,r]=t.split(`-`);return e!==n&&e!==r},Au=(e,t,n,r)=>n&&r?!0:!n&&!r?ku(e,t):n?e!==t.split(`-`)[0]:r?e!==t.split(`-`)[1]:!1,ju=(e,t,n)=>{let r=n?wr.width:wr.initialHeight,i=n?Eu().maxWidth:Eu().maxHeight,a=e+t;return Math.min(Math.max(r,a),i)},Mu=(e,t,n,r,i)=>{let a=getComputedStyle(document.body).direction===`rtl`,o=window.innerWidth-L*2,s=window.innerHeight-L*2,c=t.width,l=t.height,u=n.x,d=n.y;if(a&&e.includes(`right`)){let e=-n.x+t.width-L,i=Math.min(t.width+r,e);c=Math.min(o,Math.max(wr.width,i)),u=n.x+(c-t.width)}if(a&&e.includes(`left`)){let e=window.innerWidth-n.x-L,i=Math.min(t.width-r,e);c=Math.min(o,Math.max(wr.width,i))}if(!a&&e.includes(`right`)){let e=window.innerWidth-n.x-L,i=Math.min(t.width+r,e);c=Math.min(o,Math.max(wr.width,i))}if(!a&&e.includes(`left`)){let e=n.x+t.width-L,i=Math.min(t.width-r,e);c=Math.min(o,Math.max(wr.width,i)),u=n.x-(c-t.width)}if(e.includes(`bottom`)){let e=window.innerHeight-n.y-L,r=Math.min(t.height+i,e);l=Math.min(s,Math.max(wr.initialHeight,r))}if(e.includes(`top`)){let e=n.y+t.height-L,r=Math.min(t.height-i,e);l=Math.min(s,Math.max(wr.initialHeight,r)),d=n.y-(l-t.height)}let f=L,p=window.innerWidth-L-c,m=L,h=window.innerHeight-L-l;return u=a?Math.min(-f,Math.max(u,-p)):Math.max(f,Math.min(u,p)),d=Math.max(m,Math.min(d,h)),{newSize:{width:c,height:l},newPosition:{x:u,y:d}}},Nu=e=>{let t=Eu(),n={"top-left":Math.hypot(e.x,e.y),"top-right":Math.hypot(t.maxWidth-e.x,e.y),"bottom-left":Math.hypot(e.x,t.maxHeight-e.y),"bottom-right":Math.hypot(t.maxWidth-e.x,t.maxHeight-e.y)},r=`top-left`;for(let e in n)n[e]<n[r]&&(r=e);return r},Pu=(e,t,n,r,i=100)=>{let a=n===void 0?0:e-n,o=r===void 0?0:t-r,s=window.innerWidth/2,c=window.innerHeight/2,l=a>i,u=a<-i,d=o>i,f=o<-i;if(l||u){let e=t>c;return l?e?`bottom-right`:`top-right`:e?`bottom-left`:`top-left`}if(d||f){let t=e>s;return d?t?`bottom-right`:`bottom-left`:t?`top-right`:`top-left`}return e>s?t>c?`bottom-right`:`top-right`:t>c?`bottom-left`:`top-left`},Fu=({position:e})=>{let t=P(null),n=P(null),r=P(null),i=P(null);return N(()=>{let a=t.current;if(!a)return;let o=()=>{a.classList.remove(`pointer-events-none`);let t=Y.inspectState.value.kind===`focused`,n=H.value.view!==`none`;(t||n)&&Au(e,V.value.corner,V.value.dimensions.isFullWidth,V.value.dimensions.isFullHeight)?a.classList.remove(`hidden`,`pointer-events-none`,`opacity-0`):a.classList.add(`hidden`,`pointer-events-none`,`opacity-0`)},s=V.subscribe(e=>{n.current!==null&&r.current!==null&&i.current!==null&&e.dimensions.width===n.current&&e.dimensions.height===r.current&&e.corner===i.current||(o(),n.current=e.dimensions.width,r.current=e.dimensions.height,i.current=e.corner)}),c=Y.inspectState.subscribe(()=>{o()});return()=>{s(),c(),n.current=null,r.current=null,i.current=null}},[]),I(`div`,{ref:t,onPointerDown:qt(t=>{t.preventDefault(),t.stopPropagation();let n=B.value;if(!n)return;let r=n.style,{dimensions:i}=V.value,a=t.clientX,o=t.clientY,s=i.width,c=i.height,l=i.position;V.value={...V.value,dimensions:{...i,isFullWidth:!1,isFullHeight:!1,width:s,height:c,position:l}};let u=null,d=t=>{u||=(r.transition=`none`,requestAnimationFrame(()=>{let{newSize:n,newPosition:i}=Mu(e,{width:s,height:c},l,t.clientX-a,t.clientY-o);r.transform=`translate3d(${i.x}px, ${i.y}px, 0)`,r.width=`${n.width}px`,r.height=`${n.height}px`;let d=Math.floor(n.width-Tr/2),f=V.value.componentsTree.width,p=Math.min(d,Math.max(Tr,f));V.value={...V.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.width,height:n.height,position:i},componentsTree:{...V.value.componentsTree,width:p}},u=null}))},f=()=>{u&&=(cancelAnimationFrame(u),null),document.removeEventListener(`pointermove`,d),document.removeEventListener(`pointerup`,f);let{dimensions:e,corner:t}=V.value,i=Eu(),a=i.isFullWidth(e.width),o=i.isFullHeight(e.height),s=a&&o,c=t;(s||a||o)&&(c=Nu(e.position));let l=Ou(c,e.width,e.height),p=()=>{n.removeEventListener(`transitionend`,p)};n.addEventListener(`transitionend`,p),r.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,V.value={...V.value,corner:c,dimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l},lastDimensions:{isFullWidth:a,isFullHeight:o,width:e.width,height:e.height,position:l}},Oi(Er,{corner:c,dimensions:V.value.dimensions,lastDimensions:V.value.lastDimensions,componentsTree:V.value.componentsTree})};document.addEventListener(`pointermove`,d,{passive:!0}),document.addEventListener(`pointerup`,f)},[]),onDblClick:qt(t=>{t.preventDefault(),t.stopPropagation();let n=B.value;if(!n)return;let r=n.style,{dimensions:i,corner:a}=V.value,o=Eu(),s=o.isFullWidth(i.width),c=o.isFullHeight(i.height),l=s&&c,u=(s||c)&&!l,d=i.width,f=i.height,p=Du(e,a,l,s,c);e===`left`||e===`right`?(d=s?i.width:o.maxWidth,u&&(d=s?wr.width:o.maxWidth)):(f=c?i.height:o.maxHeight,u&&(f=c?wr.initialHeight:o.maxHeight)),l&&(e===`left`||e===`right`?d=wr.width:f=wr.initialHeight);let m=Ou(p,d,f),h={isFullWidth:o.isFullWidth(d),isFullHeight:o.isFullHeight(f),width:d,height:f,position:m},g=Math.floor(d-wr.width/2),_=V.value.componentsTree.width,v=Math.floor(d*.3),y=s?Tr:(e===`left`||e===`right`)&&!s?Math.min(g,Math.max(Tr,v)):Math.min(g,Math.max(Tr,_));requestAnimationFrame(()=>{V.value={corner:p,dimensions:h,lastDimensions:i,componentsTree:{...V.value.componentsTree,width:y}},r.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,r.width=`${d}px`,r.height=`${f}px`,r.transform=`translate3d(${m.x}px, ${m.y}px, 0)`}),Oi(Er,{corner:p,dimensions:h,lastDimensions:i,componentsTree:{...V.value.componentsTree,width:y}})},[]),className:z(`absolute z-50`,`flex items-center justify-center`,`group`,`transition-colors select-none`,`peer`,{"resize-left peer/left":e===`left`,"resize-right peer/right z-10":e===`right`,"resize-top peer/top":e===`top`,"resize-bottom peer/bottom":e===`bottom`}),children:I(`span`,{className:`resize-line-wrapper`,children:I(`span`,{className:`resize-line`,children:I(Cr,{name:`icon-ellipsis`,size:18,className:z(`text-neutral-400`,(e===`left`||e===`right`)&&`rotate-90`)})})})})},Iu={horizontal:{width:20,height:48},vertical:{width:48,height:20}},Lu=()=>{let e=P(null),t=P(!1),n=P(0),r=P(0),i=P(!1),a=qt((a=!0)=>{if(!e.current)return;let{corner:o}=V.value,s,c;if(Ii.value){let e=Iu[Ii.value.orientation||`horizontal`];s=e.width,c=e.height}else if(t.current){let e=V.value.lastDimensions;s=ju(e.width,0,!0),c=ju(e.height,0,!1),i.current&&=!1}else s=n.current,c=r.current;let l=Ou(o,s,c);if(Ii.value){let{corner:e,orientation:t=`horizontal`}=Ii.value,n=Iu[t];switch(e){case`top-left`:l=t===`horizontal`?{x:-1,y:L}:{x:L,y:-1};break;case`bottom-left`:l=t===`horizontal`?{x:-1,y:window.innerHeight-n.height-L}:{x:L,y:window.innerHeight-n.height+1};break;case`top-right`:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:L}:{x:window.innerWidth-n.width-L,y:-1};break;default:l=t===`horizontal`?{x:window.innerWidth-n.width+1,y:window.innerHeight-n.height-L}:{x:window.innerWidth-n.width-L,y:window.innerHeight-n.height+1};break}}let u=s<wr.width||c<wr.initialHeight,d=a&&!u,f=e.current,p=f.style,m=null,h=()=>{Fi(),f.removeEventListener(`transitionend`,h),m&&=(cancelAnimationFrame(m),null)};f.addEventListener(`transitionend`,h),p.transition=`all 0.25s cubic-bezier(0, 0, 0.2, 1)`,m=requestAnimationFrame(()=>{p.width=`${s}px`,p.height=`${c}px`,p.transform=`translate3d(${l.x}px, ${l.y}px, 0)`,m=null});let g={isFullWidth:s>=window.innerWidth-L*2,isFullHeight:c>=window.innerHeight-L*2,width:s,height:c,position:l};V.value={corner:o,dimensions:g,lastDimensions:t?V.value.lastDimensions:s>n.current?g:V.value.lastDimensions,componentsTree:V.value.componentsTree},d&&Oi(Er,{corner:V.value.corner,dimensions:V.value.dimensions,lastDimensions:V.value.lastDimensions,componentsTree:V.value.componentsTree}),Fi()},[]),o=qt(t=>{if(t.preventDefault(),!e.current||t.target.closest(`button`))return;let n=e.current,r=n.style,{dimensions:i}=V.value,o=t.clientX,s=t.clientY,c=i.position.x,l=i.position.y,u=c,d=l,f=null,p=!1,m=o,h=s,g=e=>{f||=(p=!0,m=e.clientX,h=e.clientY,requestAnimationFrame(()=>{let e=m-o,t=h-s;u=Number(c)+e,d=Number(l)+t,r.transition=`none`,r.transform=`translate3d(${u}px, ${d}px, 0)`;let n=u+i.width,p=d+i.height,v=Math.max(0,-u),y=Math.max(0,n-window.innerWidth),b=Math.max(0,-d),x=Math.max(0,p-window.innerHeight),S=Math.min(i.width,v+y),C=Math.min(i.height,b+x),w=S*i.height+C*i.width-S*C>i.width*i.height*.35;if(!w&&X.options.value.showFPS){let e=u+i.width,t=e-100;w=e<=0||t>=window.innerWidth||d+i.height<=0||d>=window.innerHeight}if(w){let e=u+i.width/2,t=d+i.height/2,n=window.innerWidth/2,r=window.innerHeight/2,o;o=e<n?t<r?`top-left`:`bottom-left`:t<r?`top-right`:`bottom-right`;let s;s=Math.max(v,y)>Math.max(b,x)?`horizontal`:`vertical`,V.value={...V.value,corner:o,lastDimensions:{...i,position:Ou(o,i.width,i.height)}};let c={corner:o,orientation:s};Ii.value=c,Oi(Dr,c),Oi(Er,V.value),a(!1),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_),f&&=(cancelAnimationFrame(f),null)}f=null}))},_=()=>{if(!n)return;f&&=(cancelAnimationFrame(f),null),document.removeEventListener(`pointermove`,g),document.removeEventListener(`pointerup`,_);let e=Math.abs(m-o),t=Math.abs(h-s),a=Math.sqrt(e*e+t*t);if(!p||a<60)return;let v=Pu(m,h,o,s,Y.inspectState.value.kind===`focused`?80:40);if(v===V.value.corner){r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`;let e=V.value.dimensions.position;requestAnimationFrame(()=>{r.transform=`translate3d(${e.x}px, ${e.y}px, 0)`});return}let y=Ou(v,i.width,i.height);if(u===c&&d===l)return;let b=()=>{r.transition=`none`,Fi(),n.removeEventListener(`transitionend`,b),f&&=(cancelAnimationFrame(f),null)};n.addEventListener(`transitionend`,b),r.transition=`transform 0.25s cubic-bezier(0, 0, 0.2, 1)`,requestAnimationFrame(()=>{r.transform=`translate3d(${y.x}px, ${y.y}px, 0)`}),V.value={corner:v,dimensions:{isFullWidth:i.isFullWidth,isFullHeight:i.isFullHeight,width:i.width,height:i.height,position:y},lastDimensions:V.value.lastDimensions,componentsTree:V.value.componentsTree},Oi(Er,{corner:v,dimensions:V.value.dimensions,lastDimensions:V.value.lastDimensions,componentsTree:V.value.componentsTree})};document.addEventListener(`pointermove`,g),document.addEventListener(`pointerup`,_)},[]),s=qt(t=>{if(t.preventDefault(),!e.current||!Ii.value)return;let{corner:r,orientation:i=`horizontal`}=Ii.value,o=t.clientX,s=t.clientY,c=null,l=!1,u=t=>{if(l||c)return;let f=t.clientX-o,p=t.clientY-s,m=!1;i===`horizontal`?(r.endsWith(`left`)&&f>50||r.endsWith(`right`)&&f<-50)&&(m=!0):(r.startsWith(`top`)&&p>50||r.startsWith(`bottom`)&&p<-50)&&(m=!0),m&&(l=!0,Ii.value=null,Oi(Dr,null),n.current===0&&e.current?requestAnimationFrame(()=>{if(e.current){e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300;let r=V.value.lastDimensions,i=ju(r.width,0,!0),o=ju(r.height,0,!1),s=t.clientX-i/2,c=t.clientY-o/2;s=Math.max(L,Math.min(s,window.innerWidth-i-L)),c=Math.max(L,Math.min(c,window.innerHeight-o-L)),V.value={...V.value,dimensions:{...V.value.dimensions,position:{x:s,y:c}}},a(!0),H.value=Di(Or)||{view:`none`},setTimeout(()=>{if(e.current){let n=new PointerEvent(`pointerdown`,{clientX:t.clientX,clientY:t.clientY,pointerId:t.pointerId,bubbles:!0});e.current.dispatchEvent(n)}},100)}}):(a(!0),H.value=Di(Or)||{view:`none`}),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d))},d=()=>{c&&=(cancelAnimationFrame(c),null),document.removeEventListener(`pointermove`,u),document.removeEventListener(`pointerup`,d)};document.addEventListener(`pointermove`,u),document.addEventListener(`pointerup`,d)},[]);N(()=>{if(!e.current)return;ki(Or),Ii.value?(r.current=36,n.current=0):(e.current.style.width=`min-content`,r.current=36,n.current=e.current.offsetWidth),e.current.style.maxWidth=`calc(100vw - ${L*2}px)`,e.current.style.maxHeight=`calc(100vh - ${L*2}px)`,a(),Y.inspectState.value.kind!==`focused`&&!Ii.value&&!i.current&&(V.value={...V.value,dimensions:{isFullWidth:!1,isFullHeight:!1,width:n.current,height:r.current,position:V.value.dimensions.position}}),B.value=e.current;let o=V.subscribe(t=>{if(!e.current)return;let{x:n,y:r}=t.dimensions.position,{width:i,height:a}=t.dimensions,o=e.current;requestAnimationFrame(()=>{o.style.transform=`translate3d(${n}px, ${r}px, 0)`,o.style.width=`${i}px`,o.style.height=`${a}px`})}),s=H.subscribe(e=>{t.current=e.view!==`none`,a(),Ii.value||(e.view===`none`?ki(Or):Oi(Or,e))}),c=Y.inspectState.subscribe(e=>{t.current=e.kind===`focused`,a()}),l=()=>{a(!0)};return window.addEventListener(`resize`,l,{passive:!0}),()=>{window.removeEventListener(`resize`,l),s(),c(),o(),Oi(Er,{...Pi,corner:V.value.corner})}},[]);let[c,l]=M(!1);N(()=>{l(!0)},[]);let u=Ii.value,d=``;if(u){let{orientation:e=`horizontal`,corner:t}=u;d=e===`horizontal`?t?.endsWith(`right`)?`rotate-180`:``:t?.startsWith(`bottom`)?`-rotate-90`:`rotate-90`}return I(j,{children:[I(Cu,{}),I(Ru.Provider,{value:e.current,children:I(`div`,{id:`react-scan-toolbar`,dir:`ltr`,ref:e,onPointerDown:u?s:o,className:z(`fixed inset-0`,u?(()=>{let{orientation:e=`horizontal`,corner:t}=u;return e===`horizontal`?t?.endsWith(`right`)?`rounded-tl-lg rounded-bl-lg shadow-lg`:`rounded-tr-lg rounded-br-lg shadow-lg`:t?.startsWith(`bottom`)?`rounded-tl-lg rounded-tr-lg shadow-lg`:`rounded-bl-lg rounded-br-lg shadow-lg`})():`rounded-lg shadow-lg`,`flex flex-col`,`font-mono text-[13px]`,`user-select-none`,`opacity-0`,u?`cursor-pointer`:`cursor-move`,`z-[124124124124]`,`animate-fade-in animation-duration-300 animation-delay-300`,`will-change-transform`,`[touch-action:none]`),style:{WebkitAppRegion:`no-drag`},children:u?I(`button`,{type:`button`,onClick:()=>{Ii.value=null,Oi(Dr,null),n.current===0&&e.current&&requestAnimationFrame(()=>{e.current&&(e.current.style.width=`min-content`,n.current=e.current.offsetWidth||300,a(!0))}),H.value=Di(Or)||{view:`none`}},className:`flex items-center justify-center w-full h-full text-white`,title:`Expand toolbar`,children:I(Cr,{name:`icon-chevron-right`,size:16,className:z(`transition-transform`,d)})}):I(j,{children:[I(Fu,{position:`top`}),I(Fu,{position:`bottom`}),I(Fu,{position:`left`}),I(Fu,{position:`right`}),I(vu,{})]})})})]})},Ru=kt(null),zu=()=>I(`svg`,{xmlns:`http://www.w3.org/2000/svg`,style:`display: none;`,children:[I(`title`,{children:`React Scan Icons`}),I(`symbol`,{id:`icon-inspect`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M5 3a2 2 0 0 0-2 2`}),I(`path`,{d:`M19 3a2 2 0 0 1 2 2`}),I(`path`,{d:`M5 21a2 2 0 0 1-2-2`}),I(`path`,{d:`M9 3h1`}),I(`path`,{d:`M9 21h2`}),I(`path`,{d:`M14 3h1`}),I(`path`,{d:`M3 9v1`}),I(`path`,{d:`M21 9v2`}),I(`path`,{d:`M3 14v1`})]}),I(`symbol`,{id:`icon-focus`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.034 12.681a.498.498 0 0 1 .647-.647l9 3.5a.5.5 0 0 1-.033.943l-3.444 1.068a1 1 0 0 0-.66.66l-1.067 3.443a.5.5 0 0 1-.943.033z`}),I(`path`,{d:`M21 11V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h6`})]}),I(`symbol`,{id:`icon-next`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M6 9h6V5l7 7-7 7v-4H6V9z`})}),I(`symbol`,{id:`icon-previous`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M18 15h-6v4l-7-7 7-7v4h6v6z`})}),I(`symbol`,{id:`icon-close`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`line`,{x1:`18`,y1:`6`,x2:`6`,y2:`18`}),I(`line`,{x1:`6`,y1:`6`,x2:`18`,y2:`18`})]}),I(`symbol`,{id:`icon-replay`,viewBox:`0 0 24 24`,fill:`none`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M3 7V5a2 2 0 0 1 2-2h2`}),I(`path`,{d:`M17 3h2a2 2 0 0 1 2 2v2`}),I(`path`,{d:`M21 17v2a2 2 0 0 1-2 2h-2`}),I(`path`,{d:`M7 21H5a2 2 0 0 1-2-2v-2`}),I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`path`,{d:`M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0`})]}),I(`symbol`,{id:`icon-ellipsis`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`12`,cy:`12`,r:`1`}),I(`circle`,{cx:`19`,cy:`12`,r:`1`}),I(`circle`,{cx:`5`,cy:`12`,r:`1`})]}),I(`symbol`,{id:`icon-copy`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`14`,height:`14`,x:`8`,y:`8`,rx:`2`,ry:`2`}),I(`path`,{d:`M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2`})]}),I(`symbol`,{id:`icon-check`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`M20 6 9 17l-5-5`})}),I(`symbol`,{id:`icon-chevron-right`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:I(`path`,{d:`m9 18 6-6-6-6`})}),I(`symbol`,{id:`icon-settings`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z`}),I(`circle`,{cx:`12`,cy:`12`,r:`3`})]}),I(`symbol`,{id:`icon-flame`,viewBox:`0 0 24 24`,children:I(`path`,{d:`M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z`})}),I(`symbol`,{id:`icon-function`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`18`,x:`3`,y:`3`,rx:`2`,ry:`2`}),I(`path`,{d:`M9 17c2 0 2.8-1 2.8-2.8V10c0-2 1-3.3 3.2-3`}),I(`path`,{d:`M9 11.2h5.7`})]}),I(`symbol`,{id:`icon-triangle-alert`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3`}),I(`path`,{d:`M12 9v4`}),I(`path`,{d:`M12 17h.01`})]}),I(`symbol`,{id:`icon-gallery-horizontal-end`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 7v10`}),I(`path`,{d:`M6 5v14`}),I(`rect`,{width:`12`,height:`18`,x:`10`,y:`3`,rx:`2`})]}),I(`symbol`,{id:`icon-search`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`circle`,{cx:`11`,cy:`11`,r:`8`}),I(`line`,{x1:`21`,y1:`21`,x2:`16.65`,y2:`16.65`})]}),I(`symbol`,{id:`icon-lock`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 10 0v4`})]}),I(`symbol`,{id:`icon-lock-open`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`rect`,{width:`18`,height:`11`,x:`3`,y:`11`,rx:`2`,ry:`2`}),I(`path`,{d:`M7 11V7a5 5 0 0 1 9.9-1`})]}),I(`symbol`,{id:`icon-sanil`,viewBox:`0 0 24 24`,fill:`none`,stroke:`currentColor`,"stroke-width":`2`,"stroke-linecap":`round`,"stroke-linejoin":`round`,children:[I(`path`,{d:`M2 13a6 6 0 1 0 12 0 4 4 0 1 0-8 0 2 2 0 0 0 4 0`}),I(`circle`,{cx:`10`,cy:`13`,r:`8`}),I(`path`,{d:`M2 21h12c4.4 0 8-3.6 8-8V7a2 2 0 1 0-4 0v6`}),I(`path`,{d:`M18 3 19.1 5.2`})]})]}),Bu=class extends ot{constructor(){super(...arguments),this.state={hasError:!1,error:null},this.handleReset=()=>{this.setState({hasError:!1,error:null})}}static getDerivedStateFromError(e){return{hasError:!0,error:e}}render(){return this.state.hasError?I(`div`,{className:`fixed bottom-4 right-4 z-[124124124124]`,children:I(`div`,{className:`p-3 bg-black rounded-lg shadow-lg w-80`,children:[I(`div`,{className:`flex items-center gap-2 mb-2 text-red-400 text-sm font-medium`,children:[I(Cr,{name:`icon-flame`,className:`text-red-500`,size:14}),`React Scan ran into a problem`]}),I(`div`,{className:`p-2 bg-black rounded font-mono text-xs text-red-300 mb-3 break-words`,children:this.state.error?.message||JSON.stringify(this.state.error)}),I(`button`,{type:`button`,onClick:this.handleReset,className:`px-3 py-1.5 bg-red-500 hover:bg-red-600 text-white rounded text-xs font-medium transition-colors flex items-center justify-center gap-1.5`,children:`Restart`})]})}):this.props.children}},Vu=e=>{let t=document.createElement(`div`);t.id=`react-scan-toolbar-root`,window.__REACT_SCAN_TOOLBAR_CONTAINER__=t,e.appendChild(t),Ot(I(Bu,{children:I(j,{children:[I(zu,{}),I(Lu,{})]})}),t);let n=t.remove.bind(t);return t.remove=()=>{window.__REACT_SCAN_TOOLBAR_CONTAINER__=void 0,t.hasChildNodes()&&(Ot(null,t),Ot(null,t)),n()},t},Hu={name:`react-scan`,version:`0.5.2`,description:`Scan your React app for renders`,keywords:[`react`,`react-scan`,`react scan`,`render`,`performance`],homepage:`https://react-scan.million.dev`,bugs:{url:`https://github.com/aidenybai/react-scan/issues`},repository:{type:`git`,url:`git+https://github.com/aidenybai/react-scan.git`},license:`MIT`,author:{name:`Aiden Bai`,email:`aiden@million.dev`,url:`https://million.dev`},scripts:{build:`npm run build:css && NODE_ENV=production tsup`,postbuild:`node ../../scripts/version-warning.mjs`,"build:copy":`npm run build:css && NODE_ENV=production tsup && cat dist/auto.global.js | pbcopy`,"dev:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css --watch`,"dev:tsup":`NODE_ENV=development tsup --watch`,dev:`pnpm run --parallel "/^dev:(css|tsup)/"`,"build:css":`postcss ./src/web/assets/css/styles.tailwind.css -o ./src/web/assets/css/styles.css`,pack:`npm version patch && pnpm build && npm pack`,"pack:bump":`bun scripts/bump-version.js && nr pack && echo $(pwd)/react-scan-$(node -p "require('./package.json').version").tgz | pbcopy`,publint:`publint`,test:`vitest`,lint:`oxlint src && pnpm typecheck`,typecheck:`tsc --noEmit`},exports:{"./package.json":`./package.json`,".":{production:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.mjs`}},development:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}},default:{import:{types:`./dist/index.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/index.mjs`},require:{types:`./dist/index.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/index.js`}}},"./all-environments":{types:`./dist/core/all-environments.d.ts`,import:`./dist/core/all-environments.mjs`,require:`./dist/core/all-environments.js`},"./install-hook":{types:`./dist/install-hook.d.ts`,import:`./dist/install-hook.mjs`,require:`./dist/install-hook.js`},"./auto":{production:{import:{types:`./dist/rsc-shim.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/rsc-shim.mjs`},require:{types:`./dist/rsc-shim.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/rsc-shim.js`}},development:{import:{types:`./dist/auto.d.mts`,"react-server":`./dist/rsc-shim.mjs`,default:`./dist/auto.mjs`},require:{types:`./dist/auto.d.ts`,"react-server":`./dist/rsc-shim.js`,default:`./dist/auto.js`}}},"./dist/*":`./dist/*.js`,"./dist/*.js":`./dist/*.js`,"./dist/*.mjs":`./dist/*.mjs`,"./react-component-name/vite":{types:`./dist/react-component-name/vite.d.ts`,import:`./dist/react-component-name/vite.mjs`,require:`./dist/react-component-name/vite.js`},"./react-component-name/webpack":{types:`./dist/react-component-name/webpack.d.ts`,import:`./dist/react-component-name/webpack.mjs`,require:`./dist/react-component-name/webpack.js`},"./react-component-name/esbuild":{types:`./dist/react-component-name/esbuild.d.ts`,import:`./dist/react-component-name/esbuild.mjs`,require:`./dist/react-component-name/esbuild.js`},"./react-component-name/rspack":{types:`./dist/react-component-name/rspack.d.ts`,import:`./dist/react-component-name/rspack.mjs`,require:`./dist/react-component-name/rspack.js`},"./react-component-name/rolldown":{types:`./dist/react-component-name/rolldown.d.ts`,import:`./dist/react-component-name/rolldown.mjs`,require:`./dist/react-component-name/rolldown.js`},"./react-component-name/rollup":{types:`./dist/react-component-name/rollup.d.ts`,import:`./dist/react-component-name/rollup.mjs`,require:`./dist/react-component-name/rollup.js`},"./react-component-name/astro":{types:`./dist/react-component-name/astro.d.ts`,import:`./dist/react-component-name/astro.mjs`,require:`./dist/react-component-name/astro.js`},"./react-component-name/loader":{types:`./dist/react-component-name/loader.d.ts`,import:`./dist/react-component-name/loader.mjs`,require:`./dist/react-component-name/loader.js`}},main:`dist/index.js`,module:`dist/index.mjs`,browser:`dist/auto.global.js`,types:`dist/index.d.ts`,typesVersions:{"*":{"react-component-name/vite":[`./dist/react-component-name/vite.d.ts`],"react-component-name/webpack":[`./dist/react-component-name/webpack.d.ts`],"react-component-name/esbuild":[`./dist/react-component-name/esbuild.d.ts`],"react-component-name/rspack":[`./dist/react-component-name/rspack.d.ts`],"react-component-name/rolldown":[`./dist/react-component-name/rolldown.d.ts`],"react-component-name/rollup":[`./dist/react-component-name/rollup.d.ts`],"react-component-name/astro":[`./dist/react-component-name/astro.d.ts`],"react-component-name/loader":[`./dist/react-component-name/loader.d.ts`]}},bin:`bin/cli.js`,files:[`dist`,`bin`,`package.json`,`README.md`,`LICENSE`,`auto.d.ts`],dependencies:{"@babel/core":`^7.26.0`,"@babel/generator":`^7.26.2`,"@babel/types":`^7.26.0`,"@preact/signals":`^1.3.1`,"@rollup/pluginutils":`^5.1.3`,"@types/node":`^20.17.9`,bippy:`^0.5.30`,commander:`^14.0.0`,esbuild:`^0.25.0`,"estree-walker":`^3.0.3`,picocolors:`^1.1.1`,preact:`^10.25.1`,prompts:`^2.4.2`},devDependencies:{"@esbuild-plugins/tsconfig-paths":`^0.1.2`,"@remix-run/react":`*`,"@types/babel__core":`^7.20.5`,"@types/prompts":`^2.4.9`,"@types/react":`^18.0.0`,"@types/react-router":`^5.1.0`,clsx:`^2.1.1`,"es-module-lexer":`^1.5.4`,next:`*`,"postcss-cli":`^11.0.0`,publint:`^0.2.12`,react:`*`,"react-dom":`*`,"react-router":`^5.0.0`,"react-router-dom":`^5.0.0 || ^6.0.0 || ^7.0.0`,"tailwind-merge":`^2.5.5`,terser:`^5.36.0`,tsup:`^8.0.0`,vitest:`^3.0.0`},peerDependencies:{react:`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`,"react-dom":`^16.8.0 || ^17.0.0 || ^18.0.0 || ^19.0.0`},optionalDependencies:{unplugin:`2.1.0`},publishConfig:{access:`public`}},Uu=null,Wu=null,Gu=()=>{if(Uu&&Wu)return{rootContainer:Uu,shadowRoot:Wu};Uu=document.createElement(`div`),Uu.id=`react-scan-root`,Wu=Uu.attachShadow({mode:`open`});let e=document.createElement(`style`);return e.textContent=qs,Wu.appendChild(e),document.documentElement.appendChild(Uu),{rootContainer:Uu,shadowRoot:Wu}},Y={wasDetailsOpen:hn(!0),isInIframe:hn(mr&&window.self!==window.top),inspectState:hn({kind:`uninitialized`}),fiberRoots:new Set,reportData:new Map,legacyReportData:new Map,lastReportTime:hn(0),interactionListeningForRenders:null,changesListeners:new Map},X={instrumentation:null,componentAllowList:null,options:hn({enabled:!0,log:!1,showToolbar:!0,animationSpeed:`fast`,dangerouslyForceRunInProduction:!1,showFPS:!0,showNotificationCount:!0,allowInIframe:!1}),runInAllEnvironments:!1,onRender:null,Store:Y,version:Hu.version};mr&&window.__REACT_SCAN_EXTENSION__&&(window.__REACT_SCAN_VERSION__=X.version);var Ku=e=>{let{onCommitStart:t,onRender:n,onCommitFinish:r,...i}=e;return i},qu=e=>{let t=[],n={};for(let r in e){let i=e[r];switch(r){case`enabled`:case`log`:case`showToolbar`:case`showNotificationCount`:case`dangerouslyForceRunInProduction`:case`showFPS`:case`allowInIframe`:typeof i==`boolean`?n[r]=i:t.push(`- ${r} must be a boolean. Got "${i}"`);break;case`animationSpeed`:[`slow`,`fast`,`off`].includes(i)?n[r]=i:t.push(`- Invalid animation speed "${i}". Using default "fast"`);break;case`onCommitStart`:typeof i==`function`?n.onCommitStart=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onCommitFinish`:typeof i==`function`?n.onCommitFinish=i:t.push(`- ${r} must be a function. Got "${i}"`);break;case`onRender`:typeof i==`function`?n.onRender=i:t.push(`- ${r} must be a function. Got "${i}"`);break;default:t.push(`- Unknown option "${r}"`)}}return t.length>0&&console.warn(`[React Scan] Invalid options:
${t.join(`
`)}`),n},Ju=e=>{try{let t=qu(e);if(Object.keys(t).length===0)return;let n=`showToolbar`in t&&t.showToolbar!==void 0,r={...X.options.value,...t},{instrumentation:i}=X;i&&`enabled`in t&&(i.isPaused.value=t.enabled===!1),X.options.value=r;try{let e=Di(`react-scan-options`)?.enabled;typeof e==`boolean`&&(r.enabled=e)}catch(e){X.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}return Oi(`react-scan-options`,Ku(r)),n&&ed(!!r.showToolbar),r}catch(e){X.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},Yu=()=>X.options,Xu=null,Zu,Qu=()=>{if(Xu!==null)return Xu;Zu??=ae();for(let e of Zu.renderers.values())we(e)===`production`&&(Xu=!0);return Xu},$u=()=>{try{if(!mr||!X.runInAllEnvironments&&Qu()&&!X.options.value.dangerouslyForceRunInProduction)return;let e=Di(`react-scan-options`);if(e){let t=qu(e);Object.keys(t).length>0&&(X.options.value={...X.options.value,...t})}let t=Yu();Ks(()=>{ed(!!t.value.showToolbar)}),mr&&setTimeout(()=>{Te()||console.error(`[React Scan] Failed to load. Must import React Scan before React runs.`)},5e3)}catch(e){X.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},ed=e=>{window.reactScanCleanupListeners?.();let t=Qc(),n=td();window.reactScanCleanupListeners=()=>{t(),n?.()};let r=window.__REACT_SCAN_TOOLBAR_CONTAINER__;if(!e){r?.remove();return}r?.remove();let{shadowRoot:i}=Gu();Vu(i)},td=()=>{try{let e=document.documentElement;return Bl(e)}catch(e){X.options.value._debug===`verbose`&&console.error(`[React Scan Internal Error]`,`Failed to create notifications outline canvas`,e)}},nd=(e={})=>{Ju(e),!(Y.isInIframe.value&&!X.options.value.allowInIframe&&!X.runInAllEnvironments)&&(e.enabled===!1&&e.showToolbar!==!0||$u())},rd=new WeakSet;function id(e){return Object.keys(e)}function ad(e){return e&&typeof e==`object`&&!Array.isArray(e)}function od(e,t){let n={...e},r=t;return ad(e)&&ad(t)&&Object.keys(t).forEach(t=>{ad(r[t])&&t in e?n[t]=od(n[t],r[t]):n[t]=r[t]}),n}function sd(e){return e.replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function cd(e){return typeof e!=`string`||!e.includes(`var(--mantine-scale)`)?e:e.match(/^calc\((.*?)\)$/)?.[1].split(`*`)[0].trim()}function ld(e){let t=cd(e);return typeof t==`number`?t:typeof t==`string`?t.includes(`calc`)||t.includes(`var`)?t:t.includes(`px`)?Number(t.replace(`px`,``)):t.includes(`rem`)?Number(t.replace(`rem`,``))*16:t.includes(`em`)?Number(t.replace(`em`,``))*16:Number(t):NaN}function ud(e){return e===`0rem`?`0rem`:`calc(${e} * var(--mantine-scale))`}function dd(e,{shouldScale:t=!1}={}){function n(r){if(r===0||r===`0`)return`0${e}`;if(typeof r==`number`){let n=`${r/16}${e}`;return t?ud(n):n}if(typeof r==`string`){if(r===``||r.startsWith(`calc(`)||r.startsWith(`clamp(`)||r.includes(`rgba(`))return r;if(r.includes(`,`))return r.split(`,`).map(e=>n(e)).join(`,`);if(r.includes(` `))return r.split(` `).map(e=>n(e)).join(` `);let i=r.replace(`px`,``);if(!Number.isNaN(Number(i))){let n=`${Number(i)/16}${e}`;return t?ud(n):n}}return r}return n}var Z=dd(`rem`,{shouldScale:!0}),fd=dd(`em`);function pd(e){return Object.keys(e).reduce((t,n)=>(e[n]!==void 0&&(t[n]=e[n]),t),{})}function md(e){if(typeof e==`number`)return!0;if(typeof e==`string`){if(e.startsWith(`calc(`)||e.startsWith(`var(`)||e.includes(` `)&&e.trim()!==``)return!0;let t=/^[+-]?[0-9]+(\.[0-9]+)?(px|em|rem|ex|ch|lh|rlh|vw|vh|vmin|vmax|vb|vi|svw|svh|lvw|lvh|dvw|dvh|cm|mm|in|pt|pc|q|cqw|cqh|cqi|cqb|cqmin|cqmax|%)?$/;return e.trim().split(/\s+/).every(e=>t.test(e))}return!1}var hd=o((e=>{var t=Symbol.for(`react.transitional.element`),n=Symbol.for(`react.fragment`);function r(e,n,r){var i=null;if(r!==void 0&&(i=``+r),n.key!==void 0&&(i=``+n.key),`key`in n)for(var a in r={},n)a!==`key`&&(r[a]=n[a]);else r=n;return n=r.ref,{$$typeof:t,type:e,key:i,ref:n===void 0?null:n,props:r}}e.Fragment=n,e.jsx=r,e.jsxs=r})),Q=o(((e,t)=>{t.exports=hd()}))();function gd(e){let t=(0,_.createContext)(null);return[({children:e,value:n})=>(0,Q.jsx)(t.Provider,{value:n,children:e}),()=>{let n=(0,_.useContext)(t);if(n===null)throw Error(e);return n}]}function _d(e,t=`size`,n=!0){if(e!==void 0)return md(e)?n?Z(e):e:`var(--${t}-${e})`}function vd(e){return _d(e,`mantine-spacing`)}function $(e){return e===void 0?`var(--mantine-radius-default)`:_d(e,`mantine-radius`)}function yd(e){return _d(e,`mantine-font-size`)}function bd(e){return _d(e,`mantine-line-height`,!1)}function xd(e){if(e)return _d(e,`mantine-shadow`,!1)}function Sd(e,t){try{return e.addEventListener(`change`,t),()=>e.removeEventListener(`change`,t)}catch{return e.addListener(t),()=>e.removeListener(t)}}function Cd(e,t){return typeof window<`u`&&`matchMedia`in window?window.matchMedia(e).matches:!1}function wd(e,t,{getInitialValueInEffect:n}={getInitialValueInEffect:!0}){let[r,i]=(0,_.useState)(n?t:Cd(e));return(0,_.useEffect)(()=>{try{let t=window.matchMedia(e);return i(t.matches),Sd(t,e=>i(e.matches))}catch{return}},[e]),r||!1}var Td=typeof document<`u`?_.useLayoutEffect:_.useEffect;function Ed(e,t){let n=(0,_.useRef)(!1);(0,_.useEffect)(()=>()=>{n.current=!1},[]),(0,_.useEffect)(()=>{if(n.current)return e();n.current=!0},t)}function Dd(e,t){return wd(`(prefers-reduced-motion: reduce)`,e,t)}function Od(e){return e}function kd(e){var t,n,r=``;if(typeof e==`string`||typeof e==`number`)r+=e;else if(typeof e==`object`)if(Array.isArray(e)){var i=e.length;for(t=0;t<i;t++)e[t]&&(n=kd(e[t]))&&(r&&(r+=` `),r+=n)}else for(n in e)e[n]&&(r&&(r+=` `),r+=n);return r}function Ad(){for(var e,t,n=0,r=``,i=arguments.length;n<i;n++)(e=arguments[n])&&(t=kd(e))&&(r&&(r+=` `),r+=t);return r}var jd={};function Md(e){let t={};return e.forEach(e=>{Object.entries(e).forEach(([e,n])=>{t[e]?t[e]=Ad(t[e],n):t[e]=n})}),t}function Nd({theme:e,classNames:t,props:n,stylesCtx:r}){return Md((Array.isArray(t)?t:[t]).map(t=>typeof t==`function`?t(e,n,r):t||jd))}function Pd({theme:e,styles:t,props:n,stylesCtx:r}){return(Array.isArray(t)?t:[t]).reduce((t,i)=>typeof i==`function`?{...t,...i(e,n,r)}:{...t,...i},{})}var Fd=(0,_.createContext)(null);function Id(){let e=(0,_.useContext)(Fd);if(!e)throw Error(`[@mantine/core] MantineProvider was not found in tree`);return e}function Ld(){return Id().cssVariablesResolver}function Rd(){return Id().classNamesPrefix}function zd(){return Id().getStyleNonce}function Bd(){return Id().withStaticClasses}function Vd(){return Id().headless}function Hd(){return Id().stylesTransform?.sx}function Ud(){return Id().stylesTransform?.styles}function Wd(){return Id().env||`default`}function Gd(e){return/^#?([0-9A-F]{3}){1,2}([0-9A-F]{2})?$/i.test(e)}function Kd(e){let t=e.replace(`#`,``);if(t.length===3){let e=t.split(``);t=[e[0],e[0],e[1],e[1],e[2],e[2]].join(``)}if(t.length===8){let e=parseInt(t.slice(6,8),16)/255;return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16),a:e}}let n=parseInt(t,16);return{r:n>>16&255,g:n>>8&255,b:n&255,a:1}}function qd(e){let[t,n,r,i]=e.replace(/[^0-9,./]/g,``).split(/[/,]/).map(Number);return{r:t,g:n,b:r,a:i===void 0?1:i}}function Jd(e){let t=e.match(/^hsla?\(\s*(\d+)\s*,\s*(\d+%)\s*,\s*(\d+%)\s*(,\s*(0?\.\d+|\d+(\.\d+)?))?\s*\)$/i);if(!t)return{r:0,g:0,b:0,a:1};let n=parseInt(t[1],10),r=parseInt(t[2],10)/100,i=parseInt(t[3],10)/100,a=t[5]?parseFloat(t[5]):void 0,o=(1-Math.abs(2*i-1))*r,s=n/60,c=o*(1-Math.abs(s%2-1)),l=i-o/2,u,d,f;return s>=0&&s<1?(u=o,d=c,f=0):s>=1&&s<2?(u=c,d=o,f=0):s>=2&&s<3?(u=0,d=o,f=c):s>=3&&s<4?(u=0,d=c,f=o):s>=4&&s<5?(u=c,d=0,f=o):(u=o,d=0,f=c),{r:Math.round((u+l)*255),g:Math.round((d+l)*255),b:Math.round((f+l)*255),a:a||1}}function Yd(e){return Gd(e)?Kd(e):e.startsWith(`rgb`)?qd(e):e.startsWith(`hsl`)?Jd(e):{r:0,g:0,b:0,a:1}}function Xd(e,t){if(e.startsWith(`var(`))return`color-mix(in srgb, ${e}, black ${t*100}%)`;let{r:n,g:r,b:i,a}=Yd(e),o=1-t,s=e=>Math.round(e*o);return`rgba(${s(n)}, ${s(r)}, ${s(i)}, ${a})`}function Zd(e,t){return typeof e.primaryShade==`number`?e.primaryShade:t===`dark`?e.primaryShade.dark:e.primaryShade.light}function Qd(e){return e<=.03928?e/12.92:((e+.055)/1.055)**2.4}function $d(e){let t=e.match(/oklch\((.*?)%\s/);return t?parseFloat(t[1]):null}function ef(e){if(e.startsWith(`oklch(`))return($d(e)||0)/100;let{r:t,g:n,b:r}=Yd(e),i=t/255,a=n/255,o=r/255,s=Qd(i),c=Qd(a),l=Qd(o);return .2126*s+.7152*c+.0722*l}function tf(e,t=.179){return e.startsWith(`var(`)?!1:ef(e)>t}function nf({color:e,theme:t,colorScheme:n}){if(typeof e!=`string`)throw Error(`[@mantine/core] Failed to parse color. Expected color to be a string, instead got ${typeof e}`);if(e===`bright`)return{color:e,value:n===`dark`?t.white:t.black,shade:void 0,isThemeColor:!1,isLight:tf(n===`dark`?t.white:t.black,t.luminanceThreshold),variable:`--mantine-color-bright`};if(e===`dimmed`)return{color:e,value:n===`dark`?t.colors.dark[2]:t.colors.gray[7],shade:void 0,isThemeColor:!1,isLight:tf(n===`dark`?t.colors.dark[2]:t.colors.gray[6],t.luminanceThreshold),variable:`--mantine-color-dimmed`};if(e===`white`||e===`black`)return{color:e,value:e===`white`?t.white:t.black,shade:void 0,isThemeColor:!1,isLight:tf(e===`white`?t.white:t.black,t.luminanceThreshold),variable:`--mantine-color-${e}`};let[r,i]=e.split(`.`),a=i?Number(i):void 0,o=r in t.colors;if(o){let e=a===void 0?t.colors[r][Zd(t,n||`light`)]:t.colors[r][a];return{color:r,value:e,shade:a,isThemeColor:o,isLight:tf(e,t.luminanceThreshold),variable:i?`--mantine-color-${r}-${a}`:`--mantine-color-${r}-filled`}}return{color:e,value:e,isThemeColor:o,isLight:tf(e,t.luminanceThreshold),shade:a,variable:void 0}}function rf(e,t){let n=nf({color:e||t.primaryColor,theme:t});return n.variable?`var(${n.variable})`:e}function af(e,t){let n={from:e?.from||t.defaultGradient.from,to:e?.to||t.defaultGradient.to,deg:e?.deg??t.defaultGradient.deg??0},r=rf(n.from,t),i=rf(n.to,t);return`linear-gradient(${n.deg}deg, ${r} 0%, ${i} 100%)`}function of(e,t){if(typeof e!=`string`||t>1||t<0)return`rgba(0, 0, 0, 1)`;if(e.startsWith(`var(`))return`color-mix(in srgb, ${e}, transparent ${(1-t)*100}%)`;if(e.startsWith(`oklch`))return e.includes(`/`)?e.replace(/\/\s*[\d.]+\s*\)/,`/ ${t})`):e.replace(`)`,` / ${t})`);let{r:n,g:r,b:i}=Yd(e);return`rgba(${n}, ${r}, ${i}, ${t})`}var sf=of,cf=({color:e,theme:t,variant:n,gradient:r,autoContrast:i})=>{let a=nf({color:e,theme:t}),o=typeof i==`boolean`?i:t.autoContrast;if(n===`none`)return{background:`transparent`,hover:`transparent`,color:`inherit`,border:`none`};if(n===`filled`){let t=o&&a.isLight?`var(--mantine-color-black)`:`var(--mantine-color-white)`;return a.isThemeColor?a.shade===void 0?{background:`var(--mantine-color-${e}-filled)`,hover:`var(--mantine-color-${e}-filled-hover)`,color:t,border:`${Z(1)} solid transparent`}:{background:`var(--mantine-color-${a.color}-${a.shade})`,hover:`var(--mantine-color-${a.color}-${a.shade===9?8:a.shade+1})`,color:t,border:`${Z(1)} solid transparent`}:{background:e,hover:Xd(e,.1),color:t,border:`${Z(1)} solid transparent`}}if(n===`light`){if(a.isThemeColor){if(a.shade===void 0)return{background:`var(--mantine-color-${e}-light)`,hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${Z(1)} solid transparent`};let n=t.colors[a.color][a.shade];return{background:of(n,.1),hover:of(n,.12),color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${Z(1)} solid transparent`}}return{background:of(e,.1),hover:of(e,.12),color:e,border:`${Z(1)} solid transparent`}}if(n===`outline`)return a.isThemeColor?a.shade===void 0?{background:`transparent`,hover:`var(--mantine-color-${e}-outline-hover)`,color:`var(--mantine-color-${e}-outline)`,border:`${Z(1)} solid var(--mantine-color-${e}-outline)`}:{background:`transparent`,hover:of(t.colors[a.color][a.shade],.05),color:`var(--mantine-color-${a.color}-${a.shade})`,border:`${Z(1)} solid var(--mantine-color-${a.color}-${a.shade})`}:{background:`transparent`,hover:of(e,.05),color:e,border:`${Z(1)} solid ${e}`};if(n===`subtle`){if(a.isThemeColor){if(a.shade===void 0)return{background:`transparent`,hover:`var(--mantine-color-${e}-light-hover)`,color:`var(--mantine-color-${e}-light-color)`,border:`${Z(1)} solid transparent`};let n=t.colors[a.color][a.shade];return{background:`transparent`,hover:of(n,.12),color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${Z(1)} solid transparent`}}return{background:`transparent`,hover:of(e,.12),color:e,border:`${Z(1)} solid transparent`}}return n===`transparent`?a.isThemeColor?a.shade===void 0?{background:`transparent`,hover:`transparent`,color:`var(--mantine-color-${e}-light-color)`,border:`${Z(1)} solid transparent`}:{background:`transparent`,hover:`transparent`,color:`var(--mantine-color-${a.color}-${Math.min(a.shade,6)})`,border:`${Z(1)} solid transparent`}:{background:`transparent`,hover:`transparent`,color:e,border:`${Z(1)} solid transparent`}:n===`white`?a.isThemeColor?a.shade===void 0?{background:`var(--mantine-color-white)`,hover:Xd(t.white,.01),color:`var(--mantine-color-${e}-filled)`,border:`${Z(1)} solid transparent`}:{background:`var(--mantine-color-white)`,hover:Xd(t.white,.01),color:`var(--mantine-color-${a.color}-${a.shade})`,border:`${Z(1)} solid transparent`}:{background:`var(--mantine-color-white)`,hover:Xd(t.white,.01),color:e,border:`${Z(1)} solid transparent`}:n===`gradient`?{background:af(r,t),hover:af(r,t),color:`var(--mantine-color-white)`,border:`none`}:n===`default`?{background:`var(--mantine-color-default)`,hover:`var(--mantine-color-default-hover)`,color:`var(--mantine-color-default-color)`,border:`${Z(1)} solid var(--mantine-color-default-border)`}:{}},lf={dark:[`#C9C9C9`,`#b8b8b8`,`#828282`,`#696969`,`#424242`,`#3b3b3b`,`#2e2e2e`,`#242424`,`#1f1f1f`,`#141414`],gray:[`#f8f9fa`,`#f1f3f5`,`#e9ecef`,`#dee2e6`,`#ced4da`,`#adb5bd`,`#868e96`,`#495057`,`#343a40`,`#212529`],red:[`#fff5f5`,`#ffe3e3`,`#ffc9c9`,`#ffa8a8`,`#ff8787`,`#ff6b6b`,`#fa5252`,`#f03e3e`,`#e03131`,`#c92a2a`],pink:[`#fff0f6`,`#ffdeeb`,`#fcc2d7`,`#faa2c1`,`#f783ac`,`#f06595`,`#e64980`,`#d6336c`,`#c2255c`,`#a61e4d`],grape:[`#f8f0fc`,`#f3d9fa`,`#eebefa`,`#e599f7`,`#da77f2`,`#cc5de8`,`#be4bdb`,`#ae3ec9`,`#9c36b5`,`#862e9c`],violet:[`#f3f0ff`,`#e5dbff`,`#d0bfff`,`#b197fc`,`#9775fa`,`#845ef7`,`#7950f2`,`#7048e8`,`#6741d9`,`#5f3dc4`],indigo:[`#edf2ff`,`#dbe4ff`,`#bac8ff`,`#91a7ff`,`#748ffc`,`#5c7cfa`,`#4c6ef5`,`#4263eb`,`#3b5bdb`,`#364fc7`],blue:[`#e7f5ff`,`#d0ebff`,`#a5d8ff`,`#74c0fc`,`#4dabf7`,`#339af0`,`#228be6`,`#1c7ed6`,`#1971c2`,`#1864ab`],cyan:[`#e3fafc`,`#c5f6fa`,`#99e9f2`,`#66d9e8`,`#3bc9db`,`#22b8cf`,`#15aabf`,`#1098ad`,`#0c8599`,`#0b7285`],teal:[`#e6fcf5`,`#c3fae8`,`#96f2d7`,`#63e6be`,`#38d9a9`,`#20c997`,`#12b886`,`#0ca678`,`#099268`,`#087f5b`],green:[`#ebfbee`,`#d3f9d8`,`#b2f2bb`,`#8ce99a`,`#69db7c`,`#51cf66`,`#40c057`,`#37b24d`,`#2f9e44`,`#2b8a3e`],lime:[`#f4fce3`,`#e9fac8`,`#d8f5a2`,`#c0eb75`,`#a9e34b`,`#94d82d`,`#82c91e`,`#74b816`,`#66a80f`,`#5c940d`],yellow:[`#fff9db`,`#fff3bf`,`#ffec99`,`#ffe066`,`#ffd43b`,`#fcc419`,`#fab005`,`#f59f00`,`#f08c00`,`#e67700`],orange:[`#fff4e6`,`#ffe8cc`,`#ffd8a8`,`#ffc078`,`#ffa94d`,`#ff922b`,`#fd7e14`,`#f76707`,`#e8590c`,`#d9480f`]},uf=`-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji`,df={scale:1,fontSmoothing:!0,focusRing:`auto`,white:`#fff`,black:`#000`,colors:lf,primaryShade:{light:6,dark:8},primaryColor:`blue`,variantColorResolver:cf,autoContrast:!1,luminanceThreshold:.3,fontFamily:uf,fontFamilyMonospace:`ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace`,respectReducedMotion:!1,cursorType:`default`,defaultGradient:{from:`blue`,to:`cyan`,deg:45},defaultRadius:`sm`,activeClassName:`mantine-active`,focusClassName:``,headings:{fontFamily:uf,fontWeight:`700`,textWrap:`wrap`,sizes:{h1:{fontSize:Z(34),lineHeight:`1.3`},h2:{fontSize:Z(26),lineHeight:`1.35`},h3:{fontSize:Z(22),lineHeight:`1.4`},h4:{fontSize:Z(18),lineHeight:`1.45`},h5:{fontSize:Z(16),lineHeight:`1.5`},h6:{fontSize:Z(14),lineHeight:`1.5`}}},fontSizes:{xs:Z(12),sm:Z(14),md:Z(16),lg:Z(18),xl:Z(20)},lineHeights:{xs:`1.4`,sm:`1.45`,md:`1.55`,lg:`1.6`,xl:`1.65`},radius:{xs:Z(2),sm:Z(4),md:Z(8),lg:Z(16),xl:Z(32)},spacing:{xs:Z(10),sm:Z(12),md:Z(16),lg:Z(20),xl:Z(32)},breakpoints:{xs:`36em`,sm:`48em`,md:`62em`,lg:`75em`,xl:`88em`},shadows:{xs:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), 0 ${Z(1)} ${Z(2)} rgba(0, 0, 0, 0.1)`,sm:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(10)} ${Z(15)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(7)} ${Z(7)} ${Z(-5)}`,md:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(20)} ${Z(25)} ${Z(-5)}, rgba(0, 0, 0, 0.04) 0 ${Z(10)} ${Z(10)} ${Z(-5)}`,lg:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(28)} ${Z(23)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(12)} ${Z(12)} ${Z(-7)}`,xl:`0 ${Z(1)} ${Z(3)} rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0 ${Z(36)} ${Z(28)} ${Z(-7)}, rgba(0, 0, 0, 0.04) 0 ${Z(17)} ${Z(17)} ${Z(-7)}`},other:{},components:{}};function ff(e){return e===`auto`||e===`dark`||e===`light`}function pf({key:e=`mantine-color-scheme-value`}={}){let t;return{get:t=>{if(typeof window>`u`)return t;try{let n=window.localStorage.getItem(e);return ff(n)?n:t}catch{return t}},set:t=>{try{window.localStorage.setItem(e,t)}catch(e){console.warn(`[@mantine/core] Local storage color scheme manager was unable to save color scheme.`,e)}},subscribe:n=>{t=t=>{t.storageArea===window.localStorage&&t.key===e&&ff(t.newValue)&&n(t.newValue)},window.addEventListener(`storage`,t)},unsubscribe:()=>{window.removeEventListener(`storage`,t)},clear:()=>{window.localStorage.removeItem(e)}}}var mf=`[@mantine/core] MantineProvider: Invalid theme.primaryColor, it accepts only key of theme.colors, learn more – https://mantine.dev/theming/colors/#primary-color`,hf=`[@mantine/core] MantineProvider: Invalid theme.primaryShade, it accepts only 0-9 integers or an object { light: 0-9, dark: 0-9 }`;function gf(e){return e<0||e>9?!1:parseInt(e.toString(),10)===e}function _f(e){if(!(e.primaryColor in e.colors))throw Error(mf);if(typeof e.primaryShade==`object`&&(!gf(e.primaryShade.dark)||!gf(e.primaryShade.light))||typeof e.primaryShade==`number`&&!gf(e.primaryShade))throw Error(hf)}function vf(e,t){if(!t)return _f(e),e;let n=od(e,t);return t.fontFamily&&!t.headings?.fontFamily&&(n.headings.fontFamily=t.fontFamily),_f(n),n}var yf=(0,_.createContext)(null),bf=()=>(0,_.useContext)(yf)||df;function xf(){let e=(0,_.useContext)(yf);if(!e)throw Error(`@mantine/core: MantineProvider was not found in component tree, make sure you have it in your app`);return e}function Sf({theme:e,children:t,inherit:n=!0}){let r=bf(),i=(0,_.useMemo)(()=>vf(n?r:df,e),[e,r,n]);return(0,Q.jsx)(yf.Provider,{value:i,children:t})}Sf.displayName=`@mantine/core/MantineThemeProvider`;function Cf(){let e=xf(),t=zd(),n=id(e.breakpoints).reduce((t,n)=>{let r=e.breakpoints[n].includes(`px`),i=ld(e.breakpoints[n]);return`${t}@media (max-width: ${r?`${i-.1}px`:fd(i-.1)}) {.mantine-visible-from-${n} {display: none !important;}}@media (min-width: ${r?`${i}px`:fd(i)}) {.mantine-hidden-from-${n} {display: none !important;}}`},``);return(0,Q.jsx)(`style`,{"data-mantine-styles":`classes`,nonce:t?.(),dangerouslySetInnerHTML:{__html:n}})}function wf(e){return Object.entries(e).map(([e,t])=>`${e}: ${t};`).join(``)}function Tf(e,t){let n=t?[t]:[`:root`,`:host`],r=wf(e.variables),i=r?`${n.join(`, `)}{${r}}`:``,a=wf(e.dark),o=wf(e.light),s=e=>n.map(t=>t===`:host`?`${t}([data-mantine-color-scheme="${e}"])`:`${t}[data-mantine-color-scheme="${e}"]`).join(`, `);return`${i}

${a?`${s(`dark`)}{${a}}`:``}

${o?`${s(`light`)}{${o}}`:``}`}function Ef({color:e,theme:t,autoContrast:n}){return(typeof n==`boolean`?n:t.autoContrast)&&nf({color:e||t.primaryColor,theme:t}).isLight?`var(--mantine-color-black)`:`var(--mantine-color-white)`}function Df(e,t){return Ef({color:e.colors[e.primaryColor][Zd(e,t)],theme:e,autoContrast:null})}function Of({theme:e,color:t,colorScheme:n,name:r=t,withColorValues:i=!0}){if(!e.colors[t])return{};if(n===`light`){let n=Zd(e,`light`),a={[`--mantine-color-${r}-text`]:`var(--mantine-color-${r}-filled)`,[`--mantine-color-${r}-filled`]:`var(--mantine-color-${r}-${n})`,[`--mantine-color-${r}-filled-hover`]:`var(--mantine-color-${r}-${n===9?8:n+1})`,[`--mantine-color-${r}-light`]:sf(e.colors[t][n],.1),[`--mantine-color-${r}-light-hover`]:sf(e.colors[t][n],.12),[`--mantine-color-${r}-light-color`]:`var(--mantine-color-${r}-${n})`,[`--mantine-color-${r}-outline`]:`var(--mantine-color-${r}-${n})`,[`--mantine-color-${r}-outline-hover`]:sf(e.colors[t][n],.05)};return i?{[`--mantine-color-${r}-0`]:e.colors[t][0],[`--mantine-color-${r}-1`]:e.colors[t][1],[`--mantine-color-${r}-2`]:e.colors[t][2],[`--mantine-color-${r}-3`]:e.colors[t][3],[`--mantine-color-${r}-4`]:e.colors[t][4],[`--mantine-color-${r}-5`]:e.colors[t][5],[`--mantine-color-${r}-6`]:e.colors[t][6],[`--mantine-color-${r}-7`]:e.colors[t][7],[`--mantine-color-${r}-8`]:e.colors[t][8],[`--mantine-color-${r}-9`]:e.colors[t][9],...a}:a}let a=Zd(e,`dark`),o={[`--mantine-color-${r}-text`]:`var(--mantine-color-${r}-4)`,[`--mantine-color-${r}-filled`]:`var(--mantine-color-${r}-${a})`,[`--mantine-color-${r}-filled-hover`]:`var(--mantine-color-${r}-${a===9?8:a+1})`,[`--mantine-color-${r}-light`]:sf(e.colors[t][Math.max(0,a-2)],.15),[`--mantine-color-${r}-light-hover`]:sf(e.colors[t][Math.max(0,a-2)],.2),[`--mantine-color-${r}-light-color`]:`var(--mantine-color-${r}-${Math.max(a-5,0)})`,[`--mantine-color-${r}-outline`]:`var(--mantine-color-${r}-${Math.max(a-4,0)})`,[`--mantine-color-${r}-outline-hover`]:sf(e.colors[t][Math.max(a-4,0)],.05)};return i?{[`--mantine-color-${r}-0`]:e.colors[t][0],[`--mantine-color-${r}-1`]:e.colors[t][1],[`--mantine-color-${r}-2`]:e.colors[t][2],[`--mantine-color-${r}-3`]:e.colors[t][3],[`--mantine-color-${r}-4`]:e.colors[t][4],[`--mantine-color-${r}-5`]:e.colors[t][5],[`--mantine-color-${r}-6`]:e.colors[t][6],[`--mantine-color-${r}-7`]:e.colors[t][7],[`--mantine-color-${r}-8`]:e.colors[t][8],[`--mantine-color-${r}-9`]:e.colors[t][9],...o}:o}function kf(e){return!!e&&typeof e==`object`&&`mantine-virtual-color`in e}function Af(e,t,n){id(t).forEach(r=>Object.assign(e,{[`--mantine-${n}-${r}`]:t[r]}))}var jf=e=>{let t=Zd(e,`light`),n=e.defaultRadius in e.radius?e.radius[e.defaultRadius]:Z(e.defaultRadius),r={variables:{"--mantine-z-index-app":`100`,"--mantine-z-index-modal":`200`,"--mantine-z-index-popover":`300`,"--mantine-z-index-overlay":`400`,"--mantine-z-index-max":`9999`,"--mantine-scale":e.scale.toString(),"--mantine-cursor-type":e.cursorType,"--mantine-webkit-font-smoothing":e.fontSmoothing?`antialiased`:`unset`,"--mantine-moz-font-smoothing":e.fontSmoothing?`grayscale`:`unset`,"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-line-height":e.lineHeights.md,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":e.headings.fontWeight,"--mantine-heading-text-wrap":e.headings.textWrap,"--mantine-radius-default":n,"--mantine-primary-color-filled":`var(--mantine-color-${e.primaryColor}-filled)`,"--mantine-primary-color-filled-hover":`var(--mantine-color-${e.primaryColor}-filled-hover)`,"--mantine-primary-color-light":`var(--mantine-color-${e.primaryColor}-light)`,"--mantine-primary-color-light-hover":`var(--mantine-color-${e.primaryColor}-light-hover)`,"--mantine-primary-color-light-color":`var(--mantine-color-${e.primaryColor}-light-color)`},light:{"--mantine-color-scheme":`light`,"--mantine-primary-color-contrast":Df(e,`light`),"--mantine-color-bright":`var(--mantine-color-black)`,"--mantine-color-text":e.black,"--mantine-color-body":e.white,"--mantine-color-error":`var(--mantine-color-red-6)`,"--mantine-color-placeholder":`var(--mantine-color-gray-5)`,"--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-${t})`,"--mantine-color-default":`var(--mantine-color-white)`,"--mantine-color-default-hover":`var(--mantine-color-gray-0)`,"--mantine-color-default-color":`var(--mantine-color-black)`,"--mantine-color-default-border":`var(--mantine-color-gray-4)`,"--mantine-color-dimmed":`var(--mantine-color-gray-6)`,"--mantine-color-disabled":`var(--mantine-color-gray-2)`,"--mantine-color-disabled-color":`var(--mantine-color-gray-5)`,"--mantine-color-disabled-border":`var(--mantine-color-gray-3)`},dark:{"--mantine-color-scheme":`dark`,"--mantine-primary-color-contrast":Df(e,`dark`),"--mantine-color-bright":`var(--mantine-color-white)`,"--mantine-color-text":`var(--mantine-color-dark-0)`,"--mantine-color-body":`var(--mantine-color-dark-7)`,"--mantine-color-error":`var(--mantine-color-red-8)`,"--mantine-color-placeholder":`var(--mantine-color-dark-3)`,"--mantine-color-anchor":`var(--mantine-color-${e.primaryColor}-4)`,"--mantine-color-default":`var(--mantine-color-dark-6)`,"--mantine-color-default-hover":`var(--mantine-color-dark-5)`,"--mantine-color-default-color":`var(--mantine-color-white)`,"--mantine-color-default-border":`var(--mantine-color-dark-4)`,"--mantine-color-dimmed":`var(--mantine-color-dark-2)`,"--mantine-color-disabled":`var(--mantine-color-dark-6)`,"--mantine-color-disabled-color":`var(--mantine-color-dark-3)`,"--mantine-color-disabled-border":`var(--mantine-color-dark-4)`}};Af(r.variables,e.breakpoints,`breakpoint`),Af(r.variables,e.spacing,`spacing`),Af(r.variables,e.fontSizes,`font-size`),Af(r.variables,e.lineHeights,`line-height`),Af(r.variables,e.shadows,`shadow`),Af(r.variables,e.radius,`radius`),e.colors[e.primaryColor].forEach((t,n)=>{r.variables[`--mantine-primary-color-${n}`]=`var(--mantine-color-${e.primaryColor}-${n})`}),id(e.colors).forEach(t=>{let n=e.colors[t];if(kf(n)){Object.assign(r.light,Of({theme:e,name:n.name,color:n.light,colorScheme:`light`,withColorValues:!0})),Object.assign(r.dark,Of({theme:e,name:n.name,color:n.dark,colorScheme:`dark`,withColorValues:!0}));return}n.forEach((e,n)=>{r.variables[`--mantine-color-${t}-${n}`]=e}),Object.assign(r.light,Of({theme:e,color:t,colorScheme:`light`,withColorValues:!1})),Object.assign(r.dark,Of({theme:e,color:t,colorScheme:`dark`,withColorValues:!1}))});let i=e.headings.sizes;return id(i).forEach(t=>{r.variables[`--mantine-${t}-font-size`]=i[t].fontSize,r.variables[`--mantine-${t}-line-height`]=i[t].lineHeight,r.variables[`--mantine-${t}-font-weight`]=i[t].fontWeight||e.headings.fontWeight}),r};function Mf({theme:e,generator:t}){let n=jf(e),r=t?.(e);return r?od(n,r):n}var Nf=jf(df);function Pf(e){let t={variables:{},light:{},dark:{}};return id(e.variables).forEach(n=>{Nf.variables[n]!==e.variables[n]&&(t.variables[n]=e.variables[n])}),id(e.light).forEach(n=>{Nf.light[n]!==e.light[n]&&(t.light[n]=e.light[n])}),id(e.dark).forEach(n=>{Nf.dark[n]!==e.dark[n]&&(t.dark[n]=e.dark[n])}),t}function Ff(e){return Tf({variables:{},dark:{"--mantine-color-scheme":`dark`},light:{"--mantine-color-scheme":`light`}},e)}function If({cssVariablesSelector:e,deduplicateCssVariables:t}){let n=xf(),r=zd(),i=Mf({theme:n,generator:Ld()}),a=(e===void 0||e===`:root`||e===`:host`)&&t,o=Tf(a?Pf(i):i,e);return o?(0,Q.jsx)(`style`,{"data-mantine-styles":!0,nonce:r?.(),dangerouslySetInnerHTML:{__html:`${o}${a?``:Ff(e)}`}}):null}If.displayName=`@mantine/CssVariables`;function Lf(e,t){let n=typeof window<`u`&&`matchMedia`in window&&window.matchMedia(`(prefers-color-scheme: dark)`)?.matches,r=e===`auto`?n?`dark`:`light`:e;t()?.setAttribute(`data-mantine-color-scheme`,r)}function Rf({manager:e,defaultColorScheme:t,getRootElement:n,forceColorScheme:r}){let i=(0,_.useRef)(null),[a,o]=(0,_.useState)(()=>e.get(t)),s=r||a,c=(0,_.useCallback)(t=>{r||(Lf(t,n),o(t),e.set(t))},[e.set,s,r]),l=(0,_.useCallback)(()=>{o(t),Lf(t,n),e.clear()},[e.clear,t]);return(0,_.useEffect)(()=>(e.subscribe(c),e.unsubscribe),[e.subscribe,e.unsubscribe]),Td(()=>{Lf(e.get(t),n)},[]),(0,_.useEffect)(()=>{if(r)return Lf(r,n),()=>{};r===void 0&&Lf(a,n),typeof window<`u`&&`matchMedia`in window&&(i.current=window.matchMedia(`(prefers-color-scheme: dark)`));let e=e=>{a===`auto`&&Lf(e.matches?`dark`:`light`,n)};return i.current?.addEventListener(`change`,e),()=>i.current?.removeEventListener(`change`,e)},[a,r]),{colorScheme:s,setColorScheme:c,clearColorScheme:l}}function zf({respectReducedMotion:e,getRootElement:t}){Td(()=>{e&&t()?.setAttribute(`data-respect-reduced-motion`,`true`)},[e])}function Bf({theme:e,children:t,getStyleNonce:n,withStaticClasses:r=!0,withGlobalClasses:i=!0,deduplicateCssVariables:a=!0,withCssVariables:o=!0,cssVariablesSelector:s,classNamesPrefix:c=`mantine`,colorSchemeManager:l=pf(),defaultColorScheme:u=`light`,getRootElement:d=()=>document.documentElement,cssVariablesResolver:f,forceColorScheme:p,stylesTransform:m,env:h}){let{colorScheme:g,setColorScheme:_,clearColorScheme:v}=Rf({defaultColorScheme:u,forceColorScheme:p,manager:l,getRootElement:d});return zf({respectReducedMotion:e?.respectReducedMotion||!1,getRootElement:d}),(0,Q.jsx)(Fd.Provider,{value:{colorScheme:g,setColorScheme:_,clearColorScheme:v,getRootElement:d,classNamesPrefix:c,getStyleNonce:n,cssVariablesResolver:f,cssVariablesSelector:s??`:root`,withStaticClasses:r,stylesTransform:m,env:h},children:(0,Q.jsxs)(Sf,{theme:e,children:[o&&(0,Q.jsx)(If,{cssVariablesSelector:s,deduplicateCssVariables:a}),i&&(0,Q.jsx)(Cf,{}),t]})})}Bf.displayName=`@mantine/core/MantineProvider`;function Vf({children:e,theme:t,env:n}){return(0,Q.jsx)(Fd.Provider,{value:{colorScheme:`auto`,setColorScheme:()=>{},clearColorScheme:()=>{},getRootElement:()=>document.documentElement,classNamesPrefix:`mantine`,cssVariablesSelector:`:root`,withStaticClasses:!1,headless:!0,env:n},children:(0,Q.jsx)(Sf,{theme:t,children:e})})}Vf.displayName=`@mantine/core/HeadlessMantineProvider`;var Hf={always:`mantine-focus-always`,auto:`mantine-focus-auto`,never:`mantine-focus-never`};function Uf({theme:e,options:t,unstyled:n}){return Ad(t?.focusable&&!n&&(e.focusClassName||Hf[e.focusRing]),t?.active&&!n&&e.activeClassName)}function Wf({selector:e,stylesCtx:t,options:n,props:r,theme:i}){return Nd({theme:i,classNames:n?.classNames,props:n?.props||r,stylesCtx:t})[e]}function Gf({selector:e,stylesCtx:t,theme:n,classNames:r,props:i}){return Nd({theme:n,classNames:r,props:i,stylesCtx:t})[e]}function Kf({rootSelector:e,selector:t,className:n}){return e===t?n:void 0}function qf({selector:e,classes:t,unstyled:n}){return n?void 0:t[e]}function Jf({themeName:e,classNamesPrefix:t,selector:n,withStaticClass:r}){return r===!1?[]:e.map(e=>`${t}-${e}-${n}`)}function Yf({themeName:e,theme:t,selector:n,props:r,stylesCtx:i}){return e.map(e=>Nd({theme:t,classNames:t.components[e]?.classNames,props:r,stylesCtx:i})?.[n])}function Xf({options:e,classes:t,selector:n,unstyled:r}){return e?.variant&&!r?t[`${n}--${e.variant}`]:void 0}function Zf({theme:e,options:t,themeName:n,selector:r,classNamesPrefix:i,classNames:a,classes:o,unstyled:s,className:c,rootSelector:l,props:u,stylesCtx:d,withStaticClasses:f,headless:p,transformedStyles:m}){return Ad(Uf({theme:e,options:t,unstyled:s||p}),Yf({theme:e,themeName:n,selector:r,props:u,stylesCtx:d}),Xf({options:t,classes:o,selector:r,unstyled:s}),Gf({selector:r,stylesCtx:d,theme:e,classNames:a,props:u}),Gf({selector:r,stylesCtx:d,theme:e,classNames:m,props:u}),Wf({selector:r,stylesCtx:d,options:t,props:u,theme:e}),Kf({rootSelector:l,selector:r,className:c}),qf({selector:r,classes:o,unstyled:s||p}),f&&!p&&Jf({themeName:n,classNamesPrefix:i,selector:r,withStaticClass:t?.withStaticClass}),t?.className)}function Qf({theme:e,themeName:t,props:n,stylesCtx:r,selector:i}){return t.map(t=>Pd({theme:e,styles:e.components[t]?.styles,props:n,stylesCtx:r})[i]).reduce((e,t)=>({...e,...t}),{})}function $f({style:e,theme:t}){return Array.isArray(e)?[...e].reduce((e,n)=>({...e,...$f({style:n,theme:t})}),{}):typeof e==`function`?e(t):e??{}}function ep(e){return e.reduce((e,t)=>(t&&Object.keys(t).forEach(n=>{e[n]={...e[n],...pd(t[n])}}),e),{})}function tp({vars:e,varsResolver:t,theme:n,props:r,stylesCtx:i,selector:a,themeName:o,headless:s}){return ep([s?{}:t?.(n,r,i),...o.map(e=>n.components?.[e]?.vars?.(n,r,i)),e?.(n,r,i)])?.[a]}function np({theme:e,themeName:t,selector:n,options:r,props:i,stylesCtx:a,rootSelector:o,styles:s,style:c,vars:l,varsResolver:u,headless:d,withStylesTransform:f}){return{...!f&&Qf({theme:e,themeName:t,props:i,stylesCtx:a,selector:n}),...!f&&Pd({theme:e,styles:s,props:i,stylesCtx:a})[n],...!f&&Pd({theme:e,styles:r?.styles,props:r?.props||i,stylesCtx:a})[n],...tp({theme:e,props:i,stylesCtx:a,vars:l,varsResolver:u,selector:n,themeName:t,headless:d}),...o===n?$f({style:c,theme:e}):null,...$f({style:r?.style,theme:e})}}function rp({props:e,stylesCtx:t,themeName:n}){let r=xf(),i=Ud()?.();return{getTransformedStyles:a=>i?[...a.map(n=>i(n,{props:e,theme:r,ctx:t})),...n.map(n=>i(r.components[n]?.styles,{props:e,theme:r,ctx:t}))].filter(Boolean):[],withStylesTransform:!!i}}function ip({name:e,classes:t,props:n,stylesCtx:r,className:i,style:a,rootSelector:o=`root`,unstyled:s,classNames:c,styles:l,vars:u,varsResolver:d,attributes:f}){let p=xf(),m=Rd(),h=Bd(),g=Vd(),_=(Array.isArray(e)?e:[e]).filter(e=>e),{withStylesTransform:v,getTransformedStyles:y}=rp({props:n,stylesCtx:r,themeName:_});return(e,b)=>({className:Zf({theme:p,options:b,themeName:_,selector:e,classNamesPrefix:m,classNames:c,classes:t,unstyled:s,className:i,rootSelector:o,props:n,stylesCtx:r,withStaticClasses:h,headless:g,transformedStyles:y([b?.styles,l])}),style:np({theme:p,themeName:_,selector:e,options:b,props:n,stylesCtx:r,rootSelector:o,styles:l,style:a,vars:u,varsResolver:d,headless:g,withStylesTransform:v}),...f?.[e]})}function ap(e,t,n){let r=xf(),i=r.components[e]?.defaultProps,a=typeof i==`function`?i(r):i;return{...t,...a,...pd(n)}}function op(e){return e}function sp(e){return id(e).reduce((t,n)=>e[n]===void 0?t:`${t}${sd(n)}:${e[n]};`,``).trim()}function cp({selector:e,styles:t,media:n,container:r}){let i=t?sp(t):``,a=Array.isArray(n)?n.map(t=>`@media${t.query}{${e}{${sp(t.styles)}}}`):[],o=Array.isArray(r)?r.map(t=>`@container ${t.query}{${e}{${sp(t.styles)}}}`):[];return`${i?`${e}{${i}}`:``}${a.join(``)}${o.join(``)}`.trim()}function lp(e){let t=zd();return(0,Q.jsx)(`style`,{"data-mantine-styles":`inline`,nonce:t?.(),dangerouslySetInnerHTML:{__html:cp(e)}})}function up(e){let{m:t,mx:n,my:r,mt:i,mb:a,ml:o,mr:s,me:c,ms:l,p:u,px:d,py:f,pt:p,pb:m,pl:h,pr:g,pe:_,ps:v,bd:y,bdrs:b,bg:x,c:S,opacity:C,ff:w,fz:T,fw:ee,lts:te,ta:E,lh:ne,fs:re,tt:ie,td:ae,w:oe,miw:se,maw:ce,h:D,mih:O,mah:le,bgsz:ue,bgp:de,bgr:fe,bga:pe,pos:k,top:me,left:he,bottom:ge,right:_e,inset:ve,display:ye,flex:be,hiddenFrom:xe,visibleFrom:Se,lightHidden:Ce,darkHidden:we,sx:Te,...Ee}=e;return{styleProps:pd({m:t,mx:n,my:r,mt:i,mb:a,ml:o,mr:s,me:c,ms:l,p:u,px:d,py:f,pt:p,pb:m,pl:h,pr:g,pe:_,ps:v,bd:y,bg:x,c:S,opacity:C,ff:w,fz:T,fw:ee,lts:te,ta:E,lh:ne,fs:re,tt:ie,td:ae,w:oe,miw:se,maw:ce,h:D,mih:O,mah:le,bgsz:ue,bgp:de,bgr:fe,bga:pe,pos:k,top:me,left:he,bottom:ge,right:_e,inset:ve,display:ye,flex:be,bdrs:b,hiddenFrom:xe,visibleFrom:Se,lightHidden:Ce,darkHidden:we,sx:Te}),rest:Ee}}var dp={m:{type:`spacing`,property:`margin`},mt:{type:`spacing`,property:`marginTop`},mb:{type:`spacing`,property:`marginBottom`},ml:{type:`spacing`,property:`marginLeft`},mr:{type:`spacing`,property:`marginRight`},ms:{type:`spacing`,property:`marginInlineStart`},me:{type:`spacing`,property:`marginInlineEnd`},mx:{type:`spacing`,property:`marginInline`},my:{type:`spacing`,property:`marginBlock`},p:{type:`spacing`,property:`padding`},pt:{type:`spacing`,property:`paddingTop`},pb:{type:`spacing`,property:`paddingBottom`},pl:{type:`spacing`,property:`paddingLeft`},pr:{type:`spacing`,property:`paddingRight`},ps:{type:`spacing`,property:`paddingInlineStart`},pe:{type:`spacing`,property:`paddingInlineEnd`},px:{type:`spacing`,property:`paddingInline`},py:{type:`spacing`,property:`paddingBlock`},bd:{type:`border`,property:`border`},bdrs:{type:`radius`,property:`borderRadius`},bg:{type:`color`,property:`background`},c:{type:`textColor`,property:`color`},opacity:{type:`identity`,property:`opacity`},ff:{type:`fontFamily`,property:`fontFamily`},fz:{type:`fontSize`,property:`fontSize`},fw:{type:`identity`,property:`fontWeight`},lts:{type:`size`,property:`letterSpacing`},ta:{type:`identity`,property:`textAlign`},lh:{type:`lineHeight`,property:`lineHeight`},fs:{type:`identity`,property:`fontStyle`},tt:{type:`identity`,property:`textTransform`},td:{type:`identity`,property:`textDecoration`},w:{type:`spacing`,property:`width`},miw:{type:`spacing`,property:`minWidth`},maw:{type:`spacing`,property:`maxWidth`},h:{type:`spacing`,property:`height`},mih:{type:`spacing`,property:`minHeight`},mah:{type:`spacing`,property:`maxHeight`},bgsz:{type:`size`,property:`backgroundSize`},bgp:{type:`identity`,property:`backgroundPosition`},bgr:{type:`identity`,property:`backgroundRepeat`},bga:{type:`identity`,property:`backgroundAttachment`},pos:{type:`identity`,property:`position`},top:{type:`size`,property:`top`},left:{type:`size`,property:`left`},bottom:{type:`size`,property:`bottom`},right:{type:`size`,property:`right`},inset:{type:`size`,property:`inset`},display:{type:`identity`,property:`display`},flex:{type:`identity`,property:`flex`}};function fp(e,t){let n=nf({color:e,theme:t});return n.color===`dimmed`?`var(--mantine-color-dimmed)`:n.color===`bright`?`var(--mantine-color-bright)`:n.variable?`var(${n.variable})`:n.color}function pp(e,t){let n=nf({color:e,theme:t});return n.isThemeColor&&n.shade===void 0?`var(--mantine-color-${n.color}-text)`:fp(e,t)}function mp(e,t){if(typeof e==`number`)return Z(e);if(typeof e==`string`){let[n,r,...i]=e.split(` `).filter(e=>e.trim()!==``),a=`${Z(n)}`;return r&&(a+=` ${r}`),i.length>0&&(a+=` ${fp(i.join(` `),t)}`),a.trim()}return e}var hp={text:`var(--mantine-font-family)`,mono:`var(--mantine-font-family-monospace)`,monospace:`var(--mantine-font-family-monospace)`,heading:`var(--mantine-font-family-headings)`,headings:`var(--mantine-font-family-headings)`};function gp(e){return typeof e==`string`&&e in hp?hp[e]:e}var _p=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`];function vp(e,t){return typeof e==`string`&&e in t.fontSizes?`var(--mantine-font-size-${e})`:typeof e==`string`&&_p.includes(e)?`var(--mantine-${e}-font-size)`:typeof e==`number`||typeof e==`string`?Z(e):e}function yp(e){return e}var bp=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`];function xp(e,t){return typeof e==`string`&&e in t.lineHeights?`var(--mantine-line-height-${e})`:typeof e==`string`&&bp.includes(e)?`var(--mantine-${e}-line-height)`:e}function Sp(e,t){return typeof e==`string`&&e in t.radius?`var(--mantine-radius-${e})`:typeof e==`number`||typeof e==`string`?Z(e):e}function Cp(e){return typeof e==`number`?Z(e):e}function wp(e,t){if(typeof e==`number`)return Z(e);if(typeof e==`string`){let n=e.replace(`-`,``);if(!(n in t.spacing))return Z(e);let r=`--mantine-spacing-${n}`;return e.startsWith(`-`)?`calc(var(${r}) * -1)`:`var(${r})`}return e}var Tp={color:fp,textColor:pp,fontSize:vp,spacing:wp,radius:Sp,identity:yp,size:Cp,lineHeight:xp,fontFamily:gp,border:mp};function Ep(e){return e.replace(`(min-width: `,``).replace(`em)`,``)}function Dp({media:e,...t}){let n=Object.keys(e).sort((e,t)=>Number(Ep(e))-Number(Ep(t))).map(t=>({query:t,styles:e[t]}));return{...t,media:n}}function Op(e){if(typeof e!=`object`||!e)return!1;let t=Object.keys(e);return!(t.length===1&&t[0]===`base`)}function kp(e){return typeof e==`object`&&e?`base`in e?e.base:void 0:e}function Ap(e){return typeof e==`object`&&e?id(e).filter(e=>e!==`base`):[]}function jp(e,t){return typeof e==`object`&&e&&t in e?e[t]:e}function Mp({styleProps:e,data:t,theme:n}){return Dp(id(e).reduce((r,i)=>{if(i===`hiddenFrom`||i===`visibleFrom`||i===`sx`)return r;let a=t[i],o=Array.isArray(a.property)?a.property:[a.property],s=kp(e[i]);if(!Op(e[i]))return o.forEach(e=>{r.inlineStyles[e]=Tp[a.type](s,n)}),r;r.hasResponsiveStyles=!0;let c=Ap(e[i]);return o.forEach(t=>{s!=null&&(r.styles[t]=Tp[a.type](s,n)),c.forEach(o=>{let s=`(min-width: ${n.breakpoints[o]})`;r.media[s]={...r.media[s],[t]:Tp[a.type](jp(e[i],o),n)}})}),r},{hasResponsiveStyles:!1,styles:{},inlineStyles:{},media:{}}))}function Np(){return`__m__-${(0,_.useId)().replace(/[:«»]/g,``)}`}function Pp(e){return e}function Fp(e){return e.startsWith(`data-`)?e:`data-${e}`}function Ip(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r===void 0||r===``||r===!1||r===null||(t[Fp(n)]=e[n]),t},{})}function Lp(e){return e?typeof e==`string`?{[Fp(e)]:!0}:Array.isArray(e)?[...e].reduce((e,t)=>({...e,...Lp(t)}),{}):Ip(e):null}function Rp(e,t){return Array.isArray(e)?[...e].reduce((e,n)=>({...e,...Rp(n,t)}),{}):typeof e==`function`?e(t):e??{}}function zp({theme:e,style:t,vars:n,styleProps:r}){let i=Rp(t,e),a=Rp(n,e);return{...i,...a,...r}}var Bp=(0,_.forwardRef)(({component:e,style:t,__vars:n,className:r,variant:i,mod:a,size:o,hiddenFrom:s,visibleFrom:c,lightHidden:l,darkHidden:u,renderRoot:d,__size:f,...p},m)=>{let h=xf(),g=e||`div`,{styleProps:_,rest:v}=up(p),y=Hd()?.()?.(_.sx),b=Np(),x=Mp({styleProps:_,theme:h,data:dp}),S={ref:m,style:zp({theme:h,style:t,vars:n,styleProps:x.inlineStyles}),className:Ad(r,y,{[b]:x.hasResponsiveStyles,"mantine-light-hidden":l,"mantine-dark-hidden":u,[`mantine-hidden-from-${s}`]:s,[`mantine-visible-from-${c}`]:c}),"data-variant":i,"data-size":md(o)?void 0:o||void 0,size:f,...Lp(a),...v};return(0,Q.jsxs)(Q.Fragment,{children:[x.hasResponsiveStyles&&(0,Q.jsx)(lp,{selector:`.${b}`,styles:x.styles,media:x.media}),typeof d==`function`?d(S):(0,Q.jsx)(g,{...S})]})});Bp.displayName=`@mantine/core/Box`;var Vp=Pp(Bp);function Hp(e){return e}function Up(e){let t=(0,_.forwardRef)(e);return t.extend=Hp,t.withProps=e=>{let n=(0,_.forwardRef)((n,r)=>(0,Q.jsx)(t,{...e,...n,ref:r}));return n.extend=t.extend,n.displayName=`WithProps(${t.displayName})`,n},t}function Wp(e){let t=(0,_.forwardRef)(e);return t.withProps=e=>{let n=(0,_.forwardRef)((n,r)=>(0,Q.jsx)(t,{...e,...n,ref:r}));return n.extend=t.extend,n.displayName=`WithProps(${t.displayName})`,n},t.extend=Hp,t}var Gp={root:`m_87cf2631`},Kp={__staticSelector:`UnstyledButton`},qp=Wp((e,t)=>{let n=ap(`UnstyledButton`,Kp,e),{className:r,component:i=`button`,__staticSelector:a,unstyled:o,classNames:s,styles:c,style:l,attributes:u,...d}=n;return(0,Q.jsx)(Vp,{...ip({name:a,props:n,classes:Gp,className:r,style:l,classNames:s,styles:c,unstyled:o,attributes:u})(`root`,{focusable:!0}),component:i,ref:t,type:i===`button`?`button`:void 0,...d})});qp.classes=Gp,qp.displayName=`@mantine/core/UnstyledButton`;var Jp={root:`m_1b7284a3`},Yp=Od((e,{radius:t,shadow:n})=>({root:{"--paper-radius":t===void 0?void 0:$(t),"--paper-shadow":xd(n)}})),Xp=Wp((e,t)=>{let n=ap(`Paper`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,withBorder:c,vars:l,radius:u,shadow:d,variant:f,mod:p,attributes:m,...h}=n,g=ip({name:`Paper`,props:n,classes:Jp,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:m,vars:l,varsResolver:Yp});return(0,Q.jsx)(Vp,{ref:t,mod:[{"data-with-border":c},p],...g(`root`),variant:f,...h})});Xp.classes=Jp,Xp.displayName=`@mantine/core/Paper`;var Zp=e=>({in:{opacity:1,transform:`scale(1)`},out:{opacity:0,transform:`scale(.9) translateY(${e===`bottom`?10:-10}px)`},transitionProperty:`transform, opacity`}),Qp={fade:{in:{opacity:1},out:{opacity:0},transitionProperty:`opacity`},"fade-up":{in:{opacity:1,transform:`translateY(0)`},out:{opacity:0,transform:`translateY(30px)`},transitionProperty:`opacity, transform`},"fade-down":{in:{opacity:1,transform:`translateY(0)`},out:{opacity:0,transform:`translateY(-30px)`},transitionProperty:`opacity, transform`},"fade-left":{in:{opacity:1,transform:`translateX(0)`},out:{opacity:0,transform:`translateX(30px)`},transitionProperty:`opacity, transform`},"fade-right":{in:{opacity:1,transform:`translateX(0)`},out:{opacity:0,transform:`translateX(-30px)`},transitionProperty:`opacity, transform`},scale:{in:{opacity:1,transform:`scale(1)`},out:{opacity:0,transform:`scale(0)`},common:{transformOrigin:`top`},transitionProperty:`transform, opacity`},"scale-y":{in:{opacity:1,transform:`scaleY(1)`},out:{opacity:0,transform:`scaleY(0)`},common:{transformOrigin:`top`},transitionProperty:`transform, opacity`},"scale-x":{in:{opacity:1,transform:`scaleX(1)`},out:{opacity:0,transform:`scaleX(0)`},common:{transformOrigin:`left`},transitionProperty:`transform, opacity`},"skew-up":{in:{opacity:1,transform:`translateY(0) skew(0deg, 0deg)`},out:{opacity:0,transform:`translateY(-20px) skew(-10deg, -5deg)`},common:{transformOrigin:`top`},transitionProperty:`transform, opacity`},"skew-down":{in:{opacity:1,transform:`translateY(0) skew(0deg, 0deg)`},out:{opacity:0,transform:`translateY(20px) skew(-10deg, -5deg)`},common:{transformOrigin:`bottom`},transitionProperty:`transform, opacity`},"rotate-left":{in:{opacity:1,transform:`translateY(0) rotate(0deg)`},out:{opacity:0,transform:`translateY(20px) rotate(-5deg)`},common:{transformOrigin:`bottom`},transitionProperty:`transform, opacity`},"rotate-right":{in:{opacity:1,transform:`translateY(0) rotate(0deg)`},out:{opacity:0,transform:`translateY(20px) rotate(5deg)`},common:{transformOrigin:`top`},transitionProperty:`transform, opacity`},"slide-down":{in:{opacity:1,transform:`translateY(0)`},out:{opacity:0,transform:`translateY(-100%)`},common:{transformOrigin:`top`},transitionProperty:`transform, opacity`},"slide-up":{in:{opacity:1,transform:`translateY(0)`},out:{opacity:0,transform:`translateY(100%)`},common:{transformOrigin:`bottom`},transitionProperty:`transform, opacity`},"slide-left":{in:{opacity:1,transform:`translateX(0)`},out:{opacity:0,transform:`translateX(100%)`},common:{transformOrigin:`left`},transitionProperty:`transform, opacity`},"slide-right":{in:{opacity:1,transform:`translateX(0)`},out:{opacity:0,transform:`translateX(-100%)`},common:{transformOrigin:`right`},transitionProperty:`transform, opacity`},pop:{...Zp(`bottom`),common:{transformOrigin:`center center`}},"pop-bottom-left":{...Zp(`bottom`),common:{transformOrigin:`bottom left`}},"pop-bottom-right":{...Zp(`bottom`),common:{transformOrigin:`bottom right`}},"pop-top-left":{...Zp(`top`),common:{transformOrigin:`top left`}},"pop-top-right":{...Zp(`top`),common:{transformOrigin:`top right`}}},$p={entering:`in`,entered:`in`,exiting:`out`,exited:`out`,"pre-exiting":`out`,"pre-entering":`out`};function em({transition:e,state:t,duration:n,timingFunction:r}){let i={WebkitBackfaceVisibility:`hidden`,transitionDuration:`${n}ms`,transitionTimingFunction:r};return typeof e==`string`?e in Qp?{transitionProperty:Qp[e].transitionProperty,...i,...Qp[e].common,...Qp[e][$p[t]]}:{}:{transitionProperty:e.transitionProperty,...i,...e.common,...e[$p[t]]}}var tm=c(m(),1);function nm({duration:e,exitDuration:t,timingFunction:n,mounted:r,onEnter:i,onExit:a,onEntered:o,onExited:s,enterDelay:c,exitDelay:l}){let u=xf(),d=Dd(),f=u.respectReducedMotion?d:!1,[p,m]=(0,_.useState)(f?0:e),[h,g]=(0,_.useState)(r?`entered`:`exited`),v=(0,_.useRef)(-1),y=(0,_.useRef)(-1),b=(0,_.useRef)(-1);function x(){window.clearTimeout(v.current),window.clearTimeout(y.current),cancelAnimationFrame(b.current)}let S=n=>{x();let r=n?i:a,c=n?o:s,l=f?0:n?e:t;m(l),l===0?(typeof r==`function`&&r(),typeof c==`function`&&c(),g(n?`entered`:`exited`)):b.current=requestAnimationFrame(()=>{tm.flushSync(()=>{g(n?`pre-entering`:`pre-exiting`)}),b.current=requestAnimationFrame(()=>{typeof r==`function`&&r(),g(n?`entering`:`exiting`),v.current=window.setTimeout(()=>{typeof c==`function`&&c(),g(n?`entered`:`exited`)},l)})})},C=e=>{if(x(),typeof(e?c:l)!=`number`){S(e);return}y.current=window.setTimeout(()=>{S(e)},e?c:l)};return Ed(()=>{C(r)},[r]),(0,_.useEffect)(()=>()=>{x()},[]),{transitionDuration:p,transitionStatus:h,transitionTimingFunction:n||`ease`}}function rm({keepMounted:e,transition:t=`fade`,duration:n=250,exitDuration:r=n,mounted:i,children:a,timingFunction:o=`ease`,onExit:s,onEntered:c,onEnter:l,onExited:u,enterDelay:d,exitDelay:f}){let p=Wd(),{transitionDuration:m,transitionStatus:h,transitionTimingFunction:g}=nm({mounted:i,exitDuration:r,duration:n,timingFunction:o,onExit:s,onEntered:c,onEnter:l,onExited:u,enterDelay:d,exitDelay:f});return m===0||p===`test`?i?(0,Q.jsx)(Q.Fragment,{children:a({})}):e?a({display:`none`}):null:h===`exited`?e?a({display:`none`}):null:(0,Q.jsx)(Q.Fragment,{children:a(em({transition:t,duration:m,state:h,timingFunction:g}))})}rm.displayName=`@mantine/core/Transition`;var im={root:`m_5ae2e3c`,barsLoader:`m_7a2bd4cd`,bar:`m_870bb79`,"bars-loader-animation":`m_5d2b3b9d`,dotsLoader:`m_4e3f22d7`,dot:`m_870c4af`,"loader-dots-animation":`m_aac34a1`,ovalLoader:`m_b34414df`,"oval-loader-animation":`m_f8e89c4b`},am=(0,_.forwardRef)(({className:e,...t},n)=>(0,Q.jsxs)(Vp,{component:`span`,className:Ad(im.barsLoader,e),...t,ref:n,children:[(0,Q.jsx)(`span`,{className:im.bar}),(0,Q.jsx)(`span`,{className:im.bar}),(0,Q.jsx)(`span`,{className:im.bar})]}));am.displayName=`@mantine/core/Bars`;var om=(0,_.forwardRef)(({className:e,...t},n)=>(0,Q.jsxs)(Vp,{component:`span`,className:Ad(im.dotsLoader,e),...t,ref:n,children:[(0,Q.jsx)(`span`,{className:im.dot}),(0,Q.jsx)(`span`,{className:im.dot}),(0,Q.jsx)(`span`,{className:im.dot})]}));om.displayName=`@mantine/core/Dots`;var sm=(0,_.forwardRef)(({className:e,...t},n)=>(0,Q.jsx)(Vp,{component:`span`,className:Ad(im.ovalLoader,e),...t,ref:n}));sm.displayName=`@mantine/core/Oval`;var cm={bars:am,oval:sm,dots:om},lm={loaders:cm,type:`oval`},um=Od((e,{size:t,color:n})=>({root:{"--loader-size":_d(t,`loader-size`),"--loader-color":n?rf(n,e):void 0}})),dm=Up((e,t)=>{let n=ap(`Loader`,lm,e),{size:r,color:i,type:a,vars:o,className:s,style:c,classNames:l,styles:u,unstyled:d,loaders:f,variant:p,children:m,attributes:h,...g}=n,_=ip({name:`Loader`,props:n,classes:im,className:s,style:c,classNames:l,styles:u,unstyled:d,attributes:h,vars:o,varsResolver:um});return m?(0,Q.jsx)(Vp,{..._(`root`),ref:t,...g,children:m}):(0,Q.jsx)(Vp,{..._(`root`),ref:t,component:f[a],variant:p,size:r,...g})});dm.defaultLoaders=cm,dm.classes=im,dm.displayName=`@mantine/core/Loader`;function fm(e){return _.Children.toArray(e).filter(Boolean)}var pm={root:`m_4081bf90`},mm={preventGrowOverflow:!0,gap:`md`,align:`center`,justify:`flex-start`,wrap:`wrap`},hm=Od((e,{grow:t,preventGrowOverflow:n,gap:r,align:i,justify:a,wrap:o},{childWidth:s})=>({root:{"--group-child-width":t&&n?s:void 0,"--group-gap":vd(r),"--group-align":i,"--group-justify":a,"--group-wrap":o}})),gm=Up((e,t)=>{let n=ap(`Group`,mm,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,children:c,gap:l,align:u,justify:d,wrap:f,grow:p,preventGrowOverflow:m,vars:h,variant:g,__size:_,mod:v,attributes:y,...b}=n,x=fm(c),S=x.length,C=vd(l??`md`);return(0,Q.jsx)(Vp,{...ip({name:`Group`,props:n,stylesCtx:{childWidth:`calc(${100/S}% - (${C} - ${C} / ${S}))`},className:i,style:a,classes:pm,classNames:r,styles:o,unstyled:s,attributes:y,vars:h,varsResolver:hm})(`root`),ref:t,variant:g,mod:[{grow:p},v],size:_,...b,children:x})});gm.classes=pm,gm.displayName=`@mantine/core/Group`;var _m={root:`m_b6d8b162`};function vm(e){if(e===`start`)return`start`;if(e===`end`||e)return`end`}var ym={inherit:!1},bm=Od((e,{variant:t,lineClamp:n,gradient:r,size:i,color:a})=>({root:{"--text-fz":yd(i),"--text-lh":bd(i),"--text-gradient":t===`gradient`?af(r,e):void 0,"--text-line-clamp":typeof n==`number`?n.toString():void 0,"--text-color":a?rf(a,e):void 0}})),xm=Wp((e,t)=>{let n=ap(`Text`,ym,e),{lineClamp:r,truncate:i,inline:a,inherit:o,gradient:s,span:c,__staticSelector:l,vars:u,className:d,style:f,classNames:p,styles:m,unstyled:h,variant:g,mod:_,size:v,attributes:y,...b}=n;return(0,Q.jsx)(Vp,{...ip({name:[`Text`,l],props:n,classes:_m,className:d,style:f,classNames:p,styles:m,unstyled:h,attributes:y,vars:u,varsResolver:bm})(`root`,{focusable:!0}),ref:t,component:c?`span`:`p`,variant:g,mod:[{"data-truncate":vm(i),"data-line-clamp":typeof r==`number`,"data-inline":a,"data-inherit":o},_],size:v,...b})});xm.classes=_m,xm.displayName=`@mantine/core/Text`;var Sm={root:`m_849cf0da`},Cm={underline:`hover`},wm=Wp((e,t)=>{let{underline:n,className:r,unstyled:i,mod:a,...o}=ap(`Anchor`,Cm,e);return(0,Q.jsx)(xm,{component:`a`,ref:t,className:Ad({[Sm.root]:!i},r),...o,mod:[{underline:n},a],__staticSelector:`Anchor`,unstyled:i})});wm.classes=Sm,wm.displayName=`@mantine/core/Anchor`;var Tm={root:`m_77c9d27d`,inner:`m_80f1301b`,label:`m_811560b9`,section:`m_a74036a`,loader:`m_a25b86ee`,group:`m_80d6d844`,groupSection:`m_70be2a01`},Em={orientation:`horizontal`},Dm=Od((e,{borderWidth:t})=>({group:{"--button-border-width":Z(t)}})),Om=Up((e,t)=>{let n=ap(`ButtonGroup`,Em,e),{className:r,style:i,classNames:a,styles:o,unstyled:s,orientation:c,vars:l,borderWidth:u,variant:d,mod:f,attributes:p,...m}=ap(`ButtonGroup`,Em,e);return(0,Q.jsx)(Vp,{...ip({name:`ButtonGroup`,props:n,classes:Tm,className:r,style:i,classNames:a,styles:o,unstyled:s,attributes:p,vars:l,varsResolver:Dm,rootSelector:`group`})(`group`),ref:t,variant:d,mod:[{"data-orientation":c},f],role:`group`,...m})});Om.classes=Tm,Om.displayName=`@mantine/core/ButtonGroup`;var km=Od((e,{radius:t,color:n,gradient:r,variant:i,autoContrast:a,size:o})=>{let s=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:i||`filled`,autoContrast:a});return{groupSection:{"--section-height":_d(o,`section-height`),"--section-padding-x":_d(o,`section-padding-x`),"--section-fz":o?.includes(`compact`)?yd(o.replace(`compact-`,``)):yd(o),"--section-radius":t===void 0?void 0:$(t),"--section-bg":n||i?s.background:void 0,"--section-color":s.color,"--section-bd":n||i?s.border:void 0}}}),Am=Up((e,t)=>{let n=ap(`ButtonGroupSection`,null,e),{className:r,style:i,classNames:a,styles:o,unstyled:s,vars:c,variant:l,gradient:u,radius:d,autoContrast:f,attributes:p,...m}=n;return(0,Q.jsx)(Vp,{...ip({name:`ButtonGroupSection`,props:n,classes:Tm,className:r,style:i,classNames:a,styles:o,unstyled:s,attributes:p,vars:c,varsResolver:km,rootSelector:`groupSection`})(`groupSection`),ref:t,variant:l,...m})});Am.classes=Tm,Am.displayName=`@mantine/core/ButtonGroupSection`;var jm={in:{opacity:1,transform:`translate(-50%, calc(-50% + ${Z(1)}))`},out:{opacity:0,transform:`translate(-50%, -200%)`},common:{transformOrigin:`center`},transitionProperty:`transform, opacity`},Mm=Od((e,{radius:t,color:n,gradient:r,variant:i,size:a,justify:o,autoContrast:s})=>{let c=e.variantColorResolver({color:n||e.primaryColor,theme:e,gradient:r,variant:i||`filled`,autoContrast:s});return{root:{"--button-justify":o,"--button-height":_d(a,`button-height`),"--button-padding-x":_d(a,`button-padding-x`),"--button-fz":a?.includes(`compact`)?yd(a.replace(`compact-`,``)):yd(a),"--button-radius":t===void 0?void 0:$(t),"--button-bg":n||i?c.background:void 0,"--button-hover":n||i?c.hover:void 0,"--button-color":c.color,"--button-bd":n||i?c.border:void 0,"--button-hover-color":n||i?c.hoverColor:void 0}}}),Nm=Wp((e,t)=>{let n=ap(`Button`,null,e),{style:r,vars:i,className:a,color:o,disabled:s,children:c,leftSection:l,rightSection:u,fullWidth:d,variant:f,radius:p,loading:m,loaderProps:h,gradient:g,classNames:_,styles:v,unstyled:y,"data-disabled":b,autoContrast:x,mod:S,attributes:C,...w}=n,T=ip({name:`Button`,props:n,classes:Tm,className:a,style:r,classNames:_,styles:v,unstyled:y,attributes:C,vars:i,varsResolver:Mm}),ee=!!l,te=!!u;return(0,Q.jsxs)(qp,{ref:t,...T(`root`,{active:!s&&!m&&!b}),unstyled:y,variant:f,disabled:s||m,mod:[{disabled:s||b,loading:m,block:d,"with-left-section":ee,"with-right-section":te},S],...w,children:[typeof m==`boolean`&&(0,Q.jsx)(rm,{mounted:m,transition:jm,duration:150,children:e=>(0,Q.jsx)(Vp,{component:`span`,...T(`loader`,{style:e}),"aria-hidden":!0,children:(0,Q.jsx)(dm,{color:`var(--button-color)`,size:`calc(var(--button-height) / 1.8)`,...h})})}),(0,Q.jsxs)(`span`,{...T(`inner`),children:[l&&(0,Q.jsx)(Vp,{component:`span`,...T(`section`),mod:{position:`left`},children:l}),(0,Q.jsx)(Vp,{component:`span`,mod:{loading:m},...T(`label`),children:c}),u&&(0,Q.jsx)(Vp,{component:`span`,...T(`section`),mod:{position:`right`},children:u})]})]})});Nm.classes=Tm,Nm.displayName=`@mantine/core/Button`,Nm.Group=Om,Nm.GroupSection=Am;var Pm={root:`m_7485cace`},Fm=Od((e,{size:t,fluid:n})=>({root:{"--container-size":n?void 0:_d(t,`container-size`)}})),Im=Up((e,t)=>{let n=ap(`Container`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,fluid:l,mod:u,attributes:d,strategy:f,...p}=n,m=ip({name:`Container`,classes:Pm,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:d,vars:c,varsResolver:Fm});return(0,Q.jsx)(Vp,{ref:t,mod:[{fluid:l,strategy:f||`block`},u],...m(`root`),...p})});Im.classes=Pm,Im.displayName=`@mantine/core/Container`;var Lm={root:`m_3eebeb36`,label:`m_9e365f20`},Rm={orientation:`horizontal`},zm=Od((e,{color:t,variant:n,size:r})=>({root:{"--divider-color":t?rf(t,e):void 0,"--divider-border-style":n,"--divider-size":_d(r,`divider-size`)}})),Bm=Up((e,t)=>{let n=ap(`Divider`,Rm,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,color:l,orientation:u,label:d,labelPosition:f,mod:p,attributes:m,...h}=n,g=ip({name:`Divider`,classes:Lm,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:m,vars:c,varsResolver:zm});return(0,Q.jsx)(Vp,{ref:t,mod:[{orientation:u,"with-label":!!d},p],...g(`root`),...h,role:`separator`,children:d&&(0,Q.jsx)(Vp,{component:`span`,mod:{position:f},...g(`label`),children:d})})});Bm.classes=Lm,Bm.displayName=`@mantine/core/Divider`;function Vm({color:e,theme:t,defaultShade:n}){let r=nf({color:e,theme:t});return r.isThemeColor?r.shade===void 0?`var(--mantine-color-${r.color}-${n})`:`var(${r.variable})`:e}var Hm={root:`m_bcb3f3c2`},Um={color:`yellow`},Wm=Od((e,{color:t})=>({root:{"--mark-bg-dark":Vm({color:t,theme:e,defaultShade:5}),"--mark-bg-light":Vm({color:t,theme:e,defaultShade:2})}})),Gm=Up((e,t)=>{let n=ap(`Mark`,Um,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,color:l,variant:u,attributes:d,...f}=n;return(0,Q.jsx)(Vp,{component:`mark`,ref:t,variant:u,...ip({name:`Mark`,props:n,className:i,style:a,classes:Hm,classNames:r,styles:o,unstyled:s,attributes:d,vars:c,varsResolver:Wm})(`root`),...f})});Gm.classes=Hm,Gm.displayName=`@mantine/core/Mark`;function Km(e){return e.replace(/[-[\]{}()*+?.,\\^$|#]/g,`\\$&`)}function qm(e,t){if(t==null)return[{chunk:e,highlighted:!1}];let n=Array.isArray(t)?t.map(Km):Km(t);if(!(Array.isArray(n)?n.filter(e=>e.trim().length>0).length>0:n.trim()!==``))return[{chunk:e,highlighted:!1}];let r=typeof n==`string`?n.trim():n.filter(e=>e.trim().length!==0).map(e=>e.trim()).sort((e,t)=>t.length-e.length).join(`|`),i=RegExp(`(${r})`,`gi`);return e.split(i).map(e=>({chunk:e,highlighted:i.test(e)})).filter(({chunk:e})=>e)}var Jm=Wp((e,t)=>{let{unstyled:n,children:r,highlight:i,highlightStyles:a,color:o,...s}=ap(`Highlight`,null,e),c=qm(r,i);return(0,Q.jsx)(xm,{unstyled:n,ref:t,...s,__staticSelector:`Highlight`,children:c.map(({chunk:e,highlighted:t},r)=>t?(0,Q.jsx)(Gm,{unstyled:n,color:o,style:a,"data-highlight":e,children:e},r):(0,Q.jsx)(`span`,{children:e},r))})});Jm.classes=xm.classes,Jm.displayName=`@mantine/core/Highlight`;var[Ym,Xm]=gd(`List component was not found in tree`),Zm={root:`m_abbac491`,item:`m_abb6bec2`,itemWrapper:`m_75cd9f71`,itemIcon:`m_60f83e5b`},Qm=Up((e,t)=>{let{classNames:n,className:r,style:i,styles:a,vars:o,icon:s,children:c,mod:l,...u}=ap(`ListItem`,null,e),d=Xm(),f=s||d.icon,p={classNames:n,styles:a};return(0,Q.jsx)(Vp,{...d.getStyles(`item`,{...p,className:r,style:i}),component:`li`,mod:[{"with-icon":!!f,centered:d.center},l],ref:t,...u,children:(0,Q.jsxs)(`div`,{...d.getStyles(`itemWrapper`,p),children:[f&&(0,Q.jsx)(`span`,{...d.getStyles(`itemIcon`,p),children:f}),(0,Q.jsx)(`span`,{...d.getStyles(`itemLabel`,p),children:c})]})})});Qm.classes=Zm,Qm.displayName=`@mantine/core/ListItem`;var $m={type:`unordered`},eh=Od((e,{size:t,spacing:n})=>({root:{"--list-fz":yd(t),"--list-lh":bd(t),"--list-spacing":vd(n)}})),th=Up((e,t)=>{let n=ap(`List`,$m,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,children:l,type:u,withPadding:d,icon:f,spacing:p,center:m,listStyleType:h,mod:g,attributes:_,...v}=n,y=ip({name:`List`,classes:Zm,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:_,vars:c,varsResolver:eh});return(0,Q.jsx)(Ym,{value:{center:m,icon:f,getStyles:y},children:(0,Q.jsx)(Vp,{...y(`root`,{style:{listStyleType:h}}),component:u===`unordered`?`ul`:`ol`,mod:[{"with-padding":d,type:f?`none`:h},g],ref:t,...v,children:l})})});th.classes=Zm,th.displayName=`@mantine/core/List`,th.Item=Qm;var nh={root:`m_6d731127`},rh={gap:`md`,align:`stretch`,justify:`flex-start`},ih=Od((e,{gap:t,align:n,justify:r})=>({root:{"--stack-gap":vd(t),"--stack-align":n,"--stack-justify":r}})),ah=Up((e,t)=>{let n=ap(`Stack`,rh,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,vars:c,align:l,justify:u,gap:d,variant:f,attributes:p,...m}=n;return(0,Q.jsx)(Vp,{ref:t,...ip({name:`Stack`,props:n,classes:nh,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:p,vars:c,varsResolver:ih})(`root`),variant:f,...m})});ah.classes=nh,ah.displayName=`@mantine/core/Stack`;var oh=[`h1`,`h2`,`h3`,`h4`,`h5`,`h6`],sh=[`xs`,`sm`,`md`,`lg`,`xl`];function ch(e,t){let n=t===void 0?`h${e}`:t;return oh.includes(n)?{fontSize:`var(--mantine-${n}-font-size)`,fontWeight:`var(--mantine-${n}-font-weight)`,lineHeight:`var(--mantine-${n}-line-height)`}:sh.includes(n)?{fontSize:`var(--mantine-font-size-${n})`,fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}:{fontSize:Z(n),fontWeight:`var(--mantine-h${e}-font-weight)`,lineHeight:`var(--mantine-h${e}-line-height)`}}var lh={root:`m_8a5d1357`},uh={order:1},dh=Od((e,{order:t,size:n,lineClamp:r,textWrap:i})=>{let a=ch(t||1,n);return{root:{"--title-fw":a.fontWeight,"--title-lh":a.lineHeight,"--title-fz":a.fontSize,"--title-line-clamp":typeof r==`number`?r.toString():void 0,"--title-text-wrap":i}}}),fh=Up((e,t)=>{let n=ap(`Title`,uh,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,order:c,vars:l,size:u,variant:d,lineClamp:f,textWrap:p,mod:m,attributes:h,...g}=n,_=ip({name:`Title`,props:n,classes:lh,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:h,vars:l,varsResolver:dh});return[1,2,3,4,5,6].includes(c)?(0,Q.jsx)(Vp,{..._(`root`),component:`h${c}`,variant:d,ref:t,mod:[{order:c,"data-line-clamp":typeof f==`number`},m],size:u,...g}):null});fh.classes=lh,fh.displayName=`@mantine/core/Title`;var ph={root:`m_d08caa0`},mh=Up((e,t)=>{let n=ap(`Typography`,null,e),{classNames:r,className:i,style:a,styles:o,unstyled:s,attributes:c,...l}=n;return(0,Q.jsx)(Vp,{ref:t,...ip({name:`Typography`,classes:ph,props:n,className:i,style:a,classNames:r,styles:o,unstyled:s,attributes:c})(`root`),...l})});mh.classes=ph,mh.displayName=`@mantine/core/Typography`;var hh=`modulepreload`,gh=function(e){return`/context-vs-redux/`+e},_h={};const vh=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=gh(t,n),t in _h)return;_h[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:hh,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})};var yh=`popstate`;function bh(e){return typeof e==`object`&&!!e&&`pathname`in e&&`search`in e&&`hash`in e&&`state`in e&&`key`in e}function xh(e={}){function t(e,t){let{pathname:n=`/`,search:r=``,hash:i=``}=Oh(e.location.hash.substring(1));return!n.startsWith(`/`)&&!n.startsWith(`.`)&&(n=`/`+n),Eh(``,{pathname:n,search:r,hash:i},t.state&&t.state.usr||null,t.state&&t.state.key||`default`)}function n(e,t){let n=e.document.querySelector(`base`),r=``;if(n&&n.getAttribute(`href`)){let t=e.location.href,n=t.indexOf(`#`);r=n===-1?t:t.slice(0,n)}return r+`#`+(typeof t==`string`?t:Dh(t))}function r(e,t){Ch(e.pathname.charAt(0)===`/`,`relative pathnames are not supported in hash history.push(${JSON.stringify(t)})`)}return kh(t,n,r,e)}function Sh(e,t){if(e===!1||e==null)throw Error(t)}function Ch(e,t){if(!e){typeof console<`u`&&console.warn(t);try{throw Error(t)}catch{}}}function wh(){return Math.random().toString(36).substring(2,10)}function Th(e,t){return{usr:e.state,key:e.key,idx:t,masked:e.unstable_mask?{pathname:e.pathname,search:e.search,hash:e.hash}:void 0}}function Eh(e,t,n=null,r,i){return{pathname:typeof e==`string`?e:e.pathname,search:``,hash:``,...typeof t==`string`?Oh(t):t,state:n,key:t&&t.key||r||wh(),unstable_mask:i}}function Dh({pathname:e=`/`,search:t=``,hash:n=``}){return t&&t!==`?`&&(e+=t.charAt(0)===`?`?t:`?`+t),n&&n!==`#`&&(e+=n.charAt(0)===`#`?n:`#`+n),e}function Oh(e){let t={};if(e){let n=e.indexOf(`#`);n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let r=e.indexOf(`?`);r>=0&&(t.search=e.substring(r),e=e.substring(0,r)),e&&(t.pathname=e)}return t}function kh(e,t,n,r={}){let{window:i=document.defaultView,v5Compat:a=!1}=r,o=i.history,s=`POP`,c=null,l=u();l??(l=0,o.replaceState({...o.state,idx:l},``));function u(){return(o.state||{idx:null}).idx}function d(){s=`POP`;let e=u(),t=e==null?null:e-l;l=e,c&&c({action:s,location:h.location,delta:t})}function f(e,t){s=`PUSH`;let r=bh(e)?e:Eh(h.location,e,t);n&&n(r,e),l=u()+1;let d=Th(r,l),f=h.createHref(r.unstable_mask||r);try{o.pushState(d,``,f)}catch(e){if(e instanceof DOMException&&e.name===`DataCloneError`)throw e;i.location.assign(f)}a&&c&&c({action:s,location:h.location,delta:1})}function p(e,t){s=`REPLACE`;let r=bh(e)?e:Eh(h.location,e,t);n&&n(r,e),l=u();let i=Th(r,l),d=h.createHref(r.unstable_mask||r);o.replaceState(i,``,d),a&&c&&c({action:s,location:h.location,delta:0})}function m(e){return Ah(e)}let h={get action(){return s},get location(){return e(i,o)},listen(e){if(c)throw Error(`A history only accepts one active listener`);return i.addEventListener(yh,d),c=e,()=>{i.removeEventListener(yh,d),c=null}},createHref(e){return t(i,e)},createURL:m,encodeLocation(e){let t=m(e);return{pathname:t.pathname,search:t.search,hash:t.hash}},push:f,replace:p,go(e){return o.go(e)}};return h}function Ah(e,t=!1){let n=`http://localhost`;typeof window<`u`&&(n=window.location.origin===`null`?window.location.href:window.location.origin),Sh(n,`No window.location.(origin|href) available to create URL`);let r=typeof e==`string`?e:Dh(e);return r=r.replace(/ $/,`%20`),!t&&r.startsWith(`//`)&&(r=n+r),new URL(r,n)}function jh(e,t,n=`/`){return Mh(e,t,n,!1)}function Mh(e,t,n,r){let i=Xh((typeof t==`string`?Oh(t):t).pathname||`/`,n);if(i==null)return null;let a=Ph(e);Ih(a);let o=null;for(let e=0;o==null&&e<a.length;++e){let t=Yh(i);o=Kh(a[e],t,r)}return o}function Nh(e,t){let{route:n,pathname:r,params:i}=e;return{id:n.id,pathname:r,params:i,data:t[n.id],loaderData:t[n.id],handle:n.handle}}function Ph(e,t=[],n=[],r=``,i=!1){let a=(e,a,o=i,s)=>{let c={relativePath:s===void 0?e.path||``:s,caseSensitive:e.caseSensitive===!0,childrenIndex:a,route:e};if(c.relativePath.startsWith(`/`)){if(!c.relativePath.startsWith(r)&&o)return;Sh(c.relativePath.startsWith(r),`Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(r.length)}let l=ig([r,c.relativePath]),u=n.concat(c);e.children&&e.children.length>0&&(Sh(e.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${l}".`),Ph(e.children,t,u,l,o)),!(e.path==null&&!e.index)&&t.push({path:l,score:Wh(l,e.index),routesMeta:u})};return e.forEach((e,t)=>{if(e.path===``||!e.path?.includes(`?`))a(e,t);else for(let n of Fh(e.path))a(e,t,!0,n)}),t}function Fh(e){let t=e.split(`/`);if(t.length===0)return[];let[n,...r]=t,i=n.endsWith(`?`),a=n.replace(/\?$/,``);if(r.length===0)return i?[a,``]:[a];let o=Fh(r.join(`/`)),s=[];return s.push(...o.map(e=>e===``?a:[a,e].join(`/`))),i&&s.push(...o),s.map(t=>e.startsWith(`/`)&&t===``?`/`:t)}function Ih(e){e.sort((e,t)=>e.score===t.score?Gh(e.routesMeta.map(e=>e.childrenIndex),t.routesMeta.map(e=>e.childrenIndex)):t.score-e.score)}var Lh=/^:[\w-]+$/,Rh=3,zh=2,Bh=1,Vh=10,Hh=-2,Uh=e=>e===`*`;function Wh(e,t){let n=e.split(`/`),r=n.length;return n.some(Uh)&&(r+=Hh),t&&(r+=zh),n.filter(e=>!Uh(e)).reduce((e,t)=>e+(Lh.test(t)?Rh:t===``?Bh:Vh),r)}function Gh(e,t){return e.length===t.length&&e.slice(0,-1).every((e,n)=>e===t[n])?e[e.length-1]-t[t.length-1]:0}function Kh(e,t,n=!1){let{routesMeta:r}=e,i={},a=`/`,o=[];for(let e=0;e<r.length;++e){let s=r[e],c=e===r.length-1,l=a===`/`?t:t.slice(a.length)||`/`,u=qh({path:s.relativePath,caseSensitive:s.caseSensitive,end:c},l),d=s.route;if(!u&&c&&n&&!r[r.length-1].route.index&&(u=qh({path:s.relativePath,caseSensitive:s.caseSensitive,end:!1},l)),!u)return null;Object.assign(i,u.params),o.push({params:i,pathname:ig([a,u.pathname]),pathnameBase:ag(ig([a,u.pathnameBase])),route:d}),u.pathnameBase!==`/`&&(a=ig([a,u.pathnameBase]))}return o}function qh(e,t){typeof e==`string`&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=Jh(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let a=i[0],o=a.replace(/(.)\/+$/,`$1`),s=i.slice(1);return{params:r.reduce((e,{paramName:t,isOptional:n},r)=>{if(t===`*`){let e=s[r]||``;o=a.slice(0,a.length-e.length).replace(/(.)\/+$/,`$1`)}let i=s[r];return n&&!i?e[t]=void 0:e[t]=(i||``).replace(/%2F/g,`/`),e},{}),pathname:a,pathnameBase:o,pattern:e}}function Jh(e,t=!1,n=!0){Ch(e===`*`||!e.endsWith(`*`)||e.endsWith(`/*`),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,`/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,`/*`)}".`);let r=[],i=`^`+e.replace(/\/*\*?$/,``).replace(/^\/*/,`/`).replace(/[\\.*+^${}|()[\]]/g,`\\$&`).replace(/\/:([\w-]+)(\?)?/g,(e,t,n,i,a)=>{if(r.push({paramName:t,isOptional:n!=null}),n){let t=a.charAt(i+e.length);return t&&t!==`/`?`/([^\\/]*)`:`(?:/([^\\/]*))?`}return`/([^\\/]+)`}).replace(/\/([\w-]+)\?(\/|$)/g,`(/$1)?$2`);return e.endsWith(`*`)?(r.push({paramName:`*`}),i+=e===`*`||e===`/*`?`(.*)$`:`(?:\\/(.+)|\\/*)$`):n?i+=`\\/*$`:e!==``&&e!==`/`&&(i+=`(?:(?=\\/|$))`),[new RegExp(i,t?void 0:`i`),r]}function Yh(e){try{return e.split(`/`).map(e=>decodeURIComponent(e).replace(/\//g,`%2F`)).join(`/`)}catch(t){return Ch(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function Xh(e,t){if(t===`/`)return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith(`/`)?t.length-1:t.length,r=e.charAt(n);return r&&r!==`/`?null:e.slice(n)||`/`}var Zh=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i;function Qh(e,t=`/`){let{pathname:n,search:r=``,hash:i=``}=typeof e==`string`?Oh(e):e,a;return n?(n=n.replace(/\/\/+/g,`/`),a=n.startsWith(`/`)?$h(n.substring(1),`/`):$h(n,t)):a=t,{pathname:a,search:og(r),hash:sg(i)}}function $h(e,t){let n=t.replace(/\/+$/,``).split(`/`);return e.split(`/`).forEach(e=>{e===`..`?n.length>1&&n.pop():e!==`.`&&n.push(e)}),n.length>1?n.join(`/`):`/`}function eg(e,t,n,r){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function tg(e){return e.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function ng(e){let t=tg(e);return t.map((e,n)=>n===t.length-1?e.pathname:e.pathnameBase)}function rg(e,t,n,r=!1){let i;typeof e==`string`?i=Oh(e):(i={...e},Sh(!i.pathname||!i.pathname.includes(`?`),eg(`?`,`pathname`,`search`,i)),Sh(!i.pathname||!i.pathname.includes(`#`),eg(`#`,`pathname`,`hash`,i)),Sh(!i.search||!i.search.includes(`#`),eg(`#`,`search`,`hash`,i)));let a=e===``||i.pathname===``,o=a?`/`:i.pathname,s;if(o==null)s=n;else{let e=t.length-1;if(!r&&o.startsWith(`..`)){let t=o.split(`/`);for(;t[0]===`..`;)t.shift(),--e;i.pathname=t.join(`/`)}s=e>=0?t[e]:`/`}let c=Qh(i,s),l=o&&o!==`/`&&o.endsWith(`/`),u=(a||o===`.`)&&n.endsWith(`/`);return!c.pathname.endsWith(`/`)&&(l||u)&&(c.pathname+=`/`),c}var ig=e=>e.join(`/`).replace(/\/\/+/g,`/`),ag=e=>e.replace(/\/+$/,``).replace(/^\/*/,`/`),og=e=>!e||e===`?`?``:e.startsWith(`?`)?e:`?`+e,sg=e=>!e||e===`#`?``:e.startsWith(`#`)?e:`#`+e,cg=class{constructor(e,t,n,r=!1){this.status=e,this.statusText=t||``,this.internal=r,n instanceof Error?(this.data=n.toString(),this.error=n):this.data=n}};function lg(e){return e!=null&&typeof e.status==`number`&&typeof e.statusText==`string`&&typeof e.internal==`boolean`&&`data`in e}function ug(e){return e.map(e=>e.route.path).filter(Boolean).join(`/`).replace(/\/\/*/g,`/`)||`/`}var dg=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;function fg(e,t){let n=e;if(typeof n!=`string`||!Zh.test(n))return{absoluteURL:void 0,isExternal:!1,to:n};let r=n,i=!1;if(dg)try{let e=new URL(window.location.href),r=n.startsWith(`//`)?new URL(e.protocol+n):new URL(n),a=Xh(r.pathname,t);r.origin===e.origin&&a!=null?n=a+r.search+r.hash:i=!0}catch{Ch(!1,`<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}return{absoluteURL:r,isExternal:i,to:n}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var pg=_.createContext(null);pg.displayName=`DataRouter`;var mg=_.createContext(null);mg.displayName=`DataRouterState`;var hg=_.createContext(!1),gg=_.createContext({isTransitioning:!1});gg.displayName=`ViewTransition`;var _g=_.createContext(new Map);_g.displayName=`Fetchers`;var vg=_.createContext(null);vg.displayName=`Await`;var yg=_.createContext(null);yg.displayName=`Navigation`;var bg=_.createContext(null);bg.displayName=`Location`;var xg=_.createContext({outlet:null,matches:[],isDataRoute:!1});xg.displayName=`Route`;var Sg=_.createContext(null);Sg.displayName=`RouteError`;var Cg=`REACT_ROUTER_ERROR`,wg=`REDIRECT`,Tg=`ROUTE_ERROR_RESPONSE`;function Eg(e){if(e.startsWith(`${Cg}:${wg}:{`))try{let t=JSON.parse(e.slice(28));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`&&typeof t.location==`string`&&typeof t.reloadDocument==`boolean`&&typeof t.replace==`boolean`)return t}catch{}}function Dg(e){if(e.startsWith(`${Cg}:${Tg}:{`))try{let t=JSON.parse(e.slice(40));if(typeof t==`object`&&t&&typeof t.status==`number`&&typeof t.statusText==`string`)return new cg(t.status,t.statusText,t.data)}catch{}}function Og(e,{relative:t}={}){Sh(kg(),`useHref() may be used only in the context of a <Router> component.`);let{basename:n,navigator:r}=_.useContext(yg),{hash:i,pathname:a,search:o}=Fg(e,{relative:t}),s=a;return n!==`/`&&(s=a===`/`?n:ig([n,a])),r.createHref({pathname:s,search:o,hash:i})}function kg(){return _.useContext(bg)!=null}function Ag(){return Sh(kg(),`useLocation() may be used only in the context of a <Router> component.`),_.useContext(bg).location}var jg=`You should call navigate() in a React.useEffect(), not when your component is first rendered.`;function Mg(e){_.useContext(yg).static||_.useLayoutEffect(e)}function Ng(){let{isDataRoute:e}=_.useContext(xg);return e?e_():Pg()}function Pg(){Sh(kg(),`useNavigate() may be used only in the context of a <Router> component.`);let e=_.useContext(pg),{basename:t,navigator:n}=_.useContext(yg),{matches:r}=_.useContext(xg),{pathname:i}=Ag(),a=JSON.stringify(ng(r)),o=_.useRef(!1);return Mg(()=>{o.current=!0}),_.useCallback((r,s={})=>{if(Ch(o.current,jg),!o.current)return;if(typeof r==`number`){n.go(r);return}let c=rg(r,JSON.parse(a),i,s.relative===`path`);e==null&&t!==`/`&&(c.pathname=c.pathname===`/`?t:ig([t,c.pathname])),(s.replace?n.replace:n.push)(c,s.state,s)},[t,n,a,i,e])}_.createContext(null);function Fg(e,{relative:t}={}){let{matches:n}=_.useContext(xg),{pathname:r}=Ag(),i=JSON.stringify(ng(n));return _.useMemo(()=>rg(e,JSON.parse(i),r,t===`path`),[e,i,r,t])}function Ig(e,t){return Lg(e,t)}function Lg(e,t,n){Sh(kg(),`useRoutes() may be used only in the context of a <Router> component.`);let{navigator:r}=_.useContext(yg),{matches:i}=_.useContext(xg),a=i[i.length-1],o=a?a.params:{},s=a?a.pathname:`/`,c=a?a.pathnameBase:`/`,l=a&&a.route;{let e=l&&l.path||``;n_(s,!l||e.endsWith(`*`)||e.endsWith(`*?`),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e===`/`?`*`:`${e}/*`}">.`)}let u=Ag(),d;if(t){let e=typeof t==`string`?Oh(t):t;Sh(c===`/`||e.pathname?.startsWith(c),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`),d=e}else d=u;let f=d.pathname||`/`,p=f;if(c!==`/`){let e=c.replace(/^\//,``).split(`/`);p=`/`+f.replace(/^\//,``).split(`/`).slice(e.length).join(`/`)}let m=jh(e,{pathname:p});Ch(l||m!=null,`No routes matched location "${d.pathname}${d.search}${d.hash}" `),Ch(m==null||m[m.length-1].route.element!==void 0||m[m.length-1].route.Component!==void 0||m[m.length-1].route.lazy!==void 0,`Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let h=Wg(m&&m.map(e=>Object.assign({},e,{params:Object.assign({},o,e.params),pathname:ig([c,r.encodeLocation?r.encodeLocation(e.pathname.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathname]),pathnameBase:e.pathnameBase===`/`?c:ig([c,r.encodeLocation?r.encodeLocation(e.pathnameBase.replace(/\?/g,`%3F`).replace(/#/g,`%23`)).pathname:e.pathnameBase])})),i,n);return t&&h?_.createElement(bg.Provider,{value:{location:{pathname:`/`,search:``,hash:``,state:null,key:`default`,unstable_mask:void 0,...d},navigationType:`POP`}},h):h}function Rg(){let e=$g(),t=lg(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,r=`rgba(200,200,200, 0.5)`,i={padding:`0.5rem`,backgroundColor:r},a={padding:`2px 4px`,backgroundColor:r},o=null;return console.error(`Error handled by React Router default ErrorBoundary:`,e),o=_.createElement(_.Fragment,null,_.createElement(`p`,null,`💿 Hey developer 👋`),_.createElement(`p`,null,`You can provide a way better UX than this when your app throws errors by providing your own `,_.createElement(`code`,{style:a},`ErrorBoundary`),` or`,` `,_.createElement(`code`,{style:a},`errorElement`),` prop on your route.`)),_.createElement(_.Fragment,null,_.createElement(`h2`,null,`Unexpected Application Error!`),_.createElement(`h3`,{style:{fontStyle:`italic`}},t),n?_.createElement(`pre`,{style:i},n):null,o)}var zg=_.createElement(Rg,null),Bg=class extends _.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!==`idle`&&e.revalidation===`idle`?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error===void 0?t.error:e.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){this.props.onError?this.props.onError(e,t):console.error(`React Router caught the following error during render`,e)}render(){let e=this.state.error;if(this.context&&typeof e==`object`&&e&&`digest`in e&&typeof e.digest==`string`){let t=Dg(e.digest);t&&(e=t)}let t=e===void 0?this.props.children:_.createElement(xg.Provider,{value:this.props.routeContext},_.createElement(Sg.Provider,{value:e,children:this.props.component}));return this.context?_.createElement(Hg,{error:e},t):t}};Bg.contextType=hg;var Vg=new WeakMap;function Hg({children:e,error:t}){let{basename:n}=_.useContext(yg);if(typeof t==`object`&&t&&`digest`in t&&typeof t.digest==`string`){let e=Eg(t.digest);if(e){let r=Vg.get(t);if(r)throw r;let i=fg(e.location,n);if(dg&&!Vg.get(t))if(i.isExternal||e.reloadDocument)window.location.href=i.absoluteURL||i.to;else{let n=Promise.resolve().then(()=>window.__reactRouterDataRouter.navigate(i.to,{replace:e.replace}));throw Vg.set(t,n),n}return _.createElement(`meta`,{httpEquiv:`refresh`,content:`0;url=${i.absoluteURL||i.to}`})}}return e}function Ug({routeContext:e,match:t,children:n}){let r=_.useContext(pg);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),_.createElement(xg.Provider,{value:e},n)}function Wg(e,t=[],n){let r=n?.state;if(e==null){if(!r)return null;if(r.errors)e=r.matches;else if(t.length===0&&!r.initialized&&r.matches.length>0)e=r.matches;else return null}let i=e,a=r?.errors;if(a!=null){let e=i.findIndex(e=>e.route.id&&a?.[e.route.id]!==void 0);Sh(e>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`),i=i.slice(0,Math.min(i.length,e+1))}let o=!1,s=-1;if(n&&r){o=r.renderFallback;for(let e=0;e<i.length;e++){let t=i[e];if((t.route.HydrateFallback||t.route.hydrateFallbackElement)&&(s=e),t.route.id){let{loaderData:e,errors:a}=r,c=t.route.loader&&!e.hasOwnProperty(t.route.id)&&(!a||a[t.route.id]===void 0);if(t.route.lazy||c){n.isStatic&&(o=!0),i=s>=0?i.slice(0,s+1):[i[0]];break}}}}let c=n?.onError,l=r&&c?(e,t)=>{c(e,{location:r.location,params:r.matches?.[0]?.params??{},unstable_pattern:ug(r.matches),errorInfo:t})}:void 0;return i.reduceRight((e,n,c)=>{let u,d=!1,f=null,p=null;r&&(u=a&&n.route.id?a[n.route.id]:void 0,f=n.route.errorElement||zg,o&&(s<0&&c===0?(n_(`route-fallback`,!1,"No `HydrateFallback` element provided to render during initial hydration"),d=!0,p=null):s===c&&(d=!0,p=n.route.hydrateFallbackElement||null)));let m=t.concat(i.slice(0,c+1)),h=()=>{let t;return t=u?f:d?p:n.route.Component?_.createElement(n.route.Component,null):n.route.element?n.route.element:e,_.createElement(Ug,{match:n,routeContext:{outlet:e,matches:m,isDataRoute:r!=null},children:t})};return r&&(n.route.ErrorBoundary||n.route.errorElement||c===0)?_.createElement(Bg,{location:r.location,revalidation:r.revalidation,component:f,error:u,children:h(),routeContext:{outlet:null,matches:m,isDataRoute:!0},onError:l}):h()},null)}function Gg(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Kg(e){let t=_.useContext(pg);return Sh(t,Gg(e)),t}function qg(e){let t=_.useContext(mg);return Sh(t,Gg(e)),t}function Jg(e){let t=_.useContext(xg);return Sh(t,Gg(e)),t}function Yg(e){let t=Jg(e),n=t.matches[t.matches.length-1];return Sh(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function Xg(){return Yg(`useRouteId`)}function Zg(){return qg(`useNavigation`).navigation}function Qg(){let{matches:e,loaderData:t}=qg(`useMatches`);return _.useMemo(()=>e.map(e=>Nh(e,t)),[e,t])}function $g(){let e=_.useContext(Sg),t=qg(`useRouteError`),n=Yg(`useRouteError`);return e===void 0?t.errors?.[n]:e}function e_(){let{router:e}=Kg(`useNavigate`),t=Yg(`useNavigate`),n=_.useRef(!1);return Mg(()=>{n.current=!0}),_.useCallback(async(r,i={})=>{Ch(n.current,jg),n.current&&(typeof r==`number`?await e.navigate(r):await e.navigate(r,{fromRouteId:t,...i}))},[e,t])}var t_={};function n_(e,t,n){!t&&!t_[e]&&(t_[e]=!0,Ch(!1,n))}_.useOptimistic,_.memo(r_);function r_({routes:e,future:t,state:n,isStatic:r,onError:i}){return Lg(e,void 0,{state:n,isStatic:r,onError:i,future:t})}function i_(e){Sh(!1,`A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`)}function a_({basename:e=`/`,children:t=null,location:n,navigationType:r=`POP`,navigator:i,static:a=!1,unstable_useTransitions:o}){Sh(!kg(),`You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`);let s=e.replace(/^\/*/,`/`),c=_.useMemo(()=>({basename:s,navigator:i,static:a,unstable_useTransitions:o,future:{}}),[s,i,a,o]);typeof n==`string`&&(n=Oh(n));let{pathname:l=`/`,search:u=``,hash:d=``,state:f=null,key:p=`default`,unstable_mask:m}=n,h=_.useMemo(()=>{let e=Xh(l,s);return e==null?null:{location:{pathname:e,search:u,hash:d,state:f,key:p,unstable_mask:m},navigationType:r}},[s,l,u,d,f,p,r,m]);return Ch(h!=null,`<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`),h==null?null:_.createElement(yg.Provider,{value:c},_.createElement(bg.Provider,{children:t,value:h}))}function o_({children:e,location:t}){return Ig(s_(e),t)}function s_(e,t=[]){let n=[];return _.Children.forEach(e,(e,r)=>{if(!_.isValidElement(e))return;let i=[...t,r];if(e.type===_.Fragment){n.push.apply(n,s_(e.props.children,i));return}Sh(e.type===i_,`[${typeof e.type==`string`?e.type:e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),Sh(!e.props.index||!e.props.children,`An index route cannot have child routes.`);let a={id:e.props.id||i.join(`-`),caseSensitive:e.props.caseSensitive,element:e.props.element,Component:e.props.Component,index:e.props.index,path:e.props.path,middleware:e.props.middleware,loader:e.props.loader,action:e.props.action,hydrateFallbackElement:e.props.hydrateFallbackElement,HydrateFallback:e.props.HydrateFallback,errorElement:e.props.errorElement,ErrorBoundary:e.props.ErrorBoundary,hasErrorBoundary:e.props.hasErrorBoundary===!0||e.props.ErrorBoundary!=null||e.props.errorElement!=null,shouldRevalidate:e.props.shouldRevalidate,handle:e.props.handle,lazy:e.props.lazy};e.props.children&&(a.children=s_(e.props.children,i)),n.push(a)}),n}var c_=`get`,l_=`application/x-www-form-urlencoded`;function u_(e){return typeof HTMLElement<`u`&&e instanceof HTMLElement}function d_(e){return u_(e)&&e.tagName.toLowerCase()===`button`}function f_(e){return u_(e)&&e.tagName.toLowerCase()===`form`}function p_(e){return u_(e)&&e.tagName.toLowerCase()===`input`}function m_(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function h_(e,t){return e.button===0&&(!t||t===`_self`)&&!m_(e)}var g_=null;function __(){if(g_===null)try{new FormData(document.createElement(`form`),0),g_=!1}catch{g_=!0}return g_}var v_=new Set([`application/x-www-form-urlencoded`,`multipart/form-data`,`text/plain`]);function y_(e){return e!=null&&!v_.has(e)?(Ch(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${l_}"`),null):e}function b_(e,t){let n,r,i,a,o;if(f_(e)){let o=e.getAttribute(`action`);r=o?Xh(o,t):null,n=e.getAttribute(`method`)||c_,i=y_(e.getAttribute(`enctype`))||l_,a=new FormData(e)}else if(d_(e)||p_(e)&&(e.type===`submit`||e.type===`image`)){let o=e.form;if(o==null)throw Error(`Cannot submit a <button> or <input type="submit"> without a <form>`);let s=e.getAttribute(`formaction`)||o.getAttribute(`action`);if(r=s?Xh(s,t):null,n=e.getAttribute(`formmethod`)||o.getAttribute(`method`)||c_,i=y_(e.getAttribute(`formenctype`))||y_(o.getAttribute(`enctype`))||l_,a=new FormData(o,e),!__()){let{name:t,type:n,value:r}=e;if(n===`image`){let e=t?`${t}.`:``;a.append(`${e}x`,`0`),a.append(`${e}y`,`0`)}else t&&a.append(t,r)}}else if(u_(e))throw Error(`Cannot submit element that is not <form>, <button>, or <input type="submit|image">`);else n=c_,r=null,i=l_,o=e;return a&&i===`text/plain`&&(o=a,a=void 0),{action:r,method:n.toLowerCase(),encType:i,formData:a,body:o}}Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`);var x_={"&":`\\u0026`,">":`\\u003e`,"<":`\\u003c`,"\u2028":`\\u2028`,"\u2029":`\\u2029`},S_=/[&><\u2028\u2029]/g;function C_(e){return e.replace(S_,e=>x_[e])}function w_(e,t){if(e===!1||e==null)throw Error(t)}function T_(e,t,n,r){let i=typeof e==`string`?new URL(e,typeof window>`u`?`server://singlefetch/`:window.location.origin):e;return n?i.pathname.endsWith(`/`)?i.pathname=`${i.pathname}_.${r}`:i.pathname=`${i.pathname}.${r}`:i.pathname===`/`?i.pathname=`_root.${r}`:t&&Xh(i.pathname,t)===`/`?i.pathname=`${t.replace(/\/$/,``)}/_root.${r}`:i.pathname=`${i.pathname.replace(/\/$/,``)}.${r}`,i}async function E_(e,t){if(e.id in t)return t[e.id];try{let n=await vh(()=>import(e.module),[]);return t[e.id]=n,n}catch(t){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function D_(e){return e!=null&&typeof e.page==`string`}function O_(e){return e==null?!1:e.href==null?e.rel===`preload`&&typeof e.imageSrcSet==`string`&&typeof e.imageSizes==`string`:typeof e.rel==`string`&&typeof e.href==`string`}async function k_(e,t,n){return P_((await Promise.all(e.map(async e=>{let r=t.routes[e.route.id];if(r){let e=await E_(r,n);return e.links?e.links():[]}return[]}))).flat(1).filter(O_).filter(e=>e.rel===`stylesheet`||e.rel===`preload`).map(e=>e.rel===`stylesheet`?{...e,rel:`prefetch`,as:`style`}:{...e,rel:`prefetch`}))}function A_(e,t,n,r,i,a){let o=(e,t)=>n[t]?e.route.id!==n[t].route.id:!0,s=(e,t)=>n[t].pathname!==e.pathname||n[t].route.path?.endsWith(`*`)&&n[t].params[`*`]!==e.params[`*`];return a===`assets`?t.filter((e,t)=>o(e,t)||s(e,t)):a===`data`?t.filter((t,a)=>{let c=r.routes[t.route.id];if(!c||!c.hasLoader)return!1;if(o(t,a)||s(t,a))return!0;if(t.route.shouldRevalidate){let r=t.route.shouldRevalidate({currentUrl:new URL(i.pathname+i.search+i.hash,window.origin),currentParams:n[0]?.params||{},nextUrl:new URL(e,window.origin),nextParams:t.params,defaultShouldRevalidate:!0});if(typeof r==`boolean`)return r}return!0}):[]}function j_(e,t,{includeHydrateFallback:n}={}){return M_(e.map(e=>{let r=t.routes[e.route.id];if(!r)return[];let i=[r.module];return r.clientActionModule&&(i=i.concat(r.clientActionModule)),r.clientLoaderModule&&(i=i.concat(r.clientLoaderModule)),n&&r.hydrateFallbackModule&&(i=i.concat(r.hydrateFallbackModule)),r.imports&&(i=i.concat(r.imports)),i}).flat(1))}function M_(e){return[...new Set(e)]}function N_(e){let t={},n=Object.keys(e).sort();for(let r of n)t[r]=e[r];return t}function P_(e,t){let n=new Set,r=new Set(t);return e.reduce((e,i)=>{if(t&&!D_(i)&&i.as===`script`&&i.href&&r.has(i.href))return e;let a=JSON.stringify(N_(i));return n.has(a)||(n.add(a),e.push({key:a,link:i})),e},[])}function F_(){let e=_.useContext(pg);return w_(e,`You must render this element inside a <DataRouterContext.Provider> element`),e}function I_(){let e=_.useContext(mg);return w_(e,`You must render this element inside a <DataRouterStateContext.Provider> element`),e}var L_=_.createContext(void 0);L_.displayName=`FrameworkContext`;function R_(){let e=_.useContext(L_);return w_(e,`You must render this element inside a <HydratedRouter> element`),e}function z_(e,t){let n=_.useContext(L_),[r,i]=_.useState(!1),[a,o]=_.useState(!1),{onFocus:s,onBlur:c,onMouseEnter:l,onMouseLeave:u,onTouchStart:d}=t,f=_.useRef(null);_.useEffect(()=>{if(e===`render`&&o(!0),e===`viewport`){let e=new IntersectionObserver(e=>{e.forEach(e=>{o(e.isIntersecting)})},{threshold:.5});return f.current&&e.observe(f.current),()=>{e.disconnect()}}},[e]),_.useEffect(()=>{if(r){let e=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(e)}}},[r]);let p=()=>{i(!0)},m=()=>{i(!1),o(!1)};return n?e===`intent`?[a,f,{onFocus:B_(s,p),onBlur:B_(c,m),onMouseEnter:B_(l,p),onMouseLeave:B_(u,m),onTouchStart:B_(d,p)}]:[a,f,{}]:[!1,f,{}]}function B_(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function V_({page:e,...t}){let{router:n}=F_(),r=_.useMemo(()=>jh(n.routes,e,n.basename),[n.routes,e,n.basename]);return r?_.createElement(U_,{page:e,matches:r,...t}):null}function H_(e){let{manifest:t,routeModules:n}=R_(),[r,i]=_.useState([]);return _.useEffect(()=>{let r=!1;return k_(e,t,n).then(e=>{r||i(e)}),()=>{r=!0}},[e,t,n]),r}function U_({page:e,matches:t,...n}){let r=Ag(),{future:i,manifest:a,routeModules:o}=R_(),{basename:s}=F_(),{loaderData:c,matches:l}=I_(),u=_.useMemo(()=>A_(e,t,l,a,r,`data`),[e,t,l,a,r]),d=_.useMemo(()=>A_(e,t,l,a,r,`assets`),[e,t,l,a,r]),f=_.useMemo(()=>{if(e===r.pathname+r.search+r.hash)return[];let n=new Set,l=!1;if(t.forEach(e=>{let t=a.routes[e.route.id];!t||!t.hasLoader||(!u.some(t=>t.route.id===e.route.id)&&e.route.id in c&&o[e.route.id]?.shouldRevalidate||t.hasClientLoader?l=!0:n.add(e.route.id))}),n.size===0)return[];let d=T_(e,s,i.unstable_trailingSlashAwareDataRequests,`data`);return l&&n.size>0&&d.searchParams.set(`_routes`,t.filter(e=>n.has(e.route.id)).map(e=>e.route.id).join(`,`)),[d.pathname+d.search]},[s,i.unstable_trailingSlashAwareDataRequests,c,r,a,u,t,e,o]),p=_.useMemo(()=>j_(d,a),[d,a]),m=H_(d);return _.createElement(_.Fragment,null,f.map(e=>_.createElement(`link`,{key:e,rel:`prefetch`,as:`fetch`,href:e,...n})),p.map(e=>_.createElement(`link`,{key:e,rel:`modulepreload`,href:e,...n})),m.map(({key:e,link:t})=>_.createElement(`link`,{key:e,nonce:n.nonce,...t,crossOrigin:t.crossOrigin??n.crossOrigin})))}function W_(...e){return t=>{e.forEach(e=>{typeof e==`function`?e(t):e!=null&&(e.current=t)})}}var G_=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0;try{G_&&(window.__reactRouterVersion=`7.13.1`)}catch{}function K_({basename:e,children:t,unstable_useTransitions:n,window:r}){let i=_.useRef();i.current??=xh({window:r,v5Compat:!0});let a=i.current,[o,s]=_.useState({action:a.action,location:a.location}),c=_.useCallback(e=>{n===!1?s(e):_.startTransition(()=>s(e))},[n]);return _.useLayoutEffect(()=>a.listen(c),[a,c]),_.createElement(a_,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:a,unstable_useTransitions:n})}function q_({basename:e,children:t,history:n,unstable_useTransitions:r}){let[i,a]=_.useState({action:n.action,location:n.location}),o=_.useCallback(e=>{r===!1?a(e):_.startTransition(()=>a(e))},[r]);return _.useLayoutEffect(()=>n.listen(o),[n,o]),_.createElement(a_,{basename:e,children:t,location:i.location,navigationType:i.action,navigator:n,unstable_useTransitions:r})}q_.displayName=`unstable_HistoryRouter`;var J_=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Y_=_.forwardRef(function({onClick:e,discover:t=`render`,prefetch:n=`none`,relative:r,reloadDocument:i,replace:a,unstable_mask:o,state:s,target:c,to:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m){let{basename:h,navigator:g,unstable_useTransitions:v}=_.useContext(yg),y=typeof l==`string`&&J_.test(l),b=fg(l,h);l=b.to;let x=Og(l,{relative:r}),S=Ag(),C=null;if(o){let e=rg(o,[],S.unstable_mask?S.unstable_mask.pathname:`/`,!0);h!==`/`&&(e.pathname=e.pathname===`/`?h:ig([h,e.pathname])),C=g.createHref(e)}let[w,T,ee]=z_(n,p),te=nv(l,{replace:a,unstable_mask:o,state:s,target:c,preventScrollReset:u,relative:r,viewTransition:d,unstable_defaultShouldRevalidate:f,unstable_useTransitions:v});function E(t){e&&e(t),t.defaultPrevented||te(t)}let ne=!(b.isExternal||i),re=_.createElement(`a`,{...p,...ee,href:(ne?C:void 0)||b.absoluteURL||x,onClick:ne?E:e,ref:W_(m,T),target:c,"data-discover":!y&&t===`render`?`true`:void 0});return w&&!y?_.createElement(_.Fragment,null,re,_.createElement(V_,{page:x})):re});Y_.displayName=`Link`;var X_=_.forwardRef(function({"aria-current":e=`page`,caseSensitive:t=!1,className:n=``,end:r=!1,style:i,to:a,viewTransition:o,children:s,...c},l){let u=Fg(a,{relative:c.relative}),d=Ag(),f=_.useContext(mg),{navigator:p,basename:m}=_.useContext(yg),h=f!=null&&fv(u)&&o===!0,g=p.encodeLocation?p.encodeLocation(u).pathname:u.pathname,v=d.pathname,y=f&&f.navigation&&f.navigation.location?f.navigation.location.pathname:null;t||(v=v.toLowerCase(),y=y?y.toLowerCase():null,g=g.toLowerCase()),y&&m&&(y=Xh(y,m)||y);let b=g!==`/`&&g.endsWith(`/`)?g.length-1:g.length,x=v===g||!r&&v.startsWith(g)&&v.charAt(b)===`/`,S=y!=null&&(y===g||!r&&y.startsWith(g)&&y.charAt(g.length)===`/`),C={isActive:x,isPending:S,isTransitioning:h},w=x?e:void 0,T;T=typeof n==`function`?n(C):[n,x?`active`:null,S?`pending`:null,h?`transitioning`:null].filter(Boolean).join(` `);let ee=typeof i==`function`?i(C):i;return _.createElement(Y_,{...c,"aria-current":w,className:T,ref:l,style:ee,to:a,viewTransition:o},typeof s==`function`?s(C):s)});X_.displayName=`NavLink`;var Z_=_.forwardRef(({discover:e=`render`,fetcherKey:t,navigate:n,reloadDocument:r,replace:i,state:a,method:o=c_,action:s,onSubmit:c,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f,...p},m)=>{let{unstable_useTransitions:h}=_.useContext(yg),g=av(),v=ov(s,{relative:l}),y=o.toLowerCase()===`get`?`get`:`post`,b=typeof s==`string`&&J_.test(s);return _.createElement(`form`,{ref:m,method:y,action:v,onSubmit:r?c:e=>{if(c&&c(e),e.defaultPrevented)return;e.preventDefault();let r=e.nativeEvent.submitter,s=r?.getAttribute(`formmethod`)||o,p=()=>g(r||e.currentTarget,{fetcherKey:t,method:s,navigate:n,replace:i,state:a,relative:l,preventScrollReset:u,viewTransition:d,unstable_defaultShouldRevalidate:f});h&&n!==!1?_.startTransition(()=>p()):p()},...p,"data-discover":!b&&e===`render`?`true`:void 0})});Z_.displayName=`Form`;function Q_({getKey:e,storageKey:t,...n}){let r=_.useContext(L_),{basename:i}=_.useContext(yg),a=Ag(),o=Qg();uv({getKey:e,storageKey:t});let s=_.useMemo(()=>{if(!r||!e)return null;let t=lv(a,o,i,e);return t===a.key?null:t},[]);if(!r||r.isSpaMode)return null;let c=((e,t)=>{if(!window.history.state||!window.history.state.key){let e=Math.random().toString(32).slice(2);window.history.replaceState({key:e},``)}try{let n=JSON.parse(sessionStorage.getItem(e)||`{}`)[t||window.history.state.key];typeof n==`number`&&window.scrollTo(0,n)}catch(t){console.error(t),sessionStorage.removeItem(e)}}).toString();return _.createElement(`script`,{...n,suppressHydrationWarning:!0,dangerouslySetInnerHTML:{__html:`(${c})(${C_(JSON.stringify(t||sv))}, ${C_(JSON.stringify(s))})`}})}Q_.displayName=`ScrollRestoration`;function $_(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function ev(e){let t=_.useContext(pg);return Sh(t,$_(e)),t}function tv(e){let t=_.useContext(mg);return Sh(t,$_(e)),t}function nv(e,{target:t,replace:n,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c,unstable_useTransitions:l}={}){let u=Ng(),d=Ag(),f=Fg(e,{relative:o});return _.useCallback(p=>{if(h_(p,t)){p.preventDefault();let t=n===void 0?Dh(d)===Dh(f):n,m=()=>u(e,{replace:t,unstable_mask:r,state:i,preventScrollReset:a,relative:o,viewTransition:s,unstable_defaultShouldRevalidate:c});l?_.startTransition(()=>m()):m()}},[d,u,f,n,r,i,t,e,a,o,s,c,l])}var rv=0,iv=()=>`__${String(++rv)}__`;function av(){let{router:e}=ev(`useSubmit`),{basename:t}=_.useContext(yg),n=Xg(),r=e.fetch,i=e.navigate;return _.useCallback(async(e,a={})=>{let{action:o,method:s,encType:c,formData:l,body:u}=b_(e,t);a.navigate===!1?await r(a.fetcherKey||iv(),n,a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,flushSync:a.flushSync}):await i(a.action||o,{unstable_defaultShouldRevalidate:a.unstable_defaultShouldRevalidate,preventScrollReset:a.preventScrollReset,formData:l,body:u,formMethod:a.method||s,formEncType:a.encType||c,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[r,i,t,n])}function ov(e,{relative:t}={}){let{basename:n}=_.useContext(yg),r=_.useContext(xg);Sh(r,`useFormAction must be used inside a RouteContext`);let[i]=r.matches.slice(-1),a={...Fg(e||`.`,{relative:t})},o=Ag();if(e==null){a.search=o.search;let e=new URLSearchParams(a.search),t=e.getAll(`index`);if(t.some(e=>e===``)){e.delete(`index`),t.filter(e=>e).forEach(t=>e.append(`index`,t));let n=e.toString();a.search=n?`?${n}`:``}}return(!e||e===`.`)&&i.route.index&&(a.search=a.search?a.search.replace(/^\?/,`?index&`):`?index`),n!==`/`&&(a.pathname=a.pathname===`/`?n:ig([n,a.pathname])),Dh(a)}var sv=`react-router-scroll-positions`,cv={};function lv(e,t,n,r){let i=null;return r&&(i=r(n===`/`?e:{...e,pathname:Xh(e.pathname,n)||e.pathname},t)),i??=e.key,i}function uv({getKey:e,storageKey:t}={}){let{router:n}=ev(`useScrollRestoration`),{restoreScrollPosition:r,preventScrollReset:i}=tv(`useScrollRestoration`),{basename:a}=_.useContext(yg),o=Ag(),s=Qg(),c=Zg();_.useEffect(()=>(window.history.scrollRestoration=`manual`,()=>{window.history.scrollRestoration=`auto`}),[]),dv(_.useCallback(()=>{if(c.state===`idle`){let t=lv(o,s,a,e);cv[t]=window.scrollY}try{sessionStorage.setItem(t||sv,JSON.stringify(cv))}catch(e){Ch(!1,`Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`)}window.history.scrollRestoration=`auto`},[c.state,e,a,o,s,t])),typeof document<`u`&&(_.useLayoutEffect(()=>{try{let e=sessionStorage.getItem(t||sv);e&&(cv=JSON.parse(e))}catch{}},[t]),_.useLayoutEffect(()=>{let t=n?.enableScrollRestoration(cv,()=>window.scrollY,e?(t,n)=>lv(t,n,a,e):void 0);return()=>t&&t()},[n,a,e]),_.useLayoutEffect(()=>{if(r!==!1){if(typeof r==`number`){window.scrollTo(0,r);return}try{if(o.hash){let e=document.getElementById(decodeURIComponent(o.hash.slice(1)));if(e){e.scrollIntoView();return}}}catch{Ch(!1,`"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`)}i!==!0&&window.scrollTo(0,0)}},[o,r,i]))}function dv(e,t){let{capture:n}=t||{};_.useEffect(()=>{let t=n==null?void 0:{capture:n};return window.addEventListener(`pagehide`,e,t),()=>{window.removeEventListener(`pagehide`,e,t)}},[e,n])}function fv(e,{relative:t}={}){let n=_.useContext(gg);Sh(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:r}=ev(`useViewTransitionState`),i=Fg(e,{relative:t});if(!n.isTransitioning)return!1;let a=Xh(n.currentLocation.pathname,r)||n.currentLocation.pathname,o=Xh(n.nextLocation.pathname,r)||n.nextLocation.pathname;return qh(i.pathname,o)!=null||qh(i.pathname,a)!=null}var pv=o((e=>{var t=u();function n(e,t){return e===t&&(e!==0||1/e==1/t)||e!==e&&t!==t}var r=typeof Object.is==`function`?Object.is:n,i=t.useSyncExternalStore,a=t.useRef,o=t.useEffect,s=t.useMemo,c=t.useDebugValue;e.useSyncExternalStoreWithSelector=function(e,t,n,l,u){var d=a(null);if(d.current===null){var f={hasValue:!1,value:null};d.current=f}else f=d.current;d=s(function(){function e(e){if(!i){if(i=!0,a=e,e=l(e),u!==void 0&&f.hasValue){var t=f.value;if(u(t,e))return o=t}return o=e}if(t=o,r(a,e))return t;var n=l(e);return u!==void 0&&u(t,n)?(a=e,t):(a=e,o=n)}var i=!1,a,o,s=n===void 0?null:n;return[function(){return e(t())},s===null?void 0:function(){return e(s())}]},[t,n,l,u]);var p=i(e,d[0],d[1]);return o(function(){f.hasValue=!0,f.value=p},[p]),c(p),p}})),mv=o(((e,t)=>{t.exports=pv()}))();function hv(e){e()}function gv(){let e=null,t=null;return{clear(){e=null,t=null},notify(){hv(()=>{let t=e;for(;t;)t.callback(),t=t.next})},get(){let t=[],n=e;for(;n;)t.push(n),n=n.next;return t},subscribe(n){let r=!0,i=t={callback:n,next:null,prev:t};return i.prev?i.prev.next=i:e=i,function(){!r||e===null||(r=!1,i.next?i.next.prev=i.prev:t=i.prev,i.prev?i.prev.next=i.next:e=i.next)}}}}var _v={notify(){},get:()=>[]};function vv(e,t){let n,r=_v,i=0,a=!1;function o(e){u();let t=r.subscribe(e),n=!1;return()=>{n||(n=!0,t(),d())}}function s(){r.notify()}function c(){m.onStateChange&&m.onStateChange()}function l(){return a}function u(){i++,n||(n=t?t.addNestedSub(c):e.subscribe(c),r=gv())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=_v)}function f(){a||(a=!0,u())}function p(){a&&(a=!1,d())}let m={addNestedSub:o,notifyNestedSubs:s,handleChangeWrapper:c,isSubscribed:l,trySubscribe:f,tryUnsubscribe:p,getListeners:()=>r};return m}var yv=typeof window<`u`&&window.document!==void 0&&window.document.createElement!==void 0,bv=typeof navigator<`u`&&navigator.product===`ReactNative`,xv=yv||bv?_.useLayoutEffect:_.useEffect;Object.prototype;var Sv=Symbol.for(`react-redux-context`),Cv=typeof globalThis<`u`?globalThis:{};function wv(){if(!_.createContext)return{};let e=Cv[Sv]??=new Map,t=e.get(_.createContext);return t||(t=_.createContext(null),e.set(_.createContext,t)),t}var Tv=wv();function Ev(e){let{children:t,context:n,serverState:r,store:i}=e,a=_.useMemo(()=>({store:i,subscription:vv(i),getServerState:r?()=>r:void 0}),[i,r]),o=_.useMemo(()=>i.getState(),[i]);xv(()=>{let{subscription:e}=a;return e.onStateChange=e.notifyNestedSubs,e.trySubscribe(),o!==i.getState()&&e.notifyNestedSubs(),()=>{e.tryUnsubscribe(),e.onStateChange=void 0}},[a,o]);let s=n||Tv;return _.createElement(s.Provider,{value:a},t)}var Dv=Ev;function Ov(e=Tv){return function(){return _.useContext(e)}}var kv=Ov();function Av(e=Tv){let t=e===Tv?kv:Ov(e),n=()=>{let{store:e}=t();return e};return Object.assign(n,{withTypes:()=>n}),n}var jv=Av();function Mv(e=Tv){let t=e===Tv?jv:Av(e),n=()=>t().dispatch;return Object.assign(n,{withTypes:()=>n}),n}var Nv=Mv(),Pv=(e,t)=>e===t;function Fv(e=Tv){let t=e===Tv?kv:Ov(e),n=(e,n={})=>{let{equalityFn:r=Pv}=typeof n==`function`?{equalityFn:n}:n,{store:i,subscription:a,getServerState:o}=t();_.useRef(!0);let s=_.useCallback({[e.name](t){return e(t)}}[e.name],[e]),c=(0,mv.useSyncExternalStoreWithSelector)(a.addNestedSub,i.getState,o||i.getState,s,r);return _.useDebugValue(c),c};return Object.assign(n,{withTypes:()=>n}),n}var Iv=Fv();function Lv(e){return`Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}var Rv=typeof Symbol==`function`&&Symbol.observable||`@@observable`,zv=()=>Math.random().toString(36).substring(7).split(``).join(`.`),Bv={INIT:`@@redux/INIT${zv()}`,REPLACE:`@@redux/REPLACE${zv()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${zv()}`};function Vv(e){if(typeof e!=`object`||!e)return!1;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t||Object.getPrototypeOf(e)===null}function Hv(e,t,n){if(typeof e!=`function`)throw Error(Lv(2));if(typeof t==`function`&&typeof n==`function`||typeof n==`function`&&typeof arguments[3]==`function`)throw Error(Lv(0));if(typeof t==`function`&&n===void 0&&(n=t,t=void 0),n!==void 0){if(typeof n!=`function`)throw Error(Lv(1));return n(Hv)(e,t)}let r=e,i=t,a=new Map,o=a,s=0,c=!1;function l(){o===a&&(o=new Map,a.forEach((e,t)=>{o.set(t,e)}))}function u(){if(c)throw Error(Lv(3));return i}function d(e){if(typeof e!=`function`)throw Error(Lv(4));if(c)throw Error(Lv(5));let t=!0;l();let n=s++;return o.set(n,e),function(){if(t){if(c)throw Error(Lv(6));t=!1,l(),o.delete(n),a=null}}}function f(e){if(!Vv(e))throw Error(Lv(7));if(e.type===void 0)throw Error(Lv(8));if(typeof e.type!=`string`)throw Error(Lv(17));if(c)throw Error(Lv(9));try{c=!0,i=r(i,e)}finally{c=!1}return(a=o).forEach(e=>{e()}),e}function p(e){if(typeof e!=`function`)throw Error(Lv(10));r=e,f({type:Bv.REPLACE})}function m(){let e=d;return{subscribe(t){if(typeof t!=`object`||!t)throw Error(Lv(11));function n(){let e=t;e.next&&e.next(u())}return n(),{unsubscribe:e(n)}},[Rv](){return this}}}return f({type:Bv.INIT}),{dispatch:f,subscribe:d,getState:u,replaceReducer:p,[Rv]:m}}function Uv(e){Object.keys(e).forEach(t=>{let n=e[t];if(n(void 0,{type:Bv.INIT})===void 0)throw Error(Lv(12));if(n(void 0,{type:Bv.PROBE_UNKNOWN_ACTION()})===void 0)throw Error(Lv(13))})}function Wv(e){let t=Object.keys(e),n={};for(let r=0;r<t.length;r++){let i=t[r];typeof e[i]==`function`&&(n[i]=e[i])}let r=Object.keys(n),i;try{Uv(n)}catch(e){i=e}return function(e={},t){if(i)throw i;let a=!1,o={};for(let i=0;i<r.length;i++){let s=r[i],c=n[s],l=e[s],u=c(l,t);if(u===void 0)throw t&&t.type,Error(Lv(14));o[s]=u,a||=u!==l}return a||=r.length!==Object.keys(e).length,a?o:e}}function Gv(...e){return e.length===0?e=>e:e.length===1?e[0]:e.reduce((e,t)=>(...n)=>e(t(...n)))}function Kv(...e){return t=>(n,r)=>{let i=t(n,r),a=()=>{throw Error(Lv(15))},o={getState:i.getState,dispatch:(e,...t)=>a(e,...t)};return a=Gv(...e.map(e=>e(o)))(i.dispatch),{...i,dispatch:a}}}function qv(e){return Vv(e)&&`type`in e&&typeof e.type==`string`}var Jv=Symbol.for(`immer-nothing`),Yv=Symbol.for(`immer-draftable`),Xv=Symbol.for(`immer-state`);function Zv(e,...t){throw Error(`[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`)}var Qv=Object,$v=Qv.getPrototypeOf,ey=`constructor`,ty=`prototype`,ny=`configurable`,ry=`enumerable`,iy=`writable`,ay=`value`,oy=e=>!!e&&!!e[Xv];function sy(e){return e?uy(e)||_y(e)||!!e[Yv]||!!e[ey]?.[Yv]||vy(e)||yy(e):!1}var cy=Qv[ty][ey].toString(),ly=new WeakMap;function uy(e){if(!e||!by(e))return!1;let t=$v(e);if(t===null||t===Qv[ty])return!0;let n=Qv.hasOwnProperty.call(t,ey)&&t[ey];if(n===Object)return!0;if(!xy(n))return!1;let r=ly.get(n);return r===void 0&&(r=Function.toString.call(n),ly.set(n,r)),r===cy}function dy(e,t,n=!0){fy(e)===0?(n?Reflect.ownKeys(e):Qv.keys(e)).forEach(n=>{t(n,e[n],e)}):e.forEach((n,r)=>t(r,n,e))}function fy(e){let t=e[Xv];return t?t.type_:_y(e)?1:vy(e)?2:yy(e)?3:0}var py=(e,t,n=fy(e))=>n===2?e.has(t):Qv[ty].hasOwnProperty.call(e,t),my=(e,t,n=fy(e))=>n===2?e.get(t):e[t],hy=(e,t,n,r=fy(e))=>{r===2?e.set(t,n):r===3?e.add(n):e[t]=n};function gy(e,t){return e===t?e!==0||1/e==1/t:e!==e&&t!==t}var _y=Array.isArray,vy=e=>e instanceof Map,yy=e=>e instanceof Set,by=e=>typeof e==`object`,xy=e=>typeof e==`function`,Sy=e=>typeof e==`boolean`;function Cy(e){let t=+e;return Number.isInteger(t)&&String(t)===e}var wy=e=>e.copy_||e.base_,Ty=e=>e.modified_?e.copy_:e.base_;function Ey(e,t){if(vy(e))return new Map(e);if(yy(e))return new Set(e);if(_y(e))return Array[ty].slice.call(e);let n=uy(e);if(t===!0||t===`class_only`&&!n){let t=Qv.getOwnPropertyDescriptors(e);delete t[Xv];let n=Reflect.ownKeys(t);for(let r=0;r<n.length;r++){let i=n[r],a=t[i];a[iy]===!1&&(a[iy]=!0,a[ny]=!0),(a.get||a.set)&&(t[i]={[ny]:!0,[iy]:!0,[ry]:a[ry],[ay]:e[i]})}return Qv.create($v(e),t)}else{let t=$v(e);if(t!==null&&n)return{...e};let r=Qv.create(t);return Qv.assign(r,e)}}function Dy(e,t=!1){return Ay(e)||oy(e)||!sy(e)?e:(fy(e)>1&&Qv.defineProperties(e,{set:ky,add:ky,clear:ky,delete:ky}),Qv.freeze(e),t&&dy(e,(e,t)=>{Dy(t,!0)},!1),e)}function Oy(){Zv(2)}var ky={[ay]:Oy};function Ay(e){return e===null||!by(e)?!0:Qv.isFrozen(e)}var jy=`MapSet`,My=`Patches`,Ny=`ArrayMethods`,Py={};function Fy(e){let t=Py[e];return t||Zv(0,e),t}var Iy=e=>!!Py[e],Ly,Ry=()=>Ly,zy=(e,t)=>({drafts_:[],parent_:e,immer_:t,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Iy(jy)?Fy(jy):void 0,arrayMethodsPlugin_:Iy(Ny)?Fy(Ny):void 0});function By(e,t){t&&(e.patchPlugin_=Fy(My),e.patches_=[],e.inversePatches_=[],e.patchListener_=t)}function Vy(e){Hy(e),e.drafts_.forEach(Wy),e.drafts_=null}function Hy(e){e===Ly&&(Ly=e.parent_)}var Uy=e=>Ly=zy(Ly,e);function Wy(e){let t=e[Xv];t.type_===0||t.type_===1?t.revoke_():t.revoked_=!0}function Gy(e,t){t.unfinalizedDrafts_=t.drafts_.length;let n=t.drafts_[0];if(e!==void 0&&e!==n){n[Xv].modified_&&(Vy(t),Zv(4)),sy(e)&&(e=Ky(t,e));let{patchPlugin_:r}=t;r&&r.generateReplacementPatches_(n[Xv].base_,e,t)}else e=Ky(t,n);return qy(t,e,!0),Vy(t),t.patches_&&t.patchListener_(t.patches_,t.inversePatches_),e===Jv?void 0:e}function Ky(e,t){if(Ay(t))return t;let n=t[Xv];if(!n)return tb(t,e.handledSet_,e);if(!Yy(n,e))return t;if(!n.modified_)return n.base_;if(!n.finalized_){let{callbacks_:t}=n;if(t)for(;t.length>0;)t.pop()(e);$y(n,e)}return n.copy_}function qy(e,t,n=!1){!e.parent_&&e.immer_.autoFreeze_&&e.canAutoFreeze_&&Dy(t,n)}function Jy(e){e.finalized_=!0,e.scope_.unfinalizedDrafts_--}var Yy=(e,t)=>e.scope_===t,Xy=[];function Zy(e,t,n,r){let i=wy(e),a=e.type_;if(r!==void 0&&my(i,r,a)===t){hy(i,r,n,a);return}if(!e.draftLocations_){let t=e.draftLocations_=new Map;dy(i,(e,n)=>{if(oy(n)){let r=t.get(n)||[];r.push(e),t.set(n,r)}})}let o=e.draftLocations_.get(t)??Xy;for(let e of o)hy(i,e,n,a)}function Qy(e,t,n){e.callbacks_.push(function(r){let i=t;if(!i||!Yy(i,r))return;r.mapSetPlugin_?.fixSetContents(i);let a=Ty(i);Zy(e,i.draft_??i,a,n),$y(i,r)})}function $y(e,t){if(e.modified_&&!e.finalized_&&(e.type_===3||e.type_===1&&e.allIndicesReassigned_||(e.assigned_?.size??0)>0)){let{patchPlugin_:n}=t;if(n){let r=n.getPath(e);r&&n.generatePatches_(e,r,t)}Jy(e)}}function eb(e,t,n){let{scope_:r}=e;if(oy(n)){let i=n[Xv];Yy(i,r)&&i.callbacks_.push(function(){lb(e),Zy(e,n,Ty(i),t)})}else sy(n)&&e.callbacks_.push(function(){let i=wy(e);e.type_===3?i.has(n)&&tb(n,r.handledSet_,r):my(i,t,e.type_)===n&&r.drafts_.length>1&&(e.assigned_.get(t)??!1)===!0&&e.copy_&&tb(my(e.copy_,t,e.type_),r.handledSet_,r)})}function tb(e,t,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||oy(e)||t.has(e)||!sy(e)||Ay(e)?e:(t.add(e),dy(e,(r,i)=>{if(oy(i)){let t=i[Xv];Yy(t,n)&&(hy(e,r,Ty(t),e.type_),Jy(t))}else sy(i)&&tb(i,t,n)}),e)}function nb(e,t){let n=_y(e),r={type_:n?1:0,scope_:t?t.scope_:Ry(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:t,base_:e,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0},i=r,a=rb;n&&(i=[r],a=ib);let{revoke:o,proxy:s}=Proxy.revocable(i,a);return r.draft_=s,r.revoke_=o,[s,r]}var rb={get(e,t){if(t===Xv)return e;let n=e.scope_.arrayMethodsPlugin_,r=e.type_===1&&typeof t==`string`;if(r&&n?.isArrayOperationMethod(t))return n.createMethodInterceptor(e,t);let i=wy(e);if(!py(i,t,e.type_))return ob(e,i,t);let a=i[t];if(e.finalized_||!sy(a)||r&&e.operationMethod&&n?.isMutatingArrayMethod(e.operationMethod)&&Cy(t))return a;if(a===ab(e.base_,t)){lb(e);let n=e.type_===1?+t:t,r=db(e.scope_,a,e,n);return e.copy_[n]=r}return a},has(e,t){return t in wy(e)},ownKeys(e){return Reflect.ownKeys(wy(e))},set(e,t,n){let r=sb(wy(e),t);if(r?.set)return r.set.call(e.draft_,n),!0;if(!e.modified_){let r=ab(wy(e),t),i=r?.[Xv];if(i&&i.base_===n)return e.copy_[t]=n,e.assigned_.set(t,!1),!0;if(gy(n,r)&&(n!==void 0||py(e.base_,t,e.type_)))return!0;lb(e),cb(e)}return e.copy_[t]===n&&(n!==void 0||t in e.copy_)||Number.isNaN(n)&&Number.isNaN(e.copy_[t])?!0:(e.copy_[t]=n,e.assigned_.set(t,!0),eb(e,t,n),!0)},deleteProperty(e,t){return lb(e),ab(e.base_,t)!==void 0||t in e.base_?(e.assigned_.set(t,!1),cb(e)):e.assigned_.delete(t),e.copy_&&delete e.copy_[t],!0},getOwnPropertyDescriptor(e,t){let n=wy(e),r=Reflect.getOwnPropertyDescriptor(n,t);return r&&{[iy]:!0,[ny]:e.type_!==1||t!==`length`,[ry]:r[ry],[ay]:n[t]}},defineProperty(){Zv(11)},getPrototypeOf(e){return $v(e.base_)},setPrototypeOf(){Zv(12)}},ib={};for(let e in rb){let t=rb[e];ib[e]=function(){let e=arguments;return e[0]=e[0][0],t.apply(this,e)}}ib.deleteProperty=function(e,t){return ib.set.call(this,e,t,void 0)},ib.set=function(e,t,n){return rb.set.call(this,e[0],t,n,e[0])};function ab(e,t){let n=e[Xv];return(n?wy(n):e)[t]}function ob(e,t,n){let r=sb(t,n);return r?ay in r?r[ay]:r.get?.call(e.draft_):void 0}function sb(e,t){if(!(t in e))return;let n=$v(e);for(;n;){let e=Object.getOwnPropertyDescriptor(n,t);if(e)return e;n=$v(n)}}function cb(e){e.modified_||(e.modified_=!0,e.parent_&&cb(e.parent_))}function lb(e){e.copy_||=(e.assigned_=new Map,Ey(e.base_,e.scope_.immer_.useStrictShallowCopy_))}var ub=class{constructor(e){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,t,n)=>{if(xy(e)&&!xy(t)){let n=t;t=e;let r=this;return function(e=n,...i){return r.produce(e,e=>t.call(this,e,...i))}}xy(t)||Zv(6),n!==void 0&&!xy(n)&&Zv(7);let r;if(sy(e)){let i=Uy(this),a=db(i,e,void 0),o=!0;try{r=t(a),o=!1}finally{o?Vy(i):Hy(i)}return By(i,n),Gy(r,i)}else if(!e||!by(e)){if(r=t(e),r===void 0&&(r=e),r===Jv&&(r=void 0),this.autoFreeze_&&Dy(r,!0),n){let t=[],i=[];Fy(My).generateReplacementPatches_(e,r,{patches_:t,inversePatches_:i}),n(t,i)}return r}else Zv(1,e)},this.produceWithPatches=(e,t)=>{if(xy(e))return(t,...n)=>this.produceWithPatches(t,t=>e(t,...n));let n,r;return[this.produce(e,t,(e,t)=>{n=e,r=t}),n,r]},Sy(e?.autoFreeze)&&this.setAutoFreeze(e.autoFreeze),Sy(e?.useStrictShallowCopy)&&this.setUseStrictShallowCopy(e.useStrictShallowCopy),Sy(e?.useStrictIteration)&&this.setUseStrictIteration(e.useStrictIteration)}createDraft(e){sy(e)||Zv(8),oy(e)&&(e=fb(e));let t=Uy(this),n=db(t,e,void 0);return n[Xv].isManual_=!0,Hy(t),n}finishDraft(e,t){let n=e&&e[Xv];(!n||!n.isManual_)&&Zv(9);let{scope_:r}=n;return By(r,t),Gy(void 0,r)}setAutoFreeze(e){this.autoFreeze_=e}setUseStrictShallowCopy(e){this.useStrictShallowCopy_=e}setUseStrictIteration(e){this.useStrictIteration_=e}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(e,t){let n;for(n=t.length-1;n>=0;n--){let r=t[n];if(r.path.length===0&&r.op===`replace`){e=r.value;break}}n>-1&&(t=t.slice(n+1));let r=Fy(My).applyPatches_;return oy(e)?r(e,t):this.produce(e,e=>r(e,t))}};function db(e,t,n,r){let[i,a]=vy(t)?Fy(jy).proxyMap_(t,n):yy(t)?Fy(jy).proxySet_(t,n):nb(t,n);return(n?.scope_??Ry()).drafts_.push(i),a.callbacks_=n?.callbacks_??[],a.key_=r,n&&r!==void 0?Qy(n,a,r):a.callbacks_.push(function(e){e.mapSetPlugin_?.fixSetContents(a);let{patchPlugin_:t}=e;a.modified_&&t&&t.generatePatches_(a,[],e)}),i}function fb(e){return oy(e)||Zv(10,e),pb(e)}function pb(e){if(!sy(e)||Ay(e))return e;let t=e[Xv],n,r=!0;if(t){if(!t.modified_)return t.base_;t.finalized_=!0,n=Ey(e,t.scope_.immer_.useStrictShallowCopy_),r=t.scope_.immer_.shouldUseStrictIteration()}else n=Ey(e,!0);return dy(n,(e,t)=>{hy(n,e,pb(t))},r),t&&(t.finalized_=!1),n}var mb=new ub().produce;function hb(e){return({dispatch:t,getState:n})=>r=>i=>typeof i==`function`?i(t,n,e):r(i)}var gb=hb(),_b=hb,vb=typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]==`object`?Gv:Gv.apply(null,arguments)};typeof window<`u`&&window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__;var yb=e=>e&&typeof e.match==`function`;function bb(e,t){function n(...n){if(t){let r=t(...n);if(!r)throw Error(lx(0));return{type:e,payload:r.payload,...`meta`in r&&{meta:r.meta},...`error`in r&&{error:r.error}}}return{type:e,payload:n[0]}}return n.toString=()=>`${e}`,n.type=e,n.match=t=>qv(t)&&t.type===e,n}var xb=class e extends Array{constructor(...t){super(...t),Object.setPrototypeOf(this,e.prototype)}static get[Symbol.species](){return e}concat(...e){return super.concat.apply(this,e)}prepend(...t){return t.length===1&&Array.isArray(t[0])?new e(...t[0].concat(this)):new e(...t.concat(this))}};function Sb(e){return sy(e)?mb(e,()=>{}):e}function Cb(e,t,n){return e.has(t)?e.get(t):e.set(t,n(t)).get(t)}function wb(e){return typeof e==`boolean`}var Tb=()=>function(e){let{thunk:t=!0,immutableCheck:n=!0,serializableCheck:r=!0,actionCreatorCheck:i=!0}=e??{},a=new xb;return t&&(wb(t)?a.push(gb):a.push(_b(t.extraArgument))),a},Eb=`RTK_autoBatch`,Db=e=>t=>{setTimeout(t,e)},Ob=(e={type:`raf`})=>t=>(...n)=>{let r=t(...n),i=!0,a=!1,o=!1,s=new Set,c=e.type===`tick`?queueMicrotask:e.type===`raf`?typeof window<`u`&&window.requestAnimationFrame?window.requestAnimationFrame:Db(10):e.type===`callback`?e.queueNotification:Db(e.timeout),l=()=>{o=!1,a&&(a=!1,s.forEach(e=>e()))};return Object.assign({},r,{subscribe(e){let t=r.subscribe(()=>i&&e());return s.add(e),()=>{t(),s.delete(e)}},dispatch(e){try{return i=!e?.meta?.[Eb],a=!i,a&&(o||(o=!0,c(l))),r.dispatch(e)}finally{i=!0}}})},kb=e=>function(t){let{autoBatch:n=!0}=t??{},r=new xb(e);return n&&r.push(Ob(typeof n==`object`?n:void 0)),r};function Ab(e){let t=Tb(),{reducer:n=void 0,middleware:r,devTools:i=!0,duplicateMiddlewareCheck:a=!0,preloadedState:o=void 0,enhancers:s=void 0}=e||{},c;if(typeof n==`function`)c=n;else if(Vv(n))c=Wv(n);else throw Error(lx(1));let l;l=typeof r==`function`?r(t):t();let u=Gv;i&&(u=vb({trace:!1,...typeof i==`object`&&i}));let d=kb(Kv(...l)),f=typeof s==`function`?s(d):d(),p=u(...f);return Hv(c,o,p)}function jb(e){let t={},n=[],r,i={addCase(e,n){let r=typeof e==`string`?e:e.type;if(!r)throw Error(lx(28));if(r in t)throw Error(lx(29));return t[r]=n,i},addAsyncThunk(e,r){return r.pending&&(t[e.pending.type]=r.pending),r.rejected&&(t[e.rejected.type]=r.rejected),r.fulfilled&&(t[e.fulfilled.type]=r.fulfilled),r.settled&&n.push({matcher:e.settled,reducer:r.settled}),i},addMatcher(e,t){return n.push({matcher:e,reducer:t}),i},addDefaultCase(e){return r=e,i}};return e(i),[t,n,r]}function Mb(e){return typeof e==`function`}function Nb(e,t){let[n,r,i]=jb(t),a;if(Mb(e))a=()=>Sb(e());else{let t=Sb(e);a=()=>t}function o(e=a(),t){let o=[n[t.type],...r.filter(({matcher:e})=>e(t)).map(({reducer:e})=>e)];return o.filter(e=>!!e).length===0&&(o=[i]),o.reduce((e,n)=>{if(n)if(oy(e)){let r=n(e,t);return r===void 0?e:r}else if(sy(e))return mb(e,e=>n(e,t));else{let r=n(e,t);if(r===void 0){if(e===null)return e;throw Error(`A case reducer on a non-draftable value must not return undefined`)}return r}return e},e)}return o.getInitialState=a,o}var Pb=(e,t)=>yb(e)?e.match(t):e(t);function Fb(...e){return t=>e.some(e=>Pb(e,t))}var Ib=`ModuleSymbhasOwnPr-0123456789ABCDEFGHNRVfgctiUvz_KqYTJkLxpZXIjQW`,Lb=(e=21)=>{let t=``,n=e;for(;n--;)t+=Ib[Math.random()*64|0];return t},Rb=[`name`,`message`,`stack`,`code`],zb=class{constructor(e,t){this.payload=e,this.meta=t}_type},Bb=class{constructor(e,t){this.payload=e,this.meta=t}_type},Vb=e=>{if(typeof e==`object`&&e){let t={};for(let n of Rb)typeof e[n]==`string`&&(t[n]=e[n]);return t}return{message:String(e)}},Hb=`External signal was aborted`;(()=>{function e(e,t,n){let r=bb(e+`/fulfilled`,(e,t,n,r)=>({payload:e,meta:{...r||{},arg:n,requestId:t,requestStatus:`fulfilled`}})),i=bb(e+`/pending`,(e,t,n)=>({payload:void 0,meta:{...n||{},arg:t,requestId:e,requestStatus:`pending`}})),a=bb(e+`/rejected`,(e,t,r,i,a)=>({payload:i,error:(n&&n.serializeError||Vb)(e||`Rejected`),meta:{...a||{},arg:r,requestId:t,rejectedWithValue:!!i,requestStatus:`rejected`,aborted:e?.name===`AbortError`,condition:e?.name===`ConditionError`}}));function o(e,{signal:o}={}){return(s,c,l)=>{let u=n?.idGenerator?n.idGenerator(e):Lb(),d=new AbortController,f,p;function m(e){p=e,d.abort()}o&&(o.aborted?m(Hb):o.addEventListener(`abort`,()=>m(Hb),{once:!0}));let h=async function(){let o;try{let a=n?.condition?.(e,{getState:c,extra:l});if(Wb(a)&&(a=await a),a===!1||d.signal.aborted)throw{name:`ConditionError`,message:`Aborted due to condition callback returning false.`};let h=new Promise((e,t)=>{f=()=>{t({name:`AbortError`,message:p||`Aborted`})},d.signal.addEventListener(`abort`,f,{once:!0})});s(i(u,e,n?.getPendingMeta?.({requestId:u,arg:e},{getState:c,extra:l}))),o=await Promise.race([h,Promise.resolve(t(e,{dispatch:s,getState:c,extra:l,requestId:u,signal:d.signal,abort:m,rejectWithValue:(e,t)=>new zb(e,t),fulfillWithValue:(e,t)=>new Bb(e,t)})).then(t=>{if(t instanceof zb)throw t;return t instanceof Bb?r(t.payload,u,e,t.meta):r(t,u,e)})])}catch(t){o=t instanceof zb?a(null,u,e,t.payload,t.meta):a(t,u,e)}finally{f&&d.signal.removeEventListener(`abort`,f)}return n&&!n.dispatchConditionRejection&&a.match(o)&&o.meta.condition||s(o),o}();return Object.assign(h,{abort:m,requestId:u,arg:e,unwrap(){return h.then(Ub)}})}}return Object.assign(o,{pending:i,rejected:a,fulfilled:r,settled:Fb(a,r),typePrefix:e})}return e.withTypes=()=>e,e})();function Ub(e){if(e.meta&&e.meta.rejectedWithValue)throw e.payload;if(e.error)throw e.error;return e.payload}function Wb(e){return typeof e==`object`&&!!e&&typeof e.then==`function`}var Gb=Symbol.for(`rtk-slice-createasyncthunk`);function Kb(e,t){return`${e}/${t}`}function qb({creators:e}={}){let t=e?.asyncThunk?.[Gb];return function(e){let{name:n,reducerPath:r=n}=e;if(!n)throw Error(lx(11));let i=(typeof e.reducers==`function`?e.reducers(Xb()):e.reducers)||{},a=Object.keys(i),o={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},s={addCase(e,t){let n=typeof e==`string`?e:e.type;if(!n)throw Error(lx(12));if(n in o.sliceCaseReducersByType)throw Error(lx(13));return o.sliceCaseReducersByType[n]=t,s},addMatcher(e,t){return o.sliceMatchers.push({matcher:e,reducer:t}),s},exposeAction(e,t){return o.actionCreators[e]=t,s},exposeCaseReducer(e,t){return o.sliceCaseReducersByName[e]=t,s}};a.forEach(r=>{let a=i[r],o={reducerName:r,type:Kb(n,r),createNotation:typeof e.reducers==`function`};Qb(a)?ex(o,a,s,t):Zb(o,a,s)});function c(){let[t={},n=[],r=void 0]=typeof e.extraReducers==`function`?jb(e.extraReducers):[e.extraReducers],i={...t,...o.sliceCaseReducersByType};return Nb(e.initialState,e=>{for(let t in i)e.addCase(t,i[t]);for(let t of o.sliceMatchers)e.addMatcher(t.matcher,t.reducer);for(let t of n)e.addMatcher(t.matcher,t.reducer);r&&e.addDefaultCase(r)})}let l=e=>e,u=new Map,d=new WeakMap,f;function p(e,t){return f||=c(),f(e,t)}function m(){return f||=c(),f.getInitialState()}function h(t,n=!1){function r(e){let i=e[t];return i===void 0&&n&&(i=Cb(d,r,m)),i}function i(t=l){return Cb(Cb(u,n,()=>new WeakMap),t,()=>{let r={};for(let[i,a]of Object.entries(e.selectors??{}))r[i]=Jb(a,t,()=>Cb(d,t,m),n);return r})}return{reducerPath:t,getSelectors:i,get selectors(){return i(r)},selectSlice:r}}let g={name:n,reducer:p,actions:o.actionCreators,caseReducers:o.sliceCaseReducersByName,getInitialState:m,...h(r),injectInto(e,{reducerPath:t,...n}={}){let i=t??r;return e.inject({reducerPath:i,reducer:p},n),{...g,...h(i,!0)}}};return g}}function Jb(e,t,n,r){function i(i,...a){let o=t(i);return o===void 0&&r&&(o=n()),e(o,...a)}return i.unwrapped=e,i}var Yb=qb();function Xb(){function e(e,t){return{_reducerDefinitionType:`asyncThunk`,payloadCreator:e,...t}}return e.withTypes=()=>e,{reducer(e){return Object.assign({[e.name](...t){return e(...t)}}[e.name],{_reducerDefinitionType:`reducer`})},preparedReducer(e,t){return{_reducerDefinitionType:`reducerWithPrepare`,prepare:e,reducer:t}},asyncThunk:e}}function Zb({type:e,reducerName:t,createNotation:n},r,i){let a,o;if(`reducer`in r){if(n&&!$b(r))throw Error(lx(17));a=r.reducer,o=r.prepare}else a=r;i.addCase(e,a).exposeCaseReducer(t,a).exposeAction(t,o?bb(e,o):bb(e))}function Qb(e){return e._reducerDefinitionType===`asyncThunk`}function $b(e){return e._reducerDefinitionType===`reducerWithPrepare`}function ex({type:e,reducerName:t},n,r,i){if(!i)throw Error(lx(18));let{payloadCreator:a,fulfilled:o,pending:s,rejected:c,settled:l,options:u}=n,d=i(e,a,u);r.exposeAction(t,d),o&&r.addCase(d.fulfilled,o),s&&r.addCase(d.pending,s),c&&r.addCase(d.rejected,c),l&&r.addMatcher(d.settled,l),r.exposeCaseReducer(t,{fulfilled:o||tx,pending:s||tx,rejected:c||tx,settled:l||tx})}function tx(){}var nx=`listener`,rx=`completed`,ix=`cancelled`;`${ix}`,`${rx}`,`${nx}${ix}`,`${nx}${rx}`;var{assign:ax}=Object,ox=`listenerMiddleware`,sx=ax(bb(`${ox}/add`),{withTypes:()=>sx});bb(`${ox}/removeAll`);var cx=ax(bb(`${ox}/remove`),{withTypes:()=>cx});function lx(e){return`Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `}const ux=Yb({name:`test`,initialState:{counter1:1,counter2:1},reducers:{upcount1(e){e.counter1+=1},upcount2(e){e.counter2+=1}}});ux.actions;const dx=ux.reducer,fx=Ab({reducer:{test:dx}}),px=Nv.withTypes(),mx=Iv.withTypes();function hx(){return(0,Q.jsx)(Xp,{shadow:`lg`,withBorder:!0,children:(0,Q.jsxs)(ah,{gap:`md`,p:`md`,children:[(0,Q.jsx)(fh,{order:2,children:`Redux Component`}),(0,Q.jsx)(xm,{children:`Redux will only render the child that listen to that specific selector when it's updated`}),(0,Q.jsx)(xm,{children:`Under here, there are 2 separate component that uses different value from same redux slice, but updating the state of one of them will only the listener to the selector`}),(0,Q.jsx)(xm,{children:`You can try by clicking the button below and look at how the react scan detect the re-rendering`}),(0,Q.jsx)(gx,{}),(0,Q.jsx)(Bm,{}),(0,Q.jsx)(fh,{order:4,children:`When to use Redux`}),(0,Q.jsxs)(th,{children:[(0,Q.jsx)(th.Item,{children:`You want to optimize the globally shared values, that context will likely to cause too much re-render`}),(0,Q.jsx)(th.Item,{children:`You want to have a value that get updated often and not efficient for context to handle it`}),(0,Q.jsx)(th.Item,{children:(0,Q.jsx)(Jm,{highlight:`Props Drilling`,children:`You want to prevent Props Drilling that is considered globally shared value`})})]})]})})}function gx(){return(0,Q.jsx)(Xp,{p:`md`,children:(0,Q.jsxs)(ah,{children:[(0,Q.jsx)(fh,{children:`This is just the container component for the components below`}),(0,Q.jsx)(_x,{}),(0,Q.jsx)(vx,{}),(0,Q.jsx)(yx,{})]})})}function _x(){let e=mx(e=>e.test.counter1),t=px();return(0,Q.jsxs)(gm,{children:[(0,Q.jsxs)(gm,{children:[`Counter 1: `,e]}),(0,Q.jsx)(Nm,{onClick:()=>t(ux.actions.upcount1()),children:`Add`})]})}function vx(){let e=mx(e=>e.test.counter2),t=px();return(0,Q.jsxs)(gm,{children:[(0,Q.jsxs)(gm,{children:[`Counter 2: `,e]}),(0,Q.jsx)(Nm,{onClick:()=>t(ux.actions.upcount2()),children:`Add`})]})}function yx(){return(0,Q.jsx)(gm,{children:(0,Q.jsxs)(gm,{children:[`Sum: `,mx(e=>e.test.counter1)+mx(e=>e.test.counter2)]})})}const bx=(0,_.createContext)(void 0),xx=({children:e})=>{let[t,n]=(0,_.useState)(1),[r,i]=(0,_.useState)(1),a=(0,_.useCallback)(()=>{n(e=>e+1)},[]),o=(0,_.useCallback)(()=>{i(e=>e+1)},[]);return(0,Q.jsx)(bx.Provider,{value:{counter1:t,upcount1:a,counter2:r,upcount2:o},children:e})},Sx=()=>{let e=(0,_.useContext)(bx);if(!e)throw Error(`useTest must be used within a TestProvider`);return e};function Cx(){return(0,Q.jsx)(Xp,{children:(0,Q.jsxs)(ah,{gap:`md`,p:`md`,children:[(0,Q.jsx)(fh,{order:2,children:`Context Component`}),(0,Q.jsx)(xm,{children:`Context will render all the component that use it when it's updated`}),(0,Q.jsx)(xm,{children:`Under here, there are 2 separate component that uses different value from same context, but one action will cause the other to re-render due to the nature of context`}),(0,Q.jsx)(xm,{children:`You can try by clicking the button below and look at how the react scan detect the re-rendering`}),(0,Q.jsx)(wx,{}),(0,Q.jsx)(Bm,{}),(0,Q.jsx)(fh,{order:4,children:`When To Use Context`}),(0,Q.jsxs)(th,{children:[(0,Q.jsx)(th.Item,{children:`When you know that the globally shared values doesn't change often`}),(0,Q.jsx)(th.Item,{children:`When you know that the globally shared values will likely need to retrigger entire app recalculation`}),(0,Q.jsx)(th.Item,{children:(0,Q.jsxs)(gm,{children:[(0,Q.jsx)(Jm,{highlight:`Props Drilling`,children:`When you want to prevent Props Drilling, the demo of props drilling`}),(0,Q.jsx)(Y_,{to:`/props-drilling`,children:`here`})]})}),(0,Q.jsx)(th.Item,{children:`When you want to make a library with some configuration, you can't ask the user to setup redux with specific name etc just for this`})]})]})})}function wx(){return(0,Q.jsx)(Xp,{p:`md`,children:(0,Q.jsxs)(ah,{children:[(0,Q.jsx)(fh,{children:`This is just the container component for the components below`}),(0,Q.jsx)(Tx,{}),(0,Q.jsx)(Ex,{}),(0,Q.jsx)(Dx,{})]})})}function Tx(){let{counter1:e,upcount1:t}=Sx();return(0,Q.jsxs)(gm,{children:[(0,Q.jsxs)(gm,{children:[`Counter 1: `,e]}),(0,Q.jsx)(Nm,{onClick:t,children:`Add`})]})}function Ex(){let{counter2:e,upcount2:t}=Sx();return(0,Q.jsxs)(gm,{children:[(0,Q.jsxs)(gm,{children:[`Counter 2: `,e]}),(0,Q.jsx)(Nm,{onClick:t,children:`Add`})]})}function Dx(){let{counter1:e,counter2:t}=Sx();return(0,Q.jsx)(gm,{children:(0,Q.jsxs)(gm,{children:[`Sum: `,e+t]})})}function Ox(){return(0,Q.jsx)(Im,{py:`md`,children:(0,Q.jsxs)(ah,{gap:`xl`,children:[(0,Q.jsx)(fh,{children:`Context vs Redux`}),(0,Q.jsxs)(xm,{children:[`This demo has to be injected injected with `,(0,Q.jsx)(wm,{href:`https://react-scan.com/`,target:`_blank`,children:`React-Scan`}),` so we can tell which component get re-rendered`]}),(0,Q.jsx)(xx,{children:(0,Q.jsx)(Cx,{})}),(0,Q.jsx)(Dv,{store:fx,children:(0,Q.jsx)(hx,{})})]})})}var kx=(0,_.createContext)(void 0);function Ax({children:e,valueFromParent:t}){return(0,Q.jsx)(kx.Provider,{value:{undrilledObject:t},children:e})}const jx=()=>{let e=(0,_.useContext)(kx);if(!e)throw Error(`useUndrill must be used within an UndrillProvider`);return e};function Mx(){let[e]=(0,_.useState)([{text:`This is the first undrilled object`,value:123},{text:`This is the second undrilled object`,value:456},{text:`This is the third undrilled object`,value:789}]);return(0,Q.jsx)(Xp,{children:(0,Q.jsxs)(ah,{p:`md`,gap:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`Preventing Multi Props Drilling`}),(0,Q.jsx)(xm,{children:`Please check this source code to see how the looped props undrilling works`}),e.map((e,t)=>(0,Q.jsx)(Ax,{valueFromParent:e,children:(0,Q.jsx)(Nx,{})},t))]})})}function Nx(){return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`This is just the parent container`}),(0,Q.jsx)(Px,{})]})}function Px(){return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`This is just the child container`}),(0,Q.jsx)(Fx,{})]})}function Fx(){let{undrilledObject:e}=jx();return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(Jm,{highlight:`undrilled`,children:`This is the real grand child component that will use the undrilled values`}),(0,Q.jsxs)(fh,{order:6,children:[`Text: `,e.text]}),(0,Q.jsxs)(fh,{order:6,children:[`Value: `,e.value]})]})}function Ix(){return(0,Q.jsx)(Im,{py:`md`,children:(0,Q.jsxs)(ah,{gap:`xl`,children:[(0,Q.jsx)(Xp,{children:(0,Q.jsxs)(ah,{p:`md`,children:[(0,Q.jsx)(fh,{children:`Props Drilling`}),(0,Q.jsx)(Jm,{highlight:`Props Drilling`,children:`Props Drilling is a term to describe the condition where you have a component that create a prop that is not used by the component itself but only getting passed to the child component. While the prop drilling itself doesn't harm the code execution directly, it causes a terrible code maintenance as the code become messy`}),(0,Q.jsx)(xm,{children:`This is the example of props drilling (read the code):`}),(0,Q.jsx)(Lx,{valueForDrilling:2}),(0,Q.jsx)(Jm,{highlight:[`Context`,`Redux`],children:`Context and Redux can be used to prevent the props drilling. Whether to use it depends on the condition:`}),(0,Q.jsxs)(th,{children:[(0,Q.jsx)(th.Item,{children:(0,Q.jsx)(Jm,{highlight:[`Context`,`Redux`,`Locally`,`Globally`],children:`When the props drilling is single value and globally shared value, then better to use Redux`})}),(0,Q.jsx)(th.Item,{children:(0,Q.jsx)(Jm,{highlight:[`Context`,`Redux`,`Locally`,`Globally`],children:`When the props drilling is single value and only locally shared and changing value, then better to use Redux as well if possible, but if for some reason, it's not, then just use Context`})}),(0,Q.jsx)(th.Item,{children:(0,Q.jsx)(Jm,{highlight:[`Context`,`Redux`,`Locally`,`Globally`],children:`When the props drilling is for looped value, then just use Context as Redux can't handle that without another props drilling`})})]}),(0,Q.jsx)(Jm,{highlight:[`Props Drilling`,`Context`],children:`Below here are the example of handling props drilling using Context, I assume you already have the knowledge of handling the 1st and 2nd case above, so here I create the example for the 3rd case. Please read the source code`})]})}),(0,Q.jsx)(Mx,{})]})})}function Lx({valueForDrilling:e}){return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`Parent`}),(0,Q.jsx)(Rx,{valueForDrilling:e})]})}function Rx({valueForDrilling:e}){return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`Child`}),(0,Q.jsx)(zx,{valueForDrilling:e})]})}function zx({valueForDrilling:e}){return(0,Q.jsxs)(Xp,{p:`md`,children:[(0,Q.jsx)(fh,{order:4,children:`Grand Child`}),(0,Q.jsx)(mh,{children:e})]})}var Bx=op({components:{Paper:Xp.extend({defaultProps:{withBorder:!0,shadow:`md`}})}});function Vx(){return(0,Q.jsx)(Bf,{theme:Bx,children:(0,Q.jsx)(K_,{children:(0,Q.jsxs)(o_,{children:[(0,Q.jsx)(i_,{path:`/`,element:(0,Q.jsx)(Ox,{})}),(0,Q.jsx)(i_,{path:`/props-drilling`,element:(0,Q.jsx)(Ix,{})})]})})})}nd({enabled:!0,dangerouslyForceRunInProduction:!0}),(0,g.createRoot)(document.getElementById(`root`)).render((0,Q.jsx)(_.StrictMode,{children:(0,Q.jsx)(Vx,{})}));