const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {
  const urlString = req.url;
  const urlInfo = url.parse(urlString);

  const queryString = urlInfo.query;
  const queryInfo = qs.parse(queryString);

  console.log('🚀  paramsString:', queryInfo);

  res.end('end~');
});

server.listen(4396, () => {
  console.log('监听成功~');
});
