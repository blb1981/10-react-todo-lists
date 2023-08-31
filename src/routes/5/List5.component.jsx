import { useState } from 'react'

const Form = ({ onSubmit }) => {
  const [text, setText] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!text) return

    const newTask = {
      id: new Date().getTime(),
      name: text,
      complete: false,
    }

    onSubmit(newTask)
    setText('')
  }

  return (
    <form onSubmit={handleSubmit} className='mb-3'>
      <div className='row justify-content-center'>
        <div className='col-sm-4'>
          <input
            type='text'
            className='form-control'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='col-sm-2'>
          <div className='d-grid'>
            <button className='btn btn-primary'>Add</button>
          </div>
        </div>
      </div>
    </form>
  )
}

const Sort = () => {
  return (
    <div className='row justify-content-center mb-3'>
      <div className='col-md-4 d-flex align-items-center'>
        <span className='text-nowrap me-1'>Sort by:</span>
        <select className='form-select'>
          <option value='date'>Date Added</option>
          <option value='name'>Name</option>
        </select>
      </div>
    </div>
  )
}

const List = ({ taskList, onDelete, onComplete }) => {
  const content = taskList.map((task) => (
    <Task
      task={task}
      key={task.id}
      onDelete={onDelete}
      onComplete={onComplete}
    />
  ))

  return (
    <div className='list-group'>
      <div className='row justify-content-center'>
        <div className='col-md-8'>{content}</div>
      </div>
    </div>
  )
}

const Task = ({ task, onDelete, onComplete }) => {
  const { id, name, complete } = task

  const handleComplete = (id) => {
    onComplete(id)
  }

  const handleDelete = (id) => {
    onDelete(id)
  }

  return (
    <div className='list-group-item justify-content-between d-flex align-items-center'>
      <div className={complete ? 'text-muted' : ''}>{name}</div>
      <div>
        <button
          onClick={() => handleDelete(id)}
          className='btn btn-outline-danger me-1'
        >
          X
        </button>
        <button
          onClick={() => handleComplete(id)}
          className='btn btn-outline-success '
        >
          Done
        </button>
      </div>
    </div>
  )
}

const List5 = () => {
  const [taskList, setTaskList] = useState([])

  const handleAddTask = (newTask) => {
    setTaskList((prevList) => [newTask, ...prevList])
  }

  const handleDelete = (id) => {
    setTaskList((taskList) => taskList.filter((task) => task.id !== id))
  }

  const handleComplete = (id) => {
    setTaskList((taskLlist) =>
      taskList.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    )
  }

  return (
    <div>
      <h1 className='display-4 text-center'>To Do List</h1>
      <div className='container'>
        <Form onSubmit={handleAddTask} />
        <Sort />
        <List
          taskList={taskList}
          onDelete={handleDelete}
          onComplete={handleComplete}
        />
      </div>
    </div>
  )
}

export default List5
