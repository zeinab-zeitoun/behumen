goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__75821,p__75822){
var map__75823 = p__75821;
var map__75823__$1 = (((((!((map__75823 == null))))?(((((map__75823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75823):map__75823);
var svc = map__75823__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75823__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75823__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75823__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__75824 = p__75822;
var map__75824__$1 = (((((!((map__75824 == null))))?(((((map__75824.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75824.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75824):map__75824);
var msg = map__75824__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75824__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75824__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75824__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75824__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__75832,p__75833){
var map__75835 = p__75832;
var map__75835__$1 = (((((!((map__75835 == null))))?(((((map__75835.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75835.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75835):map__75835);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75835__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__75836 = p__75833;
var map__75836__$1 = (((((!((map__75836 == null))))?(((((map__75836.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75836.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75836):map__75836);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75836__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__75843,p__75844){
var map__75846 = p__75843;
var map__75846__$1 = (((((!((map__75846 == null))))?(((((map__75846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75846):map__75846);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75846__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75846__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__75848 = p__75844;
var map__75848__$1 = (((((!((map__75848 == null))))?(((((map__75848.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75848.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75848):map__75848);
var msg = map__75848__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75848__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__75854,tid){
var map__75855 = p__75854;
var map__75855__$1 = (((((!((map__75855 == null))))?(((((map__75855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75855.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75855):map__75855);
var svc = map__75855__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75855__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__75863 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__75864 = null;
var count__75865 = (0);
var i__75866 = (0);
while(true){
if((i__75866 < count__75865)){
var vec__75884 = chunk__75864.cljs$core$IIndexed$_nth$arity$2(null,i__75866);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75884,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75884,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__75897 = seq__75863;
var G__75898 = chunk__75864;
var G__75899 = count__75865;
var G__75900 = (i__75866 + (1));
seq__75863 = G__75897;
chunk__75864 = G__75898;
count__75865 = G__75899;
i__75866 = G__75900;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__75863);
if(temp__5735__auto__){
var seq__75863__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__75863__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75863__$1);
var G__75901 = cljs.core.chunk_rest(seq__75863__$1);
var G__75902 = c__4556__auto__;
var G__75903 = cljs.core.count(c__4556__auto__);
var G__75904 = (0);
seq__75863 = G__75901;
chunk__75864 = G__75902;
count__75865 = G__75903;
i__75866 = G__75904;
continue;
} else {
var vec__75890 = cljs.core.first(seq__75863__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75890,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75890,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__75905 = cljs.core.next(seq__75863__$1);
var G__75906 = null;
var G__75907 = (0);
var G__75908 = (0);
seq__75863 = G__75905;
chunk__75864 = G__75906;
count__75865 = G__75907;
i__75866 = G__75908;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__75857_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__75857_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__75858_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__75858_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__75859_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__75859_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__75860_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__75860_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__75893){
var map__75894 = p__75893;
var map__75894__$1 = (((((!((map__75894 == null))))?(((((map__75894.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75894.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75894):map__75894);
var svc = map__75894__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75894__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75894__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
