import React from 'react';
import './NewsLetter.css';
import { HiOutlineMailOpen } from 'react-icons/hi';

const NewLetter = () => {
  return (
    <div className="newsletter-container">
      <div className="row mx-5 newsletter">
        <div className="col-sm-12 col-md-6 text-center">
          <div>
            <h1>
              <HiOutlineMailOpen/> Join Our Weekly NewsLetter
            </h1>
          </div>
        </div>
        <div className="col-sm-12 col-md-3 text-center">
          <div>
            <input
              type="email"
              name="email"
              placeholder="Email address"
              id=""
            />
          </div>
        </div>
        <div className="col-sm-12 col-md-3 text-center">
          <div className='btn-wrapper'>
            <button className="regular-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
