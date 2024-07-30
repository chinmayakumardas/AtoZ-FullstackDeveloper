//adv version
import React from 'react'
import { useState } from 'react';
const initialState={
    name:"",
    city:"",
}
const BasicHook = () => {
   const [formData,setFormData]=useState(initialState)

//    function handleNameChange(event){
//     setFormData({
//         ...formData,name:event.target.value,
//     })
// }
function handleCityChange(event){
    setFormData({
        ...formData,
        city:event.target.value
    })
}
console.log(formData)
  return (
    <div className='flex justify-center flex-col items-center gap-3'>
        <h1 className='text-2xl font-bold'>Use State Hook Adv</h1>
        <div className='flex border'>
            <input onChange={(event)=>setFormData({
                ...formData,name:event.target.value
            })} 
            
            name='name' type='text' className='border-[2px] px-auto py-auto' placeholder='enter the Name'/>
            
            
            
            <select name='city' onChange={handleCityChange}>
                <option value={""} id=''>Select City</option>
                <option value={"bengaluru"} id='bengaluru'>Bengaluru</option>
                <option value={"hyderabad"} id='hyderabad'>Hyderabad</option>
                <option value={"cuttack"} id='cuttack'>Cuttack</option>
                <option value={"bhubaneswar"} id='bhubaneswar'>Bhubaneswar</option>
            </select>
        </div>
        <div>
            Name:{formData.name}
            <hr></hr>
            City:{formData.city}
        </div>
    </div>
  )
}

export default BasicHook


// basic version
// import React from 'react'
// import { useState } from 'react';
// const BasicHook = () => {
//     const[toggleText,settoggletext]=useState(true);
//     function toogletexthandler(){
//         settoggletext(!toggleText)
//         console.log(toggleText)
//     }
//   return (
//     <div className='flex justify-center flex-col items-center gap-3'>
//         <h1 className='text-2xl font-bold'>Use State Hook</h1>
       
//         {
//             toggleText? <h2>Hellow world</h2> :null
//         }
//         <button className='px-auto w-[200px] h-[35px] bg-amber-400 rounded-md px-0 py-0' onClick={toogletexthandler}>Toggle Text</button>  
//     </div>
//   )
// }

// export default BasicHook