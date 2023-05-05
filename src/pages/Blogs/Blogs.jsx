import React from "react";
import questionImg from '../../assets/Blog-img/question.jpg'
import Blog from "../../components/Blog/Blog";
import { useLoaderData } from "react-router-dom";
import Pdf from 'react-to-pdf';
const ref = React.createRef();
const Blogs = () => {
  const questions = useLoaderData();
  /*  ---------Blog Page -------------- */
  return (
    <div  className=" sm:pt-20 px-2 md:pt-36 container mx-auto">
      <h2 className="font-bold text-3xl mb-10">Common Questions  <Pdf targetRef={ref} filename="answers.pdf">
        {({ toPdf }) => <button className="btn btn-success  mb-2" onClick={toPdf}>Generate Pdf</button>}
       </Pdf></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        <div className="hidden md:block ">
          <img className="rounded-lg" src={questionImg} alt="" />
        </div>

        <div className="">
          {/* ---------- Bloogs to pdf convertor------- */}
       
          <Blog ref={ref} questions={questions}> </Blog>
        </div>

      </div>
    </div>
  );
};

export default Blogs;