import React from 'react';
import {BsArrowRight} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";
const ChefCard = ({chefData}) => {
    const {name, picture, likes, experience, bio, recipes} = chefData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            src={picture}
            className='w-60'
            alt="Chef image"
          />
        </figure>
        <div className="card-body">
          <h3 className="card-title">Name: {name}</h3>
          <p>{experience} + Years of experience</p>
          <p> Total Recipes: {recipes}</p>
          <p><AiFillHeart className="inline" />{likes} Likes</p>
          <div className="card-actions justify-end">
            <button className="btn  orange-bg border-0 normal-case rounded-none ">View Recipes <BsArrowRight></BsArrowRight> </button>
          </div>
        </div>
      </div>
    );
};

export default ChefCard;