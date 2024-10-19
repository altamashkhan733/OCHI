import { motion, useAnimation } from 'framer-motion';
import React from 'react'

function Featured() {
  
  const cards = [useAnimation(),useAnimation()];

  const handlehover = (index) =>{
    cards[index].start({y:"0"})
  }

  const handlehoverEnd = (index) =>{
    cards[index].start({y:"100%"})
  }

  return (
    <div data-scroll data-scroll-section className=' relative w-full py-20'>
      <div className='w-full px-20 border-b-2 pb-20 border-zinc-700'>
        <h1 className='text-8xl font-["Neue-Montreal"] tracking-tight'>Featured projects</h1>
      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10 mt-10">
          <motion.div 
          onHoverStart={()=>handlehover(0)}
          onHoverEnd={()=>handlehoverEnd(0)}  
          className='cardcontainer relative  w-1/2 h-[80vh] '>
            <h1 className='absolute flex text-[#a5cf4a] overflow-hidden right-0  translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-7xl'>
            {"FYDE".split('').map((item, index)=>(
            <motion.span 
            initial={{y:"100%"}} 
            animate={cards[0]} 
            transition={{ease: [0.83, 0, 0.17, 1], delay: index*.05, duration: 0.5}}
            className='inline-block'>
            {item}</motion.span>
            ))}
            </h1>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/CS_Website_1-663x551.png" alt="" />
            </div>
          </motion.div>
          <motion.div 
          onHoverStart={()=>handlehover(1)}
          onHoverEnd={()=>handlehoverEnd(1)}
          className='cardcontainer relative w-1/2 h-[80vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
            <h1 className='absolute flex overflow-hidden text-[#a5cf4a] right-full translate-x-1/2 top-1/2 -translate-y-1/2 tracking-tighter text-7xl'>
            {"VISE".split('').map((item, index)=>
            <motion.span 
            initial={{y:"100%"}} 
            animate={cards[1]} 
            transition={{ease: [0.83, 0, 0.17, 1], delay: index*.05}}
            className='inline-block'>
            {item}</motion.span>
            )}
            </h1>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2024/08/Frame-481692-1-663x551.png" alt="" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className='px-20'>
      <div className="cards w-full flex gap-10 mt-10">
          <div className='cardcontainer  overflow-hidden w-1/2 h-[80vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden '>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png" alt="" />
            </div>
          </div>
          <div className='cardcontainer  overflow-hidden w-1/2 h-[80vh] '>
            <div className='card w-full h-full rounded-xl overflow-hidden'>
                <img className='w-full h-full' src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
