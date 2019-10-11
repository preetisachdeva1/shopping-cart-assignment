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
    let productList, categoryList;
    productList = products
      .filter(item => item.category === categoryId || categoryId === "")
      .map((products, index) => {
        return (
          <article  key={products.id} className="product-list__item">
            <h2>{products.name}</h2>
            <div className="product-list__item__wrapper">
              <figure aria-label="product image">
                <img src={products.imageURL} alt={products.name} />
              </figure>
              <p className="product-list__item__wrapper--description">{products.description}</p>
            </div>
            <div className="product-list__item__wrapper-mobile">
              <img src={products.imageURL} alt={products.name} />
              <div className="product-list__item__wrapper-mobile--detail">
                <p className="product-list__item__wrapper--description">{products.description}</p>
                <button
                  aria-label="add"
                  className="btn-primary btn"
                  onClick={() => addProductAction(products.id)}
                >
                  {i18next.t("BuyNowPrice")}.{products.price}
                </button>
              </div>
            </div>
            <div className="product-list__item__price">
              <p className="product-list__item__price--mrp">
                {i18next.t("BuyRs")}.{products.price}
              </p>
              <button
                className="btn"
                aria-label="add"
                onClick={() => addProductAction(products.id)}
              >
                {i18next.t("BuyNow")}
              </button>
            </div>
            <p
              className="btn-primary btn"
              onClick={() => addProductAction(products.id)}
            >
              {i18next.t("BuyNowPrice")}.{products.price}
            </p>
          </article>
        );
      });
    categoryList = categories
      .filter(item => item.enabled)
      .map((category, index) => {
        return (
          <li
            key={category.id}
            className={`categories__name ${
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
        <section className="row product">
          <aside className="categories">
            <nav role="navigation">
              <ul>
                {categoryList}
              </ul>
            </nav>
          </aside>
          <section className="product-list">{productList}</section>
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
