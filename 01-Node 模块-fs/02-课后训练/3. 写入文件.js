const fs = require('fs');

const content = 'new txt';

fs.writeFile('./new.txt', content, (err, data) => {
  if (err) return;

  console.log('写入成功');
});
