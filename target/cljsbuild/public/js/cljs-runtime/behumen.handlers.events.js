goog.provide('behumen.handlers.events');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-current-page-type","set-current-page-type",-285930579),(function (db,p__69550){
var vec__69551 = p__69550;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69551,(0),null);
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69551,(1),null);
if((type == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"current-page-type","current-page-type",791193802));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"current-page-type","current-page-type",791193802),type);
}
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432),(function (_,___$1){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"current-page-type","current-page-type",791193802),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"user","user",1532431356),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"temp-data","temp-data",-1617641277),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"open?","open?",1238443125),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"early-access-modal","early-access-modal",-378215875),false], null)], null);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-db-item","set-db-item",939049006),(function (db,p__69554){
var vec__69555 = p__69554;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69555,(0),null);
var original_db_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69555,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69555,(2),null);
var db_key = ((cljs.core.vector_QMARK_(original_db_key))?original_db_key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [original_db_key], null));
return cljs.core.assoc_in(db,db_key,value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"save-email","save-email",1801122349),(function (db,p__69560){
var vec__69561 = p__69560;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69561,(0),null);
var email = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69561,(1),null);
return behumen.ajax.ajax.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"db","db",993250759),db,new cljs.core.Keyword(null,"event","event",301435442),event_key,new cljs.core.Keyword(null,"url","url",276297046),behumen.common.generate_url(new cljs.core.Keyword(null,"save-email","save-email",1801122349)),new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"email","email",1415816706),email], null),new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (p1__69558_SHARP_){
return console.log("response: ",p1__69558_SHARP_);
}),new cljs.core.Keyword(null,"in-failure","in-failure",-403531294),(function (p1__69559_SHARP_){
return console.log("failure: ",p1__69559_SHARP_);
})], 0));
}));

//# sourceMappingURL=behumen.handlers.events.js.map
