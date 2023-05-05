import React, { useState } from 'react';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({item}) => {
    /* -----Toast for Favorite Button----------- */
    const notify = () => toast.success("Successfully add as your favorite");
    const {recipe_name, ingredients, method, rating, recipe_img} = item ;
    const [buttonDisabled, setButtonDisabled] = useState(false)

    const handleClick = () => {
        setButtonDisabled(true)
        notify()
    }
    return (
        /* --------------Chefs Food Recipes Card---------------- */
        <div className=' shadow-xl md:shadow-2xl rounded-md'>
        <div>
        <img src={recipe_img} alt="" />
        </div>

        <div className='ps-2 pb-3'>
            <h4 className='text-2xl mt-4 mb-2 text-bold'>{recipe_name}</h4>
            <p className='border-b-4 border-orange-500 mb-2 inline-block text-lg font-bold'>Ingredients:</p>
            <div>
                {
                    ingredients.map( ingredient => <span key={ingredient} className='ingredients-style'> {ingredient}</span>)
                }
            </div>
            <p className='p-2 text-gray-600'><span className='font-bold text-gray-700'>Cooking Method:</span> {method.length > 290 ? method.slice(0, 290) : method } </p>

            <div className='flex items-center mt-auto justify-between mx-2 py-2 pe-2'> 
             <div className='flex'> <Rating style={{ maxWidth: 120 }} value={rating} readOnly /> <span className='ms-2 font-bold text-gray-600'>{rating}</span></div>

             <button onClick={handleClick} disabled={buttonDisabled} className='btn btn-info '>Add to favorite</button>
             <ToastContainer/>
            </div>

        </div>

      </div>
    );
};

export default RecipeCard;