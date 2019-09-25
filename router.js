var express = require('express');
var path = require('path')
var favicon = require('serve-favicon');


const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname+'/public'));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.get('/*', (req, res, next) => {
  res.sendFile('./public/index.html');
});

app.listen(PORT);
console.log(PORT);