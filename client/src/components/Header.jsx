import React from 'react'
import { Link } from 'react-scroll'

function Header() {

  const navbarItems = [{
    id: 1,
    title : "home"
  },{
    id: 2,
    title : "about"
  },{
    id: 3,
    title : "coffees"
  },{
    id: 4,
    title : "reviews"
  },{
    id: 5,
    title : "contact"
  },]

  return (
    <div id='header' className='flex items-center justify-around h-[80px] border-b-2 border-[#3C280D] top-0 fixed w-full z-10 bg-white'>
      <div>
        <h5 className='text-[#3C280D] text-2xl font-semibold'>CoffeeShop</h5>
      </div>
      <div>
        <ul className='flex items-center justify-center'>
          {
            navbarItems.map((item) => (
              <Link offset={-100} to={item.title} smooth={true} key={item.id} className='cursor-pointer text-[#3C280D] hover:bg-[#3C280D] hover:text-white px-4 py-2 rounded-xl'>{item.title.charAt(0).toUpperCase()+item.title.slice(1)}</Link>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Header