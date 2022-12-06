import React from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import BackToBackButton from "../components/BackToBackButton";
import SearchAppBar from "../components/SearchAppBar";
import { getSingleProduct } from "../redux/actions";

function ProductDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSingleProduct(id));

    return () => {
      dispatch(getSingleProduct(null));
    };
  }, []);

  const { singleProduct } = useSelector((state) => state);

  return (
    <div>
      <SearchAppBar />
      <BackToBackButton />
      {singleProduct ? (
        <div>{singleProduct.name}</div>
      ) : (
        <div>NO SE ENCONTRÓ EL PRODUCTO</div>
      )}

    </div>
  );
}

export default ProductDetail;
