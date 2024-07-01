import React from 'react';
import Rate from './Rate';

function Sidebar() {
  return (
    <div  style={{width:"30%"}}>
      <div >
        <h5 className='mt-10'>Price</h5>
        <div className="form-check p-1 mt-4">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
          All
          </label>
          
        </div>
        <div className="form-check p-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
          5000 L.E -10000 L.E
          </label>
          
        </div>
        <div className="form-check p-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
         10000 L.E - 15000 L.E
          </label>
          
        </div>
        <div className="form-check p-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
         15000 L.E - 20000 L.E
          </label>
          
          
        </div>
        <div className="form-check p-1">
          <input
            className="form-check-input"
            type="radio"
            name="exampleRadios"
            id="exampleRadios1"
            value="option1"
            defaultChecked
          />
          <label className="form-check-label" htmlFor="exampleRadios1">
         20000 L.E - 25000 L.E
          </label>
          
          
        </div>
      </div>
     <div>
   <Rate/>
     </div>
    </div>
  );
}

export default Sidebar;
