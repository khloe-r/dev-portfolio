function News() {
  return (
    <div className="text-end px-5 mt-5">
      <h3 className="text-bold mb-3">
        <span className="title-text" aria-label="latest updates">
          latest news &#128240;
        </span>
      </h3>
      <h5>
        <strong>ASA DataFest | April 2022</strong>
      </h5>
      <div className="d-flex justify-content-end">
        <p className="col-lg-5">
          Recently, I competed in my first data science competition through the University of Waterloo called{" "}
          <a className="highlight" href="https://uwaterloo.ca/statistics-and-actuarial-science/events/asa-datafest-2022" target="_blank" rel="noreferrer">
            DataFest
          </a>
          <br /> <br />I competed with a team of 3 members and had 2 days to explore the data and create a presentation. Our team analyzed the dataset of over 1.3 million entries using the <strong>Python libraries, Pandas and Matplotlib,</strong> chose to explore 5 key factors that affect game
          efficacy and provide a recommendation to improve. <br /> <br />
          In the end our team won <strong>Best Insight</strong> for our presentation &#127942;
        </p>
      </div>
    </div>
  );
}

export default News;
