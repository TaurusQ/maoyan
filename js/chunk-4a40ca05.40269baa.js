(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4a40ca05"],{"57f6":function(t,e,o){},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,o){var i=o("1d80"),n=o("5899"),s="["+n+"]",r=RegExp("^"+s+s+"*"),h=RegExp(s+s+"*$"),c=function(t){return function(e){var o=String(i(e));return 1&t&&(o=o.replace(r,"")),2&t&&(o=o.replace(h,"")),o}};t.exports={start:c(1),end:c(2),trim:c(3)}},7156:function(t,e,o){var i=o("861d"),n=o("d2bb");t.exports=function(t,e,o){var s,r;return n&&"function"==typeof(s=e.constructor)&&s!==o&&i(r=s.prototype)&&r!==o.prototype&&n(t,r),t}},"735b":function(t,e,o){"use strict";var i=o("bc3a"),n=o.n(i),s=o("2b0e");function r(t){var e=n.a.create({baseURL:"https://www.softeem.xin/maoyanApi/ajax/",timeout:5e3});return e.interceptors.request.use((function(t){return s["a"].prototype.$loading.showLoading(),t}),(function(t){console.log(t)})),e.interceptors.response.use((function(t){return s["a"].prototype.$loading.closeLoading(),t.data}),(function(t){console.log(t)})),e(t)}function h(t){var e=n.a.create({timeout:5e3});return e.interceptors.request.use((function(t){return t}),(function(t){})),e.interceptors.response.use((function(t){return t.data}),(function(t){console.log(t)})),e(t)}function c(){return r({url:"/movieOnInfoList"})}function a(){return h({url:"/data/comingList"})}function l(){return h({url:"/data/comingMoreList"})}function p(){return r({url:"/mostExpected?ci=57&token=&limit=10&ofset=0"})}function u(t){return h({url:"/data/movieDetail"})}o.d(e,"e",(function(){return c})),o.d(e,"a",(function(){return a})),o.d(e,"b",(function(){return l})),o.d(e,"c",(function(){return p})),o.d(e,"d",(function(){return u}))},"90b9":function(t,e,o){"use strict";function i(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:400,o=null;return function(){for(var i=this,n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];o&&clearTimeout(o),o=setTimeout((function(){t.apply(i,s)}),e)}}o.d(e,"a",(function(){return i}))},"977b":function(t,e,o){"use strict";var i=o("57f6"),n=o.n(i);n.a},a9e3:function(t,e,o){"use strict";var i=o("83ab"),n=o("da84"),s=o("94ca"),r=o("6eeb"),h=o("5135"),c=o("c6b6"),a=o("7156"),l=o("c04e"),p=o("d039"),u=o("7c73"),f=o("241c").f,d=o("06cf").f,v=o("9bf2").f,m=o("58a8").trim,y="Number",g=n[y],k=g.prototype,T=c(u(k))==y,b=function(t){var e,o,i,n,s,r,h,c,a=l(t,!1);if("string"==typeof a&&a.length>2)if(a=m(a),e=a.charCodeAt(0),43===e||45===e){if(o=a.charCodeAt(2),88===o||120===o)return NaN}else if(48===e){switch(a.charCodeAt(1)){case 66:case 98:i=2,n=49;break;case 79:case 111:i=8,n=55;break;default:return+a}for(s=a.slice(2),r=s.length,h=0;h<r;h++)if(c=s.charCodeAt(h),c<48||c>n)return NaN;return parseInt(s,i)}return+a};if(s(y,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var w,P=function(t){var e=arguments.length<1?0:t,o=this;return o instanceof P&&(T?p((function(){k.valueOf.call(o)})):c(o)!=y)?a(new g(b(e)),o,P):b(e)},S=i?f(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;S.length>E;E++)h(g,w=S[E])&&!h(P,w)&&v(P,w,d(g,w));P.prototype=k,k.constructor=P,r(n,y,P)}},d785:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"wrapper",staticClass:"wrapper"},[o("div",{staticClass:"content",style:t.contentStyle},[t._t("default")],2)])},n=[],s=(o("a9e3"),function(t,e){return s=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])},s(t,e)});function r(t,e){function o(){this.constructor=t}s(t,e),t.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}var h=function(){return h=Object.assign||function(t){for(var e,o=1,i=arguments.length;o<i;o++)for(var n in e=arguments[o],e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t},h.apply(this,arguments)};function c(t){console.error("[BScroll warn]: "+t)}var a="undefined"!==typeof window,l=a&&navigator.userAgent.toLowerCase(),p=l&&/wechatdevtools/.test(l),u=l&&l.indexOf("android")>0;function f(){return window.performance&&window.performance.now&&window.performance.timing?window.performance.now()+window.performance.timing.navigationStart:+new Date}function d(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];for(var i=0;i<e.length;i++){var n=e[i];for(var s in n)t[s]=n[s]}return t}function v(t){return void 0===t||null===t}var m=a&&document.createElement("div").style,y=function(){if(!a)return!1;var t={webkit:"webkitTransform",Moz:"MozTransform",O:"OTransform",ms:"msTransform",standard:"transform"};for(var e in t)if(void 0!==m[t[e]])return e;return!1}();function g(t){return!1===y?t:"standard"===y?"transitionEnd"===t?"transitionend":t:y+t.charAt(0).toUpperCase()+t.substr(1)}function k(t){return"string"===typeof t?document.querySelector(t):t}function T(t,e,o,i){t.addEventListener(e,o,{passive:!1,capture:!!i})}function b(t,e,o,i){t.removeEventListener(e,o,{capture:!!i})}function w(t){var e=0,o=0;while(t)e-=t.offsetLeft,o-=t.offsetTop,t=t.offsetParent;return{left:e,top:o}}y&&"standard"!==y&&y.toLowerCase();var P=g("transform"),S=g("transition"),E=a&&g("perspective")in m,B=a&&("ontouchstart"in window||p),X=a&&S in m,Y={transform:P,transition:S,transitionTimingFunction:g("transitionTimingFunction"),transitionDuration:g("transitionDuration"),transitionDelay:g("transitionDelay"),transformOrigin:g("transformOrigin"),transitionEnd:g("transitionEnd")},L={touchstart:1,touchmove:1,touchend:1,mousedown:2,mousemove:2,mouseup:2};function x(t){if(t instanceof window.SVGElement){var e=t.getBoundingClientRect();return{top:e.top,left:e.left,width:e.width,height:e.height}}return{top:t.offsetTop,left:t.offsetLeft,width:t.offsetWidth,height:t.offsetHeight}}function D(t,e){for(var o in e)if(e[o].test(t[o]))return!0;return!1}var C=D;function M(t,e){var o=document.createEvent("Event");o.initEvent(e,!0,!0),o.pageX=t.pageX,o.pageY=t.pageY,t.target.dispatchEvent(o)}function O(t,e){var o;void 0===e&&(e="click"),"mouseup"===t.type?o=t:"touchend"!==t.type&&"touchcancel"!==t.type||(o=t.changedTouches[0]);var i,n={};o&&(n.screenX=o.screenX||0,n.screenY=o.screenY||0,n.clientX=o.clientX||0,n.clientY=o.clientY||0);var s=!0,r=!0;if("undefined"!==typeof MouseEvent)try{i=new MouseEvent(e,d({bubbles:s,cancelable:r},n))}catch(t){h()}else h();function h(){i=document.createEvent("Event"),i.initEvent(e,s,r),d(i,n)}i.forwardedTouchEvent=!0,i._constructed=!0,t.target.dispatchEvent(i)}function A(t){O(t,"dblclick")}var z={swipe:{style:"cubic-bezier(0.23, 1, 0.32, 1)",fn:function(t){return 1+--t*t*t*t*t}},swipeBounce:{style:"cubic-bezier(0.25, 0.46, 0.45, 0.94)",fn:function(t){return t*(2-t)}},bounce:{style:"cubic-bezier(0.165, 0.84, 0.44, 1)",fn:function(t){return 1- --t*t*t*t}}},F=100/60,_=a&&window;function I(){}var N=function(){return a?_.requestAnimationFrame||_.webkitRequestAnimationFrame||_.mozRequestAnimationFrame||_.oRequestAnimationFrame||function(t){return window.setTimeout(t,(t.interval||F)/2)}:I}(),H=function(){return a?_.cancelAnimationFrame||_.webkitCancelAnimationFrame||_.mozCancelAnimationFrame||_.oCancelAnimationFrame||function(t){window.clearTimeout(t)}:I}(),R=function(t){},U={enumerable:!0,configurable:!0,get:R,set:R},K=function(t,e){for(var o=e.split("."),i=0;i<o.length-1;i++)if(t=t[o[i]],"object"!==typeof t||!t)return;var n=o.pop();return"function"===typeof t[n]?function(){return t[n].apply(t,arguments)}:t[n]},j=function(t,e,o){for(var i,n=e.split("."),s=0;s<n.length-1;s++)i=n[s],t[i]||(t[i]={}),t=t[i];t[n.pop()]=o};function W(t,e,o){U.get=function(){return K(this,e)},U.set=function(t){j(this,e,t)},Object.defineProperty(t,o,U)}var $=function(){function t(t){this.events={},this.eventTypes={},this.registerType(t)}return t.prototype.on=function(t,e,o){return void 0===o&&(o=this),this.hasType(t),this.events[t]||(this.events[t]=[]),this.events[t].push([e,o]),this},t.prototype.once=function(t,e,o){var i=this;void 0===o&&(o=this),this.hasType(t);var n=function(){for(var s=[],r=0;r<arguments.length;r++)s[r]=arguments[r];i.off(t,n),e.apply(o,s)};return n.fn=e,this.on(t,n),this},t.prototype.off=function(t,e){if(!t&&!e)return this.events={},this;if(t){if(this.hasType(t),!e)return this.events[t]=[],this;var o=this.events[t];if(!o)return this;var i=o.length;while(i--)(o[i][0]===e||o[i][0]&&o[i][0].fn===e)&&o.splice(i,1);return this}},t.prototype.trigger=function(t){for(var e=[],o=1;o<arguments.length;o++)e[o-1]=arguments[o];this.hasType(t);var i=this.events[t];if(i)for(var n,s=i.length,r=i.slice(),h=0;h<s;h++){var c=r[h],a=c[0],l=c[1];if(a&&(n=a.apply(l,e),!0===n))return n}},t.prototype.registerType=function(t){var e=this;t.forEach((function(t){e.eventTypes[t]=t}))},t.prototype.destroy=function(){this.events={},this.eventTypes={}},t.prototype.hasType=function(t){var e=this.eventTypes,o=e[t]===t;o||c('EventEmitter has used unknown event type: "'+t+'", should be oneof ['+Object.keys(e).map((function(t){return JSON.stringify(t)}))+"]")},t}(),q=function(){function t(t,e){this.wrapper=t,this.events=e,this.addDOMEvents()}return t.prototype.destroy=function(){this.removeDOMEvents(),this.events=[]},t.prototype.addDOMEvents=function(){this.handleDOMEvents(T)},t.prototype.removeDOMEvents=function(){this.handleDOMEvents(b)},t.prototype.handleDOMEvents=function(t){var e=this,o=this.wrapper;this.events.forEach((function(i){t(o,i.name,e,!!i.capture)}))},t.prototype.handleEvent=function(t){var e=t.type;this.events.some((function(o){return o.name===e&&(o.handler(t),!0)}))},t}(),V=function(){function t(){this.startX=0,this.startY=0,this.scrollX=!1,this.scrollY=!0,this.freeScroll=!1,this.directionLockThreshold=5,this.eventPassthrough="",this.click=!1,this.dblclick=!1,this.tap="",this.bounce={top:!0,bottom:!0,left:!0,right:!0},this.bounceTime=800,this.momentum=!0,this.momentumLimitTime=300,this.momentumLimitDistance=15,this.swipeTime=2500,this.swipeBounceTime=500,this.deceleration=.0015,this.flickLimitTime=200,this.flickLimitDistance=100,this.resizePolling=60,this.probeType=0,this.stopPropagation=!1,this.preventDefault=!0,this.preventDefaultException={tagName:/^(INPUT|TEXTAREA|BUTTON|SELECT|AUDIO)$/},this.tagException={tagName:/^TEXTAREA$/},this.HWCompositing=!0,this.useTransition=!0,this.bindToWrapper=!1,this.disableMouse=B,this.disableTouch=!B,this.autoBlur=!0}return t.prototype.merge=function(t){if(!t)return this;for(var e in t)this[e]=t[e];return this},t.prototype.process=function(){return this.translateZ=this.HWCompositing&&E?" translateZ(0)":"",this.useTransition=this.useTransition&&X,this.preventDefault=!this.eventPassthrough&&this.preventDefault,this.resolveBounce(),this.scrollX="horizontal"!==this.eventPassthrough&&this.scrollX,this.scrollY="vertical"!==this.eventPassthrough&&this.scrollY,this.freeScroll=this.freeScroll&&!this.eventPassthrough,this.scrollX=!!this.freeScroll||this.scrollX,this.scrollY=!!this.freeScroll||this.scrollY,this.directionLockThreshold=this.eventPassthrough?0:this.directionLockThreshold,this},t.prototype.resolveBounce=function(){var t=["top","right","bottom","left"],e=this.bounce;!1!==e&&!0!==e||(this.bounce=G(t,e))},t}();function G(t,e){void 0===e&&(e=!0);var o={};return t.forEach((function(t){o[t]=e})),o}var Z=function(){function t(t,e){this.wrapper=t,this.options=e,this.hooks=new $(["beforeStart","start","move","end","click"]),this.handleDOMEvents()}return t.prototype.handleDOMEvents=function(){var t=this.options,e=t.bindToWrapper,o=t.disableMouse,i=t.disableTouch,n=t.click,s=this.wrapper,r=e?s:window,h=[],c=[],a=B&&!i,l=!o;n&&h.push({name:"click",handler:this.click.bind(this),capture:!0}),a&&(h.push({name:"touchstart",handler:this.start.bind(this)}),c.push({name:"touchmove",handler:this.move.bind(this)},{name:"touchend",handler:this.end.bind(this)},{name:"touchcancel",handler:this.end.bind(this)})),l&&(h.push({name:"mousedown",handler:this.start.bind(this)}),c.push({name:"mousemove",handler:this.move.bind(this)},{name:"mouseup",handler:this.end.bind(this)})),this.wrapperEventRegister=new q(s,h),this.targetEventRegister=new q(r,c)},t.prototype.beforeHandler=function(t,e){var o=this.options,i=o.preventDefault,n=o.stopPropagation,s=o.preventDefaultException,r={start:function(){return i&&!D(t.target,s)},end:function(){return i&&!D(t.target,s)},move:function(){return i}};r[e]()&&t.preventDefault(),n&&t.stopPropagation()},t.prototype.setInitiated=function(t){void 0===t&&(t=0),this.initiated=t},t.prototype.start=function(t){var e=L[t.type];if(!this.initiated||this.initiated===e)if(this.setInitiated(e),C(t.target,this.options.tagException))this.setInitiated();else if((2!==e||0===t.button)&&!this.hooks.trigger(this.hooks.eventTypes.beforeStart,t)){this.beforeHandler(t,"start");var o=t.touches?t.touches[0]:t;this.pointX=o.pageX,this.pointY=o.pageY,this.hooks.trigger(this.hooks.eventTypes.start,t)}},t.prototype.move=function(t){if(L[t.type]===this.initiated){this.beforeHandler(t,"move");var e=t.touches?t.touches[0]:t,o=e.pageX-this.pointX,i=e.pageY-this.pointY;if(this.pointX=e.pageX,this.pointY=e.pageY,!this.hooks.trigger(this.hooks.eventTypes.move,{deltaX:o,deltaY:i,e:t})){var n=document.documentElement.scrollLeft||window.pageXOffset||document.body.scrollLeft,s=document.documentElement.scrollTop||window.pageYOffset||document.body.scrollTop,r=this.pointX-n,h=this.pointY-s;(r>document.documentElement.clientWidth-this.options.momentumLimitDistance||r<this.options.momentumLimitDistance||h<this.options.momentumLimitDistance||h>document.documentElement.clientHeight-this.options.momentumLimitDistance)&&this.end(t)}}},t.prototype.end=function(t){L[t.type]===this.initiated&&(this.setInitiated(),this.beforeHandler(t,"end"),this.hooks.trigger(this.hooks.eventTypes.end,t))},t.prototype.click=function(t){this.hooks.trigger(this.hooks.eventTypes.click,t)},t.prototype.destroy=function(){this.wrapperEventRegister.destroy(),this.targetEventRegister.destroy(),this.hooks.destroy()},t}(),J={x:["translateX","px"],y:["translateY","px"]},Q=function(){function t(t){this.content=t,this.style=t.style,this.hooks=new $(["beforeTranslate","translate"])}return t.prototype.getComputedPosition=function(){var t=window.getComputedStyle(this.content,null),e=t[Y.transform].split(")")[0].split(", "),o=+(e[12]||e[4]),i=+(e[13]||e[5]);return{x:o,y:i}},t.prototype.translate=function(t){var e=[];Object.keys(t).forEach((function(o){if(J[o]){var i=J[o][0];if(i){var n=J[o][1],s=t[o];e.push(i+"("+s+n+")")}}})),this.hooks.trigger(this.hooks.eventTypes.beforeTranslate,e,t),this.style[Y.transform]=e.join(" "),this.hooks.trigger(this.hooks.eventTypes.translate,t)},t.prototype.destroy=function(){this.hooks.destroy()},t}(),tt=function(){function t(t,e,o){this.content=t,this.translater=e,this.options=o,this.hooks=new $(["move","end","beforeForceStop","forceStop","time","timeFunction"]),this.style=t.style}return t.prototype.translate=function(t){this.translater.translate(t)},t.prototype.setPending=function(t){this.pending=t},t.prototype.setForceStopped=function(t){this.forceStopped=t},t.prototype.destroy=function(){this.hooks.destroy(),H(this.timer)},t}(),et=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.startProbe=function(){var t=this,e=function(){var o=t.translater.getComputedPosition();t.hooks.trigger(t.hooks.eventTypes.move,o),t.pending?t.timer=N(e):t.hooks.trigger(t.hooks.eventTypes.end,o)};H(this.timer),this.timer=N(e)},e.prototype.transitionTime=function(t){void 0===t&&(t=0),this.style[Y.transitionDuration]=t+"ms",this.hooks.trigger(this.hooks.eventTypes.time,t)},e.prototype.transitionTimingFunction=function(t){this.style[Y.transitionTimingFunction]=t,this.hooks.trigger(this.hooks.eventTypes.timeFunction,t)},e.prototype.move=function(t,e,o,i,n){this.setPending(o>0&&(t.x!==e.x||t.y!==e.y)),this.transitionTimingFunction(i),this.transitionTime(o),this.translate(e),o&&3===this.options.probeType&&this.startProbe(),o||(this._reflow=this.content.offsetHeight),o||n||(this.hooks.trigger(this.hooks.eventTypes.move,e),this.hooks.trigger(this.hooks.eventTypes.end,e))},e.prototype.stop=function(){if(this.pending){this.setPending(!1),H(this.timer);var t=this.translater.getComputedPosition(),e=t.x,o=t.y;if(this.transitionTime(),this.translate({x:e,y:o}),this.setForceStopped(!0),this.hooks.trigger(this.hooks.eventTypes.beforeForceStop,{x:e,y:o}))return;this.hooks.trigger(this.hooks.eventTypes.forceStop,{x:e,y:o})}},e}(tt),ot=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.move=function(t,e,o,i,n){if(!o){if(this.translate(e),this._reflow=this.content.offsetHeight,n)return;return this.hooks.trigger(this.hooks.eventTypes.move,e),void this.hooks.trigger(this.hooks.eventTypes.end,e)}this.animate(t,e,o,i)},e.prototype.animate=function(t,e,o,i){var n=this,s=f(),r=s+o,h=function(){var c=f();if(c>=r)return n.translate(e),n.hooks.trigger(n.hooks.eventTypes.move,e),void n.hooks.trigger(n.hooks.eventTypes.end,e);c=(c-s)/o;var a=i(c),l={};Object.keys(e).forEach((function(o){var i=t[o],n=e[o];l[o]=(n-i)*a+i})),n.translate(l),n.pending&&(n.timer=N(h)),3===n.options.probeType&&n.hooks.trigger(n.hooks.eventTypes.move,l)};this.setPending(!0),H(this.timer),h()},e.prototype.stop=function(){if(this.pending){this.setPending(!1),H(this.timer);var t=this.translater.getComputedPosition();if(this.setForceStopped(!0),this.hooks.trigger(this.hooks.eventTypes.beforeForceStop,t))return;this.hooks.trigger(this.hooks.eventTypes.forceStop,t)}},e}(tt);function it(t,e,o){var i=o.useTransition,n={};return Object.defineProperty(n,"probeType",{enumerable:!0,configurable:!1,get:function(){return o.probeType}}),i?new et(t,e,n):new ot(t,e,n)}var nt,st,rt,ht,ct=function(){function t(t,e){this.wrapper=t,this.options=e,this.hooks=new $(["momentum","end"]),this.content=this.wrapper.children[0],this.currentPos=0,this.startPos=0}return t.prototype.start=function(){this.direction=0,this.movingDirection=0,this.dist=0},t.prototype.move=function(t){t=this.hasScroll?t:0,this.movingDirection=t>0?-1:t<0?1:0;var e=this.currentPos+t;return(e>this.minScrollPos||e<this.maxScrollPos)&&(e=e>this.minScrollPos&&this.options.bounces[0]||e<this.maxScrollPos&&this.options.bounces[1]?this.currentPos+t/3:e>this.minScrollPos?this.minScrollPos:this.maxScrollPos),e},t.prototype.end=function(t){var e={duration:0},o=Math.abs(this.currentPos-this.startPos);if(this.options.momentum&&t<this.options.momentumLimitTime&&o>this.options.momentumLimitDistance){var i=-1===this.direction&&this.options.bounces[0]||1===this.direction&&this.options.bounces[1]?this.wrapperSize:0;e=this.hasScroll?this.momentum(this.currentPos,this.startPos,t,this.maxScrollPos,this.minScrollPos,i,this.options):{destination:this.currentPos,duration:0}}else this.hooks.trigger(this.hooks.eventTypes.end,e);return e},t.prototype.momentum=function(t,e,o,i,n,s,r){void 0===r&&(r=this.options);var h=t-e,c=Math.abs(h)/o,a=r.deceleration,l=r.swipeBounceTime,p=r.swipeTime,u={destination:t+c/a*(h<0?-1:1),duration:p,rate:15};return this.hooks.trigger(this.hooks.eventTypes.momentum,u,h),u.destination<i?(u.destination=s?Math.max(i-s/4,i-s/u.rate*c):i,u.duration=l):u.destination>n&&(u.destination=s?Math.min(n+s/4,n+s/u.rate*c):n,u.duration=l),u.destination=Math.round(u.destination),u},t.prototype.updateDirection=function(){var t=Math.round(this.currentPos)-this.absStartPos;this.direction=t>0?-1:t<0?1:0},t.prototype.refresh=function(){var t=this.options.rect,e=t.size,o=t.position,i="static"===window.getComputedStyle(this.wrapper,null).position,n=x(this.wrapper);this.wrapperSize=n[e];var s=x(this.content);this.contentSize=s[e],this.relativeOffset=s[o],i&&(this.relativeOffset-=n[o]),this.minScrollPos=0,this.maxScrollPos=this.wrapperSize-this.contentSize,this.maxScrollPos<0&&(this.maxScrollPos-=this.relativeOffset,this.minScrollPos=-this.relativeOffset),this.hasScroll=this.options.scrollable&&this.maxScrollPos<this.minScrollPos,this.hasScroll||(this.maxScrollPos=this.minScrollPos,this.contentSize=this.wrapperSize),this.direction=0},t.prototype.updatePosition=function(t){this.currentPos=t},t.prototype.getCurrentPos=function(){return Math.round(this.currentPos)},t.prototype.checkInBoundary=function(){var t=this.adjustPosition(this.currentPos),e=t===this.getCurrentPos();return{position:t,inBoundary:e}},t.prototype.adjustPosition=function(t){var e=Math.round(t);return!this.hasScroll||e>this.minScrollPos?e=this.minScrollPos:e<this.maxScrollPos&&(e=this.maxScrollPos),e},t.prototype.updateStartPos=function(){this.startPos=this.currentPos},t.prototype.updateAbsStartPos=function(){this.absStartPos=this.currentPos},t.prototype.resetStartPos=function(){this.updateStartPos(),this.updateAbsStartPos()},t.prototype.getAbsDist=function(t){return this.dist+=t,Math.abs(this.dist)},t.prototype.destroy=function(){this.hooks.destroy()},t}(),at=(nt={},nt["yes"]=function(t){return!0},nt["no"]=function(t){return t.preventDefault(),!1},nt),lt=(st={},st["horizontal"]=(rt={},rt["yes"]="horizontal",rt["no"]="vertical",rt),st["vertical"]=(ht={},ht["yes"]="vertical",ht["no"]="horizontal",ht),st),pt=function(){function t(t,e,o){this.directionLockThreshold=t,this.freeScroll=e,this.eventPassthrough=o,this.reset()}return t.prototype.reset=function(){this.directionLocked=""},t.prototype.checkMovingDirection=function(t,e,o){return this.computeDirectionLock(t,e),this.handleEventPassthrough(o)},t.prototype.adjustDelta=function(t,e){return"horizontal"===this.directionLocked?e=0:"vertical"===this.directionLocked&&(t=0),{deltaX:t,deltaY:e}},t.prototype.computeDirectionLock=function(t,e){""!==this.directionLocked||this.freeScroll||(t>e+this.directionLockThreshold?this.directionLocked="horizontal":e>=t+this.directionLockThreshold?this.directionLocked="vertical":this.directionLocked="none")},t.prototype.handleEventPassthrough=function(t){var e=lt[this.directionLocked];if(e){if(this.eventPassthrough===e["yes"])return at["yes"](t);if(this.eventPassthrough===e["no"])return at["no"](t)}return!1},t}(),ut=function(){function t(t,e,o,i,n){this.hooks=new $(["start","beforeMove","scrollStart","scroll","beforeEnd","end","scrollEnd"]),this.scrollBehaviorX=t,this.scrollBehaviorY=e,this.actionsHandler=o,this.animater=i,this.options=n,this.directionLockAction=new pt(n.directionLockThreshold,n.freeScroll,n.eventPassthrough),this.enabled=!0,this.bindActionsHandler()}return t.prototype.bindActionsHandler=function(){var t=this;this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.start,(function(e){return!t.enabled||t.handleStart(e)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.move,(function(e){var o=e.deltaX,i=e.deltaY,n=e.e;return!t.enabled||t.handleMove(o,i,n)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.end,(function(e){return!t.enabled||t.handleEnd(e)})),this.actionsHandler.hooks.on(this.actionsHandler.hooks.eventTypes.click,(function(e){t.enabled&&!e._constructed&&t.handleClick(e)}))},t.prototype.handleStart=function(t){var e=f();this.moved=!1,this.startTime=e,this.directionLockAction.reset(),this.scrollBehaviorX.start(),this.scrollBehaviorY.start(),this.animater.stop(),this.scrollBehaviorX.resetStartPos(),this.scrollBehaviorY.resetStartPos(),this.hooks.trigger(this.hooks.eventTypes.start,t)},t.prototype.handleMove=function(t,e,o){if(!this.hooks.trigger(this.hooks.eventTypes.beforeMove,o)){var i=this.scrollBehaviorX.getAbsDist(t),n=this.scrollBehaviorY.getAbsDist(e),s=f();if(this.checkMomentum(i,n,s))return!0;if(this.directionLockAction.checkMovingDirection(i,n,o))return this.actionsHandler.setInitiated(),!0;var r=this.directionLockAction.adjustDelta(t,e),h=this.scrollBehaviorX.move(r.deltaX),c=this.scrollBehaviorY.move(r.deltaY);this.moved||(this.moved=!0,this.hooks.trigger(this.hooks.eventTypes.scrollStart)),this.animater.translate({x:h,y:c}),this.dispatchScroll(s)}},t.prototype.dispatchScroll=function(t){t-this.startTime>this.options.momentumLimitTime&&(this.startTime=t,this.scrollBehaviorX.updateStartPos(),this.scrollBehaviorY.updateStartPos(),1===this.options.probeType&&this.hooks.trigger(this.hooks.eventTypes.scroll,this.getCurrentPos())),this.options.probeType>1&&this.hooks.trigger(this.hooks.eventTypes.scroll,this.getCurrentPos())},t.prototype.checkMomentum=function(t,e,o){return o-this.endTime>this.options.momentumLimitTime&&e<this.options.momentumLimitDistance&&t<this.options.momentumLimitDistance},t.prototype.handleEnd=function(t){if(!this.hooks.trigger(this.hooks.eventTypes.beforeEnd,t)){var e=this.getCurrentPos();if(this.scrollBehaviorX.updateDirection(),this.scrollBehaviorY.updateDirection(),this.hooks.trigger(this.hooks.eventTypes.end,t,e))return!0;this.animater.translate(e),this.endTime=f();var o=this.endTime-this.startTime;this.hooks.trigger(this.hooks.eventTypes.scrollEnd,e,o)}},t.prototype.handleClick=function(t){D(t.target,this.options.preventDefaultException)||(t.preventDefault(),t.stopPropagation())},t.prototype.getCurrentPos=function(){return{x:this.scrollBehaviorX.getCurrentPos(),y:this.scrollBehaviorY.getCurrentPos()}},t.prototype.refresh=function(){this.endTime=0},t.prototype.destroy=function(){this.hooks.destroy()},t}();function ft(t){var e=["click","bindToWrapper","disableMouse","disableTouch","preventDefault","stopPropagation","tagException","preventDefaultException"].reduce((function(e,o){return e[o]=t[o],e}),{});return e}function dt(t,e,o,i){var n=["momentum","momentumLimitTime","momentumLimitDistance","deceleration","swipeBounceTime","swipeTime"].reduce((function(e,o){return e[o]=t[o],e}),{});return n.scrollable=t[e],n.bounces=o,n.rect=i,n}function vt(t,e,o){o.forEach((function(o){var i,n;"string"===typeof o?i=n=o:(i=o.source,n=o.target),t.on(i,(function(){for(var t=[],o=0;o<arguments.length;o++)t[o]=arguments[o];return e.trigger.apply(e,[n].concat(t))}))}))}var mt=function(){function t(t,e){this.hooks=new $(["beforeStart","beforeMove","beforeScrollStart","scrollStart","scroll","beforeEnd","scrollEnd","refresh","touchEnd","end","flick","scrollCancel","momentum","scrollTo","ignoreDisMoveForSamePos","scrollToElement"]),this.wrapper=t,this.content=t.children[0],this.options=e;var o=this.options.bounce,i=o.left,n=void 0===i||i,s=o.right,r=void 0===s||s,h=o.top,c=void 0===h||h,a=o.bottom,l=void 0===a||a;this.scrollBehaviorX=new ct(t,dt(e,"scrollX",[n,r],{size:"width",position:"left"})),this.scrollBehaviorY=new ct(t,dt(e,"scrollY",[c,l],{size:"height",position:"top"})),this.translater=new Q(this.content),this.animater=it(this.content,this.translater,this.options),this.actionsHandler=new Z(t,ft(this.options)),this.actions=new ut(this.scrollBehaviorX,this.scrollBehaviorY,this.actionsHandler,this.animater,this.options);var p=this.resize.bind(this);this.resizeRegister=new q(window,[{name:"orientationchange",handler:p},{name:"resize",handler:p}]),this.transitionEndRegister=new q(this.content,[{name:Y.transitionEnd,handler:this.transitionEnd.bind(this)}]),this.init()}return t.prototype.init=function(){var t=this;this.bindTranslater(),this.bindAnimater(),this.bindActions(),this.hooks.on(this.hooks.eventTypes.scrollEnd,(function(){t.togglePointerEvents(!0)}))},t.prototype.bindTranslater=function(){var t=this,e=this.translater.hooks;e.on(e.eventTypes.beforeTranslate,(function(e){t.options.translateZ&&e.push(t.options.translateZ)})),e.on(e.eventTypes.translate,(function(e){t.updatePositions(e),t.togglePointerEvents(!1)}))},t.prototype.bindAnimater=function(){var t=this;this.animater.hooks.on(this.animater.hooks.eventTypes.end,(function(e){t.resetPosition(t.options.bounceTime)||(t.animater.setPending(!1),t.hooks.trigger(t.hooks.eventTypes.scrollEnd,e))})),vt(this.animater.hooks,this.hooks,[{source:this.animater.hooks.eventTypes.move,target:this.hooks.eventTypes.scroll},{source:this.animater.hooks.eventTypes.forceStop,target:this.hooks.eventTypes.scrollEnd}])},t.prototype.bindActions=function(){var t=this,e=this.actions;vt(e.hooks,this.hooks,[{source:e.hooks.eventTypes.start,target:this.hooks.eventTypes.beforeStart},{source:e.hooks.eventTypes.start,target:this.hooks.eventTypes.beforeScrollStart},{source:e.hooks.eventTypes.beforeMove,target:this.hooks.eventTypes.beforeMove},{source:e.hooks.eventTypes.scrollStart,target:this.hooks.eventTypes.scrollStart},{source:e.hooks.eventTypes.scroll,target:this.hooks.eventTypes.scroll},{source:e.hooks.eventTypes.beforeEnd,target:this.hooks.eventTypes.beforeEnd}]),e.hooks.on(e.hooks.eventTypes.end,(function(o,i){return t.hooks.trigger(t.hooks.eventTypes.touchEnd,i),!!t.hooks.trigger(t.hooks.eventTypes.end,i)||(!e.moved&&t.checkClick(o)?(t.animater.setForceStopped(!1),t.hooks.trigger(t.hooks.eventTypes.scrollCancel),!0):(t.animater.setForceStopped(!1),!!t.resetPosition(t.options.bounceTime,z.bounce)||void 0))})),e.hooks.on(e.hooks.eventTypes.scrollEnd,(function(e,o){var i=Math.abs(e.x-t.scrollBehaviorX.startPos),n=Math.abs(e.y-t.scrollBehaviorY.startPos);t.checkFlick(o,i,n)?t.hooks.trigger(t.hooks.eventTypes.flick):t.momentum(e,o)||t.hooks.trigger(t.hooks.eventTypes.scrollEnd,e)}))},t.prototype.checkFlick=function(t,e,o){if(this.hooks.events.flick.length>1&&t<this.options.flickLimitTime&&e<this.options.flickLimitDistance&&o<this.options.flickLimitDistance)return!0},t.prototype.momentum=function(t,e){var o={time:0,easing:z.swiper,newX:t.x,newY:t.y},i=this.scrollBehaviorX.end(e),n=this.scrollBehaviorY.end(e);if(o.newX=v(i.destination)?o.newX:i.destination,o.newY=v(n.destination)?o.newY:n.destination,o.time=Math.max(i.duration,n.duration),this.hooks.trigger(this.hooks.eventTypes.momentum,o,this),o.newX!==t.x||o.newY!==t.y)return(o.newX>this.scrollBehaviorX.minScrollPos||o.newX<this.scrollBehaviorX.maxScrollPos||o.newY>this.scrollBehaviorY.minScrollPos||o.newY<this.scrollBehaviorY.maxScrollPos)&&(o.easing=z.swipeBounce),this.scrollTo(o.newX,o.newY,o.time,o.easing),!0},t.prototype.checkClick=function(t){var e={preventClick:this.animater.forceStopped};if(this.hooks.trigger(this.hooks.eventTypes.checkClick))return!0;if(!e.preventClick){var o=this.options.dblclick,i=!1;if(o&&this.lastClickTime){var n=o.delay,s=void 0===n?300:n;f()-this.lastClickTime<s&&(i=!0,A(t))}return this.options.tap&&M(t,this.options.tap),this.options.click&&!D(t.target,this.options.preventDefaultException)&&O(t),this.lastClickTime=i?null:f(),!0}return!1},t.prototype.resize=function(){var t=this;this.actions.enabled&&(u&&(this.wrapper.scrollTop=0),clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout((function(){t.refresh()}),this.options.resizePolling))},t.prototype.transitionEnd=function(t){if(t.target===this.content&&this.animater.pending){var e=this.animater;e.transitionTime(),this.resetPosition(this.options.bounceTime,z.bounce)||(this.animater.setPending(!1),3!==this.options.probeType&&this.hooks.trigger(this.hooks.eventTypes.scrollEnd,this.getCurrentPos()))}},t.prototype.togglePointerEvents=function(t){void 0===t&&(t=!0);for(var e=this.content.children.length?this.content.children:[this.content],o=t?"auto":"none",i=0;i<e.length;i++){var n=e[i];n.isBScrollContainer||(n.style.pointerEvents=o)}},t.prototype.refresh=function(){this.scrollBehaviorX.refresh(),this.scrollBehaviorY.refresh(),this.actions.refresh(),this.wrapperOffset=w(this.wrapper)},t.prototype.scrollBy=function(t,e,o,i){void 0===o&&(o=0);var n=this.getCurrentPos(),s=n.x,r=n.y;i=i||z.bounce,t+=s,e+=r,this.scrollTo(t,e,o,i)},t.prototype.scrollTo=function(t,e,o,i,n,s){void 0===o&&(o=0),void 0===n&&(n={start:{},end:{}}),i=i||z.bounce;var r=this.options.useTransition?i.style:i.fn,c=this.getCurrentPos(),a=h({x:c.x,y:c.y},n.start),l=h({x:t,y:e},n.end);this.hooks.trigger(this.hooks.eventTypes.scrollTo,l),(this.hooks.trigger(this.hooks.eventTypes.ignoreDisMoveForSamePos)||a.x!==l.x||a.y!==l.y)&&this.animater.move(a,l,o,r,s)},t.prototype.scrollToElement=function(t,e,o,i,n){var s=k(t),r=w(s),h=function(t,e,o){return"number"===typeof t?t:t?Math.round(e/2-o/2):0};o=h(o,s.offsetWidth,this.wrapper.offsetWidth),i=h(i,s.offsetHeight,this.wrapper.offsetHeight);var c=function(t,e,o,i){return t-=e,t=i.adjustPosition(t-o),t};r.left=c(r.left,this.wrapperOffset.left,o,this.scrollBehaviorX),r.top=c(r.top,this.wrapperOffset.top,i,this.scrollBehaviorY),this.hooks.trigger(this.hooks.eventTypes.scrollToElement,s,r)||this.scrollTo(r.left,r.top,e,n)},t.prototype.resetPosition=function(t,e){void 0===t&&(t=0),e=e||z.bounce;var o=this.scrollBehaviorX.checkInBoundary(),i=o.position,n=o.inBoundary,s=this.scrollBehaviorY.checkInBoundary(),r=s.position,h=s.inBoundary;return(!n||!h)&&(this.scrollTo(i,r,t,e),!0)},t.prototype.updatePositions=function(t){this.scrollBehaviorX.updatePosition(t.x),this.scrollBehaviorY.updatePosition(t.y)},t.prototype.getCurrentPos=function(){return this.actions.getCurrentPos()},t.prototype.enable=function(){this.actions.enabled=!0},t.prototype.disable=function(){H(this.animater.timer),this.actions.enabled=!1},t.prototype.destroy=function(){var t=this,e=["resizeRegister","transitionEndRegister","actionsHandler","actions","hooks","animater","translater","scrollBehaviorX","scrollBehaviorY"];e.forEach((function(e){return t[e].destroy()}))},t}(),yt=[{sourceKey:"scroller.scrollBehaviorX.currentPos",key:"x"},{sourceKey:"scroller.scrollBehaviorY.currentPos",key:"y"},{sourceKey:"scroller.scrollBehaviorX.hasScroll",key:"hasHorizontalScroll"},{sourceKey:"scroller.scrollBehaviorY.hasScroll",key:"hasVerticalScroll"},{sourceKey:"scroller.scrollBehaviorX.contentSize",key:"scrollerWidth"},{sourceKey:"scroller.scrollBehaviorY.contentSize",key:"scrollerHeight"},{sourceKey:"scroller.scrollBehaviorX.maxScrollPos",key:"maxScrollX"},{sourceKey:"scroller.scrollBehaviorY.maxScrollPos",key:"maxScrollY"},{sourceKey:"scroller.scrollBehaviorX.minScrollPos",key:"minScrollX"},{sourceKey:"scroller.scrollBehaviorY.minScrollPos",key:"minScrollY"},{sourceKey:"scroller.scrollBehaviorX.movingDirection",key:"movingDirectionX"},{sourceKey:"scroller.scrollBehaviorY.movingDirection",key:"movingDirectionY"},{sourceKey:"scroller.scrollBehaviorX.direction",key:"directionX"},{sourceKey:"scroller.scrollBehaviorY.direction",key:"directionY"},{sourceKey:"scroller.actions.enabled",key:"enabled"},{sourceKey:"scroller.animater.pending",key:"pending"},{sourceKey:"scroller.animater.stop",key:"stop"},{sourceKey:"scroller.scrollTo",key:"scrollTo"},{sourceKey:"scroller.scrollBy",key:"scrollBy"},{sourceKey:"scroller.scrollToElement",key:"scrollToElement"},{sourceKey:"scroller.resetPosition",key:"resetPosition"}],gt=function(t){function e(e,o){var i=t.call(this,["refresh","enable","disable","beforeScrollStart","scrollStart","scroll","scrollEnd","scrollCancel","touchEnd","flick","destroy"])||this,n=k(e);if(!n)return c("Can not resolve the wrapper DOM."),i;var s=n.children[0];return s?(i.plugins={},i.options=(new V).merge(o).process(),i.hooks=new $(["init","refresh","enable","disable","destroy"]),i.init(n),i):(c("The wrapper need at least one child element to be scroller."),i)}return r(e,t),e.use=function(t){var e=t.pluginName,o=this.plugins.some((function(e){return t===e.ctor}));return o?this:v(e)?(c("Plugin Class must specify plugin's name in static property by 'pluginName' field."),this):this.pluginsMap[e]?(c("This plugin has been registered, maybe you need change plugin's name"),this):(this.pluginsMap[e]=!0,this.plugins.push({name:e,applyOrder:t.applyOrder,ctor:t}),this)},e.prototype.init=function(t){this.wrapper=t,t.isBScrollContainer=!0,this.scroller=new mt(t,this.options),this.eventBubbling(),this.handleAutoBlur(),this.innerRefresh(),this.scroller.scrollTo(this.options.startX,this.options.startY),this.enable(),this.proxy(yt),this.applyPlugins()},e.prototype.applyPlugins=function(){var t=this,e=this.options;this.constructor.plugins.sort((function(t,e){var o,i=(o={},o["pre"]=-1,o["post"]=1,o),n=t.applyOrder?i[t.applyOrder]:0,s=e.applyOrder?i[e.applyOrder]:0;return n-s})).forEach((function(o){var i=o.ctor;e[o.name]&&"function"===typeof i&&(t.plugins[o.name]=new i(t))}))},e.prototype.handleAutoBlur=function(){this.options.autoBlur&&this.on(this.eventTypes.beforeScrollStart,(function(){var t=document.activeElement;!t||"INPUT"!==t.tagName&&"TEXTAREA"!==t.tagName||t.blur()}))},e.prototype.eventBubbling=function(){vt(this.scroller.hooks,this,["beforeScrollStart","scrollStart","scroll","scrollEnd","scrollCancel","touchEnd","flick"])},e.prototype.innerRefresh=function(){this.scroller.refresh(),this.hooks.trigger(this.hooks.eventTypes.refresh),this.trigger(this.eventTypes.refresh)},e.prototype.proxy=function(t){var e=this;t.forEach((function(t){var o=t.key,i=t.sourceKey;W(e,i,o)}))},e.prototype.refresh=function(){this.innerRefresh(),this.scroller.resetPosition()},e.prototype.enable=function(){this.scroller.enable(),this.hooks.trigger(this.hooks.eventTypes.enable),this.trigger(this.eventTypes.enable)},e.prototype.disable=function(){this.scroller.disable(),this.hooks.trigger(this.hooks.eventTypes.disable),this.trigger(this.eventTypes.disable)},e.prototype.destroy=function(){this.hooks.trigger(this.hooks.eventTypes.destroy),this.trigger(this.eventTypes.destroy),this.scroller.destroy()},e.prototype.eventRegister=function(t){this.registerType(t)},e.plugins=[],e.pluginsMap={},e}($),kt=gt,Tt="plugins.pullUpLoad",bt=[{key:"finishPullUp",name:"finish"},{key:"openPullUp",name:"open"},{key:"closePullUp",name:"close"}],wt=bt.map((function(t){return{key:t.key,sourceKey:Tt+"."+t.name}})),Pt=function(){function t(t){this.bscroll=t,this.watching=!1,t.options.pullUpLoad&&this._watch(),this.bscroll.registerType(["pullingUp"]),this.bscroll.proxy(wt)}return t.prototype._watch=function(){this.watching||(this.bscroll.options.probeType=3,this.watching=!0,this.bscroll.on("scroll",this._checkToEnd,this))},t.prototype._checkToEnd=function(t){var e=this;if(this.bscroll.options.pullUpLoad){var o=this.bscroll.options.pullUpLoad.threshold,i=void 0===o?0:o;1===this.bscroll.movingDirectionY&&t.y<=this.bscroll.maxScrollY+i&&(this.bscroll.once("scrollEnd",(function(){e.watching=!1})),this.bscroll.trigger("pullingUp"),this.bscroll.off("scroll",this._checkToEnd))}},t.prototype.finish=function(){this.watching?this.bscroll.once("scrollEnd",this._watch,this):this._watch()},t.prototype.open=function(t){void 0===t&&(t=!0),this.bscroll.options.pullUpLoad=t,this._watch()},t.prototype.close=function(){this.bscroll.options.pullUpLoad=!1,this.watching&&(this.watching=!1,this.bscroll.off("scroll",this._checkToEnd))},t.pluginName="pullUpLoad",t}(),St=Pt;kt.use(St);var Et={name:"Scroll",props:{probeType:{type:Number,default:1},pullup:{type:Boolean,default:!1},pulldown:{type:Boolean,default:!1},scrollX:{type:Boolean,default:!1},scrollY:{type:Boolean,default:!1}},data:function(){return{scroll:null,contentStyle:{display:this.scrollX?"inline-block":"block"}}},components:{},computed:{},beforeMount:function(){},mounted:function(){var t=this;this.scroll=new kt(this.$refs.wrapper,{click:!0,probeType:this.probeType,pullUpLoad:this.pullup,scrollY:this.scrollY,scrollX:this.scrollX}),this.scroll.on("scroll",(function(e){t.$emit("scroll",e)})),this.pullup&&this.scroll.on("pullingUp",(function(){t.$emit("scrollEnd")}))},methods:{scrollTo:function(){this.scroll&&this.scroll.scrollTo.apply(this.scroll,arguments)},finishPullUp:function(){this.scroll&&this.scroll.finishPullUp()},refresh:function(){this.scroll&&this.scroll.refresh()},scrollToElement:function(){this.scroll&&this.scroll.scrollToElement.apply(this.scroll,arguments)}},watch:{}},Bt=Et,Xt=(o("977b"),o("2877")),Yt=Object(Xt["a"])(Bt,i,n,!1,null,"1098aef5",null);e["a"]=Yt.exports}}]);
//# sourceMappingURL=chunk-4a40ca05.40269baa.js.map