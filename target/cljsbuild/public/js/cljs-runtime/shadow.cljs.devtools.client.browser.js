goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4742__auto__ = [];
var len__4736__auto___76374 = arguments.length;
var i__4737__auto___76375 = (0);
while(true){
if((i__4737__auto___76375 < len__4736__auto___76374)){
args__4742__auto__.push((arguments[i__4737__auto___76375]));

var G__76376 = (i__4737__auto___76375 + (1));
i__4737__auto___76375 = G__76376;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq76195){
var G__76196 = cljs.core.first(seq76195);
var seq76195__$1 = cljs.core.next(seq76195);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__76196,seq76195__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__76201 = cljs.core.seq(sources);
var chunk__76202 = null;
var count__76203 = (0);
var i__76204 = (0);
while(true){
if((i__76204 < count__76203)){
var map__76219 = chunk__76202.cljs$core$IIndexed$_nth$arity$2(null,i__76204);
var map__76219__$1 = (((((!((map__76219 == null))))?(((((map__76219.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76219.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76219):map__76219);
var src = map__76219__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76219__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76219__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76219__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76219__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e76221){var e_76382 = e76221;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_76382);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_76382.message)].join('')));
}

var G__76383 = seq__76201;
var G__76384 = chunk__76202;
var G__76385 = count__76203;
var G__76386 = (i__76204 + (1));
seq__76201 = G__76383;
chunk__76202 = G__76384;
count__76203 = G__76385;
i__76204 = G__76386;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76201);
if(temp__5735__auto__){
var seq__76201__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76201__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76201__$1);
var G__76387 = cljs.core.chunk_rest(seq__76201__$1);
var G__76388 = c__4556__auto__;
var G__76389 = cljs.core.count(c__4556__auto__);
var G__76390 = (0);
seq__76201 = G__76387;
chunk__76202 = G__76388;
count__76203 = G__76389;
i__76204 = G__76390;
continue;
} else {
var map__76224 = cljs.core.first(seq__76201__$1);
var map__76224__$1 = (((((!((map__76224 == null))))?(((((map__76224.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76224.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76224):map__76224);
var src = map__76224__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76224__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76224__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76224__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76224__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e76226){var e_76391 = e76226;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_76391);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_76391.message)].join('')));
}

var G__76392 = cljs.core.next(seq__76201__$1);
var G__76393 = null;
var G__76394 = (0);
var G__76395 = (0);
seq__76201 = G__76392;
chunk__76202 = G__76393;
count__76203 = G__76394;
i__76204 = G__76395;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__76227 = cljs.core.seq(js_requires);
var chunk__76228 = null;
var count__76229 = (0);
var i__76230 = (0);
while(true){
if((i__76230 < count__76229)){
var js_ns = chunk__76228.cljs$core$IIndexed$_nth$arity$2(null,i__76230);
var require_str_76396 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_76396);


var G__76397 = seq__76227;
var G__76398 = chunk__76228;
var G__76399 = count__76229;
var G__76400 = (i__76230 + (1));
seq__76227 = G__76397;
chunk__76228 = G__76398;
count__76229 = G__76399;
i__76230 = G__76400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76227);
if(temp__5735__auto__){
var seq__76227__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76227__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76227__$1);
var G__76403 = cljs.core.chunk_rest(seq__76227__$1);
var G__76404 = c__4556__auto__;
var G__76405 = cljs.core.count(c__4556__auto__);
var G__76406 = (0);
seq__76227 = G__76403;
chunk__76228 = G__76404;
count__76229 = G__76405;
i__76230 = G__76406;
continue;
} else {
var js_ns = cljs.core.first(seq__76227__$1);
var require_str_76407 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_76407);


var G__76408 = cljs.core.next(seq__76227__$1);
var G__76409 = null;
var G__76410 = (0);
var G__76411 = (0);
seq__76227 = G__76408;
chunk__76228 = G__76409;
count__76229 = G__76410;
i__76230 = G__76411;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__76232){
var map__76233 = p__76232;
var map__76233__$1 = (((((!((map__76233 == null))))?(((((map__76233.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76233.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76233):map__76233);
var msg = map__76233__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76233__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76233__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__76235(s__76236){
return (new cljs.core.LazySeq(null,(function (){
var s__76236__$1 = s__76236;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__76236__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__76241 = cljs.core.first(xs__6292__auto__);
var map__76241__$1 = (((((!((map__76241 == null))))?(((((map__76241.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76241.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76241):map__76241);
var src = map__76241__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76241__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76241__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4525__auto__ = ((function (s__76236__$1,map__76241,map__76241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__76233,map__76233__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__76235_$_iter__76237(s__76238){
return (new cljs.core.LazySeq(null,((function (s__76236__$1,map__76241,map__76241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__76233,map__76233__$1,msg,info,reload_info){
return (function (){
var s__76238__$1 = s__76238;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__76238__$1);
if(temp__5735__auto____$1){
var s__76238__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__76238__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__76238__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__76240 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__76239 = (0);
while(true){
if((i__76239 < size__4528__auto__)){
var warning = cljs.core._nth(c__4527__auto__,i__76239);
cljs.core.chunk_append(b__76240,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__76413 = (i__76239 + (1));
i__76239 = G__76413;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__76240),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__76235_$_iter__76237(cljs.core.chunk_rest(s__76238__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__76240),null);
}
} else {
var warning = cljs.core.first(s__76238__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__76235_$_iter__76237(cljs.core.rest(s__76238__$2)));
}
} else {
return null;
}
break;
}
});})(s__76236__$1,map__76241,map__76241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__76233,map__76233__$1,msg,info,reload_info))
,null,null));
});})(s__76236__$1,map__76241,map__76241__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__76233,map__76233__$1,msg,info,reload_info))
;
var fs__4526__auto__ = cljs.core.seq(iterys__4525__auto__(warnings));
if(fs__4526__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4526__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__76235(cljs.core.rest(s__76236__$1)));
} else {
var G__76414 = cljs.core.rest(s__76236__$1);
s__76236__$1 = G__76414;
continue;
}
} else {
var G__76415 = cljs.core.rest(s__76236__$1);
s__76236__$1 = G__76415;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__76249_76416 = cljs.core.seq(warnings);
var chunk__76250_76417 = null;
var count__76251_76418 = (0);
var i__76252_76419 = (0);
while(true){
if((i__76252_76419 < count__76251_76418)){
var map__76257_76420 = chunk__76250_76417.cljs$core$IIndexed$_nth$arity$2(null,i__76252_76419);
var map__76257_76421__$1 = (((((!((map__76257_76420 == null))))?(((((map__76257_76420.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76257_76420.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76257_76420):map__76257_76420);
var w_76422 = map__76257_76421__$1;
var msg_76423__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76257_76421__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_76424 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76257_76421__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_76425 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76257_76421__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_76426 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76257_76421__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_76426)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76424),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_76425),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_76423__$1)].join(''));


var G__76429 = seq__76249_76416;
var G__76430 = chunk__76250_76417;
var G__76431 = count__76251_76418;
var G__76432 = (i__76252_76419 + (1));
seq__76249_76416 = G__76429;
chunk__76250_76417 = G__76430;
count__76251_76418 = G__76431;
i__76252_76419 = G__76432;
continue;
} else {
var temp__5735__auto___76433 = cljs.core.seq(seq__76249_76416);
if(temp__5735__auto___76433){
var seq__76249_76434__$1 = temp__5735__auto___76433;
if(cljs.core.chunked_seq_QMARK_(seq__76249_76434__$1)){
var c__4556__auto___76435 = cljs.core.chunk_first(seq__76249_76434__$1);
var G__76436 = cljs.core.chunk_rest(seq__76249_76434__$1);
var G__76437 = c__4556__auto___76435;
var G__76438 = cljs.core.count(c__4556__auto___76435);
var G__76439 = (0);
seq__76249_76416 = G__76436;
chunk__76250_76417 = G__76437;
count__76251_76418 = G__76438;
i__76252_76419 = G__76439;
continue;
} else {
var map__76259_76440 = cljs.core.first(seq__76249_76434__$1);
var map__76259_76441__$1 = (((((!((map__76259_76440 == null))))?(((((map__76259_76440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76259_76440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76259_76440):map__76259_76440);
var w_76442 = map__76259_76441__$1;
var msg_76443__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76259_76441__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_76444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76259_76441__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_76445 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76259_76441__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_76446 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76259_76441__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_76446)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_76444),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_76445),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_76443__$1)].join(''));


var G__76448 = cljs.core.next(seq__76249_76434__$1);
var G__76449 = null;
var G__76450 = (0);
var G__76451 = (0);
seq__76249_76416 = G__76448;
chunk__76250_76417 = G__76449;
count__76251_76418 = G__76450;
i__76252_76419 = G__76451;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__76231_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__76231_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__76265){
var map__76266 = p__76265;
var map__76266__$1 = (((((!((map__76266 == null))))?(((((map__76266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76266.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76266):map__76266);
var msg = map__76266__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76266__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__76270 = cljs.core.seq(updates);
var chunk__76272 = null;
var count__76273 = (0);
var i__76274 = (0);
while(true){
if((i__76274 < count__76273)){
var path = chunk__76272.cljs$core$IIndexed$_nth$arity$2(null,i__76274);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__76306_76456 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__76310_76457 = null;
var count__76311_76458 = (0);
var i__76312_76459 = (0);
while(true){
if((i__76312_76459 < count__76311_76458)){
var node_76460 = chunk__76310_76457.cljs$core$IIndexed$_nth$arity$2(null,i__76312_76459);
if(cljs.core.not(node_76460.shadow$old)){
var path_match_76461 = shadow.cljs.devtools.client.browser.match_paths(node_76460.getAttribute("href"),path);
if(cljs.core.truth_(path_match_76461)){
var new_link_76462 = (function (){var G__76318 = node_76460.cloneNode(true);
G__76318.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_76461),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__76318;
})();
(node_76460.shadow$old = true);

(new_link_76462.onload = ((function (seq__76306_76456,chunk__76310_76457,count__76311_76458,i__76312_76459,seq__76270,chunk__76272,count__76273,i__76274,new_link_76462,path_match_76461,node_76460,path,map__76266,map__76266__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_76460);
});})(seq__76306_76456,chunk__76310_76457,count__76311_76458,i__76312_76459,seq__76270,chunk__76272,count__76273,i__76274,new_link_76462,path_match_76461,node_76460,path,map__76266,map__76266__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_76461], 0));

goog.dom.insertSiblingAfter(new_link_76462,node_76460);


var G__76463 = seq__76306_76456;
var G__76464 = chunk__76310_76457;
var G__76465 = count__76311_76458;
var G__76466 = (i__76312_76459 + (1));
seq__76306_76456 = G__76463;
chunk__76310_76457 = G__76464;
count__76311_76458 = G__76465;
i__76312_76459 = G__76466;
continue;
} else {
var G__76467 = seq__76306_76456;
var G__76468 = chunk__76310_76457;
var G__76469 = count__76311_76458;
var G__76470 = (i__76312_76459 + (1));
seq__76306_76456 = G__76467;
chunk__76310_76457 = G__76468;
count__76311_76458 = G__76469;
i__76312_76459 = G__76470;
continue;
}
} else {
var G__76471 = seq__76306_76456;
var G__76472 = chunk__76310_76457;
var G__76473 = count__76311_76458;
var G__76474 = (i__76312_76459 + (1));
seq__76306_76456 = G__76471;
chunk__76310_76457 = G__76472;
count__76311_76458 = G__76473;
i__76312_76459 = G__76474;
continue;
}
} else {
var temp__5735__auto___76475 = cljs.core.seq(seq__76306_76456);
if(temp__5735__auto___76475){
var seq__76306_76476__$1 = temp__5735__auto___76475;
if(cljs.core.chunked_seq_QMARK_(seq__76306_76476__$1)){
var c__4556__auto___76477 = cljs.core.chunk_first(seq__76306_76476__$1);
var G__76478 = cljs.core.chunk_rest(seq__76306_76476__$1);
var G__76479 = c__4556__auto___76477;
var G__76480 = cljs.core.count(c__4556__auto___76477);
var G__76481 = (0);
seq__76306_76456 = G__76478;
chunk__76310_76457 = G__76479;
count__76311_76458 = G__76480;
i__76312_76459 = G__76481;
continue;
} else {
var node_76482 = cljs.core.first(seq__76306_76476__$1);
if(cljs.core.not(node_76482.shadow$old)){
var path_match_76483 = shadow.cljs.devtools.client.browser.match_paths(node_76482.getAttribute("href"),path);
if(cljs.core.truth_(path_match_76483)){
var new_link_76484 = (function (){var G__76320 = node_76482.cloneNode(true);
G__76320.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_76483),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__76320;
})();
(node_76482.shadow$old = true);

(new_link_76484.onload = ((function (seq__76306_76456,chunk__76310_76457,count__76311_76458,i__76312_76459,seq__76270,chunk__76272,count__76273,i__76274,new_link_76484,path_match_76483,node_76482,seq__76306_76476__$1,temp__5735__auto___76475,path,map__76266,map__76266__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_76482);
});})(seq__76306_76456,chunk__76310_76457,count__76311_76458,i__76312_76459,seq__76270,chunk__76272,count__76273,i__76274,new_link_76484,path_match_76483,node_76482,seq__76306_76476__$1,temp__5735__auto___76475,path,map__76266,map__76266__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_76483], 0));

goog.dom.insertSiblingAfter(new_link_76484,node_76482);


var G__76485 = cljs.core.next(seq__76306_76476__$1);
var G__76486 = null;
var G__76487 = (0);
var G__76488 = (0);
seq__76306_76456 = G__76485;
chunk__76310_76457 = G__76486;
count__76311_76458 = G__76487;
i__76312_76459 = G__76488;
continue;
} else {
var G__76489 = cljs.core.next(seq__76306_76476__$1);
var G__76490 = null;
var G__76491 = (0);
var G__76492 = (0);
seq__76306_76456 = G__76489;
chunk__76310_76457 = G__76490;
count__76311_76458 = G__76491;
i__76312_76459 = G__76492;
continue;
}
} else {
var G__76493 = cljs.core.next(seq__76306_76476__$1);
var G__76494 = null;
var G__76495 = (0);
var G__76496 = (0);
seq__76306_76456 = G__76493;
chunk__76310_76457 = G__76494;
count__76311_76458 = G__76495;
i__76312_76459 = G__76496;
continue;
}
}
} else {
}
}
break;
}


var G__76497 = seq__76270;
var G__76498 = chunk__76272;
var G__76499 = count__76273;
var G__76500 = (i__76274 + (1));
seq__76270 = G__76497;
chunk__76272 = G__76498;
count__76273 = G__76499;
i__76274 = G__76500;
continue;
} else {
var G__76501 = seq__76270;
var G__76502 = chunk__76272;
var G__76503 = count__76273;
var G__76504 = (i__76274 + (1));
seq__76270 = G__76501;
chunk__76272 = G__76502;
count__76273 = G__76503;
i__76274 = G__76504;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76270);
if(temp__5735__auto__){
var seq__76270__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76270__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__76270__$1);
var G__76505 = cljs.core.chunk_rest(seq__76270__$1);
var G__76506 = c__4556__auto__;
var G__76507 = cljs.core.count(c__4556__auto__);
var G__76508 = (0);
seq__76270 = G__76505;
chunk__76272 = G__76506;
count__76273 = G__76507;
i__76274 = G__76508;
continue;
} else {
var path = cljs.core.first(seq__76270__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__76323_76509 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__76327_76510 = null;
var count__76328_76511 = (0);
var i__76329_76512 = (0);
while(true){
if((i__76329_76512 < count__76328_76511)){
var node_76513 = chunk__76327_76510.cljs$core$IIndexed$_nth$arity$2(null,i__76329_76512);
if(cljs.core.not(node_76513.shadow$old)){
var path_match_76514 = shadow.cljs.devtools.client.browser.match_paths(node_76513.getAttribute("href"),path);
if(cljs.core.truth_(path_match_76514)){
var new_link_76515 = (function (){var G__76335 = node_76513.cloneNode(true);
G__76335.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_76514),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__76335;
})();
(node_76513.shadow$old = true);

(new_link_76515.onload = ((function (seq__76323_76509,chunk__76327_76510,count__76328_76511,i__76329_76512,seq__76270,chunk__76272,count__76273,i__76274,new_link_76515,path_match_76514,node_76513,path,seq__76270__$1,temp__5735__auto__,map__76266,map__76266__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_76513);
});})(seq__76323_76509,chunk__76327_76510,count__76328_76511,i__76329_76512,seq__76270,chunk__76272,count__76273,i__76274,new_link_76515,path_match_76514,node_76513,path,seq__76270__$1,temp__5735__auto__,map__76266,map__76266__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_76514], 0));

goog.dom.insertSiblingAfter(new_link_76515,node_76513);


var G__76516 = seq__76323_76509;
var G__76517 = chunk__76327_76510;
var G__76518 = count__76328_76511;
var G__76519 = (i__76329_76512 + (1));
seq__76323_76509 = G__76516;
chunk__76327_76510 = G__76517;
count__76328_76511 = G__76518;
i__76329_76512 = G__76519;
continue;
} else {
var G__76520 = seq__76323_76509;
var G__76521 = chunk__76327_76510;
var G__76522 = count__76328_76511;
var G__76523 = (i__76329_76512 + (1));
seq__76323_76509 = G__76520;
chunk__76327_76510 = G__76521;
count__76328_76511 = G__76522;
i__76329_76512 = G__76523;
continue;
}
} else {
var G__76524 = seq__76323_76509;
var G__76525 = chunk__76327_76510;
var G__76526 = count__76328_76511;
var G__76527 = (i__76329_76512 + (1));
seq__76323_76509 = G__76524;
chunk__76327_76510 = G__76525;
count__76328_76511 = G__76526;
i__76329_76512 = G__76527;
continue;
}
} else {
var temp__5735__auto___76528__$1 = cljs.core.seq(seq__76323_76509);
if(temp__5735__auto___76528__$1){
var seq__76323_76529__$1 = temp__5735__auto___76528__$1;
if(cljs.core.chunked_seq_QMARK_(seq__76323_76529__$1)){
var c__4556__auto___76530 = cljs.core.chunk_first(seq__76323_76529__$1);
var G__76531 = cljs.core.chunk_rest(seq__76323_76529__$1);
var G__76532 = c__4556__auto___76530;
var G__76533 = cljs.core.count(c__4556__auto___76530);
var G__76534 = (0);
seq__76323_76509 = G__76531;
chunk__76327_76510 = G__76532;
count__76328_76511 = G__76533;
i__76329_76512 = G__76534;
continue;
} else {
var node_76535 = cljs.core.first(seq__76323_76529__$1);
if(cljs.core.not(node_76535.shadow$old)){
var path_match_76536 = shadow.cljs.devtools.client.browser.match_paths(node_76535.getAttribute("href"),path);
if(cljs.core.truth_(path_match_76536)){
var new_link_76537 = (function (){var G__76336 = node_76535.cloneNode(true);
G__76336.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_76536),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__76336;
})();
(node_76535.shadow$old = true);

(new_link_76537.onload = ((function (seq__76323_76509,chunk__76327_76510,count__76328_76511,i__76329_76512,seq__76270,chunk__76272,count__76273,i__76274,new_link_76537,path_match_76536,node_76535,seq__76323_76529__$1,temp__5735__auto___76528__$1,path,seq__76270__$1,temp__5735__auto__,map__76266,map__76266__$1,msg,updates){
return (function (e){
return goog.dom.removeNode(node_76535);
});})(seq__76323_76509,chunk__76327_76510,count__76328_76511,i__76329_76512,seq__76270,chunk__76272,count__76273,i__76274,new_link_76537,path_match_76536,node_76535,seq__76323_76529__$1,temp__5735__auto___76528__$1,path,seq__76270__$1,temp__5735__auto__,map__76266,map__76266__$1,msg,updates))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_76536], 0));

goog.dom.insertSiblingAfter(new_link_76537,node_76535);


var G__76538 = cljs.core.next(seq__76323_76529__$1);
var G__76539 = null;
var G__76540 = (0);
var G__76541 = (0);
seq__76323_76509 = G__76538;
chunk__76327_76510 = G__76539;
count__76328_76511 = G__76540;
i__76329_76512 = G__76541;
continue;
} else {
var G__76542 = cljs.core.next(seq__76323_76529__$1);
var G__76543 = null;
var G__76544 = (0);
var G__76545 = (0);
seq__76323_76509 = G__76542;
chunk__76327_76510 = G__76543;
count__76328_76511 = G__76544;
i__76329_76512 = G__76545;
continue;
}
} else {
var G__76546 = cljs.core.next(seq__76323_76529__$1);
var G__76547 = null;
var G__76548 = (0);
var G__76549 = (0);
seq__76323_76509 = G__76546;
chunk__76327_76510 = G__76547;
count__76328_76511 = G__76548;
i__76329_76512 = G__76549;
continue;
}
}
} else {
}
}
break;
}


var G__76550 = cljs.core.next(seq__76270__$1);
var G__76551 = null;
var G__76552 = (0);
var G__76553 = (0);
seq__76270 = G__76550;
chunk__76272 = G__76551;
count__76273 = G__76552;
i__76274 = G__76553;
continue;
} else {
var G__76554 = cljs.core.next(seq__76270__$1);
var G__76555 = null;
var G__76556 = (0);
var G__76557 = (0);
seq__76270 = G__76554;
chunk__76272 = G__76555;
count__76273 = G__76556;
i__76274 = G__76557;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(runtime,p__76337){
var map__76338 = p__76337;
var map__76338__$1 = (((((!((map__76338 == null))))?(((((map__76338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76338):map__76338);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76338__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
return shadow.cljs.devtools.client.shared.load_sources(runtime,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return shadow.cljs.devtools.client.browser.devtools_msg("ready!");
}));
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$2 = (function (this$,p__76340){
var map__76341 = p__76340;
var map__76341__$1 = (((((!((map__76341 == null))))?(((((map__76341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76341):map__76341);
var _ = map__76341__$1;
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76341__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__76343,done,error){
var map__76344 = p__76343;
var map__76344__$1 = (((((!((map__76344 == null))))?(((((map__76344.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76344.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76344):map__76344);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76344__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__76346,done,error){
var map__76347 = p__76346;
var map__76347__$1 = (((((!((map__76347 == null))))?(((((map__76347.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76347.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76347):map__76347);
var msg = map__76347__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76347__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76347__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76347__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__76349){
var map__76350 = p__76349;
var map__76350__$1 = (((((!((map__76350 == null))))?(((((map__76350.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76350.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76350):map__76350);
var src = map__76350__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76350__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4115__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4115__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__76352 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__76352) : done.call(null,G__76352));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__76353){
var map__76354 = p__76353;
var map__76354__$1 = (((((!((map__76354 == null))))?(((((map__76354.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76354.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76354):map__76354);
var msg__$1 = map__76354__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76354__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e76356){var ex = e76356;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__76357){
var map__76358 = p__76357;
var map__76358__$1 = (((((!((map__76358 == null))))?(((((map__76358.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76358.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76358):map__76358);
var env = map__76358__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76358__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-runtime-init","cljs-runtime-init",1305890232),(function (msg){
return shadow.cljs.devtools.client.browser.repl_init(runtime,msg);
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (p__76365){
var map__76366 = p__76365;
var map__76366__$1 = (((((!((map__76366 == null))))?(((((map__76366.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76366.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76366):map__76366);
var msg = map__76366__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76366__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__76368){
var map__76369 = p__76368;
var map__76369__$1 = (((((!((map__76369 == null))))?(((((map__76369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76369):map__76369);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76369__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76369__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__76371){
var map__76372 = p__76371;
var map__76372__$1 = (((((!((map__76372 == null))))?(((((map__76372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76372):map__76372);
var svc = map__76372__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76372__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
