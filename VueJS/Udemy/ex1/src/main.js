import Vue from 'vue'
import App from './App.vue'
import Header from './app/header/Header.vue'
import Footer from './app/footer/Footer.vue'
import Server from './app/servers/Server.vue'
import ServerList from './app/servers/List.vue'

Vue.component('app-header', Header)
Vue.component('app-footer', Footer)
Vue.component('app-server-list', ServerList)
Vue.component('app-server', Server)

new Vue({
  el: '#app',
  render: h => h(App)
})
