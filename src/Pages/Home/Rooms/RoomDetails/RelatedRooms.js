import React from 'react';
import './RelatedRooms.css'

const RelatedRooms = ({ roomsData }) => {
    const { img, name, size, price, accomodation } = roomsData;
    return (
        <div className='col-sm-12 col-md-4 col-lg-4'>
            <div>
                <div className='rooms-img'>
                    <img src={img} className='img-fluid' alt="" />
                    <div>
                    <button className='bookNow-btn px-3 py-3'>BOOK NOW</button>
                </div>
                </div>
                <div className='d-flex justify-content-between mt-4'>
                    <h4>{name}</h4>
                    <h3 className='price'>$ {price}</h3>
                </div>
                <div>
                    <p>{size}m2 / {accomodation}</p>
                </div>
            </div>
        </div>

    );
};

export default RelatedRooms;