import { useContext } from 'react'
import { Context } from './Context'

const List = () => {
  const { tasks, handleToggleComplete, handleDeleteTask } = useContext(Context)

  return (
    <div className='row justify-content-center'>
      <div className='list-group col-md-8'>
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              style={{
                color: task.complete && 'green',
                opacity: task.complete && 0.5,
              }}
              className='list-group-item d-flex justify-content-between'
            >
              <span
                style={{
                  textDecoration: task.complete && 'line-through',
                }}
              >
                {task.title}
              </span>
              <div>
                <button
                  onClick={() => handleDeleteTask(task)}
                  className='btn btn-outline-danger me-1'
                >
                  Delete
                </button>
                <button
                  onClick={() => handleToggleComplete(task)}
                  className='btn btn-outline-primary'
                >
                  {task.complete ? 'Not done' : 'Done'}
                </button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default List
