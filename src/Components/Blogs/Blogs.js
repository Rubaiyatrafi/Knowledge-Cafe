import React, { useEffect, useState } from "react";
import "./Blogs.css";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";
import Read from "../Read/Read";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [read, setRead] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const addToBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  };
  const markAsRead = (blog) => {
    const newRead = [...read, blog];
    setRead(newRead);
  };

  return (
    <div className="main-body m-5 p-3">
      <div className="blogs-container">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            addToBookmark={addToBookmark}
            markAsRead={markAsRead}
          ></Blog>
        ))}
      </div>
      <div className="bookmark-container">
        <div className="stable">
          <Read read={read}></Read>
        </div>
        <div>
          <Bookmark bookmark={bookmark}></Bookmark>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
