import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
import { Link, NavLink,  } from 'react-router-dom';
const ChefCard = ({chefData}) => {
    const {id, name, picture, likes, experience, recipes} = chefData;

    /* --------Individual Card For Each Chef---------- */
    return (
        <div className="card card-compact bg-base-100 rounded-lg shadow-lg">
        
        <div className='bg-red-100 rounded-lg'>
          <img
            src={picture}
            className='w-1/2 mx-auto md:h-60 drop-shadow-xl '
            alt="Chef image"
          />
        </div>
        <div className="card-body  ">
          <h3 className="text-xl font-semibold ">Name: {name}</h3>
          <p className='text-lg py-0 my-0 '>{experience} + Years of experience</p>
          <p className='text-lg'> Total Recipes: {recipes}</p>
          <p className='text-lg'><AiFillHeart className="inline text-2xl me-2 text-pink-500" />{likes} Likes</p>
          <div className="card-actions justify-end">
            <NavLink 
            className={({ isActive }) =>
            isActive ? "text-red-500 bg-transparent" : ""
          }
            to={`/chefDetails/${id}`} 
            
            > <button className="btn  red-bg hover:bg-red-700 border-0 normal-case rounded ">View Recipes <BsArrowRight className='text-2xl ms-2'></BsArrowRight> </button> </NavLink>
          </div>
        </div>
      </div>
    );
};

export default ChefCard;