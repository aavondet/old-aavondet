var express = require('express');
var path = require('path')
var favicon = require('serve-favicon');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/src'));
app.use(favicon(path.join(__dirname,'src/assets','favicon.ico')));

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '', 'index.html'));
});

app.listen(PORT);
console.log("Listening on port " + PORT);