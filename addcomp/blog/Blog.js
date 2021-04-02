import React from "react";
import "./blog.css";
const Blog = ({ blogArray }) => {
  return (
    <div className="outerDiv">
      <div className="blogOutDiv">
        {blogArray.map((currentElement) => {
          return (
            <div key={currentElement.id}>
              <div className="newBlog">
                <div>
                  <p className="title">{currentElement.title}</p>
                </div>
                <div>
                  <p>{currentElement.time}</p>
                </div>
                <div></div>
                <p className="description">{currentElement.description}</p>

                <div>
                  <p className="author">{currentElement.author}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blog;
