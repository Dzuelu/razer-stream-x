const defaultLint = require('dzuelu-eslint-config');

// defaultLint.rules['import/no-extraneous-dependencies'] = ['error', { tryExtensions: [".ts", ".tsx"] }];
defaultLint.rules['node/no-missing-import'] = ['error', { devDependencies: true }];
defaultLint.rules['node/no-unpublished-require'] = 'off';
defaultLint.rules['node/no-extraneous-import'] = ['error', { "allowModules": ['webpack', '@electron-forge/shared-types'] }];

module.exports = defaultLint;
