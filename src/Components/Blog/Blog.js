import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const { picture, authorImg, authorName, date, description, readTime } =
    props.blog;
  const addToBookmark = props.addToBookmark;

  return (
    <div>
      <img className="images" src={picture} alt="" />
      <div className="d-flex justify-content-between">
        <div>
          <div className="d-flex justify-content-start author">
            <div>
              <img className="authorimg" src={authorImg} alt=""></img>
            </div>
            <div className="ms-5">
              <h6 className="fw-bolder text-danger">{authorName}</h6>
              <p>
                <small className="text-secondary">{date}</small>
              </p>
            </div>
          </div>
          <h3 className="title fw-bold ">{description}</h3>
          <p>
            <small className="text-secondary tag">
              #beginners #programming
            </small>
          </p>
        </div>
        <div>
          <p className="readtime fw-bold">
            {readTime} min to read{" "}
            <button
              onClick={() => addToBookmark(props.blog)}
              className="btn-bookmark"
            >
              <i className="fa-regular fa-bookmark"></i>
            </button>
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-primary">
        Mark as Read
      </button>
      <hr />
    </div>
  );
};

export default Blog;
