import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { picture, authorImg, authorName, date, description } = props.blog;
  return (
    <div>
      <img className="images" src={picture} alt="" />
      <div className="d-flex justify-content-start author">
        <div>
          <img className="authorimg" src={authorImg} alt=""></img>
        </div>
        <div className="ms-5">
          <h6 className="fw-bolder">{authorName}</h6>
          <p>
            <small className="text-secondary">{date}</small>
          </p>
        </div>
      </div>
      <h3 className="title fw-bold">{description}</h3>
      <p>
        <small className="text-secondary tag">#beginners #programming</small>
      </p>
      <hr />
    </div>
  );
};

export default Blog;
