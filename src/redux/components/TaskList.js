import { useSelector } from "react-redux";
import Task from "./Task";

const TaskList = () => {
    const taskList = useSelector((state) => state.tasks);
    const filter = useSelector((state) => state.filter);

    const filteredTaskList = taskList.filter(task => {
        if (filter === "ALL")  return true;
        if (filter === "COMPLETED")  return task.completed;
        if (filter === "INCOMPLETED")  return !task.completed;
        return true;
    })
    console.log("taskList: ", taskList);
    const createTasks = () => {
        return filteredTaskList.map((item, index) => <Task key={index} task={item}/>)
    }
    return (
        <div>
            {createTasks()}
        </div>
    );
}
export default TaskList;