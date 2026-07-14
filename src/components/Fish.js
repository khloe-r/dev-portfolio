import React from "react";

const Fish = ({ text, scrollTo, propRef }) => {
  return (
    <div className="fish-container" onClick={() => scrollTo(propRef)}>
      <div className="fish">
        <div className="fish-body">
          <p className="fish-title">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default Fish;
