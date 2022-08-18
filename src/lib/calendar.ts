import { computed } from 'vue'
import { usePreviousDate, useCurrentDate } from "./fn"

export const useCalendar = () => {
    const calendar = computed(() => {
        return {
            monthView: {
                date: (inputDate: string) => {
                    return usePreviousDate(inputDate).concat(useCurrentDate(inputDate))
                }
            }
        }
    })

    return {
        calendar
    }
}
