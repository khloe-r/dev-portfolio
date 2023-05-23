function Extracurriculars() {
  const experience = [
    {
      position: "Project Lead",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "May 2023 - Present",
      experience: ["Coming Soon!"],
    },
    {
      position: "Project Developer",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "September 2022 - April 2023",
      experience: [
        "React, Typescript, Node.js, Express.js, PostgreSQL",
        "Collaborated with development team to build review and creator booking platform for Canadian Children Book Centre",
        "Implemented creator management tools including administrative dashboard, searchable directory for users, and creator multi-step onboarding form using Typescript, React, Express.js, Node.js, and PostgreSQL",
        "Lead creator booking flow development, scoping tickets, and assisting developers through pair-programming",
      ],
    },
    {
      position: "Full Stack Developer",
      company: "UW Product Management Club",
      logo: "pmclub",
      date: "January 2022 - August 2022",
      experience: ["React, Bootstrap CSS", "Collaborate with designers and developers to construct clubs's first website", "Create and organize site structure and ensure responsiveness"],
    },
    {
      position: "Web Developer",
      company: "UW Women in STEM",
      logo: "wistem",
      date: "September 2021 - December 2021",
      experience: ["HTML, CSS, JavaScript", "Maintained club website to keep events and resources updated", "Communicated with social media department and executives to ensure high-quality content"],
    },
  ];

  return (
    <div className="px-5 mt-5 pb-5">
      <h3 className="text-end mb-3">
        <span className="title-text">extracurriculars &#127905;</span>
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

export default Extracurriculars;
