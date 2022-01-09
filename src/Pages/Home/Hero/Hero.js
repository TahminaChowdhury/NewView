import React from 'react';
import './Hero.css'
import { useForm } from "react-hook-form";

const Hero = () => {
    // const { register, handleSubmit, watch, formState: { errors } } = useForm();
    // const onSubmit = data => console.log(data);
    return (
        <div className='hero-section '>
           {/* <div className='row booking-form text-center'>
           <div className='col-sm-6 col-md-3 col-lg-3'>
            <input {...register("exampleRequired", { required: true })} />
            </div>
            <div className='col-sm-6 col-md-3 col-lg-3'>
            <input {...register("exampleRequired", { required: true })} />
            </div>
            <div className='col-sm-6 col-md-3 col-lg-3'>
            <input {...register("exampleRequired", { required: true })} />
            </div>
            <div className='col-sm-6 col-md-3 col-lg-3'>
            <input {...register("exampleRequired", { required: true })} />
            </div>
           </div> */}
        </div>
    );
};

export default Hero;



