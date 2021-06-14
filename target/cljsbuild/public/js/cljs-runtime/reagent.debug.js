goog.provide('reagent.debug');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__76208__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__76208 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76209__i = 0, G__76209__a = new Array(arguments.length -  0);
while (G__76209__i < G__76209__a.length) {G__76209__a[G__76209__i] = arguments[G__76209__i + 0]; ++G__76209__i;}
  args = new cljs.core.IndexedSeq(G__76209__a,0,null);
} 
return G__76208__delegate.call(this,args);};
G__76208.cljs$lang$maxFixedArity = 0;
G__76208.cljs$lang$applyTo = (function (arglist__76215){
var args = cljs.core.seq(arglist__76215);
return G__76208__delegate(args);
});
G__76208.cljs$core$IFn$_invoke$arity$variadic = G__76208__delegate;
return G__76208;
})()
);

(o.error = (function() { 
var G__76216__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__76216 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76217__i = 0, G__76217__a = new Array(arguments.length -  0);
while (G__76217__i < G__76217__a.length) {G__76217__a[G__76217__i] = arguments[G__76217__i + 0]; ++G__76217__i;}
  args = new cljs.core.IndexedSeq(G__76217__a,0,null);
} 
return G__76216__delegate.call(this,args);};
G__76216.cljs$lang$maxFixedArity = 0;
G__76216.cljs$lang$applyTo = (function (arglist__76218){
var args = cljs.core.seq(arglist__76218);
return G__76216__delegate(args);
});
G__76216.cljs$core$IFn$_invoke$arity$variadic = G__76216__delegate;
return G__76216;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
