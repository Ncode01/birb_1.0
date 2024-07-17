import { useContext, useEffect, useRef } from "react";
import PropTypes from "prop-types";

import usePageExiting from "../../hooks/usePageExiting";

import { NavbarContext } from "../../App";

import "./styles.css";

import gp from "./google-play.svg";
import aas from "./appstore.svg";

function Button({ logo, text, link }) {
  return (
    <a href={link}>
      <button className="download-btn">
        <img src={logo} />
        <span>{text}</span>
      </button>
    </a>
  );
}

Button.propTypes = {
  logo: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default function Section7() {
  const ref = useRef(null);
  const exiting = usePageExiting(ref);

  const { changeTheme } = useContext(NavbarContext);

  useEffect(() => {
    changeTheme(exiting ? "light" : "dark");
  }, [exiting, changeTheme]);

  return (
    <section id="sec-7" ref={ref}>
      <h2>Download Now</h2>

      <div className="btn-container">
        <Button
          logo={gp}
          text="Google Playstore"
          link="https://play.google.com/"
        />
        <Button
          logo={aas}
          text="Apple Appstore"
          link="https://www.apple.com/app-store/"
        />
      </div>

      <div className="aurora">
        <div className="circle c1" />
        <div className="circle c2" />
        <div className="circle c3" />
        <div className="circle c4" />
        <div className="circle c5" />
        <div className="circle c6" />
      </div>
    </section>
  );
}
