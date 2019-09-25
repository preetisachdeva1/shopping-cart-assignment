import React from "react";
import i18next from "i18next";
import { Link } from 'react-router-dom';

const ProductList = props => {
  const { data } = props;
  return (
    <div className="products-container">
      <div className="prod-image">
        <img src={data.imageUrl} alt={data.name}/> 
      </div>
      <div className="prod-description">
        <h2>{data.name}</h2>
        <p>
          {data.description}
        </p>
        <Link to="/product" className="btn">{i18next.t("Explore")} {data.name}</Link>
      </div>
    </div>
  );
};

export default ProductList;
