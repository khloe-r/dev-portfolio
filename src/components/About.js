function About() {
  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold mb-3">
        <span className="title-text">about me &#x1f4bb;</span>
      </h3>
      <p className="col-lg-5">
        Hey there! I am currently in my 3rd year of the Computer Science and Business Administration Double Degree at the University of Waterloo and Wilfrid Laurier University. <br /> <br />
        This year I am completing my third and fourth internship as a Software Engineer Intern at{" "}
        <a href="https://www.stackadapt.com/" target="_blank" rel="noreferrer" className="highlight">
          StackAdapt
        </a>{" "}
        this winter and{" "}
        <a href="https://stripe.com/" target="_blank" rel="noreferrer" className="highlight">
          Stripe
        </a>{" "}
        this summer.
        <br /> <br />
      </p>
    </div>
  );
}

export default About;
