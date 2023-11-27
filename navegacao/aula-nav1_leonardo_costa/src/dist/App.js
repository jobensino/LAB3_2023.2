"use strict";
exports.__esModule = true;
require("react-native-gesture-handler");
var expo_1 = require("expo");
var native_1 = require("@react-navigation/native");
var navigation_1 = require("./navigation");
var App = function () {
    return (React.createElement(native_1.NavigationContainer, null,
        React.createElement(navigation_1.DrawerNavigator, null)));
};
exports["default"] = expo_1.registerRootComponent(App);
