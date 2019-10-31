const path = require("path");
var express = require('express');
var app = express();


// app.get('/', function (req, res) {
//     res.render('home');
// });


app.get('/', function(req, res) {
  res.sendfile('index.html');
});

app.use(express.static(path.join(__dirname, 'html')));


// app.get('/about', function (req, res) {
//     res.render('about');
// });


app.use(express.static("public"));
app.listen(3000);
