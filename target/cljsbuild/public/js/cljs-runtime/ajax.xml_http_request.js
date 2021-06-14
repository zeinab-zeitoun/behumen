goog.provide('ajax.xml_http_request');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__78082 = e.target.readyState;
var fexpr__78081 = new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null);
return (fexpr__78081.cljs$core$IFn$_invoke$arity$1 ? fexpr__78081.cljs$core$IFn$_invoke$arity$1(G__78082) : fexpr__78081.call(null,G__78082));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = (((typeof goog !== 'undefined') && (typeof goog.global !== 'undefined') && (typeof goog.global.XMLHttpRequest !== 'undefined'))?goog.global.XMLHttpRequest:(((typeof require !== 'undefined'))?(function (){var req = require;
return (req.cljs$core$IFn$_invoke$arity$1 ? req.cljs$core$IFn$_invoke$arity$1("xmlhttprequest") : req.call(null,"xmlhttprequest")).XMLHttpRequest;
})():null));
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__78096,handler){
var map__78097 = p__78096;
var map__78097__$1 = (((((!((map__78097 == null))))?(((((map__78097.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78097.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78097):map__78097);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78097__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78097__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78097__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78097__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78097__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__78097__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__78097__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__78091_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__78091_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___78118 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___78118)){
var response_type_78119 = temp__5735__auto___78118;
(this$__$1.responseType = cljs.core.name(response_type_78119));
} else {
}

var seq__78101_78120 = cljs.core.seq(headers);
var chunk__78102_78121 = null;
var count__78103_78122 = (0);
var i__78104_78123 = (0);
while(true){
if((i__78104_78123 < count__78103_78122)){
var vec__78111_78124 = chunk__78102_78121.cljs$core$IIndexed$_nth$arity$2(null,i__78104_78123);
var k_78125 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78111_78124,(0),null);
var v_78126 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78111_78124,(1),null);
this$__$1.setRequestHeader(k_78125,v_78126);


var G__78127 = seq__78101_78120;
var G__78128 = chunk__78102_78121;
var G__78129 = count__78103_78122;
var G__78130 = (i__78104_78123 + (1));
seq__78101_78120 = G__78127;
chunk__78102_78121 = G__78128;
count__78103_78122 = G__78129;
i__78104_78123 = G__78130;
continue;
} else {
var temp__5735__auto___78131 = cljs.core.seq(seq__78101_78120);
if(temp__5735__auto___78131){
var seq__78101_78132__$1 = temp__5735__auto___78131;
if(cljs.core.chunked_seq_QMARK_(seq__78101_78132__$1)){
var c__4556__auto___78133 = cljs.core.chunk_first(seq__78101_78132__$1);
var G__78134 = cljs.core.chunk_rest(seq__78101_78132__$1);
var G__78135 = c__4556__auto___78133;
var G__78136 = cljs.core.count(c__4556__auto___78133);
var G__78137 = (0);
seq__78101_78120 = G__78134;
chunk__78102_78121 = G__78135;
count__78103_78122 = G__78136;
i__78104_78123 = G__78137;
continue;
} else {
var vec__78114_78138 = cljs.core.first(seq__78101_78132__$1);
var k_78139 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78114_78138,(0),null);
var v_78140 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78114_78138,(1),null);
this$__$1.setRequestHeader(k_78139,v_78140);


var G__78141 = cljs.core.next(seq__78101_78132__$1);
var G__78142 = null;
var G__78143 = (0);
var G__78144 = (0);
seq__78101_78120 = G__78141;
chunk__78102_78121 = G__78142;
count__78103_78122 = G__78143;
i__78104_78123 = G__78144;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4126__auto__ = body;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
