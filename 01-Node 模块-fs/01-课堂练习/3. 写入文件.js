const fs = require('fs');

const content = 'my test2';

fs.writeFile(
  './abc.txt',
  content,
  {
    flag: 'a+',
  },
  (err, data) => {
    if (err) return;

    console.log('dat234a', data);
  },
);
