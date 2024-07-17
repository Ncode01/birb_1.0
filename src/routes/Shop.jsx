import { useContext, useEffect } from "react";

import { NavbarContext } from "../App";

import Footer from "../components/footer/Footer";

import "./shop.css";

import birbNest from "./birbNest.webp";
import birbHome from "./birbHome.webp";
import birbPro from "./birbPro.webp";
import birbView from "./birbView.webp";
import accessories from "./accessories.webp";

export default function Shop() {
  const { changeTheme } = useContext(NavbarContext);

  useEffect(() => {
    changeTheme("light");
  }, [changeTheme]);

  return (
    <>
      <section id="shop-head">
        <h1>
          Add Birb to Your <br />
          Lifestyle
        </h1>
      </section>

      <section className="grid-shop">
        <div className="grid-ho">
          <a href="https://amazon.com/" className="gi-1">
            <div className="grid-item">
              <h2>Birb Nest</h2>
              <span>From Rs. 12 500</span>

              <ul>
                <li>Compact Size</li>
                <li>Control Anything IOT</li>
                <li>Install Anywhere</li>
              </ul>

              <img src={birbNest} />
            </div>
          </a>

          <a href="https://amazon.com/" className="gi-2">
            <div className="grid-item">
              <h2>Birb Home</h2>
              <span>From Rs. 18 000</span>

              <ul>
                <li>Surround Sounds</li>
                <li>Control Anything IOT</li>
                <li>Better Audio</li>
              </ul>

              <img src={birbHome} />
            </div>
          </a>
        </div>

        <div className="grid-ho-ve">
          <a href="https://amazon.com/" className="gi-3">
            <div className="grid-item">
              <h2>Birb Home Pro</h2>
              <span>From Rs. 25 000</span>

              <ul>
                <li>Dolby Atmos</li>
                <li>Control Anything IOT</li>
                <li>Loud Sounds</li>
              </ul>

              <img src={birbPro} />
            </div>
          </a>

          <a href="https://amazon.com/" className="gi-4">
            <div className="grid-item">
              <h2>Birb Home View</h2>
              <span>From Rs. 30 200</span>

              <ul>
                <li>Control Your Home</li>
                <li>Stream Media Directly</li>
                <li>Face-ID</li>
              </ul>

              <img src={birbView} />
            </div>
          </a>

          <a href="https://amazon.com/" className="gi-5">
            <div className="grid-item">
              <h2>Accessories </h2>
              <img src={accessories} />
            </div>
          </a>
        </div>
      </section>

      <Footer hide />
    </>
  );
}
