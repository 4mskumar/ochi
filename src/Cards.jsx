import React from 'react'

export const Cards = ({bg, text}) => {
    // console.log(bg);
    
  return (
    <div style={{backgroundColor: `${bg}`}} className={`w-full  flex flex-col justify-end items-start p-8 h-[30rem] rounded-xl`}>
        <button className='font-neu text-lg font-semibold px-6 py-2 border-[1px] rounded-full'>{text}</button>
    </div>
  )
}
