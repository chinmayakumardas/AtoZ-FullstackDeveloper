
import { NavLink, Route,Routes} from 'react-router-dom'
import Home from './../pages/Home';
import Api from './../pages/Api';
import Hook from './../pages/Hook';
import Form from './../pages/Form';
const Header = () => {
  return (
   <>
     <div className='flex justify-around py-8'>
      <h2 className='text-2xl font-bold'>CodeBox</h2>
      <nav className='flex gap-10 justify-between text-1xl font-bold'>
        <NavLink to='/'>HOME</NavLink>
        <NavLink to='/form'>FORM</NavLink>
        <NavLink to='/api'>API</NavLink>
        <NavLink to='/hook'>HOOK</NavLink>
      </nav>
     </div>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/api' element={<Api/>}/>
      <Route path='/form' element={<Form/>}/>
      <Route path='/hook' element={<Hook/>}/>
     </Routes>
   </>

  )
}

export default Header