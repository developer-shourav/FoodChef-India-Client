import React from 'react';
import Logo from "../../assets/web-logo/logo-sm.png";
const Footer = () => {
    return (
        <footer   style={{backgroundColor:'#1b1b1b', color:'#8d8d8d'}} className='py-10 mt-80  list-none'>

            <div className="container mx-auto my-5">
               <div className='grid text-center md:text-left grid-cols-1 md:grid-cols-4 gap-4'>
                
               <div className=''>
                {/* --------Footer Logo ----------- */}
                    <img className='w-20 mx-auto md:mx-0' src={Logo} alt="" />
                    <h3 style={{color:"red"}} className=' font-bold text-2xl mb-8 '>FoodChef India</h3>
                    <li className='mb-2'>Nawabgong Convention Center,</li>
                    <li className='mb-2'>Bagmara Bazar, Nawabgonj, Delhi</li>
                    <li className='mb-2'>Muslima-9320</li>
                    <li className='mb-2'>India</li>
                </div>

                

                <div>
                <h4 className='text-white text-lg font-bold mb-4'>BUSINESSES</h4>
                    <li className='mb-3'>CATEGORY & PRODUCT</li>
                    <li className='mb-3'>Brands</li>
                    <li className='mb-3'>Export</li>
                    <li className='mb-3'>Import</li>
                    <li className='mb-3'>Shop</li>
                    <li className='mb-3'>Hotel</li>
                </div>

                <div>
                <h4 className='text-white text-lg font-bold mb-4'>Legal</h4>
                    <li className='mb-3'>Privacy</li>
                    <li className='mb-3'>Terms and Conditions</li>
                    <li className='mb-3'>FAQ</li>
                    <li className='mb-3'>Blogs</li>
                    <li className='mb-3'>Haring</li>
                </div>

                <div>
                    <h4 className='text-white text-lg font-bold mb-4'>About Us</h4>
                    <p className='text-sm mb-4'>We are the best  Indian  Food and Chef provider all over the world . You can hire all kinds of chefs and also can order any of our food. </p>
                    <li className='mb-3'>Inception</li>
                    <li className='mb-3'>Milestones</li>
                    <li className='mb-3'> Factories</li>
                </div>

                

               </div>
            </div>
            
            <hr style={{borderTop:'1px solid #383838'}}   />

            <div  className="container py-6 mt-2  mx-auto md:flex justify-between items-center">
                <div className=''>
                    <span>Terms of Use</span>
                    <span className='mx-6'>Privacy</span>
                    <span className='me-6'>About</span>
                    <span>Contact</span>
                </div>

                <div>
                    <span>© FoodChef India | All rights reserved</span>
                </div>

            </div>
        </footer>
    );
};

export default Footer;

