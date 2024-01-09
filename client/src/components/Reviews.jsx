import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Reviews() {

  const [reviews, setReviews] = useState([])

  useEffect(() => {
    const getAllReviews = async () => {
      const response = await axios.get("http://localhost:3000/reviews")
      setReviews(response.data)
    }
    getAllReviews()
  }, [])

  return (
    <div id='reviews' className='flex items-center justify-center flex-col'>
      <h3 className='text-4xl font-semibold'>Customer <span className='text-[#795C34]'>Reviews</span></h3>
      <div className='grid grid-cols-3 my-10 mx-5'>
        {
          reviews.map((review) => (
            <div key={review.id} className='mx-10 my-4  border-2 border-gray-300 px-2 py-4 flex items-center justify-center flex-col'>
              <img src={review.reviewUserImg} className='h-[250px] w-[350px]' alt="" />
              <h3 className='text-center my-6'>{review.reviewUsername}</h3>
              <h5>{review.reviewDescription}</h5>
              <h6 className='text-center my-6'>{review.reviewScore} / 10</h6>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Reviews