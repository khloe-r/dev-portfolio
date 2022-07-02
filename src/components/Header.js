function Header({ scrollTo }) {
  return (
    <div className="text-start px-5 mt-5">
      <h4>my name is</h4>
      <h1 className="text-bold">
        <span className="highlight">khloe ramdhan</span>
      </h1>
      <p>Full Stack Developer</p>
      <p className="mt-5">
        <span>
          <a className="highlight px-2" onClick={() => scrollTo(1.9)}>
            Experience
          </a>
        </span>
        <span>
          <a className="highlight px-2" onClick={() => scrollTo(4.9)}>
            Projects
          </a>
        </span>
        <span>
          <a className="highlight px-2" onClick={() => scrollTo(7.4)}>
            Contact
          </a>
        </span>
      </p>
    </div>
  );
}

export default Header;
