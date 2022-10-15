import {B as No, E as Bo, L as Ao, a as xo, c as at, l as nl, q as j, r as Io, u as zo, w as Uo} from "https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/chunk-PUDPL3HM.mjs";
import {a as bn, b as cs, c as Se, d as F} from "https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/chunk-H655HCC6.mjs";
var al = {};
cs(al, {
    default: ()=>k,
    unstable_IdlePriority: ()=>ds,
    unstable_ImmediatePriority: ()=>ps,
    unstable_LowPriority: ()=>ms,
    unstable_NormalPriority: ()=>hs,
    unstable_Profiling: ()=>gs,
    unstable_UserBlockingPriority: ()=>ys,
    unstable_cancelCallback: ()=>bs,
    unstable_continueExecution: ()=>vs,
    unstable_forceFrameRate: ()=>ks,
    unstable_getCurrentPriorityLevel: ()=>ws,
    unstable_getFirstCallbackNode: ()=>Es,
    unstable_next: ()=>_s,
    unstable_now: ()=>fs,
    unstable_pauseExecution: ()=>Ps,
    unstable_requestPaint: ()=>Ss,
    unstable_runWithPriority: ()=>Ts,
    unstable_scheduleCallback: ()=>Fs,
    unstable_shouldYield: ()=>Ls,
    unstable_wrapCallback: ()=>Cs
});
var Md = (e=>typeof bn < "u" ? bn : typeof Proxy < "u" ? new Proxy(e,{
    get: (n,t)=>(typeof bn < "u" ? bn : n)[t]
}) : e)(function(e) {
    if (typeof bn < "u")
        return bn.apply(this, arguments);
    throw new Error('Dynamic require of "' + e + '" is not supported')
});
var Vo = {};
var k = {}
  , Wo = Vo;
function Tu(e, n) {
    var t = e.length;
    e.push(n);
    e: for (; 0 < t; ) {
        var l = t - 1 >>> 1
          , u = e[l];
        if (!(0 < tl(u, n)))
            break e;
        e[l] = n,
        e[t] = u,
        t = l
    }
}
function Te(e) {
    return e.length === 0 ? null : e[0]
}
function ul(e) {
    if (e.length === 0)
        return null;
    var n = e[0]
      , t = e.pop();
    if (t !== n) {
        e[0] = t;
        e: for (var l = 0, u = e.length, r = u >>> 1; l < r; ) {
            var o = 2 * (l + 1) - 1
              , a = e[o]
              , i = o + 1
              , f = e[i];
            if (0 > tl(a, t))
                i < u && 0 > tl(f, a) ? (e[l] = f,
                e[i] = t,
                l = i) : (e[l] = a,
                e[o] = t,
                l = o);
            else {
                if (!(i < u && 0 > tl(f, t)))
                    break e;
                e[l] = f,
                e[i] = t,
                l = i
            }
        }
    }
    return n
}
function tl(e, n) {
    var t = e.sortIndex - n.sortIndex;
    return t !== 0 ? t : e.id - n.id
}
typeof performance == "object" && typeof performance.now == "function" ? (Qo = performance,
k.unstable_now = function() {
    return Qo.now()
}
) : (_u = Date,
Ho = _u.now(),
k.unstable_now = function() {
    return _u.now() - Ho
}
);
var Qo, _u, Ho, xe = [], Ge = [], ss = 1, ge = null, G = 3, rl = !1, vn = !1, st = !1, qo = typeof setTimeout == "function" ? setTimeout : null, Ko = typeof clearTimeout == "function" ? clearTimeout : null, $o = typeof Wo.nextTick < "u" ? Wo.nextTick : null;
typeof Se < "u" && Se.scheduling !== void 0 && Se.scheduling.isInputPending !== void 0 && Se.scheduling.isInputPending.bind(Se.scheduling);
function Fu(e) {
    for (var n = Te(Ge); n !== null; ) {
        if (n.callback === null)
            ul(Ge);
        else {
            if (!(n.startTime <= e))
                break;
            ul(Ge),
            n.sortIndex = n.expirationTime,
            Tu(xe, n)
        }
        n = Te(Ge)
    }
}
function Lu(e) {
    if (st = !1,
    Fu(e),
    !vn)
        if (Te(xe) !== null)
            vn = !0,
            Du(Cu);
        else {
            var n = Te(Ge);
            n !== null && Ou(Lu, n.startTime - e)
        }
}
function Cu(e, n) {
    vn = !1,
    st && (st = !1,
    Ko(ft),
    ft = -1),
    rl = !0;
    var t = G;
    try {
        for (Fu(n),
        ge = Te(xe); ge !== null && (!(ge.expirationTime > n) || e && !Go()); ) {
            var l = ge.callback;
            if (typeof l == "function") {
                ge.callback = null,
                G = ge.priorityLevel;
                var u = l(ge.expirationTime <= n);
                n = k.unstable_now(),
                typeof u == "function" ? ge.callback = u : ge === Te(xe) && ul(xe),
                Fu(n)
            } else
                ul(xe);
            ge = Te(xe)
        }
        if (ge !== null)
            var r = !0;
        else {
            var o = Te(Ge);
            o !== null && Ou(Lu, o.startTime - n),
            r = !1
        }
        return r
    } finally {
        ge = null,
        G = t,
        rl = !1
    }
}
var ol = !1
  , ll = null
  , ft = -1
  , Yo = 5
  , Xo = -1;
function Go() {
    return !(k.unstable_now() - Xo < Yo)
}
function Pu() {
    if (ll !== null) {
        var e = k.unstable_now();
        Xo = e;
        var n = !0;
        try {
            n = ll(!0, e)
        } finally {
            n ? ct() : (ol = !1,
            ll = null)
        }
    } else
        ol = !1
}
var ct;
typeof $o == "function" ? ct = function() {
    $o(Pu)
}
: typeof MessageChannel < "u" ? (Su = new MessageChannel,
jo = Su.port2,
Su.port1.onmessage = Pu,
ct = function() {
    jo.postMessage(null)
}
) : ct = function() {
    qo(Pu, 0)
}
;
var Su, jo;
function Du(e) {
    ll = e,
    ol || (ol = !0,
    ct())
}
function Ou(e, n) {
    ft = qo(function() {
        e(k.unstable_now())
    }, n)
}
k.unstable_IdlePriority = 5;
k.unstable_ImmediatePriority = 1;
k.unstable_LowPriority = 4;
k.unstable_NormalPriority = 3;
k.unstable_Profiling = null;
k.unstable_UserBlockingPriority = 2;
k.unstable_cancelCallback = function(e) {
    e.callback = null
}
;
k.unstable_continueExecution = function() {
    vn || rl || (vn = !0,
    Du(Cu))
}
;
k.unstable_forceFrameRate = function(e) {
    0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Yo = 0 < e ? Math.floor(1e3 / e) : 5
}
;
k.unstable_getCurrentPriorityLevel = function() {
    return G
}
;
k.unstable_getFirstCallbackNode = function() {
    return Te(xe)
}
;
k.unstable_next = function(e) {
    switch (G) {
    case 1:
    case 2:
    case 3:
        var n = 3;
        break;
    default:
        n = G
    }
    var t = G;
    G = n;
    try {
        return e()
    } finally {
        G = t
    }
}
;
k.unstable_pauseExecution = function() {}
;
k.unstable_requestPaint = function() {}
;
k.unstable_runWithPriority = function(e, n) {
    switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        break;
    default:
        e = 3
    }
    var t = G;
    G = e;
    try {
        return n()
    } finally {
        G = t
    }
}
;
k.unstable_scheduleCallback = function(e, n, t) {
    var l = k.unstable_now();
    switch (typeof t == "object" && t !== null ? (t = t.delay,
    t = typeof t == "number" && 0 < t ? l + t : l) : t = l,
    e) {
    case 1:
        var u = -1;
        break;
    case 2:
        u = 250;
        break;
    case 5:
        u = 1073741823;
        break;
    case 4:
        u = 1e4;
        break;
    default:
        u = 5e3
    }
    return u = t + u,
    e = {
        id: ss++,
        callback: n,
        priorityLevel: e,
        startTime: t,
        expirationTime: u,
        sortIndex: -1
    },
    t > l ? (e.sortIndex = t,
    Tu(Ge, e),
    Te(xe) === null && e === Te(Ge) && (st ? (Ko(ft),
    ft = -1) : st = !0,
    Ou(Lu, t - l))) : (e.sortIndex = u,
    Tu(xe, e),
    vn || rl || (vn = !0,
    Du(Cu))),
    e
}
;
k.unstable_shouldYield = Go;
k.unstable_wrapCallback = function(e) {
    var n = G;
    return function() {
        var t = G;
        G = n;
        try {
            return e.apply(this, arguments)
        } finally {
            G = t
        }
    }
}
;
var Vd = k.unstable_now
  , Wd = k.unstable_IdlePriority
  , Qd = k.unstable_ImmediatePriority
  , Hd = k.unstable_LowPriority
  , $d = k.unstable_NormalPriority
  , jd = k.unstable_Profiling
  , qd = k.unstable_UserBlockingPriority
  , Kd = k.unstable_cancelCallback
  , Yd = k.unstable_continueExecution
  , Xd = k.unstable_forceFrameRate
  , Gd = k.unstable_getCurrentPriorityLevel
  , Zd = k.unstable_getFirstCallbackNode
  , Jd = k.unstable_next
  , ep = k.unstable_pauseExecution
  , np = k.unstable_requestPaint
  , tp = k.unstable_runWithPriority
  , lp = k.unstable_scheduleCallback
  , up = k.unstable_shouldYield
  , rp = k.unstable_wrapCallback;
var fs = k.unstable_now
  , ds = k.unstable_IdlePriority
  , ps = k.unstable_ImmediatePriority
  , ms = k.unstable_LowPriority
  , hs = k.unstable_NormalPriority
  , gs = k.unstable_Profiling
  , ys = k.unstable_UserBlockingPriority
  , bs = k.unstable_cancelCallback
  , vs = k.unstable_continueExecution
  , ks = k.unstable_forceFrameRate
  , ws = k.unstable_getCurrentPriorityLevel
  , Es = k.unstable_getFirstCallbackNode
  , _s = k.unstable_next
  , Ps = k.unstable_pauseExecution
  , Ss = k.unstable_requestPaint
  , Ts = k.unstable_runWithPriority
  , Fs = k.unstable_scheduleCallback
  , Ls = k.unstable_shouldYield
  , Cs = k.unstable_wrapCallback;
var Ds = "default"in nl ? xo : nl
  , Os = "default"in al ? k : al
  , me = {}
  , ai = Ds
  , pe = Os;
function h(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
        n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var ii = new Set
  , xt = {};
function On(e, n) {
    Jn(e, n),
    Jn(e + "Capture", n)
}
function Jn(e, n) {
    for (xt[e] = n,
    e = 0; e < n.length; e++)
        ii.add(n[e])
}
var je = !(typeof F > "u" || typeof F.document > "u" || typeof F.document.createElement > "u")
  , Ju = Object.prototype.hasOwnProperty
  , Rs = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , Zo = {}
  , Jo = {};
function Ms(e) {
    return Ju.call(Jo, e) ? !0 : Ju.call(Zo, e) ? !1 : Rs.test(e) ? Jo[e] = !0 : (Zo[e] = !0,
    !1)
}
function xs(e, n, t, l) {
    if (t !== null && t.type === 0)
        return !1;
    switch (typeof n) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return l ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Is(e, n, t, l) {
    if (n === null || typeof n > "u" || xs(e, n, t, l))
        return !0;
    if (l)
        return !1;
    if (t !== null)
        switch (t.type) {
        case 3:
            return !n;
        case 4:
            return n === !1;
        case 5:
            return isNaN(n);
        case 6:
            return isNaN(n) || 1 > n
        }
    return !1
}
function ue(e, n, t, l, u, r, o) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4,
    this.attributeName = l,
    this.attributeNamespace = u,
    this.mustUseProperty = t,
    this.propertyName = e,
    this.type = n,
    this.sanitizeURL = r,
    this.removeEmptyString = o
}
var X = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    X[e] = new ue(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    X[n] = new ue(n,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    X[e] = new ue(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    X[e] = new ue(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    X[e] = new ue(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    X[e] = new ue(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    X[e] = new ue(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    X[e] = new ue(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    X[e] = new ue(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Qr = /[\-:]([a-z])/g;
function Hr(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(Qr, Hr);
    X[n] = new ue(n,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(Qr, Hr);
    X[n] = new ue(n,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(Qr, Hr);
    X[n] = new ue(n,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    X[e] = new ue(e,1,!1,e.toLowerCase(),null,!1,!1)
});
X.xlinkHref = new ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    X[e] = new ue(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function $r(e, n, t, l) {
    var u = X.hasOwnProperty(n) ? X[n] : null;
    (u !== null ? u.type !== 0 : l || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Is(n, t, u, l) && (t = null),
    l || u === null ? Ms(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : u.mustUseProperty ? e[u.propertyName] = t === null ? u.type !== 3 && "" : t : (n = u.attributeName,
    l = u.attributeNamespace,
    t === null ? e.removeAttribute(n) : (u = u.type,
    t = u === 3 || u === 4 && t === !0 ? "" : "" + t,
    l ? e.setAttributeNS(l, n, t) : e.setAttribute(n, t))))
}
var Ye = ai.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , il = Symbol.for("react.element")
  , In = Symbol.for("react.portal")
  , zn = Symbol.for("react.fragment")
  , jr = Symbol.for("react.strict_mode")
  , er = Symbol.for("react.profiler")
  , ci = Symbol.for("react.provider")
  , si = Symbol.for("react.context")
  , qr = Symbol.for("react.forward_ref")
  , nr = Symbol.for("react.suspense")
  , tr = Symbol.for("react.suspense_list")
  , Kr = Symbol.for("react.memo")
  , Je = Symbol.for("react.lazy");
Symbol.for("react.scope");
Symbol.for("react.debug_trace_mode");
var fi = Symbol.for("react.offscreen");
Symbol.for("react.legacy_hidden");
Symbol.for("react.cache");
Symbol.for("react.tracing_marker");
var ea = Symbol.iterator;
function dt(e) {
    return e === null || typeof e != "object" ? null : (e = ea && e[ea] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Ru, U = Object.assign;
function wt(e) {
    if (Ru === void 0)
        try {
            throw Error()
        } catch (t) {
            var n = t.stack.trim().match(/\n( *(at )?)/);
            Ru = n && n[1] || ""
        }
    return `
` + Ru + e
}
var Mu = !1;
function xu(e, n) {
    if (!e || Mu)
        return "";
    Mu = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (n)
            if (n = function() {
                throw Error()
            }
            ,
            Object.defineProperty(n.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(n, [])
                } catch (f) {
                    var l = f
                }
                Reflect.construct(e, [], n)
            } else {
                try {
                    n.call()
                } catch (f) {
                    l = f
                }
                e.call(n.prototype)
            }
        else {
            try {
                throw Error()
            } catch (f) {
                l = f
            }
            e()
        }
    } catch (f) {
        if (f && l && typeof f.stack == "string") {
            for (var u = f.stack.split(`
`), r = l.stack.split(`
`), o = u.length - 1, a = r.length - 1; 1 <= o && 0 <= a && u[o] !== r[a]; )
                a--;
            for (; 1 <= o && 0 <= a; o--,
            a--)
                if (u[o] !== r[a]) {
                    if (o !== 1 || a !== 1)
                        do
                            if (o--,
                            a--,
                            0 > a || u[o] !== r[a]) {
                                var i = `
` + u[o].replace(" at new ", " at ");
                                return e.displayName && i.includes("<anonymous>") && (i = i.replace("<anonymous>", e.displayName)),
                                i
                            }
                        while (1 <= o && 0 <= a);
                    break
                }
        }
    } finally {
        Mu = !1,
        Error.prepareStackTrace = t
    }
    return (e = e ? e.displayName || e.name : "") ? wt(e) : ""
}
function zs(e) {
    switch (e.tag) {
    case 5:
        return wt(e.type);
    case 16:
        return wt("Lazy");
    case 13:
        return wt("Suspense");
    case 19:
        return wt("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = xu(e.type, !1),
        e;
    case 11:
        return e = xu(e.type.render, !1),
        e;
    case 1:
        return e = xu(e.type, !0),
        e;
    default:
        return ""
    }
}
function lr(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case zn:
        return "Fragment";
    case In:
        return "Portal";
    case er:
        return "Profiler";
    case jr:
        return "StrictMode";
    case nr:
        return "Suspense";
    case tr:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case si:
            return (e.displayName || "Context") + ".Consumer";
        case ci:
            return (e._context.displayName || "Context") + ".Provider";
        case qr:
            var n = e.render;
            return e = e.displayName,
            e || (e = n.displayName || n.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Kr:
            return n = e.displayName || null,
            n !== null ? n : lr(e.type) || "Memo";
        case Je:
            n = e._payload,
            e = e._init;
            try {
                return lr(e(n))
            } catch {}
        }
    return null
}
function Us(e) {
    var n = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (n.displayName || "Context") + ".Consumer";
    case 10:
        return (n._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = n.render,
        e = e.displayName || e.name || "",
        n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return n;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return lr(n);
    case 8:
        return n === jr ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof n == "function")
            return n.displayName || n.name || null;
        if (typeof n == "string")
            return n
    }
    return null
}
function dn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function di(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
}
function Ns(e) {
    var n = di(e) ? "checked" : "value"
      , t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n)
      , l = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
        var u = t.get
          , r = t.set;
        return Object.defineProperty(e, n, {
            configurable: !0,
            get: function() {
                return u.call(this)
            },
            set: function(o) {
                l = "" + o,
                r.call(this, o)
            }
        }),
        Object.defineProperty(e, n, {
            enumerable: t.enumerable
        }),
        {
            getValue: function() {
                return l
            },
            setValue: function(o) {
                l = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[n]
            }
        }
    }
}
function cl(e) {
    e._valueTracker || (e._valueTracker = Ns(e))
}
function pi(e) {
    if (!e)
        return !1;
    var n = e._valueTracker;
    if (!n)
        return !0;
    var t = n.getValue()
      , l = "";
    return e && (l = di(e) ? e.checked ? "true" : "false" : e.value),
    e = l,
    e !== t && (n.setValue(e),
    !0)
}
function Ul(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function ur(e, n) {
    var t = n.checked;
    return U({}, n, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: t ?? e._wrapperState.initialChecked
    })
}
function na(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue
      , l = n.checked != null ? n.checked : n.defaultChecked;
    t = dn(n.value != null ? n.value : t),
    e._wrapperState = {
        initialChecked: l,
        initialValue: t,
        controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null
    }
}
function mi(e, n) {
    n = n.checked,
    n != null && $r(e, "checked", n, !1)
}
function rr(e, n) {
    mi(e, n);
    var t = dn(n.value)
      , l = n.type;
    if (t != null)
        l === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (l === "submit" || l === "reset") {
        e.removeAttribute("value");
        return
    }
    n.hasOwnProperty("value") ? or(e, n.type, t) : n.hasOwnProperty("defaultValue") && or(e, n.type, dn(n.defaultValue)),
    n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked)
}
function ta(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
        var l = n.type;
        if (!(l !== "submit" && l !== "reset" || n.value !== void 0 && n.value !== null))
            return;
        n = "" + e._wrapperState.initialValue,
        t || n === e.value || (e.value = n),
        e.defaultValue = n
    }
    t = e.name,
    t !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    t !== "" && (e.name = t)
}
function or(e, n, t) {
    n === "number" && Ul(e.ownerDocument) === e || (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t))
}
var Et = Array.isArray;
function qn(e, n, t, l) {
    if (e = e.options,
    n) {
        n = {};
        for (var u = 0; u < t.length; u++)
            n["$" + t[u]] = !0;
        for (t = 0; t < e.length; t++)
            u = n.hasOwnProperty("$" + e[t].value),
            e[t].selected !== u && (e[t].selected = u),
            u && l && (e[t].defaultSelected = !0)
    } else {
        for (t = "" + dn(t),
        n = null,
        u = 0; u < e.length; u++) {
            if (e[u].value === t) {
                e[u].selected = !0,
                l && (e[u].defaultSelected = !0);
                return
            }
            n !== null || e[u].disabled || (n = e[u])
        }
        n !== null && (n.selected = !0)
    }
}
function ar(e, n) {
    if (n.dangerouslySetInnerHTML != null)
        throw Error(h(91));
    return U({}, n, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function la(e, n) {
    var t = n.value;
    if (t == null) {
        if (t = n.children,
        n = n.defaultValue,
        t != null) {
            if (n != null)
                throw Error(h(92));
            if (Et(t)) {
                if (1 < t.length)
                    throw Error(h(93));
                t = t[0]
            }
            n = t
        }
        n == null && (n = ""),
        t = n
    }
    e._wrapperState = {
        initialValue: dn(t)
    }
}
function hi(e, n) {
    var t = dn(n.value)
      , l = dn(n.defaultValue);
    t != null && (t = "" + t,
    t !== e.value && (e.value = t),
    n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)),
    l != null && (e.defaultValue = "" + l)
}
function ua(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n)
}
function gi(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function ir(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? gi(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var sl, yi = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, l, u) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(n, t, l, u)
        })
    }
    : e
}(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = n;
    else {
        for (sl = sl || document.createElement("div"),
        sl.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>",
        n = sl.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; n.firstChild; )
            e.appendChild(n.firstChild)
    }
});
function It(e, n) {
    if (n) {
        var t = e.firstChild;
        if (t && t === e.lastChild && t.nodeType === 3) {
            t.nodeValue = n;
            return
        }
    }
    e.textContent = n
}
var St = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , Bs = ["Webkit", "ms", "Moz", "O"];
Object.keys(St).forEach(function(e) {
    Bs.forEach(function(n) {
        n = n + e.charAt(0).toUpperCase() + e.substring(1),
        St[n] = St[e]
    })
});
function bi(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || St.hasOwnProperty(e) && St[e] ? ("" + n).trim() : n + "px"
}
function vi(e, n) {
    e = e.style;
    for (var t in n)
        if (n.hasOwnProperty(t)) {
            var l = t.indexOf("--") === 0
              , u = bi(t, n[t], l);
            t === "float" && (t = "cssFloat"),
            l ? e.setProperty(t, u) : e[t] = u
        }
}
var As = U({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function cr(e, n) {
    if (n) {
        if (As[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
            throw Error(h(137, e));
        if (n.dangerouslySetInnerHTML != null) {
            if (n.children != null)
                throw Error(h(60));
            if (typeof n.dangerouslySetInnerHTML != "object" || !("__html"in n.dangerouslySetInnerHTML))
                throw Error(h(61))
        }
        if (n.style != null && typeof n.style != "object")
            throw Error(h(62))
    }
}
function sr(e, n) {
    if (e.indexOf("-") === -1)
        return typeof n.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var fr = null;
function Yr(e) {
    return e = e.target || e.srcElement || F,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var dr = null
  , Kn = null
  , Yn = null;
function ra(e) {
    if (e = Jt(e)) {
        if (typeof dr != "function")
            throw Error(h(280));
        var n = e.stateNode;
        n && (n = du(n),
        dr(e.stateNode, e.type, n))
    }
}
function ki(e) {
    Kn ? Yn ? Yn.push(e) : Yn = [e] : Kn = e
}
function wi() {
    if (Kn) {
        var e = Kn
          , n = Yn;
        if (Yn = Kn = null,
        ra(e),
        n)
            for (e = 0; e < n.length; e++)
                ra(n[e])
    }
}
function Ei(e, n) {
    return e(n)
}
function _i() {}
var Iu = !1;
function Pi(e, n, t) {
    if (Iu)
        return e(n, t);
    Iu = !0;
    try {
        return Ei(e, n, t)
    } finally {
        Iu = !1,
        (Kn !== null || Yn !== null) && (_i(),
        wi())
    }
}
function zt(e, n) {
    var t = e.stateNode;
    if (t === null)
        return null;
    var l = du(t);
    if (l === null)
        return null;
    t = l[n];
    e: switch (n) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (l = !l.disabled) || (e = e.type,
        l = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !l;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (t && typeof t != "function")
        throw Error(h(231, n, typeof t));
    return t
}
var pr = !1;
if (je)
    try {
        Mn = {},
        Object.defineProperty(Mn, "passive", {
            get: function() {
                pr = !0
            }
        }),
        F.addEventListener("test", Mn, Mn),
        F.removeEventListener("test", Mn, Mn)
    } catch {
        pr = !1
    }
var Mn;
function Vs(e, n, t, l, u, r, o, a, i) {
    var f = Array.prototype.slice.call(arguments, 3);
    try {
        n.apply(t, f)
    } catch (m) {
        this.onError(m)
    }
}
var Tt = !1
  , Nl = null
  , Bl = !1
  , mr = null
  , Ws = {
    onError: function(e) {
        Tt = !0,
        Nl = e
    }
};
function Qs(e, n, t, l, u, r, o, a, i) {
    Tt = !1,
    Nl = null,
    Vs.apply(Ws, arguments)
}
function Hs(e, n, t, l, u, r, o, a, i) {
    if (Qs.apply(this, arguments),
    Tt) {
        if (!Tt)
            throw Error(h(198));
        var f = Nl;
        Tt = !1,
        Nl = null,
        Bl || (Bl = !0,
        mr = f)
    }
}
function Rn(e) {
    var n = e
      , t = e;
    if (e.alternate)
        for (; n.return; )
            n = n.return;
    else {
        e = n;
        do
            n = e,
            (4098 & n.flags) !== 0 && (t = n.return),
            e = n.return;
        while (e)
    }
    return n.tag === 3 ? t : null
}
function Si(e) {
    if (e.tag === 13) {
        var n = e.memoizedState;
        if (n === null && (e = e.alternate,
        e !== null && (n = e.memoizedState)),
        n !== null)
            return n.dehydrated
    }
    return null
}
function oa(e) {
    if (Rn(e) !== e)
        throw Error(h(188))
}
function $s(e) {
    var n = e.alternate;
    if (!n) {
        if (n = Rn(e),
        n === null)
            throw Error(h(188));
        return n !== e ? null : e
    }
    for (var t = e, l = n; ; ) {
        var u = t.return;
        if (u === null)
            break;
        var r = u.alternate;
        if (r === null) {
            if (l = u.return,
            l !== null) {
                t = l;
                continue
            }
            break
        }
        if (u.child === r.child) {
            for (r = u.child; r; ) {
                if (r === t)
                    return oa(u),
                    e;
                if (r === l)
                    return oa(u),
                    n;
                r = r.sibling
            }
            throw Error(h(188))
        }
        if (t.return !== l.return)
            t = u,
            l = r;
        else {
            for (var o = !1, a = u.child; a; ) {
                if (a === t) {
                    o = !0,
                    t = u,
                    l = r;
                    break
                }
                if (a === l) {
                    o = !0,
                    l = u,
                    t = r;
                    break
                }
                a = a.sibling
            }
            if (!o) {
                for (a = r.child; a; ) {
                    if (a === t) {
                        o = !0,
                        t = r,
                        l = u;
                        break
                    }
                    if (a === l) {
                        o = !0,
                        l = r,
                        t = u;
                        break
                    }
                    a = a.sibling
                }
                if (!o)
                    throw Error(h(189))
            }
        }
        if (t.alternate !== l)
            throw Error(h(190))
    }
    if (t.tag !== 3)
        throw Error(h(188));
    return t.stateNode.current === t ? e : n
}
function Ti(e) {
    return e = $s(e),
    e !== null ? Fi(e) : null
}
function Fi(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var n = Fi(e);
        if (n !== null)
            return n;
        e = e.sibling
    }
    return null
}
var Li = pe.unstable_scheduleCallback
  , aa = pe.unstable_cancelCallback
  , js = pe.unstable_shouldYield
  , qs = pe.unstable_requestPaint
  , A = pe.unstable_now
  , Ks = pe.unstable_getCurrentPriorityLevel
  , Xr = pe.unstable_ImmediatePriority
  , Ci = pe.unstable_UserBlockingPriority
  , Al = pe.unstable_NormalPriority
  , Ys = pe.unstable_LowPriority
  , Di = pe.unstable_IdlePriority
  , iu = null
  , Ne = null;
function Xs(e) {
    if (Ne && typeof Ne.onCommitFiberRoot == "function")
        try {
            Ne.onCommitFiberRoot(iu, e, void 0, (128 & e.current.flags) === 128)
        } catch {}
}
var Re = Math.clz32 ? Math.clz32 : Js
  , Gs = Math.log
  , Zs = Math.LN2;
function Js(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (Gs(e) / Zs | 0) | 0
}
var fl = 64
  , dl = 4194304;
function _t(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return 4194240 & e;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return 130023424 & e;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function Vl(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
        return 0;
    var l = 0
      , u = e.suspendedLanes
      , r = e.pingedLanes
      , o = 268435455 & t;
    if (o !== 0) {
        var a = o & ~u;
        a !== 0 ? l = _t(a) : (r &= o,
        r !== 0 && (l = _t(r)))
    } else
        o = t & ~u,
        o !== 0 ? l = _t(o) : r !== 0 && (l = _t(r));
    if (l === 0)
        return 0;
    if (n !== 0 && n !== l && (n & u) === 0 && (u = l & -l,
    r = n & -n,
    u >= r || u === 16 && (4194240 & r) !== 0))
        return n;
    if ((4 & l) !== 0 && (l |= 16 & t),
    n = e.entangledLanes,
    n !== 0)
        for (e = e.entanglements,
        n &= l; 0 < n; )
            t = 31 - Re(n),
            u = 1 << t,
            l |= e[t],
            n &= ~u;
    return l
}
function ef(e, n) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return n + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return n + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function nf(e, n) {
    for (var t = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, r = e.pendingLanes; 0 < r; ) {
        var o = 31 - Re(r)
          , a = 1 << o
          , i = u[o];
        i === -1 ? (a & t) !== 0 && (a & l) === 0 || (u[o] = ef(a, n)) : i <= n && (e.expiredLanes |= a),
        r &= ~a
    }
}
function hr(e) {
    return e = -1073741825 & e.pendingLanes,
    e !== 0 ? e : 1073741824 & e ? 1073741824 : 0
}
function Oi() {
    var e = fl;
    return fl <<= 1,
    (4194240 & fl) === 0 && (fl = 64),
    e
}
function zu(e) {
    for (var n = [], t = 0; 31 > t; t++)
        n.push(e);
    return n
}
function Gt(e, n, t) {
    e.pendingLanes |= n,
    n !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    n = 31 - Re(n),
    e[n] = t
}
function tf(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= n,
    e.mutableReadLanes &= n,
    e.entangledLanes &= n,
    n = e.entanglements;
    var l = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
        var u = 31 - Re(t)
          , r = 1 << u;
        n[u] = 0,
        l[u] = -1,
        e[u] = -1,
        t &= ~r
    }
}
function Gr(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
        var l = 31 - Re(t)
          , u = 1 << l;
        u & n | e[l] & n && (e[l] |= n),
        t &= ~u
    }
}
var D = 0;
function Ri(e) {
    return e &= -e,
    1 < e ? 4 < e ? (268435455 & e) !== 0 ? 16 : 536870912 : 4 : 1
}
var Mi, Zr, xi, Ii, zi, gr = !1, pl = [], rn = null, on = null, an = null, Ut = new Map, Nt = new Map, nn = [], lf = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function ia(e, n) {
    switch (e) {
    case "focusin":
    case "focusout":
        rn = null;
        break;
    case "dragenter":
    case "dragleave":
        on = null;
        break;
    case "mouseover":
    case "mouseout":
        an = null;
        break;
    case "pointerover":
    case "pointerout":
        Ut.delete(n.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        Nt.delete(n.pointerId)
    }
}
function pt(e, n, t, l, u, r) {
    return e === null || e.nativeEvent !== r ? (e = {
        blockedOn: n,
        domEventName: t,
        eventSystemFlags: l,
        nativeEvent: r,
        targetContainers: [u]
    },
    n !== null && (n = Jt(n),
    n !== null && Zr(n)),
    e) : (e.eventSystemFlags |= l,
    n = e.targetContainers,
    u !== null && n.indexOf(u) === -1 && n.push(u),
    e)
}
function uf(e, n, t, l, u) {
    switch (n) {
    case "focusin":
        return rn = pt(rn, e, n, t, l, u),
        !0;
    case "dragenter":
        return on = pt(on, e, n, t, l, u),
        !0;
    case "mouseover":
        return an = pt(an, e, n, t, l, u),
        !0;
    case "pointerover":
        var r = u.pointerId;
        return Ut.set(r, pt(Ut.get(r) || null, e, n, t, l, u)),
        !0;
    case "gotpointercapture":
        return r = u.pointerId,
        Nt.set(r, pt(Nt.get(r) || null, e, n, t, l, u)),
        !0
    }
    return !1
}
function Ui(e) {
    var n = En(e.target);
    if (n !== null) {
        var t = Rn(n);
        if (t !== null) {
            if (n = t.tag,
            n === 13) {
                if (n = Si(t),
                n !== null) {
                    e.blockedOn = n,
                    zi(e.priority, function() {
                        xi(t)
                    });
                    return
                }
            } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ll(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
        var t = yr(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
        if (t !== null)
            return n = Jt(t),
            n !== null && Zr(n),
            e.blockedOn = t,
            !1;
        t = e.nativeEvent;
        var l = new t.constructor(t.type,t);
        fr = l,
        t.target.dispatchEvent(l),
        fr = null,
        n.shift()
    }
    return !0
}
function ca(e, n, t) {
    Ll(e) && t.delete(n)
}
function rf() {
    gr = !1,
    rn !== null && Ll(rn) && (rn = null),
    on !== null && Ll(on) && (on = null),
    an !== null && Ll(an) && (an = null),
    Ut.forEach(ca),
    Nt.forEach(ca)
}
function mt(e, n) {
    e.blockedOn === n && (e.blockedOn = null,
    gr || (gr = !0,
    pe.unstable_scheduleCallback(pe.unstable_NormalPriority, rf)))
}
function Bt(e) {
    function n(u) {
        return mt(u, e)
    }
    if (0 < pl.length) {
        mt(pl[0], e);
        for (var t = 1; t < pl.length; t++) {
            var l = pl[t];
            l.blockedOn === e && (l.blockedOn = null)
        }
    }
    for (rn !== null && mt(rn, e),
    on !== null && mt(on, e),
    an !== null && mt(an, e),
    Ut.forEach(n),
    Nt.forEach(n),
    t = 0; t < nn.length; t++)
        l = nn[t],
        l.blockedOn === e && (l.blockedOn = null);
    for (; 0 < nn.length && (t = nn[0],
    t.blockedOn === null); )
        Ui(t),
        t.blockedOn === null && nn.shift()
}
var Xn = Ye.ReactCurrentBatchConfig
  , Wl = !0;
function of(e, n, t, l) {
    var u = D
      , r = Xn.transition;
    Xn.transition = null;
    try {
        D = 1,
        Jr(e, n, t, l)
    } finally {
        D = u,
        Xn.transition = r
    }
}
function af(e, n, t, l) {
    var u = D
      , r = Xn.transition;
    Xn.transition = null;
    try {
        D = 4,
        Jr(e, n, t, l)
    } finally {
        D = u,
        Xn.transition = r
    }
}
function Jr(e, n, t, l) {
    if (Wl) {
        var u = yr(e, n, t, l);
        if (u === null)
            Qu(e, n, l, Ql, t),
            ia(e, l);
        else if (uf(u, e, n, t, l))
            l.stopPropagation();
        else if (ia(e, l),
        4 & n && -1 < lf.indexOf(e)) {
            for (; u !== null; ) {
                var r = Jt(u);
                if (r !== null && Mi(r),
                r = yr(e, n, t, l),
                r === null && Qu(e, n, l, Ql, t),
                r === u)
                    break;
                u = r
            }
            u !== null && l.stopPropagation()
        } else
            Qu(e, n, l, null, t)
    }
}
var Ql = null;
function yr(e, n, t, l) {
    if (Ql = null,
    e = Yr(l),
    e = En(e),
    e !== null)
        if (n = Rn(e),
        n === null)
            e = null;
        else if (t = n.tag,
        t === 13) {
            if (e = Si(n),
            e !== null)
                return e;
            e = null
        } else if (t === 3) {
            if (n.stateNode.current.memoizedState.isDehydrated)
                return n.tag === 3 ? n.stateNode.containerInfo : null;
            e = null
        } else
            n !== e && (e = null);
    return Ql = e,
    null
}
function Ni(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (Ks()) {
        case Xr:
            return 1;
        case Ci:
            return 4;
        case Al:
        case Ys:
            return 16;
        case Di:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ln = null
  , eo = null
  , Cl = null;
function Bi() {
    if (Cl)
        return Cl;
    var e, n, t = eo, l = t.length, u = "value"in ln ? ln.value : ln.textContent, r = u.length;
    for (e = 0; e < l && t[e] === u[e]; e++)
        ;
    var o = l - e;
    for (n = 1; n <= o && t[l - n] === u[r - n]; n++)
        ;
    return Cl = u.slice(e, 1 < n ? 1 - n : void 0)
}
function Dl(e) {
    var n = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && n === 13 && (e = 13)) : e = n,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function ml() {
    return !0
}
function sa() {
    return !1
}
function he(e) {
    function n(t, l, u, r, o) {
        this._reactName = t,
        this._targetInst = u,
        this.type = l,
        this.nativeEvent = r,
        this.target = o,
        this.currentTarget = null;
        for (var a in e)
            e.hasOwnProperty(a) && (t = e[a],
            this[a] = t ? t(r) : r[a]);
        return this.isDefaultPrevented = (r.defaultPrevented != null ? r.defaultPrevented : r.returnValue === !1) ? ml : sa,
        this.isPropagationStopped = sa,
        this
    }
    return U(n.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var t = this.nativeEvent;
            t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1),
            this.isDefaultPrevented = ml)
        },
        stopPropagation: function() {
            var t = this.nativeEvent;
            t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0),
            this.isPropagationStopped = ml)
        },
        persist: function() {},
        isPersistent: ml
    }),
    n
}
var Uu, Nu, ht, rt = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, no = he(rt), Zt = U({}, rt, {
    view: 0,
    detail: 0
}), cf = he(Zt), cu = U({}, Zt, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: to,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== ht && (ht && e.type === "mousemove" ? (Uu = e.screenX - ht.screenX,
        Nu = e.screenY - ht.screenY) : Nu = Uu = 0,
        ht = e),
        Uu)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : Nu
    }
}), fa = he(cu), sf = U({}, cu, {
    dataTransfer: 0
}), ff = he(sf), df = U({}, Zt, {
    relatedTarget: 0
}), Bu = he(df), pf = U({}, rt, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), mf = he(pf), hf = U({}, rt, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : F.clipboardData
    }
}), gf = he(hf), yf = U({}, rt, {
    data: 0
}), da = he(yf), bf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, vf = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, kf = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function wf(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : !!(e = kf[e]) && !!n[e]
}
function to() {
    return wf
}
var Ef = U({}, Zt, {
    key: function(e) {
        if (e.key) {
            var n = bf[e.key] || e.key;
            if (n !== "Unidentified")
                return n
        }
        return e.type === "keypress" ? (e = Dl(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? vf[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: to,
    charCode: function(e) {
        return e.type === "keypress" ? Dl(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? Dl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , _f = he(Ef)
  , Pf = U({}, cu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , pa = he(Pf)
  , Sf = U({}, Zt, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: to
})
  , Tf = he(Sf)
  , Ff = U({}, rt, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Lf = he(Ff)
  , Cf = U({}, cu, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Df = he(Cf)
  , Of = [9, 13, 27, 32]
  , lo = je && "CompositionEvent"in F
  , Ft = null;
je && "documentMode"in document && (Ft = document.documentMode);
var Rf = je && "TextEvent"in F && !Ft
  , Ai = je && (!lo || Ft && 8 < Ft && 11 >= Ft)
  , ma = String.fromCharCode(32)
  , ha = !1;
function Vi(e, n) {
    switch (e) {
    case "keyup":
        return Of.indexOf(n.keyCode) !== -1;
    case "keydown":
        return n.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Wi(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var Un = !1;
function Mf(e, n) {
    switch (e) {
    case "compositionend":
        return Wi(n);
    case "keypress":
        return n.which !== 32 ? null : (ha = !0,
        ma);
    case "textInput":
        return e = n.data,
        e === ma && ha ? null : e;
    default:
        return null
    }
}
function xf(e, n) {
    if (Un)
        return e === "compositionend" || !lo && Vi(e, n) ? (e = Bi(),
        Cl = eo = ln = null,
        Un = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
            if (n.char && 1 < n.char.length)
                return n.char;
            if (n.which)
                return String.fromCharCode(n.which)
        }
        return null;
    case "compositionend":
        return Ai && n.locale !== "ko" ? null : n.data;
    default:
        return null
    }
}
var If = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function ga(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!If[e.type] : n === "textarea"
}
function Qi(e, n, t, l) {
    ki(l),
    n = Hl(n, "onChange"),
    0 < n.length && (t = new no("onChange","change",null,t,l),
    e.push({
        event: t,
        listeners: n
    }))
}
var Lt = null
  , At = null;
function zf(e) {
    ec(e, 0)
}
function su(e) {
    var n = An(e);
    if (pi(n))
        return e
}
function Uf(e, n) {
    if (e === "change")
        return n
}
var Hi = !1;
je && (je ? (gl = "oninput"in document,
gl || (Au = document.createElement("div"),
Au.setAttribute("oninput", "return;"),
gl = typeof Au.oninput == "function"),
hl = gl) : hl = !1,
Hi = hl && (!document.documentMode || 9 < document.documentMode));
var hl, gl, Au;
function ya() {
    Lt && (Lt.detachEvent("onpropertychange", $i),
    At = Lt = null)
}
function $i(e) {
    if (e.propertyName === "value" && su(At)) {
        var n = [];
        Qi(n, At, e, Yr(e)),
        Pi(zf, n)
    }
}
function Nf(e, n, t) {
    e === "focusin" ? (ya(),
    Lt = n,
    At = t,
    Lt.attachEvent("onpropertychange", $i)) : e === "focusout" && ya()
}
function Bf(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return su(At)
}
function Af(e, n) {
    if (e === "click")
        return su(n)
}
function Vf(e, n) {
    if (e === "input" || e === "change")
        return su(n)
}
function Wf(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n
}
var Me = typeof Object.is == "function" ? Object.is : Wf;
function Vt(e, n) {
    if (Me(e, n))
        return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
        return !1;
    var t = Object.keys(e)
      , l = Object.keys(n);
    if (t.length !== l.length)
        return !1;
    for (l = 0; l < t.length; l++) {
        var u = t[l];
        if (!Ju.call(n, u) || !Me(e[u], n[u]))
            return !1
    }
    return !0
}
function ba(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function va(e, n) {
    var t = ba(e);
    e = 0;
    for (var l; t; ) {
        if (t.nodeType === 3) {
            if (l = e + t.textContent.length,
            e <= n && l >= n)
                return {
                    node: t,
                    offset: n - e
                };
            e = l
        }
        e: {
            for (; t; ) {
                if (t.nextSibling) {
                    t = t.nextSibling;
                    break e
                }
                t = t.parentNode
            }
            t = void 0
        }
        t = ba(t)
    }
}
function ji(e, n) {
    return !(!e || !n) && (e === n || (!e || e.nodeType !== 3) && (n && n.nodeType === 3 ? ji(e, n.parentNode) : "contains"in e ? e.contains(n) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(n))))
}
function qi() {
    for (var e = F, n = Ul(); n instanceof e.HTMLIFrameElement; ) {
        try {
            var t = typeof n.contentWindow.location.href == "string"
        } catch {
            t = !1
        }
        if (!t)
            break;
        e = n.contentWindow,
        n = Ul(e.document)
    }
    return n
}
function uo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true")
}
function Qf(e) {
    var n = qi()
      , t = e.focusedElem
      , l = e.selectionRange;
    if (n !== t && t && t.ownerDocument && ji(t.ownerDocument.documentElement, t)) {
        if (l !== null && uo(t)) {
            if (n = l.start,
            e = l.end,
            e === void 0 && (e = n),
            "selectionStart"in t)
                t.selectionStart = n,
                t.selectionEnd = Math.min(e, t.value.length);
            else if (e = (n = t.ownerDocument || document) && n.defaultView || F,
            e.getSelection) {
                e = e.getSelection();
                var u = t.textContent.length
                  , r = Math.min(l.start, u);
                l = l.end === void 0 ? r : Math.min(l.end, u),
                !e.extend && r > l && (u = l,
                l = r,
                r = u),
                u = va(t, r);
                var o = va(t, l);
                u && o && (e.rangeCount !== 1 || e.anchorNode !== u.node || e.anchorOffset !== u.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (n = n.createRange(),
                n.setStart(u.node, u.offset),
                e.removeAllRanges(),
                r > l ? (e.addRange(n),
                e.extend(o.node, o.offset)) : (n.setEnd(o.node, o.offset),
                e.addRange(n)))
            }
        }
        for (n = [],
        e = t; e = e.parentNode; )
            e.nodeType === 1 && n.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof t.focus == "function" && t.focus(),
        t = 0; t < n.length; t++)
            e = n[t],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var Hf = je && "documentMode"in document && 11 >= document.documentMode
  , Nn = null
  , br = null
  , Ct = null
  , vr = !1;
function ka(e, n, t) {
    var l = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    vr || Nn == null || Nn !== Ul(l) || (l = Nn,
    "selectionStart"in l && uo(l) ? l = {
        start: l.selectionStart,
        end: l.selectionEnd
    } : (l = (l.ownerDocument && l.ownerDocument.defaultView || F).getSelection(),
    l = {
        anchorNode: l.anchorNode,
        anchorOffset: l.anchorOffset,
        focusNode: l.focusNode,
        focusOffset: l.focusOffset
    }),
    Ct && Vt(Ct, l) || (Ct = l,
    l = Hl(br, "onSelect"),
    0 < l.length && (n = new no("onSelect","select",null,n,t),
    e.push({
        event: n,
        listeners: l
    }),
    n.target = Nn)))
}
function yl(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(),
    t["Webkit" + e] = "webkit" + n,
    t["Moz" + e] = "moz" + n,
    t
}
var Bn = {
    animationend: yl("Animation", "AnimationEnd"),
    animationiteration: yl("Animation", "AnimationIteration"),
    animationstart: yl("Animation", "AnimationStart"),
    transitionend: yl("Transition", "TransitionEnd")
}
  , Vu = {}
  , Ki = {};
je && (Ki = document.createElement("div").style,
"AnimationEvent"in F || (delete Bn.animationend.animation,
delete Bn.animationiteration.animation,
delete Bn.animationstart.animation),
"TransitionEvent"in F || delete Bn.transitionend.transition);
function fu(e) {
    if (Vu[e])
        return Vu[e];
    if (!Bn[e])
        return e;
    var n, t = Bn[e];
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ki)
            return Vu[e] = t[n];
    return e
}
var Yi = fu("animationend")
  , Xi = fu("animationiteration")
  , Gi = fu("animationstart")
  , Zi = fu("transitionend")
  , Ji = new Map
  , wa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function hn(e, n) {
    Ji.set(e, n),
    On(n, [e])
}
for (bl = 0; bl < wa.length; bl++)
    vl = wa[bl],
    Ea = vl.toLowerCase(),
    _a = vl[0].toUpperCase() + vl.slice(1),
    hn(Ea, "on" + _a);
var vl, Ea, _a, bl;
hn(Yi, "onAnimationEnd");
hn(Xi, "onAnimationIteration");
hn(Gi, "onAnimationStart");
hn("dblclick", "onDoubleClick");
hn("focusin", "onFocus");
hn("focusout", "onBlur");
hn(Zi, "onTransitionEnd");
Jn("onMouseEnter", ["mouseout", "mouseover"]);
Jn("onMouseLeave", ["mouseout", "mouseover"]);
Jn("onPointerEnter", ["pointerout", "pointerover"]);
Jn("onPointerLeave", ["pointerout", "pointerover"]);
On("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
On("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
On("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
On("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
On("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Pt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , $f = new Set("cancel close invalid load scroll toggle".split(" ").concat(Pt));
function Pa(e, n, t) {
    var l = e.type || "unknown-event";
    e.currentTarget = t,
    Hs(l, n, void 0, e),
    e.currentTarget = null
}
function ec(e, n) {
    n = (4 & n) !== 0;
    for (var t = 0; t < e.length; t++) {
        var l = e[t]
          , u = l.event;
        l = l.listeners;
        e: {
            var r = void 0;
            if (n)
                for (var o = l.length - 1; 0 <= o; o--) {
                    var a = l[o]
                      , i = a.instance
                      , f = a.currentTarget;
                    if (a = a.listener,
                    i !== r && u.isPropagationStopped())
                        break e;
                    Pa(u, a, f),
                    r = i
                }
            else
                for (o = 0; o < l.length; o++) {
                    if (a = l[o],
                    i = a.instance,
                    f = a.currentTarget,
                    a = a.listener,
                    i !== r && u.isPropagationStopped())
                        break e;
                    Pa(u, a, f),
                    r = i
                }
        }
    }
    if (Bl)
        throw e = mr,
        Bl = !1,
        mr = null,
        e
}
function R(e, n) {
    var t = n[Pr];
    t === void 0 && (t = n[Pr] = new Set);
    var l = e + "__bubble";
    t.has(l) || (nc(n, e, 2, !1),
    t.add(l))
}
function Wu(e, n, t) {
    var l = 0;
    n && (l |= 4),
    nc(t, e, l, n)
}
var kl = "_reactListening" + Math.random().toString(36).slice(2);
function Wt(e) {
    if (!e[kl]) {
        e[kl] = !0,
        ii.forEach(function(t) {
            t !== "selectionchange" && ($f.has(t) || Wu(t, !1, e),
            Wu(t, !0, e))
        });
        var n = e.nodeType === 9 ? e : e.ownerDocument;
        n === null || n[kl] || (n[kl] = !0,
        Wu("selectionchange", !1, n))
    }
}
function nc(e, n, t, l) {
    switch (Ni(n)) {
    case 1:
        var u = of;
        break;
    case 4:
        u = af;
        break;
    default:
        u = Jr
    }
    t = u.bind(null, n, t, e),
    u = void 0,
    !pr || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0),
    l ? u !== void 0 ? e.addEventListener(n, t, {
        capture: !0,
        passive: u
    }) : e.addEventListener(n, t, !0) : u !== void 0 ? e.addEventListener(n, t, {
        passive: u
    }) : e.addEventListener(n, t, !1)
}
function Qu(e, n, t, l, u) {
    var r = l;
    if ((1 & n) === 0 && (2 & n) === 0 && l !== null)
        e: for (; ; ) {
            if (l === null)
                return;
            var o = l.tag;
            if (o === 3 || o === 4) {
                var a = l.stateNode.containerInfo;
                if (a === u || a.nodeType === 8 && a.parentNode === u)
                    break;
                if (o === 4)
                    for (o = l.return; o !== null; ) {
                        var i = o.tag;
                        if ((i === 3 || i === 4) && (i = o.stateNode.containerInfo,
                        i === u || i.nodeType === 8 && i.parentNode === u))
                            return;
                        o = o.return
                    }
                for (; a !== null; ) {
                    if (o = En(a),
                    o === null)
                        return;
                    if (i = o.tag,
                    i === 5 || i === 6) {
                        l = r = o;
                        continue e
                    }
                    a = a.parentNode
                }
            }
            l = l.return
        }
    Pi(function() {
        var f = r
          , m = Yr(t)
          , b = [];
        e: {
            var p = Ji.get(e);
            if (p !== void 0) {
                var v = no
                  , y = e;
                switch (e) {
                case "keypress":
                    if (Dl(t) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    v = _f;
                    break;
                case "focusin":
                    y = "focus",
                    v = Bu;
                    break;
                case "focusout":
                    y = "blur",
                    v = Bu;
                    break;
                case "beforeblur":
                case "afterblur":
                    v = Bu;
                    break;
                case "click":
                    if (t.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    v = fa;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    v = ff;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    v = Tf;
                    break;
                case Yi:
                case Xi:
                case Gi:
                    v = mf;
                    break;
                case Zi:
                    v = Lf;
                    break;
                case "scroll":
                    v = cf;
                    break;
                case "wheel":
                    v = Df;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    v = gf;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    v = pa
                }
                var T = (4 & n) !== 0
                  , B = !T && e === "scroll"
                  , s = T ? p !== null ? p + "Capture" : null : p;
                T = [];
                for (var c, d = f; d !== null; ) {
                    c = d;
                    var g = c.stateNode;
                    if (c.tag === 5 && g !== null && (c = g,
                    s !== null && (g = zt(d, s),
                    g != null && T.push(Qt(d, g, c)))),
                    B)
                        break;
                    d = d.return
                }
                0 < T.length && (p = new v(p,y,null,t,m),
                b.push({
                    event: p,
                    listeners: T
                }))
            }
        }
        if ((7 & n) === 0) {
            if (p = e === "mouseover" || e === "pointerover",
            v = e === "mouseout" || e === "pointerout",
            (!p || t === fr || !(y = t.relatedTarget || t.fromElement) || !En(y) && !y[qe]) && (v || p) && (p = m.window === m ? m : (p = m.ownerDocument) ? p.defaultView || p.parentWindow : F,
            v ? (y = t.relatedTarget || t.toElement,
            v = f,
            y = y ? En(y) : null,
            y !== null && (B = Rn(y),
            y !== B || y.tag !== 5 && y.tag !== 6) && (y = null)) : (v = null,
            y = f),
            v !== y)) {
                if (T = fa,
                g = "onMouseLeave",
                s = "onMouseEnter",
                d = "mouse",
                e !== "pointerout" && e !== "pointerover" || (T = pa,
                g = "onPointerLeave",
                s = "onPointerEnter",
                d = "pointer"),
                B = v == null ? p : An(v),
                c = y == null ? p : An(y),
                p = new T(g,d + "leave",v,t,m),
                p.target = B,
                p.relatedTarget = c,
                g = null,
                En(m) === f && (T = new T(s,d + "enter",y,t,m),
                T.target = c,
                T.relatedTarget = B,
                g = T),
                B = g,
                v && y)
                    e: {
                        for (T = v,
                        s = y,
                        d = 0,
                        c = T; c; c = xn(c))
                            d++;
                        for (c = 0,
                        g = s; g; g = xn(g))
                            c++;
                        for (; 0 < d - c; )
                            T = xn(T),
                            d--;
                        for (; 0 < c - d; )
                            s = xn(s),
                            c--;
                        for (; d--; ) {
                            if (T === s || s !== null && T === s.alternate)
                                break e;
                            T = xn(T),
                            s = xn(s)
                        }
                        T = null
                    }
                else
                    T = null;
                v !== null && Sa(b, p, v, T, !1),
                y !== null && B !== null && Sa(b, B, y, T, !0)
            }
            if (p = f ? An(f) : F,
            v = p.nodeName && p.nodeName.toLowerCase(),
            v === "select" || v === "input" && p.type === "file")
                var E = Uf;
            else if (ga(p))
                if (Hi)
                    E = Vf;
                else {
                    E = Bf;
                    var _ = Nf
                }
            else
                (v = p.nodeName) && v.toLowerCase() === "input" && (p.type === "checkbox" || p.type === "radio") && (E = Af);
            switch (E && (E = E(e, f)) ? Qi(b, E, t, m) : (_ && _(e, p, f),
            e === "focusout" && (_ = p._wrapperState) && _.controlled && p.type === "number" && or(p, "number", p.value)),
            _ = f ? An(f) : F,
            e) {
            case "focusin":
                (ga(_) || _.contentEditable === "true") && (Nn = _,
                br = f,
                Ct = null);
                break;
            case "focusout":
                Ct = br = Nn = null;
                break;
            case "mousedown":
                vr = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                vr = !1,
                ka(b, t, m);
                break;
            case "selectionchange":
                if (Hf)
                    break;
            case "keydown":
            case "keyup":
                ka(b, t, m)
            }
            var P;
            if (lo)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var S = "onCompositionStart";
                        break e;
                    case "compositionend":
                        S = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        S = "onCompositionUpdate";
                        break e
                    }
                    S = void 0
                }
            else
                Un ? Vi(e, t) && (S = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (S = "onCompositionStart");
            S && (Ai && t.locale !== "ko" && (Un || S !== "onCompositionStart" ? S === "onCompositionEnd" && Un && (P = Bi()) : (ln = m,
            eo = "value"in ln ? ln.value : ln.textContent,
            Un = !0)),
            _ = Hl(f, S),
            0 < _.length && (S = new da(S,e,null,t,m),
            b.push({
                event: S,
                listeners: _
            }),
            P ? S.data = P : (P = Wi(t),
            P !== null && (S.data = P)))),
            (P = Rf ? Mf(e, t) : xf(e, t)) && (f = Hl(f, "onBeforeInput"),
            0 < f.length && (m = new da("onBeforeInput","beforeinput",null,t,m),
            b.push({
                event: m,
                listeners: f
            }),
            m.data = P))
        }
        ec(b, n)
    })
}
function Qt(e, n, t) {
    return {
        instance: e,
        listener: n,
        currentTarget: t
    }
}
function Hl(e, n) {
    for (var t = n + "Capture", l = []; e !== null; ) {
        var u = e
          , r = u.stateNode;
        u.tag === 5 && r !== null && (u = r,
        r = zt(e, t),
        r != null && l.unshift(Qt(e, r, u)),
        r = zt(e, n),
        r != null && l.push(Qt(e, r, u))),
        e = e.return
    }
    return l
}
function xn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Sa(e, n, t, l, u) {
    for (var r = n._reactName, o = []; t !== null && t !== l; ) {
        var a = t
          , i = a.alternate
          , f = a.stateNode;
        if (i !== null && i === l)
            break;
        a.tag === 5 && f !== null && (a = f,
        u ? (i = zt(t, r),
        i != null && o.unshift(Qt(t, i, a))) : u || (i = zt(t, r),
        i != null && o.push(Qt(t, i, a)))),
        t = t.return
    }
    o.length !== 0 && e.push({
        event: n,
        listeners: o
    })
}
var jf = /\r\n?/g
  , qf = /\u0000|\uFFFD/g;
function Ta(e) {
    return (typeof e == "string" ? e : "" + e).replace(jf, `
`).replace(qf, "")
}
function wl(e, n, t) {
    if (n = Ta(n),
    Ta(e) !== n && t)
        throw Error(h(425))
}
function $l() {}
var kr = null
  , wr = null;
function Er(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
}
var _r = typeof setTimeout == "function" ? setTimeout : void 0
  , Kf = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Fa = typeof Promise == "function" ? Promise : void 0
  , Yf = typeof queueMicrotask == "function" ? queueMicrotask : typeof Fa < "u" ? function(e) {
    return Fa.resolve(null).then(e).catch(Xf)
}
: _r;
function Xf(e) {
    setTimeout(function() {
        throw e
    })
}
function Hu(e, n) {
    var t = n
      , l = 0;
    do {
        var u = t.nextSibling;
        if (e.removeChild(t),
        u && u.nodeType === 8)
            if (t = u.data,
            t === "/$") {
                if (l === 0) {
                    e.removeChild(u),
                    Bt(n);
                    return
                }
                l--
            } else
                t !== "$" && t !== "$?" && t !== "$!" || l++;
        t = u
    } while (t);
    Bt(n)
}
function We(e) {
    for (; e != null; e = e.nextSibling) {
        var n = e.nodeType;
        if (n === 1 || n === 3)
            break;
        if (n === 8) {
            if (n = e.data,
            n === "$" || n === "$!" || n === "$?")
                break;
            if (n === "/$")
                return null
        }
    }
    return e
}
function La(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
        if (e.nodeType === 8) {
            var t = e.data;
            if (t === "$" || t === "$!" || t === "$?") {
                if (n === 0)
                    return e;
                n--
            } else
                t === "/$" && n++
        }
        e = e.previousSibling
    }
    return null
}
var ot = Math.random().toString(36).slice(2)
  , Ue = "__reactFiber$" + ot
  , Ht = "__reactProps$" + ot
  , qe = "__reactContainer$" + ot
  , Pr = "__reactEvents$" + ot
  , Gf = "__reactListeners$" + ot
  , Zf = "__reactHandles$" + ot;
function En(e) {
    var n = e[Ue];
    if (n)
        return n;
    for (var t = e.parentNode; t; ) {
        if (n = t[qe] || t[Ue]) {
            if (t = n.alternate,
            n.child !== null || t !== null && t.child !== null)
                for (e = La(e); e !== null; ) {
                    if (t = e[Ue])
                        return t;
                    e = La(e)
                }
            return n
        }
        e = t,
        t = e.parentNode
    }
    return null
}
function Jt(e) {
    return e = e[Ue] || e[qe],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function An(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(h(33))
}
function du(e) {
    return e[Ht] || null
}
var Sr = []
  , Vn = -1;
function gn(e) {
    return {
        current: e
    }
}
function M(e) {
    0 > Vn || (e.current = Sr[Vn],
    Sr[Vn] = null,
    Vn--)
}
function O(e, n) {
    Vn++,
    Sr[Vn] = e.current,
    e.current = n
}
var pn = {}
  , ne = gn(pn)
  , ie = gn(!1)
  , Tn = pn;
function et(e, n) {
    var t = e.type.contextTypes;
    if (!t)
        return pn;
    var l = e.stateNode;
    if (l && l.__reactInternalMemoizedUnmaskedChildContext === n)
        return l.__reactInternalMemoizedMaskedChildContext;
    var u, r = {};
    for (u in t)
        r[u] = n[u];
    return l && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = n,
    e.__reactInternalMemoizedMaskedChildContext = r),
    r
}
function ce(e) {
    return e = e.childContextTypes,
    e != null
}
function jl() {
    M(ie),
    M(ne)
}
function Ca(e, n, t) {
    if (ne.current !== pn)
        throw Error(h(168));
    O(ne, n),
    O(ie, t)
}
function tc(e, n, t) {
    var l = e.stateNode;
    if (n = n.childContextTypes,
    typeof l.getChildContext != "function")
        return t;
    l = l.getChildContext();
    for (var u in l)
        if (!(u in n))
            throw Error(h(108, Us(e) || "Unknown", u));
    return U({}, t, l)
}
function ql(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || pn,
    Tn = ne.current,
    O(ne, e),
    O(ie, ie.current),
    !0
}
function Da(e, n, t) {
    var l = e.stateNode;
    if (!l)
        throw Error(h(169));
    t ? (e = tc(e, n, Tn),
    l.__reactInternalMemoizedMergedChildContext = e,
    M(ie),
    M(ne),
    O(ne, e)) : M(ie),
    O(ie, t)
}
var Ve = null
  , pu = !1
  , $u = !1;
function lc(e) {
    Ve === null ? Ve = [e] : Ve.push(e)
}
function Jf(e) {
    pu = !0,
    lc(e)
}
function yn() {
    if (!$u && Ve !== null) {
        $u = !0;
        var e = 0
          , n = D;
        try {
            var t = Ve;
            for (D = 1; e < t.length; e++) {
                var l = t[e];
                do
                    l = l(!0);
                while (l !== null)
            }
            Ve = null,
            pu = !1
        } catch (u) {
            throw Ve !== null && (Ve = Ve.slice(e + 1)),
            Li(Xr, yn),
            u
        } finally {
            D = n,
            $u = !1
        }
    }
    return null
}
var ed = Ye.ReactCurrentBatchConfig;
function Le(e, n) {
    if (e && e.defaultProps) {
        n = U({}, n),
        e = e.defaultProps;
        for (var t in e)
            n[t] === void 0 && (n[t] = e[t]);
        return n
    }
    return n
}
var Kl = gn(null)
  , Yl = null
  , Wn = null
  , ro = null;
function oo() {
    ro = Wn = Yl = null
}
function ao(e) {
    var n = Kl.current;
    M(Kl),
    e._currentValue = n
}
function Tr(e, n, t) {
    for (; e !== null; ) {
        var l = e.alternate;
        if ((e.childLanes & n) !== n ? (e.childLanes |= n,
        l !== null && (l.childLanes |= n)) : l !== null && (l.childLanes & n) !== n && (l.childLanes |= n),
        e === t)
            break;
        e = e.return
    }
}
function Gn(e, n) {
    Yl = e,
    ro = Wn = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && ((e.lanes & n) !== 0 && (ae = !0),
    e.firstContext = null)
}
function Ee(e) {
    var n = e._currentValue;
    if (ro !== e)
        if (e = {
            context: e,
            memoizedValue: n,
            next: null
        },
        Wn === null) {
            if (Yl === null)
                throw Error(h(308));
            Wn = e,
            Yl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            Wn = Wn.next = e;
    return n
}
var Oe = null
  , en = !1;
function io(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function uc(e, n) {
    e = e.updateQueue,
    n.updateQueue === e && (n.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function $e(e, n) {
    return {
        eventTime: e,
        lane: n,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function cn(e, n) {
    var t = e.updateQueue;
    t !== null && (t = t.shared,
    Kc(e) ? (e = t.interleaved,
    e === null ? (n.next = n,
    Oe === null ? Oe = [t] : Oe.push(t)) : (n.next = e.next,
    e.next = n),
    t.interleaved = n) : (e = t.pending,
    e === null ? n.next = n : (n.next = e.next,
    e.next = n),
    t.pending = n))
}
function Ol(e, n, t) {
    if (n = n.updateQueue,
    n !== null && (n = n.shared,
    (4194240 & t) !== 0)) {
        var l = n.lanes;
        l &= e.pendingLanes,
        t |= l,
        n.lanes = t,
        Gr(e, t)
    }
}
function Oa(e, n) {
    var t = e.updateQueue
      , l = e.alternate;
    if (l === null || (l = l.updateQueue,
    t !== l))
        e = t.lastBaseUpdate,
        e === null ? t.firstBaseUpdate = n : e.next = n,
        t.lastBaseUpdate = n;
    else {
        var u = null
          , r = null;
        if (t = t.firstBaseUpdate,
        t !== null) {
            do {
                var o = {
                    eventTime: t.eventTime,
                    lane: t.lane,
                    tag: t.tag,
                    payload: t.payload,
                    callback: t.callback,
                    next: null
                };
                r === null ? u = r = o : r = r.next = o,
                t = t.next
            } while (t !== null);
            r === null ? u = r = n : r = r.next = n
        } else
            u = r = n;
        t = {
            baseState: l.baseState,
            firstBaseUpdate: u,
            lastBaseUpdate: r,
            shared: l.shared,
            effects: l.effects
        },
        e.updateQueue = t
    }
}
function Xl(e, n, t, l) {
    var u = e.updateQueue;
    en = !1;
    var r = u.firstBaseUpdate
      , o = u.lastBaseUpdate
      , a = u.shared.pending;
    if (a !== null) {
        u.shared.pending = null;
        var i = a
          , f = i.next;
        i.next = null,
        o === null ? r = f : o.next = f,
        o = i;
        var m = e.alternate;
        m !== null && (m = m.updateQueue,
        a = m.lastBaseUpdate,
        a !== o && (a === null ? m.firstBaseUpdate = f : a.next = f,
        m.lastBaseUpdate = i))
    }
    if (r !== null) {
        var b = u.baseState;
        o = 0,
        m = f = i = null,
        a = r;
        do {
            var p = a.lane
              , v = a.eventTime;
            if ((l & p) === p) {
                m !== null && (m = m.next = {
                    eventTime: v,
                    lane: 0,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                });
                e: {
                    var y = e
                      , T = a;
                    switch (p = n,
                    v = t,
                    T.tag) {
                    case 1:
                        if (y = T.payload,
                        typeof y == "function") {
                            b = y.call(v, b, p);
                            break e
                        }
                        b = y;
                        break e;
                    case 3:
                        y.flags = -65537 & y.flags | 128;
                    case 0:
                        if (y = T.payload,
                        p = typeof y == "function" ? y.call(v, b, p) : y,
                        p == null)
                            break e;
                        b = U({}, b, p);
                        break e;
                    case 2:
                        en = !0
                    }
                }
                a.callback !== null && a.lane !== 0 && (e.flags |= 64,
                p = u.effects,
                p === null ? u.effects = [a] : p.push(a))
            } else
                v = {
                    eventTime: v,
                    lane: p,
                    tag: a.tag,
                    payload: a.payload,
                    callback: a.callback,
                    next: null
                },
                m === null ? (f = m = v,
                i = b) : m = m.next = v,
                o |= p;
            if (a = a.next,
            a === null) {
                if (a = u.shared.pending,
                a === null)
                    break;
                p = a,
                a = p.next,
                p.next = null,
                u.lastBaseUpdate = p,
                u.shared.pending = null
            }
        } while (1);
        if (m === null && (i = b),
        u.baseState = i,
        u.firstBaseUpdate = f,
        u.lastBaseUpdate = m,
        n = u.shared.interleaved,
        n !== null) {
            u = n;
            do
                o |= u.lane,
                u = u.next;
            while (u !== n)
        } else
            r === null && (u.shared.lanes = 0);
        Cn |= o,
        e.lanes = o,
        e.memoizedState = b
    }
}
function Ra(e, n, t) {
    if (e = n.effects,
    n.effects = null,
    e !== null)
        for (n = 0; n < e.length; n++) {
            var l = e[n]
              , u = l.callback;
            if (u !== null) {
                if (l.callback = null,
                l = t,
                typeof u != "function")
                    throw Error(h(191, u));
                u.call(l)
            }
        }
}
var rc = new ai.Component().refs;
function Fr(e, n, t, l) {
    n = e.memoizedState,
    t = t(l, n),
    t = t == null ? n : U({}, n, t),
    e.memoizedState = t,
    e.lanes === 0 && (e.updateQueue.baseState = t)
}
var mu = {
    isMounted: function(e) {
        return !!(e = e._reactInternals) && Rn(e) === e
    },
    enqueueSetState: function(e, n, t) {
        e = e._reactInternals;
        var l = le()
          , u = fn(e)
          , r = $e(l, u);
        r.payload = n,
        t != null && (r.callback = t),
        cn(e, r),
        n = we(e, u, l),
        n !== null && Ol(n, e, u)
    },
    enqueueReplaceState: function(e, n, t) {
        e = e._reactInternals;
        var l = le()
          , u = fn(e)
          , r = $e(l, u);
        r.tag = 1,
        r.payload = n,
        t != null && (r.callback = t),
        cn(e, r),
        n = we(e, u, l),
        n !== null && Ol(n, e, u)
    },
    enqueueForceUpdate: function(e, n) {
        e = e._reactInternals;
        var t = le()
          , l = fn(e)
          , u = $e(t, l);
        u.tag = 2,
        n != null && (u.callback = n),
        cn(e, u),
        n = we(e, l, t),
        n !== null && Ol(n, e, l)
    }
};
function Ma(e, n, t, l, u, r, o) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, r, o) : !n.prototype || !n.prototype.isPureReactComponent || !Vt(t, l) || !Vt(u, r)
}
function oc(e, n, t) {
    var l = !1
      , u = pn
      , r = n.contextType;
    return typeof r == "object" && r !== null ? r = Ee(r) : (u = ce(n) ? Tn : ne.current,
    l = n.contextTypes,
    r = (l = l != null) ? et(e, u) : pn),
    n = new n(t,r),
    e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null,
    n.updater = mu,
    e.stateNode = n,
    n._reactInternals = e,
    l && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = u,
    e.__reactInternalMemoizedMaskedChildContext = r),
    n
}
function xa(e, n, t, l) {
    e = n.state,
    typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, l),
    typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, l),
    n.state !== e && mu.enqueueReplaceState(n, n.state, null)
}
function Lr(e, n, t, l) {
    var u = e.stateNode;
    u.props = t,
    u.state = e.memoizedState,
    u.refs = rc,
    io(e);
    var r = n.contextType;
    typeof r == "object" && r !== null ? u.context = Ee(r) : (r = ce(n) ? Tn : ne.current,
    u.context = et(e, r)),
    u.state = e.memoizedState,
    r = n.getDerivedStateFromProps,
    typeof r == "function" && (Fr(e, n, r, t),
    u.state = e.memoizedState),
    typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (n = u.state,
    typeof u.componentWillMount == "function" && u.componentWillMount(),
    typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(),
    n !== u.state && mu.enqueueReplaceState(u, u.state, null),
    Xl(e, t, u, l),
    u.state = e.memoizedState),
    typeof u.componentDidMount == "function" && (e.flags |= 4194308)
}
var Qn = []
  , Hn = 0
  , Gl = null
  , Zl = 0
  , ye = []
  , be = 0
  , Fn = null
  , Qe = 1
  , He = "";
function kn(e, n) {
    Qn[Hn++] = Zl,
    Qn[Hn++] = Gl,
    Gl = e,
    Zl = n
}
function ac(e, n, t) {
    ye[be++] = Qe,
    ye[be++] = He,
    ye[be++] = Fn,
    Fn = e;
    var l = Qe;
    e = He;
    var u = 32 - Re(l) - 1;
    l &= ~(1 << u),
    t += 1;
    var r = 32 - Re(n) + u;
    if (30 < r) {
        var o = u - u % 5;
        r = (l & (1 << o) - 1).toString(32),
        l >>= o,
        u -= o,
        Qe = 1 << 32 - Re(n) + u | t << u | l,
        He = r + e
    } else
        Qe = 1 << r | t << u | l,
        He = e
}
function co(e) {
    e.return !== null && (kn(e, 1),
    ac(e, 1, 0))
}
function so(e) {
    for (; e === Gl; )
        Gl = Qn[--Hn],
        Qn[Hn] = null,
        Zl = Qn[--Hn],
        Qn[Hn] = null;
    for (; e === Fn; )
        Fn = ye[--be],
        ye[be] = null,
        He = ye[--be],
        ye[be] = null,
        Qe = ye[--be],
        ye[be] = null
}
var de = null
  , oe = null
  , x = !1
  , De = null;
function ic(e, n) {
    var t = ve(5, null, null, 0);
    t.elementType = "DELETED",
    t.stateNode = n,
    t.return = e,
    n = e.deletions,
    n === null ? (e.deletions = [t],
    e.flags |= 16) : n.push(t)
}
function Ia(e, n) {
    switch (e.tag) {
    case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n,
        n !== null && (e.stateNode = n,
        de = e,
        oe = We(n.firstChild),
        !0);
    case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n,
        n !== null && (e.stateNode = n,
        de = e,
        oe = null,
        !0);
    case 13:
        return n = n.nodeType !== 8 ? null : n,
        n !== null && (t = Fn !== null ? {
            id: Qe,
            overflow: He
        } : null,
        e.memoizedState = {
            dehydrated: n,
            treeContext: t,
            retryLane: 1073741824
        },
        t = ve(18, null, null, 0),
        t.stateNode = n,
        t.return = e,
        e.child = t,
        de = e,
        oe = null,
        !0);
    default:
        return !1
    }
}
function Cr(e) {
    return (1 & e.mode) !== 0 && (128 & e.flags) === 0
}
function Dr(e) {
    if (x) {
        var n = oe;
        if (n) {
            var t = n;
            if (!Ia(e, n)) {
                if (Cr(e))
                    throw Error(h(418));
                n = We(t.nextSibling);
                var l = de;
                n && Ia(e, n) ? ic(l, t) : (e.flags = -4097 & e.flags | 2,
                x = !1,
                de = e)
            }
        } else {
            if (Cr(e))
                throw Error(h(418));
            e.flags = -4097 & e.flags | 2,
            x = !1,
            de = e
        }
    }
}
function za(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    de = e
}
function gt(e) {
    if (e !== de)
        return !1;
    if (!x)
        return za(e),
        x = !0,
        !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type,
    n = n !== "head" && n !== "body" && !Er(e.type, e.memoizedProps)),
    n && (n = oe)) {
        if (Cr(e)) {
            for (e = oe; e; )
                e = We(e.nextSibling);
            throw Error(h(418))
        }
        for (; n; )
            ic(e, n),
            n = We(n.nextSibling)
    }
    if (za(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(h(317));
        e: {
            for (e = e.nextSibling,
            n = 0; e; ) {
                if (e.nodeType === 8) {
                    var t = e.data;
                    if (t === "/$") {
                        if (n === 0) {
                            oe = We(e.nextSibling);
                            break e
                        }
                        n--
                    } else
                        t !== "$" && t !== "$!" && t !== "$?" || n++
                }
                e = e.nextSibling
            }
            oe = null
        }
    } else
        oe = de ? We(e.stateNode.nextSibling) : null;
    return !0
}
function nt() {
    oe = de = null,
    x = !1
}
function fo(e) {
    De === null ? De = [e] : De.push(e)
}
function yt(e, n, t) {
    if (e = t.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (t._owner) {
            if (t = t._owner,
            t) {
                if (t.tag !== 1)
                    throw Error(h(309));
                var l = t.stateNode
            }
            if (!l)
                throw Error(h(147, e));
            var u = l
              , r = "" + e;
            return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === r ? n.ref : (n = function(o) {
                var a = u.refs;
                a === rc && (a = u.refs = {}),
                o === null ? delete a[r] : a[r] = o
            }
            ,
            n._stringRef = r,
            n)
        }
        if (typeof e != "string")
            throw Error(h(284));
        if (!t._owner)
            throw Error(h(290, e))
    }
    return e
}
function El(e, n) {
    throw e = Object.prototype.toString.call(n),
    Error(h(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e))
}
function Ua(e) {
    var n = e._init;
    return n(e._payload)
}
function cc(e) {
    function n(s, c) {
        if (e) {
            var d = s.deletions;
            d === null ? (s.deletions = [c],
            s.flags |= 16) : d.push(c)
        }
    }
    function t(s, c) {
        if (!e)
            return null;
        for (; c !== null; )
            n(s, c),
            c = c.sibling;
        return null
    }
    function l(s, c) {
        for (s = new Map; c !== null; )
            c.key !== null ? s.set(c.key, c) : s.set(c.index, c),
            c = c.sibling;
        return s
    }
    function u(s, c) {
        return s = mn(s, c),
        s.index = 0,
        s.sibling = null,
        s
    }
    function r(s, c, d) {
        return s.index = d,
        e ? (d = s.alternate,
        d !== null ? (d = d.index,
        d < c ? (s.flags |= 2,
        c) : d) : (s.flags |= 2,
        c)) : (s.flags |= 1048576,
        c)
    }
    function o(s) {
        return e && s.alternate === null && (s.flags |= 2),
        s
    }
    function a(s, c, d, g) {
        return c === null || c.tag !== 6 ? (c = Gu(d, s.mode, g),
        c.return = s,
        c) : (c = u(c, d),
        c.return = s,
        c)
    }
    function i(s, c, d, g) {
        var E = d.type;
        return E === zn ? m(s, c, d.props.children, g, d.key) : c !== null && (c.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Ua(E) === c.type) ? (g = u(c, d.props),
        g.ref = yt(s, c, d),
        g.return = s,
        g) : (g = zl(d.type, d.key, d.props, null, s.mode, g),
        g.ref = yt(s, c, d),
        g.return = s,
        g)
    }
    function f(s, c, d, g) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = Zu(d, s.mode, g),
        c.return = s,
        c) : (c = u(c, d.children || []),
        c.return = s,
        c)
    }
    function m(s, c, d, g, E) {
        return c === null || c.tag !== 7 ? (c = Sn(d, s.mode, g, E),
        c.return = s,
        c) : (c = u(c, d),
        c.return = s,
        c)
    }
    function b(s, c, d) {
        if (typeof c == "string" && c !== "" || typeof c == "number")
            return c = Gu("" + c, s.mode, d),
            c.return = s,
            c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
            case il:
                return d = zl(c.type, c.key, c.props, null, s.mode, d),
                d.ref = yt(s, null, c),
                d.return = s,
                d;
            case In:
                return c = Zu(c, s.mode, d),
                c.return = s,
                c;
            case Je:
                var g = c._init;
                return b(s, g(c._payload), d)
            }
            if (Et(c) || dt(c))
                return c = Sn(c, s.mode, d, null),
                c.return = s,
                c;
            El(s, c)
        }
        return null
    }
    function p(s, c, d, g) {
        var E = c !== null ? c.key : null;
        if (typeof d == "string" && d !== "" || typeof d == "number")
            return E !== null ? null : a(s, c, "" + d, g);
        if (typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case il:
                return d.key === E ? i(s, c, d, g) : null;
            case In:
                return d.key === E ? f(s, c, d, g) : null;
            case Je:
                return E = d._init,
                p(s, c, E(d._payload), g)
            }
            if (Et(d) || dt(d))
                return E !== null ? null : m(s, c, d, g, null);
            El(s, d)
        }
        return null
    }
    function v(s, c, d, g, E) {
        if (typeof g == "string" && g !== "" || typeof g == "number")
            return s = s.get(d) || null,
            a(c, s, "" + g, E);
        if (typeof g == "object" && g !== null) {
            switch (g.$$typeof) {
            case il:
                return s = s.get(g.key === null ? d : g.key) || null,
                i(c, s, g, E);
            case In:
                return s = s.get(g.key === null ? d : g.key) || null,
                f(c, s, g, E);
            case Je:
                var _ = g._init;
                return v(s, c, d, _(g._payload), E)
            }
            if (Et(g) || dt(g))
                return s = s.get(d) || null,
                m(c, s, g, E, null);
            El(c, g)
        }
        return null
    }
    function y(s, c, d, g) {
        for (var E = null, _ = null, P = c, S = c = 0, $ = null; P !== null && S < d.length; S++) {
            P.index > S ? ($ = P,
            P = null) : $ = P.sibling;
            var C = p(s, P, d[S], g);
            if (C === null) {
                P === null && (P = $);
                break
            }
            e && P && C.alternate === null && n(s, P),
            c = r(C, c, S),
            _ === null ? E = C : _.sibling = C,
            _ = C,
            P = $
        }
        if (S === d.length)
            return t(s, P),
            x && kn(s, S),
            E;
        if (P === null) {
            for (; S < d.length; S++)
                P = b(s, d[S], g),
                P !== null && (c = r(P, c, S),
                _ === null ? E = P : _.sibling = P,
                _ = P);
            return x && kn(s, S),
            E
        }
        for (P = l(s, P); S < d.length; S++)
            $ = v(P, s, S, d[S], g),
            $ !== null && (e && $.alternate !== null && P.delete($.key === null ? S : $.key),
            c = r($, c, S),
            _ === null ? E = $ : _.sibling = $,
            _ = $);
        return e && P.forEach(function(Xe) {
            return n(s, Xe)
        }),
        x && kn(s, S),
        E
    }
    function T(s, c, d, g) {
        var E = dt(d);
        if (typeof E != "function")
            throw Error(h(150));
        if (d = E.call(d),
        d == null)
            throw Error(h(151));
        for (var _ = E = null, P = c, S = c = 0, $ = null, C = d.next(); P !== null && !C.done; S++,
        C = d.next()) {
            P.index > S ? ($ = P,
            P = null) : $ = P.sibling;
            var Xe = p(s, P, C.value, g);
            if (Xe === null) {
                P === null && (P = $);
                break
            }
            e && P && Xe.alternate === null && n(s, P),
            c = r(Xe, c, S),
            _ === null ? E = Xe : _.sibling = Xe,
            _ = Xe,
            P = $
        }
        if (C.done)
            return t(s, P),
            x && kn(s, S),
            E;
        if (P === null) {
            for (; !C.done; S++,
            C = d.next())
                C = b(s, C.value, g),
                C !== null && (c = r(C, c, S),
                _ === null ? E = C : _.sibling = C,
                _ = C);
            return x && kn(s, S),
            E
        }
        for (P = l(s, P); !C.done; S++,
        C = d.next())
            C = v(P, s, S, C.value, g),
            C !== null && (e && C.alternate !== null && P.delete(C.key === null ? S : C.key),
            c = r(C, c, S),
            _ === null ? E = C : _.sibling = C,
            _ = C);
        return e && P.forEach(function(is) {
            return n(s, is)
        }),
        x && kn(s, S),
        E
    }
    function B(s, c, d, g) {
        if (typeof d == "object" && d !== null && d.type === zn && d.key === null && (d = d.props.children),
        typeof d == "object" && d !== null) {
            switch (d.$$typeof) {
            case il:
                e: {
                    for (var E = d.key, _ = c; _ !== null; ) {
                        if (_.key === E) {
                            if (E = d.type,
                            E === zn) {
                                if (_.tag === 7) {
                                    t(s, _.sibling),
                                    c = u(_, d.props.children),
                                    c.return = s,
                                    s = c;
                                    break e
                                }
                            } else if (_.elementType === E || typeof E == "object" && E !== null && E.$$typeof === Je && Ua(E) === _.type) {
                                t(s, _.sibling),
                                c = u(_, d.props),
                                c.ref = yt(s, _, d),
                                c.return = s,
                                s = c;
                                break e
                            }
                            t(s, _);
                            break
                        }
                        n(s, _),
                        _ = _.sibling
                    }
                    d.type === zn ? (c = Sn(d.props.children, s.mode, g, d.key),
                    c.return = s,
                    s = c) : (g = zl(d.type, d.key, d.props, null, s.mode, g),
                    g.ref = yt(s, c, d),
                    g.return = s,
                    s = g)
                }
                return o(s);
            case In:
                e: {
                    for (_ = d.key; c !== null; ) {
                        if (c.key === _) {
                            if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                                t(s, c.sibling),
                                c = u(c, d.children || []),
                                c.return = s,
                                s = c;
                                break e
                            }
                            t(s, c);
                            break
                        }
                        n(s, c),
                        c = c.sibling
                    }
                    c = Zu(d, s.mode, g),
                    c.return = s,
                    s = c
                }
                return o(s);
            case Je:
                return _ = d._init,
                B(s, c, _(d._payload), g)
            }
            if (Et(d))
                return y(s, c, d, g);
            if (dt(d))
                return T(s, c, d, g);
            El(s, d)
        }
        return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d,
        c !== null && c.tag === 6 ? (t(s, c.sibling),
        c = u(c, d),
        c.return = s,
        s = c) : (t(s, c),
        c = Gu(d, s.mode, g),
        c.return = s,
        s = c),
        o(s)) : t(s, c)
    }
    return B
}
var tt = cc(!0)
  , sc = cc(!1)
  , el = {}
  , Be = gn(el)
  , $t = gn(el)
  , jt = gn(el);
function _n(e) {
    if (e === el)
        throw Error(h(174));
    return e
}
function po(e, n) {
    switch (O(jt, n),
    O($t, e),
    O(Be, el),
    e = n.nodeType,
    e) {
    case 9:
    case 11:
        n = (n = n.documentElement) ? n.namespaceURI : ir(null, "");
        break;
    default:
        e = e === 8 ? n.parentNode : n,
        n = e.namespaceURI || null,
        e = e.tagName,
        n = ir(n, e)
    }
    M(Be),
    O(Be, n)
}
function lt() {
    M(Be),
    M($t),
    M(jt)
}
function fc(e) {
    _n(jt.current);
    var n = _n(Be.current)
      , t = ir(n, e.type);
    n !== t && (O($t, e),
    O(Be, t))
}
function mo(e) {
    $t.current === e && (M(Be),
    M($t))
}
var I = gn(0);
function Jl(e) {
    for (var n = e; n !== null; ) {
        if (n.tag === 13) {
            var t = n.memoizedState;
            if (t !== null && (t = t.dehydrated,
            t === null || t.data === "$?" || t.data === "$!"))
                return n
        } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
            if ((128 & n.flags) !== 0)
                return n
        } else if (n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === e)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === e)
                return null;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
    return null
}
var ju = [];
function ho() {
    for (var e = 0; e < ju.length; e++)
        ju[e]._workInProgressVersionPrimary = null;
    ju.length = 0
}
var Rl = Ye.ReactCurrentDispatcher
  , qu = Ye.ReactCurrentBatchConfig
  , Ln = 0
  , z = null
  , W = null
  , q = null
  , eu = !1
  , Dt = !1
  , qt = 0
  , nd = 0;
function Z() {
    throw Error(h(321))
}
function go(e, n) {
    if (n === null)
        return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
        if (!Me(e[t], n[t]))
            return !1;
    return !0
}
function yo(e, n, t, l, u, r) {
    if (Ln = r,
    z = n,
    n.memoizedState = null,
    n.updateQueue = null,
    n.lanes = 0,
    Rl.current = e === null || e.memoizedState === null ? rd : od,
    e = t(l, u),
    Dt) {
        r = 0;
        do {
            if (Dt = !1,
            qt = 0,
            25 <= r)
                throw Error(h(301));
            r += 1,
            q = W = null,
            n.updateQueue = null,
            Rl.current = ad,
            e = t(l, u)
        } while (Dt)
    }
    if (Rl.current = nu,
    n = W !== null && W.next !== null,
    Ln = 0,
    q = W = z = null,
    eu = !1,
    n)
        throw Error(h(300));
    return e
}
function bo() {
    var e = qt !== 0;
    return qt = 0,
    e
}
function ze() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return q === null ? z.memoizedState = q = e : q = q.next = e,
    q
}
function _e() {
    if (W === null) {
        var e = z.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = W.next;
    var n = q === null ? z.memoizedState : q.next;
    if (n !== null)
        q = n,
        W = e;
    else {
        if (e === null)
            throw Error(h(310));
        W = e,
        e = {
            memoizedState: W.memoizedState,
            baseState: W.baseState,
            baseQueue: W.baseQueue,
            queue: W.queue,
            next: null
        },
        q === null ? z.memoizedState = q = e : q = q.next = e
    }
    return q
}
function Kt(e, n) {
    return typeof n == "function" ? n(e) : n
}
function Ku(e) {
    var n = _e()
      , t = n.queue;
    if (t === null)
        throw Error(h(311));
    t.lastRenderedReducer = e;
    var l = W
      , u = l.baseQueue
      , r = t.pending;
    if (r !== null) {
        if (u !== null) {
            var o = u.next;
            u.next = r.next,
            r.next = o
        }
        l.baseQueue = u = r,
        t.pending = null
    }
    if (u !== null) {
        r = u.next,
        l = l.baseState;
        var a = o = null
          , i = null
          , f = r;
        do {
            var m = f.lane;
            if ((Ln & m) === m)
                i !== null && (i = i.next = {
                    lane: 0,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                }),
                l = f.hasEagerState ? f.eagerState : e(l, f.action);
            else {
                var b = {
                    lane: m,
                    action: f.action,
                    hasEagerState: f.hasEagerState,
                    eagerState: f.eagerState,
                    next: null
                };
                i === null ? (a = i = b,
                o = l) : i = i.next = b,
                z.lanes |= m,
                Cn |= m
            }
            f = f.next
        } while (f !== null && f !== r);
        i === null ? o = l : i.next = a,
        Me(l, n.memoizedState) || (ae = !0),
        n.memoizedState = l,
        n.baseState = o,
        n.baseQueue = i,
        t.lastRenderedState = l
    }
    if (e = t.interleaved,
    e !== null) {
        u = e;
        do
            r = u.lane,
            z.lanes |= r,
            Cn |= r,
            u = u.next;
        while (u !== e)
    } else
        u === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch]
}
function Yu(e) {
    var n = _e()
      , t = n.queue;
    if (t === null)
        throw Error(h(311));
    t.lastRenderedReducer = e;
    var l = t.dispatch
      , u = t.pending
      , r = n.memoizedState;
    if (u !== null) {
        t.pending = null;
        var o = u = u.next;
        do
            r = e(r, o.action),
            o = o.next;
        while (o !== u);
        Me(r, n.memoizedState) || (ae = !0),
        n.memoizedState = r,
        n.baseQueue === null && (n.baseState = r),
        t.lastRenderedState = r
    }
    return [r, l]
}
function dc() {}
function pc(e, n) {
    var t = z
      , l = _e()
      , u = n()
      , r = !Me(l.memoizedState, u);
    if (r && (l.memoizedState = u,
    ae = !0),
    l = l.queue,
    vo(gc.bind(null, t, l, e), [e]),
    l.getSnapshot !== n || r || q !== null && 1 & q.memoizedState.tag) {
        if (t.flags |= 2048,
        Yt(9, hc.bind(null, t, l, u, n), void 0, null),
        H === null)
            throw Error(h(349));
        (30 & Ln) !== 0 || mc(t, n, u)
    }
    return u
}
function mc(e, n, t) {
    e.flags |= 16384,
    e = {
        getSnapshot: n,
        value: t
    },
    n = z.updateQueue,
    n === null ? (n = {
        lastEffect: null,
        stores: null
    },
    z.updateQueue = n,
    n.stores = [e]) : (t = n.stores,
    t === null ? n.stores = [e] : t.push(e))
}
function hc(e, n, t, l) {
    n.value = t,
    n.getSnapshot = l,
    yc(n) && we(e, 1, -1)
}
function gc(e, n, t) {
    return t(function() {
        yc(n) && we(e, 1, -1)
    })
}
function yc(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
        var t = n();
        return !Me(e, t)
    } catch {
        return !0
    }
}
function Na(e) {
    var n = ze();
    return typeof e == "function" && (e = e()),
    n.memoizedState = n.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Kt,
        lastRenderedState: e
    },
    n.queue = e,
    e = e.dispatch = ud.bind(null, z, e),
    [n.memoizedState, e]
}
function Yt(e, n, t, l) {
    return e = {
        tag: e,
        create: n,
        destroy: t,
        deps: l,
        next: null
    },
    n = z.updateQueue,
    n === null ? (n = {
        lastEffect: null,
        stores: null
    },
    z.updateQueue = n,
    n.lastEffect = e.next = e) : (t = n.lastEffect,
    t === null ? n.lastEffect = e.next = e : (l = t.next,
    t.next = e,
    e.next = l,
    n.lastEffect = e)),
    e
}
function bc() {
    return _e().memoizedState
}
function Ml(e, n, t, l) {
    var u = ze();
    z.flags |= e,
    u.memoizedState = Yt(1 | n, t, void 0, l === void 0 ? null : l)
}
function hu(e, n, t, l) {
    var u = _e();
    l = l === void 0 ? null : l;
    var r = void 0;
    if (W !== null) {
        var o = W.memoizedState;
        if (r = o.destroy,
        l !== null && go(l, o.deps)) {
            u.memoizedState = Yt(n, t, r, l);
            return
        }
    }
    z.flags |= e,
    u.memoizedState = Yt(1 | n, t, r, l)
}
function Ba(e, n) {
    return Ml(8390656, 8, e, n)
}
function vo(e, n) {
    return hu(2048, 8, e, n)
}
function vc(e, n) {
    return hu(4, 2, e, n)
}
function kc(e, n) {
    return hu(4, 4, e, n)
}
function wc(e, n) {
    return typeof n == "function" ? (e = e(),
    n(e),
    function() {
        n(null)
    }
    ) : n != null ? (e = e(),
    n.current = e,
    function() {
        n.current = null
    }
    ) : void 0
}
function Ec(e, n, t) {
    return t = t != null ? t.concat([e]) : null,
    hu(4, 4, wc.bind(null, n, e), t)
}
function ko() {}
function _c(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && go(n, l[1]) ? l[0] : (t.memoizedState = [e, n],
    e)
}
function Pc(e, n) {
    var t = _e();
    n = n === void 0 ? null : n;
    var l = t.memoizedState;
    return l !== null && n !== null && go(n, l[1]) ? l[0] : (e = e(),
    t.memoizedState = [e, n],
    e)
}
function Sc(e, n, t) {
    return (21 & Ln) === 0 ? (e.baseState && (e.baseState = !1,
    ae = !0),
    e.memoizedState = t) : (Me(t, n) || (t = Oi(),
    z.lanes |= t,
    Cn |= t,
    e.baseState = !0),
    n)
}
function td(e, n) {
    var t = D;
    D = t !== 0 && 4 > t ? t : 4,
    e(!0);
    var l = qu.transition;
    qu.transition = {};
    try {
        e(!1),
        n()
    } finally {
        D = t,
        qu.transition = l
    }
}
function Tc() {
    return _e().memoizedState
}
function ld(e, n, t) {
    var l = fn(e);
    t = {
        lane: l,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Fc(e) ? Lc(n, t) : (Cc(e, n, t),
    t = le(),
    e = we(e, l, t),
    e !== null && Dc(e, n, l))
}
function ud(e, n, t) {
    var l = fn(e)
      , u = {
        lane: l,
        action: t,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Fc(e))
        Lc(n, u);
    else {
        Cc(e, n, u);
        var r = e.alternate;
        if (e.lanes === 0 && (r === null || r.lanes === 0) && (r = n.lastRenderedReducer,
        r !== null))
            try {
                var o = n.lastRenderedState
                  , a = r(o, t);
                if (u.hasEagerState = !0,
                u.eagerState = a,
                Me(a, o))
                    return
            } catch {}
        t = le(),
        e = we(e, l, t),
        e !== null && Dc(e, n, l)
    }
}
function Fc(e) {
    var n = e.alternate;
    return e === z || n !== null && n === z
}
function Lc(e, n) {
    Dt = eu = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next,
    t.next = n),
    e.pending = n
}
function Cc(e, n, t) {
    Kc(e) ? (e = n.interleaved,
    e === null ? (t.next = t,
    Oe === null ? Oe = [n] : Oe.push(n)) : (t.next = e.next,
    e.next = t),
    n.interleaved = t) : (e = n.pending,
    e === null ? t.next = t : (t.next = e.next,
    e.next = t),
    n.pending = t)
}
function Dc(e, n, t) {
    if ((4194240 & t) !== 0) {
        var l = n.lanes;
        l &= e.pendingLanes,
        t |= l,
        n.lanes = t,
        Gr(e, t)
    }
}
var nu = {
    readContext: Ee,
    useCallback: Z,
    useContext: Z,
    useEffect: Z,
    useImperativeHandle: Z,
    useInsertionEffect: Z,
    useLayoutEffect: Z,
    useMemo: Z,
    useReducer: Z,
    useRef: Z,
    useState: Z,
    useDebugValue: Z,
    useDeferredValue: Z,
    useTransition: Z,
    useMutableSource: Z,
    useSyncExternalStore: Z,
    useId: Z,
    unstable_isNewReconciler: !1
}
  , rd = {
    readContext: Ee,
    useCallback: function(e, n) {
        return ze().memoizedState = [e, n === void 0 ? null : n],
        e
    },
    useContext: Ee,
    useEffect: Ba,
    useImperativeHandle: function(e, n, t) {
        return t = t != null ? t.concat([e]) : null,
        Ml(4194308, 4, wc.bind(null, n, e), t)
    },
    useLayoutEffect: function(e, n) {
        return Ml(4194308, 4, e, n)
    },
    useInsertionEffect: function(e, n) {
        return Ml(4, 2, e, n)
    },
    useMemo: function(e, n) {
        var t = ze();
        return n = n === void 0 ? null : n,
        e = e(),
        t.memoizedState = [e, n],
        e
    },
    useReducer: function(e, n, t) {
        var l = ze();
        return n = t !== void 0 ? t(n) : n,
        l.memoizedState = l.baseState = n,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n
        },
        l.queue = e,
        e = e.dispatch = ld.bind(null, z, e),
        [l.memoizedState, e]
    },
    useRef: function(e) {
        var n = ze();
        return e = {
            current: e
        },
        n.memoizedState = e
    },
    useState: Na,
    useDebugValue: ko,
    useDeferredValue: function(e) {
        return ze().memoizedState = e
    },
    useTransition: function() {
        var e = Na(!1)
          , n = e[0];
        return e = td.bind(null, e[1]),
        ze().memoizedState = e,
        [n, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, n, t) {
        var l = z
          , u = ze();
        if (x) {
            if (t === void 0)
                throw Error(h(407));
            t = t()
        } else {
            if (t = n(),
            H === null)
                throw Error(h(349));
            (30 & Ln) !== 0 || mc(l, n, t)
        }
        u.memoizedState = t;
        var r = {
            value: t,
            getSnapshot: n
        };
        return u.queue = r,
        Ba(gc.bind(null, l, r, e), [e]),
        l.flags |= 2048,
        Yt(9, hc.bind(null, l, r, t, n), void 0, null),
        t
    },
    useId: function() {
        var e = ze()
          , n = H.identifierPrefix;
        if (x) {
            var t = He
              , l = Qe;
            t = (l & ~(1 << 32 - Re(l) - 1)).toString(32) + t,
            n = ":" + n + "R" + t,
            t = qt++,
            0 < t && (n += "H" + t.toString(32)),
            n += ":"
        } else
            t = nd++,
            n = ":" + n + "r" + t.toString(32) + ":";
        return e.memoizedState = n
    },
    unstable_isNewReconciler: !1
}
  , od = {
    readContext: Ee,
    useCallback: _c,
    useContext: Ee,
    useEffect: vo,
    useImperativeHandle: Ec,
    useInsertionEffect: vc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: Ku,
    useRef: bc,
    useState: function() {
        return Ku(Kt)
    },
    useDebugValue: ko,
    useDeferredValue: function(e) {
        var n = _e();
        return Sc(n, W.memoizedState, e)
    },
    useTransition: function() {
        var e = Ku(Kt)[0]
          , n = _e().memoizedState;
        return [e, n]
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Tc,
    unstable_isNewReconciler: !1
}
  , ad = {
    readContext: Ee,
    useCallback: _c,
    useContext: Ee,
    useEffect: vo,
    useImperativeHandle: Ec,
    useInsertionEffect: vc,
    useLayoutEffect: kc,
    useMemo: Pc,
    useReducer: Yu,
    useRef: bc,
    useState: function() {
        return Yu(Kt)
    },
    useDebugValue: ko,
    useDeferredValue: function(e) {
        var n = _e();
        return W === null ? n.memoizedState = e : Sc(n, W.memoizedState, e)
    },
    useTransition: function() {
        var e = Yu(Kt)[0]
          , n = _e().memoizedState;
        return [e, n]
    },
    useMutableSource: dc,
    useSyncExternalStore: pc,
    useId: Tc,
    unstable_isNewReconciler: !1
};
function wo(e, n) {
    try {
        var t = ""
          , l = n;
        do
            t += zs(l),
            l = l.return;
        while (l);
        var u = t
    } catch (r) {
        u = `
Error generating stack: ` + r.message + `
` + r.stack
    }
    return {
        value: e,
        source: n,
        stack: u
    }
}
function Or(e, n) {
    try {
        console.error(n.value)
    } catch (t) {
        setTimeout(function() {
            throw t
        })
    }
}
var id = typeof WeakMap == "function" ? WeakMap : Map;
function Oc(e, n, t) {
    t = $e(-1, t),
    t.tag = 3,
    t.payload = {
        element: null
    };
    var l = n.value;
    return t.callback = function() {
        lu || (lu = !0,
        Br = l),
        Or(e, n)
    }
    ,
    t
}
function Rc(e, n, t) {
    t = $e(-1, t),
    t.tag = 3;
    var l = e.type.getDerivedStateFromError;
    if (typeof l == "function") {
        var u = n.value;
        t.payload = function() {
            return l(u)
        }
        ,
        t.callback = function() {
            Or(e, n)
        }
    }
    var r = e.stateNode;
    return r !== null && typeof r.componentDidCatch == "function" && (t.callback = function() {
        Or(e, n),
        typeof l != "function" && (sn === null ? sn = new Set([this]) : sn.add(this));
        var o = n.stack;
        this.componentDidCatch(n.value, {
            componentStack: o !== null ? o : ""
        })
    }
    ),
    t
}
function Aa(e, n, t) {
    var l = e.pingCache;
    if (l === null) {
        l = e.pingCache = new id;
        var u = new Set;
        l.set(n, u)
    } else
        u = l.get(n),
        u === void 0 && (u = new Set,
        l.set(n, u));
    u.has(t) || (u.add(t),
    e = wd.bind(null, e, n, t),
    n.then(e, e))
}
function Va(e) {
    do {
        var n;
        if ((n = e.tag === 13) && (n = e.memoizedState,
        n = n === null || n.dehydrated !== null),
        n)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Wa(e, n, t, l, u) {
    return (1 & e.mode) === 0 ? (e === n ? e.flags |= 65536 : (e.flags |= 128,
    t.flags |= 131072,
    t.flags &= -52805,
    t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = $e(-1, 1),
    n.tag = 2,
    cn(t, n))),
    t.lanes |= 1),
    e) : (e.flags |= 65536,
    e.lanes = u,
    e)
}
var Mc, Rr, xc, Ic;
Mc = function(e, n) {
    for (var t = n.child; t !== null; ) {
        if (t.tag === 5 || t.tag === 6)
            e.appendChild(t.stateNode);
        else if (t.tag !== 4 && t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === n)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === n)
                return;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
}
;
Rr = function() {}
;
xc = function(e, n, t, l) {
    var u = e.memoizedProps;
    if (u !== l) {
        e = n.stateNode,
        _n(Be.current);
        var r = null;
        switch (t) {
        case "input":
            u = ur(e, u),
            l = ur(e, l),
            r = [];
            break;
        case "select":
            u = U({}, u, {
                value: void 0
            }),
            l = U({}, l, {
                value: void 0
            }),
            r = [];
            break;
        case "textarea":
            u = ar(e, u),
            l = ar(e, l),
            r = [];
            break;
        default:
            typeof u.onClick != "function" && typeof l.onClick == "function" && (e.onclick = $l)
        }
        cr(t, l);
        var o;
        t = null;
        for (f in u)
            if (!l.hasOwnProperty(f) && u.hasOwnProperty(f) && u[f] != null)
                if (f === "style") {
                    var a = u[f];
                    for (o in a)
                        a.hasOwnProperty(o) && (t || (t = {}),
                        t[o] = "")
                } else
                    f !== "dangerouslySetInnerHTML" && f !== "children" && f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && f !== "autoFocus" && (xt.hasOwnProperty(f) ? r || (r = []) : (r = r || []).push(f, null));
        for (f in l) {
            var i = l[f];
            if (a = u?.[f],
            l.hasOwnProperty(f) && i !== a && (i != null || a != null))
                if (f === "style")
                    if (a) {
                        for (o in a)
                            !a.hasOwnProperty(o) || i && i.hasOwnProperty(o) || (t || (t = {}),
                            t[o] = "");
                        for (o in i)
                            i.hasOwnProperty(o) && a[o] !== i[o] && (t || (t = {}),
                            t[o] = i[o])
                    } else
                        t || (r || (r = []),
                        r.push(f, t)),
                        t = i;
                else
                    f === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0,
                    a = a ? a.__html : void 0,
                    i != null && a !== i && (r = r || []).push(f, i)) : f === "children" ? typeof i != "string" && typeof i != "number" || (r = r || []).push(f, "" + i) : f !== "suppressContentEditableWarning" && f !== "suppressHydrationWarning" && (xt.hasOwnProperty(f) ? (i != null && f === "onScroll" && R("scroll", e),
                    r || a === i || (r = [])) : (r = r || []).push(f, i))
        }
        t && (r = r || []).push("style", t);
        var f = r;
        (n.updateQueue = f) && (n.flags |= 4)
    }
}
;
Ic = function(e, n, t, l) {
    t !== l && (n.flags |= 4)
}
;
function bt(e, n) {
    if (!x)
        switch (e.tailMode) {
        case "hidden":
            n = e.tail;
            for (var t = null; n !== null; )
                n.alternate !== null && (t = n),
                n = n.sibling;
            t === null ? e.tail = null : t.sibling = null;
            break;
        case "collapsed":
            t = e.tail;
            for (var l = null; t !== null; )
                t.alternate !== null && (l = t),
                t = t.sibling;
            l === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null
        }
}
function J(e) {
    var n = e.alternate !== null && e.alternate.child === e.child
      , t = 0
      , l = 0;
    if (n)
        for (var u = e.child; u !== null; )
            t |= u.lanes | u.childLanes,
            l |= 14680064 & u.subtreeFlags,
            l |= 14680064 & u.flags,
            u.return = e,
            u = u.sibling;
    else
        for (u = e.child; u !== null; )
            t |= u.lanes | u.childLanes,
            l |= u.subtreeFlags,
            l |= u.flags,
            u.return = e,
            u = u.sibling;
    return e.subtreeFlags |= l,
    e.childLanes = t,
    n
}
function cd(e, n, t) {
    var l = n.pendingProps;
    switch (so(n),
    n.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return J(n),
        null;
    case 1:
        return ce(n.type) && jl(),
        J(n),
        null;
    case 3:
        return l = n.stateNode,
        lt(),
        M(ie),
        M(ne),
        ho(),
        l.pendingContext && (l.context = l.pendingContext,
        l.pendingContext = null),
        e !== null && e.child !== null || (gt(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && (256 & n.flags) === 0 || (n.flags |= 1024,
        De !== null && (Wr(De),
        De = null))),
        Rr(e, n),
        J(n),
        null;
    case 5:
        mo(n);
        var u = _n(jt.current);
        if (t = n.type,
        e !== null && n.stateNode != null)
            xc(e, n, t, l, u),
            e.ref !== n.ref && (n.flags |= 512,
            n.flags |= 2097152);
        else {
            if (!l) {
                if (n.stateNode === null)
                    throw Error(h(166));
                return J(n),
                null
            }
            if (e = _n(Be.current),
            gt(n)) {
                l = n.stateNode,
                t = n.type;
                var r = n.memoizedProps;
                switch (l[Ue] = n,
                l[Ht] = r,
                e = (1 & n.mode) !== 0,
                t) {
                case "dialog":
                    R("cancel", l),
                    R("close", l);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    R("load", l);
                    break;
                case "video":
                case "audio":
                    for (u = 0; u < Pt.length; u++)
                        R(Pt[u], l);
                    break;
                case "source":
                    R("error", l);
                    break;
                case "img":
                case "image":
                case "link":
                    R("error", l),
                    R("load", l);
                    break;
                case "details":
                    R("toggle", l);
                    break;
                case "input":
                    na(l, r),
                    R("invalid", l);
                    break;
                case "select":
                    l._wrapperState = {
                        wasMultiple: !!r.multiple
                    },
                    R("invalid", l);
                    break;
                case "textarea":
                    la(l, r),
                    R("invalid", l)
                }
                cr(t, r),
                u = null;
                for (var o in r)
                    if (r.hasOwnProperty(o)) {
                        var a = r[o];
                        o === "children" ? typeof a == "string" ? l.textContent !== a && (r.suppressHydrationWarning !== !0 && wl(l.textContent, a, e),
                        u = ["children", a]) : typeof a == "number" && l.textContent !== "" + a && (r.suppressHydrationWarning !== !0 && wl(l.textContent, a, e),
                        u = ["children", "" + a]) : xt.hasOwnProperty(o) && a != null && o === "onScroll" && R("scroll", l)
                    }
                switch (t) {
                case "input":
                    cl(l),
                    ta(l, r, !0);
                    break;
                case "textarea":
                    cl(l),
                    ua(l);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof r.onClick == "function" && (l.onclick = $l)
                }
                l = u,
                n.updateQueue = l,
                l !== null && (n.flags |= 4)
            } else {
                o = u.nodeType === 9 ? u : u.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = gi(t)),
                e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = o.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof l.is == "string" ? e = o.createElement(t, {
                    is: l.is
                }) : (e = o.createElement(t),
                t === "select" && (o = e,
                l.multiple ? o.multiple = !0 : l.size && (o.size = l.size))) : e = o.createElementNS(e, t),
                e[Ue] = n,
                e[Ht] = l,
                Mc(e, n, !1, !1),
                n.stateNode = e;
                e: {
                    switch (o = sr(t, l),
                    t) {
                    case "dialog":
                        R("cancel", e),
                        R("close", e),
                        u = l;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        R("load", e),
                        u = l;
                        break;
                    case "video":
                    case "audio":
                        for (u = 0; u < Pt.length; u++)
                            R(Pt[u], e);
                        u = l;
                        break;
                    case "source":
                        R("error", e),
                        u = l;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        R("error", e),
                        R("load", e),
                        u = l;
                        break;
                    case "details":
                        R("toggle", e),
                        u = l;
                        break;
                    case "input":
                        na(e, l),
                        u = ur(e, l),
                        R("invalid", e);
                        break;
                    case "option":
                        u = l;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!l.multiple
                        },
                        u = U({}, l, {
                            value: void 0
                        }),
                        R("invalid", e);
                        break;
                    case "textarea":
                        la(e, l),
                        u = ar(e, l),
                        R("invalid", e);
                        break;
                    default:
                        u = l
                    }
                    cr(t, u),
                    a = u;
                    for (r in a)
                        if (a.hasOwnProperty(r)) {
                            var i = a[r];
                            r === "style" ? vi(e, i) : r === "dangerouslySetInnerHTML" ? (i = i ? i.__html : void 0,
                            i != null && yi(e, i)) : r === "children" ? typeof i == "string" ? (t !== "textarea" || i !== "") && It(e, i) : typeof i == "number" && It(e, "" + i) : r !== "suppressContentEditableWarning" && r !== "suppressHydrationWarning" && r !== "autoFocus" && (xt.hasOwnProperty(r) ? i != null && r === "onScroll" && R("scroll", e) : i != null && $r(e, r, i, o))
                        }
                    switch (t) {
                    case "input":
                        cl(e),
                        ta(e, l, !1);
                        break;
                    case "textarea":
                        cl(e),
                        ua(e);
                        break;
                    case "option":
                        l.value != null && e.setAttribute("value", "" + dn(l.value));
                        break;
                    case "select":
                        e.multiple = !!l.multiple,
                        r = l.value,
                        r != null ? qn(e, !!l.multiple, r, !1) : l.defaultValue != null && qn(e, !!l.multiple, l.defaultValue, !0);
                        break;
                    default:
                        typeof u.onClick == "function" && (e.onclick = $l)
                    }
                    switch (t) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        l = !!l.autoFocus;
                        break e;
                    case "img":
                        l = !0;
                        break e;
                    default:
                        l = !1
                    }
                }
                l && (n.flags |= 4)
            }
            n.ref !== null && (n.flags |= 512,
            n.flags |= 2097152)
        }
        return J(n),
        null;
    case 6:
        if (e && n.stateNode != null)
            Ic(e, n, e.memoizedProps, l);
        else {
            if (typeof l != "string" && n.stateNode === null)
                throw Error(h(166));
            if (t = _n(jt.current),
            _n(Be.current),
            gt(n)) {
                if (l = n.stateNode,
                t = n.memoizedProps,
                l[Ue] = n,
                (r = l.nodeValue !== t) && (e = de,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        wl(l.nodeValue, t, (1 & e.mode) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && wl(l.nodeValue, t, (1 & e.mode) !== 0)
                    }
                r && (n.flags |= 4)
            } else
                l = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(l),
                l[Ue] = n,
                n.stateNode = l
        }
        return J(n),
        null;
    case 13:
        if (M(I),
        l = n.memoizedState,
        x && oe !== null && (1 & n.mode) !== 0 && (128 & n.flags) === 0) {
            for (l = oe; l; )
                l = We(l.nextSibling);
            return nt(),
            n.flags |= 98560,
            n
        }
        if (l !== null && l.dehydrated !== null) {
            if (l = gt(n),
            e === null) {
                if (!l)
                    throw Error(h(318));
                if (l = n.memoizedState,
                l = l !== null ? l.dehydrated : null,
                !l)
                    throw Error(h(317));
                l[Ue] = n
            } else
                nt(),
                (128 & n.flags) === 0 && (n.memoizedState = null),
                n.flags |= 4;
            return J(n),
            null
        }
        return De !== null && (Wr(De),
        De = null),
        (128 & n.flags) !== 0 ? (n.lanes = t,
        n) : (l = l !== null,
        t = !1,
        e === null ? gt(n) : t = e.memoizedState !== null,
        l !== t && l && (n.child.flags |= 8192,
        (1 & n.mode) !== 0 && (e === null || (1 & I.current) !== 0 ? Q === 0 && (Q = 3) : Fo())),
        n.updateQueue !== null && (n.flags |= 4),
        J(n),
        null);
    case 4:
        return lt(),
        Rr(e, n),
        e === null && Wt(n.stateNode.containerInfo),
        J(n),
        null;
    case 10:
        return ao(n.type._context),
        J(n),
        null;
    case 17:
        return ce(n.type) && jl(),
        J(n),
        null;
    case 19:
        if (M(I),
        r = n.memoizedState,
        r === null)
            return J(n),
            null;
        if (l = (128 & n.flags) !== 0,
        o = r.rendering,
        o === null)
            if (l)
                bt(r, !1);
            else {
                if (Q !== 0 || e !== null && (128 & e.flags) !== 0)
                    for (e = n.child; e !== null; ) {
                        if (o = Jl(e),
                        o !== null) {
                            for (n.flags |= 128,
                            bt(r, !1),
                            l = o.updateQueue,
                            l !== null && (n.updateQueue = l,
                            n.flags |= 4),
                            n.subtreeFlags = 0,
                            l = t,
                            t = n.child; t !== null; )
                                r = t,
                                e = l,
                                r.flags &= 14680066,
                                o = r.alternate,
                                o === null ? (r.childLanes = 0,
                                r.lanes = e,
                                r.child = null,
                                r.subtreeFlags = 0,
                                r.memoizedProps = null,
                                r.memoizedState = null,
                                r.updateQueue = null,
                                r.dependencies = null,
                                r.stateNode = null) : (r.childLanes = o.childLanes,
                                r.lanes = o.lanes,
                                r.child = o.child,
                                r.subtreeFlags = 0,
                                r.deletions = null,
                                r.memoizedProps = o.memoizedProps,
                                r.memoizedState = o.memoizedState,
                                r.updateQueue = o.updateQueue,
                                r.type = o.type,
                                e = o.dependencies,
                                r.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                t = t.sibling;
                            return O(I, 1 & I.current | 2),
                            n.child
                        }
                        e = e.sibling
                    }
                r.tail !== null && A() > ut && (n.flags |= 128,
                l = !0,
                bt(r, !1),
                n.lanes = 4194304)
            }
        else {
            if (!l)
                if (e = Jl(o),
                e !== null) {
                    if (n.flags |= 128,
                    l = !0,
                    t = e.updateQueue,
                    t !== null && (n.updateQueue = t,
                    n.flags |= 4),
                    bt(r, !0),
                    r.tail === null && r.tailMode === "hidden" && !o.alternate && !x)
                        return J(n),
                        null
                } else
                    2 * A() - r.renderingStartTime > ut && t !== 1073741824 && (n.flags |= 128,
                    l = !0,
                    bt(r, !1),
                    n.lanes = 4194304);
            r.isBackwards ? (o.sibling = n.child,
            n.child = o) : (t = r.last,
            t !== null ? t.sibling = o : n.child = o,
            r.last = o)
        }
        return r.tail !== null ? (n = r.tail,
        r.rendering = n,
        r.tail = n.sibling,
        r.renderingStartTime = A(),
        n.sibling = null,
        t = I.current,
        O(I, l ? 1 & t | 2 : 1 & t),
        n) : (J(n),
        null);
    case 22:
    case 23:
        return To(),
        l = n.memoizedState !== null,
        e !== null && e.memoizedState !== null !== l && (n.flags |= 8192),
        l && (1 & n.mode) !== 0 ? (1073741824 & fe) !== 0 && (J(n),
        6 & n.subtreeFlags && (n.flags |= 8192)) : J(n),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(h(156, n.tag))
}
var sd = Ye.ReactCurrentOwner
  , ae = !1;
function te(e, n, t, l) {
    n.child = e === null ? sc(n, null, t, l) : tt(n, e.child, t, l)
}
function Qa(e, n, t, l, u) {
    t = t.render;
    var r = n.ref;
    return Gn(n, u),
    l = yo(e, n, t, l, r, u),
    t = bo(),
    e !== null && !ae ? (n.updateQueue = e.updateQueue,
    n.flags &= -2053,
    e.lanes &= ~u,
    Ke(e, n, u)) : (x && t && co(n),
    n.flags |= 1,
    te(e, n, l, u),
    n.child)
}
function Ha(e, n, t, l, u) {
    if (e === null) {
        var r = t.type;
        return typeof r == "function" && !Lo(r) && r.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15,
        n.type = r,
        zc(e, n, r, l, u)) : (e = zl(t.type, null, l, n, n.mode, u),
        e.ref = n.ref,
        e.return = n,
        n.child = e)
    }
    if (r = e.child,
    (e.lanes & u) === 0) {
        var o = r.memoizedProps;
        if (t = t.compare,
        t = t !== null ? t : Vt,
        t(o, l) && e.ref === n.ref)
            return Ke(e, n, u)
    }
    return n.flags |= 1,
    e = mn(r, l),
    e.ref = n.ref,
    e.return = n,
    n.child = e
}
function zc(e, n, t, l, u) {
    if (e !== null) {
        var r = e.memoizedProps;
        if (Vt(r, l) && e.ref === n.ref) {
            if (ae = !1,
            n.pendingProps = l = r,
            (e.lanes & u) === 0)
                return n.lanes = e.lanes,
                Ke(e, n, u);
            (131072 & e.flags) !== 0 && (ae = !0)
        }
    }
    return Mr(e, n, t, l, u)
}
function Uc(e, n, t) {
    var l = n.pendingProps
      , u = l.children
      , r = e !== null ? e.memoizedState : null;
    if (l.mode === "hidden")
        if ((1 & n.mode) === 0)
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            O(jn, fe),
            fe |= t;
        else {
            if ((1073741824 & t) === 0)
                return e = r !== null ? r.baseLanes | t : t,
                n.lanes = n.childLanes = 1073741824,
                n.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                n.updateQueue = null,
                O(jn, fe),
                fe |= e,
                null;
            n.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            l = r !== null ? r.baseLanes : t,
            O(jn, fe),
            fe |= l
        }
    else
        r !== null ? (l = r.baseLanes | t,
        n.memoizedState = null) : l = t,
        O(jn, fe),
        fe |= l;
    return te(e, n, u, t),
    n.child
}
function Nc(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512,
    n.flags |= 2097152)
}
function Mr(e, n, t, l, u) {
    var r = ce(t) ? Tn : ne.current;
    return r = et(n, r),
    Gn(n, u),
    t = yo(e, n, t, l, r, u),
    l = bo(),
    e !== null && !ae ? (n.updateQueue = e.updateQueue,
    n.flags &= -2053,
    e.lanes &= ~u,
    Ke(e, n, u)) : (x && l && co(n),
    n.flags |= 1,
    te(e, n, t, u),
    n.child)
}
function $a(e, n, t, l, u) {
    if (ce(t)) {
        var r = !0;
        ql(n)
    } else
        r = !1;
    if (Gn(n, u),
    n.stateNode === null)
        e !== null && (e.alternate = null,
        n.alternate = null,
        n.flags |= 2),
        oc(n, t, l),
        Lr(n, t, l, u),
        l = !0;
    else if (e === null) {
        var o = n.stateNode
          , a = n.memoizedProps;
        o.props = a;
        var i = o.context
          , f = t.contextType;
        typeof f == "object" && f !== null ? f = Ee(f) : (f = ce(t) ? Tn : ne.current,
        f = et(n, f));
        var m = t.getDerivedStateFromProps
          , b = typeof m == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        b || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== l || i !== f) && xa(n, o, l, f),
        en = !1;
        var p = n.memoizedState;
        o.state = p,
        Xl(n, l, o, u),
        i = n.memoizedState,
        a !== l || p !== i || ie.current || en ? (typeof m == "function" && (Fr(n, t, m, l),
        i = n.memoizedState),
        (a = en || Ma(n, t, a, l, p, i, f)) ? (b || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(),
        typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()),
        typeof o.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        n.memoizedProps = l,
        n.memoizedState = i),
        o.props = l,
        o.state = i,
        o.context = f,
        l = a) : (typeof o.componentDidMount == "function" && (n.flags |= 4194308),
        l = !1)
    } else {
        o = n.stateNode,
        uc(e, n),
        a = n.memoizedProps,
        f = n.type === n.elementType ? a : Le(n.type, a),
        o.props = f,
        b = n.pendingProps,
        p = o.context,
        i = t.contextType,
        typeof i == "object" && i !== null ? i = Ee(i) : (i = ce(t) ? Tn : ne.current,
        i = et(n, i));
        var v = t.getDerivedStateFromProps;
        (m = typeof v == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (a !== b || p !== i) && xa(n, o, l, i),
        en = !1,
        p = n.memoizedState,
        o.state = p,
        Xl(n, l, o, u);
        var y = n.memoizedState;
        a !== b || p !== y || ie.current || en ? (typeof v == "function" && (Fr(n, t, v, l),
        y = n.memoizedState),
        (f = en || Ma(n, t, f, l, p, y, i) || !1) ? (m || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(l, y, i),
        typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(l, y, i)),
        typeof o.componentDidUpdate == "function" && (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024),
        n.memoizedProps = l,
        n.memoizedState = y),
        o.props = l,
        o.state = y,
        o.context = i,
        l = f) : (typeof o.componentDidUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (n.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" || a === e.memoizedProps && p === e.memoizedState || (n.flags |= 1024),
        l = !1)
    }
    return xr(e, n, t, l, r, u)
}
function xr(e, n, t, l, u, r) {
    Nc(e, n);
    var o = (128 & n.flags) !== 0;
    if (!l && !o)
        return u && Da(n, t, !1),
        Ke(e, n, r);
    l = n.stateNode,
    sd.current = n;
    var a = o && typeof t.getDerivedStateFromError != "function" ? null : l.render();
    return n.flags |= 1,
    e !== null && o ? (n.child = tt(n, e.child, null, r),
    n.child = tt(n, null, a, r)) : te(e, n, a, r),
    n.memoizedState = l.state,
    u && Da(n, t, !0),
    n.child
}
function Bc(e) {
    var n = e.stateNode;
    n.pendingContext ? Ca(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Ca(e, n.context, !1),
    po(e, n.containerInfo)
}
function ja(e, n, t, l, u) {
    return nt(),
    fo(u),
    n.flags |= 256,
    te(e, n, t, l),
    n.child
}
var _l = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function Pl(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function qa(e, n) {
    return {
        baseLanes: e.baseLanes | n,
        cachePool: null,
        transitions: e.transitions
    }
}
function Ac(e, n, t) {
    var l, u = n.pendingProps, r = I.current, o = !1, a = (128 & n.flags) !== 0;
    if ((l = a) || (l = (e === null || e.memoizedState !== null) && (2 & r) !== 0),
    l ? (o = !0,
    n.flags &= -129) : e !== null && e.memoizedState === null || (r |= 1),
    O(I, 1 & r),
    e === null)
        return Dr(n),
        e = n.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? ((1 & n.mode) === 0 ? n.lanes = 1 : e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824,
        null) : (r = u.children,
        e = u.fallback,
        o ? (u = n.mode,
        o = n.child,
        r = {
            mode: "hidden",
            children: r
        },
        (1 & u) === 0 && o !== null ? (o.childLanes = 0,
        o.pendingProps = r) : o = ou(r, u, 0, null),
        e = Sn(e, u, t, null),
        o.return = n,
        e.return = n,
        o.sibling = e,
        n.child = o,
        n.child.memoizedState = Pl(t),
        n.memoizedState = _l,
        e) : Ir(n, r));
    if (r = e.memoizedState,
    r !== null) {
        if (l = r.dehydrated,
        l !== null) {
            if (a)
                return 256 & n.flags ? (n.flags &= -257,
                Sl(e, n, t, Error(h(422)))) : n.memoizedState !== null ? (n.child = e.child,
                n.flags |= 128,
                null) : (o = u.fallback,
                r = n.mode,
                u = ou({
                    mode: "visible",
                    children: u.children
                }, r, 0, null),
                o = Sn(o, r, t, null),
                o.flags |= 2,
                u.return = n,
                o.return = n,
                u.sibling = o,
                n.child = u,
                (1 & n.mode) !== 0 && tt(n, e.child, null, t),
                n.child.memoizedState = Pl(t),
                n.memoizedState = _l,
                o);
            if ((1 & n.mode) === 0)
                n = Sl(e, n, t, null);
            else if (l.data === "$!")
                n = Sl(e, n, t, Error(h(419)));
            else if (u = (t & e.childLanes) !== 0,
            ae || u) {
                if (u = H,
                u !== null) {
                    switch (t & -t) {
                    case 4:
                        o = 2;
                        break;
                    case 16:
                        o = 8;
                        break;
                    case 64:
                    case 128:
                    case 256:
                    case 512:
                    case 1024:
                    case 2048:
                    case 4096:
                    case 8192:
                    case 16384:
                    case 32768:
                    case 65536:
                    case 131072:
                    case 262144:
                    case 524288:
                    case 1048576:
                    case 2097152:
                    case 4194304:
                    case 8388608:
                    case 16777216:
                    case 33554432:
                    case 67108864:
                        o = 32;
                        break;
                    case 536870912:
                        o = 268435456;
                        break;
                    default:
                        o = 0
                    }
                    u = (o & (u.suspendedLanes | t)) !== 0 ? 0 : o,
                    u !== 0 && u !== r.retryLane && (r.retryLane = u,
                    we(e, u, -1))
                }
                Fo(),
                n = Sl(e, n, t, Error(h(421)))
            } else
                l.data === "$?" ? (n.flags |= 128,
                n.child = e.child,
                n = Ed.bind(null, e),
                l._reactRetry = n,
                n = null) : (t = r.treeContext,
                oe = We(l.nextSibling),
                de = n,
                x = !0,
                De = null,
                t !== null && (ye[be++] = Qe,
                ye[be++] = He,
                ye[be++] = Fn,
                Qe = t.id,
                He = t.overflow,
                Fn = n),
                n = Ir(n, n.pendingProps.children),
                n.flags |= 4096);
            return n
        }
        return o ? (u = Ya(e, n, u.children, u.fallback, t),
        o = n.child,
        r = e.child.memoizedState,
        o.memoizedState = r === null ? Pl(t) : qa(r, t),
        o.childLanes = e.childLanes & ~t,
        n.memoizedState = _l,
        u) : (t = Ka(e, n, u.children, t),
        n.memoizedState = null,
        t)
    }
    return o ? (u = Ya(e, n, u.children, u.fallback, t),
    o = n.child,
    r = e.child.memoizedState,
    o.memoizedState = r === null ? Pl(t) : qa(r, t),
    o.childLanes = e.childLanes & ~t,
    n.memoizedState = _l,
    u) : (t = Ka(e, n, u.children, t),
    n.memoizedState = null,
    t)
}
function Ir(e, n) {
    return n = ou({
        mode: "visible",
        children: n
    }, e.mode, 0, null),
    n.return = e,
    e.child = n
}
function Ka(e, n, t, l) {
    var u = e.child;
    return e = u.sibling,
    t = mn(u, {
        mode: "visible",
        children: t
    }),
    (1 & n.mode) === 0 && (t.lanes = l),
    t.return = n,
    t.sibling = null,
    e !== null && (l = n.deletions,
    l === null ? (n.deletions = [e],
    n.flags |= 16) : l.push(e)),
    n.child = t
}
function Ya(e, n, t, l, u) {
    var r = n.mode;
    e = e.child;
    var o = e.sibling
      , a = {
        mode: "hidden",
        children: t
    };
    return (1 & r) === 0 && n.child !== e ? (t = n.child,
    t.childLanes = 0,
    t.pendingProps = a,
    n.deletions = null) : (t = mn(e, a),
    t.subtreeFlags = 14680064 & e.subtreeFlags),
    o !== null ? l = mn(o, l) : (l = Sn(l, r, u, null),
    l.flags |= 2),
    l.return = n,
    t.return = n,
    t.sibling = l,
    n.child = t,
    l
}
function Sl(e, n, t, l) {
    return l !== null && fo(l),
    tt(n, e.child, null, t),
    e = Ir(n, n.pendingProps.children),
    e.flags |= 2,
    n.memoizedState = null,
    e
}
function Xa(e, n, t) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n),
    Tr(e.return, n, t)
}
function Xu(e, n, t, l, u) {
    var r = e.memoizedState;
    r === null ? e.memoizedState = {
        isBackwards: n,
        rendering: null,
        renderingStartTime: 0,
        last: l,
        tail: t,
        tailMode: u
    } : (r.isBackwards = n,
    r.rendering = null,
    r.renderingStartTime = 0,
    r.last = l,
    r.tail = t,
    r.tailMode = u)
}
function Vc(e, n, t) {
    var l = n.pendingProps
      , u = l.revealOrder
      , r = l.tail;
    if (te(e, n, l.children, t),
    l = I.current,
    (2 & l) !== 0)
        l = 1 & l | 2,
        n.flags |= 128;
    else {
        if (e !== null && (128 & e.flags) !== 0)
            e: for (e = n.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && Xa(e, t, n);
                else if (e.tag === 19)
                    Xa(e, t, n);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === n)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === n)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        l &= 1
    }
    if (O(I, l),
    (1 & n.mode) === 0)
        n.memoizedState = null;
    else
        switch (u) {
        case "forwards":
            for (t = n.child,
            u = null; t !== null; )
                e = t.alternate,
                e !== null && Jl(e) === null && (u = t),
                t = t.sibling;
            t = u,
            t === null ? (u = n.child,
            n.child = null) : (u = t.sibling,
            t.sibling = null),
            Xu(n, !1, u, t, r);
            break;
        case "backwards":
            for (t = null,
            u = n.child,
            n.child = null; u !== null; ) {
                if (e = u.alternate,
                e !== null && Jl(e) === null) {
                    n.child = u;
                    break
                }
                e = u.sibling,
                u.sibling = t,
                t = u,
                u = e
            }
            Xu(n, !0, t, null, r);
            break;
        case "together":
            Xu(n, !1, null, null, void 0);
            break;
        default:
            n.memoizedState = null
        }
    return n.child
}
function Ke(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies),
    Cn |= n.lanes,
    (t & n.childLanes) === 0)
        return null;
    if (e !== null && n.child !== e.child)
        throw Error(h(153));
    if (n.child !== null) {
        for (e = n.child,
        t = mn(e, e.pendingProps),
        n.child = t,
        t.return = n; e.sibling !== null; )
            e = e.sibling,
            t = t.sibling = mn(e, e.pendingProps),
            t.return = n;
        t.sibling = null
    }
    return n.child
}
function fd(e, n, t) {
    switch (n.tag) {
    case 3:
        Bc(n),
        nt();
        break;
    case 5:
        fc(n);
        break;
    case 1:
        ce(n.type) && ql(n);
        break;
    case 4:
        po(n, n.stateNode.containerInfo);
        break;
    case 10:
        var l = n.type._context
          , u = n.memoizedProps.value;
        O(Kl, l._currentValue),
        l._currentValue = u;
        break;
    case 13:
        if (l = n.memoizedState,
        l !== null)
            return l.dehydrated !== null ? (O(I, 1 & I.current),
            n.flags |= 128,
            null) : (t & n.child.childLanes) !== 0 ? Ac(e, n, t) : (O(I, 1 & I.current),
            e = Ke(e, n, t),
            e !== null ? e.sibling : null);
        O(I, 1 & I.current);
        break;
    case 19:
        if (l = (t & n.childLanes) !== 0,
        (128 & e.flags) !== 0) {
            if (l)
                return Vc(e, n, t);
            n.flags |= 128
        }
        if (u = n.memoizedState,
        u !== null && (u.rendering = null,
        u.tail = null,
        u.lastEffect = null),
        O(I, I.current),
        l)
            break;
        return null;
    case 22:
    case 23:
        return n.lanes = 0,
        Uc(e, n, t)
    }
    return Ke(e, n, t)
}
function dd(e, n) {
    switch (so(n),
    n.tag) {
    case 1:
        return ce(n.type) && jl(),
        e = n.flags,
        65536 & e ? (n.flags = -65537 & e | 128,
        n) : null;
    case 3:
        return lt(),
        M(ie),
        M(ne),
        ho(),
        e = n.flags,
        (65536 & e) !== 0 && (128 & e) === 0 ? (n.flags = -65537 & e | 128,
        n) : null;
    case 5:
        return mo(n),
        null;
    case 13:
        if (M(I),
        e = n.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (n.alternate === null)
                throw Error(h(340));
            nt()
        }
        return e = n.flags,
        65536 & e ? (n.flags = -65537 & e | 128,
        n) : null;
    case 19:
        return M(I),
        null;
    case 4:
        return lt(),
        null;
    case 10:
        return ao(n.type._context),
        null;
    case 22:
    case 23:
        return To(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var Tl = !1
  , ee = !1
  , pd = typeof WeakSet == "function" ? WeakSet : Set
  , w = null;
function $n(e, n) {
    var t = e.ref;
    if (t !== null)
        if (typeof t == "function")
            try {
                t(null)
            } catch (l) {
                N(e, n, l)
            }
        else
            t.current = null
}
function Wc(e, n, t) {
    try {
        t()
    } catch (l) {
        N(e, n, l)
    }
}
var Ga = !1;
function md(e, n) {
    if (kr = Wl,
    e = qi(),
    uo(e)) {
        if ("selectionStart"in e)
            var t = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                t = (t = e.ownerDocument) && t.defaultView || F;
                var l = t.getSelection && t.getSelection();
                if (l && l.rangeCount !== 0) {
                    t = l.anchorNode;
                    var u = l.anchorOffset
                      , r = l.focusNode;
                    l = l.focusOffset;
                    try {
                        t.nodeType,
                        r.nodeType
                    } catch {
                        t = null;
                        break e
                    }
                    var o = 0
                      , a = -1
                      , i = -1
                      , f = 0
                      , m = 0
                      , b = e
                      , p = null;
                    n: for (; ; ) {
                        for (var v; b !== t || u !== 0 && b.nodeType !== 3 || (a = o + u),
                        b !== r || l !== 0 && b.nodeType !== 3 || (i = o + l),
                        b.nodeType === 3 && (o += b.nodeValue.length),
                        (v = b.firstChild) !== null; )
                            p = b,
                            b = v;
                        for (; ; ) {
                            if (b === e)
                                break n;
                            if (p === t && ++f === u && (a = o),
                            p === r && ++m === l && (i = o),
                            (v = b.nextSibling) !== null)
                                break;
                            b = p,
                            p = b.parentNode
                        }
                        b = v
                    }
                    t = a === -1 || i === -1 ? null : {
                        start: a,
                        end: i
                    }
                } else
                    t = null
            }
        t = t || {
            start: 0,
            end: 0
        }
    } else
        t = null;
    for (wr = {
        focusedElem: e,
        selectionRange: t
    },
    Wl = !1,
    w = n; w !== null; )
        if (n = w,
        e = n.child,
        (1028 & n.subtreeFlags) !== 0 && e !== null)
            e.return = n,
            w = e;
        else
            for (; w !== null; ) {
                n = w;
                try {
                    var y = n.alternate;
                    if ((1024 & n.flags) !== 0)
                        switch (n.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (y !== null) {
                                var T = y.memoizedProps
                                  , B = y.memoizedState
                                  , s = n.stateNode
                                  , c = s.getSnapshotBeforeUpdate(n.elementType === n.type ? T : Le(n.type, T), B);
                                s.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var d = n.stateNode.containerInfo;
                            if (d.nodeType === 1)
                                d.textContent = "";
                            else if (d.nodeType === 9) {
                                var g = d.body;
                                g != null && (g.textContent = "")
                            }
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(h(163))
                        }
                } catch (E) {
                    N(n, n.return, E)
                }
                if (e = n.sibling,
                e !== null) {
                    e.return = n.return,
                    w = e;
                    break
                }
                w = n.return
            }
    return y = Ga,
    Ga = !1,
    y
}
function Ot(e, n, t) {
    var l = n.updateQueue;
    if (l = l !== null ? l.lastEffect : null,
    l !== null) {
        var u = l = l.next;
        do {
            if ((u.tag & e) === e) {
                var r = u.destroy;
                u.destroy = void 0,
                r !== void 0 && Wc(n, t, r)
            }
            u = u.next
        } while (u !== l)
    }
}
function gu(e, n) {
    if (n = n.updateQueue,
    n = n !== null ? n.lastEffect : null,
    n !== null) {
        var t = n = n.next;
        do {
            if ((t.tag & e) === e) {
                var l = t.create;
                t.destroy = l()
            }
            t = t.next
        } while (t !== n)
    }
}
function zr(e) {
    var n = e.ref;
    if (n !== null) {
        var t = e.stateNode;
        switch (e.tag) {
        case 5:
            e = t;
            break;
        default:
            e = t
        }
        typeof n == "function" ? n(e) : n.current = e
    }
}
function Qc(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null,
    Qc(n)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (n = e.stateNode,
    n !== null && (delete n[Ue],
    delete n[Ht],
    delete n[Pr],
    delete n[Gf],
    delete n[Zf])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function Za(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Hc(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (2 & e.flags || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(2 & e.flags))
            return e.stateNode
    }
}
function Ur(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6)
        e = e.stateNode,
        n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode,
        n.insertBefore(e, t)) : (n = t,
        n.appendChild(e)),
        t = t._reactRootContainer,
        t != null || n.onclick !== null || (n.onclick = $l));
    else if (l !== 4 && (e = e.child,
    e !== null))
        for (Ur(e, n, t),
        e = e.sibling; e !== null; )
            Ur(e, n, t),
            e = e.sibling
}
function Nr(e, n, t) {
    var l = e.tag;
    if (l === 5 || l === 6)
        e = e.stateNode,
        n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (l !== 4 && (e = e.child,
    e !== null))
        for (Nr(e, n, t),
        e = e.sibling; e !== null; )
            Nr(e, n, t),
            e = e.sibling
}
var K = null
  , Ce = !1;
function Ze(e, n, t) {
    for (t = t.child; t !== null; )
        $c(e, n, t),
        t = t.sibling
}
function $c(e, n, t) {
    if (Ne && typeof Ne.onCommitFiberUnmount == "function")
        try {
            Ne.onCommitFiberUnmount(iu, t)
        } catch {}
    switch (t.tag) {
    case 5:
        ee || $n(t, n);
    case 6:
        var l = K
          , u = Ce;
        K = null,
        Ze(e, n, t),
        K = l,
        Ce = u,
        K !== null && (Ce ? (e = K,
        t = t.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : K.removeChild(t.stateNode));
        break;
    case 18:
        K !== null && (Ce ? (e = K,
        t = t.stateNode,
        e.nodeType === 8 ? Hu(e.parentNode, t) : e.nodeType === 1 && Hu(e, t),
        Bt(e)) : Hu(K, t.stateNode));
        break;
    case 4:
        l = K,
        u = Ce,
        K = t.stateNode.containerInfo,
        Ce = !0,
        Ze(e, n, t),
        K = l,
        Ce = u;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ee && (l = t.updateQueue,
        l !== null && (l = l.lastEffect,
        l !== null))) {
            u = l = l.next;
            do {
                var r = u
                  , o = r.destroy;
                r = r.tag,
                o !== void 0 && ((2 & r) !== 0 || (4 & r) !== 0) && Wc(t, n, o),
                u = u.next
            } while (u !== l)
        }
        Ze(e, n, t);
        break;
    case 1:
        if (!ee && ($n(t, n),
        l = t.stateNode,
        typeof l.componentWillUnmount == "function"))
            try {
                l.props = t.memoizedProps,
                l.state = t.memoizedState,
                l.componentWillUnmount()
            } catch (a) {
                N(t, n, a)
            }
        Ze(e, n, t);
        break;
    case 21:
        Ze(e, n, t);
        break;
    case 22:
        1 & t.mode ? (ee = (l = ee) || t.memoizedState !== null,
        Ze(e, n, t),
        ee = l) : Ze(e, n, t);
        break;
    default:
        Ze(e, n, t)
    }
}
function Ja(e) {
    var n = e.updateQueue;
    if (n !== null) {
        e.updateQueue = null;
        var t = e.stateNode;
        t === null && (t = e.stateNode = new pd),
        n.forEach(function(l) {
            var u = _d.bind(null, e, l);
            t.has(l) || (t.add(l),
            l.then(u, u))
        })
    }
}
function Fe(e, n) {
    var t = n.deletions;
    if (t !== null)
        for (var l = 0; l < t.length; l++) {
            var u = t[l];
            try {
                var r = e
                  , o = n
                  , a = o;
                e: for (; a !== null; ) {
                    switch (a.tag) {
                    case 5:
                        K = a.stateNode,
                        Ce = !1;
                        break e;
                    case 3:
                        K = a.stateNode.containerInfo,
                        Ce = !0;
                        break e;
                    case 4:
                        K = a.stateNode.containerInfo,
                        Ce = !0;
                        break e
                    }
                    a = a.return
                }
                if (K === null)
                    throw Error(h(160));
                $c(r, o, u),
                K = null,
                Ce = !1;
                var i = u.alternate;
                i !== null && (i.return = null),
                u.return = null
            } catch (f) {
                N(u, n, f)
            }
        }
    if (12854 & n.subtreeFlags)
        for (n = n.child; n !== null; )
            jc(n, e),
            n = n.sibling
}
function jc(e, n) {
    var t = e.alternate
      , l = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (Fe(n, e),
        Ie(e),
        4 & l) {
            try {
                Ot(3, e, e.return),
                gu(3, e)
            } catch (y) {
                N(e, e.return, y)
            }
            try {
                Ot(5, e, e.return)
            } catch (y) {
                N(e, e.return, y)
            }
        }
        break;
    case 1:
        Fe(n, e),
        Ie(e),
        512 & l && t !== null && $n(t, t.return);
        break;
    case 5:
        if (Fe(n, e),
        Ie(e),
        512 & l && t !== null && $n(t, t.return),
        32 & e.flags) {
            var u = e.stateNode;
            try {
                It(u, "")
            } catch (y) {
                N(e, e.return, y)
            }
        }
        if (4 & l && (u = e.stateNode,
        u != null)) {
            var r = e.memoizedProps
              , o = t !== null ? t.memoizedProps : r
              , a = e.type
              , i = e.updateQueue;
            if (e.updateQueue = null,
            i !== null)
                try {
                    a === "input" && r.type === "radio" && r.name != null && mi(u, r),
                    sr(a, o);
                    var f = sr(a, r);
                    for (o = 0; o < i.length; o += 2) {
                        var m = i[o]
                          , b = i[o + 1];
                        m === "style" ? vi(u, b) : m === "dangerouslySetInnerHTML" ? yi(u, b) : m === "children" ? It(u, b) : $r(u, m, b, f)
                    }
                    switch (a) {
                    case "input":
                        rr(u, r);
                        break;
                    case "textarea":
                        hi(u, r);
                        break;
                    case "select":
                        var p = u._wrapperState.wasMultiple;
                        u._wrapperState.wasMultiple = !!r.multiple;
                        var v = r.value;
                        v != null ? qn(u, !!r.multiple, v, !1) : p !== !!r.multiple && (r.defaultValue != null ? qn(u, !!r.multiple, r.defaultValue, !0) : qn(u, !!r.multiple, r.multiple ? [] : "", !1))
                    }
                    u[Ht] = r
                } catch (y) {
                    N(e, e.return, y)
                }
        }
        break;
    case 6:
        if (Fe(n, e),
        Ie(e),
        4 & l) {
            if (e.stateNode === null)
                throw Error(h(162));
            f = e.stateNode,
            m = e.memoizedProps;
            try {
                f.nodeValue = m
            } catch (y) {
                N(e, e.return, y)
            }
        }
        break;
    case 3:
        if (Fe(n, e),
        Ie(e),
        4 & l && t !== null && t.memoizedState.isDehydrated)
            try {
                Bt(n.containerInfo)
            } catch (y) {
                N(e, e.return, y)
            }
        break;
    case 4:
        Fe(n, e),
        Ie(e);
        break;
    case 13:
        Fe(n, e),
        Ie(e),
        f = e.child,
        8192 & f.flags && f.memoizedState !== null && (f.alternate === null || f.alternate.memoizedState === null) && (Po = A()),
        4 & l && Ja(e);
        break;
    case 22:
        if (f = t !== null && t.memoizedState !== null,
        1 & e.mode ? (ee = (m = ee) || f,
        Fe(n, e),
        ee = m) : Fe(n, e),
        Ie(e),
        8192 & l) {
            m = e.memoizedState !== null;
            e: for (b = null,
            p = e; ; ) {
                if (p.tag === 5) {
                    if (b === null) {
                        b = p;
                        try {
                            u = p.stateNode,
                            m ? (r = u.style,
                            typeof r.setProperty == "function" ? r.setProperty("display", "none", "important") : r.display = "none") : (a = p.stateNode,
                            i = p.memoizedProps.style,
                            o = i != null && i.hasOwnProperty("display") ? i.display : null,
                            a.style.display = bi("display", o))
                        } catch (y) {
                            N(e, e.return, y)
                        }
                    }
                } else if (p.tag === 6) {
                    if (b === null)
                        try {
                            p.stateNode.nodeValue = m ? "" : p.memoizedProps
                        } catch (y) {
                            N(e, e.return, y)
                        }
                } else if ((p.tag !== 22 && p.tag !== 23 || p.memoizedState === null || p === e) && p.child !== null) {
                    p.child.return = p,
                    p = p.child;
                    continue
                }
                if (p === e)
                    break e;
                for (; p.sibling === null; ) {
                    if (p.return === null || p.return === e)
                        break e;
                    b === p && (b = null),
                    p = p.return
                }
                b === p && (b = null),
                p.sibling.return = p.return,
                p = p.sibling
            }
            if (m && !f && (1 & e.mode) !== 0)
                for (w = e,
                e = e.child; e !== null; ) {
                    for (f = w = e; w !== null; ) {
                        switch (m = w,
                        b = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            Ot(4, m, m.return);
                            break;
                        case 1:
                            if ($n(m, m.return),
                            r = m.stateNode,
                            typeof r.componentWillUnmount == "function") {
                                p = m,
                                v = m.return;
                                try {
                                    u = p,
                                    r.props = u.memoizedProps,
                                    r.state = u.memoizedState,
                                    r.componentWillUnmount()
                                } catch (y) {
                                    N(p, v, y)
                                }
                            }
                            break;
                        case 5:
                            $n(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                ni(f);
                                continue
                            }
                        }
                        b !== null ? (b.return = m,
                        w = b) : ni(f)
                    }
                    e = e.sibling
                }
        }
        break;
    case 19:
        Fe(n, e),
        Ie(e),
        4 & l && Ja(e);
        break;
    case 21:
        break;
    default:
        Fe(n, e),
        Ie(e)
    }
}
function Ie(e) {
    var n = e.flags;
    if (2 & n) {
        try {
            e: {
                for (var t = e.return; t !== null; ) {
                    if (Hc(t)) {
                        var l = t;
                        break e
                    }
                    t = t.return
                }
                throw Error(h(160))
            }
            switch (l.tag) {
            case 5:
                var u = l.stateNode;
                32 & l.flags && (It(u, ""),
                l.flags &= -33);
                var r = Za(e);
                Nr(e, r, u);
                break;
            case 3:
            case 4:
                var o = l.stateNode.containerInfo
                  , a = Za(e);
                Ur(e, a, o);
                break;
            default:
                throw Error(h(161))
            }
        } catch (i) {
            N(e, e.return, i)
        }
        e.flags &= -3
    }
    4096 & n && (e.flags &= -4097)
}
function hd(e, n, t) {
    w = e,
    qc(e, n, t)
}
function qc(e, n, t) {
    for (var l = (1 & e.mode) !== 0; w !== null; ) {
        var u = w
          , r = u.child;
        if (u.tag === 22 && l) {
            var o = u.memoizedState !== null || Tl;
            if (!o) {
                var a = u.alternate
                  , i = a !== null && a.memoizedState !== null || ee;
                a = Tl;
                var f = ee;
                if (Tl = o,
                (ee = i) && !f)
                    for (w = u; w !== null; )
                        o = w,
                        i = o.child,
                        o.tag === 22 && o.memoizedState !== null ? ti(u) : i !== null ? (i.return = o,
                        w = i) : ti(u);
                for (; r !== null; )
                    w = r,
                    qc(r, n, t),
                    r = r.sibling;
                w = u,
                Tl = a,
                ee = f
            }
            ei(e, n, t)
        } else
            (8772 & u.subtreeFlags) !== 0 && r !== null ? (r.return = u,
            w = r) : ei(e, n, t)
    }
}
function ei(e) {
    for (; w !== null; ) {
        var n = w;
        if ((8772 & n.flags) !== 0) {
            var t = n.alternate;
            try {
                if ((8772 & n.flags) !== 0)
                    switch (n.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ee || gu(5, n);
                        break;
                    case 1:
                        var l = n.stateNode;
                        if (4 & n.flags && !ee)
                            if (t === null)
                                l.componentDidMount();
                            else {
                                var u = n.elementType === n.type ? t.memoizedProps : Le(n.type, t.memoizedProps);
                                l.componentDidUpdate(u, t.memoizedState, l.__reactInternalSnapshotBeforeUpdate)
                            }
                        var r = n.updateQueue;
                        r !== null && Ra(n, r, l);
                        break;
                    case 3:
                        var o = n.updateQueue;
                        if (o !== null) {
                            if (t = null,
                            n.child !== null)
                                switch (n.child.tag) {
                                case 5:
                                    t = n.child.stateNode;
                                    break;
                                case 1:
                                    t = n.child.stateNode
                                }
                            Ra(n, o, t)
                        }
                        break;
                    case 5:
                        var a = n.stateNode;
                        if (t === null && 4 & n.flags) {
                            t = a;
                            var i = n.memoizedProps;
                            switch (n.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                i.autoFocus && t.focus();
                                break;
                            case "img":
                                i.src && (t.src = i.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (n.memoizedState === null) {
                            var f = n.alternate;
                            if (f !== null) {
                                var m = f.memoizedState;
                                if (m !== null) {
                                    var b = m.dehydrated;
                                    b !== null && Bt(b)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                        break;
                    default:
                        throw Error(h(163))
                    }
                ee || 512 & n.flags && zr(n)
            } catch (p) {
                N(n, n.return, p)
            }
        }
        if (n === e) {
            w = null;
            break
        }
        if (t = n.sibling,
        t !== null) {
            t.return = n.return,
            w = t;
            break
        }
        w = n.return
    }
}
function ni(e) {
    for (; w !== null; ) {
        var n = w;
        if (n === e) {
            w = null;
            break
        }
        var t = n.sibling;
        if (t !== null) {
            t.return = n.return,
            w = t;
            break
        }
        w = n.return
    }
}
function ti(e) {
    for (; w !== null; ) {
        var n = w;
        try {
            switch (n.tag) {
            case 0:
            case 11:
            case 15:
                var t = n.return;
                try {
                    gu(4, n)
                } catch (i) {
                    N(n, t, i)
                }
                break;
            case 1:
                var l = n.stateNode;
                if (typeof l.componentDidMount == "function") {
                    var u = n.return;
                    try {
                        l.componentDidMount()
                    } catch (i) {
                        N(n, u, i)
                    }
                }
                var r = n.return;
                try {
                    zr(n)
                } catch (i) {
                    N(n, r, i)
                }
                break;
            case 5:
                var o = n.return;
                try {
                    zr(n)
                } catch (i) {
                    N(n, o, i)
                }
            }
        } catch (i) {
            N(n, n.return, i)
        }
        if (n === e) {
            w = null;
            break
        }
        var a = n.sibling;
        if (a !== null) {
            a.return = n.return,
            w = a;
            break
        }
        w = n.return
    }
}
var gd = Math.ceil
  , tu = Ye.ReactCurrentDispatcher
  , Eo = Ye.ReactCurrentOwner
  , ke = Ye.ReactCurrentBatchConfig
  , L = 0
  , H = null
  , V = null
  , Y = 0
  , fe = 0
  , jn = gn(0)
  , Q = 0
  , Xt = null
  , Cn = 0
  , yu = 0
  , _o = 0
  , Rt = null
  , re = null
  , Po = 0
  , ut = 1 / 0
  , Ae = null
  , lu = !1
  , Br = null
  , sn = null
  , Fl = !1
  , un = null
  , uu = 0
  , Mt = 0
  , Ar = null
  , xl = -1
  , Il = 0;
function le() {
    return (6 & L) !== 0 ? A() : xl !== -1 ? xl : xl = A()
}
function fn(e) {
    return (1 & e.mode) === 0 ? 1 : (2 & L) !== 0 && Y !== 0 ? Y & -Y : ed.transition !== null ? (Il === 0 && (Il = Oi()),
    Il) : (e = D,
    e !== 0 || (e = F.event,
    e = e === void 0 ? 16 : Ni(e.type)),
    e)
}
function we(e, n, t) {
    if (50 < Mt)
        throw Mt = 0,
        Ar = null,
        Error(h(185));
    var l = bu(e, n);
    return l === null ? null : (Gt(l, n, t),
    (2 & L) !== 0 && l === H || (l === H && ((2 & L) === 0 && (yu |= n),
    Q === 4 && tn(l, Y)),
    se(l, t),
    n === 1 && L === 0 && (1 & e.mode) === 0 && (ut = A() + 500,
    pu && yn())),
    l)
}
function bu(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n),
    t = e,
    e = e.return; e !== null; )
        e.childLanes |= n,
        t = e.alternate,
        t !== null && (t.childLanes |= n),
        t = e,
        e = e.return;
    return t.tag === 3 ? t.stateNode : null
}
function Kc(e) {
    return (H !== null || Oe !== null) && (1 & e.mode) !== 0 && (2 & L) === 0
}
function se(e, n) {
    var t = e.callbackNode;
    nf(e, n);
    var l = Vl(e, e === H ? Y : 0);
    if (l === 0)
        t !== null && aa(t),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (n = l & -l,
    e.callbackPriority !== n) {
        if (t != null && aa(t),
        n === 1)
            e.tag === 0 ? Jf(li.bind(null, e)) : lc(li.bind(null, e)),
            Yf(function() {
                L === 0 && yn()
            }),
            t = null;
        else {
            switch (Ri(l)) {
            case 1:
                t = Xr;
                break;
            case 4:
                t = Ci;
                break;
            case 16:
                t = Al;
                break;
            case 536870912:
                t = Di;
                break;
            default:
                t = Al
            }
            t = ts(t, Yc.bind(null, e))
        }
        e.callbackPriority = n,
        e.callbackNode = t
    }
}
function Yc(e, n) {
    if (xl = -1,
    Il = 0,
    (6 & L) !== 0)
        throw Error(h(327));
    var t = e.callbackNode;
    if (Zn() && e.callbackNode !== t)
        return null;
    var l = Vl(e, e === H ? Y : 0);
    if (l === 0)
        return null;
    if ((30 & l) !== 0 || (l & e.expiredLanes) !== 0 || n)
        n = ru(e, l);
    else {
        n = l;
        var u = L;
        L |= 2;
        var r = Gc();
        H === e && Y === n || (Ae = null,
        ut = A() + 500,
        Pn(e, n));
        do
            try {
                vd();
                break
            } catch (a) {
                Xc(e, a)
            }
        while (1);
        oo(),
        tu.current = r,
        L = u,
        V !== null ? n = 0 : (H = null,
        Y = 0,
        n = Q)
    }
    if (n !== 0) {
        if (n === 2 && (u = hr(e),
        u !== 0 && (l = u,
        n = Vr(e, u))),
        n === 1)
            throw t = Xt,
            Pn(e, 0),
            tn(e, l),
            se(e, A()),
            t;
        if (n === 6)
            tn(e, l);
        else {
            if (u = e.current.alternate,
            (30 & l) === 0 && !yd(u) && (n = ru(e, l),
            n === 2 && (r = hr(e),
            r !== 0 && (l = r,
            n = Vr(e, r))),
            n === 1))
                throw t = Xt,
                Pn(e, 0),
                tn(e, l),
                se(e, A()),
                t;
            switch (e.finishedWork = u,
            e.finishedLanes = l,
            n) {
            case 0:
            case 1:
                throw Error(h(345));
            case 2:
                wn(e, re, Ae);
                break;
            case 3:
                if (tn(e, l),
                (130023424 & l) === l && (n = Po + 500 - A(),
                10 < n)) {
                    if (Vl(e, 0) !== 0)
                        break;
                    if (u = e.suspendedLanes,
                    (u & l) !== l) {
                        le(),
                        e.pingedLanes |= e.suspendedLanes & u;
                        break
                    }
                    e.timeoutHandle = _r(wn.bind(null, e, re, Ae), n);
                    break
                }
                wn(e, re, Ae);
                break;
            case 4:
                if (tn(e, l),
                (4194240 & l) === l)
                    break;
                for (n = e.eventTimes,
                u = -1; 0 < l; ) {
                    var o = 31 - Re(l);
                    r = 1 << o,
                    o = n[o],
                    o > u && (u = o),
                    l &= ~r
                }
                if (l = u,
                l = A() - l,
                l = (120 > l ? 120 : 480 > l ? 480 : 1080 > l ? 1080 : 1920 > l ? 1920 : 3e3 > l ? 3e3 : 4320 > l ? 4320 : 1960 * gd(l / 1960)) - l,
                10 < l) {
                    e.timeoutHandle = _r(wn.bind(null, e, re, Ae), l);
                    break
                }
                wn(e, re, Ae);
                break;
            case 5:
                wn(e, re, Ae);
                break;
            default:
                throw Error(h(329))
            }
        }
    }
    return se(e, A()),
    e.callbackNode === t ? Yc.bind(null, e) : null
}
function Vr(e, n) {
    var t = Rt;
    return e.current.memoizedState.isDehydrated && (Pn(e, n).flags |= 256),
    e = ru(e, n),
    e !== 2 && (n = re,
    re = t,
    n !== null && Wr(n)),
    e
}
function Wr(e) {
    re === null ? re = e : re.push.apply(re, e)
}
function yd(e) {
    for (var n = e; ; ) {
        if (16384 & n.flags) {
            var t = n.updateQueue;
            if (t !== null && (t = t.stores,
            t !== null))
                for (var l = 0; l < t.length; l++) {
                    var u = t[l]
                      , r = u.getSnapshot;
                    u = u.value;
                    try {
                        if (!Me(r(), u))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (t = n.child,
        16384 & n.subtreeFlags && t !== null)
            t.return = n,
            n = t;
        else {
            if (n === e)
                break;
            for (; n.sibling === null; ) {
                if (n.return === null || n.return === e)
                    return !0;
                n = n.return
            }
            n.sibling.return = n.return,
            n = n.sibling
        }
    }
    return !0
}
function tn(e, n) {
    for (n &= ~_o,
    n &= ~yu,
    e.suspendedLanes |= n,
    e.pingedLanes &= ~n,
    e = e.expirationTimes; 0 < n; ) {
        var t = 31 - Re(n)
          , l = 1 << t;
        e[t] = -1,
        n &= ~l
    }
}
function li(e) {
    if ((6 & L) !== 0)
        throw Error(h(327));
    Zn();
    var n = Vl(e, 0);
    if ((1 & n) === 0)
        return se(e, A()),
        null;
    var t = ru(e, n);
    if (e.tag !== 0 && t === 2) {
        var l = hr(e);
        l !== 0 && (n = l,
        t = Vr(e, l))
    }
    if (t === 1)
        throw t = Xt,
        Pn(e, 0),
        tn(e, n),
        se(e, A()),
        t;
    if (t === 6)
        throw Error(h(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = n,
    wn(e, re, Ae),
    se(e, A()),
    null
}
function So(e, n) {
    var t = L;
    L |= 1;
    try {
        return e(n)
    } finally {
        L = t,
        L === 0 && (ut = A() + 500,
        pu && yn())
    }
}
function Dn(e) {
    un !== null && un.tag === 0 && (6 & L) === 0 && Zn();
    var n = L;
    L |= 1;
    var t = ke.transition
      , l = D;
    try {
        if (ke.transition = null,
        D = 1,
        e)
            return e()
    } finally {
        D = l,
        ke.transition = t,
        L = n,
        (6 & L) === 0 && yn()
    }
}
function To() {
    fe = jn.current,
    M(jn)
}
function Pn(e, n) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1,
    Kf(t)),
    V !== null)
        for (t = V.return; t !== null; ) {
            var l = t;
            switch (so(l),
            l.tag) {
            case 1:
                l = l.type.childContextTypes,
                l != null && jl();
                break;
            case 3:
                lt(),
                M(ie),
                M(ne),
                ho();
                break;
            case 5:
                mo(l);
                break;
            case 4:
                lt();
                break;
            case 13:
                M(I);
                break;
            case 19:
                M(I);
                break;
            case 10:
                ao(l.type._context);
                break;
            case 22:
            case 23:
                To()
            }
            t = t.return
        }
    if (H = e,
    V = e = mn(e.current, null),
    Y = fe = n,
    Q = 0,
    Xt = null,
    _o = yu = Cn = 0,
    re = Rt = null,
    Oe !== null) {
        for (n = 0; n < Oe.length; n++)
            if (t = Oe[n],
            l = t.interleaved,
            l !== null) {
                t.interleaved = null;
                var u = l.next
                  , r = t.pending;
                if (r !== null) {
                    var o = r.next;
                    r.next = u,
                    l.next = o
                }
                t.pending = l
            }
        Oe = null
    }
    return e
}
function Xc(e, n) {
    do {
        var t = V;
        try {
            if (oo(),
            Rl.current = nu,
            eu) {
                for (var l = z.memoizedState; l !== null; ) {
                    var u = l.queue;
                    u !== null && (u.pending = null),
                    l = l.next
                }
                eu = !1
            }
            if (Ln = 0,
            q = W = z = null,
            Dt = !1,
            qt = 0,
            Eo.current = null,
            t === null || t.return === null) {
                Q = 1,
                Xt = n,
                V = null;
                break
            }
            e: {
                var r = e
                  , o = t.return
                  , a = t
                  , i = n;
                if (n = Y,
                a.flags |= 32768,
                i !== null && typeof i == "object" && typeof i.then == "function") {
                    var f = i
                      , m = a
                      , b = m.tag;
                    if ((1 & m.mode) === 0 && (b === 0 || b === 11 || b === 15)) {
                        var p = m.alternate;
                        p ? (m.updateQueue = p.updateQueue,
                        m.memoizedState = p.memoizedState,
                        m.lanes = p.lanes) : (m.updateQueue = null,
                        m.memoizedState = null)
                    }
                    var v = Va(o);
                    if (v !== null) {
                        v.flags &= -257,
                        Wa(v, o, a, r, n),
                        1 & v.mode && Aa(r, f, n),
                        n = v,
                        i = f;
                        var y = n.updateQueue;
                        if (y === null) {
                            var T = new Set;
                            T.add(i),
                            n.updateQueue = T
                        } else
                            y.add(i);
                        break e
                    }
                    if ((1 & n) === 0) {
                        Aa(r, f, n),
                        Fo();
                        break e
                    }
                    i = Error(h(426))
                } else if (x && 1 & a.mode) {
                    var B = Va(o);
                    if (B !== null) {
                        (65536 & B.flags) === 0 && (B.flags |= 256),
                        Wa(B, o, a, r, n),
                        fo(i);
                        break e
                    }
                }
                r = i,
                Q !== 4 && (Q = 2),
                Rt === null ? Rt = [r] : Rt.push(r),
                i = wo(i, a),
                a = o;
                do {
                    switch (a.tag) {
                    case 3:
                        a.flags |= 65536,
                        n &= -n,
                        a.lanes |= n;
                        var s = Oc(a, i, n);
                        Oa(a, s);
                        break e;
                    case 1:
                        r = i;
                        var c = a.type
                          , d = a.stateNode;
                        if ((128 & a.flags) === 0 && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (sn === null || !sn.has(d)))) {
                            a.flags |= 65536,
                            n &= -n,
                            a.lanes |= n;
                            var g = Rc(a, r, n);
                            Oa(a, g);
                            break e
                        }
                    }
                    a = a.return
                } while (a !== null)
            }
            Jc(t)
        } catch (E) {
            n = E,
            V === t && t !== null && (V = t = t.return);
            continue
        }
        break
    } while (1)
}
function Gc() {
    var e = tu.current;
    return tu.current = nu,
    e === null ? nu : e
}
function Fo() {
    Q !== 0 && Q !== 3 && Q !== 2 || (Q = 4),
    H === null || (268435455 & Cn) === 0 && (268435455 & yu) === 0 || tn(H, Y)
}
function ru(e, n) {
    var t = L;
    L |= 2;
    var l = Gc();
    H === e && Y === n || (Ae = null,
    Pn(e, n));
    do
        try {
            bd();
            break
        } catch (u) {
            Xc(e, u)
        }
    while (1);
    if (oo(),
    L = t,
    tu.current = l,
    V !== null)
        throw Error(h(261));
    return H = null,
    Y = 0,
    Q
}
function bd() {
    for (; V !== null; )
        Zc(V)
}
function vd() {
    for (; V !== null && !js(); )
        Zc(V)
}
function Zc(e) {
    var n = ns(e.alternate, e, fe);
    e.memoizedProps = e.pendingProps,
    n === null ? Jc(e) : V = n,
    Eo.current = null
}
function Jc(e) {
    var n = e;
    do {
        var t = n.alternate;
        if (e = n.return,
        (32768 & n.flags) === 0) {
            if (t = cd(t, n, fe),
            t !== null) {
                V = t;
                return
            }
        } else {
            if (t = dd(t, n),
            t !== null) {
                t.flags &= 32767,
                V = t;
                return
            }
            if (e === null) {
                Q = 6,
                V = null;
                return
            }
            e.flags |= 32768,
            e.subtreeFlags = 0,
            e.deletions = null
        }
        if (n = n.sibling,
        n !== null) {
            V = n;
            return
        }
        V = n = e
    } while (n !== null);
    Q === 0 && (Q = 5)
}
function wn(e, n, t) {
    var l = D
      , u = ke.transition;
    try {
        ke.transition = null,
        D = 1,
        kd(e, n, t, l)
    } finally {
        ke.transition = u,
        D = l
    }
    return null
}
function kd(e, n, t, l) {
    do
        Zn();
    while (un !== null);
    if ((6 & L) !== 0)
        throw Error(h(327));
    t = e.finishedWork;
    var u = e.finishedLanes;
    if (t === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    t === e.current)
        throw Error(h(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var r = t.lanes | t.childLanes;
    if (tf(e, r),
    e === H && (V = H = null,
    Y = 0),
    (2064 & t.subtreeFlags) === 0 && (2064 & t.flags) === 0 || Fl || (Fl = !0,
    ts(Al, function() {
        return Zn(),
        null
    })),
    r = (15990 & t.flags) !== 0,
    (15990 & t.subtreeFlags) !== 0 || r) {
        r = ke.transition,
        ke.transition = null;
        var o = D;
        D = 1;
        var a = L;
        L |= 4,
        Eo.current = null,
        md(e, t),
        jc(t, e),
        Qf(wr),
        Wl = !!kr,
        wr = kr = null,
        e.current = t,
        hd(t, e, u),
        qs(),
        L = a,
        D = o,
        ke.transition = r
    } else
        e.current = t;
    if (Fl && (Fl = !1,
    un = e,
    uu = u),
    r = e.pendingLanes,
    r === 0 && (sn = null),
    Xs(t.stateNode, l),
    se(e, A()),
    n !== null)
        for (l = e.onRecoverableError,
        t = 0; t < n.length; t++)
            l(n[t]);
    if (lu)
        throw lu = !1,
        e = Br,
        Br = null,
        e;
    return (1 & uu) !== 0 && e.tag !== 0 && Zn(),
    r = e.pendingLanes,
    (1 & r) !== 0 ? e === Ar ? Mt++ : (Mt = 0,
    Ar = e) : Mt = 0,
    yn(),
    null
}
function Zn() {
    if (un !== null) {
        var e = Ri(uu)
          , n = ke.transition
          , t = D;
        try {
            if (ke.transition = null,
            D = 16 > e ? 16 : e,
            un === null)
                var l = !1;
            else {
                if (e = un,
                un = null,
                uu = 0,
                (6 & L) !== 0)
                    throw Error(h(331));
                var u = L;
                for (L |= 4,
                w = e.current; w !== null; ) {
                    var r = w
                      , o = r.child;
                    if ((16 & w.flags) !== 0) {
                        var a = r.deletions;
                        if (a !== null) {
                            for (var i = 0; i < a.length; i++) {
                                var f = a[i];
                                for (w = f; w !== null; ) {
                                    var m = w;
                                    switch (m.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        Ot(8, m, r)
                                    }
                                    var b = m.child;
                                    if (b !== null)
                                        b.return = m,
                                        w = b;
                                    else
                                        for (; w !== null; ) {
                                            m = w;
                                            var p = m.sibling
                                              , v = m.return;
                                            if (Qc(m),
                                            m === f) {
                                                w = null;
                                                break
                                            }
                                            if (p !== null) {
                                                p.return = v,
                                                w = p;
                                                break
                                            }
                                            w = v
                                        }
                                }
                            }
                            var y = r.alternate;
                            if (y !== null) {
                                var T = y.child;
                                if (T !== null) {
                                    y.child = null;
                                    do {
                                        var B = T.sibling;
                                        T.sibling = null,
                                        T = B
                                    } while (T !== null)
                                }
                            }
                            w = r
                        }
                    }
                    if ((2064 & r.subtreeFlags) !== 0 && o !== null)
                        o.return = r,
                        w = o;
                    else
                        e: for (; w !== null; ) {
                            if (r = w,
                            (2048 & r.flags) !== 0)
                                switch (r.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    Ot(9, r, r.return)
                                }
                            var s = r.sibling;
                            if (s !== null) {
                                s.return = r.return,
                                w = s;
                                break e
                            }
                            w = r.return
                        }
                }
                var c = e.current;
                for (w = c; w !== null; ) {
                    o = w;
                    var d = o.child;
                    if ((2064 & o.subtreeFlags) !== 0 && d !== null)
                        d.return = o,
                        w = d;
                    else
                        e: for (o = c; w !== null; ) {
                            if (a = w,
                            (2048 & a.flags) !== 0)
                                try {
                                    switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gu(9, a)
                                    }
                                } catch (E) {
                                    N(a, a.return, E)
                                }
                            if (a === o) {
                                w = null;
                                break e
                            }
                            var g = a.sibling;
                            if (g !== null) {
                                g.return = a.return,
                                w = g;
                                break e
                            }
                            w = a.return
                        }
                }
                if (L = u,
                yn(),
                Ne && typeof Ne.onPostCommitFiberRoot == "function")
                    try {
                        Ne.onPostCommitFiberRoot(iu, e)
                    } catch {}
                l = !0
            }
            return l
        } finally {
            D = t,
            ke.transition = n
        }
    }
    return !1
}
function ui(e, n, t) {
    n = wo(t, n),
    n = Oc(e, n, 1),
    cn(e, n),
    n = le(),
    e = bu(e, 1),
    e !== null && (Gt(e, 1, n),
    se(e, n))
}
function N(e, n, t) {
    if (e.tag === 3)
        ui(e, e, t);
    else
        for (; n !== null; ) {
            if (n.tag === 3) {
                ui(n, e, t);
                break
            }
            if (n.tag === 1) {
                var l = n.stateNode;
                if (typeof n.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (sn === null || !sn.has(l))) {
                    e = wo(t, e),
                    e = Rc(n, e, 1),
                    cn(n, e),
                    e = le(),
                    n = bu(n, 1),
                    n !== null && (Gt(n, 1, e),
                    se(n, e));
                    break
                }
            }
            n = n.return
        }
}
function wd(e, n, t) {
    var l = e.pingCache;
    l !== null && l.delete(n),
    n = le(),
    e.pingedLanes |= e.suspendedLanes & t,
    H === e && (Y & t) === t && (Q === 4 || Q === 3 && (130023424 & Y) === Y && 500 > A() - Po ? Pn(e, 0) : _o |= t),
    se(e, n)
}
function es(e, n) {
    n === 0 && ((1 & e.mode) === 0 ? n = 1 : (n = dl,
    dl <<= 1,
    (130023424 & dl) === 0 && (dl = 4194304)));
    var t = le();
    e = bu(e, n),
    e !== null && (Gt(e, n, t),
    se(e, t))
}
function Ed(e) {
    var n = e.memoizedState
      , t = 0;
    n !== null && (t = n.retryLane),
    es(e, t)
}
function _d(e, n) {
    var t = 0;
    switch (e.tag) {
    case 13:
        var l = e.stateNode
          , u = e.memoizedState;
        u !== null && (t = u.retryLane);
        break;
    case 19:
        l = e.stateNode;
        break;
    default:
        throw Error(h(314))
    }
    l !== null && l.delete(n),
    es(e, t)
}
var ns;
ns = function(e, n, t) {
    if (e !== null)
        if (e.memoizedProps !== n.pendingProps || ie.current)
            ae = !0;
        else {
            if ((e.lanes & t) === 0 && (128 & n.flags) === 0)
                return ae = !1,
                fd(e, n, t);
            ae = (131072 & e.flags) !== 0
        }
    else
        ae = !1,
        x && (1048576 & n.flags) !== 0 && ac(n, Zl, n.index);
    switch (n.lanes = 0,
    n.tag) {
    case 2:
        var l = n.type;
        e !== null && (e.alternate = null,
        n.alternate = null,
        n.flags |= 2),
        e = n.pendingProps;
        var u = et(n, ne.current);
        Gn(n, t),
        u = yo(null, n, l, e, u, t);
        var r = bo();
        return n.flags |= 1,
        typeof u == "object" && u !== null && typeof u.render == "function" && u.$$typeof === void 0 ? (n.tag = 1,
        n.memoizedState = null,
        n.updateQueue = null,
        ce(l) ? (r = !0,
        ql(n)) : r = !1,
        n.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null,
        io(n),
        u.updater = mu,
        n.stateNode = u,
        u._reactInternals = n,
        Lr(n, l, e, t),
        n = xr(null, n, l, !0, r, t)) : (n.tag = 0,
        x && r && co(n),
        te(null, n, u, t),
        n = n.child),
        n;
    case 16:
        l = n.elementType;
        e: {
            switch (e !== null && (e.alternate = null,
            n.alternate = null,
            n.flags |= 2),
            e = n.pendingProps,
            u = l._init,
            l = u(l._payload),
            n.type = l,
            u = n.tag = Sd(l),
            e = Le(l, e),
            u) {
            case 0:
                n = Mr(null, n, l, e, t);
                break e;
            case 1:
                n = $a(null, n, l, e, t);
                break e;
            case 11:
                n = Qa(null, n, l, e, t);
                break e;
            case 14:
                n = Ha(null, n, l, Le(l.type, e), t);
                break e
            }
            throw Error(h(306, l, ""))
        }
        return n;
    case 0:
        return l = n.type,
        u = n.pendingProps,
        u = n.elementType === l ? u : Le(l, u),
        Mr(e, n, l, u, t);
    case 1:
        return l = n.type,
        u = n.pendingProps,
        u = n.elementType === l ? u : Le(l, u),
        $a(e, n, l, u, t);
    case 3:
        e: {
            if (Bc(n),
            e === null)
                throw Error(h(387));
            l = n.pendingProps,
            r = n.memoizedState,
            u = r.element,
            uc(e, n),
            Xl(n, l, null, t);
            var o = n.memoizedState;
            if (l = o.element,
            r.isDehydrated) {
                if (r = {
                    element: l,
                    isDehydrated: !1,
                    cache: o.cache,
                    pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                    transitions: o.transitions
                },
                n.updateQueue.baseState = r,
                n.memoizedState = r,
                256 & n.flags) {
                    u = Error(h(423)),
                    n = ja(e, n, l, t, u);
                    break e
                }
                if (l !== u) {
                    u = Error(h(424)),
                    n = ja(e, n, l, t, u);
                    break e
                }
                for (oe = We(n.stateNode.containerInfo.firstChild),
                de = n,
                x = !0,
                De = null,
                t = sc(n, null, l, t),
                n.child = t; t; )
                    t.flags = -3 & t.flags | 4096,
                    t = t.sibling
            } else {
                if (nt(),
                l === u) {
                    n = Ke(e, n, t);
                    break e
                }
                te(e, n, l, t)
            }
            n = n.child
        }
        return n;
    case 5:
        return fc(n),
        e === null && Dr(n),
        l = n.type,
        u = n.pendingProps,
        r = e !== null ? e.memoizedProps : null,
        o = u.children,
        Er(l, u) ? o = null : r !== null && Er(l, r) && (n.flags |= 32),
        Nc(e, n),
        te(e, n, o, t),
        n.child;
    case 6:
        return e === null && Dr(n),
        null;
    case 13:
        return Ac(e, n, t);
    case 4:
        return po(n, n.stateNode.containerInfo),
        l = n.pendingProps,
        e === null ? n.child = tt(n, null, l, t) : te(e, n, l, t),
        n.child;
    case 11:
        return l = n.type,
        u = n.pendingProps,
        u = n.elementType === l ? u : Le(l, u),
        Qa(e, n, l, u, t);
    case 7:
        return te(e, n, n.pendingProps, t),
        n.child;
    case 8:
        return te(e, n, n.pendingProps.children, t),
        n.child;
    case 12:
        return te(e, n, n.pendingProps.children, t),
        n.child;
    case 10:
        e: {
            if (l = n.type._context,
            u = n.pendingProps,
            r = n.memoizedProps,
            o = u.value,
            O(Kl, l._currentValue),
            l._currentValue = o,
            r !== null)
                if (Me(r.value, o)) {
                    if (r.children === u.children && !ie.current) {
                        n = Ke(e, n, t);
                        break e
                    }
                } else
                    for (r = n.child,
                    r !== null && (r.return = n); r !== null; ) {
                        var a = r.dependencies;
                        if (a !== null) {
                            o = r.child;
                            for (var i = a.firstContext; i !== null; ) {
                                if (i.context === l) {
                                    if (r.tag === 1) {
                                        i = $e(-1, t & -t),
                                        i.tag = 2;
                                        var f = r.updateQueue;
                                        if (f !== null) {
                                            f = f.shared;
                                            var m = f.pending;
                                            m === null ? i.next = i : (i.next = m.next,
                                            m.next = i),
                                            f.pending = i
                                        }
                                    }
                                    r.lanes |= t,
                                    i = r.alternate,
                                    i !== null && (i.lanes |= t),
                                    Tr(r.return, t, n),
                                    a.lanes |= t;
                                    break
                                }
                                i = i.next
                            }
                        } else if (r.tag === 10)
                            o = r.type === n.type ? null : r.child;
                        else if (r.tag === 18) {
                            if (o = r.return,
                            o === null)
                                throw Error(h(341));
                            o.lanes |= t,
                            a = o.alternate,
                            a !== null && (a.lanes |= t),
                            Tr(o, t, n),
                            o = r.sibling
                        } else
                            o = r.child;
                        if (o !== null)
                            o.return = r;
                        else
                            for (o = r; o !== null; ) {
                                if (o === n) {
                                    o = null;
                                    break
                                }
                                if (r = o.sibling,
                                r !== null) {
                                    r.return = o.return,
                                    o = r;
                                    break
                                }
                                o = o.return
                            }
                        r = o
                    }
            te(e, n, u.children, t),
            n = n.child
        }
        return n;
    case 9:
        return u = n.type,
        l = n.pendingProps.children,
        Gn(n, t),
        u = Ee(u),
        l = l(u),
        n.flags |= 1,
        te(e, n, l, t),
        n.child;
    case 14:
        return l = n.type,
        u = Le(l, n.pendingProps),
        u = Le(l.type, u),
        Ha(e, n, l, u, t);
    case 15:
        return zc(e, n, n.type, n.pendingProps, t);
    case 17:
        return l = n.type,
        u = n.pendingProps,
        u = n.elementType === l ? u : Le(l, u),
        e !== null && (e.alternate = null,
        n.alternate = null,
        n.flags |= 2),
        n.tag = 1,
        ce(l) ? (e = !0,
        ql(n)) : e = !1,
        Gn(n, t),
        oc(n, l, u),
        Lr(n, l, u, t),
        xr(null, n, l, !0, e, t);
    case 19:
        return Vc(e, n, t);
    case 22:
        return Uc(e, n, t)
    }
    throw Error(h(156, n.tag))
}
;
function ts(e, n) {
    return Li(e, n)
}
function Pd(e, n, t, l) {
    this.tag = e,
    this.key = t,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = n,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = l,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function ve(e, n, t, l) {
    return new Pd(e,n,t,l)
}
function Lo(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Sd(e) {
    if (typeof e == "function")
        return Lo(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === qr)
            return 11;
        if (e === Kr)
            return 14
    }
    return 2
}
function mn(e, n) {
    var t = e.alternate;
    return t === null ? (t = ve(e.tag, n, e.key, e.mode),
    t.elementType = e.elementType,
    t.type = e.type,
    t.stateNode = e.stateNode,
    t.alternate = e,
    e.alternate = t) : (t.pendingProps = n,
    t.type = e.type,
    t.flags = 0,
    t.subtreeFlags = 0,
    t.deletions = null),
    t.flags = 14680064 & e.flags,
    t.childLanes = e.childLanes,
    t.lanes = e.lanes,
    t.child = e.child,
    t.memoizedProps = e.memoizedProps,
    t.memoizedState = e.memoizedState,
    t.updateQueue = e.updateQueue,
    n = e.dependencies,
    t.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
    },
    t.sibling = e.sibling,
    t.index = e.index,
    t.ref = e.ref,
    t
}
function zl(e, n, t, l, u, r) {
    var o = 2;
    if (l = e,
    typeof e == "function")
        Lo(e) && (o = 1);
    else if (typeof e == "string")
        o = 5;
    else
        e: switch (e) {
        case zn:
            return Sn(t.children, u, r, n);
        case jr:
            o = 8,
            u |= 8;
            break;
        case er:
            return e = ve(12, t, n, 2 | u),
            e.elementType = er,
            e.lanes = r,
            e;
        case nr:
            return e = ve(13, t, n, u),
            e.elementType = nr,
            e.lanes = r,
            e;
        case tr:
            return e = ve(19, t, n, u),
            e.elementType = tr,
            e.lanes = r,
            e;
        case fi:
            return ou(t, u, r, n);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ci:
                    o = 10;
                    break e;
                case si:
                    o = 9;
                    break e;
                case qr:
                    o = 11;
                    break e;
                case Kr:
                    o = 14;
                    break e;
                case Je:
                    o = 16,
                    l = null;
                    break e
                }
            throw Error(h(130, e == null ? e : typeof e, ""))
        }
    return n = ve(o, t, n, u),
    n.elementType = e,
    n.type = l,
    n.lanes = r,
    n
}
function Sn(e, n, t, l) {
    return e = ve(7, e, l, n),
    e.lanes = t,
    e
}
function ou(e, n, t, l) {
    return e = ve(22, e, l, n),
    e.elementType = fi,
    e.lanes = t,
    e.stateNode = {},
    e
}
function Gu(e, n, t) {
    return e = ve(6, e, null, n),
    e.lanes = t,
    e
}
function Zu(e, n, t) {
    return n = ve(4, e.children !== null ? e.children : [], e.key, n),
    n.lanes = t,
    n.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    n
}
function Td(e, n, t, l, u) {
    this.tag = n,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = zu(0),
    this.expirationTimes = zu(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = zu(0),
    this.identifierPrefix = l,
    this.onRecoverableError = u,
    this.mutableSourceEagerHydrationData = null
}
function Co(e, n, t, l, u, r, o, a, i) {
    return e = new Td(e,n,t,a,i),
    n === 1 ? (n = 1,
    r === !0 && (n |= 8)) : n = 0,
    r = ve(3, null, null, n),
    e.current = r,
    r.stateNode = e,
    r.memoizedState = {
        element: l,
        isDehydrated: t,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    io(r),
    e
}
function Fd(e, n, t) {
    var l = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: In,
        key: l == null ? null : "" + l,
        children: e,
        containerInfo: n,
        implementation: t
    }
}
function ls(e) {
    if (!e)
        return pn;
    e = e._reactInternals;
    e: {
        if (Rn(e) !== e || e.tag !== 1)
            throw Error(h(170));
        var n = e;
        do {
            switch (n.tag) {
            case 3:
                n = n.stateNode.context;
                break e;
            case 1:
                if (ce(n.type)) {
                    n = n.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            n = n.return
        } while (n !== null);
        throw Error(h(171))
    }
    if (e.tag === 1) {
        var t = e.type;
        if (ce(t))
            return tc(e, t, n)
    }
    return n
}
function us(e, n, t, l, u, r, o, a, i) {
    return e = Co(t, l, !0, e, u, r, o, a, i),
    e.context = ls(null),
    t = e.current,
    l = le(),
    u = fn(t),
    r = $e(l, u),
    r.callback = n ?? null,
    cn(t, r),
    e.current.lanes = u,
    Gt(e, u, l),
    se(e, l),
    e
}
function vu(e, n, t, l) {
    var u = n.current
      , r = le()
      , o = fn(u);
    return t = ls(t),
    n.context === null ? n.context = t : n.pendingContext = t,
    n = $e(r, o),
    n.payload = {
        element: e
    },
    l = l === void 0 ? null : l,
    l !== null && (n.callback = l),
    cn(u, n),
    e = we(u, o, r),
    e !== null && Ol(e, u, o),
    o
}
function au(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ri(e, n) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var t = e.retryLane;
        e.retryLane = t !== 0 && t < n ? t : n
    }
}
function Do(e, n) {
    ri(e, n),
    (e = e.alternate) && ri(e, n)
}
function Ld() {
    return null
}
var rs = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Oo(e) {
    this._internalRoot = e
}
ku.prototype.render = Oo.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
        throw Error(h(409));
    vu(e, n, null, null)
}
;
ku.prototype.unmount = Oo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var n = e.containerInfo;
        Dn(function() {
            vu(null, e, null, null)
        }),
        n[qe] = null
    }
}
;
function ku(e) {
    this._internalRoot = e
}
ku.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var n = Ii();
        e = {
            blockedOn: null,
            target: e,
            priority: n
        };
        for (var t = 0; t < nn.length && n !== 0 && n < nn[t].priority; t++)
            ;
        nn.splice(t, 0, e),
        t === 0 && Ui(e)
    }
}
;
function Ro(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function wu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function oi() {}
function Cd(e, n, t, l, u) {
    if (u) {
        if (typeof l == "function") {
            var r = l;
            l = function() {
                var f = au(o);
                r.call(f)
            }
        }
        var o = us(n, l, e, 0, null, !1, !1, "", oi);
        return e._reactRootContainer = o,
        e[qe] = o.current,
        Wt(e.nodeType === 8 ? e.parentNode : e),
        Dn(),
        o
    }
    for (; u = e.lastChild; )
        e.removeChild(u);
    if (typeof l == "function") {
        var a = l;
        l = function() {
            var f = au(i);
            a.call(f)
        }
    }
    var i = Co(e, 0, !1, null, null, !1, !1, "", oi);
    return e._reactRootContainer = i,
    e[qe] = i.current,
    Wt(e.nodeType === 8 ? e.parentNode : e),
    Dn(function() {
        vu(n, i, t, l)
    }),
    i
}
function Eu(e, n, t, l, u) {
    var r = t._reactRootContainer;
    if (r) {
        var o = r;
        if (typeof u == "function") {
            var a = u;
            u = function() {
                var i = au(o);
                a.call(i)
            }
        }
        vu(n, o, e, u)
    } else
        o = Cd(t, n, e, u, l);
    return au(o)
}
Mi = function(e) {
    switch (e.tag) {
    case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
            var t = _t(n.pendingLanes);
            t !== 0 && (Gr(n, 1 | t),
            se(n, A()),
            (6 & L) === 0 && (ut = A() + 500,
            yn()))
        }
        break;
    case 13:
        var l = le();
        Dn(function() {
            return we(e, 1, l)
        }),
        Do(e, 1)
    }
}
;
Zr = function(e) {
    if (e.tag === 13) {
        var n = le();
        we(e, 134217728, n),
        Do(e, 134217728)
    }
}
;
xi = function(e) {
    if (e.tag === 13) {
        var n = le()
          , t = fn(e);
        we(e, t, n),
        Do(e, t)
    }
}
;
Ii = function() {
    return D
}
;
zi = function(e, n) {
    var t = D;
    try {
        return D = e,
        n()
    } finally {
        D = t
    }
}
;
dr = function(e, n, t) {
    switch (n) {
    case "input":
        if (rr(e, t),
        n = t.name,
        t.type === "radio" && n != null) {
            for (t = e; t.parentNode; )
                t = t.parentNode;
            for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'),
            n = 0; n < t.length; n++) {
                var l = t[n];
                if (l !== e && l.form === e.form) {
                    var u = du(l);
                    if (!u)
                        throw Error(h(90));
                    pi(l),
                    rr(l, u)
                }
            }
        }
        break;
    case "textarea":
        hi(e, t);
        break;
    case "select":
        n = t.value,
        n != null && qn(e, !!t.multiple, n, !1)
    }
}
;
Ei = So;
_i = Dn;
var Dd = {
    usingClientEntryPoint: !1,
    Events: [Jt, An, du, ki, wi, So]
}
  , vt = {
    findFiberByHostInstance: En,
    bundleType: 0,
    version: "18.1.0",
    rendererPackageName: "react-dom"
}
  , Od = {
    bundleType: vt.bundleType,
    version: vt.version,
    rendererPackageName: vt.rendererPackageName,
    rendererConfig: vt.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Ye.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Ti(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: vt.findFiberByHostInstance || Ld,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.1.0-next-22edb9f77-20220426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && (kt = __REACT_DEVTOOLS_GLOBAL_HOOK__,
!kt.isDisabled && kt.supportsFiber))
    try {
        iu = kt.inject(Od),
        Ne = kt
    } catch {}
var kt;
me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Dd;
me.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Ro(n))
        throw Error(h(200));
    return Fd(e, n, null, t)
}
;
me.createRoot = function(e, n) {
    if (!Ro(e))
        throw Error(h(299));
    var t = !1
      , l = ""
      , u = rs;
    return n != null && (n.unstable_strictMode === !0 && (t = !0),
    n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (u = n.onRecoverableError)),
    n = Co(e, 1, !1, null, null, t, !1, l, u),
    e[qe] = n.current,
    Wt(e.nodeType === 8 ? e.parentNode : e),
    new Oo(n)
}
;
me.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var n = e._reactInternals;
    if (n === void 0)
        throw typeof e.render == "function" ? Error(h(188)) : (e = Object.keys(e).join(","),
        Error(h(268, e)));
    return e = Ti(n),
    e = e === null ? null : e.stateNode,
    e
}
;
me.flushSync = function(e) {
    return Dn(e)
}
;
me.hydrate = function(e, n, t) {
    if (!wu(n))
        throw Error(h(200));
    return Eu(null, e, n, !0, t)
}
;
me.hydrateRoot = function(e, n, t) {
    if (!Ro(e))
        throw Error(h(405));
    var l = t != null && t.hydratedSources || null
      , u = !1
      , r = ""
      , o = rs;
    if (t != null && (t.unstable_strictMode === !0 && (u = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    n = us(n, null, e, 1, t ?? null, u, !1, r, o),
    e[qe] = n.current,
    Wt(e),
    l)
        for (e = 0; e < l.length; e++)
            t = l[e],
            u = t._getVersion,
            u = u(t._source),
            n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, u] : n.mutableSourceEagerHydrationData.push(t, u);
    return new ku(n)
}
;
me.render = function(e, n, t) {
    if (!wu(n))
        throw Error(h(200));
    return Eu(null, e, n, !1, t)
}
;
me.unmountComponentAtNode = function(e) {
    if (!wu(e))
        throw Error(h(40));
    return !!e._reactRootContainer && (Dn(function() {
        Eu(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[qe] = null
        })
    }),
    !0)
}
;
me.unstable_batchedUpdates = So;
me.unstable_renderSubtreeIntoContainer = function(e, n, t, l) {
    if (!wu(t))
        throw Error(h(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(h(38));
    return Eu(e, n, t, !1, l)
}
;
me.version = "18.1.0-next-22edb9f77-20220426";
function os() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE == "function")
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(os)
        } catch (e) {
            console.error(e)
        }
}
os();
var Pe = me;
var dp = Pe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , pp = Pe.createPortal
  , mp = Pe.createRoot
  , hp = Pe.findDOMNode
  , gp = Pe.flushSync
  , as = Pe.hydrate
  , yp = Pe.hydrateRoot
  , Mo = Pe.render
  , bp = Pe.unmountComponentAtNode
  , vp = Pe.unstable_batchedUpdates
  , kp = Pe.unstable_renderSubtreeIntoContainer
  , wp = Pe.version;
F.__framer_importFromPackage = (e,n)=>()=>at(zo, {
    error: 'Package component not supported: "' + n + '" in "' + e + '"'
});
F.process = {
    ...F.process,
    env: {
        ...F.process ? F.process.env : void 0,
        NODE_ENV: "production"
    }
};
Uo();
(async()=>{
    let e = {
        augiA20Il: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/UfbEm9H7rfRJMTSIeemQl1q4VWirchtktBx-cJAfWVw.CKE3E3PQ.mjs")),
            path: "/"
        },
        bBJKDo0xd: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/RBQKmMLJqbddmKaq4oizb_OR08TkvCKdw8sMXbD5KHU.X3JS3MB7.mjs")),
            path: "/scc"
        },
        CT4DeA8BS: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/TjR0KUMP_pDipU_gam3uzMBfUNot0ehf1BoR2VPMS6c.APYLK74P.mjs")),
            path: "/coming"
        },
        FpDJSWSbA: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/U2ZaeYDS7mSYaUNFyoUiGjBoGu_GQZPVvb0Bbt5XlGM.3HHYXLGI.mjs")),
            path: "/jy03"
        },
        Gzm9zy6eT: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/bmutGSMGk8LpHPh4LVwVUCgZ-KQ3rcT4lJUX2nHPDts.KI5TZQBF.mjs")),
            path: "/jy02"
        },
        igwNDPsSE: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/fi7-cqH2lf8I6wj5Av8VW8L_ErV7G6dHYYwVNpSvEPc.QJHQTGF7.mjs")),
            path: "/project-device"
        },
        L5HTDAZHF: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/T8IZ4fAgyORNR7ati0NEPxYsMwzLHnc_L6XgU3w1zHQ.YFAR2EC3.mjs")),
            path: "/gjsmc"
        },
        lYvaNqhLM: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/6rbXLc5QWA6Nc2baYlhuEAKn663EeTTdK9sMsT8b-8E.Y4SFMLDD.mjs")),
            path: "/project"
        },
        MDGjyFzaX: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/hfsFSzuot4z5xXg9zACeGhZZJxSexqvYJDpUhC6nf-8.F5M7OMBJ.mjs")),
            path: "/project-web"
        },
        MpPD4vXLI: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/Wx9gogsXdtOaYfABlfKCE_MHT5OcbjO-z92iSKp3F04.5TNZW2DW.mjs")),
            path: "/connect"
        },
        OB2l5GO0v: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/0a4i5X8Avkz9KlzihkTXHVadnm8sKaMktksHgwqPyI0.TCNZXIAR.mjs")),
            path: "/cph"
        },
        QaLIZeOVO: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/HZHcPRSvs3luLWhgLYMBVUKnX2g7BRH7NTFNbSIhG8Q.AGJJSH3G.mjs")),
            path: "/about"
        },
        QC4OtLpvh: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/G7pnfpGyRWNgrbGRU9THhcmqD_lnlZeQL76V9cKouxM.A2WHZQQP.mjs")),
            path: "/hlxr"
        },
        Ro0mMXecm: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/6Ya-oOAM0UJhnJgveA56GoGAxAMj6cvN6wnqJ9TMbfs.OUEDXBLQ.mjs")),
            path: "/project-mobile"
        },
        UbpjDmgLQ: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/9BdXmMCuQCPjLCePuo5TMeXdryx5oq2x4ECnVLAIaUs.W63YNMWW.mjs")),
            path: "/xbshq"
        },
        uEtTdUZYv: {
            elements: {},
            page: j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/iZFOI3IvWlSnJlbukFi7CDCtwyd4fXsmeAk-bEv4uMk.7EBN3Z2A.mjs")),
            path: "/sfj"
        }
    }, n = j(()=>import("https://framerusercontent.com/sites/1TtI9miX8QuOsJd69DO8Ok/__framer-not-found-page.Y6BRXLXH.mjs")), t = document.getElementById("main"), l, u, r = !1;
    if ("framerHydrateV2"in t.dataset) {
        let f = JSON.parse(t.dataset.framerHydrateV2);
        l = f.routeId,
        u = f.pathVariables,
        r = !0
    } else {
        let f = Io(e, decodeURIComponent(location.pathname));
        l = f.routeId,
        u = f.pathVariables
    }
    let a = await e[l].page.preload();
    e[l].page = a;
    let i = at(Bo, {
        RootComponent: a,
        isWebsite: !0,
        routeId: l,
        pathVariables: u,
        routes: e,
        notFoundPage: n,
        isReducedMotion: void 0,
        includeDataObserver: !1
    });
    F.__html_time_to_render_start = performance.now(),
    r ? (console.log("\u269B\uFE0F Mounting with ReactDOM.hydrate"),
    as(i, t)) : (console.log("\u269B\uFE0F Mounting with ReactDOM.render"),
    Mo(i, t)),
    F.__html_time_to_render_end = performance.now()
}
)().catch(e=>{
    throw F.__send_framer_event && F.__send_framer_event("published_site_load_error", {
        message: String(e),
        stack: e instanceof Error && typeof e.stack == "string" ? e.stack : null
    }),
    e
}
);
(async()=>{
    let {default: e} = await import("./__framer-badge.CJP65S3R.mjs")
      , n = Ao(No);
    Mo(at(n, {
        className: "__framer-badge",
        __framer__threshold: .5,
        __framer__animateOnce: !0,
        __framer__opacity: 0,
        __framer__targetOpacity: 1,
        __framer__rotate: 0,
        __framer__x: 0,
        __framer__y: 10,
        __framer__scale: 1,
        __framer__transition: {
            type: "spring",
            ease: [.44, 0, .56, 1],
            duration: .3,
            delay: 1,
            stiffness: 350,
            damping: 40,
            mass: 1.5
        },
        __framer__rotateX: 0,
        __framer__rotateY: 0,
        __framer__perspective: 1200
    }, at(e)), document.getElementById("__framer-badge-container"))
}
)();
//# sourceMappingURL=_script0.KPIVXTZZ.mjs.map
