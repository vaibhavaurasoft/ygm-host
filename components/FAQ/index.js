import React from "react";
import { isBrowser } from "../../utils/utilsFunctions";
import { getContent } from "../Blog";

function FAQ({ faq, index, toggleFAQ }) {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "")}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <h4 className="faq-question card-title">{faq.f_question}</h4>
      {isBrowser() &&
        <div className="faq-answer" dangerouslySetInnerHTML={getContent(faq?.f_answer)}></div>
      }
    </div>
  );
}

export default FAQ;
