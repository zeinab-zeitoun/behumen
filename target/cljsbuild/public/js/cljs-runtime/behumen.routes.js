goog.provide('behumen.routes');
behumen.routes.routes = new cljs.core.PersistentArrayMap(null, 1, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)], null)], null);
behumen.routes.reitit_routes = reitit.core.router.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function behumen$routes$iter__69517(s__69518){
return (new cljs.core.LazySeq(null,(function (){
var s__69518__$1 = s__69518;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69518__$1);
if(temp__5735__auto__){
var s__69518__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69518__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__69518__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__69520 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__69519 = (0);
while(true){
if((i__69519 < size__4528__auto__)){
var vec__69523 = cljs.core._nth(c__4527__auto__,i__69519);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69523,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69523,(1),null);
cljs.core.chunk_append(b__69520,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,route], null));

var G__69529 = (i__69519 + (1));
i__69519 = G__69529;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69520),behumen$routes$iter__69517(cljs.core.chunk_rest(s__69518__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69520),null);
}
} else {
var vec__69526 = cljs.core.first(s__69518__$2);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69526,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69526,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,route], null),behumen$routes$iter__69517(cljs.core.rest(s__69518__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(behumen.routes.routes);
})());
behumen.routes.get_route_by_url = (function behumen$routes$get_route_by_url(url){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(behumen.routes.routes,url);
});
behumen.routes.get_route_by_name = (function behumen$routes$get_route_by_name(page){
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(reitit.core.match_by_name(behumen.routes.reitit_routes,page));
});

//# sourceMappingURL=behumen.routes.js.map
