<template>
    <div class="bg-attic-thirdly flex flex-col justify-center py-14 items-center space-y-8 h-screen">
        <img src="./images/logo.svg" class="w-60" alt="Attic Datepicker Logo"/>

        <h1 class="text-6xl text-[#BF8686] drop-shadow-xl">Attic Datepicker</h1>
        <p class="text-3xl text-red-400">Beautiful date picker compoment for Vue 3, Tailwind v3 using Day.js</p>

        <AtticDatepicker class="w-1/3" :isRange="true" :autoApply="true" v-model="selectedDate" v-slot="{ value }" format="DD MMM YYYY">
            <div class="bg-white rounded-full divide-x flex p-3 cursor-pointer w-full border-8 border-attic-primary shadow-lg shadow-attic-primary/50">
                <div class="flex-1 px-8 space-y-2">
                    <h3 class="text-sm font-bold">From Date</h3>
                    <div class="text-lg font-bold">
                        <span v-if="value">
                            {{ value[0] }}
                        </span>
                        <span v-else class="text-gray-400">Select date</span>
                    </div>
                </div>
                <div class="flex-1 px-8 space-y-2">
                    <h3 class="text-sm font-bold">To Date</h3>
                    <div class="text-lg font-bold">
                        <span v-if="value && value[1]">
                            {{ value[1] }}
                        </span>
                        <span v-else class="text-gray-400">Select date</span>
                    </div>
                </div>
            </div>
        </AtticDatepicker>
    </div>

    <div class="container mx-auto py-16 space-y-8">
        <div class="space-y-8">
            <div class="space-y-3">
                <h2 class="text-xl text-attic-primary font-bold text-4xl">Installation</h2>
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

                <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
                    <pre class="language-atom"><code class=" language-atom"> $ npm install -S attic-datepicker</code></pre>
                </div>
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-3">
                <h3 class="font-bold text-xl">How it works</h3>
                <p>Setup globally components</p>
            </div>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
                <v-prims language="js" :code="codeExamples.howItWorks.asGlobal"> </v-prims>
            </div>

            <p>Use as single component</p>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
                <v-prims language="html" :code="codeExamples.howItWorks.asSFC"> </v-prims>
            </div>

            <h3 class="font-bold text-xl">Tailwind Config</h3>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
                <v-prims language="js" :code="codeExamples.tailwindConfig"></v-prims>
            </div>

        </div>

        <div>
            <div class="space-y-3">
                <h2 class="text-xl text-attic-primary font-bold text-4xl">Theming options</h2>
                <p>We keep Attic Datepicker flexible as much as possible. So it is really easy to customize the look of your datepicker in order to blend into your project. You can easily change the colors using the Tailwind CSS configuration.</p>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-2 gap-y-8 sm:gap-y-12 lg:gap-y-0 lg:gap-x-10">
                <div  class="pt-6 sm:pt-8">
                    <h3 class="font-bold text-xl">Light Mode</h3>
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

        return {
            selectedDate,
            codeExamples: codeExamples(),
        }
    }
}
</script>
