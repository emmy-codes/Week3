import { useSelector } from 'react-redux';
import { useDispatch } from "react-redux";
import { TaskItem } from "../components/TaskItem"
import { deleteTask } from "../redux/tasks"

export const TaskList = () => {
    const tasks = useSelector((state) => state.tasks);

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