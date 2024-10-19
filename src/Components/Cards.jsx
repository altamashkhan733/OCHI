import { useAnimation } from 'framer-motion'
import React from 'react'

function Cards() {

  return (
    <div className='w-full h-screen bg-zinc-100 flex items-center px-20 gap-5 '>
     <div className='cardcontainer h-[50vh] w-1/2 '>
       <div className='card w-full h-full relative rounded-xl bg-[#024a38] flex items-center justify-center'>
        <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
        <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 bg-[#98bf19]'>&copy;2019-2020</button>
       </div>
     </div>
     <div className='cardcontainer-2 w-1/2 h-[50vh] flex gap-5'>
       <div className='card w-full h-full relative rounded-xl bg-[#031c16] flex items-center justify-center'>
         <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" />
         <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 '>RATING 5.0 ON CLUTCH</button>
       </div>
       <div className='card w-full h-full relative rounded-xl bg-[#05120f] flex items-center justify-center'>
         <img className=' w-32' src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" />
         <button className=' absolute px-5 py-1 rounded-full border-2 left-10 bottom-10 '>BUSINESS BOOTCAMP ALUMINI</button>
       </div>
     </div>
    </div>
  )
}

export default Cards
