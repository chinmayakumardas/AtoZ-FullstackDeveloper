import React from 'react'
import Navbar from './components/Navbar'
import Cart from './components/Cart'

const App = () => {
  return (
    <div className='flex gap-3 flex-col items-center'>
      <p className='flex justify-center  text-3xl underline font-bold'>Redux toolkit </p>
      <Navbar/>
      <Cart/>

    </div>
  )
}

export default App