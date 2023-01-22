import React, {useState} from 'react';
import './App.css';
import Todolist, {TaskType} from "./components/todolist/todolist";

export type FilterValuesType = "all" | "completed" | "active"

function App() {

    let task1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false },
        { id: 4, title: "Redux", isDone: false },
    ]

    const [task, setTask] = useState(task1)
    const [filter, setFilter] = useState<FilterValuesType>("all");

    const removeTask = (id: number) => {
        setTask(task.filter( t => t.id !== id ))
    }

    let taskForTodolist = task

    const filterTask = (filterName: FilterValuesType) => {
        setFilter(filterName)
    }

    if(filter === "completed") {
        taskForTodolist = task.filter(t => t.isDone === true)
    }

    if(filter === "active") {
        taskForTodolist = task.filter(t => t.isDone === false)
    }


    // let task2: Array<TaskType> = [
    //     { id: 1, title: "Terminator", isDone: true },
    //     { id: 2, title: "The Green Mile", isDone: true },
    //     { id: 3, title: "The Lord of the Rings: The Return of the King", isDone: false }
    // ]

    return (
        <div className="App">
            <Todolist title={"what to learn"} tasks={taskForTodolist} removeTask={removeTask} filterTask={filterTask}/>
            {/*<Todolist title={"movies"} tasks={task2}/>*/}
        </div>
    )
}

export default App
