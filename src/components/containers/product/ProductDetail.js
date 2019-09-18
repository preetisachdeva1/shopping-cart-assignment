import React, { Component } from "react";
import Header from "../../shared/Header";
import { connect } from "react-redux";
import {
  fetchProducts,
  filterProductsByCategory
} from "../../../actions/productAction";
import { fetchCategory } from "../../../actions/categoryAction";

class ProductDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      isLoaded: false,
      products: []
    };
  }
  componentDidMount() {
    this.props.fetchProducts();
    if (!this.props.categories.length) {
      this.props.fetchCategory();
    }
  }
  render() {
    const {
      categories,
      products,
      filterProductsByCategory,
      categoryId
    } = this.props;
    const { error, isLoaded } = this.state;
    let productList, categoryList;
    productList = products
      .filter(item => item.category == categoryId || categoryId === "")
      .map((products, index) => {
        return (
          <div key={products.id} className="product-item">
            <h2>{products.name}</h2>
            <div className="item-wrapper">
              <img src={products.imageURL} />
              <div className="prod-descrip">{products.description}</div>
            </div>
            <div className="item-wrapper-mobile">
              <img src={products.imageURL} />
              <div className="item-detail-wrapper">
                <div className="prod-descrip">{products.description}</div>
                <div className="buynow-price btn">
                  Buy Now @ Rs.{products.price}
                </div>
              </div>
            </div>
            <div className="product-price">
              <div className="mrp">MRP Rs.{products.price}</div>
              <div className="btn">Buy Now</div>
            </div>
            <div className="buynow-price btn">
              Buy Now @ Rs.{products.price}
            </div>
          </div>
        );
      });
    categoryList = categories
      .filter(item => item.enabled)
      .map((category, index) => {
        return (
          <div
            key={category.id}
            className={`category-name ${
              category.id == categoryId ? "selected-link" : ""
            }`}
            onClick={() => filterProductsByCategory(category.id)}
          >
            {category.name}
          </div>
        );
      });
    return (
      <>
        <Header />
        <section>
          <div className="row">
            <div className="product-container">
              <div className="category-block">{categoryList}</div>
              <div className="category-list">{productList}</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

const mapStateToProps = state => ({
  categories: state.category.items,
  loading: state.category.loading,
  error: state.category.error,
  products: state.products.items,
  categoryId: state.products.categoryId
});
const mapDispatchToProps = dispatch => {
  return {
    // dispatching actions returned by action creators
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategory: () => dispatch(fetchCategory()),
    filterProductsByCategory: id => dispatch(filterProductsByCategory(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
