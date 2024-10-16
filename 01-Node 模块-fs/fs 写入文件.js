/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 23:01
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-16 23:04
 * @desc       :
 */

const fs = require('fs');

const text = '测试 fs 写入文件\n';

fs.writeFile(
  './abc.txt',
  text,
  {
    flag: 'a+',
  },
  (err) => {
    if (err) {
      console.log('写入错误', err);
    } else {
      console.log('写入成功');
    }
  },
);

fs.promises
  .writeFile('./aaa.txt', text, {
    flag: 'a+',
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
