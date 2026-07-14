import boat from "../images/assets/boat.png";

function Footer({ desktop }) {
  return (
    <div style={{ marginTop: 100 }} className={`d-flex ${desktop ? "flex-row" : "flex-column mb-5"} h-50 align-items-center gap-5 justify-content-center text-center px-5`}>
      <div className="cloud">
        <div className="cloud-text mt-5 pt-4">
          <h3 className="text-bold">made with &#10084;&#65039; by khloe</h3>
          <p>(c) July 2026</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
