import React from 'react'

export const Story = ({img , username}) => {
  return (
    <div  className=''>
        <img src={img} alt='img' className='h-14 w-14 cursor-pointer  rounded-full border-2 border-red-500 object-cover p-[2px] hover:scale-110 transition  transform duration-200 ease-out  ' />
        <p className='text-center text-sm w-14 truncate' >{username}</p>
    </div>
  )
}
