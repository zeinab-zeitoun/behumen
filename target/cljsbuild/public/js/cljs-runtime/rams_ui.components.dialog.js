goog.provide('rams_ui.components.dialog');
var module$node_modules$$material_ui$core$esm$useMediaQuery$index=shadow.js.require("module$node_modules$$material_ui$core$esm$useMediaQuery$index", {});
/**
 * creates a material ui modal dialog. This dialog will only be opened if the id value is set to true. The function takes the following configuration keys. Note that the dialog will be full screen if the screen is on mobile.
 * 
 *   - **:id**: is a required keyword/string/number/array that identifies the state of modal whether open or closed.
 *   - **:title**: is an optional title of the dialog
 *   - **:message**: is an optional text message that shows as the first part of the dialog content
 *   - **:content**: is an optional React component to be drawn. This usually is a form or block of input fields
 *   - **:width**: is an optional argument indicating the width of the modal The optional values are xs | sm | md | lg | xl. Default value is sm
 *   - **:allow-escape?**: is an optional boolean indicating whether the modal can be hidden by clicking on the backdrop or typing Esc. Default is true
 *   - **:on-escape**: is an optional function that will be called. Has no effect if **:allow-escape?** is false
 *   - **:on-close**: is an optional function that will be called once the modal is to be closed
 *   - **:actions**: is an optional array of hashmaps identifying the buttons at the footer of the dialog. Each hashmap should have a label key and an on-click key. Optionally they can have a color key which can be secondary | primary
 *   - **:show-dividers?**: is an optional argument indicating if there should be a horizontal line between title content and footer.
 *   - **persistent?**: identifies that the state of the odal will carry over from one page to the next
 *   - **model**: an optional ratom to save the **id** in. Note that we dont recomend using this as it cant be saved from page to page
 */
rams_ui.components.dialog.modal = (function rams_ui$components$dialog$modal(p__69196){
var map__69197 = p__69196;
var map__69197__$1 = (((((!((map__69197 == null))))?(((((map__69197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69197):map__69197);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"model","model",331153215));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"content","content",15833224));
var allow_escape_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"allow-escape?","allow-escape?",-206936247));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"title","title",636505583));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_escape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"on-escape","on-escape",-1661872394));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69197__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
rams_ui.util.rendering_id(uuid);

return (function (p__69199){
var map__69200 = p__69199;
var map__69200__$1 = (((((!((map__69200 == null))))?(((((map__69200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__69200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__69200):map__69200);
var message__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var on_close__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var content__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"content","content",15833224));
var allow_escape_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69200__$1,new cljs.core.Keyword(null,"allow-escape?","allow-escape?",-206936247),true);
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var show_dividers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"show-dividers?","show-dividers?",711096333));
var actions__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"actions","actions",-812656882));
var title__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_escape__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__69200__$1,new cljs.core.Keyword(null,"on-escape","on-escape",-1661872394));
var theme = reagent_material_ui.styles.use_theme();
var fullscreen = (function (){var G__69203 = (function (){var fexpr__69204 = new cljs.core.Keyword(null,"down","down",1565245570).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(theme));
return (fexpr__69204.cljs$core$IFn$_invoke$arity$1 ? fexpr__69204.cljs$core$IFn$_invoke$arity$1("sm") : fexpr__69204.call(null,"sm"));
})();
var fexpr__69202 = module$node_modules$$material_ui$core$esm$useMediaQuery$index.default;
return (fexpr__69202.cljs$core$IFn$_invoke$arity$1 ? fexpr__69202.cljs$core$IFn$_invoke$arity$1(G__69203) : fexpr__69202.call(null,G__69203));
})();
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.dialog.dialog,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.deref(state),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width__$1,new cljs.core.Keyword(null,"full-screen","full-screen",-1144598281),fullscreen,new cljs.core.Keyword(null,"scroll","scroll",971553779),"paper"], null),(cljs.core.truth_(width__$1)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max-width","max-width",-1939924051),width__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null):null),(cljs.core.truth_(on_close__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close__$1], null):null),(cljs.core.truth_(allow_escape_QMARK___$1)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"disableEscapeKeyDown","disableEscapeKeyDown",-1431268429),false,new cljs.core.Keyword(null,"disableBackdropClick","disableBackdropClick",1468110112),false], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onBackdropClick","onBackdropClick",1397914159),(function (){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));

if(cljs.core.fn_QMARK_(on_escape__$1)){
return (on_escape__$1.cljs$core$IFn$_invoke$arity$0 ? on_escape__$1.cljs$core$IFn$_invoke$arity$0() : on_escape__$1.call(null));
} else {
return null;
}
}),new cljs.core.Keyword(null,"onEscapeKeyDown","onEscapeKeyDown",1908839912),(function (){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));

if(cljs.core.fn_QMARK_(on_escape__$1)){
return (on_escape__$1.cljs$core$IFn$_invoke$arity$0 ? on_escape__$1.cljs$core$IFn$_invoke$arity$0() : on_escape__$1.call(null));
} else {
return null;
}
})], null)], 0)):null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.dialog_title.dialog_title,cljs.core.PersistentArrayMap.EMPTY,(cljs.core.truth_(title__$1)?title__$1:null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.dialog_content.dialog_content,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dividers","dividers",-1368866238),show_dividers_QMARK_], null),(cljs.core.truth_(message__$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.dialog_content_text.dialog_content_text,message__$1], null):null),content__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.dialog_actions.dialog_actions,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$dialog$modal_$_iter__69205(s__69206){
return (new cljs.core.LazySeq(null,(function (){
var s__69206__$1 = s__69206;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__69206__$1);
if(temp__5735__auto__){
var s__69206__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__69206__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__69206__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__69208 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__69207 = (0);
while(true){
if((i__69207 < size__4528__auto__)){
var action = cljs.core._nth(c__4527__auto__,i__69207);
cljs.core.chunk_append(b__69208,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action):"primary")], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action)], null));

var G__69210 = (i__69207 + (1));
i__69207 = G__69210;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__69208),rams_ui$components$dialog$modal_$_iter__69205(cljs.core.chunk_rest(s__69206__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__69208),null);
}
} else {
var action = cljs.core.first(s__69206__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.button.button,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),rams_ui.util.gen_uuid(),new cljs.core.Keyword(null,"on-click","on-click",1632826543),new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(action),new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(action):"primary")], null),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(action)], null),rams_ui$components$dialog$modal_$_iter__69205(cljs.core.rest(s__69206__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(actions__$1);
})())], null)], null);
});
});

//# sourceMappingURL=rams_ui.components.dialog.js.map
