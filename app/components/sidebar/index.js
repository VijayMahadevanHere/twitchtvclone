import React from 'react'
import streamers from "../../data/streamers";
import { CircleUserRound } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className='  bg-[#1f2024] w-72 h-[46rem]'>
    <p className='text-base font-medium'>Recommended channels</p>
    <div className='p-2 text-sm gap-1.5 flex flex-col'>
    {streamers.map(({name,viewers,content})=>{
      return (
        <div  key={name} className='flex flex-row justify-between '>
          <div className='flex flex-row gap-1'>
             <CircleUserRound/>
             <div>
          <p className='font-semibold'>{name}</p>
          <p className='text-slate-400'>{content}</p>
          </div>
          </div>  
          <div className='flex flex-row items-start'>
          <p className='text-red-500 text-5xl mt-[-29px]'>.</p>
         <p>{viewers}</p>
          </div>
          
        </div>
      )
    })}
    </div>
    </div>
  )    
}

export default Sidebar
