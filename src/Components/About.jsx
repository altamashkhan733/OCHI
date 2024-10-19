import React from 'react'

function About() {
  return (
    <div  className='w-full p-20 bg-[#a5cf4a] rounded-tl-3xl rounded-tr-3xl text-black'>
      <h1 className='font-[NeueMontreal] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic presentation agency for forward-thinking 
        businesses that need to raise funds, sell products, explain complex ideas, and hire great people.</h1>
        <div className='w-full pt-10 flex gap-5 border-t-[1px] mt-20  border-[#80ad1d]'>
          <div className='w-1/2 '>
            <h1 className='text-7xl'>Our approach:</h1>
            <button className='flex gap-10 items-center uppercase px-10 py-6 mt-10 bg-zinc-900 rounded-full text-white'>Read More
             <div className='w-2 h-2 bg-zinc-100 rounded-full'></div>
            </button>
          </div>
          <div className='w-1/2  h-[70vh] rounded=3xl bg-[url("https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg")]'>
          </div>
        </div>
    </div>
  )
}

export default About
