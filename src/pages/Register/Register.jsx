import React from 'react';
import { BsPersonFillAdd, BsGithub } from "react-icons/bs";
import {FaFacebookF} from 'react-icons/fa';
import RegisterImg from "../../assets/svg/register.svg";
import { AiOutlineUserAdd } from "react-icons/ai";
import { Link } from 'react-router-dom';
import GoogleImg from '../../assets/icons/google.png';
const Register = () => {
    return (
        <div className='container mx-auto '>
        <div className="w-11/12 mx-auto">
 <h2 className="text-3xl font-bold text-center mt-10 mb-5">
   {" "}
   <AiOutlineUserAdd className="text-red-600 text-5xl md:text-4xl lg:text-6xl inline" /> Please Register
 </h2>
 <div className="flex flex-col md:flex-row lg:gap-16 justify-between  md:items-start">
   <div className="md:w-full">
     <img className="w-full" src={RegisterImg} alt="" />
   </div>

   <div className="md:w-10/12">
   <div className="card flex-shrink-0 w-full rounded-lg  shadow-stone-400 shadow-md  bg-base-100">
 <div className="card-body p-5">
   <div className="form-control">
     <label className="label">
       <span className="label-text">Your Name</span>
     </label>
     <input type="text" placeholder="Your Name" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Image URL</span>
     </label>
     <input type="text" placeholder="Image URL" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Email</span>
     </label>
     <input type="email" placeholder="email" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Password</span>
     </label>
     <input type="password" placeholder="Password" className="input input-bordered" required />
   </div>

   <div className="form-control">
     <label className="label">
       <span className="label-text">Confirm Password</span>
     </label>
     <input type="password" placeholder="Confirm password" className="input input-bordered" required />
     <label className="label">
       <small>Already Registered? <Link to="/login" className='text-violet-600 font-bold underline'> Please Login</Link></small>
     </label>
   </div>
   <div className="form-control mt-6">
     <button  style={{ background: "red" }}
         className="btn rounded border-0 shadow-red-500 shadow-md"> <BsPersonFillAdd className='me-1 text-xl'/> Register </button>
   </div>
   <div className='flex justify-center items-center mt-2'> 
     <hr className='inline-block w-full border-1 border-red-400' /> <span className='mx-3 font-bold'> Or </span> <hr className='inline-block border-1 w-full border-red-400' />
   </div>

   <button className='btn normal-case bg-white mb-1   text-black rounded hover:bg-slate-200 google-btn-shadow border-0'> <img className='w-6 me-2' src={GoogleImg} alt="" /> Register with Google</button>

   <button className='btn normal-case text-white mb-1   bg-black rounded  shadow-sm border-0'> <BsGithub className=' text-2xl me-2'  /> Register with GitHub</button>

   <button className='btn normal-case bg-blue-600 mb-1  text-white rounded hover:bg-blue-500  shadow-sm border-0'> <FaFacebookF className=' text-2xl me-1'  /> Register with Facebook</button>

 </div>
</div>
   </div>
 </div>
</div>
   </div>
    );
};

export default Register;