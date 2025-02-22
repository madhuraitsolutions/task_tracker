import React, { useEffect, useState } from 'react'

export const EditTask = ({task, taskList, setTaskList}) => {
    const [editModel, setEditModel] = React.useState(false)
    const [projectName, setProjectName] = useState('')
    const [taskDescription, setTaskDescription] = useState('')

    useEffect(() => {
        setProjectName(task.projectName)
        setTaskDescription(task.taskDescription)
    }, [])

    const handleEditTask = (e) => {
        e.preventDefault()
        let taskIndex = taskList.indexOf(task)
        taskList.splice(taskIndex, 1, {
            projectName : projectName, 
            taskDescription : taskDescription,
            timestamp: task.timestamp,
            duration: task.duration
        })
        localStorage.setItem('taskList', JSON.stringify(taskList))
        window.location.reload()
        ///setTaskList([...taskList, { projectName, taskDescription }])
        setEditModel(false)
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        if (name === 'projectName') setProjectName(value)
        if (name === 'taskDescription') setTaskDescription(value)
    }
    return (
        <>
            <button
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setEditModel(true)}
            >
                Edit
            </button>
            {editModel ? (
                <>
                    <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'>
                        <div className='w-4/12 bg-gray-300 rounded-lg shadow-md relative flex flex-col'>
                            <div className='flex flex-row items-center justify-between px-5 py-2'>
                                <h3 className='text-3xl font-semibold'>Edit Task</h3>
                                <button
                                    onClick={() => setEditModel(false)} className='text-xl'
                                >
                                    X
                                </button>
                            </div>
                            <form className='p-6'>
                                <div>
                                    <label
                                        className='text-xl uppercase font-semibold mb-2 block'
                                        htmlFor="project-name"
                                    >
                                        Project Name
                                    </label>
                                    <input
                                        className='w-full rounded-lg border px-5 py-2'
                                        id='project-name'
                                        name='projectName'
                                        type="text"
                                        value={projectName}
                                        onChange={handleInputChange}
                                        placeholder='Project Name'
                                        required
                                    />
                                </div>
                                <div>
                                    <label className='text-xl uppercase font-semibold m-2 block'>
                                        Task Description
                                    </label>
                                    <textarea
                                        id="task-description"
                                        rows="3"
                                        name="taskDescription"
                                        value={taskDescription}
                                        onChange={handleInputChange}
                                        placeholder='Task Description'
                                        className='w-full rounded-lg border px-5 py-2'
                                    />
                                </div>
                            </form>
                            <div className='flex justify-end p-6 border-t-2 border-slate-200'>
                                <button
                                    type="submit"
                                    className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                                    onClick={handleEditTask}
                                >
                                    Edit Task
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    )
}
