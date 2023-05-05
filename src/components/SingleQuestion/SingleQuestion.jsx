import React from "react";
import {AiFillCaretDown} from 'react-icons/ai';
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
          <p>{ans} </p>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
