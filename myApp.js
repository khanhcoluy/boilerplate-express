let express = require('express');
let app = express();

const greetingFunc = (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
}
app.use('/public', express.static(__dirname + '/public'))
app.get('/', greetingFunc);


































module.exports = app;
