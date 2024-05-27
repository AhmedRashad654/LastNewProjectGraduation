import React from 'react'

export default function EditProfile() {
  return (
    <form>
    <div className='row bg-light bg-opacity-25 shadow w-100 p-5 rounded-2 mt-5 mb-5'>
      <p className=' text-danger fw-bolder fs-4'>Edit your Profile</p>
      <div className='col-md-6'>
      <div className='edit-profile1 '>
        <label htmlFor='first-name'>First Name</label>
        <input id='first-name' name='first-name' placeholder='Enter your first name' className='form-control'/>
       </div>
      </div>

      <div className='col-md-6'>
      <div className='edit-profile1 '>
        <label htmlFor='Last-name'>Last Name</label>
        <input id='Last-name' name='Last-name' placeholder='Enter your last name' className='form-control'/>
       </div>
      </div>


      <div className='col-md-6 mt-4'>
      <div className='edit-profile1 '>
        <label htmlFor='email'>Email</label>
        <input id='email' name='email' placeholder='Enter your email' className='form-control'/>
       </div>
      </div>

      <div className='col-md-6 mt-4'>
      <div className='edit-profile1 '>
        <label htmlFor='address'>Address</label>
        <input id='address' name='address' placeholder='Enter your address' className='form-control'/>
       </div>
      </div>

      <div className='mt-4'>
      <label htmlFor='password-changes' >Password Changes</label>
        <input id='password-changes' name='password-changes' placeholder='current password' className='form-control mt-2'/>
        <input id='password-changes' name='password-changes' placeholder='new password' className='form-control mt-2'/>
        <input id='password-changes' name='password-changes' placeholder='confirm new password' className='form-control mt-2'/>
      </div>

      <div className='mt-4'>
        <button className='btn btn-info text-dark me-0'>Save Changes</button>
        <button className='btn btn-outline-danger text-black ms-2'>Cancel</button>
      </div>
      
    </div>
    </form>
  )
}
