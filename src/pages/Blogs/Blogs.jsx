import React from "react";
import questionImg from '../../assets/Blog-img/question.jpg'
import Blog from "../../components/Blog/Blog";
import { useLoaderData } from "react-router-dom";

const Blogs = () => {
  const questions = useLoaderData();
  /*  ---------Blog Page -------------- */
  return (
    <div  className=" sm:pt-20 px-2 md:pt-36 container mx-auto">
      <h2 className="font-bold text-3xl mb-10">Common Questions</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="hidden md:block ">
          <img className="rounded-lg" src={questionImg} alt="" />
        </div>

        <div className="">
          <Blog questions={questions}> </Blog>
        </div>

      </div>
    </div>
  );
};

export default Blogs;