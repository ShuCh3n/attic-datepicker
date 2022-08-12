<template>
    <div>
        <button class="bg-white rounded border py-3 px-6">
            {{ dayjs() }}
        </button>

        <div>

        </div>
    </div>
</template>

<script>
import dayjs from 'dayjs'

export default {
    name: 'AtticDatepicker',
    setup() {
        return {
            dayjs
        }
    }
}
</script>
