goog.provide('camel_snake_kebab.internals.misc');
camel_snake_kebab.internals.misc.convert_case = (function camel_snake_kebab$internals$misc$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79778 = arguments.length;
var i__4737__auto___79779 = (0);
while(true){
if((i__4737__auto___79779 < len__4736__auto___79778)){
args__4742__auto__.push((arguments[i__4737__auto___79779]));

var G__79780 = (i__4737__auto___79779 + (1));
i__4737__auto___79779 = G__79780;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.internals.misc.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,p__79765){
var map__79766 = p__79765;
var map__79766__$1 = (((((!((map__79766 == null))))?(((((map__79766.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79766.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79766):map__79766);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79766__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),camel_snake_kebab.internals.string_separator.generic_separator);
var vec__79768 = camel_snake_kebab.internals.string_separator.split(separator,s);
var seq__79769 = cljs.core.seq(vec__79768);
var first__79770 = cljs.core.first(seq__79769);
var seq__79769__$1 = cljs.core.next(seq__79769);
var first = first__79770;
var rest = seq__79769__$1;
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(sep,cljs.core.cons((first_fn.cljs$core$IFn$_invoke$arity$1 ? first_fn.cljs$core$IFn$_invoke$arity$1(first) : first_fn.call(null,first)),cljs.core.map.cljs$core$IFn$_invoke$arity$2(rest_fn,rest)));
}));

(camel_snake_kebab.internals.misc.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.internals.misc.convert_case.cljs$lang$applyTo = (function (seq79756){
var G__79757 = cljs.core.first(seq79756);
var seq79756__$1 = cljs.core.next(seq79756);
var G__79758 = cljs.core.first(seq79756__$1);
var seq79756__$2 = cljs.core.next(seq79756__$1);
var G__79759 = cljs.core.first(seq79756__$2);
var seq79756__$3 = cljs.core.next(seq79756__$2);
var G__79760 = cljs.core.first(seq79756__$3);
var seq79756__$4 = cljs.core.next(seq79756__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79757,G__79758,G__79759,G__79760,seq79756__$4);
}));

camel_snake_kebab.internals.misc.upper_case_http_headers = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, ["WWW",null,"TE",null,"CSP",null,"CPU",null,"IP",null,"WAP",null,"HTTP",null,"DNT",null,"UA",null,"ATT",null,"SSL",null,"MD5",null,"XSS",null], null), null);
camel_snake_kebab.internals.misc.capitalize_http_header = (function camel_snake_kebab$internals$misc$capitalize_http_header(s){
var or__4126__auto__ = (function (){var G__79777 = clojure.string.upper_case(s);
return (camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1 ? camel_snake_kebab.internals.misc.upper_case_http_headers.cljs$core$IFn$_invoke$arity$1(G__79777) : camel_snake_kebab.internals.misc.upper_case_http_headers.call(null,G__79777));
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return clojure.string.capitalize(s);
}
});

//# sourceMappingURL=camel_snake_kebab.internals.misc.js.map
