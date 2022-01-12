import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row d-flex justify-content-between mt-5 pt-5">
                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className=" text-start">
                            <h4>About Us</h4>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, obcaecati hic dolor soluta exercitationem iure!</p>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div className=" text-start">
                        <h4>Contact</h4>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div>
                        <h4>Payment methods</h4>
                        </div>
                    </div>

                    <div className="col-sm-12 col-md-3 col-lg-3">
                        <div>
                        <h4>Get Social</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="text-center py-5">

                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;