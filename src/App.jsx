import React, { useEffect } from 'react'
import './App.css'
import AddTask from './components/AddTask'
import Todo from './components/Todo'
import { useDrop } from 'react-dnd'

function App() {
  const [taskList, setTaskList] = React.useState([])
  const [Completed, setCompleted] = React.useState([])
  useEffect(() => {
    let array = localStorage.getItem('taskList')
    if (array) {
      setTaskList(JSON.parse(array))
    }
  }, [])
  const [{ isOver }, drop] = useDrop(() => ({
    accept: 'todo',
    drop: (item) => addToCompleted(item.id, item.projectName, item.taskDescription, item.timestamp, item.duration),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    })
  }))
  const addToCompleted = (id, projectName, taskDescription, timestamp, duration) => {
    const moveTask = taskList.filter((task) => id === task.id)
    console.log(id)
    setCompleted((Completed) => [...Completed, { moveTask, projectName, taskDescription, timestamp, duration }])
  }

  return (
    <>
      <h1 className="text-3xl font-bold py-6 pl-6">
        03 - TaskTracker
      </h1>
      <div className='flex flex-row items-center'>
        <p className='text-xl pl-6'>Click</p>
        <AddTask taskList={taskList} setTaskList={setTaskList} />
        <p className='text-xl my-2'>to add new task</p>
      </div>
      <div className='flex flex-row'>
        <div>
          <h1 className="ml-6 bg-slate-600 text-xl font-semibold my-4 py-2 px-4 w-60">
            Todo List
          </h1>
          {
            taskList.map((task, index) =>
              <Todo key={index} task={task} index={index} taskList={taskList} setTaskList={setTaskList} />
            )
          }
        </div>
        <div ref={drop}>
          <h1 className="ml-6 bg-green-600 text-xl font-semibold my-4 py-2 px-4 w-60" >
            Completed List
          </h1>
          {
            Completed.map((task, index) =>
              <Todo key={index} task={task} taskList={taskList} setTaskList={setTaskList} />
            )
          }
        </div>
      </div>
    </>
  )
}

export default App
