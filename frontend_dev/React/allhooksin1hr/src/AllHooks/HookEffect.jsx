import React, { useState, useEffect } from 'react';

const HookEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title=count
    },[count]);
  
    const increment = () => setCount(count + 1);
    const decrement = () => setCount(count - 1);
  
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <p className="text-2xl font-bold mb-4">Count: {count}</p>
        <div>
          <button onClick={decrement} className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700">
            Decrease
          </button>
          <button onClick={increment} className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700">
            Increase
          </button>
        </div>
      </div>
    );
}

export default HookEffect