const defaultLint = require('dzuelu-eslint-config');

defaultLint.rules['import/no-extraneous-dependencies'] = ['error', { devDependencies: true }];
defaultLint.rules['node/no-missing-import'] = ['error', { tryExtensions: ['.ts', '.tsx', '.d.ts', '.js'] }];
defaultLint.rules['node/no-unpublished-require'] = 'off';
defaultLint.rules['no-use-before-define'] = 'off';
defaultLint.rules['node/no-extraneous-import'] = [
  'error',
  { allowModules: ['webpack', '@electron-forge/shared-types'] }
];

module.exports = defaultLint;
