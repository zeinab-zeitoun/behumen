goog.provide('behumen.common');
behumen.common.uploaded_url_path = "/uploaded/";
behumen.common._PLUS_success_PLUS_ = "success";
behumen.common._PLUS_warning_PLUS_ = "warning";
behumen.common._PLUS_error_PLUS_ = "error";
behumen.common._PLUS_roles_module_PLUS_ = "roles";
behumen.common._PLUS_permission_read_PLUS_ = "read";
behumen.common._PLUS_permission_write_PLUS_ = "write";
behumen.common._PLUS_permission_delete_PLUS_ = "delete";
behumen.common.get_server_name = (function behumen$common$get_server_name(){
return "localhost:3000";
});
behumen.common.get_base_url = (function behumen$common$get_base_url(){
return ["https://",behumen.common.get_server_name()].join('');
});
behumen.common.urls = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"user-permissions-view","user-permissions-view",245399239),new cljs.core.Keyword(null,"logout","logout",1418564329),new cljs.core.Keyword(null,"save-email","save-email",1801122349),new cljs.core.Keyword(null,"user-permissions-save","user-permissions-save",916459245),new cljs.core.Keyword(null,"change-my-password","change-my-password",-1322619794),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"user-verify","user-verify",340227091),new cljs.core.Keyword(null,"reset-password","reset-password",-1150599401),new cljs.core.Keyword(null,"user-change-password","user-change-password",210970684),new cljs.core.Keyword(null,"roles-view","roles-view",972734078)],["/api/v1/private/permissions/user-view","/api/v1/private/user/logout","/api/v1/private/user/save-email","/api/v1/private/permissions/user-save","/api/v1/private/user/change-password","/api/v1/public/user/login","/verification/:code","/api/v1/public/user/reset","/change-password/:code","/api/v1/private/roles/view"]);
behumen.common.get_url = (function behumen$common$get_url(id){
return (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(behumen.common.urls) : id.call(null,behumen.common.urls));
});
behumen.common.url_encode = (function behumen$common$url_encode(string){
var G__66318 = string;
var G__66318__$1 = (((G__66318 == null))?null:cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66318));
var G__66318__$2 = (((G__66318__$1 == null))?null:encodeURIComponent(G__66318__$1));
if((G__66318__$2 == null)){
return null;
} else {
return G__66318__$2.replace("+","%20");
}
});
behumen.common.generate_url = (function behumen$common$generate_url(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66344 = arguments.length;
var i__4737__auto___66345 = (0);
while(true){
if((i__4737__auto___66345 < len__4736__auto___66344)){
args__4742__auto__.push((arguments[i__4737__auto___66345]));

var G__66347 = (i__4737__auto___66345 + (1));
i__4737__auto___66345 = G__66347;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return behumen.common.generate_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(behumen.common.generate_url.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
var coded_url = (id.cljs$core$IFn$_invoke$arity$1 ? id.cljs$core$IFn$_invoke$arity$1(behumen.common.urls) : id.call(null,behumen.common.urls));
if(cljs.core.truth_(coded_url)){
if(((cljs.core.empty_QMARK_(args)) || (cljs.core.empty_QMARK_(cljs.core.first(args))))){
return coded_url;
} else {
var new_args = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4529__auto__ = (function behumen$common$iter__66321(s__66322){
return (new cljs.core.LazySeq(null,(function (){
var s__66322__$1 = s__66322;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66322__$1);
if(temp__5735__auto__){
var s__66322__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66322__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66322__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66324 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66323 = (0);
while(true){
if((i__66323 < size__4528__auto__)){
var vec__66325 = cljs.core._nth(c__4527__auto__,i__66323);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66325,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66325,(1),null);
cljs.core.chunk_append(b__66324,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)),"/"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"/"].join('')], null));

var G__66353 = (i__66323 + (1));
i__66323 = G__66353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66324),behumen$common$iter__66321(cljs.core.chunk_rest(s__66322__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66324),null);
}
} else {
var vec__66328 = cljs.core.first(s__66322__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66328,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66328,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((((k instanceof cljs.core.Keyword))?cljs.core.name(k):k)),"/"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"/"].join('')], null),behumen$common$iter__66321(cljs.core.rest(s__66322__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(cljs.core.first(args));
})());
var search_query = (function (){var items = cljs.core.first(args);
var out = "";
while(true){
if(cljs.core.empty_QMARK_(items)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(out,"")){
return out;
} else {
return ["?",out].join('');
}
} else {
var G__66360 = cljs.core.rest(items);
var G__66361 = (function (){var vec__66334 = cljs.core.first(items);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66334,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66334,(1),null);
var key_name = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):k);
if(cljs.core.truth_(cljs.core.re_find(cljs.core.re_pattern([":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_name),"/"].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(coded_url),"/"].join('')))){
return out;
} else {
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(out,""))?out:[out,"&"].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key_name),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(behumen.common.url_encode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}
})();
items = G__66360;
out = G__66361;
continue;
}
break;
}
})();
var url = clojure.string.replace([cljs.core.str.cljs$core$IFn$_invoke$arity$1(coded_url),"/"].join(''),cljs.core.re_pattern(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2("|",cljs.core.keys(new_args)))),new_args);
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(url,(0),(((url).length) - (1))),search_query].join('');
}
} else {
return null;
}
}));

(behumen.common.generate_url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(behumen.common.generate_url.cljs$lang$applyTo = (function (seq66319){
var G__66320 = cljs.core.first(seq66319);
var seq66319__$1 = cljs.core.next(seq66319);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66320,seq66319__$1);
}));

behumen.common.get_absolute_url = (function behumen$common$get_absolute_url(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66372 = arguments.length;
var i__4737__auto___66373 = (0);
while(true){
if((i__4737__auto___66373 < len__4736__auto___66372)){
args__4742__auto__.push((arguments[i__4737__auto___66373]));

var G__66376 = (i__4737__auto___66373 + (1));
i__4737__auto___66373 = G__66376;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return behumen.common.get_absolute_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(behumen.common.get_absolute_url.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
return [behumen.common.get_base_url(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(behumen.common.generate_url.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0)))].join('');
}));

(behumen.common.get_absolute_url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(behumen.common.get_absolute_url.cljs$lang$applyTo = (function (seq66337){
var G__66338 = cljs.core.first(seq66337);
var seq66337__$1 = cljs.core.next(seq66337);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66338,seq66337__$1);
}));

behumen.common.get_ws_url = (function behumen$common$get_ws_url(var_args){
var args__4742__auto__ = [];
var len__4736__auto___66387 = arguments.length;
var i__4737__auto___66388 = (0);
while(true){
if((i__4737__auto___66388 < len__4736__auto___66387)){
args__4742__auto__.push((arguments[i__4737__auto___66388]));

var G__66389 = (i__4737__auto___66388 + (1));
i__4737__auto___66388 = G__66389;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return behumen.common.get_ws_url.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(behumen.common.get_ws_url.cljs$core$IFn$_invoke$arity$variadic = (function (id,args){
return ["ws://",behumen.common.get_server_name(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(behumen.common.generate_url.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(args)], 0)))].join('');
}));

(behumen.common.get_ws_url.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(behumen.common.get_ws_url.cljs$lang$applyTo = (function (seq66339){
var G__66340 = cljs.core.first(seq66339);
var seq66339__$1 = cljs.core.next(seq66339);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66340,seq66339__$1);
}));

behumen.common.get_image_link = (function behumen$common$get_image_link(link){
return [behumen.common.uploaded_url_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
});
behumen.common.get_absolute_image_link = (function behumen$common$get_absolute_image_link(link){
return [behumen.common.get_base_url(),behumen.common.uploaded_url_path,cljs.core.str.cljs$core$IFn$_invoke$arity$1(link)].join('');
});

//# sourceMappingURL=behumen.common.js.map
