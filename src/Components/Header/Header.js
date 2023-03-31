import React from "react";
import "./Header.css";
import img1 from "../../images/image1.jpg";

const Header = () => {
  return (
    <div className="m-5 p-5">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <h1>
            <span className="m-3 text-primary fw-bolder fst-italic">
              Knowledge Cafe
            </span>
            <span className="m-3">for</span>
            <span className="text-danger fw-bolder fst-italic">Programmer</span>
          </h1>
          <div>
            <button className="btn fs-5 fw-bolder">Contact Us</button>
            <img className="image" src={img1} alt=""></img>
          </div>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
