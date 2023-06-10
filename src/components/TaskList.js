import React, { Fragment, useState, useEffect } from 'react'
import Task from './Task'
import AddTask from './AddTask'
import axios from 'axios'

const api = 'https://60c1be154f7e880017dc02df.mockapi.io/api/v1/task-management'

const TaskList = () => {
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            try {
                const res = await axios.get(api)
                setTaskList(res.data)
            } catch (error) {
                console.log(error.message)
            }
        }
        getTasks()
    }, [])

    const markDoneTask = async id => {
        let curStatus = false
        const newTasks = taskList.map(task => {
            if (task.id === id) {
                task.done = !task.done
                curStatus = task.done
            }
            return task
        })
        setTaskList(newTasks)
        try {
            await axios.put(
                api + `/${id}`,
                {
                    done: curStatus
                }
            )
        } catch (error) {
            console.log(error.message)
        }
    }

    const deleteTask = async id => {
        try {
            await axios.delete(api + `/${id}`)
            const newTasks = taskList.filter(task => task.id !== id)
            setTaskList(newTasks)
        } catch (error) {
            console.log(error.message)
        }
    }

    const addTask = async name => {
        try {
            const res = await axios.post(
                api,
                {
                    name,
                    done: false,
                    createAt: new Date().getTime(),
                }
            )
            const newTasks = [...taskList, res.data]
            setTaskList(newTasks)
        } catch (error) {
            console.log(error.message)
        }
    }

    return (
        <Fragment>
            <AddTask addTask={addTask} />
            {taskList.map(task => {
                return (
                    <Task
                        key={task.id}
                        task={task}
                        markDoneTask={markDoneTask}
                        deleteTask={deleteTask}
                    />
                )
            })}
        </Fragment>
    )
}
export default TaskList
