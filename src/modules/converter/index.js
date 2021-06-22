import Vue from 'vue';
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';

import {mapGetters} from 'vuex';
export default {
  name: 'converter',
  data() {
    return {
      selected: ['RUB', 'USD'],
      inputed: 0,
      result: 0,
    }
  },
  computed: {
    ...mapGetters({
      valutes: 'list/valutes',
      countries: 'list/countries',
    }),
  },
  methods: {
    convert() {
      let defaultValute = {
        Value: 1,
        Nominal: 1
      };
      // First selected valute details
      let firstValute = this.valutes[this.selected[0]] ?? defaultValute,
        firstValuteValue = firstValute.Value * Number(this.inputed),
        firstValuteNominal = firstValute.Nominal;
      // Second selected valute details
      let secondValute = this.valutes[this.selected[1]] ?? defaultValute,
        secondValuteValue = secondValute.Value,
        secondValuteNominal = secondValute.Nominal;
      // Result calculating
      let result = (firstValuteValue / firstValuteNominal) / (secondValuteValue / secondValuteNominal);
      // Rounding to ten thousandths
      this.result = result ? Math.floor(result * 10000) / 10000 : null;
      console.log('result--------------',this.valutes);
    }
  },
}
