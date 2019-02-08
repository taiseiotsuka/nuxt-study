const express = require('express')
const router = express.Router()
const axios = require('axios')
const chatApiUrl = require('../../nuxt.config').env.chatApiUrl

router.get('/', function (req, res) {
	axios.get(chatApiUrl + '/user.json')
		.then((response) => {
			res.json(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
})

module.exports = router