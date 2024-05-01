function Header() {
  return (
    <div className="text-start px-5 mt-5">
      <h4 className="font-body fs-2">my name is</h4>
      <h1 className="text-bold" style={{ fontSize: "3rem" }}>
        <span className="highlight">khloe ramdhan</span>
      </h1>
      <p className="font-body fs-2">full stack software developer</p>

      <p className="font-body fs-5 mt-5">
        scroll along to see my journey {">"}
        {">"}
      </p>
    </div>
  );
}

export default Header;
