import React from 'react'
import cat from '../assets/image_processing20201102-7366-1o79iwz.gif'
const Error = () => {
  return (
      <div className='flex justify-center relative'>
        <p className='absolute top-1/2 left-[19%] font-semibold  text-[10rem]'><span className='text-yellow-50'>kitty</span> ate<br/> your <span className='text-yellow-600'>Files</span></p>
        <img src={cat} className='w-screen h-full object-cover '/>
        <h1 className='absolute text-[10rem] font-semibold '>404 Page not Found</h1>
    </div>
  )
}

export default Error