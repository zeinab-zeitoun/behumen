goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__75344){
var map__75345 = p__75344;
var map__75345__$1 = (((((!((map__75345 == null))))?(((((map__75345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75345):map__75345);
var m = map__75345__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75345__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75345__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__75349_75574 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75350_75575 = null;
var count__75351_75576 = (0);
var i__75352_75577 = (0);
while(true){
if((i__75352_75577 < count__75351_75576)){
var f_75578 = chunk__75350_75575.cljs$core$IIndexed$_nth$arity$2(null,i__75352_75577);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75578], 0));


var G__75579 = seq__75349_75574;
var G__75580 = chunk__75350_75575;
var G__75581 = count__75351_75576;
var G__75582 = (i__75352_75577 + (1));
seq__75349_75574 = G__75579;
chunk__75350_75575 = G__75580;
count__75351_75576 = G__75581;
i__75352_75577 = G__75582;
continue;
} else {
var temp__5735__auto___75583 = cljs.core.seq(seq__75349_75574);
if(temp__5735__auto___75583){
var seq__75349_75584__$1 = temp__5735__auto___75583;
if(cljs.core.chunked_seq_QMARK_(seq__75349_75584__$1)){
var c__4556__auto___75585 = cljs.core.chunk_first(seq__75349_75584__$1);
var G__75586 = cljs.core.chunk_rest(seq__75349_75584__$1);
var G__75587 = c__4556__auto___75585;
var G__75588 = cljs.core.count(c__4556__auto___75585);
var G__75589 = (0);
seq__75349_75574 = G__75586;
chunk__75350_75575 = G__75587;
count__75351_75576 = G__75588;
i__75352_75577 = G__75589;
continue;
} else {
var f_75590 = cljs.core.first(seq__75349_75584__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_75590], 0));


var G__75591 = cljs.core.next(seq__75349_75584__$1);
var G__75592 = null;
var G__75593 = (0);
var G__75594 = (0);
seq__75349_75574 = G__75591;
chunk__75350_75575 = G__75592;
count__75351_75576 = G__75593;
i__75352_75577 = G__75594;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_75595 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_75595], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_75595)))?cljs.core.second(arglists_75595):arglists_75595)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__75358_75601 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__75359_75602 = null;
var count__75360_75603 = (0);
var i__75361_75604 = (0);
while(true){
if((i__75361_75604 < count__75360_75603)){
var vec__75374_75605 = chunk__75359_75602.cljs$core$IIndexed$_nth$arity$2(null,i__75361_75604);
var name_75606 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75374_75605,(0),null);
var map__75377_75607 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75374_75605,(1),null);
var map__75377_75608__$1 = (((((!((map__75377_75607 == null))))?(((((map__75377_75607.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75377_75607.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75377_75607):map__75377_75607);
var doc_75609 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75377_75608__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75610 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75377_75608__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75606], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75610], 0));

if(cljs.core.truth_(doc_75609)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75609], 0));
} else {
}


var G__75611 = seq__75358_75601;
var G__75612 = chunk__75359_75602;
var G__75613 = count__75360_75603;
var G__75614 = (i__75361_75604 + (1));
seq__75358_75601 = G__75611;
chunk__75359_75602 = G__75612;
count__75360_75603 = G__75613;
i__75361_75604 = G__75614;
continue;
} else {
var temp__5735__auto___75615 = cljs.core.seq(seq__75358_75601);
if(temp__5735__auto___75615){
var seq__75358_75616__$1 = temp__5735__auto___75615;
if(cljs.core.chunked_seq_QMARK_(seq__75358_75616__$1)){
var c__4556__auto___75617 = cljs.core.chunk_first(seq__75358_75616__$1);
var G__75618 = cljs.core.chunk_rest(seq__75358_75616__$1);
var G__75619 = c__4556__auto___75617;
var G__75620 = cljs.core.count(c__4556__auto___75617);
var G__75621 = (0);
seq__75358_75601 = G__75618;
chunk__75359_75602 = G__75619;
count__75360_75603 = G__75620;
i__75361_75604 = G__75621;
continue;
} else {
var vec__75380_75622 = cljs.core.first(seq__75358_75616__$1);
var name_75623 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75380_75622,(0),null);
var map__75383_75624 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75380_75622,(1),null);
var map__75383_75625__$1 = (((((!((map__75383_75624 == null))))?(((((map__75383_75624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75383_75624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75383_75624):map__75383_75624);
var doc_75626 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75383_75625__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_75627 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75383_75625__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_75623], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_75627], 0));

if(cljs.core.truth_(doc_75626)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_75626], 0));
} else {
}


var G__75628 = cljs.core.next(seq__75358_75616__$1);
var G__75629 = null;
var G__75630 = (0);
var G__75631 = (0);
seq__75358_75601 = G__75628;
chunk__75359_75602 = G__75629;
count__75360_75603 = G__75630;
i__75361_75604 = G__75631;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__75386 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__75387 = null;
var count__75388 = (0);
var i__75389 = (0);
while(true){
if((i__75389 < count__75388)){
var role = chunk__75387.cljs$core$IIndexed$_nth$arity$2(null,i__75389);
var temp__5735__auto___75632__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___75632__$1)){
var spec_75633 = temp__5735__auto___75632__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75633)], 0));
} else {
}


var G__75638 = seq__75386;
var G__75639 = chunk__75387;
var G__75640 = count__75388;
var G__75641 = (i__75389 + (1));
seq__75386 = G__75638;
chunk__75387 = G__75639;
count__75388 = G__75640;
i__75389 = G__75641;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__75386);
if(temp__5735__auto____$1){
var seq__75386__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__75386__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__75386__$1);
var G__75642 = cljs.core.chunk_rest(seq__75386__$1);
var G__75643 = c__4556__auto__;
var G__75644 = cljs.core.count(c__4556__auto__);
var G__75645 = (0);
seq__75386 = G__75642;
chunk__75387 = G__75643;
count__75388 = G__75644;
i__75389 = G__75645;
continue;
} else {
var role = cljs.core.first(seq__75386__$1);
var temp__5735__auto___75647__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___75647__$2)){
var spec_75648 = temp__5735__auto___75647__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_75648)], 0));
} else {
}


var G__75649 = cljs.core.next(seq__75386__$1);
var G__75650 = null;
var G__75651 = (0);
var G__75652 = (0);
seq__75386 = G__75649;
chunk__75387 = G__75650;
count__75388 = G__75651;
i__75389 = G__75652;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__75654 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__75655 = cljs.core.ex_cause(t);
via = G__75654;
t = G__75655;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__75455 = datafied_throwable;
var map__75455__$1 = (((((!((map__75455 == null))))?(((((map__75455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75455.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75455):map__75455);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75455__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75455__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__75455__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__75456 = cljs.core.last(via);
var map__75456__$1 = (((((!((map__75456 == null))))?(((((map__75456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75456):map__75456);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75456__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__75457 = data;
var map__75457__$1 = (((((!((map__75457 == null))))?(((((map__75457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75457):map__75457);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75457__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__75458 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__75458__$1 = (((((!((map__75458 == null))))?(((((map__75458.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75458.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75458):map__75458);
var top_data = map__75458__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75458__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__75488 = phase;
var G__75488__$1 = (((G__75488 instanceof cljs.core.Keyword))?G__75488.fqn:null);
switch (G__75488__$1) {
case "read-source":
var map__75493 = data;
var map__75493__$1 = (((((!((map__75493 == null))))?(((((map__75493.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75493.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75493):map__75493);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75493__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__75499 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__75499__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75499,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75499);
var G__75499__$2 = (cljs.core.truth_((function (){var fexpr__75500 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75500.cljs$core$IFn$_invoke$arity$1 ? fexpr__75500.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75500.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75499__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75499__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75499__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75499__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__75501 = top_data;
var G__75501__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75501,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__75501);
var G__75501__$2 = (cljs.core.truth_((function (){var fexpr__75502 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75502.cljs$core$IFn$_invoke$arity$1 ? fexpr__75502.cljs$core$IFn$_invoke$arity$1(source) : fexpr__75502.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__75501__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__75501__$1);
var G__75501__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75501__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75501__$2);
var G__75501__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75501__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75501__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75501__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75501__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__75504 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75504,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75504,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75504,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75504,(3),null);
var G__75507 = top_data;
var G__75507__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75507,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__75507);
var G__75507__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75507__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__75507__$1);
var G__75507__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75507__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__75507__$2);
var G__75507__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75507__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__75507__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75507__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__75507__$4;
}

break;
case "execution":
var vec__75509 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75509,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75509,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75509,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__75509,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__75440_SHARP_){
var or__4126__auto__ = (p1__75440_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var fexpr__75513 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__75513.cljs$core$IFn$_invoke$arity$1 ? fexpr__75513.cljs$core$IFn$_invoke$arity$1(p1__75440_SHARP_) : fexpr__75513.call(null,p1__75440_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__75514 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__75514__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75514,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__75514);
var G__75514__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75514__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__75514__$1);
var G__75514__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75514__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__75514__$2);
var G__75514__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75514__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__75514__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__75514__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__75514__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75488__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__75519){
var map__75521 = p__75519;
var map__75521__$1 = (((((!((map__75521 == null))))?(((((map__75521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__75521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__75521):map__75521);
var triage_data = map__75521__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__75521__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__75524 = phase;
var G__75524__$1 = (((G__75524 instanceof cljs.core.Keyword))?G__75524.fqn:null);
switch (G__75524__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__75525 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__75526 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75527 = loc;
var G__75528 = (cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75529_75690 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75530_75691 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75531_75692 = true;
var _STAR_print_fn_STAR__temp_val__75532_75693 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75531_75692);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75532_75693);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75517_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75517_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75530_75691);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75529_75690);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75525,G__75526,G__75527,G__75528) : format.call(null,G__75525,G__75526,G__75527,G__75528));

break;
case "macroexpansion":
var G__75533 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__75534 = cause_type;
var G__75535 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75536 = loc;
var G__75537 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75533,G__75534,G__75535,G__75536,G__75537) : format.call(null,G__75533,G__75534,G__75535,G__75536,G__75537));

break;
case "compile-syntax-check":
var G__75538 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__75539 = cause_type;
var G__75540 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75541 = loc;
var G__75542 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75538,G__75539,G__75540,G__75541,G__75542) : format.call(null,G__75538,G__75539,G__75540,G__75541,G__75542));

break;
case "compilation":
var G__75543 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__75544 = cause_type;
var G__75545 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75546 = loc;
var G__75547 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75543,G__75544,G__75545,G__75546,G__75547) : format.call(null,G__75543,G__75544,G__75545,G__75546,G__75547));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__75548 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__75549 = symbol;
var G__75550 = loc;
var G__75551 = (function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__75552_75713 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__75553_75714 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__75554_75715 = true;
var _STAR_print_fn_STAR__temp_val__75555_75716 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__75554_75715);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__75555_75716);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__75518_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__75518_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__75553_75714);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__75552_75713);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__75548,G__75549,G__75550,G__75551) : format.call(null,G__75548,G__75549,G__75550,G__75551));
} else {
var G__75556 = "Execution error%s at %s(%s).\n%s\n";
var G__75557 = cause_type;
var G__75558 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__75559 = loc;
var G__75560 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__75556,G__75557,G__75558,G__75559,G__75560) : format.call(null,G__75556,G__75557,G__75558,G__75559,G__75560));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__75524__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
