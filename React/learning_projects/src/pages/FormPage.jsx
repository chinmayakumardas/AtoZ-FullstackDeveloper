import React, { useState } from 'react';
import Form2 from '../compoents/Form2';

const FormPage = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    city: "",
    comment: "",
    hubby: []
  });

  function submitHandler(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const selectedHobbies = [];
    formData.getAll('hubby').forEach((value) => {
      selectedHobbies.push(value);
    });

    const datas = {
      name: formData.get('name'),
      email: formData.get('email'),
      city: formData.get('city'),
      comment: formData.get('comment'),
      hubby: selectedHobbies
    };
    setData(datas);
    console.log(datas);
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <fieldset className="bg-slate-500 min-h-[100vh] flex flex-col items-center gap-5 pt-[10px] border-2 border-gray-300 rounded-lg p-5">
          <legend className="pt-10 text-white text-xl mb-4">React Form!</legend>
          <div className="pt-10 flex flex-col w-full max-w-xs gap-3">
            <input
              type="text"
              name="name"
              placeholder="Enter the Name"
              className="p-2 rounded border border-gray-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter the Email"
              className="p-2 rounded border border-gray-300"
            />
            <select name="city" className="p-2 rounded border border-gray-300">
              <option>Select the city</option>
              <option value="bbsr">Bbsr</option>
              <option value="cuttack">Cuttack</option>
              <option value="newyork">Newyork</option>
            </select>
            <div className="flex gap-3 text-white">
              <label>
                <input type="checkbox" name="hubby" value="cricket" /> Cricket
              </label>
              <label>
                <input type="checkbox" name="hubby" value="hockey" /> Hockey
              </label>
              <label>
                <input type="checkbox" name="hubby" value="song" /> Song
              </label>
            </div>
            <input
              type="text"
              name="comment"
              placeholder="Enter the comments"
              className="p-2 rounded border border-gray-300"
            />
            <button
              type="submit"
              className="mt-5 p-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition-colors"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>

      <Form2/>
    </div>
  );
};

export default FormPage;
