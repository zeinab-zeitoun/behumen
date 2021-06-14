goog.provide('rams_ui.components.list');
rams_ui.components.list.change_selected_helper = (function rams_ui$components$list$change_selected_helper(orig_list,selected_key){
var vec__80660 = cljs.core.first(orig_list);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80660,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80660,(1),null);
var split_k = clojure.string.split.cljs$core$IFn$_invoke$arity$2(selected_key,/<|>/);
if((!((k == null)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.PersistentArrayMap.createAsIfByAssoc([k,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(v,new cljs.core.Keyword(null,"selected?","selected?",-742502788),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,selected_key)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.last(split_k))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,cljs.core.first(split_k)))))]),(function (){var G__80663 = cljs.core.rest(orig_list);
var G__80664 = selected_key;
return (rams_ui.components.list.change_selected_helper.cljs$core$IFn$_invoke$arity$2 ? rams_ui.components.list.change_selected_helper.cljs$core$IFn$_invoke$arity$2(G__80663,G__80664) : rams_ui.components.list.change_selected_helper.call(null,G__80663,G__80664));
})()], 0));
} else {
return null;
}
});
rams_ui.components.list.set_selected_to_false_if_possible = (function rams_ui$components$list$set_selected_to_false_if_possible(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80703 = arguments.length;
var i__4737__auto___80704 = (0);
while(true){
if((i__4737__auto___80704 < len__4736__auto___80703)){
args__4742__auto__.push((arguments[i__4737__auto___80704]));

var G__80705 = (i__4737__auto___80704 + (1));
i__4737__auto___80704 = G__80705;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.components.list.set_selected_to_false_if_possible.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.components.list.set_selected_to_false_if_possible.cljs$core$IFn$_invoke$arity$variadic = (function (states,items,p__80668){
var map__80669 = p__80668;
var map__80669__$1 = (((((!((map__80669 == null))))?(((((map__80669.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80669.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80669):map__80669);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80669__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var item = cljs.core.first(items);
var state = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(states,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)):null);
if((!((item == null)))){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected?","selected?",-742502788),false,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id], null)], 0))]):null),rams_ui.components.list.set_selected_to_false_if_possible.cljs$core$IFn$_invoke$arity$variadic(states,cljs.core.rest(items),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id], 0)),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?rams_ui.components.list.set_selected_to_false_if_possible.cljs$core$IFn$_invoke$arity$variadic(states,new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], 0)):null)], 0));
} else {
return null;
}
}));

(rams_ui.components.list.set_selected_to_false_if_possible.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.components.list.set_selected_to_false_if_possible.cljs$lang$applyTo = (function (seq80665){
var G__80666 = cljs.core.first(seq80665);
var seq80665__$1 = cljs.core.next(seq80665);
var G__80667 = cljs.core.first(seq80665__$1);
var seq80665__$2 = cljs.core.next(seq80665__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80666,G__80667,seq80665__$2);
}));

rams_ui.components.list.list_item_helper = (function rams_ui$components$list$list_item_helper(p__80671,item,id){
var map__80672 = p__80671;
var map__80672__$1 = (((((!((map__80672 == null))))?(((((map__80672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80672):map__80672);
var list_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80672__$1,new cljs.core.Keyword(null,"list-id","list-id",1757820635));
var list_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80672__$1,new cljs.core.Keyword(null,"list-state","list-state",1957387763));
var mark_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80672__$1,new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80672__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80672__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var click_fn = (function (_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(list_id,cljs.core.assoc_in(list_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(list_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
if(cljs.core.truth_(mark_selected_QMARK_)){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(list_id,rams_ui.components.list.change_selected_helper(list_state,[(cljs.core.truth_(parent_id)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_id),"<|>"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item))){
var fexpr__80674 = new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
return (fexpr__80674.cljs$core$IFn$_invoke$arity$0 ? fexpr__80674.cljs$core$IFn$_invoke$arity$0() : fexpr__80674.call(null));
} else {
return null;
}
});
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item.list_item,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"button","button",1456579943),true], null),(cljs.core.truth_(new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align","align",1964212802).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"href","href",-793805698).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"a"], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_fn], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(list_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"selected?","selected?",-742502788)], null));
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.not(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))) || (cljs.core.not(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(list_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)))));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),true], null):null)], 0)),(cljs.core.truth_(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_avatar.list_item_avatar,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(item))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_icon.list_item_icon,reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"icon","icon",1679606541).cljs$core$IFn$_invoke$arity$1(item))], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_text.list_item_text,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"secondary","secondary",-669381460),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(item)], null):null)], 0))], null),(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_item_secondary_action.list_item_secondary_action,(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),click_fn], null),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(list_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.expand_less.expand_less], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.expand_more.expand_more], null))], null):new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(item))], null):null)], null);
});
/**
 * creates a material ui list of items. The list can include a sublist of one level only. This is used heavily in drawers for example.
 * 
 *   - **config**: is a hash map of the list component. The hashmap takes includes several keys 
 *    - **:id**: is an optional keyword/string/number that uniquely identifies the list. Once given it would allow for maintaining whether sublists are open and if any are selected.
 *    - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one
 *    - **:mark-selected?**: is an optional boolean that identifies whether a clicked on list item will be selected or not. It should be noted that if the selected list item is a sub item then if the parent is collapsed then the parent will also be selected. If this is set to boolean then the **:id** is required
 *    - **:background-color**: is an optional background color that is by default "white"
 *    - **:elevation**: is an optional argument identifying the elvation of the item. Default is 3
 *    - **:subheader**: is an optional string that will appear at the top of the list
 *    - **:class-name**: is an optional class given to the paper component surronding the list
 *    - **:width**: is an optional value of the width of the menu. Can be any of the number defined in material-ui such as 20ch (for 20 characters) | 20px (for 20 pixels) | 20% (for 20% of the width of the parent)
 *    - **persistent?**: identifies that the state of the list will carry over from one page to the next
 *   - **items**: Array of hashmaps identifying each of the list items that are available such that each item has the following keys:
 *   - **:id**: an optional keyword/string/number that identifies this list item inside this list. It is useful to mark the item as selected using the helper function **set-selected-item**
 *   - **:on-click**: an optional function that is called when the list item is clicked
 *   - **:href**: an optional url that will be used to change the url of the page when clicked.  
 *   - **:disabled?**: an optional boolean indicating whether the item can be clicked or not
 *   - **:icon**: an optional icon to appear in the item before the label
 *   - **:label**: a required label that should be given as the text.
 *   - **:message**: an optional string that will appear under the label
 *   - **:avatar**: an optional avatar that will appar before the label if given
 *   - **:action**: an optional react component that can be used to do an action on the item but note that if the item has sub-items then this will be ignored
 *   - **:items**: an optional array of subitems that have the same structure but cant have sub items
 */
rams_ui.components.list.items_list = (function rams_ui$components$list$items_list(p__80675,items){
var map__80676 = p__80675;
var map__80676__$1 = (((((!((map__80676 == null))))?(((((map__80676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80676):map__80676);
var config = map__80676__$1;
var subheader = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"subheader","subheader",-1028810273));
var elevation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var mark_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80676__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var orig = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var list_state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
rams_ui.util.rendering_id(uuid);

return (function (p__80678,items__$1){
var map__80679 = p__80678;
var map__80679__$1 = (((((!((map__80679 == null))))?(((((map__80679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80679):map__80679);
var config__$1 = map__80679__$1;
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var subheader__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"subheader","subheader",-1028810273));
var mark_selected_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var ref__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var background_color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var elevation__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"elevation","elevation",-1609348796));
var class_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80679__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
if(cljs.core.fn_QMARK_(ref__$1)){
(ref__$1.cljs$core$IFn$_invoke$arity$1 ? ref__$1.cljs$core$IFn$_invoke$arity$1(uuid) : ref__$1.call(null,uuid));
} else {
}

if(cljs.core.truth_((function (){var and__4115__auto__ = mark_selected_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(orig),items__$1);
} else {
return and__4115__auto__;
}
})())){
cljs.core.reset_BANG_(orig,items__$1);

rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(list_state),rams_ui.components.list.set_selected_to_false_if_possible(cljs.core.deref(list_state),items__$1)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
}

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.paper.paper,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(elevation__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"elevation","elevation",-1609348796),elevation__$1], null):null),(cljs.core.truth_(class_name__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),class_name__$1], null):null),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),width__$1], null),(cljs.core.truth_(background_color__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"background-color","background-color",570434026),background_color__$1], null):null)], 0))], null):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list.list,(cljs.core.truth_(subheader__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subheader","subheader",-1028810273),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list_subheader.list_subheader,subheader__$1], null))], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$list$items_list_$_iter__80681(s__80682){
return (new cljs.core.LazySeq(null,(function (){
var s__80682__$1 = s__80682;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80682__$1);
if(temp__5735__auto__){
var s__80682__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80682__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80682__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80684 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80683 = (0);
while(true){
if((i__80683 < size__4528__auto__)){
var idx = cljs.core._nth(c__4527__auto__,i__80683);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items__$1,idx);
var item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item):cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
cljs.core.chunk_append(b__80684,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),item,item_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(list_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),"auto",new cljs.core.Keyword(null,"unmount-on-exit","unmount-on-exit",888846296),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list.list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"disable-padding","disable-padding",1331300353),true], null),(function (){var iter__4529__auto__ = ((function (i__80683,item,item_id,idx,c__4527__auto__,size__4528__auto__,b__80684,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name){
return (function rams_ui$components$list$items_list_$_iter__80681_$_iter__80685(s__80686){
return (new cljs.core.LazySeq(null,((function (i__80683,item,item_id,idx,c__4527__auto__,size__4528__auto__,b__80684,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name){
return (function (){
var s__80686__$1 = s__80686;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80686__$1);
if(temp__5735__auto____$1){
var s__80686__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80686__$2)){
var c__4527__auto____$1 = cljs.core.chunk_first(s__80686__$2);
var size__4528__auto____$1 = cljs.core.count(c__4527__auto____$1);
var b__80688 = cljs.core.chunk_buffer(size__4528__auto____$1);
if((function (){var i__80687 = (0);
while(true){
if((i__80687 < size__4528__auto____$1)){
var sub_idx = cljs.core._nth(c__4527__auto____$1,i__80687);
var sub_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item),sub_idx);
var sub_item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item):sub_idx);
cljs.core.chunk_append(b__80688,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),item_id,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),sub_item,sub_item_id], null));

var G__80706 = (i__80687 + (1));
i__80687 = G__80706;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80688),rams_ui$components$list$items_list_$_iter__80681_$_iter__80685(cljs.core.chunk_rest(s__80686__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80688),null);
}
} else {
var sub_idx = cljs.core.first(s__80686__$2);
var sub_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item),sub_idx);
var sub_item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item):sub_idx);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),item_id,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),sub_item,sub_item_id], null),rams_ui$components$list$items_list_$_iter__80681_$_iter__80685(cljs.core.rest(s__80686__$2)));
}
} else {
return null;
}
break;
}
});})(i__80683,item,item_id,idx,c__4527__auto__,size__4528__auto__,b__80684,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name))
,null,null));
});})(i__80683,item,item_id,idx,c__4527__auto__,size__4528__auto__,b__80684,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))));
})()], null)], null):null)], null));

var G__80707 = (i__80683 + (1));
i__80683 = G__80707;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80684),rams_ui$components$list$items_list_$_iter__80681(cljs.core.chunk_rest(s__80682__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80684),null);
}
} else {
var idx = cljs.core.first(s__80682__$2);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items__$1,idx);
var item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item):cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx));
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),item,item_id], null),(cljs.core.truth_(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(list_state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item_id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null)),new cljs.core.Keyword(null,"timeout","timeout",-318625318),"auto",new cljs.core.Keyword(null,"unmount-on-exit","unmount-on-exit",888846296),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.list.list,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component","component",1555936782),"div",new cljs.core.Keyword(null,"disable-padding","disable-padding",1331300353),true], null),(function (){var iter__4529__auto__ = ((function (item,item_id,idx,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name){
return (function rams_ui$components$list$items_list_$_iter__80681_$_iter__80689(s__80690){
return (new cljs.core.LazySeq(null,(function (){
var s__80690__$1 = s__80690;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__80690__$1);
if(temp__5735__auto____$1){
var s__80690__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__80690__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80690__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80692 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80691 = (0);
while(true){
if((i__80691 < size__4528__auto__)){
var sub_idx = cljs.core._nth(c__4527__auto__,i__80691);
var sub_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item),sub_idx);
var sub_item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item):sub_idx);
cljs.core.chunk_append(b__80692,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),item_id,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),sub_item,sub_item_id], null));

var G__80708 = (i__80691 + (1));
i__80691 = G__80708;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80692),rams_ui$components$list$items_list_$_iter__80681_$_iter__80689(cljs.core.chunk_rest(s__80690__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80692),null);
}
} else {
var sub_idx = cljs.core.first(s__80690__$2);
var sub_item = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item),sub_idx);
var sub_item_id = (cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(sub_item):sub_idx);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.list.list_item_helper,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"list-id","list-id",1757820635),uuid,new cljs.core.Keyword(null,"list-state","list-state",1957387763),cljs.core.deref(list_state),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"mark-selected?","mark-selected?",-419179226),mark_selected_QMARK___$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),item_id,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], null),sub_item,sub_item_id], null),rams_ui$components$list$items_list_$_iter__80681_$_iter__80689(cljs.core.rest(s__80690__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(item,item_id,idx,s__80682__$2,temp__5735__auto__,map__80679,map__80679__$1,config__$1,id__$1,subheader__$1,mark_selected_QMARK___$1,width__$1,ref__$1,background_color__$1,elevation__$1,class_name__$1,uuid,orig,list_state,map__80676,map__80676__$1,config,subheader,elevation,mark_selected_QMARK_,ref,background_color,width,id,persistent_QMARK_,class_name))
;
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(item))));
})()], null)], null):null)], null),rams_ui$components$list$items_list_$_iter__80681(cljs.core.rest(s__80682__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.range.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(items__$1)));
})())], null)], null);
});
});
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|set-selected-list-id","rams4ui|set-selected-list-id",-577555699),(function (db,p__80693){
var vec__80694 = p__80693;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80694,(0),null);
var list_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80694,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80694,(2),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80694,(3),null);
var state = rams_ui.util.get_db_value.cljs$core$IFn$_invoke$arity$variadic(db,list_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var to_select_item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,id);
return rams_ui.util.set_db_value.cljs$core$IFn$_invoke$arity$variadic(db,list_id,rams_ui.components.list.change_selected_helper(state,[(cljs.core.truth_(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(to_select_item))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(to_select_item)),"<|>"].join(''):null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)].join('')),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
}));
/**
 * helper function to set the selected item in the identified list. It should be noted that this function is not useful in case the original list configuration does not have mark-selected?
 * 
 *   - **list-id**: Required argument which must be the id of the list created
 *   - **id**: Required argument which must be an id of an item or a sub-item
 *   - **persistent?**: an optional argument that should only be based if the original list-id had in its configuration the **persistent?** set.
 */
rams_ui.components.list.set_selected_item = (function rams_ui$components$list$set_selected_item(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80709 = arguments.length;
var i__4737__auto___80710 = (0);
while(true){
if((i__4737__auto___80710 < len__4736__auto___80709)){
args__4742__auto__.push((arguments[i__4737__auto___80710]));

var G__80711 = (i__4737__auto___80710 + (1));
i__4737__auto___80710 = G__80711;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.components.list.set_selected_item.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.components.list.set_selected_item.cljs$core$IFn$_invoke$arity$variadic = (function (list_id,id,p__80700){
var map__80701 = p__80700;
var map__80701__$1 = (((((!((map__80701 == null))))?(((((map__80701.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80701.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80701):map__80701);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80701__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|set-selected-list-id","rams4ui|set-selected-list-id",-577555699),list_id,id,persistent_QMARK_], null));
}));

(rams_ui.components.list.set_selected_item.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.components.list.set_selected_item.cljs$lang$applyTo = (function (seq80697){
var G__80698 = cljs.core.first(seq80697);
var seq80697__$1 = cljs.core.next(seq80697);
var G__80699 = cljs.core.first(seq80697__$1);
var seq80697__$2 = cljs.core.next(seq80697__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80698,G__80699,seq80697__$2);
}));


//# sourceMappingURL=rams_ui.components.list.js.map
