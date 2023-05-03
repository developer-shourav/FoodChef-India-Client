import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import {GiCook} from "react-icons/gi";
import ChefCard from "../../components/ChefCard/ChefCard";
import MenuCard from "../../components/MenuCard/MenuCard";
import FoodGallery from "../../components/FoodGallery/FoodGallery";

const Home = () => {

  const [allChefs, setAllChefs] = useState([]);
  useEffect(() => {
    fetch('./chefs.json')
    .then( res => res.json())
    .then( data => setAllChefs(data))
  }, [])

  return (
    <div>
      {/*------------Top Banner---------- */}
      <Slider> </Slider>

      {/* --------Chefs Cards ----------*/}

      <div className="container   mx-auto my-32">
        <h2 className="text-center flex justify-center items-center mb-20"> <GiCook className="inline text-5xl color-red" /> <span className="font-bold text-2xl md:text-3xl"> Find Your Indian Chef</span></h2>
        <div>
         <div className="grid mx-5 lg:mx-auto md:grid-cols-2 gap-6 lg:grid-cols-3">

          {
             allChefs?.map( chefData => <ChefCard
              key={chefData?.id}
              chefData={chefData}
             > </ChefCard>)
          }

         </div>
          
        </div>
      </div>

      {/* --------Menu Section ----------*/}

      <MenuCard> </MenuCard>

      {/* -------- Our Food Gallery Section ----------*/}
      
      <FoodGallery> </FoodGallery>

      
    </div>
  );
};

export default Home;
