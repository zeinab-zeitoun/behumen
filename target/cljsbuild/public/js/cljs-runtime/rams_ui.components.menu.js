goog.provide('rams_ui.components.menu');
rams_ui.components.menu.menu_helper = (function rams_ui$components$menu$menu_helper(p__68605,menu_items){
var map__68606 = p__68605;
var map__68606__$1 = (((((!((map__68606 == null))))?(((((map__68606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68606):map__68606);
var config = map__68606__$1;
var badge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"badge","badge",-1277997221));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var hide_on_away_click_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68606__$1,new cljs.core.Keyword(null,"hide-on-away-click?","hide-on-away-click?",-1908638945),true);
var end_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"end-icon","end-icon",280632578));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var start_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"start-icon","start-icon",2126812756));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68606__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var menu_state = rams_ui.util.get_value(uuid);
return (function (p__68608,menu_items__$1){
var map__68609 = p__68608;
var map__68609__$1 = (((((!((map__68609 == null))))?(((((map__68609.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68609.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68609):map__68609);
var config__$1 = map__68609__$1;
var badge__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"badge","badge",-1277997221));
var tooltip__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var hide_on_away_click_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68609__$1,new cljs.core.Keyword(null,"hide-on-away-click?","hide-on-away-click?",-1908638945),true);
var end_icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"end-icon","end-icon",280632578));
var max_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var layout__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var ref__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_click__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var start_icon__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"start-icon","start-icon",2126812756));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68609__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.fn_QMARK_(ref__$1)){
(ref__$1.cljs$core$IFn$_invoke$arity$1 ? ref__$1.cljs$core$IFn$_invoke$arity$1(uuid) : ref__$1.call(null,uuid));
} else {
}

var close_fn = (function (){
rams_ui.util.set_value(uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),null,new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));

if(cljs.core.fn_QMARK_(on_click__$1)){
return (on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(false) : on_click__$1.call(null,false));
} else {
return null;
}
});
var temp_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(icon__$1)?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),tooltip__$1,new cljs.core.Keyword(null,"id","id",-1388402092),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-button"].join(''),new cljs.core.Keyword(null,"aria-has-popup","aria-has-popup",-63948011),"true",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (evt){
if(cljs.core.truth_(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)))){
close_fn();
} else {
rams_ui.util.set_value(uuid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"anchor","anchor",1549638489),document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid),"-button"].join('')),new cljs.core.Keyword(null,"open?","open?",1238443125),true], null));
}

if(cljs.core.fn_QMARK_(on_click__$1)){
var G__68611 = cljs.core.not(new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)));
return (on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(G__68611) : on_click__$1.call(null,G__68611));
} else {
return null;
}
})], null),(cljs.core.truth_(start_icon__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(start_icon__$1)], null):null),(cljs.core.truth_(end_icon__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-icon","end-icon",280632578),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(end_icon__$1)], null):null)], 0)),(cljs.core.truth_(icon__$1)?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(icon__$1):label__$1)], null);
var temp_render = (cljs.core.truth_(badge__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.badge.badge,badge__$1,temp_button], null):temp_button);
var menu_list_helper = cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$menu$menu_helper_$_iter__68612(s__68613){
return (new cljs.core.LazySeq(null,(function (){
var s__68613__$1 = s__68613;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68613__$1);
if(temp__5735__auto__){
var s__68613__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68613__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68613__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68615 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68614 = (0);
while(true){
if((i__68614 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__68614);
cljs.core.chunk_append(b__68615,(cljs.core.truth_(new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.divider.divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),(2)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function (evt){
close_fn();

if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__68616 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
return (fexpr__68616.cljs$core$IFn$_invoke$arity$0 ? fexpr__68616.cljs$core$IFn$_invoke$arity$0() : fexpr__68616.call(null));
} else {
return null;
}
});})(i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__68617 = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1(((function (i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null);
});})(i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
);
return (fexpr__68617.cljs$core$IFn$_invoke$arity$0 ? fexpr__68617.cljs$core$IFn$_invoke$arity$0() : fexpr__68617.call(null));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"inherit",new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_icon.list_item_icon,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))], null):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68618(s__68619){
return (new cljs.core.LazySeq(null,((function (i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function (){
var s__68619__$1 = s__68619;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68619__$1);
if(temp__5735__auto____$1){
var s__68619__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68619__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__68619__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__68621 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__68620 = (0);
while(true){
if((i__68620 < size__4528__auto____$1)){
var action = cljs.core._nth(c__4527__auto____$1,i__68620);
cljs.core.chunk_append(b__68621,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null));

var G__68661 = (i__68620 + (1));
i__68620 = G__68661;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68621),rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68618(cljs.core.chunk_rest(s__68619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68621),null);
}
} else {
var action = cljs.core.first(s__68619__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null),rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68618(cljs.core.rest(s__68619__$2)));
}
} else {
return null;
}
break;
}
});})(i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
,null,null));
});})(i__68614,item,c__4527__auto__,size__4528__auto__,b__68615,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
;
return iter__4529__auto__(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item));
})()):null)], null)));

var G__68662 = (i__68614 + (1));
i__68614 = G__68662;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68615),rams_ui$components$menu$menu_helper_$_iter__68612(cljs.core.chunk_rest(s__68613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68615),null);
}
} else {
var item = cljs.core.first(s__68613__$2);
return cljs.core.cons((cljs.core.truth_(new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.divider.divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),(2)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function (evt){
close_fn();

if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__68622 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
return (fexpr__68622.cljs$core$IFn$_invoke$arity$0 ? fexpr__68622.cljs$core$IFn$_invoke$arity$0() : fexpr__68622.call(null));
} else {
return null;
}
});})(item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__68623 = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1(((function (item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null);
});})(item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
);
return (fexpr__68623.cljs$core$IFn$_invoke$arity$0 ? fexpr__68623.cljs$core$IFn$_invoke$arity$0() : fexpr__68623.call(null));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"inherit",new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_icon.list_item_icon,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))], null):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id){
return (function rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68624(s__68625){
return (new cljs.core.LazySeq(null,(function (){
var s__68625__$1 = s__68625;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68625__$1);
if(temp__5735__auto____$1){
var s__68625__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68625__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68625__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68627 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68626 = (0);
while(true){
if((i__68626 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__68626);
cljs.core.chunk_append(b__68627,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null));

var G__68663 = (i__68626 + (1));
i__68626 = G__68663;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68627),rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68624(cljs.core.chunk_rest(s__68625__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68627),null);
}
} else {
var action = cljs.core.first(s__68625__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null),rams_ui$components$menu$menu_helper_$_iter__68612_$_iter__68624(cljs.core.rest(s__68625__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(item,s__68613__$2,temp__5735__auto__,close_fn,temp_button,temp_render,map__68609,map__68609__$1,config__$1,badge__$1,tooltip__$1,hide_on_away_click_QMARK___$1,end_icon__$1,max_height__$1,layout__$1,ref__$1,width__$1,icon__$1,on_click__$1,label__$1,start_icon__$1,id__$1,uuid,menu_state,map__68606,map__68606__$1,config,badge,tooltip,hide_on_away_click_QMARK_,end_icon,max_height,layout,ref,width,icon,on_click,label,start_icon,id))
;
return iter__4529__auto__(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item));
})()):null)], null)),rams_ui$components$menu$menu_helper_$_iter__68612(cljs.core.rest(s__68613__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(menu_items__$1);
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,(cljs.core.truth_(tooltip__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),tooltip__$1], null),temp_render], null):temp_render),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.not(hide_on_away_click_QMARK___$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return layout__$1;
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.popper.popper,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"anchor-el","anchor-el",-1371463966),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"transition","transition",765692007),true,new cljs.core.Keyword(null,"placement","placement",768366651),(cljs.core.truth_(layout__$1)?layout__$1:"bottom-end"),new cljs.core.Keyword(null,"disable-portal","disable-portal",-855440915),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.paper.paper,(cljs.core.truth_((function (){var or__4126__auto__ = max_height__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return width__$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(max_height__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height__$1], null):null),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null):null)], 0))], null):null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grow.grow,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"in","in",-1531184865),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.click_away_listener.click_away_listener,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click-away","on-click-away",-945525351),(cljs.core.truth_(hide_on_away_click_QMARK___$1)?close_fn:null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu_list.menu_list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-focus-item","auto-focus-item",2096636202),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765),(function (evt){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Tab",evt.key)){
evt.preventDefault();

return close_fn();
} else {
return null;
}
})], null),menu_list_helper], null)], null)], null)], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu.menu,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"anchor-el","anchor-el",-1371463966),new cljs.core.Keyword(null,"anchor","anchor",1549638489).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"keep-mounted","keep-mounted",1113011715),true,new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return close_fn();
})], null),(cljs.core.truth_((function (){var or__4126__auto__ = width__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_height__$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"PaperProps","PaperProps",-130726759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(max_height__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height__$1], null):null),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null):null)], 0))], null)], null):null)], 0)),menu_list_helper], null))], null);
});
});
/**
 * creates a material ui menu that appears when clicking an icon without the need to have to write a lot of code for the headers actions and even collapse.
 * 
 *   - **config**: is a hash map of the tabs component. The hashmap takes arguments as defined in [material-ui](https://material-ui.com/api/cards/). The hash map includes several keys that are extra on the original set
 *    - **:id**: is an optional keyword/string/number/array that uniquely identifies the menu. Once given it would allow for two very important functions:
 *         - Changing whether the menu is open or not through dispatching :set-page-item with the given id and the value must be the following hashmap
 *           ```clojure
 *            {:anchor (.getElementById js/document
 *                                     (str id "-button"))
 *             :open? true}
 *           ```
 *         - Allowing the state of the card (expanded or not) to persist when using back or breadcrumb
 *    - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one 
 *    - **:on-click**: is an optional function that will be called when the menu is opened by the user. It gives one argument which is the state of the menu (ie open or not)
 *    - **:hide-on-away-click?**: is an optional boolean indicating whether clicking outside the menu will close the menu or not. 
 *    - **:max-height**: is an optional value of the maximum height of the menu allowed.
 *    - **:icon**: a required react component that will define the icon whose click will show the menu
 *    - **:width**: is an optional value of the width of the menu. Can be any of the number defined in material-ui such as 20ch (for 20 characters) | 20px (for 20 pixels) | 20% (for 20% of the width of the parent)
 *    - **:tooltip**: is an optional text that will appear as tooltip under the icon button 
 *    - **:badge**: an optional hashmap indicating that a badge should be shown. The hashmap must follow the information in [doc|https://material-ui.com/api/badge/]
 *   - **menu-items**: Array of hashmaps identifying each of the menu items that are available such that each item has the following keys:
 *   - **:divider?**: an optional parameter indicating that this item is only a divider and therefore all other keys will be ignored.
 *   - **:on-click**: required function to be called when the item is clicked. It is not required if 
 *   - **:disabled?**: an optional boolean indicating whether the item can be clicked or not
 *   - **:icon**: an optional icon to appear in the item before the label
 *   - **:label**: a required label that should be given as the text. Note that if the width of this label is bigger then allowed width then it will automatically be truncated
 *   - **:actions**: an optional array of hashmaps describing potential actions to be done on the item. Each hashmap can have the following keywords.
 *       - **:color**: an optional string indicating the color to be set for the action. Potential options are primary | secondary | default
 *       - **:icon**: an optional component icon to be drawn. If this is given with a label it will be before the label
 *       - **:label**: an optional string indicating the text of the button
 */
rams_ui.components.menu.icon_menu = (function rams_ui$components$menu$icon_menu(p__68628,menu_items){
var map__68629 = p__68628;
var map__68629__$1 = (((((!((map__68629 == null))))?(((((map__68629.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68629.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68629):map__68629);
var config = map__68629__$1;
var badge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"badge","badge",-1277997221));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var hide_on_away_click_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68629__$1,new cljs.core.Keyword(null,"hide-on-away-click?","hide-on-away-click?",-1908638945),true);
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68629__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.menu.menu_helper,config,menu_items], null);
});
/**
 * creates a material ui menu that appears when clicking a button without the need to have to write a lot of code for the headers actions and even collapse.
 * 
 *   - **config**: is a hash map of the tabs component. The hashmap takes arguments as defined in [material-ui](https://material-ui.com/api/cards/). The hash map includes several keys that are extra on the original set
 *    - **:id**: is an optional keyword/string/number/array that uniquely identifies the menu. Once given it would allow for two very important functions:
 *         - Changing whether the menu is open or not through dispatching :set-page-item with the given id and the value must be the following hashmap
 *           ```clojure
 *            {:anchor (.getElementById js/document
 *                                     (str id "-button"))
 *             :open? true}
 *           ```
 *         - Allowing the state of the card (expanded or not) to persist when using back or breadcrumb
 *    - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one 
 *    - **:on-click**: is an optional function that will be called when the menu is opened by the user. It gives one argument which is the state of the menu (ie open or not)
 *    - **:hide-on-away-click?**: is an optional boolean indicating whether clicking outside the menu will close the menu or not. 
 *    - **:max-height**: is an optional value of the maximum height of the menu allowed.
 *    - **:width**: is an optional value of the width of the menu. Can be any of the number defined in material-ui such as 20ch (for 20 characters) | 20px (for 20 pixels) | 20% (for 20% of the width of the parent)
 *    - **:tooltip**: is an optional text that will appear as tooltip under the icon button
 *    - **:label**: a required string that will define the label of the button whose click will show the menu
 *    - **:start-icon**: an optional react component that will draw an icon before the label
 *    - **:end-icon**: an optional react component that will draw an icon after the label
 *    - **:badge**: an optional hashmap indicating that a badge should be shown. The hashmap must follow the information in [doc](https://material-ui.com/api/badge/)
 *   - **menu-items**: Array of hashmaps identifying each of the menu items that are available such that each item has the following keys:
 *   - **:divider?**: an optional parameter indicating that this item is only a divider and therefore all other keys will be ignored.
 *   - **:on-click**: required function to be called when the item is clicked. It is not required if 
 *   - **:disabled?**: an optional boolean indicating whether the item can be clicked or not
 *   - **:icon**: an optional icon to appear in the item before the label
 *   - **:label**: a required label that should be given as the text. Note that if the width of this label is bigger then allowed width then it will automatically be truncated
 *   - **:actions**: an optional array of hashmaps describing potential actions to be done on the item. Each hashmap can have the following keywords.
 *       - **:color**: an optional string indicating the color to be set for the action. Potential options are primary | secondary | default
 *       - **:icon**: an optional component icon to be drawn. If this is given with a label it will be before the label
 *       - **:label**: an optional string indicating the text of the button
 */
rams_ui.components.menu.button_menu = (function rams_ui$components$menu$button_menu(p__68631,menu_items){
var map__68632 = p__68631;
var map__68632__$1 = (((((!((map__68632 == null))))?(((((map__68632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68632):map__68632);
var config = map__68632__$1;
var badge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"badge","badge",-1277997221));
var tooltip = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var hide_on_away_click_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__68632__$1,new cljs.core.Keyword(null,"hide-on-away-click?","hide-on-away-click?",-1908638945),true);
var end_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"end-icon","end-icon",280632578));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var start_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"start-icon","start-icon",2126812756));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68632__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.menu.menu_helper,config,menu_items], null);
});
rams_ui.components.menu.context_menu_helper = (function rams_ui$components$menu$context_menu_helper(p__68634,menu_items){
var map__68635 = p__68634;
var map__68635__$1 = (((((!((map__68635 == null))))?(((((map__68635.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68635.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68635):map__68635);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68635__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var menu_state = rams_ui.util.get_value(id);
var close_fn = (function (){
return rams_ui.util.set_value(id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null),new cljs.core.Keyword(null,"open?","open?",1238443125),false], null));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu.menu,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"anchor-reference","anchor-reference",427661210),"anchorPosition",new cljs.core.Keyword(null,"anchor-position","anchor-position",379564665),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"keep-mounted","keep-mounted",1113011715),true,new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(menu_state)),new cljs.core.Keyword(null,"on-close","on-close",-761178394),close_fn], null),(cljs.core.truth_((function (){var or__4126__auto__ = width;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return max_height;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"PaperProps","PaperProps",-130726759),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(max_height)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-height","max-height",-612563804),max_height], null):null),(cljs.core.truth_(width)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width], null):null)], 0))], null)], null):null)], 0)),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$menu$context_menu_helper_$_iter__68637(s__68638){
return (new cljs.core.LazySeq(null,(function (){
var s__68638__$1 = s__68638;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__68638__$1);
if(temp__5735__auto__){
var s__68638__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__68638__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68638__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68640 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68639 = (0);
while(true){
if((i__68639 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__68639);
cljs.core.chunk_append(b__68640,(cljs.core.truth_(new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.divider.divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),(2)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function (evt){
close_fn();

if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__68641 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
return (fexpr__68641.cljs$core$IFn$_invoke$arity$0 ? fexpr__68641.cljs$core$IFn$_invoke$arity$0() : fexpr__68641.call(null));
} else {
return null;
}
});})(i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__68642 = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1(((function (i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null);
});})(i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
);
return (fexpr__68642.cljs$core$IFn$_invoke$arity$0 ? fexpr__68642.cljs$core$IFn$_invoke$arity$0() : fexpr__68642.call(null));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"inherit",new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_icon.list_item_icon,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))], null):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68643(s__68644){
return (new cljs.core.LazySeq(null,((function (i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function (){
var s__68644__$1 = s__68644;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68644__$1);
if(temp__5735__auto____$1){
var s__68644__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68644__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__68644__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__68646 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__68645 = (0);
while(true){
if((i__68645 < size__4528__auto____$1)){
var action = cljs.core._nth(c__4527__auto____$1,i__68645);
cljs.core.chunk_append(b__68646,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null));

var G__68664 = (i__68645 + (1));
i__68645 = G__68664;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68646),rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68643(cljs.core.chunk_rest(s__68644__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68646),null);
}
} else {
var action = cljs.core.first(s__68644__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null),rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68643(cljs.core.rest(s__68644__$2)));
}
} else {
return null;
}
break;
}
});})(i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
,null,null));
});})(i__68639,item,c__4527__auto__,size__4528__auto__,b__68640,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
;
return iter__4529__auto__(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item));
})()):null)], null)));

var G__68665 = (i__68639 + (1));
i__68639 = G__68665;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68640),rams_ui$components$menu$context_menu_helper_$_iter__68637(cljs.core.chunk_rest(s__68638__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68640),null);
}
} else {
var item = cljs.core.first(s__68638__$2);
return cljs.core.cons((cljs.core.truth_(new cljs.core.Keyword(null,"divider?","divider?",1882560157).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.divider.divider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"m","m",1632677161),(2)], null)], null):new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.menu_item.menu_item,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function (evt){
close_fn();

if(cljs.core.fn_QMARK_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__68647 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
return (fexpr__68647.cljs$core$IFn$_invoke$arity$0 ? fexpr__68647.cljs$core$IFn$_invoke$arity$0() : fexpr__68647.call(null));
} else {
return null;
}
});})(item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"className","className",-1983287057),new cljs.core.Keyword(null,"root","root",-448657453).cljs$core$IFn$_invoke$arity$1((function (){var fexpr__68648 = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1(((function (item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function (_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"root","root",-448657453),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),"space-between"], null)], null);
});})(item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
);
return (fexpr__68648.cljs$core$IFn$_invoke$arity$0 ? fexpr__68648.cljs$core$IFn$_invoke$arity$0() : fexpr__68648.call(null));
})())], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.typography.typography,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"variant","variant",-424354234),"inherit",new cljs.core.Keyword(null,"no-wrap","no-wrap",1249460674),true], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.grid.grid,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"display","display",242065432),"block",new cljs.core.Keyword(null,"text-overflow","text-overflow",-1022366814),"ellipsis",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"hidden"], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_icon.list_item_icon,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))], null):null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = ((function (item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height){
return (function rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68649(s__68650){
return (new cljs.core.LazySeq(null,(function (){
var s__68650__$1 = s__68650;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__68650__$1);
if(temp__5735__auto____$1){
var s__68650__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__68650__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__68650__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__68652 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__68651 = (0);
while(true){
if((i__68651 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__68651);
cljs.core.chunk_append(b__68652,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null));

var G__68666 = (i__68651 + (1));
i__68651 = G__68666;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__68652),rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68649(cljs.core.chunk_rest(s__68650__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__68652),null);
}
} else {
var action = cljs.core.first(s__68650__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent_material_ui.core.icon_button.icon_button:reagent_material_ui.core.button.button),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"size","size",1098693007),"small"], null),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"text"], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-icon","start-icon",2126812756),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action))], null):null)], 0)),(cljs.core.truth_((function (){var and__4115__auto__ = new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action));
} else {
return and__4115__auto__;
}
})())?reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(action)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action))], null),rams_ui$components$menu$context_menu_helper_$_iter__68637_$_iter__68649(cljs.core.rest(s__68650__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(item,s__68638__$2,temp__5735__auto__,menu_state,close_fn,map__68635,map__68635__$1,id,width,max_height))
;
return iter__4529__auto__(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(item));
})()):null)], null)),rams_ui$components$menu$context_menu_helper_$_iter__68637(cljs.core.rest(s__68638__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(menu_items);
})())], null);
});
/**
 * create a material ui context menu which is a menu that appears on the right click. This function takes the following arguments
 * 
 * - **config**: is a hash map of the navigation component. The hashmap takes includes several keys 
 *    - **:id**: is an optional keyword/string/number that uniquely identifies the item.
 *    - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one.
 *    - **:width**: is an optional value to identify the width of the menu
 *    - **:max-height**: is an optional value identifying the max height allowed for the menu
 * - **menu-items**: Array of hashmaps identifying each of the menu items that are available such that each item has the following keys:
 *   - **:divider?**: an optional parameter indicating that this item is only a divider and therefore all other keys will be ignored.
 *   - **:on-click**: required function to be called when the item is clicked. It is not required if 
 *   - **:disabled?**: an optional boolean indicating whether the item can be clicked or not
 *   - **:icon**: an optional icon to appear in the item before the label
 *   - **:label**: a required label that should be given as the text. Note that if the width of this label is bigger then allowed width then it will automatically be truncated
 *   - **:actions**: an optional array of hashmaps describing potential actions to be done on the item. Each hashmap can have the following keywords.
 *       - **:color**: an optional string indicating the color to be set for the action. Potential options are primary | secondary | default
 *       - **:icon**: an optional component icon to be drawn. If this is given with a label it will be before the label
 *       - **:label**: an optional string indicating the text of the button
 * - **content**: is the react component that will be drawn where the if the right menu is clicked our context menu will appear
 */
rams_ui.components.menu.context_menu = (function rams_ui$components$menu$context_menu(var_args){
var G__68654 = arguments.length;
switch (G__68654) {
case 2:
return rams_ui.components.menu.context_menu.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rams_ui.components.menu.context_menu.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rams_ui.components.menu.context_menu.cljs$core$IFn$_invoke$arity$2 = (function (menu_items,content){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.menu.context_menu,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),rams_ui.util.gen_uuid()], null),menu_items,content], null);
}));

(rams_ui.components.menu.context_menu.cljs$core$IFn$_invoke$arity$3 = (function (p__68655,menu_items,content){
var map__68656 = p__68655;
var map__68656__$1 = (((((!((map__68656 == null))))?(((((map__68656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68656):map__68656);
var config = map__68656__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68656__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.rendering_id(uuid);

return (function (p__68658,menu_items__$1,content__$1){
var map__68659 = p__68658;
var map__68659__$1 = (((((!((map__68659 == null))))?(((((map__68659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__68659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__68659):map__68659);
var config__$1 = map__68659__$1;
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var max_height__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"max-height","max-height",-612563804));
var ref__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68659__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
if(cljs.core.fn_QMARK_(ref__$1)){
(ref__$1.cljs$core$IFn$_invoke$arity$1 ? ref__$1.cljs$core$IFn$_invoke$arity$1(uuid) : ref__$1.call(null,uuid));
} else {
}

return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),(function (evt){
evt.preventDefault();

return rams_ui.util.set_value(id__$1,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"top","top",-1856271961),(evt.clientY - (4)),new cljs.core.Keyword(null,"left","left",-399115937),(evt.clientX - (2))], null)], null));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"context-menu"], null)], null),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(content__$1),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.menu.context_menu_helper,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"id","id",-1388402092),uuid),menu_items__$1], null)], null);
});
}));

(rams_ui.components.menu.context_menu.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rams_ui.components.menu.js.map
