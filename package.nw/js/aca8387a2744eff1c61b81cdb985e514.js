;!function(require, directRequire){;'use strict';const path=require('path'),checkAppJson=require('./8267de7f4ec7b70a147f3fa5ef2bdea4.js'),locales=require('./common/locales/index.js'),contentWatcher=require('./162bf2ee28b76d3b3d95b685cede4146.js'),appErrcodeConfig=require('./949d8235c744ced2a80121e4dba34c28.js');async function checkAppserviceJS(a){const b=await contentWatcher(a),c=await checkAppJson(a),d=c.pages||[];for(let c=0,e=d.length;c<e;c++){const a=d[c];if(!b.exists(`${a}.js`)){const b=new Error(locales.config.LACK_OF_FILE.format(`${a}.js`));throw b.code=appErrcodeConfig.APPSERVICE_LOSE_JS,b}if(!b.exists(`${a}.wxml`)){const b=new Error(locales.config.LACK_OF_FILE.format(`${a}.wxml`));throw b.code=appErrcodeConfig.APPSERVICE_LOSE_WXML,b}}}module.exports=checkAppserviceJS;
;}(require("lazyload"), require);
