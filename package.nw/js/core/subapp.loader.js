'use strict';const init=()=>{window.loadSubApp=({name:a,el:b,context:c})=>{switch(a){case'cloudFunctionsDebuggerFrontend':{const a=document.createElement('link');a.rel='stylesheet',a.href='../static/cloud-function-debugger.css',document.head.appendChild(a);const d=document.createElement('script');d.src='../js/common/cloud-functions-debugger-frontend/browser.js',d.onload=()=>{window.cloudFunctionsDebuggerFrontend.renderApp(b,c)},document.head.appendChild(d)}}},window.onSubAppLoaderReady&&window.onSubAppLoaderReady();const a=new URLSearchParams(location.search);if('true'===a.get('autoload')){console.log('[subapp loader] autoload starts...');const b=document.createElement('div');b.style.cssText='width: 100%; height: 100%;';const c=decodeURIComponent(a.get('containerClassName'));c&&(b.className=c),document.body.appendChild(b);const d=decodeURIComponent(a.get('app'));console.log('[subapp loader] will autoload app: ',d);const e=JSON.parse(decodeURIComponent(a.get('context')));console.log('[subapp loader] app context ',e),window.loadSubApp({name:d,el:b,context:e})}};'complete'===document.readyState?init():document.addEventListener('DOMContentLoaded',init),window.onerror=function(a){document.body.innerText=a.toString()};