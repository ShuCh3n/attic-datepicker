<template>
    <div class="flex-1">
        <div class="grid grid-cols-2 gap-3 font-bold text-sm w-full">
            <button type="button" v-for="month in 12" class="rounded-xl py-3 hover:bg-attic-thirdly hover:text-white px-2" @click="selectMonth((month - 1))">
              {{ dayjs().month((month - 1)).format('MMMM') }}
            </button>
        </div>
    </div>
</template>

<script>
import { inject } from "vue"
import dayjs from 'dayjs'

export default {
    name: "MonthsCalendar",
    setup(props, { emit }) {
        const atticDatepicker = inject('atticDatepicker')
        const calendarView = inject('calendarView')

        const selectMonth = (month) => {
            calendarView.value.date.value = calendarView.value.date.value.month(month)
            emit('changeView', 'dates')
        }

        return {
            selectMonth,
            dayjs
        }
    }
}
</script>
