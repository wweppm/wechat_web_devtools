;!function(require, directRequire){;"use strict";Object.defineProperty(exports,"__esModule",{value:!0});const request=require('./15ba1827c7f6564a45df6bd44da3a977.js'),urlConfig=require('./f171257bbcaef547a3cf27266ccb0db2.js'),optionalConfigCache={},MAX_REQUEST_INSTANCE=600000;let lastRequestTime=0;const getOptionalConfig=async()=>{if(!(Date.now()-lastRequestTime<MAX_REQUEST_INSTANCE)){lastRequestTime=Date.now();const{body:a}=await request({url:urlConfig.optionalConfig,needToken:1,needAppID:1}),{opt_conf_list:b}=a;b.forEach((a)=>{optionalConfigCache[a.item_type]=a.status})}};exports.OPTIONS={SITE_MAP:1},exports.checkOption=async(a)=>{return await getOptionalConfig(),!!optionalConfigCache[a]};
;}(require("lazyload"), require);
