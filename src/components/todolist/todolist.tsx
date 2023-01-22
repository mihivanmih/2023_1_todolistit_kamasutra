import React from 'react';
import {FilterValuesType} from "../../App";

export type TaskType = {
    id: number,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string | number,
    tasks: Array<TaskType>,
    removeTask: (id: number) => void,
    filterTask: (value:FilterValuesType) => void
}

const Todolist = ({title, tasks, removeTask, filterTask}: PropsType) => {



    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input type="text"/>
                <button>+</button>
            </div>
            <ul>
                {
                    tasks.map(task =>
                        <li key={task.id}>
                            <input type="checkbox"
                                   defaultChecked={task.isDone}/>
                            <span>{task.title}</span>
                            <button onClick={ () => removeTask(task.id) }>x</button>
                        </li>
                    )
                }
            </ul>
            <div>
                <button onClick={ () => filterTask('all')}>All</button>
                <button onClick={ () => filterTask('active')}>Active</button>
                <button onClick={ () => filterTask('completed')}>Completed</button>
            </div>
        </div>
    )
}

export default Todolist