<template>
    <div class="space-y-2">
        <div class="border rounded border p-3">
            {{ viewDate.date.value.format('DD MMM YYYY') }}
        </div>

        <div class="absolute bg-white rounded-[28px] border py-5 px-6 shadow-xl flex items-start space-x-3 z-[99]">
            <button @click="viewDate.previousMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full">
                <i class="fas fa-chevron-left"></i>
            </button>

            <div class="flex-1 flex space-x-16">
                <MonthCalendar v-for="x in 1" :calendar="calendar.monthView.date(viewDate.date.value.add((x - 1), 'month'))" :date="viewDate.date.value.add((x - 1), 'month')" />
            </div>

            <button @click="viewDate.nextMonth()" class="w-10 h-10 hover:bg-gray-100 rounded-full">
                <i class="fas fa-chevron-right"></i>
            </button>
        </div>

    </div>
</template>

<script>
import { useCalendar } from './modules/calendar'
import { ref, computed, watch } from 'vue'

import dayjs from 'dayjs'
import localeData from 'dayjs/plugin/localeData'
import weekday from 'dayjs/plugin/weekday'

import MonthCalendar from './components/MonthCalendar'

dayjs.extend(localeData)
dayjs.extend(weekday)

export default {
    name: 'AtticDatepicker',
    props: {
        date: String
    },
    components: {
        MonthCalendar
    },
    setup(props) {
        const { calendar } = useCalendar()

        const viewDate = computed(() => {
            const date = ref((props.date)? dayjs(props.date) : dayjs())

            const previousMonth = () => {
                date.value = date.value.subtract(1, 'month')
            }

            const nextMonth = () => {
                date.value = date.value.add(1, 'month')
            }

            return {
                previousMonth,
                nextMonth,
                date
            }
        })

        return {
            viewDate,
            calendar,
            dayjs
        }
    }
}
</script>
