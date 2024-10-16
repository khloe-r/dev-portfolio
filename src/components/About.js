import { Heading } from "./Heading";

function About() {
  return (
    <div className="text-start px-lg-5 px-3 mt-5">
      <Heading title={"about me"} />
      <p className="col-lg-7 font-body ms-lg-5 ps-lg-5 ms-2 mt-3">
        Hey there! I am currently in my 4th year of the Computer Science and Business Administration Double Degree at the University of Waterloo and Wilfrid Laurier University. <br /> <br />
        This summer I completed my fifth internship as a Software Engineer Intern at{" "}
        <a href="https://stripe.com/" target="_blank" rel="noreferrer" className="highlight">
          Stripe
        </a>{" "}
        <br /> <br />
      </p>
    </div>
  );
}

export default About;
