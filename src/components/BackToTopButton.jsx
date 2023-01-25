import React from "react";
import {useState, useEffect} from "react"

function BackToTopButton({scrollUp}) {
  const [animationState, setAnimationState] = useState("")
  
  useEffect(()=> {
    setAnimationState("zoom-in");
    return () => {setAnimationState("zoom-out")}
  },[])
  
  return (
    <div>
      <button onClick={scrollUp} className={`back-to-top ${animationState}`} title="Back to Top">
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
