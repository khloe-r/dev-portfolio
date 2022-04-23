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
      languages: ["Node.js", "Express.js", "Socket.io", "SQLite"],
    },
  ];

  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold">projects &#x1f4c1;</h3>
      <div className="row">
        {projects.map((pro) => {
          return (
            <div className="col-4">
              <img className="circ-img" src={pro.img}></img>
              <p>
                {pro.name} - {pro.date}
              </p>
              <p>
                {pro.languages.map((lang, index) => {
                  if (index != 0) {
                    return <span className="highlight">| {lang} </span>;
                  } else {
                    return <span className="highlight"> {lang} </span>;
                  }
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
