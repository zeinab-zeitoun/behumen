goog.provide('behumen.core');
behumen.core.render_page = (function behumen$core$render_page(){
var current_page_type = re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"get-current-page-type","get-current-page-type",-1150676848)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(current_page_type),new cljs.core.Keyword(null,"landing-page","landing-page",1687415187))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [behumen.views.home.landing_page], null);
} else {
return null;
}
});
behumen.core.render_theme = (function behumen$core$render_theme(){
rams_ui.util.reset_page_render();

var spacing = (4);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.theme.theme,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"palette","palette",-456203511),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"common","common",-1822281391),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"black","black",1294279647),"#000",new cljs.core.Keyword(null,"white","white",-483998618),"#fff"], null),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default","default",-1987822328),"#fff",new cljs.core.Keyword(null,"paper","paper",-836673493),"#f6f9fc"], null),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),"#0652ff",new cljs.core.Keyword(null,"main","main",-2117802661),"#001e62",new cljs.core.Keyword(null,"dark","dark",1818973999),"#000e30",new cljs.core.Keyword(null,"contrast-text","contrast-text",231616578),"#fff"], null),new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),"#ffd790",new cljs.core.Keyword(null,"main","main",-2117802661),"#ffa400",new cljs.core.Keyword(null,"dark","dark",1818973999),"#9b6300",new cljs.core.Keyword(null,"contrast-text","contrast-text",231616578),"#fff"], null),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"light","light",1918998747),"rgba(239, 149, 177, 1)",new cljs.core.Keyword(null,"main","main",-2117802661),"rgba(224, 1, 70, 1)",new cljs.core.Keyword(null,"dark","dark",1818973999),"rgba(224, 1, 70, 1)",new cljs.core.Keyword(null,"contrast-text","contrast-text",231616578),"#fff"], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"primary","primary",817773892),"rgba(30, 30, 30, 1)",new cljs.core.Keyword(null,"secondary","secondary",-669381460),"rgba(48, 50, 51, 1)",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),"rgba(153, 153, 153, 1)",new cljs.core.Keyword(null,"hint","hint",439639918),"rgba(168, 168, 168, 1)"], null)], null),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"values","values",372645556),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"xs","xs",649443341),(0),new cljs.core.Keyword(null,"sm","sm",-1402575065),(600),new cljs.core.Keyword(null,"md","md",707286655),(1200),new cljs.core.Keyword(null,"lg","lg",-80787836),(1500)], null)], null),new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),"\"Montserrat\", \"sans-serif\""], null),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"MuiTypography","MuiTypography",447893803),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variantMapping","variantMapping",1946309765),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"maccy","maccy",1976935041),"h1"], null)], null)], null),new cljs.core.Keyword(null,"spacing","spacing",204422175),spacing,new cljs.core.Keyword(null,"css","css",1135045163),new cljs.core.PersistentArrayMap(null, 1, [".header_1",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"20px",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),(800),new cljs.core.Keyword(null,"color","color",1011675173),"green"], null)], null),new cljs.core.Keyword(null,"overrides","overrides",1738628867),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"MuiOutlinedInput","MuiOutlinedInput",-2117287236),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"notchedOutline","notchedOutline",-1931882918),new cljs.core.PersistentArrayMap(null, 2, ["@global",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"legend","legend",-1027192245),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"none"], null)], null),new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null),new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(3.5 * spacing)], null)], null),new cljs.core.Keyword(null,"MuiInputLabel","MuiInputLabel",-67665549),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"outlined","outlined",-69626634),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),"inherit",new cljs.core.Keyword(null,"transform","transform",1381301764),"none !important",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(1.5 * spacing)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [behumen.core.render_page], null)], null);
});
behumen.core.functional_compiler = reagent.core.create_compiler(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"function-components","function-components",1492814963),true], null));
behumen.core.mount_components = (function behumen$core$mount_components(){
re_frame.core.clear_subscription_cache_BANG_();

reagent.core.set_default_compiler_BANG_(behumen.core.functional_compiler);

return reagent.dom.render.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return behumen.core.render_theme;},new cljs.core.Symbol("behumen.core","render-theme","behumen.core/render-theme",-2015501677,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"behumen.core","behumen.core",-1079047796,null),new cljs.core.Symbol(null,"render-theme","render-theme",2118640724,null),"behumen/core.cljs",19,1,28,28,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(behumen.core.render_theme)?behumen.core.render_theme.cljs$lang$test:null)]))], null),document.getElementById("app-body"),behumen.core.functional_compiler);
});
behumen.core.init_BANG_ = (function behumen$core$init_BANG_(){
re_frame.core.dispatch_sync(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize-db","initialize-db",230998432)], null));

reitit.frontend.easy.start_BANG_(behumen.routes.reitit_routes,(function (p1__69564_SHARP_){
var route = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(p1__69564_SHARP_);
if(cljs.core.contains_QMARK_(route,new cljs.core.Keyword(null,"type","type",1174270348))){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page-type","set-current-page-type",-285930579),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(route)], null));
} else {
re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-current-page-type","set-current-page-type",-285930579),null], null));

rams_ui.components.nav.set_url_selected(new cljs.core.Keyword(null,"main-nav","main-nav",1431396283),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route));

return rams_ui.util.open_url.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(p1__69564_SHARP_),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(route)], 0));
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"use-fragment","use-fragment",-1617737154),false], null));

behumen.ajax.load_interceptors_BANG_();

return behumen.core.mount_components();
});

//# sourceMappingURL=behumen.core.js.map