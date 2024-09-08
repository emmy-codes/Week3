"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskList = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_redux_1 = require("react-redux");
const TaskItem_1 = require("../components/TaskItem");
const tasks_1 = require("../redux/tasks");
const TaskList = () => {
    // Use Redux's useSelector hook to get the current state of the tasks array.
    const tasks = (0, react_redux_1.useSelector)((state) => state.tasks);
    const dispatch = (0, react_redux_1.useDispatch)();
    const handleClick = (id) => {
        dispatch((0, tasks_1.deleteTask)({ id }));
    };
    return ((0, jsx_runtime_1.jsx)("ul", { className: "task-list", children: tasks.map((task) => ((0, jsx_runtime_1.jsx)(TaskItem_1.TaskItem, { text: task.text, id: task.id, onClick: handleClick }, task.id))) }));
};
exports.TaskList = TaskList;
