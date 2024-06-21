const express = require('express')
const app = express()
app.get('/', function(req, res) {
  res.send("I'm logged in.")
})
app.listen(4000)
require("./bot.js")

//"Listening to meself, I'm a stupid bot."