goog.provide('behumen.utils');
behumen.utils.save_local_item = (function behumen$utils$save_local_item(key,val){
return window.localStorage.setItem(key,JSON.stringify(val));
});
behumen.utils.get_local_item = (function behumen$utils$get_local_item(key){
return JSON.parse(window.localStorage.getItem(key));
});
behumen.utils.remove_local_item = (function behumen$utils$remove_local_item(key){
return window.localStorage.removeItem(key);
});
behumen.utils.get_token = (function behumen$utils$get_token(){
if(cljs.core.truth_(goog.history.Html5History.isSupported())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search)].join('');
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(window.location.pathname,"/")){
return window.location.hash.substring((1));
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.pathname),cljs.core.str.cljs$core$IFn$_invoke$arity$1(window.location.search)].join('');
}
}
});

//# sourceMappingURL=behumen.utils.js.map
