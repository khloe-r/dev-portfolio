import gitprofile from "../images/projects/gitprofile.png";
import just5 from "../images/projects/just5.png";
import quizly from "../images/projects/quizly.png";
import smarthub from "../images/projects/smarthub.png";
import studyo from "../images/projects/study-o.png";
import watmap from "../images/projects/watmap.png";

function Projects() {
  const projects = [
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
    {
      name: "Just 5 Minutes",
      date: "August 2021",
      img: just5,
      descript: "Built during The SuperPOSITRON: A productivity tool that is designed to help users delegate their time more wisely by joining communities working towards the same goals.",
      link: "https://devpost.com/software/just-5-minutes",
      languages: ["React", "Material UI", "Firebase"],
    },
    {
      name: "Study-O",
      date: "August 2021",
      img: studyo,
      descript: "Built during Google CSSI: All-in-one organizer tool for students, where they can keep track of due dates, homework assignments, write any notes, intern applications, and stay on track with a pomodoro timer!",
      link: "https://github.com/khloe-r/Study-o",
      languages: ["HTML", "Bulma", "Firebase"],
    },
    {
      name: "Watmap",
      date: "October 2021",
      img: watmap,
      descript: "Built during Hack the North: University student freelancing web app connecting students with buyers safely close to their school.",
      link: "https://github.com/JKSKHTN/WatMap",
      languages: ["React", "Bootstrap", "Firebase"],
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
            <div className="col-lg-4 col-md-6 col-sm-12 text-center mb-4">
              <div className="circ-border d-flex justify-content-center align-items-center">
                <img className="circ-img" src={pro.img}></img>
              </div>
              <h4 className="mt-4">{pro.name}</h4>

              <p className="">
                {pro.date} - <a href={pro.link}>&#x1f517;</a>
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
