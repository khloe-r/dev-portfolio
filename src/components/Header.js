function Header({ desktop }) {
  return (
    <div className="text-start px-5 ms-5 pt-5 mt-5">
      <h4 className="font-title" style={{ fontSize: desktop ? 200 : 80 }}>
        hello!
      </h4>
      <h1 className="text-bold font-body" style={{ fontSize: "2rem" }}>
        I'm <span className="highlight">Khloe Ramdhan</span>, Full Stack Software Developer
      </h1>

      <p className="font-body fs-5 mt-5">
        scroll along to see my journey {">"}
        {">"}
      </p>
    </div>
  );
}

export default Header;
