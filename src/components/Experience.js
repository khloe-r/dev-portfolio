function Experience() {
  const experience = [
    {
      position: "Software Engineer Intern",
      company: "Wealthsimple",
      logo: "ws",
      date: "May 2022 - Present",
      experience: ["React Native, Typescript", "Unified Experience Team", "More learning and development to come!"],
    },
    {
      position: "Full Stack Developer",
      company: "UW Product Management Club",
      logo: "pmclub",
      date: "January 2022 - Present",
      experience: ["React, Bootstrap CSS", "Collaborate with designers and developers to construct clubs's first website", "Create and organize site structure and ensure responsiveness"],
    },
    {
      position: "Web Developer",
      company: "UW Women in STEM",
      logo: "wistem",
      date: "September 2021 - December 2021",
      experience: ["HTML, CSS, JavaScript", "Maintained club website to keep events and resources updated", "Communicated with social media department and executives to ensure high-quality content"],
    },
    {
      position: "Software Engineer Intern",
      company: "West Oak Design Inc.",
      logo: "wod",
      date: "May 2021 - August 2021",
      experience: ["React, Firebase, Bootstrap CSS", "Led project team to build learning management system for children's STEM courses", "Integrated NoSQL database, authentication features, administrative interface, and PayPal payment system"],
    },
    {
      position: "CSSI: Online Participant",
      company: "Google",
      logo: "cssi",
      date: "July 2021 - August 2021",
      experience: ["JavaScript, Firebase, HTML, Bulma CSS", "Participated in a 4-week intensive computer science summer program for high-achieving students", "Completed an introductory project-based curriculum taught by Google engineers"],
    },
  ];

  return (
    <div className=" px-5 mt-5">
      <h3 className="text-start mb-3">
        <span className="title-text">experience &#x1f4cc;</span>
      </h3>
      <div className="mr-5">
        <div>
          {experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div className={`mb-5 d-flex align-items-start justify-content-${isEven ? "start text-start" : "end text-end"}`}>
                {isEven && (
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="exp-logo me-3" src={require("../images/logos/" + exp.logo + ".png")} alt={exp.company} />
                  </div>
                )}
                <div>
                  <h3 className="">
                    <span className="highlight">{exp.position}</span>
                  </h3>
                  <p>
                    {exp.company} | {exp.date}
                  </p>
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
                {!isEven && (
                  <div className="d-flex justify-content-center align-items-center">
                    <img className="exp-logo ms-3" src={require("../images/logos/" + exp.logo + ".png")} alt={exp.company} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
