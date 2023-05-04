import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import {AiFillHeart} from 'react-icons/ai';
import {GiBowlOfRice} from 'react-icons/gi';
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

    console.log(allRecipes);

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
            <div className='my-20 mx-2 md:mx-0'> 
            <h2 className="text-center flex justify-center items-center mb-20"> <GiBowlOfRice className="inline text-5xl color-red" /> <span className="font-bold  md:text-3xl"> Top Recipes</span></h2>
             
             <div className='mt-10 grid md:grid-cols-3'>
              <div className=' shadow-xl md:shadow-2xl rounded-md'>
                <div>
                <img src='https://i.ibb.co/RN7HRQG/rec1.jpg' alt="" />
                </div>

                <div className='ps-2 pb-3'>
                    <h4 className='text-2xl mt-4 mb-2 text-bold'>recipe name</h4>
                    <p className='border-b-4 border-orange-500 mb-2 inline-block text-lg font-bold'>Ingredients:</p>
                    <p>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                        <span className='ingredients-style'> ingredients</span>
                    </p>
                    <p className='py-2'><span className='font-bold'>Cooking Method:</span> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi, est qui! Tempora nesciunt, sapiente dignissimos vero consequuntur nam quisquam! Sint qui commodi nostrum vel eos!</p>

                    <div className='flex items-center justify-between mx-2 py-2 pe-2'> 
                     <div>Rating: 5</div>
                     <div>Add to favourite</div>
                    </div>

                </div>

              </div>

             </div>
            </div>
        </div>
    );
};

export default ChefDetails;