/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-17 14:54
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-17 14:58
 * @desc       :
 */

const fs = require('fs');

const write = fs.createWriteStream('./ddd.txt', {
  flags: 'r+',
  start: 5,
});

write.write('tt');
