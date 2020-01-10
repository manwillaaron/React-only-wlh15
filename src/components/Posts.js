import React from "react";

export default function Posts({ title, content, img, deletePost , id }) {
  return (
    <div>
      <h3>{title}</h3>
      <image src={img} />
      <p>{content}</p>
      <button onClick={()=>deletePost(id)}>X</button>
    </div>
  );
}
