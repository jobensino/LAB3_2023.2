"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var native_1 = require("styled-components/native");
var Container = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: ", ";\n  background-color: ", ";\n"], ["\n  flex-direction: ", ";\n  background-color: ", ";\n"])), function (_a) {
    var vertical = _a.vertical;
    return (vertical ? 'column' : 'row');
}, function (_a) {
    var backgroundColor = _a.backgroundColor;
    return backgroundColor || 'white';
});
var Section = native_1["default"].View(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  flex: ", ";\n"], ["\n  flex: ",
    ";\n"])), function (_a) {
    var firstSectionSize = _a.firstSectionSize, secondSectionSize = _a.secondSectionSize, vertical = _a.vertical;
    return vertical ? firstSectionSize || '1' : secondSectionSize || '1';
});
var LayoutSpliter = function (_a) {
    var children = _a.children, vertical = _a.vertical, firstSectionSize = _a.firstSectionSize, secondSectionSize = _a.secondSectionSize, backgroundColor = _a.backgroundColor;
    var _b = react_1["default"].Children.toArray(children), firstChild = _b[0], secondChild = _b[1];
    return (react_1["default"].createElement(Container, { vertical: vertical, backgroundColor: backgroundColor },
        react_1["default"].createElement(Section, { vertical: vertical, firstSectionSize: firstSectionSize }, firstChild),
        react_1["default"].createElement(Section, { vertical: vertical, secondSectionSize: secondSectionSize }, secondChild)));
};
exports["default"] = LayoutSpliter;
var templateObject_1, templateObject_2;
