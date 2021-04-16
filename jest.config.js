module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: /,
      outputName: JunitXml,
    } ]
  ]
};
