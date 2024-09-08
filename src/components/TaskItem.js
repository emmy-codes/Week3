"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskItem = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const TaskItem = ({ text, id, onClick }) => ((0, jsx_runtime_1.jsxs)("div", { className: "task-item-container", children: [(0, jsx_runtime_1.jsx)("p", { className: "task-title", children: text }), (0, jsx_runtime_1.jsx)("button", { className: "delete-task-button", onClick: () => onClick(id), children: "X" })] }));
exports.TaskItem = TaskItem;
