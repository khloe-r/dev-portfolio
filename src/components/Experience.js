function Experience() {
  const experience = [
    {
      position: "Software Engineer Intern",
      company: "Wealthsimple",
      date: "May 2022 - Present",
    },
    {
      position: "Full Stack Developer",
      company: "UW Product Management Club",
      date: "January 2022 - Present",
    },
    {
      position: "Web Developer",
      company: "UW Women in STEM",
      date: "September 2021 - December 2021",
    },
    {
      position: "Software Engineer Intern",
      company: "West Oak Design Inc.",
      date: "May 2021 - August 2021",
    },
    {
      position: "CSSI: Online Participant",
      company: "Google",
      date: "July 2021 - August 2021",
    },
  ];

  return (
    <div className=" px-5 mt-5">
      <h3 className="text-end text-bold">
        <span className="title-text">experience &#x1f4cc;</span>
      </h3>
      <div className=" text-center">
        {experience.map((exp) => {
          return (
            <>
              <h3 className="">
                <span className="highlight">{exp.position}</span>
              </h3>
              <p>
                {exp.company} | {exp.date}
              </p>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;