import React from "react";
import { LOWSET_PRICE_URL } from "../../../common/constants/common";
import { addProductAction, removeProductAction } from "../../../actions/buyItemAction";
import { connect } from "react-redux";
import i18next from "i18next";

class CartItem extends React.Component {
  render() {
    const { cartItem, addProductAction, removeProductAction } = this.props;
    const itemData = cartItem.product.map((item, index) => (
      <div className="modal-items" key={index}>
        <img src="/images/products/fruit-n-veg/apple.jpg"></img>
        <div className="modal-items-quantity">
          <div className="product-name">{item.product.name}</div>
          <div className="product-info">
            <i className="ion-minus-circled quan-icon" onClick={() => removeProductAction(item.product.id)}></i>
            <span>{item.quantity}</span>
            <i
              onClick={() => addProductAction(item.product.id)}
              className="ion-plus-circled quan-icon"
            ></i>
            <i className="ion-android-close icon-close"></i>
            <span>{i18next.t("RS")} .{item.product.price}</span>
            <span className="total-price">
            {i18next.t("RS")} .{item.product.price * item.quantity}
            </span>
          </div>
        </div>
      </div>
    ));
    return (
      <>
        {itemData}
        <div className="lowest-price">
          <img src={LOWSET_PRICE_URL} alt="lowest price"></img>
          <span>{i18next.t("LowestPrice")}</span>
        </div>
      </>
    );
  }
}
const mapStateToProps = state => {
  return {
    cartItem: state.cartItem
  };
};
const mapDispatchToProps = dispatch => {
  return {
    addProductAction: id => dispatch(addProductAction(id)),
    removeProductAction:id  => dispatch(removeProductAction(id))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartItem);
