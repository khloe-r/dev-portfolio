import { Heading } from "./Heading";

function Experience({ prop, desktop }) {
  const experience = [
    {
      position: "Software Engineer Intern, Funding",
      company: "Stripe",
      logo: "stripe",
      date: "May 2024 - August 2024",
      experience: [
        "Ruby on Rails, SQL, Typescript, React",
        "Improved the automatic reconciliation of wire transfers by 20% using data analysis to refactor the matching process",
        "Redesigned unique code generation for merchants to improve legibility and increasing automatic reconciliation by code",
        "Coordinated rollout of banking partner details migration for Canadian wire transfers used by 32+ merchants",
      ],
    },
    {
      position: "Software Engineer Intern, Reporting",
      company: "StackAdapt",
      logo: "sa",
      date: "January 2024 - April 2024",
      experience: [
        "Ruby on Rails, Typescript, React, Sidekiq, GraphQL, AWS",
        "Resolved 15+ production bugs and client questions during on-call rotation with clear and concise communication",
        "Wrote technical design document and developed tool allowing efficient labelling of 1000+ entities for data analysis",
        "Created serializer and Sidekiq caching job to aggregate and display new cost attributes for campaign reports",
      ],
    },
    {
      position: "Software Engineer Intern x2",
      company: "Wealthsimple",
      logo: "ws",
      date: "January 2023 - April 2023 (Statements & Taxes), May 2022 - August 2022 (Design Systems)",
      experience: [
        "Java, Ruby on Rails, Typescript, Python, Apache Airflow, Sidekiq, GraphQL, AWS",
        "Built 9 management tools with GraphQL mutations in Ruby on Rails enabling finance team autonomy",
        "Implemented statement distribution using Java, Python and Apache Airflow saving up to $200,000 per year",
        "Developed mobile components, functions, and documentation to enable 50+ mobile developers to build app UIs more efficiently",
      ],
    },
    {
      position: "Software Engineer Intern, Smarthub",
      company: "West Oak Design Inc.",
      logo: "wod",
      date: "May 2021 - August 2021",
      experience: ["React, Firebase, Bootstrap CSS", "Led development team to build complete learning management system, Smart Hub, in 3 months using Firebase NoSQL database, Cloud Storage and authentication"],
    },
  ];

  return (
    <div className="px-lg-5 mt-5 pb-5 mx-3" ref={prop}>
      <Heading title={"experience"} />
      <div className="ms-lg-5 ps-lg-5 mt-3">
        <div className={`d-flex ${desktop ? "flex-row" : "flex-column"} justify-content-start gap-5`}>
          {experience.map((exp, index) => {
            return (
              <div className={`text-start ${desktop ? "w-25" : ""} px-3 px-lg-0`}>
                <div className={`d-flex align-items-start justify-content-start text-start`}>
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
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Experience;
