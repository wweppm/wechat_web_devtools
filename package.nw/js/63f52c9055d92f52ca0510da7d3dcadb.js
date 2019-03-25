'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){async function a(a,b,f,h,i={}){const j=i.onProgressUpdate||C,k=async(c)=>{const e=(await m(a,c,{noWarnings:!0}))||'',f=v(d.join(b,decodeURI(c)),e,{inlineSources:!0}),g='object'==typeof f?JSON.stringify(f):'';return g?e.replace(/^\/\/[#|@] sourceMappingURL=[\s]*(\S*)[\s]*$/m,`\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,${new Buffer(g).toString('base64')}`):e},l='weapp:///',n=await t(a),o=d.join(b,'app.json');let A=e.readFileSync(o,'utf8');if(!n.pages)throw new Error('no pages defined.');let B=n.pages.map((a)=>a+'.js'),D=[];const E=await s.getProjectFiles(a),F=await E.getAllJSONFiles();for(let c=0,e=F.length;c<e;c++){const b=F[c].replace(/\.json$/,'');if(d.normalize(b)!=d.normalize('app'))try{const c=await p(a,b);c&&!0===c.component&&D.push(b)}catch(a){console.error(a);continue}}const G=[],H=[];if(n.subPackages){const b=[];for(const e of n.subPackages){if(!e||!e.root||!e.pages)continue;e.root=e.root.replace(/\\/g,'/'),e.root=e.root.startsWith('/')?e.root.slice(1):e.root,e.root=e.root.endsWith('/')?e.root:e.root+'/';const c=e.pages.map((a)=>d.posix.join(e.root,a));b.push(...c.map((a)=>a+'.js'));const f=D.filter((a)=>a.startsWith(e.root)),g=await r(a,{page:e.root,cut:!0});G.push(g.code);for(const b of[...f,...c]){const c=b,d=c.replace(/\"/g,'\\"').replace(/`/g,'\\`');let e={};try{e=await w(a,c)}catch(a){e={}}H.push(`
          __wxAppCode__["${d}.wxml"] = ${g.name}("./${d}.wxml")
          __wxAppCode__["${d}.json"] = ${JSON.stringify(e)}
        `)}}B=[...B,...b]}0<D.length&&(D=D.map((a)=>a+'.js')),B=B.filter((a)=>0>D.findIndex((b)=>b===a));const I=g.sync('**/*.js',{cwd:b,ignore:[...['node_modules/**/*','**/node_modules/**','**/.git/**','.git/**/*','**/.svn/**','.svn/**/*','.DS_Store','**/.DS_Store'],'app.js',...D,...B],nocase:!0,dot:!0,nodir:!0});let J;try{J=await k('app.js')}catch(a){throw new Error('getjs app.js fail,'+a)}let K=[';'+J,';require("app.js");',`//# sourceURL=${l}app.js\n`].join('\n'),L=d.join(f,'app.js');c.sync(d.dirname(L)),e.writeFileSync(L,K,'utf-8');let M=[];if(n.functionalPages){j('preparefile',x.config.PREPARE_FILE_FORMAT.format('FunctionalPages'));const{files:b,pages:c}=await z.prepareFunctionalPages(a,f);M=b;const d=JSON.parse(A);d.pages.push(...c),A=JSON.stringify(d)}K=A,L=d.join(f,'app.json'),c.sync(d.dirname(L)),e.writeFileSync(L,K,'utf-8'),j('preparefile',x.config.PREPARE_FILE_FORMAT.format('Components'));for(const g of D){const h=d.join(b,g);if(!e.existsSync(h))throw new Error(g+' does not exists');if(e.lstatSync(h).isDirectory())throw new Error(g+' is a directory');const i=g.replace(/\.js$/i,''),j=(await p(a,i))||{};try{J=await k(encodeURI(g))}catch(a){throw new Error('getjs '+h+' fail,'+a)}if(n.plugins&&j.usingComponents)for(const a in j.usingComponents)j.usingComponents[a]=j.usingComponents[a].replace(/^plugin:\/\/([^\/]*)\/(.*)/,(a,b,c,d,e)=>{const f=n.plugins[b];return f?`plugin://${f.provider}/${c}`:e});K=[`;var __wxAppCode__ = __wxAppCode__ || {}; __wxAppCode__["${i}.json"] = ${JSON.stringify(j)}; var __wxRoute = "${i.replace(/"/g,'\\"')}"; var __wxRouteBegin = true; var __wxAppCurrentFile__ ="${g.replace(/"/g,'\\"')}"; `+J,`;require("${g.replace(/"/g,'\\"')}");`,`//# sourceURL=${l}${g}\n`].join('\n'),L=d.join(f,g),c.sync(d.dirname(L)),e.writeFileSync(L,K,'utf-8')}j('preparefile',x.config.PREPARE_FILE_FORMAT.format('Page'));for(const g of B){const h=d.join(b,g);if(!e.existsSync(h))throw new Error(g+' does not exists');if(e.lstatSync(h).isDirectory())throw new Error(g+' is a directory');const i=g.replace(/\.js$/i,''),j=(await p(a,i))||{};try{J=await k(encodeURI(g))}catch(a){throw new Error('getjs '+h+' fail,'+a)}if(n.plugins&&j.usingComponents)for(const a in j.usingComponents)j.usingComponents[a]=j.usingComponents[a].replace(/^plugin:\/\/([^\/]*)\/(.*)/,(a,b,c,d,e)=>{const f=n.plugins[b];return f?`plugin://${f.provider}/${c}`:e});K=[`;var __wxAppCode__ = __wxAppCode__ || {}; __wxAppCode__["${i}.json"] = ${JSON.stringify(j)}; var __wxRoute = "${i.replace(/"/g,'\\"')}"; var __wxRouteBegin = true; var __wxAppCurrentFile__ ="${g.replace(/"/g,'\\"')}"; `+J,`;require("${g.replace(/"/g,'\\"')}");`,`//# sourceURL=${l}${g}\n`].join('\n'),L=d.join(f,g),c.sync(d.dirname(L)),e.writeFileSync(L,K,'utf-8')}j('preparefile',x.config.PREPARE_FILE_FORMAT.format('JS'));for(const g of I){const a=d.join(b,g);if(!e.existsSync(a))throw new Error(g+' does not exists');if(e.lstatSync(a).isDirectory())throw new Error(g+' is a directory');try{J=await k(encodeURI(g))}catch(b){throw new Error('getjs '+a+' fail,'+b)}K=[';var __wxAppData = __wxAppData || {}; var __wxRoute; var __wxRouteBegin; var __wxAppCode__ = __wxAppCode__ || {}; var global = global || {}; var __wxAppCurrentFile__; var Component = Component || function() {}; var Behavior = Behavior || function() {}; '+J,`//# sourceURL=${l}${g}\n`].join('\n'),L=d.join(f,g),c.sync(d.dirname(L)),e.writeFileSync(L,K,'utf-8')}let N;try{N=await q(a),N=Array.isArray(N)?N:[N]}catch(a){throw new Error('getWxAppCode fail,'+a)}L=d.join(h,'wxappcode.js'),e.writeFileSync(L,`;var __wxAppCode__ = __wxAppCode__ || {}; ${[...N,...H].join(';\n;')};\n//# sourceURL=[__wxAppCode__]`,'utf-8');let O;try{O=await r(a,{app:!0,cut:!0})}catch(a){throw new Error('transWXMLToJS fail,'+a)}const P=O.code;L=d.join(h,'wxmlxcjs.js'),e.writeFileSync(L,`${[P,...G].join(';\n;')}\n//# sourceURL=[__wxmlXCJS__]`,'utf-8');let Q;try{if(n.plugins){const b=[];for(const c in n.plugins){const{provider:d,version:e}=n.plugins[c],f=await u.getServiceCode(a,{pluginId:d,version:e});b.push(`;${f};\n`)}Q=b.join('\n')}}catch(a){throw new Error('getWxPluginCode fail,'+a)}if(L=d.join(h,'wxplugincode.js'),e.writeFileSync(L,`${Q}\n//# sourceURL=[__wxPluginCode__]`,'utf-8'),n.cloud)try{const a=await y.getAlphaFile('WACloud.js');e.writeFileSync(d.join(h,'wacloud.js'),`${a}\n//# sourceURL=[__WACloud__]`,'utf8')}catch(a){console.error(a)}return['app.json',...M,...I,'app.js',...D,...B]}function b(){if(!0===D)return void(I=!0);if(D){try{D.destroy()}catch(a){}D=null}}const c=require('mkdir-p'),d=require('path'),e=require('fs'),f=require('rmdir'),g=require('glob'),{commonError:h,randomId:i}=require('./46d7303eb986fa402d60bf5e929aa077.js'),{RemoteTempDir:j,RemoteDir:k,RemoteDataDir:l}=require('./a148d3a11fd5268109e21fb40c9d527b.js'),m=require('./87c0ac209c25d8bb448550638bb17663.js'),{RemoteDebug:n}=require('./6c6f4dde020ed24929c4c4367c42d34d.js'),o=require('./bc78839ccca8df9e5ceeb7fae11b7be2.js'),p=require('./d260ebf687a29f24aed49f66b233ab7d.js'),q=require('./334bc661e13bd1837a230f0835d0a1ee.js'),r=require('./3e4c71c2a2cc438e1b3afc3fb10bd4b6.js'),s=require('./6b5520e429c60abf5d2f924c0fa05fd0.js'),t=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),u=require('./b6d8659542036f6a35f417e0693e56db.js'),v=require('./cdbf7243dc99f8461acbb1d57af1d8ae.js'),w=require('./e2bb00408a93b45ef5e6ad32f05e850c.js'),x=require('./common/locales/index.js'),y=require('./d28a711224425b00101635efe1034c99.js'),z=require('./ba1bffd4b30105d7406dff2233381b13.js'),A=o.getState.bind(o),B=o.subscribe.bind(o),C=function(){};let D=!1,E=[],F=[],G=null,H=null,I=!1,J={mode:'server'},K=null;const L={getStatus(){if(!D||!0===D)return null;const a=J.mode;return{messager:'server'===a?{compressionSavedBytes:D.messager.compressionSavedBytes,status:D.messager.status,inSpeed:D.messager.inSpeed,outSpeed:D.messager.outSpeed,outDebugMessageSpeed:D.messager.outDebugMessageSpeed,inDebugMessageSpeed:D.messager.inDebugMessageSpeed,outDebugMessageCount:D.messager.outDebugMessageCount,inDebugMessageCount:D.messager.inDebugMessageCount,inCount:D.messager.inCount,outCount:D.messager.outCount,inBytesCount:D.messager.inBytesCount,outBytesCount:D.messager.outBytesCount,sendQueueLength:D.messager.sendQueue.length,cachedDebugMessagesCount:D.messager.debugMessagesToSend.length,unconfirmedMessagesCount:(()=>{const a=D.messager.cachedDebugMessageSendGroups;let b=0;for(const c of a)b+=((c&&!c.confirmed&&c.sendDebugMessageRequest||{}).debug_message||[]).length;return b})()}:{status:D.messager.status,inDebugMessageSpeed:D.messager.inDebugMessageSpeed,outDebugMessageSpeed:D.messager.outDebugMessageSpeed,outDebugMessageCount:D.messager.outDebugMessageCount,inDebugMessageCount:D.messager.inDebugMessageCount,inBytesCount:D.messager.inBytesCount,outBytesCount:D.messager.outBytesCount,cachedDebugMessagesCount:D.messager.debugMessagesToSend.length,unconfirmedMessagesCount:D.messager.unconfirmedMessagesCount},_debugger:{status:D.debuggerStatus},dirs:{dir:D.dir,tempDir:D.tempDir},client:{deviceInfo:D.deviceInfo,networkType:D.clientNetworkType,networkSpeed:D.clientNetworkSpeed,networkInterval:D.clientNetworkInterval},currentSyncSdkName:(()=>{let a=D.currentSyncSdkName;if(!a&&D.syncCallIds){const b=Object.keys(D.syncCallIds);0<b.length&&(a=D.syncCallIds[b[0]])}return a})(),jsContext:{jsContextIdNames:D.jsContextIdNames,currentContextId:D.currentJsContextId}}},subscribeChange(a){E.push(a)},subscribeEvent(a){F.push(a)},changeDebuggerStatus(a){D&&!0!==D&&D.changeDebuggerStatus(a)},onAskForRetry(a){G=a},onOpenEditorFile(a){H=a},endDebug(){D&&!0!==D&&D.destroy()},getInstance(){return D&&!0!==D?D:null},useJsContextId(a){return D&&!0!==D?D.useJsContextId(a):null}};module.exports={init:async function(e,g={},m={}){return new Promise(async(o,p)=>{const q=m.onProgressUpdate||C;if(q('remotedebug',x.config.INITIALIZE_DEBUGGING_ENVIRONMENT),D){console.warn('already an instance');const a=A();return a&&a.window&&a.window.remoteDebugWindow&&!a.window.remoteDebugWindow.show?(console.warn('shall be destroyed'),b(),p(x.config.PLEASE_TRY_AGAIN)):p(h('remote debug instance already exists'))}const r=i(),s=d.join(k,e.appid||r,r),t=d.join(j,e.appid||r,r),u=d.join(l,e.appid||r),v=()=>{try{f(s),f(t)}catch(a){}};try{D=!0;const{projectpath:f,miniprogramRoot:h}=e;c.sync(s),c.sync(t),c.sync(u);const i=d.join(f,h||'');q('remotedebug',x.config.PREPARE_FILE);let j;if(j='game'===e.compileType?[]:await a(e,i,s,t,{onProgressUpdate:q}),I){I=!1;throw'Aborted. Please retry'}D=new n({files:j,dir:s,tempDir:t,dataDir:u,initialRoomInfo:_extends({},g),config:_extends({},m),mode:m.remoteDebugLocal?m.remoteDebugLocal:'server',clientProxyPort:m.clientProxyPort,cdpEnabled:!!m.isGame});const k=m.onStatusUpdate||C,l=m.onEvent||C;D.onAskForRetry((a)=>new Promise(async()=>{G?answer((await G(a))):answer(!1)})),D.onOpenEditorFile((...a)=>{H&&H(...a)}),D.onAskForChoosingAndroidDevice((a)=>new Promise(async()=>{console.log(a),setTimeout(()=>{answer(0)},1e3)})),D.onAskForAndroidAuthorize((a)=>new Promise(async()=>{console.log(a),setTimeout(()=>{answer(!0)},1e3)}));let r;D.once('initsuccess',(a)=>{return I?(I=!1,D.destroy(),p('abort')):void(r=!0,o(_extends({},a)),'function'==typeof K&&(K(),K=null),K=B(()=>{const a=A();a&&a.window&&a.window.remoteDebugWindow&&a.window.remoteDebugWindow.show&&(console.log('subscribed remote window shown'),'function'==typeof K&&(K(),K=B(()=>{const a=A();a&&a.window&&a.window.remoteDebugWindow&&!a.window.remoteDebugWindow.show&&(console.warn('shall automatically be destroyed'),'function'==typeof K&&(K(),K=null),b())})))}))});const w=(a)=>{I=!1,E=[],F=[],G=null,H=null,v(),'function'==typeof K&&(K(),K=null),void 0===r&&(r=!1,p(a)),D&&D.destroy(),D=null};D.once('initfail',w),D.once('destroy',(a)=>{I=!1,D&&D.removeAllListeners(),D=null;for(const b of E)b(!0);E=[],F=[],G=null,H=null,v(),'function'==typeof K&&(K(),K=null),void 0===r&&(r=!1,p(a))});let y;D.on('statuschange',()=>{y||(y=setTimeout(()=>{y=void 0;for(const a of E)a();const a=D&&D.messager&&D.messager.status;k(a,4<a)},400))}),D.on('event',(a)=>{for(const b of F)b(a);a&&l(a)}),D.on('jscontextchange',()=>{for(const a of F)a(!1,'jscontextchange')}),J={mode:m.remoteDebugLocal?m.remoteDebugLocal:'server'};try{q('remotedebug',x.config.INITIALIZE_DEBUG_INSTANCE),await D.init(),q('remotedebug',x.config.WAITING_FOR_PROCESS)}catch(a){throw w(a),a}}catch(a){v(),D=null,p(h(a))}})},onUrlRequest:function(a){if(!D||!0===D)return void console.warn('no active instance');const b=a.replace(/^\/*remotedebug\/+/i,'').toLowerCase();switch(!0){case b.startsWith('registersyncpid/'):{const a=b.replace(/^\/*registersyncpid\/+/g,'');let[c,d]=a.split('/');if(c=parseInt(c,10),d=parseInt(d,10),isNaN(c)||isNaN(d))return void console.warn('invalid pid or sdkid');D.registerSyncPid(c,d);break}default:console.warn('invalid request href');}},destroy:b,model:L}}(require('lazyload'),require);