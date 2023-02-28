import React from 'react'

const JustDropped = () => {
  return (
    <div className='text-gray-200 bg-[#1c1d1f] w-[90%] md:w-[82%] pt-5 md:pt-0 flex flex-col md:flex-row justify-between mx-auto my-16 '>
        <div className='flex-1 py-8 px-5 md:px-0 md:py-14 md:ml-24'>
            <h2 className='text-3xl font-bold tracking-wide mb-1.5'>
                Just Dropped:
            </h2>
            <h2 className='text-3xl font-bold tracking-wide mb-3'>
                Nvidia RTX 4070Ti
            </h2>
            <p className='text-xl font-semibold mb-7'>
                Faster than the 3080 and half the size. Build a custom PC with the new 4070Ti GPU.
            </p>
            <button className='border-[2px] border-white text-lg font-medium py-1.5 px-5 rounded-lg transition-all duration-200 ease-in-out hover:scale-105 '>
                Customize a PC
            </button>
        </div>

        <div className='flex-1 jd-bg hidden md:flex ' />
        <div className='h-[50vh] jd-bg-mobile md:hidden' />
    </div>
  )
}

export default JustDropped