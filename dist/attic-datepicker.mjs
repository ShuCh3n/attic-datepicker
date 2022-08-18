var _e = Object.defineProperty;
var ke = (o, r, s) => r in o ? _e(o, r, { enumerable: !0, configurable: !0, writable: !0, value: s }) : o[r] = s;
var Z = (o, r, s) => (ke(o, typeof r != "symbol" ? r + "" : r, s), s);
import { computed as ae, inject as R, openBlock as x, createElementBlock as C, createElementVNode as _, Fragment as P, renderList as q, toDisplayString as W, normalizeClass as xe, createCommentVNode as he, ref as U, provide as F, watch as ve, resolveComponent as te, withDirectives as ne, createVNode as re, vShow as de, resolveDirective as Se, renderSlot as Ce, mergeProps as be, Transition as Ye, withCtx as Ve, createBlock as Oe, createApp as Ae } from "vue";
const Be = (o) => {
  const r = [];
  for (let s = 0; s <= o.date(0).day(); s++)
    r.push(o.date(0).subtract(s, "day"));
  return r.sort((s, e) => s.date() - e.date());
}, Ee = (o) => Array.from(
  {
    length: o.daysInMonth()
  },
  (r, s) => o.date(s + 1)
), me = (o) => {
  const { instance: r } = o;
  document.body.addEventListener("click", (s) => r.$el.contains(s.target) ? r.showCalendar = !0 : r.showCalendar = !1);
};
var se = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {}, pe = { exports: {} };
(function(o, r) {
  (function(s, e) {
    o.exports = e();
  })(se, function() {
    var s = 1e3, e = 6e4, u = 36e5, p = "millisecond", c = "second", l = "minute", D = "hour", $ = "day", b = "week", i = "month", v = "quarter", O = "year", A = "date", N = "Invalid Date", H = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, ie = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, oe = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, I = function(m, a, t) {
      var d = String(m);
      return !d || d.length >= a ? m : "" + Array(a + 1 - d.length).join(t) + m;
    }, ce = { s: I, z: function(m) {
      var a = -m.utcOffset(), t = Math.abs(a), d = Math.floor(t / 60), n = t % 60;
      return (a <= 0 ? "+" : "-") + I(d, 2, "0") + ":" + I(n, 2, "0");
    }, m: function m(a, t) {
      if (a.date() < t.date())
        return -m(t, a);
      var d = 12 * (t.year() - a.year()) + (t.month() - a.month()), n = a.clone().add(d, i), f = t - n < 0, h = a.clone().add(d + (f ? -1 : 1), i);
      return +(-(d + (t - n) / (f ? n - h : h - n)) || 0);
    }, a: function(m) {
      return m < 0 ? Math.ceil(m) || 0 : Math.floor(m);
    }, p: function(m) {
      return { M: i, y: O, w: b, d: $, D: A, h: D, m: l, s: c, ms: p, Q: v }[m] || String(m || "").toLowerCase().replace(/s$/, "");
    }, u: function(m) {
      return m === void 0;
    } }, L = "en", B = {};
    B[L] = oe;
    var le = function(m) {
      return m instanceof K;
    }, Q = function m(a, t, d) {
      var n;
      if (!a)
        return L;
      if (typeof a == "string") {
        var f = a.toLowerCase();
        B[f] && (n = f), t && (B[f] = t, n = f);
        var h = a.split("-");
        if (!n && h.length > 1)
          return m(h[0]);
      } else {
        var w = a.name;
        B[w] = a, n = w;
      }
      return !d && n && (L = n), n || !d && L;
    }, k = function(m, a) {
      if (le(m))
        return m.clone();
      var t = typeof a == "object" ? a : {};
      return t.date = m, t.args = arguments, new K(t);
    }, y = ce;
    y.l = Q, y.i = le, y.w = function(m, a) {
      return k(m, { locale: a.$L, utc: a.$u, x: a.$x, $offset: a.$offset });
    };
    var K = function() {
      function m(t) {
        this.$L = Q(t.locale, null, !0), this.parse(t);
      }
      var a = m.prototype;
      return a.parse = function(t) {
        this.$d = function(d) {
          var n = d.date, f = d.utc;
          if (n === null)
            return new Date(NaN);
          if (y.u(n))
            return new Date();
          if (n instanceof Date)
            return new Date(n);
          if (typeof n == "string" && !/Z$/i.test(n)) {
            var h = n.match(H);
            if (h) {
              var w = h[2] - 1 || 0, M = (h[7] || "0").substring(0, 3);
              return f ? new Date(Date.UTC(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, M)) : new Date(h[1], w, h[3] || 1, h[4] || 0, h[5] || 0, h[6] || 0, M);
            }
          }
          return new Date(n);
        }(t), this.$x = t.x || {}, this.init();
      }, a.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
      }, a.$utils = function() {
        return y;
      }, a.isValid = function() {
        return this.$d.toString() !== N;
      }, a.isSame = function(t, d) {
        var n = k(t);
        return this.startOf(d) <= n && n <= this.endOf(d);
      }, a.isAfter = function(t, d) {
        return k(t) < this.startOf(d);
      }, a.isBefore = function(t, d) {
        return this.endOf(d) < k(t);
      }, a.$g = function(t, d, n) {
        return y.u(t) ? this[d] : this.set(n, t);
      }, a.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, a.valueOf = function() {
        return this.$d.getTime();
      }, a.startOf = function(t, d) {
        var n = this, f = !!y.u(d) || d, h = y.p(t), w = function(z, Y) {
          var j = y.w(n.$u ? Date.UTC(n.$y, Y, z) : new Date(n.$y, Y, z), n);
          return f ? j : j.endOf($);
        }, M = function(z, Y) {
          return y.w(n.toDate()[z].apply(n.toDate("s"), (f ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(Y)), n);
        }, g = this.$W, S = this.$M, T = this.$D, E = "set" + (this.$u ? "UTC" : "");
        switch (h) {
          case O:
            return f ? w(1, 0) : w(31, 11);
          case i:
            return f ? w(1, S) : w(0, S + 1);
          case b:
            var J = this.$locale().weekStart || 0, X = (g < J ? g + 7 : g) - J;
            return w(f ? T - X : T + (6 - X), S);
          case $:
          case A:
            return M(E + "Hours", 0);
          case D:
            return M(E + "Minutes", 1);
          case l:
            return M(E + "Seconds", 2);
          case c:
            return M(E + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, a.endOf = function(t) {
        return this.startOf(t, !1);
      }, a.$set = function(t, d) {
        var n, f = y.p(t), h = "set" + (this.$u ? "UTC" : ""), w = (n = {}, n[$] = h + "Date", n[A] = h + "Date", n[i] = h + "Month", n[O] = h + "FullYear", n[D] = h + "Hours", n[l] = h + "Minutes", n[c] = h + "Seconds", n[p] = h + "Milliseconds", n)[f], M = f === $ ? this.$D + (d - this.$W) : d;
        if (f === i || f === O) {
          var g = this.clone().set(A, 1);
          g.$d[w](M), g.init(), this.$d = g.set(A, Math.min(this.$D, g.daysInMonth())).$d;
        } else
          w && this.$d[w](M);
        return this.init(), this;
      }, a.set = function(t, d) {
        return this.clone().$set(t, d);
      }, a.get = function(t) {
        return this[y.p(t)]();
      }, a.add = function(t, d) {
        var n, f = this;
        t = Number(t);
        var h = y.p(d), w = function(S) {
          var T = k(f);
          return y.w(T.date(T.date() + Math.round(S * t)), f);
        };
        if (h === i)
          return this.set(i, this.$M + t);
        if (h === O)
          return this.set(O, this.$y + t);
        if (h === $)
          return w(1);
        if (h === b)
          return w(7);
        var M = (n = {}, n[l] = e, n[D] = u, n[c] = s, n)[h] || 1, g = this.$d.getTime() + t * M;
        return y.w(g, this);
      }, a.subtract = function(t, d) {
        return this.add(-1 * t, d);
      }, a.format = function(t) {
        var d = this, n = this.$locale();
        if (!this.isValid())
          return n.invalidDate || N;
        var f = t || "YYYY-MM-DDTHH:mm:ssZ", h = y.z(this), w = this.$H, M = this.$m, g = this.$M, S = n.weekdays, T = n.months, E = function(Y, j, ue, ee) {
          return Y && (Y[j] || Y(d, f)) || ue[j].slice(0, ee);
        }, J = function(Y) {
          return y.s(w % 12 || 12, Y, "0");
        }, X = n.meridiem || function(Y, j, ue) {
          var ee = Y < 12 ? "AM" : "PM";
          return ue ? ee.toLowerCase() : ee;
        }, z = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: g + 1, MM: y.s(g + 1, 2, "0"), MMM: E(n.monthsShort, g, T, 3), MMMM: E(T, g), D: this.$D, DD: y.s(this.$D, 2, "0"), d: String(this.$W), dd: E(n.weekdaysMin, this.$W, S, 2), ddd: E(n.weekdaysShort, this.$W, S, 3), dddd: S[this.$W], H: String(w), HH: y.s(w, 2, "0"), h: J(1), hh: J(2), a: X(w, M, !0), A: X(w, M, !1), m: String(M), mm: y.s(M, 2, "0"), s: String(this.$s), ss: y.s(this.$s, 2, "0"), SSS: y.s(this.$ms, 3, "0"), Z: h };
        return f.replace(ie, function(Y, j) {
          return j || z[Y] || h.replace(":", "");
        });
      }, a.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, a.diff = function(t, d, n) {
        var f, h = y.p(d), w = k(t), M = (w.utcOffset() - this.utcOffset()) * e, g = this - w, S = y.m(this, w);
        return S = (f = {}, f[O] = S / 12, f[i] = S, f[v] = S / 3, f[b] = (g - M) / 6048e5, f[$] = (g - M) / 864e5, f[D] = g / u, f[l] = g / e, f[c] = g / s, f)[h] || g, n ? S : y.a(S);
      }, a.daysInMonth = function() {
        return this.endOf(i).$D;
      }, a.$locale = function() {
        return B[this.$L];
      }, a.locale = function(t, d) {
        if (!t)
          return this.$L;
        var n = this.clone(), f = Q(t, d, !0);
        return f && (n.$L = f), n;
      }, a.clone = function() {
        return y.w(this.$d, this);
      }, a.toDate = function() {
        return new Date(this.valueOf());
      }, a.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, a.toISOString = function() {
        return this.$d.toISOString();
      }, a.toString = function() {
        return this.$d.toUTCString();
      }, m;
    }(), fe = K.prototype;
    return k.prototype = fe, [["$ms", p], ["$s", c], ["$m", l], ["$H", D], ["$W", $], ["$M", i], ["$y", O], ["$D", A]].forEach(function(m) {
      fe[m[1]] = function(a) {
        return this.$g(a, m[0], m[1]);
      };
    }), k.extend = function(m, a) {
      return m.$i || (m(a, K, k), m.$i = !0), k;
    }, k.locale = Q, k.isDayjs = le, k.unix = function(m) {
      return k(1e3 * m);
    }, k.en = B[L], k.Ls = B, k.p = {}, k;
  });
})(pe);
const V = pe.exports;
var we = { exports: {} };
(function(o, r) {
  (function(s, e) {
    o.exports = e();
  })(se, function() {
    return function(s, e, u) {
      var p = e.prototype, c = function(i) {
        return i && (i.indexOf ? i : i.s);
      }, l = function(i, v, O, A, N) {
        var H = i.name ? i : i.$locale(), ie = c(H[v]), oe = c(H[O]), I = ie || oe.map(function(L) {
          return L.slice(0, A);
        });
        if (!N)
          return I;
        var ce = H.weekStart;
        return I.map(function(L, B) {
          return I[(B + (ce || 0)) % 7];
        });
      }, D = function() {
        return u.Ls[u.locale()];
      }, $ = function(i, v) {
        return i.formats[v] || function(O) {
          return O.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(A, N, H) {
            return N || H.slice(1);
          });
        }(i.formats[v.toUpperCase()]);
      }, b = function() {
        var i = this;
        return { months: function(v) {
          return v ? v.format("MMMM") : l(i, "months");
        }, monthsShort: function(v) {
          return v ? v.format("MMM") : l(i, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return i.$locale().weekStart || 0;
        }, weekdays: function(v) {
          return v ? v.format("dddd") : l(i, "weekdays");
        }, weekdaysMin: function(v) {
          return v ? v.format("dd") : l(i, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(v) {
          return v ? v.format("ddd") : l(i, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(v) {
          return $(i.$locale(), v);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      p.localeData = function() {
        return b.bind(this)();
      }, u.localeData = function() {
        var i = D();
        return { firstDayOfWeek: function() {
          return i.weekStart || 0;
        }, weekdays: function() {
          return u.weekdays();
        }, weekdaysShort: function() {
          return u.weekdaysShort();
        }, weekdaysMin: function() {
          return u.weekdaysMin();
        }, months: function() {
          return u.months();
        }, monthsShort: function() {
          return u.monthsShort();
        }, longDateFormat: function(v) {
          return $(i, v);
        }, meridiem: i.meridiem, ordinal: i.ordinal };
      }, u.months = function() {
        return l(D(), "months");
      }, u.monthsShort = function() {
        return l(D(), "monthsShort", "months", 3);
      }, u.weekdays = function(i) {
        return l(D(), "weekdays", null, null, i);
      }, u.weekdaysShort = function(i) {
        return l(D(), "weekdaysShort", "weekdays", 3, i);
      }, u.weekdaysMin = function(i) {
        return l(D(), "weekdaysMin", "weekdays", 2, i);
      };
    };
  });
})(we);
const Le = we.exports;
var ye = { exports: {} };
(function(o, r) {
  (function(s, e) {
    o.exports = e();
  })(se, function() {
    return function(s, e) {
      e.prototype.weekday = function(u) {
        var p = this.$locale().weekStart || 0, c = this.$W, l = (c < p ? c + 7 : c) - p;
        return this.$utils().u(u) ? l : this.subtract(l, "day").add(u, "day");
      };
    };
  });
})(ye);
const Te = ye.exports;
var De = { exports: {} };
(function(o, r) {
  (function(s, e) {
    o.exports = e();
  })(se, function() {
    return function(s, e, u) {
      e.prototype.isBetween = function(p, c, l, D) {
        var $ = u(p), b = u(c), i = (D = D || "()")[0] === "(", v = D[1] === ")";
        return (i ? this.isAfter($, l) : !this.isBefore($, l)) && (v ? this.isBefore(b, l) : !this.isAfter(b, l)) || (i ? this.isBefore($, l) : !this.isAfter($, l)) && (v ? this.isAfter(b, l) : !this.isBefore(b, l));
      };
    };
  });
})(De);
const je = De.exports, He = () => ({
  calendar: ae(() => ({
    monthView: {
      date: (r) => Be(r).concat(Ee(r))
    }
  }))
}), G = (o, r) => {
  const s = o.__vccOpts || o;
  for (const [e, u] of r)
    s[e] = u;
  return s;
}, Ie = {
  name: "YearCalendar",
  setup(o, { emit: r }) {
    const s = R("atticDatepicker");
    return {
      years: ae(() => {
        const p = [], c = parseInt(V().subtract(100, "years").format("YYYY"));
        for (let l = 0; l <= 100; l++)
          p.push(c + l);
        return p.reverse();
      }),
      selectYear: (p) => {
        s.selectedDate.value = s.selectedDate.value ? s.selectedDate.value.year(p) : V().year(p), s.selectedEndDate.value = null, r("changeView", "dates");
      },
      dayjs: V
    };
  }
}, Re = { class: "flex-1" }, We = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" }, Ne = ["onClick"];
function ze(o, r, s, e, u, p) {
  return x(), C("div", Re, [
    _("div", We, [
      (x(!0), C(P, null, q(e.years, (c) => (x(), C("button", {
        class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
        onClick: (l) => e.selectYear(c)
      }, W(c), 9, Ne))), 256))
    ])
  ]);
}
const ge = /* @__PURE__ */ G(Ie, [["render", ze]]), Fe = {
  name: "MonthsCalendar",
  setup(o, { emit: r }) {
    const s = R("atticDatepicker");
    return {
      selectMonth: (u) => {
        s.selectedDate.value = s.selectedDate.value ? s.selectedDate.value.month(u) : V().month(u), s.selectedEndDate.value = null, r("changeView", "dates");
      },
      dayjs: V
    };
  }
}, Ue = { class: "flex-1" }, Je = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" }, Xe = ["onClick"];
function Ze(o, r, s, e, u, p) {
  return x(), C("div", Ue, [
    _("div", Je, [
      (x(), C(P, null, q(12, (c) => _("button", {
        class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
        onClick: (l) => e.selectMonth(c - 1)
      }, W(e.dayjs().month(c - 1).format("MMMM")), 9, Xe)), 64))
    ])
  ]);
}
const $e = /* @__PURE__ */ G(Fe, [["render", Ze]]), Pe = {
  name: "MonthCalendar",
  setup(o, { emit: r }) {
    const s = R("calendarView"), e = R("atticDatepicker"), u = R("showCalendar"), p = R("monthDays"), c = R("date");
    return {
      atticDatepicker: e,
      calendarView: s,
      isSameMonth: (i) => i.isSame(c.value.format("YYYY-MM"), "month"),
      isInBetweenRange: (i) => e.isRange && e.selectedDate.value && e.selectedEndDate.value && i.isBetween(e.selectedDate.value, e.selectedEndDate.value),
      isSelectedDay: (i) => e.selectedDate.value && e.selectedDate.value.isSame(i) || e.selectedEndDate.value && e.selectedEndDate.value.isSame(i),
      dayjs: V,
      monthDays: p,
      date: c,
      selectDate: (i) => {
        e.selectDate(i), u.value = !e.ableToClose();
      }
    };
  }
}, qe = { class: "flex-1 flex" }, Ge = /* @__PURE__ */ _("svg", {
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
], -1), Qe = [
  Ge
], Ke = { class: "space-y-5" }, et = { class: "text-center font-bold" }, tt = { class: "grid grid-cols-7" }, nt = { class: "font-semibold text-sm text-gray-400 text-center" }, rt = ["onClick"], at = /* @__PURE__ */ _("svg", {
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
], -1), st = [
  at
];
function it(o, r, s, e, u, p) {
  return x(), C("div", qe, [
    _("button", {
      onClick: r[0] || (r[0] = (c) => e.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, Qe),
    _("div", Ke, [
      _("h2", et, [
        _("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: r[1] || (r[1] = (c) => o.$emit("changeView", "months"))
        }, W(e.date.format("MMMM")), 1),
        _("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: r[2] || (r[2] = (c) => o.$emit("changeView", "years"))
        }, W(e.date.format("YYYY")), 1)
      ]),
      _("div", tt, [
        (x(!0), C(P, null, q(e.dayjs.weekdaysMin(), (c) => (x(), C("div", nt, W(c), 1))), 256)),
        (x(!0), C(P, null, q(e.monthDays, (c) => (x(), C("div", null, [
          e.isSameMonth(c) ? (x(), C("div", {
            key: 0,
            class: xe([
              { "bg-attic-primary text-white": e.isSelectedDay(c) },
              { "rounded-full": !e.atticDatepicker.isRange },
              { "rounded-l-full": e.atticDatepicker.isRange && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedDate.value.isSame(c) },
              { "rounded-r-full": e.atticDatepicker.isRange && e.atticDatepicker.selectedEndDate.value && e.atticDatepicker.selectedEndDate.value.isSame(c) },
              { "bg-gray-100 rounded-none": e.isInBetweenRange(c) }
            ])
          }, [
            _("div", {
              class: "hover:border hover:rounded-full mx-auto border-primary cursor-pointer flex justify-center items-center font-bold text-sm w-12 h-12",
              onClick: (l) => e.selectDate(c)
            }, [
              _("span", null, W(c.format("DD")), 1)
            ], 8, rt)
          ], 2)) : he("", !0)
        ]))), 256))
      ])
    ]),
    _("button", {
      onClick: r[3] || (r[3] = (c) => e.calendarView.addMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, st)
  ]);
}
const Me = /* @__PURE__ */ G(Pe, [["render", it]]), ot = {
  name: "Calendar",
  props: {
    date: Object
  },
  components: {
    YearsCalendar: ge,
    MonthsCalendar: $e,
    DatesCalendar: Me
  },
  setup(o) {
    const { calendar: r } = He(), s = U("dates"), e = ae(() => r.value.monthView.date(o.date)), u = U(o.date);
    F("date", u), F("monthDays", e);
    const p = (c) => {
      s.value = c;
    };
    return ve(() => o.date, (c, l) => {
      u.value = c;
    }), {
      displayView: s,
      changeView: p
    };
  }
};
function ct(o, r, s, e, u, p) {
  const c = te("YearsCalendar"), l = te("MonthsCalendar"), D = te("DatesCalendar");
  return x(), C("div", null, [
    ne(re(c, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [de, e.displayView === "years"]
    ]),
    ne(re(l, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [de, e.displayView === "months"]
    ]),
    ne(re(D, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [de, e.displayView === "dates"]
    ])
  ]);
}
const lt = /* @__PURE__ */ G(ot, [["render", ct]]);
class ut {
  constructor(r, s, e, u) {
    Z(this, "selectedDate");
    Z(this, "selectedEndDate");
    Z(this, "isRange");
    Z(this, "autoApply");
    this.selectedDate = U(r ? V(r) : null), this.selectedEndDate = U(null), this.autoApply = u, this.isRange = e, e && (this.selectedEndDate.value = s ? V(s) : null);
  }
  selectDate(r) {
    if (!this.isRange) {
      this.selectedDate.value = r;
      return;
    }
    if (this.selectedDate.value && this.selectedEndDate.value) {
      this.selectedDate.value = r, this.selectedEndDate.value = null;
      return;
    }
    if (!this.selectedDate.value || r.diff(this.selectedDate.value, "day") < 0) {
      this.selectedDate.value = r;
      return;
    }
    r.diff(this.selectedDate.value, "day") > 0 && (this.selectedEndDate.value = r);
  }
  ableToClose() {
    return !!(this.autoApply && (this.isRange && this.selectedDate.value && this.selectedEndDate.value || !this.isRange));
  }
}
V.extend(Le);
V.extend(Te);
V.extend(je);
const dt = {
  name: "AtticDatepicker",
  props: {
    date: String,
    endDate: String,
    format: {
      type: String,
      default: "DD MMM YYYY"
    },
    showXMonths: Number,
    isRange: Boolean,
    autoApply: Boolean
  },
  components: {
    Calendar: lt,
    YearsCalendar: ge,
    MonthsCalendar: $e,
    DatesCalendar: Me
  },
  directives: {
    attic: {
      mounted: (o, r) => {
        me(r);
      },
      updated: (o, r) => {
        me(r);
      }
    }
  },
  setup(o) {
    var p, c;
    const r = U(!1), s = new ut((p = o.date) != null ? p : null, (c = o.endDate) != null ? c : null, !0, o.autoApply === "true"), e = ae(() => {
      const l = U(o.date ? V(o.date) : V()), D = () => {
        l.value = l.value.subtract(1, "month");
      }, $ = () => {
        l.value = l.value.add(1, "month");
      };
      return ve(() => s.selectedDate.value, (b, i) => {
        l.value = b;
      }), {
        subtractMonth: D,
        addMonth: $,
        date: l
      };
    }), u = () => {
      s.selectedDate.value = null, r.value = !1;
    };
    return F("atticDatepicker", s), F("showCalendar", r), F("calendarView", e), F("showXMonths", o.showXMonths), {
      clearDate: u,
      atticDatepicker: s,
      showCalendar: r,
      calendarView: e,
      dayjs: V
    };
  }
}, ht = { class: "space-y-2 relative" }, ft = { key: 0 }, mt = {
  key: 0,
  class: "attic-datepicker-calendar absolute bg-white rounded-[28px] border py-5 px-6 shadow-xl flex items-start space-x-3 z-[99] min-w-0"
};
function vt(o, r, s, e, u, p) {
  const c = te("Calendar"), l = Se("attic");
  return ne((x(), C("div", ht, [
    Ce(o.$slots, "default", {
      value: e.atticDatepicker.selectedDate.value ? e.atticDatepicker.selectedDate.value.format(s.format) : null,
      placeholder: o.$attrs.placeholder,
      clear: e.clearDate
    }, () => [
      _("div", be({ class: "relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none dark:focus:ring-opacity-20" }, o.$attrs), [
        e.atticDatepicker.selectedDate.value ? (x(), C("span", ft, W(e.atticDatepicker.selectedDate.value.format(s.format)), 1)) : he("", !0)
      ], 16)
    ]),
    re(Ye, {
      "enter-from-class": "opacity-0 translate-y-3",
      "enter-to-class": "opacity-100 translate-y-0",
      "enter-active-class": "transform transition ease-out duration-200",
      "leave-active-class": "transform transition ease-in duration-150",
      "leave-from-class": "opacity-100 translate-y-0",
      "leave-to-class": "opacity-0 translate-y-3"
    }, {
      default: Ve(() => {
        var D;
        return [
          e.showCalendar ? (x(), C("div", mt, [
            (x(!0), C(P, null, q(parseInt((D = s.showXMonths) != null ? D : 1), ($) => (x(), Oe(c, {
              date: e.calendarView.date.value.add($ - 1, "month")
            }, null, 8, ["date"]))), 256))
          ])) : he("", !0)
        ];
      }),
      _: 1
    })
  ])), [
    [l]
  ]);
}
const pt = /* @__PURE__ */ G(dt, [["render", vt]]);
Ae(pt).mount("#app");
