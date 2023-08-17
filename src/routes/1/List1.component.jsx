import { useState } from 'react'

import './List1.styles.css'

const List1 = () => {
  const [taskText, setTaskText] = useState('')
  const [taskList, setTaskList] = useState([])

  const handleTaskText = (e) => {
    setTaskText(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()

    const newTaskToAdd = {
      id: new Date().getTime(),
      name: taskText,
      complete: false,
      completedTime: null,
    }
    setTaskList([...taskList, newTaskToAdd])
    setTaskText('')
  }

  const handleDeleteTask = (id) => {
    const listAfterDelete = taskList.filter((task) => {
      return task.id !== id
    })

    setTaskList(listAfterDelete)
  }

  const handleMarkComplete = (id) => {
    // Mark complete
    let listAfterUpdate = taskList.map((task) => {
      if (task.id === id) {
        task.complete = !task.complete
      }
      return task
    })

    // Move to end of list
    const updatedTask = taskList.find((task) => {
      return task.id === id
    })

    const listAfterDelete = taskList.filter((task) => {
      return task.id !== id
    })

    // If marking complete, move to end
    // If marking incomplete, move to beginning
    updatedTask.complete
      ? (listAfterUpdate = [...listAfterDelete, updatedTask])
      : (listAfterUpdate = [updatedTask, ...listAfterDelete])
    setTaskList(listAfterUpdate)
  }

  return (
    <div className='container1'>
      <h1>To Do List 1</h1>
      <form onSubmit={handleAddTask} className='form-styles1'>
        <input
          className='input1'
          type='text'
          placeholder='Mow grass'
          value={taskText}
          onChange={handleTaskText}
        />
        <button className='btn1' type='submit'>
          Add Task
        </button>
      </form>
      <ul className='task-list1'>
        {taskList.map((task) => {
          return (
            <li key={task.id} className='task-item1'>
              <span className={task.complete ? `is-complete1` : ''}>
                {task.name}
              </span>
              <div className='buttons1'>
                <button
                  className='btn1'
                  onClick={() => handleMarkComplete(task.id)}
                >
                  Done
                </button>
                <button
                  className='btn1'
                  onClick={() => handleDeleteTask(task.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default List1
