/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-17 13:28
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-17 13:30
 * @desc       :
 */

const fs = require('fs');

fs.writeFile(
  './t.txt',
  'nea22222222222333w!',
  {
    flag: 'a+',
  },
  (err, data) => {
    if (err) {
      console.log('err', err);
      return;
    }

    console.log(data);
  },
);
