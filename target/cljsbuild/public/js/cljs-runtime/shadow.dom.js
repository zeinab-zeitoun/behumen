goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_73266 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_73266(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_73269 = (function (this$){
var x__4428__auto__ = (((this$ == null))?null:this$);
var m__4429__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4429__auto__.call(null,this$));
} else {
var m__4426__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4426__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_73269(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__72680 = coll;
var G__72681 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__72680,G__72681) : shadow.dom.lazy_native_coll_seq.call(null,G__72680,G__72681));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4126__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__72688 = arguments.length;
switch (G__72688) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__72692 = arguments.length;
switch (G__72692) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__72699 = arguments.length;
switch (G__72699) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__72708 = arguments.length;
switch (G__72708) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__72715 = arguments.length;
switch (G__72715) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__72726 = arguments.length;
switch (G__72726) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e72732){if((e72732 instanceof Object)){
var e = e72732;
return console.log("didnt support attachEvent",el,e);
} else {
throw e72732;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4126__auto__ = (!((typeof document !== 'undefined')));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__72739 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__72740 = null;
var count__72741 = (0);
var i__72742 = (0);
while(true){
if((i__72742 < count__72741)){
var el = chunk__72740.cljs$core$IIndexed$_nth$arity$2(null,i__72742);
var handler_73278__$1 = ((function (seq__72739,chunk__72740,count__72741,i__72742,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72739,chunk__72740,count__72741,i__72742,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73278__$1);


var G__73279 = seq__72739;
var G__73280 = chunk__72740;
var G__73281 = count__72741;
var G__73282 = (i__72742 + (1));
seq__72739 = G__73279;
chunk__72740 = G__73280;
count__72741 = G__73281;
i__72742 = G__73282;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72739);
if(temp__5735__auto__){
var seq__72739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72739__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72739__$1);
var G__73283 = cljs.core.chunk_rest(seq__72739__$1);
var G__73284 = c__4556__auto__;
var G__73285 = cljs.core.count(c__4556__auto__);
var G__73286 = (0);
seq__72739 = G__73283;
chunk__72740 = G__73284;
count__72741 = G__73285;
i__72742 = G__73286;
continue;
} else {
var el = cljs.core.first(seq__72739__$1);
var handler_73288__$1 = ((function (seq__72739,chunk__72740,count__72741,i__72742,el,seq__72739__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__72739,chunk__72740,count__72741,i__72742,el,seq__72739__$1,temp__5735__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_73288__$1);


var G__73289 = cljs.core.next(seq__72739__$1);
var G__73290 = null;
var G__73291 = (0);
var G__73292 = (0);
seq__72739 = G__73289;
chunk__72740 = G__73290;
count__72741 = G__73291;
i__72742 = G__73292;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__72759 = arguments.length;
switch (G__72759) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__72767 = cljs.core.seq(events);
var chunk__72768 = null;
var count__72769 = (0);
var i__72770 = (0);
while(true){
if((i__72770 < count__72769)){
var vec__72781 = chunk__72768.cljs$core$IIndexed$_nth$arity$2(null,i__72770);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72781,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72781,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73301 = seq__72767;
var G__73302 = chunk__72768;
var G__73303 = count__72769;
var G__73304 = (i__72770 + (1));
seq__72767 = G__73301;
chunk__72768 = G__73302;
count__72769 = G__73303;
i__72770 = G__73304;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72767);
if(temp__5735__auto__){
var seq__72767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72767__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72767__$1);
var G__73306 = cljs.core.chunk_rest(seq__72767__$1);
var G__73307 = c__4556__auto__;
var G__73308 = cljs.core.count(c__4556__auto__);
var G__73309 = (0);
seq__72767 = G__73306;
chunk__72768 = G__73307;
count__72769 = G__73308;
i__72770 = G__73309;
continue;
} else {
var vec__72787 = cljs.core.first(seq__72767__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72787,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72787,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__73312 = cljs.core.next(seq__72767__$1);
var G__73313 = null;
var G__73314 = (0);
var G__73315 = (0);
seq__72767 = G__73312;
chunk__72768 = G__73313;
count__72769 = G__73314;
i__72770 = G__73315;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__72795 = cljs.core.seq(styles);
var chunk__72796 = null;
var count__72797 = (0);
var i__72798 = (0);
while(true){
if((i__72798 < count__72797)){
var vec__72809 = chunk__72796.cljs$core$IIndexed$_nth$arity$2(null,i__72798);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72809,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72809,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73317 = seq__72795;
var G__73318 = chunk__72796;
var G__73319 = count__72797;
var G__73320 = (i__72798 + (1));
seq__72795 = G__73317;
chunk__72796 = G__73318;
count__72797 = G__73319;
i__72798 = G__73320;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72795);
if(temp__5735__auto__){
var seq__72795__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72795__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72795__$1);
var G__73322 = cljs.core.chunk_rest(seq__72795__$1);
var G__73323 = c__4556__auto__;
var G__73324 = cljs.core.count(c__4556__auto__);
var G__73325 = (0);
seq__72795 = G__73322;
chunk__72796 = G__73323;
count__72797 = G__73324;
i__72798 = G__73325;
continue;
} else {
var vec__72812 = cljs.core.first(seq__72795__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72812,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72812,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__73327 = cljs.core.next(seq__72795__$1);
var G__73328 = null;
var G__73329 = (0);
var G__73330 = (0);
seq__72795 = G__73327;
chunk__72796 = G__73328;
count__72797 = G__73329;
i__72798 = G__73330;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__72816_73332 = key;
var G__72816_73333__$1 = (((G__72816_73332 instanceof cljs.core.Keyword))?G__72816_73332.fqn:null);
switch (G__72816_73333__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_73336 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4126__auto__ = goog.string.startsWith(ks_73336,"data-");
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return goog.string.startsWith(ks_73336,"aria-");
}
})())){
el.setAttribute(ks_73336,value);
} else {
(el[ks_73336] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__72833){
var map__72835 = p__72833;
var map__72835__$1 = (((((!((map__72835 == null))))?(((((map__72835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72835):map__72835);
var props = map__72835__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72835__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__72838 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72838,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72838,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72838,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__72841 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__72841,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__72841;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__72845 = arguments.length;
switch (G__72845) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__72852){
var vec__72854 = p__72852;
var seq__72855 = cljs.core.seq(vec__72854);
var first__72856 = cljs.core.first(seq__72855);
var seq__72855__$1 = cljs.core.next(seq__72855);
var nn = first__72856;
var first__72856__$1 = cljs.core.first(seq__72855__$1);
var seq__72855__$2 = cljs.core.next(seq__72855__$1);
var np = first__72856__$1;
var nc = seq__72855__$2;
var node = vec__72854;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72857 = nn;
var G__72858 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72857,G__72858) : create_fn.call(null,G__72857,G__72858));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__72859 = nn;
var G__72860 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__72859,G__72860) : create_fn.call(null,G__72859,G__72860));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__72862 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72862,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72862,(1),null);
var seq__72865_73354 = cljs.core.seq(node_children);
var chunk__72866_73355 = null;
var count__72867_73356 = (0);
var i__72868_73357 = (0);
while(true){
if((i__72868_73357 < count__72867_73356)){
var child_struct_73360 = chunk__72866_73355.cljs$core$IIndexed$_nth$arity$2(null,i__72868_73357);
var children_73362 = shadow.dom.dom_node(child_struct_73360);
if(cljs.core.seq_QMARK_(children_73362)){
var seq__72896_73363 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73362));
var chunk__72898_73364 = null;
var count__72899_73365 = (0);
var i__72900_73366 = (0);
while(true){
if((i__72900_73366 < count__72899_73365)){
var child_73368 = chunk__72898_73364.cljs$core$IIndexed$_nth$arity$2(null,i__72900_73366);
if(cljs.core.truth_(child_73368)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73368);


var G__73369 = seq__72896_73363;
var G__73370 = chunk__72898_73364;
var G__73371 = count__72899_73365;
var G__73372 = (i__72900_73366 + (1));
seq__72896_73363 = G__73369;
chunk__72898_73364 = G__73370;
count__72899_73365 = G__73371;
i__72900_73366 = G__73372;
continue;
} else {
var G__73375 = seq__72896_73363;
var G__73376 = chunk__72898_73364;
var G__73377 = count__72899_73365;
var G__73378 = (i__72900_73366 + (1));
seq__72896_73363 = G__73375;
chunk__72898_73364 = G__73376;
count__72899_73365 = G__73377;
i__72900_73366 = G__73378;
continue;
}
} else {
var temp__5735__auto___73379 = cljs.core.seq(seq__72896_73363);
if(temp__5735__auto___73379){
var seq__72896_73381__$1 = temp__5735__auto___73379;
if(cljs.core.chunked_seq_QMARK_(seq__72896_73381__$1)){
var c__4556__auto___73382 = cljs.core.chunk_first(seq__72896_73381__$1);
var G__73383 = cljs.core.chunk_rest(seq__72896_73381__$1);
var G__73384 = c__4556__auto___73382;
var G__73385 = cljs.core.count(c__4556__auto___73382);
var G__73386 = (0);
seq__72896_73363 = G__73383;
chunk__72898_73364 = G__73384;
count__72899_73365 = G__73385;
i__72900_73366 = G__73386;
continue;
} else {
var child_73387 = cljs.core.first(seq__72896_73381__$1);
if(cljs.core.truth_(child_73387)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73387);


var G__73388 = cljs.core.next(seq__72896_73381__$1);
var G__73389 = null;
var G__73390 = (0);
var G__73391 = (0);
seq__72896_73363 = G__73388;
chunk__72898_73364 = G__73389;
count__72899_73365 = G__73390;
i__72900_73366 = G__73391;
continue;
} else {
var G__73392 = cljs.core.next(seq__72896_73381__$1);
var G__73393 = null;
var G__73394 = (0);
var G__73395 = (0);
seq__72896_73363 = G__73392;
chunk__72898_73364 = G__73393;
count__72899_73365 = G__73394;
i__72900_73366 = G__73395;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73362);
}


var G__73396 = seq__72865_73354;
var G__73397 = chunk__72866_73355;
var G__73398 = count__72867_73356;
var G__73399 = (i__72868_73357 + (1));
seq__72865_73354 = G__73396;
chunk__72866_73355 = G__73397;
count__72867_73356 = G__73398;
i__72868_73357 = G__73399;
continue;
} else {
var temp__5735__auto___73401 = cljs.core.seq(seq__72865_73354);
if(temp__5735__auto___73401){
var seq__72865_73402__$1 = temp__5735__auto___73401;
if(cljs.core.chunked_seq_QMARK_(seq__72865_73402__$1)){
var c__4556__auto___73404 = cljs.core.chunk_first(seq__72865_73402__$1);
var G__73405 = cljs.core.chunk_rest(seq__72865_73402__$1);
var G__73406 = c__4556__auto___73404;
var G__73407 = cljs.core.count(c__4556__auto___73404);
var G__73408 = (0);
seq__72865_73354 = G__73405;
chunk__72866_73355 = G__73406;
count__72867_73356 = G__73407;
i__72868_73357 = G__73408;
continue;
} else {
var child_struct_73409 = cljs.core.first(seq__72865_73402__$1);
var children_73410 = shadow.dom.dom_node(child_struct_73409);
if(cljs.core.seq_QMARK_(children_73410)){
var seq__72909_73411 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_73410));
var chunk__72911_73412 = null;
var count__72912_73413 = (0);
var i__72913_73414 = (0);
while(true){
if((i__72913_73414 < count__72912_73413)){
var child_73415 = chunk__72911_73412.cljs$core$IIndexed$_nth$arity$2(null,i__72913_73414);
if(cljs.core.truth_(child_73415)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73415);


var G__73417 = seq__72909_73411;
var G__73418 = chunk__72911_73412;
var G__73419 = count__72912_73413;
var G__73420 = (i__72913_73414 + (1));
seq__72909_73411 = G__73417;
chunk__72911_73412 = G__73418;
count__72912_73413 = G__73419;
i__72913_73414 = G__73420;
continue;
} else {
var G__73421 = seq__72909_73411;
var G__73422 = chunk__72911_73412;
var G__73423 = count__72912_73413;
var G__73424 = (i__72913_73414 + (1));
seq__72909_73411 = G__73421;
chunk__72911_73412 = G__73422;
count__72912_73413 = G__73423;
i__72913_73414 = G__73424;
continue;
}
} else {
var temp__5735__auto___73426__$1 = cljs.core.seq(seq__72909_73411);
if(temp__5735__auto___73426__$1){
var seq__72909_73427__$1 = temp__5735__auto___73426__$1;
if(cljs.core.chunked_seq_QMARK_(seq__72909_73427__$1)){
var c__4556__auto___73428 = cljs.core.chunk_first(seq__72909_73427__$1);
var G__73429 = cljs.core.chunk_rest(seq__72909_73427__$1);
var G__73430 = c__4556__auto___73428;
var G__73431 = cljs.core.count(c__4556__auto___73428);
var G__73432 = (0);
seq__72909_73411 = G__73429;
chunk__72911_73412 = G__73430;
count__72912_73413 = G__73431;
i__72913_73414 = G__73432;
continue;
} else {
var child_73434 = cljs.core.first(seq__72909_73427__$1);
if(cljs.core.truth_(child_73434)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_73434);


var G__73435 = cljs.core.next(seq__72909_73427__$1);
var G__73436 = null;
var G__73437 = (0);
var G__73438 = (0);
seq__72909_73411 = G__73435;
chunk__72911_73412 = G__73436;
count__72912_73413 = G__73437;
i__72913_73414 = G__73438;
continue;
} else {
var G__73439 = cljs.core.next(seq__72909_73427__$1);
var G__73440 = null;
var G__73441 = (0);
var G__73442 = (0);
seq__72909_73411 = G__73439;
chunk__72911_73412 = G__73440;
count__72912_73413 = G__73441;
i__72913_73414 = G__73442;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_73410);
}


var G__73443 = cljs.core.next(seq__72865_73402__$1);
var G__73444 = null;
var G__73445 = (0);
var G__73446 = (0);
seq__72865_73354 = G__73443;
chunk__72866_73355 = G__73444;
count__72867_73356 = G__73445;
i__72868_73357 = G__73446;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__72920 = cljs.core.seq(node);
var chunk__72921 = null;
var count__72922 = (0);
var i__72923 = (0);
while(true){
if((i__72923 < count__72922)){
var n = chunk__72921.cljs$core$IIndexed$_nth$arity$2(null,i__72923);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73451 = seq__72920;
var G__73452 = chunk__72921;
var G__73453 = count__72922;
var G__73454 = (i__72923 + (1));
seq__72920 = G__73451;
chunk__72921 = G__73452;
count__72922 = G__73453;
i__72923 = G__73454;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72920);
if(temp__5735__auto__){
var seq__72920__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72920__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__72920__$1);
var G__73456 = cljs.core.chunk_rest(seq__72920__$1);
var G__73457 = c__4556__auto__;
var G__73458 = cljs.core.count(c__4556__auto__);
var G__73459 = (0);
seq__72920 = G__73456;
chunk__72921 = G__73457;
count__72922 = G__73458;
i__72923 = G__73459;
continue;
} else {
var n = cljs.core.first(seq__72920__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__73461 = cljs.core.next(seq__72920__$1);
var G__73462 = null;
var G__73463 = (0);
var G__73464 = (0);
seq__72920 = G__73461;
chunk__72921 = G__73462;
count__72922 = G__73463;
i__72923 = G__73464;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__72933 = arguments.length;
switch (G__72933) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__72939 = arguments.length;
switch (G__72939) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__72948 = arguments.length;
switch (G__72948) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4126__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73479 = arguments.length;
var i__4737__auto___73480 = (0);
while(true){
if((i__4737__auto___73480 < len__4736__auto___73479)){
args__4742__auto__.push((arguments[i__4737__auto___73480]));

var G__73482 = (i__4737__auto___73480 + (1));
i__4737__auto___73480 = G__73482;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__72964_73483 = cljs.core.seq(nodes);
var chunk__72965_73484 = null;
var count__72966_73485 = (0);
var i__72967_73486 = (0);
while(true){
if((i__72967_73486 < count__72966_73485)){
var node_73488 = chunk__72965_73484.cljs$core$IIndexed$_nth$arity$2(null,i__72967_73486);
fragment.appendChild(shadow.dom._to_dom(node_73488));


var G__73489 = seq__72964_73483;
var G__73490 = chunk__72965_73484;
var G__73491 = count__72966_73485;
var G__73492 = (i__72967_73486 + (1));
seq__72964_73483 = G__73489;
chunk__72965_73484 = G__73490;
count__72966_73485 = G__73491;
i__72967_73486 = G__73492;
continue;
} else {
var temp__5735__auto___73493 = cljs.core.seq(seq__72964_73483);
if(temp__5735__auto___73493){
var seq__72964_73495__$1 = temp__5735__auto___73493;
if(cljs.core.chunked_seq_QMARK_(seq__72964_73495__$1)){
var c__4556__auto___73496 = cljs.core.chunk_first(seq__72964_73495__$1);
var G__73497 = cljs.core.chunk_rest(seq__72964_73495__$1);
var G__73498 = c__4556__auto___73496;
var G__73499 = cljs.core.count(c__4556__auto___73496);
var G__73500 = (0);
seq__72964_73483 = G__73497;
chunk__72965_73484 = G__73498;
count__72966_73485 = G__73499;
i__72967_73486 = G__73500;
continue;
} else {
var node_73501 = cljs.core.first(seq__72964_73495__$1);
fragment.appendChild(shadow.dom._to_dom(node_73501));


var G__73503 = cljs.core.next(seq__72964_73495__$1);
var G__73504 = null;
var G__73505 = (0);
var G__73506 = (0);
seq__72964_73483 = G__73503;
chunk__72965_73484 = G__73504;
count__72966_73485 = G__73505;
i__72967_73486 = G__73506;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq72960){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq72960));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__72978_73510 = cljs.core.seq(scripts);
var chunk__72979_73511 = null;
var count__72980_73512 = (0);
var i__72981_73513 = (0);
while(true){
if((i__72981_73513 < count__72980_73512)){
var vec__72994_73514 = chunk__72979_73511.cljs$core$IIndexed$_nth$arity$2(null,i__72981_73513);
var script_tag_73515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72994_73514,(0),null);
var script_body_73516 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72994_73514,(1),null);
eval(script_body_73516);


var G__73518 = seq__72978_73510;
var G__73519 = chunk__72979_73511;
var G__73520 = count__72980_73512;
var G__73521 = (i__72981_73513 + (1));
seq__72978_73510 = G__73518;
chunk__72979_73511 = G__73519;
count__72980_73512 = G__73520;
i__72981_73513 = G__73521;
continue;
} else {
var temp__5735__auto___73523 = cljs.core.seq(seq__72978_73510);
if(temp__5735__auto___73523){
var seq__72978_73524__$1 = temp__5735__auto___73523;
if(cljs.core.chunked_seq_QMARK_(seq__72978_73524__$1)){
var c__4556__auto___73525 = cljs.core.chunk_first(seq__72978_73524__$1);
var G__73527 = cljs.core.chunk_rest(seq__72978_73524__$1);
var G__73528 = c__4556__auto___73525;
var G__73529 = cljs.core.count(c__4556__auto___73525);
var G__73530 = (0);
seq__72978_73510 = G__73527;
chunk__72979_73511 = G__73528;
count__72980_73512 = G__73529;
i__72981_73513 = G__73530;
continue;
} else {
var vec__72998_73532 = cljs.core.first(seq__72978_73524__$1);
var script_tag_73533 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72998_73532,(0),null);
var script_body_73534 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72998_73532,(1),null);
eval(script_body_73534);


var G__73535 = cljs.core.next(seq__72978_73524__$1);
var G__73536 = null;
var G__73537 = (0);
var G__73538 = (0);
seq__72978_73510 = G__73535;
chunk__72979_73511 = G__73536;
count__72980_73512 = G__73537;
i__72981_73513 = G__73538;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__73003){
var vec__73004 = p__73003;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73004,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73004,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__73013 = arguments.length;
switch (G__73013) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__73015 = cljs.core.seq(style_keys);
var chunk__73016 = null;
var count__73017 = (0);
var i__73018 = (0);
while(true){
if((i__73018 < count__73017)){
var it = chunk__73016.cljs$core$IIndexed$_nth$arity$2(null,i__73018);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73547 = seq__73015;
var G__73548 = chunk__73016;
var G__73549 = count__73017;
var G__73550 = (i__73018 + (1));
seq__73015 = G__73547;
chunk__73016 = G__73548;
count__73017 = G__73549;
i__73018 = G__73550;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__73015);
if(temp__5735__auto__){
var seq__73015__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73015__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__73015__$1);
var G__73551 = cljs.core.chunk_rest(seq__73015__$1);
var G__73552 = c__4556__auto__;
var G__73553 = cljs.core.count(c__4556__auto__);
var G__73554 = (0);
seq__73015 = G__73551;
chunk__73016 = G__73552;
count__73017 = G__73553;
i__73018 = G__73554;
continue;
} else {
var it = cljs.core.first(seq__73015__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__73557 = cljs.core.next(seq__73015__$1);
var G__73558 = null;
var G__73559 = (0);
var G__73560 = (0);
seq__73015 = G__73557;
chunk__73016 = G__73558;
count__73017 = G__73559;
i__73018 = G__73560;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k73022,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__73027 = k73022;
var G__73027__$1 = (((G__73027 instanceof cljs.core.Keyword))?G__73027.fqn:null);
switch (G__73027__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73022,else__4383__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__73028){
var vec__73029 = p__73028;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73029,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73029,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73021){
var self__ = this;
var G__73021__$1 = this;
return (new cljs.core.RecordIter((0),G__73021__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73023,other73024){
var self__ = this;
var this73023__$1 = this;
return (((!((other73024 == null)))) && ((this73023__$1.constructor === other73024.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73023__$1.x,other73024.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73023__$1.y,other73024.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73023__$1.__extmap,other73024.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__73021){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__73039 = cljs.core.keyword_identical_QMARK_;
var expr__73040 = k__4388__auto__;
if(cljs.core.truth_((pred__73039.cljs$core$IFn$_invoke$arity$2 ? pred__73039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__73040) : pred__73039.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__73040)))){
return (new shadow.dom.Coordinate(G__73021,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__73039.cljs$core$IFn$_invoke$arity$2 ? pred__73039.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__73040) : pred__73039.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__73040)))){
return (new shadow.dom.Coordinate(self__.x,G__73021,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__73021),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__73021){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__73021,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__73025){
var extmap__4419__auto__ = (function (){var G__73042 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73025,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__73025)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73042);
} else {
return G__73042;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__73025),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__73025),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4380__auto__,k__4381__auto__){
var self__ = this;
var this__4380__auto____$1 = this;
return this__4380__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4381__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4382__auto__,k73045,else__4383__auto__){
var self__ = this;
var this__4382__auto____$1 = this;
var G__73054 = k73045;
var G__73054__$1 = (((G__73054 instanceof cljs.core.Keyword))?G__73054.fqn:null);
switch (G__73054__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k73045,else__4383__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4399__auto__,f__4400__auto__,init__4401__auto__){
var self__ = this;
var this__4399__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4402__auto__,p__73060){
var vec__73062 = p__73060;
var k__4403__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73062,(0),null);
var v__4404__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73062,(1),null);
return (f__4400__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4400__auto__.cljs$core$IFn$_invoke$arity$3(ret__4402__auto__,k__4403__auto__,v__4404__auto__) : f__4400__auto__.call(null,ret__4402__auto__,k__4403__auto__,v__4404__auto__));
}),init__4401__auto__,this__4399__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4394__auto__,writer__4395__auto__,opts__4396__auto__){
var self__ = this;
var this__4394__auto____$1 = this;
var pr_pair__4397__auto__ = (function (keyval__4398__auto__){
return cljs.core.pr_sequential_writer(writer__4395__auto__,cljs.core.pr_writer,""," ","",opts__4396__auto__,keyval__4398__auto__);
});
return cljs.core.pr_sequential_writer(writer__4395__auto__,pr_pair__4397__auto__,"#shadow.dom.Size{",", ","}",opts__4396__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__73044){
var self__ = this;
var G__73044__$1 = this;
return (new cljs.core.RecordIter((0),G__73044__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4378__auto__){
var self__ = this;
var this__4378__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4375__auto__){
var self__ = this;
var this__4375__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4384__auto__){
var self__ = this;
var this__4384__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4376__auto__){
var self__ = this;
var this__4376__auto____$1 = this;
var h__4238__auto__ = self__.__hash;
if((!((h__4238__auto__ == null)))){
return h__4238__auto__;
} else {
var h__4238__auto____$1 = (function (coll__4377__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4377__auto__));
})(this__4376__auto____$1);
(self__.__hash = h__4238__auto____$1);

return h__4238__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this73046,other73047){
var self__ = this;
var this73046__$1 = this;
return (((!((other73047 == null)))) && ((this73046__$1.constructor === other73047.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73046__$1.w,other73047.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73046__$1.h,other73047.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this73046__$1.__extmap,other73047.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4389__auto__,k__4390__auto__){
var self__ = this;
var this__4389__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4390__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4389__auto____$1),self__.__meta),k__4390__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4390__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4387__auto__,k__4388__auto__,G__73044){
var self__ = this;
var this__4387__auto____$1 = this;
var pred__73078 = cljs.core.keyword_identical_QMARK_;
var expr__73079 = k__4388__auto__;
if(cljs.core.truth_((pred__73078.cljs$core$IFn$_invoke$arity$2 ? pred__73078.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__73079) : pred__73078.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__73079)))){
return (new shadow.dom.Size(G__73044,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__73078.cljs$core$IFn$_invoke$arity$2 ? pred__73078.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__73079) : pred__73078.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__73079)))){
return (new shadow.dom.Size(self__.w,G__73044,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4388__auto__,G__73044),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4392__auto__){
var self__ = this;
var this__4392__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4379__auto__,G__73044){
var self__ = this;
var this__4379__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__73044,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4385__auto__,entry__4386__auto__){
var self__ = this;
var this__4385__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4386__auto__)){
return this__4385__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__4386__auto__,(0)),cljs.core._nth(entry__4386__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4385__auto____$1,entry__4386__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4423__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4423__auto__,writer__4424__auto__){
return cljs.core._write(writer__4424__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__73050){
var extmap__4419__auto__ = (function (){var G__73092 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__73050,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__73050)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__73092);
} else {
return G__73092;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__73050),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__73050),null,cljs.core.not_empty(extmap__4419__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4610__auto__ = opts;
var l__4611__auto__ = a__4610__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4611__auto__)){
var G__73591 = (i + (1));
var G__73592 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__73591;
ret = G__73592;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__73108){
var vec__73109 = p__73108;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73109,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__73115 = arguments.length;
switch (G__73115) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__73594 = ps;
var G__73595 = (i + (1));
el__$1 = G__73594;
i = G__73595;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__73123 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73123,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73123,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73123,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__73128_73599 = cljs.core.seq(props);
var chunk__73129_73600 = null;
var count__73130_73601 = (0);
var i__73131_73602 = (0);
while(true){
if((i__73131_73602 < count__73130_73601)){
var vec__73146_73603 = chunk__73129_73600.cljs$core$IIndexed$_nth$arity$2(null,i__73131_73602);
var k_73604 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73146_73603,(0),null);
var v_73605 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73146_73603,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_73604);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73604),v_73605);


var G__73606 = seq__73128_73599;
var G__73607 = chunk__73129_73600;
var G__73608 = count__73130_73601;
var G__73609 = (i__73131_73602 + (1));
seq__73128_73599 = G__73606;
chunk__73129_73600 = G__73607;
count__73130_73601 = G__73608;
i__73131_73602 = G__73609;
continue;
} else {
var temp__5735__auto___73610 = cljs.core.seq(seq__73128_73599);
if(temp__5735__auto___73610){
var seq__73128_73611__$1 = temp__5735__auto___73610;
if(cljs.core.chunked_seq_QMARK_(seq__73128_73611__$1)){
var c__4556__auto___73612 = cljs.core.chunk_first(seq__73128_73611__$1);
var G__73613 = cljs.core.chunk_rest(seq__73128_73611__$1);
var G__73614 = c__4556__auto___73612;
var G__73615 = cljs.core.count(c__4556__auto___73612);
var G__73616 = (0);
seq__73128_73599 = G__73613;
chunk__73129_73600 = G__73614;
count__73130_73601 = G__73615;
i__73131_73602 = G__73616;
continue;
} else {
var vec__73153_73617 = cljs.core.first(seq__73128_73611__$1);
var k_73618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73153_73617,(0),null);
var v_73619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73153_73617,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_73618);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_73618),v_73619);


var G__73620 = cljs.core.next(seq__73128_73611__$1);
var G__73621 = null;
var G__73622 = (0);
var G__73623 = (0);
seq__73128_73599 = G__73620;
chunk__73129_73600 = G__73621;
count__73130_73601 = G__73622;
i__73131_73602 = G__73623;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__73161 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73161,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73161,(1),null);
var seq__73166_73624 = cljs.core.seq(node_children);
var chunk__73168_73625 = null;
var count__73169_73626 = (0);
var i__73170_73627 = (0);
while(true){
if((i__73170_73627 < count__73169_73626)){
var child_struct_73628 = chunk__73168_73625.cljs$core$IIndexed$_nth$arity$2(null,i__73170_73627);
if((!((child_struct_73628 == null)))){
if(typeof child_struct_73628 === 'string'){
var text_73629 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73629),child_struct_73628].join(''));
} else {
var children_73630 = shadow.dom.svg_node(child_struct_73628);
if(cljs.core.seq_QMARK_(children_73630)){
var seq__73197_73631 = cljs.core.seq(children_73630);
var chunk__73199_73632 = null;
var count__73200_73633 = (0);
var i__73201_73634 = (0);
while(true){
if((i__73201_73634 < count__73200_73633)){
var child_73635 = chunk__73199_73632.cljs$core$IIndexed$_nth$arity$2(null,i__73201_73634);
if(cljs.core.truth_(child_73635)){
node.appendChild(child_73635);


var G__73636 = seq__73197_73631;
var G__73637 = chunk__73199_73632;
var G__73638 = count__73200_73633;
var G__73639 = (i__73201_73634 + (1));
seq__73197_73631 = G__73636;
chunk__73199_73632 = G__73637;
count__73200_73633 = G__73638;
i__73201_73634 = G__73639;
continue;
} else {
var G__73640 = seq__73197_73631;
var G__73641 = chunk__73199_73632;
var G__73642 = count__73200_73633;
var G__73643 = (i__73201_73634 + (1));
seq__73197_73631 = G__73640;
chunk__73199_73632 = G__73641;
count__73200_73633 = G__73642;
i__73201_73634 = G__73643;
continue;
}
} else {
var temp__5735__auto___73644 = cljs.core.seq(seq__73197_73631);
if(temp__5735__auto___73644){
var seq__73197_73645__$1 = temp__5735__auto___73644;
if(cljs.core.chunked_seq_QMARK_(seq__73197_73645__$1)){
var c__4556__auto___73646 = cljs.core.chunk_first(seq__73197_73645__$1);
var G__73647 = cljs.core.chunk_rest(seq__73197_73645__$1);
var G__73648 = c__4556__auto___73646;
var G__73649 = cljs.core.count(c__4556__auto___73646);
var G__73650 = (0);
seq__73197_73631 = G__73647;
chunk__73199_73632 = G__73648;
count__73200_73633 = G__73649;
i__73201_73634 = G__73650;
continue;
} else {
var child_73651 = cljs.core.first(seq__73197_73645__$1);
if(cljs.core.truth_(child_73651)){
node.appendChild(child_73651);


var G__73652 = cljs.core.next(seq__73197_73645__$1);
var G__73653 = null;
var G__73654 = (0);
var G__73655 = (0);
seq__73197_73631 = G__73652;
chunk__73199_73632 = G__73653;
count__73200_73633 = G__73654;
i__73201_73634 = G__73655;
continue;
} else {
var G__73656 = cljs.core.next(seq__73197_73645__$1);
var G__73657 = null;
var G__73658 = (0);
var G__73659 = (0);
seq__73197_73631 = G__73656;
chunk__73199_73632 = G__73657;
count__73200_73633 = G__73658;
i__73201_73634 = G__73659;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73630);
}
}


var G__73660 = seq__73166_73624;
var G__73661 = chunk__73168_73625;
var G__73662 = count__73169_73626;
var G__73663 = (i__73170_73627 + (1));
seq__73166_73624 = G__73660;
chunk__73168_73625 = G__73661;
count__73169_73626 = G__73662;
i__73170_73627 = G__73663;
continue;
} else {
var G__73664 = seq__73166_73624;
var G__73665 = chunk__73168_73625;
var G__73666 = count__73169_73626;
var G__73667 = (i__73170_73627 + (1));
seq__73166_73624 = G__73664;
chunk__73168_73625 = G__73665;
count__73169_73626 = G__73666;
i__73170_73627 = G__73667;
continue;
}
} else {
var temp__5735__auto___73672 = cljs.core.seq(seq__73166_73624);
if(temp__5735__auto___73672){
var seq__73166_73673__$1 = temp__5735__auto___73672;
if(cljs.core.chunked_seq_QMARK_(seq__73166_73673__$1)){
var c__4556__auto___73674 = cljs.core.chunk_first(seq__73166_73673__$1);
var G__73675 = cljs.core.chunk_rest(seq__73166_73673__$1);
var G__73676 = c__4556__auto___73674;
var G__73677 = cljs.core.count(c__4556__auto___73674);
var G__73678 = (0);
seq__73166_73624 = G__73675;
chunk__73168_73625 = G__73676;
count__73169_73626 = G__73677;
i__73170_73627 = G__73678;
continue;
} else {
var child_struct_73679 = cljs.core.first(seq__73166_73673__$1);
if((!((child_struct_73679 == null)))){
if(typeof child_struct_73679 === 'string'){
var text_73680 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_73680),child_struct_73679].join(''));
} else {
var children_73681 = shadow.dom.svg_node(child_struct_73679);
if(cljs.core.seq_QMARK_(children_73681)){
var seq__73214_73682 = cljs.core.seq(children_73681);
var chunk__73216_73683 = null;
var count__73217_73684 = (0);
var i__73218_73685 = (0);
while(true){
if((i__73218_73685 < count__73217_73684)){
var child_73686 = chunk__73216_73683.cljs$core$IIndexed$_nth$arity$2(null,i__73218_73685);
if(cljs.core.truth_(child_73686)){
node.appendChild(child_73686);


var G__73687 = seq__73214_73682;
var G__73688 = chunk__73216_73683;
var G__73689 = count__73217_73684;
var G__73690 = (i__73218_73685 + (1));
seq__73214_73682 = G__73687;
chunk__73216_73683 = G__73688;
count__73217_73684 = G__73689;
i__73218_73685 = G__73690;
continue;
} else {
var G__73691 = seq__73214_73682;
var G__73692 = chunk__73216_73683;
var G__73693 = count__73217_73684;
var G__73694 = (i__73218_73685 + (1));
seq__73214_73682 = G__73691;
chunk__73216_73683 = G__73692;
count__73217_73684 = G__73693;
i__73218_73685 = G__73694;
continue;
}
} else {
var temp__5735__auto___73695__$1 = cljs.core.seq(seq__73214_73682);
if(temp__5735__auto___73695__$1){
var seq__73214_73696__$1 = temp__5735__auto___73695__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73214_73696__$1)){
var c__4556__auto___73697 = cljs.core.chunk_first(seq__73214_73696__$1);
var G__73698 = cljs.core.chunk_rest(seq__73214_73696__$1);
var G__73699 = c__4556__auto___73697;
var G__73700 = cljs.core.count(c__4556__auto___73697);
var G__73701 = (0);
seq__73214_73682 = G__73698;
chunk__73216_73683 = G__73699;
count__73217_73684 = G__73700;
i__73218_73685 = G__73701;
continue;
} else {
var child_73702 = cljs.core.first(seq__73214_73696__$1);
if(cljs.core.truth_(child_73702)){
node.appendChild(child_73702);


var G__73703 = cljs.core.next(seq__73214_73696__$1);
var G__73704 = null;
var G__73705 = (0);
var G__73706 = (0);
seq__73214_73682 = G__73703;
chunk__73216_73683 = G__73704;
count__73217_73684 = G__73705;
i__73218_73685 = G__73706;
continue;
} else {
var G__73707 = cljs.core.next(seq__73214_73696__$1);
var G__73708 = null;
var G__73709 = (0);
var G__73710 = (0);
seq__73214_73682 = G__73707;
chunk__73216_73683 = G__73708;
count__73217_73684 = G__73709;
i__73218_73685 = G__73710;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_73681);
}
}


var G__73711 = cljs.core.next(seq__73166_73673__$1);
var G__73712 = null;
var G__73713 = (0);
var G__73714 = (0);
seq__73166_73624 = G__73711;
chunk__73168_73625 = G__73712;
count__73169_73626 = G__73713;
i__73170_73627 = G__73714;
continue;
} else {
var G__73715 = cljs.core.next(seq__73166_73673__$1);
var G__73716 = null;
var G__73717 = (0);
var G__73718 = (0);
seq__73166_73624 = G__73715;
chunk__73168_73625 = G__73716;
count__73169_73626 = G__73717;
i__73170_73627 = G__73718;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

goog.object.set(shadow.dom._to_svg,"string",(function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

goog.object.set(shadow.dom._to_svg,"null",(function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73719 = arguments.length;
var i__4737__auto___73720 = (0);
while(true){
if((i__4737__auto___73720 < len__4736__auto___73719)){
args__4742__auto__.push((arguments[i__4737__auto___73720]));

var G__73721 = (i__4737__auto___73720 + (1));
i__4737__auto___73720 = G__73721;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq73227){
var G__73228 = cljs.core.first(seq73227);
var seq73227__$1 = cljs.core.next(seq73227);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__73228,seq73227__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__73236 = arguments.length;
switch (G__73236) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__4115__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4115__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4115__auto__;
}
})())){
var c__71151__auto___73727 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_73247){
var state_val_73248 = (state_73247[(1)]);
if((state_val_73248 === (1))){
var state_73247__$1 = state_73247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_73247__$1,(2),once_or_cleanup);
} else {
if((state_val_73248 === (2))){
var inst_73244 = (state_73247[(2)]);
var inst_73245 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_73247__$1 = (function (){var statearr_73251 = state_73247;
(statearr_73251[(7)] = inst_73244);

return statearr_73251;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_73247__$1,inst_73245);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__71032__auto__ = null;
var shadow$dom$state_machine__71032__auto____0 = (function (){
var statearr_73252 = [null,null,null,null,null,null,null,null];
(statearr_73252[(0)] = shadow$dom$state_machine__71032__auto__);

(statearr_73252[(1)] = (1));

return statearr_73252;
});
var shadow$dom$state_machine__71032__auto____1 = (function (state_73247){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_73247);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e73254){if((e73254 instanceof Object)){
var ex__71035__auto__ = e73254;
var statearr_73255_73728 = state_73247;
(statearr_73255_73728[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_73247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e73254;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73729 = state_73247;
state_73247 = G__73729;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
shadow$dom$state_machine__71032__auto__ = function(state_73247){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__71032__auto____0.call(this);
case 1:
return shadow$dom$state_machine__71032__auto____1.call(this,state_73247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__71032__auto____0;
shadow$dom$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__71032__auto____1;
return shadow$dom$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_73257 = f__71152__auto__();
(statearr_73257[(6)] = c__71151__auto___73727);

return statearr_73257;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
