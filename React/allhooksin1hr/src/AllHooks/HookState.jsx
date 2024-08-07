// import React, { useState } from 'react';

// const HookState = () => {
//   const [Data, setData] = useState({
//     fname: '',
//     lname: '',
//     password: '',
//     city: '',
//     state: '',
//     hobbies: [],
//   });
//   const [db, setDb] = useState([Data]);

//   const submitHandler = (event) => {
//     event.preventDefault();
//     //way 1
//     // const formatData = new FormData(event.target);

//     // const final = {
//     //   fname: formatData.get('fname'),
//     //   lname: formatData.get('lname'),
//     //   password: formatData.get('password'),
//     //   city: formatData.get('city'),
//     //   state: formatData.get('state'),
//     //   hobbies: formatData.getAll('hobbies'),
//     // };
//     // setData(final);
//     // console.log(final);


//     //way2
//     const {name,value,cheked,type}=event.target;
//    let final= setData((prev)=>{
//         return {
//           ...prev,
//           [name]:type==='checkbox'?cheked:value,
//         }
//     })


//     setDb((prev) => {
//       return [...prev, final];
//     });
//     console.log(db);
//   };

//   return (
//     <div className='flex justify-center items-center'>
//       <form className='w-full max-w-lg' onSubmit={submitHandler}>
//         <div className='flex flex-wrap -mx-3 mb-6'>
//           <div className='w-full md:w-1/2 px-3 mb-6 md:mb-0'>
//             <label
//               className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//               htmlFor='grid-first-name'
//             >
//               First Name
//             </label>
//             <input
//               className='appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white'
//               id='grid-first-name'
//               type='text'
//               name='fname'
//               placeholder='Jane'
//             />
//             <p className='text-red-500 text-xs italic'>Please fill out this field.</p>
//           </div>
//           <div className='w-full md:w-1/2 px-3'>
//             <label
//               className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//               htmlFor='grid-last-name'
//             >
//               Last Name
//             </label>
//             <input
//               className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//               id='grid-last-name'
//               name='lname'
//               type='text'
//               placeholder='Doe'
//             />
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-6'>
//           <div className='w-full px-3'>
//             <label
//               className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//               htmlFor='grid-password'
//             >
//               Password
//             </label>
//             <input
//               className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//               id='grid-password'
//               type='password'
//               name='password'
//               placeholder='******************'
//             />
//             <p className='text-gray-600 text-xs italic'>Make it as long and as crazy as you'd like</p>
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-2'>
//           <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
//             <label
//               className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//               htmlFor='grid-city'
//             >
//               City
//             </label>
//             <input
//               className='appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//               id='grid-city'
//               type='text'
//               name='city'
//               placeholder='Albuquerque'
//             />
//           </div>
//           <div className='w-full md:w-1/3 px-3 mb-6 md:mb-0'>
//             <label
//               className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'
//               htmlFor='grid-state'
//             >
//               State
//             </label>
//             <div className='relative'>
//               <select
//                 className='block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
//                 id='grid-state'
//                 name='state'
//               >
//                 <option value='new mexico'>New Mexico</option>
//                 <option value='missouri'>Missouri</option>
//                 <option value='texas'>Texas</option>
//               </select>
//               <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
//                 <svg
//                   className='fill-current h-4 w-4'
//                   xmlns='http://www.w3.org/2000/svg'
//                   viewBox='0 0 20 20'
//                 >
//                   <path d='M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z' />
//                 </svg>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className='flex flex-wrap -mx-3 mb-6'>
//           <div className='w-full px-3'>
//             <label className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2'>
//               Hobbies
//             </label>
//             <div className='flex items-center mb-2'>
//               <input
//                 className='mr-2 leading-tight'
//                 type='checkbox'
//                 name='hobbies'
//                 value='dance'
//               />
//               <span className='text-sm'>Dance</span>
//             </div>
//             <div className='flex items-center mb-2'>
//               <input
//                 className='mr-2 leading-tight'
//                 type='checkbox'
//                 name='hobbies'
//                 value='sing'
//               />
//               <span className='text-sm'>Sing</span>
//             </div>
//             <div className='flex items-center mb-2'>
//               <input
//                 className='mr-2 leading-tight'
//                 type='checkbox'
//                 name='hobbies'
//                 value='travel'
//               />
//               <span className='text-sm'>Travel</span>
//             </div>
//           </div>
//         </div>
//         <button
//           className='text-2xl text-blue-700 bg-green-500 px-5 py-2 rounded-md hover:scale-110'
//           type='submit'
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default HookState;




import { useState } from "react";



function HookState() {
  const [formData, setformData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    country: "",
    street:"",
    city:"",
    state: "",
    pincode:"",
    adult:true,
    singing:false,
    dancing:false,
    sport:false,
  });
  console.log(formData);

  function changeHandler(event){
    const { name, value, checked, type } = event.target;
    setformData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });

  }

  function submitHandler(event) {
    event.preventDefault();
    console.log("Form submited sucessfully");
    // alert(formData.state)
    console.log(formData)
  }
  return (
    <div className="App bg-gray-200 h-screen mx-auto flex flex-col">
      <u>React Form</u>
      <form
        onSubmit={submitHandler}
        className="flex flex-col w-[500px] justify-center items-center mx-auto"
      >
      {/* first name */}
        <lable htmlFor="firstname">First Name</lable>
        <input
         
          className="pl-2 rounded-md"
          type="text"
          id="firstname"
          name="firstname"
          placeholder="Enter First name..."
          onChange={changeHandler}
          value={formData.firstname}
        ></input>
        {/* last name */}
        <lable htmlFor="lastname">Last Name</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="lastname"
          name="lastname"
          placeholder="Enter Last name..."
          onChange={changeHandler}
          value={formData.lastname}
        ></input>
        {/* email */}
        <label htmlFor="email">Email </label>
        <input
          name="email"
          className="pl-2 rounded-md"
          id="email"
          type="email"
          placeholder="Enter Email..."
          onChange={changeHandler}
          value={formData.email}
        ></input>
        {/* country */}
        <label htmlFor="country">Country</label>
        <select id="country" name="country" className="pl-2 rounded-md w-[38%]" onChange={changeHandler}  value={formData.country}>
          <option>India</option>
          <option>USA</option>
          <option>Japan</option>
          <option>China</option>
        </select>
        {/* street Address  */}
        <lable htmlFor="street">Street Address</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="street"
          name="street"
          placeholder="Street name..."
          onChange={changeHandler}
          value={formData.street}
        ></input>
       
      
         {/* city */}
         <lable htmlFor="city">City</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="city"
          name="city"
          placeholder="Bhubaneswar"
          onChange={changeHandler}
          value={formData.city}
        ></input>
        {/* state/provinance */}
        <lable htmlFor="state">State / provinance</lable>
        <input
          className="pl-2 rounded-md"
          type="text"
          id="state"
          name="state"
          placeholder="Odisha"
          onChange={changeHandler}
          value={formData.state}
        ></input>
        {/* zip code */}
        <lable htmlFor="pincode">Pincode</lable>
        <input
          className="pl-2 rounded-md "
          type="number"
          id="pincode"
          name="pincode"
          placeholder="751024"
          pattern="[0-9]{6}"
          onChange={changeHandler}
          value={formData.pincode}
        ></input>
        {/* Adult or not */}
        <lable htmlFor="adult">Adult or Not ?</lable>
        <div className="gap-2 flex ">
        <input type="radio" id="yes" name="adult" onChange={changeHandler}  value="yes"></input>
        <label htmlFor="yes">Yes</label>
        <input type="radio" id="no" name='adult' onChange={changeHandler}  value="no"></input>
        <label htmlFor="no">No</label>
        </div>
        <fieldset className="gap-5">
          <legend className="">By Email</legend>
          <input type="checkbox" id='singing' name="singing"  onChange={changeHandler}  value={formData.singing}></input>
          <label>Singing</label>
          <input type="checkbox" id='dancing' name="dancing"  onChange={changeHandler}  value={formData.dancing}></input>
          <label>Dancing</label>
          <input type="checkbox" id='sport' name="sport"  onChange={changeHandler}  value={formData.sport}></input>
          <label>Sport</label>
        </fieldset>
        <button className="bg-blue-500 mt-4 h-[40px] text-white rounded-md px-4">Submit</button>
      </form>
    </div>
  );
}

export default HookState;