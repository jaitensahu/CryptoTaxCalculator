import React from "react";
import { ques } from "./QuesAns";
// import quesAns from './QuesAns'
const Faqs = () => {
  // console.log(ques);
  return (
    <div>
      <h1 className="text-[24px] font-bold">Frequently Asked Questions</h1>
      {ques.map((ele, idx) => {
        return (
          <div className="my-4" key={idx + "absj"}>
            <p className="font-bold">
              {idx + 1}.{ele.ques}
            </p>
            <p
              className="pl-3 pt-1"
              dangerouslySetInnerHTML={{ __html: ele.ans }}
            ></p>
          </div>
        );
      })}
    </div>
  );
};

export default Faqs;
