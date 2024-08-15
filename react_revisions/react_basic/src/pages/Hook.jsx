
import { useContext } from 'react'
import RefHook from '../components/RefHook'
import { AppContext } from './../contexts/AppContext';

const Hook = () => {
  const {name,age}=useContext(AppContext)
  return (
    <div>
      <h1 className="underline">1. UseContext API used</h1>
      <div className="h-full px-2 py-2 border mx-2 my-2 rounded-md border-red-400">
          This is App context data:
          <br />
          Name : {name} <br />
          Age : {age}
      </div>
      <h1  className="underline">2. UseLayout Hook</h1>
      <h1  className="underline">3. UseEffect Hook</h1>
      <h1  className="underline">4. UseReducer Hook</h1>
      <h1  className="underline">5. UseMemo Hook</h1>
      <h1  className="underline">6. UseRef Hook</h1>
      <RefHook/>
    </div>
  )
}

export default Hook