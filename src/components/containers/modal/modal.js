import React, { Component } from "react";
import CartItem from "../../views/Cart/CartItem";
import { connect } from "react-redux";
import { toggleCartItem, checkoutItems } from "../../../actions/buyItemAction";
import i18next from "i18next";

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
    const {
      products,
      totalItem,
      totalPrice,
      toggleCartItem,
      checkoutItems
    } = this.props;
    return (
      <>
        <section className={`modal ${this.state.show ? "show" : "hide"}`}>
          <section className="modal-content">
            <article  className="modal-heading">
              <header>
                {i18next.t("Mycart")} {this.state.show}{" "}
                <span>
                  ({totalItem} {i18next.t("Item")})
                </span>
              </header>
              <i
                className="ion-android-close icon-close"
                onClick={toggleCartItem}
              ></i>
            </article>
            <article  className="modal-wrapper">
              {products.length > 0 ? (
                <CartItem data={products} />
              ) : (
                <div className="cart-no-item">
                  <div className="cart-no-item-heading">
                    {i18next.t("NoItem")}
                  </div>
                  <div className="cart-no-item-heading-fav">
                    {i18next.t("FavItem")}
                  </div>
                </div>
              )}
            </article>
            {products.length > 0 ? (
              <article  className="cart-footer">
                <div className="cart-footer-promo">
                  {i18next.t("PromoApplied")}
                </div>
                <div className="cart-footer-checkout" onClick={checkoutItems}>
                  <span>{i18next.t("ProceedCheckout")}</span>

                  <span>
                    {i18next.t("RS")}.{totalPrice}
                  </span>
                </div>
              </article>
            ) : (
              <article 
                className="cart-footer-checkout cart-footer-start-shopping"
                onClick={toggleCartItem}
              >
                <span>{i18next.t("StartShopping")}</span>
              </article>
            )}
          </section>
        </section>
      </>
    );
  }
}
const mapStateToProps = state => ({
  products: state.cartItem.product,
  totalItem: state.cartItem.totalItem,
  totalPrice: state.cartItem.totalPrice
});
const mapDispatchToProps = dispatch => {
  return {
    toggleCartItem: () => dispatch(toggleCartItem()),
    checkoutItems: () => dispatch(checkoutItems())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Modal);
