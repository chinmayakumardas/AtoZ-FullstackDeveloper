import React, { useEffect } from 'react'
import { useState } from 'react';


const EffectHookuse = () => {
    const [count,setCount]=useState(0);
    const [showtext,setShowText]=useState(false);
    const  [productList,setProductList]=useState();

    /// API call using useEffect
    async function fetchAllProducts(){
        try{
            const response=await fetch('https://dummyjson.com/products');
            const result=await response.json();
            if(result && result.products) 
                setProductList(result.products)
        }catch(error){
            console.log(error)
        }
    }



    useEffect(()=>{
        console.log("Run only once.")
        fetchAllProducts()
    },[])

    // useEffect(()=>{
    //     console.log("Hellow World")
    // })

    useEffect(()=>{
        if(count===5){
            setShowText(true)
        }
    },[count])


  return (
    <div className='flex justify-center flex-col items-center gap-3'>
            <h1 className='text-2xl font-bold'>Use Effect Hook</h1>
            {
                showtext?
           <h3>hellow world</h3>:null
            }
            <p>Count is :  { count}</p> 
             <button onClick={()=>setCount(count+1)} className='px-auto w-[200px] h-[35px] bg-amber-400 rounded-md px-0 py-0' >Increase Count</button>  
            

            <ul>
                {
                  productList && productList.lenght>0?  productList.map((item,index) =>
                        <li key={index}>{item.title}</li>
                    ):null
                }
            </ul>
       
        </div>
  )
}

export default EffectHookuse