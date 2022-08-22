<template>
    <div class="md:space-y-2" v-attic:away="trigger">
        <slot
            :value="atticDatepicker.modelValue.value"
            :placeholder="$attrs.placeholder"
            :clear="clearDate"
        >
            <div class="relative block w-full pl-3 pr-12 py-3 rounded-lg overflow-hidden text-sm transition-colors bg-white border focus:ring focus:outline-none shadow" v-bind="$attrs">
                <span v-if="!isRange && atticDatepicker.selectedDate.value">{{ atticDatepicker.modelValue.value }}</span>
                <span v-else-if="isRange && atticDatepicker.modelValue.value &&  atticDatepicker.modelValue.value.length > 1">
                    {{ atticDatepicker.modelValue.value[0] }} ~ {{ atticDatepicker.modelValue.value[1] }}
                </span>
                <span v-else class="text-gray-400">{{ $attrs.placeholder ?? 'Select Date' }}</span>
            </div>
        </slot>

        <Transition enter-from-class="opacity-0 translate-y-3"
                    enter-to-class="opacity-100 translate-y-0"
                    enter-active-class="transform transition ease-out duration-200"
                    leave-active-class="transform transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-3">

            <div v-if="showCalendar" class="attic-datepicker-calendar place-left md:absolute fixed bg-white md:rounded-[28px] border py-5 px-6 md:shadow-xl z-[99] md:top-auto md:right-auto md:h-auto md:w-auto md:space-y-0 top-0 right-0 h-full w-full space-y-8">
                <div class="md:flex md:items-start md:space-x-3 md:space-y-0 space-y-8">
                    <Calendar v-for="x in parseInt(showXMonths ?? 1)" :date="calendarView.date.value.add((x - 1), 'month')" />
                </div>

                <button class="sm:hidden w-full bg-red-500 rounded text-white font-bold p-3" @click="showCalendar = false"> Close </button>
            </div>
        </Transition>

    </div>
</template>

<script>
import { ref, computed, provide, watch } from 'vue'
import { useDirective } from "./lib/fn"

import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs.extend(isBetween)

import Calendar from './components/Calendar.vue'
import YearsCalendar from "./components/YearsCalendar.vue";
import MonthsCalendar from "./components/MonthsCalendar.vue";
import DatesCalendar from './components/DatesCalendar.vue'

import Datepicker from './classes/Datepicker'

export default {
    name: 'AtticDatepicker',
    props: {
        modelValue: Object,
        endDate: String,
        format: {
            type: String,
            default: 'DD MMM YYYY'
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
        Calendar,
        YearsCalendar,
        MonthsCalendar,
        DatesCalendar
    },
    directives: {
        attic: {
            mounted: (el, binding) => {
                useDirective(binding)
            },
            updated: (el, binding) => {
                useDirective(binding)
            }
        }
    },
    setup(props, { emit }) {
        const showCalendar = ref(false)
        const atticDatepicker = new Datepicker(props.modelValue, props.format, (props.isRange || props.isRange === 'true'), (typeof props.keepOpen === 'string')? !(props.keepOpen === 'false') : props.keepOpen)

        const calendarView = computed(() => {
            const date = ref(atticDatepicker.selectedDate.value ?? dayjs())

            const subtractMonth = () => {
                date.value = date.value.subtract(1, 'month')
            }

            const addMonth = () => {
                date.value = date.value.add(1, 'month')
            }

            watch(() => atticDatepicker.selectedDate.value, (value, prevValue) => {
                date.value = value
            })

            return {
                subtractMonth,
                addMonth,
                date
            }
        })

        const clearDate = () => {
            atticDatepicker.selectedDate.value = null
            showCalendar.value = false
        }

        watch(() => atticDatepicker.modelValue.value, (value, prevValue) => {
            emit('update:modelValue', value)
        })

        provide('atticDatepicker', atticDatepicker)
        provide('showCalendar', showCalendar)
        provide('calendarView', calendarView)
        provide('showXMonths', props.showXMonths)

        return {
            clearDate,
            atticDatepicker,
            showCalendar,
            calendarView,
            dayjs
        }
    }
}
</script>

<style>
    @media (min-width: 768px) {
        .attic-datepicker-calendar::before {
            --attic-datepicker-calendar: 0px;
            content: '';
            @apply absolute top-0 w-4 h-4 bg-white shadow border border-black/[.1];
            transform: translate(50%, -50%) rotate(-45deg);
            clip-path: polygon(
                calc(var(--attic-datepicker-calendar) * -1) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar)) calc(var(--attic-datepicker-calendar) * -1),
                calc(100% + var(--attic-datepicker-calendar))
                calc(100% + var(--attic-datepicker-calendar))
            );

        }
        .attic-datepicker-calendar.place-left::before {
            @apply left-8;
        }
        .attic-datepicker-calendar.place-right::before {
            @apply right-5;
        }
    }
</style>
