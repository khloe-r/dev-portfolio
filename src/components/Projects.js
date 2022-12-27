import gitprofile from "../images/projects/gitprofile.png";
import slackbot from "../images/projects/marketing-request.png";
import eco from "../images/projects/eco.png";
import quizly from "../images/projects/quizly.png";
import smarthub from "../images/projects/smarthub.png";
import datafest from "../images/projects/datafest.png";

function Projects() {
  const projects = [
    {
      name: "Eco Challenger",
      date: "August 2022",
      img: eco,
      descript: "MERN Stack app environmental competition incentivizing users to complete eco-friendly actions to win points",
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
    {
      name: "ASA Datafest Submission",
      date: "April 2022",
      img: datafest,
      descript: "Created during UWaterloo Datafest: Report analyzing 5 key factors to improve drug treatment efficacy using insights from over 1.3 million website log entries",
      languages: ["Python", "Pandas", "Matplotlib"],
    },
    {
      name: "Quizly",
      date: "January 2022",
      img: quizly,
      descript: "Kahoot clone with linked host and user interfaces",
      link: "https://github.com/khloe-r/QuizlyGame",
      languages: ["Node.js", "Express.js", "Socket.io", "SQLite"],
    },
    {
      name: "Smarthub",
      date: "Summer 2021",
      img: smarthub,
      descript: "Built during West Oak Design Inc. Internship: A complete learning management system allowing parents to purchase STEM-based courses through PayPal. ",
      link: "https://gosmarthub.com/",
      languages: ["React", "Bootstrap", "Firebase"],
    },
    {
      name: "GitProfile",
      date: "August 2021",
      img: gitprofile,
      descript: "Github profile viewer showing user data in an easy-to-view format including charts showing repository analytics.",
      link: "https://github.com/khloe-r/Git-Profile",
      languages: ["Flask", "Plotly", "Bootstrap", "HTML"],
    },
  ];

  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold mb-3">
        <span className="title-text">projects &#x1f4c1;</span>
      </h3>
      <div className="row mt-4">
        {projects.map((pro, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4" key={i}>
              <div className="circ-border d-flex justify-content-center align-items-center" style={{ minHeight: 300 }}>
                <img className="circ-img" src={pro.img}></img>
              </div>
              <h4 className="mt-4">{pro.name}</h4>

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
              <p>
                {pro.languages.map((lang, index) => {
                  return (
                    <span>
                      {" "}
                      {index != 0 && "| "}
                      <span className="highlight"> {lang}</span>{" "}
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
