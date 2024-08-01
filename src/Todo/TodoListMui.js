import {useState} from 'react';
import { Container, TextField, Button, List, ListItem, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import './todo.css'
const TodoListMui = () => {
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
            return <ListItem key={index}>
                {item}
                <IconButton onClick={() => removeTask(index)}>
                    <DeleteIcon/>
                </IconButton>
            </ListItem>
        });
    }
    return(
        <Container className="todo-container">
            <Typography>To-do-list</Typography>
            <form onSubmit={handleAddTask}>
                <TextField
                    type="text"
                    placeholder="Add a new Task"
                    onChange={handleInputChange}
                    value={task}
                />
                <Button type="submit">Add</Button>
            </form>
            <List>
                {renderListofTasks()}
            </List>
        </Container>
    );
}

export default TodoListMui;