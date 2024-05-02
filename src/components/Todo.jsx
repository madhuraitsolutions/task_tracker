import React from 'react'

const Todo = ({ task }) => {
    return (
        <>
            <div className='flex flex-col items-start justify-start bg-slate-600 w-4/12 py-4 px-6 ml-6 my-4 rounded-lg'>
                <p className='text-2xl'>{task.projectName}</p>
                <p className='text-xl'>{task.taskDescription}</p>
            </div>
        </>
    )
}

export default Todo