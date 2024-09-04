import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { addTask } from "../redux/tasks"

export const AddTask = () => {
    const [value, setValue] = useState('')

    const dispatch = useDispatch();

    const onSubmit = (event) => {
        event.preventDefault();

        if (value.trim().length === 0) {
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
            ></input>

            <button className="add-task-button" onClick={onSubmit}>
                Save
            </button>
        </div>
    )
}