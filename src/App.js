import { Routes, Route } from 'react-router-dom'

import Navigation from './routes/navigation/navigation.component'
import List1 from './routes/1/List1.component'
import List2 from './routes/2/List2.component'
import NotFoundPage from './routes/NotFoundPage/NotFoundPage.component.jsx'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route path='1' element={<List1 />} />
        <Route path='2' element={<List2 />} />
        {/* <Route path='3' element={<List3 />} /> */}
        {/* <Route path='4' element={<List4 />} /> */}
        {/* <Route path='5' element={<List5 />} /> */}
        {/* <Route path='6' element={<List6 />} /> */}
        {/* <Route path='7' element={<List7 />} /> */}
        {/* <Route path='8' element={<List8 />} /> */}
        {/* <Route path='9' element={<List9 />} /> */}
        {/* <Route path='10' element={<List10 />} /> */}
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}

export default App
