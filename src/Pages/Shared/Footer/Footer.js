import React from 'react';
import './Footer.css';


const Footer = () => {
  return (
    <>
      <footer>
        <div className="footer-container mx-5">
          <div className="row d-flex justify-content-between pt-5  ">
            <div className="col-sm-12 col-md-4 col-lg-4">
              <div className=" text-start">
                <h4 className="mb-4">About Us</h4>
                <p>
                  Welcome to The New Viiew, where comfort is everything.
                  Beautiful room presentations, straightforward booking &
                  reservation options, & a whole lot more awaits here.
                </p>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3 contact-details">
              <div className="text-start">
                <h5 className="mb-4">Contact</h5>
                <p>Email: thenewview@gmail.com</p>
                <p>Phone: 01755-555-80</p>
                <p>Address: Dhaka, Bangladesh</p>
              </div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-3">
              <div>
                <h5 className="mb-4 text-start">Get Social</h5>
                <p>
                  Follow us on social media and keep in touch with The New View
                </p>
                <span>
                  <i class="fab fa-facebook facebook-icon"></i>
                </span>
                <span>
                  <i class="fab fa-instagram social-icon"></i>
                </span>
                <span>
                  <i class="fab fa-twitter social-icon"></i>
                </span>
                <span>
                  <i class="fab fa-youtube social-icon"></i>
                </span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="text-center py-5">
                <hr />
                <br />
                <small className="text-white pt-3">
                  © The New View 2022. All Rights Reserved
                </small>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
