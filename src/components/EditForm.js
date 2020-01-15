import React from "react";
import "./css/Form.css";

export default function Form(props) {
  return (
    <div className="form-container">
      <input
        className="form-input"
        name="name"
        placeholder="Name"
        onChange={e => props.handleChange(e)}
        value={props.name}
      />
      <input
        className="form-input"
        name="title"
        placeholder="Title"
        onChange={e => props.handleChange(e)}
        value={props.title}
      />
      <input
        className="form-input"
        name="img"
        type="url"
        placeholder="Image"
        onChange={e => props.handleChange(e)}
        value={props.img}
      />
      <textarea
        className="form-input"
        name="content"
        placeholder="Content"
        onChange={e => props.handleChange(e)}
        value={props.content}
      />
      <button onClick={() => props.editPost()}>Submit Edit</button>
    </div>
  );
}
