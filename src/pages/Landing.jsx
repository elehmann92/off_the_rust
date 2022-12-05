import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <div>
      THIS IS LANDING
      <button onClick={() => navigate("/products")}>START BROWSING</button>
    </div>
  );
}

export default Landing;
