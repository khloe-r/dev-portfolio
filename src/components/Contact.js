function Contact() {
  const socials = [
    {
      name: "github",
      link: "https://github.com/khloe-r",
    },
    {
      name: "linkedin",
      link: "https://www.linkedin.com/in/khloe-ramdhan/",
    },
    {
      name: "devpost",
      link: "https://devpost.com/khloe-r",
    },
    {
      name: "email",
      link: "mailto:kramdhan@uwaterloo.ca",
    },
  ];

  return (
    <div className="text-start px-5 mt-5">
      <h3 className="text-bold">
        <span className="title-text">contact me &#x1f4de;</span>
      </h3>
      <p>
        {socials.map((soc, index) => {
          return (
            <span>
              <a className="contact-link" href={soc.link} target="_blank" rel="noreferrer">
                {soc.name}
              </a>
            </span>
          );
        })}
      </p>
    </div>
  );
}

export default Contact;
