module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: root,
      outputName: JunitXml,
    } ]
  ]
};
