/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-18 15:11
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-18 15:44
 * @desc       :
 */
const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer({
  // dest: './uploads',
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, './uploads');
    },
    filename(req, file, cb) {
      cb(null, Date.now() + '-' + file.originalname);
    },
  }),
});

app.post('/img', upload.single('img'), (req, res, next) => {
  console.log('img upload', req.file);

  res.end('文件上传成功~');
});

app.post('/more', upload.array('more'), (req, res, next) => {
  console.log('img upload', req.files);

  res.end('文件上传成功~');
});

app.listen(4396, () => {
  console.log('upload server exce~ 🚀');
});
