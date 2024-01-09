import React from 'react'
import { Link } from 'react-scroll'

function Footer() {

  const pageLinks = [{
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
    <div id='footer' className='grid grid-cols-2 h-[300px] my-10'>
      <div className='flex items-center justify-center'>
        <h2 className='text-4xl font-semibold text-[#795C34]'>CoffeeShop</h2>
      </div>
      <div className='flex items-center justify-center flex-col border-l-2 border-[#795C34]'>
        {
          pageLinks.map((link) => (
            <Link offset={-100} to={link.title} key={link.id} smooth={true} className='cursor-pointer hover:underline underline-offset-8 my-2 hover:text-[#795C34] text-xl font-semibold'>{link.title.charAt(0).toUpperCase()+link.title.slice(1)}</Link>
          ))
        }
      </div>
      
    </div>
  )
}

export default Footer