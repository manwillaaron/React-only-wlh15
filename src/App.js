import React from "react";
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Form from "./components/Form";
import EditForm from "./components/EditForm";
import axios from "axios";

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
    axios.get("http://localhost:4321/api/posts").then(result => this.setState({ posts: result.data }))
  }

  handleChange = e => {
    let { value , name} = e.target;
    this.setState({ [name]: value });
  };

  editPost = () => {
    let { editId, title, img, content, name } = this.state;
    axios
      .put(`http://localhost:4321/api/post/${editId}`, {
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
        });
      });
  };

  toggle = id => {
    console.log(id);
    const editObj = this.state.posts.filter(el => id === el.id);
    console.log(editObj[0].title);
    const { title, content, img, name } = editObj[0];
    this.setState(
      {
        toggleEdit: !this.state.toggleEdit,
        editId: id,
        name: name,
        img: img,
        content: content,
        title: title
      },
      () => console.log(this.state)
    );
  };

  submitPost = () => {
    const { title, img, content, name } = this.state;
    axios
      .post("http://localhost:4321/api/post", { title, img, content, name })
      .then(res => {
        this.setState({ posts: res.data });
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
        <div className="not-header">
          {!this.state.toggleEdit ? (
            <Form
              handleChange={this.handleChange}
              title={this.state.Title}
              img={this.state.img}
              name={this.state.name}
              content={this.state.Content}
              submitPost={this.submitPost}
            />
          ) : (
            <EditForm
              handleChange={this.handleChange}
              title={this.state.title}
              img={this.state.img}
              name={this.state.name}
              content={this.state.content}
              editPost={this.editPost}
            />
          )}
          <div className="posts">
            {this.state.posts.map(el => (
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
          </div>
        </div>
      </div>
    );
  }
}

export default App;
