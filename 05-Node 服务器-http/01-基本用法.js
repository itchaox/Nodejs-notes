/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-17 15:23
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-17 16:49
 * @desc       :
 */

const http = require('http');

const server = http.createServer((req, res) => {
  // req
  // console.log(req.url);
  // console.log(req.method);
  // console.log(req.headers);

  if (req.url === '/p1') {
    res.end('111');
  } else {
    res.end('222');
  }

  // res
  // res.end('Good' + new Date().getTime());
});

server.listen(4396, () => {
  // console.log('listen success');
});
