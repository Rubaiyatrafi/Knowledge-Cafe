import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const addToBookmark = (blog) => {
    console.log(blog);
  };

  return (
    <div className="main-body m-5 p-3">
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog key={blog.id} blog={blog} addToBookmark={addToBookmark}></Blog>
        ))}
      </div>
      <div className="bookmark-container">
        <h1>Spent Time on read</h1>
      </div>
    </div>
  );
};

export default Blogs;
