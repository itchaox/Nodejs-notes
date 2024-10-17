/*
 * @Version    : v1.00
 * @Author     : Wang Chao
 * @Date       : 2024-10-16 23:50
 * @LastAuthor : Wang Chao
 * @LastTime   : 2024-10-17 00:04
 * @desc       :
 */
const EventEmitter = require('events');

const emitter = new EventEmitter();

function handleFn(...args) {
  console.log('监听成功', args);
}

emitter.on('t1', handleFn);

setTimeout(() => {
  emitter.emit('t1', '2', 'wang', 'ttt');

  emitter.off('t1', handleFn);
}, 2000);
