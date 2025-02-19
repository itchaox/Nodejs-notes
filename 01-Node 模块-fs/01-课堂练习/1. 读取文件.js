/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2025-02-18 15:19
 * @LastAuthor : Wang Chao
 * @LastTime   : 2025-02-18 15:42
 * @desc       :
 */

const fs = require('fs');

// 1. 同步读取
const res1 = fs.readFileSync('./test.txt', {
  encoding: 'utf8',
});
// console.log('🚀  res1:', res1);
// console.log('log--');

// 2. 异步读取：回调函数
fs.readFile(
  './test.txt',
  {
    encoding: 'utf8',
  },
  (err, data) => {
    if (err) {
      console.log('Error reading:', err);
      return;
    }

    // console.log('success:', data);
  },
);
// console.log('log--');

// 3. 异步读取：Promise
fs.promises
  .readFile('./test.txt', {
    encoding: 'utf8',
  })
  .then((res) => {
    console.log('结果：', res);
  })
  .catch((err) => {
    console.log('错误：', err);
  });
