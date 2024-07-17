import { useContext, useEffect, useRef, useState } from "react";
import usePageInView from "../../hooks/usePageInView";
import ChatBubble from "../../components/chatBubble/ChatBubble";
import usePageExiting from "../../hooks/usePageExiting";

import { NavbarContext } from "../../App";

import "./styles.css";
import "../../aurora.css";

import nodes from "./nodes.svg";
import dot from "./dot.webp";
import kitchen from "./background.webp";
import foreground from "./foreground.webp";

export default function Section6() {
  const ref = useRef(null);
  const chatRef = useRef(null);
  const kitchenRef = useRef(null);
  const mainRef = useRef(null);

  const inView = usePageInView(ref);
  const chatInView = usePageInView(chatRef);
  const kitchenInView = usePageInView(kitchenRef);
  const pageExit = usePageExiting(mainRef);

  const [text2, setText2] = useState(false);

  const { changeTheme } = useContext(NavbarContext);

  useEffect(() => {
    if (kitchenInView) {
      document.getElementById("sec-6").dataset.timeout = setTimeout(() => {
        setText2(true);
      }, 1500);
    } else {
      clearTimeout(document.getElementById("sec-6").dataset.timeout);
      setText2(false);
    }
  }, [kitchenInView]);

  useEffect(() => {
    changeTheme(pageExit ? "dark" : "light");
  }, [pageExit, changeTheme]);

  return (
    <>
      <section id="sec-6" ref={mainRef}>
        <div
          className="topic-container"
          style={{
            opacity: inView ? 0 : 1,
          }}
        >
          <h2>
            Birb is Intelligent <br />
            and Smart
          </h2>
        </div>

        <div
          className="topic-container tc-2"
          style={{
            opacity: inView ? (chatInView ? 0 : 1) : 0,
          }}
        >
          <h3>
            Powered with <br />
            <span className="und-t">
              Natural Language <br />
              Processing
            </span>
            &nbsp;AI to <br />
            Understand You <br />
            Better
          </h3>

          <div className="tc-img-c">
            <img className="nodes" src={nodes} />
            <img className="dot" src={dot} />
          </div>
        </div>

        <div
          className="topic-container tc-3"
          style={{
            opacity: chatInView ? (kitchenInView ? 0 : 1) : 0,
          }}
        >
          <div
            className="bubble-container"
            style={{
              scale: chatInView ? "100%" : "70%",
              opacity: chatInView ? 1 : 0.5,
              transform: chatInView ? "translateY(0%)" : "translateY(100%)",
            }}
          >
            <ChatBubble text="Hey Birb, Turn on Kitchen Lights" />
          </div>
        </div>

        <div
          className="topic-container tc-4"
          style={{
            opacity: kitchenInView ? 1 : 0,
          }}
        >
          <div
            className="foreground kitchen-img"
            style={{
              backgroundImage: `url(${foreground})`,
            }}
          />
          <div
            className="background kitchen-img"
            style={{
              backgroundImage: `url(${kitchen})`,
            }}
          />

          <h2
            style={{
              opacity: text2 ? 0 : 1,
            }}
          >
            Seamlessly Connect <br />
            with IOT Devices
          </h2>

          <h2
            style={{
              opacity: text2 ? 1 : 0,
              marginBottom: text2 ? "7%" : "0%",
            }}
          >
            And Automate <br />
            Your Day
          </h2>
        </div>

        <div
          className="aurora"
          style={{
            opacity: chatInView ? 0 : 1,
          }}
        >
          <div className="circle c1" />
          <div className="circle c2" />
          <div className="circle c3" />
          <div className="circle c4" />
          <div className="circle c5" />
          <div className="circle c6" />
        </div>
      </section>

      <div className={`bb-c ${kitchenInView && "b-1"}`}>
        <ChatBubble text="Hey Birb, Set Refrigerator to Low Power Mode" />
      </div>

      <div className={`bb-c ${kitchenInView && "b-2"}`}>
        <ChatBubble text="Hey Birb, Set Microwave for 15 Minutes" />
      </div>

      <div className={`bb-c ${kitchenInView && "b-3"}`}>
        <ChatBubble text="Hey Birb, Make a Coffee" flip />
      </div>

      <div className="dummy" />
      <div className="dummy" ref={ref} />
      <div className="dummy" ref={chatRef} />
      <div className="dummy" ref={kitchenRef} />
    </>
  );
}
