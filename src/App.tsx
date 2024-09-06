import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { tasks } from './redux/tasks';
import { TaskList } from './components/TaskList';
import { AddTask } from './components/AddTask';

const reducer = combineReducers({
  tasks: tasks.reducer,
})

const store = configureStore({ reducer });

export type RootState = ReturnType<typeof store.getState>;

export const App = () => {
  return (
    <Provider store={store}>
      <div className="task-container">
        <h1 className="title">My task list app</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
};
