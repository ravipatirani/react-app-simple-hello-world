module.exports = {
  reporters: [
    'default',
    [ 'jest-junit', {
      outputDirectory: 'test_reports',
      outputName: 'jest-junit.xml',
    } ]
  ]
};
