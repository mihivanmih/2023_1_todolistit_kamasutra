import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from "../../App";

export type TaskType = {
    id: string,
    title: string,
    isDone: boolean
}

type PropsType = {
    title: string | number,
    tasks: Array<TaskType>,
    removeTask: (id: string) => void,
    filterTask: (value: FilterValuesType) => void
    addTask: (value: string) => void
}

const Todolist = ({title, tasks, removeTask, filterTask, addTask}: PropsType) => {

    const [taskTitle, setTaskTitle] = useState("")

    const handlerChangeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.target.value)
    }

    const handlerClick = () => {
        addTask(taskTitle)
        setTaskTitle("")
    }

    const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            handlerClick()
        }
    }

    return (
        <div>
            <h3>{title}</h3>
            <div>
                <input
                    type="text"
                    value={taskTitle}
                    onChange={handlerChangeTitle}
                    onKeyUp={handleKeyPress}
                />
                <button
                    onClick={handlerClick}
                >+
                </button>
            </div>
            <ul>
                {
                    tasks.map(task => {

                            const onRemoveHandler = () => {
                                removeTask(task.id)
                            }

                            return <li key={task.id}>
                                <input type="checkbox"
                                       defaultChecked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={onRemoveHandler}>x</button>
                            </li>
                        }
                    )
                }
            </ul>
            <div>
                <button onClick={() => filterTask('all')}>All</button>
                <button onClick={() => filterTask('active')}>Active</button>
                <button onClick={() => filterTask('completed')}>Completed</button>
            </div>
        </div>
    )
}

export default Todolist