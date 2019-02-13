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
router.get('/get', function (req, res) {
	axios.get(chatApiUrl + '/comment.json')
		.then((response) => {
			res.json(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
})
router.patch('/add-comment', function (req, res) {
	axios.patch(chatApiUrl + '/comment.json', req)
		.then((response) => {
			res.json(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
})
router.get('/name', function (req, res) {
	axios.get(chatApiUrl + '/name.json')
		.then((response) => {
			res.json(response.data)
		})
		.catch((error) => {
			console.log(error)
		})
})
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