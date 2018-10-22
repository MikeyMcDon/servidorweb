if (self.CavalryLogger) { CavalryLogger.start_js(["HOMCX"]); }

__d("TagEventSproutConsts",[],(function(a,b,c,d,e,f){e.exports={composer_action_id:"668012816568345"}}),null);
__d("TagEventSproutEventPickerRelaySearchSourceQuery.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{kind:"LocalArgument",name:"query",type:"String",defaultValue:null},{kind:"LocalArgument",name:"limit",type:"Int",defaultValue:null},{kind:"LocalArgument",name:"verb",type:"ID",defaultValue:null}],b=[{kind:"Variable",name:"first",variableName:"limit",type:"Int"},{kind:"Literal",name:"object_type",value:["ENTITY"],type:"[MinutiaeSuggestionObjectType]"},{kind:"Variable",name:"query_string",variableName:"query",type:"String"},{kind:"Literal",name:"query_type",value:"OBJECT_PER_VERB",type:"MinutiaeSuggestionQueryType"},{kind:"Variable",name:"verb",variableName:"verb",type:"ID"}],c={kind:"ScalarField",alias:null,name:"id",args:null,storageKey:null},d={kind:"ScalarField",alias:null,name:"name",args:null,storageKey:null},e={kind:"LinkedField",alias:null,name:"profile_picture",storageKey:"profile_picture(height:32,width:32)",args:[{kind:"Literal",name:"height",value:32,type:"Int"},{kind:"Literal",name:"width",value:32,type:"Int"}],concreteType:"Image",plural:!1,selections:[{kind:"ScalarField",alias:null,name:"uri",args:null,storageKey:null}]},f={kind:"ScalarField",alias:null,name:"capitalized_day_time_sentence",args:null,storageKey:null},g={kind:"ScalarField",alias:null,name:"__typename",args:null,storageKey:null};return{kind:"Request",operationKind:"query",name:"TagEventSproutEventPickerRelaySearchSourceQuery",id:"1649096801872944",text:null,metadata:{},fragment:{kind:"Fragment",name:"TagEventSproutEventPickerRelaySearchSourceQuery",type:"Query",metadata:null,argumentDefinitions:a,selections:[{kind:"LinkedField",alias:"viewer",name:"__viewer_viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"minutiae_suggestions",storageKey:null,args:b,concreteType:"MinutiaeSuggestionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MinutiaeSuggestionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"MinutiaeSuggestion",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"object",storageKey:null,args:null,concreteType:null,plural:!1,selections:[{kind:"InlineFragment",type:"Event",selections:[c,d,e,{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[d]},f]}]}]}]}]}]}]},operation:{kind:"Operation",name:"TagEventSproutEventPickerRelaySearchSourceQuery",argumentDefinitions:a,selections:[{kind:"LinkedField",alias:null,name:"viewer",storageKey:null,args:null,concreteType:"Viewer",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"minutiae_suggestions",storageKey:null,args:b,concreteType:"MinutiaeSuggestionsConnection",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"edges",storageKey:null,args:null,concreteType:"MinutiaeSuggestionsEdge",plural:!0,selections:[{kind:"LinkedField",alias:null,name:"node",storageKey:null,args:null,concreteType:"MinutiaeSuggestion",plural:!1,selections:[{kind:"LinkedField",alias:null,name:"object",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,c,{kind:"InlineFragment",type:"Event",selections:[d,e,{kind:"LinkedField",alias:null,name:"event_place",storageKey:null,args:null,concreteType:null,plural:!1,selections:[g,d,c]},f]}]}]}]}]}]},{kind:"LinkedHandle",alias:null,name:"viewer",args:null,handle:"viewer",key:"",filters:null}]}}}();e.exports=a}),null);
__d("ComposerTagEventTypeahead.react",["cx","fbt","React","ReactComposerTaggerPresenter","ReactComposerTaggerViewStyles","SearchableEntry","WebAsyncSearchSource","XUITypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=babelHelpers.inherits(a,b("React").Component);i=c&&c.prototype;function a(a){i.constructor.call(this,a),this.$1=function(event){this.setState({query:event.target.value})}.bind(this),this.$2=function(a){var b=this.$7();b.event=a;this.setState({query:a.getTitle()});this.props.onSelect(b)}.bind(this),this.$4=function(){this.$8(),this.setState({query:""})}.bind(this),this.$3=function(event){this.state.query===event.target.value&&this.$8()}.bind(this),this.state={query:a.taggerData.event?a.taggerData.event.getTitle():""}}a.prototype.componentDidMount=function(){this.refs.typeahead&&this.refs.typeahead.focusInput()};a.prototype.render=function(){return b("React").createElement(b("XUITypeahead.react"),{autoHighlight:!0,className:"_5esx _4zdz",clearable:!0,focusedOnInit:this.props.autoFocus,highlightOnSelect:!0,onChange:this.$1,onSelectAttempt:this.$2,showEntriesOnFocus:!0,placeholder:h._("\u00bfQu\u00e9 evento quieres etiquetar?"),onBackspace:this.$3,onClear:this.$4,queryString:this.state.query,ref:"typeahead",searchSource:this.$5(),tallInput:!1,selectedEntry:this.props.taggerData.event,initialEntry:this.props.taggerData.event,presenter:this.$6()})};a.prototype.$7=function(){return Object.assign({},this.props.taggerData)};a.prototype.$5=function(){return this.state.query?this.props.userInputEventsSearchSource:this.props.nearByEventsSearchSource};a.prototype.$6=function(){var a={taggerViewStyle:b("ReactComposerTaggerViewStyles").SCROLLABLE};return Object.assign({},b("ReactComposerTaggerPresenter"),{layerPosition:this.props.layerPosition||undefined,extraRendererProps:a,maxEntries:15})};a.prototype.$8=function(){var a=this.$7();a.event=null;a.eventID=null;this.props.onSelect(a)};e.exports=a}),null);
__d("ReactComposerTagEventTaggerComponent.react",["cx","fbt","Grid.react","React","WebAsyncSearchSource","ComposerTagEventTypeahead.react"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=b("Grid.react").GridItem;i=babelHelpers.inherits(a,b("React").Component);i&&i.prototype;a.prototype.render=function(){return b("React").createElement(b("Grid.react"),{className:"_5esl",cols:2},b("React").createElement(j,{className:"_5esm",key:"label"},h._("Estoy asistiendo a...")),b("React").createElement(j,{className:"_5esw",key:"tokenizer"},b("React").createElement(b("ComposerTagEventTypeahead.react"),{autoFocus:this.props.autoFocus,onSelect:this.props.onSelect,nearByEventsSearchSource:this.props.nearByEventsSearchSource,taggerData:this.props.taggerData,userInputEventsSearchSource:this.props.userInputEventsSearchSource})))};function a(){i.apply(this,arguments)}e.exports=a}),null);
__d("TagEventSproutEventPickerRelaySearchSource",["AbstractRelaySearchSource","RelayFBEnvironment","RelayModern","SearchableEntry","TagEventSproutEventPickerRelaySearchSourceQuery.graphql"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;b("RelayModern").graphql;var h=20,i=668012816568345,j=function(){return b("TagEventSproutEventPickerRelaySearchSourceQuery.graphql")};function k(a){return{query:j,variables:{query:a,limit:h,verb:i}}}function l(a){__p&&__p();a=(a=a)!=null?(a=a.viewer)!=null?(a=a.minutiae_suggestions)!=null?a.edges:a:a:a;return!a?[]:a.map(function(a,c){var event=a.node.object;a=c(event,function(a){return a.capitalized_day_time_sentence});var d=c(event,function(a){return a.event_place.name}),e="";d===null?e=a:a===null?e=d:e=[a,"\xb7",d].join(" ");return new(b("SearchableEntry"))({uniqueID:event.id,title:event.name,subtitle:e,photo:c(event,function(a){return a.profile_picture.uri})})})}var m=function(a,b){return b(a)};c=babelHelpers.inherits(a,b("AbstractRelaySearchSource"));g=c&&c.prototype;function a(){var a={bootstrapRequests:[{gen:function(a){return k(a)}}],queryRequests:[{gen:function(a){return k(a)}}],packageFn:l,getAllForEmptyQuery:!0};g.constructor.call(this,b("RelayFBEnvironment"),a,m)}e.exports=a}),null);
__d("XEventsTagEventTypeaheadController",["XController"],(function(a,b,c,d,e,f){e.exports=b("XController").create("/events/tag_event_sprout/typeahead/",{media_latitude:{type:"Float"},media_longitude:{type:"Float"},media_taken_time:{type:"Int"},target_id:{type:"FBID"}})}),null);
__d("ReactComposerTagEventTaggerContainer.react",["React","ReactComposerLoggingName","ReactComposerMinutiaeAttachmentActions","ReactComposerTagEventTaggerComponent.react","ReactComposerTaggerActions","ReactComposerTaggerContainerStateMixin","ReactComposerTaggerHideOnEscapeKeyPress.react","ReactComposerTaggerType","TagEventSproutConsts","TagEventSproutEventPickerRelaySearchSource","WebAsyncSearchSource","XEventsTagEventTypeaheadController","areEqual"],(function(a,b,c,d,e,f){"use strict";__p&&__p();a=b("React").PropTypes;c=b("React").createClass({displayName:"ReactComposerTagEventTaggerContainer",mixins:[b("ReactComposerTaggerContainerStateMixin")()],statics:{taggerID:b("ReactComposerTaggerType").TAG_EVENT,loggingName:b("ReactComposerLoggingName").TAG_EVENT,taggerComponent:b("ReactComposerTagEventTaggerComponent.react")},propTypes:{mediaLocation:a.shape({latitude:a.number.isRequired,longitude:a.number.isRequired}),mediaTakenTime:a.number,isPersonalTimeline:a.bool},_nearByEventsSearchSource:null,_userInputEventsSearchSource:b("TagEventSproutEventPickerRelaySearchSource"),UNSAFE_componentWillMount:function(){this._initNearByEventsSearchSource(this.props),this._initUserInputEventsSearchSource()},UNSAFE_componentWillReceiveProps:function(a){(!b("areEqual")(a.mediaLocation,this.props.mediaLocation)||!b("areEqual")(a.mediaTakenTime,this.props.mediaTakenTime))&&this._initNearByEventsSearchSource(a)},render:function(){return!this.state.isSelected?null:b("React").createElement("div",{"data-testid":"tag-event-tagger-component"},b("React").createElement(b("ReactComposerTaggerHideOnEscapeKeyPress.react"),{shouldHideOnEscape:this.state.isSelected},b("React").createElement(b("ReactComposerTagEventTaggerComponent.react"),{autoFocus:this.state.focusedOnInit,nearByEventsSearchSource:this._nearByEventsSearchSource,onSelect:this._onSelect,taggerData:this.state.taggerData,userInputEventsSearchSource:this._userInputEventsSearchSource})))},_initNearByEventsSearchSource:function(a){a=b("XEventsTagEventTypeaheadController").getURIBuilder().setFloat("media_latitude",(a.mediaLocation||{}).latitude).setFloat("media_longitude",(a.mediaLocation||{}).longitude).setInt("media_taken_time",a.mediaTakenTime?a.mediaTakenTime:null).setFBID("target_id",this.context.targetID).getURI();this._nearByEventsSearchSource=new(b("WebAsyncSearchSource"))({bootstrapRequests:[{uri:a}],getAllForEmptyQuery:!0,queryRequests:[{uri:a}]})},_initUserInputEventsSearchSource:function(){this._userInputEventsSearchSource=new(b("TagEventSproutEventPickerRelaySearchSource"))()},_onSelect:function(a){var c=this._getCopyOfData();a&&a.mediaTakenTime&&(c.mediaTakenTime=a.mediaTakenTime);a&&a.event?(c.eventID=a.event.getUniqueID(),c.event=a.event,b("ReactComposerTaggerActions").deselectCurrentTagger(this.context.composerID,b("ReactComposerLoggingName").TAG_EVENT),b("ReactComposerMinutiaeAttachmentActions").fetchMinutiaeAttachment(this.context.composerID,b("TagEventSproutConsts").composer_action_id,c.eventID,this.context.targetID,this.context.actorID,!!this.props.isPersonalTimeline)):(c.eventID=null,c.event=null,b("ReactComposerMinutiaeAttachmentActions").setMarkup(this.context.composerID,null));b("ReactComposerTaggerActions").setTaggerData(this.context.composerID,b("ReactComposerLoggingName").TAG_EVENT,b("ReactComposerTaggerType").TAG_EVENT,c)},_getCopyOfData:function(){return Object.assign({},this.state.taggerdata)}});e.exports=c}),null);