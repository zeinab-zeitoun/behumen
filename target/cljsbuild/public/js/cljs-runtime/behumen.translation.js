goog.provide('behumen.translation');
behumen.translation.dictionary = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ar","ar",-2093907980),cljs.core.PersistentArrayMap.EMPTY], null);
behumen.translation.tr = (function behumen$translation$tr(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80585 = arguments.length;
var i__4737__auto___80586 = (0);
while(true){
if((i__4737__auto___80586 < len__4736__auto___80585)){
args__4742__auto__.push((arguments[i__4737__auto___80586]));

var G__80587 = (i__4737__auto___80586 + (1));
i__4737__auto___80586 = G__80587;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return behumen.translation.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(behumen.translation.tr.cljs$core$IFn$_invoke$arity$variadic = (function (message,p__80582){
var map__80583 = p__80582;
var map__80583__$1 = (((((!((map__80583 == null))))?(((((map__80583.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80583.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80583):map__80583);
var lang = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80583__$1,new cljs.core.Keyword(null,"lang","lang",-1819677104));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(behumen.translation.dictionary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,message], null)))){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(behumen.translation.dictionary,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [lang,message], null));
} else {
return message;
}
}));

(behumen.translation.tr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(behumen.translation.tr.cljs$lang$applyTo = (function (seq80580){
var G__80581 = cljs.core.first(seq80580);
var seq80580__$1 = cljs.core.next(seq80580);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80581,seq80580__$1);
}));


//# sourceMappingURL=behumen.translation.js.map
