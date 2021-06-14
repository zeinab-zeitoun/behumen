goog.provide('camel_snake_kebab.core');



























/**
 * Converts the case of a string according to the rule for the first
 *   word, remaining words, and the separator.
 */
camel_snake_kebab.core.convert_case = (function camel_snake_kebab$core$convert_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80142 = arguments.length;
var i__4737__auto___80143 = (0);
while(true){
if((i__4737__auto___80143 < len__4736__auto___80142)){
args__4742__auto__.push((arguments[i__4737__auto___80143]));

var G__80144 = (i__4737__auto___80143 + (1));
i__4737__auto___80143 = G__80144;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((4) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((4)),(0),null)):null);
return camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.convert_case.cljs$core$IFn$_invoke$arity$variadic = (function (first_fn,rest_fn,sep,s,rest){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,first_fn,rest_fn,sep,s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest], 0));
}));

(camel_snake_kebab.core.convert_case.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(camel_snake_kebab.core.convert_case.cljs$lang$applyTo = (function (seq80052){
var G__80053 = cljs.core.first(seq80052);
var seq80052__$1 = cljs.core.next(seq80052);
var G__80054 = cljs.core.first(seq80052__$1);
var seq80052__$2 = cljs.core.next(seq80052__$1);
var G__80055 = cljs.core.first(seq80052__$2);
var seq80052__$3 = cljs.core.next(seq80052__$2);
var G__80056 = cljs.core.first(seq80052__$3);
var seq80052__$4 = cljs.core.next(seq80052__$3);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80053,G__80054,G__80055,G__80056,seq80052__$4);
}));

camel_snake_kebab.core.__GT_PascalCase = (function camel_snake_kebab$core$__GT_PascalCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80145 = arguments.length;
var i__4737__auto___80146 = (0);
while(true){
if((i__4737__auto___80146 < len__4736__auto___80145)){
args__4742__auto__.push((arguments[i__4737__auto___80146]));

var G__80147 = (i__4737__auto___80146 + (1));
i__4737__auto___80146 = G__80147;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCase.cljs$lang$applyTo = (function (seq80066){
var G__80067 = cljs.core.first(seq80066);
var seq80066__$1 = cljs.core.next(seq80066);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80067,seq80066__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseString = (function camel_snake_kebab$core$__GT_PascalCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80148 = arguments.length;
var i__4737__auto___80149 = (0);
while(true){
if((i__4737__auto___80149 < len__4736__auto___80148)){
args__4742__auto__.push((arguments[i__4737__auto___80149]));

var G__80150 = (i__4737__auto___80149 + (1));
i__4737__auto___80149 = G__80150;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseString.cljs$lang$applyTo = (function (seq80071){
var G__80072 = cljs.core.first(seq80071);
var seq80071__$1 = cljs.core.next(seq80071);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80072,seq80071__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseSymbol = (function camel_snake_kebab$core$__GT_PascalCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80157 = arguments.length;
var i__4737__auto___80158 = (0);
while(true){
if((i__4737__auto___80158 < len__4736__auto___80157)){
args__4742__auto__.push((arguments[i__4737__auto___80158]));

var G__80159 = (i__4737__auto___80158 + (1));
i__4737__auto___80158 = G__80159;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseSymbol.cljs$lang$applyTo = (function (seq80076){
var G__80077 = cljs.core.first(seq80076);
var seq80076__$1 = cljs.core.next(seq80076);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80077,seq80076__$1);
}));


camel_snake_kebab.core.__GT_PascalCaseKeyword = (function camel_snake_kebab$core$__GT_PascalCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80163 = arguments.length;
var i__4737__auto___80164 = (0);
while(true){
if((i__4737__auto___80164 < len__4736__auto___80163)){
args__4742__auto__.push((arguments[i__4737__auto___80164]));

var G__80166 = (i__4737__auto___80164 + (1));
i__4737__auto___80164 = G__80166;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_PascalCaseKeyword.cljs$lang$applyTo = (function (seq80081){
var G__80082 = cljs.core.first(seq80081);
var seq80081__$1 = cljs.core.next(seq80081);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80082,seq80081__$1);
}));

camel_snake_kebab.core.__GT_Camel_Snake_Case = (function camel_snake_kebab$core$__GT_Camel_Snake_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80168 = arguments.length;
var i__4737__auto___80169 = (0);
while(true){
if((i__4737__auto___80169 < len__4736__auto___80168)){
args__4742__auto__.push((arguments[i__4737__auto___80169]));

var G__80170 = (i__4737__auto___80169 + (1));
i__4737__auto___80169 = G__80170;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case.cljs$lang$applyTo = (function (seq80089){
var G__80090 = cljs.core.first(seq80089);
var seq80089__$1 = cljs.core.next(seq80089);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80090,seq80089__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_String = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80175 = arguments.length;
var i__4737__auto___80176 = (0);
while(true){
if((i__4737__auto___80176 < len__4736__auto___80175)){
args__4742__auto__.push((arguments[i__4737__auto___80176]));

var G__80177 = (i__4737__auto___80176 + (1));
i__4737__auto___80176 = G__80177;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_String.cljs$lang$applyTo = (function (seq80096){
var G__80097 = cljs.core.first(seq80096);
var seq80096__$1 = cljs.core.next(seq80096);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80097,seq80096__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80182 = arguments.length;
var i__4737__auto___80183 = (0);
while(true){
if((i__4737__auto___80183 < len__4736__auto___80182)){
args__4742__auto__.push((arguments[i__4737__auto___80183]));

var G__80184 = (i__4737__auto___80183 + (1));
i__4737__auto___80183 = G__80184;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Symbol.cljs$lang$applyTo = (function (seq80098){
var G__80099 = cljs.core.first(seq80098);
var seq80098__$1 = cljs.core.next(seq80098);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80099,seq80098__$1);
}));


camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword = (function camel_snake_kebab$core$__GT_Camel_Snake_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80189 = arguments.length;
var i__4737__auto___80190 = (0);
while(true){
if((i__4737__auto___80190 < len__4736__auto___80189)){
args__4742__auto__.push((arguments[i__4737__auto___80190]));

var G__80191 = (i__4737__auto___80190 + (1));
i__4737__auto___80190 = G__80191;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.capitalize,clojure.string.capitalize,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_Camel_Snake_Case_Keyword.cljs$lang$applyTo = (function (seq80100){
var G__80101 = cljs.core.first(seq80100);
var seq80100__$1 = cljs.core.next(seq80100);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80101,seq80100__$1);
}));

camel_snake_kebab.core.__GT_camelCase = (function camel_snake_kebab$core$__GT_camelCase(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80194 = arguments.length;
var i__4737__auto___80195 = (0);
while(true){
if((i__4737__auto___80195 < len__4736__auto___80194)){
args__4742__auto__.push((arguments[i__4737__auto___80195]));

var G__80196 = (i__4737__auto___80195 + (1));
i__4737__auto___80195 = G__80196;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCase.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_camelCase.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCase.cljs$lang$applyTo = (function (seq80102){
var G__80103 = cljs.core.first(seq80102);
var seq80102__$1 = cljs.core.next(seq80102);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80103,seq80102__$1);
}));


camel_snake_kebab.core.__GT_camelCaseString = (function camel_snake_kebab$core$__GT_camelCaseString(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80197 = arguments.length;
var i__4737__auto___80198 = (0);
while(true){
if((i__4737__auto___80198 < len__4736__auto___80197)){
args__4742__auto__.push((arguments[i__4737__auto___80198]));

var G__80199 = (i__4737__auto___80198 + (1));
i__4737__auto___80198 = G__80199;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseString.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseString.cljs$lang$applyTo = (function (seq80104){
var G__80105 = cljs.core.first(seq80104);
var seq80104__$1 = cljs.core.next(seq80104);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80105,seq80104__$1);
}));


camel_snake_kebab.core.__GT_camelCaseSymbol = (function camel_snake_kebab$core$__GT_camelCaseSymbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80200 = arguments.length;
var i__4737__auto___80201 = (0);
while(true){
if((i__4737__auto___80201 < len__4736__auto___80200)){
args__4742__auto__.push((arguments[i__4737__auto___80201]));

var G__80202 = (i__4737__auto___80201 + (1));
i__4737__auto___80201 = G__80202;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseSymbol.cljs$lang$applyTo = (function (seq80106){
var G__80107 = cljs.core.first(seq80106);
var seq80106__$1 = cljs.core.next(seq80106);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80107,seq80106__$1);
}));


camel_snake_kebab.core.__GT_camelCaseKeyword = (function camel_snake_kebab$core$__GT_camelCaseKeyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80204 = arguments.length;
var i__4737__auto___80205 = (0);
while(true){
if((i__4737__auto___80205 < len__4736__auto___80204)){
args__4742__auto__.push((arguments[i__4737__auto___80205]));

var G__80206 = (i__4737__auto___80205 + (1));
i__4737__auto___80205 = G__80206;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.capitalize,"",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_camelCaseKeyword.cljs$lang$applyTo = (function (seq80108){
var G__80109 = cljs.core.first(seq80108);
var seq80108__$1 = cljs.core.next(seq80108);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80109,seq80108__$1);
}));

camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80207 = arguments.length;
var i__4737__auto___80208 = (0);
while(true){
if((i__4737__auto___80208 < len__4736__auto___80207)){
args__4742__auto__.push((arguments[i__4737__auto___80208]));

var G__80210 = (i__4737__auto___80208 + (1));
i__4737__auto___80208 = G__80210;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE.cljs$lang$applyTo = (function (seq80110){
var G__80111 = cljs.core.first(seq80110);
var seq80110__$1 = cljs.core.next(seq80110);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80111,seq80110__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_STRING(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80212 = arguments.length;
var i__4737__auto___80213 = (0);
while(true){
if((i__4737__auto___80213 < len__4736__auto___80212)){
args__4742__auto__.push((arguments[i__4737__auto___80213]));

var G__80215 = (i__4737__auto___80213 + (1));
i__4737__auto___80213 = G__80215;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_STRING.cljs$lang$applyTo = (function (seq80112){
var G__80113 = cljs.core.first(seq80112);
var seq80112__$1 = cljs.core.next(seq80112);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80113,seq80112__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_SYMBOL(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80216 = arguments.length;
var i__4737__auto___80217 = (0);
while(true){
if((i__4737__auto___80217 < len__4736__auto___80216)){
args__4742__auto__.push((arguments[i__4737__auto___80217]));

var G__80218 = (i__4737__auto___80217 + (1));
i__4737__auto___80217 = G__80218;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_SYMBOL.cljs$lang$applyTo = (function (seq80114){
var G__80115 = cljs.core.first(seq80114);
var seq80114__$1 = cljs.core.next(seq80114);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80115,seq80114__$1);
}));


camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD = (function camel_snake_kebab$core$__GT_SCREAMING_SNAKE_CASE_KEYWORD(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80219 = arguments.length;
var i__4737__auto___80220 = (0);
while(true){
if((i__4737__auto___80220 < len__4736__auto___80219)){
args__4742__auto__.push((arguments[i__4737__auto___80220]));

var G__80221 = (i__4737__auto___80220 + (1));
i__4737__auto___80220 = G__80221;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.upper_case,clojure.string.upper_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_SCREAMING_SNAKE_CASE_KEYWORD.cljs$lang$applyTo = (function (seq80116){
var G__80117 = cljs.core.first(seq80116);
var seq80116__$1 = cljs.core.next(seq80116);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80117,seq80116__$1);
}));

camel_snake_kebab.core.__GT_snake_case = (function camel_snake_kebab$core$__GT_snake_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80222 = arguments.length;
var i__4737__auto___80223 = (0);
while(true){
if((i__4737__auto___80223 < len__4736__auto___80222)){
args__4742__auto__.push((arguments[i__4737__auto___80223]));

var G__80224 = (i__4737__auto___80223 + (1));
i__4737__auto___80223 = G__80224;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_snake_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case.cljs$lang$applyTo = (function (seq80118){
var G__80119 = cljs.core.first(seq80118);
var seq80118__$1 = cljs.core.next(seq80118);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80119,seq80118__$1);
}));


camel_snake_kebab.core.__GT_snake_case_string = (function camel_snake_kebab$core$__GT_snake_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80225 = arguments.length;
var i__4737__auto___80226 = (0);
while(true){
if((i__4737__auto___80226 < len__4736__auto___80225)){
args__4742__auto__.push((arguments[i__4737__auto___80226]));

var G__80228 = (i__4737__auto___80226 + (1));
i__4737__auto___80226 = G__80228;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_string.cljs$lang$applyTo = (function (seq80120){
var G__80121 = cljs.core.first(seq80120);
var seq80120__$1 = cljs.core.next(seq80120);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80121,seq80120__$1);
}));


camel_snake_kebab.core.__GT_snake_case_symbol = (function camel_snake_kebab$core$__GT_snake_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80230 = arguments.length;
var i__4737__auto___80231 = (0);
while(true){
if((i__4737__auto___80231 < len__4736__auto___80230)){
args__4742__auto__.push((arguments[i__4737__auto___80231]));

var G__80234 = (i__4737__auto___80231 + (1));
i__4737__auto___80231 = G__80234;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_symbol.cljs$lang$applyTo = (function (seq80122){
var G__80123 = cljs.core.first(seq80122);
var seq80122__$1 = cljs.core.next(seq80122);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80123,seq80122__$1);
}));


camel_snake_kebab.core.__GT_snake_case_keyword = (function camel_snake_kebab$core$__GT_snake_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80241 = arguments.length;
var i__4737__auto___80242 = (0);
while(true){
if((i__4737__auto___80242 < len__4736__auto___80241)){
args__4742__auto__.push((arguments[i__4737__auto___80242]));

var G__80243 = (i__4737__auto___80242 + (1));
i__4737__auto___80242 = G__80243;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"_",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_snake_case_keyword.cljs$lang$applyTo = (function (seq80124){
var G__80125 = cljs.core.first(seq80124);
var seq80124__$1 = cljs.core.next(seq80124);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80125,seq80124__$1);
}));

camel_snake_kebab.core.__GT_kebab_case = (function camel_snake_kebab$core$__GT_kebab_case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80244 = arguments.length;
var i__4737__auto___80245 = (0);
while(true){
if((i__4737__auto___80245 < len__4736__auto___80244)){
args__4742__auto__.push((arguments[i__4737__auto___80245]));

var G__80246 = (i__4737__auto___80245 + (1));
i__4737__auto___80245 = G__80246;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case.cljs$lang$applyTo = (function (seq80126){
var G__80127 = cljs.core.first(seq80126);
var seq80126__$1 = cljs.core.next(seq80126);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80127,seq80126__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_string = (function camel_snake_kebab$core$__GT_kebab_case_string(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80247 = arguments.length;
var i__4737__auto___80248 = (0);
while(true){
if((i__4737__auto___80248 < len__4736__auto___80247)){
args__4742__auto__.push((arguments[i__4737__auto___80248]));

var G__80249 = (i__4737__auto___80248 + (1));
i__4737__auto___80248 = G__80249;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_string.cljs$lang$applyTo = (function (seq80128){
var G__80129 = cljs.core.first(seq80128);
var seq80128__$1 = cljs.core.next(seq80128);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80129,seq80128__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_symbol = (function camel_snake_kebab$core$__GT_kebab_case_symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80250 = arguments.length;
var i__4737__auto___80251 = (0);
while(true){
if((i__4737__auto___80251 < len__4736__auto___80250)){
args__4742__auto__.push((arguments[i__4737__auto___80251]));

var G__80252 = (i__4737__auto___80251 + (1));
i__4737__auto___80251 = G__80252;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_symbol.cljs$lang$applyTo = (function (seq80130){
var G__80131 = cljs.core.first(seq80130);
var seq80130__$1 = cljs.core.next(seq80130);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80131,seq80130__$1);
}));


camel_snake_kebab.core.__GT_kebab_case_keyword = (function camel_snake_kebab$core$__GT_kebab_case_keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80254 = arguments.length;
var i__4737__auto___80255 = (0);
while(true){
if((i__4737__auto___80255 < len__4736__auto___80254)){
args__4742__auto__.push((arguments[i__4737__auto___80255]));

var G__80256 = (i__4737__auto___80255 + (1));
i__4737__auto___80255 = G__80256;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,clojure.string.lower_case,clojure.string.lower_case,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_kebab_case_keyword.cljs$lang$applyTo = (function (seq80132){
var G__80133 = cljs.core.first(seq80132);
var seq80132__$1 = cljs.core.next(seq80132);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80133,seq80132__$1);
}));

camel_snake_kebab.core.__GT_HTTP_Header_Case = (function camel_snake_kebab$core$__GT_HTTP_Header_Case(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80261 = arguments.length;
var i__4737__auto___80262 = (0);
while(true){
if((i__4737__auto___80262 < len__4736__auto___80261)){
args__4742__auto__.push((arguments[i__4737__auto___80262]));

var G__80263 = (i__4737__auto___80262 + (1));
i__4737__auto___80262 = G__80263;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$core$IFn$_invoke$arity$variadic = (function (s__80011__auto__,rest__80012__auto__){
var convert_case__80013__auto__ = (function (p1__80010__80014__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",p1__80010__80014__auto__,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80012__auto__], 0));
});
return camel_snake_kebab.internals.alter_name.alter_name(s__80011__auto__,convert_case__80013__auto__);
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case.cljs$lang$applyTo = (function (seq80134){
var G__80135 = cljs.core.first(seq80134);
var seq80134__$1 = cljs.core.next(seq80134);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80135,seq80134__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_String = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_String(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80264 = arguments.length;
var i__4737__auto___80265 = (0);
while(true){
if((i__4737__auto___80265 < len__4736__auto___80264)){
args__4742__auto__.push((arguments[i__4737__auto___80265]));

var G__80266 = (i__4737__auto___80265 + (1));
i__4737__auto___80265 = G__80266;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.identity(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_String.cljs$lang$applyTo = (function (seq80136){
var G__80137 = cljs.core.first(seq80136);
var seq80136__$1 = cljs.core.next(seq80136);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80137,seq80136__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Symbol(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80267 = arguments.length;
var i__4737__auto___80268 = (0);
while(true){
if((i__4737__auto___80268 < len__4736__auto___80267)){
args__4742__auto__.push((arguments[i__4737__auto___80268]));

var G__80269 = (i__4737__auto___80268 + (1));
i__4737__auto___80268 = G__80269;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Symbol.cljs$lang$applyTo = (function (seq80138){
var G__80139 = cljs.core.first(seq80138);
var seq80138__$1 = cljs.core.next(seq80138);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80139,seq80138__$1);
}));


camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword = (function camel_snake_kebab$core$__GT_HTTP_Header_Case_Keyword(var_args){
var args__4742__auto__ = [];
var len__4736__auto___80270 = arguments.length;
var i__4737__auto___80271 = (0);
while(true){
if((i__4737__auto___80271 < len__4736__auto___80270)){
args__4742__auto__.push((arguments[i__4737__auto___80271]));

var G__80272 = (i__4737__auto___80271 + (1));
i__4737__auto___80271 = G__80272;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$core$IFn$_invoke$arity$variadic = (function (s__80019__auto__,rest__80020__auto__){
if((!((s__80019__auto__ == null)))){
} else {
throw (new Error("Assert failed: (clojure.core/not (clojure.core/nil? s__80019__auto__))"));
}

return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(camel_snake_kebab.internals.misc.convert_case,camel_snake_kebab.internals.misc.capitalize_http_header,camel_snake_kebab.internals.misc.capitalize_http_header,"-",cljs.core.name(s__80019__auto__),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([rest__80020__auto__], 0)));
}));

(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(camel_snake_kebab.core.__GT_HTTP_Header_Case_Keyword.cljs$lang$applyTo = (function (seq80140){
var G__80141 = cljs.core.first(seq80140);
var seq80140__$1 = cljs.core.next(seq80140);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__80141,seq80140__$1);
}));


//# sourceMappingURL=camel_snake_kebab.core.js.map
