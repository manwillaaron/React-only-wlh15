import React, {Component} from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Routes from './Routes'
import axios from "axios"
import {getPosts} from './dux/reducer'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      img: "",
      content: "",
      name: "",
      id: 1,
      toggleEdit: false,
      editId: null
    }
  }

  componentDidMount() {
    console.log(this.props)
    this.props.getPosts()
  }

  handleChange = e => {
    let { value , name} = e.target;
    this.setState({ [name]: value });
  };

  editPost = (obj) => {
    let { id, title, img, content, name } = obj;
    axios
      .put(`http://localhost:4321/api/post/${id}`, {
        title,
        img,
        content,
        name
      })
      .then(res => {
        this.setState({
          posts: res.data,
          editId: null,
          title: "",
          img: "",
          content: "",
          name: "",
          toggleEdit: false
        }, ()=> {
          this.props.getPosts()
        });
      } )  
  };


  submitPost = () => {
    const { title, img, content, name } = this.state;
    axios
      .post("/api/post", { title, img, content, name })
      .then(res => {
        this.props.getPosts()
      });
  };

  deletePost = id => {
    let postsF = this.state.posts.filter(el => el.id !== id)
    axios.delete(`/api/post/${id}`).then(res => this.props.getPosts()).catch(err=> alert('was not able to delete post'))
    this.setState({ posts:  postsF});
  };

  render() {
    console.log('render', this.props);
    return (
      <div className="App">
        <Header />
        <div className="not-header">
          <Routes 
             handleChange={this.handleChange}
             title={this.state.title}
             img={this.state.img}
             name={this.state.name}
             content={this.state.content}
             editPost={this.editPost}
             submitPost={this.submitPost}
          />
          {/* <div className="posts">
            <Link to='/add'>Add Post</Link>
            {this.props.postState.posts.map(el => (
              <Posts
                key={el.id}
                id={el.id}
                title={el.title}
                img={el.img}
                content={el.content}
                deletePost={this.deletePost}
                toggle={this.toggle}
              />
            ))}
          </div> */}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    ...state
  }
}

export default connect(mapStateToProps, {getPosts})(App);
