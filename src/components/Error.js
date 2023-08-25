import React from 'react';
import gif from '../images/error.gif'

const Error = () => {
  return (
    <div className='flex justify-center py-[20vh] bg-[#FEFBFB]'>
        <img src={gif} alt="Loading" />
    </div>
  )
}

export default Error