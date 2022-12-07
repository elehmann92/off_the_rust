import React from "react";

function AvailabilityLabel({ product }) {
  return (
    <div>
      <label className={product?.status}>{product?.status}</label>
    </div>
  );
}

export default AvailabilityLabel;
