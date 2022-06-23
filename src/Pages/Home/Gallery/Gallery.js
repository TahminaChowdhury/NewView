import React from 'react';
import './Gallery.css';
import img1 from '../../../images/umbrella-deck-chair-around-outdoor-swimming-pool-hotel-resort-nearly-sea-beach-ocean_74190-14080.jpg';
import img2 from '../../../images/croissant-boiled-egg-orange-juice-yogurt-breakfast-tray-bed-hotel-room_176474-2601.webp';
import img3 from '../../../images/spa.webp';
import img4 from '../../../images/lobby-living-room-hotel_1150-11124.jpg';

const Gallery = () => {
  return (
    <div>
      <div className="row gallery gx-0">
        <div className="col-sm-12 col-md-3">
          <img src={img1} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-12 col-md-3">
          <img src={img2} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-12 col-md-3">
          <img src={img3} className="img-fluid" alt="" />
        </div>
        <div className="col-sm-12 col-md-3">
          <img src={img4} className="img-fluid" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
