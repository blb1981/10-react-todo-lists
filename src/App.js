import { useState } from 'react'

import './App.css'

function App() {
  //*------- Set state -------*/
  const [taskText, setTaskText] = useState('')
  const [tasks, setTasks] = useState([])

  /*------- Event handler methods -------*/
  const handleTextInput = (e) => {
    setTaskText(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()

    const taskToAdd = {
      id: new Date().getTime(),
      name: taskText,
      complete: false,
    }
    setTasks([...tasks, taskToAdd])
    setTaskText('')
  }

  const handleDeleteTask = (taskToDelete) => {
    setTasks(
      tasks.filter((task) => {
        return task.id !== taskToDelete.id
      })
    )
  }

  const handleCompleteTask = (taskToUpdate) => {
    const updatedTaskList = tasks.map((task) => {
      if (taskToUpdate.id === task.id) {
        task.complete = !task.complete
      }
      return task
    })
    setTasks(updatedTaskList)
  }

  /*------- Render html -------*/
  return (
    <div>
      <form onSubmit={handleAddTask}>
        <input
          type='text'
          name='taskInput'
          value={taskText}
          onChange={handleTextInput}
        />
        <button>Add</button>
      </form>

      <ul>
        {tasks.map((task) => {
          return (
            <li>
              <span className={`${task.complete ? 'complete' : ''}`}>
                {task.name}
              </span>
              <button onClick={() => handleDeleteTask(task)}>X</button>
              <button onClick={() => handleCompleteTask(task)}>Complete</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default App
