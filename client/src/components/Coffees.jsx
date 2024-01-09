import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Coffees() {

  const [coffees, setCoffees] = useState([])

  useEffect(() => {
    const getAllCoffees = async() => {
      const response = await axios.get("http://localhost:3000/coffees")
      setCoffees(response.data)
      console.log(response);
    }
    getAllCoffees()
  }, [])

  return (
    <div className='flex items-center justify-center flex-col' id='coffees'>
        <h3 className='text-4xl font-semibold'>Our <span className='text-[#795C34]'>Coffees</span></h3>
      <div className='grid grid-cols-4 my-10'>
      {
        coffees.map((coffee) => (
          <div key={coffee.id} className='mx-4 my-2 px-4 py-4 border-2 border-gray-300 rounded-xl'>
            <img className='rounded-xl' src={coffee.coffeeImgUrl} alt="" />
            <div className='text-center my-6'>
            <h3>{coffee.coffeeName}</h3>
            <h5>{coffee.coffeePrice} TL</h5>
            
            </div>
          </div>
        ))
      }
      
      </div>
    </div>
  )
}

export default Coffees