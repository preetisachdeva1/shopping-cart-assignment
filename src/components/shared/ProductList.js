import React from "react";
import { PRODUCT_URL } from '../../common/constants/common';

const ProductList = props => {
  const { data } = props;
  console.log("props", props,"data", data.imageUrl);
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
          Explore {data.name}
        </a>
      </div>
    </div>
  );
};

export default ProductList;
