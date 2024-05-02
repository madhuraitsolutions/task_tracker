import React from 'react'

const AddTask = () => {
    const [addModel, setAddModel] = React.useState(false)

    return (
        <>
            <button
                type="button"
                className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
                onClick={() => setAddModel(true)}
            >
                + New
            </button>
            { addModel ? (
                <>
                    <div className='flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100'> 
                        <h3>Add New Task</h3>
                    </div>
                </>
            ) : null}
        </>
    )
}

export default AddTask