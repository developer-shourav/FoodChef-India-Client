import React from 'react';
import ErrorImg from '../../assets/error-img/error.jpg'
import { Link } from 'react-router-dom';
import {BsArrowLeft} from 'react-icons/bs'
const ErrorPage = () => {
    return (
        /* -----------Primary Error page---------------- */
        <div className='container mx-auto'>
            <img className='mx-auto w-9/12 md:w-6/12' src={ErrorImg} alt="" />
            <Link to='/home' className='flex justify-center mt-5'> <button className='btn bg-red-600 hover:bg-red-800 border-red-600 rounded-none'><BsArrowLeft className='text-2xl me-2'></BsArrowLeft> Return Home</button></Link>
        </div>
    );
};

export default ErrorPage;