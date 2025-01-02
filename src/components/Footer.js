import boat from "../images/assets/boat.png";

function Footer({ desktop }) {
  return (
    <div style={{ marginTop: 100 }} className={`d-flex ${desktop ? "flex-row" : "flex-column"} h-50 align-items-center gap-5 justify-content-center text-center px-5`}>
      <div class="cloud">
        <div class="cloud-text mt-5 pt-4">
          <h3 className="text-bold">made with &#10084;&#65039; by khloe</h3>
          <p>(c) January 2025</p>
        </div>
      </div>

      {!desktop && (
        <div style={{ zIndex: 10 }} className="mb-5">
          <img alt="" src={boat} style={{ height: 157, width: 308, display: "block" }} />
        </div>
      )}
    </div>
  );
}

export default Footer;
