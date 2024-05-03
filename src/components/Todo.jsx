import React, { useEffect } from 'react'
import { EditTask } from './EditTask'

const Todo = ({ task, taskList, setTaskList }) => {
    const [time, setTime] = React.useState(task.duration)
    const [running, setRunning] = React.useState(false)
    useEffect(() => {
        let interval;
        if (running) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10)
            }, 10)
        } else if (!running) (
            clearInterval(interval)
        )

        return () => clearInterval(interval)
    }, [running])
    const handleDelete = itemID => {
        let removeIndex = taskList.indexOf(task)
        taskList.splice(removeIndex, 1)
        //setTaskList([...taskList])
        //setTaskList((currentTasks => currentTasks.filter((task) => task.id !== itemID)))
        localStorage.setItem('taskList', JSON.stringify(taskList))
        window.location.reload()
    }
    const handleStopAction = () => {
        setRunning(false)
        let taskIndex = taskList.indexOf(task)
        taskList.splice(taskIndex, 1, {
            projectName: task.projectName,
            taskDescription: task.taskDescription,
            timestamp: task.timestamp,
            duration: time
        })
        localStorage.setItem('taskList', JSON.stringify(taskList))
        window.location.reload()
    }
    const handleResetAction = () => {
        let taskIndex = taskList.indexOf(task)
        taskList.splice(taskIndex, 1, {
            projectName: task.projectName,
            taskDescription: task.taskDescription,
            timestamp: task.timestamp,
            duration: 0
        })
        localStorage.setItem('taskList', JSON.stringify(taskList))
        window.location.reload()
    }
    return (
        <>
            <div className='flex flex-col items-start justify-start bg-slate-600 py-4 px-6 ml-6 my-4 rounded-lg'>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-2xl'>{task.projectName}</p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList} />
                </div>
                <p className='text-xl'>{task.taskDescription}</p>
                <div className='w-full flex flex-col items-center justify-center'>
                    <div className='text-xl font-semibold py-4'>
                        <span>{("0" + Math.floor((time / 3600000) % 24)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
                        <span>{("0" + Math.floor((time / 10) % 100)).slice(-2)}</span>
                    </div>
                    <div className='flex flex-row justify-evenly gap-2 pb-4'>
                        {running ? (
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                onClick={handleStopAction}
                            >
                                Stop
                            </button>
                        ) : (
                            <button
                                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                onClick={() => setRunning(true)}
                            >
                                Start
                            </button>
                        )}
                        <button 
                            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                            onClick={handleResetAction}
                        >
                            Reset
                        </button>
                    </div>
                </div>
                <div className='w-full flex justify-center'>
                    <button
                        className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </>
    )
}

export default Todo