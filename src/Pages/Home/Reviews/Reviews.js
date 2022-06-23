import React from 'react';
import './Review.css';
import img from '../../../images/27865707f3225d1ab445181dc549d82c.jpg';

const Reviews = () => {
  return (
    <div className="m-5 py-5 row text-center">
        <h1 className='mb-5'>GUEST FEEDBACK</h1>
      <div className="col-sm-12 col-md-4">
        <div className="review-section">
          <div>
            <img src={img} className="img-fluid" alt="" />
            <p className='pt-4'>*****</p>
            <p className="pb-3">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              dicta similique, quibusdam veritatis fuga expedita ab earum.
            </p>
            <h5 className="review-name">Tahmina Chowdhury</h5>
            <h6>Bangladesh</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
