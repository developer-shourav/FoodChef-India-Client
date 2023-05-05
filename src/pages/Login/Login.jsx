import React, { useContext } from 'react';
import { BsKeyFill, BsGithub } from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa';
import LoginImg from "../../assets/svg/login.svg";
import { RiShieldKeyholeFill } from "react-icons/ri";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import GoogleImg from '../../assets/icons/google.png';
import { AuthContext } from '../../providers/AuthProviders';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';

const Login = () => {
  
  /* -----Toast For Showing Facebook login Error message---------- */
  const notify = () => toast.error("Sorry 😓, Facebook login isn't working. Please try others");

const {signInUserWithEmail, loginRegisterWithGoogle, loginRegisterWithGitHub} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectLocation = location.state?.from?.pathname || '/home';

  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailPassSignIn = event => {

    /*----- Reset Error Massage field------- */
    setErrorMessage('')

    /* ------ Handle default page reload on form submit-------- */
    event.preventDefault();
    /* ------- Data Collection from The Data FORM element-------------- */
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

  /* ------- Email password Login System Code-------------- */
    signInUserWithEmail(email, password)
    .then( result => {
      const loggedInUser = result.user;
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorMessage(error.message.slice(10))
    })
  }
/* ------- Google Login System Code-------------- */
  const handleGoogleLogin = () => {
    setErrorMessage('')
    loginRegisterWithGoogle()
    .then( result => {
      const loggedInUser = result.user;
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorMessage(error.message.slice(10))
    })
  }

/* ------- GitHub Login System Code-------------- */
  const handleGitHubLogin = () => {
    setErrorMessage('')
    loginRegisterWithGitHub()
    .then( result => {
      const loggedInUser = result.user;
      navigate(redirectLocation)
      
    })
    .catch( error =>{
      setErrorMessage(error.message.slice(10))
    })
  }

    return (
        <div className='container  mx-auto'>
             <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-bold text-center mt-10">
        {" "}
        <RiShieldKeyholeFill className="text-red-600 text-5xl md:text-4xl lg:text-6xl inline" /> Please Login
      </h2>
      <div className="flex flex-col md:flex-row justify-between  items-center">
        <div className="md:w-full">
          <img className="w-full" src={LoginImg} alt="" />
        </div>

        <div className="md:w-10/12">
        <div className="card flex-shrink-0 w-full rounded-lg max-w-sm shadow-stone-400 shadow-md  bg-base-100">
      <form onSubmit={handleEmailPassSignIn} className="card-body p-5">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' required className="input input-bordered" />
          <label className="label">
            <small>New to FoodChef India? <Link to="/register" state={{from :location?.state?.from}} className='text-violet-600 font-bold underline'> Register</Link></small>
          </label>
        </div>

        {/* --------Error Message section -------- */}
        <p className='text-red-500 font-semibold'>{errorMessage}</p>
        <div className="form-control mt-6">
          <button  style={{ background: "red" }}
              className="btn rounded border-0 shadow-red-500 shadow-md"> <BsKeyFill className='me-1 text-xl'/> Login </button>
        </div>
        <div className='flex justify-center items-center mt-2'> 
          <hr className='inline-block w-full border-1 border-red-400' /> <span className='mx-3 font-bold'> Or </span> <hr className='inline-block border-1 w-full border-red-400' />
        </div>

        <button onClick={handleGoogleLogin} className='btn normal-case bg-white mb-1   text-black rounded hover:bg-slate-200 google-btn-shadow border-0'> <img className='w-6 me-2' src={GoogleImg} alt="" /> Login with Google</button>

        <button onClick={handleGitHubLogin} className='btn normal-case text-white mb-1   bg-black rounded  shadow-sm border-0'> <BsGithub className=' text-2xl me-2'  /> Login with GitHub</button>

        <button onClick={notify} className='btn normal-case bg-blue-600 mb-1  text-white rounded hover:bg-blue-500  shadow-sm border-0'> <FaFacebookF className=' text-2xl me-1'  /> Login with Facebook</button>
        <ToastContainer theme="dark" />

      </form>
    </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default Login;
