import React, { useEffect, useState } from 'react';

const ApiFetch = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    dataFetch();
  }, []); // Empty array to run the effect only once on component mount

  const dataFetch = async () => {
    try {
      const response = await fetch('https://dummyjson.com/products');
      const newData = await response.json();
      setData(newData.products); // Ensure you're accessing the correct part of the JSON response
      console.log(newData);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className='px-20'>
      <h1 className='font-bold text-2xl underline'>Data fetched from Api</h1>
      <div>
        <div className='flex flex-col gap-2'>
          {data.length > 0 ? (
            data.map((item, index) => <p key={index}>{item.category}</p>)
          ) : (
            <p>No data available</p>
          )}
        </div>
        <button
          className='bg-green-500 rounded-md px-2 py-2 text-2xl font-bold'
          onClick={dataFetch}
        >
          Get Data
        </button>
      </div>
    </div>
  );
};

export default ApiFetch;
