import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css';

const Login = () => {
  const {
    user,
    loginWithGoogle,
    loginWithFacebook,
    loginWithEmailAndPassword,
    error,
  } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const handleLoginWithGoogle = () => {
    loginWithGoogle(location, navigate);
  };
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    loginWithEmailAndPassword(data.email, data.password, location, navigate);
  };
  return (
    <div className="form-container">
      <div className="row">
        <div className="col-12 d-flex justify-content-center align-items-center">
          <div className="form-content">
            <div className="form-items mx-5">
              <div>
                <h3 className="text-center">Login</h3>
              </div>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-email-input mt-3">
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
                <div className="form-password-input">
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder=" "
                    {...register('password')}
                    className="form-input"
                  />
                  <label htmlFor="email" className="form-label">
                    Password
                  </label>
                </div>
                <div className="mt-3">
                  <p>Forgot password?</p>
                  <p className='text-success'>{error}</p>
                </div>
                <button className="signIn-btn px-3 py-2 rounded-pill mt-4" onClick={loginWithEmailAndPassword}>
                  Login
                </button>
              </form>
            </div>
            <p className="text-center mt-4">Or Login Using</p>
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
              <span>Don't have an account?</span>
              <span>
                <Link to="/signup">Sign Up</Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
