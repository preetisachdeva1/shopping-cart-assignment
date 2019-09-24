import React from "react";
import i18next from "i18next";

const ProductList = props => {
  const { data } = props;
  return (
    <div className="products-container">
      <div className="prod-image">
        <img src={data.imageUrl}/> 
      </div>
      <div className="prod-description">
        <h2>{data.name}</h2>
        <p>
          {data.description}
        </p>
        <a className="btn" href="#">
        {i18next.t("Explore")} {data.name}
        </a>
      </div>
    </div>
  );
};

export default ProductList;
