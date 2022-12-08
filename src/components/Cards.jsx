import React from "react";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import products from "../assets/products/products.json";
import { setCategoryFilter } from "../redux/actions";
import BackToTopButton from "./BackToTopButton";
import MultiActionAreaCard from "./MultiActionAreaCard";

function Cards() {
  const [backToTopButton, setBackToTopButton] = useState(false);
  const { productsToDisplay, categoryFilter } = useSelector((state) => state);
  const dispatch = useDispatch()

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setBackToTopButton(window.scrollY > 200);
    });
    dispatch(setCategoryFilter(categoryFilter))
  }, [categoryFilter]);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="Items">
      {!productsToDisplay.length ? (
        <div className="nothingFound">UPS! NO TENEMOS NADA CON ESE NOMBRE. PROBÁ CON OTRA BÚSQUEDA 😊</div>
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
