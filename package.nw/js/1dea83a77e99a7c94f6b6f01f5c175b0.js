;!function(require, directRequire){;"use strict";const path=require("path"),_=require("lodash"),checkAppJSON=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),checkPageJSON=require('./d260ebf687a29f24aed49f66b233ab7d.js'),getOnlineCodePack=require('./8a145c66a3f53e0aff94a871ac692d06.js'),compileCache=require('./2e9637e8a0816a626f7db9a0dee5efe8.js');async function checkAppConfig(a){const b=await checkAppJSON(a),c={pages:b.pages||[],resizable:!!b.resizable,subPackages:b.subPackages,debug:!!b.debug,widgets:b.widgets||[],customClose:!!b.customClose,workers:b.workers||"",navigateToMiniProgramAppIdList:b.navigateToMiniProgramAppIdList||[],cloud:!!b.cloud,global:{window:b.window||{}},page:{},networkTimeout:Object.assign({request:6e4,uploadFile:6e4,connectSocket:6e4,downloadFile:6e4},b.networkTimeout),ext:b.ext||{},extAppid:b.extAppid||"",plugins:b.plugins||{},mainPlugins:Object.assign({},b.plugins),preloadRule:b.preloadRule,permission:b.permission,requiredBackgroundModes:b.requiredBackgroundModes,functionalPages:b.functionalPages,__warning__:b.__warning__||""},d=c.pages;c.entryPagePath=b.entryPagePath?`${b.entryPagePath}.html`:`${d[0]}.html`;for(const b of d){const d=await checkPageJSON(a,`${b}`);d.__warning__&&(c.__warning__&&(c.__warning__+="\u3001"),c.__warning__+=`${d.__warning__}`),c.page[`${b}.html`]={window:d||{}}}if(c.subPackages){let b={};for(const d of c.subPackages){for(const b of d.pages){const e=path.posix.join(d.root,b),f=await checkPageJSON(a,`${e}`);f.__warning__&&(c.__warning__&&(c.__warning__+="\u3001"),c.__warning__+=`${f.__warning__}`),c.page[`${e}.html`]={window:f||{}}}b=Object.assign({},b,d.plugins)}c.plugins=Object.assign({},c.plugins,b)}const e=Object.assign({},b.tabBar),f=[].concat(e.list||[]),g=[];for(const b of f){const a=Object.assign({},b);a.pagePath+=".html",g.push(a)}return e.list=g,c.tabBar=e,c}async function cachedAppConfig(a){if(a.isOnline){const b=await getOnlineCodePack(a);return JSON.parse(b["/app-config.json"])}await compileCache.init(a);const b=compileCache.CACHE_KEYS.JSON_APPCONFIG,c=a.attr&&a.attr.platform;let d=compileCache.get(b,c);return d||(d=await checkAppConfig(a),compileCache.set(b,c,d)),_.cloneDeep(d)}module.exports=cachedAppConfig;
;}(require("lazyload"), require);
