;!function(require, directRequire){;"use strict";const path=require("path"),GenerateCodeUtils=require('./fd36934129dc7c69d71d8f26e65fccf4.js'),contentWatcher=require('./162bf2ee28b76d3b3d95b685cede4146.js'),consoleDisplay=require('./2dfc6a3df6d6fc51266b293c8420e88b.js'),C=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),checkAppConfig=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),getSourceMap=require('./cdbf7243dc99f8461acbb1d57af1d8ae.js'),compileCache=require('./2e9637e8a0816a626f7db9a0dee5efe8.js'),fileRules=require('./1c8a8c710417d102ab574145dc51b4b0.js'),tools=require('./84b183688a46c9e2626d3e6f83365e13.js'),{compileJS,inlineSourceMap,wrapSourceCodeInDefine}=GenerateCodeUtils,rememberedLargeFiles={};let largeFilesTimeout,largeFiles=[];function pushLargeFiles(a){largeFiles.push(a),largeFilesTimeout&&clearTimeout(largeFilesTimeout),largeFilesTimeout=setTimeout(()=>{largeFilesTimeout=void 0,consoleDisplay.display({command:C.DISPLAY_INFO,type:"COMPILE_JS_TOO_LARGE_IGNORE",data:{files:[...largeFiles]}}),largeFiles=[]},1e3)}async function getJsFile(a,b,c={}){b=decodeURI(b),await compileCache.init(a);const d=await contentWatcher(a),e=d.srcPath;let f=await d.getFile(b);const g=tools.generateMD5(f),h=compileCache.CACHE_KEYS.JS_FILE,i=path.posix.join(e,b),j=compileCache.get(h,i);if(!c.force&&j&&j.code&&j.es6===a.setting.es6&&j.md5===g)return a.setting.es6&&rememberedLargeFiles[b]&&!c.noWarnings&&pushLargeFiles(b),j.code;const k=a.debugOptions&&a.debugOptions.hidedInDevtools||[],l=await checkAppConfig(a),m=l.workers&&0===b.indexOf(l.workers);if(a.setting.es6){path.basename(b);if(512000>f.length){rememberedLargeFiles[b]=!1;const a=await compileJS({projectPath:d.srcPath,filename:b,sourceCode:f,showInStatus:!0});fileRules.isFileHidedInDevtools(b,k)&&delete a.map,f=inlineSourceMap(a.code,a.map)}else rememberedLargeFiles[b]=!0,c.noWarnings||pushLargeFiles(b)}else{const a=getSourceMap(path.join(d.srcPath,b),f);a&&(a.mappings=`;${a.mappings}`,f=inlineSourceMap(f,JSON.stringify(a)))}return f=wrapSourceCodeInDefine(b,f),m&&(f=`__workersCode__['${b}'] = ${JSON.stringify(f)}`),compileCache.set(h,i,{code:f,md5:g,es6:a.setting.es6}),f}module.exports=getJsFile;
;}(require("lazyload"), require);
