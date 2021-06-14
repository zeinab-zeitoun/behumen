goog.provide('bouncer.core');
bouncer.core.build_multi_step = (function bouncer$core$build_multi_step(var_args){
var G__65689 = arguments.length;
switch (G__65689) {
case 2:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2 = (function (key_or_vec,fn_vec){
return bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3(key_or_vec,fn_vec,cljs.core.PersistentVector.EMPTY);
}));

(bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$3 = (function (key_or_vec,p__65694,acc){
while(true){
var vec__65695 = p__65694;
var seq__65696 = cljs.core.seq(vec__65695);
var first__65697 = cljs.core.first(seq__65696);
var seq__65696__$1 = cljs.core.next(seq__65696);
var f_or_list = first__65697;
var rest = seq__65696__$1;
if(cljs.core.not(f_or_list)){
return acc;
} else {
if(cljs.core.sequential_QMARK_(f_or_list)){
var vec__65698 = f_or_list;
var seq__65699 = cljs.core.seq(vec__65698);
var first__65700 = cljs.core.first(seq__65699);
var seq__65699__$1 = cljs.core.next(seq__65699);
var f = first__65700;
var opts = seq__65699__$1;
var G__65760 = key_or_vec;
var G__65761 = rest;
var G__65762 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f,key_or_vec], null),opts));
key_or_vec = G__65760;
p__65694 = G__65761;
acc = G__65762;
continue;
} else {
var G__65763 = key_or_vec;
var G__65764 = rest;
var G__65765 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [f_or_list,key_or_vec], null));
key_or_vec = G__65763;
p__65694 = G__65764;
acc = G__65765;
continue;

}
}
break;
}
}));

(bouncer.core.build_multi_step.cljs$lang$maxFixedArity = 3);

/**
 * Takes two arguments:
 * 
 *   `parent-keyword` is a :keyword - or a vector of :keywords denoting a path in a associative structure
 * 
 *   `validations-map` is a map of forms following this spec:
 * 
 * 
 *    {:keyword [f g] :another-keyword h}
 * 
 * 
 *   Merges `:parent-keyword` with every first element of validations-map, transforming it into:
 * 
 * 
 *    ([:parent-keyword :keyword] [f g] [:parent-keyword :another-keyword] h)
 */
bouncer.core.merge_path = (function bouncer$core$merge_path(parent_key,validations_map){
var parent_key__$1 = (((parent_key instanceof cljs.core.Keyword))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_key], null):parent_key);
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__65703){
var vec__65704 = p__65703;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65704,(0),null);
var validations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65704,(1),null);
if(cljs.core.vector_QMARK_(key)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_key__$1,key)),validations], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(parent_key__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [key], null))),validations], null);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([validations_map], 0));
});
bouncer.core.build_steps = (function bouncer$core$build_steps(p__65711){
var vec__65712 = p__65711;
var seq__65713 = cljs.core.seq(vec__65712);
var first__65714 = cljs.core.first(seq__65713);
var seq__65713__$1 = cljs.core.next(seq__65713);
var head = first__65714;
var tail = seq__65713__$1;
var forms = vec__65712;
var forms__$1 = ((cljs.core.map_QMARK_(head))?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([head], 0))):forms);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__65716){
var vec__65717 = p__65716;
var key_or_vec = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65717,(0),null);
var sym_or_coll = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65717,(1),null);
var rule = vec__65717;
if(cljs.core.vector_QMARK_(sym_or_coll)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,bouncer.core.build_multi_step.cljs$core$IFn$_invoke$arity$2(key_or_vec,sym_or_coll));
} else {
if(cljs.core.map_QMARK_(sym_or_coll)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(acc,(function (){var G__65720 = bouncer.core.merge_path(key_or_vec,sym_or_coll);
return (bouncer.core.build_steps.cljs$core$IFn$_invoke$arity$1 ? bouncer.core.build_steps.cljs$core$IFn$_invoke$arity$1(G__65720) : bouncer.core.build_steps.call(null,G__65720));
})());
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sym_or_coll,key_or_vec], null));

}
}
}),cljs.core.PersistentVector.EMPTY,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),forms__$1));
});
bouncer.core.pre_condition_met_QMARK_ = (function bouncer$core$pre_condition_met_QMARK_(pre_fn,map){
var or__4126__auto__ = (pre_fn == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return (pre_fn.cljs$core$IFn$_invoke$arity$1 ? pre_fn.cljs$core$IFn$_invoke$arity$1(map) : pre_fn.call(null,map));
}
});
/**
 * Wraps pred in the context of validating a single value
 * 
 *   - `acc`  is the map being validated
 * 
 *   - `pred` is a validator
 * 
 *   - `k`    the path to the value to be validated in the associative structure `acc`
 * 
 *   - `args` any extra args to pred
 * 
 *   It only runs pred if:
 * 
 *   - the validator contains a pre-condition *and* it is met or;
 *   - the validator is optional  *and* there is a non-nil value to be validated (this information is read from pred's metadata) or;
 *   - there are no previous errors for the given path
 * 
 *   Returns `acc` augmented with a namespace qualified ::errors keyword
 */
bouncer.core.wrap = (function bouncer$core$wrap(message_fn,acc,p__65722){
var vec__65723 = p__65722;
var seq__65724 = cljs.core.seq(vec__65723);
var first__65725 = cljs.core.first(seq__65724);
var seq__65724__$1 = cljs.core.next(seq__65724);
var pred = first__65725;
var first__65725__$1 = cljs.core.first(seq__65724__$1);
var seq__65724__$2 = cljs.core.next(seq__65724__$1);
var k = first__65725__$1;
var args = seq__65724__$2;
var k__$1 = ((cljs.core.vector_QMARK_(k))?k:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [k], null));
var error_path = cljs.core.cons(new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289),k__$1);
var map__65726 = cljs.core.meta(pred);
var map__65726__$1 = (((((!((map__65726 == null))))?(((((map__65726.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65726.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65726):map__65726);
var metadata = map__65726__$1;
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65726__$1,new cljs.core.Keyword(null,"optional","optional",2053951509),false);
var default_message_format = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__65726__$1,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"Custom validation failed for %s");
var meta_with_defaults = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([metadata,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),default_message_format,new cljs.core.Keyword(null,"optional","optional",2053951509),optional], null)], 0));
var vec__65727 = cljs.core.split_with(cljs.core.complement(cljs.core.keyword_QMARK_),args);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65727,(0),null);
var opts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65727,(1),null);
var map__65730 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,opts);
var map__65730__$1 = (((((!((map__65730 == null))))?(((((map__65730.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65730.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65730):map__65730);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65730__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var pre = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65730__$1,new cljs.core.Keyword(null,"pre","pre",2118456869));
var pred_subject = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,k__$1);
if(cljs.core.truth_(bouncer.core.pre_condition_met_QMARK_(pre,acc))){
if(cljs.core.truth_((function (){var or__4126__auto__ = (function (){var and__4115__auto__ = optional;
if(cljs.core.truth_(and__4115__auto__)){
return (pred_subject == null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var or__4126__auto____$1 = (!(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(acc,error_path))));
if(or__4126__auto____$1){
return or__4126__auto____$1;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(pred,pred_subject,args__$1);
}
}
})())){
return acc;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(acc,error_path,(function (p1__65721_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__65721_SHARP_,(function (){var G__65735 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),k__$1,new cljs.core.Keyword(null,"value","value",305978217),pred_subject,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.seq(args__$1),new cljs.core.Keyword(null,"metadata","metadata",1799301597),meta_with_defaults,new cljs.core.Keyword(null,"message","message",-406056002),message], null);
return (message_fn.cljs$core$IFn$_invoke$arity$1 ? message_fn.cljs$core$IFn$_invoke$arity$1(G__65735) : message_fn.call(null,G__65735));
})());
}));
}
} else {
return acc;
}
});
/**
 * Internal Use.
 * 
 *   Chain of responsibility.
 * 
 *   Takes the current state and a collection of validators `fs`
 * 
 *   Will run all validators against `old-state` and eventually return a vector with the result - the errors map - and the new state - the original map augmented with the errors map.
 * 
 *   See also `wrap`
 */
bouncer.core.wrap_chain = (function bouncer$core$wrap_chain(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65767 = arguments.length;
var i__4737__auto___65768 = (0);
while(true){
if((i__4737__auto___65768 < len__4736__auto___65767)){
args__4742__auto__.push((arguments[i__4737__auto___65768]));

var G__65769 = (i__4737__auto___65768 + (1));
i__4737__auto___65768 = G__65769;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((2) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((2)),(0),null)):null);
return bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4743__auto__);
});

(bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic = (function (old_state,message_fn,fs){
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(bouncer.core.wrap,message_fn),old_state,fs);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("bouncer.core","errors","bouncer.core/errors",-444562289).cljs$core$IFn$_invoke$arity$1(new_state),new_state], null);
}));

(bouncer.core.wrap_chain.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(bouncer.core.wrap_chain.cljs$lang$applyTo = (function (seq65736){
var G__65737 = cljs.core.first(seq65736);
var seq65736__$1 = cljs.core.next(seq65736);
var G__65738 = cljs.core.first(seq65736__$1);
var seq65736__$2 = cljs.core.next(seq65736__$1);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__65737,G__65738,seq65736__$2);
}));

/**
 * Internal use.
 * 
 *   Validates the map m using the validation functions fs.
 * 
 *   Returns a vector where the first element is the map of validation errors if any and the second is the original map (possibly) augmented with the errors map.
 */
bouncer.core.validate_STAR_ = (function bouncer$core$validate_STAR_(message_fn,m,fs){
var G__65742 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,m], null);
var vec__65743 = G__65742;
var errors = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743,(0),null);
var state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65743,(1),null);
var ret = vec__65743;
var fs__$1 = fs;
var G__65742__$1 = G__65742;
var fs__$2 = fs__$1;
while(true){
var vec__65746 = G__65742__$1;
var errors__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65746,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65746,(1),null);
var ret__$1 = vec__65746;
var fs__$3 = fs__$2;
if(cljs.core.seq(fs__$3)){
var G__65773 = bouncer.core.wrap_chain.cljs$core$IFn$_invoke$arity$variadic(state__$1,message_fn,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(fs__$3)], 0));
var G__65774 = cljs.core.rest(fs__$3);
G__65742__$1 = G__65773;
fs__$2 = G__65774;
continue;
} else {
return ret__$1;
}
break;
}
});
/**
 * Use together with `validate`, e.g.:
 * 
 * 
 *    (core/validate core/with-default-messages {}
 *                   :name v/required)
 */
bouncer.core.with_default_messages = (function bouncer$core$with_default_messages(error){
var map__65749 = error;
var map__65749__$1 = (((((!((map__65749 == null))))?(((((map__65749.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__65749.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__65749):map__65749);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65749__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65749__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__65749__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
return goog.string.format((function (){var or__4126__auto__ = message;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141).cljs$core$IFn$_invoke$arity$1(metadata);
}
})(),cljs.core.name(cljs.core.peek(path)));
});
/**
 * Takes a
 * 
 *   - `message-fn` (optional) responsible for transforming error metadata into
 *   the validation result (defaults to `with-default-messages`)
 * 
 *   - `m` map to be validated
 * 
 *   - `forms` validations to be performed on the map
 * 
 *   forms can be a single validator set or a sequence of key/value pairs where:
 * 
 *   key   ==> :keyword or [:a :path]
 * 
 *   value ==> validation-function or
 *          validator-set or
 *         [[validation-function args+opts]] or
 *         [validation-function another-validation-function] or
 *         [validation-function [another-validation-function args+opts]]
 * 
 *   e.g.:
 * 
 * 
 *    (core/validate a-map
 *             :name v/required
 *             :age  [v/required
 *                   [v/number :message "age must be a number"]]
 *             [:passport :number] v/positive)
 * 
 * 
 *   Returns a vector where the first element is the map of validation errors if
 *   any and the second is the original map (possibly) augmented with the errors
 *   map.
 * 
 *   See also `defvalidator`
 */
bouncer.core.validate = (function bouncer$core$validate(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65775 = arguments.length;
var i__4737__auto___65776 = (0);
while(true){
if((i__4737__auto___65776 < len__4736__auto___65775)){
args__4742__auto__.push((arguments[i__4737__auto___65776]));

var G__65777 = (i__4737__auto___65776 + (1));
i__4737__auto___65776 = G__65777;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bouncer.core.validate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
var vec__65752 = ((cljs.core.fn_QMARK_(cljs.core.first(args)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args),cljs.core.next(args)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [bouncer.core.with_default_messages,args], null));
var message_fn = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752,(0),null);
var args__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65752,(1),null);
var vec__65755 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(args__$1),cljs.core.next(args__$1)], null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65755,(0),null);
var forms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65755,(1),null);
return bouncer.core.validate_STAR_(message_fn,m,bouncer.core.build_steps(forms));
}));

(bouncer.core.validate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bouncer.core.validate.cljs$lang$applyTo = (function (seq65751){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65751));
}));

/**
 * Takes a map and one or more validation functions with semantics provided by "validate". Returns true if the map passes all validations. False otherwise.
 */
bouncer.core.valid_QMARK_ = (function bouncer$core$valid_QMARK_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___65778 = arguments.length;
var i__4737__auto___65779 = (0);
while(true){
if((i__4737__auto___65779 < len__4736__auto___65778)){
args__4742__auto__.push((arguments[i__4737__auto___65779]));

var G__65780 = (i__4737__auto___65779 + (1));
i__4737__auto___65779 = G__65780;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((0) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((0)),(0),null)):null);
return bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__4743__auto__);
});

(bouncer.core.valid_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.empty_QMARK_(cljs.core.first(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(bouncer.core.validate,args)));
}));

(bouncer.core.valid_QMARK_.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(bouncer.core.valid_QMARK_.cljs$lang$applyTo = (function (seq65758){
var self__4724__auto__ = this;
return self__4724__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq65758));
}));


//# sourceMappingURL=bouncer.core.js.map
