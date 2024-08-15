import React from 'react'
import { NavLink, Route,Routes} from 'react-router-dom'
import HomePage from './../pages/HomePage';
import HooksPage from './../pages/HooksPage';
import ApiPage from './../pages/ApiPage';
import FormPage from './../pages/FormPage';
const Navbar = () => {
    
  return (
    <div>
        <div className='flex justify-around h-[60px] items-center text-2xl font-bold bg-[#d62828] text-white'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/hook'>Hooks</NavLink>
            <NavLink to='/form'>Form</NavLink>
            <NavLink to='/api'>API</NavLink>
        </div>
        <Routes>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/home'   element={<HomePage/>}></Route>
            <Route path='/hook'  element={<HooksPage/>}></Route>
            <Route path='/form'  element={<FormPage/>}></Route>
            <Route path='/api'  element={<ApiPage/>}></Route>
        </Routes>
    </div>
  )
}

export default Navbar