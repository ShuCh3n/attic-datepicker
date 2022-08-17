<template>
    <div class="flex-1 flex">

        <button @click="calendarView.subtractMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve">
                        <g>
                          <path d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                          l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                          c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                          s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                          L213.13,222.409z"/>
                        </g>
                    </svg>
        </button>

        <div class="space-y-5">
            <h2 class="text-center font-bold">
                <span class="hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer" @click="$emit('changeView', 'months')">{{ date.format('MMMM') }}</span>
                <span class="hover:bg-attic-secondary hover:text-white p-2 rounded-lg cursor-pointer" @click="$emit('changeView', 'years')">{{ date.format('YYYY') }}</span>
            </h2>

            <div class="grid grid-cols-7">
                <div v-for="weekDay in dayjs.weekdaysMin()" class="font-semibold text-sm text-gray-400 text-center">{{ weekDay }}</div>

                <div v-for="day in monthDays">
                    <div v-if="isSameMonth(day)" v-bind:class="[
                             { 'bg-attic-primary text-white': isSelectedDay(day) },
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

        <button @click="calendarView.addMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full flex items-center justify-center">
            <svg class="w-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xml:space="preserve">
                <g>
                    <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                    c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                    c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                    c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                    c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
                </g>
            </svg>
        </button>
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
