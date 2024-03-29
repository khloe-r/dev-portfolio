function Extracurriculars() {
  const experience = [
    {
      position: "Project Lead",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "May 2023 - December 2023",
      experience: [
        "React, Typescript, Node.js, Express.js, MongoDB, PrismaORM",
        "Lead technical development team to build refugee and volunteer matching platform for non-profit Haven",
        "Design project architecture including matching algorithm based on requirements from organization founders",
        "Organize team development practices by scoping tickets, mentoring developers, and reviewing pull requests",
      ],
    },
    {
      position: "Project Developer",
      company: "UW Blueprint",
      logo: "blueprint",
      date: "September 2022 - April 2023",
      experience: ["React, Typescript, Node.js, Express.js, PostgreSQL", "Collaborated with development team to build review and creator booking platform for Canadian Children Book Centre"],
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
