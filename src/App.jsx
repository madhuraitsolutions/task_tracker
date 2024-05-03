import React from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Todo from './components/Todo'

function App() {
  const [taskList, setTaskList] = React.useState([])

  return (
    <>
      <h1 className="text-3xl font-bold py-4 pl-6">
        03 - TaskTracker
      </h1>
      <div className='flex flex-row items-center gap-4'>
        <p className='text-xl pl-6'>Click </p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className='text-xl'>to add new task</p>
      </div>
      <div>
        <h1 className="ml-6 my-2 bg-slate-600 w-4/12 text-2xl font-bold py-1 px-4 rounded-lg">
          Todo List
        </h1>
        {
          taskList.map((task, index) => 
            <Todo key={index} task={task} taskList={taskList} setTaskList={setTaskList} />
          )
        }
      </div>
    </>
  )
}

export default App
