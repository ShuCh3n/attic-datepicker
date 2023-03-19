import dayjs from 'dayjs'
import { Ref, ref, watch} from "vue";

export default class Datepicker{
    modelValue: any
    selectedDate: Ref<dayjs.Dayjs | null>
    selectedEndDate: Ref<dayjs.Dayjs | null>
    isRange: boolean
    keepOpen: boolean
    format: string
    disableDatesBefore: dayjs.Dayjs|null
    disableDatesAfter: dayjs.Dayjs|null
    disableDates: Array<dayjs.Dayjs|Array<dayjs.Dayjs>>|null
    enableDatesBefore: dayjs.Dayjs|null
    enableDatesAfter: dayjs.Dayjs|null
    enableDates: Array<dayjs.Dayjs|Array<dayjs.Dayjs>>|null
    constructor(date: any, format: string, isRange: boolean, keepOpen: boolean) {
        this.modelValue = ref(null)

        this.selectedDate = ref(null)
        this.selectedEndDate = ref(null)

        this.keepOpen = keepOpen
        this.isRange = isRange
        this.format = format

        this.disableDatesBefore = null
        this.disableDatesAfter = null
        this.disableDates = null

        this.enableDatesBefore = null
        this.enableDatesAfter = null
        this.enableDates = null

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
        if(this.isDisabledDate(date)) {
            return
        }

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

    public isDisabledDate(date: dayjs.Dayjs): boolean {
        let isDiabled = false

        if(this.disableDatesBefore) {
            isDiabled = date.format('YYYYMMDD') < this.disableDatesBefore.format('YYYYMMDD')
        }

        if(this.disableDatesAfter) {
            isDiabled = date.format('YYYYMMDD') > this.disableDatesAfter.format('YYYYMMDD')
        }

        if(this.disableDates) {
            isDiabled = this.disableDates.filter((disableDate) => {
                if(disableDate.constructor.name === 'Array') {
                    if(disableDate.length === 2) {
                        return date.format('YYYYMMDD') >= disableDate[0].format('YYYYMMDD') && date.format('YYYYMMDD') <= disableDate[1].format('YYYYMMDD')
                    }

                    return false
                }

                return disableDate.format('YYYYMMDD') === date.format('YYYYMMDD')
            }).length > 0
        }

        if(this.enableDatesBefore) {
            isDiabled = date.format('YYYYMMDD') > this.enableDatesBefore.format('YYYYMMDD')
        }

        if(this.enableDatesAfter) {
            isDiabled = date.format('YYYYMMDD') < this.enableDatesAfter.format('YYYYMMDD')
        }

        if(this.enableDates) {
            isDiabled = this.enableDates.filter((enableDate) => {
                if(enableDate.constructor.name === 'Array') {
                    if(enableDate.length === 2) {
                        return date.format('YYYYMMDD') >= enableDate[0].format('YYYYMMDD') && date.format('YYYYMMDD') <= enableDate[1].format('YYYYMMDD')
                    }

                    return false
                }

                return enableDate.format('YYYYMMDD') === date.format('YYYYMMDD')
            }).length === 0
        }

        return isDiabled
    }

    public setDisableDatesBefore(date: string|dayjs.Dayjs): void {
        if(typeof date === 'string') {
            this.disableDatesBefore = dayjs(date)

            return
        }

        this.disableDatesBefore = date
    }

    public setDisableDatesAfter(date: string|dayjs.Dayjs): void {
        if(typeof date === 'string') {
            this.disableDatesAfter = dayjs(date)

            return
        }

        this.disableDatesAfter = date
    }

    public setDisableDates(dates: Array<String|dayjs.Dayjs>): void {
        this.disableDates = dates.map((date) => {
            if(typeof date === 'string') {
                return dayjs(date)
            }

            if(date.constructor.name === 'Array') {
                return date.map((day) => {
                    if(typeof day === 'string') {
                        return dayjs(day)
                    }

                    return day
                })
            }

            return date
        })
    }

    public setEnableDatesBefore(date: string|dayjs.Dayjs) {
        if(typeof date === 'string') {
            this.enableDatesBefore = dayjs(date)

            return
        }

        this.enableDatesBefore = date
    }

    public setEnableDatesAfter(date: string|dayjs.Dayjs) {
        if(typeof date === 'string') {
            this.enableDatesAfter = dayjs(date)

            return
        }

        this.enableDatesAfter = date
    }

    public setEnableDates(dates: Array<String|dayjs.Dayjs>) {

        this.enableDates = dates.map((date) => {
            if(typeof date === 'string') {
                return dayjs(date)
            }

            if(date.constructor.name === 'Array') {
                return date.map((day) => {
                    if(typeof day === 'string') {
                        return dayjs(day)
                    }

                    return day
                })
            }

            return date
        })
    }

}


