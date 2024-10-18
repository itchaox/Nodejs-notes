const express = require('express');

const app = express();

app.post('/login', (req, res) => {
  res.end('login success');
});

app.listen(4396, () => {
  console.log('express listening on port 4396');
});
