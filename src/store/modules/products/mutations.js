
const ADD_PRODUCT = (state, obj) => {
  // Dessa forma está sendo feito direto na mutation não em uma action
  // console.log(obj)
  state.products.push(obj)
}

const REMOVE_PRODUCT = (state, obj) => {
  state.products.splice(obj, 1)
}

const UPDATE_PRODUCT = (state, obj) => {
  state.product = obj.product
}

export default {
  ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT
}
