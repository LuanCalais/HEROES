import "./LandPage.css";
import arrow from "./img/arrow.svg";
import rocket from "./img/carbon_rocket.svg";
import NavBar from "./components/NavBar";

const LandPage = () => {
  return (
    <>
      <div className="container">
        <section>
          <NavBar />

          <h1>Marvel con</h1>
          <img src={arrow} alt="arrow-icon" />
          <div className="start-now-box">
            <button className="btn start-now-button" id="start-now-button">
              Comece agora
              {/* <img src={rocket} alt="carbon-rocket" /> */}
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default LandPage;
