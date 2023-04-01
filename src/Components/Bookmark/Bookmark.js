import React, { useState } from "react";
import "./Bookmark.css";

const Bookmark = ({ bookmark }) => {
  // const  [new , setNew]=useState([]);

  let bookmarkAsRead = [];
  for (const blog of bookmark) {
    bookmarkAsRead = [...bookmarkAsRead, blog.description];
  }

  return (
    <div className="bookmark">
      <div>
        <h5>Bookmarked Blogs : {bookmark.length}</h5>
        {/* <h3 className="bg-danger">{bookmarkAsRead}</h3> */}
        <h6>{bookmarkAsRead}</h6>
      </div>
    </div>
  );
};

export default Bookmark;
