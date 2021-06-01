(()=>{"use strict";var e={198:(e,t,i)=>{e.exports=i.p+"a76eadbc31913361c782.svg"}},t={};function i(n){var r=t[n];if(void 0!==r)return r.exports;var s=t[n]={exports:{}};return e[n](s,s.exports,i),s.exports}i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var n=t.getElementsByTagName("script");n.length&&(e=n[n.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})();var n={};(()=>{i.d(n,{o:()=>c});const e={firefliesCount:50,visibleNeighborsCount:7,blinkCycleTime:1e3,globalSpeed:100};class t{constructor(t,i,n){this.isBlinked=!1,this.alpha=0,this.speed=.3,this.blinkCycleTime=e.blinkCycleTime,this.x=t,this.y=i,this._currentTime=n}get currentTime(){return this._currentTime}set currentTime(t){this._currentTime=t>e.blinkCycleTime?e.blinkCycleTime:t}blink(){this.alpha<=1&&!this.isBlinked?this.alpha+=.3*this.speed:this.alpha-=.3*this.speed,this.alpha>=1?this.isBlinked=!0:this.alpha<=0&&(this.isBlinked=!1,this.alpha=0,this.currentTime=0)}}class r{static generateParams(e,t){let i=e+Math.random()*(t+1-e);return Math.floor(i)}static generate(i,n){const r=[];for(let s=0;s<e.firefliesCount;s++){const s=this.generateParams(10,i-10),a=this.generateParams(10,n-10),o=this.generateParams(10,.85*e.blinkCycleTime);r.push(new t(s,a,o))}return r}}class s{constructor(e){console.log(e),this.realDistanceMap=[...Array(e.length)].map((e=>[])),this.firefliesMap=[...Array(e.length)].map((e=>[])),this.initlRDMap(e),console.log(this.realDistanceMap),this.initFirefliesMap(e),console.log(this.firefliesMap)}initlRDMap(e){for(let t=0;t<this.realDistanceMap.length;t++)for(let i=t+1;i<this.realDistanceMap.length;i++){const n=this.calculateDistance(e[t],e[i]);this.realDistanceMap[t][t]=Number.MAX_VALUE,this.realDistanceMap[t][i]=n,this.realDistanceMap[i][t]=n}}initFirefliesMap(t){for(let t=0;t<this.realDistanceMap.length;t++)for(let i=0;i<e.visibleNeighborsCount;i++){const e=this.realDistanceMap[t].indexOf(Math.min.apply(null,this.realDistanceMap[t]));this.realDistanceMap[t][e]=Number.MAX_VALUE,this.firefliesMap[t][e]=!0}}calculateDistance(e,i,n,r){let s=0,a=0;return e instanceof t&&i instanceof t&&(s=Math.pow(e.x-i.x,2),a=Math.pow(e.y-i.y,2)),"number"==typeof e&&"number"==typeof i&&"number"==typeof n&&"number"==typeof r&&(s=Math.pow(e-i,2),a=Math.pow(n-r,2)),Math.sqrt(s+a)}}var a=i(198);class o{constructor(e){this.fireflies=[],this.fireflyMap=[],this.requestAnimationId=0;const t=document.querySelector(e);if(null===t)throw new Error(`Element with tagname ${t} is not initialized!`);if(!(t instanceof HTMLCanvasElement))throw new Error("It's not a canvas!");this.ctx=t.getContext("2d");const i=t.getBoundingClientRect(),n=window.devicePixelRatio;t.width=i.width*n,t.height=i.height*n,this.ctx.scale(n,n),this.width=t.clientWidth,this.height=t.clientHeight,this.image=new Image,this.image.src=a}render(e){this.fireflies=e,this.requestAnimationId=window.requestAnimationFrame(this.animate.bind(this));const t=new s(e);this.fireflyMap=t.firefliesMap}fireflySynchronize(t){for(const[i,n]of this.fireflyMap[t].entries())if(!0===n){const t=this.fireflies[i];t.currentTime>=e.blinkCycleTime/2&&(t.currentTime+=.01*t.currentTime)}}animate(){this.ctx.clearRect(0,0,this.width,this.height);for(let t=0;t<this.fireflies.length;t++){let i=this.fireflies[t];this.ctx.drawImage(this.image,i.x-10,i.y-10,20,20),this.ctx.beginPath();const n=this.ctx.createRadialGradient(i.x,i.y,2,i.x,i.y,10);n.addColorStop(0,`rgba(240, 214, 17, ${i.alpha})`),n.addColorStop(1,"rgba(255, 255, 255, 0)"),this.ctx.fillStyle=n,this.ctx.fillRect(i.x-10,i.y-10,20,20),this.ctx.fill(),i.currentTime>=i.blinkCycleTime?(i.blink(),this.fireflySynchronize(t)):i.currentTime+=i.speed*e.globalSpeed}this.requestAnimationId=window.requestAnimationFrame(this.animate.bind(this))}stop(){window.cancelAnimationFrame(this.requestAnimationId)}}class l{constructor(e){this._settings=e}init(){this._initRangeInput(this._settings.firefliesCount,"firefliesCount"),this._initRangeInput(this._settings.visibleNeighborsCount,"visibleNeighborsCount"),this._initRangeInput(this._settings.blinkCycleTime,"blinkCycleTime"),this._initRangeInput(this._settings.globalSpeed,"globalSpeed",!1)}_initRangeInput(t,i,n=!0){const r=document.getElementById(t.baseSelector),s=document.getElementById(t.counterSelector),a=e[i];r.value=a.toString(),s.innerHTML=a.toString(),r.addEventListener("input",(t=>{const r=parseInt(t.target.value);s.innerHTML=r.toString(),e[i]=r,n&&c(this._settings.canvas)}))}}function c(e){e.stop();const t=r.generate(e.width,e.height);e.render(t)}document.addEventListener("DOMContentLoaded",(()=>{var e;const t=new o("canvas");new l({canvas:t,firefliesCount:{baseSelector:"fireflies-counter-range",counterSelector:"fireflies-counter-current"},visibleNeighborsCount:{baseSelector:"neighbors-counter-range",counterSelector:"neighbors-counter-current"},blinkCycleTime:{baseSelector:"cycle-counter-range",counterSelector:"cycle-counter-current"},globalSpeed:{baseSelector:"speed-counter-range",counterSelector:"speed-counter-current"}}).init();const i=r.generate(t.width,t.height);t.render(i),null===(e=document.getElementById("regenerate-button"))||void 0===e||e.addEventListener("click",(()=>{c(t)}))}))})()})();