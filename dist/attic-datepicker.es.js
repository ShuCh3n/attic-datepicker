var $e = Object.defineProperty;
var xe = (n, t, a) => t in n ? $e(n, t, { enumerable: !0, configurable: !0, writable: !0, value: a }) : n[t] = a;
var A = (n, t, a) => (xe(n, typeof t != "symbol" ? t + "" : t, a), a);
import { computed as ie, inject as L, openBlock as Y, createElementBlock as _, createElementVNode as b, Fragment as P, renderList as q, toDisplayString as O, normalizeClass as De, createCommentVNode as ne, ref as N, provide as J, watch as G, resolveComponent as ae, withDirectives as se, createVNode as re, vShow as he, resolveDirective as Se, renderSlot as Ce, mergeProps as Ve, Transition as Ae, withCtx as Be, createBlock as Oe } from "vue";
const Ee = (n) => {
  const t = [];
  for (let a = 0; a <= n.date(0).day(); a++)
    t.push(n.date(0).subtract(a, "day"));
  return t.sort((a, e) => a.date() - e.date());
}, je = (n) => Array.from(
  {
    length: n.daysInMonth()
  },
  (t, a) => n.date(a + 1)
), ve = (n) => {
  const { instance: t, arg: a, value: e } = n;
  document.body.addEventListener("click", (c) => {
    if (t.$el.contains(c.target))
      return t.showCalendar = !0;
    t.showCalendar = t.$el.contains(c.target) || document.getElementById(e) === c.target || e === c.target;
  });
};
var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, ye = { exports: {} };
(function(n, t) {
  (function(a, e) {
    n.exports = e();
  })(oe, function() {
    var a = 1e3, e = 6e4, c = 36e5, v = "millisecond", i = "second", u = "minute", w = "hour", $ = "day", V = "week", l = "month", m = "quarter", B = "year", E = "date", F = "Invalid Date", W = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, le = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, ce = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_") }, z = function(D, o, s) {
      var d = String(D);
      return !d || d.length >= o ? D : "" + Array(o + 1 - d.length).join(s) + D;
    }, ue = { s: z, z: function(D) {
      var o = -D.utcOffset(), s = Math.abs(o), d = Math.floor(s / 60), r = s % 60;
      return (o <= 0 ? "+" : "-") + z(d, 2, "0") + ":" + z(r, 2, "0");
    }, m: function D(o, s) {
      if (o.date() < s.date())
        return -D(s, o);
      var d = 12 * (s.year() - o.year()) + (s.month() - o.month()), r = o.clone().add(d, l), h = s - r < 0, f = o.clone().add(d + (h ? -1 : 1), l);
      return +(-(d + (s - r) / (h ? r - f : f - r)) || 0);
    }, a: function(D) {
      return D < 0 ? Math.ceil(D) || 0 : Math.floor(D);
    }, p: function(D) {
      return { M: l, y: B, w: V, d: $, D: E, h: w, m: u, s: i, ms: v, Q: m }[D] || String(D || "").toLowerCase().replace(/s$/, "");
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
        var y = o.name;
        j[y] = o, r = y;
      }
      return !d && r && (T = r), r || !d && T;
    }, x = function(D, o) {
      if (de(D))
        return D.clone();
      var s = typeof o == "object" ? o : {};
      return s.date = D, s.args = arguments, new ee(s);
    }, g = ue;
    g.l = K, g.i = de, g.w = function(D, o) {
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
          if (g.u(r))
            return new Date();
          if (r instanceof Date)
            return new Date(r);
          if (typeof r == "string" && !/Z$/i.test(r)) {
            var f = r.match(W);
            if (f) {
              var y = f[2] - 1 || 0, k = (f[7] || "0").substring(0, 3);
              return h ? new Date(Date.UTC(f[1], y, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, k)) : new Date(f[1], y, f[3] || 1, f[4] || 0, f[5] || 0, f[6] || 0, k);
            }
          }
          return new Date(r);
        }(s), this.$x = s.x || {}, this.init();
      }, o.init = function() {
        var s = this.$d;
        this.$y = s.getFullYear(), this.$M = s.getMonth(), this.$D = s.getDate(), this.$W = s.getDay(), this.$H = s.getHours(), this.$m = s.getMinutes(), this.$s = s.getSeconds(), this.$ms = s.getMilliseconds();
      }, o.$utils = function() {
        return g;
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
        return g.u(s) ? this[d] : this.set(r, s);
      }, o.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, o.valueOf = function() {
        return this.$d.getTime();
      }, o.startOf = function(s, d) {
        var r = this, h = !!g.u(d) || d, f = g.p(s), y = function(U, C) {
          var H = g.w(r.$u ? Date.UTC(r.$y, C, U) : new Date(r.$y, C, U), r);
          return h ? H : H.endOf($);
        }, k = function(U, C) {
          return g.w(r.toDate()[U].apply(r.toDate("s"), (h ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(C)), r);
        }, M = this.$W, S = this.$M, I = this.$D, R = "set" + (this.$u ? "UTC" : "");
        switch (f) {
          case B:
            return h ? y(1, 0) : y(31, 11);
          case l:
            return h ? y(1, S) : y(0, S + 1);
          case V:
            var X = this.$locale().weekStart || 0, Z = (M < X ? M + 7 : M) - X;
            return y(h ? I - Z : I + (6 - Z), S);
          case $:
          case E:
            return k(R + "Hours", 0);
          case w:
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
        var r, h = g.p(s), f = "set" + (this.$u ? "UTC" : ""), y = (r = {}, r[$] = f + "Date", r[E] = f + "Date", r[l] = f + "Month", r[B] = f + "FullYear", r[w] = f + "Hours", r[u] = f + "Minutes", r[i] = f + "Seconds", r[v] = f + "Milliseconds", r)[h], k = h === $ ? this.$D + (d - this.$W) : d;
        if (h === l || h === B) {
          var M = this.clone().set(E, 1);
          M.$d[y](k), M.init(), this.$d = M.set(E, Math.min(this.$D, M.daysInMonth())).$d;
        } else
          y && this.$d[y](k);
        return this.init(), this;
      }, o.set = function(s, d) {
        return this.clone().$set(s, d);
      }, o.get = function(s) {
        return this[g.p(s)]();
      }, o.add = function(s, d) {
        var r, h = this;
        s = Number(s);
        var f = g.p(d), y = function(S) {
          var I = x(h);
          return g.w(I.date(I.date() + Math.round(S * s)), h);
        };
        if (f === l)
          return this.set(l, this.$M + s);
        if (f === B)
          return this.set(B, this.$y + s);
        if (f === $)
          return y(1);
        if (f === V)
          return y(7);
        var k = (r = {}, r[u] = e, r[w] = c, r[i] = a, r)[f] || 1, M = this.$d.getTime() + s * k;
        return g.w(M, this);
      }, o.subtract = function(s, d) {
        return this.add(-1 * s, d);
      }, o.format = function(s) {
        var d = this, r = this.$locale();
        if (!this.isValid())
          return r.invalidDate || F;
        var h = s || "YYYY-MM-DDTHH:mm:ssZ", f = g.z(this), y = this.$H, k = this.$m, M = this.$M, S = r.weekdays, I = r.months, R = function(C, H, fe, te) {
          return C && (C[H] || C(d, h)) || fe[H].slice(0, te);
        }, X = function(C) {
          return g.s(y % 12 || 12, C, "0");
        }, Z = r.meridiem || function(C, H, fe) {
          var te = C < 12 ? "AM" : "PM";
          return fe ? te.toLowerCase() : te;
        }, U = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: M + 1, MM: g.s(M + 1, 2, "0"), MMM: R(r.monthsShort, M, I, 3), MMMM: R(I, M), D: this.$D, DD: g.s(this.$D, 2, "0"), d: String(this.$W), dd: R(r.weekdaysMin, this.$W, S, 2), ddd: R(r.weekdaysShort, this.$W, S, 3), dddd: S[this.$W], H: String(y), HH: g.s(y, 2, "0"), h: X(1), hh: X(2), a: Z(y, k, !0), A: Z(y, k, !1), m: String(k), mm: g.s(k, 2, "0"), s: String(this.$s), ss: g.s(this.$s, 2, "0"), SSS: g.s(this.$ms, 3, "0"), Z: f };
        return h.replace(le, function(C, H) {
          return H || U[C] || f.replace(":", "");
        });
      }, o.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, o.diff = function(s, d, r) {
        var h, f = g.p(d), y = x(s), k = (y.utcOffset() - this.utcOffset()) * e, M = this - y, S = g.m(this, y);
        return S = (h = {}, h[B] = S / 12, h[l] = S, h[m] = S / 3, h[V] = (M - k) / 6048e5, h[$] = (M - k) / 864e5, h[w] = M / c, h[u] = M / e, h[i] = M / a, h)[f] || M, r ? S : g.a(S);
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
        return g.w(this.$d, this);
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
    return x.prototype = me, [["$ms", v], ["$s", i], ["$m", u], ["$H", w], ["$W", $], ["$M", l], ["$y", B], ["$D", E]].forEach(function(D) {
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
const p = ye.exports;
var ge = { exports: {} };
(function(n, t) {
  (function(a, e) {
    n.exports = e();
  })(oe, function() {
    return function(a, e, c) {
      var v = e.prototype, i = function(l) {
        return l && (l.indexOf ? l : l.s);
      }, u = function(l, m, B, E, F) {
        var W = l.name ? l : l.$locale(), le = i(W[m]), ce = i(W[B]), z = le || ce.map(function(T) {
          return T.slice(0, E);
        });
        if (!F)
          return z;
        var ue = W.weekStart;
        return z.map(function(T, j) {
          return z[(j + (ue || 0)) % 7];
        });
      }, w = function() {
        return c.Ls[c.locale()];
      }, $ = function(l, m) {
        return l.formats[m] || function(B) {
          return B.replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, function(E, F, W) {
            return F || W.slice(1);
          });
        }(l.formats[m.toUpperCase()]);
      }, V = function() {
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
      v.localeData = function() {
        return V.bind(this)();
      }, c.localeData = function() {
        var l = w();
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
        return u(w(), "months");
      }, c.monthsShort = function() {
        return u(w(), "monthsShort", "months", 3);
      }, c.weekdays = function(l) {
        return u(w(), "weekdays", null, null, l);
      }, c.weekdaysShort = function(l) {
        return u(w(), "weekdaysShort", "weekdays", 3, l);
      }, c.weekdaysMin = function(l) {
        return u(w(), "weekdaysMin", "weekdays", 2, l);
      };
    };
  });
})(ge);
const Re = ge.exports;
var we = { exports: {} };
(function(n, t) {
  (function(a, e) {
    n.exports = e();
  })(oe, function() {
    return function(a, e) {
      e.prototype.weekday = function(c) {
        var v = this.$locale().weekStart || 0, i = this.$W, u = (i < v ? i + 7 : i) - v;
        return this.$utils().u(c) ? u : this.subtract(u, "day").add(c, "day");
      };
    };
  });
})(we);
const Le = we.exports;
var pe = { exports: {} };
(function(n, t) {
  (function(a, e) {
    n.exports = e();
  })(oe, function() {
    return function(a, e, c) {
      e.prototype.isBetween = function(v, i, u, w) {
        var $ = c(v), V = c(i), l = (w = w || "()")[0] === "(", m = w[1] === ")";
        return (l ? this.isAfter($, u) : !this.isBefore($, u)) && (m ? this.isBefore(V, u) : !this.isAfter(V, u)) || (l ? this.isBefore($, u) : !this.isAfter($, u)) && (m ? this.isAfter(V, u) : !this.isBefore(V, u));
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
}), Q = (n, t) => {
  const a = n.__vccOpts || n;
  for (const [e, c] of t)
    a[e] = c;
  return a;
}, He = {
  name: "YearCalendar",
  setup(n, { emit: t }) {
    L("atticDatepicker");
    const a = L("calendarView");
    return {
      years: ie(() => {
        const v = [], i = parseInt(p().add(5, "years").subtract(105, "years").format("YYYY"));
        for (let u = 0; u <= 105; u++)
          v.push(i + u);
        return v.reverse();
      }),
      selectYear: (v) => {
        a.value.date.value = a.value.date.value.year(v), t("changeView", "dates");
      },
      dayjs: p
    };
  }
}, We = { class: "flex-1" }, ze = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" }, Ne = ["onClick"];
function Fe(n, t, a, e, c, v) {
  return Y(), _("div", We, [
    b("div", ze, [
      (Y(!0), _(P, null, q(e.years, (i) => (Y(), _("button", {
        type: "button",
        class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
        onClick: (u) => e.selectYear(i)
      }, O(i), 9, Ne))), 256))
    ])
  ]);
}
const Me = /* @__PURE__ */ Q(He, [["render", Fe]]), Ue = {
  name: "MonthsCalendar",
  setup(n, { emit: t }) {
    L("atticDatepicker");
    const a = L("calendarView");
    return {
      selectMonth: (c) => {
        a.value.date.value = a.value.date.value.month(c), t("changeView", "dates");
      },
      dayjs: p
    };
  }
}, Je = { class: "flex-1" }, Xe = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" }, Ze = ["onClick"];
function Pe(n, t, a, e, c, v) {
  return Y(), _("div", Je, [
    b("div", Xe, [
      (Y(), _(P, null, q(12, (i) => b("button", {
        type: "button",
        class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
        onClick: (u) => e.selectMonth(i - 1)
      }, O(e.dayjs().month(i - 1).format("MMMM")), 9, Ze)), 64))
    ])
  ]);
}
const be = /* @__PURE__ */ Q(Ue, [["render", Pe]]), qe = {
  name: "MonthCalendar",
  setup(n, { emit: t }) {
    const a = L("calendarView"), e = L("atticDatepicker"), c = L("showCalendar"), v = L("monthDays"), i = L("date");
    return {
      atticDatepicker: e,
      calendarView: a,
      isSameMonth: (l) => l.isSame(i.value.format("YYYY-MM"), "month"),
      isInBetweenRange: (l) => e.isRange && e.selectedDate.value && e.selectedEndDate.value && l.isBetween(e.selectedDate.value, e.selectedEndDate.value),
      isSelectedDay: (l) => e.selectedDate.value && e.selectedDate.value.isSame(l) || e.selectedEndDate.value && e.selectedEndDate.value.isSame(l),
      dayjs: p,
      monthDays: v,
      date: i,
      selectDate: (l) => {
        e.isDisabledDate(l) || (e.selectDate(l), c.value = !e.ableToClose());
      }
    };
  }
}, Ge = { class: "flex-1 flex" }, Qe = /* @__PURE__ */ b("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ b("g", null, [
    /* @__PURE__ */ b("path", { d: `M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                          L213.13,222.409z` })
  ])
], -1), Ke = [
  Qe
], et = { class: "space-y-5" }, tt = { class: "text-center font-bold" }, nt = { class: "grid grid-cols-7" }, at = { class: "font-semibold text-sm text-gray-400 text-center" }, st = { key: 0 }, rt = ["onClick"], it = {
  key: 1,
  class: "h-full w-full bg-gray-100 absolute z-0"
}, ot = /* @__PURE__ */ b("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ b("g", null, [
    /* @__PURE__ */ b("path", { d: `M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z` })
  ])
], -1), lt = [
  ot
];
function ct(n, t, a, e, c, v) {
  return Y(), _("div", Ge, [
    b("button", {
      type: "button",
      onClick: t[0] || (t[0] = (i) => e.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, Ke),
    b("div", et, [
      b("h2", tt, [
        b("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[1] || (t[1] = (i) => n.$emit("changeView", "months"))
        }, O(e.date.format("MMMM")), 1),
        b("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: t[2] || (t[2] = (i) => n.$emit("changeView", "years"))
        }, O(e.date.format("YYYY")), 1)
      ]),
      b("div", nt, [
        (Y(!0), _(P, null, q(e.dayjs.weekdaysMin(), (i) => (Y(), _("div", at, O(i), 1))), 256)),
        (Y(!0), _(P, null, q(e.monthDays, (i) => (Y(), _("div", null, [
          e.isSameMonth(i) ? (Y(), _("div", st, [
            b("div", {
              class: "mx-auto border-primary cursor-pointer font-bold text-sm relative",
              onClick: (u) => e.selectDate(i)
            }, [
              e.atticDatepicker.isRange && e.isSelectedDay(i) && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedEndDate.value ? (Y(), _("div", {
                key: 0,
                class: De(["h-full w-1/2 bg-gray-100 absolute z-0", [
                  { "right-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedDate.value && e.atticDatepicker.selectedDate.value.isSame(i) },
                  { "left-0": e.atticDatepicker.isRange && e.atticDatepicker.selectedEndDate.value && e.atticDatepicker.selectedEndDate.value.isSame(i) }
                ]])
              }, null, 2)) : ne("", !0),
              e.isInBetweenRange(i) ? (Y(), _("div", it)) : ne("", !0),
              b("span", {
                class: De(["z-10 block relative text-center align-middle hover:rounded-full block w-12 h-12 text-center align-middle flex items-center justify-center", [
                  { "bg-attic-primary text-white rounded-full": e.isSelectedDay(i) },
                  { "hover:bg-gray-200": !e.isSelectedDay(i) },
                  { "cursor-not-allowed text-gray-200": e.atticDatepicker.isDisabledDate(i) }
                ]])
              }, O(i.format("DD")), 3)
            ], 8, rt)
          ])) : ne("", !0)
        ]))), 256))
      ])
    ]),
    b("button", {
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
    YearsCalendar: Me,
    MonthsCalendar: be,
    DatesCalendar: Ye
  },
  setup(n) {
    const { calendar: t } = Ie(), a = N("dates"), e = ie(() => t.value.monthView.date(n.date)), c = N(n.date);
    J("date", c), J("monthDays", e);
    const v = (i) => {
      a.value = i;
    };
    return G(() => n.date, (i, u) => {
      c.value = i;
    }), {
      displayView: a,
      changeView: v
    };
  }
}, dt = { class: "w-full" };
function ft(n, t, a, e, c, v) {
  const i = ae("YearsCalendar"), u = ae("MonthsCalendar"), w = ae("DatesCalendar");
  return Y(), _("div", dt, [
    se(re(i, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "years"]
    ]),
    se(re(u, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "months"]
    ]),
    se(re(w, { onChangeView: e.changeView }, null, 8, ["onChangeView"]), [
      [he, e.displayView === "dates"]
    ])
  ]);
}
const ke = /* @__PURE__ */ Q(ut, [["render", ft]]);
class ht {
  constructor(t, a, e, c) {
    A(this, "modelValue");
    A(this, "selectedDate");
    A(this, "selectedEndDate");
    A(this, "isRange");
    A(this, "keepOpen");
    A(this, "format");
    A(this, "disableDatesBefore");
    A(this, "disableDatesAfter");
    A(this, "disableDates");
    A(this, "enableDatesBefore");
    A(this, "enableDatesAfter");
    A(this, "enableDates");
    this.modelValue = N(null), this.selectedDate = N(null), this.selectedEndDate = N(null), this.keepOpen = c, this.isRange = e, this.format = a, this.disableDatesBefore = null, this.disableDatesAfter = null, this.disableDates = null, this.enableDatesBefore = null, this.enableDatesAfter = null, this.enableDates = null, G(() => this.selectedDate.value, (v, i) => {
      this.getValue();
    }), G(() => this.selectedEndDate.value, (v, i) => {
      this.getValue();
    }), this.setDates(t);
  }
  setDates(t) {
    if (t) {
      if (typeof t == "string") {
        this.selectedDate.value = p(t);
        return;
      }
      typeof t == "object" && this.isRange && (this.selectedDate.value = p(t[0]), t.length > 1 && (this.selectedEndDate.value = p(t[1])));
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
    let a = !1;
    return this.disableDatesBefore && (a = t.format("YYYYMMDD") < this.disableDatesBefore.format("YYYYMMDD")), this.disableDatesAfter && (a = t.format("YYYYMMDD") > this.disableDatesAfter.format("YYYYMMDD")), this.disableDates && (a = this.disableDates.filter((e) => e.constructor.name === "Array" ? e.length === 2 ? t.format("YYYYMMDD") >= e[0].format("YYYYMMDD") && t.format("YYYYMMDD") <= e[1].format("YYYYMMDD") : !1 : e.format("YYYYMMDD") === t.format("YYYYMMDD")).length > 0), this.enableDatesBefore && (a = t.format("YYYYMMDD") > this.enableDatesBefore.format("YYYYMMDD")), this.enableDatesAfter && (a = t.format("YYYYMMDD") < this.enableDatesAfter.format("YYYYMMDD")), this.enableDates && (a = this.enableDates.filter((e) => e.constructor.name === "Array" ? e.length === 2 ? t.format("YYYYMMDD") >= e[0].format("YYYYMMDD") && t.format("YYYYMMDD") <= e[1].format("YYYYMMDD") : !1 : e.format("YYYYMMDD") === t.format("YYYYMMDD")).length === 0), a;
  }
  setDisableDatesBefore(t) {
    if (typeof t == "string") {
      this.disableDatesBefore = p(t);
      return;
    }
    this.disableDatesBefore = t;
  }
  setDisableDatesAfter(t) {
    if (typeof t == "string") {
      this.disableDatesAfter = p(t);
      return;
    }
    this.disableDatesAfter = t;
  }
  setDisableDates(t) {
    this.disableDates = t.map((a) => typeof a == "string" ? p(a) : a.constructor.name === "Array" ? a.map((e) => typeof e == "string" ? p(e) : e) : a);
  }
  setEnableDatesBefore(t) {
    if (typeof t == "string") {
      this.enableDatesBefore = p(t);
      return;
    }
    this.enableDatesBefore = t;
  }
  setEnableDatesAfter(t) {
    if (typeof t == "string") {
      this.enableDatesAfter = p(t);
      return;
    }
    this.enableDatesAfter = t;
  }
  setEnableDates(t) {
    this.enableDates = t.map((a) => typeof a == "string" ? p(a) : a.constructor.name === "Array" ? a.map((e) => typeof e == "string" ? p(e) : e) : a);
  }
}
p.extend(Re);
p.extend(Le);
p.extend(Te);
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
    disableDatesBefore: String | p.Dayjs | null,
    disableDatesAfter: String | p.Dayjs | null,
    disableDates: Array | null,
    enableDatesBefore: String | p.Dayjs | null,
    enableDatesAfter: String | p.Dayjs | null,
    enableDates: Array | null
  },
  components: {
    Calendar: ke,
    YearsCalendar: Me,
    MonthsCalendar: be,
    DatesCalendar: Ye
  },
  directives: {
    attic: {
      mounted: (n, t) => {
        ve(t);
      },
      updated: (n, t) => {
        ve(t);
      }
    }
  },
  watch: {
    disableDatesBefore(n) {
      this.atticDatepicker.setDisableDatesBefore(n);
    },
    disableDatesAfter(n) {
      this.atticDatepicker.setDisableDatesAfter(n);
    },
    disableDates(n) {
      this.atticDatepicker.setDisableDates(n);
    },
    enableDatesBefore(n) {
      this.atticDatepicker.setEnableDatesBefore(n);
    },
    enableDatesAfter(n) {
      this.atticDatepicker.setEnableDatesAfter(n);
    },
    enableDates(n) {
      this.atticDatepicker.setEnableDates(n);
    }
  },
  setup(n, { emit: t }) {
    const a = N(!1), e = new ht(n.modelValue, n.format, n.isRange || n.isRange === "true", typeof n.keepOpen == "string" ? n.keepOpen !== "false" : n.keepOpen);
    n.disableDatesBefore && e.setDisableDatesBefore(n.disableDatesBefore), n.disableDatesAfter && e.setDisableDatesAfter(n.disableDatesAfter), n.disableDates && e.setDisableDates(n.disableDates), n.enableDatesBefore && e.setEnableDatesBefore(n.enableDatesBefore), n.enableDatesAfter && e.setEnableDatesAfter(n.enableDatesAfter), n.enableDates && e.setEnableDates(n.enableDates);
    const c = ie(() => {
      const i = N(e.selectedDate.value ?? p()), u = () => {
        i.value = i.value.subtract(1, "month");
      }, w = () => {
        i.value = i.value.add(1, "month");
      };
      return G(() => e.selectedDate.value, ($, V) => {
        i.value = $;
      }), {
        subtractMonth: u,
        addMonth: w,
        date: i
      };
    }), v = () => {
      e.modelValue.value = n.isRange ? [] : null, e.selectedDate.value = null, e.selectedEndDate.value = null, a.value = !1;
    };
    return G(() => e.modelValue.value, (i, u) => {
      t("update:modelValue", i);
    }), J("atticDatepicker", e), J("showCalendar", a), J("calendarView", c), J("showXMonths", n.showXMonths), {
      clearDate: v,
      atticDatepicker: e,
      showCalendar: a,
      calendarView: c,
      dayjs: p
    };
  }
}, mt = { class: "md:space-y-2" }, vt = { key: 0 }, yt = { key: 1 }, gt = {
  key: 2,
  class: "text-gray-400 select-none"
}, wt = { class: "md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8" };
function pt(n, t, a, e, c, v) {
  const i = ae("Calendar"), u = Se("attic");
  return se((Y(), _("div", mt, [
    Ce(n.$slots, "default", {
      value: e.atticDatepicker.modelValue.value,
      placeholder: n.$attrs.placeholder,
      clear: e.clearDate
    }, () => [
      b("div", Ve({ class: "relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow" }, n.$attrs), [
        !a.isRange && e.atticDatepicker.selectedDate.value ? (Y(), _("span", vt, O(e.atticDatepicker.modelValue.value), 1)) : a.isRange && e.atticDatepicker.modelValue.value && e.atticDatepicker.modelValue.value.length > 1 ? (Y(), _("span", yt, O(e.atticDatepicker.modelValue.value[0]) + " ~ " + O(e.atticDatepicker.modelValue.value[1]), 1)) : (Y(), _("span", gt, O(n.$attrs.placeholder ?? "Select Date"), 1))
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
          class: De(a.calendarClass ?? "attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8 select-none")
        }, [
          b("div", wt, [
            (Y(!0), _(P, null, q(parseInt(a.showXMonths ?? 1), (w) => (Y(), Oe(i, {
              date: e.calendarView.date.value.add(w - 1, "month")
            }, null, 8, ["date"]))), 256))
          ]),
          b("button", {
            type: "button",
            class: "sm:hidden w-full bg-red-500 rounded text-white font-bold p-3",
            onClick: t[0] || (t[0] = (w) => e.showCalendar = !1)
          }, " Close ")
        ], 2)) : ne("", !0)
      ]),
      _: 1
    })
  ])), [
    [u, a.trigger, "away"]
  ]);
}
const _e = /* @__PURE__ */ Q(Dt, [["render", pt]]), Mt = {
  install: (n) => {
    n.component("AtticDatepicker", _e);
  }
}, kt = Object.assign(_e, Mt, {
  Calendar: ke
});
export {
  kt as default
};
