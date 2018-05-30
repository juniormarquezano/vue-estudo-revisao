import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import mutations from './mutations'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state, actions, mutations
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
