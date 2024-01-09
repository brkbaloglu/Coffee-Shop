import React from 'react'
import { useFormik } from 'formik'
import validationSchema from "../validations/validations"
function Contact() {

  
  const {handleSubmit, handleBlur, handleChange, isSubmitting, values, errors, touched} = useFormik({
    initialValues:{
      name: "",
      email: "",
      message : ""
    },

    onSubmit: async(values, bag) => {
      await new Promise((r) => setTimeout(r, 1000))
      
      console.log(values)
      bag.resetForm()

    },
    validationSchema : validationSchema
    
  })


  return (
    <div id='contact' className='flex items-center justify-center flex-col'>
      <h3 className='my-6 text-4xl font-semibold'>Contact <span className='text-[#795C34]'>Us</span></h3>
      <form action="" onSubmit={handleSubmit} className='flex items-center justify-center flex-col '>
        <input className=' w-[600px] p-2 rounded-xl border-2 m-2 border-[#795C34] placeholder:text-[#795C34]' onBlur={handleBlur("name")} disabled={isSubmitting} value={values.name} type="text" name="name" id="name" placeholder='Enter your name' onChange={handleChange("name")}/>
        {errors.name && touched.name && <div className='text-red-600'>{errors.name}</div>}
        <input className=' w-[600px] p-2 rounded-xl border-2 m-2 border-[#795C34] placeholder:text-[#795C34]' onBlur={handleBlur("email")} disabled={isSubmitting} value={values.email} type="email" name="email" id="email" placeholder='Enter your email' onChange={handleChange("email")}/>
        {errors.email && touched.email && <div className='text-red-600'>{errors.email}</div>}
        <textarea  className='resize-none w-[600px] p-2 rounded-xl border-2 m-2 h-[200px] border-[#795C34] placeholder:text-[#795C34]' onBlur={handleBlur("message")} disabled={isSubmitting} value={values.message} type="message" name="message" id="message" placeholder='Enter your message' onChange={handleChange("message")}/>
        {errors.message && touched.message && <div className='text-red-600'>{errors.message}</div>}
        <button type="submit" disabled={isSubmitting} className='px-4 py-2 border-2 rounded-xl bg-[#795C34] text-white hover:bg-white hover:text-[#795C34] hover:border-[#795C34]'>Submit</button>
        
      </form>
    </div>
  )
}

export default Contact