<template>
	<div>
		<p>{{ testes }}</p>
		<p v-on:click="green('ok???')">{{ user }}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'

export default {
	async fetch ({ store, params }) {
		let chat = await axios.get('http://localhost:3000/api/chat')
		store.dispatch('chat/testes', chat.data.name)
	},
	computed: {
		...mapState('chat', {
			user: state => state.store.user,
			testes: state => state.testes,
		})
	},
	methods: {
		...mapActions({
			green: 'chat/green'
		})
	},
}
</script>