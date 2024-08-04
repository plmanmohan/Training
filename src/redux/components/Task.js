import { useDispatch } from "react-redux";
import {deleteTask, toggleTask} from '../actions';

const Task = ({task}) => {
    const dispatch = useDispatch();
    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    }
    const handleToggle = () => {
        dispatch(toggleTask(task.id));
    }
    
    return (
        <div className="task">
            <input type="checkbox" onChange={handleToggle} checked={task.completed}/>
            <span style={{textDecoration: task.completed ? 'line-through': 'none'}}>{task.text}</span>
            <button onClick={handleDelete}>Remove</button>
        </div>
    );
}
export default Task;