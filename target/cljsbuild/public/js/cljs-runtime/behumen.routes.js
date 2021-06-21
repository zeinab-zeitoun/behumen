goog.provide('behumen.routes');
behumen.routes.routes = new cljs.core.PersistentArrayMap(null, 1, ["/",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187)], null)], null);
behumen.routes.reitit_routes = reitit.core.router.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function behumen$routes$iter__65077(s__65078){
return (new cljs.core.LazySeq(null,(function (){
var s__65078__$1 = s__65078;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__65078__$1);
if(temp__5735__auto__){
var s__65078__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__65078__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__65078__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__65080 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__65079 = (0);
while(true){
if((i__65079 < size__4528__auto__)){
var vec__65083 = cljs.core._nth(c__4527__auto__,i__65079);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65083,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65083,(1),null);
cljs.core.chunk_append(b__65080,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,route], null));

var G__65091 = (i__65079 + (1));
i__65079 = G__65091;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__65080),behumen$routes$iter__65077(cljs.core.chunk_rest(s__65078__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__65080),null);
}
} else {
var vec__65086 = cljs.core.first(s__65078__$2);
var url = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65086,(0),null);
var route = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65086,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,route], null),behumen$routes$iter__65077(cljs.core.rest(s__65078__$2)));
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
