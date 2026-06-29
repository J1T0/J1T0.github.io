function yw(e, i) {
  for (var a = 0; a < i.length; a++) {
    const r = i[a];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const l in r)
        if (l !== "default" && !(l in e)) {
          const c = Object.getOwnPropertyDescriptor(r, l);
          c && Object.defineProperty(e, l, c.get ? c : {
            enumerable: !0,
            get: () => r[l]
          })
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
    value: "Module"
  }))
}
(function () {
  const i = document.createElement("link").relList;
  if (i && i.supports && i.supports("modulepreload"))
    return;
  for (const l of document.querySelectorAll('link[rel="modulepreload"]'))
    r(l);
  new MutationObserver(l => {
    for (const c of l)
      if (c.type === "childList")
        for (const d of c.addedNodes)
          d.tagName === "LINK" && d.rel === "modulepreload" && r(d)
  }
  ).observe(document, {
    childList: !0,
    subtree: !0
  });
  function a(l) {
    const c = {};
    return l.integrity && (c.integrity = l.integrity),
      l.referrerPolicy && (c.referrerPolicy = l.referrerPolicy),
      l.crossOrigin === "use-credentials" ? c.credentials = "include" : l.crossOrigin === "anonymous" ? c.credentials = "omit" : c.credentials = "same-origin",
      c
  }
  function r(l) {
    if (l.ep)
      return;
    l.ep = !0;
    const c = a(l);
    fetch(l.href, c)
  }
}
)();
function h0(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Qc = {
  exports: {}
}
  , Ka = {};
var Wy;
function gw() {
  if (Wy)
    return Ka;
  Wy = 1;
  var e = Symbol.for("react.transitional.element")
    , i = Symbol.for("react.fragment");
  function a(r, l, c) {
    var d = null;
    if (c !== void 0 && (d = "" + c),
      l.key !== void 0 && (d = "" + l.key),
      "key" in l) {
      c = {};
      for (var h in l)
        h !== "key" && (c[h] = l[h])
    } else
      c = l;
    return l = c.ref,
    {
      $$typeof: e,
      type: r,
      key: d,
      ref: l !== void 0 ? l : null,
      props: c
    }
  }
  return Ka.Fragment = i,
    Ka.jsx = a,
    Ka.jsxs = a,
    Ka
}
var $y;
function vw() {
  return $y || ($y = 1,
    Qc.exports = gw()),
    Qc.exports
}
var M = vw()
  , Zc = {
    exports: {}
  }
  , Qa = {}
  , Wc = {
    exports: {}
  }
  , $c = {};
var Jy;
function bw() {
  return Jy || (Jy = 1,
    (function (e) {
      function i(_, K) {
        var Y = _.length;
        _.push(K);
        t: for (; 0 < Y;) {
          var et = Y - 1 >>> 1
            , T = _[et];
          if (0 < l(T, K))
            _[et] = K,
              _[Y] = T,
              Y = et;
          else
            break t
        }
      }
      function a(_) {
        return _.length === 0 ? null : _[0]
      }
      function r(_) {
        if (_.length === 0)
          return null;
        var K = _[0]
          , Y = _.pop();
        if (Y !== K) {
          _[0] = Y;
          t: for (var et = 0, T = _.length, q = T >>> 1; et < q;) {
            var tt = 2 * (et + 1) - 1
              , J = _[tt]
              , ut = tt + 1
              , ht = _[ut];
            if (0 > l(J, Y))
              ut < T && 0 > l(ht, J) ? (_[et] = ht,
                _[ut] = Y,
                et = ut) : (_[et] = J,
                  _[tt] = Y,
                  et = tt);
            else if (ut < T && 0 > l(ht, Y))
              _[et] = ht,
                _[ut] = Y,
                et = ut;
            else
              break t
          }
        }
        return K
      }
      function l(_, K) {
        var Y = _.sortIndex - K.sortIndex;
        return Y !== 0 ? Y : _.id - K.id
      }
      if (e.unstable_now = void 0,
        typeof performance == "object" && typeof performance.now == "function") {
        var c = performance;
        e.unstable_now = function () {
          return c.now()
        }
      } else {
        var d = Date
          , h = d.now();
        e.unstable_now = function () {
          return d.now() - h
        }
      }
      var p = []
        , m = []
        , y = 1
        , v = null
        , b = 3
        , S = !1
        , E = !1
        , A = !1
        , C = !1
        , O = typeof setTimeout == "function" ? setTimeout : null
        , V = typeof clearTimeout == "function" ? clearTimeout : null
        , j = typeof setImmediate < "u" ? setImmediate : null;
      function L(_) {
        for (var K = a(m); K !== null;) {
          if (K.callback === null)
            r(m);
          else if (K.startTime <= _)
            r(m),
              K.sortIndex = K.expirationTime,
              i(p, K);
          else
            break;
          K = a(m)
        }
      }
      function k(_) {
        if (A = !1,
          L(_),
          !E)
          if (a(p) !== null)
            E = !0,
              Q || (Q = !0,
                lt());
          else {
            var K = a(m);
            K !== null && ct(k, K.startTime - _)
          }
      }
      var Q = !1
        , Z = -1
        , H = 5
        , $ = -1;
      function W() {
        return C ? !0 : !(e.unstable_now() - $ < H)
      }
      function ot() {
        if (C = !1,
          Q) {
          var _ = e.unstable_now();
          $ = _;
          var K = !0;
          try {
            t: {
              E = !1,
                A && (A = !1,
                  V(Z),
                  Z = -1),
                S = !0;
              var Y = b;
              try {
                e: {
                  for (L(_),
                    v = a(p); v !== null && !(v.expirationTime > _ && W());) {
                    var et = v.callback;
                    if (typeof et == "function") {
                      v.callback = null,
                        b = v.priorityLevel;
                      var T = et(v.expirationTime <= _);
                      if (_ = e.unstable_now(),
                        typeof T == "function") {
                        v.callback = T,
                          L(_),
                          K = !0;
                        break e
                      }
                      v === a(p) && r(p),
                        L(_)
                    } else
                      r(p);
                    v = a(p)
                  }
                  if (v !== null)
                    K = !0;
                  else {
                    var q = a(m);
                    q !== null && ct(k, q.startTime - _),
                      K = !1
                  }
                }
                break t
              } finally {
                v = null,
                  b = Y,
                  S = !1
              }
              K = void 0
            }
          } finally {
            K ? lt() : Q = !1
          }
        }
      }
      var lt;
      if (typeof j == "function")
        lt = function () {
          j(ot)
        }
          ;
      else if (typeof MessageChannel < "u") {
        var yt = new MessageChannel
          , I = yt.port2;
        yt.port1.onmessage = ot,
          lt = function () {
            I.postMessage(null)
          }
      } else
        lt = function () {
          O(ot, 0)
        }
          ;
      function ct(_, K) {
        Z = O(function () {
          _(e.unstable_now())
        }, K)
      }
      e.unstable_IdlePriority = 5,
        e.unstable_ImmediatePriority = 1,
        e.unstable_LowPriority = 4,
        e.unstable_NormalPriority = 3,
        e.unstable_Profiling = null,
        e.unstable_UserBlockingPriority = 2,
        e.unstable_cancelCallback = function (_) {
          _.callback = null
        }
        ,
        e.unstable_forceFrameRate = function (_) {
          0 > _ || 125 < _ ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : H = 0 < _ ? Math.floor(1e3 / _) : 5
        }
        ,
        e.unstable_getCurrentPriorityLevel = function () {
          return b
        }
        ,
        e.unstable_next = function (_) {
          switch (b) {
            case 1:
            case 2:
            case 3:
              var K = 3;
              break;
            default:
              K = b
          }
          var Y = b;
          b = K;
          try {
            return _()
          } finally {
            b = Y
          }
        }
        ,
        e.unstable_requestPaint = function () {
          C = !0
        }
        ,
        e.unstable_runWithPriority = function (_, K) {
          switch (_) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              _ = 3
          }
          var Y = b;
          b = _;
          try {
            return K()
          } finally {
            b = Y
          }
        }
        ,
        e.unstable_scheduleCallback = function (_, K, Y) {
          var et = e.unstable_now();
          switch (typeof Y == "object" && Y !== null ? (Y = Y.delay,
            Y = typeof Y == "number" && 0 < Y ? et + Y : et) : Y = et,
          _) {
            case 1:
              var T = -1;
              break;
            case 2:
              T = 250;
              break;
            case 5:
              T = 1073741823;
              break;
            case 4:
              T = 1e4;
              break;
            default:
              T = 5e3
          }
          return T = Y + T,
            _ = {
              id: y++,
              callback: K,
              priorityLevel: _,
              startTime: Y,
              expirationTime: T,
              sortIndex: -1
            },
            Y > et ? (_.sortIndex = Y,
              i(m, _),
              a(p) === null && _ === a(m) && (A ? (V(Z),
                Z = -1) : A = !0,
                ct(k, Y - et))) : (_.sortIndex = T,
                  i(p, _),
                  E || S || (E = !0,
                    Q || (Q = !0,
                      lt()))),
            _
        }
        ,
        e.unstable_shouldYield = W,
        e.unstable_wrapCallback = function (_) {
          var K = b;
          return function () {
            var Y = b;
            b = K;
            try {
              return _.apply(this, arguments)
            } finally {
              b = Y
            }
          }
        }
    }
    )($c)),
    $c
}
var Iy;
function xw() {
  return Iy || (Iy = 1,
    Wc.exports = bw()),
    Wc.exports
}
var Jc = {
  exports: {}
}
  , gt = {};
var tg;
function Sw() {
  if (tg)
    return gt;
  tg = 1;
  var e = Symbol.for("react.transitional.element")
    , i = Symbol.for("react.portal")
    , a = Symbol.for("react.fragment")
    , r = Symbol.for("react.strict_mode")
    , l = Symbol.for("react.profiler")
    , c = Symbol.for("react.consumer")
    , d = Symbol.for("react.context")
    , h = Symbol.for("react.forward_ref")
    , p = Symbol.for("react.suspense")
    , m = Symbol.for("react.memo")
    , y = Symbol.for("react.lazy")
    , v = Symbol.iterator;
  function b(T) {
    return T === null || typeof T != "object" ? null : (T = v && T[v] || T["@@iterator"],
      typeof T == "function" ? T : null)
  }
  var S = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () { },
    enqueueReplaceState: function () { },
    enqueueSetState: function () { }
  }
    , E = Object.assign
    , A = {};
  function C(T, q, tt) {
    this.props = T,
      this.context = q,
      this.refs = A,
      this.updater = tt || S
  }
  C.prototype.isReactComponent = {},
    C.prototype.setState = function (T, q) {
      if (typeof T != "object" && typeof T != "function" && T != null)
        throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, T, q, "setState")
    }
    ,
    C.prototype.forceUpdate = function (T) {
      this.updater.enqueueForceUpdate(this, T, "forceUpdate")
    }
    ;
  function O() { }
  O.prototype = C.prototype;
  function V(T, q, tt) {
    this.props = T,
      this.context = q,
      this.refs = A,
      this.updater = tt || S
  }
  var j = V.prototype = new O;
  j.constructor = V,
    E(j, C.prototype),
    j.isPureReactComponent = !0;
  var L = Array.isArray
    , k = {
      H: null,
      A: null,
      T: null,
      S: null,
      V: null
    }
    , Q = Object.prototype.hasOwnProperty;
  function Z(T, q, tt, J, ut, ht) {
    return tt = ht.ref,
    {
      $$typeof: e,
      type: T,
      key: q,
      ref: tt !== void 0 ? tt : null,
      props: ht
    }
  }
  function H(T, q) {
    return Z(T.type, q, void 0, void 0, void 0, T.props)
  }
  function $(T) {
    return typeof T == "object" && T !== null && T.$$typeof === e
  }
  function W(T) {
    var q = {
      "=": "=0",
      ":": "=2"
    };
    return "$" + T.replace(/[=:]/g, function (tt) {
      return q[tt]
    })
  }
  var ot = /\/+/g;
  function lt(T, q) {
    return typeof T == "object" && T !== null && T.key != null ? W("" + T.key) : q.toString(36)
  }
  function yt() { }
  function I(T) {
    switch (T.status) {
      case "fulfilled":
        return T.value;
      case "rejected":
        throw T.reason;
      default:
        switch (typeof T.status == "string" ? T.then(yt, yt) : (T.status = "pending",
          T.then(function (q) {
            T.status === "pending" && (T.status = "fulfilled",
              T.value = q)
          }, function (q) {
            T.status === "pending" && (T.status = "rejected",
              T.reason = q)
          })),
        T.status) {
          case "fulfilled":
            return T.value;
          case "rejected":
            throw T.reason
        }
    }
    throw T
  }
  function ct(T, q, tt, J, ut) {
    var ht = typeof T;
    (ht === "undefined" || ht === "boolean") && (T = null);
    var rt = !1;
    if (T === null)
      rt = !0;
    else
      switch (ht) {
        case "bigint":
        case "string":
        case "number":
          rt = !0;
          break;
        case "object":
          switch (T.$$typeof) {
            case e:
            case i:
              rt = !0;
              break;
            case y:
              return rt = T._init,
                ct(rt(T._payload), q, tt, J, ut)
          }
      }
    if (rt)
      return ut = ut(T),
        rt = J === "" ? "." + lt(T, 0) : J,
        L(ut) ? (tt = "",
          rt != null && (tt = rt.replace(ot, "$&/") + "/"),
          ct(ut, q, tt, "", function (Rt) {
            return Rt
          })) : ut != null && ($(ut) && (ut = H(ut, tt + (ut.key == null || T && T.key === ut.key ? "" : ("" + ut.key).replace(ot, "$&/") + "/") + rt)),
            q.push(ut)),
        1;
    rt = 0;
    var Pt = J === "" ? "." : J + ":";
    if (L(T))
      for (var Ct = 0; Ct < T.length; Ct++)
        J = T[Ct],
          ht = Pt + lt(J, Ct),
          rt += ct(J, q, tt, ht, ut);
    else if (Ct = b(T),
      typeof Ct == "function")
      for (T = Ct.call(T),
        Ct = 0; !(J = T.next()).done;)
        J = J.value,
          ht = Pt + lt(J, Ct++),
          rt += ct(J, q, tt, ht, ut);
    else if (ht === "object") {
      if (typeof T.then == "function")
        return ct(I(T), q, tt, J, ut);
      throw q = String(T),
      Error("Objects are not valid as a React child (found: " + (q === "[object Object]" ? "object with keys {" + Object.keys(T).join(", ") + "}" : q) + "). If you meant to render a collection of children, use an array instead.")
    }
    return rt
  }
  function _(T, q, tt) {
    if (T == null)
      return T;
    var J = []
      , ut = 0;
    return ct(T, J, "", "", function (ht) {
      return q.call(tt, ht, ut++)
    }),
      J
  }
  function K(T) {
    if (T._status === -1) {
      var q = T._result;
      q = q(),
        q.then(function (tt) {
          (T._status === 0 || T._status === -1) && (T._status = 1,
            T._result = tt)
        }, function (tt) {
          (T._status === 0 || T._status === -1) && (T._status = 2,
            T._result = tt)
        }),
        T._status === -1 && (T._status = 0,
          T._result = q)
    }
    if (T._status === 1)
      return T._result.default;
    throw T._result
  }
  var Y = typeof reportError == "function" ? reportError : function (T) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof T == "object" && T !== null && typeof T.message == "string" ? String(T.message) : String(T),
        error: T
      });
      if (!window.dispatchEvent(q))
        return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", T);
      return
    }
    console.error(T)
  }
    ;
  function et() { }
  return gt.Children = {
    map: _,
    forEach: function (T, q, tt) {
      _(T, function () {
        q.apply(this, arguments)
      }, tt)
    },
    count: function (T) {
      var q = 0;
      return _(T, function () {
        q++
      }),
        q
    },
    toArray: function (T) {
      return _(T, function (q) {
        return q
      }) || []
    },
    only: function (T) {
      if (!$(T))
        throw Error("React.Children.only expected to receive a single React element child.");
      return T
    }
  },
    gt.Component = C,
    gt.Fragment = a,
    gt.Profiler = l,
    gt.PureComponent = V,
    gt.StrictMode = r,
    gt.Suspense = p,
    gt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k,
    gt.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (T) {
        return k.H.useMemoCache(T)
      }
    },
    gt.cache = function (T) {
      return function () {
        return T.apply(null, arguments)
      }
    }
    ,
    gt.cloneElement = function (T, q, tt) {
      if (T == null)
        throw Error("The argument must be a React element, but you passed " + T + ".");
      var J = E({}, T.props)
        , ut = T.key
        , ht = void 0;
      if (q != null)
        for (rt in q.ref !== void 0 && (ht = void 0),
          q.key !== void 0 && (ut = "" + q.key),
          q)
          !Q.call(q, rt) || rt === "key" || rt === "__self" || rt === "__source" || rt === "ref" && q.ref === void 0 || (J[rt] = q[rt]);
      var rt = arguments.length - 2;
      if (rt === 1)
        J.children = tt;
      else if (1 < rt) {
        for (var Pt = Array(rt), Ct = 0; Ct < rt; Ct++)
          Pt[Ct] = arguments[Ct + 2];
        J.children = Pt
      }
      return Z(T.type, ut, void 0, void 0, ht, J)
    }
    ,
    gt.createContext = function (T) {
      return T = {
        $$typeof: d,
        _currentValue: T,
        _currentValue2: T,
        _threadCount: 0,
        Provider: null,
        Consumer: null
      },
        T.Provider = T,
        T.Consumer = {
          $$typeof: c,
          _context: T
        },
        T
    }
    ,
    gt.createElement = function (T, q, tt) {
      var J, ut = {}, ht = null;
      if (q != null)
        for (J in q.key !== void 0 && (ht = "" + q.key),
          q)
          Q.call(q, J) && J !== "key" && J !== "__self" && J !== "__source" && (ut[J] = q[J]);
      var rt = arguments.length - 2;
      if (rt === 1)
        ut.children = tt;
      else if (1 < rt) {
        for (var Pt = Array(rt), Ct = 0; Ct < rt; Ct++)
          Pt[Ct] = arguments[Ct + 2];
        ut.children = Pt
      }
      if (T && T.defaultProps)
        for (J in rt = T.defaultProps,
          rt)
          ut[J] === void 0 && (ut[J] = rt[J]);
      return Z(T, ht, void 0, void 0, null, ut)
    }
    ,
    gt.createRef = function () {
      return {
        current: null
      }
    }
    ,
    gt.forwardRef = function (T) {
      return {
        $$typeof: h,
        render: T
      }
    }
    ,
    gt.isValidElement = $,
    gt.lazy = function (T) {
      return {
        $$typeof: y,
        _payload: {
          _status: -1,
          _result: T
        },
        _init: K
      }
    }
    ,
    gt.memo = function (T, q) {
      return {
        $$typeof: m,
        type: T,
        compare: q === void 0 ? null : q
      }
    }
    ,
    gt.startTransition = function (T) {
      var q = k.T
        , tt = {};
      k.T = tt;
      try {
        var J = T()
          , ut = k.S;
        ut !== null && ut(tt, J),
          typeof J == "object" && J !== null && typeof J.then == "function" && J.then(et, Y)
      } catch (ht) {
        Y(ht)
      } finally {
        k.T = q
      }
    }
    ,
    gt.unstable_useCacheRefresh = function () {
      return k.H.useCacheRefresh()
    }
    ,
    gt.use = function (T) {
      return k.H.use(T)
    }
    ,
    gt.useActionState = function (T, q, tt) {
      return k.H.useActionState(T, q, tt)
    }
    ,
    gt.useCallback = function (T, q) {
      return k.H.useCallback(T, q)
    }
    ,
    gt.useContext = function (T) {
      return k.H.useContext(T)
    }
    ,
    gt.useDebugValue = function () { }
    ,
    gt.useDeferredValue = function (T, q) {
      return k.H.useDeferredValue(T, q)
    }
    ,
    gt.useEffect = function (T, q, tt) {
      var J = k.H;
      if (typeof tt == "function")
        throw Error("useEffect CRUD overload is not enabled in this build of React.");
      return J.useEffect(T, q)
    }
    ,
    gt.useId = function () {
      return k.H.useId()
    }
    ,
    gt.useImperativeHandle = function (T, q, tt) {
      return k.H.useImperativeHandle(T, q, tt)
    }
    ,
    gt.useInsertionEffect = function (T, q) {
      return k.H.useInsertionEffect(T, q)
    }
    ,
    gt.useLayoutEffect = function (T, q) {
      return k.H.useLayoutEffect(T, q)
    }
    ,
    gt.useMemo = function (T, q) {
      return k.H.useMemo(T, q)
    }
    ,
    gt.useOptimistic = function (T, q) {
      return k.H.useOptimistic(T, q)
    }
    ,
    gt.useReducer = function (T, q, tt) {
      return k.H.useReducer(T, q, tt)
    }
    ,
    gt.useRef = function (T) {
      return k.H.useRef(T)
    }
    ,
    gt.useState = function (T) {
      return k.H.useState(T)
    }
    ,
    gt.useSyncExternalStore = function (T, q, tt) {
      return k.H.useSyncExternalStore(T, q, tt)
    }
    ,
    gt.useTransition = function () {
      return k.H.useTransition()
    }
    ,
    gt.version = "19.1.0",
    gt
}
var eg;
function gl() {
  return eg || (eg = 1,
    Jc.exports = Sw()),
    Jc.exports
}
var Ic = {
  exports: {}
}
  , ce = {};
var ng;
function Tw() {
  if (ng)
    return ce;
  ng = 1;
  var e = gl();
  function i(p) {
    var m = "https://react.dev/errors/" + p;
    if (1 < arguments.length) {
      m += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        m += "&args[]=" + encodeURIComponent(arguments[y])
    }
    return "Minified React error #" + p + "; visit " + m + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function a() { }
  var r = {
    d: {
      f: a,
      r: function () {
        throw Error(i(522))
      },
      D: a,
      C: a,
      L: a,
      m: a,
      X: a,
      S: a,
      M: a
    },
    p: 0,
    findDOMNode: null
  }
    , l = Symbol.for("react.portal");
  function c(p, m, y) {
    var v = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: l,
      key: v == null ? null : "" + v,
      children: p,
      containerInfo: m,
      implementation: y
    }
  }
  var d = e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function h(p, m) {
    if (p === "font")
      return "";
    if (typeof m == "string")
      return m === "use-credentials" ? m : ""
  }
  return ce.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = r,
    ce.createPortal = function (p, m) {
      var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!m || m.nodeType !== 1 && m.nodeType !== 9 && m.nodeType !== 11)
        throw Error(i(299));
      return c(p, m, null, y)
    }
    ,
    ce.flushSync = function (p) {
      var m = d.T
        , y = r.p;
      try {
        if (d.T = null,
          r.p = 2,
          p)
          return p()
      } finally {
        d.T = m,
          r.p = y,
          r.d.f()
      }
    }
    ,
    ce.preconnect = function (p, m) {
      typeof p == "string" && (m ? (m = m.crossOrigin,
        m = typeof m == "string" ? m === "use-credentials" ? m : "" : void 0) : m = null,
        r.d.C(p, m))
    }
    ,
    ce.prefetchDNS = function (p) {
      typeof p == "string" && r.d.D(p)
    }
    ,
    ce.preinit = function (p, m) {
      if (typeof p == "string" && m && typeof m.as == "string") {
        var y = m.as
          , v = h(y, m.crossOrigin)
          , b = typeof m.integrity == "string" ? m.integrity : void 0
          , S = typeof m.fetchPriority == "string" ? m.fetchPriority : void 0;
        y === "style" ? r.d.S(p, typeof m.precedence == "string" ? m.precedence : void 0, {
          crossOrigin: v,
          integrity: b,
          fetchPriority: S
        }) : y === "script" && r.d.X(p, {
          crossOrigin: v,
          integrity: b,
          fetchPriority: S,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0
        })
      }
    }
    ,
    ce.preinitModule = function (p, m) {
      if (typeof p == "string")
        if (typeof m == "object" && m !== null) {
          if (m.as == null || m.as === "script") {
            var y = h(m.as, m.crossOrigin);
            r.d.M(p, {
              crossOrigin: y,
              integrity: typeof m.integrity == "string" ? m.integrity : void 0,
              nonce: typeof m.nonce == "string" ? m.nonce : void 0
            })
          }
        } else
          m == null && r.d.M(p)
    }
    ,
    ce.preload = function (p, m) {
      if (typeof p == "string" && typeof m == "object" && m !== null && typeof m.as == "string") {
        var y = m.as
          , v = h(y, m.crossOrigin);
        r.d.L(p, y, {
          crossOrigin: v,
          integrity: typeof m.integrity == "string" ? m.integrity : void 0,
          nonce: typeof m.nonce == "string" ? m.nonce : void 0,
          type: typeof m.type == "string" ? m.type : void 0,
          fetchPriority: typeof m.fetchPriority == "string" ? m.fetchPriority : void 0,
          referrerPolicy: typeof m.referrerPolicy == "string" ? m.referrerPolicy : void 0,
          imageSrcSet: typeof m.imageSrcSet == "string" ? m.imageSrcSet : void 0,
          imageSizes: typeof m.imageSizes == "string" ? m.imageSizes : void 0,
          media: typeof m.media == "string" ? m.media : void 0
        })
      }
    }
    ,
    ce.preloadModule = function (p, m) {
      if (typeof p == "string")
        if (m) {
          var y = h(m.as, m.crossOrigin);
          r.d.m(p, {
            as: typeof m.as == "string" && m.as !== "script" ? m.as : void 0,
            crossOrigin: y,
            integrity: typeof m.integrity == "string" ? m.integrity : void 0
          })
        } else
          r.d.m(p)
    }
    ,
    ce.requestFormReset = function (p) {
      r.d.r(p)
    }
    ,
    ce.unstable_batchedUpdates = function (p, m) {
      return p(m)
    }
    ,
    ce.useFormState = function (p, m, y) {
      return d.H.useFormState(p, m, y)
    }
    ,
    ce.useFormStatus = function () {
      return d.H.useHostTransitionStatus()
    }
    ,
    ce.version = "19.1.0",
    ce
}
var ig;
function m0() {
  if (ig)
    return Ic.exports;
  ig = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (i) {
        console.error(i)
      }
  }
  return e(),
    Ic.exports = Tw(),
    Ic.exports
}
var sg;
function ww() {
  if (sg)
    return Qa;
  sg = 1;
  var e = xw()
    , i = gl()
    , a = m0();
  function r(t) {
    var n = "https://react.dev/errors/" + t;
    if (1 < arguments.length) {
      n += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var s = 2; s < arguments.length; s++)
        n += "&args[]=" + encodeURIComponent(arguments[s])
    }
    return "Minified React error #" + t + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  }
  function l(t) {
    return !(!t || t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11)
  }
  function c(t) {
    var n = t
      , s = t;
    if (t.alternate)
      for (; n.return;)
        n = n.return;
    else {
      t = n;
      do
        n = t,
          (n.flags & 4098) !== 0 && (s = n.return),
          t = n.return;
      while (t)
    }
    return n.tag === 3 ? s : null
  }
  function d(t) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (n === null && (t = t.alternate,
        t !== null && (n = t.memoizedState)),
        n !== null)
        return n.dehydrated
    }
    return null
  }
  function h(t) {
    if (c(t) !== t)
      throw Error(r(188))
  }
  function p(t) {
    var n = t.alternate;
    if (!n) {
      if (n = c(t),
        n === null)
        throw Error(r(188));
      return n !== t ? null : t
    }
    for (var s = t, o = n; ;) {
      var u = s.return;
      if (u === null)
        break;
      var f = u.alternate;
      if (f === null) {
        if (o = u.return,
          o !== null) {
          s = o;
          continue
        }
        break
      }
      if (u.child === f.child) {
        for (f = u.child; f;) {
          if (f === s)
            return h(u),
              t;
          if (f === o)
            return h(u),
              n;
          f = f.sibling
        }
        throw Error(r(188))
      }
      if (s.return !== o.return)
        s = u,
          o = f;
      else {
        for (var g = !1, x = u.child; x;) {
          if (x === s) {
            g = !0,
              s = u,
              o = f;
            break
          }
          if (x === o) {
            g = !0,
              o = u,
              s = f;
            break
          }
          x = x.sibling
        }
        if (!g) {
          for (x = f.child; x;) {
            if (x === s) {
              g = !0,
                s = f,
                o = u;
              break
            }
            if (x === o) {
              g = !0,
                o = f,
                s = u;
              break
            }
            x = x.sibling
          }
          if (!g)
            throw Error(r(189))
        }
      }
      if (s.alternate !== o)
        throw Error(r(190))
    }
    if (s.tag !== 3)
      throw Error(r(188));
    return s.stateNode.current === s ? t : n
  }
  function m(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6)
      return t;
    for (t = t.child; t !== null;) {
      if (n = m(t),
        n !== null)
        return n;
      t = t.sibling
    }
    return null
  }
  var y = Object.assign
    , v = Symbol.for("react.element")
    , b = Symbol.for("react.transitional.element")
    , S = Symbol.for("react.portal")
    , E = Symbol.for("react.fragment")
    , A = Symbol.for("react.strict_mode")
    , C = Symbol.for("react.profiler")
    , O = Symbol.for("react.provider")
    , V = Symbol.for("react.consumer")
    , j = Symbol.for("react.context")
    , L = Symbol.for("react.forward_ref")
    , k = Symbol.for("react.suspense")
    , Q = Symbol.for("react.suspense_list")
    , Z = Symbol.for("react.memo")
    , H = Symbol.for("react.lazy")
    , $ = Symbol.for("react.activity")
    , W = Symbol.for("react.memo_cache_sentinel")
    , ot = Symbol.iterator;
  function lt(t) {
    return t === null || typeof t != "object" ? null : (t = ot && t[ot] || t["@@iterator"],
      typeof t == "function" ? t : null)
  }
  var yt = Symbol.for("react.client.reference");
  function I(t) {
    if (t == null)
      return null;
    if (typeof t == "function")
      return t.$$typeof === yt ? null : t.displayName || t.name || null;
    if (typeof t == "string")
      return t;
    switch (t) {
      case E:
        return "Fragment";
      case C:
        return "Profiler";
      case A:
        return "StrictMode";
      case k:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case $:
        return "Activity"
    }
    if (typeof t == "object")
      switch (t.$$typeof) {
        case S:
          return "Portal";
        case j:
          return (t.displayName || "Context") + ".Provider";
        case V:
          return (t._context.displayName || "Context") + ".Consumer";
        case L:
          var n = t.render;
          return t = t.displayName,
            t || (t = n.displayName || n.name || "",
              t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef"),
            t;
        case Z:
          return n = t.displayName || null,
            n !== null ? n : I(t.type) || "Memo";
        case H:
          n = t._payload,
            t = t._init;
          try {
            return I(t(n))
          } catch { }
      }
    return null
  }
  var ct = Array.isArray
    , _ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , K = a.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE
    , Y = {
      pending: !1,
      data: null,
      method: null,
      action: null
    }
    , et = []
    , T = -1;
  function q(t) {
    return {
      current: t
    }
  }
  function tt(t) {
    0 > T || (t.current = et[T],
      et[T] = null,
      T--)
  }
  function J(t, n) {
    T++,
      et[T] = t.current,
      t.current = n
  }
  var ut = q(null)
    , ht = q(null)
    , rt = q(null)
    , Pt = q(null);
  function Ct(t, n) {
    switch (J(rt, n),
    J(ht, t),
    J(ut, null),
    n.nodeType) {
      case 9:
      case 11:
        t = (t = n.documentElement) && (t = t.namespaceURI) ? Ey(t) : 0;
        break;
      default:
        if (t = n.tagName,
          n = n.namespaceURI)
          n = Ey(n),
            t = Ay(n, t);
        else
          switch (t) {
            case "svg":
              t = 1;
              break;
            case "math":
              t = 2;
              break;
            default:
              t = 0
          }
    }
    tt(ut),
      J(ut, t)
  }
  function Rt() {
    tt(ut),
      tt(ht),
      tt(rt)
  }
  function Un(t) {
    t.memoizedState !== null && J(Pt, t);
    var n = ut.current
      , s = Ay(n, t.type);
    n !== s && (J(ht, t),
      J(ut, s))
  }
  function Xe(t) {
    ht.current === t && (tt(ut),
      tt(ht)),
      Pt.current === t && (tt(Pt),
        Fa._currentValue = Y)
  }
  var sn = Object.prototype.hasOwnProperty
    , Ve = e.unstable_scheduleCallback
    , Bn = e.unstable_cancelCallback
    , QS = e.unstable_shouldYield
    , ZS = e.unstable_requestPaint
    , an = e.unstable_now
    , WS = e.unstable_getCurrentPriorityLevel
    , sh = e.unstable_ImmediatePriority
    , ah = e.unstable_UserBlockingPriority
    , gr = e.unstable_NormalPriority
    , $S = e.unstable_LowPriority
    , rh = e.unstable_IdlePriority
    , JS = e.log
    , IS = e.unstable_setDisableYieldValue
    , Ws = null
    , Se = null;
  function kn(t) {
    if (typeof JS == "function" && IS(t),
      Se && typeof Se.setStrictMode == "function")
      try {
        Se.setStrictMode(Ws, t)
      } catch { }
  }
  var Te = Math.clz32 ? Math.clz32 : n1
    , t1 = Math.log
    , e1 = Math.LN2;
  function n1(t) {
    return t >>>= 0,
      t === 0 ? 32 : 31 - (t1(t) / e1 | 0) | 0
  }
  var vr = 256
    , br = 4194304;
  function wi(t) {
    var n = t & 42;
    if (n !== 0)
      return n;
    switch (t & -t) {
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
        return 64;
      case 128:
        return 128;
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
        return t & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return t & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return t
    }
  }
  function xr(t, n, s) {
    var o = t.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0
      , f = t.suspendedLanes
      , g = t.pingedLanes;
    t = t.warmLanes;
    var x = o & 134217727;
    return x !== 0 ? (o = x & ~f,
      o !== 0 ? u = wi(o) : (g &= x,
        g !== 0 ? u = wi(g) : s || (s = x & ~t,
          s !== 0 && (u = wi(s))))) : (x = o & ~f,
            x !== 0 ? u = wi(x) : g !== 0 ? u = wi(g) : s || (s = o & ~t,
              s !== 0 && (u = wi(s)))),
      u === 0 ? 0 : n !== 0 && n !== u && (n & f) === 0 && (f = u & -u,
        s = n & -n,
        f >= s || f === 32 && (s & 4194048) !== 0) ? n : u
  }
  function $s(t, n) {
    return (t.pendingLanes & ~(t.suspendedLanes & ~t.pingedLanes) & n) === 0
  }
  function i1(t, n) {
    switch (t) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return n + 250;
      case 16:
      case 32:
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
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1
    }
  }
  function oh() {
    var t = vr;
    return vr <<= 1,
      (vr & 4194048) === 0 && (vr = 256),
      t
  }
  function lh() {
    var t = br;
    return br <<= 1,
      (br & 62914560) === 0 && (br = 4194304),
      t
  }
  function Pl(t) {
    for (var n = [], s = 0; 31 > s; s++)
      n.push(t);
    return n
  }
  function Js(t, n) {
    t.pendingLanes |= n,
      n !== 268435456 && (t.suspendedLanes = 0,
        t.pingedLanes = 0,
        t.warmLanes = 0)
  }
  function s1(t, n, s, o, u, f) {
    var g = t.pendingLanes;
    t.pendingLanes = s,
      t.suspendedLanes = 0,
      t.pingedLanes = 0,
      t.warmLanes = 0,
      t.expiredLanes &= s,
      t.entangledLanes &= s,
      t.errorRecoveryDisabledLanes &= s,
      t.shellSuspendCounter = 0;
    var x = t.entanglements
      , R = t.expirationTimes
      , P = t.hiddenUpdates;
    for (s = g & ~s; 0 < s;) {
      var F = 31 - Te(s)
        , X = 1 << F;
      x[F] = 0,
        R[F] = -1;
      var U = P[F];
      if (U !== null)
        for (P[F] = null,
          F = 0; F < U.length; F++) {
          var B = U[F];
          B !== null && (B.lane &= -536870913)
        }
      s &= ~X
    }
    o !== 0 && uh(t, o, 0),
      f !== 0 && u === 0 && t.tag !== 0 && (t.suspendedLanes |= f & ~(g & ~n))
  }
  function uh(t, n, s) {
    t.pendingLanes |= n,
      t.suspendedLanes &= ~n;
    var o = 31 - Te(n);
    t.entangledLanes |= n,
      t.entanglements[o] = t.entanglements[o] | 1073741824 | s & 4194090
  }
  function ch(t, n) {
    var s = t.entangledLanes |= n;
    for (t = t.entanglements; s;) {
      var o = 31 - Te(s)
        , u = 1 << o;
      u & n | t[o] & n && (t[o] |= n),
        s &= ~u
    }
  }
  function Ul(t) {
    switch (t) {
      case 2:
        t = 1;
        break;
      case 8:
        t = 4;
        break;
      case 32:
        t = 16;
        break;
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
        t = 128;
        break;
      case 268435456:
        t = 134217728;
        break;
      default:
        t = 0
    }
    return t
  }
  function Bl(t) {
    return t &= -t,
      2 < t ? 8 < t ? (t & 134217727) !== 0 ? 32 : 268435456 : 8 : 2
  }
  function fh() {
    var t = K.p;
    return t !== 0 ? t : (t = window.event,
      t === void 0 ? 32 : Gy(t.type))
  }
  function a1(t, n) {
    var s = K.p;
    try {
      return K.p = t,
        n()
    } finally {
      K.p = s
    }
  }
  var Hn = Math.random().toString(36).slice(2)
    , le = "__reactFiber$" + Hn
    , pe = "__reactProps$" + Hn
    , Ji = "__reactContainer$" + Hn
    , kl = "__reactEvents$" + Hn
    , r1 = "__reactListeners$" + Hn
    , o1 = "__reactHandles$" + Hn
    , dh = "__reactResources$" + Hn
    , Is = "__reactMarker$" + Hn;
  function Hl(t) {
    delete t[le],
      delete t[pe],
      delete t[kl],
      delete t[r1],
      delete t[o1]
  }
  function Ii(t) {
    var n = t[le];
    if (n)
      return n;
    for (var s = t.parentNode; s;) {
      if (n = s[Ji] || s[le]) {
        if (s = n.alternate,
          n.child !== null || s !== null && s.child !== null)
          for (t = Dy(t); t !== null;) {
            if (s = t[le])
              return s;
            t = Dy(t)
          }
        return n
      }
      t = s,
        s = t.parentNode
    }
    return null
  }
  function ts(t) {
    if (t = t[le] || t[Ji]) {
      var n = t.tag;
      if (n === 5 || n === 6 || n === 13 || n === 26 || n === 27 || n === 3)
        return t
    }
    return null
  }
  function ta(t) {
    var n = t.tag;
    if (n === 5 || n === 26 || n === 27 || n === 6)
      return t.stateNode;
    throw Error(r(33))
  }
  function es(t) {
    var n = t[dh];
    return n || (n = t[dh] = {
      hoistableStyles: new Map,
      hoistableScripts: new Map
    }),
      n
  }
  function It(t) {
    t[Is] = !0
  }
  var hh = new Set
    , mh = {};
  function Ei(t, n) {
    ns(t, n),
      ns(t + "Capture", n)
  }
  function ns(t, n) {
    for (mh[t] = n,
      t = 0; t < n.length; t++)
      hh.add(n[t])
  }
  var l1 = RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$")
    , ph = {}
    , yh = {};
  function u1(t) {
    return sn.call(yh, t) ? !0 : sn.call(ph, t) ? !1 : l1.test(t) ? yh[t] = !0 : (ph[t] = !0,
      !1)
  }
  function Sr(t, n, s) {
    if (u1(n))
      if (s === null)
        t.removeAttribute(n);
      else {
        switch (typeof s) {
          case "undefined":
          case "function":
          case "symbol":
            t.removeAttribute(n);
            return;
          case "boolean":
            var o = n.toLowerCase().slice(0, 5);
            if (o !== "data-" && o !== "aria-") {
              t.removeAttribute(n);
              return
            }
        }
        t.setAttribute(n, "" + s)
      }
  }
  function Tr(t, n, s) {
    if (s === null)
      t.removeAttribute(n);
    else {
      switch (typeof s) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(n);
          return
      }
      t.setAttribute(n, "" + s)
    }
  }
  function vn(t, n, s, o) {
    if (o === null)
      t.removeAttribute(s);
    else {
      switch (typeof o) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          t.removeAttribute(s);
          return
      }
      t.setAttributeNS(n, s, "" + o)
    }
  }
  var Fl, gh;
  function is(t) {
    if (Fl === void 0)
      try {
        throw Error()
      } catch (s) {
        var n = s.stack.trim().match(/\n( *(at )?)/);
        Fl = n && n[1] || "",
          gh = -1 < s.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < s.stack.indexOf("@") ? "@unknown:0:0" : ""
      }
    return `
` + Fl + t + gh
  }
  var ql = !1;
  function Gl(t, n) {
    if (!t || ql)
      return "";
    ql = !0;
    var s = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var o = {
        DetermineComponentFrameRoot: function () {
          try {
            if (n) {
              var X = function () {
                throw Error()
              };
              if (Object.defineProperty(X.prototype, "props", {
                set: function () {
                  throw Error()
                }
              }),
                typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(X, [])
                } catch (B) {
                  var U = B
                }
                Reflect.construct(t, [], X)
              } else {
                try {
                  X.call()
                } catch (B) {
                  U = B
                }
                t.call(X.prototype)
              }
            } else {
              try {
                throw Error()
              } catch (B) {
                U = B
              }
              (X = t()) && typeof X.catch == "function" && X.catch(function () { })
            }
          } catch (B) {
            if (B && U && typeof B.stack == "string")
              return [B.stack, U.stack]
          }
          return [null, null]
        }
      };
      o.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(o.DetermineComponentFrameRoot, "name");
      u && u.configurable && Object.defineProperty(o.DetermineComponentFrameRoot, "name", {
        value: "DetermineComponentFrameRoot"
      });
      var f = o.DetermineComponentFrameRoot()
        , g = f[0]
        , x = f[1];
      if (g && x) {
        var R = g.split(`
`)
          , P = x.split(`
`);
        for (u = o = 0; o < R.length && !R[o].includes("DetermineComponentFrameRoot");)
          o++;
        for (; u < P.length && !P[u].includes("DetermineComponentFrameRoot");)
          u++;
        if (o === R.length || u === P.length)
          for (o = R.length - 1,
            u = P.length - 1; 1 <= o && 0 <= u && R[o] !== P[u];)
            u--;
        for (; 1 <= o && 0 <= u; o--,
          u--)
          if (R[o] !== P[u]) {
            if (o !== 1 || u !== 1)
              do
                if (o--,
                  u--,
                  0 > u || R[o] !== P[u]) {
                  var F = `
` + R[o].replace(" at new ", " at ");
                  return t.displayName && F.includes("<anonymous>") && (F = F.replace("<anonymous>", t.displayName)),
                    F
                }
              while (1 <= o && 0 <= u);
            break
          }
      }
    } finally {
      ql = !1,
        Error.prepareStackTrace = s
    }
    return (s = t ? t.displayName || t.name : "") ? is(s) : ""
  }
  function c1(t) {
    switch (t.tag) {
      case 26:
      case 27:
      case 5:
        return is(t.type);
      case 16:
        return is("Lazy");
      case 13:
        return is("Suspense");
      case 19:
        return is("SuspenseList");
      case 0:
      case 15:
        return Gl(t.type, !1);
      case 11:
        return Gl(t.type.render, !1);
      case 1:
        return Gl(t.type, !0);
      case 31:
        return is("Activity");
      default:
        return ""
    }
  }
  function vh(t) {
    try {
      var n = "";
      do
        n += c1(t),
          t = t.return;
      while (t);
      return n
    } catch (s) {
      return `
Error generating stack: ` + s.message + `
` + s.stack
    }
  }
  function ze(t) {
    switch (typeof t) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return t;
      case "object":
        return t;
      default:
        return ""
    }
  }
  function bh(t) {
    var n = t.type;
    return (t = t.nodeName) && t.toLowerCase() === "input" && (n === "checkbox" || n === "radio")
  }
  function f1(t) {
    var n = bh(t) ? "checked" : "value"
      , s = Object.getOwnPropertyDescriptor(t.constructor.prototype, n)
      , o = "" + t[n];
    if (!t.hasOwnProperty(n) && typeof s < "u" && typeof s.get == "function" && typeof s.set == "function") {
      var u = s.get
        , f = s.set;
      return Object.defineProperty(t, n, {
        configurable: !0,
        get: function () {
          return u.call(this)
        },
        set: function (g) {
          o = "" + g,
            f.call(this, g)
        }
      }),
        Object.defineProperty(t, n, {
          enumerable: s.enumerable
        }),
      {
        getValue: function () {
          return o
        },
        setValue: function (g) {
          o = "" + g
        },
        stopTracking: function () {
          t._valueTracker = null,
            delete t[n]
        }
      }
    }
  }
  function wr(t) {
    t._valueTracker || (t._valueTracker = f1(t))
  }
  function xh(t) {
    if (!t)
      return !1;
    var n = t._valueTracker;
    if (!n)
      return !0;
    var s = n.getValue()
      , o = "";
    return t && (o = bh(t) ? t.checked ? "true" : "false" : t.value),
      t = o,
      t !== s ? (n.setValue(t),
        !0) : !1
  }
  function Er(t) {
    if (t = t || (typeof document < "u" ? document : void 0),
      typeof t > "u")
      return null;
    try {
      return t.activeElement || t.body
    } catch {
      return t.body
    }
  }
  var d1 = /[\n"\\]/g;
  function Le(t) {
    return t.replace(d1, function (n) {
      return "\\" + n.charCodeAt(0).toString(16) + " "
    })
  }
  function Yl(t, n, s, o, u, f, g, x) {
    t.name = "",
      g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? t.type = g : t.removeAttribute("type"),
      n != null ? g === "number" ? (n === 0 && t.value === "" || t.value != n) && (t.value = "" + ze(n)) : t.value !== "" + ze(n) && (t.value = "" + ze(n)) : g !== "submit" && g !== "reset" || t.removeAttribute("value"),
      n != null ? Xl(t, g, ze(n)) : s != null ? Xl(t, g, ze(s)) : o != null && t.removeAttribute("value"),
      u == null && f != null && (t.defaultChecked = !!f),
      u != null && (t.checked = u && typeof u != "function" && typeof u != "symbol"),
      x != null && typeof x != "function" && typeof x != "symbol" && typeof x != "boolean" ? t.name = "" + ze(x) : t.removeAttribute("name")
  }
  function Sh(t, n, s, o, u, f, g, x) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (t.type = f),
      n != null || s != null) {
      if (!(f !== "submit" && f !== "reset" || n != null))
        return;
      s = s != null ? "" + ze(s) : "",
        n = n != null ? "" + ze(n) : s,
        x || n === t.value || (t.value = n),
        t.defaultValue = n
    }
    o = o ?? u,
      o = typeof o != "function" && typeof o != "symbol" && !!o,
      t.checked = x ? t.checked : !!o,
      t.defaultChecked = !!o,
      g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (t.name = g)
  }
  function Xl(t, n, s) {
    n === "number" && Er(t.ownerDocument) === t || t.defaultValue === "" + s || (t.defaultValue = "" + s)
  }
  function ss(t, n, s, o) {
    if (t = t.options,
      n) {
      n = {};
      for (var u = 0; u < s.length; u++)
        n["$" + s[u]] = !0;
      for (s = 0; s < t.length; s++)
        u = n.hasOwnProperty("$" + t[s].value),
          t[s].selected !== u && (t[s].selected = u),
          u && o && (t[s].defaultSelected = !0)
    } else {
      for (s = "" + ze(s),
        n = null,
        u = 0; u < t.length; u++) {
        if (t[u].value === s) {
          t[u].selected = !0,
            o && (t[u].defaultSelected = !0);
          return
        }
        n !== null || t[u].disabled || (n = t[u])
      }
      n !== null && (n.selected = !0)
    }
  }
  function Th(t, n, s) {
    if (n != null && (n = "" + ze(n),
      n !== t.value && (t.value = n),
      s == null)) {
      t.defaultValue !== n && (t.defaultValue = n);
      return
    }
    t.defaultValue = s != null ? "" + ze(s) : ""
  }
  function wh(t, n, s, o) {
    if (n == null) {
      if (o != null) {
        if (s != null)
          throw Error(r(92));
        if (ct(o)) {
          if (1 < o.length)
            throw Error(r(93));
          o = o[0]
        }
        s = o
      }
      s == null && (s = ""),
        n = s
    }
    s = ze(n),
      t.defaultValue = s,
      o = t.textContent,
      o === s && o !== "" && o !== null && (t.value = o)
  }
  function as(t, n) {
    if (n) {
      var s = t.firstChild;
      if (s && s === t.lastChild && s.nodeType === 3) {
        s.nodeValue = n;
        return
      }
    }
    t.textContent = n
  }
  var h1 = new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));
  function Eh(t, n, s) {
    var o = n.indexOf("--") === 0;
    s == null || typeof s == "boolean" || s === "" ? o ? t.setProperty(n, "") : n === "float" ? t.cssFloat = "" : t[n] = "" : o ? t.setProperty(n, s) : typeof s != "number" || s === 0 || h1.has(n) ? n === "float" ? t.cssFloat = s : t[n] = ("" + s).trim() : t[n] = s + "px"
  }
  function Ah(t, n, s) {
    if (n != null && typeof n != "object")
      throw Error(r(62));
    if (t = t.style,
      s != null) {
      for (var o in s)
        !s.hasOwnProperty(o) || n != null && n.hasOwnProperty(o) || (o.indexOf("--") === 0 ? t.setProperty(o, "") : o === "float" ? t.cssFloat = "" : t[o] = "");
      for (var u in n)
        o = n[u],
          n.hasOwnProperty(u) && s[u] !== o && Eh(t, u, o)
    } else
      for (var f in n)
        n.hasOwnProperty(f) && Eh(t, f, n[f])
  }
  function Kl(t) {
    if (t.indexOf("-") === -1)
      return !1;
    switch (t) {
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
  var m1 = new Map([["acceptCharset", "accept-charset"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"], ["crossOrigin", "crossorigin"], ["accentHeight", "accent-height"], ["alignmentBaseline", "alignment-baseline"], ["arabicForm", "arabic-form"], ["baselineShift", "baseline-shift"], ["capHeight", "cap-height"], ["clipPath", "clip-path"], ["clipRule", "clip-rule"], ["colorInterpolation", "color-interpolation"], ["colorInterpolationFilters", "color-interpolation-filters"], ["colorProfile", "color-profile"], ["colorRendering", "color-rendering"], ["dominantBaseline", "dominant-baseline"], ["enableBackground", "enable-background"], ["fillOpacity", "fill-opacity"], ["fillRule", "fill-rule"], ["floodColor", "flood-color"], ["floodOpacity", "flood-opacity"], ["fontFamily", "font-family"], ["fontSize", "font-size"], ["fontSizeAdjust", "font-size-adjust"], ["fontStretch", "font-stretch"], ["fontStyle", "font-style"], ["fontVariant", "font-variant"], ["fontWeight", "font-weight"], ["glyphName", "glyph-name"], ["glyphOrientationHorizontal", "glyph-orientation-horizontal"], ["glyphOrientationVertical", "glyph-orientation-vertical"], ["horizAdvX", "horiz-adv-x"], ["horizOriginX", "horiz-origin-x"], ["imageRendering", "image-rendering"], ["letterSpacing", "letter-spacing"], ["lightingColor", "lighting-color"], ["markerEnd", "marker-end"], ["markerMid", "marker-mid"], ["markerStart", "marker-start"], ["overlinePosition", "overline-position"], ["overlineThickness", "overline-thickness"], ["paintOrder", "paint-order"], ["panose-1", "panose-1"], ["pointerEvents", "pointer-events"], ["renderingIntent", "rendering-intent"], ["shapeRendering", "shape-rendering"], ["stopColor", "stop-color"], ["stopOpacity", "stop-opacity"], ["strikethroughPosition", "strikethrough-position"], ["strikethroughThickness", "strikethrough-thickness"], ["strokeDasharray", "stroke-dasharray"], ["strokeDashoffset", "stroke-dashoffset"], ["strokeLinecap", "stroke-linecap"], ["strokeLinejoin", "stroke-linejoin"], ["strokeMiterlimit", "stroke-miterlimit"], ["strokeOpacity", "stroke-opacity"], ["strokeWidth", "stroke-width"], ["textAnchor", "text-anchor"], ["textDecoration", "text-decoration"], ["textRendering", "text-rendering"], ["transformOrigin", "transform-origin"], ["underlinePosition", "underline-position"], ["underlineThickness", "underline-thickness"], ["unicodeBidi", "unicode-bidi"], ["unicodeRange", "unicode-range"], ["unitsPerEm", "units-per-em"], ["vAlphabetic", "v-alphabetic"], ["vHanging", "v-hanging"], ["vIdeographic", "v-ideographic"], ["vMathematical", "v-mathematical"], ["vectorEffect", "vector-effect"], ["vertAdvY", "vert-adv-y"], ["vertOriginX", "vert-origin-x"], ["vertOriginY", "vert-origin-y"], ["wordSpacing", "word-spacing"], ["writingMode", "writing-mode"], ["xmlnsXlink", "xmlns:xlink"], ["xHeight", "x-height"]])
    , p1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Ar(t) {
    return p1.test("" + t) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : t
  }
  var Ql = null;
  function Zl(t) {
    return t = t.target || t.srcElement || window,
      t.correspondingUseElement && (t = t.correspondingUseElement),
      t.nodeType === 3 ? t.parentNode : t
  }
  var rs = null
    , os = null;
  function Ch(t) {
    var n = ts(t);
    if (n && (t = n.stateNode)) {
      var s = t[pe] || null;
      t: switch (t = n.stateNode,
      n.type) {
        case "input":
          if (Yl(t, s.value, s.defaultValue, s.defaultValue, s.checked, s.defaultChecked, s.type, s.name),
            n = s.name,
            s.type === "radio" && n != null) {
            for (s = t; s.parentNode;)
              s = s.parentNode;
            for (s = s.querySelectorAll('input[name="' + Le("" + n) + '"][type="radio"]'),
              n = 0; n < s.length; n++) {
              var o = s[n];
              if (o !== t && o.form === t.form) {
                var u = o[pe] || null;
                if (!u)
                  throw Error(r(90));
                Yl(o, u.value, u.defaultValue, u.defaultValue, u.checked, u.defaultChecked, u.type, u.name)
              }
            }
            for (n = 0; n < s.length; n++)
              o = s[n],
                o.form === t.form && xh(o)
          }
          break t;
        case "textarea":
          Th(t, s.value, s.defaultValue);
          break t;
        case "select":
          n = s.value,
            n != null && ss(t, !!s.multiple, n, !1)
      }
    }
  }
  var Wl = !1;
  function Rh(t, n, s) {
    if (Wl)
      return t(n, s);
    Wl = !0;
    try {
      var o = t(n);
      return o
    } finally {
      if (Wl = !1,
        (rs !== null || os !== null) && (co(),
          rs && (n = rs,
            t = os,
            os = rs = null,
            Ch(n),
            t)))
        for (n = 0; n < t.length; n++)
          Ch(t[n])
    }
  }
  function ea(t, n) {
    var s = t.stateNode;
    if (s === null)
      return null;
    var o = s[pe] || null;
    if (o === null)
      return null;
    s = o[n];
    t: switch (n) {
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
        (o = !o.disabled) || (t = t.type,
          o = !(t === "button" || t === "input" || t === "select" || t === "textarea")),
          t = !o;
        break t;
      default:
        t = !1
    }
    if (t)
      return null;
    if (s && typeof s != "function")
      throw Error(r(231, n, typeof s));
    return s
  }
  var bn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
    , $l = !1;
  if (bn)
    try {
      var na = {};
      Object.defineProperty(na, "passive", {
        get: function () {
          $l = !0
        }
      }),
        window.addEventListener("test", na, na),
        window.removeEventListener("test", na, na)
    } catch {
      $l = !1
    }
  var Fn = null
    , Jl = null
    , Cr = null;
  function Mh() {
    if (Cr)
      return Cr;
    var t, n = Jl, s = n.length, o, u = "value" in Fn ? Fn.value : Fn.textContent, f = u.length;
    for (t = 0; t < s && n[t] === u[t]; t++)
      ;
    var g = s - t;
    for (o = 1; o <= g && n[s - o] === u[f - o]; o++)
      ;
    return Cr = u.slice(t, 1 < o ? 1 - o : void 0)
  }
  function Rr(t) {
    var n = t.keyCode;
    return "charCode" in t ? (t = t.charCode,
      t === 0 && n === 13 && (t = 13)) : t = n,
      t === 10 && (t = 13),
      32 <= t || t === 13 ? t : 0
  }
  function Mr() {
    return !0
  }
  function Dh() {
    return !1
  }
  function ye(t) {
    function n(s, o, u, f, g) {
      this._reactName = s,
        this._targetInst = u,
        this.type = o,
        this.nativeEvent = f,
        this.target = g,
        this.currentTarget = null;
      for (var x in t)
        t.hasOwnProperty(x) && (s = t[x],
          this[x] = s ? s(f) : f[x]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mr : Dh,
        this.isPropagationStopped = Dh,
        this
    }
    return y(n.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var s = this.nativeEvent;
        s && (s.preventDefault ? s.preventDefault() : typeof s.returnValue != "unknown" && (s.returnValue = !1),
          this.isDefaultPrevented = Mr)
      },
      stopPropagation: function () {
        var s = this.nativeEvent;
        s && (s.stopPropagation ? s.stopPropagation() : typeof s.cancelBubble != "unknown" && (s.cancelBubble = !0),
          this.isPropagationStopped = Mr)
      },
      persist: function () { },
      isPersistent: Mr
    }),
      n
  }
  var Ai = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Dr = ye(Ai), ia = y({}, Ai, {
    view: 0,
    detail: 0
  }), y1 = ye(ia), Il, tu, sa, Or = y({}, ia, {
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
    getModifierState: nu,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0 ? t.fromElement === t.srcElement ? t.toElement : t.fromElement : t.relatedTarget
    },
    movementX: function (t) {
      return "movementX" in t ? t.movementX : (t !== sa && (sa && t.type === "mousemove" ? (Il = t.screenX - sa.screenX,
        tu = t.screenY - sa.screenY) : tu = Il = 0,
        sa = t),
        Il)
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : tu
    }
  }), Oh = ye(Or), g1 = y({}, Or, {
    dataTransfer: 0
  }), v1 = ye(g1), b1 = y({}, ia, {
    relatedTarget: 0
  }), eu = ye(b1), x1 = y({}, Ai, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), S1 = ye(x1), T1 = y({}, Ai, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData
    }
  }), w1 = ye(T1), E1 = y({}, Ai, {
    data: 0
  }), Nh = ye(E1), A1 = {
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
  }, C1 = {
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
  }, R1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function M1(t) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(t) : (t = R1[t]) ? !!n[t] : !1
  }
  function nu() {
    return M1
  }
  var D1 = y({}, ia, {
    key: function (t) {
      if (t.key) {
        var n = A1[t.key] || t.key;
        if (n !== "Unidentified")
          return n
      }
      return t.type === "keypress" ? (t = Rr(t),
        t === 13 ? "Enter" : String.fromCharCode(t)) : t.type === "keydown" || t.type === "keyup" ? C1[t.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nu,
    charCode: function (t) {
      return t.type === "keypress" ? Rr(t) : 0
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    },
    which: function (t) {
      return t.type === "keypress" ? Rr(t) : t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0
    }
  })
    , O1 = ye(D1)
    , N1 = y({}, Or, {
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
    , jh = ye(N1)
    , j1 = y({}, ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: nu
    })
    , _1 = ye(j1)
    , V1 = y({}, Ai, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    })
    , z1 = ye(V1)
    , L1 = y({}, Or, {
      deltaX: function (t) {
        return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0
      },
      deltaY: function (t) {
        return "deltaY" in t ? t.deltaY : "wheelDeltaY" in t ? -t.wheelDeltaY : "wheelDelta" in t ? -t.wheelDelta : 0
      },
      deltaZ: 0,
      deltaMode: 0
    })
    , P1 = ye(L1)
    , U1 = y({}, Ai, {
      newState: 0,
      oldState: 0
    })
    , B1 = ye(U1)
    , k1 = [9, 13, 27, 32]
    , iu = bn && "CompositionEvent" in window
    , aa = null;
  bn && "documentMode" in document && (aa = document.documentMode);
  var H1 = bn && "TextEvent" in window && !aa
    , _h = bn && (!iu || aa && 8 < aa && 11 >= aa)
    , Vh = " "
    , zh = !1;
  function Lh(t, n) {
    switch (t) {
      case "keyup":
        return k1.indexOf(n.keyCode) !== -1;
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
  function Ph(t) {
    return t = t.detail,
      typeof t == "object" && "data" in t ? t.data : null
  }
  var ls = !1;
  function F1(t, n) {
    switch (t) {
      case "compositionend":
        return Ph(n);
      case "keypress":
        return n.which !== 32 ? null : (zh = !0,
          Vh);
      case "textInput":
        return t = n.data,
          t === Vh && zh ? null : t;
      default:
        return null
    }
  }
  function q1(t, n) {
    if (ls)
      return t === "compositionend" || !iu && Lh(t, n) ? (t = Mh(),
        Cr = Jl = Fn = null,
        ls = !1,
        t) : null;
    switch (t) {
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
        return _h && n.locale !== "ko" ? null : n.data;
      default:
        return null
    }
  }
  var G1 = {
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
  function Uh(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n === "input" ? !!G1[t.type] : n === "textarea"
  }
  function Bh(t, n, s, o) {
    rs ? os ? os.push(o) : os = [o] : rs = o,
      n = go(n, "onChange"),
      0 < n.length && (s = new Dr("onChange", "change", null, s, o),
        t.push({
          event: s,
          listeners: n
        }))
  }
  var ra = null
    , oa = null;
  function Y1(t) {
    by(t, 0)
  }
  function Nr(t) {
    var n = ta(t);
    if (xh(n))
      return t
  }
  function kh(t, n) {
    if (t === "change")
      return n
  }
  var Hh = !1;
  if (bn) {
    var su;
    if (bn) {
      var au = "oninput" in document;
      if (!au) {
        var Fh = document.createElement("div");
        Fh.setAttribute("oninput", "return;"),
          au = typeof Fh.oninput == "function"
      }
      su = au
    } else
      su = !1;
    Hh = su && (!document.documentMode || 9 < document.documentMode)
  }
  function qh() {
    ra && (ra.detachEvent("onpropertychange", Gh),
      oa = ra = null)
  }
  function Gh(t) {
    if (t.propertyName === "value" && Nr(oa)) {
      var n = [];
      Bh(n, oa, t, Zl(t)),
        Rh(Y1, n)
    }
  }
  function X1(t, n, s) {
    t === "focusin" ? (qh(),
      ra = n,
      oa = s,
      ra.attachEvent("onpropertychange", Gh)) : t === "focusout" && qh()
  }
  function K1(t) {
    if (t === "selectionchange" || t === "keyup" || t === "keydown")
      return Nr(oa)
  }
  function Q1(t, n) {
    if (t === "click")
      return Nr(n)
  }
  function Z1(t, n) {
    if (t === "input" || t === "change")
      return Nr(n)
  }
  function W1(t, n) {
    return t === n && (t !== 0 || 1 / t === 1 / n) || t !== t && n !== n
  }
  var we = typeof Object.is == "function" ? Object.is : W1;
  function la(t, n) {
    if (we(t, n))
      return !0;
    if (typeof t != "object" || t === null || typeof n != "object" || n === null)
      return !1;
    var s = Object.keys(t)
      , o = Object.keys(n);
    if (s.length !== o.length)
      return !1;
    for (o = 0; o < s.length; o++) {
      var u = s[o];
      if (!sn.call(n, u) || !we(t[u], n[u]))
        return !1
    }
    return !0
  }
  function Yh(t) {
    for (; t && t.firstChild;)
      t = t.firstChild;
    return t
  }
  function Xh(t, n) {
    var s = Yh(t);
    t = 0;
    for (var o; s;) {
      if (s.nodeType === 3) {
        if (o = t + s.textContent.length,
          t <= n && o >= n)
          return {
            node: s,
            offset: n - t
          };
        t = o
      }
      t: {
        for (; s;) {
          if (s.nextSibling) {
            s = s.nextSibling;
            break t
          }
          s = s.parentNode
        }
        s = void 0
      }
      s = Yh(s)
    }
  }
  function Kh(t, n) {
    return t && n ? t === n ? !0 : t && t.nodeType === 3 ? !1 : n && n.nodeType === 3 ? Kh(t, n.parentNode) : "contains" in t ? t.contains(n) : t.compareDocumentPosition ? !!(t.compareDocumentPosition(n) & 16) : !1 : !1
  }
  function Qh(t) {
    t = t != null && t.ownerDocument != null && t.ownerDocument.defaultView != null ? t.ownerDocument.defaultView : window;
    for (var n = Er(t.document); n instanceof t.HTMLIFrameElement;) {
      try {
        var s = typeof n.contentWindow.location.href == "string"
      } catch {
        s = !1
      }
      if (s)
        t = n.contentWindow;
      else
        break;
      n = Er(t.document)
    }
    return n
  }
  function ru(t) {
    var n = t && t.nodeName && t.nodeName.toLowerCase();
    return n && (n === "input" && (t.type === "text" || t.type === "search" || t.type === "tel" || t.type === "url" || t.type === "password") || n === "textarea" || t.contentEditable === "true")
  }
  var $1 = bn && "documentMode" in document && 11 >= document.documentMode
    , us = null
    , ou = null
    , ua = null
    , lu = !1;
  function Zh(t, n, s) {
    var o = s.window === s ? s.document : s.nodeType === 9 ? s : s.ownerDocument;
    lu || us == null || us !== Er(o) || (o = us,
      "selectionStart" in o && ru(o) ? o = {
        start: o.selectionStart,
        end: o.selectionEnd
      } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(),
        o = {
          anchorNode: o.anchorNode,
          anchorOffset: o.anchorOffset,
          focusNode: o.focusNode,
          focusOffset: o.focusOffset
        }),
      ua && la(ua, o) || (ua = o,
        o = go(ou, "onSelect"),
        0 < o.length && (n = new Dr("onSelect", "select", null, n, s),
          t.push({
            event: n,
            listeners: o
          }),
          n.target = us)))
  }
  function Ci(t, n) {
    var s = {};
    return s[t.toLowerCase()] = n.toLowerCase(),
      s["Webkit" + t] = "webkit" + n,
      s["Moz" + t] = "moz" + n,
      s
  }
  var cs = {
    animationend: Ci("Animation", "AnimationEnd"),
    animationiteration: Ci("Animation", "AnimationIteration"),
    animationstart: Ci("Animation", "AnimationStart"),
    transitionrun: Ci("Transition", "TransitionRun"),
    transitionstart: Ci("Transition", "TransitionStart"),
    transitioncancel: Ci("Transition", "TransitionCancel"),
    transitionend: Ci("Transition", "TransitionEnd")
  }
    , uu = {}
    , Wh = {};
  bn && (Wh = document.createElement("div").style,
    "AnimationEvent" in window || (delete cs.animationend.animation,
      delete cs.animationiteration.animation,
      delete cs.animationstart.animation),
    "TransitionEvent" in window || delete cs.transitionend.transition);
  function Ri(t) {
    if (uu[t])
      return uu[t];
    if (!cs[t])
      return t;
    var n = cs[t], s;
    for (s in n)
      if (n.hasOwnProperty(s) && s in Wh)
        return uu[t] = n[s];
    return t
  }
  var $h = Ri("animationend")
    , Jh = Ri("animationiteration")
    , Ih = Ri("animationstart")
    , J1 = Ri("transitionrun")
    , I1 = Ri("transitionstart")
    , tT = Ri("transitioncancel")
    , tm = Ri("transitionend")
    , em = new Map
    , cu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  cu.push("scrollEnd");
  function Ke(t, n) {
    em.set(t, n),
      Ei(n, [t])
  }
  var nm = new WeakMap;
  function Pe(t, n) {
    if (typeof t == "object" && t !== null) {
      var s = nm.get(t);
      return s !== void 0 ? s : (n = {
        value: t,
        source: n,
        stack: vh(n)
      },
        nm.set(t, n),
        n)
    }
    return {
      value: t,
      source: n,
      stack: vh(n)
    }
  }
  var Ue = []
    , fs = 0
    , fu = 0;
  function jr() {
    for (var t = fs, n = fu = fs = 0; n < t;) {
      var s = Ue[n];
      Ue[n++] = null;
      var o = Ue[n];
      Ue[n++] = null;
      var u = Ue[n];
      Ue[n++] = null;
      var f = Ue[n];
      if (Ue[n++] = null,
        o !== null && u !== null) {
        var g = o.pending;
        g === null ? u.next = u : (u.next = g.next,
          g.next = u),
          o.pending = u
      }
      f !== 0 && im(s, u, f)
    }
  }
  function _r(t, n, s, o) {
    Ue[fs++] = t,
      Ue[fs++] = n,
      Ue[fs++] = s,
      Ue[fs++] = o,
      fu |= o,
      t.lanes |= o,
      t = t.alternate,
      t !== null && (t.lanes |= o)
  }
  function du(t, n, s, o) {
    return _r(t, n, s, o),
      Vr(t)
  }
  function ds(t, n) {
    return _r(t, null, null, n),
      Vr(t)
  }
  function im(t, n, s) {
    t.lanes |= s;
    var o = t.alternate;
    o !== null && (o.lanes |= s);
    for (var u = !1, f = t.return; f !== null;)
      f.childLanes |= s,
        o = f.alternate,
        o !== null && (o.childLanes |= s),
        f.tag === 22 && (t = f.stateNode,
          t === null || t._visibility & 1 || (u = !0)),
        t = f,
        f = f.return;
    return t.tag === 3 ? (f = t.stateNode,
      u && n !== null && (u = 31 - Te(s),
        t = f.hiddenUpdates,
        o = t[u],
        o === null ? t[u] = [n] : o.push(n),
        n.lane = s | 536870912),
      f) : null
  }
  function Vr(t) {
    if (50 < Va)
      throw Va = 0,
      vc = null,
      Error(r(185));
    for (var n = t.return; n !== null;)
      t = n,
        n = t.return;
    return t.tag === 3 ? t.stateNode : null
  }
  var hs = {};
  function eT(t, n, s, o) {
    this.tag = t,
      this.key = s,
      this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
      this.index = 0,
      this.refCleanup = this.ref = null,
      this.pendingProps = n,
      this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
      this.mode = o,
      this.subtreeFlags = this.flags = 0,
      this.deletions = null,
      this.childLanes = this.lanes = 0,
      this.alternate = null
  }
  function Ee(t, n, s, o) {
    return new eT(t, n, s, o)
  }
  function hu(t) {
    return t = t.prototype,
      !(!t || !t.isReactComponent)
  }
  function xn(t, n) {
    var s = t.alternate;
    return s === null ? (s = Ee(t.tag, n, t.key, t.mode),
      s.elementType = t.elementType,
      s.type = t.type,
      s.stateNode = t.stateNode,
      s.alternate = t,
      t.alternate = s) : (s.pendingProps = n,
        s.type = t.type,
        s.flags = 0,
        s.subtreeFlags = 0,
        s.deletions = null),
      s.flags = t.flags & 65011712,
      s.childLanes = t.childLanes,
      s.lanes = t.lanes,
      s.child = t.child,
      s.memoizedProps = t.memoizedProps,
      s.memoizedState = t.memoizedState,
      s.updateQueue = t.updateQueue,
      n = t.dependencies,
      s.dependencies = n === null ? null : {
        lanes: n.lanes,
        firstContext: n.firstContext
      },
      s.sibling = t.sibling,
      s.index = t.index,
      s.ref = t.ref,
      s.refCleanup = t.refCleanup,
      s
  }
  function sm(t, n) {
    t.flags &= 65011714;
    var s = t.alternate;
    return s === null ? (t.childLanes = 0,
      t.lanes = n,
      t.child = null,
      t.subtreeFlags = 0,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.updateQueue = null,
      t.dependencies = null,
      t.stateNode = null) : (t.childLanes = s.childLanes,
        t.lanes = s.lanes,
        t.child = s.child,
        t.subtreeFlags = 0,
        t.deletions = null,
        t.memoizedProps = s.memoizedProps,
        t.memoizedState = s.memoizedState,
        t.updateQueue = s.updateQueue,
        t.type = s.type,
        n = s.dependencies,
        t.dependencies = n === null ? null : {
          lanes: n.lanes,
          firstContext: n.firstContext
        }),
      t
  }
  function zr(t, n, s, o, u, f) {
    var g = 0;
    if (o = t,
      typeof t == "function")
      hu(t) && (g = 1);
    else if (typeof t == "string")
      g = iw(t, s, ut.current) ? 26 : t === "html" || t === "head" || t === "body" ? 27 : 5;
    else
      t: switch (t) {
        case $:
          return t = Ee(31, s, n, u),
            t.elementType = $,
            t.lanes = f,
            t;
        case E:
          return Mi(s.children, u, f, n);
        case A:
          g = 8,
            u |= 24;
          break;
        case C:
          return t = Ee(12, s, n, u | 2),
            t.elementType = C,
            t.lanes = f,
            t;
        case k:
          return t = Ee(13, s, n, u),
            t.elementType = k,
            t.lanes = f,
            t;
        case Q:
          return t = Ee(19, s, n, u),
            t.elementType = Q,
            t.lanes = f,
            t;
        default:
          if (typeof t == "object" && t !== null)
            switch (t.$$typeof) {
              case O:
              case j:
                g = 10;
                break t;
              case V:
                g = 9;
                break t;
              case L:
                g = 11;
                break t;
              case Z:
                g = 14;
                break t;
              case H:
                g = 16,
                  o = null;
                break t
            }
          g = 29,
            s = Error(r(130, t === null ? "null" : typeof t, "")),
            o = null
      }
    return n = Ee(g, s, n, u),
      n.elementType = t,
      n.type = o,
      n.lanes = f,
      n
  }
  function Mi(t, n, s, o) {
    return t = Ee(7, t, o, n),
      t.lanes = s,
      t
  }
  function mu(t, n, s) {
    return t = Ee(6, t, null, n),
      t.lanes = s,
      t
  }
  function pu(t, n, s) {
    return n = Ee(4, t.children !== null ? t.children : [], t.key, n),
      n.lanes = s,
      n.stateNode = {
        containerInfo: t.containerInfo,
        pendingChildren: null,
        implementation: t.implementation
      },
      n
  }
  var ms = []
    , ps = 0
    , Lr = null
    , Pr = 0
    , Be = []
    , ke = 0
    , Di = null
    , Sn = 1
    , Tn = "";
  function Oi(t, n) {
    ms[ps++] = Pr,
      ms[ps++] = Lr,
      Lr = t,
      Pr = n
  }
  function am(t, n, s) {
    Be[ke++] = Sn,
      Be[ke++] = Tn,
      Be[ke++] = Di,
      Di = t;
    var o = Sn;
    t = Tn;
    var u = 32 - Te(o) - 1;
    o &= ~(1 << u),
      s += 1;
    var f = 32 - Te(n) + u;
    if (30 < f) {
      var g = u - u % 5;
      f = (o & (1 << g) - 1).toString(32),
        o >>= g,
        u -= g,
        Sn = 1 << 32 - Te(n) + u | s << u | o,
        Tn = f + t
    } else
      Sn = 1 << f | s << u | o,
        Tn = t
  }
  function yu(t) {
    t.return !== null && (Oi(t, 1),
      am(t, 1, 0))
  }
  function gu(t) {
    for (; t === Lr;)
      Lr = ms[--ps],
        ms[ps] = null,
        Pr = ms[--ps],
        ms[ps] = null;
    for (; t === Di;)
      Di = Be[--ke],
        Be[ke] = null,
        Tn = Be[--ke],
        Be[ke] = null,
        Sn = Be[--ke],
        Be[ke] = null
  }
  var fe = null
    , kt = null
    , At = !1
    , Ni = null
    , rn = !1
    , vu = Error(r(519));
  function ji(t) {
    var n = Error(r(418, ""));
    throw da(Pe(n, t)),
    vu
  }
  function rm(t) {
    var n = t.stateNode
      , s = t.type
      , o = t.memoizedProps;
    switch (n[le] = t,
    n[pe] = o,
    s) {
      case "dialog":
        Tt("cancel", n),
          Tt("close", n);
        break;
      case "iframe":
      case "object":
      case "embed":
        Tt("load", n);
        break;
      case "video":
      case "audio":
        for (s = 0; s < La.length; s++)
          Tt(La[s], n);
        break;
      case "source":
        Tt("error", n);
        break;
      case "img":
      case "image":
      case "link":
        Tt("error", n),
          Tt("load", n);
        break;
      case "details":
        Tt("toggle", n);
        break;
      case "input":
        Tt("invalid", n),
          Sh(n, o.value, o.defaultValue, o.checked, o.defaultChecked, o.type, o.name, !0),
          wr(n);
        break;
      case "select":
        Tt("invalid", n);
        break;
      case "textarea":
        Tt("invalid", n),
          wh(n, o.value, o.defaultValue, o.children),
          wr(n)
    }
    s = o.children,
      typeof s != "string" && typeof s != "number" && typeof s != "bigint" || n.textContent === "" + s || o.suppressHydrationWarning === !0 || wy(n.textContent, s) ? (o.popover != null && (Tt("beforetoggle", n),
        Tt("toggle", n)),
        o.onScroll != null && Tt("scroll", n),
        o.onScrollEnd != null && Tt("scrollend", n),
        o.onClick != null && (n.onclick = vo),
        n = !0) : n = !1,
      n || ji(t)
  }
  function om(t) {
    for (fe = t.return; fe;)
      switch (fe.tag) {
        case 5:
        case 13:
          rn = !1;
          return;
        case 27:
        case 3:
          rn = !0;
          return;
        default:
          fe = fe.return
      }
  }
  function ca(t) {
    if (t !== fe)
      return !1;
    if (!At)
      return om(t),
        At = !0,
        !1;
    var n = t.tag, s;
    if ((s = n !== 3 && n !== 27) && ((s = n === 5) && (s = t.type,
      s = !(s !== "form" && s !== "button") || Vc(t.type, t.memoizedProps)),
      s = !s),
      s && kt && ji(t),
      om(t),
      n === 13) {
      if (t = t.memoizedState,
        t = t !== null ? t.dehydrated : null,
        !t)
        throw Error(r(317));
      t: {
        for (t = t.nextSibling,
          n = 0; t;) {
          if (t.nodeType === 8)
            if (s = t.data,
              s === "/$") {
              if (n === 0) {
                kt = Ze(t.nextSibling);
                break t
              }
              n--
            } else
              s !== "$" && s !== "$!" && s !== "$?" || n++;
          t = t.nextSibling
        }
        kt = null
      }
    } else
      n === 27 ? (n = kt,
        si(t.type) ? (t = Uc,
          Uc = null,
          kt = t) : kt = n) : kt = fe ? Ze(t.stateNode.nextSibling) : null;
    return !0
  }
  function fa() {
    kt = fe = null,
      At = !1
  }
  function lm() {
    var t = Ni;
    return t !== null && (be === null ? be = t : be.push.apply(be, t),
      Ni = null),
      t
  }
  function da(t) {
    Ni === null ? Ni = [t] : Ni.push(t)
  }
  var bu = q(null)
    , _i = null
    , wn = null;
  function qn(t, n, s) {
    J(bu, n._currentValue),
      n._currentValue = s
  }
  function En(t) {
    t._currentValue = bu.current,
      tt(bu)
  }
  function xu(t, n, s) {
    for (; t !== null;) {
      var o = t.alternate;
      if ((t.childLanes & n) !== n ? (t.childLanes |= n,
        o !== null && (o.childLanes |= n)) : o !== null && (o.childLanes & n) !== n && (o.childLanes |= n),
        t === s)
        break;
      t = t.return
    }
  }
  function Su(t, n, s, o) {
    var u = t.child;
    for (u !== null && (u.return = t); u !== null;) {
      var f = u.dependencies;
      if (f !== null) {
        var g = u.child;
        f = f.firstContext;
        t: for (; f !== null;) {
          var x = f;
          f = u;
          for (var R = 0; R < n.length; R++)
            if (x.context === n[R]) {
              f.lanes |= s,
                x = f.alternate,
                x !== null && (x.lanes |= s),
                xu(f.return, s, t),
                o || (g = null);
              break t
            }
          f = x.next
        }
      } else if (u.tag === 18) {
        if (g = u.return,
          g === null)
          throw Error(r(341));
        g.lanes |= s,
          f = g.alternate,
          f !== null && (f.lanes |= s),
          xu(g, s, t),
          g = null
      } else
        g = u.child;
      if (g !== null)
        g.return = u;
      else
        for (g = u; g !== null;) {
          if (g === t) {
            g = null;
            break
          }
          if (u = g.sibling,
            u !== null) {
            u.return = g.return,
              g = u;
            break
          }
          g = g.return
        }
      u = g
    }
  }
  function ha(t, n, s, o) {
    t = null;
    for (var u = n, f = !1; u !== null;) {
      if (!f) {
        if ((u.flags & 524288) !== 0)
          f = !0;
        else if ((u.flags & 262144) !== 0)
          break
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null)
          throw Error(r(387));
        if (g = g.memoizedProps,
          g !== null) {
          var x = u.type;
          we(u.pendingProps.value, g.value) || (t !== null ? t.push(x) : t = [x])
        }
      } else if (u === Pt.current) {
        if (g = u.alternate,
          g === null)
          throw Error(r(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (t !== null ? t.push(Fa) : t = [Fa])
      }
      u = u.return
    }
    t !== null && Su(n, t, s, o),
      n.flags |= 262144
  }
  function Ur(t) {
    for (t = t.firstContext; t !== null;) {
      if (!we(t.context._currentValue, t.memoizedValue))
        return !0;
      t = t.next
    }
    return !1
  }
  function Vi(t) {
    _i = t,
      wn = null,
      t = t.dependencies,
      t !== null && (t.firstContext = null)
  }
  function ue(t) {
    return um(_i, t)
  }
  function Br(t, n) {
    return _i === null && Vi(t),
      um(t, n)
  }
  function um(t, n) {
    var s = n._currentValue;
    if (n = {
      context: n,
      memoizedValue: s,
      next: null
    },
      wn === null) {
      if (t === null)
        throw Error(r(308));
      wn = n,
        t.dependencies = {
          lanes: 0,
          firstContext: n
        },
        t.flags |= 524288
    } else
      wn = wn.next = n;
    return s
  }
  var nT = typeof AbortController < "u" ? AbortController : function () {
    var t = []
      , n = this.signal = {
        aborted: !1,
        addEventListener: function (s, o) {
          t.push(o)
        }
      };
    this.abort = function () {
      n.aborted = !0,
        t.forEach(function (s) {
          return s()
        })
    }
  }
    , iT = e.unstable_scheduleCallback
    , sT = e.unstable_NormalPriority
    , Qt = {
      $$typeof: j,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0
    };
  function Tu() {
    return {
      controller: new nT,
      data: new Map,
      refCount: 0
    }
  }
  function ma(t) {
    t.refCount--,
      t.refCount === 0 && iT(sT, function () {
        t.controller.abort()
      })
  }
  var pa = null
    , wu = 0
    , ys = 0
    , gs = null;
  function aT(t, n) {
    if (pa === null) {
      var s = pa = [];
      wu = 0,
        ys = Ac(),
        gs = {
          status: "pending",
          value: void 0,
          then: function (o) {
            s.push(o)
          }
        }
    }
    return wu++,
      n.then(cm, cm),
      n
  }
  function cm() {
    if (--wu === 0 && pa !== null) {
      gs !== null && (gs.status = "fulfilled");
      var t = pa;
      pa = null,
        ys = 0,
        gs = null;
      for (var n = 0; n < t.length; n++)
        (0,
          t[n])()
    }
  }
  function rT(t, n) {
    var s = []
      , o = {
        status: "pending",
        value: null,
        reason: null,
        then: function (u) {
          s.push(u)
        }
      };
    return t.then(function () {
      o.status = "fulfilled",
        o.value = n;
      for (var u = 0; u < s.length; u++)
        (0,
          s[u])(n)
    }, function (u) {
      for (o.status = "rejected",
        o.reason = u,
        u = 0; u < s.length; u++)
        (0,
          s[u])(void 0)
    }),
      o
  }
  var fm = _.S;
  _.S = function (t, n) {
    typeof n == "object" && n !== null && typeof n.then == "function" && aT(t, n),
      fm !== null && fm(t, n)
  }
    ;
  var zi = q(null);
  function Eu() {
    var t = zi.current;
    return t !== null ? t : zt.pooledCache
  }
  function kr(t, n) {
    n === null ? J(zi, zi.current) : J(zi, n.pool)
  }
  function dm() {
    var t = Eu();
    return t === null ? null : {
      parent: Qt._currentValue,
      pool: t
    }
  }
  var ya = Error(r(460))
    , hm = Error(r(474))
    , Hr = Error(r(542))
    , Au = {
      then: function () { }
    };
  function mm(t) {
    return t = t.status,
      t === "fulfilled" || t === "rejected"
  }
  function Fr() { }
  function pm(t, n, s) {
    switch (s = t[s],
    s === void 0 ? t.push(n) : s !== n && (n.then(Fr, Fr),
      n = s),
    n.status) {
      case "fulfilled":
        return n.value;
      case "rejected":
        throw t = n.reason,
        gm(t),
        t;
      default:
        if (typeof n.status == "string")
          n.then(Fr, Fr);
        else {
          if (t = zt,
            t !== null && 100 < t.shellSuspendCounter)
            throw Error(r(482));
          t = n,
            t.status = "pending",
            t.then(function (o) {
              if (n.status === "pending") {
                var u = n;
                u.status = "fulfilled",
                  u.value = o
              }
            }, function (o) {
              if (n.status === "pending") {
                var u = n;
                u.status = "rejected",
                  u.reason = o
              }
            })
        }
        switch (n.status) {
          case "fulfilled":
            return n.value;
          case "rejected":
            throw t = n.reason,
            gm(t),
            t
        }
        throw ga = n,
        ya
    }
  }
  var ga = null;
  function ym() {
    if (ga === null)
      throw Error(r(459));
    var t = ga;
    return ga = null,
      t
  }
  function gm(t) {
    if (t === ya || t === Hr)
      throw Error(r(483))
  }
  var Gn = !1;
  function Cu(t) {
    t.updateQueue = {
      baseState: t.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: {
        pending: null,
        lanes: 0,
        hiddenCallbacks: null
      },
      callbacks: null
    }
  }
  function Ru(t, n) {
    t = t.updateQueue,
      n.updateQueue === t && (n.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        callbacks: null
      })
  }
  function Yn(t) {
    return {
      lane: t,
      tag: 0,
      payload: null,
      callback: null,
      next: null
    }
  }
  function Xn(t, n, s) {
    var o = t.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared,
      (Mt & 2) !== 0) {
      var u = o.pending;
      return u === null ? n.next = n : (n.next = u.next,
        u.next = n),
        o.pending = n,
        n = Vr(t),
        im(t, null, s),
        n
    }
    return _r(t, o, n, s),
      Vr(t)
  }
  function va(t, n, s) {
    if (n = n.updateQueue,
      n !== null && (n = n.shared,
        (s & 4194048) !== 0)) {
      var o = n.lanes;
      o &= t.pendingLanes,
        s |= o,
        n.lanes = s,
        ch(t, s)
    }
  }
  function Mu(t, n) {
    var s = t.updateQueue
      , o = t.alternate;
    if (o !== null && (o = o.updateQueue,
      s === o)) {
      var u = null
        , f = null;
      if (s = s.firstBaseUpdate,
        s !== null) {
        do {
          var g = {
            lane: s.lane,
            tag: s.tag,
            payload: s.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = g : f = f.next = g,
            s = s.next
        } while (s !== null);
        f === null ? u = f = n : f = f.next = n
      } else
        u = f = n;
      s = {
        baseState: o.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: o.shared,
        callbacks: o.callbacks
      },
        t.updateQueue = s;
      return
    }
    t = s.lastBaseUpdate,
      t === null ? s.firstBaseUpdate = n : t.next = n,
      s.lastBaseUpdate = n
  }
  var Du = !1;
  function ba() {
    if (Du) {
      var t = gs;
      if (t !== null)
        throw t
    }
  }
  function xa(t, n, s, o) {
    Du = !1;
    var u = t.updateQueue;
    Gn = !1;
    var f = u.firstBaseUpdate
      , g = u.lastBaseUpdate
      , x = u.shared.pending;
    if (x !== null) {
      u.shared.pending = null;
      var R = x
        , P = R.next;
      R.next = null,
        g === null ? f = P : g.next = P,
        g = R;
      var F = t.alternate;
      F !== null && (F = F.updateQueue,
        x = F.lastBaseUpdate,
        x !== g && (x === null ? F.firstBaseUpdate = P : x.next = P,
          F.lastBaseUpdate = R))
    }
    if (f !== null) {
      var X = u.baseState;
      g = 0,
        F = P = R = null,
        x = f;
      do {
        var U = x.lane & -536870913
          , B = U !== x.lane;
        if (B ? (wt & U) === U : (o & U) === U) {
          U !== 0 && U === ys && (Du = !0),
            F !== null && (F = F.next = {
              lane: 0,
              tag: x.tag,
              payload: x.payload,
              callback: null,
              next: null
            });
          t: {
            var pt = t
              , dt = x;
            U = n;
            var jt = s;
            switch (dt.tag) {
              case 1:
                if (pt = dt.payload,
                  typeof pt == "function") {
                  X = pt.call(jt, X, U);
                  break t
                }
                X = pt;
                break t;
              case 3:
                pt.flags = pt.flags & -65537 | 128;
              case 0:
                if (pt = dt.payload,
                  U = typeof pt == "function" ? pt.call(jt, X, U) : pt,
                  U == null)
                  break t;
                X = y({}, X, U);
                break t;
              case 2:
                Gn = !0
            }
          }
          U = x.callback,
            U !== null && (t.flags |= 64,
              B && (t.flags |= 8192),
              B = u.callbacks,
              B === null ? u.callbacks = [U] : B.push(U))
        } else
          B = {
            lane: U,
            tag: x.tag,
            payload: x.payload,
            callback: x.callback,
            next: null
          },
            F === null ? (P = F = B,
              R = X) : F = F.next = B,
            g |= U;
        if (x = x.next,
          x === null) {
          if (x = u.shared.pending,
            x === null)
            break;
          B = x,
            x = B.next,
            B.next = null,
            u.lastBaseUpdate = B,
            u.shared.pending = null
        }
      } while (!0);
      F === null && (R = X),
        u.baseState = R,
        u.firstBaseUpdate = P,
        u.lastBaseUpdate = F,
        f === null && (u.shared.lanes = 0),
        ti |= g,
        t.lanes = g,
        t.memoizedState = X
    }
  }
  function vm(t, n) {
    if (typeof t != "function")
      throw Error(r(191, t));
    t.call(n)
  }
  function bm(t, n) {
    var s = t.callbacks;
    if (s !== null)
      for (t.callbacks = null,
        t = 0; t < s.length; t++)
        vm(s[t], n)
  }
  var vs = q(null)
    , qr = q(0);
  function xm(t, n) {
    t = Nn,
      J(qr, t),
      J(vs, n),
      Nn = t | n.baseLanes
  }
  function Ou() {
    J(qr, Nn),
      J(vs, vs.current)
  }
  function Nu() {
    Nn = qr.current,
      tt(vs),
      tt(qr)
  }
  var Kn = 0
    , vt = null
    , Ot = null
    , Yt = null
    , Gr = !1
    , bs = !1
    , Li = !1
    , Yr = 0
    , Sa = 0
    , xs = null
    , oT = 0;
  function qt() {
    throw Error(r(321))
  }
  function ju(t, n) {
    if (n === null)
      return !1;
    for (var s = 0; s < n.length && s < t.length; s++)
      if (!we(t[s], n[s]))
        return !1;
    return !0
  }
  function _u(t, n, s, o, u, f) {
    return Kn = f,
      vt = n,
      n.memoizedState = null,
      n.updateQueue = null,
      n.lanes = 0,
      _.H = t === null || t.memoizedState === null ? ip : sp,
      Li = !1,
      f = s(o, u),
      Li = !1,
      bs && (f = Tm(n, s, o, u)),
      Sm(t),
      f
  }
  function Sm(t) {
    _.H = $r;
    var n = Ot !== null && Ot.next !== null;
    if (Kn = 0,
      Yt = Ot = vt = null,
      Gr = !1,
      Sa = 0,
      xs = null,
      n)
      throw Error(r(300));
    t === null || te || (t = t.dependencies,
      t !== null && Ur(t) && (te = !0))
  }
  function Tm(t, n, s, o) {
    vt = t;
    var u = 0;
    do {
      if (bs && (xs = null),
        Sa = 0,
        bs = !1,
        25 <= u)
        throw Error(r(301));
      if (u += 1,
        Yt = Ot = null,
        t.updateQueue != null) {
        var f = t.updateQueue;
        f.lastEffect = null,
          f.events = null,
          f.stores = null,
          f.memoCache != null && (f.memoCache.index = 0)
      }
      _.H = mT,
        f = n(s, o)
    } while (bs);
    return f
  }
  function lT() {
    var t = _.H
      , n = t.useState()[0];
    return n = typeof n.then == "function" ? Ta(n) : n,
      t = t.useState()[0],
      (Ot !== null ? Ot.memoizedState : null) !== t && (vt.flags |= 1024),
      n
  }
  function Vu() {
    var t = Yr !== 0;
    return Yr = 0,
      t
  }
  function zu(t, n, s) {
    n.updateQueue = t.updateQueue,
      n.flags &= -2053,
      t.lanes &= ~s
  }
  function Lu(t) {
    if (Gr) {
      for (t = t.memoizedState; t !== null;) {
        var n = t.queue;
        n !== null && (n.pending = null),
          t = t.next
      }
      Gr = !1
    }
    Kn = 0,
      Yt = Ot = vt = null,
      bs = !1,
      Sa = Yr = 0,
      xs = null
  }
  function ge() {
    var t = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? vt.memoizedState = Yt = t : Yt = Yt.next = t,
      Yt
  }
  function Xt() {
    if (Ot === null) {
      var t = vt.alternate;
      t = t !== null ? t.memoizedState : null
    } else
      t = Ot.next;
    var n = Yt === null ? vt.memoizedState : Yt.next;
    if (n !== null)
      Yt = n,
        Ot = t;
    else {
      if (t === null)
        throw vt.alternate === null ? Error(r(467)) : Error(r(310));
      Ot = t,
        t = {
          memoizedState: Ot.memoizedState,
          baseState: Ot.baseState,
          baseQueue: Ot.baseQueue,
          queue: Ot.queue,
          next: null
        },
        Yt === null ? vt.memoizedState = Yt = t : Yt = Yt.next = t
    }
    return Yt
  }
  function Pu() {
    return {
      lastEffect: null,
      events: null,
      stores: null,
      memoCache: null
    }
  }
  function Ta(t) {
    var n = Sa;
    return Sa += 1,
      xs === null && (xs = []),
      t = pm(xs, t, n),
      n = vt,
      (Yt === null ? n.memoizedState : Yt.next) === null && (n = n.alternate,
        _.H = n === null || n.memoizedState === null ? ip : sp),
      t
  }
  function Xr(t) {
    if (t !== null && typeof t == "object") {
      if (typeof t.then == "function")
        return Ta(t);
      if (t.$$typeof === j)
        return ue(t)
    }
    throw Error(r(438, String(t)))
  }
  function Uu(t) {
    var n = null
      , s = vt.updateQueue;
    if (s !== null && (n = s.memoCache),
      n == null) {
      var o = vt.alternate;
      o !== null && (o = o.updateQueue,
        o !== null && (o = o.memoCache,
          o != null && (n = {
            data: o.data.map(function (u) {
              return u.slice()
            }),
            index: 0
          })))
    }
    if (n == null && (n = {
      data: [],
      index: 0
    }),
      s === null && (s = Pu(),
        vt.updateQueue = s),
      s.memoCache = n,
      s = n.data[n.index],
      s === void 0)
      for (s = n.data[n.index] = Array(t),
        o = 0; o < t; o++)
        s[o] = W;
    return n.index++,
      s
  }
  function An(t, n) {
    return typeof n == "function" ? n(t) : n
  }
  function Kr(t) {
    var n = Xt();
    return Bu(n, Ot, t)
  }
  function Bu(t, n, s) {
    var o = t.queue;
    if (o === null)
      throw Error(r(311));
    o.lastRenderedReducer = s;
    var u = t.baseQueue
      , f = o.pending;
    if (f !== null) {
      if (u !== null) {
        var g = u.next;
        u.next = f.next,
          f.next = g
      }
      n.baseQueue = u = f,
        o.pending = null
    }
    if (f = t.baseState,
      u === null)
      t.memoizedState = f;
    else {
      n = u.next;
      var x = g = null
        , R = null
        , P = n
        , F = !1;
      do {
        var X = P.lane & -536870913;
        if (X !== P.lane ? (wt & X) === X : (Kn & X) === X) {
          var U = P.revertLane;
          if (U === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }),
              X === ys && (F = !0);
          else if ((Kn & U) === U) {
            P = P.next,
              U === ys && (F = !0);
            continue
          } else
            X = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            },
              R === null ? (x = R = X,
                g = f) : R = R.next = X,
              vt.lanes |= U,
              ti |= U;
          X = P.action,
            Li && s(f, X),
            f = P.hasEagerState ? P.eagerState : s(f, X)
        } else
          U = {
            lane: X,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          },
            R === null ? (x = R = U,
              g = f) : R = R.next = U,
            vt.lanes |= X,
            ti |= X;
        P = P.next
      } while (P !== null && P !== n);
      if (R === null ? g = f : R.next = x,
        !we(f, t.memoizedState) && (te = !0,
          F && (s = gs,
            s !== null)))
        throw s;
      t.memoizedState = f,
        t.baseState = g,
        t.baseQueue = R,
        o.lastRenderedState = f
    }
    return u === null && (o.lanes = 0),
      [t.memoizedState, o.dispatch]
  }
  function ku(t) {
    var n = Xt()
      , s = n.queue;
    if (s === null)
      throw Error(r(311));
    s.lastRenderedReducer = t;
    var o = s.dispatch
      , u = s.pending
      , f = n.memoizedState;
    if (u !== null) {
      s.pending = null;
      var g = u = u.next;
      do
        f = t(f, g.action),
          g = g.next;
      while (g !== u);
      we(f, n.memoizedState) || (te = !0),
        n.memoizedState = f,
        n.baseQueue === null && (n.baseState = f),
        s.lastRenderedState = f
    }
    return [f, o]
  }
  function wm(t, n, s) {
    var o = vt
      , u = Xt()
      , f = At;
    if (f) {
      if (s === void 0)
        throw Error(r(407));
      s = s()
    } else
      s = n();
    var g = !we((Ot || u).memoizedState, s);
    g && (u.memoizedState = s,
      te = !0),
      u = u.queue;
    var x = Cm.bind(null, o, u, t);
    if (wa(2048, 8, x, [t]),
      u.getSnapshot !== n || g || Yt !== null && Yt.memoizedState.tag & 1) {
      if (o.flags |= 2048,
        Ss(9, Qr(), Am.bind(null, o, u, s, n), null),
        zt === null)
        throw Error(r(349));
      f || (Kn & 124) !== 0 || Em(o, n, s)
    }
    return s
  }
  function Em(t, n, s) {
    t.flags |= 16384,
      t = {
        getSnapshot: n,
        value: s
      },
      n = vt.updateQueue,
      n === null ? (n = Pu(),
        vt.updateQueue = n,
        n.stores = [t]) : (s = n.stores,
          s === null ? n.stores = [t] : s.push(t))
  }
  function Am(t, n, s, o) {
    n.value = s,
      n.getSnapshot = o,
      Rm(n) && Mm(t)
  }
  function Cm(t, n, s) {
    return s(function () {
      Rm(n) && Mm(t)
    })
  }
  function Rm(t) {
    var n = t.getSnapshot;
    t = t.value;
    try {
      var s = n();
      return !we(t, s)
    } catch {
      return !0
    }
  }
  function Mm(t) {
    var n = ds(t, 2);
    n !== null && De(n, t, 2)
  }
  function Hu(t) {
    var n = ge();
    if (typeof t == "function") {
      var s = t;
      if (t = s(),
        Li) {
        kn(!0);
        try {
          s()
        } finally {
          kn(!1)
        }
      }
    }
    return n.memoizedState = n.baseState = t,
      n.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: t
      },
      n
  }
  function Dm(t, n, s, o) {
    return t.baseState = s,
      Bu(t, Ot, typeof o == "function" ? o : An)
  }
  function uT(t, n, s, o, u) {
    if (Wr(t))
      throw Error(r(485));
    if (t = n.action,
      t !== null) {
      var f = {
        payload: u,
        action: t,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (g) {
          f.listeners.push(g)
        }
      };
      _.T !== null ? s(!0) : f.isTransition = !1,
        o(f),
        s = n.pending,
        s === null ? (f.next = n.pending = f,
          Om(n, f)) : (f.next = s.next,
            n.pending = s.next = f)
    }
  }
  function Om(t, n) {
    var s = n.action
      , o = n.payload
      , u = t.state;
    if (n.isTransition) {
      var f = _.T
        , g = {};
      _.T = g;
      try {
        var x = s(u, o)
          , R = _.S;
        R !== null && R(g, x),
          Nm(t, n, x)
      } catch (P) {
        Fu(t, n, P)
      } finally {
        _.T = f
      }
    } else
      try {
        f = s(u, o),
          Nm(t, n, f)
      } catch (P) {
        Fu(t, n, P)
      }
  }
  function Nm(t, n, s) {
    s !== null && typeof s == "object" && typeof s.then == "function" ? s.then(function (o) {
      jm(t, n, o)
    }, function (o) {
      return Fu(t, n, o)
    }) : jm(t, n, s)
  }
  function jm(t, n, s) {
    n.status = "fulfilled",
      n.value = s,
      _m(n),
      t.state = s,
      n = t.pending,
      n !== null && (s = n.next,
        s === n ? t.pending = null : (s = s.next,
          n.next = s,
          Om(t, s)))
  }
  function Fu(t, n, s) {
    var o = t.pending;
    if (t.pending = null,
      o !== null) {
      o = o.next;
      do
        n.status = "rejected",
          n.reason = s,
          _m(n),
          n = n.next;
      while (n !== o)
    }
    t.action = null
  }
  function _m(t) {
    t = t.listeners;
    for (var n = 0; n < t.length; n++)
      (0,
        t[n])()
  }
  function Vm(t, n) {
    return n
  }
  function zm(t, n) {
    if (At) {
      var s = zt.formState;
      if (s !== null) {
        t: {
          var o = vt;
          if (At) {
            if (kt) {
              e: {
                for (var u = kt, f = rn; u.nodeType !== 8;) {
                  if (!f) {
                    u = null;
                    break e
                  }
                  if (u = Ze(u.nextSibling),
                    u === null) {
                    u = null;
                    break e
                  }
                }
                f = u.data,
                  u = f === "F!" || f === "F" ? u : null
              }
              if (u) {
                kt = Ze(u.nextSibling),
                  o = u.data === "F!";
                break t
              }
            }
            ji(o)
          }
          o = !1
        }
        o && (n = s[0])
      }
    }
    return s = ge(),
      s.memoizedState = s.baseState = n,
      o = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vm,
        lastRenderedState: n
      },
      s.queue = o,
      s = tp.bind(null, vt, o),
      o.dispatch = s,
      o = Hu(!1),
      f = Ku.bind(null, vt, !1, o.queue),
      o = ge(),
      u = {
        state: n,
        dispatch: null,
        action: t,
        pending: null
      },
      o.queue = u,
      s = uT.bind(null, vt, u, f, s),
      u.dispatch = s,
      o.memoizedState = t,
      [n, s, !1]
  }
  function Lm(t) {
    var n = Xt();
    return Pm(n, Ot, t)
  }
  function Pm(t, n, s) {
    if (n = Bu(t, n, Vm)[0],
      t = Kr(An)[0],
      typeof n == "object" && n !== null && typeof n.then == "function")
      try {
        var o = Ta(n)
      } catch (g) {
        throw g === ya ? Hr : g
      }
    else
      o = n;
    n = Xt();
    var u = n.queue
      , f = u.dispatch;
    return s !== n.memoizedState && (vt.flags |= 2048,
      Ss(9, Qr(), cT.bind(null, u, s), null)),
      [o, f, t]
  }
  function cT(t, n) {
    t.action = n
  }
  function Um(t) {
    var n = Xt()
      , s = Ot;
    if (s !== null)
      return Pm(n, s, t);
    Xt(),
      n = n.memoizedState,
      s = Xt();
    var o = s.queue.dispatch;
    return s.memoizedState = t,
      [n, o, !1]
  }
  function Ss(t, n, s, o) {
    return t = {
      tag: t,
      create: s,
      deps: o,
      inst: n,
      next: null
    },
      n = vt.updateQueue,
      n === null && (n = Pu(),
        vt.updateQueue = n),
      s = n.lastEffect,
      s === null ? n.lastEffect = t.next = t : (o = s.next,
        s.next = t,
        t.next = o,
        n.lastEffect = t),
      t
  }
  function Qr() {
    return {
      destroy: void 0,
      resource: void 0
    }
  }
  function Bm() {
    return Xt().memoizedState
  }
  function Zr(t, n, s, o) {
    var u = ge();
    o = o === void 0 ? null : o,
      vt.flags |= t,
      u.memoizedState = Ss(1 | n, Qr(), s, o)
  }
  function wa(t, n, s, o) {
    var u = Xt();
    o = o === void 0 ? null : o;
    var f = u.memoizedState.inst;
    Ot !== null && o !== null && ju(o, Ot.memoizedState.deps) ? u.memoizedState = Ss(n, f, s, o) : (vt.flags |= t,
      u.memoizedState = Ss(1 | n, f, s, o))
  }
  function km(t, n) {
    Zr(8390656, 8, t, n)
  }
  function Hm(t, n) {
    wa(2048, 8, t, n)
  }
  function Fm(t, n) {
    return wa(4, 2, t, n)
  }
  function qm(t, n) {
    return wa(4, 4, t, n)
  }
  function Gm(t, n) {
    if (typeof n == "function") {
      t = t();
      var s = n(t);
      return function () {
        typeof s == "function" ? s() : n(null)
      }
    }
    if (n != null)
      return t = t(),
        n.current = t,
        function () {
          n.current = null
        }
  }
  function Ym(t, n, s) {
    s = s != null ? s.concat([t]) : null,
      wa(4, 4, Gm.bind(null, n, t), s)
  }
  function qu() { }
  function Xm(t, n) {
    var s = Xt();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    return n !== null && ju(n, o[1]) ? o[0] : (s.memoizedState = [t, n],
      t)
  }
  function Km(t, n) {
    var s = Xt();
    n = n === void 0 ? null : n;
    var o = s.memoizedState;
    if (n !== null && ju(n, o[1]))
      return o[0];
    if (o = t(),
      Li) {
      kn(!0);
      try {
        t()
      } finally {
        kn(!1)
      }
    }
    return s.memoizedState = [o, n],
      o
  }
  function Gu(t, n, s) {
    return s === void 0 || (Kn & 1073741824) !== 0 ? t.memoizedState = n : (t.memoizedState = s,
      t = Wp(),
      vt.lanes |= t,
      ti |= t,
      s)
  }
  function Qm(t, n, s, o) {
    return we(s, n) ? s : vs.current !== null ? (t = Gu(t, s, o),
      we(t, n) || (te = !0),
      t) : (Kn & 42) === 0 ? (te = !0,
        t.memoizedState = s) : (t = Wp(),
          vt.lanes |= t,
          ti |= t,
          n)
  }
  function Zm(t, n, s, o, u) {
    var f = K.p;
    K.p = f !== 0 && 8 > f ? f : 8;
    var g = _.T
      , x = {};
    _.T = x,
      Ku(t, !1, n, s);
    try {
      var R = u()
        , P = _.S;
      if (P !== null && P(x, R),
        R !== null && typeof R == "object" && typeof R.then == "function") {
        var F = rT(R, o);
        Ea(t, n, F, Me(t))
      } else
        Ea(t, n, o, Me(t))
    } catch (X) {
      Ea(t, n, {
        then: function () { },
        status: "rejected",
        reason: X
      }, Me())
    } finally {
      K.p = f,
        _.T = g
    }
  }
  function fT() { }
  function Yu(t, n, s, o) {
    if (t.tag !== 5)
      throw Error(r(476));
    var u = Wm(t).queue;
    Zm(t, u, n, Y, s === null ? fT : function () {
      return $m(t),
        s(o)
    }
    )
  }
  function Wm(t) {
    var n = t.memoizedState;
    if (n !== null)
      return n;
    n = {
      memoizedState: Y,
      baseState: Y,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: Y
      },
      next: null
    };
    var s = {};
    return n.next = {
      memoizedState: s,
      baseState: s,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: An,
        lastRenderedState: s
      },
      next: null
    },
      t.memoizedState = n,
      t = t.alternate,
      t !== null && (t.memoizedState = n),
      n
  }
  function $m(t) {
    var n = Wm(t).next.queue;
    Ea(t, n, {}, Me())
  }
  function Xu() {
    return ue(Fa)
  }
  function Jm() {
    return Xt().memoizedState
  }
  function Im() {
    return Xt().memoizedState
  }
  function dT(t) {
    for (var n = t.return; n !== null;) {
      switch (n.tag) {
        case 24:
        case 3:
          var s = Me();
          t = Yn(s);
          var o = Xn(n, t, s);
          o !== null && (De(o, n, s),
            va(o, n, s)),
            n = {
              cache: Tu()
            },
            t.payload = n;
          return
      }
      n = n.return
    }
  }
  function hT(t, n, s) {
    var o = Me();
    s = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    },
      Wr(t) ? ep(n, s) : (s = du(t, n, s, o),
        s !== null && (De(s, t, o),
          np(s, n, o)))
  }
  function tp(t, n, s) {
    var o = Me();
    Ea(t, n, s, o)
  }
  function Ea(t, n, s, o) {
    var u = {
      lane: o,
      revertLane: 0,
      action: s,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Wr(t))
      ep(n, u);
    else {
      var f = t.alternate;
      if (t.lanes === 0 && (f === null || f.lanes === 0) && (f = n.lastRenderedReducer,
        f !== null))
        try {
          var g = n.lastRenderedState
            , x = f(g, s);
          if (u.hasEagerState = !0,
            u.eagerState = x,
            we(x, g))
            return _r(t, n, u, 0),
              zt === null && jr(),
              !1
        } catch { }
      if (s = du(t, n, u, o),
        s !== null)
        return De(s, t, o),
          np(s, n, o),
          !0
    }
    return !1
  }
  function Ku(t, n, s, o) {
    if (o = {
      lane: 2,
      revertLane: Ac(),
      action: o,
      hasEagerState: !1,
      eagerState: null,
      next: null
    },
      Wr(t)) {
      if (n)
        throw Error(r(479))
    } else
      n = du(t, s, o, 2),
        n !== null && De(n, t, 2)
  }
  function Wr(t) {
    var n = t.alternate;
    return t === vt || n !== null && n === vt
  }
  function ep(t, n) {
    bs = Gr = !0;
    var s = t.pending;
    s === null ? n.next = n : (n.next = s.next,
      s.next = n),
      t.pending = n
  }
  function np(t, n, s) {
    if ((s & 4194048) !== 0) {
      var o = n.lanes;
      o &= t.pendingLanes,
        s |= o,
        n.lanes = s,
        ch(t, s)
    }
  }
  var $r = {
    readContext: ue,
    use: Xr,
    useCallback: qt,
    useContext: qt,
    useEffect: qt,
    useImperativeHandle: qt,
    useLayoutEffect: qt,
    useInsertionEffect: qt,
    useMemo: qt,
    useReducer: qt,
    useRef: qt,
    useState: qt,
    useDebugValue: qt,
    useDeferredValue: qt,
    useTransition: qt,
    useSyncExternalStore: qt,
    useId: qt,
    useHostTransitionStatus: qt,
    useFormState: qt,
    useActionState: qt,
    useOptimistic: qt,
    useMemoCache: qt,
    useCacheRefresh: qt
  }
    , ip = {
      readContext: ue,
      use: Xr,
      useCallback: function (t, n) {
        return ge().memoizedState = [t, n === void 0 ? null : n],
          t
      },
      useContext: ue,
      useEffect: km,
      useImperativeHandle: function (t, n, s) {
        s = s != null ? s.concat([t]) : null,
          Zr(4194308, 4, Gm.bind(null, n, t), s)
      },
      useLayoutEffect: function (t, n) {
        return Zr(4194308, 4, t, n)
      },
      useInsertionEffect: function (t, n) {
        Zr(4, 2, t, n)
      },
      useMemo: function (t, n) {
        var s = ge();
        n = n === void 0 ? null : n;
        var o = t();
        if (Li) {
          kn(!0);
          try {
            t()
          } finally {
            kn(!1)
          }
        }
        return s.memoizedState = [o, n],
          o
      },
      useReducer: function (t, n, s) {
        var o = ge();
        if (s !== void 0) {
          var u = s(n);
          if (Li) {
            kn(!0);
            try {
              s(n)
            } finally {
              kn(!1)
            }
          }
        } else
          u = n;
        return o.memoizedState = o.baseState = u,
          t = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: t,
            lastRenderedState: u
          },
          o.queue = t,
          t = t.dispatch = hT.bind(null, vt, t),
          [o.memoizedState, t]
      },
      useRef: function (t) {
        var n = ge();
        return t = {
          current: t
        },
          n.memoizedState = t
      },
      useState: function (t) {
        t = Hu(t);
        var n = t.queue
          , s = tp.bind(null, vt, n);
        return n.dispatch = s,
          [t.memoizedState, s]
      },
      useDebugValue: qu,
      useDeferredValue: function (t, n) {
        var s = ge();
        return Gu(s, t, n)
      },
      useTransition: function () {
        var t = Hu(!1);
        return t = Zm.bind(null, vt, t.queue, !0, !1),
          ge().memoizedState = t,
          [!1, t]
      },
      useSyncExternalStore: function (t, n, s) {
        var o = vt
          , u = ge();
        if (At) {
          if (s === void 0)
            throw Error(r(407));
          s = s()
        } else {
          if (s = n(),
            zt === null)
            throw Error(r(349));
          (wt & 124) !== 0 || Em(o, n, s)
        }
        u.memoizedState = s;
        var f = {
          value: s,
          getSnapshot: n
        };
        return u.queue = f,
          km(Cm.bind(null, o, f, t), [t]),
          o.flags |= 2048,
          Ss(9, Qr(), Am.bind(null, o, f, s, n), null),
          s
      },
      useId: function () {
        var t = ge()
          , n = zt.identifierPrefix;
        if (At) {
          var s = Tn
            , o = Sn;
          s = (o & ~(1 << 32 - Te(o) - 1)).toString(32) + s,
            n = "«" + n + "R" + s,
            s = Yr++,
            0 < s && (n += "H" + s.toString(32)),
            n += "»"
        } else
          s = oT++,
            n = "«" + n + "r" + s.toString(32) + "»";
        return t.memoizedState = n
      },
      useHostTransitionStatus: Xu,
      useFormState: zm,
      useActionState: zm,
      useOptimistic: function (t) {
        var n = ge();
        n.memoizedState = n.baseState = t;
        var s = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null
        };
        return n.queue = s,
          n = Ku.bind(null, vt, !0, s),
          s.dispatch = n,
          [t, n]
      },
      useMemoCache: Uu,
      useCacheRefresh: function () {
        return ge().memoizedState = dT.bind(null, vt)
      }
    }
    , sp = {
      readContext: ue,
      use: Xr,
      useCallback: Xm,
      useContext: ue,
      useEffect: Hm,
      useImperativeHandle: Ym,
      useInsertionEffect: Fm,
      useLayoutEffect: qm,
      useMemo: Km,
      useReducer: Kr,
      useRef: Bm,
      useState: function () {
        return Kr(An)
      },
      useDebugValue: qu,
      useDeferredValue: function (t, n) {
        var s = Xt();
        return Qm(s, Ot.memoizedState, t, n)
      },
      useTransition: function () {
        var t = Kr(An)[0]
          , n = Xt().memoizedState;
        return [typeof t == "boolean" ? t : Ta(t), n]
      },
      useSyncExternalStore: wm,
      useId: Jm,
      useHostTransitionStatus: Xu,
      useFormState: Lm,
      useActionState: Lm,
      useOptimistic: function (t, n) {
        var s = Xt();
        return Dm(s, Ot, t, n)
      },
      useMemoCache: Uu,
      useCacheRefresh: Im
    }
    , mT = {
      readContext: ue,
      use: Xr,
      useCallback: Xm,
      useContext: ue,
      useEffect: Hm,
      useImperativeHandle: Ym,
      useInsertionEffect: Fm,
      useLayoutEffect: qm,
      useMemo: Km,
      useReducer: ku,
      useRef: Bm,
      useState: function () {
        return ku(An)
      },
      useDebugValue: qu,
      useDeferredValue: function (t, n) {
        var s = Xt();
        return Ot === null ? Gu(s, t, n) : Qm(s, Ot.memoizedState, t, n)
      },
      useTransition: function () {
        var t = ku(An)[0]
          , n = Xt().memoizedState;
        return [typeof t == "boolean" ? t : Ta(t), n]
      },
      useSyncExternalStore: wm,
      useId: Jm,
      useHostTransitionStatus: Xu,
      useFormState: Um,
      useActionState: Um,
      useOptimistic: function (t, n) {
        var s = Xt();
        return Ot !== null ? Dm(s, Ot, t, n) : (s.baseState = t,
          [t, s.queue.dispatch])
      },
      useMemoCache: Uu,
      useCacheRefresh: Im
    }
    , Ts = null
    , Aa = 0;
  function Jr(t) {
    var n = Aa;
    return Aa += 1,
      Ts === null && (Ts = []),
      pm(Ts, t, n)
  }
  function Ca(t, n) {
    n = n.props.ref,
      t.ref = n !== void 0 ? n : null
  }
  function Ir(t, n) {
    throw n.$$typeof === v ? Error(r(525)) : (t = Object.prototype.toString.call(n),
      Error(r(31, t === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : t)))
  }
  function ap(t) {
    var n = t._init;
    return n(t._payload)
  }
  function rp(t) {
    function n(N, D) {
      if (t) {
        var z = N.deletions;
        z === null ? (N.deletions = [D],
          N.flags |= 16) : z.push(D)
      }
    }
    function s(N, D) {
      if (!t)
        return null;
      for (; D !== null;)
        n(N, D),
          D = D.sibling;
      return null
    }
    function o(N) {
      for (var D = new Map; N !== null;)
        N.key !== null ? D.set(N.key, N) : D.set(N.index, N),
          N = N.sibling;
      return D
    }
    function u(N, D) {
      return N = xn(N, D),
        N.index = 0,
        N.sibling = null,
        N
    }
    function f(N, D, z) {
      return N.index = z,
        t ? (z = N.alternate,
          z !== null ? (z = z.index,
            z < D ? (N.flags |= 67108866,
              D) : z) : (N.flags |= 67108866,
                D)) : (N.flags |= 1048576,
                  D)
    }
    function g(N) {
      return t && N.alternate === null && (N.flags |= 67108866),
        N
    }
    function x(N, D, z, G) {
      return D === null || D.tag !== 6 ? (D = mu(z, N.mode, G),
        D.return = N,
        D) : (D = u(D, z),
          D.return = N,
          D)
    }
    function R(N, D, z, G) {
      var nt = z.type;
      return nt === E ? F(N, D, z.props.children, G, z.key) : D !== null && (D.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === H && ap(nt) === D.type) ? (D = u(D, z.props),
        Ca(D, z),
        D.return = N,
        D) : (D = zr(z.type, z.key, z.props, null, N.mode, G),
          Ca(D, z),
          D.return = N,
          D)
    }
    function P(N, D, z, G) {
      return D === null || D.tag !== 4 || D.stateNode.containerInfo !== z.containerInfo || D.stateNode.implementation !== z.implementation ? (D = pu(z, N.mode, G),
        D.return = N,
        D) : (D = u(D, z.children || []),
          D.return = N,
          D)
    }
    function F(N, D, z, G, nt) {
      return D === null || D.tag !== 7 ? (D = Mi(z, N.mode, G, nt),
        D.return = N,
        D) : (D = u(D, z),
          D.return = N,
          D)
    }
    function X(N, D, z) {
      if (typeof D == "string" && D !== "" || typeof D == "number" || typeof D == "bigint")
        return D = mu("" + D, N.mode, z),
          D.return = N,
          D;
      if (typeof D == "object" && D !== null) {
        switch (D.$$typeof) {
          case b:
            return z = zr(D.type, D.key, D.props, null, N.mode, z),
              Ca(z, D),
              z.return = N,
              z;
          case S:
            return D = pu(D, N.mode, z),
              D.return = N,
              D;
          case H:
            var G = D._init;
            return D = G(D._payload),
              X(N, D, z)
        }
        if (ct(D) || lt(D))
          return D = Mi(D, N.mode, z, null),
            D.return = N,
            D;
        if (typeof D.then == "function")
          return X(N, Jr(D), z);
        if (D.$$typeof === j)
          return X(N, Br(N, D), z);
        Ir(N, D)
      }
      return null
    }
    function U(N, D, z, G) {
      var nt = D !== null ? D.key : null;
      if (typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint")
        return nt !== null ? null : x(N, D, "" + z, G);
      if (typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            return z.key === nt ? R(N, D, z, G) : null;
          case S:
            return z.key === nt ? P(N, D, z, G) : null;
          case H:
            return nt = z._init,
              z = nt(z._payload),
              U(N, D, z, G)
        }
        if (ct(z) || lt(z))
          return nt !== null ? null : F(N, D, z, G, null);
        if (typeof z.then == "function")
          return U(N, D, Jr(z), G);
        if (z.$$typeof === j)
          return U(N, D, Br(N, z), G);
        Ir(N, z)
      }
      return null
    }
    function B(N, D, z, G, nt) {
      if (typeof G == "string" && G !== "" || typeof G == "number" || typeof G == "bigint")
        return N = N.get(z) || null,
          x(D, N, "" + G, nt);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case b:
            return N = N.get(G.key === null ? z : G.key) || null,
              R(D, N, G, nt);
          case S:
            return N = N.get(G.key === null ? z : G.key) || null,
              P(D, N, G, nt);
          case H:
            var xt = G._init;
            return G = xt(G._payload),
              B(N, D, z, G, nt)
        }
        if (ct(G) || lt(G))
          return N = N.get(z) || null,
            F(D, N, G, nt, null);
        if (typeof G.then == "function")
          return B(N, D, z, Jr(G), nt);
        if (G.$$typeof === j)
          return B(N, D, z, Br(D, G), nt);
        Ir(D, G)
      }
      return null
    }
    function pt(N, D, z, G) {
      for (var nt = null, xt = null, ft = D, mt = D = 0, ne = null; ft !== null && mt < z.length; mt++) {
        ft.index > mt ? (ne = ft,
          ft = null) : ne = ft.sibling;
        var Et = U(N, ft, z[mt], G);
        if (Et === null) {
          ft === null && (ft = ne);
          break
        }
        t && ft && Et.alternate === null && n(N, ft),
          D = f(Et, D, mt),
          xt === null ? nt = Et : xt.sibling = Et,
          xt = Et,
          ft = ne
      }
      if (mt === z.length)
        return s(N, ft),
          At && Oi(N, mt),
          nt;
      if (ft === null) {
        for (; mt < z.length; mt++)
          ft = X(N, z[mt], G),
            ft !== null && (D = f(ft, D, mt),
              xt === null ? nt = ft : xt.sibling = ft,
              xt = ft);
        return At && Oi(N, mt),
          nt
      }
      for (ft = o(ft); mt < z.length; mt++)
        ne = B(ft, N, mt, z[mt], G),
          ne !== null && (t && ne.alternate !== null && ft.delete(ne.key === null ? mt : ne.key),
            D = f(ne, D, mt),
            xt === null ? nt = ne : xt.sibling = ne,
            xt = ne);
      return t && ft.forEach(function (ui) {
        return n(N, ui)
      }),
        At && Oi(N, mt),
        nt
    }
    function dt(N, D, z, G) {
      if (z == null)
        throw Error(r(151));
      for (var nt = null, xt = null, ft = D, mt = D = 0, ne = null, Et = z.next(); ft !== null && !Et.done; mt++,
        Et = z.next()) {
        ft.index > mt ? (ne = ft,
          ft = null) : ne = ft.sibling;
        var ui = U(N, ft, Et.value, G);
        if (ui === null) {
          ft === null && (ft = ne);
          break
        }
        t && ft && ui.alternate === null && n(N, ft),
          D = f(ui, D, mt),
          xt === null ? nt = ui : xt.sibling = ui,
          xt = ui,
          ft = ne
      }
      if (Et.done)
        return s(N, ft),
          At && Oi(N, mt),
          nt;
      if (ft === null) {
        for (; !Et.done; mt++,
          Et = z.next())
          Et = X(N, Et.value, G),
            Et !== null && (D = f(Et, D, mt),
              xt === null ? nt = Et : xt.sibling = Et,
              xt = Et);
        return At && Oi(N, mt),
          nt
      }
      for (ft = o(ft); !Et.done; mt++,
        Et = z.next())
        Et = B(ft, N, mt, Et.value, G),
          Et !== null && (t && Et.alternate !== null && ft.delete(Et.key === null ? mt : Et.key),
            D = f(Et, D, mt),
            xt === null ? nt = Et : xt.sibling = Et,
            xt = Et);
      return t && ft.forEach(function (pw) {
        return n(N, pw)
      }),
        At && Oi(N, mt),
        nt
    }
    function jt(N, D, z, G) {
      if (typeof z == "object" && z !== null && z.type === E && z.key === null && (z = z.props.children),
        typeof z == "object" && z !== null) {
        switch (z.$$typeof) {
          case b:
            t: {
              for (var nt = z.key; D !== null;) {
                if (D.key === nt) {
                  if (nt = z.type,
                    nt === E) {
                    if (D.tag === 7) {
                      s(N, D.sibling),
                        G = u(D, z.props.children),
                        G.return = N,
                        N = G;
                      break t
                    }
                  } else if (D.elementType === nt || typeof nt == "object" && nt !== null && nt.$$typeof === H && ap(nt) === D.type) {
                    s(N, D.sibling),
                      G = u(D, z.props),
                      Ca(G, z),
                      G.return = N,
                      N = G;
                    break t
                  }
                  s(N, D);
                  break
                } else
                  n(N, D);
                D = D.sibling
              }
              z.type === E ? (G = Mi(z.props.children, N.mode, G, z.key),
                G.return = N,
                N = G) : (G = zr(z.type, z.key, z.props, null, N.mode, G),
                  Ca(G, z),
                  G.return = N,
                  N = G)
            }
            return g(N);
          case S:
            t: {
              for (nt = z.key; D !== null;) {
                if (D.key === nt)
                  if (D.tag === 4 && D.stateNode.containerInfo === z.containerInfo && D.stateNode.implementation === z.implementation) {
                    s(N, D.sibling),
                      G = u(D, z.children || []),
                      G.return = N,
                      N = G;
                    break t
                  } else {
                    s(N, D);
                    break
                  }
                else
                  n(N, D);
                D = D.sibling
              }
              G = pu(z, N.mode, G),
                G.return = N,
                N = G
            }
            return g(N);
          case H:
            return nt = z._init,
              z = nt(z._payload),
              jt(N, D, z, G)
        }
        if (ct(z))
          return pt(N, D, z, G);
        if (lt(z)) {
          if (nt = lt(z),
            typeof nt != "function")
            throw Error(r(150));
          return z = nt.call(z),
            dt(N, D, z, G)
        }
        if (typeof z.then == "function")
          return jt(N, D, Jr(z), G);
        if (z.$$typeof === j)
          return jt(N, D, Br(N, z), G);
        Ir(N, z)
      }
      return typeof z == "string" && z !== "" || typeof z == "number" || typeof z == "bigint" ? (z = "" + z,
        D !== null && D.tag === 6 ? (s(N, D.sibling),
          G = u(D, z),
          G.return = N,
          N = G) : (s(N, D),
            G = mu(z, N.mode, G),
            G.return = N,
            N = G),
        g(N)) : s(N, D)
    }
    return function (N, D, z, G) {
      try {
        Aa = 0;
        var nt = jt(N, D, z, G);
        return Ts = null,
          nt
      } catch (ft) {
        if (ft === ya || ft === Hr)
          throw ft;
        var xt = Ee(29, ft, null, N.mode);
        return xt.lanes = G,
          xt.return = N,
          xt
      }
    }
  }
  var ws = rp(!0)
    , op = rp(!1)
    , He = q(null)
    , on = null;
  function Qn(t) {
    var n = t.alternate;
    J(Zt, Zt.current & 1),
      J(He, t),
      on === null && (n === null || vs.current !== null || n.memoizedState !== null) && (on = t)
  }
  function lp(t) {
    if (t.tag === 22) {
      if (J(Zt, Zt.current),
        J(He, t),
        on === null) {
        var n = t.alternate;
        n !== null && n.memoizedState !== null && (on = t)
      }
    } else
      Zn()
  }
  function Zn() {
    J(Zt, Zt.current),
      J(He, He.current)
  }
  function Cn(t) {
    tt(He),
      on === t && (on = null),
      tt(Zt)
  }
  var Zt = q(0);
  function to(t) {
    for (var n = t; n !== null;) {
      if (n.tag === 13) {
        var s = n.memoizedState;
        if (s !== null && (s = s.dehydrated,
          s === null || s.data === "$?" || Pc(s)))
          return n
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if ((n.flags & 128) !== 0)
          return n
      } else if (n.child !== null) {
        n.child.return = n,
          n = n.child;
        continue
      }
      if (n === t)
        break;
      for (; n.sibling === null;) {
        if (n.return === null || n.return === t)
          return null;
        n = n.return
      }
      n.sibling.return = n.return,
        n = n.sibling
    }
    return null
  }
  function Qu(t, n, s, o) {
    n = t.memoizedState,
      s = s(o, n),
      s = s == null ? n : y({}, n, s),
      t.memoizedState = s,
      t.lanes === 0 && (t.updateQueue.baseState = s)
  }
  var Zu = {
    enqueueSetState: function (t, n, s) {
      t = t._reactInternals;
      var o = Me()
        , u = Yn(o);
      u.payload = n,
        s != null && (u.callback = s),
        n = Xn(t, u, o),
        n !== null && (De(n, t, o),
          va(n, t, o))
    },
    enqueueReplaceState: function (t, n, s) {
      t = t._reactInternals;
      var o = Me()
        , u = Yn(o);
      u.tag = 1,
        u.payload = n,
        s != null && (u.callback = s),
        n = Xn(t, u, o),
        n !== null && (De(n, t, o),
          va(n, t, o))
    },
    enqueueForceUpdate: function (t, n) {
      t = t._reactInternals;
      var s = Me()
        , o = Yn(s);
      o.tag = 2,
        n != null && (o.callback = n),
        n = Xn(t, o, s),
        n !== null && (De(n, t, s),
          va(n, t, s))
    }
  };
  function up(t, n, s, o, u, f, g) {
    return t = t.stateNode,
      typeof t.shouldComponentUpdate == "function" ? t.shouldComponentUpdate(o, f, g) : n.prototype && n.prototype.isPureReactComponent ? !la(s, o) || !la(u, f) : !0
  }
  function cp(t, n, s, o) {
    t = n.state,
      typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(s, o),
      typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(s, o),
      n.state !== t && Zu.enqueueReplaceState(n, n.state, null)
  }
  function Pi(t, n) {
    var s = n;
    if ("ref" in n) {
      s = {};
      for (var o in n)
        o !== "ref" && (s[o] = n[o])
    }
    if (t = t.defaultProps) {
      s === n && (s = y({}, s));
      for (var u in t)
        s[u] === void 0 && (s[u] = t[u])
    }
    return s
  }
  var eo = typeof reportError == "function" ? reportError : function (t) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var n = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof t == "object" && t !== null && typeof t.message == "string" ? String(t.message) : String(t),
        error: t
      });
      if (!window.dispatchEvent(n))
        return
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", t);
      return
    }
    console.error(t)
  }
    ;
  function fp(t) {
    eo(t)
  }
  function dp(t) {
    console.error(t)
  }
  function hp(t) {
    eo(t)
  }
  function no(t, n) {
    try {
      var s = t.onUncaughtError;
      s(n.value, {
        componentStack: n.stack
      })
    } catch (o) {
      setTimeout(function () {
        throw o
      })
    }
  }
  function mp(t, n, s) {
    try {
      var o = t.onCaughtError;
      o(s.value, {
        componentStack: s.stack,
        errorBoundary: n.tag === 1 ? n.stateNode : null
      })
    } catch (u) {
      setTimeout(function () {
        throw u
      })
    }
  }
  function Wu(t, n, s) {
    return s = Yn(s),
      s.tag = 3,
      s.payload = {
        element: null
      },
      s.callback = function () {
        no(t, n)
      }
      ,
      s
  }
  function pp(t) {
    return t = Yn(t),
      t.tag = 3,
      t
  }
  function yp(t, n, s, o) {
    var u = s.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = o.value;
      t.payload = function () {
        return u(f)
      }
        ,
        t.callback = function () {
          mp(n, s, o)
        }
    }
    var g = s.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (t.callback = function () {
      mp(n, s, o),
        typeof u != "function" && (ei === null ? ei = new Set([this]) : ei.add(this));
      var x = o.stack;
      this.componentDidCatch(o.value, {
        componentStack: x !== null ? x : ""
      })
    }
    )
  }
  function pT(t, n, s, o, u) {
    if (s.flags |= 32768,
      o !== null && typeof o == "object" && typeof o.then == "function") {
      if (n = s.alternate,
        n !== null && ha(n, s, u, !0),
        s = He.current,
        s !== null) {
        switch (s.tag) {
          case 13:
            return on === null ? xc() : s.alternate === null && Ht === 0 && (Ht = 3),
              s.flags &= -257,
              s.flags |= 65536,
              s.lanes = u,
              o === Au ? s.flags |= 16384 : (n = s.updateQueue,
                n === null ? s.updateQueue = new Set([o]) : n.add(o),
                Tc(t, o, u)),
              !1;
          case 22:
            return s.flags |= 65536,
              o === Au ? s.flags |= 16384 : (n = s.updateQueue,
                n === null ? (n = {
                  transitions: null,
                  markerInstances: null,
                  retryQueue: new Set([o])
                },
                  s.updateQueue = n) : (s = n.retryQueue,
                    s === null ? n.retryQueue = new Set([o]) : s.add(o)),
                Tc(t, o, u)),
              !1
        }
        throw Error(r(435, s.tag))
      }
      return Tc(t, o, u),
        xc(),
        !1
    }
    if (At)
      return n = He.current,
        n !== null ? ((n.flags & 65536) === 0 && (n.flags |= 256),
          n.flags |= 65536,
          n.lanes = u,
          o !== vu && (t = Error(r(422), {
            cause: o
          }),
            da(Pe(t, s)))) : (o !== vu && (n = Error(r(423), {
              cause: o
            }),
              da(Pe(n, s))),
              t = t.current.alternate,
              t.flags |= 65536,
              u &= -u,
              t.lanes |= u,
              o = Pe(o, s),
              u = Wu(t.stateNode, o, u),
              Mu(t, u),
              Ht !== 4 && (Ht = 2)),
        !1;
    var f = Error(r(520), {
      cause: o
    });
    if (f = Pe(f, s),
      _a === null ? _a = [f] : _a.push(f),
      Ht !== 4 && (Ht = 2),
      n === null)
      return !0;
    o = Pe(o, s),
      s = n;
    do {
      switch (s.tag) {
        case 3:
          return s.flags |= 65536,
            t = u & -u,
            s.lanes |= t,
            t = Wu(s.stateNode, o, t),
            Mu(s, t),
            !1;
        case 1:
          if (n = s.type,
            f = s.stateNode,
            (s.flags & 128) === 0 && (typeof n.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (ei === null || !ei.has(f))))
            return s.flags |= 65536,
              u &= -u,
              s.lanes |= u,
              u = pp(u),
              yp(u, t, s, o),
              Mu(s, u),
              !1
      }
      s = s.return
    } while (s !== null);
    return !1
  }
  var gp = Error(r(461))
    , te = !1;
  function ie(t, n, s, o) {
    n.child = t === null ? op(n, null, s, o) : ws(n, t.child, s, o)
  }
  function vp(t, n, s, o, u) {
    s = s.render;
    var f = n.ref;
    if ("ref" in o) {
      var g = {};
      for (var x in o)
        x !== "ref" && (g[x] = o[x])
    } else
      g = o;
    return Vi(n),
      o = _u(t, n, s, g, f, u),
      x = Vu(),
      t !== null && !te ? (zu(t, n, u),
        Rn(t, n, u)) : (At && x && yu(n),
          n.flags |= 1,
          ie(t, n, o, u),
          n.child)
  }
  function bp(t, n, s, o, u) {
    if (t === null) {
      var f = s.type;
      return typeof f == "function" && !hu(f) && f.defaultProps === void 0 && s.compare === null ? (n.tag = 15,
        n.type = f,
        xp(t, n, f, o, u)) : (t = zr(s.type, null, o, n, n.mode, u),
          t.ref = n.ref,
          t.return = n,
          n.child = t)
    }
    if (f = t.child,
      !sc(t, u)) {
      var g = f.memoizedProps;
      if (s = s.compare,
        s = s !== null ? s : la,
        s(g, o) && t.ref === n.ref)
        return Rn(t, n, u)
    }
    return n.flags |= 1,
      t = xn(f, o),
      t.ref = n.ref,
      t.return = n,
      n.child = t
  }
  function xp(t, n, s, o, u) {
    if (t !== null) {
      var f = t.memoizedProps;
      if (la(f, o) && t.ref === n.ref)
        if (te = !1,
          n.pendingProps = o = f,
          sc(t, u))
          (t.flags & 131072) !== 0 && (te = !0);
        else
          return n.lanes = t.lanes,
            Rn(t, n, u)
    }
    return $u(t, n, s, o, u)
  }
  function Sp(t, n, s) {
    var o = n.pendingProps
      , u = o.children
      , f = t !== null ? t.memoizedState : null;
    if (o.mode === "hidden") {
      if ((n.flags & 128) !== 0) {
        if (o = f !== null ? f.baseLanes | s : s,
          t !== null) {
          for (u = n.child = t.child,
            f = 0; u !== null;)
            f = f | u.lanes | u.childLanes,
              u = u.sibling;
          n.childLanes = f & ~o
        } else
          n.childLanes = 0,
            n.child = null;
        return Tp(t, n, o, s)
      }
      if ((s & 536870912) !== 0)
        n.memoizedState = {
          baseLanes: 0,
          cachePool: null
        },
          t !== null && kr(n, f !== null ? f.cachePool : null),
          f !== null ? xm(n, f) : Ou(),
          lp(n);
      else
        return n.lanes = n.childLanes = 536870912,
          Tp(t, n, f !== null ? f.baseLanes | s : s, s)
    } else
      f !== null ? (kr(n, f.cachePool),
        xm(n, f),
        Zn(),
        n.memoizedState = null) : (t !== null && kr(n, null),
          Ou(),
          Zn());
    return ie(t, n, u, s),
      n.child
  }
  function Tp(t, n, s, o) {
    var u = Eu();
    return u = u === null ? null : {
      parent: Qt._currentValue,
      pool: u
    },
      n.memoizedState = {
        baseLanes: s,
        cachePool: u
      },
      t !== null && kr(n, null),
      Ou(),
      lp(n),
      t !== null && ha(t, n, o, !0),
      null
  }
  function io(t, n) {
    var s = n.ref;
    if (s === null)
      t !== null && t.ref !== null && (n.flags |= 4194816);
    else {
      if (typeof s != "function" && typeof s != "object")
        throw Error(r(284));
      (t === null || t.ref !== s) && (n.flags |= 4194816)
    }
  }
  function $u(t, n, s, o, u) {
    return Vi(n),
      s = _u(t, n, s, o, void 0, u),
      o = Vu(),
      t !== null && !te ? (zu(t, n, u),
        Rn(t, n, u)) : (At && o && yu(n),
          n.flags |= 1,
          ie(t, n, s, u),
          n.child)
  }
  function wp(t, n, s, o, u, f) {
    return Vi(n),
      n.updateQueue = null,
      s = Tm(n, o, s, u),
      Sm(t),
      o = Vu(),
      t !== null && !te ? (zu(t, n, f),
        Rn(t, n, f)) : (At && o && yu(n),
          n.flags |= 1,
          ie(t, n, s, f),
          n.child)
  }
  function Ep(t, n, s, o, u) {
    if (Vi(n),
      n.stateNode === null) {
      var f = hs
        , g = s.contextType;
      typeof g == "object" && g !== null && (f = ue(g)),
        f = new s(o, f),
        n.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null,
        f.updater = Zu,
        n.stateNode = f,
        f._reactInternals = n,
        f = n.stateNode,
        f.props = o,
        f.state = n.memoizedState,
        f.refs = {},
        Cu(n),
        g = s.contextType,
        f.context = typeof g == "object" && g !== null ? ue(g) : hs,
        f.state = n.memoizedState,
        g = s.getDerivedStateFromProps,
        typeof g == "function" && (Qu(n, s, g, o),
          f.state = n.memoizedState),
        typeof s.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state,
          typeof f.componentWillMount == "function" && f.componentWillMount(),
          typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(),
          g !== f.state && Zu.enqueueReplaceState(f, f.state, null),
          xa(n, o, f, u),
          ba(),
          f.state = n.memoizedState),
        typeof f.componentDidMount == "function" && (n.flags |= 4194308),
        o = !0
    } else if (t === null) {
      f = n.stateNode;
      var x = n.memoizedProps
        , R = Pi(s, x);
      f.props = R;
      var P = f.context
        , F = s.contextType;
      g = hs,
        typeof F == "object" && F !== null && (g = ue(F));
      var X = s.getDerivedStateFromProps;
      F = typeof X == "function" || typeof f.getSnapshotBeforeUpdate == "function",
        x = n.pendingProps !== x,
        F || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (x || P !== g) && cp(n, f, o, g),
        Gn = !1;
      var U = n.memoizedState;
      f.state = U,
        xa(n, o, f, u),
        ba(),
        P = n.memoizedState,
        x || U !== P || Gn ? (typeof X == "function" && (Qu(n, s, X, o),
          P = n.memoizedState),
          (R = Gn || up(n, s, R, o, U, P, g)) ? (F || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(),
            typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()),
            typeof f.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
              n.memoizedProps = o,
              n.memoizedState = P),
          f.props = o,
          f.state = P,
          f.context = g,
          o = R) : (typeof f.componentDidMount == "function" && (n.flags |= 4194308),
            o = !1)
    } else {
      f = n.stateNode,
        Ru(t, n),
        g = n.memoizedProps,
        F = Pi(s, g),
        f.props = F,
        X = n.pendingProps,
        U = f.context,
        P = s.contextType,
        R = hs,
        typeof P == "object" && P !== null && (R = ue(P)),
        x = s.getDerivedStateFromProps,
        (P = typeof x == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== X || U !== R) && cp(n, f, o, R),
        Gn = !1,
        U = n.memoizedState,
        f.state = U,
        xa(n, o, f, u),
        ba();
      var B = n.memoizedState;
      g !== X || U !== B || Gn || t !== null && t.dependencies !== null && Ur(t.dependencies) ? (typeof x == "function" && (Qu(n, s, x, o),
        B = n.memoizedState),
        (F = Gn || up(n, s, F, o, U, B, R) || t !== null && t.dependencies !== null && Ur(t.dependencies)) ? (P || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(o, B, R),
          typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(o, B, R)),
          typeof f.componentDidUpdate == "function" && (n.flags |= 4),
          typeof f.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && U === t.memoizedState || (n.flags |= 4),
            typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024),
            n.memoizedProps = o,
            n.memoizedState = B),
        f.props = o,
        f.state = B,
        f.context = R,
        o = F) : (typeof f.componentDidUpdate != "function" || g === t.memoizedProps && U === t.memoizedState || (n.flags |= 4),
          typeof f.getSnapshotBeforeUpdate != "function" || g === t.memoizedProps && U === t.memoizedState || (n.flags |= 1024),
          o = !1)
    }
    return f = o,
      io(t, n),
      o = (n.flags & 128) !== 0,
      f || o ? (f = n.stateNode,
        s = o && typeof s.getDerivedStateFromError != "function" ? null : f.render(),
        n.flags |= 1,
        t !== null && o ? (n.child = ws(n, t.child, null, u),
          n.child = ws(n, null, s, u)) : ie(t, n, s, u),
        n.memoizedState = f.state,
        t = n.child) : t = Rn(t, n, u),
      t
  }
  function Ap(t, n, s, o) {
    return fa(),
      n.flags |= 256,
      ie(t, n, s, o),
      n.child
  }
  var Ju = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Iu(t) {
    return {
      baseLanes: t,
      cachePool: dm()
    }
  }
  function tc(t, n, s) {
    return t = t !== null ? t.childLanes & ~s : 0,
      n && (t |= Fe),
      t
  }
  function Cp(t, n, s) {
    var o = n.pendingProps, u = !1, f = (n.flags & 128) !== 0, g;
    if ((g = f) || (g = t !== null && t.memoizedState === null ? !1 : (Zt.current & 2) !== 0),
      g && (u = !0,
        n.flags &= -129),
      g = (n.flags & 32) !== 0,
      n.flags &= -33,
      t === null) {
      if (At) {
        if (u ? Qn(n) : Zn(),
          At) {
          var x = kt, R;
          if (R = x) {
            t: {
              for (R = x,
                x = rn; R.nodeType !== 8;) {
                if (!x) {
                  x = null;
                  break t
                }
                if (R = Ze(R.nextSibling),
                  R === null) {
                  x = null;
                  break t
                }
              }
              x = R
            }
            x !== null ? (n.memoizedState = {
              dehydrated: x,
              treeContext: Di !== null ? {
                id: Sn,
                overflow: Tn
              } : null,
              retryLane: 536870912,
              hydrationErrors: null
            },
              R = Ee(18, null, null, 0),
              R.stateNode = x,
              R.return = n,
              n.child = R,
              fe = n,
              kt = null,
              R = !0) : R = !1
          }
          R || ji(n)
        }
        if (x = n.memoizedState,
          x !== null && (x = x.dehydrated,
            x !== null))
          return Pc(x) ? n.lanes = 32 : n.lanes = 536870912,
            null;
        Cn(n)
      }
      return x = o.children,
        o = o.fallback,
        u ? (Zn(),
          u = n.mode,
          x = so({
            mode: "hidden",
            children: x
          }, u),
          o = Mi(o, u, s, null),
          x.return = n,
          o.return = n,
          x.sibling = o,
          n.child = x,
          u = n.child,
          u.memoizedState = Iu(s),
          u.childLanes = tc(t, g, s),
          n.memoizedState = Ju,
          o) : (Qn(n),
            ec(n, x))
    }
    if (R = t.memoizedState,
      R !== null && (x = R.dehydrated,
        x !== null)) {
      if (f)
        n.flags & 256 ? (Qn(n),
          n.flags &= -257,
          n = nc(t, n, s)) : n.memoizedState !== null ? (Zn(),
            n.child = t.child,
            n.flags |= 128,
            n = null) : (Zn(),
              u = o.fallback,
              x = n.mode,
              o = so({
                mode: "visible",
                children: o.children
              }, x),
              u = Mi(u, x, s, null),
              u.flags |= 2,
              o.return = n,
              u.return = n,
              o.sibling = u,
              n.child = o,
              ws(n, t.child, null, s),
              o = n.child,
              o.memoizedState = Iu(s),
              o.childLanes = tc(t, g, s),
              n.memoizedState = Ju,
              n = u);
      else if (Qn(n),
        Pc(x)) {
        if (g = x.nextSibling && x.nextSibling.dataset,
          g)
          var P = g.dgst;
        g = P,
          o = Error(r(419)),
          o.stack = "",
          o.digest = g,
          da({
            value: o,
            source: null,
            stack: null
          }),
          n = nc(t, n, s)
      } else if (te || ha(t, n, s, !1),
        g = (s & t.childLanes) !== 0,
        te || g) {
        if (g = zt,
          g !== null && (o = s & -s,
            o = (o & 42) !== 0 ? 1 : Ul(o),
            o = (o & (g.suspendedLanes | s)) !== 0 ? 0 : o,
            o !== 0 && o !== R.retryLane))
          throw R.retryLane = o,
          ds(t, o),
          De(g, t, o),
          gp;
        x.data === "$?" || xc(),
          n = nc(t, n, s)
      } else
        x.data === "$?" ? (n.flags |= 192,
          n.child = t.child,
          n = null) : (t = R.treeContext,
            kt = Ze(x.nextSibling),
            fe = n,
            At = !0,
            Ni = null,
            rn = !1,
            t !== null && (Be[ke++] = Sn,
              Be[ke++] = Tn,
              Be[ke++] = Di,
              Sn = t.id,
              Tn = t.overflow,
              Di = n),
            n = ec(n, o.children),
            n.flags |= 4096);
      return n
    }
    return u ? (Zn(),
      u = o.fallback,
      x = n.mode,
      R = t.child,
      P = R.sibling,
      o = xn(R, {
        mode: "hidden",
        children: o.children
      }),
      o.subtreeFlags = R.subtreeFlags & 65011712,
      P !== null ? u = xn(P, u) : (u = Mi(u, x, s, null),
        u.flags |= 2),
      u.return = n,
      o.return = n,
      o.sibling = u,
      n.child = o,
      o = u,
      u = n.child,
      x = t.child.memoizedState,
      x === null ? x = Iu(s) : (R = x.cachePool,
        R !== null ? (P = Qt._currentValue,
          R = R.parent !== P ? {
            parent: P,
            pool: P
          } : R) : R = dm(),
        x = {
          baseLanes: x.baseLanes | s,
          cachePool: R
        }),
      u.memoizedState = x,
      u.childLanes = tc(t, g, s),
      n.memoizedState = Ju,
      o) : (Qn(n),
        s = t.child,
        t = s.sibling,
        s = xn(s, {
          mode: "visible",
          children: o.children
        }),
        s.return = n,
        s.sibling = null,
        t !== null && (g = n.deletions,
          g === null ? (n.deletions = [t],
            n.flags |= 16) : g.push(t)),
        n.child = s,
        n.memoizedState = null,
        s)
  }
  function ec(t, n) {
    return n = so({
      mode: "visible",
      children: n
    }, t.mode),
      n.return = t,
      t.child = n
  }
  function so(t, n) {
    return t = Ee(22, t, null, n),
      t.lanes = 0,
      t.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null
      },
      t
  }
  function nc(t, n, s) {
    return ws(n, t.child, null, s),
      t = ec(n, n.pendingProps.children),
      t.flags |= 2,
      n.memoizedState = null,
      t
  }
  function Rp(t, n, s) {
    t.lanes |= n;
    var o = t.alternate;
    o !== null && (o.lanes |= n),
      xu(t.return, n, s)
  }
  function ic(t, n, s, o, u) {
    var f = t.memoizedState;
    f === null ? t.memoizedState = {
      isBackwards: n,
      rendering: null,
      renderingStartTime: 0,
      last: o,
      tail: s,
      tailMode: u
    } : (f.isBackwards = n,
      f.rendering = null,
      f.renderingStartTime = 0,
      f.last = o,
      f.tail = s,
      f.tailMode = u)
  }
  function Mp(t, n, s) {
    var o = n.pendingProps
      , u = o.revealOrder
      , f = o.tail;
    if (ie(t, n, o.children, s),
      o = Zt.current,
      (o & 2) !== 0)
      o = o & 1 | 2,
        n.flags |= 128;
    else {
      if (t !== null && (t.flags & 128) !== 0)
        t: for (t = n.child; t !== null;) {
          if (t.tag === 13)
            t.memoizedState !== null && Rp(t, s, n);
          else if (t.tag === 19)
            Rp(t, s, n);
          else if (t.child !== null) {
            t.child.return = t,
              t = t.child;
            continue
          }
          if (t === n)
            break t;
          for (; t.sibling === null;) {
            if (t.return === null || t.return === n)
              break t;
            t = t.return
          }
          t.sibling.return = t.return,
            t = t.sibling
        }
      o &= 1
    }
    switch (J(Zt, o),
    u) {
      case "forwards":
        for (s = n.child,
          u = null; s !== null;)
          t = s.alternate,
            t !== null && to(t) === null && (u = s),
            s = s.sibling;
        s = u,
          s === null ? (u = n.child,
            n.child = null) : (u = s.sibling,
              s.sibling = null),
          ic(n, !1, u, s, f);
        break;
      case "backwards":
        for (s = null,
          u = n.child,
          n.child = null; u !== null;) {
          if (t = u.alternate,
            t !== null && to(t) === null) {
            n.child = u;
            break
          }
          t = u.sibling,
            u.sibling = s,
            s = u,
            u = t
        }
        ic(n, !0, s, null, f);
        break;
      case "together":
        ic(n, !1, null, null, void 0);
        break;
      default:
        n.memoizedState = null
    }
    return n.child
  }
  function Rn(t, n, s) {
    if (t !== null && (n.dependencies = t.dependencies),
      ti |= n.lanes,
      (s & n.childLanes) === 0)
      if (t !== null) {
        if (ha(t, n, s, !1),
          (s & n.childLanes) === 0)
          return null
      } else
        return null;
    if (t !== null && n.child !== t.child)
      throw Error(r(153));
    if (n.child !== null) {
      for (t = n.child,
        s = xn(t, t.pendingProps),
        n.child = s,
        s.return = n; t.sibling !== null;)
        t = t.sibling,
          s = s.sibling = xn(t, t.pendingProps),
          s.return = n;
      s.sibling = null
    }
    return n.child
  }
  function sc(t, n) {
    return (t.lanes & n) !== 0 ? !0 : (t = t.dependencies,
      !!(t !== null && Ur(t)))
  }
  function yT(t, n, s) {
    switch (n.tag) {
      case 3:
        Ct(n, n.stateNode.containerInfo),
          qn(n, Qt, t.memoizedState.cache),
          fa();
        break;
      case 27:
      case 5:
        Un(n);
        break;
      case 4:
        Ct(n, n.stateNode.containerInfo);
        break;
      case 10:
        qn(n, n.type, n.memoizedProps.value);
        break;
      case 13:
        var o = n.memoizedState;
        if (o !== null)
          return o.dehydrated !== null ? (Qn(n),
            n.flags |= 128,
            null) : (s & n.child.childLanes) !== 0 ? Cp(t, n, s) : (Qn(n),
              t = Rn(t, n, s),
              t !== null ? t.sibling : null);
        Qn(n);
        break;
      case 19:
        var u = (t.flags & 128) !== 0;
        if (o = (s & n.childLanes) !== 0,
          o || (ha(t, n, s, !1),
            o = (s & n.childLanes) !== 0),
          u) {
          if (o)
            return Mp(t, n, s);
          n.flags |= 128
        }
        if (u = n.memoizedState,
          u !== null && (u.rendering = null,
            u.tail = null,
            u.lastEffect = null),
          J(Zt, Zt.current),
          o)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0,
          Sp(t, n, s);
      case 24:
        qn(n, Qt, t.memoizedState.cache)
    }
    return Rn(t, n, s)
  }
  function Dp(t, n, s) {
    if (t !== null)
      if (t.memoizedProps !== n.pendingProps)
        te = !0;
      else {
        if (!sc(t, s) && (n.flags & 128) === 0)
          return te = !1,
            yT(t, n, s);
        te = (t.flags & 131072) !== 0
      }
    else
      te = !1,
        At && (n.flags & 1048576) !== 0 && am(n, Pr, n.index);
    switch (n.lanes = 0,
    n.tag) {
      case 16:
        t: {
          t = n.pendingProps;
          var o = n.elementType
            , u = o._init;
          if (o = u(o._payload),
            n.type = o,
            typeof o == "function")
            hu(o) ? (t = Pi(o, t),
              n.tag = 1,
              n = Ep(null, n, o, t, s)) : (n.tag = 0,
                n = $u(null, n, o, t, s));
          else {
            if (o != null) {
              if (u = o.$$typeof,
                u === L) {
                n.tag = 11,
                  n = vp(null, n, o, t, s);
                break t
              } else if (u === Z) {
                n.tag = 14,
                  n = bp(null, n, o, t, s);
                break t
              }
            }
            throw n = I(o) || o,
            Error(r(306, n, ""))
          }
        }
        return n;
      case 0:
        return $u(t, n, n.type, n.pendingProps, s);
      case 1:
        return o = n.type,
          u = Pi(o, n.pendingProps),
          Ep(t, n, o, u, s);
      case 3:
        t: {
          if (Ct(n, n.stateNode.containerInfo),
            t === null)
            throw Error(r(387));
          o = n.pendingProps;
          var f = n.memoizedState;
          u = f.element,
            Ru(t, n),
            xa(n, o, null, s);
          var g = n.memoizedState;
          if (o = g.cache,
            qn(n, Qt, o),
            o !== f.cache && Su(n, [Qt], s, !0),
            ba(),
            o = g.element,
            f.isDehydrated)
            if (f = {
              element: o,
              isDehydrated: !1,
              cache: g.cache
            },
              n.updateQueue.baseState = f,
              n.memoizedState = f,
              n.flags & 256) {
              n = Ap(t, n, o, s);
              break t
            } else if (o !== u) {
              u = Pe(Error(r(424)), n),
                da(u),
                n = Ap(t, n, o, s);
              break t
            } else
              for (t = n.stateNode.containerInfo,
                t.nodeType === 9 ? t = t.body : t = t.nodeName === "HTML" ? t.ownerDocument.body : t,
                kt = Ze(t.firstChild),
                fe = n,
                At = !0,
                Ni = null,
                rn = !0,
                s = op(n, null, o, s),
                n.child = s; s;)
                s.flags = s.flags & -3 | 4096,
                  s = s.sibling;
          else {
            if (fa(),
              o === u) {
              n = Rn(t, n, s);
              break t
            }
            ie(t, n, o, s)
          }
          n = n.child
        }
        return n;
      case 26:
        return io(t, n),
          t === null ? (s = _y(n.type, null, n.pendingProps, null)) ? n.memoizedState = s : At || (s = n.type,
            t = n.pendingProps,
            o = bo(rt.current).createElement(s),
            o[le] = n,
            o[pe] = t,
            ae(o, s, t),
            It(o),
            n.stateNode = o) : n.memoizedState = _y(n.type, t.memoizedProps, n.pendingProps, t.memoizedState),
          null;
      case 27:
        return Un(n),
          t === null && At && (o = n.stateNode = Oy(n.type, n.pendingProps, rt.current),
            fe = n,
            rn = !0,
            u = kt,
            si(n.type) ? (Uc = u,
              kt = Ze(o.firstChild)) : kt = u),
          ie(t, n, n.pendingProps.children, s),
          io(t, n),
          t === null && (n.flags |= 4194304),
          n.child;
      case 5:
        return t === null && At && ((u = o = kt) && (o = GT(o, n.type, n.pendingProps, rn),
          o !== null ? (n.stateNode = o,
            fe = n,
            kt = Ze(o.firstChild),
            rn = !1,
            u = !0) : u = !1),
          u || ji(n)),
          Un(n),
          u = n.type,
          f = n.pendingProps,
          g = t !== null ? t.memoizedProps : null,
          o = f.children,
          Vc(u, f) ? o = null : g !== null && Vc(u, g) && (n.flags |= 32),
          n.memoizedState !== null && (u = _u(t, n, lT, null, null, s),
            Fa._currentValue = u),
          io(t, n),
          ie(t, n, o, s),
          n.child;
      case 6:
        return t === null && At && ((t = s = kt) && (s = YT(s, n.pendingProps, rn),
          s !== null ? (n.stateNode = s,
            fe = n,
            kt = null,
            t = !0) : t = !1),
          t || ji(n)),
          null;
      case 13:
        return Cp(t, n, s);
      case 4:
        return Ct(n, n.stateNode.containerInfo),
          o = n.pendingProps,
          t === null ? n.child = ws(n, null, o, s) : ie(t, n, o, s),
          n.child;
      case 11:
        return vp(t, n, n.type, n.pendingProps, s);
      case 7:
        return ie(t, n, n.pendingProps, s),
          n.child;
      case 8:
        return ie(t, n, n.pendingProps.children, s),
          n.child;
      case 12:
        return ie(t, n, n.pendingProps.children, s),
          n.child;
      case 10:
        return o = n.pendingProps,
          qn(n, n.type, o.value),
          ie(t, n, o.children, s),
          n.child;
      case 9:
        return u = n.type._context,
          o = n.pendingProps.children,
          Vi(n),
          u = ue(u),
          o = o(u),
          n.flags |= 1,
          ie(t, n, o, s),
          n.child;
      case 14:
        return bp(t, n, n.type, n.pendingProps, s);
      case 15:
        return xp(t, n, n.type, n.pendingProps, s);
      case 19:
        return Mp(t, n, s);
      case 31:
        return o = n.pendingProps,
          s = n.mode,
          o = {
            mode: o.mode,
            children: o.children
          },
          t === null ? (s = so(o, s),
            s.ref = n.ref,
            n.child = s,
            s.return = n,
            n = s) : (s = xn(t.child, o),
              s.ref = n.ref,
              n.child = s,
              s.return = n,
              n = s),
          n;
      case 22:
        return Sp(t, n, s);
      case 24:
        return Vi(n),
          o = ue(Qt),
          t === null ? (u = Eu(),
            u === null && (u = zt,
              f = Tu(),
              u.pooledCache = f,
              f.refCount++,
              f !== null && (u.pooledCacheLanes |= s),
              u = f),
            n.memoizedState = {
              parent: o,
              cache: u
            },
            Cu(n),
            qn(n, Qt, u)) : ((t.lanes & s) !== 0 && (Ru(t, n),
              xa(n, null, null, s),
              ba()),
              u = t.memoizedState,
              f = n.memoizedState,
              u.parent !== o ? (u = {
                parent: o,
                cache: o
              },
                n.memoizedState = u,
                n.lanes === 0 && (n.memoizedState = n.updateQueue.baseState = u),
                qn(n, Qt, o)) : (o = f.cache,
                  qn(n, Qt, o),
                  o !== u.cache && Su(n, [Qt], s, !0))),
          ie(t, n, n.pendingProps.children, s),
          n.child;
      case 29:
        throw n.pendingProps
    }
    throw Error(r(156, n.tag))
  }
  function Mn(t) {
    t.flags |= 4
  }
  function Op(t, n) {
    if (n.type !== "stylesheet" || (n.state.loading & 4) !== 0)
      t.flags &= -16777217;
    else if (t.flags |= 16777216,
      !Uy(n)) {
      if (n = He.current,
        n !== null && ((wt & 4194048) === wt ? on !== null : (wt & 62914560) !== wt && (wt & 536870912) === 0 || n !== on))
        throw ga = Au,
        hm;
      t.flags |= 8192
    }
  }
  function ao(t, n) {
    n !== null && (t.flags |= 4),
      t.flags & 16384 && (n = t.tag !== 22 ? lh() : 536870912,
        t.lanes |= n,
        Rs |= n)
  }
  function Ra(t, n) {
    if (!At)
      switch (t.tailMode) {
        case "hidden":
          n = t.tail;
          for (var s = null; n !== null;)
            n.alternate !== null && (s = n),
              n = n.sibling;
          s === null ? t.tail = null : s.sibling = null;
          break;
        case "collapsed":
          s = t.tail;
          for (var o = null; s !== null;)
            s.alternate !== null && (o = s),
              s = s.sibling;
          o === null ? n || t.tail === null ? t.tail = null : t.tail.sibling = null : o.sibling = null
      }
  }
  function Bt(t) {
    var n = t.alternate !== null && t.alternate.child === t.child
      , s = 0
      , o = 0;
    if (n)
      for (var u = t.child; u !== null;)
        s |= u.lanes | u.childLanes,
          o |= u.subtreeFlags & 65011712,
          o |= u.flags & 65011712,
          u.return = t,
          u = u.sibling;
    else
      for (u = t.child; u !== null;)
        s |= u.lanes | u.childLanes,
          o |= u.subtreeFlags,
          o |= u.flags,
          u.return = t,
          u = u.sibling;
    return t.subtreeFlags |= o,
      t.childLanes = s,
      n
  }
  function gT(t, n, s) {
    var o = n.pendingProps;
    switch (gu(n),
    n.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Bt(n),
          null;
      case 1:
        return Bt(n),
          null;
      case 3:
        return s = n.stateNode,
          o = null,
          t !== null && (o = t.memoizedState.cache),
          n.memoizedState.cache !== o && (n.flags |= 2048),
          En(Qt),
          Rt(),
          s.pendingContext && (s.context = s.pendingContext,
            s.pendingContext = null),
          (t === null || t.child === null) && (ca(n) ? Mn(n) : t === null || t.memoizedState.isDehydrated && (n.flags & 256) === 0 || (n.flags |= 1024,
            lm())),
          Bt(n),
          null;
      case 26:
        return s = n.memoizedState,
          t === null ? (Mn(n),
            s !== null ? (Bt(n),
              Op(n, s)) : (Bt(n),
                n.flags &= -16777217)) : s ? s !== t.memoizedState ? (Mn(n),
                  Bt(n),
                  Op(n, s)) : (Bt(n),
                    n.flags &= -16777217) : (t.memoizedProps !== o && Mn(n),
                      Bt(n),
                      n.flags &= -16777217),
          null;
      case 27:
        Xe(n),
          s = rt.current;
        var u = n.type;
        if (t !== null && n.stateNode != null)
          t.memoizedProps !== o && Mn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(r(166));
            return Bt(n),
              null
          }
          t = ut.current,
            ca(n) ? rm(n) : (t = Oy(u, o, s),
              n.stateNode = t,
              Mn(n))
        }
        return Bt(n),
          null;
      case 5:
        if (Xe(n),
          s = n.type,
          t !== null && n.stateNode != null)
          t.memoizedProps !== o && Mn(n);
        else {
          if (!o) {
            if (n.stateNode === null)
              throw Error(r(166));
            return Bt(n),
              null
          }
          if (t = ut.current,
            ca(n))
            rm(n);
          else {
            switch (u = bo(rt.current),
            t) {
              case 1:
                t = u.createElementNS("http://www.w3.org/2000/svg", s);
                break;
              case 2:
                t = u.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                break;
              default:
                switch (s) {
                  case "svg":
                    t = u.createElementNS("http://www.w3.org/2000/svg", s);
                    break;
                  case "math":
                    t = u.createElementNS("http://www.w3.org/1998/Math/MathML", s);
                    break;
                  case "script":
                    t = u.createElement("div"),
                      t.innerHTML = "<script><\/script>",
                      t = t.removeChild(t.firstChild);
                    break;
                  case "select":
                    t = typeof o.is == "string" ? u.createElement("select", {
                      is: o.is
                    }) : u.createElement("select"),
                      o.multiple ? t.multiple = !0 : o.size && (t.size = o.size);
                    break;
                  default:
                    t = typeof o.is == "string" ? u.createElement(s, {
                      is: o.is
                    }) : u.createElement(s)
                }
            }
            t[le] = n,
              t[pe] = o;
            t: for (u = n.child; u !== null;) {
              if (u.tag === 5 || u.tag === 6)
                t.appendChild(u.stateNode);
              else if (u.tag !== 4 && u.tag !== 27 && u.child !== null) {
                u.child.return = u,
                  u = u.child;
                continue
              }
              if (u === n)
                break t;
              for (; u.sibling === null;) {
                if (u.return === null || u.return === n)
                  break t;
                u = u.return
              }
              u.sibling.return = u.return,
                u = u.sibling
            }
            n.stateNode = t;
            t: switch (ae(t, s, o),
            s) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                t = !!o.autoFocus;
                break t;
              case "img":
                t = !0;
                break t;
              default:
                t = !1
            }
            t && Mn(n)
          }
        }
        return Bt(n),
          n.flags &= -16777217,
          null;
      case 6:
        if (t && n.stateNode != null)
          t.memoizedProps !== o && Mn(n);
        else {
          if (typeof o != "string" && n.stateNode === null)
            throw Error(r(166));
          if (t = rt.current,
            ca(n)) {
            if (t = n.stateNode,
              s = n.memoizedProps,
              o = null,
              u = fe,
              u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  o = u.memoizedProps
              }
            t[le] = n,
              t = !!(t.nodeValue === s || o !== null && o.suppressHydrationWarning === !0 || wy(t.nodeValue, s)),
              t || ji(n)
          } else
            t = bo(t).createTextNode(o),
              t[le] = n,
              n.stateNode = t
        }
        return Bt(n),
          null;
      case 13:
        if (o = n.memoizedState,
          t === null || t.memoizedState !== null && t.memoizedState.dehydrated !== null) {
          if (u = ca(n),
            o !== null && o.dehydrated !== null) {
            if (t === null) {
              if (!u)
                throw Error(r(318));
              if (u = n.memoizedState,
                u = u !== null ? u.dehydrated : null,
                !u)
                throw Error(r(317));
              u[le] = n
            } else
              fa(),
                (n.flags & 128) === 0 && (n.memoizedState = null),
                n.flags |= 4;
            Bt(n),
              u = !1
          } else
            u = lm(),
              t !== null && t.memoizedState !== null && (t.memoizedState.hydrationErrors = u),
              u = !0;
          if (!u)
            return n.flags & 256 ? (Cn(n),
              n) : (Cn(n),
                null)
        }
        if (Cn(n),
          (n.flags & 128) !== 0)
          return n.lanes = s,
            n;
        if (s = o !== null,
          t = t !== null && t.memoizedState !== null,
          s) {
          o = n.child,
            u = null,
            o.alternate !== null && o.alternate.memoizedState !== null && o.alternate.memoizedState.cachePool !== null && (u = o.alternate.memoizedState.cachePool.pool);
          var f = null;
          o.memoizedState !== null && o.memoizedState.cachePool !== null && (f = o.memoizedState.cachePool.pool),
            f !== u && (o.flags |= 2048)
        }
        return s !== t && s && (n.child.flags |= 8192),
          ao(n, n.updateQueue),
          Bt(n),
          null;
      case 4:
        return Rt(),
          t === null && Dc(n.stateNode.containerInfo),
          Bt(n),
          null;
      case 10:
        return En(n.type),
          Bt(n),
          null;
      case 19:
        if (tt(Zt),
          u = n.memoizedState,
          u === null)
          return Bt(n),
            null;
        if (o = (n.flags & 128) !== 0,
          f = u.rendering,
          f === null)
          if (o)
            Ra(u, !1);
          else {
            if (Ht !== 0 || t !== null && (t.flags & 128) !== 0)
              for (t = n.child; t !== null;) {
                if (f = to(t),
                  f !== null) {
                  for (n.flags |= 128,
                    Ra(u, !1),
                    t = f.updateQueue,
                    n.updateQueue = t,
                    ao(n, t),
                    n.subtreeFlags = 0,
                    t = s,
                    s = n.child; s !== null;)
                    sm(s, t),
                      s = s.sibling;
                  return J(Zt, Zt.current & 1 | 2),
                    n.child
                }
                t = t.sibling
              }
            u.tail !== null && an() > lo && (n.flags |= 128,
              o = !0,
              Ra(u, !1),
              n.lanes = 4194304)
          }
        else {
          if (!o)
            if (t = to(f),
              t !== null) {
              if (n.flags |= 128,
                o = !0,
                t = t.updateQueue,
                n.updateQueue = t,
                ao(n, t),
                Ra(u, !0),
                u.tail === null && u.tailMode === "hidden" && !f.alternate && !At)
                return Bt(n),
                  null
            } else
              2 * an() - u.renderingStartTime > lo && s !== 536870912 && (n.flags |= 128,
                o = !0,
                Ra(u, !1),
                n.lanes = 4194304);
          u.isBackwards ? (f.sibling = n.child,
            n.child = f) : (t = u.last,
              t !== null ? t.sibling = f : n.child = f,
              u.last = f)
        }
        return u.tail !== null ? (n = u.tail,
          u.rendering = n,
          u.tail = n.sibling,
          u.renderingStartTime = an(),
          n.sibling = null,
          t = Zt.current,
          J(Zt, o ? t & 1 | 2 : t & 1),
          n) : (Bt(n),
            null);
      case 22:
      case 23:
        return Cn(n),
          Nu(),
          o = n.memoizedState !== null,
          t !== null ? t.memoizedState !== null !== o && (n.flags |= 8192) : o && (n.flags |= 8192),
          o ? (s & 536870912) !== 0 && (n.flags & 128) === 0 && (Bt(n),
            n.subtreeFlags & 6 && (n.flags |= 8192)) : Bt(n),
          s = n.updateQueue,
          s !== null && ao(n, s.retryQueue),
          s = null,
          t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
          o = null,
          n.memoizedState !== null && n.memoizedState.cachePool !== null && (o = n.memoizedState.cachePool.pool),
          o !== s && (n.flags |= 2048),
          t !== null && tt(zi),
          null;
      case 24:
        return s = null,
          t !== null && (s = t.memoizedState.cache),
          n.memoizedState.cache !== s && (n.flags |= 2048),
          En(Qt),
          Bt(n),
          null;
      case 25:
        return null;
      case 30:
        return null
    }
    throw Error(r(156, n.tag))
  }
  function vT(t, n) {
    switch (gu(n),
    n.tag) {
      case 1:
        return t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
      case 3:
        return En(Qt),
          Rt(),
          t = n.flags,
          (t & 65536) !== 0 && (t & 128) === 0 ? (n.flags = t & -65537 | 128,
            n) : null;
      case 26:
      case 27:
      case 5:
        return Xe(n),
          null;
      case 13:
        if (Cn(n),
          t = n.memoizedState,
          t !== null && t.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(r(340));
          fa()
        }
        return t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
      case 19:
        return tt(Zt),
          null;
      case 4:
        return Rt(),
          null;
      case 10:
        return En(n.type),
          null;
      case 22:
      case 23:
        return Cn(n),
          Nu(),
          t !== null && tt(zi),
          t = n.flags,
          t & 65536 ? (n.flags = t & -65537 | 128,
            n) : null;
      case 24:
        return En(Qt),
          null;
      case 25:
        return null;
      default:
        return null
    }
  }
  function Np(t, n) {
    switch (gu(n),
    n.tag) {
      case 3:
        En(Qt),
          Rt();
        break;
      case 26:
      case 27:
      case 5:
        Xe(n);
        break;
      case 4:
        Rt();
        break;
      case 13:
        Cn(n);
        break;
      case 19:
        tt(Zt);
        break;
      case 10:
        En(n.type);
        break;
      case 22:
      case 23:
        Cn(n),
          Nu(),
          t !== null && tt(zi);
        break;
      case 24:
        En(Qt)
    }
  }
  function Ma(t, n) {
    try {
      var s = n.updateQueue
        , o = s !== null ? s.lastEffect : null;
      if (o !== null) {
        var u = o.next;
        s = u;
        do {
          if ((s.tag & t) === t) {
            o = void 0;
            var f = s.create
              , g = s.inst;
            o = f(),
              g.destroy = o
          }
          s = s.next
        } while (s !== u)
      }
    } catch (x) {
      _t(n, n.return, x)
    }
  }
  function Wn(t, n, s) {
    try {
      var o = n.updateQueue
        , u = o !== null ? o.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        o = f;
        do {
          if ((o.tag & t) === t) {
            var g = o.inst
              , x = g.destroy;
            if (x !== void 0) {
              g.destroy = void 0,
                u = n;
              var R = s
                , P = x;
              try {
                P()
              } catch (F) {
                _t(u, R, F)
              }
            }
          }
          o = o.next
        } while (o !== f)
      }
    } catch (F) {
      _t(n, n.return, F)
    }
  }
  function jp(t) {
    var n = t.updateQueue;
    if (n !== null) {
      var s = t.stateNode;
      try {
        bm(n, s)
      } catch (o) {
        _t(t, t.return, o)
      }
    }
  }
  function _p(t, n, s) {
    s.props = Pi(t.type, t.memoizedProps),
      s.state = t.memoizedState;
    try {
      s.componentWillUnmount()
    } catch (o) {
      _t(t, n, o)
    }
  }
  function Da(t, n) {
    try {
      var s = t.ref;
      if (s !== null) {
        switch (t.tag) {
          case 26:
          case 27:
          case 5:
            var o = t.stateNode;
            break;
          case 30:
            o = t.stateNode;
            break;
          default:
            o = t.stateNode
        }
        typeof s == "function" ? t.refCleanup = s(o) : s.current = o
      }
    } catch (u) {
      _t(t, n, u)
    }
  }
  function ln(t, n) {
    var s = t.ref
      , o = t.refCleanup;
    if (s !== null)
      if (typeof o == "function")
        try {
          o()
        } catch (u) {
          _t(t, n, u)
        } finally {
          t.refCleanup = null,
            t = t.alternate,
            t != null && (t.refCleanup = null)
        }
      else if (typeof s == "function")
        try {
          s(null)
        } catch (u) {
          _t(t, n, u)
        }
      else
        s.current = null
  }
  function Vp(t) {
    var n = t.type
      , s = t.memoizedProps
      , o = t.stateNode;
    try {
      t: switch (n) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          s.autoFocus && o.focus();
          break t;
        case "img":
          s.src ? o.src = s.src : s.srcSet && (o.srcset = s.srcSet)
      }
    } catch (u) {
      _t(t, t.return, u)
    }
  }
  function ac(t, n, s) {
    try {
      var o = t.stateNode;
      BT(o, t.type, s, n),
        o[pe] = n
    } catch (u) {
      _t(t, t.return, u)
    }
  }
  function zp(t) {
    return t.tag === 5 || t.tag === 3 || t.tag === 26 || t.tag === 27 && si(t.type) || t.tag === 4
  }
  function rc(t) {
    t: for (; ;) {
      for (; t.sibling === null;) {
        if (t.return === null || zp(t.return))
          return null;
        t = t.return
      }
      for (t.sibling.return = t.return,
        t = t.sibling; t.tag !== 5 && t.tag !== 6 && t.tag !== 18;) {
        if (t.tag === 27 && si(t.type) || t.flags & 2 || t.child === null || t.tag === 4)
          continue t;
        t.child.return = t,
          t = t.child
      }
      if (!(t.flags & 2))
        return t.stateNode
    }
  }
  function oc(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode,
        n ? (s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s).insertBefore(t, n) : (n = s.nodeType === 9 ? s.body : s.nodeName === "HTML" ? s.ownerDocument.body : s,
          n.appendChild(t),
          s = s._reactRootContainer,
          s != null || n.onclick !== null || (n.onclick = vo));
    else if (o !== 4 && (o === 27 && si(t.type) && (s = t.stateNode,
      n = null),
      t = t.child,
      t !== null))
      for (oc(t, n, s),
        t = t.sibling; t !== null;)
        oc(t, n, s),
          t = t.sibling
  }
  function ro(t, n, s) {
    var o = t.tag;
    if (o === 5 || o === 6)
      t = t.stateNode,
        n ? s.insertBefore(t, n) : s.appendChild(t);
    else if (o !== 4 && (o === 27 && si(t.type) && (s = t.stateNode),
      t = t.child,
      t !== null))
      for (ro(t, n, s),
        t = t.sibling; t !== null;)
        ro(t, n, s),
          t = t.sibling
  }
  function Lp(t) {
    var n = t.stateNode
      , s = t.memoizedProps;
    try {
      for (var o = t.type, u = n.attributes; u.length;)
        n.removeAttributeNode(u[0]);
      ae(n, o, s),
        n[le] = t,
        n[pe] = s
    } catch (f) {
      _t(t, t.return, f)
    }
  }
  var Dn = !1
    , Gt = !1
    , lc = !1
    , Pp = typeof WeakSet == "function" ? WeakSet : Set
    , ee = null;
  function bT(t, n) {
    if (t = t.containerInfo,
      jc = Ao,
      t = Qh(t),
      ru(t)) {
      if ("selectionStart" in t)
        var s = {
          start: t.selectionStart,
          end: t.selectionEnd
        };
      else
        t: {
          s = (s = t.ownerDocument) && s.defaultView || window;
          var o = s.getSelection && s.getSelection();
          if (o && o.rangeCount !== 0) {
            s = o.anchorNode;
            var u = o.anchorOffset
              , f = o.focusNode;
            o = o.focusOffset;
            try {
              s.nodeType,
                f.nodeType
            } catch {
              s = null;
              break t
            }
            var g = 0
              , x = -1
              , R = -1
              , P = 0
              , F = 0
              , X = t
              , U = null;
            e: for (; ;) {
              for (var B; X !== s || u !== 0 && X.nodeType !== 3 || (x = g + u),
                X !== f || o !== 0 && X.nodeType !== 3 || (R = g + o),
                X.nodeType === 3 && (g += X.nodeValue.length),
                (B = X.firstChild) !== null;)
                U = X,
                  X = B;
              for (; ;) {
                if (X === t)
                  break e;
                if (U === s && ++P === u && (x = g),
                  U === f && ++F === o && (R = g),
                  (B = X.nextSibling) !== null)
                  break;
                X = U,
                  U = X.parentNode
              }
              X = B
            }
            s = x === -1 || R === -1 ? null : {
              start: x,
              end: R
            }
          } else
            s = null
        }
      s = s || {
        start: 0,
        end: 0
      }
    } else
      s = null;
    for (_c = {
      focusedElem: t,
      selectionRange: s
    },
      Ao = !1,
      ee = n; ee !== null;)
      if (n = ee,
        t = n.child,
        (n.subtreeFlags & 1024) !== 0 && t !== null)
        t.return = n,
          ee = t;
      else
        for (; ee !== null;) {
          switch (n = ee,
          f = n.alternate,
          t = n.flags,
          n.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((t & 1024) !== 0 && f !== null) {
                t = void 0,
                  s = n,
                  u = f.memoizedProps,
                  f = f.memoizedState,
                  o = s.stateNode;
                try {
                  var pt = Pi(s.type, u, s.elementType === s.type);
                  t = o.getSnapshotBeforeUpdate(pt, f),
                    o.__reactInternalSnapshotBeforeUpdate = t
                } catch (dt) {
                  _t(s, s.return, dt)
                }
              }
              break;
            case 3:
              if ((t & 1024) !== 0) {
                if (t = n.stateNode.containerInfo,
                  s = t.nodeType,
                  s === 9)
                  Lc(t);
                else if (s === 1)
                  switch (t.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Lc(t);
                      break;
                    default:
                      t.textContent = ""
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((t & 1024) !== 0)
                throw Error(r(163))
          }
          if (t = n.sibling,
            t !== null) {
            t.return = n.return,
              ee = t;
            break
          }
          ee = n.return
        }
  }
  function Up(t, n, s) {
    var o = s.flags;
    switch (s.tag) {
      case 0:
      case 11:
      case 15:
        $n(t, s),
          o & 4 && Ma(5, s);
        break;
      case 1:
        if ($n(t, s),
          o & 4)
          if (t = s.stateNode,
            n === null)
            try {
              t.componentDidMount()
            } catch (g) {
              _t(s, s.return, g)
            }
          else {
            var u = Pi(s.type, n.memoizedProps);
            n = n.memoizedState;
            try {
              t.componentDidUpdate(u, n, t.__reactInternalSnapshotBeforeUpdate)
            } catch (g) {
              _t(s, s.return, g)
            }
          }
        o & 64 && jp(s),
          o & 512 && Da(s, s.return);
        break;
      case 3:
        if ($n(t, s),
          o & 64 && (t = s.updateQueue,
            t !== null)) {
          if (n = null,
            s.child !== null)
            switch (s.child.tag) {
              case 27:
              case 5:
                n = s.child.stateNode;
                break;
              case 1:
                n = s.child.stateNode
            }
          try {
            bm(t, n)
          } catch (g) {
            _t(s, s.return, g)
          }
        }
        break;
      case 27:
        n === null && o & 4 && Lp(s);
      case 26:
      case 5:
        $n(t, s),
          n === null && o & 4 && Vp(s),
          o & 512 && Da(s, s.return);
        break;
      case 12:
        $n(t, s);
        break;
      case 13:
        $n(t, s),
          o & 4 && Hp(t, s),
          o & 64 && (t = s.memoizedState,
            t !== null && (t = t.dehydrated,
              t !== null && (s = MT.bind(null, s),
                XT(t, s))));
        break;
      case 22:
        if (o = s.memoizedState !== null || Dn,
          !o) {
          n = n !== null && n.memoizedState !== null || Gt,
            u = Dn;
          var f = Gt;
          Dn = o,
            (Gt = n) && !f ? Jn(t, s, (s.subtreeFlags & 8772) !== 0) : $n(t, s),
            Dn = u,
            Gt = f
        }
        break;
      case 30:
        break;
      default:
        $n(t, s)
    }
  }
  function Bp(t) {
    var n = t.alternate;
    n !== null && (t.alternate = null,
      Bp(n)),
      t.child = null,
      t.deletions = null,
      t.sibling = null,
      t.tag === 5 && (n = t.stateNode,
        n !== null && Hl(n)),
      t.stateNode = null,
      t.return = null,
      t.dependencies = null,
      t.memoizedProps = null,
      t.memoizedState = null,
      t.pendingProps = null,
      t.stateNode = null,
      t.updateQueue = null
  }
  var Ut = null
    , ve = !1;
  function On(t, n, s) {
    for (s = s.child; s !== null;)
      kp(t, n, s),
        s = s.sibling
  }
  function kp(t, n, s) {
    if (Se && typeof Se.onCommitFiberUnmount == "function")
      try {
        Se.onCommitFiberUnmount(Ws, s)
      } catch { }
    switch (s.tag) {
      case 26:
        Gt || ln(s, n),
          On(t, n, s),
          s.memoizedState ? s.memoizedState.count-- : s.stateNode && (s = s.stateNode,
            s.parentNode.removeChild(s));
        break;
      case 27:
        Gt || ln(s, n);
        var o = Ut
          , u = ve;
        si(s.type) && (Ut = s.stateNode,
          ve = !1),
          On(t, n, s),
          Ua(s.stateNode),
          Ut = o,
          ve = u;
        break;
      case 5:
        Gt || ln(s, n);
      case 6:
        if (o = Ut,
          u = ve,
          Ut = null,
          On(t, n, s),
          Ut = o,
          ve = u,
          Ut !== null)
          if (ve)
            try {
              (Ut.nodeType === 9 ? Ut.body : Ut.nodeName === "HTML" ? Ut.ownerDocument.body : Ut).removeChild(s.stateNode)
            } catch (f) {
              _t(s, n, f)
            }
          else
            try {
              Ut.removeChild(s.stateNode)
            } catch (f) {
              _t(s, n, f)
            }
        break;
      case 18:
        Ut !== null && (ve ? (t = Ut,
          My(t.nodeType === 9 ? t.body : t.nodeName === "HTML" ? t.ownerDocument.body : t, s.stateNode),
          Xa(t)) : My(Ut, s.stateNode));
        break;
      case 4:
        o = Ut,
          u = ve,
          Ut = s.stateNode.containerInfo,
          ve = !0,
          On(t, n, s),
          Ut = o,
          ve = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Gt || Wn(2, s, n),
          Gt || Wn(4, s, n),
          On(t, n, s);
        break;
      case 1:
        Gt || (ln(s, n),
          o = s.stateNode,
          typeof o.componentWillUnmount == "function" && _p(s, n, o)),
          On(t, n, s);
        break;
      case 21:
        On(t, n, s);
        break;
      case 22:
        Gt = (o = Gt) || s.memoizedState !== null,
          On(t, n, s),
          Gt = o;
        break;
      default:
        On(t, n, s)
    }
  }
  function Hp(t, n) {
    if (n.memoizedState === null && (t = n.alternate,
      t !== null && (t = t.memoizedState,
        t !== null && (t = t.dehydrated,
          t !== null))))
      try {
        Xa(t)
      } catch (s) {
        _t(n, n.return, s)
      }
  }
  function xT(t) {
    switch (t.tag) {
      case 13:
      case 19:
        var n = t.stateNode;
        return n === null && (n = t.stateNode = new Pp),
          n;
      case 22:
        return t = t.stateNode,
          n = t._retryCache,
          n === null && (n = t._retryCache = new Pp),
          n;
      default:
        throw Error(r(435, t.tag))
    }
  }
  function uc(t, n) {
    var s = xT(t);
    n.forEach(function (o) {
      var u = DT.bind(null, t, o);
      s.has(o) || (s.add(o),
        o.then(u, u))
    })
  }
  function Ae(t, n) {
    var s = n.deletions;
    if (s !== null)
      for (var o = 0; o < s.length; o++) {
        var u = s[o]
          , f = t
          , g = n
          , x = g;
        t: for (; x !== null;) {
          switch (x.tag) {
            case 27:
              if (si(x.type)) {
                Ut = x.stateNode,
                  ve = !1;
                break t
              }
              break;
            case 5:
              Ut = x.stateNode,
                ve = !1;
              break t;
            case 3:
            case 4:
              Ut = x.stateNode.containerInfo,
                ve = !0;
              break t
          }
          x = x.return
        }
        if (Ut === null)
          throw Error(r(160));
        kp(f, g, u),
          Ut = null,
          ve = !1,
          f = u.alternate,
          f !== null && (f.return = null),
          u.return = null
      }
    if (n.subtreeFlags & 13878)
      for (n = n.child; n !== null;)
        Fp(n, t),
          n = n.sibling
  }
  var Qe = null;
  function Fp(t, n) {
    var s = t.alternate
      , o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Ae(n, t),
          Ce(t),
          o & 4 && (Wn(3, t, t.return),
            Ma(3, t),
            Wn(5, t, t.return));
        break;
      case 1:
        Ae(n, t),
          Ce(t),
          o & 512 && (Gt || s === null || ln(s, s.return)),
          o & 64 && Dn && (t = t.updateQueue,
            t !== null && (o = t.callbacks,
              o !== null && (s = t.shared.hiddenCallbacks,
                t.shared.hiddenCallbacks = s === null ? o : s.concat(o))));
        break;
      case 26:
        var u = Qe;
        if (Ae(n, t),
          Ce(t),
          o & 512 && (Gt || s === null || ln(s, s.return)),
          o & 4) {
          var f = s !== null ? s.memoizedState : null;
          if (o = t.memoizedState,
            s === null)
            if (o === null)
              if (t.stateNode === null) {
                t: {
                  o = t.type,
                    s = t.memoizedProps,
                    u = u.ownerDocument || u;
                  e: switch (o) {
                    case "title":
                      f = u.getElementsByTagName("title")[0],
                        (!f || f[Is] || f[le] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(o),
                          u.head.insertBefore(f, u.querySelector("head > title"))),
                        ae(f, o, s),
                        f[le] = t,
                        It(f),
                        o = f;
                      break t;
                    case "link":
                      var g = Ly("link", "href", u).get(o + (s.href || ""));
                      if (g) {
                        for (var x = 0; x < g.length; x++)
                          if (f = g[x],
                            f.getAttribute("href") === (s.href == null || s.href === "" ? null : s.href) && f.getAttribute("rel") === (s.rel == null ? null : s.rel) && f.getAttribute("title") === (s.title == null ? null : s.title) && f.getAttribute("crossorigin") === (s.crossOrigin == null ? null : s.crossOrigin)) {
                            g.splice(x, 1);
                            break e
                          }
                      }
                      f = u.createElement(o),
                        ae(f, o, s),
                        u.head.appendChild(f);
                      break;
                    case "meta":
                      if (g = Ly("meta", "content", u).get(o + (s.content || ""))) {
                        for (x = 0; x < g.length; x++)
                          if (f = g[x],
                            f.getAttribute("content") === (s.content == null ? null : "" + s.content) && f.getAttribute("name") === (s.name == null ? null : s.name) && f.getAttribute("property") === (s.property == null ? null : s.property) && f.getAttribute("http-equiv") === (s.httpEquiv == null ? null : s.httpEquiv) && f.getAttribute("charset") === (s.charSet == null ? null : s.charSet)) {
                            g.splice(x, 1);
                            break e
                          }
                      }
                      f = u.createElement(o),
                        ae(f, o, s),
                        u.head.appendChild(f);
                      break;
                    default:
                      throw Error(r(468, o))
                  }
                  f[le] = t,
                    It(f),
                    o = f
                }
                t.stateNode = o
              } else
                Py(u, t.type, t.stateNode);
            else
              t.stateNode = zy(u, o, t.memoizedProps);
          else
            f !== o ? (f === null ? s.stateNode !== null && (s = s.stateNode,
              s.parentNode.removeChild(s)) : f.count--,
              o === null ? Py(u, t.type, t.stateNode) : zy(u, o, t.memoizedProps)) : o === null && t.stateNode !== null && ac(t, t.memoizedProps, s.memoizedProps)
        }
        break;
      case 27:
        Ae(n, t),
          Ce(t),
          o & 512 && (Gt || s === null || ln(s, s.return)),
          s !== null && o & 4 && ac(t, t.memoizedProps, s.memoizedProps);
        break;
      case 5:
        if (Ae(n, t),
          Ce(t),
          o & 512 && (Gt || s === null || ln(s, s.return)),
          t.flags & 32) {
          u = t.stateNode;
          try {
            as(u, "")
          } catch (B) {
            _t(t, t.return, B)
          }
        }
        o & 4 && t.stateNode != null && (u = t.memoizedProps,
          ac(t, u, s !== null ? s.memoizedProps : u)),
          o & 1024 && (lc = !0);
        break;
      case 6:
        if (Ae(n, t),
          Ce(t),
          o & 4) {
          if (t.stateNode === null)
            throw Error(r(162));
          o = t.memoizedProps,
            s = t.stateNode;
          try {
            s.nodeValue = o
          } catch (B) {
            _t(t, t.return, B)
          }
        }
        break;
      case 3:
        if (To = null,
          u = Qe,
          Qe = xo(n.containerInfo),
          Ae(n, t),
          Qe = u,
          Ce(t),
          o & 4 && s !== null && s.memoizedState.isDehydrated)
          try {
            Xa(n.containerInfo)
          } catch (B) {
            _t(t, t.return, B)
          }
        lc && (lc = !1,
          qp(t));
        break;
      case 4:
        o = Qe,
          Qe = xo(t.stateNode.containerInfo),
          Ae(n, t),
          Ce(t),
          Qe = o;
        break;
      case 12:
        Ae(n, t),
          Ce(t);
        break;
      case 13:
        Ae(n, t),
          Ce(t),
          t.child.flags & 8192 && t.memoizedState !== null != (s !== null && s.memoizedState !== null) && (pc = an()),
          o & 4 && (o = t.updateQueue,
            o !== null && (t.updateQueue = null,
              uc(t, o)));
        break;
      case 22:
        u = t.memoizedState !== null;
        var R = s !== null && s.memoizedState !== null
          , P = Dn
          , F = Gt;
        if (Dn = P || u,
          Gt = F || R,
          Ae(n, t),
          Gt = F,
          Dn = P,
          Ce(t),
          o & 8192)
          t: for (n = t.stateNode,
            n._visibility = u ? n._visibility & -2 : n._visibility | 1,
            u && (s === null || R || Dn || Gt || Ui(t)),
            s = null,
            n = t; ;) {
            if (n.tag === 5 || n.tag === 26) {
              if (s === null) {
                R = s = n;
                try {
                  if (f = R.stateNode,
                    u)
                    g = f.style,
                      typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    x = R.stateNode;
                    var X = R.memoizedProps.style
                      , U = X != null && X.hasOwnProperty("display") ? X.display : null;
                    x.style.display = U == null || typeof U == "boolean" ? "" : ("" + U).trim()
                  }
                } catch (B) {
                  _t(R, R.return, B)
                }
              }
            } else if (n.tag === 6) {
              if (s === null) {
                R = n;
                try {
                  R.stateNode.nodeValue = u ? "" : R.memoizedProps
                } catch (B) {
                  _t(R, R.return, B)
                }
              }
            } else if ((n.tag !== 22 && n.tag !== 23 || n.memoizedState === null || n === t) && n.child !== null) {
              n.child.return = n,
                n = n.child;
              continue
            }
            if (n === t)
              break t;
            for (; n.sibling === null;) {
              if (n.return === null || n.return === t)
                break t;
              s === n && (s = null),
                n = n.return
            }
            s === n && (s = null),
              n.sibling.return = n.return,
              n = n.sibling
          }
        o & 4 && (o = t.updateQueue,
          o !== null && (s = o.retryQueue,
            s !== null && (o.retryQueue = null,
              uc(t, s))));
        break;
      case 19:
        Ae(n, t),
          Ce(t),
          o & 4 && (o = t.updateQueue,
            o !== null && (t.updateQueue = null,
              uc(t, o)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Ae(n, t),
          Ce(t)
    }
  }
  function Ce(t) {
    var n = t.flags;
    if (n & 2) {
      try {
        for (var s, o = t.return; o !== null;) {
          if (zp(o)) {
            s = o;
            break
          }
          o = o.return
        }
        if (s == null)
          throw Error(r(160));
        switch (s.tag) {
          case 27:
            var u = s.stateNode
              , f = rc(t);
            ro(t, f, u);
            break;
          case 5:
            var g = s.stateNode;
            s.flags & 32 && (as(g, ""),
              s.flags &= -33);
            var x = rc(t);
            ro(t, x, g);
            break;
          case 3:
          case 4:
            var R = s.stateNode.containerInfo
              , P = rc(t);
            oc(t, P, R);
            break;
          default:
            throw Error(r(161))
        }
      } catch (F) {
        _t(t, t.return, F)
      }
      t.flags &= -3
    }
    n & 4096 && (t.flags &= -4097)
  }
  function qp(t) {
    if (t.subtreeFlags & 1024)
      for (t = t.child; t !== null;) {
        var n = t;
        qp(n),
          n.tag === 5 && n.flags & 1024 && n.stateNode.reset(),
          t = t.sibling
      }
  }
  function $n(t, n) {
    if (n.subtreeFlags & 8772)
      for (n = n.child; n !== null;)
        Up(t, n.alternate, n),
          n = n.sibling
  }
  function Ui(t) {
    for (t = t.child; t !== null;) {
      var n = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Wn(4, n, n.return),
            Ui(n);
          break;
        case 1:
          ln(n, n.return);
          var s = n.stateNode;
          typeof s.componentWillUnmount == "function" && _p(n, n.return, s),
            Ui(n);
          break;
        case 27:
          Ua(n.stateNode);
        case 26:
        case 5:
          ln(n, n.return),
            Ui(n);
          break;
        case 22:
          n.memoizedState === null && Ui(n);
          break;
        case 30:
          Ui(n);
          break;
        default:
          Ui(n)
      }
      t = t.sibling
    }
  }
  function Jn(t, n, s) {
    for (s = s && (n.subtreeFlags & 8772) !== 0,
      n = n.child; n !== null;) {
      var o = n.alternate
        , u = t
        , f = n
        , g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Jn(u, f, s),
            Ma(4, f);
          break;
        case 1:
          if (Jn(u, f, s),
            o = f,
            u = o.stateNode,
            typeof u.componentDidMount == "function")
            try {
              u.componentDidMount()
            } catch (P) {
              _t(o, o.return, P)
            }
          if (o = f,
            u = o.updateQueue,
            u !== null) {
            var x = o.stateNode;
            try {
              var R = u.shared.hiddenCallbacks;
              if (R !== null)
                for (u.shared.hiddenCallbacks = null,
                  u = 0; u < R.length; u++)
                  vm(R[u], x)
            } catch (P) {
              _t(o, o.return, P)
            }
          }
          s && g & 64 && jp(f),
            Da(f, f.return);
          break;
        case 27:
          Lp(f);
        case 26:
        case 5:
          Jn(u, f, s),
            s && o === null && g & 4 && Vp(f),
            Da(f, f.return);
          break;
        case 12:
          Jn(u, f, s);
          break;
        case 13:
          Jn(u, f, s),
            s && g & 4 && Hp(u, f);
          break;
        case 22:
          f.memoizedState === null && Jn(u, f, s),
            Da(f, f.return);
          break;
        case 30:
          break;
        default:
          Jn(u, f, s)
      }
      n = n.sibling
    }
  }
  function cc(t, n) {
    var s = null;
    t !== null && t.memoizedState !== null && t.memoizedState.cachePool !== null && (s = t.memoizedState.cachePool.pool),
      t = null,
      n.memoizedState !== null && n.memoizedState.cachePool !== null && (t = n.memoizedState.cachePool.pool),
      t !== s && (t != null && t.refCount++,
        s != null && ma(s))
  }
  function fc(t, n) {
    t = null,
      n.alternate !== null && (t = n.alternate.memoizedState.cache),
      n = n.memoizedState.cache,
      n !== t && (n.refCount++,
        t != null && ma(t))
  }
  function un(t, n, s, o) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;)
        Gp(t, n, s, o),
          n = n.sibling
  }
  function Gp(t, n, s, o) {
    var u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        un(t, n, s, o),
          u & 2048 && Ma(9, n);
        break;
      case 1:
        un(t, n, s, o);
        break;
      case 3:
        un(t, n, s, o),
          u & 2048 && (t = null,
            n.alternate !== null && (t = n.alternate.memoizedState.cache),
            n = n.memoizedState.cache,
            n !== t && (n.refCount++,
              t != null && ma(t)));
        break;
      case 12:
        if (u & 2048) {
          un(t, n, s, o),
            t = n.stateNode;
          try {
            var f = n.memoizedProps
              , g = f.id
              , x = f.onPostCommit;
            typeof x == "function" && x(g, n.alternate === null ? "mount" : "update", t.passiveEffectDuration, -0)
          } catch (R) {
            _t(n, n.return, R)
          }
        } else
          un(t, n, s, o);
        break;
      case 13:
        un(t, n, s, o);
        break;
      case 23:
        break;
      case 22:
        f = n.stateNode,
          g = n.alternate,
          n.memoizedState !== null ? f._visibility & 2 ? un(t, n, s, o) : Oa(t, n) : f._visibility & 2 ? un(t, n, s, o) : (f._visibility |= 2,
            Es(t, n, s, o, (n.subtreeFlags & 10256) !== 0)),
          u & 2048 && cc(g, n);
        break;
      case 24:
        un(t, n, s, o),
          u & 2048 && fc(n.alternate, n);
        break;
      default:
        un(t, n, s, o)
    }
  }
  function Es(t, n, s, o, u) {
    for (u = u && (n.subtreeFlags & 10256) !== 0,
      n = n.child; n !== null;) {
      var f = t
        , g = n
        , x = s
        , R = o
        , P = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Es(f, g, x, R, u),
            Ma(8, g);
          break;
        case 23:
          break;
        case 22:
          var F = g.stateNode;
          g.memoizedState !== null ? F._visibility & 2 ? Es(f, g, x, R, u) : Oa(f, g) : (F._visibility |= 2,
            Es(f, g, x, R, u)),
            u && P & 2048 && cc(g.alternate, g);
          break;
        case 24:
          Es(f, g, x, R, u),
            u && P & 2048 && fc(g.alternate, g);
          break;
        default:
          Es(f, g, x, R, u)
      }
      n = n.sibling
    }
  }
  function Oa(t, n) {
    if (n.subtreeFlags & 10256)
      for (n = n.child; n !== null;) {
        var s = t
          , o = n
          , u = o.flags;
        switch (o.tag) {
          case 22:
            Oa(s, o),
              u & 2048 && cc(o.alternate, o);
            break;
          case 24:
            Oa(s, o),
              u & 2048 && fc(o.alternate, o);
            break;
          default:
            Oa(s, o)
        }
        n = n.sibling
      }
  }
  var Na = 8192;
  function As(t) {
    if (t.subtreeFlags & Na)
      for (t = t.child; t !== null;)
        Yp(t),
          t = t.sibling
  }
  function Yp(t) {
    switch (t.tag) {
      case 26:
        As(t),
          t.flags & Na && t.memoizedState !== null && aw(Qe, t.memoizedState, t.memoizedProps);
        break;
      case 5:
        As(t);
        break;
      case 3:
      case 4:
        var n = Qe;
        Qe = xo(t.stateNode.containerInfo),
          As(t),
          Qe = n;
        break;
      case 22:
        t.memoizedState === null && (n = t.alternate,
          n !== null && n.memoizedState !== null ? (n = Na,
            Na = 16777216,
            As(t),
            Na = n) : As(t));
        break;
      default:
        As(t)
    }
  }
  function Xp(t) {
    var n = t.alternate;
    if (n !== null && (t = n.child,
      t !== null)) {
      n.child = null;
      do
        n = t.sibling,
          t.sibling = null,
          t = n;
      while (t !== null)
    }
  }
  function ja(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          ee = o,
            Qp(o, t)
        }
      Xp(t)
    }
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null;)
        Kp(t),
          t = t.sibling
  }
  function Kp(t) {
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        ja(t),
          t.flags & 2048 && Wn(9, t, t.return);
        break;
      case 3:
        ja(t);
        break;
      case 12:
        ja(t);
        break;
      case 22:
        var n = t.stateNode;
        t.memoizedState !== null && n._visibility & 2 && (t.return === null || t.return.tag !== 13) ? (n._visibility &= -3,
          oo(t)) : ja(t);
        break;
      default:
        ja(t)
    }
  }
  function oo(t) {
    var n = t.deletions;
    if ((t.flags & 16) !== 0) {
      if (n !== null)
        for (var s = 0; s < n.length; s++) {
          var o = n[s];
          ee = o,
            Qp(o, t)
        }
      Xp(t)
    }
    for (t = t.child; t !== null;) {
      switch (n = t,
      n.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, n, n.return),
            oo(n);
          break;
        case 22:
          s = n.stateNode,
            s._visibility & 2 && (s._visibility &= -3,
              oo(n));
          break;
        default:
          oo(n)
      }
      t = t.sibling
    }
  }
  function Qp(t, n) {
    for (; ee !== null;) {
      var s = ee;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Wn(8, s, n);
          break;
        case 23:
        case 22:
          if (s.memoizedState !== null && s.memoizedState.cachePool !== null) {
            var o = s.memoizedState.cachePool.pool;
            o != null && o.refCount++
          }
          break;
        case 24:
          ma(s.memoizedState.cache)
      }
      if (o = s.child,
        o !== null)
        o.return = s,
          ee = o;
      else
        t: for (s = t; ee !== null;) {
          o = ee;
          var u = o.sibling
            , f = o.return;
          if (Bp(o),
            o === s) {
            ee = null;
            break t
          }
          if (u !== null) {
            u.return = f,
              ee = u;
            break t
          }
          ee = f
        }
    }
  }
  var ST = {
    getCacheForType: function (t) {
      var n = ue(Qt)
        , s = n.data.get(t);
      return s === void 0 && (s = t(),
        n.data.set(t, s)),
        s
    }
  }
    , TT = typeof WeakMap == "function" ? WeakMap : Map
    , Mt = 0
    , zt = null
    , St = null
    , wt = 0
    , Dt = 0
    , Re = null
    , In = !1
    , Cs = !1
    , dc = !1
    , Nn = 0
    , Ht = 0
    , ti = 0
    , Bi = 0
    , hc = 0
    , Fe = 0
    , Rs = 0
    , _a = null
    , be = null
    , mc = !1
    , pc = 0
    , lo = 1 / 0
    , uo = null
    , ei = null
    , se = 0
    , ni = null
    , Ms = null
    , Ds = 0
    , yc = 0
    , gc = null
    , Zp = null
    , Va = 0
    , vc = null;
  function Me() {
    if ((Mt & 2) !== 0 && wt !== 0)
      return wt & -wt;
    if (_.T !== null) {
      var t = ys;
      return t !== 0 ? t : Ac()
    }
    return fh()
  }
  function Wp() {
    Fe === 0 && (Fe = (wt & 536870912) === 0 || At ? oh() : 536870912);
    var t = He.current;
    return t !== null && (t.flags |= 32),
      Fe
  }
  function De(t, n, s) {
    (t === zt && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null) && (Os(t, 0),
      ii(t, wt, Fe, !1)),
      Js(t, s),
      ((Mt & 2) === 0 || t !== zt) && (t === zt && ((Mt & 2) === 0 && (Bi |= s),
        Ht === 4 && ii(t, wt, Fe, !1)),
        cn(t))
  }
  function $p(t, n, s) {
    if ((Mt & 6) !== 0)
      throw Error(r(327));
    var o = !s && (n & 124) === 0 && (n & t.expiredLanes) === 0 || $s(t, n)
      , u = o ? AT(t, n) : Sc(t, n, !0)
      , f = o;
    do {
      if (u === 0) {
        Cs && !o && ii(t, n, 0, !1);
        break
      } else {
        if (s = t.current.alternate,
          f && !wT(s)) {
          u = Sc(t, n, !1),
            f = !1;
          continue
        }
        if (u === 2) {
          if (f = n,
            t.errorRecoveryDisabledLanes & f)
            var g = 0;
          else
            g = t.pendingLanes & -536870913,
              g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            n = g;
            t: {
              var x = t;
              u = _a;
              var R = x.current.memoizedState.isDehydrated;
              if (R && (Os(x, g).flags |= 256),
                g = Sc(x, g, !1),
                g !== 2) {
                if (dc && !R) {
                  x.errorRecoveryDisabledLanes |= f,
                    Bi |= f,
                    u = 4;
                  break t
                }
                f = be,
                  be = u,
                  f !== null && (be === null ? be = f : be.push.apply(be, f))
              }
              u = g
            }
            if (f = !1,
              u !== 2)
              continue
          }
        }
        if (u === 1) {
          Os(t, 0),
            ii(t, n, 0, !0);
          break
        }
        t: {
          switch (o = t,
          f = u,
          f) {
            case 0:
            case 1:
              throw Error(r(345));
            case 4:
              if ((n & 4194048) !== n)
                break;
            case 6:
              ii(o, n, Fe, !In);
              break t;
            case 2:
              be = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(r(329))
          }
          if ((n & 62914560) === n && (u = pc + 300 - an(),
            10 < u)) {
            if (ii(o, n, Fe, !In),
              xr(o, 0, !0) !== 0)
              break t;
            o.timeoutHandle = Cy(Jp.bind(null, o, s, be, uo, mc, n, Fe, Bi, Rs, In, f, 2, -0, 0), u);
            break t
          }
          Jp(o, s, be, uo, mc, n, Fe, Bi, Rs, In, f, 0, -0, 0)
        }
      }
      break
    } while (!0);
    cn(t)
  }
  function Jp(t, n, s, o, u, f, g, x, R, P, F, X, U, B) {
    if (t.timeoutHandle = -1,
      X = n.subtreeFlags,
      (X & 8192 || (X & 16785408) === 16785408) && (Ha = {
        stylesheets: null,
        count: 0,
        unsuspend: sw
      },
        Yp(n),
        X = rw(),
        X !== null)) {
      t.cancelPendingCommit = X(ay.bind(null, t, n, f, s, o, u, g, x, R, F, 1, U, B)),
        ii(t, f, g, !P);
      return
    }
    ay(t, n, f, s, o, u, g, x, R)
  }
  function wT(t) {
    for (var n = t; ;) {
      var s = n.tag;
      if ((s === 0 || s === 11 || s === 15) && n.flags & 16384 && (s = n.updateQueue,
        s !== null && (s = s.stores,
          s !== null)))
        for (var o = 0; o < s.length; o++) {
          var u = s[o]
            , f = u.getSnapshot;
          u = u.value;
          try {
            if (!we(f(), u))
              return !1
          } catch {
            return !1
          }
        }
      if (s = n.child,
        n.subtreeFlags & 16384 && s !== null)
        s.return = n,
          n = s;
      else {
        if (n === t)
          break;
        for (; n.sibling === null;) {
          if (n.return === null || n.return === t)
            return !0;
          n = n.return
        }
        n.sibling.return = n.return,
          n = n.sibling
      }
    }
    return !0
  }
  function ii(t, n, s, o) {
    n &= ~hc,
      n &= ~Bi,
      t.suspendedLanes |= n,
      t.pingedLanes &= ~n,
      o && (t.warmLanes |= n),
      o = t.expirationTimes;
    for (var u = n; 0 < u;) {
      var f = 31 - Te(u)
        , g = 1 << f;
      o[f] = -1,
        u &= ~g
    }
    s !== 0 && uh(t, s, n)
  }
  function co() {
    return (Mt & 6) === 0 ? (za(0),
      !1) : !0
  }
  function bc() {
    if (St !== null) {
      if (Dt === 0)
        var t = St.return;
      else
        t = St,
          wn = _i = null,
          Lu(t),
          Ts = null,
          Aa = 0,
          t = St;
      for (; t !== null;)
        Np(t.alternate, t),
          t = t.return;
      St = null
    }
  }
  function Os(t, n) {
    var s = t.timeoutHandle;
    s !== -1 && (t.timeoutHandle = -1,
      HT(s)),
      s = t.cancelPendingCommit,
      s !== null && (t.cancelPendingCommit = null,
        s()),
      bc(),
      zt = t,
      St = s = xn(t.current, null),
      wt = n,
      Dt = 0,
      Re = null,
      In = !1,
      Cs = $s(t, n),
      dc = !1,
      Rs = Fe = hc = Bi = ti = Ht = 0,
      be = _a = null,
      mc = !1,
      (n & 8) !== 0 && (n |= n & 32);
    var o = t.entangledLanes;
    if (o !== 0)
      for (t = t.entanglements,
        o &= n; 0 < o;) {
        var u = 31 - Te(o)
          , f = 1 << u;
        n |= t[u],
          o &= ~f
      }
    return Nn = n,
      jr(),
      s
  }
  function Ip(t, n) {
    vt = null,
      _.H = $r,
      n === ya || n === Hr ? (n = ym(),
        Dt = 3) : n === hm ? (n = ym(),
          Dt = 4) : Dt = n === gp ? 8 : n !== null && typeof n == "object" && typeof n.then == "function" ? 6 : 1,
      Re = n,
      St === null && (Ht = 1,
        no(t, Pe(n, t.current)))
  }
  function ty() {
    var t = _.H;
    return _.H = $r,
      t === null ? $r : t
  }
  function ey() {
    var t = _.A;
    return _.A = ST,
      t
  }
  function xc() {
    Ht = 4,
      In || (wt & 4194048) !== wt && He.current !== null || (Cs = !0),
      (ti & 134217727) === 0 && (Bi & 134217727) === 0 || zt === null || ii(zt, wt, Fe, !1)
  }
  function Sc(t, n, s) {
    var o = Mt;
    Mt |= 2;
    var u = ty()
      , f = ey();
    (zt !== t || wt !== n) && (uo = null,
      Os(t, n)),
      n = !1;
    var g = Ht;
    t: do
      try {
        if (Dt !== 0 && St !== null) {
          var x = St
            , R = Re;
          switch (Dt) {
            case 8:
              bc(),
                g = 6;
              break t;
            case 3:
            case 2:
            case 9:
            case 6:
              He.current === null && (n = !0);
              var P = Dt;
              if (Dt = 0,
                Re = null,
                Ns(t, x, R, P),
                s && Cs) {
                g = 0;
                break t
              }
              break;
            default:
              P = Dt,
                Dt = 0,
                Re = null,
                Ns(t, x, R, P)
          }
        }
        ET(),
          g = Ht;
        break
      } catch (F) {
        Ip(t, F)
      }
    while (!0);
    return n && t.shellSuspendCounter++,
      wn = _i = null,
      Mt = o,
      _.H = u,
      _.A = f,
      St === null && (zt = null,
        wt = 0,
        jr()),
      g
  }
  function ET() {
    for (; St !== null;)
      ny(St)
  }
  function AT(t, n) {
    var s = Mt;
    Mt |= 2;
    var o = ty()
      , u = ey();
    zt !== t || wt !== n ? (uo = null,
      lo = an() + 500,
      Os(t, n)) : Cs = $s(t, n);
    t: do
      try {
        if (Dt !== 0 && St !== null) {
          n = St;
          var f = Re;
          e: switch (Dt) {
            case 1:
              Dt = 0,
                Re = null,
                Ns(t, n, f, 1);
              break;
            case 2:
            case 9:
              if (mm(f)) {
                Dt = 0,
                  Re = null,
                  iy(n);
                break
              }
              n = function () {
                Dt !== 2 && Dt !== 9 || zt !== t || (Dt = 7),
                  cn(t)
              }
                ,
                f.then(n, n);
              break t;
            case 3:
              Dt = 7;
              break t;
            case 4:
              Dt = 5;
              break t;
            case 7:
              mm(f) ? (Dt = 0,
                Re = null,
                iy(n)) : (Dt = 0,
                  Re = null,
                  Ns(t, n, f, 7));
              break;
            case 5:
              var g = null;
              switch (St.tag) {
                case 26:
                  g = St.memoizedState;
                case 5:
                case 27:
                  var x = St;
                  if (!g || Uy(g)) {
                    Dt = 0,
                      Re = null;
                    var R = x.sibling;
                    if (R !== null)
                      St = R;
                    else {
                      var P = x.return;
                      P !== null ? (St = P,
                        fo(P)) : St = null
                    }
                    break e
                  }
              }
              Dt = 0,
                Re = null,
                Ns(t, n, f, 5);
              break;
            case 6:
              Dt = 0,
                Re = null,
                Ns(t, n, f, 6);
              break;
            case 8:
              bc(),
                Ht = 6;
              break t;
            default:
              throw Error(r(462))
          }
        }
        CT();
        break
      } catch (F) {
        Ip(t, F)
      }
    while (!0);
    return wn = _i = null,
      _.H = o,
      _.A = u,
      Mt = s,
      St !== null ? 0 : (zt = null,
        wt = 0,
        jr(),
        Ht)
  }
  function CT() {
    for (; St !== null && !QS();)
      ny(St)
  }
  function ny(t) {
    var n = Dp(t.alternate, t, Nn);
    t.memoizedProps = t.pendingProps,
      n === null ? fo(t) : St = n
  }
  function iy(t) {
    var n = t
      , s = n.alternate;
    switch (n.tag) {
      case 15:
      case 0:
        n = wp(s, n, n.pendingProps, n.type, void 0, wt);
        break;
      case 11:
        n = wp(s, n, n.pendingProps, n.type.render, n.ref, wt);
        break;
      case 5:
        Lu(n);
      default:
        Np(s, n),
          n = St = sm(n, Nn),
          n = Dp(s, n, Nn)
    }
    t.memoizedProps = t.pendingProps,
      n === null ? fo(t) : St = n
  }
  function Ns(t, n, s, o) {
    wn = _i = null,
      Lu(n),
      Ts = null,
      Aa = 0;
    var u = n.return;
    try {
      if (pT(t, u, n, s, wt)) {
        Ht = 1,
          no(t, Pe(s, t.current)),
          St = null;
        return
      }
    } catch (f) {
      if (u !== null)
        throw St = u,
        f;
      Ht = 1,
        no(t, Pe(s, t.current)),
        St = null;
      return
    }
    n.flags & 32768 ? (At || o === 1 ? t = !0 : Cs || (wt & 536870912) !== 0 ? t = !1 : (In = t = !0,
      (o === 2 || o === 9 || o === 3 || o === 6) && (o = He.current,
        o !== null && o.tag === 13 && (o.flags |= 16384))),
      sy(n, t)) : fo(n)
  }
  function fo(t) {
    var n = t;
    do {
      if ((n.flags & 32768) !== 0) {
        sy(n, In);
        return
      }
      t = n.return;
      var s = gT(n.alternate, n, Nn);
      if (s !== null) {
        St = s;
        return
      }
      if (n = n.sibling,
        n !== null) {
        St = n;
        return
      }
      St = n = t
    } while (n !== null);
    Ht === 0 && (Ht = 5)
  }
  function sy(t, n) {
    do {
      var s = vT(t.alternate, t);
      if (s !== null) {
        s.flags &= 32767,
          St = s;
        return
      }
      if (s = t.return,
        s !== null && (s.flags |= 32768,
          s.subtreeFlags = 0,
          s.deletions = null),
        !n && (t = t.sibling,
          t !== null)) {
        St = t;
        return
      }
      St = t = s
    } while (t !== null);
    Ht = 6,
      St = null
  }
  function ay(t, n, s, o, u, f, g, x, R) {
    t.cancelPendingCommit = null;
    do
      ho();
    while (se !== 0);
    if ((Mt & 6) !== 0)
      throw Error(r(327));
    if (n !== null) {
      if (n === t.current)
        throw Error(r(177));
      if (f = n.lanes | n.childLanes,
        f |= fu,
        s1(t, s, f, g, x, R),
        t === zt && (St = zt = null,
          wt = 0),
        Ms = n,
        ni = t,
        Ds = s,
        yc = f,
        gc = u,
        Zp = o,
        (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? (t.callbackNode = null,
          t.callbackPriority = 0,
          OT(gr, function () {
            return cy(),
              null
          })) : (t.callbackNode = null,
            t.callbackPriority = 0),
        o = (n.flags & 13878) !== 0,
        (n.subtreeFlags & 13878) !== 0 || o) {
        o = _.T,
          _.T = null,
          u = K.p,
          K.p = 2,
          g = Mt,
          Mt |= 4;
        try {
          bT(t, n, s)
        } finally {
          Mt = g,
            K.p = u,
            _.T = o
        }
      }
      se = 1,
        ry(),
        oy(),
        ly()
    }
  }
  function ry() {
    if (se === 1) {
      se = 0;
      var t = ni
        , n = Ms
        , s = (n.flags & 13878) !== 0;
      if ((n.subtreeFlags & 13878) !== 0 || s) {
        s = _.T,
          _.T = null;
        var o = K.p;
        K.p = 2;
        var u = Mt;
        Mt |= 4;
        try {
          Fp(n, t);
          var f = _c
            , g = Qh(t.containerInfo)
            , x = f.focusedElem
            , R = f.selectionRange;
          if (g !== x && x && x.ownerDocument && Kh(x.ownerDocument.documentElement, x)) {
            if (R !== null && ru(x)) {
              var P = R.start
                , F = R.end;
              if (F === void 0 && (F = P),
                "selectionStart" in x)
                x.selectionStart = P,
                  x.selectionEnd = Math.min(F, x.value.length);
              else {
                var X = x.ownerDocument || document
                  , U = X && X.defaultView || window;
                if (U.getSelection) {
                  var B = U.getSelection()
                    , pt = x.textContent.length
                    , dt = Math.min(R.start, pt)
                    , jt = R.end === void 0 ? dt : Math.min(R.end, pt);
                  !B.extend && dt > jt && (g = jt,
                    jt = dt,
                    dt = g);
                  var N = Xh(x, dt)
                    , D = Xh(x, jt);
                  if (N && D && (B.rangeCount !== 1 || B.anchorNode !== N.node || B.anchorOffset !== N.offset || B.focusNode !== D.node || B.focusOffset !== D.offset)) {
                    var z = X.createRange();
                    z.setStart(N.node, N.offset),
                      B.removeAllRanges(),
                      dt > jt ? (B.addRange(z),
                        B.extend(D.node, D.offset)) : (z.setEnd(D.node, D.offset),
                          B.addRange(z))
                  }
                }
              }
            }
            for (X = [],
              B = x; B = B.parentNode;)
              B.nodeType === 1 && X.push({
                element: B,
                left: B.scrollLeft,
                top: B.scrollTop
              });
            for (typeof x.focus == "function" && x.focus(),
              x = 0; x < X.length; x++) {
              var G = X[x];
              G.element.scrollLeft = G.left,
                G.element.scrollTop = G.top
            }
          }
          Ao = !!jc,
            _c = jc = null
        } finally {
          Mt = u,
            K.p = o,
            _.T = s
        }
      }
      t.current = n,
        se = 2
    }
  }
  function oy() {
    if (se === 2) {
      se = 0;
      var t = ni
        , n = Ms
        , s = (n.flags & 8772) !== 0;
      if ((n.subtreeFlags & 8772) !== 0 || s) {
        s = _.T,
          _.T = null;
        var o = K.p;
        K.p = 2;
        var u = Mt;
        Mt |= 4;
        try {
          Up(t, n.alternate, n)
        } finally {
          Mt = u,
            K.p = o,
            _.T = s
        }
      }
      se = 3
    }
  }
  function ly() {
    if (se === 4 || se === 3) {
      se = 0,
        ZS();
      var t = ni
        , n = Ms
        , s = Ds
        , o = Zp;
      (n.subtreeFlags & 10256) !== 0 || (n.flags & 10256) !== 0 ? se = 5 : (se = 0,
        Ms = ni = null,
        uy(t, t.pendingLanes));
      var u = t.pendingLanes;
      if (u === 0 && (ei = null),
        Bl(s),
        n = n.stateNode,
        Se && typeof Se.onCommitFiberRoot == "function")
        try {
          Se.onCommitFiberRoot(Ws, n, void 0, (n.current.flags & 128) === 128)
        } catch { }
      if (o !== null) {
        n = _.T,
          u = K.p,
          K.p = 2,
          _.T = null;
        try {
          for (var f = t.onRecoverableError, g = 0; g < o.length; g++) {
            var x = o[g];
            f(x.value, {
              componentStack: x.stack
            })
          }
        } finally {
          _.T = n,
            K.p = u
        }
      }
      (Ds & 3) !== 0 && ho(),
        cn(t),
        u = t.pendingLanes,
        (s & 4194090) !== 0 && (u & 42) !== 0 ? t === vc ? Va++ : (Va = 0,
          vc = t) : Va = 0,
        za(0)
    }
  }
  function uy(t, n) {
    (t.pooledCacheLanes &= n) === 0 && (n = t.pooledCache,
      n != null && (t.pooledCache = null,
        ma(n)))
  }
  function ho(t) {
    return ry(),
      oy(),
      ly(),
      cy()
  }
  function cy() {
    if (se !== 5)
      return !1;
    var t = ni
      , n = yc;
    yc = 0;
    var s = Bl(Ds)
      , o = _.T
      , u = K.p;
    try {
      K.p = 32 > s ? 32 : s,
        _.T = null,
        s = gc,
        gc = null;
      var f = ni
        , g = Ds;
      if (se = 0,
        Ms = ni = null,
        Ds = 0,
        (Mt & 6) !== 0)
        throw Error(r(331));
      var x = Mt;
      if (Mt |= 4,
        Kp(f.current),
        Gp(f, f.current, g, s),
        Mt = x,
        za(0, !1),
        Se && typeof Se.onPostCommitFiberRoot == "function")
        try {
          Se.onPostCommitFiberRoot(Ws, f)
        } catch { }
      return !0
    } finally {
      K.p = u,
        _.T = o,
        uy(t, n)
    }
  }
  function fy(t, n, s) {
    n = Pe(s, n),
      n = Wu(t.stateNode, n, 2),
      t = Xn(t, n, 2),
      t !== null && (Js(t, 2),
        cn(t))
  }
  function _t(t, n, s) {
    if (t.tag === 3)
      fy(t, t, s);
    else
      for (; n !== null;) {
        if (n.tag === 3) {
          fy(n, t, s);
          break
        } else if (n.tag === 1) {
          var o = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ei === null || !ei.has(o))) {
            t = Pe(s, t),
              s = pp(2),
              o = Xn(n, s, 2),
              o !== null && (yp(s, o, n, t),
                Js(o, 2),
                cn(o));
            break
          }
        }
        n = n.return
      }
  }
  function Tc(t, n, s) {
    var o = t.pingCache;
    if (o === null) {
      o = t.pingCache = new TT;
      var u = new Set;
      o.set(n, u)
    } else
      u = o.get(n),
        u === void 0 && (u = new Set,
          o.set(n, u));
    u.has(s) || (dc = !0,
      u.add(s),
      t = RT.bind(null, t, n, s),
      n.then(t, t))
  }
  function RT(t, n, s) {
    var o = t.pingCache;
    o !== null && o.delete(n),
      t.pingedLanes |= t.suspendedLanes & s,
      t.warmLanes &= ~s,
      zt === t && (wt & s) === s && (Ht === 4 || Ht === 3 && (wt & 62914560) === wt && 300 > an() - pc ? (Mt & 2) === 0 && Os(t, 0) : hc |= s,
        Rs === wt && (Rs = 0)),
      cn(t)
  }
  function dy(t, n) {
    n === 0 && (n = lh()),
      t = ds(t, n),
      t !== null && (Js(t, n),
        cn(t))
  }
  function MT(t) {
    var n = t.memoizedState
      , s = 0;
    n !== null && (s = n.retryLane),
      dy(t, s)
  }
  function DT(t, n) {
    var s = 0;
    switch (t.tag) {
      case 13:
        var o = t.stateNode
          , u = t.memoizedState;
        u !== null && (s = u.retryLane);
        break;
      case 19:
        o = t.stateNode;
        break;
      case 22:
        o = t.stateNode._retryCache;
        break;
      default:
        throw Error(r(314))
    }
    o !== null && o.delete(n),
      dy(t, s)
  }
  function OT(t, n) {
    return Ve(t, n)
  }
  var mo = null
    , js = null
    , wc = !1
    , po = !1
    , Ec = !1
    , ki = 0;
  function cn(t) {
    t !== js && t.next === null && (js === null ? mo = js = t : js = js.next = t),
      po = !0,
      wc || (wc = !0,
        jT())
  }
  function za(t, n) {
    if (!Ec && po) {
      Ec = !0;
      do
        for (var s = !1, o = mo; o !== null;) {
          if (t !== 0) {
            var u = o.pendingLanes;
            if (u === 0)
              var f = 0;
            else {
              var g = o.suspendedLanes
                , x = o.pingedLanes;
              f = (1 << 31 - Te(42 | t) + 1) - 1,
                f &= u & ~(g & ~x),
                f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0
            }
            f !== 0 && (s = !0,
              yy(o, f))
          } else
            f = wt,
              f = xr(o, o === zt ? f : 0, o.cancelPendingCommit !== null || o.timeoutHandle !== -1),
              (f & 3) === 0 || $s(o, f) || (s = !0,
                yy(o, f));
          o = o.next
        }
      while (s);
      Ec = !1
    }
  }
  function NT() {
    hy()
  }
  function hy() {
    po = wc = !1;
    var t = 0;
    ki !== 0 && (kT() && (t = ki),
      ki = 0);
    for (var n = an(), s = null, o = mo; o !== null;) {
      var u = o.next
        , f = my(o, n);
      f === 0 ? (o.next = null,
        s === null ? mo = u : s.next = u,
        u === null && (js = s)) : (s = o,
          (t !== 0 || (f & 3) !== 0) && (po = !0)),
        o = u
    }
    za(t)
  }
  function my(t, n) {
    for (var s = t.suspendedLanes, o = t.pingedLanes, u = t.expirationTimes, f = t.pendingLanes & -62914561; 0 < f;) {
      var g = 31 - Te(f)
        , x = 1 << g
        , R = u[g];
      R === -1 ? ((x & s) === 0 || (x & o) !== 0) && (u[g] = i1(x, n)) : R <= n && (t.expiredLanes |= x),
        f &= ~x
    }
    if (n = zt,
      s = wt,
      s = xr(t, t === n ? s : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      o = t.callbackNode,
      s === 0 || t === n && (Dt === 2 || Dt === 9) || t.cancelPendingCommit !== null)
      return o !== null && o !== null && Bn(o),
        t.callbackNode = null,
        t.callbackPriority = 0;
    if ((s & 3) === 0 || $s(t, s)) {
      if (n = s & -s,
        n === t.callbackPriority)
        return n;
      switch (o !== null && Bn(o),
      Bl(s)) {
        case 2:
        case 8:
          s = ah;
          break;
        case 32:
          s = gr;
          break;
        case 268435456:
          s = rh;
          break;
        default:
          s = gr
      }
      return o = py.bind(null, t),
        s = Ve(s, o),
        t.callbackPriority = n,
        t.callbackNode = s,
        n
    }
    return o !== null && o !== null && Bn(o),
      t.callbackPriority = 2,
      t.callbackNode = null,
      2
  }
  function py(t, n) {
    if (se !== 0 && se !== 5)
      return t.callbackNode = null,
        t.callbackPriority = 0,
        null;
    var s = t.callbackNode;
    if (ho() && t.callbackNode !== s)
      return null;
    var o = wt;
    return o = xr(t, t === zt ? o : 0, t.cancelPendingCommit !== null || t.timeoutHandle !== -1),
      o === 0 ? null : ($p(t, o, n),
        my(t, an()),
        t.callbackNode != null && t.callbackNode === s ? py.bind(null, t) : null)
  }
  function yy(t, n) {
    if (ho())
      return null;
    $p(t, n, !0)
  }
  function jT() {
    FT(function () {
      (Mt & 6) !== 0 ? Ve(sh, NT) : hy()
    })
  }
  function Ac() {
    return ki === 0 && (ki = oh()),
      ki
  }
  function gy(t) {
    return t == null || typeof t == "symbol" || typeof t == "boolean" ? null : typeof t == "function" ? t : Ar("" + t)
  }
  function vy(t, n) {
    var s = n.ownerDocument.createElement("input");
    return s.name = n.name,
      s.value = n.value,
      t.id && s.setAttribute("form", t.id),
      n.parentNode.insertBefore(s, n),
      t = new FormData(t),
      s.parentNode.removeChild(s),
      t
  }
  function _T(t, n, s, o, u) {
    if (n === "submit" && s && s.stateNode === u) {
      var f = gy((u[pe] || null).action)
        , g = o.submitter;
      g && (n = (n = g[pe] || null) ? gy(n.formAction) : g.getAttribute("formAction"),
        n !== null && (f = n,
          g = null));
      var x = new Dr("action", "action", null, o, u);
      t.push({
        event: x,
        listeners: [{
          instance: null,
          listener: function () {
            if (o.defaultPrevented) {
              if (ki !== 0) {
                var R = g ? vy(u, g) : new FormData(u);
                Yu(s, {
                  pending: !0,
                  data: R,
                  method: u.method,
                  action: f
                }, null, R)
              }
            } else
              typeof f == "function" && (x.preventDefault(),
                R = g ? vy(u, g) : new FormData(u),
                Yu(s, {
                  pending: !0,
                  data: R,
                  method: u.method,
                  action: f
                }, f, R))
          },
          currentTarget: u
        }]
      })
    }
  }
  for (var Cc = 0; Cc < cu.length; Cc++) {
    var Rc = cu[Cc]
      , VT = Rc.toLowerCase()
      , zT = Rc[0].toUpperCase() + Rc.slice(1);
    Ke(VT, "on" + zT)
  }
  Ke($h, "onAnimationEnd"),
    Ke(Jh, "onAnimationIteration"),
    Ke(Ih, "onAnimationStart"),
    Ke("dblclick", "onDoubleClick"),
    Ke("focusin", "onFocus"),
    Ke("focusout", "onBlur"),
    Ke(J1, "onTransitionRun"),
    Ke(I1, "onTransitionStart"),
    Ke(tT, "onTransitionCancel"),
    Ke(tm, "onTransitionEnd"),
    ns("onMouseEnter", ["mouseout", "mouseover"]),
    ns("onMouseLeave", ["mouseout", "mouseover"]),
    ns("onPointerEnter", ["pointerout", "pointerover"]),
    ns("onPointerLeave", ["pointerout", "pointerover"]),
    Ei("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")),
    Ei("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),
    Ei("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ei("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")),
    Ei("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")),
    Ei("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var La = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
    , LT = new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(La));
  function by(t, n) {
    n = (n & 4) !== 0;
    for (var s = 0; s < t.length; s++) {
      var o = t[s]
        , u = o.event;
      o = o.listeners;
      t: {
        var f = void 0;
        if (n)
          for (var g = o.length - 1; 0 <= g; g--) {
            var x = o[g]
              , R = x.instance
              , P = x.currentTarget;
            if (x = x.listener,
              R !== f && u.isPropagationStopped())
              break t;
            f = x,
              u.currentTarget = P;
            try {
              f(u)
            } catch (F) {
              eo(F)
            }
            u.currentTarget = null,
              f = R
          }
        else
          for (g = 0; g < o.length; g++) {
            if (x = o[g],
              R = x.instance,
              P = x.currentTarget,
              x = x.listener,
              R !== f && u.isPropagationStopped())
              break t;
            f = x,
              u.currentTarget = P;
            try {
              f(u)
            } catch (F) {
              eo(F)
            }
            u.currentTarget = null,
              f = R
          }
      }
    }
  }
  function Tt(t, n) {
    var s = n[kl];
    s === void 0 && (s = n[kl] = new Set);
    var o = t + "__bubble";
    s.has(o) || (xy(n, t, 2, !1),
      s.add(o))
  }
  function Mc(t, n, s) {
    var o = 0;
    n && (o |= 4),
      xy(s, t, o, n)
  }
  var yo = "_reactListening" + Math.random().toString(36).slice(2);
  function Dc(t) {
    if (!t[yo]) {
      t[yo] = !0,
        hh.forEach(function (s) {
          s !== "selectionchange" && (LT.has(s) || Mc(s, !1, t),
            Mc(s, !0, t))
        });
      var n = t.nodeType === 9 ? t : t.ownerDocument;
      n === null || n[yo] || (n[yo] = !0,
        Mc("selectionchange", !1, n))
    }
  }
  function xy(t, n, s, o) {
    switch (Gy(n)) {
      case 2:
        var u = uw;
        break;
      case 8:
        u = cw;
        break;
      default:
        u = qc
    }
    s = u.bind(null, n, s, t),
      u = void 0,
      !$l || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (u = !0),
      o ? u !== void 0 ? t.addEventListener(n, s, {
        capture: !0,
        passive: u
      }) : t.addEventListener(n, s, !0) : u !== void 0 ? t.addEventListener(n, s, {
        passive: u
      }) : t.addEventListener(n, s, !1)
  }
  function Oc(t, n, s, o, u) {
    var f = o;
    if ((n & 1) === 0 && (n & 2) === 0 && o !== null)
      t: for (; ;) {
        if (o === null)
          return;
        var g = o.tag;
        if (g === 3 || g === 4) {
          var x = o.stateNode.containerInfo;
          if (x === u)
            break;
          if (g === 4)
            for (g = o.return; g !== null;) {
              var R = g.tag;
              if ((R === 3 || R === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return
            }
          for (; x !== null;) {
            if (g = Ii(x),
              g === null)
              return;
            if (R = g.tag,
              R === 5 || R === 6 || R === 26 || R === 27) {
              o = f = g;
              continue t
            }
            x = x.parentNode
          }
        }
        o = o.return
      }
    Rh(function () {
      var P = f
        , F = Zl(s)
        , X = [];
      t: {
        var U = em.get(t);
        if (U !== void 0) {
          var B = Dr
            , pt = t;
          switch (t) {
            case "keypress":
              if (Rr(s) === 0)
                break t;
            case "keydown":
            case "keyup":
              B = O1;
              break;
            case "focusin":
              pt = "focus",
                B = eu;
              break;
            case "focusout":
              pt = "blur",
                B = eu;
              break;
            case "beforeblur":
            case "afterblur":
              B = eu;
              break;
            case "click":
              if (s.button === 2)
                break t;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              B = Oh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              B = v1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              B = _1;
              break;
            case $h:
            case Jh:
            case Ih:
              B = S1;
              break;
            case tm:
              B = z1;
              break;
            case "scroll":
            case "scrollend":
              B = y1;
              break;
            case "wheel":
              B = P1;
              break;
            case "copy":
            case "cut":
            case "paste":
              B = w1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              B = jh;
              break;
            case "toggle":
            case "beforetoggle":
              B = B1
          }
          var dt = (n & 4) !== 0
            , jt = !dt && (t === "scroll" || t === "scrollend")
            , N = dt ? U !== null ? U + "Capture" : null : U;
          dt = [];
          for (var D = P, z; D !== null;) {
            var G = D;
            if (z = G.stateNode,
              G = G.tag,
              G !== 5 && G !== 26 && G !== 27 || z === null || N === null || (G = ea(D, N),
                G != null && dt.push(Pa(D, G, z))),
              jt)
              break;
            D = D.return
          }
          0 < dt.length && (U = new B(U, pt, null, s, F),
            X.push({
              event: U,
              listeners: dt
            }))
        }
      }
      if ((n & 7) === 0) {
        t: {
          if (U = t === "mouseover" || t === "pointerover",
            B = t === "mouseout" || t === "pointerout",
            U && s !== Ql && (pt = s.relatedTarget || s.fromElement) && (Ii(pt) || pt[Ji]))
            break t;
          if ((B || U) && (U = F.window === F ? F : (U = F.ownerDocument) ? U.defaultView || U.parentWindow : window,
            B ? (pt = s.relatedTarget || s.toElement,
              B = P,
              pt = pt ? Ii(pt) : null,
              pt !== null && (jt = c(pt),
                dt = pt.tag,
                pt !== jt || dt !== 5 && dt !== 27 && dt !== 6) && (pt = null)) : (B = null,
                  pt = P),
            B !== pt)) {
            if (dt = Oh,
              G = "onMouseLeave",
              N = "onMouseEnter",
              D = "mouse",
              (t === "pointerout" || t === "pointerover") && (dt = jh,
                G = "onPointerLeave",
                N = "onPointerEnter",
                D = "pointer"),
              jt = B == null ? U : ta(B),
              z = pt == null ? U : ta(pt),
              U = new dt(G, D + "leave", B, s, F),
              U.target = jt,
              U.relatedTarget = z,
              G = null,
              Ii(F) === P && (dt = new dt(N, D + "enter", pt, s, F),
                dt.target = z,
                dt.relatedTarget = jt,
                G = dt),
              jt = G,
              B && pt)
              e: {
                for (dt = B,
                  N = pt,
                  D = 0,
                  z = dt; z; z = _s(z))
                  D++;
                for (z = 0,
                  G = N; G; G = _s(G))
                  z++;
                for (; 0 < D - z;)
                  dt = _s(dt),
                    D--;
                for (; 0 < z - D;)
                  N = _s(N),
                    z--;
                for (; D--;) {
                  if (dt === N || N !== null && dt === N.alternate)
                    break e;
                  dt = _s(dt),
                    N = _s(N)
                }
                dt = null
              }
            else
              dt = null;
            B !== null && Sy(X, U, B, dt, !1),
              pt !== null && jt !== null && Sy(X, jt, pt, dt, !0)
          }
        }
        t: {
          if (U = P ? ta(P) : window,
            B = U.nodeName && U.nodeName.toLowerCase(),
            B === "select" || B === "input" && U.type === "file")
            var nt = kh;
          else if (Uh(U))
            if (Hh)
              nt = Z1;
            else {
              nt = K1;
              var xt = X1
            }
          else
            B = U.nodeName,
              !B || B.toLowerCase() !== "input" || U.type !== "checkbox" && U.type !== "radio" ? P && Kl(P.elementType) && (nt = kh) : nt = Q1;
          if (nt && (nt = nt(t, P))) {
            Bh(X, nt, s, F);
            break t
          }
          xt && xt(t, U, P),
            t === "focusout" && P && U.type === "number" && P.memoizedProps.value != null && Xl(U, "number", U.value)
        }
        switch (xt = P ? ta(P) : window,
        t) {
          case "focusin":
            (Uh(xt) || xt.contentEditable === "true") && (us = xt,
              ou = P,
              ua = null);
            break;
          case "focusout":
            ua = ou = us = null;
            break;
          case "mousedown":
            lu = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            lu = !1,
              Zh(X, s, F);
            break;
          case "selectionchange":
            if ($1)
              break;
          case "keydown":
          case "keyup":
            Zh(X, s, F)
        }
        var ft;
        if (iu)
          t: {
            switch (t) {
              case "compositionstart":
                var mt = "onCompositionStart";
                break t;
              case "compositionend":
                mt = "onCompositionEnd";
                break t;
              case "compositionupdate":
                mt = "onCompositionUpdate";
                break t
            }
            mt = void 0
          }
        else
          ls ? Lh(t, s) && (mt = "onCompositionEnd") : t === "keydown" && s.keyCode === 229 && (mt = "onCompositionStart");
        mt && (_h && s.locale !== "ko" && (ls || mt !== "onCompositionStart" ? mt === "onCompositionEnd" && ls && (ft = Mh()) : (Fn = F,
          Jl = "value" in Fn ? Fn.value : Fn.textContent,
          ls = !0)),
          xt = go(P, mt),
          0 < xt.length && (mt = new Nh(mt, t, null, s, F),
            X.push({
              event: mt,
              listeners: xt
            }),
            ft ? mt.data = ft : (ft = Ph(s),
              ft !== null && (mt.data = ft)))),
          (ft = H1 ? F1(t, s) : q1(t, s)) && (mt = go(P, "onBeforeInput"),
            0 < mt.length && (xt = new Nh("onBeforeInput", "beforeinput", null, s, F),
              X.push({
                event: xt,
                listeners: mt
              }),
              xt.data = ft)),
          _T(X, t, P, s, F)
      }
      by(X, n)
    })
  }
  function Pa(t, n, s) {
    return {
      instance: t,
      listener: n,
      currentTarget: s
    }
  }
  function go(t, n) {
    for (var s = n + "Capture", o = []; t !== null;) {
      var u = t
        , f = u.stateNode;
      if (u = u.tag,
        u !== 5 && u !== 26 && u !== 27 || f === null || (u = ea(t, s),
          u != null && o.unshift(Pa(t, u, f)),
          u = ea(t, n),
          u != null && o.push(Pa(t, u, f))),
        t.tag === 3)
        return o;
      t = t.return
    }
    return []
  }
  function _s(t) {
    if (t === null)
      return null;
    do
      t = t.return;
    while (t && t.tag !== 5 && t.tag !== 27);
    return t || null
  }
  function Sy(t, n, s, o, u) {
    for (var f = n._reactName, g = []; s !== null && s !== o;) {
      var x = s
        , R = x.alternate
        , P = x.stateNode;
      if (x = x.tag,
        R !== null && R === o)
        break;
      x !== 5 && x !== 26 && x !== 27 || P === null || (R = P,
        u ? (P = ea(s, f),
          P != null && g.unshift(Pa(s, P, R))) : u || (P = ea(s, f),
            P != null && g.push(Pa(s, P, R)))),
        s = s.return
    }
    g.length !== 0 && t.push({
      event: n,
      listeners: g
    })
  }
  var PT = /\r\n?/g
    , UT = /\u0000|\uFFFD/g;
  function Ty(t) {
    return (typeof t == "string" ? t : "" + t).replace(PT, `
`).replace(UT, "")
  }
  function wy(t, n) {
    return n = Ty(n),
      Ty(t) === n
  }
  function vo() { }
  function Nt(t, n, s, o, u, f) {
    switch (s) {
      case "children":
        typeof o == "string" ? n === "body" || n === "textarea" && o === "" || as(t, o) : (typeof o == "number" || typeof o == "bigint") && n !== "body" && as(t, "" + o);
        break;
      case "className":
        Tr(t, "class", o);
        break;
      case "tabIndex":
        Tr(t, "tabindex", o);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        Tr(t, s, o);
        break;
      case "style":
        Ah(t, o, f);
        break;
      case "data":
        if (n !== "object") {
          Tr(t, "data", o);
          break
        }
      case "src":
      case "href":
        if (o === "" && (n !== "a" || s !== "href")) {
          t.removeAttribute(s);
          break
        }
        if (o == null || typeof o == "function" || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(s);
          break
        }
        o = Ar("" + o),
          t.setAttribute(s, o);
        break;
      case "action":
      case "formAction":
        if (typeof o == "function") {
          t.setAttribute(s, "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");
          break
        } else
          typeof f == "function" && (s === "formAction" ? (n !== "input" && Nt(t, n, "name", u.name, u, null),
            Nt(t, n, "formEncType", u.formEncType, u, null),
            Nt(t, n, "formMethod", u.formMethod, u, null),
            Nt(t, n, "formTarget", u.formTarget, u, null)) : (Nt(t, n, "encType", u.encType, u, null),
              Nt(t, n, "method", u.method, u, null),
              Nt(t, n, "target", u.target, u, null)));
        if (o == null || typeof o == "symbol" || typeof o == "boolean") {
          t.removeAttribute(s);
          break
        }
        o = Ar("" + o),
          t.setAttribute(s, o);
        break;
      case "onClick":
        o != null && (t.onclick = vo);
        break;
      case "onScroll":
        o != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Tt("scrollend", t);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(r(61));
          if (s = o.__html,
            s != null) {
            if (u.children != null)
              throw Error(r(60));
            t.innerHTML = s
          }
        }
        break;
      case "multiple":
        t.multiple = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "muted":
        t.muted = o && typeof o != "function" && typeof o != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (o == null || typeof o == "function" || typeof o == "boolean" || typeof o == "symbol") {
          t.removeAttribute("xlink:href");
          break
        }
        s = Ar("" + o),
          t.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", s);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, "" + o) : t.removeAttribute(s);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        o && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, "") : t.removeAttribute(s);
        break;
      case "capture":
      case "download":
        o === !0 ? t.setAttribute(s, "") : o !== !1 && o != null && typeof o != "function" && typeof o != "symbol" ? t.setAttribute(s, o) : t.removeAttribute(s);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        o != null && typeof o != "function" && typeof o != "symbol" && !isNaN(o) && 1 <= o ? t.setAttribute(s, o) : t.removeAttribute(s);
        break;
      case "rowSpan":
      case "start":
        o == null || typeof o == "function" || typeof o == "symbol" || isNaN(o) ? t.removeAttribute(s) : t.setAttribute(s, o);
        break;
      case "popover":
        Tt("beforetoggle", t),
          Tt("toggle", t),
          Sr(t, "popover", o);
        break;
      case "xlinkActuate":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:actuate", o);
        break;
      case "xlinkArcrole":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:arcrole", o);
        break;
      case "xlinkRole":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:role", o);
        break;
      case "xlinkShow":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:show", o);
        break;
      case "xlinkTitle":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:title", o);
        break;
      case "xlinkType":
        vn(t, "http://www.w3.org/1999/xlink", "xlink:type", o);
        break;
      case "xmlBase":
        vn(t, "http://www.w3.org/XML/1998/namespace", "xml:base", o);
        break;
      case "xmlLang":
        vn(t, "http://www.w3.org/XML/1998/namespace", "xml:lang", o);
        break;
      case "xmlSpace":
        vn(t, "http://www.w3.org/XML/1998/namespace", "xml:space", o);
        break;
      case "is":
        Sr(t, "is", o);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < s.length) || s[0] !== "o" && s[0] !== "O" || s[1] !== "n" && s[1] !== "N") && (s = m1.get(s) || s,
          Sr(t, s, o))
    }
  }
  function Nc(t, n, s, o, u, f) {
    switch (s) {
      case "style":
        Ah(t, o, f);
        break;
      case "dangerouslySetInnerHTML":
        if (o != null) {
          if (typeof o != "object" || !("__html" in o))
            throw Error(r(61));
          if (s = o.__html,
            s != null) {
            if (u.children != null)
              throw Error(r(60));
            t.innerHTML = s
          }
        }
        break;
      case "children":
        typeof o == "string" ? as(t, o) : (typeof o == "number" || typeof o == "bigint") && as(t, "" + o);
        break;
      case "onScroll":
        o != null && Tt("scroll", t);
        break;
      case "onScrollEnd":
        o != null && Tt("scrollend", t);
        break;
      case "onClick":
        o != null && (t.onclick = vo);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!mh.hasOwnProperty(s))
          t: {
            if (s[0] === "o" && s[1] === "n" && (u = s.endsWith("Capture"),
              n = s.slice(2, u ? s.length - 7 : void 0),
              f = t[pe] || null,
              f = f != null ? f[s] : null,
              typeof f == "function" && t.removeEventListener(n, f, u),
              typeof o == "function")) {
              typeof f != "function" && f !== null && (s in t ? t[s] = null : t.hasAttribute(s) && t.removeAttribute(s)),
                t.addEventListener(n, o, u);
              break t
            }
            s in t ? t[s] = o : o === !0 ? t.setAttribute(s, "") : Sr(t, s, o)
          }
    }
  }
  function ae(t, n, s) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Tt("error", t),
          Tt("load", t);
        var o = !1, u = !1, f;
        for (f in s)
          if (s.hasOwnProperty(f)) {
            var g = s[f];
            if (g != null)
              switch (f) {
                case "src":
                  o = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(r(137, n));
                default:
                  Nt(t, n, f, g, s, null)
              }
          }
        u && Nt(t, n, "srcSet", s.srcSet, s, null),
          o && Nt(t, n, "src", s.src, s, null);
        return;
      case "input":
        Tt("invalid", t);
        var x = f = g = u = null
          , R = null
          , P = null;
        for (o in s)
          if (s.hasOwnProperty(o)) {
            var F = s[o];
            if (F != null)
              switch (o) {
                case "name":
                  u = F;
                  break;
                case "type":
                  g = F;
                  break;
                case "checked":
                  R = F;
                  break;
                case "defaultChecked":
                  P = F;
                  break;
                case "value":
                  f = F;
                  break;
                case "defaultValue":
                  x = F;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (F != null)
                    throw Error(r(137, n));
                  break;
                default:
                  Nt(t, n, o, F, s, null)
              }
          }
        Sh(t, f, x, R, P, g, u, !1),
          wr(t);
        return;
      case "select":
        Tt("invalid", t),
          o = g = f = null;
        for (u in s)
          if (s.hasOwnProperty(u) && (x = s[u],
            x != null))
            switch (u) {
              case "value":
                f = x;
                break;
              case "defaultValue":
                g = x;
                break;
              case "multiple":
                o = x;
              default:
                Nt(t, n, u, x, s, null)
            }
        n = f,
          s = g,
          t.multiple = !!o,
          n != null ? ss(t, !!o, n, !1) : s != null && ss(t, !!o, s, !0);
        return;
      case "textarea":
        Tt("invalid", t),
          f = u = o = null;
        for (g in s)
          if (s.hasOwnProperty(g) && (x = s[g],
            x != null))
            switch (g) {
              case "value":
                o = x;
                break;
              case "defaultValue":
                u = x;
                break;
              case "children":
                f = x;
                break;
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(r(91));
                break;
              default:
                Nt(t, n, g, x, s, null)
            }
        wh(t, o, u, f),
          wr(t);
        return;
      case "option":
        for (R in s)
          s.hasOwnProperty(R) && (o = s[R],
            o != null) && (R === "selected" ? t.selected = o && typeof o != "function" && typeof o != "symbol" : Nt(t, n, R, o, s, null));
        return;
      case "dialog":
        Tt("beforetoggle", t),
          Tt("toggle", t),
          Tt("cancel", t),
          Tt("close", t);
        break;
      case "iframe":
      case "object":
        Tt("load", t);
        break;
      case "video":
      case "audio":
        for (o = 0; o < La.length; o++)
          Tt(La[o], t);
        break;
      case "image":
        Tt("error", t),
          Tt("load", t);
        break;
      case "details":
        Tt("toggle", t);
        break;
      case "embed":
      case "source":
      case "link":
        Tt("error", t),
          Tt("load", t);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (P in s)
          if (s.hasOwnProperty(P) && (o = s[P],
            o != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(r(137, n));
              default:
                Nt(t, n, P, o, s, null)
            }
        return;
      default:
        if (Kl(n)) {
          for (F in s)
            s.hasOwnProperty(F) && (o = s[F],
              o !== void 0 && Nc(t, n, F, o, s, void 0));
          return
        }
    }
    for (x in s)
      s.hasOwnProperty(x) && (o = s[x],
        o != null && Nt(t, n, x, o, s, null))
  }
  function BT(t, n, s, o) {
    switch (n) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null
          , f = null
          , g = null
          , x = null
          , R = null
          , P = null
          , F = null;
        for (B in s) {
          var X = s[B];
          if (s.hasOwnProperty(B) && X != null)
            switch (B) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = X;
              default:
                o.hasOwnProperty(B) || Nt(t, n, B, null, o, X)
            }
        }
        for (var U in o) {
          var B = o[U];
          if (X = s[U],
            o.hasOwnProperty(U) && (B != null || X != null))
            switch (U) {
              case "type":
                f = B;
                break;
              case "name":
                u = B;
                break;
              case "checked":
                P = B;
                break;
              case "defaultChecked":
                F = B;
                break;
              case "value":
                g = B;
                break;
              case "defaultValue":
                x = B;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (B != null)
                  throw Error(r(137, n));
                break;
              default:
                B !== X && Nt(t, n, U, B, o, X)
            }
        }
        Yl(t, g, x, R, P, F, f, u);
        return;
      case "select":
        B = g = x = U = null;
        for (f in s)
          if (R = s[f],
            s.hasOwnProperty(f) && R != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                B = R;
              default:
                o.hasOwnProperty(f) || Nt(t, n, f, null, o, R)
            }
        for (u in o)
          if (f = o[u],
            R = s[u],
            o.hasOwnProperty(u) && (f != null || R != null))
            switch (u) {
              case "value":
                U = f;
                break;
              case "defaultValue":
                x = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== R && Nt(t, n, u, f, o, R)
            }
        n = x,
          s = g,
          o = B,
          U != null ? ss(t, !!s, U, !1) : !!o != !!s && (n != null ? ss(t, !!s, n, !0) : ss(t, !!s, s ? [] : "", !1));
        return;
      case "textarea":
        B = U = null;
        for (x in s)
          if (u = s[x],
            s.hasOwnProperty(x) && u != null && !o.hasOwnProperty(x))
            switch (x) {
              case "value":
                break;
              case "children":
                break;
              default:
                Nt(t, n, x, null, o, u)
            }
        for (g in o)
          if (u = o[g],
            f = s[g],
            o.hasOwnProperty(g) && (u != null || f != null))
            switch (g) {
              case "value":
                U = u;
                break;
              case "defaultValue":
                B = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null)
                  throw Error(r(91));
                break;
              default:
                u !== f && Nt(t, n, g, u, o, f)
            }
        Th(t, U, B);
        return;
      case "option":
        for (var pt in s)
          U = s[pt],
            s.hasOwnProperty(pt) && U != null && !o.hasOwnProperty(pt) && (pt === "selected" ? t.selected = !1 : Nt(t, n, pt, null, o, U));
        for (R in o)
          U = o[R],
            B = s[R],
            o.hasOwnProperty(R) && U !== B && (U != null || B != null) && (R === "selected" ? t.selected = U && typeof U != "function" && typeof U != "symbol" : Nt(t, n, R, U, o, B));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var dt in s)
          U = s[dt],
            s.hasOwnProperty(dt) && U != null && !o.hasOwnProperty(dt) && Nt(t, n, dt, null, o, U);
        for (P in o)
          if (U = o[P],
            B = s[P],
            o.hasOwnProperty(P) && U !== B && (U != null || B != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(r(137, n));
                break;
              default:
                Nt(t, n, P, U, o, B)
            }
        return;
      default:
        if (Kl(n)) {
          for (var jt in s)
            U = s[jt],
              s.hasOwnProperty(jt) && U !== void 0 && !o.hasOwnProperty(jt) && Nc(t, n, jt, void 0, o, U);
          for (F in o)
            U = o[F],
              B = s[F],
              !o.hasOwnProperty(F) || U === B || U === void 0 && B === void 0 || Nc(t, n, F, U, o, B);
          return
        }
    }
    for (var N in s)
      U = s[N],
        s.hasOwnProperty(N) && U != null && !o.hasOwnProperty(N) && Nt(t, n, N, null, o, U);
    for (X in o)
      U = o[X],
        B = s[X],
        !o.hasOwnProperty(X) || U === B || U == null && B == null || Nt(t, n, X, U, o, B)
  }
  var jc = null
    , _c = null;
  function bo(t) {
    return t.nodeType === 9 ? t : t.ownerDocument
  }
  function Ey(t) {
    switch (t) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0
    }
  }
  function Ay(t, n) {
    if (t === 0)
      switch (n) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0
      }
    return t === 1 && n === "foreignObject" ? 0 : t
  }
  function Vc(t, n) {
    return t === "textarea" || t === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.children == "bigint" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null
  }
  var zc = null;
  function kT() {
    var t = window.event;
    return t && t.type === "popstate" ? t === zc ? !1 : (zc = t,
      !0) : (zc = null,
        !1)
  }
  var Cy = typeof setTimeout == "function" ? setTimeout : void 0
    , HT = typeof clearTimeout == "function" ? clearTimeout : void 0
    , Ry = typeof Promise == "function" ? Promise : void 0
    , FT = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ry < "u" ? function (t) {
      return Ry.resolve(null).then(t).catch(qT)
    }
      : Cy;
  function qT(t) {
    setTimeout(function () {
      throw t
    })
  }
  function si(t) {
    return t === "head"
  }
  function My(t, n) {
    var s = n
      , o = 0
      , u = 0;
    do {
      var f = s.nextSibling;
      if (t.removeChild(s),
        f && f.nodeType === 8)
        if (s = f.data,
          s === "/$") {
          if (0 < o && 8 > o) {
            s = o;
            var g = t.ownerDocument;
            if (s & 1 && Ua(g.documentElement),
              s & 2 && Ua(g.body),
              s & 4)
              for (s = g.head,
                Ua(s),
                g = s.firstChild; g;) {
                var x = g.nextSibling
                  , R = g.nodeName;
                g[Is] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && g.rel.toLowerCase() === "stylesheet" || s.removeChild(g),
                  g = x
              }
          }
          if (u === 0) {
            t.removeChild(f),
              Xa(n);
            return
          }
          u--
        } else
          s === "$" || s === "$?" || s === "$!" ? u++ : o = s.charCodeAt(0) - 48;
      else
        o = 0;
      s = f
    } while (s);
    Xa(n)
  }
  function Lc(t) {
    var n = t.firstChild;
    for (n && n.nodeType === 10 && (n = n.nextSibling); n;) {
      var s = n;
      switch (n = n.nextSibling,
      s.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Lc(s),
            Hl(s);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (s.rel.toLowerCase() === "stylesheet")
            continue
      }
      t.removeChild(s)
    }
  }
  function GT(t, n, s, o) {
    for (; t.nodeType === 1;) {
      var u = s;
      if (t.nodeName.toLowerCase() !== n.toLowerCase()) {
        if (!o && (t.nodeName !== "INPUT" || t.type !== "hidden"))
          break
      } else if (o) {
        if (!t[Is])
          switch (n) {
            case "meta":
              if (!t.hasAttribute("itemprop"))
                break;
              return t;
            case "link":
              if (f = t.getAttribute("rel"),
                f === "stylesheet" && t.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || t.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || t.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return t;
            case "style":
              if (t.hasAttribute("data-precedence"))
                break;
              return t;
            case "script":
              if (f = t.getAttribute("src"),
                (f !== (u.src == null ? null : u.src) || t.getAttribute("type") !== (u.type == null ? null : u.type) || t.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && t.hasAttribute("async") && !t.hasAttribute("itemprop"))
                break;
              return t;
            default:
              return t
          }
      } else if (n === "input" && t.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && t.getAttribute("name") === f)
          return t
      } else
        return t;
      if (t = Ze(t.nextSibling),
        t === null)
        break
    }
    return null
  }
  function YT(t, n, s) {
    if (n === "")
      return null;
    for (; t.nodeType !== 3;)
      if ((t.nodeType !== 1 || t.nodeName !== "INPUT" || t.type !== "hidden") && !s || (t = Ze(t.nextSibling),
        t === null))
        return null;
    return t
  }
  function Pc(t) {
    return t.data === "$!" || t.data === "$?" && t.ownerDocument.readyState === "complete"
  }
  function XT(t, n) {
    var s = t.ownerDocument;
    if (t.data !== "$?" || s.readyState === "complete")
      n();
    else {
      var o = function () {
        n(),
          s.removeEventListener("DOMContentLoaded", o)
      };
      s.addEventListener("DOMContentLoaded", o),
        t._reactRetry = o
    }
  }
  function Ze(t) {
    for (; t != null; t = t.nextSibling) {
      var n = t.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = t.data,
          n === "$" || n === "$!" || n === "$?" || n === "F!" || n === "F")
          break;
        if (n === "/$")
          return null
      }
    }
    return t
  }
  var Uc = null;
  function Dy(t) {
    t = t.previousSibling;
    for (var n = 0; t;) {
      if (t.nodeType === 8) {
        var s = t.data;
        if (s === "$" || s === "$!" || s === "$?") {
          if (n === 0)
            return t;
          n--
        } else
          s === "/$" && n++
      }
      t = t.previousSibling
    }
    return null
  }
  function Oy(t, n, s) {
    switch (n = bo(s),
    t) {
      case "html":
        if (t = n.documentElement,
          !t)
          throw Error(r(452));
        return t;
      case "head":
        if (t = n.head,
          !t)
          throw Error(r(453));
        return t;
      case "body":
        if (t = n.body,
          !t)
          throw Error(r(454));
        return t;
      default:
        throw Error(r(451))
    }
  }
  function Ua(t) {
    for (var n = t.attributes; n.length;)
      t.removeAttributeNode(n[0]);
    Hl(t)
  }
  var qe = new Map
    , Ny = new Set;
  function xo(t) {
    return typeof t.getRootNode == "function" ? t.getRootNode() : t.nodeType === 9 ? t : t.ownerDocument
  }
  var jn = K.d;
  K.d = {
    f: KT,
    r: QT,
    D: ZT,
    C: WT,
    L: $T,
    m: JT,
    X: tw,
    S: IT,
    M: ew
  };
  function KT() {
    var t = jn.f()
      , n = co();
    return t || n
  }
  function QT(t) {
    var n = ts(t);
    n !== null && n.tag === 5 && n.type === "form" ? $m(n) : jn.r(t)
  }
  var Vs = typeof document > "u" ? null : document;
  function jy(t, n, s) {
    var o = Vs;
    if (o && typeof n == "string" && n) {
      var u = Le(n);
      u = 'link[rel="' + t + '"][href="' + u + '"]',
        typeof s == "string" && (u += '[crossorigin="' + s + '"]'),
        Ny.has(u) || (Ny.add(u),
          t = {
            rel: t,
            crossOrigin: s,
            href: n
          },
          o.querySelector(u) === null && (n = o.createElement("link"),
            ae(n, "link", t),
            It(n),
            o.head.appendChild(n)))
    }
  }
  function ZT(t) {
    jn.D(t),
      jy("dns-prefetch", t, null)
  }
  function WT(t, n) {
    jn.C(t, n),
      jy("preconnect", t, n)
  }
  function $T(t, n, s) {
    jn.L(t, n, s);
    var o = Vs;
    if (o && t && n) {
      var u = 'link[rel="preload"][as="' + Le(n) + '"]';
      n === "image" && s && s.imageSrcSet ? (u += '[imagesrcset="' + Le(s.imageSrcSet) + '"]',
        typeof s.imageSizes == "string" && (u += '[imagesizes="' + Le(s.imageSizes) + '"]')) : u += '[href="' + Le(t) + '"]';
      var f = u;
      switch (n) {
        case "style":
          f = zs(t);
          break;
        case "script":
          f = Ls(t)
      }
      qe.has(f) || (t = y({
        rel: "preload",
        href: n === "image" && s && s.imageSrcSet ? void 0 : t,
        as: n
      }, s),
        qe.set(f, t),
        o.querySelector(u) !== null || n === "style" && o.querySelector(Ba(f)) || n === "script" && o.querySelector(ka(f)) || (n = o.createElement("link"),
          ae(n, "link", t),
          It(n),
          o.head.appendChild(n)))
    }
  }
  function JT(t, n) {
    jn.m(t, n);
    var s = Vs;
    if (s && t) {
      var o = n && typeof n.as == "string" ? n.as : "script"
        , u = 'link[rel="modulepreload"][as="' + Le(o) + '"][href="' + Le(t) + '"]'
        , f = u;
      switch (o) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = Ls(t)
      }
      if (!qe.has(f) && (t = y({
        rel: "modulepreload",
        href: t
      }, n),
        qe.set(f, t),
        s.querySelector(u) === null)) {
        switch (o) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (s.querySelector(ka(f)))
              return
        }
        o = s.createElement("link"),
          ae(o, "link", t),
          It(o),
          s.head.appendChild(o)
      }
    }
  }
  function IT(t, n, s) {
    jn.S(t, n, s);
    var o = Vs;
    if (o && t) {
      var u = es(o).hoistableStyles
        , f = zs(t);
      n = n || "default";
      var g = u.get(f);
      if (!g) {
        var x = {
          loading: 0,
          preload: null
        };
        if (g = o.querySelector(Ba(f)))
          x.loading = 5;
        else {
          t = y({
            rel: "stylesheet",
            href: t,
            "data-precedence": n
          }, s),
            (s = qe.get(f)) && Bc(t, s);
          var R = g = o.createElement("link");
          It(R),
            ae(R, "link", t),
            R._p = new Promise(function (P, F) {
              R.onload = P,
                R.onerror = F
            }
            ),
            R.addEventListener("load", function () {
              x.loading |= 1
            }),
            R.addEventListener("error", function () {
              x.loading |= 2
            }),
            x.loading |= 4,
            So(g, n, o)
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: x
        },
          u.set(f, g)
      }
    }
  }
  function tw(t, n) {
    jn.X(t, n);
    var s = Vs;
    if (s && t) {
      var o = es(s).hoistableScripts
        , u = Ls(t)
        , f = o.get(u);
      f || (f = s.querySelector(ka(u)),
        f || (t = y({
          src: t,
          async: !0
        }, n),
          (n = qe.get(u)) && kc(t, n),
          f = s.createElement("script"),
          It(f),
          ae(f, "link", t),
          s.head.appendChild(f)),
        f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        },
        o.set(u, f))
    }
  }
  function ew(t, n) {
    jn.M(t, n);
    var s = Vs;
    if (s && t) {
      var o = es(s).hoistableScripts
        , u = Ls(t)
        , f = o.get(u);
      f || (f = s.querySelector(ka(u)),
        f || (t = y({
          src: t,
          async: !0,
          type: "module"
        }, n),
          (n = qe.get(u)) && kc(t, n),
          f = s.createElement("script"),
          It(f),
          ae(f, "link", t),
          s.head.appendChild(f)),
        f = {
          type: "script",
          instance: f,
          count: 1,
          state: null
        },
        o.set(u, f))
    }
  }
  function _y(t, n, s, o) {
    var u = (u = rt.current) ? xo(u) : null;
    if (!u)
      throw Error(r(446));
    switch (t) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof s.precedence == "string" && typeof s.href == "string" ? (n = zs(s.href),
          s = es(u).hoistableStyles,
          o = s.get(n),
          o || (o = {
            type: "style",
            instance: null,
            count: 0,
            state: null
          },
            s.set(n, o)),
          o) : {
          type: "void",
          instance: null,
          count: 0,
          state: null
        };
      case "link":
        if (s.rel === "stylesheet" && typeof s.href == "string" && typeof s.precedence == "string") {
          t = zs(s.href);
          var f = es(u).hoistableStyles
            , g = f.get(t);
          if (g || (u = u.ownerDocument || u,
            g = {
              type: "stylesheet",
              instance: null,
              count: 0,
              state: {
                loading: 0,
                preload: null
              }
            },
            f.set(t, g),
            (f = u.querySelector(Ba(t))) && !f._p && (g.instance = f,
              g.state.loading = 5),
            qe.has(t) || (s = {
              rel: "preload",
              as: "style",
              href: s.href,
              crossOrigin: s.crossOrigin,
              integrity: s.integrity,
              media: s.media,
              hrefLang: s.hrefLang,
              referrerPolicy: s.referrerPolicy
            },
              qe.set(t, s),
              f || nw(u, t, s, g.state))),
            n && o === null)
            throw Error(r(528, ""));
          return g
        }
        if (n && o !== null)
          throw Error(r(529, ""));
        return null;
      case "script":
        return n = s.async,
          s = s.src,
          typeof s == "string" && n && typeof n != "function" && typeof n != "symbol" ? (n = Ls(s),
            s = es(u).hoistableScripts,
            o = s.get(n),
            o || (o = {
              type: "script",
              instance: null,
              count: 0,
              state: null
            },
              s.set(n, o)),
            o) : {
            type: "void",
            instance: null,
            count: 0,
            state: null
          };
      default:
        throw Error(r(444, t))
    }
  }
  function zs(t) {
    return 'href="' + Le(t) + '"'
  }
  function Ba(t) {
    return 'link[rel="stylesheet"][' + t + "]"
  }
  function Vy(t) {
    return y({}, t, {
      "data-precedence": t.precedence,
      precedence: null
    })
  }
  function nw(t, n, s, o) {
    t.querySelector('link[rel="preload"][as="style"][' + n + "]") ? o.loading = 1 : (n = t.createElement("link"),
      o.preload = n,
      n.addEventListener("load", function () {
        return o.loading |= 1
      }),
      n.addEventListener("error", function () {
        return o.loading |= 2
      }),
      ae(n, "link", s),
      It(n),
      t.head.appendChild(n))
  }
  function Ls(t) {
    return '[src="' + Le(t) + '"]'
  }
  function ka(t) {
    return "script[async]" + t
  }
  function zy(t, n, s) {
    if (n.count++,
      n.instance === null)
      switch (n.type) {
        case "style":
          var o = t.querySelector('style[data-href~="' + Le(s.href) + '"]');
          if (o)
            return n.instance = o,
              It(o),
              o;
          var u = y({}, s, {
            "data-href": s.href,
            "data-precedence": s.precedence,
            href: null,
            precedence: null
          });
          return o = (t.ownerDocument || t).createElement("style"),
            It(o),
            ae(o, "style", u),
            So(o, s.precedence, t),
            n.instance = o;
        case "stylesheet":
          u = zs(s.href);
          var f = t.querySelector(Ba(u));
          if (f)
            return n.state.loading |= 4,
              n.instance = f,
              It(f),
              f;
          o = Vy(s),
            (u = qe.get(u)) && Bc(o, u),
            f = (t.ownerDocument || t).createElement("link"),
            It(f);
          var g = f;
          return g._p = new Promise(function (x, R) {
            g.onload = x,
              g.onerror = R
          }
          ),
            ae(f, "link", o),
            n.state.loading |= 4,
            So(f, s.precedence, t),
            n.instance = f;
        case "script":
          return f = Ls(s.src),
            (u = t.querySelector(ka(f))) ? (n.instance = u,
              It(u),
              u) : (o = s,
                (u = qe.get(f)) && (o = y({}, s),
                  kc(o, u)),
                t = t.ownerDocument || t,
                u = t.createElement("script"),
                It(u),
                ae(u, "link", o),
                t.head.appendChild(u),
                n.instance = u);
        case "void":
          return null;
        default:
          throw Error(r(443, n.type))
      }
    else
      n.type === "stylesheet" && (n.state.loading & 4) === 0 && (o = n.instance,
        n.state.loading |= 4,
        So(o, s.precedence, t));
    return n.instance
  }
  function So(t, n, s) {
    for (var o = s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'), u = o.length ? o[o.length - 1] : null, f = u, g = 0; g < o.length; g++) {
      var x = o[g];
      if (x.dataset.precedence === n)
        f = x;
      else if (f !== u)
        break
    }
    f ? f.parentNode.insertBefore(t, f.nextSibling) : (n = s.nodeType === 9 ? s.head : s,
      n.insertBefore(t, n.firstChild))
  }
  function Bc(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.title == null && (t.title = n.title)
  }
  function kc(t, n) {
    t.crossOrigin == null && (t.crossOrigin = n.crossOrigin),
      t.referrerPolicy == null && (t.referrerPolicy = n.referrerPolicy),
      t.integrity == null && (t.integrity = n.integrity)
  }
  var To = null;
  function Ly(t, n, s) {
    if (To === null) {
      var o = new Map
        , u = To = new Map;
      u.set(s, o)
    } else
      u = To,
        o = u.get(s),
        o || (o = new Map,
          u.set(s, o));
    if (o.has(t))
      return o;
    for (o.set(t, null),
      s = s.getElementsByTagName(t),
      u = 0; u < s.length; u++) {
      var f = s[u];
      if (!(f[Is] || f[le] || t === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = f.getAttribute(n) || "";
        g = t + g;
        var x = o.get(g);
        x ? x.push(f) : o.set(g, [f])
      }
    }
    return o
  }
  function Py(t, n, s) {
    t = t.ownerDocument || t,
      t.head.insertBefore(s, n === "title" ? t.querySelector("head > title") : null)
  }
  function iw(t, n, s) {
    if (s === 1 || n.itemProp != null)
      return !1;
    switch (t) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof n.precedence != "string" || typeof n.href != "string" || n.href === "")
          break;
        return !0;
      case "link":
        if (typeof n.rel != "string" || typeof n.href != "string" || n.href === "" || n.onLoad || n.onError)
          break;
        return n.rel === "stylesheet" ? (t = n.disabled,
          typeof n.precedence == "string" && t == null) : !0;
      case "script":
        if (n.async && typeof n.async != "function" && typeof n.async != "symbol" && !n.onLoad && !n.onError && n.src && typeof n.src == "string")
          return !0
    }
    return !1
  }
  function Uy(t) {
    return !(t.type === "stylesheet" && (t.state.loading & 3) === 0)
  }
  var Ha = null;
  function sw() { }
  function aw(t, n, s) {
    if (Ha === null)
      throw Error(r(475));
    var o = Ha;
    if (n.type === "stylesheet" && (typeof s.media != "string" || matchMedia(s.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = zs(s.href)
          , f = t.querySelector(Ba(u));
        if (f) {
          t = f._p,
            t !== null && typeof t == "object" && typeof t.then == "function" && (o.count++,
              o = wo.bind(o),
              t.then(o, o)),
            n.state.loading |= 4,
            n.instance = f,
            It(f);
          return
        }
        f = t.ownerDocument || t,
          s = Vy(s),
          (u = qe.get(u)) && Bc(s, u),
          f = f.createElement("link"),
          It(f);
        var g = f;
        g._p = new Promise(function (x, R) {
          g.onload = x,
            g.onerror = R
        }
        ),
          ae(f, "link", s),
          n.instance = f
      }
      o.stylesheets === null && (o.stylesheets = new Map),
        o.stylesheets.set(n, t),
        (t = n.state.preload) && (n.state.loading & 3) === 0 && (o.count++,
          n = wo.bind(o),
          t.addEventListener("load", n),
          t.addEventListener("error", n))
    }
  }
  function rw() {
    if (Ha === null)
      throw Error(r(475));
    var t = Ha;
    return t.stylesheets && t.count === 0 && Hc(t, t.stylesheets),
      0 < t.count ? function (n) {
        var s = setTimeout(function () {
          if (t.stylesheets && Hc(t, t.stylesheets),
            t.unsuspend) {
            var o = t.unsuspend;
            t.unsuspend = null,
              o()
          }
        }, 6e4);
        return t.unsuspend = n,
          function () {
            t.unsuspend = null,
              clearTimeout(s)
          }
      }
        : null
  }
  function wo() {
    if (this.count--,
      this.count === 0) {
      if (this.stylesheets)
        Hc(this, this.stylesheets);
      else if (this.unsuspend) {
        var t = this.unsuspend;
        this.unsuspend = null,
          t()
      }
    }
  }
  var Eo = null;
  function Hc(t, n) {
    t.stylesheets = null,
      t.unsuspend !== null && (t.count++,
        Eo = new Map,
        n.forEach(ow, t),
        Eo = null,
        wo.call(t))
  }
  function ow(t, n) {
    if (!(n.state.loading & 4)) {
      var s = Eo.get(t);
      if (s)
        var o = s.get(null);
      else {
        s = new Map,
          Eo.set(t, s);
        for (var u = t.querySelectorAll("link[data-precedence],style[data-precedence]"), f = 0; f < u.length; f++) {
          var g = u[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (s.set(g.dataset.precedence, g),
            o = g)
        }
        o && s.set(null, o)
      }
      u = n.instance,
        g = u.getAttribute("data-precedence"),
        f = s.get(g) || o,
        f === o && s.set(null, u),
        s.set(g, u),
        this.count++,
        o = wo.bind(this),
        u.addEventListener("load", o),
        u.addEventListener("error", o),
        f ? f.parentNode.insertBefore(u, f.nextSibling) : (t = t.nodeType === 9 ? t.head : t,
          t.insertBefore(u, t.firstChild)),
        n.state.loading |= 4
    }
  }
  var Fa = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: Y,
    _currentValue2: Y,
    _threadCount: 0
  };
  function lw(t, n, s, o, u, f, g, x) {
    this.tag = 1,
      this.containerInfo = t,
      this.pingCache = this.current = this.pendingChildren = null,
      this.timeoutHandle = -1,
      this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null,
      this.callbackPriority = 0,
      this.expirationTimes = Pl(-1),
      this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
      this.entanglements = Pl(0),
      this.hiddenUpdates = Pl(null),
      this.identifierPrefix = o,
      this.onUncaughtError = u,
      this.onCaughtError = f,
      this.onRecoverableError = g,
      this.pooledCache = null,
      this.pooledCacheLanes = 0,
      this.formState = x,
      this.incompleteTransitions = new Map
  }
  function By(t, n, s, o, u, f, g, x, R, P, F, X) {
    return t = new lw(t, n, s, g, x, R, P, X),
      n = 1,
      f === !0 && (n |= 24),
      f = Ee(3, null, null, n),
      t.current = f,
      f.stateNode = t,
      n = Tu(),
      n.refCount++,
      t.pooledCache = n,
      n.refCount++,
      f.memoizedState = {
        element: o,
        isDehydrated: s,
        cache: n
      },
      Cu(f),
      t
  }
  function ky(t) {
    return t ? (t = hs,
      t) : hs
  }
  function Hy(t, n, s, o, u, f) {
    u = ky(u),
      o.context === null ? o.context = u : o.pendingContext = u,
      o = Yn(n),
      o.payload = {
        element: s
      },
      f = f === void 0 ? null : f,
      f !== null && (o.callback = f),
      s = Xn(t, o, n),
      s !== null && (De(s, t, n),
        va(s, t, n))
  }
  function Fy(t, n) {
    if (t = t.memoizedState,
      t !== null && t.dehydrated !== null) {
      var s = t.retryLane;
      t.retryLane = s !== 0 && s < n ? s : n
    }
  }
  function Fc(t, n) {
    Fy(t, n),
      (t = t.alternate) && Fy(t, n)
  }
  function qy(t) {
    if (t.tag === 13) {
      var n = ds(t, 67108864);
      n !== null && De(n, t, 67108864),
        Fc(t, 67108864)
    }
  }
  var Ao = !0;
  function uw(t, n, s, o) {
    var u = _.T;
    _.T = null;
    var f = K.p;
    try {
      K.p = 2,
        qc(t, n, s, o)
    } finally {
      K.p = f,
        _.T = u
    }
  }
  function cw(t, n, s, o) {
    var u = _.T;
    _.T = null;
    var f = K.p;
    try {
      K.p = 8,
        qc(t, n, s, o)
    } finally {
      K.p = f,
        _.T = u
    }
  }
  function qc(t, n, s, o) {
    if (Ao) {
      var u = Gc(o);
      if (u === null)
        Oc(t, n, o, Co, s),
          Yy(t, o);
      else if (dw(u, t, n, s, o))
        o.stopPropagation();
      else if (Yy(t, o),
        n & 4 && -1 < fw.indexOf(t)) {
        for (; u !== null;) {
          var f = ts(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode,
                  f.current.memoizedState.isDehydrated) {
                  var g = wi(f.pendingLanes);
                  if (g !== 0) {
                    var x = f;
                    for (x.pendingLanes |= 2,
                      x.entangledLanes |= 2; g;) {
                      var R = 1 << 31 - Te(g);
                      x.entanglements[1] |= R,
                        g &= ~R
                    }
                    cn(f),
                      (Mt & 6) === 0 && (lo = an() + 500,
                        za(0))
                  }
                }
                break;
              case 13:
                x = ds(f, 2),
                  x !== null && De(x, f, 2),
                  co(),
                  Fc(f, 2)
            }
          if (f = Gc(o),
            f === null && Oc(t, n, o, Co, s),
            f === u)
            break;
          u = f
        }
        u !== null && o.stopPropagation()
      } else
        Oc(t, n, o, null, s)
    }
  }
  function Gc(t) {
    return t = Zl(t),
      Yc(t)
  }
  var Co = null;
  function Yc(t) {
    if (Co = null,
      t = Ii(t),
      t !== null) {
      var n = c(t);
      if (n === null)
        t = null;
      else {
        var s = n.tag;
        if (s === 13) {
          if (t = d(n),
            t !== null)
            return t;
          t = null
        } else if (s === 3) {
          if (n.stateNode.current.memoizedState.isDehydrated)
            return n.tag === 3 ? n.stateNode.containerInfo : null;
          t = null
        } else
          n !== t && (t = null)
      }
    }
    return Co = t,
      null
  }
  function Gy(t) {
    switch (t) {
      case "beforetoggle":
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
      case "toggle":
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
        return 2;
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
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (WS()) {
          case sh:
            return 2;
          case ah:
            return 8;
          case gr:
          case $S:
            return 32;
          case rh:
            return 268435456;
          default:
            return 32
        }
      default:
        return 32
    }
  }
  var Xc = !1
    , ai = null
    , ri = null
    , oi = null
    , qa = new Map
    , Ga = new Map
    , li = []
    , fw = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");
  function Yy(t, n) {
    switch (t) {
      case "focusin":
      case "focusout":
        ai = null;
        break;
      case "dragenter":
      case "dragleave":
        ri = null;
        break;
      case "mouseover":
      case "mouseout":
        oi = null;
        break;
      case "pointerover":
      case "pointerout":
        qa.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Ga.delete(n.pointerId)
    }
  }
  function Ya(t, n, s, o, u, f) {
    return t === null || t.nativeEvent !== f ? (t = {
      blockedOn: n,
      domEventName: s,
      eventSystemFlags: o,
      nativeEvent: f,
      targetContainers: [u]
    },
      n !== null && (n = ts(n),
        n !== null && qy(n)),
      t) : (t.eventSystemFlags |= o,
        n = t.targetContainers,
        u !== null && n.indexOf(u) === -1 && n.push(u),
        t)
  }
  function dw(t, n, s, o, u) {
    switch (n) {
      case "focusin":
        return ai = Ya(ai, t, n, s, o, u),
          !0;
      case "dragenter":
        return ri = Ya(ri, t, n, s, o, u),
          !0;
      case "mouseover":
        return oi = Ya(oi, t, n, s, o, u),
          !0;
      case "pointerover":
        var f = u.pointerId;
        return qa.set(f, Ya(qa.get(f) || null, t, n, s, o, u)),
          !0;
      case "gotpointercapture":
        return f = u.pointerId,
          Ga.set(f, Ya(Ga.get(f) || null, t, n, s, o, u)),
          !0
    }
    return !1
  }
  function Xy(t) {
    var n = Ii(t.target);
    if (n !== null) {
      var s = c(n);
      if (s !== null) {
        if (n = s.tag,
          n === 13) {
          if (n = d(s),
            n !== null) {
            t.blockedOn = n,
              a1(t.priority, function () {
                if (s.tag === 13) {
                  var o = Me();
                  o = Ul(o);
                  var u = ds(s, o);
                  u !== null && De(u, s, o),
                    Fc(s, o)
                }
              });
            return
          }
        } else if (n === 3 && s.stateNode.current.memoizedState.isDehydrated) {
          t.blockedOn = s.tag === 3 ? s.stateNode.containerInfo : null;
          return
        }
      }
    }
    t.blockedOn = null
  }
  function Ro(t) {
    if (t.blockedOn !== null)
      return !1;
    for (var n = t.targetContainers; 0 < n.length;) {
      var s = Gc(t.nativeEvent);
      if (s === null) {
        s = t.nativeEvent;
        var o = new s.constructor(s.type, s);
        Ql = o,
          s.target.dispatchEvent(o),
          Ql = null
      } else
        return n = ts(s),
          n !== null && qy(n),
          t.blockedOn = s,
          !1;
      n.shift()
    }
    return !0
  }
  function Ky(t, n, s) {
    Ro(t) && s.delete(n)
  }
  function hw() {
    Xc = !1,
      ai !== null && Ro(ai) && (ai = null),
      ri !== null && Ro(ri) && (ri = null),
      oi !== null && Ro(oi) && (oi = null),
      qa.forEach(Ky),
      Ga.forEach(Ky)
  }
  function Mo(t, n) {
    t.blockedOn === n && (t.blockedOn = null,
      Xc || (Xc = !0,
        e.unstable_scheduleCallback(e.unstable_NormalPriority, hw)))
  }
  var Do = null;
  function Qy(t) {
    Do !== t && (Do = t,
      e.unstable_scheduleCallback(e.unstable_NormalPriority, function () {
        Do === t && (Do = null);
        for (var n = 0; n < t.length; n += 3) {
          var s = t[n]
            , o = t[n + 1]
            , u = t[n + 2];
          if (typeof o != "function") {
            if (Yc(o || s) === null)
              continue;
            break
          }
          var f = ts(s);
          f !== null && (t.splice(n, 3),
            n -= 3,
            Yu(f, {
              pending: !0,
              data: u,
              method: s.method,
              action: o
            }, o, u))
        }
      }))
  }
  function Xa(t) {
    function n(R) {
      return Mo(R, t)
    }
    ai !== null && Mo(ai, t),
      ri !== null && Mo(ri, t),
      oi !== null && Mo(oi, t),
      qa.forEach(n),
      Ga.forEach(n);
    for (var s = 0; s < li.length; s++) {
      var o = li[s];
      o.blockedOn === t && (o.blockedOn = null)
    }
    for (; 0 < li.length && (s = li[0],
      s.blockedOn === null);)
      Xy(s),
        s.blockedOn === null && li.shift();
    if (s = (t.ownerDocument || t).$$reactFormReplay,
      s != null)
      for (o = 0; o < s.length; o += 3) {
        var u = s[o]
          , f = s[o + 1]
          , g = u[pe] || null;
        if (typeof f == "function")
          g || Qy(s);
        else if (g) {
          var x = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f,
              g = f[pe] || null)
              x = g.formAction;
            else if (Yc(u) !== null)
              continue
          } else
            x = g.action;
          typeof x == "function" ? s[o + 1] = x : (s.splice(o, 3),
            o -= 3),
            Qy(s)
        }
      }
  }
  function Kc(t) {
    this._internalRoot = t
  }
  Oo.prototype.render = Kc.prototype.render = function (t) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(r(409));
    var s = n.current
      , o = Me();
    Hy(s, o, t, n, null, null)
  }
    ,
    Oo.prototype.unmount = Kc.prototype.unmount = function () {
      var t = this._internalRoot;
      if (t !== null) {
        this._internalRoot = null;
        var n = t.containerInfo;
        Hy(t.current, 2, null, t, null, null),
          co(),
          n[Ji] = null
      }
    }
    ;
  function Oo(t) {
    this._internalRoot = t
  }
  Oo.prototype.unstable_scheduleHydration = function (t) {
    if (t) {
      var n = fh();
      t = {
        blockedOn: null,
        target: t,
        priority: n
      };
      for (var s = 0; s < li.length && n !== 0 && n < li[s].priority; s++)
        ;
      li.splice(s, 0, t),
        s === 0 && Xy(t)
    }
  }
    ;
  var Zy = i.version;
  if (Zy !== "19.1.0")
    throw Error(r(527, Zy, "19.1.0"));
  K.findDOMNode = function (t) {
    var n = t._reactInternals;
    if (n === void 0)
      throw typeof t.render == "function" ? Error(r(188)) : (t = Object.keys(t).join(","),
        Error(r(268, t)));
    return t = p(n),
      t = t !== null ? m(t) : null,
      t = t === null ? null : t.stateNode,
      t
  }
    ;
  var mw = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: _,
    reconcilerVersion: "19.1.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var No = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!No.isDisabled && No.supportsFiber)
      try {
        Ws = No.inject(mw),
          Se = No
      } catch { }
  }
  return Qa.createRoot = function (t, n) {
    if (!l(t))
      throw Error(r(299));
    var s = !1
      , o = ""
      , u = fp
      , f = dp
      , g = hp
      , x = null;
    return n != null && (n.unstable_strictMode === !0 && (s = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onUncaughtError !== void 0 && (u = n.onUncaughtError),
      n.onCaughtError !== void 0 && (f = n.onCaughtError),
      n.onRecoverableError !== void 0 && (g = n.onRecoverableError),
      n.unstable_transitionCallbacks !== void 0 && (x = n.unstable_transitionCallbacks)),
      n = By(t, 1, !1, null, null, s, o, u, f, g, x, null),
      t[Ji] = n.current,
      Dc(t),
      new Kc(n)
  }
    ,
    Qa.hydrateRoot = function (t, n, s) {
      if (!l(t))
        throw Error(r(299));
      var o = !1
        , u = ""
        , f = fp
        , g = dp
        , x = hp
        , R = null
        , P = null;
      return s != null && (s.unstable_strictMode === !0 && (o = !0),
        s.identifierPrefix !== void 0 && (u = s.identifierPrefix),
        s.onUncaughtError !== void 0 && (f = s.onUncaughtError),
        s.onCaughtError !== void 0 && (g = s.onCaughtError),
        s.onRecoverableError !== void 0 && (x = s.onRecoverableError),
        s.unstable_transitionCallbacks !== void 0 && (R = s.unstable_transitionCallbacks),
        s.formState !== void 0 && (P = s.formState)),
        n = By(t, 1, !0, n, s ?? null, o, u, f, g, x, R, P),
        n.context = ky(null),
        s = n.current,
        o = Me(),
        o = Ul(o),
        u = Yn(o),
        u.callback = null,
        Xn(s, u, o),
        s = o,
        n.current.lanes = s,
        Js(n, s),
        cn(n),
        t[Ji] = n.current,
        Dc(t),
        new Oo(n)
    }
    ,
    Qa.version = "19.1.0",
    Qa
}
var ag;
function Ew() {
  if (ag)
    return Zc.exports;
  ag = 1;
  function e() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
      } catch (i) {
        console.error(i)
      }
  }
  return e(),
    Zc.exports = ww(),
    Zc.exports
}
var Aw = Ew();
function Cw(e, i) {
  if (e instanceof RegExp)
    return {
      keys: !1,
      pattern: e
    };
  var a, r, l, c, d = [], h = "", p = e.split("/");
  for (p[0] || p.shift(); l = p.shift();)
    a = l[0],
      a === "*" ? (d.push(a),
        h += l[1] === "?" ? "(?:/(.*))?" : "/(.*)") : a === ":" ? (r = l.indexOf("?", 1),
          c = l.indexOf(".", 1),
          d.push(l.substring(1, ~r ? r : ~c ? c : l.length)),
          h += ~r && !~c ? "(?:/([^/]+?))?" : "/([^/]+?)",
          ~c && (h += (~r ? "?" : "") + "\\" + l.substring(c))) : h += "/" + l;
  return {
    keys: d,
    pattern: new RegExp("^" + h + (i ? "(?=$|/)" : "/?$"), "i")
  }
}
var w = gl();
const di = h0(w)
  , p0 = yw({
    __proto__: null,
    default: di
  }, [w]);
var tf = {
  exports: {}
}
  , ef = {};
var rg;
function Rw() {
  if (rg)
    return ef;
  rg = 1;
  var e = gl();
  function i(v, b) {
    return v === b && (v !== 0 || 1 / v === 1 / b) || v !== v && b !== b
  }
  var a = typeof Object.is == "function" ? Object.is : i
    , r = e.useState
    , l = e.useEffect
    , c = e.useLayoutEffect
    , d = e.useDebugValue;
  function h(v, b) {
    var S = b()
      , E = r({
        inst: {
          value: S,
          getSnapshot: b
        }
      })
      , A = E[0].inst
      , C = E[1];
    return c(function () {
      A.value = S,
        A.getSnapshot = b,
        p(A) && C({
          inst: A
        })
    }, [v, S, b]),
      l(function () {
        return p(A) && C({
          inst: A
        }),
          v(function () {
            p(A) && C({
              inst: A
            })
          })
      }, [v]),
      d(S),
      S
  }
  function p(v) {
    var b = v.getSnapshot;
    v = v.value;
    try {
      var S = b();
      return !a(v, S)
    } catch {
      return !0
    }
  }
  function m(v, b) {
    return b()
  }
  var y = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : h;
  return ef.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : y,
    ef
}
var og;
function Mw() {
  return og || (og = 1,
    tf.exports = Rw()),
    tf.exports
}
var Dw = Mw();
const Ow = p0.useInsertionEffect
  , Nw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u"
  , jw = Nw ? w.useLayoutEffect : w.useEffect
  , _w = Ow || jw
  , y0 = e => {
    const i = w.useRef([e, (...a) => i[0](...a)]).current;
    return _w(() => {
      i[0] = e
    }
    ),
      i[1]
  }
  , Vw = "popstate"
  , cd = "pushState"
  , fd = "replaceState"
  , zw = "hashchange"
  , lg = [Vw, cd, fd, zw]
  , Lw = e => {
    for (const i of lg)
      addEventListener(i, e);
    return () => {
      for (const i of lg)
        removeEventListener(i, e)
    }
  }
  , g0 = (e, i) => Dw.useSyncExternalStore(Lw, e, i)
  , ug = () => location.search
  , Pw = ({ ssrSearch: e } = {}) => g0(ug, e != null ? () => e : ug)
  , cg = () => location.pathname
  , Uw = ({ ssrPath: e } = {}) => g0(cg, e != null ? () => e : cg)
  , Bw = (e, { replace: i = !1, state: a = null } = {}) => history[i ? fd : cd](a, "", e)
  , kw = (e = {}) => [Uw(e), Bw]
  , fg = Symbol.for("wouter_v3");
if (typeof history < "u" && typeof window[fg] > "u") {
  for (const e of [cd, fd]) {
    const i = history[e];
    history[e] = function () {
      const a = i.apply(this, arguments)
        , r = new Event(e);
      return r.arguments = arguments,
        dispatchEvent(r),
        a
    }
  }
  Object.defineProperty(window, fg, {
    value: !0
  })
}
const Hw = (e, i) => i.toLowerCase().indexOf(e.toLowerCase()) ? "~" + i : i.slice(e.length) || "/"
  , v0 = (e = "") => e === "/" ? "" : e
  , Fw = (e, i) => e[0] === "~" ? e.slice(1) : v0(i) + e
  , qw = (e = "", i) => Hw(dg(v0(e)), dg(i))
  , dg = e => {
    try {
      return decodeURI(e)
    } catch {
      return e
    }
  }
  , b0 = {
    hook: kw,
    searchHook: Pw,
    parser: Cw,
    base: "",
    ssrPath: void 0,
    ssrSearch: void 0,
    ssrContext: void 0,
    hrefs: e => e,
    aroundNav: (e, i, a) => e(i, a)
  }
  , x0 = w.createContext(b0)
  , vl = () => w.useContext(x0)
  , S0 = {}
  , T0 = w.createContext(S0)
  , Gw = () => w.useContext(T0)
  , dd = e => {
    const [i, a] = e.hook(e);
    return [qw(e.base, i), y0((r, l) => e.aroundNav(a, Fw(r, e.base), l))]
  }
  , w0 = (e, i, a, r) => {
    const { pattern: l, keys: c } = i instanceof RegExp ? {
      keys: !1,
      pattern: i
    } : e(i || "*", r)
      , d = l.exec(a) || []
      , [h, ...p] = d;
    return h !== void 0 ? [!0, (() => {
      const m = c !== !1 ? Object.fromEntries(c.map((v, b) => [v, p[b]])) : d.groups;
      let y = {
        ...p
      };
      return m && Object.assign(y, m),
        y
    }
    )(), ...r ? [h] : []] : [!1, null]
  }
  , E0 = ({ children: e, ...i }) => {
    const a = vl()
      , r = i.hook ? b0 : a;
    let l = r;
    const [c, d = i.ssrSearch ?? ""] = i.ssrPath?.split("?") ?? [];
    c && (i.ssrSearch = d,
      i.ssrPath = c),
      i.hrefs = i.hrefs ?? i.hook?.hrefs,
      i.searchHook = i.searchHook ?? i.hook?.searchHook;
    let h = w.useRef({})
      , p = h.current
      , m = p;
    for (let y in r) {
      const v = y === "base" ? r[y] + (i[y] ?? "") : i[y] ?? r[y];
      p === m && v !== m[y] && (h.current = m = {
        ...m
      }),
        m[y] = v,
        (v !== r[y] || v !== l[y]) && (l = m)
    }
    return w.createElement(x0.Provider, {
      value: l,
      children: e
    })
  }
  , hg = ({ children: e, component: i }, a) => i ? w.createElement(i, {
    params: a
  }) : typeof e == "function" ? e(a) : e
  , Yw = e => {
    let i = w.useRef(S0);
    const a = i.current;
    return i.current = Object.keys(e).length !== Object.keys(a).length || Object.entries(e).some(([r, l]) => l !== a[r]) ? e : a
  }
  , mg = ({ path: e, nest: i, match: a, ...r }) => {
    const l = vl()
      , [c] = dd(l)
      , [d, h, p] = a ?? w0(l.parser, e, c, i)
      , m = Yw({
        ...Gw(),
        ...h
      });
    if (!d)
      return null;
    const y = p ? w.createElement(E0, {
      base: p
    }, hg(r, m)) : hg(r, m);
    return w.createElement(T0.Provider, {
      value: m,
      children: y
    })
  }
  ;
w.forwardRef((e, i) => {
  const a = vl()
    , [r, l] = dd(a)
    , { to: c = "", href: d = c, onClick: h, asChild: p, children: m, className: y, replace: v, state: b, transition: S, ...E } = e
    , A = y0(O => {
      O.ctrlKey || O.metaKey || O.altKey || O.shiftKey || O.button !== 0 || (h?.(O),
        O.defaultPrevented || (O.preventDefault(),
          l(d, e)))
    }
    )
    , C = a.hrefs(d[0] === "~" ? d.slice(1) : a.base + d, a);
  return p && w.isValidElement(m) ? w.cloneElement(m, {
    onClick: A,
    href: C
  }) : w.createElement("a", {
    ...E,
    onClick: A,
    href: C,
    className: y?.call ? y(r === d) : y,
    children: m,
    ref: i
  })
}
);
const A0 = e => Array.isArray(e) ? e.flatMap(i => A0(i && i.type === w.Fragment ? i.props.children : i)) : [e]
  , Xw = ({ children: e, location: i }) => {
    const a = vl()
      , [r] = dd(a);
    for (const l of A0(e)) {
      let c = 0;
      if (w.isValidElement(l) && (c = w0(a.parser, l.props.path, i || r, l.props.nest))[0])
        return w.cloneElement(l, {
          match: c
        })
    }
    return null
  }
  ;
var bl = class {
  constructor() {
    this.listeners = new Set,
      this.subscribe = this.subscribe.bind(this)
  }
  subscribe(e) {
    return this.listeners.add(e),
      this.onSubscribe(),
      () => {
        this.listeners.delete(e),
          this.onUnsubscribe()
      }
  }
  hasListeners() {
    return this.listeners.size > 0
  }
  onSubscribe() { }
  onUnsubscribe() { }
}
  , Kw = class extends bl {
    #t;
    #e;
    #n;
    constructor() {
      super(),
        this.#n = e => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => e();
            return window.addEventListener("visibilitychange", i, !1),
              () => {
                window.removeEventListener("visibilitychange", i)
              }
          }
        }
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(e) {
      this.#n = e,
        this.#e?.(),
        this.#e = e(i => {
          typeof i == "boolean" ? this.setFocused(i) : this.onFocus()
        }
        )
    }
    setFocused(e) {
      this.#t !== e && (this.#t = e,
        this.onFocus())
    }
    onFocus() {
      const e = this.isFocused();
      this.listeners.forEach(i => {
        i(e)
      }
      )
    }
    isFocused() {
      return typeof this.#t == "boolean" ? this.#t : globalThis.document?.visibilityState !== "hidden"
    }
  }
  , C0 = new Kw
  , Qw = {
    setTimeout: (e, i) => setTimeout(e, i),
    clearTimeout: e => clearTimeout(e),
    setInterval: (e, i) => setInterval(e, i),
    clearInterval: e => clearInterval(e)
  }
  , Zw = class {
    #t = Qw;
    #e = !1;
    setTimeoutProvider(e) {
      this.#t = e
    }
    setTimeout(e, i) {
      return this.#t.setTimeout(e, i)
    }
    clearTimeout(e) {
      this.#t.clearTimeout(e)
    }
    setInterval(e, i) {
      return this.#t.setInterval(e, i)
    }
    clearInterval(e) {
      this.#t.clearInterval(e)
    }
  }
  , Cf = new Zw;
function Ww(e) {
  setTimeout(e, 0)
}
var $w = typeof window > "u" || "Deno" in globalThis;
function Je() { }
function Jw(e, i) {
  return typeof e == "function" ? e(i) : e
}
function Iw(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0
}
function tE(e, i) {
  return Math.max(e + (i || 0) - Date.now(), 0)
}
function Rf(e, i) {
  return typeof e == "function" ? e(i) : e
}
function eE(e, i) {
  return typeof e == "function" ? e(i) : e
}
function pg(e, i) {
  const { type: a = "all", exact: r, fetchStatus: l, predicate: c, queryKey: d, stale: h } = e;
  if (d) {
    if (r) {
      if (i.queryHash !== hd(d, i.options))
        return !1
    } else if (!sr(i.queryKey, d))
      return !1
  }
  if (a !== "all") {
    const p = i.isActive();
    if (a === "active" && !p || a === "inactive" && p)
      return !1
  }
  return !(typeof h == "boolean" && i.isStale() !== h || l && l !== i.state.fetchStatus || c && !c(i))
}
function yg(e, i) {
  const { exact: a, status: r, predicate: l, mutationKey: c } = e;
  if (c) {
    if (!i.options.mutationKey)
      return !1;
    if (a) {
      if (ir(i.options.mutationKey) !== ir(c))
        return !1
    } else if (!sr(i.options.mutationKey, c))
      return !1
  }
  return !(r && i.state.status !== r || l && !l(i))
}
function hd(e, i) {
  return (i?.queryKeyHashFn || ir)(e)
}
function ir(e) {
  return JSON.stringify(e, (i, a) => Mf(a) ? Object.keys(a).sort().reduce((r, l) => (r[l] = a[l],
    r), {}) : a)
}
function sr(e, i) {
  return e === i ? !0 : typeof e != typeof i ? !1 : e && i && typeof e == "object" && typeof i == "object" ? Object.keys(i).every(a => sr(e[a], i[a])) : !1
}
var nE = Object.prototype.hasOwnProperty;
function R0(e, i, a = 0) {
  if (e === i)
    return e;
  if (a > 500)
    return i;
  const r = gg(e) && gg(i);
  if (!r && !(Mf(e) && Mf(i)))
    return i;
  const c = (r ? e : Object.keys(e)).length
    , d = r ? i : Object.keys(i)
    , h = d.length
    , p = r ? new Array(h) : {};
  let m = 0;
  for (let y = 0; y < h; y++) {
    const v = r ? y : d[y]
      , b = e[v]
      , S = i[v];
    if (b === S) {
      p[v] = b,
        (r ? y < c : nE.call(e, v)) && m++;
      continue
    }
    if (b === null || S === null || typeof b != "object" || typeof S != "object") {
      p[v] = S;
      continue
    }
    const E = R0(b, S, a + 1);
    p[v] = E,
      E === b && m++
  }
  return c === h && m === c ? e : p
}
function gg(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length
}
function Mf(e) {
  if (!vg(e))
    return !1;
  const i = e.constructor;
  if (i === void 0)
    return !0;
  const a = i.prototype;
  return !(!vg(a) || !a.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype)
}
function vg(e) {
  return Object.prototype.toString.call(e) === "[object Object]"
}
function iE(e) {
  return new Promise(i => {
    Cf.setTimeout(i, e)
  }
  )
}
function sE(e, i, a) {
  return typeof a.structuralSharing == "function" ? a.structuralSharing(e, i) : a.structuralSharing !== !1 ? R0(e, i) : i
}
function aE(e, i, a = 0) {
  const r = [...e, i];
  return a && r.length > a ? r.slice(1) : r
}
function rE(e, i, a = 0) {
  const r = [i, ...e];
  return a && r.length > a ? r.slice(0, -1) : r
}
var md = Symbol();
function M0(e, i) {
  return !e.queryFn && i?.initialPromise ? () => i.initialPromise : !e.queryFn || e.queryFn === md ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn
}
function oE(e, i, a) {
  let r = !1, l;
  return Object.defineProperty(e, "signal", {
    enumerable: !0,
    get: () => (l ??= i(),
      r || (r = !0,
        l.aborted ? a() : l.addEventListener("abort", a, {
          once: !0
        })),
      l)
  }),
    e
}
var D0 = (() => {
  let e = () => $w;
  return {
    isServer() {
      return e()
    },
    setIsServer(i) {
      e = i
    }
  }
}
)();
function lE() {
  let e, i;
  const a = new Promise((l, c) => {
    e = l,
      i = c
  }
  );
  a.status = "pending",
    a.catch(() => { }
    );
  function r(l) {
    Object.assign(a, l),
      delete a.resolve,
      delete a.reject
  }
  return a.resolve = l => {
    r({
      status: "fulfilled",
      value: l
    }),
      e(l)
  }
    ,
    a.reject = l => {
      r({
        status: "rejected",
        reason: l
      }),
        i(l)
    }
    ,
    a
}
var uE = Ww;
function cE() {
  let e = []
    , i = 0
    , a = h => {
      h()
    }
    , r = h => {
      h()
    }
    , l = uE;
  const c = h => {
    i ? e.push(h) : l(() => {
      a(h)
    }
    )
  }
    , d = () => {
      const h = e;
      e = [],
        h.length && l(() => {
          r(() => {
            h.forEach(p => {
              a(p)
            }
            )
          }
          )
        }
        )
    }
    ;
  return {
    batch: h => {
      let p;
      i++;
      try {
        p = h()
      } finally {
        i--,
          i || d()
      }
      return p
    }
    ,
    batchCalls: h => (...p) => {
      c(() => {
        h(...p)
      }
      )
    }
    ,
    schedule: c,
    setNotifyFunction: h => {
      a = h
    }
    ,
    setBatchNotifyFunction: h => {
      r = h
    }
    ,
    setScheduler: h => {
      l = h
    }
  }
}
var de = cE()
  , fE = class extends bl {
    #t = !0;
    #e;
    #n;
    constructor() {
      super(),
        this.#n = e => {
          if (typeof window < "u" && window.addEventListener) {
            const i = () => e(!0)
              , a = () => e(!1);
            return window.addEventListener("online", i, !1),
              window.addEventListener("offline", a, !1),
              () => {
                window.removeEventListener("online", i),
                  window.removeEventListener("offline", a)
              }
          }
        }
    }
    onSubscribe() {
      this.#e || this.setEventListener(this.#n)
    }
    onUnsubscribe() {
      this.hasListeners() || (this.#e?.(),
        this.#e = void 0)
    }
    setEventListener(e) {
      this.#n = e,
        this.#e?.(),
        this.#e = e(this.setOnline.bind(this))
    }
    setOnline(e) {
      this.#t !== e && (this.#t = e,
        this.listeners.forEach(a => {
          a(e)
        }
        ))
    }
    isOnline() {
      return this.#t
    }
  }
  , el = new fE;
function dE(e) {
  return Math.min(1e3 * 2 ** e, 3e4)
}
function O0(e) {
  return (e ?? "online") === "online" ? el.isOnline() : !0
}
var Df = class extends Error {
  constructor(e) {
    super("CancelledError"),
      this.revert = e?.revert,
      this.silent = e?.silent
  }
}
  ;
function N0(e) {
  let i = !1, a = 0, r;
  const l = lE()
    , c = () => l.status !== "pending"
    , d = A => {
      if (!c()) {
        const C = new Df(A);
        b(C),
          e.onCancel?.(C)
      }
    }
    , h = () => {
      i = !0
    }
    , p = () => {
      i = !1
    }
    , m = () => C0.isFocused() && (e.networkMode === "always" || el.isOnline()) && e.canRun()
    , y = () => O0(e.networkMode) && e.canRun()
    , v = A => {
      c() || (r?.(),
        l.resolve(A))
    }
    , b = A => {
      c() || (r?.(),
        l.reject(A))
    }
    , S = () => new Promise(A => {
      r = C => {
        (c() || m()) && A(C)
      }
        ,
        e.onPause?.()
    }
    ).then(() => {
      r = void 0,
        c() || e.onContinue?.()
    }
    )
    , E = () => {
      if (c())
        return;
      let A;
      const C = a === 0 ? e.initialPromise : void 0;
      try {
        A = C ?? e.fn()
      } catch (O) {
        A = Promise.reject(O)
      }
      Promise.resolve(A).then(v).catch(O => {
        if (c())
          return;
        const V = e.retry ?? (D0.isServer() ? 0 : 3)
          , j = e.retryDelay ?? dE
          , L = typeof j == "function" ? j(a, O) : j
          , k = V === !0 || typeof V == "number" && a < V || typeof V == "function" && V(a, O);
        if (i || !k) {
          b(O);
          return
        }
        a++,
          e.onFail?.(a, O),
          iE(L).then(() => m() ? void 0 : S()).then(() => {
            i ? b(O) : E()
          }
          )
      }
      )
    }
    ;
  return {
    promise: l,
    status: () => l.status,
    cancel: d,
    continue: () => (r?.(),
      l),
    cancelRetry: h,
    continueRetry: p,
    canStart: y,
    start: () => (y() ? E() : S().then(E),
      l)
  }
}
var j0 = class {
  #t;
  destroy() {
    this.clearGcTimeout()
  }
  scheduleGc() {
    this.clearGcTimeout(),
      Iw(this.gcTime) && (this.#t = Cf.setTimeout(() => {
        this.optionalRemove()
      }
        , this.gcTime))
  }
  updateGcTime(e) {
    this.gcTime = Math.max(this.gcTime || 0, e ?? (D0.isServer() ? 1 / 0 : 300 * 1e3))
  }
  clearGcTimeout() {
    this.#t !== void 0 && (Cf.clearTimeout(this.#t),
      this.#t = void 0)
  }
}
  ;
function hE(e) {
  return {
    onFetch: (i, a) => {
      const r = i.options
        , l = i.fetchOptions?.meta?.fetchMore?.direction
        , c = i.state.data?.pages || []
        , d = i.state.data?.pageParams || [];
      let h = {
        pages: [],
        pageParams: []
      }
        , p = 0;
      const m = async () => {
        let y = !1;
        const v = E => {
          oE(E, () => i.signal, () => y = !0)
        }
          , b = M0(i.options, i.fetchOptions)
          , S = async (E, A, C) => {
            if (y)
              return Promise.reject(i.signal.reason);
            if (A == null && E.pages.length)
              return Promise.resolve(E);
            const V = (() => {
              const Q = {
                client: i.client,
                queryKey: i.queryKey,
                pageParam: A,
                direction: C ? "backward" : "forward",
                meta: i.options.meta
              };
              return v(Q),
                Q
            }
            )()
              , j = await b(V)
              , { maxPages: L } = i.options
              , k = C ? rE : aE;
            return {
              pages: k(E.pages, j, L),
              pageParams: k(E.pageParams, A, L)
            }
          }
          ;
        if (l && c.length) {
          const E = l === "backward"
            , A = E ? mE : bg
            , C = {
              pages: c,
              pageParams: d
            }
            , O = A(r, C);
          h = await S(C, O, E)
        } else {
          const E = e ?? c.length;
          do {
            const A = p === 0 ? d[0] ?? r.initialPageParam : bg(r, h);
            if (p > 0 && A == null)
              break;
            h = await S(h, A),
              p++
          } while (p < E)
        }
        return h
      }
        ;
      i.options.persister ? i.fetchFn = () => i.options.persister?.(m, {
        client: i.client,
        queryKey: i.queryKey,
        meta: i.options.meta,
        signal: i.signal
      }, a) : i.fetchFn = m
    }
  }
}
function bg(e, { pages: i, pageParams: a }) {
  const r = i.length - 1;
  return i.length > 0 ? e.getNextPageParam(i[r], i, a[r], a) : void 0
}
function mE(e, { pages: i, pageParams: a }) {
  return i.length > 0 ? e.getPreviousPageParam?.(i[0], i, a[0], a) : void 0
}
var pE = class extends j0 {
  #t;
  #e;
  #n;
  #s;
  #a;
  #i;
  #l;
  #r;
  constructor(e) {
    super(),
      this.#r = !1,
      this.#l = e.defaultOptions,
      this.setOptions(e.options),
      this.observers = [],
      this.#a = e.client,
      this.#s = this.#a.getQueryCache(),
      this.queryKey = e.queryKey,
      this.queryHash = e.queryHash,
      this.#e = Sg(this.options),
      this.state = e.state ?? this.#e,
      this.scheduleGc()
  }
  get meta() {
    return this.options.meta
  }
  get queryType() {
    return this.#t
  }
  get promise() {
    return this.#i?.promise
  }
  setOptions(e) {
    if (this.options = {
      ...this.#l,
      ...e
    },
      e?._type && (this.#t = e._type),
      this.updateGcTime(this.options.gcTime),
      this.state && this.state.data === void 0) {
      const i = Sg(this.options);
      i.data !== void 0 && (this.setState(xg(i.data, i.dataUpdatedAt)),
        this.#e = i)
    }
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && this.#s.remove(this)
  }
  setData(e, i) {
    const a = sE(this.state.data, e, this.options);
    return this.#o({
      data: a,
      type: "success",
      dataUpdatedAt: i?.updatedAt,
      manual: i?.manual
    }),
      a
  }
  setState(e) {
    this.#o({
      type: "setState",
      state: e
    })
  }
  cancel(e) {
    const i = this.#i?.promise;
    return this.#i?.cancel(e),
      i ? i.then(Je).catch(Je) : Promise.resolve()
  }
  destroy() {
    super.destroy(),
      this.cancel({
        silent: !0
      })
  }
  get resetState() {
    return this.#e
  }
  reset() {
    this.destroy(),
      this.setState(this.resetState)
  }
  isActive() {
    return this.observers.some(e => eE(e.options.enabled, this) !== !1)
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === md || !this.isFetched()
  }
  isFetched() {
    return this.state.dataUpdateCount + this.state.errorUpdateCount > 0
  }
  isStatic() {
    return this.getObserversCount() > 0 ? this.observers.some(e => Rf(e.options.staleTime, this) === "static") : !1
  }
  isStale() {
    return this.getObserversCount() > 0 ? this.observers.some(e => e.getCurrentResult().isStale) : this.state.data === void 0 || this.state.isInvalidated
  }
  isStaleByTime(e = 0) {
    return this.state.data === void 0 ? !0 : e === "static" ? !1 : this.state.isInvalidated ? !0 : !tE(this.state.dataUpdatedAt, e)
  }
  onFocus() {
    this.observers.find(i => i.shouldFetchOnWindowFocus())?.refetch({
      cancelRefetch: !1
    }),
      this.#i?.continue()
  }
  onOnline() {
    this.observers.find(i => i.shouldFetchOnReconnect())?.refetch({
      cancelRefetch: !1
    }),
      this.#i?.continue()
  }
  addObserver(e) {
    this.observers.includes(e) || (this.observers.push(e),
      this.clearGcTimeout(),
      this.#s.notify({
        type: "observerAdded",
        query: this,
        observer: e
      }))
  }
  removeObserver(e) {
    this.observers.includes(e) && (this.observers = this.observers.filter(i => i !== e),
      this.observers.length || (this.#i && (this.#r || this.#u() ? this.#i.cancel({
        revert: !0
      }) : this.#i.cancelRetry()),
        this.scheduleGc()),
      this.#s.notify({
        type: "observerRemoved",
        query: this,
        observer: e
      }))
  }
  getObserversCount() {
    return this.observers.length
  }
  #u() {
    return this.state.fetchStatus === "paused" && this.state.status === "pending"
  }
  invalidate() {
    this.state.isInvalidated || this.#o({
      type: "invalidate"
    })
  }
  async fetch(e, i) {
    if (this.state.fetchStatus !== "idle" && this.#i?.status() !== "rejected") {
      if (this.state.data !== void 0 && i?.cancelRefetch)
        this.cancel({
          silent: !0
        });
      else if (this.#i)
        return this.#i.continueRetry(),
          this.#i.promise
    }
    if (e && this.setOptions(e),
      !this.options.queryFn) {
      const p = this.observers.find(m => m.options.queryFn);
      p && this.setOptions(p.options)
    }
    const a = new AbortController
      , r = p => {
        Object.defineProperty(p, "signal", {
          enumerable: !0,
          get: () => (this.#r = !0,
            a.signal)
        })
      }
      , l = () => {
        const p = M0(this.options, i)
          , y = (() => {
            const v = {
              client: this.#a,
              queryKey: this.queryKey,
              meta: this.meta
            };
            return r(v),
              v
          }
          )();
        return this.#r = !1,
          this.options.persister ? this.options.persister(p, y, this) : p(y)
      }
      , d = (() => {
        const p = {
          fetchOptions: i,
          options: this.options,
          queryKey: this.queryKey,
          client: this.#a,
          state: this.state,
          fetchFn: l
        };
        return r(p),
          p
      }
      )();
    (this.#t === "infinite" ? hE(this.options.pages) : this.options.behavior)?.onFetch(d, this),
      this.#n = this.state,
      (this.state.fetchStatus === "idle" || this.state.fetchMeta !== d.fetchOptions?.meta) && this.#o({
        type: "fetch",
        meta: d.fetchOptions?.meta
      }),
      this.#i = N0({
        initialPromise: i?.initialPromise,
        fn: d.fetchFn,
        onCancel: p => {
          p instanceof Df && p.revert && this.setState({
            ...this.#n,
            fetchStatus: "idle"
          }),
            a.abort()
        }
        ,
        onFail: (p, m) => {
          this.#o({
            type: "failed",
            failureCount: p,
            error: m
          })
        }
        ,
        onPause: () => {
          this.#o({
            type: "pause"
          })
        }
        ,
        onContinue: () => {
          this.#o({
            type: "continue"
          })
        }
        ,
        retry: d.options.retry,
        retryDelay: d.options.retryDelay,
        networkMode: d.options.networkMode,
        canRun: () => !0
      });
    try {
      const p = await this.#i.start();
      if (p === void 0)
        throw new Error(`${this.queryHash} data is undefined`);
      return this.setData(p),
        this.#s.config.onSuccess?.(p, this),
        this.#s.config.onSettled?.(p, this.state.error, this),
        p
    } catch (p) {
      if (p instanceof Df) {
        if (p.silent)
          return this.#i.promise;
        if (p.revert) {
          if (this.state.data === void 0)
            throw p;
          return this.state.data
        }
      }
      throw this.#o({
        type: "error",
        error: p
      }),
      this.#s.config.onError?.(p, this),
      this.#s.config.onSettled?.(this.state.data, p, this),
      p
    } finally {
      this.scheduleGc()
    }
  }
  #o(e) {
    const i = a => {
      switch (e.type) {
        case "failed":
          return {
            ...a,
            fetchFailureCount: e.failureCount,
            fetchFailureReason: e.error
          };
        case "pause":
          return {
            ...a,
            fetchStatus: "paused"
          };
        case "continue":
          return {
            ...a,
            fetchStatus: "fetching"
          };
        case "fetch":
          return {
            ...a,
            ...yE(a.data, this.options),
            fetchMeta: e.meta ?? null
          };
        case "success":
          const r = {
            ...a,
            ...xg(e.data, e.dataUpdatedAt),
            dataUpdateCount: a.dataUpdateCount + 1,
            ...!e.manual && {
              fetchStatus: "idle",
              fetchFailureCount: 0,
              fetchFailureReason: null
            }
          };
          return this.#n = e.manual ? r : void 0,
            r;
        case "error":
          const l = e.error;
          return {
            ...a,
            error: l,
            errorUpdateCount: a.errorUpdateCount + 1,
            errorUpdatedAt: Date.now(),
            fetchFailureCount: a.fetchFailureCount + 1,
            fetchFailureReason: l,
            fetchStatus: "idle",
            status: "error",
            isInvalidated: !0
          };
        case "invalidate":
          return {
            ...a,
            isInvalidated: !0
          };
        case "setState":
          return {
            ...a,
            ...e.state
          }
      }
    }
      ;
    this.state = i(this.state),
      de.batch(() => {
        this.observers.forEach(a => {
          a.onQueryUpdate()
        }
        ),
          this.#s.notify({
            query: this,
            type: "updated",
            action: e
          })
      }
      )
  }
}
  ;
function yE(e, i) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: O0(i.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  }
}
function xg(e, i) {
  return {
    data: e,
    dataUpdatedAt: i ?? Date.now(),
    error: null,
    isInvalidated: !1,
    status: "success"
  }
}
function Sg(e) {
  const i = typeof e.initialData == "function" ? e.initialData() : e.initialData
    , a = i !== void 0
    , r = a ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: i,
    dataUpdateCount: 0,
    dataUpdatedAt: a ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: a ? "success" : "pending",
    fetchStatus: "idle"
  }
}
var gE = class extends j0 {
  #t;
  #e;
  #n;
  #s;
  constructor(e) {
    super(),
      this.#t = e.client,
      this.mutationId = e.mutationId,
      this.#n = e.mutationCache,
      this.#e = [],
      this.state = e.state || vE(),
      this.setOptions(e.options),
      this.scheduleGc()
  }
  setOptions(e) {
    this.options = e,
      this.updateGcTime(this.options.gcTime)
  }
  get meta() {
    return this.options.meta
  }
  addObserver(e) {
    this.#e.includes(e) || (this.#e.push(e),
      this.clearGcTimeout(),
      this.#n.notify({
        type: "observerAdded",
        mutation: this,
        observer: e
      }))
  }
  removeObserver(e) {
    this.#e = this.#e.filter(i => i !== e),
      this.scheduleGc(),
      this.#n.notify({
        type: "observerRemoved",
        mutation: this,
        observer: e
      })
  }
  optionalRemove() {
    this.#e.length || (this.state.status === "pending" ? this.scheduleGc() : this.#n.remove(this))
  }
  continue() {
    return this.#s?.continue() ?? this.execute(this.state.variables)
  }
  async execute(e) {
    const i = () => {
      this.#a({
        type: "continue"
      })
    }
      , a = {
        client: this.#t,
        meta: this.options.meta,
        mutationKey: this.options.mutationKey
      };
    this.#s = N0({
      fn: () => this.options.mutationFn ? this.options.mutationFn(e, a) : Promise.reject(new Error("No mutationFn found")),
      onFail: (c, d) => {
        this.#a({
          type: "failed",
          failureCount: c,
          error: d
        })
      }
      ,
      onPause: () => {
        this.#a({
          type: "pause"
        })
      }
      ,
      onContinue: i,
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => this.#n.canRun(this)
    });
    const r = this.state.status === "pending"
      , l = !this.#s.canStart();
    try {
      if (r)
        i();
      else {
        this.#a({
          type: "pending",
          variables: e,
          isPaused: l
        }),
          this.#n.config.onMutate && await this.#n.config.onMutate(e, this, a);
        const d = await this.options.onMutate?.(e, a);
        d !== this.state.context && this.#a({
          type: "pending",
          context: d,
          variables: e,
          isPaused: l
        })
      }
      const c = await this.#s.start();
      return await this.#n.config.onSuccess?.(c, e, this.state.context, this, a),
        await this.options.onSuccess?.(c, e, this.state.context, a),
        await this.#n.config.onSettled?.(c, null, this.state.variables, this.state.context, this, a),
        await this.options.onSettled?.(c, null, e, this.state.context, a),
        this.#a({
          type: "success",
          data: c
        }),
        c
    } catch (c) {
      try {
        await this.#n.config.onError?.(c, e, this.state.context, this, a)
      } catch (d) {
        Promise.reject(d)
      }
      try {
        await this.options.onError?.(c, e, this.state.context, a)
      } catch (d) {
        Promise.reject(d)
      }
      try {
        await this.#n.config.onSettled?.(void 0, c, this.state.variables, this.state.context, this, a)
      } catch (d) {
        Promise.reject(d)
      }
      try {
        await this.options.onSettled?.(void 0, c, e, this.state.context, a)
      } catch (d) {
        Promise.reject(d)
      }
      throw this.#a({
        type: "error",
        error: c
      }),
      c
    } finally {
      this.#n.runNext(this)
    }
  }
  #a(e) {
    const i = a => {
      switch (e.type) {
        case "failed":
          return {
            ...a,
            failureCount: e.failureCount,
            failureReason: e.error
          };
        case "pause":
          return {
            ...a,
            isPaused: !0
          };
        case "continue":
          return {
            ...a,
            isPaused: !1
          };
        case "pending":
          return {
            ...a,
            context: e.context,
            data: void 0,
            failureCount: 0,
            failureReason: null,
            error: null,
            isPaused: e.isPaused,
            status: "pending",
            variables: e.variables,
            submittedAt: Date.now()
          };
        case "success":
          return {
            ...a,
            data: e.data,
            failureCount: 0,
            failureReason: null,
            error: null,
            status: "success",
            isPaused: !1
          };
        case "error":
          return {
            ...a,
            data: void 0,
            error: e.error,
            failureCount: a.failureCount + 1,
            failureReason: e.error,
            isPaused: !1,
            status: "error"
          }
      }
    }
      ;
    this.state = i(this.state),
      de.batch(() => {
        this.#e.forEach(a => {
          a.onMutationUpdate(e)
        }
        ),
          this.#n.notify({
            mutation: this,
            type: "updated",
            action: e
          })
      }
      )
  }
}
  ;
function vE() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  }
}
var bE = class extends bl {
  constructor(e = {}) {
    super(),
      this.config = e,
      this.#t = new Set,
      this.#e = new Map,
      this.#n = 0
  }
  #t;
  #e;
  #n;
  build(e, i, a) {
    const r = new gE({
      client: e,
      mutationCache: this,
      mutationId: ++this.#n,
      options: e.defaultMutationOptions(i),
      state: a
    });
    return this.add(r),
      r
  }
  add(e) {
    this.#t.add(e);
    const i = jo(e);
    if (typeof i == "string") {
      const a = this.#e.get(i);
      a ? a.push(e) : this.#e.set(i, [e])
    }
    this.notify({
      type: "added",
      mutation: e
    })
  }
  remove(e) {
    if (this.#t.delete(e)) {
      const i = jo(e);
      if (typeof i == "string") {
        const a = this.#e.get(i);
        if (a)
          if (a.length > 1) {
            const r = a.indexOf(e);
            r !== -1 && a.splice(r, 1)
          } else
            a[0] === e && this.#e.delete(i)
      }
    }
    this.notify({
      type: "removed",
      mutation: e
    })
  }
  canRun(e) {
    const i = jo(e);
    if (typeof i == "string") {
      const r = this.#e.get(i)?.find(l => l.state.status === "pending");
      return !r || r === e
    } else
      return !0
  }
  runNext(e) {
    const i = jo(e);
    return typeof i == "string" ? this.#e.get(i)?.find(r => r !== e && r.state.isPaused)?.continue() ?? Promise.resolve() : Promise.resolve()
  }
  clear() {
    de.batch(() => {
      this.#t.forEach(e => {
        this.notify({
          type: "removed",
          mutation: e
        })
      }
      ),
        this.#t.clear(),
        this.#e.clear()
    }
    )
  }
  getAll() {
    return Array.from(this.#t)
  }
  find(e) {
    const i = {
      exact: !0,
      ...e
    };
    return this.getAll().find(a => yg(i, a))
  }
  findAll(e = {}) {
    return this.getAll().filter(i => yg(e, i))
  }
  notify(e) {
    de.batch(() => {
      this.listeners.forEach(i => {
        i(e)
      }
      )
    }
    )
  }
  resumePausedMutations() {
    const e = this.getAll().filter(i => i.state.isPaused);
    return de.batch(() => Promise.all(e.map(i => i.continue().catch(Je))))
  }
}
  ;
function jo(e) {
  return e.options.scope?.id
}
var xE = class extends bl {
  constructor(e = {}) {
    super(),
      this.config = e,
      this.#t = new Map
  }
  #t;
  build(e, i, a) {
    const r = i.queryKey
      , l = i.queryHash ?? hd(r, i);
    let c = this.get(l);
    return c || (c = new pE({
      client: e,
      queryKey: r,
      queryHash: l,
      options: e.defaultQueryOptions(i),
      state: a,
      defaultOptions: e.getQueryDefaults(r)
    }),
      this.add(c)),
      c
  }
  add(e) {
    this.#t.has(e.queryHash) || (this.#t.set(e.queryHash, e),
      this.notify({
        type: "added",
        query: e
      }))
  }
  remove(e) {
    const i = this.#t.get(e.queryHash);
    i && (e.destroy(),
      i === e && this.#t.delete(e.queryHash),
      this.notify({
        type: "removed",
        query: e
      }))
  }
  clear() {
    de.batch(() => {
      this.getAll().forEach(e => {
        this.remove(e)
      }
      )
    }
    )
  }
  get(e) {
    return this.#t.get(e)
  }
  getAll() {
    return [...this.#t.values()]
  }
  find(e) {
    const i = {
      exact: !0,
      ...e
    };
    return this.getAll().find(a => pg(i, a))
  }
  findAll(e = {}) {
    const i = this.getAll();
    return Object.keys(e).length > 0 ? i.filter(a => pg(e, a)) : i
  }
  notify(e) {
    de.batch(() => {
      this.listeners.forEach(i => {
        i(e)
      }
      )
    }
    )
  }
  onFocus() {
    de.batch(() => {
      this.getAll().forEach(e => {
        e.onFocus()
      }
      )
    }
    )
  }
  onOnline() {
    de.batch(() => {
      this.getAll().forEach(e => {
        e.onOnline()
      }
      )
    }
    )
  }
}
  , SE = class {
    #t;
    #e;
    #n;
    #s;
    #a;
    #i;
    #l;
    #r;
    constructor(e = {}) {
      this.#t = e.queryCache || new xE,
        this.#e = e.mutationCache || new bE,
        this.#n = e.defaultOptions || {},
        this.#s = new Map,
        this.#a = new Map,
        this.#i = 0
    }
    mount() {
      this.#i++,
        this.#i === 1 && (this.#l = C0.subscribe(async e => {
          e && (await this.resumePausedMutations(),
            this.#t.onFocus())
        }
        ),
          this.#r = el.subscribe(async e => {
            e && (await this.resumePausedMutations(),
              this.#t.onOnline())
          }
          ))
    }
    unmount() {
      this.#i--,
        this.#i === 0 && (this.#l?.(),
          this.#l = void 0,
          this.#r?.(),
          this.#r = void 0)
    }
    isFetching(e) {
      return this.#t.findAll({
        ...e,
        fetchStatus: "fetching"
      }).length
    }
    isMutating(e) {
      return this.#e.findAll({
        ...e,
        status: "pending"
      }).length
    }
    getQueryData(e) {
      const i = this.defaultQueryOptions({
        queryKey: e
      });
      return this.#t.get(i.queryHash)?.state.data
    }
    ensureQueryData(e) {
      const i = this.defaultQueryOptions(e)
        , a = this.#t.build(this, i)
        , r = a.state.data;
      return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && a.isStaleByTime(Rf(i.staleTime, a)) && this.prefetchQuery(i),
        Promise.resolve(r))
    }
    getQueriesData(e) {
      return this.#t.findAll(e).map(({ queryKey: i, state: a }) => {
        const r = a.data;
        return [i, r]
      }
      )
    }
    setQueryData(e, i, a) {
      const r = this.defaultQueryOptions({
        queryKey: e
      })
        , c = this.#t.get(r.queryHash)?.state.data
        , d = Jw(i, c);
      if (d !== void 0)
        return this.#t.build(this, r).setData(d, {
          ...a,
          manual: !0
        })
    }
    setQueriesData(e, i, a) {
      return de.batch(() => this.#t.findAll(e).map(({ queryKey: r }) => [r, this.setQueryData(r, i, a)]))
    }
    getQueryState(e) {
      const i = this.defaultQueryOptions({
        queryKey: e
      });
      return this.#t.get(i.queryHash)?.state
    }
    removeQueries(e) {
      const i = this.#t;
      de.batch(() => {
        i.findAll(e).forEach(a => {
          i.remove(a)
        }
        )
      }
      )
    }
    resetQueries(e, i) {
      const a = this.#t;
      return de.batch(() => (a.findAll(e).forEach(r => {
        r.reset()
      }
      ),
        this.refetchQueries({
          type: "active",
          ...e
        }, i)))
    }
    cancelQueries(e, i = {}) {
      const a = {
        revert: !0,
        ...i
      }
        , r = de.batch(() => this.#t.findAll(e).map(l => l.cancel(a)));
      return Promise.all(r).then(Je).catch(Je)
    }
    invalidateQueries(e, i = {}) {
      return de.batch(() => (this.#t.findAll(e).forEach(a => {
        a.invalidate()
      }
      ),
        e?.refetchType === "none" ? Promise.resolve() : this.refetchQueries({
          ...e,
          type: e?.refetchType ?? e?.type ?? "active"
        }, i)))
    }
    refetchQueries(e, i = {}) {
      const a = {
        ...i,
        cancelRefetch: i.cancelRefetch ?? !0
      }
        , r = de.batch(() => this.#t.findAll(e).filter(l => !l.isDisabled() && !l.isStatic()).map(l => {
          let c = l.fetch(void 0, a);
          return a.throwOnError || (c = c.catch(Je)),
            l.state.fetchStatus === "paused" ? Promise.resolve() : c
        }
        ));
      return Promise.all(r).then(Je)
    }
    fetchQuery(e) {
      const i = this.defaultQueryOptions(e);
      i.retry === void 0 && (i.retry = !1);
      const a = this.#t.build(this, i);
      return a.isStaleByTime(Rf(i.staleTime, a)) ? a.fetch(i) : Promise.resolve(a.state.data)
    }
    prefetchQuery(e) {
      return this.fetchQuery(e).then(Je).catch(Je)
    }
    fetchInfiniteQuery(e) {
      return e._type = "infinite",
        this.fetchQuery(e)
    }
    prefetchInfiniteQuery(e) {
      return this.fetchInfiniteQuery(e).then(Je).catch(Je)
    }
    ensureInfiniteQueryData(e) {
      return e._type = "infinite",
        this.ensureQueryData(e)
    }
    resumePausedMutations() {
      return el.isOnline() ? this.#e.resumePausedMutations() : Promise.resolve()
    }
    getQueryCache() {
      return this.#t
    }
    getMutationCache() {
      return this.#e
    }
    getDefaultOptions() {
      return this.#n
    }
    setDefaultOptions(e) {
      this.#n = e
    }
    setQueryDefaults(e, i) {
      this.#s.set(ir(e), {
        queryKey: e,
        defaultOptions: i
      })
    }
    getQueryDefaults(e) {
      const i = [...this.#s.values()]
        , a = {};
      return i.forEach(r => {
        sr(e, r.queryKey) && Object.assign(a, r.defaultOptions)
      }
      ),
        a
    }
    setMutationDefaults(e, i) {
      this.#a.set(ir(e), {
        mutationKey: e,
        defaultOptions: i
      })
    }
    getMutationDefaults(e) {
      const i = [...this.#a.values()]
        , a = {};
      return i.forEach(r => {
        sr(e, r.mutationKey) && Object.assign(a, r.defaultOptions)
      }
      ),
        a
    }
    defaultQueryOptions(e) {
      if (e._defaulted)
        return e;
      const i = {
        ...this.#n.queries,
        ...this.getQueryDefaults(e.queryKey),
        ...e,
        _defaulted: !0
      };
      return i.queryHash || (i.queryHash = hd(i.queryKey, i)),
        i.refetchOnReconnect === void 0 && (i.refetchOnReconnect = i.networkMode !== "always"),
        i.throwOnError === void 0 && (i.throwOnError = !!i.suspense),
        !i.networkMode && i.persister && (i.networkMode = "offlineFirst"),
        i.queryFn === md && (i.enabled = !1),
        i
    }
    defaultMutationOptions(e) {
      return e?._defaulted ? e : {
        ...this.#n.mutations,
        ...e?.mutationKey && this.getMutationDefaults(e.mutationKey),
        ...e,
        _defaulted: !0
      }
    }
    clear() {
      this.#t.clear(),
        this.#e.clear()
    }
  }
  , TE = w.createContext(void 0)
  , wE = ({ client: e, children: i }) => (w.useEffect(() => (e.mount(),
    () => {
      e.unmount()
    }
  ), [e]),
    M.jsx(TE.Provider, {
      value: e,
      children: i
    }));
const EE = 1
  , AE = 1e6;
let nf = 0;
function CE() {
  return nf = (nf + 1) % Number.MAX_SAFE_INTEGER,
    nf.toString()
}
const sf = new Map
  , Tg = e => {
    if (sf.has(e))
      return;
    const i = setTimeout(() => {
      sf.delete(e),
        Ja({
          type: "REMOVE_TOAST",
          toastId: e
        })
    }
      , AE);
    sf.set(e, i)
  }
  , RE = (e, i) => {
    switch (i.type) {
      case "ADD_TOAST":
        return {
          ...e,
          toasts: [i.toast, ...e.toasts].slice(0, EE)
        };
      case "UPDATE_TOAST":
        return {
          ...e,
          toasts: e.toasts.map(a => a.id === i.toast.id ? {
            ...a,
            ...i.toast
          } : a)
        };
      case "DISMISS_TOAST":
        {
          const { toastId: a } = i;
          return a ? Tg(a) : e.toasts.forEach(r => {
            Tg(r.id)
          }
          ),
          {
            ...e,
            toasts: e.toasts.map(r => r.id === a || a === void 0 ? {
              ...r,
              open: !1
            } : r)
          }
        }
      case "REMOVE_TOAST":
        return i.toastId === void 0 ? {
          ...e,
          toasts: []
        } : {
          ...e,
          toasts: e.toasts.filter(a => a.id !== i.toastId)
        }
    }
  }
  , qo = [];
let Go = {
  toasts: []
};
function Ja(e) {
  Go = RE(Go, e),
    qo.forEach(i => {
      i(Go)
    }
    )
}
function ME({ ...e }) {
  const i = CE()
    , a = l => Ja({
      type: "UPDATE_TOAST",
      toast: {
        ...l,
        id: i
      }
    })
    , r = () => Ja({
      type: "DISMISS_TOAST",
      toastId: i
    });
  return Ja({
    type: "ADD_TOAST",
    toast: {
      ...e,
      id: i,
      open: !0,
      onOpenChange: l => {
        l || r()
      }
    }
  }),
  {
    id: i,
    dismiss: r,
    update: a
  }
}
function DE() {
  const [e, i] = w.useState(Go);
  return w.useEffect(() => (qo.push(i),
    () => {
      const a = qo.indexOf(i);
      a > -1 && qo.splice(a, 1)
    }
  ), [e]),
  {
    ...e,
    toast: ME,
    dismiss: a => Ja({
      type: "DISMISS_TOAST",
      toastId: a
    })
  }
}
var xl = m0();
const OE = h0(xl);
function Jt(e, i, { checkForDefaultPrevented: a = !0 } = {}) {
  return function (l) {
    if (e?.(l),
      a === !1 || !l.defaultPrevented)
      return i?.(l)
  }
}
function wg(e, i) {
  if (typeof e == "function")
    return e(i);
  e != null && (e.current = i)
}
function _0(...e) {
  return i => {
    let a = !1;
    const r = e.map(l => {
      const c = wg(l, i);
      return !a && typeof c == "function" && (a = !0),
        c
    }
    );
    if (a)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const c = r[l];
          typeof c == "function" ? c() : wg(e[l], null)
        }
      }
  }
}
function tn(...e) {
  return w.useCallback(_0(...e), e)
}
function Sl(e, i = []) {
  let a = [];
  function r(c, d) {
    const h = w.createContext(d)
      , p = a.length;
    a = [...a, d];
    const m = v => {
      const { scope: b, children: S, ...E } = v
        , A = b?.[e]?.[p] || h
        , C = w.useMemo(() => E, Object.values(E));
      return M.jsx(A.Provider, {
        value: C,
        children: S
      })
    }
      ;
    m.displayName = c + "Provider";
    function y(v, b) {
      const S = b?.[e]?.[p] || h
        , E = w.useContext(S);
      if (E)
        return E;
      if (d !== void 0)
        return d;
      throw new Error(`\`${v}\` must be used within \`${c}\``)
    }
    return [m, y]
  }
  const l = () => {
    const c = a.map(d => w.createContext(d));
    return function (h) {
      const p = h?.[e] || c;
      return w.useMemo(() => ({
        [`__scope${e}`]: {
          ...h,
          [e]: p
        }
      }), [h, p])
    }
  }
    ;
  return l.scopeName = e,
    [r, NE(l, ...i)]
}
function NE(...e) {
  const i = e[0];
  if (e.length === 1)
    return i;
  const a = () => {
    const r = e.map(l => ({
      useScope: l(),
      scopeName: l.scopeName
    }));
    return function (c) {
      const d = r.reduce((h, { useScope: p, scopeName: m }) => {
        const v = p(c)[`__scope${m}`];
        return {
          ...h,
          ...v
        }
      }
        , {});
      return w.useMemo(() => ({
        [`__scope${i.scopeName}`]: d
      }), [d])
    }
  }
    ;
  return a.scopeName = i.scopeName,
    a
}
function Of(e) {
  const i = jE(e)
    , a = w.forwardRef((r, l) => {
      const { children: c, ...d } = r
        , h = w.Children.toArray(c)
        , p = h.find(VE);
      if (p) {
        const m = p.props.children
          , y = h.map(v => v === p ? w.Children.count(m) > 1 ? w.Children.only(null) : w.isValidElement(m) ? m.props.children : null : v);
        return M.jsx(i, {
          ...d,
          ref: l,
          children: w.isValidElement(m) ? w.cloneElement(m, void 0, y) : null
        })
      }
      return M.jsx(i, {
        ...d,
        ref: l,
        children: c
      })
    }
    );
  return a.displayName = `${e}.Slot`,
    a
}
function jE(e) {
  const i = w.forwardRef((a, r) => {
    const { children: l, ...c } = a;
    if (w.isValidElement(l)) {
      const d = LE(l)
        , h = zE(c, l.props);
      return l.type !== w.Fragment && (h.ref = r ? _0(r, d) : d),
        w.cloneElement(l, h)
    }
    return w.Children.count(l) > 1 ? w.Children.only(null) : null
  }
  );
  return i.displayName = `${e}.SlotClone`,
    i
}
var V0 = Symbol("radix.slottable");
function _E(e) {
  const i = ({ children: a }) => M.jsx(M.Fragment, {
    children: a
  });
  return i.displayName = `${e}.Slottable`,
    i.__radixId = V0,
    i
}
function VE(e) {
  return w.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === V0
}
function zE(e, i) {
  const a = {
    ...i
  };
  for (const r in i) {
    const l = e[r]
      , c = i[r];
    /^on[A-Z]/.test(r) ? l && c ? a[r] = (...h) => {
      const p = c(...h);
      return l(...h),
        p
    }
      : l && (a[r] = l) : r === "style" ? a[r] = {
        ...l,
        ...c
      } : r === "className" && (a[r] = [l, c].filter(Boolean).join(" "))
  }
  return {
    ...e,
    ...a
  }
}
function LE(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , a = i && "isReactWarning" in i && i.isReactWarning;
  return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
function PE(e) {
  const i = e + "CollectionProvider"
    , [a, r] = Sl(i)
    , [l, c] = a(i, {
      collectionRef: {
        current: null
      },
      itemMap: new Map
    })
    , d = A => {
      const { scope: C, children: O } = A
        , V = di.useRef(null)
        , j = di.useRef(new Map).current;
      return M.jsx(l, {
        scope: C,
        itemMap: j,
        collectionRef: V,
        children: O
      })
    }
    ;
  d.displayName = i;
  const h = e + "CollectionSlot"
    , p = Of(h)
    , m = di.forwardRef((A, C) => {
      const { scope: O, children: V } = A
        , j = c(h, O)
        , L = tn(C, j.collectionRef);
      return M.jsx(p, {
        ref: L,
        children: V
      })
    }
    );
  m.displayName = h;
  const y = e + "CollectionItemSlot"
    , v = "data-radix-collection-item"
    , b = Of(y)
    , S = di.forwardRef((A, C) => {
      const { scope: O, children: V, ...j } = A
        , L = di.useRef(null)
        , k = tn(C, L)
        , Q = c(y, O);
      return di.useEffect(() => (Q.itemMap.set(L, {
        ref: L,
        ...j
      }),
        () => {
          Q.itemMap.delete(L)
        }
      )),
        M.jsx(b, {
          [v]: "",
          ref: k,
          children: V
        })
    }
    );
  S.displayName = y;
  function E(A) {
    const C = c(e + "CollectionConsumer", A);
    return di.useCallback(() => {
      const V = C.collectionRef.current;
      if (!V)
        return [];
      const j = Array.from(V.querySelectorAll(`[${v}]`));
      return Array.from(C.itemMap.values()).sort((Q, Z) => j.indexOf(Q.ref.current) - j.indexOf(Z.ref.current))
    }
      , [C.collectionRef, C.itemMap])
  }
  return [{
    Provider: d,
    Slot: m,
    ItemSlot: S
  }, E, r]
}
var UE = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"]
  , xe = UE.reduce((e, i) => {
    const a = Of(`Primitive.${i}`)
      , r = w.forwardRef((l, c) => {
        const { asChild: d, ...h } = l
          , p = d ? a : i;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
          M.jsx(p, {
            ...h,
            ref: c
          })
      }
      );
    return r.displayName = `Primitive.${i}`,
    {
      ...e,
      [i]: r
    }
  }
    , {});
function z0(e, i) {
  e && xl.flushSync(() => e.dispatchEvent(i))
}
function pi(e) {
  const i = w.useRef(e);
  return w.useEffect(() => {
    i.current = e
  }
  ),
    w.useMemo(() => (...a) => i.current?.(...a), [])
}
function BE(e, i = globalThis?.document) {
  const a = pi(e);
  w.useEffect(() => {
    const r = l => {
      l.key === "Escape" && a(l)
    }
      ;
    return i.addEventListener("keydown", r, {
      capture: !0
    }),
      () => i.removeEventListener("keydown", r, {
        capture: !0
      })
  }
    , [a, i])
}
var kE = "DismissableLayer", Nf = "dismissableLayer.update", HE = "dismissableLayer.pointerDownOutside", FE = "dismissableLayer.focusOutside", Eg, L0 = w.createContext({
  layers: new Set,
  layersWithOutsidePointerEventsDisabled: new Set,
  branches: new Set
}), pd = w.forwardRef((e, i) => {
  const { disableOutsidePointerEvents: a = !1, onEscapeKeyDown: r, onPointerDownOutside: l, onFocusOutside: c, onInteractOutside: d, onDismiss: h, ...p } = e
    , m = w.useContext(L0)
    , [y, v] = w.useState(null)
    , b = y?.ownerDocument ?? globalThis?.document
    , [, S] = w.useState({})
    , E = tn(i, Z => v(Z))
    , A = Array.from(m.layers)
    , [C] = [...m.layersWithOutsidePointerEventsDisabled].slice(-1)
    , O = A.indexOf(C)
    , V = y ? A.indexOf(y) : -1
    , j = m.layersWithOutsidePointerEventsDisabled.size > 0
    , L = V >= O
    , k = GE(Z => {
      const H = Z.target
        , $ = [...m.branches].some(W => W.contains(H));
      !L || $ || (l?.(Z),
        d?.(Z),
        Z.defaultPrevented || h?.())
    }
      , b)
    , Q = YE(Z => {
      const H = Z.target;
      [...m.branches].some(W => W.contains(H)) || (c?.(Z),
        d?.(Z),
        Z.defaultPrevented || h?.())
    }
      , b);
  return BE(Z => {
    V === m.layers.size - 1 && (r?.(Z),
      !Z.defaultPrevented && h && (Z.preventDefault(),
        h()))
  }
    , b),
    w.useEffect(() => {
      if (y)
        return a && (m.layersWithOutsidePointerEventsDisabled.size === 0 && (Eg = b.body.style.pointerEvents,
          b.body.style.pointerEvents = "none"),
          m.layersWithOutsidePointerEventsDisabled.add(y)),
          m.layers.add(y),
          Ag(),
          () => {
            a && m.layersWithOutsidePointerEventsDisabled.size === 1 && (b.body.style.pointerEvents = Eg)
          }
    }
      , [y, b, a, m]),
    w.useEffect(() => () => {
      y && (m.layers.delete(y),
        m.layersWithOutsidePointerEventsDisabled.delete(y),
        Ag())
    }
      , [y, m]),
    w.useEffect(() => {
      const Z = () => S({});
      return document.addEventListener(Nf, Z),
        () => document.removeEventListener(Nf, Z)
    }
      , []),
    M.jsx(xe.div, {
      ...p,
      ref: E,
      style: {
        pointerEvents: j ? L ? "auto" : "none" : void 0,
        ...e.style
      },
      onFocusCapture: Jt(e.onFocusCapture, Q.onFocusCapture),
      onBlurCapture: Jt(e.onBlurCapture, Q.onBlurCapture),
      onPointerDownCapture: Jt(e.onPointerDownCapture, k.onPointerDownCapture)
    })
}
);
pd.displayName = kE;
var qE = "DismissableLayerBranch"
  , P0 = w.forwardRef((e, i) => {
    const a = w.useContext(L0)
      , r = w.useRef(null)
      , l = tn(i, r);
    return w.useEffect(() => {
      const c = r.current;
      if (c)
        return a.branches.add(c),
          () => {
            a.branches.delete(c)
          }
    }
      , [a.branches]),
      M.jsx(xe.div, {
        ...e,
        ref: l
      })
  }
  );
P0.displayName = qE;
function GE(e, i = globalThis?.document) {
  const a = pi(e)
    , r = w.useRef(!1)
    , l = w.useRef(() => { }
    );
  return w.useEffect(() => {
    const c = h => {
      if (h.target && !r.current) {
        let p = function () {
          U0(HE, a, m, {
            discrete: !0
          })
        };
        const m = {
          originalEvent: h
        };
        h.pointerType === "touch" ? (i.removeEventListener("click", l.current),
          l.current = p,
          i.addEventListener("click", l.current, {
            once: !0
          })) : p()
      } else
        i.removeEventListener("click", l.current);
      r.current = !1
    }
      , d = window.setTimeout(() => {
        i.addEventListener("pointerdown", c)
      }
        , 0);
    return () => {
      window.clearTimeout(d),
        i.removeEventListener("pointerdown", c),
        i.removeEventListener("click", l.current)
    }
  }
    , [i, a]),
  {
    onPointerDownCapture: () => r.current = !0
  }
}
function YE(e, i = globalThis?.document) {
  const a = pi(e)
    , r = w.useRef(!1);
  return w.useEffect(() => {
    const l = c => {
      c.target && !r.current && U0(FE, a, {
        originalEvent: c
      }, {
        discrete: !1
      })
    }
      ;
    return i.addEventListener("focusin", l),
      () => i.removeEventListener("focusin", l)
  }
    , [i, a]),
  {
    onFocusCapture: () => r.current = !0,
    onBlurCapture: () => r.current = !1
  }
}
function Ag() {
  const e = new CustomEvent(Nf);
  document.dispatchEvent(e)
}
function U0(e, i, a, { discrete: r }) {
  const l = a.originalEvent.target
    , c = new CustomEvent(e, {
      bubbles: !1,
      cancelable: !0,
      detail: a
    });
  i && l.addEventListener(e, i, {
    once: !0
  }),
    r ? z0(l, c) : l.dispatchEvent(c)
}
var XE = pd
  , KE = P0
  , yi = globalThis?.document ? w.useLayoutEffect : () => { }
  , QE = "Portal"
  , yd = w.forwardRef((e, i) => {
    const { container: a, ...r } = e
      , [l, c] = w.useState(!1);
    yi(() => c(!0), []);
    const d = a || l && globalThis?.document?.body;
    return d ? OE.createPortal(M.jsx(xe.div, {
      ...r,
      ref: i
    }), d) : null
  }
  );
yd.displayName = QE;
function ZE(e, i) {
  return w.useReducer((a, r) => i[a][r] ?? a, e)
}
var Tl = e => {
  const { present: i, children: a } = e
    , r = WE(i)
    , l = typeof a == "function" ? a({
      present: r.isPresent
    }) : w.Children.only(a)
    , c = tn(r.ref, $E(l));
  return typeof a == "function" || r.isPresent ? w.cloneElement(l, {
    ref: c
  }) : null
}
  ;
Tl.displayName = "Presence";
function WE(e) {
  const [i, a] = w.useState()
    , r = w.useRef(null)
    , l = w.useRef(e)
    , c = w.useRef("none")
    , d = e ? "mounted" : "unmounted"
    , [h, p] = ZE(d, {
      mounted: {
        UNMOUNT: "unmounted",
        ANIMATION_OUT: "unmountSuspended"
      },
      unmountSuspended: {
        MOUNT: "mounted",
        ANIMATION_END: "unmounted"
      },
      unmounted: {
        MOUNT: "mounted"
      }
    });
  return w.useEffect(() => {
    const m = _o(r.current);
    c.current = h === "mounted" ? m : "none"
  }
    , [h]),
    yi(() => {
      const m = r.current
        , y = l.current;
      if (y !== e) {
        const b = c.current
          , S = _o(m);
        e ? p("MOUNT") : S === "none" || m?.display === "none" ? p("UNMOUNT") : p(y && b !== S ? "ANIMATION_OUT" : "UNMOUNT"),
          l.current = e
      }
    }
      , [e, p]),
    yi(() => {
      if (i) {
        let m;
        const y = i.ownerDocument.defaultView ?? window
          , v = S => {
            const A = _o(r.current).includes(CSS.escape(S.animationName));
            if (S.target === i && A && (p("ANIMATION_END"),
              !l.current)) {
              const C = i.style.animationFillMode;
              i.style.animationFillMode = "forwards",
                m = y.setTimeout(() => {
                  i.style.animationFillMode === "forwards" && (i.style.animationFillMode = C)
                }
                )
            }
          }
          , b = S => {
            S.target === i && (c.current = _o(r.current))
          }
          ;
        return i.addEventListener("animationstart", b),
          i.addEventListener("animationcancel", v),
          i.addEventListener("animationend", v),
          () => {
            y.clearTimeout(m),
              i.removeEventListener("animationstart", b),
              i.removeEventListener("animationcancel", v),
              i.removeEventListener("animationend", v)
          }
      } else
        p("ANIMATION_END")
    }
      , [i, p]),
  {
    isPresent: ["mounted", "unmountSuspended"].includes(h),
    ref: w.useCallback(m => {
      r.current = m ? getComputedStyle(m) : null,
        a(m)
    }
      , [])
  }
}
function _o(e) {
  return e?.animationName || "none"
}
function $E(e) {
  let i = Object.getOwnPropertyDescriptor(e.props, "ref")?.get
    , a = i && "isReactWarning" in i && i.isReactWarning;
  return a ? e.ref : (i = Object.getOwnPropertyDescriptor(e, "ref")?.get,
    a = i && "isReactWarning" in i && i.isReactWarning,
    a ? e.props.ref : e.props.ref || e.ref)
}
var JE = p0[" useInsertionEffect ".trim().toString()] || yi;
function IE({ prop: e, defaultProp: i, onChange: a = () => { }
  , caller: r }) {
  const [l, c, d] = tA({
    defaultProp: i,
    onChange: a
  })
    , h = e !== void 0
    , p = h ? e : l;
  {
    const y = w.useRef(e !== void 0);
    w.useEffect(() => {
      const v = y.current;
      v !== h && console.warn(`${r} is changing from ${v ? "controlled" : "uncontrolled"} to ${h ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`),
        y.current = h
    }
      , [h, r])
  }
  const m = w.useCallback(y => {
    if (h) {
      const v = eA(y) ? y(e) : y;
      v !== e && d.current?.(v)
    } else
      c(y)
  }
    , [h, e, c, d]);
  return [p, m]
}
function tA({ defaultProp: e, onChange: i }) {
  const [a, r] = w.useState(e)
    , l = w.useRef(a)
    , c = w.useRef(i);
  return JE(() => {
    c.current = i
  }
    , [i]),
    w.useEffect(() => {
      l.current !== a && (c.current?.(a),
        l.current = a)
    }
      , [a, l]),
    [a, r, c]
}
function eA(e) {
  return typeof e == "function"
}
var nA = Object.freeze({
  position: "absolute",
  border: 0,
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  whiteSpace: "nowrap",
  wordWrap: "normal"
})
  , iA = "VisuallyHidden"
  , wl = w.forwardRef((e, i) => M.jsx(xe.span, {
    ...e,
    ref: i,
    style: {
      ...nA,
      ...e.style
    }
  }));
wl.displayName = iA;
var sA = wl
  , gd = "ToastProvider"
  , [vd, aA, rA] = PE("Toast")
  , [B0] = Sl("Toast", [rA])
  , [oA, El] = B0(gd)
  , k0 = e => {
    const { __scopeToast: i, label: a = "Notification", duration: r = 5e3, swipeDirection: l = "right", swipeThreshold: c = 50, children: d } = e
      , [h, p] = w.useState(null)
      , [m, y] = w.useState(0)
      , v = w.useRef(!1)
      , b = w.useRef(!1);
    return a.trim() || console.error(`Invalid prop \`label\` supplied to \`${gd}\`. Expected non-empty \`string\`.`),
      M.jsx(vd.Provider, {
        scope: i,
        children: M.jsx(oA, {
          scope: i,
          label: a,
          duration: r,
          swipeDirection: l,
          swipeThreshold: c,
          toastCount: m,
          viewport: h,
          onViewportChange: p,
          onToastAdd: w.useCallback(() => y(S => S + 1), []),
          onToastRemove: w.useCallback(() => y(S => S - 1), []),
          isFocusedToastEscapeKeyDownRef: v,
          isClosePausedRef: b,
          children: d
        })
      })
  }
  ;
k0.displayName = gd;
var H0 = "ToastViewport"
  , lA = ["F8"]
  , jf = "toast.viewportPause"
  , _f = "toast.viewportResume"
  , F0 = w.forwardRef((e, i) => {
    const { __scopeToast: a, hotkey: r = lA, label: l = "Notifications ({hotkey})", ...c } = e
      , d = El(H0, a)
      , h = aA(a)
      , p = w.useRef(null)
      , m = w.useRef(null)
      , y = w.useRef(null)
      , v = w.useRef(null)
      , b = tn(i, v, d.onViewportChange)
      , S = r.join("+").replace(/Key/g, "").replace(/Digit/g, "")
      , E = d.toastCount > 0;
    w.useEffect(() => {
      const C = O => {
        r.length !== 0 && r.every(j => O[j] || O.code === j) && v.current?.focus()
      }
        ;
      return document.addEventListener("keydown", C),
        () => document.removeEventListener("keydown", C)
    }
      , [r]),
      w.useEffect(() => {
        const C = p.current
          , O = v.current;
        if (E && C && O) {
          const V = () => {
            if (!d.isClosePausedRef.current) {
              const Q = new CustomEvent(jf);
              O.dispatchEvent(Q),
                d.isClosePausedRef.current = !0
            }
          }
            , j = () => {
              if (d.isClosePausedRef.current) {
                const Q = new CustomEvent(_f);
                O.dispatchEvent(Q),
                  d.isClosePausedRef.current = !1
              }
            }
            , L = Q => {
              !C.contains(Q.relatedTarget) && j()
            }
            , k = () => {
              C.contains(document.activeElement) || j()
            }
            ;
          return C.addEventListener("focusin", V),
            C.addEventListener("focusout", L),
            C.addEventListener("pointermove", V),
            C.addEventListener("pointerleave", k),
            window.addEventListener("blur", V),
            window.addEventListener("focus", j),
            () => {
              C.removeEventListener("focusin", V),
                C.removeEventListener("focusout", L),
                C.removeEventListener("pointermove", V),
                C.removeEventListener("pointerleave", k),
                window.removeEventListener("blur", V),
                window.removeEventListener("focus", j)
            }
        }
      }
        , [E, d.isClosePausedRef]);
    const A = w.useCallback(({ tabbingDirection: C }) => {
      const V = h().map(j => {
        const L = j.ref.current
          , k = [L, ...SA(L)];
        return C === "forwards" ? k : k.reverse()
      }
      );
      return (C === "forwards" ? V.reverse() : V).flat()
    }
      , [h]);
    return w.useEffect(() => {
      const C = v.current;
      if (C) {
        const O = V => {
          const j = V.altKey || V.ctrlKey || V.metaKey;
          if (V.key === "Tab" && !j) {
            const k = document.activeElement
              , Q = V.shiftKey;
            if (V.target === C && Q) {
              m.current?.focus();
              return
            }
            const $ = A({
              tabbingDirection: Q ? "backwards" : "forwards"
            })
              , W = $.findIndex(ot => ot === k);
            af($.slice(W + 1)) ? V.preventDefault() : Q ? m.current?.focus() : y.current?.focus()
          }
        }
          ;
        return C.addEventListener("keydown", O),
          () => C.removeEventListener("keydown", O)
      }
    }
      , [h, A]),
      M.jsxs(KE, {
        ref: p,
        role: "region",
        "aria-label": l.replace("{hotkey}", S),
        tabIndex: -1,
        style: {
          pointerEvents: E ? void 0 : "none"
        },
        children: [E && M.jsx(Vf, {
          ref: m,
          onFocusFromOutsideViewport: () => {
            const C = A({
              tabbingDirection: "forwards"
            });
            af(C)
          }
        }), M.jsx(vd.Slot, {
          scope: a,
          children: M.jsx(xe.ol, {
            tabIndex: -1,
            ...c,
            ref: b
          })
        }), E && M.jsx(Vf, {
          ref: y,
          onFocusFromOutsideViewport: () => {
            const C = A({
              tabbingDirection: "backwards"
            });
            af(C)
          }
        })]
      })
  }
  );
F0.displayName = H0;
var q0 = "ToastFocusProxy"
  , Vf = w.forwardRef((e, i) => {
    const { __scopeToast: a, onFocusFromOutsideViewport: r, ...l } = e
      , c = El(q0, a);
    return M.jsx(wl, {
      tabIndex: 0,
      ...l,
      ref: i,
      style: {
        position: "fixed"
      },
      onFocus: d => {
        const h = d.relatedTarget;
        !c.viewport?.contains(h) && r()
      }
    })
  }
  );
Vf.displayName = q0;
var cr = "Toast"
  , uA = "toast.swipeStart"
  , cA = "toast.swipeMove"
  , fA = "toast.swipeCancel"
  , dA = "toast.swipeEnd"
  , G0 = w.forwardRef((e, i) => {
    const { forceMount: a, open: r, defaultOpen: l, onOpenChange: c, ...d } = e
      , [h, p] = IE({
        prop: r,
        defaultProp: l ?? !0,
        onChange: c,
        caller: cr
      });
    return M.jsx(Tl, {
      present: a || h,
      children: M.jsx(pA, {
        open: h,
        ...d,
        ref: i,
        onClose: () => p(!1),
        onPause: pi(e.onPause),
        onResume: pi(e.onResume),
        onSwipeStart: Jt(e.onSwipeStart, m => {
          m.currentTarget.setAttribute("data-swipe", "start")
        }
        ),
        onSwipeMove: Jt(e.onSwipeMove, m => {
          const { x: y, y: v } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "move"),
            m.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${y}px`),
            m.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${v}px`)
        }
        ),
        onSwipeCancel: Jt(e.onSwipeCancel, m => {
          m.currentTarget.setAttribute("data-swipe", "cancel"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-end-y")
        }
        ),
        onSwipeEnd: Jt(e.onSwipeEnd, m => {
          const { x: y, y: v } = m.detail.delta;
          m.currentTarget.setAttribute("data-swipe", "end"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
            m.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
            m.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${y}px`),
            m.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${v}px`),
            p(!1)
        }
        )
      })
    })
  }
  );
G0.displayName = cr;
var [hA, mA] = B0(cr, {
  onClose() { }
})
  , pA = w.forwardRef((e, i) => {
    const { __scopeToast: a, type: r = "foreground", duration: l, open: c, onClose: d, onEscapeKeyDown: h, onPause: p, onResume: m, onSwipeStart: y, onSwipeMove: v, onSwipeCancel: b, onSwipeEnd: S, ...E } = e
      , A = El(cr, a)
      , [C, O] = w.useState(null)
      , V = tn(i, I => O(I))
      , j = w.useRef(null)
      , L = w.useRef(null)
      , k = l || A.duration
      , Q = w.useRef(0)
      , Z = w.useRef(k)
      , H = w.useRef(0)
      , { onToastAdd: $, onToastRemove: W } = A
      , ot = pi(() => {
        C?.contains(document.activeElement) && A.viewport?.focus(),
          d()
      }
      )
      , lt = w.useCallback(I => {
        !I || I === 1 / 0 || (window.clearTimeout(H.current),
          Q.current = new Date().getTime(),
          H.current = window.setTimeout(ot, I))
      }
        , [ot]);
    w.useEffect(() => {
      const I = A.viewport;
      if (I) {
        const ct = () => {
          lt(Z.current),
            m?.()
        }
          , _ = () => {
            const K = new Date().getTime() - Q.current;
            Z.current = Z.current - K,
              window.clearTimeout(H.current),
              p?.()
          }
          ;
        return I.addEventListener(jf, _),
          I.addEventListener(_f, ct),
          () => {
            I.removeEventListener(jf, _),
              I.removeEventListener(_f, ct)
          }
      }
    }
      , [A.viewport, k, p, m, lt]),
      w.useEffect(() => {
        c && !A.isClosePausedRef.current && lt(k)
      }
        , [c, k, A.isClosePausedRef, lt]),
      w.useEffect(() => ($(),
        () => W()), [$, W]);
    const yt = w.useMemo(() => C ? $0(C) : null, [C]);
    return A.viewport ? M.jsxs(M.Fragment, {
      children: [yt && M.jsx(yA, {
        __scopeToast: a,
        role: "status",
        "aria-live": r === "foreground" ? "assertive" : "polite",
        children: yt
      }), M.jsx(hA, {
        scope: a,
        onClose: ot,
        children: xl.createPortal(M.jsx(vd.ItemSlot, {
          scope: a,
          children: M.jsx(XE, {
            asChild: !0,
            onEscapeKeyDown: Jt(h, () => {
              A.isFocusedToastEscapeKeyDownRef.current || ot(),
                A.isFocusedToastEscapeKeyDownRef.current = !1
            }
            ),
            children: M.jsx(xe.li, {
              tabIndex: 0,
              "data-state": c ? "open" : "closed",
              "data-swipe-direction": A.swipeDirection,
              ...E,
              ref: V,
              style: {
                userSelect: "none",
                touchAction: "none",
                ...e.style
              },
              onKeyDown: Jt(e.onKeyDown, I => {
                I.key === "Escape" && (h?.(I.nativeEvent),
                  I.nativeEvent.defaultPrevented || (A.isFocusedToastEscapeKeyDownRef.current = !0,
                    ot()))
              }
              ),
              onPointerDown: Jt(e.onPointerDown, I => {
                I.button === 0 && (j.current = {
                  x: I.clientX,
                  y: I.clientY
                })
              }
              ),
              onPointerMove: Jt(e.onPointerMove, I => {
                if (!j.current)
                  return;
                const ct = I.clientX - j.current.x
                  , _ = I.clientY - j.current.y
                  , K = !!L.current
                  , Y = ["left", "right"].includes(A.swipeDirection)
                  , et = ["left", "up"].includes(A.swipeDirection) ? Math.min : Math.max
                  , T = Y ? et(0, ct) : 0
                  , q = Y ? 0 : et(0, _)
                  , tt = I.pointerType === "touch" ? 10 : 2
                  , J = {
                    x: T,
                    y: q
                  }
                  , ut = {
                    originalEvent: I,
                    delta: J
                  };
                K ? (L.current = J,
                  Vo(cA, v, ut, {
                    discrete: !1
                  })) : Cg(J, A.swipeDirection, tt) ? (L.current = J,
                    Vo(uA, y, ut, {
                      discrete: !1
                    }),
                    I.target.setPointerCapture(I.pointerId)) : (Math.abs(ct) > tt || Math.abs(_) > tt) && (j.current = null)
              }
              ),
              onPointerUp: Jt(e.onPointerUp, I => {
                const ct = L.current
                  , _ = I.target;
                if (_.hasPointerCapture(I.pointerId) && _.releasePointerCapture(I.pointerId),
                  L.current = null,
                  j.current = null,
                  ct) {
                  const K = I.currentTarget
                    , Y = {
                      originalEvent: I,
                      delta: ct
                    };
                  Cg(ct, A.swipeDirection, A.swipeThreshold) ? Vo(dA, S, Y, {
                    discrete: !0
                  }) : Vo(fA, b, Y, {
                    discrete: !0
                  }),
                    K.addEventListener("click", et => et.preventDefault(), {
                      once: !0
                    })
                }
              }
              )
            })
          })
        }), A.viewport)
      })]
    }) : null
  }
  )
  , yA = e => {
    const { __scopeToast: i, children: a, ...r } = e
      , l = El(cr, i)
      , [c, d] = w.useState(!1)
      , [h, p] = w.useState(!1);
    return bA(() => d(!0)),
      w.useEffect(() => {
        const m = window.setTimeout(() => p(!0), 1e3);
        return () => window.clearTimeout(m)
      }
        , []),
      h ? null : M.jsx(yd, {
        asChild: !0,
        children: M.jsx(wl, {
          ...r,
          children: c && M.jsxs(M.Fragment, {
            children: [l.label, " ", a]
          })
        })
      })
  }
  , gA = "ToastTitle"
  , Y0 = w.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e;
    return M.jsx(xe.div, {
      ...r,
      ref: i
    })
  }
  );
Y0.displayName = gA;
var vA = "ToastDescription"
  , X0 = w.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e;
    return M.jsx(xe.div, {
      ...r,
      ref: i
    })
  }
  );
X0.displayName = vA;
var K0 = "ToastAction"
  , Q0 = w.forwardRef((e, i) => {
    const { altText: a, ...r } = e;
    return a.trim() ? M.jsx(W0, {
      altText: a,
      asChild: !0,
      children: M.jsx(bd, {
        ...r,
        ref: i
      })
    }) : (console.error(`Invalid prop \`altText\` supplied to \`${K0}\`. Expected non-empty \`string\`.`),
      null)
  }
  );
Q0.displayName = K0;
var Z0 = "ToastClose"
  , bd = w.forwardRef((e, i) => {
    const { __scopeToast: a, ...r } = e
      , l = mA(Z0, a);
    return M.jsx(W0, {
      asChild: !0,
      children: M.jsx(xe.button, {
        type: "button",
        ...r,
        ref: i,
        onClick: Jt(e.onClick, l.onClose)
      })
    })
  }
  );
bd.displayName = Z0;
var W0 = w.forwardRef((e, i) => {
  const { __scopeToast: a, altText: r, ...l } = e;
  return M.jsx(xe.div, {
    "data-radix-toast-announce-exclude": "",
    "data-radix-toast-announce-alt": r || void 0,
    ...l,
    ref: i
  })
}
);
function $0(e) {
  const i = [];
  return Array.from(e.childNodes).forEach(r => {
    if (r.nodeType === r.TEXT_NODE && r.textContent && i.push(r.textContent),
      xA(r)) {
      const l = r.ariaHidden || r.hidden || r.style.display === "none"
        , c = r.dataset.radixToastAnnounceExclude === "";
      if (!l)
        if (c) {
          const d = r.dataset.radixToastAnnounceAlt;
          d && i.push(d)
        } else
          i.push(...$0(r))
    }
  }
  ),
    i
}
function Vo(e, i, a, { discrete: r }) {
  const l = a.originalEvent.currentTarget
    , c = new CustomEvent(e, {
      bubbles: !0,
      cancelable: !0,
      detail: a
    });
  i && l.addEventListener(e, i, {
    once: !0
  }),
    r ? z0(l, c) : l.dispatchEvent(c)
}
var Cg = (e, i, a = 0) => {
  const r = Math.abs(e.x)
    , l = Math.abs(e.y)
    , c = r > l;
  return i === "left" || i === "right" ? c && r > a : !c && l > a
}
  ;
function bA(e = () => { }
) {
  const i = pi(e);
  yi(() => {
    let a = 0
      , r = 0;
    return a = window.requestAnimationFrame(() => r = window.requestAnimationFrame(i)),
      () => {
        window.cancelAnimationFrame(a),
          window.cancelAnimationFrame(r)
      }
  }
    , [i])
}
function xA(e) {
  return e.nodeType === e.ELEMENT_NODE
}
function SA(e) {
  const i = []
    , a = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
      acceptNode: r => {
        const l = r.tagName === "INPUT" && r.type === "hidden";
        return r.disabled || r.hidden || l ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
      }
    });
  for (; a.nextNode();)
    i.push(a.currentNode);
  return i
}
function af(e) {
  const i = document.activeElement;
  return e.some(a => a === i ? !0 : (a.focus(),
    document.activeElement !== i))
}
var TA = k0
  , J0 = F0
  , I0 = G0
  , tb = Y0
  , eb = X0
  , nb = Q0
  , ib = bd;
function sb(e) {
  var i, a, r = "";
  if (typeof e == "string" || typeof e == "number")
    r += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var l = e.length;
      for (i = 0; i < l; i++)
        e[i] && (a = sb(e[i])) && (r && (r += " "),
          r += a)
    } else
      for (a in e)
        e[a] && (r && (r += " "),
          r += a);
  return r
}
function ab() {
  for (var e, i, a = 0, r = "", l = arguments.length; a < l; a++)
    (e = arguments[a]) && (i = sb(e)) && (r && (r += " "),
      r += i);
  return r
}
const Rg = e => typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e
  , Mg = ab
  , wA = (e, i) => a => {
    var r;
    if (i?.variants == null)
      return Mg(e, a?.class, a?.className);
    const { variants: l, defaultVariants: c } = i
      , d = Object.keys(l).map(m => {
        const y = a?.[m]
          , v = c?.[m];
        if (y === null)
          return null;
        const b = Rg(y) || Rg(v);
        return l[m][b]
      }
      )
      , h = a && Object.entries(a).reduce((m, y) => {
        let [v, b] = y;
        return b === void 0 || (m[v] = b),
          m
      }
        , {})
      , p = i == null || (r = i.compoundVariants) === null || r === void 0 ? void 0 : r.reduce((m, y) => {
        let { class: v, className: b, ...S } = y;
        return Object.entries(S).every(E => {
          let [A, C] = E;
          return Array.isArray(C) ? C.includes({
            ...c,
            ...h
          }[A]) : {
            ...c,
            ...h
          }[A] === C
        }
        ) ? [...m, v, b] : m
      }
        , []);
    return Mg(e, d, p, a?.class, a?.className)
  }
  ;
const EA = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , AA = e => e.replace(/^([A-Z])|[\s-_]+(\w)/g, (i, a, r) => r ? r.toUpperCase() : a.toLowerCase())
  , Dg = e => {
    const i = AA(e);
    return i.charAt(0).toUpperCase() + i.slice(1)
  }
  , rb = (...e) => e.filter((i, a, r) => !!i && i.trim() !== "" && r.indexOf(i) === a).join(" ").trim()
  , CA = e => {
    for (const i in e)
      if (i.startsWith("aria-") || i === "role" || i === "title")
        return !0
  }
  ;
var RA = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const MA = w.forwardRef(({ color: e = "currentColor", size: i = 24, strokeWidth: a = 2, absoluteStrokeWidth: r, className: l = "", children: c, iconNode: d, ...h }, p) => w.createElement("svg", {
  ref: p,
  ...RA,
  width: i,
  height: i,
  stroke: e,
  strokeWidth: r ? Number(a) * 24 / Number(i) : a,
  className: rb("lucide", l),
  ...!c && !CA(h) && {
    "aria-hidden": "true"
  },
  ...h
}, [...d.map(([m, y]) => w.createElement(m, y)), ...Array.isArray(c) ? c : [c]]));
const ob = (e, i) => {
  const a = w.forwardRef(({ className: r, ...l }, c) => w.createElement(MA, {
    ref: c,
    iconNode: i,
    className: rb(`lucide-${EA(Dg(e))}`, `lucide-${e}`, r),
    ...l
  }));
  return a.displayName = Dg(e),
    a
}
  ;
const DA = [["circle", {
  cx: "12",
  cy: "12",
  r: "10",
  key: "1mglay"
}], ["line", {
  x1: "12",
  x2: "12",
  y1: "8",
  y2: "12",
  key: "1pkeuh"
}], ["line", {
  x1: "12",
  x2: "12.01",
  y1: "16",
  y2: "16",
  key: "4dfq90"
}]]
  , OA = ob("circle-alert", DA);
const NA = [["path", {
  d: "M18 6 6 18",
  key: "1bl5f8"
}], ["path", {
  d: "m6 6 12 12",
  key: "d8bk6v"
}]]
  , jA = ob("x", NA)
  , _A = (e, i) => {
    const a = new Array(e.length + i.length);
    for (let r = 0; r < e.length; r++)
      a[r] = e[r];
    for (let r = 0; r < i.length; r++)
      a[e.length + r] = i[r];
    return a
  }
  , VA = (e, i) => ({
    classGroupId: e,
    validator: i
  })
  , lb = (e = new Map, i = null, a) => ({
    nextPart: e,
    validators: i,
    classGroupId: a
  })
  , nl = "-"
  , Og = []
  , zA = "arbitrary.."
  , LA = e => {
    const i = UA(e)
      , { conflictingClassGroups: a, conflictingClassGroupModifiers: r } = e;
    return {
      getClassGroupId: d => {
        if (d.startsWith("[") && d.endsWith("]"))
          return PA(d);
        const h = d.split(nl)
          , p = h[0] === "" && h.length > 1 ? 1 : 0;
        return ub(h, p, i)
      }
      ,
      getConflictingClassGroupIds: (d, h) => {
        if (h) {
          const p = r[d]
            , m = a[d];
          return p ? m ? _A(m, p) : p : m || Og
        }
        return a[d] || Og
      }
    }
  }
  , ub = (e, i, a) => {
    if (e.length - i === 0)
      return a.classGroupId;
    const l = e[i]
      , c = a.nextPart.get(l);
    if (c) {
      const m = ub(e, i + 1, c);
      if (m)
        return m
    }
    const d = a.validators;
    if (d === null)
      return;
    const h = i === 0 ? e.join(nl) : e.slice(i).join(nl)
      , p = d.length;
    for (let m = 0; m < p; m++) {
      const y = d[m];
      if (y.validator(h))
        return y.classGroupId
    }
  }
  , PA = e => e.slice(1, -1).indexOf(":") === -1 ? void 0 : (() => {
    const i = e.slice(1, -1)
      , a = i.indexOf(":")
      , r = i.slice(0, a);
    return r ? zA + r : void 0
  }
  )()
  , UA = e => {
    const { theme: i, classGroups: a } = e;
    return BA(a, i)
  }
  , BA = (e, i) => {
    const a = lb();
    for (const r in e) {
      const l = e[r];
      xd(l, a, r, i)
    }
    return a
  }
  , xd = (e, i, a, r) => {
    const l = e.length;
    for (let c = 0; c < l; c++) {
      const d = e[c];
      kA(d, i, a, r)
    }
  }
  , kA = (e, i, a, r) => {
    if (typeof e == "string") {
      HA(e, i, a);
      return
    }
    if (typeof e == "function") {
      FA(e, i, a, r);
      return
    }
    qA(e, i, a, r)
  }
  , HA = (e, i, a) => {
    const r = e === "" ? i : cb(i, e);
    r.classGroupId = a
  }
  , FA = (e, i, a, r) => {
    if (GA(e)) {
      xd(e(r), i, a, r);
      return
    }
    i.validators === null && (i.validators = []),
      i.validators.push(VA(a, e))
  }
  , qA = (e, i, a, r) => {
    const l = Object.entries(e)
      , c = l.length;
    for (let d = 0; d < c; d++) {
      const [h, p] = l[d];
      xd(p, cb(i, h), a, r)
    }
  }
  , cb = (e, i) => {
    let a = e;
    const r = i.split(nl)
      , l = r.length;
    for (let c = 0; c < l; c++) {
      const d = r[c];
      let h = a.nextPart.get(d);
      h || (h = lb(),
        a.nextPart.set(d, h)),
        a = h
    }
    return a
  }
  , GA = e => "isThemeGetter" in e && e.isThemeGetter === !0
  , YA = e => {
    if (e < 1)
      return {
        get: () => { }
        ,
        set: () => { }
      };
    let i = 0
      , a = Object.create(null)
      , r = Object.create(null);
    const l = (c, d) => {
      a[c] = d,
        i++,
        i > e && (i = 0,
          r = a,
          a = Object.create(null))
    }
      ;
    return {
      get(c) {
        let d = a[c];
        if (d !== void 0)
          return d;
        if ((d = r[c]) !== void 0)
          return l(c, d),
            d
      },
      set(c, d) {
        c in a ? a[c] = d : l(c, d)
      }
    }
  }
  , zf = "!"
  , Ng = ":"
  , XA = []
  , jg = (e, i, a, r, l) => ({
    modifiers: e,
    hasImportantModifier: i,
    baseClassName: a,
    maybePostfixModifierPosition: r,
    isExternal: l
  })
  , KA = e => {
    const { prefix: i, experimentalParseClassName: a } = e;
    let r = l => {
      const c = [];
      let d = 0, h = 0, p = 0, m;
      const y = l.length;
      for (let A = 0; A < y; A++) {
        const C = l[A];
        if (d === 0 && h === 0) {
          if (C === Ng) {
            c.push(l.slice(p, A)),
              p = A + 1;
            continue
          }
          if (C === "/") {
            m = A;
            continue
          }
        }
        C === "[" ? d++ : C === "]" ? d-- : C === "(" ? h++ : C === ")" && h--
      }
      const v = c.length === 0 ? l : l.slice(p);
      let b = v
        , S = !1;
      v.endsWith(zf) ? (b = v.slice(0, -1),
        S = !0) : v.startsWith(zf) && (b = v.slice(1),
          S = !0);
      const E = m && m > p ? m - p : void 0;
      return jg(c, S, b, E)
    }
      ;
    if (i) {
      const l = i + Ng
        , c = r;
      r = d => d.startsWith(l) ? c(d.slice(l.length)) : jg(XA, !1, d, void 0, !0)
    }
    if (a) {
      const l = r;
      r = c => a({
        className: c,
        parseClassName: l
      })
    }
    return r
  }
  , QA = e => {
    const i = new Map;
    return e.orderSensitiveModifiers.forEach((a, r) => {
      i.set(a, 1e6 + r)
    }
    ),
      a => {
        const r = [];
        let l = [];
        for (let c = 0; c < a.length; c++) {
          const d = a[c]
            , h = d[0] === "["
            , p = i.has(d);
          h || p ? (l.length > 0 && (l.sort(),
            r.push(...l),
            l = []),
            r.push(d)) : l.push(d)
        }
        return l.length > 0 && (l.sort(),
          r.push(...l)),
          r
      }
  }
  , ZA = e => ({
    cache: YA(e.cacheSize),
    parseClassName: KA(e),
    sortModifiers: QA(e),
    ...LA(e)
  })
  , WA = /\s+/
  , $A = (e, i) => {
    const { parseClassName: a, getClassGroupId: r, getConflictingClassGroupIds: l, sortModifiers: c } = i
      , d = []
      , h = e.trim().split(WA);
    let p = "";
    for (let m = h.length - 1; m >= 0; m -= 1) {
      const y = h[m]
        , { isExternal: v, modifiers: b, hasImportantModifier: S, baseClassName: E, maybePostfixModifierPosition: A } = a(y);
      if (v) {
        p = y + (p.length > 0 ? " " + p : p);
        continue
      }
      let C = !!A
        , O = r(C ? E.substring(0, A) : E);
      if (!O) {
        if (!C) {
          p = y + (p.length > 0 ? " " + p : p);
          continue
        }
        if (O = r(E),
          !O) {
          p = y + (p.length > 0 ? " " + p : p);
          continue
        }
        C = !1
      }
      const V = b.length === 0 ? "" : b.length === 1 ? b[0] : c(b).join(":")
        , j = S ? V + zf : V
        , L = j + O;
      if (d.indexOf(L) > -1)
        continue;
      d.push(L);
      const k = l(O, C);
      for (let Q = 0; Q < k.length; ++Q) {
        const Z = k[Q];
        d.push(j + Z)
      }
      p = y + (p.length > 0 ? " " + p : p)
    }
    return p
  }
  , JA = (...e) => {
    let i = 0, a, r, l = "";
    for (; i < e.length;)
      (a = e[i++]) && (r = fb(a)) && (l && (l += " "),
        l += r);
    return l
  }
  , fb = e => {
    if (typeof e == "string")
      return e;
    let i, a = "";
    for (let r = 0; r < e.length; r++)
      e[r] && (i = fb(e[r])) && (a && (a += " "),
        a += i);
    return a
  }
  , IA = (e, ...i) => {
    let a, r, l, c;
    const d = p => {
      const m = i.reduce((y, v) => v(y), e());
      return a = ZA(m),
        r = a.cache.get,
        l = a.cache.set,
        c = h,
        h(p)
    }
      , h = p => {
        const m = r(p);
        if (m)
          return m;
        const y = $A(p, a);
        return l(p, y),
          y
      }
      ;
    return c = d,
      (...p) => c(JA(...p))
  }
  , tC = []
  , Wt = e => {
    const i = a => a[e] || tC;
    return i.isThemeGetter = !0,
      i
  }
  , db = /^\[(?:(\w[\w-]*):)?(.+)\]$/i
  , hb = /^\((?:(\w[\w-]*):)?(.+)\)$/i
  , eC = /^\d+(?:\.\d+)?\/\d+(?:\.\d+)?$/
  , nC = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , iC = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , sC = /^(rgba?|hsla?|hwb|(ok)?(lab|lch)|color-mix)\(.+\)$/
  , aC = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , rC = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/
  , ci = e => eC.test(e)
  , bt = e => !!e && !Number.isNaN(Number(e))
  , fi = e => !!e && Number.isInteger(Number(e))
  , rf = e => e.endsWith("%") && bt(e.slice(0, -1))
  , _n = e => nC.test(e)
  , mb = () => !0
  , oC = e => iC.test(e) && !sC.test(e)
  , Sd = () => !1
  , lC = e => aC.test(e)
  , uC = e => rC.test(e)
  , cC = e => !it(e) && !at(e)
  , fC = e => Si(e, gb, Sd)
  , it = e => db.test(e)
  , Hi = e => Si(e, vb, oC)
  , _g = e => Si(e, bC, bt)
  , dC = e => Si(e, xb, mb)
  , hC = e => Si(e, bb, Sd)
  , Vg = e => Si(e, pb, Sd)
  , mC = e => Si(e, yb, uC)
  , zo = e => Si(e, Sb, lC)
  , at = e => hb.test(e)
  , Za = e => $i(e, vb)
  , pC = e => $i(e, bb)
  , zg = e => $i(e, pb)
  , yC = e => $i(e, gb)
  , gC = e => $i(e, yb)
  , Lo = e => $i(e, Sb, !0)
  , vC = e => $i(e, xb, !0)
  , Si = (e, i, a) => {
    const r = db.exec(e);
    return r ? r[1] ? i(r[1]) : a(r[2]) : !1
  }
  , $i = (e, i, a = !1) => {
    const r = hb.exec(e);
    return r ? r[1] ? i(r[1]) : a : !1
  }
  , pb = e => e === "position" || e === "percentage"
  , yb = e => e === "image" || e === "url"
  , gb = e => e === "length" || e === "size" || e === "bg-size"
  , vb = e => e === "length"
  , bC = e => e === "number"
  , bb = e => e === "family-name"
  , xb = e => e === "number" || e === "weight"
  , Sb = e => e === "shadow"
  , xC = () => {
    const e = Wt("color")
      , i = Wt("font")
      , a = Wt("text")
      , r = Wt("font-weight")
      , l = Wt("tracking")
      , c = Wt("leading")
      , d = Wt("breakpoint")
      , h = Wt("container")
      , p = Wt("spacing")
      , m = Wt("radius")
      , y = Wt("shadow")
      , v = Wt("inset-shadow")
      , b = Wt("text-shadow")
      , S = Wt("drop-shadow")
      , E = Wt("blur")
      , A = Wt("perspective")
      , C = Wt("aspect")
      , O = Wt("ease")
      , V = Wt("animate")
      , j = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , L = () => ["center", "top", "bottom", "left", "right", "top-left", "left-top", "top-right", "right-top", "bottom-right", "right-bottom", "bottom-left", "left-bottom"]
      , k = () => [...L(), at, it]
      , Q = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , Z = () => ["auto", "contain", "none"]
      , H = () => [at, it, p]
      , $ = () => [ci, "full", "auto", ...H()]
      , W = () => [fi, "none", "subgrid", at, it]
      , ot = () => ["auto", {
        span: ["full", fi, at, it]
      }, fi, at, it]
      , lt = () => [fi, "auto", at, it]
      , yt = () => ["auto", "min", "max", "fr", at, it]
      , I = () => ["start", "end", "center", "between", "around", "evenly", "stretch", "baseline", "center-safe", "end-safe"]
      , ct = () => ["start", "end", "center", "stretch", "center-safe", "end-safe"]
      , _ = () => ["auto", ...H()]
      , K = () => [ci, "auto", "full", "dvw", "dvh", "lvw", "lvh", "svw", "svh", "min", "max", "fit", ...H()]
      , Y = () => [ci, "screen", "full", "dvw", "lvw", "svw", "min", "max", "fit", ...H()]
      , et = () => [ci, "screen", "full", "lh", "dvh", "lvh", "svh", "min", "max", "fit", ...H()]
      , T = () => [e, at, it]
      , q = () => [...L(), zg, Vg, {
        position: [at, it]
      }]
      , tt = () => ["no-repeat", {
        repeat: ["", "x", "y", "space", "round"]
      }]
      , J = () => ["auto", "cover", "contain", yC, fC, {
        size: [at, it]
      }]
      , ut = () => [rf, Za, Hi]
      , ht = () => ["", "none", "full", m, at, it]
      , rt = () => ["", bt, Za, Hi]
      , Pt = () => ["solid", "dashed", "dotted", "double"]
      , Ct = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , Rt = () => [bt, rf, zg, Vg]
      , Un = () => ["", "none", E, at, it]
      , Xe = () => ["none", bt, at, it]
      , sn = () => ["none", bt, at, it]
      , Ve = () => [bt, at, it]
      , Bn = () => [ci, "full", ...H()];
    return {
      cacheSize: 500,
      theme: {
        animate: ["spin", "ping", "pulse", "bounce"],
        aspect: ["video"],
        blur: [_n],
        breakpoint: [_n],
        color: [mb],
        container: [_n],
        "drop-shadow": [_n],
        ease: ["in", "out", "in-out"],
        font: [cC],
        "font-weight": ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
        "inset-shadow": [_n],
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose"],
        perspective: ["dramatic", "near", "normal", "midrange", "distant", "none"],
        radius: [_n],
        shadow: [_n],
        spacing: ["px", bt],
        text: [_n],
        "text-shadow": [_n],
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest"]
      },
      classGroups: {
        aspect: [{
          aspect: ["auto", "square", ci, it, at, C]
        }],
        container: ["container"],
        columns: [{
          columns: [bt, it, at, h]
        }],
        "break-after": [{
          "break-after": j()
        }],
        "break-before": [{
          "break-before": j()
        }],
        "break-inside": [{
          "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
        }],
        "box-decoration": [{
          "box-decoration": ["slice", "clone"]
        }],
        box: [{
          box: ["border", "content"]
        }],
        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
        sr: ["sr-only", "not-sr-only"],
        float: [{
          float: ["right", "left", "none", "start", "end"]
        }],
        clear: [{
          clear: ["left", "right", "both", "none", "start", "end"]
        }],
        isolation: ["isolate", "isolation-auto"],
        "object-fit": [{
          object: ["contain", "cover", "fill", "none", "scale-down"]
        }],
        "object-position": [{
          object: k()
        }],
        overflow: [{
          overflow: Q()
        }],
        "overflow-x": [{
          "overflow-x": Q()
        }],
        "overflow-y": [{
          "overflow-y": Q()
        }],
        overscroll: [{
          overscroll: Z()
        }],
        "overscroll-x": [{
          "overscroll-x": Z()
        }],
        "overscroll-y": [{
          "overscroll-y": Z()
        }],
        position: ["static", "fixed", "absolute", "relative", "sticky"],
        inset: [{
          inset: $()
        }],
        "inset-x": [{
          "inset-x": $()
        }],
        "inset-y": [{
          "inset-y": $()
        }],
        start: [{
          "inset-s": $(),
          start: $()
        }],
        end: [{
          "inset-e": $(),
          end: $()
        }],
        "inset-bs": [{
          "inset-bs": $()
        }],
        "inset-be": [{
          "inset-be": $()
        }],
        top: [{
          top: $()
        }],
        right: [{
          right: $()
        }],
        bottom: [{
          bottom: $()
        }],
        left: [{
          left: $()
        }],
        visibility: ["visible", "invisible", "collapse"],
        z: [{
          z: [fi, "auto", at, it]
        }],
        basis: [{
          basis: [ci, "full", "auto", h, ...H()]
        }],
        "flex-direction": [{
          flex: ["row", "row-reverse", "col", "col-reverse"]
        }],
        "flex-wrap": [{
          flex: ["nowrap", "wrap", "wrap-reverse"]
        }],
        flex: [{
          flex: [bt, ci, "auto", "initial", "none", it]
        }],
        grow: [{
          grow: ["", bt, at, it]
        }],
        shrink: [{
          shrink: ["", bt, at, it]
        }],
        order: [{
          order: [fi, "first", "last", "none", at, it]
        }],
        "grid-cols": [{
          "grid-cols": W()
        }],
        "col-start-end": [{
          col: ot()
        }],
        "col-start": [{
          "col-start": lt()
        }],
        "col-end": [{
          "col-end": lt()
        }],
        "grid-rows": [{
          "grid-rows": W()
        }],
        "row-start-end": [{
          row: ot()
        }],
        "row-start": [{
          "row-start": lt()
        }],
        "row-end": [{
          "row-end": lt()
        }],
        "grid-flow": [{
          "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
        }],
        "auto-cols": [{
          "auto-cols": yt()
        }],
        "auto-rows": [{
          "auto-rows": yt()
        }],
        gap: [{
          gap: H()
        }],
        "gap-x": [{
          "gap-x": H()
        }],
        "gap-y": [{
          "gap-y": H()
        }],
        "justify-content": [{
          justify: [...I(), "normal"]
        }],
        "justify-items": [{
          "justify-items": [...ct(), "normal"]
        }],
        "justify-self": [{
          "justify-self": ["auto", ...ct()]
        }],
        "align-content": [{
          content: ["normal", ...I()]
        }],
        "align-items": [{
          items: [...ct(), {
            baseline: ["", "last"]
          }]
        }],
        "align-self": [{
          self: ["auto", ...ct(), {
            baseline: ["", "last"]
          }]
        }],
        "place-content": [{
          "place-content": I()
        }],
        "place-items": [{
          "place-items": [...ct(), "baseline"]
        }],
        "place-self": [{
          "place-self": ["auto", ...ct()]
        }],
        p: [{
          p: H()
        }],
        px: [{
          px: H()
        }],
        py: [{
          py: H()
        }],
        ps: [{
          ps: H()
        }],
        pe: [{
          pe: H()
        }],
        pbs: [{
          pbs: H()
        }],
        pbe: [{
          pbe: H()
        }],
        pt: [{
          pt: H()
        }],
        pr: [{
          pr: H()
        }],
        pb: [{
          pb: H()
        }],
        pl: [{
          pl: H()
        }],
        m: [{
          m: _()
        }],
        mx: [{
          mx: _()
        }],
        my: [{
          my: _()
        }],
        ms: [{
          ms: _()
        }],
        me: [{
          me: _()
        }],
        mbs: [{
          mbs: _()
        }],
        mbe: [{
          mbe: _()
        }],
        mt: [{
          mt: _()
        }],
        mr: [{
          mr: _()
        }],
        mb: [{
          mb: _()
        }],
        ml: [{
          ml: _()
        }],
        "space-x": [{
          "space-x": H()
        }],
        "space-x-reverse": ["space-x-reverse"],
        "space-y": [{
          "space-y": H()
        }],
        "space-y-reverse": ["space-y-reverse"],
        size: [{
          size: K()
        }],
        "inline-size": [{
          inline: ["auto", ...Y()]
        }],
        "min-inline-size": [{
          "min-inline": ["auto", ...Y()]
        }],
        "max-inline-size": [{
          "max-inline": ["none", ...Y()]
        }],
        "block-size": [{
          block: ["auto", ...et()]
        }],
        "min-block-size": [{
          "min-block": ["auto", ...et()]
        }],
        "max-block-size": [{
          "max-block": ["none", ...et()]
        }],
        w: [{
          w: [h, "screen", ...K()]
        }],
        "min-w": [{
          "min-w": [h, "screen", "none", ...K()]
        }],
        "max-w": [{
          "max-w": [h, "screen", "none", "prose", {
            screen: [d]
          }, ...K()]
        }],
        h: [{
          h: ["screen", "lh", ...K()]
        }],
        "min-h": [{
          "min-h": ["screen", "lh", "none", ...K()]
        }],
        "max-h": [{
          "max-h": ["screen", "lh", ...K()]
        }],
        "font-size": [{
          text: ["base", a, Za, Hi]
        }],
        "font-smoothing": ["antialiased", "subpixel-antialiased"],
        "font-style": ["italic", "not-italic"],
        "font-weight": [{
          font: [r, vC, dC]
        }],
        "font-stretch": [{
          "font-stretch": ["ultra-condensed", "extra-condensed", "condensed", "semi-condensed", "normal", "semi-expanded", "expanded", "extra-expanded", "ultra-expanded", rf, it]
        }],
        "font-family": [{
          font: [pC, hC, i]
        }],
        "font-features": [{
          "font-features": [it]
        }],
        "fvn-normal": ["normal-nums"],
        "fvn-ordinal": ["ordinal"],
        "fvn-slashed-zero": ["slashed-zero"],
        "fvn-figure": ["lining-nums", "oldstyle-nums"],
        "fvn-spacing": ["proportional-nums", "tabular-nums"],
        "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
        tracking: [{
          tracking: [l, at, it]
        }],
        "line-clamp": [{
          "line-clamp": [bt, "none", at, _g]
        }],
        leading: [{
          leading: [c, ...H()]
        }],
        "list-image": [{
          "list-image": ["none", at, it]
        }],
        "list-style-position": [{
          list: ["inside", "outside"]
        }],
        "list-style-type": [{
          list: ["disc", "decimal", "none", at, it]
        }],
        "text-alignment": [{
          text: ["left", "center", "right", "justify", "start", "end"]
        }],
        "placeholder-color": [{
          placeholder: T()
        }],
        "text-color": [{
          text: T()
        }],
        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
        "text-decoration-style": [{
          decoration: [...Pt(), "wavy"]
        }],
        "text-decoration-thickness": [{
          decoration: [bt, "from-font", "auto", at, Hi]
        }],
        "text-decoration-color": [{
          decoration: T()
        }],
        "underline-offset": [{
          "underline-offset": [bt, "auto", at, it]
        }],
        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
        "text-wrap": [{
          text: ["wrap", "nowrap", "balance", "pretty"]
        }],
        indent: [{
          indent: H()
        }],
        "vertical-align": [{
          align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", at, it]
        }],
        whitespace: [{
          whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
        }],
        break: [{
          break: ["normal", "words", "all", "keep"]
        }],
        wrap: [{
          wrap: ["break-word", "anywhere", "normal"]
        }],
        hyphens: [{
          hyphens: ["none", "manual", "auto"]
        }],
        content: [{
          content: ["none", at, it]
        }],
        "bg-attachment": [{
          bg: ["fixed", "local", "scroll"]
        }],
        "bg-clip": [{
          "bg-clip": ["border", "padding", "content", "text"]
        }],
        "bg-origin": [{
          "bg-origin": ["border", "padding", "content"]
        }],
        "bg-position": [{
          bg: q()
        }],
        "bg-repeat": [{
          bg: tt()
        }],
        "bg-size": [{
          bg: J()
        }],
        "bg-image": [{
          bg: ["none", {
            linear: [{
              to: ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
            }, fi, at, it],
            radial: ["", at, it],
            conic: [fi, at, it]
          }, gC, mC]
        }],
        "bg-color": [{
          bg: T()
        }],
        "gradient-from-pos": [{
          from: ut()
        }],
        "gradient-via-pos": [{
          via: ut()
        }],
        "gradient-to-pos": [{
          to: ut()
        }],
        "gradient-from": [{
          from: T()
        }],
        "gradient-via": [{
          via: T()
        }],
        "gradient-to": [{
          to: T()
        }],
        rounded: [{
          rounded: ht()
        }],
        "rounded-s": [{
          "rounded-s": ht()
        }],
        "rounded-e": [{
          "rounded-e": ht()
        }],
        "rounded-t": [{
          "rounded-t": ht()
        }],
        "rounded-r": [{
          "rounded-r": ht()
        }],
        "rounded-b": [{
          "rounded-b": ht()
        }],
        "rounded-l": [{
          "rounded-l": ht()
        }],
        "rounded-ss": [{
          "rounded-ss": ht()
        }],
        "rounded-se": [{
          "rounded-se": ht()
        }],
        "rounded-ee": [{
          "rounded-ee": ht()
        }],
        "rounded-es": [{
          "rounded-es": ht()
        }],
        "rounded-tl": [{
          "rounded-tl": ht()
        }],
        "rounded-tr": [{
          "rounded-tr": ht()
        }],
        "rounded-br": [{
          "rounded-br": ht()
        }],
        "rounded-bl": [{
          "rounded-bl": ht()
        }],
        "border-w": [{
          border: rt()
        }],
        "border-w-x": [{
          "border-x": rt()
        }],
        "border-w-y": [{
          "border-y": rt()
        }],
        "border-w-s": [{
          "border-s": rt()
        }],
        "border-w-e": [{
          "border-e": rt()
        }],
        "border-w-bs": [{
          "border-bs": rt()
        }],
        "border-w-be": [{
          "border-be": rt()
        }],
        "border-w-t": [{
          "border-t": rt()
        }],
        "border-w-r": [{
          "border-r": rt()
        }],
        "border-w-b": [{
          "border-b": rt()
        }],
        "border-w-l": [{
          "border-l": rt()
        }],
        "divide-x": [{
          "divide-x": rt()
        }],
        "divide-x-reverse": ["divide-x-reverse"],
        "divide-y": [{
          "divide-y": rt()
        }],
        "divide-y-reverse": ["divide-y-reverse"],
        "border-style": [{
          border: [...Pt(), "hidden", "none"]
        }],
        "divide-style": [{
          divide: [...Pt(), "hidden", "none"]
        }],
        "border-color": [{
          border: T()
        }],
        "border-color-x": [{
          "border-x": T()
        }],
        "border-color-y": [{
          "border-y": T()
        }],
        "border-color-s": [{
          "border-s": T()
        }],
        "border-color-e": [{
          "border-e": T()
        }],
        "border-color-bs": [{
          "border-bs": T()
        }],
        "border-color-be": [{
          "border-be": T()
        }],
        "border-color-t": [{
          "border-t": T()
        }],
        "border-color-r": [{
          "border-r": T()
        }],
        "border-color-b": [{
          "border-b": T()
        }],
        "border-color-l": [{
          "border-l": T()
        }],
        "divide-color": [{
          divide: T()
        }],
        "outline-style": [{
          outline: [...Pt(), "none", "hidden"]
        }],
        "outline-offset": [{
          "outline-offset": [bt, at, it]
        }],
        "outline-w": [{
          outline: ["", bt, Za, Hi]
        }],
        "outline-color": [{
          outline: T()
        }],
        shadow: [{
          shadow: ["", "none", y, Lo, zo]
        }],
        "shadow-color": [{
          shadow: T()
        }],
        "inset-shadow": [{
          "inset-shadow": ["none", v, Lo, zo]
        }],
        "inset-shadow-color": [{
          "inset-shadow": T()
        }],
        "ring-w": [{
          ring: rt()
        }],
        "ring-w-inset": ["ring-inset"],
        "ring-color": [{
          ring: T()
        }],
        "ring-offset-w": [{
          "ring-offset": [bt, Hi]
        }],
        "ring-offset-color": [{
          "ring-offset": T()
        }],
        "inset-ring-w": [{
          "inset-ring": rt()
        }],
        "inset-ring-color": [{
          "inset-ring": T()
        }],
        "text-shadow": [{
          "text-shadow": ["none", b, Lo, zo]
        }],
        "text-shadow-color": [{
          "text-shadow": T()
        }],
        opacity: [{
          opacity: [bt, at, it]
        }],
        "mix-blend": [{
          "mix-blend": [...Ct(), "plus-darker", "plus-lighter"]
        }],
        "bg-blend": [{
          "bg-blend": Ct()
        }],
        "mask-clip": [{
          "mask-clip": ["border", "padding", "content", "fill", "stroke", "view"]
        }, "mask-no-clip"],
        "mask-composite": [{
          mask: ["add", "subtract", "intersect", "exclude"]
        }],
        "mask-image-linear-pos": [{
          "mask-linear": [bt]
        }],
        "mask-image-linear-from-pos": [{
          "mask-linear-from": Rt()
        }],
        "mask-image-linear-to-pos": [{
          "mask-linear-to": Rt()
        }],
        "mask-image-linear-from-color": [{
          "mask-linear-from": T()
        }],
        "mask-image-linear-to-color": [{
          "mask-linear-to": T()
        }],
        "mask-image-t-from-pos": [{
          "mask-t-from": Rt()
        }],
        "mask-image-t-to-pos": [{
          "mask-t-to": Rt()
        }],
        "mask-image-t-from-color": [{
          "mask-t-from": T()
        }],
        "mask-image-t-to-color": [{
          "mask-t-to": T()
        }],
        "mask-image-r-from-pos": [{
          "mask-r-from": Rt()
        }],
        "mask-image-r-to-pos": [{
          "mask-r-to": Rt()
        }],
        "mask-image-r-from-color": [{
          "mask-r-from": T()
        }],
        "mask-image-r-to-color": [{
          "mask-r-to": T()
        }],
        "mask-image-b-from-pos": [{
          "mask-b-from": Rt()
        }],
        "mask-image-b-to-pos": [{
          "mask-b-to": Rt()
        }],
        "mask-image-b-from-color": [{
          "mask-b-from": T()
        }],
        "mask-image-b-to-color": [{
          "mask-b-to": T()
        }],
        "mask-image-l-from-pos": [{
          "mask-l-from": Rt()
        }],
        "mask-image-l-to-pos": [{
          "mask-l-to": Rt()
        }],
        "mask-image-l-from-color": [{
          "mask-l-from": T()
        }],
        "mask-image-l-to-color": [{
          "mask-l-to": T()
        }],
        "mask-image-x-from-pos": [{
          "mask-x-from": Rt()
        }],
        "mask-image-x-to-pos": [{
          "mask-x-to": Rt()
        }],
        "mask-image-x-from-color": [{
          "mask-x-from": T()
        }],
        "mask-image-x-to-color": [{
          "mask-x-to": T()
        }],
        "mask-image-y-from-pos": [{
          "mask-y-from": Rt()
        }],
        "mask-image-y-to-pos": [{
          "mask-y-to": Rt()
        }],
        "mask-image-y-from-color": [{
          "mask-y-from": T()
        }],
        "mask-image-y-to-color": [{
          "mask-y-to": T()
        }],
        "mask-image-radial": [{
          "mask-radial": [at, it]
        }],
        "mask-image-radial-from-pos": [{
          "mask-radial-from": Rt()
        }],
        "mask-image-radial-to-pos": [{
          "mask-radial-to": Rt()
        }],
        "mask-image-radial-from-color": [{
          "mask-radial-from": T()
        }],
        "mask-image-radial-to-color": [{
          "mask-radial-to": T()
        }],
        "mask-image-radial-shape": [{
          "mask-radial": ["circle", "ellipse"]
        }],
        "mask-image-radial-size": [{
          "mask-radial": [{
            closest: ["side", "corner"],
            farthest: ["side", "corner"]
          }]
        }],
        "mask-image-radial-pos": [{
          "mask-radial-at": L()
        }],
        "mask-image-conic-pos": [{
          "mask-conic": [bt]
        }],
        "mask-image-conic-from-pos": [{
          "mask-conic-from": Rt()
        }],
        "mask-image-conic-to-pos": [{
          "mask-conic-to": Rt()
        }],
        "mask-image-conic-from-color": [{
          "mask-conic-from": T()
        }],
        "mask-image-conic-to-color": [{
          "mask-conic-to": T()
        }],
        "mask-mode": [{
          mask: ["alpha", "luminance", "match"]
        }],
        "mask-origin": [{
          "mask-origin": ["border", "padding", "content", "fill", "stroke", "view"]
        }],
        "mask-position": [{
          mask: q()
        }],
        "mask-repeat": [{
          mask: tt()
        }],
        "mask-size": [{
          mask: J()
        }],
        "mask-type": [{
          "mask-type": ["alpha", "luminance"]
        }],
        "mask-image": [{
          mask: ["none", at, it]
        }],
        filter: [{
          filter: ["", "none", at, it]
        }],
        blur: [{
          blur: Un()
        }],
        brightness: [{
          brightness: [bt, at, it]
        }],
        contrast: [{
          contrast: [bt, at, it]
        }],
        "drop-shadow": [{
          "drop-shadow": ["", "none", S, Lo, zo]
        }],
        "drop-shadow-color": [{
          "drop-shadow": T()
        }],
        grayscale: [{
          grayscale: ["", bt, at, it]
        }],
        "hue-rotate": [{
          "hue-rotate": [bt, at, it]
        }],
        invert: [{
          invert: ["", bt, at, it]
        }],
        saturate: [{
          saturate: [bt, at, it]
        }],
        sepia: [{
          sepia: ["", bt, at, it]
        }],
        "backdrop-filter": [{
          "backdrop-filter": ["", "none", at, it]
        }],
        "backdrop-blur": [{
          "backdrop-blur": Un()
        }],
        "backdrop-brightness": [{
          "backdrop-brightness": [bt, at, it]
        }],
        "backdrop-contrast": [{
          "backdrop-contrast": [bt, at, it]
        }],
        "backdrop-grayscale": [{
          "backdrop-grayscale": ["", bt, at, it]
        }],
        "backdrop-hue-rotate": [{
          "backdrop-hue-rotate": [bt, at, it]
        }],
        "backdrop-invert": [{
          "backdrop-invert": ["", bt, at, it]
        }],
        "backdrop-opacity": [{
          "backdrop-opacity": [bt, at, it]
        }],
        "backdrop-saturate": [{
          "backdrop-saturate": [bt, at, it]
        }],
        "backdrop-sepia": [{
          "backdrop-sepia": ["", bt, at, it]
        }],
        "border-collapse": [{
          border: ["collapse", "separate"]
        }],
        "border-spacing": [{
          "border-spacing": H()
        }],
        "border-spacing-x": [{
          "border-spacing-x": H()
        }],
        "border-spacing-y": [{
          "border-spacing-y": H()
        }],
        "table-layout": [{
          table: ["auto", "fixed"]
        }],
        caption: [{
          caption: ["top", "bottom"]
        }],
        transition: [{
          transition: ["", "all", "colors", "opacity", "shadow", "transform", "none", at, it]
        }],
        "transition-behavior": [{
          transition: ["normal", "discrete"]
        }],
        duration: [{
          duration: [bt, "initial", at, it]
        }],
        ease: [{
          ease: ["linear", "initial", O, at, it]
        }],
        delay: [{
          delay: [bt, at, it]
        }],
        animate: [{
          animate: ["none", V, at, it]
        }],
        backface: [{
          backface: ["hidden", "visible"]
        }],
        perspective: [{
          perspective: [A, at, it]
        }],
        "perspective-origin": [{
          "perspective-origin": k()
        }],
        rotate: [{
          rotate: Xe()
        }],
        "rotate-x": [{
          "rotate-x": Xe()
        }],
        "rotate-y": [{
          "rotate-y": Xe()
        }],
        "rotate-z": [{
          "rotate-z": Xe()
        }],
        scale: [{
          scale: sn()
        }],
        "scale-x": [{
          "scale-x": sn()
        }],
        "scale-y": [{
          "scale-y": sn()
        }],
        "scale-z": [{
          "scale-z": sn()
        }],
        "scale-3d": ["scale-3d"],
        skew: [{
          skew: Ve()
        }],
        "skew-x": [{
          "skew-x": Ve()
        }],
        "skew-y": [{
          "skew-y": Ve()
        }],
        transform: [{
          transform: [at, it, "", "none", "gpu", "cpu"]
        }],
        "transform-origin": [{
          origin: k()
        }],
        "transform-style": [{
          transform: ["3d", "flat"]
        }],
        translate: [{
          translate: Bn()
        }],
        "translate-x": [{
          "translate-x": Bn()
        }],
        "translate-y": [{
          "translate-y": Bn()
        }],
        "translate-z": [{
          "translate-z": Bn()
        }],
        "translate-none": ["translate-none"],
        accent: [{
          accent: T()
        }],
        appearance: [{
          appearance: ["none", "auto"]
        }],
        "caret-color": [{
          caret: T()
        }],
        "color-scheme": [{
          scheme: ["normal", "dark", "light", "light-dark", "only-dark", "only-light"]
        }],
        cursor: [{
          cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", at, it]
        }],
        "field-sizing": [{
          "field-sizing": ["fixed", "content"]
        }],
        "pointer-events": [{
          "pointer-events": ["auto", "none"]
        }],
        resize: [{
          resize: ["none", "", "y", "x"]
        }],
        "scroll-behavior": [{
          scroll: ["auto", "smooth"]
        }],
        "scroll-m": [{
          "scroll-m": H()
        }],
        "scroll-mx": [{
          "scroll-mx": H()
        }],
        "scroll-my": [{
          "scroll-my": H()
        }],
        "scroll-ms": [{
          "scroll-ms": H()
        }],
        "scroll-me": [{
          "scroll-me": H()
        }],
        "scroll-mbs": [{
          "scroll-mbs": H()
        }],
        "scroll-mbe": [{
          "scroll-mbe": H()
        }],
        "scroll-mt": [{
          "scroll-mt": H()
        }],
        "scroll-mr": [{
          "scroll-mr": H()
        }],
        "scroll-mb": [{
          "scroll-mb": H()
        }],
        "scroll-ml": [{
          "scroll-ml": H()
        }],
        "scroll-p": [{
          "scroll-p": H()
        }],
        "scroll-px": [{
          "scroll-px": H()
        }],
        "scroll-py": [{
          "scroll-py": H()
        }],
        "scroll-ps": [{
          "scroll-ps": H()
        }],
        "scroll-pe": [{
          "scroll-pe": H()
        }],
        "scroll-pbs": [{
          "scroll-pbs": H()
        }],
        "scroll-pbe": [{
          "scroll-pbe": H()
        }],
        "scroll-pt": [{
          "scroll-pt": H()
        }],
        "scroll-pr": [{
          "scroll-pr": H()
        }],
        "scroll-pb": [{
          "scroll-pb": H()
        }],
        "scroll-pl": [{
          "scroll-pl": H()
        }],
        "snap-align": [{
          snap: ["start", "end", "center", "align-none"]
        }],
        "snap-stop": [{
          snap: ["normal", "always"]
        }],
        "snap-type": [{
          snap: ["none", "x", "y", "both"]
        }],
        "snap-strictness": [{
          snap: ["mandatory", "proximity"]
        }],
        touch: [{
          touch: ["auto", "none", "manipulation"]
        }],
        "touch-x": [{
          "touch-pan": ["x", "left", "right"]
        }],
        "touch-y": [{
          "touch-pan": ["y", "up", "down"]
        }],
        "touch-pz": ["touch-pinch-zoom"],
        select: [{
          select: ["none", "text", "all", "auto"]
        }],
        "will-change": [{
          "will-change": ["auto", "scroll", "contents", "transform", at, it]
        }],
        fill: [{
          fill: ["none", ...T()]
        }],
        "stroke-w": [{
          stroke: [bt, Za, Hi, _g]
        }],
        stroke: [{
          stroke: ["none", ...T()]
        }],
        "forced-color-adjust": [{
          "forced-color-adjust": ["auto", "none"]
        }]
      },
      conflictingClassGroups: {
        overflow: ["overflow-x", "overflow-y"],
        overscroll: ["overscroll-x", "overscroll-y"],
        inset: ["inset-x", "inset-y", "inset-bs", "inset-be", "start", "end", "top", "right", "bottom", "left"],
        "inset-x": ["right", "left"],
        "inset-y": ["top", "bottom"],
        flex: ["basis", "grow", "shrink"],
        gap: ["gap-x", "gap-y"],
        p: ["px", "py", "ps", "pe", "pbs", "pbe", "pt", "pr", "pb", "pl"],
        px: ["pr", "pl"],
        py: ["pt", "pb"],
        m: ["mx", "my", "ms", "me", "mbs", "mbe", "mt", "mr", "mb", "ml"],
        mx: ["mr", "ml"],
        my: ["mt", "mb"],
        size: ["w", "h"],
        "font-size": ["leading"],
        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
        "fvn-ordinal": ["fvn-normal"],
        "fvn-slashed-zero": ["fvn-normal"],
        "fvn-figure": ["fvn-normal"],
        "fvn-spacing": ["fvn-normal"],
        "fvn-fraction": ["fvn-normal"],
        "line-clamp": ["display", "overflow"],
        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
        "rounded-s": ["rounded-ss", "rounded-es"],
        "rounded-e": ["rounded-se", "rounded-ee"],
        "rounded-t": ["rounded-tl", "rounded-tr"],
        "rounded-r": ["rounded-tr", "rounded-br"],
        "rounded-b": ["rounded-br", "rounded-bl"],
        "rounded-l": ["rounded-tl", "rounded-bl"],
        "border-spacing": ["border-spacing-x", "border-spacing-y"],
        "border-w": ["border-w-x", "border-w-y", "border-w-s", "border-w-e", "border-w-bs", "border-w-be", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
        "border-w-x": ["border-w-r", "border-w-l"],
        "border-w-y": ["border-w-t", "border-w-b"],
        "border-color": ["border-color-x", "border-color-y", "border-color-s", "border-color-e", "border-color-bs", "border-color-be", "border-color-t", "border-color-r", "border-color-b", "border-color-l"],
        "border-color-x": ["border-color-r", "border-color-l"],
        "border-color-y": ["border-color-t", "border-color-b"],
        translate: ["translate-x", "translate-y", "translate-none"],
        "translate-none": ["translate", "translate-x", "translate-y", "translate-z"],
        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mbs", "scroll-mbe", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
        "scroll-mx": ["scroll-mr", "scroll-ml"],
        "scroll-my": ["scroll-mt", "scroll-mb"],
        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pbs", "scroll-pbe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
        "scroll-px": ["scroll-pr", "scroll-pl"],
        "scroll-py": ["scroll-pt", "scroll-pb"],
        touch: ["touch-x", "touch-y", "touch-pz"],
        "touch-x": ["touch"],
        "touch-y": ["touch"],
        "touch-pz": ["touch"]
      },
      conflictingClassGroupModifiers: {
        "font-size": ["leading"]
      },
      orderSensitiveModifiers: ["*", "**", "after", "backdrop", "before", "details-content", "file", "first-letter", "first-line", "marker", "placeholder", "selection"]
    }
  }
  , SC = IA(xC);
function _e(...e) {
  return SC(ab(e))
}
const TC = TA
  , Tb = w.forwardRef(({ className: e, ...i }, a) => M.jsx(J0, {
    ref: a,
    className: _e("fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]", e),
    ...i
  }));
Tb.displayName = J0.displayName;
const wC = wA("group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full", {
  variants: {
    variant: {
      default: "border bg-background text-foreground",
      destructive: "destructive group border-destructive bg-destructive text-destructive-foreground"
    }
  },
  defaultVariants: {
    variant: "default"
  }
})
  , wb = w.forwardRef(({ className: e, variant: i, ...a }, r) => M.jsx(I0, {
    ref: r,
    className: _e(wC({
      variant: i
    }), e),
    ...a
  }));
wb.displayName = I0.displayName;
const EC = w.forwardRef(({ className: e, ...i }, a) => M.jsx(nb, {
  ref: a,
  className: _e("inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive", e),
  ...i
}));
EC.displayName = nb.displayName;
const Eb = w.forwardRef(({ className: e, ...i }, a) => M.jsx(ib, {
  ref: a,
  className: _e("absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600", e),
  "toast-close": "",
  ...i,
  children: M.jsx(jA, {
    className: "h-4 w-4"
  })
}));
Eb.displayName = ib.displayName;
const Ab = w.forwardRef(({ className: e, ...i }, a) => M.jsx(tb, {
  ref: a,
  className: _e("text-sm font-semibold", e),
  ...i
}));
Ab.displayName = tb.displayName;
const Cb = w.forwardRef(({ className: e, ...i }, a) => M.jsx(eb, {
  ref: a,
  className: _e("text-sm opacity-90", e),
  ...i
}));
Cb.displayName = eb.displayName;
function AC() {
  const { toasts: e } = DE();
  return M.jsxs(TC, {
    children: [e.map(function ({ id: i, title: a, description: r, action: l, ...c }) {
      return M.jsxs(wb, {
        ...c,
        children: [M.jsxs("div", {
          className: "grid gap-1",
          children: [a && M.jsx(Ab, {
            children: a
          }), r && M.jsx(Cb, {
            children: r
          })]
        }), l, M.jsx(Eb, {})]
      }, i)
    }), M.jsx(Tb, {})]
  })
}
const CC = ["top", "right", "bottom", "left"]
  , gi = Math.min
  , Oe = Math.max
  , il = Math.round
  , Po = Math.floor
  , mn = e => ({
    x: e,
    y: e
  })
  , RC = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
  };
function Lf(e, i, a) {
  return Oe(e, gi(i, a))
}
function zn(e, i) {
  return typeof e == "function" ? e(i) : e
}
function Ln(e) {
  return e.split("-")[0]
}
function Ys(e) {
  return e.split("-")[1]
}
function Td(e) {
  return e === "x" ? "y" : "x"
}
function wd(e) {
  return e === "y" ? "height" : "width"
}
function hn(e) {
  const i = e[0];
  return i === "t" || i === "b" ? "y" : "x"
}
function Ed(e) {
  return Td(hn(e))
}
function MC(e, i, a) {
  a === void 0 && (a = !1);
  const r = Ys(e)
    , l = Ed(e)
    , c = wd(l);
  let d = l === "x" ? r === (a ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
  return i.reference[c] > i.floating[c] && (d = sl(d)),
    [d, sl(d)]
}
function DC(e) {
  const i = sl(e);
  return [Pf(e), i, Pf(i)]
}
function Pf(e) {
  return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
}
const Lg = ["left", "right"]
  , Pg = ["right", "left"]
  , OC = ["top", "bottom"]
  , NC = ["bottom", "top"];
function jC(e, i, a) {
  switch (e) {
    case "top":
    case "bottom":
      return a ? i ? Pg : Lg : i ? Lg : Pg;
    case "left":
    case "right":
      return i ? OC : NC;
    default:
      return []
  }
}
function _C(e, i, a, r) {
  const l = Ys(e);
  let c = jC(Ln(e), a === "start", r);
  return l && (c = c.map(d => d + "-" + l),
    i && (c = c.concat(c.map(Pf)))),
    c
}
function sl(e) {
  const i = Ln(e);
  return RC[i] + e.slice(i.length)
}
function VC(e) {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    ...e
  }
}
function Rb(e) {
  return typeof e != "number" ? VC(e) : {
    top: e,
    right: e,
    bottom: e,
    left: e
  }
}
function al(e) {
  const { x: i, y: a, width: r, height: l } = e;
  return {
    width: r,
    height: l,
    top: a,
    left: i,
    right: i + r,
    bottom: a + l,
    x: i,
    y: a
  }
}
function Ug(e, i, a) {
  let { reference: r, floating: l } = e;
  const c = hn(i)
    , d = Ed(i)
    , h = wd(d)
    , p = Ln(i)
    , m = c === "y"
    , y = r.x + r.width / 2 - l.width / 2
    , v = r.y + r.height / 2 - l.height / 2
    , b = r[h] / 2 - l[h] / 2;
  let S;
  switch (p) {
    case "top":
      S = {
        x: y,
        y: r.y - l.height
      };
      break;
    case "bottom":
      S = {
        x: y,
        y: r.y + r.height
      };
      break;
    case "right":
      S = {
        x: r.x + r.width,
        y: v
      };
      break;
    case "left":
      S = {
        x: r.x - l.width,
        y: v
      };
      break;
    default:
      S = {
        x: r.x,
        y: r.y
      }
  }
  switch (Ys(i)) {
    case "start":
      S[d] -= b * (a && m ? -1 : 1);
      break;
    case "end":
      S[d] += b * (a && m ? -1 : 1);
      break
  }
  return S
}
async function zC(e, i) {
  var a;
  i === void 0 && (i = {});
  const { x: r, y: l, platform: c, rects: d, elements: h, strategy: p } = e
    , { boundary: m = "clippingAncestors", rootBoundary: y = "viewport", elementContext: v = "floating", altBoundary: b = !1, padding: S = 0 } = zn(i, e)
    , E = Rb(S)
    , C = h[b ? v === "floating" ? "reference" : "floating" : v]
    , O = al(await c.getClippingRect({
      element: (a = await (c.isElement == null ? void 0 : c.isElement(C))) == null || a ? C : C.contextElement || await (c.getDocumentElement == null ? void 0 : c.getDocumentElement(h.floating)),
      boundary: m,
      rootBoundary: y,
      strategy: p
    }))
    , V = v === "floating" ? {
      x: r,
      y: l,
      width: d.floating.width,
      height: d.floating.height
    } : d.reference
    , j = await (c.getOffsetParent == null ? void 0 : c.getOffsetParent(h.floating))
    , L = await (c.isElement == null ? void 0 : c.isElement(j)) ? await (c.getScale == null ? void 0 : c.getScale(j)) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    }
    , k = al(c.convertOffsetParentRelativeRectToViewportRelativeRect ? await c.convertOffsetParentRelativeRectToViewportRelativeRect({
      elements: h,
      rect: V,
      offsetParent: j,
      strategy: p
    }) : V);
  return {
    top: (O.top - k.top + E.top) / L.y,
    bottom: (k.bottom - O.bottom + E.bottom) / L.y,
    left: (O.left - k.left + E.left) / L.x,
    right: (k.right - O.right + E.right) / L.x
  }
}
const LC = 50
  , PC = async (e, i, a) => {
    const { placement: r = "bottom", strategy: l = "absolute", middleware: c = [], platform: d } = a
      , h = d.detectOverflow ? d : {
        ...d,
        detectOverflow: zC
      }
      , p = await (d.isRTL == null ? void 0 : d.isRTL(i));
    let m = await d.getElementRects({
      reference: e,
      floating: i,
      strategy: l
    })
      , { x: y, y: v } = Ug(m, r, p)
      , b = r
      , S = 0;
    const E = {};
    for (let A = 0; A < c.length; A++) {
      const C = c[A];
      if (!C)
        continue;
      const { name: O, fn: V } = C
        , { x: j, y: L, data: k, reset: Q } = await V({
          x: y,
          y: v,
          initialPlacement: r,
          placement: b,
          strategy: l,
          middlewareData: E,
          rects: m,
          platform: h,
          elements: {
            reference: e,
            floating: i
          }
        });
      y = j ?? y,
        v = L ?? v,
        E[O] = {
          ...E[O],
          ...k
        },
        Q && S < LC && (S++,
          typeof Q == "object" && (Q.placement && (b = Q.placement),
            Q.rects && (m = Q.rects === !0 ? await d.getElementRects({
              reference: e,
              floating: i,
              strategy: l
            }) : Q.rects),
            { x: y, y: v } = Ug(m, b, p)),
          A = -1)
    }
    return {
      x: y,
      y: v,
      placement: b,
      strategy: l,
      middlewareData: E
    }
  }
  , UC = e => ({
    name: "arrow",
    options: e,
    async fn(i) {
      const { x: a, y: r, placement: l, rects: c, platform: d, elements: h, middlewareData: p } = i
        , { element: m, padding: y = 0 } = zn(e, i) || {};
      if (m == null)
        return {};
      const v = Rb(y)
        , b = {
          x: a,
          y: r
        }
        , S = Ed(l)
        , E = wd(S)
        , A = await d.getDimensions(m)
        , C = S === "y"
        , O = C ? "top" : "left"
        , V = C ? "bottom" : "right"
        , j = C ? "clientHeight" : "clientWidth"
        , L = c.reference[E] + c.reference[S] - b[S] - c.floating[E]
        , k = b[S] - c.reference[S]
        , Q = await (d.getOffsetParent == null ? void 0 : d.getOffsetParent(m));
      let Z = Q ? Q[j] : 0;
      (!Z || !await (d.isElement == null ? void 0 : d.isElement(Q))) && (Z = h.floating[j] || c.floating[E]);
      const H = L / 2 - k / 2
        , $ = Z / 2 - A[E] / 2 - 1
        , W = gi(v[O], $)
        , ot = gi(v[V], $)
        , lt = W
        , yt = Z - A[E] - ot
        , I = Z / 2 - A[E] / 2 + H
        , ct = Lf(lt, I, yt)
        , _ = !p.arrow && Ys(l) != null && I !== ct && c.reference[E] / 2 - (I < lt ? W : ot) - A[E] / 2 < 0
        , K = _ ? I < lt ? I - lt : I - yt : 0;
      return {
        [S]: b[S] + K,
        data: {
          [S]: ct,
          centerOffset: I - ct - K,
          ..._ && {
            alignmentOffset: K
          }
        },
        reset: _
      }
    }
  })
  , BC = function (e) {
    return e === void 0 && (e = {}),
    {
      name: "flip",
      options: e,
      async fn(i) {
        var a, r;
        const { placement: l, middlewareData: c, rects: d, initialPlacement: h, platform: p, elements: m } = i
          , { mainAxis: y = !0, crossAxis: v = !0, fallbackPlacements: b, fallbackStrategy: S = "bestFit", fallbackAxisSideDirection: E = "none", flipAlignment: A = !0, ...C } = zn(e, i);
        if ((a = c.arrow) != null && a.alignmentOffset)
          return {};
        const O = Ln(l)
          , V = hn(h)
          , j = Ln(h) === h
          , L = await (p.isRTL == null ? void 0 : p.isRTL(m.floating))
          , k = b || (j || !A ? [sl(h)] : DC(h))
          , Q = E !== "none";
        !b && Q && k.push(..._C(h, A, E, L));
        const Z = [h, ...k]
          , H = await p.detectOverflow(i, C)
          , $ = [];
        let W = ((r = c.flip) == null ? void 0 : r.overflows) || [];
        if (y && $.push(H[O]),
          v) {
          const I = MC(l, d, L);
          $.push(H[I[0]], H[I[1]])
        }
        if (W = [...W, {
          placement: l,
          overflows: $
        }],
          !$.every(I => I <= 0)) {
          var ot, lt;
          const I = (((ot = c.flip) == null ? void 0 : ot.index) || 0) + 1
            , ct = Z[I];
          if (ct && (!(v === "alignment" ? V !== hn(ct) : !1) || W.every(Y => hn(Y.placement) === V ? Y.overflows[0] > 0 : !0)))
            return {
              data: {
                index: I,
                overflows: W
              },
              reset: {
                placement: ct
              }
            };
          let _ = (lt = W.filter(K => K.overflows[0] <= 0).sort((K, Y) => K.overflows[1] - Y.overflows[1])[0]) == null ? void 0 : lt.placement;
          if (!_)
            switch (S) {
              case "bestFit":
                {
                  var yt;
                  const K = (yt = W.filter(Y => {
                    if (Q) {
                      const et = hn(Y.placement);
                      return et === V || et === "y"
                    }
                    return !0
                  }
                  ).map(Y => [Y.placement, Y.overflows.filter(et => et > 0).reduce((et, T) => et + T, 0)]).sort((Y, et) => Y[1] - et[1])[0]) == null ? void 0 : yt[0];
                  K && (_ = K);
                  break
                }
              case "initialPlacement":
                _ = h;
                break
            }
          if (l !== _)
            return {
              reset: {
                placement: _
              }
            }
        }
        return {}
      }
    }
  };
function Bg(e, i) {
  return {
    top: e.top - i.height,
    right: e.right - i.width,
    bottom: e.bottom - i.height,
    left: e.left - i.width
  }
}
function kg(e) {
  return CC.some(i => e[i] >= 0)
}
const kC = function (e) {
  return e === void 0 && (e = {}),
  {
    name: "hide",
    options: e,
    async fn(i) {
      const { rects: a, platform: r } = i
        , { strategy: l = "referenceHidden", ...c } = zn(e, i);
      switch (l) {
        case "referenceHidden":
          {
            const d = await r.detectOverflow(i, {
              ...c,
              elementContext: "reference"
            })
              , h = Bg(d, a.reference);
            return {
              data: {
                referenceHiddenOffsets: h,
                referenceHidden: kg(h)
              }
            }
          }
        case "escaped":
          {
            const d = await r.detectOverflow(i, {
              ...c,
              altBoundary: !0
            })
              , h = Bg(d, a.floating);
            return {
              data: {
                escapedOffsets: h,
                escaped: kg(h)
              }
            }
          }
        default:
          return {}
      }
    }
  }
}
  , Mb = new Set(["left", "top"]);
async function HC(e, i) {
  const { placement: a, platform: r, elements: l } = e
    , c = await (r.isRTL == null ? void 0 : r.isRTL(l.floating))
    , d = Ln(a)
    , h = Ys(a)
    , p = hn(a) === "y"
    , m = Mb.has(d) ? -1 : 1
    , y = c && p ? -1 : 1
    , v = zn(i, e);
  let { mainAxis: b, crossAxis: S, alignmentAxis: E } = typeof v == "number" ? {
    mainAxis: v,
    crossAxis: 0,
    alignmentAxis: null
  } : {
    mainAxis: v.mainAxis || 0,
    crossAxis: v.crossAxis || 0,
    alignmentAxis: v.alignmentAxis
  };
  return h && typeof E == "number" && (S = h === "end" ? E * -1 : E),
    p ? {
      x: S * y,
      y: b * m
    } : {
      x: b * m,
      y: S * y
    }
}
const FC = function (e) {
  return e === void 0 && (e = 0),
  {
    name: "offset",
    options: e,
    async fn(i) {
      var a, r;
      const { x: l, y: c, placement: d, middlewareData: h } = i
        , p = await HC(i, e);
      return d === ((a = h.offset) == null ? void 0 : a.placement) && (r = h.arrow) != null && r.alignmentOffset ? {} : {
        x: l + p.x,
        y: c + p.y,
        data: {
          ...p,
          placement: d
        }
      }
    }
  }
}
  , qC = function (e) {
    return e === void 0 && (e = {}),
    {
      name: "shift",
      options: e,
      async fn(i) {
        const { x: a, y: r, placement: l, platform: c } = i
          , { mainAxis: d = !0, crossAxis: h = !1, limiter: p = {
            fn: O => {
              let { x: V, y: j } = O;
              return {
                x: V,
                y: j
              }
            }
          }, ...m } = zn(e, i)
          , y = {
            x: a,
            y: r
          }
          , v = await c.detectOverflow(i, m)
          , b = hn(Ln(l))
          , S = Td(b);
        let E = y[S]
          , A = y[b];
        if (d) {
          const O = S === "y" ? "top" : "left"
            , V = S === "y" ? "bottom" : "right"
            , j = E + v[O]
            , L = E - v[V];
          E = Lf(j, E, L)
        }
        if (h) {
          const O = b === "y" ? "top" : "left"
            , V = b === "y" ? "bottom" : "right"
            , j = A + v[O]
            , L = A - v[V];
          A = Lf(j, A, L)
        }
        const C = p.fn({
          ...i,
          [S]: E,
          [b]: A
        });
        return {
          ...C,
          data: {
            x: C.x - a,
            y: C.y - r,
            enabled: {
              [S]: d,
              [b]: h
            }
          }
        }
      }
    }
  }
  , GC = function (e) {
    return e === void 0 && (e = {}),
    {
      options: e,
      fn(i) {
        const { x: a, y: r, placement: l, rects: c, middlewareData: d } = i
          , { offset: h = 0, mainAxis: p = !0, crossAxis: m = !0 } = zn(e, i)
          , y = {
            x: a,
            y: r
          }
          , v = hn(l)
          , b = Td(v);
        let S = y[b]
          , E = y[v];
        const A = zn(h, i)
          , C = typeof A == "number" ? {
            mainAxis: A,
            crossAxis: 0
          } : {
            mainAxis: 0,
            crossAxis: 0,
            ...A
          };
        if (p) {
          const j = b === "y" ? "height" : "width"
            , L = c.reference[b] - c.floating[j] + C.mainAxis
            , k = c.reference[b] + c.reference[j] - C.mainAxis;
          S < L ? S = L : S > k && (S = k)
        }
        if (m) {
          var O, V;
          const j = b === "y" ? "width" : "height"
            , L = Mb.has(Ln(l))
            , k = c.reference[v] - c.floating[j] + (L && ((O = d.offset) == null ? void 0 : O[v]) || 0) + (L ? 0 : C.crossAxis)
            , Q = c.reference[v] + c.reference[j] + (L ? 0 : ((V = d.offset) == null ? void 0 : V[v]) || 0) - (L ? C.crossAxis : 0);
          E < k ? E = k : E > Q && (E = Q)
        }
        return {
          [b]: S,
          [v]: E
        }
      }
    }
  }
  , YC = function (e) {
    return e === void 0 && (e = {}),
    {
      name: "size",
      options: e,
      async fn(i) {
        var a, r;
        const { placement: l, rects: c, platform: d, elements: h } = i
          , { apply: p = () => { }
            , ...m } = zn(e, i)
          , y = await d.detectOverflow(i, m)
          , v = Ln(l)
          , b = Ys(l)
          , S = hn(l) === "y"
          , { width: E, height: A } = c.floating;
        let C, O;
        v === "top" || v === "bottom" ? (C = v,
          O = b === (await (d.isRTL == null ? void 0 : d.isRTL(h.floating)) ? "start" : "end") ? "left" : "right") : (O = v,
            C = b === "end" ? "top" : "bottom");
        const V = A - y.top - y.bottom
          , j = E - y.left - y.right
          , L = gi(A - y[C], V)
          , k = gi(E - y[O], j)
          , Q = !i.middlewareData.shift;
        let Z = L
          , H = k;
        if ((a = i.middlewareData.shift) != null && a.enabled.x && (H = j),
          (r = i.middlewareData.shift) != null && r.enabled.y && (Z = V),
          Q && !b) {
          const W = Oe(y.left, 0)
            , ot = Oe(y.right, 0)
            , lt = Oe(y.top, 0)
            , yt = Oe(y.bottom, 0);
          S ? H = E - 2 * (W !== 0 || ot !== 0 ? W + ot : Oe(y.left, y.right)) : Z = A - 2 * (lt !== 0 || yt !== 0 ? lt + yt : Oe(y.top, y.bottom))
        }
        await p({
          ...i,
          availableWidth: H,
          availableHeight: Z
        });
        const $ = await d.getDimensions(h.floating);
        return E !== $.width || A !== $.height ? {
          reset: {
            rects: !0
          }
        } : {}
      }
    }
  };
function Al() {
  return typeof window < "u"
}
function Xs(e) {
  return Db(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Ne(e) {
  var i;
  return (e == null || (i = e.ownerDocument) == null ? void 0 : i.defaultView) || window
}
function gn(e) {
  var i;
  return (i = (Db(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : i.documentElement
}
function Db(e) {
  return Al() ? e instanceof Node || e instanceof Ne(e).Node : !1
}
function en(e) {
  return Al() ? e instanceof Element || e instanceof Ne(e).Element : !1
}
function Pn(e) {
  return Al() ? e instanceof HTMLElement || e instanceof Ne(e).HTMLElement : !1
}
function Hg(e) {
  return !Al() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Ne(e).ShadowRoot
}
function fr(e) {
  const { overflow: i, overflowX: a, overflowY: r, display: l } = nn(e);
  return /auto|scroll|overlay|hidden|clip/.test(i + r + a) && l !== "inline" && l !== "contents"
}
function XC(e) {
  return /^(table|td|th)$/.test(Xs(e))
}
function Cl(e) {
  try {
    if (e.matches(":popover-open"))
      return !0
  } catch { }
  try {
    return e.matches(":modal")
  } catch {
    return !1
  }
}
const KC = /transform|translate|scale|rotate|perspective|filter/
  , QC = /paint|layout|strict|content/
  , Fi = e => !!e && e !== "none";
let of;
function Ad(e) {
  const i = en(e) ? nn(e) : e;
  return Fi(i.transform) || Fi(i.translate) || Fi(i.scale) || Fi(i.rotate) || Fi(i.perspective) || !Cd() && (Fi(i.backdropFilter) || Fi(i.filter)) || KC.test(i.willChange || "") || QC.test(i.contain || "")
}
function ZC(e) {
  let i = vi(e);
  for (; Pn(i) && !Fs(i);) {
    if (Ad(i))
      return i;
    if (Cl(i))
      return null;
    i = vi(i)
  }
  return null
}
function Cd() {
  return of == null && (of = typeof CSS < "u" && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")),
    of
}
function Fs(e) {
  return /^(html|body|#document)$/.test(Xs(e))
}
function nn(e) {
  return Ne(e).getComputedStyle(e)
}
function Rl(e) {
  return en(e) ? {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  } : {
    scrollLeft: e.scrollX,
    scrollTop: e.scrollY
  }
}
function vi(e) {
  if (Xs(e) === "html")
    return e;
  const i = e.assignedSlot || e.parentNode || Hg(e) && e.host || gn(e);
  return Hg(i) ? i.host : i
}
function Ob(e) {
  const i = vi(e);
  return Fs(i) ? e.ownerDocument ? e.ownerDocument.body : e.body : Pn(i) && fr(i) ? i : Ob(i)
}
function ar(e, i, a) {
  var r;
  i === void 0 && (i = []),
    a === void 0 && (a = !0);
  const l = Ob(e)
    , c = l === ((r = e.ownerDocument) == null ? void 0 : r.body)
    , d = Ne(l);
  if (c) {
    const h = Uf(d);
    return i.concat(d, d.visualViewport || [], fr(l) ? l : [], h && a ? ar(h) : [])
  } else
    return i.concat(l, ar(l, [], a))
}
function Uf(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Nb(e) {
  const i = nn(e);
  let a = parseFloat(i.width) || 0
    , r = parseFloat(i.height) || 0;
  const l = Pn(e)
    , c = l ? e.offsetWidth : a
    , d = l ? e.offsetHeight : r
    , h = il(a) !== c || il(r) !== d;
  return h && (a = c,
    r = d),
  {
    width: a,
    height: r,
    $: h
  }
}
function Rd(e) {
  return en(e) ? e : e.contextElement
}
function Hs(e) {
  const i = Rd(e);
  if (!Pn(i))
    return mn(1);
  const a = i.getBoundingClientRect()
    , { width: r, height: l, $: c } = Nb(i);
  let d = (c ? il(a.width) : a.width) / r
    , h = (c ? il(a.height) : a.height) / l;
  return (!d || !Number.isFinite(d)) && (d = 1),
    (!h || !Number.isFinite(h)) && (h = 1),
  {
    x: d,
    y: h
  }
}
const WC = mn(0);
function jb(e) {
  const i = Ne(e);
  return !Cd() || !i.visualViewport ? WC : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  }
}
function $C(e, i, a) {
  return i === void 0 && (i = !1),
    !a || i && a !== Ne(e) ? !1 : i
}
function Zi(e, i, a, r) {
  i === void 0 && (i = !1),
    a === void 0 && (a = !1);
  const l = e.getBoundingClientRect()
    , c = Rd(e);
  let d = mn(1);
  i && (r ? en(r) && (d = Hs(r)) : d = Hs(e));
  const h = $C(c, a, r) ? jb(c) : mn(0);
  let p = (l.left + h.x) / d.x
    , m = (l.top + h.y) / d.y
    , y = l.width / d.x
    , v = l.height / d.y;
  if (c) {
    const b = Ne(c)
      , S = r && en(r) ? Ne(r) : r;
    let E = b
      , A = Uf(E);
    for (; A && r && S !== E;) {
      const C = Hs(A)
        , O = A.getBoundingClientRect()
        , V = nn(A)
        , j = O.left + (A.clientLeft + parseFloat(V.paddingLeft)) * C.x
        , L = O.top + (A.clientTop + parseFloat(V.paddingTop)) * C.y;
      p *= C.x,
        m *= C.y,
        y *= C.x,
        v *= C.y,
        p += j,
        m += L,
        E = Ne(A),
        A = Uf(E)
    }
  }
  return al({
    width: y,
    height: v,
    x: p,
    y: m
  })
}
function Ml(e, i) {
  const a = Rl(e).scrollLeft;
  return i ? i.left + a : Zi(gn(e)).left + a
}
function _b(e, i) {
  const a = e.getBoundingClientRect()
    , r = a.left + i.scrollLeft - Ml(e, a)
    , l = a.top + i.scrollTop;
  return {
    x: r,
    y: l
  }
}
function JC(e) {
  let { elements: i, rect: a, offsetParent: r, strategy: l } = e;
  const c = l === "fixed"
    , d = gn(r)
    , h = i ? Cl(i.floating) : !1;
  if (r === d || h && c)
    return a;
  let p = {
    scrollLeft: 0,
    scrollTop: 0
  }
    , m = mn(1);
  const y = mn(0)
    , v = Pn(r);
  if ((v || !v && !c) && ((Xs(r) !== "body" || fr(d)) && (p = Rl(r)),
    v)) {
    const S = Zi(r);
    m = Hs(r),
      y.x = S.x + r.clientLeft,
      y.y = S.y + r.clientTop
  }
  const b = d && !v && !c ? _b(d, p) : mn(0);
  return {
    width: a.width * m.x,
    height: a.height * m.y,
    x: a.x * m.x - p.scrollLeft * m.x + y.x + b.x,
    y: a.y * m.y - p.scrollTop * m.y + y.y + b.y
  }
}
function IC(e) {
  return Array.from(e.getClientRects())
}
function tR(e) {
  const i = gn(e)
    , a = Rl(e)
    , r = e.ownerDocument.body
    , l = Oe(i.scrollWidth, i.clientWidth, r.scrollWidth, r.clientWidth)
    , c = Oe(i.scrollHeight, i.clientHeight, r.scrollHeight, r.clientHeight);
  let d = -a.scrollLeft + Ml(e);
  const h = -a.scrollTop;
  return nn(r).direction === "rtl" && (d += Oe(i.clientWidth, r.clientWidth) - l),
  {
    width: l,
    height: c,
    x: d,
    y: h
  }
}
const Fg = 25;
function eR(e, i) {
  const a = Ne(e)
    , r = gn(e)
    , l = a.visualViewport;
  let c = r.clientWidth
    , d = r.clientHeight
    , h = 0
    , p = 0;
  if (l) {
    c = l.width,
      d = l.height;
    const y = Cd();
    (!y || y && i === "fixed") && (h = l.offsetLeft,
      p = l.offsetTop)
  }
  const m = Ml(r);
  if (m <= 0) {
    const y = r.ownerDocument
      , v = y.body
      , b = getComputedStyle(v)
      , S = y.compatMode === "CSS1Compat" && parseFloat(b.marginLeft) + parseFloat(b.marginRight) || 0
      , E = Math.abs(r.clientWidth - v.clientWidth - S);
    E <= Fg && (c -= E)
  } else
    m <= Fg && (c += m);
  return {
    width: c,
    height: d,
    x: h,
    y: p
  }
}
function nR(e, i) {
  const a = Zi(e, !0, i === "fixed")
    , r = a.top + e.clientTop
    , l = a.left + e.clientLeft
    , c = Pn(e) ? Hs(e) : mn(1)
    , d = e.clientWidth * c.x
    , h = e.clientHeight * c.y
    , p = l * c.x
    , m = r * c.y;
  return {
    width: d,
    height: h,
    x: p,
    y: m
  }
}
function qg(e, i, a) {
  let r;
  if (i === "viewport")
    r = eR(e, a);
  else if (i === "document")
    r = tR(gn(e));
  else if (en(i))
    r = nR(i, a);
  else {
    const l = jb(e);
    r = {
      x: i.x - l.x,
      y: i.y - l.y,
      width: i.width,
      height: i.height
    }
  }
  return al(r)
}
function Vb(e, i) {
  const a = vi(e);
  return a === i || !en(a) || Fs(a) ? !1 : nn(a).position === "fixed" || Vb(a, i)
}
function iR(e, i) {
  const a = i.get(e);
  if (a)
    return a;
  let r = ar(e, [], !1).filter(h => en(h) && Xs(h) !== "body")
    , l = null;
  const c = nn(e).position === "fixed";
  let d = c ? vi(e) : e;
  for (; en(d) && !Fs(d);) {
    const h = nn(d)
      , p = Ad(d);
    !p && h.position === "fixed" && (l = null),
      (c ? !p && !l : !p && h.position === "static" && !!l && (l.position === "absolute" || l.position === "fixed") || fr(d) && !p && Vb(e, d)) ? r = r.filter(y => y !== d) : l = h,
      d = vi(d)
  }
  return i.set(e, r),
    r
}
function sR(e) {
  let { element: i, boundary: a, rootBoundary: r, strategy: l } = e;
  const d = [...a === "clippingAncestors" ? Cl(i) ? [] : iR(i, this._c) : [].concat(a), r]
    , h = qg(i, d[0], l);
  let p = h.top
    , m = h.right
    , y = h.bottom
    , v = h.left;
  for (let b = 1; b < d.length; b++) {
    const S = qg(i, d[b], l);
    p = Oe(S.top, p),
      m = gi(S.right, m),
      y = gi(S.bottom, y),
      v = Oe(S.left, v)
  }
  return {
    width: m - v,
    height: y - p,
    x: v,
    y: p
  }
}
function aR(e) {
  const { width: i, height: a } = Nb(e);
  return {
    width: i,
    height: a
  }
}
function rR(e, i, a) {
  const r = Pn(i)
    , l = gn(i)
    , c = a === "fixed"
    , d = Zi(e, !0, c, i);
  let h = {
    scrollLeft: 0,
    scrollTop: 0
  };
  const p = mn(0);
  function m() {
    p.x = Ml(l)
  }
  if (r || !r && !c)
    if ((Xs(i) !== "body" || fr(l)) && (h = Rl(i)),
      r) {
      const S = Zi(i, !0, c, i);
      p.x = S.x + i.clientLeft,
        p.y = S.y + i.clientTop
    } else
      l && m();
  c && !r && l && m();
  const y = l && !r && !c ? _b(l, h) : mn(0)
    , v = d.left + h.scrollLeft - p.x - y.x
    , b = d.top + h.scrollTop - p.y - y.y;
  return {
    x: v,
    y: b,
    width: d.width,
    height: d.height
  }
}
function lf(e) {
  return nn(e).position === "static"
}
function Gg(e, i) {
  if (!Pn(e) || nn(e).position === "fixed")
    return null;
  if (i)
    return i(e);
  let a = e.offsetParent;
  return gn(e) === a && (a = a.ownerDocument.body),
    a
}
function zb(e, i) {
  const a = Ne(e);
  if (Cl(e))
    return a;
  if (!Pn(e)) {
    let l = vi(e);
    for (; l && !Fs(l);) {
      if (en(l) && !lf(l))
        return l;
      l = vi(l)
    }
    return a
  }
  let r = Gg(e, i);
  for (; r && XC(r) && lf(r);)
    r = Gg(r, i);
  return r && Fs(r) && lf(r) && !Ad(r) ? a : r || ZC(e) || a
}
const oR = async function (e) {
  const i = this.getOffsetParent || zb
    , a = this.getDimensions
    , r = await a(e.floating);
  return {
    reference: rR(e.reference, await i(e.floating), e.strategy),
    floating: {
      x: 0,
      y: 0,
      width: r.width,
      height: r.height
    }
  }
};
function lR(e) {
  return nn(e).direction === "rtl"
}
const uR = {
  convertOffsetParentRelativeRectToViewportRelativeRect: JC,
  getDocumentElement: gn,
  getClippingRect: sR,
  getOffsetParent: zb,
  getElementRects: oR,
  getClientRects: IC,
  getDimensions: aR,
  getScale: Hs,
  isElement: en,
  isRTL: lR
};
function Lb(e, i) {
  return e.x === i.x && e.y === i.y && e.width === i.width && e.height === i.height
}
function cR(e, i) {
  let a = null, r;
  const l = gn(e);
  function c() {
    var h;
    clearTimeout(r),
      (h = a) == null || h.disconnect(),
      a = null
  }
  function d(h, p) {
    h === void 0 && (h = !1),
      p === void 0 && (p = 1),
      c();
    const m = e.getBoundingClientRect()
      , { left: y, top: v, width: b, height: S } = m;
    if (h || i(),
      !b || !S)
      return;
    const E = Po(v)
      , A = Po(l.clientWidth - (y + b))
      , C = Po(l.clientHeight - (v + S))
      , O = Po(y)
      , j = {
        rootMargin: -E + "px " + -A + "px " + -C + "px " + -O + "px",
        threshold: Oe(0, gi(1, p)) || 1
      };
    let L = !0;
    function k(Q) {
      const Z = Q[0].intersectionRatio;
      if (Z !== p) {
        if (!L)
          return d();
        Z ? d(!1, Z) : r = setTimeout(() => {
          d(!1, 1e-7)
        }
          , 1e3)
      }
      Z === 1 && !Lb(m, e.getBoundingClientRect()) && d(),
        L = !1
    }
    try {
      a = new IntersectionObserver(k, {
        ...j,
        root: l.ownerDocument
      })
    } catch {
      a = new IntersectionObserver(k, j)
    }
    a.observe(e)
  }
  return d(!0),
    c
}
function fR(e, i, a, r) {
  r === void 0 && (r = {});
  const { ancestorScroll: l = !0, ancestorResize: c = !0, elementResize: d = typeof ResizeObserver == "function", layoutShift: h = typeof IntersectionObserver == "function", animationFrame: p = !1 } = r
    , m = Rd(e)
    , y = l || c ? [...m ? ar(m) : [], ...i ? ar(i) : []] : [];
  y.forEach(O => {
    l && O.addEventListener("scroll", a, {
      passive: !0
    }),
      c && O.addEventListener("resize", a)
  }
  );
  const v = m && h ? cR(m, a) : null;
  let b = -1
    , S = null;
  d && (S = new ResizeObserver(O => {
    let [V] = O;
    V && V.target === m && S && i && (S.unobserve(i),
      cancelAnimationFrame(b),
      b = requestAnimationFrame(() => {
        var j;
        (j = S) == null || j.observe(i)
      }
      )),
      a()
  }
  ),
    m && !p && S.observe(m),
    i && S.observe(i));
  let E, A = p ? Zi(e) : null;
  p && C();
  function C() {
    const O = Zi(e);
    A && !Lb(A, O) && a(),
      A = O,
      E = requestAnimationFrame(C)
  }
  return a(),
    () => {
      var O;
      y.forEach(V => {
        l && V.removeEventListener("scroll", a),
          c && V.removeEventListener("resize", a)
      }
      ),
        v?.(),
        (O = S) == null || O.disconnect(),
        S = null,
        p && cancelAnimationFrame(E)
    }
}
const dR = FC
  , hR = qC
  , mR = BC
  , pR = YC
  , yR = kC
  , Yg = UC
  , gR = GC
  , vR = (e, i, a) => {
    const r = new Map
      , l = {
        platform: uR,
        ...a
      }
      , c = {
        ...l.platform,
        _c: r
      };
    return PC(e, i, {
      ...l,
      platform: c
    })
  }
  ;
var bR = typeof document < "u"
  , xR = function () { }
  , Yo = bR ? w.useLayoutEffect : xR;
function rl(e, i) {
  if (e === i)
    return !0;
  if (typeof e != typeof i)
    return !1;
  if (typeof e == "function" && e.toString() === i.toString())
    return !0;
  let a, r, l;
  if (e && i && typeof e == "object") {
    if (Array.isArray(e)) {
      if (a = e.length,
        a !== i.length)
        return !1;
      for (r = a; r-- !== 0;)
        if (!rl(e[r], i[r]))
          return !1;
      return !0
    }
    if (l = Object.keys(e),
      a = l.length,
      a !== Object.keys(i).length)
      return !1;
    for (r = a; r-- !== 0;)
      if (!{}.hasOwnProperty.call(i, l[r]))
        return !1;
    for (r = a; r-- !== 0;) {
      const c = l[r];
      if (!(c === "_owner" && e.$$typeof) && !rl(e[c], i[c]))
        return !1
    }
    return !0
  }
  return e !== e && i !== i
}
function Pb(e) {
  return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Xg(e, i) {
  const a = Pb(e);
  return Math.round(i * a) / a
}
function uf(e) {
  const i = w.useRef(e);
  return Yo(() => {
    i.current = e
  }
  ),
    i
}
function SR(e) {
  e === void 0 && (e = {});
  const { placement: i = "bottom", strategy: a = "absolute", middleware: r = [], platform: l, elements: { reference: c, floating: d } = {}, transform: h = !0, whileElementsMounted: p, open: m } = e
    , [y, v] = w.useState({
      x: 0,
      y: 0,
      strategy: a,
      placement: i,
      middlewareData: {},
      isPositioned: !1
    })
    , [b, S] = w.useState(r);
  rl(b, r) || S(r);
  const [E, A] = w.useState(null)
    , [C, O] = w.useState(null)
    , V = w.useCallback(Y => {
      Y !== Q.current && (Q.current = Y,
        A(Y))
    }
      , [])
    , j = w.useCallback(Y => {
      Y !== Z.current && (Z.current = Y,
        O(Y))
    }
      , [])
    , L = c || E
    , k = d || C
    , Q = w.useRef(null)
    , Z = w.useRef(null)
    , H = w.useRef(y)
    , $ = p != null
    , W = uf(p)
    , ot = uf(l)
    , lt = uf(m)
    , yt = w.useCallback(() => {
      if (!Q.current || !Z.current)
        return;
      const Y = {
        placement: i,
        strategy: a,
        middleware: b
      };
      ot.current && (Y.platform = ot.current),
        vR(Q.current, Z.current, Y).then(et => {
          const T = {
            ...et,
            isPositioned: lt.current !== !1
          };
          I.current && !rl(H.current, T) && (H.current = T,
            xl.flushSync(() => {
              v(T)
            }
            ))
        }
        )
    }
      , [b, i, a, ot, lt]);
  Yo(() => {
    m === !1 && H.current.isPositioned && (H.current.isPositioned = !1,
      v(Y => ({
        ...Y,
        isPositioned: !1
      })))
  }
    , [m]);
  const I = w.useRef(!1);
  Yo(() => (I.current = !0,
    () => {
      I.current = !1
    }
  ), []),
    Yo(() => {
      if (L && (Q.current = L),
        k && (Z.current = k),
        L && k) {
        if (W.current)
          return W.current(L, k, yt);
        yt()
      }
    }
      , [L, k, yt, W, $]);
  const ct = w.useMemo(() => ({
    reference: Q,
    floating: Z,
    setReference: V,
    setFloating: j
  }), [V, j])
    , _ = w.useMemo(() => ({
      reference: L,
      floating: k
    }), [L, k])
    , K = w.useMemo(() => {
      const Y = {
        position: a,
        left: 0,
        top: 0
      };
      if (!_.floating)
        return Y;
      const et = Xg(_.floating, y.x)
        , T = Xg(_.floating, y.y);
      return h ? {
        ...Y,
        transform: "translate(" + et + "px, " + T + "px)",
        ...Pb(_.floating) >= 1.5 && {
          willChange: "transform"
        }
      } : {
        position: a,
        left: et,
        top: T
      }
    }
      , [a, h, _.floating, y.x, y.y]);
  return w.useMemo(() => ({
    ...y,
    update: yt,
    refs: ct,
    elements: _,
    floatingStyles: K
  }), [y, yt, ct, _, K])
}
const TR = e => {
  function i(a) {
    return {}.hasOwnProperty.call(a, "current")
  }
  return {
    name: "arrow",
    options: e,
    fn(a) {
      const { element: r, padding: l } = typeof e == "function" ? e(a) : e;
      return r && i(r) ? r.current != null ? Yg({
        element: r.current,
        padding: l
      }).fn(a) : {} : r ? Yg({
        element: r,
        padding: l
      }).fn(a) : {}
    }
  }
}
  , wR = (e, i) => {
    const a = dR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  , ER = (e, i) => {
    const a = hR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  , AR = (e, i) => ({
    fn: gR(e).fn,
    options: [e, i]
  })
  , CR = (e, i) => {
    const a = mR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  , RR = (e, i) => {
    const a = pR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  , MR = (e, i) => {
    const a = yR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  , DR = (e, i) => {
    const a = TR(e);
    return {
      name: a.name,
      fn: a.fn,
      options: [e, i]
    }
  }
  ;
var OR = "Arrow"
  , Ub = w.forwardRef((e, i) => {
    const { children: a, width: r = 10, height: l = 5, ...c } = e;
    return M.jsx(xe.svg, {
      ...c,
      ref: i,
      width: r,
      height: l,
      viewBox: "0 0 30 10",
      preserveAspectRatio: "none",
      children: e.asChild ? a : M.jsx("polygon", {
        points: "0,0 30,0 15,10"
      })
    })
  }
  );
Ub.displayName = OR;
var NR = Ub;
function jR(e) {
  const [i, a] = w.useState(void 0);
  return yi(() => {
    if (e) {
      a({
        width: e.offsetWidth,
        height: e.offsetHeight
      });
      const r = new ResizeObserver(l => {
        if (!Array.isArray(l) || !l.length)
          return;
        const c = l[0];
        let d, h;
        if ("borderBoxSize" in c) {
          const p = c.borderBoxSize
            , m = Array.isArray(p) ? p[0] : p;
          d = m.inlineSize,
            h = m.blockSize
        } else
          d = e.offsetWidth,
            h = e.offsetHeight;
        a({
          width: d,
          height: h
        })
      }
      );
      return r.observe(e, {
        box: "border-box"
      }),
        () => r.unobserve(e)
    } else
      a(void 0)
  }
    , [e]),
    i
}
var Bb = "Popper"
  , [kb, Hb] = Sl(Bb)
  , [xN, Fb] = kb(Bb)
  , qb = "PopperAnchor"
  , Gb = w.forwardRef((e, i) => {
    const { __scopePopper: a, virtualRef: r, ...l } = e
      , c = Fb(qb, a)
      , d = w.useRef(null)
      , h = tn(i, d)
      , p = w.useRef(null);
    return w.useEffect(() => {
      const m = p.current;
      p.current = r?.current || d.current,
        m !== p.current && c.onAnchorChange(p.current)
    }
    ),
      r ? null : M.jsx(xe.div, {
        ...l,
        ref: h
      })
  }
  );
Gb.displayName = qb;
var Md = "PopperContent"
  , [_R, VR] = kb(Md)
  , Yb = w.forwardRef((e, i) => {
    const { __scopePopper: a, side: r = "bottom", sideOffset: l = 0, align: c = "center", alignOffset: d = 0, arrowPadding: h = 0, avoidCollisions: p = !0, collisionBoundary: m = [], collisionPadding: y = 0, sticky: v = "partial", hideWhenDetached: b = !1, updatePositionStrategy: S = "optimized", onPlaced: E, ...A } = e
      , C = Fb(Md, a)
      , [O, V] = w.useState(null)
      , j = tn(i, Pt => V(Pt))
      , [L, k] = w.useState(null)
      , Q = jR(L)
      , Z = Q?.width ?? 0
      , H = Q?.height ?? 0
      , $ = r + (c !== "center" ? "-" + c : "")
      , W = typeof y == "number" ? y : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...y
      }
      , ot = Array.isArray(m) ? m : [m]
      , lt = ot.length > 0
      , yt = {
        padding: W,
        boundary: ot.filter(LR),
        altBoundary: lt
      }
      , { refs: I, floatingStyles: ct, placement: _, isPositioned: K, middlewareData: Y } = SR({
        strategy: "fixed",
        placement: $,
        whileElementsMounted: (...Pt) => fR(...Pt, {
          animationFrame: S === "always"
        }),
        elements: {
          reference: C.anchor
        },
        middleware: [wR({
          mainAxis: l + H,
          alignmentAxis: d
        }), p && ER({
          mainAxis: !0,
          crossAxis: !1,
          limiter: v === "partial" ? AR() : void 0,
          ...yt
        }), p && CR({
          ...yt
        }), RR({
          ...yt,
          apply: ({ elements: Pt, rects: Ct, availableWidth: Rt, availableHeight: Un }) => {
            const { width: Xe, height: sn } = Ct.reference
              , Ve = Pt.floating.style;
            Ve.setProperty("--radix-popper-available-width", `${Rt}px`),
              Ve.setProperty("--radix-popper-available-height", `${Un}px`),
              Ve.setProperty("--radix-popper-anchor-width", `${Xe}px`),
              Ve.setProperty("--radix-popper-anchor-height", `${sn}px`)
          }
        }), L && DR({
          element: L,
          padding: h
        }), PR({
          arrowWidth: Z,
          arrowHeight: H
        }), b && MR({
          strategy: "referenceHidden",
          ...yt
        })]
      })
      , [et, T] = Qb(_)
      , q = pi(E);
    yi(() => {
      K && q?.()
    }
      , [K, q]);
    const tt = Y.arrow?.x
      , J = Y.arrow?.y
      , ut = Y.arrow?.centerOffset !== 0
      , [ht, rt] = w.useState();
    return yi(() => {
      O && rt(window.getComputedStyle(O).zIndex)
    }
      , [O]),
      M.jsx("div", {
        ref: I.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
          ...ct,
          transform: K ? ct.transform : "translate(0, -200%)",
          minWidth: "max-content",
          zIndex: ht,
          "--radix-popper-transform-origin": [Y.transformOrigin?.x, Y.transformOrigin?.y].join(" "),
          ...Y.hide?.referenceHidden && {
            visibility: "hidden",
            pointerEvents: "none"
          }
        },
        dir: e.dir,
        children: M.jsx(_R, {
          scope: a,
          placedSide: et,
          onArrowChange: k,
          arrowX: tt,
          arrowY: J,
          shouldHideArrow: ut,
          children: M.jsx(xe.div, {
            "data-side": et,
            "data-align": T,
            ...A,
            ref: j,
            style: {
              ...A.style,
              animation: K ? void 0 : "none"
            }
          })
        })
      })
  }
  );
Yb.displayName = Md;
var Xb = "PopperArrow"
  , zR = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
  }
  , Kb = w.forwardRef(function (i, a) {
    const { __scopePopper: r, ...l } = i
      , c = VR(Xb, r)
      , d = zR[c.placedSide];
    return M.jsx("span", {
      ref: c.onArrowChange,
      style: {
        position: "absolute",
        left: c.arrowX,
        top: c.arrowY,
        [d]: 0,
        transformOrigin: {
          top: "",
          right: "0 0",
          bottom: "center 0",
          left: "100% 0"
        }[c.placedSide],
        transform: {
          top: "translateY(100%)",
          right: "translateY(50%) rotate(90deg) translateX(-50%)",
          bottom: "rotate(180deg)",
          left: "translateY(50%) rotate(-90deg) translateX(50%)"
        }[c.placedSide],
        visibility: c.shouldHideArrow ? "hidden" : void 0
      },
      children: M.jsx(NR, {
        ...l,
        ref: a,
        style: {
          ...l.style,
          display: "block"
        }
      })
    })
  });
Kb.displayName = Xb;
function LR(e) {
  return e !== null
}
var PR = e => ({
  name: "transformOrigin",
  options: e,
  fn(i) {
    const { placement: a, rects: r, middlewareData: l } = i
      , d = l.arrow?.centerOffset !== 0
      , h = d ? 0 : e.arrowWidth
      , p = d ? 0 : e.arrowHeight
      , [m, y] = Qb(a)
      , v = {
        start: "0%",
        center: "50%",
        end: "100%"
      }[y]
      , b = (l.arrow?.x ?? 0) + h / 2
      , S = (l.arrow?.y ?? 0) + p / 2;
    let E = ""
      , A = "";
    return m === "bottom" ? (E = d ? v : `${b}px`,
      A = `${-p}px`) : m === "top" ? (E = d ? v : `${b}px`,
        A = `${r.floating.height + p}px`) : m === "right" ? (E = `${-p}px`,
          A = d ? v : `${S}px`) : m === "left" && (E = `${r.floating.width + p}px`,
            A = d ? v : `${S}px`),
    {
      data: {
        x: E,
        y: A
      }
    }
  }
});
function Qb(e) {
  const [i, a = "center"] = e.split("-");
  return [i, a]
}
var UR = Gb
  , BR = Yb
  , kR = Kb
  , [Dl] = Sl("Tooltip", [Hb])
  , Dd = Hb()
  , Zb = "TooltipProvider"
  , HR = 700
  , Kg = "tooltip.open"
  , [FR, Wb] = Dl(Zb)
  , $b = e => {
    const { __scopeTooltip: i, delayDuration: a = HR, skipDelayDuration: r = 300, disableHoverableContent: l = !1, children: c } = e
      , d = w.useRef(!0)
      , h = w.useRef(!1)
      , p = w.useRef(0);
    return w.useEffect(() => {
      const m = p.current;
      return () => window.clearTimeout(m)
    }
      , []),
      M.jsx(FR, {
        scope: i,
        isOpenDelayedRef: d,
        delayDuration: a,
        onOpen: w.useCallback(() => {
          window.clearTimeout(p.current),
            d.current = !1
        }
          , []),
        onClose: w.useCallback(() => {
          window.clearTimeout(p.current),
            p.current = window.setTimeout(() => d.current = !0, r)
        }
          , [r]),
        isPointerInTransitRef: h,
        onPointerInTransitChange: w.useCallback(m => {
          h.current = m
        }
          , []),
        disableHoverableContent: l,
        children: c
      })
  }
  ;
$b.displayName = Zb;
var Jb = "Tooltip"
  , [SN, dr] = Dl(Jb)
  , Bf = "TooltipTrigger"
  , qR = w.forwardRef((e, i) => {
    const { __scopeTooltip: a, ...r } = e
      , l = dr(Bf, a)
      , c = Wb(Bf, a)
      , d = Dd(a)
      , h = w.useRef(null)
      , p = tn(i, h, l.onTriggerChange)
      , m = w.useRef(!1)
      , y = w.useRef(!1)
      , v = w.useCallback(() => m.current = !1, []);
    return w.useEffect(() => () => document.removeEventListener("pointerup", v), [v]),
      M.jsx(UR, {
        asChild: !0,
        ...d,
        children: M.jsx(xe.button, {
          "aria-describedby": l.open ? l.contentId : void 0,
          "data-state": l.stateAttribute,
          ...r,
          ref: p,
          onPointerMove: Jt(e.onPointerMove, b => {
            b.pointerType !== "touch" && !y.current && !c.isPointerInTransitRef.current && (l.onTriggerEnter(),
              y.current = !0)
          }
          ),
          onPointerLeave: Jt(e.onPointerLeave, () => {
            l.onTriggerLeave(),
              y.current = !1
          }
          ),
          onPointerDown: Jt(e.onPointerDown, () => {
            l.open && l.onClose(),
              m.current = !0,
              document.addEventListener("pointerup", v, {
                once: !0
              })
          }
          ),
          onFocus: Jt(e.onFocus, () => {
            m.current || l.onOpen()
          }
          ),
          onBlur: Jt(e.onBlur, l.onClose),
          onClick: Jt(e.onClick, l.onClose)
        })
      })
  }
  );
qR.displayName = Bf;
var Od = "TooltipPortal"
  , [GR, YR] = Dl(Od, {
    forceMount: void 0
  })
  , Ib = e => {
    const { __scopeTooltip: i, forceMount: a, children: r, container: l } = e
      , c = dr(Od, i);
    return M.jsx(GR, {
      scope: i,
      forceMount: a,
      children: M.jsx(Tl, {
        present: a || c.open,
        children: M.jsx(yd, {
          asChild: !0,
          container: l,
          children: r
        })
      })
    })
  }
  ;
Ib.displayName = Od;
var qs = "TooltipContent"
  , tx = w.forwardRef((e, i) => {
    const a = YR(qs, e.__scopeTooltip)
      , { forceMount: r = a.forceMount, side: l = "top", ...c } = e
      , d = dr(qs, e.__scopeTooltip);
    return M.jsx(Tl, {
      present: r || d.open,
      children: d.disableHoverableContent ? M.jsx(ex, {
        side: l,
        ...c,
        ref: i
      }) : M.jsx(XR, {
        side: l,
        ...c,
        ref: i
      })
    })
  }
  )
  , XR = w.forwardRef((e, i) => {
    const a = dr(qs, e.__scopeTooltip)
      , r = Wb(qs, e.__scopeTooltip)
      , l = w.useRef(null)
      , c = tn(i, l)
      , [d, h] = w.useState(null)
      , { trigger: p, onClose: m } = a
      , y = l.current
      , { onPointerInTransitChange: v } = r
      , b = w.useCallback(() => {
        h(null),
          v(!1)
      }
        , [v])
      , S = w.useCallback((E, A) => {
        const C = E.currentTarget
          , O = {
            x: E.clientX,
            y: E.clientY
          }
          , V = $R(O, C.getBoundingClientRect())
          , j = JR(O, V)
          , L = IR(A.getBoundingClientRect())
          , k = eM([...j, ...L]);
        h(k),
          v(!0)
      }
        , [v]);
    return w.useEffect(() => () => b(), [b]),
      w.useEffect(() => {
        if (p && y) {
          const E = C => S(C, y)
            , A = C => S(C, p);
          return p.addEventListener("pointerleave", E),
            y.addEventListener("pointerleave", A),
            () => {
              p.removeEventListener("pointerleave", E),
                y.removeEventListener("pointerleave", A)
            }
        }
      }
        , [p, y, S, b]),
      w.useEffect(() => {
        if (d) {
          const E = A => {
            const C = A.target
              , O = {
                x: A.clientX,
                y: A.clientY
              }
              , V = p?.contains(C) || y?.contains(C)
              , j = !tM(O, d);
            V ? b() : j && (b(),
              m())
          }
            ;
          return document.addEventListener("pointermove", E),
            () => document.removeEventListener("pointermove", E)
        }
      }
        , [p, y, d, m, b]),
      M.jsx(ex, {
        ...e,
        ref: c
      })
  }
  )
  , [KR, QR] = Dl(Jb, {
    isInside: !1
  })
  , ZR = _E("TooltipContent")
  , ex = w.forwardRef((e, i) => {
    const { __scopeTooltip: a, children: r, "aria-label": l, onEscapeKeyDown: c, onPointerDownOutside: d, ...h } = e
      , p = dr(qs, a)
      , m = Dd(a)
      , { onClose: y } = p;
    return w.useEffect(() => (document.addEventListener(Kg, y),
      () => document.removeEventListener(Kg, y)), [y]),
      w.useEffect(() => {
        if (p.trigger) {
          const v = b => {
            b.target?.contains(p.trigger) && y()
          }
            ;
          return window.addEventListener("scroll", v, {
            capture: !0
          }),
            () => window.removeEventListener("scroll", v, {
              capture: !0
            })
        }
      }
        , [p.trigger, y]),
      M.jsx(pd, {
        asChild: !0,
        disableOutsidePointerEvents: !1,
        onEscapeKeyDown: c,
        onPointerDownOutside: d,
        onFocusOutside: v => v.preventDefault(),
        onDismiss: y,
        children: M.jsxs(BR, {
          "data-state": p.stateAttribute,
          ...m,
          ...h,
          ref: i,
          style: {
            ...h.style,
            "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
            "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
            "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
          },
          children: [M.jsx(ZR, {
            children: r
          }), M.jsx(KR, {
            scope: a,
            isInside: !0,
            children: M.jsx(sA, {
              id: p.contentId,
              role: "tooltip",
              children: l || r
            })
          })]
        })
      })
  }
  );
tx.displayName = qs;
var nx = "TooltipArrow"
  , WR = w.forwardRef((e, i) => {
    const { __scopeTooltip: a, ...r } = e
      , l = Dd(a);
    return QR(nx, a).isInside ? null : M.jsx(kR, {
      ...l,
      ...r,
      ref: i
    })
  }
  );
WR.displayName = nx;
function $R(e, i) {
  const a = Math.abs(i.top - e.y)
    , r = Math.abs(i.bottom - e.y)
    , l = Math.abs(i.right - e.x)
    , c = Math.abs(i.left - e.x);
  switch (Math.min(a, r, l, c)) {
    case c:
      return "left";
    case l:
      return "right";
    case a:
      return "top";
    case r:
      return "bottom";
    default:
      throw new Error("unreachable")
  }
}
function JR(e, i, a = 5) {
  const r = [];
  switch (i) {
    case "top":
      r.push({
        x: e.x - a,
        y: e.y + a
      }, {
        x: e.x + a,
        y: e.y + a
      });
      break;
    case "bottom":
      r.push({
        x: e.x - a,
        y: e.y - a
      }, {
        x: e.x + a,
        y: e.y - a
      });
      break;
    case "left":
      r.push({
        x: e.x + a,
        y: e.y - a
      }, {
        x: e.x + a,
        y: e.y + a
      });
      break;
    case "right":
      r.push({
        x: e.x - a,
        y: e.y - a
      }, {
        x: e.x - a,
        y: e.y + a
      });
      break
  }
  return r
}
function IR(e) {
  const { top: i, right: a, bottom: r, left: l } = e;
  return [{
    x: l,
    y: i
  }, {
    x: a,
    y: i
  }, {
    x: a,
    y: r
  }, {
    x: l,
    y: r
  }]
}
function tM(e, i) {
  const { x: a, y: r } = e;
  let l = !1;
  for (let c = 0, d = i.length - 1; c < i.length; d = c++) {
    const h = i[c]
      , p = i[d]
      , m = h.x
      , y = h.y
      , v = p.x
      , b = p.y;
    y > r != b > r && a < (v - m) * (r - y) / (b - y) + m && (l = !l)
  }
  return l
}
function eM(e) {
  const i = e.slice();
  return i.sort((a, r) => a.x < r.x ? -1 : a.x > r.x ? 1 : a.y < r.y ? -1 : a.y > r.y ? 1 : 0),
    nM(i)
}
function nM(e) {
  if (e.length <= 1)
    return e.slice();
  const i = [];
  for (let r = 0; r < e.length; r++) {
    const l = e[r];
    for (; i.length >= 2;) {
      const c = i[i.length - 1]
        , d = i[i.length - 2];
      if ((c.x - d.x) * (l.y - d.y) >= (c.y - d.y) * (l.x - d.x))
        i.pop();
      else
        break
    }
    i.push(l)
  }
  i.pop();
  const a = [];
  for (let r = e.length - 1; r >= 0; r--) {
    const l = e[r];
    for (; a.length >= 2;) {
      const c = a[a.length - 1]
        , d = a[a.length - 2];
      if ((c.x - d.x) * (l.y - d.y) >= (c.y - d.y) * (l.x - d.x))
        a.pop();
      else
        break
    }
    a.push(l)
  }
  return a.pop(),
    i.length === 1 && a.length === 1 && i[0].x === a[0].x && i[0].y === a[0].y ? i : i.concat(a)
}
var iM = $b
  , sM = Ib
  , ix = tx;
const aM = iM
  , rM = w.forwardRef(({ className: e, sideOffset: i = 4, ...a }, r) => M.jsx(sM, {
    children: M.jsx(ix, {
      ref: r,
      sideOffset: i,
      className: _e("z-50 overflow-hidden rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-[--radix-tooltip-content-transform-origin]", e),
      ...a
    })
  }));
rM.displayName = ix.displayName;
const sx = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("rounded-xl border bg-card text-card-foreground shadow", e),
  ...i
}));
sx.displayName = "Card";
const oM = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("flex flex-col space-y-1.5 p-6", e),
  ...i
}));
oM.displayName = "CardHeader";
const lM = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("font-semibold leading-none tracking-tight", e),
  ...i
}));
lM.displayName = "CardTitle";
const uM = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("text-sm text-muted-foreground", e),
  ...i
}));
uM.displayName = "CardDescription";
const ax = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("p-6 pt-0", e),
  ...i
}));
ax.displayName = "CardContent";
const cM = w.forwardRef(({ className: e, ...i }, a) => M.jsx("div", {
  ref: a,
  className: _e("flex items-center p-6 pt-0", e),
  ...i
}));
cM.displayName = "CardFooter";
function fM() {
  return M.jsx("div", {
    className: "min-h-screen w-full flex items-center justify-center bg-gray-50",
    children: M.jsx(sx, {
      className: "w-full max-w-md mx-4",
      children: M.jsxs(ax, {
        className: "pt-6",
        children: [M.jsxs("div", {
          className: "flex mb-4 gap-2",
          children: [M.jsx(OA, {
            className: "h-8 w-8 text-red-500"
          }), M.jsx("h1", {
            className: "text-2xl font-bold text-gray-900",
            children: "404 Page Not Found"
          })]
        }), M.jsx("p", {
          className: "mt-4 text-sm text-gray-600",
          children: "Did you forget to add the page to the router?"
        })]
      })
    })
  })
}
const Nd = w.createContext({});
function Ol(e) {
  const i = w.useRef(null);
  return i.current === null && (i.current = e()),
    i.current
}
const dM = typeof window < "u"
  , rx = dM ? w.useLayoutEffect : w.useEffect
  , Nl = w.createContext(null);
function jd(e, i) {
  e.indexOf(i) === -1 && e.push(i)
}
function ol(e, i) {
  const a = e.indexOf(i);
  a > -1 && e.splice(a, 1)
}
const yn = (e, i, a) => a > i ? i : a < e ? e : a;
let _d = () => { }
  ;
const bi = {}
  , ox = e => /^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(e);
function lx(e) {
  return typeof e == "object" && e !== null
}
const ux = e => /^0[^.\s]+$/u.test(e);
function cx(e) {
  let i;
  return () => (i === void 0 && (i = e()),
    i)
}
const Ye = e => e
  , hM = (e, i) => a => i(e(a))
  , hr = (...e) => e.reduce(hM)
  , rr = (e, i, a) => {
    const r = i - e;
    return r === 0 ? 1 : (a - e) / r
  }
  ;
class Vd {
  constructor() {
    this.subscriptions = []
  }
  add(i) {
    return jd(this.subscriptions, i),
      () => ol(this.subscriptions, i)
  }
  notify(i, a, r) {
    const l = this.subscriptions.length;
    if (l)
      if (l === 1)
        this.subscriptions[0](i, a, r);
      else
        for (let c = 0; c < l; c++) {
          const d = this.subscriptions[c];
          d && d(i, a, r)
        }
  }
  getSize() {
    return this.subscriptions.length
  }
  clear() {
    this.subscriptions.length = 0
  }
}
const je = e => e * 1e3
  , Ge = e => e / 1e3;
function fx(e, i) {
  return i ? e * (1e3 / i) : 0
}
const dx = (e, i, a) => (((1 - 3 * a + 3 * i) * e + (3 * a - 6 * i)) * e + 3 * i) * e
  , mM = 1e-7
  , pM = 12;
function yM(e, i, a, r, l) {
  let c, d, h = 0;
  do
    d = i + (a - i) / 2,
      c = dx(d, r, l) - e,
      c > 0 ? a = d : i = d;
  while (Math.abs(c) > mM && ++h < pM);
  return d
}
function mr(e, i, a, r) {
  if (e === i && a === r)
    return Ye;
  const l = c => yM(c, 0, 1, e, a);
  return c => c === 0 || c === 1 ? c : dx(l(c), i, r)
}
const hx = e => i => i <= .5 ? e(2 * i) / 2 : (2 - e(2 * (1 - i))) / 2
  , mx = e => i => 1 - e(1 - i)
  , px = mr(.33, 1.53, .69, .99)
  , zd = mx(px)
  , yx = hx(zd)
  , gx = e => e >= 1 ? 1 : (e *= 2) < 1 ? .5 * zd(e) : .5 * (2 - Math.pow(2, -10 * (e - 1)))
  , Ld = e => 1 - Math.sin(Math.acos(e))
  , vx = mx(Ld)
  , bx = hx(Ld)
  , gM = mr(.42, 0, 1, 1)
  , vM = mr(0, 0, .58, 1)
  , xx = mr(.42, 0, .58, 1)
  , bM = e => Array.isArray(e) && typeof e[0] != "number"
  , Sx = e => Array.isArray(e) && typeof e[0] == "number"
  , xM = {
    linear: Ye,
    easeIn: gM,
    easeInOut: xx,
    easeOut: vM,
    circIn: Ld,
    circInOut: bx,
    circOut: vx,
    backIn: zd,
    backInOut: yx,
    backOut: px,
    anticipate: gx
  }
  , SM = e => typeof e == "string"
  , Qg = e => {
    if (Sx(e)) {
      _d(e.length === 4);
      const [i, a, r, l] = e;
      return mr(i, a, r, l)
    } else if (SM(e))
      return xM[e];
    return e
  }
  , Uo = ["setup", "read", "resolveKeyframes", "preUpdate", "update", "preRender", "render", "postRender"];
function TM(e, i) {
  let a = new Set
    , r = new Set
    , l = !1
    , c = !1;
  const d = new WeakSet;
  let h = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  };
  function p(y) {
    d.has(y) && (m.schedule(y),
      e()),
      y(h)
  }
  const m = {
    schedule: (y, v = !1, b = !1) => {
      const E = b && l ? a : r;
      return v && d.add(y),
        E.add(y),
        y
    }
    ,
    cancel: y => {
      r.delete(y),
        d.delete(y)
    }
    ,
    process: y => {
      if (h = y,
        l) {
        c = !0;
        return
      }
      l = !0;
      const v = a;
      a = r,
        r = v,
        a.forEach(p),
        a.clear(),
        l = !1,
        c && (c = !1,
          m.process(y))
    }
  };
  return m
}
const wM = 40;
function Tx(e, i) {
  let a = !1
    , r = !0;
  const l = {
    delta: 0,
    timestamp: 0,
    isProcessing: !1
  }
    , c = () => a = !0
    , d = Uo.reduce((j, L) => (j[L] = TM(c),
      j), {})
    , { setup: h, read: p, resolveKeyframes: m, preUpdate: y, update: v, preRender: b, render: S, postRender: E } = d
    , A = () => {
      const j = bi.useManualTiming
        , L = j ? l.timestamp : performance.now();
      a = !1,
        j || (l.delta = r ? 1e3 / 60 : Math.max(Math.min(L - l.timestamp, wM), 1)),
        l.timestamp = L,
        l.isProcessing = !0,
        h.process(l),
        p.process(l),
        m.process(l),
        y.process(l),
        v.process(l),
        b.process(l),
        S.process(l),
        E.process(l),
        l.isProcessing = !1,
        a && i && (r = !1,
          e(A))
    }
    , C = () => {
      a = !0,
        r = !0,
        l.isProcessing || e(A)
    }
    ;
  return {
    schedule: Uo.reduce((j, L) => {
      const k = d[L];
      return j[L] = (Q, Z = !1, H = !1) => (a || C(),
        k.schedule(Q, Z, H)),
        j
    }
      , {}),
    cancel: j => {
      for (let L = 0; L < Uo.length; L++)
        d[Uo[L]].cancel(j)
    }
    ,
    state: l,
    steps: d
  }
}
const { schedule: Vt, cancel: xi, state: re, steps: cf } = Tx(typeof requestAnimationFrame < "u" ? requestAnimationFrame : Ye, !0);
let Xo;
function EM() {
  Xo = void 0
}
const he = {
  now: () => (Xo === void 0 && he.set(re.isProcessing || bi.useManualTiming ? re.timestamp : performance.now()),
    Xo),
  set: e => {
    Xo = e,
      queueMicrotask(EM)
  }
}
  , wx = e => i => typeof i == "string" && i.startsWith(e)
  , Ex = wx("--")
  , AM = wx("var(--")
  , Pd = e => AM(e) ? CM.test(e.split("/*")[0].trim()) : !1
  , CM = /var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;
function Zg(e) {
  return typeof e != "string" ? !1 : e.split("/*")[0].includes("var(--")
}
const Ks = {
  test: e => typeof e == "number",
  parse: parseFloat,
  transform: e => e
}
  , or = {
    ...Ks,
    transform: e => yn(0, 1, e)
  }
  , Bo = {
    ...Ks,
    default: 1
  }
  , Ia = e => Math.round(e * 1e5) / 1e5
  , Ud = /-?(?:\d+(?:\.\d+)?|\.\d+)/gu;
function RM(e) {
  return e == null
}
const MM = /^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu
  , Bd = (e, i) => a => !!(typeof a == "string" && MM.test(a) && a.startsWith(e) || i && !RM(a) && Object.prototype.hasOwnProperty.call(a, i))
  , Ax = (e, i, a) => r => {
    if (typeof r != "string")
      return r;
    const [l, c, d, h] = r.match(Ud);
    return {
      [e]: parseFloat(l),
      [i]: parseFloat(c),
      [a]: parseFloat(d),
      alpha: h !== void 0 ? parseFloat(h) : 1
    }
  }
  , DM = e => yn(0, 255, e)
  , ff = {
    ...Ks,
    transform: e => Math.round(DM(e))
  }
  , Yi = {
    test: Bd("rgb", "red"),
    parse: Ax("red", "green", "blue"),
    transform: ({ red: e, green: i, blue: a, alpha: r = 1 }) => "rgba(" + ff.transform(e) + ", " + ff.transform(i) + ", " + ff.transform(a) + ", " + Ia(or.transform(r)) + ")"
  };
function OM(e) {
  let i = ""
    , a = ""
    , r = ""
    , l = "";
  return e.length > 5 ? (i = e.substring(1, 3),
    a = e.substring(3, 5),
    r = e.substring(5, 7),
    l = e.substring(7, 9)) : (i = e.substring(1, 2),
      a = e.substring(2, 3),
      r = e.substring(3, 4),
      l = e.substring(4, 5),
      i += i,
      a += a,
      r += r,
      l += l),
  {
    red: parseInt(i, 16),
    green: parseInt(a, 16),
    blue: parseInt(r, 16),
    alpha: l ? parseInt(l, 16) / 255 : 1
  }
}
const kf = {
  test: Bd("#"),
  parse: OM,
  transform: Yi.transform
}
  , pr = e => ({
    test: i => typeof i == "string" && i.endsWith(e) && i.split(" ").length === 1,
    parse: parseFloat,
    transform: i => `${i}${e}`
  })
  , hi = pr("deg")
  , pn = pr("%")
  , st = pr("px")
  , NM = pr("vh")
  , jM = pr("vw")
  , Wg = {
    ...pn,
    parse: e => pn.parse(e) / 100,
    transform: e => pn.transform(e * 100)
  }
  , Us = {
    test: Bd("hsl", "hue"),
    parse: Ax("hue", "saturation", "lightness"),
    transform: ({ hue: e, saturation: i, lightness: a, alpha: r = 1 }) => "hsla(" + Math.round(e) + ", " + pn.transform(Ia(i)) + ", " + pn.transform(Ia(a)) + ", " + Ia(or.transform(r)) + ")"
  }
  , Kt = {
    test: e => Yi.test(e) || kf.test(e) || Us.test(e),
    parse: e => Yi.test(e) ? Yi.parse(e) : Us.test(e) ? Us.parse(e) : kf.parse(e),
    transform: e => typeof e == "string" ? e : e.hasOwnProperty("red") ? Yi.transform(e) : Us.transform(e),
    getAnimatableNone: e => {
      const i = Kt.parse(e);
      return i.alpha = 0,
        Kt.transform(i)
    }
  }
  , _M = /(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;
function VM(e) {
  return isNaN(e) && typeof e == "string" && (e.match(Ud)?.length || 0) + (e.match(_M)?.length || 0) > 0
}
const Cx = "number"
  , Rx = "color"
  , zM = "var"
  , LM = "var("
  , $g = "${}"
  , PM = /var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;
function Gs(e) {
  const i = e.toString()
    , a = []
    , r = {
      color: [],
      number: [],
      var: []
    }
    , l = [];
  let c = 0;
  const h = i.replace(PM, p => (Kt.test(p) ? (r.color.push(c),
    l.push(Rx),
    a.push(Kt.parse(p))) : p.startsWith(LM) ? (r.var.push(c),
      l.push(zM),
      a.push(p)) : (r.number.push(c),
        l.push(Cx),
        a.push(parseFloat(p))),
    ++c,
    $g)).split($g);
  return {
    values: a,
    split: h,
    indexes: r,
    types: l
  }
}
function UM(e) {
  return Gs(e).values
}
function Mx({ split: e, types: i }) {
  const a = e.length;
  return r => {
    let l = "";
    for (let c = 0; c < a; c++)
      if (l += e[c],
        r[c] !== void 0) {
        const d = i[c];
        d === Cx ? l += Ia(r[c]) : d === Rx ? l += Kt.transform(r[c]) : l += r[c]
      }
    return l
  }
}
function BM(e) {
  return Mx(Gs(e))
}
const kM = e => typeof e == "number" ? 0 : Kt.test(e) ? Kt.getAnimatableNone(e) : e
  , HM = (e, i) => typeof e == "number" ? i?.trim().endsWith("/") ? e : 0 : kM(e);
function FM(e) {
  const i = Gs(e);
  return Mx(i)(i.values.map((r, l) => HM(r, i.split[l])))
}
const Ie = {
  test: VM,
  parse: UM,
  createTransformer: BM,
  getAnimatableNone: FM
};
function df(e, i, a) {
  return a < 0 && (a += 1),
    a > 1 && (a -= 1),
    a < 1 / 6 ? e + (i - e) * 6 * a : a < 1 / 2 ? i : a < 2 / 3 ? e + (i - e) * (2 / 3 - a) * 6 : e
}
function qM({ hue: e, saturation: i, lightness: a, alpha: r }) {
  e /= 360,
    i /= 100,
    a /= 100;
  let l = 0
    , c = 0
    , d = 0;
  if (!i)
    l = c = d = a;
  else {
    const h = a < .5 ? a * (1 + i) : a + i - a * i
      , p = 2 * a - h;
    l = df(p, h, e + 1 / 3),
      c = df(p, h, e),
      d = df(p, h, e - 1 / 3)
  }
  return {
    red: Math.round(l * 255),
    green: Math.round(c * 255),
    blue: Math.round(d * 255),
    alpha: r
  }
}
function ll(e, i) {
  return a => a > 0 ? i : e
}
const Lt = (e, i, a) => e + (i - e) * a
  , hf = (e, i, a) => {
    const r = e * e
      , l = a * (i * i - r) + r;
    return l < 0 ? 0 : Math.sqrt(l)
  }
  , GM = [kf, Yi, Us]
  , YM = e => GM.find(i => i.test(e));
function Jg(e) {
  const i = YM(e);
  if (!i)
    return !1;
  let a = i.parse(e);
  return i === Us && (a = qM(a)),
    a
}
const Ig = (e, i) => {
  const a = Jg(e)
    , r = Jg(i);
  if (!a || !r)
    return ll(e, i);
  const l = {
    ...a
  };
  return c => (l.red = hf(a.red, r.red, c),
    l.green = hf(a.green, r.green, c),
    l.blue = hf(a.blue, r.blue, c),
    l.alpha = Lt(a.alpha, r.alpha, c),
    Yi.transform(l))
}
  , Hf = new Set(["none", "hidden"]);
function XM(e, i) {
  return Hf.has(e) ? a => a <= 0 ? e : i : a => a >= 1 ? i : e
}
function KM(e, i) {
  return a => Lt(e, i, a)
}
function kd(e) {
  return typeof e == "number" ? KM : typeof e == "string" ? Pd(e) ? ll : Kt.test(e) ? Ig : WM : Array.isArray(e) ? Dx : typeof e == "object" ? Kt.test(e) ? Ig : QM : ll
}
function Dx(e, i) {
  const a = [...e]
    , r = a.length
    , l = e.map((c, d) => kd(c)(c, i[d]));
  return c => {
    for (let d = 0; d < r; d++)
      a[d] = l[d](c);
    return a
  }
}
function QM(e, i) {
  const a = {
    ...e,
    ...i
  }
    , r = {};
  for (const l in a)
    e[l] !== void 0 && i[l] !== void 0 && (r[l] = kd(e[l])(e[l], i[l]));
  return l => {
    for (const c in r)
      a[c] = r[c](l);
    return a
  }
}
function ZM(e, i) {
  const a = []
    , r = {
      color: 0,
      var: 0,
      number: 0
    };
  for (let l = 0; l < i.values.length; l++) {
    const c = i.types[l]
      , d = e.indexes[c][r[c]]
      , h = e.values[d] ?? 0;
    a[l] = h,
      r[c]++
  }
  return a
}
const WM = (e, i) => {
  const a = Ie.createTransformer(i)
    , r = Gs(e)
    , l = Gs(i);
  return r.indexes.var.length === l.indexes.var.length && r.indexes.color.length === l.indexes.color.length && r.indexes.number.length >= l.indexes.number.length ? Hf.has(e) && !l.values.length || Hf.has(i) && !r.values.length ? XM(e, i) : hr(Dx(ZM(r, l), l.values), a) : ll(e, i)
}
  ;
function Ox(e, i, a) {
  return typeof e == "number" && typeof i == "number" && typeof a == "number" ? Lt(e, i, a) : kd(e)(e, i)
}
const $M = e => {
  const i = ({ timestamp: a }) => e(a);
  return {
    start: (a = !0) => Vt.update(i, a),
    stop: () => xi(i),
    now: () => re.isProcessing ? re.timestamp : he.now()
  }
}
  , Nx = (e, i, a = 10) => {
    let r = "";
    const l = Math.max(Math.round(i / a), 2);
    for (let c = 0; c < l; c++)
      r += Math.round(e(c / (l - 1)) * 1e4) / 1e4 + ", ";
    return `linear(${r.substring(0, r.length - 2)})`
  }
  , ul = 2e4;
function Hd(e) {
  let i = 0;
  const a = 50;
  let r = e.next(i);
  for (; !r.done && i < ul;)
    i += a,
      r = e.next(i);
  return i >= ul ? 1 / 0 : i
}
function JM(e, i = 100, a) {
  const r = a({
    ...e,
    keyframes: [0, i]
  })
    , l = Math.min(Hd(r), ul);
  return {
    type: "keyframes",
    ease: c => r.next(l * c).value / i,
    duration: Ge(l)
  }
}
const Ft = {
  stiffness: 100,
  damping: 10,
  mass: 1,
  velocity: 0,
  duration: 800,
  bounce: .3,
  visualDuration: .3,
  restSpeed: {
    granular: .01,
    default: 2
  },
  restDelta: {
    granular: .005,
    default: .5
  },
  minDuration: .01,
  maxDuration: 10,
  minDamping: .05,
  maxDamping: 1
};
function Ff(e, i) {
  return e * Math.sqrt(1 - i * i)
}
const IM = 12;
function tD(e, i, a) {
  let r = a;
  for (let l = 1; l < IM; l++)
    r = r - e(r) / i(r);
  return r
}
const mf = .001;
function eD({ duration: e = Ft.duration, bounce: i = Ft.bounce, velocity: a = Ft.velocity, mass: r = Ft.mass }) {
  let l, c, d = 1 - i;
  d = yn(Ft.minDamping, Ft.maxDamping, d),
    e = yn(Ft.minDuration, Ft.maxDuration, Ge(e)),
    d < 1 ? (l = m => {
      const y = m * d
        , v = y * e
        , b = y - a
        , S = Ff(m, d)
        , E = Math.exp(-v);
      return mf - b / S * E
    }
      ,
      c = m => {
        const v = m * d * e
          , b = v * a + a
          , S = Math.pow(d, 2) * Math.pow(m, 2) * e
          , E = Math.exp(-v)
          , A = Ff(Math.pow(m, 2), d);
        return (-l(m) + mf > 0 ? -1 : 1) * ((b - S) * E) / A
      }
    ) : (l = m => {
      const y = Math.exp(-m * e)
        , v = (m - a) * e + 1;
      return -mf + y * v
    }
      ,
      c = m => {
        const y = Math.exp(-m * e)
          , v = (a - m) * (e * e);
        return y * v
      }
    );
  const h = 5 / e
    , p = tD(l, c, h);
  if (e = je(e),
    isNaN(p))
    return {
      stiffness: Ft.stiffness,
      damping: Ft.damping,
      duration: e
    };
  {
    const m = Math.pow(p, 2) * r;
    return {
      stiffness: m,
      damping: d * 2 * Math.sqrt(r * m),
      duration: e
    }
  }
}
const nD = ["duration", "bounce"]
  , iD = ["stiffness", "damping", "mass"];
function tv(e, i) {
  return i.some(a => e[a] !== void 0)
}
function sD(e) {
  let i = {
    velocity: Ft.velocity,
    stiffness: Ft.stiffness,
    damping: Ft.damping,
    mass: Ft.mass,
    isResolvedFromDuration: !1,
    ...e
  };
  if (!tv(e, iD) && tv(e, nD))
    if (i.velocity = 0,
      e.visualDuration) {
      const a = e.visualDuration
        , r = 2 * Math.PI / (a * 1.2)
        , l = r * r
        , c = 2 * yn(.05, 1, 1 - (e.bounce || 0)) * Math.sqrt(l);
      i = {
        ...i,
        mass: Ft.mass,
        stiffness: l,
        damping: c
      }
    } else {
      const a = eD({
        ...e,
        velocity: 0
      });
      i = {
        ...i,
        ...a,
        mass: Ft.mass
      },
        i.isResolvedFromDuration = !0
    }
  return i
}
function cl(e = Ft.visualDuration, i = Ft.bounce) {
  const a = typeof e != "object" ? {
    visualDuration: e,
    keyframes: [0, 1],
    bounce: i
  } : e;
  let { restSpeed: r, restDelta: l } = a;
  const c = a.keyframes[0]
    , d = a.keyframes[a.keyframes.length - 1]
    , h = {
      done: !1,
      value: c
    }
    , { stiffness: p, damping: m, mass: y, duration: v, velocity: b, isResolvedFromDuration: S } = sD({
      ...a,
      velocity: -Ge(a.velocity || 0)
    })
    , E = b || 0
    , A = m / (2 * Math.sqrt(p * y))
    , C = d - c
    , O = Ge(Math.sqrt(p / y))
    , V = Math.abs(C) < 5;
  r || (r = V ? Ft.restSpeed.granular : Ft.restSpeed.default),
    l || (l = V ? Ft.restDelta.granular : Ft.restDelta.default);
  let j, L, k, Q, Z, H;
  if (A < 1)
    k = Ff(O, A),
      Q = (E + A * O * C) / k,
      j = W => {
        const ot = Math.exp(-A * O * W);
        return d - ot * (Q * Math.sin(k * W) + C * Math.cos(k * W))
      }
      ,
      Z = A * O * Q + C * k,
      H = A * O * C - Q * k,
      L = W => Math.exp(-A * O * W) * (Z * Math.sin(k * W) + H * Math.cos(k * W));
  else if (A === 1) {
    j = ot => d - Math.exp(-O * ot) * (C + (E + O * C) * ot);
    const W = E + O * C;
    L = ot => Math.exp(-O * ot) * (O * W * ot - E)
  } else {
    const W = O * Math.sqrt(A * A - 1);
    j = I => {
      const ct = Math.exp(-A * O * I)
        , _ = Math.min(W * I, 300);
      return d - ct * ((E + A * O * C) * Math.sinh(_) + W * C * Math.cosh(_)) / W
    }
      ;
    const ot = (E + A * O * C) / W
      , lt = A * O * ot - C * W
      , yt = A * O * C - ot * W;
    L = I => {
      const ct = Math.exp(-A * O * I)
        , _ = Math.min(W * I, 300);
      return ct * (lt * Math.sinh(_) + yt * Math.cosh(_))
    }
  }
  const $ = {
    calculatedDuration: S && v || null,
    velocity: W => je(L(W)),
    next: W => {
      if (!S && A < 1) {
        const lt = Math.exp(-A * O * W)
          , yt = Math.sin(k * W)
          , I = Math.cos(k * W)
          , ct = d - lt * (Q * yt + C * I)
          , _ = je(lt * (Z * yt + H * I));
        return h.done = Math.abs(_) <= r && Math.abs(d - ct) <= l,
          h.value = h.done ? d : ct,
          h
      }
      const ot = j(W);
      if (S)
        h.done = W >= v;
      else {
        const lt = je(L(W));
        h.done = Math.abs(lt) <= r && Math.abs(d - ot) <= l
      }
      return h.value = h.done ? d : ot,
        h
    }
    ,
    toString: () => {
      const W = Math.min(Hd($), ul)
        , ot = Nx(lt => $.next(W * lt).value, W, 30);
      return W + "ms " + ot
    }
    ,
    toTransition: () => { }
  };
  return $
}
cl.applyToOptions = e => {
  const i = JM(e, 100, cl);
  return e.ease = i.ease,
    e.duration = je(i.duration),
    e.type = "keyframes",
    e
}
  ;
const aD = 5;
function jx(e, i, a) {
  const r = Math.max(i - aD, 0);
  return fx(a - e(r), i - r)
}
function qf({ keyframes: e, velocity: i = 0, power: a = .8, timeConstant: r = 325, bounceDamping: l = 10, bounceStiffness: c = 500, modifyTarget: d, min: h, max: p, restDelta: m = .5, restSpeed: y }) {
  const v = e[0]
    , b = {
      done: !1,
      value: v
    }
    , S = H => h !== void 0 && H < h || p !== void 0 && H > p
    , E = H => h === void 0 ? p : p === void 0 || Math.abs(h - H) < Math.abs(p - H) ? h : p;
  let A = a * i;
  const C = v + A
    , O = d === void 0 ? C : d(C);
  O !== C && (A = O - v);
  const V = H => -A * Math.exp(-H / r)
    , j = H => O + V(H)
    , L = H => {
      const $ = V(H)
        , W = j(H);
      b.done = Math.abs($) <= m,
        b.value = b.done ? O : W
    }
    ;
  let k, Q;
  const Z = H => {
    S(b.value) && (k = H,
      Q = cl({
        keyframes: [b.value, E(b.value)],
        velocity: jx(j, H, b.value),
        damping: l,
        stiffness: c,
        restDelta: m,
        restSpeed: y
      }))
  }
    ;
  return Z(0),
  {
    calculatedDuration: null,
    next: H => {
      let $ = !1;
      return !Q && k === void 0 && ($ = !0,
        L(H),
        Z(H)),
        k !== void 0 && H >= k ? Q.next(H - k) : (!$ && L(H),
          b)
    }
  }
}
function rD(e, i, a) {
  const r = []
    , l = a || bi.mix || Ox
    , c = e.length - 1;
  for (let d = 0; d < c; d++) {
    let h = l(e[d], e[d + 1]);
    if (i) {
      const p = Array.isArray(i) ? i[d] || Ye : i;
      h = hr(p, h)
    }
    r.push(h)
  }
  return r
}
function oD(e, i, { clamp: a = !0, ease: r, mixer: l } = {}) {
  const c = e.length;
  if (_d(c === i.length),
    c === 1)
    return () => i[0];
  if (c === 2 && i[0] === i[1])
    return () => i[1];
  const d = e[0] === e[1];
  e[0] > e[c - 1] && (e = [...e].reverse(),
    i = [...i].reverse());
  const h = rD(i, r, l)
    , p = h.length
    , m = y => {
      if (d && y < e[0])
        return i[0];
      let v = 0;
      if (p > 1)
        for (; v < e.length - 2 && !(y < e[v + 1]); v++)
          ;
      const b = rr(e[v], e[v + 1], y);
      return h[v](b)
    }
    ;
  return a ? y => m(yn(e[0], e[c - 1], y)) : m
}
function lD(e, i) {
  const a = e[e.length - 1];
  for (let r = 1; r <= i; r++) {
    const l = rr(0, i, r);
    e.push(Lt(a, 1, l))
  }
}
function uD(e) {
  const i = [0];
  return lD(i, e.length - 1),
    i
}
function cD(e, i) {
  return e.map(a => a * i)
}
function fD(e, i) {
  return e.map(() => i || xx).splice(0, e.length - 1)
}
function tr({ duration: e = 300, keyframes: i, times: a, ease: r = "easeInOut" }) {
  const l = bM(r) ? r.map(Qg) : Qg(r)
    , c = {
      done: !1,
      value: i[0]
    }
    , d = cD(a && a.length === i.length ? a : uD(i), e)
    , h = oD(d, i, {
      ease: Array.isArray(l) ? l : fD(i, l)
    });
  return {
    calculatedDuration: e,
    next: p => (c.value = h(p),
      c.done = p >= e,
      c)
  }
}
const dD = e => e !== null;
function jl(e, { repeat: i, repeatType: a = "loop" }, r, l = 1) {
  const c = e.filter(dD)
    , h = l < 0 || i && a !== "loop" && i % 2 === 1 ? 0 : c.length - 1;
  return !h || r === void 0 ? c[h] : r
}
const hD = {
  decay: qf,
  inertia: qf,
  tween: tr,
  keyframes: tr,
  spring: cl
};
function _x(e) {
  typeof e.type == "string" && (e.type = hD[e.type])
}
class Fd {
  constructor() {
    this.updateFinished()
  }
  get finished() {
    return this._finished
  }
  updateFinished() {
    this._finished = new Promise(i => {
      this.resolve = i
    }
    )
  }
  notifyFinished() {
    this.resolve()
  }
  then(i, a) {
    return this.finished.then(i, a)
  }
}
const mD = e => e / 100;
class fl extends Fd {
  constructor(i) {
    super(),
      this.state = "idle",
      this.startTime = null,
      this.isStopped = !1,
      this.currentTime = 0,
      this.holdTime = null,
      this.playbackSpeed = 1,
      this.delayState = {
        done: !1,
        value: void 0
      },
      this.stop = () => {
        const { motionValue: a } = this.options;
        a && a.updatedAt !== he.now() && this.tick(he.now()),
          this.isStopped = !0,
          this.state !== "idle" && (this.teardown(),
            this.options.onStop?.())
      }
      ,
      this.options = i,
      this.initAnimation(),
      this.play(),
      i.autoplay === !1 && this.pause()
  }
  initAnimation() {
    const { options: i } = this;
    _x(i);
    const { type: a = tr, repeat: r = 0, repeatDelay: l = 0, repeatType: c, velocity: d = 0 } = i;
    let { keyframes: h } = i;
    const p = a || tr;
    p !== tr && typeof h[0] != "number" && (this.mixKeyframes = hr(mD, Ox(h[0], h[1])),
      h = [0, 100]);
    const m = p({
      ...i,
      keyframes: h
    });
    c === "mirror" && (this.mirroredGenerator = p({
      ...i,
      keyframes: [...h].reverse(),
      velocity: -d
    })),
      m.calculatedDuration === null && (m.calculatedDuration = Hd(m));
    const { calculatedDuration: y } = m;
    this.calculatedDuration = y,
      this.resolvedDuration = y + l,
      this.totalDuration = this.resolvedDuration * (r + 1) - l,
      this.generator = m
  }
  updateTime(i) {
    const a = Math.round(i - this.startTime) * this.playbackSpeed;
    this.holdTime !== null ? this.currentTime = this.holdTime : this.currentTime = a
  }
  tick(i, a = !1) {
    const { generator: r, totalDuration: l, mixKeyframes: c, mirroredGenerator: d, resolvedDuration: h, calculatedDuration: p } = this;
    if (this.startTime === null)
      return r.next(0);
    const { delay: m = 0, keyframes: y, repeat: v, repeatType: b, repeatDelay: S, type: E, onUpdate: A, finalKeyframe: C } = this.options;
    this.speed > 0 ? this.startTime = Math.min(this.startTime, i) : this.speed < 0 && (this.startTime = Math.min(i - l / this.speed, this.startTime)),
      a ? this.currentTime = i : this.updateTime(i);
    const O = this.currentTime - m * (this.playbackSpeed >= 0 ? 1 : -1)
      , V = this.playbackSpeed >= 0 ? O < 0 : O > l;
    this.currentTime = Math.max(O, 0),
      this.state === "finished" && this.holdTime === null && (this.currentTime = l);
    let j = this.currentTime
      , L = r;
    if (v) {
      const H = Math.min(this.currentTime, l) / h;
      let $ = Math.floor(H)
        , W = H % 1;
      !W && H >= 1 && (W = 1),
        W === 1 && $--,
        $ = Math.min($, v + 1),
        $ % 2 && (b === "reverse" ? (W = 1 - W,
          S && (W -= S / h)) : b === "mirror" && (L = d)),
        j = yn(0, 1, W) * h
    }
    let k;
    V ? (this.delayState.value = y[0],
      k = this.delayState) : k = L.next(j),
      c && !V && (k.value = c(k.value));
    let { done: Q } = k;
    !V && p !== null && (Q = this.playbackSpeed >= 0 ? this.currentTime >= l : this.currentTime <= 0);
    const Z = this.holdTime === null && (this.state === "finished" || this.state === "running" && Q);
    return Z && E !== qf && (k.value = jl(y, this.options, C, this.speed)),
      A && A(k.value),
      Z && this.finish(),
      k
  }
  then(i, a) {
    return this.finished.then(i, a)
  }
  get duration() {
    return Ge(this.calculatedDuration)
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Ge(i)
  }
  get time() {
    return Ge(this.currentTime)
  }
  set time(i) {
    i = je(i),
      this.currentTime = i,
      this.startTime === null || this.holdTime !== null || this.playbackSpeed === 0 ? this.holdTime = i : this.driver && (this.startTime = this.driver.now() - i / this.playbackSpeed),
      this.driver ? this.driver.start(!1) : (this.startTime = 0,
        this.state = "paused",
        this.holdTime = i,
        this.tick(i))
  }
  getGeneratorVelocity() {
    const i = this.currentTime;
    if (i <= 0)
      return this.options.velocity || 0;
    if (this.generator.velocity)
      return this.generator.velocity(i);
    const a = this.generator.next(i).value;
    return jx(r => this.generator.next(r).value, i, a)
  }
  get speed() {
    return this.playbackSpeed
  }
  set speed(i) {
    const a = this.playbackSpeed !== i;
    a && this.driver && this.updateTime(he.now()),
      this.playbackSpeed = i,
      a && this.driver && (this.time = Ge(this.currentTime))
  }
  play() {
    if (this.isStopped)
      return;
    const { driver: i = $M, startTime: a } = this.options;
    this.driver || (this.driver = i(l => this.tick(l))),
      this.options.onPlay?.();
    const r = this.driver.now();
    this.state === "finished" ? (this.updateFinished(),
      this.startTime = r) : this.holdTime !== null ? this.startTime = r - this.holdTime : this.startTime || (this.startTime = a ?? r),
      this.state === "finished" && this.speed < 0 && (this.startTime += this.calculatedDuration),
      this.holdTime = null,
      this.state = "running",
      this.driver.start()
  }
  pause() {
    this.state = "paused",
      this.updateTime(he.now()),
      this.holdTime = this.currentTime
  }
  complete() {
    this.state !== "running" && this.play(),
      this.state = "finished",
      this.holdTime = null
  }
  finish() {
    this.notifyFinished(),
      this.teardown(),
      this.state = "finished",
      this.options.onComplete?.()
  }
  cancel() {
    this.holdTime = null,
      this.startTime = 0,
      this.tick(0),
      this.teardown(),
      this.options.onCancel?.()
  }
  teardown() {
    this.state = "idle",
      this.stopDriver(),
      this.startTime = this.holdTime = null
  }
  stopDriver() {
    this.driver && (this.driver.stop(),
      this.driver = void 0)
  }
  sample(i) {
    return this.startTime = 0,
      this.tick(i, !0)
  }
  attachTimeline(i) {
    return this.options.allowFlatten && (this.options.type = "keyframes",
      this.options.ease = "linear",
      this.initAnimation()),
      this.driver?.stop(),
      i.observe(this)
  }
}
function pD(e) {
  for (let i = 1; i < e.length; i++)
    e[i] ?? (e[i] = e[i - 1])
}
const Xi = e => e * 180 / Math.PI
  , Gf = e => {
    const i = Xi(Math.atan2(e[1], e[0]));
    return Yf(i)
  }
  , yD = {
    x: 4,
    y: 5,
    translateX: 4,
    translateY: 5,
    scaleX: 0,
    scaleY: 3,
    scale: e => (Math.abs(e[0]) + Math.abs(e[3])) / 2,
    rotate: Gf,
    rotateZ: Gf,
    skewX: e => Xi(Math.atan(e[1])),
    skewY: e => Xi(Math.atan(e[2])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[2])) / 2
  }
  , Yf = e => (e = e % 360,
    e < 0 && (e += 360),
    e)
  , ev = Gf
  , nv = e => Math.sqrt(e[0] * e[0] + e[1] * e[1])
  , iv = e => Math.sqrt(e[4] * e[4] + e[5] * e[5])
  , gD = {
    x: 12,
    y: 13,
    z: 14,
    translateX: 12,
    translateY: 13,
    translateZ: 14,
    scaleX: nv,
    scaleY: iv,
    scale: e => (nv(e) + iv(e)) / 2,
    rotateX: e => Yf(Xi(Math.atan2(e[6], e[5]))),
    rotateY: e => Yf(Xi(Math.atan2(-e[2], e[0]))),
    rotateZ: ev,
    rotate: ev,
    skewX: e => Xi(Math.atan(e[4])),
    skewY: e => Xi(Math.atan(e[1])),
    skew: e => (Math.abs(e[1]) + Math.abs(e[4])) / 2
  };
function Xf(e) {
  return e.includes("scale") ? 1 : 0
}
function Kf(e, i) {
  if (!e || e === "none")
    return Xf(i);
  const a = e.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);
  let r, l;
  if (a)
    r = gD,
      l = a;
  else {
    const h = e.match(/^matrix\(([-\d.e\s,]+)\)$/u);
    r = yD,
      l = h
  }
  if (!l)
    return Xf(i);
  const c = r[i]
    , d = l[1].split(",").map(bD);
  return typeof c == "function" ? c(d) : d[c]
}
const vD = (e, i) => {
  const { transform: a = "none" } = getComputedStyle(e);
  return Kf(a, i)
}
  ;
function bD(e) {
  return parseFloat(e.trim())
}
const Qs = ["transformPerspective", "x", "y", "z", "translateX", "translateY", "translateZ", "scale", "scaleX", "scaleY", "rotate", "rotateX", "rotateY", "rotateZ", "skew", "skewX", "skewY"]
  , Zs = new Set(Qs)
  , sv = e => e === Ks || e === st
  , xD = new Set(["x", "y", "z"])
  , SD = Qs.filter(e => !xD.has(e));
function TD(e) {
  const i = [];
  return SD.forEach(a => {
    const r = e.getValue(a);
    r !== void 0 && (i.push([a, r.get()]),
      r.set(a.startsWith("scale") ? 1 : 0))
  }
  ),
    i
}
const mi = {
  width: ({ x: e }, { paddingLeft: i = "0", paddingRight: a = "0", boxSizing: r }) => {
    const l = e.max - e.min;
    return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a)
  }
  ,
  height: ({ y: e }, { paddingTop: i = "0", paddingBottom: a = "0", boxSizing: r }) => {
    const l = e.max - e.min;
    return r === "border-box" ? l : l - parseFloat(i) - parseFloat(a)
  }
  ,
  top: (e, { top: i }) => parseFloat(i),
  left: (e, { left: i }) => parseFloat(i),
  bottom: ({ y: e }, { top: i }) => parseFloat(i) + (e.max - e.min),
  right: ({ x: e }, { left: i }) => parseFloat(i) + (e.max - e.min),
  x: (e, { transform: i }) => Kf(i, "x"),
  y: (e, { transform: i }) => Kf(i, "y")
};
mi.translateX = mi.x;
mi.translateY = mi.y;
const Ki = new Set;
let Qf = !1
  , Zf = !1
  , Wf = !1;
function Vx() {
  if (Zf) {
    const e = Array.from(Ki).filter(r => r.needsMeasurement)
      , i = new Set(e.map(r => r.element))
      , a = new Map;
    i.forEach(r => {
      const l = TD(r);
      l.length && (a.set(r, l),
        r.render())
    }
    ),
      e.forEach(r => r.measureInitialState()),
      i.forEach(r => {
        r.render();
        const l = a.get(r);
        l && l.forEach(([c, d]) => {
          r.getValue(c)?.set(d)
        }
        )
      }
      ),
      e.forEach(r => r.measureEndState()),
      e.forEach(r => {
        r.suspendedScrollY !== void 0 && window.scrollTo(0, r.suspendedScrollY)
      }
      )
  }
  Zf = !1,
    Qf = !1,
    Ki.forEach(e => e.complete(Wf)),
    Ki.clear()
}
function zx() {
  Ki.forEach(e => {
    e.readKeyframes(),
      e.needsMeasurement && (Zf = !0)
  }
  )
}
function wD() {
  Wf = !0,
    zx(),
    Vx(),
    Wf = !1
}
class qd {
  constructor(i, a, r, l, c, d = !1) {
    this.state = "pending",
      this.isAsync = !1,
      this.needsMeasurement = !1,
      this.unresolvedKeyframes = [...i],
      this.onComplete = a,
      this.name = r,
      this.motionValue = l,
      this.element = c,
      this.isAsync = d
  }
  scheduleResolve() {
    this.state = "scheduled",
      this.isAsync ? (Ki.add(this),
        Qf || (Qf = !0,
          Vt.read(zx),
          Vt.resolveKeyframes(Vx))) : (this.readKeyframes(),
            this.complete())
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, name: a, element: r, motionValue: l } = this;
    if (i[0] === null) {
      const c = l?.get()
        , d = i[i.length - 1];
      if (c !== void 0)
        i[0] = c;
      else if (r && a) {
        const h = r.readValue(a, d);
        h != null && (i[0] = h)
      }
      i[0] === void 0 && (i[0] = d),
        l && c === void 0 && l.set(i[0])
    }
    pD(i)
  }
  setFinalKeyframe() { }
  measureInitialState() { }
  renderEndStyles() { }
  measureEndState() { }
  complete(i = !1) {
    this.state = "complete",
      this.onComplete(this.unresolvedKeyframes, this.finalKeyframe, i),
      Ki.delete(this)
  }
  cancel() {
    this.state === "scheduled" && (Ki.delete(this),
      this.state = "pending")
  }
  resume() {
    this.state === "pending" && this.scheduleResolve()
  }
}
const ED = e => e.startsWith("--");
function Lx(e, i, a) {
  ED(i) ? e.style.setProperty(i, a) : e.style[i] = a
}
const AD = {};
function Px(e, i) {
  const a = cx(e);
  return () => AD[i] ?? a()
}
const CD = Px(() => window.ScrollTimeline !== void 0, "scrollTimeline")
  , Ux = Px(() => {
    try {
      document.createElement("div").animate({
        opacity: 0
      }, {
        easing: "linear(0, 1)"
      })
    } catch {
      return !1
    }
    return !0
  }
    , "linearEasing")
  , $a = ([e, i, a, r]) => `cubic-bezier(${e}, ${i}, ${a}, ${r})`
  , av = {
    linear: "linear",
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    circIn: $a([0, .65, .55, 1]),
    circOut: $a([.55, 0, 1, .45]),
    backIn: $a([.31, .01, .66, -.59]),
    backOut: $a([.33, 1.53, .69, .99])
  };
function Bx(e, i) {
  if (e)
    return typeof e == "function" ? Ux() ? Nx(e, i) : "ease-out" : Sx(e) ? $a(e) : Array.isArray(e) ? e.map(a => Bx(a, i) || av.easeOut) : av[e]
}
function RD(e, i, a, { delay: r = 0, duration: l = 300, repeat: c = 0, repeatType: d = "loop", ease: h = "easeOut", times: p } = {}, m = void 0) {
  const y = {
    [i]: a
  };
  p && (y.offset = p);
  const v = Bx(h, l);
  Array.isArray(v) && (y.easing = v);
  const b = {
    delay: r,
    duration: l,
    easing: Array.isArray(v) ? "linear" : v,
    fill: "both",
    iterations: c + 1,
    direction: d === "reverse" ? "alternate" : "normal"
  };
  return m && (b.pseudoElement = m),
    e.animate(y, b)
}
function kx(e) {
  return typeof e == "function" && "applyToOptions" in e
}
function MD({ type: e, ...i }) {
  return kx(e) && Ux() ? e.applyToOptions(i) : (i.duration ?? (i.duration = 300),
    i.ease ?? (i.ease = "easeOut"),
    i)
}
class Hx extends Fd {
  constructor(i) {
    if (super(),
      this.finishedTime = null,
      this.isStopped = !1,
      this.manualStartTime = null,
      !i)
      return;
    const { element: a, name: r, keyframes: l, pseudoElement: c, allowFlatten: d = !1, finalKeyframe: h, onComplete: p } = i;
    this.isPseudoElement = !!c,
      this.allowFlatten = d,
      this.options = i,
      _d(typeof i.type != "string");
    const m = MD(i);
    this.animation = RD(a, r, l, m, c),
      m.autoplay === !1 && this.animation.pause(),
      this.animation.onfinish = () => {
        if (this.finishedTime = this.time,
          !c) {
          const y = jl(l, this.options, h, this.speed);
          this.updateMotionValue && this.updateMotionValue(y),
            Lx(a, r, y),
            this.animation.cancel()
        }
        p?.(),
          this.notifyFinished()
      }
  }
  play() {
    this.isStopped || (this.manualStartTime = null,
      this.animation.play(),
      this.state === "finished" && this.updateFinished())
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.finish?.()
  }
  cancel() {
    try {
      this.animation.cancel()
    } catch { }
  }
  stop() {
    if (this.isStopped)
      return;
    this.isStopped = !0;
    const { state: i } = this;
    i === "idle" || i === "finished" || (this.updateMotionValue ? this.updateMotionValue() : this.commitStyles(),
      this.isPseudoElement || this.cancel())
  }
  commitStyles() {
    const i = this.options?.element;
    !this.isPseudoElement && i?.isConnected && this.animation.commitStyles?.()
  }
  get duration() {
    const i = this.animation.effect?.getComputedTiming?.().duration || 0;
    return Ge(Number(i))
  }
  get iterationDuration() {
    const { delay: i = 0 } = this.options || {};
    return this.duration + Ge(i)
  }
  get time() {
    return Ge(Number(this.animation.currentTime) || 0)
  }
  set time(i) {
    const a = this.finishedTime !== null;
    this.manualStartTime = null,
      this.finishedTime = null,
      this.animation.currentTime = je(i),
      a && this.animation.pause()
  }
  get speed() {
    return this.animation.playbackRate
  }
  set speed(i) {
    i < 0 && (this.finishedTime = null),
      this.animation.playbackRate = i
  }
  get state() {
    return this.finishedTime !== null ? "finished" : this.animation.playState
  }
  get startTime() {
    return this.manualStartTime ?? Number(this.animation.startTime)
  }
  set startTime(i) {
    this.manualStartTime = this.animation.startTime = i
  }
  attachTimeline({ timeline: i, rangeStart: a, rangeEnd: r, observe: l }) {
    return this.allowFlatten && this.animation.effect?.updateTiming({
      easing: "linear"
    }),
      this.animation.onfinish = null,
      i && CD() ? (this.animation.timeline = i,
        a && (this.animation.rangeStart = a),
        r && (this.animation.rangeEnd = r),
        Ye) : l(this)
  }
}
const Fx = {
  anticipate: gx,
  backInOut: yx,
  circInOut: bx
};
function DD(e) {
  return e in Fx
}
function OD(e) {
  typeof e.ease == "string" && DD(e.ease) && (e.ease = Fx[e.ease])
}
const pf = 10;
class ND extends Hx {
  constructor(i) {
    OD(i),
      _x(i),
      super(i),
      i.startTime !== void 0 && i.autoplay !== !1 && (this.startTime = i.startTime),
      this.options = i
  }
  updateMotionValue(i) {
    const { motionValue: a, onUpdate: r, onComplete: l, element: c, ...d } = this.options;
    if (!a)
      return;
    if (i !== void 0) {
      a.set(i);
      return
    }
    const h = new fl({
      ...d,
      autoplay: !1
    })
      , p = Math.max(pf, he.now() - this.startTime)
      , m = yn(0, pf, p - pf)
      , y = h.sample(p).value
      , { name: v } = this.options;
    c && v && Lx(c, v, y),
      a.setWithVelocity(h.sample(Math.max(0, p - m)).value, y, m),
      h.stop()
  }
}
const rv = (e, i) => i === "zIndex" ? !1 : !!(typeof e == "number" || Array.isArray(e) || typeof e == "string" && (Ie.test(e) || e === "0") && !e.startsWith("url("));
function jD(e) {
  const i = e[0];
  if (e.length === 1)
    return !0;
  for (let a = 0; a < e.length; a++)
    if (e[a] !== i)
      return !0
}
function _D(e, i, a, r) {
  const l = e[0];
  if (l === null)
    return !1;
  if (i === "display" || i === "visibility")
    return !0;
  const c = e[e.length - 1]
    , d = rv(l, i)
    , h = rv(c, i);
  return !d || !h ? !1 : jD(e) || (a === "spring" || kx(a)) && r
}
function $f(e) {
  e.duration = 0,
    e.type = "keyframes"
}
const qx = new Set(["opacity", "clipPath", "filter", "transform"])
  , VD = /^(?:oklch|oklab|lab|lch|color|color-mix|light-dark)\(/;
function zD(e) {
  for (let i = 0; i < e.length; i++)
    if (typeof e[i] == "string" && VD.test(e[i]))
      return !0;
  return !1
}
const LD = new Set(["color", "backgroundColor", "outlineColor", "fill", "stroke", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"])
  , PD = cx(() => Object.hasOwnProperty.call(Element.prototype, "animate"));
function UD(e) {
  const { motionValue: i, name: a, repeatDelay: r, repeatType: l, damping: c, type: d, keyframes: h } = e;
  if (!(i?.owner?.current instanceof HTMLElement))
    return !1;
  const { onUpdate: m, transformTemplate: y } = i.owner.getProps();
  return PD() && a && (qx.has(a) || LD.has(a) && zD(h)) && (a !== "transform" || !y) && !m && !r && l !== "mirror" && c !== 0 && d !== "inertia"
}
const BD = 40;
class kD extends Fd {
  constructor({ autoplay: i = !0, delay: a = 0, type: r = "keyframes", repeat: l = 0, repeatDelay: c = 0, repeatType: d = "loop", keyframes: h, name: p, motionValue: m, element: y, ...v }) {
    super(),
      this.stop = () => {
        this._animation && (this._animation.stop(),
          this.stopTimeline?.()),
          this.keyframeResolver?.cancel()
      }
      ,
      this.createdAt = he.now();
    const b = {
      autoplay: i,
      delay: a,
      type: r,
      repeat: l,
      repeatDelay: c,
      repeatType: d,
      name: p,
      motionValue: m,
      element: y,
      ...v
    }
      , S = y?.KeyframeResolver || qd;
    this.keyframeResolver = new S(h, (E, A, C) => this.onKeyframesResolved(E, A, b, !C), p, m, y),
      this.keyframeResolver?.scheduleResolve()
  }
  onKeyframesResolved(i, a, r, l) {
    this.keyframeResolver = void 0;
    const { name: c, type: d, velocity: h, delay: p, isHandoff: m, onUpdate: y } = r;
    this.resolvedAt = he.now();
    let v = !0;
    _D(i, c, d, h) || (v = !1,
      (bi.instantAnimations || !p) && y?.(jl(i, r, a)),
      i[0] = i[i.length - 1],
      $f(r),
      r.repeat = 0);
    const S = {
      startTime: l ? this.resolvedAt ? this.resolvedAt - this.createdAt > BD ? this.resolvedAt : this.createdAt : this.createdAt : void 0,
      finalKeyframe: a,
      ...r,
      keyframes: i
    }
      , E = v && !m && UD(S)
      , A = S.motionValue?.owner?.current;
    let C;
    if (E)
      try {
        C = new ND({
          ...S,
          element: A
        })
      } catch {
        C = new fl(S)
      }
    else
      C = new fl(S);
    C.finished.then(() => {
      this.notifyFinished()
    }
    ).catch(Ye),
      this.pendingTimeline && (this.stopTimeline = C.attachTimeline(this.pendingTimeline),
        this.pendingTimeline = void 0),
      this._animation = C
  }
  get finished() {
    return this._animation ? this.animation.finished : this._finished
  }
  then(i, a) {
    return this.finished.finally(i).then(() => { }
    )
  }
  get animation() {
    return this._animation || (this.keyframeResolver?.resume(),
      wD()),
      this._animation
  }
  get duration() {
    return this.animation.duration
  }
  get iterationDuration() {
    return this.animation.iterationDuration
  }
  get time() {
    return this.animation.time
  }
  set time(i) {
    this.animation.time = i
  }
  get speed() {
    return this.animation.speed
  }
  get state() {
    return this.animation.state
  }
  set speed(i) {
    this.animation.speed = i
  }
  get startTime() {
    return this.animation.startTime
  }
  attachTimeline(i) {
    return this._animation ? this.stopTimeline = this.animation.attachTimeline(i) : this.pendingTimeline = i,
      () => this.stop()
  }
  play() {
    this.animation.play()
  }
  pause() {
    this.animation.pause()
  }
  complete() {
    this.animation.complete()
  }
  cancel() {
    this._animation && this.animation.cancel(),
      this.keyframeResolver?.cancel()
  }
}
function Gx(e, i, a, r = 0, l = 1) {
  const c = Array.from(e).sort((m, y) => m.sortNodePosition(y)).indexOf(i)
    , d = e.size
    , h = (d - 1) * r;
  return typeof a == "function" ? a(c, d) : l === 1 ? c * r : h - c * r
}
const HD = /^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;
function FD(e) {
  const i = HD.exec(e);
  if (!i)
    return [,];
  const [, a, r, l] = i;
  return [`--${a ?? r}`, l]
}
function Yx(e, i, a = 1) {
  const [r, l] = FD(e);
  if (!r)
    return;
  const c = window.getComputedStyle(i).getPropertyValue(r);
  if (c) {
    const d = c.trim();
    return ox(d) ? parseFloat(d) : d
  }
  return Pd(l) ? Yx(l, i, a + 1) : l
}
const qD = {
  type: "spring",
  stiffness: 500,
  damping: 25,
  restSpeed: 10
}
  , GD = e => ({
    type: "spring",
    stiffness: 550,
    damping: e === 0 ? 2 * Math.sqrt(550) : 30,
    restSpeed: 10
  })
  , YD = {
    type: "keyframes",
    duration: .8
  }
  , XD = {
    type: "keyframes",
    ease: [.25, .1, .35, 1],
    duration: .3
  }
  , KD = (e, { keyframes: i }) => i.length > 2 ? YD : Zs.has(e) ? e.startsWith("scale") ? GD(i[1]) : qD : XD;
function Xx(e, i) {
  if (e?.inherit && i) {
    const { inherit: a, ...r } = e;
    return {
      ...i,
      ...r
    }
  }
  return e
}
function Gd(e, i) {
  const a = e?.[i] ?? e?.default ?? e;
  return a !== e ? Xx(a, e) : a
}
const QD = new Set(["when", "delay", "delayChildren", "staggerChildren", "staggerDirection", "repeat", "repeatType", "repeatDelay", "from", "elapsed"]);
function ZD(e) {
  for (const i in e)
    if (!QD.has(i))
      return !0;
  return !1
}
const Yd = (e, i, a, r = {}, l, c) => d => {
  const h = Gd(r, e) || {}
    , p = h.delay || r.delay || 0;
  let { elapsed: m = 0 } = r;
  m = m - je(p);
  const y = {
    keyframes: Array.isArray(a) ? a : [null, a],
    ease: "easeOut",
    velocity: i.getVelocity(),
    ...h,
    delay: -m,
    onUpdate: b => {
      i.set(b),
        h.onUpdate && h.onUpdate(b)
    }
    ,
    onComplete: () => {
      d(),
        h.onComplete && h.onComplete()
    }
    ,
    name: e,
    motionValue: i,
    element: c ? void 0 : l
  };
  ZD(h) || Object.assign(y, KD(e, y)),
    y.duration && (y.duration = je(y.duration)),
    y.repeatDelay && (y.repeatDelay = je(y.repeatDelay)),
    y.from !== void 0 && (y.keyframes[0] = y.from);
  let v = !1;
  if ((y.type === !1 || y.duration === 0 && !y.repeatDelay) && ($f(y),
    y.delay === 0 && (v = !0)),
    (bi.instantAnimations || bi.skipAnimations || l?.shouldSkipAnimations) && (v = !0,
      $f(y),
      y.delay = 0),
    y.allowFlatten = !h.type && !h.ease,
    v && !c && i.get() !== void 0) {
    const b = jl(y.keyframes, h);
    if (b !== void 0) {
      Vt.update(() => {
        y.onUpdate(b),
          y.onComplete()
      }
      );
      return
    }
  }
  return h.isSync ? new fl(y) : new kD(y)
}
  ;
function ov(e) {
  const i = [{}, {}];
  return e?.values.forEach((a, r) => {
    i[0][r] = a.get(),
      i[1][r] = a.getVelocity()
  }
  ),
    i
}
function Xd(e, i, a, r) {
  if (typeof i == "function") {
    const [l, c] = ov(r);
    i = i(a !== void 0 ? a : e.custom, l, c)
  }
  if (typeof i == "string" && (i = e.variants && e.variants[i]),
    typeof i == "function") {
    const [l, c] = ov(r);
    i = i(a !== void 0 ? a : e.custom, l, c)
  }
  return i
}
function Qi(e, i, a) {
  const r = e.getProps();
  return Xd(r, i, a !== void 0 ? a : r.custom, e)
}
const Kx = new Set(["width", "height", "top", "left", "right", "bottom", ...Qs])
  , lv = 30
  , WD = e => !isNaN(parseFloat(e));
class $D {
  constructor(i, a = {}) {
    this.canTrackVelocity = null,
      this.events = {},
      this.updateAndNotify = r => {
        const l = he.now();
        if (this.updatedAt !== l && this.setPrevFrameValue(),
          this.prev = this.current,
          this.setCurrent(r),
          this.current !== this.prev && (this.events.change?.notify(this.current),
            this.dependents))
          for (const c of this.dependents)
            c.dirty()
      }
      ,
      this.hasAnimated = !1,
      this.setCurrent(i),
      this.owner = a.owner
  }
  setCurrent(i) {
    this.current = i,
      this.updatedAt = he.now(),
      this.canTrackVelocity === null && i !== void 0 && (this.canTrackVelocity = WD(this.current))
  }
  setPrevFrameValue(i = this.current) {
    this.prevFrameValue = i,
      this.prevUpdatedAt = this.updatedAt
  }
  onChange(i) {
    return this.on("change", i)
  }
  on(i, a) {
    this.events[i] || (this.events[i] = new Vd);
    const r = this.events[i].add(a);
    return i === "change" ? () => {
      r(),
        Vt.read(() => {
          this.events.change.getSize() || this.stop()
        }
        )
    }
      : r
  }
  clearListeners() {
    for (const i in this.events)
      this.events[i].clear()
  }
  attach(i, a) {
    this.passiveEffect = i,
      this.stopPassiveEffect = a
  }
  set(i) {
    this.passiveEffect ? this.passiveEffect(i, this.updateAndNotify) : this.updateAndNotify(i)
  }
  setWithVelocity(i, a, r) {
    this.set(a),
      this.prev = void 0,
      this.prevFrameValue = i,
      this.prevUpdatedAt = this.updatedAt - r
  }
  jump(i, a = !0) {
    this.updateAndNotify(i),
      this.prev = i,
      this.prevUpdatedAt = this.prevFrameValue = void 0,
      a && this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
  dirty() {
    this.events.change?.notify(this.current)
  }
  addDependent(i) {
    this.dependents || (this.dependents = new Set),
      this.dependents.add(i)
  }
  removeDependent(i) {
    this.dependents && this.dependents.delete(i)
  }
  get() {
    return this.current
  }
  getPrevious() {
    return this.prev
  }
  getVelocity() {
    const i = he.now();
    if (!this.canTrackVelocity || this.prevFrameValue === void 0 || i - this.updatedAt > lv)
      return 0;
    const a = Math.min(this.updatedAt - this.prevUpdatedAt, lv);
    return fx(parseFloat(this.current) - parseFloat(this.prevFrameValue), a)
  }
  start(i) {
    return this.stop(),
      new Promise(a => {
        this.hasAnimated = !0,
          this.animation = i(a),
          this.events.animationStart && this.events.animationStart.notify()
      }
      ).then(() => {
        this.events.animationComplete && this.events.animationComplete.notify(),
          this.clearAnimation()
      }
      )
  }
  stop() {
    this.animation && (this.animation.stop(),
      this.events.animationCancel && this.events.animationCancel.notify()),
      this.clearAnimation()
  }
  isAnimating() {
    return !!this.animation
  }
  clearAnimation() {
    delete this.animation
  }
  destroy() {
    this.dependents?.clear(),
      this.events.destroy?.notify(),
      this.clearListeners(),
      this.stop(),
      this.stopPassiveEffect && this.stopPassiveEffect()
  }
}
function Wi(e, i) {
  return new $D(e, i)
}
const Jf = e => Array.isArray(e);
function JD(e, i, a) {
  e.hasValue(i) ? e.getValue(i).set(a) : e.addValue(i, Wi(a))
}
function ID(e) {
  return Jf(e) ? e[e.length - 1] || 0 : e
}
function t2(e, i) {
  const a = Qi(e, i);
  let { transitionEnd: r = {}, transition: l = {}, ...c } = a || {};
  c = {
    ...c,
    ...r
  };
  for (const d in c) {
    const h = ID(c[d]);
    JD(e, d, h)
  }
}
const oe = e => !!(e && e.getVelocity);
function e2(e) {
  return !!(oe(e) && e.add)
}
function If(e, i) {
  const a = e.getValue("willChange");
  if (e2(a))
    return a.add(i);
  if (!a && bi.WillChange) {
    const r = new bi.WillChange("auto");
    e.addValue("willChange", r),
      r.add(i)
  }
}
function Kd(e) {
  return e.replace(/([A-Z])/g, i => `-${i.toLowerCase()}`)
}
const n2 = "framerAppearId"
  , Qx = "data-" + Kd(n2);
function Zx(e) {
  return e.props[Qx]
}
function i2({ protectedKeys: e, needsAnimating: i }, a) {
  const r = e.hasOwnProperty(a) && i[a] !== !0;
  return i[a] = !1,
    r
}
function Wx(e, i, { delay: a = 0, transitionOverride: r, type: l } = {}) {
  let { transition: c, transitionEnd: d, ...h } = i;
  const p = e.getDefaultTransition();
  c = c ? Xx(c, p) : p;
  const m = c?.reduceMotion;
  r && (c = r);
  const y = []
    , v = l && e.animationState && e.animationState.getState()[l];
  for (const b in h) {
    const S = e.getValue(b, e.latestValues[b] ?? null)
      , E = h[b];
    if (E === void 0 || v && i2(v, b))
      continue;
    const A = {
      delay: a,
      ...Gd(c || {}, b)
    }
      , C = S.get();
    if (C !== void 0 && !S.isAnimating() && !Array.isArray(E) && E === C && !A.velocity) {
      Vt.update(() => S.set(E));
      continue
    }
    let O = !1;
    if (window.MotionHandoffAnimation) {
      const L = Zx(e);
      if (L) {
        const k = window.MotionHandoffAnimation(L, b, Vt);
        k !== null && (A.startTime = k,
          O = !0)
      }
    }
    If(e, b);
    const V = m ?? e.shouldReduceMotion;
    S.start(Yd(b, S, E, V && Kx.has(b) ? {
      type: !1
    } : A, e, O));
    const j = S.animation;
    j && y.push(j)
  }
  if (d) {
    const b = () => Vt.update(() => {
      d && t2(e, d)
    }
    );
    y.length ? Promise.all(y).then(b) : b()
  }
  return y
}
function td(e, i, a = {}) {
  const r = Qi(e, i, a.type === "exit" ? e.presenceContext?.custom : void 0);
  let { transition: l = e.getDefaultTransition() || {} } = r || {};
  a.transitionOverride && (l = a.transitionOverride);
  const c = r ? () => Promise.all(Wx(e, r, a)) : () => Promise.resolve()
    , d = e.variantChildren && e.variantChildren.size ? (p = 0) => {
      const { delayChildren: m = 0, staggerChildren: y, staggerDirection: v } = l;
      return s2(e, i, p, m, y, v, a)
    }
      : () => Promise.resolve()
    , { when: h } = l;
  if (h) {
    const [p, m] = h === "beforeChildren" ? [c, d] : [d, c];
    return p().then(() => m())
  } else
    return Promise.all([c(), d(a.delay)])
}
function s2(e, i, a = 0, r = 0, l = 0, c = 1, d) {
  const h = [];
  for (const p of e.variantChildren)
    p.notify("AnimationStart", i),
      h.push(td(p, i, {
        ...d,
        delay: a + (typeof r == "function" ? 0 : r) + Gx(e.variantChildren, p, r, l, c)
      }).then(() => p.notify("AnimationComplete", i)));
  return Promise.all(h)
}
function a2(e, i, a = {}) {
  e.notify("AnimationStart", i);
  let r;
  if (Array.isArray(i)) {
    const l = i.map(c => td(e, c, a));
    r = Promise.all(l)
  } else if (typeof i == "string")
    r = td(e, i, a);
  else {
    const l = typeof i == "function" ? Qi(e, i, a.custom) : i;
    r = Promise.all(Wx(e, l, a))
  }
  return r.then(() => {
    e.notify("AnimationComplete", i)
  }
  )
}
const r2 = {
  test: e => e === "auto",
  parse: e => e
}
  , $x = e => i => i.test(e)
  , Jx = [Ks, st, pn, hi, jM, NM, r2]
  , uv = e => Jx.find($x(e));
function o2(e) {
  return typeof e == "number" ? e === 0 : e !== null ? e === "none" || e === "0" || ux(e) : !0
}
const l2 = new Set(["brightness", "contrast", "saturate", "opacity"]);
function u2(e) {
  const [i, a] = e.slice(0, -1).split("(");
  if (i === "drop-shadow")
    return e;
  const [r] = a.match(Ud) || [];
  if (!r)
    return e;
  const l = a.replace(r, "");
  let c = l2.has(i) ? 1 : 0;
  return r !== a && (c *= 100),
    i + "(" + c + l + ")"
}
const c2 = /\b([a-z-]*)\(.*?\)/gu
  , ed = {
    ...Ie,
    getAnimatableNone: e => {
      const i = e.match(c2);
      return i ? i.map(u2).join(" ") : e
    }
  }
  , nd = {
    ...Ie,
    getAnimatableNone: e => {
      const i = Ie.parse(e);
      return Ie.createTransformer(e)(i.map(r => typeof r == "number" ? 0 : typeof r == "object" ? {
        ...r,
        alpha: 1
      } : r))
    }
  }
  , cv = {
    ...Ks,
    transform: Math.round
  }
  , f2 = {
    rotate: hi,
    rotateX: hi,
    rotateY: hi,
    rotateZ: hi,
    scale: Bo,
    scaleX: Bo,
    scaleY: Bo,
    scaleZ: Bo,
    skew: hi,
    skewX: hi,
    skewY: hi,
    distance: st,
    translateX: st,
    translateY: st,
    translateZ: st,
    x: st,
    y: st,
    z: st,
    perspective: st,
    transformPerspective: st,
    opacity: or,
    originX: Wg,
    originY: Wg,
    originZ: st
  }
  , Qd = {
    borderWidth: st,
    borderTopWidth: st,
    borderRightWidth: st,
    borderBottomWidth: st,
    borderLeftWidth: st,
    borderRadius: st,
    borderTopLeftRadius: st,
    borderTopRightRadius: st,
    borderBottomRightRadius: st,
    borderBottomLeftRadius: st,
    width: st,
    maxWidth: st,
    height: st,
    maxHeight: st,
    top: st,
    right: st,
    bottom: st,
    left: st,
    inset: st,
    insetBlock: st,
    insetBlockStart: st,
    insetBlockEnd: st,
    insetInline: st,
    insetInlineStart: st,
    insetInlineEnd: st,
    padding: st,
    paddingTop: st,
    paddingRight: st,
    paddingBottom: st,
    paddingLeft: st,
    paddingBlock: st,
    paddingBlockStart: st,
    paddingBlockEnd: st,
    paddingInline: st,
    paddingInlineStart: st,
    paddingInlineEnd: st,
    margin: st,
    marginTop: st,
    marginRight: st,
    marginBottom: st,
    marginLeft: st,
    marginBlock: st,
    marginBlockStart: st,
    marginBlockEnd: st,
    marginInline: st,
    marginInlineStart: st,
    marginInlineEnd: st,
    fontSize: st,
    backgroundPositionX: st,
    backgroundPositionY: st,
    ...f2,
    zIndex: cv,
    fillOpacity: or,
    strokeOpacity: or,
    numOctaves: cv
  }
  , d2 = {
    ...Qd,
    color: Kt,
    backgroundColor: Kt,
    outlineColor: Kt,
    fill: Kt,
    stroke: Kt,
    borderColor: Kt,
    borderTopColor: Kt,
    borderRightColor: Kt,
    borderBottomColor: Kt,
    borderLeftColor: Kt,
    filter: ed,
    WebkitFilter: ed,
    mask: nd,
    WebkitMask: nd
  }
  , Ix = e => d2[e]
  , h2 = new Set([ed, nd]);
function tS(e, i) {
  let a = Ix(e);
  return h2.has(a) || (a = Ie),
    a.getAnimatableNone ? a.getAnimatableNone(i) : void 0
}
const m2 = new Set(["auto", "none", "0"]);
function p2(e, i, a) {
  let r = 0, l;
  for (; r < e.length && !l;) {
    const c = e[r];
    typeof c == "string" && !m2.has(c) && Gs(c).values.length && (l = e[r]),
      r++
  }
  if (l && a)
    for (const c of i)
      e[c] = tS(a, l)
}
class y2 extends qd {
  constructor(i, a, r, l, c) {
    super(i, a, r, l, c, !0)
  }
  readKeyframes() {
    const { unresolvedKeyframes: i, element: a, name: r } = this;
    if (!a || !a.current)
      return;
    super.readKeyframes();
    for (let y = 0; y < i.length; y++) {
      let v = i[y];
      if (typeof v == "string" && (v = v.trim(),
        Pd(v))) {
        const b = Yx(v, a.current);
        b !== void 0 && (i[y] = b),
          y === i.length - 1 && (this.finalKeyframe = v)
      }
    }
    if (this.resolveNoneKeyframes(),
      !Kx.has(r) || i.length !== 2)
      return;
    const [l, c] = i
      , d = uv(l)
      , h = uv(c)
      , p = Zg(l)
      , m = Zg(c);
    if (p !== m && mi[r]) {
      this.needsMeasurement = !0;
      return
    }
    if (d !== h)
      if (sv(d) && sv(h))
        for (let y = 0; y < i.length; y++) {
          const v = i[y];
          typeof v == "string" && (i[y] = parseFloat(v))
        }
      else
        mi[r] && (this.needsMeasurement = !0)
  }
  resolveNoneKeyframes() {
    const { unresolvedKeyframes: i, name: a } = this
      , r = [];
    for (let l = 0; l < i.length; l++)
      (i[l] === null || o2(i[l])) && r.push(l);
    r.length && p2(i, r, a)
  }
  measureInitialState() {
    const { element: i, unresolvedKeyframes: a, name: r } = this;
    if (!i || !i.current)
      return;
    r === "height" && (this.suspendedScrollY = window.pageYOffset),
      this.measuredOrigin = mi[r](i.measureViewportBox(), window.getComputedStyle(i.current)),
      a[0] = this.measuredOrigin;
    const l = a[a.length - 1];
    l !== void 0 && i.getValue(r, l).jump(l, !1)
  }
  measureEndState() {
    const { element: i, name: a, unresolvedKeyframes: r } = this;
    if (!i || !i.current)
      return;
    const l = i.getValue(a);
    l && l.jump(this.measuredOrigin, !1);
    const c = r.length - 1
      , d = r[c];
    r[c] = mi[a](i.measureViewportBox(), window.getComputedStyle(i.current)),
      d !== null && this.finalKeyframe === void 0 && (this.finalKeyframe = d),
      this.removedTransforms?.length && this.removedTransforms.forEach(([h, p]) => {
        i.getValue(h).set(p)
      }
      ),
      this.resolveNoneKeyframes()
  }
}
function eS(e, i, a) {
  if (e == null)
    return [];
  if (e instanceof EventTarget)
    return [e];
  if (typeof e == "string") {
    let r = document;
    const l = a?.[e] ?? r.querySelectorAll(e);
    return l ? Array.from(l) : []
  }
  return Array.from(e).filter(r => r != null)
}
const nS = (e, i) => i && typeof e == "number" ? i.transform(e) : e;
function Ko(e) {
  return lx(e) && "offsetHeight" in e && !("ownerSVGElement" in e)
}
const { schedule: Zd } = Tx(queueMicrotask, !1)
  , $e = {
    x: !1,
    y: !1
  };
function iS() {
  return $e.x || $e.y
}
function g2(e) {
  return e === "x" || e === "y" ? $e[e] ? null : ($e[e] = !0,
    () => {
      $e[e] = !1
    }
  ) : $e.x || $e.y ? null : ($e.x = $e.y = !0,
    () => {
      $e.x = $e.y = !1
    }
  )
}
function sS(e, i) {
  const a = eS(e)
    , r = new AbortController
    , l = {
      passive: !0,
      ...i,
      signal: r.signal
    };
  return [a, l, () => r.abort()]
}
function v2(e) {
  return !(e.pointerType === "touch" || iS())
}
function b2(e, i, a = {}) {
  const [r, l, c] = sS(e, a);
  return r.forEach(d => {
    let h = !1, p = !1, m;
    const y = () => {
      d.removeEventListener("pointerleave", E)
    }
      , v = C => {
        m && (m(C),
          m = void 0),
          y()
      }
      , b = C => {
        h = !1,
          window.removeEventListener("pointerup", b),
          window.removeEventListener("pointercancel", b),
          p && (p = !1,
            v(C))
      }
      , S = () => {
        h = !0,
          window.addEventListener("pointerup", b, l),
          window.addEventListener("pointercancel", b, l)
      }
      , E = C => {
        if (C.pointerType !== "touch") {
          if (h) {
            p = !0;
            return
          }
          v(C)
        }
      }
      , A = C => {
        if (!v2(C))
          return;
        p = !1;
        const O = i(d, C);
        typeof O == "function" && (m = O,
          d.addEventListener("pointerleave", E, l))
      }
      ;
    d.addEventListener("pointerenter", A, l),
      d.addEventListener("pointerdown", S, l)
  }
  ),
    c
}
const aS = (e, i) => i ? e === i ? !0 : aS(e, i.parentElement) : !1
  , Wd = e => e.pointerType === "mouse" ? typeof e.button != "number" || e.button <= 0 : e.isPrimary !== !1
  , x2 = new Set(["BUTTON", "INPUT", "SELECT", "TEXTAREA", "A"]);
function S2(e) {
  return x2.has(e.tagName) || e.isContentEditable === !0
}
const T2 = new Set(["INPUT", "SELECT", "TEXTAREA"]);
function w2(e) {
  return T2.has(e.tagName) || e.isContentEditable === !0
}
const Qo = new WeakSet;
function fv(e) {
  return i => {
    i.key === "Enter" && e(i)
  }
}
function yf(e, i) {
  e.dispatchEvent(new PointerEvent("pointer" + i, {
    isPrimary: !0,
    bubbles: !0
  }))
}
const E2 = (e, i) => {
  const a = e.currentTarget;
  if (!a)
    return;
  const r = fv(() => {
    if (Qo.has(a))
      return;
    yf(a, "down");
    const l = fv(() => {
      yf(a, "up")
    }
    )
      , c = () => yf(a, "cancel");
    a.addEventListener("keyup", l, i),
      a.addEventListener("blur", c, i)
  }
  );
  a.addEventListener("keydown", r, i),
    a.addEventListener("blur", () => a.removeEventListener("keydown", r), i)
}
  ;
function dv(e) {
  return Wd(e) && !iS()
}
const hv = new WeakSet;
function A2(e, i, a = {}) {
  const [r, l, c] = sS(e, a)
    , d = h => {
      const p = h.currentTarget;
      if (!dv(h) || hv.has(h))
        return;
      Qo.add(p),
        a.stopPropagation && hv.add(h);
      const m = i(p, h)
        , y = (S, E) => {
          window.removeEventListener("pointerup", v),
            window.removeEventListener("pointercancel", b),
            Qo.has(p) && Qo.delete(p),
            dv(S) && typeof m == "function" && m(S, {
              success: E
            })
        }
        , v = S => {
          y(S, p === window || p === document || a.useGlobalTarget || aS(p, S.target))
        }
        , b = S => {
          y(S, !1)
        }
        ;
      window.addEventListener("pointerup", v, l),
        window.addEventListener("pointercancel", b, l)
    }
    ;
  return r.forEach(h => {
    (a.useGlobalTarget ? window : h).addEventListener("pointerdown", d, l),
      Ko(h) && (h.addEventListener("focus", m => E2(m, l)),
        !S2(h) && !h.hasAttribute("tabindex") && (h.tabIndex = 0))
  }
  ),
    c
}
function $d(e) {
  return lx(e) && "ownerSVGElement" in e
}
const Zo = new WeakMap;
let Wo;
const rS = (e, i, a) => (r, l) => l && l[0] ? l[0][e + "Size"] : $d(r) && "getBBox" in r ? r.getBBox()[i] : r[a]
  , C2 = rS("inline", "width", "offsetWidth")
  , R2 = rS("block", "height", "offsetHeight");
function M2({ target: e, borderBoxSize: i }) {
  Zo.get(e)?.forEach(a => {
    a(e, {
      get width() {
        return C2(e, i)
      },
      get height() {
        return R2(e, i)
      }
    })
  }
  )
}
function D2(e) {
  e.forEach(M2)
}
function O2() {
  typeof ResizeObserver > "u" || (Wo = new ResizeObserver(D2))
}
function N2(e, i) {
  Wo || O2();
  const a = eS(e);
  return a.forEach(r => {
    let l = Zo.get(r);
    l || (l = new Set,
      Zo.set(r, l)),
      l.add(i),
      Wo?.observe(r)
  }
  ),
    () => {
      a.forEach(r => {
        const l = Zo.get(r);
        l?.delete(i),
          l?.size || Wo?.unobserve(r)
      }
      )
    }
}
const $o = new Set;
let Bs;
function j2() {
  Bs = () => {
    const e = {
      get width() {
        return window.innerWidth
      },
      get height() {
        return window.innerHeight
      }
    };
    $o.forEach(i => i(e))
  }
    ,
    window.addEventListener("resize", Bs)
}
function _2(e) {
  return $o.add(e),
    Bs || j2(),
    () => {
      $o.delete(e),
        !$o.size && typeof Bs == "function" && (window.removeEventListener("resize", Bs),
          Bs = void 0)
    }
}
function mv(e, i) {
  return typeof e == "function" ? _2(e) : N2(e, i)
}
function V2(e) {
  return $d(e) && e.tagName === "svg"
}
const z2 = [...Jx, Kt, Ie]
  , L2 = e => z2.find($x(e))
  , pv = () => ({
    translate: 0,
    scale: 1,
    origin: 0,
    originPoint: 0
  })
  , ks = () => ({
    x: pv(),
    y: pv()
  })
  , yv = () => ({
    min: 0,
    max: 0
  })
  , $t = () => ({
    x: yv(),
    y: yv()
  })
  , P2 = new WeakMap;
function _l(e) {
  return e !== null && typeof e == "object" && typeof e.start == "function"
}
function lr(e) {
  return typeof e == "string" || Array.isArray(e)
}
const Jd = ["animate", "whileInView", "whileFocus", "whileHover", "whileTap", "whileDrag", "exit"]
  , Id = ["initial", ...Jd];
function Vl(e) {
  return _l(e.animate) || Id.some(i => lr(e[i]))
}
function oS(e) {
  return !!(Vl(e) || e.variants)
}
function U2(e, i, a) {
  for (const r in i) {
    const l = i[r]
      , c = a[r];
    if (oe(l))
      e.addValue(r, l);
    else if (oe(c))
      e.addValue(r, Wi(l, {
        owner: e
      }));
    else if (c !== l)
      if (e.hasValue(r)) {
        const d = e.getValue(r);
        d.liveStyle === !0 ? d.jump(l) : d.hasAnimated || d.set(l)
      } else {
        const d = e.getStaticValue(r);
        e.addValue(r, Wi(d !== void 0 ? d : l, {
          owner: e
        }))
      }
  }
  for (const r in a)
    i[r] === void 0 && e.removeValue(r);
  return i
}
const id = {
  current: null
}
  , lS = {
    current: !1
  }
  , B2 = typeof window < "u";
function k2() {
  if (lS.current = !0,
    !!B2)
    if (window.matchMedia) {
      const e = window.matchMedia("(prefers-reduced-motion)")
        , i = () => id.current = e.matches;
      e.addEventListener("change", i),
        i()
    } else
      id.current = !1
}
const gv = ["AnimationStart", "AnimationComplete", "Update", "BeforeLayoutMeasure", "LayoutMeasure", "LayoutAnimationStart", "LayoutAnimationComplete"];
let dl = {};
function uS(e) {
  dl = e
}
function H2() {
  return dl
}
class F2 {
  scrapeMotionValuesFromProps(i, a, r) {
    return {}
  }
  constructor({ parent: i, props: a, presenceContext: r, reducedMotionConfig: l, skipAnimations: c, blockInitialAnimation: d, visualState: h }, p = {}) {
    this.current = null,
      this.children = new Set,
      this.isVariantNode = !1,
      this.isControllingVariants = !1,
      this.shouldReduceMotion = null,
      this.shouldSkipAnimations = !1,
      this.values = new Map,
      this.KeyframeResolver = qd,
      this.features = {},
      this.valueSubscriptions = new Map,
      this.prevMotionValues = {},
      this.hasBeenMounted = !1,
      this.events = {},
      this.propEventSubscriptions = {},
      this.notifyUpdate = () => this.notify("Update", this.latestValues),
      this.render = () => {
        this.current && (this.triggerBuild(),
          this.renderInstance(this.current, this.renderState, this.props.style, this.projection))
      }
      ,
      this.renderScheduledAt = 0,
      this.scheduleRender = () => {
        const S = he.now();
        this.renderScheduledAt < S && (this.renderScheduledAt = S,
          Vt.render(this.render, !1, !0))
      }
      ;
    const { latestValues: m, renderState: y } = h;
    this.latestValues = m,
      this.baseTarget = {
        ...m
      },
      this.initialValues = a.initial ? {
        ...m
      } : {},
      this.renderState = y,
      this.parent = i,
      this.props = a,
      this.presenceContext = r,
      this.depth = i ? i.depth + 1 : 0,
      this.reducedMotionConfig = l,
      this.skipAnimationsConfig = c,
      this.options = p,
      this.blockInitialAnimation = !!d,
      this.isControllingVariants = Vl(a),
      this.isVariantNode = oS(a),
      this.isVariantNode && (this.variantChildren = new Set),
      this.manuallyAnimateOnMount = !!(i && i.current);
    const { willChange: v, ...b } = this.scrapeMotionValuesFromProps(a, {}, this);
    for (const S in b) {
      const E = b[S];
      m[S] !== void 0 && oe(E) && E.set(m[S])
    }
  }
  mount(i) {
    if (this.hasBeenMounted)
      for (const a in this.initialValues)
        this.values.get(a)?.jump(this.initialValues[a]),
          this.latestValues[a] = this.initialValues[a];
    this.current = i,
      P2.set(i, this),
      this.projection && !this.projection.instance && this.projection.mount(i),
      this.parent && this.isVariantNode && !this.isControllingVariants && (this.removeFromVariantTree = this.parent.addVariantChild(this)),
      this.values.forEach((a, r) => this.bindToMotionValue(r, a)),
      this.reducedMotionConfig === "never" ? this.shouldReduceMotion = !1 : this.reducedMotionConfig === "always" ? this.shouldReduceMotion = !0 : (lS.current || k2(),
        this.shouldReduceMotion = id.current),
      this.shouldSkipAnimations = this.skipAnimationsConfig ?? !1,
      this.parent?.addChild(this),
      this.update(this.props, this.presenceContext),
      this.hasBeenMounted = !0
  }
  unmount() {
    this.projection && this.projection.unmount(),
      xi(this.notifyUpdate),
      xi(this.render),
      this.valueSubscriptions.forEach(i => i()),
      this.valueSubscriptions.clear(),
      this.removeFromVariantTree && this.removeFromVariantTree(),
      this.parent?.removeChild(this);
    for (const i in this.events)
      this.events[i].clear();
    for (const i in this.features) {
      const a = this.features[i];
      a && (a.unmount(),
        a.isMounted = !1)
    }
    this.current = null
  }
  addChild(i) {
    this.children.add(i),
      this.enteringChildren ?? (this.enteringChildren = new Set),
      this.enteringChildren.add(i)
  }
  removeChild(i) {
    this.children.delete(i),
      this.enteringChildren && this.enteringChildren.delete(i)
  }
  bindToMotionValue(i, a) {
    if (this.valueSubscriptions.has(i) && this.valueSubscriptions.get(i)(),
      a.accelerate && qx.has(i) && this.current instanceof HTMLElement) {
      const { factory: d, keyframes: h, times: p, ease: m, duration: y } = a.accelerate
        , v = new Hx({
          element: this.current,
          name: i,
          keyframes: h,
          times: p,
          ease: m,
          duration: je(y)
        })
        , b = d(v);
      this.valueSubscriptions.set(i, () => {
        b(),
          v.cancel()
      }
      );
      return
    }
    const r = Zs.has(i);
    r && this.onBindTransform && this.onBindTransform();
    const l = a.on("change", d => {
      this.latestValues[i] = d,
        this.props.onUpdate && Vt.preRender(this.notifyUpdate),
        r && this.projection && (this.projection.isTransformDirty = !0),
        this.scheduleRender()
    }
    );
    let c;
    typeof window < "u" && window.MotionCheckAppearSync && (c = window.MotionCheckAppearSync(this, i, a)),
      this.valueSubscriptions.set(i, () => {
        l(),
          c && c(),
          a.owner && a.stop()
      }
      )
  }
  sortNodePosition(i) {
    return !this.current || !this.sortInstanceNodePosition || this.type !== i.type ? 0 : this.sortInstanceNodePosition(this.current, i.current)
  }
  updateFeatures() {
    let i = "animation";
    for (i in dl) {
      const a = dl[i];
      if (!a)
        continue;
      const { isEnabled: r, Feature: l } = a;
      if (!this.features[i] && l && r(this.props) && (this.features[i] = new l(this)),
        this.features[i]) {
        const c = this.features[i];
        c.isMounted ? c.update() : (c.mount(),
          c.isMounted = !0)
      }
    }
  }
  triggerBuild() {
    this.build(this.renderState, this.latestValues, this.props)
  }
  measureViewportBox() {
    return this.current ? this.measureInstanceViewportBox(this.current, this.props) : $t()
  }
  getStaticValue(i) {
    return this.latestValues[i]
  }
  setStaticValue(i, a) {
    this.latestValues[i] = a
  }
  update(i, a) {
    (i.transformTemplate || this.props.transformTemplate) && this.scheduleRender(),
      this.prevProps = this.props,
      this.props = i,
      this.prevPresenceContext = this.presenceContext,
      this.presenceContext = a;
    for (let r = 0; r < gv.length; r++) {
      const l = gv[r];
      this.propEventSubscriptions[l] && (this.propEventSubscriptions[l](),
        delete this.propEventSubscriptions[l]);
      const c = "on" + l
        , d = i[c];
      d && (this.propEventSubscriptions[l] = this.on(l, d))
    }
    this.prevMotionValues = U2(this, this.scrapeMotionValuesFromProps(i, this.prevProps || {}, this), this.prevMotionValues),
      this.handleChildMotionValue && this.handleChildMotionValue()
  }
  getProps() {
    return this.props
  }
  getVariant(i) {
    return this.props.variants ? this.props.variants[i] : void 0
  }
  getDefaultTransition() {
    return this.props.transition
  }
  getTransformPagePoint() {
    return this.props.transformPagePoint
  }
  getClosestVariantNode() {
    return this.isVariantNode ? this : this.parent ? this.parent.getClosestVariantNode() : void 0
  }
  addVariantChild(i) {
    const a = this.getClosestVariantNode();
    if (a)
      return a.variantChildren && a.variantChildren.add(i),
        () => a.variantChildren.delete(i)
  }
  addValue(i, a) {
    const r = this.values.get(i);
    a !== r && (r && this.removeValue(i),
      this.bindToMotionValue(i, a),
      this.values.set(i, a),
      this.latestValues[i] = a.get())
  }
  removeValue(i) {
    this.values.delete(i);
    const a = this.valueSubscriptions.get(i);
    a && (a(),
      this.valueSubscriptions.delete(i)),
      delete this.latestValues[i],
      this.removeValueFromRenderState(i, this.renderState)
  }
  hasValue(i) {
    return this.values.has(i)
  }
  getValue(i, a) {
    if (this.props.values && this.props.values[i])
      return this.props.values[i];
    let r = this.values.get(i);
    return r === void 0 && a !== void 0 && (r = Wi(a === null ? void 0 : a, {
      owner: this
    }),
      this.addValue(i, r)),
      r
  }
  readValue(i, a) {
    let r = this.latestValues[i] !== void 0 || !this.current ? this.latestValues[i] : this.getBaseTargetFromProps(this.props, i) ?? this.readValueFromInstance(this.current, i, this.options);
    return r != null && (typeof r == "string" && (ox(r) || ux(r)) ? r = parseFloat(r) : !L2(r) && Ie.test(a) && (r = tS(i, a)),
      this.setBaseTarget(i, oe(r) ? r.get() : r)),
      oe(r) ? r.get() : r
  }
  setBaseTarget(i, a) {
    this.baseTarget[i] = a
  }
  getBaseTarget(i) {
    const { initial: a } = this.props;
    let r;
    if (typeof a == "string" || typeof a == "object") {
      const c = Xd(this.props, a, this.presenceContext?.custom);
      c && (r = c[i])
    }
    if (a && r !== void 0)
      return r;
    const l = this.getBaseTargetFromProps(this.props, i);
    return l !== void 0 && !oe(l) ? l : this.initialValues[i] !== void 0 && r === void 0 ? void 0 : this.baseTarget[i]
  }
  on(i, a) {
    return this.events[i] || (this.events[i] = new Vd),
      this.events[i].add(a)
  }
  notify(i, ...a) {
    this.events[i] && this.events[i].notify(...a)
  }
  scheduleRenderMicrotask() {
    Zd.render(this.render)
  }
}
class cS extends F2 {
  constructor() {
    super(...arguments),
      this.KeyframeResolver = y2
  }
  sortInstanceNodePosition(i, a) {
    return i.compareDocumentPosition(a) & 2 ? 1 : -1
  }
  getBaseTargetFromProps(i, a) {
    const r = i.style;
    return r ? r[a] : void 0
  }
  removeValueFromRenderState(i, { vars: a, style: r }) {
    delete a[i],
      delete r[i]
  }
  handleChildMotionValue() {
    this.childSubscription && (this.childSubscription(),
      delete this.childSubscription);
    const { children: i } = this.props;
    oe(i) && (this.childSubscription = i.on("change", a => {
      this.current && (this.current.textContent = `${a}`)
    }
    ))
  }
}
class Ti {
  constructor(i) {
    this.isMounted = !1,
      this.node = i
  }
  update() { }
}
function fS({ top: e, left: i, right: a, bottom: r }) {
  return {
    x: {
      min: i,
      max: a
    },
    y: {
      min: e,
      max: r
    }
  }
}
function q2({ x: e, y: i }) {
  return {
    top: i.min,
    right: e.max,
    bottom: i.max,
    left: e.min
  }
}
function G2(e, i) {
  if (!i)
    return e;
  const a = i({
    x: e.left,
    y: e.top
  })
    , r = i({
      x: e.right,
      y: e.bottom
    });
  return {
    top: a.y,
    left: a.x,
    bottom: r.y,
    right: r.x
  }
}
function gf(e) {
  return e === void 0 || e === 1
}
function sd({ scale: e, scaleX: i, scaleY: a }) {
  return !gf(e) || !gf(i) || !gf(a)
}
function Gi(e) {
  return sd(e) || dS(e) || e.z || e.rotate || e.rotateX || e.rotateY || e.skewX || e.skewY
}
function dS(e) {
  return vv(e.x) || vv(e.y)
}
function vv(e) {
  return e && e !== "0%"
}
function hl(e, i, a) {
  const r = e - a
    , l = i * r;
  return a + l
}
function bv(e, i, a, r, l) {
  return l !== void 0 && (e = hl(e, l, r)),
    hl(e, a, r) + i
}
function ad(e, i = 0, a = 1, r, l) {
  e.min = bv(e.min, i, a, r, l),
    e.max = bv(e.max, i, a, r, l)
}
function hS(e, { x: i, y: a }) {
  ad(e.x, i.translate, i.scale, i.originPoint),
    ad(e.y, a.translate, a.scale, a.originPoint)
}
const xv = .999999999999
  , Sv = 1.0000000000001;
function Y2(e, i, a, r = !1) {
  const l = a.length;
  if (!l)
    return;
  i.x = i.y = 1;
  let c, d;
  for (let h = 0; h < l; h++) {
    c = a[h],
      d = c.projectionDelta;
    const { visualElement: p } = c.options;
    p && p.props.style && p.props.style.display === "contents" || (r && c.options.layoutScroll && c.scroll && c !== c.root && (dn(e.x, -c.scroll.offset.x),
      dn(e.y, -c.scroll.offset.y)),
      d && (i.x *= d.x.scale,
        i.y *= d.y.scale,
        hS(e, d)),
      r && Gi(c.latestValues) && Jo(e, c.latestValues, c.layout?.layoutBox))
  }
  i.x < Sv && i.x > xv && (i.x = 1),
    i.y < Sv && i.y > xv && (i.y = 1)
}
function dn(e, i) {
  e.min += i,
    e.max += i
}
function Tv(e, i, a, r, l = .5) {
  const c = Lt(e.min, e.max, l);
  ad(e, i, a, c, r)
}
function wv(e, i) {
  return typeof e == "string" ? parseFloat(e) / 100 * (i.max - i.min) : e
}
function Jo(e, i, a) {
  const r = a ?? e;
  Tv(e.x, wv(i.x, r.x), i.scaleX, i.scale, i.originX),
    Tv(e.y, wv(i.y, r.y), i.scaleY, i.scale, i.originY)
}
function mS(e, i) {
  return fS(G2(e.getBoundingClientRect(), i))
}
function X2(e, i, a) {
  const r = mS(e, a)
    , { scroll: l } = i;
  return l && (dn(r.x, l.offset.x),
    dn(r.y, l.offset.y)),
    r
}
const K2 = {
  x: "translateX",
  y: "translateY",
  z: "translateZ",
  transformPerspective: "perspective"
}
  , Q2 = Qs.length;
function Z2(e, i, a) {
  let r = ""
    , l = !0;
  for (let c = 0; c < Q2; c++) {
    const d = Qs[c]
      , h = e[d];
    if (h === void 0)
      continue;
    let p = !0;
    if (typeof h == "number")
      p = h === (d.startsWith("scale") ? 1 : 0);
    else {
      const m = parseFloat(h);
      p = d.startsWith("scale") ? m === 1 : m === 0
    }
    if (!p || a) {
      const m = nS(h, Qd[d]);
      if (!p) {
        l = !1;
        const y = K2[d] || d;
        r += `${y}(${m}) `
      }
      a && (i[d] = m)
    }
  }
  return r = r.trim(),
    a ? r = a(i, l ? "" : r) : l && (r = "none"),
    r
}
function th(e, i, a) {
  const { style: r, vars: l, transformOrigin: c } = e;
  let d = !1
    , h = !1;
  for (const p in i) {
    const m = i[p];
    if (Zs.has(p)) {
      d = !0;
      continue
    } else if (Ex(p)) {
      l[p] = m;
      continue
    } else {
      const y = nS(m, Qd[p]);
      p.startsWith("origin") ? (h = !0,
        c[p] = y) : r[p] = y
    }
  }
  if (i.transform || (d || a ? r.transform = Z2(i, e.transform, a) : r.transform && (r.transform = "none")),
    h) {
    const { originX: p = "50%", originY: m = "50%", originZ: y = 0 } = c;
    r.transformOrigin = `${p} ${m} ${y}`
  }
}
function pS(e, { style: i, vars: a }, r, l) {
  const c = e.style;
  let d;
  for (d in i)
    c[d] = i[d];
  l?.applyProjectionStyles(c, r);
  for (d in a)
    c.setProperty(d, a[d])
}
function Ev(e, i) {
  return i.max === i.min ? 0 : e / (i.max - i.min) * 100
}
const Wa = {
  correct: (e, i) => {
    if (!i.target)
      return e;
    if (typeof e == "string")
      if (st.test(e))
        e = parseFloat(e);
      else
        return e;
    const a = Ev(e, i.target.x)
      , r = Ev(e, i.target.y);
    return `${a}% ${r}%`
  }
}
  , W2 = {
    correct: (e, { treeScale: i, projectionDelta: a }) => {
      const r = e
        , l = Ie.parse(e);
      if (l.length > 5)
        return r;
      const c = Ie.createTransformer(e)
        , d = typeof l[0] != "number" ? 1 : 0
        , h = a.x.scale * i.x
        , p = a.y.scale * i.y;
      l[0 + d] /= h,
        l[1 + d] /= p;
      const m = Lt(h, p, .5);
      return typeof l[2 + d] == "number" && (l[2 + d] /= m),
        typeof l[3 + d] == "number" && (l[3 + d] /= m),
        c(l)
    }
  }
  , rd = {
    borderRadius: {
      ...Wa,
      applyTo: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
    },
    borderTopLeftRadius: Wa,
    borderTopRightRadius: Wa,
    borderBottomLeftRadius: Wa,
    borderBottomRightRadius: Wa,
    boxShadow: W2
  };
function yS(e, { layout: i, layoutId: a }) {
  return Zs.has(e) || e.startsWith("origin") || (i || a !== void 0) && (!!rd[e] || e === "opacity")
}
function eh(e, i, a) {
  const r = e.style
    , l = i?.style
    , c = {};
  if (!r)
    return c;
  for (const d in r)
    (oe(r[d]) || l && oe(l[d]) || yS(d, e) || a?.getValue(d)?.liveStyle !== void 0) && (c[d] = r[d]);
  return c
}
function $2(e) {
  return window.getComputedStyle(e)
}
class J2 extends cS {
  constructor() {
    super(...arguments),
      this.type = "html",
      this.renderInstance = pS
  }
  readValueFromInstance(i, a) {
    if (Zs.has(a))
      return this.projection?.isProjecting ? Xf(a) : vD(i, a);
    {
      const r = $2(i)
        , l = (Ex(a) ? r.getPropertyValue(a) : r[a]) || 0;
      return typeof l == "string" ? l.trim() : l
    }
  }
  measureInstanceViewportBox(i, { transformPagePoint: a }) {
    return mS(i, a)
  }
  build(i, a, r) {
    th(i, a, r.transformTemplate)
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return eh(i, a, r)
  }
}
const I2 = {
  offset: "stroke-dashoffset",
  array: "stroke-dasharray"
}
  , tO = {
    offset: "strokeDashoffset",
    array: "strokeDasharray"
  };
function eO(e, i, a = 1, r = 0, l = !0) {
  e.pathLength = 1;
  const c = l ? I2 : tO;
  e[c.offset] = `${-r}`,
    e[c.array] = `${i} ${a}`
}
const nO = ["offsetDistance", "offsetPath", "offsetRotate", "offsetAnchor"];
function gS(e, { attrX: i, attrY: a, attrScale: r, pathLength: l, pathSpacing: c = 1, pathOffset: d = 0, ...h }, p, m, y) {
  if (th(e, h, m),
    p) {
    e.style.viewBox && (e.attrs.viewBox = e.style.viewBox);
    return
  }
  e.attrs = e.style,
    e.style = {};
  const { attrs: v, style: b } = e;
  v.transform && (b.transform = v.transform,
    delete v.transform),
    (b.transform || v.transformOrigin) && (b.transformOrigin = v.transformOrigin ?? "50% 50%",
      delete v.transformOrigin),
    b.transform && (b.transformBox = y?.transformBox ?? "fill-box",
      delete v.transformBox);
  for (const S of nO)
    v[S] !== void 0 && (b[S] = v[S],
      delete v[S]);
  i !== void 0 && (v.x = i),
    a !== void 0 && (v.y = a),
    r !== void 0 && (v.scale = r),
    l !== void 0 && eO(v, l, c, d, !1)
}
const vS = new Set(["baseFrequency", "diffuseConstant", "kernelMatrix", "kernelUnitLength", "keySplines", "keyTimes", "limitingConeAngle", "markerHeight", "markerWidth", "numOctaves", "targetX", "targetY", "surfaceScale", "specularConstant", "specularExponent", "stdDeviation", "tableValues", "viewBox", "gradientTransform", "pathLength", "startOffset", "textLength", "lengthAdjust"])
  , bS = e => typeof e == "string" && e.toLowerCase() === "svg";
function iO(e, i, a, r) {
  pS(e, i, void 0, r);
  for (const l in i.attrs)
    e.setAttribute(vS.has(l) ? l : Kd(l), i.attrs[l])
}
function xS(e, i, a) {
  const r = eh(e, i, a);
  for (const l in e)
    if (oe(e[l]) || oe(i[l])) {
      const c = Qs.indexOf(l) !== -1 ? "attr" + l.charAt(0).toUpperCase() + l.substring(1) : l;
      r[c] = e[l]
    }
  return r
}
class sO extends cS {
  constructor() {
    super(...arguments),
      this.type = "svg",
      this.isSVGTag = !1,
      this.measureInstanceViewportBox = $t
  }
  getBaseTargetFromProps(i, a) {
    return i[a]
  }
  readValueFromInstance(i, a) {
    if (Zs.has(a)) {
      const r = Ix(a);
      return r && r.default || 0
    }
    return a = vS.has(a) ? a : Kd(a),
      i.getAttribute(a)
  }
  scrapeMotionValuesFromProps(i, a, r) {
    return xS(i, a, r)
  }
  build(i, a, r) {
    gS(i, a, this.isSVGTag, r.transformTemplate, r.style)
  }
  renderInstance(i, a, r, l) {
    iO(i, a, r, l)
  }
  mount(i) {
    this.isSVGTag = bS(i.tagName),
      super.mount(i)
  }
}
const aO = Id.length;
function SS(e) {
  if (!e)
    return;
  if (!e.isControllingVariants) {
    const a = e.parent ? SS(e.parent) || {} : {};
    return e.props.initial !== void 0 && (a.initial = e.props.initial),
      a
  }
  const i = {};
  for (let a = 0; a < aO; a++) {
    const r = Id[a]
      , l = e.props[r];
    (lr(l) || l === !1) && (i[r] = l)
  }
  return i
}
function TS(e, i) {
  if (!Array.isArray(i))
    return !1;
  const a = i.length;
  if (a !== e.length)
    return !1;
  for (let r = 0; r < a; r++)
    if (i[r] !== e[r])
      return !1;
  return !0
}
const rO = [...Jd].reverse()
  , oO = Jd.length;
function lO(e) {
  return i => Promise.all(i.map(({ animation: a, options: r }) => a2(e, a, r)))
}
function uO(e) {
  let i = lO(e)
    , a = Av()
    , r = !0
    , l = !1;
  const c = m => (y, v) => {
    const b = Qi(e, v, m === "exit" ? e.presenceContext?.custom : void 0);
    if (b) {
      const { transition: S, transitionEnd: E, ...A } = b;
      y = {
        ...y,
        ...A,
        ...E
      }
    }
    return y
  }
    ;
  function d(m) {
    i = m(e)
  }
  function h(m) {
    const { props: y } = e
      , v = SS(e.parent) || {}
      , b = []
      , S = new Set;
    let E = {}
      , A = 1 / 0;
    for (let O = 0; O < oO; O++) {
      const V = rO[O]
        , j = a[V]
        , L = y[V] !== void 0 ? y[V] : v[V]
        , k = lr(L)
        , Q = V === m ? j.isActive : null;
      Q === !1 && (A = O);
      let Z = L === v[V] && L !== y[V] && k;
      if (Z && (r || l) && e.manuallyAnimateOnMount && (Z = !1),
        j.protectedKeys = {
          ...E
        },
        !j.isActive && Q === null || !L && !j.prevProp || _l(L) || typeof L == "boolean")
        continue;
      if (V === "exit" && j.isActive && Q !== !0) {
        j.prevResolvedValues && (E = {
          ...E,
          ...j.prevResolvedValues
        });
        continue
      }
      const H = cO(j.prevProp, L);
      let $ = H || V === m && j.isActive && !Z && k || O > A && k
        , W = !1;
      const ot = Array.isArray(L) ? L : [L];
      let lt = ot.reduce(c(V), {});
      Q === !1 && (lt = {});
      const { prevResolvedValues: yt = {} } = j
        , I = {
          ...yt,
          ...lt
        }
        , ct = Y => {
          $ = !0,
            S.has(Y) && (W = !0,
              S.delete(Y)),
            j.needsAnimating[Y] = !0;
          const et = e.getValue(Y);
          et && (et.liveStyle = !1)
        }
        ;
      for (const Y in I) {
        const et = lt[Y]
          , T = yt[Y];
        if (E.hasOwnProperty(Y))
          continue;
        let q = !1;
        Jf(et) && Jf(T) ? q = !TS(et, T) : q = et !== T,
          q ? et != null ? ct(Y) : S.add(Y) : et !== void 0 && S.has(Y) ? ct(Y) : j.protectedKeys[Y] = !0
      }
      j.prevProp = L,
        j.prevResolvedValues = lt,
        j.isActive && (E = {
          ...E,
          ...lt
        }),
        (r || l) && e.blockInitialAnimation && ($ = !1);
      const _ = Z && H;
      $ && (!_ || W) && b.push(...ot.map(Y => {
        const et = {
          type: V
        };
        if (typeof Y == "string" && (r || l) && !_ && e.manuallyAnimateOnMount && e.parent) {
          const { parent: T } = e
            , q = Qi(T, Y);
          if (T.enteringChildren && q) {
            const { delayChildren: tt } = q.transition || {};
            et.delay = Gx(T.enteringChildren, e, tt)
          }
        }
        return {
          animation: Y,
          options: et
        }
      }
      ))
    }
    if (S.size) {
      const O = {};
      if (typeof y.initial != "boolean") {
        const V = Qi(e, Array.isArray(y.initial) ? y.initial[0] : y.initial);
        V && V.transition && (O.transition = V.transition)
      }
      S.forEach(V => {
        const j = e.getBaseTarget(V)
          , L = e.getValue(V);
        L && (L.liveStyle = !0),
          O[V] = j ?? null
      }
      ),
        b.push({
          animation: O
        })
    }
    let C = !!b.length;
    return r && (y.initial === !1 || y.initial === y.animate) && !e.manuallyAnimateOnMount && (C = !1),
      r = !1,
      l = !1,
      C ? i(b) : Promise.resolve()
  }
  function p(m, y) {
    if (a[m].isActive === y)
      return Promise.resolve();
    e.variantChildren?.forEach(b => b.animationState?.setActive(m, y)),
      a[m].isActive = y;
    const v = h(m);
    for (const b in a)
      a[b].protectedKeys = {};
    return v
  }
  return {
    animateChanges: h,
    setActive: p,
    setAnimateFunction: d,
    getState: () => a,
    reset: () => {
      a = Av(),
        l = !0
    }
  }
}
function cO(e, i) {
  return typeof i == "string" ? i !== e : Array.isArray(i) ? !TS(i, e) : !1
}
function qi(e = !1) {
  return {
    isActive: e,
    protectedKeys: {},
    needsAnimating: {},
    prevResolvedValues: {}
  }
}
function Av() {
  return {
    animate: qi(!0),
    whileInView: qi(),
    whileHover: qi(),
    whileTap: qi(),
    whileDrag: qi(),
    whileFocus: qi(),
    exit: qi()
  }
}
function od(e, i) {
  e.min = i.min,
    e.max = i.max
}
function We(e, i) {
  od(e.x, i.x),
    od(e.y, i.y)
}
function Cv(e, i) {
  e.translate = i.translate,
    e.scale = i.scale,
    e.originPoint = i.originPoint,
    e.origin = i.origin
}
const wS = 1e-4
  , fO = 1 - wS
  , dO = 1 + wS
  , ES = .01
  , hO = 0 - ES
  , mO = 0 + ES;
function me(e) {
  return e.max - e.min
}
function pO(e, i, a) {
  return Math.abs(e - i) <= a
}
function Rv(e, i, a, r = .5) {
  e.origin = r,
    e.originPoint = Lt(i.min, i.max, e.origin),
    e.scale = me(a) / me(i),
    e.translate = Lt(a.min, a.max, e.origin) - e.originPoint,
    (e.scale >= fO && e.scale <= dO || isNaN(e.scale)) && (e.scale = 1),
    (e.translate >= hO && e.translate <= mO || isNaN(e.translate)) && (e.translate = 0)
}
function er(e, i, a, r) {
  Rv(e.x, i.x, a.x, r ? r.originX : void 0),
    Rv(e.y, i.y, a.y, r ? r.originY : void 0)
}
function Mv(e, i, a, r = 0) {
  const l = r ? Lt(a.min, a.max, r) : a.min;
  e.min = l + i.min,
    e.max = e.min + me(i)
}
function yO(e, i, a, r) {
  Mv(e.x, i.x, a.x, r?.x),
    Mv(e.y, i.y, a.y, r?.y)
}
function Dv(e, i, a, r = 0) {
  const l = r ? Lt(a.min, a.max, r) : a.min;
  e.min = i.min - l,
    e.max = e.min + me(i)
}
function ml(e, i, a, r) {
  Dv(e.x, i.x, a.x, r?.x),
    Dv(e.y, i.y, a.y, r?.y)
}
function Ov(e, i, a, r, l) {
  return e -= i,
    e = hl(e, 1 / a, r),
    l !== void 0 && (e = hl(e, 1 / l, r)),
    e
}
function gO(e, i = 0, a = 1, r = .5, l, c = e, d = e) {
  if (pn.test(i) && (i = parseFloat(i),
    i = Lt(d.min, d.max, i / 100) - d.min),
    typeof i != "number")
    return;
  let h = Lt(c.min, c.max, r);
  e === c && (h -= i),
    e.min = Ov(e.min, i, a, h, l),
    e.max = Ov(e.max, i, a, h, l)
}
function Nv(e, i, [a, r, l], c, d) {
  gO(e, i[a], i[r], i[l], i.scale, c, d)
}
const vO = ["x", "scaleX", "originX"]
  , bO = ["y", "scaleY", "originY"];
function jv(e, i, a, r) {
  Nv(e.x, i, vO, a ? a.x : void 0, r ? r.x : void 0),
    Nv(e.y, i, bO, a ? a.y : void 0, r ? r.y : void 0)
}
function _v(e) {
  return e.translate === 0 && e.scale === 1
}
function AS(e) {
  return _v(e.x) && _v(e.y)
}
function Vv(e, i) {
  return e.min === i.min && e.max === i.max
}
function xO(e, i) {
  return Vv(e.x, i.x) && Vv(e.y, i.y)
}
function zv(e, i) {
  return Math.round(e.min) === Math.round(i.min) && Math.round(e.max) === Math.round(i.max)
}
function CS(e, i) {
  return zv(e.x, i.x) && zv(e.y, i.y)
}
function Lv(e) {
  return me(e.x) / me(e.y)
}
function Pv(e, i) {
  return e.translate === i.translate && e.scale === i.scale && e.originPoint === i.originPoint
}
function fn(e) {
  return [e("x"), e("y")]
}
function SO(e, i, a) {
  let r = "";
  const l = e.x.translate / i.x
    , c = e.y.translate / i.y
    , d = a?.z || 0;
  if ((l || c || d) && (r = `translate3d(${l}px, ${c}px, ${d}px) `),
    (i.x !== 1 || i.y !== 1) && (r += `scale(${1 / i.x}, ${1 / i.y}) `),
    a) {
    const { transformPerspective: m, rotate: y, rotateX: v, rotateY: b, skewX: S, skewY: E } = a;
    m && (r = `perspective(${m}px) ${r}`),
      y && (r += `rotate(${y}deg) `),
      v && (r += `rotateX(${v}deg) `),
      b && (r += `rotateY(${b}deg) `),
      S && (r += `skewX(${S}deg) `),
      E && (r += `skewY(${E}deg) `)
  }
  const h = e.x.scale * i.x
    , p = e.y.scale * i.y;
  return (h !== 1 || p !== 1) && (r += `scale(${h}, ${p})`),
    r || "none"
}
const RS = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomLeftRadius", "borderBottomRightRadius"]
  , TO = RS.length
  , Uv = e => typeof e == "string" ? parseFloat(e) : e
  , Bv = e => typeof e == "number" || st.test(e);
function wO(e, i, a, r, l, c) {
  l ? (e.opacity = Lt(0, a.opacity ?? 1, EO(r)),
    e.opacityExit = Lt(i.opacity ?? 1, 0, AO(r))) : c && (e.opacity = Lt(i.opacity ?? 1, a.opacity ?? 1, r));
  for (let d = 0; d < TO; d++) {
    const h = RS[d];
    let p = kv(i, h)
      , m = kv(a, h);
    if (p === void 0 && m === void 0)
      continue;
    p || (p = 0),
      m || (m = 0),
      p === 0 || m === 0 || Bv(p) === Bv(m) ? (e[h] = Math.max(Lt(Uv(p), Uv(m), r), 0),
        (pn.test(m) || pn.test(p)) && (e[h] += "%")) : e[h] = m
  }
  (i.rotate || a.rotate) && (e.rotate = Lt(i.rotate || 0, a.rotate || 0, r))
}
function kv(e, i) {
  return e[i] !== void 0 ? e[i] : e.borderRadius
}
const EO = MS(0, .5, vx)
  , AO = MS(.5, .95, Ye);
function MS(e, i, a) {
  return r => r < e ? 0 : r > i ? 1 : a(rr(e, i, r))
}
function CO(e, i, a) {
  const r = oe(e) ? e : Wi(e);
  return r.start(Yd("", r, i, a)),
    r.animation
}
function ur(e, i, a, r = {
  passive: !0
}) {
  return e.addEventListener(i, a, r),
    () => e.removeEventListener(i, a)
}
const RO = (e, i) => e.depth - i.depth;
class MO {
  constructor() {
    this.children = [],
      this.isDirty = !1
  }
  add(i) {
    jd(this.children, i),
      this.isDirty = !0
  }
  remove(i) {
    ol(this.children, i),
      this.isDirty = !0
  }
  forEach(i) {
    this.isDirty && this.children.sort(RO),
      this.isDirty = !1,
      this.children.forEach(i)
  }
}
function DO(e, i) {
  const a = he.now()
    , r = ({ timestamp: l }) => {
      const c = l - a;
      c >= i && (xi(r),
        e(c - i))
    }
    ;
  return Vt.setup(r, !0),
    () => xi(r)
}
function Io(e) {
  return oe(e) ? e.get() : e
}
class OO {
  constructor() {
    this.members = []
  }
  add(i) {
    jd(this.members, i);
    for (let a = this.members.length - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r === i || r === this.lead || r === this.prevLead)
        continue;
      const l = r.instance;
      (!l || l.isConnected === !1) && !r.snapshot && (ol(this.members, r),
        r.unmount())
    }
    i.scheduleRender()
  }
  remove(i) {
    if (ol(this.members, i),
      i === this.prevLead && (this.prevLead = void 0),
      i === this.lead) {
      const a = this.members[this.members.length - 1];
      a && this.promote(a)
    }
  }
  relegate(i) {
    for (let a = this.members.indexOf(i) - 1; a >= 0; a--) {
      const r = this.members[a];
      if (r.isPresent !== !1 && r.instance?.isConnected !== !1)
        return this.promote(r),
          !0
    }
    return !1
  }
  promote(i, a) {
    const r = this.lead;
    if (i !== r && (this.prevLead = r,
      this.lead = i,
      i.show(),
      r)) {
      r.updateSnapshot(),
        i.scheduleRender();
      const { layoutDependency: l } = r.options
        , { layoutDependency: c } = i.options;
      (l === void 0 || l !== c) && (i.resumeFrom = r,
        a && (r.preserveOpacity = !0),
        r.snapshot && (i.snapshot = r.snapshot,
          i.snapshot.latestValues = r.animationValues || r.latestValues),
        i.root?.isUpdating && (i.isLayoutDirty = !0)),
        i.options.crossfade === !1 && r.hide()
    }
  }
  exitAnimationComplete() {
    this.members.forEach(i => {
      i.options.onExitComplete?.(),
        i.resumingFrom?.options.onExitComplete?.()
    }
    )
  }
  scheduleRender() {
    this.members.forEach(i => i.instance && i.scheduleRender(!1))
  }
  removeLeadSnapshot() {
    this.lead?.snapshot && (this.lead.snapshot = void 0)
  }
}
const tl = {
  hasAnimatedSinceResize: !0,
  hasEverUpdated: !1
}
  , vf = ["", "X", "Y", "Z"]
  , NO = 1e3;
let jO = 0;
function bf(e, i, a, r) {
  const { latestValues: l } = i;
  l[e] && (a[e] = l[e],
    i.setStaticValue(e, 0),
    r && (r[e] = 0))
}
function DS(e) {
  if (e.hasCheckedOptimisedAppear = !0,
    e.root === e)
    return;
  const { visualElement: i } = e.options;
  if (!i)
    return;
  const a = Zx(i);
  if (window.MotionHasOptimisedAnimation(a, "transform")) {
    const { layout: l, layoutId: c } = e.options;
    window.MotionCancelOptimisedAnimation(a, "transform", Vt, !(l || c))
  }
  const { parent: r } = e;
  r && !r.hasCheckedOptimisedAppear && DS(r)
}
function OS({ attachResizeListener: e, defaultParent: i, measureScroll: a, checkIsScrollRoot: r, resetTransform: l }) {
  return class {
    constructor(d = {}, h = i?.()) {
      this.id = jO++,
        this.animationId = 0,
        this.animationCommitId = 0,
        this.children = new Set,
        this.options = {},
        this.isTreeAnimating = !1,
        this.isAnimationBlocked = !1,
        this.isLayoutDirty = !1,
        this.isProjectionDirty = !1,
        this.isSharedProjectionDirty = !1,
        this.isTransformDirty = !1,
        this.updateManuallyBlocked = !1,
        this.updateBlockedByResize = !1,
        this.isUpdating = !1,
        this.isSVG = !1,
        this.needsReset = !1,
        this.shouldResetTransform = !1,
        this.hasCheckedOptimisedAppear = !1,
        this.treeScale = {
          x: 1,
          y: 1
        },
        this.eventHandlers = new Map,
        this.hasTreeAnimated = !1,
        this.layoutVersion = 0,
        this.updateScheduled = !1,
        this.scheduleUpdate = () => this.update(),
        this.projectionUpdateScheduled = !1,
        this.checkUpdateFailed = () => {
          this.isUpdating && (this.isUpdating = !1,
            this.clearAllSnapshots())
        }
        ,
        this.updateProjection = () => {
          this.projectionUpdateScheduled = !1,
            this.nodes.forEach(zO),
            this.nodes.forEach(HO),
            this.nodes.forEach(FO),
            this.nodes.forEach(LO)
        }
        ,
        this.resolvedRelativeTargetAt = 0,
        this.linkedParentVersion = 0,
        this.hasProjected = !1,
        this.isVisible = !0,
        this.animationProgress = 0,
        this.sharedNodes = new Map,
        this.latestValues = d,
        this.root = h ? h.root || h : this,
        this.path = h ? [...h.path, h] : [],
        this.parent = h,
        this.depth = h ? h.depth + 1 : 0;
      for (let p = 0; p < this.path.length; p++)
        this.path[p].shouldResetTransform = !0;
      this.root === this && (this.nodes = new MO)
    }
    addEventListener(d, h) {
      return this.eventHandlers.has(d) || this.eventHandlers.set(d, new Vd),
        this.eventHandlers.get(d).add(h)
    }
    notifyListeners(d, ...h) {
      const p = this.eventHandlers.get(d);
      p && p.notify(...h)
    }
    hasListeners(d) {
      return this.eventHandlers.has(d)
    }
    mount(d) {
      if (this.instance)
        return;
      this.isSVG = $d(d) && !V2(d),
        this.instance = d;
      const { layoutId: h, layout: p, visualElement: m } = this.options;
      if (m && !m.current && m.mount(d),
        this.root.nodes.add(this),
        this.parent && this.parent.children.add(this),
        this.root.hasTreeAnimated && (p || h) && (this.isLayoutDirty = !0),
        e) {
        let y, v = 0;
        const b = () => this.root.updateBlockedByResize = !1;
        Vt.read(() => {
          v = window.innerWidth
        }
        ),
          e(d, () => {
            const S = window.innerWidth;
            S !== v && (v = S,
              this.root.updateBlockedByResize = !0,
              y && y(),
              y = DO(b, 250),
              tl.hasAnimatedSinceResize && (tl.hasAnimatedSinceResize = !1,
                this.nodes.forEach(qv)))
          }
          )
      }
      h && this.root.registerSharedNode(h, this),
        this.options.animate !== !1 && m && (h || p) && this.addEventListener("didUpdate", ({ delta: y, hasLayoutChanged: v, hasRelativeLayoutChanged: b, layout: S }) => {
          if (this.isTreeAnimationBlocked()) {
            this.target = void 0,
              this.relativeTarget = void 0;
            return
          }
          const E = this.options.transition || m.getDefaultTransition() || KO
            , { onLayoutAnimationStart: A, onLayoutAnimationComplete: C } = m.getProps()
            , O = !this.targetLayout || !CS(this.targetLayout, S)
            , V = !v && b;
          if (this.options.layoutRoot || this.resumeFrom || V || v && (O || !this.currentAnimation)) {
            this.resumeFrom && (this.resumingFrom = this.resumeFrom,
              this.resumingFrom.resumingFrom = void 0);
            const j = {
              ...Gd(E, "layout"),
              onPlay: A,
              onComplete: C
            };
            (m.shouldReduceMotion || this.options.layoutRoot) && (j.delay = 0,
              j.type = !1),
              this.startAnimation(j),
              this.setAnimationOrigin(y, V)
          } else
            v || qv(this),
              this.isLead() && this.options.onExitComplete && this.options.onExitComplete();
          this.targetLayout = S
        }
        )
    }
    unmount() {
      this.options.layoutId && this.willUpdate(),
        this.root.nodes.remove(this);
      const d = this.getStack();
      d && d.remove(this),
        this.parent && this.parent.children.delete(this),
        this.instance = void 0,
        this.eventHandlers.clear(),
        xi(this.updateProjection)
    }
    blockUpdate() {
      this.updateManuallyBlocked = !0
    }
    unblockUpdate() {
      this.updateManuallyBlocked = !1
    }
    isUpdateBlocked() {
      return this.updateManuallyBlocked || this.updateBlockedByResize
    }
    isTreeAnimationBlocked() {
      return this.isAnimationBlocked || this.parent && this.parent.isTreeAnimationBlocked() || !1
    }
    startUpdate() {
      this.isUpdateBlocked() || (this.isUpdating = !0,
        this.nodes && this.nodes.forEach(qO),
        this.animationId++)
    }
    getTransformTemplate() {
      const { visualElement: d } = this.options;
      return d && d.getProps().transformTemplate
    }
    willUpdate(d = !0) {
      if (this.root.hasTreeAnimated = !0,
        this.root.isUpdateBlocked()) {
        this.options.onExitComplete && this.options.onExitComplete();
        return
      }
      if (window.MotionCancelOptimisedAnimation && !this.hasCheckedOptimisedAppear && DS(this),
        !this.root.isUpdating && this.root.startUpdate(),
        this.isLayoutDirty)
        return;
      this.isLayoutDirty = !0;
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        v.shouldResetTransform = !0,
          (typeof v.latestValues.x == "string" || typeof v.latestValues.y == "string") && (v.isLayoutDirty = !0),
          v.updateScroll("snapshot"),
          v.options.layoutRoot && v.willUpdate(!1)
      }
      const { layoutId: h, layout: p } = this.options;
      if (h === void 0 && !p)
        return;
      const m = this.getTransformTemplate();
      this.prevTransformTemplateValue = m ? m(this.latestValues, "") : void 0,
        this.updateSnapshot(),
        d && this.notifyListeners("willUpdate")
    }
    update() {
      if (this.updateScheduled = !1,
        this.isUpdateBlocked()) {
        const p = this.updateBlockedByResize;
        this.unblockUpdate(),
          this.updateBlockedByResize = !1,
          this.clearAllSnapshots(),
          p && this.nodes.forEach(UO),
          this.nodes.forEach(Hv);
        return
      }
      if (this.animationId <= this.animationCommitId) {
        this.nodes.forEach(Fv);
        return
      }
      this.animationCommitId = this.animationId,
        this.isUpdating ? (this.isUpdating = !1,
          this.nodes.forEach(BO),
          this.nodes.forEach(kO),
          this.nodes.forEach(_O),
          this.nodes.forEach(VO)) : this.nodes.forEach(Fv),
        this.clearAllSnapshots();
      const h = he.now();
      re.delta = yn(0, 1e3 / 60, h - re.timestamp),
        re.timestamp = h,
        re.isProcessing = !0,
        cf.update.process(re),
        cf.preRender.process(re),
        cf.render.process(re),
        re.isProcessing = !1
    }
    didUpdate() {
      this.updateScheduled || (this.updateScheduled = !0,
        Zd.read(this.scheduleUpdate))
    }
    clearAllSnapshots() {
      this.nodes.forEach(PO),
        this.sharedNodes.forEach(GO)
    }
    scheduleUpdateProjection() {
      this.projectionUpdateScheduled || (this.projectionUpdateScheduled = !0,
        Vt.preRender(this.updateProjection, !1, !0))
    }
    scheduleCheckAfterUnmount() {
      Vt.postRender(() => {
        this.isLayoutDirty ? this.root.didUpdate() : this.root.checkUpdateFailed()
      }
      )
    }
    updateSnapshot() {
      this.snapshot || !this.instance || (this.snapshot = this.measure(),
        this.snapshot && !me(this.snapshot.measuredBox.x) && !me(this.snapshot.measuredBox.y) && (this.snapshot = void 0))
    }
    updateLayout() {
      if (!this.instance || (this.updateScroll(),
        !(this.options.alwaysMeasureLayout && this.isLead()) && !this.isLayoutDirty))
        return;
      if (this.resumeFrom && !this.resumeFrom.instance)
        for (let p = 0; p < this.path.length; p++)
          this.path[p].updateScroll();
      const d = this.layout;
      this.layout = this.measure(!1),
        this.layoutVersion++,
        this.layoutCorrected || (this.layoutCorrected = $t()),
        this.isLayoutDirty = !1,
        this.projectionDelta = void 0,
        this.notifyListeners("measure", this.layout.layoutBox);
      const { visualElement: h } = this.options;
      h && h.notify("LayoutMeasure", this.layout.layoutBox, d ? d.layoutBox : void 0)
    }
    updateScroll(d = "measure") {
      let h = !!(this.options.layoutScroll && this.instance);
      if (this.scroll && this.scroll.animationId === this.root.animationId && this.scroll.phase === d && (h = !1),
        h && this.instance) {
        const p = r(this.instance);
        this.scroll = {
          animationId: this.root.animationId,
          phase: d,
          isRoot: p,
          offset: a(this.instance),
          wasRoot: this.scroll ? this.scroll.isRoot : p
        }
      }
    }
    resetTransform() {
      if (!l)
        return;
      const d = this.isLayoutDirty || this.shouldResetTransform || this.options.alwaysMeasureLayout
        , h = this.projectionDelta && !AS(this.projectionDelta)
        , p = this.getTransformTemplate()
        , m = p ? p(this.latestValues, "") : void 0
        , y = m !== this.prevTransformTemplateValue;
      d && this.instance && (h || Gi(this.latestValues) || y) && (l(this.instance, m),
        this.shouldResetTransform = !1,
        this.scheduleRender())
    }
    measure(d = !0) {
      const h = this.measurePageBox();
      let p = this.removeElementScroll(h);
      return d && (p = this.removeTransform(p)),
        QO(p),
      {
        animationId: this.root.animationId,
        measuredBox: h,
        layoutBox: p,
        latestValues: {},
        source: this.id
      }
    }
    measurePageBox() {
      const { visualElement: d } = this.options;
      if (!d)
        return $t();
      const h = d.measureViewportBox();
      if (!(this.scroll?.wasRoot || this.path.some(ZO))) {
        const { scroll: m } = this.root;
        m && (dn(h.x, m.offset.x),
          dn(h.y, m.offset.y))
      }
      return h
    }
    removeElementScroll(d) {
      const h = $t();
      if (We(h, d),
        this.scroll?.wasRoot)
        return h;
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p]
          , { scroll: y, options: v } = m;
        m !== this.root && y && v.layoutScroll && (y.wasRoot && We(h, d),
          dn(h.x, y.offset.x),
          dn(h.y, y.offset.y))
      }
      return h
    }
    applyTransform(d, h = !1, p) {
      const m = p || $t();
      We(m, d);
      for (let y = 0; y < this.path.length; y++) {
        const v = this.path[y];
        !h && v.options.layoutScroll && v.scroll && v !== v.root && (dn(m.x, -v.scroll.offset.x),
          dn(m.y, -v.scroll.offset.y)),
          Gi(v.latestValues) && Jo(m, v.latestValues, v.layout?.layoutBox)
      }
      return Gi(this.latestValues) && Jo(m, this.latestValues, this.layout?.layoutBox),
        m
    }
    removeTransform(d) {
      const h = $t();
      We(h, d);
      for (let p = 0; p < this.path.length; p++) {
        const m = this.path[p];
        if (!Gi(m.latestValues))
          continue;
        let y;
        m.instance && (sd(m.latestValues) && m.updateSnapshot(),
          y = $t(),
          We(y, m.measurePageBox())),
          jv(h, m.latestValues, m.snapshot?.layoutBox, y)
      }
      return Gi(this.latestValues) && jv(h, this.latestValues),
        h
    }
    setTargetDelta(d) {
      this.targetDelta = d,
        this.root.scheduleUpdateProjection(),
        this.isProjectionDirty = !0
    }
    setOptions(d) {
      this.options = {
        ...this.options,
        ...d,
        crossfade: d.crossfade !== void 0 ? d.crossfade : !0
      }
    }
    clearMeasurements() {
      this.scroll = void 0,
        this.layout = void 0,
        this.snapshot = void 0,
        this.prevTransformTemplateValue = void 0,
        this.targetDelta = void 0,
        this.target = void 0,
        this.isLayoutDirty = !1
    }
    forceRelativeParentToResolveTarget() {
      this.relativeParent && this.relativeParent.resolvedRelativeTargetAt !== re.timestamp && this.relativeParent.resolveTargetDelta(!0)
    }
    resolveTargetDelta(d = !1) {
      const h = this.getLead();
      this.isProjectionDirty || (this.isProjectionDirty = h.isProjectionDirty),
        this.isTransformDirty || (this.isTransformDirty = h.isTransformDirty),
        this.isSharedProjectionDirty || (this.isSharedProjectionDirty = h.isSharedProjectionDirty);
      const p = !!this.resumingFrom || this !== h;
      if (!(d || p && this.isSharedProjectionDirty || this.isProjectionDirty || this.parent?.isProjectionDirty || this.attemptToResolveRelativeTarget || this.root.updateBlockedByResize))
        return;
      const { layout: y, layoutId: v } = this.options;
      if (!this.layout || !(y || v))
        return;
      this.resolvedRelativeTargetAt = re.timestamp;
      const b = this.getClosestProjectingParent();
      b && this.linkedParentVersion !== b.layoutVersion && !b.options.layoutRoot && this.removeRelativeTarget(),
        !this.targetDelta && !this.relativeTarget && (this.options.layoutAnchor !== !1 && b && b.layout ? this.createRelativeTarget(b, this.layout.layoutBox, b.layout.layoutBox) : this.removeRelativeTarget()),
        !(!this.relativeTarget && !this.targetDelta) && (this.target || (this.target = $t(),
          this.targetWithTransforms = $t()),
          this.relativeTarget && this.relativeTargetOrigin && this.relativeParent && this.relativeParent.target ? (this.forceRelativeParentToResolveTarget(),
            yO(this.target, this.relativeTarget, this.relativeParent.target, this.options.layoutAnchor || void 0)) : this.targetDelta ? (this.resumingFrom ? this.applyTransform(this.layout.layoutBox, !1, this.target) : We(this.target, this.layout.layoutBox),
              hS(this.target, this.targetDelta)) : We(this.target, this.layout.layoutBox),
          this.attemptToResolveRelativeTarget && (this.attemptToResolveRelativeTarget = !1,
            this.options.layoutAnchor !== !1 && b && !!b.resumingFrom == !!this.resumingFrom && !b.options.layoutScroll && b.target && this.animationProgress !== 1 ? this.createRelativeTarget(b, this.target, b.target) : this.relativeParent = this.relativeTarget = void 0))
    }
    getClosestProjectingParent() {
      if (!(!this.parent || sd(this.parent.latestValues) || dS(this.parent.latestValues)))
        return this.parent.isProjecting() ? this.parent : this.parent.getClosestProjectingParent()
    }
    isProjecting() {
      return !!((this.relativeTarget || this.targetDelta || this.options.layoutRoot) && this.layout)
    }
    createRelativeTarget(d, h, p) {
      this.relativeParent = d,
        this.linkedParentVersion = d.layoutVersion,
        this.forceRelativeParentToResolveTarget(),
        this.relativeTarget = $t(),
        this.relativeTargetOrigin = $t(),
        ml(this.relativeTargetOrigin, h, p, this.options.layoutAnchor || void 0),
        We(this.relativeTarget, this.relativeTargetOrigin)
    }
    removeRelativeTarget() {
      this.relativeParent = this.relativeTarget = void 0
    }
    calcProjection() {
      const d = this.getLead()
        , h = !!this.resumingFrom || this !== d;
      let p = !0;
      if ((this.isProjectionDirty || this.parent?.isProjectionDirty) && (p = !1),
        h && (this.isSharedProjectionDirty || this.isTransformDirty) && (p = !1),
        this.resolvedRelativeTargetAt === re.timestamp && (p = !1),
        p)
        return;
      const { layout: m, layoutId: y } = this.options;
      if (this.isTreeAnimating = !!(this.parent && this.parent.isTreeAnimating || this.currentAnimation || this.pendingAnimation),
        this.isTreeAnimating || (this.targetDelta = this.relativeTarget = void 0),
        !this.layout || !(m || y))
        return;
      We(this.layoutCorrected, this.layout.layoutBox);
      const v = this.treeScale.x
        , b = this.treeScale.y;
      Y2(this.layoutCorrected, this.treeScale, this.path, h),
        d.layout && !d.target && (this.treeScale.x !== 1 || this.treeScale.y !== 1) && (d.target = d.layout.layoutBox,
          d.targetWithTransforms = $t());
      const { target: S } = d;
      if (!S) {
        this.prevProjectionDelta && (this.createProjectionDeltas(),
          this.scheduleRender());
        return
      }
      !this.projectionDelta || !this.prevProjectionDelta ? this.createProjectionDeltas() : (Cv(this.prevProjectionDelta.x, this.projectionDelta.x),
        Cv(this.prevProjectionDelta.y, this.projectionDelta.y)),
        er(this.projectionDelta, this.layoutCorrected, S, this.latestValues),
        (this.treeScale.x !== v || this.treeScale.y !== b || !Pv(this.projectionDelta.x, this.prevProjectionDelta.x) || !Pv(this.projectionDelta.y, this.prevProjectionDelta.y)) && (this.hasProjected = !0,
          this.scheduleRender(),
          this.notifyListeners("projectionUpdate", S))
    }
    hide() {
      this.isVisible = !1
    }
    show() {
      this.isVisible = !0
    }
    scheduleRender(d = !0) {
      if (this.options.visualElement?.scheduleRender(),
        d) {
        const h = this.getStack();
        h && h.scheduleRender()
      }
      this.resumingFrom && !this.resumingFrom.instance && (this.resumingFrom = void 0)
    }
    createProjectionDeltas() {
      this.prevProjectionDelta = ks(),
        this.projectionDelta = ks(),
        this.projectionDeltaWithTransform = ks()
    }
    setAnimationOrigin(d, h = !1) {
      const p = this.snapshot
        , m = p ? p.latestValues : {}
        , y = {
          ...this.latestValues
        }
        , v = ks();
      (!this.relativeParent || !this.relativeParent.options.layoutRoot) && (this.relativeTarget = this.relativeTargetOrigin = void 0),
        this.attemptToResolveRelativeTarget = !h;
      const b = $t()
        , S = p ? p.source : void 0
        , E = this.layout ? this.layout.source : void 0
        , A = S !== E
        , C = this.getStack()
        , O = !C || C.members.length <= 1
        , V = !!(A && !O && this.options.crossfade === !0 && !this.path.some(XO));
      this.animationProgress = 0;
      let j;
      this.mixTargetDelta = L => {
        const k = L / 1e3;
        Gv(v.x, d.x, k),
          Gv(v.y, d.y, k),
          this.setTargetDelta(v),
          this.relativeTarget && this.relativeTargetOrigin && this.layout && this.relativeParent && this.relativeParent.layout && (ml(b, this.layout.layoutBox, this.relativeParent.layout.layoutBox, this.options.layoutAnchor || void 0),
            YO(this.relativeTarget, this.relativeTargetOrigin, b, k),
            j && xO(this.relativeTarget, j) && (this.isProjectionDirty = !1),
            j || (j = $t()),
            We(j, this.relativeTarget)),
          A && (this.animationValues = y,
            wO(y, m, this.latestValues, k, V, O)),
          this.root.scheduleUpdateProjection(),
          this.scheduleRender(),
          this.animationProgress = k
      }
        ,
        this.mixTargetDelta(this.options.layoutRoot ? 1e3 : 0)
    }
    startAnimation(d) {
      this.notifyListeners("animationStart"),
        this.currentAnimation?.stop(),
        this.resumingFrom?.currentAnimation?.stop(),
        this.pendingAnimation && (xi(this.pendingAnimation),
          this.pendingAnimation = void 0),
        this.pendingAnimation = Vt.update(() => {
          tl.hasAnimatedSinceResize = !0,
            this.motionValue || (this.motionValue = Wi(0)),
            this.motionValue.jump(0, !1),
            this.currentAnimation = CO(this.motionValue, [0, 1e3], {
              ...d,
              velocity: 0,
              isSync: !0,
              onUpdate: h => {
                this.mixTargetDelta(h),
                  d.onUpdate && d.onUpdate(h)
              }
              ,
              onStop: () => { }
              ,
              onComplete: () => {
                d.onComplete && d.onComplete(),
                  this.completeAnimation()
              }
            }),
            this.resumingFrom && (this.resumingFrom.currentAnimation = this.currentAnimation),
            this.pendingAnimation = void 0
        }
        )
    }
    completeAnimation() {
      this.resumingFrom && (this.resumingFrom.currentAnimation = void 0,
        this.resumingFrom.preserveOpacity = void 0);
      const d = this.getStack();
      d && d.exitAnimationComplete(),
        this.resumingFrom = this.currentAnimation = this.animationValues = void 0,
        this.notifyListeners("animationComplete")
    }
    finishAnimation() {
      this.currentAnimation && (this.mixTargetDelta && this.mixTargetDelta(NO),
        this.currentAnimation.stop()),
        this.completeAnimation()
    }
    applyTransformsToTarget() {
      const d = this.getLead();
      let { targetWithTransforms: h, target: p, layout: m, latestValues: y } = d;
      if (!(!h || !p || !m)) {
        if (this !== d && this.layout && m && NS(this.options.animationType, this.layout.layoutBox, m.layoutBox)) {
          p = this.target || $t();
          const v = me(this.layout.layoutBox.x);
          p.x.min = d.target.x.min,
            p.x.max = p.x.min + v;
          const b = me(this.layout.layoutBox.y);
          p.y.min = d.target.y.min,
            p.y.max = p.y.min + b
        }
        We(h, p),
          Jo(h, y),
          er(this.projectionDeltaWithTransform, this.layoutCorrected, h, y)
      }
    }
    registerSharedNode(d, h) {
      this.sharedNodes.has(d) || this.sharedNodes.set(d, new OO),
        this.sharedNodes.get(d).add(h);
      const m = h.options.initialPromotionConfig;
      h.promote({
        transition: m ? m.transition : void 0,
        preserveFollowOpacity: m && m.shouldPreserveFollowOpacity ? m.shouldPreserveFollowOpacity(h) : void 0
      })
    }
    isLead() {
      const d = this.getStack();
      return d ? d.lead === this : !0
    }
    getLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.lead || this : this
    }
    getPrevLead() {
      const { layoutId: d } = this.options;
      return d ? this.getStack()?.prevLead : void 0
    }
    getStack() {
      const { layoutId: d } = this.options;
      if (d)
        return this.root.sharedNodes.get(d)
    }
    promote({ needsReset: d, transition: h, preserveFollowOpacity: p } = {}) {
      const m = this.getStack();
      m && m.promote(this, p),
        d && (this.projectionDelta = void 0,
          this.needsReset = !0),
        h && this.setOptions({
          transition: h
        })
    }
    relegate() {
      const d = this.getStack();
      return d ? d.relegate(this) : !1
    }
    resetSkewAndRotation() {
      const { visualElement: d } = this.options;
      if (!d)
        return;
      let h = !1;
      const { latestValues: p } = d;
      if ((p.z || p.rotate || p.rotateX || p.rotateY || p.rotateZ || p.skewX || p.skewY) && (h = !0),
        !h)
        return;
      const m = {};
      p.z && bf("z", d, m, this.animationValues);
      for (let y = 0; y < vf.length; y++)
        bf(`rotate${vf[y]}`, d, m, this.animationValues),
          bf(`skew${vf[y]}`, d, m, this.animationValues);
      d.render();
      for (const y in m)
        d.setStaticValue(y, m[y]),
          this.animationValues && (this.animationValues[y] = m[y]);
      d.scheduleRender()
    }
    applyProjectionStyles(d, h) {
      if (!this.instance || this.isSVG)
        return;
      if (!this.isVisible) {
        d.visibility = "hidden";
        return
      }
      const p = this.getTransformTemplate();
      if (this.needsReset) {
        this.needsReset = !1,
          d.visibility = "",
          d.opacity = "",
          d.pointerEvents = Io(h?.pointerEvents) || "",
          d.transform = p ? p(this.latestValues, "") : "none";
        return
      }
      const m = this.getLead();
      if (!this.projectionDelta || !this.layout || !m.target) {
        this.options.layoutId && (d.opacity = this.latestValues.opacity !== void 0 ? this.latestValues.opacity : 1,
          d.pointerEvents = Io(h?.pointerEvents) || ""),
          this.hasProjected && !Gi(this.latestValues) && (d.transform = p ? p({}, "") : "none",
            this.hasProjected = !1);
        return
      }
      d.visibility = "";
      const y = m.animationValues || m.latestValues;
      this.applyTransformsToTarget();
      let v = SO(this.projectionDeltaWithTransform, this.treeScale, y);
      p && (v = p(y, v)),
        d.transform = v;
      const { x: b, y: S } = this.projectionDelta;
      d.transformOrigin = `${b.origin * 100}% ${S.origin * 100}% 0`,
        m.animationValues ? d.opacity = m === this ? y.opacity ?? this.latestValues.opacity ?? 1 : this.preserveOpacity ? this.latestValues.opacity : y.opacityExit : d.opacity = m === this ? y.opacity !== void 0 ? y.opacity : "" : y.opacityExit !== void 0 ? y.opacityExit : 0;
      for (const E in rd) {
        if (y[E] === void 0)
          continue;
        const { correct: A, applyTo: C, isCSSVariable: O } = rd[E]
          , V = v === "none" ? y[E] : A(y[E], m);
        if (C) {
          const j = C.length;
          for (let L = 0; L < j; L++)
            d[C[L]] = V
        } else
          O ? this.options.visualElement.renderState.vars[E] = V : d[E] = V
      }
      this.options.layoutId && (d.pointerEvents = m === this ? Io(h?.pointerEvents) || "" : "none")
    }
    clearSnapshot() {
      this.resumeFrom = this.snapshot = void 0
    }
    resetTree() {
      this.root.nodes.forEach(d => d.currentAnimation?.stop()),
        this.root.nodes.forEach(Hv),
        this.root.sharedNodes.clear()
    }
  }
}
function _O(e) {
  e.updateLayout()
}
function VO(e) {
  const i = e.resumeFrom?.snapshot || e.snapshot;
  if (e.isLead() && e.layout && i && e.hasListeners("didUpdate")) {
    const { layoutBox: a, measuredBox: r } = e.layout
      , { animationType: l } = e.options
      , c = i.source !== e.layout.source;
    if (l === "size")
      fn(y => {
        const v = c ? i.measuredBox[y] : i.layoutBox[y]
          , b = me(v);
        v.min = a[y].min,
          v.max = v.min + b
      }
      );
    else if (l === "x" || l === "y") {
      const y = l === "x" ? "y" : "x";
      od(c ? i.measuredBox[y] : i.layoutBox[y], a[y])
    } else
      NS(l, i.layoutBox, a) && fn(y => {
        const v = c ? i.measuredBox[y] : i.layoutBox[y]
          , b = me(a[y]);
        v.max = v.min + b,
          e.relativeTarget && !e.currentAnimation && (e.isProjectionDirty = !0,
            e.relativeTarget[y].max = e.relativeTarget[y].min + b)
      }
      );
    const d = ks();
    er(d, a, i.layoutBox);
    const h = ks();
    c ? er(h, e.applyTransform(r, !0), i.measuredBox) : er(h, a, i.layoutBox);
    const p = !AS(d);
    let m = !1;
    if (!e.resumeFrom) {
      const y = e.getClosestProjectingParent();
      if (y && !y.resumeFrom) {
        const { snapshot: v, layout: b } = y;
        if (v && b) {
          const S = e.options.layoutAnchor || void 0
            , E = $t();
          ml(E, i.layoutBox, v.layoutBox, S);
          const A = $t();
          ml(A, a, b.layoutBox, S),
            CS(E, A) || (m = !0),
            y.options.layoutRoot && (e.relativeTarget = A,
              e.relativeTargetOrigin = E,
              e.relativeParent = y)
        }
      }
    }
    e.notifyListeners("didUpdate", {
      layout: a,
      snapshot: i,
      delta: h,
      layoutDelta: d,
      hasLayoutChanged: p,
      hasRelativeLayoutChanged: m
    })
  } else if (e.isLead()) {
    const { onExitComplete: a } = e.options;
    a && a()
  }
  e.options.transition = void 0
}
function zO(e) {
  e.parent && (e.isProjecting() || (e.isProjectionDirty = e.parent.isProjectionDirty),
    e.isSharedProjectionDirty || (e.isSharedProjectionDirty = !!(e.isProjectionDirty || e.parent.isProjectionDirty || e.parent.isSharedProjectionDirty)),
    e.isTransformDirty || (e.isTransformDirty = e.parent.isTransformDirty))
}
function LO(e) {
  e.isProjectionDirty = e.isSharedProjectionDirty = e.isTransformDirty = !1
}
function PO(e) {
  e.clearSnapshot()
}
function Hv(e) {
  e.clearMeasurements()
}
function UO(e) {
  e.isLayoutDirty = !0,
    e.updateLayout()
}
function Fv(e) {
  e.isLayoutDirty = !1
}
function BO(e) {
  e.isAnimationBlocked && e.layout && !e.isLayoutDirty && (e.snapshot = e.layout,
    e.isLayoutDirty = !0)
}
function kO(e) {
  const { visualElement: i } = e.options;
  i && i.getProps().onBeforeLayoutMeasure && i.notify("BeforeLayoutMeasure"),
    e.resetTransform()
}
function qv(e) {
  e.finishAnimation(),
    e.targetDelta = e.relativeTarget = e.target = void 0,
    e.isProjectionDirty = !0
}
function HO(e) {
  e.resolveTargetDelta()
}
function FO(e) {
  e.calcProjection()
}
function qO(e) {
  e.resetSkewAndRotation()
}
function GO(e) {
  e.removeLeadSnapshot()
}
function Gv(e, i, a) {
  e.translate = Lt(i.translate, 0, a),
    e.scale = Lt(i.scale, 1, a),
    e.origin = i.origin,
    e.originPoint = i.originPoint
}
function Yv(e, i, a, r) {
  e.min = Lt(i.min, a.min, r),
    e.max = Lt(i.max, a.max, r)
}
function YO(e, i, a, r) {
  Yv(e.x, i.x, a.x, r),
    Yv(e.y, i.y, a.y, r)
}
function XO(e) {
  return e.animationValues && e.animationValues.opacityExit !== void 0
}
const KO = {
  duration: .45,
  ease: [.4, 0, .1, 1]
}
  , Xv = e => typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().includes(e)
  , Kv = Xv("applewebkit/") && !Xv("chrome/") ? Math.round : Ye;
function Qv(e) {
  e.min = Kv(e.min),
    e.max = Kv(e.max)
}
function QO(e) {
  Qv(e.x),
    Qv(e.y)
}
function NS(e, i, a) {
  return e === "position" || e === "preserve-aspect" && !pO(Lv(i), Lv(a), .2)
}
function ZO(e) {
  return e !== e.root && e.scroll?.wasRoot
}
const WO = OS({
  attachResizeListener: (e, i) => ur(e, "resize", i),
  measureScroll: () => ({
    x: document.documentElement.scrollLeft || document.body?.scrollLeft || 0,
    y: document.documentElement.scrollTop || document.body?.scrollTop || 0
  }),
  checkIsScrollRoot: () => !0
})
  , xf = {
    current: void 0
  }
  , jS = OS({
    measureScroll: e => ({
      x: e.scrollLeft,
      y: e.scrollTop
    }),
    defaultParent: () => {
      if (!xf.current) {
        const e = new WO({});
        e.mount(window),
          e.setOptions({
            layoutScroll: !0
          }),
          xf.current = e
      }
      return xf.current
    }
    ,
    resetTransform: (e, i) => {
      e.style.transform = i !== void 0 ? i : "none"
    }
    ,
    checkIsScrollRoot: e => window.getComputedStyle(e).position === "fixed"
  })
  , zl = w.createContext({
    transformPagePoint: e => e,
    isStatic: !1,
    reducedMotion: "never"
  });
function Zv(e, i) {
  if (typeof e == "function")
    return e(i);
  e != null && (e.current = i)
}
function $O(...e) {
  return i => {
    let a = !1;
    const r = e.map(l => {
      const c = Zv(l, i);
      return !a && typeof c == "function" && (a = !0),
        c
    }
    );
    if (a)
      return () => {
        for (let l = 0; l < r.length; l++) {
          const c = r[l];
          typeof c == "function" ? c() : Zv(e[l], null)
        }
      }
  }
}
function JO(...e) {
  return w.useCallback($O(...e), e)
}
class IO extends w.Component {
  getSnapshotBeforeUpdate(i) {
    const a = this.props.childRef.current;
    if (Ko(a) && i.isPresent && !this.props.isPresent && this.props.pop !== !1) {
      const r = a.offsetParent
        , l = Ko(r) && r.offsetWidth || 0
        , c = Ko(r) && r.offsetHeight || 0
        , d = getComputedStyle(a)
        , h = this.props.sizeRef.current;
      h.height = parseFloat(d.height),
        h.width = parseFloat(d.width),
        h.top = a.offsetTop,
        h.left = a.offsetLeft,
        h.right = l - h.width - h.left,
        h.bottom = c - h.height - h.top
    }
    return null
  }
  componentDidUpdate() { }
  render() {
    return this.props.children
  }
}
function t3({ children: e, isPresent: i, anchorX: a, anchorY: r, root: l, pop: c }) {
  const d = w.useId()
    , h = w.useRef(null)
    , p = w.useRef({
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    })
    , { nonce: m } = w.useContext(zl)
    , y = e.props?.ref ?? e?.ref
    , v = JO(h, y);
  return w.useInsertionEffect(() => {
    const { width: b, height: S, top: E, left: A, right: C, bottom: O } = p.current;
    if (i || c === !1 || !h.current || !b || !S)
      return;
    const V = a === "left" ? `left: ${A}` : `right: ${C}`
      , j = r === "bottom" ? `bottom: ${O}` : `top: ${E}`;
    h.current.dataset.motionPopId = d;
    const L = document.createElement("style");
    m && (L.nonce = m);
    const k = l ?? document.head;
    return k.appendChild(L),
      L.sheet && L.sheet.insertRule(`
          [data-motion-pop-id="${d}"] {
            position: absolute !important;
            width: ${b}px !important;
            height: ${S}px !important;
            ${V}px !important;
            ${j}px !important;
          }
        `),
      () => {
        h.current?.removeAttribute("data-motion-pop-id"),
          k.contains(L) && k.removeChild(L)
      }
  }
    , [i]),
    M.jsx(IO, {
      isPresent: i,
      childRef: h,
      sizeRef: p,
      pop: c,
      children: c === !1 ? e : w.cloneElement(e, {
        ref: v
      })
    })
}
const e3 = ({ children: e, initial: i, isPresent: a, onExitComplete: r, custom: l, presenceAffectsLayout: c, mode: d, anchorX: h, anchorY: p, root: m }) => {
  const y = Ol(n3)
    , v = w.useId();
  let b = !0
    , S = w.useMemo(() => (b = !1,
    {
      id: v,
      initial: i,
      isPresent: a,
      custom: l,
      onExitComplete: E => {
        y.set(E, !0);
        for (const A of y.values())
          if (!A)
            return;
        r && r()
      }
      ,
      register: E => (y.set(E, !1),
        () => y.delete(E))
    }), [a, y, r]);
  return c && b && (S = {
    ...S
  }),
    w.useMemo(() => {
      y.forEach((E, A) => y.set(A, !1))
    }
      , [a]),
    w.useEffect(() => {
      !a && !y.size && r && r()
    }
      , [a]),
    e = M.jsx(t3, {
      pop: d === "popLayout",
      isPresent: a,
      anchorX: h,
      anchorY: p,
      root: m,
      children: e
    }),
    M.jsx(Nl.Provider, {
      value: S,
      children: e
    })
}
  ;
function n3() {
  return new Map
}
function _S(e = !0) {
  const i = w.useContext(Nl);
  if (i === null)
    return [!0, null];
  const { isPresent: a, onExitComplete: r, register: l } = i
    , c = w.useId();
  w.useEffect(() => {
    if (e)
      return l(c)
  }
    , [e]);
  const d = w.useCallback(() => e && r && r(c), [c, r, e]);
  return !a && r ? [!1, d] : [!0]
}
const ko = e => e.key || "";
function Wv(e) {
  const i = [];
  return w.Children.forEach(e, a => {
    w.isValidElement(a) && i.push(a)
  }
  ),
    i
}
const pl = ({ children: e, custom: i, initial: a = !0, onExitComplete: r, presenceAffectsLayout: l = !0, mode: c = "sync", propagate: d = !1, anchorX: h = "left", anchorY: p = "top", root: m }) => {
  const [y, v] = _S(d)
    , b = w.useMemo(() => Wv(e), [e])
    , S = d && !y ? [] : b.map(ko)
    , E = w.useRef(!0)
    , A = w.useRef(b)
    , C = Ol(() => new Map)
    , O = w.useRef(new Set)
    , [V, j] = w.useState(b)
    , [L, k] = w.useState(b);
  rx(() => {
    E.current = !1,
      A.current = b;
    for (let H = 0; H < L.length; H++) {
      const $ = ko(L[H]);
      S.includes($) ? (C.delete($),
        O.current.delete($)) : C.get($) !== !0 && C.set($, !1)
    }
  }
    , [L, S.length, S.join("-")]);
  const Q = [];
  if (b !== V) {
    let H = [...b];
    for (let $ = 0; $ < L.length; $++) {
      const W = L[$]
        , ot = ko(W);
      S.includes(ot) || (H.splice($, 0, W),
        Q.push(W))
    }
    return c === "wait" && Q.length && (H = Q),
      k(Wv(H)),
      j(b),
      null
  }
  const { forceRender: Z } = w.useContext(Nd);
  return M.jsx(M.Fragment, {
    children: L.map(H => {
      const $ = ko(H)
        , W = d && !y ? !1 : b === L || S.includes($)
        , ot = () => {
          if (O.current.has($))
            return;
          if (C.has($))
            O.current.add($),
              C.set($, !0);
          else
            return;
          let lt = !0;
          C.forEach(yt => {
            yt || (lt = !1)
          }
          ),
            lt && (Z?.(),
              k(A.current),
              d && v?.(),
              r && r())
        }
        ;
      return M.jsx(e3, {
        isPresent: W,
        initial: !E.current || a ? void 0 : !1,
        custom: i,
        presenceAffectsLayout: l,
        mode: c,
        root: m,
        onExitComplete: W ? void 0 : ot,
        anchorX: h,
        anchorY: p,
        children: H
      }, $)
    }
    )
  })
}
  , VS = w.createContext({
    strict: !1
  })
  , $v = {
    animation: ["animate", "variants", "whileHover", "whileTap", "exit", "whileInView", "whileFocus", "whileDrag"],
    exit: ["exit"],
    drag: ["drag", "dragControls"],
    focus: ["whileFocus"],
    hover: ["whileHover", "onHoverStart", "onHoverEnd"],
    tap: ["whileTap", "onTap", "onTapStart", "onTapCancel"],
    pan: ["onPan", "onPanStart", "onPanSessionStart", "onPanEnd"],
    inView: ["whileInView", "onViewportEnter", "onViewportLeave"],
    layout: ["layout", "layoutId"]
  };
let Jv = !1;
function i3() {
  if (Jv)
    return;
  const e = {};
  for (const i in $v)
    e[i] = {
      isEnabled: a => $v[i].some(r => !!a[r])
    };
  uS(e),
    Jv = !0
}
function zS() {
  return i3(),
    H2()
}
function s3(e) {
  const i = zS();
  for (const a in e)
    i[a] = {
      ...i[a],
      ...e[a]
    };
  uS(i)
}
const a3 = new Set(["animate", "exit", "variants", "initial", "style", "values", "variants", "transition", "transformTemplate", "custom", "inherit", "onBeforeLayoutMeasure", "onAnimationStart", "onAnimationComplete", "onUpdate", "onDragStart", "onDrag", "onDragEnd", "onMeasureDragConstraints", "onDirectionLock", "onDragTransitionEnd", "_dragX", "_dragY", "onHoverStart", "onHoverEnd", "onViewportEnter", "onViewportLeave", "globalTapTarget", "propagate", "ignoreStrict", "viewport"]);
function yl(e) {
  return e.startsWith("while") || e.startsWith("drag") && e !== "draggable" || e.startsWith("layout") || e.startsWith("onTap") || e.startsWith("onPan") || e.startsWith("onLayout") || a3.has(e)
}
let LS = e => !yl(e);
function r3(e) {
  typeof e == "function" && (LS = i => i.startsWith("on") ? !yl(i) : e(i))
}
try {
  r3(require("@emotion/is-prop-valid").default)
} catch { }
function o3(e, i, a) {
  const r = {};
  for (const l in e)
    l === "values" && typeof e.values == "object" || oe(e[l]) || (LS(l) || a === !0 && yl(l) || !i && !yl(l) || e.draggable && l.startsWith("onDrag")) && (r[l] = e[l]);
  return r
}
const Ll = w.createContext({});
function l3(e, i) {
  if (Vl(e)) {
    const { initial: a, animate: r } = e;
    return {
      initial: a === !1 || lr(a) ? a : void 0,
      animate: lr(r) ? r : void 0
    }
  }
  return e.inherit !== !1 ? i : {}
}
function u3(e) {
  const { initial: i, animate: a } = l3(e, w.useContext(Ll));
  return w.useMemo(() => ({
    initial: i,
    animate: a
  }), [Iv(i), Iv(a)])
}
function Iv(e) {
  return Array.isArray(e) ? e.join(" ") : e
}
const nh = () => ({
  style: {},
  transform: {},
  transformOrigin: {},
  vars: {}
});
function PS(e, i, a) {
  for (const r in i)
    !oe(i[r]) && !yS(r, a) && (e[r] = i[r])
}
function c3({ transformTemplate: e }, i) {
  return w.useMemo(() => {
    const a = nh();
    return th(a, i, e),
      Object.assign({}, a.vars, a.style)
  }
    , [i])
}
function f3(e, i) {
  const a = e.style || {}
    , r = {};
  return PS(r, a, e),
    Object.assign(r, c3(e, i)),
    r
}
function d3(e, i) {
  const a = {}
    , r = f3(e, i);
  return e.drag && e.dragListener !== !1 && (a.draggable = !1,
    r.userSelect = r.WebkitUserSelect = r.WebkitTouchCallout = "none",
    r.touchAction = e.drag === !0 ? "none" : `pan-${e.drag === "x" ? "y" : "x"}`),
    e.tabIndex === void 0 && (e.onTap || e.onTapStart || e.whileTap) && (a.tabIndex = 0),
    a.style = r,
    a
}
const US = () => ({
  ...nh(),
  attrs: {}
});
function h3(e, i, a, r) {
  const l = w.useMemo(() => {
    const c = US();
    return gS(c, i, bS(r), e.transformTemplate, e.style),
    {
      ...c.attrs,
      style: {
        ...c.style
      }
    }
  }
    , [i]);
  if (e.style) {
    const c = {};
    PS(c, e.style, e),
      l.style = {
        ...c,
        ...l.style
      }
  }
  return l
}
const m3 = ["animate", "circle", "defs", "desc", "ellipse", "g", "image", "line", "filter", "marker", "mask", "metadata", "path", "pattern", "polygon", "polyline", "rect", "stop", "switch", "symbol", "svg", "text", "tspan", "use", "view"];
function ih(e) {
  return typeof e != "string" || e.includes("-") ? !1 : !!(m3.indexOf(e) > -1 || /[A-Z]/u.test(e))
}
function p3(e, i, a, { latestValues: r }, l, c = !1, d) {
  const p = (d ?? ih(e) ? h3 : d3)(i, r, l, e)
    , m = o3(i, typeof e == "string", c)
    , y = e !== w.Fragment ? {
      ...m,
      ...p,
      ref: a
    } : {}
    , { children: v } = i
    , b = w.useMemo(() => oe(v) ? v.get() : v, [v]);
  return w.createElement(e, {
    ...y,
    children: b
  })
}
function y3({ scrapeMotionValuesFromProps: e, createRenderState: i }, a, r, l) {
  return {
    latestValues: g3(a, r, l, e),
    renderState: i()
  }
}
function g3(e, i, a, r) {
  const l = {}
    , c = r(e, {});
  for (const b in c)
    l[b] = Io(c[b]);
  let { initial: d, animate: h } = e;
  const p = Vl(e)
    , m = oS(e);
  i && m && !p && e.inherit !== !1 && (d === void 0 && (d = i.initial),
    h === void 0 && (h = i.animate));
  let y = a ? a.initial === !1 : !1;
  y = y || d === !1;
  const v = y ? h : d;
  if (v && typeof v != "boolean" && !_l(v)) {
    const b = Array.isArray(v) ? v : [v];
    for (let S = 0; S < b.length; S++) {
      const E = Xd(e, b[S]);
      if (E) {
        const { transitionEnd: A, transition: C, ...O } = E;
        for (const V in O) {
          let j = O[V];
          if (Array.isArray(j)) {
            const L = y ? j.length - 1 : 0;
            j = j[L]
          }
          j !== null && (l[V] = j)
        }
        for (const V in A)
          l[V] = A[V]
      }
    }
  }
  return l
}
const BS = e => (i, a) => {
  const r = w.useContext(Ll)
    , l = w.useContext(Nl)
    , c = () => y3(e, i, r, l);
  return a ? c() : Ol(c)
}
  , v3 = BS({
    scrapeMotionValuesFromProps: eh,
    createRenderState: nh
  })
  , b3 = BS({
    scrapeMotionValuesFromProps: xS,
    createRenderState: US
  })
  , x3 = Symbol.for("motionComponentSymbol");
function S3(e, i, a) {
  const r = w.useRef(a);
  w.useInsertionEffect(() => {
    r.current = a
  }
  );
  const l = w.useRef(null);
  return w.useCallback(c => {
    c && e.onMount?.(c);
    const d = r.current;
    if (typeof d == "function")
      if (c) {
        const h = d(c);
        typeof h == "function" && (l.current = h)
      } else
        l.current ? (l.current(),
          l.current = null) : d(c);
    else
      d && (d.current = c);
    i && (c ? i.mount(c) : i.unmount())
  }
    , [i])
}
const kS = w.createContext({});
function Ps(e) {
  return e && typeof e == "object" && Object.prototype.hasOwnProperty.call(e, "current")
}
function T3(e, i, a, r, l, c) {
  const { visualElement: d } = w.useContext(Ll)
    , h = w.useContext(VS)
    , p = w.useContext(Nl)
    , m = w.useContext(zl)
    , y = m.reducedMotion
    , v = m.skipAnimations
    , b = w.useRef(null)
    , S = w.useRef(!1);
  r = r || h.renderer,
    !b.current && r && (b.current = r(e, {
      visualState: i,
      parent: d,
      props: a,
      presenceContext: p,
      blockInitialAnimation: p ? p.initial === !1 : !1,
      reducedMotionConfig: y,
      skipAnimations: v,
      isSVG: c
    }),
      S.current && b.current && (b.current.manuallyAnimateOnMount = !0));
  const E = b.current
    , A = w.useContext(kS);
  E && !E.projection && l && (E.type === "html" || E.type === "svg") && w3(b.current, a, l, A);
  const C = w.useRef(!1);
  w.useInsertionEffect(() => {
    E && C.current && E.update(a, p)
  }
  );
  const O = a[Qx]
    , V = w.useRef(!!O && typeof window < "u" && !window.MotionHandoffIsComplete?.(O) && window.MotionHasOptimisedAnimation?.(O));
  return rx(() => {
    S.current = !0,
      E && (C.current = !0,
        window.MotionIsMounted = !0,
        E.updateFeatures(),
        E.scheduleRenderMicrotask(),
        V.current && E.animationState && E.animationState.animateChanges())
  }
  ),
    w.useEffect(() => {
      E && (!V.current && E.animationState && E.animationState.animateChanges(),
        V.current && (queueMicrotask(() => {
          window.MotionHandoffMarkAsComplete?.(O)
        }
        ),
          V.current = !1),
        E.enteringChildren = void 0)
    }
    ),
    E
}
function w3(e, i, a, r) {
  const { layoutId: l, layout: c, drag: d, dragConstraints: h, layoutScroll: p, layoutRoot: m, layoutAnchor: y, layoutCrossfade: v } = i;
  e.projection = new a(e.latestValues, i["data-framer-portal-id"] ? void 0 : HS(e.parent)),
    e.projection.setOptions({
      layoutId: l,
      layout: c,
      alwaysMeasureLayout: !!d || h && Ps(h),
      visualElement: e,
      animationType: typeof c == "string" ? c : "both",
      initialPromotionConfig: r,
      crossfade: v,
      layoutScroll: p,
      layoutRoot: m,
      layoutAnchor: y
    })
}
function HS(e) {
  if (e)
    return e.options.allowProjection !== !1 ? e.projection : HS(e.parent)
}
function Sf(e, { forwardMotionProps: i = !1, type: a } = {}, r, l) {
  r && s3(r);
  const c = a ? a === "svg" : ih(e)
    , d = c ? b3 : v3;
  function h(m, y) {
    let v;
    const b = {
      ...w.useContext(zl),
      ...m,
      layoutId: E3(m)
    }
      , { isStatic: S } = b
      , E = u3(m)
      , A = d(m, S);
    if (!S && typeof window < "u") {
      A3();
      const C = C3(b);
      v = C.MeasureLayout,
        E.visualElement = T3(e, A, b, l, C.ProjectionNode, c)
    }
    return M.jsxs(Ll.Provider, {
      value: E,
      children: [v && E.visualElement ? M.jsx(v, {
        visualElement: E.visualElement,
        ...b
      }) : null, p3(e, m, S3(A, E.visualElement, y), A, S, i, c)]
    })
  }
  h.displayName = `motion.${typeof e == "string" ? e : `create(${e.displayName ?? e.name ?? ""})`}`;
  const p = w.forwardRef(h);
  return p[x3] = e,
    p
}
function E3({ layoutId: e }) {
  const i = w.useContext(Nd).id;
  return i && e !== void 0 ? i + "-" + e : e
}
function A3(e, i) {
  w.useContext(VS).strict
}
function C3(e) {
  const i = zS()
    , { drag: a, layout: r } = i;
  if (!a && !r)
    return {};
  const l = {
    ...a,
    ...r
  };
  return {
    MeasureLayout: a?.isEnabled(e) || r?.isEnabled(e) ? l.MeasureLayout : void 0,
    ProjectionNode: l.ProjectionNode
  }
}
function R3(e, i) {
  if (typeof Proxy > "u")
    return Sf;
  const a = new Map
    , r = (c, d) => Sf(c, d, e, i)
    , l = (c, d) => r(c, d);
  return new Proxy(l, {
    get: (c, d) => d === "create" ? r : (a.has(d) || a.set(d, Sf(d, void 0, e, i)),
      a.get(d))
  })
}
const M3 = (e, i) => i.isSVG ?? ih(e) ? new sO(i) : new J2(i, {
  allowProjection: e !== w.Fragment
});
class D3 extends Ti {
  constructor(i) {
    super(i),
      i.animationState || (i.animationState = uO(i))
  }
  updateAnimationControlsSubscription() {
    const { animate: i } = this.node.getProps();
    _l(i) && (this.unmountControls = i.subscribe(this.node))
  }
  mount() {
    this.updateAnimationControlsSubscription()
  }
  update() {
    const { animate: i } = this.node.getProps()
      , { animate: a } = this.node.prevProps || {};
    i !== a && this.updateAnimationControlsSubscription()
  }
  unmount() {
    this.node.animationState.reset(),
      this.unmountControls?.()
  }
}
let O3 = 0;
class N3 extends Ti {
  constructor() {
    super(...arguments),
      this.id = O3++,
      this.isExitComplete = !1
  }
  update() {
    if (!this.node.presenceContext)
      return;
    const { isPresent: i, onExitComplete: a } = this.node.presenceContext
      , { isPresent: r } = this.node.prevPresenceContext || {};
    if (!this.node.animationState || i === r)
      return;
    if (i && r === !1) {
      if (this.isExitComplete) {
        const { initial: c, custom: d } = this.node.getProps();
        if (typeof c == "string") {
          const h = Qi(this.node, c, d);
          if (h) {
            const { transition: p, transitionEnd: m, ...y } = h;
            for (const v in y)
              this.node.getValue(v)?.jump(y[v])
          }
        }
        this.node.animationState.reset(),
          this.node.animationState.animateChanges()
      } else
        this.node.animationState.setActive("exit", !1);
      this.isExitComplete = !1;
      return
    }
    const l = this.node.animationState.setActive("exit", !i);
    a && !i && l.then(() => {
      this.isExitComplete = !0,
        a(this.id)
    }
    )
  }
  mount() {
    const { register: i, onExitComplete: a } = this.node.presenceContext || {};
    a && a(this.id),
      i && (this.unmount = i(this.id))
  }
  unmount() { }
}
const j3 = {
  animation: {
    Feature: D3
  },
  exit: {
    Feature: N3
  }
};
function yr(e) {
  return {
    point: {
      x: e.pageX,
      y: e.pageY
    }
  }
}
const _3 = e => i => Wd(i) && e(i, yr(i));
function nr(e, i, a, r) {
  return ur(e, i, _3(a), r)
}
const FS = ({ current: e }) => e ? e.ownerDocument.defaultView : null
  , t0 = (e, i) => Math.abs(e - i);
function V3(e, i) {
  const a = t0(e.x, i.x)
    , r = t0(e.y, i.y);
  return Math.sqrt(a ** 2 + r ** 2)
}
const e0 = new Set(["auto", "scroll"]);
class qS {
  constructor(i, a, { transformPagePoint: r, contextWindow: l = window, dragSnapToOrigin: c = !1, distanceThreshold: d = 3, element: h } = {}) {
    if (this.startEvent = null,
      this.lastMoveEvent = null,
      this.lastMoveEventInfo = null,
      this.lastRawMoveEventInfo = null,
      this.handlers = {},
      this.contextWindow = window,
      this.scrollPositions = new Map,
      this.removeScrollListeners = null,
      this.onElementScroll = S => {
        this.handleScroll(S.target)
      }
      ,
      this.onWindowScroll = () => {
        this.handleScroll(window)
      }
      ,
      this.updatePoint = () => {
        if (!(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        this.lastRawMoveEventInfo && (this.lastMoveEventInfo = Ho(this.lastRawMoveEventInfo, this.transformPagePoint));
        const S = Tf(this.lastMoveEventInfo, this.history)
          , E = this.startEvent !== null
          , A = V3(S.offset, {
            x: 0,
            y: 0
          }) >= this.distanceThreshold;
        if (!E && !A)
          return;
        const { point: C } = S
          , { timestamp: O } = re;
        this.history.push({
          ...C,
          timestamp: O
        });
        const { onStart: V, onMove: j } = this.handlers;
        E || (V && V(this.lastMoveEvent, S),
          this.startEvent = this.lastMoveEvent),
          j && j(this.lastMoveEvent, S)
      }
      ,
      this.handlePointerMove = (S, E) => {
        this.lastMoveEvent = S,
          this.lastRawMoveEventInfo = E,
          this.lastMoveEventInfo = Ho(E, this.transformPagePoint),
          Vt.update(this.updatePoint, !0)
      }
      ,
      this.handlePointerUp = (S, E) => {
        this.end();
        const { onEnd: A, onSessionEnd: C, resumeAnimation: O } = this.handlers;
        if ((this.dragSnapToOrigin || !this.startEvent) && O && O(),
          !(this.lastMoveEvent && this.lastMoveEventInfo))
          return;
        const V = Tf(S.type === "pointercancel" ? this.lastMoveEventInfo : Ho(E, this.transformPagePoint), this.history);
        this.startEvent && A && A(S, V),
          C && C(S, V)
      }
      ,
      !Wd(i))
      return;
    this.dragSnapToOrigin = c,
      this.handlers = a,
      this.transformPagePoint = r,
      this.distanceThreshold = d,
      this.contextWindow = l || window;
    const p = yr(i)
      , m = Ho(p, this.transformPagePoint)
      , { point: y } = m
      , { timestamp: v } = re;
    this.history = [{
      ...y,
      timestamp: v
    }];
    const { onSessionStart: b } = a;
    b && b(i, Tf(m, this.history)),
      this.removeListeners = hr(nr(this.contextWindow, "pointermove", this.handlePointerMove), nr(this.contextWindow, "pointerup", this.handlePointerUp), nr(this.contextWindow, "pointercancel", this.handlePointerUp)),
      h && this.startScrollTracking(h)
  }
  startScrollTracking(i) {
    let a = i.parentElement;
    for (; a;) {
      const r = getComputedStyle(a);
      (e0.has(r.overflowX) || e0.has(r.overflowY)) && this.scrollPositions.set(a, {
        x: a.scrollLeft,
        y: a.scrollTop
      }),
        a = a.parentElement
    }
    this.scrollPositions.set(window, {
      x: window.scrollX,
      y: window.scrollY
    }),
      window.addEventListener("scroll", this.onElementScroll, {
        capture: !0
      }),
      window.addEventListener("scroll", this.onWindowScroll),
      this.removeScrollListeners = () => {
        window.removeEventListener("scroll", this.onElementScroll, {
          capture: !0
        }),
          window.removeEventListener("scroll", this.onWindowScroll)
      }
  }
  handleScroll(i) {
    const a = this.scrollPositions.get(i);
    if (!a)
      return;
    const r = i === window
      , l = r ? {
        x: window.scrollX,
        y: window.scrollY
      } : {
        x: i.scrollLeft,
        y: i.scrollTop
      }
      , c = {
        x: l.x - a.x,
        y: l.y - a.y
      };
    c.x === 0 && c.y === 0 || (r ? this.lastMoveEventInfo && (this.lastMoveEventInfo.point.x += c.x,
      this.lastMoveEventInfo.point.y += c.y) : this.history.length > 0 && (this.history[0].x -= c.x,
        this.history[0].y -= c.y),
      this.scrollPositions.set(i, l),
      Vt.update(this.updatePoint, !0))
  }
  updateHandlers(i) {
    this.handlers = i
  }
  end() {
    this.removeListeners && this.removeListeners(),
      this.removeScrollListeners && this.removeScrollListeners(),
      this.scrollPositions.clear(),
      xi(this.updatePoint)
  }
}
function Ho(e, i) {
  return i ? {
    point: i(e.point)
  } : e
}
function n0(e, i) {
  return {
    x: e.x - i.x,
    y: e.y - i.y
  }
}
function Tf({ point: e }, i) {
  return {
    point: e,
    delta: n0(e, GS(i)),
    offset: n0(e, z3(i)),
    velocity: L3(i, .1)
  }
}
function z3(e) {
  return e[0]
}
function GS(e) {
  return e[e.length - 1]
}
function L3(e, i) {
  if (e.length < 2)
    return {
      x: 0,
      y: 0
    };
  let a = e.length - 1
    , r = null;
  const l = GS(e);
  for (; a >= 0 && (r = e[a],
    !(l.timestamp - r.timestamp > je(i)));)
    a--;
  if (!r)
    return {
      x: 0,
      y: 0
    };
  r === e[0] && e.length > 2 && l.timestamp - r.timestamp > je(i) * 2 && (r = e[1]);
  const c = Ge(l.timestamp - r.timestamp);
  if (c === 0)
    return {
      x: 0,
      y: 0
    };
  const d = {
    x: (l.x - r.x) / c,
    y: (l.y - r.y) / c
  };
  return d.x === 1 / 0 && (d.x = 0),
    d.y === 1 / 0 && (d.y = 0),
    d
}
function P3(e, { min: i, max: a }, r) {
  return i !== void 0 && e < i ? e = r ? Lt(i, e, r.min) : Math.max(e, i) : a !== void 0 && e > a && (e = r ? Lt(a, e, r.max) : Math.min(e, a)),
    e
}
function i0(e, i, a) {
  return {
    min: i !== void 0 ? e.min + i : void 0,
    max: a !== void 0 ? e.max + a - (e.max - e.min) : void 0
  }
}
function U3(e, { top: i, left: a, bottom: r, right: l }) {
  return {
    x: i0(e.x, a, l),
    y: i0(e.y, i, r)
  }
}
function s0(e, i) {
  let a = i.min - e.min
    , r = i.max - e.max;
  return i.max - i.min < e.max - e.min && ([a, r] = [r, a]),
  {
    min: a,
    max: r
  }
}
function B3(e, i) {
  return {
    x: s0(e.x, i.x),
    y: s0(e.y, i.y)
  }
}
function k3(e, i) {
  let a = .5;
  const r = me(e)
    , l = me(i);
  return l > r ? a = rr(i.min, i.max - r, e.min) : r > l && (a = rr(e.min, e.max - l, i.min)),
    yn(0, 1, a)
}
function H3(e, i) {
  const a = {};
  return i.min !== void 0 && (a.min = i.min - e.min),
    i.max !== void 0 && (a.max = i.max - e.min),
    a
}
const ld = .35;
function F3(e = ld) {
  return e === !1 ? e = 0 : e === !0 && (e = ld),
  {
    x: a0(e, "left", "right"),
    y: a0(e, "top", "bottom")
  }
}
function a0(e, i, a) {
  return {
    min: r0(e, i),
    max: r0(e, a)
  }
}
function r0(e, i) {
  return typeof e == "number" ? e : e[i] || 0
}
const q3 = new WeakMap;
class G3 {
  constructor(i) {
    this.openDragLock = null,
      this.isDragging = !1,
      this.currentDirection = null,
      this.originPoint = {
        x: 0,
        y: 0
      },
      this.constraints = !1,
      this.hasMutatedConstraints = !1,
      this.elastic = $t(),
      this.latestPointerEvent = null,
      this.latestPanInfo = null,
      this.visualElement = i
  }
  start(i, { snapToCursor: a = !1, distanceThreshold: r } = {}) {
    const { presenceContext: l } = this.visualElement;
    if (l && l.isPresent === !1)
      return;
    const c = v => {
      a && this.snapToCursor(yr(v).point),
        this.stopAnimation()
    }
      , d = (v, b) => {
        const { drag: S, dragPropagation: E, onDragStart: A } = this.getProps();
        if (S && !E && (this.openDragLock && this.openDragLock(),
          this.openDragLock = g2(S),
          !this.openDragLock))
          return;
        this.latestPointerEvent = v,
          this.latestPanInfo = b,
          this.isDragging = !0,
          this.currentDirection = null,
          this.resolveConstraints(),
          this.visualElement.projection && (this.visualElement.projection.isAnimationBlocked = !0,
            this.visualElement.projection.target = void 0),
          fn(O => {
            let V = this.getAxisMotionValue(O).get() || 0;
            if (pn.test(V)) {
              const { projection: j } = this.visualElement;
              if (j && j.layout) {
                const L = j.layout.layoutBox[O];
                L && (V = me(L) * (parseFloat(V) / 100))
              }
            }
            this.originPoint[O] = V
          }
          ),
          A && Vt.update(() => A(v, b), !1, !0),
          If(this.visualElement, "transform");
        const { animationState: C } = this.visualElement;
        C && C.setActive("whileDrag", !0)
      }
      , h = (v, b) => {
        this.latestPointerEvent = v,
          this.latestPanInfo = b;
        const { dragPropagation: S, dragDirectionLock: E, onDirectionLock: A, onDrag: C } = this.getProps();
        if (!S && !this.openDragLock)
          return;
        const { offset: O } = b;
        if (E && this.currentDirection === null) {
          this.currentDirection = X3(O),
            this.currentDirection !== null && A && A(this.currentDirection);
          return
        }
        this.updateAxis("x", b.point, O),
          this.updateAxis("y", b.point, O),
          this.visualElement.render(),
          C && Vt.update(() => C(v, b), !1, !0)
      }
      , p = (v, b) => {
        this.latestPointerEvent = v,
          this.latestPanInfo = b,
          this.stop(v, b),
          this.latestPointerEvent = null,
          this.latestPanInfo = null
      }
      , m = () => {
        const { dragSnapToOrigin: v } = this.getProps();
        (v || this.constraints) && this.startAnimation({
          x: 0,
          y: 0
        })
      }
      , { dragSnapToOrigin: y } = this.getProps();
    this.panSession = new qS(i, {
      onSessionStart: c,
      onStart: d,
      onMove: h,
      onSessionEnd: p,
      resumeAnimation: m
    }, {
      transformPagePoint: this.visualElement.getTransformPagePoint(),
      dragSnapToOrigin: y,
      distanceThreshold: r,
      contextWindow: FS(this.visualElement),
      element: this.visualElement.current
    })
  }
  stop(i, a) {
    const r = i || this.latestPointerEvent
      , l = a || this.latestPanInfo
      , c = this.isDragging;
    if (this.cancel(),
      !c || !l || !r)
      return;
    const { velocity: d } = l;
    this.startAnimation(d);
    const { onDragEnd: h } = this.getProps();
    h && Vt.postRender(() => h(r, l))
  }
  cancel() {
    this.isDragging = !1;
    const { projection: i, animationState: a } = this.visualElement;
    i && (i.isAnimationBlocked = !1),
      this.endPanSession();
    const { dragPropagation: r } = this.getProps();
    !r && this.openDragLock && (this.openDragLock(),
      this.openDragLock = null),
      a && a.setActive("whileDrag", !1)
  }
  endPanSession() {
    this.panSession && this.panSession.end(),
      this.panSession = void 0
  }
  updateAxis(i, a, r) {
    const { drag: l } = this.getProps();
    if (!r || !Fo(i, l, this.currentDirection))
      return;
    const c = this.getAxisMotionValue(i);
    let d = this.originPoint[i] + r[i];
    this.constraints && this.constraints[i] && (d = P3(d, this.constraints[i], this.elastic[i])),
      c.set(d)
  }
  resolveConstraints() {
    const { dragConstraints: i, dragElastic: a } = this.getProps()
      , r = this.visualElement.projection && !this.visualElement.projection.layout ? this.visualElement.projection.measure(!1) : this.visualElement.projection?.layout
      , l = this.constraints;
    i && Ps(i) ? this.constraints || (this.constraints = this.resolveRefConstraints()) : i && r ? this.constraints = U3(r.layoutBox, i) : this.constraints = !1,
      this.elastic = F3(a),
      l !== this.constraints && !Ps(i) && r && this.constraints && !this.hasMutatedConstraints && fn(c => {
        this.constraints !== !1 && this.getAxisMotionValue(c) && (this.constraints[c] = H3(r.layoutBox[c], this.constraints[c]))
      }
      )
  }
  resolveRefConstraints() {
    const { dragConstraints: i, onMeasureDragConstraints: a } = this.getProps();
    if (!i || !Ps(i))
      return !1;
    const r = i.current
      , { projection: l } = this.visualElement;
    if (!l || !l.layout)
      return !1;
    const c = X2(r, l.root, this.visualElement.getTransformPagePoint());
    let d = B3(l.layout.layoutBox, c);
    if (a) {
      const h = a(q2(d));
      this.hasMutatedConstraints = !!h,
        h && (d = fS(h))
    }
    return d
  }
  startAnimation(i) {
    const { drag: a, dragMomentum: r, dragElastic: l, dragTransition: c, dragSnapToOrigin: d, onDragTransitionEnd: h } = this.getProps()
      , p = this.constraints || {}
      , m = fn(y => {
        if (!Fo(y, a, this.currentDirection))
          return;
        let v = p && p[y] || {};
        (d === !0 || d === y) && (v = {
          min: 0,
          max: 0
        });
        const b = l ? 200 : 1e6
          , S = l ? 40 : 1e7
          , E = {
            type: "inertia",
            velocity: r ? i[y] : 0,
            bounceStiffness: b,
            bounceDamping: S,
            timeConstant: 750,
            restDelta: 1,
            restSpeed: 10,
            ...c,
            ...v
          };
        return this.startAxisValueAnimation(y, E)
      }
      );
    return Promise.all(m).then(h)
  }
  startAxisValueAnimation(i, a) {
    const r = this.getAxisMotionValue(i);
    return If(this.visualElement, i),
      r.start(Yd(i, r, 0, a, this.visualElement, !1))
  }
  stopAnimation() {
    fn(i => this.getAxisMotionValue(i).stop())
  }
  getAxisMotionValue(i) {
    const a = `_drag${i.toUpperCase()}`
      , r = this.visualElement.getProps()
      , l = r[a];
    return l || this.visualElement.getValue(i, (r.initial ? r.initial[i] : void 0) || 0)
  }
  snapToCursor(i) {
    fn(a => {
      const { drag: r } = this.getProps();
      if (!Fo(a, r, this.currentDirection))
        return;
      const { projection: l } = this.visualElement
        , c = this.getAxisMotionValue(a);
      if (l && l.layout) {
        const { min: d, max: h } = l.layout.layoutBox[a]
          , p = c.get() || 0;
        c.set(i[a] - Lt(d, h, .5) + p)
      }
    }
    )
  }
  scalePositionWithinConstraints() {
    if (!this.visualElement.current)
      return;
    const { drag: i, dragConstraints: a } = this.getProps()
      , { projection: r } = this.visualElement;
    if (!Ps(a) || !r || !this.constraints)
      return;
    this.stopAnimation();
    const l = {
      x: 0,
      y: 0
    };
    fn(d => {
      const h = this.getAxisMotionValue(d);
      if (h && this.constraints !== !1) {
        const p = h.get();
        l[d] = k3({
          min: p,
          max: p
        }, this.constraints[d])
      }
    }
    );
    const { transformTemplate: c } = this.visualElement.getProps();
    this.visualElement.current.style.transform = c ? c({}, "") : "none",
      r.root && r.root.updateScroll(),
      r.updateLayout(),
      this.constraints = !1,
      this.resolveConstraints(),
      fn(d => {
        if (!Fo(d, i, null))
          return;
        const h = this.getAxisMotionValue(d)
          , { min: p, max: m } = this.constraints[d];
        h.set(Lt(p, m, l[d]))
      }
      ),
      this.visualElement.render()
  }
  addListeners() {
    if (!this.visualElement.current)
      return;
    q3.set(this.visualElement, this);
    const i = this.visualElement.current
      , a = nr(i, "pointerdown", m => {
        const { drag: y, dragListener: v = !0 } = this.getProps()
          , b = m.target
          , S = b !== i && w2(b);
        y && v && !S && this.start(m)
      }
      );
    let r;
    const l = () => {
      const { dragConstraints: m } = this.getProps();
      Ps(m) && m.current && (this.constraints = this.resolveRefConstraints(),
        r || (r = Y3(i, m.current, () => this.scalePositionWithinConstraints())))
    }
      , { projection: c } = this.visualElement
      , d = c.addEventListener("measure", l);
    c && !c.layout && (c.root && c.root.updateScroll(),
      c.updateLayout()),
      Vt.read(l);
    const h = ur(window, "resize", () => this.scalePositionWithinConstraints())
      , p = c.addEventListener("didUpdate", (({ delta: m, hasLayoutChanged: y }) => {
        this.isDragging && y && (fn(v => {
          const b = this.getAxisMotionValue(v);
          b && (this.originPoint[v] += m[v].translate,
            b.set(b.get() + m[v].translate))
        }
        ),
          this.visualElement.render())
      }
      ));
    return () => {
      h(),
        a(),
        d(),
        p && p(),
        r && r()
    }
  }
  getProps() {
    const i = this.visualElement.getProps()
      , { drag: a = !1, dragDirectionLock: r = !1, dragPropagation: l = !1, dragConstraints: c = !1, dragElastic: d = ld, dragMomentum: h = !0 } = i;
    return {
      ...i,
      drag: a,
      dragDirectionLock: r,
      dragPropagation: l,
      dragConstraints: c,
      dragElastic: d,
      dragMomentum: h
    }
  }
}
function o0(e) {
  let i = !0;
  return () => {
    if (i) {
      i = !1;
      return
    }
    e()
  }
}
function Y3(e, i, a) {
  const r = mv(e, o0(a))
    , l = mv(i, o0(a));
  return () => {
    r(),
      l()
  }
}
function Fo(e, i, a) {
  return (i === !0 || i === e) && (a === null || a === e)
}
function X3(e, i = 10) {
  let a = null;
  return Math.abs(e.y) > i ? a = "y" : Math.abs(e.x) > i && (a = "x"),
    a
}
class K3 extends Ti {
  constructor(i) {
    super(i),
      this.removeGroupControls = Ye,
      this.removeListeners = Ye,
      this.controls = new G3(i)
  }
  mount() {
    const { dragControls: i } = this.node.getProps();
    i && (this.removeGroupControls = i.subscribe(this.controls)),
      this.removeListeners = this.controls.addListeners() || Ye
  }
  update() {
    const { dragControls: i } = this.node.getProps()
      , { dragControls: a } = this.node.prevProps || {};
    i !== a && (this.removeGroupControls(),
      i && (this.removeGroupControls = i.subscribe(this.controls)))
  }
  unmount() {
    this.removeGroupControls(),
      this.removeListeners(),
      this.controls.isDragging || this.controls.endPanSession()
  }
}
const wf = e => (i, a) => {
  e && Vt.update(() => e(i, a), !1, !0)
}
  ;
class Q3 extends Ti {
  constructor() {
    super(...arguments),
      this.removePointerDownListener = Ye
  }
  onPointerDown(i) {
    this.session = new qS(i, this.createPanHandlers(), {
      transformPagePoint: this.node.getTransformPagePoint(),
      contextWindow: FS(this.node)
    })
  }
  createPanHandlers() {
    const { onPanSessionStart: i, onPanStart: a, onPan: r, onPanEnd: l } = this.node.getProps();
    return {
      onSessionStart: wf(i),
      onStart: wf(a),
      onMove: wf(r),
      onEnd: (c, d) => {
        delete this.session,
          l && Vt.postRender(() => l(c, d))
      }
    }
  }
  mount() {
    this.removePointerDownListener = nr(this.node.current, "pointerdown", i => this.onPointerDown(i))
  }
  update() {
    this.session && this.session.updateHandlers(this.createPanHandlers())
  }
  unmount() {
    this.removePointerDownListener(),
      this.session && this.session.end()
  }
}
let Ef = !1;
class Z3 extends w.Component {
  componentDidMount() {
    const { visualElement: i, layoutGroup: a, switchLayoutGroup: r, layoutId: l } = this.props
      , { projection: c } = i;
    c && (a.group && a.group.add(c),
      r && r.register && l && r.register(c),
      Ef && c.root.didUpdate(),
      c.addEventListener("animationComplete", () => {
        this.safeToRemove()
      }
      ),
      c.setOptions({
        ...c.options,
        layoutDependency: this.props.layoutDependency,
        onExitComplete: () => this.safeToRemove()
      })),
      tl.hasEverUpdated = !0
  }
  getSnapshotBeforeUpdate(i) {
    const { layoutDependency: a, visualElement: r, drag: l, isPresent: c } = this.props
      , { projection: d } = r;
    return d && (d.isPresent = c,
      i.layoutDependency !== a && d.setOptions({
        ...d.options,
        layoutDependency: a
      }),
      Ef = !0,
      l || i.layoutDependency !== a || a === void 0 || i.isPresent !== c ? d.willUpdate() : this.safeToRemove(),
      i.isPresent !== c && (c ? d.promote() : d.relegate() || Vt.postRender(() => {
        const h = d.getStack();
        (!h || !h.members.length) && this.safeToRemove()
      }
      ))),
      null
  }
  componentDidUpdate() {
    const { visualElement: i, layoutAnchor: a } = this.props
      , { projection: r } = i;
    r && (r.options.layoutAnchor = a,
      r.root.didUpdate(),
      Zd.postRender(() => {
        !r.currentAnimation && r.isLead() && this.safeToRemove()
      }
      ))
  }
  componentWillUnmount() {
    const { visualElement: i, layoutGroup: a, switchLayoutGroup: r } = this.props
      , { projection: l } = i;
    Ef = !0,
      l && (l.scheduleCheckAfterUnmount(),
        a && a.group && a.group.remove(l),
        r && r.deregister && r.deregister(l))
  }
  safeToRemove() {
    const { safeToRemove: i } = this.props;
    i && i()
  }
  render() {
    return null
  }
}
function YS(e) {
  const [i, a] = _S()
    , r = w.useContext(Nd);
  return M.jsx(Z3, {
    ...e,
    layoutGroup: r,
    switchLayoutGroup: w.useContext(kS),
    isPresent: i,
    safeToRemove: a
  })
}
const W3 = {
  pan: {
    Feature: Q3
  },
  drag: {
    Feature: K3,
    ProjectionNode: jS,
    MeasureLayout: YS
  }
};
function l0(e, i, a) {
  const { props: r } = e;
  e.animationState && r.whileHover && e.animationState.setActive("whileHover", a === "Start");
  const l = "onHover" + a
    , c = r[l];
  c && Vt.postRender(() => c(i, yr(i)))
}
class $3 extends Ti {
  mount() {
    const { current: i } = this.node;
    i && (this.unmount = b2(i, (a, r) => (l0(this.node, r, "Start"),
      l => l0(this.node, l, "End"))))
  }
  unmount() { }
}
class J3 extends Ti {
  constructor() {
    super(...arguments),
      this.isActive = !1
  }
  onFocus() {
    let i = !1;
    try {
      i = this.node.current.matches(":focus-visible")
    } catch {
      i = !0
    }
    !i || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !0),
      this.isActive = !0)
  }
  onBlur() {
    !this.isActive || !this.node.animationState || (this.node.animationState.setActive("whileFocus", !1),
      this.isActive = !1)
  }
  mount() {
    this.unmount = hr(ur(this.node.current, "focus", () => this.onFocus()), ur(this.node.current, "blur", () => this.onBlur()))
  }
  unmount() { }
}
function u0(e, i, a) {
  const { props: r } = e;
  if (e.current instanceof HTMLButtonElement && e.current.disabled)
    return;
  e.animationState && r.whileTap && e.animationState.setActive("whileTap", a === "Start");
  const l = "onTap" + (a === "End" ? "" : a)
    , c = r[l];
  c && Vt.postRender(() => c(i, yr(i)))
}
class I3 extends Ti {
  mount() {
    const { current: i } = this.node;
    if (!i)
      return;
    const { globalTapTarget: a, propagate: r } = this.node.props;
    this.unmount = A2(i, (l, c) => (u0(this.node, c, "Start"),
      (d, { success: h }) => u0(this.node, d, h ? "End" : "Cancel")), {
      useGlobalTarget: a,
      stopPropagation: r?.tap === !1
    })
  }
  unmount() { }
}
const ud = new WeakMap
  , Af = new WeakMap
  , tN = e => {
    const i = ud.get(e.target);
    i && i(e)
  }
  , eN = e => {
    e.forEach(tN)
  }
  ;
function nN({ root: e, ...i }) {
  const a = e || document;
  Af.has(a) || Af.set(a, {});
  const r = Af.get(a)
    , l = JSON.stringify(i);
  return r[l] || (r[l] = new IntersectionObserver(eN, {
    root: e,
    ...i
  })),
    r[l]
}
function iN(e, i, a) {
  const r = nN(i);
  return ud.set(e, a),
    r.observe(e),
    () => {
      ud.delete(e),
        r.unobserve(e)
    }
}
const sN = {
  some: 0,
  all: 1
};
class aN extends Ti {
  constructor() {
    super(...arguments),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
  startObserver() {
    this.stopObserver?.();
    const { viewport: i = {} } = this.node.getProps()
      , { root: a, margin: r, amount: l = "some", once: c } = i
      , d = {
        root: a ? a.current : void 0,
        rootMargin: r,
        threshold: typeof l == "number" ? l : sN[l]
      }
      , h = p => {
        const { isIntersecting: m } = p;
        if (this.isInView === m || (this.isInView = m,
          c && !m && this.hasEnteredView))
          return;
        m && (this.hasEnteredView = !0),
          this.node.animationState && this.node.animationState.setActive("whileInView", m);
        const { onViewportEnter: y, onViewportLeave: v } = this.node.getProps()
          , b = m ? y : v;
        b && b(p)
      }
      ;
    this.stopObserver = iN(this.node.current, d, h)
  }
  mount() {
    this.startObserver()
  }
  update() {
    if (typeof IntersectionObserver > "u")
      return;
    const { props: i, prevProps: a } = this.node;
    ["amount", "margin", "root"].some(rN(i, a)) && this.startObserver()
  }
  unmount() {
    this.stopObserver?.(),
      this.hasEnteredView = !1,
      this.isInView = !1
  }
}
function rN({ viewport: e = {} }, { viewport: i = {} } = {}) {
  return a => e[a] !== i[a]
}
const oN = {
  inView: {
    Feature: aN
  },
  tap: {
    Feature: I3
  },
  focus: {
    Feature: J3
  },
  hover: {
    Feature: $3
  }
}
  , lN = {
    layout: {
      ProjectionNode: jS,
      MeasureLayout: YS
    }
  }
  , uN = {
    ...j3,
    ...oN,
    ...W3,
    ...lN
  }
  , Vn = R3(uN, M3);
function c0(e) {
  const i = Ol(() => Wi(e))
    , { isStatic: a } = w.useContext(zl);
  if (a) {
    const [, r] = w.useState(e);
    w.useEffect(() => i.on("change", r), [])
  }
  return i
}
function XS({ primaryColor: e, secondaryColor: i, pattern: a, number: r, mini: l = !1 }) {
  const c = `j-${e.replace("#", "")}-${i.replace("#", "")}-${a}-${l ? "m" : "f"}`
    , d = `pat-${c}`
    , h = `clip-${c}`
    , p = l ? 10 : 18
    , m = `
    M 38,10
    C 55,4 80,1 92,7
    L 97,0 L 103,0
    L 108,7
    C 120,1 145,4 162,10
    L 196,30
    L 168,43
    L 164,40
    L 164,97
    L 36,97
    L 36,40
    L 32,43
    L 4,30
    Z
  `;
  return M.jsxs("svg", {
    viewBox: "0 0 200 100",
    xmlns: "http://www.w3.org/2000/svg",
    width: "100%",
    height: "100%",
    children: [M.jsxs("defs", {
      children: [a === "v-stripes" && M.jsxs("pattern", {
        id: d,
        patternUnits: "userSpaceOnUse",
        width: p * 2,
        height: "100",
        children: [M.jsx("rect", {
          x: "0",
          y: "0",
          width: p,
          height: "100",
          fill: e
        }), M.jsx("rect", {
          x: p,
          y: "0",
          width: p,
          height: "100",
          fill: i
        })]
      }), a === "h-stripes" && M.jsxs("pattern", {
        id: d,
        patternUnits: "userSpaceOnUse",
        width: "200",
        height: p * 2,
        children: [M.jsx("rect", {
          x: "0",
          y: "0",
          width: "200",
          height: p,
          fill: e
        }), M.jsx("rect", {
          x: "0",
          y: p,
          width: "200",
          height: p,
          fill: i
        })]
      }), M.jsx("clipPath", {
        id: h,
        children: M.jsx("path", {
          d: m
        })
      })]
    }), (a === "v-stripes" || a === "h-stripes") && M.jsx("rect", {
      x: "0",
      y: "0",
      width: "200",
      height: "100",
      fill: `url(#${d})`,
      clipPath: `url(#${h})`
    }), a === "solid" && M.jsx("path", {
      d: m,
      fill: e
    }), a === "chest-stripe" && M.jsxs(M.Fragment, {
      children: [M.jsx("path", {
        d: m,
        fill: e
      }), M.jsx("rect", {
        x: "36",
        y: "46",
        width: "128",
        height: "18",
        fill: i,
        clipPath: `url(#${h})`
      })]
    }), a === "sleeve-stripe" && M.jsxs(M.Fragment, {
      children: [M.jsx("path", {
        d: m,
        fill: e
      }), M.jsx("path", {
        d: "M 38,10 L 4,30 L 32,43 L 36,40 Z",
        fill: i,
        opacity: "0.92"
      }), M.jsx("path", {
        d: "M 162,10 L 196,30 L 168,43 L 164,40 Z",
        fill: i,
        opacity: "0.92"
      }), M.jsx("line", {
        x1: "38",
        y1: "10",
        x2: "36",
        y2: "40",
        stroke: i,
        strokeWidth: "2.5",
        opacity: "0.6"
      }), M.jsx("line", {
        x1: "162",
        y1: "10",
        x2: "164",
        y2: "40",
        stroke: i,
        strokeWidth: "2.5",
        opacity: "0.6"
      })]
    }), a === "center-stripe" && M.jsxs(M.Fragment, {
      children: [M.jsx("path", {
        d: m,
        fill: e
      }), M.jsx("rect", {
        x: "88",
        y: "0",
        width: "24",
        height: "100",
        fill: i,
        clipPath: `url(#${h})`
      }), M.jsx("rect", {
        x: "88",
        y: "0",
        width: "2.5",
        height: "100",
        fill: "rgba(255,255,255,0.55)",
        clipPath: `url(#${h})`
      }), M.jsx("rect", {
        x: "109.5",
        y: "0",
        width: "2.5",
        height: "100",
        fill: "rgba(255,255,255,0.55)",
        clipPath: `url(#${h})`
      })]
    }), M.jsx("path", {
      d: m,
      fill: "none",
      stroke: "rgba(0,0,0,0.20)",
      strokeWidth: l ? 1.5 : 2,
      strokeLinejoin: "round"
    }), M.jsx("line", {
      x1: "38",
      y1: "10",
      x2: "36",
      y2: "40",
      stroke: "rgba(0,0,0,0.10)",
      strokeWidth: "1.5"
    }), M.jsx("line", {
      x1: "162",
      y1: "10",
      x2: "164",
      y2: "40",
      stroke: "rgba(0,0,0,0.10)",
      strokeWidth: "1.5"
    }), M.jsx("path", {
      d: "M 92,7 Q 100,20 108,7",
      fill: "none",
      stroke: "rgba(0,0,0,0.28)",
      strokeWidth: "2.5",
      strokeLinecap: "round"
    }), M.jsx("path", {
      d: "M 94,8 Q 100,18 106,8",
      fill: i,
      stroke: "none",
      opacity: "0.55"
    }), r !== void 0 && !l && M.jsx("text", {
      x: "100",
      y: "78",
      textAnchor: "middle",
      fontSize: "30",
      fontWeight: "900",
      fontFamily: "Nunito, sans-serif",
      fill: i,
      stroke: e,
      strokeWidth: "4",
      paintOrder: "stroke",
      opacity: "0.95",
      children: r
    })]
  })
}
const cN = "/avatar2-nobg.png";
function fN({ club: e, customSettings: i, jerseyOffset: a, onJerseyOffsetChange: r }) {
  const l = e?.id === "custom"
    , c = l && i ? i.primaryColor : e?.primaryColor ?? "#93C5FD"
    , d = l && i ? i.secondaryColor : e?.secondaryColor ?? "#FFFFFF"
    , h = l && i ? i.pattern : e?.pattern ?? "h-stripes"
    , p = l && i ? i.number : void 0
    , m = !e
    , y = c0(a?.x ?? 0)
    , v = c0(a?.y ?? 0)
    , b = w.useRef(!1);
  return w.useEffect(() => {
    b.current || (y.set(a?.x ?? 0),
      v.set(a?.y ?? 0))
  }
    , [a?.x, a?.y, y, v]),
    M.jsxs("div", {
      "data-testid": "avatar-character",
      style: {
        position: "relative",
        width: 300,
        height: 400,
        maxWidth: "100%"
      },
      children: [M.jsx("img", {
        src: cN,
        alt: "Avatar",
        draggable: !1,
        style: {
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "50% 50%",
          display: "block",
          userSelect: "none",
          pointerEvents: "none"
        }
      }), M.jsx(pl, {
        mode: "wait",
        children: !m && M.jsx(Vn.div, {
          "data-testid": "active-jersey",
          initial: {
            opacity: 0,
            scale: .78
          },
          animate: {
            opacity: 1,
            scale: 1
          },
          exit: {
            opacity: 0,
            scale: .78
          },
          transition: {
            type: "spring",
            stiffness: 500,
            damping: 24
          },
          drag: !0,
          dragMomentum: !1,
          dragElastic: 0,
          style: {
            position: "absolute",
            top: "38%",
            left: "10%",
            width: "80%",
            aspectRatio: "200 / 100",
            cursor: "grab",
            filter: "drop-shadow(0 3px 10px rgba(0,0,0,0.32))",
            x: y,
            y: v,
            zIndex: 10,
            touchAction: "none"
          },
          onDragStart: () => {
            b.current = !0
          }
          ,
          onDragEnd: () => {
            b.current = !1,
              r({
                x: y.get(),
                y: v.get()
              })
          }
          ,
          whileDrag: {
            cursor: "grabbing",
            scale: 1.04
          },
          children: M.jsx(XS, {
            primaryColor: c,
            secondaryColor: d,
            pattern: h,
            number: p
          })
        }, `jersey-${e?.id ?? "custom"}`)
      }), M.jsx(pl, {
        children: !m && M.jsx(Vn.div, {
          initial: {
            opacity: 0,
            y: 4
          },
          animate: {
            opacity: 1,
            y: 0
          },
          exit: {
            opacity: 0
          },
          transition: {
            delay: .6,
            duration: .3
          },
          style: {
            position: "absolute",
            bottom: 6,
            left: "50%",
            transform: "translateX(-50%)",
            pointerEvents: "none",
            zIndex: 20
          },
          children: M.jsx("span", {
            style: {
              background: "rgba(0,0,0,0.55)",
              color: "white",
              fontSize: 10,
              fontWeight: 700,
              padding: "3px 10px",
              borderRadius: 20,
              fontFamily: "Nunito, sans-serif",
              whiteSpace: "nowrap"
            },
            children: "גרור את החולצה ↕"
          })
        }, "drag-hint")
      })]
    })
}
function f0({ club: e, isSelected: i, onClick: a }) {
  return e.id === "custom" ? M.jsxs(Vn.button, {
    "data-testid": `jersey-card-${e.id}`,
    onClick: a,
    whileHover: {
      scale: 1.08
    },
    whileTap: {
      scale: .94
    },
    className: `relative flex flex-col items-center gap-1 p-2 rounded-2xl cursor-pointer border-2 transition-all duration-200 focus:outline-none ${i ? "border-purple-500 bg-purple-50 shadow-lg shadow-purple-200" : "border-transparent bg-white hover:border-purple-300 hover:bg-purple-50/50 shadow-sm"}`,
    style: {
      width: 80,
      minHeight: 72
    },
    children: [M.jsx("div", {
      className: "w-16 h-8 rounded-xl bg-gradient-to-br from-violet-400 via-fuchsia-500 to-pink-500 flex items-center justify-center shadow-inner text-xl",
      children: "🎨"
    }), M.jsx("span", {
      className: "text-[10px] font-bold text-center text-purple-700 leading-tight",
      children: e.name
    })]
  }) : M.jsxs(Vn.button, {
    "data-testid": `jersey-card-${e.id}`,
    onClick: a,
    whileHover: {
      scale: 1.08
    },
    whileTap: {
      scale: .94
    },
    className: "relative flex flex-col items-center gap-1.5 p-2 rounded-2xl cursor-pointer border-2 transition-all duration-200 focus:outline-none",
    style: {
      width: 80,
      minHeight: 72,
      borderColor: i ? e.primaryColor : "transparent",
      backgroundColor: i ? `${e.primaryColor}18` : "white",
      boxShadow: i ? `0 4px 16px ${e.primaryColor}44` : "0 1px 4px rgba(0,0,0,0.08)"
    },
    children: [M.jsx("div", {
      style: {
        width: 64,
        height: 32
      },
      children: M.jsx(XS, {
        primaryColor: e.primaryColor,
        secondaryColor: e.secondaryColor,
        pattern: e.pattern,
        mini: !0
      })
    }), M.jsx("span", {
      className: "text-[10px] font-bold text-center leading-tight px-0.5",
      style: {
        color: i ? e.primaryColor : "#374151",
        maxWidth: 74,
        direction: "rtl"
      },
      lang: "he",
      children: e.name
    })]
  })
}
const dN = [{
  value: "solid",
  label: "אחיד",
  icon: "⬛"
}, {
  value: "v-stripes",
  label: "פסים",
  icon: "🟦"
}, {
  value: "h-stripes",
  label: "פסים רוחביים",
  icon: "🔲"
}, {
  value: "chest-stripe",
  label: "פס חזה",
  icon: "➖"
}];
function hN({ settings: e, onChange: i }) {
  return M.jsxs("div", {
    className: "flex flex-col gap-4 p-4 rounded-2xl bg-white/90 border-2 border-purple-200 shadow-md",
    children: [M.jsx("h3", {
      className: "text-base font-black text-purple-700 text-center",
      children: "צור חולצה משלך!"
    }), M.jsxs("div", {
      className: "flex flex-col gap-1.5",
      children: [M.jsx("label", {
        className: "text-xs font-bold text-gray-600",
        children: "צבע ראשי"
      }), M.jsxs("div", {
        className: "flex items-center gap-3",
        children: [M.jsx("input", {
          type: "color",
          value: e.primaryColor,
          onChange: a => i({
            ...e,
            primaryColor: a.target.value
          }),
          className: "w-10 h-10 rounded-xl border-2 border-purple-200 cursor-pointer p-0.5",
          "aria-label": "Primary color picker"
        }), M.jsx("div", {
          className: "flex flex-wrap gap-1.5",
          children: ["#E30613", "#FFD700", "#007A33", "#0033A0", "#FFFFFF", "#000000", "#FF6B35", "#8B5CF6"].map(a => M.jsx("button", {
            onClick: () => i({
              ...e,
              primaryColor: a
            }),
            className: "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
            style: {
              backgroundColor: a,
              borderColor: e.primaryColor === a ? "#7C3AED" : "#D1D5DB",
              transform: e.primaryColor === a ? "scale(1.2)" : void 0
            },
            "aria-label": `Set primary color ${a}`
          }, a))
        })]
      })]
    }), M.jsxs("div", {
      className: "flex flex-col gap-1.5",
      children: [M.jsx("label", {
        className: "text-xs font-bold text-gray-600",
        children: "צבע משני"
      }), M.jsxs("div", {
        className: "flex items-center gap-3",
        children: [M.jsx("input", {
          type: "color",
          value: e.secondaryColor,
          onChange: a => i({
            ...e,
            secondaryColor: a.target.value
          }),
          className: "w-10 h-10 rounded-xl border-2 border-purple-200 cursor-pointer p-0.5",
          "aria-label": "Secondary color picker"
        }), M.jsx("div", {
          className: "flex flex-wrap gap-1.5",
          children: ["#FFFFFF", "#000000", "#FFD700", "#E30613", "#0033A0", "#007A33", "#60A5FA", "#F9A8D4"].map(a => M.jsx("button", {
            onClick: () => i({
              ...e,
              secondaryColor: a
            }),
            className: "w-6 h-6 rounded-full border-2 transition-transform hover:scale-110",
            style: {
              backgroundColor: a,
              borderColor: e.secondaryColor === a ? "#7C3AED" : "#D1D5DB",
              transform: e.secondaryColor === a ? "scale(1.2)" : void 0
            },
            "aria-label": `Set secondary color ${a}`
          }, a))
        })]
      })]
    }), M.jsxs("div", {
      className: "flex flex-col gap-1.5",
      children: [M.jsx("label", {
        className: "text-xs font-bold text-gray-600",
        children: "דוגמה"
      }), M.jsx("div", {
        className: "grid grid-cols-2 gap-1.5",
        children: dN.map(a => M.jsx("button", {
          onClick: () => i({
            ...e,
            pattern: a.value
          }),
          className: `text-xs font-bold py-1.5 px-2 rounded-xl border-2 transition-all ${e.pattern === a.value ? "bg-purple-600 text-white border-purple-700 shadow" : "bg-white text-gray-600 border-purple-200 hover:border-purple-400"}`,
          children: a.label
        }, a.value))
      })]
    }), M.jsxs("div", {
      className: "flex flex-col gap-1.5",
      children: [M.jsx("label", {
        className: "text-xs font-bold text-gray-600",
        children: "מספר (1–99)"
      }), M.jsxs("div", {
        className: "flex items-center gap-3",
        children: [M.jsx("button", {
          onClick: () => i({
            ...e,
            number: Math.max(1, e.number - 1)
          }),
          className: "w-9 h-9 rounded-xl bg-purple-100 text-purple-700 font-black text-lg hover:bg-purple-200 transition-colors flex items-center justify-center",
          "aria-label": "Decrease number",
          children: "−"
        }), M.jsx("span", {
          className: "text-3xl font-black text-purple-700 w-12 text-center tabular-nums",
          children: e.number
        }), M.jsx("button", {
          onClick: () => i({
            ...e,
            number: Math.min(99, e.number + 1)
          }),
          className: "w-9 h-9 rounded-xl bg-purple-100 text-purple-700 font-black text-lg hover:bg-purple-200 transition-colors flex items-center justify-center",
          "aria-label": "Increase number",
          children: "+"
        })]
      })]
    })]
  })
}
const KS = [{
  id: "maccabi-haifa",
  name: "מכבי חיפה",
  category: "israel",
  primaryColor: "#007A33",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "maccabi-tel-aviv",
  name: "מכבי תל אביב",
  category: "israel",
  primaryColor: "#FFD700",
  secondaryColor: "#0033A0",
  pattern: "v-stripes"
}, {
  id: "hapoel-tel-aviv",
  name: "הפועל תל אביב",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "beitar-jerusalem",
  name: 'בית"ר ירושלים',
  category: "israel",
  primaryColor: "#FFD700",
  secondaryColor: "#000000",
  pattern: "v-stripes"
}, {
  id: "hapoel-beer-sheva",
  name: "הפועל באר שבע",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#FFFFFF",
  pattern: "v-stripes"
}, {
  id: "maccabi-netanya",
  name: "מכבי נתניה",
  category: "israel",
  primaryColor: "#FFD700",
  secondaryColor: "#000000",
  pattern: "solid"
}, {
  id: "bnei-sakhnin",
  name: "בני סכנין",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "hapoel-haifa",
  name: "הפועל חיפה",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "ironi-kiryat-shmona",
  name: 'עירוני ק"ש',
  category: "israel",
  primaryColor: "#0033A0",
  secondaryColor: "#FFD700",
  pattern: "solid"
}, {
  id: "hapoel-jerusalem",
  name: "הפועל ירושלים",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#000000",
  pattern: "solid"
}, {
  id: "ashdod-fc",
  name: "מ.ס. אשדוד",
  category: "israel",
  primaryColor: "#E30613",
  secondaryColor: "#FFD700",
  pattern: "chest-stripe"
}, {
  id: "barcelona",
  name: "ברצלונה",
  category: "world",
  primaryColor: "#004D98",
  secondaryColor: "#A50044",
  pattern: "v-stripes"
}, {
  id: "real-madrid",
  name: "ריאל מדריד",
  category: "world",
  primaryColor: "#FFFFFF",
  secondaryColor: "#D4AF37",
  pattern: "solid"
}, {
  id: "man-city",
  name: "מנצ'סטר סיטי",
  category: "world",
  primaryColor: "#6CABDD",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "man-utd",
  name: "מנצ'סטר יונייטד",
  category: "world",
  primaryColor: "#DA291C",
  secondaryColor: "#000000",
  pattern: "solid"
}, {
  id: "liverpool",
  name: "ליברפול",
  category: "world",
  primaryColor: "#C8102E",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "arsenal",
  name: "ארסנל",
  category: "world",
  primaryColor: "#EF0107",
  secondaryColor: "#FFFFFF",
  pattern: "sleeve-stripe"
}, {
  id: "chelsea",
  name: "צ'לסי",
  category: "world",
  primaryColor: "#034694",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "bayern",
  name: "באיירן מינכן",
  category: "world",
  primaryColor: "#DC052D",
  secondaryColor: "#FFFFFF",
  pattern: "solid"
}, {
  id: "psg",
  name: "פריז סן ז'רמן",
  category: "world",
  primaryColor: "#004170",
  secondaryColor: "#DA291C",
  pattern: "center-stripe"
}, {
  id: "juventus",
  name: "יובנטוס",
  category: "world",
  primaryColor: "#FFFFFF",
  secondaryColor: "#000000",
  pattern: "v-stripes"
}, {
  id: "inter-milan",
  name: "אינטר מילאנו",
  category: "world",
  primaryColor: "#00529F",
  secondaryColor: "#000000",
  pattern: "v-stripes"
}, {
  id: "ac-milan",
  name: "מילאן",
  category: "world",
  primaryColor: "#FB090B",
  secondaryColor: "#000000",
  pattern: "v-stripes"
}, {
  id: "dortmund",
  name: "בורוסיה דורטמונד",
  category: "world",
  primaryColor: "#FDE100",
  secondaryColor: "#000000",
  pattern: "sleeve-stripe"
}]
  , d0 = {
    id: "custom",
    name: "צור בעצמך",
    category: "custom",
    primaryColor: "#8B5CF6",
    secondaryColor: "#FFFFFF",
    pattern: "solid"
  }
  , mN = KS.filter(e => e.category === "israel")
  , pN = KS.filter(e => e.category === "world");
function yN() {
  const [e, i] = w.useState("israel")
    , [a, r] = w.useState(null)
    , [l, c] = w.useState({
      primaryColor: "#8B5CF6",
      secondaryColor: "#FFFFFF",
      pattern: "solid",
      number: 10
    })
    , [d, h] = w.useState({
      x: 0,
      y: 0
    })
    , p = a?.id === "custom"
    , m = e === "israel" ? mN : pN;
  function y() {
    r(null),
      h({
        x: 0,
        y: 0
      })
  }
  return M.jsxs("div", {
    className: "min-h-screen w-full flex flex-col overflow-hidden",
    style: {
      background: "linear-gradient(180deg, #87CEEB 0%, #48BB78 55%, #276749 100%)"
    },
    children: [M.jsx("div", {
      className: "fixed bottom-0 left-0 right-0 h-24 pointer-events-none",
      style: {
        background: "repeating-linear-gradient(90deg, #276749 0px, #2F7A52 20px, #276749 40px)",
        opacity: .5
      }
    }), M.jsx("header", {
      className: "relative z-10 flex flex-col items-center pt-5 pb-2 px-4",
      children: M.jsx(Vn.h1, {
        initial: {
          y: -30,
          opacity: 0
        },
        animate: {
          y: 0,
          opacity: 1
        },
        transition: {
          type: "spring",
          stiffness: 300,
          damping: 20
        },
        className: "text-3xl sm:text-4xl font-black text-white drop-shadow-lg",
        style: {
          textShadow: "0 3px 12px rgba(0,0,0,0.35)",
          fontFamily: "Nunito, sans-serif"
        },
        dir: "rtl",
        children: "בחירת החולצה שלך"
      })
    }), M.jsxs("div", {
      className: "relative z-10 flex flex-1 flex-col lg:flex-row items-start justify-center gap-3 px-2 sm:px-4 pb-6 max-w-6xl mx-auto w-full",
      children: [M.jsxs("div", {
        className: "flex flex-col items-center flex-shrink-0",
        children: [M.jsx("div", {
          className: "relative",
          style: {
            filter: `drop-shadow(0 8px 24px ${a ? a.primaryColor + "66" : "#FDE68A66"})`
          },
          children: M.jsx(fN, {
            club: a,
            customSettings: l,
            jerseyOffset: d,
            onJerseyOffsetChange: h
          })
        }), M.jsx(Vn.button, {
          "data-testid": "button-reset",
          onClick: y,
          whileHover: {
            scale: 1.06
          },
          whileTap: {
            scale: .94
          },
          className: "mt-3 px-5 py-2 rounded-full font-black text-sm bg-white/90 text-gray-700 shadow-lg hover:bg-white transition-all border-2 border-white/60",
          style: {
            fontFamily: "Nunito, sans-serif"
          },
          children: "איפוס חולצה"
        })]
      }), M.jsxs("div", {
        className: "flex-1 flex flex-col gap-3 min-w-0 max-w-xl w-full",
        children: [M.jsxs("div", {
          className: "flex gap-2 bg-white/25 backdrop-blur-sm rounded-2xl p-1.5 shadow-inner",
          children: [M.jsx("button", {
            onClick: () => i("israel"),
            className: `flex-1 py-2.5 rounded-xl font-black text-sm transition-all ${e === "israel" ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/20"}`,
            style: {
              fontFamily: "Nunito, sans-serif"
            },
            children: "ישראל 🇮🇱"
          }), M.jsx("button", {
            onClick: () => i("world"),
            className: `flex-1 py-2.5 rounded-xl font-black text-sm transition-all ${e === "world" ? "bg-white text-blue-700 shadow-md" : "text-white hover:bg-white/20"}`,
            style: {
              fontFamily: "Nunito, sans-serif"
            },
            children: "בין לאומי 🌍"
          })]
        }), M.jsx("div", {
          className: "flex justify-center",
          children: M.jsx(f0, {
            club: d0,
            isSelected: a?.id === "custom",
            onClick: () => r(d0)
          })
        }), M.jsx(pl, {
          children: p && M.jsx(Vn.div, {
            initial: {
              opacity: 0,
              height: 0
            },
            animate: {
              opacity: 1,
              height: "auto"
            },
            exit: {
              opacity: 0,
              height: 0
            },
            transition: {
              duration: .3
            },
            className: "overflow-hidden",
            children: M.jsx(hN, {
              settings: l,
              onChange: c
            })
          })
        }), M.jsx(pl, {
          mode: "wait",
          children: M.jsx(Vn.div, {
            initial: {
              opacity: 0,
              x: e === "israel" ? -20 : 20
            },
            animate: {
              opacity: 1,
              x: 0
            },
            exit: {
              opacity: 0,
              x: e === "israel" ? 20 : -20
            },
            transition: {
              duration: .2
            },
            className: "bg-white/30 backdrop-blur-sm rounded-2xl p-3 shadow-inner",
            children: M.jsx("div", {
              className: "grid grid-cols-4 sm:grid-cols-5 gap-2 justify-items-center max-h-72 overflow-y-auto pr-1",
              style: {
                scrollbarWidth: "thin",
                scrollbarColor: "rgba(255,255,255,0.4) transparent"
              },
              children: m.map((v, b) => M.jsx(Vn.div, {
                initial: {
                  opacity: 0,
                  scale: .8
                },
                animate: {
                  opacity: 1,
                  scale: 1
                },
                transition: {
                  delay: b * .04,
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                },
                children: M.jsx(f0, {
                  club: v,
                  isSelected: a?.id === v.id,
                  onClick: () => r(v)
                })
              }, v.id))
            })
          }, e)
        }), M.jsx("p", {
          className: "text-center text-white/80 text-xs font-bold drop-shadow",
          style: {
            fontFamily: "Nunito, sans-serif"
          },
          children: "לחץ על חולצה כדי להלביש • גרור לכוונון מיקום"
        })]
      })]
    })]
  })
}
const gN = new SE;
function vN() {
  return M.jsxs(Xw, {
    children: [M.jsx(mg, {
      path: "/",
      component: yN
    }), M.jsx(mg, {
      component: fM
    })]
  })
}
function bN() {
  return M.jsx(wE, {
    client: gN,
    children: M.jsxs(aM, {
      children: [M.jsx(E0, {
        base: "/".replace(/\/$/, ""),
        children: M.jsx(vN, {})
      }), M.jsx(AC, {})]
    })
  })
}
Aw.createRoot(document.getElementById("root")).render(M.jsx(bN, {}));