'use strict';

const { EventEmitter, once } = require('node:events');

const emitter = new EventEmitter();

(async () => {
  const res = await once(emitter, 'name');
  console.log(res);
})();

emitter.emit('name', { a: 4 }, { a: 5 }, { a: 6 });
