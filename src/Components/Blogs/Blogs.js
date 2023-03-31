import React, { useEffect, useState } from "react";
import "./Blogs.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="main-body">
      <div className="blogs-container">
        <h1>{blogs.length}</h1>
      </div>
      <div className="bookmark-container">
        <h1>Bookmark</h1>
      </div>
    </div>
  );
};

export default Blogs;
