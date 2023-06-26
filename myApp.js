let express = require('express');
let app = express();

const greetingFunc = (req, res) => {
  res.send("Hello Express");
}
app.get('/', greetingFunc);


































module.exports = app;
