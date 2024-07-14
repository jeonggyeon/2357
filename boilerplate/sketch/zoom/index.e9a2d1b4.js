var t =
    "undefined" != typeof globalThis
      ? globalThis
      : "undefined" != typeof self
      ? self
      : "undefined" != typeof window
      ? window
      : "undefined" != typeof global
      ? global
      : {},
  e = {},
  i = {},
  n = t.parcelRequirecbdb;
null == n &&
  (((n = function (t) {
    if (t in e) return e[t].exports;
    if (t in i) {
      var n = i[t];
      delete i[t];
      var r = { id: t, exports: {} };
      return (e[t] = r), n.call(r.exports, r, r.exports), r.exports;
    }
    var s = new Error("Cannot find module '" + t + "'");
    throw ((s.code = "MODULE_NOT_FOUND"), s);
  }).register = function (t, e) {
    i[t] = e;
  }),
  (t.parcelRequirecbdb = n));
var r = {};
n.register("4hJWI", function (t, e) {
  !(function (e, i) {
    "function" == typeof define && define.amd
      ? define(i)
      : t.exports
      ? (t.exports = i())
      : (e.EvEmitter = i());
  })("undefined" != typeof window ? window : t.exports, function () {
    function t() {}
    var e = t.prototype;
    return (
      (e.on = function (t, e) {
        if (t && e) {
          var i = (this._events = this._events || {}),
            n = (i[t] = i[t] || []);
          return -1 == n.indexOf(e) && n.push(e), this;
        }
      }),
      (e.once = function (t, e) {
        if (t && e) {
          this.on(t, e);
          var i = (this._onceEvents = this._onceEvents || {});
          return ((i[t] = i[t] || {})[e] = !0), this;
        }
      }),
      (e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          var n = i.indexOf(e);
          return -1 != n && i.splice(n, 1), this;
        }
      }),
      (e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
          (i = i.slice(0)), (e = e || []);
          for (
            var n = this._onceEvents && this._onceEvents[t], r = 0;
            r < i.length;
            r++
          ) {
            var s = i[r];
            n && n[s] && (this.off(t, s), delete n[s]), s.apply(this, e);
          }
          return this;
        }
      }),
      (e.allOff = function () {
        delete this._events, delete this._onceEvents;
      }),
      t
    );
  });
}),
  /*!
   * imagesLoaded v4.1.4
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function (t, e) {
    "function" == typeof define && define.amd
      ? define(["ev-emitter/ev-emitter"], function (i) {
          return e(t, i);
        })
      : r
      ? (r = e(t, n("4hJWI")))
      : (t.imagesLoaded = e(t, t.EvEmitter));
  })("undefined" != typeof window ? window : r, function (t, e) {
    var i = t.jQuery,
      n = t.console;
    function r(t, e) {
      for (var i in e) t[i] = e[i];
      return t;
    }
    var s = Array.prototype.slice;
    function a(t, e, o) {
      if (!(this instanceof a)) return new a(t, e, o);
      var l,
        u = t;
      ("string" == typeof t && (u = document.querySelectorAll(t)), u)
        ? ((this.elements =
            ((l = u),
            Array.isArray(l)
              ? l
              : "object" == typeof l && "number" == typeof l.length
              ? s.call(l)
              : [l])),
          (this.options = r({}, this.options)),
          "function" == typeof e ? (o = e) : r(this.options, e),
          o && this.on("always", o),
          this.getImages(),
          i && (this.jqDeferred = new i.Deferred()),
          setTimeout(this.check.bind(this)))
        : n.error("Bad element for imagesLoaded " + (u || t));
    }
    (a.prototype = Object.create(e.prototype)),
      (a.prototype.options = {}),
      (a.prototype.getImages = function () {
        (this.images = []), this.elements.forEach(this.addElementImages, this);
      }),
      (a.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t),
          !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && o[e]) {
          for (var i = t.querySelectorAll("img"), n = 0; n < i.length; n++) {
            var r = i[n];
            this.addImage(r);
          }
          if ("string" == typeof this.options.background) {
            var s = t.querySelectorAll(this.options.background);
            for (n = 0; n < s.length; n++) {
              var a = s[n];
              this.addElementBackgroundImages(a);
            }
          }
        }
      });
    var o = { 1: !0, 9: !0, 11: !0 };
    function l(t) {
      this.img = t;
    }
    function u(t, e) {
      (this.url = t), (this.element = e), (this.img = new Image());
    }
    return (
      (a.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e)
          for (
            var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(e.backgroundImage);
            null !== n;

          ) {
            var r = n && n[2];
            r && this.addBackground(r, t), (n = i.exec(e.backgroundImage));
          }
      }),
      (a.prototype.addImage = function (t) {
        var e = new l(t);
        this.images.push(e);
      }),
      (a.prototype.addBackground = function (t, e) {
        var i = new u(t, e);
        this.images.push(i);
      }),
      (a.prototype.check = function () {
        var t = this;
        function e(e, i, n) {
          setTimeout(function () {
            t.progress(e, i, n);
          });
        }
        (this.progressedCount = 0),
          (this.hasAnyBroken = !1),
          this.images.length
            ? this.images.forEach(function (t) {
                t.once("progress", e), t.check();
              })
            : this.complete();
      }),
      (a.prototype.progress = function (t, e, i) {
        this.progressedCount++,
          (this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded),
          this.emitEvent("progress", [this, t, e]),
          this.jqDeferred &&
            this.jqDeferred.notify &&
            this.jqDeferred.notify(this, t),
          this.progressedCount == this.images.length && this.complete(),
          this.options.debug && n && n.log("progress: " + i, t, e);
      }),
      (a.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (
          ((this.isComplete = !0),
          this.emitEvent(t, [this]),
          this.emitEvent("always", [this]),
          this.jqDeferred)
        ) {
          var e = this.hasAnyBroken ? "reject" : "resolve";
          this.jqDeferred[e](this);
        }
      }),
      (l.prototype = Object.create(e.prototype)),
      (l.prototype.check = function () {
        this.getIsImageComplete()
          ? this.confirm(0 !== this.img.naturalWidth, "naturalWidth")
          : ((this.proxyImage = new Image()),
            this.proxyImage.addEventListener("load", this),
            this.proxyImage.addEventListener("error", this),
            this.img.addEventListener("load", this),
            this.img.addEventListener("error", this),
            (this.proxyImage.src = this.img.src));
      }),
      (l.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth;
      }),
      (l.prototype.confirm = function (t, e) {
        (this.isLoaded = t), this.emitEvent("progress", [this, this.img, e]);
      }),
      (l.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t);
      }),
      (l.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents();
      }),
      (l.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents();
      }),
      (l.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this),
          this.proxyImage.removeEventListener("error", this),
          this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (u.prototype = Object.create(l.prototype)),
      (u.prototype.check = function () {
        this.img.addEventListener("load", this),
          this.img.addEventListener("error", this),
          (this.img.src = this.url),
          this.getIsImageComplete() &&
            (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"),
            this.unbindEvents());
      }),
      (u.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this),
          this.img.removeEventListener("error", this);
      }),
      (u.prototype.confirm = function (t, e) {
        (this.isLoaded = t),
          this.emitEvent("progress", [this, this.element, e]);
      }),
      (a.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) &&
          ((i = e).fn.imagesLoaded = function (t, e) {
            return new a(this, t, e).jqDeferred.promise(i(this));
          });
      }),
      a.makeJQueryPlugin(),
      a
    );
  });
const s = () => ({ width: window.innerWidth, height: window.innerHeight }),
  a = (t, e, i) => {
    t.forEach((t) => {
      const n = document.createElement(e);
      (n.classList = i), t.parentNode.appendChild(n), n.appendChild(t);
    });
  };
function o(t, e, i) {
  return (
    e in t
      ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (t[e] = i),
    t
  );
}
function l(t) {
  if (void 0 === t)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
function u(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
/*!
 * GSAP 3.8.0
 * https://greensock.com
 *
 * @license Copyright 2008-2021, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */ var h,
  c,
  f,
  d,
  p,
  m,
  _,
  g,
  v,
  y,
  w,
  x,
  b,
  O,
  T,
  C,
  M,
  D,
  k,
  A,
  E,
  I,
  S,
  L,
  R,
  P,
  z,
  F,
  B = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  q = { duration: 0.5, overwrite: !1, delay: 0 },
  j = 2 * Math.PI,
  G = j / 4,
  N = 0,
  V = Math.sqrt,
  Y = Math.cos,
  U = Math.sin,
  W = function (t) {
    return "string" == typeof t;
  },
  X = function (t) {
    return "function" == typeof t;
  },
  H = function (t) {
    return "number" == typeof t;
  },
  Q = function (t) {
    return void 0 === t;
  },
  $ = function (t) {
    return "object" == typeof t;
  },
  J = function (t) {
    return !1 !== t;
  },
  Z = function () {
    return "undefined" != typeof window;
  },
  K = function (t) {
    return X(t) || W(t);
  },
  tt =
    ("function" == typeof ArrayBuffer && ArrayBuffer.isView) || function () {},
  et = Array.isArray,
  it = /(?:-?\.?\d|\.)+/gi,
  nt = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  st = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  at = /[+-]=-?[.\d]+/,
  ot = /[^,'"\[\]\s]+/gi,
  lt = /[\d.+\-=]+(?:e[-+]\d*)*/i,
  ut = {},
  ht = {},
  ct = function (t) {
    return (ht = Ft(t, ut)) && bi;
  },
  ft = function (t, e) {
    return console.warn(
      "Invalid property",
      t,
      "set to",
      e,
      "Missing plugin? gsap.registerPlugin()"
    );
  },
  dt = function (t, e) {
    return !e && console.warn(t);
  },
  pt = function (t, e) {
    return (t && (ut[t] = e) && ht && (ht[t] = e)) || ut;
  },
  mt = function () {
    return 0;
  },
  _t = {},
  gt = [],
  vt = {},
  yt = {},
  wt = {},
  xt = 30,
  bt = [],
  Ot = "",
  Tt = function (t) {
    var e,
      i,
      n = t[0];
    if (($(n) || X(n) || (t = [t]), !(e = (n._gsap || {}).harness))) {
      for (i = bt.length; i-- && !bt[i].targetTest(n); );
      e = bt[i];
    }
    for (i = t.length; i--; )
      (t[i] && (t[i]._gsap || (t[i]._gsap = new Xe(t[i], e)))) ||
        t.splice(i, 1);
    return t;
  },
  Ct = function (t) {
    return t._gsap || Tt(de(t))[0]._gsap;
  },
  Mt = function (t, e, i) {
    return (i = t[e]) && X(i)
      ? t[e]()
      : (Q(i) && t.getAttribute && t.getAttribute(e)) || i;
  },
  Dt = function (t, e) {
    return (t = t.split(",")).forEach(e) || t;
  },
  kt = function (t) {
    return Math.round(1e5 * t) / 1e5 || 0;
  },
  At = function (t) {
    return Math.round(1e7 * t) / 1e7 || 0;
  },
  Et = function (t, e) {
    for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; );
    return n < i;
  },
  It = function () {
    var t,
      e,
      i = gt.length,
      n = gt.slice(0);
    for (vt = {}, gt.length = 0, t = 0; t < i; t++)
      (e = n[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0);
  },
  St = function (t, e, i, n) {
    gt.length && It(), t.render(e, i, n), gt.length && It();
  },
  Lt = function (t) {
    var e = parseFloat(t);
    return (e || 0 === e) && (t + "").match(ot).length < 2
      ? e
      : W(t)
      ? t.trim()
      : t;
  },
  Rt = function (t) {
    return t;
  },
  Pt = function (t, e) {
    for (var i in e) i in t || (t[i] = e[i]);
    return t;
  },
  zt = function (t, e) {
    for (var i in e)
      i in t || "duration" === i || "ease" === i || (t[i] = e[i]);
  },
  Ft = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  Bt = function t(e, i) {
    for (var n in i)
      "__proto__" !== n &&
        "constructor" !== n &&
        "prototype" !== n &&
        (e[n] = $(i[n]) ? t(e[n] || (e[n] = {}), i[n]) : i[n]);
    return e;
  },
  qt = function (t, e) {
    var i,
      n = {};
    for (i in t) i in e || (n[i] = t[i]);
    return n;
  },
  jt = function (t) {
    var e = t.parent || c,
      i = t.keyframes ? zt : Pt;
    if (J(t.inherit))
      for (; e; ) i(t, e.vars.defaults), (e = e.parent || e._dp);
    return t;
  },
  Gt = function (t, e, i, n) {
    void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
    var r = e._prev,
      s = e._next;
    r ? (r._next = s) : t[i] === e && (t[i] = s),
      s ? (s._prev = r) : t[n] === e && (t[n] = r),
      (e._next = e._prev = e.parent = null);
  },
  Nt = function (t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
      (t._act = 0);
  },
  Vt = function (t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
      for (var i = t; i; ) (i._dirty = 1), (i = i.parent);
    return t;
  },
  Yt = function (t) {
    for (var e = t.parent; e && e.parent; )
      (e._dirty = 1), e.totalDuration(), (e = e.parent);
    return t;
  },
  Ut = function t(e) {
    return !e || (e._ts && t(e.parent));
  },
  Wt = function (t) {
    return t._repeat ? Xt(t._tTime, (t = t.duration() + t._rDelay)) * t : 0;
  },
  Xt = function (t, e) {
    var i = Math.floor((t /= e));
    return t && i === t ? i - 1 : i;
  },
  Ht = function (t, e) {
    return (
      (t - e._start) * e._ts +
      (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
    );
  },
  Qt = function (t) {
    return (t._end = At(
      t._start + (t._tDur / Math.abs(t._ts || t._rts || 1e-8) || 0)
    ));
  },
  $t = function (t, e) {
    var i = t._dp;
    return (
      i &&
        i.smoothChildTiming &&
        t._ts &&
        ((t._start = At(
          i._time -
            (t._ts > 0
              ? e / t._ts
              : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)
        )),
        Qt(t),
        i._dirty || Vt(i, t)),
      t
    );
  },
  Jt = function (t, e) {
    var i;
    if (
      ((e._time || (e._initted && !e._dur)) &&
        ((i = Ht(t.rawTime(), e)),
        (!e._dur || ue(0, e.totalDuration(), i) - e._tTime > 1e-8) &&
          e.render(i, !0)),
      Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts)
    ) {
      if (t._dur < t.duration())
        for (i = t; i._dp; )
          i.rawTime() >= 0 && i.totalTime(i._tTime), (i = i._dp);
      t._zTime = -1e-8;
    }
  },
  Zt = function (t, e, i, n) {
    return (
      e.parent && Nt(e),
      (e._start = At(
        (H(i) ? i : i || t !== c ? ae(t, i, e) : t._time) + e._delay
      )),
      (e._end = At(
        e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)
      )),
      (function (t, e, i, n, r) {
        void 0 === i && (i = "_first"), void 0 === n && (n = "_last");
        var s,
          a = t[n];
        if (r) for (s = e[r]; a && a[r] > s; ) a = a._prev;
        a
          ? ((e._next = a._next), (a._next = e))
          : ((e._next = t[i]), (t[i] = e)),
          e._next ? (e._next._prev = e) : (t[n] = e),
          (e._prev = a),
          (e.parent = e._dp = t);
      })(t, e, "_first", "_last", t._sort ? "_start" : 0),
      ie(e) || (t._recent = e),
      n || Jt(t, e),
      t
    );
  },
  Kt = function (t, e) {
    return (
      (ut.ScrollTrigger || ft("scrollTrigger", e)) &&
      ut.ScrollTrigger.create(e, t)
    );
  },
  te = function (t, e, i, n) {
    return (
      ti(t, e),
      t._initted
        ? !i &&
          t._pt &&
          ((t._dur && !1 !== t.vars.lazy) || (!t._dur && t.vars.lazy)) &&
          _ !== Re.frame
          ? (gt.push(t), (t._lazy = [e, n]), 1)
          : void 0
        : 1
    );
  },
  ee = function t(e) {
    var i = e.parent;
    return i && i._ts && i._initted && !i._lock && (i.rawTime() < 0 || t(i));
  },
  ie = function (t) {
    var e = t.data;
    return "isFromStart" === e || "isStart" === e;
  },
  ne = function (t, e, i, n) {
    var r = t._repeat,
      s = At(e) || 0,
      a = t._tTime / t._tDur;
    return (
      a && !n && (t._time *= s / t._dur),
      (t._dur = s),
      (t._tDur = r ? (r < 0 ? 1e10 : At(s * (r + 1) + t._rDelay * r)) : s),
      a && !n ? $t(t, (t._tTime = t._tDur * a)) : t.parent && Qt(t),
      i || Vt(t.parent, t),
      t
    );
  },
  re = function (t) {
    return t instanceof Qe ? Vt(t) : ne(t, t._dur);
  },
  se = { _start: 0, endTime: mt, totalDuration: mt },
  ae = function t(e, i, n) {
    var r,
      s,
      a,
      o = e.labels,
      l = e._recent || se,
      u = e.duration() >= 1e8 ? l.endTime(!1) : e._dur;
    return W(i) && (isNaN(i) || i in o)
      ? ((s = i.charAt(0)),
        (a = "%" === i.substr(-1)),
        (r = i.indexOf("=")),
        "<" === s || ">" === s
          ? (r >= 0 && (i = i.replace(/=/, "")),
            ("<" === s ? l._start : l.endTime(l._repeat >= 0)) +
              (parseFloat(i.substr(1)) || 0) *
                (a ? (r < 0 ? l : n).totalDuration() / 100 : 1))
          : r < 0
          ? (i in o || (o[i] = u), o[i])
          : ((s = parseFloat(i.charAt(r - 1) + i.substr(r + 1))),
            a && n && (s = (s / 100) * (et(n) ? n[0] : n).totalDuration()),
            r > 1 ? t(e, i.substr(0, r - 1), n) + s : u + s))
      : null == i
      ? u
      : +i;
  },
  oe = function (t, e, i) {
    var n,
      r,
      s = H(e[1]),
      a = (s ? 2 : 1) + (t < 2 ? 0 : 1),
      o = e[a];
    if ((s && (o.duration = e[1]), (o.parent = i), t)) {
      for (n = o, r = i; r && !("immediateRender" in n); )
        (n = r.vars.defaults || {}), (r = J(r.vars.inherit) && r.parent);
      (o.immediateRender = J(n.immediateRender)),
        t < 2 ? (o.runBackwards = 1) : (o.startAt = e[a - 1]);
    }
    return new ri(e[0], o, e[a + 1]);
  },
  le = function (t, e) {
    return t || 0 === t ? e(t) : e;
  },
  ue = function (t, e, i) {
    return i < t ? t : i > e ? e : i;
  },
  he = function (t) {
    if ("string" != typeof t) return "";
    var e = lt.exec(t);
    return e ? t.substr(e.index + e[0].length) : "";
  },
  ce = [].slice,
  fe = function (t, e) {
    return (
      t &&
      $(t) &&
      "length" in t &&
      ((!e && !t.length) || (t.length - 1 in t && $(t[0]))) &&
      !t.nodeType &&
      t !== f
    );
  },
  de = function (t, e, i) {
    return !W(t) || i || (!d && Pe())
      ? et(t)
        ? (function (t, e, i) {
            return (
              void 0 === i && (i = []),
              t.forEach(function (t) {
                var n;
                return (W(t) && !e) || fe(t, 1)
                  ? (n = i).push.apply(n, de(t))
                  : i.push(t);
              }) || i
            );
          })(t, i)
        : fe(t)
        ? ce.call(t, 0)
        : t
        ? [t]
        : []
      : ce.call((e || p).querySelectorAll(t), 0);
  },
  pe = function (t) {
    return t.sort(function () {
      return 0.5 - Math.random();
    });
  },
  me = function (t) {
    if (X(t)) return t;
    var e = $(t) ? t : { each: t },
      i = Ne(e.ease),
      n = e.from || 0,
      r = parseFloat(e.base) || 0,
      s = {},
      a = n > 0 && n < 1,
      o = isNaN(n) || a,
      l = e.axis,
      u = n,
      h = n;
    return (
      W(n)
        ? (u = h = { center: 0.5, edges: 0.5, end: 1 }[n] || 0)
        : !a && o && ((u = n[0]), (h = n[1])),
      function (t, a, c) {
        var f,
          d,
          p,
          m,
          _,
          g,
          v,
          y,
          w,
          x = (c || e).length,
          b = s[x];
        if (!b) {
          if (!(w = "auto" === e.grid ? 0 : (e.grid || [1, 1e8])[1])) {
            for (
              v = -1e8;
              v < (v = c[w++].getBoundingClientRect().left) && w < x;

            );
            w--;
          }
          for (
            b = s[x] = [],
              f = o ? Math.min(w, x) * u - 0.5 : n % w,
              d = o ? (x * h) / w - 0.5 : (n / w) | 0,
              v = 0,
              y = 1e8,
              g = 0;
            g < x;
            g++
          )
            (p = (g % w) - f),
              (m = d - ((g / w) | 0)),
              (b[g] = _ = l ? Math.abs("y" === l ? m : p) : V(p * p + m * m)),
              _ > v && (v = _),
              _ < y && (y = _);
          "random" === n && pe(b),
            (b.max = v - y),
            (b.min = y),
            (b.v = x =
              (parseFloat(e.amount) ||
                parseFloat(e.each) *
                  (w > x
                    ? x - 1
                    : l
                    ? "y" === l
                      ? x / w
                      : w
                    : Math.max(w, x / w)) ||
                0) * ("edges" === n ? -1 : 1)),
            (b.b = x < 0 ? r - x : r),
            (b.u = he(e.amount || e.each) || 0),
            (i = i && x < 0 ? je(i) : i);
        }
        return (
          (x = (b[t] - b.min) / b.max || 0),
          At(b.b + (i ? i(x) : x) * b.v) + b.u
        );
      }
    );
  },
  _e = function (t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function (i) {
      var n = Math.round(parseFloat(i) / t) * t * e;
      return (n - (n % 1)) / e + (H(i) ? 0 : he(i));
    };
  },
  ge = function (t, e) {
    var i,
      n,
      r = et(t);
    return (
      !r &&
        $(t) &&
        ((i = r = t.radius || 1e8),
        t.values
          ? ((t = de(t.values)), (n = !H(t[0])) && (i *= i))
          : (t = _e(t.increment))),
      le(
        e,
        r
          ? X(t)
            ? function (e) {
                return (n = t(e)), Math.abs(n - e) <= i ? n : e;
              }
            : function (e) {
                for (
                  var r,
                    s,
                    a = parseFloat(n ? e.x : e),
                    o = parseFloat(n ? e.y : 0),
                    l = 1e8,
                    u = 0,
                    h = t.length;
                  h--;

                )
                  (r = n
                    ? (r = t[h].x - a) * r + (s = t[h].y - o) * s
                    : Math.abs(t[h] - a)) < l && ((l = r), (u = h));
                return (
                  (u = !i || l <= i ? t[u] : e),
                  n || u === e || H(e) ? u : u + he(e)
                );
              }
          : _e(t)
      )
    );
  },
  ve = function (t, e, i, n) {
    return le(et(t) ? !e : !0 === i ? ((i = 0), !1) : !n, function () {
      return et(t)
        ? t[~~(Math.random() * t.length)]
        : (n = (i = i || 1e-5) < 1 ? Math.pow(10, (i + "").length - 2) : 1) &&
            Math.floor(
              Math.round((t - i / 2 + Math.random() * (e - t + 0.99 * i)) / i) *
                i *
                n
            ) / n;
    });
  },
  ye = function (t, e, i) {
    return le(i, function (i) {
      return t[~~e(i)];
    });
  },
  we = function (t) {
    for (var e, i, n, r, s = 0, a = ""; ~(e = t.indexOf("random(", s)); )
      (n = t.indexOf(")", e)),
        (r = "[" === t.charAt(e + 7)),
        (i = t.substr(e + 7, n - e - 7).match(r ? ot : it)),
        (a +=
          t.substr(s, e - s) + ve(r ? i : +i[0], r ? 0 : +i[1], +i[2] || 1e-5)),
        (s = n + 1);
    return a + t.substr(s, t.length - s);
  },
  xe = function (t, e, i, n, r) {
    var s = e - t,
      a = n - i;
    return le(r, function (e) {
      return i + (((e - t) / s) * a || 0);
    });
  },
  be = function (t, e, i) {
    var n,
      r,
      s,
      a = t.labels,
      o = 1e8;
    for (n in a)
      (r = a[n] - e) < 0 == !!i &&
        r &&
        o > (r = Math.abs(r)) &&
        ((s = n), (o = r));
    return s;
  },
  Oe = function (t, e, i) {
    var n,
      r,
      s = t.vars,
      a = s[e];
    if (a)
      return (
        (n = s[e + "Params"]),
        (r = s.callbackScope || t),
        i && gt.length && It(),
        n ? a.apply(r, n) : a.call(r)
      );
  },
  Te = function (t) {
    return (
      Nt(t),
      t.scrollTrigger && t.scrollTrigger.kill(!1),
      t.progress() < 1 && Oe(t, "onInterrupt"),
      t
    );
  },
  Ce = function (t) {
    var e = (t = (!t.name && t.default) || t).name,
      i = X(t),
      n =
        e && !i && t.init
          ? function () {
              this._props = [];
            }
          : t,
      r = { init: mt, render: di, add: Ze, kill: mi, modifier: pi, rawVars: 0 },
      s = { targetTest: 0, get: 0, getSetter: ui, aliases: {}, register: 0 };
    if ((Pe(), t !== n)) {
      if (yt[e]) return;
      Pt(n, Pt(qt(t, r), s)),
        Ft(n.prototype, Ft(r, qt(t, s))),
        (yt[(n.prop = e)] = n),
        t.targetTest && (bt.push(n), (_t[e] = 1)),
        (e =
          ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) +
          "Plugin");
    }
    pt(e, n), t.register && t.register(bi, n, vi);
  },
  Me = {
    aqua: [0, 255, 255],
    lime: [0, 255, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, 255],
    navy: [0, 0, 128],
    white: [255, 255, 255],
    olive: [128, 128, 0],
    yellow: [255, 255, 0],
    orange: [255, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [255, 0, 0],
    pink: [255, 192, 203],
    cyan: [0, 255, 255],
    transparent: [255, 255, 255, 0],
  },
  De = function (t, e, i) {
    return (
      (255 *
        (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1
          ? e + (i - e) * t * 6
          : t < 0.5
          ? i
          : 3 * t < 2
          ? e + (i - e) * (2 / 3 - t) * 6
          : e) +
        0.5) |
      0
    );
  },
  ke = function (t, e, i) {
    var n,
      r,
      s,
      a,
      o,
      l,
      u,
      h,
      c,
      f,
      d = t ? (H(t) ? [t >> 16, (t >> 8) & 255, 255 & t] : 0) : Me.black;
    if (!d) {
      if (("," === t.substr(-1) && (t = t.substr(0, t.length - 1)), Me[t]))
        d = Me[t];
      else if ("#" === t.charAt(0)) {
        if (
          (t.length < 6 &&
            ((n = t.charAt(1)),
            (r = t.charAt(2)),
            (s = t.charAt(3)),
            (t =
              "#" +
              n +
              n +
              r +
              r +
              s +
              s +
              (5 === t.length ? t.charAt(4) + t.charAt(4) : ""))),
          9 === t.length)
        )
          return [
            (d = parseInt(t.substr(1, 6), 16)) >> 16,
            (d >> 8) & 255,
            255 & d,
            parseInt(t.substr(7), 16) / 255,
          ];
        d = [(t = parseInt(t.substr(1), 16)) >> 16, (t >> 8) & 255, 255 & t];
      } else if ("hsl" === t.substr(0, 3))
        if (((d = f = t.match(it)), e)) {
          if (~t.indexOf("="))
            return (d = t.match(nt)), i && d.length < 4 && (d[3] = 1), d;
        } else
          (a = (+d[0] % 360) / 360),
            (o = +d[1] / 100),
            (n =
              2 * (l = +d[2] / 100) -
              (r = l <= 0.5 ? l * (o + 1) : l + o - l * o)),
            d.length > 3 && (d[3] *= 1),
            (d[0] = De(a + 1 / 3, n, r)),
            (d[1] = De(a, n, r)),
            (d[2] = De(a - 1 / 3, n, r));
      else d = t.match(it) || Me.transparent;
      d = d.map(Number);
    }
    return (
      e &&
        !f &&
        ((n = d[0] / 255),
        (r = d[1] / 255),
        (s = d[2] / 255),
        (l = ((u = Math.max(n, r, s)) + (h = Math.min(n, r, s))) / 2),
        u === h
          ? (a = o = 0)
          : ((c = u - h),
            (o = l > 0.5 ? c / (2 - u - h) : c / (u + h)),
            (a =
              u === n
                ? (r - s) / c + (r < s ? 6 : 0)
                : u === r
                ? (s - n) / c + 2
                : (n - r) / c + 4),
            (a *= 60)),
        (d[0] = ~~(a + 0.5)),
        (d[1] = ~~(100 * o + 0.5)),
        (d[2] = ~~(100 * l + 0.5))),
      i && d.length < 4 && (d[3] = 1),
      d
    );
  },
  Ae = function (t) {
    var e = [],
      i = [],
      n = -1;
    return (
      t.split(Ie).forEach(function (t) {
        var r = t.match(rt) || [];
        e.push.apply(e, r), i.push((n += r.length + 1));
      }),
      (e.c = i),
      e
    );
  },
  Ee = function (t, e, i) {
    var n,
      r,
      s,
      a,
      o = "",
      l = (t + o).match(Ie),
      u = e ? "hsla(" : "rgba(",
      h = 0;
    if (!l) return t;
    if (
      ((l = l.map(function (t) {
        return (
          (t = ke(t, e, 1)) &&
          u +
            (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) +
            ")"
        );
      })),
      i && ((s = Ae(t)), (n = i.c).join(o) !== s.c.join(o)))
    )
      for (a = (r = t.replace(Ie, "1").split(rt)).length - 1; h < a; h++)
        o +=
          r[h] +
          (~n.indexOf(h)
            ? l.shift() || u + "0,0,0,0)"
            : (s.length ? s : l.length ? l : i).shift());
    if (!r) for (a = (r = t.split(Ie)).length - 1; h < a; h++) o += r[h] + l[h];
    return o + r[a];
  },
  Ie = (function () {
    var t,
      e =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t in Me) e += "|" + t + "\\b";
    return new RegExp(e + ")", "gi");
  })(),
  Se = /hsl[a]?\(/,
  Le = function (t) {
    var e,
      i = t.join(" ");
    if (((Ie.lastIndex = 0), Ie.test(i)))
      return (
        (e = Se.test(i)),
        (t[1] = Ee(t[1], e)),
        (t[0] = Ee(t[0], e, Ae(t[1]))),
        !0
      );
  },
  Re =
    ((C = Date.now),
    (M = 500),
    (D = 33),
    (k = C()),
    (A = k),
    (I = E = 1e3 / 240),
    (L = function t(e) {
      var i,
        n,
        r,
        s,
        a = C() - A,
        o = !0 === e;
      if (
        (a > M && (k += a - D),
        ((i = (r = (A += a) - k) - I) > 0 || o) &&
          ((s = ++b.frame),
          (O = r - 1e3 * b.time),
          (b.time = r /= 1e3),
          (I += i + (i >= E ? 4 : E - i)),
          (n = 1)),
        o || (y = w(t)),
        n)
      )
        for (T = 0; T < S.length; T++) S[T](r, O, s, e);
    }),
    (b = {
      time: 0,
      frame: 0,
      tick: function () {
        L(!0);
      },
      deltaRatio: function (t) {
        return O / (1e3 / (t || 60));
      },
      wake: function () {
        m &&
          (!d &&
            Z() &&
            ((f = d = window),
            (p = f.document || {}),
            (ut.gsap = bi),
            (f.gsapVersions || (f.gsapVersions = [])).push(bi.version),
            ct(ht || f.GreenSockGlobals || (!f.gsap && f) || {}),
            (x = f.requestAnimationFrame)),
          y && b.sleep(),
          (w =
            x ||
            function (t) {
              return setTimeout(t, (I - 1e3 * b.time + 1) | 0);
            }),
          (v = 1),
          L(2));
      },
      sleep: function () {
        (x ? f.cancelAnimationFrame : clearTimeout)(y), (v = 0), (w = mt);
      },
      lagSmoothing: function (t, e) {
        (M = t || 1 / 1e-8), (D = Math.min(e, M, 0));
      },
      fps: function (t) {
        (E = 1e3 / (t || 240)), (I = 1e3 * b.time + E);
      },
      add: function (t) {
        S.indexOf(t) < 0 && S.push(t), Pe();
      },
      remove: function (t) {
        var e;
        ~(e = S.indexOf(t)) && S.splice(e, 1) && T >= e && T--;
      },
      _listeners: (S = []),
    })),
  Pe = function () {
    return !v && Re.wake();
  },
  ze = {},
  Fe = /^[\d.\-M][\d.\-,\s]/,
  Be = /["']/g,
  qe = function (t) {
    for (
      var e,
        i,
        n,
        r = {},
        s = t.substr(1, t.length - 3).split(":"),
        a = s[0],
        o = 1,
        l = s.length;
      o < l;
      o++
    )
      (i = s[o]),
        (e = o !== l - 1 ? i.lastIndexOf(",") : i.length),
        (n = i.substr(0, e)),
        (r[a] = isNaN(n) ? n.replace(Be, "").trim() : +n),
        (a = i.substr(e + 1).trim());
    return r;
  },
  je = function (t) {
    return function (e) {
      return 1 - t(1 - e);
    };
  },
  Ge = function t(e, i) {
    for (var n, r = e._first; r; )
      r instanceof Qe
        ? t(r, i)
        : !r.vars.yoyoEase ||
          (r._yoyo && r._repeat) ||
          r._yoyo === i ||
          (r.timeline
            ? t(r.timeline, i)
            : ((n = r._ease),
              (r._ease = r._yEase),
              (r._yEase = n),
              (r._yoyo = i))),
        (r = r._next);
  },
  Ne = function (t, e) {
    return (
      (t &&
        (X(t)
          ? t
          : ze[t] ||
            (function (t) {
              var e,
                i,
                n,
                r,
                s = (t + "").split("("),
                a = ze[s[0]];
              return a && s.length > 1 && a.config
                ? a.config.apply(
                    null,
                    ~t.indexOf("{")
                      ? [qe(s[1])]
                      : ((e = t),
                        (i = e.indexOf("(") + 1),
                        (n = e.indexOf(")")),
                        (r = e.indexOf("(", i)),
                        e.substring(i, ~r && r < n ? e.indexOf(")", n + 1) : n))
                          .split(",")
                          .map(Lt)
                  )
                : ze._CE && Fe.test(t)
                ? ze._CE("", t)
                : a;
            })(t))) ||
      e
    );
  },
  Ve = function (t, e, i, n) {
    void 0 === i &&
      (i = function (t) {
        return 1 - e(1 - t);
      }),
      void 0 === n &&
        (n = function (t) {
          return t < 0.5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2;
        });
    var r,
      s = { easeIn: e, easeOut: i, easeInOut: n };
    return (
      Dt(t, function (t) {
        for (var e in ((ze[t] = ut[t] = s), (ze[(r = t.toLowerCase())] = i), s))
          ze[
            r + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")
          ] = ze[t + "." + e] = s[e];
      }),
      s
    );
  },
  Ye = function (t) {
    return function (e) {
      return e < 0.5 ? (1 - t(1 - 2 * e)) / 2 : 0.5 + t(2 * (e - 0.5)) / 2;
    };
  },
  Ue = function t(e, i, n) {
    var r = i >= 1 ? i : 1,
      s = (n || (e ? 0.3 : 0.45)) / (i < 1 ? i : 1),
      a = (s / j) * (Math.asin(1 / r) || 0),
      o = function (t) {
        return 1 === t ? 1 : r * Math.pow(2, -10 * t) * U((t - a) * s) + 1;
      },
      l =
        "out" === e
          ? o
          : "in" === e
          ? function (t) {
              return 1 - o(1 - t);
            }
          : Ye(o);
    return (
      (s = j / s),
      (l.config = function (i, n) {
        return t(e, i, n);
      }),
      l
    );
  },
  We = function t(e, i) {
    void 0 === i && (i = 1.70158);
    var n = function (t) {
        return t ? --t * t * ((i + 1) * t + i) + 1 : 0;
      },
      r =
        "out" === e
          ? n
          : "in" === e
          ? function (t) {
              return 1 - n(1 - t);
            }
          : Ye(n);
    return (
      (r.config = function (i) {
        return t(e, i);
      }),
      r
    );
  };
Dt("Linear,Quad,Cubic,Quart,Quint,Strong", function (t, e) {
  var i = e < 5 ? e + 1 : e;
  Ve(
    t + ",Power" + (i - 1),
    e
      ? function (t) {
          return Math.pow(t, i);
        }
      : function (t) {
          return t;
        },
    function (t) {
      return 1 - Math.pow(1 - t, i);
    },
    function (t) {
      return t < 0.5
        ? Math.pow(2 * t, i) / 2
        : 1 - Math.pow(2 * (1 - t), i) / 2;
    }
  );
}),
  (ze.Linear.easeNone = ze.none = ze.Linear.easeIn),
  Ve("Elastic", Ue("in"), Ue("out"), Ue()),
  (R = 7.5625),
  (z = 1 / (P = 2.75)),
  Ve(
    "Bounce",
    function (t) {
      return 1 - F(1 - t);
    },
    (F = function (t) {
      return t < z
        ? R * t * t
        : t < 0.7272727272727273
        ? R * Math.pow(t - 1.5 / P, 2) + 0.75
        : t < 0.9090909090909092
        ? R * (t -= 2.25 / P) * t + 0.9375
        : R * Math.pow(t - 2.625 / P, 2) + 0.984375;
    })
  ),
  Ve("Expo", function (t) {
    return t ? Math.pow(2, 10 * (t - 1)) : 0;
  }),
  Ve("Circ", function (t) {
    return -(V(1 - t * t) - 1);
  }),
  Ve("Sine", function (t) {
    return 1 === t ? 1 : 1 - Y(t * G);
  }),
  Ve("Back", We("in"), We("out"), We()),
  (ze.SteppedEase =
    ze.steps =
    ut.SteppedEase =
      {
        config: function (t, e) {
          void 0 === t && (t = 1);
          var i = 1 / t,
            n = t + (e ? 0 : 1),
            r = e ? 1 : 0;
          return function (t) {
            return (((n * ue(0, 0.99999999, t)) | 0) + r) * i;
          };
        },
      }),
  (q.ease = ze["quad.out"]),
  Dt(
    "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
    function (t) {
      return (Ot += t + "," + t + "Params,");
    }
  );
var Xe = function (t, e) {
    (this.id = N++),
      (t._gsap = this),
      (this.target = t),
      (this.harness = e),
      (this.get = e ? e.get : Mt),
      (this.set = e ? e.getSetter : ui);
  },
  He = (function () {
    function t(t) {
      (this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        ne(this, +t.duration, 1, 1),
        (this.data = t.data),
        v || Re.wake();
    }
    var e = t.prototype;
    return (
      (e.delay = function (t) {
        return t || 0 === t
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + t - this._delay),
            (this._delay = t),
            this)
          : this._delay;
      }),
      (e.duration = function (t) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? t + (t + this._rDelay) * this._repeat : t
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (t) {
        return arguments.length
          ? ((this._dirty = 0),
            ne(
              this,
              this._repeat < 0
                ? t
                : (t - this._repeat * this._rDelay) / (this._repeat + 1)
            ))
          : this._tDur;
      }),
      (e.totalTime = function (t, e) {
        if ((Pe(), !arguments.length)) return this._tTime;
        var i = this._dp;
        if (i && i.smoothChildTiming && this._ts) {
          for ($t(this, t), !i._dp || i.parent || Jt(i, this); i && i.parent; )
            i.parent._time !==
              i._start +
                (i._ts >= 0
                  ? i._tTime / i._ts
                  : (i.totalDuration() - i._tTime) / -i._ts) &&
              i.totalTime(i._tTime, !0),
              (i = i.parent);
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && t < this._tDur) ||
              (this._ts < 0 && t > 0) ||
              (!this._tDur && !t)) &&
            Zt(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== t ||
            (!this._dur && !e) ||
            (this._initted && 1e-8 === Math.abs(this._zTime)) ||
            (!t && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = t), St(this, t, e)),
          this
        );
      }),
      (e.time = function (t, e) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), t + Wt(this)) %
                (this._dur + this._rDelay) || (t ? this._dur : 0),
              e
            )
          : this._time;
      }),
      (e.totalProgress = function (t, e) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * t, e)
          : this.totalDuration()
          ? Math.min(1, this._tTime / this._tDur)
          : this.ratio;
      }),
      (e.progress = function (t, e) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (!this._yoyo || 1 & this.iteration() ? t : 1 - t) +
                Wt(this),
              e
            )
          : this.duration()
          ? Math.min(1, this._time / this._dur)
          : this.ratio;
      }),
      (e.iteration = function (t, e) {
        var i = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (t - 1) * i, e)
          : this._repeat
          ? Xt(this._tTime, i) + 1
          : 1;
      }),
      (e.timeScale = function (t) {
        if (!arguments.length) return -1e-8 === this._rts ? 0 : this._rts;
        if (this._rts === t) return this;
        var e =
          this.parent && this._ts ? Ht(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +t || 0),
          (this._ts = this._ps || -1e-8 === t ? 0 : this._rts),
          Yt(this.totalTime(ue(-this._delay, this._tDur, e), !0)),
          Qt(this),
          this
        );
      }),
      (e.paused = function (t) {
        return arguments.length
          ? (this._ps !== t &&
              ((this._ps = t),
              t
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : (Pe(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    1 === this.progress() &&
                      1e-8 !== Math.abs(this._zTime) &&
                      (this._tTime -= 1e-8)
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (t) {
        if (arguments.length) {
          this._start = t;
          var e = this.parent || this._dp;
          return (
            e && (e._sort || !this.parent) && Zt(e, this, t - this._delay), this
          );
        }
        return this._start;
      }),
      (e.endTime = function (t) {
        return (
          this._start +
          (J(t) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (t) {
        var e = this.parent || this._dp;
        return e
          ? t &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
            ? Ht(e.rawTime(t), this)
            : this._tTime
          : this._tTime;
      }),
      (e.globalTime = function (t) {
        for (var e = this, i = arguments.length ? t : e.rawTime(); e; )
          (i = e._start + i / (e._ts || 1)), (e = e._dp);
        return i;
      }),
      (e.repeat = function (t) {
        return arguments.length
          ? ((this._repeat = t === 1 / 0 ? -2 : t), re(this))
          : -2 === this._repeat
          ? 1 / 0
          : this._repeat;
      }),
      (e.repeatDelay = function (t) {
        if (arguments.length) {
          var e = this._time;
          return (this._rDelay = t), re(this), e ? this.time(e) : this;
        }
        return this._rDelay;
      }),
      (e.yoyo = function (t) {
        return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
      }),
      (e.seek = function (t, e) {
        return this.totalTime(ae(this, t), J(e));
      }),
      (e.restart = function (t, e) {
        return this.play().totalTime(t ? -this._delay : 0, J(e));
      }),
      (e.play = function (t, e) {
        return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
      }),
      (e.reverse = function (t, e) {
        return (
          null != t && this.seek(t || this.totalDuration(), e),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (t, e) {
        return null != t && this.seek(t, e), this.paused(!0);
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (t) {
        return arguments.length
          ? (!!t !== this.reversed() &&
              this.timeScale(-this._rts || (t ? -1e-8 : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return (this._initted = this._act = 0), (this._zTime = -1e-8), this;
      }),
      (e.isActive = function () {
        var t,
          e = this.parent || this._dp,
          i = this._start;
        return !(
          e &&
          !(
            this._ts &&
            this._initted &&
            e.isActive() &&
            (t = e.rawTime(!0)) >= i &&
            t < this.endTime(!0) - 1e-8
          )
        );
      }),
      (e.eventCallback = function (t, e, i) {
        var n = this.vars;
        return arguments.length > 1
          ? (e
              ? ((n[t] = e),
                i && (n[t + "Params"] = i),
                "onUpdate" === t && (this._onUpdate = e))
              : delete n[t],
            this)
          : n[t];
      }),
      (e.then = function (t) {
        var e = this;
        return new Promise(function (i) {
          var n = X(t) ? t : Rt,
            r = function () {
              var t = e.then;
              (e.then = null),
                X(n) && (n = n(e)) && (n.then || n === e) && (e.then = t),
                i(n),
                (e.then = t);
            };
          (e._initted && 1 === e.totalProgress() && e._ts >= 0) ||
          (!e._tTime && e._ts < 0)
            ? r()
            : (e._prom = r);
        });
      }),
      (e.kill = function () {
        Te(this);
      }),
      t
    );
  })();
Pt(He.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -1e-8,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Qe = (function (t) {
  function e(e, i) {
    var n;
    return (
      void 0 === e && (e = {}),
      ((n = t.call(this, e) || this).labels = {}),
      (n.smoothChildTiming = !!e.smoothChildTiming),
      (n.autoRemoveChildren = !!e.autoRemoveChildren),
      (n._sort = J(e.sortChildren)),
      c && Zt(e.parent || c, l(n), i),
      e.reversed && n.reverse(),
      e.paused && n.paused(!0),
      e.scrollTrigger && Kt(l(n), e.scrollTrigger),
      n
    );
  }
  u(e, t);
  var i = e.prototype;
  return (
    (i.to = function (t, e, i) {
      return oe(0, arguments, this), this;
    }),
    (i.from = function (t, e, i) {
      return oe(1, arguments, this), this;
    }),
    (i.fromTo = function (t, e, i, n) {
      return oe(2, arguments, this), this;
    }),
    (i.set = function (t, e, i) {
      return (
        (e.duration = 0),
        (e.parent = this),
        jt(e).repeatDelay || (e.repeat = 0),
        (e.immediateRender = !!e.immediateRender),
        new ri(t, e, ae(this, i), 1),
        this
      );
    }),
    (i.call = function (t, e, i) {
      return Zt(this, ri.delayedCall(0, t, e), i);
    }),
    (i.staggerTo = function (t, e, i, n, r, s, a) {
      return (
        (i.duration = e),
        (i.stagger = i.stagger || n),
        (i.onComplete = s),
        (i.onCompleteParams = a),
        (i.parent = this),
        new ri(t, i, ae(this, r)),
        this
      );
    }),
    (i.staggerFrom = function (t, e, i, n, r, s, a) {
      return (
        (i.runBackwards = 1),
        (jt(i).immediateRender = J(i.immediateRender)),
        this.staggerTo(t, e, i, n, r, s, a)
      );
    }),
    (i.staggerFromTo = function (t, e, i, n, r, s, a, o) {
      return (
        (n.startAt = i),
        (jt(n).immediateRender = J(n.immediateRender)),
        this.staggerTo(t, e, n, r, s, a, o)
      );
    }),
    (i.render = function (t, e, i) {
      var n,
        r,
        s,
        a,
        o,
        l,
        u,
        h,
        f,
        d,
        p,
        m,
        _ = this._time,
        g = this._dirty ? this.totalDuration() : this._tDur,
        v = this._dur,
        y = t <= 0 ? 0 : At(t),
        w = this._zTime < 0 != t < 0 && (this._initted || !v);
      if (
        (this !== c && y > g && t >= 0 && (y = g), y !== this._tTime || i || w)
      ) {
        if (
          (_ !== this._time &&
            v &&
            ((y += this._time - _), (t += this._time - _)),
          (n = y),
          (f = this._start),
          (l = !(h = this._ts)),
          w && (v || (_ = this._zTime), (t || !e) && (this._zTime = t)),
          this._repeat)
        ) {
          if (
            ((p = this._yoyo),
            (o = v + this._rDelay),
            this._repeat < -1 && t < 0)
          )
            return this.totalTime(100 * o + t, e, i);
          if (
            ((n = At(y % o)),
            y === g
              ? ((a = this._repeat), (n = v))
              : ((a = ~~(y / o)) && a === y / o && ((n = v), a--),
                n > v && (n = v)),
            (d = Xt(this._tTime, o)),
            !_ && this._tTime && d !== a && (d = a),
            p && 1 & a && ((n = v - n), (m = 1)),
            a !== d && !this._lock)
          ) {
            var x = p && 1 & d,
              b = x === (p && 1 & a);
            if (
              (a < d && (x = !x),
              (_ = x ? 0 : v),
              (this._lock = 1),
              (this.render(_ || (m ? 0 : At(a * o)), e, !v)._lock = 0),
              (this._tTime = y),
              !e && this.parent && Oe(this, "onRepeat"),
              this.vars.repeatRefresh && !m && (this.invalidate()._lock = 1),
              (_ && _ !== this._time) ||
                l !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((v = this._dur),
              (g = this._tDur),
              b &&
                ((this._lock = 2),
                (_ = x ? v : -1e-4),
                this.render(_, !0),
                this.vars.repeatRefresh && !m && this.invalidate()),
              (this._lock = 0),
              !this._ts && !l)
            )
              return this;
            Ge(this, m);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((u = (function (t, e, i) {
              var n;
              if (i > e)
                for (n = t._first; n && n._start <= i; ) {
                  if (!n._dur && "isPause" === n.data && n._start > e) return n;
                  n = n._next;
                }
              else
                for (n = t._last; n && n._start >= i; ) {
                  if (!n._dur && "isPause" === n.data && n._start < e) return n;
                  n = n._prev;
                }
            })(this, At(_), At(n))),
            u && (y -= n - (n = u._start))),
          (this._tTime = y),
          (this._time = n),
          (this._act = !h),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = t),
            (_ = 0)),
          !_ && n && !e && (Oe(this, "onStart"), this._tTime !== y))
        )
          return this;
        if (n >= _ && t >= 0)
          for (r = this._first; r; ) {
            if (
              ((s = r._next), (r._act || n >= r._start) && r._ts && u !== r)
            ) {
              if (r.parent !== this) return this.render(t, e, i);
              if (
                (r.render(
                  r._ts > 0
                    ? (n - r._start) * r._ts
                    : (r._dirty ? r.totalDuration() : r._tDur) +
                        (n - r._start) * r._ts,
                  e,
                  i
                ),
                n !== this._time || (!this._ts && !l))
              ) {
                (u = 0), s && (y += this._zTime = -1e-8);
                break;
              }
            }
            r = s;
          }
        else {
          r = this._last;
          for (var O = t < 0 ? t : n; r; ) {
            if (((s = r._prev), (r._act || O <= r._end) && r._ts && u !== r)) {
              if (r.parent !== this) return this.render(t, e, i);
              if (
                (r.render(
                  r._ts > 0
                    ? (O - r._start) * r._ts
                    : (r._dirty ? r.totalDuration() : r._tDur) +
                        (O - r._start) * r._ts,
                  e,
                  i
                ),
                n !== this._time || (!this._ts && !l))
              ) {
                (u = 0), s && (y += this._zTime = O ? -1e-8 : 1e-8);
                break;
              }
            }
            r = s;
          }
        }
        if (
          u &&
          !e &&
          (this.pause(),
          (u.render(n >= _ ? 0 : -1e-8)._zTime = n >= _ ? 1 : -1),
          this._ts)
        )
          return (this._start = f), Qt(this), this.render(t, e, i);
        this._onUpdate && !e && Oe(this, "onUpdate", !0),
          ((y === g && g >= this.totalDuration()) || (!y && _)) &&
            ((f !== this._start && Math.abs(h) === Math.abs(this._ts)) ||
              this._lock ||
              ((t || !v) &&
                ((y === g && this._ts > 0) || (!y && this._ts < 0)) &&
                Nt(this, 1),
              e ||
                (t < 0 && !_) ||
                (!y && !_ && g) ||
                (Oe(
                  this,
                  y === g && t >= 0 ? "onComplete" : "onReverseComplete",
                  !0
                ),
                this._prom &&
                  !(y < g && this.timeScale() > 0) &&
                  this._prom())));
      }
      return this;
    }),
    (i.add = function (t, e) {
      var i = this;
      if ((H(e) || (e = ae(this, e, t)), !(t instanceof He))) {
        if (et(t))
          return (
            t.forEach(function (t) {
              return i.add(t, e);
            }),
            this
          );
        if (W(t)) return this.addLabel(t, e);
        if (!X(t)) return this;
        t = ri.delayedCall(0, t);
      }
      return this !== t ? Zt(this, t, e) : this;
    }),
    (i.getChildren = function (t, e, i, n) {
      void 0 === t && (t = !0),
        void 0 === e && (e = !0),
        void 0 === i && (i = !0),
        void 0 === n && (n = -1e8);
      for (var r = [], s = this._first; s; )
        s._start >= n &&
          (s instanceof ri
            ? e && r.push(s)
            : (i && r.push(s), t && r.push.apply(r, s.getChildren(!0, e, i)))),
          (s = s._next);
      return r;
    }),
    (i.getById = function (t) {
      for (var e = this.getChildren(1, 1, 1), i = e.length; i--; )
        if (e[i].vars.id === t) return e[i];
    }),
    (i.remove = function (t) {
      return W(t)
        ? this.removeLabel(t)
        : X(t)
        ? this.killTweensOf(t)
        : (Gt(this, t),
          t === this._recent && (this._recent = this._last),
          Vt(this));
    }),
    (i.totalTime = function (e, i) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = At(
              Re.time -
                (this._ts > 0
                  ? e / this._ts
                  : (this.totalDuration() - e) / -this._ts)
            )),
          t.prototype.totalTime.call(this, e, i),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (i.addLabel = function (t, e) {
      return (this.labels[t] = ae(this, e)), this;
    }),
    (i.removeLabel = function (t) {
      return delete this.labels[t], this;
    }),
    (i.addPause = function (t, e, i) {
      var n = ri.delayedCall(0, e || mt, i);
      return (
        (n.data = "isPause"), (this._hasPause = 1), Zt(this, n, ae(this, t))
      );
    }),
    (i.removePause = function (t) {
      var e = this._first;
      for (t = ae(this, t); e; )
        e._start === t && "isPause" === e.data && Nt(e), (e = e._next);
    }),
    (i.killTweensOf = function (t, e, i) {
      for (var n = this.getTweensOf(t, i), r = n.length; r--; )
        $e !== n[r] && n[r].kill(t, e);
      return this;
    }),
    (i.getTweensOf = function (t, e) {
      for (var i, n = [], r = de(t), s = this._first, a = H(e); s; )
        s instanceof ri
          ? Et(s._targets, r) &&
            (a
              ? (!$e || (s._initted && s._ts)) &&
                s.globalTime(0) <= e &&
                s.globalTime(s.totalDuration()) > e
              : !e || s.isActive()) &&
            n.push(s)
          : (i = s.getTweensOf(r, e)).length && n.push.apply(n, i),
          (s = s._next);
      return n;
    }),
    (i.tweenTo = function (t, e) {
      e = e || {};
      var i,
        n = this,
        r = ae(n, t),
        s = e,
        a = s.startAt,
        o = s.onStart,
        l = s.onStartParams,
        u = s.immediateRender,
        h = ri.to(
          n,
          Pt(
            {
              ease: e.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: r,
              overwrite: "auto",
              duration:
                e.duration ||
                Math.abs(
                  (r - (a && "time" in a ? a.time : n._time)) / n.timeScale()
                ) ||
                1e-8,
              onStart: function () {
                if ((n.pause(), !i)) {
                  var t =
                    e.duration ||
                    Math.abs(
                      (r - (a && "time" in a ? a.time : n._time)) /
                        n.timeScale()
                    );
                  h._dur !== t && ne(h, t, 0, 1).render(h._time, !0, !0),
                    (i = 1);
                }
                o && o.apply(h, l || []);
              },
            },
            e
          )
        );
      return u ? h.render(0) : h;
    }),
    (i.tweenFromTo = function (t, e, i) {
      return this.tweenTo(e, Pt({ startAt: { time: ae(this, t) } }, i));
    }),
    (i.recent = function () {
      return this._recent;
    }),
    (i.nextLabel = function (t) {
      return void 0 === t && (t = this._time), be(this, ae(this, t));
    }),
    (i.previousLabel = function (t) {
      return void 0 === t && (t = this._time), be(this, ae(this, t), 1);
    }),
    (i.currentLabel = function (t) {
      return arguments.length
        ? this.seek(t, !0)
        : this.previousLabel(this._time + 1e-8);
    }),
    (i.shiftChildren = function (t, e, i) {
      void 0 === i && (i = 0);
      for (var n, r = this._first, s = this.labels; r; )
        r._start >= i && ((r._start += t), (r._end += t)), (r = r._next);
      if (e) for (n in s) s[n] >= i && (s[n] += t);
      return Vt(this);
    }),
    (i.invalidate = function () {
      var e = this._first;
      for (this._lock = 0; e; ) e.invalidate(), (e = e._next);
      return t.prototype.invalidate.call(this);
    }),
    (i.clear = function (t) {
      void 0 === t && (t = !0);
      for (var e, i = this._first; i; ) (e = i._next), this.remove(i), (i = e);
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        t && (this.labels = {}),
        Vt(this)
      );
    }),
    (i.totalDuration = function (t) {
      var e,
        i,
        n,
        r = 0,
        s = this,
        a = s._last,
        o = 1e8;
      if (arguments.length)
        return s.timeScale(
          (s._repeat < 0 ? s.duration() : s.totalDuration()) /
            (s.reversed() ? -t : t)
        );
      if (s._dirty) {
        for (n = s.parent; a; )
          (e = a._prev),
            a._dirty && a.totalDuration(),
            (i = a._start) > o && s._sort && a._ts && !s._lock
              ? ((s._lock = 1), (Zt(s, a, i - a._delay, 1)._lock = 0))
              : (o = i),
            i < 0 &&
              a._ts &&
              ((r -= i),
              ((!n && !s._dp) || (n && n.smoothChildTiming)) &&
                ((s._start += i / s._ts), (s._time -= i), (s._tTime -= i)),
              s.shiftChildren(-i, !1, -1 / 0),
              (o = 0)),
            a._end > r && a._ts && (r = a._end),
            (a = e);
        ne(s, s === c && s._time > r ? s._time : r, 1, 1), (s._dirty = 0);
      }
      return s._tDur;
    }),
    (e.updateRoot = function (t) {
      if ((c._ts && (St(c, Ht(t, c)), (_ = Re.frame)), Re.frame >= xt)) {
        xt += B.autoSleep || 120;
        var e = c._first;
        if ((!e || !e._ts) && B.autoSleep && Re._listeners.length < 2) {
          for (; e && !e._ts; ) e = e._next;
          e || Re.sleep();
        }
      }
    }),
    e
  );
})(He);
Pt(Qe.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var $e,
  Je = function (t, e, i, n, r, s, a) {
    var o,
      l,
      u,
      h,
      c,
      f,
      d,
      p,
      m = new vi(this._pt, t, e, 0, 1, fi, null, r),
      _ = 0,
      g = 0;
    for (
      m.b = i,
        m.e = n,
        i += "",
        (d = ~(n += "").indexOf("random(")) && (n = we(n)),
        s && (s((p = [i, n]), t, e), (i = p[0]), (n = p[1])),
        l = i.match(st) || [];
      (o = st.exec(n));

    )
      (h = o[0]),
        (c = n.substring(_, o.index)),
        u ? (u = (u + 1) % 5) : "rgba(" === c.substr(-5) && (u = 1),
        h !== l[g++] &&
          ((f = parseFloat(l[g - 1]) || 0),
          (m._pt = {
            _next: m._pt,
            p: c || 1 === g ? c : ",",
            s: f,
            c:
              "=" === h.charAt(1)
                ? parseFloat(h.substr(2)) * ("-" === h.charAt(0) ? -1 : 1)
                : parseFloat(h) - f,
            m: u && u < 4 ? Math.round : 0,
          }),
          (_ = st.lastIndex));
    return (
      (m.c = _ < n.length ? n.substring(_, n.length) : ""),
      (m.fp = a),
      (at.test(n) || d) && (m.e = 0),
      (this._pt = m),
      m
    );
  },
  Ze = function (t, e, i, n, r, s, a, o, l) {
    X(n) && (n = n(r || 0, t, s));
    var u,
      h = t[e],
      c =
        "get" !== i
          ? i
          : X(h)
          ? l
            ? t[
                e.indexOf("set") || !X(t["get" + e.substr(3)])
                  ? e
                  : "get" + e.substr(3)
              ](l)
            : t[e]()
          : h,
      f = X(h) ? (l ? oi : ai) : si;
    if (
      (W(n) &&
        (~n.indexOf("random(") && (n = we(n)),
        "=" === n.charAt(1) &&
          ((u =
            parseFloat(c) +
            parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) +
            (he(c) || 0)) ||
            0 === u) &&
          (n = u)),
      c !== n)
    )
      return isNaN(c * n) || "" === n
        ? (!h && !(e in t) && ft(e, n),
          Je.call(this, t, e, c, n, f, o || B.stringFilter, l))
        : ((u = new vi(
            this._pt,
            t,
            e,
            +c || 0,
            n - (c || 0),
            "boolean" == typeof h ? ci : hi,
            0,
            f
          )),
          l && (u.fp = l),
          a && u.modifier(a, this, t),
          (this._pt = u));
  },
  Ke = function (t, e, i, n, r, s) {
    var a, o, l, u;
    if (
      yt[t] &&
      !1 !==
        (a = new yt[t]()).init(
          r,
          a.rawVars
            ? e[t]
            : (function (t, e, i, n, r) {
                if (
                  (X(t) && (t = ei(t, r, e, i, n)),
                  !$(t) || (t.style && t.nodeType) || et(t) || tt(t))
                )
                  return W(t) ? ei(t, r, e, i, n) : t;
                var s,
                  a = {};
                for (s in t) a[s] = ei(t[s], r, e, i, n);
                return a;
              })(e[t], n, r, s, i),
          i,
          n,
          s
        ) &&
      ((i._pt = o = new vi(i._pt, r, t, 0, 1, a.render, a, 0, a.priority)),
      i !== g)
    )
      for (l = i._ptLookup[i._targets.indexOf(r)], u = a._props.length; u--; )
        l[a._props[u]] = o;
    return a;
  },
  ti = function t(e, i) {
    var n,
      r,
      s,
      a,
      o,
      l,
      u,
      f,
      d,
      p,
      m,
      _,
      g,
      v = e.vars,
      y = v.ease,
      w = v.startAt,
      x = v.immediateRender,
      b = v.lazy,
      O = v.onUpdate,
      T = v.onUpdateParams,
      C = v.callbackScope,
      M = v.runBackwards,
      D = v.yoyoEase,
      k = v.keyframes,
      A = v.autoRevert,
      E = e._dur,
      I = e._startAt,
      S = e._targets,
      L = e.parent,
      R = L && "nested" === L.data ? L.parent._targets : S,
      P = "auto" === e._overwrite && !h,
      z = e.timeline;
    if (
      (z && (!k || !y) && (y = "none"),
      (e._ease = Ne(y, q.ease)),
      (e._yEase = D ? je(Ne(!0 === D ? y : D, q.ease)) : 0),
      D &&
        e._yoyo &&
        !e._repeat &&
        ((D = e._yEase), (e._yEase = e._ease), (e._ease = D)),
      (e._from = !z && !!v.runBackwards),
      !z)
    ) {
      if (
        ((_ = (f = S[0] ? Ct(S[0]).harness : 0) && v[f.prop]),
        (n = qt(v, _t)),
        I && I.render(-1, !0).kill(),
        w)
      )
        if (
          (Nt(
            (e._startAt = ri.set(
              S,
              Pt(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: L,
                  immediateRender: !0,
                  lazy: J(b),
                  startAt: null,
                  delay: 0,
                  onUpdate: O,
                  onUpdateParams: T,
                  callbackScope: C,
                  stagger: 0,
                },
                w
              )
            ))
          ),
          i < 0 && !x && !A && e._startAt.render(-1, !0),
          x)
        ) {
          if ((i > 0 && !A && (e._startAt = 0), E && i <= 0))
            return void (i && (e._zTime = i));
        } else !1 === A && (e._startAt = 0);
      else if (M && E)
        if (I) !A && (e._startAt = 0);
        else if (
          (i && (x = !1),
          (s = Pt(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: x && J(b),
              immediateRender: x,
              stagger: 0,
              parent: L,
            },
            n
          )),
          _ && (s[f.prop] = _),
          Nt((e._startAt = ri.set(S, s))),
          i < 0 && e._startAt.render(-1, !0),
          x)
        ) {
          if (!i) return;
        } else t(e._startAt, 1e-8);
      for (e._pt = 0, b = (E && J(b)) || (b && !E), r = 0; r < S.length; r++) {
        if (
          ((u = (o = S[r])._gsap || Tt(S)[r]._gsap),
          (e._ptLookup[r] = p = {}),
          vt[u.id] && gt.length && It(),
          (m = R === S ? r : R.indexOf(o)),
          f &&
            !1 !== (d = new f()).init(o, _ || n, e, m, R) &&
            ((e._pt = a =
              new vi(e._pt, o, d.name, 0, 1, d.render, d, 0, d.priority)),
            d._props.forEach(function (t) {
              p[t] = a;
            }),
            d.priority && (l = 1)),
          !f || _)
        )
          for (s in n)
            yt[s] && (d = Ke(s, n, e, m, o, R))
              ? d.priority && (l = 1)
              : (p[s] = a =
                  Ze.call(e, o, s, "get", n[s], m, R, 0, v.stringFilter));
        e._op && e._op[r] && e.kill(o, e._op[r]),
          P &&
            e._pt &&
            (($e = e),
            c.killTweensOf(o, p, e.globalTime(i)),
            (g = !e.parent),
            ($e = 0)),
          e._pt && b && (vt[u.id] = 1);
      }
      l && gi(e), e._onInit && e._onInit(e);
    }
    (e._onUpdate = O), (e._initted = (!e._op || e._pt) && !g);
  },
  ei = function (t, e, i, n, r) {
    return X(t)
      ? t.call(e, i, n, r)
      : W(t) && ~t.indexOf("random(")
      ? we(t)
      : t;
  },
  ii = Ot + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase",
  ni = (ii + ",id,stagger,delay,duration,paused,scrollTrigger").split(","),
  ri = (function (t) {
    function e(e, i, n, r) {
      var s;
      "number" == typeof i && ((n.duration = i), (i = n), (n = null));
      var a,
        o,
        u,
        f,
        d,
        p,
        m,
        _,
        g = (s = t.call(this, r ? i : jt(i)) || this).vars,
        v = g.duration,
        y = g.delay,
        w = g.immediateRender,
        x = g.stagger,
        b = g.overwrite,
        O = g.keyframes,
        T = g.defaults,
        C = g.scrollTrigger,
        M = g.yoyoEase,
        D = i.parent || c,
        k = (et(e) || tt(e) ? H(e[0]) : "length" in i) ? [e] : de(e);
      if (
        ((s._targets = k.length
          ? Tt(k)
          : dt(
              "GSAP target " + e + " not found. https://greensock.com",
              !B.nullTargetWarn
            ) || []),
        (s._ptLookup = []),
        (s._overwrite = b),
        O || x || K(v) || K(y))
      ) {
        if (
          ((i = s.vars),
          (a = s.timeline =
            new Qe({ data: "nested", defaults: T || {} })).kill(),
          (a.parent = a._dp = l(s)),
          (a._start = 0),
          O)
        )
          jt(Pt(a.vars.defaults, { ease: "none" })),
            x
              ? k.forEach(function (t, e) {
                  return O.forEach(function (i, n) {
                    return a.to(t, i, n ? ">" : e * x);
                  });
                })
              : O.forEach(function (t) {
                  return a.to(k, t, ">");
                });
        else {
          if (((f = k.length), (m = x ? me(x) : mt), $(x)))
            for (d in x) ~ii.indexOf(d) && (_ || (_ = {}), (_[d] = x[d]));
          for (o = 0; o < f; o++) {
            for (d in ((u = {}), i)) ni.indexOf(d) < 0 && (u[d] = i[d]);
            (u.stagger = 0),
              M && (u.yoyoEase = M),
              _ && Ft(u, _),
              (p = k[o]),
              (u.duration = +ei(v, l(s), o, p, k)),
              (u.delay = (+ei(y, l(s), o, p, k) || 0) - s._delay),
              !x &&
                1 === f &&
                u.delay &&
                ((s._delay = y = u.delay), (s._start += y), (u.delay = 0)),
              a.to(p, u, m(o, p, k));
          }
          a.duration() ? (v = y = 0) : (s.timeline = 0);
        }
        v || s.duration((v = a.duration()));
      } else s.timeline = 0;
      return (
        !0 !== b || h || (($e = l(s)), c.killTweensOf(k), ($e = 0)),
        Zt(D, l(s), n),
        i.reversed && s.reverse(),
        i.paused && s.paused(!0),
        (w ||
          (!v &&
            !O &&
            s._start === At(D._time) &&
            J(w) &&
            Ut(l(s)) &&
            "nested" !== D.data)) &&
          ((s._tTime = -1e-8), s.render(Math.max(0, -y))),
        C && Kt(l(s), C),
        s
      );
    }
    u(e, t);
    var i = e.prototype;
    return (
      (i.render = function (t, e, i) {
        var n,
          r,
          s,
          a,
          o,
          l,
          u,
          h,
          c,
          f = this._time,
          d = this._tDur,
          p = this._dur,
          m = t > d - 1e-8 && t >= 0 ? d : t < 1e-8 ? 0 : t;
        if (p) {
          if (
            m !== this._tTime ||
            !t ||
            i ||
            (!this._initted && this._tTime) ||
            (this._startAt && this._zTime < 0 != t < 0)
          ) {
            if (((n = m), (h = this.timeline), this._repeat)) {
              if (((a = p + this._rDelay), this._repeat < -1 && t < 0))
                return this.totalTime(100 * a + t, e, i);
              if (
                ((n = At(m % a)),
                m === d
                  ? ((s = this._repeat), (n = p))
                  : ((s = ~~(m / a)) && s === m / a && ((n = p), s--),
                    n > p && (n = p)),
                (l = this._yoyo && 1 & s) && ((c = this._yEase), (n = p - n)),
                (o = Xt(this._tTime, a)),
                n === f && !i && this._initted)
              )
                return this;
              s !== o &&
                (h && this._yEase && Ge(h, l),
                !this.vars.repeatRefresh ||
                  l ||
                  this._lock ||
                  ((this._lock = i = 1),
                  (this.render(At(a * s), !0).invalidate()._lock = 0)));
            }
            if (!this._initted) {
              if (te(this, t < 0 ? t : n, i, e)) return (this._tTime = 0), this;
              if (p !== this._dur) return this.render(t, e, i);
            }
            if (
              ((this._tTime = m),
              (this._time = n),
              !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
              (this.ratio = u = (c || this._ease)(n / p)),
              this._from && (this.ratio = u = 1 - u),
              n && !f && !e && (Oe(this, "onStart"), this._tTime !== m))
            )
              return this;
            for (r = this._pt; r; ) r.r(u, r.d), (r = r._next);
            (h && h.render(t < 0 ? t : !n && l ? -1e-8 : h._dur * u, e, i)) ||
              (this._startAt && (this._zTime = t)),
              this._onUpdate &&
                !e &&
                (t < 0 && this._startAt && this._startAt.render(t, !0, i),
                Oe(this, "onUpdate")),
              this._repeat &&
                s !== o &&
                this.vars.onRepeat &&
                !e &&
                this.parent &&
                Oe(this, "onRepeat"),
              (m !== this._tDur && m) ||
                this._tTime !== m ||
                (t < 0 &&
                  this._startAt &&
                  !this._onUpdate &&
                  this._startAt.render(t, !0, !0),
                (t || !p) &&
                  ((m === this._tDur && this._ts > 0) ||
                    (!m && this._ts < 0)) &&
                  Nt(this, 1),
                e ||
                  (t < 0 && !f) ||
                  (!m && !f) ||
                  (Oe(this, m === d ? "onComplete" : "onReverseComplete", !0),
                  this._prom &&
                    !(m < d && this.timeScale() > 0) &&
                    this._prom()));
          }
        } else
          !(function (t, e, i, n) {
            var r,
              s,
              a,
              o = t.ratio,
              l =
                e < 0 ||
                (!e &&
                  ((!t._start && ee(t) && (t._initted || !ie(t))) ||
                    ((t._ts < 0 || t._dp._ts < 0) && !ie(t))))
                  ? 0
                  : 1,
              u = t._rDelay,
              h = 0;
            if (
              (u &&
                t._repeat &&
                ((h = ue(0, t._tDur, e)),
                (s = Xt(h, u)),
                (a = Xt(t._tTime, u)),
                t._yoyo && 1 & s && (l = 1 - l),
                s !== a &&
                  ((o = 1 - l),
                  t.vars.repeatRefresh && t._initted && t.invalidate())),
              l !== o || n || 1e-8 === t._zTime || (!e && t._zTime))
            ) {
              if (!t._initted && te(t, e, n, i)) return;
              for (
                a = t._zTime,
                  t._zTime = e || (i ? 1e-8 : 0),
                  i || (i = e && !a),
                  t.ratio = l,
                  t._from && (l = 1 - l),
                  t._time = 0,
                  t._tTime = h,
                  r = t._pt;
                r;

              )
                r.r(l, r.d), (r = r._next);
              t._startAt && e < 0 && t._startAt.render(e, !0, !0),
                t._onUpdate && !i && Oe(t, "onUpdate"),
                h && t._repeat && !i && t.parent && Oe(t, "onRepeat"),
                (e >= t._tDur || e < 0) &&
                  t.ratio === l &&
                  (l && Nt(t, 1),
                  i ||
                    (Oe(t, l ? "onComplete" : "onReverseComplete", !0),
                    t._prom && t._prom()));
            } else t._zTime || (t._zTime = e);
          })(this, t, e, i);
        return this;
      }),
      (i.targets = function () {
        return this._targets;
      }),
      (i.invalidate = function () {
        return (
          (this._pt =
            this._op =
            this._startAt =
            this._onUpdate =
            this._lazy =
            this.ratio =
              0),
          (this._ptLookup = []),
          this.timeline && this.timeline.invalidate(),
          t.prototype.invalidate.call(this)
        );
      }),
      (i.kill = function (t, e) {
        if ((void 0 === e && (e = "all"), !(t || (e && "all" !== e))))
          return (this._lazy = this._pt = 0), this.parent ? Te(this) : this;
        if (this.timeline) {
          var i = this.timeline.totalDuration();
          return (
            this.timeline.killTweensOf(t, e, $e && !0 !== $e.vars.overwrite)
              ._first || Te(this),
            this.parent &&
              i !== this.timeline.totalDuration() &&
              ne(this, (this._dur * this.timeline._tDur) / i, 0, 1),
            this
          );
        }
        var n,
          r,
          s,
          a,
          o,
          l,
          u,
          h = this._targets,
          c = t ? de(t) : h,
          f = this._ptLookup,
          d = this._pt;
        if (
          (!e || "all" === e) &&
          (function (t, e) {
            for (
              var i = t.length, n = i === e.length;
              n && i-- && t[i] === e[i];

            );
            return i < 0;
          })(h, c)
        )
          return "all" === e && (this._pt = 0), Te(this);
        for (
          n = this._op = this._op || [],
            "all" !== e &&
              (W(e) &&
                ((o = {}),
                Dt(e, function (t) {
                  return (o[t] = 1);
                }),
                (e = o)),
              (e = (function (t, e) {
                var i,
                  n,
                  r,
                  s,
                  a = t[0] ? Ct(t[0]).harness : 0,
                  o = a && a.aliases;
                if (!o) return e;
                for (n in ((i = Ft({}, e)), o))
                  if ((n in i))
                    for (r = (s = o[n].split(",")).length; r--; )
                      i[s[r]] = i[n];
                return i;
              })(h, e))),
            u = h.length;
          u--;

        )
          if (~c.indexOf(h[u]))
            for (o in ((r = f[u]),
            "all" === e
              ? ((n[u] = e), (a = r), (s = {}))
              : ((s = n[u] = n[u] || {}), (a = e)),
            a))
              (l = r && r[o]) &&
                (("kill" in l.d && !0 !== l.d.kill(o)) || Gt(this, l, "_pt"),
                delete r[o]),
                "all" !== s && (s[o] = 1);
        return this._initted && !this._pt && d && Te(this), this;
      }),
      (e.to = function (t, i) {
        return new e(t, i, arguments[2]);
      }),
      (e.from = function (t, e) {
        return oe(1, arguments);
      }),
      (e.delayedCall = function (t, i, n, r) {
        return new e(i, 0, {
          immediateRender: !1,
          lazy: !1,
          overwrite: !1,
          delay: t,
          onComplete: i,
          onReverseComplete: i,
          onCompleteParams: n,
          onReverseCompleteParams: n,
          callbackScope: r,
        });
      }),
      (e.fromTo = function (t, e, i) {
        return oe(2, arguments);
      }),
      (e.set = function (t, i) {
        return (i.duration = 0), i.repeatDelay || (i.repeat = 0), new e(t, i);
      }),
      (e.killTweensOf = function (t, e, i) {
        return c.killTweensOf(t, e, i);
      }),
      e
    );
  })(He);
Pt(ri.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }),
  Dt("staggerTo,staggerFrom,staggerFromTo", function (t) {
    ri[t] = function () {
      var e = new Qe(),
        i = ce.call(arguments, 0);
      return i.splice("staggerFromTo" === t ? 5 : 4, 0, 0), e[t].apply(e, i);
    };
  });
var si = function (t, e, i) {
    return (t[e] = i);
  },
  ai = function (t, e, i) {
    return t[e](i);
  },
  oi = function (t, e, i, n) {
    return t[e](n.fp, i);
  },
  li = function (t, e, i) {
    return t.setAttribute(e, i);
  },
  ui = function (t, e) {
    return X(t[e]) ? ai : Q(t[e]) && t.setAttribute ? li : si;
  },
  hi = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e);
  },
  ci = function (t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e);
  },
  fi = function (t, e) {
    var i = e._pt,
      n = "";
    if (!t && e.b) n = e.b;
    else if (1 === t && e.e) n = e.e;
    else {
      for (; i; )
        (n =
          i.p +
          (i.m ? i.m(i.s + i.c * t) : Math.round(1e4 * (i.s + i.c * t)) / 1e4) +
          n),
          (i = i._next);
      n += e.c;
    }
    e.set(e.t, e.p, n, e);
  },
  di = function (t, e) {
    for (var i = e._pt; i; ) i.r(t, i.d), (i = i._next);
  },
  pi = function (t, e, i, n) {
    for (var r, s = this._pt; s; )
      (r = s._next), s.p === n && s.modifier(t, e, i), (s = r);
  },
  mi = function (t) {
    for (var e, i, n = this._pt; n; )
      (i = n._next),
        (n.p === t && !n.op) || n.op === t
          ? Gt(this, n, "_pt")
          : n.dep || (e = 1),
        (n = i);
    return !e;
  },
  _i = function (t, e, i, n) {
    n.mSet(t, e, n.m.call(n.tween, i, n.mt), n);
  },
  gi = function (t) {
    for (var e, i, n, r, s = t._pt; s; ) {
      for (e = s._next, i = n; i && i.pr > s.pr; ) i = i._next;
      (s._prev = i ? i._prev : r) ? (s._prev._next = s) : (n = s),
        (s._next = i) ? (i._prev = s) : (r = s),
        (s = e);
    }
    t._pt = n;
  },
  vi = (function () {
    function t(t, e, i, n, r, s, a, o, l) {
      (this.t = e),
        (this.s = n),
        (this.c = r),
        (this.p = i),
        (this.r = s || hi),
        (this.d = a || this),
        (this.set = o || si),
        (this.pr = l || 0),
        (this._next = t),
        t && (t._prev = this);
    }
    return (
      (t.prototype.modifier = function (t, e, i) {
        (this.mSet = this.mSet || this.set),
          (this.set = _i),
          (this.m = t),
          (this.mt = i),
          (this.tween = e);
      }),
      t
    );
  })();
Dt(
  Ot +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (t) {
    return (_t[t] = 1);
  }
),
  (ut.TweenMax = ut.TweenLite = ri),
  (ut.TimelineLite = ut.TimelineMax = Qe),
  (c = new Qe({
    sortChildren: !1,
    defaults: q,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0,
  })),
  (B.stringFilter = Le);
var yi = {
  registerPlugin: function () {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
      e[i] = arguments[i];
    e.forEach(function (t) {
      return Ce(t);
    });
  },
  timeline: function (t) {
    return new Qe(t);
  },
  getTweensOf: function (t, e) {
    return c.getTweensOf(t, e);
  },
  getProperty: function (t, e, i, n) {
    W(t) && (t = de(t)[0]);
    var r = Ct(t || {}).get,
      s = i ? Rt : Lt;
    return (
      "native" === i && (i = ""),
      t
        ? e
          ? s(((yt[e] && yt[e].get) || r)(t, e, i, n))
          : function (e, i, n) {
              return s(((yt[e] && yt[e].get) || r)(t, e, i, n));
            }
        : t
    );
  },
  quickSetter: function (t, e, i) {
    if ((t = de(t)).length > 1) {
      var n = t.map(function (t) {
          return bi.quickSetter(t, e, i);
        }),
        r = n.length;
      return function (t) {
        for (var e = r; e--; ) n[e](t);
      };
    }
    t = t[0] || {};
    var s = yt[e],
      a = Ct(t),
      o = (a.harness && (a.harness.aliases || {})[e]) || e,
      l = s
        ? function (e) {
            var n = new s();
            (g._pt = 0),
              n.init(t, i ? e + i : e, g, 0, [t]),
              n.render(1, n),
              g._pt && di(1, g);
          }
        : a.set(t, o);
    return s
      ? l
      : function (e) {
          return l(t, o, i ? e + i : e, a, 1);
        };
  },
  isTweening: function (t) {
    return c.getTweensOf(t, !0).length > 0;
  },
  defaults: function (t) {
    return t && t.ease && (t.ease = Ne(t.ease, q.ease)), Bt(q, t || {});
  },
  config: function (t) {
    return Bt(B, t || {});
  },
  registerEffect: function (t) {
    var e = t.name,
      i = t.effect,
      n = t.plugins,
      r = t.defaults,
      s = t.extendTimeline;
    (n || "").split(",").forEach(function (t) {
      return (
        t && !yt[t] && !ut[t] && dt(e + " effect requires " + t + " plugin.")
      );
    }),
      (wt[e] = function (t, e, n) {
        return i(de(t), Pt(e || {}, r), n);
      }),
      s &&
        (Qe.prototype[e] = function (t, i, n) {
          return this.add(wt[e](t, $(i) ? i : (n = i) && {}, this), n);
        });
  },
  registerEase: function (t, e) {
    ze[t] = Ne(e);
  },
  parseEase: function (t, e) {
    return arguments.length ? Ne(t, e) : ze;
  },
  getById: function (t) {
    return c.getById(t);
  },
  exportRoot: function (t, e) {
    void 0 === t && (t = {});
    var i,
      n,
      r = new Qe(t);
    for (
      r.smoothChildTiming = J(t.smoothChildTiming),
        c.remove(r),
        r._dp = 0,
        r._time = r._tTime = c._time,
        i = c._first;
      i;

    )
      (n = i._next),
        (!e &&
          !i._dur &&
          i instanceof ri &&
          i.vars.onComplete === i._targets[0]) ||
          Zt(r, i, i._start - i._delay),
        (i = n);
    return Zt(c, r, 0), r;
  },
  utils: {
    wrap: function t(e, i, n) {
      var r = i - e;
      return et(e)
        ? ye(e, t(0, e.length), i)
        : le(n, function (t) {
            return ((r + ((t - e) % r)) % r) + e;
          });
    },
    wrapYoyo: function t(e, i, n) {
      var r = i - e,
        s = 2 * r;
      return et(e)
        ? ye(e, t(0, e.length - 1), i)
        : le(n, function (t) {
            return e + ((t = (s + ((t - e) % s)) % s || 0) > r ? s - t : t);
          });
    },
    distribute: me,
    random: ve,
    snap: ge,
    normalize: function (t, e, i) {
      return xe(t, e, 0, 1, i);
    },
    getUnit: he,
    clamp: function (t, e, i) {
      return le(i, function (i) {
        return ue(t, e, i);
      });
    },
    splitColor: ke,
    toArray: de,
    selector: function (t) {
      return (
        (t = de(t)[0] || dt("Invalid scope") || {}),
        function (e) {
          var i = t.current || t.nativeElement || t;
          return de(
            e,
            i.querySelectorAll
              ? i
              : i === t
              ? dt("Invalid scope") || p.createElement("div")
              : t
          );
        }
      );
    },
    mapRange: xe,
    pipe: function () {
      for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
      return function (t) {
        return e.reduce(function (t, e) {
          return e(t);
        }, t);
      };
    },
    unitize: function (t, e) {
      return function (i) {
        return t(parseFloat(i)) + (e || he(i));
      };
    },
    interpolate: function t(e, i, n, r) {
      var s = isNaN(e + i)
        ? 0
        : function (t) {
            return (1 - t) * e + t * i;
          };
      if (!s) {
        var a,
          o,
          l,
          u,
          h,
          c = W(e),
          f = {};
        if ((!0 === n && (r = 1) && (n = null), c))
          (e = { p: e }), (i = { p: i });
        else if (et(e) && !et(i)) {
          for (l = [], u = e.length, h = u - 2, o = 1; o < u; o++)
            l.push(t(e[o - 1], e[o]));
          u--,
            (s = function (t) {
              t *= u;
              var e = Math.min(h, ~~t);
              return l[e](t - e);
            }),
            (n = i);
        } else r || (e = Ft(et(e) ? [] : {}, e));
        if (!l) {
          for (a in i) Ze.call(f, e, a, "get", i[a]);
          s = function (t) {
            return di(t, f) || (c ? e.p : e);
          };
        }
      }
      return le(n, s);
    },
    shuffle: pe,
  },
  install: ct,
  effects: wt,
  ticker: Re,
  updateRoot: Qe.updateRoot,
  plugins: yt,
  globalTimeline: c,
  core: {
    PropTween: vi,
    globals: pt,
    Tween: ri,
    Timeline: Qe,
    Animation: He,
    getCache: Ct,
    _removeLinkedListItem: Gt,
    suppressOverwrites: function (t) {
      return (h = t);
    },
  },
};
Dt("to,from,fromTo,delayedCall,set,killTweensOf", function (t) {
  return (yi[t] = ri[t]);
}),
  Re.add(Qe.updateRoot),
  (g = yi.to({}, { duration: 0 }));
var wi = function (t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
      i = i._next;
    return i;
  },
  xi = function (t, e) {
    return {
      name: t,
      rawVars: 1,
      init: function (t, i, n) {
        n._onInit = function (t) {
          var n, r;
          if (
            (W(i) &&
              ((n = {}),
              Dt(i, function (t) {
                return (n[t] = 1);
              }),
              (i = n)),
            e)
          ) {
            for (r in ((n = {}), i)) n[r] = e(i[r]);
            i = n;
          }
          !(function (t, e) {
            var i,
              n,
              r,
              s = t._targets;
            for (i in e)
              for (n = s.length; n--; )
                (r = t._ptLookup[n][i]) &&
                  (r = r.d) &&
                  (r._pt && (r = wi(r, i)),
                  r && r.modifier && r.modifier(e[i], t, s[n], i));
          })(t, i);
        };
      },
    };
  },
  bi =
    yi.registerPlugin(
      {
        name: "attr",
        init: function (t, e, i, n, r) {
          var s, a;
          for (s in e)
            (a = this.add(
              t,
              "setAttribute",
              (t.getAttribute(s) || 0) + "",
              e[s],
              n,
              r,
              0,
              0,
              s
            )) && (a.op = s),
              this._props.push(s);
        },
      },
      {
        name: "endArray",
        init: function (t, e) {
          for (var i = e.length; i--; ) this.add(t, i, t[i] || 0, e[i]);
        },
      },
      xi("roundProps", _e),
      xi("modifiers"),
      xi("snap", ge)
    ) || yi;
(ri.version = Qe.version = bi.version = "3.8.0"), (m = 1), Z() && Pe();
ze.Power0,
  ze.Power1,
  ze.Power2,
  ze.Power3,
  ze.Power4,
  ze.Linear,
  ze.Quad,
  ze.Cubic,
  ze.Quart,
  ze.Quint,
  ze.Strong,
  ze.Elastic,
  ze.Back,
  ze.SteppedEase,
  ze.Bounce,
  ze.Sine,
  ze.Expo,
  ze.Circ;
var Oi,
  Ti,
  Ci,
  Mi,
  Di,
  ki,
  Ai,
  Ei = {},
  Ii = 180 / Math.PI,
  Si = Math.PI / 180,
  Li = Math.atan2,
  Ri = /([A-Z])/g,
  Pi = /(?:left|right|width|margin|padding|x)/i,
  zi = /[\s,\(]\S/,
  Fi = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Bi = function (t, e) {
    return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e);
  },
  qi = function (t, e) {
    return e.set(
      e.t,
      e.p,
      1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u,
      e
    );
  },
  ji = function (t, e) {
    return e.set(
      e.t,
      e.p,
      t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b,
      e
    );
  },
  Gi = function (t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -0.5 : 0.5)) + e.u, e);
  },
  Ni = function (t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e);
  },
  Vi = function (t, e) {
    return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e);
  },
  Yi = function (t, e, i) {
    return (t.style[e] = i);
  },
  Ui = function (t, e, i) {
    return t.style.setProperty(e, i);
  },
  Wi = function (t, e, i) {
    return (t._gsap[e] = i);
  },
  Xi = function (t, e, i) {
    return (t._gsap.scaleX = t._gsap.scaleY = i);
  },
  Hi = function (t, e, i, n, r) {
    var s = t._gsap;
    (s.scaleX = s.scaleY = i), s.renderTransform(r, s);
  },
  Qi = function (t, e, i, n, r) {
    var s = t._gsap;
    (s[e] = i), s.renderTransform(r, s);
  },
  $i = "transform",
  Ji = $i + "Origin",
  Zi = function (t, e) {
    var i = Ti.createElementNS
      ? Ti.createElementNS(
          (e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          t
        )
      : Ti.createElement(t);
    return i.style ? i : Ti.createElement(t);
  },
  Ki = function t(e, i, n) {
    var r = getComputedStyle(e);
    return (
      r[i] ||
      r.getPropertyValue(i.replace(Ri, "-$1").toLowerCase()) ||
      r.getPropertyValue(i) ||
      (!n && t(e, en(i) || i, 1)) ||
      ""
    );
  },
  tn = "O,Moz,ms,Ms,Webkit".split(","),
  en = function (t, e, i) {
    var n = (e || Di).style,
      r = 5;
    if (t in n && !i) return t;
    for (
      t = t.charAt(0).toUpperCase() + t.substr(1);
      r-- && !(tn[r] + t in n);

    );
    return r < 0 ? null : (3 === r ? "ms" : r >= 0 ? tn[r] : "") + t;
  },
  nn = function () {
    "undefined" != typeof window &&
      window.document &&
      ((Oi = window),
      (Ti = Oi.document),
      (Ci = Ti.documentElement),
      (Di = Zi("div") || { style: {} }),
      Zi("div"),
      ($i = en($i)),
      (Ji = $i + "Origin"),
      (Di.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Ai = !!en("perspective")),
      (Mi = 1));
  },
  rn = function t(e) {
    var i,
      n = Zi(
        "svg",
        (this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns")) ||
          "http://www.w3.org/2000/svg"
      ),
      r = this.parentNode,
      s = this.nextSibling,
      a = this.style.cssText;
    if (
      (Ci.appendChild(n),
      n.appendChild(this),
      (this.style.display = "block"),
      e)
    )
      try {
        (i = this.getBBox()),
          (this._gsapBBox = this.getBBox),
          (this.getBBox = t);
      } catch (t) {}
    else this._gsapBBox && (i = this._gsapBBox());
    return (
      r && (s ? r.insertBefore(this, s) : r.appendChild(this)),
      Ci.removeChild(n),
      (this.style.cssText = a),
      i
    );
  },
  sn = function (t, e) {
    for (var i = e.length; i--; )
      if (t.hasAttribute(e[i])) return t.getAttribute(e[i]);
  },
  an = function (t) {
    var e;
    try {
      e = t.getBBox();
    } catch (i) {
      e = rn.call(t, !0);
    }
    return (
      (e && (e.width || e.height)) || t.getBBox === rn || (e = rn.call(t, !0)),
      !e || e.width || e.x || e.y
        ? e
        : {
            x: +sn(t, ["x", "cx", "x1"]) || 0,
            y: +sn(t, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
    );
  },
  on = function (t) {
    return !(!t.getCTM || (t.parentNode && !t.ownerSVGElement) || !an(t));
  },
  ln = function (t, e) {
    if (e) {
      var i = t.style;
      e in Ei && e !== Ji && (e = $i),
        i.removeProperty
          ? (("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6)) ||
              (e = "-" + e),
            i.removeProperty(e.replace(Ri, "-$1").toLowerCase()))
          : i.removeAttribute(e);
    }
  },
  un = function (t, e, i, n, r, s) {
    var a = new vi(t._pt, e, i, 0, 1, s ? Vi : Ni);
    return (t._pt = a), (a.b = n), (a.e = r), t._props.push(i), a;
  },
  hn = { deg: 1, rad: 1, turn: 1 },
  cn = function t(e, i, n, r) {
    var s,
      a,
      o,
      l,
      u = parseFloat(n) || 0,
      h = (n + "").trim().substr((u + "").length) || "px",
      c = Di.style,
      f = Pi.test(i),
      d = "svg" === e.tagName.toLowerCase(),
      p = (d ? "client" : "offset") + (f ? "Width" : "Height"),
      m = 100,
      _ = "px" === r,
      g = "%" === r;
    return r === h || !u || hn[r] || hn[h]
      ? u
      : ("px" !== h && !_ && (u = t(e, i, n, "px")),
        (l = e.getCTM && on(e)),
        (!g && "%" !== h) || (!Ei[i] && !~i.indexOf("adius"))
          ? ((c[f ? "width" : "height"] = m + (_ ? h : r)),
            (a =
              ~i.indexOf("adius") || ("em" === r && e.appendChild && !d)
                ? e
                : e.parentNode),
            l && (a = (e.ownerSVGElement || {}).parentNode),
            (a && a !== Ti && a.appendChild) || (a = Ti.body),
            (o = a._gsap) && g && o.width && f && o.time === Re.time
              ? kt((u / o.width) * m)
              : ((g || "%" === h) && (c.position = Ki(e, "position")),
                a === e && (c.position = "static"),
                a.appendChild(Di),
                (s = Di[p]),
                a.removeChild(Di),
                (c.position = "absolute"),
                f && g && (((o = Ct(a)).time = Re.time), (o.width = a[p])),
                kt(_ ? (s * u) / m : s && u ? (m / s) * u : 0)))
          : ((s = l ? e.getBBox()[f ? "width" : "height"] : e[p]),
            kt(g ? (u / s) * m : (u / 100) * s)));
  },
  fn = function (t, e, i, n) {
    var r;
    return (
      Mi || nn(),
      e in Fi &&
        "transform" !== e &&
        ~(e = Fi[e]).indexOf(",") &&
        (e = e.split(",")[0]),
      Ei[e] && "transform" !== e
        ? ((r = On(t, n)),
          (r =
            "transformOrigin" !== e
              ? r[e]
              : r.svg
              ? r.origin
              : Tn(Ki(t, Ji)) + " " + r.zOrigin + "px"))
        : (!(r = t.style[e]) ||
            "auto" === r ||
            n ||
            ~(r + "").indexOf("calc(")) &&
          (r =
            (_n[e] && _n[e](t, e, i)) ||
            Ki(t, e) ||
            Mt(t, e) ||
            ("opacity" === e ? 1 : 0)),
      i && !~(r + "").trim().indexOf(" ") ? cn(t, e, r, i) + i : r
    );
  },
  dn = function (t, e, i, n) {
    if (!i || "none" === i) {
      var r = en(e, t, 1),
        s = r && Ki(t, r, 1);
      s && s !== i
        ? ((e = r), (i = s))
        : "borderColor" === e && (i = Ki(t, "borderTopColor"));
    }
    var a,
      o,
      l,
      u,
      h,
      c,
      f,
      d,
      p,
      m,
      _,
      g,
      v = new vi(this._pt, t.style, e, 0, 1, fi),
      y = 0,
      w = 0;
    if (
      ((v.b = i),
      (v.e = n),
      (i += ""),
      "auto" === (n += "") &&
        ((t.style[e] = n), (n = Ki(t, e) || n), (t.style[e] = i)),
      Le((a = [i, n])),
      (n = a[1]),
      (l = (i = a[0]).match(rt) || []),
      (n.match(rt) || []).length)
    ) {
      for (; (o = rt.exec(n)); )
        (f = o[0]),
          (p = n.substring(y, o.index)),
          h
            ? (h = (h + 1) % 5)
            : ("rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5)) || (h = 1),
          f !== (c = l[w++] || "") &&
            ((u = parseFloat(c) || 0),
            (_ = c.substr((u + "").length)),
            (g = "=" === f.charAt(1) ? +(f.charAt(0) + "1") : 0) &&
              (f = f.substr(2)),
            (d = parseFloat(f)),
            (m = f.substr((d + "").length)),
            (y = rt.lastIndex - m.length),
            m ||
              ((m = m || B.units[e] || _),
              y === n.length && ((n += m), (v.e += m))),
            _ !== m && (u = cn(t, e, c, m) || 0),
            (v._pt = {
              _next: v._pt,
              p: p || 1 === w ? p : ",",
              s: u,
              c: g ? g * d : d - u,
              m: (h && h < 4) || "zIndex" === e ? Math.round : 0,
            }));
      v.c = y < n.length ? n.substring(y, n.length) : "";
    } else v.r = "display" === e && "none" === n ? Vi : Ni;
    return at.test(n) && (v.e = 0), (this._pt = v), v;
  },
  pn = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  mn = function (t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
      var i,
        n,
        r,
        s = e.t,
        a = s.style,
        o = e.u,
        l = s._gsap;
      if ("all" === o || !0 === o) (a.cssText = ""), (n = 1);
      else
        for (r = (o = o.split(",")).length; --r > -1; )
          (i = o[r]),
            Ei[i] && ((n = 1), (i = "transformOrigin" === i ? Ji : $i)),
            ln(s, i);
      n &&
        (ln(s, $i),
        l &&
          (l.svg && s.removeAttribute("transform"), On(s, 1), (l.uncache = 1)));
    }
  },
  _n = {
    clearProps: function (t, e, i, n, r) {
      if ("isFromStart" !== r.data) {
        var s = (t._pt = new vi(t._pt, e, i, 0, 0, mn));
        return (s.u = n), (s.pr = -10), (s.tween = r), t._props.push(i), 1;
      }
    },
  },
  gn = [1, 0, 0, 1, 0, 0],
  vn = {},
  yn = function (t) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t;
  },
  wn = function (t) {
    var e = Ki(t, $i);
    return yn(e) ? gn : e.substr(7).match(nt).map(kt);
  },
  xn = function (t, e) {
    var i,
      n,
      r,
      s,
      a = t._gsap || Ct(t),
      o = t.style,
      l = wn(t);
    return a.svg && t.getAttribute("transform")
      ? "1,0,0,1,0,0" ===
        (l = [
          (r = t.transform.baseVal.consolidate().matrix).a,
          r.b,
          r.c,
          r.d,
          r.e,
          r.f,
        ]).join(",")
        ? gn
        : l
      : (l !== gn ||
          t.offsetParent ||
          t === Ci ||
          a.svg ||
          ((r = o.display),
          (o.display = "block"),
          ((i = t.parentNode) && t.offsetParent) ||
            ((s = 1), (n = t.nextSibling), Ci.appendChild(t)),
          (l = wn(t)),
          r ? (o.display = r) : ln(t, "display"),
          s &&
            (n
              ? i.insertBefore(t, n)
              : i
              ? i.appendChild(t)
              : Ci.removeChild(t))),
        e && l.length > 6 ? [l[0], l[1], l[4], l[5], l[12], l[13]] : l);
  },
  bn = function (t, e, i, n, r, s) {
    var a,
      o,
      l,
      u = t._gsap,
      h = r || xn(t, !0),
      c = u.xOrigin || 0,
      f = u.yOrigin || 0,
      d = u.xOffset || 0,
      p = u.yOffset || 0,
      m = h[0],
      _ = h[1],
      g = h[2],
      v = h[3],
      y = h[4],
      w = h[5],
      x = e.split(" "),
      b = parseFloat(x[0]) || 0,
      O = parseFloat(x[1]) || 0;
    i
      ? h !== gn &&
        (o = m * v - _ * g) &&
        ((l = b * (-_ / o) + O * (m / o) - (m * w - _ * y) / o),
        (b = b * (v / o) + O * (-g / o) + (g * w - v * y) / o),
        (O = l))
      : ((b = (a = an(t)).x + (~x[0].indexOf("%") ? (b / 100) * a.width : b)),
        (O = a.y + (~(x[1] || x[0]).indexOf("%") ? (O / 100) * a.height : O))),
      n || (!1 !== n && u.smooth)
        ? ((y = b - c),
          (w = O - f),
          (u.xOffset = d + (y * m + w * g) - y),
          (u.yOffset = p + (y * _ + w * v) - w))
        : (u.xOffset = u.yOffset = 0),
      (u.xOrigin = b),
      (u.yOrigin = O),
      (u.smooth = !!n),
      (u.origin = e),
      (u.originIsAbsolute = !!i),
      (t.style[Ji] = "0px 0px"),
      s &&
        (un(s, u, "xOrigin", c, b),
        un(s, u, "yOrigin", f, O),
        un(s, u, "xOffset", d, u.xOffset),
        un(s, u, "yOffset", p, u.yOffset)),
      t.setAttribute("data-svg-origin", b + " " + O);
  },
  On = function (t, e) {
    var i = t._gsap || new Xe(t);
    if ("x" in i && !e && !i.uncache) return i;
    var n,
      r,
      s,
      a,
      o,
      l,
      u,
      h,
      c,
      f,
      d,
      p,
      m,
      _,
      g,
      v,
      y,
      w,
      x,
      b,
      O,
      T,
      C,
      M,
      D,
      k,
      A,
      E,
      I,
      S,
      L,
      R,
      P = t.style,
      z = i.scaleX < 0,
      F = "px",
      q = "deg",
      j = Ki(t, Ji) || "0";
    return (
      (n = r = s = l = u = h = c = f = d = 0),
      (a = o = 1),
      (i.svg = !(!t.getCTM || !on(t))),
      (_ = xn(t, i.svg)),
      i.svg &&
        ((M =
          (!i.uncache || "0px 0px" === j) &&
          !e &&
          t.getAttribute("data-svg-origin")),
        bn(t, M || j, !!M || i.originIsAbsolute, !1 !== i.smooth, _)),
      (p = i.xOrigin || 0),
      (m = i.yOrigin || 0),
      _ !== gn &&
        ((w = _[0]),
        (x = _[1]),
        (b = _[2]),
        (O = _[3]),
        (n = T = _[4]),
        (r = C = _[5]),
        6 === _.length
          ? ((a = Math.sqrt(w * w + x * x)),
            (o = Math.sqrt(O * O + b * b)),
            (l = w || x ? Li(x, w) * Ii : 0),
            (c = b || O ? Li(b, O) * Ii + l : 0) &&
              (o *= Math.abs(Math.cos(c * Si))),
            i.svg && ((n -= p - (p * w + m * b)), (r -= m - (p * x + m * O))))
          : ((R = _[6]),
            (S = _[7]),
            (A = _[8]),
            (E = _[9]),
            (I = _[10]),
            (L = _[11]),
            (n = _[12]),
            (r = _[13]),
            (s = _[14]),
            (u = (g = Li(R, I)) * Ii),
            g &&
              ((M = T * (v = Math.cos(-g)) + A * (y = Math.sin(-g))),
              (D = C * v + E * y),
              (k = R * v + I * y),
              (A = T * -y + A * v),
              (E = C * -y + E * v),
              (I = R * -y + I * v),
              (L = S * -y + L * v),
              (T = M),
              (C = D),
              (R = k)),
            (h = (g = Li(-b, I)) * Ii),
            g &&
              ((v = Math.cos(-g)),
              (L = O * (y = Math.sin(-g)) + L * v),
              (w = M = w * v - A * y),
              (x = D = x * v - E * y),
              (b = k = b * v - I * y)),
            (l = (g = Li(x, w)) * Ii),
            g &&
              ((M = w * (v = Math.cos(g)) + x * (y = Math.sin(g))),
              (D = T * v + C * y),
              (x = x * v - w * y),
              (C = C * v - T * y),
              (w = M),
              (T = D)),
            u &&
              Math.abs(u) + Math.abs(l) > 359.9 &&
              ((u = l = 0), (h = 180 - h)),
            (a = kt(Math.sqrt(w * w + x * x + b * b))),
            (o = kt(Math.sqrt(C * C + R * R))),
            (g = Li(T, C)),
            (c = Math.abs(g) > 2e-4 ? g * Ii : 0),
            (d = L ? 1 / (L < 0 ? -L : L) : 0)),
        i.svg &&
          ((M = t.getAttribute("transform")),
          (i.forceCSS = t.setAttribute("transform", "") || !yn(Ki(t, $i))),
          M && t.setAttribute("transform", M))),
      Math.abs(c) > 90 &&
        Math.abs(c) < 270 &&
        (z
          ? ((a *= -1), (c += l <= 0 ? 180 : -180), (l += l <= 0 ? 180 : -180))
          : ((o *= -1), (c += c <= 0 ? 180 : -180))),
      (i.x =
        n -
        ((i.xPercent =
          n &&
          (i.xPercent ||
            (Math.round(t.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
          ? (t.offsetWidth * i.xPercent) / 100
          : 0) +
        F),
      (i.y =
        r -
        ((i.yPercent =
          r &&
          (i.yPercent ||
            (Math.round(t.offsetHeight / 2) === Math.round(-r) ? -50 : 0)))
          ? (t.offsetHeight * i.yPercent) / 100
          : 0) +
        F),
      (i.z = s + F),
      (i.scaleX = kt(a)),
      (i.scaleY = kt(o)),
      (i.rotation = kt(l) + q),
      (i.rotationX = kt(u) + q),
      (i.rotationY = kt(h) + q),
      (i.skewX = c + q),
      (i.skewY = f + q),
      (i.transformPerspective = d + F),
      (i.zOrigin = parseFloat(j.split(" ")[2]) || 0) && (P[Ji] = Tn(j)),
      (i.xOffset = i.yOffset = 0),
      (i.force3D = B.force3D),
      (i.renderTransform = i.svg ? kn : Ai ? Dn : Mn),
      (i.uncache = 0),
      i
    );
  },
  Tn = function (t) {
    return (t = t.split(" "))[0] + " " + t[1];
  },
  Cn = function (t, e, i) {
    var n = he(e);
    return kt(parseFloat(e) + parseFloat(cn(t, "x", i + "px", n))) + n;
  },
  Mn = function (t, e) {
    (e.z = "0px"),
      (e.rotationY = e.rotationX = "0deg"),
      (e.force3D = 0),
      Dn(t, e);
  },
  Dn = function (t, e) {
    var i = e || this,
      n = i.xPercent,
      r = i.yPercent,
      s = i.x,
      a = i.y,
      o = i.z,
      l = i.rotation,
      u = i.rotationY,
      h = i.rotationX,
      c = i.skewX,
      f = i.skewY,
      d = i.scaleX,
      p = i.scaleY,
      m = i.transformPerspective,
      _ = i.force3D,
      g = i.target,
      v = i.zOrigin,
      y = "",
      w = ("auto" === _ && t && 1 !== t) || !0 === _;
    if (v && ("0deg" !== h || "0deg" !== u)) {
      var x,
        b = parseFloat(u) * Si,
        O = Math.sin(b),
        T = Math.cos(b);
      (b = parseFloat(h) * Si),
        (x = Math.cos(b)),
        (s = Cn(g, s, O * x * -v)),
        (a = Cn(g, a, -Math.sin(b) * -v)),
        (o = Cn(g, o, T * x * -v + v));
    }
    "0px" !== m && (y += "perspective(" + m + ") "),
      (n || r) && (y += "translate(" + n + "%, " + r + "%) "),
      (w || "0px" !== s || "0px" !== a || "0px" !== o) &&
        (y +=
          "0px" !== o || w
            ? "translate3d(" + s + ", " + a + ", " + o + ") "
            : "translate(" + s + ", " + a + ") "),
      "0deg" !== l && (y += "rotate(" + l + ") "),
      "0deg" !== u && (y += "rotateY(" + u + ") "),
      "0deg" !== h && (y += "rotateX(" + h + ") "),
      ("0deg" === c && "0deg" === f) || (y += "skew(" + c + ", " + f + ") "),
      (1 === d && 1 === p) || (y += "scale(" + d + ", " + p + ") "),
      (g.style[$i] = y || "translate(0, 0)");
  },
  kn = function (t, e) {
    var i,
      n,
      r,
      s,
      a,
      o = e || this,
      l = o.xPercent,
      u = o.yPercent,
      h = o.x,
      c = o.y,
      f = o.rotation,
      d = o.skewX,
      p = o.skewY,
      m = o.scaleX,
      _ = o.scaleY,
      g = o.target,
      v = o.xOrigin,
      y = o.yOrigin,
      w = o.xOffset,
      x = o.yOffset,
      b = o.forceCSS,
      O = parseFloat(h),
      T = parseFloat(c);
    (f = parseFloat(f)),
      (d = parseFloat(d)),
      (p = parseFloat(p)) && ((d += p = parseFloat(p)), (f += p)),
      f || d
        ? ((f *= Si),
          (d *= Si),
          (i = Math.cos(f) * m),
          (n = Math.sin(f) * m),
          (r = Math.sin(f - d) * -_),
          (s = Math.cos(f - d) * _),
          d &&
            ((p *= Si),
            (a = Math.tan(d - p)),
            (r *= a = Math.sqrt(1 + a * a)),
            (s *= a),
            p &&
              ((a = Math.tan(p)), (i *= a = Math.sqrt(1 + a * a)), (n *= a))),
          (i = kt(i)),
          (n = kt(n)),
          (r = kt(r)),
          (s = kt(s)))
        : ((i = m), (s = _), (n = r = 0)),
      ((O && !~(h + "").indexOf("px")) || (T && !~(c + "").indexOf("px"))) &&
        ((O = cn(g, "x", h, "px")), (T = cn(g, "y", c, "px"))),
      (v || y || w || x) &&
        ((O = kt(O + v - (v * i + y * r) + w)),
        (T = kt(T + y - (v * n + y * s) + x))),
      (l || u) &&
        ((a = g.getBBox()),
        (O = kt(O + (l / 100) * a.width)),
        (T = kt(T + (u / 100) * a.height))),
      (a =
        "matrix(" + i + "," + n + "," + r + "," + s + "," + O + "," + T + ")"),
      g.setAttribute("transform", a),
      b && (g.style[$i] = a);
  },
  An = function (t, e, i, n, r, s) {
    var a,
      o,
      l = 360,
      u = W(r),
      h = parseFloat(r) * (u && ~r.indexOf("rad") ? Ii : 1),
      c = s ? h * s : h - n,
      f = n + c + "deg";
    return (
      u &&
        ("short" === (a = r.split("_")[1]) &&
          (c %= l) !== c % 180 &&
          (c += c < 0 ? l : -360),
        "cw" === a && c < 0
          ? (c = ((c + 36e9) % l) - ~~(c / l) * l)
          : "ccw" === a && c > 0 && (c = ((c - 36e9) % l) - ~~(c / l) * l)),
      (t._pt = o = new vi(t._pt, e, i, n, c, qi)),
      (o.e = f),
      (o.u = "deg"),
      t._props.push(i),
      o
    );
  },
  En = function (t, e) {
    for (var i in e) t[i] = e[i];
    return t;
  },
  In = function (t, e, i) {
    var n,
      r,
      s,
      a,
      o,
      l,
      u,
      h = En({}, i._gsap),
      c = i.style;
    for (r in (h.svg
      ? ((s = i.getAttribute("transform")),
        i.setAttribute("transform", ""),
        (c[$i] = e),
        (n = On(i, 1)),
        ln(i, $i),
        i.setAttribute("transform", s))
      : ((s = getComputedStyle(i)[$i]),
        (c[$i] = e),
        (n = On(i, 1)),
        (c[$i] = s)),
    Ei))
      (s = h[r]) !== (a = n[r]) &&
        "perspective,force3D,transformOrigin,svgOrigin".indexOf(r) < 0 &&
        ((o = he(s) !== (u = he(a)) ? cn(i, r, s, u) : parseFloat(s)),
        (l = parseFloat(a)),
        (t._pt = new vi(t._pt, n, r, o, l - o, Bi)),
        (t._pt.u = u || 0),
        t._props.push(r));
    En(n, h);
  };
Dt("padding,margin,Width,Radius", function (t, e) {
  var i = "Top",
    n = "Right",
    r = "Bottom",
    s = "Left",
    a = (e < 3 ? [i, n, r, s] : [i + s, i + n, r + n, r + s]).map(function (i) {
      return e < 2 ? t + i : "border" + i + t;
    });
  _n[e > 1 ? "border" + t : t] = function (t, e, i, n, r) {
    var s, o;
    if (arguments.length < 4)
      return (
        (s = a.map(function (e) {
          return fn(t, e, i);
        })),
        5 === (o = s.join(" ")).split(s[0]).length ? s[0] : o
      );
    (s = (n + "").split(" ")),
      (o = {}),
      a.forEach(function (t, e) {
        return (o[t] = s[e] = s[e] || s[((e - 1) / 2) | 0]);
      }),
      t.init(e, o, r);
  };
});
var Sn,
  Ln,
  Rn,
  Pn = {
    name: "css",
    register: nn,
    targetTest: function (t) {
      return t.style && t.nodeType;
    },
    init: function (t, e, i, n, r) {
      var s,
        a,
        o,
        l,
        u,
        h,
        c,
        f,
        d,
        p,
        m,
        _,
        g,
        v,
        y,
        w,
        x,
        b,
        O,
        T = this._props,
        C = t.style,
        M = i.vars.startAt;
      for (c in (Mi || nn(), e))
        if ("autoRound" !== c && ((a = e[c]), !yt[c] || !Ke(c, e, i, n, t, r)))
          if (
            ((u = typeof a),
            (h = _n[c]),
            "function" === u && (u = typeof (a = a.call(i, n, t, r))),
            "string" === u && ~a.indexOf("random(") && (a = we(a)),
            h)
          )
            h(this, t, c, a, i) && (y = 1);
          else if ("--" === c.substr(0, 2))
            (s = (getComputedStyle(t).getPropertyValue(c) + "").trim()),
              (a += ""),
              (Ie.lastIndex = 0),
              Ie.test(s) || ((f = he(s)), (d = he(a))),
              d ? f !== d && (s = cn(t, c, s, d) + d) : f && (a += f),
              this.add(C, "setProperty", s, a, n, r, 0, 0, c),
              T.push(c);
          else if ("undefined" !== u) {
            if (
              (M && c in M
                ? ((s =
                    "function" == typeof M[c] ? M[c].call(i, n, t, r) : M[c]),
                  c in B.units && !he(s) && (s += B.units[c]),
                  W(s) && ~s.indexOf("random(") && (s = we(s)),
                  "=" === (s + "").charAt(1) && (s = fn(t, c)))
                : (s = fn(t, c)),
              (l = parseFloat(s)),
              (p =
                "string" === u && "=" === a.charAt(1)
                  ? +(a.charAt(0) + "1")
                  : 0) && (a = a.substr(2)),
              (o = parseFloat(a)),
              c in Fi &&
                ("autoAlpha" === c &&
                  (1 === l && "hidden" === fn(t, "visibility") && o && (l = 0),
                  un(
                    this,
                    C,
                    "visibility",
                    l ? "inherit" : "hidden",
                    o ? "inherit" : "hidden",
                    !o
                  )),
                "scale" !== c &&
                  "transform" !== c &&
                  ~(c = Fi[c]).indexOf(",") &&
                  (c = c.split(",")[0])),
              (m = c in Ei))
            )
              if (
                (_ ||
                  (((g = t._gsap).renderTransform && !e.parseTransform) ||
                    On(t, e.parseTransform),
                  (v = !1 !== e.smoothOrigin && g.smooth),
                  ((_ = this._pt =
                    new vi(
                      this._pt,
                      C,
                      $i,
                      0,
                      1,
                      g.renderTransform,
                      g,
                      0,
                      -1
                    )).dep = 1)),
                "scale" === c)
              )
                (this._pt = new vi(
                  this._pt,
                  g,
                  "scaleY",
                  g.scaleY,
                  (p ? p * o : o - g.scaleY) || 0
                )),
                  T.push("scaleY", c),
                  (c += "X");
              else {
                if ("transformOrigin" === c) {
                  (x = void 0),
                    (b = void 0),
                    (O = void 0),
                    (x = (w = a).split(" ")),
                    (b = x[0]),
                    (O = x[1] || "50%"),
                    ("top" !== b &&
                      "bottom" !== b &&
                      "left" !== O &&
                      "right" !== O) ||
                      ((w = b), (b = O), (O = w)),
                    (x[0] = pn[b] || b),
                    (x[1] = pn[O] || O),
                    (a = x.join(" ")),
                    g.svg
                      ? bn(t, a, 0, v, 0, this)
                      : ((d = parseFloat(a.split(" ")[2]) || 0) !== g.zOrigin &&
                          un(this, g, "zOrigin", g.zOrigin, d),
                        un(this, C, c, Tn(s), Tn(a)));
                  continue;
                }
                if ("svgOrigin" === c) {
                  bn(t, a, 1, v, 0, this);
                  continue;
                }
                if (c in vn) {
                  An(this, g, c, l, a, p);
                  continue;
                }
                if ("smoothOrigin" === c) {
                  un(this, g, "smooth", g.smooth, a);
                  continue;
                }
                if ("force3D" === c) {
                  g[c] = a;
                  continue;
                }
                if ("transform" === c) {
                  In(this, a, t);
                  continue;
                }
              }
            else c in C || (c = en(c) || c);
            if (
              m ||
              ((o || 0 === o) && (l || 0 === l) && !zi.test(a) && c in C)
            )
              o || (o = 0),
                (f = (s + "").substr((l + "").length)) !==
                  (d = he(a) || (c in B.units ? B.units[c] : f)) &&
                  (l = cn(t, c, s, d)),
                (this._pt = new vi(
                  this._pt,
                  m ? g : C,
                  c,
                  l,
                  p ? p * o : o - l,
                  m || ("px" !== d && "zIndex" !== c) || !1 === e.autoRound
                    ? Bi
                    : Gi
                )),
                (this._pt.u = d || 0),
                f !== d && "%" !== d && ((this._pt.b = s), (this._pt.r = ji));
            else if (c in C) dn.call(this, t, c, s, a);
            else {
              if (!(c in t)) {
                ft(c, a);
                continue;
              }
              this.add(t, c, s || t[c], a, n, r);
            }
            T.push(c);
          }
      y && gi(this);
    },
    get: fn,
    aliases: Fi,
    getSetter: function (t, e, i) {
      var n = Fi[e];
      return (
        n && n.indexOf(",") < 0 && (e = n),
        e in Ei && e !== Ji && (t._gsap.x || fn(t, "x"))
          ? i && ki === i
            ? "scale" === e
              ? Xi
              : Wi
            : ((ki = i || {}), "scale" === e ? Hi : Qi)
          : t.style && !Q(t.style[e])
          ? Yi
          : ~e.indexOf("-")
          ? Ui
          : ui(t, e)
      );
    },
    core: { _removeProperty: ln, _getMatrix: xn },
  };
(bi.utils.checkPrefix = en),
  (Rn = Dt(
    (Sn = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") +
      "," +
      (Ln = "rotation,rotationX,rotationY,skewX,skewY") +
      ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
    function (t) {
      Ei[t] = 1;
    }
  )),
  Dt(Ln, function (t) {
    (B.units[t] = "deg"), (vn[t] = 1);
  }),
  (Fi[Rn[13]] = Sn + "," + Ln),
  Dt(
    "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
    function (t) {
      var e = t.split(":");
      Fi[e[1]] = Rn[e[0]];
    }
  ),
  Dt(
    "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
    function (t) {
      B.units[t] = "px";
    }
  ),
  bi.registerPlugin(Pn);
var zn = bi.registerPlugin(Pn) || bi;
zn.core.Tween;
class Fn {
  in() {
    return (
      this.outTimeline &&
        this.outTimeline.isActive() &&
        this.outTimeline.kill(),
      (this.inTimeline = zn
        .timeline({ defaults: { duration: 1.2, ease: "expo" } })
        .set(this.DOM.inner, { y: "120%", rotate: 15 })
        .to(this.DOM.inner, { y: "0%", rotate: 0, stagger: 0.03 })),
      this.inTimeline
    );
  }
  out() {
    return (
      this.inTimeline && this.inTimeline.isActive() && this.inTimeline.kill(),
      (this.outTimeline = zn
        .timeline({ defaults: { duration: 0.5, ease: "expo.in" } })
        .to(this.DOM.inner, { y: "-120%", rotate: -5, stagger: 0.03 })),
      this.outTimeline
    );
  }
  constructor(t) {
    this.DOM = {
      outer: t,
      inner: Array.isArray(t)
        ? t.map((t) => t.querySelector(".oh__inner"))
        : t.querySelector(".oh__inner"),
    };
  }
}
function Bn(t, e) {
  for (var i = 0; i < e.length; i++) {
    var n = e[i];
    (n.enumerable = n.enumerable || !1),
      (n.configurable = !0),
      "value" in n && (n.writable = !0),
      Object.defineProperty(t, n.key, n);
  }
}
function qn(t, e, i) {
  return e && Bn(t.prototype, e), i && Bn(t, i), t;
}
function jn(t, e) {
  return Object.getOwnPropertyNames(Object(t)).reduce(function (i, n) {
    var r = Object.getOwnPropertyDescriptor(Object(t), n),
      s = Object.getOwnPropertyDescriptor(Object(e), n);
    return Object.defineProperty(i, n, s || r);
  }, {});
}
function Gn(t) {
  var e = jn(t);
  return (
    (e.types || e.split) && (e.types = e.types || e.split),
    (e.absolute || e.position) &&
      (e.absolute = e.absolute || /absolute/.test(t.position)),
    e
  );
}
function Nn(t) {
  return null !== t && "object" == typeof t;
}
function Vn(t) {
  return Array.isArray(t)
    ? t
    : null == t
    ? []
    : (function (t) {
        return (
          Nn(t) &&
          (function (t) {
            return "number" == typeof t && t > -1 && t % 1 == 0;
          })(t.length)
        );
      })(t)
    ? Array.prototype.slice.call(t)
    : [t];
}
function Yn(t) {
  return Nn(t) && /^(1|3|11)$/.test(t.nodeType);
}
function Un(t) {
  return "string" == typeof t;
}
function Wn(t) {
  var e,
    i = t;
  return (
    Un(t) &&
      (i = /^(#[a-z]\w+)$/.test(t.trim())
        ? document.getElementById(t.trim().slice(1))
        : document.querySelectorAll(t)),
    ((e = i),
    Vn(e).reduce(function (t, e) {
      return t.concat(Vn(e));
    }, [])).filter(Yn)
  );
}
function Xn(t, e, i) {
  var n = {},
    r = null;
  return (
    Nn(t) &&
      ((r = t[Xn.expando] || (t[Xn.expando] = ++Xn.uid)),
      (n = Xn.cache[r] || (Xn.cache[r] = {}))),
    void 0 === i
      ? void 0 === e
        ? n
        : n[e]
      : void 0 !== e
      ? ((n[e] = i), i)
      : void 0
  );
}
function Hn(t) {
  var e = t && t[Xn.expando];
  e && (delete t[e], delete Xn.cache[e]);
}
function Qn(t, e) {
  for (var i = Vn(t), n = i.length, r = 0; r < n; r++) e(i[r], r, i);
}
(Xn.expando = "splitType".concat(1 * new Date())),
  (Xn.cache = {}),
  (Xn.uid = 0);
var $n = "[".concat("\\ud800-\\udfff", "]"),
  Jn = "["
    .concat("\\u0300-\\u036f\\ufe20-\\ufe23")
    .concat("\\u20d0-\\u20f0", "]"),
  Zn = "(?:".concat(Jn, "|").concat("\\ud83c[\\udffb-\\udfff]", ")"),
  Kn = "[^".concat("\\ud800-\\udfff", "]"),
  tr = "(?:\\ud83c[\\udde6-\\uddff]){2}",
  er = "[\\ud800-\\udbff][\\udc00-\\udfff]",
  ir = "".concat(Zn, "?"),
  nr = "[".concat("\\ufe0e\\ufe0f", "]?"),
  rr =
    nr + ir + ("(?:\\u200d(?:" + [Kn, tr, er].join("|") + ")" + nr + ir + ")*"),
  sr = "(?:".concat(
    ["".concat(Kn).concat(Jn, "?"), Jn, tr, er, $n].join("|"),
    "\n)"
  ),
  ar = RegExp(
    ""
      .concat("\\ud83c[\\udffb-\\udfff]", "(?=")
      .concat("\\ud83c[\\udffb-\\udfff]", ")|")
      .concat(sr)
      .concat(rr),
    "g"
  ),
  or = RegExp(
    "[".concat(
      [
        "\\u200d",
        "\\ud800-\\udfff",
        "\\u0300-\\u036f\\ufe20-\\ufe23",
        "\\u20d0-\\u20f0",
        "\\ufe0e\\ufe0f",
      ].join(""),
      "]"
    )
  );
function lr(t) {
  return or.test(t);
}
function ur(t) {
  return lr(t)
    ? (function (t) {
        return t.match(ar) || [];
      })(t)
    : (function (t) {
        return t.split("");
      })(t);
}
function hr(t) {
  return null == t ? "" : String(t);
}
function cr(t, e) {
  var i = document.createElement(t);
  return e
    ? (Object.keys(e).forEach(function (t) {
        var n = e[t];
        null !== n &&
          ("textContent" === t || "innerHTML" === t
            ? (i[t] = n)
            : "children" === t
            ? Qn(n, function (t) {
                Yn(t) && i.appendChild(t);
              })
            : i.setAttribute(t, String(n).trim()));
      }),
      i)
    : i;
}
var fr = {
    splitClass: "",
    lineClass: "line",
    wordClass: "word",
    charClass: "char",
    types: "lines, words, chars",
    absolute: !1,
    tagName: "div",
  },
  dr = function () {
    return document.createDocumentFragment();
  },
  pr = function (t) {
    return document.createTextNode(t);
  };
function mr(t, e) {
  var i,
    n,
    r = (function (t) {
      var e = Un(t) || Array.isArray(t) ? String(t) : "";
      return {
        lines: /line/i.test(e),
        words: /word/i.test(e),
        chars: /(char)|(character)/i.test(e),
      };
    })((e = jn(fr, e)).types),
    s = e.tagName,
    a = "B".concat(1 * new Date(), "R"),
    o = "absolute" === e.position || e.absolute,
    l = [],
    u = [];
  n = r.lines ? cr("div") : dr();
  var h = (function (t, e) {
    var i = t.textContent;
    if (e) {
      var n = t.innerHTML,
        r = document.createElement("div");
      (r.innerHTML = n.replace(/<br\s*\/?>/g, " ".concat(e, " "))),
        (i = r.textContent);
    }
    return i.replace(/\s+/g, " ").trim();
  })(t, a);
  if (
    ((i = (function (t) {
      var e =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : " ";
      return (t = t ? String(t) : "").split(e);
    })(h).reduce(function (t, i, o, l) {
      var h, c;
      return i === a
        ? (n.appendChild(cr("br")), t)
        : (r.chars &&
            ((c = (function (t) {
              var e =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : "";
              return (t = hr(t)) && Un(t) && !e && lr(t) ? ur(t) : t.split(e);
            })(i).map(function (t) {
              return cr(s, {
                class: "".concat(e.splitClass, " ").concat(e.charClass),
                style: "display: inline-block;",
                textContent: t,
              });
            })),
            (u = u.concat(c))),
          r.words || r.lines
            ? ((h = cr(s, {
                class: "".concat(e.wordClass, " ").concat(e.splitClass),
                style: "display: inline-block; position: ".concat(
                  r.words ? "relative" : "static"
                ),
                children: r.chars ? c : null,
                textContent: r.chars ? null : i,
              })),
              n.appendChild(h))
            : Qn(c, function (t) {
                n.appendChild(t);
              }),
          o !== l.length - 1 && n.appendChild(pr(" ")),
          r.words ? t.concat(h) : t);
    }, [])),
    (t.innerHTML = ""),
    t.appendChild(n),
    !o && !r.lines)
  )
    return { chars: u, words: i, lines: [] };
  var c,
    f,
    d,
    p,
    m,
    _ = [],
    g = [],
    v = Xn(t, "nodes", t.getElementsByTagName(s)),
    y = t.parentElement,
    w = t.nextElementSibling,
    x = window.getComputedStyle(t).textAlign;
  return (
    o &&
      ((p = { left: n.offsetLeft, top: n.offsetTop, width: n.offsetWidth }),
      (d = t.offsetWidth),
      (f = t.offsetHeight),
      (Xn(t).cssWidth = t.style.width),
      (Xn(t).cssHeight = t.style.height)),
    Qn(v, function (t) {
      if (t !== n) {
        var e,
          i = t.parentElement === n;
        r.lines &&
          i &&
          ((e = Xn(t, "top", t.offsetTop)) !== m && ((m = e), _.push((g = []))),
          g.push(t)),
          o &&
            ((Xn(t).top = e || t.offsetTop),
            (Xn(t).left = t.offsetLeft),
            (Xn(t).width = t.offsetWidth),
            (Xn(t).height = c || (c = t.offsetHeight)));
      }
    }),
    y && y.removeChild(t),
    r.lines &&
      ((n = dr()),
      (l = _.map(function (t) {
        var i = cr(s, {
          class: "".concat(e.splitClass, " ").concat(e.lineClass),
          style: "display: block; text-align: ".concat(x, "; width: 100%;"),
        });
        return (
          n.appendChild(i),
          o &&
            ((Xn(i).type = "line"),
            (Xn(i).top = Xn(t[0]).top),
            (Xn(i).height = c)),
          Qn(t, function (t, e, n) {
            r.words
              ? i.appendChild(t)
              : r.chars
              ? Qn(t.children, function (t) {
                  i.appendChild(t);
                })
              : i.appendChild(pr(t.textContent)),
              e !== n.length - 1 && i.appendChild(pr(" "));
          }),
          i
        );
      })),
      t.replaceChild(n, t.firstChild)),
    o &&
      ((t.style.width = "".concat(t.style.width || d, "px")),
      (t.style.height = "".concat(f, "px")),
      Qn(v, function (t) {
        var e = "line" === Xn(t).type,
          i = !e && "line" === Xn(t.parentElement).type;
        (t.style.top = "".concat(i ? 0 : Xn(t).top, "px")),
          (t.style.left = "".concat(
            e ? p.left : Xn(t).left - (i ? p.left : 0),
            "px"
          )),
          (t.style.height = "".concat(Xn(t).height, "px")),
          (t.style.width = "".concat(e ? p.width : Xn(t).width, "px")),
          (t.style.position = "absolute");
      })),
    y && (w ? y.insertBefore(t, w) : y.appendChild(t)),
    { lines: l, words: r.words ? i : [], chars: u }
  );
}
var _r = jn(fr, {}),
  gr = (function () {
    function t(e, i) {
      !(function (t, e) {
        if (!(t instanceof e))
          throw new TypeError("Cannot call a class as a function");
      })(this, t),
        (this.isSplit = !1),
        (this.settings = jn(_r, Gn(i))),
        (this.elements = Wn(e) || []),
        this.elements.length &&
          ((this.originals = this.elements.map(function (t) {
            return Xn(t, "html", Xn(t).html || t.innerHTML);
          })),
          this.settings.types && this.split());
    }
    return (
      qn(t, null, [
        {
          key: "defaults",
          get: function () {
            return _r;
          },
          set: function (t) {
            _r = jn(_r, Gn(t));
          },
        },
      ]),
      qn(t, [
        {
          key: "split",
          value: function (t) {
            var e = this;
            this.revert(),
              (this.lines = []),
              (this.words = []),
              (this.chars = []);
            var i = [window.pageXOffset, window.pageYOffset];
            void 0 !== t && (this.settings = jn(this.settings, Gn(t))),
              this.elements.forEach(function (t) {
                var i = mr(t, e.settings),
                  n = i.lines,
                  r = i.words,
                  s = i.chars;
                (e.lines = e.lines.concat(n)),
                  (e.words = e.words.concat(r)),
                  (e.chars = e.chars.concat(s)),
                  (Xn(t).isSplit = !0);
              }),
              (this.isSplit = !0),
              window.scrollTo(i[0], i[1]),
              this.elements.forEach(function (t) {
                Vn(Xn(t).nodes || []).forEach(Hn);
              });
          },
        },
        {
          key: "revert",
          value: function () {
            var t = this;
            this.isSplit &&
              ((this.lines = null), (this.words = null), (this.chars = null)),
              this.elements.forEach(function (e) {
                Xn(e).isSplit &&
                  Xn(e).html &&
                  ((e.innerHTML = Xn(e).html),
                  (e.style.height = Xn(e).cssHeight || ""),
                  (e.style.width = Xn(e).cssWidth || ""),
                  (t.isSplit = !1));
              });
          },
        },
      ]),
      t
    );
  })();
class vr {
  in() {
    return (
      (this.isVisible = !0),
      zn.killTweensOf(this.lines),
      zn
        .timeline({ defaults: { duration: 1.2, ease: "expo" } })
        .set(this.lines, { y: "150%", rotate: 15 })
        .to(this.lines, { y: "0%", rotate: 0, stagger: 0.04 })
    );
  }
  out() {
    return (
      (this.isVisible = !1),
      zn.killTweensOf(this.lines),
      zn
        .timeline({ defaults: { duration: 0.5, ease: "expo.in" } })
        .to(this.lines, { y: "-150%", rotate: -5, stagger: 0.02 })
    );
  }
  initEvents() {
    window.addEventListener("resize", () => {
      this.lines = [];
      for (const t of this.SplitTypeInstances)
        t.split(), a(t.lines, "div", "oh"), this.lines.push(t.lines);
      this.isVisible || zn.set(this.lines, { y: "-150%" });
    });
  }
  constructor(t) {
    (this.DOM = { animationElems: Array.isArray(t) ? t : [t] }),
      (this.SplitTypeInstances = []),
      (this.lines = []);
    for (const t of this.DOM.animationElems) {
      const e = new gr(t, { types: "lines" });
      a(e.lines, "div", "oh"),
        this.lines.push(e.lines),
        this.SplitTypeInstances.push(e);
    }
    this.initEvents();
  }
}
class yr {
  constructor(t) {
    o(this, "DOM", { el: null }),
      o(this, "textReveal", null),
      o(this, "textLinesReveal", null),
      (this.DOM.el = t),
      (this.DOM.nav = {
        prev: this.DOM.el.querySelector(".slide-nav__img--prev"),
        next: this.DOM.el.querySelector(".slide-nav__img--next"),
      }),
      (this.textReveal = new Fn([...this.DOM.el.querySelectorAll(".oh")])),
      (this.textLinesReveal = new vr(
        this.DOM.el.querySelector(".content__item-text")
      ));
  }
}
class wr {
  constructor(t) {
    o(this, "DOM", {
      el: null,
      inner: null,
      contentId: null,
      contentItem: null,
    }),
      (this.DOM.el = t),
      (this.DOM.inner = this.DOM.el.querySelector(".grid__cell-img-inner")),
      (this.contentId = this.DOM.inner.dataset.item),
      (this.contentItem = new yr(document.querySelector(`#${this.contentId}`)));
  }
}
const xr = document.body;
let br = s();
window.addEventListener("resize", () => (br = s()));
new (class {
  trackVisibleCells() {
    const t = new IntersectionObserver((t, e) => {
      t.forEach((t) => {
        t.intersectionRatio > 0
          ? t.target.classList.add("in-view")
          : t.target.classList.remove("in-view");
      });
    });
    this.DOM.imageCells.forEach((e) => t.observe(e));
  }
  initEvents() {
    for (const [t, e] of this.imageCellArr.entries())
      e.DOM.el.addEventListener("click", () => {
        if (!this.isGridView || this.isAnimating) return !1;
        (this.isAnimating = !0),
          (this.isGridView = !1),
          -1 !== this.currentCell &&
            this.DOM.miniGrid.cells[this.currentCell].classList.remove(
              "grid__cell--current"
            ),
          (this.currentCell = t),
          this.DOM.miniGrid.cells[this.currentCell].classList.add(
            "grid__cell--current"
          ),
          this.showContent(e);
      }),
        e.DOM.el.addEventListener("mouseenter", () => {
          if (!this.isGridView) return !1;
          zn.killTweensOf([e.DOM.el, e.DOM.inner]),
            zn
              .timeline({ defaults: { duration: 2.4, ease: "expo" } })
              .to(e.DOM.el, { scale: 0.95 }, 0)
              .to(e.DOM.inner, { scale: 1.4 }, 0);
        }),
        e.DOM.el.addEventListener("mouseleave", () => {
          if (!this.isGridView) return !1;
          zn.killTweensOf([e.DOM.el, e.DOM.inner]),
            zn
              .timeline({ defaults: { duration: 2.4, ease: "expo" } })
              .to([e.DOM.el, e.DOM.inner], { scale: 1 }, 0);
        });
    this.DOM.backCtrl.addEventListener("click", () => {
      if (this.isAnimating) return !1;
      (this.isAnimating = !0), (this.isGridView = !0), this.closeContent();
    }),
      this.DOM.miniGrid.cells.forEach((t, e) => {
        t.addEventListener("click", () => {
          if (this.isAnimating || this.currentCell === e) return !1;
          (this.isAnimating = !0), this.changeContent(e);
        });
      }),
      window.addEventListener("resize", () => {
        if (this.isGridView) return !1;
        const t = this.calcTransformImage();
        zn.set(this.imageCellArr[this.currentCell].DOM.el, {
          scale: t.scale,
          x: t.x,
          y: t.y,
        });
      });
  }
  showContent(t) {
    const e = this.calcTransformImage();
    (this.otherImageCells = this.DOM.imageCells.filter((e) => e != t.DOM.el)),
      zn.killTweensOf([t.DOM.el, t.DOM.inner, this.otherImageCells]),
      zn
        .timeline({
          defaults: { duration: 1.2, ease: "expo.inOut" },
          onStart: () => xr.classList.add("oh"),
          onComplete: () => {
            this.isAnimating = !1;
          },
        })
        .addLabel("start", 0)
        .add(() => {
          this.textReveal.out();
        }, "start")
        .set(this.DOM.el, { pointerEvents: "none" }, "start")
        .set(t.DOM.el, { zIndex: 100 }, "start")
        .set(
          [t.DOM.el, t.DOM.inner, this.otherImageCells],
          { willChange: "transform, opacity" },
          "start"
        )
        .to(
          t.DOM.el,
          {
            scale: e.scale,
            x: e.x,
            y: e.y,
            onComplete: () => zn.set(t.DOM.el, { willChange: "" }),
          },
          "start"
        )
        .to(
          t.DOM.inner,
          {
            scale: 1,
            onComplete: () => zn.set(t.DOM.inner, { willChange: "" }),
          },
          "start"
        )
        .to(
          [t.contentItem.DOM.nav.prev, t.contentItem.DOM.nav.next],
          { y: 0 },
          "start"
        )
        .to(
          this.otherImageCells,
          {
            opacity: 0,
            scale: 0.8,
            onComplete: () => zn.set(this.otherImageCells, { willChange: "" }),
            stagger: { grid: "auto", amount: 0.17, from: this.currentCell },
          },
          "start"
        )
        .addLabel("showContent", "start+=0.45")
        .to(
          this.DOM.backCtrl,
          { ease: "expo", startAt: { x: "50%" }, x: "0%", opacity: 1 },
          "showContent"
        )
        .set(this.DOM.miniGrid.el, { opacity: 1 }, "showContent")
        .set(this.DOM.miniGrid.cells, { opacity: 0 }, "showContent")
        .to(
          this.DOM.miniGrid.cells,
          {
            duration: 1,
            ease: "expo",
            opacity: 1,
            startAt: { scale: 0.8 },
            scale: 1,
            stagger: { grid: "auto", amount: 0.3, from: this.currentCell },
          },
          "showContent+=0.2"
        )
        .add(() => {
          t.contentItem.textReveal.in(),
            t.contentItem.textLinesReveal.in(),
            this.DOM.content.classList.add("content--open");
        }, "showContent")
        .add(
          () => t.contentItem.DOM.el.classList.add("content__item--current"),
          "showContent+=0.02"
        );
  }
  closeContent() {
    const t = this.imageCellArr[this.currentCell];
    (this.otherImageCells = this.DOM.imageCells.filter((e) => e != t.DOM.el)),
      zn
        .timeline({
          defaults: { duration: 1, ease: "expo.inOut" },
          onStart: () => xr.classList.remove("oh"),
          onComplete: () => {
            this.isAnimating = !1;
          },
        })
        .addLabel("start", 0)
        .to(this.DOM.backCtrl, { x: "50%", opacity: 0 }, "start")
        .to(
          this.DOM.miniGrid.cells,
          {
            duration: 0.5,
            ease: "expo.in",
            opacity: 0,
            scale: 0.8,
            stagger: { grid: "auto", amount: 0.1, from: -this.currentCell },
            onComplete: () => {
              zn.set(this.DOM.miniGrid.el, { opacity: 0 });
            },
          },
          "start"
        )
        .add(() => {
          t.contentItem.textReveal.out(),
            t.contentItem.textLinesReveal.out(),
            this.DOM.content.classList.remove("content--open");
        }, "start")
        .add(() =>
          t.contentItem.DOM.el.classList.remove("content__item--current")
        )
        .addLabel("showGrid", 0)
        .set(
          [t.DOM.el, this.otherImageCells],
          { willChange: "transform, opacity" },
          "showGrid"
        )
        .to(
          t.DOM.el,
          {
            scale: 1,
            x: 0,
            y: 0,
            onComplete: () => zn.set(t.DOM.el, { willChange: "", zIndex: 1 }),
          },
          "showGrid"
        )
        .to(t.contentItem.DOM.nav.prev, { y: "-100%" }, "showGrid")
        .to(t.contentItem.DOM.nav.next, { y: "100%" }, "showGrid")
        .to(
          this.otherImageCells,
          {
            opacity: 1,
            scale: 1,
            onComplete: () => {
              zn.set(this.otherImageCells, { willChange: "" }),
                zn.set(this.DOM.el, { pointerEvents: "auto" });
            },
            stagger: { grid: "auto", amount: 0.17, from: -this.currentCell },
          },
          "showGrid"
        )
        .add(() => {
          this.textReveal.in();
        }, "showGrid+=0.3");
  }
  changeContent(t) {
    const e = this.imageCellArr[this.currentCell],
      i = this.imageCellArr[t];
    this.DOM.miniGrid.cells[this.currentCell].classList.remove(
      "grid__cell--current"
    ),
      (this.currentCell = t),
      this.DOM.miniGrid.cells[this.currentCell].classList.add(
        "grid__cell--current"
      );
    const n = this.calcTransformImage();
    zn.timeline({
      defaults: { duration: 1, ease: "expo.inOut" },
      onComplete: () => {
        this.isAnimating = !1;
      },
    })
      .addLabel("start", 0)
      .add(e.contentItem.textReveal.out(), "start")
      .add(e.contentItem.textLinesReveal.out(), "start")
      .add(() => {
        e.contentItem.DOM.el.classList.remove("content__item--current");
      })
      .set([e.DOM.el, i.DOM.el], { willChange: "transform, opacity" }, "start")
      .to(
        e.DOM.el,
        {
          opacity: 0,
          scale: 0.8,
          x: 0,
          y: 0,
          onComplete: () => zn.set(e.DOM.el, { willChange: "", zIndex: 1 }),
        },
        "start"
      )
      .to(e.contentItem.DOM.nav.prev, { y: "-100%" }, "start")
      .to(e.contentItem.DOM.nav.next, { y: "100%" }, "start")
      .addLabel("showContent", ">-=0.4")
      .set(i.DOM.el, { zIndex: 100 }, "start")
      .to(
        i.DOM.el,
        {
          scale: n.scale,
          x: n.x,
          y: n.y,
          opacity: 1,
          onComplete: () => zn.set(i.DOM.el, { willChange: "" }),
        },
        "start"
      )
      .to(
        [i.contentItem.DOM.nav.prev, i.contentItem.DOM.nav.next],
        { ease: "expo", y: 0 },
        "showContent"
      )
      .add(() => {
        i.contentItem.textReveal.in(), i.contentItem.textLinesReveal.in();
      }, "showContent")
      .add(() => {
        i.contentItem.DOM.el.classList.add("content__item--current");
      }, "showContent+=0.02");
  }
  calcTransformImage() {
    const t = ((t) => {
      var e = t.getBoundingClientRect(),
        i = getComputedStyle(t),
        n = i.transform;
      if (n) {
        var r, s, a, o;
        if (n.startsWith("matrix3d("))
          (r = +(l = n.slice(9, -1).split(/, /))[0]),
            (s = +l[5]),
            (a = +l[12]),
            (o = +l[13]);
        else {
          if (!n.startsWith("matrix(")) return e;
          var l;
          (r = +(l = n.slice(7, -1).split(/, /))[0]),
            (s = +l[3]),
            (a = +l[4]),
            (o = +l[5]);
        }
        var u = i.transformOrigin,
          h = e.x - a - (1 - r) * parseFloat(u),
          c = e.y - o - (1 - s) * parseFloat(u.slice(u.indexOf(" ") + 1)),
          f = r ? e.width / r : t.offsetWidth,
          d = s ? e.height / s : t.offsetHeight;
        return {
          x: h,
          y: c,
          width: f,
          height: d,
          top: c,
          right: h + f,
          bottom: c + d,
          left: h,
        };
      }
      return e;
    })(this.imageCellArr[this.currentCell].DOM.el);
    return {
      scale: (0.54 * br.width) / t.width,
      x: 0.65 * br.width - (t.left + t.width / 2),
      y: 0.5 * br.height - (t.top + t.height / 2),
    };
  }
  constructor(t) {
    o(this, "DOM", {
      el: null,
      imageCells: null,
      content: null,
      backCtrl: null,
      miniGrid: { el: null, cells: null },
    }),
      o(this, "imageCellArr", []),
      o(this, "currentCell", -1),
      o(this, "isGridView", !0),
      o(this, "isAnimating", !1),
      o(this, "textReveal", null),
      (this.DOM.el = t),
      (this.DOM.imageCells = [
        ...this.DOM.el.querySelectorAll(".grid__cell-img"),
      ]),
      this.DOM.imageCells.forEach((t) => this.imageCellArr.push(new wr(t))),
      (this.DOM.content = document.querySelector(".content")),
      (this.DOM.backCtrl = this.DOM.content.querySelector(".back")),
      (this.DOM.miniGrid.el = this.DOM.content.querySelector(".grid--mini")),
      (this.DOM.miniGrid.cells = [
        ...this.DOM.miniGrid.el.querySelectorAll(".grid__cell"),
      ]),
      (this.textReveal = new Fn([...this.DOM.el.querySelectorAll(".oh")])),
      this.initEvents();
  }
})(document.querySelector(".grid--large")),
  ((t = "img") =>
    new Promise((e) => {
      r(document.querySelectorAll(t), { background: !0 }, e);
    }))(".grid__cell-img-inner, .slide-nav__img").then(() =>
    document.body.classList.remove("loading")
  );
