import { $http } from '@/utils/http'

const state = {
  valutes: [],
  countries: [],
  loading: false
};

const getters = {
  valutes: state => state.valutes,
  countries: state => state.countries,
  loading: state => state.loading,
};

const actions = {
  async getList ({ commit })  {
    try {
      commit('changeLoading', true)
      const response = await $http(`https://www.cbr-xml-daily.ru/daily_json.js`)
      commit('setList', response.data.Valute)
    } catch (e) {
      console.log(e);
      throw e
    } finally {
      commit('changeLoading', false)
    }
  },
};

const mutations = {
  changeLoading (state, status) {
    state.isLoading = status
  },
  setList (state, data) {
    state.valutes = data;
    for (let code in data) {
      state.countries.push(code)
    }
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
