const testAction = (store, params) => {
	store.commit('TEST_MUTATION', params)
}
const testes = (store, params) => {
	store.commit('TES_TES', params)
}
const green = (store, params) => {
	store.commit('GREEN', params)
}

export default {
  testAction,
  testes,
  green,
}