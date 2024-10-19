import { motion } from 'framer-motion';
import React from 'react';

function Marquee() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.1" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl bg-[#186343]'>
      <div className='text border-t-2 border-b-2 border-zinc-300 flex  whitespace-nowrap overflow-hidden '>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:'linear', duration:5}} className='text-[18vw] leading-none mb-10 pt-2 pr-10 font-medium '>We are Ochi</motion.h1>
        <motion.h1 initial={{x: "0"}} animate={{x:"-100%"}} transition={{repeat:Infinity, ease:'linear', duration:5}} className='text-[18vw] leading-none mb-10 pt-2 pr-10 font-medium '>We are Ochi</motion.h1>
      </div>
    </div>
  )
}

export default Marquee