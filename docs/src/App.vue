<template>
    <div class="bg-attic-thirdly flex flex-col justify-center py-14 items-center space-y-8 h-screen">
        <img src="/images/logo.svg" class="w-60"/>

        <h1 class="text-6xl text-[#BF8686] drop-shadow-xl">Attic Datepicker</h1>
        <p class="text-3xl text-red-400">Beautiful date picker compoment for Vue 3, Tailwind v3 using Day.js</p>

        <AtticDatepicker class="w-1/3">
            <div class="bg-white rounded-full divide-x flex p-3 cursor-pointer w-full border-4 border-attic-primary shadow-lg shadow-attic-primary/50">
                <div class="flex-1 px-8 space-y-2">
                    <h3 class="text-sm font-bold">From Date</h3>
                    <div class="text-lg font-bold text-gray-400">Select date</div>
                </div>
                <div class="flex-1 px-8 space-y-2">
                    <h3 class="text-sm font-bold">To Date</h3>
                    <div class="text-lg font-bold text-gray-400">Select date</div>
                </div>
            </div>
        </AtticDatepicker>
    </div>

    <div class="container mx-auto py-16 space-y-8">
        <div class="space-y-8">
            <div class="space-y-3">
                <h2 class="text-xl text-attic-primary">Installation</h2>
                <p class="text-sm">We will show you how to install attic datepicker in your project.</p>
            </div>

            <div class="space-y-5">
                <div class="bg-yellow-100 p-5 rounded-xl border border-yellow-400 text-gray-700 flex items-center space-x-3">
                    <img src="/images/warning.svg" class="w-6" />
                    <div>Attic datepicker relies on Vue v3, Tailwind v3, and Dayjs. Therefore, you need to install these packages first before you can use this package.</div>
                </div>
            </div>

            <div class="space-y-5">
                <h3>Install via npm</h3>

                <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
                    <pre class="language-atom"><code class=" language-atom"> $ npm install -S attic-datepicker</code></pre>
                </div>
            </div>
        </div>

        <div class="space-y-8">
            <div class="space-y-3">
                <h2 class="text-xl text-attic-primary">How it works</h2>
                <p class="text-sm">Setup globally components</p>
            </div>

            <div class="rounded-xl overflow-hidden bg-gray-700 text-white py-6 px-5">
<pre class=" language-js">
<code class=" language-js"><span class="token comment">// index.js</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> createApp <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">'./App.vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> AtticDatepicker <span class="token keyword">from</span> <span class="token string">'attic-datepicker'</span><span class="token punctuation">;</span>
<span class="token comment">// ...</span>

<span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">createApp</span><span class="token punctuation">(</span>App<span class="token punctuation">)</span><span class="token punctuation">;</span>

app<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span>AtticDatepicker<span class="token punctuation">)</span><span class="token punctuation">;</span>
app<span class="token punctuation">.</span><span class="token function">mount</span><span class="token punctuation">(</span><span class="token string">'#app'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code>
</pre>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import AtticDatepicker from "attic-datepicker";

export default {
    name: "App.vue",
    components: {
        AtticDatepicker
    },
    setup(){
        return {
        }
    }
}
</script>
