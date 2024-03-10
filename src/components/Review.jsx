import React, { useState } from "react";
import Rating from "./Sidebar/rating";

const reviwtitle = "Add a Review";
let ReviewList = [
  {
    imgUrl: "/src/assets/images/instructor/01.jpg",
    imgAlt: "Client thumb",
    name: "Ganelon Boileau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/02.jpg",
    imgAlt: "Client thumb",
    name: "Morgana Cailot",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/03.jpg",
    imgAlt: "Client thumb",
    name: "Telford Bois",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
  {
    imgUrl: "/src/assets/images/instructor/04.jpg",
    imgAlt: "Client thumb",
    name: "Cher Daviau",
    date: "Posted on Jun 10, 2022 at 6:57 am",
    desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
  },
];

const Review = () => {
  const [reviewShow, setReviewShow] = useState(true);
  return (
    <>
      {" "}
      <ul
        className={`review-nav lab-ul ${
          reviewShow ? "RevActive" : "DescActive"
        }`}
      >
        <li onClick={() => setReviewShow(!reviewShow)} className="desc">
          Description
        </li>
        <li onClick={() => setReviewShow(!reviewShow)} className="rev">
          Reviews 4
        </li>
      </ul>
      
      <div
        className={`review-content ${
          reviewShow ? "review-content-show" : "description-show"
        }`}
      >
        <div className="review-showing">
          <ul className="content lab-ul">
            {ReviewList.map((review, i) => (
              <li key={i}>
                <div className="post-thumb">
                  <img src={`${review.imgUrl}`} alt={`${review.imgAlt}`} />
                </div>
                <div className="post-content">
                  <div className="entry-meta">
                    <div className="posted-on">
                      <a href="#">{review.name}</a>
                      <p>{review.date}</p>
                    </div>
                    <Rating />
                  </div>
                  <div className="entry-content">
                    <p>{review.desc}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="client-review">
            <div className="review-form">
              <div className="review-title">
                <h5>{reviwtitle}</h5>
              </div>
              <form action="action" className="row">
                <div className="col-md-4 col-12">
                  <input type="text" name="name" placeholder="Full Name *" />
                </div>
                <div className="col-md-4 col-12">
                  <input type="text" name="email" placeholder="Your Email *" />
                </div>
                <div className="col-md-4 col-12">
                  <div className="rating">
                    <span className="rating-title">Your Rating : </span>
                    <Rating />
                  </div>
                </div>
                <div className="col-md-12 col-12">
                  <textarea
                    rows="8"
                    type="text"
                    name="message"
                    placeholder="Type Here Message"
                  ></textarea>
                </div>
                <div className="col-12">
                  <button className="default-button" type="submit">
                    <span>Submit Review</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="description">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="post-item">
            <div className="post-thumb">
              <img src="/src/assets/images/shop/01.jpg" alt="shop" />
            </div>
            <div className="post-content">
              <ul className="lab-ul">
                <li>Donec non est at libero vulputate rutrum.</li>
                <li>Morbi ornare lectus quis justo gravida semper.</li>
                <li>Pellentesque aliquet, sem eget laoreet ultrices.</li>
                <li>
                  Nulla tellus mi, vulputate adipiscing cursus eu, suscipit id
                  nulla.
                </li>
                <li>Donec a neque libero.</li>
                <li>Pellentesque aliquet, sem eget laoreet ultrices.</li>
                <li>Morbi ornare lectus quis justo gravida semper..</li>
              </ul>
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
};

export default Review;
