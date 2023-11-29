"use strict";
exports.__esModule = true;
var react_1 = require("react");
var react_native_1 = require("react-native");
var Label = function (_a) {
    var text = _a.text, _b = _a.textColor, textColor = _b === void 0 ? 'black' : _b, _c = _a.fontSize, fontSize = _c === void 0 ? 16 : _c;
    return (react_1["default"].createElement(react_native_1.Text, { style: { color: textColor, fontSize: fontSize } }, text));
};
exports["default"] = Label;
