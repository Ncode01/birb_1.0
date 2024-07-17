import { useContext, useEffect, useRef } from "react";

import { NavbarContext } from "../../App";

import useObjectInView from "../../hooks/useObjectInView";
import usePageExiting from "../../hooks/usePageExiting";
import usePageScrollPercentage from "../../hooks/usePageScrollPercentage";
import usePageExitPercentage from "../../hooks/usePageExitPercentage";

import "./styles.css";

import coffee from "./coffee.webp";
import echodot from "./echodot.webp";
import iphone from "./iphone.webp";
import leaves from "./leaves.webp";
import macbook from "./macbook.webp";

import iwatchbg from "./iwatch-bg.webp";
import iwatchfg from "./iwatch-fg.webp";

export default function Section2() {
  const containerRef = useRef(null);
  const fixedPageRef = useRef(null);
  const percentageRef = useRef(null);
  const scrollRef = useRef(null);

  const containerVisible = useObjectInView(containerRef);
  const fixedPageState = usePageExiting(fixedPageRef);
  const pagePercentage = usePageScrollPercentage(fixedPageRef);
  const showAnytime = usePageExiting(percentageRef);
  const scrollPercentage = usePageExitPercentage(scrollRef);

  const { changeTheme } = useContext(NavbarContext);

  useEffect(() => {
    if (showAnytime) {
      document.getElementById("anytime").style.opacity = 0;
      setTimeout(() => {
        document.getElementById("meet-the").style.display = "none";
        document.getElementById("anytime").style.display = "inline-block";
        setTimeout(() => {
          document.getElementById("anytime").style.opacity = 1;
        }, 100);
      }, 300);
    } else {
      document.getElementById("meet-the").style.opacity = 0;

      setTimeout(() => {
        document.getElementById("meet-the").style.display = "inline-block";
        document.getElementById("anytime").style.display = "none";
        setTimeout(() => {
          document.getElementById("meet-the").style.opacity = 1;
        }, 100);
      }, 300);
    }
  }, [showAnytime]);

  useEffect(() => {
    changeTheme(fixedPageState ? "light" : "dark");
  }, [fixedPageState, changeTheme]);

  return (
    <>
      <section
        id="sec-2"
        style={{ position: fixedPageState ? "relative" : "sticky" }}
        ref={fixedPageRef}
      >
        <div
          className={`fixed-container ${
            fixedPageState && "fixed-container-active"
          }`}
          style={{ top: `${scrollPercentage * -1}%` }}
        >
          <div className="text-container" ref={containerRef}>
            <h2>
              <span
                className="fade-text"
                style={{
                  opacity: showAnytime ? 0 : 1,
                }}
                id="meet-the"
              >
                Meet&nbsp;the
              </span>
              &nbsp;
              <span className="gradient-text birb-static">Birb</span>
              <span
                className="gradient-text birb-moving"
                style={{ right: `${showAnytime ? 68.3 : 0}%` }}
              >
                Birb
              </span>
              <span
                className="fade-text anytime-text"
                style={{
                  opacity: showAnytime ? 1 : 0,
                }}
                id="anytime"
              >
                Anytime
              </span>
            </h2>
            <p style={{ opacity: `${100 - pagePercentage}%` }}>
              Your own Personal AI Powered Assistant with a huge potential to
              help you with your day-to-day life.
            </p>
          </div>

          <div
            className="iwatch-container"
            style={{ left: `${50 + pagePercentage / 1.5}%` }}
          >
            <img
              src={iwatchfg}
              id="ifw-0"
              className={`image-fragment ${
                containerVisible && "image-fragment-active"
              }`}
            />
            <img
              src={iwatchbg}
              id="ifw-1"
              className={`image-fragment ${
                containerVisible && "image-fragment-active"
              }`}
            />
          </div>
        </div>

        <div className="fragments-container">
          <img
            src={coffee}
            id="if-0"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={echodot}
            id="if-1"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={iphone}
            id="if-2"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={leaves}
            id="if-3"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
          <img
            src={macbook}
            id="if-4"
            className={`image-fragment ${
              containerVisible && "image-fragment-active"
            }`}
          />
        </div>
      </section>
      <div className="dummy white-bg" ref={percentageRef} />
      <div className="dummy white-bg" ref={scrollRef} />
    </>
  );
}
