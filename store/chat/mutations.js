const CHAT_LIST = (state, payload) => {
	state.chatList = payload
}
const CHANGE_COMMENT = (state, payload) => {
	state.chatList = Object.assign({}, state.chatList, payload)
}
const MESSAGE_CLEAR = (state, payload) => {
	console.log(state.message)
}

export default {
  CHAT_LIST,
  CHANGE_COMMENT,
  MESSAGE_CLEAR,
}