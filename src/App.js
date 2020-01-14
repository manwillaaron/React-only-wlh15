import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from "./components/Form";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      title: "",
      img: "",
      content: "",
      id: 1
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = e => {
    let { value } = e.target;
    this.setState({ [e.target.name]: value });
  };

  submitPost = () => {
    const { title, img, content, id, posts } = this.state;
    this.setState({
      posts: [
        {
          id,
          title,
          img,
          content
        },
        ...posts
      ],
      id: id + 1,
      title: "",
      img: "",
      content: ""
    });
  };

  deletePost = id => {
    const filteredArr = this.state.posts.filter(el => el.id !== id);
    this.setState({ posts: filteredArr });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <div className='not-header'>
          <Form
            handleChange={this.handleChange}
            title={this.state.title}
            img={this.state.img}
            content={this.state.content}
            submitPost={this.submitPost}
          />
          <div className='posts'>

          {this.state.posts.map(el => (
            <Posts
            id={el.id}
            title={el.title}
            img={el.img}
            content={el.content}
            deletePost={this.deletePost}
            />
            ))}
            </div>
        </div>
      </div>
    );
  }
}

export default App;
