var $e = Object.defineProperty;
var xe = (a, t, n) => t in a ? $e(a, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : a[t] = n;
var C = (a, t, n) => (xe(a, typeof t != "symbol" ? t + "" : t, n), n);
import { computed as ie, inject as L, openBlock as Y, createElementBlock as _, createElementVNode as M, Fragment as P, renderList as q, toDisplayString as O, normalizeClass as De, createCommentVNode as ae, ref as z, provide as J, watch as G, resolveComponent as ne, withDirectives as se, createVNode as re, vShow as he, resolveDirective as Se, renderSlot as Ce, mergeProps as Ve, Transition as Ae, withCtx as Be, createBlock as Oe } from "vue";
const Ee = (a) => {
  const t = [];
  for (let n = 0; n <= a.date(0).day(); n++)
    t.push(a.date(0).subtract(n, "day"));
  return t.sort((n, e) => n.date() - e.date());
}, je = (a) => Array.from(
  {
    length: a.daysInMonth()
  },
  (t, n) => a.date(n + 1)
), ve = (a) => {
  const { instance: t, arg: n, value: e } = a;
  document.body.addEventListener("click", (c) => {
    if (t.$el.contains(c.target))
      return t.showCalendar = !0;
    t.showCalendar = t.$el.contains(c.target) || document.getElementById(e) === c.target || e === c.target;
  });
};
var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = { exports: {} };
(function(a, t) {
  (function(n, e) {
    a.exports = e();
  })(oe, function() {
    var n = 1e3, e = 6e4, c = 36e5, p = "millisecond", i = "second", u = "minute", g = "hour", $ = "day", A = "week", l = "month", m = "quarter", B = "year", E = "date", F = "Invalid Date", W = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, le = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ce = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, N = function(D, o, s) {
      var d = String(D);
      return !d || d.length >= o ? D : "" + Array(o + 1 - d.length).join(s) + D;
    }, ue = { s: N, z: function(D) {
      var o = -D.utcOffset(), s = Math.abs(o), d = Math.floor(s / 60), r = s % 60;
      return (o <= 0 ? "+" : "-") + N(d, 2, "0") + ":" + N(r, 2, "0");
    }, m: function D(o, s) {
      if (o.date() < s.date())
        return -D(s, o);
      var d = 12 * (s.year() - o.year()) + (s.month() - o.month()), r = o.clone().add(d, l), h = s - r < 0, f = o.clone().add(d + (h ? -1 : 1), l);
      return +(-(d + (s - r) / (h ? r - f : f - r)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: l, y: B, w: A, d: $, D: E, h: g, m: u, s: i, ms: p, Q: m }[D] || String(D || "").toLowerCase().replace(/s$/, "");
    }, u: function(D) {
      return D === void 0;
    } }, T = "en", j = {};
    j[T] = ce;
    var de = function(D) {
      return D instanceof ee;
    }, K = function D(o, s, d) {
      var r;
      if (!o)
        return T;
      if (typeof o == "string") {
        var h = o.toLowerCase();
        j[h] && (r = h), s && (j[h] = s, r = h);
        var f = o.split("-");
        if (!r && f.length > 1)
          return D(f[0]);
      } else {
        var v = o.name;
        j[v] = o, r = v;
      }
      return !d && r && (T = r), r || !d && T;
    }, x = function(D, o) {
      if (de(D))
        return D.clone();
      var s = typeof o == "object" ? o : {};
      return s.date = D, s.args = arguments, new ee(s);
    }, y = ue;
    y.l = K, y.i = de, y.w = function(D, o) {
      return x(D, { locale: o.$L, utc: o.$u, x: o.$x, $offset: o.$offset });
    };
    var ee = function() {
      function D(s) {
        this.$L = K(s.locale, null, !0), this.parse(s);
      }
      var o = D.prototype;
      return o.parse = function(s) {
        this.$d = function(d) {
          var r = d.date, h = d.utc;
          if (r === null)
            return new Date(NaN);
          if (y.u(r))
            return new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var f = r.match(W);
            if (f) {
              var v = f[2] - 1 || 0, k = (f[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(f[1], v, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, k)) : new Date(f[1], v, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, k);
            }
          }
          return new Date(r);
        }(s), this.$x = s.x || {}, this.init();
      }, o.init = function() {
        var s = this.$d;
        this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
      }, o.$utils = function() {
        return y;
      }, o.isValid = function() {
        return this.$d.toString() !== F;
      }, o.isSame = function(s, d) {
        var r = x(s);
        return this.startOf(d) <= r && r <= this.endOf(d);
      }, o.isAfter = function(s, d) {
        return x(s) < this.startOf(d);
      }, o.isBefore = function(s, d) {
        return this.endOf(d) < x(s);
      }, o.$g = function(s, d, r) {
        return y.u(s) ? this[d] : this.set(r, s);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(s, d) {
        var r = this, h = !!y.u(d) || d, f = y.p(s), v = function(U, V) {
          var H = y.w(r.$u ? Date.UTC(r.$y, V, U) : new Date(r.$y, V, U), r);
          return h ? H : H.endOf($);
        }, k = function(U, V) {
          return y.w(r.toDate()[U].apply(r.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(V)), r);
        }, b = this.$W, S = this.$M, I = this.$D, R = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case B:
            return h ? v(1, 0) : v(31, 11);
          case l:
            return h ? v(1, S) : v(0, S + 1);
          case A:
            var X = this.$locale().weekStart || 0, Z = (b < X ? b + 7 : b) - X;
            return v(h ? I - Z : I + (6 - Z), S);
          case $:
          case E:
            return k(R + "Hours", 0);
          case g:
            return k(R + "Minutes", 1);
          case u:
            return k(R + "Seconds", 2);
          case i:
            return k(R + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, o.endOf = function(s) {
        return this.startOf(s, !1);
      }, o.$set = function(s, d) {
        var r, h = y.p(s), f = "set" + (this.$u ? "UTC" : ""), v = (r = {}, r[$] = f + "Date", r[E] = f + "Date", r[l] = f + "Month", r[B] = f + "FullYear", r[g] = f + "Hours", r[u] = f + "Minutes", r[i] = f + "Seconds", r[p] = f + "Milliseconds", r)[h], k = h === $ ? this.$D + (d - this.$W) : d;
        if (h === l || h === B) {
          var b = this.clone().set(E, 1);
          b.$d[v](k), b.init(), this.$d = b.set(E, Math.min(this.$D, b.daysInMonth())).$d;
        } else
          v && this.$d[v](k);
        return this.init(), this;
      }, o.set = function(s, d) {
        return this.clone().$set(s, d);
      }, o.get = function(s) {
        return this[y.p(s)]();
      }, o.add = function(s, d) {
        var r, h = this;
        s = Number(s);
        var f = y.p(d), v = function(S) {
          var I = x(h);
          return y.w(I.date(I.date() + Math.round(S * s)), h);
        };
        if (f === l)
          return this.set(l, this.$M + s);
        if (f === B)
          return this.set(B, this.$y + s);
        if (f === $)
          return v(1);
        if (f === A)
          return v(7);
        var k = (r = {}, r[u] = e, r[g] = c, r[i] = n, r)[f] || 1, b = this.$d.getTime() + s * k;
        return y.w(b, this);
      }, o.subtract = function(s, d) {
        return this.add(-1 * s, d);
      }, o.format = function(s) {
        var d = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || F;
        var h = s || "YYYY-MM-DDTHH:mm:ssZ", f = y.z(this), v = this.$H, k = this.$m, b = this.$M, S = r.weekdays, I = r.months, R = function(V, H, fe, te) {
          return V && (V[H] || V(d, h)) || fe[H].slice(0, te);
        }, X = function(V) {
          return y.s(v % 12 || 12, V, "0");
        }, Z = r.meridiem || function(V, H, fe) {
          var te = V < 12 ? "AM" : "PM";
          return fe ? te.toLowerCase() : te;
        }, U = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: b + 1, MM: y.s(b + 1, 2, "0"), MMM: R(r.monthsShort, b, I, 3), MMMM: R(I, b), D: this.$D, DD: y.s(this.$D, 2, "0"), d: String(this.$W), dd: R(r.weekdaysMin, this.$W, S, 2), ddd: R(r.weekdaysShort, this.$W, S, 3), dddd: S[this.$W], H: String(v), HH: y.s(v, 2, "0"), h: X(1), hh: X(2), a: Z(v, k, !0), A: Z(v, k, !1), m: String(k), mm: y.s(k, 2, "0"), s: String(this.$s), ss: y.s(this.$s, 2, "0"), SSS: y.s(this.$ms, 3, "0"), Z: f };
        return h.replace(le, function(V, H) {
          return H || U[V] || f.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(s, d, r) {
        var h, f = y.p(d), v = x(s), k = (v.utcOffset() - this.utcOffset()) * e, b = this - v, S = y.m(this, v);
        return S = (h = {}, h[B] = S / 12, h[l] = S, h[m] = S / 3, h[A] = (b - k) / 6048e5, h[$] = (b - k) / 864e5, h[g] = b / c, h[u] = b / e, h[i] = b / n, h)[f] || b, r ? S : y.a(S);
      }, o.daysInMonth = function() {
        return this.endOf(l).$D;
      }, o.$locale = function() {
        return j[this.$L];
      }, o.locale = function(s, d) {
        if (!s)
          return this.$L;
        var r = this.clone(), h = K(s, d, !0);
        return h && (r.$L = h), r;
      }, o.clone = function() {
        return y.w(this.$d, this);
      }, o.toDate = function() {
        return new Date(this.valueOf());
      }, o.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, o.toISOString = function() {
        return this.$d.toISOString();
      }, o.toString = function() {
        return this.$d.toUTCString();
      }, D;
    }(), me = ee.prototype;
    return x.prototype = me, [["$ms", p], ["$s", i], ["$m", u], ["$H", g], ["$W", $], ["$M", l], ["$y", B], ["$D", E]].forEach(function(D) {
      me[D[1]] = function(o) {
        return this.$g(o, D[0], D[1]);
      };
    }), x.extend = function(D, o) {
      return D.$i || (D(o, ee, x), D.$i = !0), x;
    }, x.locale = K, x.isDayjs = de, x.unix = function(D) {
      return x(1e3 * D);
    }, x.en = j[T], x.Ls = j, x.p = {}, x;
  });
})(ye);
const w = ye.exports;
var ge = { exports: {} };
(function(a, t) {
  (function(n, e) {
    a.exports = e();
  })(oe, function() {
    return function(n, e, c) {
      var p = e.prototype, i = function(l) {
        return l && (l.indexOf ? l : l.s);
      }, u = function(l, m, B, E, F) {
        var W = l.name ? l : l.$locale(), le = i(W[m]), ce = i(W[B]), N = le || ce.map(function(T) {
          return T.slice(0, E);
        });
        if (!F)
          return N;
        var ue = W.weekStart;
        return N.map(function(T, j) {
          return N[(j + (ue || 0)) % 7];
        });
      }, g = function() {
        return c.Ls[c.locale()];
      }, $ = function(l, m) {
        return l.formats[m] || function(B) {
          return B.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, F, W) {
            return F || W.slice(1);
          });
        }(l.formats[m.toUpperCase()]);
      }, A = function() {
        var l = this;
        return { months: function(m) {
          return m ? m.format("MMMM") : u(l, "months");
        }, monthsShort: function(m) {
          return m ? m.format("MMM") : u(l, "monthsShort", "months", 3);
        }, firstDayOfWeek: function() {
          return l.$locale().weekStart || 0;
        }, weekdays: function(m) {
          return m ? m.format("dddd") : u(l, "weekdays");
        }, weekdaysMin: function(m) {
          return m ? m.format("dd") : u(l, "weekdaysMin", "weekdays", 2);
        }, weekdaysShort: function(m) {
          return m ? m.format("ddd") : u(l, "weekdaysShort", "weekdays", 3);
        }, longDateFormat: function(m) {
          return $(l.$locale(), m);
        }, meridiem: this.$locale().meridiem, ordinal: this.$locale().ordinal };
      };
      p.localeData = function() {
        return A.bind(this)();
      }, c.localeData = function() {
        var l = g();
        return { firstDayOfWeek: function() {
          return l.weekStart || 0;
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
        }, longDateFormat: function(m) {
          return $(l, m);
        }, meridiem: l.meridiem, ordinal: l.ordinal };
      }, c.months = function() {
        return u(g(), "months");
      }, c.monthsShort = function() {
        return u(g(), "monthsShort", "months", 3);
      }, c.weekdays = function(l) {
        return u(g(), "weekdays", null, null, l);
      }, c.weekdaysShort = function(l) {
        return u(g(), "weekdaysShort", "weekdays", 3, l);
      }, c.weekdaysMin = function(l) {
        return u(g(), "weekdaysMin", "weekdays", 2, l);
      };
    };
  });
})(ge);
const Re = ge.exports;
var we = { exports: {} };
(function(a, t) {
  (function(n, e) {
    a.exports = e();
  })(oe, function() {
    return function(n, e) {
      e.prototype.weekday = function(c) {
        var p = this.$locale().weekStart || 0, i = this.$W, u = (i < p ? i + 7 : i) - p;
        return this.$utils().u(c) ? u : this.subtract(u, "day").add(c, "day");
      };
    };
  });
})(we);
const Le = we.exports;
var pe = { exports: {} };
(function(a, t) {
  (function(n, e) {
    a.exports = e();
  })(oe, function() {
    return function(n, e, c) {
      e.prototype.isBetween = function(p, i, u, g) {
        var $ = c(p), A = c(i), l = (g = g || "()")[0] === "(", m = g[1] === ")";
        return (l ? this.isAfter($, u) : !this.isBefore($, u)) && (m ? this.isBefore(A, u) : !this.isAfter(A, u)) || (l ? this.isBefore($, u) : !this.isAfter($, u)) && (m ? this.isAfter(A, u) : !this.isBefore(A, u));
      };
    };
  });
})(pe);
const Te = pe.exports, Ie = () => ({
  calendar: ie(() => ({
    monthView: {
      date: (t) => Ee(t).concat(je(t))
    }
  }))
}), Q = (a, t) => {
  const n = a.__vccOpts || a;
  for (const [e, c] of t)
    n[e] = c;
  return n;
}, He = {
  name: "YearCalendar",
  setup(a, { emit: t }) {
    const n = L("atticDatepicker"), e = L("calendarView");
    return {
      years: ie(() => {
        const i = [];
        for (let u = 0; u <= n.endYear - n.startYear; u++)
          i.push(n.startYear + u);
        return i.reverse();
      }),
      selectYear: (i) => {
        e.value.date.value = e.value.date.value.year(i), t("changeView", "dates");
      },
      dayjs: w
    };
  }
}, We = { class: "flex-1" }, Ne = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" }, ze = ["onClick"];
function Fe(a, t, n, e, c, p) {
  return Y(), _("div", We, [
    M("div", Ne, [
      (Y(!0), _(P, null, q(e.years, (i) => (Y(), _("button", {
        type: "button",
        class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
        onClick: (u) => e.selectYear(i)
      }, O(i), 9, ze))), 256))
    ])
  ]);
}
const be = /* @__PURE__ */ Q(He, [["render", Fe]]), Ue = {
  name: "MonthsCalendar",
  setup(a, { emit: t }) {
    L("atticDatepicker");
    const n = L("calendarView");
    return {
      selectMonth: (c) => {
        n.value.date.value = n.value.date.value.month(c), t("changeView", "dates");
      },
      dayjs: w
    };
  }
}, Je = { class: "flex-1" }, Xe = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" }, Ze = ["onClick"];
function Pe(a, t, n, e, c, p) {
  return Y(), _("div", Je, [
    M("div", Xe, [
      (Y(), _(P, null, q(12, (i) => M("button", {
        type: "button",
        class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
        onClick: (u) => e.selectMonth(i - 1)
      }, O(e.dayjs().month(i - 1).format("MMMM")), 9, Ze)), 64))
    ])
  ]);
}
const Me = /* @__PURE__ */ Q(Ue, [["render", Pe]]), qe = {
  name: "MonthCalendar",
  setup(a, { emit: t }) {
    const n = L("calendarView"), e = L("atticDatepicker"), c = L("showCalendar"), p = L("monthDays"), i = L("date");
    return {
      atticDatepicker: e,
      calendarView: n,
      isSameMonth: (l) => l.isSame(i.value.format("YYYY-MM"), "month"),
      isInBetweenRange: (l) => e.isRange && e.selectedDate.value && e.selectedEndDate.value && l.isBetween(e.selectedDate.value, e.selectedEndDate.value),
      isSelectedDay: (l) => e.selectedDate.value && e.selectedDate.value.isSame(l) || e.selectedEndDate.value && e.selectedEndDate.value.isSame(l),
      dayjs: w,
      monthDays: p,
      date: i,
      selectDate: (l) => {
        e.isDisabledDate(l) || (e.selectDate(l), c.value = !e.ableToClose());
      }
    };
  }
}, Ge = { class: "flex-1 flex" }, Qe = /* @__PURE__ */ M("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ M("g", null, [
    /* @__PURE__ */ M("path", { d: `M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                          L213.13,222.409z` })
  ])
], -1), Ke = [
  Qe
], et = { class: "space-y-5" }, tt = { class: "text-center font-bold" }, at = { class: "grid grid-cols-7" }, nt = { class: "font-semibold text-sm text-gray-400 text-center" }, st = { key: 0 }, rt = ["onClick"], it = {
  key: 1,
  class: "h-full w-full bg-gray-100 absolute z-0"
}, ot = /* @__PURE__ */ M("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ M("g", null, [
    /* @__PURE__ */ M("path", { d: `M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z` })
  ])
], -1), lt = [
  ot
];
function ct(a, t, n, e, c, p) {
  return Y(), _("div", Ge, [
    M("button", {
      type: "button",
      onClick: t[0] || (t[0] = (i) => e.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, Ke),
    M("div", et, [
      M("h2", tt, [
        M("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[1] || (t[1] = (i) => a.$emit("changeView", "months"))
        }, O(e.date.format("MMMM")), 1),
        M("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[2] || (t[2] = (i) => a.$emit("changeView", "years"))
        }, O(e.date.format("YYYY")), 1)
      ]),
      M("div", at, [
        (Y(!0), _(P, null, q(e.dayjs.weekdaysMin(), (i) => (Y(), _("div", nt, O(i), 1))), 256)),
        (Y(!0), _(P, null, q(e.monthDays, (i) => (Y(), _("div", null, [
          e.isSameMonth(i) ? (Y(), _("div", st, [
            M("div", {
              class: "mx-auto border-primary cursor-pointer font-bold text-sm relative",
              onClick: (u) => e.selectDate(i)
            }, [
              e.atticDatepicker.isRange && e.isSelectedDay(i) && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedEndDate.value ? (Y(), _("div", {
                key: 0,
                class: De(["h-full w-1/2 bg-gray-100 absolute z-0", [
                  { "right-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedDate.value.isSame(i) },
                  { "left-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedEndDate.value && e.atticDatepicker.selectedEndDate.value.isSame(i) }
                ]])
              }, null, 2)) : ae("", !0),
              e.isInBetweenRange(i) ? (Y(), _("div", it)) : ae("", !0),
              M("span", {
                class: De(["z-10 block relative text-center align-middle hover:rounded-full block w-12 h-12 text-center align-middle flex items-center justify-center", [
                  { "bg-attic-primary text-white rounded-full": e.isSelectedDay(i) },
                  { "hover:bg-gray-200": !e.isSelectedDay(i) },
                  { "cursor-not-allowed text-gray-200": e.atticDatepicker.isDisabledDate(i) }
                ]])
              }, O(i.format("DD")), 3)
            ], 8, rt)
          ])) : ae("", !0)
        ]))), 256))
      ])
    ]),
    M("button", {
      type: "button",
      onClick: t[3] || (t[3] = (i) => e.calendarView.addMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, lt)
  ]);
}
const Ye = /* @__PURE__ */ Q(qe, [["render", ct]]), ut = {
  name: "Calendar",
  props: {
    date: Object
  },
  components: {
    YearsCalendar: be,
    MonthsCalendar: Me,
    DatesCalendar: Ye
  },
  setup(a) {
    const { calendar: t } = Ie(), n = z("dates"), e = ie(() => t.value.monthView.date(a.date)), c = z(a.date);
    J("date", c), J("monthDays", e);
    const p = (i) => {
      n.value = i;
    };
    return G(() => a.date, (i, u) => {
      c.value = i;
    }), {
      displayView: n,
      changeView: p
    };
  }
}, dt = { class: "w-full" };
function ft(a, t, n, e, c, p) {
  const i = ne("YearsCalendar"), u = ne("MonthsCalendar"), g = ne("DatesCalendar");
  return Y(), _("div", dt, [
    se(re(i, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "years"]
    ]),
    se(re(u, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "months"]
    ]),
    se(re(g, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "dates"]
    ])
  ]);
}
const ke = /* @__PURE__ */ Q(ut, [["render", ft]]);
class ht {
  constructor(t, n, e, c) {
    C(this, "modelValue");
    C(this, "selectedDate");
    C(this, "selectedEndDate");
    C(this, "isRange");
    C(this, "keepOpen");
    C(this, "format");
    C(this, "disableDatesBefore");
    C(this, "disableDatesAfter");
    C(this, "disableDates");
    C(this, "enableDatesBefore");
    C(this, "enableDatesAfter");
    C(this, "enableDates");
    C(this, "startYear");
    C(this, "endYear");
    this.modelValue = z(null), this.selectedDate = z(null), this.selectedEndDate = z(null), this.keepOpen = c, this.isRange = e, this.format = n, this.disableDatesBefore = null, this.disableDatesAfter = null, this.disableDates = null, this.enableDatesBefore = null, this.enableDatesAfter = null, this.enableDates = null, this.startYear = parseInt(w().subtract(100, "years").format("YYYY")), this.endYear = parseInt(w().add(5, "years").format("YYYY")), G(() => this.selectedDate.value, (p, i) => {
      this.getValue();
    }), G(() => this.selectedEndDate.value, (p, i) => {
      this.getValue();
    }), this.setDates(t);
  }
  setDates(t) {
    if (t) {
      if (typeof t == "string") {
        this.selectedDate.value = w(t);
        return;
      }
      typeof t == "object" && this.isRange && (this.selectedDate.value = w(t[0]), t.length > 1 && (this.selectedEndDate.value = w(t[1])));
    }
  }
  selectDate(t) {
    if (!this.isDisabledDate(t)) {
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
  isDisabledDate(t) {
    let n = !1;
    return this.disableDatesBefore && (n = t.format("YYYYMMDD") < this.disableDatesBefore.format("YYYYMMDD")), this.disableDatesAfter && (n = t.format("YYYYMMDD") > this.disableDatesAfter.format("YYYYMMDD")), this.disableDates && (n = this.disableDates.filter((e) => e.constructor.name === "Array" ? e.length === 2 ? t.format("YYYYMMDD") >= e[0].format("YYYYMMDD") && t.format("YYYYMMDD") <= e[1].format("YYYYMMDD") : !1 : e.format("YYYYMMDD") === t.format("YYYYMMDD")).length > 0), this.enableDatesBefore && (n = t.format("YYYYMMDD") > this.enableDatesBefore.format("YYYYMMDD")), this.enableDatesAfter && (n = t.format("YYYYMMDD") < this.enableDatesAfter.format("YYYYMMDD")), this.enableDates && (n = this.enableDates.filter((e) => e.constructor.name === "Array" ? e.length === 2 ? t.format("YYYYMMDD") >= e[0].format("YYYYMMDD") && t.format("YYYYMMDD") <= e[1].format("YYYYMMDD") : !1 : e.format("YYYYMMDD") === t.format("YYYYMMDD")).length === 0), n;
  }
  setDisableDatesBefore(t) {
    if (typeof t == "string") {
      this.disableDatesBefore = w(t);
      return;
    }
    this.disableDatesBefore = t;
  }
  setDisableDatesAfter(t) {
    if (typeof t == "string") {
      this.disableDatesAfter = w(t);
      return;
    }
    this.disableDatesAfter = t;
  }
  setDisableDates(t) {
    this.disableDates = t.map((n) => typeof n == "string" ? w(n) : n.constructor.name === "Array" ? n.map((e) => typeof e == "string" ? w(e) : e) : n);
  }
  setEnableDatesBefore(t) {
    if (typeof t == "string") {
      this.enableDatesBefore = w(t);
      return;
    }
    this.enableDatesBefore = t;
  }
  setEnableDatesAfter(t) {
    if (typeof t == "string") {
      this.enableDatesAfter = w(t);
      return;
    }
    this.enableDatesAfter = t;
  }
  setEnableDates(t) {
    this.enableDates = t.map((n) => typeof n == "string" ? w(n) : n.constructor.name === "Array" ? n.map((e) => typeof e == "string" ? w(e) : e) : n);
  }
  setStartYear(t) {
    this.startYear = t;
  }
  setEndYear(t) {
    this.endYear = t;
  }
}
w.extend(Re);
w.extend(Le);
w.extend(Te);
const Dt = {
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
    keepOpen: Boolean,
    calendarClass: String,
    disableDatesBefore: String | w.Dayjs | null,
    disableDatesAfter: String | w.Dayjs | null,
    disableDates: Array | null,
    enableDatesBefore: String | w.Dayjs | null,
    enableDatesAfter: String | w.Dayjs | null,
    enableDates: Array | null,
    startYear: Number,
    endYear: Number
  },
  components: {
    Calendar: ke,
    YearsCalendar: be,
    MonthsCalendar: Me,
    DatesCalendar: Ye
  },
  directives: {
    attic: {
      mounted: (a, t) => {
        ve(t);
      },
      updated: (a, t) => {
        ve(t);
      }
    }
  },
  watch: {
    disableDatesBefore(a) {
      this.atticDatepicker.setDisableDatesBefore(a);
    },
    disableDatesAfter(a) {
      this.atticDatepicker.setDisableDatesAfter(a);
    },
    disableDates(a) {
      this.atticDatepicker.setDisableDates(a);
    },
    enableDatesBefore(a) {
      this.atticDatepicker.setEnableDatesBefore(a);
    },
    enableDatesAfter(a) {
      this.atticDatepicker.setEnableDatesAfter(a);
    },
    enableDates(a) {
      this.atticDatepicker.setEnableDates(a);
    }
  },
  setup(a, { emit: t }) {
    const n = z(!1), e = new ht(a.modelValue, a.format, a.isRange || a.isRange === "true", typeof a.keepOpen == "string" ? a.keepOpen !== "false" : a.keepOpen);
    a.disableDatesBefore && e.setDisableDatesBefore(a.disableDatesBefore), a.disableDatesAfter && e.setDisableDatesAfter(a.disableDatesAfter), a.disableDates && e.setDisableDates(a.disableDates), a.enableDatesBefore && e.setEnableDatesBefore(a.enableDatesBefore), a.enableDatesAfter && e.setEnableDatesAfter(a.enableDatesAfter), a.enableDates && e.setEnableDates(a.enableDates), a.startYear && e.setStartYear(parseInt(a.startYear)), a.endYear && e.setEndYear(parseInt(a.endYear));
    const c = ie(() => {
      const i = z(e.selectedDate.value ?? w()), u = () => {
        i.value = i.value.subtract(1, "month");
      }, g = () => {
        i.value = i.value.add(1, "month");
      };
      return G(() => e.selectedDate.value, ($, A) => {
        i.value = $;
      }), {
        subtractMonth: u,
        addMonth: g,
        date: i
      };
    }), p = () => {
      e.modelValue.value = a.isRange ? [] : null, e.selectedDate.value = null, e.selectedEndDate.value = null, n.value = !1;
    };
    return G(() => e.modelValue.value, (i, u) => {
      t("update:modelValue", i);
    }), J("atticDatepicker", e), J("showCalendar", n), J("calendarView", c), J("showXMonths", a.showXMonths), {
      clearDate: p,
      atticDatepicker: e,
      showCalendar: n,
      calendarView: c,
      dayjs: w
    };
  }
}, mt = { class: "md:space-y-2" }, vt = { key: 0 }, yt = { key: 1 }, gt = {
  key: 2,
  class: "text-gray-400 select-none"
}, wt = { class: "md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8" };
function pt(a, t, n, e, c, p) {
  const i = ne("Calendar"), u = Se("attic");
  return se((Y(), _("div", mt, [
    Ce(a.$slots, "default", {
      value: e.atticDatepicker.modelValue.value,
      placeholder: a.$attrs.placeholder,
      clear: e.clearDate
    }, () => [
      M("div", Ve({ class: "relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow" }, a.$attrs), [
        !n.isRange && e.atticDatepicker.selectedDate.value ? (Y(), _("span", vt, O(e.atticDatepicker.modelValue.value), 1)) : n.isRange && e.atticDatepicker.modelValue.value && e.atticDatepicker.modelValue.value.length > 1 ? (Y(), _("span", yt, O(e.atticDatepicker.modelValue.value[0]) + " ~ " + O(e.atticDatepicker.modelValue.value[1]), 1)) : (Y(), _("span", gt, O(a.$attrs.placeholder ?? "Select Date"), 1))
      ], 16)
    ]),
    re(Ae, {
      "enter-from-class": "opacity-0 translate-y-3",
      "enter-to-class": "opacity-100 translate-y-0",
      "enter-active-class": "transform transition ease-out duration-200",
      "leave-active-class": "transform transition ease-in duration-150",
      "leave-from-class": "opacity-100 translate-y-0",
      "leave-to-class": "opacity-0 translate-y-3"
    }, {
      default: Be(() => [
        e.showCalendar ? (Y(), _("div", {
          key: 0,
          class: De(n.calendarClass ?? "attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8 select-none")
        }, [
          M("div", wt, [
            (Y(!0), _(P, null, q(parseInt(n.showXMonths ?? 1), (g) => (Y(), Oe(i, {
              date: e.calendarView.date.value.add(g - 1, "month")
            }, null, 8, ["date"]))), 256))
          ]),
          M("button", {
            type: "button",
            class: "sm:hidden w-full bg-red-500 rounded text-white font-bold p-3",
            onClick: t[0] || (t[0] = (g) => e.showCalendar = !1)
          }, " Close ")
        ], 2)) : ae("", !0)
      ]),
      _: 1
    })
  ])), [
    [u, n.trigger, "away"]
  ]);
}
const _e = /* @__PURE__ */ Q(Dt, [["render", pt]]), bt = {
  install: (a) => {
    a.component("AtticDatepicker", _e);
  }
}, kt = Object.assign(_e, bt, {
  Calendar: ke
});
export {
  kt as default
};
