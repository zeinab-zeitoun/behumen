goog.provide('rams_ui.components.cards');
rams_ui.components.cards.use_styles = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (theme){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"expand","expand",595248157),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(0deg)",new cljs.core.Keyword(null,"margin-left","margin-left",2015598377),"auto",new cljs.core.Keyword(null,"transition","transition",765692007),(function (){var G__80589 = "transform";
var G__80590 = ({"duration": cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(theme,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transitions","transitions",-2046216121),new cljs.core.Keyword(null,"duration","duration",1444101068),new cljs.core.Keyword(null,"shortest","shortest",-1179719805)], null))});
var fexpr__80588 = new cljs.core.Keyword(null,"create","create",-1301499256).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"transitions","transitions",-2046216121).cljs$core$IFn$_invoke$arity$1(theme));
return (fexpr__80588.cljs$core$IFn$_invoke$arity$2 ? fexpr__80588.cljs$core$IFn$_invoke$arity$2(G__80589,G__80590) : fexpr__80588.call(null,G__80589,G__80590));
})()], null),new cljs.core.Keyword(null,"expand-open","expand-open",699446112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"rotate(180deg)"], null)], null);
}));
var inner_text_80603 = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-more","show-more",-559964732),"show more"], null));
/**
 * Helper function that sets the text of hardcoded texts
 * 
 *  - **key**: Keyword indicating the text to use Options are:
 *     - **:show-more**: tooltip text of the expand/collapse button
 *  - **vlaue**: Text to show
 */
rams_ui.components.cards.set_text = (function rams_ui$components$cards$set_text(key,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(inner_text_80603,cljs.core.assoc,key,value);
});

rams_ui.components.cards.card_helper = (function rams_ui$components$cards$card_helper(p__80591){
var map__80592 = p__80591;
var map__80592__$1 = (((((!((map__80592 == null))))?(((((map__80592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80592):map__80592);
var config = map__80592__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"header","header",119441134));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"ref","ref",1289896967));
var icon_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"icon-type","icon-type",-1460110256));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"content","content",15833224));
var extra = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80592__$1,new cljs.core.Keyword(null,"extra","extra",1612569067));
var expanded = rams_ui.util.get_value(id);
var styles = (rams_ui.components.cards.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.cards.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.cards.use_styles.call(null));
if(cljs.core.fn_QMARK_(ref)){
(ref.cljs$core$IFn$_invoke$arity$1 ? ref.cljs$core$IFn$_invoke$arity$1(id) : ref.call(null,id));
} else {
}

return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card.card,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(config),new cljs.core.Keyword(null,"raised","raised",1890794098),new cljs.core.Keyword(null,"raised","raised",1890794098).cljs$core$IFn$_invoke$arity$1(config)], null),(cljs.core.truth_(header)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_header.card_header,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([header,(cljs.core.truth_(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"action","action",-811238024).cljs$core$IFn$_invoke$arity$1(header))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(header))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"subheader","subheader",-1028810273).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subheader","subheader",-1028810273),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subheader","subheader",-1028810273).cljs$core$IFn$_invoke$arity$1(header))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(header))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"avatar","avatar",-1607499307),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"avatar","avatar",-1607499307).cljs$core$IFn$_invoke$arity$1(header))], null):null)], 0))], null):null),(cljs.core.truth_(image)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_media.card_media,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"classes","classes",2037804510),new cljs.core.Keyword(null,"classes","classes",2037804510).cljs$core$IFn$_invoke$arity$1(image),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"src","src",-1651076051).cljs$core$IFn$_invoke$arity$1(image),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(image)], null)], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_content.card_content,content], null),(cljs.core.truth_((function (){var or__4126__auto__ = actions;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return extra;
}
})())?new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_actions.card_actions,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-spacing","disable-spacing",412825474),true], null),(cljs.core.truth_(actions)?actions:null),(cljs.core.truth_(extra)?(function (){var temp_button = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"className","className",-1983287057),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expand","expand",595248157).cljs$core$IFn$_invoke$arity$1(styles)], null),(cljs.core.truth_(cljs.core.deref(expanded))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expand-open","expand-open",699446112).cljs$core$IFn$_invoke$arity$1(styles)], null):null))),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return rams_ui.util.set_value(id,cljs.core.not(cljs.core.deref(expanded)));
}),new cljs.core.Keyword(null,"aria-expanded","aria-expanded",-1360942393),cljs.core.deref(expanded),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"show-more","show-more",-559964732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inner_text_80603))], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80594 = icon_type;
var G__80594__$1 = (((G__80594 instanceof cljs.core.Keyword))?G__80594.fqn:null);
switch (G__80594__$1) {
case "sharp":
return reagent_material_ui.icons.expand_more_sharp.expand_more_sharp;

break;
case "outline":
return reagent_material_ui.icons.expand_more_outlined.expand_more_outlined;

break;
case "rounded":
return reagent_material_ui.icons.expand_more_rounded.expand_more_rounded;

break;
case "two-tone":
return reagent_material_ui.icons.expand_more_two_tone.expand_more_two_tone;

break;
default:
return reagent_material_ui.icons.expand_more.expand_more;

}
})()], null)], null);
if(cljs.core.truth_(new cljs.core.Keyword(null,"show-more","show-more",-559964732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inner_text_80603)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.tooltip.tooltip,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"show-more","show-more",-559964732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(inner_text_80603))], null),temp_button], null);
} else {
return temp_button;
}
})():null)], null):null),(cljs.core.truth_(extra)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.collapse.collapse,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.deref(expanded),new cljs.core.Keyword(null,"timeout","timeout",-318625318),"auto",new cljs.core.Keyword(null,"unmount-on-exit","unmount-on-exit",888846296),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.card_content.card_content,extra], null)], null):null)], null);
});
/**
 * creates a material ui card without the need to have to write a lot of code for the headers actions and even collapse.
 * 
 *   - **config**: is a hash map of the tabs component. The hashmap takes arguments as defined in [material-ui](https://material-ui.com/api/card/). The hash map includes several keys that are extra on the original set
 *    - **:id**: is an optional keyword/string/number/array that uniquely identifies the tab. Once given it would allow for two very important functions:
 *         - Changing the whether the card is expanded or not through dispatching :set-page-item with the given id and any value other nil would mean the card is expanded
 *         - Allowing the state of the card (expanded or not) to persist when using back or breadcrumb
 *     - **:ref**: is an optional function that takes one argument which is the id of the element. This is useful in case you want to get the id of the item without having to provide one
 *    - **:header**: is an optional hashmap describing the top of the header. It must fill the criteria of [card-header|https://material-ui.com/api/card-header/]
 *    - **:actions**: is an optional array that contains an array of components that will appear in the bottom of the card. Usually it is an array of icon buttons
 *    - **:image**: is an optional image hashmap identifying an image that will be drawn at the top of the card but below the header. It is made of
 *        - **:title**: optional title of the image
 *        - **:src**: required url of the image to be drawn
 *        - **:classes**: array of classes to be given to the image 
 *    - **:img-title**: is an optional title that will be put on the image if an **:img-src** provided.
 *    - **:icon-type**: an optional parameter that will indicate the styling of the collapse/expand icon in case **extra-content** is given. Options are :rounded | :outlined | :two-tone | :sharp | :filled. Default is :filled  
 *   - **content**: React component that is the value of the card
 *   - **extra-content**: React component that is the value of the extra content of the card that will appear if expanded. If this extra argument is given then automatically an expand icon button is added to the list of actions and drawn. By default the extra content is collapsed
 */
rams_ui.components.cards.card = (function rams_ui$components$cards$card(var_args){
var G__80596 = arguments.length;
switch (G__80596) {
case 1:
return rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$1 = (function (content){
var uuid = rams_ui.util.gen_uuid();
rams_ui.util.rendering_id(uuid);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.cards.card_helper,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"content","content",15833224),content], null)], null);
}));

(rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$2 = (function (p__80597,content){
var map__80598 = p__80597;
var map__80598__$1 = (((((!((map__80598 == null))))?(((((map__80598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80598):map__80598);
var config = map__80598__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"header","header",119441134));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80598__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.rendering_id(uuid);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.cards.card_helper,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),content], 0))], null);
}));

(rams_ui.components.cards.card.cljs$core$IFn$_invoke$arity$3 = (function (p__80600,content,extra_content){
var map__80601 = p__80600;
var map__80601__$1 = (((((!((map__80601 == null))))?(((((map__80601.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80601.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80601):map__80601);
var config = map__80601__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var header = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"header","header",119441134));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80601__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.rendering_id(uuid);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.cards.card_helper,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"extra","extra",1612569067),extra_content], 0))], null);
}));

(rams_ui.components.cards.card.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=rams_ui.components.cards.js.map
