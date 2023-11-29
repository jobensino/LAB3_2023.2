"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutSpliter_1 = require("../components/LayoutSpliter");
var TextEdit_1 = require("../components/TextEdit");
var Label_1 = require("../components/Label");
var LayoutModal_1 = require("../components/LayoutModal");
var ExampleScreen = function () {
    var _a = react_1.useState(false), isModalVisible = _a[0], setModalVisible = _a[1];
    var toggleModal = function () {
        setModalVisible(!isModalVisible);
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement(LayoutSpliter_1["default"], { vertical: true },
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(Label_1["default"], { text: "Top Section" }),
                react_1["default"].createElement(TextEdit_1["default"], { placeholder: "Enter text here" }),
                react_1["default"].createElement(react_native_1.Button, { title: "Show Modal", onPress: toggleModal })),
            react_1["default"].createElement(react_native_1.View, null,
                react_1["default"].createElement(Label_1["default"], { text: "Bottom Section" }),
                react_1["default"].createElement(TextEdit_1["default"], { placeholder: "Another input" }))),
        react_1["default"].createElement(LayoutModal_1["default"], { visible: isModalVisible, onClose: toggleModal },
            react_1["default"].createElement(react_native_1.Text, null, "Modal Content Here"))));
};
exports["default"] = ExampleScreen;
