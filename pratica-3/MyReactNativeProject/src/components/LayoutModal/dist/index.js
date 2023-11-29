"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var LayoutModal = function (_a) {
    var children = _a.children, visible = _a.visible, onClose = _a.onClose, _b = _a.backgroundColor, backgroundColor = _b === void 0 ? 'white' : _b;
    return (react_1["default"].createElement(react_native_1.Modal, { transparent: true, visible: visible, onRequestClose: onClose },
        react_1["default"].createElement(react_native_1.View, { style: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: backgroundColor } },
            children,
            react_1["default"].createElement(react_native_1.Button, { title: "Close", onPress: onClose }))));
};
exports["default"] = LayoutModal;
