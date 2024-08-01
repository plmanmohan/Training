import {useState} from 'react';
import './todo.css'
const TodoList = () => {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleAddTask = (e) => {
        e.preventDefault();
        if(task) {
            setTaskList([...taskList, task]);
        }
        setTask('');
    }
    const handleInputChange = (e) => {
        setTask(e.target.value);
    }
    const removeTask = (index) => {
        const updateTaskList = taskList.filter((item, i) => i !== index);
        console.log(updateTaskList, index);
        setTaskList(updateTaskList);
    }
    const renderListofTasks = () => {
        return taskList.map((item, index) => {
            return <li key={index}>
                {item}
                <button onClick={() => removeTask(index)}>Delete</button>
            </li>
        });
    }
    return(
        <div className="todo-container">
            <h1>To-do-list</h1>
            <form onSubmit={handleAddTask}>
                <input
                    type="text"
                    placeholder="Add a new Task"
                    onChange={handleInputChange}
                    value={task}
                />
                <button type="submit">Add</button>
            </form>
            <ul>
                {renderListofTasks()}
            </ul>
        </div>
    );
}

export default TodoList;