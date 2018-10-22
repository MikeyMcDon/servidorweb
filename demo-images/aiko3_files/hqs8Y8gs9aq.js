if (self.CavalryLogger) { CavalryLogger.start_js(["jLXVe"]); }

__d("EventReminderDispatcher",["ExplicitRegistrationDispatcher"],(function(a,b,c,d,e,f){"use strict";e.exports=new(b("ExplicitRegistrationDispatcher"))({strict:!1})}),null);
__d("EventReminderActions",["EventReminderDispatcher","keyMirror"],(function(a,b,c,d,e,f){"use strict";a=b("keyMirror")({DELETE_EVENT_REMINDER:null,UPDATE_EVENT_REMINDER:null,CLEAR_ALL_REMINDERS:null});var g={Types:a,updateEventReminder:function(a,event,c,d){b("EventReminderDispatcher").dispatch({type:g.Types.UPDATE_EVENT_REMINDER,threadID:a,event:event,participantsEventStatus:d,eventID:c})},deleteEventReminder:function(a,c){b("EventReminderDispatcher").dispatch({type:g.Types.DELETE_EVENT_REMINDER,threadID:a,eventID:c})},clearAllReminders:function(a){b("EventReminderDispatcher").dispatch({type:g.Types.CLEAR_ALL_REMINDERS,threadID:a})}};e.exports=g}),null);
__d("EventReminderConstants",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({INITIAL:"initial",GOING:"going",WATCHED:"watched",UNWATCHED:"unwatched"});b=Object.freeze({ASSOCIATED_EVENT:"ASSOCIATED_EVENT"});c=Object.freeze({GOING:"GOING",DECLINED:"DECLINED",INVITED:"INVITED"});d=Object.freeze({NO_ERROR:"NO_ERROR",PAST_TIME:"PAST_TIME",AFTER_ONE_YEAR:"AFTER_ONE_YEAR"});e.exports={EventGuestStates:a,EventPlanType:b,GuestStates:c,TimeErrorType:d}}),null);
__d("EventReminderMembersMap",["CurrentUser","EventReminderConstants","MercuryIDs","MessengerParticipants.bs"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=b("EventReminderConstants").EventGuestStates,h=b("EventReminderConstants").GuestStates;function a(a){this.$1=a,this.$2=new Map(),this.$3=new Map(),this.$4=new Map(),this.$5=new Map(),this.$6=new Map(),this.$7=new Map()}a.prototype.setAllMembers=function(a,c){__p&&__p();if(!a)return;this.$2.set(c,h.INVITED);var d=[],e=[],f=[],g=[];for(var i in a){d.push(b("MercuryIDs").getParticipantIDFromUserID(i));var j=a[i];i===b("CurrentUser").getID()&&this.$2.set(c,j);var k={fbid:i,guestState:j,imageSrc:""};j===h.GOING?e.push(k):j===h.DECLINED?f.push(k):g.push(k)}j=e.concat(f,g);this.$3.set(c,j);this.$4.set(c,e);this.$7.set(c,!1);this.$8(c,d,j)};a.prototype.setAllMembersOfAssociatedEvent=function(a,c){__p&&__p();if(!a)return;this.$2.set(c,g.INITIAL);var d=[],e=[],f=[],h=[];a.map(function(a){d.push(b("MercuryIDs").getParticipantIDFromUserID(a.participant_id));var i=a.participant_id.toString();a=a.event_status||g.INITIAL;i===b("CurrentUser").getID()&&this.$2.set(c,a);i={fbid:i,guestState:a,imageSrc:""};a===g.GOING?e.push(i):a===g.WATCHED?f.push(i):h.push(i)},this);a=e.concat(f,h);this.$3.set(c,a);this.$4.set(c,e);this.$5.set(c,f);this.$6.set(c,h);this.$7.set(c,!1);this.$8(c,d,a)};a.prototype.clearMembers=function(a){this.$2["delete"](a),this.$3["delete"](a),this.$4["delete"](a),this.$5["delete"](a),this.$6["delete"](a)};a.prototype.getAllMembers=function(a){return this.$3.get(a)};a.prototype.getGoingMembers=function(a){return this.$4.get(a)};a.prototype.getInterestedMembers=function(a){return this.$5.get(a)};a.prototype.getSelfGuestState=function(a){return!this.$2.has(a)?h.INVITED:this.$2.get(a)};a.prototype.getProfileImagesLoaded=function(a){return!!this.$7.get(a)};a.prototype.$8=function(a,c,d){b("MessengerParticipants.bs").getBigImageMulti(c,function(c){for(var e=0;e<d.length;e++)d[e].fbid&&(d[e].imageSrc=c[b("MercuryIDs").getParticipantIDFromUserID(d[e].fbid)]);this.$7.set(a,!0);this.$1.__emitChange()}.bind(this))};e.exports=a}),null);
__d("LightweightEventType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({EVENT:"EVENT",CALL:"CALL",DIRECT_M:"DIRECT_M",M_REMINDER:"M_REMINDER",M_PERSONAL_REMINDER:"M_PERSONAL_REMINDER"})}),null);
__d("EventReminderStateStore",["EventReminderActions","EventReminderConstants","EventReminderDispatcher","EventReminderMembersMap","EventRemindersGating","FluxStore","LightweightEventType"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g,h=b("EventReminderConstants").EventPlanType;c=babelHelpers.inherits(a,b("FluxStore"));g=c&&c.prototype;function a(){g.constructor.call(this,b("EventReminderDispatcher")),this.$EventReminderStateStore1={},this.$EventReminderStateStore2={},this.$EventReminderStateStore3=new Map(),this.$EventReminderStateStore4=new Map()}a.prototype.getEvent=function(a,b){b=b||a;return this.$EventReminderStateStore1[a]?this.$EventReminderStateStore1[a][b]:undefined};a.prototype.getSingleEventByThreadID=function(a){return this.$EventReminderStateStore2[a]};a.prototype.getEventsByThreadID=function(a){return this.$EventReminderStateStore1[a]};a.prototype.getEventMembers=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);return a&&a.getAllMembers(b)};a.prototype.getSelfGuestState=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);return a&&a.getSelfGuestState(b)};a.prototype.getNumOfGoingMembers=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);a=a&&a.getGoingMembers(b);return a?a.length:0};a.prototype.getNumOfInterestedMembers=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);a=a&&a.getInterestedMembers(b);return a?a.length:0};a.prototype.getProfileImagesLoaded=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);return!a?!1:a.getProfileImagesLoaded(b)};a.prototype.shouldShowCTA=function(a,b,c){return!1};a.prototype.clearEventMembers=function(a,b){b=b||a;a=this.$EventReminderStateStore3.get(a);a&&a.clearMembers(b)};a.prototype.getTransformedEvent=function(event){if(event.room_type==="EVENT"){var a=event.event_place&&event.event_place.name,b=event.event_place&&event.event_place.address&&event.event_place.address.single_line_full_address;return{allowRSVP:!0,eventDate:event.start_timestamp,eventName:event.name,eventLocationName:a,eventLocationAddress:b,eventID:event.id.toString(),eventType:h.ASSOCIATED_EVENT,exists:!0}}return{allowRSVP:!!event.track_rsvp,eventDate:event.event_time,eventName:event.title,eventLocationName:event.location_name,eventLocationAddress:event.location_address,eventID:event.oid.toString(),eventType:event.event_type,exists:!0}};a.prototype.__onDispatch=function(a){__p&&__p();var c=b("EventReminderActions").Types,d=a.threadID,e=a.eventID||a.threadID;this.$EventReminderStateStore3.get(d)||this.$EventReminderStateStore3.set(d,new(b("EventReminderMembersMap"))(this));var f=this.$EventReminderStateStore3.get(d);this.$EventReminderStateStore1[d]===undefined&&(this.$EventReminderStateStore1[d]={});switch(a.type){case c.UPDATE_EVENT_REMINDER:var event=a.event;this.$EventReminderStateStore1[d][e]=this.getTransformedEvent(event);this.$EventReminderStateStore1[d][e].eventType!==b("LightweightEventType").M_REMINDER&&(this.$EventReminderStateStore2[d]=this.$EventReminderStateStore1[d][e]);this.$EventReminderStateStore1[d][e].allowRSVP&&(event.room_type==="EVENT"?f&&f.setAllMembersOfAssociatedEvent(a.participantsEventStatus,e):f&&f.setAllMembers(event.event_members,e));break;case c.DELETE_EVENT_REMINDER:this.$EventReminderStateStore1[d][e]&&(this.$EventReminderStateStore1[d][e].exists=!1,this.clearEventMembers(d,e));this.$EventReminderStateStore2[d]&&this.$EventReminderStateStore2[d].eventID===e&&(this.$EventReminderStateStore2[d].exists=!1);break;case c.CLEAR_ALL_REMINDERS:delete this.$EventReminderStateStore1[d];delete this.$EventReminderStateStore2[d];break}this.__emitChange()};a.__moduleID=e.id;e.exports=new a()}),null);
__d("MercuryMessageRenderLocations",[],(function(a,b,c,d,e,f){"use strict";a=Object.freeze({CHAT:"chat",MESSENGER:"messenger",PAGES:"pages"});e.exports=a}),null);
__d("MessengerFormattingUtils",["cx","Newline.react","React","ReactFragment","UnicodeUtils","gkx"],(function(a,b,c,d,e,f,g){"use strict";__p&&__p();function a(a){return{offset:a[1].length,length:b("UnicodeUtils").strlen(a[2])+2,innerOffset:1,innerText:a[2]}}function c(a){return{offset:0,length:b("UnicodeUtils").strlen(a[0]),innerOffset:b("UnicodeUtils").strlen(a[1]),innerText:a[2]}}f={pattern:/([\s_~\'\"(]|^)\*(\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s_~\'\"(]|^)\*(?:\S(?:.*?\S)??)\*(?=[\s_~,.;:!?\'\")]|$)/,formatter:function(a){return b("React").createElement("b",null,a)},getRangeInMatch:a,recursivelyFormat:!0};g={pattern:/([\s*~\'\"(]|^)_(\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*~\'\"(]|^)_(?:\S(?:.*?\S)??)_(?=[\s*~,.;:!?\'\")]|$)/,formatter:function(a){return b("React").createElement("i",null,a)},getRangeInMatch:a,recursivelyFormat:!0};var h={pattern:/([\s*_\'\"(]|^)~(\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_\'\"(]|^)~(?:\S(?:.*?\S)??)~(?=[\s*_,.;:!?\'\")]|$)/,formatter:function(a){return b("React").createElement("s",null,a)},getRangeInMatch:a,recursivelyFormat:!0};a={pattern:/([\s*_~\'\"(]|^)`(\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/g,nonCapturingPattern:/(?:[\s*_~\'\"(]|^)`(?:\S(?:.*?\S)??)`(?=[\s\w*_~,.;:!?\'\")]|$)/,formatter:function(a){return b("React").createElement("code",null,a)},getRangeInMatch:a,recursivelyFormat:!1};var i={pattern:/(```)([\s\S]+?)```/g,nonCapturingPattern:/(```)([\s\S]+?)```/,formatter:function(a){return b("React").createElement("code",null,a)},getRangeInMatch:c,recursivelyFormat:!1},j=function(a){a={blockquote1:b("React").createElement("blockquote",{className:"_pye"},b("React").createElement("div",{className:"_pyf"}),a),blockquote2:b("React").createElement(b("Newline.react"),null)};return b("ReactFragment").create(a)};c={pattern:/(^>>> ?)((.|(\r\n)|\r|\n)*?\S(.|(\r\n)|\r|\n)*?)^<<<\s*?((\r\n)|\r|\n|$)/gm,nonCapturingPattern:/(^>>> ?)((.|(\r\n)|\r|\n)*?\S(.|(\r\n)|\r|\n)*?)^<<<\s*((\r\n)|\r|\n|$)/m,formatter:j,getRangeInMatch:c,recursivelyFormat:!0};j={pattern:/((^> )(.*\S.*)((\r\n)|\r|\n)?)(^> ?(.*)((\r\n)|\r|\n)?)*/gm,nonCapturingPattern:/(^> (.*\S.*)((\r\n)|\r|\n)?)(^> ?(.*)((\r\n)|\r|\n)?)*/m,formatter:j,getRangeInMatch:function(a){var c=a[0],d=b("UnicodeUtils").strlen(c);a=b("UnicodeUtils").strlen(a[2]);return{offset:0,length:d,innerOffset:a,innerText:c.substring(a,d)}},recursivelyFormat:!0,getAdditionalInnerRanges:function(a){return m(a.innerText,[k]).map(function(b){return babelHelpers["extends"]({},b,{offset:b.offset+a.innerOffset,innerOffset:b.innerOffset+a.innerOffset})})}};var k={pattern:/(^> ?)(.*?$)/gm,nonCapturingPattern:/^> ?(.*?$)/m,formatter:function(a){return a},getRangeInMatch:function(a){return{offset:0,length:b("UnicodeUtils").strlen(a[0]),innerOffset:b("UnicodeUtils").strlen(a[1]),innerText:a[2]}},recursivelyFormat:!0},l=[f,g,h,i,a];b("gkx")("678602")&&(l.push(c),l.push(j));function d(a,b){b===void 0&&(b=l);for(var c=0;c<b.length;c++){var d=b[c].nonCapturingPattern;if(d.test(a))return!0}return!1}function m(a,c){__p&&__p();c===void 0&&(c=l);var d=[];for(var e=0;e<c.length;e++){var f=c[e];f.pattern.lastIndex=0;var g=void 0;while((g=f.pattern.exec(a))!=null){var h=f.getRangeInMatch(g),i=a.substr(0,g.index+h.offset);i=b("UnicodeUtils").strlen(i);i={offset:i,length:h.length,innerText:h.innerText,innerOffset:i+h.innerOffset,formatter:f.formatter,recursivelyFormat:f.recursivelyFormat};h=f.getAdditionalInnerRanges?f.getAdditionalInnerRanges(i):[];d.push(i);d=d.concat(h)}}return d}e.exports={defaultFormatConfigs:l,hasMatch:d,getRanges:m,formatConfigs:{bold:f,italic:g,strikethrough:h,blockcode:i,code:a,blockquote:c,multipleInlineBlockquote:j,singleInlineBlockquote:k}}}),null);
__d("MessengerMathUtils",["UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g=2,h=/^(?:\$\$|\\\[)[\s\S]*?\S[\s\S]*?(?:\$\$|\\\])$/,i=/\\\([\s\S]*?\S[\s\S]*?\\\)/g;function a(a){return h.test(a)}function c(a){return a.substring(g,a.length-g)}function d(a){i.lastIndex=0;return i.test(a)}function f(a,c){__p&&__p();c===void 0;c=[];i.lastIndex=0;var d;while((d=i.exec(a))!==null){var e=a.substring(0,d.index);e=b("UnicodeUtils").strlen(e);c.push({offset:e,length:b("UnicodeUtils").strlen(d[0]),math:!0})}return c}function j(a){var b=a.length,c=0,d=0;for(var e=0;e<b;e++)a[e]==="\\"?a.slice(e,e+6)==="\\begin"?(c+=2,d=Math.max(d,c)):a.slice(e,e+4)==="\\end"?c-=2:e++:a[e]==="{"?(c++,d=Math.max(d,c)):a[e]==="}"&&c--;return d}e.exports={MATH_DELIMITER_LENGTH:g,isMathBlock:a,hasInlineMath:d,getInlineMathRanges:f,getMathBlockInner:c,getMaxBraceDepth:j}}),null);
__d("P2PTriggersUtils",["P2PGKValues"],(function(a,b,c,d,e,f){var g=/\$((\d{1,3}(,\d{3})*)|\d+)(\.\d{1,2})?(?=\s|\.\s|\,\s|$|\.$|\,$|\?|\!|\")/;a={canSeeTriggers:function(a){return!b("P2PGKValues").P2PEnabled?!1:!0},getMatches:function(a){return a.match(g)}};e.exports=a}),null);
__d("RedditLinkMatcher",[],(function(a,b,c,d,e,f){"use strict";var g=new RegExp("(^|\\s)(\\/[ru]\\/\\w{1,21})(?:\\b)","i");a=function(a){a=g.exec(a);return a===null?null:{lnk:a[2],idx:a.index+a[1].length}};b=function(a){return g.exec(a)!==null};c={match:a,isMatch:b};e.exports=c}),null);
__d("RedditLinkRanges",["RedditLinkMatcher","UnicodeUtils"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a={REDDIT_PREFIX:"https://old.reddit.com",get:function(a,c){__p&&__p();c===void 0&&(c=0);var d=a.substr(c),e=b("RedditLinkMatcher").match(d);if(!e)return[];var f=e.lnk;e=e.idx;d=b("UnicodeUtils").strlen(d.substr(0,e));c+=d;e="";switch(f[1].toLowerCase()){case"r":e=this.REDDIT_PREFIX+f;break;case"u":e=this.REDDIT_PREFIX+f;break;default:return[]}d=f.length;f=[{offset:c,length:d,entity:{url:e}}];return f.concat(this.get(a,c+d))}};e.exports=a}),null);
__d("TextWithEntitiesMetadataType",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NONE:0,CONCEPT:1,INTENT:2})}),null);
__d("shouldAddMRefParam",["isFacebookURI"],(function(a,b,c,d,e,f){a=function(a){if(!b("isFacebookURI")(a)||a.getFragment())return!1;return/^\/events\//.test(a.getPath())?!0:!1};e.exports=a}),null);
__d("MercuryMessageBody.react",["cx","fbt","BootloadedComponent.react","CurrentUser","DateConsts","EmojiRenderer","EmoticonEmojiList","EmoticonsList","EventRemindersGating","EventReminderStateStore","JSResource","Link.react","LinkRanges","MercuryIDs","MercuryMessageRenderLocations","MessengerContactActions.bs","MessengerFormattingUtils","MessengerMathUtils","MessengerSupportedEmojiUtils","MessengerTextWithEntities.react","P2PTriggersUtils","React","RedditLinkMatcher","RedditLinkRanges","TextWithEntities.react","TextWithEntitiesMetadataType","UnicodeUtils","URI","URLMatcher","emptyFunction","getURLRanges","gkx","ifRequired","requireWeak","shouldAddMRefParam"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i,j=b("LinkRanges").module,k=b("MessengerContactActions.bs").actions;c=b("React").PropTypes;var l=function(){l=b("emptyFunction"),b("ifRequired")("ChatAppActions",function(a){a.setInitialDisplayDone()})};d=babelHelpers.inherits(a,b("React").PureComponent);i=d&&d.prototype;function a(a){__p&&__p();i.constructor.call(this,a),this.interpolator=function(a,c){__p&&__p();if(c.className)return b("React").createElement("span",{className:c.className},a);if(c.math)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null,a),body:this.$4(a),fallbackBody:a,inline:!0,stripDelimiters:!0,className:"_1e4d _1e4e"});if(c.id){var d={};!b("CurrentUser").isWorkUser()&&!this.props.isFromViewer&&this.props.threadCustomColor&&(d.color=this.props.threadCustomColor);var e=this.props.onContactSelect,f=this.props.threadID?b("MercuryIDs").getThreadFBIDFromThreadID(this.props.threadID)===c.id:!1,g=new(b("URI"))("/ajax/hovercard/user.php").setQueryData({id:c.id}),h=b("gkx")("678279");g=b("React").createElement(b("Link.react"),{className:"_ih-"+(b("CurrentUser").isWorkUser()&&c.id===b("CurrentUser").getID()?" _1zle":""),href:f?"#":c.url,"data-hovercard":h?g:null,style:d,onClick:e&&!f?function(a){this.$3(e,c,a)}.bind(this):b("emptyFunction")},a);b("gkx")("678278")&&!f&&e&&!h&&(typeof a==="string"&&(c.contactName=a&&a.replace("@","")),g=b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerAvatarActions.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:g,avatar:g,contact:c,showSendMessageItem:!0,onAction:this.props.onContactSelect}));return g}if(c.formatter)if(c.recursivelyFormat){d=this.renderBody(c.innerText,!0,c.innerOffset);return c.formatter(d)}else return c.formatter(c.innerText);if(c.entity&&c.entity.url){f=new(b("URI"))(c.entity.url.replace(/#+$/,""));b("shouldAddMRefParam")(f)&&f.addQueryData({__mref:"mb"});h=f.toString();if(b("URI").isValidURI(h))return b("React").createElement(b("Link.react"),{href:{url:h,shimhash:c.entity.shimhash},s:c.entity.s,target:"_blank"},a);else return a}if(!c.entity){g=typeof c.type==="number"?c.type:b("TextWithEntitiesMetadataType")[c.type];switch(g){case b("TextWithEntitiesMetadataType").NONE:return b("React").createElement("span",{className:"_2y9",title:JSON.stringify(c.data)},a);case b("TextWithEntitiesMetadataType").CONCEPT:return this.renderConceptMetadata(a,c.data);case b("TextWithEntitiesMetadataType").INTENT:return this.renderIntentMetadata(a,c.data);default:return a}}return a}.bind(this),this.state=this.parseMessageBody(a)}a.prototype.UNSAFE_componentWillReceiveProps=function(a){(this.props.body!==a.body||this.props.metaRanges!==a.metaRanges||this.props.ranges!==a.ranges)&&this.setState(this.parseMessageBody(a))};a.prototype.parseMessageBody=function(a){__p&&__p();var c=(a.body||"").replace(/\s+$/,""),d=this.$1(a.metaRanges||[]);d={normalizedBody:c,isEncrypted:!1,isMathBlock:!1,isRichText:!1,ranges:[],filteredMetaRanges:d};if(c.length===0)return d;if(c.startsWith("?OTR")){d.isEncrypted=!0;return d}if(b("MessengerMathUtils").isMathBlock(c)){d.isMathBlock=!0;return d}var e=a.ranges,f=a.metaRanges;f=e&&e.length||f&&f.length||b("EmoticonsList").noncapturingRegexp.test(c)||b("EmojiRenderer").containsEmoji(c)||b("URLMatcher").match(c)||j&&j.hasMatch(c)||b("RedditLinkMatcher").isMatch(c)||this.$2(c,a)||b("MessengerSupportedEmojiUtils").containsEmoji(c)||b("EmoticonEmojiList").noncapturingRegexp.test(c)||b("MessengerFormattingUtils").hasMatch(c)||b("MessengerMathUtils").hasInlineMath(c);if(!f)return d;d.isRichText=!0;e&&e.length===1&&e[0].className==="__in"&&(e=b("getURLRanges")(c).concat(e));e=e||[];e=e.concat(b("getURLRanges")(c));j&&(e=e.concat(j.get(c)));e=e.concat(b("RedditLinkRanges").get(c));e=e.concat(b("MessengerFormattingUtils").getRanges(c));e=e.concat(b("MessengerMathUtils").getInlineMathRanges(c));d.ranges=e.filter(function(a){return a!=undefined});return d};a.prototype.hasFormatting=function(){return this.state.isRichText||this.state.isMathBlock||this.state.isEncrypted};a.prototype.$3=function(a,c,d){b("gkx")("678278")?d.preventDefault():a(k.MESSAGE,c,d)};a.prototype.$4=function(a){if(this.props.isFromViewer)return"\\color{#fff}{"+b("MessengerMathUtils").getMathBlockInner(a)+"}";else return b("MessengerMathUtils").getMathBlockInner(a)};a.prototype.renderConceptMetadata=function(a,b){if(!b)return a;return b.intent_name||b.name?this.renderIntentMetadata(a,b):a};a.prototype.renderIntentMetadata=function(a,c){__p&&__p();if(!c)return a;var d=c.intent_name||c.name;switch(d){case"request_time":return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ServicesVerticalRequestTimeTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null,a),data:c,text:a,threadID:this.props.threadID});case"timestamp":if(this.$5(c.value)&&b("EventRemindersGating").shouldShowTriggerWords)if(this.props.renderLocation===b("MercuryMessageRenderLocations").CHAT)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ChatEventPlanTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null,a),data:c,text:a,threadID:this.props.threadID});else if(this.props.renderLocation===b("MercuryMessageRenderLocations").MESSENGER)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerEventPlanTriggers.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null,a),data:c,text:a,threadID:this.props.threadID});return a;default:return a}};a.prototype.renderIntentCTA=function(a){__p&&__p();if(a){var c=a.intent_name||a.name;switch(c){case"request_time":return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ServicesRequestTimeIntentCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null),data:a,isFromViewer:this.props.isFromViewer,threadID:this.props.threadID});case"create_event":b("requireWeak")("EventReminderActionsLogger",function(a){a.logTriggerOnTriggerCTA()});c=this.props.threadID;var d=c&&this.$5(a.timestamp)&&b("EventReminderStateStore").shouldShowCTA(c,a.confidence);if(!d)return null;if(this.props.renderLocation===b("MercuryMessageRenderLocations").CHAT)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("ChatEventPlanCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null),data:a,threadID:c});else if(this.props.renderLocation===b("MercuryMessageRenderLocations").MESSENGER)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerEventPlanCTA.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("span",null),data:a,threadID:c})}}return null};a.prototype.renderCTAs=function(a){var c=null;if(a.length>0){a=a[0]||{};var d=typeof a.type==="number"?a.type:b("TextWithEntitiesMetadataType")[a.type];switch(d){case b("TextWithEntitiesMetadataType").CONCEPT:case b("TextWithEntitiesMetadataType").INTENT:c=this.renderIntentCTA(a.data);break}}return c};a.prototype.renderBody=function(a,c,d){__p&&__p();c===void 0&&(c=!1);d===void 0&&(d=0);var e=this.state,f=e.isRichText,g=e.ranges;e=e.filteredMetaRanges;var h=b("UnicodeUtils").strlen(a);if(!f)return b("React").createElement("span",{className:this.props.className},a);c&&(g=g.filter(function(a){return a.offset>=d&&a.offset+a.length<=d+h}).map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-d})}),e=e.filter(function(a){return a.offset>=d&&a.offset+a.length<=d+h}).map(function(a){return babelHelpers["extends"]({},a,{offset:a.offset-d})}));f={className:this.props.className,interpolator:this.interpolator,metaRanges:e,ranges:g,renderEmoji:!0,renderEmoticons:!0,text:a};if(this.$2(a)){e=b("React").createElement(b("TextWithEntities.react"),f);return b("React").createElement(b("BootloadedComponent.react"),babelHelpers["extends"]({bootloadPlaceholder:e,bootloadLoader:b("JSResource")("TextWithEntitiesAndP2P.react").__setRef("MercuryMessageBody.react")},f,{getMessengerEmote:this.$6,isSupportedEmoji:this.$7,threadID:this.props.threadID}))}g=b("React").createElement(b("MessengerTextWithEntities.react"),f);if(c)return g;a=this.renderCTAs(this.props.metaRanges||[]);return!a?g:b("React").createElement("span",null,g,a)};a.prototype.render=function(){__p&&__p();var a=this.state,c=a.normalizedBody,d=a.isEncrypted;a=a.isMathBlock;if(c.length===0)return null;l();if(this.props.plainText)return b("React").createElement("span",null,c);else if(d)return b("React").createElement("span",{className:"_89h"},h._("[mensaje codificado]"));else if(a)return b("React").createElement(b("BootloadedComponent.react"),{bootloadLoader:b("JSResource")("MessengerMath.react").__setRef("MercuryMessageBody.react"),bootloadPlaceholder:b("React").createElement("div",null,c),body:this.$4(c),fallbackBody:c,stripDelimiters:!0,className:"_1e4d"});else return this.renderBody(c)};a.prototype.$7=function(a){return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a)};a.prototype.$6=function(a){a=b("EmoticonEmojiList").emote2emojis[a];return b("MessengerSupportedEmojiUtils").isSupportedEmojiKey(a)?a:null};a.prototype.$5=function(a){a=new Date(a*b("DateConsts").MS_PER_SEC);var c=new Date(Date.now()+5*b("DateConsts").MS_PER_MIN),d=new Date(new Date().setFullYear(new Date().getFullYear()+1));return a>c&&a<d};a.prototype.$1=function(a){var b=a.filter(function(a){return a.data&&(a.data.intent_name==="create_event"||a.data.name==="create_event")});return b.length!==0?b:a};a.prototype.$2=function(a,c){c===void 0&&(c=this.props);return!!(c.threadID&&b("P2PTriggersUtils").canSeeTriggers(c.threadID)&&b("P2PTriggersUtils").getMatches(a))};a.propTypes={body:c.string,customLike:c.object,isFromViewer:c.bool,metaRanges:c.array,ranges:c.array,threadCustomColor:c.string,threadID:c.string,onContactSelect:c.func,renderLocation:c.oneOf([b("MercuryMessageRenderLocations").CHAT,b("MercuryMessageRenderLocations").MESSENGER,b("MercuryMessageRenderLocations").PAGES])};e.exports=a}),null);
__d("AbstractBadge.react",["cx","invariant","React","formatNumber","joinClasses"],(function(a,b,c,d,e,f,g,h){__p&&__p();var i;c=b("React").PropTypes;function j(a){return parseInt(a,10)===a}i=babelHelpers.inherits(a,b("React").PureComponent);i&&i.prototype;a.prototype.render=function(){"use strict";__p&&__p();var a=this.props,c=a.count,d=a.maxcount,e=a.label;a=babelHelpers.objectWithoutProperties(a,["count","maxcount","label"]);j(c)||h(0,186);j(d)||h(0,187);var f="_51lp"+(c>d?" _51lr":"")+(!this.props.allowZero&&c===0?" hidden_elem":"");e=e?b("React").createElement("span",{className:"accessible_elem","aria-hidden":c?"false":"true"},"\xa0",e):null;c=b("formatNumber").withMaxLimit(c,d);e!==null&&(c=b("React").createElement("span",{"aria-hidden":"true"},c));return b("React").createElement("span",babelHelpers["extends"]({},a,{className:b("joinClasses")(this.props.className,f)}),c,e)};function a(){"use strict";i.apply(this,arguments)}a.propTypes={className:c.string,count:c.number.isRequired,maxcount:c.number,label:c.string};a.defaultProps={maxcount:20};e.exports=a}),null);
__d("XUIBadge.react",["cx","AbstractBadge.react","React","joinClasses"],(function(a,b,c,d,e,f,g){__p&&__p();var h;c=b("React").PropTypes;h=babelHelpers.inherits(a,b("React").Component);h&&h.prototype;a.prototype.render=function(){"use strict";var a=this.props.type;a="_5ugh"+(a==="regular"?" _5ugf":"")+(a==="special"?" _5ugg":"");return b("React").createElement(b("AbstractBadge.react"),babelHelpers["extends"]({},this.props,{className:b("joinClasses")(this.props.className,a),type:null}))};function a(){"use strict";h.apply(this,arguments)}a.propTypes={type:c.oneOf(["regular","special"]),allowZero:c.bool};a.defaultProps={type:"regular"};e.exports=a}),null);
__d("XEventReminderController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/ajax/eventreminder/",{event_reminder_id:{type:"Int",required:!0}})}),null);
__d("EventReminderRequestHelper",["AsyncRequest","EventReminderActions","XEventReminderController"],(function(a,b,c,d,e,f){"use strict";a={fetchEventReminder:function(a,c,d){var e=b("XEventReminderController").getURIBuilder().setInt("event_reminder_id",c);new(b("AsyncRequest"))(e.getURI()).setHandler(function(e){e.payload&&(b("EventReminderActions").updateEventReminder(a,e.payload,c),d())}).send()}};e.exports=a}),null);
__d("ChatNotificationConstants",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({NORMAL:0,NO_USER_MESSAGE_NOTIFICATION:1})}),null);
__d("ChatBehavior",["Arbiter","ArbiterMixin","AvailableList","AvailableListConstants","ChatNotificationConstants","mixin"],(function(a,b,c,d,e,f){__p&&__p();var g,h=b("AvailableList").getWebChatNotification&&b("AvailableList").getWebChatNotification(),i=!1,j=!0;c=babelHelpers.inherits(a,b("mixin")(b("ArbiterMixin")));g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.ON_CHANGED="changed",b}a.prototype.notifiesUserMessages=function(){"use strict";return h!==b("ChatNotificationConstants").NO_USER_MESSAGE_NOTIFICATION};a.prototype.ignoresRemoteTabRaise=function(){"use strict";return i};a.prototype.showsTabUnreadUI=function(){"use strict";return j};var k=new a();function l(){k.inform(k.ON_CHANGED)}b("AvailableList").subscribe&&b("AvailableList").subscribe(b("AvailableListConstants").ON_CHAT_NOTIFICATION_CHANGED,function(){var a=h,c=b("AvailableList").getWebChatNotification();h=c;a!=c&&l()});b("Arbiter").subscribe("chat/set_does_page_occlude_tabs",function(a,b){i=!!b,l()});b("Arbiter").subscribe("chat/set_show_tab_unread_ui",function(a,b){j=!!b,l()});e.exports=k}),null);
__d("MessagesViewerSetID",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({MESSAGES:"messages",MESSAGES_VIEW_ALL_IN_THREAD:"messages:view_all_in_thread"})}),null);
__d("MessagesViewer",["AsyncRequest","DOM","MessagesViewerSetID","PhotoStore","React","ReactDOM","ge"],(function(a,b,c,d,e,f){__p&&__p();a={renderSpotlight:function(a,c,d,e){var f=a.setID;f||(f=b("MessagesViewerSetID").MESSAGES);g(b("React").createElement(d,{actorid:a.actorid,dimensions:[a.dimensions],disablepaging:a.disablePaging,disableForward:a.disableForward,forwardDialogComponent:e,open:!0,photoid:a.fbid,reverse:!1,rootClassName:a.rootClassName,setid:f,snapToPhoto:a.snapToPhoto,thumbsrc:a.src}));if(!b("PhotoStore").hasBeenCreated(f)&&a.endpoint){d=new(b("AsyncRequest"))(a.endpoint);c&&d.setRelativeTo(c);d.send()}},renderVideo:function(a){g(a)}};function g(a){var c=b("ge")("messages_viewer");c||(c=b("DOM").create("div",{id:"messages_viewer"}),document.body.appendChild(c));b("ReactDOM").render(a,c,function(){this.subscribeOnce("close",function(){b("ReactDOM").unmountComponentAtNode(c)})})}e.exports=a}),null);
__d("MercuryAttachmentViewer",["Bootloader","MessagesViewer","React","Run","emptyFunction"],(function(a,b,c,d,e,f){"use strict";a={renderVideo:function(a){b("Bootloader").loadModules(["MessagingVideoViewer.react","MessagingForwardAttachmentDialog.react"],function(c,d){b("MessagesViewer").renderVideo(b("React").createElement(c,babelHelpers["extends"]({},a,{forwardDialogComponent:d})))},"MercuryAttachmentViewer")},bootstrapWithConfig:function(a,c){b("Bootloader").loadModules(["SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],function(d,e){b("MessagesViewer").renderSpotlight(a,c,d,e)},"MercuryAttachmentViewer")},preload:function(){b("Run").onAfterLoad(function(){b("Bootloader").loadModules(["MessagingVideoViewer.react","SpotlightMessagesViewer","MessagingForwardAttachmentDialog.react"],b("emptyFunction"),"MercuryAttachmentViewer")})}};e.exports=a}),null);
__d("MercuryTimePassed",[],(function(a,b,c,d,e,f){e.exports=Object.freeze({TODAY:0,WEEK_AGO:1,MONTH_AGO:2,CURRENT_YEAR:3,OTHER_YEAR:4})}),null);
__d("MercuryTimestamp",["fbt","MercuryTimePassed","formatDate"],(function(a,b,c,d,e,f,g){__p&&__p();a=864e5;var h=6*a,i={getFormatedTimestamp:function(a){var b=a/1e3;return i.getFormattedTimestampByBucket(b,this.getTimeBucket(a))},getAbsoluteTimestamp:function(a){if(a==null)return null;else{a=i.getFormatedTimestamp(a);return a.absolute}},getRelativeTimestamp:function(a){a=i.getFormatedTimestamp(a);return a.relative},getFormattedTimestampByBucket:function(a,c){switch(c){case b("MercuryTimePassed").TODAY:return{absolute:g._("Hoy"),relative:b("formatDate")(a,"g:ia")};case b("MercuryTimePassed").WEEK_AGO:return{absolute:b("formatDate")(a,"l"),relative:b("formatDate")(a,"D")};case b("MercuryTimePassed").CURRENT_YEAR:return{absolute:b("formatDate")(a,"F j"),relative:b("formatDate")(a,"M j")};default:return{absolute:b("formatDate")(a,"F j, Y"),relative:b("formatDate")(a,"n/j/y")}}},getTimeBucket:function(a){__p&&__p();a=new Date(a);var c=new Date();c=new Date(c.getFullYear(),c.getMonth(),c.getDate());if(c<a)return b("MercuryTimePassed").TODAY;else if(c-h<a)return b("MercuryTimePassed").WEEK_AGO;else if(c.getFullYear()===a.getFullYear())return b("MercuryTimePassed").CURRENT_YEAR;else return b("MercuryTimePassed").OTHER_YEAR},getPreciseTimestamp:function(a){return b("formatDate")(new Date(a),i.getPreciseFormat(a))},getPreciseFormat:function(a){a=i.getTimeBucket(a);switch(a){case b("MercuryTimePassed").TODAY:return"g:ia";case b("MercuryTimePassed").WEEK_AGO:return"l g:ia";case b("MercuryTimePassed").CURRENT_YEAR:return"F jS, g:ia";case b("MercuryTimePassed").OTHER_YEAR:default:return"F j, Y g:i a"}}};e.exports=i}),null);