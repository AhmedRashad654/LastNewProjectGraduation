import React from 'react'
import phone1 from '../../Assets/phone1.png'
import './Login.css'
import { Link } from 'react-router-dom'

export default function Login() {
  return (
    <div className="row m-5">
    <div className="col-lg-5 d-none d-lg-flex justify-content-center align-items-center ">
      <img className="phone2 w-100" src={phone1} alt="" />
    </div>

    <div className="col-lg-7">
      <div className="d-flex justify-content-center align-items-center text-center signup-container">
        <div className="bg-light bg-opacity-25 shadow w-100 mx-auto rounded-2 login">
          <h1 className="fw-bold">Login Now</h1>
          <div className="pt-3">
            <form >
             
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
               <button className=' border-0 bg-transparent text-danger mt-2'>Forget Password?</button>
         
              <button
                type="submit"
                className="btn btn-info text-dark w-100 rounded-2 m-2"
              >
                Login
              </button>
              
            </form>
            <p>Don't Have Account ? <Link to={'/register'} className=' text-decoration-none'>Register</Link> </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
