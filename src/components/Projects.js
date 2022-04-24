import gitprofile from "../images/gitprofile.png";
import just5 from "../images/just5.png";
import quizly from "../images/quizly.png";
import smarthub from "../images/smarthub.png";
import studyo from "../images/study-o.png";
import watmap from "../images/watmap.png";

function Projects() {
  const projects = [
    {
      name: "Quizly",
      date: "January 2022",
      img: quizly,
      link: "https://github.com/khloe-r/QuizlyGame",
      languages: ["Node.js", "Express.js", "Socket.io", "SQLite"],
    },
    {
      name: "Smarthub",
      date: "Summer 2021",
      img: smarthub,
      link: "https://gosmarthub.com/",
      languages: ["React", "Bootstrap", "Firebase"],
    },
    {
      name: "GitProfile",
      date: "August 2021",
      img: gitprofile,
      link: "https://github.com/khloe-r/Git-Profile",
      languages: ["Flask", "Plotly", "Bootstrap", "HTML"],
    },
    {
      name: "Just 5 Minutes",
      date: "August 2021",
      img: just5,
      link: "https://devpost.com/software/just-5-minutes",
      languages: ["React", "Material UI", "Firebase"],
    },
    {
      name: "Study-O",
      date: "August 2021",
      img: studyo,
      link: "https://github.com/khloe-r/Study-o",
      languages: ["HTML", "Bulma", "Firebase"],
    },
    {
      name: "Watmap",
      date: "October 2021",
      img: watmap,
      link: "https://github.com/JKSKHTN/WatMap",
      languages: ["React", "Bootstrap", "Firebase"],
    },
  ];

  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold">
        <span className="title-text">projects &#x1f4c1;</span>
      </h3>
      <div className="row mt-4">
        {projects.map((pro, i) => {
          return (
            <div className="col-lg-4 col-md-6 col-sm-12 text-center ">
              <div className="circ-border d-flex justify-content-center align-items-center">
                <img className="circ-img" src={pro.img}></img>
              </div>
              <h4 className="mt-4">{pro.name}</h4>
              <p className="">
                {pro.date} - <a href={pro.link}>&#x1f517;</a>
              </p>
              <p>
                {pro.languages.map((lang, index) => {
                  return (
                    <span className="highlight">
                      {" "}
                      {index != 0 && "|"} {lang}
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
