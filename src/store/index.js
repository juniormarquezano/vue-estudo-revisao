import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import mutations from './mutations'
import state from './state'
import categories from './modules/categories'
import blog from './modules/blog'

Vue.use(Vuex)

const modules = {
  categories,
  blog
}

export default new Vuex.Store({
  actions,
  mutations,
  state,
  modules
})
