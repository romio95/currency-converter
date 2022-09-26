import Vue from 'vue';
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import 'vue-select/dist/vue-select.css';
import loader from '@/components/Loader.vue'

import { mapGetters } from 'vuex';

export default {
  name: 'converter',
  data() {
    return {
      selected: ['RUB', 'USD'],
      inputed: 0,
      result: 0,
    }
  },
  components: {
    loader
  },
  computed: {
    ...mapGetters({
      valutes: 'list/valutes',
      countries: 'list/countries'
    }),
  },
  methods: {
    convert() {
      let defaultValute = {
        Value: 1,
        Nominal: 1
      };
      // First selected valute details
      let firstValute = this.valutes[this.selected[0]] ?? defaultValute
      const firstValuteValue = firstValute.Value * Number(this.inputed)
      const firstValuteNominal = firstValute.Nominal;
      const secondValute = this.valutes[this.selected[1]] ?? defaultValute
      const secondValuteValue = secondValute.Value
      const secondValuteNominal = secondValute.Nominal
      let result = (firstValuteValue / firstValuteNominal) / (secondValuteValue / secondValuteNominal);
      this.result = result ? Math.floor(result * 10000) / 10000 : null;
    }
  }
}
