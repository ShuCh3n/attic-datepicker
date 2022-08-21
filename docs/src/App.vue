<template>
    <div class="bg-attic-thirdly flex flex-col justify-between md:py-14 py-5 items-center space-y-8 h-screen">
        <div class="w-full">
            <div class="container mx-auto xl:px-0 px-5">
                <div class="justify-end flex space-x-5">
                    <a href="https://github.com/ShuCh3n/attic-datepicker" target="_blank">
                        <img src="/images/github.svg" class="w-10" />
                    </a>

                    <a href="https://www.buymeacoffee.com/shuch3n" target="_blank" class="font-[Comfortaa] rounded-lg text-white font-white bg-[#FF5F5F] inline py-2 px-3 hover:bg-red-600">
                        🌮 Buy me a taco
                    </a>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-center space-y-8 md:px-0 px-5">
            <img src="./images/logo.svg" class="md:w-60 w-32" alt="Attic Datepicker Logo"/>

            <h1 class="md:text-6xl text-4xl text-white drop-shadow-xl font-['Comfortaa']">Attic Datepicker</h1>
            <p class="md:text-2xl text-lg text-white">Beautiful date picker compoment for Vue 3, Tailwind v3 using Day.js</p>

            <AtticDatepicker class="w-full" :isRange="true" :autoApply="true" v-model="selectedDate" v-slot="{ value }" format="DD MMM YYYY">
                <div class="bg-white rounded-full divide-x flex p-3 cursor-pointer w-full md:border-8 border-4 border-attic-primary shadow-lg shadow-attic-primary/50">
                    <div class="flex-1 px-8 space-y-2">
                        <h3 class="md:text-sm text-xs font-bold">From Date</h3>
                        <div class="md:text-lg text-sm font-bold">
                            <span v-if="value">
                                {{ value[0] }}
                            </span>
                            <span v-else class="text-gray-400">Select date</span>
                        </div>
                    </div>
                    <div class="flex-1 px-8 space-y-2">
                        <h3 class="md:text-sm text-xs font-bold">To Date</h3>
                        <div class="md:text-lg text-sm font-bold">
                            <span v-if="value && value[1]">
                                {{ value[1] }}
                            </span>
                            <span v-else class="text-gray-400">Select date</span>
                        </div>
                    </div>
                </div>
            </AtticDatepicker>
        </div>

        <div>

        </div>
    </div>

    <div class="container mx-auto py-16 space-y-8 xl:px-0 px-3">
        <div class="space-y-8">
            <div class="space-y-3">
                <h2 class="text-attic-primary font-bold md:text-4xl text-2xl">Installation</h2>
                <p>We will show you how to install attic datepicker in your project.</p>
            </div>

            <div class="space-y-5">
                <div class="bg-yellow-100 p-5 rounded-xl border border-yellow-400 text-gray-700 flex items-center space-x-3">
                    <img src="/images/warning.svg" class="w-6" />
                    <div>Attic datepicker relies on Vue v3, Tailwind v3, and Dayjs. Therefore, you need to install these packages first before you can use this package.</div>
                </div>
            </div>

            <div class="space-y-5">
                <h3 class="font-bold text-xl">Install via npm</h3>

                <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                    <pre class="language-atom"><code class=" language-atom"> $ npm install -S attic-datepicker</code></pre>
                </div>
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-3">
                <h3 class="font-bold text-xl">How it works</h3>
                <p>Setup globally components</p>
            </div>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                <v-prims language="js" :code="codeExamples.howItWorks.asGlobal"> </v-prims>
            </div>

            <p>Use as single component</p>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                <v-prims language="html" :code="codeExamples.howItWorks.asSFC"> </v-prims>
            </div>

            <h3 class="font-bold text-xl">Tailwind Config</h3>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                <v-prims language="js" :code="codeExamples.tailwindConfig"></v-prims>
            </div>

        </div>

        <div>
            <div class="space-y-3">
                <h2 class="text-attic-primary font-bold md:text-4xl text-2xl">Theming options</h2>
                <p>We keep Attic Datepicker flexible as much as possible. So it is really easy to customize the look of your datepicker in order to blend into your project. You can easily change the colors using the Tailwind CSS configuration.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-10">
                <div  class="pt-6 sm:pt-8 space-y-3">
                    <h3 class="font-bold text-xl">Light Mode</h3>

                    <p>
                        You can easily change the light mode color palette colors by updating the <code class="text-purple-600">`attic-primary`</code> variable in the tailwind config.
                    </p>

                    <AtticDatepicker :autoApply="true"></AtticDatepicker>
                </div>

                <div  class="pt-6 sm:pt-8 space-y-3">
                    <h3 class="font-bold text-xl">Dark Mode</h3>

                    <div class="bg-orange-400 rounded p-3 text-white space-x-3 border border-orange-500">
                        <img src="/images/horn.svg" class="w-6 inline" />
                        <span class="font-bold">Coming in the next update...</span>
                    </div>
                </div>
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-3">
                <h2 class="text-attic-primary font-bold md:text-4xl text-2xl">Playground</h2>
                <p>You can easily customize Attic Datepicker by tweaking the props.</p>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Default (Out of the box)</h3>

                <p>This is the default look and feel without any configuration.</p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.defaults"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Range Select</h3>

                <p>You can enable range select by changing <code class="text-purple-600">`isRange`</code> prop to <code class="text-purple-600">`true`</code></p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker :isRange="true"></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.asRange"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Custom Format</h3>

                <p>You can display custom date format by changing the <code class="text-purple-600">`format`</code> prop.</p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker format="MMM DD YYYY"></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.customFormat"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Show multiple months</h3>

                <p>Do you want to show multiple months in your calendar? You can easily set <code class="text-purple-600">`showXMonths`</code> prop to any amount.</p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker showXMonths="2" :isRange="true"></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.showMultipleMonths"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Keep Open</h3>

                <p>Keep the calendar open after you select a date. Update <code class="text-purple-600">`keepOpen`</code> prop to <code class="text-purple-600">`true`</code>.</p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker :keepOpen="true"></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.keepOpen"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Start from</h3>

                <p>If you want to start from a specific date you can easily set the start date in your v-model value.</p>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker :isRange="true" v-model="startFrom"></attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.startFrom"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Disable Dates</h3>

                <p>Currently, it is not possible to use disabling dates functionality. I'm still thinking which is the best way to implement this functionality. I want users to be able to disable individual dates and/or ranges. This function will be the top priority in the next update.</p>

                <div class="bg-orange-400 rounded p-3 text-white space-x-3 border border-orange-500">
                    <img src="/images/horn.svg" class="w-6 inline" />
                    <span class="font-bold">Coming in the next update...</span>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Trigger</h3>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <div class="flex space-x-3">
                            <attic-datepicker trigger="open-datepicker" class="flex-1"></attic-datepicker>

                            <button type="button" id="open-datepicker" class="px-3 py-2 rounded bg-blue-500 border-b-2 border-blue-700 hover:bg-blue-600 font-bold text-white">Open Calendar</button>
                        </div>

                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.trigger"></v-prims>
                        </div>
                    </div>
                </div>
            </div>

            <div class="space-y-3">
                <h3 class="font-bold text-xl">Slot</h3>

                <div class="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-8">
                    <div class="w-full max-w-md">
                        <attic-datepicker v-slot="{ value, placeholder, clear }" placeholder="Select Date">
                            <div class="shadow-xl border-2 border-blue-600 rounded-full p-3 px-5 font-bold flex items-center justify-between">
                                <div>
                                    {{ value || placeholder }}
                                </div>

                                <img src="/images/calendar-silhouette.svg" class="w-5" />
                            </div>
                        </attic-datepicker>
                    </div>
                    <div class="col-span-2">
                        <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5 md:overflow-x-hidden overflow-x-auto">
                            <v-prims language="html" :code="playground.slot"></v-prims>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
import { ref } from 'vue'
import codeExamples from './codeExamples';

import AtticDatepicker from "attic-datepicker";
import VPrims from './prims'

export default {
    name: "App.vue",
    components: {
        AtticDatepicker,
        VPrims
    },
    setup(){
        const selectedDate = ref(null)
        const startFrom = ref(['1990-01-01'])

        return {
            selectedDate,
            startFrom,
            codeExamples: codeExamples(),
            playground: codeExamples().playground,
        }
    }
}
</script>
