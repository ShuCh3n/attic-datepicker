<template>
    <div class="flex-1 space-y-5">
        <h2 class="text-center font-bold">
            <span class="hover:bg-primary hover:text-white p-2 rounded-lg cursor-pointer">{{ date.format('MMMM') }}</span>
            <span class="hover:bg-primary hover:text-white p-2 rounded-lg cursor-pointer">{{ date.format('YYYY') }}</span>
        </h2>

        <div class="grid grid-cols-7 gap-3">
            <div v-for="weekDay in dayjs.weekdaysMin()" class="font-semibold text-sm text-gray-400 text-center">{{ weekDay }}</div>

            <div v-for="day in calendar">
                <div  v-if="isSameMonth(day)" class="hover:border rounded-full w-10 h-10 mx-auto border-primary cursor-pointer flex justify-center items-center font-bold text-sm">
                    <span>{{ day.format('DD') }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'
import { ref, reactive } from "vue";

export default {
    name: "MonthCalendar",
    props: {
        calendar: Array,
        date: reactive
    },
    setup(props) {
        const isSameMonth = (day) => {
            return day.isSame(props.date.format('YYYY-MM'), 'month')
        }
        return {
            isSameMonth,
            dayjs
        }
    }
}
</script>
