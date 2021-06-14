goog.provide('rams_ui.util');
var page_render_data_79976 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
rams_ui.util.check_if_id_rendered = (function rams_ui$util$check_if_id_rendered(id){
if(cljs.core.truth_(window.isDev)){
if(cljs.core.contains_QMARK_(cljs.core.deref(page_render_data_79976),id)){
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-debug","set-debug",-1849522602),"pre-rendered",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null)], null));
} else {
return null;
}
} else {
return null;
}
});

/**
 * Helper function that is called in any component that you wish to have its state saved into the current page data structure. It will raise an alarm when in development mode that the same id has been used
 */
rams_ui.util.rendering_id = (function rams_ui$util$rendering_id(id){
rams_ui.util.check_if_id_rendered(id);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(page_render_data_79976,cljs.core.assoc,id,true);
});

rams_ui.util.reset_page_render = (function rams_ui$util$reset_page_render(){
return cljs.core.reset_BANG_(page_render_data_79976,cljs.core.PersistentArrayMap.EMPTY);
});
/**
 * Helper function that should only be used inside reg-event-db/reg-event-fx to set the value of component defined by an id. It returns the modified db and should be the output of the reg-event-db or the :db value of the reg-event-fx.
 * 
 *   - **db**: the db is what is given to the reg-event-db as the app-db state
 *   - **id**: is the id of the value we wish to change. It is critical here to only change values of ids you know as some elements require a particular hash map to work
 *   - **value**: is the value that we wish the id to have from now on
 *   - **persistent?**: is an optional boolean that indicates whether the id is supposed to be persistent or not. This is only valuable if the id belongs to a component that supports 
 */
rams_ui.util.set_db_value = (function rams_ui$util$set_db_value(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79985 = arguments.length;
var i__4737__auto___79986 = (0);
while(true){
if((i__4737__auto___79986 < len__4736__auto___79985)){
args__4742__auto__.push((arguments[i__4737__auto___79986]));

var G__79987 = (i__4737__auto___79986 + (1));
i__4737__auto___79986 = G__79987;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return rams_ui.util.set_db_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(rams_ui.util.set_db_value.cljs$core$IFn$_invoke$arity$variadic = (function (db,id,value,p__79658){
var map__79659 = p__79658;
var map__79659__$1 = (((((!((map__79659 == null))))?(((((map__79659.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79659.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79659):map__79659);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79659__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-state","persistent-state",1129359492)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null));
return cljs.core.assoc_in(db,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,id)),value);
}));

(rams_ui.util.set_db_value.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rams_ui.util.set_db_value.cljs$lang$applyTo = (function (seq79654){
var G__79655 = cljs.core.first(seq79654);
var seq79654__$1 = cljs.core.next(seq79654);
var G__79656 = cljs.core.first(seq79654__$1);
var seq79654__$2 = cljs.core.next(seq79654__$1);
var G__79657 = cljs.core.first(seq79654__$2);
var seq79654__$3 = cljs.core.next(seq79654__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79655,G__79656,G__79657,seq79654__$3);
}));

/**
 * Helper function that should only be used inside reg-event-db/reg-event-fx to retrive the value of component defined by an id. It is most helpful as it does not require us to know the exact keys that are needed in the app-db of hashmap
 * 
 *   - **db**: the db is what is given to the reg-event-db as the app-db state
 *   - **id**: is the id of the value we wish to change. It is critical here to only change values of ids you know as some elements require a particular hash map to work
 *   - **persistent?**: is an optional boolean that indicates whether the id is supposed to be persistent or not. This is only valuable if the id belongs to a component that supports persistent?
 */
rams_ui.util.get_db_value = (function rams_ui$util$get_db_value(var_args){
var args__4742__auto__ = [];
var len__4736__auto___79994 = arguments.length;
var i__4737__auto___79995 = (0);
while(true){
if((i__4737__auto___79995 < len__4736__auto___79994)){
args__4742__auto__.push((arguments[i__4737__auto___79995]));

var G__79996 = (i__4737__auto___79995 + (1));
i__4737__auto___79995 = G__79996;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.util.get_db_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.util.get_db_value.cljs$core$IFn$_invoke$arity$variadic = (function (db,id,p__79674){
var map__79675 = p__79674;
var map__79675__$1 = (((((!((map__79675 == null))))?(((((map__79675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79675):map__79675);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79675__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-state","persistent-state",1129359492)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,id)));
}));

(rams_ui.util.get_db_value.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.util.get_db_value.cljs$lang$applyTo = (function (seq79663){
var G__79664 = cljs.core.first(seq79663);
var seq79663__$1 = cljs.core.next(seq79663);
var G__79665 = cljs.core.first(seq79663__$1);
var seq79663__$2 = cljs.core.next(seq79663__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79664,G__79665,seq79663__$2);
}));

/**
 * Helper function that should only be used inside reg-event-db/reg-event-fx to set the error of component defined by an id. It returns the modified db and should be the output of the reg-event-db or the :db value of the reg-event-fx.
 * 
 *   - **db**: the db is what is given to the reg-event-db as the app-db state
 *   - **id**: is the id of the value we wish to change. It is critical here to only change values of ids you know as some elements require a particular hash map to work
 *   - **value**: is the value that we wish the id to have from now on
 *   - **persistent?**: is an optional boolean that indicates whether the id is supposed to be persistent or not. This is only valuable if the id belongs to a component that supports 
 */
rams_ui.util.set_db_error = (function rams_ui$util$set_db_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80003 = arguments.length;
var i__4737__auto___80005 = (0);
while(true){
if((i__4737__auto___80005 < len__4736__auto___80003)){
args__4742__auto__.push((arguments[i__4737__auto___80005]));

var G__80007 = (i__4737__auto___80005 + (1));
i__4737__auto___80005 = G__80007;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return rams_ui.util.set_db_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(rams_ui.util.set_db_error.cljs$core$IFn$_invoke$arity$variadic = (function (db,id,value,p__79709){
var map__79710 = p__79709;
var map__79710__$1 = (((((!((map__79710 == null))))?(((((map__79710.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79710.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79710):map__79710);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79710__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-errors","persistent-errors",1198517115)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null));
return cljs.core.assoc_in(db,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,id)),value);
}));

(rams_ui.util.set_db_error.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(rams_ui.util.set_db_error.cljs$lang$applyTo = (function (seq79697){
var G__79698 = cljs.core.first(seq79697);
var seq79697__$1 = cljs.core.next(seq79697);
var G__79699 = cljs.core.first(seq79697__$1);
var seq79697__$2 = cljs.core.next(seq79697__$1);
var G__79700 = cljs.core.first(seq79697__$2);
var seq79697__$3 = cljs.core.next(seq79697__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79698,G__79699,G__79700,seq79697__$3);
}));

/**
 * Helper function that should only be used inside reg-event-db/reg-event-fx to retrive the error of component defined by an id. It is most helpful as it does not require us to know the exact keys that are needed in the app-db of hashmap
 * 
 *   - **db**: the db is what is given to the reg-event-db as the app-db state
 *   - **id**: is the id of the value we wish to change. It is critical here to only change values of ids you know as some elements require a particular hash map to work
 *   - **persistent?**: is an optional boolean that indicates whether the id is supposed to be persistent or not. This is only valuable if the id belongs to a component that supports persistent?
 */
rams_ui.util.get_db_error = (function rams_ui$util$get_db_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80016 = arguments.length;
var i__4737__auto___80017 = (0);
while(true){
if((i__4737__auto___80017 < len__4736__auto___80016)){
args__4742__auto__.push((arguments[i__4737__auto___80017]));

var G__80018 = (i__4737__auto___80017 + (1));
i__4737__auto___80017 = G__80018;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.util.get_db_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.util.get_db_error.cljs$core$IFn$_invoke$arity$variadic = (function (db,id,p__79728){
var map__79729 = p__79728;
var map__79729__$1 = (((((!((map__79729 == null))))?(((((map__79729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79729):map__79729);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79729__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-errors","persistent-errors",1198517115)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,id)));
}));

(rams_ui.util.get_db_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.util.get_db_error.cljs$lang$applyTo = (function (seq79713){
var G__79714 = cljs.core.first(seq79713);
var seq79713__$1 = cljs.core.next(seq79713);
var G__79715 = cljs.core.first(seq79713__$1);
var seq79713__$2 = cljs.core.next(seq79713__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79714,G__79715,seq79713__$2);
}));

re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set-debug","set-debug",-1849522602),(function (db,p__79731){
var vec__79732 = p__79731;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79732,(0),null);
var action = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79732,(1),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79732,(2),null);
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["[WARNING] Action: ",action," |  | Params: ",params], 0));

return db;
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|set-value","rams4ui|set-value",-1384526061),(function (db,p__79735){
var vec__79736 = p__79735;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79736,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79736,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79736,(2),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79736,(3),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-state","persistent-state",1129359492)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null));
return cljs.core.assoc_in(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|set-error","rams4ui|set-error",-264385733),(function (db,p__79740){
var vec__79741 = p__79740;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79741,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79741,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79741,(2),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79741,(3),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-errors","persistent-errors",1198517115)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null));
return cljs.core.assoc_in(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)),value);
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|set-loading","rams4ui|set-loading",1633832745),(function (db,p__79744){
var vec__79745 = p__79744;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79745,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79745,(1),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79745,(2),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79745,(3),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-loading","persistent-loading",-1134716244)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-loading","current-loading",1389813077)], null));
return cljs.core.assoc_in(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)),value);
}));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-value","rams4ui|get-value",234567166),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79748){
var vec__79749 = p__79748;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79749,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79749,(1),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79749,(2),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-state","persistent-state",1129359492)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-error","rams4ui|get-error",-805104615),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79752){
var vec__79753 = p__79752;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79753,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79753,(1),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79753,(2),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-errors","persistent-errors",1198517115)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-loading","rams4ui|get-loading",341070759),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79761){
var vec__79762 = p__79761;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79762,(0),null);
var item_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79762,(1),null);
var persistent_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79762,(2),null);
var found_in = (cljs.core.truth_(persistent_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"persistent-loading","persistent-loading",-1134716244)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-loading","current-loading",1389813077)], null));
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,((cljs.core.vector_QMARK_(item_id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(found_in,item_id):cljs.core.conj.cljs$core$IFn$_invoke$arity$2(found_in,item_id)));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-current-url","rams4ui|get-current-url",-398060574),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79771){
var vec__79772 = p__79771;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79772,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-url","current-url",-1470200930)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-current-params","rams4ui|get-current-params",-1583611663),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79775){
var vec__79781 = p__79775;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79781,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-params","current-params",1384467996)], null));
})], 0));
re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"rams4ui|get-historical-pages","rams4ui|get-historical-pages",-35929322),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (db,p__79785){
var vec__79786 = p__79785;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79786,(0),null);
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null));
})], 0));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|set-new-url","rams4ui|set-new-url",-1800599428),(function (db,p__79792){
var vec__79793 = p__79792;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79793,(0),null);
var params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79793,(1),null);
var clear_history_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79793,(2),null);
var old_states = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null));
var old_states_len = cljs.core.count(old_states);
var take_counter = (cljs.core.truth_(clear_history_QMARK_)?(0):(function (){var items = cljs.core.reverse(old_states);
var counter = old_states_len;
var done = false;
while(true){
if(((done) || (cljs.core.empty_QMARK_(items)))){
if(cljs.core.empty_QMARK_(items)){
return cljs.core.count(old_states);
} else {
return counter;
}
} else {
var item = cljs.core.first(items);
var G__80037 = cljs.core.rest(items);
var G__80038 = (counter - (1));
var G__80039 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item))));
items = G__80037;
counter = G__80038;
done = G__80039;
continue;
}
break;
}
})());
var went_back_QMARK_ = (((take_counter > (0))) && ((take_counter < old_states_len)));
var last_state = (((take_counter > (0)))?cljs.core.nth.cljs$core$IFn$_invoke$arity$2(old_states,(take_counter - (1))):null);
history.pushState(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(params));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null),((went_back_QMARK_)?new cljs.core.Keyword(null,"erros","erros",1162912104).cljs$core$IFn$_invoke$arity$1(last_state):new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(params))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null),((went_back_QMARK_)?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(last_state):new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(params))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-params","current-params",1384467996)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-url","current-url",-1470200930)], null),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null),cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic((cljs.core.truth_(last_state)?cljs.core.take.cljs$core$IFn$_invoke$arity$2((take_counter - (1)),old_states):null),(cljs.core.truth_((function (){var and__4115__auto__ = last_state;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old_states_len,take_counter);
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(last_state,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"state","state",-1988618099),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null))], 0))], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(params,new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(params))?new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(params):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(last_state)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"errors","errors",-908790718),((went_back_QMARK_)?new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(last_state):new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(params)),new cljs.core.Keyword(null,"state","state",-1988618099),((went_back_QMARK_)?new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(last_state):new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(params))], 0))], null)], 0)));
}));
re_frame.core.reg_event_db.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rams4ui|go-back","rams4ui|go-back",1489758826),(function (db,p__79806){
var vec__79807 = p__79806;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79807,(0),null);
var steps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79807,(1),null);
var keep_states = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null))) - steps),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null)));
var last_state = cljs.core.last(keep_states);
if(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.empty_QMARK_(keep_states);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"used-back?","used-back?",-1803690128)], null));
}
})())){
return cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"used-back?","used-back?",-1803690128)], null),false);
} else {
history.go(((-1) * steps));

return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"used-back?","used-back?",-1803690128)], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-errors","current-errors",1363504926)], null),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(last_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-state","current-state",1048284452)], null),new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(last_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-params","current-params",1384467996)], null),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(last_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"current-url","current-url",-1470200930)], null),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(last_state)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui","rams4ui",606403965),new cljs.core.Keyword(null,"history-pages","history-pages",-2124405518)], null),keep_states);
}
}));
/**
 * Helper function to go back to previous page. If given no arguments it will go back to the previous page otherwise if given a number it will go back those number of steps.
 */
rams_ui.util.go_back = (function rams_ui$util$go_back(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80057 = arguments.length;
var i__4737__auto___80058 = (0);
while(true){
if((i__4737__auto___80058 < len__4736__auto___80057)){
args__4742__auto__.push((arguments[i__4737__auto___80058]));

var G__80059 = (i__4737__auto___80058 + (1));
i__4737__auto___80058 = G__80059;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return rams_ui.util.go_back.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(rams_ui.util.go_back.cljs$core$IFn$_invoke$arity$variadic = (function (p__79845){
var vec__79846 = p__79845;
var steps = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79846,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79846,(1),null);
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|go-back","rams4ui|go-back",1489758826),(cljs.core.truth_(steps)?steps:(1))], null));
}));

(rams_ui.util.go_back.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(rams_ui.util.go_back.cljs$lang$applyTo = (function (seq79825){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq79825));
}));

/**
 * Helper function to open a url. This adds the new url to the history state of the browser. It takes the following arguments:
 * 
 *   - **url**: the relative url needed to open the page in question
 *   - **label**: a required label that will appear in the breadcrumb. Note that if the breadcrumb is not part of the system then this is optional
 *   - **params**: an optional hashmap of any parameters to be passed
 *   - **state**: an optional hashmap indicating the state of the page to be loaded
 *   - **clear-history?**: an optional parameter to indicate whether we should clear the breadcrumb or not
 */
rams_ui.util.open_url = (function rams_ui$util$open_url(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80060 = arguments.length;
var i__4737__auto___80061 = (0);
while(true){
if((i__4737__auto___80061 < len__4736__auto___80060)){
args__4742__auto__.push((arguments[i__4737__auto___80061]));

var G__80062 = (i__4737__auto___80061 + (1));
i__4737__auto___80061 = G__80062;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rams_ui.util.open_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rams_ui.util.open_url.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__79863){
var map__79864 = p__79863;
var map__79864__$1 = (((((!((map__79864 == null))))?(((((map__79864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79864.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79864):map__79864);
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79864__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79864__$1,new cljs.core.Keyword(null,"params","params",710516235));
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79864__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var clear_history_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79864__$1,new cljs.core.Keyword(null,"clear-history?","clear-history?",1674814374));
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|set-new-url","rams4ui|set-new-url",-1800599428),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"params","params",710516235),params,new cljs.core.Keyword(null,"label","label",1718410804),label,new cljs.core.Keyword(null,"state","state",-1988618099),state], null),clear_history_QMARK_], null));
}));

(rams_ui.util.open_url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rams_ui.util.open_url.cljs$lang$applyTo = (function (seq79852){
var G__79854 = cljs.core.first(seq79852);
var seq79852__$1 = cljs.core.next(seq79852);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79854,seq79852__$1);
}));

rams_ui.util.get_history = (function rams_ui$util$get_history(){

return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-historical-pages","rams4ui|get-historical-pages",-35929322)], null));
});
rams_ui.util.get_url = (function rams_ui$util$get_url(){

return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-current-url","rams4ui|get-current-url",-398060574)], null));
});
rams_ui.util.get_params = (function rams_ui$util$get_params(){

return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-current-params","rams4ui|get-current-params",-1583611663)], null));
});
/**
 * Helper function that sets the value of an id in the current state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (get-value [:form :input]) ;; will get the value of this one form
 *   (get-value :form) ;; will get a hashmap that will at least be {:input "test"} for example
 *   ```
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map where the id is saved. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-value
 */
rams_ui.util.set_value = (function rams_ui$util$set_value(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80063 = arguments.length;
var i__4737__auto___80064 = (0);
while(true){
if((i__4737__auto___80064 < len__4736__auto___80063)){
args__4742__auto__.push((arguments[i__4737__auto___80064]));

var G__80065 = (i__4737__auto___80064 + (1));
i__4737__auto___80064 = G__80065;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic = (function (id,value,p__79885){
var map__79886 = p__79885;
var map__79886__$1 = (((((!((map__79886 == null))))?(((((map__79886.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79886.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79886):map__79886);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79886__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79886__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,((cljs.core.vector_QMARK_(id))?id:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null)),value);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|set-value","rams4ui|set-value",-1384526061),id,value,persistent_QMARK_], null));
}
}));

(rams_ui.util.set_value.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.util.set_value.cljs$lang$applyTo = (function (seq79882){
var G__79883 = cljs.core.first(seq79882);
var seq79882__$1 = cljs.core.next(seq79882);
var G__79884 = cljs.core.first(seq79882__$1);
var seq79882__$2 = cljs.core.next(seq79882__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79883,G__79884,seq79882__$2);
}));

/**
 * Helper function that get a subscription the value of an id in the page state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (get-value [:form :input]) ;; will get the value of this one form
 *   (get-value :form) ;; will get a hashmap that will at least be {:input "test"} for example
 *   ```
 * 
 *   As a reminder since the return is a subscription it is critical to dreference it when using it. Also note that this will cause a reneder if the value of the id changes
 *   ```clojure
 *   (let [var (get-value [:form :input])]
 *  (print @var) ;; will return the actual value
 *  (print var) ;; will return a reference atom that can not be used directly
 *   )
 * 
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map where the id is saved. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-value
 *   ```
 */
rams_ui.util.get_value = (function rams_ui$util$get_value(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80068 = arguments.length;
var i__4737__auto___80069 = (0);
while(true){
if((i__4737__auto___80069 < len__4736__auto___80068)){
args__4742__auto__.push((arguments[i__4737__auto___80069]));

var G__80070 = (i__4737__auto___80069 + (1));
i__4737__auto___80069 = G__80070;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__79893){
var map__79895 = p__79893;
var map__79895__$1 = (((((!((map__79895 == null))))?(((((map__79895.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79895.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79895):map__79895);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79895__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79895__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model),((cljs.core.vector_QMARK_(id))?id:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null))));
} else {
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-value","rams4ui|get-value",234567166),id,persistent_QMARK_], null));
}
}));

(rams_ui.util.get_value.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rams_ui.util.get_value.cljs$lang$applyTo = (function (seq79888){
var G__79889 = cljs.core.first(seq79888);
var seq79888__$1 = cljs.core.next(seq79888);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79889,seq79888__$1);
}));

/**
 * Helper function that sets the error of an id in the current state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (set-error [:form :input] "an error") ;; will set the error message
 *   (set-error [:form :input] true) ;; will set the error note
 *   ```
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map. The id is saved in this hashmap under the key :errors. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-value
 */
rams_ui.util.set_error = (function rams_ui$util$set_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80073 = arguments.length;
var i__4737__auto___80074 = (0);
while(true){
if((i__4737__auto___80074 < len__4736__auto___80073)){
args__4742__auto__.push((arguments[i__4737__auto___80074]));

var G__80075 = (i__4737__auto___80074 + (1));
i__4737__auto___80074 = G__80075;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic = (function (id,value,p__79917){
var map__79918 = p__79917;
var map__79918__$1 = (((((!((map__79918 == null))))?(((((map__79918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79918):map__79918);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79918__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79918__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),id):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),id], null)),value);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|set-error","rams4ui|set-error",-264385733),id,value,persistent_QMARK_], null));
}
}));

(rams_ui.util.set_error.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.util.set_error.cljs$lang$applyTo = (function (seq79908){
var G__79909 = cljs.core.first(seq79908);
var seq79908__$1 = cljs.core.next(seq79908);
var G__79910 = cljs.core.first(seq79908__$1);
var seq79908__$2 = cljs.core.next(seq79908__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79909,G__79910,seq79908__$2);
}));

/**
 * Helper function that get a subscription the error of an id in the page state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (get-error [:form :input]) ;; will get the error of this one form item
 *   (get-error :form) ;; will get a hashmap that will at least be {:input "test"} for example
 *   ```
 * 
 *   As a reminder since the return is a subscription it is critical to dreference it when using it. Also note that this will cause a reneder if the value of the id changes
 *   ```clojure
 *   (let [var (get-error [:form :input])]
 *  (print @var) ;; will return the error
 *  (print var) ;; will return a reference atom that can not be used directly
 *   )
 * 
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map. The id will should be in this hashmap under the key :errors. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-error
 *   ```
 */
rams_ui.util.get_error = (function rams_ui$util$get_error(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80078 = arguments.length;
var i__4737__auto___80079 = (0);
while(true){
if((i__4737__auto___80079 < len__4736__auto___80078)){
args__4742__auto__.push((arguments[i__4737__auto___80079]));

var G__80080 = (i__4737__auto___80079 + (1));
i__4737__auto___80079 = G__80080;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__79931){
var map__79932 = p__79931;
var map__79932__$1 = (((((!((map__79932 == null))))?(((((map__79932.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79932.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79932):map__79932);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79932__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79932__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model),((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718)], null),id):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"erros","erros",1162912104),id], null)));
} else {
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-error","rams4ui|get-error",-805104615),id,persistent_QMARK_], null));
}
}));

(rams_ui.util.get_error.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rams_ui.util.get_error.cljs$lang$applyTo = (function (seq79929){
var G__79930 = cljs.core.first(seq79929);
var seq79929__$1 = cljs.core.next(seq79929);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79930,seq79929__$1);
}));

/**
 * Helper function that sets the loading of an id in the current state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (set-error [:form :input] false) ;; will set the loading on
 *   (set-error [:form :input] true) ;; will hide the loading
 *   ```
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map. The id is saved in this hashmap under the key :errors. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-value
 */
rams_ui.util.set_loading = (function rams_ui$util$set_loading(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80083 = arguments.length;
var i__4737__auto___80084 = (0);
while(true){
if((i__4737__auto___80084 < len__4736__auto___80083)){
args__4742__auto__.push((arguments[i__4737__auto___80084]));

var G__80085 = (i__4737__auto___80084 + (1));
i__4737__auto___80084 = G__80085;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return rams_ui.util.set_loading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(rams_ui.util.set_loading.cljs$core$IFn$_invoke$arity$variadic = (function (id,value,p__79941){
var map__79942 = p__79941;
var map__79942__$1 = (((((!((map__79942 == null))))?(((((map__79942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79942):map__79942);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79942__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79942__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(model,cljs.core.assoc_in,((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),id):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),id], null)),value);
} else {
return re_frame.core.dispatch(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|set-loading","rams4ui|set-loading",1633832745),id,value,persistent_QMARK_], null));
}
}));

(rams_ui.util.set_loading.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(rams_ui.util.set_loading.cljs$lang$applyTo = (function (seq79938){
var G__79939 = cljs.core.first(seq79938);
var seq79938__$1 = cljs.core.next(seq79938);
var G__79940 = cljs.core.first(seq79938__$1);
var seq79938__$2 = cljs.core.next(seq79938__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79939,G__79940,seq79938__$2);
}));

/**
 * Helper function that get a subscription the loading of an id in the page state. id can be either keyword/string/number/array. Note that if id is for example an array [:form :input] then
 *   ```clojure
 *   (get-error [:form :input]) ;; will get the error of this one form item
 *   (get-error :form) ;; will get a hashmap that will at least be {:input "test"} for example
 *   ```
 * 
 *   As a reminder since the return is a subscription it is critical to dreference it when using it. Also note that this will cause a reneder if the value of the id changes
 *   ```clojure
 *   (let [var (get-error [:form :input])]
 *  (print @var) ;; will return the error
 *  (print var) ;; will return a reference atom that can not be used directly
 *   )
 * 
 *   Note that this function takes two optional parameters that behave as follows:
 * 
 *   - **persistent?**: identifies that the value will carry over from one page to the next
 *   - **model**: is an optional atom or reagent atom that is a hash map. The id will should be in this hashmap under the key :errors. Note that if this is used the id will not be saved in the global db and will neither be persistent nor will it be saved from one page to the next. Also note that this model should have been passed to set-error
 *   ```
 */
rams_ui.util.get_loading = (function rams_ui$util$get_loading(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80086 = arguments.length;
var i__4737__auto___80087 = (0);
while(true){
if((i__4737__auto___80087 < len__4736__auto___80086)){
args__4742__auto__.push((arguments[i__4737__auto___80087]));

var G__80088 = (i__4737__auto___80087 + (1));
i__4737__auto___80087 = G__80088;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return rams_ui.util.get_loading.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(rams_ui.util.get_loading.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__79954){
var map__79955 = p__79954;
var map__79955__$1 = (((((!((map__79955 == null))))?(((((map__79955.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79955.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79955):map__79955);
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79955__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79955__$1,new cljs.core.Keyword(null,"model","model",331153215));
if(cljs.core.truth_(model)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(model),((cljs.core.vector_QMARK_(id))?cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189)], null),id):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loading","loading",-737050189),id], null)));
} else {
return re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rams4ui|get-loading","rams4ui|get-loading",341070759),id,persistent_QMARK_], null));
}
}));

(rams_ui.util.get_loading.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(rams_ui.util.get_loading.cljs$lang$applyTo = (function (seq79952){
var G__79953 = cljs.core.first(seq79952);
var seq79952__$1 = cljs.core.next(seq79952);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79953,seq79952__$1);
}));

/**
 * Helper function that gets a uuid string
 */
rams_ui.util.gen_uuid = (function rams_ui$util$gen_uuid(){
return cljs_uuid_utils.core.uuid_string(cljs_uuid_utils.core.make_random_uuid());
});
/**
 * allows to dissociate a nested key from a given hash map
 */
rams_ui.util.dissoc_in = (function rams_ui$util$dissoc_in(m,p__79957){
var vec__79958 = p__79957;
var seq__79959 = cljs.core.seq(vec__79958);
var first__79960 = cljs.core.first(seq__79959);
var seq__79959__$1 = cljs.core.next(seq__79959);
var k = first__79960;
var ks = seq__79959__$1;
if(cljs.core.not(ks)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__79961 = (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
var G__79962 = ks;
return (rams_ui.util.dissoc_in.cljs$core$IFn$_invoke$arity$2 ? rams_ui.util.dissoc_in.cljs$core$IFn$_invoke$arity$2(G__79961,G__79962) : rams_ui.util.dissoc_in.call(null,G__79961,G__79962));
})());
}
});
/**
 * Returns a lazy sequence of the elements of coll, removing any elements that
 *   return duplicate values when passed to a function f.
 * 
 *   - **f**: identifies the function that will be used for distinct. Remember that this can be even keyword since that is considered a function
 *   - **coll**: the list of elements that will be considered for checking distinct
 */
rams_ui.util.distinct_by = (function rams_ui$util$distinct_by(f,coll){
var step = (function rams_ui$util$distinct_by_$_step(xs,seen){
return (new cljs.core.LazySeq(null,(function (){
return (function (p__79963,seen__$1){
while(true){
var vec__79964 = p__79963;
var x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79964,(0),null);
var xs__$1 = vec__79964;
var temp__5735__auto__ = cljs.core.seq(xs__$1);
if(temp__5735__auto__){
var s = temp__5735__auto__;
var fx = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.contains_QMARK_(seen__$1,fx)){
var G__80091 = cljs.core.rest(s);
var G__80092 = seen__$1;
p__79963 = G__80091;
seen__$1 = G__80092;
continue;
} else {
return cljs.core.cons(x,rams_ui$util$distinct_by_$_step(cljs.core.rest(s),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen__$1,fx)));
}
} else {
return null;
}
break;
}
})(xs,seen);
}),null,null));
});
return step(coll,cljs.core.PersistentHashSet.EMPTY);
});
(window.onpopstate = (function (evt){
var pages = rams_ui.util.get_history();
var steps = (function (){var items = cljs.core.reverse(cljs.core.butlast(cljs.core.deref(pages)));
var counter = (0);
var done_QMARK_ = false;
while(true){
if(((done_QMARK_) || (cljs.core.empty_QMARK_(items)))){
return counter;
} else {
var item = cljs.core.first(items);
var G__80093 = cljs.core.rest(items);
var G__80094 = (counter + (1));
var G__80095 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(item),document.location.pathname)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(evt.state),cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(item))))));
items = G__80093;
counter = G__80094;
done_QMARK_ = G__80095;
continue;
}
break;
}
})();
evt.preventDefault();

return rams_ui.util.go_back.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([steps], 0));
}));

//# sourceMappingURL=rams_ui.util.js.map
