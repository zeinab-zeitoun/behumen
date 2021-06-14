goog.provide('rams_ui.components.alert');
rams_ui.components.alert.id = rams_ui.util.gen_uuid();
rams_ui.components.alert.use_styles = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close","close",1835149582),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"padding","padding",1660304693),(function (){var fexpr__80324 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80324.cljs$core$IFn$_invoke$arity$1 ? fexpr__80324.cljs$core$IFn$_invoke$arity$1(0.5) : fexpr__80324.call(null,0.5));
})()], null)], null);
}));
/**
 * helper function that allows to show an alert. Takes the following arguments
 * 
 *   - **config**: an optional hashmap identifying anything happening in the alert
 *   
 *  - **:actions**: an optional array of hashmaps identifying the buttons available to this alert. Each hashmap should be of the form
 *    ```
 *    {:label "button label"
 *     :color "primary" ; could be either primary or secondary
 *     :on-click (fn [] ...)
 *    }```
 *  - **:show-close?**: boolean to indicate if the close icon should be shown
 *  - **:type**: is an optional string indicating the severity of the alert. Potential values are "error" | "success" | "warning" | "info". If left nil then the notification is shown as a black box.
 *   - **message**: the string that would be shown in the box
 */
rams_ui.components.alert.show_alert = (function rams_ui$components$alert$show_alert(var_args){
var G__80326 = arguments.length;
switch (G__80326) {
case 1:
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$1 = (function (message){
return rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,message);
}));

(rams_ui.components.alert.show_alert.cljs$core$IFn$_invoke$arity$2 = (function (p__80327,message){
var map__80328 = p__80327;
var map__80328__$1 = (((((!((map__80328 == null))))?(((((map__80328.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80328.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80328):map__80328);
var config = map__80328__$1;
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var show_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"show-close?","show-close?",1373161976));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80328__$1,new cljs.core.Keyword(null,"type","type",1174270348));
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(rams_ui.components.alert.id,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"open?","open?",1238443125),true,new cljs.core.Keyword(null,"actions","actions",-812656882),actions,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"show-close?","show-close?",1373161976),show_close_QMARK_,new cljs.core.Keyword(null,"message","message",-406056002),message], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
}));

(rams_ui.components.alert.show_alert.cljs$lang$maxFixedArity = 2);

rams_ui.components.alert.hide_alert = (function rams_ui$components$alert$hide_alert(){
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.alert.id,new cljs.core.Keyword(null,"open?","open?",1238443125)], null),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
});
rams_ui.components.alert.alert_box_helper = (function rams_ui$components$alert$alert_box_helper(p__80330,state){
var map__80331 = p__80330;
var map__80331__$1 = (((((!((map__80331 == null))))?(((((map__80331.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80331.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80331):map__80331);
var hide_after_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"hide-after-ms","hide-after-ms",-758939961));
var show_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"show-close?","show-close?",1373161976));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80331__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var style = (rams_ui.components.alert.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.alert.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.alert.use_styles.call(null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.snackbar.snackbar,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"anchorOrigin","anchorOrigin",-2079372991),(function (){var G__80333 = position;
var G__80333__$1 = (((G__80333 instanceof cljs.core.Keyword))?G__80333.fqn:null);
switch (G__80333__$1) {
case "top-right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"top",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"right"], null);

break;
case "top-center":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"top",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"center"], null);

break;
case "top-left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"top",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"left"], null);

break;
case "bottom-right":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"bottom",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"right"], null);

break;
case "bottom-center":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"bottom",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"center"], null);

break;
case "bottom-left":
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"vertical","vertical",718696748),"bottom",new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),"left"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__80333__$1)].join('')));

}
})(),new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
rams_ui.components.alert.hide_alert();

if(cljs.core.fn_QMARK_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid()], null),(((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state) == null))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(state)], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = hide_after_ms;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hide_after_ms,(0));
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-hide-duration","auto-hide-duration",1058363602),hide_after_ms], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = show_close_QMARK_;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"action","action",-811238024),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"<>","<>",1280186386),(cljs.core.truth_(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state))?(function (){var iter__4529__auto__ = (function rams_ui$components$alert$alert_box_helper_$_iter__80334(s__80335){
return (new cljs.core.LazySeq(null,(function (){
var s__80335__$1 = s__80335;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80335__$1);
if(temp__5735__auto__){
var s__80335__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80335__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80335__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80337 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80336 = (0);
while(true){
if((i__80336 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__80336);
cljs.core.chunk_append(b__80337,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action):"secondary"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__80336,action,c__4527__auto__,size__4528__auto__,b__80337,s__80335__$2,temp__5735__auto__,style,map__80331,map__80331__$1,hide_after_ms,show_close_QMARK_,position,on_close){
return (function (){
rams_ui.components.alert.hide_alert();

return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
});})(i__80336,action,c__4527__auto__,size__4528__auto__,b__80337,s__80335__$2,temp__5735__auto__,style,map__80331,map__80331__$1,hide_after_ms,show_close_QMARK_,position,on_close))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action)], null));

var G__80343 = (i__80336 + (1));
i__80336 = G__80343;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80337),rams_ui$components$alert$alert_box_helper_$_iter__80334(cljs.core.chunk_rest(s__80335__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80337),null);
}
} else {
var action = cljs.core.first(s__80335__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"size","size",1098693007),"small",new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action):"secondary"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (action,s__80335__$2,temp__5735__auto__,style,map__80331,map__80331__$1,hide_after_ms,show_close_QMARK_,position,on_close){
return (function (){
rams_ui.components.alert.hide_alert();

return new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action);
});})(action,s__80335__$2,temp__5735__auto__,style,map__80331,map__80331__$1,hide_after_ms,show_close_QMARK_,position,on_close))
], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action)], null),rams_ui$components$alert$alert_box_helper_$_iter__80334(cljs.core.rest(s__80335__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(new cljs.core.Keyword(null,"actions","actions",-812656882).cljs$core$IFn$_invoke$arity$1(state));
})():null),(cljs.core.truth_(show_close_QMARK_)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"close","close",1835149582).cljs$core$IFn$_invoke$arity$1(style),new cljs.core.Keyword(null,"on-click","on-click",1632826543),rams_ui.components.alert.hide_alert], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.close.close], null)], null):null)], null))], null):null)], 0)),(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.lab.alert.alert,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"severity","severity",175684886),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state)], null),new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(state)], null):null)], null);
});
/**
 * draws a react component for alerts. Only one should be added per project. Takes the following kesy
 * 
 *   - **:hide-afer-ms**: is the number of milliseconds before the alert is autohidden
 *   - **:show-close?**: is boolean indicating if there should be a close icond
 *   - **:on-close**: is an optional function that will be called when the notification is hidden either automatically or by click
 *   - **:position**: is an optional keyword indicating where the alert should appear. Potential values are :top-left | :top-center | :top-right | :bottom-left | :bottom-center | :bottom-right. Default is :top-left
 */
rams_ui.components.alert.alert_box = (function rams_ui$components$alert$alert_box(p__80338){
var map__80339 = p__80338;
var map__80339__$1 = (((((!((map__80339 == null))))?(((((map__80339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80339):map__80339);
var hide_after_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80339__$1,new cljs.core.Keyword(null,"hide-after-ms","hide-after-ms",-758939961));
var show_close_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80339__$1,new cljs.core.Keyword(null,"show-close?","show-close?",1373161976));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80339__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80339__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(rams_ui.components.alert.id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),true], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.alert.alert_box_helper,cljs.core.deref(state)], null);
});

//# sourceMappingURL=rams_ui.components.alert.js.map
