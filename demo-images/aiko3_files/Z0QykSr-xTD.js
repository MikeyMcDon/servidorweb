if (self.CavalryLogger) { CavalryLogger.start_js(["BNTdE"]); }

__d("UFILiveTypingIndicator.react",["cx","fbt","Animation","MercuryTypingAnimation.react","OnVisible.react","React","ReactDOM","UFIImageBlock.react","gkx"],(function(a,b,c,d,e,f,g,h){"use strict";__p&&__p();var i;c=b("React").Component;d=babelHelpers.inherits(a,c);i=d&&d.prototype;function a(a){i.constructor.call(this,a),this.state={friendTyping:a.friendTyping,isVisible:!1}}a.prototype.componentDidMount=function(){this.$1(this.state,this.props)};a.prototype.UNSAFE_componentWillReceiveProps=function(a){a.hasTyping&&this.setState({friendTyping:a.friendTyping})};a.prototype.componentDidUpdate=function(a,b){this.$1(this.state,this.props)};a.prototype.$1=function(a,c){if(!a.isVisible)return;a=b("ReactDOM").findDOMNode(this.refs.content);if(!a)return;c.hasTyping?new(b("Animation"))(a).show().to("marginTop",0).ease(b("Animation").ease.end).checkpoint(.5).to("opacity",1).go():new(b("Animation"))(a).to("opacity",0).ease(b("Animation").ease.end).checkpoint(.25).to("marginTop",-32).hide().go()};a.prototype.render=function(){var a=this.props,c=this.state;c=c.friendTyping&&!b("gkx")("676828")?h._("Un amigo est\u00e1 escribiendo un comentario..."):h._("Alguien est\u00e1 escribiendo un comentario...");return b("React").createElement(b("OnVisible.react"),{onVisible:function(){return this.setState({isVisible:!0})}.bind(this),onHidden:function(){return this.setState({isVisible:!1})}.bind(this)},b("React").createElement("div",{className:"_j-l"},b("React").createElement("div",{ref:"content",className:"_353j UFIRow"+(a.isFirstCommentComponent?" _48pi":"")+(a.isLastCommentComponent?" UFILastCommentComponent":"")},b("React").createElement(b("UFIImageBlock.react"),{spacing:"medium"},b("React").createElement(b("MercuryTypingAnimation.react"),{className:"_79o"}),b("React").createElement("div",{className:"_79p"},c)))))};e.exports=a}),null);
__d("ChatContentSearchFlyoutWrapper.react",["ChatContentSearchFlyout.react","React"],(function(a,b,c,d,e,f){"use strict";__p&&__p();var g;c=babelHelpers.inherits(a,b("React").PureComponent);g=c&&c.prototype;function a(){var a,b;for(var c=arguments.length,d=new Array(c),e=0;e<c;e++)d[e]=arguments[e];return b=(a=g.constructor).call.apply(a,[this].concat(d)),this.$1=function(a,b){this.props.onSelect(a,b),this.props.onHideDialog()}.bind(this),b}a.prototype.render=function(){return b("React").createElement(b("ChatContentSearchFlyout.react"),{onSelect:this.$1,query:this.props.getQuery()})};e.exports=a}),null);