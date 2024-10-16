/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 22:13
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-16 22:26
 * @desc       :
 */
// 导入 fs
// commonjs 导入方式

const fs = require('fs');

// const res = fs.readFileSync('./test.txt', {
//   encoding: 'utf8',
// });

// console.log(res);

// console.log('读取成功~');

// fs.readFile(
//   './test.txt',
//   {
//     encoding: 'utf8',
//   },
//   (err, res) => {
//     if (err) {
//       console.log('err');
//       return;
//     }

//     console.log(res);
//   },
// );

// console.log('读取成功');

fs.promises
  .readFile('./test.txt', {
    encoding: 'utf8',
  })
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

console.log('读取成功');
