"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTask = exports.addTask = exports.tasks = void 0;
const toolkit_1 = require("@reduxjs/toolkit");
const initialState = [];
exports.tasks = (0, toolkit_1.createSlice)({
    name: 'tasks',
    initialState,
    reducers: {
        addTask: (state, action) => {
            const newTask = {
                id: Date.now(),
                text: action.payload.task,
                completed: action.payload.completed,
            };
            state.push(newTask);
        },
        deleteTask: (state, action) => {
            return state.filter((item) => item.id !== action.payload.id);
        }
    }
});
_a = exports.tasks.actions, exports.addTask = _a.addTask, exports.deleteTask = _a.deleteTask;
exports.default = exports.tasks.reducer;
