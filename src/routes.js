import BlankLogin from './components/content/BlankLogin.vue'
import BlankList from './components/content/BlankList.vue'
import BlankTable from './components/content/BlankTable'

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
  },
  {
    path: '/blankTable',
    component: BlankTable,
    name: 'secure'
  }
]
