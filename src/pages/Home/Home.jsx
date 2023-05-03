import React from "react";
import Slider from "../../components/Slider/Slider";


const Home = () => {
  return (
    <div>
      {/*------------Top Banner---------- */}
      <Slider> </Slider>

      {/* --------Chefs Cards ----------*/}

      <div className="container mx-auto">
        <h2>Find Your Chef</h2>
        <div>
          <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://i.ibb.co/q0g3Z7X/chef4.png"
                alt="Shoes"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Shoes!</h2>
              <p>If a dog chews shoes whose shoes does he choose?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
