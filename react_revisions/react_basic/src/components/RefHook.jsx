
import { useRef } from 'react';
const RefHook = () => {
    const refVar=useRef();
    const handler=()=>{
       console.log("clicked times"+ refVar+1)
    }
  return (

        <button ref={refVar}  onClick={handler} className='bg-green-500 text-3xl'>Clicked </button>
    
  )
}

export default RefHook