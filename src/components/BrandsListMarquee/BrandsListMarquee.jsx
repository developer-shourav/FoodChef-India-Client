import React from 'react';
import Marquee from "react-fast-marquee";
import BrandLogo1 from '../../assets/brand-img/1.png';
import BrandLogo2 from '../../assets/brand-img/2.jpg';
import BrandLogo3 from '../../assets/brand-img/3.jpg';
import BrandLogo4 from '../../assets/brand-img/4.png';
import BrandLogo5 from '../../assets/brand-img/5.png';
import BrandLogo6 from '../../assets/brand-img/6.png';
import BrandLogo8 from '../../assets/brand-img/8.png';
import BrandLogo9 from '../../assets/brand-img/9.png';
import BrandLogo10 from '../../assets/brand-img/10.jpg';
import BrandLogo11 from '../../assets/brand-img/11.png';
const BrandsListMarquee = () => {
    return (
        <div className='container mx-auto mt-10 hidden md:block '>
            <h3 className='text-center font-bold text-gray-600 mb-10 text-3xl'> Brands Available</h3>
            <Marquee pauseOnHover={true} speed={60} gradient={true}> 
                <div className='brand-img'>
                    <img src={BrandLogo1} alt="" />
                    <img src={BrandLogo2} alt="" />
                    <img src={BrandLogo3} alt="" />
                    <img src={BrandLogo4} alt="" />
                    <img src={BrandLogo5} alt="" />
                    <img src={BrandLogo6} alt="" />
                    <img src={BrandLogo8} alt="" />
                    <img src={BrandLogo9} alt="" />
                    <img src={BrandLogo10} alt="" />
                    <img src={BrandLogo11} alt="" />
                </div>
            </Marquee>
        </div>
    );
};

export default BrandsListMarquee;