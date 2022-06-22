import React from 'react';
import './AboutUs.css';
import img1 from '../../../images/modern-bedroom-mockup-with-decorative-elements_176382-1984.jpg';
import img2 from '../../../images/h1-room-img-02.jpg';
import Slide from 'react-reveal/Slide';
import CountUp from 'react-countup';

const AboutUs = () => {
  return (
    <div className="mx-5 about-container">
      <div className="row">
        <div className="col-sm-12 col-md-6">
          <div className="text-start pe-5">
            <div className="d-flex align-items-center mb-5">
              <span className="divider "></span>
              <h1 className="ps-4 fw-bold">Our History</h1>
            </div>
            <p>
              List out the defining qualities of your property and make sure
              your amenities align with them. This will ensure the guests you
              want to attract will be more likely to book and provide positive
              reviews. At the end of the day, you want to give your guests the
              perfect experience, and that begins with winning the right ones
              over.
              <p className="mt-5">
                There may be nothing wrong with anything you do, but will a
                family care about heated bathroom floors if there are no
                parenting facilities? Setting expectations and marketing
                effectively is a crucial first step to your hotel amenities
                being a successful feature of your property.
              </p>
            </p>
            <div className="row my-5 text-center">
              <div className="col-sm-4 col-md-4">
                <div>
                  <CountUp className="countup" end={80} />
                  <h6 className="fw-bold">HOTEL ROOMS</h6>
                </div>
              </div>
              <div className="col-sm-4 col-md-4">
                <CountUp className="countup" end={15} />
                <h6 className="fw-bold">ACTIVITIES</h6>
              </div>
              <div className="col-sm-4 col-md-4">
                <CountUp className="countup" end={5} />
                <h6 className="fw-bold">RESTAURANTS</h6>
              </div>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-6">
          <div className="about-section-img">
            <div className="bedroom-img">
              <Slide right>
                <img src={img1} className="img-fluid" alt="" />
              </Slide>
            </div>
            <div className="modern-bedroom-img">
              <Slide bottom>
                <img src={img2} className="img-fluid" alt="" />
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
