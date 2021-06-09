import {mapGetters, mapActions, mapMutations} from 'vuex';
export default {
  name: 'converter',
  data() {
    return {
      selected: ['RUB', 'USD'],
      inputed: "",
      result: null,
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
