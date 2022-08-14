<template>
    <div class="space-y-2 relative" v-attic="">
        <slot
            :value="(atticDatepicker.selectedDate.value)? atticDatepicker.selectedDate.value.format(format) : null"
            :placeholder="$attrs.placeholder"
            :clear="clearDate"
        >
            <div
                class="relative block w-full pl-3 pr-12 py-2.5 rounded-lg overflow-hidden text-sm text-litepie-secondary-700 placeholder-litepie-secondary-400 transition-colors bg-white border border-litepie-secondary-300 focus:border-litepie-primary-300 focus:ring focus:ring-litepie-primary-500 focus:ring-opacity-10 focus:outline-none dark:bg-litepie-secondary-800 dark:border-litepie-secondary-700 dark:text-litepie-secondary-100 dark:placeholder-litepie-secondary-500 dark:focus:border-litepie-primary-500 dark:focus:ring-opacity-20"
                 v-bind="$attrs">
                <span v-if="atticDatepicker.selectedDate.value">{{ atticDatepicker.selectedDate.value.format(format) }}</span>
            </div>
        </slot>

        <Transition enter-from-class="opacity-0 translate-y-3"
                    enter-to-class="opacity-100 translate-y-0"
                    enter-active-class="transform transition ease-out duration-200"
                    leave-active-class="transform transition ease-in duration-150"
                    leave-from-class="opacity-100 translate-y-0"
                    leave-to-class="opacity-0 translate-y-3">

            <div v-if="showCalendar" class="attic-datepicker-calendar absolute bg-white rounded-[28px] border py-5 px-6 shadow-xl flex items-start space-x-3 z-[99] min-w-0">
                <button @click="calendarView.subtractMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full">
                    <i class="fas fa-chevron-left"></i>
                </button>

                <div class="flex space-x-12 w-full">
                    <Calendar v-for="x in parseInt(showXMonths)" :date="calendarView.date.value.add((x - 1), 'month')" />
                </div>

                <button @click="calendarView.addMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full">
                    <i class="fas fa-chevron-right"></i>
                </button>
            </div>

        </Transition>

    </div>
</template>

<script>
import { ref, computed, provide, watch } from 'vue'
import { useDirective } from "./modules/fn"

import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'
import isBetween from 'dayjs/plugin/isBetween'

dayjs.extend(localeData)
dayjs.extend(weekday)
dayjs.extend(isBetween)

import Calendar from './components/Calendar'
import YearsCalendar from "./components/YearsCalendar";
import MonthsCalendar from "./components/MonthsCalendar";
import DatesCalendar from './components/DatesCalendar'

import Datepicker from './classes/Datepicker'

export default {
    name: 'AtticDatepicker',
    props: {
        date: String,
        format: {
            type: String,
            default: 'DD MMM YYYY'
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
                useDirective(binding)
            },
            updated: (el, binding) => {
                useDirective(binding)
            }
        }
    },
    setup(props) {
        const showCalendar = ref(false)
        const atticDatepicker = new Datepicker('2022-05-01', null, (props.isRange === 'true'), (props.autoApply === 'true'))

        provide('atticDatepicker', atticDatepicker)
        provide('showCalendar', showCalendar)
        provide('calendarView', calendarView)
        provide('showXMonths', props.showXMonths)

        const calendarView = computed(() => {
            const date = ref((props.date)? dayjs(props.date) : dayjs())

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
    .attic-datepicker-calendar::before {
        --attic-datepicker: 0px;
        content: '';
        @apply absolute top-0 w-4 h-4 bg-white shadow border border-black/[.1] dark:bg-attic-secondary-800 dark:border-attic-secondary-700;
        transform: translate(50%, -50%) rotate(-45deg);

        clip-path: polygon(
                calc(var(--attic-datepicker) * -1) calc(var(--attic-datepicker) * -1),
                calc(100% + var(--attic-datepicker)) calc(var(--attic-datepicker) * -1),
                calc(100% + var(--attic-datepicker))
                calc(100% + var(--attic-datepicker))
        );
    }
</style>
