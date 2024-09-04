import { createSlice } from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'

interface Task {
    id: number;
    text: string;
    completed: boolean;
}

const initialState: Task[] = []

export const tasks = createSlice({
name: 'tasks',
initialState,
reducers: {
    addTask: (state, action: PayloadAction<{task: string, completed: boolean}>) => {
        const newTask = {
            id: Date.now(),
            text: action.payload.task,
            completed: action.payload.completed,
        }
        state.push(newTask);
    },
    deleteTask: (state, action: PayloadAction<{id: number}>) => {
        return state.filter((item) => item.id !== action.payload.id);
    }
}
})

export const {addTask, deleteTask} = tasks.actions;

export default tasks.reducer;
