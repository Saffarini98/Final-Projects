const path = require("path");
const express = require('express')
const app = express()

// app.get('/', function (req, res) {
//   res.send('Hello World')
// })


app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use(express.static("public"));
app.listen(3000)
