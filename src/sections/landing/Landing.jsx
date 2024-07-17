import { useState, useEffect, useRef } from "react";

import "./styles.css";

import foreground from "./foreground.webp";
import background from "./background.webp";

export default function Landing() {
  const [offset, setOffset] = useState([12, 100]);
  const sectionRef = useRef(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const rect = sectionRef.current.getBoundingClientRect();
      if (rect.y + rect.height >= 0) {
        setOffset([
          24 * ((rect.y + rect.height) / rect.height) - 12,
          120 - ((rect.y + rect.height) / rect.height) * 20,
        ]);
      }
    });
  }, []);

  return (
    <>
      <section className="image-container" id="landing">
        <div className="title-container">
          <h1 style={{ marginTop: `${offset[0]}%`, scale: `${offset[1]}%` }}>
            Birb
          </h1>
        </div>
        <div className="description-container">
          <p>Experience what AI has to offer with Just saying “Hello, Birb!”</p>
        </div>
        <div
          className="foreground"
          style={{ backgroundImage: `url(${foreground})` }}
        />
        <div
          className="background"
          style={{ backgroundImage: `url(${background})` }}
        />
      </section>
      <div className="dummy" ref={sectionRef} />
    </>
  );
}
