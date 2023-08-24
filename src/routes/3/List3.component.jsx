import { ContextProvider } from './Context'

import Form from './Form.component'
import List from './List.component'

const List3 = () => {
  return (
    <ContextProvider>
      <h2 className='text-center'>To Do List with Context</h2>
      <div className='container'>
        <Form />
        <List />
      </div>
    </ContextProvider>
  )
}

export default List3
