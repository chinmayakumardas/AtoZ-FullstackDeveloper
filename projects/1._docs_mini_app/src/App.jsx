import Background from "./components/Background"
import ForeGround from "./components/ForeGround"




function App() {


  return (
    <div className='w-full h-screen bg-zinc-800'>
        <Background/>
        <ForeGround/>
    </div>
  )
}

export default App


// <div className='w-full py-10 absolute top-[5%]  flex justify-center font-semibold text-xlg text-zinc-600'>Documents.</div>
//       <h1 className=" absolute text-zinc-200 font-semibold  top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] text-[13vw] leading-none tracking-tighter">Docs.</h1> 