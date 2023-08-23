import { createContext, useState } from 'react'

export const TasksContext = createContext([])

export const TasksProvider = ({ children }) => {
  const [text, setText] = useState('')
  const [tasks, setTasks] = useState([])

  const handleTextInput = (e) => {
    setText(e.target.value)
  }

  const handleAddTask = (e) => {
    const task = {
      id: new Date().getTime(),
      name: text,
    }
    e.preventDefault()
    setTasks([...tasks, task])
    setText('')
  }

  const handleDelete = (taskToDelete) => {
    const newList = tasks.filter((task) => {
      return taskToDelete.id !== task.id
    })
    setTasks(newList)
  }

  const value = {
    text,
    setText,
    tasks,
    setTasks,
    handleTextInput,
    handleAddTask,
    handleDelete,
  }

  return <TasksContext.Provider value={value}>{children}</TasksContext.Provider>
}
