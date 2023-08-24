import { createContext, useState } from 'react'

export const Context = createContext([])

export const ContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState([])
  const [text, setText] = useState('')

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  const handleAddTask = (e) => {
    e.preventDefault()

    const task = {
      id: new Date().getTime(),
      title: text,
      complete: false,
    }
    setTasks([task, ...tasks])
    setText('')
  }

  const handleToggleComplete = (taskToToggle) => {
    const newList = tasks.map((task) => {
      if (task.id === taskToToggle.id) {
        return {
          ...task,
          complete: !task.complete,
        }
      }
      return task
    })
    setTasks(newList)
  }

  const handleDeleteTask = (taskToDelete) => {
    setTasks(tasks.filter((task) => task.id !== taskToDelete.id))
  }

  const value = {
    tasks,
    handleAddTask,
    text,
    handleTextInput,
    handleToggleComplete,
    handleDeleteTask,
  }

  return <Context.Provider value={value}>{children}</Context.Provider>
}
