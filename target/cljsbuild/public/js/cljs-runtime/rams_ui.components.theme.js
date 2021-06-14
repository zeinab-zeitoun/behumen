goog.provide('rams_ui.components.theme');
var module$node_modules$$material_ui$core$esm$styles$index=shadow.js.require("module$node_modules$$material_ui$core$esm$styles$index", {});
var module$node_modules$jss_rtl$lib$main=shadow.js.require("module$node_modules$jss_rtl$lib$main", {});
var module$node_modules$jss$dist$jss_cjs=shadow.js.require("module$node_modules$jss$dist$jss_cjs", {});
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-ltr","rams4ui|get-ltr",1190931105),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"ltr?","ltr?",1971521526)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|toggle-ltr","rams4ui|toggle-ltr",1006553692),(function (db,p__80900){
var vec__80901 = p__80900;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80901,(0),null);
var state = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"ltr?","ltr?",1971521526)], null));
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"ltr?","ltr?",1971521526)], null),cljs.core.not(state));
}));
rams_ui.components.theme.toggle_ltr = (function rams_ui$components$theme$toggle_ltr(){

return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|toggle-ltr","rams4ui|toggle-ltr",1006553692)], null));
});
rams_ui.components.theme.is_ltr_QMARK_ = (function rams_ui$components$theme$is_ltr_QMARK_(){

return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-ltr","rams4ui|get-ltr",1190931105)], null));
});
/**
 * the base component that should be used at the root of all rams-ui systems. It provides the ability to theme the whole design and gives access to the rtl support needed. Note that this will affect the body tag in the DOM so will affect all elements on the page.
 *   It takes the following arguments
 * 
 *   - **config**: is the theme configuration better understood by studying the [docs|https://material-ui.com/customization/theming/]. It only adds one extra key **:rtl?** to indicate if it should start from right to left. By default it start as ltr
 *   - **content**: the react componenet to be rendered inside it.
 */
rams_ui.components.theme.theme = (function rams_ui$components$theme$theme(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80960 = arguments.length;
var i__4737__auto___80961 = (0);
while(true){
if((i__4737__auto___80961 < len__4736__auto___80960)){
args__4742__auto__.push((arguments[i__4737__auto___80961]));

var G__80962 = (i__4737__auto___80961 + (1));
i__4737__auto___80961 = G__80962;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rams_ui.components.theme.theme.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rams_ui.components.theme.theme.cljs$core$IFn$_invoke$arity$variadic = (function (p__80910,content){
var map__80912 = p__80910;
var map__80912__$1 = (((((!((map__80912 == null))))?(((((map__80912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80912):map__80912);
var options = map__80912__$1;
var rtl_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80912__$1,new cljs.core.Keyword(null,"rtl?","rtl?",-246218652));
var ltr_QMARK_ = rams_ui.components.theme.is_ltr_QMARK_();
var direction = (cljs.core.truth_((function (){var and__4115__auto__ = rtl_QMARK_;
if(cljs.core.truth_(and__4115__auto__)){
return (cljs.core.deref(ltr_QMARK_) == null);
} else {
return and__4115__auto__;
}
})())?"rtl":(((cljs.core.deref(ltr_QMARK_) == null))?"ltr":(cljs.core.truth_(cljs.core.deref(ltr_QMARK_))?"ltr":"rtl")));
var new_theme = reagent_material_ui.styles.create_mui_theme(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(options,new cljs.core.Keyword(null,"rtl?","rtl?",-246218652)),new cljs.core.Keyword(null,"direction","direction",-633359395),direction));
var new_plugins = module$node_modules$$material_ui$core$esm$styles$index.jssPreset().plugins;
var _ = new_plugins.push(module$node_modules$jss_rtl$lib$main.default());
var new_jss = module$node_modules$jss$dist$jss_cjs.create(({"plugins": new_plugins}));
var body_dom = (document.getElementsByTagName("body")[(0)]);
body_dom.setAttribute("dir",direction);

body_dom.setAttribute("style",["text-align:",((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(direction,"ltr"))?"left":"right")].join(''));

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.styles.theme_provider,new_theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$esm$styles$index.StylesProvider),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"jss","jss",1846446881),new_jss], null),content], null)], null);
}));

(rams_ui.components.theme.theme.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rams_ui.components.theme.theme.cljs$lang$applyTo = (function (seq80906){
var G__80907 = cljs.core.first(seq80906);
var seq80906__$1 = cljs.core.next(seq80906);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80907,seq80906__$1);
}));


//# sourceMappingURL=rams_ui.components.theme.js.map
