import React from "react";
import { useNavigate } from "react-router-dom";

function BackToBackButton() {
  const navigate = useNavigate()
  return (
    <div>
      <button onClick={() => navigate('/products')} className="back-to-back" title="Back to Back">
        <img
          src="/arrow-up.svg"
          alt="Back to Back"
          className="back-to-back__image"
        />
      </button>
    </div>
  );
}

export default BackToBackButton;
