import React from 'react'

const Subscribe = () => {
  return (
   <section className="mt-16 max-container">
    <div className="flex justify-between items-center xl:flex-row flex-col gap-14">
      <h2 className='text-4xl  w-full leading-[65px] font-semibold font-palanquin'>Sign Up for <span className='text-[#0083BF]'>Updates</span> & Newsletter</h2>

      <button className='sm:border-4 rounded-full w-full max-sm:flex-col max-sm:gap-5 max-sm:w-full flex  justify-between px-7 items-center py-3 '>
        <input type="text" placeholder='subscribe@hoka.com ' className='input text-xl' />
        <button className='bg-[#0083bf] max-sm:w-full  text-lg rounded-full px-6 py-3 max-sm:py-[20px] text-white '>
          Sign Up
        </button>
      </button>
    </div>
   </section>
  )
}

export default Subscribe
