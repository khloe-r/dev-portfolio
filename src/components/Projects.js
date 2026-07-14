import applewatch from "../images/projects/apple-watch.png";
import slackbot from "../images/projects/marketing-request.png";
import revealo from "../images/projects/reveal-o.png";
import chess from "../images/projects/chess.png";
import escapeo from "../images/projects/escape-o.png";
import photobooth from "../images/projects/photobooth.png";
import { Heading } from "./Heading";

function Projects({ prop }) {
  const projects = [
    {
      name: "Escape-O",
      date: "April 2024",
      img: escapeo,
      descript: "Virtual escape game, self-drawn graphics",
      link: "https://escape-io.vercel.app/",
      languages: ["Typescript", "React", "Next.js"],
    },
    {
      name: "Photobooth",
      date: "April 2024",
      img: photobooth,
      descript: "Customizable virtual photobooth",
      link: "https://sanj-photobooth.vercel.app/",
      languages: ["Typescript", "React", "Next.js"],
    },
    {
      name: "Reveal-o",
      date: "April 2024",
      img: revealo,
      descript: "Daily word game to guess a common phrase as fast as possible",
      link: "https://reveal-o.vercel.app/",
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
    // {
    //   name: "Chess",
    //   date: "December 2022",
    //   img: chess,
    //   descript: "Object Oriented Software Development Project: Chess game with graphical interface and computer opponent",
    //   link: "",
    //   languages: ["C++"],
    // },
    // {
    //   name: "Eco Challenger",
    //   date: "August 2022",
    //   img: eco,
    //   descript: "Environmental competition incentivizing users to complete eco-friendly actions to win points",
    //   link: "https://github.com/khloe-r/eco-challenger",
    //   languages: ["MongoDB", "Node.js", "Express.js", "Passport.js", "React", "Chakra-UI"],
    // },
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
    <div className="pt-5 mt-5 pb-5 px-5">
      <div className="mb-5">
        <Heading title={"projects"} prop={prop} />
      </div>
      <div className="row ms-lg-5 ps-lg-5 px-2 gap-5">
        {projects.map((pro, i) => {
          return (
            <div style={{ transform: i % 2 === 0 ? "rotate(2deg)" : "rotate(-2deg)" }} className="col-lg-2 col-md-6 col-sm-12 text-center project-tile" key={pro.name}>
              <div className="circ-border d-flex justify-content-center align-items-center" style={{ minHeight: 200 }}>
                <img className="circ-img" src={pro.img} alt={pro.name + "project preview"}></img>
              </div>
              <h4 className="mt-2">
                {pro.name} -{" "}
                <a href={pro.link} target="_blank" rel="noreferrer">
                  &#x1f517;
                </a>
              </h4>

              <p style={{ fontSize: 14 }}>{pro.descript}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Projects;
