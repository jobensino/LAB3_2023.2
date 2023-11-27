"use strict";
exports.__esModule = true;
exports.ContactStackNavigator = exports.MainStackNavigator = void 0;
// conteúdo do arquivo stacknavigator.tsx
var native_stack_1 = require("@react-navigation/native-stack");
var about_1 = require("../screens/about");
var home_1 = require("../screens/home");
var contact_1 = require("../screens/contact");
var Stack = native_stack_1.createNativeStackNavigator();
var screenOptionStyle = {
    headerStyle: {
        backgroundColor: "#BB3508"
    },
    headerTintColor: "white",
    headerBackTitle: "Back"
};
var MainStackNavigator = function () {
    return (React.createElement(Stack.Navigator, { screenOptions: screenOptionStyle },
        React.createElement(Stack.Screen, { name: "home", component: home_1.Home, options: { title: "Home" } }),
        React.createElement(Stack.Screen, { name: "about", component: about_1.About, options: { title: "Sobre" } })));
};
exports.MainStackNavigator = MainStackNavigator;
var ContactStackNavigator = function () {
    return (React.createElement(Stack.Navigator, { screenOptions: screenOptionStyle },
        React.createElement(Stack.Screen, { name: "contact", component: contact_1.Contact, options: { title: "Contatos" } })));
};
exports.ContactStackNavigator = ContactStackNavigator;
