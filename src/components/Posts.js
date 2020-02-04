import React from "react";
import "./css/Posts.css";
import { Link } from "react-router-dom";

export default function Posts({ title, content, img, deletePost, id, toggle }) {
  return (
    <div className="post-container">
      <h3>{title}</h3>
      <div className="post-row">
        <img src={img} alt='no image' />
        <p className='content'>{content}</p>
        <button onClick={() => deletePost(id)}>X</button>
        <Link to={`/edit/${id}`}>Edit</Link>
      </div>
    </div>
  );
}
