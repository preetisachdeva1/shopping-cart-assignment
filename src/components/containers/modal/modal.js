import React, { Component } from "react";
import { LOWSET_PRICE_URL } from "../../../common/constants/common";
import CartItem from "../../views/Cart/CartItem";

class Modal extends Component {
  render() {
    const pStyle = {
      border: "1px solid red",
      height: "200px",
      width: "100px"
    };
    const itemsCount = [1, 2, 3, 4,];
    //const data = itemsCount.map(item => <CartItem key={item} />);
    return (
      <>
        <div className="modal">
          <div className="modal-content">
            <div className="modal-heading">
              <span>My cart (1 item)</span>
            </div>
            <div className="modal-wrapper">
              {itemsCount.length > 0 ? <CartItem data={itemsCount}/> 
              :
                <div className="cart-no-item">
                    <div className="cart-no-item-heading">
                        No items in your cart
                    </div>
                    <div className="cart-no-item-heading-fav">
                    your favourite items are just click away
                    </div>
                </div>
              }
             
            </div>
            {itemsCount.length > 0 ? (
            <div className="cart-footer">
                <div className="cart-footer-promo">
                Promo can be applied on payment page
                </div>
                <div className="cart-footer-checkout">
                    <span>
                        Proceed to checkout
                    </span>
                    <span>Rs.187</span>
                </div>
            </div>
            ) : (
                <div className="cart-footer-checkout cart-footer-start-shopping">
                     <span>
                        Start Shopping
                    </span>
                </div>
            )}
          </div>
        </div>
      </>
    );
  }
}
export default Modal;
