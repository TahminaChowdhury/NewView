import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css'

const Signup = () => {
    return (
        <div className='form-container'>
            <div className='row'>
                <div className='col-12 d-flex justify-content-center'>
                    <div className='form-content'>
                        <div className='form-items mx-5'>
                            <div>
                                <h3 className='text-center'>Sign Up</h3>
                            </div>
                            <form>
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
                                <button className='signIn-btn px-3 py-2 rounded-pill mt-4'>Sign Up</button>
                            </form>
                        </div>
                        <p className='text-center mt-4'>Or Sign Up Using</p>
                        <div className='mt-3 mx-5 d-flex justify-content-center'>

                            <div className='mb-3'>
                                <button className='regular-btn px-3 py-2 rounded-pill '></button>

                            </div>
                            <div>
                                <button className='regular-btn px-3 py-2 rounded-pill'></button>
                            </div>
                        </div>
                        <div className='mx-5 px-4'>
                            <span>Already have an account?</span>
                            <span><Link to="/login">Login</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;