module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: jest,
      outputName: JunitXml,
    } ]
  ]
};
