import applewatch from "../images/projects/apple-watch.png";
import slackbot from "../images/projects/marketing-request.png";
import eco from "../images/projects/eco.png";
import revealo from "../images/projects/reveal-o.png";
import chess from "../images/projects/chess.png";
import { Heading } from "./Heading";

function Projects({ prop }) {
  const projects = [
    {
      name: "Reveal-o",
      date: "April 2024",
      img: revealo,
      descript: "Daily word game where users attempt to guess a phrase as fast as possible",
      link: "https://github.com/khloe-r/reveal-o",
      languages: ["MongoDB", "Typescript", "React", "Next.js"],
    },
    {
      name: "Apple Watch Notion Integration",
      date: "December 2023",
      img: applewatch,
      descript: "Apple Watch App allowing users to update Notion budgeting database on the go",
      link: "https://github.com/khloe-r/apple-watch-notion-integration",
      languages: ["Swift"],
    },
    {
      name: "Chess",
      date: "December 2022",
      img: chess,
      descript: "Object Oriented Software Development Project: Chess game with graphical interface and computer opponent",
      link: "",
      languages: ["C++"],
    },
    {
      name: "Eco Challenger",
      date: "August 2022",
      img: eco,
      descript: "Environmental competition incentivizing users to complete eco-friendly actions to win points",
      link: "https://github.com/khloe-r/eco-challenger",
      languages: ["MongoDB", "Node.js", "Express.js", "Passport.js", "React", "Chakra-UI"],
    },
    {
      name: "Marketing Request Bot",
      date: "June 2022",
      img: slackbot,
      descript: "Built for non-profit LEAP Canada to manage cross departmental requests for the marketing team",
      link: "https://github.com/khloe-r/MarketingRequestBot",
      languages: ["Node.js", "Bolt.js", "CockroachDB", "Sequelize ORM"],
    },
  ];

  return (
    <div className="text-start px-lg-5 px-3 mt-5" ref={prop}>
      <Heading title={"projects"} />
      <div className="row ms-lg-5 ps-lg-5 px-2">
        {projects.map((pro, i) => {
          return (
            <div className="col-lg-2 col-md-6 col-sm-12 text-center" key={i}>
              <div className="circ-border d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
                <img className="circ-img" src={pro.img} alt={pro.name + "project preview"}></img>
              </div>
              <h4 className="mt-2">{pro.name}</h4>

              <p className="">
                {pro.date}
                {pro.link && (
                  <span>
                    {" "}
                    -{" "}
                    <a href={pro.link} target="_blank" rel="noreferrer">
                      &#x1f517;
                    </a>
                  </span>
                )}
              </p>
              <p>{pro.descript}</p>
              <p style={{ lineHeight: 1.75 }}>
                {pro.languages.map((lang) => {
                  return (
                    <span>
                      {" "}
                      <span className="tag px-2"> {lang}</span>{" "}
                    </span>
                  );
                })}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
