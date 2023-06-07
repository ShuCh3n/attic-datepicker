<template>
    <div class="flex-1">
        <div class="max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm">
            <button type="button" v-for="year in years" class="w-full hover:bg-attic-thirdly rounded-xl py-3 hover:text-white" @click="selectYear(year)">{{ year }}</button>
        </div>
    </div>
</template>

<script>
import { computed, inject } from 'vue'
import dayjs from "dayjs";

export default {
    name: "YearCalendar",
    setup(props, { emit }) {
        const atticDatepicker = inject('atticDatepicker')
        const calendarView = inject('calendarView')

        const years = computed(() => {
            const years = []

            for (let i = 0; i <= (atticDatepicker.endYear - atticDatepicker.startYear); i++) {
                years.push(atticDatepicker.startYear + i)
            }

            return years.reverse()
        })

        const selectYear = (year) => {
            calendarView.value.date.value = calendarView.value.date.value.year(year)
            emit('changeView', 'dates')
        }

        return {
            years,
            selectYear,
            dayjs
        }
    }
}
</script>

<style scoped>

</style>
