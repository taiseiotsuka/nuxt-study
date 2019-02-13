import axios from 'axios'

const testAction = (store, params) => {
	console.log(params)
}
const chatList = (store, params) => {
	store.commit('CHAT_LIST', params)
}
const changeComment = (store, params) => {
	store.commit('CHANGE_COMMENT', params)
}
const addComment = (store, params) => {
	let commentObject = {}
	commentObject[Number(Object.keys(params.chatList).pop()) + 1] = params.comment
	axios.patch('/api/chat/add-comment', commentObject)
		.then((res) => {
			store.commit('MESSAGE_CLEAR')
		})
		.catch((err) => {
			console.log(err)
		})
}

export default {
	testAction,
	chatList,
	changeComment,
	addComment,
}