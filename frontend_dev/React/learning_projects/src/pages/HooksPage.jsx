import React, { useState } from 'react'

const HooksPage = () => {
  const [number,setNumber]=useState(0);
  function plus(){
    setNumber(number+1)
  }
  function minus(){
    setNumber(number-1)
  }
  function reset(){
    setNumber(0)
  }
  return (
    <div className='flex flex-col  justify-center items-center'>
        {/* use State */}
        <div className=" flex flex-col items-center justify-center min-w-[100vw]">
              <h1 className='text-3xl pb-10'>Use State Hook</h1>
              <div className="flex items-center justify-center space-x-4">
                <button onClick={minus} className="px-2 py-3 bg-green-400 w-[100px] rounded-lg text-3xl font-bold h-[60px] hover:scale-110 transition-all hover:rounded-[35px]">-</button>
                <h2  className="w-[100px] text-3xl font-bold h-[60px] flex items-center justify-center">{number}</h2>
                <button onClick={plus} className="px-2 py-3 bg-green-400 w-[100px] rounded-lg text-3xl font-bold h-[60px] hover:scale-110 transition-all hover:rounded-[35px]">+</button>

              </div>
                <button onClick={reset} className="px-2 py-3 bg-red-400 w-[300px] mt-[10px] rounded-lg text-3xl font-bold h-[60px] hover:scale-110 transition-all ">Reset</button>
                <div className='bg-red-500 mt-10 mb-10 h-[2px] w-[100vw]'></div>
        </div>
        {/* use Effect */}
        <div className=" flex flex-col items-center justify-center min-w-[100vw]">
              <h1 className='text-3xl pb-10'>Use Effect Hook</h1>
              <div className="flex items-center justify-center space-x-4">
             

              </div>
               
                <div className='bg-red-500 mt-10 mb-10 h-[2px] w-[100vw]'></div>
        </div>
        {/* use Effect */}
        <div className=" flex flex-col items-center justify-center min-w-[100vw]">
              <h1 className='text-3xl pb-10'>Use Effect Hook</h1>
              <div className="flex items-center justify-center space-x-4">
             

              </div>
               
                <div className='bg-red-500 mt-10 mb-10 h-[2px] w-[100vw]'></div>
        </div>
        {/* use Effect */}
        <div className=" flex flex-col items-center justify-center min-w-[100vw]">
              <h1 className='text-3xl pb-10'>Use Effect Hook</h1>
              <div className="flex items-center justify-center space-x-4">
             

              </div>
               
                <div className='bg-red-500 mt-10 mb-10 h-[2px] w-[100vw]'></div>
        </div>
        {/* use Effect */}
        <div className=" flex flex-col items-center justify-center min-w-[100vw]">
              <h1 className='text-3xl pb-10'>Use Effect Hook</h1>
              <div className="flex items-center justify-center space-x-4">
             

              </div>
               
                <div className='bg-red-500 mt-10 mb-10 h-[2px] w-[100vw]'></div>
        </div>

    </div>
  )
}

export default HooksPage