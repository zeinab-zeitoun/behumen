goog.provide('behumen.ajax');
behumen.ajax.local_uri_QMARK_ = (function behumen$ajax$local_uri_QMARK_(p__66341){
var map__66342 = p__66341;
var map__66342__$1 = (((((!((map__66342 == null))))?(((((map__66342.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66342.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66342):map__66342);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66342__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
return cljs.core.not(cljs.core.re_find(/^\w+?:\/\//,uri));
});
behumen.ajax.default_headers = (function behumen$ajax$default_headers(request){
if(behumen.ajax.local_uri_QMARK_(request)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__66346_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["x-csrf-token",csrfToken], null),p1__66346_SHARP_], 0));
}));
} else {
return request;
}
});
behumen.ajax.as_transit = (function behumen$ajax$as_transit(opts){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"raw","raw",1604651272),false,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"response-format","response-format",1664465322),new cljs.core.Keyword(null,"transit","transit",359458387),new cljs.core.Keyword(null,"reader","reader",169660853),cognitect.transit.reader.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_deserialization_handlers),new cljs.core.Keyword(null,"writer","writer",-277568236),cognitect.transit.writer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"json","json",1279968570),luminus_transit.time.time_serialization_handlers)], null),opts], 0));
});
behumen.ajax.load_interceptors_BANG_ = (function behumen$ajax$load_interceptors_BANG_(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(ajax.core.default_interceptors,cljs.core.conj,(function (){var G__66349 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"default headers",new cljs.core.Keyword(null,"request","request",1772954723),behumen.ajax.default_headers], null);
return (ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1 ? ajax.core.to_interceptor.cljs$core$IFn$_invoke$arity$1(G__66349) : ajax.core.to_interceptor.call(null,G__66349));
})());
});
rams_ui.ajax.set_config(new cljs.core.Keyword(null,"success","success",1890645906),behumen.common._PLUS_success_PLUS_);
rams_ui.ajax.set_config(new cljs.core.Keyword(null,"error","error",-978969032),behumen.common._PLUS_error_PLUS_);
rams_ui.ajax.set_config(new cljs.core.Keyword(null,"warning","warning",-1685650671),behumen.common._PLUS_warning_PLUS_);
behumen.ajax.ajax = (function behumen$ajax$ajax(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66390 = arguments.length;
var i__4737__auto___66391 = (0);
while(true){
if((i__4737__auto___66391 < len__4736__auto___66390)){
args__4742__auto__.push((arguments[i__4737__auto___66391]));

var G__66392 = (i__4737__auto___66391 + (1));
i__4737__auto___66391 = G__66392;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return behumen.ajax.ajax.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(behumen.ajax.ajax.cljs$core$IFn$_invoke$arity$variadic = (function (p__66354){
var map__66355 = p__66354;
var map__66355__$1 = (((((!((map__66355 == null))))?(((((map__66355.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66355.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66355):map__66355);
var hide_loader_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"hide-loader?","hide-loader?",1151564570));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var finally$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"finally","finally",1589088705));
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"db","db",993250759));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66355__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"params","params",710516235));
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"event","event",301435442));
var allow_repeat_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66355__$1,new cljs.core.Keyword(null,"allow-repeat?","allow-repeat?",396041491),false);
var on_warning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"on-warning","on-warning",-1267276170));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66355__$1,new cljs.core.Keyword(null,"url","url",276297046));
var user = new cljs.core.Keyword(null,"user","user",1532431356).cljs$core$IFn$_invoke$arity$1(db);
rams_ui.ajax.make_call.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"call-key","call-key",-1987175146),event,new cljs.core.Keyword(null,"method","method",55703592),method,new cljs.core.Keyword(null,"params","params",710516235),(cljs.core.truth_(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(user))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"jstoken","jstoken",-991118673),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(user)):params),new cljs.core.Keyword(null,"show-loader?","show-loader?",-983209852),cljs.core.not(hide_loader_QMARK_),new cljs.core.Keyword(null,"on-success-fn","on-success-fn",1096122323),on_success,new cljs.core.Keyword(null,"on-error-fn","on-error-fn",1483090889),on_error,new cljs.core.Keyword(null,"on-warning-fn","on-warning-fn",589199013),on_warning,new cljs.core.Keyword(null,"on-finally-fn","on-finally-fn",1004030418),finally$,new cljs.core.Keyword(null,"handle-message-fn","handle-message-fn",550382696),(function (p1__66350_SHARP_){
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__66350_SHARP_),new cljs.core.Keyword(null,"show-close?","show-close?",1373161976),true], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__66350_SHARP_));
}),new cljs.core.Keyword(null,"required-message-fn","required-message-fn",-1758577165),(function (result){
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"show-close?","show-close?",1373161976),true], null),[clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.drop_last.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66351_SHARP_){
return p1__66351_SHARP_.replace(" must be present",", ");
}),(function (){var iter__4529__auto__ = (function behumen$ajax$iter__66377(s__66378){
return (new cljs.core.LazySeq(null,(function (){
var s__66378__$1 = s__66378;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66378__$1);
if(temp__5735__auto__){
var s__66378__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66378__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66378__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66380 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66379 = (0);
while(true){
if((i__66379 < size__4528__auto__)){
var vec__66381 = cljs.core._nth(c__4527__auto__,i__66379);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66381,(0),null);
var issue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66381,(1),null);
cljs.core.chunk_append(b__66380,cljs.core.first(issue));

var G__66397 = (i__66379 + (1));
i__66379 = G__66397;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66380),behumen$ajax$iter__66377(cljs.core.chunk_rest(s__66378__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66380),null);
}
} else {
var vec__66384 = cljs.core.first(s__66378__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66384,(0),null);
var issue = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66384,(1),null);
return cljs.core.cons(cljs.core.first(issue),behumen$ajax$iter__66377(cljs.core.rest(s__66378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"issues","issues",1989874693).cljs$core$IFn$_invoke$arity$1(result));
})())))))," field(s) must be present"].join(''));
}),new cljs.core.Keyword(null,"no-repeat-response-fn","no-repeat-response-fn",704410912),(cljs.core.truth_(allow_repeat_QMARK_)?(function (){
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"warning",new cljs.core.Keyword(null,"show-close?","show-close?",1373161976),true], null),"Already processing this request, give us a moment");
}):null)], 0));

return db;
}));

(behumen.ajax.ajax.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(behumen.ajax.ajax.cljs$lang$applyTo = (function (seq66352){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq66352));
}));


//# sourceMappingURL=behumen.ajax.js.map
