import React from 'react';

const StatusBar = () => {
    return (
        <div className="hidden md:block md:py-6 lg:py-10 about-bg my-5 shadow-red-700 shadow-md">

        <div className="container mx-auto flex items-center justify-evenly text-center font-bold ">
          <div>
            <h3 className="md:text-3xl lg:text-4xl">1000+</h3>
            <p>Product Items</p>
          </div>

          <div className="">
          <h3 className="md:text-3xl lg:text-4xl">20+</h3>
            <p>Branches</p>
          </div>

          <div>
          <h3 className="md:text-3xl lg:text-4xl">25 Years</h3>
            <p>Business Experience</p>
          </div>

          <div>
            <h3 className=" md:text-3xl lg:text-4xl">90%</h3>
            <p>Return Customers</p>
          </div>
        </div>
      </div>
    );
};

export default StatusBar;