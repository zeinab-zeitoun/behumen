goog.provide('rams_ui.components.nav');
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|toggle-drawer-state","rams4ui|toggle-drawer-state",1526235436),(function (db,p__80842){
var vec__80843 = p__80842;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80843,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80843,(1),null);
var state = rams_ui.util.get_db_value.cljs$core$IFn$_invoke$arity$variadic(db,id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
return rams_ui.util.set_db_value.cljs$core$IFn$_invoke$arity$variadic(db,id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
}));
rams_ui.components.nav.use_styles = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (theme){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"top-bar-left","top-bar-left",-186171094),new cljs.core.Keyword(null,"top-bar","top-bar",-1709393391),new cljs.core.Keyword(null,"drawer-close","drawer-close",-1133678829),new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.Keyword(null,"logo-box-close","logo-box-close",365266583),new cljs.core.Keyword(null,"logo-box-open","logo-box-open",-499225157),new cljs.core.Keyword(null,"drawer-open","drawer-open",-628239653),new cljs.core.Keyword(null,"top-list","top-list",-1485857475),new cljs.core.Keyword(null,"drawer-toolbar","drawer-toolbar",-1058225090)],[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"drawer","drawer",-1346127858)], null)) + (1))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var fexpr__80846 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80846.cljs$core$IFn$_invoke$arity$1 ? fexpr__80846.cljs$core$IFn$_invoke$arity$1((4)) : fexpr__80846.call(null,(4)));
})()], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"flex","flex",-1425124628),(0)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding-left","padding-left",-1180879053),"4px",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"width","width",-384071477),(function (props){
if(cljs.core.truth_(new cljs.core.Keyword(null,"close-width","close-width",1876311172).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.Keyword(null,"close-width","close-width",1876311172).cljs$core$IFn$_invoke$arity$1(props);
} else {
return ((function (){var fexpr__80848 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80848.cljs$core$IFn$_invoke$arity$1 ? fexpr__80848.cljs$core$IFn$_invoke$arity$1((7)) : fexpr__80848.call(null,(7)));
})() + (1));
}
}),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var fexpr__80847 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.Keyword(null,"up","up",-269712113)], null));
return (fexpr__80847.cljs$core$IFn$_invoke$arity$1 ? fexpr__80847.cljs$core$IFn$_invoke$arity$1("sm") : fexpr__80847.call(null,"sm"));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),((function (){var fexpr__80849 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80849.cljs$core$IFn$_invoke$arity$1 ? fexpr__80849.cljs$core$IFn$_invoke$arity$1((9)) : fexpr__80849.call(null,(9)));
})() + (1))], null),new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var G__80851 = "width";
var G__80852 = ({"duration": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"leaving-screen","leaving-screen",627717884)], null)), "easing": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"sharp","sharp",-83698408)], null))});
var fexpr__80850 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"create","create",-1301499256)], null));
return (fexpr__80850.cljs$core$IFn$_invoke$arity$2 ? fexpr__80850.cljs$core$IFn$_invoke$arity$2(G__80851,G__80852) : fexpr__80850.call(null,G__80851,G__80852));
})()]),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(0),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var G__80854 = "width";
var G__80855 = ({"duration": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"leaving-screen","leaving-screen",627717884)], null)), "easing": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"sharp","sharp",-83698408)], null))});
var fexpr__80853 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"create","create",-1301499256)], null));
return (fexpr__80853.cljs$core$IFn$_invoke$arity$2 ? fexpr__80853.cljs$core$IFn$_invoke$arity$2(G__80854,G__80855) : fexpr__80853.call(null,G__80854,G__80855));
})()], null),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"width","width",-384071477),(function (props){
return new cljs.core.Keyword(null,"logo-width","logo-width",-4247589).cljs$core$IFn$_invoke$arity$1(props);
}),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"center",new cljs.core.Keyword(null,"align-items","align-items",-267946462),"center",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var G__80858 = "width";
var G__80859 = ({"duration": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"leaving-screen","leaving-screen",627717884)], null)), "easing": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"sharp","sharp",-83698408)], null))});
var fexpr__80857 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"create","create",-1301499256)], null));
return (fexpr__80857.cljs$core$IFn$_invoke$arity$2 ? fexpr__80857.cljs$core$IFn$_invoke$arity$2(G__80858,G__80859) : fexpr__80857.call(null,G__80858,G__80859));
})()], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),(0),new cljs.core.Keyword(null,"width","width",-384071477),(function (props){
return new cljs.core.Keyword(null,"open-width","open-width",-851155703).cljs$core$IFn$_invoke$arity$1(props);
}),new cljs.core.Keyword(null,"overflow-x","overflow-x",-26547754),"hidden",new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var G__80861 = "width";
var G__80862 = ({"duration": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"leaving-screen","leaving-screen",627717884)], null)), "easing": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"easing","easing",735372043),new cljs.core.Keyword(null,"sharp","sharp",-83698408)], null))});
var fexpr__80860 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"create","create",-1301499256)], null));
return (fexpr__80860.cljs$core$IFn$_invoke$arity$2 ? fexpr__80860.cljs$core$IFn$_invoke$arity$2(G__80861,G__80862) : fexpr__80860.call(null,G__80861,G__80862));
})()], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"flex","flex",-1425124628),(1)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),(function (props){
if(cljs.core.truth_(new cljs.core.Keyword(null,"secondary?","secondary?",357634042).cljs$core$IFn$_invoke$arity$1(props))){
return "flex-start";
} else {
return "flex-end";
}
})], null)]);
}));
rams_ui.components.nav.breadcrumb = (function rams_ui$components$nav$breadcrumb(config){
var pages = rams_ui.util.get_history();
var history_len = cljs.core.count(cljs.core.butlast(cljs.core.deref(pages)));
if((history_len > (0))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mb","mb",1534459853),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.breadcrumbs.breadcrumbs,config,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$nav$breadcrumb_$_iter__80864(s__80865){
return (new cljs.core.LazySeq(null,(function (){
var s__80865__$1 = s__80865;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80865__$1);
if(temp__5735__auto__){
var s__80865__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80865__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80865__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80867 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80866 = (0);
while(true){
if((i__80866 < size__4528__auto__)){
var idx = cljs.core._nth(c__4527__auto__,i__80866);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pages),idx);
cljs.core.chunk_append(b__80867,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.link.link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80866,page,idx,c__4527__auto__,size__4528__auto__,b__80867,s__80865__$2,temp__5735__auto__,pages,history_len){
return (function (p1__80863_SHARP_){
p1__80863_SHARP_.preventDefault();

return rams_ui.util.go_back.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(history_len - idx)], 0));
});})(i__80866,page,idx,c__4527__auto__,size__4528__auto__,b__80867,s__80865__$2,temp__5735__auto__,pages,history_len))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(page)], null));

var G__80911 = (i__80866 + (1));
i__80866 = G__80911;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80867),rams_ui$components$nav$breadcrumb_$_iter__80864(cljs.core.chunk_rest(s__80865__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80867),null);
}
} else {
var idx = cljs.core.first(s__80865__$2);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(pages),idx);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.link.link,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"href","href",-793805698),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (page,idx,s__80865__$2,temp__5735__auto__,pages,history_len){
return (function (p1__80863_SHARP_){
p1__80863_SHARP_.preventDefault();

return rams_ui.util.go_back.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(history_len - idx)], 0));
});})(page,idx,s__80865__$2,temp__5735__auto__,pages,history_len))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(page)], null),rams_ui$components$nav$breadcrumb_$_iter__80864(cljs.core.rest(s__80865__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),history_len));
})()),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"textPrimary"], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.last(cljs.core.deref(pages)))], null)], null)], null);
} else {
return null;
}
});
rams_ui.components.nav.top_bar = (function rams_ui$components$nav$top_bar(p__80868){
var map__80869 = p__80868;
var map__80869__$1 = (((((!((map__80869 == null))))?(((((map__80869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80869):map__80869);
var config = map__80869__$1;
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var drawer_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"drawer-width","drawer-width",-518936734));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80869__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4));
var left_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"left-action","left-action",-981562810));
var logo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var right_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"right-action","right-action",-757049399));
var adjust_elevation_on_scroll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"adjust-elevation-on-scroll?","adjust-elevation-on-scroll?",-2140506544));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80869__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var trigger = (cljs.core.truth_(adjust_elevation_on_scroll_QMARK_)?reagent_material_ui.core.use_scroll_trigger.use_scroll_trigger((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"threshold","threshold",204221583),(0)], null);
})):true);
var top_state = rams_ui.util.get_value(id);
var drawer_state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-primary-drawer"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
var bar_styles = (function (){var G__80871 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logo-width","logo-width",-4247589),drawer_width], null);
return (rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1 ? rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1(G__80871) : rams_ui.components.nav.use_styles.call(null,G__80871));
})();
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.app_bar.app_bar,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(cljs.core.truth_(trigger)?elevation:(0)),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"app-bar","app-bar",-1275042908).cljs$core$IFn$_invoke$arity$1(bar_styles)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.toolbar.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"top-bar","top-bar",-1709393391).cljs$core$IFn$_invoke$arity$1(bar_styles)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"top-bar-left","top-bar-left",-186171094).cljs$core$IFn$_invoke$arity$1(bar_styles)], null),(cljs.core.truth_(menu)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state));
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state)));
} else {
return and__4115__auto__;
}
})())?new cljs.core.Keyword(null,"logo-box-open","logo-box-open",-499225157).cljs$core$IFn$_invoke$arity$1(bar_styles):new cljs.core.Keyword(null,"logo-box-close","logo-box-close",365266583).cljs$core$IFn$_invoke$arity$1(bar_styles)),(cljs.core.truth_(((cljs.core.map_QMARK_(logo))?new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(logo):false))?new cljs.core.Keyword(null,"logo-css","logo-css",2013405004).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__80872 = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"logo-css","logo-css",2013405004),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(logo)], null);
}));
return (fexpr__80872.cljs$core$IFn$_invoke$arity$0 ? fexpr__80872.cljs$core$IFn$_invoke$arity$0() : fexpr__80872.call(null));
})()):null)], null)], null),(cljs.core.truth_(logo)?((cljs.core.map_QMARK_(logo))?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(logo):logo):null)], null):null),(cljs.core.truth_(menu)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"-primary-drawer"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state))),new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.menu.menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),"white"], null)], null)], null)], null):null)], null),(cljs.core.truth_(left_action)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"top-bar-left","top-bar-left",-186171094).cljs$core$IFn$_invoke$arity$1(bar_styles)], null),((cljs.core.vector_QMARK_(cljs.core.first(left_action)))?(function (){var iter__4529__auto__ = (function rams_ui$components$nav$top_bar_$_iter__80873(s__80874){
return (new cljs.core.LazySeq(null,(function (){
var s__80874__$1 = s__80874;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80874__$1);
if(temp__5735__auto__){
var s__80874__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80874__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80874__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80876 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80875 = (0);
while(true){
if((i__80875 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__80875);
cljs.core.chunk_append(b__80876,action);

var G__80914 = (i__80875 + (1));
i__80875 = G__80914;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80876),rams_ui$components$nav$top_bar_$_iter__80873(cljs.core.chunk_rest(s__80874__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80876),null);
}
} else {
var action = cljs.core.first(s__80874__$2);
return cljs.core.cons(action,rams_ui$components$nav$top_bar_$_iter__80873(cljs.core.rest(s__80874__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(left_action);
})():left_action)], null):null),(cljs.core.truth_(right_action)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"top-bar-left","top-bar-left",-186171094).cljs$core$IFn$_invoke$arity$1(bar_styles)], null),((cljs.core.vector_QMARK_(cljs.core.first(right_action)))?(function (){var iter__4529__auto__ = (function rams_ui$components$nav$top_bar_$_iter__80877(s__80878){
return (new cljs.core.LazySeq(null,(function (){
var s__80878__$1 = s__80878;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80878__$1);
if(temp__5735__auto__){
var s__80878__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80878__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80878__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80880 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80879 = (0);
while(true){
if((i__80879 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__80879);
cljs.core.chunk_append(b__80880,action);

var G__80915 = (i__80879 + (1));
i__80879 = G__80915;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80880),rams_ui$components$nav$top_bar_$_iter__80877(cljs.core.chunk_rest(s__80878__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80880),null);
}
} else {
var action = cljs.core.first(s__80878__$2);
return cljs.core.cons(action,rams_ui$components$nav$top_bar_$_iter__80877(cljs.core.rest(s__80878__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(right_action);
})():right_action)], null):null)], null)], null);
});
rams_ui.components.nav.clean_list_items_helper = (function rams_ui$components$nav$clean_list_items_helper(items){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"id","id",-1388402092),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item):new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__80881_80916 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
(fexpr__80881_80916.cljs$core$IFn$_invoke$arity$0 ? fexpr__80881_80916.cljs$core$IFn$_invoke$arity$0() : fexpr__80881_80916.call(null));
} else {
}

if(cljs.core.not(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))){
return rams_ui.util.open_url.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"clear-history?","clear-history?",1674814374),true,new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], 0));
} else {
return null;
}
}),new cljs.core.Keyword(null,"items","items",1031954938),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?(function (){var G__80882 = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item);
return (rams_ui.components.nav.clean_list_items_helper.cljs$core$IFn$_invoke$arity$1 ? rams_ui.components.nav.clean_list_items_helper.cljs$core$IFn$_invoke$arity$1(G__80882) : rams_ui.components.nav.clean_list_items_helper.call(null,G__80882));
})():null)], 0)),new cljs.core.Keyword(null,"url","url",276297046));
}),items);
});
rams_ui.components.nav.primary_drawer = (function rams_ui$components$nav$primary_drawer(p__80883,items){
var map__80884 = p__80883;
var map__80884__$1 = (((((!((map__80884 == null))))?(((((map__80884.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80884.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80884):map__80884);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var show_hide_on_hover_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641));
var show_hide_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80884__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var nav_styles = (function (){var G__80886 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open-width","open-width",-851155703),(cljs.core.truth_(mobile_QMARK_)?"90%":width)], null);
return (rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1 ? rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1(G__80886) : rams_ui.components.nav.use_styles.call(null,G__80886));
})();
var drawer_state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.drawer.drawer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(mobile_QMARK_)?"temporary":"permanent"),new cljs.core.Keyword(null,"Paper-props","Paper-props",1545693405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation], null),new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(show_hide_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return mobile_QMARK_;
}
}
})())?new cljs.core.Keyword(null,"drawer-open","drawer-open",-628239653).cljs$core$IFn$_invoke$arity$1(nav_styles):new cljs.core.Keyword(null,"drawer-close","drawer-close",-1133678829).cljs$core$IFn$_invoke$arity$1(nav_styles)),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paper","paper",-836673493),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(show_hide_QMARK_);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state));
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return mobile_QMARK_;
}
}
})())?new cljs.core.Keyword(null,"drawer-open","drawer-open",-628239653).cljs$core$IFn$_invoke$arity$1(nav_styles):new cljs.core.Keyword(null,"drawer-close","drawer-close",-1133678829).cljs$core$IFn$_invoke$arity$1(nav_styles))], null)], null),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state)),new cljs.core.Keyword(null,"Modal-props","Modal-props",404591049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keep-mounted","keep-mounted",1113011715),true], null)], null):null),(cljs.core.truth_(((cljs.core.not(mobile_QMARK_))?show_hide_on_hover_QMARK_:false))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-mouse-over","on-mouse-over",-858472552),((cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state))))?(function (){
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),true], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
}):null),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(cljs.core.truth_(new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state)))?(function (){
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
}):null)], null):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.toolbar.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"drawer-toolbar","drawer-toolbar",-1058225090).cljs$core$IFn$_invoke$arity$1(nav_styles)], null),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.close.close], null)], null):null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.items_list,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-primary-top-list"].join(''),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),true,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"top-list","top-list",-1485857475).cljs$core$IFn$_invoke$arity$1(nav_styles)], null),rams_ui.components.nav.clean_list_items_helper(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(items))], null),(cljs.core.truth_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(items))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.divider.divider], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(items))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.items_list,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-primary-bottom-list"].join(''),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),true,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(0),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], null),rams_ui.components.nav.clean_list_items_helper(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(items))], null):null)], null);
});
rams_ui.components.nav.secondary_drawer = (function rams_ui$components$nav$secondary_drawer(p__80887,side_bar){
var map__80888 = p__80887;
var map__80888__$1 = (((((!((map__80888 == null))))?(((((map__80888.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80888.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80888):map__80888);
var config = map__80888__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var overflow_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888__$1,new cljs.core.Keyword(null,"overflow?","overflow?",124924720));
var mobile_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80888__$1,new cljs.core.Keyword(null,"mobile?","mobile?",1358664528));
var nav_styles = (function (){var G__80890 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open-width","open-width",-851155703),"40ch",new cljs.core.Keyword(null,"close-width","close-width",1876311172),(0),new cljs.core.Keyword(null,"secondary?","secondary?",357634042),true], null);
return (rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1 ? rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$1(G__80890) : rams_ui.components.nav.use_styles.call(null,G__80890));
})();
var drawer_state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.drawer.drawer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"Paper-props","Paper-props",1545693405),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation], null),new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_((function (){var or__4126__auto__ = overflow_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return mobile_QMARK_;
}
})())?"temporary":"permanent"),new cljs.core.Keyword(null,"anchor","anchor",1549638489),"right"], null),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"Modal-props","Modal-props",404591049),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"keep-mounted","keep-mounted",1113011715),true], null)], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = mobile_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return overflow_QMARK_;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state))], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state)))?new cljs.core.Keyword(null,"drawer-open","drawer-open",-628239653).cljs$core$IFn$_invoke$arity$1(nav_styles):new cljs.core.Keyword(null,"drawer-close","drawer-close",-1133678829).cljs$core$IFn$_invoke$arity$1(nav_styles)),new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paper","paper",-836673493),(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(drawer_state)))?new cljs.core.Keyword(null,"drawer-open","drawer-open",-628239653).cljs$core$IFn$_invoke$arity$1(nav_styles):new cljs.core.Keyword(null,"drawer-close","drawer-close",-1133678829).cljs$core$IFn$_invoke$arity$1(nav_styles))], null)], null))], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.toolbar.toolbar,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"drawer-toolbar","drawer-toolbar",-1058225090).cljs$core$IFn$_invoke$arity$1(nav_styles)], null),(cljs.core.truth_(mobile_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rams_ui.util.set_value(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),false], null));
})], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.close.close], null)], null):null)], null),side_bar], null);
});
rams_ui.components.nav.nav_helper = (function rams_ui$components$nav$nav_helper(p__80891,content){
var map__80892 = p__80891;
var map__80892__$1 = (((((!((map__80892 == null))))?(((((map__80892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80892.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80892):map__80892);
var config = map__80892__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var side_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"side-bar","side-bar",-1291968675));
var breadcrumb_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"breadcrumb-config","breadcrumb-config",1725322311));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var adjust_elevation_on_scroll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80892__$1,new cljs.core.Keyword(null,"adjust-elevation-on-scroll?","adjust-elevation-on-scroll?",-2140506544));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80892__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4));
var nav_styles = (rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.nav.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.nav.use_styles.call(null));
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1(nav_styles)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.top_bar,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-top"].join(''),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"drawer-width","drawer-width",-518936734),(cljs.core.truth_(((cljs.core.map_QMARK_(menu))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):false))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):"40ch"),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),id,new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602),(cljs.core.truth_((function (){var and__4115__auto__ = menu;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.map_QMARK_(menu);
} else {
return and__4115__auto__;
}
})())?(((new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu) == null))?true:new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu)):cljs.core.boolean$(menu))], 0))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.ajax.ajax_loader,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"bar","bar",-1386246584)], null)], null),(cljs.core.truth_(menu)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sm-up","sm-up",-1370760696),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.primary_drawer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-primary-drawer"].join(''),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(cljs.core.truth_(((cljs.core.map_QMARK_(menu))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(menu):false))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(menu):elevation),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(((cljs.core.map_QMARK_(menu))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):false))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):"40ch"),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),true], null),((cljs.core.map_QMARK_(menu))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641),(((new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641).cljs$core$IFn$_invoke$arity$1(menu) == null))?false:new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641).cljs$core$IFn$_invoke$arity$1(menu)),new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602),(((new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu) == null))?true:new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu))], null):null)], 0)),((cljs.core.map_QMARK_(menu))?menu:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),menu], null))], null)], null):null),(cljs.core.truth_(menu)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs-down","xs-down",975006280),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.primary_drawer,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-primary-drawer"].join(''),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(cljs.core.truth_(((cljs.core.map_QMARK_(menu))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(menu):false))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(menu):elevation),new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(((cljs.core.map_QMARK_(menu))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):false))?new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(menu):"40ch"),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),false], null),((cljs.core.map_QMARK_(menu))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641),(((new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641).cljs$core$IFn$_invoke$arity$1(menu) == null))?false:new cljs.core.Keyword(null,"show-hide-on-hover?","show-hide-on-hover?",-772830641).cljs$core$IFn$_invoke$arity$1(menu)),new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602),(((new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu) == null))?true:new cljs.core.Keyword(null,"show-hide?","show-hide?",883933602).cljs$core$IFn$_invoke$arity$1(menu))], null):null)], 0)),((cljs.core.map_QMARK_(menu))?menu:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"top","top",-1856271961),menu], null))], null)], null):null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.container.container,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(nav_styles),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),false], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.toolbar.toolbar], null),(cljs.core.truth_(breadcrumb_config)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.breadcrumb,breadcrumb_config], null):null),content], null),(cljs.core.truth_(side_bar)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"sm-up","sm-up",-1370760696),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.secondary_drawer,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-secondary-drawer"].join(''),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(cljs.core.truth_(((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(side_bar):false))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(side_bar):elevation),new cljs.core.Keyword(null,"overflow?","overflow?",124924720),((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(side_bar):null),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),true], null),((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(side_bar):side_bar)], null)], null):null),(cljs.core.truth_(side_bar)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.hidden.hidden,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"xs-down","xs-down",975006280),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.secondary_drawer,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-secondary-drawer"].join(''),new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(cljs.core.truth_(((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(side_bar):false))?new cljs.core.Keyword(null,"elevation","elevation",-1609348796).cljs$core$IFn$_invoke$arity$1(side_bar):elevation),new cljs.core.Keyword(null,"overflow?","overflow?",124924720),((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"overflow?","overflow?",124924720).cljs$core$IFn$_invoke$arity$1(side_bar):null),new cljs.core.Keyword(null,"mobile?","mobile?",1358664528),false], null),((cljs.core.map_QMARK_(side_bar))?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(side_bar):side_bar)], null)], null):null)], null);
});
/**
 * creates a material ui navigation which is made up of a top bar, side menu and potentially a side bar.
 * 
 *   - **config**: is a hash map of the navigation component. The hashmap takes includes several keys 
 *    - **:id**: is an optional keyword/string/number that uniquely identifies the navigation.
 *    - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one 
 *    - **:breadcrumb-config**: is an optional hashmap that configures the breadcrump. The configuration can be found in [doc](https://material-ui.com/api/breadcrumbs/). If not given or is nil then the breadcrumb will not be drawn
 *    - **:adjust-elevation-on-scroll?**: is an optional boolean that identifies if the top bar should only elevate if we have scrolled down..
 *    - **:elevation**: is an optional number between 0 and 24 identifying the elevation of the top bar and side bars. Default value is 4
 *    - **:logo**: is an optional argument that can identify the logo which will appear on top of the main menu if open (and hidden otherwise). It can be either a react component or a hash map with the following keys:
 *      - **:style**: Identifies the additional styles to the box containing the logo (which centers it)
 *      - **:content**: Indentifies the react component to  be drawn
 *    - **:left-action**: is an optional react element or an array of react elements that will be rendered just after the open menu section
 *    - **:right-action**: is an optional react element or an array of react elements that will be rendered just at the end of the top bar
 *    - **:menu**: is an optional argument that can be used to identify the main menu. It should be noted that this argument can be of two formats. Either it can be an array of hashmaps (idenfitied below) or it can be hashmap. If a hash map then the keys will be:
 *      - **:top**: identifies the menus that will appear in the top of the sidebar. It is an array of hashmaps (identified below)
 *      - **:bottom**: identifies the menus that will appear in the bottom of the sidebar. It is an array of hashmaps (identified below). It is however recommended to keep this list smaller.
 *      - **:elevation**: If given then this will be the elevation of the side bar
 *      - **:width**: If given will identify the width of the drawer. Default is 40ch
 *      - **:show-hide?**: Identifies if the sidebar can be shown/hidden. Note that hidden in this case means that it is only partially appearing as this is the main menu bar. Default is that the drawer will always be shown
 *      - **:show-hide-on-hover?**: If the menu can be hidden then this variable will allow to identify whether it can be shown on mouse hover.
 * 
 *      It should be noted that the **:top**, **:bottom** or the **:menu** when given an array can have the following structure.
 *   
 *      - **:url**: a required string identifying the url that should be used for this page
 *      - **:params**: an optional argument that can contain a hashmap to be passed to the url when clicked.
 *      - **:on-click**: an optional function that is called when the list item is clicked
 *      - **:disabled?**: an optional boolean indicating whether the item can be clicked or not
 *      - **:icon**: an optional icon to appear in the item before the label
 *      - **:label**: a required label that should be given as the text.
 *      - **:message**: an optional string that will appear under the label
 *      - **:avatar**: an optional avatar that will appar before the label if given
 *      - **:action**: an optional react component that can be used to do an action on the item but note that if the item has sub-items then this will be ignored
 *      - **:items**: an optional array of subitems that have the same structure but cant have sub items
 *   
 *    - **:side-bar**: is an optional argument that can be used to identify the secondary side bar (on right if ltr and left if rtl). It should be noted that this argument can be of two formats. Either it can be a react component that will be immediately drawn or it can be a hash map with the following keys
 *      - **:overflow?**: is a boolean indicating whehter the sidebar should be on top of the content or if it should make the content width smaller. By default it is considered on top of
 *      - **:elevation**: If given then this will be the elevation of the side bar       
 *      - **:content**: is the react component to be drawn inside the side bar
 *   - **content**: is the react component that will be drawn inside the main container
 */
rams_ui.components.nav.navigation = (function rams_ui$components$nav$navigation(p__80894,content){
var map__80895 = p__80894;
var map__80895__$1 = (((((!((map__80895 == null))))?(((((map__80895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80895):map__80895);
var config = map__80895__$1;
var side_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"side-bar","side-bar",-1291968675));
var menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80895__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4));
var left_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"left-action","left-action",-981562810));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var breadcrumb_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"breadcrumb-config","breadcrumb-config",1725322311));
var logo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"logo","logo",1237980263));
var right_action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"right-action","right-action",-757049399));
var adjust_elevation_on_scroll_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"adjust-elevation-on-scroll?","adjust-elevation-on-scroll?",-2140506544));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80895__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-primary-drawer"].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),(window.innerWidth > (760)),new cljs.core.Keyword(null,"due-to-hover?","due-to-hover?",-1785851341),false], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));

rams_ui.util.rendering_id(uuid);

return (function (p__80897,content__$1){
var map__80898 = p__80897;
var map__80898__$1 = (((((!((map__80898 == null))))?(((((map__80898.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80898.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80898):map__80898);
var config__$1 = map__80898__$1;
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var menu__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"menu","menu",352255198));
var side_bar__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"side-bar","side-bar",-1291968675));
var breadcrumb_config__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"breadcrumb-config","breadcrumb-config",1725322311));
var ref__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var adjust_elevation_on_scroll_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80898__$1,new cljs.core.Keyword(null,"adjust-elevation-on-scroll?","adjust-elevation-on-scroll?",-2140506544));
var elevation__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__80898__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796),(4));
if(cljs.core.fn_QMARK_(ref__$1)){
(ref__$1.cljs$core$IFn$_invoke$arity$1 ? ref__$1.cljs$core$IFn$_invoke$arity$1(uuid) : ref__$1.call(null,uuid));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.nav.nav_helper,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"id","id",-1388402092),uuid),content__$1], null);
});
});
/**
 * Helper function that will toggle the value of a drawer on and off. It takes the id of the navigation along side with either :primary (refers to menu) or :secondary(refer to sidebar) to identify which drawer to open
 */
rams_ui.components.nav.toggle_drawer = (function rams_ui$components$nav$toggle_drawer(navigation_id,side){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|toggle-drawer-state","rams4ui|toggle-drawer-state",1526235436),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigation_id),"-",cljs.core.name(side),"-drawer"].join('')], null));
});
/**
 * helper function to set the selected item in the menu. This will search in both the top and bottom menu if url exist it will mark it. Note that if the same url is shared it will be marked in both.
 * 
 *   - **navigation-id**: Required argument which must be the id of the navigation created
 *   - **url**: Required argument which must be the url of the item we want to mark as selected
 */
rams_ui.components.nav.set_url_selected = (function rams_ui$components$nav$set_url_selected(navigation_id,url){
rams_ui.components.list.set_selected_item.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigation_id),"-primary-bottom-list"].join(''),url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));

return rams_ui.components.list.set_selected_item.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(navigation_id),"-primary-top-list"].join(''),url,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
});

//# sourceMappingURL=rams_ui.components.nav.js.map
