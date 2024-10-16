/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 23:25
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-16 23:26
 * @desc       :
 */

const fs = require('fs');

fs.mkdir('./myDir', (err) => {
  console.log(err);
});
