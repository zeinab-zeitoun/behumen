goog.provide('bouncer.validators');
bouncer.validators.required = cljs.core.with_meta((function bouncer$validators$required(value){
if(typeof value === 'string'){
return (!(cljs.core.empty_QMARK_(value)));
} else {
return (!((value == null)));
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),false,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be present",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","required","bouncer.validators/required",-465826887)], null));
bouncer.validators.number = cljs.core.with_meta((function bouncer$validators$number(maybe_a_number){
return typeof maybe_a_number === 'number';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","number","bouncer.validators/number",-1457674719)], null));
bouncer.validators.integer = cljs.core.with_meta((function bouncer$validators$integer(maybe_an_int){
return cljs.core.integer_QMARK_(maybe_an_int);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be an integer",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","integer","bouncer.validators/integer",-412024393)], null));
bouncer.validators.boolean$ = cljs.core.with_meta((function bouncer$validators$boolean(maybe_a_boolean){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,maybe_a_boolean)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,maybe_a_boolean)));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a boolean",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","boolean","bouncer.validators/boolean",-14906243)], null));
bouncer.validators.string = cljs.core.with_meta((function bouncer$validators$string(maybe_a_string){
return typeof maybe_a_string === 'string';
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a string",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","string","bouncer.validators/string",-17988663)], null));
bouncer.validators.in_range = cljs.core.with_meta((function bouncer$validators$in_range(value,p__65690){
var vec__65691 = p__65690;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__65691,(1),null);
return (((from <= value)) && ((value <= to)));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be in a specified range",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","in-range","bouncer.validators/in-range",-1520951092)], null));
bouncer.validators.positive = cljs.core.with_meta((function bouncer$validators$positive(number){
return (number > (0));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a positive number",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","positive","bouncer.validators/positive",-155537451)], null));
bouncer.validators.member = cljs.core.with_meta((function bouncer$validators$member(value,coll){
return cljs.core.some(cljs.core.PersistentHashSet.createAsIfByAssoc([value]),coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be one of the values in the list",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","member","bouncer.validators/member",-1164005429)], null));
bouncer.validators.custom = cljs.core.with_meta((function bouncer$validators$custom(value,pred){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Warning: bouncer.validators/custom is deprecated and will be removed. Use plain functions instead."], 0));

return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(value) : pred.call(null,value));
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","custom","bouncer.validators/custom",2142880173)], null));
bouncer.validators.every = cljs.core.with_meta((function bouncer$validators$every(coll,pred){
return cljs.core.every_QMARK_(pred,coll);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"All items in %s must satisfy the predicate",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","every","bouncer.validators/every",-281179041)], null));
bouncer.validators.matches = cljs.core.with_meta((function bouncer$validators$matches(value,re){
return cljs.core.complement(cljs.core.empty_QMARK_)(cljs.core.re_seq(re,value));
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must satisfy the given pattern",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","matches","bouncer.validators/matches",-1184599255)], null));
bouncer.validators.email = cljs.core.with_meta((function bouncer$validators$email(value){
var and__4115__auto__ = (bouncer.validators.required.cljs$core$IFn$_invoke$arity$1 ? bouncer.validators.required.cljs$core$IFn$_invoke$arity$1(value) : bouncer.validators.required.call(null,value));
if(cljs.core.truth_(and__4115__auto__)){
var G__65701 = value;
var G__65702 = /^[^@]+@[^@\\.]+[\\.].+/;
return (bouncer.validators.matches.cljs$core$IFn$_invoke$arity$2 ? bouncer.validators.matches.cljs$core$IFn$_invoke$arity$2(G__65701,G__65702) : bouncer.validators.matches.call(null,G__65701,G__65702));
} else {
return and__4115__auto__;
}
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid email address",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","email","bouncer.validators/email",-1058548467)], null));
bouncer.validators.datetime = cljs.core.with_meta((function() { 
var bouncer$validators$datetime__delegate = function (value,p__65707){
var vec__65708 = p__65707;
var seq__65709 = cljs.core.seq(vec__65708);
var first__65710 = cljs.core.first(seq__65709);
var seq__65709__$1 = cljs.core.next(seq__65709);
var opt = first__65710;
var _ = seq__65709__$1;
var formatter = ((typeof opt === 'string')?cljs_time.format.formatter.cljs$core$IFn$_invoke$arity$1(opt):opt);
try{if(cljs.core.truth_(formatter)){
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$2(formatter,value);
} else {
return cljs_time.format.parse.cljs$core$IFn$_invoke$arity$1(value);
}
}catch (e65715){if((e65715 instanceof Error)){
var e = e65715;
return false;
} else {
throw e65715;

}
}};
var bouncer$validators$datetime = function (value,var_args){
var p__65707 = null;
if (arguments.length > 1) {
var G__65733__i = 0, G__65733__a = new Array(arguments.length -  1);
while (G__65733__i < G__65733__a.length) {G__65733__a[G__65733__i] = arguments[G__65733__i + 1]; ++G__65733__i;}
  p__65707 = new cljs.core.IndexedSeq(G__65733__a,0,null);
} 
return bouncer$validators$datetime__delegate.call(this,value,p__65707);};
bouncer$validators$datetime.cljs$lang$maxFixedArity = 1;
bouncer$validators$datetime.cljs$lang$applyTo = (function (arglist__65734){
var value = cljs.core.first(arglist__65734);
var p__65707 = cljs.core.rest(arglist__65734);
return bouncer$validators$datetime__delegate(value,p__65707);
});
bouncer$validators$datetime.cljs$core$IFn$_invoke$arity$variadic = bouncer$validators$datetime__delegate;
return bouncer$validators$datetime;
})()
,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s must be a valid date",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","datetime","bouncer.validators/datetime",-2030523505)], null));
bouncer.validators.max_count = cljs.core.with_meta((function bouncer$validators$max_count(value,maximum){
return (cljs.core.count(cljs.core.seq(value)) <= maximum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is longer than the maximum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","max-count","bouncer.validators/max-count",-835039936)], null));
bouncer.validators.min_count = cljs.core.with_meta((function bouncer$validators$min_count(value,minimum){
return (cljs.core.count(cljs.core.seq(value)) >= minimum);
}),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"optional","optional",2053951509),true,new cljs.core.Keyword(null,"default-message-format","default-message-format",179806141),"%s is less than the minimum",new cljs.core.Keyword(null,"validator","validator",-1966190681),new cljs.core.Keyword("bouncer.validators","min-count","bouncer.validators/min-count",-359601934)], null));

//# sourceMappingURL=bouncer.validators.js.map
