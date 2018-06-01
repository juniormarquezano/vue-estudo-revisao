import Vue from 'vue'
import Vuex from 'vuex'
import categories from './modules/categories'
import blog from './modules/blog'
import products from './modules/products'

Vue.use(Vuex)

const modules = {
  categories,
  blog,
  products
}

export default new Vuex.Store({
  modules
})
