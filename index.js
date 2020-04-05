const myPackage = require('./package.json');

const getSecret  = () => {
  return 'thisisthesecret from version ' + myPackage.version;
};

exports.getSecret = getSecret;
