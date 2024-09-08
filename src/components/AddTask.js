"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddTask = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_redux_1 = require("react-redux");
const tasks_1 = require("../redux/tasks");
const AddTask = () => {
    const [value, setValue] = (0, react_1.useState)('');
    const dispatch = (0, react_redux_1.useDispatch)();
    const onSubmit = (event) => {
        event.preventDefault();
        if (value === null) {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }
        dispatch((0, tasks_1.addTask)({
            task: value,
            completed: false,
        }));
        setValue("");
    };
    return ((0, jsx_runtime_1.jsxs)("div", { className: "add-task-container", children: [(0, jsx_runtime_1.jsx)("input", { type: "text", className: "task-input", placeholder: "Add a task", value: value, onChange: (event) => setValue(event.target.value) }), (0, jsx_runtime_1.jsx)("button", { className: "add-task-button", onClick: onSubmit, children: "Save" })] }));
};
exports.AddTask = AddTask;
