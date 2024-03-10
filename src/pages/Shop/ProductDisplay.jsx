/* eslint-disable react/prop-types */
import React, { useState } from "react";
import { Link } from "react-router-dom";
const desc =
  "Energistia an deliver atactica metrcs after avsionary Apropria trnsition enterpris an sources applications emerging 	psd template.";

const ProductDisplay = ({ item }) => {
  const { id, img, price, name, quantity, seller } = item;
  const [prequantity, setQuantity] = useState(quantity);
  const [coupon, setCoupon] = useState("");
  const [size, setSize] = useState("Select Size");
  const [color, setColor] = useState("Select Color");

  const handleDecrease = () => {
    if (prequantity > 1) {
      setQuantity(prequantity - 1);
    }
  };

  const handleIncrease = () => {
    setQuantity(prequantity + 1);
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleColorChange = (e) => {
    setColor(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object representing the product to be added to the cart
    const product = {
      id: id,
      img: img,
      name: name,
      price: price, 
      quantity: prequantity,
      size: size,
      color: color,
      coupon: coupon,
    };

    // Retrieve existing cart items from local storage or initialize an empty array
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    // Check if the product with the same ID is already in the cart
    const existingProductIndex = existingCart.findIndex((item) => item.id === id);

    if (existingProductIndex !== -1) {
      // Product already in the cart; update quantity
      existingCart[existingProductIndex].quantity += prequantity;
    } else {
      // Product not in the cart; add it
      existingCart.push(product);
    }

    // Update the local storage with the updated cart items
    localStorage.setItem("cart", JSON.stringify(existingCart));

    // Reset form fields and quantity
    setQuantity(1);
    setSize("Select Size");
    setColor("Select Color");
    setCoupon("");

    // You can add further logic, such as displaying a confirmation message.
  };

  return (
    <div>
      <div>
        <h4>{name}</h4>
        <p className="rating">
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          <i className="icofont-star"></i>
          (3 review)
        </p>
        <h4>${price}</h4>
        <h6>{seller}</h6>
        <p>{desc}</p>
      </div>
      {/* Single Product Cart Component here */}
      <div>
      <form onSubmit={handleSubmit}>
      <div className="select-product size">
        <select value={size} onChange={handleSizeChange}>
          <option>Select Size</option>
          <option>SM</option>
          <option>MD</option>
          <option>LG</option>
          <option>XL</option>
          <option>XXL</option>
        </select>
        <i className="icofont-rounded-down"></i>
      </div>
      <div className="select-product color">
        <select value={color} onChange={handleColorChange}>
          <option>Select Color</option>
          <option>Pink</option>
          <option>Ash</option>
          <option>Red</option>
          <option>White</option>
          <option>Blue</option>
        </select>
        <i className="icofont-rounded-down"></i>
      </div>
      <div className="cart-plus-minus">
        <div onClick={handleDecrease} className="dec qtybutton">
          -
        </div>
        <input
          className="cart-plus-minus-box"
          type="text"
          name="qtybutton"
          value={prequantity}
          onChange={(e) => setQuantity(parseInt(e.target.value, 10))}
        />
        <div className="inc qtybutton" onClick={handleIncrease}>
          +
        </div>
      </div>
      <div className="discount-code mb-2">
        <input
          type="text"
          placeholder="Enter Discount Code"
          onChange={(e) => setCoupon(e.target.value)}
        />
      </div>
      <button type="submit" className="lab-btn">
        <span>Add To Cart</span>
      </button>

      <Link to="/cart-page" className="lab-btn bg-primary">
        <span>Check Out</span>
      </Link>
    </form>
      </div>
    </div>
  );
};

export default ProductDisplay;
