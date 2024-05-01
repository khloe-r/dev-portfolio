import { Heading } from "./Heading";
function Extracurriculars({ prop, desktop }) {
  const experience = [
    {
      position: "Project Lead, Haven",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "May 2023 - December 2023",
      experience: ["Typescript, Node.js, Express.js, MongoDB, PrismaORM, Docker", "Led 8 developers to build volunteer matching algorithm API platform for non-profit including project architecture and code reviews"],
    },
    {
      position: "Project Developer",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "September 2022 - April 2023",
      experience: ["React, Typescript, Node.js, Express.js, PostgreSQL", "Collaborated with development team to build review and creator booking platform for Canadian Children Book Centre"],
    },
    {
      position: "Computer Science Summer Institute",
      company: "Google",
      logo: "cssi",
      date: "July 2021 - August 2021",
      experience: ["JavaScript, Firebase, HTML, Bulma CSS", "Participated in a 4-week intensive computer science summer program for high-achieving students"],
    },
  ];

  return (
    <div className="px-lg-5 ms-3 mt-5 pb-5" ref={prop}>
      <Heading title={"activities"} />
      <div className="ms-lg-5 ps-lg-5 px-2 mt-3">
        <div className={`d-flex ${desktop ? "flex-row" : "flex-column"}`}>
          {experience.map((exp, index) => {
            return (
              <div style={{ width: desktop ? "33%" : "100%" }} className={`mb-3 d-flex flex-column align-items-start justify-content-start text-start`}>
                <div className="d-flex flex-row align-items-start justify-content-start">
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="exp-logo me-3" src={require("../images/logos/" + exp.logo + ".png")} alt={exp.company} />
                  </div>
                  <div>
                    <h3 className="">
                      <span className="highlight">{exp.position}</span>
                    </h3>
                    <p>
                      {exp.company} | {exp.date}
                    </p>
                  </div>
                </div>
                <div>
                  {exp.experience.map((responsibility, i) => {
                    if (i === 0) {
                      return (
                        <strong>
                          <p>&#8227; {responsibility}</p>
                        </strong>
                      );
                    }
                    return <p>&#8227; {responsibility}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Extracurriculars;
