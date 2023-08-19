function Experience() {
  const experience = [
    {
      position: "Software Engineer Intern, Book of Records",
      company: "Wealthsimple",
      logo: "ws",
      date: "January 2023 - April 2023",
      experience: [
        "Java, Ruby on Rails, Typescript, Python, Apache Airflow, Sidekiq, GraphQL, AWS",
        "Built 9 statement management tools by connecting GraphQL mutations in Ruby on Rails to Typescript, React interface enabling the financial operations team to handle data entry tasks autonomously and eliminate manual data migrations",
        "Implemented email statement distribution using Java, Python and Apache Airflow to safely send statements from AWS S3 to clients with potential to save up to $200,000 per year by eliminating the need to mail up to 4000 paper statements",
        "Created nightly Sidekiq worker saving 5+ hours by automating the generation of monthly statement data",
      ],
    },
    {
      position: "Software Engineer Intern, Unified Experience",
      company: "Wealthsimple",
      logo: "ws",
      date: "May 2022 - August 2022",
      experience: [
        "React Native, Typescript, Node.js, Datadog, Jest",
        "Implemented React Native UI designs and Jest unit testing for Wealthsimple unified app launch",
        "Developed mobile components, semantic layer utility functions, and interactive Storybook documentation stories meeting Web Content Accessibility Guidelines to enable 50+ mobile developers to build app UIs more efficiently",
        "Optimized Typescript script converting SVGs to React Native components, decreasing build time by 85%",
        "Created Datadog dashboard of component usage across 6 repositories by developing Node.js scripts and GitHub Action",
      ],
    },
    {
      position: "Software Engineer Intern",
      company: "West Oak Design Inc.",
      logo: "wod",
      date: "May 2021 - August 2021",
      experience: [
        "React, Firebase, Bootstrap CSS",
        "Led development team to build complete learning management system, Smart Hub, in 3 months using Firebase NoSQL database, Cloud Storage and authentication and secure payment with PayPal",
        "Redirected project from incompatible static frontend framework, helping to teach co-workers React and Bootstrap CSS",
      ],
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
