import React from "react";
import { LOWSET_PRICE_URL } from "../../../common/constants/common";

const CartItem = props => {
  const items = props.data;
  const itemData = items.map(item => (
    <div className="modal-items" key={item}>
      <img src="/images/products/fruit-n-veg/apple.jpg"></img>
      <div className="modal-items-quantity">
        <div className="product-name">Apple-washinton, Regular, 4 pcs</div>
        <div className="product-info">
          <i className="ion-minus-circled quan-icon"></i>
          <span>1</span>
          <i className="ion-plus-circled quan-icon"></i>
          <i className="ion-android-close icon-close"></i>
          <span>RS.187</span>
          <span className="total-price">RS.187</span>
        </div>
      </div>
    </div>
  ));
  return (
    <>
      {itemData}
      <div className="lowest-price">
        <img src={LOWSET_PRICE_URL} alt="lowest price"></img>
        <span>You won't find cheaper sdsadaanywhere</span>
      </div>
    </>
  );
};
export default CartItem;
