import React from "react";

function BackToTopButton({scrollUp}) {
  return (
    <div>
      <button onClick={scrollUp} className="back-to-top" title="Back to Top">
        <img
          src="/arrow-up.svg"
          alt="Back to Top"
          className="back-to-top__image"
        />
      </button>
    </div>
  );
}

export default BackToTopButton;
