import plane from "../images/assets/plane.png";
import { useEffect, useState } from "react";

export const Heading = ({ title, prop }) => {
  const [width, setWidth] = useState(true);
  const updateDimensions = () => {
    setWidth(window.innerWidth >= 978);
  };

  useEffect(() => {
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  return (
    <div className="position-relative" style={{ width: width ? 450 : "18rem" }}>
      <h3 className="ms-5 ps-5 ps-lg-0 ms-lg-0 text-bold position-absolute top-50 translate-middle" ref={prop}>
        <span className="font-title">{title}</span>
      </h3>
    </div>
  );
};
