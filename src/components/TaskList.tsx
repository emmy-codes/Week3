import { useSelector, useDispatch } from 'react-redux';
import { TaskItem } from "../components/TaskItem";
import { deleteTask } from "../redux/tasks";
import {Task} from "../redux/tasks";


export const TaskList = () => {
    // Use Redux's useSelector hook to get the current state of the tasks array.
    const tasks = useSelector((state: { tasks: Task[] }) => state.tasks);
    
    const dispatch = useDispatch();

    const handleClick = (id) => {
        dispatch(
			deleteTask({
				id: id
			})
		)
    }

    return (
        <ul className="task-list">
            {tasks.map((task) => (
                <TaskItem key={task.id} text={task.text} id={task.id} onClick={(id) => handleClick(id)}/>
            ))}
        </ul>
    );
};