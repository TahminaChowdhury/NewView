import React, { useRef } from 'react';
import { Alert, Container } from 'react-bootstrap';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { useState } from 'react';
import img from '../../images/chinese-asian-reception-team-hotel-front-desk-luxury-welcoming-guests-typical-gesture-sign-good-service-37384865.jpg';

const Contact = () => {
  const [submit, setSubmit] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_3jkfgwq',
        'template_l8n3a0w',
        form.current,
        'user_5F8SRjK97Ss1hUmuX4KMz'
      )
      .then(
        (result) => {
          setSubmit(true);
        },
        (error) => {}
      );
    e.target.reset();
  };

  return (
    <div>
      <div className="bg">
        <Container>
          <h2 className="title">Contact</h2>
        </Container>
      </div>
      <Container>
        <div className="row contact-form-container my-5">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className="contact-form-img">
              <img src={img} className="img-fluid" alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6">
            {submit && (
              <Alert variant="secondary">Message sent successfully</Alert>
            )}
            <div className="contact-form">
              <h1>Get in touch</h1>
              <p className="py-3">
                Please complete the form below we will contact with you shortly.
              </p>
            </div>

            <div>
              <form
                ref={form}
                onSubmit={sendEmail}
                className="contact-input-field"
              >
                <div className="row">
                  <div className="col-12 mb-3">
                    <div>
                      <input
                        type="text"
                        name="user_name"
                        placeholder="Your name"
                        required
                        className=" pb-4"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div>
                      <input
                        type="email"
                        name="user_email"
                        placeholder="Your email"
                        required
                        className="py-4"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div>
                      <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        required
                        className="py-4"
                      />
                    </div>
                  </div>
                  <div className="col-12 mb-3">
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your message"
                        required
                        className="py-4"
                      />
                    </div>
                  </div>

                  <div className="col-12 submit-input">
                    <input
                      type="submit"
                      value="SUBMIT"
                      className="mt-5 px-3 py-2"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
