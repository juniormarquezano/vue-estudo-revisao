import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Products from './components/Products'

Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/products', component: Products, name: 'products' }
  ]
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
