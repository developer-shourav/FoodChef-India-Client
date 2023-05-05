import React from "react";
import {AiFillCaretDown} from 'react-icons/ai';
import Pdf from 'react-to-pdf';
const ref = React.createRef();
const SingleQuestion = (props) => {
  const { question, ans } = props.questionData;
  return (
    <div className="shadow-lg py-4 rounded-lg border">
      <div className="collapse">
        <input type="checkbox" />
         
         {/* --------Blog Question and Answer------------- */}
        
        <div className="collapse-title text-xl  font-medium text-black">
          <div className="flex items-center justify-between">
          <span>{question}</span>  <button ><AiFillCaretDown></AiFillCaretDown></button>
          </div>
        </div>

        <div className="collapse-content">
        <Pdf targetRef={ref} filename="answers.pdf">
        {({ toPdf }) => <button className="btn btn-success  mb-2" onClick={toPdf}>Download Pdf</button>}
       </Pdf>
          <p ref={ref}>{ans} </p>
          
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
