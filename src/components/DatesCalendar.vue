<template>
    <div class="flex-1 flex space-x-16">
        <div class="space-y-5">
            <h2 class="text-center font-bold">
                <span class="hover:bg-primary hover:text-white p-2 rounded-lg cursor-pointer" @click="$emit('changeView', 'months')">{{ date.format('MMMM') }}</span>
                <span class="hover:bg-primary hover:text-white p-2 rounded-lg cursor-pointer" @click="$emit('changeView', 'years')">{{ date.format('YYYY') }}</span>
            </h2>

            <div class="grid grid-cols-7">
                <div v-for="weekDay in dayjs.weekdaysMin()" class="font-semibold text-sm text-gray-400 text-center">{{ weekDay }}</div>

                <div v-for="day in monthDays">
                    <div v-if="isSameMonth(day)" v-bind:class="[
                             { 'bg-primary text-white': isSelectedDay(day) },
                             { 'rounded-full': (!atticDatepicker.isRange) },
                             { 'rounded-l-full': (atticDatepicker.isRange && atticDatepicker.selectedDate.value && atticDatepicker.selectedDate.value.isSame(day)) },
                             { 'rounded-r-full': (atticDatepicker.isRange && atticDatepicker.selectedEndDate.value && atticDatepicker.selectedEndDate.value.isSame(day)) },
                             { 'bg-gray-100 rounded-none': isInBetweenRange(day) }
                         ]">
                        <div class="hover:border hover:rounded-full mx-auto border-primary cursor-pointer flex justify-center items-center font-bold text-sm w-12 h-12" @click="selectDate(day)">
                            <span>{{ day.format('DD') }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


</template>

<script>
import dayjs from 'dayjs'
import {ref, reactive, inject, provide, nextTick} from "vue";

export default {
    name: "MonthCalendar",
    setup(props, { emit }) {
        const calendarView = inject('calendarView')
        const atticDatepicker = inject('atticDatepicker')
        const showCalendar = inject('showCalendar')
        const monthDays = inject('monthDays')
        const date = inject('date')

        const isSameMonth = (day) => {
            return day.isSame(date.value.format('YYYY-MM'), 'month')
        }

        const isSelectedDay = (day) => {
            return (atticDatepicker.selectedDate.value && atticDatepicker.selectedDate.value.isSame(day)) ||
                (atticDatepicker.selectedEndDate.value && atticDatepicker.selectedEndDate.value.isSame(day))
        }

        const isInBetweenRange = (day) => {
            return atticDatepicker.isRange &&
                (atticDatepicker.selectedDate.value && atticDatepicker.selectedEndDate.value) &&
                day.isBetween(atticDatepicker.selectedDate.value, atticDatepicker.selectedEndDate.value)
        }

        const selectDate = (day) => {
            atticDatepicker.selectDate(day)
            showCalendar.value = !atticDatepicker.ableToClose()
        }

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
        }
    }
}
</script>
