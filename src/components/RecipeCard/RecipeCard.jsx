import React from 'react';

const RecipeCard = ({item}) => {
    const {recipe_name, ingredients, method, rating, recipe_img} = item ;
    return (
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
            <p className='p-2 text-gray-600'><span className='font-bold text-gray-700'>Cooking Method:</span> {method}</p>

            <div className='flex items-center justify-between mx-2 py-2 pe-2'> 
             <div>Rating: {rating}</div>
             <div>Add to favourite</div>
            </div>

        </div>

      </div>
    );
};

export default RecipeCard;