import PropTypes from "prop-types";

import "./styles.css";

import logo from "./logo.svg";

export default function ChatBubble({ text, flip = false, className = "" }) {
  return (
    <div className={`bubble ${className}`}>
      <img className="logo-svg" src={logo} />
      <p>{text}</p>
      <svg
        className={flip ? "point fp" : "point"}
        width="38"
        height="20"
        viewBox="0 0 38 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0.5 19.5L9.5 0H37.5L0.5 19.5Z" fill="white" />
      </svg>
    </div>
  );
}

ChatBubble.propTypes = {
  text: PropTypes.string.isRequired,
  flip: PropTypes.bool,
  className: PropTypes.string,
};
