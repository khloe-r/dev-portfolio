function About() {
  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold mb-3">
        <span className="title-text">about me &#x1f4bb;</span>
      </h3>
      <p className="col-lg-5">
        Hey there! I just finished my 1st year of the Computer Science and Business Administration Double Degree at the University of Waterloo and Wilfrid Laurier University. <br /> <br />
        This summer I’m interning as a Software Engineer at{" "}
        <a href="https://www.wealthsimple.com/" target="_blank" rel="noreferrer" className="highlight">
          Wealthsimple
        </a>
        .<br /> <br />
        I’ve always been passionate about tech since learning to code in elementary school. From hackathons and school clubs to publishing a children’s coding book I can’t wait to change the world with CS!
      </p>
    </div>
  );
}

export default About;
