require('dotenv').config()
var bodyParser = require('body-parser')
const Twilio = require('twilio');
const express = require('express')
const coms = require('./lib/coms')

const app = express()
app.use(bodyParser.json())

var accountSid = process.env.TWILIO_ACCOUNT_SID;
var token = process.env.TWILIO_AUTH_TOKEN;
var from = process.env.FROM_NUMBER;

var twilio = new Twilio(accountSid, token);

app.use((req,res,next) => {
  if (req.get('X-API-Key') !== '1234') {
    return res.status(401).send({
      err: 'Missing or invalid X-API-Key header'
    })
  }
  next()
})

app.post('/send-welcome-sms', (req, res) => {

  if (!req.body.name || !req.body.to) {    
    return res.status(400).send({
      err: 'name and to required'
    })
  }

  const welcomeMessage = coms.buildWelcomeSms({ 
    name: req.body.name, 
    to: req.body.to,
    from
  })
  
  console.debug("Sending message", welcomeMessage)

  twilio.messages.create(welcomeMessage, (err, smsRes) => {
    if (err) {
      console.error('Error sending SMS.', welcomeMessage, err)
      return res.status(500).send({
        err: `Error sending SMS. ${err.message || err}`
      })
    }    
    
    console.debug("Sms sent.", smsRes)
    res.send({
      result: "Sent",
      detail: welcomeMessage
    })
  })

})

app.use((req, res, _next) => {
  res.status(404).send({
    err: `No handler for ${req.method} ${req.path}`
  })
})

app.use((err, _req, res, _next) => {
  res.status(500).send({
    err: err.message || err
  })
})

app.listen(process.env.PORT || 9000, err => {
  if (err) return console.error("Could not start server", err)
  console.debug(`Server started on port ${process.env.PORT || 9000}`)
})