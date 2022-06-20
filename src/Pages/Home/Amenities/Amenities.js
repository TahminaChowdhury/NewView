import React from 'react';
import './Amenities.css';
import Slide from 'react-reveal/Slide';
import img1 from '../../../images/breakfast.jpg';
import img2 from '../../../images/cooking.webp';
import img3 from '../../../images/noun_Fitness_2071916 (1).png';
import img4 from '../../../images/noun_spa-sauna-service_2701942.png';
import img5 from '../../../images/noun_Pool_4017800.png';
import img6 from '../../../images/noun_Garden_4113167.png';
import img7 from '../../../images/noun_spa_2242167.png';
import img8 from '../../../images/noun_City_4117559.png';

const Amenities = () => {
  return (
    <div className="amenities-container my-5">
      <div className="row mx-5">
        <div className="col-sm-12 col-md-6">
          <div className="py-5">
            <h1>The Grand Amenities</h1>
            <div className="img-container my-5">
              <div className="breakfast-img">
                <img src={img1} className="img-fluid" alt="" />
              </div>
              <div className="cooking-img mt-4">
                <Slide bottom>
                <img src={img2} className="img-fluid" alt="" />
                </Slide>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6">
          {/* Amenities description */}
          <div className="amineties-description text-start">
            <p>
              List out the defining qualities of your property and make sure
              your amenities align with them. This will ensure the guests you
              want to attract will be more likely to book and provide positive
              reviews. At the end of the day, you want to give your guests the
              perfect experience, and that begins with winning the right ones
              over.
            </p>
            <p>
              There may be nothing wrong with anything you do, but will a family
              care about heated bathroom floors if there are no parenting
              facilities? Setting expectations and marketing effectively is a
              crucial first step to your hotel amenities being a successful
              feature of your property.
            </p>
          </div>
        
            <div className="row my-5 text-center amenities-images">
                <div className="col-4"><img src={img3} className="img-fluid" alt="" /></div>
                <div className="col-4"><img src={img4} className="img-fluid" alt="" /></div>
                <div className="col-4"><img src={img5} className="img-fluid" alt="" /></div>
                <div className="col-4 pt-5"><img src={img6} className="img-fluid" alt="" /></div>
                <div className="col-4 pt-5"><img src={img7} className="img-fluid" alt="" /></div>
                <div className="col-4 pt-5"><img src={img8} className="img-fluid" alt="" /></div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
