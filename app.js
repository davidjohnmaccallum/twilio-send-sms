const express = require('express')
const app = express()



app.listen(process.env.PORT || 9000, err => {
  if (err) return console.error("Could not start server", err)
  console.debug(`Server started on port ${process.env.PORT || 9000}`)
})