"use strict";
exports.__esModule = true;
exports.DrawerNavigator = void 0;
// conteúdo do arquivo drawernavigator.tsx
var drawer_1 = require("@react-navigation/drawer");
var tabnavigator_1 = require("./tabnavigator");
var stacknavigator_1 = require("./stacknavigator");
var Drawer = drawer_1.createDrawerNavigator();
var DrawerNavigator = function () {
    return (React.createElement(Drawer.Navigator, null,
        React.createElement(Drawer.Screen, { name: "home", component: tabnavigator_1.BottomTabNavigator, options: { title: "Home" } }),
        React.createElement(Drawer.Screen, { name: "contact", component: stacknavigator_1.ContactStackNavigator, options: { title: "Contatos" } })));
};
exports.DrawerNavigator = DrawerNavigator;
