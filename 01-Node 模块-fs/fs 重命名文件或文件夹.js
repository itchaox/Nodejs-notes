/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 23:34
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-16 23:35
 * @desc       :
 */
const fs = require('fs');

fs.rename('./myDir', './reNameMyDir', (err) => {
  console.log(err);
});
