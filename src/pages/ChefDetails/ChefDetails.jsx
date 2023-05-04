import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';

const ChefDetails = () => {
    const [chefInfo , setChefInfo ] = useState([]);

    const {id} = useParams();
    const allRecipes = useLoaderData();

    useEffect( () => {
        fetch('https://food-chef-india-server-developer-shourav.vercel.app/chefs')
        .then( res => res.json())
        .then( data => {
            const specificChef = data.find( chef => chef.id == id );
            setChefInfo(specificChef)
        })
    },[])

  /*   console.log(id);
    console.log(allRecipes);
    console.log(chefInfo); */

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
        </div>
    );
};

export default ChefDetails;