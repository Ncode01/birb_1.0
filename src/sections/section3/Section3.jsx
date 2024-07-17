import { useContext, useEffect, useRef } from "react";

import { NavbarContext } from "../../App";

import usePageInView from "../../hooks/usePageInView";
import usePageScrollPercentage from "../../hooks/usePageScrollPercentage";

import "./styles.css";

import iphone from "./iphone.webp";
import iwatch from "./iwatch.webp";
import echo from "./echo.webp";

export default function Section3() {
  const sectionRef = useRef(null);
  const gradientRef = useRef(null);
  const watchRef = useRef(null);
  const mediaRef = useRef(null);

  const inView = usePageInView(sectionRef);
  const percentage = usePageScrollPercentage(gradientRef);
  const watchState = usePageInView(watchRef);
  const echoPercentagePasses = usePageScrollPercentage(mediaRef, 26);

  const { changeTheme } = useContext(NavbarContext);

  useEffect(() => {
    changeTheme(echoPercentagePasses ? "dark" : "light");
  }, [echoPercentagePasses, changeTheme]);

  return (
    <section id="sec-3" ref={sectionRef}>
      <div
        className="fixed-text-container"
        style={{
          display: inView ? "flex" : "none",
          top: `${
            percentage < 25
              ? 0
              : percentage >= 75
              ? -100
              : -1 * ((percentage - 25) * 2)
          }%`,
        }}
      >
        <h2
          style={{
            scale: `${
              percentage < 25
                ? 100
                : percentage >= 75
                ? 30
                : 100 - (percentage - 25) * 2
            }%`,
          }}
        >
          Just say “Hey Birb”
        </h2>
      </div>

      <div className="gradient-overflow">
        <div
          className="gradient-container"
          ref={gradientRef}
          style={{
            scale: `${
              percentage < 25
                ? 100
                : 100 - ((percentage - 25) * 30) / 50 < 70
                ? 70
                : 100 - ((percentage - 25) * 30) / 50
            }%`,
          }}
        >
          <h3>
            “Hey Birb, How is the <br />
            Weather today?”
          </h3>
          <img className="iphone" src={iphone} />
          <div
            className="gradient-cropper"
            style={{
              height: `${
                percentage < 25
                  ? 300
                  : 300 - ((percentage - 25) * 240) / 45 < 60
                  ? 60
                  : 300 - ((percentage - 25) * 240) / 45
              }vh`,
              borderRadius: `${
                percentage < 50 ? 0 : ((percentage - 50) * 100) / 50
              }px`,
            }}
          >
            <div className="gradient" />
          </div>
        </div>
      </div>

      <div className="iwatch-cropper">
        <div className="iwatch-content-container">
          <div className="iwatch-text-container">
            <h3>
              “Hey Birb, How far <br />
              is Home from <br />
              here?”
            </h3>
          </div>
          <img
            className="iwatch"
            src={iwatch}
            style={{ paddingLeft: watchState ? "var(--wspl)" : "0rem" }}
          />
        </div>
      </div>

      <div
        className="media-container"
        ref={watchRef}
        style={{
          backgroundColor: echoPercentagePasses ? "var(--dark-bg)" : "#fff",
        }}
      >
        <div
          className="media-absolute"
          id="media-container"
          style={{
            position: echoPercentagePasses ? "fixed" : "sticky",
          }}
        >
          <h3
            style={{
              color: echoPercentagePasses ? "#fff" : "var(--dark-heading)",
            }}
          >
            {echoPercentagePasses ? (
              <>
                “Hey Birb, Play Stranger <br />
                Things on Netflix”
              </>
            ) : (
              <>
                “Hey Birb, Play Sweet <br />
                Child O&apos; Mine”
              </>
            )}
          </h3>
          <p>
            {echoPercentagePasses
              ? "*Netflix is a Trademark of Netflix, Inc."
              : "*Requires a Third party Music Service Provider"}
          </p>
        </div>
      </div>

      <div className="echo-container" ref={mediaRef}>
        <img className="echo-main" src={echo} />
      </div>

      <div className="dummy" />
    </section>
  );
}
