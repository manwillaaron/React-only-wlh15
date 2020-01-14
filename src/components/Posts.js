import React from "react";
import "./css/Posts.css";

export default function Posts({ title, content, img, deletePost, id }) {
  return (
    <div className="post-container">
      <h3>{title}</h3>
      <div class="post-row">
        <img src={img} alt='no image' />
        <p className='content'>{content}</p>
        <button onClick={() => deletePost(id)}>X</button>
      </div>
    </div>
  );
}
