import React, { useRef } from 'react'
import Card from './Card'


const ForeGround = () => {
 
  const data=[
    {
      desc:" This book is written by prt",
      filesize:"0.5 mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"blue",

      }
    },
    {
      desc:" This book is written by chinmay",
      filesize:"1.5 mb",
      close:true,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"red",

      }
    },
    {
      desc:" This book is written by kalia",
      filesize:"10 mb",
      close:false,
      tag:{
        isOpen:true,
        tagTitle:"Download Now",
        tagColor:"green",

      }
    }
  ]
  const ref=useRef(null)
  return (
    <>
        <div ref={ref} className="fixed top-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
            {
              data.map((item,index)=>(
                <Card reference={ref} key={index} data={item}/>
              ))
            }
           
        </div>
    </>
  )
}

export default ForeGround