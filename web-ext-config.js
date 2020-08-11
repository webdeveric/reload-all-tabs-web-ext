const path = require('path');

module.exports = {
  verbose: true,
  sourceDir: path.join(__dirname, 'dist'),
  artifactsDir: path.join(__dirname, 'build'),
  build: {
    overwriteDest: true,
  },
  run: {
    startUrl: [
      'about:debugging',
      'https://webdeveric.com/',
    ],
  },
  ignoreFiles: [ 'package-lock.json' ],
};
