import React from 'react';
import './App.css';
import Todolist, {TaskType} from "./components/todolist/todolist";

function App() {

    let task1: Array<TaskType> = [
        { id: 1, title: "CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "React", isDone: false }
    ]

    let task2: Array<TaskType> = [
        { id: 1, title: "Terminator", isDone: true },
        { id: 2, title: "The Green Mile", isDone: true },
        { id: 3, title: "The Lord of the Rings: The Return of the King", isDone: false }
    ]

    return (
        <div className="App">
            <Todolist title={"what to learn"} tasks={task1}/>
            <Todolist title={"movies"} tasks={task2}/>
        </div>
    )
}

export default App
