// metro.config.js
const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const paths = {
    app: `${__dirname}/src/app`,
    cp: `${__dirname}/src/cp`,
    navigation: `${__dirname}/src/navigation`,
    screen: `${__dirname}/src/screen`,
  }
// Adds support for `.db` files for SQLite databases
defaultConfig.resolver.assetExts.push('db');
defaultConfig.resolver.extraNodeModules = paths;

module.exports = defaultConfig;