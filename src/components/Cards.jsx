import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import products from "../assets/products/products.json";
import BackToTopButton from "./BackToTopButton";
import MultiActionAreaCard from "./MultiActionAreaCard";

function Cards() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const { productsToDisplay } = useSelector((state) => state);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackToTopButton(window.scrollY > 200);
    });
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Items">
      {!productsToDisplay.length ? (
        <div className="nothingFound">Ups! No tenemos nada con ese nombre. Probá con otra cosa 😊</div>
      ) : (
        productsToDisplay.map((product) => (
          <MultiActionAreaCard key={product.id} product={product} />
        ))
      )}
      {backToTopButton && <BackToTopButton scrollUp={scrollUp} />}
    </div>
  );
}

export default Cards;
