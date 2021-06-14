goog.provide('cljs.core.async');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__71214 = arguments.length;
switch (G__71214) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71215 = (function (f,blockable,meta71216){
this.f = f;
this.blockable = blockable;
this.meta71216 = meta71216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71217,meta71216__$1){
var self__ = this;
var _71217__$1 = this;
return (new cljs.core.async.t_cljs$core$async71215(self__.f,self__.blockable,meta71216__$1));
}));

(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71217){
var self__ = this;
var _71217__$1 = this;
return self__.meta71216;
}));

(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async71215.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async71215.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta71216","meta71216",1490134161,null)], null);
}));

(cljs.core.async.t_cljs$core$async71215.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71215.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71215");

(cljs.core.async.t_cljs$core$async71215.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71215");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71215.
 */
cljs.core.async.__GT_t_cljs$core$async71215 = (function cljs$core$async$__GT_t_cljs$core$async71215(f__$1,blockable__$1,meta71216){
return (new cljs.core.async.t_cljs$core$async71215(f__$1,blockable__$1,meta71216));
});

}

return (new cljs.core.async.t_cljs$core$async71215(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__71222 = arguments.length;
switch (G__71222) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__71224 = arguments.length;
switch (G__71224) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__71226 = arguments.length;
switch (G__71226) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_72675 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72675) : fn1.call(null,val_72675));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_72675) : fn1.call(null,val_72675));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__71228 = arguments.length;
switch (G__71228) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4613__auto___72677 = n;
var x_72678 = (0);
while(true){
if((x_72678 < n__4613__auto___72677)){
(a[x_72678] = x_72678);

var G__72679 = (x_72678 + (1));
x_72678 = G__72679;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71229 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71229 = (function (flag,meta71230){
this.flag = flag;
this.meta71230 = meta71230;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71231,meta71230__$1){
var self__ = this;
var _71231__$1 = this;
return (new cljs.core.async.t_cljs$core$async71229(self__.flag,meta71230__$1));
}));

(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71231){
var self__ = this;
var _71231__$1 = this;
return self__.meta71230;
}));

(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71229.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async71229.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta71230","meta71230",-569055491,null)], null);
}));

(cljs.core.async.t_cljs$core$async71229.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71229.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71229");

(cljs.core.async.t_cljs$core$async71229.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71229");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71229.
 */
cljs.core.async.__GT_t_cljs$core$async71229 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async71229(flag__$1,meta71230){
return (new cljs.core.async.t_cljs$core$async71229(flag__$1,meta71230));
});

}

return (new cljs.core.async.t_cljs$core$async71229(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71232 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71232 = (function (flag,cb,meta71233){
this.flag = flag;
this.cb = cb;
this.meta71233 = meta71233;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71234,meta71233__$1){
var self__ = this;
var _71234__$1 = this;
return (new cljs.core.async.t_cljs$core$async71232(self__.flag,self__.cb,meta71233__$1));
}));

(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71234){
var self__ = this;
var _71234__$1 = this;
return self__.meta71233;
}));

(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async71232.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async71232.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta71233","meta71233",-1065445848,null)], null);
}));

(cljs.core.async.t_cljs$core$async71232.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71232.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71232");

(cljs.core.async.t_cljs$core$async71232.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71232");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71232.
 */
cljs.core.async.__GT_t_cljs$core$async71232 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async71232(flag__$1,cb__$1,meta71233){
return (new cljs.core.async.t_cljs$core$async71232(flag__$1,cb__$1,meta71233));
});

}

return (new cljs.core.async.t_cljs$core$async71232(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71235_SHARP_){
var G__71237 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71235_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71237) : fret.call(null,G__71237));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__71236_SHARP_){
var G__71238 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__71236_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__71238) : fret.call(null,G__71238));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4126__auto__ = wport;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return port;
}
})()], null));
} else {
var G__72682 = (i + (1));
i = G__72682;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4126__auto__ = ret;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4115__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4115__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4115__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___72684 = arguments.length;
var i__4737__auto___72685 = (0);
while(true){
if((i__4737__auto___72685 < len__4736__auto___72684)){
args__4742__auto__.push((arguments[i__4737__auto___72685]));

var G__72686 = (i__4737__auto___72685 + (1));
i__4737__auto___72685 = G__72686;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((1) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4743__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__71241){
var map__71242 = p__71241;
var map__71242__$1 = (((((!((map__71242 == null))))?(((((map__71242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71242):map__71242);
var opts = map__71242__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq71239){
var G__71240 = cljs.core.first(seq71239);
var seq71239__$1 = cljs.core.next(seq71239);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71240,seq71239__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__71245 = arguments.length;
switch (G__71245) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__71151__auto___72691 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71269){
var state_val_71270 = (state_71269[(1)]);
if((state_val_71270 === (7))){
var inst_71265 = (state_71269[(2)]);
var state_71269__$1 = state_71269;
var statearr_71271_72693 = state_71269__$1;
(statearr_71271_72693[(2)] = inst_71265);

(statearr_71271_72693[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (1))){
var state_71269__$1 = state_71269;
var statearr_71272_72694 = state_71269__$1;
(statearr_71272_72694[(2)] = null);

(statearr_71272_72694[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (4))){
var inst_71248 = (state_71269[(7)]);
var inst_71248__$1 = (state_71269[(2)]);
var inst_71249 = (inst_71248__$1 == null);
var state_71269__$1 = (function (){var statearr_71273 = state_71269;
(statearr_71273[(7)] = inst_71248__$1);

return statearr_71273;
})();
if(cljs.core.truth_(inst_71249)){
var statearr_71274_72695 = state_71269__$1;
(statearr_71274_72695[(1)] = (5));

} else {
var statearr_71275_72696 = state_71269__$1;
(statearr_71275_72696[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (13))){
var state_71269__$1 = state_71269;
var statearr_71276_72697 = state_71269__$1;
(statearr_71276_72697[(2)] = null);

(statearr_71276_72697[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (6))){
var inst_71248 = (state_71269[(7)]);
var state_71269__$1 = state_71269;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71269__$1,(11),to,inst_71248);
} else {
if((state_val_71270 === (3))){
var inst_71267 = (state_71269[(2)]);
var state_71269__$1 = state_71269;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71269__$1,inst_71267);
} else {
if((state_val_71270 === (12))){
var state_71269__$1 = state_71269;
var statearr_71277_72700 = state_71269__$1;
(statearr_71277_72700[(2)] = null);

(statearr_71277_72700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (2))){
var state_71269__$1 = state_71269;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71269__$1,(4),from);
} else {
if((state_val_71270 === (11))){
var inst_71258 = (state_71269[(2)]);
var state_71269__$1 = state_71269;
if(cljs.core.truth_(inst_71258)){
var statearr_71278_72701 = state_71269__$1;
(statearr_71278_72701[(1)] = (12));

} else {
var statearr_71279_72702 = state_71269__$1;
(statearr_71279_72702[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (9))){
var state_71269__$1 = state_71269;
var statearr_71280_72703 = state_71269__$1;
(statearr_71280_72703[(2)] = null);

(statearr_71280_72703[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (5))){
var state_71269__$1 = state_71269;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71281_72704 = state_71269__$1;
(statearr_71281_72704[(1)] = (8));

} else {
var statearr_71282_72705 = state_71269__$1;
(statearr_71282_72705[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (14))){
var inst_71263 = (state_71269[(2)]);
var state_71269__$1 = state_71269;
var statearr_71283_72707 = state_71269__$1;
(statearr_71283_72707[(2)] = inst_71263);

(statearr_71283_72707[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (10))){
var inst_71255 = (state_71269[(2)]);
var state_71269__$1 = state_71269;
var statearr_71284_72709 = state_71269__$1;
(statearr_71284_72709[(2)] = inst_71255);

(statearr_71284_72709[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71270 === (8))){
var inst_71252 = cljs.core.async.close_BANG_(to);
var state_71269__$1 = state_71269;
var statearr_71285_72710 = state_71269__$1;
(statearr_71285_72710[(2)] = inst_71252);

(statearr_71285_72710[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_71286 = [null,null,null,null,null,null,null,null];
(statearr_71286[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_71286[(1)] = (1));

return statearr_71286;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_71269){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71269);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71287){if((e71287 instanceof Object)){
var ex__71035__auto__ = e71287;
var statearr_71288_72711 = state_71269;
(statearr_71288_72711[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71269);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71287;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72712 = state_71269;
state_71269 = G__72712;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_71269){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_71269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71289 = f__71152__auto__();
(statearr_71289[(6)] = c__71151__auto___72691);

return statearr_71289;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__71290){
var vec__71291 = p__71290;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71291,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71291,(1),null);
var job = vec__71291;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__71151__auto___72713 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71298){
var state_val_71299 = (state_71298[(1)]);
if((state_val_71299 === (1))){
var state_71298__$1 = state_71298;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71298__$1,(2),res,v);
} else {
if((state_val_71299 === (2))){
var inst_71295 = (state_71298[(2)]);
var inst_71296 = cljs.core.async.close_BANG_(res);
var state_71298__$1 = (function (){var statearr_71300 = state_71298;
(statearr_71300[(7)] = inst_71295);

return statearr_71300;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_71298__$1,inst_71296);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_71301 = [null,null,null,null,null,null,null,null];
(statearr_71301[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__);

(statearr_71301[(1)] = (1));

return statearr_71301;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1 = (function (state_71298){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71298);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71302){if((e71302 instanceof Object)){
var ex__71035__auto__ = e71302;
var statearr_71303_72716 = state_71298;
(statearr_71303_72716[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71298);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72717 = state_71298;
state_71298 = G__72717;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = function(state_71298){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1.call(this,state_71298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71304 = f__71152__auto__();
(statearr_71304[(6)] = c__71151__auto___72713);

return statearr_71304;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__71305){
var vec__71306 = p__71305;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71306,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__71306,(1),null);
var job = vec__71306;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4613__auto___72718 = n;
var __72719 = (0);
while(true){
if((__72719 < n__4613__auto___72718)){
var G__71309_72720 = type;
var G__71309_72721__$1 = (((G__71309_72720 instanceof cljs.core.Keyword))?G__71309_72720.fqn:null);
switch (G__71309_72721__$1) {
case "compute":
var c__71151__auto___72723 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72719,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = ((function (__72719,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function (state_71322){
var state_val_71323 = (state_71322[(1)]);
if((state_val_71323 === (1))){
var state_71322__$1 = state_71322;
var statearr_71324_72724 = state_71322__$1;
(statearr_71324_72724[(2)] = null);

(statearr_71324_72724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (2))){
var state_71322__$1 = state_71322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71322__$1,(4),jobs);
} else {
if((state_val_71323 === (3))){
var inst_71320 = (state_71322[(2)]);
var state_71322__$1 = state_71322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71322__$1,inst_71320);
} else {
if((state_val_71323 === (4))){
var inst_71312 = (state_71322[(2)]);
var inst_71313 = process(inst_71312);
var state_71322__$1 = state_71322;
if(cljs.core.truth_(inst_71313)){
var statearr_71325_72727 = state_71322__$1;
(statearr_71325_72727[(1)] = (5));

} else {
var statearr_71326_72728 = state_71322__$1;
(statearr_71326_72728[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (5))){
var state_71322__$1 = state_71322;
var statearr_71327_72729 = state_71322__$1;
(statearr_71327_72729[(2)] = null);

(statearr_71327_72729[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (6))){
var state_71322__$1 = state_71322;
var statearr_71328_72730 = state_71322__$1;
(statearr_71328_72730[(2)] = null);

(statearr_71328_72730[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71323 === (7))){
var inst_71318 = (state_71322[(2)]);
var state_71322__$1 = state_71322;
var statearr_71329_72731 = state_71322__$1;
(statearr_71329_72731[(2)] = inst_71318);

(statearr_71329_72731[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72719,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
;
return ((function (__72719,switch__71031__auto__,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_71330 = [null,null,null,null,null,null,null];
(statearr_71330[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__);

(statearr_71330[(1)] = (1));

return statearr_71330;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1 = (function (state_71322){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71322);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71331){if((e71331 instanceof Object)){
var ex__71035__auto__ = e71331;
var statearr_71332_72733 = state_71322;
(statearr_71332_72733[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71331;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72734 = state_71322;
state_71322 = G__72734;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = function(state_71322){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1.call(this,state_71322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__;
})()
;})(__72719,switch__71031__auto__,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
})();
var state__71153__auto__ = (function (){var statearr_71333 = f__71152__auto__();
(statearr_71333[(6)] = c__71151__auto___72723);

return statearr_71333;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
});})(__72719,c__71151__auto___72723,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
);


break;
case "async":
var c__71151__auto___72735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__72719,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = ((function (__72719,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function (state_71346){
var state_val_71347 = (state_71346[(1)]);
if((state_val_71347 === (1))){
var state_71346__$1 = state_71346;
var statearr_71348_72736 = state_71346__$1;
(statearr_71348_72736[(2)] = null);

(statearr_71348_72736[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71347 === (2))){
var state_71346__$1 = state_71346;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71346__$1,(4),jobs);
} else {
if((state_val_71347 === (3))){
var inst_71344 = (state_71346[(2)]);
var state_71346__$1 = state_71346;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71346__$1,inst_71344);
} else {
if((state_val_71347 === (4))){
var inst_71336 = (state_71346[(2)]);
var inst_71337 = async(inst_71336);
var state_71346__$1 = state_71346;
if(cljs.core.truth_(inst_71337)){
var statearr_71349_72737 = state_71346__$1;
(statearr_71349_72737[(1)] = (5));

} else {
var statearr_71350_72738 = state_71346__$1;
(statearr_71350_72738[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71347 === (5))){
var state_71346__$1 = state_71346;
var statearr_71351_72743 = state_71346__$1;
(statearr_71351_72743[(2)] = null);

(statearr_71351_72743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71347 === (6))){
var state_71346__$1 = state_71346;
var statearr_71352_72744 = state_71346__$1;
(statearr_71352_72744[(2)] = null);

(statearr_71352_72744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71347 === (7))){
var inst_71342 = (state_71346[(2)]);
var state_71346__$1 = state_71346;
var statearr_71353_72745 = state_71346__$1;
(statearr_71353_72745[(2)] = inst_71342);

(statearr_71353_72745[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__72719,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
;
return ((function (__72719,switch__71031__auto__,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_71354 = [null,null,null,null,null,null,null];
(statearr_71354[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__);

(statearr_71354[(1)] = (1));

return statearr_71354;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1 = (function (state_71346){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71346);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71355){if((e71355 instanceof Object)){
var ex__71035__auto__ = e71355;
var statearr_71356_72746 = state_71346;
(statearr_71356_72746[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71346);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71355;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72747 = state_71346;
state_71346 = G__72747;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = function(state_71346){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1.call(this,state_71346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__;
})()
;})(__72719,switch__71031__auto__,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
})();
var state__71153__auto__ = (function (){var statearr_71357 = f__71152__auto__();
(statearr_71357[(6)] = c__71151__auto___72735);

return statearr_71357;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
});})(__72719,c__71151__auto___72735,G__71309_72720,G__71309_72721__$1,n__4613__auto___72718,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__71309_72721__$1)].join('')));

}

var G__72748 = (__72719 + (1));
__72719 = G__72748;
continue;
} else {
}
break;
}

var c__71151__auto___72749 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71379){
var state_val_71380 = (state_71379[(1)]);
if((state_val_71380 === (7))){
var inst_71375 = (state_71379[(2)]);
var state_71379__$1 = state_71379;
var statearr_71381_72750 = state_71379__$1;
(statearr_71381_72750[(2)] = inst_71375);

(statearr_71381_72750[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71380 === (1))){
var state_71379__$1 = state_71379;
var statearr_71382_72751 = state_71379__$1;
(statearr_71382_72751[(2)] = null);

(statearr_71382_72751[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71380 === (4))){
var inst_71360 = (state_71379[(7)]);
var inst_71360__$1 = (state_71379[(2)]);
var inst_71361 = (inst_71360__$1 == null);
var state_71379__$1 = (function (){var statearr_71383 = state_71379;
(statearr_71383[(7)] = inst_71360__$1);

return statearr_71383;
})();
if(cljs.core.truth_(inst_71361)){
var statearr_71384_72752 = state_71379__$1;
(statearr_71384_72752[(1)] = (5));

} else {
var statearr_71385_72753 = state_71379__$1;
(statearr_71385_72753[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71380 === (6))){
var inst_71365 = (state_71379[(8)]);
var inst_71360 = (state_71379[(7)]);
var inst_71365__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_71366 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_71367 = [inst_71360,inst_71365__$1];
var inst_71368 = (new cljs.core.PersistentVector(null,2,(5),inst_71366,inst_71367,null));
var state_71379__$1 = (function (){var statearr_71386 = state_71379;
(statearr_71386[(8)] = inst_71365__$1);

return statearr_71386;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71379__$1,(8),jobs,inst_71368);
} else {
if((state_val_71380 === (3))){
var inst_71377 = (state_71379[(2)]);
var state_71379__$1 = state_71379;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71379__$1,inst_71377);
} else {
if((state_val_71380 === (2))){
var state_71379__$1 = state_71379;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71379__$1,(4),from);
} else {
if((state_val_71380 === (9))){
var inst_71372 = (state_71379[(2)]);
var state_71379__$1 = (function (){var statearr_71387 = state_71379;
(statearr_71387[(9)] = inst_71372);

return statearr_71387;
})();
var statearr_71388_72754 = state_71379__$1;
(statearr_71388_72754[(2)] = null);

(statearr_71388_72754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71380 === (5))){
var inst_71363 = cljs.core.async.close_BANG_(jobs);
var state_71379__$1 = state_71379;
var statearr_71389_72755 = state_71379__$1;
(statearr_71389_72755[(2)] = inst_71363);

(statearr_71389_72755[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71380 === (8))){
var inst_71365 = (state_71379[(8)]);
var inst_71370 = (state_71379[(2)]);
var state_71379__$1 = (function (){var statearr_71390 = state_71379;
(statearr_71390[(10)] = inst_71370);

return statearr_71390;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71379__$1,(9),results,inst_71365);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_71391 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71391[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__);

(statearr_71391[(1)] = (1));

return statearr_71391;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1 = (function (state_71379){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71379);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71392){if((e71392 instanceof Object)){
var ex__71035__auto__ = e71392;
var statearr_71393_72756 = state_71379;
(statearr_71393_72756[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71379);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71392;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72757 = state_71379;
state_71379 = G__72757;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = function(state_71379){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1.call(this,state_71379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71394 = f__71152__auto__();
(statearr_71394[(6)] = c__71151__auto___72749);

return statearr_71394;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


var c__71151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71432){
var state_val_71433 = (state_71432[(1)]);
if((state_val_71433 === (7))){
var inst_71428 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
var statearr_71434_72760 = state_71432__$1;
(statearr_71434_72760[(2)] = inst_71428);

(statearr_71434_72760[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (20))){
var state_71432__$1 = state_71432;
var statearr_71435_72761 = state_71432__$1;
(statearr_71435_72761[(2)] = null);

(statearr_71435_72761[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (1))){
var state_71432__$1 = state_71432;
var statearr_71436_72762 = state_71432__$1;
(statearr_71436_72762[(2)] = null);

(statearr_71436_72762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (4))){
var inst_71397 = (state_71432[(7)]);
var inst_71397__$1 = (state_71432[(2)]);
var inst_71398 = (inst_71397__$1 == null);
var state_71432__$1 = (function (){var statearr_71437 = state_71432;
(statearr_71437[(7)] = inst_71397__$1);

return statearr_71437;
})();
if(cljs.core.truth_(inst_71398)){
var statearr_71438_72763 = state_71432__$1;
(statearr_71438_72763[(1)] = (5));

} else {
var statearr_71439_72764 = state_71432__$1;
(statearr_71439_72764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (15))){
var inst_71410 = (state_71432[(8)]);
var state_71432__$1 = state_71432;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71432__$1,(18),to,inst_71410);
} else {
if((state_val_71433 === (21))){
var inst_71423 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
var statearr_71440_72765 = state_71432__$1;
(statearr_71440_72765[(2)] = inst_71423);

(statearr_71440_72765[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (13))){
var inst_71425 = (state_71432[(2)]);
var state_71432__$1 = (function (){var statearr_71441 = state_71432;
(statearr_71441[(9)] = inst_71425);

return statearr_71441;
})();
var statearr_71442_72766 = state_71432__$1;
(statearr_71442_72766[(2)] = null);

(statearr_71442_72766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (6))){
var inst_71397 = (state_71432[(7)]);
var state_71432__$1 = state_71432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71432__$1,(11),inst_71397);
} else {
if((state_val_71433 === (17))){
var inst_71418 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
if(cljs.core.truth_(inst_71418)){
var statearr_71443_72774 = state_71432__$1;
(statearr_71443_72774[(1)] = (19));

} else {
var statearr_71444_72775 = state_71432__$1;
(statearr_71444_72775[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (3))){
var inst_71430 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71432__$1,inst_71430);
} else {
if((state_val_71433 === (12))){
var inst_71407 = (state_71432[(10)]);
var state_71432__$1 = state_71432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71432__$1,(14),inst_71407);
} else {
if((state_val_71433 === (2))){
var state_71432__$1 = state_71432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71432__$1,(4),results);
} else {
if((state_val_71433 === (19))){
var state_71432__$1 = state_71432;
var statearr_71445_72776 = state_71432__$1;
(statearr_71445_72776[(2)] = null);

(statearr_71445_72776[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (11))){
var inst_71407 = (state_71432[(2)]);
var state_71432__$1 = (function (){var statearr_71446 = state_71432;
(statearr_71446[(10)] = inst_71407);

return statearr_71446;
})();
var statearr_71447_72780 = state_71432__$1;
(statearr_71447_72780[(2)] = null);

(statearr_71447_72780[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (9))){
var state_71432__$1 = state_71432;
var statearr_71448_72784 = state_71432__$1;
(statearr_71448_72784[(2)] = null);

(statearr_71448_72784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (5))){
var state_71432__$1 = state_71432;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71449_72785 = state_71432__$1;
(statearr_71449_72785[(1)] = (8));

} else {
var statearr_71450_72786 = state_71432__$1;
(statearr_71450_72786[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (14))){
var inst_71410 = (state_71432[(8)]);
var inst_71410__$1 = (state_71432[(2)]);
var inst_71411 = (inst_71410__$1 == null);
var inst_71412 = cljs.core.not(inst_71411);
var state_71432__$1 = (function (){var statearr_71451 = state_71432;
(statearr_71451[(8)] = inst_71410__$1);

return statearr_71451;
})();
if(inst_71412){
var statearr_71452_72790 = state_71432__$1;
(statearr_71452_72790[(1)] = (15));

} else {
var statearr_71453_72791 = state_71432__$1;
(statearr_71453_72791[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (16))){
var state_71432__$1 = state_71432;
var statearr_71454_72792 = state_71432__$1;
(statearr_71454_72792[(2)] = false);

(statearr_71454_72792[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (10))){
var inst_71404 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
var statearr_71455_72793 = state_71432__$1;
(statearr_71455_72793[(2)] = inst_71404);

(statearr_71455_72793[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (18))){
var inst_71415 = (state_71432[(2)]);
var state_71432__$1 = state_71432;
var statearr_71456_72794 = state_71432__$1;
(statearr_71456_72794[(2)] = inst_71415);

(statearr_71456_72794[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71433 === (8))){
var inst_71401 = cljs.core.async.close_BANG_(to);
var state_71432__$1 = state_71432;
var statearr_71457_72802 = state_71432__$1;
(statearr_71457_72802[(2)] = inst_71401);

(statearr_71457_72802[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_71458 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_71458[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__);

(statearr_71458[(1)] = (1));

return statearr_71458;
});
var cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1 = (function (state_71432){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71432);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71459){if((e71459 instanceof Object)){
var ex__71035__auto__ = e71459;
var statearr_71460_72803 = state_71432;
(statearr_71460_72803[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71459;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72804 = state_71432;
state_71432 = G__72804;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__ = function(state_71432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1.call(this,state_71432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71461 = f__71152__auto__();
(statearr_71461[(6)] = c__71151__auto__);

return statearr_71461;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

return c__71151__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__71463 = arguments.length;
switch (G__71463) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__71465 = arguments.length;
switch (G__71465) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__71467 = arguments.length;
switch (G__71467) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__71151__auto___72818 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71493){
var state_val_71494 = (state_71493[(1)]);
if((state_val_71494 === (7))){
var inst_71489 = (state_71493[(2)]);
var state_71493__$1 = state_71493;
var statearr_71495_72819 = state_71493__$1;
(statearr_71495_72819[(2)] = inst_71489);

(statearr_71495_72819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (1))){
var state_71493__$1 = state_71493;
var statearr_71496_72820 = state_71493__$1;
(statearr_71496_72820[(2)] = null);

(statearr_71496_72820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (4))){
var inst_71470 = (state_71493[(7)]);
var inst_71470__$1 = (state_71493[(2)]);
var inst_71471 = (inst_71470__$1 == null);
var state_71493__$1 = (function (){var statearr_71497 = state_71493;
(statearr_71497[(7)] = inst_71470__$1);

return statearr_71497;
})();
if(cljs.core.truth_(inst_71471)){
var statearr_71498_72821 = state_71493__$1;
(statearr_71498_72821[(1)] = (5));

} else {
var statearr_71499_72822 = state_71493__$1;
(statearr_71499_72822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (13))){
var state_71493__$1 = state_71493;
var statearr_71500_72823 = state_71493__$1;
(statearr_71500_72823[(2)] = null);

(statearr_71500_72823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (6))){
var inst_71470 = (state_71493[(7)]);
var inst_71476 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_71470) : p.call(null,inst_71470));
var state_71493__$1 = state_71493;
if(cljs.core.truth_(inst_71476)){
var statearr_71501_72824 = state_71493__$1;
(statearr_71501_72824[(1)] = (9));

} else {
var statearr_71502_72825 = state_71493__$1;
(statearr_71502_72825[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (3))){
var inst_71491 = (state_71493[(2)]);
var state_71493__$1 = state_71493;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71493__$1,inst_71491);
} else {
if((state_val_71494 === (12))){
var state_71493__$1 = state_71493;
var statearr_71503_72826 = state_71493__$1;
(statearr_71503_72826[(2)] = null);

(statearr_71503_72826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (2))){
var state_71493__$1 = state_71493;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71493__$1,(4),ch);
} else {
if((state_val_71494 === (11))){
var inst_71470 = (state_71493[(7)]);
var inst_71480 = (state_71493[(2)]);
var state_71493__$1 = state_71493;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71493__$1,(8),inst_71480,inst_71470);
} else {
if((state_val_71494 === (9))){
var state_71493__$1 = state_71493;
var statearr_71504_72827 = state_71493__$1;
(statearr_71504_72827[(2)] = tc);

(statearr_71504_72827[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (5))){
var inst_71473 = cljs.core.async.close_BANG_(tc);
var inst_71474 = cljs.core.async.close_BANG_(fc);
var state_71493__$1 = (function (){var statearr_71505 = state_71493;
(statearr_71505[(8)] = inst_71473);

return statearr_71505;
})();
var statearr_71506_72828 = state_71493__$1;
(statearr_71506_72828[(2)] = inst_71474);

(statearr_71506_72828[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (14))){
var inst_71487 = (state_71493[(2)]);
var state_71493__$1 = state_71493;
var statearr_71507_72829 = state_71493__$1;
(statearr_71507_72829[(2)] = inst_71487);

(statearr_71507_72829[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (10))){
var state_71493__$1 = state_71493;
var statearr_71508_72830 = state_71493__$1;
(statearr_71508_72830[(2)] = fc);

(statearr_71508_72830[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71494 === (8))){
var inst_71482 = (state_71493[(2)]);
var state_71493__$1 = state_71493;
if(cljs.core.truth_(inst_71482)){
var statearr_71509_72831 = state_71493__$1;
(statearr_71509_72831[(1)] = (12));

} else {
var statearr_71510_72832 = state_71493__$1;
(statearr_71510_72832[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_71511 = [null,null,null,null,null,null,null,null,null];
(statearr_71511[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_71511[(1)] = (1));

return statearr_71511;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_71493){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71493);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71512){if((e71512 instanceof Object)){
var ex__71035__auto__ = e71512;
var statearr_71513_72834 = state_71493;
(statearr_71513_72834[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71493);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71512;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72837 = state_71493;
state_71493 = G__72837;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_71493){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_71493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71514 = f__71152__auto__();
(statearr_71514[(6)] = c__71151__auto___72818);

return statearr_71514;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__71151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71535){
var state_val_71536 = (state_71535[(1)]);
if((state_val_71536 === (7))){
var inst_71531 = (state_71535[(2)]);
var state_71535__$1 = state_71535;
var statearr_71537_72842 = state_71535__$1;
(statearr_71537_72842[(2)] = inst_71531);

(statearr_71537_72842[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (1))){
var inst_71515 = init;
var state_71535__$1 = (function (){var statearr_71538 = state_71535;
(statearr_71538[(7)] = inst_71515);

return statearr_71538;
})();
var statearr_71539_72844 = state_71535__$1;
(statearr_71539_72844[(2)] = null);

(statearr_71539_72844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (4))){
var inst_71518 = (state_71535[(8)]);
var inst_71518__$1 = (state_71535[(2)]);
var inst_71519 = (inst_71518__$1 == null);
var state_71535__$1 = (function (){var statearr_71540 = state_71535;
(statearr_71540[(8)] = inst_71518__$1);

return statearr_71540;
})();
if(cljs.core.truth_(inst_71519)){
var statearr_71541_72846 = state_71535__$1;
(statearr_71541_72846[(1)] = (5));

} else {
var statearr_71542_72847 = state_71535__$1;
(statearr_71542_72847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (6))){
var inst_71515 = (state_71535[(7)]);
var inst_71522 = (state_71535[(9)]);
var inst_71518 = (state_71535[(8)]);
var inst_71522__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_71515,inst_71518) : f.call(null,inst_71515,inst_71518));
var inst_71523 = cljs.core.reduced_QMARK_(inst_71522__$1);
var state_71535__$1 = (function (){var statearr_71543 = state_71535;
(statearr_71543[(9)] = inst_71522__$1);

return statearr_71543;
})();
if(inst_71523){
var statearr_71544_72848 = state_71535__$1;
(statearr_71544_72848[(1)] = (8));

} else {
var statearr_71545_72849 = state_71535__$1;
(statearr_71545_72849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (3))){
var inst_71533 = (state_71535[(2)]);
var state_71535__$1 = state_71535;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71535__$1,inst_71533);
} else {
if((state_val_71536 === (2))){
var state_71535__$1 = state_71535;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71535__$1,(4),ch);
} else {
if((state_val_71536 === (9))){
var inst_71522 = (state_71535[(9)]);
var inst_71515 = inst_71522;
var state_71535__$1 = (function (){var statearr_71546 = state_71535;
(statearr_71546[(7)] = inst_71515);

return statearr_71546;
})();
var statearr_71547_72850 = state_71535__$1;
(statearr_71547_72850[(2)] = null);

(statearr_71547_72850[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (5))){
var inst_71515 = (state_71535[(7)]);
var state_71535__$1 = state_71535;
var statearr_71548_72851 = state_71535__$1;
(statearr_71548_72851[(2)] = inst_71515);

(statearr_71548_72851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (10))){
var inst_71529 = (state_71535[(2)]);
var state_71535__$1 = state_71535;
var statearr_71549_72853 = state_71535__$1;
(statearr_71549_72853[(2)] = inst_71529);

(statearr_71549_72853[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71536 === (8))){
var inst_71522 = (state_71535[(9)]);
var inst_71525 = cljs.core.deref(inst_71522);
var state_71535__$1 = state_71535;
var statearr_71550_72861 = state_71535__$1;
(statearr_71550_72861[(2)] = inst_71525);

(statearr_71550_72861[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__71032__auto__ = null;
var cljs$core$async$reduce_$_state_machine__71032__auto____0 = (function (){
var statearr_71551 = [null,null,null,null,null,null,null,null,null,null];
(statearr_71551[(0)] = cljs$core$async$reduce_$_state_machine__71032__auto__);

(statearr_71551[(1)] = (1));

return statearr_71551;
});
var cljs$core$async$reduce_$_state_machine__71032__auto____1 = (function (state_71535){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71535);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71552){if((e71552 instanceof Object)){
var ex__71035__auto__ = e71552;
var statearr_71553_72869 = state_71535;
(statearr_71553_72869[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71552;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72870 = state_71535;
state_71535 = G__72870;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__71032__auto__ = function(state_71535){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__71032__auto____1.call(this,state_71535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__71032__auto____0;
cljs$core$async$reduce_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__71032__auto____1;
return cljs$core$async$reduce_$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71554 = f__71152__auto__();
(statearr_71554[(6)] = c__71151__auto__);

return statearr_71554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

return c__71151__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__71151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71560){
var state_val_71561 = (state_71560[(1)]);
if((state_val_71561 === (1))){
var inst_71555 = cljs.core.async.reduce(f__$1,init,ch);
var state_71560__$1 = state_71560;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71560__$1,(2),inst_71555);
} else {
if((state_val_71561 === (2))){
var inst_71557 = (state_71560[(2)]);
var inst_71558 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_71557) : f__$1.call(null,inst_71557));
var state_71560__$1 = state_71560;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71560__$1,inst_71558);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__71032__auto__ = null;
var cljs$core$async$transduce_$_state_machine__71032__auto____0 = (function (){
var statearr_71562 = [null,null,null,null,null,null,null];
(statearr_71562[(0)] = cljs$core$async$transduce_$_state_machine__71032__auto__);

(statearr_71562[(1)] = (1));

return statearr_71562;
});
var cljs$core$async$transduce_$_state_machine__71032__auto____1 = (function (state_71560){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71560);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71563){if((e71563 instanceof Object)){
var ex__71035__auto__ = e71563;
var statearr_71564_72877 = state_71560;
(statearr_71564_72877[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71560);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72878 = state_71560;
state_71560 = G__72878;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__71032__auto__ = function(state_71560){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__71032__auto____1.call(this,state_71560);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__71032__auto____0;
cljs$core$async$transduce_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__71032__auto____1;
return cljs$core$async$transduce_$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71565 = f__71152__auto__();
(statearr_71565[(6)] = c__71151__auto__);

return statearr_71565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

return c__71151__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__71567 = arguments.length;
switch (G__71567) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__71151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71592){
var state_val_71593 = (state_71592[(1)]);
if((state_val_71593 === (7))){
var inst_71574 = (state_71592[(2)]);
var state_71592__$1 = state_71592;
var statearr_71594_72886 = state_71592__$1;
(statearr_71594_72886[(2)] = inst_71574);

(statearr_71594_72886[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (1))){
var inst_71568 = cljs.core.seq(coll);
var inst_71569 = inst_71568;
var state_71592__$1 = (function (){var statearr_71595 = state_71592;
(statearr_71595[(7)] = inst_71569);

return statearr_71595;
})();
var statearr_71596_72887 = state_71592__$1;
(statearr_71596_72887[(2)] = null);

(statearr_71596_72887[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (4))){
var inst_71569 = (state_71592[(7)]);
var inst_71572 = cljs.core.first(inst_71569);
var state_71592__$1 = state_71592;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71592__$1,(7),ch,inst_71572);
} else {
if((state_val_71593 === (13))){
var inst_71586 = (state_71592[(2)]);
var state_71592__$1 = state_71592;
var statearr_71597_72888 = state_71592__$1;
(statearr_71597_72888[(2)] = inst_71586);

(statearr_71597_72888[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (6))){
var inst_71577 = (state_71592[(2)]);
var state_71592__$1 = state_71592;
if(cljs.core.truth_(inst_71577)){
var statearr_71598_72889 = state_71592__$1;
(statearr_71598_72889[(1)] = (8));

} else {
var statearr_71599_72890 = state_71592__$1;
(statearr_71599_72890[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (3))){
var inst_71590 = (state_71592[(2)]);
var state_71592__$1 = state_71592;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71592__$1,inst_71590);
} else {
if((state_val_71593 === (12))){
var state_71592__$1 = state_71592;
var statearr_71600_72891 = state_71592__$1;
(statearr_71600_72891[(2)] = null);

(statearr_71600_72891[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (2))){
var inst_71569 = (state_71592[(7)]);
var state_71592__$1 = state_71592;
if(cljs.core.truth_(inst_71569)){
var statearr_71601_72892 = state_71592__$1;
(statearr_71601_72892[(1)] = (4));

} else {
var statearr_71602_72893 = state_71592__$1;
(statearr_71602_72893[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (11))){
var inst_71583 = cljs.core.async.close_BANG_(ch);
var state_71592__$1 = state_71592;
var statearr_71603_72894 = state_71592__$1;
(statearr_71603_72894[(2)] = inst_71583);

(statearr_71603_72894[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (9))){
var state_71592__$1 = state_71592;
if(cljs.core.truth_(close_QMARK_)){
var statearr_71604_72895 = state_71592__$1;
(statearr_71604_72895[(1)] = (11));

} else {
var statearr_71605_72902 = state_71592__$1;
(statearr_71605_72902[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (5))){
var inst_71569 = (state_71592[(7)]);
var state_71592__$1 = state_71592;
var statearr_71606_72903 = state_71592__$1;
(statearr_71606_72903[(2)] = inst_71569);

(statearr_71606_72903[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (10))){
var inst_71588 = (state_71592[(2)]);
var state_71592__$1 = state_71592;
var statearr_71607_72904 = state_71592__$1;
(statearr_71607_72904[(2)] = inst_71588);

(statearr_71607_72904[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71593 === (8))){
var inst_71569 = (state_71592[(7)]);
var inst_71579 = cljs.core.next(inst_71569);
var inst_71569__$1 = inst_71579;
var state_71592__$1 = (function (){var statearr_71608 = state_71592;
(statearr_71608[(7)] = inst_71569__$1);

return statearr_71608;
})();
var statearr_71609_72905 = state_71592__$1;
(statearr_71609_72905[(2)] = null);

(statearr_71609_72905[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_71610 = [null,null,null,null,null,null,null,null];
(statearr_71610[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_71610[(1)] = (1));

return statearr_71610;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_71592){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71592);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71611){if((e71611 instanceof Object)){
var ex__71035__auto__ = e71611;
var statearr_71612_72906 = state_71592;
(statearr_71612_72906[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71611;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__72907 = state_71592;
state_71592 = G__72907;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_71592){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_71592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71613 = f__71152__auto__();
(statearr_71613[(6)] = c__71151__auto__);

return statearr_71613;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

return c__71151__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_72908 = (function (_){
var x__4428__auto__ = (((_ == null))?null:_);
var m__4429__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4429__auto__.call(null,_));
} else {
var m__4426__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4426__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_72908(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_72915 = (function (m,ch,close_QMARK_){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4429__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4426__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_72915(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_72916 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_72916(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_72917 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_72917(m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71614 = (function (ch,cs,meta71615){
this.ch = ch;
this.cs = cs;
this.meta71615 = meta71615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71616,meta71615__$1){
var self__ = this;
var _71616__$1 = this;
return (new cljs.core.async.t_cljs$core$async71614(self__.ch,self__.cs,meta71615__$1));
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71616){
var self__ = this;
var _71616__$1 = this;
return self__.meta71615;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async71614.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async71614.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta71615","meta71615",1238596542,null)], null);
}));

(cljs.core.async.t_cljs$core$async71614.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71614.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71614");

(cljs.core.async.t_cljs$core$async71614.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71614");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71614.
 */
cljs.core.async.__GT_t_cljs$core$async71614 = (function cljs$core$async$mult_$___GT_t_cljs$core$async71614(ch__$1,cs__$1,meta71615){
return (new cljs.core.async.t_cljs$core$async71614(ch__$1,cs__$1,meta71615));
});

}

return (new cljs.core.async.t_cljs$core$async71614(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__71151__auto___72919 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71751){
var state_val_71752 = (state_71751[(1)]);
if((state_val_71752 === (7))){
var inst_71747 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71753_72924 = state_71751__$1;
(statearr_71753_72924[(2)] = inst_71747);

(statearr_71753_72924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (20))){
var inst_71650 = (state_71751[(7)]);
var inst_71662 = cljs.core.first(inst_71650);
var inst_71663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71662,(0),null);
var inst_71664 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71662,(1),null);
var state_71751__$1 = (function (){var statearr_71754 = state_71751;
(statearr_71754[(8)] = inst_71663);

return statearr_71754;
})();
if(cljs.core.truth_(inst_71664)){
var statearr_71755_72925 = state_71751__$1;
(statearr_71755_72925[(1)] = (22));

} else {
var statearr_71756_72926 = state_71751__$1;
(statearr_71756_72926[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (27))){
var inst_71699 = (state_71751[(9)]);
var inst_71692 = (state_71751[(10)]);
var inst_71619 = (state_71751[(11)]);
var inst_71694 = (state_71751[(12)]);
var inst_71699__$1 = cljs.core._nth(inst_71692,inst_71694);
var inst_71700 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71699__$1,inst_71619,done);
var state_71751__$1 = (function (){var statearr_71757 = state_71751;
(statearr_71757[(9)] = inst_71699__$1);

return statearr_71757;
})();
if(cljs.core.truth_(inst_71700)){
var statearr_71758_72927 = state_71751__$1;
(statearr_71758_72927[(1)] = (30));

} else {
var statearr_71759_72928 = state_71751__$1;
(statearr_71759_72928[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (1))){
var state_71751__$1 = state_71751;
var statearr_71760_72929 = state_71751__$1;
(statearr_71760_72929[(2)] = null);

(statearr_71760_72929[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (24))){
var inst_71650 = (state_71751[(7)]);
var inst_71669 = (state_71751[(2)]);
var inst_71670 = cljs.core.next(inst_71650);
var inst_71628 = inst_71670;
var inst_71629 = null;
var inst_71630 = (0);
var inst_71631 = (0);
var state_71751__$1 = (function (){var statearr_71761 = state_71751;
(statearr_71761[(13)] = inst_71628);

(statearr_71761[(14)] = inst_71631);

(statearr_71761[(15)] = inst_71669);

(statearr_71761[(16)] = inst_71630);

(statearr_71761[(17)] = inst_71629);

return statearr_71761;
})();
var statearr_71762_72930 = state_71751__$1;
(statearr_71762_72930[(2)] = null);

(statearr_71762_72930[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (39))){
var state_71751__$1 = state_71751;
var statearr_71766_72931 = state_71751__$1;
(statearr_71766_72931[(2)] = null);

(statearr_71766_72931[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (4))){
var inst_71619 = (state_71751[(11)]);
var inst_71619__$1 = (state_71751[(2)]);
var inst_71620 = (inst_71619__$1 == null);
var state_71751__$1 = (function (){var statearr_71767 = state_71751;
(statearr_71767[(11)] = inst_71619__$1);

return statearr_71767;
})();
if(cljs.core.truth_(inst_71620)){
var statearr_71768_72934 = state_71751__$1;
(statearr_71768_72934[(1)] = (5));

} else {
var statearr_71769_72935 = state_71751__$1;
(statearr_71769_72935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (15))){
var inst_71628 = (state_71751[(13)]);
var inst_71631 = (state_71751[(14)]);
var inst_71630 = (state_71751[(16)]);
var inst_71629 = (state_71751[(17)]);
var inst_71646 = (state_71751[(2)]);
var inst_71647 = (inst_71631 + (1));
var tmp71763 = inst_71628;
var tmp71764 = inst_71630;
var tmp71765 = inst_71629;
var inst_71628__$1 = tmp71763;
var inst_71629__$1 = tmp71765;
var inst_71630__$1 = tmp71764;
var inst_71631__$1 = inst_71647;
var state_71751__$1 = (function (){var statearr_71770 = state_71751;
(statearr_71770[(13)] = inst_71628__$1);

(statearr_71770[(14)] = inst_71631__$1);

(statearr_71770[(18)] = inst_71646);

(statearr_71770[(16)] = inst_71630__$1);

(statearr_71770[(17)] = inst_71629__$1);

return statearr_71770;
})();
var statearr_71771_72936 = state_71751__$1;
(statearr_71771_72936[(2)] = null);

(statearr_71771_72936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (21))){
var inst_71673 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71775_72938 = state_71751__$1;
(statearr_71775_72938[(2)] = inst_71673);

(statearr_71775_72938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (31))){
var inst_71699 = (state_71751[(9)]);
var inst_71703 = done(null);
var inst_71704 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71699);
var state_71751__$1 = (function (){var statearr_71776 = state_71751;
(statearr_71776[(19)] = inst_71703);

return statearr_71776;
})();
var statearr_71777_72940 = state_71751__$1;
(statearr_71777_72940[(2)] = inst_71704);

(statearr_71777_72940[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (32))){
var inst_71692 = (state_71751[(10)]);
var inst_71691 = (state_71751[(20)]);
var inst_71694 = (state_71751[(12)]);
var inst_71693 = (state_71751[(21)]);
var inst_71706 = (state_71751[(2)]);
var inst_71707 = (inst_71694 + (1));
var tmp71772 = inst_71692;
var tmp71773 = inst_71691;
var tmp71774 = inst_71693;
var inst_71691__$1 = tmp71773;
var inst_71692__$1 = tmp71772;
var inst_71693__$1 = tmp71774;
var inst_71694__$1 = inst_71707;
var state_71751__$1 = (function (){var statearr_71778 = state_71751;
(statearr_71778[(10)] = inst_71692__$1);

(statearr_71778[(20)] = inst_71691__$1);

(statearr_71778[(22)] = inst_71706);

(statearr_71778[(12)] = inst_71694__$1);

(statearr_71778[(21)] = inst_71693__$1);

return statearr_71778;
})();
var statearr_71779_72941 = state_71751__$1;
(statearr_71779_72941[(2)] = null);

(statearr_71779_72941[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (40))){
var inst_71719 = (state_71751[(23)]);
var inst_71723 = done(null);
var inst_71724 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_71719);
var state_71751__$1 = (function (){var statearr_71780 = state_71751;
(statearr_71780[(24)] = inst_71723);

return statearr_71780;
})();
var statearr_71781_72942 = state_71751__$1;
(statearr_71781_72942[(2)] = inst_71724);

(statearr_71781_72942[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (33))){
var inst_71710 = (state_71751[(25)]);
var inst_71712 = cljs.core.chunked_seq_QMARK_(inst_71710);
var state_71751__$1 = state_71751;
if(inst_71712){
var statearr_71782_72943 = state_71751__$1;
(statearr_71782_72943[(1)] = (36));

} else {
var statearr_71783_72944 = state_71751__$1;
(statearr_71783_72944[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (13))){
var inst_71640 = (state_71751[(26)]);
var inst_71643 = cljs.core.async.close_BANG_(inst_71640);
var state_71751__$1 = state_71751;
var statearr_71784_72945 = state_71751__$1;
(statearr_71784_72945[(2)] = inst_71643);

(statearr_71784_72945[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (22))){
var inst_71663 = (state_71751[(8)]);
var inst_71666 = cljs.core.async.close_BANG_(inst_71663);
var state_71751__$1 = state_71751;
var statearr_71785_72946 = state_71751__$1;
(statearr_71785_72946[(2)] = inst_71666);

(statearr_71785_72946[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (36))){
var inst_71710 = (state_71751[(25)]);
var inst_71714 = cljs.core.chunk_first(inst_71710);
var inst_71715 = cljs.core.chunk_rest(inst_71710);
var inst_71716 = cljs.core.count(inst_71714);
var inst_71691 = inst_71715;
var inst_71692 = inst_71714;
var inst_71693 = inst_71716;
var inst_71694 = (0);
var state_71751__$1 = (function (){var statearr_71786 = state_71751;
(statearr_71786[(10)] = inst_71692);

(statearr_71786[(20)] = inst_71691);

(statearr_71786[(12)] = inst_71694);

(statearr_71786[(21)] = inst_71693);

return statearr_71786;
})();
var statearr_71787_72949 = state_71751__$1;
(statearr_71787_72949[(2)] = null);

(statearr_71787_72949[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (41))){
var inst_71710 = (state_71751[(25)]);
var inst_71726 = (state_71751[(2)]);
var inst_71727 = cljs.core.next(inst_71710);
var inst_71691 = inst_71727;
var inst_71692 = null;
var inst_71693 = (0);
var inst_71694 = (0);
var state_71751__$1 = (function (){var statearr_71788 = state_71751;
(statearr_71788[(27)] = inst_71726);

(statearr_71788[(10)] = inst_71692);

(statearr_71788[(20)] = inst_71691);

(statearr_71788[(12)] = inst_71694);

(statearr_71788[(21)] = inst_71693);

return statearr_71788;
})();
var statearr_71789_72950 = state_71751__$1;
(statearr_71789_72950[(2)] = null);

(statearr_71789_72950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (43))){
var state_71751__$1 = state_71751;
var statearr_71790_72951 = state_71751__$1;
(statearr_71790_72951[(2)] = null);

(statearr_71790_72951[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (29))){
var inst_71735 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71791_72952 = state_71751__$1;
(statearr_71791_72952[(2)] = inst_71735);

(statearr_71791_72952[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (44))){
var inst_71744 = (state_71751[(2)]);
var state_71751__$1 = (function (){var statearr_71792 = state_71751;
(statearr_71792[(28)] = inst_71744);

return statearr_71792;
})();
var statearr_71793_72953 = state_71751__$1;
(statearr_71793_72953[(2)] = null);

(statearr_71793_72953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (6))){
var inst_71683 = (state_71751[(29)]);
var inst_71682 = cljs.core.deref(cs);
var inst_71683__$1 = cljs.core.keys(inst_71682);
var inst_71684 = cljs.core.count(inst_71683__$1);
var inst_71685 = cljs.core.reset_BANG_(dctr,inst_71684);
var inst_71690 = cljs.core.seq(inst_71683__$1);
var inst_71691 = inst_71690;
var inst_71692 = null;
var inst_71693 = (0);
var inst_71694 = (0);
var state_71751__$1 = (function (){var statearr_71794 = state_71751;
(statearr_71794[(30)] = inst_71685);

(statearr_71794[(29)] = inst_71683__$1);

(statearr_71794[(10)] = inst_71692);

(statearr_71794[(20)] = inst_71691);

(statearr_71794[(12)] = inst_71694);

(statearr_71794[(21)] = inst_71693);

return statearr_71794;
})();
var statearr_71795_72954 = state_71751__$1;
(statearr_71795_72954[(2)] = null);

(statearr_71795_72954[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (28))){
var inst_71710 = (state_71751[(25)]);
var inst_71691 = (state_71751[(20)]);
var inst_71710__$1 = cljs.core.seq(inst_71691);
var state_71751__$1 = (function (){var statearr_71796 = state_71751;
(statearr_71796[(25)] = inst_71710__$1);

return statearr_71796;
})();
if(inst_71710__$1){
var statearr_71797_72955 = state_71751__$1;
(statearr_71797_72955[(1)] = (33));

} else {
var statearr_71798_72956 = state_71751__$1;
(statearr_71798_72956[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (25))){
var inst_71694 = (state_71751[(12)]);
var inst_71693 = (state_71751[(21)]);
var inst_71696 = (inst_71694 < inst_71693);
var inst_71697 = inst_71696;
var state_71751__$1 = state_71751;
if(cljs.core.truth_(inst_71697)){
var statearr_71799_72957 = state_71751__$1;
(statearr_71799_72957[(1)] = (27));

} else {
var statearr_71800_72958 = state_71751__$1;
(statearr_71800_72958[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (34))){
var state_71751__$1 = state_71751;
var statearr_71801_72959 = state_71751__$1;
(statearr_71801_72959[(2)] = null);

(statearr_71801_72959[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (17))){
var state_71751__$1 = state_71751;
var statearr_71802_72961 = state_71751__$1;
(statearr_71802_72961[(2)] = null);

(statearr_71802_72961[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (3))){
var inst_71749 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71751__$1,inst_71749);
} else {
if((state_val_71752 === (12))){
var inst_71678 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71803_72962 = state_71751__$1;
(statearr_71803_72962[(2)] = inst_71678);

(statearr_71803_72962[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (2))){
var state_71751__$1 = state_71751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71751__$1,(4),ch);
} else {
if((state_val_71752 === (23))){
var state_71751__$1 = state_71751;
var statearr_71804_72963 = state_71751__$1;
(statearr_71804_72963[(2)] = null);

(statearr_71804_72963[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (35))){
var inst_71733 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71805_72968 = state_71751__$1;
(statearr_71805_72968[(2)] = inst_71733);

(statearr_71805_72968[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (19))){
var inst_71650 = (state_71751[(7)]);
var inst_71654 = cljs.core.chunk_first(inst_71650);
var inst_71655 = cljs.core.chunk_rest(inst_71650);
var inst_71656 = cljs.core.count(inst_71654);
var inst_71628 = inst_71655;
var inst_71629 = inst_71654;
var inst_71630 = inst_71656;
var inst_71631 = (0);
var state_71751__$1 = (function (){var statearr_71806 = state_71751;
(statearr_71806[(13)] = inst_71628);

(statearr_71806[(14)] = inst_71631);

(statearr_71806[(16)] = inst_71630);

(statearr_71806[(17)] = inst_71629);

return statearr_71806;
})();
var statearr_71807_72969 = state_71751__$1;
(statearr_71807_72969[(2)] = null);

(statearr_71807_72969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (11))){
var inst_71628 = (state_71751[(13)]);
var inst_71650 = (state_71751[(7)]);
var inst_71650__$1 = cljs.core.seq(inst_71628);
var state_71751__$1 = (function (){var statearr_71808 = state_71751;
(statearr_71808[(7)] = inst_71650__$1);

return statearr_71808;
})();
if(inst_71650__$1){
var statearr_71809_72970 = state_71751__$1;
(statearr_71809_72970[(1)] = (16));

} else {
var statearr_71810_72971 = state_71751__$1;
(statearr_71810_72971[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (9))){
var inst_71680 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71811_72972 = state_71751__$1;
(statearr_71811_72972[(2)] = inst_71680);

(statearr_71811_72972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (5))){
var inst_71626 = cljs.core.deref(cs);
var inst_71627 = cljs.core.seq(inst_71626);
var inst_71628 = inst_71627;
var inst_71629 = null;
var inst_71630 = (0);
var inst_71631 = (0);
var state_71751__$1 = (function (){var statearr_71812 = state_71751;
(statearr_71812[(13)] = inst_71628);

(statearr_71812[(14)] = inst_71631);

(statearr_71812[(16)] = inst_71630);

(statearr_71812[(17)] = inst_71629);

return statearr_71812;
})();
var statearr_71813_72973 = state_71751__$1;
(statearr_71813_72973[(2)] = null);

(statearr_71813_72973[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (14))){
var state_71751__$1 = state_71751;
var statearr_71814_72974 = state_71751__$1;
(statearr_71814_72974[(2)] = null);

(statearr_71814_72974[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (45))){
var inst_71741 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71815_72975 = state_71751__$1;
(statearr_71815_72975[(2)] = inst_71741);

(statearr_71815_72975[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (26))){
var inst_71683 = (state_71751[(29)]);
var inst_71737 = (state_71751[(2)]);
var inst_71738 = cljs.core.seq(inst_71683);
var state_71751__$1 = (function (){var statearr_71816 = state_71751;
(statearr_71816[(31)] = inst_71737);

return statearr_71816;
})();
if(inst_71738){
var statearr_71817_72976 = state_71751__$1;
(statearr_71817_72976[(1)] = (42));

} else {
var statearr_71818_72977 = state_71751__$1;
(statearr_71818_72977[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (16))){
var inst_71650 = (state_71751[(7)]);
var inst_71652 = cljs.core.chunked_seq_QMARK_(inst_71650);
var state_71751__$1 = state_71751;
if(inst_71652){
var statearr_71819_72985 = state_71751__$1;
(statearr_71819_72985[(1)] = (19));

} else {
var statearr_71820_72986 = state_71751__$1;
(statearr_71820_72986[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (38))){
var inst_71730 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71821_72987 = state_71751__$1;
(statearr_71821_72987[(2)] = inst_71730);

(statearr_71821_72987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (30))){
var state_71751__$1 = state_71751;
var statearr_71822_72988 = state_71751__$1;
(statearr_71822_72988[(2)] = null);

(statearr_71822_72988[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (10))){
var inst_71631 = (state_71751[(14)]);
var inst_71629 = (state_71751[(17)]);
var inst_71639 = cljs.core._nth(inst_71629,inst_71631);
var inst_71640 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71639,(0),null);
var inst_71641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71639,(1),null);
var state_71751__$1 = (function (){var statearr_71823 = state_71751;
(statearr_71823[(26)] = inst_71640);

return statearr_71823;
})();
if(cljs.core.truth_(inst_71641)){
var statearr_71824_72992 = state_71751__$1;
(statearr_71824_72992[(1)] = (13));

} else {
var statearr_71825_72993 = state_71751__$1;
(statearr_71825_72993[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (18))){
var inst_71676 = (state_71751[(2)]);
var state_71751__$1 = state_71751;
var statearr_71826_72997 = state_71751__$1;
(statearr_71826_72997[(2)] = inst_71676);

(statearr_71826_72997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (42))){
var state_71751__$1 = state_71751;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_71751__$1,(45),dchan);
} else {
if((state_val_71752 === (37))){
var inst_71710 = (state_71751[(25)]);
var inst_71719 = (state_71751[(23)]);
var inst_71619 = (state_71751[(11)]);
var inst_71719__$1 = cljs.core.first(inst_71710);
var inst_71720 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_71719__$1,inst_71619,done);
var state_71751__$1 = (function (){var statearr_71827 = state_71751;
(statearr_71827[(23)] = inst_71719__$1);

return statearr_71827;
})();
if(cljs.core.truth_(inst_71720)){
var statearr_71828_73001 = state_71751__$1;
(statearr_71828_73001[(1)] = (39));

} else {
var statearr_71829_73002 = state_71751__$1;
(statearr_71829_73002[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71752 === (8))){
var inst_71631 = (state_71751[(14)]);
var inst_71630 = (state_71751[(16)]);
var inst_71633 = (inst_71631 < inst_71630);
var inst_71634 = inst_71633;
var state_71751__$1 = state_71751;
if(cljs.core.truth_(inst_71634)){
var statearr_71830_73007 = state_71751__$1;
(statearr_71830_73007[(1)] = (10));

} else {
var statearr_71831_73008 = state_71751__$1;
(statearr_71831_73008[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__71032__auto__ = null;
var cljs$core$async$mult_$_state_machine__71032__auto____0 = (function (){
var statearr_71832 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_71832[(0)] = cljs$core$async$mult_$_state_machine__71032__auto__);

(statearr_71832[(1)] = (1));

return statearr_71832;
});
var cljs$core$async$mult_$_state_machine__71032__auto____1 = (function (state_71751){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71751);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e71833){if((e71833 instanceof Object)){
var ex__71035__auto__ = e71833;
var statearr_71834_73009 = state_71751;
(statearr_71834_73009[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71751);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e71833;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73010 = state_71751;
state_71751 = G__73010;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__71032__auto__ = function(state_71751){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__71032__auto____1.call(this,state_71751);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__71032__auto____0;
cljs$core$async$mult_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__71032__auto____1;
return cljs$core$async$mult_$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_71835 = f__71152__auto__();
(statearr_71835[(6)] = c__71151__auto___72919);

return statearr_71835;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__71837 = arguments.length;
switch (G__71837) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_73014 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_73014(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_73019 = (function (m,ch){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4429__auto__.call(null,m,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4426__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_73019(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_73020 = (function (m){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4429__auto__.call(null,m));
} else {
var m__4426__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4426__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_73020(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_73026 = (function (m,state_map){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4429__auto__.call(null,m,state_map));
} else {
var m__4426__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4426__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_73026(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_73032 = (function (m,mode){
var x__4428__auto__ = (((m == null))?null:m);
var m__4429__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4429__auto__.call(null,m,mode));
} else {
var m__4426__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4426__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_73032(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4742__auto__ = [];
var len__4736__auto___73033 = arguments.length;
var i__4737__auto___73034 = (0);
while(true){
if((i__4737__auto___73034 < len__4736__auto___73033)){
args__4742__auto__.push((arguments[i__4737__auto___73034]));

var G__73035 = (i__4737__auto___73034 + (1));
i__4737__auto___73034 = G__73035;
continue;
} else {
}
break;
}

var argseq__4743__auto__ = ((((3) < args__4742__auto__.length))?(new cljs.core.IndexedSeq(args__4742__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4743__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__71842){
var map__71843 = p__71842;
var map__71843__$1 = (((((!((map__71843 == null))))?(((((map__71843.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__71843.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__71843):map__71843);
var opts = map__71843__$1;
var statearr_71845_73036 = state;
(statearr_71845_73036[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_71846_73037 = state;
(statearr_71846_73037[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_71847_73038 = state;
(statearr_71847_73038[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq71838){
var G__71839 = cljs.core.first(seq71838);
var seq71838__$1 = cljs.core.next(seq71838);
var G__71840 = cljs.core.first(seq71838__$1);
var seq71838__$2 = cljs.core.next(seq71838__$1);
var G__71841 = cljs.core.first(seq71838__$2);
var seq71838__$3 = cljs.core.next(seq71838__$2);
var self__4723__auto__ = this;
return self__4723__auto__.cljs$core$IFn$_invoke$arity$variadic(G__71839,G__71840,G__71841,seq71838__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async71848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async71848 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta71849){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta71849 = meta71849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_71850,meta71849__$1){
var self__ = this;
var _71850__$1 = this;
return (new cljs.core.async.t_cljs$core$async71848(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta71849__$1));
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_71850){
var self__ = this;
var _71850__$1 = this;
return self__.meta71849;
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71848.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async71848.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta71849","meta71849",1217012772,null)], null);
}));

(cljs.core.async.t_cljs$core$async71848.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async71848.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async71848");

(cljs.core.async.t_cljs$core$async71848.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async71848");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async71848.
 */
cljs.core.async.__GT_t_cljs$core$async71848 = (function cljs$core$async$mix_$___GT_t_cljs$core$async71848(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71849){
return (new cljs.core.async.t_cljs$core$async71848(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta71849));
});

}

return (new cljs.core.async.t_cljs$core$async71848(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__71151__auto___73043 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_71952){
var state_val_71953 = (state_71952[(1)]);
if((state_val_71953 === (7))){
var inst_71867 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
var statearr_71954_73048 = state_71952__$1;
(statearr_71954_73048[(2)] = inst_71867);

(statearr_71954_73048[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (20))){
var inst_71879 = (state_71952[(7)]);
var state_71952__$1 = state_71952;
var statearr_71955_73049 = state_71952__$1;
(statearr_71955_73049[(2)] = inst_71879);

(statearr_71955_73049[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (27))){
var state_71952__$1 = state_71952;
var statearr_71956_73051 = state_71952__$1;
(statearr_71956_73051[(2)] = null);

(statearr_71956_73051[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (1))){
var inst_71854 = (state_71952[(8)]);
var inst_71854__$1 = calc_state();
var inst_71856 = (inst_71854__$1 == null);
var inst_71857 = cljs.core.not(inst_71856);
var state_71952__$1 = (function (){var statearr_71957 = state_71952;
(statearr_71957[(8)] = inst_71854__$1);

return statearr_71957;
})();
if(inst_71857){
var statearr_71958_73052 = state_71952__$1;
(statearr_71958_73052[(1)] = (2));

} else {
var statearr_71959_73053 = state_71952__$1;
(statearr_71959_73053[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (24))){
var inst_71926 = (state_71952[(9)]);
var inst_71912 = (state_71952[(10)]);
var inst_71903 = (state_71952[(11)]);
var inst_71926__$1 = (inst_71903.cljs$core$IFn$_invoke$arity$1 ? inst_71903.cljs$core$IFn$_invoke$arity$1(inst_71912) : inst_71903.call(null,inst_71912));
var state_71952__$1 = (function (){var statearr_71960 = state_71952;
(statearr_71960[(9)] = inst_71926__$1);

return statearr_71960;
})();
if(cljs.core.truth_(inst_71926__$1)){
var statearr_71961_73055 = state_71952__$1;
(statearr_71961_73055[(1)] = (29));

} else {
var statearr_71962_73056 = state_71952__$1;
(statearr_71962_73056[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (4))){
var inst_71870 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71870)){
var statearr_71963_73057 = state_71952__$1;
(statearr_71963_73057[(1)] = (8));

} else {
var statearr_71964_73058 = state_71952__$1;
(statearr_71964_73058[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (15))){
var inst_71897 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71897)){
var statearr_71965_73059 = state_71952__$1;
(statearr_71965_73059[(1)] = (19));

} else {
var statearr_71966_73061 = state_71952__$1;
(statearr_71966_73061[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (21))){
var inst_71902 = (state_71952[(12)]);
var inst_71902__$1 = (state_71952[(2)]);
var inst_71903 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71902__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71904 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71902__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71905 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71902__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_71952__$1 = (function (){var statearr_71967 = state_71952;
(statearr_71967[(13)] = inst_71904);

(statearr_71967[(12)] = inst_71902__$1);

(statearr_71967[(11)] = inst_71903);

return statearr_71967;
})();
return cljs.core.async.ioc_alts_BANG_(state_71952__$1,(22),inst_71905);
} else {
if((state_val_71953 === (31))){
var inst_71934 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71934)){
var statearr_71968_73065 = state_71952__$1;
(statearr_71968_73065[(1)] = (32));

} else {
var statearr_71969_73066 = state_71952__$1;
(statearr_71969_73066[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (32))){
var inst_71911 = (state_71952[(14)]);
var state_71952__$1 = state_71952;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_71952__$1,(35),out,inst_71911);
} else {
if((state_val_71953 === (33))){
var inst_71902 = (state_71952[(12)]);
var inst_71879 = inst_71902;
var state_71952__$1 = (function (){var statearr_71970 = state_71952;
(statearr_71970[(7)] = inst_71879);

return statearr_71970;
})();
var statearr_71971_73067 = state_71952__$1;
(statearr_71971_73067[(2)] = null);

(statearr_71971_73067[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (13))){
var inst_71879 = (state_71952[(7)]);
var inst_71886 = inst_71879.cljs$lang$protocol_mask$partition0$;
var inst_71887 = (inst_71886 & (64));
var inst_71888 = inst_71879.cljs$core$ISeq$;
var inst_71889 = (cljs.core.PROTOCOL_SENTINEL === inst_71888);
var inst_71890 = ((inst_71887) || (inst_71889));
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71890)){
var statearr_71972_73068 = state_71952__$1;
(statearr_71972_73068[(1)] = (16));

} else {
var statearr_71973_73069 = state_71952__$1;
(statearr_71973_73069[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (22))){
var inst_71911 = (state_71952[(14)]);
var inst_71912 = (state_71952[(10)]);
var inst_71910 = (state_71952[(2)]);
var inst_71911__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71910,(0),null);
var inst_71912__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_71910,(1),null);
var inst_71913 = (inst_71911__$1 == null);
var inst_71914 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_71912__$1,change);
var inst_71915 = ((inst_71913) || (inst_71914));
var state_71952__$1 = (function (){var statearr_71974 = state_71952;
(statearr_71974[(14)] = inst_71911__$1);

(statearr_71974[(10)] = inst_71912__$1);

return statearr_71974;
})();
if(cljs.core.truth_(inst_71915)){
var statearr_71975_73070 = state_71952__$1;
(statearr_71975_73070[(1)] = (23));

} else {
var statearr_71976_73071 = state_71952__$1;
(statearr_71976_73071[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (36))){
var inst_71902 = (state_71952[(12)]);
var inst_71879 = inst_71902;
var state_71952__$1 = (function (){var statearr_71977 = state_71952;
(statearr_71977[(7)] = inst_71879);

return statearr_71977;
})();
var statearr_71978_73072 = state_71952__$1;
(statearr_71978_73072[(2)] = null);

(statearr_71978_73072[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (29))){
var inst_71926 = (state_71952[(9)]);
var state_71952__$1 = state_71952;
var statearr_71979_73073 = state_71952__$1;
(statearr_71979_73073[(2)] = inst_71926);

(statearr_71979_73073[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (6))){
var state_71952__$1 = state_71952;
var statearr_71980_73074 = state_71952__$1;
(statearr_71980_73074[(2)] = false);

(statearr_71980_73074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (28))){
var inst_71922 = (state_71952[(2)]);
var inst_71923 = calc_state();
var inst_71879 = inst_71923;
var state_71952__$1 = (function (){var statearr_71981 = state_71952;
(statearr_71981[(15)] = inst_71922);

(statearr_71981[(7)] = inst_71879);

return statearr_71981;
})();
var statearr_71982_73075 = state_71952__$1;
(statearr_71982_73075[(2)] = null);

(statearr_71982_73075[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (25))){
var inst_71948 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
var statearr_71983_73076 = state_71952__$1;
(statearr_71983_73076[(2)] = inst_71948);

(statearr_71983_73076[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (34))){
var inst_71946 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
var statearr_71984_73077 = state_71952__$1;
(statearr_71984_73077[(2)] = inst_71946);

(statearr_71984_73077[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (17))){
var state_71952__$1 = state_71952;
var statearr_71985_73081 = state_71952__$1;
(statearr_71985_73081[(2)] = false);

(statearr_71985_73081[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (3))){
var state_71952__$1 = state_71952;
var statearr_71986_73082 = state_71952__$1;
(statearr_71986_73082[(2)] = false);

(statearr_71986_73082[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (12))){
var inst_71950 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
return cljs.core.async.impl.ioc_helpers.return_chan(state_71952__$1,inst_71950);
} else {
if((state_val_71953 === (2))){
var inst_71854 = (state_71952[(8)]);
var inst_71859 = inst_71854.cljs$lang$protocol_mask$partition0$;
var inst_71860 = (inst_71859 & (64));
var inst_71861 = inst_71854.cljs$core$ISeq$;
var inst_71862 = (cljs.core.PROTOCOL_SENTINEL === inst_71861);
var inst_71863 = ((inst_71860) || (inst_71862));
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71863)){
var statearr_71987_73083 = state_71952__$1;
(statearr_71987_73083[(1)] = (5));

} else {
var statearr_71988_73084 = state_71952__$1;
(statearr_71988_73084[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (23))){
var inst_71911 = (state_71952[(14)]);
var inst_71917 = (inst_71911 == null);
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71917)){
var statearr_71989_73085 = state_71952__$1;
(statearr_71989_73085[(1)] = (26));

} else {
var statearr_71990_73086 = state_71952__$1;
(statearr_71990_73086[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (35))){
var inst_71937 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
if(cljs.core.truth_(inst_71937)){
var statearr_71991_73087 = state_71952__$1;
(statearr_71991_73087[(1)] = (36));

} else {
var statearr_71992_73088 = state_71952__$1;
(statearr_71992_73088[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (19))){
var inst_71879 = (state_71952[(7)]);
var inst_71899 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71879);
var state_71952__$1 = state_71952;
var statearr_71993_73089 = state_71952__$1;
(statearr_71993_73089[(2)] = inst_71899);

(statearr_71993_73089[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (11))){
var inst_71879 = (state_71952[(7)]);
var inst_71883 = (inst_71879 == null);
var inst_71884 = cljs.core.not(inst_71883);
var state_71952__$1 = state_71952;
if(inst_71884){
var statearr_71994_73090 = state_71952__$1;
(statearr_71994_73090[(1)] = (13));

} else {
var statearr_71995_73091 = state_71952__$1;
(statearr_71995_73091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (9))){
var inst_71854 = (state_71952[(8)]);
var state_71952__$1 = state_71952;
var statearr_71996_73093 = state_71952__$1;
(statearr_71996_73093[(2)] = inst_71854);

(statearr_71996_73093[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (5))){
var state_71952__$1 = state_71952;
var statearr_71997_73094 = state_71952__$1;
(statearr_71997_73094[(2)] = true);

(statearr_71997_73094[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (14))){
var state_71952__$1 = state_71952;
var statearr_71998_73095 = state_71952__$1;
(statearr_71998_73095[(2)] = false);

(statearr_71998_73095[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (26))){
var inst_71912 = (state_71952[(10)]);
var inst_71919 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_71912);
var state_71952__$1 = state_71952;
var statearr_71999_73096 = state_71952__$1;
(statearr_71999_73096[(2)] = inst_71919);

(statearr_71999_73096[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (16))){
var state_71952__$1 = state_71952;
var statearr_72000_73097 = state_71952__$1;
(statearr_72000_73097[(2)] = true);

(statearr_72000_73097[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (38))){
var inst_71942 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
var statearr_72001_73098 = state_71952__$1;
(statearr_72001_73098[(2)] = inst_71942);

(statearr_72001_73098[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (30))){
var inst_71904 = (state_71952[(13)]);
var inst_71912 = (state_71952[(10)]);
var inst_71903 = (state_71952[(11)]);
var inst_71929 = cljs.core.empty_QMARK_(inst_71903);
var inst_71930 = (inst_71904.cljs$core$IFn$_invoke$arity$1 ? inst_71904.cljs$core$IFn$_invoke$arity$1(inst_71912) : inst_71904.call(null,inst_71912));
var inst_71931 = cljs.core.not(inst_71930);
var inst_71932 = ((inst_71929) && (inst_71931));
var state_71952__$1 = state_71952;
var statearr_72002_73099 = state_71952__$1;
(statearr_72002_73099[(2)] = inst_71932);

(statearr_72002_73099[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (10))){
var inst_71854 = (state_71952[(8)]);
var inst_71875 = (state_71952[(2)]);
var inst_71876 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71875,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_71877 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71875,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_71878 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_71875,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_71879 = inst_71854;
var state_71952__$1 = (function (){var statearr_72003 = state_71952;
(statearr_72003[(16)] = inst_71876);

(statearr_72003[(17)] = inst_71877);

(statearr_72003[(7)] = inst_71879);

(statearr_72003[(18)] = inst_71878);

return statearr_72003;
})();
var statearr_72004_73100 = state_71952__$1;
(statearr_72004_73100[(2)] = null);

(statearr_72004_73100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (18))){
var inst_71894 = (state_71952[(2)]);
var state_71952__$1 = state_71952;
var statearr_72005_73101 = state_71952__$1;
(statearr_72005_73101[(2)] = inst_71894);

(statearr_72005_73101[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (37))){
var state_71952__$1 = state_71952;
var statearr_72006_73102 = state_71952__$1;
(statearr_72006_73102[(2)] = null);

(statearr_72006_73102[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_71953 === (8))){
var inst_71854 = (state_71952[(8)]);
var inst_71872 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_71854);
var state_71952__$1 = state_71952;
var statearr_72007_73103 = state_71952__$1;
(statearr_72007_73103[(2)] = inst_71872);

(statearr_72007_73103[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__71032__auto__ = null;
var cljs$core$async$mix_$_state_machine__71032__auto____0 = (function (){
var statearr_72008 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72008[(0)] = cljs$core$async$mix_$_state_machine__71032__auto__);

(statearr_72008[(1)] = (1));

return statearr_72008;
});
var cljs$core$async$mix_$_state_machine__71032__auto____1 = (function (state_71952){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_71952);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72009){if((e72009 instanceof Object)){
var ex__71035__auto__ = e72009;
var statearr_72010_73112 = state_71952;
(statearr_72010_73112[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_71952);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72009;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73113 = state_71952;
state_71952 = G__73113;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__71032__auto__ = function(state_71952){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__71032__auto____1.call(this,state_71952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__71032__auto____0;
cljs$core$async$mix_$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__71032__auto____1;
return cljs$core$async$mix_$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72011 = f__71152__auto__();
(statearr_72011[(6)] = c__71151__auto___73043);

return statearr_72011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_73116 = (function (p,v,ch,close_QMARK_){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4429__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4426__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4426__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_73116(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_73117 = (function (p,v,ch){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4429__auto__.call(null,p,v,ch));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4426__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_73117(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_73118 = (function() {
var G__73119 = null;
var G__73119__1 = (function (p){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4429__auto__.call(null,p));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4426__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__73119__2 = (function (p,v){
var x__4428__auto__ = (((p == null))?null:p);
var m__4429__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4428__auto__)]);
if((!((m__4429__auto__ == null)))){
return (m__4429__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4429__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4429__auto__.call(null,p,v));
} else {
var m__4426__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4426__auto__ == null)))){
return (m__4426__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4426__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4426__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__73119 = function(p,v){
switch(arguments.length){
case 1:
return G__73119__1.call(this,p);
case 2:
return G__73119__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__73119.cljs$core$IFn$_invoke$arity$1 = G__73119__1;
G__73119.cljs$core$IFn$_invoke$arity$2 = G__73119__2;
return G__73119;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__72013 = arguments.length;
switch (G__72013) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_73118(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_73118(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__72016 = arguments.length;
switch (G__72016) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4126__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__72014_SHARP_){
if(cljs.core.truth_((p1__72014_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__72014_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__72014_SHARP_.call(null,topic)))){
return p1__72014_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__72014_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72017 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72017 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta72018){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta72018 = meta72018;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72019,meta72018__$1){
var self__ = this;
var _72019__$1 = this;
return (new cljs.core.async.t_cljs$core$async72017(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta72018__$1));
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72019){
var self__ = this;
var _72019__$1 = this;
return self__.meta72018;
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async72017.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async72017.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta72018","meta72018",-675342582,null)], null);
}));

(cljs.core.async.t_cljs$core$async72017.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72017.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72017");

(cljs.core.async.t_cljs$core$async72017.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72017");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72017.
 */
cljs.core.async.__GT_t_cljs$core$async72017 = (function cljs$core$async$__GT_t_cljs$core$async72017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72018){
return (new cljs.core.async.t_cljs$core$async72017(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta72018));
});

}

return (new cljs.core.async.t_cljs$core$async72017(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__71151__auto___73122 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72091){
var state_val_72092 = (state_72091[(1)]);
if((state_val_72092 === (7))){
var inst_72087 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72093_73126 = state_72091__$1;
(statearr_72093_73126[(2)] = inst_72087);

(statearr_72093_73126[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (20))){
var state_72091__$1 = state_72091;
var statearr_72094_73127 = state_72091__$1;
(statearr_72094_73127[(2)] = null);

(statearr_72094_73127[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (1))){
var state_72091__$1 = state_72091;
var statearr_72095_73132 = state_72091__$1;
(statearr_72095_73132[(2)] = null);

(statearr_72095_73132[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (24))){
var inst_72070 = (state_72091[(7)]);
var inst_72079 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_72070);
var state_72091__$1 = state_72091;
var statearr_72096_73136 = state_72091__$1;
(statearr_72096_73136[(2)] = inst_72079);

(statearr_72096_73136[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (4))){
var inst_72022 = (state_72091[(8)]);
var inst_72022__$1 = (state_72091[(2)]);
var inst_72023 = (inst_72022__$1 == null);
var state_72091__$1 = (function (){var statearr_72097 = state_72091;
(statearr_72097[(8)] = inst_72022__$1);

return statearr_72097;
})();
if(cljs.core.truth_(inst_72023)){
var statearr_72098_73137 = state_72091__$1;
(statearr_72098_73137[(1)] = (5));

} else {
var statearr_72099_73138 = state_72091__$1;
(statearr_72099_73138[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (15))){
var inst_72064 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72100_73139 = state_72091__$1;
(statearr_72100_73139[(2)] = inst_72064);

(statearr_72100_73139[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (21))){
var inst_72084 = (state_72091[(2)]);
var state_72091__$1 = (function (){var statearr_72101 = state_72091;
(statearr_72101[(9)] = inst_72084);

return statearr_72101;
})();
var statearr_72102_73143 = state_72091__$1;
(statearr_72102_73143[(2)] = null);

(statearr_72102_73143[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (13))){
var inst_72046 = (state_72091[(10)]);
var inst_72048 = cljs.core.chunked_seq_QMARK_(inst_72046);
var state_72091__$1 = state_72091;
if(inst_72048){
var statearr_72103_73144 = state_72091__$1;
(statearr_72103_73144[(1)] = (16));

} else {
var statearr_72104_73145 = state_72091__$1;
(statearr_72104_73145[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (22))){
var inst_72076 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
if(cljs.core.truth_(inst_72076)){
var statearr_72105_73149 = state_72091__$1;
(statearr_72105_73149[(1)] = (23));

} else {
var statearr_72106_73150 = state_72091__$1;
(statearr_72106_73150[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (6))){
var inst_72022 = (state_72091[(8)]);
var inst_72070 = (state_72091[(7)]);
var inst_72072 = (state_72091[(11)]);
var inst_72070__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_72022) : topic_fn.call(null,inst_72022));
var inst_72071 = cljs.core.deref(mults);
var inst_72072__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_72071,inst_72070__$1);
var state_72091__$1 = (function (){var statearr_72107 = state_72091;
(statearr_72107[(7)] = inst_72070__$1);

(statearr_72107[(11)] = inst_72072__$1);

return statearr_72107;
})();
if(cljs.core.truth_(inst_72072__$1)){
var statearr_72108_73151 = state_72091__$1;
(statearr_72108_73151[(1)] = (19));

} else {
var statearr_72109_73152 = state_72091__$1;
(statearr_72109_73152[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (25))){
var inst_72081 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72110_73156 = state_72091__$1;
(statearr_72110_73156[(2)] = inst_72081);

(statearr_72110_73156[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (17))){
var inst_72046 = (state_72091[(10)]);
var inst_72055 = cljs.core.first(inst_72046);
var inst_72056 = cljs.core.async.muxch_STAR_(inst_72055);
var inst_72057 = cljs.core.async.close_BANG_(inst_72056);
var inst_72058 = cljs.core.next(inst_72046);
var inst_72032 = inst_72058;
var inst_72033 = null;
var inst_72034 = (0);
var inst_72035 = (0);
var state_72091__$1 = (function (){var statearr_72111 = state_72091;
(statearr_72111[(12)] = inst_72032);

(statearr_72111[(13)] = inst_72035);

(statearr_72111[(14)] = inst_72033);

(statearr_72111[(15)] = inst_72034);

(statearr_72111[(16)] = inst_72057);

return statearr_72111;
})();
var statearr_72112_73157 = state_72091__$1;
(statearr_72112_73157[(2)] = null);

(statearr_72112_73157[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (3))){
var inst_72089 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72091__$1,inst_72089);
} else {
if((state_val_72092 === (12))){
var inst_72066 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72113_73159 = state_72091__$1;
(statearr_72113_73159[(2)] = inst_72066);

(statearr_72113_73159[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (2))){
var state_72091__$1 = state_72091;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72091__$1,(4),ch);
} else {
if((state_val_72092 === (23))){
var state_72091__$1 = state_72091;
var statearr_72114_73160 = state_72091__$1;
(statearr_72114_73160[(2)] = null);

(statearr_72114_73160[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (19))){
var inst_72022 = (state_72091[(8)]);
var inst_72072 = (state_72091[(11)]);
var inst_72074 = cljs.core.async.muxch_STAR_(inst_72072);
var state_72091__$1 = state_72091;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72091__$1,(22),inst_72074,inst_72022);
} else {
if((state_val_72092 === (11))){
var inst_72032 = (state_72091[(12)]);
var inst_72046 = (state_72091[(10)]);
var inst_72046__$1 = cljs.core.seq(inst_72032);
var state_72091__$1 = (function (){var statearr_72115 = state_72091;
(statearr_72115[(10)] = inst_72046__$1);

return statearr_72115;
})();
if(inst_72046__$1){
var statearr_72116_73164 = state_72091__$1;
(statearr_72116_73164[(1)] = (13));

} else {
var statearr_72117_73165 = state_72091__$1;
(statearr_72117_73165[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (9))){
var inst_72068 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72118_73172 = state_72091__$1;
(statearr_72118_73172[(2)] = inst_72068);

(statearr_72118_73172[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (5))){
var inst_72029 = cljs.core.deref(mults);
var inst_72030 = cljs.core.vals(inst_72029);
var inst_72031 = cljs.core.seq(inst_72030);
var inst_72032 = inst_72031;
var inst_72033 = null;
var inst_72034 = (0);
var inst_72035 = (0);
var state_72091__$1 = (function (){var statearr_72119 = state_72091;
(statearr_72119[(12)] = inst_72032);

(statearr_72119[(13)] = inst_72035);

(statearr_72119[(14)] = inst_72033);

(statearr_72119[(15)] = inst_72034);

return statearr_72119;
})();
var statearr_72120_73179 = state_72091__$1;
(statearr_72120_73179[(2)] = null);

(statearr_72120_73179[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (14))){
var state_72091__$1 = state_72091;
var statearr_72124_73180 = state_72091__$1;
(statearr_72124_73180[(2)] = null);

(statearr_72124_73180[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (16))){
var inst_72046 = (state_72091[(10)]);
var inst_72050 = cljs.core.chunk_first(inst_72046);
var inst_72051 = cljs.core.chunk_rest(inst_72046);
var inst_72052 = cljs.core.count(inst_72050);
var inst_72032 = inst_72051;
var inst_72033 = inst_72050;
var inst_72034 = inst_72052;
var inst_72035 = (0);
var state_72091__$1 = (function (){var statearr_72125 = state_72091;
(statearr_72125[(12)] = inst_72032);

(statearr_72125[(13)] = inst_72035);

(statearr_72125[(14)] = inst_72033);

(statearr_72125[(15)] = inst_72034);

return statearr_72125;
})();
var statearr_72126_73181 = state_72091__$1;
(statearr_72126_73181[(2)] = null);

(statearr_72126_73181[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (10))){
var inst_72032 = (state_72091[(12)]);
var inst_72035 = (state_72091[(13)]);
var inst_72033 = (state_72091[(14)]);
var inst_72034 = (state_72091[(15)]);
var inst_72040 = cljs.core._nth(inst_72033,inst_72035);
var inst_72041 = cljs.core.async.muxch_STAR_(inst_72040);
var inst_72042 = cljs.core.async.close_BANG_(inst_72041);
var inst_72043 = (inst_72035 + (1));
var tmp72121 = inst_72032;
var tmp72122 = inst_72033;
var tmp72123 = inst_72034;
var inst_72032__$1 = tmp72121;
var inst_72033__$1 = tmp72122;
var inst_72034__$1 = tmp72123;
var inst_72035__$1 = inst_72043;
var state_72091__$1 = (function (){var statearr_72127 = state_72091;
(statearr_72127[(12)] = inst_72032__$1);

(statearr_72127[(13)] = inst_72035__$1);

(statearr_72127[(14)] = inst_72033__$1);

(statearr_72127[(15)] = inst_72034__$1);

(statearr_72127[(17)] = inst_72042);

return statearr_72127;
})();
var statearr_72128_73182 = state_72091__$1;
(statearr_72128_73182[(2)] = null);

(statearr_72128_73182[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (18))){
var inst_72061 = (state_72091[(2)]);
var state_72091__$1 = state_72091;
var statearr_72129_73183 = state_72091__$1;
(statearr_72129_73183[(2)] = inst_72061);

(statearr_72129_73183[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72092 === (8))){
var inst_72035 = (state_72091[(13)]);
var inst_72034 = (state_72091[(15)]);
var inst_72037 = (inst_72035 < inst_72034);
var inst_72038 = inst_72037;
var state_72091__$1 = state_72091;
if(cljs.core.truth_(inst_72038)){
var statearr_72130_73184 = state_72091__$1;
(statearr_72130_73184[(1)] = (10));

} else {
var statearr_72131_73185 = state_72091__$1;
(statearr_72131_73185[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72132 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72132[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72132[(1)] = (1));

return statearr_72132;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72091){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72091);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72133){if((e72133 instanceof Object)){
var ex__71035__auto__ = e72133;
var statearr_72134_73186 = state_72091;
(statearr_72134_73186[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72133;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73193 = state_72091;
state_72091 = G__73193;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72091){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72135 = f__71152__auto__();
(statearr_72135[(6)] = c__71151__auto___73122);

return statearr_72135;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__72137 = arguments.length;
switch (G__72137) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__72139 = arguments.length;
switch (G__72139) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__72141 = arguments.length;
switch (G__72141) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__71151__auto___73203 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72180){
var state_val_72181 = (state_72180[(1)]);
if((state_val_72181 === (7))){
var state_72180__$1 = state_72180;
var statearr_72182_73204 = state_72180__$1;
(statearr_72182_73204[(2)] = null);

(statearr_72182_73204[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (1))){
var state_72180__$1 = state_72180;
var statearr_72183_73205 = state_72180__$1;
(statearr_72183_73205[(2)] = null);

(statearr_72183_73205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (4))){
var inst_72144 = (state_72180[(7)]);
var inst_72146 = (inst_72144 < cnt);
var state_72180__$1 = state_72180;
if(cljs.core.truth_(inst_72146)){
var statearr_72184_73206 = state_72180__$1;
(statearr_72184_73206[(1)] = (6));

} else {
var statearr_72185_73207 = state_72180__$1;
(statearr_72185_73207[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (15))){
var inst_72176 = (state_72180[(2)]);
var state_72180__$1 = state_72180;
var statearr_72186_73208 = state_72180__$1;
(statearr_72186_73208[(2)] = inst_72176);

(statearr_72186_73208[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (13))){
var inst_72169 = cljs.core.async.close_BANG_(out);
var state_72180__$1 = state_72180;
var statearr_72187_73209 = state_72180__$1;
(statearr_72187_73209[(2)] = inst_72169);

(statearr_72187_73209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (6))){
var state_72180__$1 = state_72180;
var statearr_72188_73210 = state_72180__$1;
(statearr_72188_73210[(2)] = null);

(statearr_72188_73210[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (3))){
var inst_72178 = (state_72180[(2)]);
var state_72180__$1 = state_72180;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72180__$1,inst_72178);
} else {
if((state_val_72181 === (12))){
var inst_72166 = (state_72180[(8)]);
var inst_72166__$1 = (state_72180[(2)]);
var inst_72167 = cljs.core.some(cljs.core.nil_QMARK_,inst_72166__$1);
var state_72180__$1 = (function (){var statearr_72189 = state_72180;
(statearr_72189[(8)] = inst_72166__$1);

return statearr_72189;
})();
if(cljs.core.truth_(inst_72167)){
var statearr_72190_73211 = state_72180__$1;
(statearr_72190_73211[(1)] = (13));

} else {
var statearr_72191_73212 = state_72180__$1;
(statearr_72191_73212[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (2))){
var inst_72143 = cljs.core.reset_BANG_(dctr,cnt);
var inst_72144 = (0);
var state_72180__$1 = (function (){var statearr_72192 = state_72180;
(statearr_72192[(7)] = inst_72144);

(statearr_72192[(9)] = inst_72143);

return statearr_72192;
})();
var statearr_72193_73213 = state_72180__$1;
(statearr_72193_73213[(2)] = null);

(statearr_72193_73213[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (11))){
var inst_72144 = (state_72180[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_72180,(10),Object,null,(9));
var inst_72153 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_72144) : chs__$1.call(null,inst_72144));
var inst_72154 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_72144) : done.call(null,inst_72144));
var inst_72155 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_72153,inst_72154);
var state_72180__$1 = state_72180;
var statearr_72194_73220 = state_72180__$1;
(statearr_72194_73220[(2)] = inst_72155);


cljs.core.async.impl.ioc_helpers.process_exception(state_72180__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (9))){
var inst_72144 = (state_72180[(7)]);
var inst_72157 = (state_72180[(2)]);
var inst_72158 = (inst_72144 + (1));
var inst_72144__$1 = inst_72158;
var state_72180__$1 = (function (){var statearr_72195 = state_72180;
(statearr_72195[(7)] = inst_72144__$1);

(statearr_72195[(10)] = inst_72157);

return statearr_72195;
})();
var statearr_72196_73221 = state_72180__$1;
(statearr_72196_73221[(2)] = null);

(statearr_72196_73221[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (5))){
var inst_72164 = (state_72180[(2)]);
var state_72180__$1 = (function (){var statearr_72197 = state_72180;
(statearr_72197[(11)] = inst_72164);

return statearr_72197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72180__$1,(12),dchan);
} else {
if((state_val_72181 === (14))){
var inst_72166 = (state_72180[(8)]);
var inst_72171 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_72166);
var state_72180__$1 = state_72180;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72180__$1,(16),out,inst_72171);
} else {
if((state_val_72181 === (16))){
var inst_72173 = (state_72180[(2)]);
var state_72180__$1 = (function (){var statearr_72198 = state_72180;
(statearr_72198[(12)] = inst_72173);

return statearr_72198;
})();
var statearr_72199_73222 = state_72180__$1;
(statearr_72199_73222[(2)] = null);

(statearr_72199_73222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (10))){
var inst_72148 = (state_72180[(2)]);
var inst_72149 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_72180__$1 = (function (){var statearr_72200 = state_72180;
(statearr_72200[(13)] = inst_72148);

return statearr_72200;
})();
var statearr_72201_73223 = state_72180__$1;
(statearr_72201_73223[(2)] = inst_72149);


cljs.core.async.impl.ioc_helpers.process_exception(state_72180__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72181 === (8))){
var inst_72162 = (state_72180[(2)]);
var state_72180__$1 = state_72180;
var statearr_72202_73224 = state_72180__$1;
(statearr_72202_73224[(2)] = inst_72162);

(statearr_72202_73224[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72203[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72203[(1)] = (1));

return statearr_72203;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72180){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72180);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72204){if((e72204 instanceof Object)){
var ex__71035__auto__ = e72204;
var statearr_72205_73225 = state_72180;
(statearr_72205_73225[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72204;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73226 = state_72180;
state_72180 = G__73226;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72180);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72206 = f__71152__auto__();
(statearr_72206[(6)] = c__71151__auto___73203);

return statearr_72206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__72209 = arguments.length;
switch (G__72209) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73230 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72241){
var state_val_72242 = (state_72241[(1)]);
if((state_val_72242 === (7))){
var inst_72221 = (state_72241[(7)]);
var inst_72220 = (state_72241[(8)]);
var inst_72220__$1 = (state_72241[(2)]);
var inst_72221__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72220__$1,(0),null);
var inst_72222 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_72220__$1,(1),null);
var inst_72223 = (inst_72221__$1 == null);
var state_72241__$1 = (function (){var statearr_72243 = state_72241;
(statearr_72243[(9)] = inst_72222);

(statearr_72243[(7)] = inst_72221__$1);

(statearr_72243[(8)] = inst_72220__$1);

return statearr_72243;
})();
if(cljs.core.truth_(inst_72223)){
var statearr_72244_73231 = state_72241__$1;
(statearr_72244_73231[(1)] = (8));

} else {
var statearr_72245_73232 = state_72241__$1;
(statearr_72245_73232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (1))){
var inst_72210 = cljs.core.vec(chs);
var inst_72211 = inst_72210;
var state_72241__$1 = (function (){var statearr_72246 = state_72241;
(statearr_72246[(10)] = inst_72211);

return statearr_72246;
})();
var statearr_72247_73233 = state_72241__$1;
(statearr_72247_73233[(2)] = null);

(statearr_72247_73233[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (4))){
var inst_72211 = (state_72241[(10)]);
var state_72241__$1 = state_72241;
return cljs.core.async.ioc_alts_BANG_(state_72241__$1,(7),inst_72211);
} else {
if((state_val_72242 === (6))){
var inst_72237 = (state_72241[(2)]);
var state_72241__$1 = state_72241;
var statearr_72248_73234 = state_72241__$1;
(statearr_72248_73234[(2)] = inst_72237);

(statearr_72248_73234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (3))){
var inst_72239 = (state_72241[(2)]);
var state_72241__$1 = state_72241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72241__$1,inst_72239);
} else {
if((state_val_72242 === (2))){
var inst_72211 = (state_72241[(10)]);
var inst_72213 = cljs.core.count(inst_72211);
var inst_72214 = (inst_72213 > (0));
var state_72241__$1 = state_72241;
if(cljs.core.truth_(inst_72214)){
var statearr_72250_73237 = state_72241__$1;
(statearr_72250_73237[(1)] = (4));

} else {
var statearr_72251_73238 = state_72241__$1;
(statearr_72251_73238[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (11))){
var inst_72211 = (state_72241[(10)]);
var inst_72230 = (state_72241[(2)]);
var tmp72249 = inst_72211;
var inst_72211__$1 = tmp72249;
var state_72241__$1 = (function (){var statearr_72252 = state_72241;
(statearr_72252[(10)] = inst_72211__$1);

(statearr_72252[(11)] = inst_72230);

return statearr_72252;
})();
var statearr_72253_73239 = state_72241__$1;
(statearr_72253_73239[(2)] = null);

(statearr_72253_73239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (9))){
var inst_72221 = (state_72241[(7)]);
var state_72241__$1 = state_72241;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72241__$1,(11),out,inst_72221);
} else {
if((state_val_72242 === (5))){
var inst_72235 = cljs.core.async.close_BANG_(out);
var state_72241__$1 = state_72241;
var statearr_72254_73240 = state_72241__$1;
(statearr_72254_73240[(2)] = inst_72235);

(statearr_72254_73240[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (10))){
var inst_72233 = (state_72241[(2)]);
var state_72241__$1 = state_72241;
var statearr_72255_73241 = state_72241__$1;
(statearr_72255_73241[(2)] = inst_72233);

(statearr_72255_73241[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72242 === (8))){
var inst_72211 = (state_72241[(10)]);
var inst_72222 = (state_72241[(9)]);
var inst_72221 = (state_72241[(7)]);
var inst_72220 = (state_72241[(8)]);
var inst_72225 = (function (){var cs = inst_72211;
var vec__72216 = inst_72220;
var v = inst_72221;
var c = inst_72222;
return (function (p1__72207_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__72207_SHARP_);
});
})();
var inst_72226 = cljs.core.filterv(inst_72225,inst_72211);
var inst_72211__$1 = inst_72226;
var state_72241__$1 = (function (){var statearr_72256 = state_72241;
(statearr_72256[(10)] = inst_72211__$1);

return statearr_72256;
})();
var statearr_72257_73242 = state_72241__$1;
(statearr_72257_73242[(2)] = null);

(statearr_72257_73242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72258 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72258[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72258[(1)] = (1));

return statearr_72258;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72241){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72241);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72259){if((e72259 instanceof Object)){
var ex__71035__auto__ = e72259;
var statearr_72260_73249 = state_72241;
(statearr_72260_73249[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72259;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73250 = state_72241;
state_72241 = G__73250;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72241){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72261 = f__71152__auto__();
(statearr_72261[(6)] = c__71151__auto___73230);

return statearr_72261;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__72263 = arguments.length;
switch (G__72263) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73256 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72287){
var state_val_72288 = (state_72287[(1)]);
if((state_val_72288 === (7))){
var inst_72269 = (state_72287[(7)]);
var inst_72269__$1 = (state_72287[(2)]);
var inst_72270 = (inst_72269__$1 == null);
var inst_72271 = cljs.core.not(inst_72270);
var state_72287__$1 = (function (){var statearr_72289 = state_72287;
(statearr_72289[(7)] = inst_72269__$1);

return statearr_72289;
})();
if(inst_72271){
var statearr_72290_73258 = state_72287__$1;
(statearr_72290_73258[(1)] = (8));

} else {
var statearr_72291_73259 = state_72287__$1;
(statearr_72291_73259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (1))){
var inst_72264 = (0);
var state_72287__$1 = (function (){var statearr_72292 = state_72287;
(statearr_72292[(8)] = inst_72264);

return statearr_72292;
})();
var statearr_72293_73260 = state_72287__$1;
(statearr_72293_73260[(2)] = null);

(statearr_72293_73260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (4))){
var state_72287__$1 = state_72287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72287__$1,(7),ch);
} else {
if((state_val_72288 === (6))){
var inst_72282 = (state_72287[(2)]);
var state_72287__$1 = state_72287;
var statearr_72294_73261 = state_72287__$1;
(statearr_72294_73261[(2)] = inst_72282);

(statearr_72294_73261[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (3))){
var inst_72284 = (state_72287[(2)]);
var inst_72285 = cljs.core.async.close_BANG_(out);
var state_72287__$1 = (function (){var statearr_72295 = state_72287;
(statearr_72295[(9)] = inst_72284);

return statearr_72295;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72287__$1,inst_72285);
} else {
if((state_val_72288 === (2))){
var inst_72264 = (state_72287[(8)]);
var inst_72266 = (inst_72264 < n);
var state_72287__$1 = state_72287;
if(cljs.core.truth_(inst_72266)){
var statearr_72296_73262 = state_72287__$1;
(statearr_72296_73262[(1)] = (4));

} else {
var statearr_72297_73263 = state_72287__$1;
(statearr_72297_73263[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (11))){
var inst_72264 = (state_72287[(8)]);
var inst_72274 = (state_72287[(2)]);
var inst_72275 = (inst_72264 + (1));
var inst_72264__$1 = inst_72275;
var state_72287__$1 = (function (){var statearr_72298 = state_72287;
(statearr_72298[(10)] = inst_72274);

(statearr_72298[(8)] = inst_72264__$1);

return statearr_72298;
})();
var statearr_72299_73264 = state_72287__$1;
(statearr_72299_73264[(2)] = null);

(statearr_72299_73264[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (9))){
var state_72287__$1 = state_72287;
var statearr_72300_73265 = state_72287__$1;
(statearr_72300_73265[(2)] = null);

(statearr_72300_73265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (5))){
var state_72287__$1 = state_72287;
var statearr_72301_73267 = state_72287__$1;
(statearr_72301_73267[(2)] = null);

(statearr_72301_73267[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (10))){
var inst_72279 = (state_72287[(2)]);
var state_72287__$1 = state_72287;
var statearr_72302_73268 = state_72287__$1;
(statearr_72302_73268[(2)] = inst_72279);

(statearr_72302_73268[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72288 === (8))){
var inst_72269 = (state_72287[(7)]);
var state_72287__$1 = state_72287;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72287__$1,(11),out,inst_72269);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72303 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72303[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72303[(1)] = (1));

return statearr_72303;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72287){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72287);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72304){if((e72304 instanceof Object)){
var ex__71035__auto__ = e72304;
var statearr_72305_73270 = state_72287;
(statearr_72305_73270[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72287);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73271 = state_72287;
state_72287 = G__73271;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72287){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72306 = f__71152__auto__();
(statearr_72306[(6)] = c__71151__auto___73256);

return statearr_72306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72308 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72308 = (function (f,ch,meta72309){
this.f = f;
this.ch = ch;
this.meta72309 = meta72309;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72310,meta72309__$1){
var self__ = this;
var _72310__$1 = this;
return (new cljs.core.async.t_cljs$core$async72308(self__.f,self__.ch,meta72309__$1));
}));

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72310){
var self__ = this;
var _72310__$1 = this;
return self__.meta72309;
}));

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72311 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72311 = (function (f,ch,meta72309,_,fn1,meta72312){
this.f = f;
this.ch = ch;
this.meta72309 = meta72309;
this._ = _;
this.fn1 = fn1;
this.meta72312 = meta72312;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72313,meta72312__$1){
var self__ = this;
var _72313__$1 = this;
return (new cljs.core.async.t_cljs$core$async72311(self__.f,self__.ch,self__.meta72309,self__._,self__.fn1,meta72312__$1));
}));

(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72313){
var self__ = this;
var _72313__$1 = this;
return self__.meta72312;
}));

(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async72311.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__72307_SHARP_){
var G__72314 = (((p1__72307_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__72307_SHARP_) : self__.f.call(null,p1__72307_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__72314) : f1.call(null,G__72314));
});
}));

(cljs.core.async.t_cljs$core$async72311.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72309","meta72309",-692794945,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async72308","cljs.core.async/t_cljs$core$async72308",977826446,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta72312","meta72312",-8417915,null)], null);
}));

(cljs.core.async.t_cljs$core$async72311.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72311.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72311");

(cljs.core.async.t_cljs$core$async72311.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72311");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72311.
 */
cljs.core.async.__GT_t_cljs$core$async72311 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async72311(f__$1,ch__$1,meta72309__$1,___$2,fn1__$1,meta72312){
return (new cljs.core.async.t_cljs$core$async72311(f__$1,ch__$1,meta72309__$1,___$2,fn1__$1,meta72312));
});

}

return (new cljs.core.async.t_cljs$core$async72311(self__.f,self__.ch,self__.meta72309,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4115__auto__ = ret;
if(cljs.core.truth_(and__4115__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4115__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__72315 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__72315) : self__.f.call(null,G__72315));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72308.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async72308.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72309","meta72309",-692794945,null)], null);
}));

(cljs.core.async.t_cljs$core$async72308.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72308.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72308");

(cljs.core.async.t_cljs$core$async72308.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72308");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72308.
 */
cljs.core.async.__GT_t_cljs$core$async72308 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async72308(f__$1,ch__$1,meta72309){
return (new cljs.core.async.t_cljs$core$async72308(f__$1,ch__$1,meta72309));
});

}

return (new cljs.core.async.t_cljs$core$async72308(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72316 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72316 = (function (f,ch,meta72317){
this.f = f;
this.ch = ch;
this.meta72317 = meta72317;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72318,meta72317__$1){
var self__ = this;
var _72318__$1 = this;
return (new cljs.core.async.t_cljs$core$async72316(self__.f,self__.ch,meta72317__$1));
}));

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72318){
var self__ = this;
var _72318__$1 = this;
return self__.meta72317;
}));

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async72316.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72317","meta72317",302235774,null)], null);
}));

(cljs.core.async.t_cljs$core$async72316.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72316.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72316");

(cljs.core.async.t_cljs$core$async72316.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72316");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72316.
 */
cljs.core.async.__GT_t_cljs$core$async72316 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async72316(f__$1,ch__$1,meta72317){
return (new cljs.core.async.t_cljs$core$async72316(f__$1,ch__$1,meta72317));
});

}

return (new cljs.core.async.t_cljs$core$async72316(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async72319 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async72319 = (function (p,ch,meta72320){
this.p = p;
this.ch = ch;
this.meta72320 = meta72320;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_72321,meta72320__$1){
var self__ = this;
var _72321__$1 = this;
return (new cljs.core.async.t_cljs$core$async72319(self__.p,self__.ch,meta72320__$1));
}));

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_72321){
var self__ = this;
var _72321__$1 = this;
return self__.meta72320;
}));

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async72319.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async72319.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta72320","meta72320",1977481369,null)], null);
}));

(cljs.core.async.t_cljs$core$async72319.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async72319.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async72319");

(cljs.core.async.t_cljs$core$async72319.cljs$lang$ctorPrWriter = (function (this__4369__auto__,writer__4370__auto__,opt__4371__auto__){
return cljs.core._write(writer__4370__auto__,"cljs.core.async/t_cljs$core$async72319");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async72319.
 */
cljs.core.async.__GT_t_cljs$core$async72319 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async72319(p__$1,ch__$1,meta72320){
return (new cljs.core.async.t_cljs$core$async72319(p__$1,ch__$1,meta72320));
});

}

return (new cljs.core.async.t_cljs$core$async72319(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__72323 = arguments.length;
switch (G__72323) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73293 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72344){
var state_val_72345 = (state_72344[(1)]);
if((state_val_72345 === (7))){
var inst_72340 = (state_72344[(2)]);
var state_72344__$1 = state_72344;
var statearr_72346_73295 = state_72344__$1;
(statearr_72346_73295[(2)] = inst_72340);

(statearr_72346_73295[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (1))){
var state_72344__$1 = state_72344;
var statearr_72347_73296 = state_72344__$1;
(statearr_72347_73296[(2)] = null);

(statearr_72347_73296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (4))){
var inst_72326 = (state_72344[(7)]);
var inst_72326__$1 = (state_72344[(2)]);
var inst_72327 = (inst_72326__$1 == null);
var state_72344__$1 = (function (){var statearr_72348 = state_72344;
(statearr_72348[(7)] = inst_72326__$1);

return statearr_72348;
})();
if(cljs.core.truth_(inst_72327)){
var statearr_72349_73297 = state_72344__$1;
(statearr_72349_73297[(1)] = (5));

} else {
var statearr_72350_73298 = state_72344__$1;
(statearr_72350_73298[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (6))){
var inst_72326 = (state_72344[(7)]);
var inst_72331 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_72326) : p.call(null,inst_72326));
var state_72344__$1 = state_72344;
if(cljs.core.truth_(inst_72331)){
var statearr_72351_73299 = state_72344__$1;
(statearr_72351_73299[(1)] = (8));

} else {
var statearr_72352_73300 = state_72344__$1;
(statearr_72352_73300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (3))){
var inst_72342 = (state_72344[(2)]);
var state_72344__$1 = state_72344;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72344__$1,inst_72342);
} else {
if((state_val_72345 === (2))){
var state_72344__$1 = state_72344;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72344__$1,(4),ch);
} else {
if((state_val_72345 === (11))){
var inst_72334 = (state_72344[(2)]);
var state_72344__$1 = state_72344;
var statearr_72353_73305 = state_72344__$1;
(statearr_72353_73305[(2)] = inst_72334);

(statearr_72353_73305[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (9))){
var state_72344__$1 = state_72344;
var statearr_72354_73310 = state_72344__$1;
(statearr_72354_73310[(2)] = null);

(statearr_72354_73310[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (5))){
var inst_72329 = cljs.core.async.close_BANG_(out);
var state_72344__$1 = state_72344;
var statearr_72355_73311 = state_72344__$1;
(statearr_72355_73311[(2)] = inst_72329);

(statearr_72355_73311[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (10))){
var inst_72337 = (state_72344[(2)]);
var state_72344__$1 = (function (){var statearr_72356 = state_72344;
(statearr_72356[(8)] = inst_72337);

return statearr_72356;
})();
var statearr_72357_73316 = state_72344__$1;
(statearr_72357_73316[(2)] = null);

(statearr_72357_73316[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72345 === (8))){
var inst_72326 = (state_72344[(7)]);
var state_72344__$1 = state_72344;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72344__$1,(11),out,inst_72326);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72358 = [null,null,null,null,null,null,null,null,null];
(statearr_72358[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72358[(1)] = (1));

return statearr_72358;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72344){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72344);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72359){if((e72359 instanceof Object)){
var ex__71035__auto__ = e72359;
var statearr_72360_73321 = state_72344;
(statearr_72360_73321[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72359;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73326 = state_72344;
state_72344 = G__73326;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72344){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72361 = f__71152__auto__();
(statearr_72361[(6)] = c__71151__auto___73293);

return statearr_72361;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__72363 = arguments.length;
switch (G__72363) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__71151__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72425){
var state_val_72426 = (state_72425[(1)]);
if((state_val_72426 === (7))){
var inst_72421 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
var statearr_72427_73335 = state_72425__$1;
(statearr_72427_73335[(2)] = inst_72421);

(statearr_72427_73335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (20))){
var inst_72391 = (state_72425[(7)]);
var inst_72402 = (state_72425[(2)]);
var inst_72403 = cljs.core.next(inst_72391);
var inst_72377 = inst_72403;
var inst_72378 = null;
var inst_72379 = (0);
var inst_72380 = (0);
var state_72425__$1 = (function (){var statearr_72428 = state_72425;
(statearr_72428[(8)] = inst_72379);

(statearr_72428[(9)] = inst_72402);

(statearr_72428[(10)] = inst_72378);

(statearr_72428[(11)] = inst_72377);

(statearr_72428[(12)] = inst_72380);

return statearr_72428;
})();
var statearr_72429_73337 = state_72425__$1;
(statearr_72429_73337[(2)] = null);

(statearr_72429_73337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (1))){
var state_72425__$1 = state_72425;
var statearr_72430_73338 = state_72425__$1;
(statearr_72430_73338[(2)] = null);

(statearr_72430_73338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (4))){
var inst_72366 = (state_72425[(13)]);
var inst_72366__$1 = (state_72425[(2)]);
var inst_72367 = (inst_72366__$1 == null);
var state_72425__$1 = (function (){var statearr_72431 = state_72425;
(statearr_72431[(13)] = inst_72366__$1);

return statearr_72431;
})();
if(cljs.core.truth_(inst_72367)){
var statearr_72432_73339 = state_72425__$1;
(statearr_72432_73339[(1)] = (5));

} else {
var statearr_72433_73340 = state_72425__$1;
(statearr_72433_73340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (15))){
var state_72425__$1 = state_72425;
var statearr_72437_73341 = state_72425__$1;
(statearr_72437_73341[(2)] = null);

(statearr_72437_73341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (21))){
var state_72425__$1 = state_72425;
var statearr_72438_73342 = state_72425__$1;
(statearr_72438_73342[(2)] = null);

(statearr_72438_73342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (13))){
var inst_72379 = (state_72425[(8)]);
var inst_72378 = (state_72425[(10)]);
var inst_72377 = (state_72425[(11)]);
var inst_72380 = (state_72425[(12)]);
var inst_72387 = (state_72425[(2)]);
var inst_72388 = (inst_72380 + (1));
var tmp72434 = inst_72379;
var tmp72435 = inst_72378;
var tmp72436 = inst_72377;
var inst_72377__$1 = tmp72436;
var inst_72378__$1 = tmp72435;
var inst_72379__$1 = tmp72434;
var inst_72380__$1 = inst_72388;
var state_72425__$1 = (function (){var statearr_72439 = state_72425;
(statearr_72439[(8)] = inst_72379__$1);

(statearr_72439[(10)] = inst_72378__$1);

(statearr_72439[(14)] = inst_72387);

(statearr_72439[(11)] = inst_72377__$1);

(statearr_72439[(12)] = inst_72380__$1);

return statearr_72439;
})();
var statearr_72440_73343 = state_72425__$1;
(statearr_72440_73343[(2)] = null);

(statearr_72440_73343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (22))){
var state_72425__$1 = state_72425;
var statearr_72441_73344 = state_72425__$1;
(statearr_72441_73344[(2)] = null);

(statearr_72441_73344[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (6))){
var inst_72366 = (state_72425[(13)]);
var inst_72375 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72366) : f.call(null,inst_72366));
var inst_72376 = cljs.core.seq(inst_72375);
var inst_72377 = inst_72376;
var inst_72378 = null;
var inst_72379 = (0);
var inst_72380 = (0);
var state_72425__$1 = (function (){var statearr_72442 = state_72425;
(statearr_72442[(8)] = inst_72379);

(statearr_72442[(10)] = inst_72378);

(statearr_72442[(11)] = inst_72377);

(statearr_72442[(12)] = inst_72380);

return statearr_72442;
})();
var statearr_72443_73346 = state_72425__$1;
(statearr_72443_73346[(2)] = null);

(statearr_72443_73346[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (17))){
var inst_72391 = (state_72425[(7)]);
var inst_72395 = cljs.core.chunk_first(inst_72391);
var inst_72396 = cljs.core.chunk_rest(inst_72391);
var inst_72397 = cljs.core.count(inst_72395);
var inst_72377 = inst_72396;
var inst_72378 = inst_72395;
var inst_72379 = inst_72397;
var inst_72380 = (0);
var state_72425__$1 = (function (){var statearr_72444 = state_72425;
(statearr_72444[(8)] = inst_72379);

(statearr_72444[(10)] = inst_72378);

(statearr_72444[(11)] = inst_72377);

(statearr_72444[(12)] = inst_72380);

return statearr_72444;
})();
var statearr_72445_73347 = state_72425__$1;
(statearr_72445_73347[(2)] = null);

(statearr_72445_73347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (3))){
var inst_72423 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72425__$1,inst_72423);
} else {
if((state_val_72426 === (12))){
var inst_72411 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
var statearr_72446_73348 = state_72425__$1;
(statearr_72446_73348[(2)] = inst_72411);

(statearr_72446_73348[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (2))){
var state_72425__$1 = state_72425;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72425__$1,(4),in$);
} else {
if((state_val_72426 === (23))){
var inst_72419 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
var statearr_72447_73349 = state_72425__$1;
(statearr_72447_73349[(2)] = inst_72419);

(statearr_72447_73349[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (19))){
var inst_72406 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
var statearr_72448_73350 = state_72425__$1;
(statearr_72448_73350[(2)] = inst_72406);

(statearr_72448_73350[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (11))){
var inst_72391 = (state_72425[(7)]);
var inst_72377 = (state_72425[(11)]);
var inst_72391__$1 = cljs.core.seq(inst_72377);
var state_72425__$1 = (function (){var statearr_72449 = state_72425;
(statearr_72449[(7)] = inst_72391__$1);

return statearr_72449;
})();
if(inst_72391__$1){
var statearr_72450_73351 = state_72425__$1;
(statearr_72450_73351[(1)] = (14));

} else {
var statearr_72451_73352 = state_72425__$1;
(statearr_72451_73352[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (9))){
var inst_72413 = (state_72425[(2)]);
var inst_72414 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_72425__$1 = (function (){var statearr_72452 = state_72425;
(statearr_72452[(15)] = inst_72413);

return statearr_72452;
})();
if(cljs.core.truth_(inst_72414)){
var statearr_72453_73359 = state_72425__$1;
(statearr_72453_73359[(1)] = (21));

} else {
var statearr_72454_73361 = state_72425__$1;
(statearr_72454_73361[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (5))){
var inst_72369 = cljs.core.async.close_BANG_(out);
var state_72425__$1 = state_72425;
var statearr_72455_73367 = state_72425__$1;
(statearr_72455_73367[(2)] = inst_72369);

(statearr_72455_73367[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (14))){
var inst_72391 = (state_72425[(7)]);
var inst_72393 = cljs.core.chunked_seq_QMARK_(inst_72391);
var state_72425__$1 = state_72425;
if(inst_72393){
var statearr_72456_73373 = state_72425__$1;
(statearr_72456_73373[(1)] = (17));

} else {
var statearr_72457_73374 = state_72425__$1;
(statearr_72457_73374[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (16))){
var inst_72409 = (state_72425[(2)]);
var state_72425__$1 = state_72425;
var statearr_72458_73380 = state_72425__$1;
(statearr_72458_73380[(2)] = inst_72409);

(statearr_72458_73380[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72426 === (10))){
var inst_72378 = (state_72425[(10)]);
var inst_72380 = (state_72425[(12)]);
var inst_72385 = cljs.core._nth(inst_72378,inst_72380);
var state_72425__$1 = state_72425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72425__$1,(13),out,inst_72385);
} else {
if((state_val_72426 === (18))){
var inst_72391 = (state_72425[(7)]);
var inst_72400 = cljs.core.first(inst_72391);
var state_72425__$1 = state_72425;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72425__$1,(20),out,inst_72400);
} else {
if((state_val_72426 === (8))){
var inst_72379 = (state_72425[(8)]);
var inst_72380 = (state_72425[(12)]);
var inst_72382 = (inst_72380 < inst_72379);
var inst_72383 = inst_72382;
var state_72425__$1 = state_72425;
if(cljs.core.truth_(inst_72383)){
var statearr_72459_73400 = state_72425__$1;
(statearr_72459_73400[(1)] = (10));

} else {
var statearr_72460_73403 = state_72425__$1;
(statearr_72460_73403[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____0 = (function (){
var statearr_72461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72461[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__);

(statearr_72461[(1)] = (1));

return statearr_72461;
});
var cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____1 = (function (state_72425){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72425);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72462){if((e72462 instanceof Object)){
var ex__71035__auto__ = e72462;
var statearr_72463_73416 = state_72425;
(statearr_72463_73416[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72425);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72462;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73425 = state_72425;
state_72425 = G__73425;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__ = function(state_72425){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____1.call(this,state_72425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__71032__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72464 = f__71152__auto__();
(statearr_72464[(6)] = c__71151__auto__);

return statearr_72464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));

return c__71151__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__72466 = arguments.length;
switch (G__72466) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__72468 = arguments.length;
switch (G__72468) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__72470 = arguments.length;
switch (G__72470) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73449 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72494){
var state_val_72495 = (state_72494[(1)]);
if((state_val_72495 === (7))){
var inst_72489 = (state_72494[(2)]);
var state_72494__$1 = state_72494;
var statearr_72496_73450 = state_72494__$1;
(statearr_72496_73450[(2)] = inst_72489);

(statearr_72496_73450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (1))){
var inst_72471 = null;
var state_72494__$1 = (function (){var statearr_72497 = state_72494;
(statearr_72497[(7)] = inst_72471);

return statearr_72497;
})();
var statearr_72498_73455 = state_72494__$1;
(statearr_72498_73455[(2)] = null);

(statearr_72498_73455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (4))){
var inst_72474 = (state_72494[(8)]);
var inst_72474__$1 = (state_72494[(2)]);
var inst_72475 = (inst_72474__$1 == null);
var inst_72476 = cljs.core.not(inst_72475);
var state_72494__$1 = (function (){var statearr_72499 = state_72494;
(statearr_72499[(8)] = inst_72474__$1);

return statearr_72499;
})();
if(inst_72476){
var statearr_72500_73465 = state_72494__$1;
(statearr_72500_73465[(1)] = (5));

} else {
var statearr_72501_73466 = state_72494__$1;
(statearr_72501_73466[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (6))){
var state_72494__$1 = state_72494;
var statearr_72502_73467 = state_72494__$1;
(statearr_72502_73467[(2)] = null);

(statearr_72502_73467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (3))){
var inst_72491 = (state_72494[(2)]);
var inst_72492 = cljs.core.async.close_BANG_(out);
var state_72494__$1 = (function (){var statearr_72503 = state_72494;
(statearr_72503[(9)] = inst_72491);

return statearr_72503;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_72494__$1,inst_72492);
} else {
if((state_val_72495 === (2))){
var state_72494__$1 = state_72494;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72494__$1,(4),ch);
} else {
if((state_val_72495 === (11))){
var inst_72474 = (state_72494[(8)]);
var inst_72483 = (state_72494[(2)]);
var inst_72471 = inst_72474;
var state_72494__$1 = (function (){var statearr_72504 = state_72494;
(statearr_72504[(7)] = inst_72471);

(statearr_72504[(10)] = inst_72483);

return statearr_72504;
})();
var statearr_72505_73470 = state_72494__$1;
(statearr_72505_73470[(2)] = null);

(statearr_72505_73470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (9))){
var inst_72474 = (state_72494[(8)]);
var state_72494__$1 = state_72494;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72494__$1,(11),out,inst_72474);
} else {
if((state_val_72495 === (5))){
var inst_72471 = (state_72494[(7)]);
var inst_72474 = (state_72494[(8)]);
var inst_72478 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72474,inst_72471);
var state_72494__$1 = state_72494;
if(inst_72478){
var statearr_72507_73471 = state_72494__$1;
(statearr_72507_73471[(1)] = (8));

} else {
var statearr_72508_73472 = state_72494__$1;
(statearr_72508_73472[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (10))){
var inst_72486 = (state_72494[(2)]);
var state_72494__$1 = state_72494;
var statearr_72509_73473 = state_72494__$1;
(statearr_72509_73473[(2)] = inst_72486);

(statearr_72509_73473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72495 === (8))){
var inst_72471 = (state_72494[(7)]);
var tmp72506 = inst_72471;
var inst_72471__$1 = tmp72506;
var state_72494__$1 = (function (){var statearr_72510 = state_72494;
(statearr_72510[(7)] = inst_72471__$1);

return statearr_72510;
})();
var statearr_72511_73475 = state_72494__$1;
(statearr_72511_73475[(2)] = null);

(statearr_72511_73475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72512 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_72512[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72512[(1)] = (1));

return statearr_72512;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72494){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72494);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72513){if((e72513 instanceof Object)){
var ex__71035__auto__ = e72513;
var statearr_72514_73477 = state_72494;
(statearr_72514_73477[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72513;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73478 = state_72494;
state_72494 = G__73478;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72494){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72515 = f__71152__auto__();
(statearr_72515[(6)] = c__71151__auto___73449);

return statearr_72515;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__72517 = arguments.length;
switch (G__72517) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72555){
var state_val_72556 = (state_72555[(1)]);
if((state_val_72556 === (7))){
var inst_72551 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72557_73494 = state_72555__$1;
(statearr_72557_73494[(2)] = inst_72551);

(statearr_72557_73494[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (1))){
var inst_72518 = (new Array(n));
var inst_72519 = inst_72518;
var inst_72520 = (0);
var state_72555__$1 = (function (){var statearr_72558 = state_72555;
(statearr_72558[(7)] = inst_72519);

(statearr_72558[(8)] = inst_72520);

return statearr_72558;
})();
var statearr_72559_73502 = state_72555__$1;
(statearr_72559_73502[(2)] = null);

(statearr_72559_73502[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (4))){
var inst_72523 = (state_72555[(9)]);
var inst_72523__$1 = (state_72555[(2)]);
var inst_72524 = (inst_72523__$1 == null);
var inst_72525 = cljs.core.not(inst_72524);
var state_72555__$1 = (function (){var statearr_72560 = state_72555;
(statearr_72560[(9)] = inst_72523__$1);

return statearr_72560;
})();
if(inst_72525){
var statearr_72561_73508 = state_72555__$1;
(statearr_72561_73508[(1)] = (5));

} else {
var statearr_72562_73509 = state_72555__$1;
(statearr_72562_73509[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (15))){
var inst_72545 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72563_73517 = state_72555__$1;
(statearr_72563_73517[(2)] = inst_72545);

(statearr_72563_73517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (13))){
var state_72555__$1 = state_72555;
var statearr_72564_73522 = state_72555__$1;
(statearr_72564_73522[(2)] = null);

(statearr_72564_73522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (6))){
var inst_72520 = (state_72555[(8)]);
var inst_72541 = (inst_72520 > (0));
var state_72555__$1 = state_72555;
if(cljs.core.truth_(inst_72541)){
var statearr_72565_73526 = state_72555__$1;
(statearr_72565_73526[(1)] = (12));

} else {
var statearr_72566_73531 = state_72555__$1;
(statearr_72566_73531[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (3))){
var inst_72553 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72555__$1,inst_72553);
} else {
if((state_val_72556 === (12))){
var inst_72519 = (state_72555[(7)]);
var inst_72543 = cljs.core.vec(inst_72519);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72555__$1,(15),out,inst_72543);
} else {
if((state_val_72556 === (2))){
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72555__$1,(4),ch);
} else {
if((state_val_72556 === (11))){
var inst_72535 = (state_72555[(2)]);
var inst_72536 = (new Array(n));
var inst_72519 = inst_72536;
var inst_72520 = (0);
var state_72555__$1 = (function (){var statearr_72567 = state_72555;
(statearr_72567[(7)] = inst_72519);

(statearr_72567[(8)] = inst_72520);

(statearr_72567[(10)] = inst_72535);

return statearr_72567;
})();
var statearr_72568_73540 = state_72555__$1;
(statearr_72568_73540[(2)] = null);

(statearr_72568_73540[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (9))){
var inst_72519 = (state_72555[(7)]);
var inst_72533 = cljs.core.vec(inst_72519);
var state_72555__$1 = state_72555;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72555__$1,(11),out,inst_72533);
} else {
if((state_val_72556 === (5))){
var inst_72523 = (state_72555[(9)]);
var inst_72519 = (state_72555[(7)]);
var inst_72528 = (state_72555[(11)]);
var inst_72520 = (state_72555[(8)]);
var inst_72527 = (inst_72519[inst_72520] = inst_72523);
var inst_72528__$1 = (inst_72520 + (1));
var inst_72529 = (inst_72528__$1 < n);
var state_72555__$1 = (function (){var statearr_72569 = state_72555;
(statearr_72569[(12)] = inst_72527);

(statearr_72569[(11)] = inst_72528__$1);

return statearr_72569;
})();
if(cljs.core.truth_(inst_72529)){
var statearr_72570_73542 = state_72555__$1;
(statearr_72570_73542[(1)] = (8));

} else {
var statearr_72571_73543 = state_72555__$1;
(statearr_72571_73543[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (14))){
var inst_72548 = (state_72555[(2)]);
var inst_72549 = cljs.core.async.close_BANG_(out);
var state_72555__$1 = (function (){var statearr_72573 = state_72555;
(statearr_72573[(13)] = inst_72548);

return statearr_72573;
})();
var statearr_72574_73544 = state_72555__$1;
(statearr_72574_73544[(2)] = inst_72549);

(statearr_72574_73544[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (10))){
var inst_72539 = (state_72555[(2)]);
var state_72555__$1 = state_72555;
var statearr_72575_73545 = state_72555__$1;
(statearr_72575_73545[(2)] = inst_72539);

(statearr_72575_73545[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72556 === (8))){
var inst_72519 = (state_72555[(7)]);
var inst_72528 = (state_72555[(11)]);
var tmp72572 = inst_72519;
var inst_72519__$1 = tmp72572;
var inst_72520 = inst_72528;
var state_72555__$1 = (function (){var statearr_72576 = state_72555;
(statearr_72576[(7)] = inst_72519__$1);

(statearr_72576[(8)] = inst_72520);

return statearr_72576;
})();
var statearr_72577_73546 = state_72555__$1;
(statearr_72577_73546[(2)] = null);

(statearr_72577_73546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72578 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72578[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72578[(1)] = (1));

return statearr_72578;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72555){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72555);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72579){if((e72579 instanceof Object)){
var ex__71035__auto__ = e72579;
var statearr_72580_73555 = state_72555;
(statearr_72580_73555[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72555);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72579;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73556 = state_72555;
state_72555 = G__73556;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72555){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72555);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72581 = f__71152__auto__();
(statearr_72581[(6)] = c__71151__auto___73487);

return statearr_72581;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__72583 = arguments.length;
switch (G__72583) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__71151__auto___73563 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__71152__auto__ = (function (){var switch__71031__auto__ = (function (state_72625){
var state_val_72626 = (state_72625[(1)]);
if((state_val_72626 === (7))){
var inst_72621 = (state_72625[(2)]);
var state_72625__$1 = state_72625;
var statearr_72627_73564 = state_72625__$1;
(statearr_72627_73564[(2)] = inst_72621);

(statearr_72627_73564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (1))){
var inst_72584 = [];
var inst_72585 = inst_72584;
var inst_72586 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_72625__$1 = (function (){var statearr_72628 = state_72625;
(statearr_72628[(7)] = inst_72585);

(statearr_72628[(8)] = inst_72586);

return statearr_72628;
})();
var statearr_72629_73565 = state_72625__$1;
(statearr_72629_73565[(2)] = null);

(statearr_72629_73565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (4))){
var inst_72589 = (state_72625[(9)]);
var inst_72589__$1 = (state_72625[(2)]);
var inst_72590 = (inst_72589__$1 == null);
var inst_72591 = cljs.core.not(inst_72590);
var state_72625__$1 = (function (){var statearr_72630 = state_72625;
(statearr_72630[(9)] = inst_72589__$1);

return statearr_72630;
})();
if(inst_72591){
var statearr_72631_73567 = state_72625__$1;
(statearr_72631_73567[(1)] = (5));

} else {
var statearr_72632_73568 = state_72625__$1;
(statearr_72632_73568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (15))){
var inst_72615 = (state_72625[(2)]);
var state_72625__$1 = state_72625;
var statearr_72633_73569 = state_72625__$1;
(statearr_72633_73569[(2)] = inst_72615);

(statearr_72633_73569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (13))){
var state_72625__$1 = state_72625;
var statearr_72634_73570 = state_72625__$1;
(statearr_72634_73570[(2)] = null);

(statearr_72634_73570[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (6))){
var inst_72585 = (state_72625[(7)]);
var inst_72610 = inst_72585.length;
var inst_72611 = (inst_72610 > (0));
var state_72625__$1 = state_72625;
if(cljs.core.truth_(inst_72611)){
var statearr_72635_73571 = state_72625__$1;
(statearr_72635_73571[(1)] = (12));

} else {
var statearr_72636_73572 = state_72625__$1;
(statearr_72636_73572[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (3))){
var inst_72623 = (state_72625[(2)]);
var state_72625__$1 = state_72625;
return cljs.core.async.impl.ioc_helpers.return_chan(state_72625__$1,inst_72623);
} else {
if((state_val_72626 === (12))){
var inst_72585 = (state_72625[(7)]);
var inst_72613 = cljs.core.vec(inst_72585);
var state_72625__$1 = state_72625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72625__$1,(15),out,inst_72613);
} else {
if((state_val_72626 === (2))){
var state_72625__$1 = state_72625;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_72625__$1,(4),ch);
} else {
if((state_val_72626 === (11))){
var inst_72589 = (state_72625[(9)]);
var inst_72593 = (state_72625[(10)]);
var inst_72603 = (state_72625[(2)]);
var inst_72604 = [];
var inst_72605 = inst_72604.push(inst_72589);
var inst_72585 = inst_72604;
var inst_72586 = inst_72593;
var state_72625__$1 = (function (){var statearr_72637 = state_72625;
(statearr_72637[(7)] = inst_72585);

(statearr_72637[(8)] = inst_72586);

(statearr_72637[(11)] = inst_72603);

(statearr_72637[(12)] = inst_72605);

return statearr_72637;
})();
var statearr_72638_73573 = state_72625__$1;
(statearr_72638_73573[(2)] = null);

(statearr_72638_73573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (9))){
var inst_72585 = (state_72625[(7)]);
var inst_72601 = cljs.core.vec(inst_72585);
var state_72625__$1 = state_72625;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_72625__$1,(11),out,inst_72601);
} else {
if((state_val_72626 === (5))){
var inst_72589 = (state_72625[(9)]);
var inst_72593 = (state_72625[(10)]);
var inst_72586 = (state_72625[(8)]);
var inst_72593__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_72589) : f.call(null,inst_72589));
var inst_72594 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_72593__$1,inst_72586);
var inst_72595 = cljs.core.keyword_identical_QMARK_(inst_72586,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_72596 = ((inst_72594) || (inst_72595));
var state_72625__$1 = (function (){var statearr_72639 = state_72625;
(statearr_72639[(10)] = inst_72593__$1);

return statearr_72639;
})();
if(cljs.core.truth_(inst_72596)){
var statearr_72640_73576 = state_72625__$1;
(statearr_72640_73576[(1)] = (8));

} else {
var statearr_72641_73577 = state_72625__$1;
(statearr_72641_73577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (14))){
var inst_72618 = (state_72625[(2)]);
var inst_72619 = cljs.core.async.close_BANG_(out);
var state_72625__$1 = (function (){var statearr_72643 = state_72625;
(statearr_72643[(13)] = inst_72618);

return statearr_72643;
})();
var statearr_72644_73578 = state_72625__$1;
(statearr_72644_73578[(2)] = inst_72619);

(statearr_72644_73578[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (10))){
var inst_72608 = (state_72625[(2)]);
var state_72625__$1 = state_72625;
var statearr_72645_73579 = state_72625__$1;
(statearr_72645_73579[(2)] = inst_72608);

(statearr_72645_73579[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_72626 === (8))){
var inst_72589 = (state_72625[(9)]);
var inst_72593 = (state_72625[(10)]);
var inst_72585 = (state_72625[(7)]);
var inst_72598 = inst_72585.push(inst_72589);
var tmp72642 = inst_72585;
var inst_72585__$1 = tmp72642;
var inst_72586 = inst_72593;
var state_72625__$1 = (function (){var statearr_72646 = state_72625;
(statearr_72646[(7)] = inst_72585__$1);

(statearr_72646[(8)] = inst_72586);

(statearr_72646[(14)] = inst_72598);

return statearr_72646;
})();
var statearr_72647_73580 = state_72625__$1;
(statearr_72647_73580[(2)] = null);

(statearr_72647_73580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__71032__auto__ = null;
var cljs$core$async$state_machine__71032__auto____0 = (function (){
var statearr_72648 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_72648[(0)] = cljs$core$async$state_machine__71032__auto__);

(statearr_72648[(1)] = (1));

return statearr_72648;
});
var cljs$core$async$state_machine__71032__auto____1 = (function (state_72625){
while(true){
var ret_value__71033__auto__ = (function (){try{while(true){
var result__71034__auto__ = switch__71031__auto__(state_72625);
if(cljs.core.keyword_identical_QMARK_(result__71034__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__71034__auto__;
}
break;
}
}catch (e72649){if((e72649 instanceof Object)){
var ex__71035__auto__ = e72649;
var statearr_72650_73582 = state_72625;
(statearr_72650_73582[(5)] = ex__71035__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_72625);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e72649;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__71033__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__73583 = state_72625;
state_72625 = G__73583;
continue;
} else {
return ret_value__71033__auto__;
}
break;
}
});
cljs$core$async$state_machine__71032__auto__ = function(state_72625){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__71032__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__71032__auto____1.call(this,state_72625);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__71032__auto____0;
cljs$core$async$state_machine__71032__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__71032__auto____1;
return cljs$core$async$state_machine__71032__auto__;
})()
})();
var state__71153__auto__ = (function (){var statearr_72651 = f__71152__auto__();
(statearr_72651[(6)] = c__71151__auto___73563);

return statearr_72651;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__71153__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
