goog.provide('rams_ui.components.input');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
var module$node_modules$react_number_format$dist$react_number_format_cjs=shadow.js.require("module$node_modules$react_number_format$dist$react_number_format_cjs", {});
var module$node_modules$$date_io$date_fns$build$index=shadow.js.require("module$node_modules$$date_io$date_fns$build$index", {});
var module$node_modules$$material_ui$core$esm$TextField$index=shadow.js.require("module$node_modules$$material_ui$core$esm$TextField$index", {});
rams_ui.components.input.mui_text_field = reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$2((function (){var or__4126__auto__ = module$node_modules$$material_ui$core$esm$TextField$index.default;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return module$node_modules$$material_ui$core$esm$TextField$index.TextField;
}
})(),"mui-text-field");
rams_ui.components.input.use_styles = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (theme){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(function (){var fexpr__65977 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__65977.cljs$core$IFn$_invoke$arity$1 ? fexpr__65977.cljs$core$IFn$_invoke$arity$1((1)) : fexpr__65977.call(null,(1)));
})()], null),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"inline-flex"], null),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null),new cljs.core.Keyword(null,"without-label","without-label",105812128),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin","margin",-995903681),(function (){var fexpr__65978 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__65978.cljs$core$IFn$_invoke$arity$1 ? fexpr__65978.cljs$core$IFn$_invoke$arity$1((3)) : fexpr__65978.call(null,(3)));
})()], null)], null);
}));
rams_ui.components.input.number_format_component = (function rams_ui$components$input$number_format_component(p__65979){
var map__65980 = p__65979;
var map__65980__$1 = (((((!((map__65980 == null))))?(((((map__65980.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65980.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65980):map__65980);
var config = map__65980__$1;
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"mask","mask",-585748447));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fixed_decimal_points_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"fixed-decimal-points?","fixed-decimal-points?",-661041468));
var decimal_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"decimal-points","decimal-points",1390914344));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"value","value",305978217));
var thousand_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777));
var decimal_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var allow_leading_zeros_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"allow-leading-zeros?","allow-leading-zeros?",926985872));
var is_numeric_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"is-numeric-string?","is-numeric-string?",1701849360));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var display_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65980__$1,new cljs.core.Keyword(null,"display-type","display-type",-749971179));
var state = (cljs.core.truth_(id)?rams_ui.util.get_value(id):cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),null], null)));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.util.adapt_react_class.cljs$core$IFn$_invoke$arity$1(module$node_modules$react_number_format$dist$react_number_format_cjs),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config,new cljs.core.Keyword(null,"decimal-points","decimal-points",1390914344)),new cljs.core.Keyword(null,"fixed-decimal-points?","fixed-decimal-points?",-661041468)),new cljs.core.Keyword(null,"is-numeric-string?","is-numeric-string?",1701849360)),new cljs.core.Keyword(null,"on-change","on-change",-732046149)),new cljs.core.Keyword(null,"allow-leading-zeros?","allow-leading-zeros?",926985872)),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state))),new cljs.core.Keyword(null,"is-numeric-string","is-numeric-string",-940927494),is_numeric_string_QMARK_,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"allow-leading-zeros","allow-leading-zeros",-845745134),allow_leading_zeros_QMARK_,new cljs.core.Keyword(null,"decimal-scale","decimal-scale",-1003730706),decimal_points,new cljs.core.Keyword(null,"fixed-decimal-scale","fixed-decimal-scale",-1523072462),fixed_decimal_points_QMARK_,new cljs.core.Keyword(null,"on-value-change","on-value-change",-621835289),(function (val){
if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(val) : on_change.call(null,val));
} else {
return null;
}
})], 0)),(cljs.core.truth_(new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(config))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"getInputRef","getInputRef",1655981094),new cljs.core.Keyword(null,"inputRef","inputRef",-414128011).cljs$core$IFn$_invoke$arity$1(config)], null):null)], 0))], null);
});
rams_ui.components.input.generic_field = (function rams_ui$components$input$generic_field(p__65982){
var map__65983 = p__65982;
var map__65983__$1 = (((((!((map__65983 == null))))?(((((map__65983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65983):map__65983);
var error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var formatting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"formatting","formatting",-97267292));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var multiline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"multiline?","multiline?",405422918));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65983__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
rams_ui.util.rendering_id(uuid);

return (function (p__65985){
var map__65986 = p__65985;
var map__65986__$1 = (((((!((map__65986 == null))))?(((((map__65986.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65986.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65986):map__65986);
var error_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var full_width_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var suffix__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var required_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var formatting__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"formatting","formatting",-97267292));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var multiline_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"multiline?","multiline?",405422918));
var on_focus__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var prefix__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var max_rows__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var read_only_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65986__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var styles = (rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.input.use_styles.call(null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control.form_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(styles),((cljs.core.not(label__$1))?new cljs.core.Keyword(null,"without-label","without-label",105812128).cljs$core$IFn$_invoke$arity$1(styles):null)], null))], null),(cljs.core.truth_(full_width_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null):null),(cljs.core.truth_(required_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),required_QMARK___$1], null):null),(cljs.core.truth_(variant__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant__$1], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = error_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(error_state);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null):null)], 0)),(cljs.core.truth_(label__$1)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.input_label.input_label,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(classes),new cljs.core.Keyword(null,"html-for","html-for",594503920),uuid], null),label__$1], null):null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__65988 = variant__$1;
switch (G__65988) {
case "filled":
return reagent_material_ui.core.filled_input.filled_input;

break;
case "outlined":
return reagent_material_ui.core.outlined_input.outlined_input;

break;
default:
return reagent_material_ui.core.input.input;

}
})(),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null),(cljs.core.truth_(formatting__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-component","input-component",-745892912),(function (props){
var interim = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(props,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.number_format_component,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([interim,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (values){
var val = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(values,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
})], null),formatting__$1], 0))], null));
})], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = label__$1;
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant__$1,"outlined");
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-width","label-width",-333342893),(7.5 * cljs.core.count(label__$1))], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(classes))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"input","input",556931961).cljs$core$IFn$_invoke$arity$1(classes)], null):null),(cljs.core.truth_(disabled_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null),(cljs.core.truth_(multiline_QMARK___$1)?cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"multiline","multiline",-1084693234),true], null),(cljs.core.truth_(rows__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rows","rows",850049680),rows__$1], null):null),(cljs.core.truth_(max_rows__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613),max_rows__$1], null):null)], 0)):null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.fn_QMARK_(on_blur__$1);
if(or__4126__auto__){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = required_QMARK___$1;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
return cljs.core.fn_QMARK_(on_focus__$1);
}
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-props","input-props",-1504868202),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var or__4126__auto__ = required_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.fn_QMARK_(on_blur__$1);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(required_QMARK___$1)){
if((((cljs.core.deref(state) == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(state))))){
rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
}
} else {
}

if(cljs.core.fn_QMARK_(on_blur__$1)){
return (on_blur__$1.cljs$core$IFn$_invoke$arity$0 ? on_blur__$1.cljs$core$IFn$_invoke$arity$0() : on_blur__$1.call(null));
} else {
return null;
}
})], null):null),((cljs.core.fn_QMARK_(on_focus__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),(function (){
if(cljs.core.fn_QMARK_(on_focus__$1)){
return (on_focus__$1.cljs$core$IFn$_invoke$arity$0 ? on_focus__$1.cljs$core$IFn$_invoke$arity$0() : on_focus__$1.call(null));
} else {
return null;
}
})], null):null)], 0))], null):null),(cljs.core.truth_(type__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1], null):null),(cljs.core.truth_(required_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null),(cljs.core.truth_(read_only_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"read-only","read-only",-191706886),true], null):null),(cljs.core.truth_(placeholder__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1], null):null),(cljs.core.truth_(prefix__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"start-adornment","start-adornment",-807243632),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.input_adornment.input_adornment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"start"], null),prefix__$1], null))], null):null),(cljs.core.truth_(suffix__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"end-adornment","end-adornment",195120609),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.input_adornment.input_adornment,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"start"], null),suffix__$1], null))], null):null),((cljs.core.not(formatting__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var val = evt.target.value;
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));

if(cljs.core.fn_QMARK_(on_change__$1)){
return (on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(val) : on_change__$1.call(null,val));
} else {
return null;
}
})], null):null)], 0))], null),(cljs.core.truth_((function (){var or__4126__auto__ = help_text__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
}
})())?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_helper_text.form_helper_text,(cljs.core.truth_(new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(classes))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"info","info",-317069002).cljs$core$IFn$_invoke$arity$1(classes)], null):null),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
})())?cljs.core.deref(error_state):help_text__$1)], null):null)], null);
});
});
/**
 * creates a fromatted text based on a specified format. This is most useful when presenting currency or maybe numbers. The attributes are as follows:
 * 
 *   - **:prefix**: an optional string to be presented before the **value**
 *   - **:suffix**: an optional string to be presented after the **value**
 *   - **:decimal-points**: an optional parameter indicating the number of decimals in a number to be formated
 *   - **:fixed-decimal-points?**: an optional boolean indicating if we should pad to get the number of decimal-points
 *   - **:thousand-spearator**: an optional character indicating the thousand separator. Default is ,.
 *   - **:format**: a required string identifying the string format. The format will only have the # changed according to value so for example
 *   ```
 *   format: ### ### ,|, ###
 *   value: 123456789
 *   => result: 123 456 ,|, 789
 *   ```
 *   - **:allow-leading-zeros?**: is an optional boolean indicating if the value is a number (or numeric string) that is less then the format then it is appended with zeros in the beginning
 */
rams_ui.components.input.formatted_text = (function rams_ui$components$input$formatted_text(p__65989,value){
var map__65990 = p__65989;
var map__65990__$1 = (((((!((map__65990 == null))))?(((((map__65990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65990):map__65990);
var config = map__65990__$1;
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fixed_decimal_points_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"fixed-decimal-points?","fixed-decimal-points?",-661041468));
var decimal_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"decimal-points","decimal-points",1390914344));
var thousand_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777));
var decimal_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var allow_leading_zeros_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"allow-leading-zeros?","allow-leading-zeros?",926985872));
var is_numeric_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65990__$1,new cljs.core.Keyword(null,"is-numeric-string?","is-numeric-string?",1701849360));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.number_format_component,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"display-type","display-type",-749971179),"string"], 0))], null);
});
rams_ui.components.input.editor = (function rams_ui$components$input$editor(p__65992){
var map__65993 = p__65992;
var map__65993__$1 = (((((!((map__65993 == null))))?(((((map__65993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65993):map__65993);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var labe = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"labe","labe",-1026263558));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65993__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.rendering_id(uuid);

return (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box], null);
});
});
/**
 * creates a react input component that allows text. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**, **color** , *:size**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent?**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:on-focus**: is an optional function that will be called on focus
 *   - **:on-blur**: is an optional function that will be called on blur
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:multiline?**: is an optional boolean indicating whether the field should allow multiple lines
 *   - **:rows**: in case the **:multiline?** is true then this will indicate how many rows to show always
 *   - **:max-rows**: in case the **:multiline?** is true then this will indicate max rows before a scroll appears
 *   - **:prefix**: an optional string or react component to be presented before the **value**
 *   - **:suffix**: an optional string or react component to be presented after the **value**
 */
rams_ui.components.input.text_field = (function rams_ui$components$input$text_field(p__65995){
var map__65996 = p__65995;
var map__65996__$1 = (((((!((map__65996 == null))))?(((((map__65996.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65996.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65996):map__65996);
var config = map__65996__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var multiline_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"multiline?","multiline?",405422918));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"rows","rows",850049680));
var max_rows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"max-rows","max-rows",-2131113613));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var read_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65996__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.generic_field,config], null);
});
/**
 * creates a react input component that has some base autoformatting and only allows numbers. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**, **color** , *:size**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent?**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:on-focus**: is an optional function that will be called on focus
 *   - **:on-blur**: is an optional function that will be called on blur
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:prefix**: an optional string or react component to be presented before the **value**
 *   - **:suffix**: an optional string or react component to be presented after the **value**
 *   - **:decimal-points**: an optional parameter indicating the number of decimals in a number to be formated
 *   - **:fixed-decimal-points?**: an optional boolean indicating if we should pad to get the number of decimal-points
 *   - **:thousand-spearator**: an optional character indicating the thousand separator. Default is ,.
 *   - **:format**: a required string identifying the string format. The format will only have the # changed according to value so for example
 *   ```
 *   format: ### ### ,|, ###
 *   value: 123456789
 *   => result: 123 456 ,|, 789
 *   ```
 *   - **:allow-leading-zeros?**: is an optional boolean indicating if the value is a number (or numeric string) that is less then the format then it is appended with zeros in the beginning
 *   - **:is-numeric-string?**: is an optional boolean indicating that the value is a string representation.
 *   - **:mask**: is an optional represntation of how the empty format spaces (ie #) should be presented. This can be a single character such as "_" or it can be an array of characters such as ["M" "M"] which identifies that the format spaces should be two
 * 
 * 
 * 
 *   Note that the output is a hashmap of the following format:
 *   ```
 *   { :value ..... ; string representation of number
 *  :formattedValue .... ; string representation as formatted with separator and decimal points
 *  :floatValue ... ; float value
 *   }
 *   ```
 */
rams_ui.components.input.number_field = (function rams_ui$components$input$number_field(p__65998){
var map__65999 = p__65998;
var map__65999__$1 = (((((!((map__65999 == null))))?(((((map__65999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65999):map__65999);
var config = map__65999__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"model","model",331153215));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"mask","mask",-585748447));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fixed_decimal_points_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"fixed-decimal-points?","fixed-decimal-points?",-661041468));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var decimal_points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"decimal-points","decimal-points",1390914344));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var thousand_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var decimal_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var allow_leading_zeros_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"allow-leading-zeros?","allow-leading-zeros?",926985872));
var is_numeric_string_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"is-numeric-string?","is-numeric-string?",1701849360));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65999__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.generic_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"formatting","formatting",-97267292),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777),thousand_separator,new cljs.core.Keyword(null,"is-numeric-string?","is-numeric-string?",1701849360),is_numeric_string_QMARK_,new cljs.core.Keyword(null,"format","format",-1306924766),format,new cljs.core.Keyword(null,"mask","mask",-585748447),mask,new cljs.core.Keyword(null,"decimal-separator","decimal-separator",-1983110898),decimal_separator,new cljs.core.Keyword(null,"allow-leading-zeros?","allow-leading-zeros?",926985872),allow_leading_zeros_QMARK_,new cljs.core.Keyword(null,"fixed-decimal-points?","fixed-decimal-points?",-661041468),fixed_decimal_points_QMARK_,new cljs.core.Keyword(null,"decimal-points","decimal-points",1390914344),decimal_points], null))], null);
});
/**
 * creates a react input component for credit cards specifically. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**, **color** , *:size**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:on-focus**: is an optional function that will be called on focus
 *   - **:on-blur**: is an optional function that will be called on blur
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:mask**: is an optional string representing how the credit card numbers will appear before being filled
 * 
 *   Note that the output is a hashmap of the following format:
 *   ```
 *   { :value ..... ; string representation of number
 *  :formattedValue .... ; string representation as formatted with separator and decimal points
 *  :floatValue ... ; float value
 *   }
 *   ```
 */
rams_ui.components.input.credit_card_field = (function rams_ui$components$input$credit_card_field(p__66001){
var map__66002 = p__66001;
var map__66002__$1 = (((((!((map__66002 == null))))?(((((map__66002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66002):map__66002);
var config = map__66002__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"model","model",331153215));
var mask = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"mask","mask",-585748447));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66002__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.generic_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config,new cljs.core.Keyword(null,"formatting","formatting",-97267292),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777),false,new cljs.core.Keyword(null,"format","format",-1306924766),"#### #### #### ####",new cljs.core.Keyword(null,"mask","mask",-585748447),(cljs.core.truth_(mask)?mask:"_")], null))], null);
});
/**
 * creates a react input component for month year specifically. It should be noted that this is usually used for card expiry. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**, **color** , *:size**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:on-focus**: is an optional function that will be called on focus
 *   - **:on-blur**: is an optional function that will be called on blur
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:mask**: is an optional string representing how the credit card numbers will appear before being filled
 * 
 *   Note that the output is a hashmap of the following format:
 *   ```
 *   { :value ..... ; string representation of number
 *  :formattedValue .... ; string representation as formatted with separator and decimal points
 *  :floatValue ... ; float value
 *   }
 *   ```
 */
rams_ui.components.input.month_year_field = (function rams_ui$components$input$month_year_field(p__66004){
var map__66005 = p__66004;
var map__66005__$1 = (((((!((map__66005 == null))))?(((((map__66005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66005):map__66005);
var config = map__66005__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"model","model",331153215));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66005__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.generic_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"MM / YY",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"formatting","formatting",-97267292),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thousand-separator","thousand-separator",1143500777),false,new cljs.core.Keyword(null,"format","format",-1306924766),"## / ##",new cljs.core.Keyword(null,"mask","mask",-585748447),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["M","M","Y","Y"], null)], null)], 0))], null);
});
/**
 * creates a react input component that allows text. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**, **color** , *:size**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:on-focus**: is an optional function that will be called on focus
 *   - **:on-blur**: is an optional function that will be called on blur
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:multiline?**: is an optional boolean indicating whether the field should allow multiple lines
 *   - **:rows**: in case the **:multiline?** is true then this will indicate how many rows to show always
 *   - **:max-rows**: in case the **:multiline?** is true then this will indicate max rows before a scroll appears
 *   - **:prefix**: an optional string or react component to be presented before the **value**
 *   - **:suffix**: an optional string or react component to be presented after the **value**
 *   - **:hide-afer-ms**: is an optional argument that if given will cause the password to hide after x milliseconds where x is the value of this argument
 *   - **only-peek?**: is an optional boolean argument indicating that the password should automatically get hidden when the icon is not pressed
 */
rams_ui.components.input.password_field = (function rams_ui$components$input$password_field(p__66007){
var map__66008 = p__66007;
var map__66008__$1 = (((((!((map__66008 == null))))?(((((map__66008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66008):map__66008);
var config = map__66008__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var full_width_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"full-width?","full-width?",1477288349));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"model","model",331153215));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var only_peek_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"only-peek?","only-peek?",-283239003));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var hide_after_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66008__$1,new cljs.core.Keyword(null,"hide-after-ms","hide-after-ms",-758939961),(2000));
var on_focus = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66008__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var type = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("password");
return (function (p__66010){
var map__66011 = p__66010;
var map__66011__$1 = (((((!((map__66011 == null))))?(((((map__66011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66011):map__66011);
var config__$1 = map__66011__$1;
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"model","model",331153215));
var required_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var only_peek_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"only-peek?","only-peek?",-283239003));
var variant__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var hide_after_ms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66011__$1,new cljs.core.Keyword(null,"hide-after-ms","hide-after-ms",-758939961),(2000));
var on_focus__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"on-focus","on-focus",-13737624));
var on_blur__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"on-blur","on-blur",814300747));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66011__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.input.generic_field,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(config__$1,hide_after_ms__$1),new cljs.core.Keyword(null,"id","id",-1388402092),uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(type),new cljs.core.Keyword(null,"suffix","suffix",367373057),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.icon_button.icon_button,(cljs.core.truth_(only_peek_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),(function (){
return cljs.core.reset_BANG_(type,null);
}),new cljs.core.Keyword(null,"on-touch-start","on-touch-start",447239419),(function (){
return cljs.core.reset_BANG_(type,null);
}),new cljs.core.Keyword(null,"on-mouse-up","on-mouse-up",-1340533320),(function (){
return cljs.core.reset_BANG_(type,"password");
}),new cljs.core.Keyword(null,"on-mouse-leave","on-mouse-leave",-1864319528),(function (){
return cljs.core.reset_BANG_(type,"password");
}),new cljs.core.Keyword(null,"on-touch-end","on-touch-end",1515667389),(function (){
return cljs.core.reset_BANG_(type,"password");
})], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type),"password")){
if(cljs.core.truth_(hide_after_ms__$1)){
window.setTimeout((function (){
return cljs.core.reset_BANG_(type,"password");
}),hide_after_ms__$1);
} else {
}

return cljs.core.reset_BANG_(type,null);
} else {
return cljs.core.reset_BANG_(type,"password");
}
})], null)),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type),"password"))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.visibility_off.visibility_off], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.icons.visibility.visibility], null))], null)], 0))], null);
});
});
/**
 * creates a react input component for date/time/datetime handling.. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:full-width?**: is a boolean indicating that the field should take the full width of its parent
 *   - **:placeholder**: is an optional string that will appear if no value is given. Note that the normal variant will hide the placeholder with the label until it is focused
 *   - **:persistent**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 *   - **:min-date**: is an optional string in the provided format that will be the minimium date to be selectable. Only applicable if type is date
 *   - **:max-date**: is an optional string in the provided format that will be the maximium date to be selectable. Only applicable if type is date
 *   - **:type**: is an optional value indicating whether to provide a date/time/datetime selector. The options are :date | :time | :datetime. Default is :date
 *   - **:allow-keyboard?**: is an optional boolean to indicate whether the user can input/edit the date/time/datetime by hand.
 *   - **:error?**: is an optional boolean to indicate that the field should be in an error state. Note that the field can be in error state without this argument depending on what was inputted.
 *   - **:dialog?**: is an optional boolean indicating wether the selector should be a popup or inline
 *   - **:disabled-days**: is an optional array of strings in the format provided that will be disabled from selection. Is only available in case of type is :date
 *   - **:format**: is an optional representation of the output based on the type provided. The default is 'yyyy-MM-dd hh:mm a' for :datetime, 'hh:mm a' for :time and 'yyyy-MM-dd' for :date
 * 
 *   Please note that extra params can be seen in this [doc](https://material-ui-pickers.dev/api/DatePicker)
 */
rams_ui.components.input.date_field = (function rams_ui$components$input$date_field(p__66014){
var map__66015 = p__66014;
var map__66015__$1 = (((((!((map__66015 == null))))?(((((map__66015.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66015.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66015):map__66015);
var error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var disabled_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"disabled-days","disabled-days",-208217125));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"model","model",331153215));
var dialog_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"dialog?","dialog?",35068927));
var allow_keyboard_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"allow-keyboard?","allow-keyboard?",-1396099232));
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66015__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var date_utils = (new module$node_modules$$date_io$date_fns$build$index());
return (function (p__66017){
var map__66018 = p__66017;
var map__66018__$1 = (((((!((map__66018 == null))))?(((((map__66018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66018):map__66018);
var config = map__66018__$1;
var error_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var disabled_days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"disabled-days","disabled-days",-208217125));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"model","model",331153215));
var dialog_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"dialog?","dialog?",35068927));
var allow_keyboard_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"allow-keyboard?","allow-keyboard?",-1396099232));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var min_date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var placeholder__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var variant__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var persistent_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66018__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var styles = (rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.input.use_styles.call(null));
var format__$1 = (cljs.core.truth_(format)?format:(function (){var G__66020 = type__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("datetime",G__66020)){
return "yyyy-MM-dd hh:mm a";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"datetime","datetime",494675702),G__66020)){
return "yyyy-MM-dd hh:mm a";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"time","time",1385887882),G__66020)){
return "hh:mm a";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("time",G__66020)){
return "hh:mm a";
} else {
return "yyyy-MM-dd";

}
}
}
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.pickers.mui_pickers_utils_provider.mui_pickers_utils_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"utils","utils",-121060109),module$node_modules$$date_io$date_fns$build$index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(allow_keyboard_QMARK___$1)?(function (){var G__66021 = type__$1;
switch (G__66021) {
case "datetime":
return reagent_material_ui.pickers.keyboard_date_time_picker.keyboard_date_time_picker;

break;
case "time":
return reagent_material_ui.pickers.keyboard_time_picker.keyboard_time_picker;

break;
default:
return reagent_material_ui.pickers.keyboard_date_picker.keyboard_date_picker;

}
})():(function (){var G__66022 = type__$1;
switch (G__66022) {
case "datetime":
return reagent_material_ui.pickers.date_time_picker.date_time_picker;

break;
case "time":
return reagent_material_ui.pickers.time_picker.time_picker;

break;
default:
return reagent_material_ui.pickers.date_picker.date_picker;

}
})()),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"auto-ok","auto-ok",1333370294),true], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(config,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"help-text","help-text",1567653015),new cljs.core.Keyword(null,"min-date","min-date",999087300),new cljs.core.Keyword(null,"max-date","max-date",-1725227804),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"on-error","on-error",1728533530),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),new cljs.core.Keyword(null,"model","model",331153215),new cljs.core.Keyword(null,"input-variant","input-variant",-1744236618)], 0)),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(state),new cljs.core.Keyword(null,"class-name","class-name",945142584),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(styles),((cljs.core.not(label__$1))?new cljs.core.Keyword(null,"without-label","without-label",105812128).cljs$core$IFn$_invoke$arity$1(styles):null)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
return rams_ui.util.set_value(uuid,val);
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (err,val){
if((((!((err == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(err,"")))){
return rams_ui.util.set_error(uuid,err);
} else {
if((!((cljs.core.deref(error_state) == null)))){
return rams_ui.util.set_error(uuid,null);
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"variant","variant",-424354234),(cljs.core.truth_(dialog_QMARK___$1)?"dialog":"inline"),new cljs.core.Keyword(null,"format","format",-1306924766),format__$1], null),(cljs.core.truth_(disabled_days__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-disable-date","should-disable-date",361167095),(function (val){
return cljs.core.some((function (p1__66013_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date_utils.parse(p1__66013_SHARP_,format__$1),val);
}),disabled_days__$1);
})], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return error_QMARK___$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return help_text__$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
})())?cljs.core.deref(error_state):help_text__$1)], null):null),(cljs.core.truth_(placeholder__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1], null):null),(cljs.core.truth_(min_date__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-date","min-date",999087300),date_utils.parse(min_date__$1,format__$1)], null):null),(cljs.core.truth_(max_date__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-date","max-date",-1725227804),date_utils.parse(max_date__$1,format__$1)], null):null),(cljs.core.truth_(label__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1], null):null),(cljs.core.truth_(variant__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input-variant","input-variant",-1744236618),variant__$1], null):null)], 0))], null)], null)], null);
});
});
/**
 * creates a react calendar component for selecting a day from a month view.
 *   **NOTE** this component is **NOT** breadcrumb ready.
 *   
 *   The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:default-value**: is an optional string in the provided format that indicates the current selected day. It is by default today.
 *   - **:persistent**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:min-date**: is an optional string in the provided format that will be the minimium date to be selectable. Only applicable if type is date
 *   - **:max-date**: is an optional string in the provided format that will be the maximium date to be selectable. Only applicable if type is date
 *   - **:orientation**: is an optional argument to indicate if calendar is portrait or orientation. Default is portrait.
 *   - **:disable-toolbar?**: is an optional boolean indicating whether to show the top toolbar or not. Without the top toolbar you can not jump years.
 *   - **:disabled-days**: is an optional array of strings in the format provided that will be disabled from selection. Is only available in case of type is :date
 *   - **:badged-days**: is an optional hashmap with the keys being the days in the provided format with the value being either true or a hashmap that follows this [doc](https://material-ui.com/api/badge/)
 *   ```
 *   { "2020-10-04": true
 *  "2020-11-04": {:badge-content 10}}
 *   ```
 *   - **:format**: is an optional representation of the output based on the type provided. The default 'yyyy-MM-dd'
 * 
 *   Please note that extra params can be seen in this [doc](https://material-ui-pickers.dev/api/DatePicker)
 */
rams_ui.components.input.calendar_field = (function rams_ui$components$input$calendar_field(p__66024){
var map__66025 = p__66024;
var map__66025__$1 = (((((!((map__66025 == null))))?(((((map__66025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66025):map__66025);
var disabled_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"disabled-days","disabled-days",-208217125));
var badged_days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"badged-days","badged-days",927326429));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"model","model",331153215));
var disable_toolbar_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"disable-toolbar?","disable-toolbar?",531932257));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var min_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var default_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var orientation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66025__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var date_utils = (new module$node_modules$$date_io$date_fns$build$index());
return (function (p__66027){
var map__66028 = p__66027;
var map__66028__$1 = (((((!((map__66028 == null))))?(((((map__66028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66028):map__66028);
var config = map__66028__$1;
var disabled_days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"disabled-days","disabled-days",-208217125));
var badged_days__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"badged-days","badged-days",927326429));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"model","model",331153215));
var disable_toolbar_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"disable-toolbar?","disable-toolbar?",531932257));
var format__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var min_date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"min-date","min-date",999087300));
var max_date__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"max-date","max-date",-1725227804));
var default_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"default-value","default-value",232220170));
var orientation__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"orientation","orientation",623557579));
var persistent_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66028__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var styles = (rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.input.use_styles.call(null));
var format__$2 = (cljs.core.truth_(format__$1)?format__$1:"yyyy-MM-dd");
var vec__66030 = module$node_modules$react$index.useState(default_value__$1);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66030,(0),null);
var on_state_change = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66030,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(styles)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.pickers.mui_pickers_utils_provider.mui_pickers_utils_provider,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"utils","utils",-121060109),module$node_modules$$date_io$date_fns$build$index], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.pickers.date_picker.date_picker,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"value","value",305978217),state,new cljs.core.Keyword(null,"auto-ok","auto-ok",1333370294),true,new cljs.core.Keyword(null,"class-name","class-name",945142584),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(styles)], null)),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (val){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK___$1,new cljs.core.Keyword(null,"model","model",331153215),model__$1], 0));

return (on_state_change.cljs$core$IFn$_invoke$arity$1 ? on_state_change.cljs$core$IFn$_invoke$arity$1(val) : on_state_change.call(null,val));
}),new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (err,val){
if((((!((err == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(err,"")))){
return rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,err,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK___$1,new cljs.core.Keyword(null,"model","model",331153215),model__$1], 0));
} else {
if((!((cljs.core.deref(error_state) == null)))){
return rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK___$1,new cljs.core.Keyword(null,"model","model",331153215),model__$1], 0));
} else {
return null;
}
}
}),new cljs.core.Keyword(null,"variant","variant",-424354234),"static",new cljs.core.Keyword(null,"format","format",-1306924766),format__$2], null),(cljs.core.truth_(badged_days__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"renderDay","renderDay",-2055921825),(function (day,_,___$1,elem){
var badge_config = cljs.core.get.cljs$core$IFn$_invoke$arity$2(badged_days__$1,date_utils.format(day,format__$2));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(badge_config)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.badge.badge,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"overlap","overlap",-1673335644),"circle",new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"max","max",61366548),(9)], null),((cljs.core.map_QMARK_(badge_config))?badge_config:null),(((((!(cljs.core.map_QMARK_(badge_config)))) || (cljs.core.not(new cljs.core.Keyword(null,"badge-content","badge-content",1380607163).cljs$core$IFn$_invoke$arity$1(badge_config)))))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),"dot"], null):null)], 0)),elem], null):elem));
})], null):null),(cljs.core.truth_(orientation__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"orientation","orientation",623557579),orientation__$1], null):null),(cljs.core.truth_(disable_toolbar_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disable-toolbar","disable-toolbar",299051607),true], null):null),(cljs.core.truth_(disabled_days__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"should-disable-date","should-disable-date",361167095),(function (val){
return cljs.core.some((function (p1__66023_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(date_utils.parse(p1__66023_SHARP_,format__$2),val);
}),disabled_days__$1);
})], null):null),(cljs.core.truth_(min_date__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min-date","min-date",999087300),date_utils.parse(min_date__$1,format__$2)], null):null),(cljs.core.truth_(max_date__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max-date","max-date",-1725227804),date_utils.parse(max_date__$1,format__$2)], null):null)], 0))], null)], null)], null);
});
});
/**
 * creates a react select component. The attributes are as follows:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the field. As always you can use set-value to set the value of the field or set-error to set its error
 *   - **:options**: is a required array of options available. The array can be of strings or of hashmaps/arrays. In case of the first the arguments **get-option-label** & **render-option** are optional while if the array is made up of hashmaps/arrays then one of those functions is required.
 *   - **:label** is an optional string indicating the label of the field. Note taht depending on the variant this field might more or not
 *   - **:variant**: Optional parameters that follow the rules sent in [doc](https://material-ui.com/api/form-control/)
 *   - **:disabled?**: is an optional boolean indicating that the field is disabled
 *   - **:required?**: is an optional  boolean indicating if the field is required or not. Once the field is blurred if the value is empty or nil the field is marked as error
 *   - **:get-option-label**: is an optional function that will be called for every option given. The function takes as argument the option being rendered and should return a string or react component to be rendered
 *   - **:render-option**: is an optional function that will be called for every option given. The function takes as argument the option being rendered and should return a string or react component to be rendered. It differs from **get-option-label** as the latter is a lighter version
 *   - **allow-new?**: is an optinal boolean that if true indicates that the select is more of an autocomplete option.
 *   - **:allow-add?**: is an optional boolean that indicates that the select will allow the addition of new values to the list. When this option is true the select will have a value being a hashmap of the following format:
 *   ```
 *   {:label xxxx ; whatever the user wrote
 * :newly-added? true}
 *   ```
 *   It should be noted if the **multiple?** is true then the above hashmap will be part of the resulting array
 *   - **:on-add**: is an optional function that is called with the added value. Is only called if **allow-add?** is true.
 *   - **:multiple?**: is an optional boolean indicating whether multiple options are allowed. If true then selection is done by checkbox in the popup
 *   - **:limit**: is an optional argument that collapses the number of selections to only show the provided value. Extra values will appear as +X where X is the remaining selections. Only useful if **multiple?** is true
 *   - **:on-change**: is an optiona function that is called every time the value of the selection is changed. It will return the whole selected option. **NOTE** if selected option was of the form
 *   ```
 *   {:label "hi" :some-special "b"}
 *   ```
 *   then the function will get the following result
 *   ```
 *   [{:label "hi" :someSpecial "b"}]
 *   ```
 *   - **width**: is an optional parameter to indicate the width of the select box. Default is 300
 *   - **option-disabled-fn**: is an optional function that is called on every function. If the function returns true then the option will be disabled.
 *   - **group-by-fn**: is an optional function that is called for every option and the result defines the group it is in. It should be noted that this does not reshuffle options. Accordingly the following is critical
 *   ```
 *   [{:label "option1" :group-by "A"}
 * {:label "option3" :group-by "B"}
 *   {:label "option2" :group-by "A"}
 *   {:label "option4" :group-by "B"}]
 *   ```
 *   will result in the following output
 *   ```
 *   A
 * option 1
 *   B
 * option 3
 *   A
 * option 2
 *   B
 * option 4
 *   ```
 *   Accordingly it is recommended that the options be sorted by group-by  
 *   - **:persistent?**: an optional boolean identifies that the state of the field will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:help-text**: is an optional string that will appear under the field. As a help text or as an error if the set-error is not a message
 */
rams_ui.components.input.select_field = (function rams_ui$components$input$select_field(p__66036){
var map__66037 = p__66036;
var map__66037__$1 = (((((!((map__66037 == null))))?(((((map__66037.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66037.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66037):map__66037);
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"options","options",99638489));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var allow_add_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"allow-add?","allow-add?",-1021282403));
var render_option = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"render-option","render-option",1764811966));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"model","model",331153215));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var variant = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var allow_new_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"allow-new?","allow-new?",-981725139));
var get_option_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"get-option-label","get-option-label",-121005651));
var group_by_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"group-by-fn","group-by-fn",-238955985));
var option_disabled_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"option-disabled-fn","option-disabled-fn",-343293744));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var multiple_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var on_add = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66037__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var loading_state = rams_ui.util.get_loading.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(uuid,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
var temp = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
rams_ui.util.rendering_id(uuid);

return (function (p__66039){
var map__66040 = p__66039;
var map__66040__$1 = (((((!((map__66040 == null))))?(((((map__66040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__66040.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__66040):map__66040);
var options__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"options","options",99638489));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var allow_add_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"allow-add?","allow-add?",-1021282403));
var render_option__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"render-option","render-option",1764811966));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var limit__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var variant__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"variant","variant",-424354234));
var width__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var allow_new_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"allow-new?","allow-new?",-981725139));
var get_option_label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"get-option-label","get-option-label",-121005651));
var group_by_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"group-by-fn","group-by-fn",-238955985));
var option_disabled_fn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"option-disabled-fn","option-disabled-fn",-343293744));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var multiple_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"multiple?","multiple?",-490002283));
var on_add__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"on-add","on-add",-1283372042));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66040__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var styles = (rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.input.use_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.input.use_styles.call(null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.lab.autocomplete.autocomplete,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(cljs.core.deref(state))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.clj__GT_js(cljs.core.deref(state))], null):null),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"options","options",99638489),options__$1,new cljs.core.Keyword(null,"id","id",-1388402092),uuid,new cljs.core.Keyword(null,"loading","loading",-737050189),cljs.core.deref(loading_state),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),(cljs.core.truth_(width__$1)?width__$1:(300))], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt,new_val){
var result = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(new_val,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_(multiple_QMARK___$1)){
var seq__66042_66061 = cljs.core.seq(new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(temp)));
var chunk__66043_66062 = null;
var count__66044_66063 = (0);
var i__66045_66064 = (0);
while(true){
if((i__66045_66064 < count__66044_66063)){
var selected_hash_66065 = chunk__66043_66062.cljs$core$IIndexed$_nth$arity$2(null,i__66045_66064);
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(selected_hash_66065,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));


var G__66066 = seq__66042_66061;
var G__66067 = chunk__66043_66062;
var G__66068 = count__66044_66063;
var G__66069 = (i__66045_66064 + (1));
seq__66042_66061 = G__66066;
chunk__66043_66062 = G__66067;
count__66044_66063 = G__66068;
i__66045_66064 = G__66069;
continue;
} else {
var temp__5735__auto___66070 = cljs.core.seq(seq__66042_66061);
if(temp__5735__auto___66070){
var seq__66042_66071__$1 = temp__5735__auto___66070;
if(cljs.core.chunked_seq_QMARK_(seq__66042_66071__$1)){
var c__4556__auto___66072 = cljs.core.chunk_first(seq__66042_66071__$1);
var G__66073 = cljs.core.chunk_rest(seq__66042_66071__$1);
var G__66074 = c__4556__auto___66072;
var G__66075 = cljs.core.count(c__4556__auto___66072);
var G__66076 = (0);
seq__66042_66061 = G__66073;
chunk__66043_66062 = G__66074;
count__66044_66063 = G__66075;
i__66045_66064 = G__66076;
continue;
} else {
var selected_hash_66077 = cljs.core.first(seq__66042_66071__$1);
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(selected_hash_66077,null,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));


var G__66078 = cljs.core.next(seq__66042_66071__$1);
var G__66079 = null;
var G__66080 = (0);
var G__66081 = (0);
seq__66042_66061 = G__66078;
chunk__66043_66062 = G__66079;
count__66044_66063 = G__66080;
i__66045_66064 = G__66081;
continue;
}
} else {
}
}
break;
}

var seq__66046_66082 = cljs.core.seq(result);
var chunk__66047_66083 = null;
var count__66048_66084 = (0);
var i__66049_66085 = (0);
while(true){
if((i__66049_66085 < count__66048_66084)){
var val_66086 = chunk__66047_66083.cljs$core$IIndexed$_nth$arity$2(null,i__66049_66085);
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash(val_66086),val_66086,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));


var G__66087 = seq__66046_66082;
var G__66088 = chunk__66047_66083;
var G__66089 = count__66048_66084;
var G__66090 = (i__66049_66085 + (1));
seq__66046_66082 = G__66087;
chunk__66047_66083 = G__66088;
count__66048_66084 = G__66089;
i__66049_66085 = G__66090;
continue;
} else {
var temp__5735__auto___66091 = cljs.core.seq(seq__66046_66082);
if(temp__5735__auto___66091){
var seq__66046_66092__$1 = temp__5735__auto___66091;
if(cljs.core.chunked_seq_QMARK_(seq__66046_66092__$1)){
var c__4556__auto___66093 = cljs.core.chunk_first(seq__66046_66092__$1);
var G__66094 = cljs.core.chunk_rest(seq__66046_66092__$1);
var G__66095 = c__4556__auto___66093;
var G__66096 = cljs.core.count(c__4556__auto___66093);
var G__66097 = (0);
seq__66046_66082 = G__66094;
chunk__66047_66083 = G__66095;
count__66048_66084 = G__66096;
i__66049_66085 = G__66097;
continue;
} else {
var val_66098 = cljs.core.first(seq__66046_66092__$1);
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(cljs.core.hash(val_66098),val_66098,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));


var G__66099 = cljs.core.next(seq__66046_66092__$1);
var G__66100 = null;
var G__66101 = (0);
var G__66102 = (0);
seq__66046_66082 = G__66099;
chunk__66047_66083 = G__66100;
count__66048_66084 = G__66101;
i__66049_66085 = G__66102;
continue;
}
} else {
}
}
break;
}

rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected","selected",574897764),(function (){var iter__4529__auto__ = (function rams_ui$components$input$select_field_$_iter__66050(s__66051){
return (new cljs.core.LazySeq(null,(function (){
var s__66051__$1 = s__66051;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__66051__$1);
if(temp__5735__auto__){
var s__66051__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__66051__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__66051__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__66053 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__66052 = (0);
while(true){
if((i__66052 < size__4528__auto__)){
var val = cljs.core._nth(c__4527__auto__,i__66052);
cljs.core.chunk_append(b__66053,cljs.core.hash(val));

var G__66103 = (i__66052 + (1));
i__66052 = G__66103;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__66053),rams_ui$components$input$select_field_$_iter__66050(cljs.core.chunk_rest(s__66051__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__66053),null);
}
} else {
var val = cljs.core.first(s__66051__$2);
return cljs.core.cons(cljs.core.hash(val),rams_ui$components$input$select_field_$_iter__66050(cljs.core.rest(s__66051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(result);
})(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));
} else {
}

rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,(cljs.core.truth_(allow_add_QMARK___$1)?(cljs.core.truth_(multiple_QMARK___$1)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66033_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(p1__66033_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__66033_SHARP_,new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144)),new cljs.core.Keyword(null,"newly-added?","newly-added?",-1101832793),new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(p1__66033_SHARP_));
} else {
return p1__66033_SHARP_;
}
}),result):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144)),new cljs.core.Keyword(null,"newly-added?","newly-added?",-1101832793),new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(result))):result),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));

if(cljs.core.truth_(required_QMARK_)){
rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,((cljs.core.empty_QMARK_(result)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(result,""))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
}

if(cljs.core.truth_(((cljs.core.fn_QMARK_(on_add__$1))?(cljs.core.truth_(multiple_QMARK___$1)?new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(cljs.core.last(result)):new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(result)):false))){
var G__66054_66104 = (cljs.core.truth_(multiple_QMARK___$1)?cljs.core.last(result):result);
(on_add__$1.cljs$core$IFn$_invoke$arity$1 ? on_add__$1.cljs$core$IFn$_invoke$arity$1(G__66054_66104) : on_add__$1.call(null,G__66054_66104));
} else {
}

if(cljs.core.fn_QMARK_(on_change__$1)){
return (on_change__$1.cljs$core$IFn$_invoke$arity$1 ? on_change__$1.cljs$core$IFn$_invoke$arity$1(new_val) : on_change__$1.call(null,new_val));
} else {
return null;
}
}),new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.Keyword(null,"flex","flex",-1425124628).cljs$core$IFn$_invoke$arity$1(styles),new cljs.core.Keyword(null,"render-input","render-input",-1397448315),(function (params){
var props = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.text_field.text_field,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc_in(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.Keyword(null,"className","className",-1983287057)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"InputProps","InputProps",-1485068760),new cljs.core.Keyword(null,"className","className",-1983287057)], null)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(styles))].join('')),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ref","ref",1289896967),params.InputProps.ref,new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.boolean$(cljs.core.deref(error_state)),new cljs.core.Keyword(null,"inputProps","inputProps",1208237697),params.inputProps,new cljs.core.Keyword(null,"class-name","class-name",945142584),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"className","className",-1983287057).cljs$core$IFn$_invoke$arity$1(props)),clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(styles),((cljs.core.not(label__$1))?new cljs.core.Keyword(null,"without-label","without-label",105812128).cljs$core$IFn$_invoke$arity$1(styles):null)], null))].join('')], null),(cljs.core.truth_((function (){var or__4126__auto__ = help_text__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"helper-text","helper-text",-1920318309),((cljs.core.not(help_text__$1))?cljs.core.deref(error_state):help_text__$1)], null):null),(cljs.core.truth_(required_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"required","required",1807647006),true,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
if(cljs.core.truth_(((cljs.core.not(cljs.core.deref(state)))?required_QMARK_:false))){
return rams_ui.util.set_error.cljs$core$IFn$_invoke$arity$variadic(uuid,true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
} else {
return null;
}
})], null):null),(cljs.core.truth_(label__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1], null):null),(cljs.core.truth_(variant__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"variant","variant",-424354234),variant__$1], null):null)], 0))], null));
}),new cljs.core.Keyword(null,"get-option-disabled","get-option-disabled",1182976952),(function (option){
var clj_option = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(option,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.fn_QMARK_(option_disabled_fn__$1)){
return (option_disabled_fn__$1.cljs$core$IFn$_invoke$arity$1 ? option_disabled_fn__$1.cljs$core$IFn$_invoke$arity$1(clj_option) : option_disabled_fn__$1.call(null,clj_option));
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(clj_option);
}
})], null),(cljs.core.truth_((function (){var or__4126__auto__ = allow_new_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return allow_add_QMARK___$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"free-solo","free-solo",-1436133471),true], null):null),((cljs.core.fn_QMARK_(group_by_fn__$1))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group-by","group-by",-379139802),(function (opt){
var option = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
return (group_by_fn__$1.cljs$core$IFn$_invoke$arity$1 ? group_by_fn__$1.cljs$core$IFn$_invoke$arity$1(option) : group_by_fn__$1.call(null,option));
})], null):null),(cljs.core.truth_(disabled_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null),(cljs.core.truth_(limit__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"limit-tags","limit-tags",-977053485),limit__$1], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = ((cljs.core.fn_QMARK_(get_option_label__$1)) && (cljs.core.not(multiple_QMARK___$1)) && ((!(cljs.core.fn_QMARK_(render_option__$1)))));
if(or__4126__auto__){
return or__4126__auto__;
} else {
return allow_add_QMARK___$1;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"get-option-label","get-option-label",-121005651),(function (opt){
var params = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
if(cljs.core.truth_((function (){var and__4115__auto__ = allow_add_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return new cljs.core.Keyword(null,"newlyAdded?","newlyAdded?",145599144).cljs$core$IFn$_invoke$arity$1(params);
} else {
return and__4115__auto__;
}
})())){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(params);
} else {
if(cljs.core.fn_QMARK_(get_option_label__$1)){
return (get_option_label__$1.cljs$core$IFn$_invoke$arity$1 ? get_option_label__$1.cljs$core$IFn$_invoke$arity$1(params) : get_option_label__$1.call(null,params));
} else {
return params;

}
}
})], null):null),(cljs.core.truth_(multiple_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),true,new cljs.core.Keyword(null,"disableCloseOnSelect","disableCloseOnSelect",-1812934076),true,new cljs.core.Keyword(null,"render-option","render-option",1764811966),(function (opt){
var params = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(opt,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
var hashed = cljs.core.hash(params);
if(cljs.core.contains_QMARK_(params,cljs.core.deref(state))){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(hashed,params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));
} else {
}

return reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.box.box,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.selector.checkbox,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),hashed,new cljs.core.Keyword(null,"value","value",305978217),params,new cljs.core.Keyword(null,"model","model",331153215),temp,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (checked_QMARK_){
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selected","selected",574897764),(cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(temp),hashed):cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66034_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hashed,p1__66034_SHARP_);
}),cljs.core.deref(temp))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),temp], 0));

return rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(uuid,(cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),params):cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66035_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params,p1__66035_SHARP_);
}),cljs.core.deref(state))),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"model","model",331153215),model,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_], 0));
})], null)], null),((cljs.core.fn_QMARK_(render_option__$1))?(render_option__$1.cljs$core$IFn$_invoke$arity$1 ? render_option__$1.cljs$core$IFn$_invoke$arity$1(params) : render_option__$1.call(null,params)):((cljs.core.fn_QMARK_(get_option_label__$1))?(get_option_label__$1.cljs$core$IFn$_invoke$arity$1 ? get_option_label__$1.cljs$core$IFn$_invoke$arity$1(params) : get_option_label__$1.call(null,params)):params
))], null));
})], null):null)], 0))], null);
});
});

//# sourceMappingURL=rams_ui.components.input.js.map
