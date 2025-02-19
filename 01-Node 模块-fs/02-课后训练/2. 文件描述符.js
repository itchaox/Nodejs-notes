/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2025-02-19 13:43
 * @LastAuthor : Wang Chao
 * @LastTime   : 2025-02-19 16:35
 * @desc       :
 */

const fs = require('fs');

fs.open('./a.txt', (err, fd) => {
  if (err) {
    console.log('err', err);
    return;
  }

  console.log(fd);

  fs.fstat(fd, (err, stats) => {
    if (err) return;

    console.log('stats', stats);

    fs.close(fd, (err, data) => {
      if (err) return;

      console.log('关闭成功');
    });
  });
});
