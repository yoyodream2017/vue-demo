import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'
import router from './router'
import store from './vuex/store'
import './registerServiceWorker'
import status from './tools/status'
import IsLoading from '@/components/IsLoading'

Vue.config.productionTip = false
Vue.use(status)
Vue.component('is-loading', IsLoading)

axios.interceptors.request.use(config => {
  vm.$store.commit('FETCH_LOADING', true)
  return config
}, err => {
  return Promise.reject(err)
})

axios.interceptors.response.use(response => {
  vm.$store.commit('FETCH_LOADING', false)
  return response
}, err => {
  return Promise.reject(err)
})

const vm = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
