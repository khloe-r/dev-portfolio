import React from "react";

const Fish = ({ text, scrollTo, propRef }) => {
  return (
    <div className="fish-container" onClick={() => scrollTo(propRef)}>
      <div className="fish">
        <div className="fish-body">
          <div className="fish-tail"></div>
          <div className="fish-fins">
            <div className="fish-fin-top"></div>
            <div className="fish-fin-bottom"></div>
          </div>
          <div className="fish-eye"></div>
          <p className="fish-title">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Fish;
