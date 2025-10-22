import React from "react";

export default function NewsCard({ image, category, title, source, featured }) {
  return (
    <div className="card-news-container">
      <div className="card-image-container">
        <a href="#">
          <div className="card-image" style={{ backgroundImage: `url(${image})` }}>
            {featured && (
              <div className="play-button">
                <i className="bi bi-play-fill"></i>
              </div>
            )}
          </div>
        </a>
      </div>

      <div className="card-category-container">
        <a href="#">{category}</a>
      </div>

      <div className="card-text-container">
        <a href="#">{title}</a>
      </div>

      <div className="card-footer-container">
        <span>{source}</span> <i className="bi bi-chat-right"></i>
      </div>
    </div>
  );
}
