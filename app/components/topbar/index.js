import React from "react";
import { Search, GripVertical ,User} from "lucide-react";
import Twitch from '../../images/twitch.webp'
import Image from "next/image"

const Topbar = () => {
  return (
    <div className="bg-[#1f2024] flex justify-between p-2">
          <Product/>
      <SearchBar />
      <Authentictions/>
     
    </div>
  );
};   

export default Topbar;

const SearchBar = () => {
  return (
    <div className="flex items-center">
        
      <input
        className="px-2 py-1 bg-inherit border-[1px] font-semibold w-80 outline-8  outline-[#5C16C5] border-gray-500 rounded-l-md"
        placeholder="Search"
      />
    
      <Search size={36} strokeWidth={3} className="bg-[#383838] p-2 rounded-r-md" />
    </div>
  );
};

const Product = () => {
  return (
    <div className="flex gap-4">
      <Image className="w-7 h-7" src={Twitch}/>
      <p className="border-b-2 border-[#a653f9] font-bold text-[#a653f9]">Browse</p>
      <GripVertical />     
    </div>
  );
};


const Authentictions=()=>{
return (
    <div className="text-sm flex items-center gap-2 font-semibold">
    <button className="px-2 py-1 bg-[#383838] hover:bg-[#4d4c4c] cursor-pointer rounded-md">Log In</button>
    <button className="px-2 py-1 bg-[#5c16c5] hover:bg-[#3d098a] cursor-pointer rounded-md">Sign Up</button>
    <User size={30} className="hover:bg-slate-700 cursor-pointer rounded-md p-1"/>
  </div>
)

}


