import React from "react";
import { useState, useEffect , useRef} from "react";

function BackToTopButton({ scrollUp }) {
  const [animationState, setAnimationState] = useState("zoom-in");
  const [shouldRender, setShouldRender] = useState(false);
  const buttonRef = useRef(null)

  useEffect(() => {
    setShouldRender(true);
    return () => {
      setAnimationState("zoom-out");
      setTimeout(() => {
        setShouldRender(false);
      }, 500);
    };
  }, []);

  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.addEventListener("animationend", () => {
        if (animationState === "zoom-out") {
          setShouldRender(false);
        }
      });
    }
  }, [animationState]);

  if (!shouldRender) {
    return null;
  }

  return (
    <div>
      <button
        onClick={scrollUp}
        className={`back-to-top ${animationState}`}
        title="Back to Top"
        ref={buttonRef}
      >
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
