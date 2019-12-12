const path = require("path");
const express = require('express');
const app = express();
import styles from './app.module'



app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use(express.static("public"));
app.listen(3000)