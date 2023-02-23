import React from "react";
// import Hamburger_placeholder from "../assets/Hamburger_placeholder.png";

function Title() {
  return (
    <div className="Title">
      <h1>Fors</h1>
      <svg
        width="54"
        height="15"
        viewBox="0 0 54 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M23.88 7.12C14.3025 17.0597 9.35854 16.0437 1 7.12"
          stroke="white"
        />
        <circle cx="24.7333" cy="6.73333" r="1.23333" stroke="white" />
        <path
          d="M50.88 8.07892C41.3025 -1.86077 36.3585 -0.844767 28 8.07892"
          stroke="white"
        />
        <circle
          cx="1.73333"
          cy="1.73333"
          r="1.23333"
          transform="matrix(1 0 0 -1 50 10.1989)"
          stroke="white"
        />
        <path d="M22 4C14.0466 12.4248 9.94109 11.5636 3 4" stroke="white" />
        <circle cx="22.7333" cy="3.73333" r="1.23333" stroke="white" />
        <path
          d="M49 11.1989C41.0466 2.77412 36.9411 3.63528 30 11.1989"
          stroke="white"
        />
        <circle
          cx="1.73333"
          cy="1.73333"
          r="1.23333"
          transform="matrix(1 0 0 -1 48 13.4667)"
          stroke="white"
        />
      </svg>
      <div>
        {/* <img src={Hamburger_placeholder} alt="Placeholder for hamburger menu" /> */}
      </div>
    </div>
  );
}

export default Title;
