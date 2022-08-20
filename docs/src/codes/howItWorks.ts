const howItWorks = {
    asGlobal: `// index.js
import { createApp } from 'vue';
import App from '@/App.vue';
import AtticDatepicker from 'attic-datepicker';
// ...

const app = createApp(App);

app.use(AtticDatepicker);
app.mount('#app');
`,
    asSFC: `<!-- Single file component -->
<template>
  <div class="flex">
    <litepie-datepicker v-model="selectedDate"></litepie-datepicker>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import AtticDatepicker from 'attic-datepicker';
  
  export default {
    components:{
      AtticDatepicker
    },
    setup() {
      const selectedDate = ref([]);
      
      return {
        selectedDate
      };
    }
  }
</script>
`
}

export default howItWorks