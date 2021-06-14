goog.provide('reagent_material_ui.util');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$$material_ui$core$esm$SvgIcon$index=shadow.js.require("module$node_modules$$material_ui$core$esm$SvgIcon$index", {});
reagent_material_ui.util.adapt_react_class = (function reagent_material_ui$util$adapt_react_class(var_args){
var G__80193 = arguments.length;
switch (G__80193) {
case 1:
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1 = (function (c){
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(c,reagent.impl.util.fun_name(c));
}));

(reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2 = (function (c,display_name){
var adapted = reagent.core.adapt_react_class(c);
(adapted.displayName = display_name);

return adapted;
}));

(reagent_material_ui.util.adapt_react_class.cljs$lang$maxFixedArity = 2);

reagent_material_ui.util.color_key_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, ["A700",null,"A200",null,new cljs.core.Keyword(null,"A200","A200",-116883354),null,new cljs.core.Keyword(null,"A400","A400",1881009576),null,new cljs.core.Keyword(null,"A700","A700",-181053111),null,"A400",null,new cljs.core.Keyword(null,"A100","A100",-1657389641),null,"A100",null], null), null);
reagent_material_ui.util.numeric_string_QMARK_ = (function reagent_material_ui$util$numeric_string_QMARK_(s){
return ((typeof s === 'string') && ((!((cljs.core.re_matches(/[0-9]+/,s) == null)))));
});
reagent_material_ui.util.pascal_case_QMARK_ = (function reagent_material_ui$util$pascal_case_QMARK_(s){
return ((typeof s === 'string') && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 26, ["A",null,"B",null,"C",null,"D",null,"E",null,"F",null,"G",null,"H",null,"I",null,"J",null,"K",null,"L",null,"M",null,"N",null,"O",null,"P",null,"Q",null,"R",null,"S",null,"T",null,"U",null,"V",null,"W",null,"X",null,"Y",null,"Z",null], null), null),cljs.core.first(s))));
});
reagent_material_ui.util.key__GT_str = (function reagent_material_ui$util$key__GT_str(k){
var n = cljs.core.name(k);
if(cljs.core.truth_((reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_material_ui.util.color_key_QMARK_.call(null,k)))){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"data-")){
return n;
} else {
if(clojure.string.starts_with_QMARK_(n,"aria-")){
return n;
} else {
if(reagent_material_ui.util.pascal_case_QMARK_(n)){
return n;
} else {
return camel_snake_kebab.core.__GT_camelCaseString(k);

}
}
}
}
});
reagent_material_ui.util.convert_map_keys = (function reagent_material_ui$util$convert_map_keys(m,f){
return clojure.walk.postwalk((function (x){
if(cljs.core.map_entry_QMARK_(x)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80203 = cljs.core.key(x);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__80203) : f.call(null,G__80203));
})(),cljs.core.val(x)], null);
} else {
return x;
}
}),m);
});
reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_ = (function reagent_material_ui$util$clj__GT_js_SINGLEQUOTE_(obj){
return cljs.core.clj__GT_js(reagent_material_ui.util.convert_map_keys(obj,(function (k){
if((k instanceof cljs.core.Keyword)){
return reagent_material_ui.util.key__GT_str(k);
} else {
return k;
}
})));
});
reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_ = (function reagent_material_ui$util$js__GT_clj_SINGLEQUOTE_(var_args){
var G__80211 = arguments.length;
switch (G__80211) {
case 1:
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1 = (function (obj){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(obj,true);
}));

(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 = (function (obj,pass_ref_QMARK_){
var children = goog.object.get(obj,"children");
var result = (function (){var G__80214 = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(obj);
var G__80214__$1 = (cljs.core.truth_(children)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__80214,"children"):G__80214);
var G__80214__$2 = reagent_material_ui.util.convert_map_keys(G__80214__$1,(function (k){
if((k instanceof cljs.core.Keyword)){
return k;
} else {
if(cljs.core.truth_((reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1 ? reagent_material_ui.util.color_key_QMARK_.cljs$core$IFn$_invoke$arity$1(k) : reagent_material_ui.util.color_key_QMARK_.call(null,k)))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
if(reagent_material_ui.util.numeric_string_QMARK_(k)){
return parseInt(k);
} else {
if(reagent_material_ui.util.pascal_case_QMARK_(k)){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k);
} else {
return camel_snake_kebab.core.__GT_kebab_case_keyword(k);

}
}
}
}
}))
;
if(cljs.core.truth_(children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__80214__$2,new cljs.core.Keyword(null,"children","children",-940561982),children);
} else {
return G__80214__$2;
}
})();
if(cljs.core.truth_(pass_ref_QMARK_)){
var temp__5733__auto__ = goog.object.get(obj,"ref");
if(cljs.core.truth_(temp__5733__auto__)){
var ref = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"ref","ref",1289896967),ref);
} else {
return result;
}
} else {
return result;
}
}));

(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$lang$maxFixedArity = 2);

reagent_material_ui.util.wrap_clj_function = (function reagent_material_ui$util$wrap_clj_function(f){
return (function() { 
var G__80279__delegate = function (args){
return reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_,args)));
};
var G__80279 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80280__i = 0, G__80280__a = new Array(arguments.length -  0);
while (G__80280__i < G__80280__a.length) {G__80280__a[G__80280__i] = arguments[G__80280__i + 0]; ++G__80280__i;}
  args = new cljs.core.IndexedSeq(G__80280__a,0,null);
} 
return G__80279__delegate.call(this,args);};
G__80279.cljs$lang$maxFixedArity = 0;
G__80279.cljs$lang$applyTo = (function (arglist__80281){
var args = cljs.core.seq(arglist__80281);
return G__80279__delegate(args);
});
G__80279.cljs$core$IFn$_invoke$arity$variadic = G__80279__delegate;
return G__80279;
})()
;
});
reagent_material_ui.util.wrap_js_function = (function reagent_material_ui$util$wrap_js_function(f){
return (function() { 
var G__80282__delegate = function (args){
return reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_,args)));
};
var G__80282 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80283__i = 0, G__80283__a = new Array(arguments.length -  0);
while (G__80283__i < G__80283__a.length) {G__80283__a[G__80283__i] = arguments[G__80283__i + 0]; ++G__80283__i;}
  args = new cljs.core.IndexedSeq(G__80283__a,0,null);
} 
return G__80282__delegate.call(this,args);};
G__80282.cljs$lang$maxFixedArity = 0;
G__80282.cljs$lang$applyTo = (function (arglist__80284){
var args = cljs.core.seq(arglist__80284);
return G__80282__delegate(args);
});
G__80282.cljs$core$IFn$_invoke$arity$variadic = G__80282__delegate;
return G__80282;
})()
;
});
reagent_material_ui.util.wrap_all_clj_functions = (function reagent_material_ui$util$wrap_all_clj_functions(m){
return clojure.walk.postwalk((function (x){
if(cljs.core.fn_QMARK_(x)){
return reagent_material_ui.util.wrap_clj_function(x);
} else {
return x;
}
}),m);
});
reagent_material_ui.util.reactify_component = (function reagent_material_ui$util$reactify_component(component){
var reactified = module$node_modules$react$index.forwardRef((function (props,ref){
var clj_props = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(props,false),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ref","ref",1289896967),ref,new cljs.core.Keyword(null,"children","children",-940561982),goog.object.get(props,"children")], null)], 0));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [component,clj_props], null));
}));
(reactified.displayName = reagent.impl.util.fun_name(component));

return reactified;
});
reagent_material_ui.util.wrap_jss_styles = (function reagent_material_ui$util$wrap_jss_styles(styles){
if(cljs.core.fn_QMARK_(styles)){
return (function (theme){
return reagent_material_ui.util.clj__GT_js_SINGLEQUOTE_(reagent_material_ui.util.wrap_all_clj_functions((function (){var G__80227 = reagent_material_ui.util.js__GT_clj_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$1(theme);
return (styles.cljs$core$IFn$_invoke$arity$1 ? styles.cljs$core$IFn$_invoke$arity$1(G__80227) : styles.call(null,G__80227));
})()));
});
} else {
return cljs.core.clj__GT_js(reagent_material_ui.util.wrap_all_clj_functions(styles));
}
});
reagent_material_ui.util.apply_hoc = (function reagent_material_ui$util$apply_hoc(hoc,component){
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1((function (){var G__80229 = reagent_material_ui.util.reactify_component(component);
return (hoc.cljs$core$IFn$_invoke$arity$1 ? hoc.cljs$core$IFn$_invoke$arity$1(G__80229) : hoc.call(null,G__80229));
})());
});
reagent_material_ui.util.get_anycase = (function reagent_material_ui$util$get_anycase(var_args){
var G__80233 = arguments.length;
switch (G__80233) {
case 2:
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$2 = (function (m,k){
return reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3(m,k,null);
}));

(reagent_material_ui.util.get_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,default$){
var temp__5733__auto__ = (function (){var or__4126__auto__ = cljs.core.find(m,camel_snake_kebab.core.__GT_kebab_case_keyword(k));
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.find(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k));
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var entry = temp__5733__auto__;
return cljs.core.val(entry);
} else {
return default$;
}
}));

(reagent_material_ui.util.get_anycase.cljs$lang$maxFixedArity = 3);

reagent_material_ui.util.assoc_anycase = (function reagent_material_ui$util$assoc_anycase(var_args){
var G__80240 = arguments.length;
switch (G__80240) {
case 3:
return reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
var args_arr__4757__auto__ = [];
var len__4736__auto___80287 = arguments.length;
var i__4737__auto___80288 = (0);
while(true){
if((i__4737__auto___80288 < len__4736__auto___80287)){
args_arr__4757__auto__.push((arguments[i__4737__auto___80288]));

var G__80289 = (i__4737__auto___80288 + (1));
i__4737__auto___80288 = G__80289;
continue;
} else {
}
break;
}

var argseq__4758__auto__ = (new cljs.core.IndexedSeq(args_arr__4757__auto__.slice((3)),(0),null));
return reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4758__auto__);

}
});

(reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3 = (function (m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,camel_snake_kebab.core.__GT_camelCaseKeyword(k)),camel_snake_kebab.core.__GT_kebab_case_keyword(k),v);
}));

(reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
while(true){
var ret = reagent_material_ui.util.assoc_anycase.cljs$core$IFn$_invoke$arity$3(m,k,v);
if(cljs.core.truth_(kvs)){
var G__80290 = ret;
var G__80291 = cljs.core.first(kvs);
var G__80292 = cljs.core.second(kvs);
var G__80293 = cljs.core.nnext(kvs);
m = G__80290;
k = G__80291;
v = G__80292;
kvs = G__80293;
continue;
} else {
return ret;
}
break;
}
}));

/** @this {Function} */
(reagent_material_ui.util.assoc_anycase.cljs$lang$applyTo = (function (seq80236){
var G__80237 = cljs.core.first(seq80236);
var seq80236__$1 = cljs.core.next(seq80236);
var G__80238 = cljs.core.first(seq80236__$1);
var seq80236__$2 = cljs.core.next(seq80236__$1);
var G__80239 = cljs.core.first(seq80236__$2);
var seq80236__$3 = cljs.core.next(seq80236__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80237,G__80238,G__80239,seq80236__$3);
}));

(reagent_material_ui.util.assoc_anycase.cljs$lang$maxFixedArity = (3));

reagent_material_ui.util.debounce = (function reagent_material_ui$util$debounce(f,ms){
var timeout = cljs.core.volatile_BANG_(null);
var ret = (function() { 
var G__80294__delegate = function (args){
clearTimeout(cljs.core.deref(timeout));

return cljs.core.vreset_BANG_(timeout,setTimeout((function (){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
}),ms));
};
var G__80294 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__80295__i = 0, G__80295__a = new Array(arguments.length -  0);
while (G__80295__i < G__80295__a.length) {G__80295__a[G__80295__i] = arguments[G__80295__i + 0]; ++G__80295__i;}
  args = new cljs.core.IndexedSeq(G__80295__a,0,null);
} 
return G__80294__delegate.call(this,args);};
G__80294.cljs$lang$maxFixedArity = 0;
G__80294.cljs$lang$applyTo = (function (arglist__80296){
var args = cljs.core.seq(arglist__80296);
return G__80294__delegate(args);
});
G__80294.cljs$core$IFn$_invoke$arity$variadic = G__80294__delegate;
return G__80294;
})()
;
(ret.clear = (function (){
return clearTimeout(cljs.core.deref(timeout));
}));

return ret;
});
reagent_material_ui.util.remove_undefined_vals = (function reagent_material_ui$util$remove_undefined_vals(m){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (acc,k,v){
if((void 0 === v)){
return cljs.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),cljs.core.transient$(m),m));
});
reagent_material_ui.util.set_ref = (function reagent_material_ui$util$set_ref(ref,value){
if(cljs.core.fn_QMARK_(ref)){
return (ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(value) : ref.call(null,value));
} else {
if(cljs.core.truth_(ref)){
return (ref.current = value);
} else {
return null;
}
}
});
reagent_material_ui.util.use_fork_ref = (function reagent_material_ui$util$use_fork_ref(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80299 = arguments.length;
var i__4737__auto___80300 = (0);
while(true){
if((i__4737__auto___80300 < len__4736__auto___80299)){
args__4742__auto__.push((arguments[i__4737__auto___80300]));

var G__80301 = (i__4737__auto___80300 + (1));
i__4737__auto___80300 = G__80301;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return reagent_material_ui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(reagent_material_ui.util.use_fork_ref.cljs$core$IFn$_invoke$arity$variadic = (function (refs){
return module$node_modules$react$index.useMemo((function (){
if(cljs.core.not_every_QMARK_(cljs.core.nil_QMARK_,refs)){
return (function (value){
var seq__80257 = cljs.core.seq(refs);
var chunk__80258 = null;
var count__80259 = (0);
var i__80260 = (0);
while(true){
if((i__80260 < count__80259)){
var ref = chunk__80258.cljs$core$IIndexed$_nth$arity$2(null,i__80260);
reagent_material_ui.util.set_ref(ref,value);


var G__80304 = seq__80257;
var G__80305 = chunk__80258;
var G__80306 = count__80259;
var G__80307 = (i__80260 + (1));
seq__80257 = G__80304;
chunk__80258 = G__80305;
count__80259 = G__80306;
i__80260 = G__80307;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80257);
if(temp__5735__auto__){
var seq__80257__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80257__$1)){
var c__4556__auto__ = cljs.core.chunk_first(seq__80257__$1);
var G__80308 = cljs.core.chunk_rest(seq__80257__$1);
var G__80309 = c__4556__auto__;
var G__80310 = cljs.core.count(c__4556__auto__);
var G__80311 = (0);
seq__80257 = G__80308;
chunk__80258 = G__80309;
count__80259 = G__80310;
i__80260 = G__80311;
continue;
} else {
var ref = cljs.core.first(seq__80257__$1);
reagent_material_ui.util.set_ref(ref,value);


var G__80312 = cljs.core.next(seq__80257__$1);
var G__80313 = null;
var G__80314 = (0);
var G__80315 = (0);
seq__80257 = G__80312;
chunk__80258 = G__80313;
count__80259 = G__80314;
i__80260 = G__80315;
continue;
}
} else {
return null;
}
}
break;
}
});
} else {
return null;
}
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,refs));
}));

(reagent_material_ui.util.use_fork_ref.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(reagent_material_ui.util.use_fork_ref.cljs$lang$applyTo = (function (seq80253){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80253));
}));

reagent_material_ui.util.use_callback = (function reagent_material_ui$util$use_callback(callback,props){
return module$node_modules$react$index.useCallback(callback,props);
});
reagent_material_ui.util.use_effect = (function reagent_material_ui$util$use_effect(effect,props){
return module$node_modules$react$index.useEffect(effect,props);
});
reagent_material_ui.util.use_layout_effect = (function reagent_material_ui$util$use_layout_effect(effect){
return module$node_modules$react$index.useLayoutEffect(effect);
});
reagent_material_ui.util.use_ref = (function reagent_material_ui$util$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
reagent_material_ui.util.use_state = (function reagent_material_ui$util$use_state(initial_state){
return module$node_modules$react$index.useState(initial_state);
});
reagent_material_ui.util.create_svg_icon = (function reagent_material_ui$util$create_svg_icon(path,display_name){
var component = module$node_modules$react$index.memo(module$node_modules$react$index.forwardRef((function (props,ref){
return module$node_modules$react$index.createElement((function (){var or__4126__auto__ = module$node_modules$$material_ui$core$esm$SvgIcon$index.default;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return module$node_modules$$material_ui$core$esm$SvgIcon$index.SvgIcon;
}
})(),Object.assign(({"ref": ref}),props),path);
})));
return reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2(component,display_name);
});

//# sourceMappingURL=reagent_material_ui.util.js.map
