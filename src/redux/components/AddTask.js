import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../actions";

const AddTask = () => {
    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    const handleOnchange = (event) => {
        setTask(event.target.value)
    }
    const handleAddTask = (event) => {
        if(task.trim()) {
            dispatch(addTask({id: Date.now(), text: task, completed: false}));
        }
    }
    return(
        <div>
            <input
            type="text"
            placeholder="Add task"
            onChange={handleOnchange}
            value={task}
            />
            <button onClick={handleAddTask}>Add</button>
        </div>
    );
}

export default AddTask;