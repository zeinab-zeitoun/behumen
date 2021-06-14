goog.provide('behumen.subscriptions');
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"db","db",993250759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__80617){
var vec__80618 = p__80617;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80618,(0),null);
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80618,(1),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(key))?key:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"get-current-page-type","get-current-page-type",-1150676848),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__80621){
var vec__80622 = p__80621;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80622,(0),null);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"current-page-type","current-page-type",791193802));
})], 0));

//# sourceMappingURL=behumen.subscriptions.js.map
