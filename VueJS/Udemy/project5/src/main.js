import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

import router from './router'
import store from './store'

axios.defaults.baseURL = 'https://vuejs-update.firebaseio.com/'

axios.interceptors.request.use(config => {
  console.log('config', config)
  return config
})

axios.interceptors.response.use(res => {
  console.log('res', res)
  return res
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
})
