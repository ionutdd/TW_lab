//http://localhost:3000/foo?delay=10000 --> link to get a delay of 10s 
//http://localhost:3000/foo -->link to get no delay

const express = require('express');
const app = express();

function delayMiddleware(req, res, next) {
  const delay = req.query.delay;
  if (delay) {
    setTimeout(next, delay);
  } else {
    next();
  }
}

app.use(delayMiddleware);

app.get('/foo', (req, res) => {
  res.send('Hello from /foo');
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});