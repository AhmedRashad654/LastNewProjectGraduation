import React from 'react'
import { Link } from 'react-router-dom'
import phone1 from '../../Assets/phone1.png'
import './Register.css'

export default function Register() {
  return (
    <div className="row">
    <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center">
      <img className="w-100 phone1" src={phone1} alt="" />
    </div>

    <div className="col-lg-7">
      <div className="min-vh-100 d-flex justify-content-center align-items-center text-center signup-container">
        <div className="bg-light bg-opacity-25 shadow w-100 mx-auto  p-5 rounded-2">
          <h1 className="fw-bold">Create an Account</h1>
          <div className="pt-3">
            <form >
              <input
            
                className="form-control my-2"
                type="text"
                name="name"
                id="name"
                placeholder="Enter Your Name"
              />
              
              <input
           
                className="form-control my-2"
                type="email"
                name="email"
                id="email"
                placeholder="Enter Your Email"
              />
               
              <input
       
                className="form-control my-2"
                type="password"
                name="password"
                id="password"
                placeholder="Enter Your Password"
              />
          
              <input
          
                className="form-control my-2"
                type="number"
                name="age"
                id="age"
                placeholder="Enter Your Age"
              />
            
              <input
             
                className="form-control my-2"
                type="text"
                name="phone"
                id="phone"
                placeholder="Enter Your Phone Number"
              />
              
              <button
                type="submit"
                className="btn btn-info text-dark w-100 rounded-2 m-2"
              >
                Create Account
              </button>
            </form>
            <p>Already Have Account ? <Link to={'/login'} className=' text-decoration-none'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
