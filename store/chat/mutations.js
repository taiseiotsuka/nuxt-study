const TEST_MUTATION = (state, payload) => {
	state.store.user = payload.name
	console.log(state.store.user)
}
const TES_TES = (state, payload) => {
	state.testes = payload
	console.log(state.testes)
}
const GREEN = (state, payload) => {
	state.store.user = payload
	// console.log(state.testes)
}



export default {
  TEST_MUTATION,
  TES_TES,
  GREEN,
}