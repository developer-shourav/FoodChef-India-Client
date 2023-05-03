import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider/Slider";
import {GiCook} from "react-icons/gi";
import ChefCard from "../../components/ChefCard/ChefCard";



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

      <div className="container mx-auto my-32">
        <h2 className="text-center mb-20"> <GiCook className="inline text-2xl" /> <span> Find Your Chef</span></h2>
        <div>
         <div className="grid grid-cols-2 lg:grid-cols-3">

          {
             allChefs?.map( chefData => <ChefCard
              key={chefData?.id}
              chefData={chefData}
             > </ChefCard>)
          }

         </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
