if (self.CavalryLogger) { CavalryLogger.start_js(["uATmd"]); }

__d("LayerPageNavigationController",["Arbiter","DOM","PageTransitions","React","ReactDOM","URI","UserAgent_DEPRECATED"],(function(a,b,c,d,e,f){__p&&__p();function g(a){return a.length>=1&&a[a.length-1]}a={constructLayer:function(){},getLayerPageContainerClass:function(){},setupLink:function(a,c){this._linkHandlers=this._linkHandlers||{};var d=new(b("URI"))(c.href).getUnqualifiedURI().toString();this._linkHandlers[d]=a.display.bind(a,c.type,c.id,c.name,d,c.source,c.viewer_id);this._registerHandler()},_registerHandler:function(){this._registeredHandler||(b("PageTransitions").registerHandler(this._handleTransition.bind(this),6),this._registeredHandler=!0)},_onBack:function(){__p&&__p();if(this._popping)return;this._popping=!0;var a=this._stack.pop();this._forwardStack.push(a);var c=-1;while(this._stack.length&&g(this._stack).isSnowlift())a=this._stack.pop(),this._forwardStack.push(a),b("Arbiter").inform("LayerPageNavigation/pop"),c--;this._rerender();this._poppingTransition=isNaN(b("UserAgent_DEPRECATED").opera());window.history.go(c)},_rerender:function(){var a=this.getLayerPageContainerClass();b("ReactDOM").render(b("React").createElement(a,{onBack:this._onBack.bind(this),onPopComplete:function(){this._popping=!1}.bind(this),stack:this._stack.slice()}),this._layerRoot)},_isSnowliftURI:function(a){return a.getUnqualifiedURI().setQueryData({}).toString()==="/photo.php"||Object.prototype.hasOwnProperty.call(a.getQueryData(),"theater")},_handleTransition:function(a){__p&&__p();if(this._poppingTransition){this._poppingTransition=!1;return this._transitionHandled()}if(this._forceTransitionComplete){this._forceTransitionComplete=!1;return this._transitionHandled()}var c=a.getUnqualifiedURI().removeQueryData(["closeTheater"]).toString();this._stack=this._stack||[];this._forwardStack=this._forwardStack||[];var d=this._stack.length,e=g(this._stack);if(e&&c===e.getPermalink()){this._forwardStack=[];return this._isSnowliftURI(a)?this._transitionHandledBySnowlift():this._transitionHandled()}e=d>=2&&this._stack[d-2].getPermalink();if(e&&c===e){this._forwardStack.push(this._stack.pop());if(this._isSnowliftURI(a))return this._transitionHandledBySnowlift();else{b("Arbiter").inform("LayerPageNavigation/pop");this._rerender();return this._transitionHandled()}}if(this._isSnowliftURI(a)){e=new h(this,{permalink:a,isSnowlift:!0},{},{});this._stack.push(e);return this._transitionHandledBySnowlift()}a=g(this._forwardStack);if(a&&c===a.getPermalink()){this._handlingForwardNavigation=!0;this._forwardStack.pop().getShowFunction()();return this._transitionHandled()}if(d===1&&c===this._initialURI){this._forwardStack.push(this._stack.pop());b("Arbiter").inform("LayerPageNavigation/pop");this._layer.hide();return this._transitionHandled()}if(this._linkHandlers&&this._linkHandlers[c]){this._linkHandlers[c]();return this._transitionHandled()}this._layer&&this._layer.hide();return this._transitionNotHandled()},_transitionHandled:function(){if(this._isInSnowlift){this._isInSnowlift=!1;this._registeredHandler=!1;this._registerHandler();return!1}this._isInSnowlift=!1;b("PageTransitions").transitionComplete();return!0},_transitionNotHandled:function(){this._linkHandlers={};this._stack=[];this._forwardStack=[];this._registeredHandler=!1;this._isInSnowlift=!1;return!1},_transitionHandledBySnowlift:function(){this._isInSnowlift=!0;this._registeredHandler=!1;this._stack=[];this._registerHandler();return!1},show:function(a,c,d){__p&&__p();this._registerHandler();this._stack=this._stack||[];this._forwardStack=this._forwardStack||[];c=new h(this,a,c,d);this._stack.push(c);b("Arbiter").inform("LayerPageNavigation/push");!this._layer?(this._layerRoot=b("DOM").create("div"),this._rerender(),this._layer=this.constructLayer(a,this._layerRoot).show(),this._layer.subscribe("hide",function(){var a=g(this._stack),c=b("URI").getNextURI().getUnqualifiedURI().removeQueryData(["closeTheater"]).toString();a&&a.getPermalink()===c&&(this._forceTransitionComplete=!0,b("PageTransitions").go(this._initialURI));b("Arbiter").inform("LayerPageNavigation/hide");this._layer=null;this._stack=[]}.bind(this)),this._initialURI=b("PageTransitions").getMostRecentURI().getUnqualifiedURI().toString()):this._rerender();this._handlingForwardNavigation&&(this._handlingForwardNavigation=!1);return c},getCurrentLayer:function(){return this._layer}};function h(a,b,c,d){this._navigationInstance=a,this._config=b,this._header=c,this._body=d}Object.assign(h.prototype,{getLayer:function(){return this._navigationInstance._layer},getHeader:function(){return this._header},getBody:function(){return this._body},getPermalink:function(){if(this._hasSetPermalink)return this._config.permalink;this._hasSetPermalink=!0;this._config.permalink=new(b("URI"))(this._config.permalink).getUnqualifiedURI().removeQueryData(["closeTheater"]).toString();return this._config.permalink},getShowFunction:function(){return this._config.show},update:function(a,b){if(!this._navigationInstance._stack.includes(this))return;this._header=a||this._header;this._body=b||this._body;this._navigationInstance._rerender()},isSnowlift:function(){return this._config.isSnowlift===!0}});e.exports=a}),null);
__d("LayerPageNavigationMixin",["Animation","CSS","ReactDOM","ScrollableArea","Style","UserAgent_DEPRECATED","queryThenMutateDOM","throttle"],(function(a,b,c,d,e,f){__p&&__p();var g=300,h=150,i;b("UserAgent_DEPRECATED").ie()<=8?i=function(a,c,d,e){b("Style").apply(a,{opacity:c,marginLeft:d+"px"}),e&&e()}:i=function(a,c,d,e){new(b("Animation"))(a).to("opacity",c).to("margin-left",d+"px").duration(g).ease(b("Animation").ease.both).ondone(e).go()};a={_fadeOut:function(a,c,d){b("Style").apply(a,{position:"absolute",top:"0",width:a.offsetWidth+"px"});c=c==="left"?-h:h;i(a,0,c,function(){b("CSS").hide(a),b("Style").apply(a,{position:"",top:"",width:""}),d&&d()})},_fadeIn:function(a,c,d){b("CSS").show(a),b("Style").apply(a,{marginLeft:(c==="left"?-h:h)+"px",opacity:"0"}),i(a,1,0,d)},_updateMainNode:function(a){__p&&__p();if(this._mainNode===a||!this.refs.shadow)return;this._mainNode=a;this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null);this._scrollableArea=b("ScrollableArea").getInstance(a);if(!this._scrollableArea){this.setState({shadow:!1});return}var c;a=b("throttle")(b("queryThenMutateDOM").bind(null,function(){c=this._scrollableArea.getScrollTop()>0}.bind(this),function(){c!==this.state.shadow&&this.setState({shadow:c})}.bind(this)));a();this._scrollSubscription=this._scrollableArea.subscribe("scroll",a)},_toggleBack:function(a){var c=b("ReactDOM").findDOMNode(this.refs.back);a?(b("CSS").show(c),new(b("Animation"))(c).from("opacity",0).to("opacity",1).ease(b("Animation").ease.both).duration(g).go()):(b("Style").set(c,"position","absolute"),new(b("Animation"))(c).from("opacity",1).to("opacity",0).duration(g).ease(b("Animation").ease.both).ondone(function(){b("CSS").hide(c),b("Style").set(c,"position","")}).go())},componentDidUpdate:function(a){__p&&__p();var c=this.state.stack,d=this.props.stack;a=a.stack;a.length===1&&d.length>1?this._toggleBack(!0):a.length>1&&d.length===1&&this._toggleBack(!1);var e=b("ReactDOM").findDOMNode(this.refs.headers).childNodes,f=b("ReactDOM").findDOMNode(this.refs.bodies).childNodes,g=f.length;if(d.length>a.length)this._fadeOut(e[g-2],"left"),this._fadeOut(f[g-2],"left"),this._fadeIn(e[g-1],"right"),this._fadeIn(f[g-1],"right"),this._updateMainNode(f[g-1]);else if(d.length<c.length){var h=4;a=function(){--h===0&&(this._updateStack(d),this._updateMainNode(f[g-2]),this.props.onPopComplete&&this.props.onPopComplete())}.bind(this);this._fadeOut(e[g-1],"right",a);this._fadeOut(f[g-1],"right",a);this._fadeIn(e[g-2],"left",a);this._fadeIn(f[g-2],"left",a)}else c.length===1&&this._updateMainNode(b("ReactDOM").findDOMNode(this.refs.bodies).childNodes[0])},UNSAFE_componentWillReceiveProps:function(a){a.stack.length>this.state.stack.length&&this._updateStack(a.stack)},_updateStack:function(a){this.setState({stack:a.slice()})},getInitialState:function(){return{shadow:!1,stack:this.props.stack}}};e.exports=a}),null);
__d("LayerSlideIn",["cx","CSS","Style"],(function(a,b,c,d,e,f,g){__p&&__p();var h=530;function a(a){"use strict";this.$1=a,this.$2=[]}a.prototype.enable=function(){"use strict";this.$2=[this.$1.subscribe("beforeshow",function(){b("Style").set(this.$1.getRoot(),"background-color","rgba(0, 0, 0, 0)"),b("Style").set(this.$1.getContentRoot(),"top","100%")}.bind(this)),this.$1.subscribe("aftershow",function(){b("CSS").addClass(this.$1.getContentRoot(),"_1zjq"),b("Style").set(this.$1.getRoot(),"background-color",""),b("Style").set(this.$1.getContentRoot(),"top",""),setTimeout(b("CSS").removeClass.bind(null,this.$1.getContentRoot(),"_1zjq"),h)}.bind(this))]};a.prototype.disable=function(){"use strict";while(this.$2.length)this.$2.pop().unsubscribe();this.$2=[]};e.exports=a}),null);
__d("LayerSlideOut",["csx","cx","CSS","DOM","Style","setTimeoutAcrossTransitions"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i=530;function a(a){"use strict";this.$1=a,this.$4=b("DOM").find(a.getRoot(),"._1zjk")}a.prototype.enable=function(){"use strict";this.$3=this.$1.subscribe("starthide",function(){b("CSS").addClass(this.$4,"_1zjr");b("Style").set(this.$1.getRoot(),"background","rgba(0, 0, 0, 0)");b("setTimeoutAcrossTransitions")(this.$1.finishHide.bind(this.$1),i);return!1}.bind(this))};a.prototype.disable=function(){"use strict";this.$2&&this.$2.unsubscribe(),this.$3=null};e.exports=a}),null);
__d("EntstreamLayerPage",["csx","cx","BrowserSupport","DOM","JSXDOM","Layer","LayerButtons","LayerDestroyOnHide","LayerFadeOnHide","LayerFadeOnShow","LayerHideOnBlur","LayerHideOnEscape","LayerSlideIn","LayerSlideOut","ModalLayer"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=babelHelpers.inherits(a,b("Layer"));i=c&&c.prototype;function a(a,b){"use strict";i.constructor.call(this,a,b),a.permalink&&(this._permalink=a.permalink)}a.prototype._buildWrapper=function(a,c){"use strict";return b("JSXDOM").div({className:"_1zjj"},c)};a.prototype._getDefaultBehaviors=function(){"use strict";var a=b("BrowserSupport").hasCSSAnimations()?b("LayerSlideIn"):b("LayerFadeOnShow"),c=b("BrowserSupport").hasCSSAnimations()?b("LayerSlideOut"):b("LayerFadeOnHide");return i._getDefaultBehaviors.call(this).concat([a,c,b("ModalLayer"),b("LayerButtons"),b("LayerDestroyOnHide"),b("LayerHideOnBlur"),b("LayerHideOnEscape")])};a.prototype.getContentRoot=function(){"use strict";this._content||(this._content=b("DOM").find(this.getRoot(),"div._1zjk"));return this._content};e.exports=a}),null);
__d("EntstreamLayerPageBody",["cx","Arbiter","DOM","React","ReactDOM","ScrollableArea.react","XUISpinner.react"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=babelHelpers.inherits(a,b("React").Component);h=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=h.constructor).call.apply(a,[this].concat(d)),this.state={contentLoaded:!1},b}a.prototype.$1=function(){"use strict";b("Arbiter").inform("dom-scroll")};a.prototype.UNSAFE_componentWillReceiveProps=function(a){"use strict";a.body&&!this.props.body&&this.setState({contentLoaded:!0})};a.prototype.componentDidUpdate=function(a){"use strict";this.props.body&&!a.body&&b("DOM").setContent(b("ReactDOM").findDOMNode(this.refs.content),this.props.body)};a.prototype.render=function(){"use strict";var a=null;this.state.contentLoaded||(a=b("React").createElement("div",{className:"_46__"},b("React").createElement(b("XUISpinner.react"),{size:"large"})));return b("React").createElement(b("ScrollableArea.react"),{fade:!0,onScroll:this.$1,width:725},b("React").createElement("div",{className:"_1zsk"},a,b("React").createElement("div",{ref:"content"})))};e.exports=a}),null);
__d("EntstreamLayerPageContainer",["cx","LayerPageNavigationMixin","React","XUICloseButton.react"],(function(a,b,c,d,e,f,g){a=b("React").createClass({displayName:"EntstreamLayerPageContainer",mixins:[b("LayerPageNavigationMixin")],render:function(){var a=this.state.stack,c=[],d=[];a.forEach(function(a){c.push(a.getHeader()),d.push(a.getBody())});a="_1zjk"+(this.state.shadow?" _57bd":"");return b("React").createElement("div",{className:a},b("React").createElement("div",{className:"_1zjl"},b("React").createElement("a",{className:"_59kl hidden_elem",onClick:this.props.onBack,ref:"back",role:"button",tabIndex:"0"},b("React").createElement("i",{className:"_59km"})),b("React").createElement(b("XUICloseButton.react"),{className:"_1zjo layerCancel"}),b("React").createElement("div",{className:"_59kn",ref:"headers"},c)),b("React").createElement("i",{className:"_1zjn",ref:"shadow"}),b("React").createElement("div",{className:"_1zjm",ref:"bodies"},d))}});e.exports=a}),null);
__d("EntstreamLayerPageController",["EntstreamLayerPage","EntstreamLayerPageContainer","LayerPageNavigationController"],(function(a,b,c,d,e,f){a={};Object.assign(a,b("LayerPageNavigationController"),{constructLayer:function(a,c){return new(b("EntstreamLayerPage"))(a,c)},getLayerPageContainerClass:function(){return b("EntstreamLayerPageContainer")}});e.exports=a}),null);
__d("EntstreamLayerPageHeader",["DOM","React","ReactDOM"],(function(a,b,c,d,e,f){__p&&__p();var g;g=babelHelpers.inherits(a,b("React").Component);g&&g.prototype;a.prototype.$1=function(){"use strict";this.props.domHeader&&b("DOM").setContent(b("ReactDOM").findDOMNode(this.refs.domHeader),this.props.domHeader)};a.prototype.componentDidMount=function(){"use strict";this.$1()};a.prototype.componentDidUpdate=function(){"use strict";this.$1()};a.prototype.render=function(){"use strict";return b("React").createElement("div",{ref:"header"},this.props.reactHeader,b("React").createElement("div",{ref:"domHeader"}))};function a(){"use strict";g.apply(this,arguments)}e.exports=a}),null);
__d("PagesSimilarPagesOverlay",["cx","fbt","DOM","EntstreamLayerPageBody","EntstreamLayerPageController","EntstreamLayerPageHeader","React","UIPagelet","XUIText.react"],(function(a,b,c,d,e,f,g,h){a={display:function(a,c,d,e,f,g){var i=b("React").createElement(b("XUIText.react"),{size:"header4",weight:"bold"},h._("P\u00e1ginas similares a {name}",[h._param("name",d)])),j=b("EntstreamLayerPageController").show({permalink:e,show:this.display.bind(this,a,c,d,e,f,g)},b("React").createElement(b("EntstreamLayerPageHeader"),{reactHeader:i}),b("React").createElement(b("EntstreamLayerPageBody"),null)),k=b("DOM").create("div",{className:"_5qvx clearfix"});b("UIPagelet").loadFromEndpoint("PagesBrowserTiledLayoutPagelet",k,{category:"similar",showhero:!1,similar:c,ref:"similar_pages_overlay"},{displayCallback:function(a){j.update(null,b("React").createElement(b("EntstreamLayerPageBody"),{body:k})),a()}})}};e.exports=a}),null);
__d("PagesSimilarPagesOverlayLink",["CurrentUser","EntstreamLayerPageController","PagesSimilarPagesOverlay","XPagesBrowserController"],(function(a,b,c,d,e,f){e.exports={getURI:function(a,c){var d=b("XPagesBrowserController").getURIBuilder().setInt("similar",a).getURI();b("EntstreamLayerPageController").setupLink(b("PagesSimilarPagesOverlay"),{href:d,type:null,id:a,name:c,source:null,viewer_id:b("CurrentUser").getID()});return d}}}),null);
__d("XPagesSimilarPagesAsyncController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/pages/similar/",{id:{type:"Int",required:!0},limit:{type:"Int",defaultValue:10}})}),null);
__d("PagesBrowserItem",["csx","cx","fbt","Arbiter","AsyncRequest","ChatOpenTabEventLogger","CSS","DOM","DOMQuery","EgoActionType","EgoPageServiceConstants","Event","Facepile.react","FantaTabActions","MercuryIDs","PageLikeConstants","PagesBrowserConfig","PagesMessagingChatTabRef","PagesSimilarPagesOverlayLink","React","ReactDOM","Run","XPagesSimilarPagesAsyncController","XPubcontentInteractionLoggingController","XUIOverlayButton.react","goURI","removeFromArray","tidyEvent"],(function(a,b,c,d,e,f,g,h,i){__p&&__p();var j=33,k=[];b("Arbiter").subscribe([b("PageLikeConstants").LIKED,b("PageLikeConstants").UNLIKED],function(a,c){k.forEach(function(d){d.getPageID()==c.profile_id&&(a===b("PageLikeConstants").LIKED?d.like():d.unlike())})});function a(a,c){"use strict";this.$1=a,this.$2=c,this.init(),k.push(this),b("Run").onLeave(function(){b("removeFromArray")(k,this)}.bind(this))}a.prototype.init=function(){"use strict";var a=[];this.$2.removeButton&&a.push(b("Event").listen(this.$2.removeButton,"click",this.remove.bind(this)));this.$2.egoLogData&&(a.push(b("Event").listen(this.$2.page_profile_image,"click",this.logEgoInteraction.bind(this,b("EgoPageServiceConstants").PAGE_VIEW,b("EgoActionType").CLICK)),b("Event").listen(this.$2.page_profile_name,"click",this.logEgoInteraction.bind(this,b("EgoPageServiceConstants").PAGE_VIEW,b("EgoActionType").CLICK))),this.$2.actionButton&&this.$2.actionButtonType==="message"&&a.push(b("Event").listen(this.$2.actionButton,"click",this.handleMessageClick.bind(this))));a.length>0&&b("tidyEvent")(a)};a.prototype.like=function(){"use strict";__p&&__p();if(!this.$3){var a=b("DOMQuery").scry(this.$1,"._5l2b")[0];if(a){this.$3=b("DOM").create("div",{className:"_5qvy"});var c=b("PagesSimilarPagesOverlayLink").getURI(this.$2.pageID,this.$2.pageName),d=b("React").createElement(b("XUIOverlayButton.react"),{className:"_5qvz",href:c,label:i._("Ver p\u00e1ginas similares")});b("ReactDOM").render(d,this.$3);b("DOM").appendContent(a,this.$3);if(b("PagesBrowserConfig").similar_overlay_group==="thumbnails"){b("CSS").addClass(this.$3,"_5rng");d=Math.floor(this.$3.offsetWidth/j);a=b("XPagesSimilarPagesAsyncController").getURIBuilder().setInt("id",this.$2.pageID).setInt("limit",d).getURI();new(b("AsyncRequest"))(a).setHandler(function(a){__p&&__p();a=a.payload;a=a&&a.similar;if(a){var d=[];for(var e in a){var f=a[e];d.push({name:f.name,URL:c,profilePicURI:f.thumbnail_uri})}f=b("React").createElement(b("Facepile.react"),{profiles:d,size:"medium"});a=b("DOM").create("div",{className:"_5rnh"});b("ReactDOM").render(f,a);b("DOM").prependContent(this.$3,a)}}.bind(this)).send()}else b("PagesBrowserConfig").similar_overlay_group==="aggressive"&&(window.location.href!=c&&b("goURI")(c))}this.logEgoInteraction(b("EgoPageServiceConstants").FAN,b("EgoActionType").CLICK)}this.$3&&(b("CSS").addClass(this.$1,"_5qv-"),b("CSS").show(this.$3),this.$2.removeButton&&b("CSS").hide(this.$2.removeButton))};a.prototype.unlike=function(){"use strict";this.$3&&(b("CSS").removeClass(this.$1,"_5qv-"),b("CSS").hide(this.$3),this.$2.removeButton&&b("CSS").show(this.$2.removeButton))};a.prototype.remove=function(event){"use strict";__p&&__p();var a=this.$2.egoLogData;if(a){a=this.$2.actionButtonType==="message"?b("EgoPageServiceConstants").MESSAGE:b("EgoPageServiceConstants").FAN;this.logEgoInteraction(a,b("EgoActionType").XOUT)}else new(b("AsyncRequest"))("/ajax/pages/browser/page_recommend_hide.php").setData({page_id:this.$2.pageID,ref:"pages_browser_rd"}).send();b("CSS").hide(this.$2.removeButton);this.$4=b("DOM").create("div");a=b("React").createElement("div",{className:"_5l76"},i._("Esta p\u00e1gina se elimin\u00f3 de tus sugerencias."));b("ReactDOM").render(a,this.$4);b("DOM").appendContent(this.$1,this.$4);event.prevent()};a.prototype.logEgoInteraction=function(a,c){"use strict";var d=this.$2.egoLogData;if(!d)return;var e=b("XPubcontentInteractionLoggingController").getURIBuilder();d={q:d,action:a,action_type:c};new(b("AsyncRequest"))().setMethod("POST").setURI(e.getURI()).setData(d).send()};a.prototype.handleMessageClick=function(){"use strict";var a=b("MercuryIDs").getThreadIDFromUserID(this.getPageID().toString()),c=b("PagesMessagingChatTabRef").PYMM_PAGES_BROWSER;b("FantaTabActions").openTab(a,[c]);b("ChatOpenTabEventLogger").logClickOpen(c,a);this.logEgoInteraction(b("EgoPageServiceConstants").MESSAGE,b("EgoActionType").CLICK)};a.prototype.getPageID=function(){"use strict";return this.$2.pageID};e.exports=a}),null);
__d("Autosize",["cx","CSS","DOM","Style"],(function(a,b,c,d,e,f,g){__p&&__p();["fontFamily","fontStyle","fontVariant","fontWeight","letterSpacing","textDecoration","textIndent","textTransform","whiteSpace","wordSpacing","wordWrap"];var h=/^[0-9]+$/;function i(a){var c=a.cloneNode(!0);b("CSS").addClass(c,"_4g");var d=a.clientWidth-b("Style").getFloat(a,"paddingLeft")-b("Style").getFloat(a,"paddingRight");b("Style").set(c,"width",d+"px");d=a.clientHeight-b("Style").getFloat(a,"paddingTop")-b("Style").getFloat(a,"paddingBottom");b("Style").set(c,"height",d+"px");b("DOM").insertAfter(a,c);return c}function j(a,c,d,e,f){__p&&__p();var g=a.style.fontSize,h=a.style.height;b("Style").set(a,"height","auto");if(c!==null){var i=a.style.width;b("Style").set(a,"width","auto")}var j=0,k=f.length-1;while(j<k){var l=Math.ceil((j+k)/2);b("Style").set(a,"font-size",f[l]+e);d!==null&&a.scrollHeight>d||c!==null&&a.scrollWidth>c?k=l-1:j=l}a.style.fontSize=g;a.style.height=h;c!==null&&(a.style.width=i);return f[j]+e}function k(a,c,d,e,f,g){__p&&__p();var h=a.style.fontSize,i=a.style.height;b("Style").set(a,"height","auto");if(c!==null){var j=a.style.width;b("Style").set(a,"width","auto")}b("Style").set(a,"font-size",g+e);if((d===null||a.scrollHeight<=d)&&(c===null||a.scrollWidth<=c)){a.style.fontSize=h;a.style.height=i;c!==null&&(a.style.width=j);return g+e}b("Style").set(a,"font-size",f+e);if(d!==null&&a.scrollHeight>d||c!==null&&a.scrollWidth>c){a.style.fontSize=h;a.style.height=i;c!==null&&(a.style.width=j);return f+e}while(f+1<g){var k=Math.ceil((f+g)/2);b("Style").set(a,"font-size",k+e);d!==null&&a.scrollHeight>d||c!==null&&a.scrollWidth>c?g=k:f=k}a.style.fontSize=h;a.style.height=i;c!==null&&(a.style.width=j);return f+e}function a(a,b){__p&&__p();this._wrap=a;this._attr=b;if(this._attr.sizes){a=this._attr.sizes;for(var c=1,d=a.length;c<d;c++){if(a[c-1]<=a[c])continue;a.sort(function(a,b){return a-b});break}}else if(b.min>b.max){c=b.min;b.min=b.max;b.max=c}this.fit()}a.prototype.fit=function(a,c){__p&&__p();var d=this._wrap;if(!d.clientWidth){l.push(this);return}var e=i(d);typeof a==="undefined"&&(a=this._attr.width);h.test(a)?e.style.width=a+"px":a!==null&&a!=="auto"&&(e.style.width=a);typeof c==="undefined"&&(c=this._attr.height);h.test(c)?e.style.height=c+"px":c!==null&&c!=="auto"&&(e.style.height=c);a=null;this._attr.wrap||(a=e.clientWidth);var f=null;(this._attr.wrap||c!==null)&&(f=e.clientHeight);this._attr.sizes?c=j(e,a,f,"px",this._attr.sizes):c=k(e,a,f,"px",this._attr.min,this._attr.max);b("DOM").remove(e);b("Style").set(d,"font-size",c);b("CSS").removeClass(d,"invisible_elem")};var l=[];a.onNodeInserted=function(){var a=l;l=[];a.forEach(function(a){a.fit()})};e.exports=a}),null);