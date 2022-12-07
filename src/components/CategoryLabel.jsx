import React from "react";

function CategoryLabel({category}) {
  return (
    <div>
      <label className="categoryLabel">{category}</label>
    </div>
  );
}

export default CategoryLabel;
