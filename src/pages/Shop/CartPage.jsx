import React, { useEffect, useState } from "react";
import PageHeader from "../../components/PageHeader";
import { Link } from "react-router-dom";
import delImgUrl from "../../assets/images/shop/del.png";
import CheckoutPage from "./CheckoutPage";

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Fetch cart items from local storage
    const storedCartItems = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCartItems);
  }, []);

  // Calculate the total price for each item in the cart
  const calculateTotalPrice = (item) => {
    return item.price * item.quantity;
  };

  // Handle quantity increase
  const handleIncrease = (item) => {
    item.quantity += 1;
    setCartItems([...cartItems]);
    // Update local storage with the new cart items
    localStorage.setItem("cart", JSON.stringify(cartItems));
  };

  // Handle quantity decrease
  const handleDecrease = (item) => {
    if (item.quantity > 1) {
      item.quantity -= 1;
      setCartItems([...cartItems]);

      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    } else {
      // If quantity is already 1, don't decrease further
      item.quantity = 1;
      setCartItems([...cartItems]);
      
      // Update local storage with the new cart items
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  };

  // Handle item removal
  const handleRemoveItem = (item) => {
    // Filter out the item to be removed
    const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);
    // Update the state with the new cart
    setCartItems(updatedCart);
    // Update local storage with the updated cart
    updateLocalStorage(updatedCart);
  };

  // Update local storage with the cart items
  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  // Calculate the cart subtotal
  const cartSubtotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item);
  }, 0);

  // Calculate the order total
  const orderTotal = cartSubtotal;


  return (
    <div>
      <PageHeader title={"Shop Cart"} curPage={"Cart Page"} />
      <div className="shop-cart padding-tb">
        <div className="container">
          <div className="section-wrapper">
            {/* cart top */}
            <div className="cart-top">
              <table>
                <thead>
                  <tr>
                    <th className="cat-product">Product</th>
                    <th className="cat-price">Price</th>
                    <th className="cat-quantity">Quantity</th>
                    <th className="cat-toprice">Total</th>
                    <th className="cat-edit">Edit</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map((item, indx) => (
                    <tr key={indx}>
                      <td className="product-item cat-product">
                        <div className="p-thumb">
                          <Link to="/shop-single">
                            <img src={`${item.img}`} alt="" />
                          </Link>
                        </div>
                        <div className="p-content">
                          <Link to="/shop-single">{item.name}</Link>
                        </div>
                      </td>
                      <td className="cat-price">${item.price}</td>
                      <td className="cat-quantity">
                        <div className="cart-plus-minus">
                          <div
                            className="dec qtybutton"
                            onClick={() => handleDecrease(item)}
                          >
                            -
                          </div>
                          <input
                            className="cart-plus-minus-box"
                            type="text"
                            name="qtybutton"
                            value={item.quantity}
                          />
                          <div
                            className="inc qtybutton"
                            onClick={() => handleIncrease(item)}
                          >
                            +
                          </div>
                        </div>
                      </td>
                      <td className="cat-toprice">
                        ${calculateTotalPrice(item)}
                      </td>
                      <td className="cat-edit">
                        <a href="#" onClick={() => handleRemoveItem(item)}>
                          <img src={delImgUrl} alt="" />
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* cart bottom */}
            <div className="cart-bottom">
              {/* checkout box */}
              <div className="cart-checkout-box">
                <form className="coupon" action="/">
                  <input
                    type="text"
                    name="coupon"
                    placeholder="Coupon Code..."
                    className="cart-page-input-text"
                  />
                  <input type="submit" value="Apply Coupon" />
                </form>
                <form className="cart-checkout" action="/">
                  <input type="submit" value="Update Cart" />
                  {/* <Link to="/check-out"><input type="submit" value="Proceed to Checkout" /></Link> */}
                  <div>
                    <CheckoutPage />
                  </div>
                </form>
              </div>

              {/* shopping box */}
              <div className="shiping-box">
                <div className="row">
                  {/* shipping  */}
                  <div className="col-md-6 col-12">
                    <div className="calculate-shiping">
                      <h3>Calculate Shipping</h3>
                      <div className="outline-select">
                        <select>
                          <option value="volvo">United Kingdom (UK)</option>
                          <option value="saab">Bangladesh</option>
                          <option value="saab">Pakisthan</option>
                          <option value="saab">India</option>
                          <option value="saab">Nepal</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <div className="outline-select shipping-select">
                        <select>
                          <option value="volvo">State/Country</option>
                          <option value="saab">Dhaka</option>
                          <option value="saab">Benkok</option>
                          <option value="saab">Kolkata</option>
                          <option value="saab">Kapasia</option>
                        </select>
                        <span className="select-icon">
                          <i className="icofont-rounded-down"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        name="coupon"
                        placeholder="Postcode/ZIP"
                        className="cart-page-input-text"
                      />
                      <button type="submit">Update Total</button>
                    </div>
                  </div>

                  {/* cart total */}
                  <div className="col-md-6 col-12">
                    <div className="cart-overview">
                      <h3>Cart Totals</h3>
                      <ul className="lab-ul">
                        <li>
                          <span className="pull-left">Cart Subtotal</span>
                          <p className="pull-right">$ {cartSubtotal}</p>
                        </li>
                        <li>
                          <span className="pull-left">
                            Shipping and Handling
                          </span>
                          <p className="pull-right">Free Shipping</p>
                        </li>
                        <li>
                          <span className="pull-left">Order Total</span>
                          <p className="pull-right">
                            $ {orderTotal.toFixed(2)}
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
