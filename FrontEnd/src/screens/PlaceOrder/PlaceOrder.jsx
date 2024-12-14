import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "./PlaceOrder.css";
import { StoreContext } from "../../context/storecontext";

const PlaceOrder = () => {
  const navigate = useNavigate(); // Hook to navigate
  const { getTotalCartAmount } = useContext(StoreContext);
  const [deliveryInfo, setDeliveryInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    zipCode: "",
    country: "",
    phone: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryInfo({ ...deliveryInfo, [name]: value });
  };

  const handleProceedToPayment = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log("Delivery Info:", deliveryInfo);
    navigate("/payment"); // Navigate to payment page
  };

  const deliveryFee = getTotalCartAmount() === 0 ? 0 : 29;
  const total = getTotalCartAmount() + deliveryFee;

  return (
    <div className="place-order">
      <div className="delivery-info">
        <h2>Delivery Information</h2>
        <form onSubmit={handleProceedToPayment}>
          <div className="row">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={deliveryInfo.firstName}
              onChange={handleChange}
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={deliveryInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email address"
            value={deliveryInfo.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="street"
            placeholder="Street"
            value={deliveryInfo.street}
            onChange={handleChange}
          />
          <div className="row">
            <input
              type="text"
              name="zipCode"
              placeholder="Zip Code"
              value={deliveryInfo.zipCode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="country"
              placeholder="Country"
              value={deliveryInfo.country}
              onChange={handleChange}
            />
          </div>
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            value={deliveryInfo.phone}
            onChange={handleChange}
          />
        </form>
      </div>
      <div className="cart-totals">
        <h2>Cart Totals</h2>
        <div className="cart-total-details">
          <p>Subtotal</p>
          <p>&#8377;{getTotalCartAmount()}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Delivery Fee</p>
          <p>&#8377;{deliveryFee}</p>
        </div>
        <hr />
        <div className="cart-total-details">
          <p>Total</p>
          <p>&#8377;{total}</p>
        </div>
        <hr />
        <br />
        <button onClick={handleProceedToPayment}>
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
