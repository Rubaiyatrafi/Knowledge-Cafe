import React from "react";
import "./Read.css";

const Read = ({ read }) => {
  let total = 0;
  for (const blog of read) {
    total = total + blog.readTime;
  }
  return (
    <div className="read">
      <h5>Spent Time on read : {total} min</h5>
    </div>
  );
};

export default Read;
