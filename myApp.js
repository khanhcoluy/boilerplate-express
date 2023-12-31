let express = require('express');
let bodyParser = require('body-parser');
let app = express();

// Mount middleware
const loggerMiddleware = (req, res, next) => {
  console.log(`${req.method} ${req.path} - ${req.ip}`)
  next();
};
app.use(loggerMiddleware);
app.use(bodyParser.urlencoded({ extended: false }))
const greetingFunc = (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
}
app.use('/public', express.static(__dirname + '/public'))

// Methods
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/json', (req, res) => {
  const messageStyle = process.env.MESSAGE_STYLE;
  if (messageStyle === 'uppercase') {
    res.json({"message": "HELLO JSON"});
  } else {
    res.json({"message": "Hello json"});
  }
})

app.get('/now', function(req, res, next) {
  req.time = new Date().toString();
  next();
}, function handler(req, res) {
  res.json({ time: req.time })
})

app.get('/:word/echo', (req, res) => {
  const { word } = req.params;
  res.json({ echo: word })
})

app.get('/name', (req, res) => {
  const { first: firstName, last: lastName } = req.query;
  res.json({ name: `${firstName} ${lastName}` })
})

app.post('/name', (req, res) => {
  const { first: firstName, last: lastName } = req.body;
  res.json({ name: `${firstName} ${lastName}` });
})
























module.exports = app;
