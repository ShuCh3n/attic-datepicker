let usePlayground;

export default usePlayground = () => {
    const defaults = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref([]);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const asRange = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate" :isRange="true"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref([]);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const customFormat = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate" format="MMM DD YYYY"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref([]);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const showMultipleMonths = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate" showXMonths="2" :isRange="true"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref([]);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const keepOpen = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate" :keepOpen="true"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref([]);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const startFrom = `<template>
    <div class="flex">
        <attic-datepicker v-model="selectedDate" :isRange="true"></attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref(['1990-01-01']);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const trigger = `<template>
    <div class="flex space-x-3">
        <attic-datepicker v-model="selectedDate" trigger="open-datepicker" class="flex-1"></attic-datepicker>
        <button type="button" id="open-datepicker" class="px-3 py-2 rounded bg-blue-500 border-b-2 border-blue-700 hover:bg-blue-600 font-bold text-white">Open Calendar</button>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref(null);
            
            return {
                selectedDate
            };
        }
    };
</script>`

    const slot = `<template>
    <div class="flex">
        <attic-datepicker v-slot="{ value, placeholder, clear }" placeholder="Select Date" v-model="selectedDate">
            <div class="shadow-xl border-2 border-blue-600 rounded-full p-3 px-5 font-bold flex items-center justify-between">
                <div>
                    {{ value || placeholder }}
                </div>

                <img src="/images/calendar-silhouette.svg" class="w-5" />
            </div>
        </attic-datepicker>
    </div>
</template>
    
<script>
    import { ref } from 'vue';
    
    export default {
        name: 'MyComponent',
        setup() {
            const selectedDate = ref(null);
            
            return {
                selectedDate
            };
        }
    };
</script>`


    return {
        defaults,
        asRange,
        customFormat,
        showMultipleMonths,
        keepOpen,
        startFrom,
        trigger,
        slot
    }
}