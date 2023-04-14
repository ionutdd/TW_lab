const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.originalUrl} ${req.body}`);
  next();
});

app.get('/', function (req, res) {
  res.send('hello');
});

app.listen(3000);
