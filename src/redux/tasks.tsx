import { createSlice } from '@reduxjs/toolkit'

export const tasks = createSlice({
name: 'tasks',
initialState: [],
reducers: {
    addTask: (state, action) => {
        console.log('add a task')
        const newTask = {
            id: Date.now(),
            text: action.payload.task,
            completed: action.payload.completed,
        }
        state.push(newTask);
    },
    deleteTask: (state, action) => {
        return state.filter((item) => item.id !== action.payload.id);
    }
}
})

export const {addTask, deleteTask} = tasks.actions;

export default tasks.reducer;
