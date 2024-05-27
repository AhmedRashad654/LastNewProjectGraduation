import React from 'react'

export default function Checkout() {
  return (
    <section className="py-5 mx-auto p-3 marginTop">
      <h2 className='mb-3 text-main p-3 fw-bolder'>Billing Details</h2>
      <form >
        <div className="form-group p-2">
          <label className='p-2' htmlFor="details">Details<span className=' text-danger'>*</span></label>
          <input type="text" className=' form-control' name='details' id='details' placeholder='Details'/>
        </div>
        <div className="form-group p-2">
          <label className='p-2' htmlFor="phone">Phone<span className=' text-danger'>*</span></label>
          <input type="text" className=' form-control' name='phone' id='phone'  placeholder='Phone' />
        </div>
        <div className="form-group p-2">
          <label className='p-2' htmlFor="details">city<span className=' text-danger'>*</span></label>
          <input type="text" className=' form-control' name='city' id='city' placeholder='City' />
        </div>
            <button className='btn bg-main w-100 text-white mt-4'>
             Pay Now
            </button>
      </form>
    </section>
  )
}
