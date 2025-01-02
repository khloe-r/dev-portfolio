import { Heading } from "./Heading";
function Upcoming() {
  return (
    <div className="px-lg-5 px-3 mt-5">
      <Heading title={"upcoming"} />
      <div className="mt-3 ms-lg-5 ps-lg-5 px-1 fs-3 text-start d-flex justify-content-start">
        <ul>
          <li>building new projects!</li>
          <li>visiting SF this winter and Chicago this summer!</li>
        </ul>
      </div>
    </div>
  );
}

export default Upcoming;
