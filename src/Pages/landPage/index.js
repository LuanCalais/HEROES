import "./LandPage.css";
import arrow from "./img/arrow.svg";
import NavBar from "./components/NavBar";
import PrimarySection from "./components/PrimarySection";

const LandPage = () => {
  return (
    <>
      <div className="container">
        <section className="header">
          <NavBar />

          <h1>Marvel con</h1>
          <img src={arrow} alt="arrow-icon" />
          <div className="start-now-box">
            <button className="btn start-now-button" id="start-now-button">
              Comece agora
            </button>
          </div>
        </section>

        <PrimarySection />
      </div>
    </>
  );
};

export default LandPage;
