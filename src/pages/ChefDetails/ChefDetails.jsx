import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import {GiBowlOfRice} from 'react-icons/gi';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProviders';
const ChefDetails = () => {

   const {setChefID} = useContext(AuthContext);
    const [chefInfo , setChefInfo ] = useState([]);

    const {id} = useParams();
    const allRecipes = useLoaderData();
    const {famous_recipes} = allRecipes;

    useEffect( () => {
        fetch('https://food-chef-india-server-developer-shourav.vercel.app/chefs')
        .then( res => res.json())
        .then( data => {
            const specificChef = data.find( chef => chef.id == id );
            setChefInfo(specificChef)
            setChefID(id)
        })
    },[])


     /* --------Chef's Data ------------ */
    const {picture, likes, name, bio, recipes, experience } = chefInfo ;
    return (
        <div className='container mx-auto md:my-10'>
            <div className='flex flex-col md:flex-row mx-5  lg:mx-auto gap-3 lg:gap-6'>
              <div className='bg-red-200 md:w-1/2 rounded-md'>
                <img src={picture} className=' pt-5  mx-auto h-72 md:h-96 drop-shadow-lg' alt="" />
              </div>

              <div className='md:w-1/2'>
                <h2 className='text-3xl mb-3'>Name: {name}</h2>
                <p className='lg:w-10/12 text-lg text-justify mb-5'>{bio}</p>
                <div className='text-gray-700 '>
                <p className='text-xl py-0 my-0  '>Years of experience: {experience}</p>
                <p className='text-xl '> Total Recipes: {recipes}</p>
                 <p className='text-xl '><AiFillHeart className="inline text-2xl me-2 text-pink-500" />Likes: {likes}</p>
                </div>

              </div>
            </div>

            {/* ------Chef Recipe Section ------ */}
            <div className='my-20 mx-2 md:mx-3 lg:mx-0'> 
            <h2 className="text-center flex justify-center items-center mb-20"> <GiBowlOfRice className="inline text-5xl color-red" /> <span className="font-bold  md:text-3xl"> Top Recipes</span></h2>
             
             <div className='mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5'>
             {
                famous_recipes?.map( item => <RecipeCard 
                    
                    key={item?.id}
                    item={item}
                > 

                </RecipeCard> )
             }

             </div>
            </div>
        </div>
    );
};

export default ChefDetails;