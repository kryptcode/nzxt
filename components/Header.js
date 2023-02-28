import React from 'react'
import {CartIcon, HelpIcon, MenuIcon, SearchIcon, UserIcon} from './icons'

const Header = () => {
  return (
    <div className='md:bg-[#313235] md:text-white py-3 sticky top-0 h-16 backdrop-blur-md bg-white/50'>
      <div className='w-[90%] mx-auto flex justify-between items-center space-x-3 '>
        
        <div className='text-2xl items-center flex space-x-4 font-black'>
        <div className='md:hidden text-black'>
          <MenuIcon />
        </div>
        <span>
        NZXT
        </span>
        </div>

        <div className='hidden md:flex space-x-5'>
          <div className='hover:text-gray-500 cursor-pointer'>Gaming PCs</div>
          <div className='hover:text-gray-500 cursor-pointer'>Components</div>
          <div className='hover:text-gray-500 cursor-pointer'>Monitors</div>
          <div className='hover:text-gray-500 cursor-pointer'>Peripherals</div>
          <div className='hover:text-gray-500 cursor-pointer'>Software</div>
          <div className='hover:text-gray-500 cursor-pointer'>Community</div>
        </div>


        <div className='flex text-[#8a00fc] md:text-white text-lg font-semibold space-x-4'>
          <SearchIcon />
          <HelpIcon />
          <UserIcon />
          <CartIcon />
        </div>
      </div>
    </div>
  )
}

export default Header
