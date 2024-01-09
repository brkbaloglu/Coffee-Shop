import React from 'react'
import { Link } from 'react-scroll'

function Home() {

  return (
    <div id='home' className='mt-[80px] z-50'>
      <div>
        <img className='bg-cover bg-center w-full h-screen' src="https://images.pexels.com/photos/143642/pexels-photo-143642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
      </div>
      <div className='flex items-center justify-center flex-col mt-6'>
        <h3 className='text-4xl font-semibold'>Welcome to our <span className='text-[#795C34]'>Coffee Shop</span></h3>
        <div className='my-6 '>
          <Link offset={-100} to="coffees" smooth={true} className='cursor-pointer py-2 px-4 border-2 border-[#795C34] bg-[#795C34] rounded-xl text-white hover:bg-white hover:text-[#795C34] '>See Our Menu</Link>
        </div>
      </div>
    </div>
  )
}

export default Home