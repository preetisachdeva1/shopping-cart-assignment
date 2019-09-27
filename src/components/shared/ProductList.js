import React from "react";
import i18next from "i18next";
import { Link } from 'react-router-dom';
import {
  fetchProducts,
  filterProductsByCategory
} from "../../actions/productAction";
import { connect } from "react-redux";

const ProductList = props => {
  const { data, filterProductsByCategory } = props;
  console.log("filterProductsByCategory", filterProductsByCategory, props.filterProductsByCategory);
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
        <Link to="/product" className="btn" onClick={(e) => filterProductsByCategory(data.id)}>{i18next.t("Explore")} {data.name}</Link>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    filterProductsByCategory: id => dispatch(filterProductsByCategory(id))
  };
};
export default connect('', mapDispatchToProps)(ProductList);

