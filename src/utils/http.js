import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);

export const $http = axios.create({
  baseURL: process.env.VUE_APP_ROOT_API,
  headers: {
    'Accept': 'application/json',
  }
});
$http.interceptors.request.use((config) => {
  return config;
});
$http.interceptors.response.use((response) => {
    return response;
  }, (error) => {
    return Promise.reject(error);
  }
);

export default function install(Vue) {
  Object.defineProperty(Vue.prototype, '$http', {
    get() {
      return $http
    }
  })
}
