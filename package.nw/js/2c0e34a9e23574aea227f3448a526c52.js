;!function(require, directRequire){;"use strict";const tslib_1=require("tslib"),React=require("react"),path=require("path"),{connect}=require("react-redux"),PropTypes=require("prop-types"),C=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),windowActions=require('./a8c87029da0fa06e986298d447ab0fe2.js'),simulatorActions=require('./ba23d8b47b1f4ea08b9fd49939b9443f.js'),menu=require('./5451dfc4d939398d913dc724d952b02b.js'),PopupWindow=require('./6620a0cf7dad1b400d60f0fdae40f524.js'),Editor=require('./efaddce19b790978e16990920754b000.js'),Simulator=require('./584aae91d7c83393222029103ba1ac29.js'),Toolbar=require('./925e13dda17a5a2e1cbaf0212c56c31c.js'),CustomAnalysis=require('./0df497a6fb76113a0a8e66dad897263e.js'),MobileTest=require('./aee2b6963336bb84d2ce0e0ed38dae60.js'),CloudConsole=require('./cf7022509ac3e29b8293eb12f244de20.js'),CustomCompile=require('./0ac4da1c7ab84710f2c94e3bf0cf4861.js'),IconManager=require('./3274726e14e61776145df49bcfdcf89c.js'),QCloudUploadDialog=require('./fe312864f5142b11bfe28ad1bc5ad2f8.js'),QCloudUploadIDC=require('./a1fed34995a9fdae4b41f1acb9c2e5a9.js'),QCloudUploadingDialog=require('./d3ca3f15cb99fc14bb8fbfeeb32ad0f5.js'),QCloudDeployDialog=require('./444cd5bc8c3d312afefcdada704d0f95.js'),AppService=require('./b1ba6dfcea5ed09bd8f7edf39a8149d6.js'),GameSimulator=require('./a254abb81b6346b59aa82a08652fe610.js'),GameDevtools=require('./d51f6457067a06cf51fac263b2c25b60.js'),NoticeCenter=require('./8e764a20d4ff4876a256ceb36e40c37e.js'),report=require('./da7c31daaf542cf1796023d8e344b98a.js'),statusReport=require('./5138252b39f4fbd272c0fd67bab952ac.js'),ProjectInfo=require('./d326caa17e34aabeda5187fbed6e1e47.js'),ShareInfo=require('./af9e5b2040c286e3da6d2e3b30eae482.js'),UploadInfo=require('./00bb746364abbf48ca081de687ce505a.js'),UploadPluginDocInfo=require('./59aba0523016c691a75262d7f9a6b793.js'),Confirm=require('./bf5bd8b977a68a4f788a29b92aa86a0e.js'),ChangeAppIdInfo=require('./76c2144bb016d8e91614bb612002ad72.js'),RemoteDebugWindow=require('./5fce949eb42d709c19a90da9440a955b.js'),QCloudDebugWindow=require('./3abac29230bbc52f03349d2cd4796dd0.js'),SCFDebugWindow=require('./1f71a5f3eb45834a71694e893a66a52a.js'),GitPanel=require('./0ba8bbb520f446ec68be8010f175693d.js'),loadConfig=require('./dc59f57d54946e61d27c95ab24d8cb4f.js'),tools=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),compileTypeConfig=require('./9fdd4ac31a05c27355910f0d74accd4c.js'),configActions=require('./3b66d845db4d098b7a16cb0357f5c072.js'),clickkeyConfig=require('./eadce02c750c875a10680bcfedadec88.js'),rootActions=require('./37d8b9297fb1bd87f9a3ac407b8006a0.js'),projectActions=require('./cc2c2970ff81ae4a83123e81ee123da2.js'),SuccessTip=require('./f4b122ca93225892eb1487c959c929f6.js'),fileUtils=require('./d62fc37d7aa6416d5dcc240ba94175cd.js'),AddDevice=require('./106eac0139723db6a35b934f19cb4aa5.js'),Music=require('./03b7faa8f76486fc3878b17c9a674a7e.js'),musicstatusConfig=require('./5dc59f418d85e854c1a12d402d29e2d7.js'),CosManager=require('./bc0aa9e11159f5769f00d6e8f5ac5aae.js'),TcbFnAction=require('./1fb8a98e60701d8613c61212cbdcec59.js'),TcbLoading=require('./7c591e7ca2a6d4233e0576df641c0d52.js'),AccountBox=require('./24e8c82117f6ac2c1c7ca8e4c8d6068d.js'),AdditionLogin=require('./7e488c799c93aca16e477543d07891ec.js'),infoActions=require('./1fcc6bd55b687d154a4247e57fe3011d.js'),projectConfigJsonUtil=require('./42191d95974f14b18961c9f2c730464e.js'),TcbFnRoot=require('./9b479c57312553aee8af880b5c796a8f.js'),idepluginManager=require('./f5a748840b272d2bf0223c95f6c8dbe3.js'),PluginContainer=require('./e323ab13407f3249b9fcba4b18f4ba89.js'),onBeforeSendHeaders=require('./ffc9a3cdcc5036d1fb62a2324c72a2b0.js'),locales=require('./common/locales/index.js'),WorkbenchStatusBar=require('./806427363b293db20edb3e7c3f8d8b72.js'),PluginPanel=require('./3355a7d234856ecc027a06d91a13f3d3.js'),pluginActions=require('./fb43c40eddf059d0b7fa2a00b42caa7a.js'),pluginsVersionReport=require('./07d89740cee3daf88e355e545f2db9bc.js'),apiConfigHandler=require('./3695a358d9a1c2985165a4f7c037ed64.js'),{NoticeListContainer}=require('./460ab2bb097006559227e3d2196c5b2f.js'),{ProgressDialogContainer}=require('./e6795252a83153e506d524cb48d19c0e.js'),simulatorTypeConfig=require('./efd8b4323f89b2a759d044d894e3a4f0.js'),hookMethodsCache=require('./c44dddb4ccd769f104fce4a777049908.js'),REPORT_INTERVAL=300000,STATUS_REPORT_INTERVAL=3600000,mapStateToProps=(a)=>{const b=a.window.debug||{},c=a.window.editor||{},d=a.window.simulator||{},e=a.info.shareInfo||{},f=a.info.uploadInfo||{},g=a.info.uploadPluginDocInfo||{},h=a.info.confirmInfo||{},i=a.toolbar.deviceInfo||{},j=a.toolbar.clickKey,k=a.simulator.music&&a.simulator.music.status,l=a.info.changeAppIdInfo||{};return{appLaunched:a.simulator.appLaunched,debuggerHeight:b.height||100,debuggerPopup:b.popup,simulatorWindowWidth:d.width||500,workbenchShow:b.show&&!b.popup||c.show&&!c.popup,simulatorShow:d.show,simulatorPopup:d.popup,simulatorPosition:d.position,deviceWidth:i.screenWidth,deviceHeight:i.screenHeight,clickkey:j,maskType:a.window.mask.show?a.window.mask.type:"",showCloudConsole:a.window.cloud&&a.window.cloud.console&&a.window.cloud.console.show,project:a.project.current||{},restartTimes:a.simulator.restartTimes,windowStatus:a.window.windowStatus,pluginPopup:a.window.pluginPopup||{},pluginManifests:a.plugin.pluginManifests||{},optionWindows:{scfDebug:a.window.cloud&&a.window.cloud.scfdebug&&a.window.cloud.scfdebug.show,remoteDebug:!!a.window.remoteDebugWindow.show,mobileTest:a.debug.mobileTest.isOpen,qcloudDebug:!!a.window.qcloudDebugWindow.show,tcbFnAction:a.window.cloud&&a.window.cloud.fnaction&&a.window.cloud.fnaction.show,tcbLoading:a.window.tcbLoading&&a.window.tcbLoading.show,qcloudUploading:a.window.qcloud.uploading&&a.window.qcloud.uploading.show,customAnalysis:a.debug.customAnalysis.isOpen},optionComponents:{pluginPanel:!!a.plugin.panelShow,gitPanel:!!a.git.panelShow,shareInfo:e.show,uploadInfo:f.show,uploadPluginDocInfo:g.show,changeAppIdInfo:l.show,noticeCenter:clickkeyConfig.NOTICECENTER===j||clickkeyConfig.LOGINQRCODE===j,music:k===musicstatusConfig.MUSIC_STATE_PLAY||k===musicstatusConfig.MUSIC_STATE_PAUSE,addDevice:a.info.addDeviceInfo&&a.info.addDeviceInfo.show,qcloudUploadIDC:a.window.qcloud.uploadIDCShow,qcloudUploadDialog:a.window.qcloud.uploadShow,qcloudDeployDialog:a.window.qcloud.deployShow,confirm:h.show,iconManager:a.window.toolbarConfig&&a.window.toolbarConfig.show,cosManager:a.cos.show,accountBox:a.window.multiAccountBox&&a.window.multiAccountBox.show,additionLogin:a.window.additionLogin&&a.window.additionLogin.show,tcbFnRoot:a.window.cloud&&a.window.cloud.cloudfunctionRoot&&a.window.cloud.cloudfunctionRoot.show&&"main"===a.window.cloud.cloudfunctionRoot.in}}},mapDispatchToProps=(a)=>{return{bodyClick:tools.bindActionCreators(rootActions.bodyClick,a),recordFocus:tools.bindActionCreators(windowActions.recordFocus,a),requestProjectAttr:tools.bindActionCreators(projectActions.requestProjectAttr,a),windowActions:tools.bindActionCreators(windowActions,a),compile:tools.bindActionCreators(simulatorActions.compile,a),updateSceneConfig:tools.bindActionCreators(configActions.updateSceneConfig,a),setProjectConfig:tools.bindActionCreators(projectActions.setProjectConfig,a),setPluginManifests:tools.bindActionCreators(pluginActions.setPluginManifests,a),setProjectSimulatorType:tools.bindActionCreators(projectActions.setProjectSimulatorType,a),confirm(b,c){a(infoActions.setConfirmInfo(Object.assign({show:!0,showCancel:!1,callback:c},b)))}}},optionWindowMap={scfDebug:SCFDebugWindow,remoteDebug:RemoteDebugWindow,mobileTest:MobileTest,qcloudDebug:QCloudDebugWindow,tcbFnAction:TcbFnAction,tcbLoading:TcbLoading,qcloudUploading:QCloudUploadingDialog,customAnalysis:CustomAnalysis},optionComponentMap={pluginPanel:PluginPanel,gitPanel:GitPanel,shareInfo:ShareInfo,uploadInfo:UploadInfo,uploadPluginDocInfo:UploadPluginDocInfo,changeAppIdInfo:ChangeAppIdInfo,noticeCenter:NoticeCenter,music:Music,addDevice:AddDevice,qcloudUploadIDC:QCloudUploadIDC,qcloudUploadDialog:QCloudUploadDialog,qcloudDeployDialog:QCloudDeployDialog,confirm:Confirm,iconManager:IconManager,cosManager:CosManager,accountBox:AccountBox,additionLogin:AdditionLogin,tcbFnRoot:TcbFnRoot};let Main=class extends React.Component{constructor(a){super(a),this.onResize=(a,b)=>{this.resizeTimer&&clearTimeout(this.resizeTimer),this.resizeTimer=setTimeout(()=>{this.props.windowActions.appResize({width:a,height:b}),this.resizeTimer=null},20)},this.onMove=(a,b)=>{this.moveTimer&&clearTimeout(this.moveTimer),this.moveTimer=setTimeout(()=>{this.props.windowActions.appResize({x:a,y:b}),this.moveTimer=null},20)},this.onBodyClick=(a)=>{this.props.clickkey!==clickkeyConfig.NONE&&this.props.bodyClick(a),a.target.partition?"persist:editor"===a.target.partition?this.props.recordFocus(C.WINDOW_FOCUS.EDITOR):"persist:devtools"===a.target.partition?this.props.recordFocus(C.WINDOW_FOCUS.DEVTOOLS):"persist:remotedebugdevtools"===a.target.partition&&this.props.recordFocus(C.WINDOW_FOCUS.REMOTE_DEBUG_DEVTOOLS):this.props.recordFocus(C.WINDOW_FOCUS.BODY)},this.onConfigUpdate=(a)=>{this.props.updateSceneConfig(a)},this.lastWorkbenchShowWindowWidth=0,this.lastReportMemory=0,this.lastReportMemoryTime=0}componentDidMount(){if(this.props.win||global.isDevWindow){const a=this.props.win||global.Win;global.windowMap.set("MAIN",a),!1,a.on("resize",this.onResize),menu.init(a),menu.update()}const a=loadConfig.get();a&&a.scene&&this.props.updateSceneConfig(a),loadConfig.on("CONFIG_UPDATE",this.onConfigUpdate),apiConfigHandler.default.start(),this.reportMemoryTimer=setInterval(this.reportMemory.bind(this),REPORT_INTERVAL),this.props.requestProjectAttr(!1),this.watchProjectConfig();try{const a=idepluginManager.getInstalledPluginManifest();this.props.setPluginManifests(a),a[this.props.project.simulatorType]||this.props.setProjectSimulatorType(simulatorTypeConfig.wechat)}catch(a){}onBeforeSendHeaders.addListener(),statusReport(),this.statusReportTimer=setInterval(statusReport,STATUS_REPORT_INTERVAL),pluginsVersionReport(),global.contentWindow.document.addEventListener("copy",function(){const a=global.contentWindow.document.activeElement;"WEBVIEW"===a.tagName&&a.executeScript({code:`document.execCommand('copy')`})})}componentWillUnmount(){loadConfig.off("CONFIG_UPDATE",this.onConfigUpdate),clearInterval(this.reportMemoryTimer),clearInterval(this.statusReportTimer),onBeforeSendHeaders.removeListener()}componentWillReceiveProps(a){a.workbenchShow!==this.props.workbenchShow&&(a.workbenchShow?global.Win.width=Math.max(this.lastWorkbenchShowWindowWidth,global.Win.width,a.simulatorWindowWidth+100):(this.lastWorkbenchShowWindowWidth=global.Win.width,global.Win.width=a.simulatorWindowWidth)),this.props.project&&this.props.project.simulatorType&&this.props.project.simulatorType!==a.project.simulatorType&&(menu.update(!0),hookMethodsCache.setSimulatorType(a.project.simulatorType))}getChildContext(){return{currentNWWindow:this.props.win?this.props.win:global.Win}}async watchProjectConfig(){const a=this.props.project;this.projectFiles=await fileUtils(a.projectpath),this.projectFiles.on("all",(b,c)=>{c=path.relative(a.projectpath,c),"project.config.json"===c&&this.projectConfigFileChanged()}),this.projectConfigFileChanged(!0)}async projectConfigFileChanged(a=!1){const b=this.props.project,c=projectConfigJsonUtil.getConfigFileInfo(b);if(!c.error)this.props.setProjectConfig(c.config,{needCheckAppid:!0,needConfirmToChangeAppid:a});else{let a=null;"readerror"===c.error.type?a={title:"",content:locales.config.PROJECT_CONFIG_READ_ERROR,showCancel:!1}:"parseerror"===c.error.type?a={title:"",content:locales.config.PROJECT_CONFIG_PARSE_ERROR,showCancel:!1}:"contenterror"===c.error.type&&(a={title:"",content:locales.config.PROJECT_CONFIG_CONTENT_ERROR.format(c.error.message),showCancel:!1}),a&&this.props.confirm(a)}}checkWindowStatus(){const a=this.props.windowStatus.mode;if(a===C.WINDOW_MODE.FULLSCREEN)this.props.win.enterFullscreen();else if(a===C.WINDOW_MODE.WINDOW_MAXIMIZE)this.props.win.maximize();else if(a===C.WINDOW_MODE.FREE){const a=this.props.windowStatus.position;this.props.win.moveTo(a.x,a.y),this.props.win.resizeTo(a.width,a.height)}}reportMemory(){chrome.processes.getProcessInfo([],!0,(a)=>{let b=0;for(const c in a){const d=a[c];d.privateMemory&&(b+=d.privateMemory)}b=Math.floor(b/1024/1024);isNaN(b)||(Date.now()-this.lastReportMemoryTime>7200000||100<Math.abs(b-this.lastReportMemory))&&(console.log("memory_monitor",this.props.project.appid,`${b},${this.props.restartTimes}`),report("memory_monitor",this.props.project.appid,`${b},${this.props.restartTimes}`),this.lastReportMemoryTime=Date.now(),this.lastReportMemory=b)}),statusReport()}onAboutClick(){this.props.windowActions.setAboutWindow({show:!0})}onSimulatorWindowReady(){this.props.simulatorPopup&&this.props.compile()}onDevtoolsWindowReady(){}onSimulatorWindowClose(){this.props.windowActions.setSimulatorPopup(!1)}onDevtoolsWindowClose(){this.props.windowActions.setDebuggerWindow({popup:!1})}getSimulator(a){const b=this.props;let c=b.simulatorWindowWidth;if(b.simulatorShow?!b.workbenchShow&&(c="100%"):c=0,b.simulatorPopup){let c;if(b.project.attr&&b.project.attr.gameApp)c=GameSimulator;else switch(a){case compileTypeConfig.weapp:case compileTypeConfig.plugin:{c=Simulator;break}default:return null;}const d={className:"standalone",onClick:this.onBodyClick};return React.createElement(PopupWindow,{templateHTML:"html/standalone.html",wrapperProps:d,title:locales.config.SIMULATOR_WINDOW_TITLE.format(decodeURIComponent(b.project.projectname)),frame:!0,show:!1,width:b.deviceWidth,height:b.deviceHeight+27,resizable:!1,fullscreen:!1,always_on_top:!1,onWindowClose:this.onSimulatorWindowClose.bind(this),onReady:this.onSimulatorWindowReady.bind(this),renderClass:c})}return b.project.attr&&b.project.attr.gameApp?React.createElement(GameSimulator,{width:c}):a===compileTypeConfig.weapp||a===compileTypeConfig.plugin?React.createElement(Simulator,{width:c}):null}getService(a){const b=this.props,c=b.debuggerHeight;if(b.debuggerPopup){let d;if(b.project.attr&&b.project.attr.gameApp&&(d=GameDevtools),!d)switch(a){case compileTypeConfig.weapp:case compileTypeConfig.plugin:{d=AppService;break}default:return null;}return React.createElement(PopupWindow,{title:locales.config.DEBUGGER_WINDOW_TITLE.format(decodeURIComponent(b.project.projectname)),frame:!0,show:!1,height:c,resizable:!0,fullscreen:!1,always_on_top:!1,onWindowClose:this.onDevtoolsWindowClose.bind(this),onReady:this.onDevtoolsWindowReady.bind(this),renderClass:d,renderProps:{height:c}})}return b.project.attr&&b.project.attr.gameApp?React.createElement(GameDevtools,{height:c}):a===compileTypeConfig.weapp||a===compileTypeConfig.plugin?React.createElement(AppService,{height:c}):null}getOptionsWindows(){const a=this.props,b=[];for(const c in a.optionWindows){if(!a.optionWindows[c])continue;const d=optionWindowMap[c];d&&b.push(React.createElement(d,{key:c}))}for(const c in a.showCloudConsole&&a.pluginManifests.cloudconsole&&b.push(React.createElement(CloudConsole,{key:"cloudconsole",manifest:a.pluginManifests.cloudconsole})),a.pluginPopup)if(a.pluginPopup[c]&&a.pluginManifests[c]){const d=a.pluginManifests[c];b.push(React.createElement(PluginContainer,{key:`pluginpopup_${c}`,pluginId:c,manifest:d}))}return b}getOptionsComponents(){const a=this.props,b=[];for(const c in a.optionComponents){if(!a.optionComponents[c])continue;const d=optionComponentMap[c];d&&b.push(React.createElement(d,{key:c}))}return b}render(){const a=this.props,b=a.project.compileType;let c="workbench";a.workbenchShow||(c+=" ui-invisible");let d=null;return this.props.maskType&&this.props.maskType===C.MASK_TYPE.GLOBAL_BLOCKING&&(d=React.createElement("div",{className:"ui-mask ui-mask-transparent"})),React.createElement("div",{style:{height:"inherit"},onClick:this.onBodyClick},React.createElement(Toolbar,null),React.createElement("div",{className:"left"===a.simulatorPosition?"main":"main main-reverse"},React.createElement(CustomCompile,{compileType:b,project:this.props.project}),this.getOptionsComponents(),React.createElement("div",{onMouseDown:this.onBodyClick,style:{width:a.workbenchShow?"inherit":"100%"}},this.getSimulator(b)),React.createElement("div",{className:c,style:{overflow:"hidden",borderRight:"1px solid #d3d3d3"},onMouseDown:this.onBodyClick},global.onlySimulator?null:React.createElement(Editor,null),this.getService(b),React.createElement(WorkbenchStatusBar,null)),React.createElement(ProjectInfo,null),this.getOptionsWindows()),React.createElement(SuccessTip,null),React.createElement(NoticeListContainer,null),React.createElement(ProgressDialogContainer,null),d)}};Main=tslib_1.__decorate([locales.mixin],Main),Main.childContextTypes={currentNWWindow:PropTypes.object},module.exports=connect(mapStateToProps,mapDispatchToProps)(Main);
;}(require("lazyload"), require);
