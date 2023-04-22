import React from "react";
import { useState } from "react";
import elipse from "../../images/Ellipse 1.png";
import Image from "../atom/Image";
import 'boxicons'

const FaqCard = ({list}) => {
  const [title, setTitle] = useState(false);
  const {question,answer} = list

  const handleState = () => {
    setTitle(!title);
  };

  return (
    <div className="pad py-2 faqlist">
      {!title && (
        <div
          className="w-100 py-3 px-4 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h5 className="d-flex faqlight align-items-center">
            <Image src={elipse} className="elip" alt="ellipse" />
            {question}
          </h5>
          <box-icon name="chevron-right" color="#9B0000"></box-icon>
        </div>
      )}
      {title && (
        <div
          className="w-100 faq py-3 px-4 d-flex align-items-center justify-content-between border-bottom rounded-4"
          onClick={handleState}
        >
          <h5 className="d-flex text-black faqthick align-items-center">
            <Image src={elipse} className="elip" alt="ellipse"/>
            {question}
          </h5>
          <box-icon name="chevron-up" color="#9B0000" ></box-icon>
        </div>
      )}
      {title && (
        <div className="pt-4 pb-5 px-4 faq">
          <p className="faq-card-ans">
           {answer}
          </p>
        </div>
      )}
    </div>
  );
};

export default FaqCard;
