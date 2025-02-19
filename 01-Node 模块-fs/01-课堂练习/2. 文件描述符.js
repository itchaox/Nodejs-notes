const fs = require('fs');

fs.open('./test.txt', (err, fd) => {
  console.log('fd', fd);

  fs.fstat(fd, (err, stat) => {
    if (err) {
      console.log('err', err);
      return;
    }

    console.log('stat', stat);

    // 关闭
    fs.close(fd, (err) => {
      console.log('关闭成功');
    });
  });
});
