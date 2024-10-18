const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log('中间件1');

  res.end('done~');
  next();
});

app.use('/home', (req, res, next) => {
  console.log('中间件2222');
});

app.listen(4396);
