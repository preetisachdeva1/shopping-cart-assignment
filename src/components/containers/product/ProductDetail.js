import React, { Component } from "react";
import Header from "../../shared/Header";
import { connect } from "react-redux";
import {
  fetchProducts,
  filterProductsByCategory
} from "../../../actions/productAction";
import { fetchCategory } from "../../../actions/categoryAction";
import { addProductAction } from "../../../actions/buyItemAction";
import i18next from "i18next";
import Footer from "../../shared/Footer";

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
      categoryId,
      addProductAction
    } = this.props;
    //const { error, isLoaded } = this.state;
    let productList, categoryList;
    productList = products
      .filter(item => item.category === categoryId || categoryId === "")
      .map((products, index) => {
        return (
          <article key={products.id} className="product-item">
            <h2>{products.name}</h2>
            <div className="item-wrapper">
              <img src={products.imageURL} alt={products.name} />
              <div className="prod-descrip">{products.description}</div>
            </div>
            <div className="item-wrapper-mobile">
              <img src={products.imageURL} alt={products.name} />
              <div className="item-detail-wrapper">
                <div className="prod-descrip">{products.description}</div>
                <div
                  className="btn-primary btn"
                  onClick={() => addProductAction(products.id)}
                >
                  {i18next.t("BuyNowPrice")}.{products.price}
                </div>
              </div>
            </div>
            <div className="product-price">
              <div className="mrp">
                {i18next.t("BuyRs")}.{products.price}
              </div>
              <a href="#"
                className="btn"
                onClick={() => addProductAction(products.id)}
              >
                {i18next.t("BuyNow")}
              </a>
            </div>
            <div
              className="btn-primary btn"
              onClick={() => addProductAction(products.id)}
            >
              {i18next.t("BuyNowPrice")}.{products.price}
            </div>
          </article>
        );
      });
    categoryList = categories
      .filter(item => item.enabled)
      .map((category, index) => {
        return (
          <li
            key={category.id}
            className={`category-name ${
              category.id === categoryId ? "selected-link" : ""
              }`}
            onClick={() => filterProductsByCategory(category.id)}
          >
            {category.name}
          </li>
        );
      });
    return (
      <>
        <Header />
        <section className="row product-container">
          <aside className="category-block">
            <nav>
              <ul>
                {categoryList}
              </ul>
            </nav>
          </aside>
          <section className="category-list">{productList}</section>
          {/* <div className="select">
            <select onChange={(e) => filterProductsByCategory(e.target.value)}>
              <option value="">Select category</option>

              {this.props.categories
            .filter(category => category.enabled)
            .map(category => (
                <option value={category.id} key={category.id}>{category.name}</option> ))}
              </select>
            </div> */}
        </section>
        <Footer />
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
    fetchProducts: () => dispatch(fetchProducts()),
    fetchCategory: () => dispatch(fetchCategory()),
    filterProductsByCategory: id => dispatch(filterProductsByCategory(id)),
    addProductAction: id => dispatch(addProductAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductDetail);
