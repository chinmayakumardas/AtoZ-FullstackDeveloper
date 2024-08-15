import React from 'react'
import { useState } from 'react'
const Form = () => {
  const [formData,setFormData]=useState([])
  const [data,setData]=useState({
    name:"",
    email:"",
    pass:"",
    country:"",
    gender:'',
    singing: false,
    dancing: false,
    sport: false,
  });
const changeHandler=(event)=>{
  event.preventDefault();
  const {name,value,checked,type}=event.target;
  setData((prev)=>{
    return{...prev,
      [name]:type==="checkbox"?checked:value,}
    })
  //  console.log(data)
  }
  function submitHandler(event){
      event.preventDefault();
      setFormData((prev)=>{
        return [...prev,data];
      })
      console.log(formData)
    }
//   }
  return (
    <div className='bg-[#48cae4] min-h-[100vh] text-black'>
          <form action="" onSubmit={submitHandler} className='flex flex-col gap-2 justify-between items-center py-20 text-2xl' >
            <input  onChange={changeHandler} name='name' type="text"  value={data.name} placeholder='Enter the name' className=' rounded-md px-2 py-2'/>
            <input onChange={changeHandler} name='email' type="email" value={data.email}  placeholder='Enter the email ' className=' rounded-md px-2 py-2'/>
            <input onChange={changeHandler} name='pass' type="password" value={data.pass}  placeholder='Enter the password' className=' rounded-md px-2 py-2'/>
             {/* country */}
            <label htmlFor="country" >Country</label>
            <select 
              id="country"
              name="country"
              className="pl-2 rounded-md   px-2 py-2"
              onChange={changeHandler}
              value={data.country}
            >
              <option>India</option>
              <option>USA</option>
              <option>Japan</option>
              <option>China</option>
            </select>
            {/* Adult or not */}
        <lable htmlFor="gender">Adult or Not ?</lable>
        <div className="gap-2 flex ">
          <input
            type="radio"
            id="male"
            name="gender"
            onChange={changeHandler}
            value="male"
          ></input>
          <label htmlFor="male">male</label>
          <input
            type="radio"
            id="no"
            name="gender"
            onChange={changeHandler}
            value="female"
          ></input>
          <label htmlFor="no">Female</label>
        </div>
        <fieldset className="gap-5">
          <legend className="">By Email</legend>
          <input
            type="checkbox"
            id="singing"
            name="singing"
            onChange={changeHandler}
            value={data.singing}
          ></input>
          <label>Singing</label>
          <input
            type="checkbox"
            id="dancing"
            name="dancing"
            onChange={changeHandler}
            value={data.dancing}
          ></input>
          <label>Dancing</label>
          <input
            type="checkbox"
            id="sport"
            name="sport"
            onChange={changeHandler}
            value={data.sport}
          ></input>
          <label>Sport</label>
        </fieldset>
            <button type="submit" className='bg-green-600 px-2 py-2 text-2xl font-bold rounded-md hover:scale-105 transition-all duration-500'>Submit</button>
          </form>
          {/* <Form2/> */}
      </div>
  )
}

export default Form