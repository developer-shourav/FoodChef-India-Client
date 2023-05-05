import React from 'react';
import {FaClipboardList} from "react-icons/fa";
import Menu1 from '../../assets/menu-img/Gallery-Biryani.jpeg';
import Menu2 from '../../assets/menu-img/Gallery-Bonelesscurry.jpeg';
import Menu3 from '../../assets/menu-img/Gallery-Scoops.jpeg';
import Menu4 from '../../assets/menu-img/Gallry-Grilled.jpeg';
import LazyLoad from 'react-lazy-load';
const MenuCard = () => {
    return (
        <div className="container   mx-auto my-32">
        <h2 className="text-center flex justify-center items-center mb-20"> <FaClipboardList className="inline text-5xl color-red" /> <span className="font-bold  md:text-3xl"> Our Menu</span></h2>
        <div>
          {/* -----------Our Menu Card's Parent Section------------ */}
         <div className="grid mx-5 lg:mx-auto md:grid-cols-4 gap-3 ">

          <div className="p-5  bg-red-200 rounded-tl-3xl rounded-br-3xl">
          <LazyLoad offset={300} threshold={0.95}> 
            <img src={Menu1} alt="" />
          </LazyLoad>
            
            <h3 className="text-center font-bold text-xl mt-3 text-red-700">Biryanis</h3>
          </div>

          <div className="p-5  bg-red-200 rounded-tl-3xl rounded-br-3xl">
          <LazyLoad offset={300} threshold={0.95}> 
            <img src={Menu2} alt="" />
          </LazyLoad>
            <h3 className="text-center font-bold text-xl mt-3 text-red-700">Entrees</h3>
          </div>
          

          <div className="p-5  bg-red-200 rounded-tl-3xl rounded-br-3xl">
          <LazyLoad offset={300} threshold={0.95}> 
            <img src={Menu3} alt="" />
          </LazyLoad>
            <h3 className="text-center font-bold text-xl mt-3 text-red-700">Beverages</h3>
          </div>

          <div className="p-5  bg-red-200 rounded-tl-3xl rounded-br-3xl">
          <LazyLoad offset={300} threshold={0.95}> 
            <img src={Menu4} alt="" />
          </LazyLoad>
            <h3 className="text-center font-bold text-xl mt-3 text-red-700">Appetizers</h3>
          </div>
          

         </div>
          
        </div>
      </div>
    );
};

export default MenuCard;