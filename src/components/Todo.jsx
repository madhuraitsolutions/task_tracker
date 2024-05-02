import React from 'react'
import { EditTask } from './EditTask'

const Todo = ({ task, taskList, setTaskList }) => {
    return (
        <>
            <div className='flex flex-col items-start justify-start bg-slate-600 w-4/12 py-4 px-6 ml-6 my-4 rounded-lg'>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-2xl'>{task.projectName}</p>
                    <EditTask task={task} taskList={taskList} setTaskList={setTaskList}/>
                </div>
                <p className='text-xl'>{task.taskDescription}</p>
                <div className='w-full flex justify-center'>                    
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Delete</button>
                </div>
            </div>
        </>
    )
}

export default Todo