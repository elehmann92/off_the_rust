import React from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";

function Landing() {
  const navigate = useNavigate();
  return (
    <div className="landing-main">
      <div className="landing-container">
        <img className="landing-img" src='/favicon.png' alt="moving out"/>
        <Typography>HAY MUDANZA!!</Typography>
        <Typography>ERGO, SE VENDEN COSITAS</Typography>
        <Typography>SI TE COPA ALGO, DALE AL BOTONCITO DE WHATSAPP EN EL DETALLE DEL PRODUCTO Y CHARLAMOS 😊</Typography>
        <Button
          style={{ backgroundColor: "var(--primaryColor)" }}
          size="large"
          variant="contained"
          onClick={() => navigate("/products")}
        >
          A VEEEEER!
        </Button>
      </div>
    </div>
  );
}

export default Landing;
