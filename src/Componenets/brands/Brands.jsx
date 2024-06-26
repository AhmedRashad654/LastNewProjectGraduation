import React from 'react';
import imgSrc1 from '../../../src/Assets/Lenovo-Logo-PNG-Picture (1).png';
import imgSrc2 from '../../../src/Assets/600da9af516067000439ac9f.png';
import imgSrc3 from '../../../src/Assets/0f7d50fc9ab9c884c563a55c98a77e35.png';
import imgSrc4 from '../../../src/Assets/photo_2024-06-26_13-41-14.png';
import './Brands.css'

function Brands() {
  return (
    <section >
      <div >
        <div className="flex flex-wrap -mx-5 justify-center pt-5">
          <div className="w-full md:w-1/2 lg:w-1/4 px-5 pb-3">
            <div className="icon-box flex mb-6">
              <img src={imgSrc1} alt="Icon" className="pt-5" />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 pb-3">
            <div className="icon-box flex mb-6">
              <img src={imgSrc2} alt="Icon" style={{ width: '60%' }} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 pb-3">
            <div className="icon-box flex mb-6">
              <img src={imgSrc3} alt="Icon" style={{ width: '60%' }} />
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/4 px-4 pb-3">
            <div className="icon-box flex mb-6">
              <img src={imgSrc4} alt="Icon" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Brands;
