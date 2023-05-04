import React from 'react';
import Gallery1 from "../../assets/gallery-img/Gallery-Biryani.jpeg"
import Gallery2 from "../../assets/gallery-img/Gallery-Scoops.jpeg"
import Gallery3 from "../../assets/gallery-img/Gallery-Soup.jpeg"
import Gallery4 from "../../assets/gallery-img/Home-Biryani.jpeg"
import Gallery5 from "../../assets/gallery-img/Home-Breakfast.jpeg"
import Gallery6 from "../../assets/gallery-img/Home-Starter.jpeg"
const FoodGallery = () => {
    return (
        <div className="container   mx-auto my-32">
        <h2 className="text-center flex justify-center items-center mb-20"> <span className="font-bold text-2xl md:text-3xl"> Our Food Gallery </span></h2>
        <div>
         <div className="grid mx-5 lg:mx-auto grid-cols-2 md:grid-cols-3 gap-1">

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery6} alt="" />
         </div>

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery2} alt="" />
         </div>

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery3} alt="" />
         </div>

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery4} alt="" />
         </div>

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery5} alt="" />
         </div>

         <div className="overflow-hidden">
          <img className="hover:scale-125 duration-700" src={Gallery1} alt="" />
         </div>


         </div>
          
        </div>
      </div>
    );
};

export default FoodGallery;