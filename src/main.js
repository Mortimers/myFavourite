// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '../node_modules/swiper/dist/css/swiper.min.css'
import BScroll from 'better-scroll'
import axios from 'axios'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.prototype.$axios = axios
Vue.prototype.HOST = "/api"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  BScroll,
  components: { App },
  template: '<App/>'
})
