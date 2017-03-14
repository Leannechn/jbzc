import Vue from 'vue'
import Router from 'vue-router'
//import Hello from 'components/Hello'
import Home from 'pages/Home'
import Detail from 'pages/Detail'
import Search from 'pages/Search'
import RedPack from 'pages/RedPack'
import AccountCenter from 'pages/account/Center'
import AccountMine from 'pages/account/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/Detail', name: 'Detail', component: Detail },
    { path: '/Search', name: 'Search', component: Search },
    { path: '/RedPack', name: 'RedPack', component: RedPack },
    { path: '/AccountCenter', name: 'AccountCenter', component: AccountCenter },
    { path: '/AccountMine', name: 'AccountMine', component: AccountMine }
  ]
})
