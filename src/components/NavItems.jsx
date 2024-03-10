import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from "../contexts/AuthProvider";
import { NavDropdown } from "react-bootstrap";

const NavItems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false); // State to manage profile dropdown

  // check if user is registered
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error);
      });
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* ------ header top: first div ----- */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log In</Link>
          </div>
        </div>
      </div>

      {/* header top ends*/}

      {/* ---header bottom starts */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* logo  */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="logo" width={'80px'}/>
                </Link>
              </div>
            </div>

            {/* menu area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="shop">Shop</Link>
                  </li>
                  <li>
                    <Link to="/blog">Blog</Link>
                  </li>
                  <li>
                    {" "}
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </ul>
              </div>

              {/* users when user available */}
              {user ? (
                <>
                  <div>
                    {user?.photoURL ? (
                      <>
                        <img
                          src={user?.photoURL}
                          className="nav-profile"
                          onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} // Toggle profile dropdown
                        />
                      </>
                    ) : (
                      <img
                        src="/src/assets/images/author/01.jpg"
                        className="nav-profile"
                        onClick={() => setProfileDropdownOpen(!profileDropdownOpen)} // Toggle profile dropdown
                      />
                    )}
                  </div>
                  <NavDropdown
                    id="basic-nav-dropdown"
                    show={profileDropdownOpen} // Show profile dropdown based on state
                    onHide={() => setProfileDropdownOpen(false)} // Close dropdown when clicking outside
                  >
                    <NavDropdown.Item href="#action/3.1" onClick={handleLogout}>
                      Logout
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart-page">
                      Shopping Cart
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/cart-page">Order</NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <>
                  <Link
                    to="/sign-up"
                    className="lab-btn me-3 d-none d-md-block"
                  >
                    <span>Create Account</span>
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log In
                  </Link>
                </>
              )}

              {/* menu toggle btn */}
              <div
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
                onClick={() => setMenuToggle(!menuToggle)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className="ellepsis-bar d-md-none"
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* header bottom ends */}
    </header>
  );
};

export default NavItems;
