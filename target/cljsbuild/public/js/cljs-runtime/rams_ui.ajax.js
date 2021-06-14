goog.provide('rams_ui.ajax');
rams_ui.ajax.ajax_loader = (function rams_ui$ajax$ajax_loader(p__80344){
var map__80345 = p__80344;
var map__80345__$1 = (((((!((map__80345 == null))))?(((((map__80345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80345):map__80345);
var config = map__80345__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80345__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var uuid = (cljs.core.truth_(id)?id:new cljs.core.Keyword(null,"rams-ui|-|loader","rams-ui|-|loader",583049540));
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
if(cljs.core.truth_(cljs.core.deref(state))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bar","bar",-1386246584)))?reagent_material_ui.core.linear_progress.linear_progress:reagent_material_ui.core.circular_progress.circular_progress),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092)], 0))], null);
} else {
return null;
}
});
var ajax_call_count_80362 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var loader_count_80363 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
var repeating_requests_80364 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var config_80365 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"success","success",1890645906),"success",new cljs.core.Keyword(null,"error","error",-978969032),"error",new cljs.core.Keyword(null,"warning","warning",-1685650671),"error",new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755)], null));
/**
 * a helper function to configure the ajax call. It takes the following keys:
 * 
 *  - **key**: is one of the following keywords:
 *    - **:success**: identifies the string value of the key :success in an api request which identifies if a request if successful or not. Default is "success"
 *    - **:error**: identifies the string value of the key :success in an api request which identifies if a request if error or not. Default is "error"
 *    - **:warning**: identifies the string value of the key :success in an api request which identifies if a request if warning or not. Default is "warning"
 *    - **:method**: keyword that identifies the default REST method to use and can be either :get | :post | :put. Default is :get
 */
rams_ui.ajax.set_config = (function rams_ui$ajax$set_config(key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(config_80365,(function (p1__80347_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80347_SHARP_,key,value);
}));
});

rams_ui.ajax.make_call = (function rams_ui$ajax$make_call(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80366 = arguments.length;
var i__4737__auto___80367 = (0);
while(true){
if((i__4737__auto___80367 < len__4736__auto___80366)){
args__4742__auto__.push((arguments[i__4737__auto___80367]));

var G__80368 = (i__4737__auto___80367 + (1));
i__4737__auto___80367 = G__80368;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return rams_ui.ajax.make_call.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(rams_ui.ajax.make_call.cljs$core$IFn$_invoke$arity$variadic = (function (p__80351){
var map__80352 = p__80351;
var map__80352__$1 = (((((!((map__80352 == null))))?(((((map__80352.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80352.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80352):map__80352);
var loader_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"loader-id","loader-id",-48712132));
var no_repeat_response_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"no-repeat-response-fn","no-repeat-response-fn",704410912));
var show_loader_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"show-loader?","show-loader?",-983209852));
var on_warning_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"on-warning-fn","on-warning-fn",589199013));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80352__$1,new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(config_80365)));
var handle_message_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"handle-message-fn","handle-message-fn",550382696));
var on_error_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"on-error-fn","on-error-fn",1483090889));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"params","params",710516235));
var on_finally_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"on-finally-fn","on-finally-fn",1004030418));
var required_message_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"required-message-fn","required-message-fn",-1758577165));
var on_success_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"on-success-fn","on-success-fn",1096122323));
var call_key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"call-key","call-key",-1987175146));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80352__$1,new cljs.core.Keyword(null,"url","url",276297046));
var id = (cljs.core.truth_(loader_id)?loader_id:new cljs.core.Keyword(null,"rams-ui|-|loader","rams-ui|-|loader",583049540));
if((((!(cljs.core.contains_QMARK_(cljs.core.deref(repeating_requests_80364),call_key)))) || (cljs.core.not(no_repeat_response_fn)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(repeating_requests_80364,(function (p1__80348_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__80348_SHARP_,call_key,true);
}));

if(cljs.core.truth_(show_loader_QMARK_)){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loader_count_80363,cljs.core.inc);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax_call_count_80362,cljs.core.inc);

var G__80356 = url;
var G__80357 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"headers","headers",-835030129),new cljs.core.PersistentArrayMap(null, 1, ["Accept","application/transit+json"], null),new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p__80358){
var map__80359 = p__80358;
var map__80359__$1 = (((((!((map__80359 == null))))?(((((map__80359.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80359.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80359):map__80359);
var result = map__80359__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80359__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80359__$1,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_((function (){var and__4115__auto__ = status;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = message;
if(cljs.core.truth_(and__4115__auto____$1)){
return cljs.core.fn_QMARK_(handle_message_fn);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
})())){
(handle_message_fn.cljs$core$IFn$_invoke$arity$1 ? handle_message_fn.cljs$core$IFn$_invoke$arity$1(result) : handle_message_fn.call(null,result));
} else {
}

if((((status == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"success","success",1890645906).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(config_80365)))))){
if(cljs.core.fn_QMARK_(on_success_fn)){
(on_success_fn.cljs$core$IFn$_invoke$arity$1 ? on_success_fn.cljs$core$IFn$_invoke$arity$1(result) : on_success_fn.call(null,result));
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"warning","warning",-1685650671).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(config_80365)))){
if(cljs.core.fn_QMARK_(on_warning_fn)){
(on_warning_fn.cljs$core$IFn$_invoke$arity$1 ? on_warning_fn.cljs$core$IFn$_invoke$arity$1(result) : on_warning_fn.call(null,result));
} else {
if(cljs.core.fn_QMARK_(on_success_fn)){
(on_success_fn.cljs$core$IFn$_invoke$arity$1 ? on_success_fn.cljs$core$IFn$_invoke$arity$1(result) : on_success_fn.call(null,result));
} else {
}
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(config_80365)))){
if(cljs.core.fn_QMARK_(on_error_fn)){
return (on_error_fn.cljs$core$IFn$_invoke$arity$1 ? on_error_fn.cljs$core$IFn$_invoke$arity$1(result) : on_error_fn.call(null,result));
} else {
if((((message == null)) && (cljs.core.fn_QMARK_(required_message_fn)))){
return (required_message_fn.cljs$core$IFn$_invoke$arity$1 ? required_message_fn.cljs$core$IFn$_invoke$arity$1(result) : required_message_fn.call(null,result));
} else {
return null;
}
}
} else {
return null;
}
}),new cljs.core.Keyword(null,"finally","finally",1589088705),(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(ajax_call_count_80362,cljs.core.dec);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(loader_count_80363,cljs.core.dec);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(loader_count_80363),(0))){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(repeating_requests_80364,(function (p1__80349_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__80349_SHARP_,call_key);
}));

if(cljs.core.fn_QMARK_(on_finally_fn)){
return (on_finally_fn.cljs$core$IFn$_invoke$arity$0 ? on_finally_fn.cljs$core$IFn$_invoke$arity$0() : on_finally_fn.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"error-handler","error-handler",-484945776),(function (result){
if(cljs.core.fn_QMARK_(on_error_fn)){
return (on_error_fn.cljs$core$IFn$_invoke$arity$1 ? on_error_fn.cljs$core$IFn$_invoke$arity$1(result) : on_error_fn.call(null,result));
} else {
return null;
}
})], null);
var fexpr__80355 = (function (){var G__80361 = method;
var G__80361__$1 = (((G__80361 instanceof cljs.core.Keyword))?G__80361.fqn:null);
switch (G__80361__$1) {
case "post":
return ajax.core.POST;

break;
case "put":
return ajax.core.PUT;

break;
default:
return ajax.core.GET;

}
})();
return (fexpr__80355.cljs$core$IFn$_invoke$arity$2 ? fexpr__80355.cljs$core$IFn$_invoke$arity$2(G__80356,G__80357) : fexpr__80355.call(null,G__80356,G__80357));
} else {
if(cljs.core.fn_QMARK_(no_repeat_response_fn)){
return (no_repeat_response_fn.cljs$core$IFn$_invoke$arity$0 ? no_repeat_response_fn.cljs$core$IFn$_invoke$arity$0() : no_repeat_response_fn.call(null));
} else {
return null;
}
}
}));

(rams_ui.ajax.make_call.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rams_ui.ajax.make_call.cljs$lang$applyTo = (function (seq80350){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80350));
}));


//# sourceMappingURL=rams_ui.ajax.js.map
