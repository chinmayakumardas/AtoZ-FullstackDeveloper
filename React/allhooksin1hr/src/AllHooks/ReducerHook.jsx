import React, { useEffect, useReducer } from 'react';

const ReducerHook = () => {
  //const [count, setCount] = useState(0);

  const initialValue=0;

  //reducer function here is good basically it make with separate file
  //you cane it at you own like "reducer"or "reducerfunction", etc
  const reducer=(state,action)=>{
    if(action.type==='increment'){
      state=state+1
    }if(action.type==='decrement'){
      state=state-1
    }
    return state;
  }
  const [count, dispatch]=useReducer(reducer,initialValue)

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-2xl font-bold mb-4">Count: {count}</p>
        <div>
          <button onClick={()=>dispatch({type:'decrement'})} className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700">
            Decrease
          </button>
          <button onClick={()=>dispatch({type:'increment'})} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Increase
          </button>
        </div>
      </div>
    );
}

export default ReducerHook