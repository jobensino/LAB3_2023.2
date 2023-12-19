const { getDefaultConfig } = require('expo/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
const paths = {
    cp: `${__dirname}/src/cp`,
    csr: `${__dirname}/src/csr`,
    entities: `${__dirname}/src/entities`,
    hooks: `${__dirname}/src/hooks`,
    navigation: `${__dirname}/src/navigation`,
    screens: `${__dirname}/src/screens`,
    states: `${__dirname}/src/states`,
    stored: `${__dirname}/src/stored`,
}
// Adds support for `.db` files for SQLite databases
defaultConfig.resolver.assetExts.push('db');
defaultConfig.resolver.extraNodeModules = paths;

module.exports = defaultConfig;