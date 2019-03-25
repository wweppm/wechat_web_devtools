!function(e){function t(n){if(o[n])return o[n].exports;var r=o[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,t),r.l=!0,r.exports}var o={};t.m=e,t.c=o,t.d=function(e,o,n){t.o(e,o)||Object.defineProperty(e,o,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,o){if(1&o&&(e=t(e)),8&o)return e;if(4&o&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&o&&"string"!=typeof e)for(var r in e)t.d(n,r,function(t){return e[t]}.bind(null,r));return n},t.n=function(e){var o=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(o,"a",o),o},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=204)}({20:function(e){function t(e){a&&a.readyState===n.OPEN?a.send(JSON.stringify(e)):d.push(e)}var o=window.navigator||window.__global.navigator,n=window.WebSocket||window.__global.WebSocket,r=window.prompt||window.__global.prompt,i=o.userAgent.match(/port\/(\d*)/),s=i?parseInt(i[1]):9974,a=null,c=`ws://127.0.0.1:${s}`,l=null,u=[],d=[],f=0,p=10;const g="GET_MESSAGE_TOKEN";e.exports={connect:function e(o){if(!(f++>=p)){l=o||l;var i=r(g);(a=new n(c,`${l}#${i}#`)).onopen=function(){let e=[].concat(d);d=[],e.forEach(e=>{t(e)})},a.onclose=function(){a=null,setTimeout(()=>{e(o)},1e4)},a.onmessage=function(e){try{!function(e){u.forEach(t=>{try{t.call(this,e)}catch(t){console.error(t)}})}(JSON.parse(e.data))}catch(e){}}}},send:t,registerCallback:e=>{u.push(e)},getWs:()=>a}},204:function(e,t,o){o(29);const n=o(205),r=o(208),i=o(216),s=o(217),a=o(218);-1!==window.__global.navigator.userAgent.indexOf("game")||a(),window.__global.getNewWeixinJSBridge=(e=>{const{invoke:t}=r(e),{publish:o}=i(e),{subscribe:a,triggerSubscribeEvent:c}=s(e),{on:l,triggerOnEvent:u}=n(e);return{invoke:t,publish:o,subscribe:a,on:l,get __triggerOnEvent(){return u},get __triggerSubscribeEvent(){return c}}}),window.WeixinJSBridge=window.__global.WeixinJSBridge=window.__global.getNewWeixinJSBridge("global"),window.__global.WeixinJSBridgeMap={__globalBridge:window.WeixinJSBridge},__devtoolsConfig.online&&__devtoolsConfig.autoTest&&setInterval(()=>{console.clear()},1e4);try{var c=new window.__global.XMLHttpRequest;c.responseType="text",c.open("GET",`http://${window.location.host}/calibration/${Date.now()}`,!0),c.send()}catch(t){}},205:function(e,t,o){e.exports=function(){function e(e,t,o){let n=i[e];"function"==typeof n&&n(t,o)}const t=o(30),n=o(34),r=o(35),i={};return r.on("triggerOnEvent",function(t,o,n){e(t,o,n)}),window.DeviceOrientation=function(t,o,n){e("onAccelerometerChange",{x:t,y:o,z:n})},n.registerCallback(t=>{let{command:o,data:n,webviewID:r}=t;"APPSERVICE_ON_EVENT"===o&&e(n.eventName,n.data,r)}),{on:function(e,o){t.debugLog(`${new Date} WeixinJSBridge on ${e}`,arguments),t.debugInfo({type:"on",eventName:e,data:arguments,timesmap:new Date}),o&&(i[e]=o)},triggerOnEvent:e}}},206:function(e,t,o){const n=o(34),r=()=>void n.send({command:"SYSTEM",data:{api:"build"}});Object.defineProperty(window,"build",{get:()=>(r(),r)});const i=()=>void n.send({command:"SYSTEM",data:{api:"preview"}});Object.defineProperty(window,"preview",{get:()=>(console.log("loading..."),i(),i)});const s=()=>void n.send({command:"SYSTEM",data:{api:"upload"}});Object.defineProperty(window,"upload",{get:()=>(s(),s)}),window.where={am:{}},Object.defineProperty(window.where.am,"i",{get(){console.log("wait a second, I'll check"),setTimeout(()=>{try{wx.getLocation({success:e=>{console.log(`${e.longitude}° ${e.latitude}°`)}})}catch(e){}},1e3)}})},207:function(e){"use strict";function t(){t.init.call(this)}function o(e){return void 0===e._maxListeners?t.defaultMaxListeners:e._maxListeners}function n(e,t,n,r){var i,s,a;if("function"!=typeof n)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof n);if(void 0===(s=e._events)?(s=e._events=Object.create(null),e._eventsCount=0):(void 0!==s.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),s=e._events),a=s[t]),void 0===a)a=s[t]=n,++e._eventsCount;else if("function"==typeof a?a=s[t]=r?[n,a]:[a,n]:r?a.unshift(n):a.push(n),0<(i=o(e))&&a.length>i&&!a.warned){a.warned=!0;var c=new Error("Possible EventEmitter memory leak detected. "+a.length+" "+t+" listeners added. Use emitter.setMaxListeners() to increase limit");c.name="MaxListenersExceededWarning",c.emitter=e,c.type=t,c.count=a.length,function(e){console&&console.warn&&console.warn(e)}(c)}return e}function r(e,t,o){var n={fired:!1,wrapFn:void 0,target:e,type:t,listener:o},r=function(){for(var e=[],t=0;t<arguments.length;t++)e.push(arguments[t]);this.fired||(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,u(this.listener,this.target,e))}.bind(n);return r.listener=o,n.wrapFn=r,r}function i(e,t,o){var n=e._events;if(void 0===n)return[];var r=n[t];return void 0===r?[]:"function"==typeof r?o?[r.listener||r]:[r]:o?function(e){for(var t=Array(e.length),o=0;o<t.length;++o)t[o]=e[o].listener||e[o];return t}(r):a(r,r.length)}function s(e){var t=this._events;if(void 0!==t){var o=t[e];if("function"==typeof o)return 1;if(void 0!==o)return o.length}return 0}function a(e,t){for(var o=Array(t),n=0;n<t;++n)o[n]=e[n];return o}var c,l="object"==typeof Reflect?Reflect:null,u=l&&"function"==typeof l.apply?l.apply:function(e,t,o){return Function.prototype.apply.call(e,t,o)};c=l&&"function"==typeof l.ownKeys?l.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var d=Number.isNaN||function(e){return e!=e};e.exports=t,t.EventEmitter=t,t.prototype._events=void 0,t.prototype._eventsCount=0,t.prototype._maxListeners=void 0;var f=10;Object.defineProperty(t,"defaultMaxListeners",{enumerable:!0,get:function(){return f},set:function(e){if("number"!=typeof e||0>e||d(e))throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");f=e}}),t.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},t.prototype.setMaxListeners=function(e){if("number"!=typeof e||0>e||d(e))throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},t.prototype.getMaxListeners=function(){return o(this)},t.prototype.emit=function(e){for(var t=[],o=1;o<arguments.length;o++)t.push(arguments[o]);var n="error"===e,r=this._events;if(void 0!==r)n=n&&void 0===r.error;else if(!n)return!1;if(n){var i;if(0<t.length&&(i=t[0]),i instanceof Error)throw i;var s=new Error("Unhandled error."+(i?" ("+i.message+")":""));throw s.context=i,s}var c=r[e];if(void 0===c)return!1;if("function"==typeof c)u(c,this,t);else{var l=c.length,d=a(c,l);for(o=0;o<l;++o)u(d[o],this,t)}return!0},t.prototype.addListener=function(e,t){return n(this,e,t,!1)},t.prototype.on=t.prototype.addListener,t.prototype.prependListener=function(e,t){return n(this,e,t,!0)},t.prototype.once=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.on(e,r(this,e,t)),this},t.prototype.prependOnceListener=function(e,t){if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);return this.prependListener(e,r(this,e,t)),this},t.prototype.removeListener=function(e,t){var o,n,r,i,s;if("function"!=typeof t)throw new TypeError('The "listener" argument must be of type Function. Received type '+typeof t);if(void 0===(n=this._events))return this;if(void 0===(o=n[e]))return this;if(o===t||o.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete n[e],n.removeListener&&this.emit("removeListener",e,o.listener||t));else if("function"!=typeof o){for(r=-1,i=o.length-1;0<=i;i--)if(o[i]===t||o[i].listener===t){s=o[i].listener,r=i;break}if(0>r)return this;0===r?o.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(o,r),1===o.length&&(n[e]=o[0]),void 0!==n.removeListener&&this.emit("removeListener",e,s||t)}return this},t.prototype.off=t.prototype.removeListener,t.prototype.removeAllListeners=function(e){var t,o,n;if(void 0===(o=this._events))return this;if(void 0===o.removeListener)return 0===arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==o[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete o[e]),this;if(0===arguments.length){var r,i=Object.keys(o);for(n=0;n<i.length;++n)"removeListener"===(r=i[n])||this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=o[e]))this.removeListener(e,t);else if(void 0!==t)for(n=t.length-1;0<=n;n--)this.removeListener(e,t[n]);return this},t.prototype.listeners=function(e){return i(this,e,!0)},t.prototype.rawListeners=function(e){return i(this,e,!1)},t.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):s.call(e,t)},t.prototype.listenerCount=s,t.prototype.eventNames=function(){return 0<this._eventsCount?c(this._events):[]}},208:function(e,t,o){e.exports=function(){function e(e){if(e&&e.__cover){for(let t in e.__cover)"base64"==t&&(e[e.__cover[t]]=u(e.base64),delete e.base64);delete e.__cover}}const t=o(30),n=o(46),r=(o(35),o(34)),i=o(47),s=o(209),a=o(213),c=o(214),l=o(215),{base64ToArrayBuffer:u,arrayBufferToBase64:d}=o(30),{isSyncSDK:f,needTransArgsBase64Api:p}=o(29);let g={},w=1;return r.registerCallback(t=>{let{command:o,data:n}=t;if("APPSERVICE_INVOKE_CALLBACK"===o){let t=n.callbackID,o=g[t];e(n.res),"function"==typeof o&&o(n.res),delete g[t]}}),{invoke:function(o,u,h){if(p[o])for(let e in u)u[e]instanceof ArrayBuffer&&(u[e]=d(u[e]));if(t.debugLog(`${new Date} WeixinJSBridge invoke ${o}`,arguments),t.debugInfo({type:"invoke",eventName:o,data:arguments,timesmap:new Date}),a[o])for(let e in u)a[o].is(u[e])&&(u[e]=a[o].trans(u,u[e]));if(c[o]&&c[o](u),n.check.apply(this,arguments))return;let y=f(o),v=function(){"function"==typeof h&&(y?h.apply(h,arguments):setTimeout(()=>{h.apply(h,arguments)},0))};if((!i[o]||i[o].apply(this,arguments))&&(!l[o]||(u=l[o].apply(this,arguments))))if(s[o])s[o](o,u,v);else{let t=w++;if(y){let n={command:"APPSERVICE_INVOKE",data:{api:o,args:u,callbackID:t}},r=`____sdk____${JSON.stringify(n)}`,i=window.__global.prompt(r);e(i=JSON.parse(i)),delete i.to,v(i)}else g[t]=v,r.send({command:"APPSERVICE_INVOKE",data:{api:o,args:u,callbackID:t}})}}}}},209:function(e,t,o){const n=o(210),r=o(211),i=o(212);e.exports=Object.assign({},n,r,i)},210:function(e,t,o){function n(e,t){let{origin:o,fullPath:n,tls:r}=e;console.group(`${new Date} wx.request 错误`),console.error(`${o} 对应的服务器 TLS 为 ${r} ，小程序要求的 TLS 版本必须大于等于 1.2 。控制台输入 showRequestInfo() 可以获取更详细信息。`),console.groupEnd(),t&&t({errMsg:"request:fail 小程序要求的 TLS 版本必须大于等于 1.2"})}function r(e,t){let{origin:o,fullPath:n,tls:r}=e;console.group(`${new Date} wx.request 错误`),console.error(`${o} 对应的服务器证书无效。控制台输入 showRequestInfo() 可以获取更详细信息。`),console.groupEnd(),t&&t({errMsg:"request:fail 对应的服务器证书无效。"})}const i=o(35),{getSecuryDetailsByURL:s,parseURL:a}=o(62),{MaxRequestConcurrent:c,urlCheckErrReason:l,DevtoolsConfig:u}=o(29),{checkUrl:d}=o(47),f="undefined"!=typeof __devtoolsConfig&&__devtoolsConfig&&__devtoolsConfig.libNumberVersion||999999999;let p={},g=1,w=0;const h=(e,t,o,a)=>{const u=e=>{setTimeout(()=>{w--,"function"==typeof o&&o(e)})};if(++w>c)return console.group(`${new Date} request 错误`),console.error(`同时最多发起 ${c} 个 request 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`),console.groupEnd(),void u({errMsg:`${e}:fail exceed max task count`});let{url:p,responseType:g,__skipDomainCheck__:h}=t;if(!h&&!d(p))return void u({errMsg:`${e}:fail ${l}`});var y=t.method||"POST";if(0>["OPTIONS","GET","HEAD","POST","PUT","DELETE","TRACE","CONNECT"].indexOf(y))return void u({errMsg:`${e}:fail method is invalid`});let _=s(p);if(_.isReady){if(!_.isSecuryTLS)return void n(_,u);if(!_.isSecuryCertificate)return void r(_,u)}var b=t.header||{},k=new window.__global.XMLHttpRequest;k.responseType=g||"text",k.timeout=t.timeout||__wxConfig.networkTimeout&&__wxConfig.networkTimeout.request||6e4,k.open(y,t.url,!0),k.onreadystatechange=(()=>{if(k.readyState==(k.HEADERS_RECEIVED||2))try{let e={};try{e=JSON.parse(k.getResponseHeader("for-weapp-devtools"))}catch(t){}"function"==typeof a&&1009093<=f&&a({state:"headersReceived",header:m(e||{},","),cookies:v(e||{})})}catch(t){console.error(t)}if(k.readyState,4==k.readyState){k.onreadystatechange=null;var t=k.status;if(0==t);else{function o(o){if(o.isSecuryTLS)if(o.isSecuryCertificate)if(!k.responseURL||h||d(k.responseURL)){let o={errMsg:`${e}:ok`,header:m(c||{},","),cookies:v(c||{}),statusCode:t};o.data="arraybuffer"===g?k.response:k.responseText,u(o)}else u({errMsg:`${e}:fail ${l}`});else r(o,u);else n(o,u)}let a=s(p),c={};try{c=JSON.parse(k.getResponseHeader("for-weapp-devtools"))}catch(t){}a.isReady?o(a):i.once(`TLS_CHECK_READY_${a.id}`,o)}}}),k.onerror=(()=>{u({errMsg:`${e}:fail`})}),k.ontimeout=(()=>{u({errMsg:`${e}:fail timeout`})}),k.onabort=(()=>{u({errMsg:`${e}:fail abort`})});let S=0;for(let e in b)"content-type"===e.toLowerCase()&&S++;2<=S&&delete b["content-type"];let C=!1;for(var T in b)if(b.hasOwnProperty(T)){let e=T.toLowerCase();C="content-type"==e||C,"cookie"===e?k.setRequestHeader("_Cookie",b[T]):k.setRequestHeader(T,b[T])}"POST"!=y||C||k.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");let E=t.data;try{k.send(E)}catch(t){u({errMsg:`${e}:fail`})}return k},y=(e="")=>e,v=e=>{const t=[];for(const o in e)if("set-cookie"===o.toLowerCase()){const n=e[o],r=Object.prototype.toString.call(n);if("[object String]"===r){t.push(y(n.trim()));continue}if("[object Array]"===r){for(const e of n)t.push(y(e.trim()));continue}}return t},m=(e,t)=>{const o={};for(const n in e){const r=Object.prototype.toString.call(e[n]);o[n]="[object Array]"===r?e[n].join(t):e[n]}return o};e.exports={request:h,createRequestTask:(e,t,o=(()=>{}))=>{let n={id:g++,url:t.url,data:t.data,header:t.header,method:t.method,callback:(e,t)=>{let o={};o=0===t.errMsg.indexOf("request:ok")?{requestTaskId:e,state:"success",data:t.data,header:t.header,statusCode:t.statusCode,cookies:t.cookies}:{requestTaskId:e,state:"fail",errMsg:t.errMsg.replace(/^request:fail ?/,"")},delete p[e],i.emit("triggerOnEvent","onRequestTaskStateChange",o)}};o({errMsg:`${e}:ok`,requestTaskId:n.id}),p[n.id]=n,n.xhr=h("request",t,n.callback.bind(void 0,n.id),function(e){i.emit("triggerOnEvent","onRequestTaskStateChange",Object.assign({},e,{requestTaskId:n.id}))})},operateRequestTask:(e,t,o)=>{let n=t.requestTaskId,r=t.operationType,i=p[n];if(!i)return o({errMsg:`${e}:fail task not found`});if("abort"!==r)return o({errMsg:`${e}:fail illegal operationType`});try{i.xhr.abort(),o({errMsg:`${e}:ok`})}catch(n){o({errMsg:`${e}:fail ${n}`})}}}},211:function(e){const t={0:"log",1:"info",2:"warn",3:"error"};e.exports={reportKeyValue:(e,t,o)=>{o({errMsg:`${e}:ok`})},reportIDKey:(e,t,o)=>{o({errMsg:`${e}:ok`})},log:(e,o)=>{(o.dataArray||[]).forEach(e=>{let o=t[e.level];o&&e.msg&&console[o](e.msg)})}}},212:function(e,t,o){function n(e){(window.alert?window.alert:window.__global.alert)(`SET_SOCKET_HEADER:${JSON.stringify(e)}`)}function r(e){console.group(`${new Date} 无网络状态模拟`),console.error(`已开启无网络状态模拟，网络请求 ${e} 已被阻止；在模拟器工具栏切换网络状态，可恢复网络请求。`),console.groupEnd()}const i=o(35),{getSecuryDetailsByURL:s,parseURL:a}=o(62),{MaxWebsocketConnect:c,urlCheckErrReason:l,DevtoolsConfig:u}=o(29),{checkUrl:d}=o(47),f="未完成的操作";let p={},g=1;var w=window.__global.WebSocket;const h={1000:"normal closure",1001:"going away",1002:"protocol error",1003:"unsupported data",1004:"reserved",1005:"no status rcvd",1006:"abnormal closure",1007:"invalid frame payload data",1008:"policy violation",1009:"message too big",1010:"mandatory ext.",1011:"internal server error",1015:"tls handshake"};let y=null;window.addEventListener("networkChange",e=>{if(u.networkStatus=e.detail.networkStatus,"none"==u.networkStatus)for(let e in y&&(y.close(),y=null),p){let t=p[e].socket;t&&t.close()}}),e.exports={connectSocket:(e,t,o=(()=>{}))=>{let{url:s,header:a}=t;if("none"==u.networkStatus)return r(s),void o({errMsg:`${e}:fail network is down`});if(d(s,"socket"))if(a&&0<Object.keys(a).length&&n(a),!y||y.readyState!=w.OPEN&&y.readyState!=w.CONNECTING){try{y=new w(s,t.protocols||[])}catch(e){i.emit("triggerOnEvent","onSocketError",{errMsg:f}),y=null}y.binaryType="arraybuffer",y.onopen=function(){i.emit("triggerOnEvent","onSocketOpen",{})},y.onmessage=function(e){i.emit("triggerOnEvent","onSocketMessage",{data:e.data})},y.onclose=function(e){i.emit("triggerOnEvent","onSocketClose",{code:e.code,reason:e.reason||h[e.code]||""}),y=null},y.onerror=function(){i.emit("triggerOnEvent","onSocketError",{errMsg:f}),y=null},o({errMsg:"connectSocket:ok"})}else o({errMsg:"connectSocket:fail websocket is connected"});else o({errMsg:`connectSocket:fail ${l}`})},sendSocketMessage:(e,t,o)=>{let n=t.data,r="fail";if(y)try{y.readyState==w.OPEN?(y.send(n),r="ok"):r="fail webSocket is not connected"}catch(t){r=`fail ${t.message}`}o&&o({errMsg:`${e}:${r}`})},closeSocket:(e,t,o)=>{if(y)try{y.close(t.code,t.reason),y=null,o&&o({errMsg:"closeSocket:ok"})}catch(t){o&&o({errMsg:`closeSocket:fail ${t}`})}else o&&o({errMsg:"closeSocket:fail"})},createSocketTask:(e,t,o=(()=>{}))=>{let s=Object.keys(p).length,{url:a,header:y,protocols:v,__skipDomainCheck__:m}=t,_=g++,b={socketTaskId:_,url:a,protocols:v,header:y};if(o({socketTaskId:_,errMsg:`${e}:ok`}),s>=c)return void setTimeout(()=>{console.group(`${new Date} websocket 错误`),console.error(`同时最多发起 ${c} 个 socket 请求，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`),console.groupEnd(),i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:"exceed max task count"})});if("none"==u.networkStatus)return void setTimeout(()=>{r(a),i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:"network is down"})});if(!m&&!d(a,"socket"))return void setTimeout(()=>{i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:l})});p[_]=b,y&&0<Object.keys(y).length&&n(y);const k=__wxConfig.networkTimeout&&__wxConfig.networkTimeout.connectSocket||6e4;let S;try{S=new w(a,t.protocols||[])}catch(e){if(C)return;i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:f}),delete p[_]}let C=!1;const T=setTimeout(()=>{C=!0,i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:"Timed out connecting to server."}),delete p[_],S.close()},k);S.binaryType="arraybuffer",S.onopen=function(){clearTimeout(T),i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"open"})},S.onmessage=function(e){if(!C){let t=e.data;i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,data:t,state:"message"})}},S.onclose=function(e){C||(i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"close",code:e.code,reason:e.reason||h[e.code]||""}),delete p[_])},S.onerror=function(){C||(i.emit("triggerOnEvent","onSocketTaskStateChange",{socketTaskId:_,state:"error",errMsg:f}),delete p[_])},b.socket=S},operateSocketTask:(e,t,o)=>{let{socketTaskId:n,operationType:r,code:i,reason:s,data:a}=t,c=p[n];if(!c)return o({errMsg:`${e}:fail task not found`});if("send"!==r){if("close"===r)try{c.socket.close(t.code,t.reason),o({errMsg:`${e}:ok`})}catch(n){o({errMsg:`${e}:fail ${n.message}`})}}else try{c.socket.readyState==w.OPEN?(c.socket.send(a),o({errMsg:`${e}:ok`})):o({errMsg:`${e}:fail webSocket is not connected`})}catch(n){o({errMsg:`${e}:fail ${n.message}`})}}}},213:function(e,t,o){const{arrayBufferToBase64:n}=o(30);e.exports={writeFile:{is:e=>e instanceof ArrayBuffer,trans:(e,t)=>(e.__dataisab=!0,n(t))},writeFileSync:{is:e=>e instanceof ArrayBuffer,trans:(e,t)=>(e.__dataisab=!0,n(t))}}},214:function(e,t,o){const{canNotReadFromCodePackage:n}=o(29);e.exports={readFile:e=>{let{filePath:t}=e;if(0!==t.indexOf(__wxConfig.env.LOCAL_PROTOCOL)){let e=t.split("."),o=1<e.length?e[e.length-1]:"";o&&n[o]&&(console.group(`${new Date} 读取文件失败`),console.info(`无法读取 ${t} 文件，该文件经过编译后在移动设备上不存在`),console.groupEnd())}}}},215:function(e){const t=window.__global.navigator.userAgent,o=(e,o,n)=>{if(!/gameservice/.test(t))return o;const r=o.canvasId,i=()=>{n({errMsg:`${e}:fail canvas not found`})};if(!r)return void(/Sync$/.test(e)?i():setTimeout(i));const{x:s=0,y:a=0,width:c=r.width,height:l=r.height,destWidth:u=r.width,destHeight:d=r.height,fileType:f="png"}=o,p=window.__global.document.createElement("canvas");Object.setPrototypeOf(p,window.__global.canvasProto),p.width=u,p.height=d;const g=p.getContext("2d");Object.setPrototypeOf(g,window.__global.canvas2dContextProto),g.drawImage(r,s,a,c,l,0,0,u,d);const w="jpg"==f?"image/jpeg":"image/png",h=isNaN(o.quality)?1:0<o.quality&&1>=o.quality?o.quality:1;return{dataURL:p.toDataURL(w,h).replace(/^data:image\/(jpg|png);base64,/,""),fileType:f}};e.exports={canvasToTempFilePath:o,canvasToTempFilePathSync:o}},216:function(e,t,o){e.exports=function(){function e(e,o,s,a){if(t.debugLog(`${new Date} WeixinJSBridge publish ${e}`,arguments),o&&0!==e.indexOf("canvas")){let t=JSON.stringify(o).length;if(t>r)return console.group(`${new Date} 数据传输错误`),console.error(`${e} 数据传输长度为 ${t} 已经超过最大长度 ${r}`),void console.groupEnd()}t.debugInfo({type:"publish",eventName:e,data:arguments,timesmap:new Date}),"appDataChange"!==e&&"pageInitData"!==e&&"__updateAppData"!==e||a||n.send({command:"SEND_APP_DATA",data:__wxAppData}),"invokeWebviewMethod"===e&&o&&o.data&&"appDataChange"==o.data.name&&(i&&n.send({command:"SEND_APP_DATA",data:__wxAppData}),i=!0),("vdSync"===e||"vdSyncBatch"===e)&&(i&&n.send({command:"SEND_APP_DATA",data:__wxAppData}),i=!0),n.send({command:"APPSERVICE_PUBLISH",data:{eventName:e,data:o,webviewIds:s}})}const t=o(30),n=o(34),{AppserviceMaxDataSize:r}=o(29);var i=!0;return n.registerCallback(t=>{let{command:o,data:r,fromWebviewID:s}=t;if("WRITE_APP_DATA"===o){let t={};const o=getCurrentPages();for(let n in o.forEach(e=>{t[e.__route__||e.route]=e}),r){let o=r[n],s=o.__webviewId__;for(var a in t[n]&&"function"==typeof t[n].setData?(i=!1,t[n].setData(o)):wx&&wx.invokeWebviewMethod?(i=!1,wx.invokeWebviewMethod({name:"appDataChange",args:{data:o}})):e("appDataChange",{data:{data:o}},[s],!0),Object.assign(__wxAppData[n],o),__wxAppData[n])null==o[a]&&delete __wxAppData[n][a]}}else"GET_APP_DATA"===o&&n.send({command:"SEND_APP_DATA",data:__wxAppData})}),{publish:e}}},217:function(e,t,o){e.exports=function(){function e(e,t,o){let n=i[e];"function"==typeof n&&n(t,o)}const t=o(30),n=o(35),r=o(34);var i={};return n.on("triggerSubscribeEvent",(t,o)=>{e(t,o)}),r.registerCallback(t=>{let{command:o,data:n,fromWebviewID:r}=t;"WEBVIEW_PUBLISH"===o&&e(n.eventName,n.data,r)}),{subscribe:function(e,o){t.debugLog(`${new Date} WeixinJSBridge subscribe`,arguments),t.debugInfo({type:"subscribe",eventName:e,data:arguments,timesmap:new Date}),i[e]=o},triggerSubscribeEvent:e}}},218:function(e){e.exports=function(){if(["Caches","screen","performance ","getComputedStyle","openDatabase","btoa","Image"].forEach(e=>{delete window[e]}),window.chrome=void 0,"complete"==window.__global.document.readyState)window.__global.history.replaceState({},{},`${location.href}?load`);else{const e=()=>{window.__global.history.replaceState({},{},`${location.href}?load`),window.__global.removeEventListener("load",e)};window.__global.addEventListener("load",e)}}},29:function(e){window.__devtoolsConfig=window.__devtoolsConfig||{setting:{}},window.__wxConfig=window.__wxConfig||{};const t={getSystemInfo:!0,getBatteryInfo:!0,getBackgroundAudioState:!0,setBackgroundAudioState:!0,operateBackgroundAudio:!0,createRequestTask:!0,createUploadTask:!0,createDownloadTask:!0,createSocketTask:!0,operateSocketTask:!0,createAudioInstance:!0,unlink:!0,createLoadSubPackageTask:!0,getMenuButtonBoundingClientRect:!0,getPermissionBytes:!0};let o=__devtoolsConfig,n=__devtoolsConfig.network||{},r=__devtoolsConfig.permission,i=__devtoolsConfig.setting&&__devtoolsConfig.setting.MaxDataSize||1048576,s=__devtoolsConfig.setting&&__devtoolsConfig.setting.MaxRequestConcurrent||10,a=__devtoolsConfig.setting&&__devtoolsConfig.setting.MaxWebsocketConnect||10;e.exports={syncSDKList:t,isSyncSDK:function(e){return!!t[e]||/Sync$/.test(e)},DevtoolsConfig:o,NetworkConfig:n,Permission:r,AppserviceMaxDataSize:i,MaxRequestConcurrent:s,MaxWebsocketConnect:a,urlCheckErrReason:"url not in domain list",needTransArgsBase64Api:{encodeArrayBufferSync:!0,decodeArrayBufferSync:!0},canNotReadFromCodePackage:{js:!0,wxss:!0,wxml:!0}}},30:function(e,t,o){var n=this;const r=o(34);o(206);let i=!1,s=[];r.registerCallback(e=>{let{command:t,data:o}=e;"SYSTEM_CALLBACK"===t&&function(e,t){switch(e){case"showSystemInfo":{let e=t.memory,o=t.restartInfo,n=o.restartTimes;console.group(`${new Date} 工具系统信息`),console.info(`${o.beginTime} 启动工具，执行编译 ${n} 次， 当前内存占用 ${e.toFixed(2)}m`),console.table(t.info),console.groupEnd();break}case"checkProxy":console.group(`${new Date} 代理信息`),console.table(t),console.groupEnd();break;case"showDecryptedInfo":console.group(`${new Date} 加解密信息`),console.table(t),console.groupEnd()}}(o.api,o.data)}),window.showDebugInfo=((e,t)=>{let o=s.filter(o=>{let n=!e||(Array.isArray(e)?e.includes(o.type):o.type===e),r=!t||(Array.isArray(t)?t.includes(o.eventName):o.eventName===t);if(n&&r)return o});console.group("showDebugInfo"),o.forEach(e=>{console.group(`${e.timesmap} WeixinJSBridge ${e.type} ${e.eventName}`),console.debug.apply(window,e.data),console.groupEnd()}),console.groupEnd(),i=!0});const a=()=>(console.clear(),void(i=!1));Object.defineProperty(window,"closeDebug",{get:()=>(a(),a)});const c=()=>void console.table(s);Object.defineProperty(window,"showDebugInfoTable",{get:()=>(c(),c)});const l=()=>void console.table([{fun:"build","arg[0]":"","arg[1]":"",example:"build",description:"build / reload"},{fun:"preview","arg[0]":"","arg[1]":"",example:"preview",description:"preview with QR code"},{fun:"upload","arg[0]":"","arg[1]":"",example:"upload",description:"upload the app"},{fun:"showDebugInfo","arg[0]":"type -- String || Array; publish on subscribe invoke GetMsg","arg[1]":"eventName -- String || Array;",example:'showDebugInfo() showDebugInfo("publish") showDebugInfo(["publish", "invoke"], "onAppRoute")',description:"open tools logs"},{fun:"closeDebug"},{fun:"showDebugInfoTable"},{fun:"openToolsLog","arg[0]":"","arg[1]":"",example:"openVendor",description:"open log folder"},{fun:"openPlugin","arg[0]":"","arg[1]":"",example:"openPlugin",description:"open plugin folder"},{fun:"openVendor","arg[0]":"","arg[1]":"",example:"openVendor",description:"open vendor folder"},{fun:"showRequestInfo","arg[0]":"","arg[1]":"",example:"showRequestInfo",description:"show request info"},{fun:"showSystemInfo","arg[0]":"","arg[1]":"",example:"showSystemInfo",description:"show tools info"},{fun:"checkProxy","arg[0]":"type -- String; url",example:'checkProxy("http://www.qq.com")',description:"checkProxy of the input url"},{fun:"showDecryptedInfo","arg[0]":"",example:"showDecryptedInfo",description:"show API decrypted info"}]);Object.defineProperty(window,"help",{get:()=>(l(),l)});const u=()=>(()=>{let e={};for(let t in window.securityDetails)if(0!==t.indexOf(`http://${__wxConfig.apphash}`)){let o=window.securityDetails[t];delete o.id,delete o.command,delete o.isReady,delete o.url,e[t]=o}console.table(e)})();Object.defineProperty(window,"showRequestInfo",{get:()=>(u(),u)});const d=(e,t)=>{r.send({command:"SYSTEM",data:{api:e,data:t}})},f=()=>d("openToolsLog");Object.defineProperty(window,"openToolsLog",{get:()=>(f(),f)});const p=()=>d("openPlugin");Object.defineProperty(window,"openPlugin",{get:()=>(p(),p)});const g=()=>d("openVendor");Object.defineProperty(window,"openVendor",{get:()=>(g(),g)});Object.defineProperty(window,"showSystemInfo",{get:()=>(console.log("loading..."),(()=>d("showSystemInfo"))(),()=>{})}),window.checkProxy=function(e){return"string"==typeof e?(console.log("checking..."),void d("checkProxy",e)):console.log("param should be string")};const w=()=>d("syncMessage");Object.defineProperty(window,"syncMessage",{get:()=>(w(),w)});const h=()=>void r.send({command:"SYSTEM",data:{api:"showDecryptedInfo"}});Object.defineProperty(window,"showDecryptedInfo",{get:()=>(h(),h)}),e.exports={debugLog:(e,t)=>{i&&(console.group(e),console.debug.apply(n,t),console.groupEnd(e))},debugInfo:e=>{i||(s.length>100&&(s=[]),s.push(e))},isDev:()=>i,base64ToArrayBuffer:function(e){let t=window.__global.atob(e),o=t.length,n=new Uint8Array(o);for(let e=0;e<o;e++)n[e]=t.charCodeAt(e);return n.buffer},arrayBufferToBase64:function(e){let t="",o=new Uint8Array(e),n=o.byteLength;for(let e=0;e<n;e++)t+=String.fromCharCode(o[e]);return window.__global.btoa(t)},escapeQuot:function(e,t="`"){return e?"`"===t?e.replace(/\\/g,"\\\\").replace(/`/g,"\\`").replace(/\$/g,"\\$"):'"'===t?e.replace(/\\/g,"\\\\").replace(/\r\n/g,"\n").replace(/\n/g,"\\n").replace(/"/g,'\\"'):"'"===t?e.replace(/\\/g,"\\\\").replace(/\r\n/g,"\n").replace(/\n/g,"\\n").replace(/'/g,"\\'"):void 0:e}}},34:function(e,t,o){function n(){let e="APPSERVICE";/widgetservice/.test(r)?e="WIDGETSERVICE":/gameservice/.test(r)&&(e="GAMESERVICE",i.registerCallback(e=>{let{command:t,data:o}=e;if("SET_CANVAS"===t){let e=window.__global.document.getElementById("myCanvas");e.setAttribute("width",o.width),e.setAttribute("height",o.height),e.setAttribute("style",o.style)}})),i.connect(e)}const r=window.__global.navigator.userAgent,i=o(20);"complete"==window.__global.document.readyState?n():window.__global.addEventListener("load",()=>{n()}),e.exports={send:i.send,registerCallback:i.registerCallback}},35:function(e,t,o){const n=o(207).EventEmitter;e.exports=new n},46:function(e){const t=()=>"touristappid"==__devtoolsConfig.appid,o=t()?Object.assign(__devtoolsConfig.userInfo):{};delete __devtoolsConfig.userInfo;const n={login:(e,t,o)=>{o({errMsg:"login:ok",code:"the code is a mock one"})},authorize:(e,t,o)=>{o({errMsg:"authorize:fail"})},operateWXData:(e,t,n)=>{n({errMsg:"operateWXData:ok",data:{data:JSON.stringify({nickName:o.nickName,avatarUrl:o.headUrl,gender:"male"===o.sex?1:2,province:o.province,city:o.city,country:o.country})}})},openSetting:(e,t,o)=>{o({errMsg:"openSetting:ok",authSetting:[{scope:"scope.userInfo",state:1}]})}};e.exports={isTourist:t,fake:n,check:function(e){return t()&&n.hasOwnProperty(e)&&(console.group(`${new Date} 无 AppID 关联`),console.warn(`请注意无 AppID 关联下，调用 wx.${e} 是受限的, API 的返回是工具的模拟返回`),console.groupEnd(),setTimeout(()=>{n[e].apply(this,arguments)}),!0)}}},47:function(e,t,o){function n(e,t="request"){if(r.isTourist())return d&&(console.group(`${new Date} 无 AppID 关联`),console.warn("工具未检查合法域名，更多请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html"),console.groupEnd(),d=!1),!0;if(!__devtoolsConfig.urlCheck)return __disPlayURLCheckWarning&&(console.group(`${new Date} 配置中关闭合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书检查`),console.warn("工具未校验合法域名、web-view（业务域名）、TLS 版本以及 HTTPS 证书。"),console.groupEnd(),__disPlayURLCheckWarning=!1),!0;if(!e)return!1;if(/(\?|&)skip_domain_check=true(&|$)/.test(e))return!0;if(["request","downloadFile","uploadFile","socket"].includes(t)&&function(e){const t=/^(?:http|ws)s?:\/\/((?:\d{1,3}\.){3}\d{1,3})(?::\d{1,5})?/i.exec(e);if(t){const e=t[1];return e===__devtoolsConfig.localhostIp}return!1}(e))return setTimeout(()=>{console.error("Cannot send network request to localhost.")}),!1;if(!(e=f.exec(e.toLowerCase())))return!1;if(e=e[0],/^http:\/\/(tmp|usr|store)\/?$/gi.test(e))return!0;try{let o=[];o="downloadFile"===t?s.download:"uploadFile"===t?s.upload:"socket"===t?s.socket:s.request;for(let n=0;n<o.length;n++){let r=o[n],i=f.exec(r.toLowerCase());if(i&&i[0]==e)return!0;if("socket"==t&&l.setting.WebsocketSkipPortCheck){if(new RegExp(`^${r}(:\\d+)?$`).test(e))return!0}}let n=[];o.forEach(e=>{n.push([e])}),console.group(`${new Date} ${t} 合法域名校验出错`),console.info("如若已在管理后台更新域名配置，请刷新项目配置后重新编译项目，操作路径：“详情-域名信息”"),console.error(` ${u(e,"`")} 不在以下 ${t} 合法域名列表中，请参考文档：https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html`),console.table(n),console.groupEnd()}catch(t){return console.error(t),!1}}const r=o(46),{MaxRequestConcurrent:i,NetworkConfig:s,appconfig:a,urlCheckErrReason:c,DevtoolsConfig:l}=o(29),{escapeQuot:u}=o(30);window.__disPlayURLCheckWarning=!0;var d=!0,f=/^(http|ws)s?:\/\/[\w-.]+(:\d+)?/i;e.exports={downloadFile:function(e,t,o){return!!n(t.url,"downloadFile")||(o({errMsg:`${e}:fail ${c}`}),!1)},uploadFile:function(e,t,o){return!!n(t.url,"uploadFile")||(o({errMsg:`${e}:fail ${c}`}),!1)},checkUrl:n,createUploadTask:function(e,t,o){return t.__skipDomainCheck__||n(t.url,"uploadFile")||(o({errMsg:`${e}:fail ${c}`}),!1)},createDownloadTask:function(e,t,o){return t.__skipDomainCheck__||n(t.url,"downloadFile")||(o({errMsg:`${e}:fail ${c}`}),!1)},operateWXData:function(e,t){return t.data&&"webapi_getuserinfo"==t.data.api_name&&!t.data.from_component&&(console.group(`${new Date} 接口调整`),console.warn("获取 wx.getUserInfo 接口后续将不再出现授权弹窗，请注意升级\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01"),console.groupEnd()),!0},authorize:function(e,t){return"scope.userInfo"==t.scope&&(console.group(`${new Date} 接口调整`),console.error('wx.authorize({scope: "scope.userInfo"}) 不会出现授权弹窗，请使用 <button open-type="getUserInfo />\n参考文档: https://developers.weixin.qq.com/blogdetail?action=get_post_info&lang=zh_CN&token=1650183953&docid=0000a26e1aca6012e896a517556c01'),console.groupEnd()),!0}}},62:function(e,t,o){function n(e){let t=__global.document.createElement("a");return t.href=e,{protocol:t.protocol,origin:t.origin,fullPath:`${t.origin}/${t.pathname}`}}const r=o(46),i=o(35);var s=window.securityDetails={"https://servicewechat.com":{isSecuryTLS:!0,securityState:"secure",isReady:!0,isSecuryCertificate:!0,tls:"TLS 1.2"}},a=1e4;window.setSecurityDetails=function(e,t){let{origin:o}=n(e);t=JSON.parse(t),s[o]||(s[o]={});let{protocol:r,securityState:a}=t,c=!1;r&&(c=1.2<=parseFloat(r.replace("TLS ",""))),s[o].isSecuryTLS=c,s[o].tls=r,s[o].securityState=a,s[o].isSecuryCertificate="insecure"!==a,s[o].isReady=!0,s[o].remoteAddress=t.remoteAddress,s[o].statusCode=t.statusCode;let l=s[o].id;i.emit(`TLS_CHECK_READY_${l}`,s[o])},e.exports={securityDetails:s,getSecuryDetailsByURL:function(e){let{protocol:t,origin:o,fullPath:i}=n(e),c=s[o];return r.isTourist()||!__devtoolsConfig.urlCheck||"https:"!==t?(c={isReady:!0,isSecuryTLS:!0,isSecuryCertificate:!0},s[o]=c,c):c||(c={isReady:!1,id:a++,tls:"",isSecuryTLS:!1,securityState:"",isSecuryCertificate:!1,protocol:t,origin:o,fullPath:i,url:e},s[o]=c,c)},parseURL:n}}});