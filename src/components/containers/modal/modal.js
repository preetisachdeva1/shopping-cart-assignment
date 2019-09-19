import React, { Component } from "react";
import { LOWSET_PRICE_URL } from "../../../common/constants/common";
import CartItem from "../../views/Cart/CartItem";
import { connect } from "react-redux";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      show: false, 
      products: []
    };
    this.modalToggle = this.modalToggle.bind(this);
  }
  modalToggle() {
    this.setState(prevState => ({
      show: !prevState.show
    }));
  }
  render() {
    const { products } = this.props;
    console.log("prodo", products);
    return (
      <>
        <div className={`modal ${this.state.show ? 'show' : 'hide'}`}>
          <div className="modal-content">
            <div className="modal-heading">
              <div>My cart{this.state.show} <span>({products.length} item)</span></div>
              <i className="ion-android-close icon-close"onClick={this.modalToggle}></i>
            </div>
            <div className="modal-wrapper">
              {products.length > 0 ? (
                <CartItem data={products} />
              ) : (
                <div className="cart-no-item">
                  <div className="cart-no-item-heading">
                    No items in your cart
                  </div>
                  <div className="cart-no-item-heading-fav">
                    your favourite items are just click away
                  </div>
                </div>
              )}
            </div>
            {products.length > 0 ? (
              <div className="cart-footer">
                <div className="cart-footer-promo">
                  Promo can be applied on payment page
                </div>
                <div className="cart-footer-checkout">
                  <span>Proceed to checkout</span>
                  <span>Rs.187</span>
                </div>
              </div>
            ) : (
              <div className="cart-footer-checkout cart-footer-start-shopping">
                <span>Start Shopping</span>
              </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => ({
    products: state.cartItem.product
});

export default connect(mapStateToProps)(Modal);
