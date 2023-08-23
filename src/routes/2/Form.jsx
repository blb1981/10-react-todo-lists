import { useContext } from 'react'
import { TasksContext } from './Context'

const Form = () => {
  const { handleAddTask, text, handleTextInput } = useContext(TasksContext)

  return (
    <div className='container'>
      <form onSubmit={handleAddTask} className='row justify-content-center'>
        <div className='col-md-4'>
          <input
            type='text'
            placeholder='Fix the car'
            value={text}
            onChange={handleTextInput}
            className='form-control'
            required
          />
        </div>
        <div className='col-md-2 d-grid'>
          <button type='submit' className='btn btn-success'>
            Add
          </button>
        </div>
      </form>
    </div>
  )
}

export default Form
