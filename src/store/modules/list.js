import { $http } from '@/utils/http'

import {
  SET_LIST,
  CHANGE_LOADING
} from '../mutation-types';

import {
  GET_LIST
} from '../action-types';

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
  [GET_LIST]: async ({ commit }) => {
    try {
      commit(CHANGE_LOADING, true)
      const response = await $http(`https://www.cbr-xml-daily.ru/daily_json.js`)
      commit(SET_LIST, response.data.Valute)
    } catch (e) {
      console.log(e);
      throw e
    } finally {
      commit(CHANGE_LOADING, false)
    }
  },
};

const mutations = {
  [CHANGE_LOADING] (state, status) {
    state.isLoading = status
  },
  [SET_LIST] (state, data) {
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
