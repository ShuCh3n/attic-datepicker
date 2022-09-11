var Se = Object.defineProperty;
var be = (i, t, l) => t in i ? Se(i, t, { enumerable: !0, configurable: !0, writable: !0, value: l }) : i[t] = l;
var z = (i, t, l) => (be(i, typeof t != "symbol" ? t + "" : t, l), l);
import { computed as ie, inject as T, openBlock as k, createElementBlock as $, createElementVNode as _, Fragment as P, renderList as q, toDisplayString as E, normalizeClass as ve, createCommentVNode as ne, ref as N, provide as J, watch as G, resolveComponent as ae, withDirectives as re, createVNode as se, vShow as fe, resolveDirective as Ce, renderSlot as Ve, mergeProps as Oe, Transition as Ye, withCtx as Ee, createBlock as Be } from "vue";
const Re = (i) => {
  const t = [];
  for (let l = 0; l <= i.date(0).day(); l++)
    t.push(i.date(0).subtract(l, "day"));
  return t.sort((l, e) => l.date() - e.date());
}, Le = (i) => Array.from(
  {
    length: i.daysInMonth()
  },
  (t, l) => i.date(l + 1)
), pe = (i) => {
  const { instance: t, arg: l, value: e } = i;
  document.body.addEventListener("click", (c) => {
    if (t.$el.contains(c.target))
      return t.showCalendar = !0;
    t.showCalendar = t.$el.contains(c.target) || document.getElementById(e) === c.target || e === c.target;
  });
};
var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, we = { exports: {} };
(function(i, t) {
  (function(l, e) {
    i.exports = e();
  })(oe, function() {
    var l = 1e3, e = 6e4, c = 36e5, p = "millisecond", r = "second", u = "minute", D = "hour", x = "day", V = "week", o = "month", v = "quarter", O = "year", B = "date", F = "Invalid Date", H = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, le = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ce = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, W = function(m, s, n) {
      var d = String(m);
      return !d || d.length >= s ? m : "" + Array(s + 1 - d.length).join(n) + m;
    }, ue = { s: W, z: function(m) {
      var s = -m.utcOffset(), n = Math.abs(s), d = Math.floor(n / 60), a = n % 60;
      return (s <= 0 ? "+" : "-") + W(d, 2, "0") + ":" + W(a, 2, "0");
    }, m: function m(s, n) {
      if (s.date() < n.date())
        return -m(n, s);
      var d = 12 * (n.year() - s.year()) + (n.month() - s.month()), a = s.clone().add(d, o), f = n - a < 0, h = s.clone().add(d + (f ? -1 : 1), o);
      return +(-(d + (n - a) / (f ? a - h : h - a)) || 0);
    }, a: function(m) {
      return m < 0 ? Math.ceil(m) || 0 : Math.floor(m);
    }, p: function(m) {
      return { M: o, y: O, w: V, d: x, D: B, h: D, m: u, s: r, ms: p, Q: v }[m] || String(m || "").toLowerCase().replace(/s$/, "");
    }, u: function(m) {
      return m === void 0;
    } }, j = "en", R = {};
    R[j] = ce;
    var de = function(m) {
      return m instanceof ee;
    }, K = function m(s, n, d) {
      var a;
      if (!s)
        return j;
      if (typeof s == "string") {
        var f = s.toLowerCase();
        R[f] && (a = f), n && (R[f] = n, a = f);
        var h = s.split("-");
        if (!a && h.length > 1)
          return m(h[0]);
      } else {
        var w = s.name;
        R[w] = s, a = w;
      }
      return !d && a && (j = a), a || !d && j;
    }, S = function(m, s) {
      if (de(m))
        return m.clone();
      var n = typeof s == "object" ? s : {};
      return n.date = m, n.args = arguments, new ee(n);
    }, y = ue;
    y.l = K, y.i = de, y.w = function(m, s) {
      return S(m, { locale: s.$L, utc: s.$u, x: s.$x, $offset: s.$offset });
    };
    var ee = function() {
      function m(n) {
        this.$L = K(n.locale, null, !0), this.parse(n);
      }
      var s = m.prototype;
      return s.parse = function(n) {
        this.$d = function(d) {
          var a = d.date, f = d.utc;
          if (a === null)
            return new Date(NaN);
          if (y.u(a))
            return new Date();
          if (a instanceof Date)
            return new Date(a);
          if (typeof a == "string" && !/Z$/i.test(a)) {
            var h = a.match(H);
            if (h) {
              var w = h[2] - 1 || 0, M = (h[7] || "0").substring(0, 3);
              return f ? new Date(Date.UTC(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, M)) : new Date(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, M);
            }
          }
          return new Date(a);
        }(n), this.$x = n.x || {}, this.init();
      }, s.init = function() {
        var n = this.$d;
        this.$y = n.getFullYear(), this.$M = n.getMonth(), this.$D = n.getDate(), this.$W = n.getDay(), this.$H = n.getHours(), this.$m = n.getMinutes(), this.$s = n.getSeconds(), this.$ms = n.getMilliseconds();
      }, s.$utils = function() {
        return y;
      }, s.isValid = function() {
        return this.$d.toString() !== F;
      }, s.isSame = function(n, d) {
        var a = S(n);
        return this.startOf(d) <= a && a <= this.endOf(d);
      }, s.isAfter = function(n, d) {
        return S(n) < this.startOf(d);
      }, s.isBefore = function(n, d) {
        return this.endOf(d) < S(n);
      }, s.$g = function(n, d, a) {
        return y.u(n) ? this[d] : this.set(a, n);
      }, s.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, s.valueOf = function() {
        return this.$d.getTime();
      }, s.startOf = function(n, d) {
        var a = this, f = !!y.u(d) || d, h = y.p(n), w = function(U, C) {
          var I = y.w(a.$u ? Date.UTC(a.$y, C, U) : new Date(a.$y, C, U), a);
          return f ? I : I.endOf(x);
        }, M = function(U, C) {
          return y.w(a.toDate()[U].apply(a.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(C)), a);
        }, g = this.$W, b = this.$M, A = this.$D, L = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case O:
            return f ? w(1, 0) : w(31, 11);
          case o:
            return f ? w(1, b) : w(0, b + 1);
          case V:
            var X = this.$locale().weekStart || 0, Z = (g < X ? g + 7 : g) - X;
            return w(f ? A - Z : A + (6 - Z), b);
          case x:
          case B:
            return M(L + "Hours", 0);
          case D:
            return M(L + "Minutes", 1);
          case u:
            return M(L + "Seconds", 2);
          case r:
            return M(L + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, s.endOf = function(n) {
        return this.startOf(n, !1);
      }, s.$set = function(n, d) {
        var a, f = y.p(n), h = "set" + (this.$u ? "UTC" : ""), w = (a = {}, a[x] = h + "Date", a[B] = h + "Date", a[o] = h + "Month", a[O] = h + "FullYear", a[D] = h + "Hours", a[u] = h + "Minutes", a[r] = h + "Seconds", a[p] = h + "Milliseconds", a)[f], M = f === x ? this.$D + (d - this.$W) : d;
        if (f === o || f === O) {
          var g = this.clone().set(B, 1);
          g.$d[w](M), g.init(), this.$d = g.set(B, Math.min(this.$D, g.daysInMonth())).$d;
        } else
          w && this.$d[w](M);
        return this.init(), this;
      }, s.set = function(n, d) {
        return this.clone().$set(n, d);
      }, s.get = function(n) {
        return this[y.p(n)]();
      }, s.add = function(n, d) {
        var a, f = this;
        n = Number(n);
        var h = y.p(d), w = function(b) {
          var A = S(f);
          return y.w(A.date(A.date() + Math.round(b * n)), f);
        };
        if (h === o)
          return this.set(o, this.$M + n);
        if (h === O)
          return this.set(O, this.$y + n);
        if (h === x)
          return w(1);
        if (h === V)
          return w(7);
        var M = (a = {}, a[u] = e, a[D] = c, a[r] = l, a)[h] || 1, g = this.$d.getTime() + n * M;
        return y.w(g, this);
      }, s.subtract = function(n, d) {
        return this.add(-1 * n, d);
      }, s.format = function(n) {
        var d = this, a = this.$locale();
        if (!this.isValid())
          return a.invalidDate || F;
        var f = n || "YYYY-MM-DDTHH:mm:ssZ", h = y.z(this), w = this.$H, M = this.$m, g = this.$M, b = a.weekdays, A = a.months, L = function(C, I, he, te) {
          return C && (C[I] || C(d, f)) || he[I].slice(0, te);
        }, X = function(C) {
          return y.s(w % 12 || 12, C, "0");
        }, Z = a.meridiem || function(C, I, he) {
          var te = C < 12 ? "AM" : "PM";
          return he ? te.toLowerCase() : te;
        }, U = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: g + 1, MM: y.s(g + 1, 2, "0"), MMM: L(a.monthsShort, g, A, 3), MMMM: L(A, g), D: this.$D, DD: y.s(this.$D, 2, "0"), d: String(this.$W), dd: L(a.weekdaysMin, this.$W, b, 2), ddd: L(a.weekdaysShort, this.$W, b, 3), dddd: b[this.$W], H: String(w), HH: y.s(w, 2, "0"), h: X(1), hh: X(2), a: Z(w, M, !0), A: Z(w, M, !1), m: String(M), mm: y.s(M, 2, "0"), s: String(this.$s), ss: y.s(this.$s, 2, "0"), SSS: y.s(this.$ms, 3, "0"), Z: h };
        return f.replace(le, function(C, I) {
          return I || U[C] || h.replace(":", "");
        });
      }, s.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, s.diff = function(n, d, a) {
        var f, h = y.p(d), w = S(n), M = (w.utcOffset() - this.utcOffset()) * e, g = this - w, b = y.m(this, w);
        return b = (f = {}, f[O] = b / 12, f[o] = b, f[v] = b / 3, f[V] = (g - M) / 6048e5, f[x] = (g - M) / 864e5, f[D] = g / c, f[u] = g / e, f[r] = g / l, f)[h] || g, a ? b : y.a(b);
      }, s.daysInMonth = function() {
        return this.endOf(o).$D;
      }, s.$locale = function() {
        return R[this.$L];
      }, s.locale = function(n, d) {
        if (!n)
          return this.$L;
        var a = this.clone(), f = K(n, d, !0);
        return f && (a.$L = f), a;
      }, s.clone = function() {
        return y.w(this.$d, this);
      }, s.toDate = function() {
        return new Date(this.valueOf());
      }, s.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, s.toISOString = function() {
        return this.$d.toISOString();
      }, s.toString = function() {
        return this.$d.toUTCString();
      }, m;
    }(), me = ee.prototype;
    return S.prototype = me, [["$ms", p], ["$s", r], ["$m", u], ["$H", D], ["$W", x], ["$M", o], ["$y", O], ["$D", B]].forEach(function(m) {
      me[m[1]] = function(s) {
        return this.$g(s, m[0], m[1]);
      };
    }), S.extend = function(m, s) {
      return m.$i || (m(s, ee, S), m.$i = !0), S;
    }, S.locale = K, S.isDayjs = de, S.unix = function(m) {
      return S(1e3 * m);
    }, S.en = R[j], S.Ls = R, S.p = {}, S;
  });
})(we);
const Y = we.exports;
var ye = { exports: {} };
(function(i, t) {
  (function(l, e) {
    i.exports = e();
  })(oe, function() {
    return function(l, e, c) {
      var p = e.prototype, r = function(o) {
        return o && (o.indexOf ? o : o.s);
      }, u = function(o, v, O, B, F) {
        var H = o.name ? o : o.$locale(), le = r(H[v]), ce = r(H[O]), W = le || ce.map(function(j) {
          return j.slice(0, B);
        });
        if (!F)
          return W;
        var ue = H.weekStart;
        return W.map(function(j, R) {
          return W[(R + (ue || 0)) % 7];
        });
      }, D = function() {
        return c.Ls[c.locale()];
      }, x = function(o, v) {
        return o.formats[v] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(B, F, H) {
            return F || H.slice(1);
          });
        }(o.formats[v.toUpperCase()]);
      }, V = function() {
        var o = this;
        return { months: function(v) {
          return v ? v.format("MMMM") : u(o, "months");
        }, monthsShort: function(v) {
          return v ? v.format("MMM") : u(o, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return o.$locale().weekStart || 0;
        }, weekdays: function(v) {
          return v ? v.format("dddd") : u(o, "weekdays");
        }, weekdaysMin: function(v) {
          return v ? v.format("dd") : u(o, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(v) {
          return v ? v.format("ddd") : u(o, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(v) {
          return x(o.$locale(), v);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      p.localeData = function() {
        return V.bind(this)();
      }, c.localeData = function() {
        var o = D();
        return { firstDayOfWeek: function() {
          return o.weekStart || 0;
        }, weekdays: function() {
          return c.weekdays();
        }, weekdaysShort: function() {
          return c.weekdaysShort();
        }, weekdaysMin: function() {
          return c.weekdaysMin();
        }, months: function() {
          return c.months();
        }, monthsShort: function() {
          return c.monthsShort();
        }, longDateFormat: function(v) {
          return x(o, v);
        }, meridiem: o.meridiem, ordinal: o.ordinal };
      }, c.months = function() {
        return u(D(), "months");
      }, c.monthsShort = function() {
        return u(D(), "monthsShort", "months", 3);
      }, c.weekdays = function(o) {
        return u(D(), "weekdays", null, null, o);
      }, c.weekdaysShort = function(o) {
        return u(D(), "weekdaysShort", "weekdays", 3, o);
      }, c.weekdaysMin = function(o) {
        return u(D(), "weekdaysMin", "weekdays", 2, o);
      };
    };
  });
})(ye);
const Te = ye.exports;
var De = { exports: {} };
(function(i, t) {
  (function(l, e) {
    i.exports = e();
  })(oe, function() {
    return function(l, e) {
      e.prototype.weekday = function(c) {
        var p = this.$locale().weekStart || 0, r = this.$W, u = (r < p ? r + 7 : r) - p;
        return this.$utils().u(c) ? u : this.subtract(u, "day").add(c, "day");
      };
    };
  });
})(De);
const je = De.exports;
var ge = { exports: {} };
(function(i, t) {
  (function(l, e) {
    i.exports = e();
  })(oe, function() {
    return function(l, e, c) {
      e.prototype.isBetween = function(p, r, u, D) {
        var x = c(p), V = c(r), o = (D = D || "()")[0] === "(", v = D[1] === ")";
        return (o ? this.isAfter(x, u) : !this.isBefore(x, u)) && (v ? this.isBefore(V, u) : !this.isAfter(V, u)) || (o ? this.isBefore(x, u) : !this.isAfter(x, u)) && (v ? this.isAfter(V, u) : !this.isBefore(V, u));
      };
    };
  });
})(ge);
const Ae = ge.exports, Ie = () => ({
  calendar: ie(() => ({
    monthView: {
      date: (t) => Re(t).concat(Le(t))
    }
  }))
}), Q = (i, t) => {
  const l = i.__vccOpts || i;
  for (const [e, c] of t)
    l[e] = c;
  return l;
}, He = {
  name: "YearCalendar",
  setup(i, { emit: t }) {
    T("atticDatepicker");
    const l = T("calendarView");
    return {
      years: ie(() => {
        const p = [], r = parseInt(Y().add(5, "years").subtract(105, "years").format("YYYY"));
        for (let u = 0; u <= 105; u++)
          p.push(r + u);
        return p.reverse();
      }),
      selectYear: (p) => {
        l.value.date.value = l.value.date.value.year(p), t("changeView", "dates");
      },
      dayjs: Y
    };
  }
}, We = { class: "flex-1" }, ze = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" }, Ne = ["onClick"];
function Fe(i, t, l, e, c, p) {
  return k(), $("div", We, [
    _("div", ze, [
      (k(!0), $(P, null, q(e.years, (r) => (k(), $("button", {
        class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
        onClick: (u) => e.selectYear(r)
      }, E(r), 9, Ne))), 256))
    ])
  ]);
}
const _e = /* @__PURE__ */ Q(He, [["render", Fe]]), Ue = {
  name: "MonthsCalendar",
  setup(i, { emit: t }) {
    T("atticDatepicker");
    const l = T("calendarView");
    return {
      selectMonth: (c) => {
        l.value.date.value = l.value.date.value.month(c), t("changeView", "dates");
      },
      dayjs: Y
    };
  }
}, Je = { class: "flex-1" }, Xe = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" }, Ze = ["onClick"];
function Pe(i, t, l, e, c, p) {
  return k(), $("div", Je, [
    _("div", Xe, [
      (k(), $(P, null, q(12, (r) => _("button", {
        class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
        onClick: (u) => e.selectMonth(r - 1)
      }, E(e.dayjs().month(r - 1).format("MMMM")), 9, Ze)), 64))
    ])
  ]);
}
const ke = /* @__PURE__ */ Q(Ue, [["render", Pe]]), qe = {
  name: "MonthCalendar",
  setup(i, { emit: t }) {
    const l = T("calendarView"), e = T("atticDatepicker"), c = T("showCalendar"), p = T("monthDays"), r = T("date");
    return {
      atticDatepicker: e,
      calendarView: l,
      isSameMonth: (o) => o.isSame(r.value.format("YYYY-MM"), "month"),
      isInBetweenRange: (o) => e.isRange && e.selectedDate.value && e.selectedEndDate.value && o.isBetween(e.selectedDate.value, e.selectedEndDate.value),
      isSelectedDay: (o) => e.selectedDate.value && e.selectedDate.value.isSame(o) || e.selectedEndDate.value && e.selectedEndDate.value.isSame(o),
      dayjs: Y,
      monthDays: p,
      date: r,
      selectDate: (o) => {
        e.selectDate(o), c.value = !e.ableToClose();
      }
    };
  }
}, Ge = { class: "flex-1 flex" }, Qe = /* @__PURE__ */ _("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ _("g", null, [
    /* @__PURE__ */ _("path", { d: `M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                          L213.13,222.409z` })
  ])
], -1), Ke = [
  Qe
], et = { class: "space-y-5" }, tt = { class: "text-center font-bold" }, nt = { class: "grid grid-cols-7" }, at = { class: "font-semibold text-sm text-gray-400 text-center" }, rt = { key: 0 }, st = ["onClick"], it = {
  key: 1,
  class: "h-full w-full bg-gray-100 absolute z-0"
}, ot = /* @__PURE__ */ _("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ _("g", null, [
    /* @__PURE__ */ _("path", { d: `M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z` })
  ])
], -1), lt = [
  ot
];
function ct(i, t, l, e, c, p) {
  return k(), $("div", Ge, [
    _("button", {
      type: "button",
      onClick: t[0] || (t[0] = (r) => e.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, Ke),
    _("div", et, [
      _("h2", tt, [
        _("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[1] || (t[1] = (r) => i.$emit("changeView", "months"))
        }, E(e.date.format("MMMM")), 1),
        _("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[2] || (t[2] = (r) => i.$emit("changeView", "years"))
        }, E(e.date.format("YYYY")), 1)
      ]),
      _("div", nt, [
        (k(!0), $(P, null, q(e.dayjs.weekdaysMin(), (r) => (k(), $("div", at, E(r), 1))), 256)),
        (k(!0), $(P, null, q(e.monthDays, (r) => (k(), $("div", null, [
          e.isSameMonth(r) ? (k(), $("div", rt, [
            _("div", {
              class: "mx-auto border-primary cursor-pointer font-bold text-sm relative",
              onClick: (u) => e.selectDate(r)
            }, [
              e.atticDatepicker.isRange && e.isSelectedDay(r) && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedEndDate.value ? (k(), $("div", {
                key: 0,
                class: ve(["h-full w-1/2 bg-gray-100 absolute z-0", [
                  { "right-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedDate.value.isSame(r) },
                  { "left-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedEndDate.value && e.atticDatepicker.selectedEndDate.value.isSame(r) }
                ]])
              }, null, 2)) : ne("", !0),
              e.isInBetweenRange(r) ? (k(), $("div", it)) : ne("", !0),
              _("span", {
                class: ve(["z-10 block relative text-center align-middle hover:rounded-full block w-12 h-12 text-center align-middle flex items-center justify-center", [
                  { "bg-attic-primary text-white rounded-full": e.isSelectedDay(r) },
                  { "hover:bg-gray-200": !e.isSelectedDay(r) }
                ]])
              }, E(r.format("DD")), 3)
            ], 8, st)
          ])) : ne("", !0)
        ]))), 256))
      ])
    ]),
    _("button", {
      type: "button",
      onClick: t[3] || (t[3] = (r) => e.calendarView.addMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, lt)
  ]);
}
const Me = /* @__PURE__ */ Q(qe, [["render", ct]]), ut = {
  name: "Calendar",
  props: {
    date: Object
  },
  components: {
    YearsCalendar: _e,
    MonthsCalendar: ke,
    DatesCalendar: Me
  },
  setup(i) {
    const { calendar: t } = Ie(), l = N("dates"), e = ie(() => t.value.monthView.date(i.date)), c = N(i.date);
    J("date", c), J("monthDays", e);
    const p = (r) => {
      l.value = r;
    };
    return G(() => i.date, (r, u) => {
      c.value = r;
    }), {
      displayView: l,
      changeView: p
    };
  }
};
function dt(i, t, l, e, c, p) {
  const r = ae("YearsCalendar"), u = ae("MonthsCalendar"), D = ae("DatesCalendar");
  return k(), $("div", null, [
    re(se(r, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [fe, e.displayView === "years"]
    ]),
    re(se(u, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [fe, e.displayView === "months"]
    ]),
    re(se(D, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [fe, e.displayView === "dates"]
    ])
  ]);
}
const $e = /* @__PURE__ */ Q(ut, [["render", dt]]);
class ht {
  constructor(t, l, e, c) {
    z(this, "modelValue");
    z(this, "selectedDate");
    z(this, "selectedEndDate");
    z(this, "isRange");
    z(this, "keepOpen");
    z(this, "format");
    this.modelValue = N(null), this.selectedDate = N(null), this.selectedEndDate = N(null), this.keepOpen = c, this.isRange = e, this.format = l, G(() => this.selectedDate.value, (p, r) => {
      this.getValue();
    }), G(() => this.selectedEndDate.value, (p, r) => {
      this.getValue();
    }), this.setDates(t);
  }
  setDates(t) {
    if (t) {
      if (typeof t == "string") {
        this.selectedDate.value = Y(t);
        return;
      }
      typeof t == "object" && this.isRange && (this.selectedDate.value = Y(t[0]), t.length > 1 && (this.selectedEndDate.value = Y(t[1])));
    }
  }
  selectDate(t) {
    if (!this.isRange) {
      this.selectedDate.value = t;
      return;
    }
    if (this.selectedDate.value && this.selectedEndDate.value) {
      this.selectedDate.value = t, this.selectedEndDate.value = null;
      return;
    }
    if (!this.selectedDate.value || t.diff(this.selectedDate.value, "day") < 0) {
      this.selectedDate.value = t;
      return;
    }
    t.diff(this.selectedDate.value, "day") > 0 && (this.selectedEndDate.value = t);
  }
  ableToClose() {
    return !!(!this.keepOpen && (this.isRange && this.selectedDate.value && this.selectedEndDate.value || !this.isRange));
  }
  getValue() {
    if (!this.isRange && this.selectedDate.value) {
      this.modelValue.value = this.selectedDate.value.format(this.format);
      return;
    }
    (this.selectedDate.value || this.selectedEndDate.value) && (this.modelValue.value = [this.selectedDate.value ? this.selectedDate.value.format(this.format) : null, this.selectedEndDate.value ? this.selectedEndDate.value.format(this.format) : null]);
  }
}
Y.extend(Te);
Y.extend(je);
Y.extend(Ae);
const ft = {
  name: "AtticDatepicker",
  props: {
    modelValue: Object,
    endDate: String,
    format: {
      type: String,
      default: "DD MMM YYYY"
    },
    trigger: {
      type: String,
      default: null
    },
    showXMonths: Number,
    isRange: Boolean,
    keepOpen: Boolean
  },
  components: {
    Calendar: $e,
    YearsCalendar: _e,
    MonthsCalendar: ke,
    DatesCalendar: Me
  },
  directives: {
    attic: {
      mounted: (i, t) => {
        pe(t);
      },
      updated: (i, t) => {
        pe(t);
      }
    }
  },
  setup(i, { emit: t }) {
    const l = N(!1), e = new ht(i.modelValue, i.format, i.isRange || i.isRange === "true", typeof i.keepOpen == "string" ? i.keepOpen !== "false" : i.keepOpen), c = ie(() => {
      const r = N(e.selectedDate.value ?? Y()), u = () => {
        r.value = r.value.subtract(1, "month");
      }, D = () => {
        r.value = r.value.add(1, "month");
      };
      return G(() => e.selectedDate.value, (x, V) => {
        r.value = x;
      }), {
        subtractMonth: u,
        addMonth: D,
        date: r
      };
    }), p = () => {
      e.selectedDate.value = null, l.value = !1;
    };
    return G(() => e.modelValue.value, (r, u) => {
      t("update:modelValue", r);
    }), J("atticDatepicker", e), J("showCalendar", l), J("calendarView", c), J("showXMonths", i.showXMonths), {
      clearDate: p,
      atticDatepicker: e,
      showCalendar: l,
      calendarView: c,
      dayjs: Y
    };
  }
}, mt = { class: "md:space-y-2" }, vt = { key: 0 }, pt = { key: 1 }, wt = {
  key: 2,
  class: "text-gray-400"
}, yt = {
  key: 0,
  class: "attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8"
}, Dt = { class: "md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8" };
function gt(i, t, l, e, c, p) {
  const r = ae("Calendar"), u = Ce("attic");
  return re((k(), $("div", mt, [
    Ve(i.$slots, "default", {
      value: e.atticDatepicker.modelValue.value,
      placeholder: i.$attrs.placeholder,
      clear: e.clearDate
    }, () => [
      _("div", Oe({ class: "relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow" }, i.$attrs), [
        !l.isRange && e.atticDatepicker.selectedDate.value ? (k(), $("span", vt, E(e.atticDatepicker.modelValue.value), 1)) : l.isRange && e.atticDatepicker.modelValue.value && e.atticDatepicker.modelValue.value.length > 1 ? (k(), $("span", pt, E(e.atticDatepicker.modelValue.value[0]) + " ~ " + E(e.atticDatepicker.modelValue.value[1]), 1)) : (k(), $("span", wt, E(i.$attrs.placeholder ?? "Select Date"), 1))
      ], 16)
    ]),
    se(Ye, {
      "enter-from-class": "opacity-0 translate-y-3",
      "enter-to-class": "opacity-100 translate-y-0",
      "enter-active-class": "transform transition ease-out duration-200",
      "leave-active-class": "transform transition ease-in duration-150",
      "leave-from-class": "opacity-100 translate-y-0",
      "leave-to-class": "opacity-0 translate-y-3"
    }, {
      default: Ee(() => [
        e.showCalendar ? (k(), $("div", yt, [
          _("div", Dt, [
            (k(!0), $(P, null, q(parseInt(l.showXMonths ?? 1), (D) => (k(), Be(r, {
              date: e.calendarView.date.value.add(D - 1, "month")
            }, null, 8, ["date"]))), 256))
          ]),
          _("button", {
            class: "sm:hidden w-full bg-red-500 rounded text-white font-bold p-3",
            onClick: t[0] || (t[0] = (D) => e.showCalendar = !1)
          }, " Close ")
        ])) : ne("", !0)
      ]),
      _: 1
    })
  ])), [
    [u, l.trigger, "away"]
  ]);
}
const xe = /* @__PURE__ */ Q(ft, [["render", gt]]), _t = {
  install: (i) => {
    i.component("AtticDatepicker", xe);
  }
}, $t = Object.assign(xe, _t, {
  Calendar: $e
});
export {
  $t as default
};
