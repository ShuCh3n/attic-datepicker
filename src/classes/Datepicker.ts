import dayjs from 'dayjs'
import { Ref, ref, watch} from "vue";

export default class Datepicker{
    modelValue: any
    selectedDate: Ref<dayjs.Dayjs | null>
    selectedEndDate: Ref<dayjs.Dayjs | null>
    isRange: boolean
    keepOpen: boolean
    format: string

    constructor(date: any, format: string, isRange: boolean, keepOpen: boolean) {
        this.modelValue = ref(null)

        this.selectedDate = ref(null)
        this.selectedEndDate = ref(null)

        this.keepOpen = keepOpen
        this.isRange = isRange
        this.format = format

        watch(() => this.selectedDate.value, (value, prevValue) => {
            this.getValue()
        })

        watch(() => this.selectedEndDate.value, (value, prevValue) => {
            this.getValue()
        })

        this.setDates(date)
    }

    private setDates(date: any) {
        if(date)
        {
            if(typeof date == 'string') {
                this.selectedDate.value = dayjs(date)

                return
            }

            if(typeof date == 'object' && this.isRange) {
                this.selectedDate.value = dayjs(date[0])

                if(date.length > 1) {
                    this.selectedEndDate.value = dayjs(date[1])
                }
            }
        }
    }

    public selectDate(date: dayjs.Dayjs) {
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
        if(!this.keepOpen)
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

    public getValue(): void {
        if(!this.isRange && this.selectedDate.value) {
            this.modelValue.value = this.selectedDate.value.format(this.format)

            return
        }

        if(this.selectedDate.value || this.selectedEndDate.value)
        {
            this.modelValue.value = [(this.selectedDate.value)? this.selectedDate.value.format(this.format) : null, (this.selectedEndDate.value)? this.selectedEndDate.value.format(this.format) : null]
        }
    }
}


