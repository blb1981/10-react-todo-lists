import { useState } from 'react'

const Task = ({ task }) => {
  return <div>{task.title}</div>
}

const TaskList = ({ taskList }) => {
  return (
    <div>
      {taskList.map((task) => (
        <div key={task.id}>
          <Task task={task} />
        </div>
      ))}
    </div>
  )
}

const Form = ({ onAddTask }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: new Date().getTime(),
      title: text,
      complete: false,
    }

    onAddTask(newTask)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='row justify-content-center'>
        <div className='col-md-4'>
          <input
            type='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='col-md-2'>
          <button className='btn btn-outline-success'>Add</button>
        </div>
      </div>
    </form>
  )
}

const List4 = () => {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (task) => {
    setTaskList((list) => [...list, task])
  }

  return (
    <div className='container'>
      <h1 className='text-center'>Tasks For Today</h1>
      <Form onAddTask={handleAddTask} />
      <TaskList taskList={taskList} />
    </div>
  )
}

export default List4
