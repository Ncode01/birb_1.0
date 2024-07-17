import { useContext, useEffect, useState } from "react";
import { NavbarContext } from "../../App";

import "./styles.css";

import logo from "./logo.svg";

export default function Navbar() {
  const { theme } = useContext(NavbarContext);

  const [hide, setHide] = useState(false);

  useEffect(() => {
    let prevPos = window.scrollY;

    document.addEventListener("scroll", () => {
      let currentPos = window.scrollY;

      if (currentPos > 0) {
        document.getElementById("nav").style.background = "var(--bg-color)";
        document.getElementById("nav").style.backdropFilter = "blur(5px)";
      } else {
        document.getElementById("nav").style.background =
          "var(--bg-color-trans)";
        document.getElementById("nav").style.backdropFilter = "blur(0px)";
      }

      if (prevPos > currentPos) {
        setHide(false);
      } else {
        setHide(true);
      }
      prevPos = currentPos;
    });
  }, []);

  return (
    <nav
      className={theme !== "dark" ? "nav-light" : ""}
      id="nav"
      style={{
        top: hide ? "-3.5rem" : "0rem",
      }}
    >
      <a href="/">
        <div className="logo-c">
          <img src={logo} />
          Birb
        </div>
      </a>
      <a className="shop" href="/shop">
        Shop
      </a>
    </nav>
  );
}
