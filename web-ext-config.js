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
      'https://github.com/webdeveric/reload-all-tabs-web-ext',
    ],
  },
  ignoreFiles: [ 'package-lock.json' ],
};
