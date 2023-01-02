// Use require to inmport Common core modules
const { add, subtract } = require('./math');
console.log(add(3, 4));
// OS common core module
const os = require('os');
console.log(os.type());
console.log(os.version());
console.log(os.homedir());

//dirname is predefined
console.log(__dirname);

//path module
const path = require('path');
console.log(path.parse(__dirname));

