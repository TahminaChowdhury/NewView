import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Login.css'


const Login = () => {
    const { user, loginWithGoogle, loginWithFacebook, loginWithEmailAndPassword, error } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle(location, navigate)
    };
    const { handleSubmit } = useForm();

    const onSubmit = data => {
        loginWithEmailAndPassword(data.email, data.password, location, navigate)
        console.log(data)
    };
    return (
        <div className='form-container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='form-content'>
                        <div className='form-items mx-5'>
                            <div>
                                <h3 className='text-center'>Login</h3>
                            </div>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className='mt-3'>
                                    <p>
                                        <label>
                                            Email
                                            <br />
                                            <span>
                                                <input type="text" />
                                            </span>
                                        </label>
                                    </p>
                                    <p>
                                        <label>
                                            Password
                                            <br />
                                            <span>
                                                <input type="text" />
                                            </span>
                                        </label>
                                    </p>
                                    <p>Forgot password?</p>
                                </div>
                                <button className='signIn-btn px-3 py-2 rounded-pill mt-4'>Login</button>
                            </form>
                        </div>
                        <p className='text-center mt-4'>Or Login Using</p>
                        <div className='mt-3 mx-5 d-flex justify-content-center'>

                            <div className='mb-3'>
                                <button className='regular-btn px-3 py-2 rounded-pill '></button>

                            </div>
                            <div>
                                <button className='regular-btn px-3 py-2 rounded-pill'></button>
                            </div>
                        </div>
                        <div className='mx-5 px-4'>
                            <span>Don't have an account?</span>
                            <span><Link to="/signup">Sign Up</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

