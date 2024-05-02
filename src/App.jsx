
import './App.css'
import AddTask from './components/AddTask'

function App() {

  return (
    <>
      <h1 className="text-3xl font-bold py-4 pl-6">
        03 - TaskTracker
      </h1>
      <div className='flex flex-row items-center gap-4'>
        <p className='text-xl pl-6'>Click </p>
        <AddTask />
        <p className='text-xl'>to add new task</p>
      </div>
    </>
  )
}

export default App
