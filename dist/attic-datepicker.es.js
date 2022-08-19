var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
import { computed, inject, openBlock, createElementBlock, createElementVNode, Fragment, renderList, toDisplayString, normalizeClass, createCommentVNode, ref, provide, watch, resolveComponent, withDirectives, createVNode, vShow, resolveDirective, renderSlot, mergeProps, Transition, withCtx, createBlock } from "vue";
import dayjs from "dayjs";
import localeData from "dayjs/plugin/localeData";
import weekday from "dayjs/plugin/weekday";
import isBetween from "dayjs/plugin/isBetween";
const usePreviousDate = (date) => {
  const display = [];
  for (let i = 0; i <= date.date(0).day(); i++) {
    display.push(date.date(0).subtract(i, "day"));
  }
  return display.sort((a, b) => a.date() - b.date());
};
const useCurrentDate = (date) => {
  return Array.from(
    {
      length: date.daysInMonth()
    },
    (v, k) => date.date(k + 1)
  );
};
const useDirective = (binding) => {
  const { instance } = binding;
  document.body.addEventListener("click", ($event) => {
    if (instance.$el.contains($event.target)) {
      return instance.showCalendar = true;
    }
    return instance.showCalendar = false;
  });
};
const useCalendar = () => {
  const calendar = computed(() => {
    return {
      monthView: {
        date: (inputDate) => {
          return usePreviousDate(inputDate).concat(useCurrentDate(inputDate));
        }
      }
    };
  });
  return {
    calendar
  };
};
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$4 = {
  name: "YearCalendar",
  setup(props, { emit }) {
    const atticDatepicker = inject("atticDatepicker");
    const years = computed(() => {
      const years2 = [];
      const startYear = parseInt(dayjs().subtract(100, "years").format("YYYY"));
      for (let i = 0; i <= 100; i++) {
        years2.push(startYear + i);
      }
      return years2.reverse();
    });
    const selectYear = (year) => {
      atticDatepicker.selectedDate.value = atticDatepicker.selectedDate.value ? atticDatepicker.selectedDate.value.year(year) : dayjs().year(year);
      atticDatepicker.selectedEndDate.value = null;
      emit("changeView", "dates");
    };
    return {
      years,
      selectYear,
      dayjs
    };
  }
};
const _hoisted_1$3 = { class: "flex-1" };
const _hoisted_2$3 = { class: "max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm" };
const _hoisted_3$3 = ["onClick"];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($setup.years, (year) => {
        return openBlock(), createElementBlock("button", {
          class: "w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white",
          onClick: ($event) => $setup.selectYear(year)
        }, toDisplayString(year), 9, _hoisted_3$3);
      }), 256))
    ])
  ]);
}
const YearsCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const _sfc_main$3 = {
  name: "MonthsCalendar",
  setup(props, { emit }) {
    const atticDatepicker = inject("atticDatepicker");
    const selectMonth = (month) => {
      atticDatepicker.selectedDate.value = atticDatepicker.selectedDate.value ? atticDatepicker.selectedDate.value.month(month) : dayjs().month(month);
      atticDatepicker.selectedEndDate.value = null;
      emit("changeView", "dates");
    };
    return {
      selectMonth,
      dayjs
    };
  }
};
const _hoisted_1$2 = { class: "flex-1" };
const _hoisted_2$2 = { class: "grid grid-cols-2 gap-3 font-bold text-sm w-full" };
const _hoisted_3$2 = ["onClick"];
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$2, [
    createElementVNode("div", _hoisted_2$2, [
      (openBlock(), createElementBlock(Fragment, null, renderList(12, (month) => {
        return createElementVNode("button", {
          class: "rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2",
          onClick: ($event) => $setup.selectMonth(month - 1)
        }, toDisplayString($setup.dayjs().month(month - 1).format("MMMM")), 9, _hoisted_3$2);
      }), 64))
    ])
  ]);
}
const MonthsCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const _sfc_main$2 = {
  name: "MonthCalendar",
  setup(props, { emit }) {
    const calendarView = inject("calendarView");
    const atticDatepicker = inject("atticDatepicker");
    const showCalendar = inject("showCalendar");
    const monthDays = inject("monthDays");
    const date = inject("date");
    const isSameMonth = (day) => {
      return day.isSame(date.value.format("YYYY-MM"), "month");
    };
    const isSelectedDay = (day) => {
      return atticDatepicker.selectedDate.value && atticDatepicker.selectedDate.value.isSame(day) || atticDatepicker.selectedEndDate.value && atticDatepicker.selectedEndDate.value.isSame(day);
    };
    const isInBetweenRange = (day) => {
      return atticDatepicker.isRange && (atticDatepicker.selectedDate.value && atticDatepicker.selectedEndDate.value) && day.isBetween(atticDatepicker.selectedDate.value, atticDatepicker.selectedEndDate.value);
    };
    const selectDate = (day) => {
      atticDatepicker.selectDate(day);
      showCalendar.value = !atticDatepicker.ableToClose();
    };
    return {
      atticDatepicker,
      calendarView,
      isSameMonth,
      isInBetweenRange,
      isSelectedDay,
      dayjs,
      monthDays,
      date,
      selectDate
    };
  }
};
const _hoisted_1$1 = { class: "flex-1 flex" };
const _hoisted_2$1 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ createElementVNode("g", null, [
    /* @__PURE__ */ createElementVNode("path", { d: "M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835\n                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425\n                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564\n                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978\n                          L213.13,222.409z" })
  ])
], -1);
const _hoisted_3$1 = [
  _hoisted_2$1
];
const _hoisted_4 = { class: "space-y-5" };
const _hoisted_5 = { class: "text-center font-bold" };
const _hoisted_6 = { class: "grid grid-cols-7" };
const _hoisted_7 = { class: "font-semibold text-sm text-gray-400 text-center" };
const _hoisted_8 = ["onClick"];
const _hoisted_9 = /* @__PURE__ */ createElementVNode("svg", {
  class: "w-3",
  xmlns: "http://www.w3.org/2000/svg",
  "xmlns:xlink": "http://www.w3.org/1999/xlink",
  x: "0px",
  y: "0px",
  viewBox: "0 0 444.531 444.531",
  "xml:space": "preserve"
}, [
  /* @__PURE__ */ createElementVNode("g", null, [
    /* @__PURE__ */ createElementVNode("path", { d: "M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264\n                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168\n                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413\n                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864\n                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z" })
  ])
], -1);
const _hoisted_10 = [
  _hoisted_9
];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    createElementVNode("button", {
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.calendarView.subtractMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, _hoisted_3$1),
    createElementVNode("div", _hoisted_4, [
      createElementVNode("h2", _hoisted_5, [
        createElementVNode("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: _cache[1] || (_cache[1] = ($event) => _ctx.$emit("changeView", "months"))
        }, toDisplayString($setup.date.format("MMMM")), 1),
        createElementVNode("span", {
          class: "hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer",
          onClick: _cache[2] || (_cache[2] = ($event) => _ctx.$emit("changeView", "years"))
        }, toDisplayString($setup.date.format("YYYY")), 1)
      ]),
      createElementVNode("div", _hoisted_6, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.dayjs.weekdaysMin(), (weekDay) => {
          return openBlock(), createElementBlock("div", _hoisted_7, toDisplayString(weekDay), 1);
        }), 256)),
        (openBlock(true), createElementBlock(Fragment, null, renderList($setup.monthDays, (day) => {
          return openBlock(), createElementBlock("div", null, [
            $setup.isSameMonth(day) ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass([
                { "bg-attic-primary text-white": $setup.isSelectedDay(day) },
                { "rounded-full": !$setup.atticDatepicker.isRange },
                { "rounded-l-full": $setup.atticDatepicker.isRange && $setup.atticDatepicker.selectedDate.value && $setup.atticDatepicker.selectedDate.value.isSame(day) },
                { "rounded-r-full": $setup.atticDatepicker.isRange && $setup.atticDatepicker.selectedEndDate.value && $setup.atticDatepicker.selectedEndDate.value.isSame(day) },
                { "bg-gray-100 rounded-none": $setup.isInBetweenRange(day) }
              ])
            }, [
              createElementVNode("div", {
                class: "hover:border hover:rounded-full mx-auto border-primary cursor-pointer flex justify-center items-center font-bold text-sm w-12 h-12",
                onClick: ($event) => $setup.selectDate(day)
              }, [
                createElementVNode("span", null, toDisplayString(day.format("DD")), 1)
              ], 8, _hoisted_8)
            ], 2)) : createCommentVNode("", true)
          ]);
        }), 256))
      ])
    ]),
    createElementVNode("button", {
      onClick: _cache[3] || (_cache[3] = ($event) => $setup.calendarView.addMonth()),
      class: "w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center"
    }, _hoisted_10)
  ]);
}
const DatesCalendar = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "Calendar",
  props: {
    date: Object
  },
  components: {
    YearsCalendar,
    MonthsCalendar,
    DatesCalendar
  },
  setup(props) {
    const { calendar } = useCalendar();
    const displayView = ref("dates");
    const monthDays = computed(() => calendar.value.monthView.date(props.date));
    const date = ref(props.date);
    provide("date", date);
    provide("monthDays", monthDays);
    const changeView = (view) => {
      displayView.value = view;
    };
    watch(() => props.date, (value, prevValue) => {
      date.value = value;
    });
    return {
      displayView,
      changeView
    };
  }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_YearsCalendar = resolveComponent("YearsCalendar");
  const _component_MonthsCalendar = resolveComponent("MonthsCalendar");
  const _component_DatesCalendar = resolveComponent("DatesCalendar");
  return openBlock(), createElementBlock("div", null, [
    withDirectives(createVNode(_component_YearsCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "years"]
    ]),
    withDirectives(createVNode(_component_MonthsCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "months"]
    ]),
    withDirectives(createVNode(_component_DatesCalendar, { onChangeView: $setup.changeView }, null, 8, ["onChangeView"]), [
      [vShow, $setup.displayView === "dates"]
    ])
  ]);
}
const Calendar = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
class Datepicker {
  constructor(date, selectedEndDate, isRange, autoApply) {
    __publicField(this, "selectedDate");
    __publicField(this, "selectedEndDate");
    __publicField(this, "isRange");
    __publicField(this, "autoApply");
    this.selectedDate = ref(date ? dayjs(date) : null);
    this.selectedEndDate = ref(null);
    this.autoApply = autoApply;
    this.isRange = isRange;
    if (isRange) {
      this.selectedEndDate.value = selectedEndDate ? dayjs(selectedEndDate) : null;
    }
  }
  selectDate(date) {
    if (!this.isRange) {
      this.selectedDate.value = date;
      return;
    }
    if (this.selectedDate.value && this.selectedEndDate.value) {
      this.selectedDate.value = date;
      this.selectedEndDate.value = null;
      return;
    }
    if (!this.selectedDate.value || date.diff(this.selectedDate.value, "day") < 0) {
      this.selectedDate.value = date;
      return;
    }
    if (date.diff(this.selectedDate.value, "day") > 0) {
      this.selectedEndDate.value = date;
    }
  }
  ableToClose() {
    if (this.autoApply) {
      if (this.isRange && this.selectedDate.value && this.selectedEndDate.value) {
        return true;
      }
      if (!this.isRange) {
        return true;
      }
    }
    return false;
  }
}
const AtticDatepicker_vue_vue_type_style_index_0_lang = "";
dayjs.extend(localeData);
dayjs.extend(weekday);
dayjs.extend(isBetween);
const _sfc_main = {
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
    Calendar,
    YearsCalendar,
    MonthsCalendar,
    DatesCalendar
  },
  directives: {
    attic: {
      mounted: (el, binding) => {
        useDirective(binding);
      },
      updated: (el, binding) => {
        useDirective(binding);
      }
    }
  },
  setup(props) {
    const showCalendar = ref(false);
    const atticDatepicker = new Datepicker(props.date ?? null, props.endDate ?? null, true, props.autoApply === "true");
    const calendarView = computed(() => {
      const date = ref(props.date ? dayjs(props.date) : dayjs());
      const subtractMonth = () => {
        date.value = date.value.subtract(1, "month");
      };
      const addMonth = () => {
        date.value = date.value.add(1, "month");
      };
      watch(() => atticDatepicker.selectedDate.value, (value, prevValue) => {
        date.value = value;
      });
      return {
        subtractMonth,
        addMonth,
        date
      };
    });
    const clearDate = () => {
      atticDatepicker.selectedDate.value = null;
      showCalendar.value = false;
    };
    provide("atticDatepicker", atticDatepicker);
    provide("showCalendar", showCalendar);
    provide("calendarView", calendarView);
    provide("showXMonths", props.showXMonths);
    return {
      clearDate,
      atticDatepicker,
      showCalendar,
      calendarView,
      dayjs
    };
  }
};
const _hoisted_1 = { class: "space-y-2 relative" };
const _hoisted_2 = { key: 0 };
const _hoisted_3 = {
  key: 0,
  class: "attic-datepicker-calendar absolute bg-white rounded-[28px] border py-5 px-6 shadow-xl flex items-start space-x-3 z-[99] min-w-0"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Calendar = resolveComponent("Calendar");
  const _directive_attic = resolveDirective("attic");
  return withDirectives((openBlock(), createElementBlock("div", _hoisted_1, [
    renderSlot(_ctx.$slots, "default", {
      value: $setup.atticDatepicker.selectedDate.value ? $setup.atticDatepicker.selectedDate.value.format($props.format) : null,
      placeholder: _ctx.$attrs.placeholder,
      clear: $setup.clearDate
    }, () => [
      createElementVNode("div", mergeProps({ class: "relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none dark:focus:ring-opacity-20" }, _ctx.$attrs), [
        $setup.atticDatepicker.selectedDate.value ? (openBlock(), createElementBlock("span", _hoisted_2, toDisplayString($setup.atticDatepicker.selectedDate.value.format($props.format)), 1)) : createCommentVNode("", true)
      ], 16)
    ]),
    createVNode(Transition, {
      "enter-from-class": "opacity-0 translate-y-3",
      "enter-to-class": "opacity-100 translate-y-0",
      "enter-active-class": "transform transition ease-out duration-200",
      "leave-active-class": "transform transition ease-in duration-150",
      "leave-from-class": "opacity-100 translate-y-0",
      "leave-to-class": "opacity-0 translate-y-3"
    }, {
      default: withCtx(() => [
        $setup.showCalendar ? (openBlock(), createElementBlock("div", _hoisted_3, [
          (openBlock(true), createElementBlock(Fragment, null, renderList(parseInt($props.showXMonths ?? 1), (x) => {
            return openBlock(), createBlock(_component_Calendar, {
              date: $setup.calendarView.date.value.add(x - 1, "month")
            }, null, 8, ["date"]);
          }), 256))
        ])) : createCommentVNode("", true)
      ]),
      _: 1
    })
  ])), [
    [_directive_attic]
  ]);
}
const AtticDatepicker = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const api = {
  install: (app) => {
    app.component("AtticDatepicker", AtticDatepicker);
  }
};
const main = Object.assign(AtticDatepicker, api, {
  Calendar
});
export {
  main as default
};
