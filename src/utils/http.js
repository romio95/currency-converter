import Vue from 'vue';
import store from '@/store';
import router from '@/router';
import axios from 'axios';
import VueAxios from 'vue-axios';

Vue.use(VueAxios, axios);



// for multiple parallel requests
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

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
    const originalRequest = error.config;
    switch (error.response.status) {
      case 500: {
        router.push({name: 'server-not-found'}).catch(() => {
          console.log()
        });
        break;
      }
      case 404: {
        router.push({name: 'not-found'}).catch(() => {
          console.log()
        });
        break;
      }
      default: {
        break;
      }
    }
    if (error.response.status === 401 && !originalRequest.retry) {
      if (isRefreshing) {
        return new Promise(((resolve, reject) => {
          failedQueue.push({resolve, reject});
        })).then((token) => {
          originalRequest.headers.Authorization = `Bearer ${token}`;
          return Vue.axios(originalRequest);
        }).catch(error => error);
      }

      originalRequest.retry = true;
      isRefreshing = true;

      return new Promise(((resolve, reject) => {
        $http.post('v1/auth/refresh', {token: localStorage.getItem('user_token')})
          .then(response => {
            store.commit(`auth/SET_TOKEN`, response.data.access_token);
            originalRequest.headers.Authorization = `Bearer ${response.data.access_token}`;
            processQueue(null, response.data.access_token);
            resolve(Vue.axios(originalRequest));
          })
          .catch((error) => {
            console.log(error);
            router.push({name: 'home'}).catch(() => {console.log()});
            store.commit(`auth/REMOVE_TOKEN`);
            processQueue(error, null);
            reject(error);
          })
          .then(() => {
            isRefreshing = false;
          });
      }));
    }
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
