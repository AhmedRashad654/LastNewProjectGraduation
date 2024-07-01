import React from 'react'
import { IoMdStar } from "react-icons/io";

function Rate() {
  return (
    <div className='mt-7'>
        <h5>Rate</h5>
        <div className="form-check p-1 flex flex-row items-center mt-4">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label flex" htmlFor="exampleRadios1">
            <IoMdStar size={25} fill="#ffc908" />
          </label>
        </div>  
        <div className="form-check p-1 flex flex-row items-center">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios2"
            value="option2"
            defaultChecked
          />
          <label className="form-check-label flex" htmlFor="exampleRadios2">
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
          </label>
        </div>
        <div className="form-check p-1 flex flex-row items-center">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios3"
            value="option3"
            defaultChecked
          />
          <label className="form-check-label flex" htmlFor="exampleRadios3">
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar  size={25}fill="#ffc908" />
          </label>
        </div>
        <div className="form-check p-1 flex flex-row items-center">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios4"
            value="option4"
            defaultChecked
          />
          <label className="form-check-label flex" htmlFor="exampleRadios4">
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar  size={25}fill="#ffc908" />
            <IoMdStar  size={25}fill="#ffc908" />
          </label>
        </div>
        <div className="form-check p-1 flex flex-row items-center">
          <input
            className="form-check-input"
            type="checkbox"
            name="exampleRadios"
            id="exampleRadios5"
            value="option5"
            defaultChecked
          />
          <label className="form-check-label flex" htmlFor="exampleRadios5">
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
            <IoMdStar  size={25}fill="#ffc908" />
            <IoMdStar size={25} fill="#ffc908" />
          </label>
        </div>
    </div>
  );
}

export default Rate;
