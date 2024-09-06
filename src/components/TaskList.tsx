import { useSelector, useDispatch } from 'react-redux';
import { TaskItem } from "../components/TaskItem";
import { deleteTask } from "../redux/tasks";
import {Task} from "../redux/tasks";


export const TaskList = () => {
    // Use Redux's useSelector hook to get the current state of the tasks array.
    const tasks = useSelector((state: { tasks: Task[] }) => state.tasks);
    
    const dispatch = useDispatch();

    const handleClick = (id: number) => {
        dispatch(
           deleteTask({
                id,
            })
        );
    };

    return (
        <ul className="task-list">
            {tasks.map((task: Task) => (
                <TaskItem
                 key={task.id} 
                 text={task.text} 
                 id={task.id} 
                 onClick={handleClick}
                 />
            ))}
        </ul>
    );
};