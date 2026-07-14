import { Heading } from "./Heading";

function About() {
  return (
    <div className="text-start px-5 mt-5 pt-5 pt-lg-0">
      <Heading title={"about me"} />
      <p className="col-lg-3 font-body mt-5 pt-5">
        Hey there! I am a recent grad of the Computer Science and Business Administration Double Degree at the University of Waterloo and Wilfrid Laurier University. <br /> <br />
        This year I will begin working as a software engineer at{" "}
        <a href="https://optiver.com/" target="_blank" rel="noreferrer" className="highlight">
          Optiver
        </a>
        !
        <br /> <br />
      </p>
    </div>
  );
}

export default About;
