import React from "react";
import Slider from "../../components/Slider/Slider";
import {GiCook} from "react-icons/gi";
import {BsArrowRight} from "react-icons/bs";
import {AiFillHeart} from "react-icons/ai";


const Home = () => {
  return (
    <div>
      {/*------------Top Banner---------- */}
      <Slider> </Slider>

      {/* --------Chefs Cards ----------*/}

      <div className="container mx-auto my-32">
        <h2 className="text-center mb-20"> <GiCook className="inline text-2xl" /> <span> Find Your Chef</span></h2>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/q0g3Z7X/chef4.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Name: Korim</h3>
              <p> + Years of experience</p>
              <p> Total Recipes:</p>
              <p><AiFillHeart className="inline" /> Likes</p>
              <div className="card-actions justify-end">
                <button className="btn  orange-bg border-0 normal-case rounded-none ">View Recipes <BsArrowRight></BsArrowRight> </button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
