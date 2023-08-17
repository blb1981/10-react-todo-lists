import { Link, Outlet } from 'react-router-dom'

import './navigation.styles.css'

const Navigation = () => {
  return (
    <div>
      <ul className='main-nav'>
        <li>
          <Link to='/1'>List 1</Link>
        </li>
        <li>
          <Link to='/2'>List 2</Link>
        </li>
        <li>
          <Link to='/3'>List 3</Link>
        </li>
        <li>
          <Link to='/4'>List 4</Link>
        </li>
        <li>
          <Link to='/5'>List 5</Link>
        </li>
        <li>
          <Link to='/6'>List 6</Link>
        </li>
        <li>
          <Link to='/7'>List 7</Link>
        </li>
        <li>
          <Link to='/8'>List 8</Link>
        </li>
        <li>
          <Link to='/9'>List 9</Link>
        </li>
        <li>
          <Link to='/10'>List 10</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  )
}

export default Navigation
