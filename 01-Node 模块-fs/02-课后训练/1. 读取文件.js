/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2025-02-18 15:33
 * @LastAuthor : Wang Chao
 * @LastTime   : 2025-02-19 14:05
 * @desc       :
 */

const fs = require('fs');

// 1. 同步读取
const res1 = fs.readFileSync('./a.txt', {
  encoding: 'utf8',
});
// console.log(res1);

// 2. 异步读取：回调函数
fs.readFile(
  './a.txt',
  {
    encoding: 'utf8',
  },
  (err, data) => {
    if (err) {
      console.log('err', err);
      return;
    }

    // console.log('data', data);
  },
);

// 3. 异步读取：Promise
fs.promises
  .readFile('./a.txt', {
    encoding: 'utf8',
  })
  .then((res) => {
    console.log('res', res);
  })
  .catch((err) => {
    console.log('err', err);
  });
