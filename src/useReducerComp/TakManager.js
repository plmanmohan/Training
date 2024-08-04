import { useState, useReducer } from "react";
import reducer, {initialState} from "./reducer";
import {addTask} from "./actions";

const TaskManager = () => {
    const [task, setTask] = useState('');
    const [state, dispatch] = useReducer(reducer, initialState);

    const handleInput = (e) => {
        setTask(e.target.value);
    }
    const handleAddTask = () => {
        console.log(task)
        dispatch(addTask(task));
    }
    const createTaskList = () => {
        console.log("TaskManager: state.tasks: ", state.tasks);
        return state.tasks.map((task, index) => {
            return (<li key={index}>
                {task}
            </li>)
        })
    }
    return (
        <div>
            <h1>TaskManger</h1>
            <input 
                type="text"
                onChange={handleInput}
            />
            <button onClick={handleAddTask}>Add Task</button>
            <ul>
                {createTaskList()}
            </ul>
        </div>
    );
}
export default TaskManager;