const fs = require('fs');

const readStream = fs.createReadStream('./t.txt', {
  start: 10,
  end: 20,
  highWaterMark: 6,
});

readStream.on('data', (data) => {
  console.log(data.toString());

  readStream.pause();

  setTimeout(() => {
    readStream.resume();
  }, 3000);
});

readStream.on('open', (fd) => {
  console.log('open success', fd);

  fs.readFile(fd, (err, data) => {
    console.log('data', data.toString());
  });
});
