"use strict";
exports.__esModule = true;
exports.BottomTabNavigator = void 0;
// conteúdo do arquivo tabnavigator.tsx
var bottom_tabs_1 = require("@react-navigation/bottom-tabs");
var stacknavigator_1 = require("./stacknavigator");
var Tab = bottom_tabs_1.createBottomTabNavigator();
var BottomTabNavigator = function () {
    return (React.createElement(Tab.Navigator, null,
        React.createElement(Tab.Screen, { name: "hometab", component: stacknavigator_1.MainStackNavigator, options: { headerShown: false, title: "Home" } }),
        React.createElement(Tab.Screen, { name: "contactab", component: stacknavigator_1.ContactStackNavigator, options: { headerShown: false, title: "Contatos" } })));
};
exports.BottomTabNavigator = BottomTabNavigator;
