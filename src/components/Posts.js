import React, { useEffect } from 'react';
import './css/Posts.css';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';

function Posts({ deletePost, id, reducer, history }) {
  useEffect(() => {
    axios
      .get('/auth/check')
      .then(res => console.log(res.data))
      .catch(err => {
        console.log(err.response)
        // history.push('/')
      });
  }, []);
  console.log(reducer);
  const { posts } = reducer.postState;

  return (
    <div>
      {posts.map(post => (
        <div className="post-container">
          <h3>{post.title}</h3>
          <div className="post-row">
            <img src={post.img} alt="no image" />
            <p className="content">{post.content}</p>
            <button onClick={() => deletePost(id)}>X</button>
            <Link to={`/edit`}>Edit</Link>
          </div>
        </div>
      ))}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    reducer: state
  };
};

export default withRouter(connect(mapStateToProps, null)(Posts));
