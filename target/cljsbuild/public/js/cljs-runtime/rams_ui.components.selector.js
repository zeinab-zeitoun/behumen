goog.provide('rams_ui.components.selector');
rams_ui.components.selector.check_styles = reagent_material_ui.styles.make_styles.cljs$core$IFn$_invoke$arity$1((function (theme){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),(function (){var fexpr__80712 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80712.cljs$core$IFn$_invoke$arity$1 ? fexpr__80712.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__80712.call(null,(2)));
})(),new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),(function (){var fexpr__80713 = new cljs.core.Keyword(null,"spacing","spacing",204422175).cljs$core$IFn$_invoke$arity$1(theme);
return (fexpr__80713.cljs$core$IFn$_invoke$arity$1 ? fexpr__80713.cljs$core$IFn$_invoke$arity$1((2)) : fexpr__80713.call(null,(2)));
})()], null)], null);
}));
rams_ui.components.selector.checkbox_helper = (function rams_ui$components$selector$checkbox_helper(p__80718){
var map__80719 = p__80718;
var map__80719__$1 = (((((!((map__80719 == null))))?(((((map__80719.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80719.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80719):map__80719);
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var indeterminate_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"indeterminate-value","indeterminate-value",759728550));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"value","value",305978217));
var as_switch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"as-switch?","as-switch?",996792493));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var grouped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"grouped?","grouped?",531080948));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80719__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(as_switch_QMARK_)?reagent_material_ui.core.switch_component.switch$:reagent_material_ui.core.checkbox.checkbox),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(color)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null):null),(cljs.core.truth_(size)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size], null):null),(cljs.core.truth_(disabled_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (evt){
var clicked_QMARK_ = evt.target.checked;
rams_ui.util.set_value.cljs$core$IFn$_invoke$arity$variadic(id,(cljs.core.truth_(clicked_QMARK_)?(cljs.core.truth_(grouped_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),value):value):(cljs.core.truth_(grouped_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__80714_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,p1__80714_SHARP_);
}),cljs.core.deref(state)):null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(clicked_QMARK_) : on_change.call(null,clicked_QMARK_));
} else {
return null;
}
})], null),(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = (cljs.core.truth_(grouped_QMARK_)?cljs.core.some((function (p1__80715_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,p1__80715_SHARP_);
}),cljs.core.deref(state)):cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,cljs.core.deref(state)));
if(cljs.core.truth_(and__4115__auto__)){
return value;
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = indeterminate_value;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(grouped_QMARK_)){
return cljs.core.some((function (p1__80716_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indeterminate_value,p1__80716_SHARP_);
}),cljs.core.deref(state));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indeterminate_value,cljs.core.deref(state));
}
} else {
return and__4115__auto__;
}
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),true], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"checked","checked",-50955819),false], null)),(cljs.core.truth_((function (){var and__4115__auto__ = indeterminate_value;
if(cljs.core.truth_(and__4115__auto__)){
if(cljs.core.truth_(grouped_QMARK_)){
return cljs.core.some((function (p1__80717_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indeterminate_value,p1__80717_SHARP_);
}),cljs.core.deref(state));
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(indeterminate_value,cljs.core.deref(state));
}
} else {
return and__4115__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"indeterminate","indeterminate",-513040976),true], null):null)], 0))], null);
});
/**
 * creates a material ui checkbox component. It takes the following configurations:
 * 
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the menu. This is useful to preset the value of the checkbox.
 *   - **:label**: is an optional label that will appear with the checkbox. By default the label appears to the left in ltr and right in rtl
 *   - **:label-placement**: is an optional string to indicate where the label should be placed. Potential values are left | right | top | bottom. Note that left and right will take into account the ltr/rtl direction of the page
 *   - **:disabled?**: is a boolean indicating whether the checkbox is disabled?
 *   - **:color**: is an optional string that identifies the color. Potential values are primary | secondary | default
 *   - **:value**: is a required argument and is given to the **id** key once the checkbox is selected. Note that the **id** should have this value if the checkbox is to be preselected 
 *   - **:indeterminate-value**: is an option argument and is given to the **id** key once the checkbox is in an indeterminate state. Note that the **id** should have this value if the checkbox is to be indeterminate. This is usually useful when a select all has some selected but not all
 *   - **on-change**: is an optional function that is called when the checkbox is clicked. It is given a single argument that is true if checked and false if not
 *   - **:persistent?**: an optional boolean identifies that the state of the checkbox will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:size**: is an optional string that indicates the size of the checkbox. Potential values are size | medium with the default being medium 
 */
rams_ui.components.selector.checkbox = (function rams_ui$components$selector$checkbox(p__80721){
var map__80722 = p__80721;
var map__80722__$1 = (((((!((map__80722 == null))))?(((((map__80722.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80722.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80722):map__80722);
var config = map__80722__$1;
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_placement = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var indeterminate_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"indeterminate-value","indeterminate-value",759728550));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"value","value",305978217));
var as_switch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"as-switch?","as-switch?",996792493));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80722__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
rams_ui.util.rendering_id(uuid);

return (function (p__80724){
var map__80725 = p__80724;
var map__80725__$1 = (((((!((map__80725 == null))))?(((((map__80725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80725.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80725):map__80725);
var config__$1 = map__80725__$1;
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var on_change__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"classes","classes",2037804510));
var model__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"model","model",331153215));
var label_placement__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var indeterminate_value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"indeterminate-value","indeterminate-value",759728550));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80725__$1,new cljs.core.Keyword(null,"label","label",1718410804));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(label_placement__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079),label_placement__$1], null):null),(cljs.core.truth_(label__$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),label__$1], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value__$1,new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.selector.checkbox_helper,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(config__$1,new cljs.core.Keyword(null,"id","id",-1388402092),uuid)], null))], null)], 0))], null);
});
});
/**
 * creates a material ui checkbox group component. It takes the following arguments:
 * 
 *   - **config**: is a configuration hash map thta is made up of the following keys
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the menu. This is useful to preset the value of the checkboxs or get the value. It returns a list of the values of the checked checkboxes.
 *   - **:label**: is an optional label that will appear with the checkbox. By default the label appears to the left in ltr and right in rtl
 *   - **:disabled?**: is a boolean indicating whether the checkbox group is disabled?
 *   - **:color**: is an optional string that identifies the default color of the checkboxes. Potential values are primary | secondary | default
 *   - **:persistent?**: an optional boolean identifies that the state of the checkbox will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:size**: is an optional string that indicates the default size of the checkboxs. Potential values are size | medium with the default being medium
 *   - **:help-text**: is an optional help text that will appear under the checkboxes if no error is present
 *   - **:error-text**: is an optional help text that will appear under the checkboxes if there is an error
 *   - **:error?**: is an optional boolean to indicate that there is an error
 *   - **:min**: is an optional integer to indicate the minimum required checkboxes to select. If given and there is less checkboxes selected then an error is raised irrespective of value of **:error?**
 *   - **:max**: is an optional integer to indicate the maximum allowed checkboxes to select. After the number is selected the remaining checkboxes are disabled.
 *   - **:row?**: is an optional boolean to indicate whether the group should be rendered horizontally or vertically. If horizontally then it will wrap at the end of the width
 *   - **:required?**: is an optional boolean indicating whether selecting some checkboxes is required or not.
 *   - **:class-name**: is an optional style given to the whole group
 *   - **items**: is an array of hashmaps each identifying one of the checkbox options. Each hashmap has the following:
 *   - **:label**: is a required argument that will appear with the checkbox. By default the label appears to the left in ltr and right in rtl
 *   - **:value**: is a required argument and is the value added to the array result of **:id** when checkbox selected.
 *  - **:label-placement**: is an optional string to indicate where the label should be placed for this checkbox. Potential values are left | right | top | bottom. Note that left and right will take into account the ltr/rtl direction of the page 
 *   - **:disabled?**: is a boolean indicating whether this checkbox is disabled?
 *   - **:color**: is an optional string that identifies the color of this checkbox. Potential values are primary | secondary | default
 *   - **:size**: is an optional string that indicates the  size of this checkbox. Potential values are size | medium with the default being medium
 *   
 */
rams_ui.components.selector.checkbox_group = (function rams_ui$components$selector$checkbox_group(p__80728,items){
var map__80729 = p__80728;
var map__80729__$1 = (((((!((map__80729 == null))))?(((((map__80729.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80729.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80729):map__80729);
var error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"model","model",331153215));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"min","min",444991522));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var as_switch_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"as-switch?","as-switch?",996792493));
var row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"row?","row?",394970415));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"max","max",61366548));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80729__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
rams_ui.util.rendering_id(uuid);

return (function (p__80731,items__$1){
var map__80732 = p__80731;
var map__80732__$1 = (((((!((map__80732 == null))))?(((((map__80732.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80732.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80732):map__80732);
var error_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var min__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"min","min",444991522));
var required_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var max__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"max","max",61366548));
var error_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var class_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80732__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var error_QMARK___$2 = (function (){var or__4126__auto__ = error_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (function (){var and__4115__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(cljs.core.deref(state))) && ((!((cljs.core.deref(state) == null)))));
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = min__$1;
if(cljs.core.truth_(and__4115__auto__)){
var and__4115__auto____$1 = cljs.core.deref(state);
if(cljs.core.truth_(and__4115__auto____$1)){
return (cljs.core.count(cljs.core.deref(state)) < min__$1);
} else {
return and__4115__auto____$1;
}
} else {
return and__4115__auto__;
}
}
}
})();
var use_styles = (rams_ui.components.selector.check_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.selector.check_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.selector.check_styles.call(null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control.form_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(required_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null),(cljs.core.truth_(row_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),true], null):null),(cljs.core.truth_((function (){var or__4126__auto__ = error_QMARK___$2;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.deref(error_state);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(use_styles),class_name__$1], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_label.form_label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"legend"], null),label__$1], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_group.form_group,cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$selector$checkbox_group_$_iter__80734(s__80735){
return (new cljs.core.LazySeq(null,(function (){
var s__80735__$1 = s__80735;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80735__$1);
if(temp__5735__auto__){
var s__80735__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80735__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80735__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80737 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80736 = (0);
while(true){
if((i__80736 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__80736);
cljs.core.chunk_append(b__80737,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079),new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.selector.checkbox_helper,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"as-switch?","as-switch?",996792493),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"model","model",331153215)],[(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item):color__$1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),as_switch_QMARK_,(cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item):size__$1),uuid,true,persistent_QMARK_,(function (){var or__4126__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = max__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max__$1,cljs.core.count(cljs.core.deref(state)))) && (cljs.core.not_any_QMARK_(((function (i__80736,and__4115__auto__,or__4126__auto____$1,or__4126__auto__,item,c__4527__auto__,size__4528__auto__,b__80737,s__80735__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80732,map__80732__$1,error_QMARK___$1,disabled_QMARK___$1,min__$1,required_QMARK___$1,color__$1,size__$1,label__$1,max__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80729,map__80729__$1,error_QMARK_,disabled_QMARK_,model,min,required_QMARK_,color,as_switch_QMARK_,row_QMARK_,size,label,id,max,error_text,persistent_QMARK_,help_text,class_name){
return (function (p1__80727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),p1__80727_SHARP_);
});})(i__80736,and__4115__auto__,or__4126__auto____$1,or__4126__auto__,item,c__4527__auto__,size__4528__auto__,b__80737,s__80735__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80732,map__80732__$1,error_QMARK___$1,disabled_QMARK___$1,min__$1,required_QMARK___$1,color__$1,size__$1,label__$1,max__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80729,map__80729__$1,error_QMARK_,disabled_QMARK_,model,min,required_QMARK_,color,as_switch_QMARK_,row_QMARK_,size,label,id,max,error_text,persistent_QMARK_,help_text,class_name))
,cljs.core.deref(state))));
} else {
return and__4115__auto__;
}
}
}
})(),model])], null))], null)], 0))], null));

var G__80748 = (i__80736 + (1));
i__80736 = G__80748;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80737),rams_ui$components$selector$checkbox_group_$_iter__80734(cljs.core.chunk_rest(s__80735__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80737),null);
}
} else {
var item = cljs.core.first(s__80735__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079),new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item)], null):null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rams_ui.components.selector.checkbox_helper,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"as-switch?","as-switch?",996792493),new cljs.core.Keyword(null,"size","size",1098693007),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"grouped?","grouped?",531080948),new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),new cljs.core.Keyword(null,"model","model",331153215)],[(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item):color__$1),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),as_switch_QMARK_,(cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item):size__$1),uuid,true,persistent_QMARK_,(function (){var or__4126__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = max__$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(max__$1,cljs.core.count(cljs.core.deref(state)))) && (cljs.core.not_any_QMARK_(((function (and__4115__auto__,or__4126__auto____$1,or__4126__auto__,item,s__80735__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80732,map__80732__$1,error_QMARK___$1,disabled_QMARK___$1,min__$1,required_QMARK___$1,color__$1,size__$1,label__$1,max__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80729,map__80729__$1,error_QMARK_,disabled_QMARK_,model,min,required_QMARK_,color,as_switch_QMARK_,row_QMARK_,size,label,id,max,error_text,persistent_QMARK_,help_text,class_name){
return (function (p1__80727_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),p1__80727_SHARP_);
});})(and__4115__auto__,or__4126__auto____$1,or__4126__auto__,item,s__80735__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80732,map__80732__$1,error_QMARK___$1,disabled_QMARK___$1,min__$1,required_QMARK___$1,color__$1,size__$1,label__$1,max__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80729,map__80729__$1,error_QMARK_,disabled_QMARK_,model,min,required_QMARK_,color,as_switch_QMARK_,row_QMARK_,size,label,id,max,error_text,persistent_QMARK_,help_text,class_name))
,cljs.core.deref(state))));
} else {
return and__4115__auto__;
}
}
}
})(),model])], null))], null)], 0))], null),rams_ui$components$selector$checkbox_group_$_iter__80734(cljs.core.rest(s__80735__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items__$1);
})())], null),(cljs.core.truth_((function (){var or__4126__auto__ = error_text__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = help_text__$1;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
}
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_helper_text.form_helper_text,(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
})())?cljs.core.deref(error_state):(cljs.core.truth_((function (){var and__4115__auto__ = error_QMARK___$2;
if(cljs.core.truth_(and__4115__auto__)){
return error_text__$1;
} else {
return and__4115__auto__;
}
})())?error_text__$1:help_text__$1))], null):null)], null);
});
});
/**
 * creates a material ui radio group component. It takes the following arguments:
 * 
 *   - **config**: is a configuration hash map thta is made up of the following keys
 *   - **:id**: is an optional keyword/string/number/array that uniquely identifies the radio group. This is useful to preset the value of the radio group or get the value. It returns a single value.
 *   - **:label**: is an optional label that will appear with the checkbox. By default the label appears to the left in ltr and right in rtl
 *   - **:disabled?**: is a boolean indicating whether the checkbox group is disabled?
 *   - **:color**: is an optional string that identifies the default color of the checkboxes. Potential values are primary | secondary | default
 *   - **:persistent?**: an optional boolean identifies that the state of the checkbox will carry over from one page to the next
 *   - **:model**: is an optional atom that can be given to have the **id** part of. Should only be used if the history is not needed
 *   - **:size**: is an optional string that indicates the default size of the checkboxs. Potential values are size | medium with the default being medium
 *   - **:help-text**: is an optional help text that will appear under the checkboxes if no error is present
 *   - **:error-text**: is an optional help text that will appear under the checkboxes if there is an error
 *   - **:error?**: is an optional boolean to indicate that there is an error
 *   - **:row?**: is an optional boolean to indicate whether the group should be rendered horizontally or vertically. If horizontally then it will wrap at the end of the width
 *   - **:required?**: is an optional boolean indicating whether selecting some checkboxes is required or not.
 *   - **:class-name**: is an optional style given to the whole group
 *   - **items**: is an array of hashmaps each identifying one of the checkbox options. Each hashmap has the following:
 *   - **:label**: is a required argument that will appear with the checkbox. By default the label appears to the left in ltr and right in rtl
 *   - **:value**: is a required argument and is the value added to the array result of **:id** when checkbox selected.
 *  - **:label-placement**: is an optional string to indicate where the label should be placed for this checkbox. Potential values are left | right | top | bottom. Note that left and right will take into account the ltr/rtl direction of the page 
 *   - **:disabled?**: is a boolean indicating whether this checkbox is disabled?
 *   - **:color**: is an optional string that identifies the color of this checkbox. Potential values are primary | secondary | default
 *   - **:size**: is an optional string that indicates the  size of this checkbox. Potential values are size | medium with the default being medium
 *   
 */
rams_ui.components.selector.radio_group = (function rams_ui$components$selector$radio_group(p__80738,items){
var map__80739 = p__80738;
var map__80739__$1 = (((((!((map__80739 == null))))?(((((map__80739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80739):map__80739);
var error_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var model = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"model","model",331153215));
var required_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var row_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"row?","row?",394970415));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var error_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var persistent_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"persistent?","persistent?",-945121801));
var help_text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var class_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80739__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var uuid = (cljs.core.truth_(id)?id:rams_ui.util.gen_uuid());
var error_state = rams_ui.util.get_error.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
var state = rams_ui.util.get_value.cljs$core$IFn$_invoke$arity$variadic(id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"persistent?","persistent?",-945121801),persistent_QMARK_,new cljs.core.Keyword(null,"model","model",331153215),model], 0));
rams_ui.util.rendering_id(uuid);

return (function (p__80741,items__$1){
var map__80742 = p__80741;
var map__80742__$1 = (((((!((map__80742 == null))))?(((((map__80742.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80742.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80742):map__80742);
var error_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"error?","error?",-460689159));
var disabled_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181));
var required_QMARK___$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"required?","required?",-872514462));
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var size__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var label__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var error_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"error-text","error-text",2021893718));
var help_text__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"help-text","help-text",1567653015));
var class_name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80742__$1,new cljs.core.Keyword(null,"class-name","class-name",945142584));
var error_QMARK___$2 = (function (){var or__4126__auto__ = error_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = cljs.core.deref(error_state);
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = required_QMARK___$1;
if(cljs.core.truth_(and__4115__auto__)){
return ((cljs.core.empty_QMARK_(cljs.core.deref(state))) && ((!((cljs.core.deref(state) == null)))));
} else {
return and__4115__auto__;
}
}
}
})();
var use_styles = (rams_ui.components.selector.check_styles.cljs$core$IFn$_invoke$arity$0 ? rams_ui.components.selector.check_styles.cljs$core$IFn$_invoke$arity$0() : rams_ui.components.selector.check_styles.call(null));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control.form_control,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(required_QMARK___$1)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"required","required",1807647006),true], null):null),(cljs.core.truth_(row_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"row","row",-570139521),true], null):null),(cljs.core.truth_(error_QMARK___$2)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),true], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class-name","class-name",945142584),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(use_styles),class_name__$1], null)], null)], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_label.form_label,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),"legend"], null),label__$1], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio_group.radio_group,(cljs.core.truth_(cljs.core.deref(state))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(state)], null):null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1((function (){var iter__4529__auto__ = (function rams_ui$components$selector$radio_group_$_iter__80744(s__80745){
return (new cljs.core.LazySeq(null,(function (){
var s__80745__$1 = s__80745;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__80745__$1);
if(temp__5735__auto__){
var s__80745__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__80745__$2)){
var c__4527__auto__ = cljs.core.chunk_first(s__80745__$2);
var size__4528__auto__ = cljs.core.count(c__4527__auto__);
var b__80747 = cljs.core.chunk_buffer(size__4528__auto__);
if((function (){var i__80746 = (0);
while(true){
if((i__80746 < size__4528__auto__)){
var item = cljs.core._nth(c__4527__auto__,i__80746);
cljs.core.chunk_append(b__80747,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079),new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item)], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__4126__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item);
}
})(),new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio.radio,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var or__4126__auto__ = color__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item):color__$1)], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (i__80746,item,c__4527__auto__,size__4528__auto__,b__80747,s__80745__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80742,map__80742__$1,error_QMARK___$1,disabled_QMARK___$1,required_QMARK___$1,color__$1,size__$1,label__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80739,map__80739__$1,error_QMARK_,disabled_QMARK_,model,required_QMARK_,color,row_QMARK_,size,label,id,error_text,persistent_QMARK_,help_text,class_name){
return (function (evt){
var clicked_QMARK_ = evt.target.checked;
return rams_ui.util.set_value(uuid,(cljs.core.truth_(clicked_QMARK_)?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item):null));
});})(i__80746,item,c__4527__auto__,size__4528__auto__,b__80747,s__80745__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80742,map__80742__$1,error_QMARK___$1,disabled_QMARK___$1,required_QMARK___$1,color__$1,size__$1,label__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80739,map__80739__$1,error_QMARK_,disabled_QMARK_,model,required_QMARK_,color,row_QMARK_,size,label,id,error_text,persistent_QMARK_,help_text,class_name))
], null),(cljs.core.truth_((function (){var or__4126__auto__ = size__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item):size__$1)], null):null)], 0))], null))], null)], 0))], null));

var G__80749 = (i__80746 + (1));
i__80746 = G__80749;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__80747),rams_ui$components$selector$radio_group_$_iter__80744(cljs.core.chunk_rest(s__80745__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__80747),null);
}
} else {
var item = cljs.core.first(s__80745__$2);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_control_label.form_control_label,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(item)], null):null),(cljs.core.truth_(new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079),new cljs.core.Keyword(null,"label-placement","label-placement",-2112694079).cljs$core$IFn$_invoke$arity$1(item)], null):null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181),(function (){var or__4126__auto__ = disabled_QMARK___$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"disabled?","disabled?",-1523234181).cljs$core$IFn$_invoke$arity$1(item);
}
})(),new cljs.core.Keyword(null,"control","control",1892578036),reagent.core.as_element.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.radio.radio,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_((function (){var or__4126__auto__ = color__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(item):color__$1)], null):null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (item,s__80745__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80742,map__80742__$1,error_QMARK___$1,disabled_QMARK___$1,required_QMARK___$1,color__$1,size__$1,label__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80739,map__80739__$1,error_QMARK_,disabled_QMARK_,model,required_QMARK_,color,row_QMARK_,size,label,id,error_text,persistent_QMARK_,help_text,class_name){
return (function (evt){
var clicked_QMARK_ = evt.target.checked;
return rams_ui.util.set_value(uuid,(cljs.core.truth_(clicked_QMARK_)?new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(item):null));
});})(item,s__80745__$2,temp__5735__auto__,error_QMARK___$2,use_styles,map__80742,map__80742__$1,error_QMARK___$1,disabled_QMARK___$1,required_QMARK___$1,color__$1,size__$1,label__$1,error_text__$1,help_text__$1,class_name__$1,uuid,error_state,state,map__80739,map__80739__$1,error_QMARK_,disabled_QMARK_,model,required_QMARK_,color,row_QMARK_,size,label,id,error_text,persistent_QMARK_,help_text,class_name))
], null),(cljs.core.truth_((function (){var or__4126__auto__ = size__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item);
}
})())?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(cljs.core.truth_(new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item))?new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(item):size__$1)], null):null)], 0))], null))], null)], 0))], null),rams_ui$components$selector$radio_group_$_iter__80744(cljs.core.rest(s__80745__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4529__auto__(items__$1);
})())], null),(cljs.core.truth_((function (){var or__4126__auto__ = error_text__$1;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = help_text__$1;
if(cljs.core.truth_(or__4126__auto____$1)){
return or__4126__auto____$1;
} else {
var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
}
}
})())?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent_material_ui.core.form_helper_text.form_helper_text,(cljs.core.truth_((function (){var and__4115__auto__ = cljs.core.deref(error_state);
if(cljs.core.truth_(and__4115__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(error_state),true);
} else {
return and__4115__auto__;
}
})())?cljs.core.deref(error_state):(cljs.core.truth_((function (){var and__4115__auto__ = error_QMARK___$2;
if(cljs.core.truth_(and__4115__auto__)){
return error_text__$1;
} else {
return and__4115__auto__;
}
})())?error_text__$1:help_text__$1))], null):null)], null);
});
});

//# sourceMappingURL=rams_ui.components.selector.js.map
