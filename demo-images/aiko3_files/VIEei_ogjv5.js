if (self.CavalryLogger) { CavalryLogger.start_js(["JBk3t"]); }

__d("DetectBrokenProxyCache",["AsyncSignal","Cookie","URI"],(function(a,b,c,d,e,f){function a(a,c){var d=b("Cookie").get(c);if(d!=a&&d!=null&&a!="0"){c={c:"si_detect_broken_proxy_cache",m:c+" "+a+" "+d};a=new(b("URI"))("/common/scribe_endpoint.php").getQualifiedURI().toString();new(b("AsyncSignal"))(a,c).send()}}e.exports={run:a}}),null);
__d("ConditionClassOnVisible",["CSS","Run","intersectionObserverEntryIsIntersecting","observeIntersection"],(function(a,b,c,d,e,f){"use strict";a={track:function(a,c,d){var e=b("observeIntersection")(a,function(a){b("CSS").conditionClass(a.target,c,d===b("intersectionObserverEntryIsIntersecting")(a))});b("Run").onLeave(function(){e.remove()})}};e.exports=a}),null);
__d("AccessibilityLogger",["AsyncSignal","Cookie"],(function(a,b,c,d,e,f){__p&&__p();var g={COOKIE:"a11y",DECAY_MS:6*60*60*1e3,DEFAULT:{sr:0,"sr-ts":Date.now(),jk:0,"jk-ts":Date.now(),kb:0,"kb-ts":Date.now(),hcm:0,"hcm-ts":Date.now()},getCookie:function(){var a=g.DEFAULT,c=b("Cookie").get(g.COOKIE);if(c){c=JSON.parse(c);for(var d in a)d in c&&(a[d]=c[d])}return a},logKey:function(a,c){var d=g.getCookie();d[a]++;var e=Date.now();e-d[a+"-ts"]>g.DECAY_MS&&(new(b("AsyncSignal"))("/ajax/accessibilitylogging",{eventName:c,times_pressed:d[a]}).send(),d[a+"-ts"]=e,d[a]=0);b("Cookie").set(g.COOKIE,JSON.stringify(d))},logHCM:function(){g.logKey("hcm","hcm_users")},logSRKey:function(){g.logKey("sr","sr_users")},logJKKey:function(){g.logKey("jk","jk_users")},logFocusIn:function(){g.logKey("kb","kb_users")}};e.exports=g}),null);
__d("ClickRefUtils",["DataAttributeUtils"],(function(a,b,c,d,e,f){__p&&__p();var g={get_intern_ref:function(a){__p&&__p();if(a){var b={profile_minifeed:1,gb_content_and_toolbar:1,gb_muffin_area:1,ego:1,bookmarks_menu:1,jewelBoxNotif:1,jewelNotif:1,BeeperBox:1,searchBarClickRef:1};for(var a=a;a&&a!=document.body;a=a.parentNode){if(!a.id||typeof a.id!=="string")continue;if(a.id.substr(0,8)=="pagelet_")return a.id.substr(8);if(a.id.substr(0,8)=="box_app_")return a.id;if(b[a.id])return a.id}}return"-"},get_href:function(a){a=a.getAttribute&&(a.getAttribute("ajaxify")||a.getAttribute("data-endpoint"))||a.action||a.href||a.name;return typeof a==="string"?a:null},should_report:function(a,c){if(c=="FORCE")return!0;return c=="INDIRECT"?!1:a&&(g.get_href(a)||a.getAttribute&&b("DataAttributeUtils").getDataFt(a))}};e.exports=g}),null);
__d("ClickRefLogger",["Arbiter","Banzai","ClickRefUtils","Cookie","Env","ScriptPath","SessionName","Vector","$","collectDataAttributes","ge","pageID"],(function(a,b,c,d,e,f){__p&&__p();var g={delay:0,retry:!0};function h(a){if(!b("ge")("content"))return[0,0,0,0];b("$")("content");a=b("Vector").getEventPosition(a);return[a.x,a.y,0,0]}function i(c,d,event,e){__p&&__p();var f="r",g=[0,0,0,0],i,j;if(event){i=event.type;i=="click"&&b("ge")("content")&&(g=h(event));var k=0;event.ctrlKey&&(k+=1);event.shiftKey&&(k+=2);event.altKey&&(k+=4);event.metaKey&&(k+=8);k&&(i+=k)}d&&(j=b("ClickRefUtils").get_href(d));k=b("collectDataAttributes")(event?event.target||event.srcElement:d,["ft","gt"]);Object.assign(k.ft,e.ft);Object.assign(k.gt,e.gt);typeof k.ft.ei==="string"&&delete k.ft.ei;e=[c._ue_ts,c._ue_count,j||"-",c._context,i||"-",b("ClickRefUtils").get_intern_ref(d),f,a.URI?a.URI.getRequestURI(!0,!0).getUnqualifiedURI().toString():location.pathname+location.search+location.hash,k].concat(g).concat(b("pageID")).concat(b("ScriptPath").getScriptPath());return e}b("Arbiter").subscribe("ClickRefAction/new",function(a,c){if(b("ClickRefUtils").should_report(c.node,c.mode)){a=i(c.cfa,c.node,c.event,c.extra_data);b("Cookie").set("act",c.cfa.ue);c=[b("SessionName").getName(),Date.now(),"act"];b("Banzai").post("click_ref_logger",Array.prototype.concat(c,a),g)}});function c(a){__p&&__p();function c(a){var b="";for(var c=0;c<a.length;c++)b+=String.fromCharCode(1^a.charCodeAt(c));return b}function d(a,b,c,e){__p&&__p();var f=b[c];if(f&&a&&f in a)if(c+1<b.length)d(a[f],b,c+1,e);else{var g=a[f];b=function(){setTimeout(e.bind(null,arguments));return g.apply(this,arguments)};b.toString=g.toString.bind(g);Object.defineProperty(a,f,{configurable:!1,writable:!0,value:b})}}var e={},f={},g=!1;function h(a,b){if(f[a])return;f[a]=e[a]=1}a=a[c("jiri")];if(a){var i=[];c(a).split(",").map(function(a,f){__p&&__p();var j=a.substring(1).split(":"),k;switch(a.charAt(0)){case"1":i.push(function(a){window[j[0]]&&h(f,j[0])});break;case"2":k=new RegExp(j[0]);d(window,j,2,function(b){b=b[j[1]];typeof b==="string"&&k.test(b)&&h(f,a)});break;case"3":d(window,j,0,function(){for(var a=i.length;a--;)i[a]();a=Object.keys(e);a.length&&(e={},setTimeout(b("Banzai")[c("qnru")].bind(b("Banzai"),c("islg"),{m:""+a}),5e3))});break;case"4":g=!0;break}})}}try{c(b("Env"))}catch(a){}}),null);
__d("DimensionTracking",["Cookie","Event","debounce","getViewportDimensions","isInIframe"],(function(a,b,c,d,e,f){function a(){var a=b("getViewportDimensions")();b("Cookie").set("wd",a.width+"x"+a.height)}b("isInIframe")()||(setTimeout(a,100),b("Event").listen(window,"resize",b("debounce")(a,250)),b("Event").listen(window,"focus",a))}),null);
__d("AbstractErrorSignal",["invariant","BanzaiODS","ScriptPath","SessionName","SiteData"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h=!0;function i(){this.constructor!==i||g(0,4467)}i.prototype.logJSError=function(a,c){__p&&__p();c=c||{};c.svn_rev=b("SiteData").client_revision;c.push_phase=b("SiteData").push_phase;c.script_path=b("ScriptPath").getScriptPath();c.extra=c.extra||{};c.extra.hrm=b("SiteData").be_mode;var d=c.extra.type||"error";h&&a==="onerror"&&d==="error"&&(c.extra.extra=c.extra.extra||[],c.extra.extra.push("first_error"),h=!1);d=(b("SessionName").getName()||"-")+"/-";this.performCounterLogging("javascript_error");this.performSignalLogging("javascript_error",{c:a,a:d,m:c})};i.prototype.performCounterLogging=function(a){b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.category."+a),a==="javascript_error"&&b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal.sent")};i.prototype.performSignalLogging=function(a,b){g(0,4468)};e.exports=i}),null);
__d("XJavaScriptLogviewSiteCategory",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MBASIC:"m_basic",MTOUCH:"m_touch",WWW:"www"})}),null);
__d("ErrorSignal",["AbstractErrorSignal","AsyncSignal","Banzai","BanzaiODS","ErrorSignalConfig","XJavaScriptLogviewSiteCategory","gkx"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h,i="js_error_logging";g=babelHelpers.inherits(c,b("AbstractErrorSignal"));h=g&&g.prototype;c.prototype.performCounterLogging=function(a){h.performCounterLogging.call(this,a),a==="javascript_error"&&b("BanzaiODS").bumpEntityKey("js_error_reporting","error_signal."+b("XJavaScriptLogviewSiteCategory").WWW+".sent")};c.prototype.performSignalLogging=function(a,c){b("gkx")("678675")?b("Banzai").post(i,c):new(b("AsyncSignal"))(b("ErrorSignalConfig").uri,{c:a,m:JSON.stringify(c)}).send()};function c(){g.apply(this,arguments)}d=new c();e.exports=d;a.ErrorSignal=d}),null);
__d("HighContrastMode",["AccessibilityLogger","CSS","CurrentUser","DOM","Style","URI","emptyFunction"],(function(a,b,c,d,e,f){__p&&__p();var g={init:function(a){__p&&__p();var c=new(b("URI"))(window.location.href);if(c.getPath().indexOf("/intern/")===0)return;if(window.top!==window.self)return;c=b("DOM").create("div");b("DOM").appendContent(document.body,c);c.style.cssText="border: 1px solid !important;border-color: red green !important;position: fixed;height: 5px;top: -999px;background-image: url("+a.spacerImage+") !important;";a=b("Style").get(c,"background-image");var d=b("Style").get(c,"border-top-color"),e=b("Style").get(c,"border-right-color");d=d==e&&a&&(a=="none"||a=="url(invalid-url:)");d&&(b("CSS").conditionClass(document.documentElement,"highContrast",d),b("CurrentUser").getID()&&b("AccessibilityLogger").logHCM());b("DOM").remove(c);g.init=b("emptyFunction")}};e.exports=g}),null);
__d("NetEgoLogger",["AsyncSignal"],(function(a,b,c,d,e,f){e.exports={log:function(a){var c=a.uri,d=a.sid,e=a.fbid;a=a.element;new(b("AsyncSignal"))(c,{sid:d,fbid:e,height:a.offsetHeight}).send()}}}),null);
__d("KappaWrapper",["AsyncSignal","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){var g=!1;e.exports={forceStart:function(a,c,d){var e=0,f=function d(){new(b("AsyncSignal"))("/si/kappa/",{Ko:"a"}).send(),++e<a&&b("setTimeoutAcrossTransitions")(d,c*1e3)};b("setTimeoutAcrossTransitions")(f,(c+d)*1e3)},start:function(a,b,c){g||(g=!0,this.forceStart(a,b,c))}}}),null);
__d("Chromedome",["fbt"],(function(a,b,c,d,e,f,g){__p&&__p();f.start=function(a){__p&&__p();if(a.off||top!==window||!/(^|\.)facebook\.(com|sg)$/.test(document.domain))return;var b=a.stop||g._("\u00a1Detente!"),c=a.text||g._("Esta funci\u00f3n del navegador est\u00e1 pensada para desarrolladores. Si alguien te indic\u00f3 que copiaras y pegaras algo aqu\u00ed para habilitar una funci\u00f3n de Facebook o para \"hackear\" la cuenta de alguien, se trata de un fraude. Si lo haces, esta persona podr\u00e1 acceder a tu cuenta."),d=a.more||g._("Consulta {url} para obtener m\u00e1s informaci\u00f3n.",[g._param("url","https://www.facebook.com/selfxss")]);if((window.chrome||window.safari)&&!a.textonly){var e="font-family:helvetica; font-size:20px; ";[[b,a.c1||e+"font-size:50px; font-weight:bold; color:red; -webkit-text-stroke:1px black;"],[c,a.c2||e],[d,a.c3||e],["",""]].map(function(a){setTimeout(console.log.bind(console,"\n%c"+a[0],a[1]))})}else{b=[""," .d8888b.  888                       888","d88P  Y88b 888                       888","Y88b.      888                       888",' "Y888b.   888888  .d88b.  88888b.   888','    "Y88b. 888    d88""88b 888 "88b  888','      "888 888    888  888 888  888  Y8P',"Y88b  d88P Y88b.  Y88..88P 888 d88P",' "Y8888P"   "Y888  "Y88P"  88888P"   888',"                           888","                           888","                           888"];a=(""+c).match(/.{35}.+?\s+|.+$/g);e=Math.floor(Math.max(0,(b.length-a.length)/2));for(var c=0;c<b.length||c<a.length;c++){var f=b[c];b[c]=f+new Array(45-f.length).join(" ")+(a[c-e]||"")}console.log("\n\n\n"+b.join("\n")+"\n\n"+d+"\n");return}}}),null);
__d("ArtillerySegment",["invariant","performanceAbsoluteNow"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function a(a){"use strict";a||g(0,1496),"category"in a&&"description"in a||g(0,3138,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(h++).toString(36)}),this.$3=[]}a.prototype.getID=function(){"use strict";return this.$2.id};a.prototype.begin=function(){"use strict";this.$2.begin=b("performanceAbsoluteNow")();return this};a.prototype.end=function(){"use strict";this.$2.end=b("performanceAbsoluteNow")();return this};a.prototype.appendChild=function(){"use strict";this.$1&&g(0,3139,this.$2.description);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.forEach(function(a){this.$3.push(a.getID())}.bind(this));return this};a.prototype.setPosted=function(){"use strict";this.$1=!0;return this};a.prototype.getPostData=function(){"use strict";return babelHelpers["extends"]({},this.$2,{id:this.$2.id,children:this.$3.slice()})};e.exports=a}),null);
__d("ArtillerySequence",["invariant"],(function(a,b,c,d,e,f,g){__p&&__p();var h=0;function a(a){"use strict";a||g(0,1496),"description"in a||g(0,1497,JSON.stringify(a)),this.$1=!1,this.$2=babelHelpers["extends"]({},a,{id:(h++).toString(36)}),this.$3=[]}a.prototype.getID=function(){"use strict";return this.$2.id};a.prototype.addSegment=function(){"use strict";this.$1&&g(0,1498,this.$2.description);for(var a=arguments.length,b=new Array(a),c=0;c<a;c++)b[c]=arguments[c];b.forEach(function(a){this.$3.push(a.getID())}.bind(this));return this};a.prototype.setPosted=function(){"use strict";this.$1=!0;return this};a.prototype.getPostData=function(){"use strict";return babelHelpers["extends"]({},this.$2,{id:this.$2.id,segments:this.$3.slice()})};e.exports=a}),null);
__d("ArtilleryTrace",["invariant","ArtillerySegment","ArtillerySequence"],(function(a,b,c,d,e,f,g){__p&&__p();function a(){"use strict";this.$1=!1,this.$3=undefined,this.$4={},this.$5={},this.$6=[],this.$7=[],this.$8={},this.$9=[],this.$10=null}a.prototype.createSequence=function(a){"use strict";this.$1&&g(0,4917);a=new(b("ArtillerySequence"))(a);this.$6.push(a);return a};a.prototype.createSegment=function(a){"use strict";this.$1&&g(0,4918);a=new(b("ArtillerySegment"))(a);this.$7.push(a);return a};a.prototype.markSegment=function(a,b){"use strict";this.$1&&g(0,4919);this.$8[b]=a.getID();return this};a.prototype.connectTrace=function(a,b){"use strict";this.$1&&g(0,4919);b=b||this.$2;b||g(0,4920);this.$9.push({segment:a.getID(),trace:b});return this};a.prototype.setID=function(a,b){"use strict";!this.$2&&!this.$3||g(0,4921);this.$2=a;this.$3=b;return this};a.prototype.getID=function(){"use strict";return this.$2};a.prototype.getArtillery2ID=function(){"use strict";return this.$3};a.prototype.addProperty=function(a,b){"use strict";this.$4[a]=b;return this};a.prototype.addTagset=function(a,b){"use strict";this.$5[a]=b;return this};a.prototype.addActivePolicies=function(a){"use strict";this.addTagset("active_policies",a);this.addTagset("policy",a);return this};a.prototype.getProperty=function(a){"use strict";return this.$4[a]};a.prototype.getTagset=function(a){"use strict";return this.$5[a]};a.prototype.getActivePolicies=function(){"use strict";return this.getTagset("active_policies")};a.prototype.post=function(){"use strict";this.$1&&g(0,4922,this.$2);this.$1=!0;var a=this.$10;a&&a({id:this.$2,artillery2Id:this.$3,properties:this.$4,tagsets:this.$5,sequences:this.$6.map(function(a){return a.setPosted().getPostData()}),segments:this.$7.map(function(a){return a.setPosted().getPostData()}),marks:Object.assign({},this.$8),connections:this.$9.slice()})};a.prototype.setOnPost=function(a){"use strict";this.$10&&g(0,4923);this.$10=a;return this};a.prototype.isPosted=function(){"use strict";return this.$1};e.exports=a}),null);
__d("Artillery",["invariant","ArtilleryTrace","Banzai","ClientServiceWorkerMessage","Run","ServiceWorkerRegistration","forEachObject","mixInEventEmitter","performance"],(function(a,b,c,d,e,f,g){__p&&__p();var h=!1,i=!1,j=[],k,l,m,n={},o={},p=!1,q=!1;function r(){if(h)return;h=!0;b("Banzai").subscribe(b("Banzai").SHUTDOWN,function(){t._postAll()})}function s(){l=null,k=null,o={},n={},m=null,q=!1}var t={isEnabled:function(){return i},createTrace:function(){r();var a=new(b("ArtilleryTrace"))();a.setOnPost(function(a){t.emitAndHold("posttrace",a)});j.push(a);return a},getPageTrace:function(){__p&&__p();k||g(0,4261);if(m)return m;var a=t.createTrace().setID(k,l);b("forEachObject")(n,function(b,c,d){a.addProperty(c,b)});b("forEachObject")(o,function(b,c,d){a.addTagset(c,b)});m=a;return a},setPageProperties:function(a){n=a},addPageTagset:function(a,b){m==null?o[a]=b:m.addTagset(a,b)},setActivePolicies:function(a){this.addPageTagset("active_policies",a),this.addPageTagset("policy",a)},getPageActivePolicies:function(){return this.getPageTagset("active_policies")},enableLogServiceWorker:function(){b("ServiceWorkerRegistration").isSupported()&&(p=!0)},getPageProperty:function(a){if(m==null)return n[a];else return m.getProperty(a)},getPageTagset:function(a){if(m==null)return o[a];else return m.getTagset(a)},enable:function(){i=!0,q||(b("Run").onLeave(s),q=!0)},disable:function(){i=!1},setPageTraceID:function(a,c){if(k===a&&l===c)return;!k&&!l||g(0,4262);k=a;l=c;if(p&&b("performance")&&b("performance").timing&&b("performance").timing.navigationStart){a=new(b("ClientServiceWorkerMessage"))("asw-sendStartupData",{traceID:l,windowStart:b("performance").timing.navigationStart},null);a.sendViaController()}},addPiggyback:function(a,b){window.CavalryLogger&&window.CavalryLogger.getInstance().addPiggyback(a,b)},_postAll:function(){j.forEach(function(a){return!a.isPosted()&&a.post()})}};b("mixInEventEmitter")(t,{posttrace:!0});e.exports=t}),null);
__d("ArtilleryRequestDataCollection",["Arbiter","ArtilleryRequestDataCollector","BigPipe","PageEvents","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=12e4,h={},i={},j=!1;function k(a){delete h[a],clearTimeout(i[a]),delete i[a]}a={init:function(){if(j)return;b("Arbiter").subscribe(b("BigPipe").Events.init,function(a,c){a=c.arbiter;a.subscribeOnce(b("PageEvents").AJAXPIPE_FIRST_RESPONSE,function(a,b){a=b.lid;b=b.quickling;b||this.start(a)}.bind(this),"new")}.bind(this));j=!0},start:function(a){if(h[a])return;var c=new(b("ArtilleryRequestDataCollector"))().start();h[a]=c;i[a]=b("setTimeoutAcrossTransitions")(function(){this.disable(a)}.bind(this),g)},finish:function(a){var b=h[a];if(b){b=b.finish();k(a);return b}return{sampleRecorder:null,profilingCountersData:[],userTimingProfilerData:null,timeSliceData:[]}},getCollector:function(a){return h[a]},disable:function(a){var b=h[a];b&&(b.disable(),k(a))}};e.exports=a}),null);
__d("ErrorLogging",["ErrorSignal","ErrorUtils","JSErrorExtra","JSErrorLoggingConfig","JSErrorPlatformColumns","performanceNow","throttle"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a){var c=a.extra||{},d={};Object.keys(b("JSErrorExtra")).forEach(function(a){b("JSErrorExtra")[a]&&(d[a]=!0)});Object.keys(c).forEach(function(a){c[a]?d[a]=!0:d[a]&&delete d[a]});a.extra=Object.keys(d)}function h(a){b("JSErrorPlatformColumns").app_id!==undefined&&(a.app_id=b("JSErrorPlatformColumns").app_id),b("JSErrorPlatformColumns").access_token!==undefined&&(a.access_token=b("JSErrorPlatformColumns").access_token)}function i(a){g(a);h(a);var c=a.category||"onerror";b("ErrorSignal").logJSError(c,{error:a.name||a.message,extra:a})}function a(){__p&&__p();var a=b("performanceNow")();for(var c=k,d=Array.isArray(c),e=0,c=d?c:c[typeof Symbol==="function"?Symbol.iterator:"@@iterator"]();;){var f;if(d){if(e>=c.length)break;f=c[e++]}else{e=c.next();if(e.done)break;f=e.value}f=f;var g=f[0];f=f[1];f<a&&k["delete"](g)}}var j=b("JSErrorLoggingConfig").reportInterval,k=new Map(),l=b("throttle")(a,500,null);function c(a){if(a.message&&a.message.toLowerCase().startsWith("script error"))return;var c=a.name+a.message+a.type,d=k.get(c),e=b("performanceNow")();(d==null||d+j<e)&&(k.set(c,e),l(),i(a))}b("ErrorUtils").addListener(c);e.exports={defaultJSErrorHandler:c}}),null);