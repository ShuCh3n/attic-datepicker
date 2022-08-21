<p align="center">
    <a href="https://www.buymeacoffee.com/shuch3n" target="_blank">
        <img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="24">
    </a>
    <a href="#" target="_blank">
        <img src="https://img.shields.io/npm/l/attic-datepicker?style=for-the-badge" alt="Buy Me A Coffee" height="24">
    </a>
    <a href="#" target="_blank">
        <img src="https://img.shields.io/github/issues/ShuCh3n/attic-datepicker?style=for-the-badge" alt="Buy Me A Coffee" height="24">
    </a>
    <a href="https://www.npmjs.com/package/attic-datepicker" target="_blank">
        <img src="https://img.shields.io/npm/dw/attic-datepicker?style=for-the-badge" alt="Buy Me A Coffee" height="24">
    </a>
</p>

---

<p align="center">
    <a href="https://atticdatepicker.com" target="_blank">
      <img alt="Attic Datepicker" width="128" src="https://atticdatepicker.com/assets/logo.fcdc01bf.svg" />
    </a>
    <br><br>
    Looking for a date picker that is not only beautiful and easy to use but also contains tons of features? Look no further than the Attic Datepicker! With our amazing Tailwind CSS and Vue 3 tool, you'll be able to create an incredible date picker
</p>

---

## Documentation

You can read the full documentation on the website, visit [atticdatepicker.com](https://atticdatepicker.com).

## Example

The reason I created this package was because I couldn't find a datepicker that was easy to implement, up to date or flexible. Here is a simple example how to use Attic Datepicker. 

```vue
<template>
  <div>
    <attic-datepicker format="MM DD YYYY" v-model="selectedDate" />
  </div>
</template>

<script>
import { ref } from 'vue';
import AtticDatepicker from 'attic-datepicker';

export default {
  components: {
      AtticDatepicker
  },
  setup() {
    const selectedDate = ref([]);

    return {
        selectedDate
    };
  }
};
</script>
```

## Changelog
All notable changes to this project will be documented in this file, [Read](CHANGELOG.md).

## License
The [MIT](LICENSE) License. Please [see](http://opensource.org/licenses/MIT) for more information.

## Thanks to
- [Vue](https://vuejs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [day.js](https://day.js.org/)
- and other support...
