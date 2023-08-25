import React from 'react';
import gif from '../images/loading.gif'

const Loading = () => {
  return (
    <div className='flex justify-center py-[30vh]'>
        <img src={gif} alt="Loading" />
    </div>
  )
}

export default Loading