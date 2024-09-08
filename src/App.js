"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const toolkit_1 = require("@reduxjs/toolkit");
const tasks_1 = require("./redux/tasks");
const TaskList_1 = require("./components/TaskList");
const AddTask_1 = require("./components/AddTask");
const reducer = (0, toolkit_1.combineReducers)({
    tasks: tasks_1.tasks.reducer,
});
const store = (0, toolkit_1.configureStore)({ reducer });
const App = () => {
    return ((0, jsx_runtime_1.jsx)(react_redux_1.Provider, { store: store, children: (0, jsx_runtime_1.jsxs)("div", { className: "task-container", children: [(0, jsx_runtime_1.jsx)("h1", { className: "title", children: "My task list app" }), (0, jsx_runtime_1.jsx)(AddTask_1.AddTask, {}), (0, jsx_runtime_1.jsx)(TaskList_1.TaskList, {})] }) }));
};
exports.App = App;
