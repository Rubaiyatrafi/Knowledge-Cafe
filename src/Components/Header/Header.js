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
              Knowledge
            </span>
            <span className="text-danger fw-bolder fst-italic">Cafe</span>
          </h1>
          <img className="image" src={img1} alt=""></img>
        </div>
      </nav>
      <hr />
    </div>
  );
};

export default Header;
