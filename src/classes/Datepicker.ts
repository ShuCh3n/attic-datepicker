import dayjs from 'dayjs'
import {Ref, ref} from "vue";

export default class Datepicker{
    selectedDate: Ref<dayjs.Dayjs | null>
    selectedEndDate: Ref<dayjs.Dayjs | null>
    isRange: boolean
    autoApply: boolean

    constructor(date: string|null, selectedEndDate: string|null, isRange: boolean, autoApply: boolean) {
        this.selectedDate = ref((date)? dayjs(date) : null)
        this.selectedEndDate = ref(null)

        this.autoApply = autoApply
        this.isRange = isRange

        if(isRange) {
            this.selectedEndDate.value = (selectedEndDate)? dayjs(selectedEndDate) : null
        }
    }

    public selectDate(date: dayjs.Dayjs)
    {
        if(!this.isRange) {
            this.selectedDate.value = date
            return
        }

        if(this.selectedDate.value && this.selectedEndDate.value) {
            this.selectedDate.value = date
            this.selectedEndDate.value = null
            return
        }

        if(!this.selectedDate.value || date.diff(this.selectedDate.value, 'day') < 0) {
            this.selectedDate.value = date
            return
        }

        if(date.diff(this.selectedDate.value, 'day') > 0) {
            this.selectedEndDate.value = date
        }
    }

    public ableToClose(): boolean {

        if(this.autoApply)
        {
            if(this.isRange && this.selectedDate.value && this.selectedEndDate.value)
            {
                return true
            }

            if(!this.isRange)
            {
                return true
            }
        }

        return false
    }
}


