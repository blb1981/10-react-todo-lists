import { TasksProvider } from './Context'

import Form from './Form'
import TasksList from './TasksList'
import MainHeading from './MainHeading'

const List2 = () => {
  return (
    <TasksProvider>
      <div className='container'>
        <div className='row justify-content-center'>
          <MainHeading className='text-center'>
            To Do List using Context
          </MainHeading>
          <Form />
          <TasksList />
        </div>
      </div>
    </TasksProvider>
  )
}

export default List2
