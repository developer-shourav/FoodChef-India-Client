import React from 'react';
import Marquee from "react-fast-marquee";
/* -------------All Imported Images-------------- */
import BrandLogo1 from '../../assets/brand-img/1.png';
import BrandLogo2 from '../../assets/brand-img/2.png';
import BrandLogo3 from '../../assets/brand-img/3.png';
import BrandLogo4 from '../../assets/brand-img/4.png';
import BrandLogo5 from '../../assets/brand-img/5.png';
import BrandLogo6 from '../../assets/brand-img/6.png';
import BrandLogo7 from '../../assets/brand-img/7.png';
import BrandLogo8 from '../../assets/brand-img/8.png';

const BrandsListMarquee = () => {
    return (
        <div className='container mx-auto mt-10 hidden md:block '>
            <h3 className='text-center font-bold text-gray-600 mb-10 text-3xl'> We have Chef from</h3>
            {/* -------------All Brands With Picture------------ */}
            <Marquee pauseOnHover={true} speed={60} gradient={true}> 
                <div className='brand-img'>
                    <img src={BrandLogo1} alt="" />
                    <img src={BrandLogo2} alt="" />
                    <img src={BrandLogo3} alt="" />
                    <img src={BrandLogo4} alt="" />
                    <img src={BrandLogo5} alt="" />
                    <img src={BrandLogo6} alt="" />
                    <img src={BrandLogo7} alt="" />
                    <img src={BrandLogo8} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default BrandsListMarquee;