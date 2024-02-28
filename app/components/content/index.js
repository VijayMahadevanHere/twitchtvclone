'use client'

import React ,{useState}from 'react'
import categories from '../../data/categories.json'
import { Search ,ChevronDown,Sparkle,ArrowDownNarrowWide} from "lucide-react";
import Cards from '../../data/cards.json'
import { cardImage } from '../../images/images'
import Image from 'next/image'
import searchCategory from '../../data/searchCategories.json'

  
const Content = () => {
  return (
    <div  className='px-5 py-10 bg-[#0E0E10] w-full flex flex-col gap-6'>
     <p className='text-5xl font-bold'>Browse</p>
    <div className='flex justify-between gap-2'>
    {categories.map((category)=>{
      return(
        <div className='bg-[#5c16c5] px-4 py-2 w-full text-2xl font-bold cursor-pointer hover:bg-[#3d098a] rounded-md'>
          {category}
           </div>
      )
     })}
    </div>
    
    <Tabs/>
    <Filter/>
    <CardItem/>
    </div>
  )
}

export default Content


const Tabs =()=>{
  return(
    <div className='flex gap-8'>
      <p className='border-b-2 border-[#a653f9] font-bold text-[#a653f9] hover:text-[#ac7bf7]'>Categories</p>
      <p className=' font-bold  hover:text-[#a653f9] '>Live Channels</p>
    </div>
  )
}

const Filter=()=>{
  return (
    <div className='flex  justify-between' >
 <SearchBox/>
 <Dropdown/>
    </div>
  
  )
}


const SearchBox=()=>{
  
  const[isOpen,setIsOpen]=useState(false)
  const [selected,setSelected]=useState('')
  return(
    <div className='flex '>
    <Search className='absolute m-1'/>
  <input
  onClick={()=>setIsOpen(!isOpen)}
  onBlur={()=>setIsOpen(false)}
  type='text'
  placeholder='Search Category Tags'
  className='bg-inherit border-[1px] border-grey-500 px-8 py-1 rounded-md outline-8  outline-[#5C16C5]' 
  
  />
    {isOpen &&
        <div className='absolute  bg-neutral-800  mt-12 w-48 rounded-md shadow-lg z-10 h-48 overflow-auto'>
          {searchCategory.map(({name})=>{
           return(
           <div className='hover:bg-gray-500 w-full p-2 rounded-md cursor-pointer'>{name}</div>
           )
          })}
        </div>
        }
  </div>
  )
}

const Dropdown=()=>{
  const[isOpen,setIsOpen]=useState(false)
  const [selected,setSelected]=useState(false)
return(
  <div className='flex gap-2 items-center'>
    <p className='font-semibold'>Sort by</p>
    <div>
      <button onClick={()=>{
        setIsOpen(!isOpen);
       
      }} className='flex items-center rounded-md px-2 py-1 border-2 border-gray-500 bg-neutral-800'>{selected || "Recommended For You"}
      <ChevronDown/>
      </button>
    
        {isOpen &&
        <div className='absolute bg-neutral-800 p-2 mt-1 rounded-md'>
          <span onClick={()=>setSelected('Recommended For You')} className={`flex item-center gap-2 px-2 py-1 hover:bg-neutral-950 rounded-md    cursor-pointer ${selected === 'Recommended For You' ? 'bg-[#a653f9]' : 'text-white'}`}>
            <Sparkle size={20}/>
          <p>Recommended For You</p>
          </span>
          <span onClick={()=>setSelected('Viewers (High to Low)')} className={`flex item-center gap-2 px-2 py-1 hover:bg-neutral-950 rounded-md cursor-pointer ${selected === 'Viewers (High to Low)' ? 'bg-[#a653f9]' : 'text-white'}`}>
           <ArrowDownNarrowWide size={20}/>
          <p>Viewers (High to Low)</p>
          </span>
        </div>
        }
        
  
    </div>
   
  </div>
)
}


const CardItem=()=>{
  return(
    <div className='flex flex-wrap gap-2'>
{Cards.map(({name,viewers,category,image})=>{
  return (
    <div >
      <div className='bg-purple-500'>
      <Image src={cardImage[image]} className='h-72 w-56 object-cover cursor-pointer hover:translate-x-1
      hover:translate-y-[-6px] transition-transform' />
      </div>
      <p className='text-lg font-bold mt-2' >{name}</p>
      <p className='text-sm text-gray-400 mt-2'>{viewers} Viewers</p>
      <div className='flex gap-2 text-gray-300 text-sm'>
    {category.map((category)=>{
      return(
        <div className='bg-gray-800 px-[8px] rounded-md'>
          {category}  
           </div>
      )
     })}
    </div>

      
    </div>
  )
 
})}
    </div>  
    
  )
}