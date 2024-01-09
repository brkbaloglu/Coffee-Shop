import React from 'react'
import {FaFacebookF, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import { Link } from 'react-scroll'
function SocialMediaIcons() {

  const icons = [{
    id:1,
    child:(
      <>
        <FaLinkedin className="p-2" size={40}/>
      </>
    )
  },{
    id:2,
    child:(
      <>
        <FaFacebookF className="p-2" size={40}/>
      </>
    )
  },{
    id:3,
    child:(
      <>
        <FaWhatsapp className="p-2" size={40}/>
      </>
    )
  },{
    id:4,
    child:(
      <>
        <FaTwitter className="p-2" size={40}/>
      </>
    )
  }]

  return (
    <div className='flex items-center justify-center'>
      {
        icons.map(({id, child}) => (
          <div key={id} className=''>
            <Link href="#" className='inline-block mx-2 my-4 text-[#795C34] hover:bg-[#795C34] hover:text-white rounded-xl hover:scale-125 duration-300'>{child}</Link>
          </div>
        ))
      }
    </div>
  )
}

export default SocialMediaIcons