import React from 'react'
import station from '../../Assets/station.png'
import { Link } from 'react-router-dom'

export default function Orders() {
  return (
    <div>
    <h2 className=' text-danger rounded-4 py-3 fw-bolder text-capitalize mb-4'>my orders</h2>

    <div className='orders bg-light bg-opacity-25 shadow w-100 p-2 rounded-2 mt-3 mb-3'>
      <div className='d-flex justify-content-around fw-bolder align-items-center'>
        <p>Product</p>
        <p>Price</p>
        <p>Quantity</p>
      </div>
    </div>

    <div className='row'>
      <div className='col-md-12 bg-light bg-opacity-25 shadow w-100 rounded-2 mt-3 mb-3'>
       <div className='order d-flex justify-content-around fw-bolder align-items-center'>
        <img src={station} alt="product" width={100} />
        <p className='me-5'>$660</p>
        <p className='me-5'>2</p>
       </div>
      </div>
    </div>

    <Link to={'/home'}><button className=' btn  border-2 border-black m-3 text-black'>Return to Shop</button></Link>
        
    </div>
  )
}
