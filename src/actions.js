const addProduct = ({ commit }, payload) => {
  commit('ADD_PRODUCT', payload)
}

const removeProduct = ({ commit }, payload) => {
  commit('REMOVE_PRODUCT', payload)
}

const updateProduct = ({ commit }, payload) => {
  commit('UPDATE_PRODUCT', payload)
}

export default {
  addProduct, removeProduct, updateProduct
}
