import { useEffect, useRef, useState } from "react";
import usePageInView from "../../hooks/usePageInView";

import "./styles.css";

import netflix from "./netflix.mp4";
import foreground from "./foreground.webp";
import background from "./background.webp";

export default function Section4() {
  const [textAnimation, setTextAnimation] = useState(false);

  const sectionRef = useRef(null);
  const inView = usePageInView(sectionRef);

  useEffect(() => {
    const nrc = document.getElementById("nrc");
    const netflixVideo = document.getElementById("netflix");

    if (inView) {
      document.getElementById("media-container").style.opacity = 0;
      document.getElementById("playback-loader").style.opacity = 1;
      document.getElementById("thumb").style.width = 0;

      netflixVideo.currentTime = 0;
      netflixVideo.play();

      document.getElementById("sec-4").style.opacity = 1;

      nrc.dataset.timeout = setTimeout(() => {
        nrc.style.scale = "100%";
      }, 3210);

      nrc.dataset.timeoutText = setTimeout(() => {
        setTextAnimation(true);
      }, 4000);
      nrc.dataset.timeoutThumb = setTimeout(() => {
        document.getElementById("thumb").style.width = "100%";
        nrc.dataset.timeoutThumbLoader = setTimeout(() => {
          document.getElementById("playback-loader").style.opacity = 0;
        }, 9117);
      }, 100);
    } else {
      clearTimeout(nrc.dataset.timeout);
      clearTimeout(nrc.dataset.timeoutText);
      clearTimeout(nrc.dataset.timeoutThumb);
      clearTimeout(nrc.dataset.timeoutThumbLoader);

      setTextAnimation(false);
      document.getElementById("sec-4").style.opacity = 0;
      document.getElementById("media-container").style.opacity = 1;
      document.getElementById("thumb").style.width = "0%";
      nrc.style.scale = "var(--scale-nrc)";
      netflixVideo.currentTime = 0;
    }
  }, [inView]);

  return (
    <>
      <section id="sec-4" style={{ display: inView ? "block" : "none" }}>
        <div className="netflix-container" id="nrc">
          <video
            className="netflix-video"
            id="netflix"
            src={netflix}
            muted
            autoPlay
          />

          <div className="netflix-room-container">
            <div
              className="foreground"
              style={{ backgroundImage: `url(${foreground})` }}
            />
            <h2
              style={{
                opacity: textAnimation ? 1 : 0,
                marginBottom: textAnimation ? "var(--mb)" : "-10%",
              }}
            >
              Birb&nbsp;Anywhere
            </h2>
            <div
              className="background"
              style={{ backgroundImage: `url(${background})` }}
            />
          </div>
        </div>

        <div id="playback-loader">
          <div className="thumb" id="thumb" />
        </div>
      </section>
      <div className="dummy bg-dark" ref={sectionRef} />
    </>
  );
}
