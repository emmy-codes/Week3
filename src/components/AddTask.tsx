import React, { useState, MouseEvent } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks";

export const AddTask = () => {
    const [value, setValue] = useState<string>('')

    const dispatch = useDispatch();

    type addTaskTypes = {
        task: string;
        completed: boolean;
    }


    const onSubmit = (event: MouseEvent) => {
        event.preventDefault();

        if (value === null) {
            alert("Enter a task before adding !!");
            setValue("");
            return;
        }

        dispatch(
            addTask({
                task: value,
                completed: false,
            })
        );

        setValue("");

    }

    return (
        <div className="add-task-container">
            <input
                type="text"
                className="task-input"
                placeholder="Add a task"
                value={value}
                onChange={(event) => setValue(event.target.value)}
            >
            </input>

            <button className="add-task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    )
}