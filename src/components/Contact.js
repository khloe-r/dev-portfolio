import { Heading } from "./Heading";

function Contact({ prop }) {
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
    <div className="text-start px-lg-5 px-3 mt-5" ref={prop}>
      <Heading title={"contact"} />
      <p className="ps-lg-5 ms-lg-5 px-2 mt-3">
        {socials.map((soc, index) => {
          return (
            <span key={index}>
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
