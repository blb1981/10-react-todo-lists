import { useContext } from 'react'
import { TasksContext } from './Context'

const TasksList = () => {
  const { tasks, handleDelete } = useContext(TasksContext)

  if (tasks.length > 0) {
    return (
      <div className='container'>
        <div className='row justify-content-center mt-3'>
          <ul className='list-group col-md-6'>
            {tasks.map((task) => (
              <li
                className='list-group-item'
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                {task.name}
                <button
                  className='btn btn-outline-danger'
                  onClick={() => handleDelete(task)}
                >
                  X
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  return <p className='text-center mt-3'>No tasks.</p>
}

export default TasksList
