import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";
import GoogleLogo from "/images/GoogleLogo.png"; // Assuming correct path to GoogleLogo image

const title = "Register Now";
const socialTitle = "Register With Social Media";
const btnText = "Get Started Now";

const Signup = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { signUpWithGmail, createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleRegister = () => {
    signUpWithGmail()
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((error) => console.log(error));
  };

  const handleSignup = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setErrorMessage("Passwords don't match! Please provide correct password");
    } else {
      setErrorMessage("");
      createUser(email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Account Created Successfully!");
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorMessage = error.message;
          console.log(errorMessage);
          alert(errorMessage);
        });
    }
  };

  return (
    <div>
      <div className="login-section padding-tb section-bg">
        <div className="container">
          <div className="account-wrapper">
            <h3 className="title">{title}</h3>
            <form className="account-form" onSubmit={handleSignup}>
              <div className="form-group">
                <input type="text" name="name" placeholder="User Name" />
              </div>
              <div className="form-group">
                <input type="email" name="email" placeholder="Email" />
              </div>
              <div className="form-group">
                <input type="password" name="password" placeholder="Password" />
              </div>
              <div className="form-group">
                <input type="password" name="confirmPassword" placeholder="Confirm Password" />
              </div>
              <div>
                {errorMessage && (
                  <div className="error-message text-danger">{errorMessage}</div>
                )}
              </div>
              <div className="form-group">
                <button className="lab-btn" type="submit">
                  <span>{btnText}</span>
                </button>
              </div>
            </form>
            <div className="account-bottom">
              <span className="d-block cate pt-10">
                Are you a member? <Link to="/login">Login</Link>
              </span>
              <span className="or">
                <span>or</span>
              </span>
              <h5 className="subtitle">{socialTitle}</h5>
              <ul className="lab-ul social-icons justify-content-center">
                <li>
                  <button onClick={handleRegister} className="bgbbg">
                    <img src={GoogleLogo} alt="Google Logo" className="lgogdoogl" />
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
