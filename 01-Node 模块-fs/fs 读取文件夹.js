/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 23:27
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-16 23:33
 * @desc       :
 */
const fs = require('fs');

function readDir(path) {
  fs.readdir(path, { withFileTypes: true }, (err, files) => {
    if (err) {
      console.log('err', err);
    } else {
      files.forEach((item) => {
        if (item.isDirectory()) {
          readDir(`${path}/${item.name}`);
          console.log('文件夹：', item.name);
        } else {
          console.log('文件：', item.name);
        }
      });
    }
  });
}

readDir('./myDir');
