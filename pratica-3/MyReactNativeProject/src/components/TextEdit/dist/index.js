"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var TextInput = native_1["default"].TextInput(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  color: ", ";\n  background-color: ", ";\n"], ["\n  color: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var textColor = _a.textColor;
    return textColor || 'black';
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || 'white';
});
var TextEdit = function (_a) {
    var placeholder = _a.placeholder, textColor = _a.textColor, backgroundColor = _a.backgroundColor;
    return (react_1["default"].createElement(TextInput, { placeholder: placeholder, textColor: textColor, backgroundColor: backgroundColor }));
};
exports["default"] = TextEdit;
var templateObject_1;
