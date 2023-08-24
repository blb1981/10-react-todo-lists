import { useContext } from 'react'
import { Context } from './Context'

const Form = () => {
  const { handleAddTask, handleTextInput, text } = useContext(Context)
  return (
    <>
      <form
        onSubmit={handleAddTask}
        className='row justify-content-center mb-5'
      >
        <div className='col-md-6'>
          <input
            type='text'
            onChange={handleTextInput}
            value={text}
            className='form-control mb-3'
          />
          <div className='d-grid'>
            <button className='btn btn-primary'>Add</button>
          </div>
        </div>
      </form>
    </>
  )
}

export default Form
