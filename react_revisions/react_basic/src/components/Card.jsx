import React, { useRef } from 'react'
import { MdDelete } from "react-icons/md";
const Card = ({deletehandler,data}) => {
  const ref=useRef(0);
const refFunc=()=>{
  ref.current+=1;
  console.log(`clicked ${ref.current} times`)
}
  return (
    <div className='rounded-md flex flex-col justify-between px-2 py-2 shadow-md'>
        <img src={data.imageUrl} alt={`${data.name}'s picture`} className='w-full h-40 object-cover rounded-t-md' />
        <h1 className='text-xl font-bold my-2'>{data.name}</h1>
       <div className='flex justify-around'>
       <button  onClick={refFunc} className='mt-auto bg-blue-500 text-white py-1 px-1 rounded-md'>Follow</button>
       <MdDelete className='text-3xl cursor-pointer' onClick={deletehandler} />
       </div>
    </div>
  )
}

export default Card
