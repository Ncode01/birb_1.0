import PropTypes from "prop-types";

import "./styles.css";

import logo from "./logo.svg";

export default function Footer({ hide = false }) {
  return (
    <footer
      style={{
        minHeight: hide ? "auto" : "50vh",
      }}
    >
      {!hide && (
        <>
          <img src={logo} />

          <div className="footer-grid">
            <div className="grid-side">
              <p>- This is not an actual Product or a Company</p>
              <p>- Devices shown are Amazon Alexa Devices</p>
              <p>
                - Project Repo on&nbsp;
                <a href="https://github.com/Ncode01/Birb">Github</a>
              </p>
              <p>
                - Project Design on&nbsp;
                <a href="https://www.figma.com/file/pVLHlkEeHpW6WDTm4fBn6t/Birb---AI-Voice-Assistant?type=design&node-id=0%3A1&t=R9dgwuazF26d3Cqe-1">
                  Figma
                </a>
              </p>
            </div>
            <div className="grid-side">
              <p>
                - Images from <a href="https://www.pexels.com/">Pexels</a>
              </p>
              <p>
                - Alexa Devices Images from various websites via Google Search
              </p>
              <p>
                -&nbsp;
                <a href="https://youtu.be/sBEvEcpnG7k">
                  Stranger Things Season 4 Trailer
                </a>
              </p>
              <p>- Photos are Manipulated with Adobe Photoshop</p>
            </div>
          </div>
        </>
      )}

      <div className="footer-last">
        <p>Submission for The Nexuse’24 organized by KGHSICT</p>
        <p>
          Nadula Nisith <br />
          Royal College - Colombo 07 <br />
          2024©
        </p>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  hide: PropTypes.bool,
};
