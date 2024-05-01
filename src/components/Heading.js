import plane from "../images/assets/plane.png";
import { useEffect, useState } from "react";

export const Heading = ({ title }) => {
  const [width, setWidth] = useState(false);
  const updateDimensions = () => {
    setWidth(window.innerWidth >= 978);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="position-relative" style={{ width: width ? 450 : "18rem" }}>
      <img src={plane} alt="" style={Object.assign({ display: "block" }, width ? { height: 62, width: 450 } : { height: "4rem", width: "18rem" })} />
      <h3 className="text-bold position-absolute top-50 start-50 translate-middle">
        <span className="title-text">{title}</span>
      </h3>
    </div>
  );
};
