import React from 'react'

const Todo = ({ task }) => {
    return (
        <>
            <div className='flex flex-col items-start justify-start bg-slate-600 w-4/12 py-4 px-6 ml-6 my-4 rounded-lg'>
                <div className='w-full flex flex-row justify-between'>
                    <p className='text-2xl'>{task.projectName}</p>
                    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Edit</button>
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