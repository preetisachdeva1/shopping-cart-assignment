import React, { Component } from "react";
import Header from "../../shared/Header";
import { PRODUCT_DETAIL_URL } from "../../../common/constants/common";

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
    fetch("http://localhost:3000/products")
      .then(res => res.json())
      .then(result => {
          this.setState({ isLoaded: true, products: result });
        },
        error => {
          this.setState({ isLoaded: true,  error });
        }
      );
    fetch('http://localhost:3000/categories')
      .then(res => res.json())
      .then((data) => {
        this.setState({ categories: data, isLoaded: true  })
      })
      .catch(error => this.setState({
        isLoaded: true,
        error
      }));
  }
  render() {
    const { error, isLoaded, categories, products } = this.state;
    let productList, categoryList;
    productList = products.map(
      (products, index) => {
        return (
          <div key={products.id} className="product-item">
            <h2>{products.name}</h2>
            <div className="item-wrapper">
              <img src={products.imageURL}/> 
              <div className="prod-descrip">
                {products.description}
              </div>
            </div>
            <div className="item-wrapper-mobile">
              <img src={products.imageURL}/> 
              <div className="item-detail-wrapper">
                <div className="prod-descrip">
                  {products.description}
                </div>
                <div className="buynow-price btn">Buy Now @ Rs.{products.price}</div>
              </div>
            </div>
            <div className="product-price">
              <div className="mrp">MRP Rs.{products.price}</div>
              <div className="btn">Buy Now</div>
            </div>
            <div className="buynow-price btn">Buy Now @ Rs.{products.price}</div>
          </div>
        );
      }
    );
    categoryList = categories.filter(item=>item.enabled).map(
      (category, index) => {
        return (
          <div key={category.id} className="category-name">{category.name}</div>
        )
    });
    return (
      <>
        <Header />
        <section>
          <div className="row">
            <div className="product-container">
              <div className="category-block">
                {categoryList}
              </div>
              <div className="category-list">{productList}</div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default ProductDetail;
