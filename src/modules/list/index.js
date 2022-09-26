import {mapGetters} from "vuex";

export default {
  name: 'list',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      valutes: 'list/valutes',
      countries: 'list/countries',
    })
  }
}
