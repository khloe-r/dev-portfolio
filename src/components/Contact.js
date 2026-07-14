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
      name: "email",
      link: "mailto:khloe.ramdhan@outlook.com",
    },
  ];

  return (
    <div className="text-start pt-lg-5 px-lg-5 px-3 mt-5">
      <Heading title={"contact"} prop={prop} />
      <p className="ms-lg-5 ps-lg-5 px-2 mt-5 pt-5 pt-lg-0">
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
