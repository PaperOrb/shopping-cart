import { useContext } from "react";
import { CartContext } from "../App";

const OrderDetails = () => {
  const { quantity, subTotal } = useContext(CartContext);

  return (
    <div className="order-details">
      <h3>Order Summary:</h3>
      <div>Quantity: {quantity}</div>
      <div>Tax: $0.00</div>
      <div>Shipping: $0.00</div>
      <div>Subtotal: ${subTotal()}</div>
    </div>
  );
};

export default OrderDetails;
