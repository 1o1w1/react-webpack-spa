import { existsSync } from 'fs';
import { resolve } from 'path';
import { webpackConfig } from './paths';

if (existsSync(webpackConfig)) {
  // no cache
  config = require(webpackConfig); // eslint-disable-line
}

module.exports = config;
