import React from "react";

export default function OpinionCard({ title, author, image }) {
  return (
    <div className="opinion-element-container">
      <a href="#" className="opinion-element-title">{title}</a>
      <div className="opinion-image-container">
        <div className="opinion-element-text">
          <span className="author-pre">POR</span>
          <span className="author">{author}</span>
        </div>
        <div className="opinion-image">
          <div className="opinion-image-div" style={{ backgroundImage: `url(${image})` }} />
        </div>
      </div>
    </div>
  );
}
