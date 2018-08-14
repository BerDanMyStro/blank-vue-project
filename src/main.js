// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import LearnApp from './LearnApp'
import VueRouter from 'vue-router'
import Routes from './routes'

// Css Import
import './css/main.css'

Vue.use(VueRouter)
Vue.config.productionTip = false

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

/* eslint-disable no-new */
new Vue({
  el: '#learnApp',
  components: { LearnApp },
  template: '<LearnApp/>',
  router: router
})
