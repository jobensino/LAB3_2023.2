"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
exports.Title = exports.Container = void 0;
var native_1 = require("styled-components/native");
var Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    display: flex;\n    flex-direction: column;\n\n    background-color: #5C5E5C;\n    \n    align-items: center;\n    justify-content: center;\n    \n    height:100%;\n    width:100%;\n"], ["\n    display: flex;\n    flex-direction: column;\n\n    background-color: #5C5E5C;\n    \n    align-items: center;\n    justify-content: center;\n    \n    height:100%;\n    width:100%;\n"])));
exports.Container = Container;
var Title = native_1["default"].Text(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n    font-size: 20px;\n    margin: 10px;\n"], ["\n    font-size: 20px;\n    margin: 10px;\n"])));
exports.Title = Title;
var templateObject_1, templateObject_2;
