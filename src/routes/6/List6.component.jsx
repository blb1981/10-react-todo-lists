import { useState } from 'react'

const List6 = () => {
  const [text, setText] = useState('')
  const [list, setList] = useState([])

  const handleAddTask = (newStask) => {
    setList([...list, newStask])
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newTask = {
      id: new Date().getTime(),
      name: text,
      complete: false,
    }

    handleAddTask(newTask)

    setText('')
  }

  const handleDelete = (id) => {
    setList((list) => list.filter((task) => task.id !== id))
  }

  const handleMarkComplete = (id) => {
    setList((list) =>
      list.map((task) =>
        task.id === id ? { ...task, complete: !task.complete } : task
      )
    )
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type='submit'>Add</button>
      </form>

      <div>
        {list.map((task) => (
          <div>
            <span>{task.name}</span>
            <button onClick={() => handleDelete(task.id)}>X</button>
            <button onClick={() => handleMarkComplete(task.id)}>
              {task.complete ? 'Mark incomplete' : 'Mark complete'}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default List6
