<template>
    <div>
        <YearsCalendar v-show="displayView === 'years'" @changeView="changeView" />
        <MonthsCalendar v-show="displayView === 'months'" @changeView="changeView" />
        <DatesCalendar v-show="displayView === 'dates'" @changeView="changeView" />
    </div>
</template>

<script>
import { ref, watch, provide, computed } from "vue";
import { useCalendar } from "../lib/calendar"

import YearsCalendar from "./YearsCalendar.vue"
import MonthsCalendar from "./MonthsCalendar.vue"
import DatesCalendar from "./DatesCalendar.vue"

export default {
    name: "Calendar",
    props:{
        date: Object
    },
    components: {
        YearsCalendar,
        MonthsCalendar,
        DatesCalendar
    },
    setup(props) {
        const { calendar } = useCalendar()

        const displayView = ref('dates')
        const monthDays = computed(() => calendar.value.monthView.date(props.date))
        const date = ref(props.date)

        provide('date', date)
        provide('monthDays', monthDays)

        const changeView = (view) => {
            displayView.value = view
        }

        watch(() => props.date, (value, prevValue) => {
            date.value = value
        })

        return {
            displayView,
            changeView
        }
    }
}
</script>
