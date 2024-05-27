import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css';

export default function NotFound() {
  return (
    <div className='d-flex justify-content-center align-items-center notFound'>
      <div>
      <h1 className='not-found'>404 Not Found</h1>
      <p className='page-not-found'>Your visited page not found. You may go home page.</p>
      <Link t={"/home"}><button className='btn btn-danger w-50 mt-5 back-home-page'>Back to Home Page</button></Link> 
      </div>
    </div>
  )
}
