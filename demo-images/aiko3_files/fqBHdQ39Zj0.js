if (self.CavalryLogger) { CavalryLogger.start_js(["VtVQo"]); }

__d("NotificationConstants",[],(function(a,b,c,d,e,f){e.exports={PayloadSourceType:{UNKNOWN:0,USER_ACTION:1,LIVE_SEND:2,ENDPOINT:3,INITIAL_LOAD:4,OTHER_APPLICATION:5,SYNC:6,CLIENT:7}}}),null);
__d("NotificationTokens",["CurrentUser"],(function(a,b,c,d,e,f){a={tokenizeIDs:function(a){return a.map(function(a){return b("CurrentUser").getID()+":"+a})},untokenizeIDs:function(a){return a.map(function(a){return a.split(":")[1]})}};e.exports=a}),null);
__d("NotificationUpdates",["Arbiter","LiveTimer","NotificationConstants","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g={},h={},i={},j={},k=!1,l=[],m=0,n=new(b("Arbiter"))();function o(){__p&&__p();if(m)return;var a=g,b=h,c=i,d=j;g={};h={};i={};j={};(Object.keys(a).length||k)&&(k=!1,q("notifications-updated",a));Object.keys(b).length&&q("seen-state-updated",b);Object.keys(c).length&&q("read-state-updated",c);Object.keys(d).length&&q("hidden-state-updated",d);l.pop()}function p(){return l.length?l[l.length-1]:b("NotificationConstants").PayloadSourceType.UNKNOWN}function q(event,a){s.inform(event,{updates:a,source:p()})}var r=null,s={getserverTime:function(){return r},handleUpdate:function(a,c,d,e){c.servertime&&(r=c.servertime,b("LiveTimer").restart(c.servertime)),this._updateWithPayload(a,c)},_updateWithPayload:function(a,b){Object.keys(b).length&&this.synchronizeInforms(function(){l.push(a);var c=babelHelpers["extends"]({},b,{payloadsource:p()});this.inform("update-notifications",c);this.inform("update-seen",c);this.inform("update-read",c);this.inform("update-hidden",c)}.bind(this))},getArbiter:function(){return n},inform:function(event,a){return n.inform(event,a)},subscribe:function(event,a){return n.subscribe(event,a)},didUpdateNotifications:function(a){Object.assign(g,b("createObjectFrom")(a)),k=!0,o()},didUpdateSeenState:function(a){Object.assign(h,b("createObjectFrom")(a)),o()},didUpdateReadState:function(a){Object.assign(i,b("createObjectFrom")(a)),o()},didUpdateHiddenState:function(a){Object.assign(j,b("createObjectFrom")(a)),o()},synchronizeInforms:function(a){m++;try{a()}catch(a){throw a}finally{m--,o()}}};e.exports=s}),null);
__d("NotificationOptionActionWebGraphQLMutation",["WebGraphQLMutationBase"],(function(a,b,c,d,e,f){"use strict";__p&&__p();e.exports=function(){__p&&__p();var a;a=babelHelpers.inherits(c,b("WebGraphQLMutationBase"));a&&a.prototype;c.__getDocID=function(){"use strict";return"1420844941369152"};c.getQueryID=function(){"use strict";return"318967338567215"};function c(){"use strict";a.apply(this,arguments)}return c}()}),null);
__d("NotificationUserActions",["AsyncRequest","Bootloader","BusinessUserConf","CurrentUser","NotificationConstants","NotificationOptionActionWebGraphQLMutation","NotificationTokens","NotificationUpdates","WebGraphQL","createObjectFrom"],(function(a,b,c,d,e,f){__p&&__p();var g=b("NotificationConstants").PayloadSourceType.USER_ACTION,h=!1;function i(a){b("BusinessUserConf").businessUserID!=null&&(a.biz_user_id=b("BusinessUserConf").businessUserID),new(b("AsyncRequest"))("/ajax/notifications/mark_read.php").setData(a).setAllowCrossPageTransition(!0).send()}function j(a){var b={};a.forEach(function(a,c){b["alert_ids["+c+"]"]=a});return b}a={markNotificationsAsSeen:function(a,c){var d=document.getElementById("notificationsCountValue"),e=null;d&&(e=d.textContent);b("NotificationUpdates").handleUpdate(g,{seenState:b("createObjectFrom")(a)});d=b("NotificationTokens").untokenizeIDs(a);a=j(d);a.seen=!0;e&&(a.badgeCount=e);c&&(a.source_view=c);i(a)},setNextIsFromReadButton:function(a){h=a},markNotificationsAsRead:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!0)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);c&&(a.source_view=c);i(a)},markNotificationsAsUnread:function(a,c){b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(a,!1)});a=b("NotificationTokens").untokenizeIDs(a);a=j(a);h&&(a.from_read_button=!0,h=!1);a.unread=!0;c&&(a.source_view=c);i(a)},markAllNotificationsAsRead:function(a){b("Bootloader").loadModules(["NotificationSeenState"],function(c){c=c.getUnreadIDs();c.length>0&&b("NotificationUpdates").handleUpdate(g,{readState:b("createObjectFrom")(c)});c={read:!0};h&&(c.from_read_button=!0,h=!1);a&&(c.source_view=a);i(c)},"NotificationUserActions")},sendNotifOption:function(a){return b("WebGraphQL").exec(new(b("NotificationOptionActionWebGraphQLMutation"))({input:{action_type:a,actor_id:b("CurrentUser").getID(),client_mutation_id:"0"}}))}};e.exports=a}),null);
__d("NotificationInterpolator",["cx","Badge.react","React","TextWithEmoticons.react","joinClasses"],(function(a,b,c,d,e,f,g){function a(a,c){var d=null;((c=c.entity)!=null?(c=c.work_foreign_entity_info)!=null?c.type:c:c)==="FOREIGN"&&(d=b("React").createElement(b("Badge.react"),{type:"work_non_coworker"}));typeof a==="string"&&(a=b("React").createElement(b("TextWithEmoticons.react"),{text:a}));return b("React").createElement("span",{className:b("joinClasses")("fwb","_6btd")},a,d)}e.exports=a}),null);
__d("FBStoriesProductionTypes",["immutable"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c={CAMERA_ERROR:"CAMERA_ERROR",FILE_SIZE_EXCEED:"FILE_SIZE_EXCEED",LEAVING:"LEAVING"};g=babelHelpers.inherits(a,b("immutable").Record({hasImage:undefined,hasMediaStream:undefined,isCameraMediaOpen:undefined,imageSource:undefined,mediaNode:undefined,mediaStream:undefined,privacySettingsCustomParticipants:undefined,privacySettingsMode:undefined,videoSource:undefined}));g&&g.prototype;function a(){g.apply(this,arguments)}d={CAMERA_1:"CAMERA_1",CAMERA_2:"CAMERA_2",NULL_STATE:"NULL_STATE",UPLOAD_1:"UPLOAD_1"};f={UNSET:"UNSET",PUBLIC:"PUBLIC",FRIENDS_AND_CONNECTIONS:"FRIENDS_AND_CONNECTIONS",FRIENDS:"FRIENDS",CUSTOM:"CUSTOM"};e.exports={FBStoriesCameraPopupDialogTypes:c,FBStoriesCameraState:a,FBStoriesProductionFlowStageTypes:d,UnifiedStoriesAudienceModeTypes:f}}),null);
__d("GamesGogglesSwitch",[],(function(a,b,c,d,e,f){var g=!1;a={enable:function(){g=!0},isEnabled:function(){return g}};e.exports=a}),null);
__d("GamesImpressionTracker",["cx","Arbiter","Banzai","Event","GamesGogglesSwitch","VisibilityTracking","throttle"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();var h,i="data-gamesrankedimp";c=1e3;function j(a){b("GamesGogglesSwitch").isEnabled()&&(a.className=a.className+" _1z5y")}function k(a){return function(){a&&(a(),a=null)}}h=babelHelpers.inherits(a,b("VisibilityTracking"));h&&h.prototype;a.prototype.handleEvent=function(a,event){if(event.name==="visible"){var c=a.getAttribute(i);a.removeAttribute(i);c&&(j(a),c&&b("Banzai").post("games_ranked_imp",{data:c}));b("Event").listen(a,"mouseover",k(function(){b("Banzai").post("games_mouseover",{data:c}),b("Event").listen(a,"mouseout",k(function(){b("Banzai").post("games_mouseout",{data:c})}))}))}};function a(){h.apply(this,arguments)}var l=new a({selector:"[data-gamesrankedimp]",handleAllVisibleEvents:!0,cacheTrackedElements:!0});d=b("throttle").acrossTransitions(function(){return l.fireEventCallback()},c,null);l.listeners&&l.listeners.addSubscriptions(b("Event").listen(document,"mousemove",d),b("Event").listen(document,"click",d),b("Arbiter").subscribe("games_unit_loaded",function(){return l.refreshAllTrackedElements()}))}),null);
__d("FacebookWebNotificationsSubscriptionWebGraphQLSubscription",["WebGraphQLSubscriptionHelper"],(function(a,b,c,d,e,f){"use strict";e.exports=b("WebGraphQLSubscriptionHelper").getExports({docID:"2382846945064526",queryID:"1138169679678964"})}),null);
__d("FacebookWebNotificationsSubscription",["invariant","BaseGraphQLSubscription","CurrentUser","FacebookWebNotificationsSubscriptionWebGraphQLSubscription","SubscriptionsHandler","WebPixelRatio","uuid"],(function(a,b,c,d,e,f,g){__p&&__p();var h="WEB_DESKTOP",i=[],j=null,k=babelHelpers["extends"]({},b("BaseGraphQLSubscription"),{_getTopic:function(a){return"gqls/"+this._getSubscriptionCallName()+"/actor_id_"+a.actorID+"_environment_"+h},_getQueryID:function(){return b("FacebookWebNotificationsSubscriptionWebGraphQLSubscription").getDocID()},_getQueryParameters:function(a){return{input:JSON.stringify({client_subscription_id:b("uuid")(),environment:h}),is_work_user:b("CurrentUser").isWorkUser(),scale:b("WebPixelRatio").get()}},_getSubscriptionCallName:function(){return"web_notification_receive_subscribe"}});function l(a){__p&&__p();a=a.web_notification_receive_subscribe;var b=a.aggregated_notification,c=a.notification,d=a.pinned_conversation,e=a.should_play_sound,f=a.should_show_beeper;i.forEach(function(a){switch(a.event){case"NEW_BEEPER":c!=null&&f===!0&&a.callback({notification:c,should_play_sound:!!e});break;case"NEW_NOTIFICATION":b!=null&&a.callback(b);break;case"NEW_PINNED_CONVERSATION":d!=null&&a.callback(d);break}})}e.exports={subscribe:function(a){__p&&__p();i.push(a);j===null&&(j=new(b("SubscriptionsHandler"))(),j.addSubscriptions(k.subscribe({actorID:b("CurrentUser").getID()},l)));var c=!1;return{remove:function(){if(c===!0)return;j!=null||g(0,3589);c=!0;i.splice(i.indexOf(a),1);i.length===0&&(j.release(),j=null)}}}}}),null);
__d("MainThreadPerformanceTypedLogger",["Banzai","GeneratedLoggerUtils","nullthrows"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function a(){this.clear()}a.prototype.log=function(){b("GeneratedLoggerUtils").log("logger:MainThreadPerformanceLoggerConfig",this.$1,b("Banzai").BASIC)};a.prototype.logVital=function(){b("GeneratedLoggerUtils").log("logger:MainThreadPerformanceLoggerConfig",this.$1,b("Banzai").VITAL)};a.prototype.logImmediately=function(){b("GeneratedLoggerUtils").log("logger:MainThreadPerformanceLoggerConfig",this.$1,{signal:!0})};a.prototype.clear=function(){this.$1={};return this};a.prototype.getData=function(){return babelHelpers["extends"]({},this.$1)};a.prototype.updateData=function(a){this.$1=babelHelpers["extends"]({},this.$1,a);return this};a.prototype.setAction=function(a){this.$1.action=a;return this};a.prototype.setArtilleryTraceID=function(a){this.$1.artillery_trace_id=a;return this};a.prototype.setEventDurationMs=function(a){this.$1.event_duration_ms=a;return this};a.prototype.setFrameDrops=function(a){this.$1.frame_drops=a;return this};a.prototype.setLargeFrameDrops=function(a){this.$1.large_frame_drops=a;return this};a.prototype.setMaxFrameDrops=function(a){this.$1.max_frame_drops=a;return this};a.prototype.setParallelActions=function(a){this.$1.parallel_actions=b("GeneratedLoggerUtils").serializeVector(a);return this};a.prototype.setSampleRate=function(a){this.$1.sample_rate=a;return this};a.prototype.setVC=function(a){this.$1.vc=a;return this};c={action:!0,artillery_trace_id:!0,event_duration_ms:!0,frame_drops:!0,large_frame_drops:!0,max_frame_drops:!0,parallel_actions:!0,sample_rate:!0,vc:!0};e.exports=a}),null);
__d("ArtilleryInteractionTraceName",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({DETAILS_PAGE_LOADING:"Details Page Loading",FBPKG_UI:"fbpkg_ui",BACKBONE_UI:"backbone_ui",ADS_INTERFACES_INTERACTION:"ADS_INTERFACES_INTERACTION",ADS_PERF_SCENARIO:"ads_perf_scenario",ADS_WAIT_TIME:"ads_wait_time",INTERN_NOTIFY_INBOX_PAGE_LOAD:"intern_notify_inbox_page_load",MAIN_THREAD_PERFORMANCE:"main_thread_performance",PAGES_INBOX_WWW_LOADING_ITEM:"pages_inbox_www.loading_item",SEVMANAGER_POWERSEARCH_INITIAL_PAGE_LOAD:"sevmanager_powersearch_initial_page_load",WATCH_SECTIONS_LOAD_MORE:"watch_sections_load_more",WATCH_DISCOVER_SCROLL:"watch_discover_scroll",WATCH_CAROUSEL_LEFT_SCROLL:"watch_carousel_left_scroll",WATCH_CAROUSEL_RIGHT_SCROLL:"watch_carousel_right_scroll",VIDEO_STALL:"video_stall",VIDEO_PSR:"video_psr",EVENT:"Event",DAIQUERY_INTERACTIVE_QUERY:"daiquery_interactive_query",DO_NOT_USE_JUST_FOR_TESTING:"__test_interaction"})}),null);
__d("FeedQuickLogModule",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({CACHE_FETCH:655545,COMMENT_TTL_WWW:655585,CONSUMPTION_RESTORATION_WWW:655575,IMAGE_LOAD_WWW:655576,LOAD:655546,LOAD_ANY_DESTINATION_FROM_NOTIFICATIONS_WWW:655596,LOAD_STORY_PERMALINK_FROM_ANYWHERE_WWW:655597,MAIN_THREAD_PERFORMANCE:655595,NETWORK_FETCH:655544,NOTIFICATION_INTERACTION_WWW:655584,POST_STARTUP:655535,SCROLL_PERF:655590})}),null);
__d("MainThreadPerformanceMonitorActionEntry",["ArtilleryInteractionTraceName","FeedQuickLogModule","MainThreadPerformanceTypedLogger","QuickPerformanceLogger","TimeSliceInteraction","performanceNow"],(function(a,b,c,d,e,f){"use strict";__p&&__p();function g(a,c,d){this.$4=0,this.$5=0,this.$7=0,this.$2=a,this.$10=d,this.$8=b("performanceNow")(),this.$6=new Set(c),this.$9=b("TimeSliceInteraction").create(b("ArtilleryInteractionTraceName").MAIN_THREAD_PERFORMANCE),this.$9.trace().addStringAnnotation("action",this.$2),this.$3=g.$1++,b("QuickPerformanceLogger").markerStart(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,this.$3),b("QuickPerformanceLogger").annotateMarkerString(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,"ACTION",a,this.$3),b("QuickPerformanceLogger").setSampleRateForInstance(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,d,this.$3)}g.prototype.addLargeFrameDrops=function(a){if(a<=0)return this;this.$4+=a;this.$9.inform("large_frame_drop",{pointGroup:"large_frame_drops"}).addStringAnnotation("quantity",a.toString());return this};g.prototype.addFrameDrops=function(a){if(a<=0)return this;this.$5=Math.max(this.$5,a);this.$7+=a;return this};g.prototype.addParallelAction=function(a){this.$6.add(a);return this};g.prototype.log=function(){__p&&__p();if(this.$7>0){var a=b("performanceNow")()-this.$8;new(b("MainThreadPerformanceTypedLogger"))().setFrameDrops(this.$7).setLargeFrameDrops(this.$4).setMaxFrameDrops(this.$5).setAction(this.$2).setEventDurationMs(Math.round(a)).setParallelActions(this.$6).setArtilleryTraceID(this.$9.getTraceID()).setSampleRate(this.$10).log()}a=Array.from(this.$6);this.$4>0&&(this.$9.trace().addSetAnnotation("parallel_actions",a),this.$9.finish());b("QuickPerformanceLogger").annotateMarkerStringArray(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,"PARALLEL_ACTIONS",a,this.$3);b("QuickPerformanceLogger").annotateMarkerDouble(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,"LARGE_FRAME_DROPS",this.$4,this.$3);b("QuickPerformanceLogger").annotateMarkerDouble(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,"FRAME_DROPS",this.$7,this.$3);b("QuickPerformanceLogger").markerEnd(b("FeedQuickLogModule").MAIN_THREAD_PERFORMANCE,"SUCCESS",this.$3)};g.$1=0;e.exports=g}),null);
__d("MainThreadPerformanceMonitor",["MainThreadPerformanceMonitorActionEntry","MainThreadPerformanceMonitorConfig","Random","Run","SubscriptionsHandler","Visibility","clearTimeout","gkx","requestAnimationFrame","setTimeout"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("MainThreadPerformanceMonitorConfig").actionMaxDuration||12e4,h=1,i=4;a=60;var j=1e3/a,k=j*60,l=new Map(),m={},n,o,p=new(b("SubscriptionsHandler"))();function q(){p&&p.release(),u(),l.clear()}function r(){t(),p.addSubscriptions(b("Run").onLeave(q),b("Visibility").addListener(b("Visibility").VISIBLE,function(){return t()}),b("Visibility").addListener(b("Visibility").HIDDEN,function(){return u()}))}function s(a){__p&&__p();if(o){var c=a-o;if(c<k){c=Math.max(Math.round(c/j)-1,0);var d=c>=h?c/h:0,e=c>=i?c/i:0;l.forEach(function(a){return a.addFrameDrops(d).addLargeFrameDrops(e)})}}o=a;n=b("requestAnimationFrame")(s)}function t(){n||(o=0,n=b("requestAnimationFrame")(s))}function u(){cancelAnimationFrame(n),n=null}c={isEnabled:function(){return b("gkx")("678737")},start:function(a){__p&&__p();if(l.has(a))return!0;if(!this.isEnabled())return!1;l.forEach(function(b){return b.addParallelAction(a)});var c=b("MainThreadPerformanceMonitorConfig").actionSamplingRates[a]||0;if(!b("Random").coinflip(c))return!1;l.size===0&&r();l.set(a,new(b("MainThreadPerformanceMonitorActionEntry"))(a,l.keys(),c));m[a]=b("setTimeout")(function(){return this.stop(a)}.bind(this),g);return!0},stop:function(a){__p&&__p();if(!this.isEnabled())return;var c=l.get(a);if(!c)return;c.log();l["delete"](a);b("clearTimeout")(m[a]);delete m[a];l.size===0&&q()}};e.exports=c}),null);
__d("XUIBadge",["cx","invariant","CSS","DOM","formatNumber"],(function(a,b,c,d,e,f,g,h){__p&&__p();function i(a){return parseInt(a,10)===a}function a(a){"use strict";this.target=a.target,this.count=a.count,this.maxcount=a.maxcount}a.prototype.getCount=function(){"use strict";return this.count};a.prototype.setCount=function(a){"use strict";i(a)||h(0,186),a>=0||h(0,3502),this.count=a,b("CSS").conditionClass(this.target,"hidden_elem",this.count===0),b("DOM").setContent(this.target,b("formatNumber").withMaxLimit(a,this.maxcount)),a>this.maxcount?b("CSS").addClass(this.target,"_5ugi"):b("CSS").removeClass(this.target,"_5ugi")};a.prototype.setLegacyContent=function(a){"use strict";typeof a==="string"?(b("CSS").conditionClass(this.target,"hidden_elem",a==0),b("DOM").setContent(this.target,a),b("CSS").removeClass(this.target,"_5ugi")):this.setCount(a)};a.prototype.increment=function(){"use strict";this.setCount(this.getCount()+1)};e.exports=a}),null);
__d("AttachmentIssueDiversityShareConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({ARTICLE_CLICK:"issueDiversity/article_click"})}),null);
__d("MainThreadPerformanceLoggerActions",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({SCROLL:"scroll",TAIL_LOAD:"tail_load"})}),null);
__d("NotifTestIDs",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({REACT_BLUE_BAR_JEWEL:"react_blue_bar_jewel",NON_REACT_BLUE_BAR_JEWEL:"non_react_blue_bar_jewel",REACT_NOTIF_LIST:"react_notif_list",NOTIF_LIST_ITEM:"notif_list_item",SEE_ALL_LIST:"see_all_list",REACT_NOTIF_JEWEL_FLYOUT:"react_notif_jewel_flyout",NON_REACT_NOTIF_JEWEL_FLYOUT:"non_react_notif_jewel_flyout",CHEVRON:"chevron",REACT_MARK_ALL_AS_READ_LINK:"react_mark_all_as_read_link",NON_REACT_MARK_ALL_AS_READ_LINK:"non_react_mark_all_as_read_link",NOTIFICATION_SOUND_SETTING:"notifiation_sound_setting",NOTIFICATION_SOUND_SETTING_SELECTOR:"notifiation_sound_setting_selector",MESSAGE_SOUND_SETTING:"message_sound_setting",MESSAGE_SOUND_SETTING_SELECTOR:"message_sound_setting_selector",CLOSE_FRIEND_ACTIVITY_SELECTOR:"close_friend_activity_selector",BIRTHDAY_SELECTOR:"birthday_selector",ON_THIS_DAY_SELECTOR:"on_this_day_selector",TAGS_SELECTOR:"tags_selector",LIVE_VIDEO_SELECTOR:"live_video_selector",REACT_BADGE_COUNT_CONTAINER:"react_badge_count_container",NON_REACT_BADGE_COUNT_CONTAINER:"non_react_badge_count_container",BEEPER_LIST:"beeper_list",NON_REACT_SETTING_LINK:"non_react_setting_link",REACT_SETTING_LINK:"react_setting_link",GEOGRAPHIC_SUBSCRIPTION_SELECTOR:"geographic_subscription_selector"})}),null);