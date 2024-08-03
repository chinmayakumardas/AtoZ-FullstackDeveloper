import React from 'react';

const Card = ({ name, company, url }) => {
  return (
    <div className='hover:scale-[1.1] transition-all  flex flex-col  gap-1 px-5 py-5 border-red-800 rounded-[20px] border-[5px] border-solid'>
      <img className='h-[300px] w-[300px]' src={url} alt={name} />
      <p>Name: {name}</p>
      <p>From: {company}</p>
    </div>
  );
}

export default Card;
