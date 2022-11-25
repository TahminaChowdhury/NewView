import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './SignUp.css';

const SignUp = () => {
  const {
    loginWithGoogle,
    loginWithFacebook,
    signupWithEmailAndPassword,
    error,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    if (data.password !== data.confirmPassword) {
      return;
    } else {
      signupWithEmailAndPassword(
        data.displayName,
        data.email,
        data.password,
        navigate,
        location,
      );
    }
  };
  return (
    <div className="form-container py-5">
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <div className="signup-form-content">
            <div className="form-items mx-5">
              <div>
                <h3 className="text-center">Sign Up</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-email-input mt-3 mb-5">
                  <input
                    type="text"
                    name="displayName"
                    id="displayName"
                    placeholder=" "
                    {...register('displayName')}
                    className="form-input"
                  />
                  <label htmlFor="displayName" className="form-label">
                    Full Name
                  </label>
                </div>
                <div className="form-email-input mt-3 mb-5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder=" "
                    {...register('email')}
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                </div>
                <div className="form-password-input mb-5">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    {...register('password')}
                    className="form-input"
                  />
                  <label htmlFor="Password" className="form-label">
                    Password
                  </label>
                </div>
                <div className="form-password-input">
                  <input
                    type="password"
                    name="confirmPassword"
                    id="re-password"
                    placeholder=" "
                    {...register('confirmPassword')}
                    className="form-input"
                  />
                  <label htmlFor="password" className="form-label">
                    Confirm Password
                  </label>
                </div>
                <div className="mt-4">
                  <p>Forgot password?</p>
                  <p className="text-success">{error}</p>
                </div>
                <button
                  className="signIn-btn px-3 py-2 rounded-pill mt-4"
                  onClick={signupWithEmailAndPassword}
                >
                  Sign Up
                </button>
              </form>
            </div>
            <p className="text-center mt-4">Or Sign Up Using</p>
            <div className="mb-3 social-btns-div">
              <button onClick={handleLoginWithGoogle} className="social-btn">
                <img
                  src="https://i.ibb.co/x12WGhg/Google-G-Logo-svg.png"
                  alt=""
                />
              </button>

              <button className="social-btn mx-3" onClick={loginWithFacebook}>
                <img
                  src="https://i.ibb.co/Bscw6vG/Facebook-f-logo-2021-svg.png"
                  alt=""
                />
              </button>
              <button className="social-btn">
                <img
                  src="https://i.ibb.co/ZhpcKCF/1200px-Twitter-bird-logo-2012-svg.png"
                  alt=""
                />
              </button>
            </div>
            <div className="mx-5 px-4">
              <span>Already have an account?</span>
              <span>
                <Link to="/login">Login</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
