;!function(require, directRequire){;'use strict';const path=require('path'),fileUtils=require('./60e94018e5c42875e658435ea04a006d.js'),tools=require('./84b183688a46c9e2626d3e6f83365e13.js');async function contentWatcher(a){let b=a.miniprogramRoot?path.join(a.projectpath,a.miniprogramRoot):a.projectpath;return b=tools.normalizePath(b),(a.projectpath.startsWith('//')||a.projectpath.startsWith('\\\\'))&&!b.startsWith('//')&&(b='/'+b),await fileUtils(tools.normalizePath(a.projectpath),b)}module.exports=contentWatcher;
;}(require("lazyload"), require);
