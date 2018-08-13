// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import PageHeader from './PageHeader'
import PageWrapper from './PageWrapper'
import PageFooter from './PageFooter'

// Css Import
import './css/main.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#page--header',
  components: { PageHeader },
  template: '<PageHeader/>'
})
new Vue({
  el: '#page--wrapper',
  components: { PageWrapper },
  template: '<PageWrapper/>'
})
new Vue({
  el: '#page--footer',
  components: { PageFooter },
  template: '<PageFooter/>'
})
