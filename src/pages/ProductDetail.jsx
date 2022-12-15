import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BackToBackButton from "../components/BackToBackButton";
import { Carousel } from "../components/JoesCarousel";
import SearchAppBar from "../components/SearchAppBar";
import { getSingleProduct } from "../redux/actions";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));
    window.scrollTo(0, 0);
    
    return () => {
      dispatch(getSingleProduct(null));
    };
  }, []);

  const { singleProduct } = useSelector((state) => state);

  return (
    <div>
      <SearchAppBar />
      <BackToBackButton />
      <img
        className="whatsapp_logo"
        src="/whatsapp-logo-11.png"
        alt="whatsapp"
        onClick={() => window.open("https://wa.me/5491155790833", "_blank")}
      />
      <div className="productDetailContainer">
        {singleProduct ? (
          <Carousel product={singleProduct} />
        ) : (
          <div className="nothingFound">UPS! NO SE ENCONTRÓ EL PRODUCTO</div>
        )}
      </div>
    </div>
  );
}

export default ProductDetail;
