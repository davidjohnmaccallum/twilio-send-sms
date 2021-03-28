const functions = require('firebase-functions')
const app = require('./app')

exports.send = functions.https.onRequest(app)
