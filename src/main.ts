import { App } from 'vue';

import AtticDatepicker from './AtticDatepicker.vue'
import Calendar from "./components/Calendar.vue";

const api = {
    install: (app: App) => {
        app.component('AtticDatepicker', AtticDatepicker);
    },
};

export default Object.assign(AtticDatepicker, api, {
    Calendar,
});