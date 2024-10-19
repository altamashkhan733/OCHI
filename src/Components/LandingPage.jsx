import React from 'react';
import {  FaArrowUpLong } from "react-icons/fa6";
import {motion} from "framer-motion";

function LandingPage() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen bg-zinc-900 pt-1'>
      <div className="textstructure mt-40 px-20">
        {["We create","Eye opening", "Presentation"].map((item, index)=>{
            return <div className='masker'>
                <div className='w-fit flex '>
                    {index ===1 &&(
                    <motion.div 
                    initial={{width:0}} 
                    animate={{width: "9vw"}} 
                    transition={{ ease:[0.76, 0, 0.24, 1] , duration:1}} 
                    className='w-[9vw] mr-2 h-[5.1vw] rounded-md bg-[url("https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg")] relative -bottom-[1.1vw]'></motion.div>
                    )}
                <h1 className='uppercase text-[7vw] leading-[7vw] tracking-tighter font-["FoundersGrotesk"] font-medium'>
                {item}
                </h1>
            </div>
         </div>
        })}
      </div>
      <div className='border-t-[1px] border-zinc-800 mt-28 flex justify-between items-center py-5 px-20'>
        {["For public and private companies", "From the first pitch to IPO"].map((item,index)=> 
        <p className='text-lg font-light tracking-tight leading-none'>{item}</p>
        )}
        <div className='start flex items-center gap-5'>
            <div className=' h-7 px-3 py-0.3 border-[1px] border-zinc-400 font-light text-lg uppercase rounded-full flex'>Start the project</div>
            <div className='px-2 py-1  border-[2px] border-zinc-500 rounded-full items-center justify-center'>
                <span className='inline-block  rotate-45'>
                 <FaArrowUpLong />
                </span>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LandingPage
