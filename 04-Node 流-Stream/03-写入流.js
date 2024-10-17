/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-17 13:54
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-17 13:58
 * @desc       :
 */

const fs = require('fs');

const writeStream = fs.createWriteStream('./newa.txt', {
  flag: 'a+',
});

writeStream.write('new');
writeStream.write('new');
writeStream.write('new');
writeStream.write('new');

writeStream.on('close', () => {
  console.log('ending~');
});

writeStream.end();
