import React from 'react'

const Banner = () => {
  return (
    <>
    <div className='banner-small block md:hidden h-[100vh] '>
        <div className='flex flex-col text-center items-center space-y-4 pt-10'>
            <h1 className='text-4xl font-bold text-[#313235] '>
                Introducing the H9 Series
            </h1>
            <h3 className='text-xl font-semibold'>    
                Make Performance an Art
            </h3>
            <button className='bg-[#7315e5] text-white rounded-lg px-4 py-1.5 text-lg font-medium shadow-xl hover:scale-105 transition-all ease-in-out duration-200'>
                Shop H9 Series
            </button>
        </div>
    </div>

    <div className='banner-big hidden md:block h-[120vh] '>
        <div className='flex flex-col items-center space-y-4 pt-10'>
            <h1 className='text-5xl font-bold text-[#313235] '>
                Introducing the H9 Series
            </h1>
            <h3 className='text-3xl font-semibold'>
                Make Performance an Art
            </h3>
            <button className='bg-[#7315e5] text-white rounded-lg px-4 py-2 text-lg font-medium shadow-xl hover:scale-105 transition-all ease-in-out duration-200 '>
                Shop H9 Series
            </button>
        </div>
    </div>
    </>
  )
}

export default Banner