function Experience() {
  const experience = [
    {
      position: "Software Engineer Intern, Book of Records",
      company: "Wealthsimple",
      logo: "ws",
      date: "January 2023 - Present",
      experience: ["Coming Soon!"],
    },
    {
      position: "Software Engineer Intern, Unified Experience",
      company: "Wealthsimple",
      logo: "ws",
      date: "May 2022 - August 2022",
      experience: [
        "React Native, Typescript, Node.js, Datadog, Jest",
        "Implemented UI designs for Wealthsimple unified app launch",
        "Collaborated to build utility functions, create interactive Storybook documentation, unit tests and mobile components, meeting WCAG",
        "Optimized script converting SVGs to React Native components, decreasing build time by 85%",
        "Created scripts and analytics dashboard to measure adoption of new design system across 6 repositories",
      ],
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
      experience: ["JavaScript, Firebase, HTML, Bulma CSS", "Participated in a 4-week intensive computer science summer program for high-achieving students taught by Google engineers"],
    },
  ];

  return (
    <div className=" px-5 mt-5 pb-5 mx-3">
      <h3 className="text-end mb-3">
        <span className="title-text">experience &#x1f4cc;</span>
      </h3>
      <div className="mr-5">
        <div>
          {experience.map((exp, index) => {
            const isEven = index % 2 === 0;
            return (
              <div className={`mb-5 d-flex align-items-start justify-content-${!isEven ? "start text-start" : "end text-end"}`}>
                {!isEven && (
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
                {isEven && (
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
