<template>
  <div>
    <ul id="example-1">
      <li v-for="(value, index) in chatList" :key="index">
        {{ value }}
      </li>
    </ul>
    <input v-model="message" @keyup.enter="addComment({chatList: chatList, comment: message})" class="chat-input" type="text" placeholder="enter your message" />
    <button class="btn btn-default" @click="addComment({chatList: chatList, comment: message})">Add</button>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { mapActions } from 'vuex'
import axios from 'axios'
import firebase from 'firebase'

export default {
  data () {
    return {
      message: ''
    }
  },
  async fetch ({ store }) {
    let chat = await axios.get(process.env.localDomain + '/api/chat/get')
    store.dispatch('chat/chatList', chat.data)
  },
  computed: {
    ...mapState('chat', {
      chatList: state => state.chatList,
    })
  },
  methods: {
    ...mapActions('chat', {
      addComment: 'addComment',
    }),
  },
  mounted () {
    if (!firebase.apps.length) {
      const config = { databaseURL: process.env.chatApiUrl }
      firebase.initializeApp(config)
    }
    let userRef = firebase.database().ref('comment')
    let store = this.$store
    userRef.on('value', function(snapshot) {
      store.dispatch('chat/changeComment', snapshot.val())
    }, 
    function(errorObject) {
      console.log("The read failed: " + errorObject.code);
    } );
  }
}
</script>