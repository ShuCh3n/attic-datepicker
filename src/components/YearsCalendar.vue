<template>
    <div class="flex-1">
        <div class="max-h-72 max-w-sm overflow-y-auto space-y-5 font-bold text-sm">
            <button v-for="year in years" class="w-full hover:bg-primary rounded-xl py-3 hover:text-white" @click="selectYear(year)">{{ year }}</button>
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

        const years = computed(() => {
            const years = []
            const startYear = parseInt(dayjs().subtract(100, 'years').format('YYYY'))

            for (let i = 0; i <= 100; i++) {
                years.push(startYear + i)
            }

            return years.reverse()
        })

        const selectYear = (year) => {
            atticDatepicker.selectedDate.value = (atticDatepicker.selectedDate.value)? atticDatepicker.selectedDate.value.year(year) : dayjs().year(year)
            atticDatepicker.selectedEndDate.value = null

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
