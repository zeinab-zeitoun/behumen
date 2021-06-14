goog.provide('re_frame.fx');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed, other than that
 *   `:db` is guaranteed to be executed first.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__77430 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__77431 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__77431);

try{try{var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___77539 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___77539)){
var new_db_77540 = temp__5735__auto___77539;
var fexpr__77433_77541 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__77433_77541.cljs$core$IFn$_invoke$arity$1 ? fexpr__77433_77541.cljs$core$IFn$_invoke$arity$1(new_db_77540) : fexpr__77433_77541.call(null,new_db_77540));
} else {
}

var seq__77438 = cljs.core.seq(effects_without_db);
var chunk__77439 = null;
var count__77440 = (0);
var i__77441 = (0);
while(true){
if((i__77441 < count__77440)){
var vec__77451 = chunk__77439.cljs$core$IIndexed$_nth$arity$2(null,i__77441);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77451,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77451,(1),null);
var temp__5733__auto___77543 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77543)){
var effect_fn_77544 = temp__5733__auto___77543;
(effect_fn_77544.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77544.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77544.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77545 = seq__77438;
var G__77546 = chunk__77439;
var G__77547 = count__77440;
var G__77548 = (i__77441 + (1));
seq__77438 = G__77545;
chunk__77439 = G__77546;
count__77440 = G__77547;
i__77441 = G__77548;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77438);
if(temp__5735__auto__){
var seq__77438__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77438__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77438__$1);
var G__77549 = cljs.core.chunk_rest(seq__77438__$1);
var G__77550 = c__4556__auto__;
var G__77551 = cljs.core.count(c__4556__auto__);
var G__77552 = (0);
seq__77438 = G__77549;
chunk__77439 = G__77550;
count__77440 = G__77551;
i__77441 = G__77552;
continue;
} else {
var vec__77454 = cljs.core.first(seq__77438__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77454,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77454,(1),null);
var temp__5733__auto___77553 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77553)){
var effect_fn_77554 = temp__5733__auto___77553;
(effect_fn_77554.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77554.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77554.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77555 = cljs.core.next(seq__77438__$1);
var G__77556 = null;
var G__77557 = (0);
var G__77558 = (0);
seq__77438 = G__77555;
chunk__77439 = G__77556;
count__77440 = G__77557;
i__77441 = G__77558;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__77158__auto___77559 = re_frame.interop.now();
var duration__77159__auto___77560 = (end__77158__auto___77559 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__77159__auto___77560,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__77158__auto___77559);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__77430);
}} else {
var effects = new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context);
var effects_without_db = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(effects,new cljs.core.Keyword(null,"db","db",993250759));
var temp__5735__auto___77561 = new cljs.core.Keyword(null,"db","db",993250759).cljs$core$IFn$_invoke$arity$1(effects);
if(cljs.core.truth_(temp__5735__auto___77561)){
var new_db_77562 = temp__5735__auto___77561;
var fexpr__77458_77563 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,new cljs.core.Keyword(null,"db","db",993250759),false);
(fexpr__77458_77563.cljs$core$IFn$_invoke$arity$1 ? fexpr__77458_77563.cljs$core$IFn$_invoke$arity$1(new_db_77562) : fexpr__77458_77563.call(null,new_db_77562));
} else {
}

var seq__77460 = cljs.core.seq(effects_without_db);
var chunk__77461 = null;
var count__77462 = (0);
var i__77463 = (0);
while(true){
if((i__77463 < count__77462)){
var vec__77473 = chunk__77461.cljs$core$IIndexed$_nth$arity$2(null,i__77463);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77473,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77473,(1),null);
var temp__5733__auto___77564 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77564)){
var effect_fn_77565 = temp__5733__auto___77564;
(effect_fn_77565.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77565.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77565.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77566 = seq__77460;
var G__77567 = chunk__77461;
var G__77568 = count__77462;
var G__77569 = (i__77463 + (1));
seq__77460 = G__77566;
chunk__77461 = G__77567;
count__77462 = G__77568;
i__77463 = G__77569;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77460);
if(temp__5735__auto__){
var seq__77460__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77460__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77460__$1);
var G__77570 = cljs.core.chunk_rest(seq__77460__$1);
var G__77571 = c__4556__auto__;
var G__77572 = cljs.core.count(c__4556__auto__);
var G__77573 = (0);
seq__77460 = G__77570;
chunk__77461 = G__77571;
count__77462 = G__77572;
i__77463 = G__77573;
continue;
} else {
var vec__77476 = cljs.core.first(seq__77460__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77476,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77476,(1),null);
var temp__5733__auto___77574 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77574)){
var effect_fn_77575 = temp__5733__auto___77574;
(effect_fn_77575.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77575.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77575.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77576 = cljs.core.next(seq__77460__$1);
var G__77577 = null;
var G__77578 = (0);
var G__77579 = (0);
seq__77460 = G__77576;
chunk__77461 = G__77577;
count__77462 = G__77578;
i__77463 = G__77579;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
re_frame.fx.dispatch_later = (function re_frame$fx$dispatch_later(p__77479){
var map__77480 = p__77479;
var map__77480__$1 = (((((!((map__77480 == null))))?(((((map__77480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77480.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77480):map__77480);
var effect = map__77480__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77480__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77480__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
return re_frame.interop.set_timeout_BANG_((function (){
return re_frame.router.dispatch(dispatch);
}),ms);
}
});
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
if(cljs.core.map_QMARK_(value)){
return re_frame.fx.dispatch_later(value);
} else {
var seq__77497 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77498 = null;
var count__77499 = (0);
var i__77500 = (0);
while(true){
if((i__77500 < count__77499)){
var effect = chunk__77498.cljs$core$IIndexed$_nth$arity$2(null,i__77500);
re_frame.fx.dispatch_later(effect);


var G__77585 = seq__77497;
var G__77586 = chunk__77498;
var G__77587 = count__77499;
var G__77588 = (i__77500 + (1));
seq__77497 = G__77585;
chunk__77498 = G__77586;
count__77499 = G__77587;
i__77500 = G__77588;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77497);
if(temp__5735__auto__){
var seq__77497__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77497__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77497__$1);
var G__77589 = cljs.core.chunk_rest(seq__77497__$1);
var G__77590 = c__4556__auto__;
var G__77591 = cljs.core.count(c__4556__auto__);
var G__77592 = (0);
seq__77497 = G__77589;
chunk__77498 = G__77590;
count__77499 = G__77591;
i__77500 = G__77592;
continue;
} else {
var effect = cljs.core.first(seq__77497__$1);
re_frame.fx.dispatch_later(effect);


var G__77593 = cljs.core.next(seq__77497__$1);
var G__77594 = null;
var G__77595 = (0);
var G__77596 = (0);
seq__77497 = G__77593;
chunk__77498 = G__77594;
count__77499 = G__77595;
i__77500 = G__77596;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"fx","fx",-1237829572),(function (seq_of_effects){
if((!(cljs.core.sequential_QMARK_(seq_of_effects)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect expects a seq, but was given ",cljs.core.type(seq_of_effects)], 0));
} else {
var seq__77501 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,seq_of_effects));
var chunk__77502 = null;
var count__77503 = (0);
var i__77504 = (0);
while(true){
if((i__77504 < count__77503)){
var vec__77511 = chunk__77502.cljs$core$IIndexed$_nth$arity$2(null,i__77504);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77511,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77511,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___77597 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77597)){
var effect_fn_77598 = temp__5733__auto___77597;
(effect_fn_77598.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77598.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77598.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__77599 = seq__77501;
var G__77600 = chunk__77502;
var G__77601 = count__77503;
var G__77602 = (i__77504 + (1));
seq__77501 = G__77599;
chunk__77502 = G__77600;
count__77503 = G__77601;
i__77504 = G__77602;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77501);
if(temp__5735__auto__){
var seq__77501__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77501__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77501__$1);
var G__77604 = cljs.core.chunk_rest(seq__77501__$1);
var G__77605 = c__4556__auto__;
var G__77606 = cljs.core.count(c__4556__auto__);
var G__77607 = (0);
seq__77501 = G__77604;
chunk__77502 = G__77605;
count__77503 = G__77606;
i__77504 = G__77607;
continue;
} else {
var vec__77514 = cljs.core.first(seq__77501__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77514,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77514,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"db","db",993250759),effect_key)){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: \":fx\" effect should not contain a :db effect"], 0));
} else {
}

var temp__5733__auto___77608 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77608)){
var effect_fn_77609 = temp__5733__auto___77608;
(effect_fn_77609.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77609.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77609.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: in \":fx\" effect found ",effect_key," which has no associated handler. Ignoring."], 0));
}


var G__77610 = cljs.core.next(seq__77501__$1);
var G__77611 = null;
var G__77612 = (0);
var G__77613 = (0);
seq__77501 = G__77610;
chunk__77502 = G__77611;
count__77503 = G__77612;
i__77504 = G__77613;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__77519 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77520 = null;
var count__77521 = (0);
var i__77522 = (0);
while(true){
if((i__77522 < count__77521)){
var event = chunk__77520.cljs$core$IIndexed$_nth$arity$2(null,i__77522);
re_frame.router.dispatch(event);


var G__77614 = seq__77519;
var G__77615 = chunk__77520;
var G__77616 = count__77521;
var G__77617 = (i__77522 + (1));
seq__77519 = G__77614;
chunk__77520 = G__77615;
count__77521 = G__77616;
i__77522 = G__77617;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77519);
if(temp__5735__auto__){
var seq__77519__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77519__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77519__$1);
var G__77622 = cljs.core.chunk_rest(seq__77519__$1);
var G__77623 = c__4556__auto__;
var G__77624 = cljs.core.count(c__4556__auto__);
var G__77625 = (0);
seq__77519 = G__77622;
chunk__77520 = G__77623;
count__77521 = G__77624;
i__77522 = G__77625;
continue;
} else {
var event = cljs.core.first(seq__77519__$1);
re_frame.router.dispatch(event);


var G__77626 = cljs.core.next(seq__77519__$1);
var G__77627 = null;
var G__77628 = (0);
var G__77629 = (0);
seq__77519 = G__77626;
chunk__77520 = G__77627;
count__77521 = G__77628;
i__77522 = G__77629;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__77527 = cljs.core.seq(value);
var chunk__77528 = null;
var count__77529 = (0);
var i__77530 = (0);
while(true){
if((i__77530 < count__77529)){
var event = chunk__77528.cljs$core$IIndexed$_nth$arity$2(null,i__77530);
clear_event(event);


var G__77635 = seq__77527;
var G__77636 = chunk__77528;
var G__77637 = count__77529;
var G__77638 = (i__77530 + (1));
seq__77527 = G__77635;
chunk__77528 = G__77636;
count__77529 = G__77637;
i__77530 = G__77638;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77527);
if(temp__5735__auto__){
var seq__77527__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77527__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__77527__$1);
var G__77639 = cljs.core.chunk_rest(seq__77527__$1);
var G__77640 = c__4556__auto__;
var G__77641 = cljs.core.count(c__4556__auto__);
var G__77642 = (0);
seq__77527 = G__77639;
chunk__77528 = G__77640;
count__77529 = G__77641;
i__77530 = G__77642;
continue;
} else {
var event = cljs.core.first(seq__77527__$1);
clear_event(event);


var G__77643 = cljs.core.next(seq__77527__$1);
var G__77644 = null;
var G__77645 = (0);
var G__77646 = (0);
seq__77527 = G__77643;
chunk__77528 = G__77644;
count__77529 = G__77645;
i__77530 = G__77646;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
