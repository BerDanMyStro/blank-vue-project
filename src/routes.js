import BlankLogin from './components/content/BlankLogin.vue'
import BlankList from './components/content/BlankList.vue'

export default [
  {
    path: '/',
    component: BlankLogin,
    name: 'login'
  },
  {
    path: '/blankList',
    component: BlankList,
    name: 'secure'
  }
]
